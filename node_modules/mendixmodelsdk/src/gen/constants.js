"use strict";
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.constants = exports.StructureVersionInfo = void 0;
const internal = require("../sdk/internal");
exports.StructureVersionInfo = internal.StructureVersionInfo;
const projects_1 = require("./projects");
var constants;
(function (constants) {
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `Constants`.
     */
    /**
     * See: {@link https://docs.mendix.com/refguide/constants relevant section in reference guide}
     */
    class Constant extends projects_1.projects.Document {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            /** @internal */
            this.__dataType = new internal.PrimitiveProperty(Constant, this, "dataType", "String", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__type = new internal.PartProperty(Constant, this, "type", null, true);
            /** @internal */
            this.__defaultValue = new internal.PrimitiveProperty(Constant, this, "defaultValue", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__exposedToClient = new internal.PrimitiveProperty(Constant, this, "exposedToClient", false, internal.PrimitiveTypeEnum.Boolean);
            this._containmentName = "documents";
        }
        get containerAsFolderBase() {
            return super.getContainerAs(projects_1.projects.FolderBase);
        }
        /**
         * The value of this property is conceptually of type dataTypes.LegacyDataType.
         *
         * In version 7.9.0: deleted
         */
        get dataType() {
            return this.__dataType.get();
        }
        set dataType(newValue) {
            this.__dataType.set(newValue);
        }
        /**
         * In version 9.0.5: added public
         * In version 7.9.0: introduced
         */
        get type() {
            return this.__type.get();
        }
        set type(newValue) {
            this.__type.set(newValue);
        }
        get defaultValue() {
            return this.__defaultValue.get();
        }
        set defaultValue(newValue) {
            this.__defaultValue.set(newValue);
        }
        /**
         * In version 8.2.0: introduced
         */
        get exposedToClient() {
            return this.__exposedToClient.get();
        }
        set exposedToClient(newValue) {
            this.__exposedToClient.set(newValue);
        }
        /**
         * Creates a new Constant unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container) {
            return internal.instancehelpers.createUnit(container, Constant);
        }
        /** @internal */
        _isByNameReferrable() {
            return this.__name.isAvailable;
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__dataType.isAvailable) {
                this.dataType = "String";
            }
            if (this.__exposedToClient.isAvailable) {
                this.exposedToClient = false;
            }
            if (this.__type.isAvailable) {
                this.type = datatypes_1.datatypes.StringType.create(this.model);
            }
        }
    }
    Constant.structureTypeName = "Constants$Constant";
    Constant.versionInfo = new exports.StructureVersionInfo({
        properties: {
            dataType: {
                deleted: "7.9.0",
                deletionMessage: "Use property 'type' instead"
            },
            type: {
                introduced: "7.9.0",
                public: {
                    currentValue: true,
                    changedIn: ["9.0.5"]
                },
                required: {
                    currentValue: true
                }
            },
            exposedToClient: {
                introduced: "8.2.0"
            }
        }
    }, internal.StructureType.ModelUnit);
    constants.Constant = Constant;
})(constants = exports.constants || (exports.constants = {}));
const datatypes_1 = require("./datatypes");
//# sourceMappingURL=constants.js.map