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
export class Rights {
    @JsonProperty("print")
    public Print!: number;

    @JsonProperty("copy")
    public Copy!: number;

    @JsonProperty("start")
    public Start!: Date;

    @JsonProperty("end")
    public End!: Date;
}
