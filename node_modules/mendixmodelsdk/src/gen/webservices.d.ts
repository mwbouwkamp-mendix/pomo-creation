import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
import { projects } from "./projects";
export declare namespace webservices {
    class AppServiceState extends internal.AbstractEnum {
        static Draft: AppServiceState;
        static Consumable: AppServiceState;
        static Deprecated: AppServiceState;
        protected qualifiedTsTypeName: string;
    }
    class HeaderAuthentication extends internal.AbstractEnum {
        static None: HeaderAuthentication;
        static UsernamePassword: HeaderAuthentication;
        static Custom: HeaderAuthentication;
        protected qualifiedTsTypeName: string;
    }
    class SoapVersion extends internal.AbstractEnum {
        static Soap11: SoapVersion;
        static Soap12: SoapVersion;
        protected qualifiedTsTypeName: string;
    }
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `WebServices`.
     */
    abstract class DataMember extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsDataEntityBase(): DataEntityBase;
        get containerAsPublishedParameter(): PublishedParameter;
        get containerAsPublishedResource(): PublishedResource;
        /**
         * In version 9.0.2: deleted
         */
        get isLockedByContract(): boolean;
        set isLockedByContract(newValue: boolean);
        get exposedName(): string;
        set exposedName(newValue: string);
        /**
         * In version 9.0.2: deleted
         */
        get isOptionalByContract(): boolean;
        set isOptionalByContract(newValue: boolean);
        get isOptional(): boolean;
        set isOptional(newValue: boolean);
        /**
         * In version 9.0.2: deleted
         */
        get isNillableByContract(): boolean;
        set isNillableByContract(newValue: boolean);
        get isNillable(): boolean;
        set isNillable(newValue: boolean);
        get isKey(): boolean;
        set isKey(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    abstract class DataEntityBase extends DataMember {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsDataEntityBase(): DataEntityBase;
        get containerAsPublishedParameter(): PublishedParameter;
        get containerAsPublishedResource(): PublishedResource;
        get childMembers(): internal.IList<DataMember>;
        get entity(): domainmodels.IEntity | null;
        set entity(newValue: domainmodels.IEntity | null);
        get entityQualifiedName(): string | null;
        get exposedItemName(): string;
        set exposedItemName(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    class DataAssociation extends DataEntityBase {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsDataEntityBase(): DataEntityBase;
        /**
         * In version 9.0.2: deleted
         */
        get associationByContract(): appservices.MsdAssociation | null;
        set associationByContract(newValue: appservices.MsdAssociation | null);
        get association(): domainmodels.IAssociationBase | null;
        set association(newValue: domainmodels.IAssociationBase | null);
        get associationQualifiedName(): string | null;
        /**
         * In version 8.0.0: introduced
         */
        get exposedAssociationName(): string;
        set exposedAssociationName(newValue: string);
        /**
         * In version 8.5.0: introduced
         */
        get summary(): string;
        set summary(newValue: string);
        /**
         * In version 8.5.0: introduced
         */
        get description(): string;
        set description(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new DataAssociation instance in the SDK and on the server.
         * The new DataAssociation will be automatically stored in the 'childMembers' property
         * of the parent DataEntityBase element passed as argument.
         */
        static createIn(container: DataEntityBase): DataAssociation;
        /**
         * Creates and returns a new DataAssociation instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): DataAssociation;
    }
    class DataAttribute extends DataMember {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsDataEntityBase(): DataEntityBase;
        /**
         * In version 9.0.2: deleted
         */
        get attributeByContract(): appservices.MsdAttribute | null;
        set attributeByContract(newValue: appservices.MsdAttribute | null);
        get attribute(): domainmodels.IAttribute | null;
        set attribute(newValue: domainmodels.IAttribute | null);
        get attributeQualifiedName(): string | null;
        /**
         * In version 8.5.0: introduced
         */
        get summary(): string;
        set summary(newValue: string);
        /**
         * In version 8.5.0: introduced
         */
        get description(): string;
        set description(newValue: string);
        /**
         * In version 9.18.0: introduced
         */
        get filterable(): boolean;
        set filterable(newValue: boolean);
        /**
         * In version 9.18.0: introduced
         */
        get sortable(): boolean;
        set sortable(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new DataAttribute instance in the SDK and on the server.
         * The new DataAttribute will be automatically stored in the 'childMembers' property
         * of the parent DataEntityBase element passed as argument.
         */
        static createIn(container: DataEntityBase): DataAttribute;
        /**
         * Creates and returns a new DataAttribute instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): DataAttribute;
    }
    class DataEntity extends DataEntityBase {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsDataEntityBase(): DataEntityBase;
        get containerAsPublishedParameter(): PublishedParameter;
        get containerAsPublishedResource(): PublishedResource;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new DataEntity instance in the SDK and on the server.
         * The new DataEntity will be automatically stored in the 'childMembers' property
         * of the parent DataEntityBase element passed as argument.
         */
        static createInDataEntityBaseUnderChildMembers(container: DataEntityBase): DataEntity;
        /**
         * Creates and returns a new DataEntity instance in the SDK and on the server.
         * The new DataEntity will be automatically stored in the 'dataEntity' property
         * of the parent PublishedParameter element passed as argument.
         */
        static createInPublishedParameterUnderDataEntity(container: PublishedParameter): DataEntity;
        /**
         * Creates and returns a new DataEntity instance in the SDK and on the server.
         * The new DataEntity will be automatically stored in the 'dataEntity' property
         * of the parent PublishedResource element passed as argument.
         */
        static createInPublishedResourceUnderDataEntity(container: PublishedResource): DataEntity;
        /**
         * Creates and returns a new DataEntity instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): DataEntity;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/consumed-web-services relevant section in reference guide}
     */
    interface IImportedWebService extends projects.IDocument {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        asLoaded(): ImportedWebService;
        load(callback: (element: ImportedWebService) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ImportedWebService>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/consumed-web-services relevant section in reference guide}
     */
    class ImportedWebService extends projects.Document implements IImportedWebService {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFolderBase(): projects.FolderBase;
        get wsdlDescription(): WsdlDescription | null;
        set wsdlDescription(newValue: WsdlDescription | null);
        get wsdlUrl(): string;
        set wsdlUrl(newValue: string);
        /**
         * In version 6.4.1: introduced
         */
        get useMtom(): boolean;
        set useMtom(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
        /**
         * Creates a new ImportedWebService unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container: projects.IFolderBase): ImportedWebService;
    }
    class OperationInfo extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsServiceInfo(): ServiceInfo;
        get name(): string;
        set name(newValue: string);
        get documentation(): string;
        set documentation(newValue: string);
        get soapAction(): string;
        set soapAction(newValue: string);
        get requestHeaderRpcElement(): RpcOperationElement;
        set requestHeaderRpcElement(newValue: RpcOperationElement);
        get requestBodyRpcElement(): RpcOperationElement;
        set requestBodyRpcElement(newValue: RpcOperationElement);
        get responseBodyRpcElement(): RpcOperationElement;
        set responseBodyRpcElement(newValue: RpcOperationElement);
        get requestHeaderElementName(): string;
        set requestHeaderElementName(newValue: string);
        get requestHeaderEncoded(): boolean;
        set requestHeaderEncoded(newValue: boolean);
        get requestHeaderPartEncoding(): PartEncoding | null;
        set requestHeaderPartEncoding(newValue: PartEncoding | null);
        get requestBodyEncoded(): boolean;
        set requestBodyEncoded(newValue: boolean);
        get requestBodyElementName(): string;
        set requestBodyElementName(newValue: string);
        get requestBodyPartEncodings(): internal.IList<PartEncoding>;
        get responseBodyElementName(): string;
        set responseBodyElementName(newValue: string);
        /**
         * In version 6.1.0: deleted
         */
        get allowSimpleMappingInheritance(): boolean;
        set allowSimpleMappingInheritance(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new OperationInfo instance in the SDK and on the server.
         * The new OperationInfo will be automatically stored in the 'operations' property
         * of the parent ServiceInfo element passed as argument.
         */
        static createIn(container: ServiceInfo): OperationInfo;
        /**
         * Creates and returns a new OperationInfo instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): OperationInfo;
    }
    class PartEncoding extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsOperationInfo(): OperationInfo;
        get partName(): string;
        set partName(newValue: string);
        get partXsdType(): string;
        set partXsdType(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new PartEncoding instance in the SDK and on the server.
         * The new PartEncoding will be automatically stored in the 'requestBodyPartEncodings' property
         * of the parent OperationInfo element passed as argument.
         */
        static createInOperationInfoUnderRequestBodyPartEncodings(container: OperationInfo): PartEncoding;
        /**
         * Creates and returns a new PartEncoding instance in the SDK and on the server.
         * The new PartEncoding will be automatically stored in the 'requestHeaderPartEncoding' property
         * of the parent OperationInfo element passed as argument.
         */
        static createInOperationInfoUnderRequestHeaderPartEncoding(container: OperationInfo): PartEncoding;
        /**
         * Creates and returns a new PartEncoding instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): PartEncoding;
    }
    interface IPublishedServiceBase extends projects.IDocument {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        asLoaded(): PublishedServiceBase;
        load(callback: (element: PublishedServiceBase) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<PublishedServiceBase>;
    }
    abstract class PublishedServiceBase extends projects.Document implements IPublishedServiceBase {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFolderBase(): projects.FolderBase;
        get versionedServices(): internal.IList<VersionedService>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
    }
    /**
     * See: {@link https://docs.mendix.com/refguide8/published-app-services relevant section in reference guide}
     *
     * In version 9.0.2: deleted
     */
    interface IPublishedAppService extends IPublishedServiceBase {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        asLoaded(): PublishedAppService;
        load(callback: (element: PublishedAppService) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<PublishedAppService>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide8/published-app-services relevant section in reference guide}
     *
     * In version 9.0.2: deleted
     */
    class PublishedAppService extends PublishedServiceBase implements IPublishedAppService {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFolderBase(): projects.FolderBase;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
        /**
         * Creates a new PublishedAppService unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container: projects.IFolderBase): PublishedAppService;
    }
    abstract class PublishedResource extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsPublishedODataService(): rest.PublishedODataService;
        get containerAsVersionedService(): VersionedService;
        get dataEntity(): DataEntity;
        set dataEntity(newValue: DataEntity);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    class PublishedOperation extends PublishedResource {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsVersionedService(): VersionedService;
        /**
         * In version 9.0.2: deleted
         */
        get isLockedByContract(): boolean;
        set isLockedByContract(newValue: boolean);
        get name(): string;
        set name(newValue: string);
        get image(): images.IImage | null;
        set image(newValue: images.IImage | null);
        get imageQualifiedName(): string | null;
        get description(): string;
        set description(newValue: string);
        get documentation(): string;
        set documentation(newValue: string);
        get microflow(): microflows.IMicroflow | null;
        set microflow(newValue: microflows.IMicroflow | null);
        get microflowQualifiedName(): string | null;
        get parameters(): internal.IList<PublishedParameter>;
        /**
         * In version 9.0.2: deleted
         */
        get returnTypeNameByContract(): string;
        set returnTypeNameByContract(newValue: string);
        /**
         * In version 9.0.2: deleted
         */
        get returnTypeSpecificationByContract(): string;
        set returnTypeSpecificationByContract(newValue: string);
        /**
         * In version 9.0.2: deleted
         */
        get entityExposedNameByContract(): string;
        set entityExposedNameByContract(newValue: string);
        get entityExposedName(): string;
        set entityExposedName(newValue: string);
        /**
         * The value of this property is conceptually of type dataTypes.LegacyDataType.
         *
         * In version 7.9.0: deleted
         */
        get returnType(): string;
        set returnType(newValue: string);
        /**
         * In version 7.9.0: introduced
         */
        get operationReturnType(): datatypes.DataType;
        set operationReturnType(newValue: datatypes.DataType);
        get returnTypeIsOptional(): boolean;
        set returnTypeIsOptional(newValue: boolean);
        get returnTypeIsNillable(): boolean;
        set returnTypeIsNillable(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new PublishedOperation instance in the SDK and on the server.
         * The new PublishedOperation will be automatically stored in the 'operations' property
         * of the parent VersionedService element passed as argument.
         */
        static createIn(container: VersionedService): PublishedOperation;
        /**
         * Creates and returns a new PublishedOperation instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): PublishedOperation;
    }
    class PublishedParameter extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsPublishedOperation(): PublishedOperation;
        /**
         * In version 9.0.2: deleted
         */
        get isLockedByContract(): boolean;
        set isLockedByContract(newValue: boolean);
        get parameter(): microflows.IMicroflowParameter | null;
        set parameter(newValue: microflows.IMicroflowParameter | null);
        get parameterQualifiedName(): string | null;
        /**
         * In version 9.0.2: deleted
         */
        get parameterByContract(): appservices.MsdMicroflowParameter;
        set parameterByContract(newValue: appservices.MsdMicroflowParameter);
        get entityExposedName(): string;
        set entityExposedName(newValue: string);
        /**
         * In version 9.0.2: deleted
         */
        get isOptionalByContract(): boolean;
        set isOptionalByContract(newValue: boolean);
        get isOptional(): boolean;
        set isOptional(newValue: boolean);
        get isNillable(): boolean;
        set isNillable(newValue: boolean);
        /**
         * In version 9.0.2: deleted
         */
        get entityExposedItemNameByContract(): string;
        set entityExposedItemNameByContract(newValue: string);
        get entityExposedItemName(): string;
        set entityExposedItemName(newValue: string);
        /**
         * The value of this property is conceptually of type dataTypes.LegacyDataType.
         *
         * In version 7.9.0: deleted
         */
        get type(): string;
        set type(newValue: string);
        /**
         * In version 7.9.0: introduced
         */
        get parameterType(): datatypes.DataType;
        set parameterType(newValue: datatypes.DataType);
        get dataEntity(): DataEntity;
        set dataEntity(newValue: DataEntity);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new PublishedParameter instance in the SDK and on the server.
         * The new PublishedParameter will be automatically stored in the 'parameters' property
         * of the parent PublishedOperation element passed as argument.
         */
        static createIn(container: PublishedOperation): PublishedParameter;
        /**
         * Creates and returns a new PublishedParameter instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): PublishedParameter;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/published-web-services relevant section in reference guide}
     */
    interface IPublishedWebService extends IPublishedServiceBase {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        asLoaded(): PublishedWebService;
        load(callback: (element: PublishedWebService) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<PublishedWebService>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/published-web-services relevant section in reference guide}
     */
    class PublishedWebService extends PublishedServiceBase implements IPublishedWebService {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFolderBase(): projects.FolderBase;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
        /**
         * Creates a new PublishedWebService unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container: projects.IFolderBase): PublishedWebService;
    }
    class RpcMessagePartElement extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsRpcOperationElement(): RpcOperationElement;
        get partName(): string;
        set partName(newValue: string);
        get typeName(): string;
        set typeName(newValue: string);
        get elementName(): string;
        set elementName(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new RpcMessagePartElement instance in the SDK and on the server.
         * The new RpcMessagePartElement will be automatically stored in the 'messagePartElements' property
         * of the parent RpcOperationElement element passed as argument.
         */
        static createIn(container: RpcOperationElement): RpcMessagePartElement;
        /**
         * Creates and returns a new RpcMessagePartElement instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): RpcMessagePartElement;
    }
    class RpcOperationElement extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsOperationInfo(): OperationInfo;
        get name(): string;
        set name(newValue: string);
        get messagePartElements(): internal.IList<RpcMessagePartElement>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new RpcOperationElement instance in the SDK and on the server.
         * The new RpcOperationElement will be automatically stored in the 'requestBodyRpcElement' property
         * of the parent OperationInfo element passed as argument.
         */
        static createInOperationInfoUnderRequestBodyRpcElement(container: OperationInfo): RpcOperationElement;
        /**
         * Creates and returns a new RpcOperationElement instance in the SDK and on the server.
         * The new RpcOperationElement will be automatically stored in the 'requestHeaderRpcElement' property
         * of the parent OperationInfo element passed as argument.
         */
        static createInOperationInfoUnderRequestHeaderRpcElement(container: OperationInfo): RpcOperationElement;
        /**
         * Creates and returns a new RpcOperationElement instance in the SDK and on the server.
         * The new RpcOperationElement will be automatically stored in the 'responseBodyRpcElement' property
         * of the parent OperationInfo element passed as argument.
         */
        static createInOperationInfoUnderResponseBodyRpcElement(container: OperationInfo): RpcOperationElement;
        /**
         * Creates and returns a new RpcOperationElement instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): RpcOperationElement;
    }
    class ServiceInfo extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsWsdlDescription(): WsdlDescription;
        get name(): string;
        set name(newValue: string);
        get documentation(): string;
        set documentation(newValue: string);
        get portName(): string;
        set portName(newValue: string);
        get location(): string;
        set location(newValue: string);
        get soapVersion(): SoapVersion;
        set soapVersion(newValue: SoapVersion);
        get locationConstant(): constants.IConstant | null;
        set locationConstant(newValue: constants.IConstant | null);
        get locationConstantQualifiedName(): string | null;
        get operations(): internal.IList<OperationInfo>;
        /**
         * In version 8.16.0: introduced
         */
        get usingAddressing(): boolean;
        set usingAddressing(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ServiceInfo instance in the SDK and on the server.
         * The new ServiceInfo will be automatically stored in the 'services' property
         * of the parent WsdlDescription element passed as argument.
         */
        static createIn(container: WsdlDescription): ServiceInfo;
        /**
         * Creates and returns a new ServiceInfo instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ServiceInfo;
    }
    /**
     * In version 6.7.0: introduced
     */
    class SystemIdDataAttribute extends DataMember {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsDataEntityBase(): DataEntityBase;
        get entity(): domainmodels.IEntity | null;
        set entity(newValue: domainmodels.IEntity | null);
        get entityQualifiedName(): string | null;
        /**
         * In version 8.5.0: introduced
         */
        get summary(): string;
        set summary(newValue: string);
        /**
         * In version 8.5.0: introduced
         */
        get description(): string;
        set description(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new SystemIdDataAttribute instance in the SDK and on the server.
         * The new SystemIdDataAttribute will be automatically stored in the 'childMembers' property
         * of the parent DataEntityBase element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.7.0 and higher
         */
        static createIn(container: DataEntityBase): SystemIdDataAttribute;
        /**
         * Creates and returns a new SystemIdDataAttribute instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): SystemIdDataAttribute;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/published-web-services relevant section in reference guide}
     */
    class VersionedService extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsPublishedServiceBase(): PublishedServiceBase;
        get documentation(): string;
        set documentation(newValue: string);
        get targetNamespace(): string;
        set targetNamespace(newValue: string);
        get headerAuthentication(): HeaderAuthentication;
        set headerAuthentication(newValue: HeaderAuthentication);
        get operations(): internal.IList<PublishedOperation>;
        /**
         * In version 9.0.2: deleted
         */
        get isLockedByContract(): boolean;
        set isLockedByContract(newValue: boolean);
        /**
         * In version 9.0.2: deleted
         */
        get enumerationsByContract(): appservices.MsdEnumerationContainer | null;
        set enumerationsByContract(newValue: appservices.MsdEnumerationContainer | null);
        /**
         * In version 7.13.0: introduced
         */
        get optimizedXml(): boolean;
        set optimizedXml(newValue: boolean);
        get headerImportMapping(): importmappings.IImportMapping | null;
        set headerImportMapping(newValue: importmappings.IImportMapping | null);
        get headerImportMappingQualifiedName(): string | null;
        /**
         * In version 7.17.0: introduced
         */
        get objectHandlingBackup(): mappings.ObjectHandlingBackupEnum;
        set objectHandlingBackup(newValue: mappings.ObjectHandlingBackupEnum);
        get headerMicroflow(): microflows.IMicroflow | null;
        set headerMicroflow(newValue: microflows.IMicroflow | null);
        get headerMicroflowQualifiedName(): string | null;
        get versionNumber(): number;
        set versionNumber(newValue: number);
        get caption(): string;
        set caption(newValue: string);
        get description(): string;
        set description(newValue: string);
        /**
         * In version 9.0.2: deleted
         */
        get appServiceState(): AppServiceState;
        set appServiceState(newValue: AppServiceState);
        get image(): images.IImage | null;
        set image(newValue: images.IImage | null);
        get imageQualifiedName(): string | null;
        get validate(): boolean;
        set validate(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new VersionedService instance in the SDK and on the server.
         * The new VersionedService will be automatically stored in the 'versionedServices' property
         * of the parent PublishedServiceBase element passed as argument.
         */
        static createIn(container: PublishedServiceBase): VersionedService;
        /**
         * Creates and returns a new VersionedService instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): VersionedService;
    }
    class WsdlDescription extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsMsd(): appservices.Msd;
        get containerAsImportedWebService(): ImportedWebService;
        get wsdlEntries(): internal.IList<WsdlEntry>;
        get schemaEntries(): internal.IList<xmlschemas.XmlSchemaEntry>;
        get services(): internal.IList<ServiceInfo>;
        get targetNamespace(): string;
        set targetNamespace(newValue: string);
        get importsHaveLocations(): boolean;
        set importsHaveLocations(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new WsdlDescription instance in the SDK and on the server.
         * The new WsdlDescription will be automatically stored in the 'wsdlDescription' property
         * of the parent ImportedWebService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.2 and higher
         */
        static createIn(container: ImportedWebService): WsdlDescription;
        /**
         * Creates and returns a new WsdlDescription instance in the SDK and on the server.
         * The new WsdlDescription will be automatically stored in the 'wsdlDescription' property
         * of the parent appservices.Msd element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 9.0.1
         */
        static createInMsdUnderWsdlDescription(container: appservices.Msd): WsdlDescription;
        /**
         * Creates and returns a new WsdlDescription instance in the SDK and on the server.
         * The new WsdlDescription will be automatically stored in the 'wsdlDescription' property
         * of the parent ImportedWebService element passed as argument.
         */
        static createInImportedWebServiceUnderWsdlDescription(container: ImportedWebService): WsdlDescription;
        /**
         * Creates and returns a new WsdlDescription instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): WsdlDescription;
    }
    class WsdlEntry extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsWsdlDescription(): WsdlDescription;
        get location(): string;
        set location(newValue: string);
        get contents(): string;
        set contents(newValue: string);
        get localizedLocationFormat(): string;
        set localizedLocationFormat(newValue: string);
        get localizedContentsFormat(): string;
        set localizedContentsFormat(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new WsdlEntry instance in the SDK and on the server.
         * The new WsdlEntry will be automatically stored in the 'wsdlEntries' property
         * of the parent WsdlDescription element passed as argument.
         */
        static createIn(container: WsdlDescription): WsdlEntry;
        /**
         * Creates and returns a new WsdlEntry instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): WsdlEntry;
    }
}
import { appservices } from "./appservices";
import { constants } from "./constants";
import { datatypes } from "./datatypes";
import { domainmodels } from "./domainmodels";
import { images } from "./images";
import { importmappings } from "./importmappings";
import { mappings } from "./mappings";
import { microflows } from "./microflows";
import { rest } from "./rest";
import { xmlschemas } from "./xmlschemas";
import { IModel } from "./base-model";
