import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
/**
 * @ignore
 */
export declare namespace expressions {
    class BinaryOperator extends internal.AbstractEnum {
        static None: BinaryOperator;
        static And: BinaryOperator;
        static Or: BinaryOperator;
        static Equals: BinaryOperator;
        static NotEquals: BinaryOperator;
        static GreaterThan: BinaryOperator;
        static LessThan: BinaryOperator;
        static GreaterThanOrEqual: BinaryOperator;
        static LessThanOrEqual: BinaryOperator;
        static Minus: BinaryOperator;
        static Plus: BinaryOperator;
        static Multiply: BinaryOperator;
        static Divide: BinaryOperator;
        static Div: BinaryOperator;
        static Mod: BinaryOperator;
        protected qualifiedTsTypeName: string;
    }
    class UnaryOperator extends internal.AbstractEnum {
        static None: UnaryOperator;
        static UnaryMinus: UnaryOperator;
        protected qualifiedTsTypeName: string;
    }
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `Expressions`.
     */
    /**
     * See: {@link https://docs.mendix.com/refguide9/expressions relevant section in reference guide}
     *
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.8.0: deleted
     * In version 7.9.0: introduced
     */
    abstract class Expression extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsBinaryExpression(): BinaryExpression;
        get containerAsFunctionCallExpression(): FunctionCallExpression;
        get containerAsIfExpression(): IfExpression;
        get containerAsParenthesisExpression(): ParenthesisExpression;
        get containerAsUnaryExpression(): UnaryExpression;
        get containerAsAppServiceCallParameterMapping(): microflows.AppServiceCallParameterMapping;
        get containerAsBasicCodeActionParameterValue(): microflows.BasicCodeActionParameterValue;
        get containerAsBasicJavaActionParameterValue(): microflows.BasicJavaActionParameterValue;
        get containerAsBinaryRequestHandling(): microflows.BinaryRequestHandling;
        get containerAsChangeListAction(): microflows.ChangeListAction;
        get containerAsChangeVariableAction(): microflows.ChangeVariableAction;
        get containerAsCreateVariableAction(): microflows.CreateVariableAction;
        get containerAsCustomRange(): microflows.CustomRange;
        get containerAsDocumentTemplateParameterMapping(): microflows.DocumentTemplateParameterMapping;
        get containerAsEndEvent(): microflows.EndEvent;
        get containerAsExpressionListOperation(): microflows.ExpressionListOperation;
        get containerAsExpressionSplitCondition(): microflows.ExpressionSplitCondition;
        get containerAsFormDataPart(): microflows.FormDataPart;
        get containerAsGenerateDocumentAction(): microflows.GenerateDocumentAction;
        get containerAsHttpConfiguration(): microflows.HttpConfiguration;
        get containerAsHttpHeaderEntry(): microflows.HttpHeaderEntry;
        get containerAsInspectAttribute(): microflows.InspectAttribute;
        get containerAsLogMessageAction(): microflows.LogMessageAction;
        get containerAsMemberChange(): microflows.MemberChange;
        get containerAsMicroflowCallParameterMapping(): microflows.MicroflowCallParameterMapping;
        get containerAsNanoflowCallParameterMapping(): microflows.NanoflowCallParameterMapping;
        get containerAsProxyConfiguration(): microflows.ProxyConfiguration;
        get containerAsRestCallAction(): microflows.RestCallAction;
        get containerAsRuleCallParameterMapping(): microflows.RuleCallParameterMapping;
        get containerAsTemplateArgument(): microflows.TemplateArgument;
        get containerAsWebServiceCallAction(): microflows.WebServiceCallAction;
        get containerAsWebServiceOperationParameterMapping(): microflows.WebServiceOperationParameterMapping;
        get containerAsConditionalSettings(): pages.ConditionalSettings;
        get containerAsWidgetValidation(): pages.WidgetValidation;
        get containerAsConsumedODataService(): rest.ConsumedODataService;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.8.0: deleted
     * In version 7.9.0: introduced
     */
    class BinaryExpression extends Expression {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsBinaryExpression(): BinaryExpression;
        get containerAsFunctionCallExpression(): FunctionCallExpression;
        get containerAsIfExpression(): IfExpression;
        get containerAsParenthesisExpression(): ParenthesisExpression;
        get containerAsUnaryExpression(): UnaryExpression;
        get containerAsAppServiceCallParameterMapping(): microflows.AppServiceCallParameterMapping;
        get containerAsBasicCodeActionParameterValue(): microflows.BasicCodeActionParameterValue;
        get containerAsBasicJavaActionParameterValue(): microflows.BasicJavaActionParameterValue;
        get containerAsBinaryRequestHandling(): microflows.BinaryRequestHandling;
        get containerAsChangeListAction(): microflows.ChangeListAction;
        get containerAsChangeVariableAction(): microflows.ChangeVariableAction;
        get containerAsCreateVariableAction(): microflows.CreateVariableAction;
        get containerAsCustomRange(): microflows.CustomRange;
        get containerAsDocumentTemplateParameterMapping(): microflows.DocumentTemplateParameterMapping;
        get containerAsEndEvent(): microflows.EndEvent;
        get containerAsExpressionListOperation(): microflows.ExpressionListOperation;
        get containerAsExpressionSplitCondition(): microflows.ExpressionSplitCondition;
        get containerAsFormDataPart(): microflows.FormDataPart;
        get containerAsGenerateDocumentAction(): microflows.GenerateDocumentAction;
        get containerAsHttpConfiguration(): microflows.HttpConfiguration;
        get containerAsHttpHeaderEntry(): microflows.HttpHeaderEntry;
        get containerAsInspectAttribute(): microflows.InspectAttribute;
        get containerAsLogMessageAction(): microflows.LogMessageAction;
        get containerAsMemberChange(): microflows.MemberChange;
        get containerAsMicroflowCallParameterMapping(): microflows.MicroflowCallParameterMapping;
        get containerAsNanoflowCallParameterMapping(): microflows.NanoflowCallParameterMapping;
        get containerAsProxyConfiguration(): microflows.ProxyConfiguration;
        get containerAsRestCallAction(): microflows.RestCallAction;
        get containerAsRuleCallParameterMapping(): microflows.RuleCallParameterMapping;
        get containerAsTemplateArgument(): microflows.TemplateArgument;
        get containerAsWebServiceCallAction(): microflows.WebServiceCallAction;
        get containerAsWebServiceOperationParameterMapping(): microflows.WebServiceOperationParameterMapping;
        get containerAsConditionalSettings(): pages.ConditionalSettings;
        get containerAsWidgetValidation(): pages.WidgetValidation;
        get containerAsConsumedODataService(): rest.ConsumedODataService;
        get operator(): BinaryOperator;
        set operator(newValue: BinaryOperator);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get left(): Expression;
        set left(newValue: Expression);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get right(): Expression;
        set right(newValue: Expression);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'left' property
         * of the parent BinaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryExpressionUnderLeft(container: BinaryExpression): BinaryExpression;
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'right' property
         * of the parent BinaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryExpressionUnderRight(container: BinaryExpression): BinaryExpression;
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'arguments' property
         * of the parent FunctionCallExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInFunctionCallExpressionUnderArguments(container: FunctionCallExpression): BinaryExpression;
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'condition' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderCondition(container: IfExpression): BinaryExpression;
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'ifFalse' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderIfFalse(container: IfExpression): BinaryExpression;
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'ifTrue' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderIfTrue(container: IfExpression): BinaryExpression;
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'expression' property
         * of the parent ParenthesisExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInParenthesisExpressionUnderExpression(container: ParenthesisExpression): BinaryExpression;
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'expression' property
         * of the parent UnaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInUnaryExpressionUnderExpression(container: UnaryExpression): BinaryExpression;
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.AppServiceCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceCallParameterMappingUnderArgumentModel(container: microflows.AppServiceCallParameterMapping): BinaryExpression;
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.BasicCodeActionParameterValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 to 9.7.0
         */
        static createInBasicCodeActionParameterValueUnderArgumentModel(container: microflows.BasicCodeActionParameterValue): BinaryExpression;
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.BasicJavaActionParameterValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 7.20.0
         */
        static createInBasicJavaActionParameterValueUnderArgumentModel(container: microflows.BasicJavaActionParameterValue): BinaryExpression;
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.BinaryRequestHandling element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryRequestHandlingUnderExpressionModel(container: microflows.BinaryRequestHandling): BinaryExpression;
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.ChangeListAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInChangeListActionUnderValueModel(container: microflows.ChangeListAction): BinaryExpression;
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.ChangeVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInChangeVariableActionUnderValueModel(container: microflows.ChangeVariableAction): BinaryExpression;
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'initialValueModel' property
         * of the parent microflows.CreateVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCreateVariableActionUnderInitialValueModel(container: microflows.CreateVariableAction): BinaryExpression;
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'limitExpressionModel' property
         * of the parent microflows.CustomRange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCustomRangeUnderLimitExpressionModel(container: microflows.CustomRange): BinaryExpression;
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'offsetExpressionModel' property
         * of the parent microflows.CustomRange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCustomRangeUnderOffsetExpressionModel(container: microflows.CustomRange): BinaryExpression;
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.DocumentTemplateParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInDocumentTemplateParameterMappingUnderArgumentModel(container: microflows.DocumentTemplateParameterMapping): BinaryExpression;
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'returnValueModel' property
         * of the parent microflows.EndEvent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInEndEventUnderReturnValueModel(container: microflows.EndEvent): BinaryExpression;
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.ExpressionListOperation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.3 to 9.7.0
         */
        static createInExpressionListOperationUnderExpressionModel(container: microflows.ExpressionListOperation): BinaryExpression;
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.ExpressionSplitCondition element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInExpressionSplitConditionUnderExpressionModel(container: microflows.ExpressionSplitCondition): BinaryExpression;
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.FormDataPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 to 9.7.0
         */
        static createInFormDataPartUnderValueModel(container: microflows.FormDataPart): BinaryExpression;
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'marginBottomInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginBottomInInchModel(container: microflows.GenerateDocumentAction): BinaryExpression;
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'marginLeftInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginLeftInInchModel(container: microflows.GenerateDocumentAction): BinaryExpression;
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'marginRightInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginRightInInchModel(container: microflows.GenerateDocumentAction): BinaryExpression;
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'marginTopInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginTopInInchModel(container: microflows.GenerateDocumentAction): BinaryExpression;
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'customLocationModel' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderCustomLocationModel(container: microflows.HttpConfiguration): BinaryExpression;
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'password' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderPassword(container: microflows.HttpConfiguration): BinaryExpression;
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'username' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderUsername(container: microflows.HttpConfiguration): BinaryExpression;
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.HttpHeaderEntry element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpHeaderEntryUnderValueModel(container: microflows.HttpHeaderEntry): BinaryExpression;
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.InspectAttribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInInspectAttributeUnderExpressionModel(container: microflows.InspectAttribute): BinaryExpression;
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'nodeModel' property
         * of the parent microflows.LogMessageAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInLogMessageActionUnderNodeModel(container: microflows.LogMessageAction): BinaryExpression;
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.MemberChange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInMemberChangeUnderValueModel(container: microflows.MemberChange): BinaryExpression;
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.MicroflowCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInMicroflowCallParameterMappingUnderArgumentModel(container: microflows.MicroflowCallParameterMapping): BinaryExpression;
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.NanoflowCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 to 9.7.0
         */
        static createInNanoflowCallParameterMappingUnderArgumentModel(container: microflows.NanoflowCallParameterMapping): BinaryExpression;
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'hostExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderHostExpressionModel(container: microflows.ProxyConfiguration): BinaryExpression;
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'passwordExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderPasswordExpressionModel(container: microflows.ProxyConfiguration): BinaryExpression;
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'portExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderPortExpressionModel(container: microflows.ProxyConfiguration): BinaryExpression;
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'useConfigurationExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderUseConfigurationExpressionModel(container: microflows.ProxyConfiguration): BinaryExpression;
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'usernameExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderUsernameExpressionModel(container: microflows.ProxyConfiguration): BinaryExpression;
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'timeOutModel' property
         * of the parent microflows.RestCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInRestCallActionUnderTimeOutModel(container: microflows.RestCallAction): BinaryExpression;
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.RuleCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInRuleCallParameterMappingUnderArgumentModel(container: microflows.RuleCallParameterMapping): BinaryExpression;
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.TemplateArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInTemplateArgumentUnderExpressionModel(container: microflows.TemplateArgument): BinaryExpression;
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'timeOutModel' property
         * of the parent microflows.WebServiceCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInWebServiceCallActionUnderTimeOutModel(container: microflows.WebServiceCallAction): BinaryExpression;
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.WebServiceOperationParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInWebServiceOperationParameterMappingUnderArgumentModel(container: microflows.WebServiceOperationParameterMapping): BinaryExpression;
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'expressionModel' property
         * of the parent pages.ConditionalSettings element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInConditionalSettingsUnderExpressionModel(container: pages.ConditionalSettings): BinaryExpression;
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'expressionModel' property
         * of the parent pages.WidgetValidation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInWidgetValidationUnderExpressionModel(container: pages.WidgetValidation): BinaryExpression;
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'timeoutModel' property
         * of the parent rest.ConsumedODataService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.5.0 to 9.7.0
         */
        static createInConsumedODataServiceUnderTimeoutModel(container: rest.ConsumedODataService): BinaryExpression;
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): BinaryExpression;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.8.0: deleted
     * In version 7.9.0: introduced
     */
    abstract class LiteralExpression extends Expression {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsBinaryExpression(): BinaryExpression;
        get containerAsFunctionCallExpression(): FunctionCallExpression;
        get containerAsIfExpression(): IfExpression;
        get containerAsParenthesisExpression(): ParenthesisExpression;
        get containerAsUnaryExpression(): UnaryExpression;
        get containerAsAppServiceCallParameterMapping(): microflows.AppServiceCallParameterMapping;
        get containerAsBasicCodeActionParameterValue(): microflows.BasicCodeActionParameterValue;
        get containerAsBasicJavaActionParameterValue(): microflows.BasicJavaActionParameterValue;
        get containerAsBinaryRequestHandling(): microflows.BinaryRequestHandling;
        get containerAsChangeListAction(): microflows.ChangeListAction;
        get containerAsChangeVariableAction(): microflows.ChangeVariableAction;
        get containerAsCreateVariableAction(): microflows.CreateVariableAction;
        get containerAsCustomRange(): microflows.CustomRange;
        get containerAsDocumentTemplateParameterMapping(): microflows.DocumentTemplateParameterMapping;
        get containerAsEndEvent(): microflows.EndEvent;
        get containerAsExpressionListOperation(): microflows.ExpressionListOperation;
        get containerAsExpressionSplitCondition(): microflows.ExpressionSplitCondition;
        get containerAsFormDataPart(): microflows.FormDataPart;
        get containerAsGenerateDocumentAction(): microflows.GenerateDocumentAction;
        get containerAsHttpConfiguration(): microflows.HttpConfiguration;
        get containerAsHttpHeaderEntry(): microflows.HttpHeaderEntry;
        get containerAsInspectAttribute(): microflows.InspectAttribute;
        get containerAsLogMessageAction(): microflows.LogMessageAction;
        get containerAsMemberChange(): microflows.MemberChange;
        get containerAsMicroflowCallParameterMapping(): microflows.MicroflowCallParameterMapping;
        get containerAsNanoflowCallParameterMapping(): microflows.NanoflowCallParameterMapping;
        get containerAsProxyConfiguration(): microflows.ProxyConfiguration;
        get containerAsRestCallAction(): microflows.RestCallAction;
        get containerAsRuleCallParameterMapping(): microflows.RuleCallParameterMapping;
        get containerAsTemplateArgument(): microflows.TemplateArgument;
        get containerAsWebServiceCallAction(): microflows.WebServiceCallAction;
        get containerAsWebServiceOperationParameterMapping(): microflows.WebServiceOperationParameterMapping;
        get containerAsConditionalSettings(): pages.ConditionalSettings;
        get containerAsWidgetValidation(): pages.WidgetValidation;
        get containerAsConsumedODataService(): rest.ConsumedODataService;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.8.0: deleted
     * In version 7.9.0: introduced
     */
    class BooleanLiteral extends LiteralExpression {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsBinaryExpression(): BinaryExpression;
        get containerAsFunctionCallExpression(): FunctionCallExpression;
        get containerAsIfExpression(): IfExpression;
        get containerAsParenthesisExpression(): ParenthesisExpression;
        get containerAsUnaryExpression(): UnaryExpression;
        get containerAsAppServiceCallParameterMapping(): microflows.AppServiceCallParameterMapping;
        get containerAsBasicCodeActionParameterValue(): microflows.BasicCodeActionParameterValue;
        get containerAsBasicJavaActionParameterValue(): microflows.BasicJavaActionParameterValue;
        get containerAsBinaryRequestHandling(): microflows.BinaryRequestHandling;
        get containerAsChangeListAction(): microflows.ChangeListAction;
        get containerAsChangeVariableAction(): microflows.ChangeVariableAction;
        get containerAsCreateVariableAction(): microflows.CreateVariableAction;
        get containerAsCustomRange(): microflows.CustomRange;
        get containerAsDocumentTemplateParameterMapping(): microflows.DocumentTemplateParameterMapping;
        get containerAsEndEvent(): microflows.EndEvent;
        get containerAsExpressionListOperation(): microflows.ExpressionListOperation;
        get containerAsExpressionSplitCondition(): microflows.ExpressionSplitCondition;
        get containerAsFormDataPart(): microflows.FormDataPart;
        get containerAsGenerateDocumentAction(): microflows.GenerateDocumentAction;
        get containerAsHttpConfiguration(): microflows.HttpConfiguration;
        get containerAsHttpHeaderEntry(): microflows.HttpHeaderEntry;
        get containerAsInspectAttribute(): microflows.InspectAttribute;
        get containerAsLogMessageAction(): microflows.LogMessageAction;
        get containerAsMemberChange(): microflows.MemberChange;
        get containerAsMicroflowCallParameterMapping(): microflows.MicroflowCallParameterMapping;
        get containerAsNanoflowCallParameterMapping(): microflows.NanoflowCallParameterMapping;
        get containerAsProxyConfiguration(): microflows.ProxyConfiguration;
        get containerAsRestCallAction(): microflows.RestCallAction;
        get containerAsRuleCallParameterMapping(): microflows.RuleCallParameterMapping;
        get containerAsTemplateArgument(): microflows.TemplateArgument;
        get containerAsWebServiceCallAction(): microflows.WebServiceCallAction;
        get containerAsWebServiceOperationParameterMapping(): microflows.WebServiceOperationParameterMapping;
        get containerAsConditionalSettings(): pages.ConditionalSettings;
        get containerAsWidgetValidation(): pages.WidgetValidation;
        get containerAsConsumedODataService(): rest.ConsumedODataService;
        get value(): boolean;
        set value(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'left' property
         * of the parent BinaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryExpressionUnderLeft(container: BinaryExpression): BooleanLiteral;
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'right' property
         * of the parent BinaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryExpressionUnderRight(container: BinaryExpression): BooleanLiteral;
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'arguments' property
         * of the parent FunctionCallExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInFunctionCallExpressionUnderArguments(container: FunctionCallExpression): BooleanLiteral;
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'condition' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderCondition(container: IfExpression): BooleanLiteral;
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'ifFalse' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderIfFalse(container: IfExpression): BooleanLiteral;
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'ifTrue' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderIfTrue(container: IfExpression): BooleanLiteral;
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'expression' property
         * of the parent ParenthesisExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInParenthesisExpressionUnderExpression(container: ParenthesisExpression): BooleanLiteral;
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'expression' property
         * of the parent UnaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInUnaryExpressionUnderExpression(container: UnaryExpression): BooleanLiteral;
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.AppServiceCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceCallParameterMappingUnderArgumentModel(container: microflows.AppServiceCallParameterMapping): BooleanLiteral;
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.BasicCodeActionParameterValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 to 9.7.0
         */
        static createInBasicCodeActionParameterValueUnderArgumentModel(container: microflows.BasicCodeActionParameterValue): BooleanLiteral;
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.BasicJavaActionParameterValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 7.20.0
         */
        static createInBasicJavaActionParameterValueUnderArgumentModel(container: microflows.BasicJavaActionParameterValue): BooleanLiteral;
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'expressionModel' property
         * of the parent microflows.BinaryRequestHandling element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryRequestHandlingUnderExpressionModel(container: microflows.BinaryRequestHandling): BooleanLiteral;
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'valueModel' property
         * of the parent microflows.ChangeListAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInChangeListActionUnderValueModel(container: microflows.ChangeListAction): BooleanLiteral;
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'valueModel' property
         * of the parent microflows.ChangeVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInChangeVariableActionUnderValueModel(container: microflows.ChangeVariableAction): BooleanLiteral;
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'initialValueModel' property
         * of the parent microflows.CreateVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCreateVariableActionUnderInitialValueModel(container: microflows.CreateVariableAction): BooleanLiteral;
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'limitExpressionModel' property
         * of the parent microflows.CustomRange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCustomRangeUnderLimitExpressionModel(container: microflows.CustomRange): BooleanLiteral;
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'offsetExpressionModel' property
         * of the parent microflows.CustomRange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCustomRangeUnderOffsetExpressionModel(container: microflows.CustomRange): BooleanLiteral;
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.DocumentTemplateParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInDocumentTemplateParameterMappingUnderArgumentModel(container: microflows.DocumentTemplateParameterMapping): BooleanLiteral;
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'returnValueModel' property
         * of the parent microflows.EndEvent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInEndEventUnderReturnValueModel(container: microflows.EndEvent): BooleanLiteral;
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'expressionModel' property
         * of the parent microflows.ExpressionListOperation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.3 to 9.7.0
         */
        static createInExpressionListOperationUnderExpressionModel(container: microflows.ExpressionListOperation): BooleanLiteral;
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'expressionModel' property
         * of the parent microflows.ExpressionSplitCondition element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInExpressionSplitConditionUnderExpressionModel(container: microflows.ExpressionSplitCondition): BooleanLiteral;
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'valueModel' property
         * of the parent microflows.FormDataPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 to 9.7.0
         */
        static createInFormDataPartUnderValueModel(container: microflows.FormDataPart): BooleanLiteral;
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'marginBottomInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginBottomInInchModel(container: microflows.GenerateDocumentAction): BooleanLiteral;
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'marginLeftInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginLeftInInchModel(container: microflows.GenerateDocumentAction): BooleanLiteral;
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'marginRightInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginRightInInchModel(container: microflows.GenerateDocumentAction): BooleanLiteral;
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'marginTopInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginTopInInchModel(container: microflows.GenerateDocumentAction): BooleanLiteral;
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'customLocationModel' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderCustomLocationModel(container: microflows.HttpConfiguration): BooleanLiteral;
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'password' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderPassword(container: microflows.HttpConfiguration): BooleanLiteral;
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'username' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderUsername(container: microflows.HttpConfiguration): BooleanLiteral;
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'valueModel' property
         * of the parent microflows.HttpHeaderEntry element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpHeaderEntryUnderValueModel(container: microflows.HttpHeaderEntry): BooleanLiteral;
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'expressionModel' property
         * of the parent microflows.InspectAttribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInInspectAttributeUnderExpressionModel(container: microflows.InspectAttribute): BooleanLiteral;
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'nodeModel' property
         * of the parent microflows.LogMessageAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInLogMessageActionUnderNodeModel(container: microflows.LogMessageAction): BooleanLiteral;
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'valueModel' property
         * of the parent microflows.MemberChange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInMemberChangeUnderValueModel(container: microflows.MemberChange): BooleanLiteral;
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.MicroflowCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInMicroflowCallParameterMappingUnderArgumentModel(container: microflows.MicroflowCallParameterMapping): BooleanLiteral;
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.NanoflowCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 to 9.7.0
         */
        static createInNanoflowCallParameterMappingUnderArgumentModel(container: microflows.NanoflowCallParameterMapping): BooleanLiteral;
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'hostExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderHostExpressionModel(container: microflows.ProxyConfiguration): BooleanLiteral;
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'passwordExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderPasswordExpressionModel(container: microflows.ProxyConfiguration): BooleanLiteral;
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'portExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderPortExpressionModel(container: microflows.ProxyConfiguration): BooleanLiteral;
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'useConfigurationExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderUseConfigurationExpressionModel(container: microflows.ProxyConfiguration): BooleanLiteral;
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'usernameExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderUsernameExpressionModel(container: microflows.ProxyConfiguration): BooleanLiteral;
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'timeOutModel' property
         * of the parent microflows.RestCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInRestCallActionUnderTimeOutModel(container: microflows.RestCallAction): BooleanLiteral;
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.RuleCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInRuleCallParameterMappingUnderArgumentModel(container: microflows.RuleCallParameterMapping): BooleanLiteral;
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'expressionModel' property
         * of the parent microflows.TemplateArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInTemplateArgumentUnderExpressionModel(container: microflows.TemplateArgument): BooleanLiteral;
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'timeOutModel' property
         * of the parent microflows.WebServiceCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInWebServiceCallActionUnderTimeOutModel(container: microflows.WebServiceCallAction): BooleanLiteral;
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.WebServiceOperationParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInWebServiceOperationParameterMappingUnderArgumentModel(container: microflows.WebServiceOperationParameterMapping): BooleanLiteral;
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'expressionModel' property
         * of the parent pages.ConditionalSettings element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInConditionalSettingsUnderExpressionModel(container: pages.ConditionalSettings): BooleanLiteral;
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'expressionModel' property
         * of the parent pages.WidgetValidation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInWidgetValidationUnderExpressionModel(container: pages.WidgetValidation): BooleanLiteral;
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'timeoutModel' property
         * of the parent rest.ConsumedODataService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.5.0 to 9.7.0
         */
        static createInConsumedODataServiceUnderTimeoutModel(container: rest.ConsumedODataService): BooleanLiteral;
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): BooleanLiteral;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.8.0: deleted
     * In version 7.9.0: introduced
     */
    class ConstantRefExpression extends Expression {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsBinaryExpression(): BinaryExpression;
        get containerAsFunctionCallExpression(): FunctionCallExpression;
        get containerAsIfExpression(): IfExpression;
        get containerAsParenthesisExpression(): ParenthesisExpression;
        get containerAsUnaryExpression(): UnaryExpression;
        get containerAsAppServiceCallParameterMapping(): microflows.AppServiceCallParameterMapping;
        get containerAsBasicCodeActionParameterValue(): microflows.BasicCodeActionParameterValue;
        get containerAsBasicJavaActionParameterValue(): microflows.BasicJavaActionParameterValue;
        get containerAsBinaryRequestHandling(): microflows.BinaryRequestHandling;
        get containerAsChangeListAction(): microflows.ChangeListAction;
        get containerAsChangeVariableAction(): microflows.ChangeVariableAction;
        get containerAsCreateVariableAction(): microflows.CreateVariableAction;
        get containerAsCustomRange(): microflows.CustomRange;
        get containerAsDocumentTemplateParameterMapping(): microflows.DocumentTemplateParameterMapping;
        get containerAsEndEvent(): microflows.EndEvent;
        get containerAsExpressionListOperation(): microflows.ExpressionListOperation;
        get containerAsExpressionSplitCondition(): microflows.ExpressionSplitCondition;
        get containerAsFormDataPart(): microflows.FormDataPart;
        get containerAsGenerateDocumentAction(): microflows.GenerateDocumentAction;
        get containerAsHttpConfiguration(): microflows.HttpConfiguration;
        get containerAsHttpHeaderEntry(): microflows.HttpHeaderEntry;
        get containerAsInspectAttribute(): microflows.InspectAttribute;
        get containerAsLogMessageAction(): microflows.LogMessageAction;
        get containerAsMemberChange(): microflows.MemberChange;
        get containerAsMicroflowCallParameterMapping(): microflows.MicroflowCallParameterMapping;
        get containerAsNanoflowCallParameterMapping(): microflows.NanoflowCallParameterMapping;
        get containerAsProxyConfiguration(): microflows.ProxyConfiguration;
        get containerAsRestCallAction(): microflows.RestCallAction;
        get containerAsRuleCallParameterMapping(): microflows.RuleCallParameterMapping;
        get containerAsTemplateArgument(): microflows.TemplateArgument;
        get containerAsWebServiceCallAction(): microflows.WebServiceCallAction;
        get containerAsWebServiceOperationParameterMapping(): microflows.WebServiceOperationParameterMapping;
        get containerAsConditionalSettings(): pages.ConditionalSettings;
        get containerAsWidgetValidation(): pages.WidgetValidation;
        get containerAsConsumedODataService(): rest.ConsumedODataService;
        get constant(): constants.IConstant;
        set constant(newValue: constants.IConstant);
        get constantQualifiedName(): string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'left' property
         * of the parent BinaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryExpressionUnderLeft(container: BinaryExpression): ConstantRefExpression;
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'right' property
         * of the parent BinaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryExpressionUnderRight(container: BinaryExpression): ConstantRefExpression;
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'arguments' property
         * of the parent FunctionCallExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInFunctionCallExpressionUnderArguments(container: FunctionCallExpression): ConstantRefExpression;
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'condition' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderCondition(container: IfExpression): ConstantRefExpression;
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'ifFalse' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderIfFalse(container: IfExpression): ConstantRefExpression;
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'ifTrue' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderIfTrue(container: IfExpression): ConstantRefExpression;
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'expression' property
         * of the parent ParenthesisExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInParenthesisExpressionUnderExpression(container: ParenthesisExpression): ConstantRefExpression;
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'expression' property
         * of the parent UnaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInUnaryExpressionUnderExpression(container: UnaryExpression): ConstantRefExpression;
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.AppServiceCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceCallParameterMappingUnderArgumentModel(container: microflows.AppServiceCallParameterMapping): ConstantRefExpression;
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.BasicCodeActionParameterValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 to 9.7.0
         */
        static createInBasicCodeActionParameterValueUnderArgumentModel(container: microflows.BasicCodeActionParameterValue): ConstantRefExpression;
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.BasicJavaActionParameterValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 7.20.0
         */
        static createInBasicJavaActionParameterValueUnderArgumentModel(container: microflows.BasicJavaActionParameterValue): ConstantRefExpression;
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.BinaryRequestHandling element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryRequestHandlingUnderExpressionModel(container: microflows.BinaryRequestHandling): ConstantRefExpression;
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.ChangeListAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInChangeListActionUnderValueModel(container: microflows.ChangeListAction): ConstantRefExpression;
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.ChangeVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInChangeVariableActionUnderValueModel(container: microflows.ChangeVariableAction): ConstantRefExpression;
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'initialValueModel' property
         * of the parent microflows.CreateVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCreateVariableActionUnderInitialValueModel(container: microflows.CreateVariableAction): ConstantRefExpression;
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'limitExpressionModel' property
         * of the parent microflows.CustomRange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCustomRangeUnderLimitExpressionModel(container: microflows.CustomRange): ConstantRefExpression;
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'offsetExpressionModel' property
         * of the parent microflows.CustomRange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCustomRangeUnderOffsetExpressionModel(container: microflows.CustomRange): ConstantRefExpression;
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.DocumentTemplateParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInDocumentTemplateParameterMappingUnderArgumentModel(container: microflows.DocumentTemplateParameterMapping): ConstantRefExpression;
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'returnValueModel' property
         * of the parent microflows.EndEvent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInEndEventUnderReturnValueModel(container: microflows.EndEvent): ConstantRefExpression;
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.ExpressionListOperation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.3 to 9.7.0
         */
        static createInExpressionListOperationUnderExpressionModel(container: microflows.ExpressionListOperation): ConstantRefExpression;
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.ExpressionSplitCondition element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInExpressionSplitConditionUnderExpressionModel(container: microflows.ExpressionSplitCondition): ConstantRefExpression;
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.FormDataPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 to 9.7.0
         */
        static createInFormDataPartUnderValueModel(container: microflows.FormDataPart): ConstantRefExpression;
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'marginBottomInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginBottomInInchModel(container: microflows.GenerateDocumentAction): ConstantRefExpression;
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'marginLeftInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginLeftInInchModel(container: microflows.GenerateDocumentAction): ConstantRefExpression;
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'marginRightInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginRightInInchModel(container: microflows.GenerateDocumentAction): ConstantRefExpression;
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'marginTopInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginTopInInchModel(container: microflows.GenerateDocumentAction): ConstantRefExpression;
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'customLocationModel' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderCustomLocationModel(container: microflows.HttpConfiguration): ConstantRefExpression;
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'password' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderPassword(container: microflows.HttpConfiguration): ConstantRefExpression;
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'username' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderUsername(container: microflows.HttpConfiguration): ConstantRefExpression;
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.HttpHeaderEntry element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpHeaderEntryUnderValueModel(container: microflows.HttpHeaderEntry): ConstantRefExpression;
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.InspectAttribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInInspectAttributeUnderExpressionModel(container: microflows.InspectAttribute): ConstantRefExpression;
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'nodeModel' property
         * of the parent microflows.LogMessageAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInLogMessageActionUnderNodeModel(container: microflows.LogMessageAction): ConstantRefExpression;
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.MemberChange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInMemberChangeUnderValueModel(container: microflows.MemberChange): ConstantRefExpression;
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.MicroflowCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInMicroflowCallParameterMappingUnderArgumentModel(container: microflows.MicroflowCallParameterMapping): ConstantRefExpression;
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.NanoflowCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 to 9.7.0
         */
        static createInNanoflowCallParameterMappingUnderArgumentModel(container: microflows.NanoflowCallParameterMapping): ConstantRefExpression;
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'hostExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderHostExpressionModel(container: microflows.ProxyConfiguration): ConstantRefExpression;
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'passwordExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderPasswordExpressionModel(container: microflows.ProxyConfiguration): ConstantRefExpression;
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'portExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderPortExpressionModel(container: microflows.ProxyConfiguration): ConstantRefExpression;
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'useConfigurationExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderUseConfigurationExpressionModel(container: microflows.ProxyConfiguration): ConstantRefExpression;
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'usernameExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderUsernameExpressionModel(container: microflows.ProxyConfiguration): ConstantRefExpression;
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'timeOutModel' property
         * of the parent microflows.RestCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInRestCallActionUnderTimeOutModel(container: microflows.RestCallAction): ConstantRefExpression;
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.RuleCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInRuleCallParameterMappingUnderArgumentModel(container: microflows.RuleCallParameterMapping): ConstantRefExpression;
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.TemplateArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInTemplateArgumentUnderExpressionModel(container: microflows.TemplateArgument): ConstantRefExpression;
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'timeOutModel' property
         * of the parent microflows.WebServiceCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInWebServiceCallActionUnderTimeOutModel(container: microflows.WebServiceCallAction): ConstantRefExpression;
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.WebServiceOperationParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInWebServiceOperationParameterMappingUnderArgumentModel(container: microflows.WebServiceOperationParameterMapping): ConstantRefExpression;
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'expressionModel' property
         * of the parent pages.ConditionalSettings element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInConditionalSettingsUnderExpressionModel(container: pages.ConditionalSettings): ConstantRefExpression;
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'expressionModel' property
         * of the parent pages.WidgetValidation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInWidgetValidationUnderExpressionModel(container: pages.WidgetValidation): ConstantRefExpression;
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'timeoutModel' property
         * of the parent rest.ConsumedODataService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.5.0 to 9.7.0
         */
        static createInConsumedODataServiceUnderTimeoutModel(container: rest.ConsumedODataService): ConstantRefExpression;
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ConstantRefExpression;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.8.0: deleted
     * In version 7.9.0: introduced
     */
    class EmptyLiteral extends LiteralExpression {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsBinaryExpression(): BinaryExpression;
        get containerAsFunctionCallExpression(): FunctionCallExpression;
        get containerAsIfExpression(): IfExpression;
        get containerAsParenthesisExpression(): ParenthesisExpression;
        get containerAsUnaryExpression(): UnaryExpression;
        get containerAsAppServiceCallParameterMapping(): microflows.AppServiceCallParameterMapping;
        get containerAsBasicCodeActionParameterValue(): microflows.BasicCodeActionParameterValue;
        get containerAsBasicJavaActionParameterValue(): microflows.BasicJavaActionParameterValue;
        get containerAsBinaryRequestHandling(): microflows.BinaryRequestHandling;
        get containerAsChangeListAction(): microflows.ChangeListAction;
        get containerAsChangeVariableAction(): microflows.ChangeVariableAction;
        get containerAsCreateVariableAction(): microflows.CreateVariableAction;
        get containerAsCustomRange(): microflows.CustomRange;
        get containerAsDocumentTemplateParameterMapping(): microflows.DocumentTemplateParameterMapping;
        get containerAsEndEvent(): microflows.EndEvent;
        get containerAsExpressionListOperation(): microflows.ExpressionListOperation;
        get containerAsExpressionSplitCondition(): microflows.ExpressionSplitCondition;
        get containerAsFormDataPart(): microflows.FormDataPart;
        get containerAsGenerateDocumentAction(): microflows.GenerateDocumentAction;
        get containerAsHttpConfiguration(): microflows.HttpConfiguration;
        get containerAsHttpHeaderEntry(): microflows.HttpHeaderEntry;
        get containerAsInspectAttribute(): microflows.InspectAttribute;
        get containerAsLogMessageAction(): microflows.LogMessageAction;
        get containerAsMemberChange(): microflows.MemberChange;
        get containerAsMicroflowCallParameterMapping(): microflows.MicroflowCallParameterMapping;
        get containerAsNanoflowCallParameterMapping(): microflows.NanoflowCallParameterMapping;
        get containerAsProxyConfiguration(): microflows.ProxyConfiguration;
        get containerAsRestCallAction(): microflows.RestCallAction;
        get containerAsRuleCallParameterMapping(): microflows.RuleCallParameterMapping;
        get containerAsTemplateArgument(): microflows.TemplateArgument;
        get containerAsWebServiceCallAction(): microflows.WebServiceCallAction;
        get containerAsWebServiceOperationParameterMapping(): microflows.WebServiceOperationParameterMapping;
        get containerAsConditionalSettings(): pages.ConditionalSettings;
        get containerAsWidgetValidation(): pages.WidgetValidation;
        get containerAsConsumedODataService(): rest.ConsumedODataService;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'left' property
         * of the parent BinaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryExpressionUnderLeft(container: BinaryExpression): EmptyLiteral;
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'right' property
         * of the parent BinaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryExpressionUnderRight(container: BinaryExpression): EmptyLiteral;
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'arguments' property
         * of the parent FunctionCallExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInFunctionCallExpressionUnderArguments(container: FunctionCallExpression): EmptyLiteral;
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'condition' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderCondition(container: IfExpression): EmptyLiteral;
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'ifFalse' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderIfFalse(container: IfExpression): EmptyLiteral;
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'ifTrue' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderIfTrue(container: IfExpression): EmptyLiteral;
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'expression' property
         * of the parent ParenthesisExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInParenthesisExpressionUnderExpression(container: ParenthesisExpression): EmptyLiteral;
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'expression' property
         * of the parent UnaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInUnaryExpressionUnderExpression(container: UnaryExpression): EmptyLiteral;
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.AppServiceCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceCallParameterMappingUnderArgumentModel(container: microflows.AppServiceCallParameterMapping): EmptyLiteral;
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.BasicCodeActionParameterValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 to 9.7.0
         */
        static createInBasicCodeActionParameterValueUnderArgumentModel(container: microflows.BasicCodeActionParameterValue): EmptyLiteral;
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.BasicJavaActionParameterValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 7.20.0
         */
        static createInBasicJavaActionParameterValueUnderArgumentModel(container: microflows.BasicJavaActionParameterValue): EmptyLiteral;
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'expressionModel' property
         * of the parent microflows.BinaryRequestHandling element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryRequestHandlingUnderExpressionModel(container: microflows.BinaryRequestHandling): EmptyLiteral;
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'valueModel' property
         * of the parent microflows.ChangeListAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInChangeListActionUnderValueModel(container: microflows.ChangeListAction): EmptyLiteral;
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'valueModel' property
         * of the parent microflows.ChangeVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInChangeVariableActionUnderValueModel(container: microflows.ChangeVariableAction): EmptyLiteral;
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'initialValueModel' property
         * of the parent microflows.CreateVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCreateVariableActionUnderInitialValueModel(container: microflows.CreateVariableAction): EmptyLiteral;
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'limitExpressionModel' property
         * of the parent microflows.CustomRange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCustomRangeUnderLimitExpressionModel(container: microflows.CustomRange): EmptyLiteral;
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'offsetExpressionModel' property
         * of the parent microflows.CustomRange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCustomRangeUnderOffsetExpressionModel(container: microflows.CustomRange): EmptyLiteral;
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.DocumentTemplateParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInDocumentTemplateParameterMappingUnderArgumentModel(container: microflows.DocumentTemplateParameterMapping): EmptyLiteral;
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'returnValueModel' property
         * of the parent microflows.EndEvent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInEndEventUnderReturnValueModel(container: microflows.EndEvent): EmptyLiteral;
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'expressionModel' property
         * of the parent microflows.ExpressionListOperation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.3 to 9.7.0
         */
        static createInExpressionListOperationUnderExpressionModel(container: microflows.ExpressionListOperation): EmptyLiteral;
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'expressionModel' property
         * of the parent microflows.ExpressionSplitCondition element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInExpressionSplitConditionUnderExpressionModel(container: microflows.ExpressionSplitCondition): EmptyLiteral;
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'valueModel' property
         * of the parent microflows.FormDataPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 to 9.7.0
         */
        static createInFormDataPartUnderValueModel(container: microflows.FormDataPart): EmptyLiteral;
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'marginBottomInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginBottomInInchModel(container: microflows.GenerateDocumentAction): EmptyLiteral;
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'marginLeftInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginLeftInInchModel(container: microflows.GenerateDocumentAction): EmptyLiteral;
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'marginRightInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginRightInInchModel(container: microflows.GenerateDocumentAction): EmptyLiteral;
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'marginTopInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginTopInInchModel(container: microflows.GenerateDocumentAction): EmptyLiteral;
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'customLocationModel' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderCustomLocationModel(container: microflows.HttpConfiguration): EmptyLiteral;
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'password' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderPassword(container: microflows.HttpConfiguration): EmptyLiteral;
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'username' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderUsername(container: microflows.HttpConfiguration): EmptyLiteral;
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'valueModel' property
         * of the parent microflows.HttpHeaderEntry element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpHeaderEntryUnderValueModel(container: microflows.HttpHeaderEntry): EmptyLiteral;
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'expressionModel' property
         * of the parent microflows.InspectAttribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInInspectAttributeUnderExpressionModel(container: microflows.InspectAttribute): EmptyLiteral;
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'nodeModel' property
         * of the parent microflows.LogMessageAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInLogMessageActionUnderNodeModel(container: microflows.LogMessageAction): EmptyLiteral;
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'valueModel' property
         * of the parent microflows.MemberChange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInMemberChangeUnderValueModel(container: microflows.MemberChange): EmptyLiteral;
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.MicroflowCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInMicroflowCallParameterMappingUnderArgumentModel(container: microflows.MicroflowCallParameterMapping): EmptyLiteral;
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.NanoflowCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 to 9.7.0
         */
        static createInNanoflowCallParameterMappingUnderArgumentModel(container: microflows.NanoflowCallParameterMapping): EmptyLiteral;
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'hostExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderHostExpressionModel(container: microflows.ProxyConfiguration): EmptyLiteral;
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'passwordExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderPasswordExpressionModel(container: microflows.ProxyConfiguration): EmptyLiteral;
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'portExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderPortExpressionModel(container: microflows.ProxyConfiguration): EmptyLiteral;
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'useConfigurationExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderUseConfigurationExpressionModel(container: microflows.ProxyConfiguration): EmptyLiteral;
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'usernameExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderUsernameExpressionModel(container: microflows.ProxyConfiguration): EmptyLiteral;
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'timeOutModel' property
         * of the parent microflows.RestCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInRestCallActionUnderTimeOutModel(container: microflows.RestCallAction): EmptyLiteral;
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.RuleCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInRuleCallParameterMappingUnderArgumentModel(container: microflows.RuleCallParameterMapping): EmptyLiteral;
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'expressionModel' property
         * of the parent microflows.TemplateArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInTemplateArgumentUnderExpressionModel(container: microflows.TemplateArgument): EmptyLiteral;
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'timeOutModel' property
         * of the parent microflows.WebServiceCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInWebServiceCallActionUnderTimeOutModel(container: microflows.WebServiceCallAction): EmptyLiteral;
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.WebServiceOperationParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInWebServiceOperationParameterMappingUnderArgumentModel(container: microflows.WebServiceOperationParameterMapping): EmptyLiteral;
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'expressionModel' property
         * of the parent pages.ConditionalSettings element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInConditionalSettingsUnderExpressionModel(container: pages.ConditionalSettings): EmptyLiteral;
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'expressionModel' property
         * of the parent pages.WidgetValidation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInWidgetValidationUnderExpressionModel(container: pages.WidgetValidation): EmptyLiteral;
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'timeoutModel' property
         * of the parent rest.ConsumedODataService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.5.0 to 9.7.0
         */
        static createInConsumedODataServiceUnderTimeoutModel(container: rest.ConsumedODataService): EmptyLiteral;
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): EmptyLiteral;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.8.0: deleted
     * In version 7.9.0: introduced
     */
    class EnumerationValueRefExpression extends Expression {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsBinaryExpression(): BinaryExpression;
        get containerAsFunctionCallExpression(): FunctionCallExpression;
        get containerAsIfExpression(): IfExpression;
        get containerAsParenthesisExpression(): ParenthesisExpression;
        get containerAsUnaryExpression(): UnaryExpression;
        get containerAsAppServiceCallParameterMapping(): microflows.AppServiceCallParameterMapping;
        get containerAsBasicCodeActionParameterValue(): microflows.BasicCodeActionParameterValue;
        get containerAsBasicJavaActionParameterValue(): microflows.BasicJavaActionParameterValue;
        get containerAsBinaryRequestHandling(): microflows.BinaryRequestHandling;
        get containerAsChangeListAction(): microflows.ChangeListAction;
        get containerAsChangeVariableAction(): microflows.ChangeVariableAction;
        get containerAsCreateVariableAction(): microflows.CreateVariableAction;
        get containerAsCustomRange(): microflows.CustomRange;
        get containerAsDocumentTemplateParameterMapping(): microflows.DocumentTemplateParameterMapping;
        get containerAsEndEvent(): microflows.EndEvent;
        get containerAsExpressionListOperation(): microflows.ExpressionListOperation;
        get containerAsExpressionSplitCondition(): microflows.ExpressionSplitCondition;
        get containerAsFormDataPart(): microflows.FormDataPart;
        get containerAsGenerateDocumentAction(): microflows.GenerateDocumentAction;
        get containerAsHttpConfiguration(): microflows.HttpConfiguration;
        get containerAsHttpHeaderEntry(): microflows.HttpHeaderEntry;
        get containerAsInspectAttribute(): microflows.InspectAttribute;
        get containerAsLogMessageAction(): microflows.LogMessageAction;
        get containerAsMemberChange(): microflows.MemberChange;
        get containerAsMicroflowCallParameterMapping(): microflows.MicroflowCallParameterMapping;
        get containerAsNanoflowCallParameterMapping(): microflows.NanoflowCallParameterMapping;
        get containerAsProxyConfiguration(): microflows.ProxyConfiguration;
        get containerAsRestCallAction(): microflows.RestCallAction;
        get containerAsRuleCallParameterMapping(): microflows.RuleCallParameterMapping;
        get containerAsTemplateArgument(): microflows.TemplateArgument;
        get containerAsWebServiceCallAction(): microflows.WebServiceCallAction;
        get containerAsWebServiceOperationParameterMapping(): microflows.WebServiceOperationParameterMapping;
        get containerAsConditionalSettings(): pages.ConditionalSettings;
        get containerAsWidgetValidation(): pages.WidgetValidation;
        get containerAsConsumedODataService(): rest.ConsumedODataService;
        get value(): enumerations.IEnumerationValue;
        set value(newValue: enumerations.IEnumerationValue);
        get valueQualifiedName(): string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'left' property
         * of the parent BinaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryExpressionUnderLeft(container: BinaryExpression): EnumerationValueRefExpression;
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'right' property
         * of the parent BinaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryExpressionUnderRight(container: BinaryExpression): EnumerationValueRefExpression;
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'arguments' property
         * of the parent FunctionCallExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInFunctionCallExpressionUnderArguments(container: FunctionCallExpression): EnumerationValueRefExpression;
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'condition' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderCondition(container: IfExpression): EnumerationValueRefExpression;
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'ifFalse' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderIfFalse(container: IfExpression): EnumerationValueRefExpression;
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'ifTrue' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderIfTrue(container: IfExpression): EnumerationValueRefExpression;
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'expression' property
         * of the parent ParenthesisExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInParenthesisExpressionUnderExpression(container: ParenthesisExpression): EnumerationValueRefExpression;
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'expression' property
         * of the parent UnaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInUnaryExpressionUnderExpression(container: UnaryExpression): EnumerationValueRefExpression;
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.AppServiceCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceCallParameterMappingUnderArgumentModel(container: microflows.AppServiceCallParameterMapping): EnumerationValueRefExpression;
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.BasicCodeActionParameterValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 to 9.7.0
         */
        static createInBasicCodeActionParameterValueUnderArgumentModel(container: microflows.BasicCodeActionParameterValue): EnumerationValueRefExpression;
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.BasicJavaActionParameterValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 7.20.0
         */
        static createInBasicJavaActionParameterValueUnderArgumentModel(container: microflows.BasicJavaActionParameterValue): EnumerationValueRefExpression;
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.BinaryRequestHandling element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryRequestHandlingUnderExpressionModel(container: microflows.BinaryRequestHandling): EnumerationValueRefExpression;
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.ChangeListAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInChangeListActionUnderValueModel(container: microflows.ChangeListAction): EnumerationValueRefExpression;
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.ChangeVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInChangeVariableActionUnderValueModel(container: microflows.ChangeVariableAction): EnumerationValueRefExpression;
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'initialValueModel' property
         * of the parent microflows.CreateVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCreateVariableActionUnderInitialValueModel(container: microflows.CreateVariableAction): EnumerationValueRefExpression;
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'limitExpressionModel' property
         * of the parent microflows.CustomRange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCustomRangeUnderLimitExpressionModel(container: microflows.CustomRange): EnumerationValueRefExpression;
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'offsetExpressionModel' property
         * of the parent microflows.CustomRange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCustomRangeUnderOffsetExpressionModel(container: microflows.CustomRange): EnumerationValueRefExpression;
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.DocumentTemplateParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInDocumentTemplateParameterMappingUnderArgumentModel(container: microflows.DocumentTemplateParameterMapping): EnumerationValueRefExpression;
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'returnValueModel' property
         * of the parent microflows.EndEvent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInEndEventUnderReturnValueModel(container: microflows.EndEvent): EnumerationValueRefExpression;
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.ExpressionListOperation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.3 to 9.7.0
         */
        static createInExpressionListOperationUnderExpressionModel(container: microflows.ExpressionListOperation): EnumerationValueRefExpression;
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.ExpressionSplitCondition element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInExpressionSplitConditionUnderExpressionModel(container: microflows.ExpressionSplitCondition): EnumerationValueRefExpression;
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.FormDataPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 to 9.7.0
         */
        static createInFormDataPartUnderValueModel(container: microflows.FormDataPart): EnumerationValueRefExpression;
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'marginBottomInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginBottomInInchModel(container: microflows.GenerateDocumentAction): EnumerationValueRefExpression;
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'marginLeftInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginLeftInInchModel(container: microflows.GenerateDocumentAction): EnumerationValueRefExpression;
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'marginRightInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginRightInInchModel(container: microflows.GenerateDocumentAction): EnumerationValueRefExpression;
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'marginTopInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginTopInInchModel(container: microflows.GenerateDocumentAction): EnumerationValueRefExpression;
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'customLocationModel' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderCustomLocationModel(container: microflows.HttpConfiguration): EnumerationValueRefExpression;
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'password' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderPassword(container: microflows.HttpConfiguration): EnumerationValueRefExpression;
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'username' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderUsername(container: microflows.HttpConfiguration): EnumerationValueRefExpression;
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.HttpHeaderEntry element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpHeaderEntryUnderValueModel(container: microflows.HttpHeaderEntry): EnumerationValueRefExpression;
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.InspectAttribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInInspectAttributeUnderExpressionModel(container: microflows.InspectAttribute): EnumerationValueRefExpression;
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'nodeModel' property
         * of the parent microflows.LogMessageAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInLogMessageActionUnderNodeModel(container: microflows.LogMessageAction): EnumerationValueRefExpression;
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.MemberChange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInMemberChangeUnderValueModel(container: microflows.MemberChange): EnumerationValueRefExpression;
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.MicroflowCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInMicroflowCallParameterMappingUnderArgumentModel(container: microflows.MicroflowCallParameterMapping): EnumerationValueRefExpression;
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.NanoflowCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 to 9.7.0
         */
        static createInNanoflowCallParameterMappingUnderArgumentModel(container: microflows.NanoflowCallParameterMapping): EnumerationValueRefExpression;
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'hostExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderHostExpressionModel(container: microflows.ProxyConfiguration): EnumerationValueRefExpression;
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'passwordExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderPasswordExpressionModel(container: microflows.ProxyConfiguration): EnumerationValueRefExpression;
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'portExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderPortExpressionModel(container: microflows.ProxyConfiguration): EnumerationValueRefExpression;
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'useConfigurationExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderUseConfigurationExpressionModel(container: microflows.ProxyConfiguration): EnumerationValueRefExpression;
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'usernameExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderUsernameExpressionModel(container: microflows.ProxyConfiguration): EnumerationValueRefExpression;
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'timeOutModel' property
         * of the parent microflows.RestCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInRestCallActionUnderTimeOutModel(container: microflows.RestCallAction): EnumerationValueRefExpression;
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.RuleCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInRuleCallParameterMappingUnderArgumentModel(container: microflows.RuleCallParameterMapping): EnumerationValueRefExpression;
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.TemplateArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInTemplateArgumentUnderExpressionModel(container: microflows.TemplateArgument): EnumerationValueRefExpression;
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'timeOutModel' property
         * of the parent microflows.WebServiceCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInWebServiceCallActionUnderTimeOutModel(container: microflows.WebServiceCallAction): EnumerationValueRefExpression;
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.WebServiceOperationParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInWebServiceOperationParameterMappingUnderArgumentModel(container: microflows.WebServiceOperationParameterMapping): EnumerationValueRefExpression;
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'expressionModel' property
         * of the parent pages.ConditionalSettings element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInConditionalSettingsUnderExpressionModel(container: pages.ConditionalSettings): EnumerationValueRefExpression;
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'expressionModel' property
         * of the parent pages.WidgetValidation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInWidgetValidationUnderExpressionModel(container: pages.WidgetValidation): EnumerationValueRefExpression;
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'timeoutModel' property
         * of the parent rest.ConsumedODataService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.5.0 to 9.7.0
         */
        static createInConsumedODataServiceUnderTimeoutModel(container: rest.ConsumedODataService): EnumerationValueRefExpression;
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): EnumerationValueRefExpression;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.8.0: deleted
     * In version 7.9.0: introduced
     */
    class FloatLiteral extends LiteralExpression {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsBinaryExpression(): BinaryExpression;
        get containerAsFunctionCallExpression(): FunctionCallExpression;
        get containerAsIfExpression(): IfExpression;
        get containerAsParenthesisExpression(): ParenthesisExpression;
        get containerAsUnaryExpression(): UnaryExpression;
        get containerAsAppServiceCallParameterMapping(): microflows.AppServiceCallParameterMapping;
        get containerAsBasicCodeActionParameterValue(): microflows.BasicCodeActionParameterValue;
        get containerAsBasicJavaActionParameterValue(): microflows.BasicJavaActionParameterValue;
        get containerAsBinaryRequestHandling(): microflows.BinaryRequestHandling;
        get containerAsChangeListAction(): microflows.ChangeListAction;
        get containerAsChangeVariableAction(): microflows.ChangeVariableAction;
        get containerAsCreateVariableAction(): microflows.CreateVariableAction;
        get containerAsCustomRange(): microflows.CustomRange;
        get containerAsDocumentTemplateParameterMapping(): microflows.DocumentTemplateParameterMapping;
        get containerAsEndEvent(): microflows.EndEvent;
        get containerAsExpressionListOperation(): microflows.ExpressionListOperation;
        get containerAsExpressionSplitCondition(): microflows.ExpressionSplitCondition;
        get containerAsFormDataPart(): microflows.FormDataPart;
        get containerAsGenerateDocumentAction(): microflows.GenerateDocumentAction;
        get containerAsHttpConfiguration(): microflows.HttpConfiguration;
        get containerAsHttpHeaderEntry(): microflows.HttpHeaderEntry;
        get containerAsInspectAttribute(): microflows.InspectAttribute;
        get containerAsLogMessageAction(): microflows.LogMessageAction;
        get containerAsMemberChange(): microflows.MemberChange;
        get containerAsMicroflowCallParameterMapping(): microflows.MicroflowCallParameterMapping;
        get containerAsNanoflowCallParameterMapping(): microflows.NanoflowCallParameterMapping;
        get containerAsProxyConfiguration(): microflows.ProxyConfiguration;
        get containerAsRestCallAction(): microflows.RestCallAction;
        get containerAsRuleCallParameterMapping(): microflows.RuleCallParameterMapping;
        get containerAsTemplateArgument(): microflows.TemplateArgument;
        get containerAsWebServiceCallAction(): microflows.WebServiceCallAction;
        get containerAsWebServiceOperationParameterMapping(): microflows.WebServiceOperationParameterMapping;
        get containerAsConditionalSettings(): pages.ConditionalSettings;
        get containerAsWidgetValidation(): pages.WidgetValidation;
        get containerAsConsumedODataService(): rest.ConsumedODataService;
        get value(): number;
        set value(newValue: number);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'left' property
         * of the parent BinaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryExpressionUnderLeft(container: BinaryExpression): FloatLiteral;
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'right' property
         * of the parent BinaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryExpressionUnderRight(container: BinaryExpression): FloatLiteral;
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'arguments' property
         * of the parent FunctionCallExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInFunctionCallExpressionUnderArguments(container: FunctionCallExpression): FloatLiteral;
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'condition' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderCondition(container: IfExpression): FloatLiteral;
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'ifFalse' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderIfFalse(container: IfExpression): FloatLiteral;
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'ifTrue' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderIfTrue(container: IfExpression): FloatLiteral;
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'expression' property
         * of the parent ParenthesisExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInParenthesisExpressionUnderExpression(container: ParenthesisExpression): FloatLiteral;
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'expression' property
         * of the parent UnaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInUnaryExpressionUnderExpression(container: UnaryExpression): FloatLiteral;
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.AppServiceCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceCallParameterMappingUnderArgumentModel(container: microflows.AppServiceCallParameterMapping): FloatLiteral;
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.BasicCodeActionParameterValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 to 9.7.0
         */
        static createInBasicCodeActionParameterValueUnderArgumentModel(container: microflows.BasicCodeActionParameterValue): FloatLiteral;
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.BasicJavaActionParameterValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 7.20.0
         */
        static createInBasicJavaActionParameterValueUnderArgumentModel(container: microflows.BasicJavaActionParameterValue): FloatLiteral;
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'expressionModel' property
         * of the parent microflows.BinaryRequestHandling element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryRequestHandlingUnderExpressionModel(container: microflows.BinaryRequestHandling): FloatLiteral;
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'valueModel' property
         * of the parent microflows.ChangeListAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInChangeListActionUnderValueModel(container: microflows.ChangeListAction): FloatLiteral;
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'valueModel' property
         * of the parent microflows.ChangeVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInChangeVariableActionUnderValueModel(container: microflows.ChangeVariableAction): FloatLiteral;
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'initialValueModel' property
         * of the parent microflows.CreateVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCreateVariableActionUnderInitialValueModel(container: microflows.CreateVariableAction): FloatLiteral;
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'limitExpressionModel' property
         * of the parent microflows.CustomRange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCustomRangeUnderLimitExpressionModel(container: microflows.CustomRange): FloatLiteral;
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'offsetExpressionModel' property
         * of the parent microflows.CustomRange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCustomRangeUnderOffsetExpressionModel(container: microflows.CustomRange): FloatLiteral;
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.DocumentTemplateParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInDocumentTemplateParameterMappingUnderArgumentModel(container: microflows.DocumentTemplateParameterMapping): FloatLiteral;
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'returnValueModel' property
         * of the parent microflows.EndEvent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInEndEventUnderReturnValueModel(container: microflows.EndEvent): FloatLiteral;
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'expressionModel' property
         * of the parent microflows.ExpressionListOperation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.3 to 9.7.0
         */
        static createInExpressionListOperationUnderExpressionModel(container: microflows.ExpressionListOperation): FloatLiteral;
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'expressionModel' property
         * of the parent microflows.ExpressionSplitCondition element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInExpressionSplitConditionUnderExpressionModel(container: microflows.ExpressionSplitCondition): FloatLiteral;
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'valueModel' property
         * of the parent microflows.FormDataPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 to 9.7.0
         */
        static createInFormDataPartUnderValueModel(container: microflows.FormDataPart): FloatLiteral;
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'marginBottomInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginBottomInInchModel(container: microflows.GenerateDocumentAction): FloatLiteral;
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'marginLeftInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginLeftInInchModel(container: microflows.GenerateDocumentAction): FloatLiteral;
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'marginRightInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginRightInInchModel(container: microflows.GenerateDocumentAction): FloatLiteral;
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'marginTopInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginTopInInchModel(container: microflows.GenerateDocumentAction): FloatLiteral;
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'customLocationModel' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderCustomLocationModel(container: microflows.HttpConfiguration): FloatLiteral;
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'password' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderPassword(container: microflows.HttpConfiguration): FloatLiteral;
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'username' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderUsername(container: microflows.HttpConfiguration): FloatLiteral;
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'valueModel' property
         * of the parent microflows.HttpHeaderEntry element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpHeaderEntryUnderValueModel(container: microflows.HttpHeaderEntry): FloatLiteral;
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'expressionModel' property
         * of the parent microflows.InspectAttribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInInspectAttributeUnderExpressionModel(container: microflows.InspectAttribute): FloatLiteral;
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'nodeModel' property
         * of the parent microflows.LogMessageAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInLogMessageActionUnderNodeModel(container: microflows.LogMessageAction): FloatLiteral;
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'valueModel' property
         * of the parent microflows.MemberChange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInMemberChangeUnderValueModel(container: microflows.MemberChange): FloatLiteral;
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.MicroflowCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInMicroflowCallParameterMappingUnderArgumentModel(container: microflows.MicroflowCallParameterMapping): FloatLiteral;
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.NanoflowCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 to 9.7.0
         */
        static createInNanoflowCallParameterMappingUnderArgumentModel(container: microflows.NanoflowCallParameterMapping): FloatLiteral;
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'hostExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderHostExpressionModel(container: microflows.ProxyConfiguration): FloatLiteral;
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'passwordExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderPasswordExpressionModel(container: microflows.ProxyConfiguration): FloatLiteral;
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'portExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderPortExpressionModel(container: microflows.ProxyConfiguration): FloatLiteral;
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'useConfigurationExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderUseConfigurationExpressionModel(container: microflows.ProxyConfiguration): FloatLiteral;
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'usernameExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderUsernameExpressionModel(container: microflows.ProxyConfiguration): FloatLiteral;
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'timeOutModel' property
         * of the parent microflows.RestCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInRestCallActionUnderTimeOutModel(container: microflows.RestCallAction): FloatLiteral;
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.RuleCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInRuleCallParameterMappingUnderArgumentModel(container: microflows.RuleCallParameterMapping): FloatLiteral;
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'expressionModel' property
         * of the parent microflows.TemplateArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInTemplateArgumentUnderExpressionModel(container: microflows.TemplateArgument): FloatLiteral;
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'timeOutModel' property
         * of the parent microflows.WebServiceCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInWebServiceCallActionUnderTimeOutModel(container: microflows.WebServiceCallAction): FloatLiteral;
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.WebServiceOperationParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInWebServiceOperationParameterMappingUnderArgumentModel(container: microflows.WebServiceOperationParameterMapping): FloatLiteral;
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'expressionModel' property
         * of the parent pages.ConditionalSettings element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInConditionalSettingsUnderExpressionModel(container: pages.ConditionalSettings): FloatLiteral;
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'expressionModel' property
         * of the parent pages.WidgetValidation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInWidgetValidationUnderExpressionModel(container: pages.WidgetValidation): FloatLiteral;
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'timeoutModel' property
         * of the parent rest.ConsumedODataService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.5.0 to 9.7.0
         */
        static createInConsumedODataServiceUnderTimeoutModel(container: rest.ConsumedODataService): FloatLiteral;
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): FloatLiteral;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.8.0: deleted
     * In version 7.9.0: introduced
     */
    class FunctionCallExpression extends Expression {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsBinaryExpression(): BinaryExpression;
        get containerAsFunctionCallExpression(): FunctionCallExpression;
        get containerAsIfExpression(): IfExpression;
        get containerAsParenthesisExpression(): ParenthesisExpression;
        get containerAsUnaryExpression(): UnaryExpression;
        get containerAsAppServiceCallParameterMapping(): microflows.AppServiceCallParameterMapping;
        get containerAsBasicCodeActionParameterValue(): microflows.BasicCodeActionParameterValue;
        get containerAsBasicJavaActionParameterValue(): microflows.BasicJavaActionParameterValue;
        get containerAsBinaryRequestHandling(): microflows.BinaryRequestHandling;
        get containerAsChangeListAction(): microflows.ChangeListAction;
        get containerAsChangeVariableAction(): microflows.ChangeVariableAction;
        get containerAsCreateVariableAction(): microflows.CreateVariableAction;
        get containerAsCustomRange(): microflows.CustomRange;
        get containerAsDocumentTemplateParameterMapping(): microflows.DocumentTemplateParameterMapping;
        get containerAsEndEvent(): microflows.EndEvent;
        get containerAsExpressionListOperation(): microflows.ExpressionListOperation;
        get containerAsExpressionSplitCondition(): microflows.ExpressionSplitCondition;
        get containerAsFormDataPart(): microflows.FormDataPart;
        get containerAsGenerateDocumentAction(): microflows.GenerateDocumentAction;
        get containerAsHttpConfiguration(): microflows.HttpConfiguration;
        get containerAsHttpHeaderEntry(): microflows.HttpHeaderEntry;
        get containerAsInspectAttribute(): microflows.InspectAttribute;
        get containerAsLogMessageAction(): microflows.LogMessageAction;
        get containerAsMemberChange(): microflows.MemberChange;
        get containerAsMicroflowCallParameterMapping(): microflows.MicroflowCallParameterMapping;
        get containerAsNanoflowCallParameterMapping(): microflows.NanoflowCallParameterMapping;
        get containerAsProxyConfiguration(): microflows.ProxyConfiguration;
        get containerAsRestCallAction(): microflows.RestCallAction;
        get containerAsRuleCallParameterMapping(): microflows.RuleCallParameterMapping;
        get containerAsTemplateArgument(): microflows.TemplateArgument;
        get containerAsWebServiceCallAction(): microflows.WebServiceCallAction;
        get containerAsWebServiceOperationParameterMapping(): microflows.WebServiceOperationParameterMapping;
        get containerAsConditionalSettings(): pages.ConditionalSettings;
        get containerAsWidgetValidation(): pages.WidgetValidation;
        get containerAsConsumedODataService(): rest.ConsumedODataService;
        get functionName(): string;
        set functionName(newValue: string);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get arguments(): internal.IList<Expression>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'left' property
         * of the parent BinaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryExpressionUnderLeft(container: BinaryExpression): FunctionCallExpression;
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'right' property
         * of the parent BinaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryExpressionUnderRight(container: BinaryExpression): FunctionCallExpression;
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'arguments' property
         * of the parent FunctionCallExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInFunctionCallExpressionUnderArguments(container: FunctionCallExpression): FunctionCallExpression;
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'condition' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderCondition(container: IfExpression): FunctionCallExpression;
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'ifFalse' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderIfFalse(container: IfExpression): FunctionCallExpression;
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'ifTrue' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderIfTrue(container: IfExpression): FunctionCallExpression;
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'expression' property
         * of the parent ParenthesisExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInParenthesisExpressionUnderExpression(container: ParenthesisExpression): FunctionCallExpression;
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'expression' property
         * of the parent UnaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInUnaryExpressionUnderExpression(container: UnaryExpression): FunctionCallExpression;
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.AppServiceCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceCallParameterMappingUnderArgumentModel(container: microflows.AppServiceCallParameterMapping): FunctionCallExpression;
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.BasicCodeActionParameterValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 to 9.7.0
         */
        static createInBasicCodeActionParameterValueUnderArgumentModel(container: microflows.BasicCodeActionParameterValue): FunctionCallExpression;
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.BasicJavaActionParameterValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 7.20.0
         */
        static createInBasicJavaActionParameterValueUnderArgumentModel(container: microflows.BasicJavaActionParameterValue): FunctionCallExpression;
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.BinaryRequestHandling element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryRequestHandlingUnderExpressionModel(container: microflows.BinaryRequestHandling): FunctionCallExpression;
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.ChangeListAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInChangeListActionUnderValueModel(container: microflows.ChangeListAction): FunctionCallExpression;
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.ChangeVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInChangeVariableActionUnderValueModel(container: microflows.ChangeVariableAction): FunctionCallExpression;
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'initialValueModel' property
         * of the parent microflows.CreateVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCreateVariableActionUnderInitialValueModel(container: microflows.CreateVariableAction): FunctionCallExpression;
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'limitExpressionModel' property
         * of the parent microflows.CustomRange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCustomRangeUnderLimitExpressionModel(container: microflows.CustomRange): FunctionCallExpression;
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'offsetExpressionModel' property
         * of the parent microflows.CustomRange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCustomRangeUnderOffsetExpressionModel(container: microflows.CustomRange): FunctionCallExpression;
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.DocumentTemplateParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInDocumentTemplateParameterMappingUnderArgumentModel(container: microflows.DocumentTemplateParameterMapping): FunctionCallExpression;
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'returnValueModel' property
         * of the parent microflows.EndEvent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInEndEventUnderReturnValueModel(container: microflows.EndEvent): FunctionCallExpression;
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.ExpressionListOperation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.3 to 9.7.0
         */
        static createInExpressionListOperationUnderExpressionModel(container: microflows.ExpressionListOperation): FunctionCallExpression;
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.ExpressionSplitCondition element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInExpressionSplitConditionUnderExpressionModel(container: microflows.ExpressionSplitCondition): FunctionCallExpression;
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.FormDataPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 to 9.7.0
         */
        static createInFormDataPartUnderValueModel(container: microflows.FormDataPart): FunctionCallExpression;
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'marginBottomInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginBottomInInchModel(container: microflows.GenerateDocumentAction): FunctionCallExpression;
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'marginLeftInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginLeftInInchModel(container: microflows.GenerateDocumentAction): FunctionCallExpression;
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'marginRightInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginRightInInchModel(container: microflows.GenerateDocumentAction): FunctionCallExpression;
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'marginTopInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginTopInInchModel(container: microflows.GenerateDocumentAction): FunctionCallExpression;
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'customLocationModel' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderCustomLocationModel(container: microflows.HttpConfiguration): FunctionCallExpression;
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'password' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderPassword(container: microflows.HttpConfiguration): FunctionCallExpression;
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'username' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderUsername(container: microflows.HttpConfiguration): FunctionCallExpression;
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.HttpHeaderEntry element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpHeaderEntryUnderValueModel(container: microflows.HttpHeaderEntry): FunctionCallExpression;
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.InspectAttribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInInspectAttributeUnderExpressionModel(container: microflows.InspectAttribute): FunctionCallExpression;
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'nodeModel' property
         * of the parent microflows.LogMessageAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInLogMessageActionUnderNodeModel(container: microflows.LogMessageAction): FunctionCallExpression;
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.MemberChange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInMemberChangeUnderValueModel(container: microflows.MemberChange): FunctionCallExpression;
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.MicroflowCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInMicroflowCallParameterMappingUnderArgumentModel(container: microflows.MicroflowCallParameterMapping): FunctionCallExpression;
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.NanoflowCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 to 9.7.0
         */
        static createInNanoflowCallParameterMappingUnderArgumentModel(container: microflows.NanoflowCallParameterMapping): FunctionCallExpression;
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'hostExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderHostExpressionModel(container: microflows.ProxyConfiguration): FunctionCallExpression;
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'passwordExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderPasswordExpressionModel(container: microflows.ProxyConfiguration): FunctionCallExpression;
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'portExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderPortExpressionModel(container: microflows.ProxyConfiguration): FunctionCallExpression;
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'useConfigurationExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderUseConfigurationExpressionModel(container: microflows.ProxyConfiguration): FunctionCallExpression;
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'usernameExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderUsernameExpressionModel(container: microflows.ProxyConfiguration): FunctionCallExpression;
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'timeOutModel' property
         * of the parent microflows.RestCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInRestCallActionUnderTimeOutModel(container: microflows.RestCallAction): FunctionCallExpression;
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.RuleCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInRuleCallParameterMappingUnderArgumentModel(container: microflows.RuleCallParameterMapping): FunctionCallExpression;
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.TemplateArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInTemplateArgumentUnderExpressionModel(container: microflows.TemplateArgument): FunctionCallExpression;
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'timeOutModel' property
         * of the parent microflows.WebServiceCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInWebServiceCallActionUnderTimeOutModel(container: microflows.WebServiceCallAction): FunctionCallExpression;
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.WebServiceOperationParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInWebServiceOperationParameterMappingUnderArgumentModel(container: microflows.WebServiceOperationParameterMapping): FunctionCallExpression;
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'expressionModel' property
         * of the parent pages.ConditionalSettings element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInConditionalSettingsUnderExpressionModel(container: pages.ConditionalSettings): FunctionCallExpression;
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'expressionModel' property
         * of the parent pages.WidgetValidation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInWidgetValidationUnderExpressionModel(container: pages.WidgetValidation): FunctionCallExpression;
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'timeoutModel' property
         * of the parent rest.ConsumedODataService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.5.0 to 9.7.0
         */
        static createInConsumedODataServiceUnderTimeoutModel(container: rest.ConsumedODataService): FunctionCallExpression;
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): FunctionCallExpression;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.8.0: deleted
     * In version 7.9.0: introduced
     */
    abstract class VariableRef extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsVariableRefExpression(): VariableRefExpression;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.8.0: deleted
     * In version 7.9.0: introduced
     */
    class GlobalVariableRef extends VariableRef {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsVariableRefExpression(): VariableRefExpression;
        get referredName(): string;
        set referredName(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new GlobalVariableRef instance in the SDK and on the server.
         * The new GlobalVariableRef will be automatically stored in the 'variable' property
         * of the parent VariableRefExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createIn(container: VariableRefExpression): GlobalVariableRef;
        /**
         * Creates and returns a new GlobalVariableRef instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): GlobalVariableRef;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.8.0: deleted
     * In version 7.9.0: introduced
     */
    class IfExpression extends Expression {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsBinaryExpression(): BinaryExpression;
        get containerAsFunctionCallExpression(): FunctionCallExpression;
        get containerAsIfExpression(): IfExpression;
        get containerAsParenthesisExpression(): ParenthesisExpression;
        get containerAsUnaryExpression(): UnaryExpression;
        get containerAsAppServiceCallParameterMapping(): microflows.AppServiceCallParameterMapping;
        get containerAsBasicCodeActionParameterValue(): microflows.BasicCodeActionParameterValue;
        get containerAsBasicJavaActionParameterValue(): microflows.BasicJavaActionParameterValue;
        get containerAsBinaryRequestHandling(): microflows.BinaryRequestHandling;
        get containerAsChangeListAction(): microflows.ChangeListAction;
        get containerAsChangeVariableAction(): microflows.ChangeVariableAction;
        get containerAsCreateVariableAction(): microflows.CreateVariableAction;
        get containerAsCustomRange(): microflows.CustomRange;
        get containerAsDocumentTemplateParameterMapping(): microflows.DocumentTemplateParameterMapping;
        get containerAsEndEvent(): microflows.EndEvent;
        get containerAsExpressionListOperation(): microflows.ExpressionListOperation;
        get containerAsExpressionSplitCondition(): microflows.ExpressionSplitCondition;
        get containerAsFormDataPart(): microflows.FormDataPart;
        get containerAsGenerateDocumentAction(): microflows.GenerateDocumentAction;
        get containerAsHttpConfiguration(): microflows.HttpConfiguration;
        get containerAsHttpHeaderEntry(): microflows.HttpHeaderEntry;
        get containerAsInspectAttribute(): microflows.InspectAttribute;
        get containerAsLogMessageAction(): microflows.LogMessageAction;
        get containerAsMemberChange(): microflows.MemberChange;
        get containerAsMicroflowCallParameterMapping(): microflows.MicroflowCallParameterMapping;
        get containerAsNanoflowCallParameterMapping(): microflows.NanoflowCallParameterMapping;
        get containerAsProxyConfiguration(): microflows.ProxyConfiguration;
        get containerAsRestCallAction(): microflows.RestCallAction;
        get containerAsRuleCallParameterMapping(): microflows.RuleCallParameterMapping;
        get containerAsTemplateArgument(): microflows.TemplateArgument;
        get containerAsWebServiceCallAction(): microflows.WebServiceCallAction;
        get containerAsWebServiceOperationParameterMapping(): microflows.WebServiceOperationParameterMapping;
        get containerAsConditionalSettings(): pages.ConditionalSettings;
        get containerAsWidgetValidation(): pages.WidgetValidation;
        get containerAsConsumedODataService(): rest.ConsumedODataService;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get condition(): Expression;
        set condition(newValue: Expression);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get ifTrue(): Expression;
        set ifTrue(newValue: Expression);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get ifFalse(): Expression;
        set ifFalse(newValue: Expression);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'left' property
         * of the parent BinaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryExpressionUnderLeft(container: BinaryExpression): IfExpression;
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'right' property
         * of the parent BinaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryExpressionUnderRight(container: BinaryExpression): IfExpression;
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'arguments' property
         * of the parent FunctionCallExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInFunctionCallExpressionUnderArguments(container: FunctionCallExpression): IfExpression;
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'condition' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderCondition(container: IfExpression): IfExpression;
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'ifFalse' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderIfFalse(container: IfExpression): IfExpression;
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'ifTrue' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderIfTrue(container: IfExpression): IfExpression;
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'expression' property
         * of the parent ParenthesisExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInParenthesisExpressionUnderExpression(container: ParenthesisExpression): IfExpression;
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'expression' property
         * of the parent UnaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInUnaryExpressionUnderExpression(container: UnaryExpression): IfExpression;
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.AppServiceCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceCallParameterMappingUnderArgumentModel(container: microflows.AppServiceCallParameterMapping): IfExpression;
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.BasicCodeActionParameterValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 to 9.7.0
         */
        static createInBasicCodeActionParameterValueUnderArgumentModel(container: microflows.BasicCodeActionParameterValue): IfExpression;
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.BasicJavaActionParameterValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 7.20.0
         */
        static createInBasicJavaActionParameterValueUnderArgumentModel(container: microflows.BasicJavaActionParameterValue): IfExpression;
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.BinaryRequestHandling element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryRequestHandlingUnderExpressionModel(container: microflows.BinaryRequestHandling): IfExpression;
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.ChangeListAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInChangeListActionUnderValueModel(container: microflows.ChangeListAction): IfExpression;
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.ChangeVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInChangeVariableActionUnderValueModel(container: microflows.ChangeVariableAction): IfExpression;
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'initialValueModel' property
         * of the parent microflows.CreateVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCreateVariableActionUnderInitialValueModel(container: microflows.CreateVariableAction): IfExpression;
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'limitExpressionModel' property
         * of the parent microflows.CustomRange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCustomRangeUnderLimitExpressionModel(container: microflows.CustomRange): IfExpression;
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'offsetExpressionModel' property
         * of the parent microflows.CustomRange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCustomRangeUnderOffsetExpressionModel(container: microflows.CustomRange): IfExpression;
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.DocumentTemplateParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInDocumentTemplateParameterMappingUnderArgumentModel(container: microflows.DocumentTemplateParameterMapping): IfExpression;
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'returnValueModel' property
         * of the parent microflows.EndEvent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInEndEventUnderReturnValueModel(container: microflows.EndEvent): IfExpression;
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.ExpressionListOperation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.3 to 9.7.0
         */
        static createInExpressionListOperationUnderExpressionModel(container: microflows.ExpressionListOperation): IfExpression;
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.ExpressionSplitCondition element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInExpressionSplitConditionUnderExpressionModel(container: microflows.ExpressionSplitCondition): IfExpression;
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.FormDataPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 to 9.7.0
         */
        static createInFormDataPartUnderValueModel(container: microflows.FormDataPart): IfExpression;
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'marginBottomInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginBottomInInchModel(container: microflows.GenerateDocumentAction): IfExpression;
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'marginLeftInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginLeftInInchModel(container: microflows.GenerateDocumentAction): IfExpression;
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'marginRightInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginRightInInchModel(container: microflows.GenerateDocumentAction): IfExpression;
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'marginTopInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginTopInInchModel(container: microflows.GenerateDocumentAction): IfExpression;
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'customLocationModel' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderCustomLocationModel(container: microflows.HttpConfiguration): IfExpression;
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'password' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderPassword(container: microflows.HttpConfiguration): IfExpression;
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'username' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderUsername(container: microflows.HttpConfiguration): IfExpression;
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.HttpHeaderEntry element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpHeaderEntryUnderValueModel(container: microflows.HttpHeaderEntry): IfExpression;
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.InspectAttribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInInspectAttributeUnderExpressionModel(container: microflows.InspectAttribute): IfExpression;
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'nodeModel' property
         * of the parent microflows.LogMessageAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInLogMessageActionUnderNodeModel(container: microflows.LogMessageAction): IfExpression;
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.MemberChange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInMemberChangeUnderValueModel(container: microflows.MemberChange): IfExpression;
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.MicroflowCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInMicroflowCallParameterMappingUnderArgumentModel(container: microflows.MicroflowCallParameterMapping): IfExpression;
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.NanoflowCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 to 9.7.0
         */
        static createInNanoflowCallParameterMappingUnderArgumentModel(container: microflows.NanoflowCallParameterMapping): IfExpression;
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'hostExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderHostExpressionModel(container: microflows.ProxyConfiguration): IfExpression;
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'passwordExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderPasswordExpressionModel(container: microflows.ProxyConfiguration): IfExpression;
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'portExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderPortExpressionModel(container: microflows.ProxyConfiguration): IfExpression;
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'useConfigurationExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderUseConfigurationExpressionModel(container: microflows.ProxyConfiguration): IfExpression;
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'usernameExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderUsernameExpressionModel(container: microflows.ProxyConfiguration): IfExpression;
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'timeOutModel' property
         * of the parent microflows.RestCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInRestCallActionUnderTimeOutModel(container: microflows.RestCallAction): IfExpression;
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.RuleCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInRuleCallParameterMappingUnderArgumentModel(container: microflows.RuleCallParameterMapping): IfExpression;
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.TemplateArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInTemplateArgumentUnderExpressionModel(container: microflows.TemplateArgument): IfExpression;
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'timeOutModel' property
         * of the parent microflows.WebServiceCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInWebServiceCallActionUnderTimeOutModel(container: microflows.WebServiceCallAction): IfExpression;
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.WebServiceOperationParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInWebServiceOperationParameterMappingUnderArgumentModel(container: microflows.WebServiceOperationParameterMapping): IfExpression;
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'expressionModel' property
         * of the parent pages.ConditionalSettings element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInConditionalSettingsUnderExpressionModel(container: pages.ConditionalSettings): IfExpression;
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'expressionModel' property
         * of the parent pages.WidgetValidation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInWidgetValidationUnderExpressionModel(container: pages.WidgetValidation): IfExpression;
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'timeoutModel' property
         * of the parent rest.ConsumedODataService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.5.0 to 9.7.0
         */
        static createInConsumedODataServiceUnderTimeoutModel(container: rest.ConsumedODataService): IfExpression;
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): IfExpression;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.8.0: deleted
     * In version 7.9.0: introduced
     */
    class IntegerLiteral extends LiteralExpression {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsBinaryExpression(): BinaryExpression;
        get containerAsFunctionCallExpression(): FunctionCallExpression;
        get containerAsIfExpression(): IfExpression;
        get containerAsParenthesisExpression(): ParenthesisExpression;
        get containerAsUnaryExpression(): UnaryExpression;
        get containerAsAppServiceCallParameterMapping(): microflows.AppServiceCallParameterMapping;
        get containerAsBasicCodeActionParameterValue(): microflows.BasicCodeActionParameterValue;
        get containerAsBasicJavaActionParameterValue(): microflows.BasicJavaActionParameterValue;
        get containerAsBinaryRequestHandling(): microflows.BinaryRequestHandling;
        get containerAsChangeListAction(): microflows.ChangeListAction;
        get containerAsChangeVariableAction(): microflows.ChangeVariableAction;
        get containerAsCreateVariableAction(): microflows.CreateVariableAction;
        get containerAsCustomRange(): microflows.CustomRange;
        get containerAsDocumentTemplateParameterMapping(): microflows.DocumentTemplateParameterMapping;
        get containerAsEndEvent(): microflows.EndEvent;
        get containerAsExpressionListOperation(): microflows.ExpressionListOperation;
        get containerAsExpressionSplitCondition(): microflows.ExpressionSplitCondition;
        get containerAsFormDataPart(): microflows.FormDataPart;
        get containerAsGenerateDocumentAction(): microflows.GenerateDocumentAction;
        get containerAsHttpConfiguration(): microflows.HttpConfiguration;
        get containerAsHttpHeaderEntry(): microflows.HttpHeaderEntry;
        get containerAsInspectAttribute(): microflows.InspectAttribute;
        get containerAsLogMessageAction(): microflows.LogMessageAction;
        get containerAsMemberChange(): microflows.MemberChange;
        get containerAsMicroflowCallParameterMapping(): microflows.MicroflowCallParameterMapping;
        get containerAsNanoflowCallParameterMapping(): microflows.NanoflowCallParameterMapping;
        get containerAsProxyConfiguration(): microflows.ProxyConfiguration;
        get containerAsRestCallAction(): microflows.RestCallAction;
        get containerAsRuleCallParameterMapping(): microflows.RuleCallParameterMapping;
        get containerAsTemplateArgument(): microflows.TemplateArgument;
        get containerAsWebServiceCallAction(): microflows.WebServiceCallAction;
        get containerAsWebServiceOperationParameterMapping(): microflows.WebServiceOperationParameterMapping;
        get containerAsConditionalSettings(): pages.ConditionalSettings;
        get containerAsWidgetValidation(): pages.WidgetValidation;
        get containerAsConsumedODataService(): rest.ConsumedODataService;
        get value(): number;
        set value(newValue: number);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'left' property
         * of the parent BinaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryExpressionUnderLeft(container: BinaryExpression): IntegerLiteral;
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'right' property
         * of the parent BinaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryExpressionUnderRight(container: BinaryExpression): IntegerLiteral;
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'arguments' property
         * of the parent FunctionCallExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInFunctionCallExpressionUnderArguments(container: FunctionCallExpression): IntegerLiteral;
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'condition' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderCondition(container: IfExpression): IntegerLiteral;
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'ifFalse' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderIfFalse(container: IfExpression): IntegerLiteral;
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'ifTrue' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderIfTrue(container: IfExpression): IntegerLiteral;
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'expression' property
         * of the parent ParenthesisExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInParenthesisExpressionUnderExpression(container: ParenthesisExpression): IntegerLiteral;
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'expression' property
         * of the parent UnaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInUnaryExpressionUnderExpression(container: UnaryExpression): IntegerLiteral;
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.AppServiceCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceCallParameterMappingUnderArgumentModel(container: microflows.AppServiceCallParameterMapping): IntegerLiteral;
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.BasicCodeActionParameterValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 to 9.7.0
         */
        static createInBasicCodeActionParameterValueUnderArgumentModel(container: microflows.BasicCodeActionParameterValue): IntegerLiteral;
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.BasicJavaActionParameterValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 7.20.0
         */
        static createInBasicJavaActionParameterValueUnderArgumentModel(container: microflows.BasicJavaActionParameterValue): IntegerLiteral;
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'expressionModel' property
         * of the parent microflows.BinaryRequestHandling element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryRequestHandlingUnderExpressionModel(container: microflows.BinaryRequestHandling): IntegerLiteral;
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'valueModel' property
         * of the parent microflows.ChangeListAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInChangeListActionUnderValueModel(container: microflows.ChangeListAction): IntegerLiteral;
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'valueModel' property
         * of the parent microflows.ChangeVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInChangeVariableActionUnderValueModel(container: microflows.ChangeVariableAction): IntegerLiteral;
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'initialValueModel' property
         * of the parent microflows.CreateVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCreateVariableActionUnderInitialValueModel(container: microflows.CreateVariableAction): IntegerLiteral;
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'limitExpressionModel' property
         * of the parent microflows.CustomRange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCustomRangeUnderLimitExpressionModel(container: microflows.CustomRange): IntegerLiteral;
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'offsetExpressionModel' property
         * of the parent microflows.CustomRange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCustomRangeUnderOffsetExpressionModel(container: microflows.CustomRange): IntegerLiteral;
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.DocumentTemplateParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInDocumentTemplateParameterMappingUnderArgumentModel(container: microflows.DocumentTemplateParameterMapping): IntegerLiteral;
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'returnValueModel' property
         * of the parent microflows.EndEvent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInEndEventUnderReturnValueModel(container: microflows.EndEvent): IntegerLiteral;
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'expressionModel' property
         * of the parent microflows.ExpressionListOperation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.3 to 9.7.0
         */
        static createInExpressionListOperationUnderExpressionModel(container: microflows.ExpressionListOperation): IntegerLiteral;
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'expressionModel' property
         * of the parent microflows.ExpressionSplitCondition element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInExpressionSplitConditionUnderExpressionModel(container: microflows.ExpressionSplitCondition): IntegerLiteral;
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'valueModel' property
         * of the parent microflows.FormDataPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 to 9.7.0
         */
        static createInFormDataPartUnderValueModel(container: microflows.FormDataPart): IntegerLiteral;
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'marginBottomInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginBottomInInchModel(container: microflows.GenerateDocumentAction): IntegerLiteral;
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'marginLeftInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginLeftInInchModel(container: microflows.GenerateDocumentAction): IntegerLiteral;
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'marginRightInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginRightInInchModel(container: microflows.GenerateDocumentAction): IntegerLiteral;
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'marginTopInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginTopInInchModel(container: microflows.GenerateDocumentAction): IntegerLiteral;
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'customLocationModel' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderCustomLocationModel(container: microflows.HttpConfiguration): IntegerLiteral;
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'password' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderPassword(container: microflows.HttpConfiguration): IntegerLiteral;
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'username' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderUsername(container: microflows.HttpConfiguration): IntegerLiteral;
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'valueModel' property
         * of the parent microflows.HttpHeaderEntry element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpHeaderEntryUnderValueModel(container: microflows.HttpHeaderEntry): IntegerLiteral;
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'expressionModel' property
         * of the parent microflows.InspectAttribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInInspectAttributeUnderExpressionModel(container: microflows.InspectAttribute): IntegerLiteral;
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'nodeModel' property
         * of the parent microflows.LogMessageAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInLogMessageActionUnderNodeModel(container: microflows.LogMessageAction): IntegerLiteral;
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'valueModel' property
         * of the parent microflows.MemberChange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInMemberChangeUnderValueModel(container: microflows.MemberChange): IntegerLiteral;
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.MicroflowCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInMicroflowCallParameterMappingUnderArgumentModel(container: microflows.MicroflowCallParameterMapping): IntegerLiteral;
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.NanoflowCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 to 9.7.0
         */
        static createInNanoflowCallParameterMappingUnderArgumentModel(container: microflows.NanoflowCallParameterMapping): IntegerLiteral;
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'hostExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderHostExpressionModel(container: microflows.ProxyConfiguration): IntegerLiteral;
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'passwordExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderPasswordExpressionModel(container: microflows.ProxyConfiguration): IntegerLiteral;
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'portExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderPortExpressionModel(container: microflows.ProxyConfiguration): IntegerLiteral;
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'useConfigurationExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderUseConfigurationExpressionModel(container: microflows.ProxyConfiguration): IntegerLiteral;
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'usernameExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderUsernameExpressionModel(container: microflows.ProxyConfiguration): IntegerLiteral;
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'timeOutModel' property
         * of the parent microflows.RestCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInRestCallActionUnderTimeOutModel(container: microflows.RestCallAction): IntegerLiteral;
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.RuleCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInRuleCallParameterMappingUnderArgumentModel(container: microflows.RuleCallParameterMapping): IntegerLiteral;
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'expressionModel' property
         * of the parent microflows.TemplateArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInTemplateArgumentUnderExpressionModel(container: microflows.TemplateArgument): IntegerLiteral;
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'timeOutModel' property
         * of the parent microflows.WebServiceCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInWebServiceCallActionUnderTimeOutModel(container: microflows.WebServiceCallAction): IntegerLiteral;
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.WebServiceOperationParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInWebServiceOperationParameterMappingUnderArgumentModel(container: microflows.WebServiceOperationParameterMapping): IntegerLiteral;
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'expressionModel' property
         * of the parent pages.ConditionalSettings element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInConditionalSettingsUnderExpressionModel(container: pages.ConditionalSettings): IntegerLiteral;
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'expressionModel' property
         * of the parent pages.WidgetValidation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInWidgetValidationUnderExpressionModel(container: pages.WidgetValidation): IntegerLiteral;
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'timeoutModel' property
         * of the parent rest.ConsumedODataService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.5.0 to 9.7.0
         */
        static createInConsumedODataServiceUnderTimeoutModel(container: rest.ConsumedODataService): IntegerLiteral;
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): IntegerLiteral;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.8.0: deleted
     * In version 7.9.0: introduced
     */
    class NoExpression extends Expression {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsBinaryExpression(): BinaryExpression;
        get containerAsFunctionCallExpression(): FunctionCallExpression;
        get containerAsIfExpression(): IfExpression;
        get containerAsParenthesisExpression(): ParenthesisExpression;
        get containerAsUnaryExpression(): UnaryExpression;
        get containerAsAppServiceCallParameterMapping(): microflows.AppServiceCallParameterMapping;
        get containerAsBasicCodeActionParameterValue(): microflows.BasicCodeActionParameterValue;
        get containerAsBasicJavaActionParameterValue(): microflows.BasicJavaActionParameterValue;
        get containerAsBinaryRequestHandling(): microflows.BinaryRequestHandling;
        get containerAsChangeListAction(): microflows.ChangeListAction;
        get containerAsChangeVariableAction(): microflows.ChangeVariableAction;
        get containerAsCreateVariableAction(): microflows.CreateVariableAction;
        get containerAsCustomRange(): microflows.CustomRange;
        get containerAsDocumentTemplateParameterMapping(): microflows.DocumentTemplateParameterMapping;
        get containerAsEndEvent(): microflows.EndEvent;
        get containerAsExpressionListOperation(): microflows.ExpressionListOperation;
        get containerAsExpressionSplitCondition(): microflows.ExpressionSplitCondition;
        get containerAsFormDataPart(): microflows.FormDataPart;
        get containerAsGenerateDocumentAction(): microflows.GenerateDocumentAction;
        get containerAsHttpConfiguration(): microflows.HttpConfiguration;
        get containerAsHttpHeaderEntry(): microflows.HttpHeaderEntry;
        get containerAsInspectAttribute(): microflows.InspectAttribute;
        get containerAsLogMessageAction(): microflows.LogMessageAction;
        get containerAsMemberChange(): microflows.MemberChange;
        get containerAsMicroflowCallParameterMapping(): microflows.MicroflowCallParameterMapping;
        get containerAsNanoflowCallParameterMapping(): microflows.NanoflowCallParameterMapping;
        get containerAsProxyConfiguration(): microflows.ProxyConfiguration;
        get containerAsRestCallAction(): microflows.RestCallAction;
        get containerAsRuleCallParameterMapping(): microflows.RuleCallParameterMapping;
        get containerAsTemplateArgument(): microflows.TemplateArgument;
        get containerAsWebServiceCallAction(): microflows.WebServiceCallAction;
        get containerAsWebServiceOperationParameterMapping(): microflows.WebServiceOperationParameterMapping;
        get containerAsConditionalSettings(): pages.ConditionalSettings;
        get containerAsWidgetValidation(): pages.WidgetValidation;
        get containerAsConsumedODataService(): rest.ConsumedODataService;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'left' property
         * of the parent BinaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryExpressionUnderLeft(container: BinaryExpression): NoExpression;
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'right' property
         * of the parent BinaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryExpressionUnderRight(container: BinaryExpression): NoExpression;
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'arguments' property
         * of the parent FunctionCallExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInFunctionCallExpressionUnderArguments(container: FunctionCallExpression): NoExpression;
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'condition' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderCondition(container: IfExpression): NoExpression;
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'ifFalse' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderIfFalse(container: IfExpression): NoExpression;
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'ifTrue' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderIfTrue(container: IfExpression): NoExpression;
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'expression' property
         * of the parent ParenthesisExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInParenthesisExpressionUnderExpression(container: ParenthesisExpression): NoExpression;
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'expression' property
         * of the parent UnaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInUnaryExpressionUnderExpression(container: UnaryExpression): NoExpression;
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.AppServiceCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceCallParameterMappingUnderArgumentModel(container: microflows.AppServiceCallParameterMapping): NoExpression;
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.BasicCodeActionParameterValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 to 9.7.0
         */
        static createInBasicCodeActionParameterValueUnderArgumentModel(container: microflows.BasicCodeActionParameterValue): NoExpression;
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.BasicJavaActionParameterValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 7.20.0
         */
        static createInBasicJavaActionParameterValueUnderArgumentModel(container: microflows.BasicJavaActionParameterValue): NoExpression;
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.BinaryRequestHandling element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryRequestHandlingUnderExpressionModel(container: microflows.BinaryRequestHandling): NoExpression;
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.ChangeListAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInChangeListActionUnderValueModel(container: microflows.ChangeListAction): NoExpression;
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.ChangeVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInChangeVariableActionUnderValueModel(container: microflows.ChangeVariableAction): NoExpression;
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'initialValueModel' property
         * of the parent microflows.CreateVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCreateVariableActionUnderInitialValueModel(container: microflows.CreateVariableAction): NoExpression;
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'limitExpressionModel' property
         * of the parent microflows.CustomRange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCustomRangeUnderLimitExpressionModel(container: microflows.CustomRange): NoExpression;
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'offsetExpressionModel' property
         * of the parent microflows.CustomRange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCustomRangeUnderOffsetExpressionModel(container: microflows.CustomRange): NoExpression;
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.DocumentTemplateParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInDocumentTemplateParameterMappingUnderArgumentModel(container: microflows.DocumentTemplateParameterMapping): NoExpression;
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'returnValueModel' property
         * of the parent microflows.EndEvent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInEndEventUnderReturnValueModel(container: microflows.EndEvent): NoExpression;
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.ExpressionListOperation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.3 to 9.7.0
         */
        static createInExpressionListOperationUnderExpressionModel(container: microflows.ExpressionListOperation): NoExpression;
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.ExpressionSplitCondition element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInExpressionSplitConditionUnderExpressionModel(container: microflows.ExpressionSplitCondition): NoExpression;
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.FormDataPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 to 9.7.0
         */
        static createInFormDataPartUnderValueModel(container: microflows.FormDataPart): NoExpression;
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'marginBottomInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginBottomInInchModel(container: microflows.GenerateDocumentAction): NoExpression;
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'marginLeftInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginLeftInInchModel(container: microflows.GenerateDocumentAction): NoExpression;
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'marginRightInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginRightInInchModel(container: microflows.GenerateDocumentAction): NoExpression;
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'marginTopInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginTopInInchModel(container: microflows.GenerateDocumentAction): NoExpression;
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'customLocationModel' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderCustomLocationModel(container: microflows.HttpConfiguration): NoExpression;
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'password' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderPassword(container: microflows.HttpConfiguration): NoExpression;
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'username' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderUsername(container: microflows.HttpConfiguration): NoExpression;
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.HttpHeaderEntry element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpHeaderEntryUnderValueModel(container: microflows.HttpHeaderEntry): NoExpression;
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.InspectAttribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInInspectAttributeUnderExpressionModel(container: microflows.InspectAttribute): NoExpression;
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'nodeModel' property
         * of the parent microflows.LogMessageAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInLogMessageActionUnderNodeModel(container: microflows.LogMessageAction): NoExpression;
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.MemberChange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInMemberChangeUnderValueModel(container: microflows.MemberChange): NoExpression;
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.MicroflowCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInMicroflowCallParameterMappingUnderArgumentModel(container: microflows.MicroflowCallParameterMapping): NoExpression;
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.NanoflowCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 to 9.7.0
         */
        static createInNanoflowCallParameterMappingUnderArgumentModel(container: microflows.NanoflowCallParameterMapping): NoExpression;
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'hostExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderHostExpressionModel(container: microflows.ProxyConfiguration): NoExpression;
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'passwordExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderPasswordExpressionModel(container: microflows.ProxyConfiguration): NoExpression;
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'portExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderPortExpressionModel(container: microflows.ProxyConfiguration): NoExpression;
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'useConfigurationExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderUseConfigurationExpressionModel(container: microflows.ProxyConfiguration): NoExpression;
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'usernameExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderUsernameExpressionModel(container: microflows.ProxyConfiguration): NoExpression;
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'timeOutModel' property
         * of the parent microflows.RestCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInRestCallActionUnderTimeOutModel(container: microflows.RestCallAction): NoExpression;
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.RuleCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInRuleCallParameterMappingUnderArgumentModel(container: microflows.RuleCallParameterMapping): NoExpression;
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.TemplateArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInTemplateArgumentUnderExpressionModel(container: microflows.TemplateArgument): NoExpression;
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'timeOutModel' property
         * of the parent microflows.WebServiceCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInWebServiceCallActionUnderTimeOutModel(container: microflows.WebServiceCallAction): NoExpression;
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.WebServiceOperationParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInWebServiceOperationParameterMappingUnderArgumentModel(container: microflows.WebServiceOperationParameterMapping): NoExpression;
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'expressionModel' property
         * of the parent pages.ConditionalSettings element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInConditionalSettingsUnderExpressionModel(container: pages.ConditionalSettings): NoExpression;
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'expressionModel' property
         * of the parent pages.WidgetValidation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInWidgetValidationUnderExpressionModel(container: pages.WidgetValidation): NoExpression;
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'timeoutModel' property
         * of the parent rest.ConsumedODataService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.5.0 to 9.7.0
         */
        static createInConsumedODataServiceUnderTimeoutModel(container: rest.ConsumedODataService): NoExpression;
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): NoExpression;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.8.0: deleted
     * In version 7.9.0: introduced
     */
    class NoVariableRef extends VariableRef {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsVariableRefExpression(): VariableRefExpression;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new NoVariableRef instance in the SDK and on the server.
         * The new NoVariableRef will be automatically stored in the 'variable' property
         * of the parent VariableRefExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createIn(container: VariableRefExpression): NoVariableRef;
        /**
         * Creates and returns a new NoVariableRef instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): NoVariableRef;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.8.0: deleted
     * In version 7.9.0: introduced
     */
    class ParenthesisExpression extends Expression {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsBinaryExpression(): BinaryExpression;
        get containerAsFunctionCallExpression(): FunctionCallExpression;
        get containerAsIfExpression(): IfExpression;
        get containerAsParenthesisExpression(): ParenthesisExpression;
        get containerAsUnaryExpression(): UnaryExpression;
        get containerAsAppServiceCallParameterMapping(): microflows.AppServiceCallParameterMapping;
        get containerAsBasicCodeActionParameterValue(): microflows.BasicCodeActionParameterValue;
        get containerAsBasicJavaActionParameterValue(): microflows.BasicJavaActionParameterValue;
        get containerAsBinaryRequestHandling(): microflows.BinaryRequestHandling;
        get containerAsChangeListAction(): microflows.ChangeListAction;
        get containerAsChangeVariableAction(): microflows.ChangeVariableAction;
        get containerAsCreateVariableAction(): microflows.CreateVariableAction;
        get containerAsCustomRange(): microflows.CustomRange;
        get containerAsDocumentTemplateParameterMapping(): microflows.DocumentTemplateParameterMapping;
        get containerAsEndEvent(): microflows.EndEvent;
        get containerAsExpressionListOperation(): microflows.ExpressionListOperation;
        get containerAsExpressionSplitCondition(): microflows.ExpressionSplitCondition;
        get containerAsFormDataPart(): microflows.FormDataPart;
        get containerAsGenerateDocumentAction(): microflows.GenerateDocumentAction;
        get containerAsHttpConfiguration(): microflows.HttpConfiguration;
        get containerAsHttpHeaderEntry(): microflows.HttpHeaderEntry;
        get containerAsInspectAttribute(): microflows.InspectAttribute;
        get containerAsLogMessageAction(): microflows.LogMessageAction;
        get containerAsMemberChange(): microflows.MemberChange;
        get containerAsMicroflowCallParameterMapping(): microflows.MicroflowCallParameterMapping;
        get containerAsNanoflowCallParameterMapping(): microflows.NanoflowCallParameterMapping;
        get containerAsProxyConfiguration(): microflows.ProxyConfiguration;
        get containerAsRestCallAction(): microflows.RestCallAction;
        get containerAsRuleCallParameterMapping(): microflows.RuleCallParameterMapping;
        get containerAsTemplateArgument(): microflows.TemplateArgument;
        get containerAsWebServiceCallAction(): microflows.WebServiceCallAction;
        get containerAsWebServiceOperationParameterMapping(): microflows.WebServiceOperationParameterMapping;
        get containerAsConditionalSettings(): pages.ConditionalSettings;
        get containerAsWidgetValidation(): pages.WidgetValidation;
        get containerAsConsumedODataService(): rest.ConsumedODataService;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get expression(): Expression;
        set expression(newValue: Expression);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'left' property
         * of the parent BinaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryExpressionUnderLeft(container: BinaryExpression): ParenthesisExpression;
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'right' property
         * of the parent BinaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryExpressionUnderRight(container: BinaryExpression): ParenthesisExpression;
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'arguments' property
         * of the parent FunctionCallExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInFunctionCallExpressionUnderArguments(container: FunctionCallExpression): ParenthesisExpression;
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'condition' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderCondition(container: IfExpression): ParenthesisExpression;
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'ifFalse' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderIfFalse(container: IfExpression): ParenthesisExpression;
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'ifTrue' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderIfTrue(container: IfExpression): ParenthesisExpression;
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'expression' property
         * of the parent ParenthesisExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInParenthesisExpressionUnderExpression(container: ParenthesisExpression): ParenthesisExpression;
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'expression' property
         * of the parent UnaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInUnaryExpressionUnderExpression(container: UnaryExpression): ParenthesisExpression;
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.AppServiceCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceCallParameterMappingUnderArgumentModel(container: microflows.AppServiceCallParameterMapping): ParenthesisExpression;
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.BasicCodeActionParameterValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 to 9.7.0
         */
        static createInBasicCodeActionParameterValueUnderArgumentModel(container: microflows.BasicCodeActionParameterValue): ParenthesisExpression;
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.BasicJavaActionParameterValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 7.20.0
         */
        static createInBasicJavaActionParameterValueUnderArgumentModel(container: microflows.BasicJavaActionParameterValue): ParenthesisExpression;
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.BinaryRequestHandling element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryRequestHandlingUnderExpressionModel(container: microflows.BinaryRequestHandling): ParenthesisExpression;
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.ChangeListAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInChangeListActionUnderValueModel(container: microflows.ChangeListAction): ParenthesisExpression;
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.ChangeVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInChangeVariableActionUnderValueModel(container: microflows.ChangeVariableAction): ParenthesisExpression;
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'initialValueModel' property
         * of the parent microflows.CreateVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCreateVariableActionUnderInitialValueModel(container: microflows.CreateVariableAction): ParenthesisExpression;
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'limitExpressionModel' property
         * of the parent microflows.CustomRange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCustomRangeUnderLimitExpressionModel(container: microflows.CustomRange): ParenthesisExpression;
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'offsetExpressionModel' property
         * of the parent microflows.CustomRange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCustomRangeUnderOffsetExpressionModel(container: microflows.CustomRange): ParenthesisExpression;
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.DocumentTemplateParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInDocumentTemplateParameterMappingUnderArgumentModel(container: microflows.DocumentTemplateParameterMapping): ParenthesisExpression;
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'returnValueModel' property
         * of the parent microflows.EndEvent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInEndEventUnderReturnValueModel(container: microflows.EndEvent): ParenthesisExpression;
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.ExpressionListOperation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.3 to 9.7.0
         */
        static createInExpressionListOperationUnderExpressionModel(container: microflows.ExpressionListOperation): ParenthesisExpression;
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.ExpressionSplitCondition element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInExpressionSplitConditionUnderExpressionModel(container: microflows.ExpressionSplitCondition): ParenthesisExpression;
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.FormDataPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 to 9.7.0
         */
        static createInFormDataPartUnderValueModel(container: microflows.FormDataPart): ParenthesisExpression;
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'marginBottomInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginBottomInInchModel(container: microflows.GenerateDocumentAction): ParenthesisExpression;
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'marginLeftInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginLeftInInchModel(container: microflows.GenerateDocumentAction): ParenthesisExpression;
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'marginRightInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginRightInInchModel(container: microflows.GenerateDocumentAction): ParenthesisExpression;
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'marginTopInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginTopInInchModel(container: microflows.GenerateDocumentAction): ParenthesisExpression;
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'customLocationModel' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderCustomLocationModel(container: microflows.HttpConfiguration): ParenthesisExpression;
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'password' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderPassword(container: microflows.HttpConfiguration): ParenthesisExpression;
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'username' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderUsername(container: microflows.HttpConfiguration): ParenthesisExpression;
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.HttpHeaderEntry element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpHeaderEntryUnderValueModel(container: microflows.HttpHeaderEntry): ParenthesisExpression;
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.InspectAttribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInInspectAttributeUnderExpressionModel(container: microflows.InspectAttribute): ParenthesisExpression;
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'nodeModel' property
         * of the parent microflows.LogMessageAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInLogMessageActionUnderNodeModel(container: microflows.LogMessageAction): ParenthesisExpression;
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.MemberChange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInMemberChangeUnderValueModel(container: microflows.MemberChange): ParenthesisExpression;
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.MicroflowCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInMicroflowCallParameterMappingUnderArgumentModel(container: microflows.MicroflowCallParameterMapping): ParenthesisExpression;
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.NanoflowCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 to 9.7.0
         */
        static createInNanoflowCallParameterMappingUnderArgumentModel(container: microflows.NanoflowCallParameterMapping): ParenthesisExpression;
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'hostExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderHostExpressionModel(container: microflows.ProxyConfiguration): ParenthesisExpression;
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'passwordExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderPasswordExpressionModel(container: microflows.ProxyConfiguration): ParenthesisExpression;
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'portExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderPortExpressionModel(container: microflows.ProxyConfiguration): ParenthesisExpression;
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'useConfigurationExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderUseConfigurationExpressionModel(container: microflows.ProxyConfiguration): ParenthesisExpression;
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'usernameExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderUsernameExpressionModel(container: microflows.ProxyConfiguration): ParenthesisExpression;
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'timeOutModel' property
         * of the parent microflows.RestCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInRestCallActionUnderTimeOutModel(container: microflows.RestCallAction): ParenthesisExpression;
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.RuleCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInRuleCallParameterMappingUnderArgumentModel(container: microflows.RuleCallParameterMapping): ParenthesisExpression;
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.TemplateArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInTemplateArgumentUnderExpressionModel(container: microflows.TemplateArgument): ParenthesisExpression;
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'timeOutModel' property
         * of the parent microflows.WebServiceCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInWebServiceCallActionUnderTimeOutModel(container: microflows.WebServiceCallAction): ParenthesisExpression;
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.WebServiceOperationParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInWebServiceOperationParameterMappingUnderArgumentModel(container: microflows.WebServiceOperationParameterMapping): ParenthesisExpression;
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'expressionModel' property
         * of the parent pages.ConditionalSettings element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInConditionalSettingsUnderExpressionModel(container: pages.ConditionalSettings): ParenthesisExpression;
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'expressionModel' property
         * of the parent pages.WidgetValidation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInWidgetValidationUnderExpressionModel(container: pages.WidgetValidation): ParenthesisExpression;
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'timeoutModel' property
         * of the parent rest.ConsumedODataService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.5.0 to 9.7.0
         */
        static createInConsumedODataServiceUnderTimeoutModel(container: rest.ConsumedODataService): ParenthesisExpression;
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ParenthesisExpression;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.8.0: deleted
     * In version 7.9.0: introduced
     */
    class StringLiteral extends LiteralExpression {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsBinaryExpression(): BinaryExpression;
        get containerAsFunctionCallExpression(): FunctionCallExpression;
        get containerAsIfExpression(): IfExpression;
        get containerAsParenthesisExpression(): ParenthesisExpression;
        get containerAsUnaryExpression(): UnaryExpression;
        get containerAsAppServiceCallParameterMapping(): microflows.AppServiceCallParameterMapping;
        get containerAsBasicCodeActionParameterValue(): microflows.BasicCodeActionParameterValue;
        get containerAsBasicJavaActionParameterValue(): microflows.BasicJavaActionParameterValue;
        get containerAsBinaryRequestHandling(): microflows.BinaryRequestHandling;
        get containerAsChangeListAction(): microflows.ChangeListAction;
        get containerAsChangeVariableAction(): microflows.ChangeVariableAction;
        get containerAsCreateVariableAction(): microflows.CreateVariableAction;
        get containerAsCustomRange(): microflows.CustomRange;
        get containerAsDocumentTemplateParameterMapping(): microflows.DocumentTemplateParameterMapping;
        get containerAsEndEvent(): microflows.EndEvent;
        get containerAsExpressionListOperation(): microflows.ExpressionListOperation;
        get containerAsExpressionSplitCondition(): microflows.ExpressionSplitCondition;
        get containerAsFormDataPart(): microflows.FormDataPart;
        get containerAsGenerateDocumentAction(): microflows.GenerateDocumentAction;
        get containerAsHttpConfiguration(): microflows.HttpConfiguration;
        get containerAsHttpHeaderEntry(): microflows.HttpHeaderEntry;
        get containerAsInspectAttribute(): microflows.InspectAttribute;
        get containerAsLogMessageAction(): microflows.LogMessageAction;
        get containerAsMemberChange(): microflows.MemberChange;
        get containerAsMicroflowCallParameterMapping(): microflows.MicroflowCallParameterMapping;
        get containerAsNanoflowCallParameterMapping(): microflows.NanoflowCallParameterMapping;
        get containerAsProxyConfiguration(): microflows.ProxyConfiguration;
        get containerAsRestCallAction(): microflows.RestCallAction;
        get containerAsRuleCallParameterMapping(): microflows.RuleCallParameterMapping;
        get containerAsTemplateArgument(): microflows.TemplateArgument;
        get containerAsWebServiceCallAction(): microflows.WebServiceCallAction;
        get containerAsWebServiceOperationParameterMapping(): microflows.WebServiceOperationParameterMapping;
        get containerAsConditionalSettings(): pages.ConditionalSettings;
        get containerAsWidgetValidation(): pages.WidgetValidation;
        get containerAsConsumedODataService(): rest.ConsumedODataService;
        get value(): string;
        set value(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'left' property
         * of the parent BinaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryExpressionUnderLeft(container: BinaryExpression): StringLiteral;
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'right' property
         * of the parent BinaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryExpressionUnderRight(container: BinaryExpression): StringLiteral;
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'arguments' property
         * of the parent FunctionCallExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInFunctionCallExpressionUnderArguments(container: FunctionCallExpression): StringLiteral;
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'condition' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderCondition(container: IfExpression): StringLiteral;
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'ifFalse' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderIfFalse(container: IfExpression): StringLiteral;
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'ifTrue' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderIfTrue(container: IfExpression): StringLiteral;
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'expression' property
         * of the parent ParenthesisExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInParenthesisExpressionUnderExpression(container: ParenthesisExpression): StringLiteral;
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'expression' property
         * of the parent UnaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInUnaryExpressionUnderExpression(container: UnaryExpression): StringLiteral;
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.AppServiceCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceCallParameterMappingUnderArgumentModel(container: microflows.AppServiceCallParameterMapping): StringLiteral;
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.BasicCodeActionParameterValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 to 9.7.0
         */
        static createInBasicCodeActionParameterValueUnderArgumentModel(container: microflows.BasicCodeActionParameterValue): StringLiteral;
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.BasicJavaActionParameterValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 7.20.0
         */
        static createInBasicJavaActionParameterValueUnderArgumentModel(container: microflows.BasicJavaActionParameterValue): StringLiteral;
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'expressionModel' property
         * of the parent microflows.BinaryRequestHandling element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryRequestHandlingUnderExpressionModel(container: microflows.BinaryRequestHandling): StringLiteral;
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'valueModel' property
         * of the parent microflows.ChangeListAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInChangeListActionUnderValueModel(container: microflows.ChangeListAction): StringLiteral;
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'valueModel' property
         * of the parent microflows.ChangeVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInChangeVariableActionUnderValueModel(container: microflows.ChangeVariableAction): StringLiteral;
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'initialValueModel' property
         * of the parent microflows.CreateVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCreateVariableActionUnderInitialValueModel(container: microflows.CreateVariableAction): StringLiteral;
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'limitExpressionModel' property
         * of the parent microflows.CustomRange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCustomRangeUnderLimitExpressionModel(container: microflows.CustomRange): StringLiteral;
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'offsetExpressionModel' property
         * of the parent microflows.CustomRange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCustomRangeUnderOffsetExpressionModel(container: microflows.CustomRange): StringLiteral;
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.DocumentTemplateParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInDocumentTemplateParameterMappingUnderArgumentModel(container: microflows.DocumentTemplateParameterMapping): StringLiteral;
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'returnValueModel' property
         * of the parent microflows.EndEvent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInEndEventUnderReturnValueModel(container: microflows.EndEvent): StringLiteral;
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'expressionModel' property
         * of the parent microflows.ExpressionListOperation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.3 to 9.7.0
         */
        static createInExpressionListOperationUnderExpressionModel(container: microflows.ExpressionListOperation): StringLiteral;
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'expressionModel' property
         * of the parent microflows.ExpressionSplitCondition element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInExpressionSplitConditionUnderExpressionModel(container: microflows.ExpressionSplitCondition): StringLiteral;
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'valueModel' property
         * of the parent microflows.FormDataPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 to 9.7.0
         */
        static createInFormDataPartUnderValueModel(container: microflows.FormDataPart): StringLiteral;
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'marginBottomInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginBottomInInchModel(container: microflows.GenerateDocumentAction): StringLiteral;
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'marginLeftInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginLeftInInchModel(container: microflows.GenerateDocumentAction): StringLiteral;
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'marginRightInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginRightInInchModel(container: microflows.GenerateDocumentAction): StringLiteral;
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'marginTopInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginTopInInchModel(container: microflows.GenerateDocumentAction): StringLiteral;
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'customLocationModel' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderCustomLocationModel(container: microflows.HttpConfiguration): StringLiteral;
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'password' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderPassword(container: microflows.HttpConfiguration): StringLiteral;
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'username' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderUsername(container: microflows.HttpConfiguration): StringLiteral;
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'valueModel' property
         * of the parent microflows.HttpHeaderEntry element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpHeaderEntryUnderValueModel(container: microflows.HttpHeaderEntry): StringLiteral;
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'expressionModel' property
         * of the parent microflows.InspectAttribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInInspectAttributeUnderExpressionModel(container: microflows.InspectAttribute): StringLiteral;
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'nodeModel' property
         * of the parent microflows.LogMessageAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInLogMessageActionUnderNodeModel(container: microflows.LogMessageAction): StringLiteral;
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'valueModel' property
         * of the parent microflows.MemberChange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInMemberChangeUnderValueModel(container: microflows.MemberChange): StringLiteral;
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.MicroflowCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInMicroflowCallParameterMappingUnderArgumentModel(container: microflows.MicroflowCallParameterMapping): StringLiteral;
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.NanoflowCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 to 9.7.0
         */
        static createInNanoflowCallParameterMappingUnderArgumentModel(container: microflows.NanoflowCallParameterMapping): StringLiteral;
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'hostExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderHostExpressionModel(container: microflows.ProxyConfiguration): StringLiteral;
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'passwordExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderPasswordExpressionModel(container: microflows.ProxyConfiguration): StringLiteral;
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'portExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderPortExpressionModel(container: microflows.ProxyConfiguration): StringLiteral;
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'useConfigurationExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderUseConfigurationExpressionModel(container: microflows.ProxyConfiguration): StringLiteral;
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'usernameExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderUsernameExpressionModel(container: microflows.ProxyConfiguration): StringLiteral;
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'timeOutModel' property
         * of the parent microflows.RestCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInRestCallActionUnderTimeOutModel(container: microflows.RestCallAction): StringLiteral;
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.RuleCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInRuleCallParameterMappingUnderArgumentModel(container: microflows.RuleCallParameterMapping): StringLiteral;
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'expressionModel' property
         * of the parent microflows.TemplateArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInTemplateArgumentUnderExpressionModel(container: microflows.TemplateArgument): StringLiteral;
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'timeOutModel' property
         * of the parent microflows.WebServiceCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInWebServiceCallActionUnderTimeOutModel(container: microflows.WebServiceCallAction): StringLiteral;
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.WebServiceOperationParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInWebServiceOperationParameterMappingUnderArgumentModel(container: microflows.WebServiceOperationParameterMapping): StringLiteral;
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'expressionModel' property
         * of the parent pages.ConditionalSettings element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInConditionalSettingsUnderExpressionModel(container: pages.ConditionalSettings): StringLiteral;
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'expressionModel' property
         * of the parent pages.WidgetValidation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInWidgetValidationUnderExpressionModel(container: pages.WidgetValidation): StringLiteral;
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'timeoutModel' property
         * of the parent rest.ConsumedODataService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.5.0 to 9.7.0
         */
        static createInConsumedODataServiceUnderTimeoutModel(container: rest.ConsumedODataService): StringLiteral;
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): StringLiteral;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.8.0: deleted
     * In version 7.9.0: introduced
     */
    class UnaryExpression extends Expression {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsBinaryExpression(): BinaryExpression;
        get containerAsFunctionCallExpression(): FunctionCallExpression;
        get containerAsIfExpression(): IfExpression;
        get containerAsParenthesisExpression(): ParenthesisExpression;
        get containerAsUnaryExpression(): UnaryExpression;
        get containerAsAppServiceCallParameterMapping(): microflows.AppServiceCallParameterMapping;
        get containerAsBasicCodeActionParameterValue(): microflows.BasicCodeActionParameterValue;
        get containerAsBasicJavaActionParameterValue(): microflows.BasicJavaActionParameterValue;
        get containerAsBinaryRequestHandling(): microflows.BinaryRequestHandling;
        get containerAsChangeListAction(): microflows.ChangeListAction;
        get containerAsChangeVariableAction(): microflows.ChangeVariableAction;
        get containerAsCreateVariableAction(): microflows.CreateVariableAction;
        get containerAsCustomRange(): microflows.CustomRange;
        get containerAsDocumentTemplateParameterMapping(): microflows.DocumentTemplateParameterMapping;
        get containerAsEndEvent(): microflows.EndEvent;
        get containerAsExpressionListOperation(): microflows.ExpressionListOperation;
        get containerAsExpressionSplitCondition(): microflows.ExpressionSplitCondition;
        get containerAsFormDataPart(): microflows.FormDataPart;
        get containerAsGenerateDocumentAction(): microflows.GenerateDocumentAction;
        get containerAsHttpConfiguration(): microflows.HttpConfiguration;
        get containerAsHttpHeaderEntry(): microflows.HttpHeaderEntry;
        get containerAsInspectAttribute(): microflows.InspectAttribute;
        get containerAsLogMessageAction(): microflows.LogMessageAction;
        get containerAsMemberChange(): microflows.MemberChange;
        get containerAsMicroflowCallParameterMapping(): microflows.MicroflowCallParameterMapping;
        get containerAsNanoflowCallParameterMapping(): microflows.NanoflowCallParameterMapping;
        get containerAsProxyConfiguration(): microflows.ProxyConfiguration;
        get containerAsRestCallAction(): microflows.RestCallAction;
        get containerAsRuleCallParameterMapping(): microflows.RuleCallParameterMapping;
        get containerAsTemplateArgument(): microflows.TemplateArgument;
        get containerAsWebServiceCallAction(): microflows.WebServiceCallAction;
        get containerAsWebServiceOperationParameterMapping(): microflows.WebServiceOperationParameterMapping;
        get containerAsConditionalSettings(): pages.ConditionalSettings;
        get containerAsWidgetValidation(): pages.WidgetValidation;
        get containerAsConsumedODataService(): rest.ConsumedODataService;
        get operator(): UnaryOperator;
        set operator(newValue: UnaryOperator);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get expression(): Expression;
        set expression(newValue: Expression);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'left' property
         * of the parent BinaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryExpressionUnderLeft(container: BinaryExpression): UnaryExpression;
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'right' property
         * of the parent BinaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryExpressionUnderRight(container: BinaryExpression): UnaryExpression;
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'arguments' property
         * of the parent FunctionCallExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInFunctionCallExpressionUnderArguments(container: FunctionCallExpression): UnaryExpression;
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'condition' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderCondition(container: IfExpression): UnaryExpression;
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'ifFalse' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderIfFalse(container: IfExpression): UnaryExpression;
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'ifTrue' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderIfTrue(container: IfExpression): UnaryExpression;
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'expression' property
         * of the parent ParenthesisExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInParenthesisExpressionUnderExpression(container: ParenthesisExpression): UnaryExpression;
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'expression' property
         * of the parent UnaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInUnaryExpressionUnderExpression(container: UnaryExpression): UnaryExpression;
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.AppServiceCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceCallParameterMappingUnderArgumentModel(container: microflows.AppServiceCallParameterMapping): UnaryExpression;
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.BasicCodeActionParameterValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 to 9.7.0
         */
        static createInBasicCodeActionParameterValueUnderArgumentModel(container: microflows.BasicCodeActionParameterValue): UnaryExpression;
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.BasicJavaActionParameterValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 7.20.0
         */
        static createInBasicJavaActionParameterValueUnderArgumentModel(container: microflows.BasicJavaActionParameterValue): UnaryExpression;
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.BinaryRequestHandling element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryRequestHandlingUnderExpressionModel(container: microflows.BinaryRequestHandling): UnaryExpression;
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.ChangeListAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInChangeListActionUnderValueModel(container: microflows.ChangeListAction): UnaryExpression;
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.ChangeVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInChangeVariableActionUnderValueModel(container: microflows.ChangeVariableAction): UnaryExpression;
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'initialValueModel' property
         * of the parent microflows.CreateVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCreateVariableActionUnderInitialValueModel(container: microflows.CreateVariableAction): UnaryExpression;
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'limitExpressionModel' property
         * of the parent microflows.CustomRange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCustomRangeUnderLimitExpressionModel(container: microflows.CustomRange): UnaryExpression;
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'offsetExpressionModel' property
         * of the parent microflows.CustomRange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCustomRangeUnderOffsetExpressionModel(container: microflows.CustomRange): UnaryExpression;
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.DocumentTemplateParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInDocumentTemplateParameterMappingUnderArgumentModel(container: microflows.DocumentTemplateParameterMapping): UnaryExpression;
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'returnValueModel' property
         * of the parent microflows.EndEvent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInEndEventUnderReturnValueModel(container: microflows.EndEvent): UnaryExpression;
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.ExpressionListOperation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.3 to 9.7.0
         */
        static createInExpressionListOperationUnderExpressionModel(container: microflows.ExpressionListOperation): UnaryExpression;
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.ExpressionSplitCondition element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInExpressionSplitConditionUnderExpressionModel(container: microflows.ExpressionSplitCondition): UnaryExpression;
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.FormDataPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 to 9.7.0
         */
        static createInFormDataPartUnderValueModel(container: microflows.FormDataPart): UnaryExpression;
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'marginBottomInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginBottomInInchModel(container: microflows.GenerateDocumentAction): UnaryExpression;
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'marginLeftInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginLeftInInchModel(container: microflows.GenerateDocumentAction): UnaryExpression;
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'marginRightInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginRightInInchModel(container: microflows.GenerateDocumentAction): UnaryExpression;
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'marginTopInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginTopInInchModel(container: microflows.GenerateDocumentAction): UnaryExpression;
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'customLocationModel' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderCustomLocationModel(container: microflows.HttpConfiguration): UnaryExpression;
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'password' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderPassword(container: microflows.HttpConfiguration): UnaryExpression;
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'username' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderUsername(container: microflows.HttpConfiguration): UnaryExpression;
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.HttpHeaderEntry element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpHeaderEntryUnderValueModel(container: microflows.HttpHeaderEntry): UnaryExpression;
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.InspectAttribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInInspectAttributeUnderExpressionModel(container: microflows.InspectAttribute): UnaryExpression;
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'nodeModel' property
         * of the parent microflows.LogMessageAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInLogMessageActionUnderNodeModel(container: microflows.LogMessageAction): UnaryExpression;
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.MemberChange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInMemberChangeUnderValueModel(container: microflows.MemberChange): UnaryExpression;
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.MicroflowCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInMicroflowCallParameterMappingUnderArgumentModel(container: microflows.MicroflowCallParameterMapping): UnaryExpression;
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.NanoflowCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 to 9.7.0
         */
        static createInNanoflowCallParameterMappingUnderArgumentModel(container: microflows.NanoflowCallParameterMapping): UnaryExpression;
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'hostExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderHostExpressionModel(container: microflows.ProxyConfiguration): UnaryExpression;
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'passwordExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderPasswordExpressionModel(container: microflows.ProxyConfiguration): UnaryExpression;
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'portExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderPortExpressionModel(container: microflows.ProxyConfiguration): UnaryExpression;
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'useConfigurationExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderUseConfigurationExpressionModel(container: microflows.ProxyConfiguration): UnaryExpression;
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'usernameExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderUsernameExpressionModel(container: microflows.ProxyConfiguration): UnaryExpression;
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'timeOutModel' property
         * of the parent microflows.RestCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInRestCallActionUnderTimeOutModel(container: microflows.RestCallAction): UnaryExpression;
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.RuleCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInRuleCallParameterMappingUnderArgumentModel(container: microflows.RuleCallParameterMapping): UnaryExpression;
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.TemplateArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInTemplateArgumentUnderExpressionModel(container: microflows.TemplateArgument): UnaryExpression;
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'timeOutModel' property
         * of the parent microflows.WebServiceCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInWebServiceCallActionUnderTimeOutModel(container: microflows.WebServiceCallAction): UnaryExpression;
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.WebServiceOperationParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInWebServiceOperationParameterMappingUnderArgumentModel(container: microflows.WebServiceOperationParameterMapping): UnaryExpression;
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'expressionModel' property
         * of the parent pages.ConditionalSettings element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInConditionalSettingsUnderExpressionModel(container: pages.ConditionalSettings): UnaryExpression;
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'expressionModel' property
         * of the parent pages.WidgetValidation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInWidgetValidationUnderExpressionModel(container: pages.WidgetValidation): UnaryExpression;
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'timeoutModel' property
         * of the parent rest.ConsumedODataService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.5.0 to 9.7.0
         */
        static createInConsumedODataServiceUnderTimeoutModel(container: rest.ConsumedODataService): UnaryExpression;
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): UnaryExpression;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.8.0: deleted
     * In version 7.9.0: introduced
     */
    class UnparsableExpression extends Expression {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsBinaryExpression(): BinaryExpression;
        get containerAsFunctionCallExpression(): FunctionCallExpression;
        get containerAsIfExpression(): IfExpression;
        get containerAsParenthesisExpression(): ParenthesisExpression;
        get containerAsUnaryExpression(): UnaryExpression;
        get containerAsAppServiceCallParameterMapping(): microflows.AppServiceCallParameterMapping;
        get containerAsBasicCodeActionParameterValue(): microflows.BasicCodeActionParameterValue;
        get containerAsBasicJavaActionParameterValue(): microflows.BasicJavaActionParameterValue;
        get containerAsBinaryRequestHandling(): microflows.BinaryRequestHandling;
        get containerAsChangeListAction(): microflows.ChangeListAction;
        get containerAsChangeVariableAction(): microflows.ChangeVariableAction;
        get containerAsCreateVariableAction(): microflows.CreateVariableAction;
        get containerAsCustomRange(): microflows.CustomRange;
        get containerAsDocumentTemplateParameterMapping(): microflows.DocumentTemplateParameterMapping;
        get containerAsEndEvent(): microflows.EndEvent;
        get containerAsExpressionListOperation(): microflows.ExpressionListOperation;
        get containerAsExpressionSplitCondition(): microflows.ExpressionSplitCondition;
        get containerAsFormDataPart(): microflows.FormDataPart;
        get containerAsGenerateDocumentAction(): microflows.GenerateDocumentAction;
        get containerAsHttpConfiguration(): microflows.HttpConfiguration;
        get containerAsHttpHeaderEntry(): microflows.HttpHeaderEntry;
        get containerAsInspectAttribute(): microflows.InspectAttribute;
        get containerAsLogMessageAction(): microflows.LogMessageAction;
        get containerAsMemberChange(): microflows.MemberChange;
        get containerAsMicroflowCallParameterMapping(): microflows.MicroflowCallParameterMapping;
        get containerAsNanoflowCallParameterMapping(): microflows.NanoflowCallParameterMapping;
        get containerAsProxyConfiguration(): microflows.ProxyConfiguration;
        get containerAsRestCallAction(): microflows.RestCallAction;
        get containerAsRuleCallParameterMapping(): microflows.RuleCallParameterMapping;
        get containerAsTemplateArgument(): microflows.TemplateArgument;
        get containerAsWebServiceCallAction(): microflows.WebServiceCallAction;
        get containerAsWebServiceOperationParameterMapping(): microflows.WebServiceOperationParameterMapping;
        get containerAsConditionalSettings(): pages.ConditionalSettings;
        get containerAsWidgetValidation(): pages.WidgetValidation;
        get containerAsConsumedODataService(): rest.ConsumedODataService;
        get expression(): string;
        set expression(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'left' property
         * of the parent BinaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryExpressionUnderLeft(container: BinaryExpression): UnparsableExpression;
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'right' property
         * of the parent BinaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryExpressionUnderRight(container: BinaryExpression): UnparsableExpression;
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'arguments' property
         * of the parent FunctionCallExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInFunctionCallExpressionUnderArguments(container: FunctionCallExpression): UnparsableExpression;
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'condition' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderCondition(container: IfExpression): UnparsableExpression;
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'ifFalse' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderIfFalse(container: IfExpression): UnparsableExpression;
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'ifTrue' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderIfTrue(container: IfExpression): UnparsableExpression;
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'expression' property
         * of the parent ParenthesisExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInParenthesisExpressionUnderExpression(container: ParenthesisExpression): UnparsableExpression;
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'expression' property
         * of the parent UnaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInUnaryExpressionUnderExpression(container: UnaryExpression): UnparsableExpression;
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.AppServiceCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceCallParameterMappingUnderArgumentModel(container: microflows.AppServiceCallParameterMapping): UnparsableExpression;
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.BasicCodeActionParameterValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 to 9.7.0
         */
        static createInBasicCodeActionParameterValueUnderArgumentModel(container: microflows.BasicCodeActionParameterValue): UnparsableExpression;
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.BasicJavaActionParameterValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 7.20.0
         */
        static createInBasicJavaActionParameterValueUnderArgumentModel(container: microflows.BasicJavaActionParameterValue): UnparsableExpression;
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.BinaryRequestHandling element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryRequestHandlingUnderExpressionModel(container: microflows.BinaryRequestHandling): UnparsableExpression;
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.ChangeListAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInChangeListActionUnderValueModel(container: microflows.ChangeListAction): UnparsableExpression;
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.ChangeVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInChangeVariableActionUnderValueModel(container: microflows.ChangeVariableAction): UnparsableExpression;
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'initialValueModel' property
         * of the parent microflows.CreateVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCreateVariableActionUnderInitialValueModel(container: microflows.CreateVariableAction): UnparsableExpression;
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'limitExpressionModel' property
         * of the parent microflows.CustomRange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCustomRangeUnderLimitExpressionModel(container: microflows.CustomRange): UnparsableExpression;
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'offsetExpressionModel' property
         * of the parent microflows.CustomRange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCustomRangeUnderOffsetExpressionModel(container: microflows.CustomRange): UnparsableExpression;
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.DocumentTemplateParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInDocumentTemplateParameterMappingUnderArgumentModel(container: microflows.DocumentTemplateParameterMapping): UnparsableExpression;
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'returnValueModel' property
         * of the parent microflows.EndEvent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInEndEventUnderReturnValueModel(container: microflows.EndEvent): UnparsableExpression;
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.ExpressionListOperation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.3 to 9.7.0
         */
        static createInExpressionListOperationUnderExpressionModel(container: microflows.ExpressionListOperation): UnparsableExpression;
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.ExpressionSplitCondition element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInExpressionSplitConditionUnderExpressionModel(container: microflows.ExpressionSplitCondition): UnparsableExpression;
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.FormDataPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 to 9.7.0
         */
        static createInFormDataPartUnderValueModel(container: microflows.FormDataPart): UnparsableExpression;
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'marginBottomInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginBottomInInchModel(container: microflows.GenerateDocumentAction): UnparsableExpression;
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'marginLeftInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginLeftInInchModel(container: microflows.GenerateDocumentAction): UnparsableExpression;
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'marginRightInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginRightInInchModel(container: microflows.GenerateDocumentAction): UnparsableExpression;
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'marginTopInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginTopInInchModel(container: microflows.GenerateDocumentAction): UnparsableExpression;
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'customLocationModel' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderCustomLocationModel(container: microflows.HttpConfiguration): UnparsableExpression;
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'password' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderPassword(container: microflows.HttpConfiguration): UnparsableExpression;
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'username' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderUsername(container: microflows.HttpConfiguration): UnparsableExpression;
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.HttpHeaderEntry element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpHeaderEntryUnderValueModel(container: microflows.HttpHeaderEntry): UnparsableExpression;
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.InspectAttribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInInspectAttributeUnderExpressionModel(container: microflows.InspectAttribute): UnparsableExpression;
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'nodeModel' property
         * of the parent microflows.LogMessageAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInLogMessageActionUnderNodeModel(container: microflows.LogMessageAction): UnparsableExpression;
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.MemberChange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInMemberChangeUnderValueModel(container: microflows.MemberChange): UnparsableExpression;
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.MicroflowCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInMicroflowCallParameterMappingUnderArgumentModel(container: microflows.MicroflowCallParameterMapping): UnparsableExpression;
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.NanoflowCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 to 9.7.0
         */
        static createInNanoflowCallParameterMappingUnderArgumentModel(container: microflows.NanoflowCallParameterMapping): UnparsableExpression;
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'hostExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderHostExpressionModel(container: microflows.ProxyConfiguration): UnparsableExpression;
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'passwordExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderPasswordExpressionModel(container: microflows.ProxyConfiguration): UnparsableExpression;
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'portExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderPortExpressionModel(container: microflows.ProxyConfiguration): UnparsableExpression;
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'useConfigurationExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderUseConfigurationExpressionModel(container: microflows.ProxyConfiguration): UnparsableExpression;
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'usernameExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderUsernameExpressionModel(container: microflows.ProxyConfiguration): UnparsableExpression;
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'timeOutModel' property
         * of the parent microflows.RestCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInRestCallActionUnderTimeOutModel(container: microflows.RestCallAction): UnparsableExpression;
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.RuleCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInRuleCallParameterMappingUnderArgumentModel(container: microflows.RuleCallParameterMapping): UnparsableExpression;
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.TemplateArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInTemplateArgumentUnderExpressionModel(container: microflows.TemplateArgument): UnparsableExpression;
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'timeOutModel' property
         * of the parent microflows.WebServiceCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInWebServiceCallActionUnderTimeOutModel(container: microflows.WebServiceCallAction): UnparsableExpression;
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.WebServiceOperationParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInWebServiceOperationParameterMappingUnderArgumentModel(container: microflows.WebServiceOperationParameterMapping): UnparsableExpression;
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'expressionModel' property
         * of the parent pages.ConditionalSettings element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInConditionalSettingsUnderExpressionModel(container: pages.ConditionalSettings): UnparsableExpression;
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'expressionModel' property
         * of the parent pages.WidgetValidation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInWidgetValidationUnderExpressionModel(container: pages.WidgetValidation): UnparsableExpression;
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'timeoutModel' property
         * of the parent rest.ConsumedODataService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.5.0 to 9.7.0
         */
        static createInConsumedODataServiceUnderTimeoutModel(container: rest.ConsumedODataService): UnparsableExpression;
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): UnparsableExpression;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.8.0: deleted
     * In version 7.9.0: introduced
     */
    class VariableRefExpression extends Expression {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsBinaryExpression(): BinaryExpression;
        get containerAsFunctionCallExpression(): FunctionCallExpression;
        get containerAsIfExpression(): IfExpression;
        get containerAsParenthesisExpression(): ParenthesisExpression;
        get containerAsUnaryExpression(): UnaryExpression;
        get containerAsAppServiceCallParameterMapping(): microflows.AppServiceCallParameterMapping;
        get containerAsBasicCodeActionParameterValue(): microflows.BasicCodeActionParameterValue;
        get containerAsBasicJavaActionParameterValue(): microflows.BasicJavaActionParameterValue;
        get containerAsBinaryRequestHandling(): microflows.BinaryRequestHandling;
        get containerAsChangeListAction(): microflows.ChangeListAction;
        get containerAsChangeVariableAction(): microflows.ChangeVariableAction;
        get containerAsCreateVariableAction(): microflows.CreateVariableAction;
        get containerAsCustomRange(): microflows.CustomRange;
        get containerAsDocumentTemplateParameterMapping(): microflows.DocumentTemplateParameterMapping;
        get containerAsEndEvent(): microflows.EndEvent;
        get containerAsExpressionListOperation(): microflows.ExpressionListOperation;
        get containerAsExpressionSplitCondition(): microflows.ExpressionSplitCondition;
        get containerAsFormDataPart(): microflows.FormDataPart;
        get containerAsGenerateDocumentAction(): microflows.GenerateDocumentAction;
        get containerAsHttpConfiguration(): microflows.HttpConfiguration;
        get containerAsHttpHeaderEntry(): microflows.HttpHeaderEntry;
        get containerAsInspectAttribute(): microflows.InspectAttribute;
        get containerAsLogMessageAction(): microflows.LogMessageAction;
        get containerAsMemberChange(): microflows.MemberChange;
        get containerAsMicroflowCallParameterMapping(): microflows.MicroflowCallParameterMapping;
        get containerAsNanoflowCallParameterMapping(): microflows.NanoflowCallParameterMapping;
        get containerAsProxyConfiguration(): microflows.ProxyConfiguration;
        get containerAsRestCallAction(): microflows.RestCallAction;
        get containerAsRuleCallParameterMapping(): microflows.RuleCallParameterMapping;
        get containerAsTemplateArgument(): microflows.TemplateArgument;
        get containerAsWebServiceCallAction(): microflows.WebServiceCallAction;
        get containerAsWebServiceOperationParameterMapping(): microflows.WebServiceOperationParameterMapping;
        get containerAsConditionalSettings(): pages.ConditionalSettings;
        get containerAsWidgetValidation(): pages.WidgetValidation;
        get containerAsConsumedODataService(): rest.ConsumedODataService;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get variable(): VariableRef;
        set variable(newValue: VariableRef);
        /**
         * In version 7.11.0: introduced
         */
        get member(): domainmodels.MemberRef | null;
        set member(newValue: domainmodels.MemberRef | null);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'left' property
         * of the parent BinaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryExpressionUnderLeft(container: BinaryExpression): VariableRefExpression;
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'right' property
         * of the parent BinaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryExpressionUnderRight(container: BinaryExpression): VariableRefExpression;
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'arguments' property
         * of the parent FunctionCallExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInFunctionCallExpressionUnderArguments(container: FunctionCallExpression): VariableRefExpression;
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'condition' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderCondition(container: IfExpression): VariableRefExpression;
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'ifFalse' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderIfFalse(container: IfExpression): VariableRefExpression;
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'ifTrue' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderIfTrue(container: IfExpression): VariableRefExpression;
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'expression' property
         * of the parent ParenthesisExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInParenthesisExpressionUnderExpression(container: ParenthesisExpression): VariableRefExpression;
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'expression' property
         * of the parent UnaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInUnaryExpressionUnderExpression(container: UnaryExpression): VariableRefExpression;
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.AppServiceCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceCallParameterMappingUnderArgumentModel(container: microflows.AppServiceCallParameterMapping): VariableRefExpression;
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.BasicCodeActionParameterValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 to 9.7.0
         */
        static createInBasicCodeActionParameterValueUnderArgumentModel(container: microflows.BasicCodeActionParameterValue): VariableRefExpression;
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.BasicJavaActionParameterValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 7.20.0
         */
        static createInBasicJavaActionParameterValueUnderArgumentModel(container: microflows.BasicJavaActionParameterValue): VariableRefExpression;
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.BinaryRequestHandling element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryRequestHandlingUnderExpressionModel(container: microflows.BinaryRequestHandling): VariableRefExpression;
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.ChangeListAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInChangeListActionUnderValueModel(container: microflows.ChangeListAction): VariableRefExpression;
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.ChangeVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInChangeVariableActionUnderValueModel(container: microflows.ChangeVariableAction): VariableRefExpression;
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'initialValueModel' property
         * of the parent microflows.CreateVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCreateVariableActionUnderInitialValueModel(container: microflows.CreateVariableAction): VariableRefExpression;
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'limitExpressionModel' property
         * of the parent microflows.CustomRange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCustomRangeUnderLimitExpressionModel(container: microflows.CustomRange): VariableRefExpression;
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'offsetExpressionModel' property
         * of the parent microflows.CustomRange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCustomRangeUnderOffsetExpressionModel(container: microflows.CustomRange): VariableRefExpression;
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.DocumentTemplateParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInDocumentTemplateParameterMappingUnderArgumentModel(container: microflows.DocumentTemplateParameterMapping): VariableRefExpression;
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'returnValueModel' property
         * of the parent microflows.EndEvent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInEndEventUnderReturnValueModel(container: microflows.EndEvent): VariableRefExpression;
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.ExpressionListOperation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.3 to 9.7.0
         */
        static createInExpressionListOperationUnderExpressionModel(container: microflows.ExpressionListOperation): VariableRefExpression;
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.ExpressionSplitCondition element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInExpressionSplitConditionUnderExpressionModel(container: microflows.ExpressionSplitCondition): VariableRefExpression;
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.FormDataPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 to 9.7.0
         */
        static createInFormDataPartUnderValueModel(container: microflows.FormDataPart): VariableRefExpression;
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'marginBottomInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginBottomInInchModel(container: microflows.GenerateDocumentAction): VariableRefExpression;
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'marginLeftInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginLeftInInchModel(container: microflows.GenerateDocumentAction): VariableRefExpression;
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'marginRightInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginRightInInchModel(container: microflows.GenerateDocumentAction): VariableRefExpression;
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'marginTopInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginTopInInchModel(container: microflows.GenerateDocumentAction): VariableRefExpression;
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'customLocationModel' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderCustomLocationModel(container: microflows.HttpConfiguration): VariableRefExpression;
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'password' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderPassword(container: microflows.HttpConfiguration): VariableRefExpression;
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'username' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderUsername(container: microflows.HttpConfiguration): VariableRefExpression;
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.HttpHeaderEntry element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpHeaderEntryUnderValueModel(container: microflows.HttpHeaderEntry): VariableRefExpression;
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.InspectAttribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInInspectAttributeUnderExpressionModel(container: microflows.InspectAttribute): VariableRefExpression;
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'nodeModel' property
         * of the parent microflows.LogMessageAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInLogMessageActionUnderNodeModel(container: microflows.LogMessageAction): VariableRefExpression;
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.MemberChange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInMemberChangeUnderValueModel(container: microflows.MemberChange): VariableRefExpression;
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.MicroflowCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInMicroflowCallParameterMappingUnderArgumentModel(container: microflows.MicroflowCallParameterMapping): VariableRefExpression;
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.NanoflowCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 to 9.7.0
         */
        static createInNanoflowCallParameterMappingUnderArgumentModel(container: microflows.NanoflowCallParameterMapping): VariableRefExpression;
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'hostExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderHostExpressionModel(container: microflows.ProxyConfiguration): VariableRefExpression;
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'passwordExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderPasswordExpressionModel(container: microflows.ProxyConfiguration): VariableRefExpression;
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'portExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderPortExpressionModel(container: microflows.ProxyConfiguration): VariableRefExpression;
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'useConfigurationExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderUseConfigurationExpressionModel(container: microflows.ProxyConfiguration): VariableRefExpression;
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'usernameExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderUsernameExpressionModel(container: microflows.ProxyConfiguration): VariableRefExpression;
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'timeOutModel' property
         * of the parent microflows.RestCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInRestCallActionUnderTimeOutModel(container: microflows.RestCallAction): VariableRefExpression;
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.RuleCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInRuleCallParameterMappingUnderArgumentModel(container: microflows.RuleCallParameterMapping): VariableRefExpression;
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.TemplateArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInTemplateArgumentUnderExpressionModel(container: microflows.TemplateArgument): VariableRefExpression;
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'timeOutModel' property
         * of the parent microflows.WebServiceCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInWebServiceCallActionUnderTimeOutModel(container: microflows.WebServiceCallAction): VariableRefExpression;
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.WebServiceOperationParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInWebServiceOperationParameterMappingUnderArgumentModel(container: microflows.WebServiceOperationParameterMapping): VariableRefExpression;
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'expressionModel' property
         * of the parent pages.ConditionalSettings element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInConditionalSettingsUnderExpressionModel(container: pages.ConditionalSettings): VariableRefExpression;
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'expressionModel' property
         * of the parent pages.WidgetValidation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInWidgetValidationUnderExpressionModel(container: pages.WidgetValidation): VariableRefExpression;
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'timeoutModel' property
         * of the parent rest.ConsumedODataService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.5.0 to 9.7.0
         */
        static createInConsumedODataServiceUnderTimeoutModel(container: rest.ConsumedODataService): VariableRefExpression;
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): VariableRefExpression;
    }
}
import { constants } from "./constants";
import { domainmodels } from "./domainmodels";
import { enumerations } from "./enumerations";
import { microflows } from "./microflows";
import { pages } from "./pages";
import { rest } from "./rest";
import { IModel } from "./base-model";
