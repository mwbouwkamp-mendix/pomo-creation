"use strict";
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.xmlschemas = exports.StructureVersionInfo = void 0;
const internal = require("../sdk/internal");
exports.StructureVersionInfo = internal.StructureVersionInfo;
const projects_1 = require("./projects");
const mappings_1 = require("./mappings");
var xmlschemas;
(function (xmlschemas) {
    class XmlPrimitiveType extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "xmlschemas.XmlPrimitiveType";
        }
    }
    XmlPrimitiveType.Unknown = new XmlPrimitiveType("Unknown", {});
    XmlPrimitiveType.Boolean = new XmlPrimitiveType("Boolean", {});
    XmlPrimitiveType.Date = new XmlPrimitiveType("Date", {});
    XmlPrimitiveType.Time = new XmlPrimitiveType("Time", {});
    XmlPrimitiveType.DateTime = new XmlPrimitiveType("DateTime", {});
    XmlPrimitiveType.Decimal = new XmlPrimitiveType("Decimal", {});
    XmlPrimitiveType.Float = new XmlPrimitiveType("Float", {});
    XmlPrimitiveType.Integer = new XmlPrimitiveType("Integer", {});
    XmlPrimitiveType.Long = new XmlPrimitiveType("Long", {
        introduced: "6.2.0"
    });
    XmlPrimitiveType.Binary = new XmlPrimitiveType("Binary", {});
    XmlPrimitiveType.String = new XmlPrimitiveType("String", {});
    XmlPrimitiveType.AnyType = new XmlPrimitiveType("AnyType", {});
    xmlschemas.XmlPrimitiveType = XmlPrimitiveType;
    class MxSchema extends projects_1.projects.Document {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
        }
        get containerAsFolderBase() {
            return super.getContainerAs(projects_1.projects.FolderBase);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    MxSchema.structureTypeName = "XmlSchemas$MxSchema";
    MxSchema.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.ModelUnit);
    xmlschemas.MxSchema = MxSchema;
    /**
     * In version 6.6.0: introduced
     */
    class XmlElement extends mappings_1.mappings.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new XmlElement() cannot be invoked directly, please use 'model.xmlschemas.createXmlElement()'");
            }
        }
        get containerAsJsonStructure() {
            return super.getContainerAs(jsonstructures_1.jsonstructures.JsonStructure);
        }
        get containerAsElement() {
            return super.getContainerAs(mappings_1.mappings.Element);
        }
        /**
         * Creates and returns a new XmlElement instance in the SDK and on the server.
         * The new XmlElement will be automatically stored in the 'elements' property
         * of the parent jsonstructures.JsonStructure element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 and higher
         */
        static createInJsonStructureUnderElements(container) {
            internal.createInVersionCheck(container.model, XmlElement.structureTypeName, { start: "6.6.0" });
            return internal.instancehelpers.createElement(container, XmlElement, "elements", true);
        }
        /**
         * Creates and returns a new XmlElement instance in the SDK and on the server.
         * The new XmlElement will be automatically stored in the 'children' property
         * of the parent mappings.Element element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 and higher
         */
        static createInElementUnderChildren(container) {
            internal.createInVersionCheck(container.model, XmlElement.structureTypeName, { start: "6.6.0" });
            return internal.instancehelpers.createElement(container, XmlElement, "children", true);
        }
        /**
         * Creates and returns a new XmlElement instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, XmlElement);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    XmlElement.structureTypeName = "XmlSchemas$XmlElement";
    XmlElement.versionInfo = new exports.StructureVersionInfo({
        introduced: "6.6.0"
    }, internal.StructureType.Element);
    xmlschemas.XmlElement = XmlElement;
    /**
     * See: {@link https://docs.mendix.com/refguide/xml-schemas relevant section in reference guide}
     */
    class XmlSchema extends MxSchema {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            /** @internal */
            this.__entries = new internal.PartListProperty(XmlSchema, this, "entries", []);
            /** @internal */
            this.__filePath = new internal.PrimitiveProperty(XmlSchema, this, "filePath", "", internal.PrimitiveTypeEnum.String);
            this._containmentName = "documents";
        }
        get containerAsFolderBase() {
            return super.getContainerAs(projects_1.projects.FolderBase);
        }
        get entries() {
            return this.__entries.get();
        }
        get filePath() {
            return this.__filePath.get();
        }
        set filePath(newValue) {
            this.__filePath.set(newValue);
        }
        /**
         * Creates a new XmlSchema unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container) {
            return internal.instancehelpers.createUnit(container, XmlSchema);
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
    XmlSchema.structureTypeName = "XmlSchemas$XmlSchema";
    XmlSchema.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.ModelUnit);
    xmlschemas.XmlSchema = XmlSchema;
    class XmlSchemaEntry extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__targetNamespace = new internal.PrimitiveProperty(XmlSchemaEntry, this, "targetNamespace", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__location = new internal.PrimitiveProperty(XmlSchemaEntry, this, "location", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__contents = new internal.PrimitiveProperty(XmlSchemaEntry, this, "contents", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__localizedLocationFormat = new internal.PrimitiveProperty(XmlSchemaEntry, this, "localizedLocationFormat", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__localizedContentsFormat = new internal.PrimitiveProperty(XmlSchemaEntry, this, "localizedContentsFormat", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new XmlSchemaEntry() cannot be invoked directly, please use 'model.xmlschemas.createXmlSchemaEntry()'");
            }
        }
        get containerAsWsdlDescription() {
            return super.getContainerAs(webservices_1.webservices.WsdlDescription);
        }
        get containerAsXmlSchema() {
            return super.getContainerAs(XmlSchema);
        }
        get targetNamespace() {
            return this.__targetNamespace.get();
        }
        set targetNamespace(newValue) {
            this.__targetNamespace.set(newValue);
        }
        get location() {
            return this.__location.get();
        }
        set location(newValue) {
            this.__location.set(newValue);
        }
        get contents() {
            return this.__contents.get();
        }
        set contents(newValue) {
            this.__contents.set(newValue);
        }
        get localizedLocationFormat() {
            return this.__localizedLocationFormat.get();
        }
        set localizedLocationFormat(newValue) {
            this.__localizedLocationFormat.set(newValue);
        }
        get localizedContentsFormat() {
            return this.__localizedContentsFormat.get();
        }
        set localizedContentsFormat(newValue) {
            this.__localizedContentsFormat.set(newValue);
        }
        /**
         * Creates and returns a new XmlSchemaEntry instance in the SDK and on the server.
         * The new XmlSchemaEntry will be automatically stored in the 'schemaEntries' property
         * of the parent webservices.WsdlDescription element passed as argument.
         */
        static createInWsdlDescriptionUnderSchemaEntries(container) {
            return internal.instancehelpers.createElement(container, XmlSchemaEntry, "schemaEntries", true);
        }
        /**
         * Creates and returns a new XmlSchemaEntry instance in the SDK and on the server.
         * The new XmlSchemaEntry will be automatically stored in the 'entries' property
         * of the parent XmlSchema element passed as argument.
         */
        static createInXmlSchemaUnderEntries(container) {
            return internal.instancehelpers.createElement(container, XmlSchemaEntry, "entries", true);
        }
        /**
         * Creates and returns a new XmlSchemaEntry instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, XmlSchemaEntry);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    XmlSchemaEntry.structureTypeName = "XmlSchemas$XmlSchemaEntry";
    XmlSchemaEntry.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    xmlschemas.XmlSchemaEntry = XmlSchemaEntry;
})(xmlschemas = exports.xmlschemas || (exports.xmlschemas = {}));
const jsonstructures_1 = require("./jsonstructures");
const webservices_1 = require("./webservices");
//# sourceMappingURL=xmlschemas.js.map