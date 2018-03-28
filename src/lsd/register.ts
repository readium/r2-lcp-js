// ==LICENSE-BEGIN==
// Copyright 2017 European Digital Reading Lab. All rights reserved.
// Licensed to the Readium Foundation under one or more contributor license agreements.
// Use of this source code is governed by a BSD-style license
// that can be found in the LICENSE file exposed on Github (readium) in the project repository.
// ==LICENSE-END==

import { streamToBufferPromise } from "@utils/stream/BufferUtils";
import * as debug_ from "debug";
import * as request from "request";
import * as requestPromise from "request-promise-native";

import { IDeviceIDManager } from "./deviceid-manager";

import URITemplate = require("urijs/src/URITemplate");

const debug = debug_("r2:lcp#lsd/register");

export async function lsdRegister(
    lsdJson: any,
    deviceIDManager: IDeviceIDManager): Promise<any> {

    if (!lsdJson.links) {
        return Promise.reject("No LSD links!");
    }

    const licenseRegister = lsdJson.links.find((link: any) => {
        return link.rel === "register";
    });
    if (!licenseRegister) {
        return Promise.reject("No LSD register link!");
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

    let doRegister = false;
    if (lsdJson.status === "ready") {
        doRegister = true;
    } else if (lsdJson.status === "active") {

        let deviceIDForStatusDoc: string | undefined;
        try {
            deviceIDForStatusDoc = await deviceIDManager.checkDeviceID(lsdJson.id);
        } catch (err) {
            debug(err);
            // ignore
            // return Promise.reject("xxx");
        }

        if (!deviceIDForStatusDoc) {
            doRegister = true;
        } else if (deviceIDForStatusDoc !== deviceID) {
            debug("LSD registered device ID is different?");
            // this should really never happen ... but let's ensure anyway.
            doRegister = true;
        }
    }

    if (!doRegister) {
        return Promise.reject("No need to LSD register.");
    }

    let registerURL = licenseRegister.href;
    if (licenseRegister.templated === true || licenseRegister.templated === "true") {
        const urlTemplate = new URITemplate(registerURL);
        registerURL = (urlTemplate as any).expand({ id: deviceID, name: deviceNAME }, { strict: true });

        // url = url.replace("{?id,name}", ""); // TODO: smarter regexp?
        // url = new URI(url).setQuery("id", deviceID).setQuery("name", deviceNAME).toString();
    }
    debug("REGISTER: " + registerURL);

    return new Promise<any>(async (resolve, reject) => {
        const failure = (err: any) => {
            reject(err);
        };

        const success = async (response: request.RequestResponse) => {

            Object.keys(response.headers).forEach((header: string) => {
                debug(header + " => " + response.headers[header]);
            });

            if (response.statusCode && (response.statusCode < 200 || response.statusCode >= 300)) {
                failure("HTTP CODE " + response.statusCode);
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
            debug(responseStr);
            const responseJson = global.JSON.parse(responseStr);
            debug(responseJson);

            if (responseJson.status === "active") {
                try {
                    await deviceIDManager.recordDeviceID(responseJson.id);
                } catch (err) {
                    debug(err);
                    // reject(err);
                    // return;
                }
            }

            resolve(responseJson);
        };

        const headers = {
            "Accept-Language": "en-UK,en-US;q=0.7,en;q=0.5",
        };

        // No response streaming! :(
        // https://github.com/request/request-promise/issues/90
        const needsStreamingResponse = true;
        if (needsStreamingResponse) {
            request.post({
                headers,
                method: "POST",
                uri: registerURL,
            })
                .on("response", success)
                .on("error", failure);
        } else {
            let response: requestPromise.FullResponse;
            try {
                // tslint:disable-next-line:await-promise no-floating-promises
                response = await requestPromise({
                    headers,
                    method: "POST",
                    resolveWithFullResponse: true,
                    uri: registerURL,
                });
            } catch (err) {
                failure(err);
                return;
            }

            await success(response);
        }
    });
}
