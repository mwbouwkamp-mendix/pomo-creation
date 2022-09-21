"use strict";
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.webservices = exports.StructureVersionInfo = void 0;
const internal = require("../sdk/internal");
exports.StructureVersionInfo = internal.StructureVersionInfo;
const projects_1 = require("./projects");
var webservices;
(function (webservices) {
    class AppServiceState extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "webservices.AppServiceState";
        }
    }
    AppServiceState.Draft = new AppServiceState("Draft", {});
    AppServiceState.Consumable = new AppServiceState("Consumable", {});
    AppServiceState.Deprecated = new AppServiceState("Deprecated", {});
    webservices.AppServiceState = AppServiceState;
    class HeaderAuthentication extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "webservices.HeaderAuthentication";
        }
    }
    HeaderAuthentication.None = new HeaderAuthentication("None", {});
    HeaderAuthentication.UsernamePassword = new HeaderAuthentication("UsernamePassword", {});
    HeaderAuthentication.Custom = new HeaderAuthentication("Custom", {});
    webservices.HeaderAuthentication = HeaderAuthentication;
    class SoapVersion extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "webservices.SoapVersion";
        }
    }
    SoapVersion.Soap11 = new SoapVersion("Soap11", {});
    SoapVersion.Soap12 = new SoapVersion("Soap12", {});
    webservices.SoapVersion = SoapVersion;
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `WebServices`.
     */
    class DataMember extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__isLockedByContract = new internal.PrimitiveProperty(DataMember, this, "isLockedByContract", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__exposedName = new internal.PrimitiveProperty(DataMember, this, "exposedName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__isOptionalByContract = new internal.PrimitiveProperty(DataMember, this, "isOptionalByContract", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__isOptional = new internal.PrimitiveProperty(DataMember, this, "isOptional", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__isNillableByContract = new internal.PrimitiveProperty(DataMember, this, "isNillableByContract", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__isNillable = new internal.PrimitiveProperty(DataMember, this, "isNillable", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__isKey = new internal.PrimitiveProperty(DataMember, this, "isKey", false, internal.PrimitiveTypeEnum.Boolean);
            if (arguments.length < 4) {
                throw new Error("new DataMember() cannot be invoked directly, please use 'model.webservices.createDataMember()'");
            }
        }
        get containerAsDataEntityBase() {
            return super.getContainerAs(DataEntityBase);
        }
        get containerAsPublishedParameter() {
            return super.getContainerAs(PublishedParameter);
        }
        get containerAsPublishedResource() {
            return super.getContainerAs(PublishedResource);
        }
        /**
         * In version 9.0.2: deleted
         */
        get isLockedByContract() {
            return this.__isLockedByContract.get();
        }
        set isLockedByContract(newValue) {
            this.__isLockedByContract.set(newValue);
        }
        get exposedName() {
            return this.__exposedName.get();
        }
        set exposedName(newValue) {
            this.__exposedName.set(newValue);
        }
        /**
         * In version 9.0.2: deleted
         */
        get isOptionalByContract() {
            return this.__isOptionalByContract.get();
        }
        set isOptionalByContract(newValue) {
            this.__isOptionalByContract.set(newValue);
        }
        get isOptional() {
            return this.__isOptional.get();
        }
        set isOptional(newValue) {
            this.__isOptional.set(newValue);
        }
        /**
         * In version 9.0.2: deleted
         */
        get isNillableByContract() {
            return this.__isNillableByContract.get();
        }
        set isNillableByContract(newValue) {
            this.__isNillableByContract.set(newValue);
        }
        get isNillable() {
            return this.__isNillable.get();
        }
        set isNillable(newValue) {
            this.__isNillable.set(newValue);
        }
        get isKey() {
            return this.__isKey.get();
        }
        set isKey(newValue) {
            this.__isKey.set(newValue);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    DataMember.structureTypeName = "WebServices$DataMember";
    DataMember.versionInfo = new exports.StructureVersionInfo({
        properties: {
            isLockedByContract: {
                deleted: "9.0.2",
                deletionMessage: null
            },
            isOptionalByContract: {
                deleted: "9.0.2",
                deletionMessage: null
            },
            isNillableByContract: {
                deleted: "9.0.2",
                deletionMessage: null
            }
        }
    }, internal.StructureType.Element);
    webservices.DataMember = DataMember;
    class DataEntityBase extends DataMember {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__childMembers = new internal.PartListProperty(DataEntityBase, this, "childMembers", []);
            /** @internal */
            this.__entity = new internal.ByNameReferenceProperty(DataEntityBase, this, "entity", null, "DomainModels$Entity");
            /** @internal */
            this.__exposedItemName = new internal.PrimitiveProperty(DataEntityBase, this, "exposedItemName", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new DataEntityBase() cannot be invoked directly, please use 'model.webservices.createDataEntityBase()'");
            }
        }
        get containerAsDataEntityBase() {
            return super.getContainerAs(DataEntityBase);
        }
        get containerAsPublishedParameter() {
            return super.getContainerAs(PublishedParameter);
        }
        get containerAsPublishedResource() {
            return super.getContainerAs(PublishedResource);
        }
        get childMembers() {
            return this.__childMembers.get();
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
        get exposedItemName() {
            return this.__exposedItemName.get();
        }
        set exposedItemName(newValue) {
            this.__exposedItemName.set(newValue);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    DataEntityBase.structureTypeName = "WebServices$DataEntityBase";
    DataEntityBase.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    webservices.DataEntityBase = DataEntityBase;
    class DataAssociation extends DataEntityBase {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__associationByContract = new internal.PartProperty(DataAssociation, this, "associationByContract", null, false);
            /** @internal */
            this.__association = new internal.ByNameReferenceProperty(DataAssociation, this, "association", null, "DomainModels$AssociationBase");
            /** @internal */
            this.__exposedAssociationName = new internal.PrimitiveProperty(DataAssociation, this, "exposedAssociationName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__summary = new internal.PrimitiveProperty(DataAssociation, this, "summary", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__description = new internal.PrimitiveProperty(DataAssociation, this, "description", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new DataAssociation() cannot be invoked directly, please use 'model.webservices.createDataAssociation()'");
            }
        }
        get containerAsDataEntityBase() {
            return super.getContainerAs(DataEntityBase);
        }
        /**
         * In version 9.0.2: deleted
         */
        get associationByContract() {
            return this.__associationByContract.get();
        }
        set associationByContract(newValue) {
            this.__associationByContract.set(newValue);
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
         * In version 8.0.0: introduced
         */
        get exposedAssociationName() {
            return this.__exposedAssociationName.get();
        }
        set exposedAssociationName(newValue) {
            this.__exposedAssociationName.set(newValue);
        }
        /**
         * In version 8.5.0: introduced
         */
        get summary() {
            return this.__summary.get();
        }
        set summary(newValue) {
            this.__summary.set(newValue);
        }
        /**
         * In version 8.5.0: introduced
         */
        get description() {
            return this.__description.get();
        }
        set description(newValue) {
            this.__description.set(newValue);
        }
        /**
         * Creates and returns a new DataAssociation instance in the SDK and on the server.
         * The new DataAssociation will be automatically stored in the 'childMembers' property
         * of the parent DataEntityBase element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, DataAssociation, "childMembers", true);
        }
        /**
         * Creates and returns a new DataAssociation instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, DataAssociation);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    DataAssociation.structureTypeName = "WebServices$DataAssociation";
    DataAssociation.versionInfo = new exports.StructureVersionInfo({
        properties: {
            associationByContract: {
                deleted: "9.0.2",
                deletionMessage: null
            },
            exposedAssociationName: {
                introduced: "8.0.0"
            },
            summary: {
                introduced: "8.5.0"
            },
            description: {
                introduced: "8.5.0"
            }
        }
    }, internal.StructureType.Element);
    webservices.DataAssociation = DataAssociation;
    class DataAttribute extends DataMember {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__attributeByContract = new internal.PartProperty(DataAttribute, this, "attributeByContract", null, false);
            /** @internal */
            this.__attribute = new internal.ByNameReferenceProperty(DataAttribute, this, "attribute", null, "DomainModels$Attribute");
            /** @internal */
            this.__summary = new internal.PrimitiveProperty(DataAttribute, this, "summary", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__description = new internal.PrimitiveProperty(DataAttribute, this, "description", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__filterable = new internal.PrimitiveProperty(DataAttribute, this, "filterable", true, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__sortable = new internal.PrimitiveProperty(DataAttribute, this, "sortable", true, internal.PrimitiveTypeEnum.Boolean);
            if (arguments.length < 4) {
                throw new Error("new DataAttribute() cannot be invoked directly, please use 'model.webservices.createDataAttribute()'");
            }
        }
        get containerAsDataEntityBase() {
            return super.getContainerAs(DataEntityBase);
        }
        /**
         * In version 9.0.2: deleted
         */
        get attributeByContract() {
            return this.__attributeByContract.get();
        }
        set attributeByContract(newValue) {
            this.__attributeByContract.set(newValue);
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
         * In version 8.5.0: introduced
         */
        get summary() {
            return this.__summary.get();
        }
        set summary(newValue) {
            this.__summary.set(newValue);
        }
        /**
         * In version 8.5.0: introduced
         */
        get description() {
            return this.__description.get();
        }
        set description(newValue) {
            this.__description.set(newValue);
        }
        /**
         * In version 9.18.0: introduced
         */
        get filterable() {
            return this.__filterable.get();
        }
        set filterable(newValue) {
            this.__filterable.set(newValue);
        }
        /**
         * In version 9.18.0: introduced
         */
        get sortable() {
            return this.__sortable.get();
        }
        set sortable(newValue) {
            this.__sortable.set(newValue);
        }
        /**
         * Creates and returns a new DataAttribute instance in the SDK and on the server.
         * The new DataAttribute will be automatically stored in the 'childMembers' property
         * of the parent DataEntityBase element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, DataAttribute, "childMembers", true);
        }
        /**
         * Creates and returns a new DataAttribute instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, DataAttribute);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__filterable.isAvailable) {
                this.filterable = true;
            }
            if (this.__sortable.isAvailable) {
                this.sortable = true;
            }
        }
    }
    DataAttribute.structureTypeName = "WebServices$DataAttribute";
    DataAttribute.versionInfo = new exports.StructureVersionInfo({
        properties: {
            attributeByContract: {
                deleted: "9.0.2",
                deletionMessage: null
            },
            summary: {
                introduced: "8.5.0"
            },
            description: {
                introduced: "8.5.0"
            },
            filterable: {
                introduced: "9.18.0"
            },
            sortable: {
                introduced: "9.18.0"
            }
        }
    }, internal.StructureType.Element);
    webservices.DataAttribute = DataAttribute;
    class DataEntity extends DataEntityBase {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new DataEntity() cannot be invoked directly, please use 'model.webservices.createDataEntity()'");
            }
        }
        get containerAsDataEntityBase() {
            return super.getContainerAs(DataEntityBase);
        }
        get containerAsPublishedParameter() {
            return super.getContainerAs(PublishedParameter);
        }
        get containerAsPublishedResource() {
            return super.getContainerAs(PublishedResource);
        }
        /**
         * Creates and returns a new DataEntity instance in the SDK and on the server.
         * The new DataEntity will be automatically stored in the 'childMembers' property
         * of the parent DataEntityBase element passed as argument.
         */
        static createInDataEntityBaseUnderChildMembers(container) {
            return internal.instancehelpers.createElement(container, DataEntity, "childMembers", true);
        }
        /**
         * Creates and returns a new DataEntity instance in the SDK and on the server.
         * The new DataEntity will be automatically stored in the 'dataEntity' property
         * of the parent PublishedParameter element passed as argument.
         */
        static createInPublishedParameterUnderDataEntity(container) {
            return internal.instancehelpers.createElement(container, DataEntity, "dataEntity", false);
        }
        /**
         * Creates and returns a new DataEntity instance in the SDK and on the server.
         * The new DataEntity will be automatically stored in the 'dataEntity' property
         * of the parent PublishedResource element passed as argument.
         */
        static createInPublishedResourceUnderDataEntity(container) {
            return internal.instancehelpers.createElement(container, DataEntity, "dataEntity", false);
        }
        /**
         * Creates and returns a new DataEntity instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, DataEntity);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    DataEntity.structureTypeName = "WebServices$DataEntity";
    DataEntity.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    webservices.DataEntity = DataEntity;
    /**
     * See: {@link https://docs.mendix.com/refguide/consumed-web-services relevant section in reference guide}
     */
    class ImportedWebService extends projects_1.projects.Document {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            /** @internal */
            this.__wsdlDescription = new internal.PartProperty(ImportedWebService, this, "wsdlDescription", null, false);
            /** @internal */
            this.__wsdlUrl = new internal.PrimitiveProperty(ImportedWebService, this, "wsdlUrl", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__useMtom = new internal.PrimitiveProperty(ImportedWebService, this, "useMtom", true, internal.PrimitiveTypeEnum.Boolean);
            this._containmentName = "documents";
        }
        get containerAsFolderBase() {
            return super.getContainerAs(projects_1.projects.FolderBase);
        }
        get wsdlDescription() {
            return this.__wsdlDescription.get();
        }
        set wsdlDescription(newValue) {
            this.__wsdlDescription.set(newValue);
        }
        get wsdlUrl() {
            return this.__wsdlUrl.get();
        }
        set wsdlUrl(newValue) {
            this.__wsdlUrl.set(newValue);
        }
        /**
         * In version 6.4.1: introduced
         */
        get useMtom() {
            return this.__useMtom.get();
        }
        set useMtom(newValue) {
            this.__useMtom.set(newValue);
        }
        /**
         * Creates a new ImportedWebService unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container) {
            return internal.instancehelpers.createUnit(container, ImportedWebService);
        }
        /** @internal */
        _isByNameReferrable() {
            return this.__name.isAvailable;
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__useMtom.isAvailable) {
                this.useMtom = true;
            }
        }
    }
    ImportedWebService.structureTypeName = "WebServices$ImportedWebService";
    ImportedWebService.versionInfo = new exports.StructureVersionInfo({
        properties: {
            useMtom: {
                introduced: "6.4.1"
            }
        }
    }, internal.StructureType.ModelUnit);
    webservices.ImportedWebService = ImportedWebService;
    class OperationInfo extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__name = new internal.PrimitiveProperty(OperationInfo, this, "name", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__documentation = new internal.PrimitiveProperty(OperationInfo, this, "documentation", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__soapAction = new internal.PrimitiveProperty(OperationInfo, this, "soapAction", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__requestHeaderRpcElement = new internal.PartProperty(OperationInfo, this, "requestHeaderRpcElement", null, true);
            /** @internal */
            this.__requestBodyRpcElement = new internal.PartProperty(OperationInfo, this, "requestBodyRpcElement", null, true);
            /** @internal */
            this.__responseBodyRpcElement = new internal.PartProperty(OperationInfo, this, "responseBodyRpcElement", null, true);
            /** @internal */
            this.__requestHeaderElementName = new internal.PrimitiveProperty(OperationInfo, this, "requestHeaderElementName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__requestHeaderEncoded = new internal.PrimitiveProperty(OperationInfo, this, "requestHeaderEncoded", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__requestHeaderPartEncoding = new internal.PartProperty(OperationInfo, this, "requestHeaderPartEncoding", null, false);
            /** @internal */
            this.__requestBodyEncoded = new internal.PrimitiveProperty(OperationInfo, this, "requestBodyEncoded", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__requestBodyElementName = new internal.PrimitiveProperty(OperationInfo, this, "requestBodyElementName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__requestBodyPartEncodings = new internal.PartListProperty(OperationInfo, this, "requestBodyPartEncodings", []);
            /** @internal */
            this.__responseBodyElementName = new internal.PrimitiveProperty(OperationInfo, this, "responseBodyElementName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__allowSimpleMappingInheritance = new internal.PrimitiveProperty(OperationInfo, this, "allowSimpleMappingInheritance", false, internal.PrimitiveTypeEnum.Boolean);
            if (arguments.length < 4) {
                throw new Error("new OperationInfo() cannot be invoked directly, please use 'model.webservices.createOperationInfo()'");
            }
        }
        get containerAsServiceInfo() {
            return super.getContainerAs(ServiceInfo);
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
        get soapAction() {
            return this.__soapAction.get();
        }
        set soapAction(newValue) {
            this.__soapAction.set(newValue);
        }
        get requestHeaderRpcElement() {
            return this.__requestHeaderRpcElement.get();
        }
        set requestHeaderRpcElement(newValue) {
            this.__requestHeaderRpcElement.set(newValue);
        }
        get requestBodyRpcElement() {
            return this.__requestBodyRpcElement.get();
        }
        set requestBodyRpcElement(newValue) {
            this.__requestBodyRpcElement.set(newValue);
        }
        get responseBodyRpcElement() {
            return this.__responseBodyRpcElement.get();
        }
        set responseBodyRpcElement(newValue) {
            this.__responseBodyRpcElement.set(newValue);
        }
        get requestHeaderElementName() {
            return this.__requestHeaderElementName.get();
        }
        set requestHeaderElementName(newValue) {
            this.__requestHeaderElementName.set(newValue);
        }
        get requestHeaderEncoded() {
            return this.__requestHeaderEncoded.get();
        }
        set requestHeaderEncoded(newValue) {
            this.__requestHeaderEncoded.set(newValue);
        }
        get requestHeaderPartEncoding() {
            return this.__requestHeaderPartEncoding.get();
        }
        set requestHeaderPartEncoding(newValue) {
            this.__requestHeaderPartEncoding.set(newValue);
        }
        get requestBodyEncoded() {
            return this.__requestBodyEncoded.get();
        }
        set requestBodyEncoded(newValue) {
            this.__requestBodyEncoded.set(newValue);
        }
        get requestBodyElementName() {
            return this.__requestBodyElementName.get();
        }
        set requestBodyElementName(newValue) {
            this.__requestBodyElementName.set(newValue);
        }
        get requestBodyPartEncodings() {
            return this.__requestBodyPartEncodings.get();
        }
        get responseBodyElementName() {
            return this.__responseBodyElementName.get();
        }
        set responseBodyElementName(newValue) {
            this.__responseBodyElementName.set(newValue);
        }
        /**
         * In version 6.1.0: deleted
         */
        get allowSimpleMappingInheritance() {
            return this.__allowSimpleMappingInheritance.get();
        }
        set allowSimpleMappingInheritance(newValue) {
            this.__allowSimpleMappingInheritance.set(newValue);
        }
        /**
         * Creates and returns a new OperationInfo instance in the SDK and on the server.
         * The new OperationInfo will be automatically stored in the 'operations' property
         * of the parent ServiceInfo element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, OperationInfo, "operations", true);
        }
        /**
         * Creates and returns a new OperationInfo instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, OperationInfo);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.requestBodyRpcElement = RpcOperationElement.create(this.model);
            this.requestHeaderRpcElement = RpcOperationElement.create(this.model);
            this.responseBodyRpcElement = RpcOperationElement.create(this.model);
        }
    }
    OperationInfo.structureTypeName = "WebServices$OperationInfo";
    OperationInfo.versionInfo = new exports.StructureVersionInfo({
        properties: {
            requestHeaderRpcElement: {
                required: {
                    currentValue: true
                }
            },
            requestBodyRpcElement: {
                required: {
                    currentValue: true
                }
            },
            responseBodyRpcElement: {
                required: {
                    currentValue: true
                }
            },
            allowSimpleMappingInheritance: {
                deleted: "6.1.0",
                deletionMessage: null
            }
        }
    }, internal.StructureType.Element);
    webservices.OperationInfo = OperationInfo;
    class PartEncoding extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__partName = new internal.PrimitiveProperty(PartEncoding, this, "partName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__partXsdType = new internal.PrimitiveProperty(PartEncoding, this, "partXsdType", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new PartEncoding() cannot be invoked directly, please use 'model.webservices.createPartEncoding()'");
            }
        }
        get containerAsOperationInfo() {
            return super.getContainerAs(OperationInfo);
        }
        get partName() {
            return this.__partName.get();
        }
        set partName(newValue) {
            this.__partName.set(newValue);
        }
        get partXsdType() {
            return this.__partXsdType.get();
        }
        set partXsdType(newValue) {
            this.__partXsdType.set(newValue);
        }
        /**
         * Creates and returns a new PartEncoding instance in the SDK and on the server.
         * The new PartEncoding will be automatically stored in the 'requestBodyPartEncodings' property
         * of the parent OperationInfo element passed as argument.
         */
        static createInOperationInfoUnderRequestBodyPartEncodings(container) {
            return internal.instancehelpers.createElement(container, PartEncoding, "requestBodyPartEncodings", true);
        }
        /**
         * Creates and returns a new PartEncoding instance in the SDK and on the server.
         * The new PartEncoding will be automatically stored in the 'requestHeaderPartEncoding' property
         * of the parent OperationInfo element passed as argument.
         */
        static createInOperationInfoUnderRequestHeaderPartEncoding(container) {
            return internal.instancehelpers.createElement(container, PartEncoding, "requestHeaderPartEncoding", false);
        }
        /**
         * Creates and returns a new PartEncoding instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, PartEncoding);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    PartEncoding.structureTypeName = "WebServices$PartEncoding";
    PartEncoding.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    webservices.PartEncoding = PartEncoding;
    class PublishedServiceBase extends projects_1.projects.Document {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            /** @internal */
            this.__versionedServices = new internal.PartListProperty(PublishedServiceBase, this, "versionedServices", []);
        }
        get containerAsFolderBase() {
            return super.getContainerAs(projects_1.projects.FolderBase);
        }
        get versionedServices() {
            return this.__versionedServices.get();
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    PublishedServiceBase.structureTypeName = "WebServices$PublishedServiceBase";
    PublishedServiceBase.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.ModelUnit);
    webservices.PublishedServiceBase = PublishedServiceBase;
    /**
     * See: {@link https://docs.mendix.com/refguide8/published-app-services relevant section in reference guide}
     *
     * In version 9.0.2: deleted
     */
    class PublishedAppService extends PublishedServiceBase {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            this._containmentName = "documents";
        }
        get containerAsFolderBase() {
            return super.getContainerAs(projects_1.projects.FolderBase);
        }
        /**
         * Creates a new PublishedAppService unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container) {
            return internal.instancehelpers.createUnit(container, PublishedAppService);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    PublishedAppService.structureTypeName = "WebServices$PublishedAppService";
    PublishedAppService.versionInfo = new exports.StructureVersionInfo({
        deleted: "9.0.2",
        deletionMessage: null
    }, internal.StructureType.ModelUnit);
    webservices.PublishedAppService = PublishedAppService;
    class PublishedResource extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__dataEntity = new internal.PartProperty(PublishedResource, this, "dataEntity", null, true);
            if (arguments.length < 4) {
                throw new Error("new PublishedResource() cannot be invoked directly, please use 'model.webservices.createPublishedResource()'");
            }
        }
        get containerAsPublishedODataService() {
            return super.getContainerAs(rest_1.rest.PublishedODataService);
        }
        get containerAsVersionedService() {
            return super.getContainerAs(VersionedService);
        }
        get dataEntity() {
            return this.__dataEntity.get();
        }
        set dataEntity(newValue) {
            this.__dataEntity.set(newValue);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.dataEntity = DataEntity.create(this.model);
        }
    }
    PublishedResource.structureTypeName = "WebServices$PublishedResource";
    PublishedResource.versionInfo = new exports.StructureVersionInfo({
        properties: {
            dataEntity: {
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    webservices.PublishedResource = PublishedResource;
    class PublishedOperation extends PublishedResource {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__isLockedByContract = new internal.PrimitiveProperty(PublishedOperation, this, "isLockedByContract", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__name = new internal.PrimitiveProperty(PublishedOperation, this, "name", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__image = new internal.ByNameReferenceProperty(PublishedOperation, this, "image", null, "Images$Image");
            /** @internal */
            this.__description = new internal.PrimitiveProperty(PublishedOperation, this, "description", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__documentation = new internal.PrimitiveProperty(PublishedOperation, this, "documentation", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__microflow = new internal.ByNameReferenceProperty(PublishedOperation, this, "microflow", null, "Microflows$Microflow");
            /** @internal */
            this.__parameters = new internal.PartListProperty(PublishedOperation, this, "parameters", []);
            /** @internal */
            this.__returnTypeNameByContract = new internal.PrimitiveProperty(PublishedOperation, this, "returnTypeNameByContract", "Nothing", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__returnTypeSpecificationByContract = new internal.PrimitiveProperty(PublishedOperation, this, "returnTypeSpecificationByContract", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__entityExposedNameByContract = new internal.PrimitiveProperty(PublishedOperation, this, "entityExposedNameByContract", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__entityExposedName = new internal.PrimitiveProperty(PublishedOperation, this, "entityExposedName", "Result", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__returnType = new internal.PrimitiveProperty(PublishedOperation, this, "returnType", "Void", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__operationReturnType = new internal.PartProperty(PublishedOperation, this, "operationReturnType", null, true);
            /** @internal */
            this.__returnTypeIsOptional = new internal.PrimitiveProperty(PublishedOperation, this, "returnTypeIsOptional", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__returnTypeIsNillable = new internal.PrimitiveProperty(PublishedOperation, this, "returnTypeIsNillable", false, internal.PrimitiveTypeEnum.Boolean);
            if (arguments.length < 4) {
                throw new Error("new PublishedOperation() cannot be invoked directly, please use 'model.webservices.createPublishedOperation()'");
            }
        }
        get containerAsVersionedService() {
            return super.getContainerAs(VersionedService);
        }
        /**
         * In version 9.0.2: deleted
         */
        get isLockedByContract() {
            return this.__isLockedByContract.get();
        }
        set isLockedByContract(newValue) {
            this.__isLockedByContract.set(newValue);
        }
        get name() {
            return this.__name.get();
        }
        set name(newValue) {
            this.__name.set(newValue);
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
        get description() {
            return this.__description.get();
        }
        set description(newValue) {
            this.__description.set(newValue);
        }
        get documentation() {
            return this.__documentation.get();
        }
        set documentation(newValue) {
            this.__documentation.set(newValue);
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
        get parameters() {
            return this.__parameters.get();
        }
        /**
         * In version 9.0.2: deleted
         */
        get returnTypeNameByContract() {
            return this.__returnTypeNameByContract.get();
        }
        set returnTypeNameByContract(newValue) {
            this.__returnTypeNameByContract.set(newValue);
        }
        /**
         * In version 9.0.2: deleted
         */
        get returnTypeSpecificationByContract() {
            return this.__returnTypeSpecificationByContract.get();
        }
        set returnTypeSpecificationByContract(newValue) {
            this.__returnTypeSpecificationByContract.set(newValue);
        }
        /**
         * In version 9.0.2: deleted
         */
        get entityExposedNameByContract() {
            return this.__entityExposedNameByContract.get();
        }
        set entityExposedNameByContract(newValue) {
            this.__entityExposedNameByContract.set(newValue);
        }
        get entityExposedName() {
            return this.__entityExposedName.get();
        }
        set entityExposedName(newValue) {
            this.__entityExposedName.set(newValue);
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
        get operationReturnType() {
            return this.__operationReturnType.get();
        }
        set operationReturnType(newValue) {
            this.__operationReturnType.set(newValue);
        }
        get returnTypeIsOptional() {
            return this.__returnTypeIsOptional.get();
        }
        set returnTypeIsOptional(newValue) {
            this.__returnTypeIsOptional.set(newValue);
        }
        get returnTypeIsNillable() {
            return this.__returnTypeIsNillable.get();
        }
        set returnTypeIsNillable(newValue) {
            this.__returnTypeIsNillable.set(newValue);
        }
        /**
         * Creates and returns a new PublishedOperation instance in the SDK and on the server.
         * The new PublishedOperation will be automatically stored in the 'operations' property
         * of the parent VersionedService element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, PublishedOperation, "operations", true);
        }
        /**
         * Creates and returns a new PublishedOperation instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, PublishedOperation);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.entityExposedName = "Result";
            if (this.__operationReturnType.isAvailable) {
                this.operationReturnType = datatypes_1.datatypes.VoidType.create(this.model);
            }
            if (this.__returnType.isAvailable) {
                this.returnType = "Void";
            }
            if (this.__returnTypeNameByContract.isAvailable) {
                this.returnTypeNameByContract = "Nothing";
            }
        }
    }
    PublishedOperation.structureTypeName = "WebServices$PublishedOperation";
    PublishedOperation.versionInfo = new exports.StructureVersionInfo({
        properties: {
            isLockedByContract: {
                deleted: "9.0.2",
                deletionMessage: null
            },
            returnTypeNameByContract: {
                deleted: "9.0.2",
                deletionMessage: null
            },
            returnTypeSpecificationByContract: {
                deleted: "9.0.2",
                deletionMessage: null
            },
            entityExposedNameByContract: {
                deleted: "9.0.2",
                deletionMessage: null
            },
            returnType: {
                deleted: "7.9.0",
                deletionMessage: "Use property 'operationReturnType' instead"
            },
            operationReturnType: {
                introduced: "7.9.0",
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    webservices.PublishedOperation = PublishedOperation;
    class PublishedParameter extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__isLockedByContract = new internal.PrimitiveProperty(PublishedParameter, this, "isLockedByContract", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__parameter = new internal.ByNameReferenceProperty(PublishedParameter, this, "parameter", null, "Microflows$MicroflowParameter");
            /** @internal */
            this.__parameterByContract = new internal.PartProperty(PublishedParameter, this, "parameterByContract", null, true);
            /** @internal */
            this.__entityExposedName = new internal.PrimitiveProperty(PublishedParameter, this, "entityExposedName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__isOptionalByContract = new internal.PrimitiveProperty(PublishedParameter, this, "isOptionalByContract", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__isOptional = new internal.PrimitiveProperty(PublishedParameter, this, "isOptional", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__isNillable = new internal.PrimitiveProperty(PublishedParameter, this, "isNillable", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__entityExposedItemNameByContract = new internal.PrimitiveProperty(PublishedParameter, this, "entityExposedItemNameByContract", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__entityExposedItemName = new internal.PrimitiveProperty(PublishedParameter, this, "entityExposedItemName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__type = new internal.PrimitiveProperty(PublishedParameter, this, "type", "Void", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__parameterType = new internal.PartProperty(PublishedParameter, this, "parameterType", null, true);
            /** @internal */
            this.__dataEntity = new internal.PartProperty(PublishedParameter, this, "dataEntity", null, true);
            if (arguments.length < 4) {
                throw new Error("new PublishedParameter() cannot be invoked directly, please use 'model.webservices.createPublishedParameter()'");
            }
        }
        get containerAsPublishedOperation() {
            return super.getContainerAs(PublishedOperation);
        }
        /**
         * In version 9.0.2: deleted
         */
        get isLockedByContract() {
            return this.__isLockedByContract.get();
        }
        set isLockedByContract(newValue) {
            this.__isLockedByContract.set(newValue);
        }
        get parameter() {
            return this.__parameter.get();
        }
        set parameter(newValue) {
            this.__parameter.set(newValue);
        }
        get parameterQualifiedName() {
            return this.__parameter.qualifiedName();
        }
        /**
         * In version 9.0.2: deleted
         */
        get parameterByContract() {
            return this.__parameterByContract.get();
        }
        set parameterByContract(newValue) {
            this.__parameterByContract.set(newValue);
        }
        get entityExposedName() {
            return this.__entityExposedName.get();
        }
        set entityExposedName(newValue) {
            this.__entityExposedName.set(newValue);
        }
        /**
         * In version 9.0.2: deleted
         */
        get isOptionalByContract() {
            return this.__isOptionalByContract.get();
        }
        set isOptionalByContract(newValue) {
            this.__isOptionalByContract.set(newValue);
        }
        get isOptional() {
            return this.__isOptional.get();
        }
        set isOptional(newValue) {
            this.__isOptional.set(newValue);
        }
        get isNillable() {
            return this.__isNillable.get();
        }
        set isNillable(newValue) {
            this.__isNillable.set(newValue);
        }
        /**
         * In version 9.0.2: deleted
         */
        get entityExposedItemNameByContract() {
            return this.__entityExposedItemNameByContract.get();
        }
        set entityExposedItemNameByContract(newValue) {
            this.__entityExposedItemNameByContract.set(newValue);
        }
        get entityExposedItemName() {
            return this.__entityExposedItemName.get();
        }
        set entityExposedItemName(newValue) {
            this.__entityExposedItemName.set(newValue);
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
        get dataEntity() {
            return this.__dataEntity.get();
        }
        set dataEntity(newValue) {
            this.__dataEntity.set(newValue);
        }
        /**
         * Creates and returns a new PublishedParameter instance in the SDK and on the server.
         * The new PublishedParameter will be automatically stored in the 'parameters' property
         * of the parent PublishedOperation element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, PublishedParameter, "parameters", true);
        }
        /**
         * Creates and returns a new PublishedParameter instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, PublishedParameter);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.dataEntity = DataEntity.create(this.model);
            if (this.__parameterByContract.isAvailable) {
                this.parameterByContract = appservices_1.appservices.MsdMicroflowParameter.create(this.model);
            }
            if (this.__parameterType.isAvailable) {
                this.parameterType = datatypes_1.datatypes.VoidType.create(this.model);
            }
            if (this.__type.isAvailable) {
                this.type = "Void";
            }
        }
    }
    PublishedParameter.structureTypeName = "WebServices$PublishedParameter";
    PublishedParameter.versionInfo = new exports.StructureVersionInfo({
        properties: {
            isLockedByContract: {
                deleted: "9.0.2",
                deletionMessage: null
            },
            parameterByContract: {
                deleted: "9.0.2",
                deletionMessage: null,
                required: {
                    currentValue: true
                }
            },
            isOptionalByContract: {
                deleted: "9.0.2",
                deletionMessage: null
            },
            entityExposedItemNameByContract: {
                deleted: "9.0.2",
                deletionMessage: null
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
            },
            dataEntity: {
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    webservices.PublishedParameter = PublishedParameter;
    /**
     * See: {@link https://docs.mendix.com/refguide/published-web-services relevant section in reference guide}
     */
    class PublishedWebService extends PublishedServiceBase {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            this._containmentName = "documents";
        }
        get containerAsFolderBase() {
            return super.getContainerAs(projects_1.projects.FolderBase);
        }
        /**
         * Creates a new PublishedWebService unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container) {
            return internal.instancehelpers.createUnit(container, PublishedWebService);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    PublishedWebService.structureTypeName = "WebServices$PublishedWebService";
    PublishedWebService.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.ModelUnit);
    webservices.PublishedWebService = PublishedWebService;
    class RpcMessagePartElement extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__partName = new internal.PrimitiveProperty(RpcMessagePartElement, this, "partName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__typeName = new internal.PrimitiveProperty(RpcMessagePartElement, this, "typeName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__elementName = new internal.PrimitiveProperty(RpcMessagePartElement, this, "elementName", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new RpcMessagePartElement() cannot be invoked directly, please use 'model.webservices.createRpcMessagePartElement()'");
            }
        }
        get containerAsRpcOperationElement() {
            return super.getContainerAs(RpcOperationElement);
        }
        get partName() {
            return this.__partName.get();
        }
        set partName(newValue) {
            this.__partName.set(newValue);
        }
        get typeName() {
            return this.__typeName.get();
        }
        set typeName(newValue) {
            this.__typeName.set(newValue);
        }
        get elementName() {
            return this.__elementName.get();
        }
        set elementName(newValue) {
            this.__elementName.set(newValue);
        }
        /**
         * Creates and returns a new RpcMessagePartElement instance in the SDK and on the server.
         * The new RpcMessagePartElement will be automatically stored in the 'messagePartElements' property
         * of the parent RpcOperationElement element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, RpcMessagePartElement, "messagePartElements", true);
        }
        /**
         * Creates and returns a new RpcMessagePartElement instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, RpcMessagePartElement);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    RpcMessagePartElement.structureTypeName = "WebServices$RpcMessagePartElement";
    RpcMessagePartElement.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    webservices.RpcMessagePartElement = RpcMessagePartElement;
    class RpcOperationElement extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__name = new internal.PrimitiveProperty(RpcOperationElement, this, "name", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__messagePartElements = new internal.PartListProperty(RpcOperationElement, this, "messagePartElements", []);
            if (arguments.length < 4) {
                throw new Error("new RpcOperationElement() cannot be invoked directly, please use 'model.webservices.createRpcOperationElement()'");
            }
        }
        get containerAsOperationInfo() {
            return super.getContainerAs(OperationInfo);
        }
        get name() {
            return this.__name.get();
        }
        set name(newValue) {
            this.__name.set(newValue);
        }
        get messagePartElements() {
            return this.__messagePartElements.get();
        }
        /**
         * Creates and returns a new RpcOperationElement instance in the SDK and on the server.
         * The new RpcOperationElement will be automatically stored in the 'requestBodyRpcElement' property
         * of the parent OperationInfo element passed as argument.
         */
        static createInOperationInfoUnderRequestBodyRpcElement(container) {
            return internal.instancehelpers.createElement(container, RpcOperationElement, "requestBodyRpcElement", false);
        }
        /**
         * Creates and returns a new RpcOperationElement instance in the SDK and on the server.
         * The new RpcOperationElement will be automatically stored in the 'requestHeaderRpcElement' property
         * of the parent OperationInfo element passed as argument.
         */
        static createInOperationInfoUnderRequestHeaderRpcElement(container) {
            return internal.instancehelpers.createElement(container, RpcOperationElement, "requestHeaderRpcElement", false);
        }
        /**
         * Creates and returns a new RpcOperationElement instance in the SDK and on the server.
         * The new RpcOperationElement will be automatically stored in the 'responseBodyRpcElement' property
         * of the parent OperationInfo element passed as argument.
         */
        static createInOperationInfoUnderResponseBodyRpcElement(container) {
            return internal.instancehelpers.createElement(container, RpcOperationElement, "responseBodyRpcElement", false);
        }
        /**
         * Creates and returns a new RpcOperationElement instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, RpcOperationElement);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    RpcOperationElement.structureTypeName = "WebServices$RpcOperationElement";
    RpcOperationElement.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    webservices.RpcOperationElement = RpcOperationElement;
    class ServiceInfo extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__name = new internal.PrimitiveProperty(ServiceInfo, this, "name", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__documentation = new internal.PrimitiveProperty(ServiceInfo, this, "documentation", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__portName = new internal.PrimitiveProperty(ServiceInfo, this, "portName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__location = new internal.PrimitiveProperty(ServiceInfo, this, "location", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__soapVersion = new internal.EnumProperty(ServiceInfo, this, "soapVersion", SoapVersion.Soap11, SoapVersion);
            /** @internal */
            this.__locationConstant = new internal.ByNameReferenceProperty(ServiceInfo, this, "locationConstant", null, "Constants$Constant");
            /** @internal */
            this.__operations = new internal.PartListProperty(ServiceInfo, this, "operations", []);
            /** @internal */
            this.__usingAddressing = new internal.PrimitiveProperty(ServiceInfo, this, "usingAddressing", false, internal.PrimitiveTypeEnum.Boolean);
            if (arguments.length < 4) {
                throw new Error("new ServiceInfo() cannot be invoked directly, please use 'model.webservices.createServiceInfo()'");
            }
        }
        get containerAsWsdlDescription() {
            return super.getContainerAs(WsdlDescription);
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
        get portName() {
            return this.__portName.get();
        }
        set portName(newValue) {
            this.__portName.set(newValue);
        }
        get location() {
            return this.__location.get();
        }
        set location(newValue) {
            this.__location.set(newValue);
        }
        get soapVersion() {
            return this.__soapVersion.get();
        }
        set soapVersion(newValue) {
            this.__soapVersion.set(newValue);
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
        get operations() {
            return this.__operations.get();
        }
        /**
         * In version 8.16.0: introduced
         */
        get usingAddressing() {
            return this.__usingAddressing.get();
        }
        set usingAddressing(newValue) {
            this.__usingAddressing.set(newValue);
        }
        /**
         * Creates and returns a new ServiceInfo instance in the SDK and on the server.
         * The new ServiceInfo will be automatically stored in the 'services' property
         * of the parent WsdlDescription element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, ServiceInfo, "services", true);
        }
        /**
         * Creates and returns a new ServiceInfo instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ServiceInfo);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.soapVersion = SoapVersion.Soap11;
        }
    }
    ServiceInfo.structureTypeName = "WebServices$ServiceInfo";
    ServiceInfo.versionInfo = new exports.StructureVersionInfo({
        properties: {
            usingAddressing: {
                introduced: "8.16.0"
            }
        }
    }, internal.StructureType.Element);
    webservices.ServiceInfo = ServiceInfo;
    /**
     * In version 6.7.0: introduced
     */
    class SystemIdDataAttribute extends DataMember {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__entity = new internal.ByNameReferenceProperty(SystemIdDataAttribute, this, "entity", null, "DomainModels$Entity");
            /** @internal */
            this.__summary = new internal.PrimitiveProperty(SystemIdDataAttribute, this, "summary", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__description = new internal.PrimitiveProperty(SystemIdDataAttribute, this, "description", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new SystemIdDataAttribute() cannot be invoked directly, please use 'model.webservices.createSystemIdDataAttribute()'");
            }
        }
        get containerAsDataEntityBase() {
            return super.getContainerAs(DataEntityBase);
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
         * In version 8.5.0: introduced
         */
        get summary() {
            return this.__summary.get();
        }
        set summary(newValue) {
            this.__summary.set(newValue);
        }
        /**
         * In version 8.5.0: introduced
         */
        get description() {
            return this.__description.get();
        }
        set description(newValue) {
            this.__description.set(newValue);
        }
        /**
         * Creates and returns a new SystemIdDataAttribute instance in the SDK and on the server.
         * The new SystemIdDataAttribute will be automatically stored in the 'childMembers' property
         * of the parent DataEntityBase element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.7.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, SystemIdDataAttribute.structureTypeName, { start: "6.7.0" });
            return internal.instancehelpers.createElement(container, SystemIdDataAttribute, "childMembers", true);
        }
        /**
         * Creates and returns a new SystemIdDataAttribute instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, SystemIdDataAttribute);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    SystemIdDataAttribute.structureTypeName = "WebServices$SystemIdDataAttribute";
    SystemIdDataAttribute.versionInfo = new exports.StructureVersionInfo({
        introduced: "6.7.0",
        properties: {
            summary: {
                introduced: "8.5.0"
            },
            description: {
                introduced: "8.5.0"
            }
        }
    }, internal.StructureType.Element);
    webservices.SystemIdDataAttribute = SystemIdDataAttribute;
    /**
     * See: {@link https://docs.mendix.com/refguide/published-web-services relevant section in reference guide}
     */
    class VersionedService extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__documentation = new internal.PrimitiveProperty(VersionedService, this, "documentation", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__targetNamespace = new internal.PrimitiveProperty(VersionedService, this, "targetNamespace", "http://www.example.com/", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__headerAuthentication = new internal.EnumProperty(VersionedService, this, "headerAuthentication", HeaderAuthentication.None, HeaderAuthentication);
            /** @internal */
            this.__operations = new internal.PartListProperty(VersionedService, this, "operations", []);
            /** @internal */
            this.__isLockedByContract = new internal.PrimitiveProperty(VersionedService, this, "isLockedByContract", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__enumerationsByContract = new internal.PartProperty(VersionedService, this, "enumerationsByContract", null, false);
            /** @internal */
            this.__optimizedXml = new internal.PrimitiveProperty(VersionedService, this, "optimizedXml", true, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__headerImportMapping = new internal.ByNameReferenceProperty(VersionedService, this, "headerImportMapping", null, "ImportMappings$ImportMapping");
            /** @internal */
            this.__objectHandlingBackup = new internal.EnumProperty(VersionedService, this, "objectHandlingBackup", mappings_1.mappings.ObjectHandlingBackupEnum.Create, mappings_1.mappings.ObjectHandlingBackupEnum);
            /** @internal */
            this.__headerMicroflow = new internal.ByNameReferenceProperty(VersionedService, this, "headerMicroflow", null, "Microflows$Microflow");
            /** @internal */
            this.__versionNumber = new internal.PrimitiveProperty(VersionedService, this, "versionNumber", 0, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__caption = new internal.PrimitiveProperty(VersionedService, this, "caption", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__description = new internal.PrimitiveProperty(VersionedService, this, "description", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__appServiceState = new internal.EnumProperty(VersionedService, this, "appServiceState", AppServiceState.Draft, AppServiceState);
            /** @internal */
            this.__image = new internal.ByNameReferenceProperty(VersionedService, this, "image", null, "Images$Image");
            /** @internal */
            this.__validate = new internal.PrimitiveProperty(VersionedService, this, "validate", false, internal.PrimitiveTypeEnum.Boolean);
            if (arguments.length < 4) {
                throw new Error("new VersionedService() cannot be invoked directly, please use 'model.webservices.createVersionedService()'");
            }
        }
        get containerAsPublishedServiceBase() {
            return super.getContainerAs(PublishedServiceBase);
        }
        get documentation() {
            return this.__documentation.get();
        }
        set documentation(newValue) {
            this.__documentation.set(newValue);
        }
        get targetNamespace() {
            return this.__targetNamespace.get();
        }
        set targetNamespace(newValue) {
            this.__targetNamespace.set(newValue);
        }
        get headerAuthentication() {
            return this.__headerAuthentication.get();
        }
        set headerAuthentication(newValue) {
            this.__headerAuthentication.set(newValue);
        }
        get operations() {
            return this.__operations.get();
        }
        /**
         * In version 9.0.2: deleted
         */
        get isLockedByContract() {
            return this.__isLockedByContract.get();
        }
        set isLockedByContract(newValue) {
            this.__isLockedByContract.set(newValue);
        }
        /**
         * In version 9.0.2: deleted
         */
        get enumerationsByContract() {
            return this.__enumerationsByContract.get();
        }
        set enumerationsByContract(newValue) {
            this.__enumerationsByContract.set(newValue);
        }
        /**
         * In version 7.13.0: introduced
         */
        get optimizedXml() {
            return this.__optimizedXml.get();
        }
        set optimizedXml(newValue) {
            this.__optimizedXml.set(newValue);
        }
        get headerImportMapping() {
            return this.__headerImportMapping.get();
        }
        set headerImportMapping(newValue) {
            this.__headerImportMapping.set(newValue);
        }
        get headerImportMappingQualifiedName() {
            return this.__headerImportMapping.qualifiedName();
        }
        /**
         * In version 7.17.0: introduced
         */
        get objectHandlingBackup() {
            return this.__objectHandlingBackup.get();
        }
        set objectHandlingBackup(newValue) {
            this.__objectHandlingBackup.set(newValue);
        }
        get headerMicroflow() {
            return this.__headerMicroflow.get();
        }
        set headerMicroflow(newValue) {
            this.__headerMicroflow.set(newValue);
        }
        get headerMicroflowQualifiedName() {
            return this.__headerMicroflow.qualifiedName();
        }
        get versionNumber() {
            return this.__versionNumber.get();
        }
        set versionNumber(newValue) {
            this.__versionNumber.set(newValue);
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
        /**
         * In version 9.0.2: deleted
         */
        get appServiceState() {
            return this.__appServiceState.get();
        }
        set appServiceState(newValue) {
            this.__appServiceState.set(newValue);
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
        get validate() {
            return this.__validate.get();
        }
        set validate(newValue) {
            this.__validate.set(newValue);
        }
        /**
         * Creates and returns a new VersionedService instance in the SDK and on the server.
         * The new VersionedService will be automatically stored in the 'versionedServices' property
         * of the parent PublishedServiceBase element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, VersionedService, "versionedServices", true);
        }
        /**
         * Creates and returns a new VersionedService instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, VersionedService);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__appServiceState.isAvailable) {
                this.appServiceState = AppServiceState.Draft;
            }
            this.headerAuthentication = HeaderAuthentication.None;
            if (this.__objectHandlingBackup.isAvailable) {
                this.objectHandlingBackup = mappings_1.mappings.ObjectHandlingBackupEnum.Create;
            }
            if (this.__optimizedXml.isAvailable) {
                this.optimizedXml = true;
            }
            this.targetNamespace = "http://www.example.com/";
        }
    }
    VersionedService.structureTypeName = "WebServices$VersionedService";
    VersionedService.versionInfo = new exports.StructureVersionInfo({
        properties: {
            isLockedByContract: {
                deleted: "9.0.2",
                deletionMessage: null
            },
            enumerationsByContract: {
                deleted: "9.0.2",
                deletionMessage: null
            },
            optimizedXml: {
                introduced: "7.13.0"
            },
            objectHandlingBackup: {
                introduced: "7.17.0"
            },
            appServiceState: {
                deleted: "9.0.2",
                deletionMessage: null
            }
        }
    }, internal.StructureType.Element);
    webservices.VersionedService = VersionedService;
    class WsdlDescription extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__wsdlEntries = new internal.PartListProperty(WsdlDescription, this, "wsdlEntries", []);
            /** @internal */
            this.__schemaEntries = new internal.PartListProperty(WsdlDescription, this, "schemaEntries", []);
            /** @internal */
            this.__services = new internal.PartListProperty(WsdlDescription, this, "services", []);
            /** @internal */
            this.__targetNamespace = new internal.PrimitiveProperty(WsdlDescription, this, "targetNamespace", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__importsHaveLocations = new internal.PrimitiveProperty(WsdlDescription, this, "importsHaveLocations", false, internal.PrimitiveTypeEnum.Boolean);
            if (arguments.length < 4) {
                throw new Error("new WsdlDescription() cannot be invoked directly, please use 'model.webservices.createWsdlDescription()'");
            }
        }
        get containerAsMsd() {
            return super.getContainerAs(appservices_1.appservices.Msd);
        }
        get containerAsImportedWebService() {
            return super.getContainerAs(ImportedWebService);
        }
        get wsdlEntries() {
            return this.__wsdlEntries.get();
        }
        get schemaEntries() {
            return this.__schemaEntries.get();
        }
        get services() {
            return this.__services.get();
        }
        get targetNamespace() {
            return this.__targetNamespace.get();
        }
        set targetNamespace(newValue) {
            this.__targetNamespace.set(newValue);
        }
        get importsHaveLocations() {
            return this.__importsHaveLocations.get();
        }
        set importsHaveLocations(newValue) {
            this.__importsHaveLocations.set(newValue);
        }
        /**
         * Creates and returns a new WsdlDescription instance in the SDK and on the server.
         * The new WsdlDescription will be automatically stored in the 'wsdlDescription' property
         * of the parent ImportedWebService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.2 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, WsdlDescription.structureTypeName, { start: "9.0.2" });
            return internal.instancehelpers.createElement(container, WsdlDescription, "wsdlDescription", false);
        }
        /**
         * Creates and returns a new WsdlDescription instance in the SDK and on the server.
         * The new WsdlDescription will be automatically stored in the 'wsdlDescription' property
         * of the parent appservices.Msd element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 9.0.1
         */
        static createInMsdUnderWsdlDescription(container) {
            internal.createInVersionCheck(container.model, WsdlDescription.structureTypeName, { end: "9.0.1" });
            return internal.instancehelpers.createElement(container, WsdlDescription, "wsdlDescription", false);
        }
        /**
         * Creates and returns a new WsdlDescription instance in the SDK and on the server.
         * The new WsdlDescription will be automatically stored in the 'wsdlDescription' property
         * of the parent ImportedWebService element passed as argument.
         */
        static createInImportedWebServiceUnderWsdlDescription(container) {
            return internal.instancehelpers.createElement(container, WsdlDescription, "wsdlDescription", false);
        }
        /**
         * Creates and returns a new WsdlDescription instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, WsdlDescription);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    WsdlDescription.structureTypeName = "WebServices$WsdlDescription";
    WsdlDescription.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    webservices.WsdlDescription = WsdlDescription;
    class WsdlEntry extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__location = new internal.PrimitiveProperty(WsdlEntry, this, "location", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__contents = new internal.PrimitiveProperty(WsdlEntry, this, "contents", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__localizedLocationFormat = new internal.PrimitiveProperty(WsdlEntry, this, "localizedLocationFormat", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__localizedContentsFormat = new internal.PrimitiveProperty(WsdlEntry, this, "localizedContentsFormat", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new WsdlEntry() cannot be invoked directly, please use 'model.webservices.createWsdlEntry()'");
            }
        }
        get containerAsWsdlDescription() {
            return super.getContainerAs(WsdlDescription);
        }
        get location() {
            return this.__location.get();
        }
        set location(newValue) {
            this.__location.set(newValue);
        }
        get contents() {
            return this.__contents.get();
        }
        set contents(newValue) {
            this.__contents.set(newValue);
        }
        get localizedLocationFormat() {
            return this.__localizedLocationFormat.get();
        }
        set localizedLocationFormat(newValue) {
            this.__localizedLocationFormat.set(newValue);
        }
        get localizedContentsFormat() {
            return this.__localizedContentsFormat.get();
        }
        set localizedContentsFormat(newValue) {
            this.__localizedContentsFormat.set(newValue);
        }
        /**
         * Creates and returns a new WsdlEntry instance in the SDK and on the server.
         * The new WsdlEntry will be automatically stored in the 'wsdlEntries' property
         * of the parent WsdlDescription element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, WsdlEntry, "wsdlEntries", true);
        }
        /**
         * Creates and returns a new WsdlEntry instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, WsdlEntry);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    WsdlEntry.structureTypeName = "WebServices$WsdlEntry";
    WsdlEntry.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    webservices.WsdlEntry = WsdlEntry;
})(webservices = exports.webservices || (exports.webservices = {}));
const appservices_1 = require("./appservices");
const datatypes_1 = require("./datatypes");
const mappings_1 = require("./mappings");
const rest_1 = require("./rest");
//# sourceMappingURL=webservices.js.map