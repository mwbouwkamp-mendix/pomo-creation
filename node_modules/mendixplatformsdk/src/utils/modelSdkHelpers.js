"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getModelSdkClient = void 0;
const mendixmodelsdk_1 = require("mendixmodelsdk");
const config_1 = require("./config");
/** @internal */
function getModelSdkClient() {
    return mendixmodelsdk_1.Model.createSdkClient({
        endPoint: (0, config_1.getPlatformConfig)().modelServerEndpoint,
        credentials: { personalAccessToken: (0, config_1.getMendixToken)() }
    });
}
exports.getModelSdkClient = getModelSdkClient;
//# sourceMappingURL=modelSdkHelpers.js.map