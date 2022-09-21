import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
import { projects } from "./projects";
export declare namespace queues {
    class QueueRetryIntervalType extends internal.AbstractEnum {
        static Seconds: QueueRetryIntervalType;
        static Minutes: QueueRetryIntervalType;
        static Hours: QueueRetryIntervalType;
        protected qualifiedTsTypeName: string;
    }
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `Queues`.
     */
    /**
     * In version 9.3.0: removed experimental
     * In version 8.16.0: introduced
     */
    abstract class QueueConfig extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsQueue(): Queue;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 9.3.0: removed experimental
     * In version 8.16.0: introduced
     */
    class BasicQueueConfig extends QueueConfig {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsQueue(): Queue;
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         *
         * In version 9.12.0: introduced
         */
        get parallelismExpression(): string;
        set parallelismExpression(newValue: string);
        /**
         * In version 9.12.0: deleted
         * In version 8.16.0: introduced
         */
        get parallelism(): number;
        set parallelism(newValue: number);
        /**
         * In version 9.13.0: introduced
         */
        get clusterWide(): boolean;
        set clusterWide(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new BasicQueueConfig instance in the SDK and on the server.
         * The new BasicQueueConfig will be automatically stored in the 'config' property
         * of the parent Queue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.16.0 and higher
         */
        static createIn(container: Queue): BasicQueueConfig;
        /**
         * Creates and returns a new BasicQueueConfig instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): BasicQueueConfig;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/task-queue relevant section in reference guide}
     *
     * In version 9.3.0: removed experimental
     * In version 8.16.0: introduced
     */
    interface IQueue extends projects.IDocument {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        asLoaded(): Queue;
        load(callback: (element: Queue) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<Queue>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/task-queue relevant section in reference guide}
     *
     * In version 9.3.0: removed experimental
     * In version 8.16.0: introduced
     */
    class Queue extends projects.Document implements IQueue {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFolderBase(): projects.FolderBase;
        get config(): QueueConfig;
        set config(newValue: QueueConfig);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
        /**
         * Creates a new Queue unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container: projects.IFolderBase): Queue;
    }
    /**
     * In version 9.10.0: introduced
     */
    abstract class QueueRetry extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsQueueSettings(): QueueSettings;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 9.10.0: introduced
     */
    class QueueExponentialRetry extends QueueRetry {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsQueueSettings(): QueueSettings;
        get retries(): number;
        set retries(newValue: number);
        get initialInterval(): number;
        set initialInterval(newValue: number);
        get maximumInterval(): number;
        set maximumInterval(newValue: number);
        get intervalType(): QueueRetryIntervalType;
        set intervalType(newValue: QueueRetryIntervalType);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new QueueExponentialRetry instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): QueueExponentialRetry;
    }
    /**
     * In version 9.10.0: introduced
     */
    class QueueFixedRetry extends QueueRetry {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsQueueSettings(): QueueSettings;
        get retries(): number;
        set retries(newValue: number);
        get interval(): number;
        set interval(newValue: number);
        get intervalType(): QueueRetryIntervalType;
        set intervalType(newValue: QueueRetryIntervalType);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new QueueFixedRetry instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): QueueFixedRetry;
    }
    /**
     * In version 9.10.0: introduced
     */
    class QueueSettings extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsJavaActionCallAction(): microflows.JavaActionCallAction;
        get containerAsMicroflowCall(): microflows.MicroflowCall;
        get queue(): IQueue | null;
        set queue(newValue: IQueue | null);
        get queueQualifiedName(): string | null;
        get retry(): QueueRetry | null;
        set retry(newValue: QueueRetry | null);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new QueueSettings instance in the SDK and on the server.
         * The new QueueSettings will be automatically stored in the 'queueSettings' property
         * of the parent microflows.JavaActionCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.10.0 and higher
         */
        static createInJavaActionCallActionUnderQueueSettings(container: microflows.JavaActionCallAction): QueueSettings;
        /**
         * Creates and returns a new QueueSettings instance in the SDK and on the server.
         * The new QueueSettings will be automatically stored in the 'queueSettings' property
         * of the parent microflows.MicroflowCall element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.10.0 and higher
         */
        static createInMicroflowCallUnderQueueSettings(container: microflows.MicroflowCall): QueueSettings;
        /**
         * Creates and returns a new QueueSettings instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): QueueSettings;
    }
}
import { microflows } from "./microflows";
import { IModel } from "./base-model";
