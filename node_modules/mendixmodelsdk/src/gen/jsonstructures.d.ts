import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
import { mappings } from "./mappings";
import { xmlschemas } from "./xmlschemas";
export declare namespace jsonstructures {
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `JsonStructures`.
     */
    /**
     * In version 6.6.0: introduced
     */
    class JsonElement extends mappings.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsJsonStructure(): JsonStructure;
        get containerAsElement(): mappings.Element;
        get originalValue(): string;
        set originalValue(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new JsonElement instance in the SDK and on the server.
         * The new JsonElement will be automatically stored in the 'elements' property
         * of the parent JsonStructure element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 and higher
         */
        static createInJsonStructureUnderElements(container: JsonStructure): JsonElement;
        /**
         * Creates and returns a new JsonElement instance in the SDK and on the server.
         * The new JsonElement will be automatically stored in the 'children' property
         * of the parent mappings.Element element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 and higher
         */
        static createInElementUnderChildren(container: mappings.Element): JsonElement;
        /**
         * Creates and returns a new JsonElement instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): JsonElement;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/json-structures relevant section in reference guide}
     *
     * In version 6.6.0: removed experimental
     * In version 6.2.0: introduced
     */
    interface IJsonStructure extends xmlschemas.IMxSchema {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        asLoaded(): JsonStructure;
        load(callback: (element: JsonStructure) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<JsonStructure>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/json-structures relevant section in reference guide}
     *
     * In version 6.6.0: removed experimental
     * In version 6.2.0: introduced
     */
    class JsonStructure extends xmlschemas.MxSchema implements IJsonStructure {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFolderBase(): projects.FolderBase;
        get jsonSnippet(): string;
        set jsonSnippet(newValue: string);
        /**
         * In version 6.6.0: introduced
         */
        get elements(): internal.IList<mappings.Element>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
        /**
         * Creates a new JsonStructure unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container: projects.IFolderBase): JsonStructure;
    }
}
import { projects } from "./projects";
import { IModel } from "./base-model";
