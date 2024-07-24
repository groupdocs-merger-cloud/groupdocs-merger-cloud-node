/*
* The MIT License (MIT)
*
* Copyright (c) 2003-2024 Aspose Pty Ltd
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

describe("test_document_api", () => {
    
    before(async () => {
        await TestContext.uploadTestFiles();
    });

    afterEach(async function() {
        await TestContext.cleanupTempFiles();
    });

    describe("TestDocumentApi", () => {       

        it("TestSplitPages", async () => {  
            const file = TestFile.FourPagesDocx;
            let options = new Model.SplitOptions();
            options.fileInfo = file.ToFileInfo();
            options.outputPath = TestContext.getOutputPath() + file.fileName;
            options.pages = [2, 4];
            options.mode = Model.SplitOptions.ModeEnum.Pages;

            let result = await TestContext.getDocumentApi().split(new Model.SplitRequest(options));

            expect(result.documents.length).equal(2);
        });

        it("TestSplitPagesProtected", async () => {  
            const file = TestFile.PasswordProtectedDocx;
            let options = new Model.SplitOptions();
            options.fileInfo = file.ToFileInfo();
            options.outputPath = TestContext.getOutputPath() + file.fileName;
            options.pages = [2, 4];
            options.mode = Model.SplitOptions.ModeEnum.Pages;

            let result = await TestContext.getDocumentApi().split(new Model.SplitRequest(options));

            expect(result.documents.length).equal(2);
        }); 
        
        it("TestPreview", async () => {  
            const file = TestFile.FourPagesDocx;
            let options = new Model.PreviewOptions();
            options.fileInfo = file.ToFileInfo();
            options.outputPath = TestContext.getOutputPath() + file.fileName;
            options.pages = [2, 4];
            options.width = 600;
            options.height = 900;
            options.format = Model.PreviewOptions.FormatEnum.Png;

            let result = await TestContext.getDocumentApi().preview(new Model.PreviewRequest(options));

            expect(result.documents.length).equal(2);
        });  
        
        it("TestPreviewProtected", async () => {  
            const file = TestFile.PasswordProtectedDocx;
            let options = new Model.PreviewOptions();
            options.fileInfo = file.ToFileInfo();
            options.outputPath = TestContext.getOutputPath() + file.fileName;
            options.pages = [2, 4];
            options.width = 600;
            options.height = 900;
            options.format = Model.PreviewOptions.FormatEnum.Png;

            let result = await TestContext.getDocumentApi().preview(new Model.PreviewRequest(options));

            expect(result.documents.length).equal(2);
        });   
        
        it("TestJoin", async () => {  

            let item1 = new Model.JoinItem();
            item1.fileInfo = TestFile.PasswordProtectedDocx.ToFileInfo();
            let item2 = new Model.JoinItem();
            item2.fileInfo = TestFile.FourPagesDocx.ToFileInfo();            
            let options = new Model.JoinOptions();
            options.joinItems = [item1, item2];
            options.outputPath = TestContext.getOutputPath() + "joined.docx";

            let result = await TestContext.getDocumentApi().join(new Model.JoinRequest(options));

            expect(result.path).equal(options.outputPath);
        });  
        
        it("TestJoinCrossFormat", async () => {  

            let item1 = new Model.JoinItem();
            item1.fileInfo = TestFile.OnePageProtectedPdf.ToFileInfo();
            let item2 = new Model.JoinItem();
            item2.fileInfo = TestFile.FourPagesDocx.ToFileInfo();            
            let options = new Model.JoinOptions();
            options.joinItems = [item1, item2];
            options.outputPath = TestContext.getOutputPath() + "joined.pdf";

            let result = await TestContext.getDocumentApi().join(new Model.JoinRequest(options));

            expect(result.path).equal(options.outputPath);
        });  
        
        it("TestImport", async () => {  

            let options = new Model.ImportOptions();
            options.fileInfo = TestFile.OnePageProtectedPdf.ToFileInfo();
            options.attachments = [TestFile.Txt.GetPath()];
            options.outputPath = TestContext.getOutputPath() + "with-attachment.pdf";

            let result = await TestContext.getDocumentApi()._import(new Model.ImportRequest(options));

            expect(result.path).equal(options.outputPath);
        });          
    });    
});
