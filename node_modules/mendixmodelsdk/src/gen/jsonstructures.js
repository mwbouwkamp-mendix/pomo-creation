"use strict";
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonstructures = exports.StructureVersionInfo = void 0;
const internal = require("../sdk/internal");
exports.StructureVersionInfo = internal.StructureVersionInfo;
const mappings_1 = require("./mappings");
const xmlschemas_1 = require("./xmlschemas");
var jsonstructures;
(function (jsonstructures) {
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `JsonStructures`.
     */
    /**
     * In version 6.6.0: introduced
     */
    class JsonElement extends mappings_1.mappings.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__originalValue = new internal.PrimitiveProperty(JsonElement, this, "originalValue", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new JsonElement() cannot be invoked directly, please use 'model.jsonstructures.createJsonElement()'");
            }
        }
        get containerAsJsonStructure() {
            return super.getContainerAs(JsonStructure);
        }
        get containerAsElement() {
            return super.getContainerAs(mappings_1.mappings.Element);
        }
        get originalValue() {
            return this.__originalValue.get();
        }
        set originalValue(newValue) {
            this.__originalValue.set(newValue);
        }
        /**
         * Creates and returns a new JsonElement instance in the SDK and on the server.
         * The new JsonElement will be automatically stored in the 'elements' property
         * of the parent JsonStructure element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 and higher
         */
        static createInJsonStructureUnderElements(container) {
            internal.createInVersionCheck(container.model, JsonElement.structureTypeName, { start: "6.6.0" });
            return internal.instancehelpers.createElement(container, JsonElement, "elements", true);
        }
        /**
         * Creates and returns a new JsonElement instance in the SDK and on the server.
         * The new JsonElement will be automatically stored in the 'children' property
         * of the parent mappings.Element element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 and higher
         */
        static createInElementUnderChildren(container) {
            internal.createInVersionCheck(container.model, JsonElement.structureTypeName, { start: "6.6.0" });
            return internal.instancehelpers.createElement(container, JsonElement, "children", true);
        }
        /**
         * Creates and returns a new JsonElement instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, JsonElement);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    JsonElement.structureTypeName = "JsonStructures$JsonElement";
    JsonElement.versionInfo = new exports.StructureVersionInfo({
        introduced: "6.6.0"
    }, internal.StructureType.Element);
    jsonstructures.JsonElement = JsonElement;
    /**
     * See: {@link https://docs.mendix.com/refguide/json-structures relevant section in reference guide}
     *
     * In version 6.6.0: removed experimental
     * In version 6.2.0: introduced
     */
    class JsonStructure extends xmlschemas_1.xmlschemas.MxSchema {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            /** @internal */
            this.__jsonSnippet = new internal.PrimitiveProperty(JsonStructure, this, "jsonSnippet", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__elements = new internal.PartListProperty(JsonStructure, this, "elements", []);
            this._containmentName = "documents";
        }
        get containerAsFolderBase() {
            return super.getContainerAs(projects_1.projects.FolderBase);
        }
        get jsonSnippet() {
            return this.__jsonSnippet.get();
        }
        set jsonSnippet(newValue) {
            this.__jsonSnippet.set(newValue);
        }
        /**
         * In version 6.6.0: introduced
         */
        get elements() {
            return this.__elements.get();
        }
        /**
         * Creates a new JsonStructure unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container) {
            return internal.instancehelpers.createUnit(container, JsonStructure);
        }
        /** @internal */
        _isByNameReferrable() {
            return this.__name.isAvailable;
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    JsonStructure.structureTypeName = "JsonStructures$JsonStructure";
    JsonStructure.versionInfo = new exports.StructureVersionInfo({
        introduced: "6.2.0",
        properties: {
            elements: {
                introduced: "6.6.0"
            }
        },
        experimental: {
            currentValue: false,
            changedIn: ["6.6.0"]
        }
    }, internal.StructureType.ModelUnit);
    jsonstructures.JsonStructure = JsonStructure;
})(jsonstructures = exports.jsonstructures || (exports.jsonstructures = {}));
const projects_1 = require("./projects");
//# sourceMappingURL=jsonstructures.js.map