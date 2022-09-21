import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
import { common } from "../common";
import { projects } from "./projects";
export declare namespace microflows {
    class ActionActivityColor extends internal.AbstractEnum {
        static Default: ActionActivityColor;
        static Blue: ActionActivityColor;
        static Gray: ActionActivityColor;
        static Green: ActionActivityColor;
        static LightBlue: ActionActivityColor;
        static Orange: ActionActivityColor;
        static Purple: ActionActivityColor;
        static Red: ActionActivityColor;
        static Yellow: ActionActivityColor;
        protected qualifiedTsTypeName: string;
    }
    class AggregateFunctionEnum extends internal.AbstractEnum {
        static Sum: AggregateFunctionEnum;
        static Average: AggregateFunctionEnum;
        static Count: AggregateFunctionEnum;
        static Minimum: AggregateFunctionEnum;
        static Maximum: AggregateFunctionEnum;
        protected qualifiedTsTypeName: string;
    }
    class ChangeActionItemType extends internal.AbstractEnum {
        static Set: ChangeActionItemType;
        static Add: ChangeActionItemType;
        static Remove: ChangeActionItemType;
        protected qualifiedTsTypeName: string;
    }
    class ChangeListActionType extends internal.AbstractEnum {
        static Set: ChangeListActionType;
        static Add: ChangeListActionType;
        static Remove: ChangeListActionType;
        static Clear: ChangeListActionType;
        protected qualifiedTsTypeName: string;
    }
    class CommitEnum extends internal.AbstractEnum {
        static Yes: CommitEnum;
        static YesWithoutEvents: CommitEnum;
        static No: CommitEnum;
        protected qualifiedTsTypeName: string;
    }
    class ContentType extends internal.AbstractEnum {
        static Xml: ContentType;
        static Json: ContentType;
        protected qualifiedTsTypeName: string;
    }
    class ErrorHandlingType extends internal.AbstractEnum {
        static Rollback: ErrorHandlingType;
        static Custom: ErrorHandlingType;
        static CustomWithoutRollBack: ErrorHandlingType;
        static Continue: ErrorHandlingType;
        static Abort: ErrorHandlingType;
        protected qualifiedTsTypeName: string;
    }
    class ErrorResultHandlingType extends internal.AbstractEnum {
        static HttpResponse: ErrorResultHandlingType;
        static None: ErrorResultHandlingType;
        protected qualifiedTsTypeName: string;
    }
    class HttpMethod extends internal.AbstractEnum {
        static Post: HttpMethod;
        static Get: HttpMethod;
        static Put: HttpMethod;
        static Patch: HttpMethod;
        static Delete: HttpMethod;
        protected qualifiedTsTypeName: string;
    }
    class LanguageSettingType extends internal.AbstractEnum {
        static CurrentUser: LanguageSettingType;
        static ProjectDefault: LanguageSettingType;
        static Variable: LanguageSettingType;
        protected qualifiedTsTypeName: string;
    }
    class LogLevel extends internal.AbstractEnum {
        static Trace: LogLevel;
        static Debug: LogLevel;
        static Info: LogLevel;
        static Warning: LogLevel;
        static Error: LogLevel;
        static Critical: LogLevel;
        protected qualifiedTsTypeName: string;
    }
    class NullValueOption extends internal.AbstractEnum {
        static SendAsNil: NullValueOption;
        static LeaveOutElement: NullValueOption;
        protected qualifiedTsTypeName: string;
    }
    class RequestHandlingType extends internal.AbstractEnum {
        static Mapping: RequestHandlingType;
        static Simple: RequestHandlingType;
        static Advanced: RequestHandlingType;
        static Binary: RequestHandlingType;
        static Custom: RequestHandlingType;
        static FormData: RequestHandlingType;
        protected qualifiedTsTypeName: string;
    }
    class RequestProxyType extends internal.AbstractEnum {
        static DefaultProxy: RequestProxyType;
        static Override: RequestProxyType;
        static NoProxy: RequestProxyType;
        protected qualifiedTsTypeName: string;
    }
    class ResultHandlingType extends internal.AbstractEnum {
        static Mapping: ResultHandlingType;
        static String: ResultHandlingType;
        static HttpResponse: ResultHandlingType;
        static FileDocument: ResultHandlingType;
        static None: ResultHandlingType;
        protected qualifiedTsTypeName: string;
    }
    class ShowMessageType extends internal.AbstractEnum {
        static Information: ShowMessageType;
        static Warning: ShowMessageType;
        static Error: ShowMessageType;
        protected qualifiedTsTypeName: string;
    }
    class SortOrderEnum extends internal.AbstractEnum {
        static Ascending: SortOrderEnum;
        static Descending: SortOrderEnum;
        protected qualifiedTsTypeName: string;
    }
    class SynchronizationType extends internal.AbstractEnum {
        static All: SynchronizationType;
        static Unsynchronized: SynchronizationType;
        static Specific: SynchronizationType;
        protected qualifiedTsTypeName: string;
    }
    class TargetDocumentType extends internal.AbstractEnum {
        static HTML: TargetDocumentType;
        static PDF: TargetDocumentType;
        static DOCX: TargetDocumentType;
        static DOC: TargetDocumentType;
        static RTF: TargetDocumentType;
        static ODT: TargetDocumentType;
        protected qualifiedTsTypeName: string;
    }
    class TypedTemplateArgumentType extends internal.AbstractEnum {
        static Boolean: TypedTemplateArgumentType;
        static DateTime: TypedTemplateArgumentType;
        static Decimal: TypedTemplateArgumentType;
        static Integer: TypedTemplateArgumentType;
        static String: TypedTemplateArgumentType;
        protected qualifiedTsTypeName: string;
    }
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `Microflows`.
     */
    /**
     * In version 9.12.0: removed experimental
     * In version 9.2.0: introduced
     */
    abstract class WorkflowOperation extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsWorkflowOperationAction(): WorkflowOperationAction;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 9.12.0: removed experimental
     * In version 9.2.0: introduced
     */
    class AbortOperation extends WorkflowOperation {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsWorkflowOperationAction(): WorkflowOperationAction;
        get workflowVariable(): string;
        set workflowVariable(newValue: string);
        get reason(): StringTemplate;
        set reason(newValue: StringTemplate);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new AbortOperation instance in the SDK and on the server.
         * The new AbortOperation will be automatically stored in the 'operation' property
         * of the parent WorkflowOperationAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.2.0 and higher
         */
        static createIn(container: WorkflowOperationAction): AbortOperation;
        /**
         * Creates and returns a new AbortOperation instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): AbortOperation;
    }
    abstract class MicroflowObject extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsMicroflowObjectCollection(): MicroflowObjectCollection;
        get relativeMiddlePoint(): common.IPoint;
        set relativeMiddlePoint(newValue: common.IPoint);
        get size(): common.ISize;
        set size(newValue: common.ISize);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    abstract class Activity extends MicroflowObject {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsMicroflowObjectCollection(): MicroflowObjectCollection;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    class ActionActivity extends Activity {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsMicroflowObjectCollection(): MicroflowObjectCollection;
        get action(): MicroflowAction | null;
        set action(newValue: MicroflowAction | null);
        /**
         * In version 9.12.0: introduced
         */
        get disabled(): boolean;
        set disabled(newValue: boolean);
        get caption(): string;
        set caption(newValue: string);
        get autoGenerateCaption(): boolean;
        set autoGenerateCaption(newValue: boolean);
        get backgroundColor(): ActionActivityColor;
        set backgroundColor(newValue: ActionActivityColor);
        get documentation(): string;
        set documentation(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ActionActivity instance in the SDK and on the server.
         * The new ActionActivity will be automatically stored in the 'objects' property
         * of the parent MicroflowObjectCollection element passed as argument.
         */
        static createIn(container: MicroflowObjectCollection): ActionActivity;
        /**
         * Creates and returns a new ActionActivity instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ActionActivity;
    }
    abstract class RequestHandling extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsExportXmlAction(): ExportXmlAction;
        get containerAsRestCallAction(): RestCallAction;
        get containerAsWebServiceCallAction(): WebServiceCallAction;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    class AdvancedRequestHandling extends RequestHandling {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsRestCallAction(): RestCallAction;
        get containerAsWebServiceCallAction(): WebServiceCallAction;
        get parameterMappings(): internal.IList<WebServiceOperationAdvancedParameterMapping>;
        /**
         * In version 6.7.0: introduced
         */
        get nullValueOption(): NullValueOption;
        set nullValueOption(newValue: NullValueOption);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new AdvancedRequestHandling instance in the SDK and on the server.
         * The new AdvancedRequestHandling will be automatically stored in the 'requestHandling' property
         * of the parent RestCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 and higher
         */
        static createInRestCallActionUnderRequestHandling(container: RestCallAction): AdvancedRequestHandling;
        /**
         * Creates and returns a new AdvancedRequestHandling instance in the SDK and on the server.
         * The new AdvancedRequestHandling will be automatically stored in the 'requestBodyHandling' property
         * of the parent WebServiceCallAction element passed as argument.
         */
        static createInWebServiceCallActionUnderRequestBodyHandling(container: WebServiceCallAction): AdvancedRequestHandling;
        /**
         * Creates and returns a new AdvancedRequestHandling instance in the SDK and on the server.
         * The new AdvancedRequestHandling will be automatically stored in the 'requestHeaderHandling' property
         * of the parent WebServiceCallAction element passed as argument.
         */
        static createInWebServiceCallActionUnderRequestHeaderHandling(container: WebServiceCallAction): AdvancedRequestHandling;
        /**
         * Creates and returns a new AdvancedRequestHandling instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): AdvancedRequestHandling;
    }
    abstract class MicroflowAction extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsActionActivity(): ActionActivity;
        get errorHandlingType(): ErrorHandlingType;
        set errorHandlingType(newValue: ErrorHandlingType);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/aggregate-list relevant section in reference guide}
     */
    class AggregateListAction extends MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsActionActivity(): ActionActivity;
        get inputListVariableName(): string;
        set inputListVariableName(newValue: string);
        get attribute(): domainmodels.IAttribute | null;
        set attribute(newValue: domainmodels.IAttribute | null);
        get attributeQualifiedName(): string | null;
        get aggregateFunction(): AggregateFunctionEnum;
        set aggregateFunction(newValue: AggregateFunctionEnum);
        get outputVariableName(): string;
        set outputVariableName(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new AggregateListAction instance in the SDK and on the server.
         * The new AggregateListAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container: ActionActivity): AggregateListAction;
        /**
         * Creates and returns a new AggregateListAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): AggregateListAction;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/annotation relevant section in reference guide}
     */
    class Annotation extends MicroflowObject {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsMicroflowObjectCollection(): MicroflowObjectCollection;
        get caption(): string;
        set caption(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new Annotation instance in the SDK and on the server.
         * The new Annotation will be automatically stored in the 'objects' property
         * of the parent MicroflowObjectCollection element passed as argument.
         */
        static createIn(container: MicroflowObjectCollection): Annotation;
        /**
         * Creates and returns a new Annotation instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): Annotation;
    }
    abstract class Flow extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsMicroflowBase(): MicroflowBase;
        get origin(): MicroflowObject;
        set origin(newValue: MicroflowObject);
        get destination(): MicroflowObject;
        set destination(newValue: MicroflowObject);
        get originConnectionIndex(): number;
        set originConnectionIndex(newValue: number);
        get destinationConnectionIndex(): number;
        set destinationConnectionIndex(newValue: number);
        get originBezierVector(): common.ISize;
        set originBezierVector(newValue: common.ISize);
        get destinationBezierVector(): common.ISize;
        set destinationBezierVector(newValue: common.ISize);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/annotation relevant section in reference guide}
     */
    class AnnotationFlow extends Flow {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsMicroflowBase(): MicroflowBase;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new AnnotationFlow instance in the SDK and on the server.
         * The new AnnotationFlow will be automatically stored in the 'flows' property
         * of the parent MicroflowBase element passed as argument.
         */
        static createIn(container: MicroflowBase): AnnotationFlow;
        /**
         * Creates and returns a new AnnotationFlow instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): AnnotationFlow;
    }
    /**
     * In version 9.0.2: deleted
     */
    class AppServiceCallAction extends MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsActionActivity(): ActionActivity;
        get appServiceAction(): appservices.IAppServiceAction | null;
        set appServiceAction(newValue: appservices.IAppServiceAction | null);
        get appServiceActionQualifiedName(): string | null;
        get parameterMappings(): internal.IList<AppServiceCallParameterMapping>;
        get useVariable(): boolean;
        set useVariable(newValue: boolean);
        get outputVariableName(): string;
        set outputVariableName(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new AppServiceCallAction instance in the SDK and on the server.
         * The new AppServiceCallAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 9.0.1
         */
        static createIn(container: ActionActivity): AppServiceCallAction;
        /**
         * Creates and returns a new AppServiceCallAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): AppServiceCallAction;
    }
    /**
     * In version 9.0.2: deleted
     */
    class AppServiceCallParameterMapping extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsAppServiceCallAction(): AppServiceCallAction;
        get parameter(): appservices.IAppServiceActionParameter | null;
        set parameter(newValue: appservices.IAppServiceActionParameter | null);
        get parameterQualifiedName(): string | null;
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get argument(): string;
        set argument(newValue: string);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 7.9.0: introduced
         */
        get argumentModel(): expressions.Expression;
        set argumentModel(newValue: expressions.Expression);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new AppServiceCallParameterMapping instance in the SDK and on the server.
         * The new AppServiceCallParameterMapping will be automatically stored in the 'parameterMappings' property
         * of the parent AppServiceCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 9.0.1
         */
        static createIn(container: AppServiceCallAction): AppServiceCallParameterMapping;
        /**
         * Creates and returns a new AppServiceCallParameterMapping instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): AppServiceCallParameterMapping;
    }
    /**
     * In version 9.15.0: introduced
     */
    class ApplyJumpToOptionAction extends MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsActionActivity(): ActionActivity;
        get workflowJumpToDetailsVariable(): string;
        set workflowJumpToDetailsVariable(newValue: string);
        get outputVariableName(): string;
        set outputVariableName(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ApplyJumpToOptionAction instance in the SDK and on the server.
         * The new ApplyJumpToOptionAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.15.0 and higher
         */
        static createIn(container: ActionActivity): ApplyJumpToOptionAction;
        /**
         * Creates and returns a new ApplyJumpToOptionAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ApplyJumpToOptionAction;
    }
    abstract class RetrieveSource extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsRetrieveAction(): RetrieveAction;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    class AssociationRetrieveSource extends RetrieveSource {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsRetrieveAction(): RetrieveAction;
        get startVariableName(): string;
        set startVariableName(newValue: string);
        get association(): domainmodels.IAssociationBase | null;
        set association(newValue: domainmodels.IAssociationBase | null);
        get associationQualifiedName(): string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new AssociationRetrieveSource instance in the SDK and on the server.
         * The new AssociationRetrieveSource will be automatically stored in the 'retrieveSource' property
         * of the parent RetrieveAction element passed as argument.
         */
        static createIn(container: RetrieveAction): AssociationRetrieveSource;
        /**
         * Creates and returns a new AssociationRetrieveSource instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): AssociationRetrieveSource;
    }
    /**
     * In version 7.21.0: introduced
     */
    abstract class CodeActionParameterValue extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsJavaActionParameterMapping(): JavaActionParameterMapping;
        get containerAsJavaScriptActionParameterMapping(): JavaScriptActionParameterMapping;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 7.21.0: introduced
     */
    abstract class ExpressionBasedCodeActionParameterValue extends CodeActionParameterValue {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsJavaActionParameterMapping(): JavaActionParameterMapping;
        get containerAsJavaScriptActionParameterMapping(): JavaScriptActionParameterMapping;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 7.21.0: introduced
     */
    class BasicCodeActionParameterValue extends ExpressionBasedCodeActionParameterValue {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsJavaActionParameterMapping(): JavaActionParameterMapping;
        get containerAsJavaScriptActionParameterMapping(): JavaScriptActionParameterMapping;
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get argument(): string;
        set argument(newValue: string);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.8.0: deleted
         */
        get argumentModel(): expressions.Expression;
        set argumentModel(newValue: expressions.Expression);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new BasicCodeActionParameterValue instance in the SDK and on the server.
         * The new BasicCodeActionParameterValue will be automatically stored in the 'parameterValue' property
         * of the parent JavaActionParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInJavaActionParameterMappingUnderParameterValue(container: JavaActionParameterMapping): BasicCodeActionParameterValue;
        /**
         * Creates and returns a new BasicCodeActionParameterValue instance in the SDK and on the server.
         * The new BasicCodeActionParameterValue will be automatically stored in the 'parameterValue' property
         * of the parent JavaScriptActionParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInJavaScriptActionParameterMappingUnderParameterValue(container: JavaScriptActionParameterMapping): BasicCodeActionParameterValue;
        /**
         * Creates and returns a new BasicCodeActionParameterValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): BasicCodeActionParameterValue;
    }
    /**
     * In version 7.21.0: deleted
     * In version 6.7.0: introduced
     */
    abstract class JavaActionParameterValue extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsJavaActionParameterMapping(): JavaActionParameterMapping;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 7.21.0: deleted
     * In version 6.7.0: introduced
     */
    class BasicJavaActionParameterValue extends JavaActionParameterValue {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsJavaActionParameterMapping(): JavaActionParameterMapping;
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get argument(): string;
        set argument(newValue: string);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 7.9.0: introduced
         */
        get argumentModel(): expressions.Expression;
        set argumentModel(newValue: expressions.Expression);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new BasicJavaActionParameterValue instance in the SDK and on the server.
         * The new BasicJavaActionParameterValue will be automatically stored in the 'value' property
         * of the parent JavaActionParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.7.0 to 7.20.0
         */
        static createIn(container: JavaActionParameterMapping): BasicJavaActionParameterValue;
        /**
         * Creates and returns a new BasicJavaActionParameterValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): BasicJavaActionParameterValue;
    }
    abstract class ListOperation extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsListOperationAction(): ListOperationAction;
        get listVariableName(): string;
        set listVariableName(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    abstract class BinaryListOperation extends ListOperation {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsListOperationAction(): ListOperationAction;
        get secondListOrObjectVariableName(): string;
        set secondListOrObjectVariableName(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 6.9.0: introduced
     */
    class BinaryRequestHandling extends RequestHandling {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsRestCallAction(): RestCallAction;
        get containerAsWebServiceCallAction(): WebServiceCallAction;
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get expression(): string;
        set expression(newValue: string);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.8.0: deleted
         * In version 7.9.0: introduced
         */
        get expressionModel(): expressions.Expression;
        set expressionModel(newValue: expressions.Expression);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new BinaryRequestHandling instance in the SDK and on the server.
         * The new BinaryRequestHandling will be automatically stored in the 'requestHandling' property
         * of the parent RestCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.9.0 and higher
         */
        static createInRestCallActionUnderRequestHandling(container: RestCallAction): BinaryRequestHandling;
        /**
         * Creates and returns a new BinaryRequestHandling instance in the SDK and on the server.
         * The new BinaryRequestHandling will be automatically stored in the 'requestBodyHandling' property
         * of the parent WebServiceCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.9.0 and higher
         */
        static createInWebServiceCallActionUnderRequestBodyHandling(container: WebServiceCallAction): BinaryRequestHandling;
        /**
         * Creates and returns a new BinaryRequestHandling instance in the SDK and on the server.
         * The new BinaryRequestHandling will be automatically stored in the 'requestHeaderHandling' property
         * of the parent WebServiceCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.9.0 and higher
         */
        static createInWebServiceCallActionUnderRequestHeaderHandling(container: WebServiceCallAction): BinaryRequestHandling;
        /**
         * Creates and returns a new BinaryRequestHandling instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): BinaryRequestHandling;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/break-event relevant section in reference guide}
     */
    class BreakEvent extends MicroflowObject {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsMicroflowObjectCollection(): MicroflowObjectCollection;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new BreakEvent instance in the SDK and on the server.
         * The new BreakEvent will be automatically stored in the 'objects' property
         * of the parent MicroflowObjectCollection element passed as argument.
         */
        static createIn(container: MicroflowObjectCollection): BreakEvent;
        /**
         * Creates and returns a new BreakEvent instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): BreakEvent;
    }
    abstract class CaseValue extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsSequenceFlow(): SequenceFlow;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/cast-object relevant section in reference guide}
     */
    class CastAction extends MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsActionActivity(): ActionActivity;
        get outputVariableName(): string;
        set outputVariableName(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new CastAction instance in the SDK and on the server.
         * The new CastAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container: ActionActivity): CastAction;
        /**
         * Creates and returns a new CastAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): CastAction;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/change-list relevant section in reference guide}
     */
    class ChangeListAction extends MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsActionActivity(): ActionActivity;
        get changeVariableName(): string;
        set changeVariableName(newValue: string);
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get value(): string;
        set value(newValue: string);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.8.0: deleted
         * In version 7.9.0: introduced
         */
        get valueModel(): expressions.Expression;
        set valueModel(newValue: expressions.Expression);
        get type(): ChangeListActionType;
        set type(newValue: ChangeListActionType);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ChangeListAction instance in the SDK and on the server.
         * The new ChangeListAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container: ActionActivity): ChangeListAction;
        /**
         * Creates and returns a new ChangeListAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ChangeListAction;
    }
    abstract class ChangeMembersAction extends MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsActionActivity(): ActionActivity;
        get items(): internal.IList<MemberChange>;
        get refreshInClient(): boolean;
        set refreshInClient(newValue: boolean);
        get commit(): CommitEnum;
        set commit(newValue: CommitEnum);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/change-object relevant section in reference guide}
     */
    class ChangeObjectAction extends ChangeMembersAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsActionActivity(): ActionActivity;
        get changeVariableName(): string;
        set changeVariableName(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ChangeObjectAction instance in the SDK and on the server.
         * The new ChangeObjectAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container: ActionActivity): ChangeObjectAction;
        /**
         * Creates and returns a new ChangeObjectAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ChangeObjectAction;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/change-variable relevant section in reference guide}
     */
    class ChangeVariableAction extends MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsActionActivity(): ActionActivity;
        get changeVariableName(): string;
        set changeVariableName(newValue: string);
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get value(): string;
        set value(newValue: string);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.8.0: deleted
         * In version 7.9.0: introduced
         */
        get valueModel(): expressions.Expression;
        set valueModel(newValue: expressions.Expression);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ChangeVariableAction instance in the SDK and on the server.
         * The new ChangeVariableAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container: ActionActivity): ChangeVariableAction;
        /**
         * Creates and returns a new ChangeVariableAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ChangeVariableAction;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/close-page relevant section in reference guide}
     */
    class CloseFormAction extends MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsActionActivity(): ActionActivity;
        /**
         * In version 8.11.0: deleted
         * In version 8.9.0: introduced
         */
        get numberOfPages(): number;
        set numberOfPages(newValue: number);
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         *
         * In version 8.11.0: introduced
         */
        get numberOfPagesToClose(): string;
        set numberOfPagesToClose(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new CloseFormAction instance in the SDK and on the server.
         * The new CloseFormAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container: ActionActivity): CloseFormAction;
        /**
         * Creates and returns a new CloseFormAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): CloseFormAction;
    }
    abstract class CodeActionParameterMapping extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsJavaActionCallAction(): JavaActionCallAction;
        get containerAsJavaScriptActionCallAction(): JavaScriptActionCallAction;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/committing-objects relevant section in reference guide}
     */
    class CommitAction extends MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsActionActivity(): ActionActivity;
        get withEvents(): boolean;
        set withEvents(newValue: boolean);
        get commitVariableName(): string;
        set commitVariableName(newValue: string);
        get refreshInClient(): boolean;
        set refreshInClient(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new CommitAction instance in the SDK and on the server.
         * The new CommitAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container: ActionActivity): CommitAction;
        /**
         * Creates and returns a new CommitAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): CommitAction;
    }
    abstract class Range extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsDatabaseRetrieveSource(): DatabaseRetrieveSource;
        get containerAsImportMappingCall(): ImportMappingCall;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    class ConstantRange extends Range {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsDatabaseRetrieveSource(): DatabaseRetrieveSource;
        get containerAsImportMappingCall(): ImportMappingCall;
        get singleObject(): boolean;
        set singleObject(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ConstantRange instance in the SDK and on the server.
         * The new ConstantRange will be automatically stored in the 'range' property
         * of the parent DatabaseRetrieveSource element passed as argument.
         */
        static createInDatabaseRetrieveSourceUnderRange(container: DatabaseRetrieveSource): ConstantRange;
        /**
         * Creates and returns a new ConstantRange instance in the SDK and on the server.
         * The new ConstantRange will be automatically stored in the 'range' property
         * of the parent ImportMappingCall element passed as argument.
         */
        static createInImportMappingCallUnderRange(container: ImportMappingCall): ConstantRange;
        /**
         * Creates and returns a new ConstantRange instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ConstantRange;
    }
    class Contains extends BinaryListOperation {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsListOperationAction(): ListOperationAction;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new Contains instance in the SDK and on the server.
         * The new Contains will be automatically stored in the 'operation' property
         * of the parent ListOperationAction element passed as argument.
         */
        static createIn(container: ListOperationAction): Contains;
        /**
         * Creates and returns a new Contains instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): Contains;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/continue-event relevant section in reference guide}
     */
    class ContinueEvent extends MicroflowObject {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsMicroflowObjectCollection(): MicroflowObjectCollection;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ContinueEvent instance in the SDK and on the server.
         * The new ContinueEvent will be automatically stored in the 'objects' property
         * of the parent MicroflowObjectCollection element passed as argument.
         */
        static createIn(container: MicroflowObjectCollection): ContinueEvent;
        /**
         * Creates and returns a new ContinueEvent instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ContinueEvent;
    }
    /**
     * In version 9.12.0: removed experimental
     * In version 9.3.0: introduced
     */
    class ContinueOperation extends WorkflowOperation {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsWorkflowOperationAction(): WorkflowOperationAction;
        get workflowVariable(): string;
        set workflowVariable(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ContinueOperation instance in the SDK and on the server.
         * The new ContinueOperation will be automatically stored in the 'operation' property
         * of the parent WorkflowOperationAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.3.0 and higher
         */
        static createIn(container: WorkflowOperationAction): ContinueOperation;
        /**
         * Creates and returns a new ContinueOperation instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ContinueOperation;
    }
    /**
     * In version 9.7.0: removed experimental
     * In version 9.5.0: introduced
     */
    abstract class MeterAction extends MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsActionActivity(): ActionActivity;
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get name(): string;
        set name(newValue: string);
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get description(): string;
        set description(newValue: string);
        get tags(): internal.IList<MeterTagMapping>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/metrics-counter relevant section in reference guide}
     *
     * In version 9.7.0: removed experimental
     * In version 9.5.0: introduced
     */
    class CounterMeterAction extends MeterAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsActionActivity(): ActionActivity;
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get value(): string;
        set value(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new CounterMeterAction instance in the SDK and on the server.
         * The new CounterMeterAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.5.0 and higher
         */
        static createIn(container: ActionActivity): CounterMeterAction;
        /**
         * Creates and returns a new CounterMeterAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): CounterMeterAction;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/create-list relevant section in reference guide}
     */
    class CreateListAction extends MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsActionActivity(): ActionActivity;
        get entity(): domainmodels.IEntity | null;
        set entity(newValue: domainmodels.IEntity | null);
        get entityQualifiedName(): string | null;
        get outputVariableName(): string;
        set outputVariableName(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new CreateListAction instance in the SDK and on the server.
         * The new CreateListAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container: ActionActivity): CreateListAction;
        /**
         * Creates and returns a new CreateListAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): CreateListAction;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/create-object relevant section in reference guide}
     */
    class CreateObjectAction extends ChangeMembersAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsActionActivity(): ActionActivity;
        get entity(): domainmodels.IEntity | null;
        set entity(newValue: domainmodels.IEntity | null);
        get entityQualifiedName(): string | null;
        get outputVariableName(): string;
        set outputVariableName(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new CreateObjectAction instance in the SDK and on the server.
         * The new CreateObjectAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container: ActionActivity): CreateObjectAction;
        /**
         * Creates and returns a new CreateObjectAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): CreateObjectAction;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/create-variable relevant section in reference guide}
     */
    class CreateVariableAction extends MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsActionActivity(): ActionActivity;
        get variableName(): string;
        set variableName(newValue: string);
        /**
         * The value of this property is conceptually of type dataTypes.LegacyDataType.
         *
         * In version 7.9.0: deleted
         */
        get variableDataType(): string;
        set variableDataType(newValue: string);
        /**
         * In version 7.9.0: introduced
         */
        get variableType(): datatypes.DataType;
        set variableType(newValue: datatypes.DataType);
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get initialValue(): string;
        set initialValue(newValue: string);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.8.0: deleted
         * In version 7.9.0: introduced
         */
        get initialValueModel(): expressions.Expression;
        set initialValueModel(newValue: expressions.Expression);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new CreateVariableAction instance in the SDK and on the server.
         * The new CreateVariableAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container: ActionActivity): CreateVariableAction;
        /**
         * Creates and returns a new CreateVariableAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): CreateVariableAction;
    }
    class CustomRange extends Range {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsDatabaseRetrieveSource(): DatabaseRetrieveSource;
        get containerAsImportMappingCall(): ImportMappingCall;
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get limitExpression(): string;
        set limitExpression(newValue: string);
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get offsetExpression(): string;
        set offsetExpression(newValue: string);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.8.0: deleted
         * In version 7.9.0: introduced
         */
        get limitExpressionModel(): expressions.Expression;
        set limitExpressionModel(newValue: expressions.Expression);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.8.0: deleted
         * In version 7.9.0: introduced
         */
        get offsetExpressionModel(): expressions.Expression;
        set offsetExpressionModel(newValue: expressions.Expression);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new CustomRange instance in the SDK and on the server.
         * The new CustomRange will be automatically stored in the 'range' property
         * of the parent DatabaseRetrieveSource element passed as argument.
         */
        static createInDatabaseRetrieveSourceUnderRange(container: DatabaseRetrieveSource): CustomRange;
        /**
         * Creates and returns a new CustomRange instance in the SDK and on the server.
         * The new CustomRange will be automatically stored in the 'range' property
         * of the parent ImportMappingCall element passed as argument.
         */
        static createInImportMappingCallUnderRange(container: ImportMappingCall): CustomRange;
        /**
         * Creates and returns a new CustomRange instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): CustomRange;
    }
    class CustomRequestHandling extends RequestHandling {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsRestCallAction(): RestCallAction;
        get containerAsWebServiceCallAction(): WebServiceCallAction;
        get template(): StringTemplate;
        set template(newValue: StringTemplate);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new CustomRequestHandling instance in the SDK and on the server.
         * The new CustomRequestHandling will be automatically stored in the 'requestHandling' property
         * of the parent RestCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 and higher
         */
        static createInRestCallActionUnderRequestHandling(container: RestCallAction): CustomRequestHandling;
        /**
         * Creates and returns a new CustomRequestHandling instance in the SDK and on the server.
         * The new CustomRequestHandling will be automatically stored in the 'requestBodyHandling' property
         * of the parent WebServiceCallAction element passed as argument.
         */
        static createInWebServiceCallActionUnderRequestBodyHandling(container: WebServiceCallAction): CustomRequestHandling;
        /**
         * Creates and returns a new CustomRequestHandling instance in the SDK and on the server.
         * The new CustomRequestHandling will be automatically stored in the 'requestHeaderHandling' property
         * of the parent WebServiceCallAction element passed as argument.
         */
        static createInWebServiceCallActionUnderRequestHeaderHandling(container: WebServiceCallAction): CustomRequestHandling;
        /**
         * Creates and returns a new CustomRequestHandling instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): CustomRequestHandling;
    }
    class DatabaseRetrieveSource extends RetrieveSource {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsRetrieveAction(): RetrieveAction;
        get entity(): domainmodels.IEntity | null;
        set entity(newValue: domainmodels.IEntity | null);
        get entityQualifiedName(): string | null;
        get range(): Range;
        set range(newValue: Range);
        /**
         * The value of this property is conceptually of type xPathConstraints.XPathConstraint.
         */
        get xPathConstraint(): string;
        set xPathConstraint(newValue: string);
        get sortItemList(): SortItemList;
        set sortItemList(newValue: SortItemList);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new DatabaseRetrieveSource instance in the SDK and on the server.
         * The new DatabaseRetrieveSource will be automatically stored in the 'retrieveSource' property
         * of the parent RetrieveAction element passed as argument.
         */
        static createIn(container: RetrieveAction): DatabaseRetrieveSource;
        /**
         * Creates and returns a new DatabaseRetrieveSource instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): DatabaseRetrieveSource;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/deleting-objects relevant section in reference guide}
     */
    class DeleteAction extends MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsActionActivity(): ActionActivity;
        get deleteVariableName(): string;
        set deleteVariableName(newValue: string);
        get refreshInClient(): boolean;
        set refreshInClient(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new DeleteAction instance in the SDK and on the server.
         * The new DeleteAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container: ActionActivity): DeleteAction;
        /**
         * Creates and returns a new DeleteAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): DeleteAction;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/delete-external-object relevant section in reference guide}
     *
     * In version 9.12.0: introduced
     */
    class DeleteExternalObject extends MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsActionActivity(): ActionActivity;
        get deleteVariableName(): string;
        set deleteVariableName(newValue: string);
        get refreshInClient(): boolean;
        set refreshInClient(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new DeleteExternalObject instance in the SDK and on the server.
         * The new DeleteExternalObject will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.12.0 and higher
         */
        static createIn(container: ActionActivity): DeleteExternalObject;
        /**
         * Creates and returns a new DeleteExternalObject instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): DeleteExternalObject;
    }
    class DocumentTemplateParameterMapping extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsGenerateDocumentAction(): GenerateDocumentAction;
        get widgetName(): string;
        set widgetName(newValue: string);
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get argument(): string;
        set argument(newValue: string);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.8.0: deleted
         * In version 7.9.0: introduced
         */
        get argumentModel(): expressions.Expression;
        set argumentModel(newValue: expressions.Expression);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new DocumentTemplateParameterMapping instance in the SDK and on the server.
         * The new DocumentTemplateParameterMapping will be automatically stored in the 'parameterMappings' property
         * of the parent GenerateDocumentAction element passed as argument.
         */
        static createIn(container: GenerateDocumentAction): DocumentTemplateParameterMapping;
        /**
         * Creates and returns a new DocumentTemplateParameterMapping instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): DocumentTemplateParameterMapping;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/download-file relevant section in reference guide}
     */
    class DownloadFileAction extends MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsActionActivity(): ActionActivity;
        get fileDocumentVariableName(): string;
        set fileDocumentVariableName(newValue: string);
        get showFileInBrowser(): boolean;
        set showFileInBrowser(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new DownloadFileAction instance in the SDK and on the server.
         * The new DownloadFileAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container: ActionActivity): DownloadFileAction;
        /**
         * Creates and returns a new DownloadFileAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): DownloadFileAction;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/end-event relevant section in reference guide}
     */
    class EndEvent extends MicroflowObject {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsMicroflowObjectCollection(): MicroflowObjectCollection;
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get returnValue(): string;
        set returnValue(newValue: string);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.8.0: deleted
         * In version 7.9.0: introduced
         */
        get returnValueModel(): expressions.Expression;
        set returnValueModel(newValue: expressions.Expression);
        get documentation(): string;
        set documentation(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new EndEvent instance in the SDK and on the server.
         * The new EndEvent will be automatically stored in the 'objects' property
         * of the parent MicroflowObjectCollection element passed as argument.
         */
        static createIn(container: MicroflowObjectCollection): EndEvent;
        /**
         * Creates and returns a new EndEvent instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): EndEvent;
    }
    /**
     * In version 7.21.0: introduced
     */
    class EntityTypeCodeActionParameterValue extends ExpressionBasedCodeActionParameterValue {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsJavaActionParameterMapping(): JavaActionParameterMapping;
        get containerAsJavaScriptActionParameterMapping(): JavaScriptActionParameterMapping;
        get entity(): domainmodels.IEntity | null;
        set entity(newValue: domainmodels.IEntity | null);
        get entityQualifiedName(): string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new EntityTypeCodeActionParameterValue instance in the SDK and on the server.
         * The new EntityTypeCodeActionParameterValue will be automatically stored in the 'parameterValue' property
         * of the parent JavaActionParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInJavaActionParameterMappingUnderParameterValue(container: JavaActionParameterMapping): EntityTypeCodeActionParameterValue;
        /**
         * Creates and returns a new EntityTypeCodeActionParameterValue instance in the SDK and on the server.
         * The new EntityTypeCodeActionParameterValue will be automatically stored in the 'parameterValue' property
         * of the parent JavaScriptActionParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInJavaScriptActionParameterMappingUnderParameterValue(container: JavaScriptActionParameterMapping): EntityTypeCodeActionParameterValue;
        /**
         * Creates and returns a new EntityTypeCodeActionParameterValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): EntityTypeCodeActionParameterValue;
    }
    /**
     * In version 7.21.0: deleted
     * In version 6.8.0: introduced
     */
    class EntityTypeJavaActionParameterValue extends JavaActionParameterValue {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsJavaActionParameterMapping(): JavaActionParameterMapping;
        get entity(): domainmodels.IEntity | null;
        set entity(newValue: domainmodels.IEntity | null);
        get entityQualifiedName(): string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new EntityTypeJavaActionParameterValue instance in the SDK and on the server.
         * The new EntityTypeJavaActionParameterValue will be automatically stored in the 'value' property
         * of the parent JavaActionParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.8.0 to 7.20.0
         */
        static createIn(container: JavaActionParameterMapping): EntityTypeJavaActionParameterValue;
        /**
         * Creates and returns a new EntityTypeJavaActionParameterValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): EntityTypeJavaActionParameterValue;
    }
    class EnumerationCase extends CaseValue {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsSequenceFlow(): SequenceFlow;
        get value(): string;
        set value(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new EnumerationCase instance in the SDK and on the server.
         * The new EnumerationCase will be automatically stored in the 'caseValue' property
         * of the parent SequenceFlow element passed as argument.
         */
        static createIn(container: SequenceFlow): EnumerationCase;
        /**
         * Creates and returns a new EnumerationCase instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): EnumerationCase;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/error-event relevant section in reference guide}
     */
    class ErrorEvent extends MicroflowObject {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsMicroflowObjectCollection(): MicroflowObjectCollection;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ErrorEvent instance in the SDK and on the server.
         * The new ErrorEvent will be automatically stored in the 'objects' property
         * of the parent MicroflowObjectCollection element passed as argument.
         */
        static createIn(container: MicroflowObjectCollection): ErrorEvent;
        /**
         * Creates and returns a new ErrorEvent instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ErrorEvent;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/merge relevant section in reference guide}
     */
    class ExclusiveMerge extends MicroflowObject {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsMicroflowObjectCollection(): MicroflowObjectCollection;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ExclusiveMerge instance in the SDK and on the server.
         * The new ExclusiveMerge will be automatically stored in the 'objects' property
         * of the parent MicroflowObjectCollection element passed as argument.
         */
        static createIn(container: MicroflowObjectCollection): ExclusiveMerge;
        /**
         * Creates and returns a new ExclusiveMerge instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ExclusiveMerge;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/decisions relevant section in reference guide}
     */
    class ExclusiveSplit extends MicroflowObject {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsMicroflowObjectCollection(): MicroflowObjectCollection;
        get splitCondition(): SplitCondition;
        set splitCondition(newValue: SplitCondition);
        get caption(): string;
        set caption(newValue: string);
        get errorHandlingType(): ErrorHandlingType;
        set errorHandlingType(newValue: ErrorHandlingType);
        get documentation(): string;
        set documentation(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ExclusiveSplit instance in the SDK and on the server.
         * The new ExclusiveSplit will be automatically stored in the 'objects' property
         * of the parent MicroflowObjectCollection element passed as argument.
         */
        static createIn(container: MicroflowObjectCollection): ExclusiveSplit;
        /**
         * Creates and returns a new ExclusiveSplit instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ExclusiveSplit;
    }
    /**
     * In version 7.21.0: deleted
     * In version 7.2.0: introduced
     */
    class ExportMappingJavaActionParameterValue extends JavaActionParameterValue {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsJavaActionParameterMapping(): JavaActionParameterMapping;
        get exportMapping(): exportmappings.IExportMapping | null;
        set exportMapping(newValue: exportmappings.IExportMapping | null);
        get exportMappingQualifiedName(): string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ExportMappingJavaActionParameterValue instance in the SDK and on the server.
         * The new ExportMappingJavaActionParameterValue will be automatically stored in the 'value' property
         * of the parent JavaActionParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.2.0 to 7.20.0
         */
        static createIn(container: JavaActionParameterMapping): ExportMappingJavaActionParameterValue;
        /**
         * Creates and returns a new ExportMappingJavaActionParameterValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ExportMappingJavaActionParameterValue;
    }
    /**
     * In version 7.21.0: introduced
     */
    class ExportMappingParameterValue extends ExpressionBasedCodeActionParameterValue {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsJavaActionParameterMapping(): JavaActionParameterMapping;
        get containerAsJavaScriptActionParameterMapping(): JavaScriptActionParameterMapping;
        get exportMapping(): exportmappings.IExportMapping | null;
        set exportMapping(newValue: exportmappings.IExportMapping | null);
        get exportMappingQualifiedName(): string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ExportMappingParameterValue instance in the SDK and on the server.
         * The new ExportMappingParameterValue will be automatically stored in the 'parameterValue' property
         * of the parent JavaActionParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInJavaActionParameterMappingUnderParameterValue(container: JavaActionParameterMapping): ExportMappingParameterValue;
        /**
         * Creates and returns a new ExportMappingParameterValue instance in the SDK and on the server.
         * The new ExportMappingParameterValue will be automatically stored in the 'parameterValue' property
         * of the parent JavaScriptActionParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInJavaScriptActionParameterMappingUnderParameterValue(container: JavaScriptActionParameterMapping): ExportMappingParameterValue;
        /**
         * Creates and returns a new ExportMappingParameterValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ExportMappingParameterValue;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/export-mapping-action relevant section in reference guide}
     */
    class ExportXmlAction extends MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsActionActivity(): ActionActivity;
        /**
         * In version 7.6.0: deleted
         */
        get mapping(): exportmappings.IExportMapping | null;
        set mapping(newValue: exportmappings.IExportMapping | null);
        get mappingQualifiedName(): string | null;
        /**
         * In version 7.6.0: deleted
         */
        get mappingArgumentVariableName(): string;
        set mappingArgumentVariableName(newValue: string);
        /**
         * In version 7.6.0: introduced
         */
        get resultHandling(): MappingRequestHandling;
        set resultHandling(newValue: MappingRequestHandling);
        get outputMethod(): OutputMethod;
        set outputMethod(newValue: OutputMethod);
        get isValidationRequired(): boolean;
        set isValidationRequired(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ExportXmlAction instance in the SDK and on the server.
         * The new ExportXmlAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container: ActionActivity): ExportXmlAction;
        /**
         * Creates and returns a new ExportXmlAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ExportXmlAction;
    }
    /**
     * In version 9.0.3: introduced
     */
    abstract class ExpressionListOperation extends ListOperation {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsListOperationAction(): ListOperationAction;
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get expression(): string;
        set expression(newValue: string);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.8.0: deleted
         */
        get expressionModel(): expressions.Expression;
        set expressionModel(newValue: expressions.Expression);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    abstract class SplitCondition extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsExclusiveSplit(): ExclusiveSplit;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    class ExpressionSplitCondition extends SplitCondition {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsExclusiveSplit(): ExclusiveSplit;
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get expression(): string;
        set expression(newValue: string);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.8.0: deleted
         * In version 7.9.0: introduced
         */
        get expressionModel(): expressions.Expression;
        set expressionModel(newValue: expressions.Expression);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ExpressionSplitCondition instance in the SDK and on the server.
         * The new ExpressionSplitCondition will be automatically stored in the 'splitCondition' property
         * of the parent ExclusiveSplit element passed as argument.
         */
        static createIn(container: ExclusiveSplit): ExpressionSplitCondition;
        /**
         * Creates and returns a new ExpressionSplitCondition instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ExpressionSplitCondition;
    }
    abstract class OutputMethod extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsExportXmlAction(): ExportXmlAction;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    class FileDocumentExport extends OutputMethod {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsExportXmlAction(): ExportXmlAction;
        get targetDocumentVariableName(): string;
        set targetDocumentVariableName(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new FileDocumentExport instance in the SDK and on the server.
         * The new FileDocumentExport will be automatically stored in the 'outputMethod' property
         * of the parent ExportXmlAction element passed as argument.
         */
        static createIn(container: ExportXmlAction): FileDocumentExport;
        /**
         * Creates and returns a new FileDocumentExport instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): FileDocumentExport;
    }
    abstract class InspectAttribute extends ListOperation {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsListOperationAction(): ListOperationAction;
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get expression(): string;
        set expression(newValue: string);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.8.0: deleted
         * In version 7.9.0: introduced
         */
        get expressionModel(): expressions.Expression;
        set expressionModel(newValue: expressions.Expression);
        get attribute(): domainmodels.IAttribute | null;
        set attribute(newValue: domainmodels.IAttribute | null);
        get attributeQualifiedName(): string | null;
        /**
         * In version 7.0.0: introduced
         */
        get association(): domainmodels.IAssociationBase | null;
        set association(newValue: domainmodels.IAssociationBase | null);
        get associationQualifiedName(): string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    class Filter extends InspectAttribute {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsListOperationAction(): ListOperationAction;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new Filter instance in the SDK and on the server.
         * The new Filter will be automatically stored in the 'operation' property
         * of the parent ListOperationAction element passed as argument.
         */
        static createIn(container: ListOperationAction): Filter;
        /**
         * Creates and returns a new Filter instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): Filter;
    }
    /**
     * In version 9.0.3: introduced
     */
    class FilterByExpression extends ExpressionListOperation {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsListOperationAction(): ListOperationAction;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new FilterByExpression instance in the SDK and on the server.
         * The new FilterByExpression will be automatically stored in the 'operation' property
         * of the parent ListOperationAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.3 and higher
         */
        static createIn(container: ListOperationAction): FilterByExpression;
        /**
         * Creates and returns a new FilterByExpression instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): FilterByExpression;
    }
    class Find extends InspectAttribute {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsListOperationAction(): ListOperationAction;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new Find instance in the SDK and on the server.
         * The new Find will be automatically stored in the 'operation' property
         * of the parent ListOperationAction element passed as argument.
         */
        static createIn(container: ListOperationAction): Find;
        /**
         * Creates and returns a new Find instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): Find;
    }
    /**
     * In version 9.0.3: introduced
     */
    class FindByExpression extends ExpressionListOperation {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsListOperationAction(): ListOperationAction;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new FindByExpression instance in the SDK and on the server.
         * The new FindByExpression will be automatically stored in the 'operation' property
         * of the parent ListOperationAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.3 and higher
         */
        static createIn(container: ListOperationAction): FindByExpression;
        /**
         * Creates and returns a new FindByExpression instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): FindByExpression;
    }
    /**
     * In version 8.0.0: introduced
     */
    class FormDataPart extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFormDataRequestHandling(): FormDataRequestHandling;
        get key(): string;
        set key(newValue: string);
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get value(): string;
        set value(newValue: string);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.8.0: deleted
         */
        get valueModel(): expressions.Expression;
        set valueModel(newValue: expressions.Expression);
        /**
         * In version 9.2.0: introduced
         */
        get headerEntries(): internal.IList<HttpHeaderEntry>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new FormDataPart instance in the SDK and on the server.
         * The new FormDataPart will be automatically stored in the 'parts' property
         * of the parent FormDataRequestHandling element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 and higher
         */
        static createIn(container: FormDataRequestHandling): FormDataPart;
        /**
         * Creates and returns a new FormDataPart instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): FormDataPart;
    }
    /**
     * In version 8.0.0: introduced
     */
    class FormDataRequestHandling extends RequestHandling {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsRestCallAction(): RestCallAction;
        get containerAsWebServiceCallAction(): WebServiceCallAction;
        get parts(): internal.IList<FormDataPart>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new FormDataRequestHandling instance in the SDK and on the server.
         * The new FormDataRequestHandling will be automatically stored in the 'requestHandling' property
         * of the parent RestCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 and higher
         */
        static createInRestCallActionUnderRequestHandling(container: RestCallAction): FormDataRequestHandling;
        /**
         * Creates and returns a new FormDataRequestHandling instance in the SDK and on the server.
         * The new FormDataRequestHandling will be automatically stored in the 'requestBodyHandling' property
         * of the parent WebServiceCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 and higher
         */
        static createInWebServiceCallActionUnderRequestBodyHandling(container: WebServiceCallAction): FormDataRequestHandling;
        /**
         * Creates and returns a new FormDataRequestHandling instance in the SDK and on the server.
         * The new FormDataRequestHandling will be automatically stored in the 'requestHeaderHandling' property
         * of the parent WebServiceCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 and higher
         */
        static createInWebServiceCallActionUnderRequestHeaderHandling(container: WebServiceCallAction): FormDataRequestHandling;
        /**
         * Creates and returns a new FormDataRequestHandling instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): FormDataRequestHandling;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/metrics-gauge relevant section in reference guide}
     *
     * In version 9.7.0: removed experimental
     * In version 9.5.0: introduced
     */
    class GaugeMeterAction extends MeterAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsActionActivity(): ActionActivity;
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get value(): string;
        set value(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new GaugeMeterAction instance in the SDK and on the server.
         * The new GaugeMeterAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.5.0 and higher
         */
        static createIn(container: ActionActivity): GaugeMeterAction;
        /**
         * Creates and returns a new GaugeMeterAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): GaugeMeterAction;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/generate-document relevant section in reference guide}
     */
    class GenerateDocumentAction extends MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsActionActivity(): ActionActivity;
        get fileVariableName(): string;
        set fileVariableName(newValue: string);
        get languageVariableName(): string;
        set languageVariableName(newValue: string);
        get documentType(): TargetDocumentType;
        set documentType(newValue: TargetDocumentType);
        get languageSetting(): LanguageSettingType;
        set languageSetting(newValue: LanguageSettingType);
        get documentTemplate(): documenttemplates.IDocumentTemplate | null;
        set documentTemplate(newValue: documenttemplates.IDocumentTemplate | null);
        get documentTemplateQualifiedName(): string | null;
        get parameterMappings(): internal.IList<DocumentTemplateParameterMapping>;
        get overrideTopMargin(): boolean;
        set overrideTopMargin(newValue: boolean);
        get overrideBottomMargin(): boolean;
        set overrideBottomMargin(newValue: boolean);
        get overrideLeftMargin(): boolean;
        set overrideLeftMargin(newValue: boolean);
        get overrideRightMargin(): boolean;
        set overrideRightMargin(newValue: boolean);
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get marginLeftInInch(): string;
        set marginLeftInInch(newValue: string);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.8.0: deleted
         * In version 7.9.0: introduced
         */
        get marginLeftInInchModel(): expressions.Expression;
        set marginLeftInInchModel(newValue: expressions.Expression);
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get marginRightInInch(): string;
        set marginRightInInch(newValue: string);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.8.0: deleted
         * In version 7.9.0: introduced
         */
        get marginRightInInchModel(): expressions.Expression;
        set marginRightInInchModel(newValue: expressions.Expression);
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get marginTopInInch(): string;
        set marginTopInInch(newValue: string);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.8.0: deleted
         * In version 7.9.0: introduced
         */
        get marginTopInInchModel(): expressions.Expression;
        set marginTopInInchModel(newValue: expressions.Expression);
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get marginBottomInInch(): string;
        set marginBottomInInch(newValue: string);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.8.0: deleted
         * In version 7.9.0: introduced
         */
        get marginBottomInInchModel(): expressions.Expression;
        set marginBottomInInchModel(newValue: expressions.Expression);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new GenerateDocumentAction instance in the SDK and on the server.
         * The new GenerateDocumentAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container: ActionActivity): GenerateDocumentAction;
        /**
         * Creates and returns a new GenerateDocumentAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): GenerateDocumentAction;
    }
    /**
     * In version 9.14.0: introduced
     */
    class GenerateJumpToOptionsAction extends MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsActionActivity(): ActionActivity;
        get workflowVariable(): string;
        set workflowVariable(newValue: string);
        /**
         * In version 9.16.0: deleted
         */
        get workflow(): workflows.IWorkflow | null;
        set workflow(newValue: workflows.IWorkflow | null);
        get workflowQualifiedName(): string | null;
        get outputVariableName(): string;
        set outputVariableName(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new GenerateJumpToOptionsAction instance in the SDK and on the server.
         * The new GenerateJumpToOptionsAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.14.0 and higher
         */
        static createIn(container: ActionActivity): GenerateJumpToOptionsAction;
        /**
         * Creates and returns a new GenerateJumpToOptionsAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): GenerateJumpToOptionsAction;
    }
    /**
     * In version 9.12.0: removed experimental
     * In version 9.10.0: introduced
     */
    class GetWorkflowDataAction extends MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsActionActivity(): ActionActivity;
        get workflowVariable(): string;
        set workflowVariable(newValue: string);
        get workflow(): workflows.IWorkflow | null;
        set workflow(newValue: workflows.IWorkflow | null);
        get workflowQualifiedName(): string | null;
        get outputVariableName(): string;
        set outputVariableName(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new GetWorkflowDataAction instance in the SDK and on the server.
         * The new GetWorkflowDataAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.10.0 and higher
         */
        static createIn(container: ActionActivity): GetWorkflowDataAction;
        /**
         * Creates and returns a new GetWorkflowDataAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): GetWorkflowDataAction;
    }
    class Head extends ListOperation {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsListOperationAction(): ListOperationAction;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new Head instance in the SDK and on the server.
         * The new Head will be automatically stored in the 'operation' property
         * of the parent ListOperationAction element passed as argument.
         */
        static createIn(container: ListOperationAction): Head;
        /**
         * Creates and returns a new Head instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): Head;
    }
    class HttpConfiguration extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsRestCallAction(): RestCallAction;
        get containerAsWebServiceCallAction(): WebServiceCallAction;
        get containerAsConsumedODataService(): rest.ConsumedODataService;
        get containerAsInteractiveRest(): rest.InteractiveRest;
        get overrideLocation(): boolean;
        set overrideLocation(newValue: boolean);
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get customLocation(): string;
        set customLocation(newValue: string);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.8.0: deleted
         * In version 7.9.0: introduced
         */
        get customLocationModel(): expressions.Expression;
        set customLocationModel(newValue: expressions.Expression);
        /**
         * In version 6.6.0: introduced
         */
        get customLocationTemplate(): StringTemplate | null;
        set customLocationTemplate(newValue: StringTemplate | null);
        get useAuthentication(): boolean;
        set useAuthentication(newValue: boolean);
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get httpAuthenticationUserName(): string;
        set httpAuthenticationUserName(newValue: string);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.8.0: deleted
         * In version 7.9.0: introduced
         */
        get username(): expressions.Expression;
        set username(newValue: expressions.Expression);
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get authenticationPassword(): string;
        set authenticationPassword(newValue: string);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.8.0: deleted
         * In version 7.9.0: introduced
         */
        get password(): expressions.Expression;
        set password(newValue: expressions.Expression);
        get headerEntries(): internal.IList<HttpHeaderEntry>;
        /**
         * In version 7.7.0: deleted
         * In version 6.6.0: introduced
         */
        get httpMethod(): HttpMethod;
        set httpMethod(newValue: HttpMethod);
        /**
         * In version 7.7.0: introduced
         */
        get newHttpMethod(): services.HttpMethod;
        set newHttpMethod(newValue: services.HttpMethod);
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         *
         * In version 8.18.0: introduced
         */
        get clientCertificate(): string;
        set clientCertificate(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new HttpConfiguration instance in the SDK and on the server.
         * The new HttpConfiguration will be automatically stored in the 'httpConfiguration' property
         * of the parent WebServiceCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.5.0
         */
        static createIn(container: WebServiceCallAction): HttpConfiguration;
        /**
         * Creates and returns a new HttpConfiguration instance in the SDK and on the server.
         * The new HttpConfiguration will be automatically stored in the 'httpConfiguration' property
         * of the parent RestCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 and higher
         */
        static createInRestCallActionUnderHttpConfiguration(container: RestCallAction): HttpConfiguration;
        /**
         * Creates and returns a new HttpConfiguration instance in the SDK and on the server.
         * The new HttpConfiguration will be automatically stored in the 'httpConfiguration' property
         * of the parent WebServiceCallAction element passed as argument.
         */
        static createInWebServiceCallActionUnderHttpConfiguration(container: WebServiceCallAction): HttpConfiguration;
        /**
         * Creates and returns a new HttpConfiguration instance in the SDK and on the server.
         * The new HttpConfiguration will be automatically stored in the 'httpConfiguration' property
         * of the parent rest.ConsumedODataService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 and higher
         */
        static createInConsumedODataServiceUnderHttpConfiguration(container: rest.ConsumedODataService): HttpConfiguration;
        /**
         * Creates and returns a new HttpConfiguration instance in the SDK and on the server.
         * The new HttpConfiguration will be automatically stored in the 'httpConfiguration' property
         * of the parent rest.InteractiveRest element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.18.0 and higher
         */
        static createInInteractiveRestUnderHttpConfiguration(container: rest.InteractiveRest): HttpConfiguration;
        /**
         * Creates and returns a new HttpConfiguration instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): HttpConfiguration;
    }
    class HttpHeaderEntry extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFormDataPart(): FormDataPart;
        get containerAsHttpConfiguration(): HttpConfiguration;
        get key(): string;
        set key(newValue: string);
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get value(): string;
        set value(newValue: string);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.8.0: deleted
         * In version 7.9.0: introduced
         */
        get valueModel(): expressions.Expression;
        set valueModel(newValue: expressions.Expression);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new HttpHeaderEntry instance in the SDK and on the server.
         * The new HttpHeaderEntry will be automatically stored in the 'headerEntries' property
         * of the parent HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 9.1.0
         */
        static createIn(container: HttpConfiguration): HttpHeaderEntry;
        /**
         * Creates and returns a new HttpHeaderEntry instance in the SDK and on the server.
         * The new HttpHeaderEntry will be automatically stored in the 'headerEntries' property
         * of the parent FormDataPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.2.0 and higher
         */
        static createInFormDataPartUnderHeaderEntries(container: FormDataPart): HttpHeaderEntry;
        /**
         * Creates and returns a new HttpHeaderEntry instance in the SDK and on the server.
         * The new HttpHeaderEntry will be automatically stored in the 'headerEntries' property
         * of the parent HttpConfiguration element passed as argument.
         */
        static createInHttpConfigurationUnderHeaderEntries(container: HttpConfiguration): HttpHeaderEntry;
        /**
         * Creates and returns a new HttpHeaderEntry instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): HttpHeaderEntry;
    }
    class ImportMappingCall extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsResultHandling(): ResultHandling;
        get mapping(): importmappings.IImportMapping | null;
        set mapping(newValue: importmappings.IImportMapping | null);
        get mappingQualifiedName(): string | null;
        /**
         * In version 7.17.0: introduced
         */
        get objectHandlingBackup(): mappings.ObjectHandlingBackupEnum;
        set objectHandlingBackup(newValue: mappings.ObjectHandlingBackupEnum);
        /**
         * In version 7.18.0: introduced
         */
        get commit(): CommitEnum;
        set commit(newValue: CommitEnum);
        get mappingArgumentVariableName(): string;
        set mappingArgumentVariableName(newValue: string);
        get range(): Range;
        set range(newValue: Range);
        /**
         * In version 7.6.0: introduced
         */
        get contentType(): ContentType;
        set contentType(newValue: ContentType);
        /**
         * In version 7.8.0: introduced
         */
        get forceSingleOccurrence(): boolean;
        set forceSingleOccurrence(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ImportMappingCall instance in the SDK and on the server.
         * The new ImportMappingCall will be automatically stored in the 'importMappingCall' property
         * of the parent ResultHandling element passed as argument.
         */
        static createIn(container: ResultHandling): ImportMappingCall;
        /**
         * Creates and returns a new ImportMappingCall instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ImportMappingCall;
    }
    /**
     * In version 7.21.0: deleted
     * In version 7.2.0: introduced
     */
    class ImportMappingJavaActionParameterValue extends JavaActionParameterValue {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsJavaActionParameterMapping(): JavaActionParameterMapping;
        get importMapping(): importmappings.IImportMapping | null;
        set importMapping(newValue: importmappings.IImportMapping | null);
        get importMappingQualifiedName(): string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ImportMappingJavaActionParameterValue instance in the SDK and on the server.
         * The new ImportMappingJavaActionParameterValue will be automatically stored in the 'value' property
         * of the parent JavaActionParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.2.0 to 7.20.0
         */
        static createIn(container: JavaActionParameterMapping): ImportMappingJavaActionParameterValue;
        /**
         * Creates and returns a new ImportMappingJavaActionParameterValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ImportMappingJavaActionParameterValue;
    }
    /**
     * In version 7.21.0: introduced
     */
    class ImportMappingParameterValue extends ExpressionBasedCodeActionParameterValue {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsJavaActionParameterMapping(): JavaActionParameterMapping;
        get containerAsJavaScriptActionParameterMapping(): JavaScriptActionParameterMapping;
        get importMapping(): importmappings.IImportMapping | null;
        set importMapping(newValue: importmappings.IImportMapping | null);
        get importMappingQualifiedName(): string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ImportMappingParameterValue instance in the SDK and on the server.
         * The new ImportMappingParameterValue will be automatically stored in the 'parameterValue' property
         * of the parent JavaActionParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInJavaActionParameterMappingUnderParameterValue(container: JavaActionParameterMapping): ImportMappingParameterValue;
        /**
         * Creates and returns a new ImportMappingParameterValue instance in the SDK and on the server.
         * The new ImportMappingParameterValue will be automatically stored in the 'parameterValue' property
         * of the parent JavaScriptActionParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInJavaScriptActionParameterMappingUnderParameterValue(container: JavaScriptActionParameterMapping): ImportMappingParameterValue;
        /**
         * Creates and returns a new ImportMappingParameterValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ImportMappingParameterValue;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/import-mapping-action relevant section in reference guide}
     */
    class ImportXmlAction extends MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsActionActivity(): ActionActivity;
        get xmlDocumentVariableName(): string;
        set xmlDocumentVariableName(newValue: string);
        get resultHandling(): ResultHandling;
        set resultHandling(newValue: ResultHandling);
        get isValidationRequired(): boolean;
        set isValidationRequired(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ImportXmlAction instance in the SDK and on the server.
         * The new ImportXmlAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container: ActionActivity): ImportXmlAction;
        /**
         * Creates and returns a new ImportXmlAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ImportXmlAction;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/metrics-increment-counter relevant section in reference guide}
     *
     * In version 9.7.0: removed experimental
     * In version 9.5.0: introduced
     */
    class IncrementCounterMeterAction extends MeterAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsActionActivity(): ActionActivity;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new IncrementCounterMeterAction instance in the SDK and on the server.
         * The new IncrementCounterMeterAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.5.0 and higher
         */
        static createIn(container: ActionActivity): IncrementCounterMeterAction;
        /**
         * Creates and returns a new IncrementCounterMeterAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): IncrementCounterMeterAction;
    }
    class InheritanceCase extends CaseValue {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsSequenceFlow(): SequenceFlow;
        get value(): domainmodels.IEntity | null;
        set value(newValue: domainmodels.IEntity | null);
        get valueQualifiedName(): string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new InheritanceCase instance in the SDK and on the server.
         * The new InheritanceCase will be automatically stored in the 'caseValue' property
         * of the parent SequenceFlow element passed as argument.
         */
        static createIn(container: SequenceFlow): InheritanceCase;
        /**
         * Creates and returns a new InheritanceCase instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): InheritanceCase;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/object-type-decision relevant section in reference guide}
     */
    class InheritanceSplit extends MicroflowObject {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsMicroflowObjectCollection(): MicroflowObjectCollection;
        get splitVariableName(): string;
        set splitVariableName(newValue: string);
        get caption(): string;
        set caption(newValue: string);
        get documentation(): string;
        set documentation(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new InheritanceSplit instance in the SDK and on the server.
         * The new InheritanceSplit will be automatically stored in the 'objects' property
         * of the parent MicroflowObjectCollection element passed as argument.
         */
        static createIn(container: MicroflowObjectCollection): InheritanceSplit;
        /**
         * Creates and returns a new InheritanceSplit instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): InheritanceSplit;
    }
    class Intersect extends BinaryListOperation {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsListOperationAction(): ListOperationAction;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new Intersect instance in the SDK and on the server.
         * The new Intersect will be automatically stored in the 'operation' property
         * of the parent ListOperationAction element passed as argument.
         */
        static createIn(container: ListOperationAction): Intersect;
        /**
         * Creates and returns a new Intersect instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): Intersect;
    }
    /**
     * In version 9.0.4: introduced
     */
    abstract class LoopSource extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsLoopedActivity(): LoopedActivity;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 9.0.4: introduced
     */
    class IterableList extends LoopSource {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsLoopedActivity(): LoopedActivity;
        get listVariableName(): string;
        set listVariableName(newValue: string);
        get variableName(): string;
        set variableName(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new IterableList instance in the SDK and on the server.
         * The new IterableList will be automatically stored in the 'loopSource' property
         * of the parent LoopedActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.4 and higher
         */
        static createIn(container: LoopedActivity): IterableList;
        /**
         * Creates and returns a new IterableList instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): IterableList;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/java-action-call relevant section in reference guide}
     */
    class JavaActionCallAction extends MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsActionActivity(): ActionActivity;
        get javaAction(): javaactions.IJavaAction | null;
        set javaAction(newValue: javaactions.IJavaAction | null);
        get javaActionQualifiedName(): string | null;
        /**
         * In version 9.10.0: introduced
         */
        get queueSettings(): queues.QueueSettings | null;
        set queueSettings(newValue: queues.QueueSettings | null);
        /**
         * In version 9.10.0: deleted
         * In version 9.0.5: introduced
         */
        get queue(): queues.IQueue | null;
        set queue(newValue: queues.IQueue | null);
        get queueQualifiedName(): string | null;
        get parameterMappings(): internal.IList<JavaActionParameterMapping>;
        /**
         * In version 7.13.0: introduced
         */
        get useReturnVariable(): boolean;
        set useReturnVariable(newValue: boolean);
        get outputVariableName(): string;
        set outputVariableName(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new JavaActionCallAction instance in the SDK and on the server.
         * The new JavaActionCallAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container: ActionActivity): JavaActionCallAction;
        /**
         * Creates and returns a new JavaActionCallAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): JavaActionCallAction;
    }
    class JavaActionParameterMapping extends CodeActionParameterMapping {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsJavaActionCallAction(): JavaActionCallAction;
        get parameter(): javaactions.IJavaActionParameter;
        set parameter(newValue: javaactions.IJavaActionParameter);
        get parameterQualifiedName(): string;
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         *
         * In version 6.7.0: deleted
         */
        get argument(): string;
        set argument(newValue: string);
        /**
         * In version 7.21.0: deleted
         * In version 6.7.0: introduced
         */
        get value(): JavaActionParameterValue;
        set value(newValue: JavaActionParameterValue);
        /**
         * In version 7.21.0: introduced
         */
        get parameterValue(): CodeActionParameterValue;
        set parameterValue(newValue: CodeActionParameterValue);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new JavaActionParameterMapping instance in the SDK and on the server.
         * The new JavaActionParameterMapping will be automatically stored in the 'parameterMappings' property
         * of the parent JavaActionCallAction element passed as argument.
         */
        static createIn(container: JavaActionCallAction): JavaActionParameterMapping;
        /**
         * Creates and returns a new JavaActionParameterMapping instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): JavaActionParameterMapping;
    }
    /**
     * In version 8.4.0: removed experimental
     * In version 7.21.0: introduced
     */
    class JavaScriptActionCallAction extends MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsActionActivity(): ActionActivity;
        get javaScriptAction(): javascriptactions.IJavaScriptAction | null;
        set javaScriptAction(newValue: javascriptactions.IJavaScriptAction | null);
        get javaScriptActionQualifiedName(): string | null;
        get parameterMappings(): internal.IList<JavaScriptActionParameterMapping>;
        get useReturnVariable(): boolean;
        set useReturnVariable(newValue: boolean);
        get outputVariableName(): string;
        set outputVariableName(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new JavaScriptActionCallAction instance in the SDK and on the server.
         * The new JavaScriptActionCallAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createIn(container: ActionActivity): JavaScriptActionCallAction;
        /**
         * Creates and returns a new JavaScriptActionCallAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): JavaScriptActionCallAction;
    }
    /**
     * In version 8.4.0: removed experimental
     * In version 7.21.0: introduced
     */
    class JavaScriptActionParameterMapping extends CodeActionParameterMapping {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsJavaScriptActionCallAction(): JavaScriptActionCallAction;
        get parameter(): javascriptactions.IJavaScriptActionParameter;
        set parameter(newValue: javascriptactions.IJavaScriptActionParameter);
        get parameterQualifiedName(): string;
        get parameterValue(): CodeActionParameterValue;
        set parameterValue(newValue: CodeActionParameterValue);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new JavaScriptActionParameterMapping instance in the SDK and on the server.
         * The new JavaScriptActionParameterMapping will be automatically stored in the 'parameterMappings' property
         * of the parent JavaScriptActionCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createIn(container: JavaScriptActionCallAction): JavaScriptActionParameterMapping;
        /**
         * Creates and returns a new JavaScriptActionParameterMapping instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): JavaScriptActionParameterMapping;
    }
    class ListEquals extends BinaryListOperation {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsListOperationAction(): ListOperationAction;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ListEquals instance in the SDK and on the server.
         * The new ListEquals will be automatically stored in the 'operation' property
         * of the parent ListOperationAction element passed as argument.
         */
        static createIn(container: ListOperationAction): ListEquals;
        /**
         * Creates and returns a new ListEquals instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ListEquals;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/list-operation relevant section in reference guide}
     */
    class ListOperationAction extends MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsActionActivity(): ActionActivity;
        /**
         * In version 9.8.0: removed optional
         */
        get operation(): ListOperation | null;
        set operation(newValue: ListOperation | null);
        get outputVariableName(): string;
        set outputVariableName(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ListOperationAction instance in the SDK and on the server.
         * The new ListOperationAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container: ActionActivity): ListOperationAction;
        /**
         * Creates and returns a new ListOperationAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ListOperationAction;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/log-message relevant section in reference guide}
     */
    class LogMessageAction extends MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsActionActivity(): ActionActivity;
        get level(): LogLevel;
        set level(newValue: LogLevel);
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get node(): string;
        set node(newValue: string);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.8.0: deleted
         * In version 7.9.0: introduced
         */
        get nodeModel(): expressions.Expression;
        set nodeModel(newValue: expressions.Expression);
        get messageTemplate(): StringTemplate;
        set messageTemplate(newValue: StringTemplate);
        get includeLatestStackTrace(): boolean;
        set includeLatestStackTrace(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new LogMessageAction instance in the SDK and on the server.
         * The new LogMessageAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container: ActionActivity): LogMessageAction;
        /**
         * Creates and returns a new LogMessageAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): LogMessageAction;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/loop relevant section in reference guide}
     */
    class LoopedActivity extends Activity {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsMicroflowObjectCollection(): MicroflowObjectCollection;
        get objectCollection(): MicroflowObjectCollection;
        set objectCollection(newValue: MicroflowObjectCollection);
        /**
         * In version 9.0.4: deleted
         */
        get iteratedListVariableName(): string;
        set iteratedListVariableName(newValue: string);
        /**
         * In version 9.0.4: deleted
         */
        get loopVariableName(): string;
        set loopVariableName(newValue: string);
        get errorHandlingType(): ErrorHandlingType;
        set errorHandlingType(newValue: ErrorHandlingType);
        get documentation(): string;
        set documentation(newValue: string);
        /**
         * In version 9.0.4: introduced
         */
        get loopSource(): LoopSource;
        set loopSource(newValue: LoopSource);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new LoopedActivity instance in the SDK and on the server.
         * The new LoopedActivity will be automatically stored in the 'objects' property
         * of the parent MicroflowObjectCollection element passed as argument.
         */
        static createIn(container: MicroflowObjectCollection): LoopedActivity;
        /**
         * Creates and returns a new LoopedActivity instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): LoopedActivity;
    }
    /**
     * In version 9.18.0: deleted
     * In version 9.10.0: introduced
     */
    class MLModelCall extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsMLModelCallAction(): MLModelCallAction;
        get modelReference(): string;
        set modelReference(newValue: string);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.17.0: introduced
         */
        get mlMappingDocument(): mlmappings.IMLMappingDocument | null;
        set mlMappingDocument(newValue: mlmappings.IMLMappingDocument | null);
        get mlMappingDocumentQualifiedName(): string | null;
        get parameterMappings(): internal.IList<MLModelCallParameterMapping>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MLModelCall instance in the SDK and on the server.
         * The new MLModelCall will be automatically stored in the 'modelCall' property
         * of the parent MLModelCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.10.0 to 9.17.0
         */
        static createIn(container: MLModelCallAction): MLModelCall;
        /**
         * Creates and returns a new MLModelCall instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MLModelCall;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/ml-model-call-action relevant section in reference guide}
     *
     * In version 9.10.0: introduced
     */
    class MLModelCallAction extends MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsActionActivity(): ActionActivity;
        /**
         * In version 9.18.0: deleted
         */
        get modelCall(): MLModelCall;
        set modelCall(newValue: MLModelCall);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.18.0: introduced
         */
        get mlMappingDocument(): mlmappings.IMLMappingDocument | null;
        set mlMappingDocument(newValue: mlmappings.IMLMappingDocument | null);
        get mlMappingDocumentQualifiedName(): string | null;
        /**
         * In version 9.18.0: introduced
         */
        get inputVariableName(): string;
        set inputVariableName(newValue: string);
        get outputVariableName(): string;
        set outputVariableName(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MLModelCallAction instance in the SDK and on the server.
         * The new MLModelCallAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.10.0 and higher
         */
        static createIn(container: ActionActivity): MLModelCallAction;
        /**
         * Creates and returns a new MLModelCallAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MLModelCallAction;
    }
    /**
     * In version 9.18.0: deleted
     * In version 9.10.0: introduced
     */
    class MLModelCallParameterMapping extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsMLModelCall(): MLModelCall;
        get parameterName(): string;
        set parameterName(newValue: string);
        get parameterType(): datatypes.DataType;
        set parameterType(newValue: datatypes.DataType);
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get initialValue(): string;
        set initialValue(newValue: string);
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get initialValueModel(): string;
        set initialValueModel(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MLModelCallParameterMapping instance in the SDK and on the server.
         * The new MLModelCallParameterMapping will be automatically stored in the 'parameterMappings' property
         * of the parent MLModelCall element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.10.0 to 9.17.0
         */
        static createIn(container: MLModelCall): MLModelCallParameterMapping;
        /**
         * Creates and returns a new MLModelCallParameterMapping instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MLModelCallParameterMapping;
    }
    class MappingRequestHandling extends RequestHandling {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsExportXmlAction(): ExportXmlAction;
        get containerAsRestCallAction(): RestCallAction;
        get containerAsWebServiceCallAction(): WebServiceCallAction;
        get mapping(): exportmappings.IExportMapping | null;
        set mapping(newValue: exportmappings.IExportMapping | null);
        get mappingQualifiedName(): string | null;
        get mappingArgumentVariableName(): string;
        set mappingArgumentVariableName(newValue: string);
        /**
         * In version 7.6.0: introduced
         */
        get contentType(): ContentType;
        set contentType(newValue: ContentType);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MappingRequestHandling instance in the SDK and on the server.
         * The new MappingRequestHandling will be automatically stored in the 'resultHandling' property
         * of the parent ExportXmlAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.6.0 and higher
         */
        static createInExportXmlActionUnderResultHandling(container: ExportXmlAction): MappingRequestHandling;
        /**
         * Creates and returns a new MappingRequestHandling instance in the SDK and on the server.
         * The new MappingRequestHandling will be automatically stored in the 'requestHandling' property
         * of the parent RestCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 and higher
         */
        static createInRestCallActionUnderRequestHandling(container: RestCallAction): MappingRequestHandling;
        /**
         * Creates and returns a new MappingRequestHandling instance in the SDK and on the server.
         * The new MappingRequestHandling will be automatically stored in the 'requestBodyHandling' property
         * of the parent WebServiceCallAction element passed as argument.
         */
        static createInWebServiceCallActionUnderRequestBodyHandling(container: WebServiceCallAction): MappingRequestHandling;
        /**
         * Creates and returns a new MappingRequestHandling instance in the SDK and on the server.
         * The new MappingRequestHandling will be automatically stored in the 'requestHeaderHandling' property
         * of the parent WebServiceCallAction element passed as argument.
         */
        static createInWebServiceCallActionUnderRequestHeaderHandling(container: WebServiceCallAction): MappingRequestHandling;
        /**
         * Creates and returns a new MappingRequestHandling instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MappingRequestHandling;
    }
    class MemberChange extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsChangeMembersAction(): ChangeMembersAction;
        get attribute(): domainmodels.IAttribute | null;
        set attribute(newValue: domainmodels.IAttribute | null);
        get attributeQualifiedName(): string | null;
        get association(): domainmodels.IAssociationBase | null;
        set association(newValue: domainmodels.IAssociationBase | null);
        get associationQualifiedName(): string | null;
        get type(): ChangeActionItemType;
        set type(newValue: ChangeActionItemType);
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get value(): string;
        set value(newValue: string);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.8.0: deleted
         * In version 7.9.0: introduced
         */
        get valueModel(): expressions.Expression;
        set valueModel(newValue: expressions.Expression);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MemberChange instance in the SDK and on the server.
         * The new MemberChange will be automatically stored in the 'items' property
         * of the parent ChangeMembersAction element passed as argument.
         */
        static createIn(container: ChangeMembersAction): MemberChange;
        /**
         * Creates and returns a new MemberChange instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MemberChange;
    }
    /**
     * In version 9.7.0: removed experimental
     * In version 9.5.0: introduced
     */
    class MeterTagMapping extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsMeterAction(): MeterAction;
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get key(): string;
        set key(newValue: string);
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get value(): string;
        set value(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MeterTagMapping instance in the SDK and on the server.
         * The new MeterTagMapping will be automatically stored in the 'tags' property
         * of the parent MeterAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.5.0 and higher
         */
        static createIn(container: MeterAction): MeterTagMapping;
        /**
         * Creates and returns a new MeterTagMapping instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MeterTagMapping;
    }
    interface IMicroflowBase extends projects.IDocument {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        /**
         * The value of this property is conceptually of type dataTypes.LegacyDataType.
         *
         * In version 7.9.0: deleted
         */
        readonly returnType: string | null;
        /**
         * This property is required and cannot be set to null.
         *
         * In version 7.9.0: introduced
         */
        readonly microflowReturnType: datatypes.IDataType;
        asLoaded(): MicroflowBase;
        load(callback: (element: MicroflowBase) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<MicroflowBase>;
    }
    abstract class MicroflowBase extends projects.Document implements IMicroflowBase {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFolderBase(): projects.FolderBase;
        get objectCollection(): MicroflowObjectCollection;
        set objectCollection(newValue: MicroflowObjectCollection);
        get flows(): internal.IList<Flow>;
        /**
         * The value of this property is conceptually of type dataTypes.LegacyDataType.
         *
         * In version 7.9.0: deleted
         */
        get returnType(): string;
        set returnType(newValue: string);
        /**
         * In version 7.9.0: introduced
         */
        get microflowReturnType(): datatypes.DataType;
        set microflowReturnType(newValue: datatypes.DataType);
        get markAsUsed(): boolean;
        set markAsUsed(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
    }
    interface IServerSideMicroflow extends IMicroflowBase {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        asLoaded(): ServerSideMicroflow;
        load(callback: (element: ServerSideMicroflow) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ServerSideMicroflow>;
    }
    abstract class ServerSideMicroflow extends MicroflowBase implements IServerSideMicroflow {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFolderBase(): projects.FolderBase;
        get applyEntityAccess(): boolean;
        set applyEntityAccess(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/microflows relevant section in reference guide}
     */
    interface IMicroflow extends IServerSideMicroflow {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        /**
         * In version 7.23.0: added public
         */
        readonly allowedModuleRoles: internal.IList<security.IModuleRole>;
        readonly allowedModuleRolesQualifiedNames: string[];
        /**
         * In version 8.0.0: introduced
         */
        readonly microflowActionInfo: codeactions.IMicroflowActionInfo | null;
        /**
         * In version 9.0.2: introduced
         */
        readonly workflowActionInfo: codeactions.IMicroflowActionInfo | null;
        asLoaded(): Microflow;
        load(callback: (element: Microflow) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<Microflow>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/microflows relevant section in reference guide}
     */
    class Microflow extends ServerSideMicroflow implements IMicroflow {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFolderBase(): projects.FolderBase;
        /**
         * In version 7.23.0: added public
         */
        get allowedModuleRoles(): internal.IList<security.IModuleRole>;
        get allowedModuleRolesQualifiedNames(): string[];
        /**
         * In version 8.0.0: introduced
         */
        get microflowActionInfo(): codeactions.MicroflowActionInfo | null;
        set microflowActionInfo(newValue: codeactions.MicroflowActionInfo | null);
        /**
         * In version 9.0.2: introduced
         */
        get workflowActionInfo(): codeactions.MicroflowActionInfo | null;
        set workflowActionInfo(newValue: codeactions.MicroflowActionInfo | null);
        get allowConcurrentExecution(): boolean;
        set allowConcurrentExecution(newValue: boolean);
        get concurrencyErrorMessage(): texts.Text;
        set concurrencyErrorMessage(newValue: texts.Text);
        get concurrencyErrorMicroflow(): IMicroflow | null;
        set concurrencyErrorMicroflow(newValue: IMicroflow | null);
        get concurrencyErrorMicroflowQualifiedName(): string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
        /**
         * Creates a new Microflow unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container: projects.IFolderBase): Microflow;
    }
    class MicroflowCall extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsMicroflowCallAction(): MicroflowCallAction;
        get microflow(): IMicroflow | null;
        set microflow(newValue: IMicroflow | null);
        get microflowQualifiedName(): string | null;
        /**
         * In version 9.10.0: introduced
         */
        get queueSettings(): queues.QueueSettings | null;
        set queueSettings(newValue: queues.QueueSettings | null);
        /**
         * In version 9.10.0: deleted
         * In version 8.16.0: introduced
         */
        get queue(): queues.IQueue | null;
        set queue(newValue: queues.IQueue | null);
        get queueQualifiedName(): string | null;
        get parameterMappings(): internal.IList<MicroflowCallParameterMapping>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MicroflowCall instance in the SDK and on the server.
         * The new MicroflowCall will be automatically stored in the 'microflowCall' property
         * of the parent MicroflowCallAction element passed as argument.
         */
        static createIn(container: MicroflowCallAction): MicroflowCall;
        /**
         * Creates and returns a new MicroflowCall instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MicroflowCall;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/microflow-call relevant section in reference guide}
     */
    class MicroflowCallAction extends MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsActionActivity(): ActionActivity;
        get microflowCall(): MicroflowCall;
        set microflowCall(newValue: MicroflowCall);
        get useReturnVariable(): boolean;
        set useReturnVariable(newValue: boolean);
        get outputVariableName(): string;
        set outputVariableName(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MicroflowCallAction instance in the SDK and on the server.
         * The new MicroflowCallAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container: ActionActivity): MicroflowCallAction;
        /**
         * Creates and returns a new MicroflowCallAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MicroflowCallAction;
    }
    class MicroflowCallParameterMapping extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsMicroflowCall(): MicroflowCall;
        get parameter(): IMicroflowParameter;
        set parameter(newValue: IMicroflowParameter);
        get parameterQualifiedName(): string;
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get argument(): string;
        set argument(newValue: string);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.8.0: deleted
         * In version 7.9.0: introduced
         */
        get argumentModel(): expressions.Expression;
        set argumentModel(newValue: expressions.Expression);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MicroflowCallParameterMapping instance in the SDK and on the server.
         * The new MicroflowCallParameterMapping will be automatically stored in the 'parameterMappings' property
         * of the parent MicroflowCall element passed as argument.
         */
        static createIn(container: MicroflowCall): MicroflowCallParameterMapping;
        /**
         * Creates and returns a new MicroflowCallParameterMapping instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MicroflowCallParameterMapping;
    }
    /**
     * In version 7.21.0: deleted
     * In version 6.9.0: introduced
     */
    class MicroflowJavaActionParameterValue extends JavaActionParameterValue {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsJavaActionParameterMapping(): JavaActionParameterMapping;
        get microflow(): IMicroflow | null;
        set microflow(newValue: IMicroflow | null);
        get microflowQualifiedName(): string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MicroflowJavaActionParameterValue instance in the SDK and on the server.
         * The new MicroflowJavaActionParameterValue will be automatically stored in the 'value' property
         * of the parent JavaActionParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.9.0 to 7.20.0
         */
        static createIn(container: JavaActionParameterMapping): MicroflowJavaActionParameterValue;
        /**
         * Creates and returns a new MicroflowJavaActionParameterValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MicroflowJavaActionParameterValue;
    }
    class MicroflowObjectCollection extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsLoopedActivity(): LoopedActivity;
        get containerAsMicroflowBase(): MicroflowBase;
        get objects(): internal.IList<MicroflowObject>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MicroflowObjectCollection instance in the SDK and on the server.
         * The new MicroflowObjectCollection will be automatically stored in the 'objectCollection' property
         * of the parent LoopedActivity element passed as argument.
         */
        static createInLoopedActivityUnderObjectCollection(container: LoopedActivity): MicroflowObjectCollection;
        /**
         * Creates and returns a new MicroflowObjectCollection instance in the SDK and on the server.
         * The new MicroflowObjectCollection will be automatically stored in the 'objectCollection' property
         * of the parent MicroflowBase element passed as argument.
         */
        static createInMicroflowBaseUnderObjectCollection(container: MicroflowBase): MicroflowObjectCollection;
        /**
         * Creates and returns a new MicroflowObjectCollection instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MicroflowObjectCollection;
    }
    interface IMicroflowParameterBase extends internal.IElement, internal.IByNameReferrable {
        readonly model: IModel;
        readonly containerAsMicroflow: IMicroflow;
        readonly containerAsRule: IRule;
        readonly name: string;
        /**
         * The value of this property is conceptually of type dataTypes.LegacyDataType.
         *
         * In version 7.9.0: deleted
         */
        readonly type: string | null;
        /**
         * This property is required and cannot be set to null.
         *
         * In version 7.9.0: introduced
         */
        readonly parameterType: datatypes.IDataType;
        asLoaded(): MicroflowParameterBase;
        load(callback: (element: MicroflowParameterBase) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<MicroflowParameterBase>;
    }
    abstract class MicroflowParameterBase extends internal.Element<IModel> implements IMicroflowParameterBase {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsMicroflow(): Microflow;
        get containerAsRule(): Rule;
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
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        get qualifiedName(): string | null;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/parameter relevant section in reference guide}
     */
    interface IMicroflowParameter extends IMicroflowParameterBase {
        readonly model: IModel;
        readonly containerAsMicroflow: IMicroflow;
        asLoaded(): MicroflowParameter;
        load(callback: (element: MicroflowParameter) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<MicroflowParameter>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/parameter relevant section in reference guide}
     */
    class MicroflowParameter extends MicroflowParameterBase implements IMicroflowParameter {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsMicroflow(): Microflow;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    class MicroflowParameterObject extends MicroflowObject {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsMicroflowObjectCollection(): MicroflowObjectCollection;
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
        get variableType(): datatypes.DataType;
        set variableType(newValue: datatypes.DataType);
        get documentation(): string;
        set documentation(newValue: string);
        /**
         * In version 9.17.0: introduced
         */
        get hasVariableNameBeenChanged(): boolean;
        set hasVariableNameBeenChanged(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MicroflowParameterObject instance in the SDK and on the server.
         * The new MicroflowParameterObject will be automatically stored in the 'objects' property
         * of the parent MicroflowObjectCollection element passed as argument.
         */
        static createIn(container: MicroflowObjectCollection): MicroflowParameterObject;
        /**
         * Creates and returns a new MicroflowParameterObject instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MicroflowParameterObject;
    }
    /**
     * In version 7.21.0: introduced
     */
    class MicroflowParameterValue extends ExpressionBasedCodeActionParameterValue {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsJavaActionParameterMapping(): JavaActionParameterMapping;
        get containerAsJavaScriptActionParameterMapping(): JavaScriptActionParameterMapping;
        get microflow(): IMicroflow | null;
        set microflow(newValue: IMicroflow | null);
        get microflowQualifiedName(): string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MicroflowParameterValue instance in the SDK and on the server.
         * The new MicroflowParameterValue will be automatically stored in the 'parameterValue' property
         * of the parent JavaActionParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInJavaActionParameterMappingUnderParameterValue(container: JavaActionParameterMapping): MicroflowParameterValue;
        /**
         * Creates and returns a new MicroflowParameterValue instance in the SDK and on the server.
         * The new MicroflowParameterValue will be automatically stored in the 'parameterValue' property
         * of the parent JavaScriptActionParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInJavaScriptActionParameterMappingUnderParameterValue(container: JavaScriptActionParameterMapping): MicroflowParameterValue;
        /**
         * Creates and returns a new MicroflowParameterValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MicroflowParameterValue;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/nanoflows relevant section in reference guide}
     *
     * In version 7.12.0: removed experimental
     * In version 7.10.0: introduced
     */
    interface INanoflow extends IMicroflowBase {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        /**
         * In version 7.23.0: added public
         */
        readonly allowedModuleRoles: internal.IList<security.IModuleRole>;
        readonly allowedModuleRolesQualifiedNames: string[];
        asLoaded(): Nanoflow;
        load(callback: (element: Nanoflow) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<Nanoflow>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/nanoflows relevant section in reference guide}
     *
     * In version 7.12.0: removed experimental
     * In version 7.10.0: introduced
     */
    class Nanoflow extends MicroflowBase implements INanoflow {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFolderBase(): projects.FolderBase;
        /**
         * In version 7.23.0: added public
         */
        get allowedModuleRoles(): internal.IList<security.IModuleRole>;
        get allowedModuleRolesQualifiedNames(): string[];
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
        /**
         * Creates a new Nanoflow unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container: projects.IFolderBase): Nanoflow;
    }
    /**
     * In version 8.0.0: introduced
     */
    class NanoflowCall extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsNanoflowCallAction(): NanoflowCallAction;
        get nanoflow(): INanoflow | null;
        set nanoflow(newValue: INanoflow | null);
        get nanoflowQualifiedName(): string | null;
        get parameterMappings(): internal.IList<NanoflowCallParameterMapping>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new NanoflowCall instance in the SDK and on the server.
         * The new NanoflowCall will be automatically stored in the 'nanoflowCall' property
         * of the parent NanoflowCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 and higher
         */
        static createIn(container: NanoflowCallAction): NanoflowCall;
        /**
         * Creates and returns a new NanoflowCall instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): NanoflowCall;
    }
    /**
     * In version 8.0.0: introduced
     */
    class NanoflowCallAction extends MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsActionActivity(): ActionActivity;
        get nanoflowCall(): NanoflowCall;
        set nanoflowCall(newValue: NanoflowCall);
        get useReturnVariable(): boolean;
        set useReturnVariable(newValue: boolean);
        get outputVariableName(): string;
        set outputVariableName(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new NanoflowCallAction instance in the SDK and on the server.
         * The new NanoflowCallAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 and higher
         */
        static createIn(container: ActionActivity): NanoflowCallAction;
        /**
         * Creates and returns a new NanoflowCallAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): NanoflowCallAction;
    }
    /**
     * In version 8.0.0: introduced
     */
    class NanoflowCallParameterMapping extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsNanoflowCall(): NanoflowCall;
        get parameter(): INanoflowParameter;
        set parameter(newValue: INanoflowParameter);
        get parameterQualifiedName(): string;
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get argument(): string;
        set argument(newValue: string);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.8.0: deleted
         */
        get argumentModel(): expressions.Expression;
        set argumentModel(newValue: expressions.Expression);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new NanoflowCallParameterMapping instance in the SDK and on the server.
         * The new NanoflowCallParameterMapping will be automatically stored in the 'parameterMappings' property
         * of the parent NanoflowCall element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 and higher
         */
        static createIn(container: NanoflowCall): NanoflowCallParameterMapping;
        /**
         * Creates and returns a new NanoflowCallParameterMapping instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): NanoflowCallParameterMapping;
    }
    /**
     * In version 7.19.0: introduced
     */
    interface INanoflowParameter extends IMicroflowParameterBase {
        readonly model: IModel;
        asLoaded(): NanoflowParameter;
        load(callback: (element: NanoflowParameter) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<NanoflowParameter>;
    }
    /**
     * In version 7.19.0: introduced
     */
    class NanoflowParameter extends MicroflowParameterBase implements INanoflowParameter {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new NanoflowParameter instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): NanoflowParameter;
    }
    class NoCase extends CaseValue {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsSequenceFlow(): SequenceFlow;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new NoCase instance in the SDK and on the server.
         * The new NoCase will be automatically stored in the 'caseValue' property
         * of the parent SequenceFlow element passed as argument.
         */
        static createIn(container: SequenceFlow): NoCase;
        /**
         * Creates and returns a new NoCase instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): NoCase;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/show-task-page relevant section in reference guide}
     *
     * In version 9.0.5: removed experimental
     * In version 9.0.2: introduced
     */
    class OpenUserTaskAction extends MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsActionActivity(): ActionActivity;
        get userTaskVariable(): string;
        set userTaskVariable(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new OpenUserTaskAction instance in the SDK and on the server.
         * The new OpenUserTaskAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.2 and higher
         */
        static createIn(container: ActionActivity): OpenUserTaskAction;
        /**
         * Creates and returns a new OpenUserTaskAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): OpenUserTaskAction;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/show-workflow-page relevant section in reference guide}
     *
     * In version 9.0.5: removed experimental
     * In version 9.0.2: introduced
     */
    class OpenWorkflowAction extends MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsActionActivity(): ActionActivity;
        get workflowVariable(): string;
        set workflowVariable(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new OpenWorkflowAction instance in the SDK and on the server.
         * The new OpenWorkflowAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.2 and higher
         */
        static createIn(container: ActionActivity): OpenWorkflowAction;
        /**
         * Creates and returns a new OpenWorkflowAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): OpenWorkflowAction;
    }
    /**
     * In version 9.12.0: removed experimental
     * In version 9.3.0: introduced
     */
    class PauseOperation extends WorkflowOperation {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsWorkflowOperationAction(): WorkflowOperationAction;
        get workflowVariable(): string;
        set workflowVariable(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new PauseOperation instance in the SDK and on the server.
         * The new PauseOperation will be automatically stored in the 'operation' property
         * of the parent WorkflowOperationAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.3.0 and higher
         */
        static createIn(container: WorkflowOperationAction): PauseOperation;
        /**
         * Creates and returns a new PauseOperation instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): PauseOperation;
    }
    /**
     * In version 8.6.0: introduced
     */
    abstract class TypedTemplateArgument extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsTypedTemplate(): TypedTemplate;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 8.6.0: introduced
     */
    class PrimitiveTypedTemplateArgument extends TypedTemplateArgument {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsTypedTemplate(): TypedTemplate;
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get expression(): string;
        set expression(newValue: string);
        get type(): TypedTemplateArgumentType;
        set type(newValue: TypedTemplateArgumentType);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new PrimitiveTypedTemplateArgument instance in the SDK and on the server.
         * The new PrimitiveTypedTemplateArgument will be automatically stored in the 'arguments' property
         * of the parent TypedTemplate element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.6.0 and higher
         */
        static createIn(container: TypedTemplate): PrimitiveTypedTemplateArgument;
        /**
         * Creates and returns a new PrimitiveTypedTemplateArgument instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): PrimitiveTypedTemplateArgument;
    }
    /**
     * In version 7.15.0: introduced
     */
    class ProxyConfiguration extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsRestCallAction(): RestCallAction;
        get containerAsWebServiceCallAction(): WebServiceCallAction;
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get usernameExpression(): string;
        set usernameExpression(newValue: string);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.8.0: deleted
         */
        get usernameExpressionModel(): expressions.Expression | null;
        set usernameExpressionModel(newValue: expressions.Expression | null);
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get passwordExpression(): string;
        set passwordExpression(newValue: string);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.8.0: deleted
         */
        get passwordExpressionModel(): expressions.Expression | null;
        set passwordExpressionModel(newValue: expressions.Expression | null);
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get hostExpression(): string;
        set hostExpression(newValue: string);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.8.0: deleted
         */
        get hostExpressionModel(): expressions.Expression | null;
        set hostExpressionModel(newValue: expressions.Expression | null);
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get portExpression(): string;
        set portExpression(newValue: string);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.8.0: deleted
         */
        get portExpressionModel(): expressions.Expression | null;
        set portExpressionModel(newValue: expressions.Expression | null);
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get useConfigurationExpression(): string;
        set useConfigurationExpression(newValue: string);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.8.0: deleted
         */
        get useConfigurationExpressionModel(): expressions.Expression | null;
        set useConfigurationExpressionModel(newValue: expressions.Expression | null);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ProxyConfiguration instance in the SDK and on the server.
         * The new ProxyConfiguration will be automatically stored in the 'proxyConfiguration' property
         * of the parent RestCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInRestCallActionUnderProxyConfiguration(container: RestCallAction): ProxyConfiguration;
        /**
         * Creates and returns a new ProxyConfiguration instance in the SDK and on the server.
         * The new ProxyConfiguration will be automatically stored in the 'proxyConfiguration' property
         * of the parent WebServiceCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInWebServiceCallActionUnderProxyConfiguration(container: WebServiceCallAction): ProxyConfiguration;
        /**
         * Creates and returns a new ProxyConfiguration instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ProxyConfiguration;
    }
    /**
     * In version 8.4.0: introduced
     */
    class PushToClientAction extends MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsActionActivity(): ActionActivity;
        get dataVariableName(): string;
        set dataVariableName(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new PushToClientAction instance in the SDK and on the server.
         * The new PushToClientAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.4.0 and higher
         */
        static createIn(container: ActionActivity): PushToClientAction;
        /**
         * Creates and returns a new PushToClientAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): PushToClientAction;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/call-rest-action relevant section in reference guide}
     *
     * In version 6.6.0: introduced
     */
    class RestCallAction extends MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsActionActivity(): ActionActivity;
        get httpConfiguration(): HttpConfiguration;
        set httpConfiguration(newValue: HttpConfiguration);
        get requestHandling(): RequestHandling;
        set requestHandling(newValue: RequestHandling);
        /**
         * In version 6.9.0: introduced
         */
        get requestHandlingType(): RequestHandlingType;
        set requestHandlingType(newValue: RequestHandlingType);
        get resultHandling(): ResultHandling;
        set resultHandling(newValue: ResultHandling);
        /**
         * In version 6.9.0: introduced
         */
        get resultHandlingType(): ResultHandlingType;
        set resultHandlingType(newValue: ResultHandlingType);
        /**
         * In version 7.0.2: introduced
         */
        get errorResultHandlingType(): ErrorResultHandlingType;
        set errorResultHandlingType(newValue: ErrorResultHandlingType);
        /**
         * In version 7.1.0: introduced
         */
        get useRequestTimeOut(): boolean;
        set useRequestTimeOut(newValue: boolean);
        /**
         * In version 7.15.0: deleted
         * In version 7.1.0: introduced
         */
        get timeOut(): number;
        set timeOut(newValue: number);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.8.0: deleted
         * In version 7.15.0: introduced
         */
        get timeOutModel(): expressions.Expression;
        set timeOutModel(newValue: expressions.Expression);
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         *
         * In version 7.15.0: introduced
         */
        get timeOutExpression(): string;
        set timeOutExpression(newValue: string);
        /**
         * In version 7.15.0: introduced
         */
        get requestProxyType(): RequestProxyType;
        set requestProxyType(newValue: RequestProxyType);
        /**
         * In version 7.15.0: introduced
         */
        get proxyConfiguration(): ProxyConfiguration | null;
        set proxyConfiguration(newValue: ProxyConfiguration | null);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new RestCallAction instance in the SDK and on the server.
         * The new RestCallAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 and higher
         */
        static createIn(container: ActionActivity): RestCallAction;
        /**
         * Creates and returns a new RestCallAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): RestCallAction;
    }
    /**
     * In version 9.12.0: removed experimental
     * In version 9.2.0: introduced
     */
    class RestartOperation extends WorkflowOperation {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsWorkflowOperationAction(): WorkflowOperationAction;
        get workflowVariable(): string;
        set workflowVariable(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new RestartOperation instance in the SDK and on the server.
         * The new RestartOperation will be automatically stored in the 'operation' property
         * of the parent WorkflowOperationAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.2.0 and higher
         */
        static createIn(container: WorkflowOperationAction): RestartOperation;
        /**
         * Creates and returns a new RestartOperation instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): RestartOperation;
    }
    class ResultHandling extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsImportXmlAction(): ImportXmlAction;
        get containerAsRestCallAction(): RestCallAction;
        get containerAsWebServiceCallAction(): WebServiceCallAction;
        get importMappingCall(): ImportMappingCall | null;
        set importMappingCall(newValue: ImportMappingCall | null);
        get storeInVariable(): boolean;
        set storeInVariable(newValue: boolean);
        get outputVariableName(): string;
        set outputVariableName(newValue: string);
        /**
         * The value of this property is conceptually of type dataTypes.LegacyDataType.
         *
         * In version 7.9.0: deleted
         * In version 6.10.0: introduced
         */
        get variableDataType(): string;
        set variableDataType(newValue: string);
        /**
         * In version 7.9.0: introduced
         */
        get variableType(): datatypes.DataType;
        set variableType(newValue: datatypes.DataType);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ResultHandling instance in the SDK and on the server.
         * The new ResultHandling will be automatically stored in the 'resultHandling' property
         * of the parent ImportXmlAction element passed as argument.
         */
        static createInImportXmlActionUnderResultHandling(container: ImportXmlAction): ResultHandling;
        /**
         * Creates and returns a new ResultHandling instance in the SDK and on the server.
         * The new ResultHandling will be automatically stored in the 'resultHandling' property
         * of the parent RestCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 and higher
         */
        static createInRestCallActionUnderResultHandling(container: RestCallAction): ResultHandling;
        /**
         * Creates and returns a new ResultHandling instance in the SDK and on the server.
         * The new ResultHandling will be automatically stored in the 'resultHandling' property
         * of the parent WebServiceCallAction element passed as argument.
         */
        static createInWebServiceCallActionUnderResultHandling(container: WebServiceCallAction): ResultHandling;
        /**
         * Creates and returns a new ResultHandling instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ResultHandling;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.12.0: deleted
     * In version 9.3.0: introduced
     */
    class ResumeOperation extends WorkflowOperation {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsWorkflowOperationAction(): WorkflowOperationAction;
        get workflowVariable(): string;
        set workflowVariable(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ResumeOperation instance in the SDK and on the server.
         * The new ResumeOperation will be automatically stored in the 'operation' property
         * of the parent WorkflowOperationAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.3.0 to 9.11.0
         */
        static createIn(container: WorkflowOperationAction): ResumeOperation;
        /**
         * Creates and returns a new ResumeOperation instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ResumeOperation;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/retrieve relevant section in reference guide}
     */
    class RetrieveAction extends MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsActionActivity(): ActionActivity;
        get retrieveSource(): RetrieveSource;
        set retrieveSource(newValue: RetrieveSource);
        get outputVariableName(): string;
        set outputVariableName(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new RetrieveAction instance in the SDK and on the server.
         * The new RetrieveAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container: ActionActivity): RetrieveAction;
        /**
         * Creates and returns a new RetrieveAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): RetrieveAction;
    }
    /**
     * In version 9.12.0: introduced
     */
    class RetryOperation extends WorkflowOperation {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsWorkflowOperationAction(): WorkflowOperationAction;
        get workflowVariable(): string;
        set workflowVariable(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new RetryOperation instance in the SDK and on the server.
         * The new RetryOperation will be automatically stored in the 'operation' property
         * of the parent WorkflowOperationAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.12.0 and higher
         */
        static createIn(container: WorkflowOperationAction): RetryOperation;
        /**
         * Creates and returns a new RetryOperation instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): RetryOperation;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/rollback-object relevant section in reference guide}
     */
    class RollbackAction extends MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsActionActivity(): ActionActivity;
        get rollbackVariableName(): string;
        set rollbackVariableName(newValue: string);
        get refreshInClient(): boolean;
        set refreshInClient(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new RollbackAction instance in the SDK and on the server.
         * The new RollbackAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container: ActionActivity): RollbackAction;
        /**
         * Creates and returns a new RollbackAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): RollbackAction;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/rules relevant section in reference guide}
     */
    interface IRule extends IServerSideMicroflow {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        asLoaded(): Rule;
        load(callback: (element: Rule) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<Rule>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/rules relevant section in reference guide}
     */
    class Rule extends ServerSideMicroflow implements IRule {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFolderBase(): projects.FolderBase;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
        /**
         * Creates a new Rule unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container: projects.IFolderBase): Rule;
    }
    class RuleCall extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsRuleSplitCondition(): RuleSplitCondition;
        get rule(): IRule | null;
        set rule(newValue: IRule | null);
        get ruleQualifiedName(): string | null;
        get parameterMappings(): internal.IList<RuleCallParameterMapping>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new RuleCall instance in the SDK and on the server.
         * The new RuleCall will be automatically stored in the 'ruleCall' property
         * of the parent RuleSplitCondition element passed as argument.
         */
        static createIn(container: RuleSplitCondition): RuleCall;
        /**
         * Creates and returns a new RuleCall instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): RuleCall;
    }
    class RuleCallParameterMapping extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsRuleCall(): RuleCall;
        get parameter(): IRuleParameter;
        set parameter(newValue: IRuleParameter);
        get parameterQualifiedName(): string;
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get argument(): string;
        set argument(newValue: string);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.8.0: deleted
         * In version 7.9.0: introduced
         */
        get argumentModel(): expressions.Expression;
        set argumentModel(newValue: expressions.Expression);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new RuleCallParameterMapping instance in the SDK and on the server.
         * The new RuleCallParameterMapping will be automatically stored in the 'parameterMappings' property
         * of the parent RuleCall element passed as argument.
         */
        static createIn(container: RuleCall): RuleCallParameterMapping;
        /**
         * Creates and returns a new RuleCallParameterMapping instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): RuleCallParameterMapping;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/parameter relevant section in reference guide}
     */
    interface IRuleParameter extends IMicroflowParameterBase {
        readonly model: IModel;
        readonly containerAsRule: IRule;
        asLoaded(): RuleParameter;
        load(callback: (element: RuleParameter) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<RuleParameter>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/parameter relevant section in reference guide}
     */
    class RuleParameter extends MicroflowParameterBase implements IRuleParameter {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsRule(): Rule;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    class RuleSplitCondition extends SplitCondition {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsExclusiveSplit(): ExclusiveSplit;
        get ruleCall(): RuleCall;
        set ruleCall(newValue: RuleCall);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new RuleSplitCondition instance in the SDK and on the server.
         * The new RuleSplitCondition will be automatically stored in the 'splitCondition' property
         * of the parent ExclusiveSplit element passed as argument.
         */
        static createIn(container: ExclusiveSplit): RuleSplitCondition;
        /**
         * Creates and returns a new RuleSplitCondition instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): RuleSplitCondition;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/send-external-object relevant section in reference guide}
     *
     * In version 9.6.0: introduced
     */
    class SendExternalObject extends MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsActionActivity(): ActionActivity;
        get variableNameToBeSent(): string;
        set variableNameToBeSent(newValue: string);
        /**
         * In version 9.7.0: introduced
         */
        get refreshInClient(): boolean;
        set refreshInClient(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new SendExternalObject instance in the SDK and on the server.
         * The new SendExternalObject will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.6.0 and higher
         */
        static createIn(container: ActionActivity): SendExternalObject;
        /**
         * Creates and returns a new SendExternalObject instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): SendExternalObject;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/sequence-flow relevant section in reference guide}
     */
    class SequenceFlow extends Flow {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsMicroflowBase(): MicroflowBase;
        get caseValue(): CaseValue;
        set caseValue(newValue: CaseValue);
        get isErrorHandler(): boolean;
        set isErrorHandler(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new SequenceFlow instance in the SDK and on the server.
         * The new SequenceFlow will be automatically stored in the 'flows' property
         * of the parent MicroflowBase element passed as argument.
         */
        static createIn(container: MicroflowBase): SequenceFlow;
        /**
         * Creates and returns a new SequenceFlow instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): SequenceFlow;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/complete-task relevant section in reference guide}
     *
     * In version 9.0.5: removed experimental
     * In version 9.0.2: introduced
     */
    class SetTaskOutcomeAction extends MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsActionActivity(): ActionActivity;
        get workflowTaskVariable(): string;
        set workflowTaskVariable(newValue: string);
        get outcome(): workflows.IUserTaskOutcome | null;
        set outcome(newValue: workflows.IUserTaskOutcome | null);
        get outcomeQualifiedName(): string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new SetTaskOutcomeAction instance in the SDK and on the server.
         * The new SetTaskOutcomeAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.2 and higher
         */
        static createIn(container: ActionActivity): SetTaskOutcomeAction;
        /**
         * Creates and returns a new SetTaskOutcomeAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): SetTaskOutcomeAction;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/show-home-page relevant section in reference guide}
     */
    class ShowHomePageAction extends MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsActionActivity(): ActionActivity;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ShowHomePageAction instance in the SDK and on the server.
         * The new ShowHomePageAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container: ActionActivity): ShowHomePageAction;
        /**
         * Creates and returns a new ShowHomePageAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ShowHomePageAction;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/show-message relevant section in reference guide}
     */
    class ShowMessageAction extends MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsActionActivity(): ActionActivity;
        get template(): TextTemplate;
        set template(newValue: TextTemplate);
        get type(): ShowMessageType;
        set type(newValue: ShowMessageType);
        get blocking(): boolean;
        set blocking(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ShowMessageAction instance in the SDK and on the server.
         * The new ShowMessageAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container: ActionActivity): ShowMessageAction;
        /**
         * Creates and returns a new ShowMessageAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ShowMessageAction;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/show-page relevant section in reference guide}
     */
    class ShowPageAction extends MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsActionActivity(): ActionActivity;
        get pageSettings(): pages.PageSettings;
        set pageSettings(newValue: pages.PageSettings);
        /**
         * In version 9.18.0: deleted
         */
        get passedObjectVariableName(): string;
        set passedObjectVariableName(newValue: string);
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         *
         * In version 8.11.0: introduced
         */
        get numberOfPagesToClose(): string;
        set numberOfPagesToClose(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ShowPageAction instance in the SDK and on the server.
         * The new ShowPageAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container: ActionActivity): ShowPageAction;
        /**
         * Creates and returns a new ShowPageAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ShowPageAction;
    }
    class SimpleRequestHandling extends RequestHandling {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsRestCallAction(): RestCallAction;
        get containerAsWebServiceCallAction(): WebServiceCallAction;
        get parameterMappings(): internal.IList<WebServiceOperationSimpleParameterMapping>;
        /**
         * In version 6.7.0: introduced
         */
        get nullValueOption(): NullValueOption;
        set nullValueOption(newValue: NullValueOption);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new SimpleRequestHandling instance in the SDK and on the server.
         * The new SimpleRequestHandling will be automatically stored in the 'requestHandling' property
         * of the parent RestCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 and higher
         */
        static createInRestCallActionUnderRequestHandling(container: RestCallAction): SimpleRequestHandling;
        /**
         * Creates and returns a new SimpleRequestHandling instance in the SDK and on the server.
         * The new SimpleRequestHandling will be automatically stored in the 'requestBodyHandling' property
         * of the parent WebServiceCallAction element passed as argument.
         */
        static createInWebServiceCallActionUnderRequestBodyHandling(container: WebServiceCallAction): SimpleRequestHandling;
        /**
         * Creates and returns a new SimpleRequestHandling instance in the SDK and on the server.
         * The new SimpleRequestHandling will be automatically stored in the 'requestHeaderHandling' property
         * of the parent WebServiceCallAction element passed as argument.
         */
        static createInWebServiceCallActionUnderRequestHeaderHandling(container: WebServiceCallAction): SimpleRequestHandling;
        /**
         * Creates and returns a new SimpleRequestHandling instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): SimpleRequestHandling;
    }
    class Sort extends ListOperation {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsListOperationAction(): ListOperationAction;
        get sortItemList(): SortItemList;
        set sortItemList(newValue: SortItemList);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new Sort instance in the SDK and on the server.
         * The new Sort will be automatically stored in the 'operation' property
         * of the parent ListOperationAction element passed as argument.
         */
        static createIn(container: ListOperationAction): Sort;
        /**
         * Creates and returns a new Sort instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): Sort;
    }
    class SortItem extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsSortItemList(): SortItemList;
        /**
         * The value of this property is conceptually of type paths.LegacyAttributePath.
         *
         * In version 7.11.0: deleted
         */
        get attributePath(): string;
        set attributePath(newValue: string);
        /**
         * In version 7.11.0: introduced
         */
        get attributeRef(): domainmodels.AttributeRef;
        set attributeRef(newValue: domainmodels.AttributeRef);
        get sortOrder(): SortOrderEnum;
        set sortOrder(newValue: SortOrderEnum);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new SortItem instance in the SDK and on the server.
         * The new SortItem will be automatically stored in the 'items' property
         * of the parent SortItemList element passed as argument.
         */
        static createIn(container: SortItemList): SortItem;
        /**
         * Creates and returns a new SortItem instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): SortItem;
    }
    class SortItemList extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsDatabaseRetrieveSource(): DatabaseRetrieveSource;
        get containerAsSort(): Sort;
        get items(): internal.IList<SortItem>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new SortItemList instance in the SDK and on the server.
         * The new SortItemList will be automatically stored in the 'sortItemList' property
         * of the parent DatabaseRetrieveSource element passed as argument.
         */
        static createInDatabaseRetrieveSourceUnderSortItemList(container: DatabaseRetrieveSource): SortItemList;
        /**
         * Creates and returns a new SortItemList instance in the SDK and on the server.
         * The new SortItemList will be automatically stored in the 'sortItemList' property
         * of the parent Sort element passed as argument.
         */
        static createInSortUnderSortItemList(container: Sort): SortItemList;
        /**
         * Creates and returns a new SortItemList instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): SortItemList;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/start-event relevant section in reference guide}
     */
    class StartEvent extends MicroflowObject {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsMicroflowObjectCollection(): MicroflowObjectCollection;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new StartEvent instance in the SDK and on the server.
         * The new StartEvent will be automatically stored in the 'objects' property
         * of the parent MicroflowObjectCollection element passed as argument.
         */
        static createIn(container: MicroflowObjectCollection): StartEvent;
        /**
         * Creates and returns a new StartEvent instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): StartEvent;
    }
    abstract class Template extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsAbortOperation(): AbortOperation;
        get containerAsCustomRequestHandling(): CustomRequestHandling;
        get containerAsHttpConfiguration(): HttpConfiguration;
        get containerAsLogMessageAction(): LogMessageAction;
        get containerAsShowMessageAction(): ShowMessageAction;
        get containerAsStringTemplateParameterValue(): StringTemplateParameterValue;
        get containerAsValidationFeedbackAction(): ValidationFeedbackAction;
        get containerAsPageSettings(): pages.PageSettings;
        get containerAsUserTask(): workflows.UserTask;
        get containerAsWorkflow(): workflows.Workflow;
        get arguments(): internal.IList<TemplateArgument>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    class StringTemplate extends Template {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsAbortOperation(): AbortOperation;
        get containerAsCustomRequestHandling(): CustomRequestHandling;
        get containerAsHttpConfiguration(): HttpConfiguration;
        get containerAsLogMessageAction(): LogMessageAction;
        get containerAsStringTemplateParameterValue(): StringTemplateParameterValue;
        get containerAsUserTask(): workflows.UserTask;
        get containerAsWorkflow(): workflows.Workflow;
        get text(): string;
        set text(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new StringTemplate instance in the SDK and on the server.
         * The new StringTemplate will be automatically stored in the 'reason' property
         * of the parent AbortOperation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.2.0 and higher
         */
        static createInAbortOperationUnderReason(container: AbortOperation): StringTemplate;
        /**
         * Creates and returns a new StringTemplate instance in the SDK and on the server.
         * The new StringTemplate will be automatically stored in the 'template' property
         * of the parent CustomRequestHandling element passed as argument.
         */
        static createInCustomRequestHandlingUnderTemplate(container: CustomRequestHandling): StringTemplate;
        /**
         * Creates and returns a new StringTemplate instance in the SDK and on the server.
         * The new StringTemplate will be automatically stored in the 'customLocationTemplate' property
         * of the parent HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 and higher
         */
        static createInHttpConfigurationUnderCustomLocationTemplate(container: HttpConfiguration): StringTemplate;
        /**
         * Creates and returns a new StringTemplate instance in the SDK and on the server.
         * The new StringTemplate will be automatically stored in the 'messageTemplate' property
         * of the parent LogMessageAction element passed as argument.
         */
        static createInLogMessageActionUnderMessageTemplate(container: LogMessageAction): StringTemplate;
        /**
         * Creates and returns a new StringTemplate instance in the SDK and on the server.
         * The new StringTemplate will be automatically stored in the 'template' property
         * of the parent StringTemplateParameterValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.4.0 to 8.5.0
         */
        static createInStringTemplateParameterValueUnderTemplate(container: StringTemplateParameterValue): StringTemplate;
        /**
         * Creates and returns a new StringTemplate instance in the SDK and on the server.
         * The new StringTemplate will be automatically stored in the 'taskDescription' property
         * of the parent workflows.UserTask element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.2 and higher
         */
        static createInUserTaskUnderTaskDescription(container: workflows.UserTask): StringTemplate;
        /**
         * Creates and returns a new StringTemplate instance in the SDK and on the server.
         * The new StringTemplate will be automatically stored in the 'taskName' property
         * of the parent workflows.UserTask element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.2 and higher
         */
        static createInUserTaskUnderTaskName(container: workflows.UserTask): StringTemplate;
        /**
         * Creates and returns a new StringTemplate instance in the SDK and on the server.
         * The new StringTemplate will be automatically stored in the 'workflowDescription' property
         * of the parent workflows.Workflow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.2 and higher
         */
        static createInWorkflowUnderWorkflowDescription(container: workflows.Workflow): StringTemplate;
        /**
         * Creates and returns a new StringTemplate instance in the SDK and on the server.
         * The new StringTemplate will be automatically stored in the 'workflowName' property
         * of the parent workflows.Workflow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.2 and higher
         */
        static createInWorkflowUnderWorkflowName(container: workflows.Workflow): StringTemplate;
        /**
         * Creates and returns a new StringTemplate instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): StringTemplate;
    }
    /**
     * In version 8.5.0: removed experimental
     * In version 8.4.0: introduced
     */
    class StringTemplateParameterValue extends CodeActionParameterValue {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsJavaActionParameterMapping(): JavaActionParameterMapping;
        get containerAsJavaScriptActionParameterMapping(): JavaScriptActionParameterMapping;
        /**
         * In version 8.6.0: deleted
         */
        get template(): StringTemplate;
        set template(newValue: StringTemplate);
        /**
         * In version 8.6.0: introduced
         */
        get typedTemplate(): TypedTemplate;
        set typedTemplate(newValue: TypedTemplate);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new StringTemplateParameterValue instance in the SDK and on the server.
         * The new StringTemplateParameterValue will be automatically stored in the 'parameterValue' property
         * of the parent JavaActionParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.4.0 and higher
         */
        static createInJavaActionParameterMappingUnderParameterValue(container: JavaActionParameterMapping): StringTemplateParameterValue;
        /**
         * Creates and returns a new StringTemplateParameterValue instance in the SDK and on the server.
         * The new StringTemplateParameterValue will be automatically stored in the 'parameterValue' property
         * of the parent JavaScriptActionParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.4.0 and higher
         */
        static createInJavaScriptActionParameterMappingUnderParameterValue(container: JavaScriptActionParameterMapping): StringTemplateParameterValue;
        /**
         * Creates and returns a new StringTemplateParameterValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): StringTemplateParameterValue;
    }
    class Subtract extends BinaryListOperation {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsListOperationAction(): ListOperationAction;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new Subtract instance in the SDK and on the server.
         * The new Subtract will be automatically stored in the 'operation' property
         * of the parent ListOperationAction element passed as argument.
         */
        static createIn(container: ListOperationAction): Subtract;
        /**
         * Creates and returns a new Subtract instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): Subtract;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/synchronize relevant section in reference guide}
     *
     * In version 7.22.0: introduced
     */
    class SynchronizeAction extends MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsActionActivity(): ActionActivity;
        /**
         * In version 8.10.0: introduced
         */
        get type(): SynchronizationType;
        set type(newValue: SynchronizationType);
        /**
         * In version 8.10.0: introduced
         */
        get variableNames(): internal.IList<string>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new SynchronizeAction instance in the SDK and on the server.
         * The new SynchronizeAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.22.0 and higher
         */
        static createIn(container: ActionActivity): SynchronizeAction;
        /**
         * Creates and returns a new SynchronizeAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): SynchronizeAction;
    }
    class Tail extends ListOperation {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsListOperationAction(): ListOperationAction;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new Tail instance in the SDK and on the server.
         * The new Tail will be automatically stored in the 'operation' property
         * of the parent ListOperationAction element passed as argument.
         */
        static createIn(container: ListOperationAction): Tail;
        /**
         * Creates and returns a new Tail instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): Tail;
    }
    class TemplateArgument extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsTemplate(): Template;
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get expression(): string;
        set expression(newValue: string);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.8.0: deleted
         * In version 7.9.0: introduced
         */
        get expressionModel(): expressions.Expression;
        set expressionModel(newValue: expressions.Expression);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new TemplateArgument instance in the SDK and on the server.
         * The new TemplateArgument will be automatically stored in the 'arguments' property
         * of the parent Template element passed as argument.
         */
        static createIn(container: Template): TemplateArgument;
        /**
         * Creates and returns a new TemplateArgument instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): TemplateArgument;
    }
    class TextTemplate extends Template {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsShowMessageAction(): ShowMessageAction;
        get containerAsValidationFeedbackAction(): ValidationFeedbackAction;
        get containerAsPageSettings(): pages.PageSettings;
        get text(): texts.Text;
        set text(newValue: texts.Text);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new TextTemplate instance in the SDK and on the server.
         * The new TextTemplate will be automatically stored in the 'template' property
         * of the parent ShowMessageAction element passed as argument.
         */
        static createInShowMessageActionUnderTemplate(container: ShowMessageAction): TextTemplate;
        /**
         * Creates and returns a new TextTemplate instance in the SDK and on the server.
         * The new TextTemplate will be automatically stored in the 'feedbackTemplate' property
         * of the parent ValidationFeedbackAction element passed as argument.
         */
        static createInValidationFeedbackActionUnderFeedbackTemplate(container: ValidationFeedbackAction): TextTemplate;
        /**
         * Creates and returns a new TextTemplate instance in the SDK and on the server.
         * The new TextTemplate will be automatically stored in the 'titleOverride' property
         * of the parent pages.PageSettings element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.12.0 and higher
         */
        static createInPageSettingsUnderTitleOverride(container: pages.PageSettings): TextTemplate;
        /**
         * Creates and returns a new TextTemplate instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): TextTemplate;
    }
    /**
     * In version 8.6.0: introduced
     */
    class TypedTemplate extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsStringTemplateParameterValue(): StringTemplateParameterValue;
        get text(): string;
        set text(newValue: string);
        get arguments(): internal.IList<TypedTemplateArgument>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new TypedTemplate instance in the SDK and on the server.
         * The new TypedTemplate will be automatically stored in the 'typedTemplate' property
         * of the parent StringTemplateParameterValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.6.0 and higher
         */
        static createIn(container: StringTemplateParameterValue): TypedTemplate;
        /**
         * Creates and returns a new TypedTemplate instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): TypedTemplate;
    }
    class Union extends BinaryListOperation {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsListOperationAction(): ListOperationAction;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new Union instance in the SDK and on the server.
         * The new Union will be automatically stored in the 'operation' property
         * of the parent ListOperationAction element passed as argument.
         */
        static createIn(container: ListOperationAction): Union;
        /**
         * Creates and returns a new Union instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): Union;
    }
    /**
     * In version 9.12.0: introduced
     */
    class UnpauseOperation extends WorkflowOperation {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsWorkflowOperationAction(): WorkflowOperationAction;
        get workflowVariable(): string;
        set workflowVariable(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new UnpauseOperation instance in the SDK and on the server.
         * The new UnpauseOperation will be automatically stored in the 'operation' property
         * of the parent WorkflowOperationAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.12.0 and higher
         */
        static createIn(container: WorkflowOperationAction): UnpauseOperation;
        /**
         * Creates and returns a new UnpauseOperation instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): UnpauseOperation;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/validation-feedback relevant section in reference guide}
     */
    class ValidationFeedbackAction extends MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsActionActivity(): ActionActivity;
        get feedbackTemplate(): TextTemplate;
        set feedbackTemplate(newValue: TextTemplate);
        get objectVariableName(): string;
        set objectVariableName(newValue: string);
        /**
         * See: {@link https://docs.mendix.com/refguide/validation-feedback See 'Member' section in reference guide}
         */
        get attribute(): domainmodels.IAttribute | null;
        set attribute(newValue: domainmodels.IAttribute | null);
        get attributeQualifiedName(): string | null;
        /**
         * See: {@link https://docs.mendix.com/refguide/validation-feedback See 'Member' section in reference guide}
         */
        get association(): domainmodels.IAssociationBase | null;
        set association(newValue: domainmodels.IAssociationBase | null);
        get associationQualifiedName(): string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ValidationFeedbackAction instance in the SDK and on the server.
         * The new ValidationFeedbackAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container: ActionActivity): ValidationFeedbackAction;
        /**
         * Creates and returns a new ValidationFeedbackAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ValidationFeedbackAction;
    }
    class VariableExport extends OutputMethod {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsExportXmlAction(): ExportXmlAction;
        get outputVariableName(): string;
        set outputVariableName(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new VariableExport instance in the SDK and on the server.
         * The new VariableExport will be automatically stored in the 'outputMethod' property
         * of the parent ExportXmlAction element passed as argument.
         */
        static createIn(container: ExportXmlAction): VariableExport;
        /**
         * Creates and returns a new VariableExport instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): VariableExport;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/call-web-service-action relevant section in reference guide}
     */
    class WebServiceCallAction extends MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsActionActivity(): ActionActivity;
        get importedWebService(): webservices.IImportedWebService | null;
        set importedWebService(newValue: webservices.IImportedWebService | null);
        get importedWebServiceQualifiedName(): string | null;
        get serviceName(): string;
        set serviceName(newValue: string);
        get operationName(): string;
        set operationName(newValue: string);
        get useRequestTimeOut(): boolean;
        set useRequestTimeOut(newValue: boolean);
        /**
         * In version 7.15.0: deleted
         */
        get timeOut(): number;
        set timeOut(newValue: number);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.8.0: deleted
         * In version 7.15.0: introduced
         */
        get timeOutModel(): expressions.Expression;
        set timeOutModel(newValue: expressions.Expression);
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         *
         * In version 7.15.0: introduced
         */
        get timeOutExpression(): string;
        set timeOutExpression(newValue: string);
        /**
         * In version 6.7.0: deleted
         */
        get sendNullValueChoice(): NullValueOption;
        set sendNullValueChoice(newValue: NullValueOption);
        get requestHeaderHandling(): RequestHandling;
        set requestHeaderHandling(newValue: RequestHandling);
        get requestBodyHandling(): RequestHandling;
        set requestBodyHandling(newValue: RequestHandling);
        get resultHandling(): ResultHandling;
        set resultHandling(newValue: ResultHandling);
        get httpConfiguration(): HttpConfiguration;
        set httpConfiguration(newValue: HttpConfiguration);
        get isValidationRequired(): boolean;
        set isValidationRequired(newValue: boolean);
        /**
         * In version 7.15.0: introduced
         */
        get requestProxyType(): RequestProxyType;
        set requestProxyType(newValue: RequestProxyType);
        /**
         * In version 7.15.0: introduced
         */
        get proxyConfiguration(): ProxyConfiguration | null;
        set proxyConfiguration(newValue: ProxyConfiguration | null);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new WebServiceCallAction instance in the SDK and on the server.
         * The new WebServiceCallAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container: ActionActivity): WebServiceCallAction;
        /**
         * Creates and returns a new WebServiceCallAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): WebServiceCallAction;
    }
    /**
     * In version 6.3.0: introduced
     */
    abstract class WebServiceOperationParameterMapping extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsAdvancedRequestHandling(): AdvancedRequestHandling;
        get containerAsSimpleRequestHandling(): SimpleRequestHandling;
        get isChecked(): boolean;
        set isChecked(newValue: boolean);
        get parameterName(): string;
        set parameterName(newValue: string);
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get argument(): string;
        set argument(newValue: string);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.8.0: deleted
         * In version 7.9.0: introduced
         */
        get argumentModel(): expressions.Expression;
        set argumentModel(newValue: expressions.Expression);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    class WebServiceOperationAdvancedParameterMapping extends WebServiceOperationParameterMapping {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsAdvancedRequestHandling(): AdvancedRequestHandling;
        get mapping(): exportmappings.IExportMapping | null;
        set mapping(newValue: exportmappings.IExportMapping | null);
        get mappingQualifiedName(): string | null;
        get mappingArgumentVariableName(): string;
        set mappingArgumentVariableName(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new WebServiceOperationAdvancedParameterMapping instance in the SDK and on the server.
         * The new WebServiceOperationAdvancedParameterMapping will be automatically stored in the 'parameterMappings' property
         * of the parent AdvancedRequestHandling element passed as argument.
         */
        static createIn(container: AdvancedRequestHandling): WebServiceOperationAdvancedParameterMapping;
        /**
         * Creates and returns a new WebServiceOperationAdvancedParameterMapping instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): WebServiceOperationAdvancedParameterMapping;
    }
    class WebServiceOperationSimpleParameterMapping extends WebServiceOperationParameterMapping {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsSimpleRequestHandling(): SimpleRequestHandling;
        /**
         * The value of this property is conceptually of type mappings.ElementPath.
         */
        get parameterPath(): string;
        set parameterPath(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new WebServiceOperationSimpleParameterMapping instance in the SDK and on the server.
         * The new WebServiceOperationSimpleParameterMapping will be automatically stored in the 'parameterMappings' property
         * of the parent SimpleRequestHandling element passed as argument.
         */
        static createIn(container: SimpleRequestHandling): WebServiceOperationSimpleParameterMapping;
        /**
         * Creates and returns a new WebServiceOperationSimpleParameterMapping instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): WebServiceOperationSimpleParameterMapping;
    }
    /**
     * In version 9.0.4: introduced
     */
    class WhileLoopCondition extends LoopSource {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsLoopedActivity(): LoopedActivity;
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get whileExpression(): string;
        set whileExpression(newValue: string);
        get caption(): string;
        set caption(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new WhileLoopCondition instance in the SDK and on the server.
         * The new WhileLoopCondition will be automatically stored in the 'loopSource' property
         * of the parent LoopedActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.4 and higher
         */
        static createIn(container: LoopedActivity): WhileLoopCondition;
        /**
         * Creates and returns a new WhileLoopCondition instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): WhileLoopCondition;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/workflow-call relevant section in reference guide}
     *
     * In version 9.0.5: removed experimental
     * In version 9.0.2: introduced
     */
    class WorkflowCallAction extends MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsActionActivity(): ActionActivity;
        get workflow(): workflows.IWorkflow | null;
        set workflow(newValue: workflows.IWorkflow | null);
        get workflowQualifiedName(): string | null;
        get workflowContextVariable(): string;
        set workflowContextVariable(newValue: string);
        get useReturnVariable(): boolean;
        set useReturnVariable(newValue: boolean);
        get outputVariableName(): string;
        set outputVariableName(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new WorkflowCallAction instance in the SDK and on the server.
         * The new WorkflowCallAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.2 and higher
         */
        static createIn(container: ActionActivity): WorkflowCallAction;
        /**
         * Creates and returns a new WorkflowCallAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): WorkflowCallAction;
    }
    /**
     * In version 9.12.0: removed experimental
     * In version 9.2.0: introduced
     */
    class WorkflowOperationAction extends MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsActionActivity(): ActionActivity;
        get operation(): WorkflowOperation;
        set operation(newValue: WorkflowOperation);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new WorkflowOperationAction instance in the SDK and on the server.
         * The new WorkflowOperationAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.2.0 and higher
         */
        static createIn(container: ActionActivity): WorkflowOperationAction;
        /**
         * Creates and returns a new WorkflowOperationAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): WorkflowOperationAction;
    }
}
import { appservices } from "./appservices";
import { codeactions } from "./codeactions";
import { datatypes } from "./datatypes";
import { documenttemplates } from "./documenttemplates";
import { domainmodels } from "./domainmodels";
import { exportmappings } from "./exportmappings";
import { expressions } from "./expressions";
import { importmappings } from "./importmappings";
import { javaactions } from "./javaactions";
import { javascriptactions } from "./javascriptactions";
import { mlmappings } from "./mlmappings";
import { mappings } from "./mappings";
import { pages } from "./pages";
import { queues } from "./queues";
import { rest } from "./rest";
import { security } from "./security";
import { services } from "./services";
import { texts } from "./texts";
import { webservices } from "./webservices";
import { workflows } from "./workflows";
import { IModel } from "./base-model";
