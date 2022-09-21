import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
import { codeactions } from "./codeactions";
export declare namespace javaactions {
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `JavaActions`.
     */
    /**
     * In version 7.21.0: deleted
     * In version 6.7.0: introduced
     */
    interface IParameterType extends internal.IElement {
        readonly model: IModel;
        readonly containerAsJavaActionParameter: IJavaActionParameter;
        asLoaded(): ParameterType;
        load(callback: (element: ParameterType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ParameterType>;
    }
    /**
     * In version 7.21.0: deleted
     * In version 6.7.0: introduced
     */
    abstract class ParameterType extends internal.Element<IModel> implements IParameterType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsJavaActionParameter(): JavaActionParameter;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 7.21.0: deleted
     * In version 6.7.0: introduced
     */
    interface IBasicParameterType extends IParameterType {
        readonly model: IModel;
        readonly containerAsJavaActionParameter: IJavaActionParameter;
        /**
         * This property is required and cannot be set to null.
         */
        readonly type: IType;
        asLoaded(): BasicParameterType;
        load(callback: (element: BasicParameterType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<BasicParameterType>;
    }
    /**
     * In version 7.21.0: deleted
     * In version 6.7.0: introduced
     */
    class BasicParameterType extends ParameterType implements IBasicParameterType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsJavaActionParameter(): JavaActionParameter;
        get type(): Type;
        set type(newValue: Type);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new BasicParameterType instance in the SDK and on the server.
         * The new BasicParameterType will be automatically stored in the 'parameterType' property
         * of the parent JavaActionParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.7.0 to 7.20.0
         */
        static createIn(container: JavaActionParameter): BasicParameterType;
        /**
         * Creates and returns a new BasicParameterType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): BasicParameterType;
    }
    /**
     * In version 7.21.0: deleted
     * In version 6.6.0: introduced
     */
    interface IType extends internal.IElement {
        readonly model: IModel;
        readonly containerAsBasicParameterType: IBasicParameterType;
        readonly containerAsJavaAction: IJavaAction;
        readonly containerAsJavaActionParameter: IJavaActionParameter;
        readonly containerAsListType: IListType;
        asLoaded(): Type;
        load(callback: (element: Type) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<Type>;
    }
    /**
     * In version 7.21.0: deleted
     * In version 6.6.0: introduced
     */
    abstract class Type extends internal.Element<IModel> implements IType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsBasicParameterType(): BasicParameterType;
        get containerAsJavaAction(): JavaAction;
        get containerAsJavaActionParameter(): JavaActionParameter;
        get containerAsListType(): ListType;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 7.21.0: deleted
     * In version 6.6.0: introduced
     */
    interface IPrimitiveType extends IType {
        readonly model: IModel;
        readonly containerAsBasicParameterType: IBasicParameterType;
        readonly containerAsJavaAction: IJavaAction;
        readonly containerAsJavaActionParameter: IJavaActionParameter;
        asLoaded(): PrimitiveType;
        load(callback: (element: PrimitiveType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<PrimitiveType>;
    }
    /**
     * In version 7.21.0: deleted
     * In version 6.6.0: introduced
     */
    abstract class PrimitiveType extends Type implements IPrimitiveType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsBasicParameterType(): BasicParameterType;
        get containerAsJavaAction(): JavaAction;
        get containerAsJavaActionParameter(): JavaActionParameter;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 7.21.0: deleted
     * In version 6.6.0: introduced
     */
    interface IBooleanType extends IPrimitiveType {
        readonly model: IModel;
        readonly containerAsBasicParameterType: IBasicParameterType;
        readonly containerAsJavaAction: IJavaAction;
        readonly containerAsJavaActionParameter: IJavaActionParameter;
        asLoaded(): BooleanType;
        load(callback: (element: BooleanType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<BooleanType>;
    }
    /**
     * In version 7.21.0: deleted
     * In version 6.6.0: introduced
     */
    class BooleanType extends PrimitiveType implements IBooleanType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsBasicParameterType(): BasicParameterType;
        get containerAsJavaAction(): JavaAction;
        get containerAsJavaActionParameter(): JavaActionParameter;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new BooleanType instance in the SDK and on the server.
         * The new BooleanType will be automatically stored in the 'type' property
         * of the parent BasicParameterType element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.7.0 to 7.20.0
         */
        static createInBasicParameterTypeUnderType(container: BasicParameterType): BooleanType;
        /**
         * Creates and returns a new BooleanType instance in the SDK and on the server.
         * The new BooleanType will be automatically stored in the 'javaReturnType' property
         * of the parent JavaAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 to 7.20.0
         */
        static createInJavaActionUnderJavaReturnType(container: JavaAction): BooleanType;
        /**
         * Creates and returns a new BooleanType instance in the SDK and on the server.
         * The new BooleanType will be automatically stored in the 'javaType' property
         * of the parent JavaActionParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 to 6.6.0
         */
        static createInJavaActionParameterUnderJavaType(container: JavaActionParameter): BooleanType;
        /**
         * Creates and returns a new BooleanType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): BooleanType;
    }
    /**
     * In version 7.21.0: deleted
     * In version 6.6.0: introduced
     */
    interface IEntityType extends IType {
        readonly model: IModel;
        readonly containerAsBasicParameterType: IBasicParameterType;
        readonly containerAsJavaAction: IJavaAction;
        readonly containerAsJavaActionParameter: IJavaActionParameter;
        readonly containerAsListType: IListType;
        asLoaded(): EntityType;
        load(callback: (element: EntityType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<EntityType>;
    }
    /**
     * In version 7.21.0: deleted
     * In version 6.6.0: introduced
     */
    abstract class EntityType extends Type implements IEntityType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsBasicParameterType(): BasicParameterType;
        get containerAsJavaAction(): JavaAction;
        get containerAsJavaActionParameter(): JavaActionParameter;
        get containerAsListType(): ListType;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 7.21.0: deleted
     * In version 6.6.0: introduced
     */
    interface IConcreteEntityType extends IEntityType {
        readonly model: IModel;
        readonly containerAsBasicParameterType: IBasicParameterType;
        readonly containerAsJavaAction: IJavaAction;
        readonly containerAsJavaActionParameter: IJavaActionParameter;
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
     * In version 7.21.0: deleted
     * In version 6.6.0: introduced
     */
    class ConcreteEntityType extends EntityType implements IConcreteEntityType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsBasicParameterType(): BasicParameterType;
        get containerAsJavaAction(): JavaAction;
        get containerAsJavaActionParameter(): JavaActionParameter;
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
         *  6.7.0 to 7.20.0
         */
        static createInBasicParameterTypeUnderType(container: BasicParameterType): ConcreteEntityType;
        /**
         * Creates and returns a new ConcreteEntityType instance in the SDK and on the server.
         * The new ConcreteEntityType will be automatically stored in the 'javaReturnType' property
         * of the parent JavaAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 to 7.20.0
         */
        static createInJavaActionUnderJavaReturnType(container: JavaAction): ConcreteEntityType;
        /**
         * Creates and returns a new ConcreteEntityType instance in the SDK and on the server.
         * The new ConcreteEntityType will be automatically stored in the 'javaType' property
         * of the parent JavaActionParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 to 6.6.0
         */
        static createInJavaActionParameterUnderJavaType(container: JavaActionParameter): ConcreteEntityType;
        /**
         * Creates and returns a new ConcreteEntityType instance in the SDK and on the server.
         * The new ConcreteEntityType will be automatically stored in the 'parameter' property
         * of the parent ListType element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 to 7.20.0
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
     * In version 7.21.0: deleted
     * In version 6.6.0: introduced
     */
    interface IDateTimeType extends IPrimitiveType {
        readonly model: IModel;
        readonly containerAsBasicParameterType: IBasicParameterType;
        readonly containerAsJavaAction: IJavaAction;
        readonly containerAsJavaActionParameter: IJavaActionParameter;
        asLoaded(): DateTimeType;
        load(callback: (element: DateTimeType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<DateTimeType>;
    }
    /**
     * In version 7.21.0: deleted
     * In version 6.6.0: introduced
     */
    class DateTimeType extends PrimitiveType implements IDateTimeType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsBasicParameterType(): BasicParameterType;
        get containerAsJavaAction(): JavaAction;
        get containerAsJavaActionParameter(): JavaActionParameter;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new DateTimeType instance in the SDK and on the server.
         * The new DateTimeType will be automatically stored in the 'type' property
         * of the parent BasicParameterType element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.7.0 to 7.20.0
         */
        static createInBasicParameterTypeUnderType(container: BasicParameterType): DateTimeType;
        /**
         * Creates and returns a new DateTimeType instance in the SDK and on the server.
         * The new DateTimeType will be automatically stored in the 'javaReturnType' property
         * of the parent JavaAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 to 7.20.0
         */
        static createInJavaActionUnderJavaReturnType(container: JavaAction): DateTimeType;
        /**
         * Creates and returns a new DateTimeType instance in the SDK and on the server.
         * The new DateTimeType will be automatically stored in the 'javaType' property
         * of the parent JavaActionParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 to 6.6.0
         */
        static createInJavaActionParameterUnderJavaType(container: JavaActionParameter): DateTimeType;
        /**
         * Creates and returns a new DateTimeType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): DateTimeType;
    }
    /**
     * In version 7.21.0: deleted
     * In version 6.6.0: introduced
     */
    interface IDecimalType extends IPrimitiveType {
        readonly model: IModel;
        readonly containerAsBasicParameterType: IBasicParameterType;
        readonly containerAsJavaAction: IJavaAction;
        readonly containerAsJavaActionParameter: IJavaActionParameter;
        asLoaded(): DecimalType;
        load(callback: (element: DecimalType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<DecimalType>;
    }
    /**
     * In version 7.21.0: deleted
     * In version 6.6.0: introduced
     */
    class DecimalType extends PrimitiveType implements IDecimalType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsBasicParameterType(): BasicParameterType;
        get containerAsJavaAction(): JavaAction;
        get containerAsJavaActionParameter(): JavaActionParameter;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new DecimalType instance in the SDK and on the server.
         * The new DecimalType will be automatically stored in the 'type' property
         * of the parent BasicParameterType element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.7.0 to 7.20.0
         */
        static createInBasicParameterTypeUnderType(container: BasicParameterType): DecimalType;
        /**
         * Creates and returns a new DecimalType instance in the SDK and on the server.
         * The new DecimalType will be automatically stored in the 'javaReturnType' property
         * of the parent JavaAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 to 7.20.0
         */
        static createInJavaActionUnderJavaReturnType(container: JavaAction): DecimalType;
        /**
         * Creates and returns a new DecimalType instance in the SDK and on the server.
         * The new DecimalType will be automatically stored in the 'javaType' property
         * of the parent JavaActionParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 to 6.6.0
         */
        static createInJavaActionParameterUnderJavaType(container: JavaActionParameter): DecimalType;
        /**
         * Creates and returns a new DecimalType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): DecimalType;
    }
    /**
     * In version 7.21.0: deleted
     * In version 6.7.0: introduced
     */
    interface IEntityTypeParameterType extends IParameterType {
        readonly model: IModel;
        readonly containerAsJavaActionParameter: IJavaActionParameter;
        readonly typeParameter: ITypeParameter | null;
        asLoaded(): EntityTypeParameterType;
        load(callback: (element: EntityTypeParameterType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<EntityTypeParameterType>;
    }
    /**
     * In version 7.21.0: deleted
     * In version 6.7.0: introduced
     */
    class EntityTypeParameterType extends ParameterType implements IEntityTypeParameterType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsJavaActionParameter(): JavaActionParameter;
        get typeParameter(): TypeParameter | null;
        set typeParameter(newValue: TypeParameter | null);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new EntityTypeParameterType instance in the SDK and on the server.
         * The new EntityTypeParameterType will be automatically stored in the 'parameterType' property
         * of the parent JavaActionParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.7.0 to 7.20.0
         */
        static createIn(container: JavaActionParameter): EntityTypeParameterType;
        /**
         * Creates and returns a new EntityTypeParameterType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): EntityTypeParameterType;
    }
    /**
     * In version 7.21.0: deleted
     * In version 6.6.0: introduced
     */
    interface IEnumerationType extends IType {
        readonly model: IModel;
        readonly containerAsBasicParameterType: IBasicParameterType;
        readonly containerAsJavaAction: IJavaAction;
        readonly containerAsJavaActionParameter: IJavaActionParameter;
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
     * In version 7.21.0: deleted
     * In version 6.6.0: introduced
     */
    class EnumerationType extends Type implements IEnumerationType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsBasicParameterType(): BasicParameterType;
        get containerAsJavaAction(): JavaAction;
        get containerAsJavaActionParameter(): JavaActionParameter;
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
         *  6.7.0 to 7.20.0
         */
        static createInBasicParameterTypeUnderType(container: BasicParameterType): EnumerationType;
        /**
         * Creates and returns a new EnumerationType instance in the SDK and on the server.
         * The new EnumerationType will be automatically stored in the 'javaReturnType' property
         * of the parent JavaAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 to 7.20.0
         */
        static createInJavaActionUnderJavaReturnType(container: JavaAction): EnumerationType;
        /**
         * Creates and returns a new EnumerationType instance in the SDK and on the server.
         * The new EnumerationType will be automatically stored in the 'javaType' property
         * of the parent JavaActionParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 to 6.6.0
         */
        static createInJavaActionParameterUnderJavaType(container: JavaActionParameter): EnumerationType;
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
    interface IExportMappingJavaActionParameterType extends codeactions.IParameterType {
        readonly model: IModel;
        readonly containerAsCodeActionParameter: codeactions.ICodeActionParameter;
        asLoaded(): ExportMappingJavaActionParameterType;
        load(callback: (element: ExportMappingJavaActionParameterType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ExportMappingJavaActionParameterType>;
    }
    /**
     * In version 7.21.0: introduced
     */
    class ExportMappingJavaActionParameterType extends codeactions.ParameterType implements IExportMappingJavaActionParameterType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsCodeActionParameter(): codeactions.CodeActionParameter;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ExportMappingJavaActionParameterType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ExportMappingJavaActionParameterType;
    }
    /**
     * In version 7.21.0: deleted
     * In version 7.2.0: introduced
     */
    interface IExportMappingParameterType extends IParameterType {
        readonly model: IModel;
        readonly containerAsJavaActionParameter: IJavaActionParameter;
        asLoaded(): ExportMappingParameterType;
        load(callback: (element: ExportMappingParameterType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ExportMappingParameterType>;
    }
    /**
     * In version 7.21.0: deleted
     * In version 7.2.0: introduced
     */
    class ExportMappingParameterType extends ParameterType implements IExportMappingParameterType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsJavaActionParameter(): JavaActionParameter;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ExportMappingParameterType instance in the SDK and on the server.
         * The new ExportMappingParameterType will be automatically stored in the 'parameterType' property
         * of the parent JavaActionParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.2.0 to 7.20.0
         */
        static createIn(container: JavaActionParameter): ExportMappingParameterType;
        /**
         * Creates and returns a new ExportMappingParameterType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ExportMappingParameterType;
    }
    /**
     * In version 7.21.0: deleted
     * In version 6.6.0: introduced
     */
    interface IFloatType extends IPrimitiveType {
        readonly model: IModel;
        readonly containerAsBasicParameterType: IBasicParameterType;
        readonly containerAsJavaAction: IJavaAction;
        readonly containerAsJavaActionParameter: IJavaActionParameter;
        asLoaded(): FloatType;
        load(callback: (element: FloatType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<FloatType>;
    }
    /**
     * In version 7.21.0: deleted
     * In version 6.6.0: introduced
     */
    class FloatType extends PrimitiveType implements IFloatType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsBasicParameterType(): BasicParameterType;
        get containerAsJavaAction(): JavaAction;
        get containerAsJavaActionParameter(): JavaActionParameter;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new FloatType instance in the SDK and on the server.
         * The new FloatType will be automatically stored in the 'type' property
         * of the parent BasicParameterType element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.7.0 to 7.20.0
         */
        static createInBasicParameterTypeUnderType(container: BasicParameterType): FloatType;
        /**
         * Creates and returns a new FloatType instance in the SDK and on the server.
         * The new FloatType will be automatically stored in the 'javaReturnType' property
         * of the parent JavaAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 to 7.20.0
         */
        static createInJavaActionUnderJavaReturnType(container: JavaAction): FloatType;
        /**
         * Creates and returns a new FloatType instance in the SDK and on the server.
         * The new FloatType will be automatically stored in the 'javaType' property
         * of the parent JavaActionParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 to 6.6.0
         */
        static createInJavaActionParameterUnderJavaType(container: JavaActionParameter): FloatType;
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
    interface IImportMappingJavaActionParameterType extends codeactions.IParameterType {
        readonly model: IModel;
        readonly containerAsCodeActionParameter: codeactions.ICodeActionParameter;
        asLoaded(): ImportMappingJavaActionParameterType;
        load(callback: (element: ImportMappingJavaActionParameterType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ImportMappingJavaActionParameterType>;
    }
    /**
     * In version 7.21.0: introduced
     */
    class ImportMappingJavaActionParameterType extends codeactions.ParameterType implements IImportMappingJavaActionParameterType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsCodeActionParameter(): codeactions.CodeActionParameter;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ImportMappingJavaActionParameterType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ImportMappingJavaActionParameterType;
    }
    /**
     * In version 7.21.0: deleted
     * In version 7.2.0: introduced
     */
    interface IImportMappingParameterType extends IParameterType {
        readonly model: IModel;
        readonly containerAsJavaActionParameter: IJavaActionParameter;
        asLoaded(): ImportMappingParameterType;
        load(callback: (element: ImportMappingParameterType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ImportMappingParameterType>;
    }
    /**
     * In version 7.21.0: deleted
     * In version 7.2.0: introduced
     */
    class ImportMappingParameterType extends ParameterType implements IImportMappingParameterType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsJavaActionParameter(): JavaActionParameter;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ImportMappingParameterType instance in the SDK and on the server.
         * The new ImportMappingParameterType will be automatically stored in the 'parameterType' property
         * of the parent JavaActionParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.2.0 to 7.20.0
         */
        static createIn(container: JavaActionParameter): ImportMappingParameterType;
        /**
         * Creates and returns a new ImportMappingParameterType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ImportMappingParameterType;
    }
    /**
     * In version 7.21.0: deleted
     * In version 6.6.0: introduced
     */
    interface IIntegerType extends IPrimitiveType {
        readonly model: IModel;
        readonly containerAsBasicParameterType: IBasicParameterType;
        readonly containerAsJavaAction: IJavaAction;
        readonly containerAsJavaActionParameter: IJavaActionParameter;
        asLoaded(): IntegerType;
        load(callback: (element: IntegerType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<IntegerType>;
    }
    /**
     * In version 7.21.0: deleted
     * In version 6.6.0: introduced
     */
    class IntegerType extends PrimitiveType implements IIntegerType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsBasicParameterType(): BasicParameterType;
        get containerAsJavaAction(): JavaAction;
        get containerAsJavaActionParameter(): JavaActionParameter;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new IntegerType instance in the SDK and on the server.
         * The new IntegerType will be automatically stored in the 'type' property
         * of the parent BasicParameterType element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.7.0 to 7.20.0
         */
        static createInBasicParameterTypeUnderType(container: BasicParameterType): IntegerType;
        /**
         * Creates and returns a new IntegerType instance in the SDK and on the server.
         * The new IntegerType will be automatically stored in the 'javaReturnType' property
         * of the parent JavaAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 to 7.20.0
         */
        static createInJavaActionUnderJavaReturnType(container: JavaAction): IntegerType;
        /**
         * Creates and returns a new IntegerType instance in the SDK and on the server.
         * The new IntegerType will be automatically stored in the 'javaType' property
         * of the parent JavaActionParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 to 6.6.0
         */
        static createInJavaActionParameterUnderJavaType(container: JavaActionParameter): IntegerType;
        /**
         * Creates and returns a new IntegerType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): IntegerType;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/java-actions relevant section in reference guide}
     */
    interface IJavaAction extends codeactions.ICodeAction {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        /**
         * In version 7.21.0: deleted
         * In version 6.6.0: introduced
         */
        readonly typeParameters: internal.IList<ITypeParameter>;
        /**
         * In version 7.21.0: deleted
         */
        readonly parameters: internal.IList<IJavaActionParameter>;
        /**
         * The value of this property is conceptually of type dataTypes.LegacyDataType.
         *
         * In version 6.6.0: deleted
         */
        readonly returnType: string | null;
        /**
         * This property is required and cannot be set to null.
         *
         * In version 7.21.0: deleted
         * In version 6.6.0: introduced
         */
        readonly javaReturnType: IType;
        /**
         * In version 7.21.0: deleted
         * In version 6.6.0: introduced
         */
        readonly microflowActionInfo: IMicroflowActionInfo | null;
        /**
         * In version 9.0.3: deleted
         * In version 8.0.0: introduced
         */
        readonly useLegacyCodeGeneration: boolean;
        asLoaded(): JavaAction;
        load(callback: (element: JavaAction) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<JavaAction>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/java-actions relevant section in reference guide}
     */
    class JavaAction extends codeactions.CodeAction implements IJavaAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFolderBase(): projects.FolderBase;
        /**
         * In version 7.21.0: deleted
         * In version 6.6.0: introduced
         */
        get typeParameters(): internal.IList<TypeParameter>;
        /**
         * In version 7.21.0: deleted
         */
        get parameters(): internal.IList<JavaActionParameter>;
        /**
         * The value of this property is conceptually of type dataTypes.LegacyDataType.
         *
         * In version 6.6.0: deleted
         */
        get returnType(): string;
        set returnType(newValue: string);
        /**
         * In version 7.21.0: deleted
         * In version 6.6.0: introduced
         */
        get javaReturnType(): Type;
        set javaReturnType(newValue: Type);
        /**
         * In version 7.21.0: deleted
         * In version 6.6.0: introduced
         */
        get microflowActionInfo(): MicroflowActionInfo | null;
        set microflowActionInfo(newValue: MicroflowActionInfo | null);
        /**
         * In version 9.0.3: deleted
         * In version 8.0.0: introduced
         */
        get useLegacyCodeGeneration(): boolean;
        set useLegacyCodeGeneration(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
        /**
         * Creates a new JavaAction unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container: projects.IFolderBase): JavaAction;
    }
    interface IJavaActionParameter extends codeactions.ICodeActionParameter {
        readonly model: IModel;
        readonly containerAsCodeAction: codeactions.ICodeAction;
        readonly containerAsJavaAction: IJavaAction;
        /**
         * The value of this property is conceptually of type dataTypes.LegacyDataType.
         *
         * In version 6.6.0: deleted
         */
        readonly type: string | null;
        /**
         * This property is required and cannot be set to null.
         *
         * In version 6.7.0: deleted
         * In version 6.6.0: introduced
         */
        readonly javaType: IType;
        /**
         * This property is required and cannot be set to null.
         *
         * In version 7.21.0: deleted
         * In version 6.7.0: introduced
         */
        readonly parameterType: IParameterType;
        asLoaded(): JavaActionParameter;
        load(callback: (element: JavaActionParameter) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<JavaActionParameter>;
    }
    class JavaActionParameter extends codeactions.CodeActionParameter implements IJavaActionParameter {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsCodeAction(): codeactions.CodeAction;
        get containerAsJavaAction(): JavaAction;
        /**
         * The value of this property is conceptually of type dataTypes.LegacyDataType.
         *
         * In version 6.6.0: deleted
         */
        get type(): string;
        set type(newValue: string);
        /**
         * In version 6.7.0: deleted
         * In version 6.6.0: introduced
         */
        get javaType(): Type;
        set javaType(newValue: Type);
        /**
         * In version 7.21.0: deleted
         * In version 6.7.0: introduced
         */
        get parameterType(): ParameterType;
        set parameterType(newValue: ParameterType);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new JavaActionParameter instance in the SDK and on the server.
         * The new JavaActionParameter will be automatically stored in the 'actionParameters' property
         * of the parent codeactions.CodeAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInCodeActionUnderActionParameters(container: codeactions.CodeAction): JavaActionParameter;
        /**
         * Creates and returns a new JavaActionParameter instance in the SDK and on the server.
         * The new JavaActionParameter will be automatically stored in the 'parameters' property
         * of the parent JavaAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.20.0
         */
        static createInJavaActionUnderParameters(container: JavaAction): JavaActionParameter;
        /**
         * Creates and returns a new JavaActionParameter instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): JavaActionParameter;
    }
    /**
     * In version 7.21.0: deleted
     * In version 6.6.0: introduced
     */
    interface IListType extends IType {
        readonly model: IModel;
        readonly containerAsBasicParameterType: IBasicParameterType;
        readonly containerAsJavaAction: IJavaAction;
        readonly containerAsJavaActionParameter: IJavaActionParameter;
        /**
         * This property is required and cannot be set to null.
         */
        readonly parameter: IEntityType;
        asLoaded(): ListType;
        load(callback: (element: ListType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ListType>;
    }
    /**
     * In version 7.21.0: deleted
     * In version 6.6.0: introduced
     */
    class ListType extends Type implements IListType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsBasicParameterType(): BasicParameterType;
        get containerAsJavaAction(): JavaAction;
        get containerAsJavaActionParameter(): JavaActionParameter;
        get parameter(): EntityType;
        set parameter(newValue: EntityType);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ListType instance in the SDK and on the server.
         * The new ListType will be automatically stored in the 'type' property
         * of the parent BasicParameterType element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.7.0 to 7.20.0
         */
        static createInBasicParameterTypeUnderType(container: BasicParameterType): ListType;
        /**
         * Creates and returns a new ListType instance in the SDK and on the server.
         * The new ListType will be automatically stored in the 'javaReturnType' property
         * of the parent JavaAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 to 7.20.0
         */
        static createInJavaActionUnderJavaReturnType(container: JavaAction): ListType;
        /**
         * Creates and returns a new ListType instance in the SDK and on the server.
         * The new ListType will be automatically stored in the 'javaType' property
         * of the parent JavaActionParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 to 6.6.0
         */
        static createInJavaActionParameterUnderJavaType(container: JavaActionParameter): ListType;
        /**
         * Creates and returns a new ListType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ListType;
    }
    /**
     * In version 7.21.0: deleted
     * In version 6.10.0: removed experimental
     * In version 6.6.0: introduced
     */
    interface IMicroflowActionInfo extends internal.IElement {
        readonly model: IModel;
        readonly containerAsJavaAction: IJavaAction;
        readonly caption: string;
        readonly category: string;
        readonly icon: images.IImage | null;
        readonly iconQualifiedName: string | null;
        asLoaded(): MicroflowActionInfo;
        load(callback: (element: MicroflowActionInfo) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<MicroflowActionInfo>;
    }
    /**
     * In version 7.21.0: deleted
     * In version 6.10.0: removed experimental
     * In version 6.6.0: introduced
     */
    class MicroflowActionInfo extends internal.Element<IModel> implements IMicroflowActionInfo {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsJavaAction(): JavaAction;
        get caption(): string;
        set caption(newValue: string);
        get category(): string;
        set category(newValue: string);
        get icon(): images.IImage | null;
        set icon(newValue: images.IImage | null);
        get iconQualifiedName(): string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MicroflowActionInfo instance in the SDK and on the server.
         * The new MicroflowActionInfo will be automatically stored in the 'microflowActionInfo' property
         * of the parent JavaAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 to 7.20.0
         */
        static createIn(container: JavaAction): MicroflowActionInfo;
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
    interface IMicroflowJavaActionParameterType extends codeactions.IParameterType {
        readonly model: IModel;
        readonly containerAsCodeActionParameter: codeactions.ICodeActionParameter;
        asLoaded(): MicroflowJavaActionParameterType;
        load(callback: (element: MicroflowJavaActionParameterType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<MicroflowJavaActionParameterType>;
    }
    /**
     * In version 7.21.0: introduced
     */
    class MicroflowJavaActionParameterType extends codeactions.ParameterType implements IMicroflowJavaActionParameterType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsCodeActionParameter(): codeactions.CodeActionParameter;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MicroflowJavaActionParameterType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MicroflowJavaActionParameterType;
    }
    /**
     * In version 7.21.0: deleted
     * In version 6.9.0: introduced
     */
    interface IMicroflowParameterType extends IParameterType {
        readonly model: IModel;
        readonly containerAsJavaActionParameter: IJavaActionParameter;
        asLoaded(): MicroflowParameterType;
        load(callback: (element: MicroflowParameterType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<MicroflowParameterType>;
    }
    /**
     * In version 7.21.0: deleted
     * In version 6.9.0: introduced
     */
    class MicroflowParameterType extends ParameterType implements IMicroflowParameterType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsJavaActionParameter(): JavaActionParameter;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MicroflowParameterType instance in the SDK and on the server.
         * The new MicroflowParameterType will be automatically stored in the 'parameterType' property
         * of the parent JavaActionParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.9.0 to 7.20.0
         */
        static createIn(container: JavaActionParameter): MicroflowParameterType;
        /**
         * Creates and returns a new MicroflowParameterType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MicroflowParameterType;
    }
    /**
     * In version 7.21.0: deleted
     * In version 6.6.0: introduced
     */
    interface IParameterizedEntityType extends IEntityType {
        readonly model: IModel;
        readonly containerAsBasicParameterType: IBasicParameterType;
        readonly containerAsJavaAction: IJavaAction;
        readonly containerAsJavaActionParameter: IJavaActionParameter;
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
     * In version 7.21.0: deleted
     * In version 6.6.0: introduced
     */
    class ParameterizedEntityType extends EntityType implements IParameterizedEntityType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsBasicParameterType(): BasicParameterType;
        get containerAsJavaAction(): JavaAction;
        get containerAsJavaActionParameter(): JavaActionParameter;
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
         *  6.7.0 to 7.20.0
         */
        static createInBasicParameterTypeUnderType(container: BasicParameterType): ParameterizedEntityType;
        /**
         * Creates and returns a new ParameterizedEntityType instance in the SDK and on the server.
         * The new ParameterizedEntityType will be automatically stored in the 'javaReturnType' property
         * of the parent JavaAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 to 7.20.0
         */
        static createInJavaActionUnderJavaReturnType(container: JavaAction): ParameterizedEntityType;
        /**
         * Creates and returns a new ParameterizedEntityType instance in the SDK and on the server.
         * The new ParameterizedEntityType will be automatically stored in the 'javaType' property
         * of the parent JavaActionParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 to 6.6.0
         */
        static createInJavaActionParameterUnderJavaType(container: JavaActionParameter): ParameterizedEntityType;
        /**
         * Creates and returns a new ParameterizedEntityType instance in the SDK and on the server.
         * The new ParameterizedEntityType will be automatically stored in the 'parameter' property
         * of the parent ListType element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 to 7.20.0
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
     * In version 7.21.0: deleted
     * In version 6.6.0: introduced
     */
    interface IStringType extends IPrimitiveType {
        readonly model: IModel;
        readonly containerAsBasicParameterType: IBasicParameterType;
        readonly containerAsJavaAction: IJavaAction;
        readonly containerAsJavaActionParameter: IJavaActionParameter;
        asLoaded(): StringType;
        load(callback: (element: StringType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<StringType>;
    }
    /**
     * In version 7.21.0: deleted
     * In version 6.6.0: introduced
     */
    class StringType extends PrimitiveType implements IStringType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsBasicParameterType(): BasicParameterType;
        get containerAsJavaAction(): JavaAction;
        get containerAsJavaActionParameter(): JavaActionParameter;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new StringType instance in the SDK and on the server.
         * The new StringType will be automatically stored in the 'type' property
         * of the parent BasicParameterType element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.7.0 to 7.20.0
         */
        static createInBasicParameterTypeUnderType(container: BasicParameterType): StringType;
        /**
         * Creates and returns a new StringType instance in the SDK and on the server.
         * The new StringType will be automatically stored in the 'javaReturnType' property
         * of the parent JavaAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 to 7.20.0
         */
        static createInJavaActionUnderJavaReturnType(container: JavaAction): StringType;
        /**
         * Creates and returns a new StringType instance in the SDK and on the server.
         * The new StringType will be automatically stored in the 'javaType' property
         * of the parent JavaActionParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 to 6.6.0
         */
        static createInJavaActionParameterUnderJavaType(container: JavaActionParameter): StringType;
        /**
         * Creates and returns a new StringType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): StringType;
    }
    /**
     * In version 7.21.0: deleted
     * In version 6.6.0: introduced
     */
    interface ITypeParameter extends internal.IElement, internal.IByNameReferrable {
        readonly model: IModel;
        readonly containerAsJavaAction: IJavaAction;
        readonly name: string;
        asLoaded(): TypeParameter;
        load(callback: (element: TypeParameter) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<TypeParameter>;
    }
    /**
     * In version 7.21.0: deleted
     * In version 6.6.0: introduced
     */
    class TypeParameter extends internal.Element<IModel> implements ITypeParameter {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsJavaAction(): JavaAction;
        get name(): string;
        set name(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new TypeParameter instance in the SDK and on the server.
         * The new TypeParameter will be automatically stored in the 'typeParameters' property
         * of the parent JavaAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 to 7.20.0
         */
        static createIn(container: JavaAction): TypeParameter;
        /**
         * Creates and returns a new TypeParameter instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): TypeParameter;
        get qualifiedName(): string | null;
    }
}
import { domainmodels } from "./domainmodels";
import { enumerations } from "./enumerations";
import { images } from "./images";
import { projects } from "./projects";
import { IModel } from "./base-model";
