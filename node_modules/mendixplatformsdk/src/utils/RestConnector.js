"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestConnector = void 0;
const got_1 = require("got");
/** @internal */
class RestConnector {
    constructor(baseURL, credentials, validateStatus = true, headers = {}) {
        this.defaultOptions = {
            url: baseURL,
            throwHttpErrors: validateStatus,
            headers: { ...headers },
            retry: 0
        };
        if (credentials) {
            switch (credentials.type) {
                case "bearer": {
                    this.defaultOptions.headers.Authorization = `Bearer ${credentials.accessToken}`;
                    break;
                }
                case "pat": {
                    this.defaultOptions.headers.Authorization = `MxToken ${credentials.mxToken}`;
                    break;
                }
                default:
                    throw new Error("Unknown auth type");
            }
        }
    }
    static create(baseURL, credentials, validateStatus = true) {
        return new RestConnector(baseURL, credentials, validateStatus);
    }
    async get(path, searchParams) {
        return doRequest({
            ...this.defaultOptions,
            method: "GET",
            pathname: path,
            searchParams: searchParams ? { ...searchParams } : undefined
        });
    }
    async getReadableStreamResponse(path) {
        return new Promise((resolve, reject) => {
            const request = (0, got_1.default)({
                ...this.defaultOptions,
                method: "GET",
                pathname: path,
                isStream: true
            });
            let localResponse;
            request.on("error", (error) => reject(createInformativeError(`Stream request failed, '${path}' message: ${error.message}`, localResponse)));
            request.on("response", (response) => {
                localResponse = response;
                resolve({
                    data: request,
                    status: response.statusCode,
                    statusText: response.statusMessage || "",
                    headers: response.headers
                });
            });
        });
    }
    async post(path, body) {
        return doRequest({
            ...this.defaultOptions,
            method: "POST",
            pathname: path,
            json: body
        });
    }
    async delete(path) {
        return doRequest({
            ...this.defaultOptions,
            method: "DELETE",
            pathname: path
        });
    }
    async put(path, body) {
        return doRequest({
            ...this.defaultOptions,
            method: "PUT",
            pathname: path,
            json: body
        });
    }
    async awaitTask(url, body, method = "POST") {
        const result = await doRequest({ ...this.defaultOptions, method, pathname: url, json: body });
        if (result.status !== 202) {
            throw new Error(`Invalid HTTP status ${result.status} while ${method}ing task to '${url}': ${JSON.stringify(result.data)}`);
        }
        const { taskId } = result.data;
        let lastTaskData = { status: "running" };
        while (lastTaskData.status === "running") {
            await delay(500);
            const response = await doRequest({ ...this.defaultOptions, method: "GET", pathname: `/v1/tasks/${taskId}` });
            if (response.status !== 200) {
                throw new Error(`HTTP status ${response.status} while retrieving task ${taskId}: ${JSON.stringify(response.data)}`);
            }
            lastTaskData = response.data;
        }
        if (lastTaskData.status !== "finished") {
            throw lastTaskData.result;
        }
        return lastTaskData;
    }
    async awaitPlatformJob(url, body, method = "POST") {
        const result = await doRequest({ ...this.defaultOptions, method, pathname: url, json: body });
        if (result.status !== 202) {
            throw new Error(`Invalid HTTP status ${result.status} while ${method}ing task to '${url}': ${JSON.stringify(result.data)}`);
        }
        const jobId = result.data.job_id;
        let lastTaskData = { status: "scheduled" };
        while (["scheduled", "running"].includes(lastTaskData.status)) {
            await delay(500);
            const response = await doRequest({
                ...this.defaultOptions,
                method: "GET",
                pathname: `/rest/projectservice/v1/projects/jobs/${jobId}`
            });
            if (response.status !== 200) {
                throw new Error(`HTTP status ${response.status} while retrieving task ${jobId}: ${JSON.stringify(response.data)}`);
            }
            lastTaskData = response.data;
        }
        if (lastTaskData.status !== "completed") {
            throw new Error(lastTaskData.error_message);
        }
        return lastTaskData;
    }
}
exports.RestConnector = RestConnector;
async function doRequest(options) {
    try {
        const response = (await (0, got_1.default)(options));
        return {
            data: tryParse(response.body),
            status: response.statusCode,
            statusText: response.statusMessage || "",
            headers: response.headers
        };
    }
    catch (error) {
        throw createInformativeError(`Request failed, ${options.method} '${options.pathname}' message: ${error.message}`, error.response);
    }
}
function tryParse(body) {
    try {
        return JSON.parse(body);
    }
    catch (_error) {
        return body;
    }
}
function createInformativeError(message, response) {
    const errorToThrow = new Error(message);
    if (response) {
        // The request was made and the server responded with a status code that falls out of the range of 2xx
        // Add it as a part of the error, to prevent [object Object]
        errorToThrow.responseData = response.body;
        errorToThrow.responseStatus = response.statusCode;
    }
    return errorToThrow;
}
async function delay(duration) {
    return new Promise(resolve => setTimeout(resolve, duration));
}
//# sourceMappingURL=RestConnector.js.map