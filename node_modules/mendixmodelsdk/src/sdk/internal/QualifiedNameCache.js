"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QualifiedNameCache = void 0;
const mobx_1 = require("mobx");
const ByNameReferenceProperty_1 = require("./properties/ByNameReferenceProperty");
const utils_1 = require("../utils");
const elements_1 = require("./elements");
const instances_1 = require("./instances");
/**
 * Manages a cached map [qualified name: string] -> list of structures,
 * with the possibility to retrieve (resolve) based on qualified name.
 *
 * Used to speed up resolution of by-(qualified-)name references.
 */
class QualifiedNameCache {
    constructor(_model) {
        /** @internal */
        this._cache = mobx_1.observable.map({}, { deep: false });
        /** @internal */
        this.listeners = [];
        this._model = _model;
    }
    /**
     * @param structureTypeName        type name in syntax "MetaModelname$ElementName"
     * @param qualifiedName
     * @returns The element found, or `null` when no element is found.
     */
    resolve(structureTypeName, qualifiedName) {
        if (!qualifiedName) {
            return null;
        }
        const elements = this._cache.get(qualifiedName);
        if (!elements) {
            return null;
        }
        if (!structureTypeName) {
            throw new Error("please provide a structure type name");
        }
        const initializer = instances_1.instancehelpers.lookupClass(structureTypeName, this._model._allModelClasses());
        const result = elements.find(elem => elem instanceof initializer);
        return result || null;
    }
    observe(listener) {
        this.listeners.push(listener);
        const disposer = () => {
            const listenerIndex = this.listeners.indexOf(listener);
            if (listenerIndex !== -1) {
                this.listeners.splice(listenerIndex, 1);
            }
        };
        return disposer;
    }
    size() {
        return (0, mobx_1.keys)(this._cache)
            .map(key => this._cache.get(key).length)
            .reduce((prev, curr) => prev + curr, 0);
    }
    keys() {
        return (0, mobx_1.keys)(this._cache);
    }
    /**
     * Updates the cache as far as it is affected by the addition or rename of this element.
     * Child entries are updated automatically as well.
     */
    addStructureToCache(structure) {
        const qualifiedNames = [];
        structure.traversePublicParts(s => qualifiedNames.push(...this._addElementToCache(s)));
        if (qualifiedNames.length) {
            this._callListeners(qualifiedNames);
        }
    }
    /**
     * Removes the structure and its children from the cache.
     */
    removeStructureFromCache(structure) {
        const qualifiedNames = [];
        structure.traversePublicParts(s => {
            const qualifiedName = this._removeElementFromCache(s);
            if (qualifiedName) {
                qualifiedNames.push(qualifiedName);
            }
        });
        if (qualifiedNames.length) {
            this._callListeners(qualifiedNames);
        }
    }
    /** @internal */
    _callListeners(names) {
        this.listeners.forEach(listener => listener(names));
    }
    /** @internal */
    _addElementToCache(structure) {
        if (instances_1.instancehelpers.structureIsByNameReferrable(structure)) {
            const oldName = structure._registeredQualifiedName;
            const newName = structure._getQualifiedName();
            if (oldName === newName) {
                return [];
            }
            structure._registeredQualifiedName = newName;
            if (oldName !== null) {
                const cachedElementsForOldName = this._cache.get(oldName);
                if (cachedElementsForOldName) {
                    utils_1.utils.removeFromArray(cachedElementsForOldName, structure);
                }
            }
            if (newName !== null) {
                this._getOrCreateEntry(newName).push(structure);
                if (oldName !== null) {
                    this._updateByNameReferences(structure, oldName, newName);
                }
            }
            return [oldName, newName].filter(name => name !== null);
        }
        return [];
    }
    /** @internal */
    _removeElementFromCache(structure) {
        if (structure instanceof elements_1.AbstractElement && structure._registeredQualifiedName) {
            const cachedElements = this._cache.get(structure._registeredQualifiedName);
            if (cachedElements) {
                utils_1.utils.removeFromArray(cachedElements, structure);
            }
            return structure._registeredQualifiedName;
        }
        return null;
    }
    /** @internal */
    _updateByNameReferences(namedStructure, oldName, newName) {
        const structureInitializer = instances_1.instancehelpers.lookupClass(namedStructure.structureTypeName, this._model._allModelClasses());
        const root = namedStructure.model.root;
        root.traverse(structure => {
            structure.loadedProperties().forEach(prop => {
                if (prop instanceof ByNameReferenceProperty_1.ByNameReferenceProperty && prop.qualifiedName() === oldName) {
                    const propTargetInitializer = instances_1.instancehelpers.lookupClass(prop.targetType, this._model._allModelClasses());
                    if (propTargetInitializer === structureInitializer || propTargetInitializer.isPrototypeOf(structureInitializer)) {
                        prop.updateQualifiedNameForRename(newName);
                    }
                }
                else if (prop instanceof ByNameReferenceProperty_1.ByNameReferenceListProperty && prop.observableValue.includes(oldName)) {
                    const propTargetInitializer = instances_1.instancehelpers.lookupClass(prop.targetType, this._model._allModelClasses());
                    if (propTargetInitializer === structureInitializer || propTargetInitializer.isPrototypeOf(structureInitializer)) {
                        prop.updateQualifiedNamesForRename(prop.observableValue.map(name => (name === oldName ? newName : name)));
                    }
                }
            });
        });
    }
    /** @internal */
    _getOrCreateEntry(key) {
        let result = this._cache.get(key);
        if (!result) {
            result = mobx_1.observable.array([], { deep: false });
            this._cache.set(key, result);
        }
        return result;
    }
}
__decorate([
    mobx_1.action
], QualifiedNameCache.prototype, "addStructureToCache", null);
__decorate([
    mobx_1.action
], QualifiedNameCache.prototype, "removeStructureFromCache", null);
exports.QualifiedNameCache = QualifiedNameCache;
//# sourceMappingURL=QualifiedNameCache.js.map