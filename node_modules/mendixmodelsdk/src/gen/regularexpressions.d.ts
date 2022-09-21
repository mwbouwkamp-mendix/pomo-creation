import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
import { projects } from "./projects";
export declare namespace regularexpressions {
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `RegularExpressions`.
     */
    /**
     * See: {@link https://docs.mendix.com/refguide/regular-expressions relevant section in reference guide}
     */
    interface IRegularExpression extends projects.IDocument {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        asLoaded(): RegularExpression;
        load(callback: (element: RegularExpression) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<RegularExpression>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/regular-expressions relevant section in reference guide}
     */
    class RegularExpression extends projects.Document implements IRegularExpression {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFolderBase(): projects.FolderBase;
        get regEx(): string;
        set regEx(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
        /**
         * Creates a new RegularExpression unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container: projects.IFolderBase): RegularExpression;
    }
}
import { IModel } from "./base-model";
