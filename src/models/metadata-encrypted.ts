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
} from "ta-json-x";

@JsonObject()
export class Encrypted {

    @JsonProperty("scheme")
    public Scheme!: string;

    @JsonProperty("profile")
    public Profile!: string;

    @JsonProperty("algorithm")
    public Algorithm!: string;

    @JsonProperty("compression")
    public Compression!: string;

    @JsonProperty("original-length")
    public OriginalLength!: number;

    public DecryptedLengthBeforeInflate: number = -1;
    public CypherBlockPadding: number = -1;
    public CypherBlockIV: string | undefined; // Buffer | undefined;
}
