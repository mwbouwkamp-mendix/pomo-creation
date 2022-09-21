"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Structure = void 0;
/* tslint:disable:no-circular-imports */
const mobx_1 = require("mobx");
class Structure {
    constructor(_model, structureTypeName, id, _isPartial = true, container = null) {
        this.structureTypeName = structureTypeName;
        this.id = id;
        /** @internal */
        this._declaredAsNamespace = false;
        /**
         * Indicates that the internal data of this element is being updated, as a result of data received from the server, so no
         * storage events should be send
         *
         * @internal
         */
        this._isUpdating = true;
        /**
         * Indicates that the internal data of this element is being reverted to its previous value,
         * so some validation check could be skipped
         *
         * @internal
         */
        this._isReverting = false;
        /**
         * The current state of the structure: (new|attached|detached|deleted).
         *
         * @internal
         */
        this._state = "attached";
        /** @internal */
        this._isDoingDelete = false;
        /**
         * used by qualified names cache to determine old name after a rename
         * @internal
         */
        this._registeredQualifiedName = null;
        /** @internal */
        this._properties = [];
        if (!_model) {
            throw new Error("Missing model argument");
        }
        if (!id) {
            throw new Error("Missing id");
        }
        if (!structureTypeName) {
            throw new Error("Missing structureTypeName");
        }
        this._model = _model;
        this._isPartial = _isPartial;
        this._container = container;
        this._state = "attached";
        this._isUpdating = true;
    }
    /**
     * This structure was just constructed and has not been added to the model yet.
     *
     * @internal
     */
    get _isNew() {
        return this._state === "new";
    }
    /**
     * This structure is attached somewhere in the model. This is the "normal" state for an structure.
     *
     * @internal
     */
    get _isAttached() {
        return this._state === "attached";
    }
    /**
     * This structure is detached, so that it can be attached somewhere else in the model.
     *
     * @internal
     */
    get _isDetached() {
        return this._state === "detached";
    }
    /**
     * This structure has been deleted and should no longer be used.
     *
     * @internal
     */
    get _isDeleted() {
        return this._state === "deleted";
    }
    /** @internal */
    _initializeNewInstance() {
        this._state = "new";
        this._isPartial = false;
        this._isUpdating = false;
        this._initializeDefaultProperties();
        this._markCurrentValuesAsDefaults();
    }
    /** @internal */
    _initializeDefaultProperties() {
        // Empty stub, for new istances of this class, properties are initialized as described in the meta model
    }
    get container() {
        return this._container;
    }
    get model() {
        return this._model;
    }
    /** @internal */
    get versionInfo() {
        // assumption: versionInfo is *not* inherited.
        return this.constructor.versionInfo;
    }
    /**
     * Asserts that the complete element is available, and not just its public part.
     * @internal
     */
    _assertLoaded(propertyForMessage) {
        if (!this.isLoaded) {
            throw new Error(propertyForMessage
                ? `This operation is not allowed on the property '${propertyForMessage.name}' because its ` +
                    `parent object '${this.structureTypeName}' with ID '${this.id}' was not fully loaded. ` +
                    `Load the property's parent object with the '.load(callback)' command.`
                : `This operation is not allowed on the object '${this.structureTypeName}' with ID '${this.id}' because ` +
                    `it was not fully loaded. Load the object with the '.load(callback)' command.`);
        }
    }
    /** @internal */
    _registerProperty(prop, declaredOn) {
        this._properties.push(prop);
        // parent check is done here and not in property info, because the actual type of the structure
        // might have different version annations as the type that declared the property
        prop.parent.versionInfo.checkStructureVersion(prop.parent);
    }
    /**
     * Should be called after deserialization / remote updates, to make sure all references are bound to their actual value.
     * @internal
     */
    resolveByIdReferences() {
        this.traverse(s => {
            s.loadedProperties()
                .filter(property => property instanceof ByIdReferenceProperty_1.ByIdReferenceProperty)
                .forEach(property => property.resolveReference());
        });
    }
    /**
     * If the name of a model element changes, this might effect currently broken references-by-name, so let's process those.
     * @internal
     */
    _processNameChange() {
        if (this.unit) {
            this.unit._model._processNameChange(this);
        }
        // else: not owned yet => cannot have incoming by-name references that need to be changed => no action required
    }
    /**
     * Update local-by-name references to this structure.
     * @internal
     */
    _processLocalNameChange(previousName) {
        if (previousName === null || !this.unit || !(this.unit instanceof units.ModelUnit)) {
            return;
        }
        // Update local references to the previous name of structure and with the correct target type.
        this.unit.traverse((abstractElement) => {
            for (const property of abstractElement.allProperties()) {
                if (property instanceof properties.LocalByNameReferenceProperty) {
                    const targetType = instances_1.instancehelpers.lookupClass(property.targetType, this._model._allModelClasses());
                    if (this instanceof targetType && property.localName() === previousName) {
                        property.set(this);
                    }
                }
            }
        });
    }
    /**
     * Finds the given child among the properties of this structure,
     * returning a handle to detach it later when appropriate based on in which property is was found.
     * @internal
     */
    _childHandle(child) {
        const props = this.allProperties();
        for (let i = 0; i < props.length; i++) {
            const prop = props[i];
            if (prop instanceof properties.PartListProperty || prop instanceof properties.StructuralChildListProperty) {
                const partListProp = prop;
                if (partListProp.observableValue.indexOf(child) > -1) {
                    return {
                        containingProperty: prop,
                        delete: () => partListProp.removeChild(child),
                        detach: () => partListProp.detachChild(child)
                    };
                }
            }
            if ((prop instanceof properties.PartProperty || prop instanceof properties.StructuralChildProperty) && prop.get() === child) {
                return {
                    containingProperty: prop,
                    delete: () => prop.set(null),
                    detach: () => prop.detachValue()
                };
            }
        }
        return null;
    }
    /**
     * Detaches the given child from any (part) property that contained it.
     * @internal
     */
    _detachChild(child) {
        const handle = this._childHandle(child);
        if (handle) {
            // (child might already have been detached)
            handle.detach();
        }
    }
    /**
     * Deletes the given child from any (part) property that contained it.
     * @internal
     */
    _deleteChild(child) {
        const handle = this._childHandle(child);
        if (handle) {
            // (child might already have been detached)
            handle.delete();
        }
    }
    /**
     * This model element is no longer part of the model, and can be cleaned up.
     * @internal
     */
    _dispose() {
        // NB: version-wise 'unavailable' props are included!
        this._properties.forEach(prop => prop.dispose());
        // TODO: clean from element cache if element, clean from global cache if unit, delete this.unit.elementsCache[this.id];
    }
    /**
     * Update an existing (probably partial) interface with real contents received from the server.
     * @internal
     */
    _updateWithJson(json) {
        // Only allow to go from partial to full documents once, of course, later on, a full merge would be required
        this._isPartial = false;
        this._isUpdating = true;
        this._updateWithJsonImpl(json);
        this._isUpdating = false;
    }
    /** @internal */
    _updateWithJsonImpl(json) {
        for (const key in json) {
            if (key !== "$ID" && key !== "$Type" && this["__" + key] instanceof AbstractProperty_1.AbstractProperty) {
                this["__" + key].updateWithRawValue(json[key]);
            }
        }
    }
    /** @internal */
    _scheduleDeltaAfterCreate(delta) {
        if (!this._isNew) {
            delta.unitId = this.unit.id;
            this.unit._model._sendDelta(delta);
        }
    }
    /**
     * Sends the change delta in case a simple property has changed.
     * @internal
     */
    _sendChangeDelta(propertyName, newValue, changeType = "CHANGE", index = -1) {
        if (this._isUpdating) {
            return;
        }
        this._assertLoaded();
        const mutator = (() => {
            switch (changeType) {
                case "CHANGE":
                    const changeMutator = {
                        value: newValue,
                        mutatorType: changeType
                    };
                    if (index >= 0) {
                        changeMutator.updateIndex = index;
                    }
                    return changeMutator;
                case "ADD":
                    return {
                        value: newValue,
                        mutatorType: changeType,
                        insertionIndex: index
                    };
                case "REMOVE":
                    return {
                        removalIndex: index,
                        mutatorType: changeType
                    };
                default: {
                    throw new Error(`Unknown mutator type '${changeType}'`);
                }
            }
        })();
        this._scheduleDeltaAfterCreate({
            unitId: undefined,
            elementId: this.id,
            deltaType: "UPDATE_PROPERTY_VALUE",
            propertyName: propertyName,
            mutator: mutator
        });
    }
    /**
     * Sends the delete in case that we were removed from the model.
     * @internal
     */
    _sendDeleteDelta() {
        if (this._isUpdating) {
            return;
        }
        let deleteDelta;
        if (this instanceof elements.Element) {
            this._assertLoaded();
            deleteDelta = {
                unitId: this.unit && this.unit.id,
                elementId: this.id,
                deltaType: "DELETE_ELEMENT"
            };
        }
        else {
            deleteDelta = {
                unitId: this.unit && this.unit.id,
                deltaType: "DELETE_UNIT"
            };
        }
        this._scheduleDeltaAfterCreate(deleteDelta);
    }
    /** @internal */
    _markCurrentValuesAsDefaults() {
        this.allProperties().forEach(property => {
            if (property instanceof properties.PrimitiveProperty) {
                property.markCurrentValueAsDefault();
            }
        });
    }
    /** @internal */
    _deleteInternal() {
        this._dispose();
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
    allProperties() {
        return this._properties;
    }
    publicProperties() {
        return this._properties.filter(prop => prop.isPublic);
    }
    loadedProperties() {
        return this.isLoaded ? this.allProperties() : this.publicProperties();
    }
    /**
     * This function is used a lot for big structures, be careful about that when changing it.
     *
     * @internal
     */
    _traverseInternal(visit, excludePrivate = false, returnSingleResult = false) {
        let result = visit(this);
        if (returnSingleResult && result) {
            return result;
        }
        const allProperties = excludePrivate ? this.publicProperties() : this.loadedProperties();
        for (const property of allProperties) {
            // Instanceof is expensive, Builtin: FunctionPrototypeHasInstance spends a lot of ticks as code is heavily used
            if (property.constructor === properties.PartProperty || property.constructor === properties.StructuralChildProperty) {
                const value = property.get();
                if (value) {
                    result = value._traverseInternal(visit, excludePrivate, returnSingleResult);
                    if (returnSingleResult && result) {
                        return result;
                    }
                }
            }
            else if (property.constructor === properties.PartListProperty ||
                property.constructor === properties.StructuralChildListProperty) {
                const children = property.get();
                for (const child of children) {
                    result = child._traverseInternal(visit, excludePrivate, returnSingleResult);
                    if (returnSingleResult && result) {
                        return result;
                    }
                }
            }
        }
        return null;
    }
    traverse(visit) {
        this._traverseInternal(visit);
    }
    traversePublicParts(visit) {
        this._traverseInternal(visit, true);
    }
    traverseFind(visit) {
        return this._traverseInternal(visit, false, true);
    }
    getContainerAs(containerType) {
        if (!(this.container instanceof containerType)) {
            throw new Error(`instance of ${this.structureTypeName} is not contained by a ${containerType.structureTypeName}`);
        }
        return this.container;
    }
}
__decorate([
    mobx_1.observable
], Structure.prototype, "_container", void 0);
exports.Structure = Structure;
// tslint:enable:no-use-before-declare
/**
 * Late dependencies on others, structures should be defined first for proper inheritance!
 */
const elements = require("./elements");
const AbstractProperty_1 = require("./properties/AbstractProperty");
const properties = require("./properties");
const units = require("./units");
const ByIdReferenceProperty_1 = require("./properties/ByIdReferenceProperty");
const instances_1 = require("./instances");
//# sourceMappingURL=structures.js.map