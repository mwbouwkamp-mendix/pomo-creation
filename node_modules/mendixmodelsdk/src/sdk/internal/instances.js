"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.instancehelpers = exports.createModelUnitFromJSON = exports.createElementFromJSON = exports.AbstractEnum = void 0;
const AbstractModel_1 = require("./AbstractModel");
const versions = require("./versionChecks");
const units = require("./units");
const elements = require("./elements");
const utils_1 = require("../utils");
const ByIdReferenceProperty_1 = require("./properties/ByIdReferenceProperty");
/**
 * Base class for enumerations in the meta model.
 * Literals of an enumeration are generated as public static constants of the generated sub class
 * which are instances of the generated sub class.
 */
class AbstractEnum {
    constructor(_name, lifeCycleInfo) {
        this._name = _name;
        this.versionInfo = new versions.LifeCycle(lifeCycleInfo);
    }
    get name() {
        return this._name;
    }
    toString() {
        return this._name;
    }
    qualifiedTsLiteralName() {
        return `${this.qualifiedTsTypeName}.${this._name}`;
    }
    checkEnumVersion(metaModelVersion, includeWarnings) {
        this.versionInfo.reportVersionIssues(metaModelVersion, `Enumeration value '${this.qualifiedTsLiteralName}'`);
    }
}
exports.AbstractEnum = AbstractEnum;
/**
 * Creates a new element instance from JSON. All element IDs are replaced by new ones.
 * After creation, the element can be attached to a container.
 * Optionally populate the given map from original to new IDs.
 */
function createElementFromJSON(model, json, idToStructureMap = {}) {
    const oldToNewIdMap = {};
    // Copy the json because we are going to change its IDs
    const jsonCopy = JSON.parse(JSON.stringify(json));
    replaceJsonIds(jsonCopy, oldToNewIdMap);
    const instance = instancehelpers.createNewElementInstanceFromJSON(model, jsonCopy);
    for (const key in oldToNewIdMap) {
        idToStructureMap[key] = instance.findElementById(oldToNewIdMap[key]);
    }
    updateByIdReferencesFromMap(instance, idToStructureMap);
    instance.resolveByIdReferences();
    return instance;
}
exports.createElementFromJSON = createElementFromJSON;
/**
 * Creates a new model unit from JSON and attaches it to the provided container unit.
 * All element IDs are replaced by new ones.
 */
function createModelUnitFromJSON(containerUnit, containmentName, contents) {
    const oldToNewIdMap = {};
    // Copy the contents because we are going to change its IDs
    const contentsCopy = JSON.parse(JSON.stringify(contents));
    replaceJsonIds(contentsCopy, oldToNewIdMap);
    const unit = instancehelpers.createUnitFromJSON(containerUnit.model, {
        $ID: contentsCopy.$ID,
        $Type: contentsCopy.$Type,
        contents: contentsCopy,
        containerId: containerUnit.id,
        containmentName
    }, false);
    const idToStructureMap = {};
    for (const key in oldToNewIdMap) {
        idToStructureMap[key] = unit.findElementById(oldToNewIdMap[key]);
    }
    updateByIdReferencesFromMap(unit, idToStructureMap);
    unit.resolveByIdReferences();
    unit._handleCreateSelf();
    return unit;
}
exports.createModelUnitFromJSON = createModelUnitFromJSON;
// namespace is a workaround for typedoc
var instancehelpers;
(function (instancehelpers) {
    /**
     * Given some a (normalized) JSON representation of a unit,
     * creates an instance of the corresponding `unit.AbstractUnit` sub class (structural/model)
     * and populates that from the JSON.
     * Should only be called if this unit was not already in memory.
     */
    function abstractUnitJsonToInstance(model, json, isPartial) {
        if (!json) {
            return null;
        }
        const unit = createStructureFromJson(lookupClass(json.$Type, model._allModelClasses()), id => model._units[id], (initializer) => new initializer(model, json.$Type, json.$ID, isPartial, null), json);
        if (unit) {
            model._addUnit(unit);
        }
        return unit;
    }
    instancehelpers.abstractUnitJsonToInstance = abstractUnitJsonToInstance;
    /**
     * Given some a (normalized) JSON representation of a model element,
     * creates an instance of the corresponding `elements.Element`
     * and populates that from the JSON.
     * Will update existing elements if this element was created before.
     */
    function modelElementJsonToInstance(model, unit, container, json, isPartial) {
        if (!json) {
            return null;
        }
        return createStructureFromJson(lookupClass(json.$Type, model._allModelClasses()), id => unit.findElementById(id), (initializer) => new initializer(model, json.$Type, json.$ID, isPartial, unit, container), json, container);
    }
    instancehelpers.modelElementJsonToInstance = modelElementJsonToInstance;
    function createNewElementInstanceFromJSON(model, json) {
        const constructor = instancehelpers.lookupClass(json.$Type, model._allModelClasses());
        if (!elements.Element.isPrototypeOf(constructor)) {
            throw new Error(`${json.$Type} is not an element type`);
        }
        const instance = instancehelpers.createElement(model, constructor);
        instance.id = json.$ID;
        instance._updateWithJsonImpl(json);
        return instance;
    }
    instancehelpers.createNewElementInstanceFromJSON = createNewElementInstanceFromJSON;
    /**
     * Creates a new element for a SDK user.
     */
    function createElement(owner, constructor, parentPropName, parentPropIsList) {
        if (!owner) {
            throw new Error("Please provide a container or model");
        }
        const model = owner instanceof AbstractModel_1.AbstractModel ? owner : owner._model;
        const instance = new constructor(model, constructor.structureTypeName, utils_1.utils.randomUuid(), false, null, null);
        checkStructureVersion(instance);
        instance._initializeNewInstance();
        if (parentPropName && !(owner instanceof AbstractModel_1.AbstractModel)) {
            if (parentPropIsList) {
                owner[parentPropName].push(instance);
            }
            else {
                owner[parentPropName] = instance;
            }
        }
        return instance;
    }
    instancehelpers.createElement = createElement;
    /**
     * Creates a new unit for a SDK user.
     */
    function createUnit(container, constructor) {
        if (!(container instanceof units.StructuralUnit)) {
            throw new Error("Expected container");
        }
        if (container.isReadOnly) {
            throw new Error("Cannot create a unit in a readonly container");
        }
        const model = container._model;
        const instance = new constructor(model, constructor.structureTypeName, utils_1.utils.randomUuid(), false, container);
        checkStructureVersion(instance);
        instance._initializeNewInstance();
        instance._handleCreateSelf();
        model._addUnitToStructuralParent(instance, container);
        model._addUnit(instance);
        return instance;
    }
    instancehelpers.createUnit = createUnit;
    /**
     * Type -> class (the constructor function, technically) lookup, e.g. "DomainModels$Entity" -> DomainModels.Entity
     */
    function lookupClass(qualifiedTypeName, classes) {
        if (!qualifiedTypeName) {
            throw new Error("Cannot look up initializer for a falsy qualified type name");
        }
        const $index = qualifiedTypeName.indexOf("$");
        if ($index < 0 || $index === qualifiedTypeName.length - 1) {
            throw new Error(`Qualified type '${qualifiedTypeName}' is not of the form '<meta model>$<type name>'`);
        }
        const metaModelName = qualifiedTypeName.substring(0, $index).toLowerCase();
        const className = qualifiedTypeName.substring($index + 1);
        if (!classes[metaModelName]) {
            throw new Error(`No meta model with name '${metaModelName}' exists`);
        }
        if (!classes[metaModelName][className]) {
            throw new Error(`No type with name '${qualifiedTypeName}' exists`);
        }
        return classes[metaModelName][className];
    }
    instancehelpers.lookupClass = lookupClass;
    function structureAffectsQualifiedNames(structure) {
        return structure._declaredAsNamespace || structureIsByNameReferrable(structure);
    }
    instancehelpers.structureAffectsQualifiedNames = structureAffectsQualifiedNames;
    function structureIsByNameReferrable(structure) {
        return structure instanceof elements.AbstractElement && structure._isByNameReferrable();
    }
    instancehelpers.structureIsByNameReferrable = structureIsByNameReferrable;
    function createUnitFromJSON(model, json, resolveByIdReferences = true) {
        const container = model._units[json.containerId];
        if (!container) {
            throw new Error(`Cannot find container unit with ID '${json.containerId}'`);
        }
        const property = container["__" + json.containmentName];
        if (!property) {
            throw new Error(`Invalid containment name '${json.containmentName}'`);
        }
        const unit = instancehelpers.abstractUnitJsonToInstance(model, json, true);
        if (!unit) {
            throw new Error("Cannot create a unit from the given unit json: " + JSON.stringify(json));
        }
        model._resolveContainer(unit, json.containerId);
        model._qualifiedNameCache.addStructureToCache(unit);
        unit._markLoaded();
        if (resolveByIdReferences) {
            unit.resolveByIdReferences();
        }
        return unit;
    }
    instancehelpers.createUnitFromJSON = createUnitFromJSON;
})(instancehelpers = exports.instancehelpers || (exports.instancehelpers = {}));
function checkStructureVersion(instance) {
    instance.versionInfo.checkStructureVersion(instance);
}
function _createInstanceWithInitializer(initializer, callback, json) {
    const instance = callback(initializer);
    instance._updateWithJsonImpl(json);
    instance._isUpdating = false; // initialization is done
    checkStructureVersion(instance);
    return instance;
}
/**
 * Creates (deserializes) a structure based on incoming JSON.
 */
function createStructureFromJson(initializer, findInstance, callback, json, container) {
    const structure = findInstance(json.$ID);
    if (structure) {
        structure._updateWithJson(json);
        if (container && container.id !== structure.container?.id) {
            structure._container = container;
        }
        return structure;
    }
    return _createInstanceWithInitializer(initializer, callback, json);
}
function replaceJsonIds(json, oldToNewIdMap) {
    if (json?.$ID) {
        const newId = utils_1.utils.randomUuid();
        oldToNewIdMap[json.$ID] = newId;
        json.$ID = newId;
        for (const key in json) {
            if (key !== "$ID" && key !== "$Type") {
                replaceJsonIds(json[key], oldToNewIdMap);
            }
        }
    }
    else if (Array.isArray(json)) {
        for (const item of json) {
            replaceJsonIds(item, oldToNewIdMap);
        }
    }
}
function updateByIdReferencesFromMap(element, idToStructureMap) {
    element.traverse(structure => {
        structure
            .allProperties()
            .filter(p => p instanceof ByIdReferenceProperty_1.ByIdReferenceProperty)
            .forEach(p => {
            const property = p;
            const referenceId = property.observableValue.getRawValue();
            if (referenceId && idToStructureMap[referenceId]) {
                // Avoid generating deltas while updating ByIdReferences
                property.parent._isUpdating = true;
                property.observableValue.updateWithRawValue(idToStructureMap[referenceId].id);
                property.parent._isUpdating = false;
            }
        });
    });
}
//# sourceMappingURL=instances.js.map