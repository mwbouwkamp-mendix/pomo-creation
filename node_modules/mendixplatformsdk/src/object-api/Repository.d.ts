import { IRepositoryInfo, IBranches, IGetBranchesOptions, IBranch, IGetBranchCommitsOptions, ICommits } from "../clients";
/** The object API of a model repository, which can be used to get info about its branches and commits. */
export declare class Repository {
    constructor(appId: string);
    /**
     * The App ID used to uniquely identify the Mendix app. The App ID can be found in the
     * [Developer Portal](https://home.mendix.com) under the General Settings page of the app.
     *
     * Note: the App ID is sometimes also called Project ID.
     */
    readonly appId: string;
    /**
     * Get generic information about the model repository.
     *
     * @returns Generic information about the model repository.
     */
    getInfo(): Promise<IRepositoryInfo>;
    /**
     * Gets information about the branches of the version control model repository for a Mendix app.
     * The response is paginated using cursor-based pagination.
     *
     * @param options Query parameters.
     * @returns Information about the branches of the version control model repository for a Mendix app.
     */
    getBranches(options?: IGetBranchesOptions): Promise<IBranches>;
    /**
     * Gets information about a specific branch of the version control model repository for a Mendix app.
     *
     * @param branchName The name of the branch for which to return information.
     *
     * The name of the default branch is `"trunk"` for Subversion repositories and `"main"` for Git repositories. To specify a non-default branch for a Subversion repository, the branch name must begin with the `"branches/"` prefix.
     * @returns Information about a specific branch of the version control model repository for a Mendix app.
     */
    getBranch(branchName: string): Promise<IBranch>;
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
    getBranchCommits(branchName: string, options?: IGetBranchCommitsOptions): Promise<ICommits>;
}
