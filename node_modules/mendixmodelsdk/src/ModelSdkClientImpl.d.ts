import * as internal from "./sdk/internal";
import { configuration } from "./sdk/configuration";
import { common } from "./common";
import { IWorkingCopy, LockType, ILockWorkingCopyOptions, ILockWorkingCopyResponse, ICommitToTeamServerOptions } from "./sdk/internal/transportInterfaces";
import { IModelServerClient } from "./sdk/internal/IModelServerClient";
import { IExportMpkCallback, IExportMpkResponse } from "./sdk/internal/AbstractModel";
/**
 * Client class of the Mendix Model SDK.
 * By instantiating this class with appropriate configuration, you can create and read working copies.
 */
export declare class ModelSdkClientImpl<IT extends internal.IAbstractModel, CT extends internal.AbstractModel & IT> {
    private connectionConfig;
    private modelConstructor;
    private client;
    constructor(connectionConfig: configuration.ISdkConfig, modelConstructor: {
        new (_client: IModelServerClient, _errorHandler: common.IErrorCallback, _connectionConfig: configuration.ISdkConfig): CT;
    });
    /**
     * Create a new working copy on the model server.
     */
    createWorkingCopy(workingCopyParameters: configuration.ICreateWorkingCopyParameters, callback: common.ICallback<IWorkingCopy>, errorCallback: common.IErrorCallback): void;
    createWorkingCopy(workingCopyParameters: configuration.ICreateWorkingCopyParameters): Promise<IWorkingCopy>;
    /**
     * Create a new working copy on the model server from a team server repository.
     */
    createWorkingCopyFromTeamServer(workingCopyParameters: configuration.ICreateWorkingCopyFromTeamServerParameters, callback: common.ICallback<IWorkingCopy>, errorCallback: common.IErrorCallback): void;
    createWorkingCopyFromTeamServer(workingCopyParameters: configuration.ICreateWorkingCopyFromTeamServerParameters): Promise<IWorkingCopy>;
    /**
     * Create a new working copy on the model server, and reads it for immediate editing.
     */
    createAndOpenWorkingCopy(workingCopyParameters: configuration.ICreateWorkingCopyParameters, callback: common.ICallback<IT>, errorCallback: common.IErrorCallback): void;
    createAndOpenWorkingCopy(workingCopyParameters: configuration.ICreateWorkingCopyParameters): Promise<IT>;
    /**
     * Reads a working copy on the model server so it can be edited.
     */
    openWorkingCopy(workingCopyId: string, callback: common.ICallback<IT>, errorCallback: common.IErrorCallback): void;
    openWorkingCopy(workingCopyId: string): Promise<IT>;
    /**
     * Gets meta data of a working copy
     */
    loadWorkingCopyMetaData(workingCopyId: string, callback: common.ICallback<internal.IWorkingCopy>, errorCallback: common.IErrorCallback): void;
    loadWorkingCopyMetaData(workingCopyId: string): Promise<internal.IWorkingCopy>;
    /**
     * Deletes this working copy from the server, and the (SDK) client.
     */
    deleteWorkingCopy(workingCopyId: string, callback: common.IVoidCallback, errorCallback: common.IErrorCallback): void;
    deleteWorkingCopy(workingCopyId: string): Promise<void>;
    /**
     * Grants access to the member specified to his/her OpenID on this working copy.
     */
    grantAccess(workingCopyId: string, memberOpenId: string, callback: common.IVoidCallback, errorCallback: common.IErrorCallback): void;
    grantAccess(workingCopyId: string, memberOpenId: string): Promise<void>;
    /**
     * Sets the members specified by their OpenID on the specified working copy.
     */
    setWorkingCopyMembers(workingCopyId: string, memberOpenIds: string[], callback: common.IVoidCallback, errorCallback: common.IErrorCallback): void;
    setWorkingCopyMembers(workingCopyId: string, memberOpenIds: string[]): Promise<void>;
    /**
     * Revokes access of the member specified to his/her OpenID on this working copy.
     */
    revokeAccess(workingCopyId: string, memberOpenId: string, callback: common.IVoidCallback, errorCallback: common.IErrorCallback): void;
    revokeAccess(workingCopyId: string, memberOpenId: string): Promise<void>;
    /**
     * Grants access to the member specified to his/her OpenID to the default working copy of this project.
     */
    grantAccessByProject(projectId: string, memberOpenId: string, callback: common.IVoidCallback, errorCallback: common.IErrorCallback): void;
    grantAccessByProject(projectId: string, memberOpenId: string): Promise<void>;
    /**
     * Revokes access of the member specified to his/her OpenID to the default working copy of this project.
     */
    revokeAccessByProject(projectId: string, memberOpenId: string, callback: common.IVoidCallback, errorCallback: common.IErrorCallback): void;
    revokeAccessByProject(projectId: string, memberOpenId: string): Promise<void>;
    /**
     * Sets all members that have access specified by their OpenID to the default working copy of this project.
     */
    setProjectMembers(projectId: string, memberOpenids: string[], callback: common.IVoidCallback, errorCallback: common.IErrorCallback): void;
    setProjectMembers(projectId: string, memberOpenids: string[]): Promise<void>;
    /**
     * Returns whether the member specified to his/her OpenID has (been granted) access to this working copy.
     */
    checkAccess(workingCopyId: string, memberOpenId: string, callback: common.ICallback<boolean>, errorCallback: common.IErrorCallback): void;
    checkAccess(workingCopyId: string, memberOpenId: string): Promise<boolean>;
    /**
     * Exports this working copy as MPK.
     */
    exportMpk(workingCopyId: string, outFilePath: string, callback: IExportMpkCallback, errorCallback: common.IErrorCallback): void;
    exportMpk(workingCopyId: string, outFilePath: string): Promise<IExportMpkResponse>;
    /**
     * Exports the module with the specified ID as MPK.
     */
    exportModuleMpk(workingCopyId: string, moduleId: string, outFilePath: string, callback: common.IVoidCallback, errorCallback: common.IErrorCallback): void;
    exportModuleMpk(workingCopyId: string, moduleId: string, outFilePath: string): Promise<void>;
    /**
     * Retrieves an array of all working copies you are a member of.
     */
    getMyWorkingCopies(callback: common.ICallback<IWorkingCopy[]>, errorCallback: common.IErrorCallback): void;
    getMyWorkingCopies(): Promise<IWorkingCopy[]>;
    /**
     * Retrieves the working copy id that the given project ID maps to.
     */
    getWorkingCopyByProject(projectId: string, callback: common.ICallback<string>, errorCallback: common.IErrorCallback): void;
    getWorkingCopyByProject(projectId: string): Promise<string>;
    /**
     * Update the project-to-working copy mapping with the given data.
     */
    updateWorkingCopyByProject(projectId: string, workingCopyId: string, callback: common.IVoidCallback, errorCallback: common.IErrorCallback): void;
    updateWorkingCopyByProject(projectId: string, workingCopyId: string): Promise<void>;
    /**
     * Deletes the project-to-working copy mapping for given project ID.
     */
    deleteWorkingCopyByProject(projectId: string, callback: common.IVoidCallback, errorCallback: common.IErrorCallback): void;
    deleteWorkingCopyByProject(projectId: string): Promise<void>;
    /**
     * Lock the working copy (will be locked for the currently authenticated openid)
     */
    lockWorkingCopy(workingCopyId: string, callback: common.ICallback<ILockWorkingCopyResponse>, errorCallback: common.IErrorCallback): void;
    lockWorkingCopy(workingCopyId: string, lockOptions: ILockWorkingCopyOptions | LockType, callback: common.ICallback<ILockWorkingCopyResponse>, errorCallback: common.IErrorCallback): void;
    lockWorkingCopy(workingCopyId: string, lockOptions: ILockWorkingCopyOptions | LockType): Promise<ILockWorkingCopyResponse>;
    /**
     * Unlock the working copy (will be unlocked for the currently authenticated openid, will fail if it's locked by another openid).
     *
     * Provide a lockType to only unlock the working copy if it is locked with this specific type.
     */
    unlockWorkingCopy(workingCopyId: string, callback: common.IVoidCallback, errorCallback: common.IErrorCallback): void;
    unlockWorkingCopy(workingCopyId: string): Promise<void>;
    unlockWorkingCopy(workingCopyId: string, lockType: LockType, callback: common.IVoidCallback, errorCallback: common.IErrorCallback): void;
    unlockWorkingCopy(workingCopyId: string, lockType: LockType): Promise<void>;
    /**
     * Commits the contents of the working copy with the given id to the team server
     */
    commitToTeamServer(workingCopyId: string, options: ICommitToTeamServerOptions, callback: common.IVoidCallback, errorCallback: common.IErrorCallback): void;
    commitToTeamServer(workingCopyId: string, options: ICommitToTeamServerOptions): Promise<void>;
}
