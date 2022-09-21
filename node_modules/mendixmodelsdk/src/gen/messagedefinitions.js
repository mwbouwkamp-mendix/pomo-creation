"use strict";
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.messagedefinitions = exports.StructureVersionInfo = void 0;
const internal = require("../sdk/internal");
exports.StructureVersionInfo = internal.StructureVersionInfo;
const mappings_1 = require("./mappings");
const projects_1 = require("./projects");
var messagedefinitions;
(function (messagedefinitions) {
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `MessageDefinitions`.
     */
    /**
     * In version 7.10.0: introduced
     */
    class AssociationElement extends mappings_1.mappings.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new AssociationElement() cannot be invoked directly, please use 'model.messagedefinitions.createAssociationElement()'");
            }
        }
        get containerAsJsonStructure() {
            return super.getContainerAs(jsonstructures_1.jsonstructures.JsonStructure);
        }
        get containerAsElement() {
            return super.getContainerAs(mappings_1.mappings.Element);
        }
        /**
         * Creates and returns a new AssociationElement instance in the SDK and on the server.
         * The new AssociationElement will be automatically stored in the 'elements' property
         * of the parent jsonstructures.JsonStructure element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.10.0 and higher
         */
        static createInJsonStructureUnderElements(container) {
            internal.createInVersionCheck(container.model, AssociationElement.structureTypeName, { start: "7.10.0" });
            return internal.instancehelpers.createElement(container, AssociationElement, "elements", true);
        }
        /**
         * Creates and returns a new AssociationElement instance in the SDK and on the server.
         * The new AssociationElement will be automatically stored in the 'children' property
         * of the parent mappings.Element element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.10.0 and higher
         */
        static createInElementUnderChildren(container) {
            internal.createInVersionCheck(container.model, AssociationElement.structureTypeName, { start: "7.10.0" });
            return internal.instancehelpers.createElement(container, AssociationElement, "children", true);
        }
        /**
         * Creates and returns a new AssociationElement instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, AssociationElement);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    AssociationElement.structureTypeName = "MessageDefinitions$AssociationElement";
    AssociationElement.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.10.0"
    }, internal.StructureType.Element);
    messagedefinitions.AssociationElement = AssociationElement;
    /**
     * In version 7.6.0: introduced
     */
    class AttributeElement extends mappings_1.mappings.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new AttributeElement() cannot be invoked directly, please use 'model.messagedefinitions.createAttributeElement()'");
            }
        }
        get containerAsJsonStructure() {
            return super.getContainerAs(jsonstructures_1.jsonstructures.JsonStructure);
        }
        get containerAsElement() {
            return super.getContainerAs(mappings_1.mappings.Element);
        }
        /**
         * Creates and returns a new AttributeElement instance in the SDK and on the server.
         * The new AttributeElement will be automatically stored in the 'elements' property
         * of the parent jsonstructures.JsonStructure element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.6.0 and higher
         */
        static createInJsonStructureUnderElements(container) {
            internal.createInVersionCheck(container.model, AttributeElement.structureTypeName, { start: "7.6.0" });
            return internal.instancehelpers.createElement(container, AttributeElement, "elements", true);
        }
        /**
         * Creates and returns a new AttributeElement instance in the SDK and on the server.
         * The new AttributeElement will be automatically stored in the 'children' property
         * of the parent mappings.Element element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.6.0 and higher
         */
        static createInElementUnderChildren(container) {
            internal.createInVersionCheck(container.model, AttributeElement.structureTypeName, { start: "7.6.0" });
            return internal.instancehelpers.createElement(container, AttributeElement, "children", true);
        }
        /**
         * Creates and returns a new AttributeElement instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, AttributeElement);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    AttributeElement.structureTypeName = "MessageDefinitions$AttributeElement";
    AttributeElement.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.6.0"
    }, internal.StructureType.Element);
    messagedefinitions.AttributeElement = AttributeElement;
    /**
     * In version 7.6.0: introduced
     */
    class EntityElement extends mappings_1.mappings.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new EntityElement() cannot be invoked directly, please use 'model.messagedefinitions.createEntityElement()'");
            }
        }
        get containerAsJsonStructure() {
            return super.getContainerAs(jsonstructures_1.jsonstructures.JsonStructure);
        }
        get containerAsElement() {
            return super.getContainerAs(mappings_1.mappings.Element);
        }
        /**
         * Creates and returns a new EntityElement instance in the SDK and on the server.
         * The new EntityElement will be automatically stored in the 'elements' property
         * of the parent jsonstructures.JsonStructure element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.6.0 and higher
         */
        static createInJsonStructureUnderElements(container) {
            internal.createInVersionCheck(container.model, EntityElement.structureTypeName, { start: "7.6.0" });
            return internal.instancehelpers.createElement(container, EntityElement, "elements", true);
        }
        /**
         * Creates and returns a new EntityElement instance in the SDK and on the server.
         * The new EntityElement will be automatically stored in the 'children' property
         * of the parent mappings.Element element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.6.0 and higher
         */
        static createInElementUnderChildren(container) {
            internal.createInVersionCheck(container.model, EntityElement.structureTypeName, { start: "7.6.0" });
            return internal.instancehelpers.createElement(container, EntityElement, "children", true);
        }
        /**
         * Creates and returns a new EntityElement instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, EntityElement);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    EntityElement.structureTypeName = "MessageDefinitions$EntityElement";
    EntityElement.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.6.0"
    }, internal.StructureType.Element);
    messagedefinitions.EntityElement = EntityElement;
    /**
     * In version 7.6.0: introduced
     */
    class MessageDefinition extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__name = new internal.PrimitiveProperty(MessageDefinition, this, "name", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__documentation = new internal.PrimitiveProperty(MessageDefinition, this, "documentation", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new MessageDefinition() cannot be invoked directly, please use 'model.messagedefinitions.createMessageDefinition()'");
            }
        }
        get containerAsMessageDefinitionCollection() {
            return super.getContainerAs(MessageDefinitionCollection);
        }
        get name() {
            return this.__name.get();
        }
        set name(newValue) {
            this.__name.set(newValue);
        }
        get documentation() {
            return this.__documentation.get();
        }
        set documentation(newValue) {
            this.__documentation.set(newValue);
        }
        /** @internal */
        _isByNameReferrable() {
            return this.__name.isAvailable;
        }
        get qualifiedName() {
            return this._getQualifiedName();
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    MessageDefinition.structureTypeName = "MessageDefinitions$MessageDefinition";
    MessageDefinition.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.6.0",
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
    messagedefinitions.MessageDefinition = MessageDefinition;
    /**
     * See: {@link https://docs.mendix.com/refguide/message-definitions relevant section in reference guide}
     *
     * In version 7.6.0: introduced
     */
    class EntityMessageDefinition extends MessageDefinition {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__exposedEntity = new internal.PartProperty(EntityMessageDefinition, this, "exposedEntity", null, false);
            if (arguments.length < 4) {
                throw new Error("new EntityMessageDefinition() cannot be invoked directly, please use 'model.messagedefinitions.createEntityMessageDefinition()'");
            }
        }
        get containerAsMessageDefinitionCollection() {
            return super.getContainerAs(MessageDefinitionCollection);
        }
        get exposedEntity() {
            return this.__exposedEntity.get();
        }
        set exposedEntity(newValue) {
            this.__exposedEntity.set(newValue);
        }
        /**
         * Creates and returns a new EntityMessageDefinition instance in the SDK and on the server.
         * The new EntityMessageDefinition will be automatically stored in the 'messageDefinitions' property
         * of the parent MessageDefinitionCollection element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.6.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, EntityMessageDefinition.structureTypeName, { start: "7.6.0" });
            return internal.instancehelpers.createElement(container, EntityMessageDefinition, "messageDefinitions", true);
        }
        /**
         * Creates and returns a new EntityMessageDefinition instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, EntityMessageDefinition);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    EntityMessageDefinition.structureTypeName = "MessageDefinitions$EntityMessageDefinition";
    EntityMessageDefinition.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.6.0",
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    messagedefinitions.EntityMessageDefinition = EntityMessageDefinition;
    /**
     * In version 7.6.0: introduced
     */
    class ExposedMember extends mappings_1.mappings.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__originalName = new internal.PrimitiveProperty(ExposedMember, this, "originalName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__documentation = new internal.PrimitiveProperty(ExposedMember, this, "documentation", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__example = new internal.PrimitiveProperty(ExposedMember, this, "example", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new ExposedMember() cannot be invoked directly, please use 'model.messagedefinitions.createExposedMember()'");
            }
        }
        get containerAsJsonStructure() {
            return super.getContainerAs(jsonstructures_1.jsonstructures.JsonStructure);
        }
        get containerAsElement() {
            return super.getContainerAs(mappings_1.mappings.Element);
        }
        get containerAsEntityMessageDefinition() {
            return super.getContainerAs(EntityMessageDefinition);
        }
        get originalName() {
            return this.__originalName.get();
        }
        set originalName(newValue) {
            this.__originalName.set(newValue);
        }
        /**
         * In version 7.15.0: introduced
         */
        get documentation() {
            return this.__documentation.get();
        }
        set documentation(newValue) {
            this.__documentation.set(newValue);
        }
        /**
         * In version 7.15.0: introduced
         */
        get example() {
            return this.__example.get();
        }
        set example(newValue) {
            this.__example.set(newValue);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ExposedMember.structureTypeName = "MessageDefinitions$ExposedMember";
    ExposedMember.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.6.0",
        properties: {
            documentation: {
                introduced: "7.15.0"
            },
            example: {
                introduced: "7.15.0"
            }
        }
    }, internal.StructureType.Element);
    messagedefinitions.ExposedMember = ExposedMember;
    /**
     * In version 7.6.0: introduced
     */
    class ExposedEntityBase extends ExposedMember {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__entity = new internal.ByNameReferenceProperty(ExposedEntityBase, this, "entity", null, "DomainModels$Entity");
            if (arguments.length < 4) {
                throw new Error("new ExposedEntityBase() cannot be invoked directly, please use 'model.messagedefinitions.createExposedEntityBase()'");
            }
        }
        get containerAsJsonStructure() {
            return super.getContainerAs(jsonstructures_1.jsonstructures.JsonStructure);
        }
        get containerAsElement() {
            return super.getContainerAs(mappings_1.mappings.Element);
        }
        get containerAsEntityMessageDefinition() {
            return super.getContainerAs(EntityMessageDefinition);
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
    ExposedEntityBase.structureTypeName = "MessageDefinitions$ExposedEntityBase";
    ExposedEntityBase.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.6.0",
        properties: {
            entity: {
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    messagedefinitions.ExposedEntityBase = ExposedEntityBase;
    /**
     * In version 7.6.0: introduced
     */
    class ExposedAssociation extends ExposedEntityBase {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__association = new internal.ByNameReferenceProperty(ExposedAssociation, this, "association", null, "DomainModels$AssociationBase");
            if (arguments.length < 4) {
                throw new Error("new ExposedAssociation() cannot be invoked directly, please use 'model.messagedefinitions.createExposedAssociation()'");
            }
        }
        get containerAsJsonStructure() {
            return super.getContainerAs(jsonstructures_1.jsonstructures.JsonStructure);
        }
        get containerAsElement() {
            return super.getContainerAs(mappings_1.mappings.Element);
        }
        get association() {
            return this.__association.get();
        }
        set association(newValue) {
            this.__association.set(newValue);
        }
        get associationQualifiedName() {
            return this.__association.qualifiedName();
        }
        /**
         * Creates and returns a new ExposedAssociation instance in the SDK and on the server.
         * The new ExposedAssociation will be automatically stored in the 'elements' property
         * of the parent jsonstructures.JsonStructure element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.6.0 and higher
         */
        static createInJsonStructureUnderElements(container) {
            internal.createInVersionCheck(container.model, ExposedAssociation.structureTypeName, { start: "7.6.0" });
            return internal.instancehelpers.createElement(container, ExposedAssociation, "elements", true);
        }
        /**
         * Creates and returns a new ExposedAssociation instance in the SDK and on the server.
         * The new ExposedAssociation will be automatically stored in the 'children' property
         * of the parent mappings.Element element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.6.0 and higher
         */
        static createInElementUnderChildren(container) {
            internal.createInVersionCheck(container.model, ExposedAssociation.structureTypeName, { start: "7.6.0" });
            return internal.instancehelpers.createElement(container, ExposedAssociation, "children", true);
        }
        /**
         * Creates and returns a new ExposedAssociation instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ExposedAssociation);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ExposedAssociation.structureTypeName = "MessageDefinitions$ExposedAssociation";
    ExposedAssociation.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.6.0",
        properties: {
            association: {
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    messagedefinitions.ExposedAssociation = ExposedAssociation;
    /**
     * In version 7.6.0: introduced
     */
    class ExposedAttribute extends ExposedMember {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__attribute = new internal.ByNameReferenceProperty(ExposedAttribute, this, "attribute", null, "DomainModels$Attribute");
            if (arguments.length < 4) {
                throw new Error("new ExposedAttribute() cannot be invoked directly, please use 'model.messagedefinitions.createExposedAttribute()'");
            }
        }
        get containerAsJsonStructure() {
            return super.getContainerAs(jsonstructures_1.jsonstructures.JsonStructure);
        }
        get containerAsElement() {
            return super.getContainerAs(mappings_1.mappings.Element);
        }
        get attribute() {
            return this.__attribute.get();
        }
        set attribute(newValue) {
            this.__attribute.set(newValue);
        }
        get attributeQualifiedName() {
            return this.__attribute.qualifiedName();
        }
        /**
         * Creates and returns a new ExposedAttribute instance in the SDK and on the server.
         * The new ExposedAttribute will be automatically stored in the 'elements' property
         * of the parent jsonstructures.JsonStructure element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.6.0 and higher
         */
        static createInJsonStructureUnderElements(container) {
            internal.createInVersionCheck(container.model, ExposedAttribute.structureTypeName, { start: "7.6.0" });
            return internal.instancehelpers.createElement(container, ExposedAttribute, "elements", true);
        }
        /**
         * Creates and returns a new ExposedAttribute instance in the SDK and on the server.
         * The new ExposedAttribute will be automatically stored in the 'children' property
         * of the parent mappings.Element element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.6.0 and higher
         */
        static createInElementUnderChildren(container) {
            internal.createInVersionCheck(container.model, ExposedAttribute.structureTypeName, { start: "7.6.0" });
            return internal.instancehelpers.createElement(container, ExposedAttribute, "children", true);
        }
        /**
         * Creates and returns a new ExposedAttribute instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ExposedAttribute);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ExposedAttribute.structureTypeName = "MessageDefinitions$ExposedAttribute";
    ExposedAttribute.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.6.0",
        properties: {
            attribute: {
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    messagedefinitions.ExposedAttribute = ExposedAttribute;
    /**
     * In version 7.6.0: introduced
     */
    class ExposedEntity extends ExposedEntityBase {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new ExposedEntity() cannot be invoked directly, please use 'model.messagedefinitions.createExposedEntity()'");
            }
        }
        get containerAsJsonStructure() {
            return super.getContainerAs(jsonstructures_1.jsonstructures.JsonStructure);
        }
        get containerAsElement() {
            return super.getContainerAs(mappings_1.mappings.Element);
        }
        get containerAsEntityMessageDefinition() {
            return super.getContainerAs(EntityMessageDefinition);
        }
        /**
         * Creates and returns a new ExposedEntity instance in the SDK and on the server.
         * The new ExposedEntity will be automatically stored in the 'elements' property
         * of the parent jsonstructures.JsonStructure element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.6.0 and higher
         */
        static createInJsonStructureUnderElements(container) {
            internal.createInVersionCheck(container.model, ExposedEntity.structureTypeName, { start: "7.6.0" });
            return internal.instancehelpers.createElement(container, ExposedEntity, "elements", true);
        }
        /**
         * Creates and returns a new ExposedEntity instance in the SDK and on the server.
         * The new ExposedEntity will be automatically stored in the 'children' property
         * of the parent mappings.Element element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.6.0 and higher
         */
        static createInElementUnderChildren(container) {
            internal.createInVersionCheck(container.model, ExposedEntity.structureTypeName, { start: "7.6.0" });
            return internal.instancehelpers.createElement(container, ExposedEntity, "children", true);
        }
        /**
         * Creates and returns a new ExposedEntity instance in the SDK and on the server.
         * The new ExposedEntity will be automatically stored in the 'exposedEntity' property
         * of the parent EntityMessageDefinition element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.6.0 and higher
         */
        static createInEntityMessageDefinitionUnderExposedEntity(container) {
            internal.createInVersionCheck(container.model, ExposedEntity.structureTypeName, { start: "7.6.0" });
            return internal.instancehelpers.createElement(container, ExposedEntity, "exposedEntity", false);
        }
        /**
         * Creates and returns a new ExposedEntity instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ExposedEntity);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ExposedEntity.structureTypeName = "MessageDefinitions$ExposedEntity";
    ExposedEntity.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.6.0"
    }, internal.StructureType.Element);
    messagedefinitions.ExposedEntity = ExposedEntity;
    /**
     * See: {@link https://docs.mendix.com/refguide/message-definitions relevant section in reference guide}
     *
     * In version 7.6.0: introduced
     */
    class MessageDefinitionCollection extends projects_1.projects.Document {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            /** @internal */
            this.__messageDefinitions = new internal.PartListProperty(MessageDefinitionCollection, this, "messageDefinitions", []);
            this._containmentName = "documents";
        }
        get containerAsFolderBase() {
            return super.getContainerAs(projects_1.projects.FolderBase);
        }
        get messageDefinitions() {
            return this.__messageDefinitions.get();
        }
        /**
         * Creates a new MessageDefinitionCollection unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container) {
            return internal.instancehelpers.createUnit(container, MessageDefinitionCollection);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    MessageDefinitionCollection.structureTypeName = "MessageDefinitions$MessageDefinitionCollection";
    MessageDefinitionCollection.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.6.0",
        properties: {
            messageDefinitions: {
                public: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.ModelUnit);
    messagedefinitions.MessageDefinitionCollection = MessageDefinitionCollection;
})(messagedefinitions = exports.messagedefinitions || (exports.messagedefinitions = {}));
const jsonstructures_1 = require("./jsonstructures");
//# sourceMappingURL=messagedefinitions.js.map