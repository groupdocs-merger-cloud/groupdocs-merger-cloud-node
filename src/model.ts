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

/**
 * Metered license consumption information
 */
export class ConsumptionResult {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "credit",
            baseName: "credit",
            type: "number",
        },        
        {
            name: "quantity",
            baseName: "quantity",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ConsumptionResult.attributeTypeMap;
    }

    /**
     * Amount of used credits
     */
    public credit: number;
    
    /**
     * Amount of MBs processed
     */
    public quantity: number;
    
    public constructor(init?: Partial<ConsumptionResult>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Class for disc space information.
 */
export class DiscUsage {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "usedSize",
            baseName: "usedSize",
            type: "number",
        },        
        {
            name: "totalSize",
            baseName: "totalSize",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return DiscUsage.attributeTypeMap;
    }

    /**
     * Application used disc space.
     */
    public usedSize: number;
    
    /**
     * Total disc space.
     */
    public totalSize: number;
    
    public constructor(init?: Partial<DiscUsage>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Describes document result
 */
export class DocumentResult {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "path",
            baseName: "path",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return DocumentResult.attributeTypeMap;
    }

    /**
     * Path of the output document
     */
    public path: string;
    
    public constructor(init?: Partial<DocumentResult>) {
        
        Object.assign(this, init);
    }        
}

/**
 * The error details
 */
export class ErrorDetails {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "requestId",
            baseName: "requestId",
            type: "string",
        },        
        {
            name: "date",
            baseName: "date",
            type: "Date",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ErrorDetails.attributeTypeMap;
    }

    /**
     * The request id
     */
    public requestId: string;
    
    /**
     * Date
     */
    public date: Date;
    
    public constructor(init?: Partial<ErrorDetails>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Describes file properties
 */
export class FileInfo {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "filePath",
            baseName: "filePath",
            type: "string",
        },        
        {
            name: "storageName",
            baseName: "storageName",
            type: "string",
        },        
        {
            name: "versionId",
            baseName: "versionId",
            type: "string",
        },        
        {
            name: "password",
            baseName: "password",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FileInfo.attributeTypeMap;
    }

    /**
     * File path in storage
     */
    public filePath: string;
    
    /**
     * Storage name
     */
    public storageName: string;
    
    /**
     * Version ID
     */
    public versionId: string;
    
    /**
     * Password to open file
     */
    public password: string;
    
    public constructor(init?: Partial<FileInfo>) {
        
        Object.assign(this, init);
    }        
}

/**
 * File versions FileVersion.
 */
export class FileVersions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "value",
            baseName: "value",
            type: "Array<FileVersion>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FileVersions.attributeTypeMap;
    }

    /**
     * File versions FileVersion.
     */
    public value: Array<FileVersion>;
    
    public constructor(init?: Partial<FileVersions>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Files list
 */
export class FilesList {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "value",
            baseName: "value",
            type: "Array<StorageFile>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FilesList.attributeTypeMap;
    }

    /**
     * Files and folders contained by folder StorageFile.
     */
    public value: Array<StorageFile>;
    
    public constructor(init?: Partial<FilesList>) {
        
        Object.assign(this, init);
    }        
}

/**
 * File upload result
 */
export class FilesUploadResult {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "uploaded",
            baseName: "uploaded",
            type: "Array<string>",
        },        
        {
            name: "errors",
            baseName: "errors",
            type: "Array<Error>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FilesUploadResult.attributeTypeMap;
    }

    /**
     * List of uploaded file names
     */
    public uploaded: Array<string>;
    
    /**
     * List of errors.
     */
    public errors: Array<Error>;
    
    public constructor(init?: Partial<FilesUploadResult>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Describes file format properties
 */
export class Format {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "extension",
            baseName: "extension",
            type: "string",
        },        
        {
            name: "fileFormat",
            baseName: "fileFormat",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Format.attributeTypeMap;
    }

    /**
     * File extension
     */
    public extension: string;
    
    /**
     * File format
     */
    public fileFormat: string;
    
    public constructor(init?: Partial<Format>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Describes object which contains list of supported file formats.
 */
export class FormatsResult {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "formats",
            baseName: "formats",
            type: "Array<Format>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FormatsResult.attributeTypeMap;
    }

    /**
     * Supported file formats collection
     */
    public formats: Array<Format>;
    
    public constructor(init?: Partial<FormatsResult>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Describes document properties result
 */
export class InfoResult {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "extension",
            baseName: "extension",
            type: "string",
        },        
        {
            name: "pages",
            baseName: "pages",
            type: "Array<PageInfo>",
        },        
        {
            name: "size",
            baseName: "size",
            type: "number",
        },        
        {
            name: "fileFormat",
            baseName: "fileFormat",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return InfoResult.attributeTypeMap;
    }

    /**
     * Document extension
     */
    public extension: string;
    
    /**
     * Collection page descriptors
     */
    public pages: Array<PageInfo>;
    
    /**
     * Document size in bytes
     */
    public size: number;
    
    /**
     * File format
     */
    public fileFormat: string;
    
    public constructor(init?: Partial<InfoResult>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Describes document for join operation
 */
export class JoinItem {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "fileInfo",
            baseName: "fileInfo",
            type: "FileInfo",
        },        
        {
            name: "pages",
            baseName: "pages",
            type: "Array<number>",
        },        
        {
            name: "startPageNumber",
            baseName: "startPageNumber",
            type: "number",
        },        
        {
            name: "endPageNumber",
            baseName: "endPageNumber",
            type: "number",
        },        
        {
            name: "rangeMode",
            baseName: "rangeMode",
            type: "JoinItem.RangeModeEnum",
        },        
        {
            name: "wordJoinMode",
            baseName: "wordJoinMode",
            type: "JoinItem.WordJoinModeEnum",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return JoinItem.attributeTypeMap;
    }

    /**
     * File info
     */
    public fileInfo: FileInfo;
    
    /**
     * List of page numbers to use in a Join operation. NOTE: page numbering starts from 1.
     */
    public pages: Array<number>;
    
    /**
     * Start page number. Ignored if Pages collection is not empty.
     */
    public startPageNumber: number;
    
    /**
     * End page number. Ignored if Pages collection is not empty.
     */
    public endPageNumber: number;
    
    /**
     * Range mode. Ignored if Pages collection is not empty. Default value is AllPages.
     */
    public rangeMode: JoinItem.RangeModeEnum;
    
    /**
     * Allows to join word documents without empty space between documents
     */
    public wordJoinMode: JoinItem.WordJoinModeEnum;
    
    public constructor(init?: Partial<JoinItem>) {
        
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace JoinItem {
    export enum RangeModeEnum {
        AllPages = 'AllPages' as any,
        OddPages = 'OddPages' as any,
        EvenPages = 'EvenPages' as any,
    }
    export enum WordJoinModeEnum {
        Default = 'Default' as any,
        Continuous = 'Continuous' as any,
    }
}
// tslint:enable:quotemark
/**
 * Defines options for documents Join method
 */
export class JoinOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "joinItems",
            baseName: "joinItems",
            type: "Array<JoinItem>",
        },        
        {
            name: "outputPath",
            baseName: "outputPath",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return JoinOptions.attributeTypeMap;
    }

    /**
     * Documents descriptions for Join operation
     */
    public joinItems: Array<JoinItem>;
    
    /**
     * The output path
     */
    public outputPath: string;
    
    public constructor(init?: Partial<JoinOptions>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Error
 */
export class ModelError {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "code",
            baseName: "code",
            type: "string",
        },        
        {
            name: "message",
            baseName: "message",
            type: "string",
        },        
        {
            name: "description",
            baseName: "description",
            type: "string",
        },        
        {
            name: "innerError",
            baseName: "innerError",
            type: "ErrorDetails",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ModelError.attributeTypeMap;
    }

    /**
     * Code             
     */
    public code: string;
    
    /**
     * Message             
     */
    public message: string;
    
    /**
     * Description             
     */
    public description: string;
    
    /**
     * Inner Error             
     */
    public innerError: ErrorDetails;
    
    public constructor(init?: Partial<ModelError>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Describes result that contains multiple documents
 */
export class MultiDocumentResult {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "documents",
            baseName: "documents",
            type: "Array<DocumentResult>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return MultiDocumentResult.attributeTypeMap;
    }

    /**
     * Documents collection
     */
    public documents: Array<DocumentResult>;
    
    public constructor(init?: Partial<MultiDocumentResult>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Object exists
 */
export class ObjectExist {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "exists",
            baseName: "exists",
            type: "boolean",
        },        
        {
            name: "isFolder",
            baseName: "isFolder",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ObjectExist.attributeTypeMap;
    }

    /**
     * Indicates that the file or folder exists.
     */
    public exists: boolean;
    
    /**
     * True if it is a folder, false if it is a file.
     */
    public isFolder: boolean;
    
    public constructor(init?: Partial<ObjectExist>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Options
 */
export class Options {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "fileInfo",
            baseName: "fileInfo",
            type: "FileInfo",
        },        
        {
            name: "outputPath",
            baseName: "outputPath",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Options.attributeTypeMap;
    }

    /**
     * File info
     */
    public fileInfo: FileInfo;
    
    /**
     * The output path.
     */
    public outputPath: string;
    
    public constructor(init?: Partial<Options>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Describes page properties
 */
export class PageInfo {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "width",
            baseName: "width",
            type: "number",
        },        
        {
            name: "height",
            baseName: "height",
            type: "number",
        },        
        {
            name: "pageNumber",
            baseName: "pageNumber",
            type: "number",
        },        
        {
            name: "visible",
            baseName: "visible",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return PageInfo.attributeTypeMap;
    }

    /**
     * Page width in pixels when converted to image
     */
    public width: number;
    
    /**
     * Page height in pixels when converted to image
     */
    public height: number;
    
    /**
     * Document page number
     */
    public pageNumber: number;
    
    /**
     * Indicates whether page is visible or not
     */
    public visible: boolean;
    
    public constructor(init?: Partial<PageInfo>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Describesd result of password check operation
 */
export class PasswordResult {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "isPasswordSet",
            baseName: "isPasswordSet",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return PasswordResult.attributeTypeMap;
    }

    /**
     * Indicates whether document is password protected or not
     */
    public isPasswordSet: boolean;
    
    public constructor(init?: Partial<PasswordResult>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Storage exists
 */
export class StorageExist {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "exists",
            baseName: "exists",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return StorageExist.attributeTypeMap;
    }

    /**
     * Shows that the storage exists.             
     */
    public exists: boolean;
    
    public constructor(init?: Partial<StorageExist>) {
        
        Object.assign(this, init);
    }        
}

/**
 * File or folder information
 */
export class StorageFile {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "name",
            baseName: "name",
            type: "string",
        },        
        {
            name: "isFolder",
            baseName: "isFolder",
            type: "boolean",
        },        
        {
            name: "modifiedDate",
            baseName: "modifiedDate",
            type: "Date",
        },        
        {
            name: "size",
            baseName: "size",
            type: "number",
        },        
        {
            name: "path",
            baseName: "path",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return StorageFile.attributeTypeMap;
    }

    /**
     * File or folder name.
     */
    public name: string;
    
    /**
     * True if it is a folder.
     */
    public isFolder: boolean;
    
    /**
     * File or folder last modified DateTime.
     */
    public modifiedDate: Date;
    
    /**
     * File or folder size.
     */
    public size: number;
    
    /**
     * File or folder path.
     */
    public path: string;
    
    public constructor(init?: Partial<StorageFile>) {
        
        Object.assign(this, init);
    }        
}

/**
 * File Version
 */
export class FileVersion extends StorageFile {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "versionId",
            baseName: "versionId",
            type: "string",
        },        
        {
            name: "isLatest",
            baseName: "isLatest",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FileVersion.attributeTypeMap);
    }

    /**
     * File Version ID.
     */
    public versionId: string;
    
    /**
     * Specifies whether the file is (true) or is not (false) the latest version of an file.
     */
    public isLatest: boolean;
    
    public constructor(init?: Partial<FileVersion>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Import API options
 */
export class ImportOptions extends Options {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "attachments",
            baseName: "attachments",
            type: "Array<string>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ImportOptions.attributeTypeMap);
    }

    /**
     * List of files paths to import as attachments
     */
    public attachments: Array<string>;
    
    public constructor(init?: Partial<ImportOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Move page options
 */
export class MoveOptions extends Options {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "pageNumber",
            baseName: "pageNumber",
            type: "number",
        },        
        {
            name: "newPageNumber",
            baseName: "newPageNumber",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(MoveOptions.attributeTypeMap);
    }

    /**
     * Page number to move
     */
    public pageNumber: number;
    
    /**
     * New page number
     */
    public newPageNumber: number;
    
    public constructor(init?: Partial<MoveOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Describes options for specifying page or pages range
 */
export class PageOptions extends Options {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "pages",
            baseName: "pages",
            type: "Array<number>",
        },        
        {
            name: "startPageNumber",
            baseName: "startPageNumber",
            type: "number",
        },        
        {
            name: "endPageNumber",
            baseName: "endPageNumber",
            type: "number",
        },        
        {
            name: "rangeMode",
            baseName: "rangeMode",
            type: "PageOptions.RangeModeEnum",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PageOptions.attributeTypeMap);
    }

    /**
     * List of page numbers to use in a specific API method. NOTE: page numbering starts from 1.
     */
    public pages: Array<number>;
    
    /**
     * Start page number. Ignored if Pages collection is not empty.
     */
    public startPageNumber: number;
    
    /**
     * End page number. Ignored if Pages collection is not empty.
     */
    public endPageNumber: number;
    
    /**
     * Range mode. Ignored if Pages collection is not empty. Default value is AllPages.
     */
    public rangeMode: PageOptions.RangeModeEnum;
    
    public constructor(init?: Partial<PageOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace PageOptions {
    export enum RangeModeEnum {
        AllPages = 'AllPages' as any,
        OddPages = 'OddPages' as any,
        EvenPages = 'EvenPages' as any,
    }
}
// tslint:enable:quotemark
/**
 * Describes options for document pages Swap operation
 */
export class SwapOptions extends Options {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "firstPageNumber",
            baseName: "firstPageNumber",
            type: "number",
        },        
        {
            name: "secondPageNumber",
            baseName: "secondPageNumber",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SwapOptions.attributeTypeMap);
    }

    /**
     * First page number to exchange
     */
    public firstPageNumber: number;
    
    /**
     * Second page number to exchange
     */
    public secondPageNumber: number;
    
    public constructor(init?: Partial<SwapOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Defines options for document password Update operation
 */
export class UpdatePasswordOptions extends Options {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "newPassword",
            baseName: "newPassword",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(UpdatePasswordOptions.attributeTypeMap);
    }

    /**
     * The new document password
     */
    public newPassword: string;
    
    public constructor(init?: Partial<UpdatePasswordOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Options for document pages Extract operation
 */
export class ExtractOptions extends PageOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ExtractOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<ExtractOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace ExtractOptions {
}
// tslint:enable:quotemark
/**
 * Options for changing document page orientation
 */
export class OrientationOptions extends PageOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "mode",
            baseName: "mode",
            type: "OrientationOptions.ModeEnum",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(OrientationOptions.attributeTypeMap);
    }

    /**
     * Orientation mode
     */
    public mode: OrientationOptions.ModeEnum;
    
    public constructor(init?: Partial<OrientationOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace OrientationOptions {
    export enum ModeEnum {
        Portrait = 'Portrait' as any,
        Landscape = 'Landscape' as any,
    }
}
// tslint:enable:quotemark
/**
 * Represents document preview options
 */
export class PreviewOptions extends PageOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "width",
            baseName: "width",
            type: "number",
        },        
        {
            name: "height",
            baseName: "height",
            type: "number",
        },        
        {
            name: "format",
            baseName: "format",
            type: "PreviewOptions.FormatEnum",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PreviewOptions.attributeTypeMap);
    }

    /**
     * Preview width
     */
    public width: number;
    
    /**
     * Preview height
     */
    public height: number;
    
    /**
     * Preview image format
     */
    public format: PreviewOptions.FormatEnum;
    
    public constructor(init?: Partial<PreviewOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace PreviewOptions {
    export enum FormatEnum {
        Jpeg = 'Jpeg' as any,
        Png = 'Png' as any,
        Bmp = 'Bmp' as any,
    }
}
// tslint:enable:quotemark
/**
 * Remove pages options
 */
export class RemoveOptions extends PageOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(RemoveOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<RemoveOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace RemoveOptions {
}
// tslint:enable:quotemark
/**
 * Rotate pages options
 */
export class RotateOptions extends PageOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "mode",
            baseName: "mode",
            type: "RotateOptions.ModeEnum",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(RotateOptions.attributeTypeMap);
    }

    /**
     * Get or sets desired page rotation - 90, 180 or 270 degrees.
     */
    public mode: RotateOptions.ModeEnum;
    
    public constructor(init?: Partial<RotateOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace RotateOptions {
    export enum ModeEnum {
        Rotate90 = 'Rotate90' as any,
        Rotate180 = 'Rotate180' as any,
        Rotate270 = 'Rotate270' as any,
    }
}
// tslint:enable:quotemark
/**
 * Defines options for document Split operation
 */
export class SplitOptions extends PageOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "mode",
            baseName: "mode",
            type: "SplitOptions.ModeEnum",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SplitOptions.attributeTypeMap);
    }

    /**
     * Document split mode
     */
    public mode: SplitOptions.ModeEnum;
    
    public constructor(init?: Partial<SplitOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace SplitOptions {
    export enum ModeEnum {
        Pages = 'Pages' as any,
        Intervals = 'Intervals' as any,
    }
}
// tslint:enable:quotemark
const enumsMap = {
    "JoinItem.RangeModeEnum": JoinItem.RangeModeEnum,
    "JoinItem.WordJoinModeEnum": JoinItem.WordJoinModeEnum,
    "PageOptions.RangeModeEnum": PageOptions.RangeModeEnum,
    "OrientationOptions.ModeEnum": OrientationOptions.ModeEnum,
    "PreviewOptions.FormatEnum": PreviewOptions.FormatEnum,
    "RotateOptions.ModeEnum": RotateOptions.ModeEnum,
    "SplitOptions.ModeEnum": SplitOptions.ModeEnum,
};

const typeMap = {
            ConsumptionResult,
            DiscUsage,
            DocumentResult,
            ErrorDetails,
            FileInfo,
            FileVersions,
            FilesList,
            FilesUploadResult,
            Format,
            FormatsResult,
            InfoResult,
            JoinItem,
            JoinOptions,
            ModelError,
            MultiDocumentResult,
            ObjectExist,
            Options,
            PageInfo,
            PasswordResult,
            StorageExist,
            StorageFile,
            FileVersion,
            ImportOptions,
            MoveOptions,
            PageOptions,
            SwapOptions,
            UpdatePasswordOptions,
            ExtractOptions,
            OrientationOptions,
            PreviewOptions,
            RemoveOptions,
            RotateOptions,
            SplitOptions,
};

export {enumsMap, typeMap};

/**
 * Request model for Import operation.
 */
export class ImportRequest {
    /**
     * Import options
     */
    public options: ImportOptions;
    
    public constructor(options: ImportOptions) {        
        this.options = options;
    }
}

/**
 * Request model for Join operation.
 */
export class JoinRequest {
    /**
     * Join options
     */
    public options: JoinOptions;
    
    public constructor(options: JoinOptions) {        
        this.options = options;
    }
}

/**
 * Request model for Preview operation.
 */
export class PreviewRequest {
    /**
     * Preview options
     */
    public options: PreviewOptions;
    
    public constructor(options: PreviewOptions) {        
        this.options = options;
    }
}

/**
 * Request model for Split operation.
 */
export class SplitRequest {
    /**
     * SplitOptions
     */
    public options: SplitOptions;
    
    public constructor(options: SplitOptions) {        
        this.options = options;
    }
}

/**
 * Request model for CopyFile operation.
 */
export class CopyFileRequest {
    /**
     * Source file path e.g. '/folder/file.ext'
     */
    public srcPath: string;

    /**
     * Destination file path
     */
    public destPath: string;

    /**
     * Source storage name
     */
    public srcStorageName: string;

    /**
     * Destination storage name
     */
    public destStorageName: string;

    /**
     * File version ID to copy
     */
    public versionId: string;
    
    public constructor(srcPath: string, destPath: string, srcStorageName?: string, destStorageName?: string, versionId?: string) {        
        this.srcPath = srcPath;
        this.destPath = destPath;
        this.srcStorageName = srcStorageName;
        this.destStorageName = destStorageName;
        this.versionId = versionId;
    }
}

/**
 * Request model for DeleteFile operation.
 */
export class DeleteFileRequest {
    /**
     * File path e.g. '/folder/file.ext'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;

    /**
     * File version ID to delete
     */
    public versionId: string;
    
    public constructor(path: string, storageName?: string, versionId?: string) {        
        this.path = path;
        this.storageName = storageName;
        this.versionId = versionId;
    }
}

/**
 * Request model for DownloadFile operation.
 */
export class DownloadFileRequest {
    /**
     * File path e.g. '/folder/file.ext'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;

    /**
     * File version ID to download
     */
    public versionId: string;
    
    public constructor(path: string, storageName?: string, versionId?: string) {        
        this.path = path;
        this.storageName = storageName;
        this.versionId = versionId;
    }
}

/**
 * Request model for MoveFile operation.
 */
export class MoveFileRequest {
    /**
     * Source file path e.g. '/src.ext'
     */
    public srcPath: string;

    /**
     * Destination file path e.g. '/dest.ext'
     */
    public destPath: string;

    /**
     * Source storage name
     */
    public srcStorageName: string;

    /**
     * Destination storage name
     */
    public destStorageName: string;

    /**
     * File version ID to move
     */
    public versionId: string;
    
    public constructor(srcPath: string, destPath: string, srcStorageName?: string, destStorageName?: string, versionId?: string) {        
        this.srcPath = srcPath;
        this.destPath = destPath;
        this.srcStorageName = srcStorageName;
        this.destStorageName = destStorageName;
        this.versionId = versionId;
    }
}

/**
 * Request model for UploadFile operation.
 */
export class UploadFileRequest {
    /**
     * Path where to upload including filename and extension e.g. /file.ext or /Folder 1/file.ext             If the content is multipart and path does not contains the file name it tries to get them from filename parameter             from Content-Disposition header.             
     */
    public path: string;

    /**
     * File to upload
     */
    public file: Buffer;

    /**
     * Storage name
     */
    public storageName: string;
    
    public constructor(path: string, file: Buffer, storageName?: string) {        
        this.path = path;
        this.file = file;
        this.storageName = storageName;
    }
}

/**
 * Request model for CopyFolder operation.
 */
export class CopyFolderRequest {
    /**
     * Source folder path e.g. '/src'
     */
    public srcPath: string;

    /**
     * Destination folder path e.g. '/dst'
     */
    public destPath: string;

    /**
     * Source storage name
     */
    public srcStorageName: string;

    /**
     * Destination storage name
     */
    public destStorageName: string;
    
    public constructor(srcPath: string, destPath: string, srcStorageName?: string, destStorageName?: string) {        
        this.srcPath = srcPath;
        this.destPath = destPath;
        this.srcStorageName = srcStorageName;
        this.destStorageName = destStorageName;
    }
}

/**
 * Request model for CreateFolder operation.
 */
export class CreateFolderRequest {
    /**
     * Folder path to create e.g. 'folder_1/folder_2/'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;
    
    public constructor(path: string, storageName?: string) {        
        this.path = path;
        this.storageName = storageName;
    }
}

/**
 * Request model for DeleteFolder operation.
 */
export class DeleteFolderRequest {
    /**
     * Folder path e.g. '/folder'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;

    /**
     * Enable to delete folders, subfolders and files
     */
    public recursive: boolean;
    
    public constructor(path: string, storageName?: string, recursive?: boolean) {        
        this.path = path;
        this.storageName = storageName;
        this.recursive = recursive;
    }
}

/**
 * Request model for GetFilesList operation.
 */
export class GetFilesListRequest {
    /**
     * Folder path e.g. '/folder'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;
    
    public constructor(path: string, storageName?: string) {        
        this.path = path;
        this.storageName = storageName;
    }
}

/**
 * Request model for MoveFolder operation.
 */
export class MoveFolderRequest {
    /**
     * Folder path to move e.g. '/folder'
     */
    public srcPath: string;

    /**
     * Destination folder path to move to e.g '/dst'
     */
    public destPath: string;

    /**
     * Source storage name
     */
    public srcStorageName: string;

    /**
     * Destination storage name
     */
    public destStorageName: string;
    
    public constructor(srcPath: string, destPath: string, srcStorageName?: string, destStorageName?: string) {        
        this.srcPath = srcPath;
        this.destPath = destPath;
        this.srcStorageName = srcStorageName;
        this.destStorageName = destStorageName;
    }
}

/**
 * Request model for GetInfo operation.
 */
export class GetInfoRequest {
    /**
     * File Info
     */
    public fileInfo: FileInfo;
    
    public constructor(fileInfo: FileInfo) {        
        this.fileInfo = fileInfo;
    }
}

/**
 * Request model for Extract operation.
 */
export class ExtractRequest {
    /**
     * Extract options
     */
    public options: ExtractOptions;
    
    public constructor(options: ExtractOptions) {        
        this.options = options;
    }
}

/**
 * Request model for Move operation.
 */
export class MoveRequest {
    /**
     * Move options
     */
    public options: MoveOptions;
    
    public constructor(options: MoveOptions) {        
        this.options = options;
    }
}

/**
 * Request model for Orientation operation.
 */
export class OrientationRequest {
    /**
     * Orientation options
     */
    public options: OrientationOptions;
    
    public constructor(options: OrientationOptions) {        
        this.options = options;
    }
}

/**
 * Request model for Remove operation.
 */
export class RemoveRequest {
    /**
     * Remove options
     */
    public options: RemoveOptions;
    
    public constructor(options: RemoveOptions) {        
        this.options = options;
    }
}

/**
 * Request model for Rotate operation.
 */
export class RotateRequest {
    /**
     * Rotate options
     */
    public options: RotateOptions;
    
    public constructor(options: RotateOptions) {        
        this.options = options;
    }
}

/**
 * Request model for Swap operation.
 */
export class SwapRequest {
    /**
     * Swap options
     */
    public options: SwapOptions;
    
    public constructor(options: SwapOptions) {        
        this.options = options;
    }
}

/**
 * Request model for AddPassword operation.
 */
export class AddPasswordRequest {
    /**
     * Options to specify document name and new password
     */
    public options: Options;
    
    public constructor(options: Options) {        
        this.options = options;
    }
}

/**
 * Request model for CheckPassword operation.
 */
export class CheckPasswordRequest {
    /**
     * File path
     */
    public filePath: string;

    /**
     * Storage name
     */
    public storageName: string;

    /**
     * Version Id
     */
    public versionId: string;
    
    public constructor(filePath: string, storageName?: string, versionId?: string) {        
        this.filePath = filePath;
        this.storageName = storageName;
        this.versionId = versionId;
    }
}

/**
 * Request model for RemovePassword operation.
 */
export class RemovePasswordRequest {
    /**
     * Options to specify document name and current password
     */
    public options: Options;
    
    public constructor(options: Options) {        
        this.options = options;
    }
}

/**
 * Request model for UpdatePassword operation.
 */
export class UpdatePasswordRequest {
    /**
     * Options to specify document name, current and new password
     */
    public options: UpdatePasswordOptions;
    
    public constructor(options: UpdatePasswordOptions) {        
        this.options = options;
    }
}

/**
 * Request model for GetDiscUsage operation.
 */
export class GetDiscUsageRequest {
    /**
     * Storage name
     */
    public storageName: string;
    
    public constructor(storageName?: string) {        
        this.storageName = storageName;
    }
}

/**
 * Request model for GetFileVersions operation.
 */
export class GetFileVersionsRequest {
    /**
     * File path e.g. '/file.ext'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;
    
    public constructor(path: string, storageName?: string) {        
        this.path = path;
        this.storageName = storageName;
    }
}

/**
 * Request model for ObjectExists operation.
 */
export class ObjectExistsRequest {
    /**
     * File or folder path e.g. '/file.ext' or '/folder'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;

    /**
     * File version ID
     */
    public versionId: string;
    
    public constructor(path: string, storageName?: string, versionId?: string) {        
        this.path = path;
        this.storageName = storageName;
        this.versionId = versionId;
    }
}

/**
 * Request model for StorageExists operation.
 */
export class StorageExistsRequest {
    /**
     * Storage name
     */
    public storageName: string;
    
    public constructor(storageName: string) {        
        this.storageName = storageName;
    }
}
