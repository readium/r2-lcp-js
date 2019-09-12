// ==LICENSE-BEGIN==
// Copyright 2017 European Digital Reading Lab. All rights reserved.
// Licensed to the Readium Foundation under one or more contributor license agreements.
// Use of this source code is governed by a BSD-style license
// that can be found in the LICENSE file exposed on Github (readium) in the project repository.
// ==LICENSE-END==

import * as debug_ from "debug";
import * as request from "request";
import * as requestPromise from "request-promise-native";
import { JSON as TAJSON } from "ta-json-x";

import { streamToBufferPromise } from "@r2-utils-js/_utils/stream/BufferUtils";

import { LSD } from "../parser/epub/lsd";
import { IDeviceIDManager } from "./deviceid-manager";

import URITemplate = require("urijs/src/URITemplate");

const debug = debug_("r2:lcp#lsd/return");

const IS_DEV = (process.env.NODE_ENV === "development" || process.env.NODE_ENV === "dev");

export async function lsdReturn(
    lsdJSON: any,
    deviceIDManager: IDeviceIDManager): Promise<any> {

    if (lsdJSON instanceof LSD) {
        return lsdReturn_(lsdJSON as LSD, deviceIDManager);
    }

    let lsd: LSD | undefined;
    try {
        lsd = TAJSON.deserialize<LSD>(lsdJSON, LSD);
    } catch (err) {
        debug(err);
        debug(lsdJSON);
        return Promise.reject("Bad LSD JSON?");
    }

    const obj = lsdReturn_(lsd, deviceIDManager);
    return TAJSON.serialize(obj);
}

export async function lsdReturn_(
    lsd: LSD,
    deviceIDManager: IDeviceIDManager): Promise<LSD> {

    if (!lsd) {
        return Promise.reject("LCP LSD data is missing.");
    }
    if (!lsd.Links) {
        return Promise.reject("No LSD links!");
    }

    const licenseReturn = lsd.Links.find((link) => {
        return link.Rel === "return";
    });
    if (!licenseReturn) {
        return Promise.reject("No LSD return link!");
    }

    let deviceID: string;
    try {
        deviceID = await deviceIDManager.getDeviceID();
    } catch (err) {
        debug(err);
        return Promise.reject("Problem getting Device ID !?");
    }

    let deviceNAME: string;
    try {
        deviceNAME = await deviceIDManager.getDeviceNAME();
    } catch (err) {
        debug(err);
        return Promise.reject("Problem getting Device NAME !?");
    }

    let returnURL = licenseReturn.Href;
    if (licenseReturn.Templated) {
        const urlTemplate = new URITemplate(returnURL);
        returnURL = (urlTemplate as any).expand({ id: deviceID, name: deviceNAME }, { strict: true });

        // url = url.replace("{?end,id,name}", ""); // TODO: smarter regexp?
        // url = new URI(url).setQuery("id", deviceID).setQuery("name", deviceNAME).toString();
    }
    if (IS_DEV) {
        debug("RETURN: " + returnURL);
    }

    return new Promise<LSD>(async (resolve, reject) => {

        const failure = (err: any) => {
            reject(err);
        };

        const success = async (response: request.RequestResponse) => {

            if (IS_DEV) {
                Object.keys(response.headers).forEach((header: string) => {
                    debug(header + " => " + response.headers[header]);
                });
            }

            if (response.statusCode && (response.statusCode < 200 || response.statusCode >= 300)) {
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
                    try {
                        const failJson = global.JSON.parse(failStr);
                        if (IS_DEV) {
                            debug(failJson);
                        }
                        failJson.httpStatusCode = response.statusCode;
                        failure(failJson);
                    } catch (jsonErr) {
                        if (IS_DEV) {
                            debug(jsonErr);
                        }
                        failure({ httpStatusCode: response.statusCode, httpResponseBody: failStr });
                    }
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
            const responseStr = responseData.toString("utf8");
            if (IS_DEV) {
                debug(responseStr);
            }
            const responseJson = global.JSON.parse(responseStr);
            if (IS_DEV) {
                debug(responseJson);
            }

            try {
                const newLsd = TAJSON.deserialize<LSD>(responseJson, LSD);
                if (IS_DEV) {
                    debug(newLsd);
                }
                resolve(newLsd);
            } catch (err) {
                debug(err);
                resolve(responseJson);
            }
        };

        const headers = {
            "Accept-Language": "en-UK,en-US;q=0.7,en;q=0.5",
        };

        // No response streaming! :(
        // https://github.com/request/request-promise/issues/90
        const needsStreamingResponse = true;
        if (needsStreamingResponse) {
            request.put({
                headers,
                method: "PUT",
                uri: returnURL,
            })
                .on("response", success)
                .on("error", failure);
        } else {
            let response: requestPromise.FullResponse;
            try {
                // tslint:disable-next-line:await-promise no-floating-promises
                response = await requestPromise({
                    headers,
                    method: "PUT",
                    resolveWithFullResponse: true,
                    uri: returnURL,
                });
            } catch (err) {
                failure(err);
                return;
            }

            await success(response);
        }
    });
}
