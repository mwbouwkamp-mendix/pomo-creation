"use strict";
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.codeactions = exports.StructureVersionInfo = void 0;
const internal = require("../sdk/internal");
exports.StructureVersionInfo = internal.StructureVersionInfo;
const projects_1 = require("./projects");
var codeactions;
(function (codeactions) {
    class StringTemplateParameterGrammar extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "codeactions.StringTemplateParameterGrammar";
        }
    }
    StringTemplateParameterGrammar.Text = new StringTemplateParameterGrammar("Text", {});
    StringTemplateParameterGrammar.Sql = new StringTemplateParameterGrammar("Sql", {});
    codeactions.StringTemplateParameterGrammar = StringTemplateParameterGrammar;
    /**
     * In version 7.21.0: introduced
     */
    class ParameterType extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new ParameterType() cannot be invoked directly, please use 'model.codeactions.createParameterType()'");
            }
        }
        get containerAsCodeActionParameter() {
            return super.getContainerAs(CodeActionParameter);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ParameterType.structureTypeName = "CodeActions$ParameterType";
    ParameterType.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.21.0",
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    codeactions.ParameterType = ParameterType;
    /**
     * In version 7.21.0: introduced
     */
    class BasicParameterType extends ParameterType {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__type = new internal.PartProperty(BasicParameterType, this, "type", null, true);
            if (arguments.length < 4) {
                throw new Error("new BasicParameterType() cannot be invoked directly, please use 'model.codeactions.createBasicParameterType()'");
            }
        }
        get containerAsCodeActionParameter() {
            return super.getContainerAs(CodeActionParameter);
        }
        get type() {
            return this.__type.get();
        }
        set type(newValue) {
            this.__type.set(newValue);
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
    BasicParameterType.structureTypeName = "CodeActions$BasicParameterType";
    BasicParameterType.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.21.0",
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
    codeactions.BasicParameterType = BasicParameterType;
    /**
     * In version 7.21.0: introduced
     */
    class Type extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new Type() cannot be invoked directly, please use 'model.codeactions.createType()'");
            }
        }
        get containerAsBasicParameterType() {
            return super.getContainerAs(BasicParameterType);
        }
        get containerAsCodeAction() {
            return super.getContainerAs(CodeAction);
        }
        get containerAsListType() {
            return super.getContainerAs(ListType);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    Type.structureTypeName = "CodeActions$Type";
    Type.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.21.0",
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    codeactions.Type = Type;
    /**
     * In version 7.21.0: introduced
     */
    class PrimitiveType extends Type {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new PrimitiveType() cannot be invoked directly, please use 'model.codeactions.createPrimitiveType()'");
            }
        }
        get containerAsBasicParameterType() {
            return super.getContainerAs(BasicParameterType);
        }
        get containerAsCodeAction() {
            return super.getContainerAs(CodeAction);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    PrimitiveType.structureTypeName = "CodeActions$PrimitiveType";
    PrimitiveType.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.21.0",
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    codeactions.PrimitiveType = PrimitiveType;
    /**
     * In version 7.21.0: introduced
     */
    class BooleanType extends PrimitiveType {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new BooleanType() cannot be invoked directly, please use 'model.codeactions.createBooleanType()'");
            }
        }
        get containerAsBasicParameterType() {
            return super.getContainerAs(BasicParameterType);
        }
        get containerAsCodeAction() {
            return super.getContainerAs(CodeAction);
        }
        /**
         * Creates and returns a new BooleanType instance in the SDK and on the server.
         * The new BooleanType will be automatically stored in the 'type' property
         * of the parent BasicParameterType element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInBasicParameterTypeUnderType(container) {
            internal.createInVersionCheck(container.model, BooleanType.structureTypeName, { start: "7.21.0" });
            return internal.instancehelpers.createElement(container, BooleanType, "type", false);
        }
        /**
         * Creates and returns a new BooleanType instance in the SDK and on the server.
         * The new BooleanType will be automatically stored in the 'actionReturnType' property
         * of the parent CodeAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInCodeActionUnderActionReturnType(container) {
            internal.createInVersionCheck(container.model, BooleanType.structureTypeName, { start: "7.21.0" });
            return internal.instancehelpers.createElement(container, BooleanType, "actionReturnType", false);
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
    BooleanType.structureTypeName = "CodeActions$BooleanType";
    BooleanType.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.21.0",
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    codeactions.BooleanType = BooleanType;
    class CodeAction extends projects_1.projects.Document {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            /** @internal */
            this.__actionTypeParameters = new internal.PartListProperty(CodeAction, this, "actionTypeParameters", []);
            /** @internal */
            this.__actionReturnType = new internal.PartProperty(CodeAction, this, "actionReturnType", null, true);
            /** @internal */
            this.__modelerActionInfo = new internal.PartProperty(CodeAction, this, "modelerActionInfo", null, false);
            /** @internal */
            this.__actionParameters = new internal.PartListProperty(CodeAction, this, "actionParameters", []);
        }
        get containerAsFolderBase() {
            return super.getContainerAs(projects_1.projects.FolderBase);
        }
        /**
         * In version 7.21.0: introduced
         */
        get actionTypeParameters() {
            return this.__actionTypeParameters.get();
        }
        /**
         * In version 7.21.0: introduced
         */
        get actionReturnType() {
            return this.__actionReturnType.get();
        }
        set actionReturnType(newValue) {
            this.__actionReturnType.set(newValue);
        }
        /**
         * In version 7.21.0: introduced
         */
        get modelerActionInfo() {
            return this.__modelerActionInfo.get();
        }
        set modelerActionInfo(newValue) {
            this.__modelerActionInfo.set(newValue);
        }
        /**
         * In version 7.21.0: introduced
         */
        get actionParameters() {
            return this.__actionParameters.get();
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__actionReturnType.isAvailable) {
                (() => {
                    if (internal.isAtLeast("8.3.0", this.model)) {
                        this.actionReturnType = VoidType.create(this.model);
                        return;
                    }
                    this.actionReturnType = BooleanType.create(this.model);
                })();
            }
        }
    }
    CodeAction.structureTypeName = "CodeActions$CodeAction";
    CodeAction.versionInfo = new exports.StructureVersionInfo({
        properties: {
            actionTypeParameters: {
                introduced: "7.21.0",
                public: {
                    currentValue: true
                }
            },
            actionReturnType: {
                introduced: "7.21.0",
                public: {
                    currentValue: true
                },
                required: {
                    currentValue: true
                }
            },
            modelerActionInfo: {
                introduced: "7.21.0",
                public: {
                    currentValue: true
                }
            },
            actionParameters: {
                introduced: "7.21.0",
                public: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.ModelUnit);
    codeactions.CodeAction = CodeAction;
    class CodeActionParameter extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__name = new internal.PrimitiveProperty(CodeActionParameter, this, "name", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__actionParameterType = new internal.PartProperty(CodeActionParameter, this, "actionParameterType", null, true);
            /** @internal */
            this.__description = new internal.PrimitiveProperty(CodeActionParameter, this, "description", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__category = new internal.PrimitiveProperty(CodeActionParameter, this, "category", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__isRequired = new internal.PrimitiveProperty(CodeActionParameter, this, "isRequired", true, internal.PrimitiveTypeEnum.Boolean);
            if (arguments.length < 4) {
                throw new Error("new CodeActionParameter() cannot be invoked directly, please use 'model.codeactions.createCodeActionParameter()'");
            }
        }
        get containerAsCodeAction() {
            return super.getContainerAs(CodeAction);
        }
        get containerAsJavaAction() {
            return super.getContainerAs(javaactions_1.javaactions.JavaAction);
        }
        get name() {
            return this.__name.get();
        }
        set name(newValue) {
            this.__name.set(newValue);
        }
        /**
         * In version 7.21.0: introduced
         */
        get actionParameterType() {
            return this.__actionParameterType.get();
        }
        set actionParameterType(newValue) {
            this.__actionParameterType.set(newValue);
        }
        /**
         * In version 6.10.0: introduced
         */
        get description() {
            return this.__description.get();
        }
        set description(newValue) {
            this.__description.set(newValue);
        }
        /**
         * In version 7.18.0: introduced
         */
        get category() {
            return this.__category.get();
        }
        set category(newValue) {
            this.__category.set(newValue);
        }
        /**
         * In version 9.17.0: introduced
         */
        get isRequired() {
            return this.__isRequired.get();
        }
        set isRequired(newValue) {
            this.__isRequired.set(newValue);
        }
        get qualifiedName() {
            return this._getQualifiedName();
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__actionParameterType.isAvailable) {
                this.actionParameterType = BasicParameterType.create(this.model);
            }
            if (this.__isRequired.isAvailable) {
                this.isRequired = true;
            }
        }
    }
    CodeActionParameter.structureTypeName = "CodeActions$CodeActionParameter";
    CodeActionParameter.versionInfo = new exports.StructureVersionInfo({
        properties: {
            name: {
                public: {
                    currentValue: true
                }
            },
            actionParameterType: {
                introduced: "7.21.0",
                public: {
                    currentValue: true
                },
                required: {
                    currentValue: true
                }
            },
            description: {
                introduced: "6.10.0",
                public: {
                    currentValue: true
                }
            },
            category: {
                introduced: "7.18.0"
            },
            isRequired: {
                introduced: "9.17.0",
                public: {
                    currentValue: true
                }
            }
        },
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    codeactions.CodeActionParameter = CodeActionParameter;
    /**
     * In version 7.21.0: introduced
     */
    class EntityType extends Type {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new EntityType() cannot be invoked directly, please use 'model.codeactions.createEntityType()'");
            }
        }
        get containerAsBasicParameterType() {
            return super.getContainerAs(BasicParameterType);
        }
        get containerAsCodeAction() {
            return super.getContainerAs(CodeAction);
        }
        get containerAsListType() {
            return super.getContainerAs(ListType);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    EntityType.structureTypeName = "CodeActions$EntityType";
    EntityType.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.21.0",
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    codeactions.EntityType = EntityType;
    /**
     * In version 7.21.0: introduced
     */
    class ConcreteEntityType extends EntityType {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__entity = new internal.ByNameReferenceProperty(ConcreteEntityType, this, "entity", null, "DomainModels$Entity");
            if (arguments.length < 4) {
                throw new Error("new ConcreteEntityType() cannot be invoked directly, please use 'model.codeactions.createConcreteEntityType()'");
            }
        }
        get containerAsBasicParameterType() {
            return super.getContainerAs(BasicParameterType);
        }
        get containerAsCodeAction() {
            return super.getContainerAs(CodeAction);
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
         *  7.21.0 and higher
         */
        static createInBasicParameterTypeUnderType(container) {
            internal.createInVersionCheck(container.model, ConcreteEntityType.structureTypeName, { start: "7.21.0" });
            return internal.instancehelpers.createElement(container, ConcreteEntityType, "type", false);
        }
        /**
         * Creates and returns a new ConcreteEntityType instance in the SDK and on the server.
         * The new ConcreteEntityType will be automatically stored in the 'actionReturnType' property
         * of the parent CodeAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInCodeActionUnderActionReturnType(container) {
            internal.createInVersionCheck(container.model, ConcreteEntityType.structureTypeName, { start: "7.21.0" });
            return internal.instancehelpers.createElement(container, ConcreteEntityType, "actionReturnType", false);
        }
        /**
         * Creates and returns a new ConcreteEntityType instance in the SDK and on the server.
         * The new ConcreteEntityType will be automatically stored in the 'parameter' property
         * of the parent ListType element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInListTypeUnderParameter(container) {
            internal.createInVersionCheck(container.model, ConcreteEntityType.structureTypeName, { start: "7.21.0" });
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
    ConcreteEntityType.structureTypeName = "CodeActions$ConcreteEntityType";
    ConcreteEntityType.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.21.0",
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
    codeactions.ConcreteEntityType = ConcreteEntityType;
    /**
     * In version 7.21.0: introduced
     */
    class DateTimeType extends PrimitiveType {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new DateTimeType() cannot be invoked directly, please use 'model.codeactions.createDateTimeType()'");
            }
        }
        get containerAsBasicParameterType() {
            return super.getContainerAs(BasicParameterType);
        }
        get containerAsCodeAction() {
            return super.getContainerAs(CodeAction);
        }
        /**
         * Creates and returns a new DateTimeType instance in the SDK and on the server.
         * The new DateTimeType will be automatically stored in the 'type' property
         * of the parent BasicParameterType element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInBasicParameterTypeUnderType(container) {
            internal.createInVersionCheck(container.model, DateTimeType.structureTypeName, { start: "7.21.0" });
            return internal.instancehelpers.createElement(container, DateTimeType, "type", false);
        }
        /**
         * Creates and returns a new DateTimeType instance in the SDK and on the server.
         * The new DateTimeType will be automatically stored in the 'actionReturnType' property
         * of the parent CodeAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInCodeActionUnderActionReturnType(container) {
            internal.createInVersionCheck(container.model, DateTimeType.structureTypeName, { start: "7.21.0" });
            return internal.instancehelpers.createElement(container, DateTimeType, "actionReturnType", false);
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
    DateTimeType.structureTypeName = "CodeActions$DateTimeType";
    DateTimeType.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.21.0",
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    codeactions.DateTimeType = DateTimeType;
    /**
     * In version 7.21.0: introduced
     */
    class DecimalType extends PrimitiveType {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new DecimalType() cannot be invoked directly, please use 'model.codeactions.createDecimalType()'");
            }
        }
        get containerAsBasicParameterType() {
            return super.getContainerAs(BasicParameterType);
        }
        get containerAsCodeAction() {
            return super.getContainerAs(CodeAction);
        }
        /**
         * Creates and returns a new DecimalType instance in the SDK and on the server.
         * The new DecimalType will be automatically stored in the 'type' property
         * of the parent BasicParameterType element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInBasicParameterTypeUnderType(container) {
            internal.createInVersionCheck(container.model, DecimalType.structureTypeName, { start: "7.21.0" });
            return internal.instancehelpers.createElement(container, DecimalType, "type", false);
        }
        /**
         * Creates and returns a new DecimalType instance in the SDK and on the server.
         * The new DecimalType will be automatically stored in the 'actionReturnType' property
         * of the parent CodeAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInCodeActionUnderActionReturnType(container) {
            internal.createInVersionCheck(container.model, DecimalType.structureTypeName, { start: "7.21.0" });
            return internal.instancehelpers.createElement(container, DecimalType, "actionReturnType", false);
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
    DecimalType.structureTypeName = "CodeActions$DecimalType";
    DecimalType.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.21.0",
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    codeactions.DecimalType = DecimalType;
    /**
     * In version 7.21.0: introduced
     */
    class EntityTypeParameterType extends ParameterType {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__typeParameter = new internal.ByIdReferenceProperty(EntityTypeParameterType, this, "typeParameter", null);
            if (arguments.length < 4) {
                throw new Error("new EntityTypeParameterType() cannot be invoked directly, please use 'model.codeactions.createEntityTypeParameterType()'");
            }
        }
        get containerAsCodeActionParameter() {
            return super.getContainerAs(CodeActionParameter);
        }
        get typeParameter() {
            return this.__typeParameter.get();
        }
        set typeParameter(newValue) {
            this.__typeParameter.set(newValue);
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
    EntityTypeParameterType.structureTypeName = "CodeActions$EntityTypeParameterType";
    EntityTypeParameterType.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.21.0",
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
    codeactions.EntityTypeParameterType = EntityTypeParameterType;
    /**
     * In version 7.21.0: introduced
     */
    class EnumerationType extends Type {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__enumeration = new internal.ByNameReferenceProperty(EnumerationType, this, "enumeration", null, "Enumerations$Enumeration");
            if (arguments.length < 4) {
                throw new Error("new EnumerationType() cannot be invoked directly, please use 'model.codeactions.createEnumerationType()'");
            }
        }
        get containerAsBasicParameterType() {
            return super.getContainerAs(BasicParameterType);
        }
        get containerAsCodeAction() {
            return super.getContainerAs(CodeAction);
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
         *  7.21.0 and higher
         */
        static createInBasicParameterTypeUnderType(container) {
            internal.createInVersionCheck(container.model, EnumerationType.structureTypeName, { start: "7.21.0" });
            return internal.instancehelpers.createElement(container, EnumerationType, "type", false);
        }
        /**
         * Creates and returns a new EnumerationType instance in the SDK and on the server.
         * The new EnumerationType will be automatically stored in the 'actionReturnType' property
         * of the parent CodeAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInCodeActionUnderActionReturnType(container) {
            internal.createInVersionCheck(container.model, EnumerationType.structureTypeName, { start: "7.21.0" });
            return internal.instancehelpers.createElement(container, EnumerationType, "actionReturnType", false);
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
    EnumerationType.structureTypeName = "CodeActions$EnumerationType";
    EnumerationType.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.21.0",
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
    codeactions.EnumerationType = EnumerationType;
    /**
     * In version 7.21.0: introduced
     */
    class FloatType extends PrimitiveType {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new FloatType() cannot be invoked directly, please use 'model.codeactions.createFloatType()'");
            }
        }
        get containerAsBasicParameterType() {
            return super.getContainerAs(BasicParameterType);
        }
        get containerAsCodeAction() {
            return super.getContainerAs(CodeAction);
        }
        /**
         * Creates and returns a new FloatType instance in the SDK and on the server.
         * The new FloatType will be automatically stored in the 'type' property
         * of the parent BasicParameterType element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInBasicParameterTypeUnderType(container) {
            internal.createInVersionCheck(container.model, FloatType.structureTypeName, { start: "7.21.0" });
            return internal.instancehelpers.createElement(container, FloatType, "type", false);
        }
        /**
         * Creates and returns a new FloatType instance in the SDK and on the server.
         * The new FloatType will be automatically stored in the 'actionReturnType' property
         * of the parent CodeAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInCodeActionUnderActionReturnType(container) {
            internal.createInVersionCheck(container.model, FloatType.structureTypeName, { start: "7.21.0" });
            return internal.instancehelpers.createElement(container, FloatType, "actionReturnType", false);
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
    FloatType.structureTypeName = "CodeActions$FloatType";
    FloatType.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.21.0",
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    codeactions.FloatType = FloatType;
    /**
     * In version 7.21.0: introduced
     */
    class IntegerType extends PrimitiveType {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new IntegerType() cannot be invoked directly, please use 'model.codeactions.createIntegerType()'");
            }
        }
        get containerAsBasicParameterType() {
            return super.getContainerAs(BasicParameterType);
        }
        get containerAsCodeAction() {
            return super.getContainerAs(CodeAction);
        }
        /**
         * Creates and returns a new IntegerType instance in the SDK and on the server.
         * The new IntegerType will be automatically stored in the 'type' property
         * of the parent BasicParameterType element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInBasicParameterTypeUnderType(container) {
            internal.createInVersionCheck(container.model, IntegerType.structureTypeName, { start: "7.21.0" });
            return internal.instancehelpers.createElement(container, IntegerType, "type", false);
        }
        /**
         * Creates and returns a new IntegerType instance in the SDK and on the server.
         * The new IntegerType will be automatically stored in the 'actionReturnType' property
         * of the parent CodeAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInCodeActionUnderActionReturnType(container) {
            internal.createInVersionCheck(container.model, IntegerType.structureTypeName, { start: "7.21.0" });
            return internal.instancehelpers.createElement(container, IntegerType, "actionReturnType", false);
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
    IntegerType.structureTypeName = "CodeActions$IntegerType";
    IntegerType.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.21.0",
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    codeactions.IntegerType = IntegerType;
    /**
     * In version 7.21.0: introduced
     */
    class ListType extends Type {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__parameter = new internal.PartProperty(ListType, this, "parameter", null, true);
            if (arguments.length < 4) {
                throw new Error("new ListType() cannot be invoked directly, please use 'model.codeactions.createListType()'");
            }
        }
        get containerAsBasicParameterType() {
            return super.getContainerAs(BasicParameterType);
        }
        get containerAsCodeAction() {
            return super.getContainerAs(CodeAction);
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
         *  7.21.0 and higher
         */
        static createInBasicParameterTypeUnderType(container) {
            internal.createInVersionCheck(container.model, ListType.structureTypeName, { start: "7.21.0" });
            return internal.instancehelpers.createElement(container, ListType, "type", false);
        }
        /**
         * Creates and returns a new ListType instance in the SDK and on the server.
         * The new ListType will be automatically stored in the 'actionReturnType' property
         * of the parent CodeAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInCodeActionUnderActionReturnType(container) {
            internal.createInVersionCheck(container.model, ListType.structureTypeName, { start: "7.21.0" });
            return internal.instancehelpers.createElement(container, ListType, "actionReturnType", false);
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
    ListType.structureTypeName = "CodeActions$ListType";
    ListType.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.21.0",
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
    codeactions.ListType = ListType;
    /**
     * In version 7.21.0: introduced
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
            /** @internal */
            this.__iconData = new internal.PrimitiveProperty(MicroflowActionInfo, this, "iconData", null, internal.PrimitiveTypeEnum.Blob);
            /** @internal */
            this.__iconDataDark = new internal.PrimitiveProperty(MicroflowActionInfo, this, "iconDataDark", null, internal.PrimitiveTypeEnum.Blob);
            /** @internal */
            this.__imageData = new internal.PrimitiveProperty(MicroflowActionInfo, this, "imageData", null, internal.PrimitiveTypeEnum.Blob);
            /** @internal */
            this.__imageDataDark = new internal.PrimitiveProperty(MicroflowActionInfo, this, "imageDataDark", null, internal.PrimitiveTypeEnum.Blob);
            if (arguments.length < 4) {
                throw new Error("new MicroflowActionInfo() cannot be invoked directly, please use 'model.codeactions.createMicroflowActionInfo()'");
            }
        }
        get containerAsCodeAction() {
            return super.getContainerAs(CodeAction);
        }
        get containerAsMicroflow() {
            return super.getContainerAs(microflows_1.microflows.Microflow);
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
        /**
         * In version 9.10.0: deleted
         */
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
         * In version 9.10.0: introduced
         */
        get iconData() {
            return this.__iconData.get();
        }
        set iconData(newValue) {
            this.__iconData.set(newValue);
        }
        /**
         * In version 9.10.0: introduced
         */
        get iconDataDark() {
            return this.__iconDataDark.get();
        }
        set iconDataDark(newValue) {
            this.__iconDataDark.set(newValue);
        }
        /**
         * In version 9.6.0: introduced
         */
        get imageData() {
            return this.__imageData.get();
        }
        set imageData(newValue) {
            this.__imageData.set(newValue);
        }
        /**
         * In version 9.10.0: introduced
         */
        get imageDataDark() {
            return this.__imageDataDark.get();
        }
        set imageDataDark(newValue) {
            this.__imageDataDark.set(newValue);
        }
        /**
         * Creates and returns a new MicroflowActionInfo instance in the SDK and on the server.
         * The new MicroflowActionInfo will be automatically stored in the 'modelerActionInfo' property
         * of the parent CodeAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 to 7.23.0
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, MicroflowActionInfo.structureTypeName, { start: "7.21.0", end: "7.23.0" });
            return internal.instancehelpers.createElement(container, MicroflowActionInfo, "modelerActionInfo", false);
        }
        /**
         * Creates and returns a new MicroflowActionInfo instance in the SDK and on the server.
         * The new MicroflowActionInfo will be automatically stored in the 'modelerActionInfo' property
         * of the parent CodeAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInCodeActionUnderModelerActionInfo(container) {
            internal.createInVersionCheck(container.model, MicroflowActionInfo.structureTypeName, { start: "7.21.0" });
            return internal.instancehelpers.createElement(container, MicroflowActionInfo, "modelerActionInfo", false);
        }
        /**
         * Creates and returns a new MicroflowActionInfo instance in the SDK and on the server.
         * The new MicroflowActionInfo will be automatically stored in the 'microflowActionInfo' property
         * of the parent microflows.Microflow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 and higher
         */
        static createInMicroflowUnderMicroflowActionInfo(container) {
            internal.createInVersionCheck(container.model, MicroflowActionInfo.structureTypeName, { start: "8.0.0" });
            return internal.instancehelpers.createElement(container, MicroflowActionInfo, "microflowActionInfo", false);
        }
        /**
         * Creates and returns a new MicroflowActionInfo instance in the SDK and on the server.
         * The new MicroflowActionInfo will be automatically stored in the 'workflowActionInfo' property
         * of the parent microflows.Microflow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.2 and higher
         */
        static createInMicroflowUnderWorkflowActionInfo(container) {
            internal.createInVersionCheck(container.model, MicroflowActionInfo.structureTypeName, { start: "9.0.2" });
            return internal.instancehelpers.createElement(container, MicroflowActionInfo, "workflowActionInfo", false);
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
    MicroflowActionInfo.structureTypeName = "CodeActions$MicroflowActionInfo";
    MicroflowActionInfo.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.21.0",
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
                deleted: "9.10.0",
                deletionMessage: null,
                public: {
                    currentValue: true
                }
            },
            iconData: {
                introduced: "9.10.0"
            },
            iconDataDark: {
                introduced: "9.10.0"
            },
            imageData: {
                introduced: "9.6.0",
                public: {
                    currentValue: true
                }
            },
            imageDataDark: {
                introduced: "9.10.0"
            }
        },
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    codeactions.MicroflowActionInfo = MicroflowActionInfo;
    /**
     * In version 7.21.0: introduced
     */
    class ParameterizedEntityType extends EntityType {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__typeParameter = new internal.ByIdReferenceProperty(ParameterizedEntityType, this, "typeParameter", null);
            if (arguments.length < 4) {
                throw new Error("new ParameterizedEntityType() cannot be invoked directly, please use 'model.codeactions.createParameterizedEntityType()'");
            }
        }
        get containerAsBasicParameterType() {
            return super.getContainerAs(BasicParameterType);
        }
        get containerAsCodeAction() {
            return super.getContainerAs(CodeAction);
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
         *  7.21.0 and higher
         */
        static createInBasicParameterTypeUnderType(container) {
            internal.createInVersionCheck(container.model, ParameterizedEntityType.structureTypeName, { start: "7.21.0" });
            return internal.instancehelpers.createElement(container, ParameterizedEntityType, "type", false);
        }
        /**
         * Creates and returns a new ParameterizedEntityType instance in the SDK and on the server.
         * The new ParameterizedEntityType will be automatically stored in the 'actionReturnType' property
         * of the parent CodeAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInCodeActionUnderActionReturnType(container) {
            internal.createInVersionCheck(container.model, ParameterizedEntityType.structureTypeName, { start: "7.21.0" });
            return internal.instancehelpers.createElement(container, ParameterizedEntityType, "actionReturnType", false);
        }
        /**
         * Creates and returns a new ParameterizedEntityType instance in the SDK and on the server.
         * The new ParameterizedEntityType will be automatically stored in the 'parameter' property
         * of the parent ListType element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInListTypeUnderParameter(container) {
            internal.createInVersionCheck(container.model, ParameterizedEntityType.structureTypeName, { start: "7.21.0" });
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
    ParameterizedEntityType.structureTypeName = "CodeActions$ParameterizedEntityType";
    ParameterizedEntityType.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.21.0",
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
    codeactions.ParameterizedEntityType = ParameterizedEntityType;
    /**
     * In version 8.5.0: removed experimental
     * In version 8.4.0: introduced
     */
    class StringTemplateParameterType extends ParameterType {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__grammar = new internal.EnumProperty(StringTemplateParameterType, this, "grammar", StringTemplateParameterGrammar.Text, StringTemplateParameterGrammar);
            if (arguments.length < 4) {
                throw new Error("new StringTemplateParameterType() cannot be invoked directly, please use 'model.codeactions.createStringTemplateParameterType()'");
            }
        }
        get containerAsCodeActionParameter() {
            return super.getContainerAs(CodeActionParameter);
        }
        /**
         * In version 8.8.0: introduced
         */
        get grammar() {
            return this.__grammar.get();
        }
        set grammar(newValue) {
            this.__grammar.set(newValue);
        }
        /**
         * Creates and returns a new StringTemplateParameterType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, StringTemplateParameterType);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__grammar.isAvailable) {
                this.grammar = StringTemplateParameterGrammar.Text;
            }
        }
    }
    StringTemplateParameterType.structureTypeName = "CodeActions$StringTemplateParameterType";
    StringTemplateParameterType.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.4.0",
        properties: {
            grammar: {
                introduced: "8.8.0",
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
            changedIn: ["8.5.0"]
        }
    }, internal.StructureType.Element);
    codeactions.StringTemplateParameterType = StringTemplateParameterType;
    /**
     * In version 7.21.0: introduced
     */
    class StringType extends PrimitiveType {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new StringType() cannot be invoked directly, please use 'model.codeactions.createStringType()'");
            }
        }
        get containerAsBasicParameterType() {
            return super.getContainerAs(BasicParameterType);
        }
        get containerAsCodeAction() {
            return super.getContainerAs(CodeAction);
        }
        /**
         * Creates and returns a new StringType instance in the SDK and on the server.
         * The new StringType will be automatically stored in the 'type' property
         * of the parent BasicParameterType element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInBasicParameterTypeUnderType(container) {
            internal.createInVersionCheck(container.model, StringType.structureTypeName, { start: "7.21.0" });
            return internal.instancehelpers.createElement(container, StringType, "type", false);
        }
        /**
         * Creates and returns a new StringType instance in the SDK and on the server.
         * The new StringType will be automatically stored in the 'actionReturnType' property
         * of the parent CodeAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInCodeActionUnderActionReturnType(container) {
            internal.createInVersionCheck(container.model, StringType.structureTypeName, { start: "7.21.0" });
            return internal.instancehelpers.createElement(container, StringType, "actionReturnType", false);
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
    StringType.structureTypeName = "CodeActions$StringType";
    StringType.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.21.0",
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    codeactions.StringType = StringType;
    /**
     * In version 7.21.0: introduced
     */
    class TypeParameter extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__name = new internal.PrimitiveProperty(TypeParameter, this, "name", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new TypeParameter() cannot be invoked directly, please use 'model.codeactions.createTypeParameter()'");
            }
        }
        get containerAsCodeAction() {
            return super.getContainerAs(CodeAction);
        }
        get name() {
            return this.__name.get();
        }
        set name(newValue) {
            this.__name.set(newValue);
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
    TypeParameter.structureTypeName = "CodeActions$TypeParameter";
    TypeParameter.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.21.0",
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
    codeactions.TypeParameter = TypeParameter;
    /**
     * In version 8.3.0: introduced
     */
    class VoidType extends PrimitiveType {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new VoidType() cannot be invoked directly, please use 'model.codeactions.createVoidType()'");
            }
        }
        get containerAsBasicParameterType() {
            return super.getContainerAs(BasicParameterType);
        }
        get containerAsCodeAction() {
            return super.getContainerAs(CodeAction);
        }
        /**
         * Creates and returns a new VoidType instance in the SDK and on the server.
         * The new VoidType will be automatically stored in the 'type' property
         * of the parent BasicParameterType element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.3.0 and higher
         */
        static createInBasicParameterTypeUnderType(container) {
            internal.createInVersionCheck(container.model, VoidType.structureTypeName, { start: "8.3.0" });
            return internal.instancehelpers.createElement(container, VoidType, "type", false);
        }
        /**
         * Creates and returns a new VoidType instance in the SDK and on the server.
         * The new VoidType will be automatically stored in the 'actionReturnType' property
         * of the parent CodeAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.3.0 and higher
         */
        static createInCodeActionUnderActionReturnType(container) {
            internal.createInVersionCheck(container.model, VoidType.structureTypeName, { start: "8.3.0" });
            return internal.instancehelpers.createElement(container, VoidType, "actionReturnType", false);
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
    VoidType.structureTypeName = "CodeActions$VoidType";
    VoidType.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.3.0",
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    codeactions.VoidType = VoidType;
})(codeactions = exports.codeactions || (exports.codeactions = {}));
const javaactions_1 = require("./javaactions");
const microflows_1 = require("./microflows");
//# sourceMappingURL=codeactions.js.map