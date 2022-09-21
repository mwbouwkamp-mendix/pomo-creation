import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
import { codeactions } from "./codeactions";
export declare namespace javascriptactions {
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `JavaScriptActions`.
     */
    /**
     * See: {@link https://docs.mendix.com/refguide/javascript-actions relevant section in reference guide}
     *
     * In version 8.0.0: removed experimental
     * In version 7.21.0: introduced
     */
    interface IJavaScriptAction extends codeactions.ICodeAction {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        /**
         * In version 9.10.0: introduced
         */
        readonly platform: client.SupportedPlatform;
        asLoaded(): JavaScriptAction;
        load(callback: (element: JavaScriptAction) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<JavaScriptAction>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/javascript-actions relevant section in reference guide}
     *
     * In version 8.0.0: removed experimental
     * In version 7.21.0: introduced
     */
    class JavaScriptAction extends codeactions.CodeAction implements IJavaScriptAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFolderBase(): projects.FolderBase;
        /**
         * In version 9.10.0: introduced
         */
        get platform(): client.SupportedPlatform;
        set platform(newValue: client.SupportedPlatform);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
        /**
         * Creates a new JavaScriptAction unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container: projects.IFolderBase): JavaScriptAction;
    }
    /**
     * In version 8.0.0: removed experimental
     * In version 7.21.0: introduced
     */
    interface IJavaScriptActionParameter extends codeactions.ICodeActionParameter {
        readonly model: IModel;
        readonly containerAsCodeAction: codeactions.ICodeAction;
        asLoaded(): JavaScriptActionParameter;
        load(callback: (element: JavaScriptActionParameter) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<JavaScriptActionParameter>;
    }
    /**
     * In version 8.0.0: removed experimental
     * In version 7.21.0: introduced
     */
    class JavaScriptActionParameter extends codeactions.CodeActionParameter implements IJavaScriptActionParameter {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsCodeAction(): codeactions.CodeAction;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new JavaScriptActionParameter instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): JavaScriptActionParameter;
    }
    /**
     * In version 8.4.0: introduced
     */
    interface INanoflowJavaScriptActionParameterType extends codeactions.IParameterType {
        readonly model: IModel;
        readonly containerAsCodeActionParameter: codeactions.ICodeActionParameter;
        asLoaded(): NanoflowJavaScriptActionParameterType;
        load(callback: (element: NanoflowJavaScriptActionParameterType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<NanoflowJavaScriptActionParameterType>;
    }
    /**
     * In version 8.4.0: introduced
     */
    class NanoflowJavaScriptActionParameterType extends codeactions.ParameterType implements INanoflowJavaScriptActionParameterType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsCodeActionParameter(): codeactions.CodeActionParameter;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new NanoflowJavaScriptActionParameterType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): NanoflowJavaScriptActionParameterType;
    }
}
import { client } from "./client";
import { projects } from "./projects";
import { IModel } from "./base-model";
