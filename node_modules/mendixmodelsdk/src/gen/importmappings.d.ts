import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
import { mappings } from "./mappings";
export declare namespace importmappings {
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `ImportMappings`.
     */
    /**
     * See: {@link https://docs.mendix.com/refguide/import-mappings relevant section in reference guide}
     */
    interface IImportMapping extends mappings.IMappingDocument {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        asLoaded(): ImportMapping;
        load(callback: (element: ImportMapping) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ImportMapping>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/import-mappings relevant section in reference guide}
     */
    class ImportMapping extends mappings.MappingDocument implements IImportMapping {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFolderBase(): projects.FolderBase;
        /**
         * In version 7.16.0: introduced
         */
        get parameterType(): datatypes.DataType;
        set parameterType(newValue: datatypes.DataType);
        get useSubtransactionsForMicroflows(): boolean;
        set useSubtransactionsForMicroflows(newValue: boolean);
        /**
         * In version 7.16.0: deleted
         */
        get parameter(): domainmodels.IEntity | null;
        set parameter(newValue: domainmodels.IEntity | null);
        get parameterQualifiedName(): string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
        /**
         * Creates a new ImportMapping unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container: projects.IFolderBase): ImportMapping;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/import-mappings relevant section in reference guide}
     */
    class ImportObjectMappingElement extends mappings.ObjectMappingElement {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsMappingDocument(): mappings.MappingDocument;
        get containerAsObjectMappingElement(): mappings.ObjectMappingElement;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ImportObjectMappingElement instance in the SDK and on the server.
         * The new ImportObjectMappingElement will be automatically stored in the 'rootMappingElements' property
         * of the parent mappings.MappingDocument element passed as argument.
         */
        static createInMappingDocumentUnderRootMappingElements(container: mappings.MappingDocument): ImportObjectMappingElement;
        /**
         * Creates and returns a new ImportObjectMappingElement instance in the SDK and on the server.
         * The new ImportObjectMappingElement will be automatically stored in the 'children' property
         * of the parent mappings.ObjectMappingElement element passed as argument.
         */
        static createInObjectMappingElementUnderChildren(container: mappings.ObjectMappingElement): ImportObjectMappingElement;
        /**
         * Creates and returns a new ImportObjectMappingElement instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ImportObjectMappingElement;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/import-mappings relevant section in reference guide}
     */
    class ImportValueMappingElement extends mappings.ValueMappingElement {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsObjectMappingElement(): mappings.ObjectMappingElement;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ImportValueMappingElement instance in the SDK and on the server.
         * The new ImportValueMappingElement will be automatically stored in the 'children' property
         * of the parent mappings.ObjectMappingElement element passed as argument.
         */
        static createIn(container: mappings.ObjectMappingElement): ImportValueMappingElement;
        /**
         * Creates and returns a new ImportValueMappingElement instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ImportValueMappingElement;
    }
}
import { datatypes } from "./datatypes";
import { domainmodels } from "./domainmodels";
import { projects } from "./projects";
import { IModel } from "./base-model";
