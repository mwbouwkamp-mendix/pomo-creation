"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppsClient = void 0;
const RestConnector_1 = require("../utils/RestConnector");
const config_1 = require("../utils/config");
const logger_1 = require("../utils/logger");
/** API client to create and delete Mendix apps. */
class AppsClient {
    get restConnector() {
        return RestConnector_1.RestConnector.create(`${(0, config_1.getPlatformConfig)().projectServiceEndpoint}`, {
            type: "pat",
            mxToken: (0, config_1.getMendixToken)()
        });
    }
    /**
     * Create a new Mendix app in the Mendix Platform and commit it in the model repository.
     *
     * @param appName Name of the app (maximum 200 characters; must not contain any special characters other than spaces (‘ ’), dash (‘-’) or underscore (‘_’)
     * @param options Options to create the app such as image and app template.
     * @returns The app ID (also known as project ID) of the created Mendix app.
     */
    async createNewApp(appName, options) {
        const { summary, image, repositoryType, templateId, templateDownloadURL } = options ?? {};
        const createAppBody = { name: appName, summary, image, repository_type: repositoryType, use_app_template: true };
        if (templateId || templateDownloadURL) {
            createAppBody.app_template = {
                template_id: templateId,
                template_download_url: templateDownloadURL
            };
        }
        logger_1.logger.info(`Creating new app '${appName}'...`);
        const jobResult = await this.restConnector.awaitPlatformJob("/rest/projectservice/v1/projects", createAppBody);
        logger_1.logger.info(`Successfully created app with id '${jobResult.project_id}'`);
        return jobResult.project_id;
    }
    /**
     * Delete an app by giving it's app ID.
     *
     * Note: be careful when using this, since this is permanent and will remove all data of this app.
     *
     * @param appId The app ID (also known as project ID) of the Mendix app to delete.
     */
    async deleteApp(appId) {
        logger_1.logger.info(`Deleting app '${appId}'...`);
        await this.restConnector.delete(`/rest/projectservice/v1/projects/${appId}`);
        logger_1.logger.info(`Successfully deleted app '${appId}'`);
    }
}
exports.AppsClient = AppsClient;
//# sourceMappingURL=AppsClient.js.map