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
export class Link {
    @JsonProperty("length")
    public Length!: number;

    @JsonProperty("href")
    public Href!: string;

    @JsonProperty("title")
    public Title!: string;

    @JsonProperty("type")
    public Type!: string;

    @JsonProperty("templated")
    public Templated!: string;

    @JsonProperty("profile")
    public Profile!: string;

    @JsonProperty("hash")
    public Hash!: string;

    @JsonProperty("rel")
    public Rel!: string;

    public HasRel(rel: string): boolean {
        return this.Rel === rel;
    }

    public SetRel(rel: string) {
        this.Rel = rel;
    }
}
