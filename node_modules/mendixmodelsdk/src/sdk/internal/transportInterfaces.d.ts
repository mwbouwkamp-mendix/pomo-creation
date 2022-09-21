/**
 * Types defined in this file express JSON serialization and are shared with the Model API Server.
 * Some types (points) are used verbatim through the rest of the SDK.
 */
/**
 * The contents of the `MetaData` table (which always contains one row) in the MPR contained in the working copy's MPK.
 * This is useful to determine product version and to be able to re-export the MPR as part of an MPK
 * that can be read in by the Business Modeler.
 */
export interface IMprMetaData {
    /** docs:keep */ _ProductVersion: string;
    /** docs:keep */ _BuildVersion: string;
    /** docs:keep */ _SchemaHash: string;
}
/**
 * The meta data for a working copy (- not for the MPR).
 */
export interface IWorkingCopyMetaData {
    name: string;
    description: string;
    avatarUrl: string;
    projectId: string;
    metaModelVersion: string;
    teamServerBaseCommitId?: string;
    teamServerBaseRevision?: number;
    teamServerBaseBranch?: string;
}
export interface ILockData {
    lockId?: string;
    requestedBy: string;
    timestamp: number;
    lockType: LockType;
    duration?: number;
}
export declare type IMergeState = ILockData;
export declare type LockType = "bidi" | "conversion" | "edit" | "commit" | "update" | "switch" | "commit-wc";
export interface ILockWorkingCopyOptions {
    /**
     * The lock type, which indicates the purpose for which the working copy is locked.
     */
    lockType: LockType;
    /**
     * The lock ID to use. Only applicable for lock type "edit".
     */
    lockId?: string;
    /**
     * The duration in seconds after which the lock will expire. Only applicable for lock type "edit".
     */
    duration?: number;
    /**
     * Locks the working copy, regardless if it is locked by another user. Only applicable for lock type "edit".
     */
    force?: boolean;
}
export interface ILockWorkingCopyResponse {
    merge: ILockData;
    previousMerge: ILockData | null;
}
/**
 * The representation of a working copy.
 */
export interface IWorkingCopy {
    id: string;
    metaData: IWorkingCopyMetaData;
    /**
     * OpenIDs of all users that are granted access.
     */
    members: string[];
    /**
     * The name of the MPR file within the working copy's MPK, relative to its root.
     * This will typically but not necessarily equal `project.mpr`.
     */
    mprFileName: string;
    mprMetaData: IMprMetaData;
    mergeData: ILockData | null;
    uploadDateTime: number;
    changed: boolean;
    isCollaboration: boolean;
}
/**
 * The base interface of any "structure", i.e. either any unit or an element within a model unit.
 */
export interface IStructureJson {
    $Type: string;
    $ID: string;
}
/**
 * The base serialization structure of a unit, i.e. either a structural or a model unit.
 */
export interface IAbstractUnitJson extends IStructureJson {
    contents: Omit<IAbstractElementJson, "$ID" | "$Type">;
    containerId: string;
    containmentName: string;
}
/**
 * The base interface of an (model) element (within a model unit).
 * (It extends {@link IStructureJson} with a general map structure to hold arbitrary properties.)
 */
export interface IAbstractElementJson extends IStructureJson {
    [key: string]: any;
}
export interface IGetFilesOptions {
    filter?: string;
    format?: "json" | "zip";
    path?: string;
}
export interface ILoadUnitInterfacesResponse {
    units: IAbstractUnitJson[];
    eventId: number;
}
export interface ILoadUnitResponse {
    unit: IAbstractUnitJson;
    eventId: number;
}
interface ICommitToTeamServerBaseOptions {
    targetBranch: string;
    commitMessage: string;
    isWebModelerCommit?: boolean;
}
export interface ICommitToSVNTeamServerOptions extends ICommitToTeamServerBaseOptions {
    repositoryType?: "svn";
    targetRevision: number;
    teamServerUsername: string;
    teamServerPassword: string;
}
export interface ICommitToGitTeamServerOptions extends ICommitToTeamServerBaseOptions {
    repositoryType: "git";
    teamServerGitUrl: string;
    authorName: string;
    authorEmail: string;
    targetCommitId: string;
}
export declare type ICommitToTeamServerOptions = ICommitToGitTeamServerOptions | ICommitToSVNTeamServerOptions;
export {};
