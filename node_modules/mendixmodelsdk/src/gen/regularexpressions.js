"use strict";
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.regularexpressions = exports.StructureVersionInfo = void 0;
const internal = require("../sdk/internal");
exports.StructureVersionInfo = internal.StructureVersionInfo;
const projects_1 = require("./projects");
var regularexpressions;
(function (regularexpressions) {
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `RegularExpressions`.
     */
    /**
     * See: {@link https://docs.mendix.com/refguide/regular-expressions relevant section in reference guide}
     */
    class RegularExpression extends projects_1.projects.Document {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            /** @internal */
            this.__regEx = new internal.PrimitiveProperty(RegularExpression, this, "regEx", "", internal.PrimitiveTypeEnum.String);
            this._containmentName = "documents";
        }
        get containerAsFolderBase() {
            return super.getContainerAs(projects_1.projects.FolderBase);
        }
        get regEx() {
            return this.__regEx.get();
        }
        set regEx(newValue) {
            this.__regEx.set(newValue);
        }
        /**
         * Creates a new RegularExpression unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container) {
            return internal.instancehelpers.createUnit(container, RegularExpression);
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
    RegularExpression.structureTypeName = "RegularExpressions$RegularExpression";
    RegularExpression.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.ModelUnit);
    regularexpressions.RegularExpression = RegularExpression;
})(regularexpressions = exports.regularexpressions || (exports.regularexpressions = {}));
//# sourceMappingURL=regularexpressions.js.map