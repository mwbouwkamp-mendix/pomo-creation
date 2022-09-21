"use strict";
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.javaactions = exports.StructureVersionInfo = void 0;
const internal = require("../sdk/internal");
exports.StructureVersionInfo = internal.StructureVersionInfo;
const codeactions_1 = require("./codeactions");
var javaactions;
(function (javaactions) {
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `JavaActions`.
     */
    /**
     * In version 7.21.0: deleted
     * In version 6.7.0: introduced
     */
    class ParameterType extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new ParameterType() cannot be invoked directly, please use 'model.javaactions.createParameterType()'");
            }
        }
        get containerAsJavaActionParameter() {
            return super.getContainerAs(JavaActionParameter);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ParameterType.structureTypeName = "JavaActions$ParameterType";
    ParameterType.versionInfo = new exports.StructureVersionInfo({
        introduced: "6.7.0",
        deleted: "7.21.0",
        deletionMessage: "Use CodeActions.ParameterType instead",
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    javaactions.ParameterType = ParameterType;
    /**
     * In version 7.21.0: deleted
     * In version 6.7.0: introduced
     */
    class BasicParameterType extends ParameterType {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__type = new internal.PartProperty(BasicParameterType, this, "type", null, true);
            if (arguments.length < 4) {
                throw new Error("new BasicParameterType() cannot be invoked directly, please use 'model.javaactions.createBasicParameterType()'");
            }
        }
        get containerAsJavaActionParameter() {
            return super.getContainerAs(JavaActionParameter);
        }
        get type() {
            return this.__type.get();
        }
        set type(newValue) {
            this.__type.set(newValue);
        }
        /**
         * Creates and returns a new BasicParameterType instance in the SDK and on the server.
         * The new BasicParameterType will be automatically stored in the 'parameterType' property
         * of the parent JavaActionParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.7.0 to 7.20.0
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, BasicParameterType.structureTypeName, { start: "6.7.0", end: "7.20.0" });
            return internal.instancehelpers.createElement(container, BasicParameterType, "parameterType", false);
        }
        /**
         * Creates and returns a new BasicParameterType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, BasicParameterType);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.type = StringType.create(this.model);
        }
    }
    BasicParameterType.structureTypeName = "JavaActions$BasicParameterType";
    BasicParameterType.versionInfo = new exports.StructureVersionInfo({
        introduced: "6.7.0",
        deleted: "7.21.0",
        deletionMessage: "Use CodeActions.BasicParameterType instead",
        properties: {
            type: {
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
    javaactions.BasicParameterType = BasicParameterType;
    /**
     * In version 7.21.0: deleted
     * In version 6.6.0: introduced
     */
    class Type extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new Type() cannot be invoked directly, please use 'model.javaactions.createType()'");
            }
        }
        get containerAsBasicParameterType() {
            return super.getContainerAs(BasicParameterType);
        }
        get containerAsJavaAction() {
            return super.getContainerAs(JavaAction);
        }
        get containerAsJavaActionParameter() {
            return super.getContainerAs(JavaActionParameter);
        }
        get containerAsListType() {
            return super.getContainerAs(ListType);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    Type.structureTypeName = "JavaActions$Type";
    Type.versionInfo = new exports.StructureVersionInfo({
        introduced: "6.6.0",
        deleted: "7.21.0",
        deletionMessage: "Use CodeActions.Type instead",
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    javaactions.Type = Type;
    /**
     * In version 7.21.0: deleted
     * In version 6.6.0: introduced
     */
    class PrimitiveType extends Type {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new PrimitiveType() cannot be invoked directly, please use 'model.javaactions.createPrimitiveType()'");
            }
        }
        get containerAsBasicParameterType() {
            return super.getContainerAs(BasicParameterType);
        }
        get containerAsJavaAction() {
            return super.getContainerAs(JavaAction);
        }
        get containerAsJavaActionParameter() {
            return super.getContainerAs(JavaActionParameter);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    PrimitiveType.structureTypeName = "JavaActions$PrimitiveType";
    PrimitiveType.versionInfo = new exports.StructureVersionInfo({
        introduced: "6.6.0",
        deleted: "7.21.0",
        deletionMessage: "Use CodeActions.PrimitiveType instead",
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    javaactions.PrimitiveType = PrimitiveType;
    /**
     * In version 7.21.0: deleted
     * In version 6.6.0: introduced
     */
    class BooleanType extends PrimitiveType {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new BooleanType() cannot be invoked directly, please use 'model.javaactions.createBooleanType()'");
            }
        }
        get containerAsBasicParameterType() {
            return super.getContainerAs(BasicParameterType);
        }
        get containerAsJavaAction() {
            return super.getContainerAs(JavaAction);
        }
        get containerAsJavaActionParameter() {
            return super.getContainerAs(JavaActionParameter);
        }
        /**
         * Creates and returns a new BooleanType instance in the SDK and on the server.
         * The new BooleanType will be automatically stored in the 'type' property
         * of the parent BasicParameterType element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.7.0 to 7.20.0
         */
        static createInBasicParameterTypeUnderType(container) {
            internal.createInVersionCheck(container.model, BooleanType.structureTypeName, { start: "6.7.0", end: "7.20.0" });
            return internal.instancehelpers.createElement(container, BooleanType, "type", false);
        }
        /**
         * Creates and returns a new BooleanType instance in the SDK and on the server.
         * The new BooleanType will be automatically stored in the 'javaReturnType' property
         * of the parent JavaAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 to 7.20.0
         */
        static createInJavaActionUnderJavaReturnType(container) {
            internal.createInVersionCheck(container.model, BooleanType.structureTypeName, { start: "6.6.0", end: "7.20.0" });
            return internal.instancehelpers.createElement(container, BooleanType, "javaReturnType", false);
        }
        /**
         * Creates and returns a new BooleanType instance in the SDK and on the server.
         * The new BooleanType will be automatically stored in the 'javaType' property
         * of the parent JavaActionParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 to 6.6.0
         */
        static createInJavaActionParameterUnderJavaType(container) {
            internal.createInVersionCheck(container.model, BooleanType.structureTypeName, { start: "6.6.0", end: "6.6.0" });
            return internal.instancehelpers.createElement(container, BooleanType, "javaType", false);
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
    BooleanType.structureTypeName = "JavaActions$BooleanType";
    BooleanType.versionInfo = new exports.StructureVersionInfo({
        introduced: "6.6.0",
        deleted: "7.21.0",
        deletionMessage: "Use CodeActions.BooleanType instead",
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    javaactions.BooleanType = BooleanType;
    /**
     * In version 7.21.0: deleted
     * In version 6.6.0: introduced
     */
    class EntityType extends Type {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new EntityType() cannot be invoked directly, please use 'model.javaactions.createEntityType()'");
            }
        }
        get containerAsBasicParameterType() {
            return super.getContainerAs(BasicParameterType);
        }
        get containerAsJavaAction() {
            return super.getContainerAs(JavaAction);
        }
        get containerAsJavaActionParameter() {
            return super.getContainerAs(JavaActionParameter);
        }
        get containerAsListType() {
            return super.getContainerAs(ListType);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    EntityType.structureTypeName = "JavaActions$EntityType";
    EntityType.versionInfo = new exports.StructureVersionInfo({
        introduced: "6.6.0",
        deleted: "7.21.0",
        deletionMessage: "Use CodeActions.EntityType instead",
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    javaactions.EntityType = EntityType;
    /**
     * In version 7.21.0: deleted
     * In version 6.6.0: introduced
     */
    class ConcreteEntityType extends EntityType {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__entity = new internal.ByNameReferenceProperty(ConcreteEntityType, this, "entity", null, "DomainModels$Entity");
            if (arguments.length < 4) {
                throw new Error("new ConcreteEntityType() cannot be invoked directly, please use 'model.javaactions.createConcreteEntityType()'");
            }
        }
        get containerAsBasicParameterType() {
            return super.getContainerAs(BasicParameterType);
        }
        get containerAsJavaAction() {
            return super.getContainerAs(JavaAction);
        }
        get containerAsJavaActionParameter() {
            return super.getContainerAs(JavaActionParameter);
        }
        get containerAsListType() {
            return super.getContainerAs(ListType);
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
         * Creates and returns a new ConcreteEntityType instance in the SDK and on the server.
         * The new ConcreteEntityType will be automatically stored in the 'type' property
         * of the parent BasicParameterType element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.7.0 to 7.20.0
         */
        static createInBasicParameterTypeUnderType(container) {
            internal.createInVersionCheck(container.model, ConcreteEntityType.structureTypeName, { start: "6.7.0", end: "7.20.0" });
            return internal.instancehelpers.createElement(container, ConcreteEntityType, "type", false);
        }
        /**
         * Creates and returns a new ConcreteEntityType instance in the SDK and on the server.
         * The new ConcreteEntityType will be automatically stored in the 'javaReturnType' property
         * of the parent JavaAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 to 7.20.0
         */
        static createInJavaActionUnderJavaReturnType(container) {
            internal.createInVersionCheck(container.model, ConcreteEntityType.structureTypeName, { start: "6.6.0", end: "7.20.0" });
            return internal.instancehelpers.createElement(container, ConcreteEntityType, "javaReturnType", false);
        }
        /**
         * Creates and returns a new ConcreteEntityType instance in the SDK and on the server.
         * The new ConcreteEntityType will be automatically stored in the 'javaType' property
         * of the parent JavaActionParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 to 6.6.0
         */
        static createInJavaActionParameterUnderJavaType(container) {
            internal.createInVersionCheck(container.model, ConcreteEntityType.structureTypeName, { start: "6.6.0", end: "6.6.0" });
            return internal.instancehelpers.createElement(container, ConcreteEntityType, "javaType", false);
        }
        /**
         * Creates and returns a new ConcreteEntityType instance in the SDK and on the server.
         * The new ConcreteEntityType will be automatically stored in the 'parameter' property
         * of the parent ListType element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 to 7.20.0
         */
        static createInListTypeUnderParameter(container) {
            internal.createInVersionCheck(container.model, ConcreteEntityType.structureTypeName, { start: "6.6.0", end: "7.20.0" });
            return internal.instancehelpers.createElement(container, ConcreteEntityType, "parameter", false);
        }
        /**
         * Creates and returns a new ConcreteEntityType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ConcreteEntityType);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ConcreteEntityType.structureTypeName = "JavaActions$ConcreteEntityType";
    ConcreteEntityType.versionInfo = new exports.StructureVersionInfo({
        introduced: "6.6.0",
        deleted: "7.21.0",
        deletionMessage: "Use CodeActions.ConcreteEntityType instead",
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
    javaactions.ConcreteEntityType = ConcreteEntityType;
    /**
     * In version 7.21.0: deleted
     * In version 6.6.0: introduced
     */
    class DateTimeType extends PrimitiveType {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new DateTimeType() cannot be invoked directly, please use 'model.javaactions.createDateTimeType()'");
            }
        }
        get containerAsBasicParameterType() {
            return super.getContainerAs(BasicParameterType);
        }
        get containerAsJavaAction() {
            return super.getContainerAs(JavaAction);
        }
        get containerAsJavaActionParameter() {
            return super.getContainerAs(JavaActionParameter);
        }
        /**
         * Creates and returns a new DateTimeType instance in the SDK and on the server.
         * The new DateTimeType will be automatically stored in the 'type' property
         * of the parent BasicParameterType element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.7.0 to 7.20.0
         */
        static createInBasicParameterTypeUnderType(container) {
            internal.createInVersionCheck(container.model, DateTimeType.structureTypeName, { start: "6.7.0", end: "7.20.0" });
            return internal.instancehelpers.createElement(container, DateTimeType, "type", false);
        }
        /**
         * Creates and returns a new DateTimeType instance in the SDK and on the server.
         * The new DateTimeType will be automatically stored in the 'javaReturnType' property
         * of the parent JavaAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 to 7.20.0
         */
        static createInJavaActionUnderJavaReturnType(container) {
            internal.createInVersionCheck(container.model, DateTimeType.structureTypeName, { start: "6.6.0", end: "7.20.0" });
            return internal.instancehelpers.createElement(container, DateTimeType, "javaReturnType", false);
        }
        /**
         * Creates and returns a new DateTimeType instance in the SDK and on the server.
         * The new DateTimeType will be automatically stored in the 'javaType' property
         * of the parent JavaActionParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 to 6.6.0
         */
        static createInJavaActionParameterUnderJavaType(container) {
            internal.createInVersionCheck(container.model, DateTimeType.structureTypeName, { start: "6.6.0", end: "6.6.0" });
            return internal.instancehelpers.createElement(container, DateTimeType, "javaType", false);
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
    DateTimeType.structureTypeName = "JavaActions$DateTimeType";
    DateTimeType.versionInfo = new exports.StructureVersionInfo({
        introduced: "6.6.0",
        deleted: "7.21.0",
        deletionMessage: "Use CodeActions.DateTimeType instead",
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    javaactions.DateTimeType = DateTimeType;
    /**
     * In version 7.21.0: deleted
     * In version 6.6.0: introduced
     */
    class DecimalType extends PrimitiveType {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new DecimalType() cannot be invoked directly, please use 'model.javaactions.createDecimalType()'");
            }
        }
        get containerAsBasicParameterType() {
            return super.getContainerAs(BasicParameterType);
        }
        get containerAsJavaAction() {
            return super.getContainerAs(JavaAction);
        }
        get containerAsJavaActionParameter() {
            return super.getContainerAs(JavaActionParameter);
        }
        /**
         * Creates and returns a new DecimalType instance in the SDK and on the server.
         * The new DecimalType will be automatically stored in the 'type' property
         * of the parent BasicParameterType element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.7.0 to 7.20.0
         */
        static createInBasicParameterTypeUnderType(container) {
            internal.createInVersionCheck(container.model, DecimalType.structureTypeName, { start: "6.7.0", end: "7.20.0" });
            return internal.instancehelpers.createElement(container, DecimalType, "type", false);
        }
        /**
         * Creates and returns a new DecimalType instance in the SDK and on the server.
         * The new DecimalType will be automatically stored in the 'javaReturnType' property
         * of the parent JavaAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 to 7.20.0
         */
        static createInJavaActionUnderJavaReturnType(container) {
            internal.createInVersionCheck(container.model, DecimalType.structureTypeName, { start: "6.6.0", end: "7.20.0" });
            return internal.instancehelpers.createElement(container, DecimalType, "javaReturnType", false);
        }
        /**
         * Creates and returns a new DecimalType instance in the SDK and on the server.
         * The new DecimalType will be automatically stored in the 'javaType' property
         * of the parent JavaActionParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 to 6.6.0
         */
        static createInJavaActionParameterUnderJavaType(container) {
            internal.createInVersionCheck(container.model, DecimalType.structureTypeName, { start: "6.6.0", end: "6.6.0" });
            return internal.instancehelpers.createElement(container, DecimalType, "javaType", false);
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
    DecimalType.structureTypeName = "JavaActions$DecimalType";
    DecimalType.versionInfo = new exports.StructureVersionInfo({
        introduced: "6.6.0",
        deleted: "7.21.0",
        deletionMessage: "Use CodeActions.DecimalType instead",
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    javaactions.DecimalType = DecimalType;
    /**
     * In version 7.21.0: deleted
     * In version 6.7.0: introduced
     */
    class EntityTypeParameterType extends ParameterType {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__typeParameter = new internal.ByIdReferenceProperty(EntityTypeParameterType, this, "typeParameter", null);
            if (arguments.length < 4) {
                throw new Error("new EntityTypeParameterType() cannot be invoked directly, please use 'model.javaactions.createEntityTypeParameterType()'");
            }
        }
        get containerAsJavaActionParameter() {
            return super.getContainerAs(JavaActionParameter);
        }
        get typeParameter() {
            return this.__typeParameter.get();
        }
        set typeParameter(newValue) {
            this.__typeParameter.set(newValue);
        }
        /**
         * Creates and returns a new EntityTypeParameterType instance in the SDK and on the server.
         * The new EntityTypeParameterType will be automatically stored in the 'parameterType' property
         * of the parent JavaActionParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.7.0 to 7.20.0
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, EntityTypeParameterType.structureTypeName, { start: "6.7.0", end: "7.20.0" });
            return internal.instancehelpers.createElement(container, EntityTypeParameterType, "parameterType", false);
        }
        /**
         * Creates and returns a new EntityTypeParameterType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, EntityTypeParameterType);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    EntityTypeParameterType.structureTypeName = "JavaActions$EntityTypeParameterType";
    EntityTypeParameterType.versionInfo = new exports.StructureVersionInfo({
        introduced: "6.7.0",
        deleted: "7.21.0",
        deletionMessage: "Use CodeActions.EntityTypeParameterType instead",
        properties: {
            typeParameter: {
                public: {
                    currentValue: true
                }
            }
        },
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    javaactions.EntityTypeParameterType = EntityTypeParameterType;
    /**
     * In version 7.21.0: deleted
     * In version 6.6.0: introduced
     */
    class EnumerationType extends Type {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__enumeration = new internal.ByNameReferenceProperty(EnumerationType, this, "enumeration", null, "Enumerations$Enumeration");
            if (arguments.length < 4) {
                throw new Error("new EnumerationType() cannot be invoked directly, please use 'model.javaactions.createEnumerationType()'");
            }
        }
        get containerAsBasicParameterType() {
            return super.getContainerAs(BasicParameterType);
        }
        get containerAsJavaAction() {
            return super.getContainerAs(JavaAction);
        }
        get containerAsJavaActionParameter() {
            return super.getContainerAs(JavaActionParameter);
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
         * The new EnumerationType will be automatically stored in the 'type' property
         * of the parent BasicParameterType element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.7.0 to 7.20.0
         */
        static createInBasicParameterTypeUnderType(container) {
            internal.createInVersionCheck(container.model, EnumerationType.structureTypeName, { start: "6.7.0", end: "7.20.0" });
            return internal.instancehelpers.createElement(container, EnumerationType, "type", false);
        }
        /**
         * Creates and returns a new EnumerationType instance in the SDK and on the server.
         * The new EnumerationType will be automatically stored in the 'javaReturnType' property
         * of the parent JavaAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 to 7.20.0
         */
        static createInJavaActionUnderJavaReturnType(container) {
            internal.createInVersionCheck(container.model, EnumerationType.structureTypeName, { start: "6.6.0", end: "7.20.0" });
            return internal.instancehelpers.createElement(container, EnumerationType, "javaReturnType", false);
        }
        /**
         * Creates and returns a new EnumerationType instance in the SDK and on the server.
         * The new EnumerationType will be automatically stored in the 'javaType' property
         * of the parent JavaActionParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 to 6.6.0
         */
        static createInJavaActionParameterUnderJavaType(container) {
            internal.createInVersionCheck(container.model, EnumerationType.structureTypeName, { start: "6.6.0", end: "6.6.0" });
            return internal.instancehelpers.createElement(container, EnumerationType, "javaType", false);
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
    EnumerationType.structureTypeName = "JavaActions$EnumerationType";
    EnumerationType.versionInfo = new exports.StructureVersionInfo({
        introduced: "6.6.0",
        deleted: "7.21.0",
        deletionMessage: "Use CodeActions.EnumerationType instead",
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
    javaactions.EnumerationType = EnumerationType;
    /**
     * In version 7.21.0: introduced
     */
    class ExportMappingJavaActionParameterType extends codeactions_1.codeactions.ParameterType {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new ExportMappingJavaActionParameterType() cannot be invoked directly, please use 'model.javaactions.createExportMappingJavaActionParameterType()'");
            }
        }
        get containerAsCodeActionParameter() {
            return super.getContainerAs(codeactions_1.codeactions.CodeActionParameter);
        }
        /**
         * Creates and returns a new ExportMappingJavaActionParameterType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ExportMappingJavaActionParameterType);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ExportMappingJavaActionParameterType.structureTypeName = "JavaActions$ExportMappingJavaActionParameterType";
    ExportMappingJavaActionParameterType.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.21.0",
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    javaactions.ExportMappingJavaActionParameterType = ExportMappingJavaActionParameterType;
    /**
     * In version 7.21.0: deleted
     * In version 7.2.0: introduced
     */
    class ExportMappingParameterType extends ParameterType {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new ExportMappingParameterType() cannot be invoked directly, please use 'model.javaactions.createExportMappingParameterType()'");
            }
        }
        get containerAsJavaActionParameter() {
            return super.getContainerAs(JavaActionParameter);
        }
        /**
         * Creates and returns a new ExportMappingParameterType instance in the SDK and on the server.
         * The new ExportMappingParameterType will be automatically stored in the 'parameterType' property
         * of the parent JavaActionParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.2.0 to 7.20.0
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, ExportMappingParameterType.structureTypeName, { start: "7.2.0", end: "7.20.0" });
            return internal.instancehelpers.createElement(container, ExportMappingParameterType, "parameterType", false);
        }
        /**
         * Creates and returns a new ExportMappingParameterType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ExportMappingParameterType);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ExportMappingParameterType.structureTypeName = "JavaActions$ExportMappingParameterType";
    ExportMappingParameterType.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.2.0",
        deleted: "7.21.0",
        deletionMessage: "Use ImportMappingJavaActionParameterType instead",
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    javaactions.ExportMappingParameterType = ExportMappingParameterType;
    /**
     * In version 7.21.0: deleted
     * In version 6.6.0: introduced
     */
    class FloatType extends PrimitiveType {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new FloatType() cannot be invoked directly, please use 'model.javaactions.createFloatType()'");
            }
        }
        get containerAsBasicParameterType() {
            return super.getContainerAs(BasicParameterType);
        }
        get containerAsJavaAction() {
            return super.getContainerAs(JavaAction);
        }
        get containerAsJavaActionParameter() {
            return super.getContainerAs(JavaActionParameter);
        }
        /**
         * Creates and returns a new FloatType instance in the SDK and on the server.
         * The new FloatType will be automatically stored in the 'type' property
         * of the parent BasicParameterType element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.7.0 to 7.20.0
         */
        static createInBasicParameterTypeUnderType(container) {
            internal.createInVersionCheck(container.model, FloatType.structureTypeName, { start: "6.7.0", end: "7.20.0" });
            return internal.instancehelpers.createElement(container, FloatType, "type", false);
        }
        /**
         * Creates and returns a new FloatType instance in the SDK and on the server.
         * The new FloatType will be automatically stored in the 'javaReturnType' property
         * of the parent JavaAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 to 7.20.0
         */
        static createInJavaActionUnderJavaReturnType(container) {
            internal.createInVersionCheck(container.model, FloatType.structureTypeName, { start: "6.6.0", end: "7.20.0" });
            return internal.instancehelpers.createElement(container, FloatType, "javaReturnType", false);
        }
        /**
         * Creates and returns a new FloatType instance in the SDK and on the server.
         * The new FloatType will be automatically stored in the 'javaType' property
         * of the parent JavaActionParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 to 6.6.0
         */
        static createInJavaActionParameterUnderJavaType(container) {
            internal.createInVersionCheck(container.model, FloatType.structureTypeName, { start: "6.6.0", end: "6.6.0" });
            return internal.instancehelpers.createElement(container, FloatType, "javaType", false);
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
    FloatType.structureTypeName = "JavaActions$FloatType";
    FloatType.versionInfo = new exports.StructureVersionInfo({
        introduced: "6.6.0",
        deleted: "7.21.0",
        deletionMessage: "Use CodeActions.FloatType instead",
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    javaactions.FloatType = FloatType;
    /**
     * In version 7.21.0: introduced
     */
    class ImportMappingJavaActionParameterType extends codeactions_1.codeactions.ParameterType {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new ImportMappingJavaActionParameterType() cannot be invoked directly, please use 'model.javaactions.createImportMappingJavaActionParameterType()'");
            }
        }
        get containerAsCodeActionParameter() {
            return super.getContainerAs(codeactions_1.codeactions.CodeActionParameter);
        }
        /**
         * Creates and returns a new ImportMappingJavaActionParameterType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ImportMappingJavaActionParameterType);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ImportMappingJavaActionParameterType.structureTypeName = "JavaActions$ImportMappingJavaActionParameterType";
    ImportMappingJavaActionParameterType.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.21.0",
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    javaactions.ImportMappingJavaActionParameterType = ImportMappingJavaActionParameterType;
    /**
     * In version 7.21.0: deleted
     * In version 7.2.0: introduced
     */
    class ImportMappingParameterType extends ParameterType {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new ImportMappingParameterType() cannot be invoked directly, please use 'model.javaactions.createImportMappingParameterType()'");
            }
        }
        get containerAsJavaActionParameter() {
            return super.getContainerAs(JavaActionParameter);
        }
        /**
         * Creates and returns a new ImportMappingParameterType instance in the SDK and on the server.
         * The new ImportMappingParameterType will be automatically stored in the 'parameterType' property
         * of the parent JavaActionParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.2.0 to 7.20.0
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, ImportMappingParameterType.structureTypeName, { start: "7.2.0", end: "7.20.0" });
            return internal.instancehelpers.createElement(container, ImportMappingParameterType, "parameterType", false);
        }
        /**
         * Creates and returns a new ImportMappingParameterType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ImportMappingParameterType);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ImportMappingParameterType.structureTypeName = "JavaActions$ImportMappingParameterType";
    ImportMappingParameterType.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.2.0",
        deleted: "7.21.0",
        deletionMessage: "Use ImportMappingJavaActionParameterType instead",
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    javaactions.ImportMappingParameterType = ImportMappingParameterType;
    /**
     * In version 7.21.0: deleted
     * In version 6.6.0: introduced
     */
    class IntegerType extends PrimitiveType {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new IntegerType() cannot be invoked directly, please use 'model.javaactions.createIntegerType()'");
            }
        }
        get containerAsBasicParameterType() {
            return super.getContainerAs(BasicParameterType);
        }
        get containerAsJavaAction() {
            return super.getContainerAs(JavaAction);
        }
        get containerAsJavaActionParameter() {
            return super.getContainerAs(JavaActionParameter);
        }
        /**
         * Creates and returns a new IntegerType instance in the SDK and on the server.
         * The new IntegerType will be automatically stored in the 'type' property
         * of the parent BasicParameterType element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.7.0 to 7.20.0
         */
        static createInBasicParameterTypeUnderType(container) {
            internal.createInVersionCheck(container.model, IntegerType.structureTypeName, { start: "6.7.0", end: "7.20.0" });
            return internal.instancehelpers.createElement(container, IntegerType, "type", false);
        }
        /**
         * Creates and returns a new IntegerType instance in the SDK and on the server.
         * The new IntegerType will be automatically stored in the 'javaReturnType' property
         * of the parent JavaAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 to 7.20.0
         */
        static createInJavaActionUnderJavaReturnType(container) {
            internal.createInVersionCheck(container.model, IntegerType.structureTypeName, { start: "6.6.0", end: "7.20.0" });
            return internal.instancehelpers.createElement(container, IntegerType, "javaReturnType", false);
        }
        /**
         * Creates and returns a new IntegerType instance in the SDK and on the server.
         * The new IntegerType will be automatically stored in the 'javaType' property
         * of the parent JavaActionParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 to 6.6.0
         */
        static createInJavaActionParameterUnderJavaType(container) {
            internal.createInVersionCheck(container.model, IntegerType.structureTypeName, { start: "6.6.0", end: "6.6.0" });
            return internal.instancehelpers.createElement(container, IntegerType, "javaType", false);
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
    IntegerType.structureTypeName = "JavaActions$IntegerType";
    IntegerType.versionInfo = new exports.StructureVersionInfo({
        introduced: "6.6.0",
        deleted: "7.21.0",
        deletionMessage: "Use CodeActions.IntegerType instead",
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    javaactions.IntegerType = IntegerType;
    /**
     * See: {@link https://docs.mendix.com/refguide/java-actions relevant section in reference guide}
     */
    class JavaAction extends codeactions_1.codeactions.CodeAction {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            /** @internal */
            this.__typeParameters = new internal.PartListProperty(JavaAction, this, "typeParameters", []);
            /** @internal */
            this.__parameters = new internal.PartListProperty(JavaAction, this, "parameters", []);
            /** @internal */
            this.__returnType = new internal.PrimitiveProperty(JavaAction, this, "returnType", "Boolean", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__javaReturnType = new internal.PartProperty(JavaAction, this, "javaReturnType", null, true);
            /** @internal */
            this.__microflowActionInfo = new internal.PartProperty(JavaAction, this, "microflowActionInfo", null, false);
            /** @internal */
            this.__useLegacyCodeGeneration = new internal.PrimitiveProperty(JavaAction, this, "useLegacyCodeGeneration", false, internal.PrimitiveTypeEnum.Boolean);
            this._containmentName = "documents";
        }
        get containerAsFolderBase() {
            return super.getContainerAs(projects_1.projects.FolderBase);
        }
        /**
         * In version 7.21.0: deleted
         * In version 6.6.0: introduced
         */
        get typeParameters() {
            return this.__typeParameters.get();
        }
        /**
         * In version 7.21.0: deleted
         */
        get parameters() {
            return this.__parameters.get();
        }
        /**
         * The value of this property is conceptually of type dataTypes.LegacyDataType.
         *
         * In version 6.6.0: deleted
         */
        get returnType() {
            return this.__returnType.get();
        }
        set returnType(newValue) {
            this.__returnType.set(newValue);
        }
        /**
         * In version 7.21.0: deleted
         * In version 6.6.0: introduced
         */
        get javaReturnType() {
            return this.__javaReturnType.get();
        }
        set javaReturnType(newValue) {
            this.__javaReturnType.set(newValue);
        }
        /**
         * In version 7.21.0: deleted
         * In version 6.6.0: introduced
         */
        get microflowActionInfo() {
            return this.__microflowActionInfo.get();
        }
        set microflowActionInfo(newValue) {
            this.__microflowActionInfo.set(newValue);
        }
        /**
         * In version 9.0.3: deleted
         * In version 8.0.0: introduced
         */
        get useLegacyCodeGeneration() {
            return this.__useLegacyCodeGeneration.get();
        }
        set useLegacyCodeGeneration(newValue) {
            this.__useLegacyCodeGeneration.set(newValue);
        }
        /**
         * Creates a new JavaAction unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container) {
            return internal.instancehelpers.createUnit(container, JavaAction);
        }
        /** @internal */
        _isByNameReferrable() {
            return this.__name.isAvailable;
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__javaReturnType.isAvailable) {
                this.javaReturnType = BooleanType.create(this.model);
            }
            if (this.__returnType.isAvailable) {
                this.returnType = "Boolean";
            }
            if (this.__useLegacyCodeGeneration.isAvailable) {
                this.useLegacyCodeGeneration = false;
            }
        }
    }
    JavaAction.structureTypeName = "JavaActions$JavaAction";
    JavaAction.versionInfo = new exports.StructureVersionInfo({
        properties: {
            typeParameters: {
                introduced: "6.6.0",
                deleted: "7.21.0",
                deletionMessage: "Use property 'actionTypeParameters' instead",
                public: {
                    currentValue: true
                }
            },
            parameters: {
                deleted: "7.21.0",
                deletionMessage: "Use property 'actionParameters' instead",
                public: {
                    currentValue: true
                }
            },
            returnType: {
                deleted: "6.6.0",
                deletionMessage: null,
                public: {
                    currentValue: true
                }
            },
            javaReturnType: {
                introduced: "6.6.0",
                deleted: "7.21.0",
                deletionMessage: "Use property 'actionReturnType' instead",
                public: {
                    currentValue: true
                },
                required: {
                    currentValue: true
                }
            },
            microflowActionInfo: {
                introduced: "6.6.0",
                deleted: "7.21.0",
                deletionMessage: "Use property 'modelerActionInfo' instead",
                public: {
                    currentValue: true
                }
            },
            useLegacyCodeGeneration: {
                introduced: "8.0.0",
                deleted: "9.0.3",
                deletionMessage: "The option to make Java action parameter names unique in generated code is no longer supported",
                public: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.ModelUnit);
    javaactions.JavaAction = JavaAction;
    class JavaActionParameter extends codeactions_1.codeactions.CodeActionParameter {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__type = new internal.PrimitiveProperty(JavaActionParameter, this, "type", "Unknown", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__javaType = new internal.PartProperty(JavaActionParameter, this, "javaType", null, true);
            /** @internal */
            this.__parameterType = new internal.PartProperty(JavaActionParameter, this, "parameterType", null, true);
            if (arguments.length < 4) {
                throw new Error("new JavaActionParameter() cannot be invoked directly, please use 'model.javaactions.createJavaActionParameter()'");
            }
        }
        get containerAsCodeAction() {
            return super.getContainerAs(codeactions_1.codeactions.CodeAction);
        }
        get containerAsJavaAction() {
            return super.getContainerAs(JavaAction);
        }
        /**
         * The value of this property is conceptually of type dataTypes.LegacyDataType.
         *
         * In version 6.6.0: deleted
         */
        get type() {
            return this.__type.get();
        }
        set type(newValue) {
            this.__type.set(newValue);
        }
        /**
         * In version 6.7.0: deleted
         * In version 6.6.0: introduced
         */
        get javaType() {
            return this.__javaType.get();
        }
        set javaType(newValue) {
            this.__javaType.set(newValue);
        }
        /**
         * In version 7.21.0: deleted
         * In version 6.7.0: introduced
         */
        get parameterType() {
            return this.__parameterType.get();
        }
        set parameterType(newValue) {
            this.__parameterType.set(newValue);
        }
        /**
         * Creates and returns a new JavaActionParameter instance in the SDK and on the server.
         * The new JavaActionParameter will be automatically stored in the 'actionParameters' property
         * of the parent codeactions.CodeAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInCodeActionUnderActionParameters(container) {
            internal.createInVersionCheck(container.model, JavaActionParameter.structureTypeName, { start: "7.21.0" });
            return internal.instancehelpers.createElement(container, JavaActionParameter, "actionParameters", true);
        }
        /**
         * Creates and returns a new JavaActionParameter instance in the SDK and on the server.
         * The new JavaActionParameter will be automatically stored in the 'parameters' property
         * of the parent JavaAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.20.0
         */
        static createInJavaActionUnderParameters(container) {
            internal.createInVersionCheck(container.model, JavaActionParameter.structureTypeName, { end: "7.20.0" });
            return internal.instancehelpers.createElement(container, JavaActionParameter, "parameters", true);
        }
        /**
         * Creates and returns a new JavaActionParameter instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, JavaActionParameter);
        }
        /** @internal */
        _isByNameReferrable() {
            return this.__name.isAvailable;
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__javaType.isAvailable) {
                this.javaType = StringType.create(this.model);
            }
            if (this.__parameterType.isAvailable) {
                this.parameterType = BasicParameterType.create(this.model);
            }
            if (this.__type.isAvailable) {
                this.type = "Unknown";
            }
        }
    }
    JavaActionParameter.structureTypeName = "JavaActions$JavaActionParameter";
    JavaActionParameter.versionInfo = new exports.StructureVersionInfo({
        properties: {
            type: {
                deleted: "6.6.0",
                deletionMessage: null,
                public: {
                    currentValue: true
                }
            },
            javaType: {
                introduced: "6.6.0",
                deleted: "6.7.0",
                deletionMessage: null,
                public: {
                    currentValue: true
                },
                required: {
                    currentValue: true
                }
            },
            parameterType: {
                introduced: "6.7.0",
                deleted: "7.21.0",
                deletionMessage: "Use property 'actionParameterType' instead",
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
    javaactions.JavaActionParameter = JavaActionParameter;
    /**
     * In version 7.21.0: deleted
     * In version 6.6.0: introduced
     */
    class ListType extends Type {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__parameter = new internal.PartProperty(ListType, this, "parameter", null, true);
            if (arguments.length < 4) {
                throw new Error("new ListType() cannot be invoked directly, please use 'model.javaactions.createListType()'");
            }
        }
        get containerAsBasicParameterType() {
            return super.getContainerAs(BasicParameterType);
        }
        get containerAsJavaAction() {
            return super.getContainerAs(JavaAction);
        }
        get containerAsJavaActionParameter() {
            return super.getContainerAs(JavaActionParameter);
        }
        get parameter() {
            return this.__parameter.get();
        }
        set parameter(newValue) {
            this.__parameter.set(newValue);
        }
        /**
         * Creates and returns a new ListType instance in the SDK and on the server.
         * The new ListType will be automatically stored in the 'type' property
         * of the parent BasicParameterType element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.7.0 to 7.20.0
         */
        static createInBasicParameterTypeUnderType(container) {
            internal.createInVersionCheck(container.model, ListType.structureTypeName, { start: "6.7.0", end: "7.20.0" });
            return internal.instancehelpers.createElement(container, ListType, "type", false);
        }
        /**
         * Creates and returns a new ListType instance in the SDK and on the server.
         * The new ListType will be automatically stored in the 'javaReturnType' property
         * of the parent JavaAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 to 7.20.0
         */
        static createInJavaActionUnderJavaReturnType(container) {
            internal.createInVersionCheck(container.model, ListType.structureTypeName, { start: "6.6.0", end: "7.20.0" });
            return internal.instancehelpers.createElement(container, ListType, "javaReturnType", false);
        }
        /**
         * Creates and returns a new ListType instance in the SDK and on the server.
         * The new ListType will be automatically stored in the 'javaType' property
         * of the parent JavaActionParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 to 6.6.0
         */
        static createInJavaActionParameterUnderJavaType(container) {
            internal.createInVersionCheck(container.model, ListType.structureTypeName, { start: "6.6.0", end: "6.6.0" });
            return internal.instancehelpers.createElement(container, ListType, "javaType", false);
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
            this.parameter = ParameterizedEntityType.create(this.model);
        }
    }
    ListType.structureTypeName = "JavaActions$ListType";
    ListType.versionInfo = new exports.StructureVersionInfo({
        introduced: "6.6.0",
        deleted: "7.21.0",
        deletionMessage: "Use CodeActions.ListType instead",
        properties: {
            parameter: {
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
    javaactions.ListType = ListType;
    /**
     * In version 7.21.0: deleted
     * In version 6.10.0: removed experimental
     * In version 6.6.0: introduced
     */
    class MicroflowActionInfo extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__caption = new internal.PrimitiveProperty(MicroflowActionInfo, this, "caption", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__category = new internal.PrimitiveProperty(MicroflowActionInfo, this, "category", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__icon = new internal.ByNameReferenceProperty(MicroflowActionInfo, this, "icon", null, "Images$Image");
            if (arguments.length < 4) {
                throw new Error("new MicroflowActionInfo() cannot be invoked directly, please use 'model.javaactions.createMicroflowActionInfo()'");
            }
        }
        get containerAsJavaAction() {
            return super.getContainerAs(JavaAction);
        }
        get caption() {
            return this.__caption.get();
        }
        set caption(newValue) {
            this.__caption.set(newValue);
        }
        get category() {
            return this.__category.get();
        }
        set category(newValue) {
            this.__category.set(newValue);
        }
        get icon() {
            return this.__icon.get();
        }
        set icon(newValue) {
            this.__icon.set(newValue);
        }
        get iconQualifiedName() {
            return this.__icon.qualifiedName();
        }
        /**
         * Creates and returns a new MicroflowActionInfo instance in the SDK and on the server.
         * The new MicroflowActionInfo will be automatically stored in the 'microflowActionInfo' property
         * of the parent JavaAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 to 7.20.0
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, MicroflowActionInfo.structureTypeName, { start: "6.6.0", end: "7.20.0" });
            return internal.instancehelpers.createElement(container, MicroflowActionInfo, "microflowActionInfo", false);
        }
        /**
         * Creates and returns a new MicroflowActionInfo instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, MicroflowActionInfo);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    MicroflowActionInfo.structureTypeName = "JavaActions$MicroflowActionInfo";
    MicroflowActionInfo.versionInfo = new exports.StructureVersionInfo({
        introduced: "6.6.0",
        deleted: "7.21.0",
        deletionMessage: "Use CodeActions.MicroflowActionInfo instead",
        properties: {
            caption: {
                public: {
                    currentValue: true
                }
            },
            category: {
                public: {
                    currentValue: true
                }
            },
            icon: {
                public: {
                    currentValue: true
                }
            }
        },
        public: {
            currentValue: true
        },
        experimental: {
            currentValue: false,
            changedIn: ["6.10.0"]
        }
    }, internal.StructureType.Element);
    javaactions.MicroflowActionInfo = MicroflowActionInfo;
    /**
     * In version 7.21.0: introduced
     */
    class MicroflowJavaActionParameterType extends codeactions_1.codeactions.ParameterType {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new MicroflowJavaActionParameterType() cannot be invoked directly, please use 'model.javaactions.createMicroflowJavaActionParameterType()'");
            }
        }
        get containerAsCodeActionParameter() {
            return super.getContainerAs(codeactions_1.codeactions.CodeActionParameter);
        }
        /**
         * Creates and returns a new MicroflowJavaActionParameterType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, MicroflowJavaActionParameterType);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    MicroflowJavaActionParameterType.structureTypeName = "JavaActions$MicroflowJavaActionParameterType";
    MicroflowJavaActionParameterType.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.21.0",
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    javaactions.MicroflowJavaActionParameterType = MicroflowJavaActionParameterType;
    /**
     * In version 7.21.0: deleted
     * In version 6.9.0: introduced
     */
    class MicroflowParameterType extends ParameterType {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new MicroflowParameterType() cannot be invoked directly, please use 'model.javaactions.createMicroflowParameterType()'");
            }
        }
        get containerAsJavaActionParameter() {
            return super.getContainerAs(JavaActionParameter);
        }
        /**
         * Creates and returns a new MicroflowParameterType instance in the SDK and on the server.
         * The new MicroflowParameterType will be automatically stored in the 'parameterType' property
         * of the parent JavaActionParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.9.0 to 7.20.0
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, MicroflowParameterType.structureTypeName, { start: "6.9.0", end: "7.20.0" });
            return internal.instancehelpers.createElement(container, MicroflowParameterType, "parameterType", false);
        }
        /**
         * Creates and returns a new MicroflowParameterType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, MicroflowParameterType);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    MicroflowParameterType.structureTypeName = "JavaActions$MicroflowParameterType";
    MicroflowParameterType.versionInfo = new exports.StructureVersionInfo({
        introduced: "6.9.0",
        deleted: "7.21.0",
        deletionMessage: "Use MicroflowJavaActionParameterType instead",
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    javaactions.MicroflowParameterType = MicroflowParameterType;
    /**
     * In version 7.21.0: deleted
     * In version 6.6.0: introduced
     */
    class ParameterizedEntityType extends EntityType {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__typeParameter = new internal.ByIdReferenceProperty(ParameterizedEntityType, this, "typeParameter", null);
            if (arguments.length < 4) {
                throw new Error("new ParameterizedEntityType() cannot be invoked directly, please use 'model.javaactions.createParameterizedEntityType()'");
            }
        }
        get containerAsBasicParameterType() {
            return super.getContainerAs(BasicParameterType);
        }
        get containerAsJavaAction() {
            return super.getContainerAs(JavaAction);
        }
        get containerAsJavaActionParameter() {
            return super.getContainerAs(JavaActionParameter);
        }
        get containerAsListType() {
            return super.getContainerAs(ListType);
        }
        get typeParameter() {
            return this.__typeParameter.get();
        }
        set typeParameter(newValue) {
            this.__typeParameter.set(newValue);
        }
        /**
         * Creates and returns a new ParameterizedEntityType instance in the SDK and on the server.
         * The new ParameterizedEntityType will be automatically stored in the 'type' property
         * of the parent BasicParameterType element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.7.0 to 7.20.0
         */
        static createInBasicParameterTypeUnderType(container) {
            internal.createInVersionCheck(container.model, ParameterizedEntityType.structureTypeName, { start: "6.7.0", end: "7.20.0" });
            return internal.instancehelpers.createElement(container, ParameterizedEntityType, "type", false);
        }
        /**
         * Creates and returns a new ParameterizedEntityType instance in the SDK and on the server.
         * The new ParameterizedEntityType will be automatically stored in the 'javaReturnType' property
         * of the parent JavaAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 to 7.20.0
         */
        static createInJavaActionUnderJavaReturnType(container) {
            internal.createInVersionCheck(container.model, ParameterizedEntityType.structureTypeName, { start: "6.6.0", end: "7.20.0" });
            return internal.instancehelpers.createElement(container, ParameterizedEntityType, "javaReturnType", false);
        }
        /**
         * Creates and returns a new ParameterizedEntityType instance in the SDK and on the server.
         * The new ParameterizedEntityType will be automatically stored in the 'javaType' property
         * of the parent JavaActionParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 to 6.6.0
         */
        static createInJavaActionParameterUnderJavaType(container) {
            internal.createInVersionCheck(container.model, ParameterizedEntityType.structureTypeName, { start: "6.6.0", end: "6.6.0" });
            return internal.instancehelpers.createElement(container, ParameterizedEntityType, "javaType", false);
        }
        /**
         * Creates and returns a new ParameterizedEntityType instance in the SDK and on the server.
         * The new ParameterizedEntityType will be automatically stored in the 'parameter' property
         * of the parent ListType element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 to 7.20.0
         */
        static createInListTypeUnderParameter(container) {
            internal.createInVersionCheck(container.model, ParameterizedEntityType.structureTypeName, { start: "6.6.0", end: "7.20.0" });
            return internal.instancehelpers.createElement(container, ParameterizedEntityType, "parameter", false);
        }
        /**
         * Creates and returns a new ParameterizedEntityType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ParameterizedEntityType);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ParameterizedEntityType.structureTypeName = "JavaActions$ParameterizedEntityType";
    ParameterizedEntityType.versionInfo = new exports.StructureVersionInfo({
        introduced: "6.6.0",
        deleted: "7.21.0",
        deletionMessage: "Use CodeActions.ParameterizedEntityType instead",
        properties: {
            typeParameter: {
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
    javaactions.ParameterizedEntityType = ParameterizedEntityType;
    /**
     * In version 7.21.0: deleted
     * In version 6.6.0: introduced
     */
    class StringType extends PrimitiveType {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new StringType() cannot be invoked directly, please use 'model.javaactions.createStringType()'");
            }
        }
        get containerAsBasicParameterType() {
            return super.getContainerAs(BasicParameterType);
        }
        get containerAsJavaAction() {
            return super.getContainerAs(JavaAction);
        }
        get containerAsJavaActionParameter() {
            return super.getContainerAs(JavaActionParameter);
        }
        /**
         * Creates and returns a new StringType instance in the SDK and on the server.
         * The new StringType will be automatically stored in the 'type' property
         * of the parent BasicParameterType element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.7.0 to 7.20.0
         */
        static createInBasicParameterTypeUnderType(container) {
            internal.createInVersionCheck(container.model, StringType.structureTypeName, { start: "6.7.0", end: "7.20.0" });
            return internal.instancehelpers.createElement(container, StringType, "type", false);
        }
        /**
         * Creates and returns a new StringType instance in the SDK and on the server.
         * The new StringType will be automatically stored in the 'javaReturnType' property
         * of the parent JavaAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 to 7.20.0
         */
        static createInJavaActionUnderJavaReturnType(container) {
            internal.createInVersionCheck(container.model, StringType.structureTypeName, { start: "6.6.0", end: "7.20.0" });
            return internal.instancehelpers.createElement(container, StringType, "javaReturnType", false);
        }
        /**
         * Creates and returns a new StringType instance in the SDK and on the server.
         * The new StringType will be automatically stored in the 'javaType' property
         * of the parent JavaActionParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 to 6.6.0
         */
        static createInJavaActionParameterUnderJavaType(container) {
            internal.createInVersionCheck(container.model, StringType.structureTypeName, { start: "6.6.0", end: "6.6.0" });
            return internal.instancehelpers.createElement(container, StringType, "javaType", false);
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
    StringType.structureTypeName = "JavaActions$StringType";
    StringType.versionInfo = new exports.StructureVersionInfo({
        introduced: "6.6.0",
        deleted: "7.21.0",
        deletionMessage: "Use CodeActions.StringType instead",
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    javaactions.StringType = StringType;
    /**
     * In version 7.21.0: deleted
     * In version 6.6.0: introduced
     */
    class TypeParameter extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__name = new internal.PrimitiveProperty(TypeParameter, this, "name", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new TypeParameter() cannot be invoked directly, please use 'model.javaactions.createTypeParameter()'");
            }
        }
        get containerAsJavaAction() {
            return super.getContainerAs(JavaAction);
        }
        get name() {
            return this.__name.get();
        }
        set name(newValue) {
            this.__name.set(newValue);
        }
        /**
         * Creates and returns a new TypeParameter instance in the SDK and on the server.
         * The new TypeParameter will be automatically stored in the 'typeParameters' property
         * of the parent JavaAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 to 7.20.0
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, TypeParameter.structureTypeName, { start: "6.6.0", end: "7.20.0" });
            return internal.instancehelpers.createElement(container, TypeParameter, "typeParameters", true);
        }
        /**
         * Creates and returns a new TypeParameter instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, TypeParameter);
        }
        get qualifiedName() {
            return this._getQualifiedName();
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    TypeParameter.structureTypeName = "JavaActions$TypeParameter";
    TypeParameter.versionInfo = new exports.StructureVersionInfo({
        introduced: "6.6.0",
        deleted: "7.21.0",
        deletionMessage: "Use CodeActions.TypeParameter instead",
        properties: {
            name: {
                public: {
                    currentValue: true
                }
            }
        },
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    javaactions.TypeParameter = TypeParameter;
})(javaactions = exports.javaactions || (exports.javaactions = {}));
const projects_1 = require("./projects");
//# sourceMappingURL=javaactions.js.map