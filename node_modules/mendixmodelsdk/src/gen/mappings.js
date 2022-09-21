"use strict";
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.mappings = exports.StructureVersionInfo = void 0;
const internal = require("../sdk/internal");
exports.StructureVersionInfo = internal.StructureVersionInfo;
const projects_1 = require("./projects");
var mappings;
(function (mappings) {
    class ElementType extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "mappings.ElementType";
        }
    }
    ElementType.Undefined = new ElementType("Undefined", {});
    ElementType.Inheritance = new ElementType("Inheritance", {});
    ElementType.Choice = new ElementType("Choice", {});
    ElementType.Object = new ElementType("Object", {});
    ElementType.Value = new ElementType("Value", {});
    ElementType.Sequence = new ElementType("Sequence", {});
    ElementType.All = new ElementType("All", {});
    ElementType.NamedArray = new ElementType("NamedArray", {
        introduced: "6.4.0",
        deleted: "6.6.0",
        deletionMessage: null
    });
    ElementType.Array = new ElementType("Array", {
        introduced: "6.6.0"
    });
    ElementType.Wrapper = new ElementType("Wrapper", {
        introduced: "6.4.0"
    });
    mappings.ElementType = ElementType;
    class ObjectHandlingBackupEnum extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "mappings.ObjectHandlingBackupEnum";
        }
    }
    ObjectHandlingBackupEnum.Create = new ObjectHandlingBackupEnum("Create", {});
    ObjectHandlingBackupEnum.Ignore = new ObjectHandlingBackupEnum("Ignore", {});
    ObjectHandlingBackupEnum.Error = new ObjectHandlingBackupEnum("Error", {});
    mappings.ObjectHandlingBackupEnum = ObjectHandlingBackupEnum;
    class ObjectHandlingEnum extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "mappings.ObjectHandlingEnum";
        }
    }
    ObjectHandlingEnum.Parameter = new ObjectHandlingEnum("Parameter", {
        introduced: "7.5.0"
    });
    ObjectHandlingEnum.Create = new ObjectHandlingEnum("Create", {});
    ObjectHandlingEnum.Find = new ObjectHandlingEnum("Find", {});
    ObjectHandlingEnum.Custom = new ObjectHandlingEnum("Custom", {});
    mappings.ObjectHandlingEnum = ObjectHandlingEnum;
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `Mappings`.
     */
    /**
     * In version 6.6.0: introduced
     */
    class Element extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__elementType = new internal.EnumProperty(Element, this, "elementType", ElementType.Value, ElementType);
            /** @internal */
            this.__primitiveType = new internal.EnumProperty(Element, this, "primitiveType", xmlschemas_1.xmlschemas.XmlPrimitiveType.Unknown, xmlschemas_1.xmlschemas.XmlPrimitiveType);
            /** @internal */
            this.__path = new internal.PrimitiveProperty(Element, this, "path", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__isDefaultType = new internal.PrimitiveProperty(Element, this, "isDefaultType", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__minOccurs = new internal.PrimitiveProperty(Element, this, "minOccurs", 1, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__maxOccurs = new internal.PrimitiveProperty(Element, this, "maxOccurs", 1, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__nillable = new internal.PrimitiveProperty(Element, this, "nillable", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__exposedName = new internal.PrimitiveProperty(Element, this, "exposedName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__exposedItemName = new internal.PrimitiveProperty(Element, this, "exposedItemName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__maxLength = new internal.PrimitiveProperty(Element, this, "maxLength", -1, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__fractionDigits = new internal.PrimitiveProperty(Element, this, "fractionDigits", -1, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__totalDigits = new internal.PrimitiveProperty(Element, this, "totalDigits", -1, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__errorMessage = new internal.PrimitiveProperty(Element, this, "errorMessage", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__warningMessage = new internal.PrimitiveProperty(Element, this, "warningMessage", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__children = new internal.PartListProperty(Element, this, "children", []);
            if (arguments.length < 4) {
                throw new Error("new Element() cannot be invoked directly, please use 'model.mappings.createElement()'");
            }
        }
        get containerAsJsonStructure() {
            return super.getContainerAs(jsonstructures_1.jsonstructures.JsonStructure);
        }
        get containerAsElement() {
            return super.getContainerAs(Element);
        }
        get containerAsEntityMessageDefinition() {
            return super.getContainerAs(messagedefinitions_1.messagedefinitions.EntityMessageDefinition);
        }
        get elementType() {
            return this.__elementType.get();
        }
        set elementType(newValue) {
            this.__elementType.set(newValue);
        }
        get primitiveType() {
            return this.__primitiveType.get();
        }
        set primitiveType(newValue) {
            this.__primitiveType.set(newValue);
        }
        /**
         * The value of this property is conceptually of type mappings.ElementPath.
         */
        get path() {
            return this.__path.get();
        }
        set path(newValue) {
            this.__path.set(newValue);
        }
        get isDefaultType() {
            return this.__isDefaultType.get();
        }
        set isDefaultType(newValue) {
            this.__isDefaultType.set(newValue);
        }
        get minOccurs() {
            return this.__minOccurs.get();
        }
        set minOccurs(newValue) {
            this.__minOccurs.set(newValue);
        }
        get maxOccurs() {
            return this.__maxOccurs.get();
        }
        set maxOccurs(newValue) {
            this.__maxOccurs.set(newValue);
        }
        get nillable() {
            return this.__nillable.get();
        }
        set nillable(newValue) {
            this.__nillable.set(newValue);
        }
        get exposedName() {
            return this.__exposedName.get();
        }
        set exposedName(newValue) {
            this.__exposedName.set(newValue);
        }
        /**
         * In version 7.6.0: introduced
         */
        get exposedItemName() {
            return this.__exposedItemName.get();
        }
        set exposedItemName(newValue) {
            this.__exposedItemName.set(newValue);
        }
        get maxLength() {
            return this.__maxLength.get();
        }
        set maxLength(newValue) {
            this.__maxLength.set(newValue);
        }
        get fractionDigits() {
            return this.__fractionDigits.get();
        }
        set fractionDigits(newValue) {
            this.__fractionDigits.set(newValue);
        }
        get totalDigits() {
            return this.__totalDigits.get();
        }
        set totalDigits(newValue) {
            this.__totalDigits.set(newValue);
        }
        get errorMessage() {
            return this.__errorMessage.get();
        }
        set errorMessage(newValue) {
            this.__errorMessage.set(newValue);
        }
        get warningMessage() {
            return this.__warningMessage.get();
        }
        set warningMessage(newValue) {
            this.__warningMessage.set(newValue);
        }
        get children() {
            return this.__children.get();
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.elementType = ElementType.Value;
            this.fractionDigits = -1;
            this.maxLength = -1;
            this.maxOccurs = 1;
            this.minOccurs = 1;
            this.nillable = false;
            this.primitiveType = xmlschemas_1.xmlschemas.XmlPrimitiveType.Unknown;
            this.totalDigits = -1;
        }
    }
    Element.structureTypeName = "Mappings$Element";
    Element.versionInfo = new exports.StructureVersionInfo({
        introduced: "6.6.0",
        properties: {
            exposedItemName: {
                introduced: "7.6.0"
            }
        }
    }, internal.StructureType.Element);
    mappings.Element = Element;
    /**
     * See: {@link https://docs.mendix.com/refguide/mapping-documents relevant section in reference guide}
     */
    class MappingDocument extends projects_1.projects.Document {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            /** @internal */
            this.__rootMappingElements = new internal.PartListProperty(MappingDocument, this, "rootMappingElements", []);
            /** @internal */
            this.__xmlSchema = new internal.ByNameReferenceProperty(MappingDocument, this, "xmlSchema", null, "XmlSchemas$XmlSchema");
            /** @internal */
            this.__jsonStructure = new internal.ByNameReferenceProperty(MappingDocument, this, "jsonStructure", null, "JsonStructures$JsonStructure");
            /** @internal */
            this.__rootElementName = new internal.PrimitiveProperty(MappingDocument, this, "rootElementName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__importedWebService = new internal.ByNameReferenceProperty(MappingDocument, this, "importedWebService", null, "WebServices$ImportedWebService");
            /** @internal */
            this.__serviceName = new internal.PrimitiveProperty(MappingDocument, this, "serviceName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__operationName = new internal.PrimitiveProperty(MappingDocument, this, "operationName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__messageDefinition = new internal.ByNameReferenceProperty(MappingDocument, this, "messageDefinition", null, "MessageDefinitions$MessageDefinition");
            /** @internal */
            this.__publicName = new internal.PrimitiveProperty(MappingDocument, this, "publicName", "", internal.PrimitiveTypeEnum.String);
        }
        get containerAsFolderBase() {
            return super.getContainerAs(projects_1.projects.FolderBase);
        }
        get rootMappingElements() {
            return this.__rootMappingElements.get();
        }
        get xmlSchema() {
            return this.__xmlSchema.get();
        }
        set xmlSchema(newValue) {
            this.__xmlSchema.set(newValue);
        }
        get xmlSchemaQualifiedName() {
            return this.__xmlSchema.qualifiedName();
        }
        /**
         * In version 6.4.0: introduced
         */
        get jsonStructure() {
            return this.__jsonStructure.get();
        }
        set jsonStructure(newValue) {
            this.__jsonStructure.set(newValue);
        }
        get jsonStructureQualifiedName() {
            return this.__jsonStructure.qualifiedName();
        }
        get rootElementName() {
            return this.__rootElementName.get();
        }
        set rootElementName(newValue) {
            this.__rootElementName.set(newValue);
        }
        get importedWebService() {
            return this.__importedWebService.get();
        }
        set importedWebService(newValue) {
            this.__importedWebService.set(newValue);
        }
        get importedWebServiceQualifiedName() {
            return this.__importedWebService.qualifiedName();
        }
        get serviceName() {
            return this.__serviceName.get();
        }
        set serviceName(newValue) {
            this.__serviceName.set(newValue);
        }
        get operationName() {
            return this.__operationName.get();
        }
        set operationName(newValue) {
            this.__operationName.set(newValue);
        }
        /**
         * In version 7.6.0: introduced
         */
        get messageDefinition() {
            return this.__messageDefinition.get();
        }
        set messageDefinition(newValue) {
            this.__messageDefinition.set(newValue);
        }
        get messageDefinitionQualifiedName() {
            return this.__messageDefinition.qualifiedName();
        }
        /**
         * In version 7.14.0: introduced
         */
        get publicName() {
            return this.__publicName.get();
        }
        set publicName(newValue) {
            this.__publicName.set(newValue);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    MappingDocument.structureTypeName = "Mappings$MappingDocument";
    MappingDocument.versionInfo = new exports.StructureVersionInfo({
        properties: {
            jsonStructure: {
                introduced: "6.4.0"
            },
            messageDefinition: {
                introduced: "7.6.0"
            },
            publicName: {
                introduced: "7.14.0"
            }
        }
    }, internal.StructureType.ModelUnit);
    mappings.MappingDocument = MappingDocument;
    class MappingElement extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__documentation = new internal.PrimitiveProperty(MappingElement, this, "documentation", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__elementType = new internal.EnumProperty(MappingElement, this, "elementType", ElementType.Undefined, ElementType);
            /** @internal */
            this.__path = new internal.PrimitiveProperty(MappingElement, this, "path", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__jsonPath = new internal.PrimitiveProperty(MappingElement, this, "jsonPath", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__xmlPath = new internal.PrimitiveProperty(MappingElement, this, "xmlPath", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__minOccurs = new internal.PrimitiveProperty(MappingElement, this, "minOccurs", 0, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__maxOccurs = new internal.PrimitiveProperty(MappingElement, this, "maxOccurs", 0, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__nillable = new internal.PrimitiveProperty(MappingElement, this, "nillable", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__exposedName = new internal.PrimitiveProperty(MappingElement, this, "exposedName", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new MappingElement() cannot be invoked directly, please use 'model.mappings.createMappingElement()'");
            }
        }
        get containerAsMappingDocument() {
            return super.getContainerAs(MappingDocument);
        }
        get containerAsObjectMappingElement() {
            return super.getContainerAs(ObjectMappingElement);
        }
        get documentation() {
            return this.__documentation.get();
        }
        set documentation(newValue) {
            this.__documentation.set(newValue);
        }
        get elementType() {
            return this.__elementType.get();
        }
        set elementType(newValue) {
            this.__elementType.set(newValue);
        }
        /**
         * The value of this property is conceptually of type mappings.ElementPath.
         *
         * In version 7.6.0: deleted
         */
        get path() {
            return this.__path.get();
        }
        set path(newValue) {
            this.__path.set(newValue);
        }
        /**
         * The value of this property is conceptually of type mappings.ElementPath.
         *
         * In version 7.6.0: introduced
         */
        get jsonPath() {
            return this.__jsonPath.get();
        }
        set jsonPath(newValue) {
            this.__jsonPath.set(newValue);
        }
        /**
         * The value of this property is conceptually of type mappings.ElementPath.
         *
         * In version 7.6.0: introduced
         */
        get xmlPath() {
            return this.__xmlPath.get();
        }
        set xmlPath(newValue) {
            this.__xmlPath.set(newValue);
        }
        get minOccurs() {
            return this.__minOccurs.get();
        }
        set minOccurs(newValue) {
            this.__minOccurs.set(newValue);
        }
        get maxOccurs() {
            return this.__maxOccurs.get();
        }
        set maxOccurs(newValue) {
            this.__maxOccurs.set(newValue);
        }
        get nillable() {
            return this.__nillable.get();
        }
        set nillable(newValue) {
            this.__nillable.set(newValue);
        }
        /**
         * In version 6.6.0: introduced
         */
        get exposedName() {
            return this.__exposedName.get();
        }
        set exposedName(newValue) {
            this.__exposedName.set(newValue);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.elementType = ElementType.Undefined;
        }
    }
    MappingElement.structureTypeName = "Mappings$MappingElement";
    MappingElement.versionInfo = new exports.StructureVersionInfo({
        properties: {
            path: {
                deleted: "7.6.0",
                deletionMessage: null
            },
            jsonPath: {
                introduced: "7.6.0"
            },
            xmlPath: {
                introduced: "7.6.0"
            },
            exposedName: {
                introduced: "6.6.0"
            }
        }
    }, internal.StructureType.Element);
    mappings.MappingElement = MappingElement;
    class MappingMicroflowCall extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__microflow = new internal.ByNameReferenceProperty(MappingMicroflowCall, this, "microflow", null, "Microflows$Microflow");
            /** @internal */
            this.__parameterMappings = new internal.PartListProperty(MappingMicroflowCall, this, "parameterMappings", []);
            if (arguments.length < 4) {
                throw new Error("new MappingMicroflowCall() cannot be invoked directly, please use 'model.mappings.createMappingMicroflowCall()'");
            }
        }
        get containerAsObjectMappingElement() {
            return super.getContainerAs(ObjectMappingElement);
        }
        get microflow() {
            return this.__microflow.get();
        }
        set microflow(newValue) {
            this.__microflow.set(newValue);
        }
        get microflowQualifiedName() {
            return this.__microflow.qualifiedName();
        }
        get parameterMappings() {
            return this.__parameterMappings.get();
        }
        /**
         * Creates and returns a new MappingMicroflowCall instance in the SDK and on the server.
         * The new MappingMicroflowCall will be automatically stored in the 'mappingMicroflowCall' property
         * of the parent ObjectMappingElement element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, MappingMicroflowCall, "mappingMicroflowCall", false);
        }
        /**
         * Creates and returns a new MappingMicroflowCall instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, MappingMicroflowCall);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    MappingMicroflowCall.structureTypeName = "Mappings$MappingMicroflowCall";
    MappingMicroflowCall.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    mappings.MappingMicroflowCall = MappingMicroflowCall;
    class MappingMicroflowParameter extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__parameter = new internal.ByNameReferenceProperty(MappingMicroflowParameter, this, "parameter", null, "Microflows$MicroflowParameter");
            /** @internal */
            this.__levelOfParent = new internal.PrimitiveProperty(MappingMicroflowParameter, this, "levelOfParent", -1, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__valueElementPath = new internal.PrimitiveProperty(MappingMicroflowParameter, this, "valueElementPath", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__jsonValueElementPath = new internal.PrimitiveProperty(MappingMicroflowParameter, this, "jsonValueElementPath", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__xmlValueElementPath = new internal.PrimitiveProperty(MappingMicroflowParameter, this, "xmlValueElementPath", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new MappingMicroflowParameter() cannot be invoked directly, please use 'model.mappings.createMappingMicroflowParameter()'");
            }
        }
        get containerAsMappingMicroflowCall() {
            return super.getContainerAs(MappingMicroflowCall);
        }
        get parameter() {
            return this.__parameter.get();
        }
        set parameter(newValue) {
            this.__parameter.set(newValue);
        }
        get parameterQualifiedName() {
            return this.__parameter.qualifiedName();
        }
        get levelOfParent() {
            return this.__levelOfParent.get();
        }
        set levelOfParent(newValue) {
            this.__levelOfParent.set(newValue);
        }
        /**
         * The value of this property is conceptually of type mappings.ElementPath.
         *
         * In version 7.6.0: deleted
         */
        get valueElementPath() {
            return this.__valueElementPath.get();
        }
        set valueElementPath(newValue) {
            this.__valueElementPath.set(newValue);
        }
        /**
         * The value of this property is conceptually of type mappings.ElementPath.
         *
         * In version 7.6.0: introduced
         */
        get jsonValueElementPath() {
            return this.__jsonValueElementPath.get();
        }
        set jsonValueElementPath(newValue) {
            this.__jsonValueElementPath.set(newValue);
        }
        /**
         * The value of this property is conceptually of type mappings.ElementPath.
         *
         * In version 7.6.0: introduced
         */
        get xmlValueElementPath() {
            return this.__xmlValueElementPath.get();
        }
        set xmlValueElementPath(newValue) {
            this.__xmlValueElementPath.set(newValue);
        }
        /**
         * Creates and returns a new MappingMicroflowParameter instance in the SDK and on the server.
         * The new MappingMicroflowParameter will be automatically stored in the 'parameterMappings' property
         * of the parent MappingMicroflowCall element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, MappingMicroflowParameter, "parameterMappings", true);
        }
        /**
         * Creates and returns a new MappingMicroflowParameter instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, MappingMicroflowParameter);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.levelOfParent = -1;
        }
    }
    MappingMicroflowParameter.structureTypeName = "Mappings$MappingMicroflowParameter";
    MappingMicroflowParameter.versionInfo = new exports.StructureVersionInfo({
        properties: {
            valueElementPath: {
                deleted: "7.6.0",
                deletionMessage: null
            },
            jsonValueElementPath: {
                introduced: "7.6.0"
            },
            xmlValueElementPath: {
                introduced: "7.6.0"
            }
        }
    }, internal.StructureType.Element);
    mappings.MappingMicroflowParameter = MappingMicroflowParameter;
    class ObjectMappingElement extends MappingElement {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__mappingMicroflowCall = new internal.PartProperty(ObjectMappingElement, this, "mappingMicroflowCall", null, false);
            /** @internal */
            this.__children = new internal.PartListProperty(ObjectMappingElement, this, "children", []);
            /** @internal */
            this.__entity = new internal.ByNameReferenceProperty(ObjectMappingElement, this, "entity", null, "DomainModels$Entity");
            /** @internal */
            this.__association = new internal.ByNameReferenceProperty(ObjectMappingElement, this, "association", null, "DomainModels$AssociationBase");
            /** @internal */
            this.__objectHandling = new internal.EnumProperty(ObjectMappingElement, this, "objectHandling", ObjectHandlingEnum.Create, ObjectHandlingEnum);
            /** @internal */
            this.__objectHandlingBackup = new internal.EnumProperty(ObjectMappingElement, this, "objectHandlingBackup", ObjectHandlingBackupEnum.Create, ObjectHandlingBackupEnum);
            /** @internal */
            this.__objectHandlingBackupAllowOverride = new internal.PrimitiveProperty(ObjectMappingElement, this, "objectHandlingBackupAllowOverride", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__isDefaultType = new internal.PrimitiveProperty(ObjectMappingElement, this, "isDefaultType", false, internal.PrimitiveTypeEnum.Boolean);
            if (arguments.length < 4) {
                throw new Error("new ObjectMappingElement() cannot be invoked directly, please use 'model.mappings.createObjectMappingElement()'");
            }
        }
        get containerAsMappingDocument() {
            return super.getContainerAs(MappingDocument);
        }
        get containerAsObjectMappingElement() {
            return super.getContainerAs(ObjectMappingElement);
        }
        get mappingMicroflowCall() {
            return this.__mappingMicroflowCall.get();
        }
        set mappingMicroflowCall(newValue) {
            this.__mappingMicroflowCall.set(newValue);
        }
        get children() {
            return this.__children.get();
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
        get association() {
            return this.__association.get();
        }
        set association(newValue) {
            this.__association.set(newValue);
        }
        get associationQualifiedName() {
            return this.__association.qualifiedName();
        }
        get objectHandling() {
            return this.__objectHandling.get();
        }
        set objectHandling(newValue) {
            this.__objectHandling.set(newValue);
        }
        get objectHandlingBackup() {
            return this.__objectHandlingBackup.get();
        }
        set objectHandlingBackup(newValue) {
            this.__objectHandlingBackup.set(newValue);
        }
        /**
         * In version 7.17.0: introduced
         */
        get objectHandlingBackupAllowOverride() {
            return this.__objectHandlingBackupAllowOverride.get();
        }
        set objectHandlingBackupAllowOverride(newValue) {
            this.__objectHandlingBackupAllowOverride.set(newValue);
        }
        /**
         * In version 6.4.0: introduced
         */
        get isDefaultType() {
            return this.__isDefaultType.get();
        }
        set isDefaultType(newValue) {
            this.__isDefaultType.set(newValue);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.objectHandling = ObjectHandlingEnum.Create;
            this.objectHandlingBackup = ObjectHandlingBackupEnum.Create;
            if (this.__objectHandlingBackupAllowOverride.isAvailable) {
                this.objectHandlingBackupAllowOverride = false;
            }
        }
    }
    ObjectMappingElement.structureTypeName = "Mappings$ObjectMappingElement";
    ObjectMappingElement.versionInfo = new exports.StructureVersionInfo({
        properties: {
            objectHandlingBackupAllowOverride: {
                introduced: "7.17.0"
            },
            isDefaultType: {
                introduced: "6.4.0"
            }
        }
    }, internal.StructureType.Element);
    mappings.ObjectMappingElement = ObjectMappingElement;
    class ValueMappingElement extends MappingElement {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__xmlDataType = new internal.PrimitiveProperty(ValueMappingElement, this, "xmlDataType", "Unknown", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__type = new internal.PartProperty(ValueMappingElement, this, "type", null, true);
            /** @internal */
            this.__isKey = new internal.PrimitiveProperty(ValueMappingElement, this, "isKey", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__isXmlAttribute = new internal.PrimitiveProperty(ValueMappingElement, this, "isXmlAttribute", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__xmlPrimitiveType = new internal.EnumProperty(ValueMappingElement, this, "xmlPrimitiveType", xmlschemas_1.xmlschemas.XmlPrimitiveType.Unknown, xmlschemas_1.xmlschemas.XmlPrimitiveType);
            /** @internal */
            this.__isContent = new internal.PrimitiveProperty(ValueMappingElement, this, "isContent", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__attribute = new internal.ByNameReferenceProperty(ValueMappingElement, this, "attribute", null, "DomainModels$Attribute");
            /** @internal */
            this.__converter = new internal.ByNameReferenceProperty(ValueMappingElement, this, "converter", null, "Microflows$Microflow");
            /** @internal */
            this.__expectedContentTypes = new internal.PrimitiveProperty(ValueMappingElement, this, "expectedContentTypes", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__maxLength = new internal.PrimitiveProperty(ValueMappingElement, this, "maxLength", -1, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__fractionDigits = new internal.PrimitiveProperty(ValueMappingElement, this, "fractionDigits", -1, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__totalDigits = new internal.PrimitiveProperty(ValueMappingElement, this, "totalDigits", -1, internal.PrimitiveTypeEnum.Integer);
            if (arguments.length < 4) {
                throw new Error("new ValueMappingElement() cannot be invoked directly, please use 'model.mappings.createValueMappingElement()'");
            }
        }
        get containerAsObjectMappingElement() {
            return super.getContainerAs(ObjectMappingElement);
        }
        /**
         * The value of this property is conceptually of type dataTypes.LegacyDataType.
         *
         * In version 7.9.0: deleted
         */
        get xmlDataType() {
            return this.__xmlDataType.get();
        }
        set xmlDataType(newValue) {
            this.__xmlDataType.set(newValue);
        }
        /**
         * In version 7.9.0: introduced
         */
        get type() {
            return this.__type.get();
        }
        set type(newValue) {
            this.__type.set(newValue);
        }
        get isKey() {
            return this.__isKey.get();
        }
        set isKey(newValue) {
            this.__isKey.set(newValue);
        }
        get isXmlAttribute() {
            return this.__isXmlAttribute.get();
        }
        set isXmlAttribute(newValue) {
            this.__isXmlAttribute.set(newValue);
        }
        /**
         * In version 6.1.0: introduced
         */
        get xmlPrimitiveType() {
            return this.__xmlPrimitiveType.get();
        }
        set xmlPrimitiveType(newValue) {
            this.__xmlPrimitiveType.set(newValue);
        }
        get isContent() {
            return this.__isContent.get();
        }
        set isContent(newValue) {
            this.__isContent.set(newValue);
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
        get converter() {
            return this.__converter.get();
        }
        set converter(newValue) {
            this.__converter.set(newValue);
        }
        get converterQualifiedName() {
            return this.__converter.qualifiedName();
        }
        /**
         * In version 6.4.1: deleted
         */
        get expectedContentTypes() {
            return this.__expectedContentTypes.get();
        }
        set expectedContentTypes(newValue) {
            this.__expectedContentTypes.set(newValue);
        }
        get maxLength() {
            return this.__maxLength.get();
        }
        set maxLength(newValue) {
            this.__maxLength.set(newValue);
        }
        get fractionDigits() {
            return this.__fractionDigits.get();
        }
        set fractionDigits(newValue) {
            this.__fractionDigits.set(newValue);
        }
        get totalDigits() {
            return this.__totalDigits.get();
        }
        set totalDigits(newValue) {
            this.__totalDigits.set(newValue);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.fractionDigits = -1;
            this.maxLength = -1;
            this.totalDigits = -1;
            if (this.__type.isAvailable) {
                this.type = datatypes_1.datatypes.UnknownType.create(this.model);
            }
            if (this.__xmlDataType.isAvailable) {
                this.xmlDataType = "Unknown";
            }
            if (this.__xmlPrimitiveType.isAvailable) {
                this.xmlPrimitiveType = xmlschemas_1.xmlschemas.XmlPrimitiveType.Unknown;
            }
        }
    }
    ValueMappingElement.structureTypeName = "Mappings$ValueMappingElement";
    ValueMappingElement.versionInfo = new exports.StructureVersionInfo({
        properties: {
            xmlDataType: {
                deleted: "7.9.0",
                deletionMessage: "Use property 'type' instead"
            },
            type: {
                introduced: "7.9.0",
                required: {
                    currentValue: true
                }
            },
            xmlPrimitiveType: {
                introduced: "6.1.0"
            },
            expectedContentTypes: {
                deleted: "6.4.1",
                deletionMessage: null
            }
        }
    }, internal.StructureType.Element);
    mappings.ValueMappingElement = ValueMappingElement;
})(mappings = exports.mappings || (exports.mappings = {}));
const datatypes_1 = require("./datatypes");
const jsonstructures_1 = require("./jsonstructures");
const messagedefinitions_1 = require("./messagedefinitions");
const xmlschemas_1 = require("./xmlschemas");
//# sourceMappingURL=mappings.js.map