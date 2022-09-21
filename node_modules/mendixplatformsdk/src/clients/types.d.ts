/** Type of the model repository. Possible values: `"svn"` and `"git"`. */
export declare type RepositoryType = "svn" | "git";
/** Options to create a Mendix app. */
export interface ICreateNewAppOptions {
    /** Short description of the app */
    summary?: string;
    /** Base64 encoded data of a app image (height and width between 200 and 400 px, maximum size 5 MB) */
    image?: string;
    /**
     * Type of model repository to be used. Possible values: `"svn"` and `"git"`.
     *
     * Note: This property is for Mendix internal use only.
     *
     * @ignore
     */
    repositoryType?: RepositoryType;
    /**
     * URL of the download location of the app template package file (mpk).
     * If the template package is private, this URL must be authenticated with a signature.
     *
     * When neither `templateDownloadURL` or `templateId` are set, the default Blank App is used for app initialization.
     */
    templateDownloadURL?: string;
    /**
     * UUID of the app template the app should be based on. If left blank the app will be created using the standard blank app template in the latest Mendix version.
     *
     * When neither `templateDownloadURL` or `templateId` are set, the default Blank App is used for app initialization.
     */
    templateId?: string;
}
/** Options to create the temporary working copy. */
export interface ICreateTemporaryWorkingCopyOptions {
    /**
     * Commit ID to base the temporary working copy on.
     * It will be a hash for Git repositories and a revision number for Subversion repositories.
     */
    commitId?: string;
}
/** Options to commit the temporary working copy. */
export interface ICommitTemporaryWorkingCopyOptions {
    /**
     * Commit ID to base the changes on.
     * It will be set to the working copy base revision/commitId if not specified.
     * It will be a hash for Git repositories and a revision number for Subversion repositories.
     */
    targetCommitId?: string;
    /** A message to identify the changes to commit. */
    commitMessage?: string;
    /** Set true to commit to a targetBranchName that is different from the working copy base branch name. */
    force?: boolean;
}
/** Options to get information about the branches of the version control model repository for a Mendix app. */
export interface IGetBranchesOptions {
    /** The number of items to return per result page. Defaults to 20 items. Maximum is 100 items. */
    limit?: number;
    /**
     * A cursor specifying which page to retrieve.
     * To obtain a cursor value, see the cursors property of the response payload of this operation. If no cursor is specified, the first page is returned.
     *
     * Note: To the user of this API, a cursor is an opaque value that can only be obtained from a previous API response.
     */
    cursor?: string;
}
/** Options to get information about the commits of a specific branch of the version control model repository for a Mendix app. */
export interface IGetBranchCommitsOptions {
    /** The number of items to return per result page. Defaults to 20 items. Maximum is 100 items. */
    limit?: number;
    /**
     * A cursor specifying which page to retrieve.
     * To obtain a cursor value, see the cursors property of the response payload of this operation. If no cursor is specified, the first page is returned.
     *
     * Note: To the user of this API, a cursor is an opaque value that can only be obtained from a previous API response.
     */
    cursor?: string;
}
/** Information about the version control model repository for a Mendix app. */
export interface IRepositoryInfo {
    /** The type of model repository. Possible values: `"svn"` and `"git"`. */
    type: RepositoryType;
    /** The physical URL of the model repository. This URL can be used to checkout the actual model repository contents using either Subversion or Git. */
    url: string;
}
/** Branches of the version control model repository for a Mendix project. */
export interface IBranches {
    /** An array of objects representing the branches of the model repository. */
    items: IBranch[];
    /** An object containing cursors that can be used for pagination. */
    cursors: ICursors;
}
/** Commits of a specific branch of the version control model repository for a Mendix project. */
export interface ICommits {
    /** An array of objects representing the commits of the specified model repository branch. */
    items: ICommit[];
    /** An object containing cursors that can be used for pagination. */
    cursors: ICursors;
}
/** Specific branch of the version control model repository for a Mendix project. */
export interface IBranch {
    /** The name of the branch. */
    name: string;
    /** An object representing the latest commit done on the branch. */
    latestCommit: ICommit;
}
/** Specific commit of a specific branch of the version control model repository for a Mendix project. */
export interface ICommit {
    /**
     * Commit ID.
     * It will be a hash for Git repositories and a revision number for Subversion repositories.
     */
    id: string;
    /** An object with info about the author */
    author: IAuthor;
    /** The commit date and time in RFC 3339 format. */
    date: string;
    /** The commit message. */
    message: string;
    /** An array of related user story IDs, if available. */
    relatedStories: IRelatedStory[];
    /** The Mendix version used to make this commit, if available. */
    mendixVersion?: string;
}
/** Cursors that can be used for pagination. */
export interface ICursors {
    /** A cursor that can be used to retrieve the first page. */
    first: string;
    /** A cursor that can be used to retrieve the previous page. The absence of this property indicates that this is the first page. */
    prev?: string;
    /** A cursor that can be used to retrieve the next page. The absence of this property indicates that this is the last page. */
    next?: string;
    /** A cursor that can be used to retrieve the last page. */
    last: string;
}
/** The author of a commit. */
export interface IAuthor {
    /** The author name */
    name: string;
    /** The author email */
    email: string;
}
/** User story related to the commit. */
export interface IRelatedStory {
    /** The story ID */
    id: string;
}
