"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeltaProcessor = void 0;
const deltaUtils = require("./deltaUtils");
const properties_1 = require("../properties");
const units_1 = require("../units");
const elements_1 = require("../elements");
const instances_1 = require("../instances");
class DeltaProcessor {
    constructor(model) {
        this.model = model;
    }
    processDeltas(deltas, isReverting = false) {
        for (const delta of deltas) {
            switch (delta.deltaType) {
                case "UPDATE_PROPERTY_VALUE":
                    this.processUpdatePropertyValueDelta(delta, isReverting);
                    break;
                case "CREATE_ELEMENT_TREE":
                    this.processCreateElementTreeDelta(delta, isReverting);
                    break;
                case "DELETE_ELEMENT":
                    this.processDeleteElementDelta(delta, isReverting);
                    break;
                case "ATTACH_ELEMENT":
                    this.processAttachElementDelta(delta, isReverting);
                    break;
                case "DETACH_ELEMENT":
                    this.processDetachElementDelta(delta, isReverting);
                    break;
                case "CREATE_UNIT_TREE":
                    this.processCreateUnitTreeDelta(delta);
                    break;
                case "DELETE_UNIT":
                    this.processDeleteUnitDelta(delta, isReverting);
                    break;
            }
        }
    }
    processUpdatePropertyValueDelta(delta, isReverting) {
        const unit = deltaUtils.getUnit(this.model, delta.unitId);
        const structure = unit instanceof units_1.StructuralUnit
            ? unit
            : deltaUtils.findElement(this.model, deltaUtils.asModelUnit(unit, delta), delta.elementId);
        if (!structure) {
            return;
        }
        let property;
        try {
            property = deltaUtils.getProperty(structure, delta.propertyName);
        }
        catch (error) {
            if (error instanceof deltaUtils.UnknownPropertyError) {
                return;
            }
            throw error;
        }
        if (!unit.isLoaded && !property.isPublic) {
            return;
        }
        if (property instanceof properties_1.PartProperty || property instanceof properties_1.PartListProperty) {
            throw new Error("Cannot apply UPDATE_PROPERTY_VALUE delta to part (list) properties");
        }
        if (property instanceof properties_1.StructuralChildProperty || property instanceof properties_1.StructuralChildListProperty) {
            throw new Error("Cannot apply UPDATE_PROPERTY_VALUE delta to structural child (list) properties");
        }
        deltaUtils.checkMutator(delta.mutator, property);
        deltaUtils.updateStructure(structure, isReverting, () => {
            this.processMutator(structure, property, delta.mutator);
        });
    }
    processMutator(structure, property, mutator) {
        switch (mutator.mutatorType) {
            case "CHANGE":
                if (deltaUtils.isListProperty(property)) {
                    const rawList = deltaUtils.rawList(property);
                    rawList[mutator.updateIndex] = mutator.value;
                    property.updateWithRawValue(rawList);
                }
                else {
                    property.updateWithRawValue(mutator.value);
                    if (property instanceof properties_1.ByIdReferenceProperty) {
                        property.resolveReference();
                    }
                    if (property instanceof properties_1.PrimitiveProperty && property.name === "name") {
                        // Needs to be done to update client cache and client renaming, will not run automatically when _isUpdating is true.
                        structure._processNameChange();
                    }
                }
                break;
            case "ADD":
                const index = typeof mutator.insertionIndex === "number" ? mutator.insertionIndex : property.get().length;
                const rawList = deltaUtils.rawList(property);
                rawList.splice(index, 0, mutator.value);
                property.updateWithRawValue(rawList);
                break;
            case "REMOVE":
                property.get().splice(mutator.removalIndex, 1);
                break;
            default:
                throw new Error(`Invalid mutatorType: ${JSON.stringify(mutator)}`);
        }
    }
    processCreateElementTreeDelta(delta, isReverting) {
        const unit = this.getUnit(delta);
        if (!delta.elementTree) {
            throw new Error("Missing elementTree");
        }
        const parentElement = deltaUtils.findElement(this.model, unit, delta.parentId);
        if (!parentElement) {
            return;
        }
        const parentProperty = deltaUtils.getProperty(parentElement, delta.parentPropertyName);
        if (!unit.isLoaded && !parentProperty.isPublic) {
            return;
        }
        let newElement;
        if (parentProperty instanceof properties_1.PartProperty) {
            parentProperty.updateWithRawValue(delta.elementTree);
            newElement = parentProperty.get();
        }
        else if (parentProperty instanceof properties_1.PartListProperty) {
            newElement = instances_1.instancehelpers.modelElementJsonToInstance(this.model, unit, parentElement, delta.elementTree, false);
            deltaUtils.updateStructure(parentElement, isReverting, () => {
                if (delta.additionIndex !== undefined) {
                    deltaUtils.checkInsertionIndex(delta.additionIndex, parentProperty);
                    parentProperty.get().splice(delta.additionIndex, 0, newElement);
                }
                else {
                    parentProperty.get().push(newElement);
                }
            });
        }
        else {
            throw new Error("CREATE_ELEMENT_TREE parent property should be a PartProperty or PartListProperty");
        }
        // This is needed because updateWithRawValue does not automatically add the new element to the QN cache.
        unit.model._qualifiedNameCache.addStructureToCache(newElement);
        // This is needed because creating an element from JSON does not automatically resolve by-id references.
        unit.resolveByIdReferences();
    }
    processDeleteElementDelta(delta, isReverting) {
        const unit = this.getUnit(delta);
        const element = deltaUtils.findElement(this.model, unit, delta.elementId);
        if (!element) {
            return;
        }
        if (element._isDetached) {
            throw new Error("Cannot delete a detached element");
        }
        deltaUtils.updateStructure(element, isReverting, () => {
            if (element.container) {
                deltaUtils.updateStructure(element.container, isReverting, () => {
                    const handle = element.container._childHandle(element);
                    const property = handle.containingProperty;
                    if (property instanceof properties_1.PartListProperty) {
                        property.detachChild(element);
                    }
                    else if (property instanceof properties_1.PartProperty) {
                        property.detachValue();
                    }
                });
            }
            element._deleteInternal();
        });
    }
    processAttachElementDelta(delta, isReverting) {
        const unit = this.getUnit(delta);
        const element = deltaUtils.findElement(this.model, unit, delta.elementId);
        if (!element) {
            return;
        }
        if (!element._isDetached) {
            throw new Error("Cannot attach an element that is not currently detached");
        }
        const parentElement = deltaUtils.getElement(this.model, unit, delta.newParentId);
        const parentProperty = deltaUtils.getProperty(parentElement, delta.newParentPropertyName);
        if (parentProperty instanceof properties_1.PartProperty) {
            if (parentProperty.get()) {
                throw new Error("Cannot attach element to PartProperty that already has a value");
            }
            deltaUtils.updateStructure(element, isReverting, () => parentProperty.set(element));
        }
        else if (parentProperty instanceof properties_1.PartListProperty) {
            deltaUtils.updateStructure(element, isReverting, () => {
                if (delta.newIndex !== undefined) {
                    deltaUtils.checkInsertionIndex(delta.newIndex, parentProperty);
                    parentProperty.get().splice(delta.newIndex, 0, element);
                }
                else {
                    parentProperty.get().push(element);
                }
            });
        }
        else {
            throw new Error("ATTACH_ELEMENT new parent property should be a PartProperty or PartListProperty");
        }
    }
    processDetachElementDelta(delta, isReverting) {
        const unit = this.getUnit(delta);
        const element = deltaUtils.findElement(this.model, unit, delta.elementId);
        if (!element) {
            return;
        }
        if (!(element instanceof elements_1.Element)) {
            throw new Error("Cannot detach a model unit");
        }
        if (!element._isAttached) {
            throw new Error("Cannot detach an element that is already detached");
        }
        deltaUtils.updateStructure(element, isReverting, () => element.detach());
    }
    processCreateUnitTreeDelta(delta) {
        if (!delta.unitTree) {
            throw new Error("Missing unitTree");
        }
        instances_1.instancehelpers.createUnitFromJSON(this.model, {
            $ID: delta.unitId,
            $Type: delta.contentType,
            contents: delta.unitTree,
            containerId: delta.containerId,
            containmentName: delta.containmentName
        });
    }
    processDeleteUnitDelta(delta, isReverting) {
        const unit = deltaUtils.getUnit(this.model, delta.unitId);
        deltaUtils.updateStructure(unit, isReverting, () => unit.delete());
    }
    getUnit(delta) {
        return deltaUtils.asModelUnit(deltaUtils.getUnit(this.model, delta.unitId), delta);
    }
}
exports.DeltaProcessor = DeltaProcessor;
//# sourceMappingURL=DeltaProcessor.js.map