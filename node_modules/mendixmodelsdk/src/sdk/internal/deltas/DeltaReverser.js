"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeltaReverser = void 0;
const units_1 = require("../units");
const deltaUtils = require("./deltaUtils");
class DeltaReverser {
    constructor(model) {
        this.model = model;
    }
    reverse(delta) {
        switch (delta.deltaType) {
            case "UPDATE_PROPERTY_VALUE":
                return this.reverseUpdatePropertyValueDelta(delta);
            case "CREATE_ELEMENT_TREE":
                return this.reverseCreateElementTreeDelta(delta);
            case "DELETE_ELEMENT":
                return this.reverseDeleteElementDelta(delta);
            case "ATTACH_ELEMENT":
                return this.reverseAttachElementDelta(delta);
            case "DETACH_ELEMENT":
                return this.reverseDetachElementDelta(delta);
            case "CREATE_UNIT_TREE":
                return this.reverseCreateUnitTreeDelta(delta);
            case "DELETE_UNIT":
                return this.reverseDeleteUnitDelta(delta);
        }
    }
    reverseUpdatePropertyValueDelta(delta) {
        const unit = deltaUtils.getUnit(this.model, delta.unitId);
        const structure = unit instanceof units_1.StructuralUnit ? unit : deltaUtils.getElement(this.model, deltaUtils.asModelUnit(unit, delta), delta.elementId);
        const property = deltaUtils.getProperty(structure, delta.propertyName);
        let reversedMutator;
        const mutator = delta.mutator;
        switch (mutator.mutatorType) {
            case "CHANGE":
                if (deltaUtils.isListProperty(property)) {
                    reversedMutator = {
                        mutatorType: "CHANGE",
                        value: deltaUtils.rawList(property)[mutator.updateIndex],
                        updateIndex: mutator.updateIndex
                    };
                }
                else {
                    reversedMutator = {
                        mutatorType: "CHANGE",
                        value: deltaUtils.rawValue(property)
                    };
                }
                break;
            case "ADD":
                reversedMutator = {
                    mutatorType: "REMOVE",
                    removalIndex: mutator.insertionIndex !== undefined ? mutator.insertionIndex : deltaUtils.rawList(property).length
                };
                break;
            case "REMOVE":
                reversedMutator = {
                    mutatorType: "ADD",
                    value: deltaUtils.rawList(property)[mutator.removalIndex],
                    insertionIndex: mutator.removalIndex
                };
                break;
            default:
                throw new Error(`Invalid mutatorType: ${JSON.stringify(mutator)}`);
        }
        return { ...delta, mutator: reversedMutator };
    }
    reverseCreateElementTreeDelta(delta) {
        return {
            deltaType: "DELETE_ELEMENT",
            unitId: delta.unitId,
            elementId: delta.elementTree.$ID
        };
    }
    reverseDeleteElementDelta(delta) {
        const unit = this.getUnit(delta);
        const containmentInfo = deltaUtils.getContainmentInfo(unit, this.model, delta.elementId);
        return {
            deltaType: "CREATE_ELEMENT_TREE",
            unitId: delta.unitId,
            additionIndex: containmentInfo.index,
            parentId: containmentInfo.parentId,
            parentPropertyName: containmentInfo.parentPropertyName,
            elementTree: containmentInfo.element.toJSON()
        };
    }
    reverseAttachElementDelta(delta) {
        return {
            deltaType: "DETACH_ELEMENT",
            unitId: delta.unitId,
            elementId: delta.elementId
        };
    }
    reverseDetachElementDelta(delta) {
        const unit = this.getUnit(delta);
        const containmentInfo = deltaUtils.getContainmentInfo(unit, this.model, delta.elementId);
        return {
            deltaType: "ATTACH_ELEMENT",
            unitId: delta.unitId,
            elementId: delta.elementId,
            newIndex: containmentInfo.index,
            newParentId: containmentInfo.parentId,
            newParentPropertyName: containmentInfo.parentPropertyName
        };
    }
    reverseCreateUnitTreeDelta(delta) {
        return {
            deltaType: "DELETE_UNIT",
            unitId: delta.unitId
        };
    }
    reverseDeleteUnitDelta(delta) {
        const unit = deltaUtils.getUnit(this.model, delta.unitId);
        return {
            deltaType: "CREATE_UNIT_TREE",
            unitId: delta.unitId,
            containerId: unit.container.id,
            containmentName: unit._containmentName,
            contentType: unit.structureTypeName,
            unitTree: unit.toJSON()
        };
    }
    getUnit(delta) {
        return deltaUtils.asModelUnit(deltaUtils.getUnit(this.model, delta.unitId), delta);
    }
}
exports.DeltaReverser = DeltaReverser;
//# sourceMappingURL=DeltaReverser.js.map