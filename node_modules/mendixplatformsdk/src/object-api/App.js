"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const clients_1 = require("../clients");
const OnlineWorkingCopy_1 = require("./OnlineWorkingCopy");
const Repository_1 = require("./Repository");
/** The object API of the Mendix app. */
class App {
    constructor(appId) {
        this.appId = appId;
    }
    /**
     * Delete the current app.
     *
     * Note: be careful when using this, since this is permanent and will remove all data of this app.
     */
    async delete() {
        await new clients_1.AppsClient().deleteApp(this.appId);
    }
    /**
     * Create a temporary working copy by giving the branch name and optionally some options.
     * The working copy will be based on what is in the given branch of the model repository and stored online.
     *
     * @param branchName The branch name to base the working copy on.
     *
     * The name of the default branch is `"trunk"` for Subversion repositories and `"main"` for Git repositories. To specify a non-default branch for a Subversion repository, the branch name must begin with the `"branches/"` prefix.
     * @param options The options to use to create the working copy such as the commit ID.
     * @returns the object API of the online working copy, which can be used to open and edit its contents and to commit made changes.
     */
    async createTemporaryWorkingCopy(branchName, options) {
        const workingCopyId = await new clients_1.RepositoriesClient().createTemporaryWorkingCopy(this.appId, branchName, options);
        return new OnlineWorkingCopy_1.OnlineWorkingCopy(this.appId, workingCopyId);
    }
    /**
     * Open an existing working copy by giving its ID.
     *
     * @param workingCopyId The ID of the working copy to open.
     * @returns the object API of the online working copy, which can be used to open and edit its contents and to commit made changes.
     */
    getOnlineWorkingCopy(workingCopyId) {
        return new OnlineWorkingCopy_1.OnlineWorkingCopy(this.appId, workingCopyId);
    }
    /**
     * Get Repository object, including model repository info.
     *
     * @returns the object API of the model repository, which can be used to call the Public Team Server API.
     */
    getRepository() {
        return new Repository_1.Repository(this.appId);
    }
}
exports.App = App;
//# sourceMappingURL=App.js.map