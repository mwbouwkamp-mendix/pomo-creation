"use strict";
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.security = exports.StructureVersionInfo = void 0;
const internal = require("../sdk/internal");
exports.StructureVersionInfo = internal.StructureVersionInfo;
const utils_1 = require("../sdk/utils");
const projects_1 = require("./projects");
var security;
(function (security) {
    class SecurityLevel extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "security.SecurityLevel";
        }
    }
    SecurityLevel.CheckNothing = new SecurityLevel("CheckNothing", {});
    SecurityLevel.CheckFormsAndMicroflows = new SecurityLevel("CheckFormsAndMicroflows", {});
    SecurityLevel.CheckEverything = new SecurityLevel("CheckEverything", {});
    security.SecurityLevel = SecurityLevel;
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `Security`.
     */
    class AccessRuleContainerBase extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__accessRules = new internal.PartListProperty(AccessRuleContainerBase, this, "accessRules", []);
            if (arguments.length < 4) {
                throw new Error("new AccessRuleContainerBase() cannot be invoked directly, please use 'model.security.createAccessRuleContainerBase()'");
            }
        }
        get containerAsProjectSecurity() {
            return super.getContainerAs(ProjectSecurity);
        }
        get accessRules() {
            return this.__accessRules.get();
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    AccessRuleContainerBase.structureTypeName = "Security$AccessRuleContainerBase";
    AccessRuleContainerBase.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    security.AccessRuleContainerBase = AccessRuleContainerBase;
    /**
     * See: {@link https://docs.mendix.com/refguide/demo-users relevant section in reference guide}
     */
    class DemoUser extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__userName = new internal.PrimitiveProperty(DemoUser, this, "userName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__password = new internal.PrimitiveProperty(DemoUser, this, "password", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__entity = new internal.ByNameReferenceProperty(DemoUser, this, "entity", null, "DomainModels$Entity");
            /** @internal */
            this.__userRoles = new internal.ByNameReferenceListProperty(DemoUser, this, "userRoles", [], "Security$UserRole");
            if (arguments.length < 4) {
                throw new Error("new DemoUser() cannot be invoked directly, please use 'model.security.createDemoUser()'");
            }
        }
        get containerAsProjectSecurity() {
            return super.getContainerAs(ProjectSecurity);
        }
        get userName() {
            return this.__userName.get();
        }
        set userName(newValue) {
            this.__userName.set(newValue);
        }
        get password() {
            return this.__password.get();
        }
        set password(newValue) {
            this.__password.set(newValue);
        }
        get entity() {
            return this.__entity.get();
        }
        set entity(newValue) {
            this.__entity.set(newValue);
        }
        get entityQualifiedName() {
            return this.__entity.qualifiedName();
        }
        get userRoles() {
            return this.__userRoles.get();
        }
        get userRolesQualifiedNames() {
            return this.__userRoles.qualifiedNames();
        }
        /**
         * Creates and returns a new DemoUser instance in the SDK and on the server.
         * The new DemoUser will be automatically stored in the 'demoUsers' property
         * of the parent ProjectSecurity element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, DemoUser, "demoUsers", true);
        }
        /**
         * Creates and returns a new DemoUser instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, DemoUser);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    DemoUser.structureTypeName = "Security$DemoUser";
    DemoUser.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    security.DemoUser = DemoUser;
    class FileDocumentAccessRuleContainer extends AccessRuleContainerBase {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new FileDocumentAccessRuleContainer() cannot be invoked directly, please use 'model.security.createFileDocumentAccessRuleContainer()'");
            }
        }
        get containerAsProjectSecurity() {
            return super.getContainerAs(ProjectSecurity);
        }
        /**
         * Creates and returns a new FileDocumentAccessRuleContainer instance in the SDK and on the server.
         * The new FileDocumentAccessRuleContainer will be automatically stored in the 'fileDocumentAccess' property
         * of the parent ProjectSecurity element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, FileDocumentAccessRuleContainer, "fileDocumentAccess", false);
        }
        /**
         * Creates and returns a new FileDocumentAccessRuleContainer instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, FileDocumentAccessRuleContainer);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    FileDocumentAccessRuleContainer.structureTypeName = "Security$FileDocumentAccessRuleContainer";
    FileDocumentAccessRuleContainer.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    security.FileDocumentAccessRuleContainer = FileDocumentAccessRuleContainer;
    class ImageAccessRuleContainer extends AccessRuleContainerBase {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new ImageAccessRuleContainer() cannot be invoked directly, please use 'model.security.createImageAccessRuleContainer()'");
            }
        }
        get containerAsProjectSecurity() {
            return super.getContainerAs(ProjectSecurity);
        }
        /**
         * Creates and returns a new ImageAccessRuleContainer instance in the SDK and on the server.
         * The new ImageAccessRuleContainer will be automatically stored in the 'imageAccess' property
         * of the parent ProjectSecurity element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, ImageAccessRuleContainer, "imageAccess", false);
        }
        /**
         * Creates and returns a new ImageAccessRuleContainer instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ImageAccessRuleContainer);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ImageAccessRuleContainer.structureTypeName = "Security$ImageAccessRuleContainer";
    ImageAccessRuleContainer.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    security.ImageAccessRuleContainer = ImageAccessRuleContainer;
    /**
     * See: {@link https://docs.mendix.com/refguide/module-security relevant section in reference guide}
     */
    class ModuleRole extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__name = new internal.PrimitiveProperty(ModuleRole, this, "name", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__description = new internal.PrimitiveProperty(ModuleRole, this, "description", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new ModuleRole() cannot be invoked directly, please use 'model.security.createModuleRole()'");
            }
        }
        get containerAsModuleSecurity() {
            return super.getContainerAs(ModuleSecurity);
        }
        get name() {
            return this.__name.get();
        }
        set name(newValue) {
            this.__name.set(newValue);
        }
        get description() {
            return this.__description.get();
        }
        set description(newValue) {
            this.__description.set(newValue);
        }
        /**
         * Creates and returns a new ModuleRole instance in the SDK and on the server.
         * The new ModuleRole will be automatically stored in the 'moduleRoles' property
         * of the parent ModuleSecurity element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, ModuleRole, "moduleRoles", true);
        }
        /**
         * Creates and returns a new ModuleRole instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ModuleRole);
        }
        /** @internal */
        _isByNameReferrable() {
            return this.__name.isAvailable;
        }
        get qualifiedName() {
            return this._getQualifiedName();
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ModuleRole.structureTypeName = "Security$ModuleRole";
    ModuleRole.versionInfo = new exports.StructureVersionInfo({
        properties: {
            name: {
                public: {
                    currentValue: true
                }
            }
        },
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    security.ModuleRole = ModuleRole;
    /**
     * See: {@link https://docs.mendix.com/refguide/module-security relevant section in reference guide}
     */
    class ModuleSecurity extends internal.ModelUnit {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            /** @internal */
            this.__moduleRoles = new internal.PartListProperty(ModuleSecurity, this, "moduleRoles", []);
            this._containmentName = "moduleSecurity";
        }
        get containerAsModule() {
            return super.getContainerAs(projects_1.projects.Module);
        }
        get moduleRoles() {
            return this.__moduleRoles.get();
        }
        /**
         * Creates a new ModuleSecurity unit in the SDK and on the server.
         * Expects one argument, the projects.IModule in which this unit is contained.
         */
        static createIn(container) {
            return internal.instancehelpers.createUnit(container, ModuleSecurity);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ModuleSecurity.structureTypeName = "Security$ModuleSecurity";
    ModuleSecurity.versionInfo = new exports.StructureVersionInfo({
        properties: {
            moduleRoles: {
                public: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.ModelUnit);
    security.ModuleSecurity = ModuleSecurity;
    /**
     * See: {@link https://docs.mendix.com/refguide/password-policy relevant section in reference guide}
     */
    class PasswordPolicySettings extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__minimumLength = new internal.PrimitiveProperty(PasswordPolicySettings, this, "minimumLength", 12, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__requireMixedCase = new internal.PrimitiveProperty(PasswordPolicySettings, this, "requireMixedCase", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__requireSymbol = new internal.PrimitiveProperty(PasswordPolicySettings, this, "requireSymbol", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__requireDigit = new internal.PrimitiveProperty(PasswordPolicySettings, this, "requireDigit", false, internal.PrimitiveTypeEnum.Boolean);
            if (arguments.length < 4) {
                throw new Error("new PasswordPolicySettings() cannot be invoked directly, please use 'model.security.createPasswordPolicySettings()'");
            }
        }
        get containerAsProjectSecurity() {
            return super.getContainerAs(ProjectSecurity);
        }
        get minimumLength() {
            return this.__minimumLength.get();
        }
        set minimumLength(newValue) {
            this.__minimumLength.set(newValue);
        }
        get requireMixedCase() {
            return this.__requireMixedCase.get();
        }
        set requireMixedCase(newValue) {
            this.__requireMixedCase.set(newValue);
        }
        get requireSymbol() {
            return this.__requireSymbol.get();
        }
        set requireSymbol(newValue) {
            this.__requireSymbol.set(newValue);
        }
        get requireDigit() {
            return this.__requireDigit.get();
        }
        set requireDigit(newValue) {
            this.__requireDigit.set(newValue);
        }
        /**
         * Creates and returns a new PasswordPolicySettings instance in the SDK and on the server.
         * The new PasswordPolicySettings will be automatically stored in the 'passwordPolicySettings' property
         * of the parent ProjectSecurity element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, PasswordPolicySettings, "passwordPolicySettings", false);
        }
        /**
         * Creates and returns a new PasswordPolicySettings instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, PasswordPolicySettings);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            (() => {
                if (internal.isAtLeast("9.7.0", this.model)) {
                    this.minimumLength = 12;
                    return;
                }
                this.minimumLength = 8;
            })();
        }
    }
    PasswordPolicySettings.structureTypeName = "Security$PasswordPolicySettings";
    PasswordPolicySettings.versionInfo = new exports.StructureVersionInfo({
        properties: {
            minimumLength: {}
        }
    }, internal.StructureType.Element);
    security.PasswordPolicySettings = PasswordPolicySettings;
    /**
     * See: {@link https://docs.mendix.com/refguide/project-security relevant section in reference guide}
     */
    class ProjectSecurity extends projects_1.projects.ProjectDocument {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            /** @internal */
            this.__securityLevel = new internal.EnumProperty(ProjectSecurity, this, "securityLevel", SecurityLevel.CheckNothing, SecurityLevel);
            /** @internal */
            this.__checkSecurity = new internal.PrimitiveProperty(ProjectSecurity, this, "checkSecurity", true, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__strictPageUrlCheck = new internal.PrimitiveProperty(ProjectSecurity, this, "strictPageUrlCheck", true, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__userRoles = new internal.PartListProperty(ProjectSecurity, this, "userRoles", []);
            /** @internal */
            this.__adminUserName = new internal.PrimitiveProperty(ProjectSecurity, this, "adminUserName", "MxAdmin", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__adminPassword = new internal.PrimitiveProperty(ProjectSecurity, this, "adminPassword", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__adminUserRoleName = new internal.PrimitiveProperty(ProjectSecurity, this, "adminUserRoleName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__enableDemoUsers = new internal.PrimitiveProperty(ProjectSecurity, this, "enableDemoUsers", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__demoUsers = new internal.PartListProperty(ProjectSecurity, this, "demoUsers", []);
            /** @internal */
            this.__enableGuestAccess = new internal.PrimitiveProperty(ProjectSecurity, this, "enableGuestAccess", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__guestUserRoleName = new internal.PrimitiveProperty(ProjectSecurity, this, "guestUserRoleName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__signInMicroflow = new internal.ByNameReferenceProperty(ProjectSecurity, this, "signInMicroflow", null, "Microflows$Microflow");
            /** @internal */
            this.__passwordPolicySettings = new internal.PartProperty(ProjectSecurity, this, "passwordPolicySettings", null, true);
            /** @internal */
            this.__fileDocumentAccess = new internal.PartProperty(ProjectSecurity, this, "fileDocumentAccess", null, true);
            /** @internal */
            this.__imageAccess = new internal.PartProperty(ProjectSecurity, this, "imageAccess", null, true);
            this._containmentName = "projectDocuments";
        }
        get containerAsProject() {
            return super.getContainerAs(projects_1.projects.Project);
        }
        get securityLevel() {
            return this.__securityLevel.get();
        }
        set securityLevel(newValue) {
            this.__securityLevel.set(newValue);
        }
        get checkSecurity() {
            return this.__checkSecurity.get();
        }
        set checkSecurity(newValue) {
            this.__checkSecurity.set(newValue);
        }
        /**
         * In version 9.8.0: introduced
         */
        get strictPageUrlCheck() {
            return this.__strictPageUrlCheck.get();
        }
        set strictPageUrlCheck(newValue) {
            this.__strictPageUrlCheck.set(newValue);
        }
        get userRoles() {
            return this.__userRoles.get();
        }
        get adminUserName() {
            return this.__adminUserName.get();
        }
        set adminUserName(newValue) {
            this.__adminUserName.set(newValue);
        }
        get adminPassword() {
            return this.__adminPassword.get();
        }
        set adminPassword(newValue) {
            this.__adminPassword.set(newValue);
        }
        get adminUserRoleName() {
            return this.__adminUserRoleName.get();
        }
        set adminUserRoleName(newValue) {
            this.__adminUserRoleName.set(newValue);
        }
        get enableDemoUsers() {
            return this.__enableDemoUsers.get();
        }
        set enableDemoUsers(newValue) {
            this.__enableDemoUsers.set(newValue);
        }
        get demoUsers() {
            return this.__demoUsers.get();
        }
        get enableGuestAccess() {
            return this.__enableGuestAccess.get();
        }
        set enableGuestAccess(newValue) {
            this.__enableGuestAccess.set(newValue);
        }
        get guestUserRoleName() {
            return this.__guestUserRoleName.get();
        }
        set guestUserRoleName(newValue) {
            this.__guestUserRoleName.set(newValue);
        }
        /**
         * In version 8.0.0: deleted
         */
        get signInMicroflow() {
            return this.__signInMicroflow.get();
        }
        set signInMicroflow(newValue) {
            this.__signInMicroflow.set(newValue);
        }
        get signInMicroflowQualifiedName() {
            return this.__signInMicroflow.qualifiedName();
        }
        get passwordPolicySettings() {
            return this.__passwordPolicySettings.get();
        }
        set passwordPolicySettings(newValue) {
            this.__passwordPolicySettings.set(newValue);
        }
        /**
         * In version 6.0.0: deprecated
         */
        get fileDocumentAccess() {
            return this.__fileDocumentAccess.get();
        }
        set fileDocumentAccess(newValue) {
            this.__fileDocumentAccess.set(newValue);
        }
        /**
         * In version 6.0.0: deprecated
         */
        get imageAccess() {
            return this.__imageAccess.get();
        }
        set imageAccess(newValue) {
            this.__imageAccess.set(newValue);
        }
        /**
         * Creates a new ProjectSecurity unit in the SDK and on the server.
         * Expects one argument, the projects.IProject in which this unit is contained.
         */
        static createIn(container) {
            return internal.instancehelpers.createUnit(container, ProjectSecurity);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.adminUserName = "MxAdmin";
            this.checkSecurity = true;
            this.fileDocumentAccess = FileDocumentAccessRuleContainer.create(this.model);
            this.imageAccess = ImageAccessRuleContainer.create(this.model);
            this.passwordPolicySettings = PasswordPolicySettings.create(this.model);
            this.securityLevel = SecurityLevel.CheckNothing;
            if (this.__strictPageUrlCheck.isAvailable) {
                this.strictPageUrlCheck = true;
            }
        }
    }
    ProjectSecurity.structureTypeName = "Security$ProjectSecurity";
    ProjectSecurity.versionInfo = new exports.StructureVersionInfo({
        properties: {
            strictPageUrlCheck: {
                introduced: "9.8.0"
            },
            userRoles: {
                public: {
                    currentValue: true
                }
            },
            signInMicroflow: {
                deleted: "8.0.0",
                deletionMessage: null
            },
            passwordPolicySettings: {
                required: {
                    currentValue: true
                }
            },
            fileDocumentAccess: {
                required: {
                    currentValue: true
                }
            },
            imageAccess: {
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.ModelUnit);
    security.ProjectSecurity = ProjectSecurity;
    /**
     * See: {@link https://docs.mendix.com/refguide/user-roles relevant section in reference guide}
     */
    class UserRole extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__guid = new internal.PrimitiveProperty(UserRole, this, "guid", "", internal.PrimitiveTypeEnum.Guid);
            /** @internal */
            this.__name = new internal.PrimitiveProperty(UserRole, this, "name", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__description = new internal.PrimitiveProperty(UserRole, this, "description", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__moduleRoles = new internal.ByNameReferenceListProperty(UserRole, this, "moduleRoles", [], "Security$ModuleRole");
            /** @internal */
            this.__manageAllRoles = new internal.PrimitiveProperty(UserRole, this, "manageAllRoles", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__manageableRoles = new internal.ByNameReferenceListProperty(UserRole, this, "manageableRoles", [], "Security$UserRole");
            /** @internal */
            this.__manageUsersWithoutRoles = new internal.PrimitiveProperty(UserRole, this, "manageUsersWithoutRoles", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__checkSecurity = new internal.PrimitiveProperty(UserRole, this, "checkSecurity", true, internal.PrimitiveTypeEnum.Boolean);
            if (arguments.length < 4) {
                throw new Error("new UserRole() cannot be invoked directly, please use 'model.security.createUserRole()'");
            }
        }
        get containerAsProjectSecurity() {
            return super.getContainerAs(ProjectSecurity);
        }
        get guid() {
            return this.__guid.get();
        }
        set guid(newValue) {
            this.__guid.set(newValue);
        }
        get name() {
            return this.__name.get();
        }
        set name(newValue) {
            this.__name.set(newValue);
        }
        get description() {
            return this.__description.get();
        }
        set description(newValue) {
            this.__description.set(newValue);
        }
        get moduleRoles() {
            return this.__moduleRoles.get();
        }
        get moduleRolesQualifiedNames() {
            return this.__moduleRoles.qualifiedNames();
        }
        get manageAllRoles() {
            return this.__manageAllRoles.get();
        }
        set manageAllRoles(newValue) {
            this.__manageAllRoles.set(newValue);
        }
        get manageableRoles() {
            return this.__manageableRoles.get();
        }
        get manageableRolesQualifiedNames() {
            return this.__manageableRoles.qualifiedNames();
        }
        get manageUsersWithoutRoles() {
            return this.__manageUsersWithoutRoles.get();
        }
        set manageUsersWithoutRoles(newValue) {
            this.__manageUsersWithoutRoles.set(newValue);
        }
        get checkSecurity() {
            return this.__checkSecurity.get();
        }
        set checkSecurity(newValue) {
            this.__checkSecurity.set(newValue);
        }
        /**
         * Creates and returns a new UserRole instance in the SDK and on the server.
         * The new UserRole will be automatically stored in the 'userRoles' property
         * of the parent ProjectSecurity element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, UserRole, "userRoles", true);
        }
        /**
         * Creates and returns a new UserRole instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, UserRole);
        }
        /** @internal */
        _isByNameReferrable() {
            return this.__name.isAvailable;
        }
        get qualifiedName() {
            return this._getQualifiedName();
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.checkSecurity = true;
            this.guid = utils_1.utils.randomUuid();
        }
    }
    UserRole.structureTypeName = "Security$UserRole";
    UserRole.versionInfo = new exports.StructureVersionInfo({
        properties: {
            name: {
                public: {
                    currentValue: true
                }
            }
        },
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    security.UserRole = UserRole;
})(security = exports.security || (exports.security = {}));
//# sourceMappingURL=security.js.map