import * as classes from "./gen/all-model-classes";
import { configuration } from "./sdk/configuration";
import * as base from "./gen/base-model";
import { ModelSdkClientImpl } from "./ModelSdkClientImpl";
export declare type IModel = base.IModel;
/**
 * Implementation of {@link IModel}.
 */
export declare class Model extends base.BaseModel implements IModel {
    private allModelClasses;
    static createSdkClient(connectionConfig: configuration.ISdkConfig): ModelSdkClientImpl<IModel, Model>;
    /**
     * Returns the structural unit of type "Projects$Project" which is the project's root,
     * cast to the appropriate type.
     */
    get root(): classes.projects.IProject;
    findModuleByQualifiedName(qname: string): classes.projects.IModule | null;
}
export declare type ModelSdkClient = ModelSdkClientImpl<IModel, Model>;
