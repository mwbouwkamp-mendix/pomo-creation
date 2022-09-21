import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
import { projects } from "./projects";
export declare namespace codeactions {
    class StringTemplateParameterGrammar extends internal.AbstractEnum {
        static Text: StringTemplateParameterGrammar;
        static Sql: StringTemplateParameterGrammar;
        protected qualifiedTsTypeName: string;
    }
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `CodeActions`.
     */
    /**
     * In version 7.21.0: introduced
     */
    interface IParameterType extends internal.IElement {
        readonly model: IModel;
        readonly containerAsCodeActionParameter: ICodeActionParameter;
        asLoaded(): ParameterType;
        load(callback: (element: ParameterType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ParameterType>;
    }
    /**
     * In version 7.21.0: introduced
     */
    abstract class ParameterType extends internal.Element<IModel> implements IParameterType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsCodeActionParameter(): CodeActionParameter;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 7.21.0: introduced
     */
    interface IBasicParameterType extends IParameterType {
        readonly model: IModel;
        readonly containerAsCodeActionParameter: ICodeActionParameter;
        /**
         * This property is required and cannot be set to null.
         */
        readonly type: IType;
        asLoaded(): BasicParameterType;
        load(callback: (element: BasicParameterType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<BasicParameterType>;
    }
    /**
     * In version 7.21.0: introduced
     */
    class BasicParameterType extends ParameterType implements IBasicParameterType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsCodeActionParameter(): CodeActionParameter;
        get type(): Type;
        set type(newValue: Type);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new BasicParameterType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): BasicParameterType;
    }
    /**
     * In version 7.21.0: introduced
     */
    interface IType extends internal.IElement {
        readonly model: IModel;
        readonly containerAsBasicParameterType: IBasicParameterType;
        readonly containerAsCodeAction: ICodeAction;
        readonly containerAsListType: IListType;
        asLoaded(): Type;
        load(callback: (element: Type) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<Type>;
    }
    /**
     * In version 7.21.0: introduced
     */
    abstract class Type extends internal.Element<IModel> implements IType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsBasicParameterType(): BasicParameterType;
        get containerAsCodeAction(): CodeAction;
        get containerAsListType(): ListType;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 7.21.0: introduced
     */
    interface IPrimitiveType extends IType {
        readonly model: IModel;
        readonly containerAsBasicParameterType: IBasicParameterType;
        readonly containerAsCodeAction: ICodeAction;
        asLoaded(): PrimitiveType;
        load(callback: (element: PrimitiveType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<PrimitiveType>;
    }
    /**
     * In version 7.21.0: introduced
     */
    abstract class PrimitiveType extends Type implements IPrimitiveType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsBasicParameterType(): BasicParameterType;
        get containerAsCodeAction(): CodeAction;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 7.21.0: introduced
     */
    interface IBooleanType extends IPrimitiveType {
        readonly model: IModel;
        readonly containerAsBasicParameterType: IBasicParameterType;
        readonly containerAsCodeAction: ICodeAction;
        asLoaded(): BooleanType;
        load(callback: (element: BooleanType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<BooleanType>;
    }
    /**
     * In version 7.21.0: introduced
     */
    class BooleanType extends PrimitiveType implements IBooleanType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsBasicParameterType(): BasicParameterType;
        get containerAsCodeAction(): CodeAction;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new BooleanType instance in the SDK and on the server.
         * The new BooleanType will be automatically stored in the 'type' property
         * of the parent BasicParameterType element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInBasicParameterTypeUnderType(container: BasicParameterType): BooleanType;
        /**
         * Creates and returns a new BooleanType instance in the SDK and on the server.
         * The new BooleanType will be automatically stored in the 'actionReturnType' property
         * of the parent CodeAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInCodeActionUnderActionReturnType(container: CodeAction): BooleanType;
        /**
         * Creates and returns a new BooleanType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): BooleanType;
    }
    interface ICodeAction extends projects.IDocument {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        /**
         * In version 7.21.0: introduced
         */
        readonly actionTypeParameters: internal.IList<ITypeParameter>;
        /**
         * This property is required and cannot be set to null.
         *
         * In version 7.21.0: introduced
         */
        readonly actionReturnType: IType;
        /**
         * In version 7.21.0: introduced
         */
        readonly modelerActionInfo: IMicroflowActionInfo | null;
        /**
         * In version 7.21.0: introduced
         */
        readonly actionParameters: internal.IList<ICodeActionParameter>;
        asLoaded(): CodeAction;
        load(callback: (element: CodeAction) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<CodeAction>;
    }
    abstract class CodeAction extends projects.Document implements ICodeAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFolderBase(): projects.FolderBase;
        /**
         * In version 7.21.0: introduced
         */
        get actionTypeParameters(): internal.IList<TypeParameter>;
        /**
         * In version 7.21.0: introduced
         */
        get actionReturnType(): Type;
        set actionReturnType(newValue: Type);
        /**
         * In version 7.21.0: introduced
         */
        get modelerActionInfo(): MicroflowActionInfo | null;
        set modelerActionInfo(newValue: MicroflowActionInfo | null);
        /**
         * In version 7.21.0: introduced
         */
        get actionParameters(): internal.IList<CodeActionParameter>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
    }
    interface ICodeActionParameter extends internal.IElement, internal.IByNameReferrable {
        readonly model: IModel;
        readonly containerAsCodeAction: ICodeAction;
        readonly containerAsJavaAction: javaactions.IJavaAction;
        readonly name: string;
        /**
         * This property is required and cannot be set to null.
         *
         * In version 7.21.0: introduced
         */
        readonly actionParameterType: IParameterType;
        /**
         * In version 6.10.0: introduced
         */
        readonly description: string;
        /**
         * In version 9.17.0: introduced
         */
        readonly isRequired: boolean;
        asLoaded(): CodeActionParameter;
        load(callback: (element: CodeActionParameter) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<CodeActionParameter>;
    }
    abstract class CodeActionParameter extends internal.Element<IModel> implements ICodeActionParameter {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsCodeAction(): CodeAction;
        get containerAsJavaAction(): javaactions.JavaAction;
        get name(): string;
        set name(newValue: string);
        /**
         * In version 7.21.0: introduced
         */
        get actionParameterType(): ParameterType;
        set actionParameterType(newValue: ParameterType);
        /**
         * In version 6.10.0: introduced
         */
        get description(): string;
        set description(newValue: string);
        /**
         * In version 7.18.0: introduced
         */
        get category(): string;
        set category(newValue: string);
        /**
         * In version 9.17.0: introduced
         */
        get isRequired(): boolean;
        set isRequired(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        get qualifiedName(): string | null;
    }
    /**
     * In version 7.21.0: introduced
     */
    interface IEntityType extends IType {
        readonly model: IModel;
        readonly containerAsBasicParameterType: IBasicParameterType;
        readonly containerAsCodeAction: ICodeAction;
        readonly containerAsListType: IListType;
        asLoaded(): EntityType;
        load(callback: (element: EntityType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<EntityType>;
    }
    /**
     * In version 7.21.0: introduced
     */
    abstract class EntityType extends Type implements IEntityType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsBasicParameterType(): BasicParameterType;
        get containerAsCodeAction(): CodeAction;
        get containerAsListType(): ListType;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 7.21.0: introduced
     */
    interface IConcreteEntityType extends IEntityType {
        readonly model: IModel;
        readonly containerAsBasicParameterType: IBasicParameterType;
        readonly containerAsCodeAction: ICodeAction;
        readonly containerAsListType: IListType;
        /**
         * This property is required and cannot be set to null.
         */
        readonly entity: domainmodels.IEntity;
        readonly entityQualifiedName: string;
        asLoaded(): ConcreteEntityType;
        load(callback: (element: ConcreteEntityType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ConcreteEntityType>;
    }
    /**
     * In version 7.21.0: introduced
     */
    class ConcreteEntityType extends EntityType implements IConcreteEntityType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsBasicParameterType(): BasicParameterType;
        get containerAsCodeAction(): CodeAction;
        get containerAsListType(): ListType;
        get entity(): domainmodels.IEntity;
        set entity(newValue: domainmodels.IEntity);
        get entityQualifiedName(): string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ConcreteEntityType instance in the SDK and on the server.
         * The new ConcreteEntityType will be automatically stored in the 'type' property
         * of the parent BasicParameterType element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInBasicParameterTypeUnderType(container: BasicParameterType): ConcreteEntityType;
        /**
         * Creates and returns a new ConcreteEntityType instance in the SDK and on the server.
         * The new ConcreteEntityType will be automatically stored in the 'actionReturnType' property
         * of the parent CodeAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInCodeActionUnderActionReturnType(container: CodeAction): ConcreteEntityType;
        /**
         * Creates and returns a new ConcreteEntityType instance in the SDK and on the server.
         * The new ConcreteEntityType will be automatically stored in the 'parameter' property
         * of the parent ListType element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInListTypeUnderParameter(container: ListType): ConcreteEntityType;
        /**
         * Creates and returns a new ConcreteEntityType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ConcreteEntityType;
    }
    /**
     * In version 7.21.0: introduced
     */
    interface IDateTimeType extends IPrimitiveType {
        readonly model: IModel;
        readonly containerAsBasicParameterType: IBasicParameterType;
        readonly containerAsCodeAction: ICodeAction;
        asLoaded(): DateTimeType;
        load(callback: (element: DateTimeType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<DateTimeType>;
    }
    /**
     * In version 7.21.0: introduced
     */
    class DateTimeType extends PrimitiveType implements IDateTimeType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsBasicParameterType(): BasicParameterType;
        get containerAsCodeAction(): CodeAction;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new DateTimeType instance in the SDK and on the server.
         * The new DateTimeType will be automatically stored in the 'type' property
         * of the parent BasicParameterType element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInBasicParameterTypeUnderType(container: BasicParameterType): DateTimeType;
        /**
         * Creates and returns a new DateTimeType instance in the SDK and on the server.
         * The new DateTimeType will be automatically stored in the 'actionReturnType' property
         * of the parent CodeAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInCodeActionUnderActionReturnType(container: CodeAction): DateTimeType;
        /**
         * Creates and returns a new DateTimeType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): DateTimeType;
    }
    /**
     * In version 7.21.0: introduced
     */
    interface IDecimalType extends IPrimitiveType {
        readonly model: IModel;
        readonly containerAsBasicParameterType: IBasicParameterType;
        readonly containerAsCodeAction: ICodeAction;
        asLoaded(): DecimalType;
        load(callback: (element: DecimalType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<DecimalType>;
    }
    /**
     * In version 7.21.0: introduced
     */
    class DecimalType extends PrimitiveType implements IDecimalType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsBasicParameterType(): BasicParameterType;
        get containerAsCodeAction(): CodeAction;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new DecimalType instance in the SDK and on the server.
         * The new DecimalType will be automatically stored in the 'type' property
         * of the parent BasicParameterType element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInBasicParameterTypeUnderType(container: BasicParameterType): DecimalType;
        /**
         * Creates and returns a new DecimalType instance in the SDK and on the server.
         * The new DecimalType will be automatically stored in the 'actionReturnType' property
         * of the parent CodeAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInCodeActionUnderActionReturnType(container: CodeAction): DecimalType;
        /**
         * Creates and returns a new DecimalType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): DecimalType;
    }
    /**
     * In version 7.21.0: introduced
     */
    interface IEntityTypeParameterType extends IParameterType {
        readonly model: IModel;
        readonly containerAsCodeActionParameter: ICodeActionParameter;
        readonly typeParameter: ITypeParameter | null;
        asLoaded(): EntityTypeParameterType;
        load(callback: (element: EntityTypeParameterType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<EntityTypeParameterType>;
    }
    /**
     * In version 7.21.0: introduced
     */
    class EntityTypeParameterType extends ParameterType implements IEntityTypeParameterType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsCodeActionParameter(): CodeActionParameter;
        get typeParameter(): TypeParameter | null;
        set typeParameter(newValue: TypeParameter | null);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new EntityTypeParameterType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): EntityTypeParameterType;
    }
    /**
     * In version 7.21.0: introduced
     */
    interface IEnumerationType extends IType {
        readonly model: IModel;
        readonly containerAsBasicParameterType: IBasicParameterType;
        readonly containerAsCodeAction: ICodeAction;
        /**
         * This property is required and cannot be set to null.
         */
        readonly enumeration: enumerations.IEnumeration;
        readonly enumerationQualifiedName: string;
        asLoaded(): EnumerationType;
        load(callback: (element: EnumerationType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<EnumerationType>;
    }
    /**
     * In version 7.21.0: introduced
     */
    class EnumerationType extends Type implements IEnumerationType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsBasicParameterType(): BasicParameterType;
        get containerAsCodeAction(): CodeAction;
        get enumeration(): enumerations.IEnumeration;
        set enumeration(newValue: enumerations.IEnumeration);
        get enumerationQualifiedName(): string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new EnumerationType instance in the SDK and on the server.
         * The new EnumerationType will be automatically stored in the 'type' property
         * of the parent BasicParameterType element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInBasicParameterTypeUnderType(container: BasicParameterType): EnumerationType;
        /**
         * Creates and returns a new EnumerationType instance in the SDK and on the server.
         * The new EnumerationType will be automatically stored in the 'actionReturnType' property
         * of the parent CodeAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInCodeActionUnderActionReturnType(container: CodeAction): EnumerationType;
        /**
         * Creates and returns a new EnumerationType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): EnumerationType;
    }
    /**
     * In version 7.21.0: introduced
     */
    interface IFloatType extends IPrimitiveType {
        readonly model: IModel;
        readonly containerAsBasicParameterType: IBasicParameterType;
        readonly containerAsCodeAction: ICodeAction;
        asLoaded(): FloatType;
        load(callback: (element: FloatType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<FloatType>;
    }
    /**
     * In version 7.21.0: introduced
     */
    class FloatType extends PrimitiveType implements IFloatType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsBasicParameterType(): BasicParameterType;
        get containerAsCodeAction(): CodeAction;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new FloatType instance in the SDK and on the server.
         * The new FloatType will be automatically stored in the 'type' property
         * of the parent BasicParameterType element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInBasicParameterTypeUnderType(container: BasicParameterType): FloatType;
        /**
         * Creates and returns a new FloatType instance in the SDK and on the server.
         * The new FloatType will be automatically stored in the 'actionReturnType' property
         * of the parent CodeAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInCodeActionUnderActionReturnType(container: CodeAction): FloatType;
        /**
         * Creates and returns a new FloatType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): FloatType;
    }
    /**
     * In version 7.21.0: introduced
     */
    interface IIntegerType extends IPrimitiveType {
        readonly model: IModel;
        readonly containerAsBasicParameterType: IBasicParameterType;
        readonly containerAsCodeAction: ICodeAction;
        asLoaded(): IntegerType;
        load(callback: (element: IntegerType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<IntegerType>;
    }
    /**
     * In version 7.21.0: introduced
     */
    class IntegerType extends PrimitiveType implements IIntegerType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsBasicParameterType(): BasicParameterType;
        get containerAsCodeAction(): CodeAction;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new IntegerType instance in the SDK and on the server.
         * The new IntegerType will be automatically stored in the 'type' property
         * of the parent BasicParameterType element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInBasicParameterTypeUnderType(container: BasicParameterType): IntegerType;
        /**
         * Creates and returns a new IntegerType instance in the SDK and on the server.
         * The new IntegerType will be automatically stored in the 'actionReturnType' property
         * of the parent CodeAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInCodeActionUnderActionReturnType(container: CodeAction): IntegerType;
        /**
         * Creates and returns a new IntegerType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): IntegerType;
    }
    /**
     * In version 7.21.0: introduced
     */
    interface IListType extends IType {
        readonly model: IModel;
        readonly containerAsBasicParameterType: IBasicParameterType;
        readonly containerAsCodeAction: ICodeAction;
        /**
         * This property is required and cannot be set to null.
         */
        readonly parameter: IEntityType;
        asLoaded(): ListType;
        load(callback: (element: ListType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ListType>;
    }
    /**
     * In version 7.21.0: introduced
     */
    class ListType extends Type implements IListType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsBasicParameterType(): BasicParameterType;
        get containerAsCodeAction(): CodeAction;
        get parameter(): EntityType;
        set parameter(newValue: EntityType);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ListType instance in the SDK and on the server.
         * The new ListType will be automatically stored in the 'type' property
         * of the parent BasicParameterType element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInBasicParameterTypeUnderType(container: BasicParameterType): ListType;
        /**
         * Creates and returns a new ListType instance in the SDK and on the server.
         * The new ListType will be automatically stored in the 'actionReturnType' property
         * of the parent CodeAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInCodeActionUnderActionReturnType(container: CodeAction): ListType;
        /**
         * Creates and returns a new ListType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ListType;
    }
    /**
     * In version 7.21.0: introduced
     */
    interface IMicroflowActionInfo extends internal.IElement {
        readonly model: IModel;
        readonly containerAsCodeAction: ICodeAction;
        readonly containerAsMicroflow: microflows.IMicroflow;
        readonly caption: string;
        readonly category: string;
        /**
         * In version 9.10.0: deleted
         */
        readonly icon: images.IImage | null;
        readonly iconQualifiedName: string | null;
        /**
         * In version 9.6.0: introduced
         */
        readonly imageData: string | null;
        asLoaded(): MicroflowActionInfo;
        load(callback: (element: MicroflowActionInfo) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<MicroflowActionInfo>;
    }
    /**
     * In version 7.21.0: introduced
     */
    class MicroflowActionInfo extends internal.Element<IModel> implements IMicroflowActionInfo {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsCodeAction(): CodeAction;
        get containerAsMicroflow(): microflows.Microflow;
        get caption(): string;
        set caption(newValue: string);
        get category(): string;
        set category(newValue: string);
        /**
         * In version 9.10.0: deleted
         */
        get icon(): images.IImage | null;
        set icon(newValue: images.IImage | null);
        get iconQualifiedName(): string | null;
        /**
         * In version 9.10.0: introduced
         */
        get iconData(): string | null;
        set iconData(newValue: string | null);
        /**
         * In version 9.10.0: introduced
         */
        get iconDataDark(): string | null;
        set iconDataDark(newValue: string | null);
        /**
         * In version 9.6.0: introduced
         */
        get imageData(): string | null;
        set imageData(newValue: string | null);
        /**
         * In version 9.10.0: introduced
         */
        get imageDataDark(): string | null;
        set imageDataDark(newValue: string | null);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MicroflowActionInfo instance in the SDK and on the server.
         * The new MicroflowActionInfo will be automatically stored in the 'modelerActionInfo' property
         * of the parent CodeAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 to 7.23.0
         */
        static createIn(container: CodeAction): MicroflowActionInfo;
        /**
         * Creates and returns a new MicroflowActionInfo instance in the SDK and on the server.
         * The new MicroflowActionInfo will be automatically stored in the 'modelerActionInfo' property
         * of the parent CodeAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInCodeActionUnderModelerActionInfo(container: CodeAction): MicroflowActionInfo;
        /**
         * Creates and returns a new MicroflowActionInfo instance in the SDK and on the server.
         * The new MicroflowActionInfo will be automatically stored in the 'microflowActionInfo' property
         * of the parent microflows.Microflow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 and higher
         */
        static createInMicroflowUnderMicroflowActionInfo(container: microflows.Microflow): MicroflowActionInfo;
        /**
         * Creates and returns a new MicroflowActionInfo instance in the SDK and on the server.
         * The new MicroflowActionInfo will be automatically stored in the 'workflowActionInfo' property
         * of the parent microflows.Microflow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.2 and higher
         */
        static createInMicroflowUnderWorkflowActionInfo(container: microflows.Microflow): MicroflowActionInfo;
        /**
         * Creates and returns a new MicroflowActionInfo instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MicroflowActionInfo;
    }
    /**
     * In version 7.21.0: introduced
     */
    interface IParameterizedEntityType extends IEntityType {
        readonly model: IModel;
        readonly containerAsBasicParameterType: IBasicParameterType;
        readonly containerAsCodeAction: ICodeAction;
        readonly containerAsListType: IListType;
        /**
         * This property is required and cannot be set to null.
         */
        readonly typeParameter: ITypeParameter;
        asLoaded(): ParameterizedEntityType;
        load(callback: (element: ParameterizedEntityType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ParameterizedEntityType>;
    }
    /**
     * In version 7.21.0: introduced
     */
    class ParameterizedEntityType extends EntityType implements IParameterizedEntityType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsBasicParameterType(): BasicParameterType;
        get containerAsCodeAction(): CodeAction;
        get containerAsListType(): ListType;
        get typeParameter(): TypeParameter;
        set typeParameter(newValue: TypeParameter);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ParameterizedEntityType instance in the SDK and on the server.
         * The new ParameterizedEntityType will be automatically stored in the 'type' property
         * of the parent BasicParameterType element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInBasicParameterTypeUnderType(container: BasicParameterType): ParameterizedEntityType;
        /**
         * Creates and returns a new ParameterizedEntityType instance in the SDK and on the server.
         * The new ParameterizedEntityType will be automatically stored in the 'actionReturnType' property
         * of the parent CodeAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInCodeActionUnderActionReturnType(container: CodeAction): ParameterizedEntityType;
        /**
         * Creates and returns a new ParameterizedEntityType instance in the SDK and on the server.
         * The new ParameterizedEntityType will be automatically stored in the 'parameter' property
         * of the parent ListType element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInListTypeUnderParameter(container: ListType): ParameterizedEntityType;
        /**
         * Creates and returns a new ParameterizedEntityType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ParameterizedEntityType;
    }
    /**
     * In version 8.5.0: removed experimental
     * In version 8.4.0: introduced
     */
    interface IStringTemplateParameterType extends IParameterType {
        readonly model: IModel;
        readonly containerAsCodeActionParameter: ICodeActionParameter;
        /**
         * In version 8.8.0: introduced
         */
        readonly grammar: StringTemplateParameterGrammar;
        asLoaded(): StringTemplateParameterType;
        load(callback: (element: StringTemplateParameterType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<StringTemplateParameterType>;
    }
    /**
     * In version 8.5.0: removed experimental
     * In version 8.4.0: introduced
     */
    class StringTemplateParameterType extends ParameterType implements IStringTemplateParameterType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsCodeActionParameter(): CodeActionParameter;
        /**
         * In version 8.8.0: introduced
         */
        get grammar(): StringTemplateParameterGrammar;
        set grammar(newValue: StringTemplateParameterGrammar);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new StringTemplateParameterType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): StringTemplateParameterType;
    }
    /**
     * In version 7.21.0: introduced
     */
    interface IStringType extends IPrimitiveType {
        readonly model: IModel;
        readonly containerAsBasicParameterType: IBasicParameterType;
        readonly containerAsCodeAction: ICodeAction;
        asLoaded(): StringType;
        load(callback: (element: StringType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<StringType>;
    }
    /**
     * In version 7.21.0: introduced
     */
    class StringType extends PrimitiveType implements IStringType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsBasicParameterType(): BasicParameterType;
        get containerAsCodeAction(): CodeAction;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new StringType instance in the SDK and on the server.
         * The new StringType will be automatically stored in the 'type' property
         * of the parent BasicParameterType element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInBasicParameterTypeUnderType(container: BasicParameterType): StringType;
        /**
         * Creates and returns a new StringType instance in the SDK and on the server.
         * The new StringType will be automatically stored in the 'actionReturnType' property
         * of the parent CodeAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInCodeActionUnderActionReturnType(container: CodeAction): StringType;
        /**
         * Creates and returns a new StringType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): StringType;
    }
    /**
     * In version 7.21.0: introduced
     */
    interface ITypeParameter extends internal.IElement, internal.IByNameReferrable {
        readonly model: IModel;
        readonly containerAsCodeAction: ICodeAction;
        readonly name: string;
        asLoaded(): TypeParameter;
        load(callback: (element: TypeParameter) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<TypeParameter>;
    }
    /**
     * In version 7.21.0: introduced
     */
    class TypeParameter extends internal.Element<IModel> implements ITypeParameter {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsCodeAction(): CodeAction;
        get name(): string;
        set name(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new TypeParameter instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): TypeParameter;
        get qualifiedName(): string | null;
    }
    /**
     * In version 8.3.0: introduced
     */
    interface IVoidType extends IPrimitiveType {
        readonly model: IModel;
        readonly containerAsBasicParameterType: IBasicParameterType;
        readonly containerAsCodeAction: ICodeAction;
        asLoaded(): VoidType;
        load(callback: (element: VoidType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<VoidType>;
    }
    /**
     * In version 8.3.0: introduced
     */
    class VoidType extends PrimitiveType implements IVoidType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsBasicParameterType(): BasicParameterType;
        get containerAsCodeAction(): CodeAction;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new VoidType instance in the SDK and on the server.
         * The new VoidType will be automatically stored in the 'type' property
         * of the parent BasicParameterType element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.3.0 and higher
         */
        static createInBasicParameterTypeUnderType(container: BasicParameterType): VoidType;
        /**
         * Creates and returns a new VoidType instance in the SDK and on the server.
         * The new VoidType will be automatically stored in the 'actionReturnType' property
         * of the parent CodeAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.3.0 and higher
         */
        static createInCodeActionUnderActionReturnType(container: CodeAction): VoidType;
        /**
         * Creates and returns a new VoidType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): VoidType;
    }
}
import { domainmodels } from "./domainmodels";
import { enumerations } from "./enumerations";
import { images } from "./images";
import { javaactions } from "./javaactions";
import { microflows } from "./microflows";
import { IModel } from "./base-model";
