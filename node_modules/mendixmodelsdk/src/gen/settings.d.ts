import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
import { projects } from "./projects";
export declare namespace settings {
    class CertificateType extends internal.AbstractEnum {
        static Authority: CertificateType;
        static Client: CertificateType;
        protected qualifiedTsTypeName: string;
    }
    class DatabaseType extends internal.AbstractEnum {
        static Hsqldb: DatabaseType;
        static Db2: DatabaseType;
        static SqlServer: DatabaseType;
        static MySql: DatabaseType;
        static Oracle: DatabaseType;
        static PostgreSql: DatabaseType;
        protected qualifiedTsTypeName: string;
    }
    class FirstDayOfWeekEnum extends internal.AbstractEnum {
        static Default: FirstDayOfWeekEnum;
        static Sunday: FirstDayOfWeekEnum;
        static Monday: FirstDayOfWeekEnum;
        static Tuesday: FirstDayOfWeekEnum;
        static Wednesday: FirstDayOfWeekEnum;
        static Thursday: FirstDayOfWeekEnum;
        static Friday: FirstDayOfWeekEnum;
        static Saturday: FirstDayOfWeekEnum;
        protected qualifiedTsTypeName: string;
    }
    class HashAlgorithmType extends internal.AbstractEnum {
        static BCrypt: HashAlgorithmType;
        static SSHA256: HashAlgorithmType;
        static SHA256: HashAlgorithmType;
        static MD5: HashAlgorithmType;
        protected qualifiedTsTypeName: string;
    }
    class RoundingMode extends internal.AbstractEnum {
        static HalfUp: RoundingMode;
        static HalfEven: RoundingMode;
        protected qualifiedTsTypeName: string;
    }
    class ThemeConversionStatusEnum extends internal.AbstractEnum {
        static Done: ThemeConversionStatusEnum;
        static ConvertedChangesInVariables: ThemeConversionStatusEnum;
        static ConvertedChangesInCustom: ThemeConversionStatusEnum;
        static ChangesInAtlas: ThemeConversionStatusEnum;
        static AtlasNotFound: ThemeConversionStatusEnum;
        protected qualifiedTsTypeName: string;
    }
    class UseOptimizedClient extends internal.AbstractEnum {
        static No: UseOptimizedClient;
        static Yes: UseOptimizedClient;
        static MigrationMode: UseOptimizedClient;
        protected qualifiedTsTypeName: string;
    }
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `Settings`.
     */
    /**
     * In version 8.6.0: introduced
     */
    class ActionActivityDefaultColor extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsModelerSettings(): ModelerSettings;
        get actionActivityType(): string;
        set actionActivityType(newValue: string);
        get backgroundColor(): microflows.ActionActivityColor;
        set backgroundColor(newValue: microflows.ActionActivityColor);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ActionActivityDefaultColor instance in the SDK and on the server.
         * The new ActionActivityDefaultColor will be automatically stored in the 'actionActivityDefaultColors' property
         * of the parent ModelerSettings element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.6.0 and higher
         */
        static createIn(container: ModelerSettings): ActionActivityDefaultColor;
        /**
         * Creates and returns a new ActionActivityDefaultColor instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ActionActivityDefaultColor;
    }
    class Certificate extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsCertificateSettings(): CertificateSettings;
        get type(): CertificateType;
        set type(newValue: CertificateType);
        get data(): string | null;
        set data(newValue: string | null);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new Certificate instance in the SDK and on the server.
         * The new Certificate will be automatically stored in the 'certificates' property
         * of the parent CertificateSettings element passed as argument.
         */
        static createIn(container: CertificateSettings): Certificate;
        /**
         * Creates and returns a new Certificate instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): Certificate;
    }
    abstract class ProjectSettingsPart extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsProjectSettings(): ProjectSettings;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    class CertificateSettings extends ProjectSettingsPart {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsProjectSettings(): ProjectSettings;
        get certificates(): internal.IList<Certificate>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new CertificateSettings instance in the SDK and on the server.
         * The new CertificateSettings will be automatically stored in the 'settingsParts' property
         * of the parent ProjectSettings element passed as argument.
         */
        static createIn(container: ProjectSettings): CertificateSettings;
        /**
         * Creates and returns a new CertificateSettings instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): CertificateSettings;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/configuration relevant section in reference guide}
     */
    class Configuration extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsConfigurationSettings(): ConfigurationSettings;
        get name(): string;
        set name(newValue: string);
        get applicationRootUrl(): string;
        set applicationRootUrl(newValue: string);
        get runtimePortNumber(): number;
        set runtimePortNumber(newValue: number);
        get adminPortNumber(): number;
        set adminPortNumber(newValue: number);
        get runtimePortOnlyLocal(): boolean;
        set runtimePortOnlyLocal(newValue: boolean);
        get adminPortOnlyLocal(): boolean;
        set adminPortOnlyLocal(newValue: boolean);
        get maxJavaHeapSize(): number;
        set maxJavaHeapSize(newValue: number);
        /**
         * In version 7.21.0: deleted
         */
        get emulateCloudSecurity(): boolean;
        set emulateCloudSecurity(newValue: boolean);
        get extraJvmParameters(): string;
        set extraJvmParameters(newValue: string);
        get databaseType(): DatabaseType;
        set databaseType(newValue: DatabaseType);
        get databaseUrl(): string;
        set databaseUrl(newValue: string);
        get databaseName(): string;
        set databaseName(newValue: string);
        get databaseUseIntegratedSecurity(): boolean;
        set databaseUseIntegratedSecurity(newValue: boolean);
        get databaseUserName(): string;
        set databaseUserName(newValue: string);
        get databasePassword(): string;
        set databasePassword(newValue: string);
        get customSettings(): internal.IList<CustomSetting>;
        get constantValues(): internal.IList<ConstantValue>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new Configuration instance in the SDK and on the server.
         * The new Configuration will be automatically stored in the 'configurations' property
         * of the parent ConfigurationSettings element passed as argument.
         */
        static createIn(container: ConfigurationSettings): Configuration;
        /**
         * Creates and returns a new Configuration instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): Configuration;
    }
    class ConfigurationSettings extends ProjectSettingsPart {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsProjectSettings(): ProjectSettings;
        get configurations(): internal.IList<Configuration>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ConfigurationSettings instance in the SDK and on the server.
         * The new ConfigurationSettings will be automatically stored in the 'settingsParts' property
         * of the parent ProjectSettings element passed as argument.
         */
        static createIn(container: ProjectSettings): ConfigurationSettings;
        /**
         * Creates and returns a new ConfigurationSettings instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ConfigurationSettings;
    }
    class ConstantValue extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsConfiguration(): Configuration;
        get constant(): constants.IConstant;
        set constant(newValue: constants.IConstant);
        get constantQualifiedName(): string;
        get value(): string;
        set value(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ConstantValue instance in the SDK and on the server.
         * The new ConstantValue will be automatically stored in the 'constantValues' property
         * of the parent Configuration element passed as argument.
         */
        static createIn(container: Configuration): ConstantValue;
        /**
         * Creates and returns a new ConstantValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ConstantValue;
    }
    class CustomSetting extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsConfiguration(): Configuration;
        get name(): string;
        set name(newValue: string);
        get value(): string;
        set value(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new CustomSetting instance in the SDK and on the server.
         * The new CustomSetting will be automatically stored in the 'customSettings' property
         * of the parent Configuration element passed as argument.
         */
        static createIn(container: Configuration): CustomSetting;
        /**
         * Creates and returns a new CustomSetting instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): CustomSetting;
    }
    class IntegrationProjectSettingsPart extends ProjectSettingsPart {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsProjectSettings(): ProjectSettings;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new IntegrationProjectSettingsPart instance in the SDK and on the server.
         * The new IntegrationProjectSettingsPart will be automatically stored in the 'settingsParts' property
         * of the parent ProjectSettings element passed as argument.
         */
        static createIn(container: ProjectSettings): IntegrationProjectSettingsPart;
        /**
         * Creates and returns a new IntegrationProjectSettingsPart instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): IntegrationProjectSettingsPart;
    }
    /**
     * In version 9.10.0: introduced
     */
    class JarDeploymentSettings extends ProjectSettingsPart {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsProjectSettings(): ProjectSettings;
        get exclusions(): internal.IList<JarLocationBase>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new JarDeploymentSettings instance in the SDK and on the server.
         * The new JarDeploymentSettings will be automatically stored in the 'settingsParts' property
         * of the parent ProjectSettings element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.10.0 and higher
         */
        static createIn(container: ProjectSettings): JarDeploymentSettings;
        /**
         * Creates and returns a new JarDeploymentSettings instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): JarDeploymentSettings;
    }
    /**
     * In version 9.10.0: introduced
     */
    abstract class JarLocationBase extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsJarDeploymentSettings(): JarDeploymentSettings;
        get jarFileName(): string;
        set jarFileName(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 8.0.0: deleted
     * In version 6.9.0: introduced
     */
    class JavaActionsSettings extends ProjectSettingsPart {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsProjectSettings(): ProjectSettings;
        get generatePostfixesForParameters(): boolean;
        set generatePostfixesForParameters(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new JavaActionsSettings instance in the SDK and on the server.
         * The new JavaActionsSettings will be automatically stored in the 'settingsParts' property
         * of the parent ProjectSettings element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.9.0 to 7.23.0
         */
        static createIn(container: ProjectSettings): JavaActionsSettings;
        /**
         * Creates and returns a new JavaActionsSettings instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): JavaActionsSettings;
    }
    class Language extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsLanguageSettings(): LanguageSettings;
        get code(): string;
        set code(newValue: string);
        get checkCompleteness(): boolean;
        set checkCompleteness(newValue: boolean);
        get customDateFormat(): string;
        set customDateFormat(newValue: string);
        get customTimeFormat(): string;
        set customTimeFormat(newValue: string);
        get customDateTimeFormat(): string;
        set customDateTimeFormat(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new Language instance in the SDK and on the server.
         * The new Language will be automatically stored in the 'languages' property
         * of the parent LanguageSettings element passed as argument.
         */
        static createIn(container: LanguageSettings): Language;
        /**
         * Creates and returns a new Language instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): Language;
    }
    class LanguageSettings extends ProjectSettingsPart {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsProjectSettings(): ProjectSettings;
        get defaultLanguageCode(): string;
        set defaultLanguageCode(newValue: string);
        get languages(): internal.IList<Language>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new LanguageSettings instance in the SDK and on the server.
         * The new LanguageSettings will be automatically stored in the 'settingsParts' property
         * of the parent ProjectSettings element passed as argument.
         */
        static createIn(container: ProjectSettings): LanguageSettings;
        /**
         * Creates and returns a new LanguageSettings instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): LanguageSettings;
    }
    class ModelerSettings extends ProjectSettingsPart {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsProjectSettings(): ProjectSettings;
        get lowerCaseMicroflowVariables(): boolean;
        set lowerCaseMicroflowVariables(newValue: boolean);
        /**
         * In version 8.6.0: introduced
         */
        get actionActivityDefaultColors(): internal.IList<ActionActivityDefaultColor>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ModelerSettings instance in the SDK and on the server.
         * The new ModelerSettings will be automatically stored in the 'settingsParts' property
         * of the parent ProjectSettings element passed as argument.
         */
        static createIn(container: ProjectSettings): ModelerSettings;
        /**
         * Creates and returns a new ModelerSettings instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ModelerSettings;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/project-settings relevant section in reference guide}
     */
    interface IProjectSettings extends projects.IProjectDocument {
        readonly model: IModel;
        readonly containerAsProject: projects.IProject;
        asLoaded(): ProjectSettings;
        load(callback: (element: ProjectSettings) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ProjectSettings>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/project-settings relevant section in reference guide}
     */
    class ProjectSettings extends projects.ProjectDocument implements IProjectSettings {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsProject(): projects.Project;
        get settingsParts(): internal.IList<ProjectSettingsPart>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IProject);
        /**
         * Creates a new ProjectSettings unit in the SDK and on the server.
         * Expects one argument, the projects.IProject in which this unit is contained.
         */
        static createIn(container: projects.IProject): ProjectSettings;
    }
    /**
     * In version 9.10.0: introduced
     */
    class ProtectedModuleJarLocation extends JarLocationBase {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsJarDeploymentSettings(): JarDeploymentSettings;
        get moduleName(): string;
        set moduleName(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ProtectedModuleJarLocation instance in the SDK and on the server.
         * The new ProtectedModuleJarLocation will be automatically stored in the 'exclusions' property
         * of the parent JarDeploymentSettings element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.10.0 and higher
         */
        static createIn(container: JarDeploymentSettings): ProtectedModuleJarLocation;
        /**
         * Creates and returns a new ProtectedModuleJarLocation instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ProtectedModuleJarLocation;
    }
    class RuntimeSettings extends ProjectSettingsPart {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsProjectSettings(): ProjectSettings;
        get afterStartupMicroflow(): microflows.IMicroflow | null;
        set afterStartupMicroflow(newValue: microflows.IMicroflow | null);
        get afterStartupMicroflowQualifiedName(): string | null;
        get beforeShutdownMicroflow(): microflows.IMicroflow | null;
        set beforeShutdownMicroflow(newValue: microflows.IMicroflow | null);
        get beforeShutdownMicroflowQualifiedName(): string | null;
        get healthCheckMicroflow(): microflows.IMicroflow | null;
        set healthCheckMicroflow(newValue: microflows.IMicroflow | null);
        get healthCheckMicroflowQualifiedName(): string | null;
        get firstDayOfWeek(): FirstDayOfWeekEnum;
        set firstDayOfWeek(newValue: FirstDayOfWeekEnum);
        get defaultTimeZoneCode(): string;
        set defaultTimeZoneCode(newValue: string);
        get scheduledEventTimeZoneCode(): string;
        set scheduledEventTimeZoneCode(newValue: string);
        get hashAlgorithm(): HashAlgorithmType;
        set hashAlgorithm(newValue: HashAlgorithmType);
        /**
         * In version 9.11.0: introduced
         */
        get bcryptCost(): number;
        set bcryptCost(newValue: number);
        get roundingMode(): RoundingMode;
        set roundingMode(newValue: RoundingMode);
        get allowUserMultipleSessions(): boolean;
        set allowUserMultipleSessions(newValue: boolean);
        /**
         * In version 9.0.2: deleted
         * In version 7.1.0: introduced
         */
        get enforceDataStorageUniqueness(): boolean;
        set enforceDataStorageUniqueness(newValue: boolean);
        /**
         * In version 7.5.0: introduced
         */
        get enableDataStorageOptimisticLocking(): boolean;
        set enableDataStorageOptimisticLocking(newValue: boolean);
        /**
         * In version 8.0.0: deleted
         * In version 7.10.0: introduced
         */
        get enableDataStorageNewQueryHandling(): boolean;
        set enableDataStorageNewQueryHandling(newValue: boolean);
        /**
         * In version 8.0.0: deleted
         * In version 7.15.0: introduced
         */
        get useDeprecatedClientForWebServiceCalls(): boolean;
        set useDeprecatedClientForWebServiceCalls(newValue: boolean);
        /**
         * In version 9.6.0: introduced
         */
        get useSystemContextForBackgroundTasks(): boolean;
        set useSystemContextForBackgroundTasks(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new RuntimeSettings instance in the SDK and on the server.
         * The new RuntimeSettings will be automatically stored in the 'settingsParts' property
         * of the parent ProjectSettings element passed as argument.
         */
        static createIn(container: ProjectSettings): RuntimeSettings;
        /**
         * Creates and returns a new RuntimeSettings instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): RuntimeSettings;
    }
    /**
     * In version 9.3.0: introduced
     */
    class ThemeModuleEntry extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsWebUIProjectSettingsPart(): WebUIProjectSettingsPart;
        get moduleName(): string;
        set moduleName(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ThemeModuleEntry instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ThemeModuleEntry;
    }
    /**
     * In version 9.10.0: introduced
     */
    class UserLibJarLocation extends JarLocationBase {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsJarDeploymentSettings(): JarDeploymentSettings;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new UserLibJarLocation instance in the SDK and on the server.
         * The new UserLibJarLocation will be automatically stored in the 'exclusions' property
         * of the parent JarDeploymentSettings element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.10.0 and higher
         */
        static createIn(container: JarDeploymentSettings): UserLibJarLocation;
        /**
         * Creates and returns a new UserLibJarLocation instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): UserLibJarLocation;
    }
    class WebUIProjectSettingsPart extends ProjectSettingsPart {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsProjectSettings(): ProjectSettings;
        /**
         * In version 9.10.0: introduced
         */
        get useOptimizedClient(): UseOptimizedClient;
        set useOptimizedClient(newValue: UseOptimizedClient);
        /**
         * In version 9.2.0: deleted
         */
        get theme(): string;
        set theme(newValue: string);
        /**
         * In version 9.2.0: deleted
         * In version 7.9.0: introduced
         */
        get themeModuleName(): string;
        set themeModuleName(newValue: string);
        /**
         * In version 6.2.0: deleted
         */
        get feedbackWidgetUpdated(): boolean;
        set feedbackWidgetUpdated(newValue: boolean);
        get enableWidgetBundling(): boolean;
        set enableWidgetBundling(newValue: boolean);
        /**
         * In version 6.6.0: introduced
         */
        get enableDownloadResources(): boolean;
        set enableDownloadResources(newValue: boolean);
        /**
         * In version 7.0.2: introduced
         */
        get enableMicroflowReachabilityAnalysis(): boolean;
        set enableMicroflowReachabilityAnalysis(newValue: boolean);
        /**
         * In version 9.0.1: deleted
         * In version 8.0.0: introduced
         */
        get themeConversionStatus(): ThemeConversionStatusEnum;
        set themeConversionStatus(newValue: ThemeConversionStatusEnum);
        /**
         * In version 9.3.0: introduced
         */
        get themeModuleOrder(): internal.IList<ThemeModuleEntry>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new WebUIProjectSettingsPart instance in the SDK and on the server.
         * The new WebUIProjectSettingsPart will be automatically stored in the 'settingsParts' property
         * of the parent ProjectSettings element passed as argument.
         */
        static createIn(container: ProjectSettings): WebUIProjectSettingsPart;
        /**
         * Creates and returns a new WebUIProjectSettingsPart instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): WebUIProjectSettingsPart;
    }
    /**
     * In version 9.0.5: removed experimental
     * In version 8.8.0: introduced
     */
    class WorkflowsProjectSettingsPart extends ProjectSettingsPart {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsProjectSettings(): ProjectSettings;
        /**
         * In version 9.0.5: deleted
         */
        get enabled(): boolean;
        set enabled(newValue: boolean);
        /**
         * In version 8.11.0: introduced
         */
        get userEntity(): domainmodels.IEntity | null;
        set userEntity(newValue: domainmodels.IEntity | null);
        get userEntityQualifiedName(): string | null;
        /**
         * In version 9.0.5: introduced
         */
        get workflowEngineParallelism(): number;
        set workflowEngineParallelism(newValue: number);
        /**
         * In version 9.0.5: introduced
         */
        get defaultTaskParallelism(): number;
        set defaultTaskParallelism(newValue: number);
        /**
         * In version 9.12.0: introduced
         */
        get workflowOnStateChangeEvent(): workflows.MicroflowEventHandler | null;
        set workflowOnStateChangeEvent(newValue: workflows.MicroflowEventHandler | null);
        /**
         * In version 9.12.0: introduced
         */
        get usertaskOnStateChangeEvent(): workflows.MicroflowEventHandler | null;
        set usertaskOnStateChangeEvent(newValue: workflows.MicroflowEventHandler | null);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new WorkflowsProjectSettingsPart instance in the SDK and on the server.
         * The new WorkflowsProjectSettingsPart will be automatically stored in the 'settingsParts' property
         * of the parent ProjectSettings element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.8.0 and higher
         */
        static createIn(container: ProjectSettings): WorkflowsProjectSettingsPart;
        /**
         * Creates and returns a new WorkflowsProjectSettingsPart instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): WorkflowsProjectSettingsPart;
    }
}
import { constants } from "./constants";
import { domainmodels } from "./domainmodels";
import { microflows } from "./microflows";
import { workflows } from "./workflows";
import { IModel } from "./base-model";
