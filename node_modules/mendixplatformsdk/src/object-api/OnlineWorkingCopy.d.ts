import { IModel } from "mendixmodelsdk";
import { ICommitTemporaryWorkingCopyOptions } from "../clients";
/** The object API of the online working copy, which can be used to open and edit its contents and to commit made changes. */
export declare class OnlineWorkingCopy {
    constructor(appId: string, workingCopyId: string);
    /**
     * The App ID used to uniquely identify the Mendix app. The App ID can be found in the
     * [Developer Portal](https://home.mendix.com) under the General Settings page of the app.
     *
     * Note: the App ID is sometimes also called Project ID.
     */
    readonly appId: string;
    /**
     * The working copy ID used to uniquely identify the online working copy.
     */
    readonly workingCopyId: string;
    /**
     * Open the model of the online working copy. This can be used to read and edit the contents of the online working copy of the app.
     *
     * Note: the return value of this method is an instance of `IModel`, which is defined in the [Model SDK](https://apidocs.rnd.mendix.com/modelsdk/latest/interfaces/imodel.html).
     *
     * @returns The model of the online working copy.
     */
    openModel(): Promise<IModel>;
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
    commitToRepository(branchName?: string, options?: ICommitTemporaryWorkingCopyOptions): Promise<void>;
}
