import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
import { mappings } from "./mappings";
import { projects } from "./projects";
export declare namespace messagedefinitions {
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `MessageDefinitions`.
     */
    /**
     * In version 7.10.0: introduced
     */
    class AssociationElement extends mappings.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsJsonStructure(): jsonstructures.JsonStructure;
        get containerAsElement(): mappings.Element;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new AssociationElement instance in the SDK and on the server.
         * The new AssociationElement will be automatically stored in the 'elements' property
         * of the parent jsonstructures.JsonStructure element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.10.0 and higher
         */
        static createInJsonStructureUnderElements(container: jsonstructures.JsonStructure): AssociationElement;
        /**
         * Creates and returns a new AssociationElement instance in the SDK and on the server.
         * The new AssociationElement will be automatically stored in the 'children' property
         * of the parent mappings.Element element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.10.0 and higher
         */
        static createInElementUnderChildren(container: mappings.Element): AssociationElement;
        /**
         * Creates and returns a new AssociationElement instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): AssociationElement;
    }
    /**
     * In version 7.6.0: introduced
     */
    class AttributeElement extends mappings.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsJsonStructure(): jsonstructures.JsonStructure;
        get containerAsElement(): mappings.Element;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new AttributeElement instance in the SDK and on the server.
         * The new AttributeElement will be automatically stored in the 'elements' property
         * of the parent jsonstructures.JsonStructure element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.6.0 and higher
         */
        static createInJsonStructureUnderElements(container: jsonstructures.JsonStructure): AttributeElement;
        /**
         * Creates and returns a new AttributeElement instance in the SDK and on the server.
         * The new AttributeElement will be automatically stored in the 'children' property
         * of the parent mappings.Element element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.6.0 and higher
         */
        static createInElementUnderChildren(container: mappings.Element): AttributeElement;
        /**
         * Creates and returns a new AttributeElement instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): AttributeElement;
    }
    /**
     * In version 7.6.0: introduced
     */
    class EntityElement extends mappings.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsJsonStructure(): jsonstructures.JsonStructure;
        get containerAsElement(): mappings.Element;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new EntityElement instance in the SDK and on the server.
         * The new EntityElement will be automatically stored in the 'elements' property
         * of the parent jsonstructures.JsonStructure element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.6.0 and higher
         */
        static createInJsonStructureUnderElements(container: jsonstructures.JsonStructure): EntityElement;
        /**
         * Creates and returns a new EntityElement instance in the SDK and on the server.
         * The new EntityElement will be automatically stored in the 'children' property
         * of the parent mappings.Element element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.6.0 and higher
         */
        static createInElementUnderChildren(container: mappings.Element): EntityElement;
        /**
         * Creates and returns a new EntityElement instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): EntityElement;
    }
    /**
     * In version 7.6.0: introduced
     */
    interface IMessageDefinition extends internal.IElement, internal.IByNameReferrable {
        readonly model: IModel;
        readonly containerAsMessageDefinitionCollection: IMessageDefinitionCollection;
        readonly name: string;
        asLoaded(): MessageDefinition;
        load(callback: (element: MessageDefinition) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<MessageDefinition>;
    }
    /**
     * In version 7.6.0: introduced
     */
    abstract class MessageDefinition extends internal.Element<IModel> implements IMessageDefinition {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsMessageDefinitionCollection(): MessageDefinitionCollection;
        get name(): string;
        set name(newValue: string);
        get documentation(): string;
        set documentation(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        get qualifiedName(): string | null;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/message-definitions relevant section in reference guide}
     *
     * In version 7.6.0: introduced
     */
    interface IEntityMessageDefinition extends IMessageDefinition {
        readonly model: IModel;
        readonly containerAsMessageDefinitionCollection: IMessageDefinitionCollection;
        asLoaded(): EntityMessageDefinition;
        load(callback: (element: EntityMessageDefinition) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<EntityMessageDefinition>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/message-definitions relevant section in reference guide}
     *
     * In version 7.6.0: introduced
     */
    class EntityMessageDefinition extends MessageDefinition implements IEntityMessageDefinition {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsMessageDefinitionCollection(): MessageDefinitionCollection;
        get exposedEntity(): ExposedEntity | null;
        set exposedEntity(newValue: ExposedEntity | null);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new EntityMessageDefinition instance in the SDK and on the server.
         * The new EntityMessageDefinition will be automatically stored in the 'messageDefinitions' property
         * of the parent MessageDefinitionCollection element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.6.0 and higher
         */
        static createIn(container: MessageDefinitionCollection): EntityMessageDefinition;
        /**
         * Creates and returns a new EntityMessageDefinition instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): EntityMessageDefinition;
    }
    /**
     * In version 7.6.0: introduced
     */
    abstract class ExposedMember extends mappings.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsJsonStructure(): jsonstructures.JsonStructure;
        get containerAsElement(): mappings.Element;
        get containerAsEntityMessageDefinition(): EntityMessageDefinition;
        get originalName(): string;
        set originalName(newValue: string);
        /**
         * In version 7.15.0: introduced
         */
        get documentation(): string;
        set documentation(newValue: string);
        /**
         * In version 7.15.0: introduced
         */
        get example(): string;
        set example(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 7.6.0: introduced
     */
    abstract class ExposedEntityBase extends ExposedMember {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsJsonStructure(): jsonstructures.JsonStructure;
        get containerAsElement(): mappings.Element;
        get containerAsEntityMessageDefinition(): EntityMessageDefinition;
        get entity(): domainmodels.IEntity;
        set entity(newValue: domainmodels.IEntity);
        get entityQualifiedName(): string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 7.6.0: introduced
     */
    class ExposedAssociation extends ExposedEntityBase {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsJsonStructure(): jsonstructures.JsonStructure;
        get containerAsElement(): mappings.Element;
        get association(): domainmodels.IAssociationBase;
        set association(newValue: domainmodels.IAssociationBase);
        get associationQualifiedName(): string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ExposedAssociation instance in the SDK and on the server.
         * The new ExposedAssociation will be automatically stored in the 'elements' property
         * of the parent jsonstructures.JsonStructure element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.6.0 and higher
         */
        static createInJsonStructureUnderElements(container: jsonstructures.JsonStructure): ExposedAssociation;
        /**
         * Creates and returns a new ExposedAssociation instance in the SDK and on the server.
         * The new ExposedAssociation will be automatically stored in the 'children' property
         * of the parent mappings.Element element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.6.0 and higher
         */
        static createInElementUnderChildren(container: mappings.Element): ExposedAssociation;
        /**
         * Creates and returns a new ExposedAssociation instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ExposedAssociation;
    }
    /**
     * In version 7.6.0: introduced
     */
    class ExposedAttribute extends ExposedMember {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsJsonStructure(): jsonstructures.JsonStructure;
        get containerAsElement(): mappings.Element;
        get attribute(): domainmodels.IAttribute;
        set attribute(newValue: domainmodels.IAttribute);
        get attributeQualifiedName(): string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ExposedAttribute instance in the SDK and on the server.
         * The new ExposedAttribute will be automatically stored in the 'elements' property
         * of the parent jsonstructures.JsonStructure element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.6.0 and higher
         */
        static createInJsonStructureUnderElements(container: jsonstructures.JsonStructure): ExposedAttribute;
        /**
         * Creates and returns a new ExposedAttribute instance in the SDK and on the server.
         * The new ExposedAttribute will be automatically stored in the 'children' property
         * of the parent mappings.Element element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.6.0 and higher
         */
        static createInElementUnderChildren(container: mappings.Element): ExposedAttribute;
        /**
         * Creates and returns a new ExposedAttribute instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ExposedAttribute;
    }
    /**
     * In version 7.6.0: introduced
     */
    class ExposedEntity extends ExposedEntityBase {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsJsonStructure(): jsonstructures.JsonStructure;
        get containerAsElement(): mappings.Element;
        get containerAsEntityMessageDefinition(): EntityMessageDefinition;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ExposedEntity instance in the SDK and on the server.
         * The new ExposedEntity will be automatically stored in the 'elements' property
         * of the parent jsonstructures.JsonStructure element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.6.0 and higher
         */
        static createInJsonStructureUnderElements(container: jsonstructures.JsonStructure): ExposedEntity;
        /**
         * Creates and returns a new ExposedEntity instance in the SDK and on the server.
         * The new ExposedEntity will be automatically stored in the 'children' property
         * of the parent mappings.Element element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.6.0 and higher
         */
        static createInElementUnderChildren(container: mappings.Element): ExposedEntity;
        /**
         * Creates and returns a new ExposedEntity instance in the SDK and on the server.
         * The new ExposedEntity will be automatically stored in the 'exposedEntity' property
         * of the parent EntityMessageDefinition element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.6.0 and higher
         */
        static createInEntityMessageDefinitionUnderExposedEntity(container: EntityMessageDefinition): ExposedEntity;
        /**
         * Creates and returns a new ExposedEntity instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ExposedEntity;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/message-definitions relevant section in reference guide}
     *
     * In version 7.6.0: introduced
     */
    interface IMessageDefinitionCollection extends projects.IDocument {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        readonly messageDefinitions: internal.IList<IMessageDefinition>;
        asLoaded(): MessageDefinitionCollection;
        load(callback: (element: MessageDefinitionCollection) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<MessageDefinitionCollection>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/message-definitions relevant section in reference guide}
     *
     * In version 7.6.0: introduced
     */
    class MessageDefinitionCollection extends projects.Document implements IMessageDefinitionCollection {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFolderBase(): projects.FolderBase;
        get messageDefinitions(): internal.IList<MessageDefinition>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
        /**
         * Creates a new MessageDefinitionCollection unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container: projects.IFolderBase): MessageDefinitionCollection;
    }
}
import { domainmodels } from "./domainmodels";
import { jsonstructures } from "./jsonstructures";
import { IModel } from "./base-model";
