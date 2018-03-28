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

@JsonObject()
export class UserKey {
    @JsonProperty("text_hint")
    public TextHint!: string;

    @JsonProperty("algorithm")
    public Algorithm!: string;

    @JsonProperty("key_check")
    public KeyCheck!: string;
}
