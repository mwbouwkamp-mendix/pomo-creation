import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
import { projects } from "./projects";
export declare namespace security {
    class SecurityLevel extends internal.AbstractEnum {
        static CheckNothing: SecurityLevel;
        static CheckFormsAndMicroflows: SecurityLevel;
        static CheckEverything: SecurityLevel;
        protected qualifiedTsTypeName: string;
    }
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `Security`.
     */
    abstract class AccessRuleContainerBase extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsProjectSecurity(): ProjectSecurity;
        get accessRules(): internal.IList<domainmodels.AccessRule>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/demo-users relevant section in reference guide}
     */
    class DemoUser extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsProjectSecurity(): ProjectSecurity;
        get userName(): string;
        set userName(newValue: string);
        get password(): string;
        set password(newValue: string);
        get entity(): domainmodels.IEntity | null;
        set entity(newValue: domainmodels.IEntity | null);
        get entityQualifiedName(): string | null;
        get userRoles(): internal.IList<IUserRole>;
        get userRolesQualifiedNames(): string[];
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new DemoUser instance in the SDK and on the server.
         * The new DemoUser will be automatically stored in the 'demoUsers' property
         * of the parent ProjectSecurity element passed as argument.
         */
        static createIn(container: ProjectSecurity): DemoUser;
        /**
         * Creates and returns a new DemoUser instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): DemoUser;
    }
    class FileDocumentAccessRuleContainer extends AccessRuleContainerBase {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsProjectSecurity(): ProjectSecurity;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new FileDocumentAccessRuleContainer instance in the SDK and on the server.
         * The new FileDocumentAccessRuleContainer will be automatically stored in the 'fileDocumentAccess' property
         * of the parent ProjectSecurity element passed as argument.
         */
        static createIn(container: ProjectSecurity): FileDocumentAccessRuleContainer;
        /**
         * Creates and returns a new FileDocumentAccessRuleContainer instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): FileDocumentAccessRuleContainer;
    }
    class ImageAccessRuleContainer extends AccessRuleContainerBase {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsProjectSecurity(): ProjectSecurity;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ImageAccessRuleContainer instance in the SDK and on the server.
         * The new ImageAccessRuleContainer will be automatically stored in the 'imageAccess' property
         * of the parent ProjectSecurity element passed as argument.
         */
        static createIn(container: ProjectSecurity): ImageAccessRuleContainer;
        /**
         * Creates and returns a new ImageAccessRuleContainer instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ImageAccessRuleContainer;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/module-security relevant section in reference guide}
     */
    interface IModuleRole extends internal.IElement, internal.IByNameReferrable {
        readonly model: IModel;
        readonly containerAsModuleSecurity: IModuleSecurity;
        readonly name: string;
        asLoaded(): ModuleRole;
        load(callback: (element: ModuleRole) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ModuleRole>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/module-security relevant section in reference guide}
     */
    class ModuleRole extends internal.Element<IModel> implements IModuleRole {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsModuleSecurity(): ModuleSecurity;
        get name(): string;
        set name(newValue: string);
        get description(): string;
        set description(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ModuleRole instance in the SDK and on the server.
         * The new ModuleRole will be automatically stored in the 'moduleRoles' property
         * of the parent ModuleSecurity element passed as argument.
         */
        static createIn(container: ModuleSecurity): ModuleRole;
        /**
         * Creates and returns a new ModuleRole instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ModuleRole;
        get qualifiedName(): string | null;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/module-security relevant section in reference guide}
     */
    interface IModuleSecurity extends internal.IModelUnit {
        readonly model: IModel;
        readonly containerAsModule: projects.IModule;
        readonly moduleRoles: internal.IList<IModuleRole>;
        asLoaded(): ModuleSecurity;
        load(callback: (element: ModuleSecurity) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ModuleSecurity>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/module-security relevant section in reference guide}
     */
    class ModuleSecurity extends internal.ModelUnit<IModel> implements IModuleSecurity {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsModule(): projects.Module;
        get moduleRoles(): internal.IList<ModuleRole>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IModule);
        /**
         * Creates a new ModuleSecurity unit in the SDK and on the server.
         * Expects one argument, the projects.IModule in which this unit is contained.
         */
        static createIn(container: projects.IModule): ModuleSecurity;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/password-policy relevant section in reference guide}
     */
    class PasswordPolicySettings extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsProjectSecurity(): ProjectSecurity;
        get minimumLength(): number;
        set minimumLength(newValue: number);
        get requireMixedCase(): boolean;
        set requireMixedCase(newValue: boolean);
        get requireSymbol(): boolean;
        set requireSymbol(newValue: boolean);
        get requireDigit(): boolean;
        set requireDigit(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new PasswordPolicySettings instance in the SDK and on the server.
         * The new PasswordPolicySettings will be automatically stored in the 'passwordPolicySettings' property
         * of the parent ProjectSecurity element passed as argument.
         */
        static createIn(container: ProjectSecurity): PasswordPolicySettings;
        /**
         * Creates and returns a new PasswordPolicySettings instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): PasswordPolicySettings;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/project-security relevant section in reference guide}
     */
    interface IProjectSecurity extends projects.IProjectDocument {
        readonly model: IModel;
        readonly containerAsProject: projects.IProject;
        readonly userRoles: internal.IList<IUserRole>;
        asLoaded(): ProjectSecurity;
        load(callback: (element: ProjectSecurity) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ProjectSecurity>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/project-security relevant section in reference guide}
     */
    class ProjectSecurity extends projects.ProjectDocument implements IProjectSecurity {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsProject(): projects.Project;
        get securityLevel(): SecurityLevel;
        set securityLevel(newValue: SecurityLevel);
        get checkSecurity(): boolean;
        set checkSecurity(newValue: boolean);
        /**
         * In version 9.8.0: introduced
         */
        get strictPageUrlCheck(): boolean;
        set strictPageUrlCheck(newValue: boolean);
        get userRoles(): internal.IList<UserRole>;
        get adminUserName(): string;
        set adminUserName(newValue: string);
        get adminPassword(): string;
        set adminPassword(newValue: string);
        get adminUserRoleName(): string;
        set adminUserRoleName(newValue: string);
        get enableDemoUsers(): boolean;
        set enableDemoUsers(newValue: boolean);
        get demoUsers(): internal.IList<DemoUser>;
        get enableGuestAccess(): boolean;
        set enableGuestAccess(newValue: boolean);
        get guestUserRoleName(): string;
        set guestUserRoleName(newValue: string);
        /**
         * In version 8.0.0: deleted
         */
        get signInMicroflow(): microflows.IMicroflow | null;
        set signInMicroflow(newValue: microflows.IMicroflow | null);
        get signInMicroflowQualifiedName(): string | null;
        get passwordPolicySettings(): PasswordPolicySettings;
        set passwordPolicySettings(newValue: PasswordPolicySettings);
        /**
         * In version 6.0.0: deprecated
         */
        get fileDocumentAccess(): FileDocumentAccessRuleContainer;
        set fileDocumentAccess(newValue: FileDocumentAccessRuleContainer);
        /**
         * In version 6.0.0: deprecated
         */
        get imageAccess(): ImageAccessRuleContainer;
        set imageAccess(newValue: ImageAccessRuleContainer);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IProject);
        /**
         * Creates a new ProjectSecurity unit in the SDK and on the server.
         * Expects one argument, the projects.IProject in which this unit is contained.
         */
        static createIn(container: projects.IProject): ProjectSecurity;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/user-roles relevant section in reference guide}
     */
    interface IUserRole extends internal.IElement, internal.IByNameReferrable {
        readonly model: IModel;
        readonly containerAsProjectSecurity: IProjectSecurity;
        readonly name: string;
        asLoaded(): UserRole;
        load(callback: (element: UserRole) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<UserRole>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/user-roles relevant section in reference guide}
     */
    class UserRole extends internal.Element<IModel> implements IUserRole {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsProjectSecurity(): ProjectSecurity;
        get guid(): string;
        set guid(newValue: string);
        get name(): string;
        set name(newValue: string);
        get description(): string;
        set description(newValue: string);
        get moduleRoles(): internal.IList<IModuleRole>;
        get moduleRolesQualifiedNames(): string[];
        get manageAllRoles(): boolean;
        set manageAllRoles(newValue: boolean);
        get manageableRoles(): internal.IList<IUserRole>;
        get manageableRolesQualifiedNames(): string[];
        get manageUsersWithoutRoles(): boolean;
        set manageUsersWithoutRoles(newValue: boolean);
        get checkSecurity(): boolean;
        set checkSecurity(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new UserRole instance in the SDK and on the server.
         * The new UserRole will be automatically stored in the 'userRoles' property
         * of the parent ProjectSecurity element passed as argument.
         */
        static createIn(container: ProjectSecurity): UserRole;
        /**
         * Creates and returns a new UserRole instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): UserRole;
        get qualifiedName(): string | null;
    }
}
import { domainmodels } from "./domainmodels";
import { microflows } from "./microflows";
import { IModel } from "./base-model";
