import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
import { domainmodels } from "./domainmodels";
import { projects } from "./projects";
export declare namespace kafka {
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `Kafka`.
     */
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 8.11.0: introduced
     */
    interface IConsumedKafkaService extends domainmodels.IRemoteEntitySourceDocument {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        asLoaded(): ConsumedKafkaService;
        load(callback: (element: ConsumedKafkaService) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ConsumedKafkaService>;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 8.11.0: introduced
     */
    class ConsumedKafkaService extends domainmodels.RemoteEntitySourceDocument implements IConsumedKafkaService {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFolderBase(): projects.FolderBase;
        get metadataReferences(): internal.IList<rest.MetadataReference>;
        /**
         * In version 8.14.0: deleted
         */
        get serviceId(): string;
        set serviceId(newValue: string);
        /**
         * In version 8.12.0: introduced
         */
        get serviceFeed(): string;
        set serviceFeed(newValue: string);
        get brokerUrl(): constants.IConstant | null;
        set brokerUrl(newValue: constants.IConstant | null);
        get brokerUrlQualifiedName(): string | null;
        get brokerUsername(): constants.IConstant | null;
        set brokerUsername(newValue: constants.IConstant | null);
        get brokerUsernameQualifiedName(): string | null;
        get brokerPassword(): constants.IConstant | null;
        set brokerPassword(newValue: constants.IConstant | null);
        get brokerPasswordQualifiedName(): string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
        /**
         * Creates a new ConsumedKafkaService unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container: projects.IFolderBase): ConsumedKafkaService;
    }
    /**
     * In version 8.11.0: introduced
     */
    interface IKafkaMappedValue extends domainmodels.ICachedMappedValue {
        readonly model: IModel;
        readonly containerAsAttribute: domainmodels.IAttribute;
        asLoaded(): KafkaMappedValue;
        load(callback: (element: KafkaMappedValue) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<KafkaMappedValue>;
    }
    /**
     * In version 8.11.0: introduced
     */
    class KafkaMappedValue extends domainmodels.CachedMappedValue implements IKafkaMappedValue {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsAttribute(): domainmodels.Attribute;
        get remoteName(): string;
        set remoteName(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new KafkaMappedValue instance in the SDK and on the server.
         * The new KafkaMappedValue will be automatically stored in the 'value' property
         * of the parent domainmodels.Attribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.2 and higher
         */
        static createIn(container: domainmodels.Attribute): KafkaMappedValue;
        /**
         * Creates and returns a new KafkaMappedValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): KafkaMappedValue;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 8.11.0: introduced
     */
    interface IKafkaRemoteEntitySource extends domainmodels.IMaterializedRemoteEntitySource {
        readonly model: IModel;
        readonly containerAsEntity: domainmodels.IEntity;
        asLoaded(): KafkaRemoteEntitySource;
        load(callback: (element: KafkaRemoteEntitySource) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<KafkaRemoteEntitySource>;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 8.11.0: introduced
     */
    class KafkaRemoteEntitySource extends domainmodels.MaterializedRemoteEntitySource implements IKafkaRemoteEntitySource {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsEntity(): domainmodels.Entity;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get sourceDocument(): IConsumedKafkaService | null;
        set sourceDocument(newValue: IConsumedKafkaService | null);
        get sourceDocumentQualifiedName(): string | null;
        get remoteName(): string;
        set remoteName(newValue: string);
        /**
         * In version 8.12.0: introduced
         */
        get topicName(): string;
        set topicName(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new KafkaRemoteEntitySource instance in the SDK and on the server.
         * The new KafkaRemoteEntitySource will be automatically stored in the 'source' property
         * of the parent domainmodels.Entity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.11.0 and higher
         */
        static createIn(container: domainmodels.Entity): KafkaRemoteEntitySource;
        /**
         * Creates and returns a new KafkaRemoteEntitySource instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): KafkaRemoteEntitySource;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 8.14.0: introduced
     */
    class PublishedKafkaResource extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsPublishedKafkaService(): PublishedKafkaService;
        get entity(): domainmodels.IEntity;
        set entity(newValue: domainmodels.IEntity);
        get entityQualifiedName(): string;
        get exposedName(): string;
        set exposedName(newValue: string);
        /**
         * In version 9.0.3: deleted
         */
        get topicName(): string;
        set topicName(newValue: string);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.0.1: introduced
         */
        get attributes(): internal.IList<PublishedKafkaResourceAttribute>;
        get summary(): string;
        set summary(newValue: string);
        get description(): string;
        set description(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new PublishedKafkaResource instance in the SDK and on the server.
         * The new PublishedKafkaResource will be automatically stored in the 'resources' property
         * of the parent PublishedKafkaService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.14.0 and higher
         */
        static createIn(container: PublishedKafkaService): PublishedKafkaResource;
        /**
         * Creates and returns a new PublishedKafkaResource instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): PublishedKafkaResource;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.0.1: introduced
     */
    class PublishedKafkaResourceAttribute extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsPublishedKafkaResource(): PublishedKafkaResource;
        get attribute(): domainmodels.IAttribute;
        set attribute(newValue: domainmodels.IAttribute);
        get attributeQualifiedName(): string;
        /**
         * In version 9.0.2: introduced
         */
        get exposedName(): string;
        set exposedName(newValue: string);
        get summary(): string;
        set summary(newValue: string);
        get description(): string;
        set description(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new PublishedKafkaResourceAttribute instance in the SDK and on the server.
         * The new PublishedKafkaResourceAttribute will be automatically stored in the 'attributes' property
         * of the parent PublishedKafkaResource element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.1 and higher
         */
        static createIn(container: PublishedKafkaResource): PublishedKafkaResourceAttribute;
        /**
         * Creates and returns a new PublishedKafkaResourceAttribute instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): PublishedKafkaResourceAttribute;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 8.14.0: introduced
     */
    interface IPublishedKafkaService extends projects.IDocument {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        asLoaded(): PublishedKafkaService;
        load(callback: (element: PublishedKafkaService) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<PublishedKafkaService>;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 8.14.0: introduced
     */
    class PublishedKafkaService extends projects.Document implements IPublishedKafkaService {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFolderBase(): projects.FolderBase;
        get namespace(): string;
        set namespace(newValue: string);
        get serviceFeed(): string;
        set serviceFeed(newValue: string);
        get metadata(): string;
        set metadata(newValue: string);
        get serviceName(): string;
        set serviceName(newValue: string);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get resources(): internal.IList<PublishedKafkaResource>;
        get version(): string;
        set version(newValue: string);
        get summary(): string;
        set summary(newValue: string);
        get description(): string;
        set description(newValue: string);
        /**
         * In version 9.0.1: added optional
         */
        get brokerUrl(): constants.IConstant | null;
        set brokerUrl(newValue: constants.IConstant | null);
        get brokerUrlQualifiedName(): string | null;
        get brokerUsername(): constants.IConstant | null;
        set brokerUsername(newValue: constants.IConstant | null);
        get brokerUsernameQualifiedName(): string | null;
        get brokerPassword(): constants.IConstant | null;
        set brokerPassword(newValue: constants.IConstant | null);
        get brokerPasswordQualifiedName(): string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
        /**
         * Creates a new PublishedKafkaService unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container: projects.IFolderBase): PublishedKafkaService;
    }
}
import { constants } from "./constants";
import { rest } from "./rest";
import { IModel } from "./base-model";
