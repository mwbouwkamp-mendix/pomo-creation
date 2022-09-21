/**
 * Mendix Platform configuration that consists of service endpoints and credentials.
 */
export interface IMendixPlatformConfig {
    /** Repository service endoint. Default is https://repository.api.mendix.com */
    repositoryServiceEndpoint: string;
    /** Model server endpoint. Default is https://model.api.mendix.com */
    modelServerEndpoint: string;
    /** Project service endpoint. Default is https://projectservice.mendix.com */
    projectServiceEndpoint: string;
    /** Personal access token for Mendix API. You can create it via https://warden.mendix.com */
    mendixToken: string;
}
/**
 * Set the platform endpoints and credentials.
 * @param newConfig The configuration to set.
 */
export declare function setPlatformConfig(newConfig: Partial<IMendixPlatformConfig>): void;
