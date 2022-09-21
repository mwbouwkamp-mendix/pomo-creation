"use strict";
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = exports.StructureVersionInfo = void 0;
const internal = require("../sdk/internal");
exports.StructureVersionInfo = internal.StructureVersionInfo;
var client;
(function (client) {
    class SupportedPlatform extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "client.SupportedPlatform";
        }
    }
    SupportedPlatform.All = new SupportedPlatform("All", {});
    SupportedPlatform.Web = new SupportedPlatform("Web", {});
    SupportedPlatform.Native = new SupportedPlatform("Native", {});
    client.SupportedPlatform = SupportedPlatform;
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `Client`.
     */
})(client = exports.client || (exports.client = {}));
//# sourceMappingURL=client.js.map