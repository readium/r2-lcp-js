// ==LICENSE-BEGIN==
// Copyright 2017 European Digital Reading Lab. All rights reserved.
// Licensed to the Readium Foundation under one or more contributor license agreements.
// Use of this source code is governed by a BSD-style license
// that can be found in the LICENSE file exposed on Github (readium) in the project repository.
// ==LICENSE-END==

import * as debug_ from "debug";
import * as moment from "moment";
import * as request from "request";
import * as requestPromise from "request-promise-native";

import { streamToBufferPromise } from "@r2-utils-js/_utils/stream/BufferUtils";

import { LCP } from "../parser/epub/lcp";

// import { StatusEnum } from "../parser/epub/lsd";

const debug = debug_("r2:lcp#lsd/lcpl-update");

const IS_DEV = (process.env.NODE_ENV === "development" || process.env.NODE_ENV === "dev");

export async function lsdLcpUpdate(lcp: LCP): Promise<string> {

    if (!lcp.LSD) {
        return Promise.reject("LCP LSD data is missing.");
    }

    if (lcp.LSD.Updated && lcp.LSD.Updated.License &&
        (lcp.Updated || lcp.Issued)) {
        const updatedLicenseLSD = moment(lcp.LSD.Updated.License);
        const updatedLicense = moment(lcp.Updated || lcp.Issued);
        const forceUpdate = false; // just for testing!
        if (forceUpdate ||
            (updatedLicense.isBefore(updatedLicenseLSD)
            // tslint:disable-next-line:max-line-length
            // TODO: Should we check for this? Is LCP server supposed to deliver non-usable licenses? (e.g. rights.end in the past) Let's do a sanity check on response LCP JSON (see below)
            // tslint:disable-next-line:max-line-length
            // && (lcp.LSD.Status !== StatusEnum.Cancelled && lcp.LSD.Status !== StatusEnum.Expired && lcp.LSD.Status !== StatusEnum.Returned && lcp.LSD.Status !== StatusEnum.Revoked)
            // && (lcp.LSD.Status === StatusEnum.Active || lcp.LSD.Status === StatusEnum.Ready)
            )) {
            if (IS_DEV) {
                debug("LSD license updating...");
            }
            if (lcp.LSD.Links) {
                const licenseLink = lcp.LSD.Links.find((link) => {
                    return link.Rel === "license";
                });
                if (!licenseLink) {
                    return Promise.reject("LSD license link is missing.");
                }

                if (IS_DEV) {
                    debug("OLD LCP LICENSE, FETCHING LSD UPDATE ... " + licenseLink.Href);
                }

                return new Promise<any>(async (resolve, reject) => {

                    const failure = (err: any) => {
                        reject(err);
                    };

                    const success = async (response: request.RequestResponse) => {

                        if (IS_DEV) {
                            Object.keys(response.headers).forEach((header: string) => {
                                debug(header + " => " + response.headers[header]);
                            });
                        }

                        const tryErrorJson = (str: string) => {
                            try {
                                const failJson = global.JSON.parse(str);
                                if (IS_DEV) {
                                    debug(failJson);
                                }
                                failJson.httpStatusCode = response.statusCode;
                                failure(failJson);
                            } catch (jsonErr) {
                                if (IS_DEV) {
                                    debug(jsonErr);
                                }
                                failure({ httpStatusCode: response.statusCode, httpResponseBody: str });
                            }
                        };

                        if (response.statusCode && (response.statusCode < 200 || response.statusCode >= 300)) {
                            // SEE: https://github.com/readium/readium-lcp-server/issues/150#issuecomment-356993350
                            // if (licenseLink.href.indexOf("/licenses/") > 0) {
                            //     licenseLink.href = licenseLink.href.replace("/licenses/",
                            // "/api/v1/purchases/license/");
                            //     debug("TRYING AGAIN: " + licenseLink.href);
                            //     let newRes: any;
                            //     try {
                            //         newRes = await lsdLcpUpdate(lcp); // recursive
                            //     } catch (err) {
                            //         failure(err);
                            //         return;
                            //     }
                            //     resolve(newRes);
                            // } else {
                            //     failure("HTTP CODE " + response.statusCode);
                            // }

                            let failBuff: Buffer;
                            try {
                                failBuff = await streamToBufferPromise(response);
                            } catch (buffErr) {
                                if (IS_DEV) {
                                    debug(buffErr);
                                }
                                failure(response.statusCode);
                                return;
                            }
                            try {
                                const failStr = failBuff.toString("utf8");
                                if (IS_DEV) {
                                    debug(failStr);
                                }
                                tryErrorJson(failStr);
                            } catch (strErr) {
                                if (IS_DEV) {
                                    debug(strErr);
                                }
                                failure(response.statusCode);
                            }
                            return;
                        }

                        let responseData: Buffer;
                        try {
                            responseData = await streamToBufferPromise(response);
                        } catch (err) {
                            reject(err);
                            return;
                        }
                        const lcplStr = responseData.toString("utf8");
                        if (IS_DEV) {
                            debug(lcplStr);
                        }

                        try {
                            const tryLcpJson = global.JSON.parse(lcplStr);
                            // tslint:disable-next-line:max-line-length
                            if (!tryLcpJson.id || !tryLcpJson.issued || !tryLcpJson.provider || !tryLcpJson.encryption || !tryLcpJson.encryption.profile) {
                                if (IS_DEV) {
                                    debug(lcplStr);
                                    debug("NOT AN LCP LICENSE!"); // Some LCP servers respond 200 with error message!
                                }
                                tryErrorJson(lcplStr);
                                return;
                            }
                        } catch (jsonErr) {
                            if (IS_DEV) {
                                debug(jsonErr);
                            }
                            tryErrorJson(lcplStr);
                            return;
                        }

                        resolve(lcplStr);
                    };

                    const headers = {
                        "Accept-Language": "en-UK,en-US;q=0.7,en;q=0.5",
                    };

                    // No response streaming! :(
                    // https://github.com/request/request-promise/issues/90
                    const needsStreamingResponse = true;
                    if (needsStreamingResponse) {
                        request.get({
                            headers,
                            method: "GET",
                            uri: licenseLink.Href,
                        })
                            .on("response", success)
                            .on("error", failure);
                    } else {
                        let response: requestPromise.FullResponse;
                        try {
                            // tslint:disable-next-line:await-promise no-floating-promises
                            response = await requestPromise({
                                headers,
                                method: "GET",
                                resolveWithFullResponse: true,
                                uri: licenseLink.Href,
                            });
                        } catch (err) {
                            failure(err);
                            return;
                        }

                        await success(response);
                    }
                });
            }
        }
    }
    return Promise.reject("No LSD LCP update.");
}
