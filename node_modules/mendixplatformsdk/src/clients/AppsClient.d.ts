import { ICreateNewAppOptions } from "./types";
/** API client to create and delete Mendix apps. */
export declare class AppsClient {
    private get restConnector();
    /**
     * Create a new Mendix app in the Mendix Platform and commit it in the model repository.
     *
     * @param appName Name of the app (maximum 200 characters; must not contain any special characters other than spaces (‘ ’), dash (‘-’) or underscore (‘_’)
     * @param options Options to create the app such as image and app template.
     * @returns The app ID (also known as project ID) of the created Mendix app.
     */
    createNewApp(appName: string, options?: ICreateNewAppOptions): Promise<string>;
    /**
     * Delete an app by giving it's app ID.
     *
     * Note: be careful when using this, since this is permanent and will remove all data of this app.
     *
     * @param appId The app ID (also known as project ID) of the Mendix app to delete.
     */
    deleteApp(appId: string): Promise<void>;
}
