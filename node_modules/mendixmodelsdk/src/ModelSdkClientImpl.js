"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelSdkClientImpl = void 0;
const internal = require("./sdk/internal");
const promiseOrCallbacks_1 = require("./sdk/internal/promiseOrCallbacks");
/**
 * Client class of the Mendix Model SDK.
 * By instantiating this class with appropriate configuration, you can create and read working copies.
 */
class ModelSdkClientImpl {
    constructor(connectionConfig, modelConstructor) {
        this.connectionConfig = connectionConfig;
        this.modelConstructor = modelConstructor;
        const defaultConfig = {
            endPoint: "https://model.api.mendix.com",
            credentials: process.env.MENDIX_TOKEN ? { personalAccessToken: process.env.MENDIX_TOKEN } : undefined
        };
        const sdkConfig = { ...defaultConfig, ...connectionConfig };
        this.client = sdkConfig.client || new internal.ModelServerClientImpl(sdkConfig);
    }
    createWorkingCopy(workingCopyParameters, callback, errorCallback) {
        if (callback) {
            checkCallbacks(callback, errorCallback);
        }
        return (0, promiseOrCallbacks_1.promiseOrCallbacks)((resolve, reject) => this.client.createWorkingCopy(workingCopyParameters, resolve, reject), callback, errorCallback);
    }
    createWorkingCopyFromTeamServer(workingCopyParameters, callback, errorCallback) {
        if (callback) {
            checkCallbacks(callback, errorCallback);
        }
        return (0, promiseOrCallbacks_1.promiseOrCallbacks)((resolve, reject) => this.client.createWorkingCopyFromTeamServer(workingCopyParameters, resolve, reject), callback, errorCallback);
    }
    createAndOpenWorkingCopy(workingCopyParameters, callback, errorCallback) {
        if (callback) {
            checkCallbacks(callback, errorCallback);
        }
        return (0, promiseOrCallbacks_1.promiseOrCallbacks)((resolve, reject) => this.createWorkingCopy(workingCopyParameters).then(workingCopyInfo => {
            this.openWorkingCopy(workingCopyInfo.id).then(resolve, reject);
        }, reject), callback, errorCallback);
    }
    openWorkingCopy(workingCopyId, callback, errorCallback) {
        if (callback) {
            checkCallbacks(callback, errorCallback);
        }
        return (0, promiseOrCallbacks_1.promiseOrCallbacks)((resolve, reject) => {
            checkWorkingCopyId(workingCopyId);
            const model = new this.modelConstructor(this.client, errorCallback ||
                (err => {
                    throw err;
                }), this.connectionConfig);
            model.initializeFromModelServer(workingCopyId).then(() => resolve(model), reject);
        }, callback, errorCallback);
    }
    loadWorkingCopyMetaData(workingCopyId, callback, errorCallback) {
        if (callback) {
            checkCallbacks(callback, errorCallback);
        }
        return (0, promiseOrCallbacks_1.promiseOrCallbacks)((resolve, reject) => {
            checkWorkingCopyId(workingCopyId);
            this.client.loadWorkingCopyMetaData(workingCopyId, resolve, reject);
        }, callback, errorCallback);
    }
    deleteWorkingCopy(workingCopyId, callback, errorCallback) {
        if (callback) {
            checkCallbacks(callback, errorCallback);
        }
        return (0, promiseOrCallbacks_1.promiseOrCallbacks)((resolve, reject) => {
            checkWorkingCopyId(workingCopyId);
            this.client.deleteWorkingCopy(workingCopyId, resolve, reject);
        }, callback, errorCallback);
    }
    grantAccess(workingCopyId, memberOpenId, callback, errorCallback) {
        if (callback) {
            checkCallbacks(callback, errorCallback);
        }
        return (0, promiseOrCallbacks_1.promiseOrCallbacks)((resolve, reject) => {
            assertBackendAccess(this.connectionConfig);
            this.client.grantAccess(workingCopyId, memberOpenId, resolve, reject);
        }, callback, errorCallback);
    }
    setWorkingCopyMembers(workingCopyId, memberOpenIds, callback, errorCallback) {
        if (callback) {
            checkCallbacks(callback, errorCallback);
        }
        return (0, promiseOrCallbacks_1.promiseOrCallbacks)((resolve, reject) => {
            assertBackendAccess(this.connectionConfig);
            this.client.setWorkingCopyMembers(workingCopyId, memberOpenIds, resolve, reject);
        }, callback, errorCallback);
    }
    revokeAccess(workingCopyId, memberOpenId, callback, errorCallback) {
        if (callback) {
            checkCallbacks(callback, errorCallback);
        }
        return (0, promiseOrCallbacks_1.promiseOrCallbacks)((resolve, reject) => {
            assertBackendAccess(this.connectionConfig);
            this.client.revokeAccess(workingCopyId, memberOpenId, resolve, reject);
        }, callback, errorCallback);
    }
    grantAccessByProject(projectId, memberOpenId, callback, errorCallback) {
        if (callback) {
            checkCallbacks(callback, errorCallback);
        }
        return (0, promiseOrCallbacks_1.promiseOrCallbacks)((resolve, reject) => {
            assertBackendAccess(this.connectionConfig);
            this.client.grantAccessByProject(projectId, memberOpenId, resolve, reject);
        }, callback, errorCallback);
    }
    revokeAccessByProject(projectId, memberOpenId, callback, errorCallback) {
        if (callback) {
            checkCallbacks(callback, errorCallback);
        }
        return (0, promiseOrCallbacks_1.promiseOrCallbacks)((resolve, reject) => {
            assertBackendAccess(this.connectionConfig);
            this.client.revokeAccessByProject(projectId, memberOpenId, resolve, reject);
        }, callback, errorCallback);
    }
    setProjectMembers(projectId, memberOpenids, callback, errorCallback) {
        if (callback) {
            checkCallbacks(callback, errorCallback);
        }
        return (0, promiseOrCallbacks_1.promiseOrCallbacks)((resolve, reject) => {
            assertBackendAccess(this.connectionConfig);
            this.client.setProjectMembers(projectId, memberOpenids, resolve, reject);
        }, callback, errorCallback);
    }
    checkAccess(workingCopyId, memberOpenId, callback, errorCallback) {
        if (callback) {
            checkCallbacks(callback, errorCallback);
        }
        return (0, promiseOrCallbacks_1.promiseOrCallbacks)((resolve, reject) => {
            assertBackendAccess(this.connectionConfig);
            this.client.checkAccess(workingCopyId, memberOpenId, resolve, reject);
        }, callback, errorCallback);
    }
    exportMpk(workingCopyId, outFilePath, callback, errorCallback) {
        if (callback) {
            checkCallbacks(callback, errorCallback);
        }
        return (0, promiseOrCallbacks_1.promiseOrCallbacks)((resolve, reject) => {
            this.client.exportMpk(workingCopyId, outFilePath, resolve, reject);
        }, callback
            ? result => {
                callback(result.data, result.lastEventId);
            }
            : callback, errorCallback);
    }
    exportModuleMpk(workingCopyId, moduleId, outFilePath, callback, errorCallback) {
        if (callback) {
            checkCallbacks(callback, errorCallback);
        }
        return (0, promiseOrCallbacks_1.promiseOrCallbacks)((resolve, reject) => this.client.exportModuleMpk(workingCopyId, moduleId, outFilePath, resolve, reject), callback, errorCallback);
    }
    getMyWorkingCopies(callback, errorCallback) {
        if (callback) {
            checkCallbacks(callback, errorCallback);
        }
        return (0, promiseOrCallbacks_1.promiseOrCallbacks)((resolve, reject) => this.client.getMyWorkingCopies(resolve, reject), callback, errorCallback);
    }
    getWorkingCopyByProject(projectId, callback, errorCallback) {
        if (callback) {
            checkCallbacks(callback, errorCallback);
        }
        return (0, promiseOrCallbacks_1.promiseOrCallbacks)((resolve, reject) => this.client.getWorkingCopyByProject(projectId, resolve, reject), callback, errorCallback);
    }
    updateWorkingCopyByProject(projectId, workingCopyId, callback, errorCallback) {
        if (callback) {
            checkCallbacks(callback, errorCallback);
        }
        return (0, promiseOrCallbacks_1.promiseOrCallbacks)((resolve, reject) => {
            assertBackendAccess(this.connectionConfig);
            this.client.updateWorkingCopyByProject(projectId, workingCopyId, resolve, reject);
        }, callback, errorCallback);
    }
    deleteWorkingCopyByProject(projectId, callback, errorCallback) {
        if (callback) {
            checkCallbacks(callback, errorCallback);
        }
        return (0, promiseOrCallbacks_1.promiseOrCallbacks)((resolve, reject) => {
            assertBackendAccess(this.connectionConfig);
            this.client.deleteWorkingCopyByProject(projectId, resolve, reject);
        }, callback, errorCallback);
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
        if (callback) {
            checkCallbacks(callback, errorCallback);
        }
        return (0, promiseOrCallbacks_1.promiseOrCallbacks)((resolve, reject) => this.client.lockWorkingCopy(workingCopyId, lockOptions, resolve, reject), callback, errorCallback);
    }
    unlockWorkingCopy(workingCopyId, lockTypeOrCallback, callbackOrErrorCallback, errorCallback) {
        let lockType;
        let callback;
        if (typeof lockTypeOrCallback === "function") {
            callback = lockTypeOrCallback;
            errorCallback = callbackOrErrorCallback;
        }
        else {
            lockType = lockTypeOrCallback;
            callback = callbackOrErrorCallback;
        }
        if (callback) {
            checkCallbacks(callback, errorCallback);
        }
        return (0, promiseOrCallbacks_1.promiseOrCallbacks)((resolve, reject) => this.client.unlockWorkingCopy(workingCopyId, lockType, resolve, reject), callback, errorCallback);
    }
    commitToTeamServer(workingCopyId, options, callback, errorCallback) {
        if (callback) {
            checkCallbacks(callback, errorCallback);
        }
        return (0, promiseOrCallbacks_1.promiseOrCallbacks)((resolve, reject) => this.client.commitToTeamServer(workingCopyId, options, resolve, reject), callback, errorCallback);
    }
}
exports.ModelSdkClientImpl = ModelSdkClientImpl;
function assertBackendAccess(config) {
    const backendCredentials = config?.credentials;
    if (!backendCredentials || !backendCredentials.username || !backendCredentials.password) {
        throw new Error("Mendix Model SDK config: credentials are not defined. Backend access credentials are necessary to perform this operation.");
    }
}
function checkWorkingCopyId(workingCopyId) {
    if (!workingCopyId) {
        throw new Error("Mendix Model SDK config: workingCopyId is not defined.");
    }
}
function checkCallbacks(callback, errorCallback) {
    if (!callback) {
        throw new Error("Mendix Model SDK config: success callback is not defined.");
    }
    if (!errorCallback) {
        throw new Error("Mendix Model SDK config: error callback is not defined.");
    }
}
//# sourceMappingURL=ModelSdkClientImpl.js.map