import { IBranch, IBranches, ICommits, ICommitTemporaryWorkingCopyOptions, ICreateTemporaryWorkingCopyOptions, IGetBranchCommitsOptions, IGetBranchesOptions, IRepositoryInfo } from "./types";
/** API client to interact with a model repository */
export declare class RepositoriesClient {
    private get restConnector();
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
    createTemporaryWorkingCopy(appId: string, branchName: string, options?: ICreateTemporaryWorkingCopyOptions): Promise<string>;
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
    commitTemporaryWorkingCopy(appId: string, workingCopyId: string, targetBranchName?: string, options?: ICommitTemporaryWorkingCopyOptions): Promise<void>;
    /**
     * Get generic information about the model repository of an app by giving the app ID.
     *
     * @param appId The app ID (also known as project ID) of the Mendix app to get the info of.
     * @returns The generic information about the model repository of an app.
     */
    getRepositoryInfo(appId: string): Promise<IRepositoryInfo>;
    /**
     * Gets information about the branches of the version control model repository for a Mendix app.
     * The response is paginated using cursor-based pagination.
     *
     * @param appId The app ID (also known as project ID) of the Mendix app for which the model repository information should be returned.
     * @param options Query parameters.
     * @returns Information about the branches of the version control model repository for a Mendix app.
     */
    getBranches(appId: string, options?: IGetBranchesOptions): Promise<IBranches>;
    /**
     * Gets information about a specific branch of the version control model repository for a Mendix app.
     *
     * @param appId The app ID (also known as project ID) of the Mendix app for which the model repository information should be returned.
     * @param branchName The name of the branch for which to return information.
     *
     * The name of the default branch is `"trunk"` for Subversion repositories and `"main"` for Git repositories. To specify a non-default branch for a Subversion repository, the branch name must begin with the `"branches/"` prefix.
     * @returns Information about a specific branch of the version control model repository for a Mendix app.
     */
    getBranch(appId: string, branchName: string): Promise<IBranch>;
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
    getBranchCommits(appId: string, branchName: string, options?: IGetBranchCommitsOptions): Promise<ICommits>;
    private getWorkingCopyBaseBranch;
}
