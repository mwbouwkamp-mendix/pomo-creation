import { configuration } from "../configuration";
export interface IBasicAuthInfo {
    auth: "basic";
    username: string;
    password: string;
    openid?: string;
}
export interface IPATAuthInfo {
    auth: "pat";
    personalAccessToken: string;
}
declare type AuthInfo = IBasicAuthInfo | IPATAuthInfo;
export declare function getAuthInfo(config: configuration.ISdkConfig): AuthInfo;
export {};
