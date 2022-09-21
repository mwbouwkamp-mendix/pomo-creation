import { common } from "../../common";
import { configuration } from "../configuration";
import { ITransportation, IRequestOptions, IResponseCallback, IRequestMultipartBinaryFileUploadOptions, IRequestFileDownloadOptions } from "./transportation";
export interface IRequestResult {
    headers: {
        [key: string]: any;
    };
    statusCode: number;
    body: any;
}
/**
 * Default implementation of {@link ITransportation} that communicates with the Model API Server over
 * HTTP using Got.
 */
export declare class RestTransportation implements ITransportation {
    private config;
    constructor(config: configuration.ISdkConfig);
    private prepareRequestOptions;
    request<T>(opts: IRequestOptions, success: IResponseCallback<T>, failure: common.IErrorCallback): void;
    retryableRequest<T>(opts: IRequestOptions, success: IResponseCallback<T>, failure: common.IErrorCallback): void;
    requestMultipartBinaryFileUpload<T>(opts: IRequestMultipartBinaryFileUploadOptions, success: IResponseCallback<T>, failure: common.IErrorCallback): void;
    requestFileDownload<T>(opts: IRequestFileDownloadOptions, success: IResponseCallback<T>, failure: common.IErrorCallback): void;
    private sanitizedMethod;
    private generateStandardOptions;
    private handleRequest;
    private retryRequest;
    private got;
}
