import * as EventSource from "eventsource";
import { configuration } from "../configuration";
import { common } from "../../common";
import { ILockWorkingCopyResponse, IWorkingCopy, IGetFilesOptions, ILockWorkingCopyOptions, LockType, ILoadUnitInterfacesResponse, ILoadUnitResponse, ICommitToTeamServerOptions } from "./transportInterfaces";
import { Delta } from "./deltas";
import { IExportMpkResponse } from "../internal";
/**
 * The IModelServerClient interface is used for forwarding calls to the underlying Mendix Model API.
 * Implementations of this interface serve as fully-typed clients for the Model API Server.
 * Default implementation: {@link ModelServerClientImpl}.
 * Note that all its methods are asynchronous, with the last two arguments always being a (success) callback and an error callback,
 * and we will only explain the "essential" arguments in their documentation.
 *
 * Note: this interface is part of the internal API of the Model SDK.
 *
 * DISCLAIMER: End-users of the SDK should never rely directly on elements of the internal API,
 * e.g. by implementing interfaces or instantiating classes.
 * Anything in this file can be removed, or change signature, even between patch-level SDK versions.
 */
export interface IModelServerClient {
    createWorkingCopy(workingCopyInfo: configuration.ICreateWorkingCopyParameters, callback: common.ICallback<IWorkingCopy>, errorCallback: common.IErrorCallback): void;
    createWorkingCopyFromTeamServer(workingCopyInfo: configuration.ICreateWorkingCopyFromTeamServerParameters, callback: common.ICallback<IWorkingCopy>, errorCallback: common.IErrorCallback): void;
    /**
     * Loads all unit interfaces of the working copy indicated with `workingCopyId` as an array of normalized model JSON.
     */
    loadUnitInterfaces(workingCopyId: string, callback: common.ICallback<ILoadUnitInterfacesResponse>, errorCallback: common.IErrorCallback, rootUnitId?: string): void;
    /**
     * Retrieves the top-level working copy information/meta data for the working copy with given `workingCopyId`.
     */
    loadWorkingCopyMetaData(workingCopyId: string, callback: common.ICallback<IWorkingCopy>, errorCallback: common.IErrorCallback): void;
    deleteWorkingCopy(workingCopyId: string, callback: common.IVoidCallback, errorCallback: common.IErrorCallback): void;
    grantAccess(workingCopyId: string, memberOpenId: string, callback: common.IVoidCallback, errorCallback: common.IErrorCallback): void;
    setWorkingCopyMembers(workingCopyId: string, memberOpenIds: string[], callback: common.IVoidCallback, errorCallback: common.IErrorCallback): void;
    revokeAccess(workingCopyId: string, memberOpenId: string, callback: common.IVoidCallback, errorCallback: common.IErrorCallback): void;
    checkAccess(workingCopyId: string, memberOpenId: string, callback: common.ICallback<boolean>, errorCallback: common.IErrorCallback): void;
    revokeAccessByProject(projectId: string, memberOpenId: string, callback: common.IVoidCallback, errorCallback: common.IErrorCallback): void;
    grantAccessByProject(projectId: string, memberOpenId: string, callback: common.IVoidCallback, errorCallback: common.IErrorCallback): void;
    setProjectMembers(projectId: string, memberOpenids: string[], callback: common.IVoidCallback, errorCallback: common.IErrorCallback): void;
    getMyWorkingCopies(callback: common.ICallback<IWorkingCopy[]>, errorCallback: common.IErrorCallback): void;
    exportMpk(workingCopyId: string, outFilePath: string, callback: common.ICallback<IExportMpkResponse>, errorCallback: common.IErrorCallback): void;
    exportModuleMpk(workingCopyId: string, moduleId: string, outFilePath: string, callback: common.IVoidCallback, errorCallback: common.IErrorCallback): void;
    importModuleMpk(workingCopyId: string, mpkPath: string | Blob, callback: common.ICallback<string>, errorCallback: common.IErrorCallback): void;
    /**
     * Retrieves a unit, as normalized model JSON, by working copy and unit ID.
     */
    loadUnitById(workingCopyId: string, unitId: string, callback: common.ICallback<ILoadUnitResponse>, errorCallback: common.IErrorCallback): void;
    /**
     * Returns a list of unitIds that contains a specific custom widget
     */
    filterUnitsByCustomWidgetId(workingCopyId: string, widgetId: string, callback: common.ICallback<string[]>, errorCallback: common.IErrorCallback): void;
    /**
     * Sends a sequence of deltas on the working copy with the given `workingCopyId` to the Model API Server;
     * batched if more than one is passed, as a single delta otherwise.
     */
    sendDeltas(workingCopyId: string, deltas: Delta[], callback: common.ICallback<ISendDeltasResult>, errorCallback: common.IErrorCallback): void;
    /**
     * Returns an array of all filepaths in the working copy.
     */
    getFiles(workingCopyId: string, options: IGetFilesOptions, callback: common.ICallback<string[]>, errorCallback: common.IErrorCallback): void;
    /**
     * Downloads the file specified by the supplied filepath.
     */
    getFile(workingCopyId: string, filePath: string, outFilePath: string, callback: common.IVoidCallback, errorCallback: common.IErrorCallback): void;
    /**
     * Uploads the supplied file to the specified filepath.
     */
    putFile(workingCopyId: string, inFilePath: string | Blob, filePath: string, callback: common.ICallback<number>, errorCallback: common.IErrorCallback): void;
    /**
     * Deletes the file with the specified filepath.
     */
    deleteFile(workingCopyId: string, filePath: string, callback: common.ICallback<number>, errorCallback: common.IErrorCallback): void;
    /**
     * Retrieves the working copy id that the given project ID maps to.
     */
    getWorkingCopyByProject(projectId: string, callback: common.ICallback<string>, errorCallback: common.IErrorCallback): void;
    /**
     * Update the project-to-working copy mapping with the given data.
     */
    updateWorkingCopyByProject(projectId: string, workingCopyId: string, callback: common.IVoidCallback, errorCallback: common.IErrorCallback): void;
    /**
     * Deletes the project-to-working copy mapping for given project ID.
     */
    deleteWorkingCopyByProject(projectId: string, callback: common.IVoidCallback, errorCallback: common.IErrorCallback): void;
    /**
     * Lock the working copy (will be locked for the currently authenticated openid)
     */
    lockWorkingCopy(workingCopyId: string, callback: common.ICallback<ILockWorkingCopyResponse>, errorCallback: common.IErrorCallback): void;
    /**
     * Lock the working copy with lockOptions (will be locked for the currently authenticated openid)
     */
    lockWorkingCopy(workingCopyId: string, lockOptions: ILockWorkingCopyOptions | LockType, callback: common.ICallback<ILockWorkingCopyResponse>, errorCallback: common.IErrorCallback): void;
    /**
     * Unlock the working copy (will be unlocked for the currently authenticated openid, will fail if it's locked by another openid)
     *
     * @param lockType if specified, only unlock if the working copy has this specified lock
     */
    unlockWorkingCopy(workingCopyId: string, lockType: LockType | undefined, callback: common.IVoidCallback, errorCallback: common.IErrorCallback): void;
    /**
     * Commits the contents of the working copy with the given id to the team server
     */
    commitToTeamServer(workingCopyId: string, options: ICommitToTeamServerOptions, callback: common.IVoidCallback, errorCallback: common.IErrorCallback): void;
    /**
     * Returns an EventSource instance that will emit events that occur on the working copy model.
     */
    getModelEventSource(workingCopyId: string, lastFetchedEventId: number): EventSource;
    /**
     * Returns an EventSource instance that will emit events that occur on the working copy level.
     */
    getWorkingCopyEventSource(workingCopyId: string): EventSource;
}
export interface ISendDeltasResult {
    firstError: any;
    eventId: number;
}
