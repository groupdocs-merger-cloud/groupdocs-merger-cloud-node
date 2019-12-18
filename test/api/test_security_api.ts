/*
* The MIT License (MIT)
*
* Copyright (c) 2003-2019 Aspose Pty Ltd
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

import * as Model from "../../src/model";

import * as TestContext from "../test_context";
import { TestFile } from "../test_file";

describe("test_security_api", () => {
    
    before(async () => {
        await TestContext.uploadTestFiles();
    });

    afterEach(async function() {
        await TestContext.cleanupTempFiles();
    });

    describe("TestSecurityApi", () => {       
        
        it("TestCheckPassword", async () => {  
            const file = TestFile.FourPagesDocx;

            let result = await TestContext.getSecurityApi().checkPassword(new Model.CheckPasswordRequest(file.GetPath()));

            expect(result.isPasswordSet).equal(false);
        });

        it("TestCheckPasswordProtected", async () => {  
            const file = TestFile.PasswordProtectedDocx;

            let result = await TestContext.getSecurityApi().checkPassword(new Model.CheckPasswordRequest(file.GetPath()));

            expect(result.isPasswordSet).equal(true);
        });        

        it("TestRemovePassword", async () => {  
            const file = TestFile.PasswordProtectedDocx;
            let options = new Model.Options();
            options.fileInfo = file.ToFileInfo();
            options.outputPath = TestContext.getOutputPath() + file.fileName;

            let result = await TestContext.getSecurityApi().removePassword(new Model.RemovePasswordRequest(options));

            expect(result.path).equal(options.outputPath);
        });
       
        it("TestAddPassword", async () => {  
            const file = TestFile.FourPagesDocx;
            let options = new Model.Options();
            options.fileInfo = file.ToFileInfo();
            options.fileInfo.password = "NewPassword";
            options.outputPath = TestContext.getOutputPath() + file.fileName;

            let result = await TestContext.getSecurityApi().addPassword(new Model.AddPasswordRequest(options));

            expect(result.path).equal(options.outputPath);
        });

        it("TestUpdatePassword", async () => {  
            const file = TestFile.PasswordProtectedDocx;
            let options = new Model.UpdatePasswordOptions();
            options.fileInfo = file.ToFileInfo();            
            options.outputPath = TestContext.getOutputPath() + file.fileName;
            options.newPassword = "NewPassword";

            let result = await TestContext.getSecurityApi().updatePassword(new Model.UpdatePasswordRequest(options));

            expect(result.path).equal(options.outputPath);
        });        
    });    
});
