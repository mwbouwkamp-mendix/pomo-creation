"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repository = void 0;
const clients_1 = require("../clients");
/** The object API of a model repository, which can be used to get info about its branches and commits. */
class Repository {
    constructor(appId) {
        this.appId = appId;
    }
    /**
     * Get generic information about the model repository.
     *
     * @returns Generic information about the model repository.
     */
    async getInfo() {
        return new clients_1.RepositoriesClient().getRepositoryInfo(this.appId);
    }
    /**
     * Gets information about the branches of the version control model repository for a Mendix app.
     * The response is paginated using cursor-based pagination.
     *
     * @param options Query parameters.
     * @returns Information about the branches of the version control model repository for a Mendix app.
     */
    async getBranches(options) {
        return new clients_1.RepositoriesClient().getBranches(this.appId, options);
    }
    /**
     * Gets information about a specific branch of the version control model repository for a Mendix app.
     *
     * @param branchName The name of the branch for which to return information.
     *
     * The name of the default branch is `"trunk"` for Subversion repositories and `"main"` for Git repositories. To specify a non-default branch for a Subversion repository, the branch name must begin with the `"branches/"` prefix.
     * @returns Information about a specific branch of the version control model repository for a Mendix app.
     */
    async getBranch(branchName) {
        return new clients_1.RepositoriesClient().getBranch(this.appId, branchName);
    }
    /**
     * Gets information about the commits of a specific branch of the version control model repository for a Mendix app.
     * Commits are returned in reverse chronological order, starting from the head of the branch all the way to the first commit of the model repository.
     * The response is paginated using cursor-based pagination.
     *
     * @param branchName The name of the branch for which to return information.
     *
     * The name of the default branch is `"trunk"` for Subversion repositories and `"main"` for Git repositories. To specify a non-default branch for a Subversion repository, the branch name must begin with the `"branches/"` prefix.
     * @param options Query parameters.
     * @returns Information about the commits of a specific branch of the version control model repository for a Mendix app.
     */
    async getBranchCommits(branchName, options) {
        return new clients_1.RepositoriesClient().getBranchCommits(this.appId, branchName, options);
    }
}
exports.Repository = Repository;
//# sourceMappingURL=Repository.js.map