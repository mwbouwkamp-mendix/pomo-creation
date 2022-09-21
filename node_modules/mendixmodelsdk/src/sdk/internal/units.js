"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelUnit = exports.StructuralUnit = exports.AbstractUnit = void 0;
const elements_1 = require("./elements");
const structures_1 = require("./structures");
const instances_1 = require("./instances");
const properties_1 = require("./properties");
const PrimitiveProperty_1 = require("./properties/PrimitiveProperty");
/**
 * Base class for implementations of {@link IAbstractUnit}.
 */
class AbstractUnit extends structures_1.Structure {
    constructor(model, structureTypeName, id, isPartial, container) {
        super(model, structureTypeName, id, isPartial, container);
        /** @internal */
        this._isLoading = false;
        /** @internal */
        this._isLoadable = true;
        /** @internal */
        this._isReadOnly = false;
        /** @internal */
        this._afterLoadCallbacks = [];
    }
    /**
     * Checks whether all attributes are available at this instant;
     * if false, a load is required to access these properties.
     */
    get isLoaded() {
        return !this._isPartial;
    }
    get isLoadable() {
        return this._isLoadable;
    }
    get isReadOnly() {
        return this._isReadOnly;
    }
    /** @internal */
    _markNotLoaded() {
        this._isLoading = false;
        this._isPartial = true;
    }
    /** @internal */
    _markLoaded() {
        this._isLoading = false;
        this._isPartial = false;
        this._afterLoadCallbacks.splice(0).forEach(cb => cb(this));
    }
    /** @internal */
    _markLoading() {
        if (this._isLoading || this.isLoaded) {
            throw new Error("Illegal state: cannot re-load a unit that's already loaded");
        }
        this._isLoading = true;
    }
    /** @internal */
    _registerAfterLoadCallback(callback) {
        this._afterLoadCallbacks.push(callback);
    }
    /** @internal */
    _updateWithJsonImpl(json) {
        super._updateWithJsonImpl(json.contents);
    }
    /** @internal */
    _dispose() {
        this._model._removeUnit(this);
        super._dispose();
    }
    /**
     * Sends the create delta for this unit and all pending deltas.
     * @internal
     */
    _handleCreateSelf() {
        this.unit._model._sendDelta({
            deltaType: "CREATE_UNIT_TREE",
            unitId: this.id,
            containerId: this.container.id,
            containmentName: this._containmentName,
            contentType: this.structureTypeName,
            unitTree: this.toJSON()
        });
        this._state = "attached";
    }
    deepCopyInto(newParent) {
        throw new Error("deepCopy for AbstractUnit not implemented.");
    }
    /** @internal */
    _deleteInternal() {
        // Make sure that the element does not delete twice.
        if (this._isDoingDelete) {
            return;
        }
        this._isDoingDelete = true;
        this._model._qualifiedNameCache.removeStructureFromCache(this);
        this._sendDeleteDelta();
        this._container = null;
        this.traverse(element => {
            const structure = element;
            structure._state = "deleted";
            structure._dispose();
        });
        this._dispose();
        this._isDoingDelete = false;
    }
}
exports.AbstractUnit = AbstractUnit;
/**
 * Implementation of {@link IStructuralUnit}.
 */
class StructuralUnit extends AbstractUnit {
    constructor(model, structureTypeName, id, _ignoredIsPartial, container) {
        // _ignoredPartial argument is here, because structural units are always loaded completely,
        // but it is nice to keep the constructors for all units uniform so that the factories are simpler.
        super(model, structureTypeName, id, false, container);
    }
    get unit() {
        return this;
    }
    deepCopyInto(newParent) {
        // MWE: note that this is techinically possible, but what should be the semantics?
        // also clone structural children? Then the need to be loaded first. See also
        // comments in StructuralChild properties.
        throw new Error("Structural units like folders and modules cannot be cloned");
    }
    delete() {
        if (this._isDeleted) {
            throw new Error("A deleted unit cannot be deleted");
        }
        const handle = this.container ? this.container._childHandle(this) : null;
        if (handle) {
            handle.delete();
        }
        else {
            this._deleteInternal();
        }
    }
    /** @internal */
    _deleteInternal() {
        if (this._containmentName === "") {
            throw new Error("Cannot delete a project unit");
        }
        super._deleteInternal();
    }
    toJSON() {
        const json = {
            $ID: this.id,
            $Type: this.structureTypeName
        };
        this.allProperties()
            .filter(prop => prop instanceof PrimitiveProperty_1.PrimitiveProperty)
            .forEach(prop => {
            const propertyValue = prop._toJSON();
            json[prop.name] = propertyValue;
        });
        return json;
    }
}
exports.StructuralUnit = StructuralUnit;
/**
 * Implementation of {@link IModelUnit}.
 */
class ModelUnit extends elements_1.AbstractElement {
    constructor(model, structureTypeName, id, isPartial, container) {
        super(model, structureTypeName, id, isPartial, container);
        /** @internal */
        this._isLoading = false;
        /** @internal */
        this._isLoadable = true;
        /** @internal */
        this._isReadOnly = false;
        /* mimics multiple inheritance */
        /** @internal */
        this._markNotLoaded = AbstractUnit.prototype._markNotLoaded;
        /** @internal */
        this._markLoaded = AbstractUnit.prototype._markLoaded;
        /** @internal */
        this._markLoading = AbstractUnit.prototype._markLoading;
        /** @internal */
        this._registerAfterLoadCallback = AbstractUnit.prototype._registerAfterLoadCallback;
        /** @internal */
        // The _afterLoadCallbacks field is only used in AbstractUnit and therefore we need to suppress the unused variable error here.
        // Because ModelUnit does not extend AbstractUnit, this field should be explicitly added and initialized.
        // ModelUnits are treated as AbstractUnit and not initializing this field causes errors.
        // @ts-ignore
        this._afterLoadCallbacks = [];
        // Below there is an elements cache that is used while loading units.
        // This cache prevents traversing the full unit for every element while updating it from JSON.
        /** @internal */
        this._useElementsCache = false;
        /** @internal */
        this._elementsCache = {};
    }
    /** @internal */
    _handleCreateSelf() {
        AbstractUnit.prototype._handleCreateSelf.call(this);
        for (const property of this.allProperties()) {
            if (property instanceof properties_1.PartProperty) {
                const childElement = property.get();
                if (childElement) {
                    childElement._setChildElementAttachedState(this);
                }
            }
            else if (property instanceof properties_1.PartListProperty) {
                const childElements = property.get();
                for (let index = 0; index < childElements.length; index++) {
                    childElements[index]._setChildElementAttachedState(this);
                }
            }
        }
    }
    /** @internal */
    _updateWithJsonImpl(json) {
        AbstractUnit.prototype._updateWithJsonImpl.call(this, json); // delegate
    }
    get unit() {
        return this;
    }
    get isLoaded() {
        return !this._isPartial;
    }
    get isLoadable() {
        return this._isLoadable;
    }
    get isReadOnly() {
        return this._isReadOnly;
    }
    /** @internal */
    _dispose() {
        this._model._removeUnit(this);
        super._dispose(); // follow AbstractElement chain
    }
    /**
     * Given the type and name of an element, returns the element in this model unit
     * with the specified type and name if there is exactly one matching element, otherwise null.
     *
     * @internal
     */
    _resolveLocalName(elementTypeName, name) {
        if (!elementTypeName) {
            throw new Error("please provide an element type name");
        }
        const elementType = instances_1.instancehelpers.lookupClass(elementTypeName, this._model._allModelClasses());
        const matchingElements = [];
        this.traverse((abstractElement) => {
            if (abstractElement instanceof elementType && (0, properties_1.isNamedElement)(abstractElement) && abstractElement.name === name) {
                matchingElements.push(abstractElement);
            }
        });
        return matchingElements.length === 1 ? matchingElements[0] : null;
    }
    /**
     * Deletes this element from the model.
     */
    delete() {
        if (this._isDeleted) {
            throw new Error("A deleted unit cannot be deleted");
        }
        const handle = this.container ? this.container._childHandle(this) : null;
        if (handle) {
            handle.delete();
        }
        else {
            this._deleteInternal();
        }
    }
    /** @internal */
    _deleteInternal() {
        AbstractUnit.prototype._deleteInternal.call(this);
    }
    toJSON() {
        const json = {
            $ID: this.id,
            $Type: this.structureTypeName
        };
        this.allProperties().forEach(property => {
            const propertyValue = property._toJSON();
            json[property.name] = propertyValue;
        });
        return json;
    }
    /** @internal */
    _startUsingElementsCache() {
        this._useElementsCache = true;
        this._elementsCache = {};
        this.traverse(s => {
            this._elementsCache[s.id] = s;
        });
    }
    /** @internal */
    _stopUsingElementsCache() {
        this._useElementsCache = false;
        this._elementsCache = {};
    }
    /** @internal */
    _cacheElement(element) {
        if (this._useElementsCache) {
            this._elementsCache[element.id] = element;
        }
    }
    findElementById(id) {
        if (this._useElementsCache) {
            return this._elementsCache[id] || null;
        }
        return super.findElementById(id);
    }
}
exports.ModelUnit = ModelUnit;
//# sourceMappingURL=units.js.map