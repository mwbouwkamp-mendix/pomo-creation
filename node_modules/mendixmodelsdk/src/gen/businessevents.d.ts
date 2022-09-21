import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
import { projects } from "./projects";
/**
 * @ignore
 */
export declare namespace businessevents {
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `BusinessEvents`.
     */
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.11.0: introduced
     */
    class ConsumedBusinessEvent extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsConsumedBusinessEventService(): ConsumedBusinessEventService;
        get eventName(): string;
        set eventName(newValue: string);
        /**
         * In version 9.13.0: introduced
         */
        get channelId(): string;
        set channelId(newValue: string);
        get entity(): domainmodels.IEntity;
        set entity(newValue: domainmodels.IEntity);
        get entityQualifiedName(): string;
        get microflow(): microflows.IMicroflow;
        set microflow(newValue: microflows.IMicroflow);
        get microflowQualifiedName(): string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ConsumedBusinessEvent instance in the SDK and on the server.
         * The new ConsumedBusinessEvent will be automatically stored in the 'businessEvents' property
         * of the parent ConsumedBusinessEventService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.11.0 and higher
         */
        static createIn(container: ConsumedBusinessEventService): ConsumedBusinessEvent;
        /**
         * Creates and returns a new ConsumedBusinessEvent instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ConsumedBusinessEvent;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.8.0: introduced
     */
    interface IConsumedBusinessEventService extends projects.IDocument {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        asLoaded(): ConsumedBusinessEventService;
        load(callback: (element: ConsumedBusinessEventService) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ConsumedBusinessEventService>;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.8.0: introduced
     */
    class ConsumedBusinessEventService extends projects.Document implements IConsumedBusinessEventService {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFolderBase(): projects.FolderBase;
        /**
         * In version 9.11.0: introduced
         */
        get version(): string;
        set version(newValue: string);
        /**
         * In version 9.11.0: introduced
         */
        get contract(): string;
        set contract(newValue: string);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.11.0: introduced
         */
        get businessEvents(): internal.IList<ConsumedBusinessEvent>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
        /**
         * Creates a new ConsumedBusinessEventService unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container: projects.IFolderBase): ConsumedBusinessEventService;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.11.0: introduced
     */
    interface IPublishedBusinessEventService extends projects.IDocument {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        asLoaded(): PublishedBusinessEventService;
        load(callback: (element: PublishedBusinessEventService) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<PublishedBusinessEventService>;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.11.0: introduced
     */
    class PublishedBusinessEventService extends projects.Document implements IPublishedBusinessEventService {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFolderBase(): projects.FolderBase;
        get serviceName(): string;
        set serviceName(newValue: string);
        /**
         * In version 9.13.0: introduced
         */
        get eventNamePrefix(): string;
        set eventNamePrefix(newValue: string);
        get version(): string;
        set version(newValue: string);
        get description(): string;
        set description(newValue: string);
        get summary(): string;
        set summary(newValue: string);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get channels(): internal.IList<PublishedChannel>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
        /**
         * Creates a new PublishedBusinessEventService unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container: projects.IFolderBase): PublishedBusinessEventService;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.11.0: introduced
     */
    class PublishedChannel extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsPublishedBusinessEventService(): PublishedBusinessEventService;
        get channelId(): string;
        set channelId(newValue: string);
        get channelName(): string;
        set channelName(newValue: string);
        get description(): string;
        set description(newValue: string);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get messages(): internal.IList<PublishedMessage>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new PublishedChannel instance in the SDK and on the server.
         * The new PublishedChannel will be automatically stored in the 'channels' property
         * of the parent PublishedBusinessEventService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.11.0 and higher
         */
        static createIn(container: PublishedBusinessEventService): PublishedChannel;
        /**
         * Creates and returns a new PublishedChannel instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): PublishedChannel;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.11.0: introduced
     */
    class PublishedMessage extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsPublishedChannel(): PublishedChannel;
        get entity(): domainmodels.IEntity;
        set entity(newValue: domainmodels.IEntity);
        get entityQualifiedName(): string;
        /**
         * In version 9.12.0: deleted
         */
        get exposedName(): string;
        set exposedName(newValue: string);
        /**
         * In version 9.12.0: introduced
         */
        get eventName(): string;
        set eventName(newValue: string);
        get description(): string;
        set description(newValue: string);
        get summary(): string;
        set summary(newValue: string);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get attributes(): internal.IList<PublishedMessageAttribute>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new PublishedMessage instance in the SDK and on the server.
         * The new PublishedMessage will be automatically stored in the 'messages' property
         * of the parent PublishedChannel element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.11.0 and higher
         */
        static createIn(container: PublishedChannel): PublishedMessage;
        /**
         * Creates and returns a new PublishedMessage instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): PublishedMessage;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.11.0: introduced
     */
    class PublishedMessageAttribute extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsPublishedMessage(): PublishedMessage;
        get attribute(): domainmodels.IAttribute;
        set attribute(newValue: domainmodels.IAttribute);
        get attributeQualifiedName(): string;
        /**
         * In version 9.14.0: introduced
         */
        get attributeType(): domainmodels.AttributeType;
        set attributeType(newValue: domainmodels.AttributeType);
        get exposedName(): string;
        set exposedName(newValue: string);
        get description(): string;
        set description(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new PublishedMessageAttribute instance in the SDK and on the server.
         * The new PublishedMessageAttribute will be automatically stored in the 'attributes' property
         * of the parent PublishedMessage element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.11.0 and higher
         */
        static createIn(container: PublishedMessage): PublishedMessageAttribute;
        /**
         * Creates and returns a new PublishedMessageAttribute instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): PublishedMessageAttribute;
    }
}
import { domainmodels } from "./domainmodels";
import { microflows } from "./microflows";
import { IModel } from "./base-model";
