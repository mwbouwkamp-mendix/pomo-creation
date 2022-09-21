"use strict";
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.enumerations = exports.StructureVersionInfo = void 0;
const internal = require("../sdk/internal");
exports.StructureVersionInfo = internal.StructureVersionInfo;
const projects_1 = require("./projects");
var enumerations;
(function (enumerations) {
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `Enumerations`.
     */
    class Condition extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__attributeValue = new internal.PrimitiveProperty(Condition, this, "attributeValue", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__editableVisible = new internal.PrimitiveProperty(Condition, this, "editableVisible", true, internal.PrimitiveTypeEnum.Boolean);
            if (arguments.length < 4) {
                throw new Error("new Condition() cannot be invoked directly, please use 'model.enumerations.createCondition()'");
            }
        }
        get containerAsConditionSettings() {
            return super.getContainerAs(documenttemplates_1.documenttemplates.ConditionSettings);
        }
        get containerAsConditionalSettings() {
            return super.getContainerAs(pages_1.pages.ConditionalSettings);
        }
        get attributeValue() {
            return this.__attributeValue.get();
        }
        set attributeValue(newValue) {
            this.__attributeValue.set(newValue);
        }
        get editableVisible() {
            return this.__editableVisible.get();
        }
        set editableVisible(newValue) {
            this.__editableVisible.set(newValue);
        }
        /**
         * Creates and returns a new Condition instance in the SDK and on the server.
         * The new Condition will be automatically stored in the 'conditions' property
         * of the parent documenttemplates.ConditionSettings element passed as argument.
         */
        static createInConditionSettingsUnderConditions(container) {
            return internal.instancehelpers.createElement(container, Condition, "conditions", true);
        }
        /**
         * Creates and returns a new Condition instance in the SDK and on the server.
         * The new Condition will be automatically stored in the 'conditions' property
         * of the parent pages.ConditionalSettings element passed as argument.
         */
        static createInConditionalSettingsUnderConditions(container) {
            return internal.instancehelpers.createElement(container, Condition, "conditions", true);
        }
        /**
         * Creates and returns a new Condition instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, Condition);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.editableVisible = true;
        }
    }
    Condition.structureTypeName = "Enumerations$Condition";
    Condition.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    enumerations.Condition = Condition;
    /**
     * See: {@link https://docs.mendix.com/refguide/enumerations relevant section in reference guide}
     */
    class Enumeration extends projects_1.projects.Document {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            /** @internal */
            this.__values = new internal.PartListProperty(Enumeration, this, "values", []);
            this._containmentName = "documents";
        }
        get containerAsFolderBase() {
            return super.getContainerAs(projects_1.projects.FolderBase);
        }
        get values() {
            return this.__values.get();
        }
        /**
         * Creates a new Enumeration unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container) {
            return internal.instancehelpers.createUnit(container, Enumeration);
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
    Enumeration.structureTypeName = "Enumerations$Enumeration";
    Enumeration.versionInfo = new exports.StructureVersionInfo({
        properties: {
            values: {
                public: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.ModelUnit);
    enumerations.Enumeration = Enumeration;
    /**
     * See: {@link https://docs.mendix.com/refguide/enumerations relevant section in reference guide}
     */
    class EnumerationValue extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__name = new internal.PrimitiveProperty(EnumerationValue, this, "name", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__caption = new internal.PartProperty(EnumerationValue, this, "caption", null, true);
            /** @internal */
            this.__image = new internal.ByNameReferenceProperty(EnumerationValue, this, "image", null, "Images$Image");
            if (arguments.length < 4) {
                throw new Error("new EnumerationValue() cannot be invoked directly, please use 'model.enumerations.createEnumerationValue()'");
            }
        }
        get containerAsEnumeration() {
            return super.getContainerAs(Enumeration);
        }
        get name() {
            return this.__name.get();
        }
        set name(newValue) {
            this.__name.set(newValue);
        }
        get caption() {
            return this.__caption.get();
        }
        set caption(newValue) {
            this.__caption.set(newValue);
        }
        get image() {
            return this.__image.get();
        }
        set image(newValue) {
            this.__image.set(newValue);
        }
        get imageQualifiedName() {
            return this.__image.qualifiedName();
        }
        /**
         * Creates and returns a new EnumerationValue instance in the SDK and on the server.
         * The new EnumerationValue will be automatically stored in the 'values' property
         * of the parent Enumeration element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, EnumerationValue, "values", true);
        }
        /**
         * Creates and returns a new EnumerationValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, EnumerationValue);
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
            this.caption = texts_1.texts.Text.create(this.model);
        }
    }
    EnumerationValue.structureTypeName = "Enumerations$EnumerationValue";
    EnumerationValue.versionInfo = new exports.StructureVersionInfo({
        properties: {
            name: {
                public: {
                    currentValue: true
                }
            },
            caption: {
                required: {
                    currentValue: true
                }
            }
        },
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    enumerations.EnumerationValue = EnumerationValue;
})(enumerations = exports.enumerations || (exports.enumerations = {}));
const documenttemplates_1 = require("./documenttemplates");
const pages_1 = require("./pages");
const texts_1 = require("./texts");
//# sourceMappingURL=enumerations.js.map