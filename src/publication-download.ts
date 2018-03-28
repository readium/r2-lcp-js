// ==LICENSE-BEGIN==
// Copyright 2017 European Digital Reading Lab. All rights reserved.
// Licensed to the Readium Foundation under one or more contributor license agreements.
// Use of this source code is governed by a BSD-style license
// that can be found in the LICENSE file exposed on Github (readium) in the project repository.
// ==LICENSE-END==

import * as fs from "fs";
import * as path from "path";

import { injectFileInZip } from "@utils/zip/zipInjector";
import * as debug_ from "debug";
import * as request from "request";
import * as requestPromise from "request-promise-native";
import { JSON as TAJSON } from "ta-json";

import { LCP } from "./parser/epub/lcp";

const debug = debug_("r2:lcp#publication-download");

export async function downloadEPUBFromLCPL(filePath: string, dir: string, destFileName: string): Promise<string[]> {

    return new Promise<string[]>(async (resolve, reject) => {

        const lcplStr = fs.readFileSync(filePath, { encoding: "utf8" });
        // debug(lcplStr);
        const lcplJson = global.JSON.parse(lcplStr);
        const lcpl = TAJSON.deserialize<LCP>(lcplJson, LCP);
        if (lcpl.Links) {
            const pubLink = lcpl.Links.find((link) => {
                return link.Rel === "publication";
            });
            if (pubLink) {

                const destPathTMP = path.join(dir, destFileName + ".tmp");
                const destPathFINAL = path.join(dir, destFileName);

                const failure = (err: any) => {
                    debug(err);
                    reject(pubLink.Href + " (" + err + ")");
                };

                const success = async (response: request.RequestResponse) => {

                    Object.keys(response.headers).forEach((header: string) => {
                        debug(header + " => " + response.headers[header]);
                    });

                    if (response.statusCode && (response.statusCode < 200 || response.statusCode >= 300)) {
                        failure("HTTP CODE " + response.statusCode);
                        return;
                    }

                    const destStreamTMP = fs.createWriteStream(destPathTMP);
                    response.pipe(destStreamTMP);
                    // response.on("end", () => {
                    // });
                    destStreamTMP.on("finish", () => {

                        const zipError = (err: any) => {
                            debug(err);
                            reject(destPathTMP + " (" + err + ")");
                        };

                        const doneCallback = () => {
                            setTimeout(() => {
                                fs.unlinkSync(destPathTMP);
                            }, 1000);

                            resolve([destPathFINAL, pubLink.Href]);
                        };
                        const zipEntryPath = "META-INF/license.lcpl";

                        injectFileInZip(destPathTMP, destPathFINAL, filePath, zipEntryPath, zipError, doneCallback);
                    });
                };

                // No response streaming! :(
                // https://github.com/request/request-promise/issues/90
                const needsStreamingResponse = true;
                if (needsStreamingResponse) {
                    request.get({
                        headers: {},
                        method: "GET",
                        uri: pubLink.Href,
                    })
                        .on("response", success)
                        .on("error", failure);
                } else {
                    let response: requestPromise.FullResponse;
                    try {
                        // tslint:disable-next-line:await-promise no-floating-promises
                        response = await requestPromise({
                            headers: {},
                            method: "GET",
                            resolveWithFullResponse: true,
                            uri: pubLink.Href,
                        });
                    } catch (err) {
                        failure(err);
                        return;
                    }

                    await success(response);
                }
            }
        }
    });
}
