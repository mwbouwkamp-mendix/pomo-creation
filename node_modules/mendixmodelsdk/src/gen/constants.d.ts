import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
import { projects } from "./projects";
export declare namespace constants {
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `Constants`.
     */
    /**
     * See: {@link https://docs.mendix.com/refguide/constants relevant section in reference guide}
     */
    interface IConstant extends projects.IDocument {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        /**
         * This property is required and cannot be set to null.
         *
         * In version 9.0.5: added public
         * In version 7.9.0: introduced
         */
        readonly type: datatypes.IDataType;
        asLoaded(): Constant;
        load(callback: (element: Constant) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<Constant>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/constants relevant section in reference guide}
     */
    class Constant extends projects.Document implements IConstant {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFolderBase(): projects.FolderBase;
        /**
         * The value of this property is conceptually of type dataTypes.LegacyDataType.
         *
         * In version 7.9.0: deleted
         */
        get dataType(): string;
        set dataType(newValue: string);
        /**
         * In version 9.0.5: added public
         * In version 7.9.0: introduced
         */
        get type(): datatypes.DataType;
        set type(newValue: datatypes.DataType);
        get defaultValue(): string;
        set defaultValue(newValue: string);
        /**
         * In version 8.2.0: introduced
         */
        get exposedToClient(): boolean;
        set exposedToClient(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
        /**
         * Creates a new Constant unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container: projects.IFolderBase): Constant;
    }
}
import { datatypes } from "./datatypes";
import { IModel } from "./base-model";
