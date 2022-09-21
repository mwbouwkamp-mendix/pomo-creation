"use strict";
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.microflows = exports.StructureVersionInfo = void 0;
const internal = require("../sdk/internal");
exports.StructureVersionInfo = internal.StructureVersionInfo;
const projects_1 = require("./projects");
var microflows;
(function (microflows) {
    class ActionActivityColor extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "microflows.ActionActivityColor";
        }
    }
    ActionActivityColor.Default = new ActionActivityColor("Default", {});
    ActionActivityColor.Blue = new ActionActivityColor("Blue", {});
    ActionActivityColor.Gray = new ActionActivityColor("Gray", {});
    ActionActivityColor.Green = new ActionActivityColor("Green", {});
    ActionActivityColor.LightBlue = new ActionActivityColor("LightBlue", {
        introduced: "8.6.0"
    });
    ActionActivityColor.Orange = new ActionActivityColor("Orange", {});
    ActionActivityColor.Purple = new ActionActivityColor("Purple", {});
    ActionActivityColor.Red = new ActionActivityColor("Red", {});
    ActionActivityColor.Yellow = new ActionActivityColor("Yellow", {});
    microflows.ActionActivityColor = ActionActivityColor;
    class AggregateFunctionEnum extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "microflows.AggregateFunctionEnum";
        }
    }
    AggregateFunctionEnum.Sum = new AggregateFunctionEnum("Sum", {});
    AggregateFunctionEnum.Average = new AggregateFunctionEnum("Average", {});
    AggregateFunctionEnum.Count = new AggregateFunctionEnum("Count", {});
    AggregateFunctionEnum.Minimum = new AggregateFunctionEnum("Minimum", {});
    AggregateFunctionEnum.Maximum = new AggregateFunctionEnum("Maximum", {});
    microflows.AggregateFunctionEnum = AggregateFunctionEnum;
    class ChangeActionItemType extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "microflows.ChangeActionItemType";
        }
    }
    ChangeActionItemType.Set = new ChangeActionItemType("Set", {});
    ChangeActionItemType.Add = new ChangeActionItemType("Add", {});
    ChangeActionItemType.Remove = new ChangeActionItemType("Remove", {});
    microflows.ChangeActionItemType = ChangeActionItemType;
    class ChangeListActionType extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "microflows.ChangeListActionType";
        }
    }
    ChangeListActionType.Set = new ChangeListActionType("Set", {});
    ChangeListActionType.Add = new ChangeListActionType("Add", {});
    ChangeListActionType.Remove = new ChangeListActionType("Remove", {});
    ChangeListActionType.Clear = new ChangeListActionType("Clear", {});
    microflows.ChangeListActionType = ChangeListActionType;
    class CommitEnum extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "microflows.CommitEnum";
        }
    }
    CommitEnum.Yes = new CommitEnum("Yes", {});
    CommitEnum.YesWithoutEvents = new CommitEnum("YesWithoutEvents", {});
    CommitEnum.No = new CommitEnum("No", {});
    microflows.CommitEnum = CommitEnum;
    class ContentType extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "microflows.ContentType";
        }
    }
    ContentType.Xml = new ContentType("Xml", {});
    ContentType.Json = new ContentType("Json", {});
    microflows.ContentType = ContentType;
    class ErrorHandlingType extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "microflows.ErrorHandlingType";
        }
    }
    ErrorHandlingType.Rollback = new ErrorHandlingType("Rollback", {});
    ErrorHandlingType.Custom = new ErrorHandlingType("Custom", {});
    ErrorHandlingType.CustomWithoutRollBack = new ErrorHandlingType("CustomWithoutRollBack", {});
    ErrorHandlingType.Continue = new ErrorHandlingType("Continue", {});
    ErrorHandlingType.Abort = new ErrorHandlingType("Abort", {
        introduced: "8.0.0"
    });
    microflows.ErrorHandlingType = ErrorHandlingType;
    class ErrorResultHandlingType extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "microflows.ErrorResultHandlingType";
        }
    }
    ErrorResultHandlingType.HttpResponse = new ErrorResultHandlingType("HttpResponse", {});
    ErrorResultHandlingType.None = new ErrorResultHandlingType("None", {});
    microflows.ErrorResultHandlingType = ErrorResultHandlingType;
    class HttpMethod extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "microflows.HttpMethod";
        }
    }
    HttpMethod.Post = new HttpMethod("Post", {});
    HttpMethod.Get = new HttpMethod("Get", {});
    HttpMethod.Put = new HttpMethod("Put", {});
    HttpMethod.Patch = new HttpMethod("Patch", {});
    HttpMethod.Delete = new HttpMethod("Delete", {});
    microflows.HttpMethod = HttpMethod;
    class LanguageSettingType extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "microflows.LanguageSettingType";
        }
    }
    LanguageSettingType.CurrentUser = new LanguageSettingType("CurrentUser", {});
    LanguageSettingType.ProjectDefault = new LanguageSettingType("ProjectDefault", {});
    LanguageSettingType.Variable = new LanguageSettingType("Variable", {});
    microflows.LanguageSettingType = LanguageSettingType;
    class LogLevel extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "microflows.LogLevel";
        }
    }
    LogLevel.Trace = new LogLevel("Trace", {});
    LogLevel.Debug = new LogLevel("Debug", {});
    LogLevel.Info = new LogLevel("Info", {});
    LogLevel.Warning = new LogLevel("Warning", {});
    LogLevel.Error = new LogLevel("Error", {});
    LogLevel.Critical = new LogLevel("Critical", {});
    microflows.LogLevel = LogLevel;
    class NullValueOption extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "microflows.NullValueOption";
        }
    }
    NullValueOption.SendAsNil = new NullValueOption("SendAsNil", {});
    NullValueOption.LeaveOutElement = new NullValueOption("LeaveOutElement", {});
    microflows.NullValueOption = NullValueOption;
    class RequestHandlingType extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "microflows.RequestHandlingType";
        }
    }
    RequestHandlingType.Mapping = new RequestHandlingType("Mapping", {});
    RequestHandlingType.Simple = new RequestHandlingType("Simple", {});
    RequestHandlingType.Advanced = new RequestHandlingType("Advanced", {});
    RequestHandlingType.Binary = new RequestHandlingType("Binary", {});
    RequestHandlingType.Custom = new RequestHandlingType("Custom", {});
    RequestHandlingType.FormData = new RequestHandlingType("FormData", {
        introduced: "8.0.0"
    });
    microflows.RequestHandlingType = RequestHandlingType;
    class RequestProxyType extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "microflows.RequestProxyType";
        }
    }
    RequestProxyType.DefaultProxy = new RequestProxyType("DefaultProxy", {});
    RequestProxyType.Override = new RequestProxyType("Override", {});
    RequestProxyType.NoProxy = new RequestProxyType("NoProxy", {});
    microflows.RequestProxyType = RequestProxyType;
    class ResultHandlingType extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "microflows.ResultHandlingType";
        }
    }
    ResultHandlingType.Mapping = new ResultHandlingType("Mapping", {});
    ResultHandlingType.String = new ResultHandlingType("String", {});
    ResultHandlingType.HttpResponse = new ResultHandlingType("HttpResponse", {
        introduced: "7.0.2"
    });
    ResultHandlingType.FileDocument = new ResultHandlingType("FileDocument", {});
    ResultHandlingType.None = new ResultHandlingType("None", {});
    microflows.ResultHandlingType = ResultHandlingType;
    class ShowMessageType extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "microflows.ShowMessageType";
        }
    }
    ShowMessageType.Information = new ShowMessageType("Information", {});
    ShowMessageType.Warning = new ShowMessageType("Warning", {});
    ShowMessageType.Error = new ShowMessageType("Error", {});
    microflows.ShowMessageType = ShowMessageType;
    class SortOrderEnum extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "microflows.SortOrderEnum";
        }
    }
    SortOrderEnum.Ascending = new SortOrderEnum("Ascending", {});
    SortOrderEnum.Descending = new SortOrderEnum("Descending", {});
    microflows.SortOrderEnum = SortOrderEnum;
    class SynchronizationType extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "microflows.SynchronizationType";
        }
    }
    SynchronizationType.All = new SynchronizationType("All", {});
    SynchronizationType.Unsynchronized = new SynchronizationType("Unsynchronized", {
        introduced: "9.4.0"
    });
    SynchronizationType.Specific = new SynchronizationType("Specific", {});
    microflows.SynchronizationType = SynchronizationType;
    class TargetDocumentType extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "microflows.TargetDocumentType";
        }
    }
    TargetDocumentType.HTML = new TargetDocumentType("HTML", {});
    TargetDocumentType.PDF = new TargetDocumentType("PDF", {});
    TargetDocumentType.DOCX = new TargetDocumentType("DOCX", {});
    TargetDocumentType.DOC = new TargetDocumentType("DOC", {});
    TargetDocumentType.RTF = new TargetDocumentType("RTF", {});
    TargetDocumentType.ODT = new TargetDocumentType("ODT", {});
    microflows.TargetDocumentType = TargetDocumentType;
    class TypedTemplateArgumentType extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "microflows.TypedTemplateArgumentType";
        }
    }
    TypedTemplateArgumentType.Boolean = new TypedTemplateArgumentType("Boolean", {});
    TypedTemplateArgumentType.DateTime = new TypedTemplateArgumentType("DateTime", {});
    TypedTemplateArgumentType.Decimal = new TypedTemplateArgumentType("Decimal", {});
    TypedTemplateArgumentType.Integer = new TypedTemplateArgumentType("Integer", {});
    TypedTemplateArgumentType.String = new TypedTemplateArgumentType("String", {});
    microflows.TypedTemplateArgumentType = TypedTemplateArgumentType;
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `Microflows`.
     */
    /**
     * In version 9.12.0: removed experimental
     * In version 9.2.0: introduced
     */
    class WorkflowOperation extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new WorkflowOperation() cannot be invoked directly, please use 'model.microflows.createWorkflowOperation()'");
            }
        }
        get containerAsWorkflowOperationAction() {
            return super.getContainerAs(WorkflowOperationAction);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    WorkflowOperation.structureTypeName = "Microflows$WorkflowOperation";
    WorkflowOperation.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.2.0",
        experimental: {
            currentValue: false,
            changedIn: ["9.12.0"]
        }
    }, internal.StructureType.Element);
    microflows.WorkflowOperation = WorkflowOperation;
    /**
     * In version 9.12.0: removed experimental
     * In version 9.2.0: introduced
     */
    class AbortOperation extends WorkflowOperation {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__workflowVariable = new internal.PrimitiveProperty(AbortOperation, this, "workflowVariable", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__reason = new internal.PartProperty(AbortOperation, this, "reason", null, true);
            if (arguments.length < 4) {
                throw new Error("new AbortOperation() cannot be invoked directly, please use 'model.microflows.createAbortOperation()'");
            }
        }
        get containerAsWorkflowOperationAction() {
            return super.getContainerAs(WorkflowOperationAction);
        }
        get workflowVariable() {
            return this.__workflowVariable.get();
        }
        set workflowVariable(newValue) {
            this.__workflowVariable.set(newValue);
        }
        get reason() {
            return this.__reason.get();
        }
        set reason(newValue) {
            this.__reason.set(newValue);
        }
        /**
         * Creates and returns a new AbortOperation instance in the SDK and on the server.
         * The new AbortOperation will be automatically stored in the 'operation' property
         * of the parent WorkflowOperationAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.2.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, AbortOperation.structureTypeName, { start: "9.2.0" });
            return internal.instancehelpers.createElement(container, AbortOperation, "operation", false);
        }
        /**
         * Creates and returns a new AbortOperation instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, AbortOperation);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.reason = StringTemplate.create(this.model);
        }
    }
    AbortOperation.structureTypeName = "Microflows$AbortOperation";
    AbortOperation.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.2.0",
        properties: {
            reason: {
                required: {
                    currentValue: true
                }
            }
        },
        experimental: {
            currentValue: false,
            changedIn: ["9.12.0"]
        }
    }, internal.StructureType.Element);
    microflows.AbortOperation = AbortOperation;
    class MicroflowObject extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__relativeMiddlePoint = new internal.PrimitiveProperty(MicroflowObject, this, "relativeMiddlePoint", { x: 0, y: 0 }, internal.PrimitiveTypeEnum.Point);
            /** @internal */
            this.__size = new internal.PrimitiveProperty(MicroflowObject, this, "size", { width: 0, height: 0 }, internal.PrimitiveTypeEnum.Size);
            if (arguments.length < 4) {
                throw new Error("new MicroflowObject() cannot be invoked directly, please use 'model.microflows.createMicroflowObject()'");
            }
        }
        get containerAsMicroflowObjectCollection() {
            return super.getContainerAs(MicroflowObjectCollection);
        }
        get relativeMiddlePoint() {
            return this.__relativeMiddlePoint.get();
        }
        set relativeMiddlePoint(newValue) {
            this.__relativeMiddlePoint.set(newValue);
        }
        get size() {
            return this.__size.get();
        }
        set size(newValue) {
            this.__size.set(newValue);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    MicroflowObject.structureTypeName = "Microflows$MicroflowObject";
    MicroflowObject.versionInfo = new exports.StructureVersionInfo({
        properties: {
            relativeMiddlePoint: {},
            size: {}
        }
    }, internal.StructureType.Element);
    microflows.MicroflowObject = MicroflowObject;
    class Activity extends MicroflowObject {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new Activity() cannot be invoked directly, please use 'model.microflows.createActivity()'");
            }
        }
        get containerAsMicroflowObjectCollection() {
            return super.getContainerAs(MicroflowObjectCollection);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    Activity.structureTypeName = "Microflows$Activity";
    Activity.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    microflows.Activity = Activity;
    class ActionActivity extends Activity {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__action = new internal.PartProperty(ActionActivity, this, "action", null, false);
            /** @internal */
            this.__disabled = new internal.PrimitiveProperty(ActionActivity, this, "disabled", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__caption = new internal.PrimitiveProperty(ActionActivity, this, "caption", "Activity", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__autoGenerateCaption = new internal.PrimitiveProperty(ActionActivity, this, "autoGenerateCaption", true, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__backgroundColor = new internal.EnumProperty(ActionActivity, this, "backgroundColor", ActionActivityColor.Default, ActionActivityColor);
            /** @internal */
            this.__documentation = new internal.PrimitiveProperty(ActionActivity, this, "documentation", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new ActionActivity() cannot be invoked directly, please use 'model.microflows.createActionActivity()'");
            }
        }
        get containerAsMicroflowObjectCollection() {
            return super.getContainerAs(MicroflowObjectCollection);
        }
        get action() {
            return this.__action.get();
        }
        set action(newValue) {
            this.__action.set(newValue);
        }
        /**
         * In version 9.12.0: introduced
         */
        get disabled() {
            return this.__disabled.get();
        }
        set disabled(newValue) {
            this.__disabled.set(newValue);
        }
        get caption() {
            return this.__caption.get();
        }
        set caption(newValue) {
            this.__caption.set(newValue);
        }
        get autoGenerateCaption() {
            return this.__autoGenerateCaption.get();
        }
        set autoGenerateCaption(newValue) {
            this.__autoGenerateCaption.set(newValue);
        }
        get backgroundColor() {
            return this.__backgroundColor.get();
        }
        set backgroundColor(newValue) {
            this.__backgroundColor.set(newValue);
        }
        get documentation() {
            return this.__documentation.get();
        }
        set documentation(newValue) {
            this.__documentation.set(newValue);
        }
        /**
         * Creates and returns a new ActionActivity instance in the SDK and on the server.
         * The new ActionActivity will be automatically stored in the 'objects' property
         * of the parent MicroflowObjectCollection element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, ActionActivity, "objects", true);
        }
        /**
         * Creates and returns a new ActionActivity instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ActionActivity);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.autoGenerateCaption = true;
            this.backgroundColor = ActionActivityColor.Default;
            this.caption = "Activity";
            this.size = { width: 120, height: 60 };
        }
    }
    ActionActivity.structureTypeName = "Microflows$ActionActivity";
    ActionActivity.versionInfo = new exports.StructureVersionInfo({
        properties: {
            disabled: {
                introduced: "9.12.0"
            }
        }
    }, internal.StructureType.Element);
    microflows.ActionActivity = ActionActivity;
    class RequestHandling extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new RequestHandling() cannot be invoked directly, please use 'model.microflows.createRequestHandling()'");
            }
        }
        get containerAsExportXmlAction() {
            return super.getContainerAs(ExportXmlAction);
        }
        get containerAsRestCallAction() {
            return super.getContainerAs(RestCallAction);
        }
        get containerAsWebServiceCallAction() {
            return super.getContainerAs(WebServiceCallAction);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    RequestHandling.structureTypeName = "Microflows$RequestHandling";
    RequestHandling.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    microflows.RequestHandling = RequestHandling;
    class AdvancedRequestHandling extends RequestHandling {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__parameterMappings = new internal.PartListProperty(AdvancedRequestHandling, this, "parameterMappings", []);
            /** @internal */
            this.__nullValueOption = new internal.EnumProperty(AdvancedRequestHandling, this, "nullValueOption", NullValueOption.LeaveOutElement, NullValueOption);
            if (arguments.length < 4) {
                throw new Error("new AdvancedRequestHandling() cannot be invoked directly, please use 'model.microflows.createAdvancedRequestHandling()'");
            }
        }
        get containerAsRestCallAction() {
            return super.getContainerAs(RestCallAction);
        }
        get containerAsWebServiceCallAction() {
            return super.getContainerAs(WebServiceCallAction);
        }
        get parameterMappings() {
            return this.__parameterMappings.get();
        }
        /**
         * In version 6.7.0: introduced
         */
        get nullValueOption() {
            return this.__nullValueOption.get();
        }
        set nullValueOption(newValue) {
            this.__nullValueOption.set(newValue);
        }
        /**
         * Creates and returns a new AdvancedRequestHandling instance in the SDK and on the server.
         * The new AdvancedRequestHandling will be automatically stored in the 'requestHandling' property
         * of the parent RestCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 and higher
         */
        static createInRestCallActionUnderRequestHandling(container) {
            internal.createInVersionCheck(container.model, AdvancedRequestHandling.structureTypeName, { start: "6.6.0" });
            return internal.instancehelpers.createElement(container, AdvancedRequestHandling, "requestHandling", false);
        }
        /**
         * Creates and returns a new AdvancedRequestHandling instance in the SDK and on the server.
         * The new AdvancedRequestHandling will be automatically stored in the 'requestBodyHandling' property
         * of the parent WebServiceCallAction element passed as argument.
         */
        static createInWebServiceCallActionUnderRequestBodyHandling(container) {
            return internal.instancehelpers.createElement(container, AdvancedRequestHandling, "requestBodyHandling", false);
        }
        /**
         * Creates and returns a new AdvancedRequestHandling instance in the SDK and on the server.
         * The new AdvancedRequestHandling will be automatically stored in the 'requestHeaderHandling' property
         * of the parent WebServiceCallAction element passed as argument.
         */
        static createInWebServiceCallActionUnderRequestHeaderHandling(container) {
            return internal.instancehelpers.createElement(container, AdvancedRequestHandling, "requestHeaderHandling", false);
        }
        /**
         * Creates and returns a new AdvancedRequestHandling instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, AdvancedRequestHandling);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__nullValueOption.isAvailable) {
                this.nullValueOption = NullValueOption.LeaveOutElement;
            }
        }
    }
    AdvancedRequestHandling.structureTypeName = "Microflows$AdvancedRequestHandling";
    AdvancedRequestHandling.versionInfo = new exports.StructureVersionInfo({
        properties: {
            nullValueOption: {
                introduced: "6.7.0"
            }
        }
    }, internal.StructureType.Element);
    microflows.AdvancedRequestHandling = AdvancedRequestHandling;
    class MicroflowAction extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__errorHandlingType = new internal.EnumProperty(MicroflowAction, this, "errorHandlingType", ErrorHandlingType.Rollback, ErrorHandlingType);
            if (arguments.length < 4) {
                throw new Error("new MicroflowAction() cannot be invoked directly, please use 'model.microflows.createMicroflowAction()'");
            }
        }
        get containerAsActionActivity() {
            return super.getContainerAs(ActionActivity);
        }
        get errorHandlingType() {
            return this.__errorHandlingType.get();
        }
        set errorHandlingType(newValue) {
            this.__errorHandlingType.set(newValue);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.errorHandlingType = ErrorHandlingType.Rollback;
        }
    }
    MicroflowAction.structureTypeName = "Microflows$MicroflowAction";
    MicroflowAction.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    microflows.MicroflowAction = MicroflowAction;
    /**
     * See: {@link https://docs.mendix.com/refguide/aggregate-list relevant section in reference guide}
     */
    class AggregateListAction extends MicroflowAction {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__inputListVariableName = new internal.PrimitiveProperty(AggregateListAction, this, "inputListVariableName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__attribute = new internal.ByNameReferenceProperty(AggregateListAction, this, "attribute", null, "DomainModels$Attribute");
            /** @internal */
            this.__aggregateFunction = new internal.EnumProperty(AggregateListAction, this, "aggregateFunction", AggregateFunctionEnum.Sum, AggregateFunctionEnum);
            /** @internal */
            this.__outputVariableName = new internal.PrimitiveProperty(AggregateListAction, this, "outputVariableName", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new AggregateListAction() cannot be invoked directly, please use 'model.microflows.createAggregateListAction()'");
            }
        }
        get containerAsActionActivity() {
            return super.getContainerAs(ActionActivity);
        }
        get inputListVariableName() {
            return this.__inputListVariableName.get();
        }
        set inputListVariableName(newValue) {
            this.__inputListVariableName.set(newValue);
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
        get aggregateFunction() {
            return this.__aggregateFunction.get();
        }
        set aggregateFunction(newValue) {
            this.__aggregateFunction.set(newValue);
        }
        get outputVariableName() {
            return this.__outputVariableName.get();
        }
        set outputVariableName(newValue) {
            this.__outputVariableName.set(newValue);
        }
        /**
         * Creates and returns a new AggregateListAction instance in the SDK and on the server.
         * The new AggregateListAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, AggregateListAction, "action", false);
        }
        /**
         * Creates and returns a new AggregateListAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, AggregateListAction);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.aggregateFunction = AggregateFunctionEnum.Sum;
        }
    }
    AggregateListAction.structureTypeName = "Microflows$AggregateListAction";
    AggregateListAction.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    microflows.AggregateListAction = AggregateListAction;
    /**
     * See: {@link https://docs.mendix.com/refguide/annotation relevant section in reference guide}
     */
    class Annotation extends MicroflowObject {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__caption = new internal.PrimitiveProperty(Annotation, this, "caption", "Add your annotation here.", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new Annotation() cannot be invoked directly, please use 'model.microflows.createAnnotation()'");
            }
        }
        get containerAsMicroflowObjectCollection() {
            return super.getContainerAs(MicroflowObjectCollection);
        }
        get caption() {
            return this.__caption.get();
        }
        set caption(newValue) {
            this.__caption.set(newValue);
        }
        /**
         * Creates and returns a new Annotation instance in the SDK and on the server.
         * The new Annotation will be automatically stored in the 'objects' property
         * of the parent MicroflowObjectCollection element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, Annotation, "objects", true);
        }
        /**
         * Creates and returns a new Annotation instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, Annotation);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            (() => {
                if (internal.isAtLeast("7.6.0", this.model)) {
                    this.caption = "Add your annotation here.";
                    return;
                }
            })();
            (() => {
                if (internal.isAtLeast("7.6.0", this.model)) {
                    this.size = { width: 230, height: 50 };
                    return;
                }
                this.size = { width: 100, height: 40 };
            })();
        }
    }
    Annotation.structureTypeName = "Microflows$Annotation";
    Annotation.versionInfo = new exports.StructureVersionInfo({
        properties: {
            caption: {}
        }
    }, internal.StructureType.Element);
    microflows.Annotation = Annotation;
    class Flow extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__origin = new internal.ByIdReferenceProperty(Flow, this, "origin", null);
            /** @internal */
            this.__destination = new internal.ByIdReferenceProperty(Flow, this, "destination", null);
            /** @internal */
            this.__originConnectionIndex = new internal.PrimitiveProperty(Flow, this, "originConnectionIndex", 0, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__destinationConnectionIndex = new internal.PrimitiveProperty(Flow, this, "destinationConnectionIndex", 0, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__originBezierVector = new internal.PrimitiveProperty(Flow, this, "originBezierVector", { width: 0, height: 0 }, internal.PrimitiveTypeEnum.Size);
            /** @internal */
            this.__destinationBezierVector = new internal.PrimitiveProperty(Flow, this, "destinationBezierVector", { width: 0, height: 0 }, internal.PrimitiveTypeEnum.Size);
            if (arguments.length < 4) {
                throw new Error("new Flow() cannot be invoked directly, please use 'model.microflows.createFlow()'");
            }
        }
        get containerAsMicroflowBase() {
            return super.getContainerAs(MicroflowBase);
        }
        get origin() {
            return this.__origin.get();
        }
        set origin(newValue) {
            this.__origin.set(newValue);
        }
        get destination() {
            return this.__destination.get();
        }
        set destination(newValue) {
            this.__destination.set(newValue);
        }
        get originConnectionIndex() {
            return this.__originConnectionIndex.get();
        }
        set originConnectionIndex(newValue) {
            this.__originConnectionIndex.set(newValue);
        }
        get destinationConnectionIndex() {
            return this.__destinationConnectionIndex.get();
        }
        set destinationConnectionIndex(newValue) {
            this.__destinationConnectionIndex.set(newValue);
        }
        get originBezierVector() {
            return this.__originBezierVector.get();
        }
        set originBezierVector(newValue) {
            this.__originBezierVector.set(newValue);
        }
        get destinationBezierVector() {
            return this.__destinationBezierVector.get();
        }
        set destinationBezierVector(newValue) {
            this.__destinationBezierVector.set(newValue);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    Flow.structureTypeName = "Microflows$Flow";
    Flow.versionInfo = new exports.StructureVersionInfo({
        properties: {
            origin: {
                required: {
                    currentValue: true
                }
            },
            destination: {
                required: {
                    currentValue: true
                }
            },
            originConnectionIndex: {},
            destinationConnectionIndex: {},
            originBezierVector: {},
            destinationBezierVector: {}
        }
    }, internal.StructureType.Element);
    microflows.Flow = Flow;
    /**
     * See: {@link https://docs.mendix.com/refguide/annotation relevant section in reference guide}
     */
    class AnnotationFlow extends Flow {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new AnnotationFlow() cannot be invoked directly, please use 'model.microflows.createAnnotationFlow()'");
            }
        }
        get containerAsMicroflowBase() {
            return super.getContainerAs(MicroflowBase);
        }
        /**
         * Creates and returns a new AnnotationFlow instance in the SDK and on the server.
         * The new AnnotationFlow will be automatically stored in the 'flows' property
         * of the parent MicroflowBase element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, AnnotationFlow, "flows", true);
        }
        /**
         * Creates and returns a new AnnotationFlow instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, AnnotationFlow);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    AnnotationFlow.structureTypeName = "Microflows$AnnotationFlow";
    AnnotationFlow.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    microflows.AnnotationFlow = AnnotationFlow;
    /**
     * In version 9.0.2: deleted
     */
    class AppServiceCallAction extends MicroflowAction {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__appServiceAction = new internal.ByNameReferenceProperty(AppServiceCallAction, this, "appServiceAction", null, "AppServices$AppServiceAction");
            /** @internal */
            this.__parameterMappings = new internal.PartListProperty(AppServiceCallAction, this, "parameterMappings", []);
            /** @internal */
            this.__useVariable = new internal.PrimitiveProperty(AppServiceCallAction, this, "useVariable", true, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__outputVariableName = new internal.PrimitiveProperty(AppServiceCallAction, this, "outputVariableName", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new AppServiceCallAction() cannot be invoked directly, please use 'model.microflows.createAppServiceCallAction()'");
            }
        }
        get containerAsActionActivity() {
            return super.getContainerAs(ActionActivity);
        }
        get appServiceAction() {
            return this.__appServiceAction.get();
        }
        set appServiceAction(newValue) {
            this.__appServiceAction.set(newValue);
        }
        get appServiceActionQualifiedName() {
            return this.__appServiceAction.qualifiedName();
        }
        get parameterMappings() {
            return this.__parameterMappings.get();
        }
        get useVariable() {
            return this.__useVariable.get();
        }
        set useVariable(newValue) {
            this.__useVariable.set(newValue);
        }
        get outputVariableName() {
            return this.__outputVariableName.get();
        }
        set outputVariableName(newValue) {
            this.__outputVariableName.set(newValue);
        }
        /**
         * Creates and returns a new AppServiceCallAction instance in the SDK and on the server.
         * The new AppServiceCallAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 9.0.1
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, AppServiceCallAction.structureTypeName, { end: "9.0.1" });
            return internal.instancehelpers.createElement(container, AppServiceCallAction, "action", false);
        }
        /**
         * Creates and returns a new AppServiceCallAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, AppServiceCallAction);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.useVariable = true;
        }
    }
    AppServiceCallAction.structureTypeName = "Microflows$AppServiceCallAction";
    AppServiceCallAction.versionInfo = new exports.StructureVersionInfo({
        deleted: "9.0.2",
        deletionMessage: null
    }, internal.StructureType.Element);
    microflows.AppServiceCallAction = AppServiceCallAction;
    /**
     * In version 9.0.2: deleted
     */
    class AppServiceCallParameterMapping extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__parameter = new internal.ByNameReferenceProperty(AppServiceCallParameterMapping, this, "parameter", null, "AppServices$AppServiceActionParameter");
            /** @internal */
            this.__argument = new internal.PrimitiveProperty(AppServiceCallParameterMapping, this, "argument", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__argumentModel = new internal.PartProperty(AppServiceCallParameterMapping, this, "argumentModel", null, true);
            if (arguments.length < 4) {
                throw new Error("new AppServiceCallParameterMapping() cannot be invoked directly, please use 'model.microflows.createAppServiceCallParameterMapping()'");
            }
        }
        get containerAsAppServiceCallAction() {
            return super.getContainerAs(AppServiceCallAction);
        }
        get parameter() {
            return this.__parameter.get();
        }
        set parameter(newValue) {
            this.__parameter.set(newValue);
        }
        get parameterQualifiedName() {
            return this.__parameter.qualifiedName();
        }
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get argument() {
            return this.__argument.get();
        }
        set argument(newValue) {
            this.__argument.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 7.9.0: introduced
         */
        get argumentModel() {
            return this.__argumentModel.get();
        }
        set argumentModel(newValue) {
            this.__argumentModel.set(newValue);
        }
        /**
         * Creates and returns a new AppServiceCallParameterMapping instance in the SDK and on the server.
         * The new AppServiceCallParameterMapping will be automatically stored in the 'parameterMappings' property
         * of the parent AppServiceCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 9.0.1
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, AppServiceCallParameterMapping.structureTypeName, { end: "9.0.1" });
            return internal.instancehelpers.createElement(container, AppServiceCallParameterMapping, "parameterMappings", true);
        }
        /**
         * Creates and returns a new AppServiceCallParameterMapping instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, AppServiceCallParameterMapping);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__argumentModel.isAvailable) {
                this.argumentModel = expressions_1.expressions.NoExpression.create(this.model);
            }
        }
    }
    AppServiceCallParameterMapping.structureTypeName = "Microflows$AppServiceCallParameterMapping";
    AppServiceCallParameterMapping.versionInfo = new exports.StructureVersionInfo({
        deleted: "9.0.2",
        deletionMessage: null,
        properties: {
            argumentModel: {
                introduced: "7.9.0",
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    microflows.AppServiceCallParameterMapping = AppServiceCallParameterMapping;
    /**
     * In version 9.15.0: introduced
     */
    class ApplyJumpToOptionAction extends MicroflowAction {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__workflowJumpToDetailsVariable = new internal.PrimitiveProperty(ApplyJumpToOptionAction, this, "workflowJumpToDetailsVariable", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__outputVariableName = new internal.PrimitiveProperty(ApplyJumpToOptionAction, this, "outputVariableName", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new ApplyJumpToOptionAction() cannot be invoked directly, please use 'model.microflows.createApplyJumpToOptionAction()'");
            }
        }
        get containerAsActionActivity() {
            return super.getContainerAs(ActionActivity);
        }
        get workflowJumpToDetailsVariable() {
            return this.__workflowJumpToDetailsVariable.get();
        }
        set workflowJumpToDetailsVariable(newValue) {
            this.__workflowJumpToDetailsVariable.set(newValue);
        }
        get outputVariableName() {
            return this.__outputVariableName.get();
        }
        set outputVariableName(newValue) {
            this.__outputVariableName.set(newValue);
        }
        /**
         * Creates and returns a new ApplyJumpToOptionAction instance in the SDK and on the server.
         * The new ApplyJumpToOptionAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.15.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, ApplyJumpToOptionAction.structureTypeName, { start: "9.15.0" });
            return internal.instancehelpers.createElement(container, ApplyJumpToOptionAction, "action", false);
        }
        /**
         * Creates and returns a new ApplyJumpToOptionAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ApplyJumpToOptionAction);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ApplyJumpToOptionAction.structureTypeName = "Microflows$ApplyJumpToOptionAction";
    ApplyJumpToOptionAction.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.15.0"
    }, internal.StructureType.Element);
    microflows.ApplyJumpToOptionAction = ApplyJumpToOptionAction;
    class RetrieveSource extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new RetrieveSource() cannot be invoked directly, please use 'model.microflows.createRetrieveSource()'");
            }
        }
        get containerAsRetrieveAction() {
            return super.getContainerAs(RetrieveAction);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    RetrieveSource.structureTypeName = "Microflows$RetrieveSource";
    RetrieveSource.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    microflows.RetrieveSource = RetrieveSource;
    class AssociationRetrieveSource extends RetrieveSource {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__startVariableName = new internal.PrimitiveProperty(AssociationRetrieveSource, this, "startVariableName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__association = new internal.ByNameReferenceProperty(AssociationRetrieveSource, this, "association", null, "DomainModels$AssociationBase");
            if (arguments.length < 4) {
                throw new Error("new AssociationRetrieveSource() cannot be invoked directly, please use 'model.microflows.createAssociationRetrieveSource()'");
            }
        }
        get containerAsRetrieveAction() {
            return super.getContainerAs(RetrieveAction);
        }
        get startVariableName() {
            return this.__startVariableName.get();
        }
        set startVariableName(newValue) {
            this.__startVariableName.set(newValue);
        }
        get association() {
            return this.__association.get();
        }
        set association(newValue) {
            this.__association.set(newValue);
        }
        get associationQualifiedName() {
            return this.__association.qualifiedName();
        }
        /**
         * Creates and returns a new AssociationRetrieveSource instance in the SDK and on the server.
         * The new AssociationRetrieveSource will be automatically stored in the 'retrieveSource' property
         * of the parent RetrieveAction element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, AssociationRetrieveSource, "retrieveSource", false);
        }
        /**
         * Creates and returns a new AssociationRetrieveSource instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, AssociationRetrieveSource);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    AssociationRetrieveSource.structureTypeName = "Microflows$AssociationRetrieveSource";
    AssociationRetrieveSource.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    microflows.AssociationRetrieveSource = AssociationRetrieveSource;
    /**
     * In version 7.21.0: introduced
     */
    class CodeActionParameterValue extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new CodeActionParameterValue() cannot be invoked directly, please use 'model.microflows.createCodeActionParameterValue()'");
            }
        }
        get containerAsJavaActionParameterMapping() {
            return super.getContainerAs(JavaActionParameterMapping);
        }
        get containerAsJavaScriptActionParameterMapping() {
            return super.getContainerAs(JavaScriptActionParameterMapping);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    CodeActionParameterValue.structureTypeName = "Microflows$CodeActionParameterValue";
    CodeActionParameterValue.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.21.0"
    }, internal.StructureType.Element);
    microflows.CodeActionParameterValue = CodeActionParameterValue;
    /**
     * In version 7.21.0: introduced
     */
    class ExpressionBasedCodeActionParameterValue extends CodeActionParameterValue {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new ExpressionBasedCodeActionParameterValue() cannot be invoked directly, please use 'model.microflows.createExpressionBasedCodeActionParameterValue()'");
            }
        }
        get containerAsJavaActionParameterMapping() {
            return super.getContainerAs(JavaActionParameterMapping);
        }
        get containerAsJavaScriptActionParameterMapping() {
            return super.getContainerAs(JavaScriptActionParameterMapping);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ExpressionBasedCodeActionParameterValue.structureTypeName = "Microflows$ExpressionBasedCodeActionParameterValue";
    ExpressionBasedCodeActionParameterValue.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.21.0"
    }, internal.StructureType.Element);
    microflows.ExpressionBasedCodeActionParameterValue = ExpressionBasedCodeActionParameterValue;
    /**
     * In version 7.21.0: introduced
     */
    class BasicCodeActionParameterValue extends ExpressionBasedCodeActionParameterValue {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__argument = new internal.PrimitiveProperty(BasicCodeActionParameterValue, this, "argument", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__argumentModel = new internal.PartProperty(BasicCodeActionParameterValue, this, "argumentModel", null, true);
            if (arguments.length < 4) {
                throw new Error("new BasicCodeActionParameterValue() cannot be invoked directly, please use 'model.microflows.createBasicCodeActionParameterValue()'");
            }
        }
        get containerAsJavaActionParameterMapping() {
            return super.getContainerAs(JavaActionParameterMapping);
        }
        get containerAsJavaScriptActionParameterMapping() {
            return super.getContainerAs(JavaScriptActionParameterMapping);
        }
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get argument() {
            return this.__argument.get();
        }
        set argument(newValue) {
            this.__argument.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.8.0: deleted
         */
        get argumentModel() {
            return this.__argumentModel.get();
        }
        set argumentModel(newValue) {
            this.__argumentModel.set(newValue);
        }
        /**
         * Creates and returns a new BasicCodeActionParameterValue instance in the SDK and on the server.
         * The new BasicCodeActionParameterValue will be automatically stored in the 'parameterValue' property
         * of the parent JavaActionParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInJavaActionParameterMappingUnderParameterValue(container) {
            internal.createInVersionCheck(container.model, BasicCodeActionParameterValue.structureTypeName, { start: "7.21.0" });
            return internal.instancehelpers.createElement(container, BasicCodeActionParameterValue, "parameterValue", false);
        }
        /**
         * Creates and returns a new BasicCodeActionParameterValue instance in the SDK and on the server.
         * The new BasicCodeActionParameterValue will be automatically stored in the 'parameterValue' property
         * of the parent JavaScriptActionParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInJavaScriptActionParameterMappingUnderParameterValue(container) {
            internal.createInVersionCheck(container.model, BasicCodeActionParameterValue.structureTypeName, { start: "7.21.0" });
            return internal.instancehelpers.createElement(container, BasicCodeActionParameterValue, "parameterValue", false);
        }
        /**
         * Creates and returns a new BasicCodeActionParameterValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, BasicCodeActionParameterValue);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__argumentModel.isAvailable) {
                this.argumentModel = expressions_1.expressions.NoExpression.create(this.model);
            }
        }
    }
    BasicCodeActionParameterValue.structureTypeName = "Microflows$BasicCodeActionParameterValue";
    BasicCodeActionParameterValue.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.21.0",
        properties: {
            argumentModel: {
                deleted: "9.8.0",
                deletionMessage: null,
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    microflows.BasicCodeActionParameterValue = BasicCodeActionParameterValue;
    /**
     * In version 7.21.0: deleted
     * In version 6.7.0: introduced
     */
    class JavaActionParameterValue extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new JavaActionParameterValue() cannot be invoked directly, please use 'model.microflows.createJavaActionParameterValue()'");
            }
        }
        get containerAsJavaActionParameterMapping() {
            return super.getContainerAs(JavaActionParameterMapping);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    JavaActionParameterValue.structureTypeName = "Microflows$JavaActionParameterValue";
    JavaActionParameterValue.versionInfo = new exports.StructureVersionInfo({
        introduced: "6.7.0",
        deleted: "7.21.0",
        deletionMessage: "Use 'CodeActionParameterValue' instead"
    }, internal.StructureType.Element);
    microflows.JavaActionParameterValue = JavaActionParameterValue;
    /**
     * In version 7.21.0: deleted
     * In version 6.7.0: introduced
     */
    class BasicJavaActionParameterValue extends JavaActionParameterValue {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__argument = new internal.PrimitiveProperty(BasicJavaActionParameterValue, this, "argument", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__argumentModel = new internal.PartProperty(BasicJavaActionParameterValue, this, "argumentModel", null, true);
            if (arguments.length < 4) {
                throw new Error("new BasicJavaActionParameterValue() cannot be invoked directly, please use 'model.microflows.createBasicJavaActionParameterValue()'");
            }
        }
        get containerAsJavaActionParameterMapping() {
            return super.getContainerAs(JavaActionParameterMapping);
        }
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get argument() {
            return this.__argument.get();
        }
        set argument(newValue) {
            this.__argument.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 7.9.0: introduced
         */
        get argumentModel() {
            return this.__argumentModel.get();
        }
        set argumentModel(newValue) {
            this.__argumentModel.set(newValue);
        }
        /**
         * Creates and returns a new BasicJavaActionParameterValue instance in the SDK and on the server.
         * The new BasicJavaActionParameterValue will be automatically stored in the 'value' property
         * of the parent JavaActionParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.7.0 to 7.20.0
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, BasicJavaActionParameterValue.structureTypeName, {
                start: "6.7.0",
                end: "7.20.0"
            });
            return internal.instancehelpers.createElement(container, BasicJavaActionParameterValue, "value", false);
        }
        /**
         * Creates and returns a new BasicJavaActionParameterValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, BasicJavaActionParameterValue);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__argumentModel.isAvailable) {
                this.argumentModel = expressions_1.expressions.NoExpression.create(this.model);
            }
        }
    }
    BasicJavaActionParameterValue.structureTypeName = "Microflows$BasicJavaActionParameterValue";
    BasicJavaActionParameterValue.versionInfo = new exports.StructureVersionInfo({
        introduced: "6.7.0",
        deleted: "7.21.0",
        deletionMessage: "Use 'BasicCodeActionParameterValue' instead",
        properties: {
            argumentModel: {
                introduced: "7.9.0",
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    microflows.BasicJavaActionParameterValue = BasicJavaActionParameterValue;
    class ListOperation extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__listVariableName = new internal.PrimitiveProperty(ListOperation, this, "listVariableName", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new ListOperation() cannot be invoked directly, please use 'model.microflows.createListOperation()'");
            }
        }
        get containerAsListOperationAction() {
            return super.getContainerAs(ListOperationAction);
        }
        get listVariableName() {
            return this.__listVariableName.get();
        }
        set listVariableName(newValue) {
            this.__listVariableName.set(newValue);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ListOperation.structureTypeName = "Microflows$ListOperation";
    ListOperation.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    microflows.ListOperation = ListOperation;
    class BinaryListOperation extends ListOperation {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__secondListOrObjectVariableName = new internal.PrimitiveProperty(BinaryListOperation, this, "secondListOrObjectVariableName", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new BinaryListOperation() cannot be invoked directly, please use 'model.microflows.createBinaryListOperation()'");
            }
        }
        get containerAsListOperationAction() {
            return super.getContainerAs(ListOperationAction);
        }
        get secondListOrObjectVariableName() {
            return this.__secondListOrObjectVariableName.get();
        }
        set secondListOrObjectVariableName(newValue) {
            this.__secondListOrObjectVariableName.set(newValue);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    BinaryListOperation.structureTypeName = "Microflows$BinaryListOperation";
    BinaryListOperation.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    microflows.BinaryListOperation = BinaryListOperation;
    /**
     * In version 6.9.0: introduced
     */
    class BinaryRequestHandling extends RequestHandling {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__expression = new internal.PrimitiveProperty(BinaryRequestHandling, this, "expression", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__expressionModel = new internal.PartProperty(BinaryRequestHandling, this, "expressionModel", null, true);
            if (arguments.length < 4) {
                throw new Error("new BinaryRequestHandling() cannot be invoked directly, please use 'model.microflows.createBinaryRequestHandling()'");
            }
        }
        get containerAsRestCallAction() {
            return super.getContainerAs(RestCallAction);
        }
        get containerAsWebServiceCallAction() {
            return super.getContainerAs(WebServiceCallAction);
        }
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get expression() {
            return this.__expression.get();
        }
        set expression(newValue) {
            this.__expression.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.8.0: deleted
         * In version 7.9.0: introduced
         */
        get expressionModel() {
            return this.__expressionModel.get();
        }
        set expressionModel(newValue) {
            this.__expressionModel.set(newValue);
        }
        /**
         * Creates and returns a new BinaryRequestHandling instance in the SDK and on the server.
         * The new BinaryRequestHandling will be automatically stored in the 'requestHandling' property
         * of the parent RestCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.9.0 and higher
         */
        static createInRestCallActionUnderRequestHandling(container) {
            internal.createInVersionCheck(container.model, BinaryRequestHandling.structureTypeName, { start: "6.9.0" });
            return internal.instancehelpers.createElement(container, BinaryRequestHandling, "requestHandling", false);
        }
        /**
         * Creates and returns a new BinaryRequestHandling instance in the SDK and on the server.
         * The new BinaryRequestHandling will be automatically stored in the 'requestBodyHandling' property
         * of the parent WebServiceCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.9.0 and higher
         */
        static createInWebServiceCallActionUnderRequestBodyHandling(container) {
            internal.createInVersionCheck(container.model, BinaryRequestHandling.structureTypeName, { start: "6.9.0" });
            return internal.instancehelpers.createElement(container, BinaryRequestHandling, "requestBodyHandling", false);
        }
        /**
         * Creates and returns a new BinaryRequestHandling instance in the SDK and on the server.
         * The new BinaryRequestHandling will be automatically stored in the 'requestHeaderHandling' property
         * of the parent WebServiceCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.9.0 and higher
         */
        static createInWebServiceCallActionUnderRequestHeaderHandling(container) {
            internal.createInVersionCheck(container.model, BinaryRequestHandling.structureTypeName, { start: "6.9.0" });
            return internal.instancehelpers.createElement(container, BinaryRequestHandling, "requestHeaderHandling", false);
        }
        /**
         * Creates and returns a new BinaryRequestHandling instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, BinaryRequestHandling);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__expressionModel.isAvailable) {
                this.expressionModel = expressions_1.expressions.NoExpression.create(this.model);
            }
        }
    }
    BinaryRequestHandling.structureTypeName = "Microflows$BinaryRequestHandling";
    BinaryRequestHandling.versionInfo = new exports.StructureVersionInfo({
        introduced: "6.9.0",
        properties: {
            expressionModel: {
                introduced: "7.9.0",
                deleted: "9.8.0",
                deletionMessage: null,
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    microflows.BinaryRequestHandling = BinaryRequestHandling;
    /**
     * See: {@link https://docs.mendix.com/refguide/break-event relevant section in reference guide}
     */
    class BreakEvent extends MicroflowObject {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new BreakEvent() cannot be invoked directly, please use 'model.microflows.createBreakEvent()'");
            }
        }
        get containerAsMicroflowObjectCollection() {
            return super.getContainerAs(MicroflowObjectCollection);
        }
        /**
         * Creates and returns a new BreakEvent instance in the SDK and on the server.
         * The new BreakEvent will be automatically stored in the 'objects' property
         * of the parent MicroflowObjectCollection element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, BreakEvent, "objects", true);
        }
        /**
         * Creates and returns a new BreakEvent instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, BreakEvent);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.size = { width: 20, height: 20 };
        }
    }
    BreakEvent.structureTypeName = "Microflows$BreakEvent";
    BreakEvent.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    microflows.BreakEvent = BreakEvent;
    class CaseValue extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new CaseValue() cannot be invoked directly, please use 'model.microflows.createCaseValue()'");
            }
        }
        get containerAsSequenceFlow() {
            return super.getContainerAs(SequenceFlow);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    CaseValue.structureTypeName = "Microflows$CaseValue";
    CaseValue.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    microflows.CaseValue = CaseValue;
    /**
     * See: {@link https://docs.mendix.com/refguide/cast-object relevant section in reference guide}
     */
    class CastAction extends MicroflowAction {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__outputVariableName = new internal.PrimitiveProperty(CastAction, this, "outputVariableName", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new CastAction() cannot be invoked directly, please use 'model.microflows.createCastAction()'");
            }
        }
        get containerAsActionActivity() {
            return super.getContainerAs(ActionActivity);
        }
        get outputVariableName() {
            return this.__outputVariableName.get();
        }
        set outputVariableName(newValue) {
            this.__outputVariableName.set(newValue);
        }
        /**
         * Creates and returns a new CastAction instance in the SDK and on the server.
         * The new CastAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, CastAction, "action", false);
        }
        /**
         * Creates and returns a new CastAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, CastAction);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    CastAction.structureTypeName = "Microflows$CastAction";
    CastAction.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    microflows.CastAction = CastAction;
    /**
     * See: {@link https://docs.mendix.com/refguide/change-list relevant section in reference guide}
     */
    class ChangeListAction extends MicroflowAction {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__changeVariableName = new internal.PrimitiveProperty(ChangeListAction, this, "changeVariableName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__value = new internal.PrimitiveProperty(ChangeListAction, this, "value", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__valueModel = new internal.PartProperty(ChangeListAction, this, "valueModel", null, true);
            /** @internal */
            this.__type = new internal.EnumProperty(ChangeListAction, this, "type", ChangeListActionType.Add, ChangeListActionType);
            if (arguments.length < 4) {
                throw new Error("new ChangeListAction() cannot be invoked directly, please use 'model.microflows.createChangeListAction()'");
            }
        }
        get containerAsActionActivity() {
            return super.getContainerAs(ActionActivity);
        }
        get changeVariableName() {
            return this.__changeVariableName.get();
        }
        set changeVariableName(newValue) {
            this.__changeVariableName.set(newValue);
        }
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get value() {
            return this.__value.get();
        }
        set value(newValue) {
            this.__value.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.8.0: deleted
         * In version 7.9.0: introduced
         */
        get valueModel() {
            return this.__valueModel.get();
        }
        set valueModel(newValue) {
            this.__valueModel.set(newValue);
        }
        get type() {
            return this.__type.get();
        }
        set type(newValue) {
            this.__type.set(newValue);
        }
        /**
         * Creates and returns a new ChangeListAction instance in the SDK and on the server.
         * The new ChangeListAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, ChangeListAction, "action", false);
        }
        /**
         * Creates and returns a new ChangeListAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ChangeListAction);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.type = ChangeListActionType.Add;
            if (this.__valueModel.isAvailable) {
                this.valueModel = expressions_1.expressions.NoExpression.create(this.model);
            }
        }
    }
    ChangeListAction.structureTypeName = "Microflows$ChangeListAction";
    ChangeListAction.versionInfo = new exports.StructureVersionInfo({
        properties: {
            valueModel: {
                introduced: "7.9.0",
                deleted: "9.8.0",
                deletionMessage: null,
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    microflows.ChangeListAction = ChangeListAction;
    class ChangeMembersAction extends MicroflowAction {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__items = new internal.PartListProperty(ChangeMembersAction, this, "items", []);
            /** @internal */
            this.__refreshInClient = new internal.PrimitiveProperty(ChangeMembersAction, this, "refreshInClient", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__commit = new internal.EnumProperty(ChangeMembersAction, this, "commit", CommitEnum.No, CommitEnum);
            if (arguments.length < 4) {
                throw new Error("new ChangeMembersAction() cannot be invoked directly, please use 'model.microflows.createChangeMembersAction()'");
            }
        }
        get containerAsActionActivity() {
            return super.getContainerAs(ActionActivity);
        }
        get items() {
            return this.__items.get();
        }
        get refreshInClient() {
            return this.__refreshInClient.get();
        }
        set refreshInClient(newValue) {
            this.__refreshInClient.set(newValue);
        }
        get commit() {
            return this.__commit.get();
        }
        set commit(newValue) {
            this.__commit.set(newValue);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.commit = CommitEnum.No;
        }
    }
    ChangeMembersAction.structureTypeName = "Microflows$ChangeMembersAction";
    ChangeMembersAction.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    microflows.ChangeMembersAction = ChangeMembersAction;
    /**
     * See: {@link https://docs.mendix.com/refguide/change-object relevant section in reference guide}
     */
    class ChangeObjectAction extends ChangeMembersAction {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__changeVariableName = new internal.PrimitiveProperty(ChangeObjectAction, this, "changeVariableName", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new ChangeObjectAction() cannot be invoked directly, please use 'model.microflows.createChangeObjectAction()'");
            }
        }
        get containerAsActionActivity() {
            return super.getContainerAs(ActionActivity);
        }
        get changeVariableName() {
            return this.__changeVariableName.get();
        }
        set changeVariableName(newValue) {
            this.__changeVariableName.set(newValue);
        }
        /**
         * Creates and returns a new ChangeObjectAction instance in the SDK and on the server.
         * The new ChangeObjectAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, ChangeObjectAction, "action", false);
        }
        /**
         * Creates and returns a new ChangeObjectAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ChangeObjectAction);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ChangeObjectAction.structureTypeName = "Microflows$ChangeObjectAction";
    ChangeObjectAction.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    microflows.ChangeObjectAction = ChangeObjectAction;
    /**
     * See: {@link https://docs.mendix.com/refguide/change-variable relevant section in reference guide}
     */
    class ChangeVariableAction extends MicroflowAction {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__changeVariableName = new internal.PrimitiveProperty(ChangeVariableAction, this, "changeVariableName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__value = new internal.PrimitiveProperty(ChangeVariableAction, this, "value", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__valueModel = new internal.PartProperty(ChangeVariableAction, this, "valueModel", null, true);
            if (arguments.length < 4) {
                throw new Error("new ChangeVariableAction() cannot be invoked directly, please use 'model.microflows.createChangeVariableAction()'");
            }
        }
        get containerAsActionActivity() {
            return super.getContainerAs(ActionActivity);
        }
        get changeVariableName() {
            return this.__changeVariableName.get();
        }
        set changeVariableName(newValue) {
            this.__changeVariableName.set(newValue);
        }
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get value() {
            return this.__value.get();
        }
        set value(newValue) {
            this.__value.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.8.0: deleted
         * In version 7.9.0: introduced
         */
        get valueModel() {
            return this.__valueModel.get();
        }
        set valueModel(newValue) {
            this.__valueModel.set(newValue);
        }
        /**
         * Creates and returns a new ChangeVariableAction instance in the SDK and on the server.
         * The new ChangeVariableAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, ChangeVariableAction, "action", false);
        }
        /**
         * Creates and returns a new ChangeVariableAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ChangeVariableAction);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__valueModel.isAvailable) {
                this.valueModel = expressions_1.expressions.NoExpression.create(this.model);
            }
        }
    }
    ChangeVariableAction.structureTypeName = "Microflows$ChangeVariableAction";
    ChangeVariableAction.versionInfo = new exports.StructureVersionInfo({
        properties: {
            valueModel: {
                introduced: "7.9.0",
                deleted: "9.8.0",
                deletionMessage: null,
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    microflows.ChangeVariableAction = ChangeVariableAction;
    /**
     * See: {@link https://docs.mendix.com/refguide/close-page relevant section in reference guide}
     */
    class CloseFormAction extends MicroflowAction {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__numberOfPages = new internal.PrimitiveProperty(CloseFormAction, this, "numberOfPages", 1, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__numberOfPagesToClose = new internal.PrimitiveProperty(CloseFormAction, this, "numberOfPagesToClose", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new CloseFormAction() cannot be invoked directly, please use 'model.microflows.createCloseFormAction()'");
            }
        }
        get containerAsActionActivity() {
            return super.getContainerAs(ActionActivity);
        }
        /**
         * In version 8.11.0: deleted
         * In version 8.9.0: introduced
         */
        get numberOfPages() {
            return this.__numberOfPages.get();
        }
        set numberOfPages(newValue) {
            this.__numberOfPages.set(newValue);
        }
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         *
         * In version 8.11.0: introduced
         */
        get numberOfPagesToClose() {
            return this.__numberOfPagesToClose.get();
        }
        set numberOfPagesToClose(newValue) {
            this.__numberOfPagesToClose.set(newValue);
        }
        /**
         * Creates and returns a new CloseFormAction instance in the SDK and on the server.
         * The new CloseFormAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, CloseFormAction, "action", false);
        }
        /**
         * Creates and returns a new CloseFormAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, CloseFormAction);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__numberOfPages.isAvailable) {
                this.numberOfPages = 1;
            }
        }
    }
    CloseFormAction.structureTypeName = "Microflows$CloseFormAction";
    CloseFormAction.versionInfo = new exports.StructureVersionInfo({
        properties: {
            numberOfPages: {
                introduced: "8.9.0",
                deleted: "8.11.0",
                deletionMessage: null
            },
            numberOfPagesToClose: {
                introduced: "8.11.0"
            }
        }
    }, internal.StructureType.Element);
    microflows.CloseFormAction = CloseFormAction;
    class CodeActionParameterMapping extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new CodeActionParameterMapping() cannot be invoked directly, please use 'model.microflows.createCodeActionParameterMapping()'");
            }
        }
        get containerAsJavaActionCallAction() {
            return super.getContainerAs(JavaActionCallAction);
        }
        get containerAsJavaScriptActionCallAction() {
            return super.getContainerAs(JavaScriptActionCallAction);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    CodeActionParameterMapping.structureTypeName = "Microflows$CodeActionParameterMapping";
    CodeActionParameterMapping.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    microflows.CodeActionParameterMapping = CodeActionParameterMapping;
    /**
     * See: {@link https://docs.mendix.com/refguide/committing-objects relevant section in reference guide}
     */
    class CommitAction extends MicroflowAction {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__withEvents = new internal.PrimitiveProperty(CommitAction, this, "withEvents", true, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__commitVariableName = new internal.PrimitiveProperty(CommitAction, this, "commitVariableName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__refreshInClient = new internal.PrimitiveProperty(CommitAction, this, "refreshInClient", false, internal.PrimitiveTypeEnum.Boolean);
            if (arguments.length < 4) {
                throw new Error("new CommitAction() cannot be invoked directly, please use 'model.microflows.createCommitAction()'");
            }
        }
        get containerAsActionActivity() {
            return super.getContainerAs(ActionActivity);
        }
        get withEvents() {
            return this.__withEvents.get();
        }
        set withEvents(newValue) {
            this.__withEvents.set(newValue);
        }
        get commitVariableName() {
            return this.__commitVariableName.get();
        }
        set commitVariableName(newValue) {
            this.__commitVariableName.set(newValue);
        }
        get refreshInClient() {
            return this.__refreshInClient.get();
        }
        set refreshInClient(newValue) {
            this.__refreshInClient.set(newValue);
        }
        /**
         * Creates and returns a new CommitAction instance in the SDK and on the server.
         * The new CommitAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, CommitAction, "action", false);
        }
        /**
         * Creates and returns a new CommitAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, CommitAction);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.withEvents = true;
        }
    }
    CommitAction.structureTypeName = "Microflows$CommitAction";
    CommitAction.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    microflows.CommitAction = CommitAction;
    class Range extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new Range() cannot be invoked directly, please use 'model.microflows.createRange()'");
            }
        }
        get containerAsDatabaseRetrieveSource() {
            return super.getContainerAs(DatabaseRetrieveSource);
        }
        get containerAsImportMappingCall() {
            return super.getContainerAs(ImportMappingCall);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    Range.structureTypeName = "Microflows$Range";
    Range.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    microflows.Range = Range;
    class ConstantRange extends Range {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__singleObject = new internal.PrimitiveProperty(ConstantRange, this, "singleObject", false, internal.PrimitiveTypeEnum.Boolean);
            if (arguments.length < 4) {
                throw new Error("new ConstantRange() cannot be invoked directly, please use 'model.microflows.createConstantRange()'");
            }
        }
        get containerAsDatabaseRetrieveSource() {
            return super.getContainerAs(DatabaseRetrieveSource);
        }
        get containerAsImportMappingCall() {
            return super.getContainerAs(ImportMappingCall);
        }
        get singleObject() {
            return this.__singleObject.get();
        }
        set singleObject(newValue) {
            this.__singleObject.set(newValue);
        }
        /**
         * Creates and returns a new ConstantRange instance in the SDK and on the server.
         * The new ConstantRange will be automatically stored in the 'range' property
         * of the parent DatabaseRetrieveSource element passed as argument.
         */
        static createInDatabaseRetrieveSourceUnderRange(container) {
            return internal.instancehelpers.createElement(container, ConstantRange, "range", false);
        }
        /**
         * Creates and returns a new ConstantRange instance in the SDK and on the server.
         * The new ConstantRange will be automatically stored in the 'range' property
         * of the parent ImportMappingCall element passed as argument.
         */
        static createInImportMappingCallUnderRange(container) {
            return internal.instancehelpers.createElement(container, ConstantRange, "range", false);
        }
        /**
         * Creates and returns a new ConstantRange instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ConstantRange);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ConstantRange.structureTypeName = "Microflows$ConstantRange";
    ConstantRange.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    microflows.ConstantRange = ConstantRange;
    class Contains extends BinaryListOperation {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new Contains() cannot be invoked directly, please use 'model.microflows.createContains()'");
            }
        }
        get containerAsListOperationAction() {
            return super.getContainerAs(ListOperationAction);
        }
        /**
         * Creates and returns a new Contains instance in the SDK and on the server.
         * The new Contains will be automatically stored in the 'operation' property
         * of the parent ListOperationAction element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, Contains, "operation", false);
        }
        /**
         * Creates and returns a new Contains instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, Contains);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    Contains.structureTypeName = "Microflows$Contains";
    Contains.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    microflows.Contains = Contains;
    /**
     * See: {@link https://docs.mendix.com/refguide/continue-event relevant section in reference guide}
     */
    class ContinueEvent extends MicroflowObject {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new ContinueEvent() cannot be invoked directly, please use 'model.microflows.createContinueEvent()'");
            }
        }
        get containerAsMicroflowObjectCollection() {
            return super.getContainerAs(MicroflowObjectCollection);
        }
        /**
         * Creates and returns a new ContinueEvent instance in the SDK and on the server.
         * The new ContinueEvent will be automatically stored in the 'objects' property
         * of the parent MicroflowObjectCollection element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, ContinueEvent, "objects", true);
        }
        /**
         * Creates and returns a new ContinueEvent instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ContinueEvent);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.size = { width: 20, height: 20 };
        }
    }
    ContinueEvent.structureTypeName = "Microflows$ContinueEvent";
    ContinueEvent.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    microflows.ContinueEvent = ContinueEvent;
    /**
     * In version 9.12.0: removed experimental
     * In version 9.3.0: introduced
     */
    class ContinueOperation extends WorkflowOperation {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__workflowVariable = new internal.PrimitiveProperty(ContinueOperation, this, "workflowVariable", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new ContinueOperation() cannot be invoked directly, please use 'model.microflows.createContinueOperation()'");
            }
        }
        get containerAsWorkflowOperationAction() {
            return super.getContainerAs(WorkflowOperationAction);
        }
        get workflowVariable() {
            return this.__workflowVariable.get();
        }
        set workflowVariable(newValue) {
            this.__workflowVariable.set(newValue);
        }
        /**
         * Creates and returns a new ContinueOperation instance in the SDK and on the server.
         * The new ContinueOperation will be automatically stored in the 'operation' property
         * of the parent WorkflowOperationAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.3.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, ContinueOperation.structureTypeName, { start: "9.3.0" });
            return internal.instancehelpers.createElement(container, ContinueOperation, "operation", false);
        }
        /**
         * Creates and returns a new ContinueOperation instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ContinueOperation);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ContinueOperation.structureTypeName = "Microflows$ContinueOperation";
    ContinueOperation.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.3.0",
        experimental: {
            currentValue: false,
            changedIn: ["9.12.0"]
        }
    }, internal.StructureType.Element);
    microflows.ContinueOperation = ContinueOperation;
    /**
     * In version 9.7.0: removed experimental
     * In version 9.5.0: introduced
     */
    class MeterAction extends MicroflowAction {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__name = new internal.PrimitiveProperty(MeterAction, this, "name", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__description = new internal.PrimitiveProperty(MeterAction, this, "description", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__tags = new internal.PartListProperty(MeterAction, this, "tags", []);
            if (arguments.length < 4) {
                throw new Error("new MeterAction() cannot be invoked directly, please use 'model.microflows.createMeterAction()'");
            }
        }
        get containerAsActionActivity() {
            return super.getContainerAs(ActionActivity);
        }
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get name() {
            return this.__name.get();
        }
        set name(newValue) {
            this.__name.set(newValue);
        }
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get description() {
            return this.__description.get();
        }
        set description(newValue) {
            this.__description.set(newValue);
        }
        get tags() {
            return this.__tags.get();
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    MeterAction.structureTypeName = "Microflows$MeterAction";
    MeterAction.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.5.0",
        experimental: {
            currentValue: false,
            changedIn: ["9.7.0"]
        }
    }, internal.StructureType.Element);
    microflows.MeterAction = MeterAction;
    /**
     * See: {@link https://docs.mendix.com/refguide/metrics-counter relevant section in reference guide}
     *
     * In version 9.7.0: removed experimental
     * In version 9.5.0: introduced
     */
    class CounterMeterAction extends MeterAction {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__value = new internal.PrimitiveProperty(CounterMeterAction, this, "value", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new CounterMeterAction() cannot be invoked directly, please use 'model.microflows.createCounterMeterAction()'");
            }
        }
        get containerAsActionActivity() {
            return super.getContainerAs(ActionActivity);
        }
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get value() {
            return this.__value.get();
        }
        set value(newValue) {
            this.__value.set(newValue);
        }
        /**
         * Creates and returns a new CounterMeterAction instance in the SDK and on the server.
         * The new CounterMeterAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.5.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, CounterMeterAction.structureTypeName, { start: "9.5.0" });
            return internal.instancehelpers.createElement(container, CounterMeterAction, "action", false);
        }
        /**
         * Creates and returns a new CounterMeterAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, CounterMeterAction);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    CounterMeterAction.structureTypeName = "Microflows$CounterMeterAction";
    CounterMeterAction.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.5.0",
        experimental: {
            currentValue: false,
            changedIn: ["9.7.0"]
        }
    }, internal.StructureType.Element);
    microflows.CounterMeterAction = CounterMeterAction;
    /**
     * See: {@link https://docs.mendix.com/refguide/create-list relevant section in reference guide}
     */
    class CreateListAction extends MicroflowAction {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__entity = new internal.ByNameReferenceProperty(CreateListAction, this, "entity", null, "DomainModels$Entity");
            /** @internal */
            this.__outputVariableName = new internal.PrimitiveProperty(CreateListAction, this, "outputVariableName", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new CreateListAction() cannot be invoked directly, please use 'model.microflows.createCreateListAction()'");
            }
        }
        get containerAsActionActivity() {
            return super.getContainerAs(ActionActivity);
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
        get outputVariableName() {
            return this.__outputVariableName.get();
        }
        set outputVariableName(newValue) {
            this.__outputVariableName.set(newValue);
        }
        /**
         * Creates and returns a new CreateListAction instance in the SDK and on the server.
         * The new CreateListAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, CreateListAction, "action", false);
        }
        /**
         * Creates and returns a new CreateListAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, CreateListAction);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    CreateListAction.structureTypeName = "Microflows$CreateListAction";
    CreateListAction.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    microflows.CreateListAction = CreateListAction;
    /**
     * See: {@link https://docs.mendix.com/refguide/create-object relevant section in reference guide}
     */
    class CreateObjectAction extends ChangeMembersAction {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__entity = new internal.ByNameReferenceProperty(CreateObjectAction, this, "entity", null, "DomainModels$Entity");
            /** @internal */
            this.__outputVariableName = new internal.PrimitiveProperty(CreateObjectAction, this, "outputVariableName", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new CreateObjectAction() cannot be invoked directly, please use 'model.microflows.createCreateObjectAction()'");
            }
        }
        get containerAsActionActivity() {
            return super.getContainerAs(ActionActivity);
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
        get outputVariableName() {
            return this.__outputVariableName.get();
        }
        set outputVariableName(newValue) {
            this.__outputVariableName.set(newValue);
        }
        /**
         * Creates and returns a new CreateObjectAction instance in the SDK and on the server.
         * The new CreateObjectAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, CreateObjectAction, "action", false);
        }
        /**
         * Creates and returns a new CreateObjectAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, CreateObjectAction);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    CreateObjectAction.structureTypeName = "Microflows$CreateObjectAction";
    CreateObjectAction.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    microflows.CreateObjectAction = CreateObjectAction;
    /**
     * See: {@link https://docs.mendix.com/refguide/create-variable relevant section in reference guide}
     */
    class CreateVariableAction extends MicroflowAction {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__variableName = new internal.PrimitiveProperty(CreateVariableAction, this, "variableName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__variableDataType = new internal.PrimitiveProperty(CreateVariableAction, this, "variableDataType", "Boolean", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__variableType = new internal.PartProperty(CreateVariableAction, this, "variableType", null, true);
            /** @internal */
            this.__initialValue = new internal.PrimitiveProperty(CreateVariableAction, this, "initialValue", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__initialValueModel = new internal.PartProperty(CreateVariableAction, this, "initialValueModel", null, true);
            if (arguments.length < 4) {
                throw new Error("new CreateVariableAction() cannot be invoked directly, please use 'model.microflows.createCreateVariableAction()'");
            }
        }
        get containerAsActionActivity() {
            return super.getContainerAs(ActionActivity);
        }
        get variableName() {
            return this.__variableName.get();
        }
        set variableName(newValue) {
            this.__variableName.set(newValue);
        }
        /**
         * The value of this property is conceptually of type dataTypes.LegacyDataType.
         *
         * In version 7.9.0: deleted
         */
        get variableDataType() {
            return this.__variableDataType.get();
        }
        set variableDataType(newValue) {
            this.__variableDataType.set(newValue);
        }
        /**
         * In version 7.9.0: introduced
         */
        get variableType() {
            return this.__variableType.get();
        }
        set variableType(newValue) {
            this.__variableType.set(newValue);
        }
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get initialValue() {
            return this.__initialValue.get();
        }
        set initialValue(newValue) {
            this.__initialValue.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.8.0: deleted
         * In version 7.9.0: introduced
         */
        get initialValueModel() {
            return this.__initialValueModel.get();
        }
        set initialValueModel(newValue) {
            this.__initialValueModel.set(newValue);
        }
        /**
         * Creates and returns a new CreateVariableAction instance in the SDK and on the server.
         * The new CreateVariableAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, CreateVariableAction, "action", false);
        }
        /**
         * Creates and returns a new CreateVariableAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, CreateVariableAction);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__initialValueModel.isAvailable) {
                this.initialValueModel = expressions_1.expressions.NoExpression.create(this.model);
            }
            if (this.__variableDataType.isAvailable) {
                this.variableDataType = "Boolean";
            }
            if (this.__variableType.isAvailable) {
                this.variableType = datatypes_1.datatypes.BooleanType.create(this.model);
            }
        }
    }
    CreateVariableAction.structureTypeName = "Microflows$CreateVariableAction";
    CreateVariableAction.versionInfo = new exports.StructureVersionInfo({
        properties: {
            variableDataType: {
                deleted: "7.9.0",
                deletionMessage: "Use property 'variableType' instead"
            },
            variableType: {
                introduced: "7.9.0",
                required: {
                    currentValue: true
                }
            },
            initialValueModel: {
                introduced: "7.9.0",
                deleted: "9.8.0",
                deletionMessage: null,
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    microflows.CreateVariableAction = CreateVariableAction;
    class CustomRange extends Range {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__limitExpression = new internal.PrimitiveProperty(CustomRange, this, "limitExpression", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__offsetExpression = new internal.PrimitiveProperty(CustomRange, this, "offsetExpression", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__limitExpressionModel = new internal.PartProperty(CustomRange, this, "limitExpressionModel", null, true);
            /** @internal */
            this.__offsetExpressionModel = new internal.PartProperty(CustomRange, this, "offsetExpressionModel", null, true);
            if (arguments.length < 4) {
                throw new Error("new CustomRange() cannot be invoked directly, please use 'model.microflows.createCustomRange()'");
            }
        }
        get containerAsDatabaseRetrieveSource() {
            return super.getContainerAs(DatabaseRetrieveSource);
        }
        get containerAsImportMappingCall() {
            return super.getContainerAs(ImportMappingCall);
        }
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get limitExpression() {
            return this.__limitExpression.get();
        }
        set limitExpression(newValue) {
            this.__limitExpression.set(newValue);
        }
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get offsetExpression() {
            return this.__offsetExpression.get();
        }
        set offsetExpression(newValue) {
            this.__offsetExpression.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.8.0: deleted
         * In version 7.9.0: introduced
         */
        get limitExpressionModel() {
            return this.__limitExpressionModel.get();
        }
        set limitExpressionModel(newValue) {
            this.__limitExpressionModel.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.8.0: deleted
         * In version 7.9.0: introduced
         */
        get offsetExpressionModel() {
            return this.__offsetExpressionModel.get();
        }
        set offsetExpressionModel(newValue) {
            this.__offsetExpressionModel.set(newValue);
        }
        /**
         * Creates and returns a new CustomRange instance in the SDK and on the server.
         * The new CustomRange will be automatically stored in the 'range' property
         * of the parent DatabaseRetrieveSource element passed as argument.
         */
        static createInDatabaseRetrieveSourceUnderRange(container) {
            return internal.instancehelpers.createElement(container, CustomRange, "range", false);
        }
        /**
         * Creates and returns a new CustomRange instance in the SDK and on the server.
         * The new CustomRange will be automatically stored in the 'range' property
         * of the parent ImportMappingCall element passed as argument.
         */
        static createInImportMappingCallUnderRange(container) {
            return internal.instancehelpers.createElement(container, CustomRange, "range", false);
        }
        /**
         * Creates and returns a new CustomRange instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, CustomRange);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__limitExpressionModel.isAvailable) {
                this.limitExpressionModel = expressions_1.expressions.NoExpression.create(this.model);
            }
            if (this.__offsetExpressionModel.isAvailable) {
                this.offsetExpressionModel = expressions_1.expressions.NoExpression.create(this.model);
            }
        }
    }
    CustomRange.structureTypeName = "Microflows$CustomRange";
    CustomRange.versionInfo = new exports.StructureVersionInfo({
        properties: {
            limitExpressionModel: {
                introduced: "7.9.0",
                deleted: "9.8.0",
                deletionMessage: null,
                required: {
                    currentValue: true
                }
            },
            offsetExpressionModel: {
                introduced: "7.9.0",
                deleted: "9.8.0",
                deletionMessage: null,
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    microflows.CustomRange = CustomRange;
    class CustomRequestHandling extends RequestHandling {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__template = new internal.PartProperty(CustomRequestHandling, this, "template", null, true);
            if (arguments.length < 4) {
                throw new Error("new CustomRequestHandling() cannot be invoked directly, please use 'model.microflows.createCustomRequestHandling()'");
            }
        }
        get containerAsRestCallAction() {
            return super.getContainerAs(RestCallAction);
        }
        get containerAsWebServiceCallAction() {
            return super.getContainerAs(WebServiceCallAction);
        }
        get template() {
            return this.__template.get();
        }
        set template(newValue) {
            this.__template.set(newValue);
        }
        /**
         * Creates and returns a new CustomRequestHandling instance in the SDK and on the server.
         * The new CustomRequestHandling will be automatically stored in the 'requestHandling' property
         * of the parent RestCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 and higher
         */
        static createInRestCallActionUnderRequestHandling(container) {
            internal.createInVersionCheck(container.model, CustomRequestHandling.structureTypeName, { start: "6.6.0" });
            return internal.instancehelpers.createElement(container, CustomRequestHandling, "requestHandling", false);
        }
        /**
         * Creates and returns a new CustomRequestHandling instance in the SDK and on the server.
         * The new CustomRequestHandling will be automatically stored in the 'requestBodyHandling' property
         * of the parent WebServiceCallAction element passed as argument.
         */
        static createInWebServiceCallActionUnderRequestBodyHandling(container) {
            return internal.instancehelpers.createElement(container, CustomRequestHandling, "requestBodyHandling", false);
        }
        /**
         * Creates and returns a new CustomRequestHandling instance in the SDK and on the server.
         * The new CustomRequestHandling will be automatically stored in the 'requestHeaderHandling' property
         * of the parent WebServiceCallAction element passed as argument.
         */
        static createInWebServiceCallActionUnderRequestHeaderHandling(container) {
            return internal.instancehelpers.createElement(container, CustomRequestHandling, "requestHeaderHandling", false);
        }
        /**
         * Creates and returns a new CustomRequestHandling instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, CustomRequestHandling);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.template = StringTemplate.create(this.model);
        }
    }
    CustomRequestHandling.structureTypeName = "Microflows$CustomRequestHandling";
    CustomRequestHandling.versionInfo = new exports.StructureVersionInfo({
        properties: {
            template: {
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    microflows.CustomRequestHandling = CustomRequestHandling;
    class DatabaseRetrieveSource extends RetrieveSource {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__entity = new internal.ByNameReferenceProperty(DatabaseRetrieveSource, this, "entity", null, "DomainModels$Entity");
            /** @internal */
            this.__range = new internal.PartProperty(DatabaseRetrieveSource, this, "range", null, true);
            /** @internal */
            this.__xPathConstraint = new internal.PrimitiveProperty(DatabaseRetrieveSource, this, "xPathConstraint", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__sortItemList = new internal.PartProperty(DatabaseRetrieveSource, this, "sortItemList", null, true);
            if (arguments.length < 4) {
                throw new Error("new DatabaseRetrieveSource() cannot be invoked directly, please use 'model.microflows.createDatabaseRetrieveSource()'");
            }
        }
        get containerAsRetrieveAction() {
            return super.getContainerAs(RetrieveAction);
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
        get range() {
            return this.__range.get();
        }
        set range(newValue) {
            this.__range.set(newValue);
        }
        /**
         * The value of this property is conceptually of type xPathConstraints.XPathConstraint.
         */
        get xPathConstraint() {
            return this.__xPathConstraint.get();
        }
        set xPathConstraint(newValue) {
            this.__xPathConstraint.set(newValue);
        }
        get sortItemList() {
            return this.__sortItemList.get();
        }
        set sortItemList(newValue) {
            this.__sortItemList.set(newValue);
        }
        /**
         * Creates and returns a new DatabaseRetrieveSource instance in the SDK and on the server.
         * The new DatabaseRetrieveSource will be automatically stored in the 'retrieveSource' property
         * of the parent RetrieveAction element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, DatabaseRetrieveSource, "retrieveSource", false);
        }
        /**
         * Creates and returns a new DatabaseRetrieveSource instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, DatabaseRetrieveSource);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.range = ConstantRange.create(this.model);
            this.sortItemList = SortItemList.create(this.model);
        }
    }
    DatabaseRetrieveSource.structureTypeName = "Microflows$DatabaseRetrieveSource";
    DatabaseRetrieveSource.versionInfo = new exports.StructureVersionInfo({
        properties: {
            range: {
                required: {
                    currentValue: true
                }
            },
            sortItemList: {
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    microflows.DatabaseRetrieveSource = DatabaseRetrieveSource;
    /**
     * See: {@link https://docs.mendix.com/refguide/deleting-objects relevant section in reference guide}
     */
    class DeleteAction extends MicroflowAction {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__deleteVariableName = new internal.PrimitiveProperty(DeleteAction, this, "deleteVariableName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__refreshInClient = new internal.PrimitiveProperty(DeleteAction, this, "refreshInClient", false, internal.PrimitiveTypeEnum.Boolean);
            if (arguments.length < 4) {
                throw new Error("new DeleteAction() cannot be invoked directly, please use 'model.microflows.createDeleteAction()'");
            }
        }
        get containerAsActionActivity() {
            return super.getContainerAs(ActionActivity);
        }
        get deleteVariableName() {
            return this.__deleteVariableName.get();
        }
        set deleteVariableName(newValue) {
            this.__deleteVariableName.set(newValue);
        }
        get refreshInClient() {
            return this.__refreshInClient.get();
        }
        set refreshInClient(newValue) {
            this.__refreshInClient.set(newValue);
        }
        /**
         * Creates and returns a new DeleteAction instance in the SDK and on the server.
         * The new DeleteAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, DeleteAction, "action", false);
        }
        /**
         * Creates and returns a new DeleteAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, DeleteAction);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    DeleteAction.structureTypeName = "Microflows$DeleteAction";
    DeleteAction.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    microflows.DeleteAction = DeleteAction;
    /**
     * See: {@link https://docs.mendix.com/refguide/delete-external-object relevant section in reference guide}
     *
     * In version 9.12.0: introduced
     */
    class DeleteExternalObject extends MicroflowAction {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__deleteVariableName = new internal.PrimitiveProperty(DeleteExternalObject, this, "deleteVariableName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__refreshInClient = new internal.PrimitiveProperty(DeleteExternalObject, this, "refreshInClient", false, internal.PrimitiveTypeEnum.Boolean);
            if (arguments.length < 4) {
                throw new Error("new DeleteExternalObject() cannot be invoked directly, please use 'model.microflows.createDeleteExternalObject()'");
            }
        }
        get containerAsActionActivity() {
            return super.getContainerAs(ActionActivity);
        }
        get deleteVariableName() {
            return this.__deleteVariableName.get();
        }
        set deleteVariableName(newValue) {
            this.__deleteVariableName.set(newValue);
        }
        get refreshInClient() {
            return this.__refreshInClient.get();
        }
        set refreshInClient(newValue) {
            this.__refreshInClient.set(newValue);
        }
        /**
         * Creates and returns a new DeleteExternalObject instance in the SDK and on the server.
         * The new DeleteExternalObject will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.12.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, DeleteExternalObject.structureTypeName, { start: "9.12.0" });
            return internal.instancehelpers.createElement(container, DeleteExternalObject, "action", false);
        }
        /**
         * Creates and returns a new DeleteExternalObject instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, DeleteExternalObject);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    DeleteExternalObject.structureTypeName = "Microflows$DeleteExternalObject";
    DeleteExternalObject.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.12.0"
    }, internal.StructureType.Element);
    microflows.DeleteExternalObject = DeleteExternalObject;
    class DocumentTemplateParameterMapping extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__widgetName = new internal.PrimitiveProperty(DocumentTemplateParameterMapping, this, "widgetName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__argument = new internal.PrimitiveProperty(DocumentTemplateParameterMapping, this, "argument", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__argumentModel = new internal.PartProperty(DocumentTemplateParameterMapping, this, "argumentModel", null, true);
            if (arguments.length < 4) {
                throw new Error("new DocumentTemplateParameterMapping() cannot be invoked directly, please use 'model.microflows.createDocumentTemplateParameterMapping()'");
            }
        }
        get containerAsGenerateDocumentAction() {
            return super.getContainerAs(GenerateDocumentAction);
        }
        get widgetName() {
            return this.__widgetName.get();
        }
        set widgetName(newValue) {
            this.__widgetName.set(newValue);
        }
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get argument() {
            return this.__argument.get();
        }
        set argument(newValue) {
            this.__argument.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.8.0: deleted
         * In version 7.9.0: introduced
         */
        get argumentModel() {
            return this.__argumentModel.get();
        }
        set argumentModel(newValue) {
            this.__argumentModel.set(newValue);
        }
        /**
         * Creates and returns a new DocumentTemplateParameterMapping instance in the SDK and on the server.
         * The new DocumentTemplateParameterMapping will be automatically stored in the 'parameterMappings' property
         * of the parent GenerateDocumentAction element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, DocumentTemplateParameterMapping, "parameterMappings", true);
        }
        /**
         * Creates and returns a new DocumentTemplateParameterMapping instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, DocumentTemplateParameterMapping);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__argumentModel.isAvailable) {
                this.argumentModel = expressions_1.expressions.NoExpression.create(this.model);
            }
        }
    }
    DocumentTemplateParameterMapping.structureTypeName = "Microflows$DocumentTemplateParameterMapping";
    DocumentTemplateParameterMapping.versionInfo = new exports.StructureVersionInfo({
        properties: {
            argumentModel: {
                introduced: "7.9.0",
                deleted: "9.8.0",
                deletionMessage: null,
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    microflows.DocumentTemplateParameterMapping = DocumentTemplateParameterMapping;
    /**
     * See: {@link https://docs.mendix.com/refguide/download-file relevant section in reference guide}
     */
    class DownloadFileAction extends MicroflowAction {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__fileDocumentVariableName = new internal.PrimitiveProperty(DownloadFileAction, this, "fileDocumentVariableName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__showFileInBrowser = new internal.PrimitiveProperty(DownloadFileAction, this, "showFileInBrowser", false, internal.PrimitiveTypeEnum.Boolean);
            if (arguments.length < 4) {
                throw new Error("new DownloadFileAction() cannot be invoked directly, please use 'model.microflows.createDownloadFileAction()'");
            }
        }
        get containerAsActionActivity() {
            return super.getContainerAs(ActionActivity);
        }
        get fileDocumentVariableName() {
            return this.__fileDocumentVariableName.get();
        }
        set fileDocumentVariableName(newValue) {
            this.__fileDocumentVariableName.set(newValue);
        }
        get showFileInBrowser() {
            return this.__showFileInBrowser.get();
        }
        set showFileInBrowser(newValue) {
            this.__showFileInBrowser.set(newValue);
        }
        /**
         * Creates and returns a new DownloadFileAction instance in the SDK and on the server.
         * The new DownloadFileAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, DownloadFileAction, "action", false);
        }
        /**
         * Creates and returns a new DownloadFileAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, DownloadFileAction);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    DownloadFileAction.structureTypeName = "Microflows$DownloadFileAction";
    DownloadFileAction.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    microflows.DownloadFileAction = DownloadFileAction;
    /**
     * See: {@link https://docs.mendix.com/refguide/end-event relevant section in reference guide}
     */
    class EndEvent extends MicroflowObject {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__returnValue = new internal.PrimitiveProperty(EndEvent, this, "returnValue", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__returnValueModel = new internal.PartProperty(EndEvent, this, "returnValueModel", null, true);
            /** @internal */
            this.__documentation = new internal.PrimitiveProperty(EndEvent, this, "documentation", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new EndEvent() cannot be invoked directly, please use 'model.microflows.createEndEvent()'");
            }
        }
        get containerAsMicroflowObjectCollection() {
            return super.getContainerAs(MicroflowObjectCollection);
        }
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get returnValue() {
            return this.__returnValue.get();
        }
        set returnValue(newValue) {
            this.__returnValue.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.8.0: deleted
         * In version 7.9.0: introduced
         */
        get returnValueModel() {
            return this.__returnValueModel.get();
        }
        set returnValueModel(newValue) {
            this.__returnValueModel.set(newValue);
        }
        get documentation() {
            return this.__documentation.get();
        }
        set documentation(newValue) {
            this.__documentation.set(newValue);
        }
        /**
         * Creates and returns a new EndEvent instance in the SDK and on the server.
         * The new EndEvent will be automatically stored in the 'objects' property
         * of the parent MicroflowObjectCollection element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, EndEvent, "objects", true);
        }
        /**
         * Creates and returns a new EndEvent instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, EndEvent);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__returnValueModel.isAvailable) {
                this.returnValueModel = expressions_1.expressions.NoExpression.create(this.model);
            }
            this.size = { width: 20, height: 20 };
        }
    }
    EndEvent.structureTypeName = "Microflows$EndEvent";
    EndEvent.versionInfo = new exports.StructureVersionInfo({
        properties: {
            returnValueModel: {
                introduced: "7.9.0",
                deleted: "9.8.0",
                deletionMessage: null,
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    microflows.EndEvent = EndEvent;
    /**
     * In version 7.21.0: introduced
     */
    class EntityTypeCodeActionParameterValue extends ExpressionBasedCodeActionParameterValue {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__entity = new internal.ByNameReferenceProperty(EntityTypeCodeActionParameterValue, this, "entity", null, "DomainModels$Entity");
            if (arguments.length < 4) {
                throw new Error("new EntityTypeCodeActionParameterValue() cannot be invoked directly, please use 'model.microflows.createEntityTypeCodeActionParameterValue()'");
            }
        }
        get containerAsJavaActionParameterMapping() {
            return super.getContainerAs(JavaActionParameterMapping);
        }
        get containerAsJavaScriptActionParameterMapping() {
            return super.getContainerAs(JavaScriptActionParameterMapping);
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
         * Creates and returns a new EntityTypeCodeActionParameterValue instance in the SDK and on the server.
         * The new EntityTypeCodeActionParameterValue will be automatically stored in the 'parameterValue' property
         * of the parent JavaActionParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInJavaActionParameterMappingUnderParameterValue(container) {
            internal.createInVersionCheck(container.model, EntityTypeCodeActionParameterValue.structureTypeName, { start: "7.21.0" });
            return internal.instancehelpers.createElement(container, EntityTypeCodeActionParameterValue, "parameterValue", false);
        }
        /**
         * Creates and returns a new EntityTypeCodeActionParameterValue instance in the SDK and on the server.
         * The new EntityTypeCodeActionParameterValue will be automatically stored in the 'parameterValue' property
         * of the parent JavaScriptActionParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInJavaScriptActionParameterMappingUnderParameterValue(container) {
            internal.createInVersionCheck(container.model, EntityTypeCodeActionParameterValue.structureTypeName, { start: "7.21.0" });
            return internal.instancehelpers.createElement(container, EntityTypeCodeActionParameterValue, "parameterValue", false);
        }
        /**
         * Creates and returns a new EntityTypeCodeActionParameterValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, EntityTypeCodeActionParameterValue);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    EntityTypeCodeActionParameterValue.structureTypeName = "Microflows$EntityTypeCodeActionParameterValue";
    EntityTypeCodeActionParameterValue.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.21.0"
    }, internal.StructureType.Element);
    microflows.EntityTypeCodeActionParameterValue = EntityTypeCodeActionParameterValue;
    /**
     * In version 7.21.0: deleted
     * In version 6.8.0: introduced
     */
    class EntityTypeJavaActionParameterValue extends JavaActionParameterValue {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__entity = new internal.ByNameReferenceProperty(EntityTypeJavaActionParameterValue, this, "entity", null, "DomainModels$Entity");
            if (arguments.length < 4) {
                throw new Error("new EntityTypeJavaActionParameterValue() cannot be invoked directly, please use 'model.microflows.createEntityTypeJavaActionParameterValue()'");
            }
        }
        get containerAsJavaActionParameterMapping() {
            return super.getContainerAs(JavaActionParameterMapping);
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
         * Creates and returns a new EntityTypeJavaActionParameterValue instance in the SDK and on the server.
         * The new EntityTypeJavaActionParameterValue will be automatically stored in the 'value' property
         * of the parent JavaActionParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.8.0 to 7.20.0
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, EntityTypeJavaActionParameterValue.structureTypeName, {
                start: "6.8.0",
                end: "7.20.0"
            });
            return internal.instancehelpers.createElement(container, EntityTypeJavaActionParameterValue, "value", false);
        }
        /**
         * Creates and returns a new EntityTypeJavaActionParameterValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, EntityTypeJavaActionParameterValue);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    EntityTypeJavaActionParameterValue.structureTypeName = "Microflows$EntityTypeJavaActionParameterValue";
    EntityTypeJavaActionParameterValue.versionInfo = new exports.StructureVersionInfo({
        introduced: "6.8.0",
        deleted: "7.21.0",
        deletionMessage: "Use 'EntityTypeCodeActionParameterValue' instead"
    }, internal.StructureType.Element);
    microflows.EntityTypeJavaActionParameterValue = EntityTypeJavaActionParameterValue;
    class EnumerationCase extends CaseValue {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__value = new internal.PrimitiveProperty(EnumerationCase, this, "value", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new EnumerationCase() cannot be invoked directly, please use 'model.microflows.createEnumerationCase()'");
            }
        }
        get containerAsSequenceFlow() {
            return super.getContainerAs(SequenceFlow);
        }
        get value() {
            return this.__value.get();
        }
        set value(newValue) {
            this.__value.set(newValue);
        }
        /**
         * Creates and returns a new EnumerationCase instance in the SDK and on the server.
         * The new EnumerationCase will be automatically stored in the 'caseValue' property
         * of the parent SequenceFlow element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, EnumerationCase, "caseValue", false);
        }
        /**
         * Creates and returns a new EnumerationCase instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, EnumerationCase);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    EnumerationCase.structureTypeName = "Microflows$EnumerationCase";
    EnumerationCase.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    microflows.EnumerationCase = EnumerationCase;
    /**
     * See: {@link https://docs.mendix.com/refguide/error-event relevant section in reference guide}
     */
    class ErrorEvent extends MicroflowObject {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new ErrorEvent() cannot be invoked directly, please use 'model.microflows.createErrorEvent()'");
            }
        }
        get containerAsMicroflowObjectCollection() {
            return super.getContainerAs(MicroflowObjectCollection);
        }
        /**
         * Creates and returns a new ErrorEvent instance in the SDK and on the server.
         * The new ErrorEvent will be automatically stored in the 'objects' property
         * of the parent MicroflowObjectCollection element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, ErrorEvent, "objects", true);
        }
        /**
         * Creates and returns a new ErrorEvent instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ErrorEvent);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.size = { width: 20, height: 20 };
        }
    }
    ErrorEvent.structureTypeName = "Microflows$ErrorEvent";
    ErrorEvent.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    microflows.ErrorEvent = ErrorEvent;
    /**
     * See: {@link https://docs.mendix.com/refguide/merge relevant section in reference guide}
     */
    class ExclusiveMerge extends MicroflowObject {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new ExclusiveMerge() cannot be invoked directly, please use 'model.microflows.createExclusiveMerge()'");
            }
        }
        get containerAsMicroflowObjectCollection() {
            return super.getContainerAs(MicroflowObjectCollection);
        }
        /**
         * Creates and returns a new ExclusiveMerge instance in the SDK and on the server.
         * The new ExclusiveMerge will be automatically stored in the 'objects' property
         * of the parent MicroflowObjectCollection element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, ExclusiveMerge, "objects", true);
        }
        /**
         * Creates and returns a new ExclusiveMerge instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ExclusiveMerge);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            (() => {
                if (internal.isAtLeast("7.4.0", this.model)) {
                    this.size = { width: 90, height: 60 };
                    return;
                }
                this.size = { width: 60, height: 40 };
            })();
        }
    }
    ExclusiveMerge.structureTypeName = "Microflows$ExclusiveMerge";
    ExclusiveMerge.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    microflows.ExclusiveMerge = ExclusiveMerge;
    /**
     * See: {@link https://docs.mendix.com/refguide/decisions relevant section in reference guide}
     */
    class ExclusiveSplit extends MicroflowObject {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__splitCondition = new internal.PartProperty(ExclusiveSplit, this, "splitCondition", null, true);
            /** @internal */
            this.__caption = new internal.PrimitiveProperty(ExclusiveSplit, this, "caption", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__errorHandlingType = new internal.EnumProperty(ExclusiveSplit, this, "errorHandlingType", ErrorHandlingType.Rollback, ErrorHandlingType);
            /** @internal */
            this.__documentation = new internal.PrimitiveProperty(ExclusiveSplit, this, "documentation", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new ExclusiveSplit() cannot be invoked directly, please use 'model.microflows.createExclusiveSplit()'");
            }
        }
        get containerAsMicroflowObjectCollection() {
            return super.getContainerAs(MicroflowObjectCollection);
        }
        get splitCondition() {
            return this.__splitCondition.get();
        }
        set splitCondition(newValue) {
            this.__splitCondition.set(newValue);
        }
        get caption() {
            return this.__caption.get();
        }
        set caption(newValue) {
            this.__caption.set(newValue);
        }
        get errorHandlingType() {
            return this.__errorHandlingType.get();
        }
        set errorHandlingType(newValue) {
            this.__errorHandlingType.set(newValue);
        }
        get documentation() {
            return this.__documentation.get();
        }
        set documentation(newValue) {
            this.__documentation.set(newValue);
        }
        /**
         * Creates and returns a new ExclusiveSplit instance in the SDK and on the server.
         * The new ExclusiveSplit will be automatically stored in the 'objects' property
         * of the parent MicroflowObjectCollection element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, ExclusiveSplit, "objects", true);
        }
        /**
         * Creates and returns a new ExclusiveSplit instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ExclusiveSplit);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.errorHandlingType = ErrorHandlingType.Rollback;
            (() => {
                if (internal.isAtLeast("7.4.0", this.model)) {
                    this.size = { width: 90, height: 60 };
                    return;
                }
                this.size = { width: 60, height: 40 };
            })();
            this.splitCondition = ExpressionSplitCondition.create(this.model);
        }
    }
    ExclusiveSplit.structureTypeName = "Microflows$ExclusiveSplit";
    ExclusiveSplit.versionInfo = new exports.StructureVersionInfo({
        properties: {
            splitCondition: {
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    microflows.ExclusiveSplit = ExclusiveSplit;
    /**
     * In version 7.21.0: deleted
     * In version 7.2.0: introduced
     */
    class ExportMappingJavaActionParameterValue extends JavaActionParameterValue {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__exportMapping = new internal.ByNameReferenceProperty(ExportMappingJavaActionParameterValue, this, "exportMapping", null, "ExportMappings$ExportMapping");
            if (arguments.length < 4) {
                throw new Error("new ExportMappingJavaActionParameterValue() cannot be invoked directly, please use 'model.microflows.createExportMappingJavaActionParameterValue()'");
            }
        }
        get containerAsJavaActionParameterMapping() {
            return super.getContainerAs(JavaActionParameterMapping);
        }
        get exportMapping() {
            return this.__exportMapping.get();
        }
        set exportMapping(newValue) {
            this.__exportMapping.set(newValue);
        }
        get exportMappingQualifiedName() {
            return this.__exportMapping.qualifiedName();
        }
        /**
         * Creates and returns a new ExportMappingJavaActionParameterValue instance in the SDK and on the server.
         * The new ExportMappingJavaActionParameterValue will be automatically stored in the 'value' property
         * of the parent JavaActionParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.2.0 to 7.20.0
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, ExportMappingJavaActionParameterValue.structureTypeName, {
                start: "7.2.0",
                end: "7.20.0"
            });
            return internal.instancehelpers.createElement(container, ExportMappingJavaActionParameterValue, "value", false);
        }
        /**
         * Creates and returns a new ExportMappingJavaActionParameterValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ExportMappingJavaActionParameterValue);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ExportMappingJavaActionParameterValue.structureTypeName = "Microflows$ExportMappingJavaActionParameterValue";
    ExportMappingJavaActionParameterValue.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.2.0",
        deleted: "7.21.0",
        deletionMessage: "Use 'ExportMappingParameterValue' instead"
    }, internal.StructureType.Element);
    microflows.ExportMappingJavaActionParameterValue = ExportMappingJavaActionParameterValue;
    /**
     * In version 7.21.0: introduced
     */
    class ExportMappingParameterValue extends ExpressionBasedCodeActionParameterValue {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__exportMapping = new internal.ByNameReferenceProperty(ExportMappingParameterValue, this, "exportMapping", null, "ExportMappings$ExportMapping");
            if (arguments.length < 4) {
                throw new Error("new ExportMappingParameterValue() cannot be invoked directly, please use 'model.microflows.createExportMappingParameterValue()'");
            }
        }
        get containerAsJavaActionParameterMapping() {
            return super.getContainerAs(JavaActionParameterMapping);
        }
        get containerAsJavaScriptActionParameterMapping() {
            return super.getContainerAs(JavaScriptActionParameterMapping);
        }
        get exportMapping() {
            return this.__exportMapping.get();
        }
        set exportMapping(newValue) {
            this.__exportMapping.set(newValue);
        }
        get exportMappingQualifiedName() {
            return this.__exportMapping.qualifiedName();
        }
        /**
         * Creates and returns a new ExportMappingParameterValue instance in the SDK and on the server.
         * The new ExportMappingParameterValue will be automatically stored in the 'parameterValue' property
         * of the parent JavaActionParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInJavaActionParameterMappingUnderParameterValue(container) {
            internal.createInVersionCheck(container.model, ExportMappingParameterValue.structureTypeName, { start: "7.21.0" });
            return internal.instancehelpers.createElement(container, ExportMappingParameterValue, "parameterValue", false);
        }
        /**
         * Creates and returns a new ExportMappingParameterValue instance in the SDK and on the server.
         * The new ExportMappingParameterValue will be automatically stored in the 'parameterValue' property
         * of the parent JavaScriptActionParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInJavaScriptActionParameterMappingUnderParameterValue(container) {
            internal.createInVersionCheck(container.model, ExportMappingParameterValue.structureTypeName, { start: "7.21.0" });
            return internal.instancehelpers.createElement(container, ExportMappingParameterValue, "parameterValue", false);
        }
        /**
         * Creates and returns a new ExportMappingParameterValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ExportMappingParameterValue);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ExportMappingParameterValue.structureTypeName = "Microflows$ExportMappingParameterValue";
    ExportMappingParameterValue.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.21.0"
    }, internal.StructureType.Element);
    microflows.ExportMappingParameterValue = ExportMappingParameterValue;
    /**
     * See: {@link https://docs.mendix.com/refguide/export-mapping-action relevant section in reference guide}
     */
    class ExportXmlAction extends MicroflowAction {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__mapping = new internal.ByNameReferenceProperty(ExportXmlAction, this, "mapping", null, "ExportMappings$ExportMapping");
            /** @internal */
            this.__mappingArgumentVariableName = new internal.PrimitiveProperty(ExportXmlAction, this, "mappingArgumentVariableName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__resultHandling = new internal.PartProperty(ExportXmlAction, this, "resultHandling", null, true);
            /** @internal */
            this.__outputMethod = new internal.PartProperty(ExportXmlAction, this, "outputMethod", null, true);
            /** @internal */
            this.__isValidationRequired = new internal.PrimitiveProperty(ExportXmlAction, this, "isValidationRequired", false, internal.PrimitiveTypeEnum.Boolean);
            if (arguments.length < 4) {
                throw new Error("new ExportXmlAction() cannot be invoked directly, please use 'model.microflows.createExportXmlAction()'");
            }
        }
        get containerAsActionActivity() {
            return super.getContainerAs(ActionActivity);
        }
        /**
         * In version 7.6.0: deleted
         */
        get mapping() {
            return this.__mapping.get();
        }
        set mapping(newValue) {
            this.__mapping.set(newValue);
        }
        get mappingQualifiedName() {
            return this.__mapping.qualifiedName();
        }
        /**
         * In version 7.6.0: deleted
         */
        get mappingArgumentVariableName() {
            return this.__mappingArgumentVariableName.get();
        }
        set mappingArgumentVariableName(newValue) {
            this.__mappingArgumentVariableName.set(newValue);
        }
        /**
         * In version 7.6.0: introduced
         */
        get resultHandling() {
            return this.__resultHandling.get();
        }
        set resultHandling(newValue) {
            this.__resultHandling.set(newValue);
        }
        get outputMethod() {
            return this.__outputMethod.get();
        }
        set outputMethod(newValue) {
            this.__outputMethod.set(newValue);
        }
        get isValidationRequired() {
            return this.__isValidationRequired.get();
        }
        set isValidationRequired(newValue) {
            this.__isValidationRequired.set(newValue);
        }
        /**
         * Creates and returns a new ExportXmlAction instance in the SDK and on the server.
         * The new ExportXmlAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, ExportXmlAction, "action", false);
        }
        /**
         * Creates and returns a new ExportXmlAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ExportXmlAction);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.outputMethod = FileDocumentExport.create(this.model);
            if (this.__resultHandling.isAvailable) {
                this.resultHandling = MappingRequestHandling.create(this.model);
            }
        }
    }
    ExportXmlAction.structureTypeName = "Microflows$ExportXmlAction";
    ExportXmlAction.versionInfo = new exports.StructureVersionInfo({
        properties: {
            mapping: {
                deleted: "7.6.0",
                deletionMessage: null
            },
            mappingArgumentVariableName: {
                deleted: "7.6.0",
                deletionMessage: null
            },
            resultHandling: {
                introduced: "7.6.0",
                required: {
                    currentValue: true
                }
            },
            outputMethod: {
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    microflows.ExportXmlAction = ExportXmlAction;
    /**
     * In version 9.0.3: introduced
     */
    class ExpressionListOperation extends ListOperation {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__expression = new internal.PrimitiveProperty(ExpressionListOperation, this, "expression", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__expressionModel = new internal.PartProperty(ExpressionListOperation, this, "expressionModel", null, true);
            if (arguments.length < 4) {
                throw new Error("new ExpressionListOperation() cannot be invoked directly, please use 'model.microflows.createExpressionListOperation()'");
            }
        }
        get containerAsListOperationAction() {
            return super.getContainerAs(ListOperationAction);
        }
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get expression() {
            return this.__expression.get();
        }
        set expression(newValue) {
            this.__expression.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.8.0: deleted
         */
        get expressionModel() {
            return this.__expressionModel.get();
        }
        set expressionModel(newValue) {
            this.__expressionModel.set(newValue);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__expressionModel.isAvailable) {
                this.expressionModel = expressions_1.expressions.NoExpression.create(this.model);
            }
        }
    }
    ExpressionListOperation.structureTypeName = "Microflows$ExpressionListOperation";
    ExpressionListOperation.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.0.3",
        properties: {
            expressionModel: {
                deleted: "9.8.0",
                deletionMessage: null,
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    microflows.ExpressionListOperation = ExpressionListOperation;
    class SplitCondition extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new SplitCondition() cannot be invoked directly, please use 'model.microflows.createSplitCondition()'");
            }
        }
        get containerAsExclusiveSplit() {
            return super.getContainerAs(ExclusiveSplit);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    SplitCondition.structureTypeName = "Microflows$SplitCondition";
    SplitCondition.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    microflows.SplitCondition = SplitCondition;
    class ExpressionSplitCondition extends SplitCondition {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__expression = new internal.PrimitiveProperty(ExpressionSplitCondition, this, "expression", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__expressionModel = new internal.PartProperty(ExpressionSplitCondition, this, "expressionModel", null, true);
            if (arguments.length < 4) {
                throw new Error("new ExpressionSplitCondition() cannot be invoked directly, please use 'model.microflows.createExpressionSplitCondition()'");
            }
        }
        get containerAsExclusiveSplit() {
            return super.getContainerAs(ExclusiveSplit);
        }
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get expression() {
            return this.__expression.get();
        }
        set expression(newValue) {
            this.__expression.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.8.0: deleted
         * In version 7.9.0: introduced
         */
        get expressionModel() {
            return this.__expressionModel.get();
        }
        set expressionModel(newValue) {
            this.__expressionModel.set(newValue);
        }
        /**
         * Creates and returns a new ExpressionSplitCondition instance in the SDK and on the server.
         * The new ExpressionSplitCondition will be automatically stored in the 'splitCondition' property
         * of the parent ExclusiveSplit element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, ExpressionSplitCondition, "splitCondition", false);
        }
        /**
         * Creates and returns a new ExpressionSplitCondition instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ExpressionSplitCondition);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__expressionModel.isAvailable) {
                this.expressionModel = expressions_1.expressions.NoExpression.create(this.model);
            }
        }
    }
    ExpressionSplitCondition.structureTypeName = "Microflows$ExpressionSplitCondition";
    ExpressionSplitCondition.versionInfo = new exports.StructureVersionInfo({
        properties: {
            expressionModel: {
                introduced: "7.9.0",
                deleted: "9.8.0",
                deletionMessage: null,
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    microflows.ExpressionSplitCondition = ExpressionSplitCondition;
    class OutputMethod extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new OutputMethod() cannot be invoked directly, please use 'model.microflows.createOutputMethod()'");
            }
        }
        get containerAsExportXmlAction() {
            return super.getContainerAs(ExportXmlAction);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    OutputMethod.structureTypeName = "Microflows$OutputMethod";
    OutputMethod.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    microflows.OutputMethod = OutputMethod;
    class FileDocumentExport extends OutputMethod {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__targetDocumentVariableName = new internal.PrimitiveProperty(FileDocumentExport, this, "targetDocumentVariableName", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new FileDocumentExport() cannot be invoked directly, please use 'model.microflows.createFileDocumentExport()'");
            }
        }
        get containerAsExportXmlAction() {
            return super.getContainerAs(ExportXmlAction);
        }
        get targetDocumentVariableName() {
            return this.__targetDocumentVariableName.get();
        }
        set targetDocumentVariableName(newValue) {
            this.__targetDocumentVariableName.set(newValue);
        }
        /**
         * Creates and returns a new FileDocumentExport instance in the SDK and on the server.
         * The new FileDocumentExport will be automatically stored in the 'outputMethod' property
         * of the parent ExportXmlAction element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, FileDocumentExport, "outputMethod", false);
        }
        /**
         * Creates and returns a new FileDocumentExport instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, FileDocumentExport);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    FileDocumentExport.structureTypeName = "Microflows$FileDocumentExport";
    FileDocumentExport.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    microflows.FileDocumentExport = FileDocumentExport;
    class InspectAttribute extends ListOperation {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__expression = new internal.PrimitiveProperty(InspectAttribute, this, "expression", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__expressionModel = new internal.PartProperty(InspectAttribute, this, "expressionModel", null, true);
            /** @internal */
            this.__attribute = new internal.ByNameReferenceProperty(InspectAttribute, this, "attribute", null, "DomainModels$Attribute");
            /** @internal */
            this.__association = new internal.ByNameReferenceProperty(InspectAttribute, this, "association", null, "DomainModels$AssociationBase");
            if (arguments.length < 4) {
                throw new Error("new InspectAttribute() cannot be invoked directly, please use 'model.microflows.createInspectAttribute()'");
            }
        }
        get containerAsListOperationAction() {
            return super.getContainerAs(ListOperationAction);
        }
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get expression() {
            return this.__expression.get();
        }
        set expression(newValue) {
            this.__expression.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.8.0: deleted
         * In version 7.9.0: introduced
         */
        get expressionModel() {
            return this.__expressionModel.get();
        }
        set expressionModel(newValue) {
            this.__expressionModel.set(newValue);
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
         * In version 7.0.0: introduced
         */
        get association() {
            return this.__association.get();
        }
        set association(newValue) {
            this.__association.set(newValue);
        }
        get associationQualifiedName() {
            return this.__association.qualifiedName();
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__expressionModel.isAvailable) {
                this.expressionModel = expressions_1.expressions.NoExpression.create(this.model);
            }
        }
    }
    InspectAttribute.structureTypeName = "Microflows$InspectAttribute";
    InspectAttribute.versionInfo = new exports.StructureVersionInfo({
        properties: {
            expressionModel: {
                introduced: "7.9.0",
                deleted: "9.8.0",
                deletionMessage: null,
                required: {
                    currentValue: true
                }
            },
            association: {
                introduced: "7.0.0"
            }
        }
    }, internal.StructureType.Element);
    microflows.InspectAttribute = InspectAttribute;
    class Filter extends InspectAttribute {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new Filter() cannot be invoked directly, please use 'model.microflows.createFilter()'");
            }
        }
        get containerAsListOperationAction() {
            return super.getContainerAs(ListOperationAction);
        }
        /**
         * Creates and returns a new Filter instance in the SDK and on the server.
         * The new Filter will be automatically stored in the 'operation' property
         * of the parent ListOperationAction element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, Filter, "operation", false);
        }
        /**
         * Creates and returns a new Filter instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, Filter);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    Filter.structureTypeName = "Microflows$Filter";
    Filter.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    microflows.Filter = Filter;
    /**
     * In version 9.0.3: introduced
     */
    class FilterByExpression extends ExpressionListOperation {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new FilterByExpression() cannot be invoked directly, please use 'model.microflows.createFilterByExpression()'");
            }
        }
        get containerAsListOperationAction() {
            return super.getContainerAs(ListOperationAction);
        }
        /**
         * Creates and returns a new FilterByExpression instance in the SDK and on the server.
         * The new FilterByExpression will be automatically stored in the 'operation' property
         * of the parent ListOperationAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.3 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, FilterByExpression.structureTypeName, { start: "9.0.3" });
            return internal.instancehelpers.createElement(container, FilterByExpression, "operation", false);
        }
        /**
         * Creates and returns a new FilterByExpression instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, FilterByExpression);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    FilterByExpression.structureTypeName = "Microflows$FilterByExpression";
    FilterByExpression.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.0.3"
    }, internal.StructureType.Element);
    microflows.FilterByExpression = FilterByExpression;
    class Find extends InspectAttribute {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new Find() cannot be invoked directly, please use 'model.microflows.createFind()'");
            }
        }
        get containerAsListOperationAction() {
            return super.getContainerAs(ListOperationAction);
        }
        /**
         * Creates and returns a new Find instance in the SDK and on the server.
         * The new Find will be automatically stored in the 'operation' property
         * of the parent ListOperationAction element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, Find, "operation", false);
        }
        /**
         * Creates and returns a new Find instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, Find);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    Find.structureTypeName = "Microflows$Find";
    Find.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    microflows.Find = Find;
    /**
     * In version 9.0.3: introduced
     */
    class FindByExpression extends ExpressionListOperation {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new FindByExpression() cannot be invoked directly, please use 'model.microflows.createFindByExpression()'");
            }
        }
        get containerAsListOperationAction() {
            return super.getContainerAs(ListOperationAction);
        }
        /**
         * Creates and returns a new FindByExpression instance in the SDK and on the server.
         * The new FindByExpression will be automatically stored in the 'operation' property
         * of the parent ListOperationAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.3 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, FindByExpression.structureTypeName, { start: "9.0.3" });
            return internal.instancehelpers.createElement(container, FindByExpression, "operation", false);
        }
        /**
         * Creates and returns a new FindByExpression instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, FindByExpression);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    FindByExpression.structureTypeName = "Microflows$FindByExpression";
    FindByExpression.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.0.3"
    }, internal.StructureType.Element);
    microflows.FindByExpression = FindByExpression;
    /**
     * In version 8.0.0: introduced
     */
    class FormDataPart extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__key = new internal.PrimitiveProperty(FormDataPart, this, "key", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__value = new internal.PrimitiveProperty(FormDataPart, this, "value", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__valueModel = new internal.PartProperty(FormDataPart, this, "valueModel", null, true);
            /** @internal */
            this.__headerEntries = new internal.PartListProperty(FormDataPart, this, "headerEntries", []);
            if (arguments.length < 4) {
                throw new Error("new FormDataPart() cannot be invoked directly, please use 'model.microflows.createFormDataPart()'");
            }
        }
        get containerAsFormDataRequestHandling() {
            return super.getContainerAs(FormDataRequestHandling);
        }
        get key() {
            return this.__key.get();
        }
        set key(newValue) {
            this.__key.set(newValue);
        }
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get value() {
            return this.__value.get();
        }
        set value(newValue) {
            this.__value.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.8.0: deleted
         */
        get valueModel() {
            return this.__valueModel.get();
        }
        set valueModel(newValue) {
            this.__valueModel.set(newValue);
        }
        /**
         * In version 9.2.0: introduced
         */
        get headerEntries() {
            return this.__headerEntries.get();
        }
        /**
         * Creates and returns a new FormDataPart instance in the SDK and on the server.
         * The new FormDataPart will be automatically stored in the 'parts' property
         * of the parent FormDataRequestHandling element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, FormDataPart.structureTypeName, { start: "8.0.0" });
            return internal.instancehelpers.createElement(container, FormDataPart, "parts", true);
        }
        /**
         * Creates and returns a new FormDataPart instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, FormDataPart);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__valueModel.isAvailable) {
                this.valueModel = expressions_1.expressions.NoExpression.create(this.model);
            }
        }
    }
    FormDataPart.structureTypeName = "Microflows$FormDataPart";
    FormDataPart.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.0.0",
        properties: {
            valueModel: {
                deleted: "9.8.0",
                deletionMessage: null,
                required: {
                    currentValue: true
                }
            },
            headerEntries: {
                introduced: "9.2.0"
            }
        }
    }, internal.StructureType.Element);
    microflows.FormDataPart = FormDataPart;
    /**
     * In version 8.0.0: introduced
     */
    class FormDataRequestHandling extends RequestHandling {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__parts = new internal.PartListProperty(FormDataRequestHandling, this, "parts", []);
            if (arguments.length < 4) {
                throw new Error("new FormDataRequestHandling() cannot be invoked directly, please use 'model.microflows.createFormDataRequestHandling()'");
            }
        }
        get containerAsRestCallAction() {
            return super.getContainerAs(RestCallAction);
        }
        get containerAsWebServiceCallAction() {
            return super.getContainerAs(WebServiceCallAction);
        }
        get parts() {
            return this.__parts.get();
        }
        /**
         * Creates and returns a new FormDataRequestHandling instance in the SDK and on the server.
         * The new FormDataRequestHandling will be automatically stored in the 'requestHandling' property
         * of the parent RestCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 and higher
         */
        static createInRestCallActionUnderRequestHandling(container) {
            internal.createInVersionCheck(container.model, FormDataRequestHandling.structureTypeName, { start: "8.0.0" });
            return internal.instancehelpers.createElement(container, FormDataRequestHandling, "requestHandling", false);
        }
        /**
         * Creates and returns a new FormDataRequestHandling instance in the SDK and on the server.
         * The new FormDataRequestHandling will be automatically stored in the 'requestBodyHandling' property
         * of the parent WebServiceCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 and higher
         */
        static createInWebServiceCallActionUnderRequestBodyHandling(container) {
            internal.createInVersionCheck(container.model, FormDataRequestHandling.structureTypeName, { start: "8.0.0" });
            return internal.instancehelpers.createElement(container, FormDataRequestHandling, "requestBodyHandling", false);
        }
        /**
         * Creates and returns a new FormDataRequestHandling instance in the SDK and on the server.
         * The new FormDataRequestHandling will be automatically stored in the 'requestHeaderHandling' property
         * of the parent WebServiceCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 and higher
         */
        static createInWebServiceCallActionUnderRequestHeaderHandling(container) {
            internal.createInVersionCheck(container.model, FormDataRequestHandling.structureTypeName, { start: "8.0.0" });
            return internal.instancehelpers.createElement(container, FormDataRequestHandling, "requestHeaderHandling", false);
        }
        /**
         * Creates and returns a new FormDataRequestHandling instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, FormDataRequestHandling);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    FormDataRequestHandling.structureTypeName = "Microflows$FormDataRequestHandling";
    FormDataRequestHandling.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.0.0"
    }, internal.StructureType.Element);
    microflows.FormDataRequestHandling = FormDataRequestHandling;
    /**
     * See: {@link https://docs.mendix.com/refguide/metrics-gauge relevant section in reference guide}
     *
     * In version 9.7.0: removed experimental
     * In version 9.5.0: introduced
     */
    class GaugeMeterAction extends MeterAction {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__value = new internal.PrimitiveProperty(GaugeMeterAction, this, "value", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new GaugeMeterAction() cannot be invoked directly, please use 'model.microflows.createGaugeMeterAction()'");
            }
        }
        get containerAsActionActivity() {
            return super.getContainerAs(ActionActivity);
        }
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get value() {
            return this.__value.get();
        }
        set value(newValue) {
            this.__value.set(newValue);
        }
        /**
         * Creates and returns a new GaugeMeterAction instance in the SDK and on the server.
         * The new GaugeMeterAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.5.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, GaugeMeterAction.structureTypeName, { start: "9.5.0" });
            return internal.instancehelpers.createElement(container, GaugeMeterAction, "action", false);
        }
        /**
         * Creates and returns a new GaugeMeterAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, GaugeMeterAction);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    GaugeMeterAction.structureTypeName = "Microflows$GaugeMeterAction";
    GaugeMeterAction.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.5.0",
        experimental: {
            currentValue: false,
            changedIn: ["9.7.0"]
        }
    }, internal.StructureType.Element);
    microflows.GaugeMeterAction = GaugeMeterAction;
    /**
     * See: {@link https://docs.mendix.com/refguide/generate-document relevant section in reference guide}
     */
    class GenerateDocumentAction extends MicroflowAction {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__fileVariableName = new internal.PrimitiveProperty(GenerateDocumentAction, this, "fileVariableName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__languageVariableName = new internal.PrimitiveProperty(GenerateDocumentAction, this, "languageVariableName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__documentType = new internal.EnumProperty(GenerateDocumentAction, this, "documentType", TargetDocumentType.HTML, TargetDocumentType);
            /** @internal */
            this.__languageSetting = new internal.EnumProperty(GenerateDocumentAction, this, "languageSetting", LanguageSettingType.CurrentUser, LanguageSettingType);
            /** @internal */
            this.__documentTemplate = new internal.ByNameReferenceProperty(GenerateDocumentAction, this, "documentTemplate", null, "DocumentTemplates$DocumentTemplate");
            /** @internal */
            this.__parameterMappings = new internal.PartListProperty(GenerateDocumentAction, this, "parameterMappings", []);
            /** @internal */
            this.__overrideTopMargin = new internal.PrimitiveProperty(GenerateDocumentAction, this, "overrideTopMargin", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__overrideBottomMargin = new internal.PrimitiveProperty(GenerateDocumentAction, this, "overrideBottomMargin", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__overrideLeftMargin = new internal.PrimitiveProperty(GenerateDocumentAction, this, "overrideLeftMargin", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__overrideRightMargin = new internal.PrimitiveProperty(GenerateDocumentAction, this, "overrideRightMargin", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__marginLeftInInch = new internal.PrimitiveProperty(GenerateDocumentAction, this, "marginLeftInInch", "0", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__marginLeftInInchModel = new internal.PartProperty(GenerateDocumentAction, this, "marginLeftInInchModel", null, true);
            /** @internal */
            this.__marginRightInInch = new internal.PrimitiveProperty(GenerateDocumentAction, this, "marginRightInInch", "0", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__marginRightInInchModel = new internal.PartProperty(GenerateDocumentAction, this, "marginRightInInchModel", null, true);
            /** @internal */
            this.__marginTopInInch = new internal.PrimitiveProperty(GenerateDocumentAction, this, "marginTopInInch", "0", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__marginTopInInchModel = new internal.PartProperty(GenerateDocumentAction, this, "marginTopInInchModel", null, true);
            /** @internal */
            this.__marginBottomInInch = new internal.PrimitiveProperty(GenerateDocumentAction, this, "marginBottomInInch", "0", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__marginBottomInInchModel = new internal.PartProperty(GenerateDocumentAction, this, "marginBottomInInchModel", null, true);
            if (arguments.length < 4) {
                throw new Error("new GenerateDocumentAction() cannot be invoked directly, please use 'model.microflows.createGenerateDocumentAction()'");
            }
        }
        get containerAsActionActivity() {
            return super.getContainerAs(ActionActivity);
        }
        get fileVariableName() {
            return this.__fileVariableName.get();
        }
        set fileVariableName(newValue) {
            this.__fileVariableName.set(newValue);
        }
        get languageVariableName() {
            return this.__languageVariableName.get();
        }
        set languageVariableName(newValue) {
            this.__languageVariableName.set(newValue);
        }
        get documentType() {
            return this.__documentType.get();
        }
        set documentType(newValue) {
            this.__documentType.set(newValue);
        }
        get languageSetting() {
            return this.__languageSetting.get();
        }
        set languageSetting(newValue) {
            this.__languageSetting.set(newValue);
        }
        get documentTemplate() {
            return this.__documentTemplate.get();
        }
        set documentTemplate(newValue) {
            this.__documentTemplate.set(newValue);
        }
        get documentTemplateQualifiedName() {
            return this.__documentTemplate.qualifiedName();
        }
        get parameterMappings() {
            return this.__parameterMappings.get();
        }
        get overrideTopMargin() {
            return this.__overrideTopMargin.get();
        }
        set overrideTopMargin(newValue) {
            this.__overrideTopMargin.set(newValue);
        }
        get overrideBottomMargin() {
            return this.__overrideBottomMargin.get();
        }
        set overrideBottomMargin(newValue) {
            this.__overrideBottomMargin.set(newValue);
        }
        get overrideLeftMargin() {
            return this.__overrideLeftMargin.get();
        }
        set overrideLeftMargin(newValue) {
            this.__overrideLeftMargin.set(newValue);
        }
        get overrideRightMargin() {
            return this.__overrideRightMargin.get();
        }
        set overrideRightMargin(newValue) {
            this.__overrideRightMargin.set(newValue);
        }
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get marginLeftInInch() {
            return this.__marginLeftInInch.get();
        }
        set marginLeftInInch(newValue) {
            this.__marginLeftInInch.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.8.0: deleted
         * In version 7.9.0: introduced
         */
        get marginLeftInInchModel() {
            return this.__marginLeftInInchModel.get();
        }
        set marginLeftInInchModel(newValue) {
            this.__marginLeftInInchModel.set(newValue);
        }
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get marginRightInInch() {
            return this.__marginRightInInch.get();
        }
        set marginRightInInch(newValue) {
            this.__marginRightInInch.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.8.0: deleted
         * In version 7.9.0: introduced
         */
        get marginRightInInchModel() {
            return this.__marginRightInInchModel.get();
        }
        set marginRightInInchModel(newValue) {
            this.__marginRightInInchModel.set(newValue);
        }
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get marginTopInInch() {
            return this.__marginTopInInch.get();
        }
        set marginTopInInch(newValue) {
            this.__marginTopInInch.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.8.0: deleted
         * In version 7.9.0: introduced
         */
        get marginTopInInchModel() {
            return this.__marginTopInInchModel.get();
        }
        set marginTopInInchModel(newValue) {
            this.__marginTopInInchModel.set(newValue);
        }
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get marginBottomInInch() {
            return this.__marginBottomInInch.get();
        }
        set marginBottomInInch(newValue) {
            this.__marginBottomInInch.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.8.0: deleted
         * In version 7.9.0: introduced
         */
        get marginBottomInInchModel() {
            return this.__marginBottomInInchModel.get();
        }
        set marginBottomInInchModel(newValue) {
            this.__marginBottomInInchModel.set(newValue);
        }
        /**
         * Creates and returns a new GenerateDocumentAction instance in the SDK and on the server.
         * The new GenerateDocumentAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, GenerateDocumentAction, "action", false);
        }
        /**
         * Creates and returns a new GenerateDocumentAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, GenerateDocumentAction);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.documentType = TargetDocumentType.HTML;
            this.languageSetting = LanguageSettingType.CurrentUser;
            this.marginBottomInInch = "0";
            if (this.__marginBottomInInchModel.isAvailable) {
                this.marginBottomInInchModel = ((integerLiteral) => {
                    integerLiteral.value = 0;
                    return integerLiteral;
                })(expressions_1.expressions.IntegerLiteral.create(this.model));
            }
            this.marginLeftInInch = "0";
            if (this.__marginLeftInInchModel.isAvailable) {
                this.marginLeftInInchModel = ((integerLiteral) => {
                    integerLiteral.value = 0;
                    return integerLiteral;
                })(expressions_1.expressions.IntegerLiteral.create(this.model));
            }
            this.marginRightInInch = "0";
            if (this.__marginRightInInchModel.isAvailable) {
                this.marginRightInInchModel = ((integerLiteral) => {
                    integerLiteral.value = 0;
                    return integerLiteral;
                })(expressions_1.expressions.IntegerLiteral.create(this.model));
            }
            this.marginTopInInch = "0";
            if (this.__marginTopInInchModel.isAvailable) {
                this.marginTopInInchModel = ((integerLiteral) => {
                    integerLiteral.value = 0;
                    return integerLiteral;
                })(expressions_1.expressions.IntegerLiteral.create(this.model));
            }
        }
    }
    GenerateDocumentAction.structureTypeName = "Microflows$GenerateDocumentAction";
    GenerateDocumentAction.versionInfo = new exports.StructureVersionInfo({
        properties: {
            marginLeftInInchModel: {
                introduced: "7.9.0",
                deleted: "9.8.0",
                deletionMessage: null,
                required: {
                    currentValue: true
                }
            },
            marginRightInInchModel: {
                introduced: "7.9.0",
                deleted: "9.8.0",
                deletionMessage: null,
                required: {
                    currentValue: true
                }
            },
            marginTopInInchModel: {
                introduced: "7.9.0",
                deleted: "9.8.0",
                deletionMessage: null,
                required: {
                    currentValue: true
                }
            },
            marginBottomInInchModel: {
                introduced: "7.9.0",
                deleted: "9.8.0",
                deletionMessage: null,
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    microflows.GenerateDocumentAction = GenerateDocumentAction;
    /**
     * In version 9.14.0: introduced
     */
    class GenerateJumpToOptionsAction extends MicroflowAction {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__workflowVariable = new internal.PrimitiveProperty(GenerateJumpToOptionsAction, this, "workflowVariable", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__workflow = new internal.ByNameReferenceProperty(GenerateJumpToOptionsAction, this, "workflow", null, "Workflows$Workflow");
            /** @internal */
            this.__outputVariableName = new internal.PrimitiveProperty(GenerateJumpToOptionsAction, this, "outputVariableName", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new GenerateJumpToOptionsAction() cannot be invoked directly, please use 'model.microflows.createGenerateJumpToOptionsAction()'");
            }
        }
        get containerAsActionActivity() {
            return super.getContainerAs(ActionActivity);
        }
        get workflowVariable() {
            return this.__workflowVariable.get();
        }
        set workflowVariable(newValue) {
            this.__workflowVariable.set(newValue);
        }
        /**
         * In version 9.16.0: deleted
         */
        get workflow() {
            return this.__workflow.get();
        }
        set workflow(newValue) {
            this.__workflow.set(newValue);
        }
        get workflowQualifiedName() {
            return this.__workflow.qualifiedName();
        }
        get outputVariableName() {
            return this.__outputVariableName.get();
        }
        set outputVariableName(newValue) {
            this.__outputVariableName.set(newValue);
        }
        /**
         * Creates and returns a new GenerateJumpToOptionsAction instance in the SDK and on the server.
         * The new GenerateJumpToOptionsAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.14.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, GenerateJumpToOptionsAction.structureTypeName, { start: "9.14.0" });
            return internal.instancehelpers.createElement(container, GenerateJumpToOptionsAction, "action", false);
        }
        /**
         * Creates and returns a new GenerateJumpToOptionsAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, GenerateJumpToOptionsAction);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    GenerateJumpToOptionsAction.structureTypeName = "Microflows$GenerateJumpToOptionsAction";
    GenerateJumpToOptionsAction.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.14.0",
        properties: {
            workflow: {
                deleted: "9.16.0",
                deletionMessage: null
            }
        }
    }, internal.StructureType.Element);
    microflows.GenerateJumpToOptionsAction = GenerateJumpToOptionsAction;
    /**
     * In version 9.12.0: removed experimental
     * In version 9.10.0: introduced
     */
    class GetWorkflowDataAction extends MicroflowAction {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__workflowVariable = new internal.PrimitiveProperty(GetWorkflowDataAction, this, "workflowVariable", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__workflow = new internal.ByNameReferenceProperty(GetWorkflowDataAction, this, "workflow", null, "Workflows$Workflow");
            /** @internal */
            this.__outputVariableName = new internal.PrimitiveProperty(GetWorkflowDataAction, this, "outputVariableName", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new GetWorkflowDataAction() cannot be invoked directly, please use 'model.microflows.createGetWorkflowDataAction()'");
            }
        }
        get containerAsActionActivity() {
            return super.getContainerAs(ActionActivity);
        }
        get workflowVariable() {
            return this.__workflowVariable.get();
        }
        set workflowVariable(newValue) {
            this.__workflowVariable.set(newValue);
        }
        get workflow() {
            return this.__workflow.get();
        }
        set workflow(newValue) {
            this.__workflow.set(newValue);
        }
        get workflowQualifiedName() {
            return this.__workflow.qualifiedName();
        }
        get outputVariableName() {
            return this.__outputVariableName.get();
        }
        set outputVariableName(newValue) {
            this.__outputVariableName.set(newValue);
        }
        /**
         * Creates and returns a new GetWorkflowDataAction instance in the SDK and on the server.
         * The new GetWorkflowDataAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.10.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, GetWorkflowDataAction.structureTypeName, { start: "9.10.0" });
            return internal.instancehelpers.createElement(container, GetWorkflowDataAction, "action", false);
        }
        /**
         * Creates and returns a new GetWorkflowDataAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, GetWorkflowDataAction);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    GetWorkflowDataAction.structureTypeName = "Microflows$GetWorkflowDataAction";
    GetWorkflowDataAction.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.10.0",
        experimental: {
            currentValue: false,
            changedIn: ["9.12.0"]
        }
    }, internal.StructureType.Element);
    microflows.GetWorkflowDataAction = GetWorkflowDataAction;
    class Head extends ListOperation {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new Head() cannot be invoked directly, please use 'model.microflows.createHead()'");
            }
        }
        get containerAsListOperationAction() {
            return super.getContainerAs(ListOperationAction);
        }
        /**
         * Creates and returns a new Head instance in the SDK and on the server.
         * The new Head will be automatically stored in the 'operation' property
         * of the parent ListOperationAction element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, Head, "operation", false);
        }
        /**
         * Creates and returns a new Head instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, Head);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    Head.structureTypeName = "Microflows$Head";
    Head.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    microflows.Head = Head;
    class HttpConfiguration extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__overrideLocation = new internal.PrimitiveProperty(HttpConfiguration, this, "overrideLocation", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__customLocation = new internal.PrimitiveProperty(HttpConfiguration, this, "customLocation", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__customLocationModel = new internal.PartProperty(HttpConfiguration, this, "customLocationModel", null, true);
            /** @internal */
            this.__customLocationTemplate = new internal.PartProperty(HttpConfiguration, this, "customLocationTemplate", null, false);
            /** @internal */
            this.__useAuthentication = new internal.PrimitiveProperty(HttpConfiguration, this, "useAuthentication", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__httpAuthenticationUserName = new internal.PrimitiveProperty(HttpConfiguration, this, "httpAuthenticationUserName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__username = new internal.PartProperty(HttpConfiguration, this, "username", null, true);
            /** @internal */
            this.__authenticationPassword = new internal.PrimitiveProperty(HttpConfiguration, this, "authenticationPassword", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__password = new internal.PartProperty(HttpConfiguration, this, "password", null, true);
            /** @internal */
            this.__headerEntries = new internal.PartListProperty(HttpConfiguration, this, "headerEntries", []);
            /** @internal */
            this.__httpMethod = new internal.EnumProperty(HttpConfiguration, this, "httpMethod", HttpMethod.Post, HttpMethod);
            /** @internal */
            this.__newHttpMethod = new internal.EnumProperty(HttpConfiguration, this, "newHttpMethod", services_1.services.HttpMethod.Post, services_1.services.HttpMethod);
            /** @internal */
            this.__clientCertificate = new internal.PrimitiveProperty(HttpConfiguration, this, "clientCertificate", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new HttpConfiguration() cannot be invoked directly, please use 'model.microflows.createHttpConfiguration()'");
            }
        }
        get containerAsRestCallAction() {
            return super.getContainerAs(RestCallAction);
        }
        get containerAsWebServiceCallAction() {
            return super.getContainerAs(WebServiceCallAction);
        }
        get containerAsConsumedODataService() {
            return super.getContainerAs(rest_1.rest.ConsumedODataService);
        }
        get containerAsInteractiveRest() {
            return super.getContainerAs(rest_1.rest.InteractiveRest);
        }
        get overrideLocation() {
            return this.__overrideLocation.get();
        }
        set overrideLocation(newValue) {
            this.__overrideLocation.set(newValue);
        }
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get customLocation() {
            return this.__customLocation.get();
        }
        set customLocation(newValue) {
            this.__customLocation.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.8.0: deleted
         * In version 7.9.0: introduced
         */
        get customLocationModel() {
            return this.__customLocationModel.get();
        }
        set customLocationModel(newValue) {
            this.__customLocationModel.set(newValue);
        }
        /**
         * In version 6.6.0: introduced
         */
        get customLocationTemplate() {
            return this.__customLocationTemplate.get();
        }
        set customLocationTemplate(newValue) {
            this.__customLocationTemplate.set(newValue);
        }
        get useAuthentication() {
            return this.__useAuthentication.get();
        }
        set useAuthentication(newValue) {
            this.__useAuthentication.set(newValue);
        }
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get httpAuthenticationUserName() {
            return this.__httpAuthenticationUserName.get();
        }
        set httpAuthenticationUserName(newValue) {
            this.__httpAuthenticationUserName.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.8.0: deleted
         * In version 7.9.0: introduced
         */
        get username() {
            return this.__username.get();
        }
        set username(newValue) {
            this.__username.set(newValue);
        }
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get authenticationPassword() {
            return this.__authenticationPassword.get();
        }
        set authenticationPassword(newValue) {
            this.__authenticationPassword.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.8.0: deleted
         * In version 7.9.0: introduced
         */
        get password() {
            return this.__password.get();
        }
        set password(newValue) {
            this.__password.set(newValue);
        }
        get headerEntries() {
            return this.__headerEntries.get();
        }
        /**
         * In version 7.7.0: deleted
         * In version 6.6.0: introduced
         */
        get httpMethod() {
            return this.__httpMethod.get();
        }
        set httpMethod(newValue) {
            this.__httpMethod.set(newValue);
        }
        /**
         * In version 7.7.0: introduced
         */
        get newHttpMethod() {
            return this.__newHttpMethod.get();
        }
        set newHttpMethod(newValue) {
            this.__newHttpMethod.set(newValue);
        }
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         *
         * In version 8.18.0: introduced
         */
        get clientCertificate() {
            return this.__clientCertificate.get();
        }
        set clientCertificate(newValue) {
            this.__clientCertificate.set(newValue);
        }
        /**
         * Creates and returns a new HttpConfiguration instance in the SDK and on the server.
         * The new HttpConfiguration will be automatically stored in the 'httpConfiguration' property
         * of the parent WebServiceCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.5.0
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, HttpConfiguration.structureTypeName, { end: "6.5.0" });
            return internal.instancehelpers.createElement(container, HttpConfiguration, "httpConfiguration", false);
        }
        /**
         * Creates and returns a new HttpConfiguration instance in the SDK and on the server.
         * The new HttpConfiguration will be automatically stored in the 'httpConfiguration' property
         * of the parent RestCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 and higher
         */
        static createInRestCallActionUnderHttpConfiguration(container) {
            internal.createInVersionCheck(container.model, HttpConfiguration.structureTypeName, { start: "6.6.0" });
            return internal.instancehelpers.createElement(container, HttpConfiguration, "httpConfiguration", false);
        }
        /**
         * Creates and returns a new HttpConfiguration instance in the SDK and on the server.
         * The new HttpConfiguration will be automatically stored in the 'httpConfiguration' property
         * of the parent WebServiceCallAction element passed as argument.
         */
        static createInWebServiceCallActionUnderHttpConfiguration(container) {
            return internal.instancehelpers.createElement(container, HttpConfiguration, "httpConfiguration", false);
        }
        /**
         * Creates and returns a new HttpConfiguration instance in the SDK and on the server.
         * The new HttpConfiguration will be automatically stored in the 'httpConfiguration' property
         * of the parent rest.ConsumedODataService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 and higher
         */
        static createInConsumedODataServiceUnderHttpConfiguration(container) {
            internal.createInVersionCheck(container.model, HttpConfiguration.structureTypeName, { start: "8.0.0" });
            return internal.instancehelpers.createElement(container, HttpConfiguration, "httpConfiguration", false);
        }
        /**
         * Creates and returns a new HttpConfiguration instance in the SDK and on the server.
         * The new HttpConfiguration will be automatically stored in the 'httpConfiguration' property
         * of the parent rest.InteractiveRest element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.18.0 and higher
         */
        static createInInteractiveRestUnderHttpConfiguration(container) {
            internal.createInVersionCheck(container.model, HttpConfiguration.structureTypeName, { start: "9.18.0" });
            return internal.instancehelpers.createElement(container, HttpConfiguration, "httpConfiguration", false);
        }
        /**
         * Creates and returns a new HttpConfiguration instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, HttpConfiguration);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__customLocationModel.isAvailable) {
                this.customLocationModel = expressions_1.expressions.NoExpression.create(this.model);
            }
            if (this.__httpMethod.isAvailable) {
                this.httpMethod = HttpMethod.Post;
            }
            if (this.__newHttpMethod.isAvailable) {
                this.newHttpMethod = services_1.services.HttpMethod.Post;
            }
            if (this.__password.isAvailable) {
                this.password = expressions_1.expressions.NoExpression.create(this.model);
            }
            if (this.__username.isAvailable) {
                this.username = expressions_1.expressions.NoExpression.create(this.model);
            }
        }
    }
    HttpConfiguration.structureTypeName = "Microflows$HttpConfiguration";
    HttpConfiguration.versionInfo = new exports.StructureVersionInfo({
        properties: {
            customLocationModel: {
                introduced: "7.9.0",
                deleted: "9.8.0",
                deletionMessage: null,
                required: {
                    currentValue: true
                }
            },
            customLocationTemplate: {
                introduced: "6.6.0"
            },
            username: {
                introduced: "7.9.0",
                deleted: "9.8.0",
                deletionMessage: null,
                required: {
                    currentValue: true
                }
            },
            password: {
                introduced: "7.9.0",
                deleted: "9.8.0",
                deletionMessage: null,
                required: {
                    currentValue: true
                }
            },
            httpMethod: {
                introduced: "6.6.0",
                deleted: "7.7.0",
                deletionMessage: null
            },
            newHttpMethod: {
                introduced: "7.7.0"
            },
            clientCertificate: {
                introduced: "8.18.0"
            }
        }
    }, internal.StructureType.Element);
    microflows.HttpConfiguration = HttpConfiguration;
    class HttpHeaderEntry extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__key = new internal.PrimitiveProperty(HttpHeaderEntry, this, "key", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__value = new internal.PrimitiveProperty(HttpHeaderEntry, this, "value", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__valueModel = new internal.PartProperty(HttpHeaderEntry, this, "valueModel", null, true);
            if (arguments.length < 4) {
                throw new Error("new HttpHeaderEntry() cannot be invoked directly, please use 'model.microflows.createHttpHeaderEntry()'");
            }
        }
        get containerAsFormDataPart() {
            return super.getContainerAs(FormDataPart);
        }
        get containerAsHttpConfiguration() {
            return super.getContainerAs(HttpConfiguration);
        }
        get key() {
            return this.__key.get();
        }
        set key(newValue) {
            this.__key.set(newValue);
        }
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get value() {
            return this.__value.get();
        }
        set value(newValue) {
            this.__value.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.8.0: deleted
         * In version 7.9.0: introduced
         */
        get valueModel() {
            return this.__valueModel.get();
        }
        set valueModel(newValue) {
            this.__valueModel.set(newValue);
        }
        /**
         * Creates and returns a new HttpHeaderEntry instance in the SDK and on the server.
         * The new HttpHeaderEntry will be automatically stored in the 'headerEntries' property
         * of the parent HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 9.1.0
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, HttpHeaderEntry.structureTypeName, { end: "9.1.0" });
            return internal.instancehelpers.createElement(container, HttpHeaderEntry, "headerEntries", true);
        }
        /**
         * Creates and returns a new HttpHeaderEntry instance in the SDK and on the server.
         * The new HttpHeaderEntry will be automatically stored in the 'headerEntries' property
         * of the parent FormDataPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.2.0 and higher
         */
        static createInFormDataPartUnderHeaderEntries(container) {
            internal.createInVersionCheck(container.model, HttpHeaderEntry.structureTypeName, { start: "9.2.0" });
            return internal.instancehelpers.createElement(container, HttpHeaderEntry, "headerEntries", true);
        }
        /**
         * Creates and returns a new HttpHeaderEntry instance in the SDK and on the server.
         * The new HttpHeaderEntry will be automatically stored in the 'headerEntries' property
         * of the parent HttpConfiguration element passed as argument.
         */
        static createInHttpConfigurationUnderHeaderEntries(container) {
            return internal.instancehelpers.createElement(container, HttpHeaderEntry, "headerEntries", true);
        }
        /**
         * Creates and returns a new HttpHeaderEntry instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, HttpHeaderEntry);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__valueModel.isAvailable) {
                this.valueModel = expressions_1.expressions.NoExpression.create(this.model);
            }
        }
    }
    HttpHeaderEntry.structureTypeName = "Microflows$HttpHeaderEntry";
    HttpHeaderEntry.versionInfo = new exports.StructureVersionInfo({
        properties: {
            valueModel: {
                introduced: "7.9.0",
                deleted: "9.8.0",
                deletionMessage: null,
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    microflows.HttpHeaderEntry = HttpHeaderEntry;
    class ImportMappingCall extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__mapping = new internal.ByNameReferenceProperty(ImportMappingCall, this, "mapping", null, "ImportMappings$ImportMapping");
            /** @internal */
            this.__objectHandlingBackup = new internal.EnumProperty(ImportMappingCall, this, "objectHandlingBackup", mappings_1.mappings.ObjectHandlingBackupEnum.Create, mappings_1.mappings.ObjectHandlingBackupEnum);
            /** @internal */
            this.__commit = new internal.EnumProperty(ImportMappingCall, this, "commit", CommitEnum.YesWithoutEvents, CommitEnum);
            /** @internal */
            this.__mappingArgumentVariableName = new internal.PrimitiveProperty(ImportMappingCall, this, "mappingArgumentVariableName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__range = new internal.PartProperty(ImportMappingCall, this, "range", null, true);
            /** @internal */
            this.__contentType = new internal.EnumProperty(ImportMappingCall, this, "contentType", ContentType.Json, ContentType);
            /** @internal */
            this.__forceSingleOccurrence = new internal.PrimitiveProperty(ImportMappingCall, this, "forceSingleOccurrence", false, internal.PrimitiveTypeEnum.Boolean);
            if (arguments.length < 4) {
                throw new Error("new ImportMappingCall() cannot be invoked directly, please use 'model.microflows.createImportMappingCall()'");
            }
        }
        get containerAsResultHandling() {
            return super.getContainerAs(ResultHandling);
        }
        get mapping() {
            return this.__mapping.get();
        }
        set mapping(newValue) {
            this.__mapping.set(newValue);
        }
        get mappingQualifiedName() {
            return this.__mapping.qualifiedName();
        }
        /**
         * In version 7.17.0: introduced
         */
        get objectHandlingBackup() {
            return this.__objectHandlingBackup.get();
        }
        set objectHandlingBackup(newValue) {
            this.__objectHandlingBackup.set(newValue);
        }
        /**
         * In version 7.18.0: introduced
         */
        get commit() {
            return this.__commit.get();
        }
        set commit(newValue) {
            this.__commit.set(newValue);
        }
        get mappingArgumentVariableName() {
            return this.__mappingArgumentVariableName.get();
        }
        set mappingArgumentVariableName(newValue) {
            this.__mappingArgumentVariableName.set(newValue);
        }
        get range() {
            return this.__range.get();
        }
        set range(newValue) {
            this.__range.set(newValue);
        }
        /**
         * In version 7.6.0: introduced
         */
        get contentType() {
            return this.__contentType.get();
        }
        set contentType(newValue) {
            this.__contentType.set(newValue);
        }
        /**
         * In version 7.8.0: introduced
         */
        get forceSingleOccurrence() {
            return this.__forceSingleOccurrence.get();
        }
        set forceSingleOccurrence(newValue) {
            this.__forceSingleOccurrence.set(newValue);
        }
        /**
         * Creates and returns a new ImportMappingCall instance in the SDK and on the server.
         * The new ImportMappingCall will be automatically stored in the 'importMappingCall' property
         * of the parent ResultHandling element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, ImportMappingCall, "importMappingCall", false);
        }
        /**
         * Creates and returns a new ImportMappingCall instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ImportMappingCall);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__commit.isAvailable) {
                this.commit = CommitEnum.YesWithoutEvents;
            }
            if (this.__contentType.isAvailable) {
                this.contentType = ContentType.Json;
            }
            if (this.__forceSingleOccurrence.isAvailable) {
                this.forceSingleOccurrence = false;
            }
            if (this.__objectHandlingBackup.isAvailable) {
                this.objectHandlingBackup = mappings_1.mappings.ObjectHandlingBackupEnum.Create;
            }
            this.range = ConstantRange.create(this.model);
        }
    }
    ImportMappingCall.structureTypeName = "Microflows$ImportMappingCall";
    ImportMappingCall.versionInfo = new exports.StructureVersionInfo({
        properties: {
            objectHandlingBackup: {
                introduced: "7.17.0"
            },
            commit: {
                introduced: "7.18.0"
            },
            range: {
                required: {
                    currentValue: true
                }
            },
            contentType: {
                introduced: "7.6.0"
            },
            forceSingleOccurrence: {
                introduced: "7.8.0"
            }
        }
    }, internal.StructureType.Element);
    microflows.ImportMappingCall = ImportMappingCall;
    /**
     * In version 7.21.0: deleted
     * In version 7.2.0: introduced
     */
    class ImportMappingJavaActionParameterValue extends JavaActionParameterValue {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__importMapping = new internal.ByNameReferenceProperty(ImportMappingJavaActionParameterValue, this, "importMapping", null, "ImportMappings$ImportMapping");
            if (arguments.length < 4) {
                throw new Error("new ImportMappingJavaActionParameterValue() cannot be invoked directly, please use 'model.microflows.createImportMappingJavaActionParameterValue()'");
            }
        }
        get containerAsJavaActionParameterMapping() {
            return super.getContainerAs(JavaActionParameterMapping);
        }
        get importMapping() {
            return this.__importMapping.get();
        }
        set importMapping(newValue) {
            this.__importMapping.set(newValue);
        }
        get importMappingQualifiedName() {
            return this.__importMapping.qualifiedName();
        }
        /**
         * Creates and returns a new ImportMappingJavaActionParameterValue instance in the SDK and on the server.
         * The new ImportMappingJavaActionParameterValue will be automatically stored in the 'value' property
         * of the parent JavaActionParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.2.0 to 7.20.0
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, ImportMappingJavaActionParameterValue.structureTypeName, {
                start: "7.2.0",
                end: "7.20.0"
            });
            return internal.instancehelpers.createElement(container, ImportMappingJavaActionParameterValue, "value", false);
        }
        /**
         * Creates and returns a new ImportMappingJavaActionParameterValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ImportMappingJavaActionParameterValue);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ImportMappingJavaActionParameterValue.structureTypeName = "Microflows$ImportMappingJavaActionParameterValue";
    ImportMappingJavaActionParameterValue.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.2.0",
        deleted: "7.21.0",
        deletionMessage: "Use 'ImportMappingParameterValue' instead"
    }, internal.StructureType.Element);
    microflows.ImportMappingJavaActionParameterValue = ImportMappingJavaActionParameterValue;
    /**
     * In version 7.21.0: introduced
     */
    class ImportMappingParameterValue extends ExpressionBasedCodeActionParameterValue {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__importMapping = new internal.ByNameReferenceProperty(ImportMappingParameterValue, this, "importMapping", null, "ImportMappings$ImportMapping");
            if (arguments.length < 4) {
                throw new Error("new ImportMappingParameterValue() cannot be invoked directly, please use 'model.microflows.createImportMappingParameterValue()'");
            }
        }
        get containerAsJavaActionParameterMapping() {
            return super.getContainerAs(JavaActionParameterMapping);
        }
        get containerAsJavaScriptActionParameterMapping() {
            return super.getContainerAs(JavaScriptActionParameterMapping);
        }
        get importMapping() {
            return this.__importMapping.get();
        }
        set importMapping(newValue) {
            this.__importMapping.set(newValue);
        }
        get importMappingQualifiedName() {
            return this.__importMapping.qualifiedName();
        }
        /**
         * Creates and returns a new ImportMappingParameterValue instance in the SDK and on the server.
         * The new ImportMappingParameterValue will be automatically stored in the 'parameterValue' property
         * of the parent JavaActionParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInJavaActionParameterMappingUnderParameterValue(container) {
            internal.createInVersionCheck(container.model, ImportMappingParameterValue.structureTypeName, { start: "7.21.0" });
            return internal.instancehelpers.createElement(container, ImportMappingParameterValue, "parameterValue", false);
        }
        /**
         * Creates and returns a new ImportMappingParameterValue instance in the SDK and on the server.
         * The new ImportMappingParameterValue will be automatically stored in the 'parameterValue' property
         * of the parent JavaScriptActionParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInJavaScriptActionParameterMappingUnderParameterValue(container) {
            internal.createInVersionCheck(container.model, ImportMappingParameterValue.structureTypeName, { start: "7.21.0" });
            return internal.instancehelpers.createElement(container, ImportMappingParameterValue, "parameterValue", false);
        }
        /**
         * Creates and returns a new ImportMappingParameterValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ImportMappingParameterValue);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ImportMappingParameterValue.structureTypeName = "Microflows$ImportMappingParameterValue";
    ImportMappingParameterValue.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.21.0"
    }, internal.StructureType.Element);
    microflows.ImportMappingParameterValue = ImportMappingParameterValue;
    /**
     * See: {@link https://docs.mendix.com/refguide/import-mapping-action relevant section in reference guide}
     */
    class ImportXmlAction extends MicroflowAction {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__xmlDocumentVariableName = new internal.PrimitiveProperty(ImportXmlAction, this, "xmlDocumentVariableName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__resultHandling = new internal.PartProperty(ImportXmlAction, this, "resultHandling", null, true);
            /** @internal */
            this.__isValidationRequired = new internal.PrimitiveProperty(ImportXmlAction, this, "isValidationRequired", false, internal.PrimitiveTypeEnum.Boolean);
            if (arguments.length < 4) {
                throw new Error("new ImportXmlAction() cannot be invoked directly, please use 'model.microflows.createImportXmlAction()'");
            }
        }
        get containerAsActionActivity() {
            return super.getContainerAs(ActionActivity);
        }
        get xmlDocumentVariableName() {
            return this.__xmlDocumentVariableName.get();
        }
        set xmlDocumentVariableName(newValue) {
            this.__xmlDocumentVariableName.set(newValue);
        }
        get resultHandling() {
            return this.__resultHandling.get();
        }
        set resultHandling(newValue) {
            this.__resultHandling.set(newValue);
        }
        get isValidationRequired() {
            return this.__isValidationRequired.get();
        }
        set isValidationRequired(newValue) {
            this.__isValidationRequired.set(newValue);
        }
        /**
         * Creates and returns a new ImportXmlAction instance in the SDK and on the server.
         * The new ImportXmlAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, ImportXmlAction, "action", false);
        }
        /**
         * Creates and returns a new ImportXmlAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ImportXmlAction);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.resultHandling = ResultHandling.create(this.model);
        }
    }
    ImportXmlAction.structureTypeName = "Microflows$ImportXmlAction";
    ImportXmlAction.versionInfo = new exports.StructureVersionInfo({
        properties: {
            resultHandling: {
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    microflows.ImportXmlAction = ImportXmlAction;
    /**
     * See: {@link https://docs.mendix.com/refguide/metrics-increment-counter relevant section in reference guide}
     *
     * In version 9.7.0: removed experimental
     * In version 9.5.0: introduced
     */
    class IncrementCounterMeterAction extends MeterAction {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new IncrementCounterMeterAction() cannot be invoked directly, please use 'model.microflows.createIncrementCounterMeterAction()'");
            }
        }
        get containerAsActionActivity() {
            return super.getContainerAs(ActionActivity);
        }
        /**
         * Creates and returns a new IncrementCounterMeterAction instance in the SDK and on the server.
         * The new IncrementCounterMeterAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.5.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, IncrementCounterMeterAction.structureTypeName, { start: "9.5.0" });
            return internal.instancehelpers.createElement(container, IncrementCounterMeterAction, "action", false);
        }
        /**
         * Creates and returns a new IncrementCounterMeterAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, IncrementCounterMeterAction);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    IncrementCounterMeterAction.structureTypeName = "Microflows$IncrementCounterMeterAction";
    IncrementCounterMeterAction.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.5.0",
        experimental: {
            currentValue: false,
            changedIn: ["9.7.0"]
        }
    }, internal.StructureType.Element);
    microflows.IncrementCounterMeterAction = IncrementCounterMeterAction;
    class InheritanceCase extends CaseValue {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__value = new internal.ByNameReferenceProperty(InheritanceCase, this, "value", null, "DomainModels$Entity");
            if (arguments.length < 4) {
                throw new Error("new InheritanceCase() cannot be invoked directly, please use 'model.microflows.createInheritanceCase()'");
            }
        }
        get containerAsSequenceFlow() {
            return super.getContainerAs(SequenceFlow);
        }
        get value() {
            return this.__value.get();
        }
        set value(newValue) {
            this.__value.set(newValue);
        }
        get valueQualifiedName() {
            return this.__value.qualifiedName();
        }
        /**
         * Creates and returns a new InheritanceCase instance in the SDK and on the server.
         * The new InheritanceCase will be automatically stored in the 'caseValue' property
         * of the parent SequenceFlow element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, InheritanceCase, "caseValue", false);
        }
        /**
         * Creates and returns a new InheritanceCase instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, InheritanceCase);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    InheritanceCase.structureTypeName = "Microflows$InheritanceCase";
    InheritanceCase.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    microflows.InheritanceCase = InheritanceCase;
    /**
     * See: {@link https://docs.mendix.com/refguide/object-type-decision relevant section in reference guide}
     */
    class InheritanceSplit extends MicroflowObject {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__splitVariableName = new internal.PrimitiveProperty(InheritanceSplit, this, "splitVariableName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__caption = new internal.PrimitiveProperty(InheritanceSplit, this, "caption", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__documentation = new internal.PrimitiveProperty(InheritanceSplit, this, "documentation", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new InheritanceSplit() cannot be invoked directly, please use 'model.microflows.createInheritanceSplit()'");
            }
        }
        get containerAsMicroflowObjectCollection() {
            return super.getContainerAs(MicroflowObjectCollection);
        }
        get splitVariableName() {
            return this.__splitVariableName.get();
        }
        set splitVariableName(newValue) {
            this.__splitVariableName.set(newValue);
        }
        get caption() {
            return this.__caption.get();
        }
        set caption(newValue) {
            this.__caption.set(newValue);
        }
        get documentation() {
            return this.__documentation.get();
        }
        set documentation(newValue) {
            this.__documentation.set(newValue);
        }
        /**
         * Creates and returns a new InheritanceSplit instance in the SDK and on the server.
         * The new InheritanceSplit will be automatically stored in the 'objects' property
         * of the parent MicroflowObjectCollection element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, InheritanceSplit, "objects", true);
        }
        /**
         * Creates and returns a new InheritanceSplit instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, InheritanceSplit);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            (() => {
                if (internal.isAtLeast("7.4.0", this.model)) {
                    this.size = { width: 90, height: 60 };
                    return;
                }
                this.size = { width: 60, height: 40 };
            })();
        }
    }
    InheritanceSplit.structureTypeName = "Microflows$InheritanceSplit";
    InheritanceSplit.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    microflows.InheritanceSplit = InheritanceSplit;
    class Intersect extends BinaryListOperation {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new Intersect() cannot be invoked directly, please use 'model.microflows.createIntersect()'");
            }
        }
        get containerAsListOperationAction() {
            return super.getContainerAs(ListOperationAction);
        }
        /**
         * Creates and returns a new Intersect instance in the SDK and on the server.
         * The new Intersect will be automatically stored in the 'operation' property
         * of the parent ListOperationAction element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, Intersect, "operation", false);
        }
        /**
         * Creates and returns a new Intersect instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, Intersect);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    Intersect.structureTypeName = "Microflows$Intersect";
    Intersect.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    microflows.Intersect = Intersect;
    /**
     * In version 9.0.4: introduced
     */
    class LoopSource extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new LoopSource() cannot be invoked directly, please use 'model.microflows.createLoopSource()'");
            }
        }
        get containerAsLoopedActivity() {
            return super.getContainerAs(LoopedActivity);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    LoopSource.structureTypeName = "Microflows$LoopSource";
    LoopSource.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.0.4"
    }, internal.StructureType.Element);
    microflows.LoopSource = LoopSource;
    /**
     * In version 9.0.4: introduced
     */
    class IterableList extends LoopSource {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__listVariableName = new internal.PrimitiveProperty(IterableList, this, "listVariableName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__variableName = new internal.PrimitiveProperty(IterableList, this, "variableName", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new IterableList() cannot be invoked directly, please use 'model.microflows.createIterableList()'");
            }
        }
        get containerAsLoopedActivity() {
            return super.getContainerAs(LoopedActivity);
        }
        get listVariableName() {
            return this.__listVariableName.get();
        }
        set listVariableName(newValue) {
            this.__listVariableName.set(newValue);
        }
        get variableName() {
            return this.__variableName.get();
        }
        set variableName(newValue) {
            this.__variableName.set(newValue);
        }
        /**
         * Creates and returns a new IterableList instance in the SDK and on the server.
         * The new IterableList will be automatically stored in the 'loopSource' property
         * of the parent LoopedActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.4 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, IterableList.structureTypeName, { start: "9.0.4" });
            return internal.instancehelpers.createElement(container, IterableList, "loopSource", false);
        }
        /**
         * Creates and returns a new IterableList instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, IterableList);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    IterableList.structureTypeName = "Microflows$IterableList";
    IterableList.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.0.4"
    }, internal.StructureType.Element);
    microflows.IterableList = IterableList;
    /**
     * See: {@link https://docs.mendix.com/refguide/java-action-call relevant section in reference guide}
     */
    class JavaActionCallAction extends MicroflowAction {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__javaAction = new internal.ByNameReferenceProperty(JavaActionCallAction, this, "javaAction", null, "JavaActions$JavaAction");
            /** @internal */
            this.__queueSettings = new internal.PartProperty(JavaActionCallAction, this, "queueSettings", null, false);
            /** @internal */
            this.__queue = new internal.ByNameReferenceProperty(JavaActionCallAction, this, "queue", null, "Queues$Queue");
            /** @internal */
            this.__parameterMappings = new internal.PartListProperty(JavaActionCallAction, this, "parameterMappings", []);
            /** @internal */
            this.__useReturnVariable = new internal.PrimitiveProperty(JavaActionCallAction, this, "useReturnVariable", true, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__outputVariableName = new internal.PrimitiveProperty(JavaActionCallAction, this, "outputVariableName", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new JavaActionCallAction() cannot be invoked directly, please use 'model.microflows.createJavaActionCallAction()'");
            }
        }
        get containerAsActionActivity() {
            return super.getContainerAs(ActionActivity);
        }
        get javaAction() {
            return this.__javaAction.get();
        }
        set javaAction(newValue) {
            this.__javaAction.set(newValue);
        }
        get javaActionQualifiedName() {
            return this.__javaAction.qualifiedName();
        }
        /**
         * In version 9.10.0: introduced
         */
        get queueSettings() {
            return this.__queueSettings.get();
        }
        set queueSettings(newValue) {
            this.__queueSettings.set(newValue);
        }
        /**
         * In version 9.10.0: deleted
         * In version 9.0.5: introduced
         */
        get queue() {
            return this.__queue.get();
        }
        set queue(newValue) {
            this.__queue.set(newValue);
        }
        get queueQualifiedName() {
            return this.__queue.qualifiedName();
        }
        get parameterMappings() {
            return this.__parameterMappings.get();
        }
        /**
         * In version 7.13.0: introduced
         */
        get useReturnVariable() {
            return this.__useReturnVariable.get();
        }
        set useReturnVariable(newValue) {
            this.__useReturnVariable.set(newValue);
        }
        get outputVariableName() {
            return this.__outputVariableName.get();
        }
        set outputVariableName(newValue) {
            this.__outputVariableName.set(newValue);
        }
        /**
         * Creates and returns a new JavaActionCallAction instance in the SDK and on the server.
         * The new JavaActionCallAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, JavaActionCallAction, "action", false);
        }
        /**
         * Creates and returns a new JavaActionCallAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, JavaActionCallAction);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__useReturnVariable.isAvailable) {
                this.useReturnVariable = true;
            }
        }
    }
    JavaActionCallAction.structureTypeName = "Microflows$JavaActionCallAction";
    JavaActionCallAction.versionInfo = new exports.StructureVersionInfo({
        properties: {
            queueSettings: {
                introduced: "9.10.0"
            },
            queue: {
                introduced: "9.0.5",
                deleted: "9.10.0",
                deletionMessage: null
            },
            useReturnVariable: {
                introduced: "7.13.0"
            }
        }
    }, internal.StructureType.Element);
    microflows.JavaActionCallAction = JavaActionCallAction;
    class JavaActionParameterMapping extends CodeActionParameterMapping {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__parameter = new internal.ByNameReferenceProperty(JavaActionParameterMapping, this, "parameter", null, "JavaActions$JavaActionParameter");
            /** @internal */
            this.__argument = new internal.PrimitiveProperty(JavaActionParameterMapping, this, "argument", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__value = new internal.PartProperty(JavaActionParameterMapping, this, "value", null, true);
            /** @internal */
            this.__parameterValue = new internal.PartProperty(JavaActionParameterMapping, this, "parameterValue", null, true);
            if (arguments.length < 4) {
                throw new Error("new JavaActionParameterMapping() cannot be invoked directly, please use 'model.microflows.createJavaActionParameterMapping()'");
            }
        }
        get containerAsJavaActionCallAction() {
            return super.getContainerAs(JavaActionCallAction);
        }
        get parameter() {
            return this.__parameter.get();
        }
        set parameter(newValue) {
            this.__parameter.set(newValue);
        }
        get parameterQualifiedName() {
            return this.__parameter.qualifiedName();
        }
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         *
         * In version 6.7.0: deleted
         */
        get argument() {
            return this.__argument.get();
        }
        set argument(newValue) {
            this.__argument.set(newValue);
        }
        /**
         * In version 7.21.0: deleted
         * In version 6.7.0: introduced
         */
        get value() {
            return this.__value.get();
        }
        set value(newValue) {
            this.__value.set(newValue);
        }
        /**
         * In version 7.21.0: introduced
         */
        get parameterValue() {
            return this.__parameterValue.get();
        }
        set parameterValue(newValue) {
            this.__parameterValue.set(newValue);
        }
        /**
         * Creates and returns a new JavaActionParameterMapping instance in the SDK and on the server.
         * The new JavaActionParameterMapping will be automatically stored in the 'parameterMappings' property
         * of the parent JavaActionCallAction element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, JavaActionParameterMapping, "parameterMappings", true);
        }
        /**
         * Creates and returns a new JavaActionParameterMapping instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, JavaActionParameterMapping);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__parameterValue.isAvailable) {
                this.parameterValue = BasicCodeActionParameterValue.create(this.model);
            }
            if (this.__value.isAvailable) {
                this.value = BasicJavaActionParameterValue.create(this.model);
            }
        }
    }
    JavaActionParameterMapping.structureTypeName = "Microflows$JavaActionParameterMapping";
    JavaActionParameterMapping.versionInfo = new exports.StructureVersionInfo({
        properties: {
            parameter: {
                required: {
                    currentValue: true
                }
            },
            argument: {
                deleted: "6.7.0",
                deletionMessage: null
            },
            value: {
                introduced: "6.7.0",
                deleted: "7.21.0",
                deletionMessage: "Use property 'parameterValue' instead",
                required: {
                    currentValue: true
                }
            },
            parameterValue: {
                introduced: "7.21.0",
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    microflows.JavaActionParameterMapping = JavaActionParameterMapping;
    /**
     * In version 8.4.0: removed experimental
     * In version 7.21.0: introduced
     */
    class JavaScriptActionCallAction extends MicroflowAction {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__javaScriptAction = new internal.ByNameReferenceProperty(JavaScriptActionCallAction, this, "javaScriptAction", null, "JavaScriptActions$JavaScriptAction");
            /** @internal */
            this.__parameterMappings = new internal.PartListProperty(JavaScriptActionCallAction, this, "parameterMappings", []);
            /** @internal */
            this.__useReturnVariable = new internal.PrimitiveProperty(JavaScriptActionCallAction, this, "useReturnVariable", true, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__outputVariableName = new internal.PrimitiveProperty(JavaScriptActionCallAction, this, "outputVariableName", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new JavaScriptActionCallAction() cannot be invoked directly, please use 'model.microflows.createJavaScriptActionCallAction()'");
            }
        }
        get containerAsActionActivity() {
            return super.getContainerAs(ActionActivity);
        }
        get javaScriptAction() {
            return this.__javaScriptAction.get();
        }
        set javaScriptAction(newValue) {
            this.__javaScriptAction.set(newValue);
        }
        get javaScriptActionQualifiedName() {
            return this.__javaScriptAction.qualifiedName();
        }
        get parameterMappings() {
            return this.__parameterMappings.get();
        }
        get useReturnVariable() {
            return this.__useReturnVariable.get();
        }
        set useReturnVariable(newValue) {
            this.__useReturnVariable.set(newValue);
        }
        get outputVariableName() {
            return this.__outputVariableName.get();
        }
        set outputVariableName(newValue) {
            this.__outputVariableName.set(newValue);
        }
        /**
         * Creates and returns a new JavaScriptActionCallAction instance in the SDK and on the server.
         * The new JavaScriptActionCallAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, JavaScriptActionCallAction.structureTypeName, { start: "7.21.0" });
            return internal.instancehelpers.createElement(container, JavaScriptActionCallAction, "action", false);
        }
        /**
         * Creates and returns a new JavaScriptActionCallAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, JavaScriptActionCallAction);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.useReturnVariable = true;
        }
    }
    JavaScriptActionCallAction.structureTypeName = "Microflows$JavaScriptActionCallAction";
    JavaScriptActionCallAction.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.21.0",
        experimental: {
            currentValue: false,
            changedIn: ["8.4.0"]
        }
    }, internal.StructureType.Element);
    microflows.JavaScriptActionCallAction = JavaScriptActionCallAction;
    /**
     * In version 8.4.0: removed experimental
     * In version 7.21.0: introduced
     */
    class JavaScriptActionParameterMapping extends CodeActionParameterMapping {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__parameter = new internal.ByNameReferenceProperty(JavaScriptActionParameterMapping, this, "parameter", null, "JavaScriptActions$JavaScriptActionParameter");
            /** @internal */
            this.__parameterValue = new internal.PartProperty(JavaScriptActionParameterMapping, this, "parameterValue", null, true);
            if (arguments.length < 4) {
                throw new Error("new JavaScriptActionParameterMapping() cannot be invoked directly, please use 'model.microflows.createJavaScriptActionParameterMapping()'");
            }
        }
        get containerAsJavaScriptActionCallAction() {
            return super.getContainerAs(JavaScriptActionCallAction);
        }
        get parameter() {
            return this.__parameter.get();
        }
        set parameter(newValue) {
            this.__parameter.set(newValue);
        }
        get parameterQualifiedName() {
            return this.__parameter.qualifiedName();
        }
        get parameterValue() {
            return this.__parameterValue.get();
        }
        set parameterValue(newValue) {
            this.__parameterValue.set(newValue);
        }
        /**
         * Creates and returns a new JavaScriptActionParameterMapping instance in the SDK and on the server.
         * The new JavaScriptActionParameterMapping will be automatically stored in the 'parameterMappings' property
         * of the parent JavaScriptActionCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, JavaScriptActionParameterMapping.structureTypeName, { start: "7.21.0" });
            return internal.instancehelpers.createElement(container, JavaScriptActionParameterMapping, "parameterMappings", true);
        }
        /**
         * Creates and returns a new JavaScriptActionParameterMapping instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, JavaScriptActionParameterMapping);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.parameterValue = BasicCodeActionParameterValue.create(this.model);
        }
    }
    JavaScriptActionParameterMapping.structureTypeName = "Microflows$JavaScriptActionParameterMapping";
    JavaScriptActionParameterMapping.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.21.0",
        properties: {
            parameter: {
                required: {
                    currentValue: true
                }
            },
            parameterValue: {
                required: {
                    currentValue: true
                }
            }
        },
        experimental: {
            currentValue: false,
            changedIn: ["8.4.0"]
        }
    }, internal.StructureType.Element);
    microflows.JavaScriptActionParameterMapping = JavaScriptActionParameterMapping;
    class ListEquals extends BinaryListOperation {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new ListEquals() cannot be invoked directly, please use 'model.microflows.createListEquals()'");
            }
        }
        get containerAsListOperationAction() {
            return super.getContainerAs(ListOperationAction);
        }
        /**
         * Creates and returns a new ListEquals instance in the SDK and on the server.
         * The new ListEquals will be automatically stored in the 'operation' property
         * of the parent ListOperationAction element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, ListEquals, "operation", false);
        }
        /**
         * Creates and returns a new ListEquals instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ListEquals);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ListEquals.structureTypeName = "Microflows$ListEquals";
    ListEquals.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    microflows.ListEquals = ListEquals;
    /**
     * See: {@link https://docs.mendix.com/refguide/list-operation relevant section in reference guide}
     */
    class ListOperationAction extends MicroflowAction {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__operation = new internal.PartProperty(ListOperationAction, this, "operation", null, true);
            /** @internal */
            this.__outputVariableName = new internal.PrimitiveProperty(ListOperationAction, this, "outputVariableName", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new ListOperationAction() cannot be invoked directly, please use 'model.microflows.createListOperationAction()'");
            }
        }
        get containerAsActionActivity() {
            return super.getContainerAs(ActionActivity);
        }
        /**
         * In version 9.8.0: removed optional
         */
        get operation() {
            return this.__operation.get();
        }
        set operation(newValue) {
            this.__operation.set(newValue);
        }
        get outputVariableName() {
            return this.__outputVariableName.get();
        }
        set outputVariableName(newValue) {
            this.__outputVariableName.set(newValue);
        }
        /**
         * Creates and returns a new ListOperationAction instance in the SDK and on the server.
         * The new ListOperationAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, ListOperationAction, "action", false);
        }
        /**
         * Creates and returns a new ListOperationAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ListOperationAction);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            (() => {
                if (internal.isAtLeast("9.8.0", this.model)) {
                    this.operation = Union.create(this.model);
                    return;
                }
            })();
        }
    }
    ListOperationAction.structureTypeName = "Microflows$ListOperationAction";
    ListOperationAction.versionInfo = new exports.StructureVersionInfo({
        properties: {
            operation: {
                required: {
                    currentValue: true,
                    changedIn: ["9.8.0"]
                }
            }
        }
    }, internal.StructureType.Element);
    microflows.ListOperationAction = ListOperationAction;
    /**
     * See: {@link https://docs.mendix.com/refguide/log-message relevant section in reference guide}
     */
    class LogMessageAction extends MicroflowAction {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__level = new internal.EnumProperty(LogMessageAction, this, "level", LogLevel.Info, LogLevel);
            /** @internal */
            this.__node = new internal.PrimitiveProperty(LogMessageAction, this, "node", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__nodeModel = new internal.PartProperty(LogMessageAction, this, "nodeModel", null, true);
            /** @internal */
            this.__messageTemplate = new internal.PartProperty(LogMessageAction, this, "messageTemplate", null, true);
            /** @internal */
            this.__includeLatestStackTrace = new internal.PrimitiveProperty(LogMessageAction, this, "includeLatestStackTrace", false, internal.PrimitiveTypeEnum.Boolean);
            if (arguments.length < 4) {
                throw new Error("new LogMessageAction() cannot be invoked directly, please use 'model.microflows.createLogMessageAction()'");
            }
        }
        get containerAsActionActivity() {
            return super.getContainerAs(ActionActivity);
        }
        get level() {
            return this.__level.get();
        }
        set level(newValue) {
            this.__level.set(newValue);
        }
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get node() {
            return this.__node.get();
        }
        set node(newValue) {
            this.__node.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.8.0: deleted
         * In version 7.9.0: introduced
         */
        get nodeModel() {
            return this.__nodeModel.get();
        }
        set nodeModel(newValue) {
            this.__nodeModel.set(newValue);
        }
        get messageTemplate() {
            return this.__messageTemplate.get();
        }
        set messageTemplate(newValue) {
            this.__messageTemplate.set(newValue);
        }
        get includeLatestStackTrace() {
            return this.__includeLatestStackTrace.get();
        }
        set includeLatestStackTrace(newValue) {
            this.__includeLatestStackTrace.set(newValue);
        }
        /**
         * Creates and returns a new LogMessageAction instance in the SDK and on the server.
         * The new LogMessageAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, LogMessageAction, "action", false);
        }
        /**
         * Creates and returns a new LogMessageAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, LogMessageAction);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.level = LogLevel.Info;
            this.messageTemplate = StringTemplate.create(this.model);
            if (this.__nodeModel.isAvailable) {
                this.nodeModel = expressions_1.expressions.NoExpression.create(this.model);
            }
        }
    }
    LogMessageAction.structureTypeName = "Microflows$LogMessageAction";
    LogMessageAction.versionInfo = new exports.StructureVersionInfo({
        properties: {
            nodeModel: {
                introduced: "7.9.0",
                deleted: "9.8.0",
                deletionMessage: null,
                required: {
                    currentValue: true
                }
            },
            messageTemplate: {
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    microflows.LogMessageAction = LogMessageAction;
    /**
     * See: {@link https://docs.mendix.com/refguide/loop relevant section in reference guide}
     */
    class LoopedActivity extends Activity {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__objectCollection = new internal.PartProperty(LoopedActivity, this, "objectCollection", null, true);
            /** @internal */
            this.__iteratedListVariableName = new internal.PrimitiveProperty(LoopedActivity, this, "iteratedListVariableName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__loopVariableName = new internal.PrimitiveProperty(LoopedActivity, this, "loopVariableName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__errorHandlingType = new internal.EnumProperty(LoopedActivity, this, "errorHandlingType", ErrorHandlingType.Rollback, ErrorHandlingType);
            /** @internal */
            this.__documentation = new internal.PrimitiveProperty(LoopedActivity, this, "documentation", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__loopSource = new internal.PartProperty(LoopedActivity, this, "loopSource", null, true);
            if (arguments.length < 4) {
                throw new Error("new LoopedActivity() cannot be invoked directly, please use 'model.microflows.createLoopedActivity()'");
            }
        }
        get containerAsMicroflowObjectCollection() {
            return super.getContainerAs(MicroflowObjectCollection);
        }
        get objectCollection() {
            return this.__objectCollection.get();
        }
        set objectCollection(newValue) {
            this.__objectCollection.set(newValue);
        }
        /**
         * In version 9.0.4: deleted
         */
        get iteratedListVariableName() {
            return this.__iteratedListVariableName.get();
        }
        set iteratedListVariableName(newValue) {
            this.__iteratedListVariableName.set(newValue);
        }
        /**
         * In version 9.0.4: deleted
         */
        get loopVariableName() {
            return this.__loopVariableName.get();
        }
        set loopVariableName(newValue) {
            this.__loopVariableName.set(newValue);
        }
        get errorHandlingType() {
            return this.__errorHandlingType.get();
        }
        set errorHandlingType(newValue) {
            this.__errorHandlingType.set(newValue);
        }
        get documentation() {
            return this.__documentation.get();
        }
        set documentation(newValue) {
            this.__documentation.set(newValue);
        }
        /**
         * In version 9.0.4: introduced
         */
        get loopSource() {
            return this.__loopSource.get();
        }
        set loopSource(newValue) {
            this.__loopSource.set(newValue);
        }
        /**
         * Creates and returns a new LoopedActivity instance in the SDK and on the server.
         * The new LoopedActivity will be automatically stored in the 'objects' property
         * of the parent MicroflowObjectCollection element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, LoopedActivity, "objects", true);
        }
        /**
         * Creates and returns a new LoopedActivity instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, LoopedActivity);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.errorHandlingType = ErrorHandlingType.Rollback;
            if (this.__loopSource.isAvailable) {
                this.loopSource = IterableList.create(this.model);
            }
            this.objectCollection = MicroflowObjectCollection.create(this.model);
            (() => {
                if (internal.isAtLeast("9.12.0", this.model)) {
                    this.size = { width: 300, height: 200 };
                    return;
                }
            })();
        }
    }
    LoopedActivity.structureTypeName = "Microflows$LoopedActivity";
    LoopedActivity.versionInfo = new exports.StructureVersionInfo({
        properties: {
            objectCollection: {
                required: {
                    currentValue: true
                }
            },
            iteratedListVariableName: {
                deleted: "9.0.4",
                deletionMessage: null
            },
            loopVariableName: {
                deleted: "9.0.4",
                deletionMessage: null
            },
            loopSource: {
                introduced: "9.0.4",
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    microflows.LoopedActivity = LoopedActivity;
    /**
     * In version 9.18.0: deleted
     * In version 9.10.0: introduced
     */
    class MLModelCall extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__modelReference = new internal.PrimitiveProperty(MLModelCall, this, "modelReference", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__mlMappingDocument = new internal.ByNameReferenceProperty(MLModelCall, this, "mlMappingDocument", null, "MLMappings$MLMappingDocument");
            /** @internal */
            this.__parameterMappings = new internal.PartListProperty(MLModelCall, this, "parameterMappings", []);
            if (arguments.length < 4) {
                throw new Error("new MLModelCall() cannot be invoked directly, please use 'model.microflows.createMLModelCall()'");
            }
        }
        get containerAsMLModelCallAction() {
            return super.getContainerAs(MLModelCallAction);
        }
        get modelReference() {
            return this.__modelReference.get();
        }
        set modelReference(newValue) {
            this.__modelReference.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.17.0: introduced
         */
        get mlMappingDocument() {
            return this.__mlMappingDocument.get();
        }
        set mlMappingDocument(newValue) {
            this.__mlMappingDocument.set(newValue);
        }
        get mlMappingDocumentQualifiedName() {
            return this.__mlMappingDocument.qualifiedName();
        }
        get parameterMappings() {
            return this.__parameterMappings.get();
        }
        /**
         * Creates and returns a new MLModelCall instance in the SDK and on the server.
         * The new MLModelCall will be automatically stored in the 'modelCall' property
         * of the parent MLModelCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.10.0 to 9.17.0
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, MLModelCall.structureTypeName, { start: "9.10.0", end: "9.17.0" });
            return internal.instancehelpers.createElement(container, MLModelCall, "modelCall", false);
        }
        /**
         * Creates and returns a new MLModelCall instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, MLModelCall);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    MLModelCall.structureTypeName = "Microflows$MLModelCall";
    MLModelCall.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.10.0",
        deleted: "9.18.0",
        deletionMessage: null,
        properties: {
            mlMappingDocument: {
                introduced: "9.17.0"
            }
        }
    }, internal.StructureType.Element);
    microflows.MLModelCall = MLModelCall;
    /**
     * See: {@link https://docs.mendix.com/refguide/ml-model-call-action relevant section in reference guide}
     *
     * In version 9.10.0: introduced
     */
    class MLModelCallAction extends MicroflowAction {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__modelCall = new internal.PartProperty(MLModelCallAction, this, "modelCall", null, true);
            /** @internal */
            this.__mlMappingDocument = new internal.ByNameReferenceProperty(MLModelCallAction, this, "mlMappingDocument", null, "MLMappings$MLMappingDocument");
            /** @internal */
            this.__inputVariableName = new internal.PrimitiveProperty(MLModelCallAction, this, "inputVariableName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__outputVariableName = new internal.PrimitiveProperty(MLModelCallAction, this, "outputVariableName", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new MLModelCallAction() cannot be invoked directly, please use 'model.microflows.createMLModelCallAction()'");
            }
        }
        get containerAsActionActivity() {
            return super.getContainerAs(ActionActivity);
        }
        /**
         * In version 9.18.0: deleted
         */
        get modelCall() {
            return this.__modelCall.get();
        }
        set modelCall(newValue) {
            this.__modelCall.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.18.0: introduced
         */
        get mlMappingDocument() {
            return this.__mlMappingDocument.get();
        }
        set mlMappingDocument(newValue) {
            this.__mlMappingDocument.set(newValue);
        }
        get mlMappingDocumentQualifiedName() {
            return this.__mlMappingDocument.qualifiedName();
        }
        /**
         * In version 9.18.0: introduced
         */
        get inputVariableName() {
            return this.__inputVariableName.get();
        }
        set inputVariableName(newValue) {
            this.__inputVariableName.set(newValue);
        }
        get outputVariableName() {
            return this.__outputVariableName.get();
        }
        set outputVariableName(newValue) {
            this.__outputVariableName.set(newValue);
        }
        /**
         * Creates and returns a new MLModelCallAction instance in the SDK and on the server.
         * The new MLModelCallAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.10.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, MLModelCallAction.structureTypeName, { start: "9.10.0" });
            return internal.instancehelpers.createElement(container, MLModelCallAction, "action", false);
        }
        /**
         * Creates and returns a new MLModelCallAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, MLModelCallAction);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__modelCall.isAvailable) {
                this.modelCall = MLModelCall.create(this.model);
            }
        }
    }
    MLModelCallAction.structureTypeName = "Microflows$MLModelCallAction";
    MLModelCallAction.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.10.0",
        properties: {
            modelCall: {
                deleted: "9.18.0",
                deletionMessage: null,
                required: {
                    currentValue: true
                }
            },
            mlMappingDocument: {
                introduced: "9.18.0"
            },
            inputVariableName: {
                introduced: "9.18.0"
            }
        }
    }, internal.StructureType.Element);
    microflows.MLModelCallAction = MLModelCallAction;
    /**
     * In version 9.18.0: deleted
     * In version 9.10.0: introduced
     */
    class MLModelCallParameterMapping extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__parameterName = new internal.PrimitiveProperty(MLModelCallParameterMapping, this, "parameterName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__parameterType = new internal.PartProperty(MLModelCallParameterMapping, this, "parameterType", null, true);
            /** @internal */
            this.__initialValue = new internal.PrimitiveProperty(MLModelCallParameterMapping, this, "initialValue", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__initialValueModel = new internal.PrimitiveProperty(MLModelCallParameterMapping, this, "initialValueModel", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new MLModelCallParameterMapping() cannot be invoked directly, please use 'model.microflows.createMLModelCallParameterMapping()'");
            }
        }
        get containerAsMLModelCall() {
            return super.getContainerAs(MLModelCall);
        }
        get parameterName() {
            return this.__parameterName.get();
        }
        set parameterName(newValue) {
            this.__parameterName.set(newValue);
        }
        get parameterType() {
            return this.__parameterType.get();
        }
        set parameterType(newValue) {
            this.__parameterType.set(newValue);
        }
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get initialValue() {
            return this.__initialValue.get();
        }
        set initialValue(newValue) {
            this.__initialValue.set(newValue);
        }
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get initialValueModel() {
            return this.__initialValueModel.get();
        }
        set initialValueModel(newValue) {
            this.__initialValueModel.set(newValue);
        }
        /**
         * Creates and returns a new MLModelCallParameterMapping instance in the SDK and on the server.
         * The new MLModelCallParameterMapping will be automatically stored in the 'parameterMappings' property
         * of the parent MLModelCall element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.10.0 to 9.17.0
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, MLModelCallParameterMapping.structureTypeName, {
                start: "9.10.0",
                end: "9.17.0"
            });
            return internal.instancehelpers.createElement(container, MLModelCallParameterMapping, "parameterMappings", true);
        }
        /**
         * Creates and returns a new MLModelCallParameterMapping instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, MLModelCallParameterMapping);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.parameterType = datatypes_1.datatypes.BooleanType.create(this.model);
        }
    }
    MLModelCallParameterMapping.structureTypeName = "Microflows$MLModelCallParameterMapping";
    MLModelCallParameterMapping.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.10.0",
        deleted: "9.18.0",
        deletionMessage: null,
        properties: {
            parameterType: {
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    microflows.MLModelCallParameterMapping = MLModelCallParameterMapping;
    class MappingRequestHandling extends RequestHandling {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__mapping = new internal.ByNameReferenceProperty(MappingRequestHandling, this, "mapping", null, "ExportMappings$ExportMapping");
            /** @internal */
            this.__mappingArgumentVariableName = new internal.PrimitiveProperty(MappingRequestHandling, this, "mappingArgumentVariableName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__contentType = new internal.EnumProperty(MappingRequestHandling, this, "contentType", ContentType.Json, ContentType);
            if (arguments.length < 4) {
                throw new Error("new MappingRequestHandling() cannot be invoked directly, please use 'model.microflows.createMappingRequestHandling()'");
            }
        }
        get containerAsExportXmlAction() {
            return super.getContainerAs(ExportXmlAction);
        }
        get containerAsRestCallAction() {
            return super.getContainerAs(RestCallAction);
        }
        get containerAsWebServiceCallAction() {
            return super.getContainerAs(WebServiceCallAction);
        }
        get mapping() {
            return this.__mapping.get();
        }
        set mapping(newValue) {
            this.__mapping.set(newValue);
        }
        get mappingQualifiedName() {
            return this.__mapping.qualifiedName();
        }
        get mappingArgumentVariableName() {
            return this.__mappingArgumentVariableName.get();
        }
        set mappingArgumentVariableName(newValue) {
            this.__mappingArgumentVariableName.set(newValue);
        }
        /**
         * In version 7.6.0: introduced
         */
        get contentType() {
            return this.__contentType.get();
        }
        set contentType(newValue) {
            this.__contentType.set(newValue);
        }
        /**
         * Creates and returns a new MappingRequestHandling instance in the SDK and on the server.
         * The new MappingRequestHandling will be automatically stored in the 'resultHandling' property
         * of the parent ExportXmlAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.6.0 and higher
         */
        static createInExportXmlActionUnderResultHandling(container) {
            internal.createInVersionCheck(container.model, MappingRequestHandling.structureTypeName, { start: "7.6.0" });
            return internal.instancehelpers.createElement(container, MappingRequestHandling, "resultHandling", false);
        }
        /**
         * Creates and returns a new MappingRequestHandling instance in the SDK and on the server.
         * The new MappingRequestHandling will be automatically stored in the 'requestHandling' property
         * of the parent RestCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 and higher
         */
        static createInRestCallActionUnderRequestHandling(container) {
            internal.createInVersionCheck(container.model, MappingRequestHandling.structureTypeName, { start: "6.6.0" });
            return internal.instancehelpers.createElement(container, MappingRequestHandling, "requestHandling", false);
        }
        /**
         * Creates and returns a new MappingRequestHandling instance in the SDK and on the server.
         * The new MappingRequestHandling will be automatically stored in the 'requestBodyHandling' property
         * of the parent WebServiceCallAction element passed as argument.
         */
        static createInWebServiceCallActionUnderRequestBodyHandling(container) {
            return internal.instancehelpers.createElement(container, MappingRequestHandling, "requestBodyHandling", false);
        }
        /**
         * Creates and returns a new MappingRequestHandling instance in the SDK and on the server.
         * The new MappingRequestHandling will be automatically stored in the 'requestHeaderHandling' property
         * of the parent WebServiceCallAction element passed as argument.
         */
        static createInWebServiceCallActionUnderRequestHeaderHandling(container) {
            return internal.instancehelpers.createElement(container, MappingRequestHandling, "requestHeaderHandling", false);
        }
        /**
         * Creates and returns a new MappingRequestHandling instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, MappingRequestHandling);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__contentType.isAvailable) {
                this.contentType = ContentType.Json;
            }
        }
    }
    MappingRequestHandling.structureTypeName = "Microflows$MappingRequestHandling";
    MappingRequestHandling.versionInfo = new exports.StructureVersionInfo({
        properties: {
            contentType: {
                introduced: "7.6.0"
            }
        }
    }, internal.StructureType.Element);
    microflows.MappingRequestHandling = MappingRequestHandling;
    class MemberChange extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__attribute = new internal.ByNameReferenceProperty(MemberChange, this, "attribute", null, "DomainModels$Attribute");
            /** @internal */
            this.__association = new internal.ByNameReferenceProperty(MemberChange, this, "association", null, "DomainModels$AssociationBase");
            /** @internal */
            this.__type = new internal.EnumProperty(MemberChange, this, "type", ChangeActionItemType.Set, ChangeActionItemType);
            /** @internal */
            this.__value = new internal.PrimitiveProperty(MemberChange, this, "value", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__valueModel = new internal.PartProperty(MemberChange, this, "valueModel", null, true);
            if (arguments.length < 4) {
                throw new Error("new MemberChange() cannot be invoked directly, please use 'model.microflows.createMemberChange()'");
            }
        }
        get containerAsChangeMembersAction() {
            return super.getContainerAs(ChangeMembersAction);
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
        get association() {
            return this.__association.get();
        }
        set association(newValue) {
            this.__association.set(newValue);
        }
        get associationQualifiedName() {
            return this.__association.qualifiedName();
        }
        get type() {
            return this.__type.get();
        }
        set type(newValue) {
            this.__type.set(newValue);
        }
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get value() {
            return this.__value.get();
        }
        set value(newValue) {
            this.__value.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.8.0: deleted
         * In version 7.9.0: introduced
         */
        get valueModel() {
            return this.__valueModel.get();
        }
        set valueModel(newValue) {
            this.__valueModel.set(newValue);
        }
        /**
         * Creates and returns a new MemberChange instance in the SDK and on the server.
         * The new MemberChange will be automatically stored in the 'items' property
         * of the parent ChangeMembersAction element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, MemberChange, "items", true);
        }
        /**
         * Creates and returns a new MemberChange instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, MemberChange);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.type = ChangeActionItemType.Set;
            if (this.__valueModel.isAvailable) {
                this.valueModel = expressions_1.expressions.NoExpression.create(this.model);
            }
        }
    }
    MemberChange.structureTypeName = "Microflows$MemberChange";
    MemberChange.versionInfo = new exports.StructureVersionInfo({
        properties: {
            valueModel: {
                introduced: "7.9.0",
                deleted: "9.8.0",
                deletionMessage: null,
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    microflows.MemberChange = MemberChange;
    /**
     * In version 9.7.0: removed experimental
     * In version 9.5.0: introduced
     */
    class MeterTagMapping extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__key = new internal.PrimitiveProperty(MeterTagMapping, this, "key", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__value = new internal.PrimitiveProperty(MeterTagMapping, this, "value", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new MeterTagMapping() cannot be invoked directly, please use 'model.microflows.createMeterTagMapping()'");
            }
        }
        get containerAsMeterAction() {
            return super.getContainerAs(MeterAction);
        }
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get key() {
            return this.__key.get();
        }
        set key(newValue) {
            this.__key.set(newValue);
        }
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get value() {
            return this.__value.get();
        }
        set value(newValue) {
            this.__value.set(newValue);
        }
        /**
         * Creates and returns a new MeterTagMapping instance in the SDK and on the server.
         * The new MeterTagMapping will be automatically stored in the 'tags' property
         * of the parent MeterAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.5.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, MeterTagMapping.structureTypeName, { start: "9.5.0" });
            return internal.instancehelpers.createElement(container, MeterTagMapping, "tags", true);
        }
        /**
         * Creates and returns a new MeterTagMapping instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, MeterTagMapping);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    MeterTagMapping.structureTypeName = "Microflows$MeterTagMapping";
    MeterTagMapping.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.5.0",
        experimental: {
            currentValue: false,
            changedIn: ["9.7.0"]
        }
    }, internal.StructureType.Element);
    microflows.MeterTagMapping = MeterTagMapping;
    class MicroflowBase extends projects_1.projects.Document {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            /** @internal */
            this.__objectCollection = new internal.PartProperty(MicroflowBase, this, "objectCollection", null, true);
            /** @internal */
            this.__flows = new internal.PartListProperty(MicroflowBase, this, "flows", []);
            /** @internal */
            this.__returnType = new internal.PrimitiveProperty(MicroflowBase, this, "returnType", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__microflowReturnType = new internal.PartProperty(MicroflowBase, this, "microflowReturnType", null, false);
            /** @internal */
            this.__markAsUsed = new internal.PrimitiveProperty(MicroflowBase, this, "markAsUsed", false, internal.PrimitiveTypeEnum.Boolean);
        }
        get containerAsFolderBase() {
            return super.getContainerAs(projects_1.projects.FolderBase);
        }
        get objectCollection() {
            return this.__objectCollection.get();
        }
        set objectCollection(newValue) {
            this.__objectCollection.set(newValue);
        }
        get flows() {
            return this.__flows.get();
        }
        /**
         * The value of this property is conceptually of type dataTypes.LegacyDataType.
         *
         * In version 7.9.0: deleted
         */
        get returnType() {
            return this.__returnType.get();
        }
        set returnType(newValue) {
            this.__returnType.set(newValue);
        }
        /**
         * In version 7.9.0: introduced
         */
        get microflowReturnType() {
            return this.__microflowReturnType.get();
        }
        set microflowReturnType(newValue) {
            this.__microflowReturnType.set(newValue);
        }
        get markAsUsed() {
            return this.__markAsUsed.get();
        }
        set markAsUsed(newValue) {
            this.__markAsUsed.set(newValue);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.objectCollection = MicroflowObjectCollection.create(this.model);
        }
    }
    MicroflowBase.structureTypeName = "Microflows$MicroflowBase";
    MicroflowBase.versionInfo = new exports.StructureVersionInfo({
        properties: {
            objectCollection: {
                required: {
                    currentValue: true
                }
            },
            returnType: {
                deleted: "7.9.0",
                deletionMessage: "Use property 'microflowReturnType' instead",
                public: {
                    currentValue: true
                }
            },
            microflowReturnType: {
                introduced: "7.9.0",
                public: {
                    currentValue: true
                },
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.ModelUnit);
    microflows.MicroflowBase = MicroflowBase;
    class ServerSideMicroflow extends MicroflowBase {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            /** @internal */
            this.__applyEntityAccess = new internal.PrimitiveProperty(ServerSideMicroflow, this, "applyEntityAccess", false, internal.PrimitiveTypeEnum.Boolean);
        }
        get containerAsFolderBase() {
            return super.getContainerAs(projects_1.projects.FolderBase);
        }
        get applyEntityAccess() {
            return this.__applyEntityAccess.get();
        }
        set applyEntityAccess(newValue) {
            this.__applyEntityAccess.set(newValue);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ServerSideMicroflow.structureTypeName = "Microflows$ServerSideMicroflow";
    ServerSideMicroflow.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.ModelUnit);
    microflows.ServerSideMicroflow = ServerSideMicroflow;
    /**
     * See: {@link https://docs.mendix.com/refguide/microflows relevant section in reference guide}
     */
    class Microflow extends ServerSideMicroflow {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            /** @internal */
            this.__allowedModuleRoles = new internal.ByNameReferenceListProperty(Microflow, this, "allowedModuleRoles", [], "Security$ModuleRole");
            /** @internal */
            this.__microflowActionInfo = new internal.PartProperty(Microflow, this, "microflowActionInfo", null, false);
            /** @internal */
            this.__workflowActionInfo = new internal.PartProperty(Microflow, this, "workflowActionInfo", null, false);
            /** @internal */
            this.__allowConcurrentExecution = new internal.PrimitiveProperty(Microflow, this, "allowConcurrentExecution", true, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__concurrencyErrorMessage = new internal.PartProperty(Microflow, this, "concurrencyErrorMessage", null, true);
            /** @internal */
            this.__concurrencyErrorMicroflow = new internal.ByNameReferenceProperty(Microflow, this, "concurrencyErrorMicroflow", null, "Microflows$Microflow");
            this._containmentName = "documents";
        }
        get containerAsFolderBase() {
            return super.getContainerAs(projects_1.projects.FolderBase);
        }
        /**
         * In version 7.23.0: added public
         */
        get allowedModuleRoles() {
            return this.__allowedModuleRoles.get();
        }
        get allowedModuleRolesQualifiedNames() {
            return this.__allowedModuleRoles.qualifiedNames();
        }
        /**
         * In version 8.0.0: introduced
         */
        get microflowActionInfo() {
            return this.__microflowActionInfo.get();
        }
        set microflowActionInfo(newValue) {
            this.__microflowActionInfo.set(newValue);
        }
        /**
         * In version 9.0.2: introduced
         */
        get workflowActionInfo() {
            return this.__workflowActionInfo.get();
        }
        set workflowActionInfo(newValue) {
            this.__workflowActionInfo.set(newValue);
        }
        get allowConcurrentExecution() {
            return this.__allowConcurrentExecution.get();
        }
        set allowConcurrentExecution(newValue) {
            this.__allowConcurrentExecution.set(newValue);
        }
        get concurrencyErrorMessage() {
            return this.__concurrencyErrorMessage.get();
        }
        set concurrencyErrorMessage(newValue) {
            this.__concurrencyErrorMessage.set(newValue);
        }
        get concurrencyErrorMicroflow() {
            return this.__concurrencyErrorMicroflow.get();
        }
        set concurrencyErrorMicroflow(newValue) {
            this.__concurrencyErrorMicroflow.set(newValue);
        }
        get concurrencyErrorMicroflowQualifiedName() {
            return this.__concurrencyErrorMicroflow.qualifiedName();
        }
        /**
         * Creates a new Microflow unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container) {
            return internal.instancehelpers.createUnit(container, Microflow);
        }
        /** @internal */
        _isByNameReferrable() {
            return this.__name.isAvailable;
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.allowConcurrentExecution = true;
            this.concurrencyErrorMessage = texts_1.texts.Text.create(this.model);
            if (this.__microflowReturnType.isAvailable) {
                this.microflowReturnType = datatypes_1.datatypes.VoidType.create(this.model);
            }
            if (this.__returnType.isAvailable) {
                (() => {
                    if (internal.isAtLeast("7.9.0", this.model)) {
                        return;
                    }
                    this.returnType = "Void";
                })();
            }
        }
    }
    Microflow.structureTypeName = "Microflows$Microflow";
    Microflow.versionInfo = new exports.StructureVersionInfo({
        properties: {
            allowedModuleRoles: {
                public: {
                    currentValue: true,
                    changedIn: ["7.23.0"]
                }
            },
            microflowActionInfo: {
                introduced: "8.0.0",
                public: {
                    currentValue: true
                }
            },
            workflowActionInfo: {
                introduced: "9.0.2",
                public: {
                    currentValue: true
                }
            },
            concurrencyErrorMessage: {
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.ModelUnit);
    microflows.Microflow = Microflow;
    class MicroflowCall extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__microflow = new internal.ByNameReferenceProperty(MicroflowCall, this, "microflow", null, "Microflows$Microflow");
            /** @internal */
            this.__queueSettings = new internal.PartProperty(MicroflowCall, this, "queueSettings", null, false);
            /** @internal */
            this.__queue = new internal.ByNameReferenceProperty(MicroflowCall, this, "queue", null, "Queues$Queue");
            /** @internal */
            this.__parameterMappings = new internal.PartListProperty(MicroflowCall, this, "parameterMappings", []);
            if (arguments.length < 4) {
                throw new Error("new MicroflowCall() cannot be invoked directly, please use 'model.microflows.createMicroflowCall()'");
            }
        }
        get containerAsMicroflowCallAction() {
            return super.getContainerAs(MicroflowCallAction);
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
         * In version 9.10.0: introduced
         */
        get queueSettings() {
            return this.__queueSettings.get();
        }
        set queueSettings(newValue) {
            this.__queueSettings.set(newValue);
        }
        /**
         * In version 9.10.0: deleted
         * In version 8.16.0: introduced
         */
        get queue() {
            return this.__queue.get();
        }
        set queue(newValue) {
            this.__queue.set(newValue);
        }
        get queueQualifiedName() {
            return this.__queue.qualifiedName();
        }
        get parameterMappings() {
            return this.__parameterMappings.get();
        }
        /**
         * Creates and returns a new MicroflowCall instance in the SDK and on the server.
         * The new MicroflowCall will be automatically stored in the 'microflowCall' property
         * of the parent MicroflowCallAction element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, MicroflowCall, "microflowCall", false);
        }
        /**
         * Creates and returns a new MicroflowCall instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, MicroflowCall);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    MicroflowCall.structureTypeName = "Microflows$MicroflowCall";
    MicroflowCall.versionInfo = new exports.StructureVersionInfo({
        properties: {
            queueSettings: {
                introduced: "9.10.0"
            },
            queue: {
                introduced: "8.16.0",
                deleted: "9.10.0",
                deletionMessage: null
            }
        }
    }, internal.StructureType.Element);
    microflows.MicroflowCall = MicroflowCall;
    /**
     * See: {@link https://docs.mendix.com/refguide/microflow-call relevant section in reference guide}
     */
    class MicroflowCallAction extends MicroflowAction {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__microflowCall = new internal.PartProperty(MicroflowCallAction, this, "microflowCall", null, true);
            /** @internal */
            this.__useReturnVariable = new internal.PrimitiveProperty(MicroflowCallAction, this, "useReturnVariable", true, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__outputVariableName = new internal.PrimitiveProperty(MicroflowCallAction, this, "outputVariableName", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new MicroflowCallAction() cannot be invoked directly, please use 'model.microflows.createMicroflowCallAction()'");
            }
        }
        get containerAsActionActivity() {
            return super.getContainerAs(ActionActivity);
        }
        get microflowCall() {
            return this.__microflowCall.get();
        }
        set microflowCall(newValue) {
            this.__microflowCall.set(newValue);
        }
        get useReturnVariable() {
            return this.__useReturnVariable.get();
        }
        set useReturnVariable(newValue) {
            this.__useReturnVariable.set(newValue);
        }
        get outputVariableName() {
            return this.__outputVariableName.get();
        }
        set outputVariableName(newValue) {
            this.__outputVariableName.set(newValue);
        }
        /**
         * Creates and returns a new MicroflowCallAction instance in the SDK and on the server.
         * The new MicroflowCallAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, MicroflowCallAction, "action", false);
        }
        /**
         * Creates and returns a new MicroflowCallAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, MicroflowCallAction);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.microflowCall = MicroflowCall.create(this.model);
            this.useReturnVariable = true;
        }
    }
    MicroflowCallAction.structureTypeName = "Microflows$MicroflowCallAction";
    MicroflowCallAction.versionInfo = new exports.StructureVersionInfo({
        properties: {
            microflowCall: {
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    microflows.MicroflowCallAction = MicroflowCallAction;
    class MicroflowCallParameterMapping extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__parameter = new internal.ByNameReferenceProperty(MicroflowCallParameterMapping, this, "parameter", null, "Microflows$MicroflowParameter");
            /** @internal */
            this.__argument = new internal.PrimitiveProperty(MicroflowCallParameterMapping, this, "argument", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__argumentModel = new internal.PartProperty(MicroflowCallParameterMapping, this, "argumentModel", null, true);
            if (arguments.length < 4) {
                throw new Error("new MicroflowCallParameterMapping() cannot be invoked directly, please use 'model.microflows.createMicroflowCallParameterMapping()'");
            }
        }
        get containerAsMicroflowCall() {
            return super.getContainerAs(MicroflowCall);
        }
        get parameter() {
            return this.__parameter.get();
        }
        set parameter(newValue) {
            this.__parameter.set(newValue);
        }
        get parameterQualifiedName() {
            return this.__parameter.qualifiedName();
        }
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get argument() {
            return this.__argument.get();
        }
        set argument(newValue) {
            this.__argument.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.8.0: deleted
         * In version 7.9.0: introduced
         */
        get argumentModel() {
            return this.__argumentModel.get();
        }
        set argumentModel(newValue) {
            this.__argumentModel.set(newValue);
        }
        /**
         * Creates and returns a new MicroflowCallParameterMapping instance in the SDK and on the server.
         * The new MicroflowCallParameterMapping will be automatically stored in the 'parameterMappings' property
         * of the parent MicroflowCall element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, MicroflowCallParameterMapping, "parameterMappings", true);
        }
        /**
         * Creates and returns a new MicroflowCallParameterMapping instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, MicroflowCallParameterMapping);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__argumentModel.isAvailable) {
                this.argumentModel = expressions_1.expressions.NoExpression.create(this.model);
            }
        }
    }
    MicroflowCallParameterMapping.structureTypeName = "Microflows$MicroflowCallParameterMapping";
    MicroflowCallParameterMapping.versionInfo = new exports.StructureVersionInfo({
        properties: {
            parameter: {
                required: {
                    currentValue: true
                }
            },
            argumentModel: {
                introduced: "7.9.0",
                deleted: "9.8.0",
                deletionMessage: null,
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    microflows.MicroflowCallParameterMapping = MicroflowCallParameterMapping;
    /**
     * In version 7.21.0: deleted
     * In version 6.9.0: introduced
     */
    class MicroflowJavaActionParameterValue extends JavaActionParameterValue {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__microflow = new internal.ByNameReferenceProperty(MicroflowJavaActionParameterValue, this, "microflow", null, "Microflows$Microflow");
            if (arguments.length < 4) {
                throw new Error("new MicroflowJavaActionParameterValue() cannot be invoked directly, please use 'model.microflows.createMicroflowJavaActionParameterValue()'");
            }
        }
        get containerAsJavaActionParameterMapping() {
            return super.getContainerAs(JavaActionParameterMapping);
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
         * Creates and returns a new MicroflowJavaActionParameterValue instance in the SDK and on the server.
         * The new MicroflowJavaActionParameterValue will be automatically stored in the 'value' property
         * of the parent JavaActionParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.9.0 to 7.20.0
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, MicroflowJavaActionParameterValue.structureTypeName, {
                start: "6.9.0",
                end: "7.20.0"
            });
            return internal.instancehelpers.createElement(container, MicroflowJavaActionParameterValue, "value", false);
        }
        /**
         * Creates and returns a new MicroflowJavaActionParameterValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, MicroflowJavaActionParameterValue);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    MicroflowJavaActionParameterValue.structureTypeName = "Microflows$MicroflowJavaActionParameterValue";
    MicroflowJavaActionParameterValue.versionInfo = new exports.StructureVersionInfo({
        introduced: "6.9.0",
        deleted: "7.21.0",
        deletionMessage: "Use 'MicroflowParameterValue' instead"
    }, internal.StructureType.Element);
    microflows.MicroflowJavaActionParameterValue = MicroflowJavaActionParameterValue;
    class MicroflowObjectCollection extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__objects = new internal.PartListProperty(MicroflowObjectCollection, this, "objects", []);
            if (arguments.length < 4) {
                throw new Error("new MicroflowObjectCollection() cannot be invoked directly, please use 'model.microflows.createMicroflowObjectCollection()'");
            }
        }
        get containerAsLoopedActivity() {
            return super.getContainerAs(LoopedActivity);
        }
        get containerAsMicroflowBase() {
            return super.getContainerAs(MicroflowBase);
        }
        get objects() {
            return this.__objects.get();
        }
        /**
         * Creates and returns a new MicroflowObjectCollection instance in the SDK and on the server.
         * The new MicroflowObjectCollection will be automatically stored in the 'objectCollection' property
         * of the parent LoopedActivity element passed as argument.
         */
        static createInLoopedActivityUnderObjectCollection(container) {
            return internal.instancehelpers.createElement(container, MicroflowObjectCollection, "objectCollection", false);
        }
        /**
         * Creates and returns a new MicroflowObjectCollection instance in the SDK and on the server.
         * The new MicroflowObjectCollection will be automatically stored in the 'objectCollection' property
         * of the parent MicroflowBase element passed as argument.
         */
        static createInMicroflowBaseUnderObjectCollection(container) {
            return internal.instancehelpers.createElement(container, MicroflowObjectCollection, "objectCollection", false);
        }
        /**
         * Creates and returns a new MicroflowObjectCollection instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, MicroflowObjectCollection);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    MicroflowObjectCollection.structureTypeName = "Microflows$MicroflowObjectCollection";
    MicroflowObjectCollection.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    microflows.MicroflowObjectCollection = MicroflowObjectCollection;
    class MicroflowParameterBase extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__name = new internal.PrimitiveProperty(MicroflowParameterBase, this, "name", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__type = new internal.PrimitiveProperty(MicroflowParameterBase, this, "type", "Unknown", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__parameterType = new internal.PartProperty(MicroflowParameterBase, this, "parameterType", null, true);
            if (arguments.length < 4) {
                throw new Error("new MicroflowParameterBase() cannot be invoked directly, please use 'model.microflows.createMicroflowParameterBase()'");
            }
        }
        get containerAsMicroflow() {
            return super.getContainerAs(Microflow);
        }
        get containerAsRule() {
            return super.getContainerAs(Rule);
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
    MicroflowParameterBase.structureTypeName = "Microflows$MicroflowParameterBase";
    MicroflowParameterBase.versionInfo = new exports.StructureVersionInfo({
        properties: {
            name: {
                public: {
                    currentValue: true
                }
            },
            type: {
                deleted: "7.9.0",
                deletionMessage: "Use property 'parameterType' instead",
                public: {
                    currentValue: true
                }
            },
            parameterType: {
                introduced: "7.9.0",
                public: {
                    currentValue: true
                },
                required: {
                    currentValue: true
                }
            }
        },
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    microflows.MicroflowParameterBase = MicroflowParameterBase;
    /**
     * See: {@link https://docs.mendix.com/refguide/parameter relevant section in reference guide}
     */
    class MicroflowParameter extends MicroflowParameterBase {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new MicroflowParameter() cannot be invoked directly, please use 'model.microflows.createMicroflowParameter()'");
            }
        }
        get containerAsMicroflow() {
            return super.getContainerAs(Microflow);
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
    MicroflowParameter.structureTypeName = "Microflows$MicroflowParameter";
    MicroflowParameter.versionInfo = new exports.StructureVersionInfo({
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    microflows.MicroflowParameter = MicroflowParameter;
    class MicroflowParameterObject extends MicroflowObject {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__name = new internal.PrimitiveProperty(MicroflowParameterObject, this, "name", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__type = new internal.PrimitiveProperty(MicroflowParameterObject, this, "type", "Unknown", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__variableType = new internal.PartProperty(MicroflowParameterObject, this, "variableType", null, true);
            /** @internal */
            this.__documentation = new internal.PrimitiveProperty(MicroflowParameterObject, this, "documentation", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__hasVariableNameBeenChanged = new internal.PrimitiveProperty(MicroflowParameterObject, this, "hasVariableNameBeenChanged", false, internal.PrimitiveTypeEnum.Boolean);
            if (arguments.length < 4) {
                throw new Error("new MicroflowParameterObject() cannot be invoked directly, please use 'model.microflows.createMicroflowParameterObject()'");
            }
        }
        get containerAsMicroflowObjectCollection() {
            return super.getContainerAs(MicroflowObjectCollection);
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
        get variableType() {
            return this.__variableType.get();
        }
        set variableType(newValue) {
            this.__variableType.set(newValue);
        }
        get documentation() {
            return this.__documentation.get();
        }
        set documentation(newValue) {
            this.__documentation.set(newValue);
        }
        /**
         * In version 9.17.0: introduced
         */
        get hasVariableNameBeenChanged() {
            return this.__hasVariableNameBeenChanged.get();
        }
        set hasVariableNameBeenChanged(newValue) {
            this.__hasVariableNameBeenChanged.set(newValue);
        }
        /**
         * Creates and returns a new MicroflowParameterObject instance in the SDK and on the server.
         * The new MicroflowParameterObject will be automatically stored in the 'objects' property
         * of the parent MicroflowObjectCollection element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, MicroflowParameterObject, "objects", true);
        }
        /**
         * Creates and returns a new MicroflowParameterObject instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, MicroflowParameterObject);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.size = { width: 30, height: 30 };
            if (this.__type.isAvailable) {
                this.type = "Unknown";
            }
            if (this.__variableType.isAvailable) {
                this.variableType = datatypes_1.datatypes.UnknownType.create(this.model);
            }
        }
    }
    MicroflowParameterObject.structureTypeName = "Microflows$MicroflowParameterObject";
    MicroflowParameterObject.versionInfo = new exports.StructureVersionInfo({
        properties: {
            type: {
                deleted: "7.9.0",
                deletionMessage: "Use property 'variableType' instead"
            },
            variableType: {
                introduced: "7.9.0",
                required: {
                    currentValue: true
                }
            },
            hasVariableNameBeenChanged: {
                introduced: "9.17.0"
            }
        }
    }, internal.StructureType.Element);
    microflows.MicroflowParameterObject = MicroflowParameterObject;
    /**
     * In version 7.21.0: introduced
     */
    class MicroflowParameterValue extends ExpressionBasedCodeActionParameterValue {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__microflow = new internal.ByNameReferenceProperty(MicroflowParameterValue, this, "microflow", null, "Microflows$Microflow");
            if (arguments.length < 4) {
                throw new Error("new MicroflowParameterValue() cannot be invoked directly, please use 'model.microflows.createMicroflowParameterValue()'");
            }
        }
        get containerAsJavaActionParameterMapping() {
            return super.getContainerAs(JavaActionParameterMapping);
        }
        get containerAsJavaScriptActionParameterMapping() {
            return super.getContainerAs(JavaScriptActionParameterMapping);
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
         * Creates and returns a new MicroflowParameterValue instance in the SDK and on the server.
         * The new MicroflowParameterValue will be automatically stored in the 'parameterValue' property
         * of the parent JavaActionParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInJavaActionParameterMappingUnderParameterValue(container) {
            internal.createInVersionCheck(container.model, MicroflowParameterValue.structureTypeName, { start: "7.21.0" });
            return internal.instancehelpers.createElement(container, MicroflowParameterValue, "parameterValue", false);
        }
        /**
         * Creates and returns a new MicroflowParameterValue instance in the SDK and on the server.
         * The new MicroflowParameterValue will be automatically stored in the 'parameterValue' property
         * of the parent JavaScriptActionParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInJavaScriptActionParameterMappingUnderParameterValue(container) {
            internal.createInVersionCheck(container.model, MicroflowParameterValue.structureTypeName, { start: "7.21.0" });
            return internal.instancehelpers.createElement(container, MicroflowParameterValue, "parameterValue", false);
        }
        /**
         * Creates and returns a new MicroflowParameterValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, MicroflowParameterValue);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    MicroflowParameterValue.structureTypeName = "Microflows$MicroflowParameterValue";
    MicroflowParameterValue.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.21.0"
    }, internal.StructureType.Element);
    microflows.MicroflowParameterValue = MicroflowParameterValue;
    /**
     * See: {@link https://docs.mendix.com/refguide/nanoflows relevant section in reference guide}
     *
     * In version 7.12.0: removed experimental
     * In version 7.10.0: introduced
     */
    class Nanoflow extends MicroflowBase {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            /** @internal */
            this.__allowedModuleRoles = new internal.ByNameReferenceListProperty(Nanoflow, this, "allowedModuleRoles", [], "Security$ModuleRole");
            this._containmentName = "documents";
        }
        get containerAsFolderBase() {
            return super.getContainerAs(projects_1.projects.FolderBase);
        }
        /**
         * In version 7.23.0: added public
         */
        get allowedModuleRoles() {
            return this.__allowedModuleRoles.get();
        }
        get allowedModuleRolesQualifiedNames() {
            return this.__allowedModuleRoles.qualifiedNames();
        }
        /**
         * Creates a new Nanoflow unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container) {
            return internal.instancehelpers.createUnit(container, Nanoflow);
        }
        /** @internal */
        _isByNameReferrable() {
            return this.__name.isAvailable;
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__microflowReturnType.isAvailable) {
                this.microflowReturnType = datatypes_1.datatypes.VoidType.create(this.model);
            }
        }
    }
    Nanoflow.structureTypeName = "Microflows$Nanoflow";
    Nanoflow.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.10.0",
        properties: {
            allowedModuleRoles: {
                public: {
                    currentValue: true,
                    changedIn: ["7.23.0"]
                }
            }
        },
        experimental: {
            currentValue: false,
            changedIn: ["7.12.0"]
        }
    }, internal.StructureType.ModelUnit);
    microflows.Nanoflow = Nanoflow;
    /**
     * In version 8.0.0: introduced
     */
    class NanoflowCall extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__nanoflow = new internal.ByNameReferenceProperty(NanoflowCall, this, "nanoflow", null, "Microflows$Nanoflow");
            /** @internal */
            this.__parameterMappings = new internal.PartListProperty(NanoflowCall, this, "parameterMappings", []);
            if (arguments.length < 4) {
                throw new Error("new NanoflowCall() cannot be invoked directly, please use 'model.microflows.createNanoflowCall()'");
            }
        }
        get containerAsNanoflowCallAction() {
            return super.getContainerAs(NanoflowCallAction);
        }
        get nanoflow() {
            return this.__nanoflow.get();
        }
        set nanoflow(newValue) {
            this.__nanoflow.set(newValue);
        }
        get nanoflowQualifiedName() {
            return this.__nanoflow.qualifiedName();
        }
        get parameterMappings() {
            return this.__parameterMappings.get();
        }
        /**
         * Creates and returns a new NanoflowCall instance in the SDK and on the server.
         * The new NanoflowCall will be automatically stored in the 'nanoflowCall' property
         * of the parent NanoflowCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, NanoflowCall.structureTypeName, { start: "8.0.0" });
            return internal.instancehelpers.createElement(container, NanoflowCall, "nanoflowCall", false);
        }
        /**
         * Creates and returns a new NanoflowCall instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, NanoflowCall);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    NanoflowCall.structureTypeName = "Microflows$NanoflowCall";
    NanoflowCall.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.0.0"
    }, internal.StructureType.Element);
    microflows.NanoflowCall = NanoflowCall;
    /**
     * In version 8.0.0: introduced
     */
    class NanoflowCallAction extends MicroflowAction {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__nanoflowCall = new internal.PartProperty(NanoflowCallAction, this, "nanoflowCall", null, true);
            /** @internal */
            this.__useReturnVariable = new internal.PrimitiveProperty(NanoflowCallAction, this, "useReturnVariable", true, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__outputVariableName = new internal.PrimitiveProperty(NanoflowCallAction, this, "outputVariableName", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new NanoflowCallAction() cannot be invoked directly, please use 'model.microflows.createNanoflowCallAction()'");
            }
        }
        get containerAsActionActivity() {
            return super.getContainerAs(ActionActivity);
        }
        get nanoflowCall() {
            return this.__nanoflowCall.get();
        }
        set nanoflowCall(newValue) {
            this.__nanoflowCall.set(newValue);
        }
        get useReturnVariable() {
            return this.__useReturnVariable.get();
        }
        set useReturnVariable(newValue) {
            this.__useReturnVariable.set(newValue);
        }
        get outputVariableName() {
            return this.__outputVariableName.get();
        }
        set outputVariableName(newValue) {
            this.__outputVariableName.set(newValue);
        }
        /**
         * Creates and returns a new NanoflowCallAction instance in the SDK and on the server.
         * The new NanoflowCallAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, NanoflowCallAction.structureTypeName, { start: "8.0.0" });
            return internal.instancehelpers.createElement(container, NanoflowCallAction, "action", false);
        }
        /**
         * Creates and returns a new NanoflowCallAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, NanoflowCallAction);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.nanoflowCall = NanoflowCall.create(this.model);
            this.useReturnVariable = true;
        }
    }
    NanoflowCallAction.structureTypeName = "Microflows$NanoflowCallAction";
    NanoflowCallAction.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.0.0",
        properties: {
            nanoflowCall: {
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    microflows.NanoflowCallAction = NanoflowCallAction;
    /**
     * In version 8.0.0: introduced
     */
    class NanoflowCallParameterMapping extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__parameter = new internal.ByNameReferenceProperty(NanoflowCallParameterMapping, this, "parameter", null, "Microflows$NanoflowParameter");
            /** @internal */
            this.__argument = new internal.PrimitiveProperty(NanoflowCallParameterMapping, this, "argument", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__argumentModel = new internal.PartProperty(NanoflowCallParameterMapping, this, "argumentModel", null, true);
            if (arguments.length < 4) {
                throw new Error("new NanoflowCallParameterMapping() cannot be invoked directly, please use 'model.microflows.createNanoflowCallParameterMapping()'");
            }
        }
        get containerAsNanoflowCall() {
            return super.getContainerAs(NanoflowCall);
        }
        get parameter() {
            return this.__parameter.get();
        }
        set parameter(newValue) {
            this.__parameter.set(newValue);
        }
        get parameterQualifiedName() {
            return this.__parameter.qualifiedName();
        }
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get argument() {
            return this.__argument.get();
        }
        set argument(newValue) {
            this.__argument.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.8.0: deleted
         */
        get argumentModel() {
            return this.__argumentModel.get();
        }
        set argumentModel(newValue) {
            this.__argumentModel.set(newValue);
        }
        /**
         * Creates and returns a new NanoflowCallParameterMapping instance in the SDK and on the server.
         * The new NanoflowCallParameterMapping will be automatically stored in the 'parameterMappings' property
         * of the parent NanoflowCall element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, NanoflowCallParameterMapping.structureTypeName, { start: "8.0.0" });
            return internal.instancehelpers.createElement(container, NanoflowCallParameterMapping, "parameterMappings", true);
        }
        /**
         * Creates and returns a new NanoflowCallParameterMapping instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, NanoflowCallParameterMapping);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__argumentModel.isAvailable) {
                this.argumentModel = expressions_1.expressions.NoExpression.create(this.model);
            }
        }
    }
    NanoflowCallParameterMapping.structureTypeName = "Microflows$NanoflowCallParameterMapping";
    NanoflowCallParameterMapping.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.0.0",
        properties: {
            parameter: {
                required: {
                    currentValue: true
                }
            },
            argumentModel: {
                deleted: "9.8.0",
                deletionMessage: null,
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    microflows.NanoflowCallParameterMapping = NanoflowCallParameterMapping;
    /**
     * In version 7.19.0: introduced
     */
    class NanoflowParameter extends MicroflowParameterBase {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new NanoflowParameter() cannot be invoked directly, please use 'model.microflows.createNanoflowParameter()'");
            }
        }
        /**
         * Creates and returns a new NanoflowParameter instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, NanoflowParameter);
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
    NanoflowParameter.structureTypeName = "Microflows$NanoflowParameter";
    NanoflowParameter.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.19.0",
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    microflows.NanoflowParameter = NanoflowParameter;
    class NoCase extends CaseValue {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new NoCase() cannot be invoked directly, please use 'model.microflows.createNoCase()'");
            }
        }
        get containerAsSequenceFlow() {
            return super.getContainerAs(SequenceFlow);
        }
        /**
         * Creates and returns a new NoCase instance in the SDK and on the server.
         * The new NoCase will be automatically stored in the 'caseValue' property
         * of the parent SequenceFlow element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, NoCase, "caseValue", false);
        }
        /**
         * Creates and returns a new NoCase instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, NoCase);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    NoCase.structureTypeName = "Microflows$NoCase";
    NoCase.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    microflows.NoCase = NoCase;
    /**
     * See: {@link https://docs.mendix.com/refguide/show-task-page relevant section in reference guide}
     *
     * In version 9.0.5: removed experimental
     * In version 9.0.2: introduced
     */
    class OpenUserTaskAction extends MicroflowAction {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__userTaskVariable = new internal.PrimitiveProperty(OpenUserTaskAction, this, "userTaskVariable", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new OpenUserTaskAction() cannot be invoked directly, please use 'model.microflows.createOpenUserTaskAction()'");
            }
        }
        get containerAsActionActivity() {
            return super.getContainerAs(ActionActivity);
        }
        get userTaskVariable() {
            return this.__userTaskVariable.get();
        }
        set userTaskVariable(newValue) {
            this.__userTaskVariable.set(newValue);
        }
        /**
         * Creates and returns a new OpenUserTaskAction instance in the SDK and on the server.
         * The new OpenUserTaskAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.2 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, OpenUserTaskAction.structureTypeName, { start: "9.0.2" });
            return internal.instancehelpers.createElement(container, OpenUserTaskAction, "action", false);
        }
        /**
         * Creates and returns a new OpenUserTaskAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, OpenUserTaskAction);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    OpenUserTaskAction.structureTypeName = "Microflows$OpenUserTaskAction";
    OpenUserTaskAction.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.0.2",
        experimental: {
            currentValue: false,
            changedIn: ["9.0.5"]
        }
    }, internal.StructureType.Element);
    microflows.OpenUserTaskAction = OpenUserTaskAction;
    /**
     * See: {@link https://docs.mendix.com/refguide/show-workflow-page relevant section in reference guide}
     *
     * In version 9.0.5: removed experimental
     * In version 9.0.2: introduced
     */
    class OpenWorkflowAction extends MicroflowAction {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__workflowVariable = new internal.PrimitiveProperty(OpenWorkflowAction, this, "workflowVariable", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new OpenWorkflowAction() cannot be invoked directly, please use 'model.microflows.createOpenWorkflowAction()'");
            }
        }
        get containerAsActionActivity() {
            return super.getContainerAs(ActionActivity);
        }
        get workflowVariable() {
            return this.__workflowVariable.get();
        }
        set workflowVariable(newValue) {
            this.__workflowVariable.set(newValue);
        }
        /**
         * Creates and returns a new OpenWorkflowAction instance in the SDK and on the server.
         * The new OpenWorkflowAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.2 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, OpenWorkflowAction.structureTypeName, { start: "9.0.2" });
            return internal.instancehelpers.createElement(container, OpenWorkflowAction, "action", false);
        }
        /**
         * Creates and returns a new OpenWorkflowAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, OpenWorkflowAction);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    OpenWorkflowAction.structureTypeName = "Microflows$OpenWorkflowAction";
    OpenWorkflowAction.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.0.2",
        experimental: {
            currentValue: false,
            changedIn: ["9.0.5"]
        }
    }, internal.StructureType.Element);
    microflows.OpenWorkflowAction = OpenWorkflowAction;
    /**
     * In version 9.12.0: removed experimental
     * In version 9.3.0: introduced
     */
    class PauseOperation extends WorkflowOperation {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__workflowVariable = new internal.PrimitiveProperty(PauseOperation, this, "workflowVariable", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new PauseOperation() cannot be invoked directly, please use 'model.microflows.createPauseOperation()'");
            }
        }
        get containerAsWorkflowOperationAction() {
            return super.getContainerAs(WorkflowOperationAction);
        }
        get workflowVariable() {
            return this.__workflowVariable.get();
        }
        set workflowVariable(newValue) {
            this.__workflowVariable.set(newValue);
        }
        /**
         * Creates and returns a new PauseOperation instance in the SDK and on the server.
         * The new PauseOperation will be automatically stored in the 'operation' property
         * of the parent WorkflowOperationAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.3.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, PauseOperation.structureTypeName, { start: "9.3.0" });
            return internal.instancehelpers.createElement(container, PauseOperation, "operation", false);
        }
        /**
         * Creates and returns a new PauseOperation instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, PauseOperation);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    PauseOperation.structureTypeName = "Microflows$PauseOperation";
    PauseOperation.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.3.0",
        experimental: {
            currentValue: false,
            changedIn: ["9.12.0"]
        }
    }, internal.StructureType.Element);
    microflows.PauseOperation = PauseOperation;
    /**
     * In version 8.6.0: introduced
     */
    class TypedTemplateArgument extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new TypedTemplateArgument() cannot be invoked directly, please use 'model.microflows.createTypedTemplateArgument()'");
            }
        }
        get containerAsTypedTemplate() {
            return super.getContainerAs(TypedTemplate);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    TypedTemplateArgument.structureTypeName = "Microflows$TypedTemplateArgument";
    TypedTemplateArgument.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.6.0"
    }, internal.StructureType.Element);
    microflows.TypedTemplateArgument = TypedTemplateArgument;
    /**
     * In version 8.6.0: introduced
     */
    class PrimitiveTypedTemplateArgument extends TypedTemplateArgument {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__expression = new internal.PrimitiveProperty(PrimitiveTypedTemplateArgument, this, "expression", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__type = new internal.EnumProperty(PrimitiveTypedTemplateArgument, this, "type", TypedTemplateArgumentType.String, TypedTemplateArgumentType);
            if (arguments.length < 4) {
                throw new Error("new PrimitiveTypedTemplateArgument() cannot be invoked directly, please use 'model.microflows.createPrimitiveTypedTemplateArgument()'");
            }
        }
        get containerAsTypedTemplate() {
            return super.getContainerAs(TypedTemplate);
        }
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get expression() {
            return this.__expression.get();
        }
        set expression(newValue) {
            this.__expression.set(newValue);
        }
        get type() {
            return this.__type.get();
        }
        set type(newValue) {
            this.__type.set(newValue);
        }
        /**
         * Creates and returns a new PrimitiveTypedTemplateArgument instance in the SDK and on the server.
         * The new PrimitiveTypedTemplateArgument will be automatically stored in the 'arguments' property
         * of the parent TypedTemplate element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.6.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, PrimitiveTypedTemplateArgument.structureTypeName, { start: "8.6.0" });
            return internal.instancehelpers.createElement(container, PrimitiveTypedTemplateArgument, "arguments", true);
        }
        /**
         * Creates and returns a new PrimitiveTypedTemplateArgument instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, PrimitiveTypedTemplateArgument);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.type = TypedTemplateArgumentType.String;
        }
    }
    PrimitiveTypedTemplateArgument.structureTypeName = "Microflows$PrimitiveTypedTemplateArgument";
    PrimitiveTypedTemplateArgument.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.6.0"
    }, internal.StructureType.Element);
    microflows.PrimitiveTypedTemplateArgument = PrimitiveTypedTemplateArgument;
    /**
     * In version 7.15.0: introduced
     */
    class ProxyConfiguration extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__usernameExpression = new internal.PrimitiveProperty(ProxyConfiguration, this, "usernameExpression", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__usernameExpressionModel = new internal.PartProperty(ProxyConfiguration, this, "usernameExpressionModel", null, false);
            /** @internal */
            this.__passwordExpression = new internal.PrimitiveProperty(ProxyConfiguration, this, "passwordExpression", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__passwordExpressionModel = new internal.PartProperty(ProxyConfiguration, this, "passwordExpressionModel", null, false);
            /** @internal */
            this.__hostExpression = new internal.PrimitiveProperty(ProxyConfiguration, this, "hostExpression", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__hostExpressionModel = new internal.PartProperty(ProxyConfiguration, this, "hostExpressionModel", null, false);
            /** @internal */
            this.__portExpression = new internal.PrimitiveProperty(ProxyConfiguration, this, "portExpression", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__portExpressionModel = new internal.PartProperty(ProxyConfiguration, this, "portExpressionModel", null, false);
            /** @internal */
            this.__useConfigurationExpression = new internal.PrimitiveProperty(ProxyConfiguration, this, "useConfigurationExpression", "true", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__useConfigurationExpressionModel = new internal.PartProperty(ProxyConfiguration, this, "useConfigurationExpressionModel", null, false);
            if (arguments.length < 4) {
                throw new Error("new ProxyConfiguration() cannot be invoked directly, please use 'model.microflows.createProxyConfiguration()'");
            }
        }
        get containerAsRestCallAction() {
            return super.getContainerAs(RestCallAction);
        }
        get containerAsWebServiceCallAction() {
            return super.getContainerAs(WebServiceCallAction);
        }
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get usernameExpression() {
            return this.__usernameExpression.get();
        }
        set usernameExpression(newValue) {
            this.__usernameExpression.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.8.0: deleted
         */
        get usernameExpressionModel() {
            return this.__usernameExpressionModel.get();
        }
        set usernameExpressionModel(newValue) {
            this.__usernameExpressionModel.set(newValue);
        }
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get passwordExpression() {
            return this.__passwordExpression.get();
        }
        set passwordExpression(newValue) {
            this.__passwordExpression.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.8.0: deleted
         */
        get passwordExpressionModel() {
            return this.__passwordExpressionModel.get();
        }
        set passwordExpressionModel(newValue) {
            this.__passwordExpressionModel.set(newValue);
        }
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get hostExpression() {
            return this.__hostExpression.get();
        }
        set hostExpression(newValue) {
            this.__hostExpression.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.8.0: deleted
         */
        get hostExpressionModel() {
            return this.__hostExpressionModel.get();
        }
        set hostExpressionModel(newValue) {
            this.__hostExpressionModel.set(newValue);
        }
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get portExpression() {
            return this.__portExpression.get();
        }
        set portExpression(newValue) {
            this.__portExpression.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.8.0: deleted
         */
        get portExpressionModel() {
            return this.__portExpressionModel.get();
        }
        set portExpressionModel(newValue) {
            this.__portExpressionModel.set(newValue);
        }
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get useConfigurationExpression() {
            return this.__useConfigurationExpression.get();
        }
        set useConfigurationExpression(newValue) {
            this.__useConfigurationExpression.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.8.0: deleted
         */
        get useConfigurationExpressionModel() {
            return this.__useConfigurationExpressionModel.get();
        }
        set useConfigurationExpressionModel(newValue) {
            this.__useConfigurationExpressionModel.set(newValue);
        }
        /**
         * Creates and returns a new ProxyConfiguration instance in the SDK and on the server.
         * The new ProxyConfiguration will be automatically stored in the 'proxyConfiguration' property
         * of the parent RestCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInRestCallActionUnderProxyConfiguration(container) {
            internal.createInVersionCheck(container.model, ProxyConfiguration.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, ProxyConfiguration, "proxyConfiguration", false);
        }
        /**
         * Creates and returns a new ProxyConfiguration instance in the SDK and on the server.
         * The new ProxyConfiguration will be automatically stored in the 'proxyConfiguration' property
         * of the parent WebServiceCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInWebServiceCallActionUnderProxyConfiguration(container) {
            internal.createInVersionCheck(container.model, ProxyConfiguration.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, ProxyConfiguration, "proxyConfiguration", false);
        }
        /**
         * Creates and returns a new ProxyConfiguration instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ProxyConfiguration);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.useConfigurationExpression = "true";
        }
    }
    ProxyConfiguration.structureTypeName = "Microflows$ProxyConfiguration";
    ProxyConfiguration.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.15.0",
        properties: {
            usernameExpressionModel: {
                deleted: "9.8.0",
                deletionMessage: null
            },
            passwordExpressionModel: {
                deleted: "9.8.0",
                deletionMessage: null
            },
            hostExpressionModel: {
                deleted: "9.8.0",
                deletionMessage: null
            },
            portExpressionModel: {
                deleted: "9.8.0",
                deletionMessage: null
            },
            useConfigurationExpressionModel: {
                deleted: "9.8.0",
                deletionMessage: null
            }
        }
    }, internal.StructureType.Element);
    microflows.ProxyConfiguration = ProxyConfiguration;
    /**
     * In version 8.4.0: introduced
     */
    class PushToClientAction extends MicroflowAction {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__dataVariableName = new internal.PrimitiveProperty(PushToClientAction, this, "dataVariableName", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new PushToClientAction() cannot be invoked directly, please use 'model.microflows.createPushToClientAction()'");
            }
        }
        get containerAsActionActivity() {
            return super.getContainerAs(ActionActivity);
        }
        get dataVariableName() {
            return this.__dataVariableName.get();
        }
        set dataVariableName(newValue) {
            this.__dataVariableName.set(newValue);
        }
        /**
         * Creates and returns a new PushToClientAction instance in the SDK and on the server.
         * The new PushToClientAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.4.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, PushToClientAction.structureTypeName, { start: "8.4.0" });
            return internal.instancehelpers.createElement(container, PushToClientAction, "action", false);
        }
        /**
         * Creates and returns a new PushToClientAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, PushToClientAction);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    PushToClientAction.structureTypeName = "Microflows$PushToClientAction";
    PushToClientAction.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.4.0"
    }, internal.StructureType.Element);
    microflows.PushToClientAction = PushToClientAction;
    /**
     * See: {@link https://docs.mendix.com/refguide/call-rest-action relevant section in reference guide}
     *
     * In version 6.6.0: introduced
     */
    class RestCallAction extends MicroflowAction {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__httpConfiguration = new internal.PartProperty(RestCallAction, this, "httpConfiguration", null, true);
            /** @internal */
            this.__requestHandling = new internal.PartProperty(RestCallAction, this, "requestHandling", null, true);
            /** @internal */
            this.__requestHandlingType = new internal.EnumProperty(RestCallAction, this, "requestHandlingType", RequestHandlingType.Custom, RequestHandlingType);
            /** @internal */
            this.__resultHandling = new internal.PartProperty(RestCallAction, this, "resultHandling", null, true);
            /** @internal */
            this.__resultHandlingType = new internal.EnumProperty(RestCallAction, this, "resultHandlingType", ResultHandlingType.None, ResultHandlingType);
            /** @internal */
            this.__errorResultHandlingType = new internal.EnumProperty(RestCallAction, this, "errorResultHandlingType", ErrorResultHandlingType.HttpResponse, ErrorResultHandlingType);
            /** @internal */
            this.__useRequestTimeOut = new internal.PrimitiveProperty(RestCallAction, this, "useRequestTimeOut", true, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__timeOut = new internal.PrimitiveProperty(RestCallAction, this, "timeOut", 30, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__timeOutModel = new internal.PartProperty(RestCallAction, this, "timeOutModel", null, true);
            /** @internal */
            this.__timeOutExpression = new internal.PrimitiveProperty(RestCallAction, this, "timeOutExpression", "300", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__requestProxyType = new internal.EnumProperty(RestCallAction, this, "requestProxyType", RequestProxyType.DefaultProxy, RequestProxyType);
            /** @internal */
            this.__proxyConfiguration = new internal.PartProperty(RestCallAction, this, "proxyConfiguration", null, false);
            if (arguments.length < 4) {
                throw new Error("new RestCallAction() cannot be invoked directly, please use 'model.microflows.createRestCallAction()'");
            }
        }
        get containerAsActionActivity() {
            return super.getContainerAs(ActionActivity);
        }
        get httpConfiguration() {
            return this.__httpConfiguration.get();
        }
        set httpConfiguration(newValue) {
            this.__httpConfiguration.set(newValue);
        }
        get requestHandling() {
            return this.__requestHandling.get();
        }
        set requestHandling(newValue) {
            this.__requestHandling.set(newValue);
        }
        /**
         * In version 6.9.0: introduced
         */
        get requestHandlingType() {
            return this.__requestHandlingType.get();
        }
        set requestHandlingType(newValue) {
            this.__requestHandlingType.set(newValue);
        }
        get resultHandling() {
            return this.__resultHandling.get();
        }
        set resultHandling(newValue) {
            this.__resultHandling.set(newValue);
        }
        /**
         * In version 6.9.0: introduced
         */
        get resultHandlingType() {
            return this.__resultHandlingType.get();
        }
        set resultHandlingType(newValue) {
            this.__resultHandlingType.set(newValue);
        }
        /**
         * In version 7.0.2: introduced
         */
        get errorResultHandlingType() {
            return this.__errorResultHandlingType.get();
        }
        set errorResultHandlingType(newValue) {
            this.__errorResultHandlingType.set(newValue);
        }
        /**
         * In version 7.1.0: introduced
         */
        get useRequestTimeOut() {
            return this.__useRequestTimeOut.get();
        }
        set useRequestTimeOut(newValue) {
            this.__useRequestTimeOut.set(newValue);
        }
        /**
         * In version 7.15.0: deleted
         * In version 7.1.0: introduced
         */
        get timeOut() {
            return this.__timeOut.get();
        }
        set timeOut(newValue) {
            this.__timeOut.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.8.0: deleted
         * In version 7.15.0: introduced
         */
        get timeOutModel() {
            return this.__timeOutModel.get();
        }
        set timeOutModel(newValue) {
            this.__timeOutModel.set(newValue);
        }
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         *
         * In version 7.15.0: introduced
         */
        get timeOutExpression() {
            return this.__timeOutExpression.get();
        }
        set timeOutExpression(newValue) {
            this.__timeOutExpression.set(newValue);
        }
        /**
         * In version 7.15.0: introduced
         */
        get requestProxyType() {
            return this.__requestProxyType.get();
        }
        set requestProxyType(newValue) {
            this.__requestProxyType.set(newValue);
        }
        /**
         * In version 7.15.0: introduced
         */
        get proxyConfiguration() {
            return this.__proxyConfiguration.get();
        }
        set proxyConfiguration(newValue) {
            this.__proxyConfiguration.set(newValue);
        }
        /**
         * Creates and returns a new RestCallAction instance in the SDK and on the server.
         * The new RestCallAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, RestCallAction.structureTypeName, { start: "6.6.0" });
            return internal.instancehelpers.createElement(container, RestCallAction, "action", false);
        }
        /**
         * Creates and returns a new RestCallAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, RestCallAction);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__errorResultHandlingType.isAvailable) {
                this.errorResultHandlingType = ErrorResultHandlingType.HttpResponse;
            }
            this.httpConfiguration = HttpConfiguration.create(this.model);
            this.requestHandling = CustomRequestHandling.create(this.model);
            if (this.__requestHandlingType.isAvailable) {
                this.requestHandlingType = RequestHandlingType.Custom;
            }
            if (this.__requestProxyType.isAvailable) {
                this.requestProxyType = RequestProxyType.DefaultProxy;
            }
            this.resultHandling = ResultHandling.create(this.model);
            if (this.__resultHandlingType.isAvailable) {
                this.resultHandlingType = ResultHandlingType.None;
            }
            if (this.__timeOut.isAvailable) {
                this.timeOut = 30;
            }
            if (this.__timeOutExpression.isAvailable) {
                (() => {
                    if (internal.isAtLeast("8.5.0", this.model)) {
                        this.timeOutExpression = "300";
                        return;
                    }
                    this.timeOutExpression = "30";
                })();
            }
            if (this.__timeOutModel.isAvailable) {
                (() => {
                    if (internal.isAtLeast("8.5.0", this.model)) {
                        this.timeOutModel = ((integerLiteral) => {
                            integerLiteral.value = 300;
                            return integerLiteral;
                        })(expressions_1.expressions.IntegerLiteral.create(this.model));
                        return;
                    }
                    this.timeOutModel = ((integerLiteral) => {
                        integerLiteral.value = 30;
                        return integerLiteral;
                    })(expressions_1.expressions.IntegerLiteral.create(this.model));
                })();
            }
            if (this.__useRequestTimeOut.isAvailable) {
                (() => {
                    if (internal.isAtLeast("8.5.0", this.model)) {
                        this.useRequestTimeOut = true;
                        return;
                    }
                })();
            }
        }
    }
    RestCallAction.structureTypeName = "Microflows$RestCallAction";
    RestCallAction.versionInfo = new exports.StructureVersionInfo({
        introduced: "6.6.0",
        properties: {
            httpConfiguration: {
                required: {
                    currentValue: true
                }
            },
            requestHandling: {
                required: {
                    currentValue: true
                }
            },
            requestHandlingType: {
                introduced: "6.9.0"
            },
            resultHandling: {
                required: {
                    currentValue: true
                }
            },
            resultHandlingType: {
                introduced: "6.9.0"
            },
            errorResultHandlingType: {
                introduced: "7.0.2"
            },
            useRequestTimeOut: {
                introduced: "7.1.0"
            },
            timeOut: {
                introduced: "7.1.0",
                deleted: "7.15.0",
                deletionMessage: null
            },
            timeOutModel: {
                introduced: "7.15.0",
                deleted: "9.8.0",
                deletionMessage: null,
                required: {
                    currentValue: true
                }
            },
            timeOutExpression: {
                introduced: "7.15.0"
            },
            requestProxyType: {
                introduced: "7.15.0"
            },
            proxyConfiguration: {
                introduced: "7.15.0"
            }
        }
    }, internal.StructureType.Element);
    microflows.RestCallAction = RestCallAction;
    /**
     * In version 9.12.0: removed experimental
     * In version 9.2.0: introduced
     */
    class RestartOperation extends WorkflowOperation {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__workflowVariable = new internal.PrimitiveProperty(RestartOperation, this, "workflowVariable", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new RestartOperation() cannot be invoked directly, please use 'model.microflows.createRestartOperation()'");
            }
        }
        get containerAsWorkflowOperationAction() {
            return super.getContainerAs(WorkflowOperationAction);
        }
        get workflowVariable() {
            return this.__workflowVariable.get();
        }
        set workflowVariable(newValue) {
            this.__workflowVariable.set(newValue);
        }
        /**
         * Creates and returns a new RestartOperation instance in the SDK and on the server.
         * The new RestartOperation will be automatically stored in the 'operation' property
         * of the parent WorkflowOperationAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.2.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, RestartOperation.structureTypeName, { start: "9.2.0" });
            return internal.instancehelpers.createElement(container, RestartOperation, "operation", false);
        }
        /**
         * Creates and returns a new RestartOperation instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, RestartOperation);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    RestartOperation.structureTypeName = "Microflows$RestartOperation";
    RestartOperation.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.2.0",
        experimental: {
            currentValue: false,
            changedIn: ["9.12.0"]
        }
    }, internal.StructureType.Element);
    microflows.RestartOperation = RestartOperation;
    class ResultHandling extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__importMappingCall = new internal.PartProperty(ResultHandling, this, "importMappingCall", null, false);
            /** @internal */
            this.__storeInVariable = new internal.PrimitiveProperty(ResultHandling, this, "storeInVariable", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__outputVariableName = new internal.PrimitiveProperty(ResultHandling, this, "outputVariableName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__variableDataType = new internal.PrimitiveProperty(ResultHandling, this, "variableDataType", "Void", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__variableType = new internal.PartProperty(ResultHandling, this, "variableType", null, true);
            if (arguments.length < 4) {
                throw new Error("new ResultHandling() cannot be invoked directly, please use 'model.microflows.createResultHandling()'");
            }
        }
        get containerAsImportXmlAction() {
            return super.getContainerAs(ImportXmlAction);
        }
        get containerAsRestCallAction() {
            return super.getContainerAs(RestCallAction);
        }
        get containerAsWebServiceCallAction() {
            return super.getContainerAs(WebServiceCallAction);
        }
        get importMappingCall() {
            return this.__importMappingCall.get();
        }
        set importMappingCall(newValue) {
            this.__importMappingCall.set(newValue);
        }
        get storeInVariable() {
            return this.__storeInVariable.get();
        }
        set storeInVariable(newValue) {
            this.__storeInVariable.set(newValue);
        }
        get outputVariableName() {
            return this.__outputVariableName.get();
        }
        set outputVariableName(newValue) {
            this.__outputVariableName.set(newValue);
        }
        /**
         * The value of this property is conceptually of type dataTypes.LegacyDataType.
         *
         * In version 7.9.0: deleted
         * In version 6.10.0: introduced
         */
        get variableDataType() {
            return this.__variableDataType.get();
        }
        set variableDataType(newValue) {
            this.__variableDataType.set(newValue);
        }
        /**
         * In version 7.9.0: introduced
         */
        get variableType() {
            return this.__variableType.get();
        }
        set variableType(newValue) {
            this.__variableType.set(newValue);
        }
        /**
         * Creates and returns a new ResultHandling instance in the SDK and on the server.
         * The new ResultHandling will be automatically stored in the 'resultHandling' property
         * of the parent ImportXmlAction element passed as argument.
         */
        static createInImportXmlActionUnderResultHandling(container) {
            return internal.instancehelpers.createElement(container, ResultHandling, "resultHandling", false);
        }
        /**
         * Creates and returns a new ResultHandling instance in the SDK and on the server.
         * The new ResultHandling will be automatically stored in the 'resultHandling' property
         * of the parent RestCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 and higher
         */
        static createInRestCallActionUnderResultHandling(container) {
            internal.createInVersionCheck(container.model, ResultHandling.structureTypeName, { start: "6.6.0" });
            return internal.instancehelpers.createElement(container, ResultHandling, "resultHandling", false);
        }
        /**
         * Creates and returns a new ResultHandling instance in the SDK and on the server.
         * The new ResultHandling will be automatically stored in the 'resultHandling' property
         * of the parent WebServiceCallAction element passed as argument.
         */
        static createInWebServiceCallActionUnderResultHandling(container) {
            return internal.instancehelpers.createElement(container, ResultHandling, "resultHandling", false);
        }
        /**
         * Creates and returns a new ResultHandling instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ResultHandling);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__variableDataType.isAvailable) {
                this.variableDataType = "Void";
            }
            if (this.__variableType.isAvailable) {
                this.variableType = datatypes_1.datatypes.VoidType.create(this.model);
            }
        }
    }
    ResultHandling.structureTypeName = "Microflows$ResultHandling";
    ResultHandling.versionInfo = new exports.StructureVersionInfo({
        properties: {
            variableDataType: {
                introduced: "6.10.0",
                deleted: "7.9.0",
                deletionMessage: "Use property 'variableType' instead",
                required: {
                    currentValue: true
                }
            },
            variableType: {
                introduced: "7.9.0",
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    microflows.ResultHandling = ResultHandling;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.12.0: deleted
     * In version 9.3.0: introduced
     */
    class ResumeOperation extends WorkflowOperation {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__workflowVariable = new internal.PrimitiveProperty(ResumeOperation, this, "workflowVariable", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new ResumeOperation() cannot be invoked directly, please use 'model.microflows.createResumeOperation()'");
            }
        }
        get containerAsWorkflowOperationAction() {
            return super.getContainerAs(WorkflowOperationAction);
        }
        get workflowVariable() {
            return this.__workflowVariable.get();
        }
        set workflowVariable(newValue) {
            this.__workflowVariable.set(newValue);
        }
        /**
         * Creates and returns a new ResumeOperation instance in the SDK and on the server.
         * The new ResumeOperation will be automatically stored in the 'operation' property
         * of the parent WorkflowOperationAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.3.0 to 9.11.0
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, ResumeOperation.structureTypeName, { start: "9.3.0", end: "9.11.0" });
            return internal.instancehelpers.createElement(container, ResumeOperation, "operation", false);
        }
        /**
         * Creates and returns a new ResumeOperation instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ResumeOperation);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ResumeOperation.structureTypeName = "Microflows$ResumeOperation";
    ResumeOperation.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.3.0",
        deleted: "9.12.0",
        deletionMessage: "Use UnpauseOperation instead",
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    microflows.ResumeOperation = ResumeOperation;
    /**
     * See: {@link https://docs.mendix.com/refguide/retrieve relevant section in reference guide}
     */
    class RetrieveAction extends MicroflowAction {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__retrieveSource = new internal.PartProperty(RetrieveAction, this, "retrieveSource", null, true);
            /** @internal */
            this.__outputVariableName = new internal.PrimitiveProperty(RetrieveAction, this, "outputVariableName", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new RetrieveAction() cannot be invoked directly, please use 'model.microflows.createRetrieveAction()'");
            }
        }
        get containerAsActionActivity() {
            return super.getContainerAs(ActionActivity);
        }
        get retrieveSource() {
            return this.__retrieveSource.get();
        }
        set retrieveSource(newValue) {
            this.__retrieveSource.set(newValue);
        }
        get outputVariableName() {
            return this.__outputVariableName.get();
        }
        set outputVariableName(newValue) {
            this.__outputVariableName.set(newValue);
        }
        /**
         * Creates and returns a new RetrieveAction instance in the SDK and on the server.
         * The new RetrieveAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, RetrieveAction, "action", false);
        }
        /**
         * Creates and returns a new RetrieveAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, RetrieveAction);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.retrieveSource = AssociationRetrieveSource.create(this.model);
        }
    }
    RetrieveAction.structureTypeName = "Microflows$RetrieveAction";
    RetrieveAction.versionInfo = new exports.StructureVersionInfo({
        properties: {
            retrieveSource: {
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    microflows.RetrieveAction = RetrieveAction;
    /**
     * In version 9.12.0: introduced
     */
    class RetryOperation extends WorkflowOperation {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__workflowVariable = new internal.PrimitiveProperty(RetryOperation, this, "workflowVariable", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new RetryOperation() cannot be invoked directly, please use 'model.microflows.createRetryOperation()'");
            }
        }
        get containerAsWorkflowOperationAction() {
            return super.getContainerAs(WorkflowOperationAction);
        }
        get workflowVariable() {
            return this.__workflowVariable.get();
        }
        set workflowVariable(newValue) {
            this.__workflowVariable.set(newValue);
        }
        /**
         * Creates and returns a new RetryOperation instance in the SDK and on the server.
         * The new RetryOperation will be automatically stored in the 'operation' property
         * of the parent WorkflowOperationAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.12.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, RetryOperation.structureTypeName, { start: "9.12.0" });
            return internal.instancehelpers.createElement(container, RetryOperation, "operation", false);
        }
        /**
         * Creates and returns a new RetryOperation instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, RetryOperation);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    RetryOperation.structureTypeName = "Microflows$RetryOperation";
    RetryOperation.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.12.0"
    }, internal.StructureType.Element);
    microflows.RetryOperation = RetryOperation;
    /**
     * See: {@link https://docs.mendix.com/refguide/rollback-object relevant section in reference guide}
     */
    class RollbackAction extends MicroflowAction {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__rollbackVariableName = new internal.PrimitiveProperty(RollbackAction, this, "rollbackVariableName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__refreshInClient = new internal.PrimitiveProperty(RollbackAction, this, "refreshInClient", false, internal.PrimitiveTypeEnum.Boolean);
            if (arguments.length < 4) {
                throw new Error("new RollbackAction() cannot be invoked directly, please use 'model.microflows.createRollbackAction()'");
            }
        }
        get containerAsActionActivity() {
            return super.getContainerAs(ActionActivity);
        }
        get rollbackVariableName() {
            return this.__rollbackVariableName.get();
        }
        set rollbackVariableName(newValue) {
            this.__rollbackVariableName.set(newValue);
        }
        get refreshInClient() {
            return this.__refreshInClient.get();
        }
        set refreshInClient(newValue) {
            this.__refreshInClient.set(newValue);
        }
        /**
         * Creates and returns a new RollbackAction instance in the SDK and on the server.
         * The new RollbackAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, RollbackAction, "action", false);
        }
        /**
         * Creates and returns a new RollbackAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, RollbackAction);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    RollbackAction.structureTypeName = "Microflows$RollbackAction";
    RollbackAction.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    microflows.RollbackAction = RollbackAction;
    /**
     * See: {@link https://docs.mendix.com/refguide/rules relevant section in reference guide}
     */
    class Rule extends ServerSideMicroflow {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            this._containmentName = "documents";
        }
        get containerAsFolderBase() {
            return super.getContainerAs(projects_1.projects.FolderBase);
        }
        /**
         * Creates a new Rule unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container) {
            return internal.instancehelpers.createUnit(container, Rule);
        }
        /** @internal */
        _isByNameReferrable() {
            return this.__name.isAvailable;
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__microflowReturnType.isAvailable) {
                this.microflowReturnType = datatypes_1.datatypes.BooleanType.create(this.model);
            }
            if (this.__returnType.isAvailable) {
                (() => {
                    if (internal.isAtLeast("7.9.0", this.model)) {
                        return;
                    }
                    this.returnType = "Boolean";
                })();
            }
        }
    }
    Rule.structureTypeName = "Microflows$Rule";
    Rule.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.ModelUnit);
    microflows.Rule = Rule;
    class RuleCall extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__rule = new internal.ByNameReferenceProperty(RuleCall, this, "rule", null, "Microflows$Rule");
            /** @internal */
            this.__parameterMappings = new internal.PartListProperty(RuleCall, this, "parameterMappings", []);
            if (arguments.length < 4) {
                throw new Error("new RuleCall() cannot be invoked directly, please use 'model.microflows.createRuleCall()'");
            }
        }
        get containerAsRuleSplitCondition() {
            return super.getContainerAs(RuleSplitCondition);
        }
        get rule() {
            return this.__rule.get();
        }
        set rule(newValue) {
            this.__rule.set(newValue);
        }
        get ruleQualifiedName() {
            return this.__rule.qualifiedName();
        }
        get parameterMappings() {
            return this.__parameterMappings.get();
        }
        /**
         * Creates and returns a new RuleCall instance in the SDK and on the server.
         * The new RuleCall will be automatically stored in the 'ruleCall' property
         * of the parent RuleSplitCondition element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, RuleCall, "ruleCall", false);
        }
        /**
         * Creates and returns a new RuleCall instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, RuleCall);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    RuleCall.structureTypeName = "Microflows$RuleCall";
    RuleCall.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    microflows.RuleCall = RuleCall;
    class RuleCallParameterMapping extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__parameter = new internal.ByNameReferenceProperty(RuleCallParameterMapping, this, "parameter", null, "Microflows$RuleParameter");
            /** @internal */
            this.__argument = new internal.PrimitiveProperty(RuleCallParameterMapping, this, "argument", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__argumentModel = new internal.PartProperty(RuleCallParameterMapping, this, "argumentModel", null, true);
            if (arguments.length < 4) {
                throw new Error("new RuleCallParameterMapping() cannot be invoked directly, please use 'model.microflows.createRuleCallParameterMapping()'");
            }
        }
        get containerAsRuleCall() {
            return super.getContainerAs(RuleCall);
        }
        get parameter() {
            return this.__parameter.get();
        }
        set parameter(newValue) {
            this.__parameter.set(newValue);
        }
        get parameterQualifiedName() {
            return this.__parameter.qualifiedName();
        }
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get argument() {
            return this.__argument.get();
        }
        set argument(newValue) {
            this.__argument.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.8.0: deleted
         * In version 7.9.0: introduced
         */
        get argumentModel() {
            return this.__argumentModel.get();
        }
        set argumentModel(newValue) {
            this.__argumentModel.set(newValue);
        }
        /**
         * Creates and returns a new RuleCallParameterMapping instance in the SDK and on the server.
         * The new RuleCallParameterMapping will be automatically stored in the 'parameterMappings' property
         * of the parent RuleCall element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, RuleCallParameterMapping, "parameterMappings", true);
        }
        /**
         * Creates and returns a new RuleCallParameterMapping instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, RuleCallParameterMapping);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__argumentModel.isAvailable) {
                this.argumentModel = expressions_1.expressions.NoExpression.create(this.model);
            }
        }
    }
    RuleCallParameterMapping.structureTypeName = "Microflows$RuleCallParameterMapping";
    RuleCallParameterMapping.versionInfo = new exports.StructureVersionInfo({
        properties: {
            parameter: {
                required: {
                    currentValue: true
                }
            },
            argumentModel: {
                introduced: "7.9.0",
                deleted: "9.8.0",
                deletionMessage: null,
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    microflows.RuleCallParameterMapping = RuleCallParameterMapping;
    /**
     * See: {@link https://docs.mendix.com/refguide/parameter relevant section in reference guide}
     */
    class RuleParameter extends MicroflowParameterBase {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new RuleParameter() cannot be invoked directly, please use 'model.microflows.createRuleParameter()'");
            }
        }
        get containerAsRule() {
            return super.getContainerAs(Rule);
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
    RuleParameter.structureTypeName = "Microflows$RuleParameter";
    RuleParameter.versionInfo = new exports.StructureVersionInfo({
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    microflows.RuleParameter = RuleParameter;
    class RuleSplitCondition extends SplitCondition {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__ruleCall = new internal.PartProperty(RuleSplitCondition, this, "ruleCall", null, true);
            if (arguments.length < 4) {
                throw new Error("new RuleSplitCondition() cannot be invoked directly, please use 'model.microflows.createRuleSplitCondition()'");
            }
        }
        get containerAsExclusiveSplit() {
            return super.getContainerAs(ExclusiveSplit);
        }
        get ruleCall() {
            return this.__ruleCall.get();
        }
        set ruleCall(newValue) {
            this.__ruleCall.set(newValue);
        }
        /**
         * Creates and returns a new RuleSplitCondition instance in the SDK and on the server.
         * The new RuleSplitCondition will be automatically stored in the 'splitCondition' property
         * of the parent ExclusiveSplit element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, RuleSplitCondition, "splitCondition", false);
        }
        /**
         * Creates and returns a new RuleSplitCondition instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, RuleSplitCondition);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.ruleCall = RuleCall.create(this.model);
        }
    }
    RuleSplitCondition.structureTypeName = "Microflows$RuleSplitCondition";
    RuleSplitCondition.versionInfo = new exports.StructureVersionInfo({
        properties: {
            ruleCall: {
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    microflows.RuleSplitCondition = RuleSplitCondition;
    /**
     * See: {@link https://docs.mendix.com/refguide/send-external-object relevant section in reference guide}
     *
     * In version 9.6.0: introduced
     */
    class SendExternalObject extends MicroflowAction {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__variableNameToBeSent = new internal.PrimitiveProperty(SendExternalObject, this, "variableNameToBeSent", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__refreshInClient = new internal.PrimitiveProperty(SendExternalObject, this, "refreshInClient", false, internal.PrimitiveTypeEnum.Boolean);
            if (arguments.length < 4) {
                throw new Error("new SendExternalObject() cannot be invoked directly, please use 'model.microflows.createSendExternalObject()'");
            }
        }
        get containerAsActionActivity() {
            return super.getContainerAs(ActionActivity);
        }
        get variableNameToBeSent() {
            return this.__variableNameToBeSent.get();
        }
        set variableNameToBeSent(newValue) {
            this.__variableNameToBeSent.set(newValue);
        }
        /**
         * In version 9.7.0: introduced
         */
        get refreshInClient() {
            return this.__refreshInClient.get();
        }
        set refreshInClient(newValue) {
            this.__refreshInClient.set(newValue);
        }
        /**
         * Creates and returns a new SendExternalObject instance in the SDK and on the server.
         * The new SendExternalObject will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.6.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, SendExternalObject.structureTypeName, { start: "9.6.0" });
            return internal.instancehelpers.createElement(container, SendExternalObject, "action", false);
        }
        /**
         * Creates and returns a new SendExternalObject instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, SendExternalObject);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    SendExternalObject.structureTypeName = "Microflows$SendExternalObject";
    SendExternalObject.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.6.0",
        properties: {
            refreshInClient: {
                introduced: "9.7.0"
            }
        }
    }, internal.StructureType.Element);
    microflows.SendExternalObject = SendExternalObject;
    /**
     * See: {@link https://docs.mendix.com/refguide/sequence-flow relevant section in reference guide}
     */
    class SequenceFlow extends Flow {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__caseValue = new internal.PartProperty(SequenceFlow, this, "caseValue", null, true);
            /** @internal */
            this.__isErrorHandler = new internal.PrimitiveProperty(SequenceFlow, this, "isErrorHandler", false, internal.PrimitiveTypeEnum.Boolean);
            if (arguments.length < 4) {
                throw new Error("new SequenceFlow() cannot be invoked directly, please use 'model.microflows.createSequenceFlow()'");
            }
        }
        get containerAsMicroflowBase() {
            return super.getContainerAs(MicroflowBase);
        }
        get caseValue() {
            return this.__caseValue.get();
        }
        set caseValue(newValue) {
            this.__caseValue.set(newValue);
        }
        get isErrorHandler() {
            return this.__isErrorHandler.get();
        }
        set isErrorHandler(newValue) {
            this.__isErrorHandler.set(newValue);
        }
        /**
         * Creates and returns a new SequenceFlow instance in the SDK and on the server.
         * The new SequenceFlow will be automatically stored in the 'flows' property
         * of the parent MicroflowBase element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, SequenceFlow, "flows", true);
        }
        /**
         * Creates and returns a new SequenceFlow instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, SequenceFlow);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.caseValue = NoCase.create(this.model);
        }
    }
    SequenceFlow.structureTypeName = "Microflows$SequenceFlow";
    SequenceFlow.versionInfo = new exports.StructureVersionInfo({
        properties: {
            caseValue: {
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    microflows.SequenceFlow = SequenceFlow;
    /**
     * See: {@link https://docs.mendix.com/refguide/complete-task relevant section in reference guide}
     *
     * In version 9.0.5: removed experimental
     * In version 9.0.2: introduced
     */
    class SetTaskOutcomeAction extends MicroflowAction {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__workflowTaskVariable = new internal.PrimitiveProperty(SetTaskOutcomeAction, this, "workflowTaskVariable", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__outcome = new internal.ByNameReferenceProperty(SetTaskOutcomeAction, this, "outcome", null, "Workflows$UserTaskOutcome");
            if (arguments.length < 4) {
                throw new Error("new SetTaskOutcomeAction() cannot be invoked directly, please use 'model.microflows.createSetTaskOutcomeAction()'");
            }
        }
        get containerAsActionActivity() {
            return super.getContainerAs(ActionActivity);
        }
        get workflowTaskVariable() {
            return this.__workflowTaskVariable.get();
        }
        set workflowTaskVariable(newValue) {
            this.__workflowTaskVariable.set(newValue);
        }
        get outcome() {
            return this.__outcome.get();
        }
        set outcome(newValue) {
            this.__outcome.set(newValue);
        }
        get outcomeQualifiedName() {
            return this.__outcome.qualifiedName();
        }
        /**
         * Creates and returns a new SetTaskOutcomeAction instance in the SDK and on the server.
         * The new SetTaskOutcomeAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.2 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, SetTaskOutcomeAction.structureTypeName, { start: "9.0.2" });
            return internal.instancehelpers.createElement(container, SetTaskOutcomeAction, "action", false);
        }
        /**
         * Creates and returns a new SetTaskOutcomeAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, SetTaskOutcomeAction);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    SetTaskOutcomeAction.structureTypeName = "Microflows$SetTaskOutcomeAction";
    SetTaskOutcomeAction.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.0.2",
        experimental: {
            currentValue: false,
            changedIn: ["9.0.5"]
        }
    }, internal.StructureType.Element);
    microflows.SetTaskOutcomeAction = SetTaskOutcomeAction;
    /**
     * See: {@link https://docs.mendix.com/refguide/show-home-page relevant section in reference guide}
     */
    class ShowHomePageAction extends MicroflowAction {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new ShowHomePageAction() cannot be invoked directly, please use 'model.microflows.createShowHomePageAction()'");
            }
        }
        get containerAsActionActivity() {
            return super.getContainerAs(ActionActivity);
        }
        /**
         * Creates and returns a new ShowHomePageAction instance in the SDK and on the server.
         * The new ShowHomePageAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, ShowHomePageAction, "action", false);
        }
        /**
         * Creates and returns a new ShowHomePageAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ShowHomePageAction);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ShowHomePageAction.structureTypeName = "Microflows$ShowHomePageAction";
    ShowHomePageAction.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    microflows.ShowHomePageAction = ShowHomePageAction;
    /**
     * See: {@link https://docs.mendix.com/refguide/show-message relevant section in reference guide}
     */
    class ShowMessageAction extends MicroflowAction {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__template = new internal.PartProperty(ShowMessageAction, this, "template", null, true);
            /** @internal */
            this.__type = new internal.EnumProperty(ShowMessageAction, this, "type", ShowMessageType.Information, ShowMessageType);
            /** @internal */
            this.__blocking = new internal.PrimitiveProperty(ShowMessageAction, this, "blocking", true, internal.PrimitiveTypeEnum.Boolean);
            if (arguments.length < 4) {
                throw new Error("new ShowMessageAction() cannot be invoked directly, please use 'model.microflows.createShowMessageAction()'");
            }
        }
        get containerAsActionActivity() {
            return super.getContainerAs(ActionActivity);
        }
        get template() {
            return this.__template.get();
        }
        set template(newValue) {
            this.__template.set(newValue);
        }
        get type() {
            return this.__type.get();
        }
        set type(newValue) {
            this.__type.set(newValue);
        }
        get blocking() {
            return this.__blocking.get();
        }
        set blocking(newValue) {
            this.__blocking.set(newValue);
        }
        /**
         * Creates and returns a new ShowMessageAction instance in the SDK and on the server.
         * The new ShowMessageAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, ShowMessageAction, "action", false);
        }
        /**
         * Creates and returns a new ShowMessageAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ShowMessageAction);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.blocking = true;
            this.template = TextTemplate.create(this.model);
            this.type = ShowMessageType.Information;
        }
    }
    ShowMessageAction.structureTypeName = "Microflows$ShowMessageAction";
    ShowMessageAction.versionInfo = new exports.StructureVersionInfo({
        properties: {
            template: {
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    microflows.ShowMessageAction = ShowMessageAction;
    /**
     * See: {@link https://docs.mendix.com/refguide/show-page relevant section in reference guide}
     */
    class ShowPageAction extends MicroflowAction {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__pageSettings = new internal.PartProperty(ShowPageAction, this, "pageSettings", null, true);
            /** @internal */
            this.__passedObjectVariableName = new internal.PrimitiveProperty(ShowPageAction, this, "passedObjectVariableName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__numberOfPagesToClose = new internal.PrimitiveProperty(ShowPageAction, this, "numberOfPagesToClose", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new ShowPageAction() cannot be invoked directly, please use 'model.microflows.createShowPageAction()'");
            }
        }
        get containerAsActionActivity() {
            return super.getContainerAs(ActionActivity);
        }
        get pageSettings() {
            return this.__pageSettings.get();
        }
        set pageSettings(newValue) {
            this.__pageSettings.set(newValue);
        }
        /**
         * In version 9.18.0: deleted
         */
        get passedObjectVariableName() {
            return this.__passedObjectVariableName.get();
        }
        set passedObjectVariableName(newValue) {
            this.__passedObjectVariableName.set(newValue);
        }
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         *
         * In version 8.11.0: introduced
         */
        get numberOfPagesToClose() {
            return this.__numberOfPagesToClose.get();
        }
        set numberOfPagesToClose(newValue) {
            this.__numberOfPagesToClose.set(newValue);
        }
        /**
         * Creates and returns a new ShowPageAction instance in the SDK and on the server.
         * The new ShowPageAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, ShowPageAction, "action", false);
        }
        /**
         * Creates and returns a new ShowPageAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ShowPageAction);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.pageSettings = pages_1.pages.PageSettings.create(this.model);
        }
    }
    ShowPageAction.structureTypeName = "Microflows$ShowPageAction";
    ShowPageAction.versionInfo = new exports.StructureVersionInfo({
        properties: {
            pageSettings: {
                required: {
                    currentValue: true
                }
            },
            passedObjectVariableName: {
                deleted: "9.18.0",
                deletionMessage: "Use property 'pageSettings' with property 'parameterMappings' instead"
            },
            numberOfPagesToClose: {
                introduced: "8.11.0"
            }
        }
    }, internal.StructureType.Element);
    microflows.ShowPageAction = ShowPageAction;
    class SimpleRequestHandling extends RequestHandling {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__parameterMappings = new internal.PartListProperty(SimpleRequestHandling, this, "parameterMappings", []);
            /** @internal */
            this.__nullValueOption = new internal.EnumProperty(SimpleRequestHandling, this, "nullValueOption", NullValueOption.LeaveOutElement, NullValueOption);
            if (arguments.length < 4) {
                throw new Error("new SimpleRequestHandling() cannot be invoked directly, please use 'model.microflows.createSimpleRequestHandling()'");
            }
        }
        get containerAsRestCallAction() {
            return super.getContainerAs(RestCallAction);
        }
        get containerAsWebServiceCallAction() {
            return super.getContainerAs(WebServiceCallAction);
        }
        get parameterMappings() {
            return this.__parameterMappings.get();
        }
        /**
         * In version 6.7.0: introduced
         */
        get nullValueOption() {
            return this.__nullValueOption.get();
        }
        set nullValueOption(newValue) {
            this.__nullValueOption.set(newValue);
        }
        /**
         * Creates and returns a new SimpleRequestHandling instance in the SDK and on the server.
         * The new SimpleRequestHandling will be automatically stored in the 'requestHandling' property
         * of the parent RestCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 and higher
         */
        static createInRestCallActionUnderRequestHandling(container) {
            internal.createInVersionCheck(container.model, SimpleRequestHandling.structureTypeName, { start: "6.6.0" });
            return internal.instancehelpers.createElement(container, SimpleRequestHandling, "requestHandling", false);
        }
        /**
         * Creates and returns a new SimpleRequestHandling instance in the SDK and on the server.
         * The new SimpleRequestHandling will be automatically stored in the 'requestBodyHandling' property
         * of the parent WebServiceCallAction element passed as argument.
         */
        static createInWebServiceCallActionUnderRequestBodyHandling(container) {
            return internal.instancehelpers.createElement(container, SimpleRequestHandling, "requestBodyHandling", false);
        }
        /**
         * Creates and returns a new SimpleRequestHandling instance in the SDK and on the server.
         * The new SimpleRequestHandling will be automatically stored in the 'requestHeaderHandling' property
         * of the parent WebServiceCallAction element passed as argument.
         */
        static createInWebServiceCallActionUnderRequestHeaderHandling(container) {
            return internal.instancehelpers.createElement(container, SimpleRequestHandling, "requestHeaderHandling", false);
        }
        /**
         * Creates and returns a new SimpleRequestHandling instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, SimpleRequestHandling);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__nullValueOption.isAvailable) {
                this.nullValueOption = NullValueOption.LeaveOutElement;
            }
        }
    }
    SimpleRequestHandling.structureTypeName = "Microflows$SimpleRequestHandling";
    SimpleRequestHandling.versionInfo = new exports.StructureVersionInfo({
        properties: {
            nullValueOption: {
                introduced: "6.7.0"
            }
        }
    }, internal.StructureType.Element);
    microflows.SimpleRequestHandling = SimpleRequestHandling;
    class Sort extends ListOperation {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__sortItemList = new internal.PartProperty(Sort, this, "sortItemList", null, true);
            if (arguments.length < 4) {
                throw new Error("new Sort() cannot be invoked directly, please use 'model.microflows.createSort()'");
            }
        }
        get containerAsListOperationAction() {
            return super.getContainerAs(ListOperationAction);
        }
        get sortItemList() {
            return this.__sortItemList.get();
        }
        set sortItemList(newValue) {
            this.__sortItemList.set(newValue);
        }
        /**
         * Creates and returns a new Sort instance in the SDK and on the server.
         * The new Sort will be automatically stored in the 'operation' property
         * of the parent ListOperationAction element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, Sort, "operation", false);
        }
        /**
         * Creates and returns a new Sort instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, Sort);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.sortItemList = SortItemList.create(this.model);
        }
    }
    Sort.structureTypeName = "Microflows$Sort";
    Sort.versionInfo = new exports.StructureVersionInfo({
        properties: {
            sortItemList: {
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    microflows.Sort = Sort;
    class SortItem extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__attributePath = new internal.PrimitiveProperty(SortItem, this, "attributePath", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__attributeRef = new internal.PartProperty(SortItem, this, "attributeRef", null, true);
            /** @internal */
            this.__sortOrder = new internal.EnumProperty(SortItem, this, "sortOrder", SortOrderEnum.Ascending, SortOrderEnum);
            if (arguments.length < 4) {
                throw new Error("new SortItem() cannot be invoked directly, please use 'model.microflows.createSortItem()'");
            }
        }
        get containerAsSortItemList() {
            return super.getContainerAs(SortItemList);
        }
        /**
         * The value of this property is conceptually of type paths.LegacyAttributePath.
         *
         * In version 7.11.0: deleted
         */
        get attributePath() {
            return this.__attributePath.get();
        }
        set attributePath(newValue) {
            this.__attributePath.set(newValue);
        }
        /**
         * In version 7.11.0: introduced
         */
        get attributeRef() {
            return this.__attributeRef.get();
        }
        set attributeRef(newValue) {
            this.__attributeRef.set(newValue);
        }
        get sortOrder() {
            return this.__sortOrder.get();
        }
        set sortOrder(newValue) {
            this.__sortOrder.set(newValue);
        }
        /**
         * Creates and returns a new SortItem instance in the SDK and on the server.
         * The new SortItem will be automatically stored in the 'items' property
         * of the parent SortItemList element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, SortItem, "items", true);
        }
        /**
         * Creates and returns a new SortItem instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, SortItem);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__attributePath.isAvailable) {
                this.attributePath = "";
            }
            if (this.__attributeRef.isAvailable) {
                this.attributeRef = domainmodels_1.domainmodels.AttributeRef.create(this.model);
            }
            this.sortOrder = SortOrderEnum.Ascending;
        }
    }
    SortItem.structureTypeName = "Microflows$SortItem";
    SortItem.versionInfo = new exports.StructureVersionInfo({
        properties: {
            attributePath: {
                deleted: "7.11.0",
                deletionMessage: "Use property 'attributeRef' instead",
                required: {
                    currentValue: true
                }
            },
            attributeRef: {
                introduced: "7.11.0",
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    microflows.SortItem = SortItem;
    class SortItemList extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__items = new internal.PartListProperty(SortItemList, this, "items", []);
            if (arguments.length < 4) {
                throw new Error("new SortItemList() cannot be invoked directly, please use 'model.microflows.createSortItemList()'");
            }
        }
        get containerAsDatabaseRetrieveSource() {
            return super.getContainerAs(DatabaseRetrieveSource);
        }
        get containerAsSort() {
            return super.getContainerAs(Sort);
        }
        get items() {
            return this.__items.get();
        }
        /**
         * Creates and returns a new SortItemList instance in the SDK and on the server.
         * The new SortItemList will be automatically stored in the 'sortItemList' property
         * of the parent DatabaseRetrieveSource element passed as argument.
         */
        static createInDatabaseRetrieveSourceUnderSortItemList(container) {
            return internal.instancehelpers.createElement(container, SortItemList, "sortItemList", false);
        }
        /**
         * Creates and returns a new SortItemList instance in the SDK and on the server.
         * The new SortItemList will be automatically stored in the 'sortItemList' property
         * of the parent Sort element passed as argument.
         */
        static createInSortUnderSortItemList(container) {
            return internal.instancehelpers.createElement(container, SortItemList, "sortItemList", false);
        }
        /**
         * Creates and returns a new SortItemList instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, SortItemList);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    SortItemList.structureTypeName = "Microflows$SortItemList";
    SortItemList.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    microflows.SortItemList = SortItemList;
    /**
     * See: {@link https://docs.mendix.com/refguide/start-event relevant section in reference guide}
     */
    class StartEvent extends MicroflowObject {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new StartEvent() cannot be invoked directly, please use 'model.microflows.createStartEvent()'");
            }
        }
        get containerAsMicroflowObjectCollection() {
            return super.getContainerAs(MicroflowObjectCollection);
        }
        /**
         * Creates and returns a new StartEvent instance in the SDK and on the server.
         * The new StartEvent will be automatically stored in the 'objects' property
         * of the parent MicroflowObjectCollection element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, StartEvent, "objects", true);
        }
        /**
         * Creates and returns a new StartEvent instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, StartEvent);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.size = { width: 20, height: 20 };
        }
    }
    StartEvent.structureTypeName = "Microflows$StartEvent";
    StartEvent.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    microflows.StartEvent = StartEvent;
    class Template extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__arguments = new internal.PartListProperty(Template, this, "arguments", []);
            if (arguments.length < 4) {
                throw new Error("new Template() cannot be invoked directly, please use 'model.microflows.createTemplate()'");
            }
        }
        get containerAsAbortOperation() {
            return super.getContainerAs(AbortOperation);
        }
        get containerAsCustomRequestHandling() {
            return super.getContainerAs(CustomRequestHandling);
        }
        get containerAsHttpConfiguration() {
            return super.getContainerAs(HttpConfiguration);
        }
        get containerAsLogMessageAction() {
            return super.getContainerAs(LogMessageAction);
        }
        get containerAsShowMessageAction() {
            return super.getContainerAs(ShowMessageAction);
        }
        get containerAsStringTemplateParameterValue() {
            return super.getContainerAs(StringTemplateParameterValue);
        }
        get containerAsValidationFeedbackAction() {
            return super.getContainerAs(ValidationFeedbackAction);
        }
        get containerAsPageSettings() {
            return super.getContainerAs(pages_1.pages.PageSettings);
        }
        get containerAsUserTask() {
            return super.getContainerAs(workflows_1.workflows.UserTask);
        }
        get containerAsWorkflow() {
            return super.getContainerAs(workflows_1.workflows.Workflow);
        }
        get arguments() {
            return this.__arguments.get();
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    Template.structureTypeName = "Microflows$Template";
    Template.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    microflows.Template = Template;
    class StringTemplate extends Template {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__text = new internal.PrimitiveProperty(StringTemplate, this, "text", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new StringTemplate() cannot be invoked directly, please use 'model.microflows.createStringTemplate()'");
            }
        }
        get containerAsAbortOperation() {
            return super.getContainerAs(AbortOperation);
        }
        get containerAsCustomRequestHandling() {
            return super.getContainerAs(CustomRequestHandling);
        }
        get containerAsHttpConfiguration() {
            return super.getContainerAs(HttpConfiguration);
        }
        get containerAsLogMessageAction() {
            return super.getContainerAs(LogMessageAction);
        }
        get containerAsStringTemplateParameterValue() {
            return super.getContainerAs(StringTemplateParameterValue);
        }
        get containerAsUserTask() {
            return super.getContainerAs(workflows_1.workflows.UserTask);
        }
        get containerAsWorkflow() {
            return super.getContainerAs(workflows_1.workflows.Workflow);
        }
        get text() {
            return this.__text.get();
        }
        set text(newValue) {
            this.__text.set(newValue);
        }
        /**
         * Creates and returns a new StringTemplate instance in the SDK and on the server.
         * The new StringTemplate will be automatically stored in the 'reason' property
         * of the parent AbortOperation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.2.0 and higher
         */
        static createInAbortOperationUnderReason(container) {
            internal.createInVersionCheck(container.model, StringTemplate.structureTypeName, { start: "9.2.0" });
            return internal.instancehelpers.createElement(container, StringTemplate, "reason", false);
        }
        /**
         * Creates and returns a new StringTemplate instance in the SDK and on the server.
         * The new StringTemplate will be automatically stored in the 'template' property
         * of the parent CustomRequestHandling element passed as argument.
         */
        static createInCustomRequestHandlingUnderTemplate(container) {
            return internal.instancehelpers.createElement(container, StringTemplate, "template", false);
        }
        /**
         * Creates and returns a new StringTemplate instance in the SDK and on the server.
         * The new StringTemplate will be automatically stored in the 'customLocationTemplate' property
         * of the parent HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 and higher
         */
        static createInHttpConfigurationUnderCustomLocationTemplate(container) {
            internal.createInVersionCheck(container.model, StringTemplate.structureTypeName, { start: "6.6.0" });
            return internal.instancehelpers.createElement(container, StringTemplate, "customLocationTemplate", false);
        }
        /**
         * Creates and returns a new StringTemplate instance in the SDK and on the server.
         * The new StringTemplate will be automatically stored in the 'messageTemplate' property
         * of the parent LogMessageAction element passed as argument.
         */
        static createInLogMessageActionUnderMessageTemplate(container) {
            return internal.instancehelpers.createElement(container, StringTemplate, "messageTemplate", false);
        }
        /**
         * Creates and returns a new StringTemplate instance in the SDK and on the server.
         * The new StringTemplate will be automatically stored in the 'template' property
         * of the parent StringTemplateParameterValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.4.0 to 8.5.0
         */
        static createInStringTemplateParameterValueUnderTemplate(container) {
            internal.createInVersionCheck(container.model, StringTemplate.structureTypeName, { start: "8.4.0", end: "8.5.0" });
            return internal.instancehelpers.createElement(container, StringTemplate, "template", false);
        }
        /**
         * Creates and returns a new StringTemplate instance in the SDK and on the server.
         * The new StringTemplate will be automatically stored in the 'taskDescription' property
         * of the parent workflows.UserTask element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.2 and higher
         */
        static createInUserTaskUnderTaskDescription(container) {
            internal.createInVersionCheck(container.model, StringTemplate.structureTypeName, { start: "9.0.2" });
            return internal.instancehelpers.createElement(container, StringTemplate, "taskDescription", false);
        }
        /**
         * Creates and returns a new StringTemplate instance in the SDK and on the server.
         * The new StringTemplate will be automatically stored in the 'taskName' property
         * of the parent workflows.UserTask element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.2 and higher
         */
        static createInUserTaskUnderTaskName(container) {
            internal.createInVersionCheck(container.model, StringTemplate.structureTypeName, { start: "9.0.2" });
            return internal.instancehelpers.createElement(container, StringTemplate, "taskName", false);
        }
        /**
         * Creates and returns a new StringTemplate instance in the SDK and on the server.
         * The new StringTemplate will be automatically stored in the 'workflowDescription' property
         * of the parent workflows.Workflow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.2 and higher
         */
        static createInWorkflowUnderWorkflowDescription(container) {
            internal.createInVersionCheck(container.model, StringTemplate.structureTypeName, { start: "9.0.2" });
            return internal.instancehelpers.createElement(container, StringTemplate, "workflowDescription", false);
        }
        /**
         * Creates and returns a new StringTemplate instance in the SDK and on the server.
         * The new StringTemplate will be automatically stored in the 'workflowName' property
         * of the parent workflows.Workflow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.2 and higher
         */
        static createInWorkflowUnderWorkflowName(container) {
            internal.createInVersionCheck(container.model, StringTemplate.structureTypeName, { start: "9.0.2" });
            return internal.instancehelpers.createElement(container, StringTemplate, "workflowName", false);
        }
        /**
         * Creates and returns a new StringTemplate instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, StringTemplate);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    StringTemplate.structureTypeName = "Microflows$StringTemplate";
    StringTemplate.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    microflows.StringTemplate = StringTemplate;
    /**
     * In version 8.5.0: removed experimental
     * In version 8.4.0: introduced
     */
    class StringTemplateParameterValue extends CodeActionParameterValue {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__template = new internal.PartProperty(StringTemplateParameterValue, this, "template", null, true);
            /** @internal */
            this.__typedTemplate = new internal.PartProperty(StringTemplateParameterValue, this, "typedTemplate", null, true);
            if (arguments.length < 4) {
                throw new Error("new StringTemplateParameterValue() cannot be invoked directly, please use 'model.microflows.createStringTemplateParameterValue()'");
            }
        }
        get containerAsJavaActionParameterMapping() {
            return super.getContainerAs(JavaActionParameterMapping);
        }
        get containerAsJavaScriptActionParameterMapping() {
            return super.getContainerAs(JavaScriptActionParameterMapping);
        }
        /**
         * In version 8.6.0: deleted
         */
        get template() {
            return this.__template.get();
        }
        set template(newValue) {
            this.__template.set(newValue);
        }
        /**
         * In version 8.6.0: introduced
         */
        get typedTemplate() {
            return this.__typedTemplate.get();
        }
        set typedTemplate(newValue) {
            this.__typedTemplate.set(newValue);
        }
        /**
         * Creates and returns a new StringTemplateParameterValue instance in the SDK and on the server.
         * The new StringTemplateParameterValue will be automatically stored in the 'parameterValue' property
         * of the parent JavaActionParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.4.0 and higher
         */
        static createInJavaActionParameterMappingUnderParameterValue(container) {
            internal.createInVersionCheck(container.model, StringTemplateParameterValue.structureTypeName, { start: "8.4.0" });
            return internal.instancehelpers.createElement(container, StringTemplateParameterValue, "parameterValue", false);
        }
        /**
         * Creates and returns a new StringTemplateParameterValue instance in the SDK and on the server.
         * The new StringTemplateParameterValue will be automatically stored in the 'parameterValue' property
         * of the parent JavaScriptActionParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.4.0 and higher
         */
        static createInJavaScriptActionParameterMappingUnderParameterValue(container) {
            internal.createInVersionCheck(container.model, StringTemplateParameterValue.structureTypeName, { start: "8.4.0" });
            return internal.instancehelpers.createElement(container, StringTemplateParameterValue, "parameterValue", false);
        }
        /**
         * Creates and returns a new StringTemplateParameterValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, StringTemplateParameterValue);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__template.isAvailable) {
                this.template = StringTemplate.create(this.model);
            }
            if (this.__typedTemplate.isAvailable) {
                this.typedTemplate = TypedTemplate.create(this.model);
            }
        }
    }
    StringTemplateParameterValue.structureTypeName = "Microflows$StringTemplateParameterValue";
    StringTemplateParameterValue.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.4.0",
        properties: {
            template: {
                deleted: "8.6.0",
                deletionMessage: "Use 'TypedTemplate' instead",
                required: {
                    currentValue: true
                }
            },
            typedTemplate: {
                introduced: "8.6.0",
                required: {
                    currentValue: true
                }
            }
        },
        experimental: {
            currentValue: false,
            changedIn: ["8.5.0"]
        }
    }, internal.StructureType.Element);
    microflows.StringTemplateParameterValue = StringTemplateParameterValue;
    class Subtract extends BinaryListOperation {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new Subtract() cannot be invoked directly, please use 'model.microflows.createSubtract()'");
            }
        }
        get containerAsListOperationAction() {
            return super.getContainerAs(ListOperationAction);
        }
        /**
         * Creates and returns a new Subtract instance in the SDK and on the server.
         * The new Subtract will be automatically stored in the 'operation' property
         * of the parent ListOperationAction element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, Subtract, "operation", false);
        }
        /**
         * Creates and returns a new Subtract instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, Subtract);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    Subtract.structureTypeName = "Microflows$Subtract";
    Subtract.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    microflows.Subtract = Subtract;
    /**
     * See: {@link https://docs.mendix.com/refguide/synchronize relevant section in reference guide}
     *
     * In version 7.22.0: introduced
     */
    class SynchronizeAction extends MicroflowAction {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__type = new internal.EnumProperty(SynchronizeAction, this, "type", SynchronizationType.All, SynchronizationType);
            /** @internal */
            this.__variableNames = new internal.PrimitiveListProperty(SynchronizeAction, this, "variableNames", [], internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new SynchronizeAction() cannot be invoked directly, please use 'model.microflows.createSynchronizeAction()'");
            }
        }
        get containerAsActionActivity() {
            return super.getContainerAs(ActionActivity);
        }
        /**
         * In version 8.10.0: introduced
         */
        get type() {
            return this.__type.get();
        }
        set type(newValue) {
            this.__type.set(newValue);
        }
        /**
         * In version 8.10.0: introduced
         */
        get variableNames() {
            return this.__variableNames.get();
        }
        /**
         * Creates and returns a new SynchronizeAction instance in the SDK and on the server.
         * The new SynchronizeAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.22.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, SynchronizeAction.structureTypeName, { start: "7.22.0" });
            return internal.instancehelpers.createElement(container, SynchronizeAction, "action", false);
        }
        /**
         * Creates and returns a new SynchronizeAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, SynchronizeAction);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__type.isAvailable) {
                this.type = SynchronizationType.All;
            }
        }
    }
    SynchronizeAction.structureTypeName = "Microflows$SynchronizeAction";
    SynchronizeAction.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.22.0",
        properties: {
            type: {
                introduced: "8.10.0"
            },
            variableNames: {
                introduced: "8.10.0"
            }
        }
    }, internal.StructureType.Element);
    microflows.SynchronizeAction = SynchronizeAction;
    class Tail extends ListOperation {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new Tail() cannot be invoked directly, please use 'model.microflows.createTail()'");
            }
        }
        get containerAsListOperationAction() {
            return super.getContainerAs(ListOperationAction);
        }
        /**
         * Creates and returns a new Tail instance in the SDK and on the server.
         * The new Tail will be automatically stored in the 'operation' property
         * of the parent ListOperationAction element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, Tail, "operation", false);
        }
        /**
         * Creates and returns a new Tail instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, Tail);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    Tail.structureTypeName = "Microflows$Tail";
    Tail.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    microflows.Tail = Tail;
    class TemplateArgument extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__expression = new internal.PrimitiveProperty(TemplateArgument, this, "expression", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__expressionModel = new internal.PartProperty(TemplateArgument, this, "expressionModel", null, true);
            if (arguments.length < 4) {
                throw new Error("new TemplateArgument() cannot be invoked directly, please use 'model.microflows.createTemplateArgument()'");
            }
        }
        get containerAsTemplate() {
            return super.getContainerAs(Template);
        }
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get expression() {
            return this.__expression.get();
        }
        set expression(newValue) {
            this.__expression.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.8.0: deleted
         * In version 7.9.0: introduced
         */
        get expressionModel() {
            return this.__expressionModel.get();
        }
        set expressionModel(newValue) {
            this.__expressionModel.set(newValue);
        }
        /**
         * Creates and returns a new TemplateArgument instance in the SDK and on the server.
         * The new TemplateArgument will be automatically stored in the 'arguments' property
         * of the parent Template element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, TemplateArgument, "arguments", true);
        }
        /**
         * Creates and returns a new TemplateArgument instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, TemplateArgument);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__expressionModel.isAvailable) {
                this.expressionModel = expressions_1.expressions.NoExpression.create(this.model);
            }
        }
    }
    TemplateArgument.structureTypeName = "Microflows$TemplateArgument";
    TemplateArgument.versionInfo = new exports.StructureVersionInfo({
        properties: {
            expressionModel: {
                introduced: "7.9.0",
                deleted: "9.8.0",
                deletionMessage: null,
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    microflows.TemplateArgument = TemplateArgument;
    class TextTemplate extends Template {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__text = new internal.PartProperty(TextTemplate, this, "text", null, true);
            if (arguments.length < 4) {
                throw new Error("new TextTemplate() cannot be invoked directly, please use 'model.microflows.createTextTemplate()'");
            }
        }
        get containerAsShowMessageAction() {
            return super.getContainerAs(ShowMessageAction);
        }
        get containerAsValidationFeedbackAction() {
            return super.getContainerAs(ValidationFeedbackAction);
        }
        get containerAsPageSettings() {
            return super.getContainerAs(pages_1.pages.PageSettings);
        }
        get text() {
            return this.__text.get();
        }
        set text(newValue) {
            this.__text.set(newValue);
        }
        /**
         * Creates and returns a new TextTemplate instance in the SDK and on the server.
         * The new TextTemplate will be automatically stored in the 'template' property
         * of the parent ShowMessageAction element passed as argument.
         */
        static createInShowMessageActionUnderTemplate(container) {
            return internal.instancehelpers.createElement(container, TextTemplate, "template", false);
        }
        /**
         * Creates and returns a new TextTemplate instance in the SDK and on the server.
         * The new TextTemplate will be automatically stored in the 'feedbackTemplate' property
         * of the parent ValidationFeedbackAction element passed as argument.
         */
        static createInValidationFeedbackActionUnderFeedbackTemplate(container) {
            return internal.instancehelpers.createElement(container, TextTemplate, "feedbackTemplate", false);
        }
        /**
         * Creates and returns a new TextTemplate instance in the SDK and on the server.
         * The new TextTemplate will be automatically stored in the 'titleOverride' property
         * of the parent pages.PageSettings element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.12.0 and higher
         */
        static createInPageSettingsUnderTitleOverride(container) {
            internal.createInVersionCheck(container.model, TextTemplate.structureTypeName, { start: "8.12.0" });
            return internal.instancehelpers.createElement(container, TextTemplate, "titleOverride", false);
        }
        /**
         * Creates and returns a new TextTemplate instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, TextTemplate);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.text = texts_1.texts.Text.create(this.model);
        }
    }
    TextTemplate.structureTypeName = "Microflows$TextTemplate";
    TextTemplate.versionInfo = new exports.StructureVersionInfo({
        properties: {
            text: {
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    microflows.TextTemplate = TextTemplate;
    /**
     * In version 8.6.0: introduced
     */
    class TypedTemplate extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__text = new internal.PrimitiveProperty(TypedTemplate, this, "text", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__arguments = new internal.PartListProperty(TypedTemplate, this, "arguments", []);
            if (arguments.length < 4) {
                throw new Error("new TypedTemplate() cannot be invoked directly, please use 'model.microflows.createTypedTemplate()'");
            }
        }
        get containerAsStringTemplateParameterValue() {
            return super.getContainerAs(StringTemplateParameterValue);
        }
        get text() {
            return this.__text.get();
        }
        set text(newValue) {
            this.__text.set(newValue);
        }
        get arguments() {
            return this.__arguments.get();
        }
        /**
         * Creates and returns a new TypedTemplate instance in the SDK and on the server.
         * The new TypedTemplate will be automatically stored in the 'typedTemplate' property
         * of the parent StringTemplateParameterValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.6.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, TypedTemplate.structureTypeName, { start: "8.6.0" });
            return internal.instancehelpers.createElement(container, TypedTemplate, "typedTemplate", false);
        }
        /**
         * Creates and returns a new TypedTemplate instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, TypedTemplate);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    TypedTemplate.structureTypeName = "Microflows$TypedTemplate";
    TypedTemplate.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.6.0"
    }, internal.StructureType.Element);
    microflows.TypedTemplate = TypedTemplate;
    class Union extends BinaryListOperation {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new Union() cannot be invoked directly, please use 'model.microflows.createUnion()'");
            }
        }
        get containerAsListOperationAction() {
            return super.getContainerAs(ListOperationAction);
        }
        /**
         * Creates and returns a new Union instance in the SDK and on the server.
         * The new Union will be automatically stored in the 'operation' property
         * of the parent ListOperationAction element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, Union, "operation", false);
        }
        /**
         * Creates and returns a new Union instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, Union);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    Union.structureTypeName = "Microflows$Union";
    Union.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    microflows.Union = Union;
    /**
     * In version 9.12.0: introduced
     */
    class UnpauseOperation extends WorkflowOperation {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__workflowVariable = new internal.PrimitiveProperty(UnpauseOperation, this, "workflowVariable", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new UnpauseOperation() cannot be invoked directly, please use 'model.microflows.createUnpauseOperation()'");
            }
        }
        get containerAsWorkflowOperationAction() {
            return super.getContainerAs(WorkflowOperationAction);
        }
        get workflowVariable() {
            return this.__workflowVariable.get();
        }
        set workflowVariable(newValue) {
            this.__workflowVariable.set(newValue);
        }
        /**
         * Creates and returns a new UnpauseOperation instance in the SDK and on the server.
         * The new UnpauseOperation will be automatically stored in the 'operation' property
         * of the parent WorkflowOperationAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.12.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, UnpauseOperation.structureTypeName, { start: "9.12.0" });
            return internal.instancehelpers.createElement(container, UnpauseOperation, "operation", false);
        }
        /**
         * Creates and returns a new UnpauseOperation instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, UnpauseOperation);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    UnpauseOperation.structureTypeName = "Microflows$UnpauseOperation";
    UnpauseOperation.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.12.0"
    }, internal.StructureType.Element);
    microflows.UnpauseOperation = UnpauseOperation;
    /**
     * See: {@link https://docs.mendix.com/refguide/validation-feedback relevant section in reference guide}
     */
    class ValidationFeedbackAction extends MicroflowAction {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__feedbackTemplate = new internal.PartProperty(ValidationFeedbackAction, this, "feedbackTemplate", null, true);
            /** @internal */
            this.__objectVariableName = new internal.PrimitiveProperty(ValidationFeedbackAction, this, "objectVariableName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__attribute = new internal.ByNameReferenceProperty(ValidationFeedbackAction, this, "attribute", null, "DomainModels$Attribute");
            /** @internal */
            this.__association = new internal.ByNameReferenceProperty(ValidationFeedbackAction, this, "association", null, "DomainModels$AssociationBase");
            if (arguments.length < 4) {
                throw new Error("new ValidationFeedbackAction() cannot be invoked directly, please use 'model.microflows.createValidationFeedbackAction()'");
            }
        }
        get containerAsActionActivity() {
            return super.getContainerAs(ActionActivity);
        }
        get feedbackTemplate() {
            return this.__feedbackTemplate.get();
        }
        set feedbackTemplate(newValue) {
            this.__feedbackTemplate.set(newValue);
        }
        get objectVariableName() {
            return this.__objectVariableName.get();
        }
        set objectVariableName(newValue) {
            this.__objectVariableName.set(newValue);
        }
        /**
         * See: {@link https://docs.mendix.com/refguide/validation-feedback See 'Member' section in reference guide}
         */
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
         * See: {@link https://docs.mendix.com/refguide/validation-feedback See 'Member' section in reference guide}
         */
        get association() {
            return this.__association.get();
        }
        set association(newValue) {
            this.__association.set(newValue);
        }
        get associationQualifiedName() {
            return this.__association.qualifiedName();
        }
        /**
         * Creates and returns a new ValidationFeedbackAction instance in the SDK and on the server.
         * The new ValidationFeedbackAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, ValidationFeedbackAction, "action", false);
        }
        /**
         * Creates and returns a new ValidationFeedbackAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ValidationFeedbackAction);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.feedbackTemplate = TextTemplate.create(this.model);
        }
    }
    ValidationFeedbackAction.structureTypeName = "Microflows$ValidationFeedbackAction";
    ValidationFeedbackAction.versionInfo = new exports.StructureVersionInfo({
        properties: {
            feedbackTemplate: {
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    microflows.ValidationFeedbackAction = ValidationFeedbackAction;
    class VariableExport extends OutputMethod {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__outputVariableName = new internal.PrimitiveProperty(VariableExport, this, "outputVariableName", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new VariableExport() cannot be invoked directly, please use 'model.microflows.createVariableExport()'");
            }
        }
        get containerAsExportXmlAction() {
            return super.getContainerAs(ExportXmlAction);
        }
        get outputVariableName() {
            return this.__outputVariableName.get();
        }
        set outputVariableName(newValue) {
            this.__outputVariableName.set(newValue);
        }
        /**
         * Creates and returns a new VariableExport instance in the SDK and on the server.
         * The new VariableExport will be automatically stored in the 'outputMethod' property
         * of the parent ExportXmlAction element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, VariableExport, "outputMethod", false);
        }
        /**
         * Creates and returns a new VariableExport instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, VariableExport);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    VariableExport.structureTypeName = "Microflows$VariableExport";
    VariableExport.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    microflows.VariableExport = VariableExport;
    /**
     * See: {@link https://docs.mendix.com/refguide/call-web-service-action relevant section in reference guide}
     */
    class WebServiceCallAction extends MicroflowAction {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__importedWebService = new internal.ByNameReferenceProperty(WebServiceCallAction, this, "importedWebService", null, "WebServices$ImportedWebService");
            /** @internal */
            this.__serviceName = new internal.PrimitiveProperty(WebServiceCallAction, this, "serviceName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__operationName = new internal.PrimitiveProperty(WebServiceCallAction, this, "operationName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__useRequestTimeOut = new internal.PrimitiveProperty(WebServiceCallAction, this, "useRequestTimeOut", true, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__timeOut = new internal.PrimitiveProperty(WebServiceCallAction, this, "timeOut", 30, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__timeOutModel = new internal.PartProperty(WebServiceCallAction, this, "timeOutModel", null, true);
            /** @internal */
            this.__timeOutExpression = new internal.PrimitiveProperty(WebServiceCallAction, this, "timeOutExpression", "300", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__sendNullValueChoice = new internal.EnumProperty(WebServiceCallAction, this, "sendNullValueChoice", NullValueOption.LeaveOutElement, NullValueOption);
            /** @internal */
            this.__requestHeaderHandling = new internal.PartProperty(WebServiceCallAction, this, "requestHeaderHandling", null, true);
            /** @internal */
            this.__requestBodyHandling = new internal.PartProperty(WebServiceCallAction, this, "requestBodyHandling", null, true);
            /** @internal */
            this.__resultHandling = new internal.PartProperty(WebServiceCallAction, this, "resultHandling", null, true);
            /** @internal */
            this.__httpConfiguration = new internal.PartProperty(WebServiceCallAction, this, "httpConfiguration", null, true);
            /** @internal */
            this.__isValidationRequired = new internal.PrimitiveProperty(WebServiceCallAction, this, "isValidationRequired", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__requestProxyType = new internal.EnumProperty(WebServiceCallAction, this, "requestProxyType", RequestProxyType.DefaultProxy, RequestProxyType);
            /** @internal */
            this.__proxyConfiguration = new internal.PartProperty(WebServiceCallAction, this, "proxyConfiguration", null, false);
            if (arguments.length < 4) {
                throw new Error("new WebServiceCallAction() cannot be invoked directly, please use 'model.microflows.createWebServiceCallAction()'");
            }
        }
        get containerAsActionActivity() {
            return super.getContainerAs(ActionActivity);
        }
        get importedWebService() {
            return this.__importedWebService.get();
        }
        set importedWebService(newValue) {
            this.__importedWebService.set(newValue);
        }
        get importedWebServiceQualifiedName() {
            return this.__importedWebService.qualifiedName();
        }
        get serviceName() {
            return this.__serviceName.get();
        }
        set serviceName(newValue) {
            this.__serviceName.set(newValue);
        }
        get operationName() {
            return this.__operationName.get();
        }
        set operationName(newValue) {
            this.__operationName.set(newValue);
        }
        get useRequestTimeOut() {
            return this.__useRequestTimeOut.get();
        }
        set useRequestTimeOut(newValue) {
            this.__useRequestTimeOut.set(newValue);
        }
        /**
         * In version 7.15.0: deleted
         */
        get timeOut() {
            return this.__timeOut.get();
        }
        set timeOut(newValue) {
            this.__timeOut.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.8.0: deleted
         * In version 7.15.0: introduced
         */
        get timeOutModel() {
            return this.__timeOutModel.get();
        }
        set timeOutModel(newValue) {
            this.__timeOutModel.set(newValue);
        }
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         *
         * In version 7.15.0: introduced
         */
        get timeOutExpression() {
            return this.__timeOutExpression.get();
        }
        set timeOutExpression(newValue) {
            this.__timeOutExpression.set(newValue);
        }
        /**
         * In version 6.7.0: deleted
         */
        get sendNullValueChoice() {
            return this.__sendNullValueChoice.get();
        }
        set sendNullValueChoice(newValue) {
            this.__sendNullValueChoice.set(newValue);
        }
        get requestHeaderHandling() {
            return this.__requestHeaderHandling.get();
        }
        set requestHeaderHandling(newValue) {
            this.__requestHeaderHandling.set(newValue);
        }
        get requestBodyHandling() {
            return this.__requestBodyHandling.get();
        }
        set requestBodyHandling(newValue) {
            this.__requestBodyHandling.set(newValue);
        }
        get resultHandling() {
            return this.__resultHandling.get();
        }
        set resultHandling(newValue) {
            this.__resultHandling.set(newValue);
        }
        get httpConfiguration() {
            return this.__httpConfiguration.get();
        }
        set httpConfiguration(newValue) {
            this.__httpConfiguration.set(newValue);
        }
        get isValidationRequired() {
            return this.__isValidationRequired.get();
        }
        set isValidationRequired(newValue) {
            this.__isValidationRequired.set(newValue);
        }
        /**
         * In version 7.15.0: introduced
         */
        get requestProxyType() {
            return this.__requestProxyType.get();
        }
        set requestProxyType(newValue) {
            this.__requestProxyType.set(newValue);
        }
        /**
         * In version 7.15.0: introduced
         */
        get proxyConfiguration() {
            return this.__proxyConfiguration.get();
        }
        set proxyConfiguration(newValue) {
            this.__proxyConfiguration.set(newValue);
        }
        /**
         * Creates and returns a new WebServiceCallAction instance in the SDK and on the server.
         * The new WebServiceCallAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, WebServiceCallAction, "action", false);
        }
        /**
         * Creates and returns a new WebServiceCallAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, WebServiceCallAction);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.httpConfiguration = HttpConfiguration.create(this.model);
            this.requestBodyHandling = SimpleRequestHandling.create(this.model);
            this.requestHeaderHandling = SimpleRequestHandling.create(this.model);
            if (this.__requestProxyType.isAvailable) {
                this.requestProxyType = RequestProxyType.DefaultProxy;
            }
            this.resultHandling = ResultHandling.create(this.model);
            if (this.__sendNullValueChoice.isAvailable) {
                this.sendNullValueChoice = NullValueOption.LeaveOutElement;
            }
            if (this.__timeOut.isAvailable) {
                this.timeOut = 30;
            }
            if (this.__timeOutExpression.isAvailable) {
                (() => {
                    if (internal.isAtLeast("8.5.0", this.model)) {
                        this.timeOutExpression = "300";
                        return;
                    }
                    this.timeOutExpression = "30";
                })();
            }
            if (this.__timeOutModel.isAvailable) {
                (() => {
                    if (internal.isAtLeast("8.5.0", this.model)) {
                        this.timeOutModel = ((integerLiteral) => {
                            integerLiteral.value = 300;
                            return integerLiteral;
                        })(expressions_1.expressions.IntegerLiteral.create(this.model));
                        return;
                    }
                    this.timeOutModel = ((integerLiteral) => {
                        integerLiteral.value = 30;
                        return integerLiteral;
                    })(expressions_1.expressions.IntegerLiteral.create(this.model));
                })();
            }
            (() => {
                if (internal.isAtLeast("8.5.0", this.model)) {
                    this.useRequestTimeOut = true;
                    return;
                }
            })();
        }
    }
    WebServiceCallAction.structureTypeName = "Microflows$WebServiceCallAction";
    WebServiceCallAction.versionInfo = new exports.StructureVersionInfo({
        properties: {
            useRequestTimeOut: {},
            timeOut: {
                deleted: "7.15.0",
                deletionMessage: null
            },
            timeOutModel: {
                introduced: "7.15.0",
                deleted: "9.8.0",
                deletionMessage: null,
                required: {
                    currentValue: true
                }
            },
            timeOutExpression: {
                introduced: "7.15.0"
            },
            sendNullValueChoice: {
                deleted: "6.7.0",
                deletionMessage: null
            },
            requestHeaderHandling: {
                required: {
                    currentValue: true
                }
            },
            requestBodyHandling: {
                required: {
                    currentValue: true
                }
            },
            resultHandling: {
                required: {
                    currentValue: true
                }
            },
            httpConfiguration: {
                required: {
                    currentValue: true
                }
            },
            requestProxyType: {
                introduced: "7.15.0"
            },
            proxyConfiguration: {
                introduced: "7.15.0"
            }
        }
    }, internal.StructureType.Element);
    microflows.WebServiceCallAction = WebServiceCallAction;
    /**
     * In version 6.3.0: introduced
     */
    class WebServiceOperationParameterMapping extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__isChecked = new internal.PrimitiveProperty(WebServiceOperationParameterMapping, this, "isChecked", true, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__parameterName = new internal.PrimitiveProperty(WebServiceOperationParameterMapping, this, "parameterName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__argument = new internal.PrimitiveProperty(WebServiceOperationParameterMapping, this, "argument", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__argumentModel = new internal.PartProperty(WebServiceOperationParameterMapping, this, "argumentModel", null, true);
            if (arguments.length < 4) {
                throw new Error("new WebServiceOperationParameterMapping() cannot be invoked directly, please use 'model.microflows.createWebServiceOperationParameterMapping()'");
            }
        }
        get containerAsAdvancedRequestHandling() {
            return super.getContainerAs(AdvancedRequestHandling);
        }
        get containerAsSimpleRequestHandling() {
            return super.getContainerAs(SimpleRequestHandling);
        }
        get isChecked() {
            return this.__isChecked.get();
        }
        set isChecked(newValue) {
            this.__isChecked.set(newValue);
        }
        get parameterName() {
            return this.__parameterName.get();
        }
        set parameterName(newValue) {
            this.__parameterName.set(newValue);
        }
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get argument() {
            return this.__argument.get();
        }
        set argument(newValue) {
            this.__argument.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.8.0: deleted
         * In version 7.9.0: introduced
         */
        get argumentModel() {
            return this.__argumentModel.get();
        }
        set argumentModel(newValue) {
            this.__argumentModel.set(newValue);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__argumentModel.isAvailable) {
                this.argumentModel = expressions_1.expressions.NoExpression.create(this.model);
            }
            this.isChecked = true;
        }
    }
    WebServiceOperationParameterMapping.structureTypeName = "Microflows$WebServiceOperationParameterMapping";
    WebServiceOperationParameterMapping.versionInfo = new exports.StructureVersionInfo({
        introduced: "6.3.0",
        properties: {
            argumentModel: {
                introduced: "7.9.0",
                deleted: "9.8.0",
                deletionMessage: null,
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    microflows.WebServiceOperationParameterMapping = WebServiceOperationParameterMapping;
    class WebServiceOperationAdvancedParameterMapping extends WebServiceOperationParameterMapping {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__mapping = new internal.ByNameReferenceProperty(WebServiceOperationAdvancedParameterMapping, this, "mapping", null, "ExportMappings$ExportMapping");
            /** @internal */
            this.__mappingArgumentVariableName = new internal.PrimitiveProperty(WebServiceOperationAdvancedParameterMapping, this, "mappingArgumentVariableName", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new WebServiceOperationAdvancedParameterMapping() cannot be invoked directly, please use 'model.microflows.createWebServiceOperationAdvancedParameterMapping()'");
            }
        }
        get containerAsAdvancedRequestHandling() {
            return super.getContainerAs(AdvancedRequestHandling);
        }
        get mapping() {
            return this.__mapping.get();
        }
        set mapping(newValue) {
            this.__mapping.set(newValue);
        }
        get mappingQualifiedName() {
            return this.__mapping.qualifiedName();
        }
        get mappingArgumentVariableName() {
            return this.__mappingArgumentVariableName.get();
        }
        set mappingArgumentVariableName(newValue) {
            this.__mappingArgumentVariableName.set(newValue);
        }
        /**
         * Creates and returns a new WebServiceOperationAdvancedParameterMapping instance in the SDK and on the server.
         * The new WebServiceOperationAdvancedParameterMapping will be automatically stored in the 'parameterMappings' property
         * of the parent AdvancedRequestHandling element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, WebServiceOperationAdvancedParameterMapping, "parameterMappings", true);
        }
        /**
         * Creates and returns a new WebServiceOperationAdvancedParameterMapping instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, WebServiceOperationAdvancedParameterMapping);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    WebServiceOperationAdvancedParameterMapping.structureTypeName = "Microflows$WebServiceOperationAdvancedParameterMapping";
    WebServiceOperationAdvancedParameterMapping.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    microflows.WebServiceOperationAdvancedParameterMapping = WebServiceOperationAdvancedParameterMapping;
    class WebServiceOperationSimpleParameterMapping extends WebServiceOperationParameterMapping {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__parameterPath = new internal.PrimitiveProperty(WebServiceOperationSimpleParameterMapping, this, "parameterPath", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new WebServiceOperationSimpleParameterMapping() cannot be invoked directly, please use 'model.microflows.createWebServiceOperationSimpleParameterMapping()'");
            }
        }
        get containerAsSimpleRequestHandling() {
            return super.getContainerAs(SimpleRequestHandling);
        }
        /**
         * The value of this property is conceptually of type mappings.ElementPath.
         */
        get parameterPath() {
            return this.__parameterPath.get();
        }
        set parameterPath(newValue) {
            this.__parameterPath.set(newValue);
        }
        /**
         * Creates and returns a new WebServiceOperationSimpleParameterMapping instance in the SDK and on the server.
         * The new WebServiceOperationSimpleParameterMapping will be automatically stored in the 'parameterMappings' property
         * of the parent SimpleRequestHandling element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, WebServiceOperationSimpleParameterMapping, "parameterMappings", true);
        }
        /**
         * Creates and returns a new WebServiceOperationSimpleParameterMapping instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, WebServiceOperationSimpleParameterMapping);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    WebServiceOperationSimpleParameterMapping.structureTypeName = "Microflows$WebServiceOperationSimpleParameterMapping";
    WebServiceOperationSimpleParameterMapping.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    microflows.WebServiceOperationSimpleParameterMapping = WebServiceOperationSimpleParameterMapping;
    /**
     * In version 9.0.4: introduced
     */
    class WhileLoopCondition extends LoopSource {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__whileExpression = new internal.PrimitiveProperty(WhileLoopCondition, this, "whileExpression", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__caption = new internal.PrimitiveProperty(WhileLoopCondition, this, "caption", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new WhileLoopCondition() cannot be invoked directly, please use 'model.microflows.createWhileLoopCondition()'");
            }
        }
        get containerAsLoopedActivity() {
            return super.getContainerAs(LoopedActivity);
        }
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get whileExpression() {
            return this.__whileExpression.get();
        }
        set whileExpression(newValue) {
            this.__whileExpression.set(newValue);
        }
        get caption() {
            return this.__caption.get();
        }
        set caption(newValue) {
            this.__caption.set(newValue);
        }
        /**
         * Creates and returns a new WhileLoopCondition instance in the SDK and on the server.
         * The new WhileLoopCondition will be automatically stored in the 'loopSource' property
         * of the parent LoopedActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.4 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, WhileLoopCondition.structureTypeName, { start: "9.0.4" });
            return internal.instancehelpers.createElement(container, WhileLoopCondition, "loopSource", false);
        }
        /**
         * Creates and returns a new WhileLoopCondition instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, WhileLoopCondition);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    WhileLoopCondition.structureTypeName = "Microflows$WhileLoopCondition";
    WhileLoopCondition.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.0.4"
    }, internal.StructureType.Element);
    microflows.WhileLoopCondition = WhileLoopCondition;
    /**
     * See: {@link https://docs.mendix.com/refguide/workflow-call relevant section in reference guide}
     *
     * In version 9.0.5: removed experimental
     * In version 9.0.2: introduced
     */
    class WorkflowCallAction extends MicroflowAction {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__workflow = new internal.ByNameReferenceProperty(WorkflowCallAction, this, "workflow", null, "Workflows$Workflow");
            /** @internal */
            this.__workflowContextVariable = new internal.PrimitiveProperty(WorkflowCallAction, this, "workflowContextVariable", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__useReturnVariable = new internal.PrimitiveProperty(WorkflowCallAction, this, "useReturnVariable", true, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__outputVariableName = new internal.PrimitiveProperty(WorkflowCallAction, this, "outputVariableName", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new WorkflowCallAction() cannot be invoked directly, please use 'model.microflows.createWorkflowCallAction()'");
            }
        }
        get containerAsActionActivity() {
            return super.getContainerAs(ActionActivity);
        }
        get workflow() {
            return this.__workflow.get();
        }
        set workflow(newValue) {
            this.__workflow.set(newValue);
        }
        get workflowQualifiedName() {
            return this.__workflow.qualifiedName();
        }
        get workflowContextVariable() {
            return this.__workflowContextVariable.get();
        }
        set workflowContextVariable(newValue) {
            this.__workflowContextVariable.set(newValue);
        }
        get useReturnVariable() {
            return this.__useReturnVariable.get();
        }
        set useReturnVariable(newValue) {
            this.__useReturnVariable.set(newValue);
        }
        get outputVariableName() {
            return this.__outputVariableName.get();
        }
        set outputVariableName(newValue) {
            this.__outputVariableName.set(newValue);
        }
        /**
         * Creates and returns a new WorkflowCallAction instance in the SDK and on the server.
         * The new WorkflowCallAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.2 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, WorkflowCallAction.structureTypeName, { start: "9.0.2" });
            return internal.instancehelpers.createElement(container, WorkflowCallAction, "action", false);
        }
        /**
         * Creates and returns a new WorkflowCallAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, WorkflowCallAction);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.useReturnVariable = true;
        }
    }
    WorkflowCallAction.structureTypeName = "Microflows$WorkflowCallAction";
    WorkflowCallAction.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.0.2",
        experimental: {
            currentValue: false,
            changedIn: ["9.0.5"]
        }
    }, internal.StructureType.Element);
    microflows.WorkflowCallAction = WorkflowCallAction;
    /**
     * In version 9.12.0: removed experimental
     * In version 9.2.0: introduced
     */
    class WorkflowOperationAction extends MicroflowAction {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__operation = new internal.PartProperty(WorkflowOperationAction, this, "operation", null, true);
            if (arguments.length < 4) {
                throw new Error("new WorkflowOperationAction() cannot be invoked directly, please use 'model.microflows.createWorkflowOperationAction()'");
            }
        }
        get containerAsActionActivity() {
            return super.getContainerAs(ActionActivity);
        }
        get operation() {
            return this.__operation.get();
        }
        set operation(newValue) {
            this.__operation.set(newValue);
        }
        /**
         * Creates and returns a new WorkflowOperationAction instance in the SDK and on the server.
         * The new WorkflowOperationAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.2.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, WorkflowOperationAction.structureTypeName, { start: "9.2.0" });
            return internal.instancehelpers.createElement(container, WorkflowOperationAction, "action", false);
        }
        /**
         * Creates and returns a new WorkflowOperationAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, WorkflowOperationAction);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.operation = AbortOperation.create(this.model);
        }
    }
    WorkflowOperationAction.structureTypeName = "Microflows$WorkflowOperationAction";
    WorkflowOperationAction.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.2.0",
        properties: {
            operation: {
                required: {
                    currentValue: true
                }
            }
        },
        experimental: {
            currentValue: false,
            changedIn: ["9.12.0"]
        }
    }, internal.StructureType.Element);
    microflows.WorkflowOperationAction = WorkflowOperationAction;
})(microflows = exports.microflows || (exports.microflows = {}));
const datatypes_1 = require("./datatypes");
const domainmodels_1 = require("./domainmodels");
const expressions_1 = require("./expressions");
const mappings_1 = require("./mappings");
const pages_1 = require("./pages");
const rest_1 = require("./rest");
const services_1 = require("./services");
const texts_1 = require("./texts");
const workflows_1 = require("./workflows");
//# sourceMappingURL=microflows.js.map