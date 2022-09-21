"use strict";
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.projects = exports.StructureVersionInfo = void 0;
const internal = require("../sdk/internal");
exports.StructureVersionInfo = internal.StructureVersionInfo;
var projects;
(function (projects) {
    class ExportLevel extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "projects.ExportLevel";
        }
    }
    ExportLevel.Hidden = new ExportLevel("Hidden", {});
    ExportLevel.API = new ExportLevel("API", {});
    projects.ExportLevel = ExportLevel;
    class ModuleExportLevel extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "projects.ModuleExportLevel";
        }
    }
    ModuleExportLevel.Source = new ModuleExportLevel("Source", {});
    ModuleExportLevel.Protected = new ModuleExportLevel("Protected", {});
    projects.ModuleExportLevel = ModuleExportLevel;
    class ProtectedModuleType extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "projects.ProtectedModuleType";
        }
    }
    ProtectedModuleType.AddOn = new ProtectedModuleType("AddOn", {});
    ProtectedModuleType.Solution = new ProtectedModuleType("Solution", {});
    projects.ProtectedModuleType = ProtectedModuleType;
    class ModuleDocument extends internal.ModelUnit {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
        }
        get containerAsFolderBase() {
            return super.getContainerAs(FolderBase);
        }
        get containerAsModule() {
            return super.getContainerAs(Module);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ModuleDocument.structureTypeName = "Projects$ModuleDocument";
    ModuleDocument.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.ModelUnit);
    projects.ModuleDocument = ModuleDocument;
    class Document extends ModuleDocument {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            /** @internal */
            this.__name = new internal.PrimitiveProperty(Document, this, "name", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__documentation = new internal.PrimitiveProperty(Document, this, "documentation", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__excluded = new internal.PrimitiveProperty(Document, this, "excluded", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__exportLevel = new internal.EnumProperty(Document, this, "exportLevel", ExportLevel.Hidden, ExportLevel);
            this._declaredAsNamespace = true;
        }
        get containerAsFolderBase() {
            return super.getContainerAs(FolderBase);
        }
        get name() {
            return this.__name.get();
        }
        set name(newValue) {
            this.__name.set(newValue);
        }
        /**
         * In version 9.10.0: added public
         */
        get documentation() {
            return this.__documentation.get();
        }
        set documentation(newValue) {
            this.__documentation.set(newValue);
        }
        /**
         * In version 9.11.0: added public
         */
        get excluded() {
            return this.__excluded.get();
        }
        set excluded(newValue) {
            this.__excluded.set(newValue);
        }
        /**
         * In version 9.3.0: introduced
         */
        get exportLevel() {
            return this.__exportLevel.get();
        }
        set exportLevel(newValue) {
            this.__exportLevel.set(newValue);
        }
        get qualifiedName() {
            return this._getQualifiedName();
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__exportLevel.isAvailable) {
                this.exportLevel = ExportLevel.Hidden;
            }
        }
    }
    Document.structureTypeName = "Projects$Document";
    Document.versionInfo = new exports.StructureVersionInfo({
        properties: {
            name: {
                public: {
                    currentValue: true
                }
            },
            documentation: {
                public: {
                    currentValue: true,
                    changedIn: ["9.10.0"]
                }
            },
            excluded: {
                public: {
                    currentValue: true,
                    changedIn: ["9.11.0"]
                }
            },
            exportLevel: {
                introduced: "9.3.0"
            }
        }
    }, internal.StructureType.ModelUnit);
    projects.Document = Document;
    class FolderBase extends internal.StructuralUnit {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            /** @internal */
            this.__folders = new internal.StructuralChildListProperty(FolderBase, this, "folders", []);
            /** @internal */
            this.__documents = new internal.StructuralChildListProperty(FolderBase, this, "documents", []);
        }
        get containerAsFolderBase() {
            return super.getContainerAs(FolderBase);
        }
        get containerAsProject() {
            return super.getContainerAs(Project);
        }
        get folders() {
            return this.__folders.get();
        }
        get documents() {
            return this.__documents.get();
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    FolderBase.structureTypeName = "Projects$FolderBase";
    FolderBase.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.StructuralUnit);
    projects.FolderBase = FolderBase;
    /**
     * See: {@link https://docs.mendix.com/refguide/resources relevant section in reference guide}
     */
    class Folder extends FolderBase {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            /** @internal */
            this.__name = new internal.PrimitiveProperty(Folder, this, "name", "", internal.PrimitiveTypeEnum.String);
            this._containmentName = "folders";
        }
        get containerAsFolderBase() {
            return super.getContainerAs(FolderBase);
        }
        get name() {
            return this.__name.get();
        }
        set name(newValue) {
            this.__name.set(newValue);
        }
        /**
         * Creates a new Folder unit in the SDK and on the server.
         * Expects one argument, the IFolderBase in which this unit is contained.
         */
        static createIn(container) {
            return internal.instancehelpers.createUnit(container, Folder);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    Folder.structureTypeName = "Projects$Folder";
    Folder.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.StructuralUnit);
    projects.Folder = Folder;
    /**
     * See: {@link https://docs.mendix.com/refguide/modules relevant section in reference guide}
     */
    class Module extends FolderBase {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            /** @internal */
            this.__sortIndex = new internal.PrimitiveProperty(Module, this, "sortIndex", 0, internal.PrimitiveTypeEnum.Double);
            /** @internal */
            this.__name = new internal.PrimitiveProperty(Module, this, "name", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__domainModel = new internal.StructuralChildProperty(Module, this, "domainModel", null);
            /** @internal */
            this.__moduleSettings = new internal.StructuralChildProperty(Module, this, "moduleSettings", null);
            /** @internal */
            this.__moduleSecurity = new internal.StructuralChildProperty(Module, this, "moduleSecurity", null);
            /** @internal */
            this.__fromAppStore = new internal.PrimitiveProperty(Module, this, "fromAppStore", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__isReusableComponent = new internal.PrimitiveProperty(Module, this, "isReusableComponent", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__appStoreGuid = new internal.PrimitiveProperty(Module, this, "appStoreGuid", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__appStoreVersionGuid = new internal.PrimitiveProperty(Module, this, "appStoreVersionGuid", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__appStoreVersion = new internal.PrimitiveProperty(Module, this, "appStoreVersion", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__appStorePackageId = new internal.PrimitiveProperty(Module, this, "appStorePackageId", 0, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__exportLevel = new internal.EnumProperty(Module, this, "exportLevel", ModuleExportLevel.Source, ModuleExportLevel);
            /** @internal */
            this.__isThemeModule = new internal.PrimitiveProperty(Module, this, "isThemeModule", false, internal.PrimitiveTypeEnum.Boolean);
            this._declaredAsNamespace = true;
            this._containmentName = "modules";
        }
        get containerAsProject() {
            return super.getContainerAs(Project);
        }
        /**
         * The index of where this Module appears in the project.
         * This property is <em>required</em>, and of type double.
         * Also, its value needs to be unique among its siblings (meaning, in code: <tt>containerAsProject.modules</tt>) in the project.
         * In other words: <tt>containerAsProject.modules.map(m => m.sortedIndex)</tt> (TS syntax) needs to be a list with unique values.
         */
        get sortIndex() {
            return this.__sortIndex.get();
        }
        set sortIndex(newValue) {
            this.__sortIndex.set(newValue);
        }
        get name() {
            return this.__name.get();
        }
        set name(newValue) {
            this.__name.set(newValue);
        }
        get domainModel() {
            return this.__domainModel.get();
        }
        set domainModel(newValue) {
            this.__domainModel.set(newValue);
        }
        /**
         * In version 9.8.0: introduced
         */
        get moduleSettings() {
            return this.__moduleSettings.get();
        }
        set moduleSettings(newValue) {
            this.__moduleSettings.set(newValue);
        }
        get moduleSecurity() {
            return this.__moduleSecurity.get();
        }
        set moduleSecurity(newValue) {
            this.__moduleSecurity.set(newValue);
        }
        get fromAppStore() {
            return this.__fromAppStore.get();
        }
        set fromAppStore(newValue) {
            this.__fromAppStore.set(newValue);
        }
        /**
         * In version 9.1.0: deleted
         * In version 8.5.0: introduced
         */
        get isReusableComponent() {
            return this.__isReusableComponent.get();
        }
        set isReusableComponent(newValue) {
            this.__isReusableComponent.set(newValue);
        }
        get appStoreGuid() {
            return this.__appStoreGuid.get();
        }
        set appStoreGuid(newValue) {
            this.__appStoreGuid.set(newValue);
        }
        get appStoreVersionGuid() {
            return this.__appStoreVersionGuid.get();
        }
        set appStoreVersionGuid(newValue) {
            this.__appStoreVersionGuid.set(newValue);
        }
        get appStoreVersion() {
            return this.__appStoreVersion.get();
        }
        set appStoreVersion(newValue) {
            this.__appStoreVersion.set(newValue);
        }
        /**
         * In version 8.13.0: introduced
         */
        get appStorePackageId() {
            return this.__appStorePackageId.get();
        }
        set appStorePackageId(newValue) {
            this.__appStorePackageId.set(newValue);
        }
        /**
         * In version 9.8.0: deleted
         * In version 9.3.0: introduced
         */
        get exportLevel() {
            return this.__exportLevel.get();
        }
        set exportLevel(newValue) {
            this.__exportLevel.set(newValue);
        }
        /**
         * In version 9.3.0: introduced
         */
        get isThemeModule() {
            return this.__isThemeModule.get();
        }
        set isThemeModule(newValue) {
            this.__isThemeModule.set(newValue);
        }
        /**
         * Creates a new Module unit in the SDK and on the server.
         * Expects one argument, the IProject in which this unit is contained.
         */
        static createIn(container) {
            return internal.instancehelpers.createUnit(container, Module);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__exportLevel.isAvailable) {
                this.exportLevel = ModuleExportLevel.Source;
            }
        }
    }
    Module.structureTypeName = "Projects$Module";
    Module.versionInfo = new exports.StructureVersionInfo({
        properties: {
            domainModel: {
                required: {
                    currentValue: true
                }
            },
            moduleSettings: {
                introduced: "9.8.0",
                required: {
                    currentValue: true
                }
            },
            moduleSecurity: {
                required: {
                    currentValue: true
                }
            },
            isReusableComponent: {
                introduced: "8.5.0",
                deleted: "9.1.0",
                deletionMessage: null
            },
            appStorePackageId: {
                introduced: "8.13.0"
            },
            exportLevel: {
                introduced: "9.3.0",
                deleted: "9.8.0",
                deletionMessage: null
            },
            isThemeModule: {
                introduced: "9.3.0"
            }
        }
    }, internal.StructureType.StructuralUnit);
    projects.Module = Module;
    /**
     * See: {@link https://docs.mendix.com/refguide/module-settings relevant section in reference guide}
     *
     * In version 9.8.0: introduced
     */
    class ModuleSettings extends ModuleDocument {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            /** @internal */
            this.__exportLevel = new internal.EnumProperty(ModuleSettings, this, "exportLevel", ModuleExportLevel.Source, ModuleExportLevel);
            /** @internal */
            this.__protectedModuleType = new internal.EnumProperty(ModuleSettings, this, "protectedModuleType", ProtectedModuleType.AddOn, ProtectedModuleType);
            /** @internal */
            this.__version = new internal.PrimitiveProperty(ModuleSettings, this, "version", "1.0.0", internal.PrimitiveTypeEnum.String);
            this._containmentName = "moduleSettings";
        }
        get containerAsModule() {
            return super.getContainerAs(Module);
        }
        get exportLevel() {
            return this.__exportLevel.get();
        }
        set exportLevel(newValue) {
            this.__exportLevel.set(newValue);
        }
        /**
         * In version 9.12.0: introduced
         */
        get protectedModuleType() {
            return this.__protectedModuleType.get();
        }
        set protectedModuleType(newValue) {
            this.__protectedModuleType.set(newValue);
        }
        get version() {
            return this.__version.get();
        }
        set version(newValue) {
            this.__version.set(newValue);
        }
        /**
         * Creates a new ModuleSettings unit in the SDK and on the server.
         * Expects one argument, the IModule in which this unit is contained.
         */
        static createIn(container) {
            return internal.instancehelpers.createUnit(container, ModuleSettings);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.exportLevel = ModuleExportLevel.Source;
            if (this.__protectedModuleType.isAvailable) {
                this.protectedModuleType = ProtectedModuleType.AddOn;
            }
            this.version = "1.0.0";
        }
    }
    ModuleSettings.structureTypeName = "Projects$ModuleSettings";
    ModuleSettings.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.8.0",
        properties: {
            protectedModuleType: {
                introduced: "9.12.0"
            }
        }
    }, internal.StructureType.ModelUnit);
    projects.ModuleSettings = ModuleSettings;
    class OneTimeConversionMarker extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__name = new internal.PrimitiveProperty(OneTimeConversionMarker, this, "name", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new OneTimeConversionMarker() cannot be invoked directly, please use 'model.projects.createOneTimeConversionMarker()'");
            }
        }
        get containerAsProjectConversion() {
            return super.getContainerAs(ProjectConversion);
        }
        get name() {
            return this.__name.get();
        }
        set name(newValue) {
            this.__name.set(newValue);
        }
        /**
         * Creates and returns a new OneTimeConversionMarker instance in the SDK and on the server.
         * The new OneTimeConversionMarker will be automatically stored in the 'markers' property
         * of the parent ProjectConversion element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, OneTimeConversionMarker, "markers", true);
        }
        /**
         * Creates and returns a new OneTimeConversionMarker instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, OneTimeConversionMarker);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    OneTimeConversionMarker.structureTypeName = "Projects$OneTimeConversionMarker";
    OneTimeConversionMarker.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    projects.OneTimeConversionMarker = OneTimeConversionMarker;
    /**
     * See: {@link https://docs.mendix.com/refguide/project relevant section in reference guide}
     */
    class Project extends internal.StructuralUnit {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            /** @internal */
            this.__projectDocuments = new internal.StructuralChildListProperty(Project, this, "projectDocuments", []);
            /** @internal */
            this.__modules = new internal.StructuralChildListProperty(Project, this, "modules", []);
            /** @internal */
            this.__projectConversion = new internal.StructuralChildProperty(Project, this, "projectConversion", null);
            /** @internal */
            this.__isSystemProject = new internal.PrimitiveProperty(Project, this, "isSystemProject", false, internal.PrimitiveTypeEnum.Boolean);
            this._containmentName = "";
        }
        get projectDocuments() {
            return this.__projectDocuments.get();
        }
        get modules() {
            return this.__modules.get();
        }
        get projectConversion() {
            return this.__projectConversion.get();
        }
        set projectConversion(newValue) {
            this.__projectConversion.set(newValue);
        }
        get isSystemProject() {
            return this.__isSystemProject.get();
        }
        set isSystemProject(newValue) {
            this.__isSystemProject.set(newValue);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    Project.structureTypeName = "Projects$Project";
    Project.versionInfo = new exports.StructureVersionInfo({
        properties: {
            projectConversion: {
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.StructuralUnit);
    projects.Project = Project;
    class ProjectConversion extends internal.ModelUnit {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            /** @internal */
            this.__markers = new internal.PartListProperty(ProjectConversion, this, "markers", []);
            this._containmentName = "projectConversion";
        }
        get containerAsProject() {
            return super.getContainerAs(Project);
        }
        get markers() {
            return this.__markers.get();
        }
        /**
         * Creates a new ProjectConversion unit in the SDK and on the server.
         * Expects one argument, the IProject in which this unit is contained.
         */
        static createIn(container) {
            return internal.instancehelpers.createUnit(container, ProjectConversion);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ProjectConversion.structureTypeName = "Projects$ProjectConversion";
    ProjectConversion.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.ModelUnit);
    projects.ProjectConversion = ProjectConversion;
    /**
     * See: {@link https://docs.mendix.com/refguide/project relevant section in reference guide}
     */
    class ProjectDocument extends internal.ModelUnit {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
        }
        get containerAsProject() {
            return super.getContainerAs(Project);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ProjectDocument.structureTypeName = "Projects$ProjectDocument";
    ProjectDocument.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.ModelUnit);
    projects.ProjectDocument = ProjectDocument;
})(projects = exports.projects || (exports.projects = {}));
//# sourceMappingURL=projects.js.map