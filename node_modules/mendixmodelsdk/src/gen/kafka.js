"use strict";
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.kafka = exports.StructureVersionInfo = void 0;
const internal = require("../sdk/internal");
exports.StructureVersionInfo = internal.StructureVersionInfo;
const domainmodels_1 = require("./domainmodels");
const projects_1 = require("./projects");
var kafka;
(function (kafka) {
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
    class ConsumedKafkaService extends domainmodels_1.domainmodels.RemoteEntitySourceDocument {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            /** @internal */
            this.__metadataReferences = new internal.PartListProperty(ConsumedKafkaService, this, "metadataReferences", []);
            /** @internal */
            this.__serviceId = new internal.PrimitiveProperty(ConsumedKafkaService, this, "serviceId", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__serviceFeed = new internal.PrimitiveProperty(ConsumedKafkaService, this, "serviceFeed", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__brokerUrl = new internal.ByNameReferenceProperty(ConsumedKafkaService, this, "brokerUrl", null, "Constants$Constant");
            /** @internal */
            this.__brokerUsername = new internal.ByNameReferenceProperty(ConsumedKafkaService, this, "brokerUsername", null, "Constants$Constant");
            /** @internal */
            this.__brokerPassword = new internal.ByNameReferenceProperty(ConsumedKafkaService, this, "brokerPassword", null, "Constants$Constant");
            this._containmentName = "documents";
        }
        get containerAsFolderBase() {
            return super.getContainerAs(projects_1.projects.FolderBase);
        }
        get metadataReferences() {
            return this.__metadataReferences.get();
        }
        /**
         * In version 8.14.0: deleted
         */
        get serviceId() {
            return this.__serviceId.get();
        }
        set serviceId(newValue) {
            this.__serviceId.set(newValue);
        }
        /**
         * In version 8.12.0: introduced
         */
        get serviceFeed() {
            return this.__serviceFeed.get();
        }
        set serviceFeed(newValue) {
            this.__serviceFeed.set(newValue);
        }
        get brokerUrl() {
            return this.__brokerUrl.get();
        }
        set brokerUrl(newValue) {
            this.__brokerUrl.set(newValue);
        }
        get brokerUrlQualifiedName() {
            return this.__brokerUrl.qualifiedName();
        }
        get brokerUsername() {
            return this.__brokerUsername.get();
        }
        set brokerUsername(newValue) {
            this.__brokerUsername.set(newValue);
        }
        get brokerUsernameQualifiedName() {
            return this.__brokerUsername.qualifiedName();
        }
        get brokerPassword() {
            return this.__brokerPassword.get();
        }
        set brokerPassword(newValue) {
            this.__brokerPassword.set(newValue);
        }
        get brokerPasswordQualifiedName() {
            return this.__brokerPassword.qualifiedName();
        }
        /**
         * Creates a new ConsumedKafkaService unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container) {
            return internal.instancehelpers.createUnit(container, ConsumedKafkaService);
        }
        /** @internal */
        _isByNameReferrable() {
            return this.__name.isAvailable;
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ConsumedKafkaService.structureTypeName = "Kafka$ConsumedKafkaService";
    ConsumedKafkaService.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.11.0",
        properties: {
            serviceId: {
                deleted: "8.14.0",
                deletionMessage: null
            },
            serviceFeed: {
                introduced: "8.12.0"
            }
        },
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.ModelUnit);
    kafka.ConsumedKafkaService = ConsumedKafkaService;
    /**
     * In version 8.11.0: introduced
     */
    class KafkaMappedValue extends domainmodels_1.domainmodels.CachedMappedValue {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__remoteName = new internal.PrimitiveProperty(KafkaMappedValue, this, "remoteName", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new KafkaMappedValue() cannot be invoked directly, please use 'model.kafka.createKafkaMappedValue()'");
            }
        }
        get containerAsAttribute() {
            return super.getContainerAs(domainmodels_1.domainmodels.Attribute);
        }
        get remoteName() {
            return this.__remoteName.get();
        }
        set remoteName(newValue) {
            this.__remoteName.set(newValue);
        }
        /**
         * Creates and returns a new KafkaMappedValue instance in the SDK and on the server.
         * The new KafkaMappedValue will be automatically stored in the 'value' property
         * of the parent domainmodels.Attribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.2 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, KafkaMappedValue.structureTypeName, { start: "9.0.2" });
            return internal.instancehelpers.createElement(container, KafkaMappedValue, "value", false);
        }
        /**
         * Creates and returns a new KafkaMappedValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, KafkaMappedValue);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    KafkaMappedValue.structureTypeName = "Kafka$KafkaMappedValue";
    KafkaMappedValue.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.11.0",
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    kafka.KafkaMappedValue = KafkaMappedValue;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 8.11.0: introduced
     */
    class KafkaRemoteEntitySource extends domainmodels_1.domainmodels.MaterializedRemoteEntitySource {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__sourceDocument = new internal.ByNameReferenceProperty(KafkaRemoteEntitySource, this, "sourceDocument", null, "Kafka$ConsumedKafkaService");
            /** @internal */
            this.__remoteName = new internal.PrimitiveProperty(KafkaRemoteEntitySource, this, "remoteName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__topicName = new internal.PrimitiveProperty(KafkaRemoteEntitySource, this, "topicName", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new KafkaRemoteEntitySource() cannot be invoked directly, please use 'model.kafka.createKafkaRemoteEntitySource()'");
            }
        }
        get containerAsEntity() {
            return super.getContainerAs(domainmodels_1.domainmodels.Entity);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get sourceDocument() {
            return this.__sourceDocument.get();
        }
        set sourceDocument(newValue) {
            this.__sourceDocument.set(newValue);
        }
        get sourceDocumentQualifiedName() {
            return this.__sourceDocument.qualifiedName();
        }
        get remoteName() {
            return this.__remoteName.get();
        }
        set remoteName(newValue) {
            this.__remoteName.set(newValue);
        }
        /**
         * In version 8.12.0: introduced
         */
        get topicName() {
            return this.__topicName.get();
        }
        set topicName(newValue) {
            this.__topicName.set(newValue);
        }
        /**
         * Creates and returns a new KafkaRemoteEntitySource instance in the SDK and on the server.
         * The new KafkaRemoteEntitySource will be automatically stored in the 'source' property
         * of the parent domainmodels.Entity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.11.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, KafkaRemoteEntitySource.structureTypeName, { start: "8.11.0" });
            return internal.instancehelpers.createElement(container, KafkaRemoteEntitySource, "source", false);
        }
        /**
         * Creates and returns a new KafkaRemoteEntitySource instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, KafkaRemoteEntitySource);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    KafkaRemoteEntitySource.structureTypeName = "Kafka$KafkaRemoteEntitySource";
    KafkaRemoteEntitySource.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.11.0",
        properties: {
            topicName: {
                introduced: "8.12.0"
            }
        },
        public: {
            currentValue: true
        },
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    kafka.KafkaRemoteEntitySource = KafkaRemoteEntitySource;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 8.14.0: introduced
     */
    class PublishedKafkaResource extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__entity = new internal.ByNameReferenceProperty(PublishedKafkaResource, this, "entity", null, "DomainModels$Entity");
            /** @internal */
            this.__exposedName = new internal.PrimitiveProperty(PublishedKafkaResource, this, "exposedName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__topicName = new internal.PrimitiveProperty(PublishedKafkaResource, this, "topicName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__attributes = new internal.PartListProperty(PublishedKafkaResource, this, "attributes", []);
            /** @internal */
            this.__summary = new internal.PrimitiveProperty(PublishedKafkaResource, this, "summary", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__description = new internal.PrimitiveProperty(PublishedKafkaResource, this, "description", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new PublishedKafkaResource() cannot be invoked directly, please use 'model.kafka.createPublishedKafkaResource()'");
            }
        }
        get containerAsPublishedKafkaService() {
            return super.getContainerAs(PublishedKafkaService);
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
        get exposedName() {
            return this.__exposedName.get();
        }
        set exposedName(newValue) {
            this.__exposedName.set(newValue);
        }
        /**
         * In version 9.0.3: deleted
         */
        get topicName() {
            return this.__topicName.get();
        }
        set topicName(newValue) {
            this.__topicName.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.0.1: introduced
         */
        get attributes() {
            return this.__attributes.get();
        }
        get summary() {
            return this.__summary.get();
        }
        set summary(newValue) {
            this.__summary.set(newValue);
        }
        get description() {
            return this.__description.get();
        }
        set description(newValue) {
            this.__description.set(newValue);
        }
        /**
         * Creates and returns a new PublishedKafkaResource instance in the SDK and on the server.
         * The new PublishedKafkaResource will be automatically stored in the 'resources' property
         * of the parent PublishedKafkaService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.14.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, PublishedKafkaResource.structureTypeName, { start: "8.14.0" });
            return internal.instancehelpers.createElement(container, PublishedKafkaResource, "resources", true);
        }
        /**
         * Creates and returns a new PublishedKafkaResource instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, PublishedKafkaResource);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    PublishedKafkaResource.structureTypeName = "Kafka$PublishedKafkaResource";
    PublishedKafkaResource.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.14.0",
        properties: {
            entity: {
                required: {
                    currentValue: true
                }
            },
            topicName: {
                deleted: "9.0.3",
                deletionMessage: null
            },
            attributes: {
                introduced: "9.0.1"
            }
        },
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    kafka.PublishedKafkaResource = PublishedKafkaResource;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.0.1: introduced
     */
    class PublishedKafkaResourceAttribute extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__attribute = new internal.ByNameReferenceProperty(PublishedKafkaResourceAttribute, this, "attribute", null, "DomainModels$Attribute");
            /** @internal */
            this.__exposedName = new internal.PrimitiveProperty(PublishedKafkaResourceAttribute, this, "exposedName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__summary = new internal.PrimitiveProperty(PublishedKafkaResourceAttribute, this, "summary", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__description = new internal.PrimitiveProperty(PublishedKafkaResourceAttribute, this, "description", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new PublishedKafkaResourceAttribute() cannot be invoked directly, please use 'model.kafka.createPublishedKafkaResourceAttribute()'");
            }
        }
        get containerAsPublishedKafkaResource() {
            return super.getContainerAs(PublishedKafkaResource);
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
         * In version 9.0.2: introduced
         */
        get exposedName() {
            return this.__exposedName.get();
        }
        set exposedName(newValue) {
            this.__exposedName.set(newValue);
        }
        get summary() {
            return this.__summary.get();
        }
        set summary(newValue) {
            this.__summary.set(newValue);
        }
        get description() {
            return this.__description.get();
        }
        set description(newValue) {
            this.__description.set(newValue);
        }
        /**
         * Creates and returns a new PublishedKafkaResourceAttribute instance in the SDK and on the server.
         * The new PublishedKafkaResourceAttribute will be automatically stored in the 'attributes' property
         * of the parent PublishedKafkaResource element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.1 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, PublishedKafkaResourceAttribute.structureTypeName, { start: "9.0.1" });
            return internal.instancehelpers.createElement(container, PublishedKafkaResourceAttribute, "attributes", true);
        }
        /**
         * Creates and returns a new PublishedKafkaResourceAttribute instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, PublishedKafkaResourceAttribute);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    PublishedKafkaResourceAttribute.structureTypeName = "Kafka$PublishedKafkaResourceAttribute";
    PublishedKafkaResourceAttribute.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.0.1",
        properties: {
            attribute: {
                required: {
                    currentValue: true
                }
            },
            exposedName: {
                introduced: "9.0.2"
            }
        },
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    kafka.PublishedKafkaResourceAttribute = PublishedKafkaResourceAttribute;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 8.14.0: introduced
     */
    class PublishedKafkaService extends projects_1.projects.Document {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            /** @internal */
            this.__namespace = new internal.PrimitiveProperty(PublishedKafkaService, this, "namespace", "DefaultNamespace", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__serviceFeed = new internal.PrimitiveProperty(PublishedKafkaService, this, "serviceFeed", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__metadata = new internal.PrimitiveProperty(PublishedKafkaService, this, "metadata", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__serviceName = new internal.PrimitiveProperty(PublishedKafkaService, this, "serviceName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__resources = new internal.PartListProperty(PublishedKafkaService, this, "resources", []);
            /** @internal */
            this.__version = new internal.PrimitiveProperty(PublishedKafkaService, this, "version", "1.0.0", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__summary = new internal.PrimitiveProperty(PublishedKafkaService, this, "summary", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__description = new internal.PrimitiveProperty(PublishedKafkaService, this, "description", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__brokerUrl = new internal.ByNameReferenceProperty(PublishedKafkaService, this, "brokerUrl", null, "Constants$Constant");
            /** @internal */
            this.__brokerUsername = new internal.ByNameReferenceProperty(PublishedKafkaService, this, "brokerUsername", null, "Constants$Constant");
            /** @internal */
            this.__brokerPassword = new internal.ByNameReferenceProperty(PublishedKafkaService, this, "brokerPassword", null, "Constants$Constant");
            this._containmentName = "documents";
        }
        get containerAsFolderBase() {
            return super.getContainerAs(projects_1.projects.FolderBase);
        }
        get namespace() {
            return this.__namespace.get();
        }
        set namespace(newValue) {
            this.__namespace.set(newValue);
        }
        get serviceFeed() {
            return this.__serviceFeed.get();
        }
        set serviceFeed(newValue) {
            this.__serviceFeed.set(newValue);
        }
        get metadata() {
            return this.__metadata.get();
        }
        set metadata(newValue) {
            this.__metadata.set(newValue);
        }
        get serviceName() {
            return this.__serviceName.get();
        }
        set serviceName(newValue) {
            this.__serviceName.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get resources() {
            return this.__resources.get();
        }
        get version() {
            return this.__version.get();
        }
        set version(newValue) {
            this.__version.set(newValue);
        }
        get summary() {
            return this.__summary.get();
        }
        set summary(newValue) {
            this.__summary.set(newValue);
        }
        get description() {
            return this.__description.get();
        }
        set description(newValue) {
            this.__description.set(newValue);
        }
        /**
         * In version 9.0.1: added optional
         */
        get brokerUrl() {
            return this.__brokerUrl.get();
        }
        set brokerUrl(newValue) {
            this.__brokerUrl.set(newValue);
        }
        get brokerUrlQualifiedName() {
            return this.__brokerUrl.qualifiedName();
        }
        get brokerUsername() {
            return this.__brokerUsername.get();
        }
        set brokerUsername(newValue) {
            this.__brokerUsername.set(newValue);
        }
        get brokerUsernameQualifiedName() {
            return this.__brokerUsername.qualifiedName();
        }
        get brokerPassword() {
            return this.__brokerPassword.get();
        }
        set brokerPassword(newValue) {
            this.__brokerPassword.set(newValue);
        }
        get brokerPasswordQualifiedName() {
            return this.__brokerPassword.qualifiedName();
        }
        /**
         * Creates a new PublishedKafkaService unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container) {
            return internal.instancehelpers.createUnit(container, PublishedKafkaService);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.namespace = "DefaultNamespace";
            this.version = "1.0.0";
        }
    }
    PublishedKafkaService.structureTypeName = "Kafka$PublishedKafkaService";
    PublishedKafkaService.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.14.0",
        properties: {
            brokerUrl: {
                required: {
                    currentValue: false,
                    changedIn: ["9.0.1"]
                }
            }
        },
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.ModelUnit);
    kafka.PublishedKafkaService = PublishedKafkaService;
})(kafka = exports.kafka || (exports.kafka = {}));
//# sourceMappingURL=kafka.js.map