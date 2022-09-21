"use strict";
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.datatypes = exports.StructureVersionInfo = void 0;
const internal = require("../sdk/internal");
exports.StructureVersionInfo = internal.StructureVersionInfo;
var datatypes;
(function (datatypes) {
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `DataTypes`.
     */
    /**
     * See: {@link https://docs.mendix.com/refguide/data-types relevant section in reference guide}
     *
     * In version 7.9.0: introduced
     */
    class DataType extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new DataType() cannot be invoked directly, please use 'model.datatypes.createDataType()'");
            }
        }
        get containerAsAppServiceAction() {
            return super.getContainerAs(appservices_1.appservices.AppServiceAction);
        }
        get containerAsAppServiceActionParameter() {
            return super.getContainerAs(appservices_1.appservices.AppServiceActionParameter);
        }
        get containerAsConstant() {
            return super.getContainerAs(constants_1.constants.Constant);
        }
        get containerAsDataSetColumn() {
            return super.getContainerAs(datasets_1.datasets.DataSetColumn);
        }
        get containerAsDataSetParameter() {
            return super.getContainerAs(datasets_1.datasets.DataSetParameter);
        }
        get containerAsDocumentTemplateParameter() {
            return super.getContainerAs(documenttemplates_1.documenttemplates.DocumentTemplateParameter);
        }
        get containerAsImportMapping() {
            return super.getContainerAs(importmappings_1.importmappings.ImportMapping);
        }
        get containerAsValueMappingElement() {
            return super.getContainerAs(mappings_1.mappings.ValueMappingElement);
        }
        get containerAsCreateVariableAction() {
            return super.getContainerAs(microflows_1.microflows.CreateVariableAction);
        }
        get containerAsMLModelCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.MLModelCallParameterMapping);
        }
        get containerAsMicroflowBase() {
            return super.getContainerAs(microflows_1.microflows.MicroflowBase);
        }
        get containerAsMicroflowParameterBase() {
            return super.getContainerAs(microflows_1.microflows.MicroflowParameterBase);
        }
        get containerAsMicroflowParameterObject() {
            return super.getContainerAs(microflows_1.microflows.MicroflowParameterObject);
        }
        get containerAsResultHandling() {
            return super.getContainerAs(microflows_1.microflows.ResultHandling);
        }
        get containerAsPageParameter() {
            return super.getContainerAs(pages_1.pages.PageParameter);
        }
        get containerAsRestOperationParameter() {
            return super.getContainerAs(rest_1.rest.RestOperationParameter);
        }
        get containerAsPublishedOperation() {
            return super.getContainerAs(webservices_1.webservices.PublishedOperation);
        }
        get containerAsPublishedParameter() {
            return super.getContainerAs(webservices_1.webservices.PublishedParameter);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    DataType.structureTypeName = "DataTypes$DataType";
    DataType.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.9.0",
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    datatypes.DataType = DataType;
    /**
     * In version 7.9.0: introduced
     */
    class BinaryType extends DataType {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new BinaryType() cannot be invoked directly, please use 'model.datatypes.createBinaryType()'");
            }
        }
        get containerAsAppServiceAction() {
            return super.getContainerAs(appservices_1.appservices.AppServiceAction);
        }
        get containerAsAppServiceActionParameter() {
            return super.getContainerAs(appservices_1.appservices.AppServiceActionParameter);
        }
        get containerAsConstant() {
            return super.getContainerAs(constants_1.constants.Constant);
        }
        get containerAsDataSetColumn() {
            return super.getContainerAs(datasets_1.datasets.DataSetColumn);
        }
        get containerAsDataSetParameter() {
            return super.getContainerAs(datasets_1.datasets.DataSetParameter);
        }
        get containerAsDocumentTemplateParameter() {
            return super.getContainerAs(documenttemplates_1.documenttemplates.DocumentTemplateParameter);
        }
        get containerAsImportMapping() {
            return super.getContainerAs(importmappings_1.importmappings.ImportMapping);
        }
        get containerAsValueMappingElement() {
            return super.getContainerAs(mappings_1.mappings.ValueMappingElement);
        }
        get containerAsCreateVariableAction() {
            return super.getContainerAs(microflows_1.microflows.CreateVariableAction);
        }
        get containerAsMLModelCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.MLModelCallParameterMapping);
        }
        get containerAsMicroflowBase() {
            return super.getContainerAs(microflows_1.microflows.MicroflowBase);
        }
        get containerAsMicroflowParameterBase() {
            return super.getContainerAs(microflows_1.microflows.MicroflowParameterBase);
        }
        get containerAsMicroflowParameterObject() {
            return super.getContainerAs(microflows_1.microflows.MicroflowParameterObject);
        }
        get containerAsResultHandling() {
            return super.getContainerAs(microflows_1.microflows.ResultHandling);
        }
        get containerAsPageParameter() {
            return super.getContainerAs(pages_1.pages.PageParameter);
        }
        get containerAsRestOperationParameter() {
            return super.getContainerAs(rest_1.rest.RestOperationParameter);
        }
        get containerAsPublishedOperation() {
            return super.getContainerAs(webservices_1.webservices.PublishedOperation);
        }
        get containerAsPublishedParameter() {
            return super.getContainerAs(webservices_1.webservices.PublishedParameter);
        }
        /**
         * Creates and returns a new BinaryType instance in the SDK and on the server.
         * The new BinaryType will be automatically stored in the 'actionReturnType' property
         * of the parent appservices.AppServiceAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceActionUnderActionReturnType(container) {
            internal.createInVersionCheck(container.model, BinaryType.structureTypeName, { start: "7.9.0", end: "9.0.1" });
            return internal.instancehelpers.createElement(container, BinaryType, "actionReturnType", false);
        }
        /**
         * Creates and returns a new BinaryType instance in the SDK and on the server.
         * The new BinaryType will be automatically stored in the 'parameterType' property
         * of the parent appservices.AppServiceActionParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceActionParameterUnderParameterType(container) {
            internal.createInVersionCheck(container.model, BinaryType.structureTypeName, { start: "7.9.0", end: "9.0.1" });
            return internal.instancehelpers.createElement(container, BinaryType, "parameterType", false);
        }
        /**
         * Creates and returns a new BinaryType instance in the SDK and on the server.
         * The new BinaryType will be automatically stored in the 'type' property
         * of the parent constants.Constant element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInConstantUnderType(container) {
            internal.createInVersionCheck(container.model, BinaryType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, BinaryType, "type", false);
        }
        /**
         * Creates and returns a new BinaryType instance in the SDK and on the server.
         * The new BinaryType will be automatically stored in the 'columnType' property
         * of the parent datasets.DataSetColumn element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDataSetColumnUnderColumnType(container) {
            internal.createInVersionCheck(container.model, BinaryType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, BinaryType, "columnType", false);
        }
        /**
         * Creates and returns a new BinaryType instance in the SDK and on the server.
         * The new BinaryType will be automatically stored in the 'parameterType' property
         * of the parent datasets.DataSetParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDataSetParameterUnderParameterType(container) {
            internal.createInVersionCheck(container.model, BinaryType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, BinaryType, "parameterType", false);
        }
        /**
         * Creates and returns a new BinaryType instance in the SDK and on the server.
         * The new BinaryType will be automatically stored in the 'parameterType' property
         * of the parent documenttemplates.DocumentTemplateParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDocumentTemplateParameterUnderParameterType(container) {
            internal.createInVersionCheck(container.model, BinaryType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, BinaryType, "parameterType", false);
        }
        /**
         * Creates and returns a new BinaryType instance in the SDK and on the server.
         * The new BinaryType will be automatically stored in the 'parameterType' property
         * of the parent importmappings.ImportMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.16.0 and higher
         */
        static createInImportMappingUnderParameterType(container) {
            internal.createInVersionCheck(container.model, BinaryType.structureTypeName, { start: "7.16.0" });
            return internal.instancehelpers.createElement(container, BinaryType, "parameterType", false);
        }
        /**
         * Creates and returns a new BinaryType instance in the SDK and on the server.
         * The new BinaryType will be automatically stored in the 'type' property
         * of the parent mappings.ValueMappingElement element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInValueMappingElementUnderType(container) {
            internal.createInVersionCheck(container.model, BinaryType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, BinaryType, "type", false);
        }
        /**
         * Creates and returns a new BinaryType instance in the SDK and on the server.
         * The new BinaryType will be automatically stored in the 'variableType' property
         * of the parent microflows.CreateVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInCreateVariableActionUnderVariableType(container) {
            internal.createInVersionCheck(container.model, BinaryType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, BinaryType, "variableType", false);
        }
        /**
         * Creates and returns a new BinaryType instance in the SDK and on the server.
         * The new BinaryType will be automatically stored in the 'parameterType' property
         * of the parent microflows.MLModelCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.10.0 to 9.17.0
         */
        static createInMLModelCallParameterMappingUnderParameterType(container) {
            internal.createInVersionCheck(container.model, BinaryType.structureTypeName, { start: "9.10.0", end: "9.17.0" });
            return internal.instancehelpers.createElement(container, BinaryType, "parameterType", false);
        }
        /**
         * Creates and returns a new BinaryType instance in the SDK and on the server.
         * The new BinaryType will be automatically stored in the 'microflowReturnType' property
         * of the parent microflows.MicroflowBase element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowBaseUnderMicroflowReturnType(container) {
            internal.createInVersionCheck(container.model, BinaryType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, BinaryType, "microflowReturnType", false);
        }
        /**
         * Creates and returns a new BinaryType instance in the SDK and on the server.
         * The new BinaryType will be automatically stored in the 'parameterType' property
         * of the parent microflows.MicroflowParameterBase element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowParameterBaseUnderParameterType(container) {
            internal.createInVersionCheck(container.model, BinaryType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, BinaryType, "parameterType", false);
        }
        /**
         * Creates and returns a new BinaryType instance in the SDK and on the server.
         * The new BinaryType will be automatically stored in the 'variableType' property
         * of the parent microflows.MicroflowParameterObject element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowParameterObjectUnderVariableType(container) {
            internal.createInVersionCheck(container.model, BinaryType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, BinaryType, "variableType", false);
        }
        /**
         * Creates and returns a new BinaryType instance in the SDK and on the server.
         * The new BinaryType will be automatically stored in the 'variableType' property
         * of the parent microflows.ResultHandling element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInResultHandlingUnderVariableType(container) {
            internal.createInVersionCheck(container.model, BinaryType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, BinaryType, "variableType", false);
        }
        /**
         * Creates and returns a new BinaryType instance in the SDK and on the server.
         * The new BinaryType will be automatically stored in the 'parameterType' property
         * of the parent pages.PageParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.4.0 and higher
         */
        static createInPageParameterUnderParameterType(container) {
            internal.createInVersionCheck(container.model, BinaryType.structureTypeName, { start: "9.4.0" });
            return internal.instancehelpers.createElement(container, BinaryType, "parameterType", false);
        }
        /**
         * Creates and returns a new BinaryType instance in the SDK and on the server.
         * The new BinaryType will be automatically stored in the 'type' property
         * of the parent rest.RestOperationParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.17.0 and higher
         */
        static createInRestOperationParameterUnderType(container) {
            internal.createInVersionCheck(container.model, BinaryType.structureTypeName, { start: "7.17.0" });
            return internal.instancehelpers.createElement(container, BinaryType, "type", false);
        }
        /**
         * Creates and returns a new BinaryType instance in the SDK and on the server.
         * The new BinaryType will be automatically stored in the 'operationReturnType' property
         * of the parent webservices.PublishedOperation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInPublishedOperationUnderOperationReturnType(container) {
            internal.createInVersionCheck(container.model, BinaryType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, BinaryType, "operationReturnType", false);
        }
        /**
         * Creates and returns a new BinaryType instance in the SDK and on the server.
         * The new BinaryType will be automatically stored in the 'parameterType' property
         * of the parent webservices.PublishedParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInPublishedParameterUnderParameterType(container) {
            internal.createInVersionCheck(container.model, BinaryType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, BinaryType, "parameterType", false);
        }
        /**
         * Creates and returns a new BinaryType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, BinaryType);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    BinaryType.structureTypeName = "DataTypes$BinaryType";
    BinaryType.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.9.0",
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    datatypes.BinaryType = BinaryType;
    /**
     * In version 7.9.0: introduced
     */
    class BooleanType extends DataType {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new BooleanType() cannot be invoked directly, please use 'model.datatypes.createBooleanType()'");
            }
        }
        get containerAsAppServiceAction() {
            return super.getContainerAs(appservices_1.appservices.AppServiceAction);
        }
        get containerAsAppServiceActionParameter() {
            return super.getContainerAs(appservices_1.appservices.AppServiceActionParameter);
        }
        get containerAsConstant() {
            return super.getContainerAs(constants_1.constants.Constant);
        }
        get containerAsDataSetColumn() {
            return super.getContainerAs(datasets_1.datasets.DataSetColumn);
        }
        get containerAsDataSetParameter() {
            return super.getContainerAs(datasets_1.datasets.DataSetParameter);
        }
        get containerAsDocumentTemplateParameter() {
            return super.getContainerAs(documenttemplates_1.documenttemplates.DocumentTemplateParameter);
        }
        get containerAsImportMapping() {
            return super.getContainerAs(importmappings_1.importmappings.ImportMapping);
        }
        get containerAsValueMappingElement() {
            return super.getContainerAs(mappings_1.mappings.ValueMappingElement);
        }
        get containerAsCreateVariableAction() {
            return super.getContainerAs(microflows_1.microflows.CreateVariableAction);
        }
        get containerAsMLModelCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.MLModelCallParameterMapping);
        }
        get containerAsMicroflowBase() {
            return super.getContainerAs(microflows_1.microflows.MicroflowBase);
        }
        get containerAsMicroflowParameterBase() {
            return super.getContainerAs(microflows_1.microflows.MicroflowParameterBase);
        }
        get containerAsMicroflowParameterObject() {
            return super.getContainerAs(microflows_1.microflows.MicroflowParameterObject);
        }
        get containerAsResultHandling() {
            return super.getContainerAs(microflows_1.microflows.ResultHandling);
        }
        get containerAsPageParameter() {
            return super.getContainerAs(pages_1.pages.PageParameter);
        }
        get containerAsRestOperationParameter() {
            return super.getContainerAs(rest_1.rest.RestOperationParameter);
        }
        get containerAsPublishedOperation() {
            return super.getContainerAs(webservices_1.webservices.PublishedOperation);
        }
        get containerAsPublishedParameter() {
            return super.getContainerAs(webservices_1.webservices.PublishedParameter);
        }
        /**
         * Creates and returns a new BooleanType instance in the SDK and on the server.
         * The new BooleanType will be automatically stored in the 'actionReturnType' property
         * of the parent appservices.AppServiceAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceActionUnderActionReturnType(container) {
            internal.createInVersionCheck(container.model, BooleanType.structureTypeName, { start: "7.9.0", end: "9.0.1" });
            return internal.instancehelpers.createElement(container, BooleanType, "actionReturnType", false);
        }
        /**
         * Creates and returns a new BooleanType instance in the SDK and on the server.
         * The new BooleanType will be automatically stored in the 'parameterType' property
         * of the parent appservices.AppServiceActionParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceActionParameterUnderParameterType(container) {
            internal.createInVersionCheck(container.model, BooleanType.structureTypeName, { start: "7.9.0", end: "9.0.1" });
            return internal.instancehelpers.createElement(container, BooleanType, "parameterType", false);
        }
        /**
         * Creates and returns a new BooleanType instance in the SDK and on the server.
         * The new BooleanType will be automatically stored in the 'type' property
         * of the parent constants.Constant element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInConstantUnderType(container) {
            internal.createInVersionCheck(container.model, BooleanType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, BooleanType, "type", false);
        }
        /**
         * Creates and returns a new BooleanType instance in the SDK and on the server.
         * The new BooleanType will be automatically stored in the 'columnType' property
         * of the parent datasets.DataSetColumn element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDataSetColumnUnderColumnType(container) {
            internal.createInVersionCheck(container.model, BooleanType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, BooleanType, "columnType", false);
        }
        /**
         * Creates and returns a new BooleanType instance in the SDK and on the server.
         * The new BooleanType will be automatically stored in the 'parameterType' property
         * of the parent datasets.DataSetParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDataSetParameterUnderParameterType(container) {
            internal.createInVersionCheck(container.model, BooleanType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, BooleanType, "parameterType", false);
        }
        /**
         * Creates and returns a new BooleanType instance in the SDK and on the server.
         * The new BooleanType will be automatically stored in the 'parameterType' property
         * of the parent documenttemplates.DocumentTemplateParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDocumentTemplateParameterUnderParameterType(container) {
            internal.createInVersionCheck(container.model, BooleanType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, BooleanType, "parameterType", false);
        }
        /**
         * Creates and returns a new BooleanType instance in the SDK and on the server.
         * The new BooleanType will be automatically stored in the 'parameterType' property
         * of the parent importmappings.ImportMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.16.0 and higher
         */
        static createInImportMappingUnderParameterType(container) {
            internal.createInVersionCheck(container.model, BooleanType.structureTypeName, { start: "7.16.0" });
            return internal.instancehelpers.createElement(container, BooleanType, "parameterType", false);
        }
        /**
         * Creates and returns a new BooleanType instance in the SDK and on the server.
         * The new BooleanType will be automatically stored in the 'type' property
         * of the parent mappings.ValueMappingElement element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInValueMappingElementUnderType(container) {
            internal.createInVersionCheck(container.model, BooleanType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, BooleanType, "type", false);
        }
        /**
         * Creates and returns a new BooleanType instance in the SDK and on the server.
         * The new BooleanType will be automatically stored in the 'variableType' property
         * of the parent microflows.CreateVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInCreateVariableActionUnderVariableType(container) {
            internal.createInVersionCheck(container.model, BooleanType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, BooleanType, "variableType", false);
        }
        /**
         * Creates and returns a new BooleanType instance in the SDK and on the server.
         * The new BooleanType will be automatically stored in the 'parameterType' property
         * of the parent microflows.MLModelCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.10.0 to 9.17.0
         */
        static createInMLModelCallParameterMappingUnderParameterType(container) {
            internal.createInVersionCheck(container.model, BooleanType.structureTypeName, { start: "9.10.0", end: "9.17.0" });
            return internal.instancehelpers.createElement(container, BooleanType, "parameterType", false);
        }
        /**
         * Creates and returns a new BooleanType instance in the SDK and on the server.
         * The new BooleanType will be automatically stored in the 'microflowReturnType' property
         * of the parent microflows.MicroflowBase element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowBaseUnderMicroflowReturnType(container) {
            internal.createInVersionCheck(container.model, BooleanType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, BooleanType, "microflowReturnType", false);
        }
        /**
         * Creates and returns a new BooleanType instance in the SDK and on the server.
         * The new BooleanType will be automatically stored in the 'parameterType' property
         * of the parent microflows.MicroflowParameterBase element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowParameterBaseUnderParameterType(container) {
            internal.createInVersionCheck(container.model, BooleanType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, BooleanType, "parameterType", false);
        }
        /**
         * Creates and returns a new BooleanType instance in the SDK and on the server.
         * The new BooleanType will be automatically stored in the 'variableType' property
         * of the parent microflows.MicroflowParameterObject element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowParameterObjectUnderVariableType(container) {
            internal.createInVersionCheck(container.model, BooleanType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, BooleanType, "variableType", false);
        }
        /**
         * Creates and returns a new BooleanType instance in the SDK and on the server.
         * The new BooleanType will be automatically stored in the 'variableType' property
         * of the parent microflows.ResultHandling element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInResultHandlingUnderVariableType(container) {
            internal.createInVersionCheck(container.model, BooleanType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, BooleanType, "variableType", false);
        }
        /**
         * Creates and returns a new BooleanType instance in the SDK and on the server.
         * The new BooleanType will be automatically stored in the 'parameterType' property
         * of the parent pages.PageParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.4.0 and higher
         */
        static createInPageParameterUnderParameterType(container) {
            internal.createInVersionCheck(container.model, BooleanType.structureTypeName, { start: "9.4.0" });
            return internal.instancehelpers.createElement(container, BooleanType, "parameterType", false);
        }
        /**
         * Creates and returns a new BooleanType instance in the SDK and on the server.
         * The new BooleanType will be automatically stored in the 'type' property
         * of the parent rest.RestOperationParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.17.0 and higher
         */
        static createInRestOperationParameterUnderType(container) {
            internal.createInVersionCheck(container.model, BooleanType.structureTypeName, { start: "7.17.0" });
            return internal.instancehelpers.createElement(container, BooleanType, "type", false);
        }
        /**
         * Creates and returns a new BooleanType instance in the SDK and on the server.
         * The new BooleanType will be automatically stored in the 'operationReturnType' property
         * of the parent webservices.PublishedOperation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInPublishedOperationUnderOperationReturnType(container) {
            internal.createInVersionCheck(container.model, BooleanType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, BooleanType, "operationReturnType", false);
        }
        /**
         * Creates and returns a new BooleanType instance in the SDK and on the server.
         * The new BooleanType will be automatically stored in the 'parameterType' property
         * of the parent webservices.PublishedParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInPublishedParameterUnderParameterType(container) {
            internal.createInVersionCheck(container.model, BooleanType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, BooleanType, "parameterType", false);
        }
        /**
         * Creates and returns a new BooleanType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, BooleanType);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    BooleanType.structureTypeName = "DataTypes$BooleanType";
    BooleanType.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.9.0",
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    datatypes.BooleanType = BooleanType;
    /**
     * In version 7.9.0: introduced
     */
    class DateTimeType extends DataType {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new DateTimeType() cannot be invoked directly, please use 'model.datatypes.createDateTimeType()'");
            }
        }
        get containerAsAppServiceAction() {
            return super.getContainerAs(appservices_1.appservices.AppServiceAction);
        }
        get containerAsAppServiceActionParameter() {
            return super.getContainerAs(appservices_1.appservices.AppServiceActionParameter);
        }
        get containerAsConstant() {
            return super.getContainerAs(constants_1.constants.Constant);
        }
        get containerAsDataSetColumn() {
            return super.getContainerAs(datasets_1.datasets.DataSetColumn);
        }
        get containerAsDataSetParameter() {
            return super.getContainerAs(datasets_1.datasets.DataSetParameter);
        }
        get containerAsDocumentTemplateParameter() {
            return super.getContainerAs(documenttemplates_1.documenttemplates.DocumentTemplateParameter);
        }
        get containerAsImportMapping() {
            return super.getContainerAs(importmappings_1.importmappings.ImportMapping);
        }
        get containerAsValueMappingElement() {
            return super.getContainerAs(mappings_1.mappings.ValueMappingElement);
        }
        get containerAsCreateVariableAction() {
            return super.getContainerAs(microflows_1.microflows.CreateVariableAction);
        }
        get containerAsMLModelCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.MLModelCallParameterMapping);
        }
        get containerAsMicroflowBase() {
            return super.getContainerAs(microflows_1.microflows.MicroflowBase);
        }
        get containerAsMicroflowParameterBase() {
            return super.getContainerAs(microflows_1.microflows.MicroflowParameterBase);
        }
        get containerAsMicroflowParameterObject() {
            return super.getContainerAs(microflows_1.microflows.MicroflowParameterObject);
        }
        get containerAsResultHandling() {
            return super.getContainerAs(microflows_1.microflows.ResultHandling);
        }
        get containerAsPageParameter() {
            return super.getContainerAs(pages_1.pages.PageParameter);
        }
        get containerAsRestOperationParameter() {
            return super.getContainerAs(rest_1.rest.RestOperationParameter);
        }
        get containerAsPublishedOperation() {
            return super.getContainerAs(webservices_1.webservices.PublishedOperation);
        }
        get containerAsPublishedParameter() {
            return super.getContainerAs(webservices_1.webservices.PublishedParameter);
        }
        /**
         * Creates and returns a new DateTimeType instance in the SDK and on the server.
         * The new DateTimeType will be automatically stored in the 'actionReturnType' property
         * of the parent appservices.AppServiceAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceActionUnderActionReturnType(container) {
            internal.createInVersionCheck(container.model, DateTimeType.structureTypeName, { start: "7.9.0", end: "9.0.1" });
            return internal.instancehelpers.createElement(container, DateTimeType, "actionReturnType", false);
        }
        /**
         * Creates and returns a new DateTimeType instance in the SDK and on the server.
         * The new DateTimeType will be automatically stored in the 'parameterType' property
         * of the parent appservices.AppServiceActionParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceActionParameterUnderParameterType(container) {
            internal.createInVersionCheck(container.model, DateTimeType.structureTypeName, { start: "7.9.0", end: "9.0.1" });
            return internal.instancehelpers.createElement(container, DateTimeType, "parameterType", false);
        }
        /**
         * Creates and returns a new DateTimeType instance in the SDK and on the server.
         * The new DateTimeType will be automatically stored in the 'type' property
         * of the parent constants.Constant element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInConstantUnderType(container) {
            internal.createInVersionCheck(container.model, DateTimeType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, DateTimeType, "type", false);
        }
        /**
         * Creates and returns a new DateTimeType instance in the SDK and on the server.
         * The new DateTimeType will be automatically stored in the 'columnType' property
         * of the parent datasets.DataSetColumn element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDataSetColumnUnderColumnType(container) {
            internal.createInVersionCheck(container.model, DateTimeType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, DateTimeType, "columnType", false);
        }
        /**
         * Creates and returns a new DateTimeType instance in the SDK and on the server.
         * The new DateTimeType will be automatically stored in the 'parameterType' property
         * of the parent datasets.DataSetParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDataSetParameterUnderParameterType(container) {
            internal.createInVersionCheck(container.model, DateTimeType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, DateTimeType, "parameterType", false);
        }
        /**
         * Creates and returns a new DateTimeType instance in the SDK and on the server.
         * The new DateTimeType will be automatically stored in the 'parameterType' property
         * of the parent documenttemplates.DocumentTemplateParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDocumentTemplateParameterUnderParameterType(container) {
            internal.createInVersionCheck(container.model, DateTimeType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, DateTimeType, "parameterType", false);
        }
        /**
         * Creates and returns a new DateTimeType instance in the SDK and on the server.
         * The new DateTimeType will be automatically stored in the 'parameterType' property
         * of the parent importmappings.ImportMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.16.0 and higher
         */
        static createInImportMappingUnderParameterType(container) {
            internal.createInVersionCheck(container.model, DateTimeType.structureTypeName, { start: "7.16.0" });
            return internal.instancehelpers.createElement(container, DateTimeType, "parameterType", false);
        }
        /**
         * Creates and returns a new DateTimeType instance in the SDK and on the server.
         * The new DateTimeType will be automatically stored in the 'type' property
         * of the parent mappings.ValueMappingElement element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInValueMappingElementUnderType(container) {
            internal.createInVersionCheck(container.model, DateTimeType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, DateTimeType, "type", false);
        }
        /**
         * Creates and returns a new DateTimeType instance in the SDK and on the server.
         * The new DateTimeType will be automatically stored in the 'variableType' property
         * of the parent microflows.CreateVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInCreateVariableActionUnderVariableType(container) {
            internal.createInVersionCheck(container.model, DateTimeType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, DateTimeType, "variableType", false);
        }
        /**
         * Creates and returns a new DateTimeType instance in the SDK and on the server.
         * The new DateTimeType will be automatically stored in the 'parameterType' property
         * of the parent microflows.MLModelCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.10.0 to 9.17.0
         */
        static createInMLModelCallParameterMappingUnderParameterType(container) {
            internal.createInVersionCheck(container.model, DateTimeType.structureTypeName, { start: "9.10.0", end: "9.17.0" });
            return internal.instancehelpers.createElement(container, DateTimeType, "parameterType", false);
        }
        /**
         * Creates and returns a new DateTimeType instance in the SDK and on the server.
         * The new DateTimeType will be automatically stored in the 'microflowReturnType' property
         * of the parent microflows.MicroflowBase element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowBaseUnderMicroflowReturnType(container) {
            internal.createInVersionCheck(container.model, DateTimeType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, DateTimeType, "microflowReturnType", false);
        }
        /**
         * Creates and returns a new DateTimeType instance in the SDK and on the server.
         * The new DateTimeType will be automatically stored in the 'parameterType' property
         * of the parent microflows.MicroflowParameterBase element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowParameterBaseUnderParameterType(container) {
            internal.createInVersionCheck(container.model, DateTimeType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, DateTimeType, "parameterType", false);
        }
        /**
         * Creates and returns a new DateTimeType instance in the SDK and on the server.
         * The new DateTimeType will be automatically stored in the 'variableType' property
         * of the parent microflows.MicroflowParameterObject element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowParameterObjectUnderVariableType(container) {
            internal.createInVersionCheck(container.model, DateTimeType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, DateTimeType, "variableType", false);
        }
        /**
         * Creates and returns a new DateTimeType instance in the SDK and on the server.
         * The new DateTimeType will be automatically stored in the 'variableType' property
         * of the parent microflows.ResultHandling element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInResultHandlingUnderVariableType(container) {
            internal.createInVersionCheck(container.model, DateTimeType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, DateTimeType, "variableType", false);
        }
        /**
         * Creates and returns a new DateTimeType instance in the SDK and on the server.
         * The new DateTimeType will be automatically stored in the 'parameterType' property
         * of the parent pages.PageParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.4.0 and higher
         */
        static createInPageParameterUnderParameterType(container) {
            internal.createInVersionCheck(container.model, DateTimeType.structureTypeName, { start: "9.4.0" });
            return internal.instancehelpers.createElement(container, DateTimeType, "parameterType", false);
        }
        /**
         * Creates and returns a new DateTimeType instance in the SDK and on the server.
         * The new DateTimeType will be automatically stored in the 'type' property
         * of the parent rest.RestOperationParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.17.0 and higher
         */
        static createInRestOperationParameterUnderType(container) {
            internal.createInVersionCheck(container.model, DateTimeType.structureTypeName, { start: "7.17.0" });
            return internal.instancehelpers.createElement(container, DateTimeType, "type", false);
        }
        /**
         * Creates and returns a new DateTimeType instance in the SDK and on the server.
         * The new DateTimeType will be automatically stored in the 'operationReturnType' property
         * of the parent webservices.PublishedOperation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInPublishedOperationUnderOperationReturnType(container) {
            internal.createInVersionCheck(container.model, DateTimeType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, DateTimeType, "operationReturnType", false);
        }
        /**
         * Creates and returns a new DateTimeType instance in the SDK and on the server.
         * The new DateTimeType will be automatically stored in the 'parameterType' property
         * of the parent webservices.PublishedParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInPublishedParameterUnderParameterType(container) {
            internal.createInVersionCheck(container.model, DateTimeType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, DateTimeType, "parameterType", false);
        }
        /**
         * Creates and returns a new DateTimeType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, DateTimeType);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    DateTimeType.structureTypeName = "DataTypes$DateTimeType";
    DateTimeType.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.9.0",
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    datatypes.DateTimeType = DateTimeType;
    /**
     * In version 7.9.0: introduced
     */
    class DecimalType extends DataType {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new DecimalType() cannot be invoked directly, please use 'model.datatypes.createDecimalType()'");
            }
        }
        get containerAsAppServiceAction() {
            return super.getContainerAs(appservices_1.appservices.AppServiceAction);
        }
        get containerAsAppServiceActionParameter() {
            return super.getContainerAs(appservices_1.appservices.AppServiceActionParameter);
        }
        get containerAsConstant() {
            return super.getContainerAs(constants_1.constants.Constant);
        }
        get containerAsDataSetColumn() {
            return super.getContainerAs(datasets_1.datasets.DataSetColumn);
        }
        get containerAsDataSetParameter() {
            return super.getContainerAs(datasets_1.datasets.DataSetParameter);
        }
        get containerAsDocumentTemplateParameter() {
            return super.getContainerAs(documenttemplates_1.documenttemplates.DocumentTemplateParameter);
        }
        get containerAsImportMapping() {
            return super.getContainerAs(importmappings_1.importmappings.ImportMapping);
        }
        get containerAsValueMappingElement() {
            return super.getContainerAs(mappings_1.mappings.ValueMappingElement);
        }
        get containerAsCreateVariableAction() {
            return super.getContainerAs(microflows_1.microflows.CreateVariableAction);
        }
        get containerAsMLModelCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.MLModelCallParameterMapping);
        }
        get containerAsMicroflowBase() {
            return super.getContainerAs(microflows_1.microflows.MicroflowBase);
        }
        get containerAsMicroflowParameterBase() {
            return super.getContainerAs(microflows_1.microflows.MicroflowParameterBase);
        }
        get containerAsMicroflowParameterObject() {
            return super.getContainerAs(microflows_1.microflows.MicroflowParameterObject);
        }
        get containerAsResultHandling() {
            return super.getContainerAs(microflows_1.microflows.ResultHandling);
        }
        get containerAsPageParameter() {
            return super.getContainerAs(pages_1.pages.PageParameter);
        }
        get containerAsRestOperationParameter() {
            return super.getContainerAs(rest_1.rest.RestOperationParameter);
        }
        get containerAsPublishedOperation() {
            return super.getContainerAs(webservices_1.webservices.PublishedOperation);
        }
        get containerAsPublishedParameter() {
            return super.getContainerAs(webservices_1.webservices.PublishedParameter);
        }
        /**
         * Creates and returns a new DecimalType instance in the SDK and on the server.
         * The new DecimalType will be automatically stored in the 'actionReturnType' property
         * of the parent appservices.AppServiceAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceActionUnderActionReturnType(container) {
            internal.createInVersionCheck(container.model, DecimalType.structureTypeName, { start: "7.9.0", end: "9.0.1" });
            return internal.instancehelpers.createElement(container, DecimalType, "actionReturnType", false);
        }
        /**
         * Creates and returns a new DecimalType instance in the SDK and on the server.
         * The new DecimalType will be automatically stored in the 'parameterType' property
         * of the parent appservices.AppServiceActionParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceActionParameterUnderParameterType(container) {
            internal.createInVersionCheck(container.model, DecimalType.structureTypeName, { start: "7.9.0", end: "9.0.1" });
            return internal.instancehelpers.createElement(container, DecimalType, "parameterType", false);
        }
        /**
         * Creates and returns a new DecimalType instance in the SDK and on the server.
         * The new DecimalType will be automatically stored in the 'type' property
         * of the parent constants.Constant element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInConstantUnderType(container) {
            internal.createInVersionCheck(container.model, DecimalType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, DecimalType, "type", false);
        }
        /**
         * Creates and returns a new DecimalType instance in the SDK and on the server.
         * The new DecimalType will be automatically stored in the 'columnType' property
         * of the parent datasets.DataSetColumn element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDataSetColumnUnderColumnType(container) {
            internal.createInVersionCheck(container.model, DecimalType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, DecimalType, "columnType", false);
        }
        /**
         * Creates and returns a new DecimalType instance in the SDK and on the server.
         * The new DecimalType will be automatically stored in the 'parameterType' property
         * of the parent datasets.DataSetParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDataSetParameterUnderParameterType(container) {
            internal.createInVersionCheck(container.model, DecimalType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, DecimalType, "parameterType", false);
        }
        /**
         * Creates and returns a new DecimalType instance in the SDK and on the server.
         * The new DecimalType will be automatically stored in the 'parameterType' property
         * of the parent documenttemplates.DocumentTemplateParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDocumentTemplateParameterUnderParameterType(container) {
            internal.createInVersionCheck(container.model, DecimalType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, DecimalType, "parameterType", false);
        }
        /**
         * Creates and returns a new DecimalType instance in the SDK and on the server.
         * The new DecimalType will be automatically stored in the 'parameterType' property
         * of the parent importmappings.ImportMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.16.0 and higher
         */
        static createInImportMappingUnderParameterType(container) {
            internal.createInVersionCheck(container.model, DecimalType.structureTypeName, { start: "7.16.0" });
            return internal.instancehelpers.createElement(container, DecimalType, "parameterType", false);
        }
        /**
         * Creates and returns a new DecimalType instance in the SDK and on the server.
         * The new DecimalType will be automatically stored in the 'type' property
         * of the parent mappings.ValueMappingElement element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInValueMappingElementUnderType(container) {
            internal.createInVersionCheck(container.model, DecimalType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, DecimalType, "type", false);
        }
        /**
         * Creates and returns a new DecimalType instance in the SDK and on the server.
         * The new DecimalType will be automatically stored in the 'variableType' property
         * of the parent microflows.CreateVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInCreateVariableActionUnderVariableType(container) {
            internal.createInVersionCheck(container.model, DecimalType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, DecimalType, "variableType", false);
        }
        /**
         * Creates and returns a new DecimalType instance in the SDK and on the server.
         * The new DecimalType will be automatically stored in the 'parameterType' property
         * of the parent microflows.MLModelCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.10.0 to 9.17.0
         */
        static createInMLModelCallParameterMappingUnderParameterType(container) {
            internal.createInVersionCheck(container.model, DecimalType.structureTypeName, { start: "9.10.0", end: "9.17.0" });
            return internal.instancehelpers.createElement(container, DecimalType, "parameterType", false);
        }
        /**
         * Creates and returns a new DecimalType instance in the SDK and on the server.
         * The new DecimalType will be automatically stored in the 'microflowReturnType' property
         * of the parent microflows.MicroflowBase element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowBaseUnderMicroflowReturnType(container) {
            internal.createInVersionCheck(container.model, DecimalType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, DecimalType, "microflowReturnType", false);
        }
        /**
         * Creates and returns a new DecimalType instance in the SDK and on the server.
         * The new DecimalType will be automatically stored in the 'parameterType' property
         * of the parent microflows.MicroflowParameterBase element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowParameterBaseUnderParameterType(container) {
            internal.createInVersionCheck(container.model, DecimalType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, DecimalType, "parameterType", false);
        }
        /**
         * Creates and returns a new DecimalType instance in the SDK and on the server.
         * The new DecimalType will be automatically stored in the 'variableType' property
         * of the parent microflows.MicroflowParameterObject element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowParameterObjectUnderVariableType(container) {
            internal.createInVersionCheck(container.model, DecimalType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, DecimalType, "variableType", false);
        }
        /**
         * Creates and returns a new DecimalType instance in the SDK and on the server.
         * The new DecimalType will be automatically stored in the 'variableType' property
         * of the parent microflows.ResultHandling element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInResultHandlingUnderVariableType(container) {
            internal.createInVersionCheck(container.model, DecimalType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, DecimalType, "variableType", false);
        }
        /**
         * Creates and returns a new DecimalType instance in the SDK and on the server.
         * The new DecimalType will be automatically stored in the 'parameterType' property
         * of the parent pages.PageParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.4.0 and higher
         */
        static createInPageParameterUnderParameterType(container) {
            internal.createInVersionCheck(container.model, DecimalType.structureTypeName, { start: "9.4.0" });
            return internal.instancehelpers.createElement(container, DecimalType, "parameterType", false);
        }
        /**
         * Creates and returns a new DecimalType instance in the SDK and on the server.
         * The new DecimalType will be automatically stored in the 'type' property
         * of the parent rest.RestOperationParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.17.0 and higher
         */
        static createInRestOperationParameterUnderType(container) {
            internal.createInVersionCheck(container.model, DecimalType.structureTypeName, { start: "7.17.0" });
            return internal.instancehelpers.createElement(container, DecimalType, "type", false);
        }
        /**
         * Creates and returns a new DecimalType instance in the SDK and on the server.
         * The new DecimalType will be automatically stored in the 'operationReturnType' property
         * of the parent webservices.PublishedOperation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInPublishedOperationUnderOperationReturnType(container) {
            internal.createInVersionCheck(container.model, DecimalType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, DecimalType, "operationReturnType", false);
        }
        /**
         * Creates and returns a new DecimalType instance in the SDK and on the server.
         * The new DecimalType will be automatically stored in the 'parameterType' property
         * of the parent webservices.PublishedParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInPublishedParameterUnderParameterType(container) {
            internal.createInVersionCheck(container.model, DecimalType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, DecimalType, "parameterType", false);
        }
        /**
         * Creates and returns a new DecimalType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, DecimalType);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    DecimalType.structureTypeName = "DataTypes$DecimalType";
    DecimalType.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.9.0",
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    datatypes.DecimalType = DecimalType;
    /**
     * In version 7.9.0: introduced
     */
    class EmptyType extends DataType {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new EmptyType() cannot be invoked directly, please use 'model.datatypes.createEmptyType()'");
            }
        }
        get containerAsAppServiceAction() {
            return super.getContainerAs(appservices_1.appservices.AppServiceAction);
        }
        get containerAsAppServiceActionParameter() {
            return super.getContainerAs(appservices_1.appservices.AppServiceActionParameter);
        }
        get containerAsConstant() {
            return super.getContainerAs(constants_1.constants.Constant);
        }
        get containerAsDataSetColumn() {
            return super.getContainerAs(datasets_1.datasets.DataSetColumn);
        }
        get containerAsDataSetParameter() {
            return super.getContainerAs(datasets_1.datasets.DataSetParameter);
        }
        get containerAsDocumentTemplateParameter() {
            return super.getContainerAs(documenttemplates_1.documenttemplates.DocumentTemplateParameter);
        }
        get containerAsImportMapping() {
            return super.getContainerAs(importmappings_1.importmappings.ImportMapping);
        }
        get containerAsValueMappingElement() {
            return super.getContainerAs(mappings_1.mappings.ValueMappingElement);
        }
        get containerAsCreateVariableAction() {
            return super.getContainerAs(microflows_1.microflows.CreateVariableAction);
        }
        get containerAsMLModelCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.MLModelCallParameterMapping);
        }
        get containerAsMicroflowBase() {
            return super.getContainerAs(microflows_1.microflows.MicroflowBase);
        }
        get containerAsMicroflowParameterBase() {
            return super.getContainerAs(microflows_1.microflows.MicroflowParameterBase);
        }
        get containerAsMicroflowParameterObject() {
            return super.getContainerAs(microflows_1.microflows.MicroflowParameterObject);
        }
        get containerAsResultHandling() {
            return super.getContainerAs(microflows_1.microflows.ResultHandling);
        }
        get containerAsPageParameter() {
            return super.getContainerAs(pages_1.pages.PageParameter);
        }
        get containerAsRestOperationParameter() {
            return super.getContainerAs(rest_1.rest.RestOperationParameter);
        }
        get containerAsPublishedOperation() {
            return super.getContainerAs(webservices_1.webservices.PublishedOperation);
        }
        get containerAsPublishedParameter() {
            return super.getContainerAs(webservices_1.webservices.PublishedParameter);
        }
        /**
         * Creates and returns a new EmptyType instance in the SDK and on the server.
         * The new EmptyType will be automatically stored in the 'actionReturnType' property
         * of the parent appservices.AppServiceAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceActionUnderActionReturnType(container) {
            internal.createInVersionCheck(container.model, EmptyType.structureTypeName, { start: "7.9.0", end: "9.0.1" });
            return internal.instancehelpers.createElement(container, EmptyType, "actionReturnType", false);
        }
        /**
         * Creates and returns a new EmptyType instance in the SDK and on the server.
         * The new EmptyType will be automatically stored in the 'parameterType' property
         * of the parent appservices.AppServiceActionParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceActionParameterUnderParameterType(container) {
            internal.createInVersionCheck(container.model, EmptyType.structureTypeName, { start: "7.9.0", end: "9.0.1" });
            return internal.instancehelpers.createElement(container, EmptyType, "parameterType", false);
        }
        /**
         * Creates and returns a new EmptyType instance in the SDK and on the server.
         * The new EmptyType will be automatically stored in the 'type' property
         * of the parent constants.Constant element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInConstantUnderType(container) {
            internal.createInVersionCheck(container.model, EmptyType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, EmptyType, "type", false);
        }
        /**
         * Creates and returns a new EmptyType instance in the SDK and on the server.
         * The new EmptyType will be automatically stored in the 'columnType' property
         * of the parent datasets.DataSetColumn element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDataSetColumnUnderColumnType(container) {
            internal.createInVersionCheck(container.model, EmptyType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, EmptyType, "columnType", false);
        }
        /**
         * Creates and returns a new EmptyType instance in the SDK and on the server.
         * The new EmptyType will be automatically stored in the 'parameterType' property
         * of the parent datasets.DataSetParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDataSetParameterUnderParameterType(container) {
            internal.createInVersionCheck(container.model, EmptyType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, EmptyType, "parameterType", false);
        }
        /**
         * Creates and returns a new EmptyType instance in the SDK and on the server.
         * The new EmptyType will be automatically stored in the 'parameterType' property
         * of the parent documenttemplates.DocumentTemplateParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDocumentTemplateParameterUnderParameterType(container) {
            internal.createInVersionCheck(container.model, EmptyType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, EmptyType, "parameterType", false);
        }
        /**
         * Creates and returns a new EmptyType instance in the SDK and on the server.
         * The new EmptyType will be automatically stored in the 'parameterType' property
         * of the parent importmappings.ImportMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.16.0 and higher
         */
        static createInImportMappingUnderParameterType(container) {
            internal.createInVersionCheck(container.model, EmptyType.structureTypeName, { start: "7.16.0" });
            return internal.instancehelpers.createElement(container, EmptyType, "parameterType", false);
        }
        /**
         * Creates and returns a new EmptyType instance in the SDK and on the server.
         * The new EmptyType will be automatically stored in the 'type' property
         * of the parent mappings.ValueMappingElement element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInValueMappingElementUnderType(container) {
            internal.createInVersionCheck(container.model, EmptyType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, EmptyType, "type", false);
        }
        /**
         * Creates and returns a new EmptyType instance in the SDK and on the server.
         * The new EmptyType will be automatically stored in the 'variableType' property
         * of the parent microflows.CreateVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInCreateVariableActionUnderVariableType(container) {
            internal.createInVersionCheck(container.model, EmptyType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, EmptyType, "variableType", false);
        }
        /**
         * Creates and returns a new EmptyType instance in the SDK and on the server.
         * The new EmptyType will be automatically stored in the 'parameterType' property
         * of the parent microflows.MLModelCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.10.0 to 9.17.0
         */
        static createInMLModelCallParameterMappingUnderParameterType(container) {
            internal.createInVersionCheck(container.model, EmptyType.structureTypeName, { start: "9.10.0", end: "9.17.0" });
            return internal.instancehelpers.createElement(container, EmptyType, "parameterType", false);
        }
        /**
         * Creates and returns a new EmptyType instance in the SDK and on the server.
         * The new EmptyType will be automatically stored in the 'microflowReturnType' property
         * of the parent microflows.MicroflowBase element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowBaseUnderMicroflowReturnType(container) {
            internal.createInVersionCheck(container.model, EmptyType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, EmptyType, "microflowReturnType", false);
        }
        /**
         * Creates and returns a new EmptyType instance in the SDK and on the server.
         * The new EmptyType will be automatically stored in the 'parameterType' property
         * of the parent microflows.MicroflowParameterBase element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowParameterBaseUnderParameterType(container) {
            internal.createInVersionCheck(container.model, EmptyType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, EmptyType, "parameterType", false);
        }
        /**
         * Creates and returns a new EmptyType instance in the SDK and on the server.
         * The new EmptyType will be automatically stored in the 'variableType' property
         * of the parent microflows.MicroflowParameterObject element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowParameterObjectUnderVariableType(container) {
            internal.createInVersionCheck(container.model, EmptyType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, EmptyType, "variableType", false);
        }
        /**
         * Creates and returns a new EmptyType instance in the SDK and on the server.
         * The new EmptyType will be automatically stored in the 'variableType' property
         * of the parent microflows.ResultHandling element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInResultHandlingUnderVariableType(container) {
            internal.createInVersionCheck(container.model, EmptyType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, EmptyType, "variableType", false);
        }
        /**
         * Creates and returns a new EmptyType instance in the SDK and on the server.
         * The new EmptyType will be automatically stored in the 'parameterType' property
         * of the parent pages.PageParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.4.0 and higher
         */
        static createInPageParameterUnderParameterType(container) {
            internal.createInVersionCheck(container.model, EmptyType.structureTypeName, { start: "9.4.0" });
            return internal.instancehelpers.createElement(container, EmptyType, "parameterType", false);
        }
        /**
         * Creates and returns a new EmptyType instance in the SDK and on the server.
         * The new EmptyType will be automatically stored in the 'type' property
         * of the parent rest.RestOperationParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.17.0 and higher
         */
        static createInRestOperationParameterUnderType(container) {
            internal.createInVersionCheck(container.model, EmptyType.structureTypeName, { start: "7.17.0" });
            return internal.instancehelpers.createElement(container, EmptyType, "type", false);
        }
        /**
         * Creates and returns a new EmptyType instance in the SDK and on the server.
         * The new EmptyType will be automatically stored in the 'operationReturnType' property
         * of the parent webservices.PublishedOperation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInPublishedOperationUnderOperationReturnType(container) {
            internal.createInVersionCheck(container.model, EmptyType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, EmptyType, "operationReturnType", false);
        }
        /**
         * Creates and returns a new EmptyType instance in the SDK and on the server.
         * The new EmptyType will be automatically stored in the 'parameterType' property
         * of the parent webservices.PublishedParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInPublishedParameterUnderParameterType(container) {
            internal.createInVersionCheck(container.model, EmptyType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, EmptyType, "parameterType", false);
        }
        /**
         * Creates and returns a new EmptyType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, EmptyType);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    EmptyType.structureTypeName = "DataTypes$EmptyType";
    EmptyType.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.9.0",
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    datatypes.EmptyType = EmptyType;
    /**
     * In version 7.9.0: introduced
     */
    class EntityType extends DataType {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__entity = new internal.ByNameReferenceProperty(EntityType, this, "entity", null, "DomainModels$Entity");
            if (arguments.length < 4) {
                throw new Error("new EntityType() cannot be invoked directly, please use 'model.datatypes.createEntityType()'");
            }
        }
        get containerAsAppServiceAction() {
            return super.getContainerAs(appservices_1.appservices.AppServiceAction);
        }
        get containerAsAppServiceActionParameter() {
            return super.getContainerAs(appservices_1.appservices.AppServiceActionParameter);
        }
        get containerAsConstant() {
            return super.getContainerAs(constants_1.constants.Constant);
        }
        get containerAsDataSetColumn() {
            return super.getContainerAs(datasets_1.datasets.DataSetColumn);
        }
        get containerAsDataSetParameter() {
            return super.getContainerAs(datasets_1.datasets.DataSetParameter);
        }
        get containerAsDocumentTemplateParameter() {
            return super.getContainerAs(documenttemplates_1.documenttemplates.DocumentTemplateParameter);
        }
        get containerAsImportMapping() {
            return super.getContainerAs(importmappings_1.importmappings.ImportMapping);
        }
        get containerAsValueMappingElement() {
            return super.getContainerAs(mappings_1.mappings.ValueMappingElement);
        }
        get containerAsCreateVariableAction() {
            return super.getContainerAs(microflows_1.microflows.CreateVariableAction);
        }
        get containerAsMLModelCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.MLModelCallParameterMapping);
        }
        get containerAsMicroflowBase() {
            return super.getContainerAs(microflows_1.microflows.MicroflowBase);
        }
        get containerAsMicroflowParameterBase() {
            return super.getContainerAs(microflows_1.microflows.MicroflowParameterBase);
        }
        get containerAsMicroflowParameterObject() {
            return super.getContainerAs(microflows_1.microflows.MicroflowParameterObject);
        }
        get containerAsResultHandling() {
            return super.getContainerAs(microflows_1.microflows.ResultHandling);
        }
        get containerAsPageParameter() {
            return super.getContainerAs(pages_1.pages.PageParameter);
        }
        get containerAsRestOperationParameter() {
            return super.getContainerAs(rest_1.rest.RestOperationParameter);
        }
        get containerAsPublishedOperation() {
            return super.getContainerAs(webservices_1.webservices.PublishedOperation);
        }
        get containerAsPublishedParameter() {
            return super.getContainerAs(webservices_1.webservices.PublishedParameter);
        }
        get entity() {
            return this.__entity.get();
        }
        set entity(newValue) {
            this.__entity.set(newValue);
        }
        get entityQualifiedName() {
            return this.__entity.qualifiedName();
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    EntityType.structureTypeName = "DataTypes$EntityType";
    EntityType.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.9.0",
        properties: {
            entity: {
                public: {
                    currentValue: true
                },
                required: {
                    currentValue: true
                }
            }
        },
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    datatypes.EntityType = EntityType;
    /**
     * In version 7.9.0: introduced
     */
    class EnumerationType extends DataType {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__enumeration = new internal.ByNameReferenceProperty(EnumerationType, this, "enumeration", null, "Enumerations$Enumeration");
            if (arguments.length < 4) {
                throw new Error("new EnumerationType() cannot be invoked directly, please use 'model.datatypes.createEnumerationType()'");
            }
        }
        get containerAsAppServiceAction() {
            return super.getContainerAs(appservices_1.appservices.AppServiceAction);
        }
        get containerAsAppServiceActionParameter() {
            return super.getContainerAs(appservices_1.appservices.AppServiceActionParameter);
        }
        get containerAsConstant() {
            return super.getContainerAs(constants_1.constants.Constant);
        }
        get containerAsDataSetColumn() {
            return super.getContainerAs(datasets_1.datasets.DataSetColumn);
        }
        get containerAsDataSetParameter() {
            return super.getContainerAs(datasets_1.datasets.DataSetParameter);
        }
        get containerAsDocumentTemplateParameter() {
            return super.getContainerAs(documenttemplates_1.documenttemplates.DocumentTemplateParameter);
        }
        get containerAsImportMapping() {
            return super.getContainerAs(importmappings_1.importmappings.ImportMapping);
        }
        get containerAsValueMappingElement() {
            return super.getContainerAs(mappings_1.mappings.ValueMappingElement);
        }
        get containerAsCreateVariableAction() {
            return super.getContainerAs(microflows_1.microflows.CreateVariableAction);
        }
        get containerAsMLModelCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.MLModelCallParameterMapping);
        }
        get containerAsMicroflowBase() {
            return super.getContainerAs(microflows_1.microflows.MicroflowBase);
        }
        get containerAsMicroflowParameterBase() {
            return super.getContainerAs(microflows_1.microflows.MicroflowParameterBase);
        }
        get containerAsMicroflowParameterObject() {
            return super.getContainerAs(microflows_1.microflows.MicroflowParameterObject);
        }
        get containerAsResultHandling() {
            return super.getContainerAs(microflows_1.microflows.ResultHandling);
        }
        get containerAsPageParameter() {
            return super.getContainerAs(pages_1.pages.PageParameter);
        }
        get containerAsRestOperationParameter() {
            return super.getContainerAs(rest_1.rest.RestOperationParameter);
        }
        get containerAsPublishedOperation() {
            return super.getContainerAs(webservices_1.webservices.PublishedOperation);
        }
        get containerAsPublishedParameter() {
            return super.getContainerAs(webservices_1.webservices.PublishedParameter);
        }
        get enumeration() {
            return this.__enumeration.get();
        }
        set enumeration(newValue) {
            this.__enumeration.set(newValue);
        }
        get enumerationQualifiedName() {
            return this.__enumeration.qualifiedName();
        }
        /**
         * Creates and returns a new EnumerationType instance in the SDK and on the server.
         * The new EnumerationType will be automatically stored in the 'actionReturnType' property
         * of the parent appservices.AppServiceAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceActionUnderActionReturnType(container) {
            internal.createInVersionCheck(container.model, EnumerationType.structureTypeName, { start: "7.9.0", end: "9.0.1" });
            return internal.instancehelpers.createElement(container, EnumerationType, "actionReturnType", false);
        }
        /**
         * Creates and returns a new EnumerationType instance in the SDK and on the server.
         * The new EnumerationType will be automatically stored in the 'parameterType' property
         * of the parent appservices.AppServiceActionParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceActionParameterUnderParameterType(container) {
            internal.createInVersionCheck(container.model, EnumerationType.structureTypeName, { start: "7.9.0", end: "9.0.1" });
            return internal.instancehelpers.createElement(container, EnumerationType, "parameterType", false);
        }
        /**
         * Creates and returns a new EnumerationType instance in the SDK and on the server.
         * The new EnumerationType will be automatically stored in the 'type' property
         * of the parent constants.Constant element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInConstantUnderType(container) {
            internal.createInVersionCheck(container.model, EnumerationType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, EnumerationType, "type", false);
        }
        /**
         * Creates and returns a new EnumerationType instance in the SDK and on the server.
         * The new EnumerationType will be automatically stored in the 'columnType' property
         * of the parent datasets.DataSetColumn element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDataSetColumnUnderColumnType(container) {
            internal.createInVersionCheck(container.model, EnumerationType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, EnumerationType, "columnType", false);
        }
        /**
         * Creates and returns a new EnumerationType instance in the SDK and on the server.
         * The new EnumerationType will be automatically stored in the 'parameterType' property
         * of the parent datasets.DataSetParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDataSetParameterUnderParameterType(container) {
            internal.createInVersionCheck(container.model, EnumerationType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, EnumerationType, "parameterType", false);
        }
        /**
         * Creates and returns a new EnumerationType instance in the SDK and on the server.
         * The new EnumerationType will be automatically stored in the 'parameterType' property
         * of the parent documenttemplates.DocumentTemplateParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDocumentTemplateParameterUnderParameterType(container) {
            internal.createInVersionCheck(container.model, EnumerationType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, EnumerationType, "parameterType", false);
        }
        /**
         * Creates and returns a new EnumerationType instance in the SDK and on the server.
         * The new EnumerationType will be automatically stored in the 'parameterType' property
         * of the parent importmappings.ImportMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.16.0 and higher
         */
        static createInImportMappingUnderParameterType(container) {
            internal.createInVersionCheck(container.model, EnumerationType.structureTypeName, { start: "7.16.0" });
            return internal.instancehelpers.createElement(container, EnumerationType, "parameterType", false);
        }
        /**
         * Creates and returns a new EnumerationType instance in the SDK and on the server.
         * The new EnumerationType will be automatically stored in the 'type' property
         * of the parent mappings.ValueMappingElement element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInValueMappingElementUnderType(container) {
            internal.createInVersionCheck(container.model, EnumerationType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, EnumerationType, "type", false);
        }
        /**
         * Creates and returns a new EnumerationType instance in the SDK and on the server.
         * The new EnumerationType will be automatically stored in the 'variableType' property
         * of the parent microflows.CreateVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInCreateVariableActionUnderVariableType(container) {
            internal.createInVersionCheck(container.model, EnumerationType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, EnumerationType, "variableType", false);
        }
        /**
         * Creates and returns a new EnumerationType instance in the SDK and on the server.
         * The new EnumerationType will be automatically stored in the 'parameterType' property
         * of the parent microflows.MLModelCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.10.0 to 9.17.0
         */
        static createInMLModelCallParameterMappingUnderParameterType(container) {
            internal.createInVersionCheck(container.model, EnumerationType.structureTypeName, { start: "9.10.0", end: "9.17.0" });
            return internal.instancehelpers.createElement(container, EnumerationType, "parameterType", false);
        }
        /**
         * Creates and returns a new EnumerationType instance in the SDK and on the server.
         * The new EnumerationType will be automatically stored in the 'microflowReturnType' property
         * of the parent microflows.MicroflowBase element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowBaseUnderMicroflowReturnType(container) {
            internal.createInVersionCheck(container.model, EnumerationType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, EnumerationType, "microflowReturnType", false);
        }
        /**
         * Creates and returns a new EnumerationType instance in the SDK and on the server.
         * The new EnumerationType will be automatically stored in the 'parameterType' property
         * of the parent microflows.MicroflowParameterBase element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowParameterBaseUnderParameterType(container) {
            internal.createInVersionCheck(container.model, EnumerationType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, EnumerationType, "parameterType", false);
        }
        /**
         * Creates and returns a new EnumerationType instance in the SDK and on the server.
         * The new EnumerationType will be automatically stored in the 'variableType' property
         * of the parent microflows.MicroflowParameterObject element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowParameterObjectUnderVariableType(container) {
            internal.createInVersionCheck(container.model, EnumerationType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, EnumerationType, "variableType", false);
        }
        /**
         * Creates and returns a new EnumerationType instance in the SDK and on the server.
         * The new EnumerationType will be automatically stored in the 'variableType' property
         * of the parent microflows.ResultHandling element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInResultHandlingUnderVariableType(container) {
            internal.createInVersionCheck(container.model, EnumerationType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, EnumerationType, "variableType", false);
        }
        /**
         * Creates and returns a new EnumerationType instance in the SDK and on the server.
         * The new EnumerationType will be automatically stored in the 'parameterType' property
         * of the parent pages.PageParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.4.0 and higher
         */
        static createInPageParameterUnderParameterType(container) {
            internal.createInVersionCheck(container.model, EnumerationType.structureTypeName, { start: "9.4.0" });
            return internal.instancehelpers.createElement(container, EnumerationType, "parameterType", false);
        }
        /**
         * Creates and returns a new EnumerationType instance in the SDK and on the server.
         * The new EnumerationType will be automatically stored in the 'type' property
         * of the parent rest.RestOperationParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.17.0 and higher
         */
        static createInRestOperationParameterUnderType(container) {
            internal.createInVersionCheck(container.model, EnumerationType.structureTypeName, { start: "7.17.0" });
            return internal.instancehelpers.createElement(container, EnumerationType, "type", false);
        }
        /**
         * Creates and returns a new EnumerationType instance in the SDK and on the server.
         * The new EnumerationType will be automatically stored in the 'operationReturnType' property
         * of the parent webservices.PublishedOperation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInPublishedOperationUnderOperationReturnType(container) {
            internal.createInVersionCheck(container.model, EnumerationType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, EnumerationType, "operationReturnType", false);
        }
        /**
         * Creates and returns a new EnumerationType instance in the SDK and on the server.
         * The new EnumerationType will be automatically stored in the 'parameterType' property
         * of the parent webservices.PublishedParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInPublishedParameterUnderParameterType(container) {
            internal.createInVersionCheck(container.model, EnumerationType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, EnumerationType, "parameterType", false);
        }
        /**
         * Creates and returns a new EnumerationType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, EnumerationType);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    EnumerationType.structureTypeName = "DataTypes$EnumerationType";
    EnumerationType.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.9.0",
        properties: {
            enumeration: {
                public: {
                    currentValue: true
                },
                required: {
                    currentValue: true
                }
            }
        },
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    datatypes.EnumerationType = EnumerationType;
    /**
     * In version 7.9.0: introduced
     */
    class FloatType extends DataType {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new FloatType() cannot be invoked directly, please use 'model.datatypes.createFloatType()'");
            }
        }
        get containerAsAppServiceAction() {
            return super.getContainerAs(appservices_1.appservices.AppServiceAction);
        }
        get containerAsAppServiceActionParameter() {
            return super.getContainerAs(appservices_1.appservices.AppServiceActionParameter);
        }
        get containerAsConstant() {
            return super.getContainerAs(constants_1.constants.Constant);
        }
        get containerAsDataSetColumn() {
            return super.getContainerAs(datasets_1.datasets.DataSetColumn);
        }
        get containerAsDataSetParameter() {
            return super.getContainerAs(datasets_1.datasets.DataSetParameter);
        }
        get containerAsDocumentTemplateParameter() {
            return super.getContainerAs(documenttemplates_1.documenttemplates.DocumentTemplateParameter);
        }
        get containerAsImportMapping() {
            return super.getContainerAs(importmappings_1.importmappings.ImportMapping);
        }
        get containerAsValueMappingElement() {
            return super.getContainerAs(mappings_1.mappings.ValueMappingElement);
        }
        get containerAsCreateVariableAction() {
            return super.getContainerAs(microflows_1.microflows.CreateVariableAction);
        }
        get containerAsMLModelCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.MLModelCallParameterMapping);
        }
        get containerAsMicroflowBase() {
            return super.getContainerAs(microflows_1.microflows.MicroflowBase);
        }
        get containerAsMicroflowParameterBase() {
            return super.getContainerAs(microflows_1.microflows.MicroflowParameterBase);
        }
        get containerAsMicroflowParameterObject() {
            return super.getContainerAs(microflows_1.microflows.MicroflowParameterObject);
        }
        get containerAsResultHandling() {
            return super.getContainerAs(microflows_1.microflows.ResultHandling);
        }
        get containerAsPageParameter() {
            return super.getContainerAs(pages_1.pages.PageParameter);
        }
        get containerAsRestOperationParameter() {
            return super.getContainerAs(rest_1.rest.RestOperationParameter);
        }
        get containerAsPublishedOperation() {
            return super.getContainerAs(webservices_1.webservices.PublishedOperation);
        }
        get containerAsPublishedParameter() {
            return super.getContainerAs(webservices_1.webservices.PublishedParameter);
        }
        /**
         * Creates and returns a new FloatType instance in the SDK and on the server.
         * The new FloatType will be automatically stored in the 'actionReturnType' property
         * of the parent appservices.AppServiceAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceActionUnderActionReturnType(container) {
            internal.createInVersionCheck(container.model, FloatType.structureTypeName, { start: "7.9.0", end: "9.0.1" });
            return internal.instancehelpers.createElement(container, FloatType, "actionReturnType", false);
        }
        /**
         * Creates and returns a new FloatType instance in the SDK and on the server.
         * The new FloatType will be automatically stored in the 'parameterType' property
         * of the parent appservices.AppServiceActionParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceActionParameterUnderParameterType(container) {
            internal.createInVersionCheck(container.model, FloatType.structureTypeName, { start: "7.9.0", end: "9.0.1" });
            return internal.instancehelpers.createElement(container, FloatType, "parameterType", false);
        }
        /**
         * Creates and returns a new FloatType instance in the SDK and on the server.
         * The new FloatType will be automatically stored in the 'type' property
         * of the parent constants.Constant element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInConstantUnderType(container) {
            internal.createInVersionCheck(container.model, FloatType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, FloatType, "type", false);
        }
        /**
         * Creates and returns a new FloatType instance in the SDK and on the server.
         * The new FloatType will be automatically stored in the 'columnType' property
         * of the parent datasets.DataSetColumn element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDataSetColumnUnderColumnType(container) {
            internal.createInVersionCheck(container.model, FloatType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, FloatType, "columnType", false);
        }
        /**
         * Creates and returns a new FloatType instance in the SDK and on the server.
         * The new FloatType will be automatically stored in the 'parameterType' property
         * of the parent datasets.DataSetParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDataSetParameterUnderParameterType(container) {
            internal.createInVersionCheck(container.model, FloatType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, FloatType, "parameterType", false);
        }
        /**
         * Creates and returns a new FloatType instance in the SDK and on the server.
         * The new FloatType will be automatically stored in the 'parameterType' property
         * of the parent documenttemplates.DocumentTemplateParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDocumentTemplateParameterUnderParameterType(container) {
            internal.createInVersionCheck(container.model, FloatType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, FloatType, "parameterType", false);
        }
        /**
         * Creates and returns a new FloatType instance in the SDK and on the server.
         * The new FloatType will be automatically stored in the 'parameterType' property
         * of the parent importmappings.ImportMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.16.0 and higher
         */
        static createInImportMappingUnderParameterType(container) {
            internal.createInVersionCheck(container.model, FloatType.structureTypeName, { start: "7.16.0" });
            return internal.instancehelpers.createElement(container, FloatType, "parameterType", false);
        }
        /**
         * Creates and returns a new FloatType instance in the SDK and on the server.
         * The new FloatType will be automatically stored in the 'type' property
         * of the parent mappings.ValueMappingElement element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInValueMappingElementUnderType(container) {
            internal.createInVersionCheck(container.model, FloatType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, FloatType, "type", false);
        }
        /**
         * Creates and returns a new FloatType instance in the SDK and on the server.
         * The new FloatType will be automatically stored in the 'variableType' property
         * of the parent microflows.CreateVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInCreateVariableActionUnderVariableType(container) {
            internal.createInVersionCheck(container.model, FloatType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, FloatType, "variableType", false);
        }
        /**
         * Creates and returns a new FloatType instance in the SDK and on the server.
         * The new FloatType will be automatically stored in the 'parameterType' property
         * of the parent microflows.MLModelCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.10.0 to 9.17.0
         */
        static createInMLModelCallParameterMappingUnderParameterType(container) {
            internal.createInVersionCheck(container.model, FloatType.structureTypeName, { start: "9.10.0", end: "9.17.0" });
            return internal.instancehelpers.createElement(container, FloatType, "parameterType", false);
        }
        /**
         * Creates and returns a new FloatType instance in the SDK and on the server.
         * The new FloatType will be automatically stored in the 'microflowReturnType' property
         * of the parent microflows.MicroflowBase element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowBaseUnderMicroflowReturnType(container) {
            internal.createInVersionCheck(container.model, FloatType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, FloatType, "microflowReturnType", false);
        }
        /**
         * Creates and returns a new FloatType instance in the SDK and on the server.
         * The new FloatType will be automatically stored in the 'parameterType' property
         * of the parent microflows.MicroflowParameterBase element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowParameterBaseUnderParameterType(container) {
            internal.createInVersionCheck(container.model, FloatType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, FloatType, "parameterType", false);
        }
        /**
         * Creates and returns a new FloatType instance in the SDK and on the server.
         * The new FloatType will be automatically stored in the 'variableType' property
         * of the parent microflows.MicroflowParameterObject element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowParameterObjectUnderVariableType(container) {
            internal.createInVersionCheck(container.model, FloatType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, FloatType, "variableType", false);
        }
        /**
         * Creates and returns a new FloatType instance in the SDK and on the server.
         * The new FloatType will be automatically stored in the 'variableType' property
         * of the parent microflows.ResultHandling element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInResultHandlingUnderVariableType(container) {
            internal.createInVersionCheck(container.model, FloatType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, FloatType, "variableType", false);
        }
        /**
         * Creates and returns a new FloatType instance in the SDK and on the server.
         * The new FloatType will be automatically stored in the 'parameterType' property
         * of the parent pages.PageParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.4.0 and higher
         */
        static createInPageParameterUnderParameterType(container) {
            internal.createInVersionCheck(container.model, FloatType.structureTypeName, { start: "9.4.0" });
            return internal.instancehelpers.createElement(container, FloatType, "parameterType", false);
        }
        /**
         * Creates and returns a new FloatType instance in the SDK and on the server.
         * The new FloatType will be automatically stored in the 'type' property
         * of the parent rest.RestOperationParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.17.0 and higher
         */
        static createInRestOperationParameterUnderType(container) {
            internal.createInVersionCheck(container.model, FloatType.structureTypeName, { start: "7.17.0" });
            return internal.instancehelpers.createElement(container, FloatType, "type", false);
        }
        /**
         * Creates and returns a new FloatType instance in the SDK and on the server.
         * The new FloatType will be automatically stored in the 'operationReturnType' property
         * of the parent webservices.PublishedOperation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInPublishedOperationUnderOperationReturnType(container) {
            internal.createInVersionCheck(container.model, FloatType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, FloatType, "operationReturnType", false);
        }
        /**
         * Creates and returns a new FloatType instance in the SDK and on the server.
         * The new FloatType will be automatically stored in the 'parameterType' property
         * of the parent webservices.PublishedParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInPublishedParameterUnderParameterType(container) {
            internal.createInVersionCheck(container.model, FloatType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, FloatType, "parameterType", false);
        }
        /**
         * Creates and returns a new FloatType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, FloatType);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    FloatType.structureTypeName = "DataTypes$FloatType";
    FloatType.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.9.0",
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    datatypes.FloatType = FloatType;
    /**
     * In version 7.9.0: introduced
     */
    class IntegerType extends DataType {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new IntegerType() cannot be invoked directly, please use 'model.datatypes.createIntegerType()'");
            }
        }
        get containerAsAppServiceAction() {
            return super.getContainerAs(appservices_1.appservices.AppServiceAction);
        }
        get containerAsAppServiceActionParameter() {
            return super.getContainerAs(appservices_1.appservices.AppServiceActionParameter);
        }
        get containerAsConstant() {
            return super.getContainerAs(constants_1.constants.Constant);
        }
        get containerAsDataSetColumn() {
            return super.getContainerAs(datasets_1.datasets.DataSetColumn);
        }
        get containerAsDataSetParameter() {
            return super.getContainerAs(datasets_1.datasets.DataSetParameter);
        }
        get containerAsDocumentTemplateParameter() {
            return super.getContainerAs(documenttemplates_1.documenttemplates.DocumentTemplateParameter);
        }
        get containerAsImportMapping() {
            return super.getContainerAs(importmappings_1.importmappings.ImportMapping);
        }
        get containerAsValueMappingElement() {
            return super.getContainerAs(mappings_1.mappings.ValueMappingElement);
        }
        get containerAsCreateVariableAction() {
            return super.getContainerAs(microflows_1.microflows.CreateVariableAction);
        }
        get containerAsMLModelCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.MLModelCallParameterMapping);
        }
        get containerAsMicroflowBase() {
            return super.getContainerAs(microflows_1.microflows.MicroflowBase);
        }
        get containerAsMicroflowParameterBase() {
            return super.getContainerAs(microflows_1.microflows.MicroflowParameterBase);
        }
        get containerAsMicroflowParameterObject() {
            return super.getContainerAs(microflows_1.microflows.MicroflowParameterObject);
        }
        get containerAsResultHandling() {
            return super.getContainerAs(microflows_1.microflows.ResultHandling);
        }
        get containerAsPageParameter() {
            return super.getContainerAs(pages_1.pages.PageParameter);
        }
        get containerAsRestOperationParameter() {
            return super.getContainerAs(rest_1.rest.RestOperationParameter);
        }
        get containerAsPublishedOperation() {
            return super.getContainerAs(webservices_1.webservices.PublishedOperation);
        }
        get containerAsPublishedParameter() {
            return super.getContainerAs(webservices_1.webservices.PublishedParameter);
        }
        /**
         * Creates and returns a new IntegerType instance in the SDK and on the server.
         * The new IntegerType will be automatically stored in the 'actionReturnType' property
         * of the parent appservices.AppServiceAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceActionUnderActionReturnType(container) {
            internal.createInVersionCheck(container.model, IntegerType.structureTypeName, { start: "7.9.0", end: "9.0.1" });
            return internal.instancehelpers.createElement(container, IntegerType, "actionReturnType", false);
        }
        /**
         * Creates and returns a new IntegerType instance in the SDK and on the server.
         * The new IntegerType will be automatically stored in the 'parameterType' property
         * of the parent appservices.AppServiceActionParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceActionParameterUnderParameterType(container) {
            internal.createInVersionCheck(container.model, IntegerType.structureTypeName, { start: "7.9.0", end: "9.0.1" });
            return internal.instancehelpers.createElement(container, IntegerType, "parameterType", false);
        }
        /**
         * Creates and returns a new IntegerType instance in the SDK and on the server.
         * The new IntegerType will be automatically stored in the 'type' property
         * of the parent constants.Constant element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInConstantUnderType(container) {
            internal.createInVersionCheck(container.model, IntegerType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, IntegerType, "type", false);
        }
        /**
         * Creates and returns a new IntegerType instance in the SDK and on the server.
         * The new IntegerType will be automatically stored in the 'columnType' property
         * of the parent datasets.DataSetColumn element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDataSetColumnUnderColumnType(container) {
            internal.createInVersionCheck(container.model, IntegerType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, IntegerType, "columnType", false);
        }
        /**
         * Creates and returns a new IntegerType instance in the SDK and on the server.
         * The new IntegerType will be automatically stored in the 'parameterType' property
         * of the parent datasets.DataSetParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDataSetParameterUnderParameterType(container) {
            internal.createInVersionCheck(container.model, IntegerType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, IntegerType, "parameterType", false);
        }
        /**
         * Creates and returns a new IntegerType instance in the SDK and on the server.
         * The new IntegerType will be automatically stored in the 'parameterType' property
         * of the parent documenttemplates.DocumentTemplateParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDocumentTemplateParameterUnderParameterType(container) {
            internal.createInVersionCheck(container.model, IntegerType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, IntegerType, "parameterType", false);
        }
        /**
         * Creates and returns a new IntegerType instance in the SDK and on the server.
         * The new IntegerType will be automatically stored in the 'parameterType' property
         * of the parent importmappings.ImportMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.16.0 and higher
         */
        static createInImportMappingUnderParameterType(container) {
            internal.createInVersionCheck(container.model, IntegerType.structureTypeName, { start: "7.16.0" });
            return internal.instancehelpers.createElement(container, IntegerType, "parameterType", false);
        }
        /**
         * Creates and returns a new IntegerType instance in the SDK and on the server.
         * The new IntegerType will be automatically stored in the 'type' property
         * of the parent mappings.ValueMappingElement element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInValueMappingElementUnderType(container) {
            internal.createInVersionCheck(container.model, IntegerType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, IntegerType, "type", false);
        }
        /**
         * Creates and returns a new IntegerType instance in the SDK and on the server.
         * The new IntegerType will be automatically stored in the 'variableType' property
         * of the parent microflows.CreateVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInCreateVariableActionUnderVariableType(container) {
            internal.createInVersionCheck(container.model, IntegerType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, IntegerType, "variableType", false);
        }
        /**
         * Creates and returns a new IntegerType instance in the SDK and on the server.
         * The new IntegerType will be automatically stored in the 'parameterType' property
         * of the parent microflows.MLModelCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.10.0 to 9.17.0
         */
        static createInMLModelCallParameterMappingUnderParameterType(container) {
            internal.createInVersionCheck(container.model, IntegerType.structureTypeName, { start: "9.10.0", end: "9.17.0" });
            return internal.instancehelpers.createElement(container, IntegerType, "parameterType", false);
        }
        /**
         * Creates and returns a new IntegerType instance in the SDK and on the server.
         * The new IntegerType will be automatically stored in the 'microflowReturnType' property
         * of the parent microflows.MicroflowBase element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowBaseUnderMicroflowReturnType(container) {
            internal.createInVersionCheck(container.model, IntegerType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, IntegerType, "microflowReturnType", false);
        }
        /**
         * Creates and returns a new IntegerType instance in the SDK and on the server.
         * The new IntegerType will be automatically stored in the 'parameterType' property
         * of the parent microflows.MicroflowParameterBase element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowParameterBaseUnderParameterType(container) {
            internal.createInVersionCheck(container.model, IntegerType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, IntegerType, "parameterType", false);
        }
        /**
         * Creates and returns a new IntegerType instance in the SDK and on the server.
         * The new IntegerType will be automatically stored in the 'variableType' property
         * of the parent microflows.MicroflowParameterObject element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowParameterObjectUnderVariableType(container) {
            internal.createInVersionCheck(container.model, IntegerType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, IntegerType, "variableType", false);
        }
        /**
         * Creates and returns a new IntegerType instance in the SDK and on the server.
         * The new IntegerType will be automatically stored in the 'variableType' property
         * of the parent microflows.ResultHandling element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInResultHandlingUnderVariableType(container) {
            internal.createInVersionCheck(container.model, IntegerType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, IntegerType, "variableType", false);
        }
        /**
         * Creates and returns a new IntegerType instance in the SDK and on the server.
         * The new IntegerType will be automatically stored in the 'parameterType' property
         * of the parent pages.PageParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.4.0 and higher
         */
        static createInPageParameterUnderParameterType(container) {
            internal.createInVersionCheck(container.model, IntegerType.structureTypeName, { start: "9.4.0" });
            return internal.instancehelpers.createElement(container, IntegerType, "parameterType", false);
        }
        /**
         * Creates and returns a new IntegerType instance in the SDK and on the server.
         * The new IntegerType will be automatically stored in the 'type' property
         * of the parent rest.RestOperationParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.17.0 and higher
         */
        static createInRestOperationParameterUnderType(container) {
            internal.createInVersionCheck(container.model, IntegerType.structureTypeName, { start: "7.17.0" });
            return internal.instancehelpers.createElement(container, IntegerType, "type", false);
        }
        /**
         * Creates and returns a new IntegerType instance in the SDK and on the server.
         * The new IntegerType will be automatically stored in the 'operationReturnType' property
         * of the parent webservices.PublishedOperation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInPublishedOperationUnderOperationReturnType(container) {
            internal.createInVersionCheck(container.model, IntegerType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, IntegerType, "operationReturnType", false);
        }
        /**
         * Creates and returns a new IntegerType instance in the SDK and on the server.
         * The new IntegerType will be automatically stored in the 'parameterType' property
         * of the parent webservices.PublishedParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInPublishedParameterUnderParameterType(container) {
            internal.createInVersionCheck(container.model, IntegerType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, IntegerType, "parameterType", false);
        }
        /**
         * Creates and returns a new IntegerType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, IntegerType);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    IntegerType.structureTypeName = "DataTypes$IntegerType";
    IntegerType.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.9.0",
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    datatypes.IntegerType = IntegerType;
    /**
     * In version 7.9.0: introduced
     */
    class ListType extends EntityType {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new ListType() cannot be invoked directly, please use 'model.datatypes.createListType()'");
            }
        }
        get containerAsAppServiceAction() {
            return super.getContainerAs(appservices_1.appservices.AppServiceAction);
        }
        get containerAsAppServiceActionParameter() {
            return super.getContainerAs(appservices_1.appservices.AppServiceActionParameter);
        }
        get containerAsConstant() {
            return super.getContainerAs(constants_1.constants.Constant);
        }
        get containerAsDataSetColumn() {
            return super.getContainerAs(datasets_1.datasets.DataSetColumn);
        }
        get containerAsDataSetParameter() {
            return super.getContainerAs(datasets_1.datasets.DataSetParameter);
        }
        get containerAsDocumentTemplateParameter() {
            return super.getContainerAs(documenttemplates_1.documenttemplates.DocumentTemplateParameter);
        }
        get containerAsImportMapping() {
            return super.getContainerAs(importmappings_1.importmappings.ImportMapping);
        }
        get containerAsValueMappingElement() {
            return super.getContainerAs(mappings_1.mappings.ValueMappingElement);
        }
        get containerAsCreateVariableAction() {
            return super.getContainerAs(microflows_1.microflows.CreateVariableAction);
        }
        get containerAsMLModelCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.MLModelCallParameterMapping);
        }
        get containerAsMicroflowBase() {
            return super.getContainerAs(microflows_1.microflows.MicroflowBase);
        }
        get containerAsMicroflowParameterBase() {
            return super.getContainerAs(microflows_1.microflows.MicroflowParameterBase);
        }
        get containerAsMicroflowParameterObject() {
            return super.getContainerAs(microflows_1.microflows.MicroflowParameterObject);
        }
        get containerAsResultHandling() {
            return super.getContainerAs(microflows_1.microflows.ResultHandling);
        }
        get containerAsPageParameter() {
            return super.getContainerAs(pages_1.pages.PageParameter);
        }
        get containerAsRestOperationParameter() {
            return super.getContainerAs(rest_1.rest.RestOperationParameter);
        }
        get containerAsPublishedOperation() {
            return super.getContainerAs(webservices_1.webservices.PublishedOperation);
        }
        get containerAsPublishedParameter() {
            return super.getContainerAs(webservices_1.webservices.PublishedParameter);
        }
        /**
         * Creates and returns a new ListType instance in the SDK and on the server.
         * The new ListType will be automatically stored in the 'actionReturnType' property
         * of the parent appservices.AppServiceAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceActionUnderActionReturnType(container) {
            internal.createInVersionCheck(container.model, ListType.structureTypeName, { start: "7.9.0", end: "9.0.1" });
            return internal.instancehelpers.createElement(container, ListType, "actionReturnType", false);
        }
        /**
         * Creates and returns a new ListType instance in the SDK and on the server.
         * The new ListType will be automatically stored in the 'parameterType' property
         * of the parent appservices.AppServiceActionParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceActionParameterUnderParameterType(container) {
            internal.createInVersionCheck(container.model, ListType.structureTypeName, { start: "7.9.0", end: "9.0.1" });
            return internal.instancehelpers.createElement(container, ListType, "parameterType", false);
        }
        /**
         * Creates and returns a new ListType instance in the SDK and on the server.
         * The new ListType will be automatically stored in the 'type' property
         * of the parent constants.Constant element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInConstantUnderType(container) {
            internal.createInVersionCheck(container.model, ListType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, ListType, "type", false);
        }
        /**
         * Creates and returns a new ListType instance in the SDK and on the server.
         * The new ListType will be automatically stored in the 'columnType' property
         * of the parent datasets.DataSetColumn element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDataSetColumnUnderColumnType(container) {
            internal.createInVersionCheck(container.model, ListType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, ListType, "columnType", false);
        }
        /**
         * Creates and returns a new ListType instance in the SDK and on the server.
         * The new ListType will be automatically stored in the 'parameterType' property
         * of the parent datasets.DataSetParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDataSetParameterUnderParameterType(container) {
            internal.createInVersionCheck(container.model, ListType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, ListType, "parameterType", false);
        }
        /**
         * Creates and returns a new ListType instance in the SDK and on the server.
         * The new ListType will be automatically stored in the 'parameterType' property
         * of the parent documenttemplates.DocumentTemplateParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDocumentTemplateParameterUnderParameterType(container) {
            internal.createInVersionCheck(container.model, ListType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, ListType, "parameterType", false);
        }
        /**
         * Creates and returns a new ListType instance in the SDK and on the server.
         * The new ListType will be automatically stored in the 'parameterType' property
         * of the parent importmappings.ImportMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.16.0 and higher
         */
        static createInImportMappingUnderParameterType(container) {
            internal.createInVersionCheck(container.model, ListType.structureTypeName, { start: "7.16.0" });
            return internal.instancehelpers.createElement(container, ListType, "parameterType", false);
        }
        /**
         * Creates and returns a new ListType instance in the SDK and on the server.
         * The new ListType will be automatically stored in the 'type' property
         * of the parent mappings.ValueMappingElement element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInValueMappingElementUnderType(container) {
            internal.createInVersionCheck(container.model, ListType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, ListType, "type", false);
        }
        /**
         * Creates and returns a new ListType instance in the SDK and on the server.
         * The new ListType will be automatically stored in the 'variableType' property
         * of the parent microflows.CreateVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInCreateVariableActionUnderVariableType(container) {
            internal.createInVersionCheck(container.model, ListType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, ListType, "variableType", false);
        }
        /**
         * Creates and returns a new ListType instance in the SDK and on the server.
         * The new ListType will be automatically stored in the 'parameterType' property
         * of the parent microflows.MLModelCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.10.0 to 9.17.0
         */
        static createInMLModelCallParameterMappingUnderParameterType(container) {
            internal.createInVersionCheck(container.model, ListType.structureTypeName, { start: "9.10.0", end: "9.17.0" });
            return internal.instancehelpers.createElement(container, ListType, "parameterType", false);
        }
        /**
         * Creates and returns a new ListType instance in the SDK and on the server.
         * The new ListType will be automatically stored in the 'microflowReturnType' property
         * of the parent microflows.MicroflowBase element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowBaseUnderMicroflowReturnType(container) {
            internal.createInVersionCheck(container.model, ListType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, ListType, "microflowReturnType", false);
        }
        /**
         * Creates and returns a new ListType instance in the SDK and on the server.
         * The new ListType will be automatically stored in the 'parameterType' property
         * of the parent microflows.MicroflowParameterBase element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowParameterBaseUnderParameterType(container) {
            internal.createInVersionCheck(container.model, ListType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, ListType, "parameterType", false);
        }
        /**
         * Creates and returns a new ListType instance in the SDK and on the server.
         * The new ListType will be automatically stored in the 'variableType' property
         * of the parent microflows.MicroflowParameterObject element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowParameterObjectUnderVariableType(container) {
            internal.createInVersionCheck(container.model, ListType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, ListType, "variableType", false);
        }
        /**
         * Creates and returns a new ListType instance in the SDK and on the server.
         * The new ListType will be automatically stored in the 'variableType' property
         * of the parent microflows.ResultHandling element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInResultHandlingUnderVariableType(container) {
            internal.createInVersionCheck(container.model, ListType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, ListType, "variableType", false);
        }
        /**
         * Creates and returns a new ListType instance in the SDK and on the server.
         * The new ListType will be automatically stored in the 'parameterType' property
         * of the parent pages.PageParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.4.0 and higher
         */
        static createInPageParameterUnderParameterType(container) {
            internal.createInVersionCheck(container.model, ListType.structureTypeName, { start: "9.4.0" });
            return internal.instancehelpers.createElement(container, ListType, "parameterType", false);
        }
        /**
         * Creates and returns a new ListType instance in the SDK and on the server.
         * The new ListType will be automatically stored in the 'type' property
         * of the parent rest.RestOperationParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.17.0 and higher
         */
        static createInRestOperationParameterUnderType(container) {
            internal.createInVersionCheck(container.model, ListType.structureTypeName, { start: "7.17.0" });
            return internal.instancehelpers.createElement(container, ListType, "type", false);
        }
        /**
         * Creates and returns a new ListType instance in the SDK and on the server.
         * The new ListType will be automatically stored in the 'operationReturnType' property
         * of the parent webservices.PublishedOperation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInPublishedOperationUnderOperationReturnType(container) {
            internal.createInVersionCheck(container.model, ListType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, ListType, "operationReturnType", false);
        }
        /**
         * Creates and returns a new ListType instance in the SDK and on the server.
         * The new ListType will be automatically stored in the 'parameterType' property
         * of the parent webservices.PublishedParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInPublishedParameterUnderParameterType(container) {
            internal.createInVersionCheck(container.model, ListType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, ListType, "parameterType", false);
        }
        /**
         * Creates and returns a new ListType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ListType);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ListType.structureTypeName = "DataTypes$ListType";
    ListType.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.9.0",
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    datatypes.ListType = ListType;
    /**
     * In version 7.9.0: introduced
     */
    class ObjectType extends EntityType {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new ObjectType() cannot be invoked directly, please use 'model.datatypes.createObjectType()'");
            }
        }
        get containerAsAppServiceAction() {
            return super.getContainerAs(appservices_1.appservices.AppServiceAction);
        }
        get containerAsAppServiceActionParameter() {
            return super.getContainerAs(appservices_1.appservices.AppServiceActionParameter);
        }
        get containerAsConstant() {
            return super.getContainerAs(constants_1.constants.Constant);
        }
        get containerAsDataSetColumn() {
            return super.getContainerAs(datasets_1.datasets.DataSetColumn);
        }
        get containerAsDataSetParameter() {
            return super.getContainerAs(datasets_1.datasets.DataSetParameter);
        }
        get containerAsDocumentTemplateParameter() {
            return super.getContainerAs(documenttemplates_1.documenttemplates.DocumentTemplateParameter);
        }
        get containerAsImportMapping() {
            return super.getContainerAs(importmappings_1.importmappings.ImportMapping);
        }
        get containerAsValueMappingElement() {
            return super.getContainerAs(mappings_1.mappings.ValueMappingElement);
        }
        get containerAsCreateVariableAction() {
            return super.getContainerAs(microflows_1.microflows.CreateVariableAction);
        }
        get containerAsMLModelCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.MLModelCallParameterMapping);
        }
        get containerAsMicroflowBase() {
            return super.getContainerAs(microflows_1.microflows.MicroflowBase);
        }
        get containerAsMicroflowParameterBase() {
            return super.getContainerAs(microflows_1.microflows.MicroflowParameterBase);
        }
        get containerAsMicroflowParameterObject() {
            return super.getContainerAs(microflows_1.microflows.MicroflowParameterObject);
        }
        get containerAsResultHandling() {
            return super.getContainerAs(microflows_1.microflows.ResultHandling);
        }
        get containerAsPageParameter() {
            return super.getContainerAs(pages_1.pages.PageParameter);
        }
        get containerAsRestOperationParameter() {
            return super.getContainerAs(rest_1.rest.RestOperationParameter);
        }
        get containerAsPublishedOperation() {
            return super.getContainerAs(webservices_1.webservices.PublishedOperation);
        }
        get containerAsPublishedParameter() {
            return super.getContainerAs(webservices_1.webservices.PublishedParameter);
        }
        /**
         * Creates and returns a new ObjectType instance in the SDK and on the server.
         * The new ObjectType will be automatically stored in the 'actionReturnType' property
         * of the parent appservices.AppServiceAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceActionUnderActionReturnType(container) {
            internal.createInVersionCheck(container.model, ObjectType.structureTypeName, { start: "7.9.0", end: "9.0.1" });
            return internal.instancehelpers.createElement(container, ObjectType, "actionReturnType", false);
        }
        /**
         * Creates and returns a new ObjectType instance in the SDK and on the server.
         * The new ObjectType will be automatically stored in the 'parameterType' property
         * of the parent appservices.AppServiceActionParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceActionParameterUnderParameterType(container) {
            internal.createInVersionCheck(container.model, ObjectType.structureTypeName, { start: "7.9.0", end: "9.0.1" });
            return internal.instancehelpers.createElement(container, ObjectType, "parameterType", false);
        }
        /**
         * Creates and returns a new ObjectType instance in the SDK and on the server.
         * The new ObjectType will be automatically stored in the 'type' property
         * of the parent constants.Constant element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInConstantUnderType(container) {
            internal.createInVersionCheck(container.model, ObjectType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, ObjectType, "type", false);
        }
        /**
         * Creates and returns a new ObjectType instance in the SDK and on the server.
         * The new ObjectType will be automatically stored in the 'columnType' property
         * of the parent datasets.DataSetColumn element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDataSetColumnUnderColumnType(container) {
            internal.createInVersionCheck(container.model, ObjectType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, ObjectType, "columnType", false);
        }
        /**
         * Creates and returns a new ObjectType instance in the SDK and on the server.
         * The new ObjectType will be automatically stored in the 'parameterType' property
         * of the parent datasets.DataSetParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDataSetParameterUnderParameterType(container) {
            internal.createInVersionCheck(container.model, ObjectType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, ObjectType, "parameterType", false);
        }
        /**
         * Creates and returns a new ObjectType instance in the SDK and on the server.
         * The new ObjectType will be automatically stored in the 'parameterType' property
         * of the parent documenttemplates.DocumentTemplateParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDocumentTemplateParameterUnderParameterType(container) {
            internal.createInVersionCheck(container.model, ObjectType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, ObjectType, "parameterType", false);
        }
        /**
         * Creates and returns a new ObjectType instance in the SDK and on the server.
         * The new ObjectType will be automatically stored in the 'parameterType' property
         * of the parent importmappings.ImportMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.16.0 and higher
         */
        static createInImportMappingUnderParameterType(container) {
            internal.createInVersionCheck(container.model, ObjectType.structureTypeName, { start: "7.16.0" });
            return internal.instancehelpers.createElement(container, ObjectType, "parameterType", false);
        }
        /**
         * Creates and returns a new ObjectType instance in the SDK and on the server.
         * The new ObjectType will be automatically stored in the 'type' property
         * of the parent mappings.ValueMappingElement element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInValueMappingElementUnderType(container) {
            internal.createInVersionCheck(container.model, ObjectType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, ObjectType, "type", false);
        }
        /**
         * Creates and returns a new ObjectType instance in the SDK and on the server.
         * The new ObjectType will be automatically stored in the 'variableType' property
         * of the parent microflows.CreateVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInCreateVariableActionUnderVariableType(container) {
            internal.createInVersionCheck(container.model, ObjectType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, ObjectType, "variableType", false);
        }
        /**
         * Creates and returns a new ObjectType instance in the SDK and on the server.
         * The new ObjectType will be automatically stored in the 'parameterType' property
         * of the parent microflows.MLModelCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.10.0 to 9.17.0
         */
        static createInMLModelCallParameterMappingUnderParameterType(container) {
            internal.createInVersionCheck(container.model, ObjectType.structureTypeName, { start: "9.10.0", end: "9.17.0" });
            return internal.instancehelpers.createElement(container, ObjectType, "parameterType", false);
        }
        /**
         * Creates and returns a new ObjectType instance in the SDK and on the server.
         * The new ObjectType will be automatically stored in the 'microflowReturnType' property
         * of the parent microflows.MicroflowBase element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowBaseUnderMicroflowReturnType(container) {
            internal.createInVersionCheck(container.model, ObjectType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, ObjectType, "microflowReturnType", false);
        }
        /**
         * Creates and returns a new ObjectType instance in the SDK and on the server.
         * The new ObjectType will be automatically stored in the 'parameterType' property
         * of the parent microflows.MicroflowParameterBase element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowParameterBaseUnderParameterType(container) {
            internal.createInVersionCheck(container.model, ObjectType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, ObjectType, "parameterType", false);
        }
        /**
         * Creates and returns a new ObjectType instance in the SDK and on the server.
         * The new ObjectType will be automatically stored in the 'variableType' property
         * of the parent microflows.MicroflowParameterObject element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowParameterObjectUnderVariableType(container) {
            internal.createInVersionCheck(container.model, ObjectType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, ObjectType, "variableType", false);
        }
        /**
         * Creates and returns a new ObjectType instance in the SDK and on the server.
         * The new ObjectType will be automatically stored in the 'variableType' property
         * of the parent microflows.ResultHandling element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInResultHandlingUnderVariableType(container) {
            internal.createInVersionCheck(container.model, ObjectType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, ObjectType, "variableType", false);
        }
        /**
         * Creates and returns a new ObjectType instance in the SDK and on the server.
         * The new ObjectType will be automatically stored in the 'parameterType' property
         * of the parent pages.PageParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.4.0 and higher
         */
        static createInPageParameterUnderParameterType(container) {
            internal.createInVersionCheck(container.model, ObjectType.structureTypeName, { start: "9.4.0" });
            return internal.instancehelpers.createElement(container, ObjectType, "parameterType", false);
        }
        /**
         * Creates and returns a new ObjectType instance in the SDK and on the server.
         * The new ObjectType will be automatically stored in the 'type' property
         * of the parent rest.RestOperationParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.17.0 and higher
         */
        static createInRestOperationParameterUnderType(container) {
            internal.createInVersionCheck(container.model, ObjectType.structureTypeName, { start: "7.17.0" });
            return internal.instancehelpers.createElement(container, ObjectType, "type", false);
        }
        /**
         * Creates and returns a new ObjectType instance in the SDK and on the server.
         * The new ObjectType will be automatically stored in the 'operationReturnType' property
         * of the parent webservices.PublishedOperation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInPublishedOperationUnderOperationReturnType(container) {
            internal.createInVersionCheck(container.model, ObjectType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, ObjectType, "operationReturnType", false);
        }
        /**
         * Creates and returns a new ObjectType instance in the SDK and on the server.
         * The new ObjectType will be automatically stored in the 'parameterType' property
         * of the parent webservices.PublishedParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInPublishedParameterUnderParameterType(container) {
            internal.createInVersionCheck(container.model, ObjectType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, ObjectType, "parameterType", false);
        }
        /**
         * Creates and returns a new ObjectType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ObjectType);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ObjectType.structureTypeName = "DataTypes$ObjectType";
    ObjectType.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.9.0",
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    datatypes.ObjectType = ObjectType;
    /**
     * In version 7.9.0: introduced
     */
    class StringType extends DataType {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new StringType() cannot be invoked directly, please use 'model.datatypes.createStringType()'");
            }
        }
        get containerAsAppServiceAction() {
            return super.getContainerAs(appservices_1.appservices.AppServiceAction);
        }
        get containerAsAppServiceActionParameter() {
            return super.getContainerAs(appservices_1.appservices.AppServiceActionParameter);
        }
        get containerAsConstant() {
            return super.getContainerAs(constants_1.constants.Constant);
        }
        get containerAsDataSetColumn() {
            return super.getContainerAs(datasets_1.datasets.DataSetColumn);
        }
        get containerAsDataSetParameter() {
            return super.getContainerAs(datasets_1.datasets.DataSetParameter);
        }
        get containerAsDocumentTemplateParameter() {
            return super.getContainerAs(documenttemplates_1.documenttemplates.DocumentTemplateParameter);
        }
        get containerAsImportMapping() {
            return super.getContainerAs(importmappings_1.importmappings.ImportMapping);
        }
        get containerAsValueMappingElement() {
            return super.getContainerAs(mappings_1.mappings.ValueMappingElement);
        }
        get containerAsCreateVariableAction() {
            return super.getContainerAs(microflows_1.microflows.CreateVariableAction);
        }
        get containerAsMLModelCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.MLModelCallParameterMapping);
        }
        get containerAsMicroflowBase() {
            return super.getContainerAs(microflows_1.microflows.MicroflowBase);
        }
        get containerAsMicroflowParameterBase() {
            return super.getContainerAs(microflows_1.microflows.MicroflowParameterBase);
        }
        get containerAsMicroflowParameterObject() {
            return super.getContainerAs(microflows_1.microflows.MicroflowParameterObject);
        }
        get containerAsResultHandling() {
            return super.getContainerAs(microflows_1.microflows.ResultHandling);
        }
        get containerAsPageParameter() {
            return super.getContainerAs(pages_1.pages.PageParameter);
        }
        get containerAsRestOperationParameter() {
            return super.getContainerAs(rest_1.rest.RestOperationParameter);
        }
        get containerAsPublishedOperation() {
            return super.getContainerAs(webservices_1.webservices.PublishedOperation);
        }
        get containerAsPublishedParameter() {
            return super.getContainerAs(webservices_1.webservices.PublishedParameter);
        }
        /**
         * Creates and returns a new StringType instance in the SDK and on the server.
         * The new StringType will be automatically stored in the 'actionReturnType' property
         * of the parent appservices.AppServiceAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceActionUnderActionReturnType(container) {
            internal.createInVersionCheck(container.model, StringType.structureTypeName, { start: "7.9.0", end: "9.0.1" });
            return internal.instancehelpers.createElement(container, StringType, "actionReturnType", false);
        }
        /**
         * Creates and returns a new StringType instance in the SDK and on the server.
         * The new StringType will be automatically stored in the 'parameterType' property
         * of the parent appservices.AppServiceActionParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceActionParameterUnderParameterType(container) {
            internal.createInVersionCheck(container.model, StringType.structureTypeName, { start: "7.9.0", end: "9.0.1" });
            return internal.instancehelpers.createElement(container, StringType, "parameterType", false);
        }
        /**
         * Creates and returns a new StringType instance in the SDK and on the server.
         * The new StringType will be automatically stored in the 'type' property
         * of the parent constants.Constant element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInConstantUnderType(container) {
            internal.createInVersionCheck(container.model, StringType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, StringType, "type", false);
        }
        /**
         * Creates and returns a new StringType instance in the SDK and on the server.
         * The new StringType will be automatically stored in the 'columnType' property
         * of the parent datasets.DataSetColumn element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDataSetColumnUnderColumnType(container) {
            internal.createInVersionCheck(container.model, StringType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, StringType, "columnType", false);
        }
        /**
         * Creates and returns a new StringType instance in the SDK and on the server.
         * The new StringType will be automatically stored in the 'parameterType' property
         * of the parent datasets.DataSetParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDataSetParameterUnderParameterType(container) {
            internal.createInVersionCheck(container.model, StringType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, StringType, "parameterType", false);
        }
        /**
         * Creates and returns a new StringType instance in the SDK and on the server.
         * The new StringType will be automatically stored in the 'parameterType' property
         * of the parent documenttemplates.DocumentTemplateParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDocumentTemplateParameterUnderParameterType(container) {
            internal.createInVersionCheck(container.model, StringType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, StringType, "parameterType", false);
        }
        /**
         * Creates and returns a new StringType instance in the SDK and on the server.
         * The new StringType will be automatically stored in the 'parameterType' property
         * of the parent importmappings.ImportMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.16.0 and higher
         */
        static createInImportMappingUnderParameterType(container) {
            internal.createInVersionCheck(container.model, StringType.structureTypeName, { start: "7.16.0" });
            return internal.instancehelpers.createElement(container, StringType, "parameterType", false);
        }
        /**
         * Creates and returns a new StringType instance in the SDK and on the server.
         * The new StringType will be automatically stored in the 'type' property
         * of the parent mappings.ValueMappingElement element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInValueMappingElementUnderType(container) {
            internal.createInVersionCheck(container.model, StringType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, StringType, "type", false);
        }
        /**
         * Creates and returns a new StringType instance in the SDK and on the server.
         * The new StringType will be automatically stored in the 'variableType' property
         * of the parent microflows.CreateVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInCreateVariableActionUnderVariableType(container) {
            internal.createInVersionCheck(container.model, StringType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, StringType, "variableType", false);
        }
        /**
         * Creates and returns a new StringType instance in the SDK and on the server.
         * The new StringType will be automatically stored in the 'parameterType' property
         * of the parent microflows.MLModelCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.10.0 to 9.17.0
         */
        static createInMLModelCallParameterMappingUnderParameterType(container) {
            internal.createInVersionCheck(container.model, StringType.structureTypeName, { start: "9.10.0", end: "9.17.0" });
            return internal.instancehelpers.createElement(container, StringType, "parameterType", false);
        }
        /**
         * Creates and returns a new StringType instance in the SDK and on the server.
         * The new StringType will be automatically stored in the 'microflowReturnType' property
         * of the parent microflows.MicroflowBase element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowBaseUnderMicroflowReturnType(container) {
            internal.createInVersionCheck(container.model, StringType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, StringType, "microflowReturnType", false);
        }
        /**
         * Creates and returns a new StringType instance in the SDK and on the server.
         * The new StringType will be automatically stored in the 'parameterType' property
         * of the parent microflows.MicroflowParameterBase element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowParameterBaseUnderParameterType(container) {
            internal.createInVersionCheck(container.model, StringType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, StringType, "parameterType", false);
        }
        /**
         * Creates and returns a new StringType instance in the SDK and on the server.
         * The new StringType will be automatically stored in the 'variableType' property
         * of the parent microflows.MicroflowParameterObject element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowParameterObjectUnderVariableType(container) {
            internal.createInVersionCheck(container.model, StringType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, StringType, "variableType", false);
        }
        /**
         * Creates and returns a new StringType instance in the SDK and on the server.
         * The new StringType will be automatically stored in the 'variableType' property
         * of the parent microflows.ResultHandling element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInResultHandlingUnderVariableType(container) {
            internal.createInVersionCheck(container.model, StringType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, StringType, "variableType", false);
        }
        /**
         * Creates and returns a new StringType instance in the SDK and on the server.
         * The new StringType will be automatically stored in the 'parameterType' property
         * of the parent pages.PageParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.4.0 and higher
         */
        static createInPageParameterUnderParameterType(container) {
            internal.createInVersionCheck(container.model, StringType.structureTypeName, { start: "9.4.0" });
            return internal.instancehelpers.createElement(container, StringType, "parameterType", false);
        }
        /**
         * Creates and returns a new StringType instance in the SDK and on the server.
         * The new StringType will be automatically stored in the 'type' property
         * of the parent rest.RestOperationParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.17.0 and higher
         */
        static createInRestOperationParameterUnderType(container) {
            internal.createInVersionCheck(container.model, StringType.structureTypeName, { start: "7.17.0" });
            return internal.instancehelpers.createElement(container, StringType, "type", false);
        }
        /**
         * Creates and returns a new StringType instance in the SDK and on the server.
         * The new StringType will be automatically stored in the 'operationReturnType' property
         * of the parent webservices.PublishedOperation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInPublishedOperationUnderOperationReturnType(container) {
            internal.createInVersionCheck(container.model, StringType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, StringType, "operationReturnType", false);
        }
        /**
         * Creates and returns a new StringType instance in the SDK and on the server.
         * The new StringType will be automatically stored in the 'parameterType' property
         * of the parent webservices.PublishedParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInPublishedParameterUnderParameterType(container) {
            internal.createInVersionCheck(container.model, StringType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, StringType, "parameterType", false);
        }
        /**
         * Creates and returns a new StringType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, StringType);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    StringType.structureTypeName = "DataTypes$StringType";
    StringType.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.9.0",
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    datatypes.StringType = StringType;
    /**
     * In version 7.9.0: introduced
     */
    class UnknownType extends DataType {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new UnknownType() cannot be invoked directly, please use 'model.datatypes.createUnknownType()'");
            }
        }
        get containerAsAppServiceAction() {
            return super.getContainerAs(appservices_1.appservices.AppServiceAction);
        }
        get containerAsAppServiceActionParameter() {
            return super.getContainerAs(appservices_1.appservices.AppServiceActionParameter);
        }
        get containerAsConstant() {
            return super.getContainerAs(constants_1.constants.Constant);
        }
        get containerAsDataSetColumn() {
            return super.getContainerAs(datasets_1.datasets.DataSetColumn);
        }
        get containerAsDataSetParameter() {
            return super.getContainerAs(datasets_1.datasets.DataSetParameter);
        }
        get containerAsDocumentTemplateParameter() {
            return super.getContainerAs(documenttemplates_1.documenttemplates.DocumentTemplateParameter);
        }
        get containerAsImportMapping() {
            return super.getContainerAs(importmappings_1.importmappings.ImportMapping);
        }
        get containerAsValueMappingElement() {
            return super.getContainerAs(mappings_1.mappings.ValueMappingElement);
        }
        get containerAsCreateVariableAction() {
            return super.getContainerAs(microflows_1.microflows.CreateVariableAction);
        }
        get containerAsMLModelCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.MLModelCallParameterMapping);
        }
        get containerAsMicroflowBase() {
            return super.getContainerAs(microflows_1.microflows.MicroflowBase);
        }
        get containerAsMicroflowParameterBase() {
            return super.getContainerAs(microflows_1.microflows.MicroflowParameterBase);
        }
        get containerAsMicroflowParameterObject() {
            return super.getContainerAs(microflows_1.microflows.MicroflowParameterObject);
        }
        get containerAsResultHandling() {
            return super.getContainerAs(microflows_1.microflows.ResultHandling);
        }
        get containerAsPageParameter() {
            return super.getContainerAs(pages_1.pages.PageParameter);
        }
        get containerAsRestOperationParameter() {
            return super.getContainerAs(rest_1.rest.RestOperationParameter);
        }
        get containerAsPublishedOperation() {
            return super.getContainerAs(webservices_1.webservices.PublishedOperation);
        }
        get containerAsPublishedParameter() {
            return super.getContainerAs(webservices_1.webservices.PublishedParameter);
        }
        /**
         * Creates and returns a new UnknownType instance in the SDK and on the server.
         * The new UnknownType will be automatically stored in the 'actionReturnType' property
         * of the parent appservices.AppServiceAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceActionUnderActionReturnType(container) {
            internal.createInVersionCheck(container.model, UnknownType.structureTypeName, { start: "7.9.0", end: "9.0.1" });
            return internal.instancehelpers.createElement(container, UnknownType, "actionReturnType", false);
        }
        /**
         * Creates and returns a new UnknownType instance in the SDK and on the server.
         * The new UnknownType will be automatically stored in the 'parameterType' property
         * of the parent appservices.AppServiceActionParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceActionParameterUnderParameterType(container) {
            internal.createInVersionCheck(container.model, UnknownType.structureTypeName, { start: "7.9.0", end: "9.0.1" });
            return internal.instancehelpers.createElement(container, UnknownType, "parameterType", false);
        }
        /**
         * Creates and returns a new UnknownType instance in the SDK and on the server.
         * The new UnknownType will be automatically stored in the 'type' property
         * of the parent constants.Constant element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInConstantUnderType(container) {
            internal.createInVersionCheck(container.model, UnknownType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, UnknownType, "type", false);
        }
        /**
         * Creates and returns a new UnknownType instance in the SDK and on the server.
         * The new UnknownType will be automatically stored in the 'columnType' property
         * of the parent datasets.DataSetColumn element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDataSetColumnUnderColumnType(container) {
            internal.createInVersionCheck(container.model, UnknownType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, UnknownType, "columnType", false);
        }
        /**
         * Creates and returns a new UnknownType instance in the SDK and on the server.
         * The new UnknownType will be automatically stored in the 'parameterType' property
         * of the parent datasets.DataSetParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDataSetParameterUnderParameterType(container) {
            internal.createInVersionCheck(container.model, UnknownType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, UnknownType, "parameterType", false);
        }
        /**
         * Creates and returns a new UnknownType instance in the SDK and on the server.
         * The new UnknownType will be automatically stored in the 'parameterType' property
         * of the parent documenttemplates.DocumentTemplateParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDocumentTemplateParameterUnderParameterType(container) {
            internal.createInVersionCheck(container.model, UnknownType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, UnknownType, "parameterType", false);
        }
        /**
         * Creates and returns a new UnknownType instance in the SDK and on the server.
         * The new UnknownType will be automatically stored in the 'parameterType' property
         * of the parent importmappings.ImportMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.16.0 and higher
         */
        static createInImportMappingUnderParameterType(container) {
            internal.createInVersionCheck(container.model, UnknownType.structureTypeName, { start: "7.16.0" });
            return internal.instancehelpers.createElement(container, UnknownType, "parameterType", false);
        }
        /**
         * Creates and returns a new UnknownType instance in the SDK and on the server.
         * The new UnknownType will be automatically stored in the 'type' property
         * of the parent mappings.ValueMappingElement element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInValueMappingElementUnderType(container) {
            internal.createInVersionCheck(container.model, UnknownType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, UnknownType, "type", false);
        }
        /**
         * Creates and returns a new UnknownType instance in the SDK and on the server.
         * The new UnknownType will be automatically stored in the 'variableType' property
         * of the parent microflows.CreateVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInCreateVariableActionUnderVariableType(container) {
            internal.createInVersionCheck(container.model, UnknownType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, UnknownType, "variableType", false);
        }
        /**
         * Creates and returns a new UnknownType instance in the SDK and on the server.
         * The new UnknownType will be automatically stored in the 'parameterType' property
         * of the parent microflows.MLModelCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.10.0 to 9.17.0
         */
        static createInMLModelCallParameterMappingUnderParameterType(container) {
            internal.createInVersionCheck(container.model, UnknownType.structureTypeName, { start: "9.10.0", end: "9.17.0" });
            return internal.instancehelpers.createElement(container, UnknownType, "parameterType", false);
        }
        /**
         * Creates and returns a new UnknownType instance in the SDK and on the server.
         * The new UnknownType will be automatically stored in the 'microflowReturnType' property
         * of the parent microflows.MicroflowBase element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowBaseUnderMicroflowReturnType(container) {
            internal.createInVersionCheck(container.model, UnknownType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, UnknownType, "microflowReturnType", false);
        }
        /**
         * Creates and returns a new UnknownType instance in the SDK and on the server.
         * The new UnknownType will be automatically stored in the 'parameterType' property
         * of the parent microflows.MicroflowParameterBase element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowParameterBaseUnderParameterType(container) {
            internal.createInVersionCheck(container.model, UnknownType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, UnknownType, "parameterType", false);
        }
        /**
         * Creates and returns a new UnknownType instance in the SDK and on the server.
         * The new UnknownType will be automatically stored in the 'variableType' property
         * of the parent microflows.MicroflowParameterObject element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowParameterObjectUnderVariableType(container) {
            internal.createInVersionCheck(container.model, UnknownType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, UnknownType, "variableType", false);
        }
        /**
         * Creates and returns a new UnknownType instance in the SDK and on the server.
         * The new UnknownType will be automatically stored in the 'variableType' property
         * of the parent microflows.ResultHandling element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInResultHandlingUnderVariableType(container) {
            internal.createInVersionCheck(container.model, UnknownType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, UnknownType, "variableType", false);
        }
        /**
         * Creates and returns a new UnknownType instance in the SDK and on the server.
         * The new UnknownType will be automatically stored in the 'parameterType' property
         * of the parent pages.PageParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.4.0 and higher
         */
        static createInPageParameterUnderParameterType(container) {
            internal.createInVersionCheck(container.model, UnknownType.structureTypeName, { start: "9.4.0" });
            return internal.instancehelpers.createElement(container, UnknownType, "parameterType", false);
        }
        /**
         * Creates and returns a new UnknownType instance in the SDK and on the server.
         * The new UnknownType will be automatically stored in the 'type' property
         * of the parent rest.RestOperationParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.17.0 and higher
         */
        static createInRestOperationParameterUnderType(container) {
            internal.createInVersionCheck(container.model, UnknownType.structureTypeName, { start: "7.17.0" });
            return internal.instancehelpers.createElement(container, UnknownType, "type", false);
        }
        /**
         * Creates and returns a new UnknownType instance in the SDK and on the server.
         * The new UnknownType will be automatically stored in the 'operationReturnType' property
         * of the parent webservices.PublishedOperation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInPublishedOperationUnderOperationReturnType(container) {
            internal.createInVersionCheck(container.model, UnknownType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, UnknownType, "operationReturnType", false);
        }
        /**
         * Creates and returns a new UnknownType instance in the SDK and on the server.
         * The new UnknownType will be automatically stored in the 'parameterType' property
         * of the parent webservices.PublishedParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInPublishedParameterUnderParameterType(container) {
            internal.createInVersionCheck(container.model, UnknownType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, UnknownType, "parameterType", false);
        }
        /**
         * Creates and returns a new UnknownType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, UnknownType);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    UnknownType.structureTypeName = "DataTypes$UnknownType";
    UnknownType.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.9.0",
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    datatypes.UnknownType = UnknownType;
    /**
     * In version 7.9.0: introduced
     */
    class VoidType extends DataType {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new VoidType() cannot be invoked directly, please use 'model.datatypes.createVoidType()'");
            }
        }
        get containerAsAppServiceAction() {
            return super.getContainerAs(appservices_1.appservices.AppServiceAction);
        }
        get containerAsAppServiceActionParameter() {
            return super.getContainerAs(appservices_1.appservices.AppServiceActionParameter);
        }
        get containerAsConstant() {
            return super.getContainerAs(constants_1.constants.Constant);
        }
        get containerAsDataSetColumn() {
            return super.getContainerAs(datasets_1.datasets.DataSetColumn);
        }
        get containerAsDataSetParameter() {
            return super.getContainerAs(datasets_1.datasets.DataSetParameter);
        }
        get containerAsDocumentTemplateParameter() {
            return super.getContainerAs(documenttemplates_1.documenttemplates.DocumentTemplateParameter);
        }
        get containerAsImportMapping() {
            return super.getContainerAs(importmappings_1.importmappings.ImportMapping);
        }
        get containerAsValueMappingElement() {
            return super.getContainerAs(mappings_1.mappings.ValueMappingElement);
        }
        get containerAsCreateVariableAction() {
            return super.getContainerAs(microflows_1.microflows.CreateVariableAction);
        }
        get containerAsMLModelCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.MLModelCallParameterMapping);
        }
        get containerAsMicroflowBase() {
            return super.getContainerAs(microflows_1.microflows.MicroflowBase);
        }
        get containerAsMicroflowParameterBase() {
            return super.getContainerAs(microflows_1.microflows.MicroflowParameterBase);
        }
        get containerAsMicroflowParameterObject() {
            return super.getContainerAs(microflows_1.microflows.MicroflowParameterObject);
        }
        get containerAsResultHandling() {
            return super.getContainerAs(microflows_1.microflows.ResultHandling);
        }
        get containerAsPageParameter() {
            return super.getContainerAs(pages_1.pages.PageParameter);
        }
        get containerAsRestOperationParameter() {
            return super.getContainerAs(rest_1.rest.RestOperationParameter);
        }
        get containerAsPublishedOperation() {
            return super.getContainerAs(webservices_1.webservices.PublishedOperation);
        }
        get containerAsPublishedParameter() {
            return super.getContainerAs(webservices_1.webservices.PublishedParameter);
        }
        /**
         * Creates and returns a new VoidType instance in the SDK and on the server.
         * The new VoidType will be automatically stored in the 'actionReturnType' property
         * of the parent appservices.AppServiceAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceActionUnderActionReturnType(container) {
            internal.createInVersionCheck(container.model, VoidType.structureTypeName, { start: "7.9.0", end: "9.0.1" });
            return internal.instancehelpers.createElement(container, VoidType, "actionReturnType", false);
        }
        /**
         * Creates and returns a new VoidType instance in the SDK and on the server.
         * The new VoidType will be automatically stored in the 'parameterType' property
         * of the parent appservices.AppServiceActionParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceActionParameterUnderParameterType(container) {
            internal.createInVersionCheck(container.model, VoidType.structureTypeName, { start: "7.9.0", end: "9.0.1" });
            return internal.instancehelpers.createElement(container, VoidType, "parameterType", false);
        }
        /**
         * Creates and returns a new VoidType instance in the SDK and on the server.
         * The new VoidType will be automatically stored in the 'type' property
         * of the parent constants.Constant element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInConstantUnderType(container) {
            internal.createInVersionCheck(container.model, VoidType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, VoidType, "type", false);
        }
        /**
         * Creates and returns a new VoidType instance in the SDK and on the server.
         * The new VoidType will be automatically stored in the 'columnType' property
         * of the parent datasets.DataSetColumn element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDataSetColumnUnderColumnType(container) {
            internal.createInVersionCheck(container.model, VoidType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, VoidType, "columnType", false);
        }
        /**
         * Creates and returns a new VoidType instance in the SDK and on the server.
         * The new VoidType will be automatically stored in the 'parameterType' property
         * of the parent datasets.DataSetParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDataSetParameterUnderParameterType(container) {
            internal.createInVersionCheck(container.model, VoidType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, VoidType, "parameterType", false);
        }
        /**
         * Creates and returns a new VoidType instance in the SDK and on the server.
         * The new VoidType will be automatically stored in the 'parameterType' property
         * of the parent documenttemplates.DocumentTemplateParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDocumentTemplateParameterUnderParameterType(container) {
            internal.createInVersionCheck(container.model, VoidType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, VoidType, "parameterType", false);
        }
        /**
         * Creates and returns a new VoidType instance in the SDK and on the server.
         * The new VoidType will be automatically stored in the 'parameterType' property
         * of the parent importmappings.ImportMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.16.0 and higher
         */
        static createInImportMappingUnderParameterType(container) {
            internal.createInVersionCheck(container.model, VoidType.structureTypeName, { start: "7.16.0" });
            return internal.instancehelpers.createElement(container, VoidType, "parameterType", false);
        }
        /**
         * Creates and returns a new VoidType instance in the SDK and on the server.
         * The new VoidType will be automatically stored in the 'type' property
         * of the parent mappings.ValueMappingElement element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInValueMappingElementUnderType(container) {
            internal.createInVersionCheck(container.model, VoidType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, VoidType, "type", false);
        }
        /**
         * Creates and returns a new VoidType instance in the SDK and on the server.
         * The new VoidType will be automatically stored in the 'variableType' property
         * of the parent microflows.CreateVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInCreateVariableActionUnderVariableType(container) {
            internal.createInVersionCheck(container.model, VoidType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, VoidType, "variableType", false);
        }
        /**
         * Creates and returns a new VoidType instance in the SDK and on the server.
         * The new VoidType will be automatically stored in the 'parameterType' property
         * of the parent microflows.MLModelCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.10.0 to 9.17.0
         */
        static createInMLModelCallParameterMappingUnderParameterType(container) {
            internal.createInVersionCheck(container.model, VoidType.structureTypeName, { start: "9.10.0", end: "9.17.0" });
            return internal.instancehelpers.createElement(container, VoidType, "parameterType", false);
        }
        /**
         * Creates and returns a new VoidType instance in the SDK and on the server.
         * The new VoidType will be automatically stored in the 'microflowReturnType' property
         * of the parent microflows.MicroflowBase element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowBaseUnderMicroflowReturnType(container) {
            internal.createInVersionCheck(container.model, VoidType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, VoidType, "microflowReturnType", false);
        }
        /**
         * Creates and returns a new VoidType instance in the SDK and on the server.
         * The new VoidType will be automatically stored in the 'parameterType' property
         * of the parent microflows.MicroflowParameterBase element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowParameterBaseUnderParameterType(container) {
            internal.createInVersionCheck(container.model, VoidType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, VoidType, "parameterType", false);
        }
        /**
         * Creates and returns a new VoidType instance in the SDK and on the server.
         * The new VoidType will be automatically stored in the 'variableType' property
         * of the parent microflows.MicroflowParameterObject element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowParameterObjectUnderVariableType(container) {
            internal.createInVersionCheck(container.model, VoidType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, VoidType, "variableType", false);
        }
        /**
         * Creates and returns a new VoidType instance in the SDK and on the server.
         * The new VoidType will be automatically stored in the 'variableType' property
         * of the parent microflows.ResultHandling element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInResultHandlingUnderVariableType(container) {
            internal.createInVersionCheck(container.model, VoidType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, VoidType, "variableType", false);
        }
        /**
         * Creates and returns a new VoidType instance in the SDK and on the server.
         * The new VoidType will be automatically stored in the 'parameterType' property
         * of the parent pages.PageParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.4.0 and higher
         */
        static createInPageParameterUnderParameterType(container) {
            internal.createInVersionCheck(container.model, VoidType.structureTypeName, { start: "9.4.0" });
            return internal.instancehelpers.createElement(container, VoidType, "parameterType", false);
        }
        /**
         * Creates and returns a new VoidType instance in the SDK and on the server.
         * The new VoidType will be automatically stored in the 'type' property
         * of the parent rest.RestOperationParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.17.0 and higher
         */
        static createInRestOperationParameterUnderType(container) {
            internal.createInVersionCheck(container.model, VoidType.structureTypeName, { start: "7.17.0" });
            return internal.instancehelpers.createElement(container, VoidType, "type", false);
        }
        /**
         * Creates and returns a new VoidType instance in the SDK and on the server.
         * The new VoidType will be automatically stored in the 'operationReturnType' property
         * of the parent webservices.PublishedOperation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInPublishedOperationUnderOperationReturnType(container) {
            internal.createInVersionCheck(container.model, VoidType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, VoidType, "operationReturnType", false);
        }
        /**
         * Creates and returns a new VoidType instance in the SDK and on the server.
         * The new VoidType will be automatically stored in the 'parameterType' property
         * of the parent webservices.PublishedParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInPublishedParameterUnderParameterType(container) {
            internal.createInVersionCheck(container.model, VoidType.structureTypeName, { start: "7.9.0" });
            return internal.instancehelpers.createElement(container, VoidType, "parameterType", false);
        }
        /**
         * Creates and returns a new VoidType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, VoidType);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    VoidType.structureTypeName = "DataTypes$VoidType";
    VoidType.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.9.0",
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    datatypes.VoidType = VoidType;
})(datatypes = exports.datatypes || (exports.datatypes = {}));
const appservices_1 = require("./appservices");
const constants_1 = require("./constants");
const datasets_1 = require("./datasets");
const documenttemplates_1 = require("./documenttemplates");
const importmappings_1 = require("./importmappings");
const mappings_1 = require("./mappings");
const microflows_1 = require("./microflows");
const pages_1 = require("./pages");
const rest_1 = require("./rest");
const webservices_1 = require("./webservices");
//# sourceMappingURL=datatypes.js.map