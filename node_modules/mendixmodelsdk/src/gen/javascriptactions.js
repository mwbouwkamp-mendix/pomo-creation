"use strict";
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.javascriptactions = exports.StructureVersionInfo = void 0;
const internal = require("../sdk/internal");
exports.StructureVersionInfo = internal.StructureVersionInfo;
const codeactions_1 = require("./codeactions");
var javascriptactions;
(function (javascriptactions) {
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `JavaScriptActions`.
     */
    /**
     * See: {@link https://docs.mendix.com/refguide/javascript-actions relevant section in reference guide}
     *
     * In version 8.0.0: removed experimental
     * In version 7.21.0: introduced
     */
    class JavaScriptAction extends codeactions_1.codeactions.CodeAction {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            /** @internal */
            this.__platform = new internal.EnumProperty(JavaScriptAction, this, "platform", client_1.client.SupportedPlatform.All, client_1.client.SupportedPlatform);
            this._containmentName = "documents";
        }
        get containerAsFolderBase() {
            return super.getContainerAs(projects_1.projects.FolderBase);
        }
        /**
         * In version 9.10.0: introduced
         */
        get platform() {
            return this.__platform.get();
        }
        set platform(newValue) {
            this.__platform.set(newValue);
        }
        /**
         * Creates a new JavaScriptAction unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container) {
            return internal.instancehelpers.createUnit(container, JavaScriptAction);
        }
        /** @internal */
        _isByNameReferrable() {
            return this.__name.isAvailable;
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__platform.isAvailable) {
                this.platform = client_1.client.SupportedPlatform.All;
            }
        }
    }
    JavaScriptAction.structureTypeName = "JavaScriptActions$JavaScriptAction";
    JavaScriptAction.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.21.0",
        properties: {
            platform: {
                introduced: "9.10.0",
                public: {
                    currentValue: true
                }
            }
        },
        experimental: {
            currentValue: false,
            changedIn: ["8.0.0"]
        }
    }, internal.StructureType.ModelUnit);
    javascriptactions.JavaScriptAction = JavaScriptAction;
    /**
     * In version 8.0.0: removed experimental
     * In version 7.21.0: introduced
     */
    class JavaScriptActionParameter extends codeactions_1.codeactions.CodeActionParameter {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new JavaScriptActionParameter() cannot be invoked directly, please use 'model.javascriptactions.createJavaScriptActionParameter()'");
            }
        }
        get containerAsCodeAction() {
            return super.getContainerAs(codeactions_1.codeactions.CodeAction);
        }
        /**
         * Creates and returns a new JavaScriptActionParameter instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, JavaScriptActionParameter);
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
    JavaScriptActionParameter.structureTypeName = "JavaScriptActions$JavaScriptActionParameter";
    JavaScriptActionParameter.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.21.0",
        public: {
            currentValue: true
        },
        experimental: {
            currentValue: false,
            changedIn: ["8.0.0"]
        }
    }, internal.StructureType.Element);
    javascriptactions.JavaScriptActionParameter = JavaScriptActionParameter;
    /**
     * In version 8.4.0: introduced
     */
    class NanoflowJavaScriptActionParameterType extends codeactions_1.codeactions.ParameterType {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new NanoflowJavaScriptActionParameterType() cannot be invoked directly, please use 'model.javascriptactions.createNanoflowJavaScriptActionParameterType()'");
            }
        }
        get containerAsCodeActionParameter() {
            return super.getContainerAs(codeactions_1.codeactions.CodeActionParameter);
        }
        /**
         * Creates and returns a new NanoflowJavaScriptActionParameterType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, NanoflowJavaScriptActionParameterType);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    NanoflowJavaScriptActionParameterType.structureTypeName = "JavaScriptActions$NanoflowJavaScriptActionParameterType";
    NanoflowJavaScriptActionParameterType.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.4.0",
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    javascriptactions.NanoflowJavaScriptActionParameterType = NanoflowJavaScriptActionParameterType;
})(javascriptactions = exports.javascriptactions || (exports.javascriptactions = {}));
const client_1 = require("./client");
const projects_1 = require("./projects");
//# sourceMappingURL=javascriptactions.js.map