/*
* The MIT License (MIT)
*
* Copyright (c) Aspose Pty Ltd
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

describe("test_pages_api", () => {
    
    before(async () => {
        await TestContext.uploadTestFiles();
    });

    afterEach(async function() {
        await TestContext.cleanupTempFiles();
    });

    describe("TestPagesApi", () => {       

        it("TestMove", async () => {  
            const file = TestFile.FourPagesDocx;
            let options = new Model.MoveOptions();
            options.fileInfo = file.ToFileInfo();
            options.outputPath = TestContext.getOutputPath() + file.fileName;
            options.pageNumber = 1;
            options.newPageNumber = 2;

            let result = await TestContext.getPagesApi().move(new Model.MoveRequest(options));

            expect(result.path).equal(options.outputPath);
        });
       
        it("TestMoveProtected", async () => {  
            const file = TestFile.PasswordProtectedDocx;
            let options = new Model.MoveOptions();
            options.fileInfo = file.ToFileInfo();
            options.outputPath = TestContext.getOutputPath() + file.fileName;
            options.pageNumber = 1;
            options.newPageNumber = 2;

            let result = await TestContext.getPagesApi().move(new Model.MoveRequest(options));

            expect(result.path).equal(options.outputPath);
        });  
        
        it("TestRemove", async () => {  
            const file = TestFile.FourSheetsXlsx;
            let options = new Model.RemoveOptions();
            options.fileInfo = file.ToFileInfo();
            options.outputPath = TestContext.getOutputPath() + file.fileName;
            options.pages = [2, 4];

            let result = await TestContext.getPagesApi().remove(new Model.RemoveRequest(options));

            expect(result.path).equal(options.outputPath);
        });  
        
        it("TestRemoveProtected", async () => {  
            const file = TestFile.PasswordProtectedXlsx;
            let options = new Model.RemoveOptions();
            options.fileInfo = file.ToFileInfo();
            options.outputPath = TestContext.getOutputPath() + file.fileName;
            options.pages = [2, 4];

            let result = await TestContext.getPagesApi().remove(new Model.RemoveRequest(options));

            expect(result.path).equal(options.outputPath);
        }); 
        
        it("TestRotate", async () => {  
            const file = TestFile.TenPagesPdf;
            let options = new Model.RotateOptions();
            options.fileInfo = file.ToFileInfo();
            options.outputPath = TestContext.getOutputPath() + file.fileName;
            options.pages = [2, 4];
            options.mode = Model.RotateOptions.ModeEnum.Rotate90;

            let result = await TestContext.getPagesApi().rotate(new Model.RotateRequest(options));

            expect(result.path).equal(options.outputPath);
        });  
        
        it("TestRotateProtected", async () => {  
            const file = TestFile.OnePageProtectedPdf;
            let options = new Model.RotateOptions();
            options.fileInfo = file.ToFileInfo();
            options.outputPath = TestContext.getOutputPath() + file.fileName;
            options.pages = [1];
            options.mode = Model.RotateOptions.ModeEnum.Rotate90;

            let result = await TestContext.getPagesApi().rotate(new Model.RotateRequest(options));

            expect(result.path).equal(options.outputPath);
        });
        
        it("TestSwap", async () => {  
            const file = TestFile.FourPagesDocx;
            let options = new Model.SwapOptions();
            options.fileInfo = file.ToFileInfo();
            options.outputPath = TestContext.getOutputPath() + file.fileName;
            options.firstPageNumber = 2;
            options.secondPageNumber = 4;

            let result = await TestContext.getPagesApi().swap(new Model.SwapRequest(options));

            expect(result.path).equal(options.outputPath);
        }); 
        
        it("TestSwapProtected", async () => {  
            const file = TestFile.PasswordProtectedDocx;
            let options = new Model.SwapOptions();
            options.fileInfo = file.ToFileInfo();
            options.outputPath = TestContext.getOutputPath() + file.fileName;
            options.firstPageNumber = 2;
            options.secondPageNumber = 4;

            let result = await TestContext.getPagesApi().swap(new Model.SwapRequest(options));

            expect(result.path).equal(options.outputPath);
        }); 
        
        it("TestExtract", async () => {  
            const file = TestFile.FourPagesDocx;
            let options = new Model.ExtractOptions();
            options.fileInfo = file.ToFileInfo();
            options.outputPath = TestContext.getOutputPath() + file.fileName;
            options.pages = [2, 4];

            let result = await TestContext.getPagesApi().extract(new Model.ExtractRequest(options));

            expect(result.path).equal(options.outputPath);
        });   
        
        it("TestExtractProtected", async () => {  
            const file = TestFile.PasswordProtectedDocx;
            let options = new Model.ExtractOptions();
            options.fileInfo = file.ToFileInfo();
            options.outputPath = TestContext.getOutputPath() + file.fileName;
            options.pages = [2, 4];

            let result = await TestContext.getPagesApi().extract(new Model.ExtractRequest(options));

            expect(result.path).equal(options.outputPath);
        });
        
        it("TestOrientation", async () => {  
            const file = TestFile.FourPagesDocx;
            let options = new Model.OrientationOptions();
            options.fileInfo = file.ToFileInfo();
            options.outputPath = TestContext.getOutputPath() + file.fileName;
            options.pages = [2, 4];
            options.mode = Model.OrientationOptions.ModeEnum.Landscape;

            let result = await TestContext.getPagesApi().orientation(new Model.OrientationRequest(options));

            expect(result.path).equal(options.outputPath);
        });

        it("TestOrientationProtected", async () => {  
            const file = TestFile.PasswordProtectedDocx;
            let options = new Model.OrientationOptions();
            options.fileInfo = file.ToFileInfo();
            options.outputPath = TestContext.getOutputPath() + file.fileName;
            options.pages = [2, 4];
            options.mode = Model.OrientationOptions.ModeEnum.Landscape;

            let result = await TestContext.getPagesApi().orientation(new Model.OrientationRequest(options));

            expect(result.path).equal(options.outputPath);
        });        
    });    
});
