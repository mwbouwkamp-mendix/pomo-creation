import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
import { common } from "../common";
import { projects } from "./projects";
export declare namespace domainmodels {
    class ActionMoment extends internal.AbstractEnum {
        static Before: ActionMoment;
        static After: ActionMoment;
        protected qualifiedTsTypeName: string;
    }
    class AssociationNavigability extends internal.AbstractEnum {
        static BothDirections: AssociationNavigability;
        static ParentToChild: AssociationNavigability;
        static ChildToParent: AssociationNavigability;
        protected qualifiedTsTypeName: string;
    }
    class AssociationOwner extends internal.AbstractEnum {
        static Default: AssociationOwner;
        static Both: AssociationOwner;
        protected qualifiedTsTypeName: string;
    }
    class AssociationType extends internal.AbstractEnum {
        static Reference: AssociationType;
        static ReferenceSet: AssociationType;
        protected qualifiedTsTypeName: string;
    }
    class DeletingBehavior extends internal.AbstractEnum {
        static DeleteMeAndReferences: DeletingBehavior;
        static DeleteMeButKeepReferences: DeletingBehavior;
        static DeleteMeIfNoReferences: DeletingBehavior;
        protected qualifiedTsTypeName: string;
    }
    class EnvironmentType extends internal.AbstractEnum {
        static Production: EnvironmentType;
        static Sandbox: EnvironmentType;
        static NonProduction: EnvironmentType;
        static Unknown: EnvironmentType;
        protected qualifiedTsTypeName: string;
    }
    class EventType extends internal.AbstractEnum {
        static Create: EventType;
        static Commit: EventType;
        static Delete: EventType;
        static RollBack: EventType;
        protected qualifiedTsTypeName: string;
    }
    class IndexedAttributeType extends internal.AbstractEnum {
        static Normal: IndexedAttributeType;
        static CreatedDate: IndexedAttributeType;
        static ChangedDate: IndexedAttributeType;
        protected qualifiedTsTypeName: string;
    }
    class MemberAccessRights extends internal.AbstractEnum {
        static None: MemberAccessRights;
        static ReadOnly: MemberAccessRights;
        static ReadWrite: MemberAccessRights;
        protected qualifiedTsTypeName: string;
    }
    class Navigability extends internal.AbstractEnum {
        static BothDirections: Navigability;
        static ParentToChild: Navigability;
        protected qualifiedTsTypeName: string;
    }
    class RangeType extends internal.AbstractEnum {
        static GreaterThanOrEqualTo: RangeType;
        static SmallerThanOrEqualTo: RangeType;
        static Between: RangeType;
        protected qualifiedTsTypeName: string;
    }
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `DomainModels`.
     */
    /**
     * See: {@link https://docs.mendix.com/refguide/access-rules relevant section in reference guide}
     */
    class AccessRule extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsEntity(): Entity;
        get containerAsAccessRuleContainerBase(): security.AccessRuleContainerBase;
        get memberAccesses(): internal.IList<MemberAccess>;
        get moduleRoles(): internal.IList<security.IModuleRole>;
        get moduleRolesQualifiedNames(): string[];
        get documentation(): string;
        set documentation(newValue: string);
        get allowCreate(): boolean;
        set allowCreate(newValue: boolean);
        get allowDelete(): boolean;
        set allowDelete(newValue: boolean);
        get defaultMemberAccessRights(): MemberAccessRights;
        set defaultMemberAccessRights(newValue: MemberAccessRights);
        /**
         * The value of this property is conceptually of type xPathConstraints.XPathConstraint.
         */
        get xPathConstraint(): string;
        set xPathConstraint(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new AccessRule instance in the SDK and on the server.
         * The new AccessRule will be automatically stored in the 'accessRules' property
         * of the parent Entity element passed as argument.
         */
        static createInEntityUnderAccessRules(container: Entity): AccessRule;
        /**
         * Creates and returns a new AccessRule instance in the SDK and on the server.
         * The new AccessRule will be automatically stored in the 'accessRules' property
         * of the parent security.AccessRuleContainerBase element passed as argument.
         */
        static createInAccessRuleContainerBaseUnderAccessRules(container: security.AccessRuleContainerBase): AccessRule;
        /**
         * Creates and returns a new AccessRule instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): AccessRule;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/annotations relevant section in reference guide}
     */
    class Annotation extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsDomainModel(): DomainModel;
        get caption(): string;
        set caption(newValue: string);
        get location(): common.IPoint;
        set location(newValue: common.IPoint);
        get width(): number;
        set width(newValue: number);
        /**
         * In version 9.15.0: introduced
         */
        get exportLevel(): projects.ExportLevel;
        set exportLevel(newValue: projects.ExportLevel);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new Annotation instance in the SDK and on the server.
         * The new Annotation will be automatically stored in the 'annotations' property
         * of the parent DomainModel element passed as argument.
         */
        static createIn(container: DomainModel): Annotation;
        /**
         * Creates and returns a new Annotation instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): Annotation;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/associations relevant section in reference guide}
     */
    interface IAssociationBase extends internal.IElement, internal.IByNameReferrable {
        readonly model: IModel;
        readonly containerAsDomainModel: IDomainModel;
        readonly name: string;
        readonly type: AssociationType;
        readonly owner: AssociationOwner;
        /**
         * This property is required and cannot be set to null.
         */
        readonly parent: IEntity;
        /**
         * In version 9.10.0: added public
         */
        readonly documentation: string;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 8.10.0: deleted
         * In version 8.3.0: introduced
         */
        readonly remoteSourceDocument: IRemoteEntitySourceDocument | null;
        readonly remoteSourceDocumentQualifiedName: string | null;
        /**
         * In version 8.10.0: introduced
         */
        readonly source: IAssociationSource | null;
        /**
         * This property is required and cannot be set to null.
         *
         * In version 9.0.1: deleted
         * In version 8.11.0: introduced
         */
        readonly capabilities: IAssociationCapabilities;
        asLoaded(): AssociationBase;
        load(callback: (element: AssociationBase) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<AssociationBase>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/associations relevant section in reference guide}
     */
    abstract class AssociationBase extends internal.Element<IModel> implements IAssociationBase {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsDomainModel(): DomainModel;
        get name(): string;
        set name(newValue: string);
        get dataStorageGuid(): string;
        set dataStorageGuid(newValue: string);
        get type(): AssociationType;
        set type(newValue: AssociationType);
        get owner(): AssociationOwner;
        set owner(newValue: AssociationOwner);
        get deleteBehavior(): AssociationDeleteBehavior;
        set deleteBehavior(newValue: AssociationDeleteBehavior);
        get parent(): Entity;
        set parent(newValue: Entity);
        /**
         * In version 9.10.0: added public
         */
        get documentation(): string;
        set documentation(newValue: string);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 8.10.0: deleted
         * In version 8.3.0: introduced
         */
        get remoteSourceDocument(): IRemoteEntitySourceDocument | null;
        set remoteSourceDocument(newValue: IRemoteEntitySourceDocument | null);
        get remoteSourceDocumentQualifiedName(): string | null;
        /**
         * In version 8.10.0: introduced
         */
        get source(): AssociationSource | null;
        set source(newValue: AssociationSource | null);
        /**
         * In version 9.0.1: deleted
         * In version 8.11.0: introduced
         */
        get capabilities(): AssociationCapabilities;
        set capabilities(newValue: AssociationCapabilities);
        /**
         * In version 9.3.0: introduced
         */
        get exportLevel(): projects.ExportLevel;
        set exportLevel(newValue: projects.ExportLevel);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        get qualifiedName(): string | null;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/associations relevant section in reference guide}
     */
    interface IAssociation extends IAssociationBase {
        readonly model: IModel;
        readonly containerAsDomainModel: IDomainModel;
        /**
         * This property is required and cannot be set to null.
         */
        readonly child: IEntity;
        asLoaded(): Association;
        load(callback: (element: Association) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<Association>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/associations relevant section in reference guide}
     */
    class Association extends AssociationBase implements IAssociation {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsDomainModel(): DomainModel;
        get child(): Entity;
        set child(newValue: Entity);
        get parentConnection(): common.IPoint;
        set parentConnection(newValue: common.IPoint);
        get childConnection(): common.IPoint;
        set childConnection(newValue: common.IPoint);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new Association instance in the SDK and on the server.
         * The new Association will be automatically stored in the 'associations' property
         * of the parent DomainModel element passed as argument.
         */
        static createIn(container: DomainModel): Association;
        /**
         * Creates and returns a new Association instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): Association;
    }
    /**
     * In version 9.0.1: deleted
     * In version 8.11.0: introduced
     */
    interface IAssociationCapabilities extends internal.IElement {
        readonly model: IModel;
        readonly containerAsAssociationBase: IAssociationBase;
        asLoaded(): AssociationCapabilities;
        load(callback: (element: AssociationCapabilities) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<AssociationCapabilities>;
    }
    /**
     * In version 9.0.1: deleted
     * In version 8.11.0: introduced
     */
    class AssociationCapabilities extends internal.Element<IModel> implements IAssociationCapabilities {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsAssociationBase(): AssociationBase;
        get navigability(): AssociationNavigability;
        set navigability(newValue: AssociationNavigability);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new AssociationCapabilities instance in the SDK and on the server.
         * The new AssociationCapabilities will be automatically stored in the 'capabilities' property
         * of the parent AssociationBase element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.11.0 to 9.0.0
         */
        static createIn(container: AssociationBase): AssociationCapabilities;
        /**
         * Creates and returns a new AssociationCapabilities instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): AssociationCapabilities;
    }
    class AssociationDeleteBehavior extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsAssociationBase(): AssociationBase;
        get parentDeleteBehavior(): DeletingBehavior;
        set parentDeleteBehavior(newValue: DeletingBehavior);
        get childDeleteBehavior(): DeletingBehavior;
        set childDeleteBehavior(newValue: DeletingBehavior);
        get parentErrorMessage(): texts.Text | null;
        set parentErrorMessage(newValue: texts.Text | null);
        get childErrorMessage(): texts.Text | null;
        set childErrorMessage(newValue: texts.Text | null);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new AssociationDeleteBehavior instance in the SDK and on the server.
         * The new AssociationDeleteBehavior will be automatically stored in the 'deleteBehavior' property
         * of the parent AssociationBase element passed as argument.
         */
        static createIn(container: AssociationBase): AssociationDeleteBehavior;
        /**
         * Creates and returns a new AssociationDeleteBehavior instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): AssociationDeleteBehavior;
    }
    /**
     * In version 9.6.0: added public
     * In version 7.11.0: introduced
     */
    interface IMemberRef extends internal.IElement {
        readonly model: IModel;
        /**
         * In version 9.6.0: added public
         */
        readonly entityRef: IIndirectEntityRef | null;
        asLoaded(): MemberRef;
        load(callback: (element: MemberRef) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<MemberRef>;
    }
    /**
     * In version 9.6.0: added public
     * In version 7.11.0: introduced
     */
    abstract class MemberRef extends internal.Element<IModel> implements IMemberRef {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsWidgetValue(): customwidgets.WidgetValue;
        get containerAsAttributeWidget(): documenttemplates.AttributeWidget;
        get containerAsDataGridColumn(): documenttemplates.DataGridColumn;
        get containerAsDocumentTemplatesGridSortItem(): documenttemplates.GridSortItem;
        get containerAsVariableRefExpression(): expressions.VariableRefExpression;
        get containerAsSortItem(): microflows.SortItem;
        get containerAsClientTemplateParameter(): pages.ClientTemplateParameter;
        get containerAsGridColumn(): pages.GridColumn;
        get containerAsPagesGridSortItem(): pages.GridSortItem;
        get containerAsListViewSearch(): pages.ListViewSearch;
        get containerAsMemberWidget(): pages.MemberWidget;
        get containerAsRangeSearchField(): pages.RangeSearchField;
        get containerAsSingleSearchField(): pages.SingleSearchField;
        get containerAsStaticOrDynamicString(): pages.StaticOrDynamicString;
        /**
         * In version 9.6.0: added public
         */
        get entityRef(): IndirectEntityRef | null;
        set entityRef(newValue: IndirectEntityRef | null);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 9.6.0: added public
     * In version 7.11.0: introduced
     */
    interface IAssociationRef extends IMemberRef {
        readonly model: IModel;
        asLoaded(): AssociationRef;
        load(callback: (element: AssociationRef) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<AssociationRef>;
    }
    /**
     * In version 9.6.0: added public
     * In version 7.11.0: introduced
     */
    class AssociationRef extends MemberRef implements IAssociationRef {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsVariableRefExpression(): expressions.VariableRefExpression;
        get association(): IAssociationBase;
        set association(newValue: IAssociationBase);
        get associationQualifiedName(): string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new AssociationRef instance in the SDK and on the server.
         * The new AssociationRef will be automatically stored in the 'member' property
         * of the parent expressions.VariableRefExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 to 9.7.0
         */
        static createIn(container: expressions.VariableRefExpression): AssociationRef;
        /**
         * Creates and returns a new AssociationRef instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): AssociationRef;
    }
    /**
     * In version 8.10.0: introduced
     */
    interface IAssociationSource extends internal.IElement {
        readonly model: IModel;
        readonly containerAsAssociationBase: IAssociationBase;
        asLoaded(): AssociationSource;
        load(callback: (element: AssociationSource) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<AssociationSource>;
    }
    /**
     * In version 8.10.0: introduced
     */
    abstract class AssociationSource extends internal.Element<IModel> implements IAssociationSource {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsAssociationBase(): AssociationBase;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/attributes relevant section in reference guide}
     */
    interface IAttribute extends internal.IElement, internal.IByNameReferrable {
        readonly model: IModel;
        readonly containerAsEntity: IEntity;
        readonly name: string;
        /**
         * This property is required and cannot be set to null.
         */
        readonly type: IAttributeType;
        /**
         * In version 9.10.0: added public
         */
        readonly documentation: string;
        /**
         * This property is required and cannot be set to null.
         *
         * In version 6.6.0: added public
         */
        readonly value: IValueType;
        /**
         * This property is required and cannot be set to null.
         *
         * In version 9.0.1: deleted
         * In version 8.13.0: introduced
         */
        readonly capabilities: IAttributeCapabilities;
        asLoaded(): Attribute;
        load(callback: (element: Attribute) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<Attribute>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/attributes relevant section in reference guide}
     */
    class Attribute extends internal.Element<IModel> implements IAttribute {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsEntity(): Entity;
        get name(): string;
        set name(newValue: string);
        get dataStorageGuid(): string;
        set dataStorageGuid(newValue: string);
        get type(): AttributeType;
        set type(newValue: AttributeType);
        /**
         * In version 9.10.0: added public
         */
        get documentation(): string;
        set documentation(newValue: string);
        /**
         * In version 6.6.0: added public
         */
        get value(): ValueType;
        set value(newValue: ValueType);
        /**
         * In version 9.0.1: deleted
         * In version 8.13.0: introduced
         */
        get capabilities(): AttributeCapabilities;
        set capabilities(newValue: AttributeCapabilities);
        /**
         * In version 9.3.0: introduced
         */
        get exportLevel(): projects.ExportLevel;
        set exportLevel(newValue: projects.ExportLevel);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new Attribute instance in the SDK and on the server.
         * The new Attribute will be automatically stored in the 'attributes' property
         * of the parent Entity element passed as argument.
         */
        static createIn(container: Entity): Attribute;
        /**
         * Creates and returns a new Attribute instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): Attribute;
        get qualifiedName(): string | null;
    }
    /**
     * In version 9.0.1: deleted
     * In version 8.13.0: introduced
     */
    interface IAttributeCapabilities extends internal.IElement {
        readonly model: IModel;
        readonly containerAsAttribute: IAttribute;
        readonly filterable: boolean;
        readonly sortable: boolean;
        asLoaded(): AttributeCapabilities;
        load(callback: (element: AttributeCapabilities) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<AttributeCapabilities>;
    }
    /**
     * In version 9.0.1: deleted
     * In version 8.13.0: introduced
     */
    class AttributeCapabilities extends internal.Element<IModel> implements IAttributeCapabilities {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsAttribute(): Attribute;
        get filterable(): boolean;
        set filterable(newValue: boolean);
        get sortable(): boolean;
        set sortable(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new AttributeCapabilities instance in the SDK and on the server.
         * The new AttributeCapabilities will be automatically stored in the 'capabilities' property
         * of the parent Attribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.13.0 to 9.0.0
         */
        static createIn(container: Attribute): AttributeCapabilities;
        /**
         * Creates and returns a new AttributeCapabilities instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): AttributeCapabilities;
    }
    /**
     * In version 9.6.0: added public
     * In version 7.11.0: introduced
     */
    interface IAttributeRef extends IMemberRef {
        readonly model: IModel;
        asLoaded(): AttributeRef;
        load(callback: (element: AttributeRef) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<AttributeRef>;
    }
    /**
     * In version 9.6.0: added public
     * In version 7.11.0: introduced
     */
    class AttributeRef extends MemberRef implements IAttributeRef {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsWidgetValue(): customwidgets.WidgetValue;
        get containerAsAttributeWidget(): documenttemplates.AttributeWidget;
        get containerAsDataGridColumn(): documenttemplates.DataGridColumn;
        get containerAsDocumentTemplatesGridSortItem(): documenttemplates.GridSortItem;
        get containerAsVariableRefExpression(): expressions.VariableRefExpression;
        get containerAsSortItem(): microflows.SortItem;
        get containerAsClientTemplateParameter(): pages.ClientTemplateParameter;
        get containerAsGridColumn(): pages.GridColumn;
        get containerAsPagesGridSortItem(): pages.GridSortItem;
        get containerAsListViewSearch(): pages.ListViewSearch;
        get containerAsMemberWidget(): pages.MemberWidget;
        get containerAsRangeSearchField(): pages.RangeSearchField;
        get containerAsSingleSearchField(): pages.SingleSearchField;
        get containerAsStaticOrDynamicString(): pages.StaticOrDynamicString;
        get attribute(): IAttribute;
        set attribute(newValue: IAttribute);
        get attributeQualifiedName(): string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new AttributeRef instance in the SDK and on the server.
         * The new AttributeRef will be automatically stored in the 'attributeRef' property
         * of the parent customwidgets.WidgetValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInWidgetValueUnderAttributeRef(container: customwidgets.WidgetValue): AttributeRef;
        /**
         * Creates and returns a new AttributeRef instance in the SDK and on the server.
         * The new AttributeRef will be automatically stored in the 'attributeRef' property
         * of the parent documenttemplates.AttributeWidget element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInAttributeWidgetUnderAttributeRef(container: documenttemplates.AttributeWidget): AttributeRef;
        /**
         * Creates and returns a new AttributeRef instance in the SDK and on the server.
         * The new AttributeRef will be automatically stored in the 'attributeRef' property
         * of the parent documenttemplates.DataGridColumn element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInDataGridColumnUnderAttributeRef(container: documenttemplates.DataGridColumn): AttributeRef;
        /**
         * Creates and returns a new AttributeRef instance in the SDK and on the server.
         * The new AttributeRef will be automatically stored in the 'attributeRef' property
         * of the parent documenttemplates.GridSortItem element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInDocumentTemplatesGridSortItemUnderAttributeRef(container: documenttemplates.GridSortItem): AttributeRef;
        /**
         * Creates and returns a new AttributeRef instance in the SDK and on the server.
         * The new AttributeRef will be automatically stored in the 'member' property
         * of the parent expressions.VariableRefExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 to 9.7.0
         */
        static createInVariableRefExpressionUnderMember(container: expressions.VariableRefExpression): AttributeRef;
        /**
         * Creates and returns a new AttributeRef instance in the SDK and on the server.
         * The new AttributeRef will be automatically stored in the 'attributeRef' property
         * of the parent microflows.SortItem element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInSortItemUnderAttributeRef(container: microflows.SortItem): AttributeRef;
        /**
         * Creates and returns a new AttributeRef instance in the SDK and on the server.
         * The new AttributeRef will be automatically stored in the 'attributeRef' property
         * of the parent pages.ClientTemplateParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInClientTemplateParameterUnderAttributeRef(container: pages.ClientTemplateParameter): AttributeRef;
        /**
         * Creates and returns a new AttributeRef instance in the SDK and on the server.
         * The new AttributeRef will be automatically stored in the 'attributeRef' property
         * of the parent pages.GridColumn element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInGridColumnUnderAttributeRef(container: pages.GridColumn): AttributeRef;
        /**
         * Creates and returns a new AttributeRef instance in the SDK and on the server.
         * The new AttributeRef will be automatically stored in the 'attributeRef' property
         * of the parent pages.GridSortItem element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInPagesGridSortItemUnderAttributeRef(container: pages.GridSortItem): AttributeRef;
        /**
         * Creates and returns a new AttributeRef instance in the SDK and on the server.
         * The new AttributeRef will be automatically stored in the 'searchRefs' property
         * of the parent pages.ListViewSearch element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInListViewSearchUnderSearchRefs(container: pages.ListViewSearch): AttributeRef;
        /**
         * Creates and returns a new AttributeRef instance in the SDK and on the server.
         * The new AttributeRef will be automatically stored in the 'attributeRef' property
         * of the parent pages.MemberWidget element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInMemberWidgetUnderAttributeRef(container: pages.MemberWidget): AttributeRef;
        /**
         * Creates and returns a new AttributeRef instance in the SDK and on the server.
         * The new AttributeRef will be automatically stored in the 'lowerBoundRef' property
         * of the parent pages.RangeSearchField element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInRangeSearchFieldUnderLowerBoundRef(container: pages.RangeSearchField): AttributeRef;
        /**
         * Creates and returns a new AttributeRef instance in the SDK and on the server.
         * The new AttributeRef will be automatically stored in the 'upperBoundRef' property
         * of the parent pages.RangeSearchField element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInRangeSearchFieldUnderUpperBoundRef(container: pages.RangeSearchField): AttributeRef;
        /**
         * Creates and returns a new AttributeRef instance in the SDK and on the server.
         * The new AttributeRef will be automatically stored in the 'attributeRef' property
         * of the parent pages.SingleSearchField element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInSingleSearchFieldUnderAttributeRef(container: pages.SingleSearchField): AttributeRef;
        /**
         * Creates and returns a new AttributeRef instance in the SDK and on the server.
         * The new AttributeRef will be automatically stored in the 'attributeRef' property
         * of the parent pages.StaticOrDynamicString element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInStaticOrDynamicStringUnderAttributeRef(container: pages.StaticOrDynamicString): AttributeRef;
        /**
         * Creates and returns a new AttributeRef instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): AttributeRef;
    }
    interface IAttributeType extends internal.IElement {
        readonly model: IModel;
        readonly containerAsAttribute: IAttribute;
        readonly containerAsEntityKeyPart: IEntityKeyPart;
        readonly containerAsODataKeyPart: rest.IODataKeyPart;
        asLoaded(): AttributeType;
        load(callback: (element: AttributeType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<AttributeType>;
    }
    abstract class AttributeType extends internal.Element<IModel> implements IAttributeType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsPublishedMessageAttribute(): businessevents.PublishedMessageAttribute;
        get containerAsAttribute(): Attribute;
        get containerAsEntityKeyPart(): EntityKeyPart;
        get containerAsTensorMappingElement(): mlmappings.TensorMappingElement;
        get containerAsODataKeyPart(): rest.ODataKeyPart;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    interface INumericAttributeTypeBase extends IAttributeType {
        readonly model: IModel;
        readonly containerAsAttribute: IAttribute;
        readonly containerAsEntityKeyPart: IEntityKeyPart;
        readonly containerAsODataKeyPart: rest.IODataKeyPart;
        asLoaded(): NumericAttributeTypeBase;
        load(callback: (element: NumericAttributeTypeBase) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<NumericAttributeTypeBase>;
    }
    abstract class NumericAttributeTypeBase extends AttributeType implements INumericAttributeTypeBase {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsPublishedMessageAttribute(): businessevents.PublishedMessageAttribute;
        get containerAsAttribute(): Attribute;
        get containerAsEntityKeyPart(): EntityKeyPart;
        get containerAsTensorMappingElement(): mlmappings.TensorMappingElement;
        get containerAsODataKeyPart(): rest.ODataKeyPart;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    interface IIntegerAttributeTypeBase extends INumericAttributeTypeBase {
        readonly model: IModel;
        readonly containerAsAttribute: IAttribute;
        readonly containerAsEntityKeyPart: IEntityKeyPart;
        readonly containerAsODataKeyPart: rest.IODataKeyPart;
        asLoaded(): IntegerAttributeTypeBase;
        load(callback: (element: IntegerAttributeTypeBase) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<IntegerAttributeTypeBase>;
    }
    abstract class IntegerAttributeTypeBase extends NumericAttributeTypeBase implements IIntegerAttributeTypeBase {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsPublishedMessageAttribute(): businessevents.PublishedMessageAttribute;
        get containerAsAttribute(): Attribute;
        get containerAsEntityKeyPart(): EntityKeyPart;
        get containerAsTensorMappingElement(): mlmappings.TensorMappingElement;
        get containerAsODataKeyPart(): rest.ODataKeyPart;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    interface IAutoNumberAttributeType extends IIntegerAttributeTypeBase {
        readonly model: IModel;
        readonly containerAsAttribute: IAttribute;
        readonly containerAsEntityKeyPart: IEntityKeyPart;
        readonly containerAsODataKeyPart: rest.IODataKeyPart;
        asLoaded(): AutoNumberAttributeType;
        load(callback: (element: AutoNumberAttributeType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<AutoNumberAttributeType>;
    }
    class AutoNumberAttributeType extends IntegerAttributeTypeBase implements IAutoNumberAttributeType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsPublishedMessageAttribute(): businessevents.PublishedMessageAttribute;
        get containerAsAttribute(): Attribute;
        get containerAsEntityKeyPart(): EntityKeyPart;
        get containerAsTensorMappingElement(): mlmappings.TensorMappingElement;
        get containerAsODataKeyPart(): rest.ODataKeyPart;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new AutoNumberAttributeType instance in the SDK and on the server.
         * The new AutoNumberAttributeType will be automatically stored in the 'type' property
         * of the parent Attribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 8.8.0
         */
        static createIn(container: Attribute): AutoNumberAttributeType;
        /**
         * Creates and returns a new AutoNumberAttributeType instance in the SDK and on the server.
         * The new AutoNumberAttributeType will be automatically stored in the 'attributeType' property
         * of the parent businessevents.PublishedMessageAttribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.14.0 and higher
         */
        static createInPublishedMessageAttributeUnderAttributeType(container: businessevents.PublishedMessageAttribute): AutoNumberAttributeType;
        /**
         * Creates and returns a new AutoNumberAttributeType instance in the SDK and on the server.
         * The new AutoNumberAttributeType will be automatically stored in the 'type' property
         * of the parent Attribute element passed as argument.
         */
        static createInAttributeUnderType(container: Attribute): AutoNumberAttributeType;
        /**
         * Creates and returns a new AutoNumberAttributeType instance in the SDK and on the server.
         * The new AutoNumberAttributeType will be automatically stored in the 'type' property
         * of the parent EntityKeyPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.9.0 and higher
         */
        static createInEntityKeyPartUnderType(container: EntityKeyPart): AutoNumberAttributeType;
        /**
         * Creates and returns a new AutoNumberAttributeType instance in the SDK and on the server.
         * The new AutoNumberAttributeType will be automatically stored in the 'attributeType' property
         * of the parent mlmappings.TensorMappingElement element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.17.0 and higher
         */
        static createInTensorMappingElementUnderAttributeType(container: mlmappings.TensorMappingElement): AutoNumberAttributeType;
        /**
         * Creates and returns a new AutoNumberAttributeType instance in the SDK and on the server.
         * The new AutoNumberAttributeType will be automatically stored in the 'type' property
         * of the parent rest.ODataKeyPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.9.0 and higher
         */
        static createInODataKeyPartUnderType(container: rest.ODataKeyPart): AutoNumberAttributeType;
        /**
         * Creates and returns a new AutoNumberAttributeType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): AutoNumberAttributeType;
    }
    interface IBinaryAttributeType extends IAttributeType {
        readonly model: IModel;
        readonly containerAsAttribute: IAttribute;
        readonly containerAsEntityKeyPart: IEntityKeyPart;
        readonly containerAsODataKeyPart: rest.IODataKeyPart;
        asLoaded(): BinaryAttributeType;
        load(callback: (element: BinaryAttributeType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<BinaryAttributeType>;
    }
    class BinaryAttributeType extends AttributeType implements IBinaryAttributeType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsPublishedMessageAttribute(): businessevents.PublishedMessageAttribute;
        get containerAsAttribute(): Attribute;
        get containerAsEntityKeyPart(): EntityKeyPart;
        get containerAsTensorMappingElement(): mlmappings.TensorMappingElement;
        get containerAsODataKeyPart(): rest.ODataKeyPart;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new BinaryAttributeType instance in the SDK and on the server.
         * The new BinaryAttributeType will be automatically stored in the 'type' property
         * of the parent Attribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 8.8.0
         */
        static createIn(container: Attribute): BinaryAttributeType;
        /**
         * Creates and returns a new BinaryAttributeType instance in the SDK and on the server.
         * The new BinaryAttributeType will be automatically stored in the 'attributeType' property
         * of the parent businessevents.PublishedMessageAttribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.14.0 and higher
         */
        static createInPublishedMessageAttributeUnderAttributeType(container: businessevents.PublishedMessageAttribute): BinaryAttributeType;
        /**
         * Creates and returns a new BinaryAttributeType instance in the SDK and on the server.
         * The new BinaryAttributeType will be automatically stored in the 'type' property
         * of the parent Attribute element passed as argument.
         */
        static createInAttributeUnderType(container: Attribute): BinaryAttributeType;
        /**
         * Creates and returns a new BinaryAttributeType instance in the SDK and on the server.
         * The new BinaryAttributeType will be automatically stored in the 'type' property
         * of the parent EntityKeyPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.9.0 and higher
         */
        static createInEntityKeyPartUnderType(container: EntityKeyPart): BinaryAttributeType;
        /**
         * Creates and returns a new BinaryAttributeType instance in the SDK and on the server.
         * The new BinaryAttributeType will be automatically stored in the 'attributeType' property
         * of the parent mlmappings.TensorMappingElement element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.17.0 and higher
         */
        static createInTensorMappingElementUnderAttributeType(container: mlmappings.TensorMappingElement): BinaryAttributeType;
        /**
         * Creates and returns a new BinaryAttributeType instance in the SDK and on the server.
         * The new BinaryAttributeType will be automatically stored in the 'type' property
         * of the parent rest.ODataKeyPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.9.0 and higher
         */
        static createInODataKeyPartUnderType(container: rest.ODataKeyPart): BinaryAttributeType;
        /**
         * Creates and returns a new BinaryAttributeType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): BinaryAttributeType;
    }
    interface IBooleanAttributeType extends IAttributeType {
        readonly model: IModel;
        readonly containerAsAttribute: IAttribute;
        readonly containerAsEntityKeyPart: IEntityKeyPart;
        readonly containerAsODataKeyPart: rest.IODataKeyPart;
        asLoaded(): BooleanAttributeType;
        load(callback: (element: BooleanAttributeType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<BooleanAttributeType>;
    }
    class BooleanAttributeType extends AttributeType implements IBooleanAttributeType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsPublishedMessageAttribute(): businessevents.PublishedMessageAttribute;
        get containerAsAttribute(): Attribute;
        get containerAsEntityKeyPart(): EntityKeyPart;
        get containerAsTensorMappingElement(): mlmappings.TensorMappingElement;
        get containerAsODataKeyPart(): rest.ODataKeyPart;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new BooleanAttributeType instance in the SDK and on the server.
         * The new BooleanAttributeType will be automatically stored in the 'type' property
         * of the parent Attribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 8.8.0
         */
        static createIn(container: Attribute): BooleanAttributeType;
        /**
         * Creates and returns a new BooleanAttributeType instance in the SDK and on the server.
         * The new BooleanAttributeType will be automatically stored in the 'attributeType' property
         * of the parent businessevents.PublishedMessageAttribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.14.0 and higher
         */
        static createInPublishedMessageAttributeUnderAttributeType(container: businessevents.PublishedMessageAttribute): BooleanAttributeType;
        /**
         * Creates and returns a new BooleanAttributeType instance in the SDK and on the server.
         * The new BooleanAttributeType will be automatically stored in the 'type' property
         * of the parent Attribute element passed as argument.
         */
        static createInAttributeUnderType(container: Attribute): BooleanAttributeType;
        /**
         * Creates and returns a new BooleanAttributeType instance in the SDK and on the server.
         * The new BooleanAttributeType will be automatically stored in the 'type' property
         * of the parent EntityKeyPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.9.0 and higher
         */
        static createInEntityKeyPartUnderType(container: EntityKeyPart): BooleanAttributeType;
        /**
         * Creates and returns a new BooleanAttributeType instance in the SDK and on the server.
         * The new BooleanAttributeType will be automatically stored in the 'attributeType' property
         * of the parent mlmappings.TensorMappingElement element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.17.0 and higher
         */
        static createInTensorMappingElementUnderAttributeType(container: mlmappings.TensorMappingElement): BooleanAttributeType;
        /**
         * Creates and returns a new BooleanAttributeType instance in the SDK and on the server.
         * The new BooleanAttributeType will be automatically stored in the 'type' property
         * of the parent rest.ODataKeyPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.9.0 and higher
         */
        static createInODataKeyPartUnderType(container: rest.ODataKeyPart): BooleanAttributeType;
        /**
         * Creates and returns a new BooleanAttributeType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): BooleanAttributeType;
    }
    /**
     * In version 6.6.0: added public
     */
    interface IValueType extends internal.IElement {
        readonly model: IModel;
        readonly containerAsAttribute: IAttribute;
        asLoaded(): ValueType;
        load(callback: (element: ValueType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ValueType>;
    }
    /**
     * In version 6.6.0: added public
     */
    abstract class ValueType extends internal.Element<IModel> implements IValueType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsAttribute(): Attribute;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 8.10.0: introduced
     */
    interface IMappedValue extends IValueType {
        readonly model: IModel;
        readonly containerAsAttribute: IAttribute;
        asLoaded(): MappedValue;
        load(callback: (element: MappedValue) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<MappedValue>;
    }
    /**
     * In version 8.10.0: introduced
     */
    abstract class MappedValue extends ValueType implements IMappedValue {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsAttribute(): Attribute;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 9.0.2: introduced
     */
    interface ICachedMappedValue extends IMappedValue {
        readonly model: IModel;
        readonly containerAsAttribute: IAttribute;
        asLoaded(): CachedMappedValue;
        load(callback: (element: CachedMappedValue) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<CachedMappedValue>;
    }
    /**
     * In version 9.0.2: introduced
     */
    abstract class CachedMappedValue extends MappedValue implements ICachedMappedValue {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsAttribute(): Attribute;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 6.6.0: added public
     */
    interface ICalculatedValue extends IValueType {
        readonly model: IModel;
        readonly containerAsAttribute: IAttribute;
        asLoaded(): CalculatedValue;
        load(callback: (element: CalculatedValue) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<CalculatedValue>;
    }
    /**
     * In version 6.6.0: added public
     */
    class CalculatedValue extends ValueType implements ICalculatedValue {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsAttribute(): Attribute;
        get microflow(): microflows.IMicroflow | null;
        set microflow(newValue: microflows.IMicroflow | null);
        get microflowQualifiedName(): string | null;
        get passEntity(): boolean;
        set passEntity(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new CalculatedValue instance in the SDK and on the server.
         * The new CalculatedValue will be automatically stored in the 'value' property
         * of the parent Attribute element passed as argument.
         */
        static createIn(container: Attribute): CalculatedValue;
        /**
         * Creates and returns a new CalculatedValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): CalculatedValue;
    }
    interface ICrossAssociation extends IAssociationBase {
        readonly model: IModel;
        readonly containerAsDomainModel: IDomainModel;
        /**
         * This property is required and cannot be set to null.
         */
        readonly child: IEntity;
        readonly childQualifiedName: string;
        asLoaded(): CrossAssociation;
        load(callback: (element: CrossAssociation) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<CrossAssociation>;
    }
    class CrossAssociation extends AssociationBase implements ICrossAssociation {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsDomainModel(): DomainModel;
        get child(): IEntity;
        set child(newValue: IEntity);
        get childQualifiedName(): string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new CrossAssociation instance in the SDK and on the server.
         * The new CrossAssociation will be automatically stored in the 'crossAssociations' property
         * of the parent DomainModel element passed as argument.
         */
        static createIn(container: DomainModel): CrossAssociation;
        /**
         * Creates and returns a new CrossAssociation instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): CrossAssociation;
    }
    interface IDecimalAttributeTypeBase extends INumericAttributeTypeBase {
        readonly model: IModel;
        readonly containerAsAttribute: IAttribute;
        readonly containerAsEntityKeyPart: IEntityKeyPart;
        readonly containerAsODataKeyPart: rest.IODataKeyPart;
        asLoaded(): DecimalAttributeTypeBase;
        load(callback: (element: DecimalAttributeTypeBase) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<DecimalAttributeTypeBase>;
    }
    abstract class DecimalAttributeTypeBase extends NumericAttributeTypeBase implements IDecimalAttributeTypeBase {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsPublishedMessageAttribute(): businessevents.PublishedMessageAttribute;
        get containerAsAttribute(): Attribute;
        get containerAsEntityKeyPart(): EntityKeyPart;
        get containerAsTensorMappingElement(): mlmappings.TensorMappingElement;
        get containerAsODataKeyPart(): rest.ODataKeyPart;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 9.1.0: deleted
     */
    interface IFloatAttributeTypeBase extends IDecimalAttributeTypeBase {
        readonly model: IModel;
        readonly containerAsAttribute: IAttribute;
        readonly containerAsEntityKeyPart: IEntityKeyPart;
        readonly containerAsODataKeyPart: rest.IODataKeyPart;
        asLoaded(): FloatAttributeTypeBase;
        load(callback: (element: FloatAttributeTypeBase) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<FloatAttributeTypeBase>;
    }
    /**
     * In version 9.1.0: deleted
     */
    abstract class FloatAttributeTypeBase extends DecimalAttributeTypeBase implements IFloatAttributeTypeBase {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsAttribute(): Attribute;
        get containerAsEntityKeyPart(): EntityKeyPart;
        get containerAsODataKeyPart(): rest.ODataKeyPart;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 9.1.0: deleted
     * In version 6.0.0: deprecated
     */
    interface ICurrencyAttributeType extends IFloatAttributeTypeBase {
        readonly model: IModel;
        readonly containerAsAttribute: IAttribute;
        readonly containerAsEntityKeyPart: IEntityKeyPart;
        readonly containerAsODataKeyPart: rest.IODataKeyPart;
        asLoaded(): CurrencyAttributeType;
        load(callback: (element: CurrencyAttributeType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<CurrencyAttributeType>;
    }
    /**
     * In version 9.1.0: deleted
     * In version 6.0.0: deprecated
     */
    class CurrencyAttributeType extends FloatAttributeTypeBase implements ICurrencyAttributeType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsAttribute(): Attribute;
        get containerAsEntityKeyPart(): EntityKeyPart;
        get containerAsODataKeyPart(): rest.ODataKeyPart;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new CurrencyAttributeType instance in the SDK and on the server.
         * The new CurrencyAttributeType will be automatically stored in the 'type' property
         * of the parent Attribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 8.8.0
         */
        static createIn(container: Attribute): CurrencyAttributeType;
        /**
         * Creates and returns a new CurrencyAttributeType instance in the SDK and on the server.
         * The new CurrencyAttributeType will be automatically stored in the 'type' property
         * of the parent Attribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 9.0.5
         */
        static createInAttributeUnderType(container: Attribute): CurrencyAttributeType;
        /**
         * Creates and returns a new CurrencyAttributeType instance in the SDK and on the server.
         * The new CurrencyAttributeType will be automatically stored in the 'type' property
         * of the parent EntityKeyPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.9.0 to 9.0.5
         */
        static createInEntityKeyPartUnderType(container: EntityKeyPart): CurrencyAttributeType;
        /**
         * Creates and returns a new CurrencyAttributeType instance in the SDK and on the server.
         * The new CurrencyAttributeType will be automatically stored in the 'type' property
         * of the parent rest.ODataKeyPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.9.0 to 9.0.5
         */
        static createInODataKeyPartUnderType(container: rest.ODataKeyPart): CurrencyAttributeType;
        /**
         * Creates and returns a new CurrencyAttributeType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): CurrencyAttributeType;
    }
    interface IDateTimeAttributeType extends IAttributeType {
        readonly model: IModel;
        readonly containerAsAttribute: IAttribute;
        readonly containerAsEntityKeyPart: IEntityKeyPart;
        readonly containerAsODataKeyPart: rest.IODataKeyPart;
        asLoaded(): DateTimeAttributeType;
        load(callback: (element: DateTimeAttributeType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<DateTimeAttributeType>;
    }
    class DateTimeAttributeType extends AttributeType implements IDateTimeAttributeType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsPublishedMessageAttribute(): businessevents.PublishedMessageAttribute;
        get containerAsAttribute(): Attribute;
        get containerAsEntityKeyPart(): EntityKeyPart;
        get containerAsTensorMappingElement(): mlmappings.TensorMappingElement;
        get containerAsODataKeyPart(): rest.ODataKeyPart;
        get localizeDate(): boolean;
        set localizeDate(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new DateTimeAttributeType instance in the SDK and on the server.
         * The new DateTimeAttributeType will be automatically stored in the 'type' property
         * of the parent Attribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 8.8.0
         */
        static createIn(container: Attribute): DateTimeAttributeType;
        /**
         * Creates and returns a new DateTimeAttributeType instance in the SDK and on the server.
         * The new DateTimeAttributeType will be automatically stored in the 'attributeType' property
         * of the parent businessevents.PublishedMessageAttribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.14.0 and higher
         */
        static createInPublishedMessageAttributeUnderAttributeType(container: businessevents.PublishedMessageAttribute): DateTimeAttributeType;
        /**
         * Creates and returns a new DateTimeAttributeType instance in the SDK and on the server.
         * The new DateTimeAttributeType will be automatically stored in the 'type' property
         * of the parent Attribute element passed as argument.
         */
        static createInAttributeUnderType(container: Attribute): DateTimeAttributeType;
        /**
         * Creates and returns a new DateTimeAttributeType instance in the SDK and on the server.
         * The new DateTimeAttributeType will be automatically stored in the 'type' property
         * of the parent EntityKeyPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.9.0 and higher
         */
        static createInEntityKeyPartUnderType(container: EntityKeyPart): DateTimeAttributeType;
        /**
         * Creates and returns a new DateTimeAttributeType instance in the SDK and on the server.
         * The new DateTimeAttributeType will be automatically stored in the 'attributeType' property
         * of the parent mlmappings.TensorMappingElement element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.17.0 and higher
         */
        static createInTensorMappingElementUnderAttributeType(container: mlmappings.TensorMappingElement): DateTimeAttributeType;
        /**
         * Creates and returns a new DateTimeAttributeType instance in the SDK and on the server.
         * The new DateTimeAttributeType will be automatically stored in the 'type' property
         * of the parent rest.ODataKeyPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.9.0 and higher
         */
        static createInODataKeyPartUnderType(container: rest.ODataKeyPart): DateTimeAttributeType;
        /**
         * Creates and returns a new DateTimeAttributeType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): DateTimeAttributeType;
    }
    interface IDecimalAttributeType extends IDecimalAttributeTypeBase {
        readonly model: IModel;
        readonly containerAsAttribute: IAttribute;
        readonly containerAsEntityKeyPart: IEntityKeyPart;
        readonly containerAsODataKeyPart: rest.IODataKeyPart;
        asLoaded(): DecimalAttributeType;
        load(callback: (element: DecimalAttributeType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<DecimalAttributeType>;
    }
    class DecimalAttributeType extends DecimalAttributeTypeBase implements IDecimalAttributeType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsPublishedMessageAttribute(): businessevents.PublishedMessageAttribute;
        get containerAsAttribute(): Attribute;
        get containerAsEntityKeyPart(): EntityKeyPart;
        get containerAsTensorMappingElement(): mlmappings.TensorMappingElement;
        get containerAsODataKeyPart(): rest.ODataKeyPart;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new DecimalAttributeType instance in the SDK and on the server.
         * The new DecimalAttributeType will be automatically stored in the 'type' property
         * of the parent Attribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 8.8.0
         */
        static createIn(container: Attribute): DecimalAttributeType;
        /**
         * Creates and returns a new DecimalAttributeType instance in the SDK and on the server.
         * The new DecimalAttributeType will be automatically stored in the 'attributeType' property
         * of the parent businessevents.PublishedMessageAttribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.14.0 and higher
         */
        static createInPublishedMessageAttributeUnderAttributeType(container: businessevents.PublishedMessageAttribute): DecimalAttributeType;
        /**
         * Creates and returns a new DecimalAttributeType instance in the SDK and on the server.
         * The new DecimalAttributeType will be automatically stored in the 'type' property
         * of the parent Attribute element passed as argument.
         */
        static createInAttributeUnderType(container: Attribute): DecimalAttributeType;
        /**
         * Creates and returns a new DecimalAttributeType instance in the SDK and on the server.
         * The new DecimalAttributeType will be automatically stored in the 'type' property
         * of the parent EntityKeyPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.9.0 and higher
         */
        static createInEntityKeyPartUnderType(container: EntityKeyPart): DecimalAttributeType;
        /**
         * Creates and returns a new DecimalAttributeType instance in the SDK and on the server.
         * The new DecimalAttributeType will be automatically stored in the 'attributeType' property
         * of the parent mlmappings.TensorMappingElement element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.17.0 and higher
         */
        static createInTensorMappingElementUnderAttributeType(container: mlmappings.TensorMappingElement): DecimalAttributeType;
        /**
         * Creates and returns a new DecimalAttributeType instance in the SDK and on the server.
         * The new DecimalAttributeType will be automatically stored in the 'type' property
         * of the parent rest.ODataKeyPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.9.0 and higher
         */
        static createInODataKeyPartUnderType(container: rest.ODataKeyPart): DecimalAttributeType;
        /**
         * Creates and returns a new DecimalAttributeType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): DecimalAttributeType;
    }
    /**
     * In version 9.6.0: added public
     * In version 7.11.0: introduced
     */
    interface IEntityRef extends internal.IElement {
        readonly model: IModel;
        readonly containerAsMemberRef: IMemberRef;
        readonly containerAsParameter: workflows.IParameter;
        asLoaded(): EntityRef;
        load(callback: (element: EntityRef) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<EntityRef>;
    }
    /**
     * In version 9.6.0: added public
     * In version 7.11.0: introduced
     */
    abstract class EntityRef extends internal.Element<IModel> implements IEntityRef {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsWidgetValue(): customwidgets.WidgetValue;
        get containerAsEntityWidget(): documenttemplates.EntityWidget;
        get containerAsMemberRef(): MemberRef;
        get containerAsCreateObjectClientAction(): pages.CreateObjectClientAction;
        get containerAsEntityPathSource(): pages.EntityPathSource;
        get containerAsNewButton(): pages.NewButton;
        get containerAsReferenceSetSelector(): pages.ReferenceSetSelector;
        get containerAsSelectorXPathSource(): pages.SelectorXPathSource;
        get containerAsParameter(): workflows.Parameter;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 9.6.0: added public
     * In version 7.11.0: introduced
     */
    interface IDirectEntityRef extends IEntityRef {
        readonly model: IModel;
        asLoaded(): DirectEntityRef;
        load(callback: (element: DirectEntityRef) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<DirectEntityRef>;
    }
    /**
     * In version 9.6.0: added public
     * In version 7.11.0: introduced
     */
    class DirectEntityRef extends EntityRef implements IDirectEntityRef {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsWidgetValue(): customwidgets.WidgetValue;
        get containerAsEntityWidget(): documenttemplates.EntityWidget;
        get containerAsCreateObjectClientAction(): pages.CreateObjectClientAction;
        get containerAsEntityPathSource(): pages.EntityPathSource;
        get containerAsNewButton(): pages.NewButton;
        get containerAsReferenceSetSelector(): pages.ReferenceSetSelector;
        get containerAsSelectorXPathSource(): pages.SelectorXPathSource;
        get entity(): IEntity;
        set entity(newValue: IEntity);
        get entityQualifiedName(): string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new DirectEntityRef instance in the SDK and on the server.
         * The new DirectEntityRef will be automatically stored in the 'entityRef' property
         * of the parent customwidgets.WidgetValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInWidgetValueUnderEntityRef(container: customwidgets.WidgetValue): DirectEntityRef;
        /**
         * Creates and returns a new DirectEntityRef instance in the SDK and on the server.
         * The new DirectEntityRef will be automatically stored in the 'entityRef' property
         * of the parent documenttemplates.EntityWidget element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInEntityWidgetUnderEntityRef(container: documenttemplates.EntityWidget): DirectEntityRef;
        /**
         * Creates and returns a new DirectEntityRef instance in the SDK and on the server.
         * The new DirectEntityRef will be automatically stored in the 'entityRef' property
         * of the parent pages.CreateObjectClientAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.17.0 and higher
         */
        static createInCreateObjectClientActionUnderEntityRef(container: pages.CreateObjectClientAction): DirectEntityRef;
        /**
         * Creates and returns a new DirectEntityRef instance in the SDK and on the server.
         * The new DirectEntityRef will be automatically stored in the 'entityRef' property
         * of the parent pages.EntityPathSource element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInEntityPathSourceUnderEntityRef(container: pages.EntityPathSource): DirectEntityRef;
        /**
         * Creates and returns a new DirectEntityRef instance in the SDK and on the server.
         * The new DirectEntityRef will be automatically stored in the 'entityRef' property
         * of the parent pages.NewButton element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 to 7.16.0
         */
        static createInNewButtonUnderEntityRef(container: pages.NewButton): DirectEntityRef;
        /**
         * Creates and returns a new DirectEntityRef instance in the SDK and on the server.
         * The new DirectEntityRef will be automatically stored in the 'constrainedByRefs' property
         * of the parent pages.ReferenceSetSelector element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInReferenceSetSelectorUnderConstrainedByRefs(container: pages.ReferenceSetSelector): DirectEntityRef;
        /**
         * Creates and returns a new DirectEntityRef instance in the SDK and on the server.
         * The new DirectEntityRef will be automatically stored in the 'constrainedByRefs' property
         * of the parent pages.SelectorXPathSource element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInSelectorXPathSourceUnderConstrainedByRefs(container: pages.SelectorXPathSource): DirectEntityRef;
        /**
         * Creates and returns a new DirectEntityRef instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): DirectEntityRef;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/domain-model relevant section in reference guide}
     */
    interface IDomainModel extends projects.IModuleDocument {
        readonly model: IModel;
        readonly containerAsModule: projects.IModule;
        /**
         * In version 9.10.0: added public
         */
        readonly documentation: string;
        readonly entities: internal.IList<IEntity>;
        readonly associations: internal.IList<IAssociation>;
        readonly crossAssociations: internal.IList<ICrossAssociation>;
        asLoaded(): DomainModel;
        load(callback: (element: DomainModel) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<DomainModel>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/domain-model relevant section in reference guide}
     */
    class DomainModel extends projects.ModuleDocument implements IDomainModel {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsModule(): projects.Module;
        /**
         * In version 9.10.0: added public
         */
        get documentation(): string;
        set documentation(newValue: string);
        get entities(): internal.IList<Entity>;
        get annotations(): internal.IList<Annotation>;
        get associations(): internal.IList<Association>;
        get crossAssociations(): internal.IList<CrossAssociation>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IModule);
        /**
         * Creates a new DomainModel unit in the SDK and on the server.
         * Expects one argument, the projects.IModule in which this unit is contained.
         */
        static createIn(container: projects.IModule): DomainModel;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/entities relevant section in reference guide}
     */
    interface IEntity extends internal.IElement, internal.IByNameReferrable {
        readonly model: IModel;
        readonly containerAsDomainModel: IDomainModel;
        readonly name: string;
        /**
         * In version 9.10.0: added public
         */
        readonly location: common.IPoint;
        /**
         * In version 9.10.0: added public
         */
        readonly documentation: string;
        /**
         * This property is required and cannot be set to null.
         */
        readonly generalization: IGeneralizationBase;
        readonly attributes: internal.IList<IAttribute>;
        /**
         * In version 8.10.0: deleted
         * In version 8.2.0: added public
         * In version 7.17.0: introduced
         */
        readonly isRemote: boolean;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 8.10.0: deleted
         * In version 8.2.0: introduced
         */
        readonly remoteSourceDocument: IRemoteEntitySourceDocument | null;
        readonly remoteSourceDocumentQualifiedName: string | null;
        /**
         * In version 8.10.0: introduced
         */
        readonly source: IEntitySource | null;
        /**
         * This property is required and cannot be set to null.
         *
         * In version 9.0.1: deleted
         * In version 8.12.0: introduced
         */
        readonly capabilities: IEntityCapabilities;
        asLoaded(): Entity;
        load(callback: (element: Entity) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<Entity>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/entities relevant section in reference guide}
     */
    class Entity extends internal.Element<IModel> implements IEntity {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsDomainModel(): DomainModel;
        get name(): string;
        set name(newValue: string);
        get dataStorageGuid(): string;
        set dataStorageGuid(newValue: string);
        /**
         * In version 9.10.0: added public
         */
        get location(): common.IPoint;
        set location(newValue: common.IPoint);
        /**
         * In version 9.10.0: added public
         */
        get documentation(): string;
        set documentation(newValue: string);
        get generalization(): GeneralizationBase;
        set generalization(newValue: GeneralizationBase);
        get attributes(): internal.IList<Attribute>;
        get validationRules(): internal.IList<ValidationRule>;
        get eventHandlers(): internal.IList<EventHandler>;
        get indexes(): internal.IList<Index>;
        get accessRules(): internal.IList<AccessRule>;
        get image(): images.IImage | null;
        set image(newValue: images.IImage | null);
        get imageQualifiedName(): string | null;
        /**
         * In version 9.17.0: introduced
         */
        get imageData(): string | null;
        set imageData(newValue: string | null);
        /**
         * In version 8.10.0: deleted
         * In version 8.2.0: added public
         * In version 7.17.0: introduced
         */
        get isRemote(): boolean;
        set isRemote(newValue: boolean);
        /**
         * In version 8.10.0: deleted
         * In version 7.17.0: introduced
         */
        get remoteSource(): string;
        set remoteSource(newValue: string);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 8.10.0: deleted
         * In version 8.2.0: introduced
         */
        get remoteSourceDocument(): IRemoteEntitySourceDocument | null;
        set remoteSourceDocument(newValue: IRemoteEntitySourceDocument | null);
        get remoteSourceDocumentQualifiedName(): string | null;
        /**
         * In version 8.10.0: introduced
         */
        get source(): EntitySource | null;
        set source(newValue: EntitySource | null);
        /**
         * In version 9.0.1: deleted
         * In version 8.12.0: introduced
         */
        get capabilities(): EntityCapabilities;
        set capabilities(newValue: EntityCapabilities);
        /**
         * In version 9.3.0: introduced
         */
        get exportLevel(): projects.ExportLevel;
        set exportLevel(newValue: projects.ExportLevel);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new Entity instance in the SDK and on the server.
         * The new Entity will be automatically stored in the 'entities' property
         * of the parent DomainModel element passed as argument.
         */
        static createIn(container: DomainModel): Entity;
        /**
         * Creates and returns a new Entity instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): Entity;
        get qualifiedName(): string | null;
    }
    /**
     * In version 9.0.1: deleted
     * In version 8.12.0: introduced
     */
    interface IEntityCapabilities extends internal.IElement {
        readonly model: IModel;
        readonly containerAsEntity: IEntity;
        /**
         * In version 8.14.0: added public
         */
        readonly countable: boolean;
        asLoaded(): EntityCapabilities;
        load(callback: (element: EntityCapabilities) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<EntityCapabilities>;
    }
    /**
     * In version 9.0.1: deleted
     * In version 8.12.0: introduced
     */
    class EntityCapabilities extends internal.Element<IModel> implements IEntityCapabilities {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsEntity(): Entity;
        /**
         * In version 8.14.0: added public
         */
        get countable(): boolean;
        set countable(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new EntityCapabilities instance in the SDK and on the server.
         * The new EntityCapabilities will be automatically stored in the 'capabilities' property
         * of the parent Entity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.12.0 to 9.0.0
         */
        static createIn(container: Entity): EntityCapabilities;
        /**
         * Creates and returns a new EntityCapabilities instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): EntityCapabilities;
    }
    /**
     * In version 8.9.0: introduced
     */
    interface IEntityKey extends internal.IElement {
        readonly model: IModel;
        readonly parts: internal.IList<IEntityKeyPart>;
        asLoaded(): EntityKey;
        load(callback: (element: EntityKey) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<EntityKey>;
    }
    /**
     * In version 8.9.0: introduced
     */
    class EntityKey extends internal.Element<IModel> implements IEntityKey {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get parts(): internal.IList<EntityKeyPart>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new EntityKey instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): EntityKey;
    }
    /**
     * In version 8.9.0: introduced
     */
    interface IEntityKeyPart extends internal.IElement, internal.IByNameReferrable {
        readonly model: IModel;
        readonly containerAsEntityKey: IEntityKey;
        readonly name: string;
        /**
         * This property is required and cannot be set to null.
         */
        readonly type: IAttributeType;
        asLoaded(): EntityKeyPart;
        load(callback: (element: EntityKeyPart) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<EntityKeyPart>;
    }
    /**
     * In version 8.9.0: introduced
     */
    class EntityKeyPart extends internal.Element<IModel> implements IEntityKeyPart {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsEntityKey(): EntityKey;
        get name(): string;
        set name(newValue: string);
        get type(): AttributeType;
        set type(newValue: AttributeType);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new EntityKeyPart instance in the SDK and on the server.
         * The new EntityKeyPart will be automatically stored in the 'parts' property
         * of the parent EntityKey element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.9.0 and higher
         */
        static createIn(container: EntityKey): EntityKeyPart;
        /**
         * Creates and returns a new EntityKeyPart instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): EntityKeyPart;
        get qualifiedName(): string | null;
    }
    /**
     * In version 9.6.0: added public
     * In version 7.11.0: introduced
     */
    interface IEntityRefStep extends internal.IElement {
        readonly model: IModel;
        readonly containerAsIndirectEntityRef: IIndirectEntityRef;
        asLoaded(): EntityRefStep;
        load(callback: (element: EntityRefStep) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<EntityRefStep>;
    }
    /**
     * In version 9.6.0: added public
     * In version 7.11.0: introduced
     */
    class EntityRefStep extends internal.Element<IModel> implements IEntityRefStep {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsIndirectEntityRef(): IndirectEntityRef;
        get association(): IAssociationBase;
        set association(newValue: IAssociationBase);
        get associationQualifiedName(): string;
        get destinationEntity(): IEntity;
        set destinationEntity(newValue: IEntity);
        get destinationEntityQualifiedName(): string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new EntityRefStep instance in the SDK and on the server.
         * The new EntityRefStep will be automatically stored in the 'steps' property
         * of the parent IndirectEntityRef element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createIn(container: IndirectEntityRef): EntityRefStep;
        /**
         * Creates and returns a new EntityRefStep instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): EntityRefStep;
    }
    /**
     * In version 8.10.0: introduced
     */
    interface IEntitySource extends internal.IElement {
        readonly model: IModel;
        readonly containerAsEntity: IEntity;
        asLoaded(): EntitySource;
        load(callback: (element: EntitySource) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<EntitySource>;
    }
    /**
     * In version 8.10.0: introduced
     */
    abstract class EntitySource extends internal.Element<IModel> implements IEntitySource {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsEntity(): Entity;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    interface IEnumerationAttributeType extends IAttributeType {
        readonly model: IModel;
        readonly containerAsAttribute: IAttribute;
        readonly containerAsEntityKeyPart: IEntityKeyPart;
        readonly containerAsODataKeyPart: rest.IODataKeyPart;
        /**
         * This property is required and cannot be set to null.
         */
        readonly enumeration: enumerations.IEnumeration;
        readonly enumerationQualifiedName: string;
        asLoaded(): EnumerationAttributeType;
        load(callback: (element: EnumerationAttributeType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<EnumerationAttributeType>;
    }
    class EnumerationAttributeType extends AttributeType implements IEnumerationAttributeType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsPublishedMessageAttribute(): businessevents.PublishedMessageAttribute;
        get containerAsAttribute(): Attribute;
        get containerAsEntityKeyPart(): EntityKeyPart;
        get containerAsTensorMappingElement(): mlmappings.TensorMappingElement;
        get containerAsODataKeyPart(): rest.ODataKeyPart;
        get enumeration(): enumerations.IEnumeration;
        set enumeration(newValue: enumerations.IEnumeration);
        get enumerationQualifiedName(): string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new EnumerationAttributeType instance in the SDK and on the server.
         * The new EnumerationAttributeType will be automatically stored in the 'type' property
         * of the parent Attribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 8.8.0
         */
        static createIn(container: Attribute): EnumerationAttributeType;
        /**
         * Creates and returns a new EnumerationAttributeType instance in the SDK and on the server.
         * The new EnumerationAttributeType will be automatically stored in the 'attributeType' property
         * of the parent businessevents.PublishedMessageAttribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.14.0 and higher
         */
        static createInPublishedMessageAttributeUnderAttributeType(container: businessevents.PublishedMessageAttribute): EnumerationAttributeType;
        /**
         * Creates and returns a new EnumerationAttributeType instance in the SDK and on the server.
         * The new EnumerationAttributeType will be automatically stored in the 'type' property
         * of the parent Attribute element passed as argument.
         */
        static createInAttributeUnderType(container: Attribute): EnumerationAttributeType;
        /**
         * Creates and returns a new EnumerationAttributeType instance in the SDK and on the server.
         * The new EnumerationAttributeType will be automatically stored in the 'type' property
         * of the parent EntityKeyPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.9.0 and higher
         */
        static createInEntityKeyPartUnderType(container: EntityKeyPart): EnumerationAttributeType;
        /**
         * Creates and returns a new EnumerationAttributeType instance in the SDK and on the server.
         * The new EnumerationAttributeType will be automatically stored in the 'attributeType' property
         * of the parent mlmappings.TensorMappingElement element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.17.0 and higher
         */
        static createInTensorMappingElementUnderAttributeType(container: mlmappings.TensorMappingElement): EnumerationAttributeType;
        /**
         * Creates and returns a new EnumerationAttributeType instance in the SDK and on the server.
         * The new EnumerationAttributeType will be automatically stored in the 'type' property
         * of the parent rest.ODataKeyPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.9.0 and higher
         */
        static createInODataKeyPartUnderType(container: rest.ODataKeyPart): EnumerationAttributeType;
        /**
         * Creates and returns a new EnumerationAttributeType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): EnumerationAttributeType;
    }
    abstract class RuleInfo extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsValidationRule(): ValidationRule;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    class EqualsToRuleInfo extends RuleInfo {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsValidationRule(): ValidationRule;
        get useValue(): boolean;
        set useValue(newValue: boolean);
        get equalsToValue(): string;
        set equalsToValue(newValue: string);
        get equalsToAttribute(): IAttribute | null;
        set equalsToAttribute(newValue: IAttribute | null);
        get equalsToAttributeQualifiedName(): string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new EqualsToRuleInfo instance in the SDK and on the server.
         * The new EqualsToRuleInfo will be automatically stored in the 'ruleInfo' property
         * of the parent ValidationRule element passed as argument.
         */
        static createIn(container: ValidationRule): EqualsToRuleInfo;
        /**
         * Creates and returns a new EqualsToRuleInfo instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): EqualsToRuleInfo;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/event-handlers relevant section in reference guide}
     */
    class EventHandler extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsEntity(): Entity;
        get moment(): ActionMoment;
        set moment(newValue: ActionMoment);
        get event(): EventType;
        set event(newValue: EventType);
        get microflow(): microflows.IMicroflow | null;
        set microflow(newValue: microflows.IMicroflow | null);
        get microflowQualifiedName(): string | null;
        get raiseErrorOnFalse(): boolean;
        set raiseErrorOnFalse(newValue: boolean);
        get passEventObject(): boolean;
        set passEventObject(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new EventHandler instance in the SDK and on the server.
         * The new EventHandler will be automatically stored in the 'eventHandlers' property
         * of the parent Entity element passed as argument.
         */
        static createIn(container: Entity): EventHandler;
        /**
         * Creates and returns a new EventHandler instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): EventHandler;
    }
    /**
     * In version 9.1.0: deleted
     * In version 6.0.0: deprecated
     */
    interface IFloatAttributeType extends IFloatAttributeTypeBase {
        readonly model: IModel;
        readonly containerAsAttribute: IAttribute;
        readonly containerAsEntityKeyPart: IEntityKeyPart;
        readonly containerAsODataKeyPart: rest.IODataKeyPart;
        asLoaded(): FloatAttributeType;
        load(callback: (element: FloatAttributeType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<FloatAttributeType>;
    }
    /**
     * In version 9.1.0: deleted
     * In version 6.0.0: deprecated
     */
    class FloatAttributeType extends FloatAttributeTypeBase implements IFloatAttributeType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsAttribute(): Attribute;
        get containerAsEntityKeyPart(): EntityKeyPart;
        get containerAsODataKeyPart(): rest.ODataKeyPart;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new FloatAttributeType instance in the SDK and on the server.
         * The new FloatAttributeType will be automatically stored in the 'type' property
         * of the parent Attribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 8.8.0
         */
        static createIn(container: Attribute): FloatAttributeType;
        /**
         * Creates and returns a new FloatAttributeType instance in the SDK and on the server.
         * The new FloatAttributeType will be automatically stored in the 'type' property
         * of the parent Attribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 9.0.5
         */
        static createInAttributeUnderType(container: Attribute): FloatAttributeType;
        /**
         * Creates and returns a new FloatAttributeType instance in the SDK and on the server.
         * The new FloatAttributeType will be automatically stored in the 'type' property
         * of the parent EntityKeyPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.9.0 to 9.0.5
         */
        static createInEntityKeyPartUnderType(container: EntityKeyPart): FloatAttributeType;
        /**
         * Creates and returns a new FloatAttributeType instance in the SDK and on the server.
         * The new FloatAttributeType will be automatically stored in the 'type' property
         * of the parent rest.ODataKeyPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.9.0 to 9.0.5
         */
        static createInODataKeyPartUnderType(container: rest.ODataKeyPart): FloatAttributeType;
        /**
         * Creates and returns a new FloatAttributeType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): FloatAttributeType;
    }
    interface IGeneralizationBase extends internal.IElement {
        readonly model: IModel;
        readonly containerAsEntity: IEntity;
        asLoaded(): GeneralizationBase;
        load(callback: (element: GeneralizationBase) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<GeneralizationBase>;
    }
    abstract class GeneralizationBase extends internal.Element<IModel> implements IGeneralizationBase {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsEntity(): Entity;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    interface IGeneralization extends IGeneralizationBase {
        readonly model: IModel;
        readonly containerAsEntity: IEntity;
        /**
         * This property is required and cannot be set to null.
         */
        readonly generalization: IEntity;
        readonly generalizationQualifiedName: string;
        asLoaded(): Generalization;
        load(callback: (element: Generalization) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<Generalization>;
    }
    class Generalization extends GeneralizationBase implements IGeneralization {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsEntity(): Entity;
        get generalization(): IEntity;
        set generalization(newValue: IEntity);
        get generalizationQualifiedName(): string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new Generalization instance in the SDK and on the server.
         * The new Generalization will be automatically stored in the 'generalization' property
         * of the parent Entity element passed as argument.
         */
        static createIn(container: Entity): Generalization;
        /**
         * Creates and returns a new Generalization instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): Generalization;
    }
    interface IHashedStringAttributeType extends IAttributeType {
        readonly model: IModel;
        readonly containerAsAttribute: IAttribute;
        readonly containerAsEntityKeyPart: IEntityKeyPart;
        readonly containerAsODataKeyPart: rest.IODataKeyPart;
        asLoaded(): HashedStringAttributeType;
        load(callback: (element: HashedStringAttributeType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<HashedStringAttributeType>;
    }
    class HashedStringAttributeType extends AttributeType implements IHashedStringAttributeType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsPublishedMessageAttribute(): businessevents.PublishedMessageAttribute;
        get containerAsAttribute(): Attribute;
        get containerAsEntityKeyPart(): EntityKeyPart;
        get containerAsTensorMappingElement(): mlmappings.TensorMappingElement;
        get containerAsODataKeyPart(): rest.ODataKeyPart;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new HashedStringAttributeType instance in the SDK and on the server.
         * The new HashedStringAttributeType will be automatically stored in the 'type' property
         * of the parent Attribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 8.8.0
         */
        static createIn(container: Attribute): HashedStringAttributeType;
        /**
         * Creates and returns a new HashedStringAttributeType instance in the SDK and on the server.
         * The new HashedStringAttributeType will be automatically stored in the 'attributeType' property
         * of the parent businessevents.PublishedMessageAttribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.14.0 and higher
         */
        static createInPublishedMessageAttributeUnderAttributeType(container: businessevents.PublishedMessageAttribute): HashedStringAttributeType;
        /**
         * Creates and returns a new HashedStringAttributeType instance in the SDK and on the server.
         * The new HashedStringAttributeType will be automatically stored in the 'type' property
         * of the parent Attribute element passed as argument.
         */
        static createInAttributeUnderType(container: Attribute): HashedStringAttributeType;
        /**
         * Creates and returns a new HashedStringAttributeType instance in the SDK and on the server.
         * The new HashedStringAttributeType will be automatically stored in the 'type' property
         * of the parent EntityKeyPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.9.0 and higher
         */
        static createInEntityKeyPartUnderType(container: EntityKeyPart): HashedStringAttributeType;
        /**
         * Creates and returns a new HashedStringAttributeType instance in the SDK and on the server.
         * The new HashedStringAttributeType will be automatically stored in the 'attributeType' property
         * of the parent mlmappings.TensorMappingElement element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.17.0 and higher
         */
        static createInTensorMappingElementUnderAttributeType(container: mlmappings.TensorMappingElement): HashedStringAttributeType;
        /**
         * Creates and returns a new HashedStringAttributeType instance in the SDK and on the server.
         * The new HashedStringAttributeType will be automatically stored in the 'type' property
         * of the parent rest.ODataKeyPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.9.0 and higher
         */
        static createInODataKeyPartUnderType(container: rest.ODataKeyPart): HashedStringAttributeType;
        /**
         * Creates and returns a new HashedStringAttributeType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): HashedStringAttributeType;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/indexes relevant section in reference guide}
     */
    class Index extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsEntity(): Entity;
        get dataStorageGuid(): string;
        set dataStorageGuid(newValue: string);
        get attributes(): internal.IList<IndexedAttribute>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new Index instance in the SDK and on the server.
         * The new Index will be automatically stored in the 'indexes' property
         * of the parent Entity element passed as argument.
         */
        static createIn(container: Entity): Index;
        /**
         * Creates and returns a new Index instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): Index;
    }
    class IndexedAttribute extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsIndex(): Index;
        get type(): IndexedAttributeType;
        set type(newValue: IndexedAttributeType);
        get attribute(): Attribute | null;
        set attribute(newValue: Attribute | null);
        /**
         * In version 7.14.0: introduced
         */
        get ascending(): boolean;
        set ascending(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new IndexedAttribute instance in the SDK and on the server.
         * The new IndexedAttribute will be automatically stored in the 'attributes' property
         * of the parent Index element passed as argument.
         */
        static createIn(container: Index): IndexedAttribute;
        /**
         * Creates and returns a new IndexedAttribute instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): IndexedAttribute;
    }
    /**
     * In version 9.6.0: added public
     * In version 7.11.0: introduced
     */
    interface IIndirectEntityRef extends IEntityRef {
        readonly model: IModel;
        readonly containerAsMemberRef: IMemberRef;
        readonly containerAsParameter: workflows.IParameter;
        /**
         * In version 9.6.0: added public
         */
        readonly steps: internal.IList<IEntityRefStep>;
        asLoaded(): IndirectEntityRef;
        load(callback: (element: IndirectEntityRef) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<IndirectEntityRef>;
    }
    /**
     * In version 9.6.0: added public
     * In version 7.11.0: introduced
     */
    class IndirectEntityRef extends EntityRef implements IIndirectEntityRef {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsWidgetValue(): customwidgets.WidgetValue;
        get containerAsEntityWidget(): documenttemplates.EntityWidget;
        get containerAsMemberRef(): MemberRef;
        get containerAsCreateObjectClientAction(): pages.CreateObjectClientAction;
        get containerAsEntityPathSource(): pages.EntityPathSource;
        get containerAsNewButton(): pages.NewButton;
        get containerAsReferenceSetSelector(): pages.ReferenceSetSelector;
        get containerAsSelectorXPathSource(): pages.SelectorXPathSource;
        get containerAsParameter(): workflows.Parameter;
        /**
         * In version 9.6.0: added public
         */
        get steps(): internal.IList<EntityRefStep>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new IndirectEntityRef instance in the SDK and on the server.
         * The new IndirectEntityRef will be automatically stored in the 'entityRef' property
         * of the parent customwidgets.WidgetValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInWidgetValueUnderEntityRef(container: customwidgets.WidgetValue): IndirectEntityRef;
        /**
         * Creates and returns a new IndirectEntityRef instance in the SDK and on the server.
         * The new IndirectEntityRef will be automatically stored in the 'entityRef' property
         * of the parent documenttemplates.EntityWidget element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInEntityWidgetUnderEntityRef(container: documenttemplates.EntityWidget): IndirectEntityRef;
        /**
         * Creates and returns a new IndirectEntityRef instance in the SDK and on the server.
         * The new IndirectEntityRef will be automatically stored in the 'entityRef' property
         * of the parent MemberRef element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInMemberRefUnderEntityRef(container: MemberRef): IndirectEntityRef;
        /**
         * Creates and returns a new IndirectEntityRef instance in the SDK and on the server.
         * The new IndirectEntityRef will be automatically stored in the 'entityRef' property
         * of the parent pages.CreateObjectClientAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.17.0 and higher
         */
        static createInCreateObjectClientActionUnderEntityRef(container: pages.CreateObjectClientAction): IndirectEntityRef;
        /**
         * Creates and returns a new IndirectEntityRef instance in the SDK and on the server.
         * The new IndirectEntityRef will be automatically stored in the 'entityRef' property
         * of the parent pages.EntityPathSource element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInEntityPathSourceUnderEntityRef(container: pages.EntityPathSource): IndirectEntityRef;
        /**
         * Creates and returns a new IndirectEntityRef instance in the SDK and on the server.
         * The new IndirectEntityRef will be automatically stored in the 'entityRef' property
         * of the parent pages.NewButton element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 to 7.16.0
         */
        static createInNewButtonUnderEntityRef(container: pages.NewButton): IndirectEntityRef;
        /**
         * Creates and returns a new IndirectEntityRef instance in the SDK and on the server.
         * The new IndirectEntityRef will be automatically stored in the 'constrainedByRefs' property
         * of the parent pages.ReferenceSetSelector element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInReferenceSetSelectorUnderConstrainedByRefs(container: pages.ReferenceSetSelector): IndirectEntityRef;
        /**
         * Creates and returns a new IndirectEntityRef instance in the SDK and on the server.
         * The new IndirectEntityRef will be automatically stored in the 'constrainedByRefs' property
         * of the parent pages.SelectorXPathSource element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInSelectorXPathSourceUnderConstrainedByRefs(container: pages.SelectorXPathSource): IndirectEntityRef;
        /**
         * Creates and returns a new IndirectEntityRef instance in the SDK and on the server.
         * The new IndirectEntityRef will be automatically stored in the 'entityRef' property
         * of the parent workflows.Parameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.6.0 to 9.9.0
         */
        static createInParameterUnderEntityRef(container: workflows.Parameter): IndirectEntityRef;
        /**
         * Creates and returns a new IndirectEntityRef instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): IndirectEntityRef;
    }
    interface IIntegerAttributeType extends IIntegerAttributeTypeBase {
        readonly model: IModel;
        readonly containerAsAttribute: IAttribute;
        readonly containerAsEntityKeyPart: IEntityKeyPart;
        readonly containerAsODataKeyPart: rest.IODataKeyPart;
        asLoaded(): IntegerAttributeType;
        load(callback: (element: IntegerAttributeType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<IntegerAttributeType>;
    }
    class IntegerAttributeType extends IntegerAttributeTypeBase implements IIntegerAttributeType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsPublishedMessageAttribute(): businessevents.PublishedMessageAttribute;
        get containerAsAttribute(): Attribute;
        get containerAsEntityKeyPart(): EntityKeyPart;
        get containerAsTensorMappingElement(): mlmappings.TensorMappingElement;
        get containerAsODataKeyPart(): rest.ODataKeyPart;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new IntegerAttributeType instance in the SDK and on the server.
         * The new IntegerAttributeType will be automatically stored in the 'type' property
         * of the parent Attribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 8.8.0
         */
        static createIn(container: Attribute): IntegerAttributeType;
        /**
         * Creates and returns a new IntegerAttributeType instance in the SDK and on the server.
         * The new IntegerAttributeType will be automatically stored in the 'attributeType' property
         * of the parent businessevents.PublishedMessageAttribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.14.0 and higher
         */
        static createInPublishedMessageAttributeUnderAttributeType(container: businessevents.PublishedMessageAttribute): IntegerAttributeType;
        /**
         * Creates and returns a new IntegerAttributeType instance in the SDK and on the server.
         * The new IntegerAttributeType will be automatically stored in the 'type' property
         * of the parent Attribute element passed as argument.
         */
        static createInAttributeUnderType(container: Attribute): IntegerAttributeType;
        /**
         * Creates and returns a new IntegerAttributeType instance in the SDK and on the server.
         * The new IntegerAttributeType will be automatically stored in the 'type' property
         * of the parent EntityKeyPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.9.0 and higher
         */
        static createInEntityKeyPartUnderType(container: EntityKeyPart): IntegerAttributeType;
        /**
         * Creates and returns a new IntegerAttributeType instance in the SDK and on the server.
         * The new IntegerAttributeType will be automatically stored in the 'attributeType' property
         * of the parent mlmappings.TensorMappingElement element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.17.0 and higher
         */
        static createInTensorMappingElementUnderAttributeType(container: mlmappings.TensorMappingElement): IntegerAttributeType;
        /**
         * Creates and returns a new IntegerAttributeType instance in the SDK and on the server.
         * The new IntegerAttributeType will be automatically stored in the 'type' property
         * of the parent rest.ODataKeyPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.9.0 and higher
         */
        static createInODataKeyPartUnderType(container: rest.ODataKeyPart): IntegerAttributeType;
        /**
         * Creates and returns a new IntegerAttributeType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): IntegerAttributeType;
    }
    interface ILongAttributeType extends IIntegerAttributeTypeBase {
        readonly model: IModel;
        readonly containerAsAttribute: IAttribute;
        readonly containerAsEntityKeyPart: IEntityKeyPart;
        readonly containerAsODataKeyPart: rest.IODataKeyPart;
        asLoaded(): LongAttributeType;
        load(callback: (element: LongAttributeType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<LongAttributeType>;
    }
    class LongAttributeType extends IntegerAttributeTypeBase implements ILongAttributeType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsPublishedMessageAttribute(): businessevents.PublishedMessageAttribute;
        get containerAsAttribute(): Attribute;
        get containerAsEntityKeyPart(): EntityKeyPart;
        get containerAsTensorMappingElement(): mlmappings.TensorMappingElement;
        get containerAsODataKeyPart(): rest.ODataKeyPart;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new LongAttributeType instance in the SDK and on the server.
         * The new LongAttributeType will be automatically stored in the 'type' property
         * of the parent Attribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 8.8.0
         */
        static createIn(container: Attribute): LongAttributeType;
        /**
         * Creates and returns a new LongAttributeType instance in the SDK and on the server.
         * The new LongAttributeType will be automatically stored in the 'attributeType' property
         * of the parent businessevents.PublishedMessageAttribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.14.0 and higher
         */
        static createInPublishedMessageAttributeUnderAttributeType(container: businessevents.PublishedMessageAttribute): LongAttributeType;
        /**
         * Creates and returns a new LongAttributeType instance in the SDK and on the server.
         * The new LongAttributeType will be automatically stored in the 'type' property
         * of the parent Attribute element passed as argument.
         */
        static createInAttributeUnderType(container: Attribute): LongAttributeType;
        /**
         * Creates and returns a new LongAttributeType instance in the SDK and on the server.
         * The new LongAttributeType will be automatically stored in the 'type' property
         * of the parent EntityKeyPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.9.0 and higher
         */
        static createInEntityKeyPartUnderType(container: EntityKeyPart): LongAttributeType;
        /**
         * Creates and returns a new LongAttributeType instance in the SDK and on the server.
         * The new LongAttributeType will be automatically stored in the 'attributeType' property
         * of the parent mlmappings.TensorMappingElement element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.17.0 and higher
         */
        static createInTensorMappingElementUnderAttributeType(container: mlmappings.TensorMappingElement): LongAttributeType;
        /**
         * Creates and returns a new LongAttributeType instance in the SDK and on the server.
         * The new LongAttributeType will be automatically stored in the 'type' property
         * of the parent rest.ODataKeyPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.9.0 and higher
         */
        static createInODataKeyPartUnderType(container: rest.ODataKeyPart): LongAttributeType;
        /**
         * Creates and returns a new LongAttributeType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): LongAttributeType;
    }
    /**
     * In version 8.10.0: introduced
     */
    interface IRemoteEntitySource extends IEntitySource {
        readonly model: IModel;
        readonly containerAsEntity: IEntity;
        asLoaded(): RemoteEntitySource;
        load(callback: (element: RemoteEntitySource) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<RemoteEntitySource>;
    }
    /**
     * In version 8.10.0: introduced
     */
    abstract class RemoteEntitySource extends EntitySource implements IRemoteEntitySource {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsEntity(): Entity;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 8.11.0: introduced
     */
    interface IMaterializedRemoteEntitySource extends IRemoteEntitySource {
        readonly model: IModel;
        readonly containerAsEntity: IEntity;
        asLoaded(): MaterializedRemoteEntitySource;
        load(callback: (element: MaterializedRemoteEntitySource) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<MaterializedRemoteEntitySource>;
    }
    /**
     * In version 8.11.0: introduced
     */
    abstract class MaterializedRemoteEntitySource extends RemoteEntitySource implements IMaterializedRemoteEntitySource {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsEntity(): Entity;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    class MaxLengthRuleInfo extends RuleInfo {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsValidationRule(): ValidationRule;
        get maxLength(): number;
        set maxLength(newValue: number);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MaxLengthRuleInfo instance in the SDK and on the server.
         * The new MaxLengthRuleInfo will be automatically stored in the 'ruleInfo' property
         * of the parent ValidationRule element passed as argument.
         */
        static createIn(container: ValidationRule): MaxLengthRuleInfo;
        /**
         * Creates and returns a new MaxLengthRuleInfo instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MaxLengthRuleInfo;
    }
    class MemberAccess extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsAccessRule(): AccessRule;
        get attribute(): IAttribute | null;
        set attribute(newValue: IAttribute | null);
        get attributeQualifiedName(): string | null;
        get association(): IAssociationBase | null;
        set association(newValue: IAssociationBase | null);
        get associationQualifiedName(): string | null;
        get accessRights(): MemberAccessRights;
        set accessRights(newValue: MemberAccessRights);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MemberAccess instance in the SDK and on the server.
         * The new MemberAccess will be automatically stored in the 'memberAccesses' property
         * of the parent AccessRule element passed as argument.
         */
        static createIn(container: AccessRule): MemberAccess;
        /**
         * Creates and returns a new MemberAccess instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MemberAccess;
    }
    interface INoGeneralization extends IGeneralizationBase {
        readonly model: IModel;
        readonly containerAsEntity: IEntity;
        /**
         * In version 8.2.0: added public
         */
        readonly hasChangedDate: boolean;
        /**
         * In version 8.2.0: added public
         */
        readonly hasCreatedDate: boolean;
        /**
         * In version 8.2.0: added public
         */
        readonly hasOwner: boolean;
        /**
         * In version 8.2.0: added public
         */
        readonly hasChangedBy: boolean;
        readonly persistable: boolean;
        asLoaded(): NoGeneralization;
        load(callback: (element: NoGeneralization) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<NoGeneralization>;
    }
    class NoGeneralization extends GeneralizationBase implements INoGeneralization {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsEntity(): Entity;
        /**
         * In version 8.2.0: added public
         */
        get hasChangedDate(): boolean;
        set hasChangedDate(newValue: boolean);
        /**
         * In version 8.2.0: added public
         */
        get hasCreatedDate(): boolean;
        set hasCreatedDate(newValue: boolean);
        /**
         * In version 8.2.0: added public
         */
        get hasOwner(): boolean;
        set hasOwner(newValue: boolean);
        /**
         * In version 8.2.0: added public
         */
        get hasChangedBy(): boolean;
        set hasChangedBy(newValue: boolean);
        get persistable(): boolean;
        set persistable(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new NoGeneralization instance in the SDK and on the server.
         * The new NoGeneralization will be automatically stored in the 'generalization' property
         * of the parent Entity element passed as argument.
         */
        static createIn(container: Entity): NoGeneralization;
        /**
         * Creates and returns a new NoGeneralization instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): NoGeneralization;
    }
    /**
     * In version 8.10.0: introduced
     */
    interface IQueryBasedRemoteEntitySource extends IRemoteEntitySource {
        readonly model: IModel;
        readonly containerAsEntity: IEntity;
        asLoaded(): QueryBasedRemoteEntitySource;
        load(callback: (element: QueryBasedRemoteEntitySource) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<QueryBasedRemoteEntitySource>;
    }
    /**
     * In version 8.10.0: introduced
     */
    abstract class QueryBasedRemoteEntitySource extends RemoteEntitySource implements IQueryBasedRemoteEntitySource {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsEntity(): Entity;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    class RangeRuleInfo extends RuleInfo {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsValidationRule(): ValidationRule;
        get typeOfRange(): RangeType;
        set typeOfRange(newValue: RangeType);
        get useMinValue(): boolean;
        set useMinValue(newValue: boolean);
        get useMaxValue(): boolean;
        set useMaxValue(newValue: boolean);
        get minValue(): string;
        set minValue(newValue: string);
        get maxValue(): string;
        set maxValue(newValue: string);
        get minAttribute(): IAttribute | null;
        set minAttribute(newValue: IAttribute | null);
        get minAttributeQualifiedName(): string | null;
        get maxAttribute(): IAttribute | null;
        set maxAttribute(newValue: IAttribute | null);
        get maxAttributeQualifiedName(): string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new RangeRuleInfo instance in the SDK and on the server.
         * The new RangeRuleInfo will be automatically stored in the 'ruleInfo' property
         * of the parent ValidationRule element passed as argument.
         */
        static createIn(container: ValidationRule): RangeRuleInfo;
        /**
         * Creates and returns a new RangeRuleInfo instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): RangeRuleInfo;
    }
    class RegExRuleInfo extends RuleInfo {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsValidationRule(): ValidationRule;
        get regularExpression(): regularexpressions.IRegularExpression | null;
        set regularExpression(newValue: regularexpressions.IRegularExpression | null);
        get regularExpressionQualifiedName(): string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new RegExRuleInfo instance in the SDK and on the server.
         * The new RegExRuleInfo will be automatically stored in the 'ruleInfo' property
         * of the parent ValidationRule element passed as argument.
         */
        static createIn(container: ValidationRule): RegExRuleInfo;
        /**
         * Creates and returns a new RegExRuleInfo instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): RegExRuleInfo;
    }
    /**
     * In version 8.10.0: introduced
     */
    interface IRemoteAssociationSource extends IAssociationSource {
        readonly model: IModel;
        readonly containerAsAssociationBase: IAssociationBase;
        asLoaded(): RemoteAssociationSource;
        load(callback: (element: RemoteAssociationSource) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<RemoteAssociationSource>;
    }
    /**
     * In version 8.10.0: introduced
     */
    abstract class RemoteAssociationSource extends AssociationSource implements IRemoteAssociationSource {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsAssociationBase(): AssociationBase;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 7.18.0: introduced
     */
    interface IRemoteEntitySourceDocument extends projects.IDocument {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        /**
         * In version 8.11.0: added public
         * In version 8.10.0: introduced
         */
        readonly icon: string | null;
        /**
         * In version 8.10.0: added public
         * In version 8.0.0: introduced
         */
        readonly serviceName: string;
        /**
         * In version 8.10.0: added public
         * In version 8.0.0: introduced
         */
        readonly version: string;
        /**
         * In version 8.14.0: introduced
         */
        readonly endpointId: string;
        /**
         * In version 8.14.0: introduced
         */
        readonly minimumMxVersion: string;
        /**
         * In version 8.14.0: introduced
         */
        readonly recommendedMxVersion: string;
        /**
         * In version 8.12.0: added public
         * In version 8.11.0: introduced
         */
        readonly applicationId: string;
        /**
         * In version 8.14.0: introduced
         */
        readonly environmentType: EnvironmentType;
        /**
         * In version 8.16.0: introduced
         */
        readonly metadataHash: string;
        /**
         * In version 9.6.0: introduced
         */
        readonly validated: boolean;
        /**
         * In version 9.8.0: introduced
         */
        readonly validatedEntities: internal.IList<string>;
        asLoaded(): RemoteEntitySourceDocument;
        load(callback: (element: RemoteEntitySourceDocument) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<RemoteEntitySourceDocument>;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 7.18.0: introduced
     */
    abstract class RemoteEntitySourceDocument extends projects.Document implements IRemoteEntitySourceDocument {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFolderBase(): projects.FolderBase;
        /**
         * In version 8.10.0: introduced
         */
        get description(): string;
        set description(newValue: string);
        /**
         * In version 8.10.0: introduced
         */
        get catalogUrl(): string;
        set catalogUrl(newValue: string);
        /**
         * In version 8.11.0: added public
         * In version 8.10.0: introduced
         */
        get icon(): string | null;
        set icon(newValue: string | null);
        get metadata(): string;
        set metadata(newValue: string);
        get metadataUrl(): string;
        set metadataUrl(newValue: string);
        /**
         * In version 8.10.0: added public
         * In version 8.0.0: introduced
         */
        get serviceName(): string;
        set serviceName(newValue: string);
        /**
         * In version 8.10.0: added public
         * In version 8.0.0: introduced
         */
        get version(): string;
        set version(newValue: string);
        /**
         * In version 8.14.0: introduced
         */
        get endpointId(): string;
        set endpointId(newValue: string);
        /**
         * In version 8.14.0: introduced
         */
        get minimumMxVersion(): string;
        set minimumMxVersion(newValue: string);
        /**
         * In version 8.14.0: introduced
         */
        get recommendedMxVersion(): string;
        set recommendedMxVersion(newValue: string);
        /**
         * In version 8.12.0: added public
         * In version 8.11.0: introduced
         */
        get applicationId(): string;
        set applicationId(newValue: string);
        /**
         * In version 8.14.0: introduced
         */
        get environmentType(): EnvironmentType;
        set environmentType(newValue: EnvironmentType);
        /**
         * In version 8.16.0: introduced
         */
        get metadataHash(): string;
        set metadataHash(newValue: string);
        /**
         * In version 9.6.0: introduced
         */
        get validated(): boolean;
        set validated(newValue: boolean);
        /**
         * In version 9.8.0: introduced
         */
        get validatedEntities(): internal.IList<string>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
    }
    class RequiredRuleInfo extends RuleInfo {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsValidationRule(): ValidationRule;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new RequiredRuleInfo instance in the SDK and on the server.
         * The new RequiredRuleInfo will be automatically stored in the 'ruleInfo' property
         * of the parent ValidationRule element passed as argument.
         */
        static createIn(container: ValidationRule): RequiredRuleInfo;
        /**
         * Creates and returns a new RequiredRuleInfo instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): RequiredRuleInfo;
    }
    /**
     * In version 6.6.0: added public
     */
    interface IStoredValue extends IValueType {
        readonly model: IModel;
        readonly containerAsAttribute: IAttribute;
        asLoaded(): StoredValue;
        load(callback: (element: StoredValue) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<StoredValue>;
    }
    /**
     * In version 6.6.0: added public
     */
    class StoredValue extends ValueType implements IStoredValue {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsAttribute(): Attribute;
        get defaultValue(): string;
        set defaultValue(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new StoredValue instance in the SDK and on the server.
         * The new StoredValue will be automatically stored in the 'value' property
         * of the parent Attribute element passed as argument.
         */
        static createIn(container: Attribute): StoredValue;
        /**
         * Creates and returns a new StoredValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): StoredValue;
    }
    interface IStringAttributeType extends IAttributeType {
        readonly model: IModel;
        readonly containerAsAttribute: IAttribute;
        readonly containerAsEntityKeyPart: IEntityKeyPart;
        readonly containerAsODataKeyPart: rest.IODataKeyPart;
        asLoaded(): StringAttributeType;
        load(callback: (element: StringAttributeType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<StringAttributeType>;
    }
    class StringAttributeType extends AttributeType implements IStringAttributeType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsPublishedMessageAttribute(): businessevents.PublishedMessageAttribute;
        get containerAsAttribute(): Attribute;
        get containerAsEntityKeyPart(): EntityKeyPart;
        get containerAsTensorMappingElement(): mlmappings.TensorMappingElement;
        get containerAsODataKeyPart(): rest.ODataKeyPart;
        get length(): number;
        set length(newValue: number);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new StringAttributeType instance in the SDK and on the server.
         * The new StringAttributeType will be automatically stored in the 'type' property
         * of the parent Attribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 8.8.0
         */
        static createIn(container: Attribute): StringAttributeType;
        /**
         * Creates and returns a new StringAttributeType instance in the SDK and on the server.
         * The new StringAttributeType will be automatically stored in the 'attributeType' property
         * of the parent businessevents.PublishedMessageAttribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.14.0 and higher
         */
        static createInPublishedMessageAttributeUnderAttributeType(container: businessevents.PublishedMessageAttribute): StringAttributeType;
        /**
         * Creates and returns a new StringAttributeType instance in the SDK and on the server.
         * The new StringAttributeType will be automatically stored in the 'type' property
         * of the parent Attribute element passed as argument.
         */
        static createInAttributeUnderType(container: Attribute): StringAttributeType;
        /**
         * Creates and returns a new StringAttributeType instance in the SDK and on the server.
         * The new StringAttributeType will be automatically stored in the 'type' property
         * of the parent EntityKeyPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.9.0 and higher
         */
        static createInEntityKeyPartUnderType(container: EntityKeyPart): StringAttributeType;
        /**
         * Creates and returns a new StringAttributeType instance in the SDK and on the server.
         * The new StringAttributeType will be automatically stored in the 'attributeType' property
         * of the parent mlmappings.TensorMappingElement element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.17.0 and higher
         */
        static createInTensorMappingElementUnderAttributeType(container: mlmappings.TensorMappingElement): StringAttributeType;
        /**
         * Creates and returns a new StringAttributeType instance in the SDK and on the server.
         * The new StringAttributeType will be automatically stored in the 'type' property
         * of the parent rest.ODataKeyPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.9.0 and higher
         */
        static createInODataKeyPartUnderType(container: rest.ODataKeyPart): StringAttributeType;
        /**
         * Creates and returns a new StringAttributeType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): StringAttributeType;
    }
    class UniqueRuleInfo extends RuleInfo {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsValidationRule(): ValidationRule;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new UniqueRuleInfo instance in the SDK and on the server.
         * The new UniqueRuleInfo will be automatically stored in the 'ruleInfo' property
         * of the parent ValidationRule element passed as argument.
         */
        static createIn(container: ValidationRule): UniqueRuleInfo;
        /**
         * Creates and returns a new UniqueRuleInfo instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): UniqueRuleInfo;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/validation-rules relevant section in reference guide}
     */
    class ValidationRule extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsEntity(): Entity;
        get attribute(): IAttribute;
        set attribute(newValue: IAttribute);
        get attributeQualifiedName(): string;
        get errorMessage(): texts.Text;
        set errorMessage(newValue: texts.Text);
        get ruleInfo(): RuleInfo;
        set ruleInfo(newValue: RuleInfo);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ValidationRule instance in the SDK and on the server.
         * The new ValidationRule will be automatically stored in the 'validationRules' property
         * of the parent Entity element passed as argument.
         */
        static createIn(container: Entity): ValidationRule;
        /**
         * Creates and returns a new ValidationRule instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ValidationRule;
    }
}
import { businessevents } from "./businessevents";
import { customwidgets } from "./customwidgets";
import { documenttemplates } from "./documenttemplates";
import { enumerations } from "./enumerations";
import { expressions } from "./expressions";
import { images } from "./images";
import { mlmappings } from "./mlmappings";
import { microflows } from "./microflows";
import { pages } from "./pages";
import { regularexpressions } from "./regularexpressions";
import { rest } from "./rest";
import { security } from "./security";
import { texts } from "./texts";
import { workflows } from "./workflows";
import { IModel } from "./base-model";
