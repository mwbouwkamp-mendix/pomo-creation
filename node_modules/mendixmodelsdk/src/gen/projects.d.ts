import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
export declare namespace projects {
    class ExportLevel extends internal.AbstractEnum {
        static Hidden: ExportLevel;
        static API: ExportLevel;
        protected qualifiedTsTypeName: string;
    }
    class ModuleExportLevel extends internal.AbstractEnum {
        static Source: ModuleExportLevel;
        static Protected: ModuleExportLevel;
        protected qualifiedTsTypeName: string;
    }
    class ProtectedModuleType extends internal.AbstractEnum {
        static AddOn: ProtectedModuleType;
        static Solution: ProtectedModuleType;
        protected qualifiedTsTypeName: string;
    }
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `Projects`.
     */
    interface IModuleDocument extends internal.IModelUnit {
        readonly model: IModel;
        readonly containerAsFolderBase: IFolderBase;
        readonly containerAsModule: IModule;
        asLoaded(): ModuleDocument;
        load(callback: (element: ModuleDocument) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ModuleDocument>;
    }
    abstract class ModuleDocument extends internal.ModelUnit<IModel> implements IModuleDocument {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFolderBase(): FolderBase;
        get containerAsModule(): Module;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: IFolderBase | IModule);
    }
    interface IDocument extends IModuleDocument, internal.IByNameReferrable {
        readonly model: IModel;
        readonly containerAsFolderBase: IFolderBase;
        readonly name: string;
        /**
         * In version 9.10.0: added public
         */
        readonly documentation: string;
        /**
         * In version 9.11.0: added public
         */
        readonly excluded: boolean;
        asLoaded(): Document;
        load(callback: (element: Document) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<Document>;
    }
    abstract class Document extends ModuleDocument implements IDocument {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFolderBase(): FolderBase;
        get name(): string;
        set name(newValue: string);
        /**
         * In version 9.10.0: added public
         */
        get documentation(): string;
        set documentation(newValue: string);
        /**
         * In version 9.11.0: added public
         */
        get excluded(): boolean;
        set excluded(newValue: boolean);
        /**
         * In version 9.3.0: introduced
         */
        get exportLevel(): ExportLevel;
        set exportLevel(newValue: ExportLevel);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: IFolderBase);
        get qualifiedName(): string | null;
    }
    interface IFolderBase extends internal.IStructuralUnit {
        readonly model: IModel;
        readonly containerAsFolderBase: IFolderBase;
        readonly containerAsProject: IProject;
        folders: internal.IList<IFolder>;
        documents: internal.IList<IDocument>;
    }
    abstract class FolderBase extends internal.StructuralUnit<IModel> implements IFolderBase {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFolderBase(): FolderBase;
        get containerAsProject(): Project;
        get folders(): internal.IList<IFolder>;
        get documents(): internal.IList<IDocument>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: IFolderBase | IProject);
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/resources relevant section in reference guide}
     */
    interface IFolder extends IFolderBase {
        readonly model: IModel;
        readonly containerAsFolderBase: IFolderBase;
        name: string;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/resources relevant section in reference guide}
     */
    class Folder extends FolderBase implements IFolder {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFolderBase(): FolderBase;
        get name(): string;
        set name(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: IFolderBase);
        /**
         * Creates a new Folder unit in the SDK and on the server.
         * Expects one argument, the IFolderBase in which this unit is contained.
         */
        static createIn(container: IFolderBase): Folder;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/modules relevant section in reference guide}
     */
    interface IModule extends IFolderBase {
        readonly model: IModel;
        readonly containerAsProject: IProject;
        /**
         * The index of where this Module appears in the project.
         * This property is <em>required</em>, and of type double.
         * Also, its value needs to be unique among its siblings (meaning, in code: <tt>containerAsProject.modules</tt>) in the project.
         * In other words: <tt>containerAsProject.modules.map(m => m.sortedIndex)</tt> (TS syntax) needs to be a list with unique values.
         */
        sortIndex: number;
        name: string;
        /**
         * This property is required and cannot be set to null.
         */
        domainModel: domainmodels.IDomainModel;
        /**
         * This property is required and cannot be set to null.
         *
         * In version 9.8.0: introduced
         */
        moduleSettings: IModuleSettings;
        /**
         * This property is required and cannot be set to null.
         */
        moduleSecurity: security.IModuleSecurity;
        fromAppStore: boolean;
        /**
         * In version 9.1.0: deleted
         * In version 8.5.0: introduced
         */
        isReusableComponent: boolean;
        appStoreGuid: string;
        appStoreVersionGuid: string;
        appStoreVersion: string;
        /**
         * In version 8.13.0: introduced
         */
        appStorePackageId: number;
        /**
         * In version 9.8.0: deleted
         * In version 9.3.0: introduced
         */
        exportLevel: ModuleExportLevel;
        /**
         * In version 9.3.0: introduced
         */
        isThemeModule: boolean;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/modules relevant section in reference guide}
     */
    class Module extends FolderBase implements IModule {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsProject(): Project;
        /**
         * The index of where this Module appears in the project.
         * This property is <em>required</em>, and of type double.
         * Also, its value needs to be unique among its siblings (meaning, in code: <tt>containerAsProject.modules</tt>) in the project.
         * In other words: <tt>containerAsProject.modules.map(m => m.sortedIndex)</tt> (TS syntax) needs to be a list with unique values.
         */
        get sortIndex(): number;
        set sortIndex(newValue: number);
        get name(): string;
        set name(newValue: string);
        get domainModel(): domainmodels.IDomainModel;
        set domainModel(newValue: domainmodels.IDomainModel);
        /**
         * In version 9.8.0: introduced
         */
        get moduleSettings(): IModuleSettings;
        set moduleSettings(newValue: IModuleSettings);
        get moduleSecurity(): security.IModuleSecurity;
        set moduleSecurity(newValue: security.IModuleSecurity);
        get fromAppStore(): boolean;
        set fromAppStore(newValue: boolean);
        /**
         * In version 9.1.0: deleted
         * In version 8.5.0: introduced
         */
        get isReusableComponent(): boolean;
        set isReusableComponent(newValue: boolean);
        get appStoreGuid(): string;
        set appStoreGuid(newValue: string);
        get appStoreVersionGuid(): string;
        set appStoreVersionGuid(newValue: string);
        get appStoreVersion(): string;
        set appStoreVersion(newValue: string);
        /**
         * In version 8.13.0: introduced
         */
        get appStorePackageId(): number;
        set appStorePackageId(newValue: number);
        /**
         * In version 9.8.0: deleted
         * In version 9.3.0: introduced
         */
        get exportLevel(): ModuleExportLevel;
        set exportLevel(newValue: ModuleExportLevel);
        /**
         * In version 9.3.0: introduced
         */
        get isThemeModule(): boolean;
        set isThemeModule(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: IProject);
        /**
         * Creates a new Module unit in the SDK and on the server.
         * Expects one argument, the IProject in which this unit is contained.
         */
        static createIn(container: IProject): Module;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/module-settings relevant section in reference guide}
     *
     * In version 9.8.0: introduced
     */
    interface IModuleSettings extends IModuleDocument {
        readonly model: IModel;
        readonly containerAsModule: IModule;
        asLoaded(): ModuleSettings;
        load(callback: (element: ModuleSettings) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ModuleSettings>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/module-settings relevant section in reference guide}
     *
     * In version 9.8.0: introduced
     */
    class ModuleSettings extends ModuleDocument implements IModuleSettings {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsModule(): Module;
        get exportLevel(): ModuleExportLevel;
        set exportLevel(newValue: ModuleExportLevel);
        /**
         * In version 9.12.0: introduced
         */
        get protectedModuleType(): ProtectedModuleType;
        set protectedModuleType(newValue: ProtectedModuleType);
        get version(): string;
        set version(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: IModule);
        /**
         * Creates a new ModuleSettings unit in the SDK and on the server.
         * Expects one argument, the IModule in which this unit is contained.
         */
        static createIn(container: IModule): ModuleSettings;
    }
    class OneTimeConversionMarker extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsProjectConversion(): ProjectConversion;
        get name(): string;
        set name(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new OneTimeConversionMarker instance in the SDK and on the server.
         * The new OneTimeConversionMarker will be automatically stored in the 'markers' property
         * of the parent ProjectConversion element passed as argument.
         */
        static createIn(container: ProjectConversion): OneTimeConversionMarker;
        /**
         * Creates and returns a new OneTimeConversionMarker instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): OneTimeConversionMarker;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/project relevant section in reference guide}
     */
    interface IProject extends internal.IStructuralUnit {
        readonly model: IModel;
        projectDocuments: internal.IList<IProjectDocument>;
        modules: internal.IList<IModule>;
        /**
         * This property is required and cannot be set to null.
         */
        projectConversion: IProjectConversion;
        isSystemProject: boolean;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/project relevant section in reference guide}
     */
    class Project extends internal.StructuralUnit<IModel> implements IProject {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get projectDocuments(): internal.IList<IProjectDocument>;
        get modules(): internal.IList<IModule>;
        get projectConversion(): IProjectConversion;
        set projectConversion(newValue: IProjectConversion);
        get isSystemProject(): boolean;
        set isSystemProject(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: internal.IStructuralUnit);
    }
    interface IProjectConversion extends internal.IModelUnit {
        readonly model: IModel;
        readonly containerAsProject: IProject;
        asLoaded(): ProjectConversion;
        load(callback: (element: ProjectConversion) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ProjectConversion>;
    }
    class ProjectConversion extends internal.ModelUnit<IModel> implements IProjectConversion {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsProject(): Project;
        get markers(): internal.IList<OneTimeConversionMarker>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: IProject);
        /**
         * Creates a new ProjectConversion unit in the SDK and on the server.
         * Expects one argument, the IProject in which this unit is contained.
         */
        static createIn(container: IProject): ProjectConversion;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/project relevant section in reference guide}
     */
    interface IProjectDocument extends internal.IModelUnit {
        readonly model: IModel;
        readonly containerAsProject: IProject;
        asLoaded(): ProjectDocument;
        load(callback: (element: ProjectDocument) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ProjectDocument>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/project relevant section in reference guide}
     */
    abstract class ProjectDocument extends internal.ModelUnit<IModel> implements IProjectDocument {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsProject(): Project;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: IProject);
    }
}
import { domainmodels } from "./domainmodels";
import { security } from "./security";
import { IModel } from "./base-model";
