// ==LICENSE-BEGIN==
// Copyright 2017 European Digital Reading Lab. All rights reserved.
// Licensed to the Readium Foundation under one or more contributor license agreements.
// Use of this source code is governed by a BSD-style license
// that can be found in the LICENSE file exposed on Github (readium) in the project repository.
// ==LICENSE-END==

// https://github.com/edcarroll/ta-json
import {
    JsonObject,
    JsonProperty,
} from "ta-json";

import { ContentKey } from "./lcp-contentkey";
import { UserKey } from "./lcp-userkey";

@JsonObject()
export class Encryption {
    @JsonProperty("profile")
    public Profile!: string;

    @JsonProperty("content_key")
    public ContentKey!: ContentKey;

    @JsonProperty("user_key")
    public UserKey!: UserKey;
}
