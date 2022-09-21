import * as internal from "./internal";
export declare enum Priority {
    Low = 0,
    Medium = 1,
    High = 2
}
/**
 * The `configuration` module allows the Model SDK user to configure
 * how to communicate with the Model API Server;
 * in particular w.r.t.: authentication, success/error handling, etc.
 */
export declare namespace configuration {
    /**
     * All the details of the connection that's been set up to the Model API Server.
     */
    export interface ISdkConfig {
        credentials?: IBackendCredentials | ISdkCredentials | IPATCredentials;
        endPoint?: string;
        transportation?: internal.ITransportation;
        client?: internal.IModelServerClient;
    }
    /**
     * The credentials with which a trusted backend client (such as sprintr) connects to the Model API Server.
     */
    export interface IBackendCredentials {
        username: string;
        password: string;
        /** The OpenID on behalf which the trusted backend service operates. */
        openid?: string;
    }
    export interface ISdkCredentials {
        username: string;
        apikey: string;
    }
    export interface IPATCredentials {
        personalAccessToken: string;
    }
    interface ICreateWorkingCopyParametersBase {
        name: string;
        /**
         * Mendix project id. Needed for deployment and team server commits
         */
        projectId?: string;
        description?: string;
        avatarUrl?: string;
        priority?: Priority;
        /**
         * Force the working copy state to be marked to contain changes.
         *  - this excludes regular SDK users for the moment.
         */
        markAsChanged?: boolean;
        /**
         * Indicates whether the working copy should be long-lived.
         * This parameter can only be set to true when the Mendix project id is set and the Model SDK is used from a trusted backend
         *  - this excludes regular SDK users for the moment.
         */
        longLived?: boolean;
        /**
         * Indicates whether the new working copy should be the default working copy associated with the provided projectId.
         * This means that this working copy will be opened in the Web Modeler for the given project.
         * This parameter can only be set to true when the Mendix project id is set and the Model SDK is used from a trusted backend
         *  - this excludes regular SDK users for the moment.
         */
        setAsDefault?: boolean;
        /**
         * If this working copy is created from an SVN TeamServer checkout, the BaseRevision / BaseBranch can be used by the Desktop Modeler during merge.
         * @type {number}
         */
        teamServerBaseRevision?: number;
        /**
         * If this working copy is created from a Git TeamServer checkout, the commit id will be used for the clone operation.
         */
        teamServerBaseCommitId?: string;
        /**
         * If this working copy is created from an SVN TeamServer checkout, the BaseRevision / BaseBranch can be used by the Desktop Modeler during merge.
         */
        teamServerBaseBranch?: string;
        /**
         * Indicates whether this working copy is created for the purpose of collaboration between the Desktop modeler and Webmodeler.
         * By setting this, BiDi won't be available anymore for this project and thus requires a modeler with version 7.23.3 or higher.
         */
        isCollaboration?: boolean;
    }
    export interface ICreateWorkingCopyParameters extends ICreateWorkingCopyParametersBase {
        /**
         * Path to the (template) MPK file.
         */
        template: string;
    }
    export interface ICreateWorkingCopyFromTeamServerParameters extends ICreateWorkingCopyParametersBase {
        projectId: string;
        teamServerBaseBranch: string;
        teamServerGitUrl?: string;
    }
    export {};
}
