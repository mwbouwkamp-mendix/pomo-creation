"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnlineWorkingCopy = void 0;
const clients_1 = require("../clients");
const modelSdkHelpers_1 = require("../utils/modelSdkHelpers");
/** The object API of the online working copy, which can be used to open and edit its contents and to commit made changes. */
class OnlineWorkingCopy {
    constructor(appId, workingCopyId) {
        this.appId = appId;
        this.workingCopyId = workingCopyId;
    }
    /**
     * Open the model of the online working copy. This can be used to read and edit the contents of the online working copy of the app.
     *
     * Note: the return value of this method is an instance of `IModel`, which is defined in the [Model SDK](https://apidocs.rnd.mendix.com/modelsdk/latest/interfaces/imodel.html).
     *
     * @returns The model of the online working copy.
     */
    async openModel() {
        return (0, modelSdkHelpers_1.getModelSdkClient)().openWorkingCopy(this.workingCopyId);
    }
    /**
     * Commit the changes of the working copy to the model repository.
     *
     * Note: make sure to call [`model.flushChanges()`](https://apidocs.rnd.mendix.com/modelsdk/latest/interfaces/imodel.html#flushchanges) after making changes to the model and before committing with this method.
     * This makes sure that the Model SDK has been able to send the changes to the online working copy.
     *
     * @param branchName The branch of the model repository to which the changes are committed.
     *
     * The name of the default branch is `"trunk"` for Subversion repositories and `"main"` for Git repositories. To specify a non-default branch for a Subversion repository, the branch name must begin with the `"branches/"` prefix.
     *
     * Note: This must be the same branch that the working copy was based on, otherwise an error will be thrown. Set `options.force` to `true` to override this check.
     *
     * @param options The options to use to commit the working copy such as commit ID and message.
     */
    async commitToRepository(branchName, options) {
        return new clients_1.RepositoriesClient().commitTemporaryWorkingCopy(this.appId, this.workingCopyId, branchName, options);
    }
}
exports.OnlineWorkingCopy = OnlineWorkingCopy;
//# sourceMappingURL=OnlineWorkingCopy.js.map