import { common } from "../../common";
import { IAbstractUnit, IStructuralUnit } from "./units";
import { IModelServerClient } from "./IModelServerClient";
import { IStructure } from "./structures";
import { Version } from "./versionChecks";
import { IWorkingCopy, IAbstractUnitJson, IGetFilesOptions } from "./transportInterfaces";
import { IBuildResultEvent, IWorkingCopyDataEvent } from "./working-copy-events/IWorkingCopyEvent";
/**
 * This interface exposes a single Mendix Model.
 * This interface contains the parts of the {@link Model} that are exposed through the SDK.
 */
export interface IAbstractModel {
    /**
     * Working copy id of the current opened model (read only)
     */
    id: string;
    /**
     * The meta data of the model.
     */
    workingCopy: IWorkingCopy;
    /**
     * The Mendix meta model version related to the project.
     */
    metaModelVersion: Version;
    /**
     * The Mendix product version the model was created with/in.
     * Note: this does not have to equal the meta model version.
     */
    mxVersionForModel: Version;
    /**
     * Sets the callback that is invoked when an error occurs in an asynchronous operation for which no error callback is specified.
     *
     * Examples of such operations are making changes to the model and loading elements.
     */
    setErrorHandler(callback: common.IErrorCallback): void;
    /**
     * Ends the connection with the Model API client.
     * Flushes any pending deltas and invokes the callback once complete.
     * If a callback is provided but no error callback is provided, errors will be handled through the default modelstore error handler.
     */
    closeConnection(callback: common.IVoidCallback, errorCallback?: common.IErrorCallback): void;
    closeConnection(): Promise<void>;
    /**
     * Flushes any pending deltas and invokes the callback once complete.
     * If a callback is provided but no error callback is provided, errors will be handled through the default modelstore error handler.
     */
    flushChanges(callback: common.IVoidCallback, errorCallback?: common.IErrorCallback): void;
    flushChanges(): Promise<void>;
    /**
     * Get the event id for the last processed batch of deltas in Model Server after flushing any pending deltas.
     * If a callback is provided but no error callback is provided, errors will be handled through the default modelstore error handler.
     */
    getLastEventId(callback: common.ICallback<number>, errorCallback?: common.IErrorCallback): void;
    getLastEventId(): Promise<number>;
    /**
     * Deletes this model from the server, and the (SDK) client.
     */
    deleteWorkingCopy(callback: common.IVoidCallback, errorCallback?: common.IErrorCallback): void;
    deleteWorkingCopy(): Promise<void>;
    /**
     * Exports this model as MPK.
     * If outFilePath is empty, the raw response body will be provided.
     */
    exportMpk(outFilePath: string, callback: IExportMpkCallback, errorCallback?: common.IErrorCallback): void;
    exportMpk(outFilePath: string): Promise<IExportMpkResponse>;
    /**
     * Exports the module as MPK.
     * If outFilePath is empty, the raw response body will be provided in the callback
     */
    exportModuleMpk(moduleId: string, outFilePath: string, callback: common.IVoidCallback, errorCallback?: common.IErrorCallback): void;
    exportModuleMpk(moduleId: string, outFilePath: string): Promise<void>;
    /**
     * Imports the given module MPK.
     *
     * Importing a module **overwrites existing files** in the project.
     *
     * Gives **error** if
     * - A module with the same name already exists
     * - The module package is not using the same metamodel version as the project
     */
    importModuleMpk(mpkPath: string | Blob, callback: common.IVoidCallback, errorCallback?: common.IErrorCallback): void;
    importModuleMpk(mpkPath: string | Blob): Promise<void>;
    /**
     * Adds the given module json to the project, which will make the module and its units read-only and unloadable.
     * Returns the added module.
     *
     * Gives **error** if
     * - The JSON isn't an array
     * - The module package is not compatible with the same metamodel version as the project
     */
    addModuleUnitInterfaces(moduleJson: string | IAbstractUnitJson[]): IStructuralUnit;
    /**
     * Given an id, fetches a complete unit. The result might be returned from the cache.
     * Use this method if you have just a unit Id, otherwise, unit.fetch() is a simpler alternative.
     */
    loadUnitById<T extends IAbstractUnit>(id: string, forceRefresh: boolean, callback: common.ICallback<T>, errorCallback?: common.IErrorCallback): void;
    loadUnitById<T extends IAbstractUnit>(id: string, forceRefresh: boolean): Promise<T>;
    /**
     * Returns a list of unitIds that contains a specific custom widget
     */
    filterUnitsByCustomWidgetId(workingCopyId: string, widgetId: string, callback: common.ICallback<string[]>, errorCallback?: common.IErrorCallback): void;
    filterUnitsByCustomWidgetId(workingCopyId: string, widgetId: string): Promise<string[]>;
    /**
     * Returns all units in the project, including modules, folders etc.
     * To retrieve all "real" documents (pages, microflows etc.), use allDocuments().
     */
    allUnits(): IAbstractUnit[];
    /**
     * Returns an array of all filepaths in the working copy.
     */
    getFilePaths(callback: common.ICallback<string[]>, errorCallback: common.IErrorCallback): void;
    getFilePaths(): Promise<string[]>;
    /**
     * Returns all files or a subset of files
     * options.filter: glob pattern to limit the set of files
     * options.format: "json" or "zip"
     * options.path: useful if format is "zip". If provided the zip will be stored on disk
     */
    getFiles(callback: (response?: string[]) => void, errorCallback: common.IErrorCallback): void;
    getFiles(): Promise<string[]>;
    getFiles(options: IGetFilesOptions, callback: (response?: string[] | any) => void, errorCallback: common.IErrorCallback): void;
    getFiles(options: IGetFilesOptions): Promise<string[] | any>;
    /**
     * Downloads the file specified by the supplied filepath.
     * If outFilePath is empty, the raw response body will be provided in the callback
     */
    getFile(filePath: string, outFilePath: string, callback: (response?: any) => void, errorCallback: common.IErrorCallback): void;
    getFile(filePath: string, outFilePath: string): Promise<any>;
    /**
     * Uploads the supplied file to the specified filepath.
     */
    putFile(inFilePath: string | Blob, filePath: string, callback: common.IVoidCallback, errorCallback: common.IErrorCallback): void;
    putFile(inFilePath: string | Blob, filePath: string): Promise<void>;
    /**
     * Deletes the file with the specified filepath.
     */
    deleteFile(filePath: string, callback: common.IVoidCallback, errorCallback: common.IErrorCallback): void;
    deleteFile(filePath: string): Promise<void>;
    startReceivingModelEvents(): void;
    stopReceivingModelEvents(): void;
    onModelChange(callback: common.IVoidCallback): void;
    onModelEventProcessed(callback: common.IVoidCallback): void;
    onFileChangesReceived(callback: (files: string[]) => void): void;
    startReceivingWorkingCopyEvents(): void;
    stopReceivingWorkingCopyEvents(): void;
    onBuildResultEventReceived(callback: (buildResultEvent: IBuildResultEvent) => void): void;
    onWorkingCopyDataEventReceived(callback: (workingCopyDataEvent: IWorkingCopyDataEvent) => void): void;
}
export interface IExportMpkResponse {
    data?: any;
    lastEventId: number;
}
export interface IExportMpkCallback {
    (data: any, lastEventId: number): void;
}
export interface IUnitsMap {
    [id: string]: IAbstractUnit;
}
export interface IUnitsByTypeCache {
    [type: string]: IAbstractUnit[];
}
/**
 * Abstract: this class should never be instantiated. Implementation of {@link IModel}.
 */
export declare abstract class AbstractModel implements IAbstractModel {
    workingCopy: IWorkingCopy;
    metaModelVersion: Version;
    mxVersionForModel: Version;
    abstract get root(): IStructuralUnit;
    constructor(_client: IModelServerClient, _errorHandler: common.IErrorCallback);
    setErrorHandler(callback: common.IErrorCallback): void;
    closeConnection(callback: common.IVoidCallback, errorCallback?: common.IErrorCallback): void;
    closeConnection(): Promise<void>;
    flushChanges(callback: common.IVoidCallback, errorCallback?: common.IErrorCallback): void;
    flushChanges(): Promise<void>;
    getLastEventId(callback: common.ICallback<number>, errorCallback?: common.IErrorCallback): void;
    getLastEventId(): Promise<number>;
    get id(): string;
    /**
     * Returns a defensive collection of all units in this model.
     */
    allUnits(): IAbstractUnit[];
    handleError(message: string, errorCallback: common.IErrorCallback | undefined): void;
    /**
     * Fetches a complete unit. The result might be returned from the cache.
     */
    loadUnitById<T extends IAbstractUnit>(id: string, forceRefresh: boolean | undefined, callback: common.ICallback<T>, errorCallback?: common.IErrorCallback): void;
    loadUnitById<T extends IAbstractUnit>(id: string, forceRefresh: boolean | undefined): Promise<T>;
    filterUnitsByCustomWidgetId(workingCopyId: string, widgetId: string, callback: common.ICallback<string[]>, errorCallback: common.IErrorCallback): void;
    filterUnitsByCustomWidgetId(workingCopyId: string, widgetId: string): Promise<string[]>;
    /**
     * Deletes this working copy from the server, and the (SDK) client.
     */
    deleteWorkingCopy(callback: common.IVoidCallback, errorCallback?: common.IErrorCallback): void;
    deleteWorkingCopy(): Promise<void>;
    exportMpk(outFilePath: string, callback: IExportMpkCallback, errorCallback?: common.IErrorCallback): void;
    exportMpk(outFilePath: string): Promise<IExportMpkResponse>;
    exportModuleMpk(moduleId: string, outFilePath: string, callback: common.IVoidCallback, errorCallback?: common.IErrorCallback): void;
    exportModuleMpk(moduleId: string, outFilePath: string): Promise<void>;
    importModuleMpk(mpkPath: string | Blob, callback: common.IVoidCallback, errorCallback?: common.IErrorCallback): void;
    importModuleMpk(mpkPath: string | Blob): Promise<void>;
    addModuleUnitInterfaces(structuresJson: string | IAbstractUnitJson[]): IStructuralUnit;
    getFilePaths(callback: common.ICallback<string[]>, errorCallback: common.IErrorCallback): void;
    getFilePaths(): Promise<string[]>;
    getFiles(callback: common.ICallback<string[]>, errorCallback: common.IErrorCallback): void;
    getFiles(): Promise<string[]>;
    getFiles(options: IGetFilesOptions, callback: common.ICallback<string[] | any>, errorCallback: common.IErrorCallback): void;
    getFiles(options: IGetFilesOptions): Promise<string[] | any>;
    getFile(filePath: string, outFilePath: string, callback: common.IVoidCallback, errorCallback: common.IErrorCallback): void;
    getFile(filePath: string, outFilePath: string): Promise<void>;
    putFile(inFilePath: string | Blob, filePath: string, callback: common.IVoidCallback, errorCallback: common.IErrorCallback): void;
    putFile(inFilePath: string | Blob, filePath: string): Promise<void>;
    deleteFile(filePath: string, callback: common.IVoidCallback, errorCallback: common.IErrorCallback): void;
    deleteFile(filePath: string): Promise<void>;
    /**
     * Before calling this API, ensure that all handlers (i.e. onModelEventProcessed()), have been registered
     */
    startReceivingModelEvents(): void;
    stopReceivingModelEvents(): void;
    onModelChange(callback: common.IVoidCallback): void;
    onModelEventProcessed(callback: common.IVoidCallback): void;
    onFileChangesReceived(callback: (files: string[]) => void): void;
    /**
     * Before calling this API, ensure that all handlers (i.e. onBuildResultEventReceived() and/or onWorkingCopyDataEventReceived() ), have been registered
     */
    startReceivingWorkingCopyEvents(): void;
    stopReceivingWorkingCopyEvents(): void;
    onBuildResultEventReceived(callback: (buildResultEvent: IBuildResultEvent) => void): void;
    onWorkingCopyDataEventReceived(callback: (workingCopyDataEvent: IWorkingCopyDataEvent) => void): void;
}
export interface ISubResolver {
    (parent: IStructure, partName: string): IStructure;
}
