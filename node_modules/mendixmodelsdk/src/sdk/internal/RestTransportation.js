"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestTransportation = void 0;
const fs = require("fs");
const FormData = require("form-data");
const version_1 = require("../../version");
const getAuthInfo_1 = require("./getAuthInfo");
// Postpone requiring the 'got' module to prevent errors when using the Model SDK in the browser.
let gotImpl;
const SHORT_TIMEOUT = 1 * 60 * 1000;
const LONG_TIMEOUT = 15 * 60 * 1000;
/**
 * Default implementation of {@link ITransportation} that communicates with the Model API Server over
 * HTTP using Got.
 */
class RestTransportation {
    constructor(config) {
        this.config = config;
        gotImpl = require("got");
    }
    prepareRequestOptions(opts) {
        const options = this.generateStandardOptions(opts.method, opts.url, "json");
        options.decompress = true;
        if (opts.headers) {
            options.headers = { ...opts.headers, ...options.headers };
        }
        if (opts.longTimeout) {
            options.timeout = LONG_TIMEOUT;
        }
        if (opts.body) {
            options.json = opts.body;
        }
        return options;
    }
    request(opts, success, failure) {
        this.handleRequest(this.prepareRequestOptions(opts), success, failure);
    }
    retryableRequest(opts, success, failure) {
        this.handleRequest({ ...this.prepareRequestOptions(opts), maxAttempts: 3, retryDelay: 200 }, success, failure);
    }
    requestMultipartBinaryFileUpload(opts, success, failure) {
        const options = this.generateStandardOptions(opts.method, opts.url, "json");
        options.timeout = LONG_TIMEOUT; // 15 minutes: uploading mpk's takes some time, and can be quite large.
        if (!opts.fileName) {
            throw new Error("File to upload is missing.");
        }
        if (opts.headers) {
            options.headers = { ...opts.headers, ...options.headers };
        }
        const body = opts.body || {};
        const formData = new FormData();
        for (const key in body) {
            if (body.hasOwnProperty(key) && typeof body[key] === "boolean") {
                // Convert boolean properties to string.
                // Known issue: https://github.com/form-data/form-data/issues/137
                formData.append(key, body[key].toString());
            }
            else {
                formData.append(key, body[key]);
            }
        }
        formData.append(opts.fileParameterName, fs.createReadStream(opts.fileName));
        options.body = formData;
        this.handleRequest(options, success, failure);
    }
    requestFileDownload(opts, success, failure) {
        const options = this.generateStandardOptions(opts.method, opts.url, "buffer");
        options.timeout = LONG_TIMEOUT;
        this.handleRequest(options, success, failure);
    }
    sanitizedMethod(method) {
        return method.toUpperCase();
    }
    generateStandardOptions(method, url, responseType) {
        const options = {
            method: this.sanitizedMethod(method),
            responseType,
            url,
            timeout: SHORT_TIMEOUT,
            throwHttpErrors: false,
            headers: { "User-Agent": `mendixmodelsdk/${version_1.SDK_VERSION} ${process.platform} ${process.arch} node${process.versions.node}` }
        };
        const authInfo = (0, getAuthInfo_1.getAuthInfo)(this.config);
        if (authInfo.auth === "basic") {
            // https://github.com/sindresorhus/got/issues/1169
            options.headers.Authorization = `Basic ${Buffer.from(`${authInfo.username}:${authInfo.password}`).toString("base64")}`;
            if (authInfo.openid) {
                options.headers.openid = authInfo.openid;
            }
        }
        else {
            options.headers.Authorization = `MxToken ${authInfo.personalAccessToken}`;
        }
        return options;
    }
    handleRequest(options, success, failure) {
        this.retryRequest(options)
            .then(response => {
            if (response.statusCode < 200 || response.statusCode > 299) {
                failure({
                    error: response.body,
                    statusCode: response.statusCode,
                    url: options.url
                });
            }
            else {
                success(response.body, response);
            }
        })
            .catch(error => {
            const errorCode = error?.code;
            if (errorCode === "ECONNRESET") {
                failure({
                    error: "Not available",
                    description: "The Mendix Model API Server is not available. Please try again later.",
                    url: options.url
                });
            }
            else if (errorCode === "EPIPE") {
                console.warn("Encountered EPIPE - " +
                    "assuming failure callback is already called for this request with status code 413 (Request Entity Too Large).");
            }
            else {
                failure({
                    error: "No response",
                    description: `The Mendix Model API Server failed to respond. Result code: ${errorCode}`,
                    url: options.url
                });
            }
        });
    }
    async retryRequest(options) {
        const retryDelay = options.retryDelay;
        const maxAttempts = options.maxAttempts ?? 1;
        const filteredOptions = { ...options };
        delete filteredOptions.retryDelay;
        delete filteredOptions.maxAttempts;
        let response;
        for (let i = 0; i < maxAttempts; i++) {
            try {
                response = await this.got(filteredOptions);
                break;
            }
            catch (error) {
                if (isNetworkError(error) && retryDelay && maxAttempts > i + 1) {
                    await new Promise(resolve => setTimeout(resolve, retryDelay));
                }
                else {
                    throw error;
                }
            }
        }
        return response;
    }
    // To easily mock `got`
    async got(options) {
        return gotImpl(options);
    }
}
exports.RestTransportation = RestTransportation;
const NETWORK_ERRORS = ["ECONNRESET", "ENOTFOUND", "ESOCKETTIMEDOUT", "ETIMEDOUT", "ECONNREFUSED", "EHOSTUNREACH", "EPIPE", "EAI_AGAIN"];
function isNetworkError(error) {
    return error && NETWORK_ERRORS.includes(error.code);
}
//# sourceMappingURL=RestTransportation.js.map