"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelServerClientImpl = void 0;
const fs = require("fs");
const path = require("path");
const EventSource = require("eventsource");
const configuration_1 = require("../configuration");
const RestTransportation_1 = require("./RestTransportation");
const getAuthInfo_1 = require("./getAuthInfo");
const utils_1 = require("../utils");
/**
 * Default implementation of {@link IModelServerClient}.
 */
class ModelServerClientImpl {
    constructor(config) {
        this.config = config;
        this.pendingRequests = [];
        this.MAX_PARALLEL_REQUESTS = 100;
        this.runningRequests = 0;
        this.getTaskDelayInMs = 500;
        this.transportation = config.transportation || new RestTransportation_1.RestTransportation(config);
    }
    getHeadersForModificationRequest() {
        if (this.editLockId) {
            return { "Edit-Lock-Id": this.editLockId };
        }
        return undefined;
    }
    createWorkingCopy(workingCopyInfo, callback, errorCallback) {
        this.transportation.requestMultipartBinaryFileUpload({
            method: "post",
            url: this.getFullUrl(`/v2/wc`),
            body: this.getCreateWorkingCopyData(workingCopyInfo),
            fileParameterName: "template",
            fileName: workingCopyInfo.template
        }, newTask => {
            this.awaitTask(newTask.taskId)
                .then(taskResponse => {
                callback(taskResponse.result);
            })
                .catch(errorCallback);
        }, errorCallback);
    }
    createWorkingCopyFromTeamServer(workingCopyInfo, callback, errorCallback) {
        this.transportation.request({
            method: "post",
            url: this.getFullUrl(`/v2/wc`),
            body: this.getCreateWorkingCopyFromTeamServerData(workingCopyInfo)
        }, newTask => {
            this.awaitTask(newTask.taskId)
                .then(taskResponse => {
                callback(taskResponse.result);
            })
                .catch(errorCallback);
        }, errorCallback);
    }
    loadWorkingCopyMetaData(workingCopyId, callback, errorCallback) {
        this.transportation.retryableRequest({ method: "get", url: this.getFullUrl(`/v1/wc/${workingCopyId}`) }, callback, errorCallback);
    }
    loadUnitInterfaces(workingCopyId, callback, errorCallback, rootUnitId) {
        let url = `/v1/wc/${workingCopyId}/units`;
        if (rootUnitId) {
            url += `?rootUnitId=${rootUnitId}`;
        }
        this.transportation.retryableRequest({
            method: "get",
            url: this.getFullUrl(url)
        }, (data, response) => {
            const lastEventIdHeader = response.headers["last-event-id"];
            if (!lastEventIdHeader) {
                errorCallback(new Error("Header 'last-event-id' not found in load unit interfaces response"));
                return;
            }
            callback({
                units: data,
                eventId: Number(lastEventIdHeader)
            });
        }, errorCallback);
    }
    deleteWorkingCopy(workingCopyId, callback, errorCallback) {
        // A 404 error thrown when the working copy doesn't exist should not be considered as an error
        this.transportation.retryableRequest({ method: "delete", url: this.getFullUrl(`/v1/wc/${workingCopyId}`) }, callback, (error) => {
            if (error?.error?.code === 404) {
                callback();
            }
            else {
                errorCallback(error);
            }
        });
    }
    grantAccess(workingCopyId, memberOpenId, callback, errorCallback) {
        this.transportation.retryableRequest({ method: "put", url: this.getFullUrl(`/v1/wc/${workingCopyId}/members/${encodeURIComponent(memberOpenId)}`) }, callback, errorCallback);
    }
    setWorkingCopyMembers(workingCopyId, memberOpenIds, callback, errorCallback) {
        this.transportation.retryableRequest({ method: "put", url: this.getFullUrl(`/v1/wc/${workingCopyId}/members`), body: { memberOpenIds } }, callback, errorCallback);
    }
    revokeAccess(workingCopyId, memberOpenId, callback, errorCallback) {
        this.transportation.retryableRequest({ method: "delete", url: this.getFullUrl(`/v1/wc/${workingCopyId}/members/${encodeURIComponent(memberOpenId)}`) }, callback, errorCallback);
    }
    checkAccess(workingCopyId, memberOpenId, callback, errorCallback) {
        this.transportation.retryableRequest({
            method: "get",
            url: this.getFullUrl(`/v1/wc/${workingCopyId}/members/${encodeURIComponent(memberOpenId)}`)
        }, (response) => callback(response.hasAccess), errorCallback);
    }
    grantAccessByProject(projectId, memberOpenId, callback, errorCallback) {
        this.transportation.retryableRequest({ method: "put", url: this.getFullUrl(`/v1/project/${projectId}/members/${encodeURIComponent(memberOpenId)}`) }, callback, errorCallback);
    }
    revokeAccessByProject(projectId, memberOpenId, callback, errorCallback) {
        this.transportation.retryableRequest({ method: "delete", url: this.getFullUrl(`/v1/project/${projectId}/members/${encodeURIComponent(memberOpenId)}`) }, callback, errorCallback);
    }
    setProjectMembers(projectId, memberOpenids, callback, errorCallback) {
        this.transportation.retryableRequest({ method: "put", url: this.getFullUrl(`/v1/project/${projectId}/members`), body: { memberOpenids } }, callback, errorCallback);
    }
    exportMpk(workingCopyId, outFilePath, callback, errorCallback) {
        this.transportation.requestFileDownload({
            method: "get",
            url: this.getFullUrl(`/v1/wc/${workingCopyId}/mpk`)
        }, this.createDownloadHandler(outFilePath, (data, response) => {
            callback({ data, lastEventId: Number(response.headers["last-event-id"]) });
        }, errorCallback), errorCallback);
    }
    exportModuleMpk(workingCopyId, moduleId, outFilePath, callback, errorCallback) {
        this.transportation.requestFileDownload({
            method: "get",
            url: this.getFullUrl(`/v1/wc/${workingCopyId}/module/${moduleId}/mpk`)
        }, this.createDownloadHandler(outFilePath, callback, errorCallback), errorCallback);
    }
    importModuleMpk(workingCopyId, mpkPath, callback, errorCallback) {
        this.transportation.requestMultipartBinaryFileUpload({
            method: "post",
            url: this.getFullUrl(`/v1/wc/${workingCopyId}/module`),
            headers: this.getHeadersForModificationRequest(),
            fileParameterName: "mpk",
            fileName: mpkPath
        }, callback, errorCallback);
    }
    loadUnitById(workingCopyId, unitId, callback, errorCallback) {
        this.loadUnitByIdBatched({ workingCopyId, unitId, callback, errorCallback });
    }
    filterUnitsByCustomWidgetId(workingCopyId, widgetId, callback, errorCallback) {
        this.transportation.retryableRequest({
            method: "get",
            url: this.getFullUrl(`/v1/wc/${workingCopyId}/units/filter/custom-widget?widgetId=${widgetId}`)
        }, callback, errorCallback);
    }
    sendDeltas(workingCopyId, deltas, callback, errorCallback) {
        this.transportation.request({
            method: "post",
            url: this.getFullUrl(`/v1/wc/${workingCopyId}/deltas`),
            headers: this.getHeadersForModificationRequest(),
            body: { deltas: deltas }
        }, (data, response) => {
            callback({
                firstError: data?.firstError,
                eventId: Number(response.headers["last-event-id"])
            });
        }, errorCallback);
    }
    getFiles(workingCopyId, options, callback, errorCallback) {
        if (!options.format) {
            options.format = "json";
        }
        const filterPostfix = options.filter ? "&filter=" + options.filter : "";
        const downloadUrl = this.getFullUrl(`/v1/wc/${workingCopyId}/files/?format=${options.format}${filterPostfix}`);
        if (options.format === "json") {
            this.transportation.retryableRequest({ method: "get", url: downloadUrl }, callback, errorCallback);
        }
        else if (options.format === "zip") {
            this.transportation.requestFileDownload({
                method: "get",
                url: downloadUrl
            }, this.createDownloadHandler(options.path, callback, errorCallback), errorCallback);
        }
        else {
            throw new Error("Unsupported format" + options.format);
        }
    }
    getFile(workingCopyId, filePath, outFilePath, callback, errorCallback) {
        this.transportation.requestFileDownload({
            method: "get",
            url: this.getFullUrl(`/v1/wc/${workingCopyId}/files/${encodeURIComponent(filePath)}`)
        }, this.createDownloadHandler(outFilePath, callback, errorCallback), errorCallback);
    }
    putFile(workingCopyId, inFilePath, filePath, callback, errorCallback) {
        this.transportation.requestMultipartBinaryFileUpload({
            method: "put",
            url: this.getFullUrl(`/v1/wc/${workingCopyId}/files/${encodeURIComponent(filePath)}`),
            headers: this.getHeadersForModificationRequest(),
            fileParameterName: "file",
            fileName: inFilePath
        }, (data, response) => {
            callback(Number(response.headers["last-event-id"]));
        }, errorCallback);
    }
    deleteFile(workingCopyId, filePath, callback, errorCallback) {
        this.transportation.request({
            method: "delete",
            url: this.getFullUrl(`/v1/wc/${workingCopyId}/files/${encodeURIComponent(filePath)}`),
            headers: this.getHeadersForModificationRequest()
        }, (data, response) => {
            callback(Number(response.headers["last-event-id"]));
        }, errorCallback);
    }
    getMyWorkingCopies(callback, errorCallback) {
        this.transportation.retryableRequest({ method: "get", url: this.getFullUrl(`/v1/wc`) }, callback, errorCallback);
    }
    getWorkingCopyByProject(projectId, callback, errorCallback) {
        this.transportation.retryableRequest({
            method: "get",
            url: this.getFullUrl(`/v1/project/${projectId}`)
        }, (response) => callback(response.workingCopyId), errorCallback);
    }
    /**
     * Update the project-to-working copy mapping with the given data.
     */
    updateWorkingCopyByProject(projectId, workingCopyId, callback, errorCallback) {
        this.transportation.retryableRequest({
            method: "put",
            url: this.getFullUrl(`/v1/project/${projectId}`),
            body: {
                projectId: projectId,
                workingCopyId: workingCopyId
            }
        }, callback, errorCallback);
    }
    /**
     * Deletes the project-to-working copy mapping for given project ID.
     */
    deleteWorkingCopyByProject(projectId, callback, errorCallback) {
        this.transportation.retryableRequest({ method: "delete", url: this.getFullUrl(`/v1/project/${projectId}`) }, callback, errorCallback);
    }
    lockWorkingCopy(workingCopyId, lockOptionsOrCallback, callbackOrErrorCallback, errorCallback) {
        let callback;
        let lockOptions;
        if (typeof lockOptionsOrCallback === "function") {
            callback = lockOptionsOrCallback;
            errorCallback = callbackOrErrorCallback;
            lockOptions = { lockType: "bidi" };
        }
        else if (typeof lockOptionsOrCallback === "string") {
            lockOptions = { lockType: lockOptionsOrCallback };
            callback = callbackOrErrorCallback;
        }
        else {
            lockOptions = lockOptionsOrCallback;
            callback = callbackOrErrorCallback;
        }
        if (lockOptions.lockType === "edit") {
            this.editLockId = lockOptions.lockId;
        }
        this.transportation.retryableRequest({
            method: "post",
            url: this.getFullUrl(`/v1/wc/${workingCopyId}/lock`),
            body: lockOptions
        }, callback, errorCallback);
    }
    unlockWorkingCopy(workingCopyId, lockType, callback, errorCallback) {
        this.editLockId = undefined;
        this.transportation.retryableRequest({
            method: "post",
            url: this.getFullUrl(`/v1/wc/${workingCopyId}/unlock`),
            body: lockType && { lockType }
        }, callback, errorCallback);
    }
    commitToTeamServer(workingCopyId, options, callback, errorCallback) {
        this.transportation.request({
            method: "post",
            url: this.getFullUrl(`/v1/wc/${workingCopyId}/commit`),
            body: options,
            longTimeout: true
        }, callback, errorCallback);
    }
    getModelEventSource(workingCopyId, lastEventId) {
        if (utils_1.utils.isBrowser()) {
            // Studio-specific call to '/api'.
            return new EventSource(`${location.protocol}//${location.host}/api/v1/wc/${workingCopyId}/events`, {
                headers: {
                    "Last-Event-ID": lastEventId
                }
            });
        }
        else {
            return new EventSource(`${this.config.endPoint}/v1/wc/${workingCopyId}/events`, {
                headers: {
                    Authorization: this.getAuthorizationHeader(),
                    "Last-Event-ID": lastEventId
                }
            });
        }
    }
    getWorkingCopyEventSource(workingCopyId) {
        if (utils_1.utils.isBrowser()) {
            // Studio-specific call to '/api'.
            return new EventSource(`${location.protocol}//${location.host}/api/v1/wc/${workingCopyId}/wc-events`);
        }
        else {
            return new EventSource(`${this.config.endPoint}/v1/wc/${workingCopyId}/wc-events`, {
                headers: {
                    Authorization: this.getAuthorizationHeader()
                }
            });
        }
    }
    sendGetUnitRequest(info) {
        this.runningRequests += 1;
        this.transportation.retryableRequest({
            method: "get",
            url: this.getFullUrl(`/v1/wc/${info.workingCopyId}/units/${info.unitId}`)
        }, (data, response) => {
            this.completeGetUnitRequest();
            const lastEventIdHeader = response.headers["last-event-id"];
            if (!lastEventIdHeader) {
                info.errorCallback(new Error("Header 'last-event-id' not found in load unit response"));
                return;
            }
            info.callback({
                unit: data,
                eventId: Number(lastEventIdHeader)
            });
        }, error => {
            this.completeGetUnitRequest();
            info.errorCallback(error);
        });
    }
    createDownloadHandler(exportPath, callback, errorCallback) {
        if (exportPath && !fs) {
            throw new Error("cannot download asset to disk without file system");
        }
        return (data, response) => {
            if (exportPath) {
                this.storeResponseAsFile(data, exportPath, () => callback(null, response), errorCallback);
            }
            else {
                callback(data, response);
            }
        };
    }
    storeResponseAsFile(response, outFilePath, callback, errorCallback) {
        const dirPath = path.dirname(outFilePath);
        fs.lstat(dirPath, (err, stats) => {
            if (err || !stats.isDirectory()) {
                const cwd = process.cwd();
                errorCallback(new Error(`target directory ${dirPath} does not exist relative to ${cwd}`));
                return;
            }
            fs.open(outFilePath, "w", (err2, fd) => {
                // open for (over-)writing
                if (err2) {
                    errorCallback(new Error(`Could not create file with path "${outFilePath}"; due to: ${err2}`));
                    return;
                }
                fs.writeFile(outFilePath, response, { encoding: "binary" }, err3 => {
                    if (err3) {
                        errorCallback(new Error(`Could not write to file with path "${outFilePath}"; due to: ${err3}`));
                        return;
                    }
                    callback(); // make sure we don't expose any arguments to the end-user
                });
            });
        });
    }
    loadUnitByIdBatched(info) {
        if (this.runningRequests < this.MAX_PARALLEL_REQUESTS) {
            this.sendGetUnitRequest(info);
        }
        else {
            this.pendingRequests.push(info);
        }
    }
    completeGetUnitRequest() {
        this.runningRequests -= 1;
        if (this.runningRequests < this.MAX_PARALLEL_REQUESTS && this.pendingRequests.length > 0) {
            this.sendGetUnitRequest(this.pendingRequests.shift());
        }
    }
    getCreateWorkingCopyData(workingCopyInfo) {
        const workingCopyData = {
            name: workingCopyInfo.name,
            description: workingCopyInfo.description || "",
            avatarUrl: workingCopyInfo.avatarUrl || "",
            projectId: workingCopyInfo.projectId || "",
            longLived: workingCopyInfo.longLived === true,
            teamServerBaseBranch: workingCopyInfo.teamServerBaseBranch || "",
            teamServerBaseRevision: workingCopyInfo.teamServerBaseRevision || -1,
            teamServerBaseCommitId: workingCopyInfo.teamServerBaseCommitId || "",
            markAsChanged: workingCopyInfo.markAsChanged === true,
            setAsDefault: workingCopyInfo.setAsDefault === true,
            isCollaboration: workingCopyInfo.isCollaboration === true,
            priority: workingCopyInfo.priority || configuration_1.Priority.Low
        };
        return workingCopyData;
    }
    getCreateWorkingCopyFromTeamServerData(workingCopyInfo) {
        const workingCopyData = {
            name: workingCopyInfo.name,
            description: workingCopyInfo.description || "",
            avatarUrl: workingCopyInfo.avatarUrl || "",
            projectId: workingCopyInfo.projectId || "",
            longLived: workingCopyInfo.longLived === true,
            teamServerBaseBranch: workingCopyInfo.teamServerBaseBranch,
            teamServerBaseRevision: workingCopyInfo.teamServerBaseRevision,
            teamServerBaseCommitId: workingCopyInfo.teamServerBaseCommitId,
            teamServerGitUrl: workingCopyInfo.teamServerGitUrl,
            markAsChanged: workingCopyInfo.markAsChanged === true,
            setAsDefault: workingCopyInfo.setAsDefault === true,
            isCollaboration: workingCopyInfo.isCollaboration === true,
            priority: workingCopyInfo.priority || configuration_1.Priority.Low
        };
        return workingCopyData;
    }
    getAuthorizationHeader() {
        const authInfo = (0, getAuthInfo_1.getAuthInfo)(this.config);
        if (authInfo.auth === "basic") {
            return `Basic ${Buffer.from(authInfo.username + ":" + authInfo.password).toString("base64")}`;
        }
        if (authInfo.auth === "pat") {
            return `MxToken ${authInfo.personalAccessToken}`;
        }
        throw new Error("No credentials provided");
    }
    async awaitTask(taskId) {
        let lastTaskData = { status: "running" };
        while (lastTaskData.status === "running") {
            await new Promise(resolve => setTimeout(resolve, this.getTaskDelayInMs));
            lastTaskData = await new Promise((resolve, reject) => this.transportation.retryableRequest({ method: "get", url: this.getFullUrl(`/v1/tasks/${taskId}`) }, resolve, reject));
        }
        if (lastTaskData.status !== "finished") {
            // Emulate the synchronous request error format by having a nested 'error' property with the actual error.
            const error = new Error("An error occurred while creating the working copy");
            error.error = lastTaskData.result;
            throw error;
        }
        return lastTaskData;
    }
    getFullUrl(relativeUrl) {
        return utils_1.utils.combineUrl(this.config.endPoint || "", relativeUrl);
    }
}
exports.ModelServerClientImpl = ModelServerClientImpl;
//# sourceMappingURL=ModelServerClientImpl.js.map