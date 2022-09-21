"use strict";
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.domainmodels = exports.StructureVersionInfo = void 0;
const internal = require("../sdk/internal");
exports.StructureVersionInfo = internal.StructureVersionInfo;
const utils_1 = require("../sdk/utils");
const projects_1 = require("./projects");
var domainmodels;
(function (domainmodels) {
    class ActionMoment extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "domainmodels.ActionMoment";
        }
    }
    ActionMoment.Before = new ActionMoment("Before", {});
    ActionMoment.After = new ActionMoment("After", {});
    domainmodels.ActionMoment = ActionMoment;
    class AssociationNavigability extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "domainmodels.AssociationNavigability";
        }
    }
    AssociationNavigability.BothDirections = new AssociationNavigability("BothDirections", {});
    AssociationNavigability.ParentToChild = new AssociationNavigability("ParentToChild", {});
    AssociationNavigability.ChildToParent = new AssociationNavigability("ChildToParent", {});
    domainmodels.AssociationNavigability = AssociationNavigability;
    class AssociationOwner extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "domainmodels.AssociationOwner";
        }
    }
    AssociationOwner.Default = new AssociationOwner("Default", {});
    AssociationOwner.Both = new AssociationOwner("Both", {});
    domainmodels.AssociationOwner = AssociationOwner;
    class AssociationType extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "domainmodels.AssociationType";
        }
    }
    AssociationType.Reference = new AssociationType("Reference", {});
    AssociationType.ReferenceSet = new AssociationType("ReferenceSet", {});
    domainmodels.AssociationType = AssociationType;
    class DeletingBehavior extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "domainmodels.DeletingBehavior";
        }
    }
    DeletingBehavior.DeleteMeAndReferences = new DeletingBehavior("DeleteMeAndReferences", {});
    DeletingBehavior.DeleteMeButKeepReferences = new DeletingBehavior("DeleteMeButKeepReferences", {});
    DeletingBehavior.DeleteMeIfNoReferences = new DeletingBehavior("DeleteMeIfNoReferences", {});
    domainmodels.DeletingBehavior = DeletingBehavior;
    class EnvironmentType extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "domainmodels.EnvironmentType";
        }
    }
    EnvironmentType.Production = new EnvironmentType("Production", {});
    EnvironmentType.Sandbox = new EnvironmentType("Sandbox", {});
    EnvironmentType.NonProduction = new EnvironmentType("NonProduction", {});
    EnvironmentType.Unknown = new EnvironmentType("Unknown", {});
    domainmodels.EnvironmentType = EnvironmentType;
    class EventType extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "domainmodels.EventType";
        }
    }
    EventType.Create = new EventType("Create", {});
    EventType.Commit = new EventType("Commit", {});
    EventType.Delete = new EventType("Delete", {});
    EventType.RollBack = new EventType("RollBack", {});
    domainmodels.EventType = EventType;
    class IndexedAttributeType extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "domainmodels.IndexedAttributeType";
        }
    }
    IndexedAttributeType.Normal = new IndexedAttributeType("Normal", {});
    IndexedAttributeType.CreatedDate = new IndexedAttributeType("CreatedDate", {});
    IndexedAttributeType.ChangedDate = new IndexedAttributeType("ChangedDate", {});
    domainmodels.IndexedAttributeType = IndexedAttributeType;
    class MemberAccessRights extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "domainmodels.MemberAccessRights";
        }
    }
    MemberAccessRights.None = new MemberAccessRights("None", {});
    MemberAccessRights.ReadOnly = new MemberAccessRights("ReadOnly", {});
    MemberAccessRights.ReadWrite = new MemberAccessRights("ReadWrite", {});
    domainmodels.MemberAccessRights = MemberAccessRights;
    class Navigability extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "domainmodels.Navigability";
        }
    }
    Navigability.BothDirections = new Navigability("BothDirections", {});
    Navigability.ParentToChild = new Navigability("ParentToChild", {});
    domainmodels.Navigability = Navigability;
    class RangeType extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "domainmodels.RangeType";
        }
    }
    RangeType.GreaterThanOrEqualTo = new RangeType("GreaterThanOrEqualTo", {});
    RangeType.SmallerThanOrEqualTo = new RangeType("SmallerThanOrEqualTo", {});
    RangeType.Between = new RangeType("Between", {});
    domainmodels.RangeType = RangeType;
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `DomainModels`.
     */
    /**
     * See: {@link https://docs.mendix.com/refguide/access-rules relevant section in reference guide}
     */
    class AccessRule extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__memberAccesses = new internal.PartListProperty(AccessRule, this, "memberAccesses", []);
            /** @internal */
            this.__moduleRoles = new internal.ByNameReferenceListProperty(AccessRule, this, "moduleRoles", [], "Security$ModuleRole");
            /** @internal */
            this.__documentation = new internal.PrimitiveProperty(AccessRule, this, "documentation", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__allowCreate = new internal.PrimitiveProperty(AccessRule, this, "allowCreate", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__allowDelete = new internal.PrimitiveProperty(AccessRule, this, "allowDelete", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__defaultMemberAccessRights = new internal.EnumProperty(AccessRule, this, "defaultMemberAccessRights", MemberAccessRights.None, MemberAccessRights);
            /** @internal */
            this.__xPathConstraint = new internal.PrimitiveProperty(AccessRule, this, "xPathConstraint", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new AccessRule() cannot be invoked directly, please use 'model.domainmodels.createAccessRule()'");
            }
        }
        get containerAsEntity() {
            return super.getContainerAs(Entity);
        }
        get containerAsAccessRuleContainerBase() {
            return super.getContainerAs(security_1.security.AccessRuleContainerBase);
        }
        get memberAccesses() {
            return this.__memberAccesses.get();
        }
        get moduleRoles() {
            return this.__moduleRoles.get();
        }
        get moduleRolesQualifiedNames() {
            return this.__moduleRoles.qualifiedNames();
        }
        get documentation() {
            return this.__documentation.get();
        }
        set documentation(newValue) {
            this.__documentation.set(newValue);
        }
        get allowCreate() {
            return this.__allowCreate.get();
        }
        set allowCreate(newValue) {
            this.__allowCreate.set(newValue);
        }
        get allowDelete() {
            return this.__allowDelete.get();
        }
        set allowDelete(newValue) {
            this.__allowDelete.set(newValue);
        }
        get defaultMemberAccessRights() {
            return this.__defaultMemberAccessRights.get();
        }
        set defaultMemberAccessRights(newValue) {
            this.__defaultMemberAccessRights.set(newValue);
        }
        /**
         * The value of this property is conceptually of type xPathConstraints.XPathConstraint.
         */
        get xPathConstraint() {
            return this.__xPathConstraint.get();
        }
        set xPathConstraint(newValue) {
            this.__xPathConstraint.set(newValue);
        }
        /**
         * Creates and returns a new AccessRule instance in the SDK and on the server.
         * The new AccessRule will be automatically stored in the 'accessRules' property
         * of the parent Entity element passed as argument.
         */
        static createInEntityUnderAccessRules(container) {
            return internal.instancehelpers.createElement(container, AccessRule, "accessRules", true);
        }
        /**
         * Creates and returns a new AccessRule instance in the SDK and on the server.
         * The new AccessRule will be automatically stored in the 'accessRules' property
         * of the parent security.AccessRuleContainerBase element passed as argument.
         */
        static createInAccessRuleContainerBaseUnderAccessRules(container) {
            return internal.instancehelpers.createElement(container, AccessRule, "accessRules", true);
        }
        /**
         * Creates and returns a new AccessRule instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, AccessRule);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.defaultMemberAccessRights = MemberAccessRights.None;
        }
    }
    AccessRule.structureTypeName = "DomainModels$AccessRule";
    AccessRule.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    domainmodels.AccessRule = AccessRule;
    /**
     * See: {@link https://docs.mendix.com/refguide/annotations relevant section in reference guide}
     */
    class Annotation extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__caption = new internal.PrimitiveProperty(Annotation, this, "caption", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__location = new internal.PrimitiveProperty(Annotation, this, "location", { x: 0, y: 0 }, internal.PrimitiveTypeEnum.Point);
            /** @internal */
            this.__width = new internal.PrimitiveProperty(Annotation, this, "width", 250, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__exportLevel = new internal.EnumProperty(Annotation, this, "exportLevel", projects_1.projects.ExportLevel.Hidden, projects_1.projects.ExportLevel);
            if (arguments.length < 4) {
                throw new Error("new Annotation() cannot be invoked directly, please use 'model.domainmodels.createAnnotation()'");
            }
        }
        get containerAsDomainModel() {
            return super.getContainerAs(DomainModel);
        }
        get caption() {
            return this.__caption.get();
        }
        set caption(newValue) {
            this.__caption.set(newValue);
        }
        get location() {
            return this.__location.get();
        }
        set location(newValue) {
            this.__location.set(newValue);
        }
        get width() {
            return this.__width.get();
        }
        set width(newValue) {
            this.__width.set(newValue);
        }
        /**
         * In version 9.15.0: introduced
         */
        get exportLevel() {
            return this.__exportLevel.get();
        }
        set exportLevel(newValue) {
            this.__exportLevel.set(newValue);
        }
        /**
         * Creates and returns a new Annotation instance in the SDK and on the server.
         * The new Annotation will be automatically stored in the 'annotations' property
         * of the parent DomainModel element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, Annotation, "annotations", true);
        }
        /**
         * Creates and returns a new Annotation instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, Annotation);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__exportLevel.isAvailable) {
                this.exportLevel = projects_1.projects.ExportLevel.Hidden;
            }
            this.width = 250;
        }
    }
    Annotation.structureTypeName = "DomainModels$Annotation";
    Annotation.versionInfo = new exports.StructureVersionInfo({
        properties: {
            location: {},
            width: {},
            exportLevel: {
                introduced: "9.15.0"
            }
        }
    }, internal.StructureType.Element);
    domainmodels.Annotation = Annotation;
    /**
     * See: {@link https://docs.mendix.com/refguide/associations relevant section in reference guide}
     */
    class AssociationBase extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__name = new internal.PrimitiveProperty(AssociationBase, this, "name", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__dataStorageGuid = new internal.PrimitiveProperty(AssociationBase, this, "dataStorageGuid", "", internal.PrimitiveTypeEnum.Guid);
            /** @internal */
            this.__type = new internal.EnumProperty(AssociationBase, this, "type", AssociationType.Reference, AssociationType);
            /** @internal */
            this.__owner = new internal.EnumProperty(AssociationBase, this, "owner", AssociationOwner.Default, AssociationOwner);
            /** @internal */
            this.__deleteBehavior = new internal.PartProperty(AssociationBase, this, "deleteBehavior", null, true);
            /** @internal */
            this.__parent = new internal.ByIdReferenceProperty(AssociationBase, this, "parent", null);
            /** @internal */
            this.__documentation = new internal.PrimitiveProperty(AssociationBase, this, "documentation", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__remoteSourceDocument = new internal.ByNameReferenceProperty(AssociationBase, this, "remoteSourceDocument", null, "DomainModels$RemoteEntitySourceDocument");
            /** @internal */
            this.__source = new internal.PartProperty(AssociationBase, this, "source", null, false);
            /** @internal */
            this.__capabilities = new internal.PartProperty(AssociationBase, this, "capabilities", null, true);
            /** @internal */
            this.__exportLevel = new internal.EnumProperty(AssociationBase, this, "exportLevel", projects_1.projects.ExportLevel.Hidden, projects_1.projects.ExportLevel);
            if (arguments.length < 4) {
                throw new Error("new AssociationBase() cannot be invoked directly, please use 'model.domainmodels.createAssociationBase()'");
            }
        }
        get containerAsDomainModel() {
            return super.getContainerAs(DomainModel);
        }
        get name() {
            return this.__name.get();
        }
        set name(newValue) {
            this.__name.set(newValue);
        }
        get dataStorageGuid() {
            return this.__dataStorageGuid.get();
        }
        set dataStorageGuid(newValue) {
            this.__dataStorageGuid.set(newValue);
        }
        get type() {
            return this.__type.get();
        }
        set type(newValue) {
            this.__type.set(newValue);
        }
        get owner() {
            return this.__owner.get();
        }
        set owner(newValue) {
            this.__owner.set(newValue);
        }
        get deleteBehavior() {
            return this.__deleteBehavior.get();
        }
        set deleteBehavior(newValue) {
            this.__deleteBehavior.set(newValue);
        }
        get parent() {
            return this.__parent.get();
        }
        set parent(newValue) {
            this.__parent.set(newValue);
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
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 8.10.0: deleted
         * In version 8.3.0: introduced
         */
        get remoteSourceDocument() {
            return this.__remoteSourceDocument.get();
        }
        set remoteSourceDocument(newValue) {
            this.__remoteSourceDocument.set(newValue);
        }
        get remoteSourceDocumentQualifiedName() {
            return this.__remoteSourceDocument.qualifiedName();
        }
        /**
         * In version 8.10.0: introduced
         */
        get source() {
            return this.__source.get();
        }
        set source(newValue) {
            this.__source.set(newValue);
        }
        /**
         * In version 9.0.1: deleted
         * In version 8.11.0: introduced
         */
        get capabilities() {
            return this.__capabilities.get();
        }
        set capabilities(newValue) {
            this.__capabilities.set(newValue);
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
            if (this.__capabilities.isAvailable) {
                this.capabilities = AssociationCapabilities.create(this.model);
            }
            this.dataStorageGuid = utils_1.utils.randomUuid();
            this.deleteBehavior = AssociationDeleteBehavior.create(this.model);
            if (this.__exportLevel.isAvailable) {
                this.exportLevel = projects_1.projects.ExportLevel.Hidden;
            }
            this.owner = AssociationOwner.Default;
            this.type = AssociationType.Reference;
        }
    }
    AssociationBase.structureTypeName = "DomainModels$AssociationBase";
    AssociationBase.versionInfo = new exports.StructureVersionInfo({
        properties: {
            name: {
                public: {
                    currentValue: true
                }
            },
            type: {
                public: {
                    currentValue: true
                }
            },
            owner: {
                public: {
                    currentValue: true
                }
            },
            deleteBehavior: {
                required: {
                    currentValue: true
                }
            },
            parent: {
                public: {
                    currentValue: true
                },
                required: {
                    currentValue: true
                }
            },
            documentation: {
                public: {
                    currentValue: true,
                    changedIn: ["9.10.0"]
                }
            },
            remoteSourceDocument: {
                introduced: "8.3.0",
                deleted: "8.10.0",
                deletionMessage: "The information is now stored in ODataRemoteAssociationSource",
                public: {
                    currentValue: true
                }
            },
            source: {
                introduced: "8.10.0",
                public: {
                    currentValue: true
                }
            },
            capabilities: {
                introduced: "8.11.0",
                deleted: "9.0.1",
                deletionMessage: null,
                public: {
                    currentValue: true
                },
                required: {
                    currentValue: true
                }
            },
            exportLevel: {
                introduced: "9.3.0"
            }
        },
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    domainmodels.AssociationBase = AssociationBase;
    /**
     * See: {@link https://docs.mendix.com/refguide/associations relevant section in reference guide}
     */
    class Association extends AssociationBase {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__child = new internal.ByIdReferenceProperty(Association, this, "child", null);
            /** @internal */
            this.__parentConnection = new internal.PrimitiveProperty(Association, this, "parentConnection", { x: 0, y: 0 }, internal.PrimitiveTypeEnum.Point);
            /** @internal */
            this.__childConnection = new internal.PrimitiveProperty(Association, this, "childConnection", { x: 0, y: 0 }, internal.PrimitiveTypeEnum.Point);
            if (arguments.length < 4) {
                throw new Error("new Association() cannot be invoked directly, please use 'model.domainmodels.createAssociation()'");
            }
        }
        get containerAsDomainModel() {
            return super.getContainerAs(DomainModel);
        }
        get child() {
            return this.__child.get();
        }
        set child(newValue) {
            this.__child.set(newValue);
        }
        get parentConnection() {
            return this.__parentConnection.get();
        }
        set parentConnection(newValue) {
            this.__parentConnection.set(newValue);
        }
        get childConnection() {
            return this.__childConnection.get();
        }
        set childConnection(newValue) {
            this.__childConnection.set(newValue);
        }
        /**
         * Creates and returns a new Association instance in the SDK and on the server.
         * The new Association will be automatically stored in the 'associations' property
         * of the parent DomainModel element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, Association, "associations", true);
        }
        /**
         * Creates and returns a new Association instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, Association);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    Association.structureTypeName = "DomainModels$Association";
    Association.versionInfo = new exports.StructureVersionInfo({
        properties: {
            child: {
                public: {
                    currentValue: true
                },
                required: {
                    currentValue: true
                }
            },
            parentConnection: {},
            childConnection: {}
        },
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    domainmodels.Association = Association;
    /**
     * In version 9.0.1: deleted
     * In version 8.11.0: introduced
     */
    class AssociationCapabilities extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__navigability = new internal.EnumProperty(AssociationCapabilities, this, "navigability", AssociationNavigability.BothDirections, AssociationNavigability);
            if (arguments.length < 4) {
                throw new Error("new AssociationCapabilities() cannot be invoked directly, please use 'model.domainmodels.createAssociationCapabilities()'");
            }
        }
        get containerAsAssociationBase() {
            return super.getContainerAs(AssociationBase);
        }
        get navigability() {
            return this.__navigability.get();
        }
        set navigability(newValue) {
            this.__navigability.set(newValue);
        }
        /**
         * Creates and returns a new AssociationCapabilities instance in the SDK and on the server.
         * The new AssociationCapabilities will be automatically stored in the 'capabilities' property
         * of the parent AssociationBase element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.11.0 to 9.0.0
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, AssociationCapabilities.structureTypeName, { start: "8.11.0", end: "9.0.0" });
            return internal.instancehelpers.createElement(container, AssociationCapabilities, "capabilities", false);
        }
        /**
         * Creates and returns a new AssociationCapabilities instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, AssociationCapabilities);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.navigability = AssociationNavigability.BothDirections;
        }
    }
    AssociationCapabilities.structureTypeName = "DomainModels$AssociationCapabilities";
    AssociationCapabilities.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.11.0",
        deleted: "9.0.1",
        deletionMessage: null,
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    domainmodels.AssociationCapabilities = AssociationCapabilities;
    class AssociationDeleteBehavior extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__parentDeleteBehavior = new internal.EnumProperty(AssociationDeleteBehavior, this, "parentDeleteBehavior", DeletingBehavior.DeleteMeButKeepReferences, DeletingBehavior);
            /** @internal */
            this.__childDeleteBehavior = new internal.EnumProperty(AssociationDeleteBehavior, this, "childDeleteBehavior", DeletingBehavior.DeleteMeButKeepReferences, DeletingBehavior);
            /** @internal */
            this.__parentErrorMessage = new internal.PartProperty(AssociationDeleteBehavior, this, "parentErrorMessage", null, false);
            /** @internal */
            this.__childErrorMessage = new internal.PartProperty(AssociationDeleteBehavior, this, "childErrorMessage", null, false);
            if (arguments.length < 4) {
                throw new Error("new AssociationDeleteBehavior() cannot be invoked directly, please use 'model.domainmodels.createAssociationDeleteBehavior()'");
            }
        }
        get containerAsAssociationBase() {
            return super.getContainerAs(AssociationBase);
        }
        get parentDeleteBehavior() {
            return this.__parentDeleteBehavior.get();
        }
        set parentDeleteBehavior(newValue) {
            this.__parentDeleteBehavior.set(newValue);
        }
        get childDeleteBehavior() {
            return this.__childDeleteBehavior.get();
        }
        set childDeleteBehavior(newValue) {
            this.__childDeleteBehavior.set(newValue);
        }
        get parentErrorMessage() {
            return this.__parentErrorMessage.get();
        }
        set parentErrorMessage(newValue) {
            this.__parentErrorMessage.set(newValue);
        }
        get childErrorMessage() {
            return this.__childErrorMessage.get();
        }
        set childErrorMessage(newValue) {
            this.__childErrorMessage.set(newValue);
        }
        /**
         * Creates and returns a new AssociationDeleteBehavior instance in the SDK and on the server.
         * The new AssociationDeleteBehavior will be automatically stored in the 'deleteBehavior' property
         * of the parent AssociationBase element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, AssociationDeleteBehavior, "deleteBehavior", false);
        }
        /**
         * Creates and returns a new AssociationDeleteBehavior instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, AssociationDeleteBehavior);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.childDeleteBehavior = DeletingBehavior.DeleteMeButKeepReferences;
            this.parentDeleteBehavior = DeletingBehavior.DeleteMeButKeepReferences;
        }
    }
    AssociationDeleteBehavior.structureTypeName = "DomainModels$AssociationDeleteBehavior";
    AssociationDeleteBehavior.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    domainmodels.AssociationDeleteBehavior = AssociationDeleteBehavior;
    /**
     * In version 9.6.0: added public
     * In version 7.11.0: introduced
     */
    class MemberRef extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__entityRef = new internal.PartProperty(MemberRef, this, "entityRef", null, false);
            if (arguments.length < 4) {
                throw new Error("new MemberRef() cannot be invoked directly, please use 'model.domainmodels.createMemberRef()'");
            }
        }
        get containerAsWidgetValue() {
            return super.getContainerAs(customwidgets_1.customwidgets.WidgetValue);
        }
        get containerAsAttributeWidget() {
            return super.getContainerAs(documenttemplates_1.documenttemplates.AttributeWidget);
        }
        get containerAsDataGridColumn() {
            return super.getContainerAs(documenttemplates_1.documenttemplates.DataGridColumn);
        }
        get containerAsDocumentTemplatesGridSortItem() {
            return super.getContainerAs(documenttemplates_1.documenttemplates.GridSortItem);
        }
        get containerAsVariableRefExpression() {
            return super.getContainerAs(expressions_1.expressions.VariableRefExpression);
        }
        get containerAsSortItem() {
            return super.getContainerAs(microflows_1.microflows.SortItem);
        }
        get containerAsClientTemplateParameter() {
            return super.getContainerAs(pages_1.pages.ClientTemplateParameter);
        }
        get containerAsGridColumn() {
            return super.getContainerAs(pages_1.pages.GridColumn);
        }
        get containerAsPagesGridSortItem() {
            return super.getContainerAs(pages_1.pages.GridSortItem);
        }
        get containerAsListViewSearch() {
            return super.getContainerAs(pages_1.pages.ListViewSearch);
        }
        get containerAsMemberWidget() {
            return super.getContainerAs(pages_1.pages.MemberWidget);
        }
        get containerAsRangeSearchField() {
            return super.getContainerAs(pages_1.pages.RangeSearchField);
        }
        get containerAsSingleSearchField() {
            return super.getContainerAs(pages_1.pages.SingleSearchField);
        }
        get containerAsStaticOrDynamicString() {
            return super.getContainerAs(pages_1.pages.StaticOrDynamicString);
        }
        /**
         * In version 9.6.0: added public
         */
        get entityRef() {
            return this.__entityRef.get();
        }
        set entityRef(newValue) {
            this.__entityRef.set(newValue);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    MemberRef.structureTypeName = "DomainModels$MemberRef";
    MemberRef.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.11.0",
        properties: {
            entityRef: {
                public: {
                    currentValue: true,
                    changedIn: ["9.6.0"]
                }
            }
        },
        public: {
            currentValue: true,
            changedIn: ["9.6.0"]
        }
    }, internal.StructureType.Element);
    domainmodels.MemberRef = MemberRef;
    /**
     * In version 9.6.0: added public
     * In version 7.11.0: introduced
     */
    class AssociationRef extends MemberRef {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__association = new internal.ByNameReferenceProperty(AssociationRef, this, "association", null, "DomainModels$AssociationBase");
            if (arguments.length < 4) {
                throw new Error("new AssociationRef() cannot be invoked directly, please use 'model.domainmodels.createAssociationRef()'");
            }
        }
        get containerAsVariableRefExpression() {
            return super.getContainerAs(expressions_1.expressions.VariableRefExpression);
        }
        get association() {
            return this.__association.get();
        }
        set association(newValue) {
            this.__association.set(newValue);
        }
        get associationQualifiedName() {
            return this.__association.qualifiedName();
        }
        /**
         * Creates and returns a new AssociationRef instance in the SDK and on the server.
         * The new AssociationRef will be automatically stored in the 'member' property
         * of the parent expressions.VariableRefExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 to 9.7.0
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, AssociationRef.structureTypeName, { start: "7.11.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, AssociationRef, "member", false);
        }
        /**
         * Creates and returns a new AssociationRef instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, AssociationRef);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    AssociationRef.structureTypeName = "DomainModels$AssociationRef";
    AssociationRef.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.11.0",
        properties: {
            association: {
                required: {
                    currentValue: true
                }
            }
        },
        public: {
            currentValue: true,
            changedIn: ["9.6.0"]
        }
    }, internal.StructureType.Element);
    domainmodels.AssociationRef = AssociationRef;
    /**
     * In version 8.10.0: introduced
     */
    class AssociationSource extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new AssociationSource() cannot be invoked directly, please use 'model.domainmodels.createAssociationSource()'");
            }
        }
        get containerAsAssociationBase() {
            return super.getContainerAs(AssociationBase);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    AssociationSource.structureTypeName = "DomainModels$AssociationSource";
    AssociationSource.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.10.0",
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    domainmodels.AssociationSource = AssociationSource;
    /**
     * See: {@link https://docs.mendix.com/refguide/attributes relevant section in reference guide}
     */
    class Attribute extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__name = new internal.PrimitiveProperty(Attribute, this, "name", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__dataStorageGuid = new internal.PrimitiveProperty(Attribute, this, "dataStorageGuid", "", internal.PrimitiveTypeEnum.Guid);
            /** @internal */
            this.__type = new internal.PartProperty(Attribute, this, "type", null, true);
            /** @internal */
            this.__documentation = new internal.PrimitiveProperty(Attribute, this, "documentation", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__value = new internal.PartProperty(Attribute, this, "value", null, true);
            /** @internal */
            this.__capabilities = new internal.PartProperty(Attribute, this, "capabilities", null, true);
            /** @internal */
            this.__exportLevel = new internal.EnumProperty(Attribute, this, "exportLevel", projects_1.projects.ExportLevel.Hidden, projects_1.projects.ExportLevel);
            if (arguments.length < 4) {
                throw new Error("new Attribute() cannot be invoked directly, please use 'model.domainmodels.createAttribute()'");
            }
        }
        get containerAsEntity() {
            return super.getContainerAs(Entity);
        }
        get name() {
            return this.__name.get();
        }
        set name(newValue) {
            this.__name.set(newValue);
        }
        get dataStorageGuid() {
            return this.__dataStorageGuid.get();
        }
        set dataStorageGuid(newValue) {
            this.__dataStorageGuid.set(newValue);
        }
        get type() {
            return this.__type.get();
        }
        set type(newValue) {
            this.__type.set(newValue);
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
         * In version 6.6.0: added public
         */
        get value() {
            return this.__value.get();
        }
        set value(newValue) {
            this.__value.set(newValue);
        }
        /**
         * In version 9.0.1: deleted
         * In version 8.13.0: introduced
         */
        get capabilities() {
            return this.__capabilities.get();
        }
        set capabilities(newValue) {
            this.__capabilities.set(newValue);
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
        /**
         * Creates and returns a new Attribute instance in the SDK and on the server.
         * The new Attribute will be automatically stored in the 'attributes' property
         * of the parent Entity element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, Attribute, "attributes", true);
        }
        /**
         * Creates and returns a new Attribute instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, Attribute);
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
            if (this.__capabilities.isAvailable) {
                this.capabilities = AttributeCapabilities.create(this.model);
            }
            this.dataStorageGuid = utils_1.utils.randomUuid();
            if (this.__exportLevel.isAvailable) {
                this.exportLevel = projects_1.projects.ExportLevel.Hidden;
            }
            this.type = StringAttributeType.create(this.model);
            this.value = StoredValue.create(this.model);
        }
    }
    Attribute.structureTypeName = "DomainModels$Attribute";
    Attribute.versionInfo = new exports.StructureVersionInfo({
        properties: {
            name: {
                public: {
                    currentValue: true
                }
            },
            type: {
                public: {
                    currentValue: true
                },
                required: {
                    currentValue: true
                }
            },
            documentation: {
                public: {
                    currentValue: true,
                    changedIn: ["9.10.0"]
                }
            },
            value: {
                public: {
                    currentValue: true,
                    changedIn: ["6.6.0"]
                },
                required: {
                    currentValue: true
                }
            },
            capabilities: {
                introduced: "8.13.0",
                deleted: "9.0.1",
                deletionMessage: null,
                public: {
                    currentValue: true
                },
                required: {
                    currentValue: true
                }
            },
            exportLevel: {
                introduced: "9.3.0"
            }
        },
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    domainmodels.Attribute = Attribute;
    /**
     * In version 9.0.1: deleted
     * In version 8.13.0: introduced
     */
    class AttributeCapabilities extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__filterable = new internal.PrimitiveProperty(AttributeCapabilities, this, "filterable", true, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__sortable = new internal.PrimitiveProperty(AttributeCapabilities, this, "sortable", true, internal.PrimitiveTypeEnum.Boolean);
            if (arguments.length < 4) {
                throw new Error("new AttributeCapabilities() cannot be invoked directly, please use 'model.domainmodels.createAttributeCapabilities()'");
            }
        }
        get containerAsAttribute() {
            return super.getContainerAs(Attribute);
        }
        get filterable() {
            return this.__filterable.get();
        }
        set filterable(newValue) {
            this.__filterable.set(newValue);
        }
        get sortable() {
            return this.__sortable.get();
        }
        set sortable(newValue) {
            this.__sortable.set(newValue);
        }
        /**
         * Creates and returns a new AttributeCapabilities instance in the SDK and on the server.
         * The new AttributeCapabilities will be automatically stored in the 'capabilities' property
         * of the parent Attribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.13.0 to 9.0.0
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, AttributeCapabilities.structureTypeName, { start: "8.13.0", end: "9.0.0" });
            return internal.instancehelpers.createElement(container, AttributeCapabilities, "capabilities", false);
        }
        /**
         * Creates and returns a new AttributeCapabilities instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, AttributeCapabilities);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.filterable = true;
            this.sortable = true;
        }
    }
    AttributeCapabilities.structureTypeName = "DomainModels$AttributeCapabilities";
    AttributeCapabilities.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.13.0",
        deleted: "9.0.1",
        deletionMessage: null,
        properties: {
            filterable: {
                public: {
                    currentValue: true
                }
            },
            sortable: {
                public: {
                    currentValue: true
                }
            }
        },
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    domainmodels.AttributeCapabilities = AttributeCapabilities;
    /**
     * In version 9.6.0: added public
     * In version 7.11.0: introduced
     */
    class AttributeRef extends MemberRef {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__attribute = new internal.ByNameReferenceProperty(AttributeRef, this, "attribute", null, "DomainModels$Attribute");
            if (arguments.length < 4) {
                throw new Error("new AttributeRef() cannot be invoked directly, please use 'model.domainmodels.createAttributeRef()'");
            }
        }
        get containerAsWidgetValue() {
            return super.getContainerAs(customwidgets_1.customwidgets.WidgetValue);
        }
        get containerAsAttributeWidget() {
            return super.getContainerAs(documenttemplates_1.documenttemplates.AttributeWidget);
        }
        get containerAsDataGridColumn() {
            return super.getContainerAs(documenttemplates_1.documenttemplates.DataGridColumn);
        }
        get containerAsDocumentTemplatesGridSortItem() {
            return super.getContainerAs(documenttemplates_1.documenttemplates.GridSortItem);
        }
        get containerAsVariableRefExpression() {
            return super.getContainerAs(expressions_1.expressions.VariableRefExpression);
        }
        get containerAsSortItem() {
            return super.getContainerAs(microflows_1.microflows.SortItem);
        }
        get containerAsClientTemplateParameter() {
            return super.getContainerAs(pages_1.pages.ClientTemplateParameter);
        }
        get containerAsGridColumn() {
            return super.getContainerAs(pages_1.pages.GridColumn);
        }
        get containerAsPagesGridSortItem() {
            return super.getContainerAs(pages_1.pages.GridSortItem);
        }
        get containerAsListViewSearch() {
            return super.getContainerAs(pages_1.pages.ListViewSearch);
        }
        get containerAsMemberWidget() {
            return super.getContainerAs(pages_1.pages.MemberWidget);
        }
        get containerAsRangeSearchField() {
            return super.getContainerAs(pages_1.pages.RangeSearchField);
        }
        get containerAsSingleSearchField() {
            return super.getContainerAs(pages_1.pages.SingleSearchField);
        }
        get containerAsStaticOrDynamicString() {
            return super.getContainerAs(pages_1.pages.StaticOrDynamicString);
        }
        get attribute() {
            return this.__attribute.get();
        }
        set attribute(newValue) {
            this.__attribute.set(newValue);
        }
        get attributeQualifiedName() {
            return this.__attribute.qualifiedName();
        }
        /**
         * Creates and returns a new AttributeRef instance in the SDK and on the server.
         * The new AttributeRef will be automatically stored in the 'attributeRef' property
         * of the parent customwidgets.WidgetValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInWidgetValueUnderAttributeRef(container) {
            internal.createInVersionCheck(container.model, AttributeRef.structureTypeName, { start: "7.11.0" });
            return internal.instancehelpers.createElement(container, AttributeRef, "attributeRef", false);
        }
        /**
         * Creates and returns a new AttributeRef instance in the SDK and on the server.
         * The new AttributeRef will be automatically stored in the 'attributeRef' property
         * of the parent documenttemplates.AttributeWidget element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInAttributeWidgetUnderAttributeRef(container) {
            internal.createInVersionCheck(container.model, AttributeRef.structureTypeName, { start: "7.11.0" });
            return internal.instancehelpers.createElement(container, AttributeRef, "attributeRef", false);
        }
        /**
         * Creates and returns a new AttributeRef instance in the SDK and on the server.
         * The new AttributeRef will be automatically stored in the 'attributeRef' property
         * of the parent documenttemplates.DataGridColumn element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInDataGridColumnUnderAttributeRef(container) {
            internal.createInVersionCheck(container.model, AttributeRef.structureTypeName, { start: "7.11.0" });
            return internal.instancehelpers.createElement(container, AttributeRef, "attributeRef", false);
        }
        /**
         * Creates and returns a new AttributeRef instance in the SDK and on the server.
         * The new AttributeRef will be automatically stored in the 'attributeRef' property
         * of the parent documenttemplates.GridSortItem element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInDocumentTemplatesGridSortItemUnderAttributeRef(container) {
            internal.createInVersionCheck(container.model, AttributeRef.structureTypeName, { start: "7.11.0" });
            return internal.instancehelpers.createElement(container, AttributeRef, "attributeRef", false);
        }
        /**
         * Creates and returns a new AttributeRef instance in the SDK and on the server.
         * The new AttributeRef will be automatically stored in the 'member' property
         * of the parent expressions.VariableRefExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 to 9.7.0
         */
        static createInVariableRefExpressionUnderMember(container) {
            internal.createInVersionCheck(container.model, AttributeRef.structureTypeName, { start: "7.11.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, AttributeRef, "member", false);
        }
        /**
         * Creates and returns a new AttributeRef instance in the SDK and on the server.
         * The new AttributeRef will be automatically stored in the 'attributeRef' property
         * of the parent microflows.SortItem element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInSortItemUnderAttributeRef(container) {
            internal.createInVersionCheck(container.model, AttributeRef.structureTypeName, { start: "7.11.0" });
            return internal.instancehelpers.createElement(container, AttributeRef, "attributeRef", false);
        }
        /**
         * Creates and returns a new AttributeRef instance in the SDK and on the server.
         * The new AttributeRef will be automatically stored in the 'attributeRef' property
         * of the parent pages.ClientTemplateParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInClientTemplateParameterUnderAttributeRef(container) {
            internal.createInVersionCheck(container.model, AttributeRef.structureTypeName, { start: "7.11.0" });
            return internal.instancehelpers.createElement(container, AttributeRef, "attributeRef", false);
        }
        /**
         * Creates and returns a new AttributeRef instance in the SDK and on the server.
         * The new AttributeRef will be automatically stored in the 'attributeRef' property
         * of the parent pages.GridColumn element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInGridColumnUnderAttributeRef(container) {
            internal.createInVersionCheck(container.model, AttributeRef.structureTypeName, { start: "7.11.0" });
            return internal.instancehelpers.createElement(container, AttributeRef, "attributeRef", false);
        }
        /**
         * Creates and returns a new AttributeRef instance in the SDK and on the server.
         * The new AttributeRef will be automatically stored in the 'attributeRef' property
         * of the parent pages.GridSortItem element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInPagesGridSortItemUnderAttributeRef(container) {
            internal.createInVersionCheck(container.model, AttributeRef.structureTypeName, { start: "7.11.0" });
            return internal.instancehelpers.createElement(container, AttributeRef, "attributeRef", false);
        }
        /**
         * Creates and returns a new AttributeRef instance in the SDK and on the server.
         * The new AttributeRef will be automatically stored in the 'searchRefs' property
         * of the parent pages.ListViewSearch element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInListViewSearchUnderSearchRefs(container) {
            internal.createInVersionCheck(container.model, AttributeRef.structureTypeName, { start: "7.11.0" });
            return internal.instancehelpers.createElement(container, AttributeRef, "searchRefs", true);
        }
        /**
         * Creates and returns a new AttributeRef instance in the SDK and on the server.
         * The new AttributeRef will be automatically stored in the 'attributeRef' property
         * of the parent pages.MemberWidget element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInMemberWidgetUnderAttributeRef(container) {
            internal.createInVersionCheck(container.model, AttributeRef.structureTypeName, { start: "7.11.0" });
            return internal.instancehelpers.createElement(container, AttributeRef, "attributeRef", false);
        }
        /**
         * Creates and returns a new AttributeRef instance in the SDK and on the server.
         * The new AttributeRef will be automatically stored in the 'lowerBoundRef' property
         * of the parent pages.RangeSearchField element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInRangeSearchFieldUnderLowerBoundRef(container) {
            internal.createInVersionCheck(container.model, AttributeRef.structureTypeName, { start: "7.11.0" });
            return internal.instancehelpers.createElement(container, AttributeRef, "lowerBoundRef", false);
        }
        /**
         * Creates and returns a new AttributeRef instance in the SDK and on the server.
         * The new AttributeRef will be automatically stored in the 'upperBoundRef' property
         * of the parent pages.RangeSearchField element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInRangeSearchFieldUnderUpperBoundRef(container) {
            internal.createInVersionCheck(container.model, AttributeRef.structureTypeName, { start: "7.11.0" });
            return internal.instancehelpers.createElement(container, AttributeRef, "upperBoundRef", false);
        }
        /**
         * Creates and returns a new AttributeRef instance in the SDK and on the server.
         * The new AttributeRef will be automatically stored in the 'attributeRef' property
         * of the parent pages.SingleSearchField element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInSingleSearchFieldUnderAttributeRef(container) {
            internal.createInVersionCheck(container.model, AttributeRef.structureTypeName, { start: "7.11.0" });
            return internal.instancehelpers.createElement(container, AttributeRef, "attributeRef", false);
        }
        /**
         * Creates and returns a new AttributeRef instance in the SDK and on the server.
         * The new AttributeRef will be automatically stored in the 'attributeRef' property
         * of the parent pages.StaticOrDynamicString element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInStaticOrDynamicStringUnderAttributeRef(container) {
            internal.createInVersionCheck(container.model, AttributeRef.structureTypeName, { start: "7.11.0" });
            return internal.instancehelpers.createElement(container, AttributeRef, "attributeRef", false);
        }
        /**
         * Creates and returns a new AttributeRef instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, AttributeRef);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    AttributeRef.structureTypeName = "DomainModels$AttributeRef";
    AttributeRef.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.11.0",
        properties: {
            attribute: {
                required: {
                    currentValue: true
                }
            }
        },
        public: {
            currentValue: true,
            changedIn: ["9.6.0"]
        }
    }, internal.StructureType.Element);
    domainmodels.AttributeRef = AttributeRef;
    class AttributeType extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new AttributeType() cannot be invoked directly, please use 'model.domainmodels.createAttributeType()'");
            }
        }
        get containerAsPublishedMessageAttribute() {
            return super.getContainerAs(businessevents_1.businessevents.PublishedMessageAttribute);
        }
        get containerAsAttribute() {
            return super.getContainerAs(Attribute);
        }
        get containerAsEntityKeyPart() {
            return super.getContainerAs(EntityKeyPart);
        }
        get containerAsTensorMappingElement() {
            return super.getContainerAs(mlmappings_1.mlmappings.TensorMappingElement);
        }
        get containerAsODataKeyPart() {
            return super.getContainerAs(rest_1.rest.ODataKeyPart);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    AttributeType.structureTypeName = "DomainModels$AttributeType";
    AttributeType.versionInfo = new exports.StructureVersionInfo({
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    domainmodels.AttributeType = AttributeType;
    class NumericAttributeTypeBase extends AttributeType {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new NumericAttributeTypeBase() cannot be invoked directly, please use 'model.domainmodels.createNumericAttributeTypeBase()'");
            }
        }
        get containerAsPublishedMessageAttribute() {
            return super.getContainerAs(businessevents_1.businessevents.PublishedMessageAttribute);
        }
        get containerAsAttribute() {
            return super.getContainerAs(Attribute);
        }
        get containerAsEntityKeyPart() {
            return super.getContainerAs(EntityKeyPart);
        }
        get containerAsTensorMappingElement() {
            return super.getContainerAs(mlmappings_1.mlmappings.TensorMappingElement);
        }
        get containerAsODataKeyPart() {
            return super.getContainerAs(rest_1.rest.ODataKeyPart);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    NumericAttributeTypeBase.structureTypeName = "DomainModels$NumericAttributeTypeBase";
    NumericAttributeTypeBase.versionInfo = new exports.StructureVersionInfo({
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    domainmodels.NumericAttributeTypeBase = NumericAttributeTypeBase;
    class IntegerAttributeTypeBase extends NumericAttributeTypeBase {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new IntegerAttributeTypeBase() cannot be invoked directly, please use 'model.domainmodels.createIntegerAttributeTypeBase()'");
            }
        }
        get containerAsPublishedMessageAttribute() {
            return super.getContainerAs(businessevents_1.businessevents.PublishedMessageAttribute);
        }
        get containerAsAttribute() {
            return super.getContainerAs(Attribute);
        }
        get containerAsEntityKeyPart() {
            return super.getContainerAs(EntityKeyPart);
        }
        get containerAsTensorMappingElement() {
            return super.getContainerAs(mlmappings_1.mlmappings.TensorMappingElement);
        }
        get containerAsODataKeyPart() {
            return super.getContainerAs(rest_1.rest.ODataKeyPart);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    IntegerAttributeTypeBase.structureTypeName = "DomainModels$IntegerAttributeTypeBase";
    IntegerAttributeTypeBase.versionInfo = new exports.StructureVersionInfo({
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    domainmodels.IntegerAttributeTypeBase = IntegerAttributeTypeBase;
    class AutoNumberAttributeType extends IntegerAttributeTypeBase {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new AutoNumberAttributeType() cannot be invoked directly, please use 'model.domainmodels.createAutoNumberAttributeType()'");
            }
        }
        get containerAsPublishedMessageAttribute() {
            return super.getContainerAs(businessevents_1.businessevents.PublishedMessageAttribute);
        }
        get containerAsAttribute() {
            return super.getContainerAs(Attribute);
        }
        get containerAsEntityKeyPart() {
            return super.getContainerAs(EntityKeyPart);
        }
        get containerAsTensorMappingElement() {
            return super.getContainerAs(mlmappings_1.mlmappings.TensorMappingElement);
        }
        get containerAsODataKeyPart() {
            return super.getContainerAs(rest_1.rest.ODataKeyPart);
        }
        /**
         * Creates and returns a new AutoNumberAttributeType instance in the SDK and on the server.
         * The new AutoNumberAttributeType will be automatically stored in the 'type' property
         * of the parent Attribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 8.8.0
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, AutoNumberAttributeType.structureTypeName, { end: "8.8.0" });
            return internal.instancehelpers.createElement(container, AutoNumberAttributeType, "type", false);
        }
        /**
         * Creates and returns a new AutoNumberAttributeType instance in the SDK and on the server.
         * The new AutoNumberAttributeType will be automatically stored in the 'attributeType' property
         * of the parent businessevents.PublishedMessageAttribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.14.0 and higher
         */
        static createInPublishedMessageAttributeUnderAttributeType(container) {
            internal.createInVersionCheck(container.model, AutoNumberAttributeType.structureTypeName, { start: "9.14.0" });
            return internal.instancehelpers.createElement(container, AutoNumberAttributeType, "attributeType", false);
        }
        /**
         * Creates and returns a new AutoNumberAttributeType instance in the SDK and on the server.
         * The new AutoNumberAttributeType will be automatically stored in the 'type' property
         * of the parent Attribute element passed as argument.
         */
        static createInAttributeUnderType(container) {
            return internal.instancehelpers.createElement(container, AutoNumberAttributeType, "type", false);
        }
        /**
         * Creates and returns a new AutoNumberAttributeType instance in the SDK and on the server.
         * The new AutoNumberAttributeType will be automatically stored in the 'type' property
         * of the parent EntityKeyPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.9.0 and higher
         */
        static createInEntityKeyPartUnderType(container) {
            internal.createInVersionCheck(container.model, AutoNumberAttributeType.structureTypeName, { start: "8.9.0" });
            return internal.instancehelpers.createElement(container, AutoNumberAttributeType, "type", false);
        }
        /**
         * Creates and returns a new AutoNumberAttributeType instance in the SDK and on the server.
         * The new AutoNumberAttributeType will be automatically stored in the 'attributeType' property
         * of the parent mlmappings.TensorMappingElement element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.17.0 and higher
         */
        static createInTensorMappingElementUnderAttributeType(container) {
            internal.createInVersionCheck(container.model, AutoNumberAttributeType.structureTypeName, { start: "9.17.0" });
            return internal.instancehelpers.createElement(container, AutoNumberAttributeType, "attributeType", false);
        }
        /**
         * Creates and returns a new AutoNumberAttributeType instance in the SDK and on the server.
         * The new AutoNumberAttributeType will be automatically stored in the 'type' property
         * of the parent rest.ODataKeyPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.9.0 and higher
         */
        static createInODataKeyPartUnderType(container) {
            internal.createInVersionCheck(container.model, AutoNumberAttributeType.structureTypeName, { start: "8.9.0" });
            return internal.instancehelpers.createElement(container, AutoNumberAttributeType, "type", false);
        }
        /**
         * Creates and returns a new AutoNumberAttributeType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, AutoNumberAttributeType);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    AutoNumberAttributeType.structureTypeName = "DomainModels$AutoNumberAttributeType";
    AutoNumberAttributeType.versionInfo = new exports.StructureVersionInfo({
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    domainmodels.AutoNumberAttributeType = AutoNumberAttributeType;
    class BinaryAttributeType extends AttributeType {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new BinaryAttributeType() cannot be invoked directly, please use 'model.domainmodels.createBinaryAttributeType()'");
            }
        }
        get containerAsPublishedMessageAttribute() {
            return super.getContainerAs(businessevents_1.businessevents.PublishedMessageAttribute);
        }
        get containerAsAttribute() {
            return super.getContainerAs(Attribute);
        }
        get containerAsEntityKeyPart() {
            return super.getContainerAs(EntityKeyPart);
        }
        get containerAsTensorMappingElement() {
            return super.getContainerAs(mlmappings_1.mlmappings.TensorMappingElement);
        }
        get containerAsODataKeyPart() {
            return super.getContainerAs(rest_1.rest.ODataKeyPart);
        }
        /**
         * Creates and returns a new BinaryAttributeType instance in the SDK and on the server.
         * The new BinaryAttributeType will be automatically stored in the 'type' property
         * of the parent Attribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 8.8.0
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, BinaryAttributeType.structureTypeName, { end: "8.8.0" });
            return internal.instancehelpers.createElement(container, BinaryAttributeType, "type", false);
        }
        /**
         * Creates and returns a new BinaryAttributeType instance in the SDK and on the server.
         * The new BinaryAttributeType will be automatically stored in the 'attributeType' property
         * of the parent businessevents.PublishedMessageAttribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.14.0 and higher
         */
        static createInPublishedMessageAttributeUnderAttributeType(container) {
            internal.createInVersionCheck(container.model, BinaryAttributeType.structureTypeName, { start: "9.14.0" });
            return internal.instancehelpers.createElement(container, BinaryAttributeType, "attributeType", false);
        }
        /**
         * Creates and returns a new BinaryAttributeType instance in the SDK and on the server.
         * The new BinaryAttributeType will be automatically stored in the 'type' property
         * of the parent Attribute element passed as argument.
         */
        static createInAttributeUnderType(container) {
            return internal.instancehelpers.createElement(container, BinaryAttributeType, "type", false);
        }
        /**
         * Creates and returns a new BinaryAttributeType instance in the SDK and on the server.
         * The new BinaryAttributeType will be automatically stored in the 'type' property
         * of the parent EntityKeyPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.9.0 and higher
         */
        static createInEntityKeyPartUnderType(container) {
            internal.createInVersionCheck(container.model, BinaryAttributeType.structureTypeName, { start: "8.9.0" });
            return internal.instancehelpers.createElement(container, BinaryAttributeType, "type", false);
        }
        /**
         * Creates and returns a new BinaryAttributeType instance in the SDK and on the server.
         * The new BinaryAttributeType will be automatically stored in the 'attributeType' property
         * of the parent mlmappings.TensorMappingElement element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.17.0 and higher
         */
        static createInTensorMappingElementUnderAttributeType(container) {
            internal.createInVersionCheck(container.model, BinaryAttributeType.structureTypeName, { start: "9.17.0" });
            return internal.instancehelpers.createElement(container, BinaryAttributeType, "attributeType", false);
        }
        /**
         * Creates and returns a new BinaryAttributeType instance in the SDK and on the server.
         * The new BinaryAttributeType will be automatically stored in the 'type' property
         * of the parent rest.ODataKeyPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.9.0 and higher
         */
        static createInODataKeyPartUnderType(container) {
            internal.createInVersionCheck(container.model, BinaryAttributeType.structureTypeName, { start: "8.9.0" });
            return internal.instancehelpers.createElement(container, BinaryAttributeType, "type", false);
        }
        /**
         * Creates and returns a new BinaryAttributeType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, BinaryAttributeType);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    BinaryAttributeType.structureTypeName = "DomainModels$BinaryAttributeType";
    BinaryAttributeType.versionInfo = new exports.StructureVersionInfo({
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    domainmodels.BinaryAttributeType = BinaryAttributeType;
    class BooleanAttributeType extends AttributeType {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new BooleanAttributeType() cannot be invoked directly, please use 'model.domainmodels.createBooleanAttributeType()'");
            }
        }
        get containerAsPublishedMessageAttribute() {
            return super.getContainerAs(businessevents_1.businessevents.PublishedMessageAttribute);
        }
        get containerAsAttribute() {
            return super.getContainerAs(Attribute);
        }
        get containerAsEntityKeyPart() {
            return super.getContainerAs(EntityKeyPart);
        }
        get containerAsTensorMappingElement() {
            return super.getContainerAs(mlmappings_1.mlmappings.TensorMappingElement);
        }
        get containerAsODataKeyPart() {
            return super.getContainerAs(rest_1.rest.ODataKeyPart);
        }
        /**
         * Creates and returns a new BooleanAttributeType instance in the SDK and on the server.
         * The new BooleanAttributeType will be automatically stored in the 'type' property
         * of the parent Attribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 8.8.0
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, BooleanAttributeType.structureTypeName, { end: "8.8.0" });
            return internal.instancehelpers.createElement(container, BooleanAttributeType, "type", false);
        }
        /**
         * Creates and returns a new BooleanAttributeType instance in the SDK and on the server.
         * The new BooleanAttributeType will be automatically stored in the 'attributeType' property
         * of the parent businessevents.PublishedMessageAttribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.14.0 and higher
         */
        static createInPublishedMessageAttributeUnderAttributeType(container) {
            internal.createInVersionCheck(container.model, BooleanAttributeType.structureTypeName, { start: "9.14.0" });
            return internal.instancehelpers.createElement(container, BooleanAttributeType, "attributeType", false);
        }
        /**
         * Creates and returns a new BooleanAttributeType instance in the SDK and on the server.
         * The new BooleanAttributeType will be automatically stored in the 'type' property
         * of the parent Attribute element passed as argument.
         */
        static createInAttributeUnderType(container) {
            return internal.instancehelpers.createElement(container, BooleanAttributeType, "type", false);
        }
        /**
         * Creates and returns a new BooleanAttributeType instance in the SDK and on the server.
         * The new BooleanAttributeType will be automatically stored in the 'type' property
         * of the parent EntityKeyPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.9.0 and higher
         */
        static createInEntityKeyPartUnderType(container) {
            internal.createInVersionCheck(container.model, BooleanAttributeType.structureTypeName, { start: "8.9.0" });
            return internal.instancehelpers.createElement(container, BooleanAttributeType, "type", false);
        }
        /**
         * Creates and returns a new BooleanAttributeType instance in the SDK and on the server.
         * The new BooleanAttributeType will be automatically stored in the 'attributeType' property
         * of the parent mlmappings.TensorMappingElement element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.17.0 and higher
         */
        static createInTensorMappingElementUnderAttributeType(container) {
            internal.createInVersionCheck(container.model, BooleanAttributeType.structureTypeName, { start: "9.17.0" });
            return internal.instancehelpers.createElement(container, BooleanAttributeType, "attributeType", false);
        }
        /**
         * Creates and returns a new BooleanAttributeType instance in the SDK and on the server.
         * The new BooleanAttributeType will be automatically stored in the 'type' property
         * of the parent rest.ODataKeyPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.9.0 and higher
         */
        static createInODataKeyPartUnderType(container) {
            internal.createInVersionCheck(container.model, BooleanAttributeType.structureTypeName, { start: "8.9.0" });
            return internal.instancehelpers.createElement(container, BooleanAttributeType, "type", false);
        }
        /**
         * Creates and returns a new BooleanAttributeType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, BooleanAttributeType);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    BooleanAttributeType.structureTypeName = "DomainModels$BooleanAttributeType";
    BooleanAttributeType.versionInfo = new exports.StructureVersionInfo({
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    domainmodels.BooleanAttributeType = BooleanAttributeType;
    /**
     * In version 6.6.0: added public
     */
    class ValueType extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new ValueType() cannot be invoked directly, please use 'model.domainmodels.createValueType()'");
            }
        }
        get containerAsAttribute() {
            return super.getContainerAs(Attribute);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ValueType.structureTypeName = "DomainModels$ValueType";
    ValueType.versionInfo = new exports.StructureVersionInfo({
        public: {
            currentValue: true,
            changedIn: ["6.6.0"]
        }
    }, internal.StructureType.Element);
    domainmodels.ValueType = ValueType;
    /**
     * In version 8.10.0: introduced
     */
    class MappedValue extends ValueType {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new MappedValue() cannot be invoked directly, please use 'model.domainmodels.createMappedValue()'");
            }
        }
        get containerAsAttribute() {
            return super.getContainerAs(Attribute);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    MappedValue.structureTypeName = "DomainModels$MappedValue";
    MappedValue.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.10.0",
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    domainmodels.MappedValue = MappedValue;
    /**
     * In version 9.0.2: introduced
     */
    class CachedMappedValue extends MappedValue {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new CachedMappedValue() cannot be invoked directly, please use 'model.domainmodels.createCachedMappedValue()'");
            }
        }
        get containerAsAttribute() {
            return super.getContainerAs(Attribute);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    CachedMappedValue.structureTypeName = "DomainModels$CachedMappedValue";
    CachedMappedValue.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.0.2",
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    domainmodels.CachedMappedValue = CachedMappedValue;
    /**
     * In version 6.6.0: added public
     */
    class CalculatedValue extends ValueType {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__microflow = new internal.ByNameReferenceProperty(CalculatedValue, this, "microflow", null, "Microflows$Microflow");
            /** @internal */
            this.__passEntity = new internal.PrimitiveProperty(CalculatedValue, this, "passEntity", true, internal.PrimitiveTypeEnum.Boolean);
            if (arguments.length < 4) {
                throw new Error("new CalculatedValue() cannot be invoked directly, please use 'model.domainmodels.createCalculatedValue()'");
            }
        }
        get containerAsAttribute() {
            return super.getContainerAs(Attribute);
        }
        get microflow() {
            return this.__microflow.get();
        }
        set microflow(newValue) {
            this.__microflow.set(newValue);
        }
        get microflowQualifiedName() {
            return this.__microflow.qualifiedName();
        }
        get passEntity() {
            return this.__passEntity.get();
        }
        set passEntity(newValue) {
            this.__passEntity.set(newValue);
        }
        /**
         * Creates and returns a new CalculatedValue instance in the SDK and on the server.
         * The new CalculatedValue will be automatically stored in the 'value' property
         * of the parent Attribute element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, CalculatedValue, "value", false);
        }
        /**
         * Creates and returns a new CalculatedValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, CalculatedValue);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.passEntity = true;
        }
    }
    CalculatedValue.structureTypeName = "DomainModels$CalculatedValue";
    CalculatedValue.versionInfo = new exports.StructureVersionInfo({
        public: {
            currentValue: true,
            changedIn: ["6.6.0"]
        }
    }, internal.StructureType.Element);
    domainmodels.CalculatedValue = CalculatedValue;
    class CrossAssociation extends AssociationBase {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__child = new internal.ByNameReferenceProperty(CrossAssociation, this, "child", null, "DomainModels$Entity");
            if (arguments.length < 4) {
                throw new Error("new CrossAssociation() cannot be invoked directly, please use 'model.domainmodels.createCrossAssociation()'");
            }
        }
        get containerAsDomainModel() {
            return super.getContainerAs(DomainModel);
        }
        get child() {
            return this.__child.get();
        }
        set child(newValue) {
            this.__child.set(newValue);
        }
        get childQualifiedName() {
            return this.__child.qualifiedName();
        }
        /**
         * Creates and returns a new CrossAssociation instance in the SDK and on the server.
         * The new CrossAssociation will be automatically stored in the 'crossAssociations' property
         * of the parent DomainModel element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, CrossAssociation, "crossAssociations", true);
        }
        /**
         * Creates and returns a new CrossAssociation instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, CrossAssociation);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    CrossAssociation.structureTypeName = "DomainModels$CrossAssociation";
    CrossAssociation.versionInfo = new exports.StructureVersionInfo({
        properties: {
            child: {
                public: {
                    currentValue: true
                },
                required: {
                    currentValue: true
                }
            }
        },
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    domainmodels.CrossAssociation = CrossAssociation;
    class DecimalAttributeTypeBase extends NumericAttributeTypeBase {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new DecimalAttributeTypeBase() cannot be invoked directly, please use 'model.domainmodels.createDecimalAttributeTypeBase()'");
            }
        }
        get containerAsPublishedMessageAttribute() {
            return super.getContainerAs(businessevents_1.businessevents.PublishedMessageAttribute);
        }
        get containerAsAttribute() {
            return super.getContainerAs(Attribute);
        }
        get containerAsEntityKeyPart() {
            return super.getContainerAs(EntityKeyPart);
        }
        get containerAsTensorMappingElement() {
            return super.getContainerAs(mlmappings_1.mlmappings.TensorMappingElement);
        }
        get containerAsODataKeyPart() {
            return super.getContainerAs(rest_1.rest.ODataKeyPart);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    DecimalAttributeTypeBase.structureTypeName = "DomainModels$DecimalAttributeTypeBase";
    DecimalAttributeTypeBase.versionInfo = new exports.StructureVersionInfo({
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    domainmodels.DecimalAttributeTypeBase = DecimalAttributeTypeBase;
    /**
     * In version 9.1.0: deleted
     */
    class FloatAttributeTypeBase extends DecimalAttributeTypeBase {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new FloatAttributeTypeBase() cannot be invoked directly, please use 'model.domainmodels.createFloatAttributeTypeBase()'");
            }
        }
        get containerAsAttribute() {
            return super.getContainerAs(Attribute);
        }
        get containerAsEntityKeyPart() {
            return super.getContainerAs(EntityKeyPart);
        }
        get containerAsODataKeyPart() {
            return super.getContainerAs(rest_1.rest.ODataKeyPart);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    FloatAttributeTypeBase.structureTypeName = "DomainModels$FloatAttributeTypeBase";
    FloatAttributeTypeBase.versionInfo = new exports.StructureVersionInfo({
        deleted: "9.1.0",
        deletionMessage: null,
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    domainmodels.FloatAttributeTypeBase = FloatAttributeTypeBase;
    /**
     * In version 9.1.0: deleted
     * In version 6.0.0: deprecated
     */
    class CurrencyAttributeType extends FloatAttributeTypeBase {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new CurrencyAttributeType() cannot be invoked directly, please use 'model.domainmodels.createCurrencyAttributeType()'");
            }
        }
        get containerAsAttribute() {
            return super.getContainerAs(Attribute);
        }
        get containerAsEntityKeyPart() {
            return super.getContainerAs(EntityKeyPart);
        }
        get containerAsODataKeyPart() {
            return super.getContainerAs(rest_1.rest.ODataKeyPart);
        }
        /**
         * Creates and returns a new CurrencyAttributeType instance in the SDK and on the server.
         * The new CurrencyAttributeType will be automatically stored in the 'type' property
         * of the parent Attribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 8.8.0
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, CurrencyAttributeType.structureTypeName, { end: "8.8.0" });
            return internal.instancehelpers.createElement(container, CurrencyAttributeType, "type", false);
        }
        /**
         * Creates and returns a new CurrencyAttributeType instance in the SDK and on the server.
         * The new CurrencyAttributeType will be automatically stored in the 'type' property
         * of the parent Attribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 9.0.5
         */
        static createInAttributeUnderType(container) {
            internal.createInVersionCheck(container.model, CurrencyAttributeType.structureTypeName, { end: "9.0.5" });
            return internal.instancehelpers.createElement(container, CurrencyAttributeType, "type", false);
        }
        /**
         * Creates and returns a new CurrencyAttributeType instance in the SDK and on the server.
         * The new CurrencyAttributeType will be automatically stored in the 'type' property
         * of the parent EntityKeyPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.9.0 to 9.0.5
         */
        static createInEntityKeyPartUnderType(container) {
            internal.createInVersionCheck(container.model, CurrencyAttributeType.structureTypeName, { start: "8.9.0", end: "9.0.5" });
            return internal.instancehelpers.createElement(container, CurrencyAttributeType, "type", false);
        }
        /**
         * Creates and returns a new CurrencyAttributeType instance in the SDK and on the server.
         * The new CurrencyAttributeType will be automatically stored in the 'type' property
         * of the parent rest.ODataKeyPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.9.0 to 9.0.5
         */
        static createInODataKeyPartUnderType(container) {
            internal.createInVersionCheck(container.model, CurrencyAttributeType.structureTypeName, { start: "8.9.0", end: "9.0.5" });
            return internal.instancehelpers.createElement(container, CurrencyAttributeType, "type", false);
        }
        /**
         * Creates and returns a new CurrencyAttributeType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, CurrencyAttributeType);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    CurrencyAttributeType.structureTypeName = "DomainModels$CurrencyAttributeType";
    CurrencyAttributeType.versionInfo = new exports.StructureVersionInfo({
        deleted: "9.1.0",
        deletionMessage: null,
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    domainmodels.CurrencyAttributeType = CurrencyAttributeType;
    class DateTimeAttributeType extends AttributeType {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__localizeDate = new internal.PrimitiveProperty(DateTimeAttributeType, this, "localizeDate", true, internal.PrimitiveTypeEnum.Boolean);
            if (arguments.length < 4) {
                throw new Error("new DateTimeAttributeType() cannot be invoked directly, please use 'model.domainmodels.createDateTimeAttributeType()'");
            }
        }
        get containerAsPublishedMessageAttribute() {
            return super.getContainerAs(businessevents_1.businessevents.PublishedMessageAttribute);
        }
        get containerAsAttribute() {
            return super.getContainerAs(Attribute);
        }
        get containerAsEntityKeyPart() {
            return super.getContainerAs(EntityKeyPart);
        }
        get containerAsTensorMappingElement() {
            return super.getContainerAs(mlmappings_1.mlmappings.TensorMappingElement);
        }
        get containerAsODataKeyPart() {
            return super.getContainerAs(rest_1.rest.ODataKeyPart);
        }
        get localizeDate() {
            return this.__localizeDate.get();
        }
        set localizeDate(newValue) {
            this.__localizeDate.set(newValue);
        }
        /**
         * Creates and returns a new DateTimeAttributeType instance in the SDK and on the server.
         * The new DateTimeAttributeType will be automatically stored in the 'type' property
         * of the parent Attribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 8.8.0
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, DateTimeAttributeType.structureTypeName, { end: "8.8.0" });
            return internal.instancehelpers.createElement(container, DateTimeAttributeType, "type", false);
        }
        /**
         * Creates and returns a new DateTimeAttributeType instance in the SDK and on the server.
         * The new DateTimeAttributeType will be automatically stored in the 'attributeType' property
         * of the parent businessevents.PublishedMessageAttribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.14.0 and higher
         */
        static createInPublishedMessageAttributeUnderAttributeType(container) {
            internal.createInVersionCheck(container.model, DateTimeAttributeType.structureTypeName, { start: "9.14.0" });
            return internal.instancehelpers.createElement(container, DateTimeAttributeType, "attributeType", false);
        }
        /**
         * Creates and returns a new DateTimeAttributeType instance in the SDK and on the server.
         * The new DateTimeAttributeType will be automatically stored in the 'type' property
         * of the parent Attribute element passed as argument.
         */
        static createInAttributeUnderType(container) {
            return internal.instancehelpers.createElement(container, DateTimeAttributeType, "type", false);
        }
        /**
         * Creates and returns a new DateTimeAttributeType instance in the SDK and on the server.
         * The new DateTimeAttributeType will be automatically stored in the 'type' property
         * of the parent EntityKeyPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.9.0 and higher
         */
        static createInEntityKeyPartUnderType(container) {
            internal.createInVersionCheck(container.model, DateTimeAttributeType.structureTypeName, { start: "8.9.0" });
            return internal.instancehelpers.createElement(container, DateTimeAttributeType, "type", false);
        }
        /**
         * Creates and returns a new DateTimeAttributeType instance in the SDK and on the server.
         * The new DateTimeAttributeType will be automatically stored in the 'attributeType' property
         * of the parent mlmappings.TensorMappingElement element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.17.0 and higher
         */
        static createInTensorMappingElementUnderAttributeType(container) {
            internal.createInVersionCheck(container.model, DateTimeAttributeType.structureTypeName, { start: "9.17.0" });
            return internal.instancehelpers.createElement(container, DateTimeAttributeType, "attributeType", false);
        }
        /**
         * Creates and returns a new DateTimeAttributeType instance in the SDK and on the server.
         * The new DateTimeAttributeType will be automatically stored in the 'type' property
         * of the parent rest.ODataKeyPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.9.0 and higher
         */
        static createInODataKeyPartUnderType(container) {
            internal.createInVersionCheck(container.model, DateTimeAttributeType.structureTypeName, { start: "8.9.0" });
            return internal.instancehelpers.createElement(container, DateTimeAttributeType, "type", false);
        }
        /**
         * Creates and returns a new DateTimeAttributeType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, DateTimeAttributeType);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.localizeDate = true;
        }
    }
    DateTimeAttributeType.structureTypeName = "DomainModels$DateTimeAttributeType";
    DateTimeAttributeType.versionInfo = new exports.StructureVersionInfo({
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    domainmodels.DateTimeAttributeType = DateTimeAttributeType;
    class DecimalAttributeType extends DecimalAttributeTypeBase {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new DecimalAttributeType() cannot be invoked directly, please use 'model.domainmodels.createDecimalAttributeType()'");
            }
        }
        get containerAsPublishedMessageAttribute() {
            return super.getContainerAs(businessevents_1.businessevents.PublishedMessageAttribute);
        }
        get containerAsAttribute() {
            return super.getContainerAs(Attribute);
        }
        get containerAsEntityKeyPart() {
            return super.getContainerAs(EntityKeyPart);
        }
        get containerAsTensorMappingElement() {
            return super.getContainerAs(mlmappings_1.mlmappings.TensorMappingElement);
        }
        get containerAsODataKeyPart() {
            return super.getContainerAs(rest_1.rest.ODataKeyPart);
        }
        /**
         * Creates and returns a new DecimalAttributeType instance in the SDK and on the server.
         * The new DecimalAttributeType will be automatically stored in the 'type' property
         * of the parent Attribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 8.8.0
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, DecimalAttributeType.structureTypeName, { end: "8.8.0" });
            return internal.instancehelpers.createElement(container, DecimalAttributeType, "type", false);
        }
        /**
         * Creates and returns a new DecimalAttributeType instance in the SDK and on the server.
         * The new DecimalAttributeType will be automatically stored in the 'attributeType' property
         * of the parent businessevents.PublishedMessageAttribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.14.0 and higher
         */
        static createInPublishedMessageAttributeUnderAttributeType(container) {
            internal.createInVersionCheck(container.model, DecimalAttributeType.structureTypeName, { start: "9.14.0" });
            return internal.instancehelpers.createElement(container, DecimalAttributeType, "attributeType", false);
        }
        /**
         * Creates and returns a new DecimalAttributeType instance in the SDK and on the server.
         * The new DecimalAttributeType will be automatically stored in the 'type' property
         * of the parent Attribute element passed as argument.
         */
        static createInAttributeUnderType(container) {
            return internal.instancehelpers.createElement(container, DecimalAttributeType, "type", false);
        }
        /**
         * Creates and returns a new DecimalAttributeType instance in the SDK and on the server.
         * The new DecimalAttributeType will be automatically stored in the 'type' property
         * of the parent EntityKeyPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.9.0 and higher
         */
        static createInEntityKeyPartUnderType(container) {
            internal.createInVersionCheck(container.model, DecimalAttributeType.structureTypeName, { start: "8.9.0" });
            return internal.instancehelpers.createElement(container, DecimalAttributeType, "type", false);
        }
        /**
         * Creates and returns a new DecimalAttributeType instance in the SDK and on the server.
         * The new DecimalAttributeType will be automatically stored in the 'attributeType' property
         * of the parent mlmappings.TensorMappingElement element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.17.0 and higher
         */
        static createInTensorMappingElementUnderAttributeType(container) {
            internal.createInVersionCheck(container.model, DecimalAttributeType.structureTypeName, { start: "9.17.0" });
            return internal.instancehelpers.createElement(container, DecimalAttributeType, "attributeType", false);
        }
        /**
         * Creates and returns a new DecimalAttributeType instance in the SDK and on the server.
         * The new DecimalAttributeType will be automatically stored in the 'type' property
         * of the parent rest.ODataKeyPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.9.0 and higher
         */
        static createInODataKeyPartUnderType(container) {
            internal.createInVersionCheck(container.model, DecimalAttributeType.structureTypeName, { start: "8.9.0" });
            return internal.instancehelpers.createElement(container, DecimalAttributeType, "type", false);
        }
        /**
         * Creates and returns a new DecimalAttributeType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, DecimalAttributeType);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    DecimalAttributeType.structureTypeName = "DomainModels$DecimalAttributeType";
    DecimalAttributeType.versionInfo = new exports.StructureVersionInfo({
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    domainmodels.DecimalAttributeType = DecimalAttributeType;
    /**
     * In version 9.6.0: added public
     * In version 7.11.0: introduced
     */
    class EntityRef extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new EntityRef() cannot be invoked directly, please use 'model.domainmodels.createEntityRef()'");
            }
        }
        get containerAsWidgetValue() {
            return super.getContainerAs(customwidgets_1.customwidgets.WidgetValue);
        }
        get containerAsEntityWidget() {
            return super.getContainerAs(documenttemplates_1.documenttemplates.EntityWidget);
        }
        get containerAsMemberRef() {
            return super.getContainerAs(MemberRef);
        }
        get containerAsCreateObjectClientAction() {
            return super.getContainerAs(pages_1.pages.CreateObjectClientAction);
        }
        get containerAsEntityPathSource() {
            return super.getContainerAs(pages_1.pages.EntityPathSource);
        }
        get containerAsNewButton() {
            return super.getContainerAs(pages_1.pages.NewButton);
        }
        get containerAsReferenceSetSelector() {
            return super.getContainerAs(pages_1.pages.ReferenceSetSelector);
        }
        get containerAsSelectorXPathSource() {
            return super.getContainerAs(pages_1.pages.SelectorXPathSource);
        }
        get containerAsParameter() {
            return super.getContainerAs(workflows_1.workflows.Parameter);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    EntityRef.structureTypeName = "DomainModels$EntityRef";
    EntityRef.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.11.0",
        public: {
            currentValue: true,
            changedIn: ["9.6.0"]
        }
    }, internal.StructureType.Element);
    domainmodels.EntityRef = EntityRef;
    /**
     * In version 9.6.0: added public
     * In version 7.11.0: introduced
     */
    class DirectEntityRef extends EntityRef {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__entity = new internal.ByNameReferenceProperty(DirectEntityRef, this, "entity", null, "DomainModels$Entity");
            if (arguments.length < 4) {
                throw new Error("new DirectEntityRef() cannot be invoked directly, please use 'model.domainmodels.createDirectEntityRef()'");
            }
        }
        get containerAsWidgetValue() {
            return super.getContainerAs(customwidgets_1.customwidgets.WidgetValue);
        }
        get containerAsEntityWidget() {
            return super.getContainerAs(documenttemplates_1.documenttemplates.EntityWidget);
        }
        get containerAsCreateObjectClientAction() {
            return super.getContainerAs(pages_1.pages.CreateObjectClientAction);
        }
        get containerAsEntityPathSource() {
            return super.getContainerAs(pages_1.pages.EntityPathSource);
        }
        get containerAsNewButton() {
            return super.getContainerAs(pages_1.pages.NewButton);
        }
        get containerAsReferenceSetSelector() {
            return super.getContainerAs(pages_1.pages.ReferenceSetSelector);
        }
        get containerAsSelectorXPathSource() {
            return super.getContainerAs(pages_1.pages.SelectorXPathSource);
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
        /**
         * Creates and returns a new DirectEntityRef instance in the SDK and on the server.
         * The new DirectEntityRef will be automatically stored in the 'entityRef' property
         * of the parent customwidgets.WidgetValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInWidgetValueUnderEntityRef(container) {
            internal.createInVersionCheck(container.model, DirectEntityRef.structureTypeName, { start: "7.11.0" });
            return internal.instancehelpers.createElement(container, DirectEntityRef, "entityRef", false);
        }
        /**
         * Creates and returns a new DirectEntityRef instance in the SDK and on the server.
         * The new DirectEntityRef will be automatically stored in the 'entityRef' property
         * of the parent documenttemplates.EntityWidget element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInEntityWidgetUnderEntityRef(container) {
            internal.createInVersionCheck(container.model, DirectEntityRef.structureTypeName, { start: "7.11.0" });
            return internal.instancehelpers.createElement(container, DirectEntityRef, "entityRef", false);
        }
        /**
         * Creates and returns a new DirectEntityRef instance in the SDK and on the server.
         * The new DirectEntityRef will be automatically stored in the 'entityRef' property
         * of the parent pages.CreateObjectClientAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.17.0 and higher
         */
        static createInCreateObjectClientActionUnderEntityRef(container) {
            internal.createInVersionCheck(container.model, DirectEntityRef.structureTypeName, { start: "7.17.0" });
            return internal.instancehelpers.createElement(container, DirectEntityRef, "entityRef", false);
        }
        /**
         * Creates and returns a new DirectEntityRef instance in the SDK and on the server.
         * The new DirectEntityRef will be automatically stored in the 'entityRef' property
         * of the parent pages.EntityPathSource element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInEntityPathSourceUnderEntityRef(container) {
            internal.createInVersionCheck(container.model, DirectEntityRef.structureTypeName, { start: "7.11.0" });
            return internal.instancehelpers.createElement(container, DirectEntityRef, "entityRef", false);
        }
        /**
         * Creates and returns a new DirectEntityRef instance in the SDK and on the server.
         * The new DirectEntityRef will be automatically stored in the 'entityRef' property
         * of the parent pages.NewButton element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 to 7.16.0
         */
        static createInNewButtonUnderEntityRef(container) {
            internal.createInVersionCheck(container.model, DirectEntityRef.structureTypeName, { start: "7.11.0", end: "7.16.0" });
            return internal.instancehelpers.createElement(container, DirectEntityRef, "entityRef", false);
        }
        /**
         * Creates and returns a new DirectEntityRef instance in the SDK and on the server.
         * The new DirectEntityRef will be automatically stored in the 'constrainedByRefs' property
         * of the parent pages.ReferenceSetSelector element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInReferenceSetSelectorUnderConstrainedByRefs(container) {
            internal.createInVersionCheck(container.model, DirectEntityRef.structureTypeName, { start: "7.11.0" });
            return internal.instancehelpers.createElement(container, DirectEntityRef, "constrainedByRefs", true);
        }
        /**
         * Creates and returns a new DirectEntityRef instance in the SDK and on the server.
         * The new DirectEntityRef will be automatically stored in the 'constrainedByRefs' property
         * of the parent pages.SelectorXPathSource element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInSelectorXPathSourceUnderConstrainedByRefs(container) {
            internal.createInVersionCheck(container.model, DirectEntityRef.structureTypeName, { start: "7.11.0" });
            return internal.instancehelpers.createElement(container, DirectEntityRef, "constrainedByRefs", true);
        }
        /**
         * Creates and returns a new DirectEntityRef instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, DirectEntityRef);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    DirectEntityRef.structureTypeName = "DomainModels$DirectEntityRef";
    DirectEntityRef.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.11.0",
        properties: {
            entity: {
                required: {
                    currentValue: true
                }
            }
        },
        public: {
            currentValue: true,
            changedIn: ["9.6.0"]
        }
    }, internal.StructureType.Element);
    domainmodels.DirectEntityRef = DirectEntityRef;
    /**
     * See: {@link https://docs.mendix.com/refguide/domain-model relevant section in reference guide}
     */
    class DomainModel extends projects_1.projects.ModuleDocument {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            /** @internal */
            this.__documentation = new internal.PrimitiveProperty(DomainModel, this, "documentation", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__entities = new internal.PartListProperty(DomainModel, this, "entities", []);
            /** @internal */
            this.__annotations = new internal.PartListProperty(DomainModel, this, "annotations", []);
            /** @internal */
            this.__associations = new internal.PartListProperty(DomainModel, this, "associations", []);
            /** @internal */
            this.__crossAssociations = new internal.PartListProperty(DomainModel, this, "crossAssociations", []);
            this._containmentName = "domainModel";
        }
        get containerAsModule() {
            return super.getContainerAs(projects_1.projects.Module);
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
        get entities() {
            return this.__entities.get();
        }
        get annotations() {
            return this.__annotations.get();
        }
        get associations() {
            return this.__associations.get();
        }
        get crossAssociations() {
            return this.__crossAssociations.get();
        }
        /**
         * Creates a new DomainModel unit in the SDK and on the server.
         * Expects one argument, the projects.IModule in which this unit is contained.
         */
        static createIn(container) {
            return internal.instancehelpers.createUnit(container, DomainModel);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    DomainModel.structureTypeName = "DomainModels$DomainModel";
    DomainModel.versionInfo = new exports.StructureVersionInfo({
        properties: {
            documentation: {
                public: {
                    currentValue: true,
                    changedIn: ["9.10.0"]
                }
            },
            entities: {
                public: {
                    currentValue: true
                }
            },
            associations: {
                public: {
                    currentValue: true
                }
            },
            crossAssociations: {
                public: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.ModelUnit);
    domainmodels.DomainModel = DomainModel;
    /**
     * See: {@link https://docs.mendix.com/refguide/entities relevant section in reference guide}
     */
    class Entity extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__name = new internal.PrimitiveProperty(Entity, this, "name", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__dataStorageGuid = new internal.PrimitiveProperty(Entity, this, "dataStorageGuid", "", internal.PrimitiveTypeEnum.Guid);
            /** @internal */
            this.__location = new internal.PrimitiveProperty(Entity, this, "location", { x: 0, y: 0 }, internal.PrimitiveTypeEnum.Point);
            /** @internal */
            this.__documentation = new internal.PrimitiveProperty(Entity, this, "documentation", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__generalization = new internal.PartProperty(Entity, this, "generalization", null, true);
            /** @internal */
            this.__attributes = new internal.PartListProperty(Entity, this, "attributes", []);
            /** @internal */
            this.__validationRules = new internal.PartListProperty(Entity, this, "validationRules", []);
            /** @internal */
            this.__eventHandlers = new internal.PartListProperty(Entity, this, "eventHandlers", []);
            /** @internal */
            this.__indexes = new internal.PartListProperty(Entity, this, "indexes", []);
            /** @internal */
            this.__accessRules = new internal.PartListProperty(Entity, this, "accessRules", []);
            /** @internal */
            this.__image = new internal.ByNameReferenceProperty(Entity, this, "image", null, "Images$Image");
            /** @internal */
            this.__imageData = new internal.PrimitiveProperty(Entity, this, "imageData", null, internal.PrimitiveTypeEnum.Blob);
            /** @internal */
            this.__isRemote = new internal.PrimitiveProperty(Entity, this, "isRemote", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__remoteSource = new internal.PrimitiveProperty(Entity, this, "remoteSource", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__remoteSourceDocument = new internal.ByNameReferenceProperty(Entity, this, "remoteSourceDocument", null, "DomainModels$RemoteEntitySourceDocument");
            /** @internal */
            this.__source = new internal.PartProperty(Entity, this, "source", null, false);
            /** @internal */
            this.__capabilities = new internal.PartProperty(Entity, this, "capabilities", null, true);
            /** @internal */
            this.__exportLevel = new internal.EnumProperty(Entity, this, "exportLevel", projects_1.projects.ExportLevel.Hidden, projects_1.projects.ExportLevel);
            if (arguments.length < 4) {
                throw new Error("new Entity() cannot be invoked directly, please use 'model.domainmodels.createEntity()'");
            }
            this._declaredAsNamespace = true;
        }
        get containerAsDomainModel() {
            return super.getContainerAs(DomainModel);
        }
        get name() {
            return this.__name.get();
        }
        set name(newValue) {
            this.__name.set(newValue);
        }
        get dataStorageGuid() {
            return this.__dataStorageGuid.get();
        }
        set dataStorageGuid(newValue) {
            this.__dataStorageGuid.set(newValue);
        }
        /**
         * In version 9.10.0: added public
         */
        get location() {
            return this.__location.get();
        }
        set location(newValue) {
            this.__location.set(newValue);
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
        get generalization() {
            return this.__generalization.get();
        }
        set generalization(newValue) {
            this.__generalization.set(newValue);
        }
        get attributes() {
            return this.__attributes.get();
        }
        get validationRules() {
            return this.__validationRules.get();
        }
        get eventHandlers() {
            return this.__eventHandlers.get();
        }
        get indexes() {
            return this.__indexes.get();
        }
        get accessRules() {
            return this.__accessRules.get();
        }
        get image() {
            return this.__image.get();
        }
        set image(newValue) {
            this.__image.set(newValue);
        }
        get imageQualifiedName() {
            return this.__image.qualifiedName();
        }
        /**
         * In version 9.17.0: introduced
         */
        get imageData() {
            return this.__imageData.get();
        }
        set imageData(newValue) {
            this.__imageData.set(newValue);
        }
        /**
         * In version 8.10.0: deleted
         * In version 8.2.0: added public
         * In version 7.17.0: introduced
         */
        get isRemote() {
            return this.__isRemote.get();
        }
        set isRemote(newValue) {
            this.__isRemote.set(newValue);
        }
        /**
         * In version 8.10.0: deleted
         * In version 7.17.0: introduced
         */
        get remoteSource() {
            return this.__remoteSource.get();
        }
        set remoteSource(newValue) {
            this.__remoteSource.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 8.10.0: deleted
         * In version 8.2.0: introduced
         */
        get remoteSourceDocument() {
            return this.__remoteSourceDocument.get();
        }
        set remoteSourceDocument(newValue) {
            this.__remoteSourceDocument.set(newValue);
        }
        get remoteSourceDocumentQualifiedName() {
            return this.__remoteSourceDocument.qualifiedName();
        }
        /**
         * In version 8.10.0: introduced
         */
        get source() {
            return this.__source.get();
        }
        set source(newValue) {
            this.__source.set(newValue);
        }
        /**
         * In version 9.0.1: deleted
         * In version 8.12.0: introduced
         */
        get capabilities() {
            return this.__capabilities.get();
        }
        set capabilities(newValue) {
            this.__capabilities.set(newValue);
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
        /**
         * Creates and returns a new Entity instance in the SDK and on the server.
         * The new Entity will be automatically stored in the 'entities' property
         * of the parent DomainModel element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, Entity, "entities", true);
        }
        /**
         * Creates and returns a new Entity instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, Entity);
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
            if (this.__capabilities.isAvailable) {
                this.capabilities = EntityCapabilities.create(this.model);
            }
            this.dataStorageGuid = utils_1.utils.randomUuid();
            if (this.__exportLevel.isAvailable) {
                this.exportLevel = projects_1.projects.ExportLevel.Hidden;
            }
            this.generalization = NoGeneralization.create(this.model);
        }
    }
    Entity.structureTypeName = "DomainModels$Entity";
    Entity.versionInfo = new exports.StructureVersionInfo({
        properties: {
            name: {
                public: {
                    currentValue: true
                }
            },
            location: {
                public: {
                    currentValue: true,
                    changedIn: ["9.10.0"]
                }
            },
            documentation: {
                public: {
                    currentValue: true,
                    changedIn: ["9.10.0"]
                }
            },
            generalization: {
                public: {
                    currentValue: true
                },
                required: {
                    currentValue: true
                }
            },
            attributes: {
                public: {
                    currentValue: true
                }
            },
            imageData: {
                introduced: "9.17.0"
            },
            isRemote: {
                introduced: "7.17.0",
                deleted: "8.10.0",
                deletionMessage: "Use property 'source' instead",
                public: {
                    currentValue: true,
                    changedIn: ["8.2.0"]
                }
            },
            remoteSource: {
                introduced: "7.17.0",
                deleted: "8.10.0",
                deletionMessage: "Use property 'source' instead"
            },
            remoteSourceDocument: {
                introduced: "8.2.0",
                deleted: "8.10.0",
                deletionMessage: "Use property 'source' instead",
                public: {
                    currentValue: true
                }
            },
            source: {
                introduced: "8.10.0",
                public: {
                    currentValue: true
                }
            },
            capabilities: {
                introduced: "8.12.0",
                deleted: "9.0.1",
                deletionMessage: null,
                public: {
                    currentValue: true
                },
                required: {
                    currentValue: true
                }
            },
            exportLevel: {
                introduced: "9.3.0"
            }
        },
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    domainmodels.Entity = Entity;
    /**
     * In version 9.0.1: deleted
     * In version 8.12.0: introduced
     */
    class EntityCapabilities extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__countable = new internal.PrimitiveProperty(EntityCapabilities, this, "countable", true, internal.PrimitiveTypeEnum.Boolean);
            if (arguments.length < 4) {
                throw new Error("new EntityCapabilities() cannot be invoked directly, please use 'model.domainmodels.createEntityCapabilities()'");
            }
        }
        get containerAsEntity() {
            return super.getContainerAs(Entity);
        }
        /**
         * In version 8.14.0: added public
         */
        get countable() {
            return this.__countable.get();
        }
        set countable(newValue) {
            this.__countable.set(newValue);
        }
        /**
         * Creates and returns a new EntityCapabilities instance in the SDK and on the server.
         * The new EntityCapabilities will be automatically stored in the 'capabilities' property
         * of the parent Entity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.12.0 to 9.0.0
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, EntityCapabilities.structureTypeName, { start: "8.12.0", end: "9.0.0" });
            return internal.instancehelpers.createElement(container, EntityCapabilities, "capabilities", false);
        }
        /**
         * Creates and returns a new EntityCapabilities instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, EntityCapabilities);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.countable = true;
        }
    }
    EntityCapabilities.structureTypeName = "DomainModels$EntityCapabilities";
    EntityCapabilities.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.12.0",
        deleted: "9.0.1",
        deletionMessage: null,
        properties: {
            countable: {
                public: {
                    currentValue: true,
                    changedIn: ["8.14.0"]
                }
            }
        },
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    domainmodels.EntityCapabilities = EntityCapabilities;
    /**
     * In version 8.9.0: introduced
     */
    class EntityKey extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__parts = new internal.PartListProperty(EntityKey, this, "parts", []);
            if (arguments.length < 4) {
                throw new Error("new EntityKey() cannot be invoked directly, please use 'model.domainmodels.createEntityKey()'");
            }
        }
        get parts() {
            return this.__parts.get();
        }
        /**
         * Creates and returns a new EntityKey instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, EntityKey);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    EntityKey.structureTypeName = "DomainModels$EntityKey";
    EntityKey.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.9.0",
        properties: {
            parts: {
                public: {
                    currentValue: true
                }
            }
        },
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    domainmodels.EntityKey = EntityKey;
    /**
     * In version 8.9.0: introduced
     */
    class EntityKeyPart extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__name = new internal.PrimitiveProperty(EntityKeyPart, this, "name", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__type = new internal.PartProperty(EntityKeyPart, this, "type", null, true);
            if (arguments.length < 4) {
                throw new Error("new EntityKeyPart() cannot be invoked directly, please use 'model.domainmodels.createEntityKeyPart()'");
            }
        }
        get containerAsEntityKey() {
            return super.getContainerAs(EntityKey);
        }
        get name() {
            return this.__name.get();
        }
        set name(newValue) {
            this.__name.set(newValue);
        }
        get type() {
            return this.__type.get();
        }
        set type(newValue) {
            this.__type.set(newValue);
        }
        /**
         * Creates and returns a new EntityKeyPart instance in the SDK and on the server.
         * The new EntityKeyPart will be automatically stored in the 'parts' property
         * of the parent EntityKey element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.9.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, EntityKeyPart.structureTypeName, { start: "8.9.0" });
            return internal.instancehelpers.createElement(container, EntityKeyPart, "parts", true);
        }
        /**
         * Creates and returns a new EntityKeyPart instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, EntityKeyPart);
        }
        get qualifiedName() {
            return this._getQualifiedName();
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.type = LongAttributeType.create(this.model);
        }
    }
    EntityKeyPart.structureTypeName = "DomainModels$EntityKeyPart";
    EntityKeyPart.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.9.0",
        properties: {
            name: {
                public: {
                    currentValue: true
                }
            },
            type: {
                public: {
                    currentValue: true
                },
                required: {
                    currentValue: true
                }
            }
        },
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    domainmodels.EntityKeyPart = EntityKeyPart;
    /**
     * In version 9.6.0: added public
     * In version 7.11.0: introduced
     */
    class EntityRefStep extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__association = new internal.ByNameReferenceProperty(EntityRefStep, this, "association", null, "DomainModels$AssociationBase");
            /** @internal */
            this.__destinationEntity = new internal.ByNameReferenceProperty(EntityRefStep, this, "destinationEntity", null, "DomainModels$Entity");
            if (arguments.length < 4) {
                throw new Error("new EntityRefStep() cannot be invoked directly, please use 'model.domainmodels.createEntityRefStep()'");
            }
        }
        get containerAsIndirectEntityRef() {
            return super.getContainerAs(IndirectEntityRef);
        }
        get association() {
            return this.__association.get();
        }
        set association(newValue) {
            this.__association.set(newValue);
        }
        get associationQualifiedName() {
            return this.__association.qualifiedName();
        }
        get destinationEntity() {
            return this.__destinationEntity.get();
        }
        set destinationEntity(newValue) {
            this.__destinationEntity.set(newValue);
        }
        get destinationEntityQualifiedName() {
            return this.__destinationEntity.qualifiedName();
        }
        /**
         * Creates and returns a new EntityRefStep instance in the SDK and on the server.
         * The new EntityRefStep will be automatically stored in the 'steps' property
         * of the parent IndirectEntityRef element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, EntityRefStep.structureTypeName, { start: "7.11.0" });
            return internal.instancehelpers.createElement(container, EntityRefStep, "steps", true);
        }
        /**
         * Creates and returns a new EntityRefStep instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, EntityRefStep);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    EntityRefStep.structureTypeName = "DomainModels$EntityRefStep";
    EntityRefStep.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.11.0",
        properties: {
            association: {
                required: {
                    currentValue: true
                }
            },
            destinationEntity: {
                required: {
                    currentValue: true
                }
            }
        },
        public: {
            currentValue: true,
            changedIn: ["9.6.0"]
        }
    }, internal.StructureType.Element);
    domainmodels.EntityRefStep = EntityRefStep;
    /**
     * In version 8.10.0: introduced
     */
    class EntitySource extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new EntitySource() cannot be invoked directly, please use 'model.domainmodels.createEntitySource()'");
            }
        }
        get containerAsEntity() {
            return super.getContainerAs(Entity);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    EntitySource.structureTypeName = "DomainModels$EntitySource";
    EntitySource.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.10.0",
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    domainmodels.EntitySource = EntitySource;
    class EnumerationAttributeType extends AttributeType {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__enumeration = new internal.ByNameReferenceProperty(EnumerationAttributeType, this, "enumeration", null, "Enumerations$Enumeration");
            if (arguments.length < 4) {
                throw new Error("new EnumerationAttributeType() cannot be invoked directly, please use 'model.domainmodels.createEnumerationAttributeType()'");
            }
        }
        get containerAsPublishedMessageAttribute() {
            return super.getContainerAs(businessevents_1.businessevents.PublishedMessageAttribute);
        }
        get containerAsAttribute() {
            return super.getContainerAs(Attribute);
        }
        get containerAsEntityKeyPart() {
            return super.getContainerAs(EntityKeyPart);
        }
        get containerAsTensorMappingElement() {
            return super.getContainerAs(mlmappings_1.mlmappings.TensorMappingElement);
        }
        get containerAsODataKeyPart() {
            return super.getContainerAs(rest_1.rest.ODataKeyPart);
        }
        get enumeration() {
            return this.__enumeration.get();
        }
        set enumeration(newValue) {
            this.__enumeration.set(newValue);
        }
        get enumerationQualifiedName() {
            return this.__enumeration.qualifiedName();
        }
        /**
         * Creates and returns a new EnumerationAttributeType instance in the SDK and on the server.
         * The new EnumerationAttributeType will be automatically stored in the 'type' property
         * of the parent Attribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 8.8.0
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, EnumerationAttributeType.structureTypeName, { end: "8.8.0" });
            return internal.instancehelpers.createElement(container, EnumerationAttributeType, "type", false);
        }
        /**
         * Creates and returns a new EnumerationAttributeType instance in the SDK and on the server.
         * The new EnumerationAttributeType will be automatically stored in the 'attributeType' property
         * of the parent businessevents.PublishedMessageAttribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.14.0 and higher
         */
        static createInPublishedMessageAttributeUnderAttributeType(container) {
            internal.createInVersionCheck(container.model, EnumerationAttributeType.structureTypeName, { start: "9.14.0" });
            return internal.instancehelpers.createElement(container, EnumerationAttributeType, "attributeType", false);
        }
        /**
         * Creates and returns a new EnumerationAttributeType instance in the SDK and on the server.
         * The new EnumerationAttributeType will be automatically stored in the 'type' property
         * of the parent Attribute element passed as argument.
         */
        static createInAttributeUnderType(container) {
            return internal.instancehelpers.createElement(container, EnumerationAttributeType, "type", false);
        }
        /**
         * Creates and returns a new EnumerationAttributeType instance in the SDK and on the server.
         * The new EnumerationAttributeType will be automatically stored in the 'type' property
         * of the parent EntityKeyPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.9.0 and higher
         */
        static createInEntityKeyPartUnderType(container) {
            internal.createInVersionCheck(container.model, EnumerationAttributeType.structureTypeName, { start: "8.9.0" });
            return internal.instancehelpers.createElement(container, EnumerationAttributeType, "type", false);
        }
        /**
         * Creates and returns a new EnumerationAttributeType instance in the SDK and on the server.
         * The new EnumerationAttributeType will be automatically stored in the 'attributeType' property
         * of the parent mlmappings.TensorMappingElement element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.17.0 and higher
         */
        static createInTensorMappingElementUnderAttributeType(container) {
            internal.createInVersionCheck(container.model, EnumerationAttributeType.structureTypeName, { start: "9.17.0" });
            return internal.instancehelpers.createElement(container, EnumerationAttributeType, "attributeType", false);
        }
        /**
         * Creates and returns a new EnumerationAttributeType instance in the SDK and on the server.
         * The new EnumerationAttributeType will be automatically stored in the 'type' property
         * of the parent rest.ODataKeyPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.9.0 and higher
         */
        static createInODataKeyPartUnderType(container) {
            internal.createInVersionCheck(container.model, EnumerationAttributeType.structureTypeName, { start: "8.9.0" });
            return internal.instancehelpers.createElement(container, EnumerationAttributeType, "type", false);
        }
        /**
         * Creates and returns a new EnumerationAttributeType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, EnumerationAttributeType);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    EnumerationAttributeType.structureTypeName = "DomainModels$EnumerationAttributeType";
    EnumerationAttributeType.versionInfo = new exports.StructureVersionInfo({
        properties: {
            enumeration: {
                public: {
                    currentValue: true
                },
                required: {
                    currentValue: true
                }
            }
        },
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    domainmodels.EnumerationAttributeType = EnumerationAttributeType;
    class RuleInfo extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new RuleInfo() cannot be invoked directly, please use 'model.domainmodels.createRuleInfo()'");
            }
        }
        get containerAsValidationRule() {
            return super.getContainerAs(ValidationRule);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    RuleInfo.structureTypeName = "DomainModels$RuleInfo";
    RuleInfo.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    domainmodels.RuleInfo = RuleInfo;
    class EqualsToRuleInfo extends RuleInfo {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__useValue = new internal.PrimitiveProperty(EqualsToRuleInfo, this, "useValue", true, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__equalsToValue = new internal.PrimitiveProperty(EqualsToRuleInfo, this, "equalsToValue", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__equalsToAttribute = new internal.ByNameReferenceProperty(EqualsToRuleInfo, this, "equalsToAttribute", null, "DomainModels$Attribute");
            if (arguments.length < 4) {
                throw new Error("new EqualsToRuleInfo() cannot be invoked directly, please use 'model.domainmodels.createEqualsToRuleInfo()'");
            }
        }
        get containerAsValidationRule() {
            return super.getContainerAs(ValidationRule);
        }
        get useValue() {
            return this.__useValue.get();
        }
        set useValue(newValue) {
            this.__useValue.set(newValue);
        }
        get equalsToValue() {
            return this.__equalsToValue.get();
        }
        set equalsToValue(newValue) {
            this.__equalsToValue.set(newValue);
        }
        get equalsToAttribute() {
            return this.__equalsToAttribute.get();
        }
        set equalsToAttribute(newValue) {
            this.__equalsToAttribute.set(newValue);
        }
        get equalsToAttributeQualifiedName() {
            return this.__equalsToAttribute.qualifiedName();
        }
        /**
         * Creates and returns a new EqualsToRuleInfo instance in the SDK and on the server.
         * The new EqualsToRuleInfo will be automatically stored in the 'ruleInfo' property
         * of the parent ValidationRule element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, EqualsToRuleInfo, "ruleInfo", false);
        }
        /**
         * Creates and returns a new EqualsToRuleInfo instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, EqualsToRuleInfo);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.useValue = true;
        }
    }
    EqualsToRuleInfo.structureTypeName = "DomainModels$EqualsToRuleInfo";
    EqualsToRuleInfo.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    domainmodels.EqualsToRuleInfo = EqualsToRuleInfo;
    /**
     * See: {@link https://docs.mendix.com/refguide/event-handlers relevant section in reference guide}
     */
    class EventHandler extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__moment = new internal.EnumProperty(EventHandler, this, "moment", ActionMoment.After, ActionMoment);
            /** @internal */
            this.__event = new internal.EnumProperty(EventHandler, this, "event", EventType.Commit, EventType);
            /** @internal */
            this.__microflow = new internal.ByNameReferenceProperty(EventHandler, this, "microflow", null, "Microflows$Microflow");
            /** @internal */
            this.__raiseErrorOnFalse = new internal.PrimitiveProperty(EventHandler, this, "raiseErrorOnFalse", true, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__passEventObject = new internal.PrimitiveProperty(EventHandler, this, "passEventObject", true, internal.PrimitiveTypeEnum.Boolean);
            if (arguments.length < 4) {
                throw new Error("new EventHandler() cannot be invoked directly, please use 'model.domainmodels.createEventHandler()'");
            }
        }
        get containerAsEntity() {
            return super.getContainerAs(Entity);
        }
        get moment() {
            return this.__moment.get();
        }
        set moment(newValue) {
            this.__moment.set(newValue);
        }
        get event() {
            return this.__event.get();
        }
        set event(newValue) {
            this.__event.set(newValue);
        }
        get microflow() {
            return this.__microflow.get();
        }
        set microflow(newValue) {
            this.__microflow.set(newValue);
        }
        get microflowQualifiedName() {
            return this.__microflow.qualifiedName();
        }
        get raiseErrorOnFalse() {
            return this.__raiseErrorOnFalse.get();
        }
        set raiseErrorOnFalse(newValue) {
            this.__raiseErrorOnFalse.set(newValue);
        }
        get passEventObject() {
            return this.__passEventObject.get();
        }
        set passEventObject(newValue) {
            this.__passEventObject.set(newValue);
        }
        /**
         * Creates and returns a new EventHandler instance in the SDK and on the server.
         * The new EventHandler will be automatically stored in the 'eventHandlers' property
         * of the parent Entity element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, EventHandler, "eventHandlers", true);
        }
        /**
         * Creates and returns a new EventHandler instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, EventHandler);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.event = EventType.Commit;
            this.moment = ActionMoment.After;
            this.passEventObject = true;
            this.raiseErrorOnFalse = true;
        }
    }
    EventHandler.structureTypeName = "DomainModels$EventHandler";
    EventHandler.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    domainmodels.EventHandler = EventHandler;
    /**
     * In version 9.1.0: deleted
     * In version 6.0.0: deprecated
     */
    class FloatAttributeType extends FloatAttributeTypeBase {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new FloatAttributeType() cannot be invoked directly, please use 'model.domainmodels.createFloatAttributeType()'");
            }
        }
        get containerAsAttribute() {
            return super.getContainerAs(Attribute);
        }
        get containerAsEntityKeyPart() {
            return super.getContainerAs(EntityKeyPart);
        }
        get containerAsODataKeyPart() {
            return super.getContainerAs(rest_1.rest.ODataKeyPart);
        }
        /**
         * Creates and returns a new FloatAttributeType instance in the SDK and on the server.
         * The new FloatAttributeType will be automatically stored in the 'type' property
         * of the parent Attribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 8.8.0
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, FloatAttributeType.structureTypeName, { end: "8.8.0" });
            return internal.instancehelpers.createElement(container, FloatAttributeType, "type", false);
        }
        /**
         * Creates and returns a new FloatAttributeType instance in the SDK and on the server.
         * The new FloatAttributeType will be automatically stored in the 'type' property
         * of the parent Attribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 9.0.5
         */
        static createInAttributeUnderType(container) {
            internal.createInVersionCheck(container.model, FloatAttributeType.structureTypeName, { end: "9.0.5" });
            return internal.instancehelpers.createElement(container, FloatAttributeType, "type", false);
        }
        /**
         * Creates and returns a new FloatAttributeType instance in the SDK and on the server.
         * The new FloatAttributeType will be automatically stored in the 'type' property
         * of the parent EntityKeyPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.9.0 to 9.0.5
         */
        static createInEntityKeyPartUnderType(container) {
            internal.createInVersionCheck(container.model, FloatAttributeType.structureTypeName, { start: "8.9.0", end: "9.0.5" });
            return internal.instancehelpers.createElement(container, FloatAttributeType, "type", false);
        }
        /**
         * Creates and returns a new FloatAttributeType instance in the SDK and on the server.
         * The new FloatAttributeType will be automatically stored in the 'type' property
         * of the parent rest.ODataKeyPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.9.0 to 9.0.5
         */
        static createInODataKeyPartUnderType(container) {
            internal.createInVersionCheck(container.model, FloatAttributeType.structureTypeName, { start: "8.9.0", end: "9.0.5" });
            return internal.instancehelpers.createElement(container, FloatAttributeType, "type", false);
        }
        /**
         * Creates and returns a new FloatAttributeType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, FloatAttributeType);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    FloatAttributeType.structureTypeName = "DomainModels$FloatAttributeType";
    FloatAttributeType.versionInfo = new exports.StructureVersionInfo({
        deleted: "9.1.0",
        deletionMessage: null,
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    domainmodels.FloatAttributeType = FloatAttributeType;
    class GeneralizationBase extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new GeneralizationBase() cannot be invoked directly, please use 'model.domainmodels.createGeneralizationBase()'");
            }
        }
        get containerAsEntity() {
            return super.getContainerAs(Entity);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    GeneralizationBase.structureTypeName = "DomainModels$GeneralizationBase";
    GeneralizationBase.versionInfo = new exports.StructureVersionInfo({
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    domainmodels.GeneralizationBase = GeneralizationBase;
    class Generalization extends GeneralizationBase {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__generalization = new internal.ByNameReferenceProperty(Generalization, this, "generalization", null, "DomainModels$Entity");
            if (arguments.length < 4) {
                throw new Error("new Generalization() cannot be invoked directly, please use 'model.domainmodels.createGeneralization()'");
            }
        }
        get containerAsEntity() {
            return super.getContainerAs(Entity);
        }
        get generalization() {
            return this.__generalization.get();
        }
        set generalization(newValue) {
            this.__generalization.set(newValue);
        }
        get generalizationQualifiedName() {
            return this.__generalization.qualifiedName();
        }
        /**
         * Creates and returns a new Generalization instance in the SDK and on the server.
         * The new Generalization will be automatically stored in the 'generalization' property
         * of the parent Entity element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, Generalization, "generalization", false);
        }
        /**
         * Creates and returns a new Generalization instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, Generalization);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    Generalization.structureTypeName = "DomainModels$Generalization";
    Generalization.versionInfo = new exports.StructureVersionInfo({
        properties: {
            generalization: {
                public: {
                    currentValue: true
                },
                required: {
                    currentValue: true
                }
            }
        },
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    domainmodels.Generalization = Generalization;
    class HashedStringAttributeType extends AttributeType {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new HashedStringAttributeType() cannot be invoked directly, please use 'model.domainmodels.createHashedStringAttributeType()'");
            }
        }
        get containerAsPublishedMessageAttribute() {
            return super.getContainerAs(businessevents_1.businessevents.PublishedMessageAttribute);
        }
        get containerAsAttribute() {
            return super.getContainerAs(Attribute);
        }
        get containerAsEntityKeyPart() {
            return super.getContainerAs(EntityKeyPart);
        }
        get containerAsTensorMappingElement() {
            return super.getContainerAs(mlmappings_1.mlmappings.TensorMappingElement);
        }
        get containerAsODataKeyPart() {
            return super.getContainerAs(rest_1.rest.ODataKeyPart);
        }
        /**
         * Creates and returns a new HashedStringAttributeType instance in the SDK and on the server.
         * The new HashedStringAttributeType will be automatically stored in the 'type' property
         * of the parent Attribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 8.8.0
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, HashedStringAttributeType.structureTypeName, { end: "8.8.0" });
            return internal.instancehelpers.createElement(container, HashedStringAttributeType, "type", false);
        }
        /**
         * Creates and returns a new HashedStringAttributeType instance in the SDK and on the server.
         * The new HashedStringAttributeType will be automatically stored in the 'attributeType' property
         * of the parent businessevents.PublishedMessageAttribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.14.0 and higher
         */
        static createInPublishedMessageAttributeUnderAttributeType(container) {
            internal.createInVersionCheck(container.model, HashedStringAttributeType.structureTypeName, { start: "9.14.0" });
            return internal.instancehelpers.createElement(container, HashedStringAttributeType, "attributeType", false);
        }
        /**
         * Creates and returns a new HashedStringAttributeType instance in the SDK and on the server.
         * The new HashedStringAttributeType will be automatically stored in the 'type' property
         * of the parent Attribute element passed as argument.
         */
        static createInAttributeUnderType(container) {
            return internal.instancehelpers.createElement(container, HashedStringAttributeType, "type", false);
        }
        /**
         * Creates and returns a new HashedStringAttributeType instance in the SDK and on the server.
         * The new HashedStringAttributeType will be automatically stored in the 'type' property
         * of the parent EntityKeyPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.9.0 and higher
         */
        static createInEntityKeyPartUnderType(container) {
            internal.createInVersionCheck(container.model, HashedStringAttributeType.structureTypeName, { start: "8.9.0" });
            return internal.instancehelpers.createElement(container, HashedStringAttributeType, "type", false);
        }
        /**
         * Creates and returns a new HashedStringAttributeType instance in the SDK and on the server.
         * The new HashedStringAttributeType will be automatically stored in the 'attributeType' property
         * of the parent mlmappings.TensorMappingElement element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.17.0 and higher
         */
        static createInTensorMappingElementUnderAttributeType(container) {
            internal.createInVersionCheck(container.model, HashedStringAttributeType.structureTypeName, { start: "9.17.0" });
            return internal.instancehelpers.createElement(container, HashedStringAttributeType, "attributeType", false);
        }
        /**
         * Creates and returns a new HashedStringAttributeType instance in the SDK and on the server.
         * The new HashedStringAttributeType will be automatically stored in the 'type' property
         * of the parent rest.ODataKeyPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.9.0 and higher
         */
        static createInODataKeyPartUnderType(container) {
            internal.createInVersionCheck(container.model, HashedStringAttributeType.structureTypeName, { start: "8.9.0" });
            return internal.instancehelpers.createElement(container, HashedStringAttributeType, "type", false);
        }
        /**
         * Creates and returns a new HashedStringAttributeType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, HashedStringAttributeType);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    HashedStringAttributeType.structureTypeName = "DomainModels$HashedStringAttributeType";
    HashedStringAttributeType.versionInfo = new exports.StructureVersionInfo({
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    domainmodels.HashedStringAttributeType = HashedStringAttributeType;
    /**
     * See: {@link https://docs.mendix.com/refguide/indexes relevant section in reference guide}
     */
    class Index extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__dataStorageGuid = new internal.PrimitiveProperty(Index, this, "dataStorageGuid", "", internal.PrimitiveTypeEnum.Guid);
            /** @internal */
            this.__attributes = new internal.PartListProperty(Index, this, "attributes", []);
            if (arguments.length < 4) {
                throw new Error("new Index() cannot be invoked directly, please use 'model.domainmodels.createIndex()'");
            }
        }
        get containerAsEntity() {
            return super.getContainerAs(Entity);
        }
        get dataStorageGuid() {
            return this.__dataStorageGuid.get();
        }
        set dataStorageGuid(newValue) {
            this.__dataStorageGuid.set(newValue);
        }
        get attributes() {
            return this.__attributes.get();
        }
        /**
         * Creates and returns a new Index instance in the SDK and on the server.
         * The new Index will be automatically stored in the 'indexes' property
         * of the parent Entity element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, Index, "indexes", true);
        }
        /**
         * Creates and returns a new Index instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, Index);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.dataStorageGuid = utils_1.utils.randomUuid();
        }
    }
    Index.structureTypeName = "DomainModels$Index";
    Index.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    domainmodels.Index = Index;
    class IndexedAttribute extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__type = new internal.EnumProperty(IndexedAttribute, this, "type", IndexedAttributeType.Normal, IndexedAttributeType);
            /** @internal */
            this.__attribute = new internal.ByIdReferenceProperty(IndexedAttribute, this, "attribute", null);
            /** @internal */
            this.__ascending = new internal.PrimitiveProperty(IndexedAttribute, this, "ascending", true, internal.PrimitiveTypeEnum.Boolean);
            if (arguments.length < 4) {
                throw new Error("new IndexedAttribute() cannot be invoked directly, please use 'model.domainmodels.createIndexedAttribute()'");
            }
        }
        get containerAsIndex() {
            return super.getContainerAs(Index);
        }
        get type() {
            return this.__type.get();
        }
        set type(newValue) {
            this.__type.set(newValue);
        }
        get attribute() {
            return this.__attribute.get();
        }
        set attribute(newValue) {
            this.__attribute.set(newValue);
        }
        /**
         * In version 7.14.0: introduced
         */
        get ascending() {
            return this.__ascending.get();
        }
        set ascending(newValue) {
            this.__ascending.set(newValue);
        }
        /**
         * Creates and returns a new IndexedAttribute instance in the SDK and on the server.
         * The new IndexedAttribute will be automatically stored in the 'attributes' property
         * of the parent Index element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, IndexedAttribute, "attributes", true);
        }
        /**
         * Creates and returns a new IndexedAttribute instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, IndexedAttribute);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__ascending.isAvailable) {
                this.ascending = true;
            }
            this.type = IndexedAttributeType.Normal;
        }
    }
    IndexedAttribute.structureTypeName = "DomainModels$IndexedAttribute";
    IndexedAttribute.versionInfo = new exports.StructureVersionInfo({
        properties: {
            ascending: {
                introduced: "7.14.0"
            }
        }
    }, internal.StructureType.Element);
    domainmodels.IndexedAttribute = IndexedAttribute;
    /**
     * In version 9.6.0: added public
     * In version 7.11.0: introduced
     */
    class IndirectEntityRef extends EntityRef {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__steps = new internal.PartListProperty(IndirectEntityRef, this, "steps", []);
            if (arguments.length < 4) {
                throw new Error("new IndirectEntityRef() cannot be invoked directly, please use 'model.domainmodels.createIndirectEntityRef()'");
            }
        }
        get containerAsWidgetValue() {
            return super.getContainerAs(customwidgets_1.customwidgets.WidgetValue);
        }
        get containerAsEntityWidget() {
            return super.getContainerAs(documenttemplates_1.documenttemplates.EntityWidget);
        }
        get containerAsMemberRef() {
            return super.getContainerAs(MemberRef);
        }
        get containerAsCreateObjectClientAction() {
            return super.getContainerAs(pages_1.pages.CreateObjectClientAction);
        }
        get containerAsEntityPathSource() {
            return super.getContainerAs(pages_1.pages.EntityPathSource);
        }
        get containerAsNewButton() {
            return super.getContainerAs(pages_1.pages.NewButton);
        }
        get containerAsReferenceSetSelector() {
            return super.getContainerAs(pages_1.pages.ReferenceSetSelector);
        }
        get containerAsSelectorXPathSource() {
            return super.getContainerAs(pages_1.pages.SelectorXPathSource);
        }
        get containerAsParameter() {
            return super.getContainerAs(workflows_1.workflows.Parameter);
        }
        /**
         * In version 9.6.0: added public
         */
        get steps() {
            return this.__steps.get();
        }
        /**
         * Creates and returns a new IndirectEntityRef instance in the SDK and on the server.
         * The new IndirectEntityRef will be automatically stored in the 'entityRef' property
         * of the parent customwidgets.WidgetValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInWidgetValueUnderEntityRef(container) {
            internal.createInVersionCheck(container.model, IndirectEntityRef.structureTypeName, { start: "7.11.0" });
            return internal.instancehelpers.createElement(container, IndirectEntityRef, "entityRef", false);
        }
        /**
         * Creates and returns a new IndirectEntityRef instance in the SDK and on the server.
         * The new IndirectEntityRef will be automatically stored in the 'entityRef' property
         * of the parent documenttemplates.EntityWidget element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInEntityWidgetUnderEntityRef(container) {
            internal.createInVersionCheck(container.model, IndirectEntityRef.structureTypeName, { start: "7.11.0" });
            return internal.instancehelpers.createElement(container, IndirectEntityRef, "entityRef", false);
        }
        /**
         * Creates and returns a new IndirectEntityRef instance in the SDK and on the server.
         * The new IndirectEntityRef will be automatically stored in the 'entityRef' property
         * of the parent MemberRef element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInMemberRefUnderEntityRef(container) {
            internal.createInVersionCheck(container.model, IndirectEntityRef.structureTypeName, { start: "7.11.0" });
            return internal.instancehelpers.createElement(container, IndirectEntityRef, "entityRef", false);
        }
        /**
         * Creates and returns a new IndirectEntityRef instance in the SDK and on the server.
         * The new IndirectEntityRef will be automatically stored in the 'entityRef' property
         * of the parent pages.CreateObjectClientAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.17.0 and higher
         */
        static createInCreateObjectClientActionUnderEntityRef(container) {
            internal.createInVersionCheck(container.model, IndirectEntityRef.structureTypeName, { start: "7.17.0" });
            return internal.instancehelpers.createElement(container, IndirectEntityRef, "entityRef", false);
        }
        /**
         * Creates and returns a new IndirectEntityRef instance in the SDK and on the server.
         * The new IndirectEntityRef will be automatically stored in the 'entityRef' property
         * of the parent pages.EntityPathSource element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInEntityPathSourceUnderEntityRef(container) {
            internal.createInVersionCheck(container.model, IndirectEntityRef.structureTypeName, { start: "7.11.0" });
            return internal.instancehelpers.createElement(container, IndirectEntityRef, "entityRef", false);
        }
        /**
         * Creates and returns a new IndirectEntityRef instance in the SDK and on the server.
         * The new IndirectEntityRef will be automatically stored in the 'entityRef' property
         * of the parent pages.NewButton element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 to 7.16.0
         */
        static createInNewButtonUnderEntityRef(container) {
            internal.createInVersionCheck(container.model, IndirectEntityRef.structureTypeName, { start: "7.11.0", end: "7.16.0" });
            return internal.instancehelpers.createElement(container, IndirectEntityRef, "entityRef", false);
        }
        /**
         * Creates and returns a new IndirectEntityRef instance in the SDK and on the server.
         * The new IndirectEntityRef will be automatically stored in the 'constrainedByRefs' property
         * of the parent pages.ReferenceSetSelector element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInReferenceSetSelectorUnderConstrainedByRefs(container) {
            internal.createInVersionCheck(container.model, IndirectEntityRef.structureTypeName, { start: "7.11.0" });
            return internal.instancehelpers.createElement(container, IndirectEntityRef, "constrainedByRefs", true);
        }
        /**
         * Creates and returns a new IndirectEntityRef instance in the SDK and on the server.
         * The new IndirectEntityRef will be automatically stored in the 'constrainedByRefs' property
         * of the parent pages.SelectorXPathSource element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInSelectorXPathSourceUnderConstrainedByRefs(container) {
            internal.createInVersionCheck(container.model, IndirectEntityRef.structureTypeName, { start: "7.11.0" });
            return internal.instancehelpers.createElement(container, IndirectEntityRef, "constrainedByRefs", true);
        }
        /**
         * Creates and returns a new IndirectEntityRef instance in the SDK and on the server.
         * The new IndirectEntityRef will be automatically stored in the 'entityRef' property
         * of the parent workflows.Parameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.6.0 to 9.9.0
         */
        static createInParameterUnderEntityRef(container) {
            internal.createInVersionCheck(container.model, IndirectEntityRef.structureTypeName, { start: "9.6.0", end: "9.9.0" });
            return internal.instancehelpers.createElement(container, IndirectEntityRef, "entityRef", false);
        }
        /**
         * Creates and returns a new IndirectEntityRef instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, IndirectEntityRef);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    IndirectEntityRef.structureTypeName = "DomainModels$IndirectEntityRef";
    IndirectEntityRef.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.11.0",
        properties: {
            steps: {
                public: {
                    currentValue: true,
                    changedIn: ["9.6.0"]
                }
            }
        },
        public: {
            currentValue: true,
            changedIn: ["9.6.0"]
        }
    }, internal.StructureType.Element);
    domainmodels.IndirectEntityRef = IndirectEntityRef;
    class IntegerAttributeType extends IntegerAttributeTypeBase {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new IntegerAttributeType() cannot be invoked directly, please use 'model.domainmodels.createIntegerAttributeType()'");
            }
        }
        get containerAsPublishedMessageAttribute() {
            return super.getContainerAs(businessevents_1.businessevents.PublishedMessageAttribute);
        }
        get containerAsAttribute() {
            return super.getContainerAs(Attribute);
        }
        get containerAsEntityKeyPart() {
            return super.getContainerAs(EntityKeyPart);
        }
        get containerAsTensorMappingElement() {
            return super.getContainerAs(mlmappings_1.mlmappings.TensorMappingElement);
        }
        get containerAsODataKeyPart() {
            return super.getContainerAs(rest_1.rest.ODataKeyPart);
        }
        /**
         * Creates and returns a new IntegerAttributeType instance in the SDK and on the server.
         * The new IntegerAttributeType will be automatically stored in the 'type' property
         * of the parent Attribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 8.8.0
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, IntegerAttributeType.structureTypeName, { end: "8.8.0" });
            return internal.instancehelpers.createElement(container, IntegerAttributeType, "type", false);
        }
        /**
         * Creates and returns a new IntegerAttributeType instance in the SDK and on the server.
         * The new IntegerAttributeType will be automatically stored in the 'attributeType' property
         * of the parent businessevents.PublishedMessageAttribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.14.0 and higher
         */
        static createInPublishedMessageAttributeUnderAttributeType(container) {
            internal.createInVersionCheck(container.model, IntegerAttributeType.structureTypeName, { start: "9.14.0" });
            return internal.instancehelpers.createElement(container, IntegerAttributeType, "attributeType", false);
        }
        /**
         * Creates and returns a new IntegerAttributeType instance in the SDK and on the server.
         * The new IntegerAttributeType will be automatically stored in the 'type' property
         * of the parent Attribute element passed as argument.
         */
        static createInAttributeUnderType(container) {
            return internal.instancehelpers.createElement(container, IntegerAttributeType, "type", false);
        }
        /**
         * Creates and returns a new IntegerAttributeType instance in the SDK and on the server.
         * The new IntegerAttributeType will be automatically stored in the 'type' property
         * of the parent EntityKeyPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.9.0 and higher
         */
        static createInEntityKeyPartUnderType(container) {
            internal.createInVersionCheck(container.model, IntegerAttributeType.structureTypeName, { start: "8.9.0" });
            return internal.instancehelpers.createElement(container, IntegerAttributeType, "type", false);
        }
        /**
         * Creates and returns a new IntegerAttributeType instance in the SDK and on the server.
         * The new IntegerAttributeType will be automatically stored in the 'attributeType' property
         * of the parent mlmappings.TensorMappingElement element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.17.0 and higher
         */
        static createInTensorMappingElementUnderAttributeType(container) {
            internal.createInVersionCheck(container.model, IntegerAttributeType.structureTypeName, { start: "9.17.0" });
            return internal.instancehelpers.createElement(container, IntegerAttributeType, "attributeType", false);
        }
        /**
         * Creates and returns a new IntegerAttributeType instance in the SDK and on the server.
         * The new IntegerAttributeType will be automatically stored in the 'type' property
         * of the parent rest.ODataKeyPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.9.0 and higher
         */
        static createInODataKeyPartUnderType(container) {
            internal.createInVersionCheck(container.model, IntegerAttributeType.structureTypeName, { start: "8.9.0" });
            return internal.instancehelpers.createElement(container, IntegerAttributeType, "type", false);
        }
        /**
         * Creates and returns a new IntegerAttributeType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, IntegerAttributeType);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    IntegerAttributeType.structureTypeName = "DomainModels$IntegerAttributeType";
    IntegerAttributeType.versionInfo = new exports.StructureVersionInfo({
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    domainmodels.IntegerAttributeType = IntegerAttributeType;
    class LongAttributeType extends IntegerAttributeTypeBase {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new LongAttributeType() cannot be invoked directly, please use 'model.domainmodels.createLongAttributeType()'");
            }
        }
        get containerAsPublishedMessageAttribute() {
            return super.getContainerAs(businessevents_1.businessevents.PublishedMessageAttribute);
        }
        get containerAsAttribute() {
            return super.getContainerAs(Attribute);
        }
        get containerAsEntityKeyPart() {
            return super.getContainerAs(EntityKeyPart);
        }
        get containerAsTensorMappingElement() {
            return super.getContainerAs(mlmappings_1.mlmappings.TensorMappingElement);
        }
        get containerAsODataKeyPart() {
            return super.getContainerAs(rest_1.rest.ODataKeyPart);
        }
        /**
         * Creates and returns a new LongAttributeType instance in the SDK and on the server.
         * The new LongAttributeType will be automatically stored in the 'type' property
         * of the parent Attribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 8.8.0
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, LongAttributeType.structureTypeName, { end: "8.8.0" });
            return internal.instancehelpers.createElement(container, LongAttributeType, "type", false);
        }
        /**
         * Creates and returns a new LongAttributeType instance in the SDK and on the server.
         * The new LongAttributeType will be automatically stored in the 'attributeType' property
         * of the parent businessevents.PublishedMessageAttribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.14.0 and higher
         */
        static createInPublishedMessageAttributeUnderAttributeType(container) {
            internal.createInVersionCheck(container.model, LongAttributeType.structureTypeName, { start: "9.14.0" });
            return internal.instancehelpers.createElement(container, LongAttributeType, "attributeType", false);
        }
        /**
         * Creates and returns a new LongAttributeType instance in the SDK and on the server.
         * The new LongAttributeType will be automatically stored in the 'type' property
         * of the parent Attribute element passed as argument.
         */
        static createInAttributeUnderType(container) {
            return internal.instancehelpers.createElement(container, LongAttributeType, "type", false);
        }
        /**
         * Creates and returns a new LongAttributeType instance in the SDK and on the server.
         * The new LongAttributeType will be automatically stored in the 'type' property
         * of the parent EntityKeyPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.9.0 and higher
         */
        static createInEntityKeyPartUnderType(container) {
            internal.createInVersionCheck(container.model, LongAttributeType.structureTypeName, { start: "8.9.0" });
            return internal.instancehelpers.createElement(container, LongAttributeType, "type", false);
        }
        /**
         * Creates and returns a new LongAttributeType instance in the SDK and on the server.
         * The new LongAttributeType will be automatically stored in the 'attributeType' property
         * of the parent mlmappings.TensorMappingElement element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.17.0 and higher
         */
        static createInTensorMappingElementUnderAttributeType(container) {
            internal.createInVersionCheck(container.model, LongAttributeType.structureTypeName, { start: "9.17.0" });
            return internal.instancehelpers.createElement(container, LongAttributeType, "attributeType", false);
        }
        /**
         * Creates and returns a new LongAttributeType instance in the SDK and on the server.
         * The new LongAttributeType will be automatically stored in the 'type' property
         * of the parent rest.ODataKeyPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.9.0 and higher
         */
        static createInODataKeyPartUnderType(container) {
            internal.createInVersionCheck(container.model, LongAttributeType.structureTypeName, { start: "8.9.0" });
            return internal.instancehelpers.createElement(container, LongAttributeType, "type", false);
        }
        /**
         * Creates and returns a new LongAttributeType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, LongAttributeType);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    LongAttributeType.structureTypeName = "DomainModels$LongAttributeType";
    LongAttributeType.versionInfo = new exports.StructureVersionInfo({
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    domainmodels.LongAttributeType = LongAttributeType;
    /**
     * In version 8.10.0: introduced
     */
    class RemoteEntitySource extends EntitySource {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new RemoteEntitySource() cannot be invoked directly, please use 'model.domainmodels.createRemoteEntitySource()'");
            }
        }
        get containerAsEntity() {
            return super.getContainerAs(Entity);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    RemoteEntitySource.structureTypeName = "DomainModels$RemoteEntitySource";
    RemoteEntitySource.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.10.0",
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    domainmodels.RemoteEntitySource = RemoteEntitySource;
    /**
     * In version 8.11.0: introduced
     */
    class MaterializedRemoteEntitySource extends RemoteEntitySource {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new MaterializedRemoteEntitySource() cannot be invoked directly, please use 'model.domainmodels.createMaterializedRemoteEntitySource()'");
            }
        }
        get containerAsEntity() {
            return super.getContainerAs(Entity);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    MaterializedRemoteEntitySource.structureTypeName = "DomainModels$MaterializedRemoteEntitySource";
    MaterializedRemoteEntitySource.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.11.0",
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    domainmodels.MaterializedRemoteEntitySource = MaterializedRemoteEntitySource;
    class MaxLengthRuleInfo extends RuleInfo {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__maxLength = new internal.PrimitiveProperty(MaxLengthRuleInfo, this, "maxLength", 0, internal.PrimitiveTypeEnum.Integer);
            if (arguments.length < 4) {
                throw new Error("new MaxLengthRuleInfo() cannot be invoked directly, please use 'model.domainmodels.createMaxLengthRuleInfo()'");
            }
        }
        get containerAsValidationRule() {
            return super.getContainerAs(ValidationRule);
        }
        get maxLength() {
            return this.__maxLength.get();
        }
        set maxLength(newValue) {
            this.__maxLength.set(newValue);
        }
        /**
         * Creates and returns a new MaxLengthRuleInfo instance in the SDK and on the server.
         * The new MaxLengthRuleInfo will be automatically stored in the 'ruleInfo' property
         * of the parent ValidationRule element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, MaxLengthRuleInfo, "ruleInfo", false);
        }
        /**
         * Creates and returns a new MaxLengthRuleInfo instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, MaxLengthRuleInfo);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    MaxLengthRuleInfo.structureTypeName = "DomainModels$MaxLengthRuleInfo";
    MaxLengthRuleInfo.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    domainmodels.MaxLengthRuleInfo = MaxLengthRuleInfo;
    class MemberAccess extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__attribute = new internal.ByNameReferenceProperty(MemberAccess, this, "attribute", null, "DomainModels$Attribute");
            /** @internal */
            this.__association = new internal.ByNameReferenceProperty(MemberAccess, this, "association", null, "DomainModels$AssociationBase");
            /** @internal */
            this.__accessRights = new internal.EnumProperty(MemberAccess, this, "accessRights", MemberAccessRights.None, MemberAccessRights);
            if (arguments.length < 4) {
                throw new Error("new MemberAccess() cannot be invoked directly, please use 'model.domainmodels.createMemberAccess()'");
            }
        }
        get containerAsAccessRule() {
            return super.getContainerAs(AccessRule);
        }
        get attribute() {
            return this.__attribute.get();
        }
        set attribute(newValue) {
            this.__attribute.set(newValue);
        }
        get attributeQualifiedName() {
            return this.__attribute.qualifiedName();
        }
        get association() {
            return this.__association.get();
        }
        set association(newValue) {
            this.__association.set(newValue);
        }
        get associationQualifiedName() {
            return this.__association.qualifiedName();
        }
        get accessRights() {
            return this.__accessRights.get();
        }
        set accessRights(newValue) {
            this.__accessRights.set(newValue);
        }
        /**
         * Creates and returns a new MemberAccess instance in the SDK and on the server.
         * The new MemberAccess will be automatically stored in the 'memberAccesses' property
         * of the parent AccessRule element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, MemberAccess, "memberAccesses", true);
        }
        /**
         * Creates and returns a new MemberAccess instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, MemberAccess);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.accessRights = MemberAccessRights.None;
        }
    }
    MemberAccess.structureTypeName = "DomainModels$MemberAccess";
    MemberAccess.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    domainmodels.MemberAccess = MemberAccess;
    class NoGeneralization extends GeneralizationBase {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__hasChangedDate = new internal.PrimitiveProperty(NoGeneralization, this, "hasChangedDate", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__hasCreatedDate = new internal.PrimitiveProperty(NoGeneralization, this, "hasCreatedDate", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__hasOwner = new internal.PrimitiveProperty(NoGeneralization, this, "hasOwner", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__hasChangedBy = new internal.PrimitiveProperty(NoGeneralization, this, "hasChangedBy", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__persistable = new internal.PrimitiveProperty(NoGeneralization, this, "persistable", true, internal.PrimitiveTypeEnum.Boolean);
            if (arguments.length < 4) {
                throw new Error("new NoGeneralization() cannot be invoked directly, please use 'model.domainmodels.createNoGeneralization()'");
            }
        }
        get containerAsEntity() {
            return super.getContainerAs(Entity);
        }
        /**
         * In version 8.2.0: added public
         */
        get hasChangedDate() {
            return this.__hasChangedDate.get();
        }
        set hasChangedDate(newValue) {
            this.__hasChangedDate.set(newValue);
        }
        /**
         * In version 8.2.0: added public
         */
        get hasCreatedDate() {
            return this.__hasCreatedDate.get();
        }
        set hasCreatedDate(newValue) {
            this.__hasCreatedDate.set(newValue);
        }
        /**
         * In version 8.2.0: added public
         */
        get hasOwner() {
            return this.__hasOwner.get();
        }
        set hasOwner(newValue) {
            this.__hasOwner.set(newValue);
        }
        /**
         * In version 8.2.0: added public
         */
        get hasChangedBy() {
            return this.__hasChangedBy.get();
        }
        set hasChangedBy(newValue) {
            this.__hasChangedBy.set(newValue);
        }
        get persistable() {
            return this.__persistable.get();
        }
        set persistable(newValue) {
            this.__persistable.set(newValue);
        }
        /**
         * Creates and returns a new NoGeneralization instance in the SDK and on the server.
         * The new NoGeneralization will be automatically stored in the 'generalization' property
         * of the parent Entity element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, NoGeneralization, "generalization", false);
        }
        /**
         * Creates and returns a new NoGeneralization instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, NoGeneralization);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.persistable = true;
        }
    }
    NoGeneralization.structureTypeName = "DomainModels$NoGeneralization";
    NoGeneralization.versionInfo = new exports.StructureVersionInfo({
        properties: {
            hasChangedDate: {
                public: {
                    currentValue: true,
                    changedIn: ["8.2.0"]
                }
            },
            hasCreatedDate: {
                public: {
                    currentValue: true,
                    changedIn: ["8.2.0"]
                }
            },
            hasOwner: {
                public: {
                    currentValue: true,
                    changedIn: ["8.2.0"]
                }
            },
            hasChangedBy: {
                public: {
                    currentValue: true,
                    changedIn: ["8.2.0"]
                }
            },
            persistable: {
                public: {
                    currentValue: true
                }
            }
        },
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    domainmodels.NoGeneralization = NoGeneralization;
    /**
     * In version 8.10.0: introduced
     */
    class QueryBasedRemoteEntitySource extends RemoteEntitySource {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new QueryBasedRemoteEntitySource() cannot be invoked directly, please use 'model.domainmodels.createQueryBasedRemoteEntitySource()'");
            }
        }
        get containerAsEntity() {
            return super.getContainerAs(Entity);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    QueryBasedRemoteEntitySource.structureTypeName = "DomainModels$QueryBasedRemoteEntitySource";
    QueryBasedRemoteEntitySource.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.10.0",
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    domainmodels.QueryBasedRemoteEntitySource = QueryBasedRemoteEntitySource;
    class RangeRuleInfo extends RuleInfo {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__typeOfRange = new internal.EnumProperty(RangeRuleInfo, this, "typeOfRange", RangeType.Between, RangeType);
            /** @internal */
            this.__useMinValue = new internal.PrimitiveProperty(RangeRuleInfo, this, "useMinValue", true, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__useMaxValue = new internal.PrimitiveProperty(RangeRuleInfo, this, "useMaxValue", true, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__minValue = new internal.PrimitiveProperty(RangeRuleInfo, this, "minValue", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__maxValue = new internal.PrimitiveProperty(RangeRuleInfo, this, "maxValue", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__minAttribute = new internal.ByNameReferenceProperty(RangeRuleInfo, this, "minAttribute", null, "DomainModels$Attribute");
            /** @internal */
            this.__maxAttribute = new internal.ByNameReferenceProperty(RangeRuleInfo, this, "maxAttribute", null, "DomainModels$Attribute");
            if (arguments.length < 4) {
                throw new Error("new RangeRuleInfo() cannot be invoked directly, please use 'model.domainmodels.createRangeRuleInfo()'");
            }
        }
        get containerAsValidationRule() {
            return super.getContainerAs(ValidationRule);
        }
        get typeOfRange() {
            return this.__typeOfRange.get();
        }
        set typeOfRange(newValue) {
            this.__typeOfRange.set(newValue);
        }
        get useMinValue() {
            return this.__useMinValue.get();
        }
        set useMinValue(newValue) {
            this.__useMinValue.set(newValue);
        }
        get useMaxValue() {
            return this.__useMaxValue.get();
        }
        set useMaxValue(newValue) {
            this.__useMaxValue.set(newValue);
        }
        get minValue() {
            return this.__minValue.get();
        }
        set minValue(newValue) {
            this.__minValue.set(newValue);
        }
        get maxValue() {
            return this.__maxValue.get();
        }
        set maxValue(newValue) {
            this.__maxValue.set(newValue);
        }
        get minAttribute() {
            return this.__minAttribute.get();
        }
        set minAttribute(newValue) {
            this.__minAttribute.set(newValue);
        }
        get minAttributeQualifiedName() {
            return this.__minAttribute.qualifiedName();
        }
        get maxAttribute() {
            return this.__maxAttribute.get();
        }
        set maxAttribute(newValue) {
            this.__maxAttribute.set(newValue);
        }
        get maxAttributeQualifiedName() {
            return this.__maxAttribute.qualifiedName();
        }
        /**
         * Creates and returns a new RangeRuleInfo instance in the SDK and on the server.
         * The new RangeRuleInfo will be automatically stored in the 'ruleInfo' property
         * of the parent ValidationRule element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, RangeRuleInfo, "ruleInfo", false);
        }
        /**
         * Creates and returns a new RangeRuleInfo instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, RangeRuleInfo);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.typeOfRange = RangeType.Between;
            this.useMaxValue = true;
            this.useMinValue = true;
        }
    }
    RangeRuleInfo.structureTypeName = "DomainModels$RangeRuleInfo";
    RangeRuleInfo.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    domainmodels.RangeRuleInfo = RangeRuleInfo;
    class RegExRuleInfo extends RuleInfo {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__regularExpression = new internal.ByNameReferenceProperty(RegExRuleInfo, this, "regularExpression", null, "RegularExpressions$RegularExpression");
            if (arguments.length < 4) {
                throw new Error("new RegExRuleInfo() cannot be invoked directly, please use 'model.domainmodels.createRegExRuleInfo()'");
            }
        }
        get containerAsValidationRule() {
            return super.getContainerAs(ValidationRule);
        }
        get regularExpression() {
            return this.__regularExpression.get();
        }
        set regularExpression(newValue) {
            this.__regularExpression.set(newValue);
        }
        get regularExpressionQualifiedName() {
            return this.__regularExpression.qualifiedName();
        }
        /**
         * Creates and returns a new RegExRuleInfo instance in the SDK and on the server.
         * The new RegExRuleInfo will be automatically stored in the 'ruleInfo' property
         * of the parent ValidationRule element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, RegExRuleInfo, "ruleInfo", false);
        }
        /**
         * Creates and returns a new RegExRuleInfo instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, RegExRuleInfo);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    RegExRuleInfo.structureTypeName = "DomainModels$RegExRuleInfo";
    RegExRuleInfo.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    domainmodels.RegExRuleInfo = RegExRuleInfo;
    /**
     * In version 8.10.0: introduced
     */
    class RemoteAssociationSource extends AssociationSource {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new RemoteAssociationSource() cannot be invoked directly, please use 'model.domainmodels.createRemoteAssociationSource()'");
            }
        }
        get containerAsAssociationBase() {
            return super.getContainerAs(AssociationBase);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    RemoteAssociationSource.structureTypeName = "DomainModels$RemoteAssociationSource";
    RemoteAssociationSource.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.10.0",
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    domainmodels.RemoteAssociationSource = RemoteAssociationSource;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 7.18.0: introduced
     */
    class RemoteEntitySourceDocument extends projects_1.projects.Document {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            /** @internal */
            this.__description = new internal.PrimitiveProperty(RemoteEntitySourceDocument, this, "description", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__catalogUrl = new internal.PrimitiveProperty(RemoteEntitySourceDocument, this, "catalogUrl", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__icon = new internal.PrimitiveProperty(RemoteEntitySourceDocument, this, "icon", null, internal.PrimitiveTypeEnum.Blob);
            /** @internal */
            this.__metadata = new internal.PrimitiveProperty(RemoteEntitySourceDocument, this, "metadata", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__metadataUrl = new internal.PrimitiveProperty(RemoteEntitySourceDocument, this, "metadataUrl", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__serviceName = new internal.PrimitiveProperty(RemoteEntitySourceDocument, this, "serviceName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__version = new internal.PrimitiveProperty(RemoteEntitySourceDocument, this, "version", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__endpointId = new internal.PrimitiveProperty(RemoteEntitySourceDocument, this, "endpointId", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__minimumMxVersion = new internal.PrimitiveProperty(RemoteEntitySourceDocument, this, "minimumMxVersion", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__recommendedMxVersion = new internal.PrimitiveProperty(RemoteEntitySourceDocument, this, "recommendedMxVersion", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__applicationId = new internal.PrimitiveProperty(RemoteEntitySourceDocument, this, "applicationId", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__environmentType = new internal.EnumProperty(RemoteEntitySourceDocument, this, "environmentType", EnvironmentType.Unknown, EnvironmentType);
            /** @internal */
            this.__metadataHash = new internal.PrimitiveProperty(RemoteEntitySourceDocument, this, "metadataHash", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__validated = new internal.PrimitiveProperty(RemoteEntitySourceDocument, this, "validated", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__validatedEntities = new internal.PrimitiveListProperty(RemoteEntitySourceDocument, this, "validatedEntities", [], internal.PrimitiveTypeEnum.String);
        }
        get containerAsFolderBase() {
            return super.getContainerAs(projects_1.projects.FolderBase);
        }
        /**
         * In version 8.10.0: introduced
         */
        get description() {
            return this.__description.get();
        }
        set description(newValue) {
            this.__description.set(newValue);
        }
        /**
         * In version 8.10.0: introduced
         */
        get catalogUrl() {
            return this.__catalogUrl.get();
        }
        set catalogUrl(newValue) {
            this.__catalogUrl.set(newValue);
        }
        /**
         * In version 8.11.0: added public
         * In version 8.10.0: introduced
         */
        get icon() {
            return this.__icon.get();
        }
        set icon(newValue) {
            this.__icon.set(newValue);
        }
        get metadata() {
            return this.__metadata.get();
        }
        set metadata(newValue) {
            this.__metadata.set(newValue);
        }
        get metadataUrl() {
            return this.__metadataUrl.get();
        }
        set metadataUrl(newValue) {
            this.__metadataUrl.set(newValue);
        }
        /**
         * In version 8.10.0: added public
         * In version 8.0.0: introduced
         */
        get serviceName() {
            return this.__serviceName.get();
        }
        set serviceName(newValue) {
            this.__serviceName.set(newValue);
        }
        /**
         * In version 8.10.0: added public
         * In version 8.0.0: introduced
         */
        get version() {
            return this.__version.get();
        }
        set version(newValue) {
            this.__version.set(newValue);
        }
        /**
         * In version 8.14.0: introduced
         */
        get endpointId() {
            return this.__endpointId.get();
        }
        set endpointId(newValue) {
            this.__endpointId.set(newValue);
        }
        /**
         * In version 8.14.0: introduced
         */
        get minimumMxVersion() {
            return this.__minimumMxVersion.get();
        }
        set minimumMxVersion(newValue) {
            this.__minimumMxVersion.set(newValue);
        }
        /**
         * In version 8.14.0: introduced
         */
        get recommendedMxVersion() {
            return this.__recommendedMxVersion.get();
        }
        set recommendedMxVersion(newValue) {
            this.__recommendedMxVersion.set(newValue);
        }
        /**
         * In version 8.12.0: added public
         * In version 8.11.0: introduced
         */
        get applicationId() {
            return this.__applicationId.get();
        }
        set applicationId(newValue) {
            this.__applicationId.set(newValue);
        }
        /**
         * In version 8.14.0: introduced
         */
        get environmentType() {
            return this.__environmentType.get();
        }
        set environmentType(newValue) {
            this.__environmentType.set(newValue);
        }
        /**
         * In version 8.16.0: introduced
         */
        get metadataHash() {
            return this.__metadataHash.get();
        }
        set metadataHash(newValue) {
            this.__metadataHash.set(newValue);
        }
        /**
         * In version 9.6.0: introduced
         */
        get validated() {
            return this.__validated.get();
        }
        set validated(newValue) {
            this.__validated.set(newValue);
        }
        /**
         * In version 9.8.0: introduced
         */
        get validatedEntities() {
            return this.__validatedEntities.get();
        }
        /** @internal */
        _isByNameReferrable() {
            return this.__name.isAvailable;
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__environmentType.isAvailable) {
                this.environmentType = EnvironmentType.Unknown;
            }
        }
    }
    RemoteEntitySourceDocument.structureTypeName = "DomainModels$RemoteEntitySourceDocument";
    RemoteEntitySourceDocument.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.18.0",
        properties: {
            description: {
                introduced: "8.10.0"
            },
            catalogUrl: {
                introduced: "8.10.0"
            },
            icon: {
                introduced: "8.10.0",
                public: {
                    currentValue: true,
                    changedIn: ["8.11.0"]
                }
            },
            serviceName: {
                introduced: "8.0.0",
                public: {
                    currentValue: true,
                    changedIn: ["8.10.0"]
                }
            },
            version: {
                introduced: "8.0.0",
                public: {
                    currentValue: true,
                    changedIn: ["8.10.0"]
                }
            },
            endpointId: {
                introduced: "8.14.0",
                public: {
                    currentValue: true
                }
            },
            minimumMxVersion: {
                introduced: "8.14.0",
                public: {
                    currentValue: true
                }
            },
            recommendedMxVersion: {
                introduced: "8.14.0",
                public: {
                    currentValue: true
                }
            },
            applicationId: {
                introduced: "8.11.0",
                public: {
                    currentValue: true,
                    changedIn: ["8.12.0"]
                }
            },
            environmentType: {
                introduced: "8.14.0",
                public: {
                    currentValue: true
                }
            },
            metadataHash: {
                introduced: "8.16.0",
                public: {
                    currentValue: true
                }
            },
            validated: {
                introduced: "9.6.0",
                public: {
                    currentValue: true
                }
            },
            validatedEntities: {
                introduced: "9.8.0",
                public: {
                    currentValue: true
                }
            }
        },
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.ModelUnit);
    domainmodels.RemoteEntitySourceDocument = RemoteEntitySourceDocument;
    class RequiredRuleInfo extends RuleInfo {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new RequiredRuleInfo() cannot be invoked directly, please use 'model.domainmodels.createRequiredRuleInfo()'");
            }
        }
        get containerAsValidationRule() {
            return super.getContainerAs(ValidationRule);
        }
        /**
         * Creates and returns a new RequiredRuleInfo instance in the SDK and on the server.
         * The new RequiredRuleInfo will be automatically stored in the 'ruleInfo' property
         * of the parent ValidationRule element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, RequiredRuleInfo, "ruleInfo", false);
        }
        /**
         * Creates and returns a new RequiredRuleInfo instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, RequiredRuleInfo);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    RequiredRuleInfo.structureTypeName = "DomainModels$RequiredRuleInfo";
    RequiredRuleInfo.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    domainmodels.RequiredRuleInfo = RequiredRuleInfo;
    /**
     * In version 6.6.0: added public
     */
    class StoredValue extends ValueType {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__defaultValue = new internal.PrimitiveProperty(StoredValue, this, "defaultValue", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new StoredValue() cannot be invoked directly, please use 'model.domainmodels.createStoredValue()'");
            }
        }
        get containerAsAttribute() {
            return super.getContainerAs(Attribute);
        }
        get defaultValue() {
            return this.__defaultValue.get();
        }
        set defaultValue(newValue) {
            this.__defaultValue.set(newValue);
        }
        /**
         * Creates and returns a new StoredValue instance in the SDK and on the server.
         * The new StoredValue will be automatically stored in the 'value' property
         * of the parent Attribute element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, StoredValue, "value", false);
        }
        /**
         * Creates and returns a new StoredValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, StoredValue);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    StoredValue.structureTypeName = "DomainModels$StoredValue";
    StoredValue.versionInfo = new exports.StructureVersionInfo({
        public: {
            currentValue: true,
            changedIn: ["6.6.0"]
        }
    }, internal.StructureType.Element);
    domainmodels.StoredValue = StoredValue;
    class StringAttributeType extends AttributeType {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__length = new internal.PrimitiveProperty(StringAttributeType, this, "length", 200, internal.PrimitiveTypeEnum.Integer);
            if (arguments.length < 4) {
                throw new Error("new StringAttributeType() cannot be invoked directly, please use 'model.domainmodels.createStringAttributeType()'");
            }
        }
        get containerAsPublishedMessageAttribute() {
            return super.getContainerAs(businessevents_1.businessevents.PublishedMessageAttribute);
        }
        get containerAsAttribute() {
            return super.getContainerAs(Attribute);
        }
        get containerAsEntityKeyPart() {
            return super.getContainerAs(EntityKeyPart);
        }
        get containerAsTensorMappingElement() {
            return super.getContainerAs(mlmappings_1.mlmappings.TensorMappingElement);
        }
        get containerAsODataKeyPart() {
            return super.getContainerAs(rest_1.rest.ODataKeyPart);
        }
        get length() {
            return this.__length.get();
        }
        set length(newValue) {
            this.__length.set(newValue);
        }
        /**
         * Creates and returns a new StringAttributeType instance in the SDK and on the server.
         * The new StringAttributeType will be automatically stored in the 'type' property
         * of the parent Attribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 8.8.0
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, StringAttributeType.structureTypeName, { end: "8.8.0" });
            return internal.instancehelpers.createElement(container, StringAttributeType, "type", false);
        }
        /**
         * Creates and returns a new StringAttributeType instance in the SDK and on the server.
         * The new StringAttributeType will be automatically stored in the 'attributeType' property
         * of the parent businessevents.PublishedMessageAttribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.14.0 and higher
         */
        static createInPublishedMessageAttributeUnderAttributeType(container) {
            internal.createInVersionCheck(container.model, StringAttributeType.structureTypeName, { start: "9.14.0" });
            return internal.instancehelpers.createElement(container, StringAttributeType, "attributeType", false);
        }
        /**
         * Creates and returns a new StringAttributeType instance in the SDK and on the server.
         * The new StringAttributeType will be automatically stored in the 'type' property
         * of the parent Attribute element passed as argument.
         */
        static createInAttributeUnderType(container) {
            return internal.instancehelpers.createElement(container, StringAttributeType, "type", false);
        }
        /**
         * Creates and returns a new StringAttributeType instance in the SDK and on the server.
         * The new StringAttributeType will be automatically stored in the 'type' property
         * of the parent EntityKeyPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.9.0 and higher
         */
        static createInEntityKeyPartUnderType(container) {
            internal.createInVersionCheck(container.model, StringAttributeType.structureTypeName, { start: "8.9.0" });
            return internal.instancehelpers.createElement(container, StringAttributeType, "type", false);
        }
        /**
         * Creates and returns a new StringAttributeType instance in the SDK and on the server.
         * The new StringAttributeType will be automatically stored in the 'attributeType' property
         * of the parent mlmappings.TensorMappingElement element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.17.0 and higher
         */
        static createInTensorMappingElementUnderAttributeType(container) {
            internal.createInVersionCheck(container.model, StringAttributeType.structureTypeName, { start: "9.17.0" });
            return internal.instancehelpers.createElement(container, StringAttributeType, "attributeType", false);
        }
        /**
         * Creates and returns a new StringAttributeType instance in the SDK and on the server.
         * The new StringAttributeType will be automatically stored in the 'type' property
         * of the parent rest.ODataKeyPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.9.0 and higher
         */
        static createInODataKeyPartUnderType(container) {
            internal.createInVersionCheck(container.model, StringAttributeType.structureTypeName, { start: "8.9.0" });
            return internal.instancehelpers.createElement(container, StringAttributeType, "type", false);
        }
        /**
         * Creates and returns a new StringAttributeType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, StringAttributeType);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.length = 200;
        }
    }
    StringAttributeType.structureTypeName = "DomainModels$StringAttributeType";
    StringAttributeType.versionInfo = new exports.StructureVersionInfo({
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    domainmodels.StringAttributeType = StringAttributeType;
    class UniqueRuleInfo extends RuleInfo {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new UniqueRuleInfo() cannot be invoked directly, please use 'model.domainmodels.createUniqueRuleInfo()'");
            }
        }
        get containerAsValidationRule() {
            return super.getContainerAs(ValidationRule);
        }
        /**
         * Creates and returns a new UniqueRuleInfo instance in the SDK and on the server.
         * The new UniqueRuleInfo will be automatically stored in the 'ruleInfo' property
         * of the parent ValidationRule element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, UniqueRuleInfo, "ruleInfo", false);
        }
        /**
         * Creates and returns a new UniqueRuleInfo instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, UniqueRuleInfo);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    UniqueRuleInfo.structureTypeName = "DomainModels$UniqueRuleInfo";
    UniqueRuleInfo.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    domainmodels.UniqueRuleInfo = UniqueRuleInfo;
    /**
     * See: {@link https://docs.mendix.com/refguide/validation-rules relevant section in reference guide}
     */
    class ValidationRule extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__attribute = new internal.ByNameReferenceProperty(ValidationRule, this, "attribute", null, "DomainModels$Attribute");
            /** @internal */
            this.__errorMessage = new internal.PartProperty(ValidationRule, this, "errorMessage", null, true);
            /** @internal */
            this.__ruleInfo = new internal.PartProperty(ValidationRule, this, "ruleInfo", null, true);
            if (arguments.length < 4) {
                throw new Error("new ValidationRule() cannot be invoked directly, please use 'model.domainmodels.createValidationRule()'");
            }
        }
        get containerAsEntity() {
            return super.getContainerAs(Entity);
        }
        get attribute() {
            return this.__attribute.get();
        }
        set attribute(newValue) {
            this.__attribute.set(newValue);
        }
        get attributeQualifiedName() {
            return this.__attribute.qualifiedName();
        }
        get errorMessage() {
            return this.__errorMessage.get();
        }
        set errorMessage(newValue) {
            this.__errorMessage.set(newValue);
        }
        get ruleInfo() {
            return this.__ruleInfo.get();
        }
        set ruleInfo(newValue) {
            this.__ruleInfo.set(newValue);
        }
        /**
         * Creates and returns a new ValidationRule instance in the SDK and on the server.
         * The new ValidationRule will be automatically stored in the 'validationRules' property
         * of the parent Entity element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, ValidationRule, "validationRules", true);
        }
        /**
         * Creates and returns a new ValidationRule instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ValidationRule);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.errorMessage = texts_1.texts.Text.create(this.model);
            this.ruleInfo = RequiredRuleInfo.create(this.model);
        }
    }
    ValidationRule.structureTypeName = "DomainModels$ValidationRule";
    ValidationRule.versionInfo = new exports.StructureVersionInfo({
        properties: {
            attribute: {
                required: {
                    currentValue: true
                }
            },
            errorMessage: {
                required: {
                    currentValue: true
                }
            },
            ruleInfo: {
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    domainmodels.ValidationRule = ValidationRule;
})(domainmodels = exports.domainmodels || (exports.domainmodels = {}));
const businessevents_1 = require("./businessevents");
const customwidgets_1 = require("./customwidgets");
const documenttemplates_1 = require("./documenttemplates");
const expressions_1 = require("./expressions");
const mlmappings_1 = require("./mlmappings");
const microflows_1 = require("./microflows");
const pages_1 = require("./pages");
const rest_1 = require("./rest");
const security_1 = require("./security");
const texts_1 = require("./texts");
const workflows_1 = require("./workflows");
//# sourceMappingURL=domainmodels.js.map