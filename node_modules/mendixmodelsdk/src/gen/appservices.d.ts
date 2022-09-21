import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
import { projects } from "./projects";
export declare namespace appservices {
    class AppServiceLocationEnum extends internal.AbstractEnum {
        static Default: AppServiceLocationEnum;
        static Constant: AppServiceLocationEnum;
        static Parameter: AppServiceLocationEnum;
        protected qualifiedTsTypeName: string;
    }
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `AppServices`.
     */
    /**
     * In version 9.0.2: deleted
     */
    interface IAppServiceAction extends internal.IElement, internal.IByNameReferrable {
        readonly model: IModel;
        readonly containerAsConsumedAppService: IConsumedAppService;
        readonly name: string;
        readonly parameters: internal.IList<IAppServiceActionParameter>;
        asLoaded(): AppServiceAction;
        load(callback: (element: AppServiceAction) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<AppServiceAction>;
    }
    /**
     * In version 9.0.2: deleted
     */
    class AppServiceAction extends internal.Element<IModel> implements IAppServiceAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsConsumedAppService(): ConsumedAppService;
        get name(): string;
        set name(newValue: string);
        get caption(): string;
        set caption(newValue: string);
        get description(): string;
        set description(newValue: string);
        get parameters(): internal.IList<AppServiceActionParameter>;
        get microflow(): microflows.IMicroflow | null;
        set microflow(newValue: microflows.IMicroflow | null);
        get microflowQualifiedName(): string | null;
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
        get actionReturnType(): datatypes.DataType;
        set actionReturnType(newValue: datatypes.DataType);
        get returnTypeCanBeEmpty(): boolean;
        set returnTypeCanBeEmpty(newValue: boolean);
        get image(): string;
        set image(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new AppServiceAction instance in the SDK and on the server.
         * The new AppServiceAction will be automatically stored in the 'actions' property
         * of the parent ConsumedAppService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 9.0.1
         */
        static createIn(container: ConsumedAppService): AppServiceAction;
        /**
         * Creates and returns a new AppServiceAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): AppServiceAction;
        get qualifiedName(): string | null;
    }
    /**
     * In version 9.0.2: deleted
     */
    interface IAppServiceActionParameter extends internal.IElement, internal.IByNameReferrable {
        readonly model: IModel;
        readonly containerAsAppServiceAction: IAppServiceAction;
        readonly name: string;
        asLoaded(): AppServiceActionParameter;
        load(callback: (element: AppServiceActionParameter) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<AppServiceActionParameter>;
    }
    /**
     * In version 9.0.2: deleted
     */
    class AppServiceActionParameter extends internal.Element<IModel> implements IAppServiceActionParameter {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsAppServiceAction(): AppServiceAction;
        get name(): string;
        set name(newValue: string);
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
        get canBeEmpty(): boolean;
        set canBeEmpty(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new AppServiceActionParameter instance in the SDK and on the server.
         * The new AppServiceActionParameter will be automatically stored in the 'parameters' property
         * of the parent AppServiceAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 9.0.1
         */
        static createIn(container: AppServiceAction): AppServiceActionParameter;
        /**
         * Creates and returns a new AppServiceActionParameter instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): AppServiceActionParameter;
        get qualifiedName(): string | null;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide8/consumed-app-services relevant section in reference guide}
     *
     * In version 9.0.2: deleted
     */
    interface IConsumedAppService extends projects.IDocument {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        readonly actions: internal.IList<IAppServiceAction>;
        asLoaded(): ConsumedAppService;
        load(callback: (element: ConsumedAppService) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ConsumedAppService>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide8/consumed-app-services relevant section in reference guide}
     *
     * In version 9.0.2: deleted
     */
    class ConsumedAppService extends projects.Document implements IConsumedAppService {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFolderBase(): projects.FolderBase;
        get actions(): internal.IList<AppServiceAction>;
        get msd(): Msd;
        set msd(newValue: Msd);
        get fromAppStore(): boolean;
        set fromAppStore(newValue: boolean);
        get appStoreGuid(): string;
        set appStoreGuid(newValue: string);
        get appStoreVersionGuid(): string;
        set appStoreVersionGuid(newValue: string);
        get appStoreVersion(): string;
        set appStoreVersion(newValue: string);
        get appServiceLocation(): AppServiceLocationEnum;
        set appServiceLocation(newValue: AppServiceLocationEnum);
        get locationConstant(): constants.IConstant | null;
        set locationConstant(newValue: constants.IConstant | null);
        get locationConstantQualifiedName(): string | null;
        get useTimeOut(): boolean;
        set useTimeOut(newValue: boolean);
        get timeOut(): number;
        set timeOut(newValue: number);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
        /**
         * Creates a new ConsumedAppService unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container: projects.IFolderBase): ConsumedAppService;
    }
    /**
     * In version 9.0.2: deleted
     */
    class Msd extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsConsumedAppService(): ConsumedAppService;
        get version(): MsdVersion;
        set version(newValue: MsdVersion);
        get metadata(): MsdMetadata;
        set metadata(newValue: MsdMetadata);
        get domainModel(): MsdDomainModel;
        set domainModel(newValue: MsdDomainModel);
        get enumerations(): MsdEnumerationContainer;
        set enumerations(newValue: MsdEnumerationContainer);
        get wsdlDescription(): webservices.WsdlDescription;
        set wsdlDescription(newValue: webservices.WsdlDescription);
        get wsdl(): string;
        set wsdl(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new Msd instance in the SDK and on the server.
         * The new Msd will be automatically stored in the 'msd' property
         * of the parent ConsumedAppService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 9.0.1
         */
        static createIn(container: ConsumedAppService): Msd;
        /**
         * Creates and returns a new Msd instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): Msd;
    }
    /**
     * In version 9.0.2: deleted
     */
    class MsdAssociation extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsMsdDomainModel(): MsdDomainModel;
        get containerAsDataAssociation(): webservices.DataAssociation;
        get name(): string;
        set name(newValue: string);
        get guid(): string;
        set guid(newValue: string);
        get parentEntityName(): string;
        set parentEntityName(newValue: string);
        get childEntityName(): string;
        set childEntityName(newValue: string);
        get associationType(): string;
        set associationType(newValue: string);
        get associationOwner(): string;
        set associationOwner(newValue: string);
        get parentDeleteBehavior(): string;
        set parentDeleteBehavior(newValue: string);
        get childDeleteBehavior(): string;
        set childDeleteBehavior(newValue: string);
        get associationKind(): string;
        set associationKind(newValue: string);
        get parentX(): number;
        set parentX(newValue: number);
        get parentY(): number;
        set parentY(newValue: number);
        get childX(): number;
        set childX(newValue: number);
        get childY(): number;
        set childY(newValue: number);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MsdAssociation instance in the SDK and on the server.
         * The new MsdAssociation will be automatically stored in the 'associations' property
         * of the parent MsdDomainModel element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 9.0.1
         */
        static createInMsdDomainModelUnderAssociations(container: MsdDomainModel): MsdAssociation;
        /**
         * Creates and returns a new MsdAssociation instance in the SDK and on the server.
         * The new MsdAssociation will be automatically stored in the 'associationByContract' property
         * of the parent webservices.DataAssociation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 9.0.1
         */
        static createInDataAssociationUnderAssociationByContract(container: webservices.DataAssociation): MsdAssociation;
        /**
         * Creates and returns a new MsdAssociation instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MsdAssociation;
    }
    /**
     * In version 9.0.2: deleted
     */
    class MsdAttribute extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsMsdEntity(): MsdEntity;
        get containerAsDataAttribute(): webservices.DataAttribute;
        get name(): string;
        set name(newValue: string);
        get guid(): string;
        set guid(newValue: string);
        get attributeType(): string;
        set attributeType(newValue: string);
        get enumerationName(): string;
        set enumerationName(newValue: string);
        get defaultValue(): string;
        set defaultValue(newValue: string);
        get length(): number;
        set length(newValue: number);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MsdAttribute instance in the SDK and on the server.
         * The new MsdAttribute will be automatically stored in the 'attributes' property
         * of the parent MsdEntity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 9.0.1
         */
        static createInMsdEntityUnderAttributes(container: MsdEntity): MsdAttribute;
        /**
         * Creates and returns a new MsdAttribute instance in the SDK and on the server.
         * The new MsdAttribute will be automatically stored in the 'attributeByContract' property
         * of the parent webservices.DataAttribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 9.0.1
         */
        static createInDataAttributeUnderAttributeByContract(container: webservices.DataAttribute): MsdAttribute;
        /**
         * Creates and returns a new MsdAttribute instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MsdAttribute;
    }
    /**
     * In version 9.0.2: deleted
     */
    class MsdDomainModel extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsMsd(): Msd;
        get entities(): internal.IList<MsdEntity>;
        get associations(): internal.IList<MsdAssociation>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MsdDomainModel instance in the SDK and on the server.
         * The new MsdDomainModel will be automatically stored in the 'domainModel' property
         * of the parent Msd element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 9.0.1
         */
        static createIn(container: Msd): MsdDomainModel;
        /**
         * Creates and returns a new MsdDomainModel instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MsdDomainModel;
    }
    /**
     * In version 9.0.2: deleted
     */
    class MsdEntity extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsMsdDomainModel(): MsdDomainModel;
        get name(): string;
        set name(newValue: string);
        get guid(): string;
        set guid(newValue: string);
        get generalizationName(): string;
        set generalizationName(newValue: string);
        get persistable(): boolean;
        set persistable(newValue: boolean);
        get locationX(): number;
        set locationX(newValue: number);
        get locationY(): number;
        set locationY(newValue: number);
        get attributes(): internal.IList<MsdAttribute>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MsdEntity instance in the SDK and on the server.
         * The new MsdEntity will be automatically stored in the 'entities' property
         * of the parent MsdDomainModel element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 9.0.1
         */
        static createIn(container: MsdDomainModel): MsdEntity;
        /**
         * Creates and returns a new MsdEntity instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MsdEntity;
    }
    /**
     * In version 9.0.2: deleted
     */
    class MsdEnumeration extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsMsdEnumerationContainer(): MsdEnumerationContainer;
        get name(): string;
        set name(newValue: string);
        get guid(): string;
        set guid(newValue: string);
        get values(): internal.IList<MsdEnumerationValue>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MsdEnumeration instance in the SDK and on the server.
         * The new MsdEnumeration will be automatically stored in the 'enumerations' property
         * of the parent MsdEnumerationContainer element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 9.0.1
         */
        static createIn(container: MsdEnumerationContainer): MsdEnumeration;
        /**
         * Creates and returns a new MsdEnumeration instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MsdEnumeration;
    }
    /**
     * In version 9.0.2: deleted
     */
    class MsdEnumerationContainer extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsMsd(): Msd;
        get containerAsVersionedService(): webservices.VersionedService;
        get enumerations(): internal.IList<MsdEnumeration>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MsdEnumerationContainer instance in the SDK and on the server.
         * The new MsdEnumerationContainer will be automatically stored in the 'enumerations' property
         * of the parent Msd element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 9.0.1
         */
        static createInMsdUnderEnumerations(container: Msd): MsdEnumerationContainer;
        /**
         * Creates and returns a new MsdEnumerationContainer instance in the SDK and on the server.
         * The new MsdEnumerationContainer will be automatically stored in the 'enumerationsByContract' property
         * of the parent webservices.VersionedService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 9.0.1
         */
        static createInVersionedServiceUnderEnumerationsByContract(container: webservices.VersionedService): MsdEnumerationContainer;
        /**
         * Creates and returns a new MsdEnumerationContainer instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MsdEnumerationContainer;
    }
    /**
     * In version 9.0.2: deleted
     */
    class MsdEnumerationValue extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsMsdEnumeration(): MsdEnumeration;
        get name(): string;
        set name(newValue: string);
        get guid(): string;
        set guid(newValue: string);
        get translations(): internal.IList<MsdText>;
        get image(): string;
        set image(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MsdEnumerationValue instance in the SDK and on the server.
         * The new MsdEnumerationValue will be automatically stored in the 'values' property
         * of the parent MsdEnumeration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 9.0.1
         */
        static createIn(container: MsdEnumeration): MsdEnumerationValue;
        /**
         * Creates and returns a new MsdEnumerationValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MsdEnumerationValue;
    }
    /**
     * In version 9.0.2: deleted
     */
    class MsdMetadata extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsMsd(): Msd;
        get name(): string;
        set name(newValue: string);
        get documentation(): string;
        set documentation(newValue: string);
        get version(): number;
        set version(newValue: number);
        get publishDateTime(): string;
        set publishDateTime(newValue: string);
        get serviceGuid(): string;
        set serviceGuid(newValue: string);
        get versionGuid(): string;
        set versionGuid(newValue: string);
        get instanceGuid(): string;
        set instanceGuid(newValue: string);
        get supportedProtocols(): internal.IList<string>;
        get headerAuthentication(): string;
        set headerAuthentication(newValue: string);
        get microflows(): internal.IList<MsdMicroflow>;
        get caption(): string;
        set caption(newValue: string);
        get image(): string;
        set image(newValue: string);
        get description(): string;
        set description(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MsdMetadata instance in the SDK and on the server.
         * The new MsdMetadata will be automatically stored in the 'metadata' property
         * of the parent Msd element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 9.0.1
         */
        static createIn(container: Msd): MsdMetadata;
        /**
         * Creates and returns a new MsdMetadata instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MsdMetadata;
    }
    /**
     * In version 9.0.2: deleted
     */
    class MsdMicroflow extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsMsdMetadata(): MsdMetadata;
        get name(): string;
        set name(newValue: string);
        get documentation(): string;
        set documentation(newValue: string);
        get image(): string;
        set image(newValue: string);
        get description(): string;
        set description(newValue: string);
        get parameters(): internal.IList<MsdMicroflowParameter>;
        get returnType(): string;
        set returnType(newValue: string);
        /**
         * In version 6.1.0: deleted
         */
        get systemEntityType(): string;
        set systemEntityType(newValue: string);
        get returnTypeSpecification(): string;
        set returnTypeSpecification(newValue: string);
        get returnTypeCanBeEmpty(): boolean;
        set returnTypeCanBeEmpty(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MsdMicroflow instance in the SDK and on the server.
         * The new MsdMicroflow will be automatically stored in the 'microflows' property
         * of the parent MsdMetadata element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 9.0.1
         */
        static createIn(container: MsdMetadata): MsdMicroflow;
        /**
         * Creates and returns a new MsdMicroflow instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MsdMicroflow;
    }
    /**
     * In version 9.0.2: deleted
     */
    class MsdMicroflowParameter extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsMsdMicroflow(): MsdMicroflow;
        get containerAsPublishedParameter(): webservices.PublishedParameter;
        get name(): string;
        set name(newValue: string);
        get type(): string;
        set type(newValue: string);
        get typeSpecification(): string;
        set typeSpecification(newValue: string);
        /**
         * In version 6.1.0: deleted
         */
        get systemEntityType(): string;
        set systemEntityType(newValue: string);
        get canBeEmpty(): boolean;
        set canBeEmpty(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MsdMicroflowParameter instance in the SDK and on the server.
         * The new MsdMicroflowParameter will be automatically stored in the 'parameters' property
         * of the parent MsdMicroflow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 9.0.1
         */
        static createInMsdMicroflowUnderParameters(container: MsdMicroflow): MsdMicroflowParameter;
        /**
         * Creates and returns a new MsdMicroflowParameter instance in the SDK and on the server.
         * The new MsdMicroflowParameter will be automatically stored in the 'parameterByContract' property
         * of the parent webservices.PublishedParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 9.0.1
         */
        static createInPublishedParameterUnderParameterByContract(container: webservices.PublishedParameter): MsdMicroflowParameter;
        /**
         * Creates and returns a new MsdMicroflowParameter instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MsdMicroflowParameter;
    }
    /**
     * In version 9.0.2: deleted
     */
    class MsdText extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsMsdEnumerationValue(): MsdEnumerationValue;
        get languageCode(): string;
        set languageCode(newValue: string);
        get caption(): string;
        set caption(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MsdText instance in the SDK and on the server.
         * The new MsdText will be automatically stored in the 'translations' property
         * of the parent MsdEnumerationValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 9.0.1
         */
        static createIn(container: MsdEnumerationValue): MsdText;
        /**
         * Creates and returns a new MsdText instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MsdText;
    }
    /**
     * In version 9.0.2: deleted
     */
    class MsdVersion extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsMsd(): Msd;
        get version(): number;
        set version(newValue: number);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MsdVersion instance in the SDK and on the server.
         * The new MsdVersion will be automatically stored in the 'version' property
         * of the parent Msd element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 9.0.1
         */
        static createIn(container: Msd): MsdVersion;
        /**
         * Creates and returns a new MsdVersion instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MsdVersion;
    }
}
import { constants } from "./constants";
import { datatypes } from "./datatypes";
import { microflows } from "./microflows";
import { webservices } from "./webservices";
import { IModel } from "./base-model";
