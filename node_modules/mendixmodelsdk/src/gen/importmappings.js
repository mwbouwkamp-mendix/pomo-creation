"use strict";
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.importmappings = exports.StructureVersionInfo = void 0;
const internal = require("../sdk/internal");
exports.StructureVersionInfo = internal.StructureVersionInfo;
const mappings_1 = require("./mappings");
var importmappings;
(function (importmappings) {
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `ImportMappings`.
     */
    /**
     * See: {@link https://docs.mendix.com/refguide/import-mappings relevant section in reference guide}
     */
    class ImportMapping extends mappings_1.mappings.MappingDocument {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            /** @internal */
            this.__parameterType = new internal.PartProperty(ImportMapping, this, "parameterType", null, true);
            /** @internal */
            this.__useSubtransactionsForMicroflows = new internal.PrimitiveProperty(ImportMapping, this, "useSubtransactionsForMicroflows", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__parameter = new internal.ByNameReferenceProperty(ImportMapping, this, "parameter", null, "DomainModels$Entity");
            this._containmentName = "documents";
        }
        get containerAsFolderBase() {
            return super.getContainerAs(projects_1.projects.FolderBase);
        }
        /**
         * In version 7.16.0: introduced
         */
        get parameterType() {
            return this.__parameterType.get();
        }
        set parameterType(newValue) {
            this.__parameterType.set(newValue);
        }
        get useSubtransactionsForMicroflows() {
            return this.__useSubtransactionsForMicroflows.get();
        }
        set useSubtransactionsForMicroflows(newValue) {
            this.__useSubtransactionsForMicroflows.set(newValue);
        }
        /**
         * In version 7.16.0: deleted
         */
        get parameter() {
            return this.__parameter.get();
        }
        set parameter(newValue) {
            this.__parameter.set(newValue);
        }
        get parameterQualifiedName() {
            return this.__parameter.qualifiedName();
        }
        /**
         * Creates a new ImportMapping unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container) {
            return internal.instancehelpers.createUnit(container, ImportMapping);
        }
        /** @internal */
        _isByNameReferrable() {
            return this.__name.isAvailable;
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__parameterType.isAvailable) {
                this.parameterType = datatypes_1.datatypes.UnknownType.create(this.model);
            }
        }
    }
    ImportMapping.structureTypeName = "ImportMappings$ImportMapping";
    ImportMapping.versionInfo = new exports.StructureVersionInfo({
        properties: {
            parameterType: {
                introduced: "7.16.0",
                required: {
                    currentValue: true
                }
            },
            parameter: {
                deleted: "7.16.0",
                deletionMessage: null
            }
        }
    }, internal.StructureType.ModelUnit);
    importmappings.ImportMapping = ImportMapping;
    /**
     * See: {@link https://docs.mendix.com/refguide/import-mappings relevant section in reference guide}
     */
    class ImportObjectMappingElement extends mappings_1.mappings.ObjectMappingElement {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new ImportObjectMappingElement() cannot be invoked directly, please use 'model.importmappings.createImportObjectMappingElement()'");
            }
        }
        get containerAsMappingDocument() {
            return super.getContainerAs(mappings_1.mappings.MappingDocument);
        }
        get containerAsObjectMappingElement() {
            return super.getContainerAs(mappings_1.mappings.ObjectMappingElement);
        }
        /**
         * Creates and returns a new ImportObjectMappingElement instance in the SDK and on the server.
         * The new ImportObjectMappingElement will be automatically stored in the 'rootMappingElements' property
         * of the parent mappings.MappingDocument element passed as argument.
         */
        static createInMappingDocumentUnderRootMappingElements(container) {
            return internal.instancehelpers.createElement(container, ImportObjectMappingElement, "rootMappingElements", true);
        }
        /**
         * Creates and returns a new ImportObjectMappingElement instance in the SDK and on the server.
         * The new ImportObjectMappingElement will be automatically stored in the 'children' property
         * of the parent mappings.ObjectMappingElement element passed as argument.
         */
        static createInObjectMappingElementUnderChildren(container) {
            return internal.instancehelpers.createElement(container, ImportObjectMappingElement, "children", true);
        }
        /**
         * Creates and returns a new ImportObjectMappingElement instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ImportObjectMappingElement);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ImportObjectMappingElement.structureTypeName = "ImportMappings$ImportObjectMappingElement";
    ImportObjectMappingElement.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    importmappings.ImportObjectMappingElement = ImportObjectMappingElement;
    /**
     * See: {@link https://docs.mendix.com/refguide/import-mappings relevant section in reference guide}
     */
    class ImportValueMappingElement extends mappings_1.mappings.ValueMappingElement {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new ImportValueMappingElement() cannot be invoked directly, please use 'model.importmappings.createImportValueMappingElement()'");
            }
        }
        get containerAsObjectMappingElement() {
            return super.getContainerAs(mappings_1.mappings.ObjectMappingElement);
        }
        /**
         * Creates and returns a new ImportValueMappingElement instance in the SDK and on the server.
         * The new ImportValueMappingElement will be automatically stored in the 'children' property
         * of the parent mappings.ObjectMappingElement element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, ImportValueMappingElement, "children", true);
        }
        /**
         * Creates and returns a new ImportValueMappingElement instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ImportValueMappingElement);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ImportValueMappingElement.structureTypeName = "ImportMappings$ImportValueMappingElement";
    ImportValueMappingElement.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    importmappings.ImportValueMappingElement = ImportValueMappingElement;
})(importmappings = exports.importmappings || (exports.importmappings = {}));
const datatypes_1 = require("./datatypes");
const projects_1 = require("./projects");
//# sourceMappingURL=importmappings.js.map