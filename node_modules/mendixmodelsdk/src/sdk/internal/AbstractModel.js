"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractModel = void 0;
/* tslint:disable:no-circular-imports */
const mobx_1 = require("mobx");
const units_1 = require("./units");
const deltas_1 = require("./deltas");
const instances_1 = require("./instances");
const versionChecks_1 = require("./versionChecks");
const utils_1 = require("../utils");
const properties_1 = require("./properties");
const QualifiedNameCache_1 = require("./QualifiedNameCache");
const EventEmitter_1 = require("./EventEmitter");
const WorkingCopyEventReceiver_1 = require("./working-copy-events/WorkingCopyEventReceiver");
const ModelEventManager_1 = require("./model-events/ModelEventManager");
const promiseOrCallbacks_1 = require("./promiseOrCallbacks");
const metamodelversion_1 = require("../../gen/metamodelversion");
/**
 * Abstract: this class should never be instantiated. Implementation of {@link IModel}.
 */
class AbstractModel {
    constructor(_client, _errorHandler) {
        /** @internal */
        this.detachedStructures = [];
        /**
         * Map unitId -> unit, containing all units of this model, which could be partial(ly loaded).
         * @internal
         */
        this._units = {};
        /**
         * Map qualifiedName -> AbstractElement[]; the same qualified name could potentially refer to different kind of objects;
         * e.g. MyFirstModule.SecondThing could both be an entity or a microflow.
         *
         * A structure has a qualified name precisely if it's public, publicly contained through namespaces and
         * has a public, 1-string-typed `name` property.
         * In other words: every structure having a qualified name is already present in the interface of the containing unit.
         * So, as soon as `processUnitInterfaces` has been called the cache is complete (no lazy loading).
         * (It still needs to be continuously updated obviously.)
         *
         * @internal
         */
        this._qualifiedNameCache = new QualifiedNameCache_1.QualifiedNameCache(this);
        /**
         * Map unitType -> units[], containing all units of this model, per type, but not sorted in any particular order.
         * Please extend the type whenever applicable, for convenience of the programmer.
         *
         * @internal
         */
        this._unitsByType = {};
        /** @internal */
        this._isInitialized = false;
        /** @internal */
        this.lastEventId = -1;
        /** @internal */
        this.numberOfPendingChanges = 0;
        /** @internal */
        this.lastBuildResultEvent = null;
        /** @internal */
        this.eventEmitter = new EventEmitter_1.EventEmitter();
        this._client = _client;
        this._errorHandler = _errorHandler;
    }
    /** @internal */
    async initializeFromModelServer(workingCopyId) {
        if (this._isInitialized) {
            throw new Error("Illegal state: model already initialized");
        }
        // Load the working copy metadata and the unit interfaces in parallel.
        const workingCopyPromise = new Promise((resolve, reject) => this._client.loadWorkingCopyMetaData(workingCopyId, resolve, reject));
        const unitInterfacesPromise = new Promise((resolve, reject) => this._client.loadUnitInterfaces(workingCopyId, resolve, reject));
        const [workingCopy, { units: unitInterfaces, eventId }] = await Promise.all([workingCopyPromise, unitInterfacesPromise]);
        this.numberOfPendingChanges = 0;
        if (eventId > this.lastEventId) {
            this.lastEventId = eventId;
        }
        this.workingCopy = workingCopy;
        this.metaModelVersion = (0, versionChecks_1.parseAsNormalizedVersion)(workingCopy.metaData.metaModelVersion);
        this.mxVersionForModel = (0, versionChecks_1.parseAsNormalizedVersion)(workingCopy.mprMetaData._ProductVersion);
        const maxMetamodelVersion = versionChecks_1.Version.parse(metamodelversion_1.MAX_METAMODEL_VERSION);
        if (this.metaModelVersion.isAfter(maxMetamodelVersion)) {
            throw new Error(`The Model SDK you are using does not support opening a working copy with metamodel version '${workingCopy.metaData.metaModelVersion}'. Please update to the latest Model SDK.`);
        }
        this.deltaManager = new deltas_1.DeltaManager(this);
        this.modelEventManager = new ModelEventManager_1.ModelEventManager(this, this.deltaManager, new deltas_1.DeltaProcessor(this), workingCopyId, eventId);
        this.workingCopyEventReceiver = new WorkingCopyEventReceiver_1.WorkingCopyEventReceiver(workingCopyId, this._client, this);
        this.processUnitInterfaces(unitInterfaces);
        this._isInitialized = true;
    }
    /** @internal */
    processUnitInterfaces(unitInterfaces, isLoadable = true, isReadOnly = false) {
        (0, mobx_1.runInAction)(() => {
            unitInterfaces.forEach(unitJson => instances_1.instancehelpers.abstractUnitJsonToInstance(this, unitJson, true));
            unitInterfaces.forEach(unitJson => {
                const unit = this._units[unitJson.$ID];
                if (!!unitJson.containerId) {
                    this._resolveContainer(unit, unitJson.containerId);
                }
                unit._isLoadable = isLoadable;
                unit._isReadOnly = isReadOnly;
            });
            this._qualifiedNameCache.addStructureToCache(this.root);
            Object.keys(this._units).forEach(key => this._units[key].resolveByIdReferences());
        });
    }
    setErrorHandler(callback) {
        this._errorHandler = callback;
    }
    closeConnection(callback, errorCallback) {
        return (0, promiseOrCallbacks_1.promiseOrCallbacks)((resolve, reject) => {
            this.modelEventManager.stop();
            this.deltaManager.closeConnection(resolve, reject);
        }, callback, errorCallback || this._errorHandler);
    }
    flushChanges(callback, errorCallback) {
        return (0, promiseOrCallbacks_1.promiseOrCallbacks)((resolve, reject) => {
            this.deltaManager.flushChanges(resolve, reject);
        }, callback, errorCallback || this._errorHandler);
    }
    getLastEventId(callback, errorCallback) {
        return (0, promiseOrCallbacks_1.promiseOrCallbacks)((resolve, reject) => {
            this.flushChanges().then(() => resolve(this.lastEventId), reject);
        }, callback, errorCallback || this._errorHandler);
    }
    get id() {
        return this.workingCopy.id;
    }
    /** @internal */
    get _unitTypes() {
        return Object.keys(this._unitsByType);
    }
    /**
     * Return the non-defensive set of unit interfaces of a certain type. Creates the collection lazily if needed.
     *
     * @internal
     */
    _unitInterfacesByType(structureTypeName) {
        if (!(structureTypeName in this._unitsByType)) {
            this._unitsByType[structureTypeName] = mobx_1.observable.array([], { deep: false });
        }
        return this._unitsByType[structureTypeName];
    }
    /**
     * Returns a defensive collection of all units in this model.
     */
    allUnits() {
        const result = [];
        for (const key in this._unitsByType) {
            const objects = this._unitsByType[key];
            result.push(...objects.slice());
        }
        return result;
    }
    /** @internal */
    _sendDelta(delta) {
        this.deltaManager.push(delta);
    }
    /**
     * Registers the given `unit` in the cache(s).
     *
     * @internal
     */
    _addUnit(unit) {
        if (!unit.structureTypeName) {
            throw new Error("Illegal state: unit has no type name specified");
        }
        if (!this._units[unit.id]) {
            this._units[unit.id] = unit;
            this._unitInterfacesByType(unit.structureTypeName).push(unit);
        }
    }
    /**
     * Unregisters the given `unit` from the cache(s).
     *
     * @internal
     */
    _removeUnit(unit) {
        delete this._units[unit.id];
        const idx = this._unitsByType[unit.structureTypeName].indexOf(unit); // yay for pointer equality
        if (idx > -1) {
            this._unitsByType[unit.structureTypeName].splice(idx, 1);
        }
    }
    handleError(message, errorCallback) {
        if (errorCallback) {
            errorCallback(new Error(message));
        }
        else {
            this._errorHandler(new Error(message));
        }
    }
    loadUnitById(id, forceRefresh, callback, errorCallback) {
        return (0, promiseOrCallbacks_1.promiseOrCallbacks)((resolve, reject) => {
            if (id === null) {
                this.handleError("Unit ID is null", reject);
                return;
            }
            const unit = this._units[id];
            if (!unit) {
                this.handleError("Unknown unit ID: " + id, reject);
            }
            else if (!unit.isLoadable) {
                throw new Error("Cannot load this unit");
            }
            else if (forceRefresh) {
                // make sure we can load the unit again:
                unit._markNotLoaded();
                this._loadUnit(unit, resolve, reject);
            }
            else if (unit._isLoading) {
                // This cast is ok because when we know that the item being loaded has type T
                unit._registerAfterLoadCallback(resolve);
            }
            else if (unit.isLoaded) {
                setTimeout(() => {
                    // mimic async behavior -> no difference now in working whether gotten from cache or not.
                    resolve(unit);
                }, 1);
            }
            else {
                this._loadUnit(unit, resolve, reject);
            }
        }, callback, errorCallback || this._errorHandler);
    }
    /** @internal */
    _loadUnit(unit, callback, errorCallback) {
        unit._registerAfterLoadCallback(loadedUnit => {
            this.eventEmitter.emit("UnitLoaded", loadedUnit.id);
            callback(loadedUnit);
        });
        unit._markLoading();
        this.modelEventManager.loadUnitStarted();
        this._client.loadUnitById(this.workingCopy.id, unit.id, (response) => {
            this.modelEventManager.loadUnitCompleted(response.eventId, () => {
                (0, mobx_1.runInAction)(() => {
                    // Enable elements cache while updating unit contents from JSON.
                    // This dramatically speeds up loading certain document types.
                    if (unit instanceof units_1.ModelUnit) {
                        unit._startUsingElementsCache();
                    }
                    try {
                        unit._updateWithJson(response.unit);
                        this._resolveContainer(unit, response.unit.containerId);
                        unit.resolveByIdReferences();
                    }
                    finally {
                        if (unit instanceof units_1.ModelUnit) {
                            unit._stopUsingElementsCache();
                        }
                    }
                });
                unit._markLoaded();
            }, errorCallback || this._errorHandler);
        }, errorCallback || this._errorHandler);
    }
    filterUnitsByCustomWidgetId(workingCopyId, widgetId, callback, errorCallback) {
        return (0, promiseOrCallbacks_1.promiseOrCallbacks)((resolve, reject) => this._client.filterUnitsByCustomWidgetId(workingCopyId, widgetId, resolve, reject), callback, errorCallback || this._errorHandler);
    }
    /** @internal */
    _resolveContainer(unit, containerId) {
        if (!unit) {
            return; // can happen as long as the meta model isn't complete.
        }
        const container = this._units[containerId];
        if (!container) {
            throw new Error(`Unable to find the container for id ${containerId}, the response data from Model Server might be trunctated.`);
        }
        if (container !== unit) {
            // Project has a self reference container, which is of course very annoying for recursion..
            // add unit to the structural parent in the project tree
            this._addUnitToStructuralParent(unit, container);
        }
    }
    /**
     * Structural units have children (e.g., folders have documents), but in storage the inverse is stored:
     * documents specify in which parent they reside.
     * However, in the SDK we want to be able to read the children of a folder, so these kind of properties are expressed
     * using StructuralChild(List)Property objects, see `properties/structural.ts`.
     * We notify structural parents that a child was added upon loading a child structure,
     * so that parent can do the appropriate bookkeeping at that time (and only once).
     * This way we avoid having to visit all unit interfaces to gather all children of a specific structural child (list) property.
     *
     * @internal
     */
    _addUnitToStructuralParent(unit, parent) {
        if (unit.container !== parent) {
            // old container needs to be unset first
            this._removeUnitFromStructuralParent(unit);
        }
        // set the new parent
        unit._container = parent;
        const prop = parent["__" + unit._containmentName];
        parent._isUpdating = true;
        if (prop instanceof properties_1.StructuralChildProperty) {
            prop.observableValue.set(unit);
        }
        else if (prop instanceof properties_1.StructuralChildListProperty) {
            if (prop.observableValue.indexOf(unit) === -1) {
                prop.observableValue.push(unit);
            }
        }
        else {
            throw new Error("Illegal state");
        }
        parent._isUpdating = false;
    }
    /** @internal */
    _removeUnitFromStructuralParent(unit) {
        if (!unit.container) {
            return;
        }
        const oldParent = unit.container;
        const oldProp = oldParent["__" + unit._containmentName];
        oldParent._isUpdating = true;
        if (oldProp instanceof properties_1.StructuralChildProperty) {
            oldProp.observableValue.set(null);
        }
        else if (oldProp instanceof properties_1.StructuralChildListProperty) {
            oldProp.observableValue.remove(unit);
        }
        else {
            throw new Error("Illegal state");
        }
        oldParent._isUpdating = false;
        unit._container = null;
    }
    /**
     * If a model element changes its name, broken by-name references should be attempted to resolve.
     *
     * In the future this might be made smarter and less expensive, once that becomes an issue.
     *
     * @internal
     */
    _processNameChange(structure) {
        this._qualifiedNameCache.addStructureToCache(structure);
    }
    /** @internal */
    _addDetachedStructure(structure) {
        if (this.detachedStructures.indexOf(structure) === -1) {
            this.detachedStructures.push(structure);
        }
    }
    /** @internal */
    _removeDetachedStructure(structure) {
        const index = this.detachedStructures.indexOf(structure);
        if (index >= 0) {
            this.detachedStructures.splice(index, 1);
        }
    }
    deleteWorkingCopy(callback, errorCallback) {
        return (0, promiseOrCallbacks_1.promiseOrCallbacks)((resolve, reject) => {
            this.flushChanges().then(() => this._client.deleteWorkingCopy(this.id, resolve, reject), reject);
        }, callback, errorCallback || this._errorHandler);
    }
    exportMpk(outFilePath, callback, errorCallback) {
        return (0, promiseOrCallbacks_1.promiseOrCallbacks)((resolve, reject) => {
            this.flushChanges().then(() => this._client.exportMpk(this.id, outFilePath, resolve, reject), reject);
        }, callback
            ? result => {
                callback(result.data, result.lastEventId);
            }
            : callback, errorCallback || this._errorHandler);
    }
    exportModuleMpk(moduleId, outFilePath, callback, errorCallback) {
        return (0, promiseOrCallbacks_1.promiseOrCallbacks)((resolve, reject) => {
            this.flushChanges().then(() => this._client.exportModuleMpk(this.id, moduleId, outFilePath, resolve, reject), reject);
        }, callback, errorCallback || this._errorHandler);
    }
    importModuleMpk(mpkPath, callback, errorCallback) {
        return (0, promiseOrCallbacks_1.promiseOrCallbacks)((resolve, reject) => {
            this._client.importModuleMpk(this.id, mpkPath, rootUnitId => {
                this._client.loadUnitInterfaces(this.id, (data) => {
                    this.processUnitInterfaces(data.units);
                    resolve();
                }, reject, rootUnitId);
            }, reject);
        }, callback, errorCallback || this._errorHandler);
    }
    addModuleUnitInterfaces(structuresJson) {
        const parsedStructures = typeof structuresJson === "string" ? JSON.parse(structuresJson) : structuresJson;
        if (!Array.isArray(parsedStructures)) {
            throw new Error("Module JSON isn't an array");
        }
        const foundModules = parsedStructures.filter(module => module.$Type === "Projects$Module");
        if (foundModules.length !== 1) {
            throw new Error("The module json should contain exactly one module unit");
        }
        const [moduleStructure] = foundModules;
        // Set module container to the current project's root so it can resolve
        moduleStructure.containerId = this.root.id;
        this.processUnitInterfaces(parsedStructures, false, true);
        return this._units[moduleStructure.$ID];
    }
    getFilePaths(callback, errorCallback) {
        return this.getFiles(callback, errorCallback);
    }
    getFiles(arg1, arg2, arg3) {
        let callback;
        let errorCallback;
        let options;
        if (!arg1 || typeof arg1 === "function") {
            callback = arg1;
            errorCallback = arg2;
            options = {
                format: "json"
            };
        }
        else {
            options = arg1;
            callback = arg2;
            errorCallback = arg3;
        }
        if (callback) {
            checkErrorCallback(errorCallback);
        }
        return (0, promiseOrCallbacks_1.promiseOrCallbacks)((resolve, reject) => this._client.getFiles(this.id, options, resolve, reject), callback, errorCallback);
    }
    getFile(filePath, outFilePath, callback, errorCallback) {
        if (callback) {
            checkErrorCallback(errorCallback);
        }
        return (0, promiseOrCallbacks_1.promiseOrCallbacks)((resolve, reject) => this._client.getFile(this.id, filePath, outFilePath, resolve, reject), callback, errorCallback);
    }
    putFile(inFilePath, filePath, callback, errorCallback) {
        if (callback) {
            checkErrorCallback(errorCallback);
        }
        this.startPendingChange();
        return (0, promiseOrCallbacks_1.promiseOrCallbacks)((resolve, reject) => this._client.putFile(this.id, inFilePath, filePath, lastEventId => {
            this.completePendingChange(lastEventId);
            resolve();
        }, err => {
            this.completePendingChange();
            reject(err);
        }), callback, errorCallback);
    }
    deleteFile(filePath, callback, errorCallback) {
        if (callback) {
            checkErrorCallback(errorCallback);
        }
        this.startPendingChange();
        return (0, promiseOrCallbacks_1.promiseOrCallbacks)((resolve, reject) => this._client.deleteFile(this.id, filePath, lastEventId => {
            this.completePendingChange(lastEventId);
            resolve();
        }, err => {
            this.completePendingChange();
            reject(err);
        }), callback, errorCallback);
    }
    /**
     * Given an object type name and a qualified name, finds the corresponding element (or null if the reference is broken).
     * Will always succeed for unbroken references,
     * since all objects that are referred by name should be part of the public interface of the model.
     *
     * Example usage:
     * 	`modelStore.resolveName(domainmodels.Attribute.structureTypeName, "Expenses.Expense.Price");`
     *
     * @internal
     */
    _resolveName(structureTypeName, qualifiedName) {
        return this._qualifiedNameCache.resolve(structureTypeName, qualifiedName);
    }
    /** @internal */
    _allOfTypes(structureTypeNames) {
        return utils_1.utils.flatten(structureTypeNames.map(structureTypeName => this._unitInterfacesByType(structureTypeName)));
    }
    /** @internal */
    onUnitLoaded(callback) {
        this.eventEmitter.on("UnitLoaded", callback);
    }
    /**
     * Before calling this API, ensure that all handlers (i.e. onModelEventProcessed()), have been registered
     */
    startReceivingModelEvents() {
        this.modelEventManager.start();
    }
    stopReceivingModelEvents() {
        this.modelEventManager.stop();
    }
    onModelChange(callback) {
        this.eventEmitter.on("ModelChange", callback);
    }
    onModelEventProcessed(callback) {
        this.modelEventManager.onEventProcessed(callback);
    }
    onFileChangesReceived(callback) {
        this.modelEventManager.onFileChangesReceived(callback);
    }
    /**
     * Before calling this API, ensure that all handlers (i.e. onBuildResultEventReceived() and/or onWorkingCopyDataEventReceived() ), have been registered
     */
    startReceivingWorkingCopyEvents() {
        this.workingCopyEventReceiver.start();
        this.workingCopyEventReceiver.onWorkingCopyDataEvent((workingCopyDataEvent) => {
            this.workingCopy = workingCopyDataEvent.data;
        });
        this.workingCopyEventReceiver.onBuildResultEvent((buildResultEvent) => {
            this.publishBuildResult(buildResultEvent);
        });
    }
    stopReceivingWorkingCopyEvents() {
        this.workingCopyEventReceiver.stop();
    }
    /** @internal */
    startPendingChange() {
        this.eventEmitter.emit("ModelChange", undefined);
        this.numberOfPendingChanges += 1;
    }
    /** @internal */
    completePendingChange(eventId) {
        if (eventId && eventId > this.lastEventId) {
            this.lastEventId = eventId;
        }
        if (this.numberOfPendingChanges > 0) {
            this.numberOfPendingChanges -= 1;
            if (this.numberOfPendingChanges === 0) {
                this.publishBuildResult();
            }
        }
        else {
            throw new Error("Model SDK error: trying to complete a non existing model change");
        }
    }
    onBuildResultEventReceived(callback) {
        this.eventEmitter.on("BuildResultEvent", callback);
    }
    onWorkingCopyDataEventReceived(callback) {
        this.workingCopyEventReceiver.onWorkingCopyDataEvent(callback);
    }
    /** @internal */
    publishBuildResult(buildResultEvent) {
        if (buildResultEvent && (!this.lastBuildResultEvent || buildResultEvent.data.eventId > this.lastBuildResultEvent.data.eventId)) {
            this.lastBuildResultEvent = buildResultEvent;
        }
        if (this.numberOfPendingChanges === 0 && this.lastBuildResultEvent && this.lastEventId === this.lastBuildResultEvent.data.eventId) {
            this.eventEmitter.emit("BuildResultEvent", this.lastBuildResultEvent);
        }
    }
}
__decorate([
    mobx_1.observable.shallow
], AbstractModel.prototype, "_unitsByType", void 0);
exports.AbstractModel = AbstractModel;
function checkErrorCallback(errorCallback) {
    if (!errorCallback) {
        throw new Error("Mendix Model SDK config: error callback is not defined.");
    }
}
//# sourceMappingURL=AbstractModel.js.map