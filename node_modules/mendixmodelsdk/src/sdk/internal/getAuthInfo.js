"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAuthInfo = void 0;
function getAuthInfo(config) {
    if (config.credentials) {
        const backendCredentials = config.credentials;
        if (backendCredentials.password) {
            return {
                auth: "basic",
                username: backendCredentials.username,
                password: backendCredentials.password,
                openid: backendCredentials.openid
            };
        }
        const sdkCredentials = config.credentials;
        if (sdkCredentials.apikey) {
            return { auth: "basic", username: sdkCredentials.username, password: sdkCredentials.apikey };
        }
        const patCredentials = config.credentials;
        if (patCredentials.personalAccessToken) {
            return { auth: "pat", personalAccessToken: patCredentials.personalAccessToken };
        }
        throw new Error("Expected either an API key, password, or personal access token");
    }
    throw new Error("No credentials provided");
}
exports.getAuthInfo = getAuthInfo;
//# sourceMappingURL=getAuthInfo.js.map