"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MendixPlatformClient = void 0;
const clients_1 = require("./clients");
const object_api_1 = require("./object-api");
/**
 * API client to interact with the Mendix Platform.
 */
class MendixPlatformClient {
    /**
     * Create a new Mendix app in the Mendix Platform and commit it in the model repository.
     * @param appName Name of the app (maximum 200 characters; must not contain any special characters other than spaces (‘ ’), dash (‘-’) or underscore (‘_’)
     * @param options Options to create the app such as image and app template.
     * @returns The object API of the created Mendix app.
     */
    async createNewApp(appName, options) {
        const appId = await new clients_1.AppsClient().createNewApp(appName, options);
        return new object_api_1.App(appId);
    }
    /**
     * Get the object API of the specified Mendix app.
     * @param appId The app ID (also known as project ID) of the Mendix app.
     * @returns The object API of the specified Mendix app.
     */
    getApp(appId) {
        return new object_api_1.App(appId);
    }
}
exports.MendixPlatformClient = MendixPlatformClient;
//# sourceMappingURL=MendixPlatformClient.js.map