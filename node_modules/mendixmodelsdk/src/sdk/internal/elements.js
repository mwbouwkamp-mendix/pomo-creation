"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Element = exports.AbstractElement = void 0;
const promiseOrCallbacks_1 = require("./promiseOrCallbacks");
/* tslint:disable:no-circular-imports */
const structures = require("./structures");
/**
 * See {@link IAbstractElement}.
 */
class AbstractElement extends structures.Structure {
    constructor(model, structureTypeName, id, isPartial, container) {
        super(model, structureTypeName, id, isPartial, container);
    }
    /**
     * Checks whether all properties are available at the moment
     *  - if false, a load is required to access these properties.
     */
    get isLoaded() {
        return this.unit.isLoaded;
    }
    /** @internal */
    _getQualifiedName() {
        const parts = [this.name];
        let containerStructure = this.container;
        let seenRoot = false;
        while (containerStructure) {
            if (containerStructure === this._model.root) {
                seenRoot = true;
            }
            if (containerStructure._declaredAsNamespace) {
                parts.unshift(containerStructure.name);
            }
            containerStructure = containerStructure.container;
        }
        if (!seenRoot || parts.some(n => !n)) {
            return null;
        }
        return parts.join(".");
    }
    /**
     * Transforms a IElement interface into a Element class, loading the containing unit if necessary.
     * (Those are technically already the same, but this function makes sure its properties are available.)
     *
     * - If invoked without callback, it checks whether the properties are available or it will throw;
     * - If invoked with callback, it will load the data from the server if needed, and then invoke the callback.
     */
    asLoaded() {
        this._assertLoaded();
        return this;
    }
    load(arg1, arg2) {
        let callback;
        let forceRefresh;
        if (typeof arg1 === "function") {
            callback = arg1;
            forceRefresh = arg2;
        }
        else {
            forceRefresh = arg1;
        }
        return (0, promiseOrCallbacks_1.promiseOrCallbacks)((resolve, reject) => {
            this.unit._model.loadUnitById(this.unit.id, forceRefresh).then(() => {
                // this element should be loaded now!
                this._assertLoaded();
                resolve(this);
            }, reject);
        }, callback, this._model._errorHandler);
    }
    /**
     * updateElementsContainer recursively sets the unit to which this elements belong
     * During deserialization this is not needed, but if used in the SDK, we only can set the unit once
     * an element is actually added to the tree (buy pushing / assigning it to some part property)
     *
     * @internal
     */
    _updateElementsContainer(unit) {
        this.allProperties().forEach(property => {
            if (property instanceof properties.PartProperty || property instanceof properties.PartListProperty) {
                property.updateElementContainer(unit);
            }
            else if (property instanceof properties.ByIdReferenceProperty) {
                property.updateElementContainer();
            }
        });
    }
    /**
     * Return true if this is an abstractElement that might be referred to by some other element.
     * If true, this element is maintained in the qualifiedNamesCache
     *
     * @internal
     */
    _isByNameReferrable() {
        return false;
    }
    /**
     * Given an element id, returns the element in this abstract element with that id, otherwise null.
     */
    findElementById(id) {
        return this.traverseFind((abstractElement) => {
            return abstractElement.id === id ? abstractElement : null;
        });
    }
    /**
     * Deletes this element from the model.
     */
    delete() {
        if (this._isDeleted) {
            throw new Error("A deleted element cannot be deleted");
        }
        if (this._isDetached) {
            throw new Error("A detached element cannot be deleted");
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
        // Make sure that the element does not delete twice.
        if (this._isDoingDelete) {
            return;
        }
        this._isDoingDelete = true;
        const subElements = [];
        this.traverse(element => subElements.push(element));
        // Prevent deletion if there are elements refer to this element by-id.
        if (this.unit) {
            const modelUnit = this.unit;
            /**
             * The referredElements map is used for quick lookup of elements that refer to a particular
             * element when performing delete. This leads to considerable performance gain when deleting
             * large widgets, e.g., JSChart.
             */
            const referredElements = {};
            modelUnit.traverse(element => {
                if (subElements.indexOf(element) === -1) {
                    element
                        .allProperties()
                        .filter(p => p instanceof properties.ByIdReferenceProperty)
                        .forEach(p => {
                        if (p.get()) {
                            referredElements[p.get().id] = element;
                        }
                    });
                }
            });
            for (const subElement of subElements) {
                if (referredElements[subElement.id]) {
                    throw new Error(`Cannot delete this element. There is an element that refers to this element by-id: ${referredElements[subElement.id].id}`);
                }
            }
        }
        super._deleteInternal();
        this._model._qualifiedNameCache.removeStructureFromCache(this);
        this._container = null;
        subElements.forEach(element => (element._state = "deleted"));
        this._isDoingDelete = false;
    }
}
exports.AbstractElement = AbstractElement;
class Element extends AbstractElement {
    constructor(model, structureTypeName, id, isPartial, unit, container) {
        super(model, structureTypeName, id, isPartial, container);
        if (unit) {
            this._updateElementsContainer(unit);
        }
    }
    get unit() {
        return this._unit;
    }
    /**
     * Checks whether all attributes are available ATM
     *  -  if false, a load is required to access these properties.
     */
    get isLoaded() {
        return !this.unit || this.unit.isLoaded;
    }
    /** @internal */
    _updateElementsContainer(unit) {
        this._unit = unit;
        this._model = unit._model;
        super._updateElementsContainer(unit);
    }
    /** @internal */
    _scheduleDeltaAfterCreate(delta) {
        if (!this._isNew) {
            delta.unitId = this.unit.id;
            this.unit._model._sendDelta(delta);
        }
    }
    /**
     * Sends the appropriate create delta to the server, and also sends all pending deltas,
     * after this element has been assigned to some parent.
     *
     * @internal
     */
    _sendCreateDelta(owner, parentPropertyName, additionIndex) {
        if (this._isUpdating) {
            return;
        }
        this._assertLoaded();
        if (owner._isNew) {
            // Parent is not known at the server yet, will be handled when creating it.
            return;
        }
        if (owner.unit) {
            this._updateElementsContainer(owner.unit);
        }
        this.unit._model._sendDelta({
            parentId: owner.id,
            parentPropertyName,
            deltaType: "CREATE_ELEMENT_TREE",
            unitId: this.unit.id,
            elementTree: this.toJSON(),
            additionIndex
        });
        this._setChildElementAttachedState(owner);
    }
    /**
     * @internal
     */
    _setChildElementAttachedState(owner) {
        if (owner.unit) {
            this._updateElementsContainer(owner.unit);
        }
        this.traverse((element) => (element._state = "attached"));
    }
    /**
     * Sends the appropriate attach delta to the server
     * after this element has been attached to a new parent.
     *
     * @internal
     */
    _sendAttachDelta(newParent, newPropertyName, index) {
        if (this._isUpdating) {
            return;
        }
        this._assertLoaded();
        const attachDelta = {
            unitId: this.unit.id,
            elementId: this.id,
            deltaType: "ATTACH_ELEMENT",
            newParentId: newParent.id,
            newParentPropertyName: newPropertyName
        };
        if (index !== undefined) {
            attachDelta.newIndex = index;
        }
        this.unit._model._sendDelta(attachDelta);
    }
    /**
     * Detaches this element from the model, so that it can be attached in a different place.
     */
    detach() {
        this._assertLoaded();
        if (!this._isAttached) {
            throw new Error("Only elements that are currently attached can be detached");
        }
        const handle = this.container._childHandle(this);
        this._model._qualifiedNameCache.removeStructureFromCache(this);
        handle.detach();
        this._container = null;
        this._state = "detached";
        this._model._addDetachedStructure(this);
        return this;
    }
    /**
     * Sends the detach delta.
     * @internal
     */
    _sendDetachDelta() {
        if (this._isUpdating) {
            return;
        }
        this._assertLoaded();
        const detachDelta = {
            unitId: this.unit.id,
            elementId: this.id,
            deltaType: "DETACH_ELEMENT"
        };
        this.unit._model._sendDelta(detachDelta);
    }
    /**
     * Creates a deep copy of this element and its children.
     */
    deepCopy(targetModel) {
        const copyResult = this.deepCopyWithIdMap(targetModel);
        return copyResult.copy;
    }
    /**
     * Creates a deep copy of this element and its children. Also returns a map from original to new IDs.
     */
    deepCopyWithIdMap(targetModel) {
        if (!this.isLoaded) {
            throw new Error("Only loaded elements can be copied. Use .load() first");
        }
        if (targetModel.metaModelVersion !== this.model.metaModelVersion) {
            throw new Error("Elements can only be copied between models with the same metamodel version. Tried to copy from " +
                this.model.metaModelVersion +
                " into " +
                targetModel.metaModelVersion);
        }
        // Maps old ids to new structures
        const idMap = {};
        // Futures that should fix not yet resolved by-id refs
        const unresolvedIdentifierFixers = [];
        const clone = this._deepCopyElement(targetModel, idMap, unresolvedIdentifierFixers);
        unresolvedIdentifierFixers.forEach(fixer => fixer(idMap));
        return {
            copy: clone,
            idMap: idMap
        };
    }
    _deepCopyElement(targetModel, idMap, unresolvedIdentifierFixers) {
        const clone = instances_1.instancehelpers.createElement(targetModel, this.constructor);
        idMap[this.id] = clone;
        this.allProperties().forEach(property => property.deepCopyInto(clone, idMap, unresolvedIdentifierFixers));
        return clone;
    }
    /** @internal */
    _deepCopyElementInto(newParent, targetPropertyName, idMap, unresolvedIdentifierFixers) {
        if (!newParent) {
            throw new Error("Cannot deep copy, no new parent provided");
        }
        else if (!newParent.isLoaded) {
            throw new Error("Cannot deep copy, cannot copy into a target that is not loaded");
        }
        const targetProp = newParent["__" + targetPropertyName];
        if (!targetProp) {
            throw new Error("Cannot deep copy, new parent property does not exist: " + targetPropertyName);
        }
        const clone = this._deepCopyElement(newParent.model, idMap, unresolvedIdentifierFixers);
        if (targetProp instanceof properties.PartListProperty) {
            targetProp.get().push(clone);
        }
        else if (targetProp instanceof properties.PartProperty) {
            targetProp.set(clone);
        }
        else {
            throw new Error(`Cannot deep copy, new parent property ${targetPropertyName} is not a part (list)`);
        }
        return clone;
    }
}
exports.Element = Element;
// tslint:enable:no-use-before-declare
const properties = require("./properties");
const instances_1 = require("./instances");
//# sourceMappingURL=elements.js.map