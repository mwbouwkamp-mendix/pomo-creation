"use strict";
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.businessevents = exports.StructureVersionInfo = void 0;
const internal = require("../sdk/internal");
exports.StructureVersionInfo = internal.StructureVersionInfo;
const projects_1 = require("./projects");
/**
 * @ignore
 */
var businessevents;
(function (businessevents) {
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
    class ConsumedBusinessEvent extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__eventName = new internal.PrimitiveProperty(ConsumedBusinessEvent, this, "eventName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__channelId = new internal.PrimitiveProperty(ConsumedBusinessEvent, this, "channelId", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__entity = new internal.ByNameReferenceProperty(ConsumedBusinessEvent, this, "entity", null, "DomainModels$Entity");
            /** @internal */
            this.__microflow = new internal.ByNameReferenceProperty(ConsumedBusinessEvent, this, "microflow", null, "Microflows$Microflow");
            if (arguments.length < 4) {
                throw new Error("new ConsumedBusinessEvent() cannot be invoked directly, please use 'model.businessevents.createConsumedBusinessEvent()'");
            }
        }
        get containerAsConsumedBusinessEventService() {
            return super.getContainerAs(ConsumedBusinessEventService);
        }
        get eventName() {
            return this.__eventName.get();
        }
        set eventName(newValue) {
            this.__eventName.set(newValue);
        }
        /**
         * In version 9.13.0: introduced
         */
        get channelId() {
            return this.__channelId.get();
        }
        set channelId(newValue) {
            this.__channelId.set(newValue);
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
         * Creates and returns a new ConsumedBusinessEvent instance in the SDK and on the server.
         * The new ConsumedBusinessEvent will be automatically stored in the 'businessEvents' property
         * of the parent ConsumedBusinessEventService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.11.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, ConsumedBusinessEvent.structureTypeName, { start: "9.11.0" });
            return internal.instancehelpers.createElement(container, ConsumedBusinessEvent, "businessEvents", true);
        }
        /**
         * Creates and returns a new ConsumedBusinessEvent instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ConsumedBusinessEvent);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ConsumedBusinessEvent.structureTypeName = "BusinessEvents$ConsumedBusinessEvent";
    ConsumedBusinessEvent.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.11.0",
        properties: {
            channelId: {
                introduced: "9.13.0"
            },
            entity: {
                required: {
                    currentValue: true
                }
            },
            microflow: {
                required: {
                    currentValue: true
                }
            }
        },
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    businessevents.ConsumedBusinessEvent = ConsumedBusinessEvent;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.8.0: introduced
     */
    class ConsumedBusinessEventService extends projects_1.projects.Document {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            /** @internal */
            this.__version = new internal.PrimitiveProperty(ConsumedBusinessEventService, this, "version", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__contract = new internal.PrimitiveProperty(ConsumedBusinessEventService, this, "contract", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__businessEvents = new internal.PartListProperty(ConsumedBusinessEventService, this, "businessEvents", []);
            this._containmentName = "documents";
        }
        get containerAsFolderBase() {
            return super.getContainerAs(projects_1.projects.FolderBase);
        }
        /**
         * In version 9.11.0: introduced
         */
        get version() {
            return this.__version.get();
        }
        set version(newValue) {
            this.__version.set(newValue);
        }
        /**
         * In version 9.11.0: introduced
         */
        get contract() {
            return this.__contract.get();
        }
        set contract(newValue) {
            this.__contract.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.11.0: introduced
         */
        get businessEvents() {
            return this.__businessEvents.get();
        }
        /**
         * Creates a new ConsumedBusinessEventService unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container) {
            return internal.instancehelpers.createUnit(container, ConsumedBusinessEventService);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ConsumedBusinessEventService.structureTypeName = "BusinessEvents$ConsumedBusinessEventService";
    ConsumedBusinessEventService.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.8.0",
        properties: {
            version: {
                introduced: "9.11.0"
            },
            contract: {
                introduced: "9.11.0"
            },
            businessEvents: {
                introduced: "9.11.0"
            }
        },
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.ModelUnit);
    businessevents.ConsumedBusinessEventService = ConsumedBusinessEventService;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.11.0: introduced
     */
    class PublishedBusinessEventService extends projects_1.projects.Document {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            /** @internal */
            this.__serviceName = new internal.PrimitiveProperty(PublishedBusinessEventService, this, "serviceName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__eventNamePrefix = new internal.PrimitiveProperty(PublishedBusinessEventService, this, "eventNamePrefix", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__version = new internal.PrimitiveProperty(PublishedBusinessEventService, this, "version", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__description = new internal.PrimitiveProperty(PublishedBusinessEventService, this, "description", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__summary = new internal.PrimitiveProperty(PublishedBusinessEventService, this, "summary", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__channels = new internal.PartListProperty(PublishedBusinessEventService, this, "channels", []);
            this._containmentName = "documents";
        }
        get containerAsFolderBase() {
            return super.getContainerAs(projects_1.projects.FolderBase);
        }
        get serviceName() {
            return this.__serviceName.get();
        }
        set serviceName(newValue) {
            this.__serviceName.set(newValue);
        }
        /**
         * In version 9.13.0: introduced
         */
        get eventNamePrefix() {
            return this.__eventNamePrefix.get();
        }
        set eventNamePrefix(newValue) {
            this.__eventNamePrefix.set(newValue);
        }
        get version() {
            return this.__version.get();
        }
        set version(newValue) {
            this.__version.set(newValue);
        }
        get description() {
            return this.__description.get();
        }
        set description(newValue) {
            this.__description.set(newValue);
        }
        get summary() {
            return this.__summary.get();
        }
        set summary(newValue) {
            this.__summary.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get channels() {
            return this.__channels.get();
        }
        /**
         * Creates a new PublishedBusinessEventService unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container) {
            return internal.instancehelpers.createUnit(container, PublishedBusinessEventService);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    PublishedBusinessEventService.structureTypeName = "BusinessEvents$PublishedBusinessEventService";
    PublishedBusinessEventService.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.11.0",
        properties: {
            eventNamePrefix: {
                introduced: "9.13.0"
            }
        },
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.ModelUnit);
    businessevents.PublishedBusinessEventService = PublishedBusinessEventService;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.11.0: introduced
     */
    class PublishedChannel extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__channelId = new internal.PrimitiveProperty(PublishedChannel, this, "channelId", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__channelName = new internal.PrimitiveProperty(PublishedChannel, this, "channelName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__description = new internal.PrimitiveProperty(PublishedChannel, this, "description", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__messages = new internal.PartListProperty(PublishedChannel, this, "messages", []);
            if (arguments.length < 4) {
                throw new Error("new PublishedChannel() cannot be invoked directly, please use 'model.businessevents.createPublishedChannel()'");
            }
        }
        get containerAsPublishedBusinessEventService() {
            return super.getContainerAs(PublishedBusinessEventService);
        }
        get channelId() {
            return this.__channelId.get();
        }
        set channelId(newValue) {
            this.__channelId.set(newValue);
        }
        get channelName() {
            return this.__channelName.get();
        }
        set channelName(newValue) {
            this.__channelName.set(newValue);
        }
        get description() {
            return this.__description.get();
        }
        set description(newValue) {
            this.__description.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get messages() {
            return this.__messages.get();
        }
        /**
         * Creates and returns a new PublishedChannel instance in the SDK and on the server.
         * The new PublishedChannel will be automatically stored in the 'channels' property
         * of the parent PublishedBusinessEventService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.11.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, PublishedChannel.structureTypeName, { start: "9.11.0" });
            return internal.instancehelpers.createElement(container, PublishedChannel, "channels", true);
        }
        /**
         * Creates and returns a new PublishedChannel instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, PublishedChannel);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    PublishedChannel.structureTypeName = "BusinessEvents$PublishedChannel";
    PublishedChannel.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.11.0",
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    businessevents.PublishedChannel = PublishedChannel;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.11.0: introduced
     */
    class PublishedMessage extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__entity = new internal.ByNameReferenceProperty(PublishedMessage, this, "entity", null, "DomainModels$Entity");
            /** @internal */
            this.__exposedName = new internal.PrimitiveProperty(PublishedMessage, this, "exposedName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__eventName = new internal.PrimitiveProperty(PublishedMessage, this, "eventName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__description = new internal.PrimitiveProperty(PublishedMessage, this, "description", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__summary = new internal.PrimitiveProperty(PublishedMessage, this, "summary", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__attributes = new internal.PartListProperty(PublishedMessage, this, "attributes", []);
            if (arguments.length < 4) {
                throw new Error("new PublishedMessage() cannot be invoked directly, please use 'model.businessevents.createPublishedMessage()'");
            }
        }
        get containerAsPublishedChannel() {
            return super.getContainerAs(PublishedChannel);
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
         * In version 9.12.0: deleted
         */
        get exposedName() {
            return this.__exposedName.get();
        }
        set exposedName(newValue) {
            this.__exposedName.set(newValue);
        }
        /**
         * In version 9.12.0: introduced
         */
        get eventName() {
            return this.__eventName.get();
        }
        set eventName(newValue) {
            this.__eventName.set(newValue);
        }
        get description() {
            return this.__description.get();
        }
        set description(newValue) {
            this.__description.set(newValue);
        }
        get summary() {
            return this.__summary.get();
        }
        set summary(newValue) {
            this.__summary.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get attributes() {
            return this.__attributes.get();
        }
        /**
         * Creates and returns a new PublishedMessage instance in the SDK and on the server.
         * The new PublishedMessage will be automatically stored in the 'messages' property
         * of the parent PublishedChannel element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.11.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, PublishedMessage.structureTypeName, { start: "9.11.0" });
            return internal.instancehelpers.createElement(container, PublishedMessage, "messages", true);
        }
        /**
         * Creates and returns a new PublishedMessage instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, PublishedMessage);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    PublishedMessage.structureTypeName = "BusinessEvents$PublishedMessage";
    PublishedMessage.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.11.0",
        properties: {
            entity: {
                required: {
                    currentValue: true
                }
            },
            exposedName: {
                deleted: "9.12.0",
                deletionMessage: null
            },
            eventName: {
                introduced: "9.12.0"
            }
        },
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    businessevents.PublishedMessage = PublishedMessage;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.11.0: introduced
     */
    class PublishedMessageAttribute extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__attribute = new internal.ByNameReferenceProperty(PublishedMessageAttribute, this, "attribute", null, "DomainModels$Attribute");
            /** @internal */
            this.__attributeType = new internal.PartProperty(PublishedMessageAttribute, this, "attributeType", null, true);
            /** @internal */
            this.__exposedName = new internal.PrimitiveProperty(PublishedMessageAttribute, this, "exposedName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__description = new internal.PrimitiveProperty(PublishedMessageAttribute, this, "description", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new PublishedMessageAttribute() cannot be invoked directly, please use 'model.businessevents.createPublishedMessageAttribute()'");
            }
        }
        get containerAsPublishedMessage() {
            return super.getContainerAs(PublishedMessage);
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
         * In version 9.14.0: introduced
         */
        get attributeType() {
            return this.__attributeType.get();
        }
        set attributeType(newValue) {
            this.__attributeType.set(newValue);
        }
        get exposedName() {
            return this.__exposedName.get();
        }
        set exposedName(newValue) {
            this.__exposedName.set(newValue);
        }
        get description() {
            return this.__description.get();
        }
        set description(newValue) {
            this.__description.set(newValue);
        }
        /**
         * Creates and returns a new PublishedMessageAttribute instance in the SDK and on the server.
         * The new PublishedMessageAttribute will be automatically stored in the 'attributes' property
         * of the parent PublishedMessage element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.11.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, PublishedMessageAttribute.structureTypeName, { start: "9.11.0" });
            return internal.instancehelpers.createElement(container, PublishedMessageAttribute, "attributes", true);
        }
        /**
         * Creates and returns a new PublishedMessageAttribute instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, PublishedMessageAttribute);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__attributeType.isAvailable) {
                this.attributeType = domainmodels_1.domainmodels.StringAttributeType.create(this.model);
            }
        }
    }
    PublishedMessageAttribute.structureTypeName = "BusinessEvents$PublishedMessageAttribute";
    PublishedMessageAttribute.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.11.0",
        properties: {
            attribute: {
                required: {
                    currentValue: true
                }
            },
            attributeType: {
                introduced: "9.14.0",
                required: {
                    currentValue: true
                }
            }
        },
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    businessevents.PublishedMessageAttribute = PublishedMessageAttribute;
})(businessevents = exports.businessevents || (exports.businessevents = {}));
const domainmodels_1 = require("./domainmodels");
//# sourceMappingURL=businessevents.js.map