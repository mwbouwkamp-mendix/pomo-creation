"use strict";
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.appservices = exports.StructureVersionInfo = void 0;
const internal = require("../sdk/internal");
exports.StructureVersionInfo = internal.StructureVersionInfo;
const projects_1 = require("./projects");
var appservices;
(function (appservices) {
    class AppServiceLocationEnum extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "appservices.AppServiceLocationEnum";
        }
    }
    AppServiceLocationEnum.Default = new AppServiceLocationEnum("Default", {});
    AppServiceLocationEnum.Constant = new AppServiceLocationEnum("Constant", {});
    AppServiceLocationEnum.Parameter = new AppServiceLocationEnum("Parameter", {});
    appservices.AppServiceLocationEnum = AppServiceLocationEnum;
    /**
     * In version 9.0.2: deleted
     */
    class AppServiceAction extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__name = new internal.PrimitiveProperty(AppServiceAction, this, "name", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__caption = new internal.PrimitiveProperty(AppServiceAction, this, "caption", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__description = new internal.PrimitiveProperty(AppServiceAction, this, "description", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__parameters = new internal.PartListProperty(AppServiceAction, this, "parameters", []);
            /** @internal */
            this.__microflow = new internal.ByNameReferenceProperty(AppServiceAction, this, "microflow", null, "Microflows$Microflow");
            /** @internal */
            this.__returnType = new internal.PrimitiveProperty(AppServiceAction, this, "returnType", "Unknown", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__actionReturnType = new internal.PartProperty(AppServiceAction, this, "actionReturnType", null, true);
            /** @internal */
            this.__returnTypeCanBeEmpty = new internal.PrimitiveProperty(AppServiceAction, this, "returnTypeCanBeEmpty", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__image = new internal.PrimitiveProperty(AppServiceAction, this, "image", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new AppServiceAction() cannot be invoked directly, please use 'model.appservices.createAppServiceAction()'");
            }
            this._declaredAsNamespace = true;
        }
        get containerAsConsumedAppService() {
            return super.getContainerAs(ConsumedAppService);
        }
        get name() {
            return this.__name.get();
        }
        set name(newValue) {
            this.__name.set(newValue);
        }
        get caption() {
            return this.__caption.get();
        }
        set caption(newValue) {
            this.__caption.set(newValue);
        }
        get description() {
            return this.__description.get();
        }
        set description(newValue) {
            this.__description.set(newValue);
        }
        get parameters() {
            return this.__parameters.get();
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
        /**
         * The value of this property is conceptually of type dataTypes.LegacyDataType.
         *
         * In version 7.9.0: deleted
         */
        get returnType() {
            return this.__returnType.get();
        }
        set returnType(newValue) {
            this.__returnType.set(newValue);
        }
        /**
         * In version 7.9.0: introduced
         */
        get actionReturnType() {
            return this.__actionReturnType.get();
        }
        set actionReturnType(newValue) {
            this.__actionReturnType.set(newValue);
        }
        get returnTypeCanBeEmpty() {
            return this.__returnTypeCanBeEmpty.get();
        }
        set returnTypeCanBeEmpty(newValue) {
            this.__returnTypeCanBeEmpty.set(newValue);
        }
        get image() {
            return this.__image.get();
        }
        set image(newValue) {
            this.__image.set(newValue);
        }
        /**
         * Creates and returns a new AppServiceAction instance in the SDK and on the server.
         * The new AppServiceAction will be automatically stored in the 'actions' property
         * of the parent ConsumedAppService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 9.0.1
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, AppServiceAction.structureTypeName, { end: "9.0.1" });
            return internal.instancehelpers.createElement(container, AppServiceAction, "actions", true);
        }
        /**
         * Creates and returns a new AppServiceAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, AppServiceAction);
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
            if (this.__actionReturnType.isAvailable) {
                this.actionReturnType = datatypes_1.datatypes.UnknownType.create(this.model);
            }
            if (this.__returnType.isAvailable) {
                this.returnType = "Unknown";
            }
        }
    }
    AppServiceAction.structureTypeName = "AppServices$AppServiceAction";
    AppServiceAction.versionInfo = new exports.StructureVersionInfo({
        deleted: "9.0.2",
        deletionMessage: null,
        properties: {
            name: {
                public: {
                    currentValue: true
                }
            },
            parameters: {
                public: {
                    currentValue: true
                }
            },
            returnType: {
                deleted: "7.9.0",
                deletionMessage: "Use property 'actionReturnType' instead"
            },
            actionReturnType: {
                introduced: "7.9.0",
                required: {
                    currentValue: true
                }
            }
        },
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    appservices.AppServiceAction = AppServiceAction;
    /**
     * In version 9.0.2: deleted
     */
    class AppServiceActionParameter extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__name = new internal.PrimitiveProperty(AppServiceActionParameter, this, "name", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__type = new internal.PrimitiveProperty(AppServiceActionParameter, this, "type", "Unknown", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__parameterType = new internal.PartProperty(AppServiceActionParameter, this, "parameterType", null, true);
            /** @internal */
            this.__canBeEmpty = new internal.PrimitiveProperty(AppServiceActionParameter, this, "canBeEmpty", false, internal.PrimitiveTypeEnum.Boolean);
            if (arguments.length < 4) {
                throw new Error("new AppServiceActionParameter() cannot be invoked directly, please use 'model.appservices.createAppServiceActionParameter()'");
            }
        }
        get containerAsAppServiceAction() {
            return super.getContainerAs(AppServiceAction);
        }
        get name() {
            return this.__name.get();
        }
        set name(newValue) {
            this.__name.set(newValue);
        }
        /**
         * The value of this property is conceptually of type dataTypes.LegacyDataType.
         *
         * In version 7.9.0: deleted
         */
        get type() {
            return this.__type.get();
        }
        set type(newValue) {
            this.__type.set(newValue);
        }
        /**
         * In version 7.9.0: introduced
         */
        get parameterType() {
            return this.__parameterType.get();
        }
        set parameterType(newValue) {
            this.__parameterType.set(newValue);
        }
        get canBeEmpty() {
            return this.__canBeEmpty.get();
        }
        set canBeEmpty(newValue) {
            this.__canBeEmpty.set(newValue);
        }
        /**
         * Creates and returns a new AppServiceActionParameter instance in the SDK and on the server.
         * The new AppServiceActionParameter will be automatically stored in the 'parameters' property
         * of the parent AppServiceAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 9.0.1
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, AppServiceActionParameter.structureTypeName, { end: "9.0.1" });
            return internal.instancehelpers.createElement(container, AppServiceActionParameter, "parameters", true);
        }
        /**
         * Creates and returns a new AppServiceActionParameter instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, AppServiceActionParameter);
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
            if (this.__parameterType.isAvailable) {
                this.parameterType = datatypes_1.datatypes.UnknownType.create(this.model);
            }
            if (this.__type.isAvailable) {
                this.type = "Unknown";
            }
        }
    }
    AppServiceActionParameter.structureTypeName = "AppServices$AppServiceActionParameter";
    AppServiceActionParameter.versionInfo = new exports.StructureVersionInfo({
        deleted: "9.0.2",
        deletionMessage: null,
        properties: {
            name: {
                public: {
                    currentValue: true
                }
            },
            type: {
                deleted: "7.9.0",
                deletionMessage: "Use property 'parameterType' instead"
            },
            parameterType: {
                introduced: "7.9.0",
                required: {
                    currentValue: true
                }
            }
        },
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    appservices.AppServiceActionParameter = AppServiceActionParameter;
    /**
     * See: {@link https://docs.mendix.com/refguide8/consumed-app-services relevant section in reference guide}
     *
     * In version 9.0.2: deleted
     */
    class ConsumedAppService extends projects_1.projects.Document {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            /** @internal */
            this.__actions = new internal.PartListProperty(ConsumedAppService, this, "actions", []);
            /** @internal */
            this.__msd = new internal.PartProperty(ConsumedAppService, this, "msd", null, true);
            /** @internal */
            this.__fromAppStore = new internal.PrimitiveProperty(ConsumedAppService, this, "fromAppStore", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__appStoreGuid = new internal.PrimitiveProperty(ConsumedAppService, this, "appStoreGuid", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__appStoreVersionGuid = new internal.PrimitiveProperty(ConsumedAppService, this, "appStoreVersionGuid", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__appStoreVersion = new internal.PrimitiveProperty(ConsumedAppService, this, "appStoreVersion", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__appServiceLocation = new internal.EnumProperty(ConsumedAppService, this, "appServiceLocation", AppServiceLocationEnum.Default, AppServiceLocationEnum);
            /** @internal */
            this.__locationConstant = new internal.ByNameReferenceProperty(ConsumedAppService, this, "locationConstant", null, "Constants$Constant");
            /** @internal */
            this.__useTimeOut = new internal.PrimitiveProperty(ConsumedAppService, this, "useTimeOut", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__timeOut = new internal.PrimitiveProperty(ConsumedAppService, this, "timeOut", 30, internal.PrimitiveTypeEnum.Integer);
            this._containmentName = "documents";
        }
        get containerAsFolderBase() {
            return super.getContainerAs(projects_1.projects.FolderBase);
        }
        get actions() {
            return this.__actions.get();
        }
        get msd() {
            return this.__msd.get();
        }
        set msd(newValue) {
            this.__msd.set(newValue);
        }
        get fromAppStore() {
            return this.__fromAppStore.get();
        }
        set fromAppStore(newValue) {
            this.__fromAppStore.set(newValue);
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
        get appServiceLocation() {
            return this.__appServiceLocation.get();
        }
        set appServiceLocation(newValue) {
            this.__appServiceLocation.set(newValue);
        }
        get locationConstant() {
            return this.__locationConstant.get();
        }
        set locationConstant(newValue) {
            this.__locationConstant.set(newValue);
        }
        get locationConstantQualifiedName() {
            return this.__locationConstant.qualifiedName();
        }
        get useTimeOut() {
            return this.__useTimeOut.get();
        }
        set useTimeOut(newValue) {
            this.__useTimeOut.set(newValue);
        }
        get timeOut() {
            return this.__timeOut.get();
        }
        set timeOut(newValue) {
            this.__timeOut.set(newValue);
        }
        /**
         * Creates a new ConsumedAppService unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container) {
            return internal.instancehelpers.createUnit(container, ConsumedAppService);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.appServiceLocation = AppServiceLocationEnum.Default;
            this.msd = Msd.create(this.model);
            this.timeOut = 30;
        }
    }
    ConsumedAppService.structureTypeName = "AppServices$ConsumedAppService";
    ConsumedAppService.versionInfo = new exports.StructureVersionInfo({
        deleted: "9.0.2",
        deletionMessage: null,
        properties: {
            actions: {
                public: {
                    currentValue: true
                }
            },
            msd: {
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.ModelUnit);
    appservices.ConsumedAppService = ConsumedAppService;
    /**
     * In version 9.0.2: deleted
     */
    class Msd extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__version = new internal.PartProperty(Msd, this, "version", null, true);
            /** @internal */
            this.__metadata = new internal.PartProperty(Msd, this, "metadata", null, true);
            /** @internal */
            this.__domainModel = new internal.PartProperty(Msd, this, "domainModel", null, true);
            /** @internal */
            this.__enumerations = new internal.PartProperty(Msd, this, "enumerations", null, true);
            /** @internal */
            this.__wsdlDescription = new internal.PartProperty(Msd, this, "wsdlDescription", null, true);
            /** @internal */
            this.__wsdl = new internal.PrimitiveProperty(Msd, this, "wsdl", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new Msd() cannot be invoked directly, please use 'model.appservices.createMsd()'");
            }
        }
        get containerAsConsumedAppService() {
            return super.getContainerAs(ConsumedAppService);
        }
        get version() {
            return this.__version.get();
        }
        set version(newValue) {
            this.__version.set(newValue);
        }
        get metadata() {
            return this.__metadata.get();
        }
        set metadata(newValue) {
            this.__metadata.set(newValue);
        }
        get domainModel() {
            return this.__domainModel.get();
        }
        set domainModel(newValue) {
            this.__domainModel.set(newValue);
        }
        get enumerations() {
            return this.__enumerations.get();
        }
        set enumerations(newValue) {
            this.__enumerations.set(newValue);
        }
        get wsdlDescription() {
            return this.__wsdlDescription.get();
        }
        set wsdlDescription(newValue) {
            this.__wsdlDescription.set(newValue);
        }
        get wsdl() {
            return this.__wsdl.get();
        }
        set wsdl(newValue) {
            this.__wsdl.set(newValue);
        }
        /**
         * Creates and returns a new Msd instance in the SDK and on the server.
         * The new Msd will be automatically stored in the 'msd' property
         * of the parent ConsumedAppService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 9.0.1
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, Msd.structureTypeName, { end: "9.0.1" });
            return internal.instancehelpers.createElement(container, Msd, "msd", false);
        }
        /**
         * Creates and returns a new Msd instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, Msd);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.domainModel = MsdDomainModel.create(this.model);
            this.enumerations = MsdEnumerationContainer.create(this.model);
            this.metadata = MsdMetadata.create(this.model);
            this.version = MsdVersion.create(this.model);
            this.wsdlDescription = webservices_1.webservices.WsdlDescription.create(this.model);
        }
    }
    Msd.structureTypeName = "AppServices$Msd";
    Msd.versionInfo = new exports.StructureVersionInfo({
        deleted: "9.0.2",
        deletionMessage: null,
        properties: {
            version: {
                required: {
                    currentValue: true
                }
            },
            metadata: {
                required: {
                    currentValue: true
                }
            },
            domainModel: {
                required: {
                    currentValue: true
                }
            },
            enumerations: {
                required: {
                    currentValue: true
                }
            },
            wsdlDescription: {
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    appservices.Msd = Msd;
    /**
     * In version 9.0.2: deleted
     */
    class MsdAssociation extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__name = new internal.PrimitiveProperty(MsdAssociation, this, "name", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__guid = new internal.PrimitiveProperty(MsdAssociation, this, "guid", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__parentEntityName = new internal.PrimitiveProperty(MsdAssociation, this, "parentEntityName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__childEntityName = new internal.PrimitiveProperty(MsdAssociation, this, "childEntityName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__associationType = new internal.PrimitiveProperty(MsdAssociation, this, "associationType", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__associationOwner = new internal.PrimitiveProperty(MsdAssociation, this, "associationOwner", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__parentDeleteBehavior = new internal.PrimitiveProperty(MsdAssociation, this, "parentDeleteBehavior", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__childDeleteBehavior = new internal.PrimitiveProperty(MsdAssociation, this, "childDeleteBehavior", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__associationKind = new internal.PrimitiveProperty(MsdAssociation, this, "associationKind", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__parentX = new internal.PrimitiveProperty(MsdAssociation, this, "parentX", 0, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__parentY = new internal.PrimitiveProperty(MsdAssociation, this, "parentY", 0, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__childX = new internal.PrimitiveProperty(MsdAssociation, this, "childX", 0, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__childY = new internal.PrimitiveProperty(MsdAssociation, this, "childY", 0, internal.PrimitiveTypeEnum.Integer);
            if (arguments.length < 4) {
                throw new Error("new MsdAssociation() cannot be invoked directly, please use 'model.appservices.createMsdAssociation()'");
            }
        }
        get containerAsMsdDomainModel() {
            return super.getContainerAs(MsdDomainModel);
        }
        get containerAsDataAssociation() {
            return super.getContainerAs(webservices_1.webservices.DataAssociation);
        }
        get name() {
            return this.__name.get();
        }
        set name(newValue) {
            this.__name.set(newValue);
        }
        get guid() {
            return this.__guid.get();
        }
        set guid(newValue) {
            this.__guid.set(newValue);
        }
        get parentEntityName() {
            return this.__parentEntityName.get();
        }
        set parentEntityName(newValue) {
            this.__parentEntityName.set(newValue);
        }
        get childEntityName() {
            return this.__childEntityName.get();
        }
        set childEntityName(newValue) {
            this.__childEntityName.set(newValue);
        }
        get associationType() {
            return this.__associationType.get();
        }
        set associationType(newValue) {
            this.__associationType.set(newValue);
        }
        get associationOwner() {
            return this.__associationOwner.get();
        }
        set associationOwner(newValue) {
            this.__associationOwner.set(newValue);
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
        get associationKind() {
            return this.__associationKind.get();
        }
        set associationKind(newValue) {
            this.__associationKind.set(newValue);
        }
        get parentX() {
            return this.__parentX.get();
        }
        set parentX(newValue) {
            this.__parentX.set(newValue);
        }
        get parentY() {
            return this.__parentY.get();
        }
        set parentY(newValue) {
            this.__parentY.set(newValue);
        }
        get childX() {
            return this.__childX.get();
        }
        set childX(newValue) {
            this.__childX.set(newValue);
        }
        get childY() {
            return this.__childY.get();
        }
        set childY(newValue) {
            this.__childY.set(newValue);
        }
        /**
         * Creates and returns a new MsdAssociation instance in the SDK and on the server.
         * The new MsdAssociation will be automatically stored in the 'associations' property
         * of the parent MsdDomainModel element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 9.0.1
         */
        static createInMsdDomainModelUnderAssociations(container) {
            internal.createInVersionCheck(container.model, MsdAssociation.structureTypeName, { end: "9.0.1" });
            return internal.instancehelpers.createElement(container, MsdAssociation, "associations", true);
        }
        /**
         * Creates and returns a new MsdAssociation instance in the SDK and on the server.
         * The new MsdAssociation will be automatically stored in the 'associationByContract' property
         * of the parent webservices.DataAssociation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 9.0.1
         */
        static createInDataAssociationUnderAssociationByContract(container) {
            internal.createInVersionCheck(container.model, MsdAssociation.structureTypeName, { end: "9.0.1" });
            return internal.instancehelpers.createElement(container, MsdAssociation, "associationByContract", false);
        }
        /**
         * Creates and returns a new MsdAssociation instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, MsdAssociation);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    MsdAssociation.structureTypeName = "AppServices$MsdAssociation";
    MsdAssociation.versionInfo = new exports.StructureVersionInfo({
        deleted: "9.0.2",
        deletionMessage: null
    }, internal.StructureType.Element);
    appservices.MsdAssociation = MsdAssociation;
    /**
     * In version 9.0.2: deleted
     */
    class MsdAttribute extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__name = new internal.PrimitiveProperty(MsdAttribute, this, "name", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__guid = new internal.PrimitiveProperty(MsdAttribute, this, "guid", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__attributeType = new internal.PrimitiveProperty(MsdAttribute, this, "attributeType", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__enumerationName = new internal.PrimitiveProperty(MsdAttribute, this, "enumerationName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__defaultValue = new internal.PrimitiveProperty(MsdAttribute, this, "defaultValue", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__length = new internal.PrimitiveProperty(MsdAttribute, this, "length", 0, internal.PrimitiveTypeEnum.Integer);
            if (arguments.length < 4) {
                throw new Error("new MsdAttribute() cannot be invoked directly, please use 'model.appservices.createMsdAttribute()'");
            }
        }
        get containerAsMsdEntity() {
            return super.getContainerAs(MsdEntity);
        }
        get containerAsDataAttribute() {
            return super.getContainerAs(webservices_1.webservices.DataAttribute);
        }
        get name() {
            return this.__name.get();
        }
        set name(newValue) {
            this.__name.set(newValue);
        }
        get guid() {
            return this.__guid.get();
        }
        set guid(newValue) {
            this.__guid.set(newValue);
        }
        get attributeType() {
            return this.__attributeType.get();
        }
        set attributeType(newValue) {
            this.__attributeType.set(newValue);
        }
        get enumerationName() {
            return this.__enumerationName.get();
        }
        set enumerationName(newValue) {
            this.__enumerationName.set(newValue);
        }
        get defaultValue() {
            return this.__defaultValue.get();
        }
        set defaultValue(newValue) {
            this.__defaultValue.set(newValue);
        }
        get length() {
            return this.__length.get();
        }
        set length(newValue) {
            this.__length.set(newValue);
        }
        /**
         * Creates and returns a new MsdAttribute instance in the SDK and on the server.
         * The new MsdAttribute will be automatically stored in the 'attributes' property
         * of the parent MsdEntity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 9.0.1
         */
        static createInMsdEntityUnderAttributes(container) {
            internal.createInVersionCheck(container.model, MsdAttribute.structureTypeName, { end: "9.0.1" });
            return internal.instancehelpers.createElement(container, MsdAttribute, "attributes", true);
        }
        /**
         * Creates and returns a new MsdAttribute instance in the SDK and on the server.
         * The new MsdAttribute will be automatically stored in the 'attributeByContract' property
         * of the parent webservices.DataAttribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 9.0.1
         */
        static createInDataAttributeUnderAttributeByContract(container) {
            internal.createInVersionCheck(container.model, MsdAttribute.structureTypeName, { end: "9.0.1" });
            return internal.instancehelpers.createElement(container, MsdAttribute, "attributeByContract", false);
        }
        /**
         * Creates and returns a new MsdAttribute instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, MsdAttribute);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    MsdAttribute.structureTypeName = "AppServices$MsdAttribute";
    MsdAttribute.versionInfo = new exports.StructureVersionInfo({
        deleted: "9.0.2",
        deletionMessage: null
    }, internal.StructureType.Element);
    appservices.MsdAttribute = MsdAttribute;
    /**
     * In version 9.0.2: deleted
     */
    class MsdDomainModel extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__entities = new internal.PartListProperty(MsdDomainModel, this, "entities", []);
            /** @internal */
            this.__associations = new internal.PartListProperty(MsdDomainModel, this, "associations", []);
            if (arguments.length < 4) {
                throw new Error("new MsdDomainModel() cannot be invoked directly, please use 'model.appservices.createMsdDomainModel()'");
            }
        }
        get containerAsMsd() {
            return super.getContainerAs(Msd);
        }
        get entities() {
            return this.__entities.get();
        }
        get associations() {
            return this.__associations.get();
        }
        /**
         * Creates and returns a new MsdDomainModel instance in the SDK and on the server.
         * The new MsdDomainModel will be automatically stored in the 'domainModel' property
         * of the parent Msd element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 9.0.1
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, MsdDomainModel.structureTypeName, { end: "9.0.1" });
            return internal.instancehelpers.createElement(container, MsdDomainModel, "domainModel", false);
        }
        /**
         * Creates and returns a new MsdDomainModel instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, MsdDomainModel);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    MsdDomainModel.structureTypeName = "AppServices$MsdDomainModel";
    MsdDomainModel.versionInfo = new exports.StructureVersionInfo({
        deleted: "9.0.2",
        deletionMessage: null
    }, internal.StructureType.Element);
    appservices.MsdDomainModel = MsdDomainModel;
    /**
     * In version 9.0.2: deleted
     */
    class MsdEntity extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__name = new internal.PrimitiveProperty(MsdEntity, this, "name", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__guid = new internal.PrimitiveProperty(MsdEntity, this, "guid", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__generalizationName = new internal.PrimitiveProperty(MsdEntity, this, "generalizationName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__persistable = new internal.PrimitiveProperty(MsdEntity, this, "persistable", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__locationX = new internal.PrimitiveProperty(MsdEntity, this, "locationX", 0, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__locationY = new internal.PrimitiveProperty(MsdEntity, this, "locationY", 0, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__attributes = new internal.PartListProperty(MsdEntity, this, "attributes", []);
            if (arguments.length < 4) {
                throw new Error("new MsdEntity() cannot be invoked directly, please use 'model.appservices.createMsdEntity()'");
            }
        }
        get containerAsMsdDomainModel() {
            return super.getContainerAs(MsdDomainModel);
        }
        get name() {
            return this.__name.get();
        }
        set name(newValue) {
            this.__name.set(newValue);
        }
        get guid() {
            return this.__guid.get();
        }
        set guid(newValue) {
            this.__guid.set(newValue);
        }
        get generalizationName() {
            return this.__generalizationName.get();
        }
        set generalizationName(newValue) {
            this.__generalizationName.set(newValue);
        }
        get persistable() {
            return this.__persistable.get();
        }
        set persistable(newValue) {
            this.__persistable.set(newValue);
        }
        get locationX() {
            return this.__locationX.get();
        }
        set locationX(newValue) {
            this.__locationX.set(newValue);
        }
        get locationY() {
            return this.__locationY.get();
        }
        set locationY(newValue) {
            this.__locationY.set(newValue);
        }
        get attributes() {
            return this.__attributes.get();
        }
        /**
         * Creates and returns a new MsdEntity instance in the SDK and on the server.
         * The new MsdEntity will be automatically stored in the 'entities' property
         * of the parent MsdDomainModel element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 9.0.1
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, MsdEntity.structureTypeName, { end: "9.0.1" });
            return internal.instancehelpers.createElement(container, MsdEntity, "entities", true);
        }
        /**
         * Creates and returns a new MsdEntity instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, MsdEntity);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    MsdEntity.structureTypeName = "AppServices$MsdEntity";
    MsdEntity.versionInfo = new exports.StructureVersionInfo({
        deleted: "9.0.2",
        deletionMessage: null
    }, internal.StructureType.Element);
    appservices.MsdEntity = MsdEntity;
    /**
     * In version 9.0.2: deleted
     */
    class MsdEnumeration extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__name = new internal.PrimitiveProperty(MsdEnumeration, this, "name", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__guid = new internal.PrimitiveProperty(MsdEnumeration, this, "guid", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__values = new internal.PartListProperty(MsdEnumeration, this, "values", []);
            if (arguments.length < 4) {
                throw new Error("new MsdEnumeration() cannot be invoked directly, please use 'model.appservices.createMsdEnumeration()'");
            }
        }
        get containerAsMsdEnumerationContainer() {
            return super.getContainerAs(MsdEnumerationContainer);
        }
        get name() {
            return this.__name.get();
        }
        set name(newValue) {
            this.__name.set(newValue);
        }
        get guid() {
            return this.__guid.get();
        }
        set guid(newValue) {
            this.__guid.set(newValue);
        }
        get values() {
            return this.__values.get();
        }
        /**
         * Creates and returns a new MsdEnumeration instance in the SDK and on the server.
         * The new MsdEnumeration will be automatically stored in the 'enumerations' property
         * of the parent MsdEnumerationContainer element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 9.0.1
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, MsdEnumeration.structureTypeName, { end: "9.0.1" });
            return internal.instancehelpers.createElement(container, MsdEnumeration, "enumerations", true);
        }
        /**
         * Creates and returns a new MsdEnumeration instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, MsdEnumeration);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    MsdEnumeration.structureTypeName = "AppServices$MsdEnumeration";
    MsdEnumeration.versionInfo = new exports.StructureVersionInfo({
        deleted: "9.0.2",
        deletionMessage: null
    }, internal.StructureType.Element);
    appservices.MsdEnumeration = MsdEnumeration;
    /**
     * In version 9.0.2: deleted
     */
    class MsdEnumerationContainer extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__enumerations = new internal.PartListProperty(MsdEnumerationContainer, this, "enumerations", []);
            if (arguments.length < 4) {
                throw new Error("new MsdEnumerationContainer() cannot be invoked directly, please use 'model.appservices.createMsdEnumerationContainer()'");
            }
        }
        get containerAsMsd() {
            return super.getContainerAs(Msd);
        }
        get containerAsVersionedService() {
            return super.getContainerAs(webservices_1.webservices.VersionedService);
        }
        get enumerations() {
            return this.__enumerations.get();
        }
        /**
         * Creates and returns a new MsdEnumerationContainer instance in the SDK and on the server.
         * The new MsdEnumerationContainer will be automatically stored in the 'enumerations' property
         * of the parent Msd element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 9.0.1
         */
        static createInMsdUnderEnumerations(container) {
            internal.createInVersionCheck(container.model, MsdEnumerationContainer.structureTypeName, { end: "9.0.1" });
            return internal.instancehelpers.createElement(container, MsdEnumerationContainer, "enumerations", false);
        }
        /**
         * Creates and returns a new MsdEnumerationContainer instance in the SDK and on the server.
         * The new MsdEnumerationContainer will be automatically stored in the 'enumerationsByContract' property
         * of the parent webservices.VersionedService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 9.0.1
         */
        static createInVersionedServiceUnderEnumerationsByContract(container) {
            internal.createInVersionCheck(container.model, MsdEnumerationContainer.structureTypeName, { end: "9.0.1" });
            return internal.instancehelpers.createElement(container, MsdEnumerationContainer, "enumerationsByContract", false);
        }
        /**
         * Creates and returns a new MsdEnumerationContainer instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, MsdEnumerationContainer);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    MsdEnumerationContainer.structureTypeName = "AppServices$MsdEnumerationContainer";
    MsdEnumerationContainer.versionInfo = new exports.StructureVersionInfo({
        deleted: "9.0.2",
        deletionMessage: null
    }, internal.StructureType.Element);
    appservices.MsdEnumerationContainer = MsdEnumerationContainer;
    /**
     * In version 9.0.2: deleted
     */
    class MsdEnumerationValue extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__name = new internal.PrimitiveProperty(MsdEnumerationValue, this, "name", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__guid = new internal.PrimitiveProperty(MsdEnumerationValue, this, "guid", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__translations = new internal.PartListProperty(MsdEnumerationValue, this, "translations", []);
            /** @internal */
            this.__image = new internal.PrimitiveProperty(MsdEnumerationValue, this, "image", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new MsdEnumerationValue() cannot be invoked directly, please use 'model.appservices.createMsdEnumerationValue()'");
            }
        }
        get containerAsMsdEnumeration() {
            return super.getContainerAs(MsdEnumeration);
        }
        get name() {
            return this.__name.get();
        }
        set name(newValue) {
            this.__name.set(newValue);
        }
        get guid() {
            return this.__guid.get();
        }
        set guid(newValue) {
            this.__guid.set(newValue);
        }
        get translations() {
            return this.__translations.get();
        }
        get image() {
            return this.__image.get();
        }
        set image(newValue) {
            this.__image.set(newValue);
        }
        /**
         * Creates and returns a new MsdEnumerationValue instance in the SDK and on the server.
         * The new MsdEnumerationValue will be automatically stored in the 'values' property
         * of the parent MsdEnumeration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 9.0.1
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, MsdEnumerationValue.structureTypeName, { end: "9.0.1" });
            return internal.instancehelpers.createElement(container, MsdEnumerationValue, "values", true);
        }
        /**
         * Creates and returns a new MsdEnumerationValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, MsdEnumerationValue);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    MsdEnumerationValue.structureTypeName = "AppServices$MsdEnumerationValue";
    MsdEnumerationValue.versionInfo = new exports.StructureVersionInfo({
        deleted: "9.0.2",
        deletionMessage: null
    }, internal.StructureType.Element);
    appservices.MsdEnumerationValue = MsdEnumerationValue;
    /**
     * In version 9.0.2: deleted
     */
    class MsdMetadata extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__name = new internal.PrimitiveProperty(MsdMetadata, this, "name", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__documentation = new internal.PrimitiveProperty(MsdMetadata, this, "documentation", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__version = new internal.PrimitiveProperty(MsdMetadata, this, "version", 0, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__publishDateTime = new internal.PrimitiveProperty(MsdMetadata, this, "publishDateTime", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__serviceGuid = new internal.PrimitiveProperty(MsdMetadata, this, "serviceGuid", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__versionGuid = new internal.PrimitiveProperty(MsdMetadata, this, "versionGuid", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__instanceGuid = new internal.PrimitiveProperty(MsdMetadata, this, "instanceGuid", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__supportedProtocols = new internal.PrimitiveListProperty(MsdMetadata, this, "supportedProtocols", [], internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__headerAuthentication = new internal.PrimitiveProperty(MsdMetadata, this, "headerAuthentication", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__microflows = new internal.PartListProperty(MsdMetadata, this, "microflows", []);
            /** @internal */
            this.__caption = new internal.PrimitiveProperty(MsdMetadata, this, "caption", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__image = new internal.PrimitiveProperty(MsdMetadata, this, "image", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__description = new internal.PrimitiveProperty(MsdMetadata, this, "description", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new MsdMetadata() cannot be invoked directly, please use 'model.appservices.createMsdMetadata()'");
            }
        }
        get containerAsMsd() {
            return super.getContainerAs(Msd);
        }
        get name() {
            return this.__name.get();
        }
        set name(newValue) {
            this.__name.set(newValue);
        }
        get documentation() {
            return this.__documentation.get();
        }
        set documentation(newValue) {
            this.__documentation.set(newValue);
        }
        get version() {
            return this.__version.get();
        }
        set version(newValue) {
            this.__version.set(newValue);
        }
        get publishDateTime() {
            return this.__publishDateTime.get();
        }
        set publishDateTime(newValue) {
            this.__publishDateTime.set(newValue);
        }
        get serviceGuid() {
            return this.__serviceGuid.get();
        }
        set serviceGuid(newValue) {
            this.__serviceGuid.set(newValue);
        }
        get versionGuid() {
            return this.__versionGuid.get();
        }
        set versionGuid(newValue) {
            this.__versionGuid.set(newValue);
        }
        get instanceGuid() {
            return this.__instanceGuid.get();
        }
        set instanceGuid(newValue) {
            this.__instanceGuid.set(newValue);
        }
        get supportedProtocols() {
            return this.__supportedProtocols.get();
        }
        get headerAuthentication() {
            return this.__headerAuthentication.get();
        }
        set headerAuthentication(newValue) {
            this.__headerAuthentication.set(newValue);
        }
        get microflows() {
            return this.__microflows.get();
        }
        get caption() {
            return this.__caption.get();
        }
        set caption(newValue) {
            this.__caption.set(newValue);
        }
        get image() {
            return this.__image.get();
        }
        set image(newValue) {
            this.__image.set(newValue);
        }
        get description() {
            return this.__description.get();
        }
        set description(newValue) {
            this.__description.set(newValue);
        }
        /**
         * Creates and returns a new MsdMetadata instance in the SDK and on the server.
         * The new MsdMetadata will be automatically stored in the 'metadata' property
         * of the parent Msd element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 9.0.1
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, MsdMetadata.structureTypeName, { end: "9.0.1" });
            return internal.instancehelpers.createElement(container, MsdMetadata, "metadata", false);
        }
        /**
         * Creates and returns a new MsdMetadata instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, MsdMetadata);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    MsdMetadata.structureTypeName = "AppServices$MsdMetadata";
    MsdMetadata.versionInfo = new exports.StructureVersionInfo({
        deleted: "9.0.2",
        deletionMessage: null
    }, internal.StructureType.Element);
    appservices.MsdMetadata = MsdMetadata;
    /**
     * In version 9.0.2: deleted
     */
    class MsdMicroflow extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__name = new internal.PrimitiveProperty(MsdMicroflow, this, "name", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__documentation = new internal.PrimitiveProperty(MsdMicroflow, this, "documentation", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__image = new internal.PrimitiveProperty(MsdMicroflow, this, "image", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__description = new internal.PrimitiveProperty(MsdMicroflow, this, "description", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__parameters = new internal.PartListProperty(MsdMicroflow, this, "parameters", []);
            /** @internal */
            this.__returnType = new internal.PrimitiveProperty(MsdMicroflow, this, "returnType", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__systemEntityType = new internal.PrimitiveProperty(MsdMicroflow, this, "systemEntityType", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__returnTypeSpecification = new internal.PrimitiveProperty(MsdMicroflow, this, "returnTypeSpecification", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__returnTypeCanBeEmpty = new internal.PrimitiveProperty(MsdMicroflow, this, "returnTypeCanBeEmpty", false, internal.PrimitiveTypeEnum.Boolean);
            if (arguments.length < 4) {
                throw new Error("new MsdMicroflow() cannot be invoked directly, please use 'model.appservices.createMsdMicroflow()'");
            }
        }
        get containerAsMsdMetadata() {
            return super.getContainerAs(MsdMetadata);
        }
        get name() {
            return this.__name.get();
        }
        set name(newValue) {
            this.__name.set(newValue);
        }
        get documentation() {
            return this.__documentation.get();
        }
        set documentation(newValue) {
            this.__documentation.set(newValue);
        }
        get image() {
            return this.__image.get();
        }
        set image(newValue) {
            this.__image.set(newValue);
        }
        get description() {
            return this.__description.get();
        }
        set description(newValue) {
            this.__description.set(newValue);
        }
        get parameters() {
            return this.__parameters.get();
        }
        get returnType() {
            return this.__returnType.get();
        }
        set returnType(newValue) {
            this.__returnType.set(newValue);
        }
        /**
         * In version 6.1.0: deleted
         */
        get systemEntityType() {
            return this.__systemEntityType.get();
        }
        set systemEntityType(newValue) {
            this.__systemEntityType.set(newValue);
        }
        get returnTypeSpecification() {
            return this.__returnTypeSpecification.get();
        }
        set returnTypeSpecification(newValue) {
            this.__returnTypeSpecification.set(newValue);
        }
        get returnTypeCanBeEmpty() {
            return this.__returnTypeCanBeEmpty.get();
        }
        set returnTypeCanBeEmpty(newValue) {
            this.__returnTypeCanBeEmpty.set(newValue);
        }
        /**
         * Creates and returns a new MsdMicroflow instance in the SDK and on the server.
         * The new MsdMicroflow will be automatically stored in the 'microflows' property
         * of the parent MsdMetadata element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 9.0.1
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, MsdMicroflow.structureTypeName, { end: "9.0.1" });
            return internal.instancehelpers.createElement(container, MsdMicroflow, "microflows", true);
        }
        /**
         * Creates and returns a new MsdMicroflow instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, MsdMicroflow);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    MsdMicroflow.structureTypeName = "AppServices$MsdMicroflow";
    MsdMicroflow.versionInfo = new exports.StructureVersionInfo({
        deleted: "9.0.2",
        deletionMessage: null,
        properties: {
            systemEntityType: {
                deleted: "6.1.0",
                deletionMessage: null
            }
        }
    }, internal.StructureType.Element);
    appservices.MsdMicroflow = MsdMicroflow;
    /**
     * In version 9.0.2: deleted
     */
    class MsdMicroflowParameter extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__name = new internal.PrimitiveProperty(MsdMicroflowParameter, this, "name", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__type = new internal.PrimitiveProperty(MsdMicroflowParameter, this, "type", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__typeSpecification = new internal.PrimitiveProperty(MsdMicroflowParameter, this, "typeSpecification", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__systemEntityType = new internal.PrimitiveProperty(MsdMicroflowParameter, this, "systemEntityType", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__canBeEmpty = new internal.PrimitiveProperty(MsdMicroflowParameter, this, "canBeEmpty", false, internal.PrimitiveTypeEnum.Boolean);
            if (arguments.length < 4) {
                throw new Error("new MsdMicroflowParameter() cannot be invoked directly, please use 'model.appservices.createMsdMicroflowParameter()'");
            }
        }
        get containerAsMsdMicroflow() {
            return super.getContainerAs(MsdMicroflow);
        }
        get containerAsPublishedParameter() {
            return super.getContainerAs(webservices_1.webservices.PublishedParameter);
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
        get typeSpecification() {
            return this.__typeSpecification.get();
        }
        set typeSpecification(newValue) {
            this.__typeSpecification.set(newValue);
        }
        /**
         * In version 6.1.0: deleted
         */
        get systemEntityType() {
            return this.__systemEntityType.get();
        }
        set systemEntityType(newValue) {
            this.__systemEntityType.set(newValue);
        }
        get canBeEmpty() {
            return this.__canBeEmpty.get();
        }
        set canBeEmpty(newValue) {
            this.__canBeEmpty.set(newValue);
        }
        /**
         * Creates and returns a new MsdMicroflowParameter instance in the SDK and on the server.
         * The new MsdMicroflowParameter will be automatically stored in the 'parameters' property
         * of the parent MsdMicroflow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 9.0.1
         */
        static createInMsdMicroflowUnderParameters(container) {
            internal.createInVersionCheck(container.model, MsdMicroflowParameter.structureTypeName, { end: "9.0.1" });
            return internal.instancehelpers.createElement(container, MsdMicroflowParameter, "parameters", true);
        }
        /**
         * Creates and returns a new MsdMicroflowParameter instance in the SDK and on the server.
         * The new MsdMicroflowParameter will be automatically stored in the 'parameterByContract' property
         * of the parent webservices.PublishedParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 9.0.1
         */
        static createInPublishedParameterUnderParameterByContract(container) {
            internal.createInVersionCheck(container.model, MsdMicroflowParameter.structureTypeName, { end: "9.0.1" });
            return internal.instancehelpers.createElement(container, MsdMicroflowParameter, "parameterByContract", false);
        }
        /**
         * Creates and returns a new MsdMicroflowParameter instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, MsdMicroflowParameter);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    MsdMicroflowParameter.structureTypeName = "AppServices$MsdMicroflowParameter";
    MsdMicroflowParameter.versionInfo = new exports.StructureVersionInfo({
        deleted: "9.0.2",
        deletionMessage: null,
        properties: {
            systemEntityType: {
                deleted: "6.1.0",
                deletionMessage: null
            }
        }
    }, internal.StructureType.Element);
    appservices.MsdMicroflowParameter = MsdMicroflowParameter;
    /**
     * In version 9.0.2: deleted
     */
    class MsdText extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__languageCode = new internal.PrimitiveProperty(MsdText, this, "languageCode", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__caption = new internal.PrimitiveProperty(MsdText, this, "caption", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new MsdText() cannot be invoked directly, please use 'model.appservices.createMsdText()'");
            }
        }
        get containerAsMsdEnumerationValue() {
            return super.getContainerAs(MsdEnumerationValue);
        }
        get languageCode() {
            return this.__languageCode.get();
        }
        set languageCode(newValue) {
            this.__languageCode.set(newValue);
        }
        get caption() {
            return this.__caption.get();
        }
        set caption(newValue) {
            this.__caption.set(newValue);
        }
        /**
         * Creates and returns a new MsdText instance in the SDK and on the server.
         * The new MsdText will be automatically stored in the 'translations' property
         * of the parent MsdEnumerationValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 9.0.1
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, MsdText.structureTypeName, { end: "9.0.1" });
            return internal.instancehelpers.createElement(container, MsdText, "translations", true);
        }
        /**
         * Creates and returns a new MsdText instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, MsdText);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    MsdText.structureTypeName = "AppServices$MsdText";
    MsdText.versionInfo = new exports.StructureVersionInfo({
        deleted: "9.0.2",
        deletionMessage: null
    }, internal.StructureType.Element);
    appservices.MsdText = MsdText;
    /**
     * In version 9.0.2: deleted
     */
    class MsdVersion extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__version = new internal.PrimitiveProperty(MsdVersion, this, "version", 0, internal.PrimitiveTypeEnum.Integer);
            if (arguments.length < 4) {
                throw new Error("new MsdVersion() cannot be invoked directly, please use 'model.appservices.createMsdVersion()'");
            }
        }
        get containerAsMsd() {
            return super.getContainerAs(Msd);
        }
        get version() {
            return this.__version.get();
        }
        set version(newValue) {
            this.__version.set(newValue);
        }
        /**
         * Creates and returns a new MsdVersion instance in the SDK and on the server.
         * The new MsdVersion will be automatically stored in the 'version' property
         * of the parent Msd element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 9.0.1
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, MsdVersion.structureTypeName, { end: "9.0.1" });
            return internal.instancehelpers.createElement(container, MsdVersion, "version", false);
        }
        /**
         * Creates and returns a new MsdVersion instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, MsdVersion);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    MsdVersion.structureTypeName = "AppServices$MsdVersion";
    MsdVersion.versionInfo = new exports.StructureVersionInfo({
        deleted: "9.0.2",
        deletionMessage: null
    }, internal.StructureType.Element);
    appservices.MsdVersion = MsdVersion;
})(appservices = exports.appservices || (exports.appservices = {}));
const datatypes_1 = require("./datatypes");
const webservices_1 = require("./webservices");
//# sourceMappingURL=appservices.js.map