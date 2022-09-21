"use strict";
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.services = exports.StructureVersionInfo = void 0;
const internal = require("../sdk/internal");
exports.StructureVersionInfo = internal.StructureVersionInfo;
var services;
(function (services) {
    class HttpMethod extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "services.HttpMethod";
        }
    }
    HttpMethod.Get = new HttpMethod("Get", {});
    HttpMethod.Post = new HttpMethod("Post", {});
    HttpMethod.Put = new HttpMethod("Put", {});
    HttpMethod.Patch = new HttpMethod("Patch", {});
    HttpMethod.Delete = new HttpMethod("Delete", {});
    HttpMethod.Head = new HttpMethod("Head", {
        introduced: "7.13.0"
    });
    HttpMethod.Options = new HttpMethod("Options", {
        introduced: "7.13.0"
    });
    services.HttpMethod = HttpMethod;
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `Services`.
     */
})(services = exports.services || (exports.services = {}));
//# sourceMappingURL=services.js.map