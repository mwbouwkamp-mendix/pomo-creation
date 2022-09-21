import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
import { projects } from "./projects";
export declare namespace datasets {
    class DateTimeIntervalLength extends internal.AbstractEnum {
        static Day: DateTimeIntervalLength;
        static Week: DateTimeIntervalLength;
        static Period: DateTimeIntervalLength;
        static Month: DateTimeIntervalLength;
        static Quarter: DateTimeIntervalLength;
        static Year: DateTimeIntervalLength;
        protected qualifiedTsTypeName: string;
    }
    class DateTimeIntervalModifier extends internal.AbstractEnum {
        static Last: DateTimeIntervalModifier;
        static This: DateTimeIntervalModifier;
        static Next: DateTimeIntervalModifier;
        static Past: DateTimeIntervalModifier;
        static Future: DateTimeIntervalModifier;
        static Always: DateTimeIntervalModifier;
        protected qualifiedTsTypeName: string;
    }
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `DataSets`.
     */
    /**
     * See: {@link https://docs.mendix.com/refguide/data-sets relevant section in reference guide}
     */
    interface IDataSet extends projects.IDocument {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        readonly parameters: internal.IList<IDataSetParameter>;
        asLoaded(): DataSet;
        load(callback: (element: DataSet) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<DataSet>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/data-sets relevant section in reference guide}
     */
    class DataSet extends projects.Document implements IDataSet {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFolderBase(): projects.FolderBase;
        get source(): DataSetSource;
        set source(newValue: DataSetSource);
        get parameters(): internal.IList<DataSetParameter>;
        get dataSetAccess(): DataSetAccess;
        set dataSetAccess(newValue: DataSetAccess);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
        /**
         * Creates a new DataSet unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container: projects.IFolderBase): DataSet;
    }
    class DataSetAccess extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsDataSet(): DataSet;
        get moduleRoleAccessList(): internal.IList<DataSetModuleRoleAccess>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new DataSetAccess instance in the SDK and on the server.
         * The new DataSetAccess will be automatically stored in the 'dataSetAccess' property
         * of the parent DataSet element passed as argument.
         */
        static createIn(container: DataSet): DataSetAccess;
        /**
         * Creates and returns a new DataSetAccess instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): DataSetAccess;
    }
    class DataSetColumn extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsJavaDataSetSource(): JavaDataSetSource;
        get name(): string;
        set name(newValue: string);
        /**
         * The value of this property is conceptually of type dataTypes.LegacyDataType.
         *
         * In version 7.9.0: deleted
         */
        get type(): string;
        set type(newValue: string);
        /**
         * In version 7.9.0: introduced
         */
        get columnType(): datatypes.DataType;
        set columnType(newValue: datatypes.DataType);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new DataSetColumn instance in the SDK and on the server.
         * The new DataSetColumn will be automatically stored in the 'columns' property
         * of the parent JavaDataSetSource element passed as argument.
         */
        static createIn(container: JavaDataSetSource): DataSetColumn;
        /**
         * Creates and returns a new DataSetColumn instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): DataSetColumn;
    }
    class DataSetConstraintAccess extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsDataSetParameterAccess(): DataSetParameterAccess;
        get constraintText(): string;
        set constraintText(newValue: string);
        get enabled(): boolean;
        set enabled(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new DataSetConstraintAccess instance in the SDK and on the server.
         * The new DataSetConstraintAccess will be automatically stored in the 'constraintAccessList' property
         * of the parent DataSetParameterAccess element passed as argument.
         */
        static createIn(container: DataSetParameterAccess): DataSetConstraintAccess;
        /**
         * Creates and returns a new DataSetConstraintAccess instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): DataSetConstraintAccess;
    }
    abstract class DataSetParameterConstraint extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsDataSetParameter(): DataSetParameter;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    class DataSetDateTimeConstraint extends DataSetParameterConstraint {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsDataSetParameter(): DataSetParameter;
        get modifier(): DateTimeIntervalModifier;
        set modifier(newValue: DateTimeIntervalModifier);
        get length(): DateTimeIntervalLength;
        set length(newValue: DateTimeIntervalLength);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new DataSetDateTimeConstraint instance in the SDK and on the server.
         * The new DataSetDateTimeConstraint will be automatically stored in the 'constraints' property
         * of the parent DataSetParameter element passed as argument.
         */
        static createIn(container: DataSetParameter): DataSetDateTimeConstraint;
        /**
         * Creates and returns a new DataSetDateTimeConstraint instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): DataSetDateTimeConstraint;
    }
    class DataSetModuleRoleAccess extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsDataSetAccess(): DataSetAccess;
        get parameterAccessList(): internal.IList<DataSetParameterAccess>;
        get moduleRole(): security.IModuleRole | null;
        set moduleRole(newValue: security.IModuleRole | null);
        get moduleRoleQualifiedName(): string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new DataSetModuleRoleAccess instance in the SDK and on the server.
         * The new DataSetModuleRoleAccess will be automatically stored in the 'moduleRoleAccessList' property
         * of the parent DataSetAccess element passed as argument.
         */
        static createIn(container: DataSetAccess): DataSetModuleRoleAccess;
        /**
         * Creates and returns a new DataSetModuleRoleAccess instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): DataSetModuleRoleAccess;
    }
    class DataSetNumericConstraint extends DataSetParameterConstraint {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsDataSetParameter(): DataSetParameter;
        get begin(): string;
        set begin(newValue: string);
        get applyBegin(): boolean;
        set applyBegin(newValue: boolean);
        get end(): string;
        set end(newValue: string);
        get applyEnd(): boolean;
        set applyEnd(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new DataSetNumericConstraint instance in the SDK and on the server.
         * The new DataSetNumericConstraint will be automatically stored in the 'constraints' property
         * of the parent DataSetParameter element passed as argument.
         */
        static createIn(container: DataSetParameter): DataSetNumericConstraint;
        /**
         * Creates and returns a new DataSetNumericConstraint instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): DataSetNumericConstraint;
    }
    class DataSetObjectConstraint extends DataSetParameterConstraint {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsDataSetParameter(): DataSetParameter;
        get name(): string;
        set name(newValue: string);
        /**
         * The value of this property is conceptually of type xPathConstraints.XPathConstraint.
         */
        get constraint(): string;
        set constraint(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new DataSetObjectConstraint instance in the SDK and on the server.
         * The new DataSetObjectConstraint will be automatically stored in the 'constraints' property
         * of the parent DataSetParameter element passed as argument.
         */
        static createIn(container: DataSetParameter): DataSetObjectConstraint;
        /**
         * Creates and returns a new DataSetObjectConstraint instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): DataSetObjectConstraint;
    }
    interface IDataSetParameter extends internal.IElement, internal.IByNameReferrable {
        readonly model: IModel;
        readonly containerAsDataSet: IDataSet;
        readonly name: string;
        asLoaded(): DataSetParameter;
        load(callback: (element: DataSetParameter) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<DataSetParameter>;
    }
    class DataSetParameter extends internal.Element<IModel> implements IDataSetParameter {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsDataSet(): DataSet;
        get name(): string;
        set name(newValue: string);
        /**
         * The value of this property is conceptually of type dataTypes.LegacyDataType.
         *
         * In version 7.9.0: deleted
         */
        get type(): string;
        set type(newValue: string);
        /**
         * In version 7.9.0: introduced
         */
        get parameterType(): datatypes.DataType;
        set parameterType(newValue: datatypes.DataType);
        /**
         * In version 7.9.0: introduced
         */
        get parameterTypeIsRange(): boolean;
        set parameterTypeIsRange(newValue: boolean);
        get constraints(): internal.IList<DataSetParameterConstraint>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new DataSetParameter instance in the SDK and on the server.
         * The new DataSetParameter will be automatically stored in the 'parameters' property
         * of the parent DataSet element passed as argument.
         */
        static createIn(container: DataSet): DataSetParameter;
        /**
         * Creates and returns a new DataSetParameter instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): DataSetParameter;
        get qualifiedName(): string | null;
    }
    class DataSetParameterAccess extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsDataSetModuleRoleAccess(): DataSetModuleRoleAccess;
        get parameterName(): string;
        set parameterName(newValue: string);
        get constraintAccessList(): internal.IList<DataSetConstraintAccess>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new DataSetParameterAccess instance in the SDK and on the server.
         * The new DataSetParameterAccess will be automatically stored in the 'parameterAccessList' property
         * of the parent DataSetModuleRoleAccess element passed as argument.
         */
        static createIn(container: DataSetModuleRoleAccess): DataSetParameterAccess;
        /**
         * Creates and returns a new DataSetParameterAccess instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): DataSetParameterAccess;
    }
    abstract class DataSetSource extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsDataSet(): DataSet;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    class JavaDataSetSource extends DataSetSource {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsDataSet(): DataSet;
        get columns(): internal.IList<DataSetColumn>;
        /**
         * In version 9.0.3: deleted
         * In version 8.0.0: introduced
         */
        get useLegacyCodeGeneration(): boolean;
        set useLegacyCodeGeneration(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new JavaDataSetSource instance in the SDK and on the server.
         * The new JavaDataSetSource will be automatically stored in the 'source' property
         * of the parent DataSet element passed as argument.
         */
        static createIn(container: DataSet): JavaDataSetSource;
        /**
         * Creates and returns a new JavaDataSetSource instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): JavaDataSetSource;
    }
    class OqlDataSetSource extends DataSetSource {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsDataSet(): DataSet;
        /**
         * The value of this property is conceptually of type oql.OqlQuery.
         */
        get query(): string;
        set query(newValue: string);
        get ignoreErrorsInQuery(): boolean;
        set ignoreErrorsInQuery(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new OqlDataSetSource instance in the SDK and on the server.
         * The new OqlDataSetSource will be automatically stored in the 'source' property
         * of the parent DataSet element passed as argument.
         */
        static createIn(container: DataSet): OqlDataSetSource;
        /**
         * Creates and returns a new OqlDataSetSource instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): OqlDataSetSource;
    }
}
import { datatypes } from "./datatypes";
import { security } from "./security";
import { IModel } from "./base-model";
