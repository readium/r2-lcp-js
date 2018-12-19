// ==LICENSE-BEGIN==
// Copyright 2017 European Digital Reading Lab. All rights reserved.
// Licensed to the Readium Foundation under one or more contributor license agreements.
// Use of this source code is governed by a BSD-style license
// that can be found in the LICENSE file exposed on Github (readium) in the project repository.
// ==LICENSE-END==

import { streamToBufferPromise } from "@r2-utils-js/_utils/stream/BufferUtils";
import * as debug_ from "debug";
import * as request from "request";
import * as requestPromise from "request-promise-native";

import { LCP } from "../parser/epub/lcp";
import { IDeviceIDManager } from "./deviceid-manager";
import { lsdLcpUpdate } from "./lcpl-update";
import { lsdRegister } from "./register";

const debug = debug_("r2:lcp#lsd/status-document-processing");

export async function launchStatusDocumentProcessing(
    lcp: LCP,
    deviceIDManager: IDeviceIDManager,
    onStatusDocumentProcessingComplete: (licenseUpdateJson: string | undefined) => void) {

    if (!lcp || !lcp.Links) {
        if (onStatusDocumentProcessingComplete) {
            onStatusDocumentProcessingComplete(undefined);
        }
        return;
    }
    const linkStatus = lcp.Links.find((link) => {
        return link.Rel === "status";
    });
    if (!linkStatus) {
        if (onStatusDocumentProcessingComplete) {
            onStatusDocumentProcessingComplete(undefined);
        }
        return;
    }

    debug(linkStatus);

    const failure = (err: any) => {
        debug(err);
        if (onStatusDocumentProcessingComplete) {
            onStatusDocumentProcessingComplete(undefined);
        }
    };

    const success = async (response: request.RequestResponse) => {

        Object.keys(response.headers).forEach((header: string) => {
            debug(header + " => " + response.headers[header]);
        });

        if (response.statusCode && (response.statusCode < 200 || response.statusCode >= 300)) {
            failure("HTTP CODE " + response.statusCode);

            let d: Buffer;
            try {
                d = await streamToBufferPromise(response);
            } catch (err) {
                return;
            }
            const s = d.toString("utf8");
            debug(s);
            return;
        }

        let responseData: Buffer;
        try {
            responseData = await streamToBufferPromise(response);
        } catch (err) {
            debug(err);
            if (onStatusDocumentProcessingComplete) {
                onStatusDocumentProcessingComplete(undefined);
            }
            return;
        }
        const responseStr = responseData.toString("utf8");

        // https://github.com/readium/readium-lcp-specs/issues/15#issuecomment-358247286
        // application/vnd.readium.lcp.license-1.0+json (LEGACY)
        // application/vnd.readium.lcp.license.v1.0+json (NEW)
        // application/vnd.readium.license.status.v1.0+json (LSD)
        const mime = "application/vnd.readium.license.status.v1.0+json";
        if (response.headers["content-type"] === mime ||
            response.headers["content-type"] === "application/json") {
            debug(responseStr);
        }
        const lsdJson = global.JSON.parse(responseStr);
        debug(lsdJson);

        lcp.LSDJson = lsdJson;

        // debug(lsdJson.id);
        // debug(lsdJson.status); // revoked, returned, cancelled, expired
        // debug(lsdJson.message);
        // if (lsdJson.updated) {
        //     debug(lsdJson.updated.license);
        //     debug(lsdJson.updated.status);
        // }
        // if (lsdJson.links) {
        //     lsdJson.links.forEach((link: any) => {
        //         debug(link.rel); // license, register, return, renew
        //         debug(link.href);
        //         debug(link.type);
        //         debug(link.templated);
        //         debug(link.title);
        //         debug(link.profile);
        //     });
        // }
        // if (lsdJson.potential_rights) {
        //     debug(lsdJson.potential_rights.end);
        // }
        // if (lsdJson.events) {
        //     lsdJson.events.forEach((event: any) => {
        //         debug(event.type);
        //         debug(event.name);
        //         debug(event.timestamp); // ISO 8601 time and date
        //         debug(event.id);
        //     });
        // }

        let licenseUpdateResponseJson: string | undefined;
        try {
            licenseUpdateResponseJson = await lsdLcpUpdate(lsdJson, lcp);
        } catch (err) {
            debug(err);
            // if (onStatusDocumentProcessingComplete) {
            //     onStatusDocumentProcessingComplete();
            // }
            // return;
        }
        if (licenseUpdateResponseJson) {
            if (onStatusDocumentProcessingComplete) {
                onStatusDocumentProcessingComplete(licenseUpdateResponseJson);
            }
            return;
        }

        if (lsdJson.status === "revoked"
            || lsdJson.status === "returned"
            || lsdJson.status === "cancelled"
            || lsdJson.status === "expired") {

            debug("What?! LSD " + lsdJson.status);
            // This should really never happen,
            // as the LCP license should not even pass validation
            // due to passed end date / expired timestamp
            if (onStatusDocumentProcessingComplete) {
                onStatusDocumentProcessingComplete(undefined);
            }
            return;
        }

        let registerResponseJson: any;
        try {
            registerResponseJson = await lsdRegister(lsdJson, deviceIDManager);
            lcp.LSDJson = registerResponseJson;
        } catch (err) {
            debug(err);
        }
        if (onStatusDocumentProcessingComplete) {
            onStatusDocumentProcessingComplete(undefined);
        }
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
            uri: linkStatus.Href,
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
                uri: linkStatus.Href,
            });
        } catch (err) {
            failure(err);
            return;
        }

        await success(response);
    }
}
