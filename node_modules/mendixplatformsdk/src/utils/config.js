"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMendixToken = exports.getPlatformConfig = exports.setPlatformConfig = void 0;
const defaultConfig = {
    repositoryServiceEndpoint: "https://repository.api.mendix.com",
    modelServerEndpoint: "https://model.api.mendix.com",
    projectServiceEndpoint: "https://projectservice.mendix.com",
    mendixToken: process.env.MENDIX_TOKEN || ""
};
let platformConfig = { ...defaultConfig };
/**
 * Set the platform endpoints and credentials.
 * @param newConfig The configuration to set.
 */
function setPlatformConfig(newConfig) {
    platformConfig = { ...platformConfig, ...newConfig };
}
exports.setPlatformConfig = setPlatformConfig;
/** @internal */
function getPlatformConfig() {
    return platformConfig;
}
exports.getPlatformConfig = getPlatformConfig;
/** @internal */
function getMendixToken() {
    if (!platformConfig.mendixToken) {
        throw new Error("No Mendix PAT (Personal Access Token) found, please set it in your environment variable (recommended): 'MENDIX_TOKEN=[token_here] node script.js' or by calling setPlatformConfig().");
    }
    return platformConfig.mendixToken;
}
exports.getMendixToken = getMendixToken;
//# sourceMappingURL=config.js.map