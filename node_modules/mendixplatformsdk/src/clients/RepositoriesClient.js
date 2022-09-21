"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositoriesClient = void 0;
const config_1 = require("../utils/config");
const modelSdkHelpers_1 = require("../utils/modelSdkHelpers");
const RestConnector_1 = require("../utils/RestConnector");
const logger_1 = require("../utils/logger");
const retry_1 = require("../utils/retry");
/** API client to interact with a model repository */
class RepositoriesClient {
    get restConnector() {
        return RestConnector_1.RestConnector.create((0, config_1.getPlatformConfig)().repositoryServiceEndpoint, {
            type: "pat",
            mxToken: (0, config_1.getMendixToken)()
        });
    }
    /**
     * Create a temporary working copy by giving the app ID, the branch name, and optionally some options.
     * The working copy will be based on what is in the given branch of the model repository and stored online.
     *
     * @param appId The app ID (also known as project ID) of the app that the working copy will be based on.
     * @param branchName The branch name to base the working copy on.
     *
     * The name of the default branch is `"trunk"` for Subversion repositories and `"main"` for Git repositories. To specify a non-default branch for a Subversion repository, the branch name must begin with the `"branches/"` prefix.
     * @param options The options to use to create the working copy such as the commit ID.
     * @returns The ID of the created temporary working copy.
     */
    async createTemporaryWorkingCopy(appId, branchName, options) {
        logger_1.logger.info(`Creating temporary working copy for branch '${branchName}'...`);
        const workingCopyId = await (0, retry_1.retry)(async () => {
            const response = await this.restConnector.awaitTask("/v1/temporary-working-copies/", {
                projectId: appId,
                branchName,
                commitId: options?.commitId
            });
            return response.result?.workingCopyId;
        }, {
            maxAttempts: 3,
            retryDelayMs: 200,
            shouldRetry: error => !["RS400", "RS401", "RS403", "RS404"].includes(error.errorCode)
        });
        logger_1.logger.info(`Successfully created temporary working copy with id '${workingCopyId}' based on branch '${branchName}'`);
        return workingCopyId;
    }
    /**
     * Commit a temporary working copy by giving the app ID, working copy ID and optionally the branch name, and some options.
     *
     * Note: make sure to call [`model.flushChanges()`](https://apidocs.rnd.mendix.com/modelsdk/latest/interfaces/imodel.html#flushchanges) after making changes to the model and before committing with this method.
     * This makes sure that the Model SDK has been able to send the changes to the online working copy.
     *
     * @param appId The app ID (also known as project ID) of the app that the working copy is based on.
     * @param workingCopyId The ID of the working copy to commit.
     * @param targetBranchName The branch of the model repository to which the changes are committed.
     *
     * The name of the default branch is `"trunk"` for Subversion repositories and `"main"` for Git repositories. To specify a non-default branch for a Subversion repository, the branch name must begin with the `"branches/"` prefix.
     *
     * Note: This must be the same branch that the working copy was based on, otherwise an error will be thrown. Set `options.force` to `true` to override this check.
     * @param options The options to use to commit the working copy such as commit ID and message.
     */
    async commitTemporaryWorkingCopy(appId, workingCopyId, targetBranchName, options) {
        const branchName = targetBranchName ?? (await this.getWorkingCopyBaseBranch(workingCopyId));
        logger_1.logger.info(`Committing temporary working copy '${workingCopyId}' to branch '${branchName}'...`);
        await (0, retry_1.retry)(async () => {
            const body = {
                projectId: appId,
                targetBranchName: branchName,
                commitMessage: options?.commitMessage,
                force: options?.force,
                targetCommitId: options?.targetCommitId
            };
            await this.restConnector.awaitTask(`/v1/temporary-working-copies/${workingCopyId}/commit`, body);
        }, {
            maxAttempts: 3,
            retryDelayMs: 200,
            shouldRetry: error => !["RS400", "RS401", "RS403", "RS404"].includes(error.errorCode)
        });
        logger_1.logger.info(`Successfully committed the working copy with id '${workingCopyId}' to branch '${branchName}'`);
    }
    /**
     * Get generic information about the model repository of an app by giving the app ID.
     *
     * @param appId The app ID (also known as project ID) of the Mendix app to get the info of.
     * @returns The generic information about the model repository of an app.
     */
    async getRepositoryInfo(appId) {
        const response = await this.restConnector.get(`/v1/repositories/${appId}/info`);
        // Only return info that is useful to the user and which should stay available
        const { type, url } = response.data;
        return { type, url };
    }
    /**
     * Gets information about the branches of the version control model repository for a Mendix app.
     * The response is paginated using cursor-based pagination.
     *
     * @param appId The app ID (also known as project ID) of the Mendix app for which the model repository information should be returned.
     * @param options Query parameters.
     * @returns Information about the branches of the version control model repository for a Mendix app.
     */
    async getBranches(appId, options) {
        const response = await this.restConnector.get(`/v1/repositories/${appId}/branches`, options);
        return response.data;
    }
    /**
     * Gets information about a specific branch of the version control model repository for a Mendix app.
     *
     * @param appId The app ID (also known as project ID) of the Mendix app for which the model repository information should be returned.
     * @param branchName The name of the branch for which to return information.
     *
     * The name of the default branch is `"trunk"` for Subversion repositories and `"main"` for Git repositories. To specify a non-default branch for a Subversion repository, the branch name must begin with the `"branches/"` prefix.
     * @returns Information about a specific branch of the version control model repository for a Mendix app.
     */
    async getBranch(appId, branchName) {
        const response = await this.restConnector.get(`/v1/repositories/${appId}/branches/${branchName}`);
        return response.data;
    }
    /**
     * Gets information about the commits of a specific branch of the version control model repository for a Mendix app.
     * Commits are returned in reverse chronological order, starting from the head of the branch all the way to the first commit of the model repository.
     * The response is paginated using cursor-based pagination.
     *
     * @param appId The app ID (also known as project ID) of the Mendix app for which the model repository information should be returned.
     * @param branchName The name of the branch for which to return information.
     *
     * The name of the default branch is `"trunk"` for Subversion repositories and `"main"` for Git repositories. To specify a non-default branch for a Subversion repository, the branch name must begin with the `"branches/"` prefix.
     * @param options Query parameters.
     * @returns Information about the commits of a specific branch of the version control model repository for a Mendix app.
     */
    async getBranchCommits(appId, branchName, options) {
        const response = await this.restConnector.get(`/v1/repositories/${appId}/branches/${branchName}/commits`, options);
        return response.data;
    }
    async getWorkingCopyBaseBranch(workingCopyId) {
        const wcBaseBranch = (await (0, modelSdkHelpers_1.getModelSdkClient)().loadWorkingCopyMetaData(workingCopyId)).metaData.teamServerBaseBranch;
        if (wcBaseBranch) {
            return wcBaseBranch;
        }
        throw new Error("Cannot retrieve branch from working copy, please specify the target branch name.");
    }
}
exports.RepositoriesClient = RepositoriesClient;
//# sourceMappingURL=RepositoriesClient.js.map