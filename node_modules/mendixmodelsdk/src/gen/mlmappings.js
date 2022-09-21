"use strict";
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.mlmappings = exports.StructureVersionInfo = void 0;
const internal = require("../sdk/internal");
exports.StructureVersionInfo = internal.StructureVersionInfo;
const projects_1 = require("./projects");
/**
 * @ignore
 */
var mlmappings;
(function (mlmappings) {
    class TensorType extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "mlmappings.TensorType";
        }
    }
    TensorType.UnsignedInteger8Tensor = new TensorType("UnsignedInteger8Tensor", {});
    TensorType.UnsignedInteger16Tensor = new TensorType("UnsignedInteger16Tensor", {});
    TensorType.Integer8Tensor = new TensorType("Integer8Tensor", {});
    TensorType.Integer16Tensor = new TensorType("Integer16Tensor", {});
    TensorType.Integer32Tensor = new TensorType("Integer32Tensor", {});
    TensorType.Integer64Tensor = new TensorType("Integer64Tensor", {});
    TensorType.Float16Tensor = new TensorType("Float16Tensor", {});
    TensorType.Float32Tensor = new TensorType("Float32Tensor", {});
    TensorType.Float64Tensor = new TensorType("Float64Tensor", {});
    TensorType.Complex64Tensor = new TensorType("Complex64Tensor", {});
    TensorType.Complex128Tensor = new TensorType("Complex128Tensor", {});
    TensorType.StringTensor = new TensorType("StringTensor", {});
    TensorType.BooleanTensor = new TensorType("BooleanTensor", {});
    TensorType.UnknownTensor = new TensorType("UnknownTensor", {});
    mlmappings.TensorType = TensorType;
    /**
     * See: {@link https://docs.mendix.com/refguide/ml-mapping-documents relevant section in reference guide}
     *
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.17.0: introduced
     */
    class MLMappingDocument extends projects_1.projects.Document {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            /** @internal */
            this.__mlModelFileName = new internal.PrimitiveProperty(MLMappingDocument, this, "mlModelFileName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__mlModelMappings = new internal.PartProperty(MLMappingDocument, this, "mlModelMappings", null, false);
            this._containmentName = "documents";
        }
        get containerAsFolderBase() {
            return super.getContainerAs(projects_1.projects.FolderBase);
        }
        get mlModelFileName() {
            return this.__mlModelFileName.get();
        }
        set mlModelFileName(newValue) {
            this.__mlModelFileName.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get mlModelMappings() {
            return this.__mlModelMappings.get();
        }
        set mlModelMappings(newValue) {
            this.__mlModelMappings.set(newValue);
        }
        /**
         * Creates a new MLMappingDocument unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container) {
            return internal.instancehelpers.createUnit(container, MLMappingDocument);
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
    MLMappingDocument.structureTypeName = "MLMappings$MLMappingDocument";
    MLMappingDocument.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.17.0",
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.ModelUnit);
    mlmappings.MLMappingDocument = MLMappingDocument;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.17.0: introduced
     */
    class MLModelEntityMappings extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__entity = new internal.ByNameReferenceProperty(MLModelEntityMappings, this, "entity", null, "DomainModels$Entity");
            /** @internal */
            this.__mappings = new internal.PartListProperty(MLModelEntityMappings, this, "mappings", []);
            if (arguments.length < 4) {
                throw new Error("new MLModelEntityMappings() cannot be invoked directly, please use 'model.mlmappings.createMLModelEntityMappings()'");
            }
        }
        get containerAsMLModelMappings() {
            return super.getContainerAs(MLModelMappings);
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
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get mappings() {
            return this.__mappings.get();
        }
        /**
         * Creates and returns a new MLModelEntityMappings instance in the SDK and on the server.
         * The new MLModelEntityMappings will be automatically stored in the 'input' property
         * of the parent MLModelMappings element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.17.0 and higher
         */
        static createInMLModelMappingsUnderInput(container) {
            internal.createInVersionCheck(container.model, MLModelEntityMappings.structureTypeName, { start: "9.17.0" });
            return internal.instancehelpers.createElement(container, MLModelEntityMappings, "input", false);
        }
        /**
         * Creates and returns a new MLModelEntityMappings instance in the SDK and on the server.
         * The new MLModelEntityMappings will be automatically stored in the 'output' property
         * of the parent MLModelMappings element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.17.0 and higher
         */
        static createInMLModelMappingsUnderOutput(container) {
            internal.createInVersionCheck(container.model, MLModelEntityMappings.structureTypeName, { start: "9.17.0" });
            return internal.instancehelpers.createElement(container, MLModelEntityMappings, "output", false);
        }
        /**
         * Creates and returns a new MLModelEntityMappings instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, MLModelEntityMappings);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    MLModelEntityMappings.structureTypeName = "MLMappings$MLModelEntityMappings";
    MLModelEntityMappings.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.17.0",
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    mlmappings.MLModelEntityMappings = MLModelEntityMappings;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.17.0: introduced
     */
    class MLModelMappings extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__input = new internal.PartProperty(MLModelMappings, this, "input", null, false);
            /** @internal */
            this.__output = new internal.PartProperty(MLModelMappings, this, "output", null, false);
            if (arguments.length < 4) {
                throw new Error("new MLModelMappings() cannot be invoked directly, please use 'model.mlmappings.createMLModelMappings()'");
            }
        }
        get containerAsMLMappingDocument() {
            return super.getContainerAs(MLMappingDocument);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get input() {
            return this.__input.get();
        }
        set input(newValue) {
            this.__input.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get output() {
            return this.__output.get();
        }
        set output(newValue) {
            this.__output.set(newValue);
        }
        /**
         * Creates and returns a new MLModelMappings instance in the SDK and on the server.
         * The new MLModelMappings will be automatically stored in the 'mlModelMappings' property
         * of the parent MLMappingDocument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.17.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, MLModelMappings.structureTypeName, { start: "9.17.0" });
            return internal.instancehelpers.createElement(container, MLModelMappings, "mlModelMappings", false);
        }
        /**
         * Creates and returns a new MLModelMappings instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, MLModelMappings);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    MLModelMappings.structureTypeName = "MLMappings$MLModelMappings";
    MLModelMappings.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.17.0",
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    mlmappings.MLModelMappings = MLModelMappings;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.17.0: introduced
     */
    class TensorDimension extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__dimension = new internal.PrimitiveProperty(TensorDimension, this, "dimension", -1, internal.PrimitiveTypeEnum.Integer);
            if (arguments.length < 4) {
                throw new Error("new TensorDimension() cannot be invoked directly, please use 'model.mlmappings.createTensorDimension()'");
            }
        }
        get containerAsTensorMappingElement() {
            return super.getContainerAs(TensorMappingElement);
        }
        get dimension() {
            return this.__dimension.get();
        }
        set dimension(newValue) {
            this.__dimension.set(newValue);
        }
        /**
         * Creates and returns a new TensorDimension instance in the SDK and on the server.
         * The new TensorDimension will be automatically stored in the 'attributeShape' property
         * of the parent TensorMappingElement element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.17.0 and higher
         */
        static createInTensorMappingElementUnderAttributeShape(container) {
            internal.createInVersionCheck(container.model, TensorDimension.structureTypeName, { start: "9.17.0" });
            return internal.instancehelpers.createElement(container, TensorDimension, "attributeShape", true);
        }
        /**
         * Creates and returns a new TensorDimension instance in the SDK and on the server.
         * The new TensorDimension will be automatically stored in the 'tensorShape' property
         * of the parent TensorMappingElement element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.17.0 and higher
         */
        static createInTensorMappingElementUnderTensorShape(container) {
            internal.createInVersionCheck(container.model, TensorDimension.structureTypeName, { start: "9.17.0" });
            return internal.instancehelpers.createElement(container, TensorDimension, "tensorShape", true);
        }
        /**
         * Creates and returns a new TensorDimension instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, TensorDimension);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.dimension = -1;
        }
    }
    TensorDimension.structureTypeName = "MLMappings$TensorDimension";
    TensorDimension.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.17.0",
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    mlmappings.TensorDimension = TensorDimension;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.17.0: introduced
     */
    class TensorMappingElement extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__tensorName = new internal.PrimitiveProperty(TensorMappingElement, this, "tensorName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__tensorType = new internal.EnumProperty(TensorMappingElement, this, "tensorType", TensorType.UnknownTensor, TensorType);
            /** @internal */
            this.__tensorShape = new internal.PartListProperty(TensorMappingElement, this, "tensorShape", []);
            /** @internal */
            this.__attributeName = new internal.PrimitiveProperty(TensorMappingElement, this, "attributeName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__attributeType = new internal.PartProperty(TensorMappingElement, this, "attributeType", null, false);
            /** @internal */
            this.__attributeShape = new internal.PartListProperty(TensorMappingElement, this, "attributeShape", []);
            if (arguments.length < 4) {
                throw new Error("new TensorMappingElement() cannot be invoked directly, please use 'model.mlmappings.createTensorMappingElement()'");
            }
        }
        get containerAsMLModelEntityMappings() {
            return super.getContainerAs(MLModelEntityMappings);
        }
        get tensorName() {
            return this.__tensorName.get();
        }
        set tensorName(newValue) {
            this.__tensorName.set(newValue);
        }
        get tensorType() {
            return this.__tensorType.get();
        }
        set tensorType(newValue) {
            this.__tensorType.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get tensorShape() {
            return this.__tensorShape.get();
        }
        get attributeName() {
            return this.__attributeName.get();
        }
        set attributeName(newValue) {
            this.__attributeName.set(newValue);
        }
        get attributeType() {
            return this.__attributeType.get();
        }
        set attributeType(newValue) {
            this.__attributeType.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get attributeShape() {
            return this.__attributeShape.get();
        }
        /**
         * Creates and returns a new TensorMappingElement instance in the SDK and on the server.
         * The new TensorMappingElement will be automatically stored in the 'mappings' property
         * of the parent MLModelEntityMappings element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.17.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, TensorMappingElement.structureTypeName, { start: "9.17.0" });
            return internal.instancehelpers.createElement(container, TensorMappingElement, "mappings", true);
        }
        /**
         * Creates and returns a new TensorMappingElement instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, TensorMappingElement);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.tensorType = TensorType.UnknownTensor;
        }
    }
    TensorMappingElement.structureTypeName = "MLMappings$TensorMappingElement";
    TensorMappingElement.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.17.0",
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    mlmappings.TensorMappingElement = TensorMappingElement;
})(mlmappings = exports.mlmappings || (exports.mlmappings = {}));
//# sourceMappingURL=mlmappings.js.map