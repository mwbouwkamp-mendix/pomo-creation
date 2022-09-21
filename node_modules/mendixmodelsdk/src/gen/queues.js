"use strict";
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.queues = exports.StructureVersionInfo = void 0;
const internal = require("../sdk/internal");
exports.StructureVersionInfo = internal.StructureVersionInfo;
const projects_1 = require("./projects");
var queues;
(function (queues) {
    class QueueRetryIntervalType extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "queues.QueueRetryIntervalType";
        }
    }
    QueueRetryIntervalType.Seconds = new QueueRetryIntervalType("Seconds", {});
    QueueRetryIntervalType.Minutes = new QueueRetryIntervalType("Minutes", {});
    QueueRetryIntervalType.Hours = new QueueRetryIntervalType("Hours", {});
    queues.QueueRetryIntervalType = QueueRetryIntervalType;
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `Queues`.
     */
    /**
     * In version 9.3.0: removed experimental
     * In version 8.16.0: introduced
     */
    class QueueConfig extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new QueueConfig() cannot be invoked directly, please use 'model.queues.createQueueConfig()'");
            }
        }
        get containerAsQueue() {
            return super.getContainerAs(Queue);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    QueueConfig.structureTypeName = "Queues$QueueConfig";
    QueueConfig.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.16.0",
        experimental: {
            currentValue: false,
            changedIn: ["9.3.0"]
        }
    }, internal.StructureType.Element);
    queues.QueueConfig = QueueConfig;
    /**
     * In version 9.3.0: removed experimental
     * In version 8.16.0: introduced
     */
    class BasicQueueConfig extends QueueConfig {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__parallelismExpression = new internal.PrimitiveProperty(BasicQueueConfig, this, "parallelismExpression", "1", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__parallelism = new internal.PrimitiveProperty(BasicQueueConfig, this, "parallelism", 1, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__clusterWide = new internal.PrimitiveProperty(BasicQueueConfig, this, "clusterWide", false, internal.PrimitiveTypeEnum.Boolean);
            if (arguments.length < 4) {
                throw new Error("new BasicQueueConfig() cannot be invoked directly, please use 'model.queues.createBasicQueueConfig()'");
            }
        }
        get containerAsQueue() {
            return super.getContainerAs(Queue);
        }
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         *
         * In version 9.12.0: introduced
         */
        get parallelismExpression() {
            return this.__parallelismExpression.get();
        }
        set parallelismExpression(newValue) {
            this.__parallelismExpression.set(newValue);
        }
        /**
         * In version 9.12.0: deleted
         * In version 8.16.0: introduced
         */
        get parallelism() {
            return this.__parallelism.get();
        }
        set parallelism(newValue) {
            this.__parallelism.set(newValue);
        }
        /**
         * In version 9.13.0: introduced
         */
        get clusterWide() {
            return this.__clusterWide.get();
        }
        set clusterWide(newValue) {
            this.__clusterWide.set(newValue);
        }
        /**
         * Creates and returns a new BasicQueueConfig instance in the SDK and on the server.
         * The new BasicQueueConfig will be automatically stored in the 'config' property
         * of the parent Queue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.16.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, BasicQueueConfig.structureTypeName, { start: "8.16.0" });
            return internal.instancehelpers.createElement(container, BasicQueueConfig, "config", false);
        }
        /**
         * Creates and returns a new BasicQueueConfig instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, BasicQueueConfig);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__clusterWide.isAvailable) {
                this.clusterWide = false;
            }
            if (this.__parallelism.isAvailable) {
                this.parallelism = 1;
            }
            if (this.__parallelismExpression.isAvailable) {
                this.parallelismExpression = "1";
            }
        }
    }
    BasicQueueConfig.structureTypeName = "Queues$BasicQueueConfig";
    BasicQueueConfig.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.16.0",
        properties: {
            parallelismExpression: {
                introduced: "9.12.0"
            },
            parallelism: {
                introduced: "8.16.0",
                deleted: "9.12.0",
                deletionMessage: null
            },
            clusterWide: {
                introduced: "9.13.0"
            }
        },
        experimental: {
            currentValue: false,
            changedIn: ["9.3.0"]
        }
    }, internal.StructureType.Element);
    queues.BasicQueueConfig = BasicQueueConfig;
    /**
     * See: {@link https://docs.mendix.com/refguide/task-queue relevant section in reference guide}
     *
     * In version 9.3.0: removed experimental
     * In version 8.16.0: introduced
     */
    class Queue extends projects_1.projects.Document {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            /** @internal */
            this.__config = new internal.PartProperty(Queue, this, "config", null, true);
            this._containmentName = "documents";
        }
        get containerAsFolderBase() {
            return super.getContainerAs(projects_1.projects.FolderBase);
        }
        get config() {
            return this.__config.get();
        }
        set config(newValue) {
            this.__config.set(newValue);
        }
        /**
         * Creates a new Queue unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container) {
            return internal.instancehelpers.createUnit(container, Queue);
        }
        /** @internal */
        _isByNameReferrable() {
            return this.__name.isAvailable;
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.config = BasicQueueConfig.create(this.model);
        }
    }
    Queue.structureTypeName = "Queues$Queue";
    Queue.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.16.0",
        properties: {
            config: {
                required: {
                    currentValue: true
                }
            }
        },
        experimental: {
            currentValue: false,
            changedIn: ["9.3.0"]
        }
    }, internal.StructureType.ModelUnit);
    queues.Queue = Queue;
    /**
     * In version 9.10.0: introduced
     */
    class QueueRetry extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new QueueRetry() cannot be invoked directly, please use 'model.queues.createQueueRetry()'");
            }
        }
        get containerAsQueueSettings() {
            return super.getContainerAs(QueueSettings);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    QueueRetry.structureTypeName = "Queues$QueueRetry";
    QueueRetry.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.10.0"
    }, internal.StructureType.Element);
    queues.QueueRetry = QueueRetry;
    /**
     * In version 9.10.0: introduced
     */
    class QueueExponentialRetry extends QueueRetry {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__retries = new internal.PrimitiveProperty(QueueExponentialRetry, this, "retries", 10, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__initialInterval = new internal.PrimitiveProperty(QueueExponentialRetry, this, "initialInterval", 1, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__maximumInterval = new internal.PrimitiveProperty(QueueExponentialRetry, this, "maximumInterval", 86400, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__intervalType = new internal.EnumProperty(QueueExponentialRetry, this, "intervalType", QueueRetryIntervalType.Seconds, QueueRetryIntervalType);
            if (arguments.length < 4) {
                throw new Error("new QueueExponentialRetry() cannot be invoked directly, please use 'model.queues.createQueueExponentialRetry()'");
            }
        }
        get containerAsQueueSettings() {
            return super.getContainerAs(QueueSettings);
        }
        get retries() {
            return this.__retries.get();
        }
        set retries(newValue) {
            this.__retries.set(newValue);
        }
        get initialInterval() {
            return this.__initialInterval.get();
        }
        set initialInterval(newValue) {
            this.__initialInterval.set(newValue);
        }
        get maximumInterval() {
            return this.__maximumInterval.get();
        }
        set maximumInterval(newValue) {
            this.__maximumInterval.set(newValue);
        }
        get intervalType() {
            return this.__intervalType.get();
        }
        set intervalType(newValue) {
            this.__intervalType.set(newValue);
        }
        /**
         * Creates and returns a new QueueExponentialRetry instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, QueueExponentialRetry);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.initialInterval = 1;
            this.intervalType = QueueRetryIntervalType.Seconds;
            this.maximumInterval = 86400;
            this.retries = 10;
        }
    }
    QueueExponentialRetry.structureTypeName = "Queues$QueueExponentialRetry";
    QueueExponentialRetry.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.10.0"
    }, internal.StructureType.Element);
    queues.QueueExponentialRetry = QueueExponentialRetry;
    /**
     * In version 9.10.0: introduced
     */
    class QueueFixedRetry extends QueueRetry {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__retries = new internal.PrimitiveProperty(QueueFixedRetry, this, "retries", 3, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__interval = new internal.PrimitiveProperty(QueueFixedRetry, this, "interval", 10, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__intervalType = new internal.EnumProperty(QueueFixedRetry, this, "intervalType", QueueRetryIntervalType.Seconds, QueueRetryIntervalType);
            if (arguments.length < 4) {
                throw new Error("new QueueFixedRetry() cannot be invoked directly, please use 'model.queues.createQueueFixedRetry()'");
            }
        }
        get containerAsQueueSettings() {
            return super.getContainerAs(QueueSettings);
        }
        get retries() {
            return this.__retries.get();
        }
        set retries(newValue) {
            this.__retries.set(newValue);
        }
        get interval() {
            return this.__interval.get();
        }
        set interval(newValue) {
            this.__interval.set(newValue);
        }
        get intervalType() {
            return this.__intervalType.get();
        }
        set intervalType(newValue) {
            this.__intervalType.set(newValue);
        }
        /**
         * Creates and returns a new QueueFixedRetry instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, QueueFixedRetry);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.interval = 10;
            this.intervalType = QueueRetryIntervalType.Seconds;
            this.retries = 3;
        }
    }
    QueueFixedRetry.structureTypeName = "Queues$QueueFixedRetry";
    QueueFixedRetry.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.10.0"
    }, internal.StructureType.Element);
    queues.QueueFixedRetry = QueueFixedRetry;
    /**
     * In version 9.10.0: introduced
     */
    class QueueSettings extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__queue = new internal.ByNameReferenceProperty(QueueSettings, this, "queue", null, "Queues$Queue");
            /** @internal */
            this.__retry = new internal.PartProperty(QueueSettings, this, "retry", null, false);
            if (arguments.length < 4) {
                throw new Error("new QueueSettings() cannot be invoked directly, please use 'model.queues.createQueueSettings()'");
            }
        }
        get containerAsJavaActionCallAction() {
            return super.getContainerAs(microflows_1.microflows.JavaActionCallAction);
        }
        get containerAsMicroflowCall() {
            return super.getContainerAs(microflows_1.microflows.MicroflowCall);
        }
        get queue() {
            return this.__queue.get();
        }
        set queue(newValue) {
            this.__queue.set(newValue);
        }
        get queueQualifiedName() {
            return this.__queue.qualifiedName();
        }
        get retry() {
            return this.__retry.get();
        }
        set retry(newValue) {
            this.__retry.set(newValue);
        }
        /**
         * Creates and returns a new QueueSettings instance in the SDK and on the server.
         * The new QueueSettings will be automatically stored in the 'queueSettings' property
         * of the parent microflows.JavaActionCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.10.0 and higher
         */
        static createInJavaActionCallActionUnderQueueSettings(container) {
            internal.createInVersionCheck(container.model, QueueSettings.structureTypeName, { start: "9.10.0" });
            return internal.instancehelpers.createElement(container, QueueSettings, "queueSettings", false);
        }
        /**
         * Creates and returns a new QueueSettings instance in the SDK and on the server.
         * The new QueueSettings will be automatically stored in the 'queueSettings' property
         * of the parent microflows.MicroflowCall element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.10.0 and higher
         */
        static createInMicroflowCallUnderQueueSettings(container) {
            internal.createInVersionCheck(container.model, QueueSettings.structureTypeName, { start: "9.10.0" });
            return internal.instancehelpers.createElement(container, QueueSettings, "queueSettings", false);
        }
        /**
         * Creates and returns a new QueueSettings instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, QueueSettings);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    QueueSettings.structureTypeName = "Queues$QueueSettings";
    QueueSettings.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.10.0"
    }, internal.StructureType.Element);
    queues.QueueSettings = QueueSettings;
})(queues = exports.queues || (exports.queues = {}));
const microflows_1 = require("./microflows");
//# sourceMappingURL=queues.js.map