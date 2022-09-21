"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeUselessDeltas = exports.rawValue = exports.rawList = exports.getContainmentInfo = exports.checkMutator = exports.checkUpdateOrRemovalIndex = exports.checkInsertionIndex = exports.isListProperty = exports.getUnit = exports.updateStructure = exports.asModelUnit = exports.getElementNotFoundError = exports.findElement = exports.getElement = exports.getProperty = exports.UnknownPropertyError = void 0;
const properties_1 = require("../properties");
const units_1 = require("../units");
class UnknownPropertyError extends Error {
    constructor(message) {
        super(message);
    }
}
exports.UnknownPropertyError = UnknownPropertyError;
function getProperty(structure, propertyName) {
    const property = structure["__" + propertyName];
    if (!property) {
        throw new UnknownPropertyError(`Cannot find property '${propertyName}' in element with ID '${structure.id}'`);
    }
    return property;
}
exports.getProperty = getProperty;
function getElement(model, unit, elementId) {
    const element = findElement(model, unit, elementId);
    if (!element) {
        throw getElementNotFoundError(unit, elementId);
    }
    return element;
}
exports.getElement = getElement;
function findElement(model, unit, elementId) {
    const element = unit.findElementById(elementId) || findElementInStructures(model.detachedStructures, elementId);
    // If the unit is loaded, we should be able to find the element, so throw if we can't find it.
    if (unit.isLoaded && !element) {
        throw getElementNotFoundError(unit, elementId);
    }
    return element;
}
exports.findElement = findElement;
function getElementNotFoundError(unit, elementId) {
    return new Error(`Cannot find element with ID '${elementId}' in unit with ID '${unit.id}'`);
}
exports.getElementNotFoundError = getElementNotFoundError;
function findElementInStructures(structures, elementId) {
    const findElementInStructure = (structure) => structure.traverseFind((e) => (e.id === elementId ? e : null));
    for (const structure of structures) {
        const element = findElementInStructure(structure);
        if (element) {
            return element;
        }
    }
    return null;
}
function asModelUnit(unit, delta) {
    if (!(unit instanceof units_1.ModelUnit)) {
        throw new Error(`Cannot process delta '${delta.deltaType}' on structural unit '${unit.structureTypeName}'`);
    }
    return unit;
}
exports.asModelUnit = asModelUnit;
function updateStructure(structure, isReverting, updateAction) {
    const oldIsUpdating = structure._isUpdating;
    const oldIsReverting = structure._isReverting;
    structure._isUpdating = true;
    structure._isReverting = isReverting;
    try {
        updateAction();
    }
    finally {
        structure._isUpdating = oldIsUpdating;
        structure._isReverting = oldIsReverting;
    }
}
exports.updateStructure = updateStructure;
function getUnit(model, unitId) {
    const unit = model._units[unitId];
    if (!unit) {
        throw new Error(`Cannot find unit with ID '${unitId}'`);
    }
    return unit;
}
exports.getUnit = getUnit;
function isListProperty(property) {
    return (property instanceof properties_1.PrimitiveListProperty ||
        property instanceof properties_1.EnumListProperty ||
        property instanceof properties_1.ByNameReferenceListProperty ||
        property instanceof properties_1.PartListProperty);
}
exports.isListProperty = isListProperty;
function checkInsertionIndex(index, property) {
    const propertyValue = property.get();
    if (index < 0 || index > propertyValue.length) {
        throw new Error(`Index ${index} is out of bounds for '${property.name}', which has a length of ${propertyValue.length}`);
    }
}
exports.checkInsertionIndex = checkInsertionIndex;
function checkUpdateOrRemovalIndex(index, property) {
    const propertyValue = property.get();
    if (index < 0 || index >= propertyValue.length) {
        throw new Error(`Index ${index} is out of bounds for '${property.name}', which has a length of ${propertyValue.length}`);
    }
}
exports.checkUpdateOrRemovalIndex = checkUpdateOrRemovalIndex;
function checkMutator(mutator, property) {
    if (!mutator) {
        throw new Error(`Invalid mutator`);
    }
    switch (mutator.mutatorType) {
        case "CHANGE":
            if (isListProperty(property)) {
                if (typeof mutator.updateIndex !== "number") {
                    throw new Error(`Invalid mutator.updateIndex '${mutator.updateIndex}' for property '${property.name}'`);
                }
                checkUpdateOrRemovalIndex(mutator.updateIndex, property);
                if (mutator.value === null) {
                    throw new Error(`Cannot push value 'null' to lists`);
                }
            }
            break;
        case "ADD":
            if (!isListProperty(property)) {
                throw new Error(`Mutator type '${mutator.mutatorType}' is only supported for lists`);
            }
            if (typeof mutator.insertionIndex === "number") {
                checkInsertionIndex(mutator.insertionIndex, property);
            }
            if (mutator.value === null) {
                throw new Error(`Cannot push value 'null' to lists`);
            }
            break;
        case "REMOVE":
            if (!isListProperty(property)) {
                throw new Error(`Mutator type '${mutator.mutatorType}' is only supported for lists`);
            }
            if (typeof mutator.removalIndex !== "number") {
                throw new Error(`Invalid mutator.removalIndex '${mutator.removalIndex}' for property '${property.name}'`);
            }
            checkUpdateOrRemovalIndex(mutator.removalIndex, property);
            break;
        default:
            throw new Error(`Invalid mutatorType: ${JSON.stringify(mutator)}`);
    }
}
exports.checkMutator = checkMutator;
function getContainmentInfo(unit, model, elementId) {
    const element = getElement(model, unit, elementId);
    if (!element.container) {
        throw new Error("The container of an element cannot be undefined or null");
    }
    const handle = element.container._childHandle(element);
    const property = handle.containingProperty;
    let index;
    if (isListProperty(property)) {
        index = property.get().indexOf(element);
    }
    return {
        element: element,
        parentId: property.parent.id,
        parentPropertyName: property.name,
        index: index
    };
}
exports.getContainmentInfo = getContainmentInfo;
function rawList(property) {
    return property._toJSON();
}
exports.rawList = rawList;
function rawValue(property) {
    return property._toJSON();
}
exports.rawValue = rawValue;
function removeUselessDeltas(deltas) {
    const deleteIndexMap = {};
    deltas.forEach((delta, i) => {
        if (delta.deltaType === "DELETE_ELEMENT") {
            deleteIndexMap[delta.elementId] = i;
        }
    });
    const filteredDeltas = [];
    for (let i = 0; i < deltas.length; i++) {
        const delta = deltas[i];
        if (delta.deltaType === "UPDATE_PROPERTY_VALUE") {
            const lastDeleteIndex = deleteIndexMap[delta.elementId];
            if (lastDeleteIndex && lastDeleteIndex > i) {
                continue;
            }
        }
        filteredDeltas.push(delta);
    }
    return filteredDeltas;
}
exports.removeUselessDeltas = removeUselessDeltas;
//# sourceMappingURL=deltaUtils.js.map