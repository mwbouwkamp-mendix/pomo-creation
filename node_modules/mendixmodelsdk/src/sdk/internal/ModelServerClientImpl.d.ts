import * as EventSource from "eventsource";
import { configuration } from "../configuration";
import { common } from "../../common";
import { ILockWorkingCopyResponse, IWorkingCopy, IGetFilesOptions, ILockWorkingCopyOptions, LockType, ILoadUnitInterfacesResponse, ILoadUnitResponse, ICommitToTeamServerOptions } from "./transportInterfaces";
import { IModelServerClient, ISendDeltasResult } from "./IModelServerClient";
import { Delta } from "./deltas";
import { IExportMpkResponse } from "./AbstractModel";
/**
 * Default implementation of {@link IModelServerClient}.
 */
export declare class ModelServerClientImpl implements IModelServerClient {
    private config;
    private pendingRequests;
    private MAX_PARALLEL_REQUESTS;
    private runningRequests;
    private editLockId;
    private transportation;
    getTaskDelayInMs: number;
    constructor(config: configuration.ISdkConfig);
    private getHeadersForModificationRequest;
    createWorkingCopy(workingCopyInfo: configuration.ICreateWorkingCopyParameters, callback: common.ICallback<IWorkingCopy>, errorCallback: common.IErrorCallback): void;
    createWorkingCopyFromTeamServer(workingCopyInfo: configuration.ICreateWorkingCopyFromTeamServerParameters, callback: common.ICallback<IWorkingCopy>, errorCallback: common.IErrorCallback): void;
    loadWorkingCopyMetaData(workingCopyId: string, callback: common.ICallback<IWorkingCopy>, errorCallback: common.IErrorCallback): void;
    loadUnitInterfaces(workingCopyId: string, callback: common.ICallback<ILoadUnitInterfacesResponse>, errorCallback: common.IErrorCallback, rootUnitId?: string): void;
    deleteWorkingCopy(workingCopyId: string, callback: common.IVoidCallback, errorCallback: common.IErrorCallback): void;
    grantAccess(workingCopyId: string, memberOpenId: string, callback: common.IVoidCallback, errorCallback: common.IErrorCallback): void;
    setWorkingCopyMembers(workingCopyId: string, memberOpenIds: string[], callback: common.IVoidCallback, errorCallback: common.IErrorCallback): void;
    revokeAccess(workingCopyId: string, memberOpenId: string, callback: common.IVoidCallback, errorCallback: common.IErrorCallback): void;
    checkAccess(workingCopyId: string, memberOpenId: string, callback: common.ICallback<boolean>, errorCallback: common.IErrorCallback): void;
    grantAccessByProject(projectId: string, memberOpenId: string, callback: common.IVoidCallback, errorCallback: common.IErrorCallback): void;
    revokeAccessByProject(projectId: string, memberOpenId: string, callback: common.IVoidCallback, errorCallback: common.IErrorCallback): void;
    setProjectMembers(projectId: string, memberOpenids: string[], callback: common.IVoidCallback, errorCallback: common.IErrorCallback): void;
    exportMpk(workingCopyId: string, outFilePath: string, callback: common.ICallback<IExportMpkResponse>, errorCallback: common.IErrorCallback): void;
    exportModuleMpk(workingCopyId: string, moduleId: string, outFilePath: string, callback: common.IVoidCallback, errorCallback: common.IErrorCallback): void;
    importModuleMpk(workingCopyId: string, mpkPath: string | Blob, callback: common.ICallback<string>, errorCallback: common.IErrorCallback): void;
    loadUnitById(workingCopyId: string, unitId: string, callback: common.ICallback<ILoadUnitResponse>, errorCallback: common.IErrorCallback): void;
    filterUnitsByCustomWidgetId(workingCopyId: string, widgetId: string, callback: common.ICallback<string[]>, errorCallback: common.IErrorCallback): void;
    sendDeltas(workingCopyId: string, deltas: Delta[], callback: common.ICallback<ISendDeltasResult>, errorCallback: common.IErrorCallback): void;
    getFiles(workingCopyId: string, options: IGetFilesOptions, callback: common.ICallback<any>, errorCallback: common.IErrorCallback): void;
    getFile(workingCopyId: string, filePath: string, outFilePath: string, callback: common.ICallback<any>, errorCallback: common.IErrorCallback): void;
    putFile(workingCopyId: string, inFilePath: string | Blob, filePath: string, callback: common.ICallback<number>, errorCallback: common.IErrorCallback): void;
    deleteFile(workingCopyId: string, filePath: string, callback: common.ICallback<number>, errorCallback: common.IErrorCallback): void;
    getMyWorkingCopies(callback: common.ICallback<IWorkingCopy[]>, errorCallback: common.IErrorCallback): void;
    getWorkingCopyByProject(projectId: string, callback: common.ICallback<string>, errorCallback: common.IErrorCallback): void;
    /**
     * Update the project-to-working copy mapping with the given data.
     */
    updateWorkingCopyByProject(projectId: string, workingCopyId: string, callback: common.IVoidCallback, errorCallback: common.IErrorCallback): void;
    /**
     * Deletes the project-to-working copy mapping for given project ID.
     */
    deleteWorkingCopyByProject(projectId: string, callback: common.IVoidCallback, errorCallback: common.IErrorCallback): void;
    lockWorkingCopy(workingCopyId: string, callback: common.ICallback<ILockWorkingCopyResponse>, errorCallback: common.IErrorCallback): void;
    lockWorkingCopy(workingCopyId: string, lockOptions: ILockWorkingCopyOptions | LockType, callback: common.ICallback<ILockWorkingCopyResponse>, errorCallback: common.IErrorCallback): void;
    unlockWorkingCopy(workingCopyId: string, lockType: LockType | undefined, callback: common.IVoidCallback, errorCallback: common.IErrorCallback): void;
    commitToTeamServer(workingCopyId: string, options: ICommitToTeamServerOptions, callback: common.IVoidCallback, errorCallback: common.IErrorCallback): void;
    getModelEventSource(workingCopyId: string, lastEventId: number): EventSource;
    getWorkingCopyEventSource(workingCopyId: string): EventSource;
    private sendGetUnitRequest;
    private createDownloadHandler;
    private storeResponseAsFile;
    private loadUnitByIdBatched;
    private completeGetUnitRequest;
    private getCreateWorkingCopyData;
    private getCreateWorkingCopyFromTeamServerData;
    private getAuthorizationHeader;
    private awaitTask;
    private getFullUrl;
}
