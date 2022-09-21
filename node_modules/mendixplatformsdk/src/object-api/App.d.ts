import { ICreateTemporaryWorkingCopyOptions } from "../clients";
import { OnlineWorkingCopy } from "./OnlineWorkingCopy";
import { Repository } from "./Repository";
/** The object API of the Mendix app. */
export declare class App {
    constructor(appId: string);
    /**
     * The App ID used to uniquely identify the Mendix app. The App ID can be found in the
     * [Developer Portal](https://home.mendix.com) under the General Settings page of the app.
     *
     * Note: the App ID is sometimes also called Project ID.
     */
    readonly appId: string;
    /**
     * Delete the current app.
     *
     * Note: be careful when using this, since this is permanent and will remove all data of this app.
     */
    delete(): Promise<void>;
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
    createTemporaryWorkingCopy(branchName: string, options?: ICreateTemporaryWorkingCopyOptions): Promise<OnlineWorkingCopy>;
    /**
     * Open an existing working copy by giving its ID.
     *
     * @param workingCopyId The ID of the working copy to open.
     * @returns the object API of the online working copy, which can be used to open and edit its contents and to commit made changes.
     */
    getOnlineWorkingCopy(workingCopyId: string): OnlineWorkingCopy;
    /**
     * Get Repository object, including model repository info.
     *
     * @returns the object API of the model repository, which can be used to call the Public Team Server API.
     */
    getRepository(): Repository;
}
