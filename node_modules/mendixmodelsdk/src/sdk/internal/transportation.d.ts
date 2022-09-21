import { common } from "../../common";
/**
 * The `transportation` module is responsible for performing requests on the (/a) Model API Server.
 */
/**
 * Implementations of this interface are capable of placing a request with the Model API Server over HTTP.
 * Default implementation: {@link RestTransportation}.
 */
export interface ITransportation {
    /**
     * Send a HTTP request, with specified method, url, data, success and failure callbacks.
     */
    request<T>(options: IRequestOptions, success: IResponseCallback<T>, failure: common.IErrorCallback): void;
    /**
     * Send a HTTP request that will be retried in case of network errors, with specified method, url, data, success and failure callbacks.
     */
    retryableRequest<T>(options: IRequestOptions, success: IResponseCallback<T>, failure: common.IErrorCallback): void;
    requestMultipartBinaryFileUpload<T>(options: IRequestMultipartBinaryFileUploadOptions, success: IResponseCallback<T>, failure: common.IErrorCallback): void;
    requestFileDownload<T>(options: IRequestFileDownloadOptions, success: IResponseCallback<T>, failure: common.IErrorCallback): void;
}
export declare type RequestMethod = "get" | "put" | "post" | "delete";
export interface IRequestOptions {
    method: RequestMethod;
    url: string;
    headers?: object;
    body?: object;
    longTimeout?: boolean;
}
export interface IRequestMultipartBinaryFileUploadOptions {
    method: RequestMethod;
    url: string;
    headers?: object;
    body?: object;
    fileParameterName: string;
    fileName: string | Blob;
}
export interface IRequestFileDownloadOptions {
    method: RequestMethod;
    url: string;
}
export interface IResponse {
    headers: {
        [key: string]: any;
    };
}
export interface IResponseCallback<T> {
    (data: T, response: IResponse): void;
}
