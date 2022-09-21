"use strict";
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.exportmappings = exports.StructureVersionInfo = void 0;
const internal = require("../sdk/internal");
exports.StructureVersionInfo = internal.StructureVersionInfo;
const mappings_1 = require("./mappings");
var exportmappings;
(function (exportmappings) {
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `ExportMappings`.
     */
    /**
     * See: {@link https://docs.mendix.com/refguide/export-mappings relevant section in reference guide}
     */
    class ExportMapping extends mappings_1.mappings.MappingDocument {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            /** @internal */
            this.__parameterName = new internal.PrimitiveProperty(ExportMapping, this, "parameterName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__parameterTypeName = new internal.PrimitiveProperty(ExportMapping, this, "parameterTypeName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__isHeader = new internal.PrimitiveProperty(ExportMapping, this, "isHeader", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__nullValueOption = new internal.EnumProperty(ExportMapping, this, "nullValueOption", microflows_1.microflows.NullValueOption.LeaveOutElement, microflows_1.microflows.NullValueOption);
            this._containmentName = "documents";
        }
        get containerAsFolderBase() {
            return super.getContainerAs(projects_1.projects.FolderBase);
        }
        get parameterName() {
            return this.__parameterName.get();
        }
        set parameterName(newValue) {
            this.__parameterName.set(newValue);
        }
        /**
         * In version 6.1.0: deleted
         */
        get parameterTypeName() {
            return this.__parameterTypeName.get();
        }
        set parameterTypeName(newValue) {
            this.__parameterTypeName.set(newValue);
        }
        get isHeader() {
            return this.__isHeader.get();
        }
        set isHeader(newValue) {
            this.__isHeader.set(newValue);
        }
        /**
         * In version 6.7.0: introduced
         */
        get nullValueOption() {
            return this.__nullValueOption.get();
        }
        set nullValueOption(newValue) {
            this.__nullValueOption.set(newValue);
        }
        /**
         * Creates a new ExportMapping unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container) {
            return internal.instancehelpers.createUnit(container, ExportMapping);
        }
        /** @internal */
        _isByNameReferrable() {
            return this.__name.isAvailable;
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__nullValueOption.isAvailable) {
                this.nullValueOption = microflows_1.microflows.NullValueOption.LeaveOutElement;
            }
        }
    }
    ExportMapping.structureTypeName = "ExportMappings$ExportMapping";
    ExportMapping.versionInfo = new exports.StructureVersionInfo({
        properties: {
            parameterTypeName: {
                deleted: "6.1.0",
                deletionMessage: null
            },
            nullValueOption: {
                introduced: "6.7.0"
            }
        }
    }, internal.StructureType.ModelUnit);
    exportmappings.ExportMapping = ExportMapping;
    /**
     * See: {@link https://docs.mendix.com/refguide/export-mappings relevant section in reference guide}
     */
    class ExportObjectMappingElement extends mappings_1.mappings.ObjectMappingElement {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new ExportObjectMappingElement() cannot be invoked directly, please use 'model.exportmappings.createExportObjectMappingElement()'");
            }
        }
        get containerAsMappingDocument() {
            return super.getContainerAs(mappings_1.mappings.MappingDocument);
        }
        get containerAsObjectMappingElement() {
            return super.getContainerAs(mappings_1.mappings.ObjectMappingElement);
        }
        /**
         * Creates and returns a new ExportObjectMappingElement instance in the SDK and on the server.
         * The new ExportObjectMappingElement will be automatically stored in the 'rootMappingElements' property
         * of the parent mappings.MappingDocument element passed as argument.
         */
        static createInMappingDocumentUnderRootMappingElements(container) {
            return internal.instancehelpers.createElement(container, ExportObjectMappingElement, "rootMappingElements", true);
        }
        /**
         * Creates and returns a new ExportObjectMappingElement instance in the SDK and on the server.
         * The new ExportObjectMappingElement will be automatically stored in the 'children' property
         * of the parent mappings.ObjectMappingElement element passed as argument.
         */
        static createInObjectMappingElementUnderChildren(container) {
            return internal.instancehelpers.createElement(container, ExportObjectMappingElement, "children", true);
        }
        /**
         * Creates and returns a new ExportObjectMappingElement instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ExportObjectMappingElement);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ExportObjectMappingElement.structureTypeName = "ExportMappings$ExportObjectMappingElement";
    ExportObjectMappingElement.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    exportmappings.ExportObjectMappingElement = ExportObjectMappingElement;
    /**
     * See: {@link https://docs.mendix.com/refguide/export-mappings relevant section in reference guide}
     */
    class ExportValueMappingElement extends mappings_1.mappings.ValueMappingElement {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new ExportValueMappingElement() cannot be invoked directly, please use 'model.exportmappings.createExportValueMappingElement()'");
            }
        }
        get containerAsObjectMappingElement() {
            return super.getContainerAs(mappings_1.mappings.ObjectMappingElement);
        }
        /**
         * Creates and returns a new ExportValueMappingElement instance in the SDK and on the server.
         * The new ExportValueMappingElement will be automatically stored in the 'children' property
         * of the parent mappings.ObjectMappingElement element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, ExportValueMappingElement, "children", true);
        }
        /**
         * Creates and returns a new ExportValueMappingElement instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ExportValueMappingElement);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ExportValueMappingElement.structureTypeName = "ExportMappings$ExportValueMappingElement";
    ExportValueMappingElement.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    exportmappings.ExportValueMappingElement = ExportValueMappingElement;
})(exportmappings = exports.exportmappings || (exports.exportmappings = {}));
const microflows_1 = require("./microflows");
const projects_1 = require("./projects");
//# sourceMappingURL=exportmappings.js.map