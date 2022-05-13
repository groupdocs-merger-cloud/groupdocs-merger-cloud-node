/*
* The MIT License (MIT)
*
* Copyright (c) 2003-2022 Aspose Pty Ltd
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/

import { expect } from "chai";
import "mocha";

import { Configuration } from "../../src/configuration";
import { InfoApi } from "../../src/merger_api";

describe("auth_api", () => {

    describe("test_auth_error", () => {
        it("should throw when app sid not found", () => {    
            const settings = require("../test_settings.json");
            const appSid = "test";
            const appKey = "test";
          
            const config = new Configuration(appSid, appKey);
            config.apiBaseUrl = settings.ApiBaseUrl;
            const infoApi = InfoApi.fromConfig(config);

            return infoApi.getSupportedFileFormats()
                .catch((error) => {
                    expect(error.message).equal("invalid_client");
                });
        });

    });

});
