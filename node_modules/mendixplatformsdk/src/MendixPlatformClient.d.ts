import { ICreateNewAppOptions } from "./clients";
import { App } from "./object-api";
/**
 * API client to interact with the Mendix Platform.
 */
export declare class MendixPlatformClient {
    /**
     * Create a new Mendix app in the Mendix Platform and commit it in the model repository.
     * @param appName Name of the app (maximum 200 characters; must not contain any special characters other than spaces (‘ ’), dash (‘-’) or underscore (‘_’)
     * @param options Options to create the app such as image and app template.
     * @returns The object API of the created Mendix app.
     */
    createNewApp(appName: string, options?: ICreateNewAppOptions): Promise<App>;
    /**
     * Get the object API of the specified Mendix app.
     * @param appId The app ID (also known as project ID) of the Mendix app.
     * @returns The object API of the specified Mendix app.
     */
    getApp(appId: string): App;
}
