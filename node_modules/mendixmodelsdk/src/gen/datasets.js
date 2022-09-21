"use strict";
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.datasets = exports.StructureVersionInfo = void 0;
const internal = require("../sdk/internal");
exports.StructureVersionInfo = internal.StructureVersionInfo;
const projects_1 = require("./projects");
var datasets;
(function (datasets) {
    class DateTimeIntervalLength extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "datasets.DateTimeIntervalLength";
        }
    }
    DateTimeIntervalLength.Day = new DateTimeIntervalLength("Day", {});
    DateTimeIntervalLength.Week = new DateTimeIntervalLength("Week", {});
    DateTimeIntervalLength.Period = new DateTimeIntervalLength("Period", {});
    DateTimeIntervalLength.Month = new DateTimeIntervalLength("Month", {});
    DateTimeIntervalLength.Quarter = new DateTimeIntervalLength("Quarter", {});
    DateTimeIntervalLength.Year = new DateTimeIntervalLength("Year", {});
    datasets.DateTimeIntervalLength = DateTimeIntervalLength;
    class DateTimeIntervalModifier extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "datasets.DateTimeIntervalModifier";
        }
    }
    DateTimeIntervalModifier.Last = new DateTimeIntervalModifier("Last", {});
    DateTimeIntervalModifier.This = new DateTimeIntervalModifier("This", {});
    DateTimeIntervalModifier.Next = new DateTimeIntervalModifier("Next", {});
    DateTimeIntervalModifier.Past = new DateTimeIntervalModifier("Past", {});
    DateTimeIntervalModifier.Future = new DateTimeIntervalModifier("Future", {});
    DateTimeIntervalModifier.Always = new DateTimeIntervalModifier("Always", {});
    datasets.DateTimeIntervalModifier = DateTimeIntervalModifier;
    /**
     * See: {@link https://docs.mendix.com/refguide/data-sets relevant section in reference guide}
     */
    class DataSet extends projects_1.projects.Document {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            /** @internal */
            this.__source = new internal.PartProperty(DataSet, this, "source", null, true);
            /** @internal */
            this.__parameters = new internal.PartListProperty(DataSet, this, "parameters", []);
            /** @internal */
            this.__dataSetAccess = new internal.PartProperty(DataSet, this, "dataSetAccess", null, true);
            this._containmentName = "documents";
        }
        get containerAsFolderBase() {
            return super.getContainerAs(projects_1.projects.FolderBase);
        }
        get source() {
            return this.__source.get();
        }
        set source(newValue) {
            this.__source.set(newValue);
        }
        get parameters() {
            return this.__parameters.get();
        }
        get dataSetAccess() {
            return this.__dataSetAccess.get();
        }
        set dataSetAccess(newValue) {
            this.__dataSetAccess.set(newValue);
        }
        /**
         * Creates a new DataSet unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container) {
            return internal.instancehelpers.createUnit(container, DataSet);
        }
        /** @internal */
        _isByNameReferrable() {
            return this.__name.isAvailable;
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.dataSetAccess = DataSetAccess.create(this.model);
            this.source = OqlDataSetSource.create(this.model);
        }
    }
    DataSet.structureTypeName = "DataSets$DataSet";
    DataSet.versionInfo = new exports.StructureVersionInfo({
        properties: {
            source: {
                required: {
                    currentValue: true
                }
            },
            parameters: {
                public: {
                    currentValue: true
                }
            },
            dataSetAccess: {
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.ModelUnit);
    datasets.DataSet = DataSet;
    class DataSetAccess extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__moduleRoleAccessList = new internal.PartListProperty(DataSetAccess, this, "moduleRoleAccessList", []);
            if (arguments.length < 4) {
                throw new Error("new DataSetAccess() cannot be invoked directly, please use 'model.datasets.createDataSetAccess()'");
            }
        }
        get containerAsDataSet() {
            return super.getContainerAs(DataSet);
        }
        get moduleRoleAccessList() {
            return this.__moduleRoleAccessList.get();
        }
        /**
         * Creates and returns a new DataSetAccess instance in the SDK and on the server.
         * The new DataSetAccess will be automatically stored in the 'dataSetAccess' property
         * of the parent DataSet element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, DataSetAccess, "dataSetAccess", false);
        }
        /**
         * Creates and returns a new DataSetAccess instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, DataSetAccess);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    DataSetAccess.structureTypeName = "DataSets$DataSetAccess";
    DataSetAccess.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    datasets.DataSetAccess = DataSetAccess;
    class DataSetColumn extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__name = new internal.PrimitiveProperty(DataSetColumn, this, "name", "Column", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__type = new internal.PrimitiveProperty(DataSetColumn, this, "type", "String", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__columnType = new internal.PartProperty(DataSetColumn, this, "columnType", null, true);
            if (arguments.length < 4) {
                throw new Error("new DataSetColumn() cannot be invoked directly, please use 'model.datasets.createDataSetColumn()'");
            }
        }
        get containerAsJavaDataSetSource() {
            return super.getContainerAs(JavaDataSetSource);
        }
        get name() {
            return this.__name.get();
        }
        set name(newValue) {
            this.__name.set(newValue);
        }
        /**
         * The value of this property is conceptually of type dataTypes.LegacyDataType.
         *
         * In version 7.9.0: deleted
         */
        get type() {
            return this.__type.get();
        }
        set type(newValue) {
            this.__type.set(newValue);
        }
        /**
         * In version 7.9.0: introduced
         */
        get columnType() {
            return this.__columnType.get();
        }
        set columnType(newValue) {
            this.__columnType.set(newValue);
        }
        /**
         * Creates and returns a new DataSetColumn instance in the SDK and on the server.
         * The new DataSetColumn will be automatically stored in the 'columns' property
         * of the parent JavaDataSetSource element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, DataSetColumn, "columns", true);
        }
        /**
         * Creates and returns a new DataSetColumn instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, DataSetColumn);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__columnType.isAvailable) {
                this.columnType = datatypes_1.datatypes.StringType.create(this.model);
            }
            this.name = "Column";
            if (this.__type.isAvailable) {
                this.type = "String";
            }
        }
    }
    DataSetColumn.structureTypeName = "DataSets$DataSetColumn";
    DataSetColumn.versionInfo = new exports.StructureVersionInfo({
        properties: {
            type: {
                deleted: "7.9.0",
                deletionMessage: "Use property 'columnType' instead"
            },
            columnType: {
                introduced: "7.9.0",
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    datasets.DataSetColumn = DataSetColumn;
    class DataSetConstraintAccess extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__constraintText = new internal.PrimitiveProperty(DataSetConstraintAccess, this, "constraintText", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__enabled = new internal.PrimitiveProperty(DataSetConstraintAccess, this, "enabled", false, internal.PrimitiveTypeEnum.Boolean);
            if (arguments.length < 4) {
                throw new Error("new DataSetConstraintAccess() cannot be invoked directly, please use 'model.datasets.createDataSetConstraintAccess()'");
            }
        }
        get containerAsDataSetParameterAccess() {
            return super.getContainerAs(DataSetParameterAccess);
        }
        get constraintText() {
            return this.__constraintText.get();
        }
        set constraintText(newValue) {
            this.__constraintText.set(newValue);
        }
        get enabled() {
            return this.__enabled.get();
        }
        set enabled(newValue) {
            this.__enabled.set(newValue);
        }
        /**
         * Creates and returns a new DataSetConstraintAccess instance in the SDK and on the server.
         * The new DataSetConstraintAccess will be automatically stored in the 'constraintAccessList' property
         * of the parent DataSetParameterAccess element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, DataSetConstraintAccess, "constraintAccessList", true);
        }
        /**
         * Creates and returns a new DataSetConstraintAccess instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, DataSetConstraintAccess);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    DataSetConstraintAccess.structureTypeName = "DataSets$DataSetConstraintAccess";
    DataSetConstraintAccess.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    datasets.DataSetConstraintAccess = DataSetConstraintAccess;
    class DataSetParameterConstraint extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new DataSetParameterConstraint() cannot be invoked directly, please use 'model.datasets.createDataSetParameterConstraint()'");
            }
        }
        get containerAsDataSetParameter() {
            return super.getContainerAs(DataSetParameter);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    DataSetParameterConstraint.structureTypeName = "DataSets$DataSetParameterConstraint";
    DataSetParameterConstraint.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    datasets.DataSetParameterConstraint = DataSetParameterConstraint;
    class DataSetDateTimeConstraint extends DataSetParameterConstraint {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__modifier = new internal.EnumProperty(DataSetDateTimeConstraint, this, "modifier", DateTimeIntervalModifier.Last, DateTimeIntervalModifier);
            /** @internal */
            this.__length = new internal.EnumProperty(DataSetDateTimeConstraint, this, "length", DateTimeIntervalLength.Month, DateTimeIntervalLength);
            if (arguments.length < 4) {
                throw new Error("new DataSetDateTimeConstraint() cannot be invoked directly, please use 'model.datasets.createDataSetDateTimeConstraint()'");
            }
        }
        get containerAsDataSetParameter() {
            return super.getContainerAs(DataSetParameter);
        }
        get modifier() {
            return this.__modifier.get();
        }
        set modifier(newValue) {
            this.__modifier.set(newValue);
        }
        get length() {
            return this.__length.get();
        }
        set length(newValue) {
            this.__length.set(newValue);
        }
        /**
         * Creates and returns a new DataSetDateTimeConstraint instance in the SDK and on the server.
         * The new DataSetDateTimeConstraint will be automatically stored in the 'constraints' property
         * of the parent DataSetParameter element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, DataSetDateTimeConstraint, "constraints", true);
        }
        /**
         * Creates and returns a new DataSetDateTimeConstraint instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, DataSetDateTimeConstraint);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.length = DateTimeIntervalLength.Month;
            this.modifier = DateTimeIntervalModifier.Last;
        }
    }
    DataSetDateTimeConstraint.structureTypeName = "DataSets$DataSetDateTimeConstraint";
    DataSetDateTimeConstraint.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    datasets.DataSetDateTimeConstraint = DataSetDateTimeConstraint;
    class DataSetModuleRoleAccess extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__parameterAccessList = new internal.PartListProperty(DataSetModuleRoleAccess, this, "parameterAccessList", []);
            /** @internal */
            this.__moduleRole = new internal.ByNameReferenceProperty(DataSetModuleRoleAccess, this, "moduleRole", null, "Security$ModuleRole");
            if (arguments.length < 4) {
                throw new Error("new DataSetModuleRoleAccess() cannot be invoked directly, please use 'model.datasets.createDataSetModuleRoleAccess()'");
            }
        }
        get containerAsDataSetAccess() {
            return super.getContainerAs(DataSetAccess);
        }
        get parameterAccessList() {
            return this.__parameterAccessList.get();
        }
        get moduleRole() {
            return this.__moduleRole.get();
        }
        set moduleRole(newValue) {
            this.__moduleRole.set(newValue);
        }
        get moduleRoleQualifiedName() {
            return this.__moduleRole.qualifiedName();
        }
        /**
         * Creates and returns a new DataSetModuleRoleAccess instance in the SDK and on the server.
         * The new DataSetModuleRoleAccess will be automatically stored in the 'moduleRoleAccessList' property
         * of the parent DataSetAccess element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, DataSetModuleRoleAccess, "moduleRoleAccessList", true);
        }
        /**
         * Creates and returns a new DataSetModuleRoleAccess instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, DataSetModuleRoleAccess);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    DataSetModuleRoleAccess.structureTypeName = "DataSets$DataSetModuleRoleAccess";
    DataSetModuleRoleAccess.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    datasets.DataSetModuleRoleAccess = DataSetModuleRoleAccess;
    class DataSetNumericConstraint extends DataSetParameterConstraint {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__begin = new internal.PrimitiveProperty(DataSetNumericConstraint, this, "begin", "0", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__applyBegin = new internal.PrimitiveProperty(DataSetNumericConstraint, this, "applyBegin", true, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__end = new internal.PrimitiveProperty(DataSetNumericConstraint, this, "end", "0", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__applyEnd = new internal.PrimitiveProperty(DataSetNumericConstraint, this, "applyEnd", true, internal.PrimitiveTypeEnum.Boolean);
            if (arguments.length < 4) {
                throw new Error("new DataSetNumericConstraint() cannot be invoked directly, please use 'model.datasets.createDataSetNumericConstraint()'");
            }
        }
        get containerAsDataSetParameter() {
            return super.getContainerAs(DataSetParameter);
        }
        get begin() {
            return this.__begin.get();
        }
        set begin(newValue) {
            this.__begin.set(newValue);
        }
        get applyBegin() {
            return this.__applyBegin.get();
        }
        set applyBegin(newValue) {
            this.__applyBegin.set(newValue);
        }
        get end() {
            return this.__end.get();
        }
        set end(newValue) {
            this.__end.set(newValue);
        }
        get applyEnd() {
            return this.__applyEnd.get();
        }
        set applyEnd(newValue) {
            this.__applyEnd.set(newValue);
        }
        /**
         * Creates and returns a new DataSetNumericConstraint instance in the SDK and on the server.
         * The new DataSetNumericConstraint will be automatically stored in the 'constraints' property
         * of the parent DataSetParameter element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, DataSetNumericConstraint, "constraints", true);
        }
        /**
         * Creates and returns a new DataSetNumericConstraint instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, DataSetNumericConstraint);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.applyBegin = true;
            this.applyEnd = true;
            this.begin = "0";
            this.end = "0";
        }
    }
    DataSetNumericConstraint.structureTypeName = "DataSets$DataSetNumericConstraint";
    DataSetNumericConstraint.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    datasets.DataSetNumericConstraint = DataSetNumericConstraint;
    class DataSetObjectConstraint extends DataSetParameterConstraint {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__name = new internal.PrimitiveProperty(DataSetObjectConstraint, this, "name", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__constraint = new internal.PrimitiveProperty(DataSetObjectConstraint, this, "constraint", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new DataSetObjectConstraint() cannot be invoked directly, please use 'model.datasets.createDataSetObjectConstraint()'");
            }
        }
        get containerAsDataSetParameter() {
            return super.getContainerAs(DataSetParameter);
        }
        get name() {
            return this.__name.get();
        }
        set name(newValue) {
            this.__name.set(newValue);
        }
        /**
         * The value of this property is conceptually of type xPathConstraints.XPathConstraint.
         */
        get constraint() {
            return this.__constraint.get();
        }
        set constraint(newValue) {
            this.__constraint.set(newValue);
        }
        /**
         * Creates and returns a new DataSetObjectConstraint instance in the SDK and on the server.
         * The new DataSetObjectConstraint will be automatically stored in the 'constraints' property
         * of the parent DataSetParameter element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, DataSetObjectConstraint, "constraints", true);
        }
        /**
         * Creates and returns a new DataSetObjectConstraint instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, DataSetObjectConstraint);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    DataSetObjectConstraint.structureTypeName = "DataSets$DataSetObjectConstraint";
    DataSetObjectConstraint.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    datasets.DataSetObjectConstraint = DataSetObjectConstraint;
    class DataSetParameter extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__name = new internal.PrimitiveProperty(DataSetParameter, this, "name", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__type = new internal.PrimitiveProperty(DataSetParameter, this, "type", "Unknown", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__parameterType = new internal.PartProperty(DataSetParameter, this, "parameterType", null, true);
            /** @internal */
            this.__parameterTypeIsRange = new internal.PrimitiveProperty(DataSetParameter, this, "parameterTypeIsRange", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__constraints = new internal.PartListProperty(DataSetParameter, this, "constraints", []);
            if (arguments.length < 4) {
                throw new Error("new DataSetParameter() cannot be invoked directly, please use 'model.datasets.createDataSetParameter()'");
            }
        }
        get containerAsDataSet() {
            return super.getContainerAs(DataSet);
        }
        get name() {
            return this.__name.get();
        }
        set name(newValue) {
            this.__name.set(newValue);
        }
        /**
         * The value of this property is conceptually of type dataTypes.LegacyDataType.
         *
         * In version 7.9.0: deleted
         */
        get type() {
            return this.__type.get();
        }
        set type(newValue) {
            this.__type.set(newValue);
        }
        /**
         * In version 7.9.0: introduced
         */
        get parameterType() {
            return this.__parameterType.get();
        }
        set parameterType(newValue) {
            this.__parameterType.set(newValue);
        }
        /**
         * In version 7.9.0: introduced
         */
        get parameterTypeIsRange() {
            return this.__parameterTypeIsRange.get();
        }
        set parameterTypeIsRange(newValue) {
            this.__parameterTypeIsRange.set(newValue);
        }
        get constraints() {
            return this.__constraints.get();
        }
        /**
         * Creates and returns a new DataSetParameter instance in the SDK and on the server.
         * The new DataSetParameter will be automatically stored in the 'parameters' property
         * of the parent DataSet element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, DataSetParameter, "parameters", true);
        }
        /**
         * Creates and returns a new DataSetParameter instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, DataSetParameter);
        }
        /** @internal */
        _isByNameReferrable() {
            return this.__name.isAvailable;
        }
        get qualifiedName() {
            return this._getQualifiedName();
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__parameterType.isAvailable) {
                this.parameterType = datatypes_1.datatypes.UnknownType.create(this.model);
            }
            if (this.__type.isAvailable) {
                this.type = "Unknown";
            }
        }
    }
    DataSetParameter.structureTypeName = "DataSets$DataSetParameter";
    DataSetParameter.versionInfo = new exports.StructureVersionInfo({
        properties: {
            name: {
                public: {
                    currentValue: true
                }
            },
            type: {
                deleted: "7.9.0",
                deletionMessage: "Use property 'columnType' instead"
            },
            parameterType: {
                introduced: "7.9.0",
                required: {
                    currentValue: true
                }
            },
            parameterTypeIsRange: {
                introduced: "7.9.0"
            }
        },
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    datasets.DataSetParameter = DataSetParameter;
    class DataSetParameterAccess extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__parameterName = new internal.PrimitiveProperty(DataSetParameterAccess, this, "parameterName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__constraintAccessList = new internal.PartListProperty(DataSetParameterAccess, this, "constraintAccessList", []);
            if (arguments.length < 4) {
                throw new Error("new DataSetParameterAccess() cannot be invoked directly, please use 'model.datasets.createDataSetParameterAccess()'");
            }
        }
        get containerAsDataSetModuleRoleAccess() {
            return super.getContainerAs(DataSetModuleRoleAccess);
        }
        get parameterName() {
            return this.__parameterName.get();
        }
        set parameterName(newValue) {
            this.__parameterName.set(newValue);
        }
        get constraintAccessList() {
            return this.__constraintAccessList.get();
        }
        /**
         * Creates and returns a new DataSetParameterAccess instance in the SDK and on the server.
         * The new DataSetParameterAccess will be automatically stored in the 'parameterAccessList' property
         * of the parent DataSetModuleRoleAccess element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, DataSetParameterAccess, "parameterAccessList", true);
        }
        /**
         * Creates and returns a new DataSetParameterAccess instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, DataSetParameterAccess);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    DataSetParameterAccess.structureTypeName = "DataSets$DataSetParameterAccess";
    DataSetParameterAccess.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    datasets.DataSetParameterAccess = DataSetParameterAccess;
    class DataSetSource extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new DataSetSource() cannot be invoked directly, please use 'model.datasets.createDataSetSource()'");
            }
        }
        get containerAsDataSet() {
            return super.getContainerAs(DataSet);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    DataSetSource.structureTypeName = "DataSets$DataSetSource";
    DataSetSource.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    datasets.DataSetSource = DataSetSource;
    class JavaDataSetSource extends DataSetSource {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__columns = new internal.PartListProperty(JavaDataSetSource, this, "columns", []);
            /** @internal */
            this.__useLegacyCodeGeneration = new internal.PrimitiveProperty(JavaDataSetSource, this, "useLegacyCodeGeneration", false, internal.PrimitiveTypeEnum.Boolean);
            if (arguments.length < 4) {
                throw new Error("new JavaDataSetSource() cannot be invoked directly, please use 'model.datasets.createJavaDataSetSource()'");
            }
        }
        get containerAsDataSet() {
            return super.getContainerAs(DataSet);
        }
        get columns() {
            return this.__columns.get();
        }
        /**
         * In version 9.0.3: deleted
         * In version 8.0.0: introduced
         */
        get useLegacyCodeGeneration() {
            return this.__useLegacyCodeGeneration.get();
        }
        set useLegacyCodeGeneration(newValue) {
            this.__useLegacyCodeGeneration.set(newValue);
        }
        /**
         * Creates and returns a new JavaDataSetSource instance in the SDK and on the server.
         * The new JavaDataSetSource will be automatically stored in the 'source' property
         * of the parent DataSet element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, JavaDataSetSource, "source", false);
        }
        /**
         * Creates and returns a new JavaDataSetSource instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, JavaDataSetSource);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__useLegacyCodeGeneration.isAvailable) {
                this.useLegacyCodeGeneration = false;
            }
        }
    }
    JavaDataSetSource.structureTypeName = "DataSets$JavaDataSetSource";
    JavaDataSetSource.versionInfo = new exports.StructureVersionInfo({
        properties: {
            useLegacyCodeGeneration: {
                introduced: "8.0.0",
                deleted: "9.0.3",
                deletionMessage: "The option to make Java action parameter names unique in generated code is no longer supported"
            }
        }
    }, internal.StructureType.Element);
    datasets.JavaDataSetSource = JavaDataSetSource;
    class OqlDataSetSource extends DataSetSource {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__query = new internal.PrimitiveProperty(OqlDataSetSource, this, "query", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__ignoreErrorsInQuery = new internal.PrimitiveProperty(OqlDataSetSource, this, "ignoreErrorsInQuery", false, internal.PrimitiveTypeEnum.Boolean);
            if (arguments.length < 4) {
                throw new Error("new OqlDataSetSource() cannot be invoked directly, please use 'model.datasets.createOqlDataSetSource()'");
            }
        }
        get containerAsDataSet() {
            return super.getContainerAs(DataSet);
        }
        /**
         * The value of this property is conceptually of type oql.OqlQuery.
         */
        get query() {
            return this.__query.get();
        }
        set query(newValue) {
            this.__query.set(newValue);
        }
        get ignoreErrorsInQuery() {
            return this.__ignoreErrorsInQuery.get();
        }
        set ignoreErrorsInQuery(newValue) {
            this.__ignoreErrorsInQuery.set(newValue);
        }
        /**
         * Creates and returns a new OqlDataSetSource instance in the SDK and on the server.
         * The new OqlDataSetSource will be automatically stored in the 'source' property
         * of the parent DataSet element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, OqlDataSetSource, "source", false);
        }
        /**
         * Creates and returns a new OqlDataSetSource instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, OqlDataSetSource);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    OqlDataSetSource.structureTypeName = "DataSets$OqlDataSetSource";
    OqlDataSetSource.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    datasets.OqlDataSetSource = OqlDataSetSource;
})(datasets = exports.datasets || (exports.datasets = {}));
const datatypes_1 = require("./datatypes");
//# sourceMappingURL=datasets.js.map