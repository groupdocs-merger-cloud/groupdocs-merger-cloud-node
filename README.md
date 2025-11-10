# GroupDocs.Merger Cloud Node.js SDK

Node.js module for communicating with the GroupDocs.Merger Cloud API

GroupDocs.Merger Cloud allows you to merge documents and manipulate document structure across wide range of supported document types - PDF, DOCX/DOC, PPTX/PPT, XLSX/XLS, VSDX/VSD, ODT, ODS, ODP, HTML, EPUB and many others. Merge several documents into one, split single document to multiple documents, reorder or replace document pages, change page orientation, manage document password and perform other manipulations with GroupDocs.Merger Cloud API.

## Installation

A package `groupdocs-merger-cloud` is available at [npmjs.com](https://www.npmjs.com/package/groupdocs-merger-cloud). You can install it with:

```shell
npm install groupdocs-merger-cloud
```

## Getting Started

This example demonstrates merging different Word files seamlessly with a few lines of code:

```js
// For complete examples and data files, please go to https://github.com/groupdocs-merger-cloud/groupdocs-merger-cloud-node-samples
global.appSid = "XXXX-XXXX-XXXX-XXXX"; // Get AppKey and AppSID from https://dashboard.groupdocs.cloud
global.appKey = "XXXXXXXXXXXXXXXX"; // Get AppKey and AppSID from https://dashboard.groupdocs.cloud
  
global.documentApi = merger_cloud.DocumentApi.fromKeys(appSid, appKey);
 
let item1 = new merger_cloud.JoinItem();
item1.fileInfo = new merger_cloud.FileInfo();
item1.fileInfo.filePath = "WordProcessing/sample-10-pages.docx";
item1.pages = [3, 6, 8];
 
let item2 = new merger_cloud.JoinItem();
item2.fileInfo = new merger_cloud.FileInfo();
item2.fileInfo.filePath = "WordProcessing/four-pages.docx";
item2.startPageNumber = 1
item2.endPageNumber = 4
item2.rangeMode = merger_cloud.JoinItem.RangeModeEnum.OddPages;
         
let options = new merger_cloud.JoinOptions();
options.joinItems = [item1, item2];
options.outputPath = "Output/joined-pages.docx";
 
let result = await documentApi.join(new merger_cloud.JoinRequest(options));
```

Or compile and run same written in TypeScript:

```ts
// load the module
import { InfoApi } from "groupdocs-merger-cloud";

// get your appSid and appKey at https://dashboard.groupdocs.cloud (free registration is required).
const appSid: string = "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX";
const appKey: string = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";

// construct MergerApi
const infoApi: InfoApi = InfoApi.fromKeys(appSid, appKey);

// retrieve supported file-formats
infoApi.getSupportedFileFormats()
    .then((result) => {
        console.log("Supported file-formats:");
        result.formats.forEach((format) => {
            console.log(format.fileFormat + " (" + format.extension + ")");
        });
    })
    .catch((error) => {
        console.log("Error: " + error.message);
    });
```

## Licensing

GroupDocs.Merger Cloud Node.js SDK licensed under [MIT License](LICENSE).

## Resources

+ [**Website**](https://www.groupdocs.cloud)
+ [**Product Home**](https://products.groupdocs.cloud/merger)
+ [**Documentation**](https://docs.groupdocs.cloud/merger/)
+ [**Free Support Forum**](https://forum.groupdocs.cloud/c/merger)
+ [**Blog**](https://blog.groupdocs.cloud/category/merger)

## Contact Us

Your feedback is very important to us. Please feel free to contact us using our [Support Forums](https://forum.groupdocs.cloud/c/merger).
