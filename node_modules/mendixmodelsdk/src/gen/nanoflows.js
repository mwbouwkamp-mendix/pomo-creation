"use strict";
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.nanoflows = exports.StructureVersionInfo = void 0;
const internal = require("../sdk/internal");
exports.StructureVersionInfo = internal.StructureVersionInfo;
const microflows_1 = require("./microflows");
var nanoflows;
(function (nanoflows) {
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `Nanoflows`.
     */
    /**
     * In version 8.4.0: introduced
     */
    class NanoflowParameterValue extends microflows_1.microflows.CodeActionParameterValue {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__nanoflow = new internal.ByNameReferenceProperty(NanoflowParameterValue, this, "nanoflow", null, "Microflows$Nanoflow");
            if (arguments.length < 4) {
                throw new Error("new NanoflowParameterValue() cannot be invoked directly, please use 'model.nanoflows.createNanoflowParameterValue()'");
            }
        }
        get containerAsJavaActionParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.JavaActionParameterMapping);
        }
        get containerAsJavaScriptActionParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.JavaScriptActionParameterMapping);
        }
        get nanoflow() {
            return this.__nanoflow.get();
        }
        set nanoflow(newValue) {
            this.__nanoflow.set(newValue);
        }
        get nanoflowQualifiedName() {
            return this.__nanoflow.qualifiedName();
        }
        /**
         * Creates and returns a new NanoflowParameterValue instance in the SDK and on the server.
         * The new NanoflowParameterValue will be automatically stored in the 'parameterValue' property
         * of the parent microflows.JavaActionParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.4.0 and higher
         */
        static createInJavaActionParameterMappingUnderParameterValue(container) {
            internal.createInVersionCheck(container.model, NanoflowParameterValue.structureTypeName, { start: "8.4.0" });
            return internal.instancehelpers.createElement(container, NanoflowParameterValue, "parameterValue", false);
        }
        /**
         * Creates and returns a new NanoflowParameterValue instance in the SDK and on the server.
         * The new NanoflowParameterValue will be automatically stored in the 'parameterValue' property
         * of the parent microflows.JavaScriptActionParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.4.0 and higher
         */
        static createInJavaScriptActionParameterMappingUnderParameterValue(container) {
            internal.createInVersionCheck(container.model, NanoflowParameterValue.structureTypeName, { start: "8.4.0" });
            return internal.instancehelpers.createElement(container, NanoflowParameterValue, "parameterValue", false);
        }
        /**
         * Creates and returns a new NanoflowParameterValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, NanoflowParameterValue);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    NanoflowParameterValue.structureTypeName = "Nanoflows$NanoflowParameterValue";
    NanoflowParameterValue.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.4.0"
    }, internal.StructureType.Element);
    nanoflows.NanoflowParameterValue = NanoflowParameterValue;
})(nanoflows = exports.nanoflows || (exports.nanoflows = {}));
//# sourceMappingURL=nanoflows.js.map