"use strict";
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.expressions = exports.StructureVersionInfo = void 0;
const internal = require("../sdk/internal");
exports.StructureVersionInfo = internal.StructureVersionInfo;
/**
 * @ignore
 */
var expressions;
(function (expressions) {
    class BinaryOperator extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "expressions.BinaryOperator";
        }
    }
    BinaryOperator.None = new BinaryOperator("None", {});
    BinaryOperator.And = new BinaryOperator("And", {});
    BinaryOperator.Or = new BinaryOperator("Or", {});
    BinaryOperator.Equals = new BinaryOperator("Equals", {});
    BinaryOperator.NotEquals = new BinaryOperator("NotEquals", {});
    BinaryOperator.GreaterThan = new BinaryOperator("GreaterThan", {});
    BinaryOperator.LessThan = new BinaryOperator("LessThan", {});
    BinaryOperator.GreaterThanOrEqual = new BinaryOperator("GreaterThanOrEqual", {});
    BinaryOperator.LessThanOrEqual = new BinaryOperator("LessThanOrEqual", {});
    BinaryOperator.Minus = new BinaryOperator("Minus", {});
    BinaryOperator.Plus = new BinaryOperator("Plus", {});
    BinaryOperator.Multiply = new BinaryOperator("Multiply", {});
    BinaryOperator.Divide = new BinaryOperator("Divide", {});
    BinaryOperator.Div = new BinaryOperator("Div", {});
    BinaryOperator.Mod = new BinaryOperator("Mod", {});
    expressions.BinaryOperator = BinaryOperator;
    class UnaryOperator extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "expressions.UnaryOperator";
        }
    }
    UnaryOperator.None = new UnaryOperator("None", {});
    UnaryOperator.UnaryMinus = new UnaryOperator("UnaryMinus", {});
    expressions.UnaryOperator = UnaryOperator;
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
    class Expression extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new Expression() cannot be invoked directly, please use 'model.expressions.createExpression()'");
            }
        }
        get containerAsBinaryExpression() {
            return super.getContainerAs(BinaryExpression);
        }
        get containerAsFunctionCallExpression() {
            return super.getContainerAs(FunctionCallExpression);
        }
        get containerAsIfExpression() {
            return super.getContainerAs(IfExpression);
        }
        get containerAsParenthesisExpression() {
            return super.getContainerAs(ParenthesisExpression);
        }
        get containerAsUnaryExpression() {
            return super.getContainerAs(UnaryExpression);
        }
        get containerAsAppServiceCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.AppServiceCallParameterMapping);
        }
        get containerAsBasicCodeActionParameterValue() {
            return super.getContainerAs(microflows_1.microflows.BasicCodeActionParameterValue);
        }
        get containerAsBasicJavaActionParameterValue() {
            return super.getContainerAs(microflows_1.microflows.BasicJavaActionParameterValue);
        }
        get containerAsBinaryRequestHandling() {
            return super.getContainerAs(microflows_1.microflows.BinaryRequestHandling);
        }
        get containerAsChangeListAction() {
            return super.getContainerAs(microflows_1.microflows.ChangeListAction);
        }
        get containerAsChangeVariableAction() {
            return super.getContainerAs(microflows_1.microflows.ChangeVariableAction);
        }
        get containerAsCreateVariableAction() {
            return super.getContainerAs(microflows_1.microflows.CreateVariableAction);
        }
        get containerAsCustomRange() {
            return super.getContainerAs(microflows_1.microflows.CustomRange);
        }
        get containerAsDocumentTemplateParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.DocumentTemplateParameterMapping);
        }
        get containerAsEndEvent() {
            return super.getContainerAs(microflows_1.microflows.EndEvent);
        }
        get containerAsExpressionListOperation() {
            return super.getContainerAs(microflows_1.microflows.ExpressionListOperation);
        }
        get containerAsExpressionSplitCondition() {
            return super.getContainerAs(microflows_1.microflows.ExpressionSplitCondition);
        }
        get containerAsFormDataPart() {
            return super.getContainerAs(microflows_1.microflows.FormDataPart);
        }
        get containerAsGenerateDocumentAction() {
            return super.getContainerAs(microflows_1.microflows.GenerateDocumentAction);
        }
        get containerAsHttpConfiguration() {
            return super.getContainerAs(microflows_1.microflows.HttpConfiguration);
        }
        get containerAsHttpHeaderEntry() {
            return super.getContainerAs(microflows_1.microflows.HttpHeaderEntry);
        }
        get containerAsInspectAttribute() {
            return super.getContainerAs(microflows_1.microflows.InspectAttribute);
        }
        get containerAsLogMessageAction() {
            return super.getContainerAs(microflows_1.microflows.LogMessageAction);
        }
        get containerAsMemberChange() {
            return super.getContainerAs(microflows_1.microflows.MemberChange);
        }
        get containerAsMicroflowCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.MicroflowCallParameterMapping);
        }
        get containerAsNanoflowCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.NanoflowCallParameterMapping);
        }
        get containerAsProxyConfiguration() {
            return super.getContainerAs(microflows_1.microflows.ProxyConfiguration);
        }
        get containerAsRestCallAction() {
            return super.getContainerAs(microflows_1.microflows.RestCallAction);
        }
        get containerAsRuleCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.RuleCallParameterMapping);
        }
        get containerAsTemplateArgument() {
            return super.getContainerAs(microflows_1.microflows.TemplateArgument);
        }
        get containerAsWebServiceCallAction() {
            return super.getContainerAs(microflows_1.microflows.WebServiceCallAction);
        }
        get containerAsWebServiceOperationParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.WebServiceOperationParameterMapping);
        }
        get containerAsConditionalSettings() {
            return super.getContainerAs(pages_1.pages.ConditionalSettings);
        }
        get containerAsWidgetValidation() {
            return super.getContainerAs(pages_1.pages.WidgetValidation);
        }
        get containerAsConsumedODataService() {
            return super.getContainerAs(rest_1.rest.ConsumedODataService);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    Expression.structureTypeName = "Expressions$Expression";
    Expression.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.9.0",
        deleted: "9.8.0",
        deletionMessage: null,
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    expressions.Expression = Expression;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.8.0: deleted
     * In version 7.9.0: introduced
     */
    class BinaryExpression extends Expression {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__operator = new internal.EnumProperty(BinaryExpression, this, "operator", BinaryOperator.None, BinaryOperator);
            /** @internal */
            this.__left = new internal.PartProperty(BinaryExpression, this, "left", null, true);
            /** @internal */
            this.__right = new internal.PartProperty(BinaryExpression, this, "right", null, true);
            if (arguments.length < 4) {
                throw new Error("new BinaryExpression() cannot be invoked directly, please use 'model.expressions.createBinaryExpression()'");
            }
        }
        get containerAsBinaryExpression() {
            return super.getContainerAs(BinaryExpression);
        }
        get containerAsFunctionCallExpression() {
            return super.getContainerAs(FunctionCallExpression);
        }
        get containerAsIfExpression() {
            return super.getContainerAs(IfExpression);
        }
        get containerAsParenthesisExpression() {
            return super.getContainerAs(ParenthesisExpression);
        }
        get containerAsUnaryExpression() {
            return super.getContainerAs(UnaryExpression);
        }
        get containerAsAppServiceCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.AppServiceCallParameterMapping);
        }
        get containerAsBasicCodeActionParameterValue() {
            return super.getContainerAs(microflows_1.microflows.BasicCodeActionParameterValue);
        }
        get containerAsBasicJavaActionParameterValue() {
            return super.getContainerAs(microflows_1.microflows.BasicJavaActionParameterValue);
        }
        get containerAsBinaryRequestHandling() {
            return super.getContainerAs(microflows_1.microflows.BinaryRequestHandling);
        }
        get containerAsChangeListAction() {
            return super.getContainerAs(microflows_1.microflows.ChangeListAction);
        }
        get containerAsChangeVariableAction() {
            return super.getContainerAs(microflows_1.microflows.ChangeVariableAction);
        }
        get containerAsCreateVariableAction() {
            return super.getContainerAs(microflows_1.microflows.CreateVariableAction);
        }
        get containerAsCustomRange() {
            return super.getContainerAs(microflows_1.microflows.CustomRange);
        }
        get containerAsDocumentTemplateParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.DocumentTemplateParameterMapping);
        }
        get containerAsEndEvent() {
            return super.getContainerAs(microflows_1.microflows.EndEvent);
        }
        get containerAsExpressionListOperation() {
            return super.getContainerAs(microflows_1.microflows.ExpressionListOperation);
        }
        get containerAsExpressionSplitCondition() {
            return super.getContainerAs(microflows_1.microflows.ExpressionSplitCondition);
        }
        get containerAsFormDataPart() {
            return super.getContainerAs(microflows_1.microflows.FormDataPart);
        }
        get containerAsGenerateDocumentAction() {
            return super.getContainerAs(microflows_1.microflows.GenerateDocumentAction);
        }
        get containerAsHttpConfiguration() {
            return super.getContainerAs(microflows_1.microflows.HttpConfiguration);
        }
        get containerAsHttpHeaderEntry() {
            return super.getContainerAs(microflows_1.microflows.HttpHeaderEntry);
        }
        get containerAsInspectAttribute() {
            return super.getContainerAs(microflows_1.microflows.InspectAttribute);
        }
        get containerAsLogMessageAction() {
            return super.getContainerAs(microflows_1.microflows.LogMessageAction);
        }
        get containerAsMemberChange() {
            return super.getContainerAs(microflows_1.microflows.MemberChange);
        }
        get containerAsMicroflowCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.MicroflowCallParameterMapping);
        }
        get containerAsNanoflowCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.NanoflowCallParameterMapping);
        }
        get containerAsProxyConfiguration() {
            return super.getContainerAs(microflows_1.microflows.ProxyConfiguration);
        }
        get containerAsRestCallAction() {
            return super.getContainerAs(microflows_1.microflows.RestCallAction);
        }
        get containerAsRuleCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.RuleCallParameterMapping);
        }
        get containerAsTemplateArgument() {
            return super.getContainerAs(microflows_1.microflows.TemplateArgument);
        }
        get containerAsWebServiceCallAction() {
            return super.getContainerAs(microflows_1.microflows.WebServiceCallAction);
        }
        get containerAsWebServiceOperationParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.WebServiceOperationParameterMapping);
        }
        get containerAsConditionalSettings() {
            return super.getContainerAs(pages_1.pages.ConditionalSettings);
        }
        get containerAsWidgetValidation() {
            return super.getContainerAs(pages_1.pages.WidgetValidation);
        }
        get containerAsConsumedODataService() {
            return super.getContainerAs(rest_1.rest.ConsumedODataService);
        }
        get operator() {
            return this.__operator.get();
        }
        set operator(newValue) {
            this.__operator.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get left() {
            return this.__left.get();
        }
        set left(newValue) {
            this.__left.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get right() {
            return this.__right.get();
        }
        set right(newValue) {
            this.__right.set(newValue);
        }
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'left' property
         * of the parent BinaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryExpressionUnderLeft(container) {
            internal.createInVersionCheck(container.model, BinaryExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BinaryExpression, "left", false);
        }
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'right' property
         * of the parent BinaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryExpressionUnderRight(container) {
            internal.createInVersionCheck(container.model, BinaryExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BinaryExpression, "right", false);
        }
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'arguments' property
         * of the parent FunctionCallExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInFunctionCallExpressionUnderArguments(container) {
            internal.createInVersionCheck(container.model, BinaryExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BinaryExpression, "arguments", true);
        }
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'condition' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderCondition(container) {
            internal.createInVersionCheck(container.model, BinaryExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BinaryExpression, "condition", false);
        }
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'ifFalse' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderIfFalse(container) {
            internal.createInVersionCheck(container.model, BinaryExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BinaryExpression, "ifFalse", false);
        }
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'ifTrue' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderIfTrue(container) {
            internal.createInVersionCheck(container.model, BinaryExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BinaryExpression, "ifTrue", false);
        }
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'expression' property
         * of the parent ParenthesisExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInParenthesisExpressionUnderExpression(container) {
            internal.createInVersionCheck(container.model, BinaryExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BinaryExpression, "expression", false);
        }
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'expression' property
         * of the parent UnaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInUnaryExpressionUnderExpression(container) {
            internal.createInVersionCheck(container.model, BinaryExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BinaryExpression, "expression", false);
        }
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.AppServiceCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceCallParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, BinaryExpression.structureTypeName, { start: "7.9.0", end: "9.0.1" });
            return internal.instancehelpers.createElement(container, BinaryExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.BasicCodeActionParameterValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 to 9.7.0
         */
        static createInBasicCodeActionParameterValueUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, BinaryExpression.structureTypeName, { start: "7.21.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BinaryExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.BasicJavaActionParameterValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 7.20.0
         */
        static createInBasicJavaActionParameterValueUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, BinaryExpression.structureTypeName, { start: "7.9.0", end: "7.20.0" });
            return internal.instancehelpers.createElement(container, BinaryExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.BinaryRequestHandling element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryRequestHandlingUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, BinaryExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BinaryExpression, "expressionModel", false);
        }
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.ChangeListAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInChangeListActionUnderValueModel(container) {
            internal.createInVersionCheck(container.model, BinaryExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BinaryExpression, "valueModel", false);
        }
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.ChangeVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInChangeVariableActionUnderValueModel(container) {
            internal.createInVersionCheck(container.model, BinaryExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BinaryExpression, "valueModel", false);
        }
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'initialValueModel' property
         * of the parent microflows.CreateVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCreateVariableActionUnderInitialValueModel(container) {
            internal.createInVersionCheck(container.model, BinaryExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BinaryExpression, "initialValueModel", false);
        }
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'limitExpressionModel' property
         * of the parent microflows.CustomRange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCustomRangeUnderLimitExpressionModel(container) {
            internal.createInVersionCheck(container.model, BinaryExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BinaryExpression, "limitExpressionModel", false);
        }
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'offsetExpressionModel' property
         * of the parent microflows.CustomRange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCustomRangeUnderOffsetExpressionModel(container) {
            internal.createInVersionCheck(container.model, BinaryExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BinaryExpression, "offsetExpressionModel", false);
        }
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.DocumentTemplateParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInDocumentTemplateParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, BinaryExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BinaryExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'returnValueModel' property
         * of the parent microflows.EndEvent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInEndEventUnderReturnValueModel(container) {
            internal.createInVersionCheck(container.model, BinaryExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BinaryExpression, "returnValueModel", false);
        }
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.ExpressionListOperation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.3 to 9.7.0
         */
        static createInExpressionListOperationUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, BinaryExpression.structureTypeName, { start: "9.0.3", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BinaryExpression, "expressionModel", false);
        }
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.ExpressionSplitCondition element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInExpressionSplitConditionUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, BinaryExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BinaryExpression, "expressionModel", false);
        }
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.FormDataPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 to 9.7.0
         */
        static createInFormDataPartUnderValueModel(container) {
            internal.createInVersionCheck(container.model, BinaryExpression.structureTypeName, { start: "8.0.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BinaryExpression, "valueModel", false);
        }
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'marginBottomInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginBottomInInchModel(container) {
            internal.createInVersionCheck(container.model, BinaryExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BinaryExpression, "marginBottomInInchModel", false);
        }
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'marginLeftInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginLeftInInchModel(container) {
            internal.createInVersionCheck(container.model, BinaryExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BinaryExpression, "marginLeftInInchModel", false);
        }
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'marginRightInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginRightInInchModel(container) {
            internal.createInVersionCheck(container.model, BinaryExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BinaryExpression, "marginRightInInchModel", false);
        }
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'marginTopInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginTopInInchModel(container) {
            internal.createInVersionCheck(container.model, BinaryExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BinaryExpression, "marginTopInInchModel", false);
        }
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'customLocationModel' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderCustomLocationModel(container) {
            internal.createInVersionCheck(container.model, BinaryExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BinaryExpression, "customLocationModel", false);
        }
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'password' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderPassword(container) {
            internal.createInVersionCheck(container.model, BinaryExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BinaryExpression, "password", false);
        }
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'username' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderUsername(container) {
            internal.createInVersionCheck(container.model, BinaryExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BinaryExpression, "username", false);
        }
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.HttpHeaderEntry element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpHeaderEntryUnderValueModel(container) {
            internal.createInVersionCheck(container.model, BinaryExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BinaryExpression, "valueModel", false);
        }
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.InspectAttribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInInspectAttributeUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, BinaryExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BinaryExpression, "expressionModel", false);
        }
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'nodeModel' property
         * of the parent microflows.LogMessageAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInLogMessageActionUnderNodeModel(container) {
            internal.createInVersionCheck(container.model, BinaryExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BinaryExpression, "nodeModel", false);
        }
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.MemberChange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInMemberChangeUnderValueModel(container) {
            internal.createInVersionCheck(container.model, BinaryExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BinaryExpression, "valueModel", false);
        }
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.MicroflowCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInMicroflowCallParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, BinaryExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BinaryExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.NanoflowCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 to 9.7.0
         */
        static createInNanoflowCallParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, BinaryExpression.structureTypeName, { start: "8.0.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BinaryExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'hostExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderHostExpressionModel(container) {
            internal.createInVersionCheck(container.model, BinaryExpression.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BinaryExpression, "hostExpressionModel", false);
        }
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'passwordExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderPasswordExpressionModel(container) {
            internal.createInVersionCheck(container.model, BinaryExpression.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BinaryExpression, "passwordExpressionModel", false);
        }
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'portExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderPortExpressionModel(container) {
            internal.createInVersionCheck(container.model, BinaryExpression.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BinaryExpression, "portExpressionModel", false);
        }
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'useConfigurationExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderUseConfigurationExpressionModel(container) {
            internal.createInVersionCheck(container.model, BinaryExpression.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BinaryExpression, "useConfigurationExpressionModel", false);
        }
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'usernameExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderUsernameExpressionModel(container) {
            internal.createInVersionCheck(container.model, BinaryExpression.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BinaryExpression, "usernameExpressionModel", false);
        }
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'timeOutModel' property
         * of the parent microflows.RestCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInRestCallActionUnderTimeOutModel(container) {
            internal.createInVersionCheck(container.model, BinaryExpression.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BinaryExpression, "timeOutModel", false);
        }
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.RuleCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInRuleCallParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, BinaryExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BinaryExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.TemplateArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInTemplateArgumentUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, BinaryExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BinaryExpression, "expressionModel", false);
        }
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'timeOutModel' property
         * of the parent microflows.WebServiceCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInWebServiceCallActionUnderTimeOutModel(container) {
            internal.createInVersionCheck(container.model, BinaryExpression.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BinaryExpression, "timeOutModel", false);
        }
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.WebServiceOperationParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInWebServiceOperationParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, BinaryExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BinaryExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'expressionModel' property
         * of the parent pages.ConditionalSettings element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInConditionalSettingsUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, BinaryExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BinaryExpression, "expressionModel", false);
        }
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'expressionModel' property
         * of the parent pages.WidgetValidation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInWidgetValidationUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, BinaryExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BinaryExpression, "expressionModel", false);
        }
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * The new BinaryExpression will be automatically stored in the 'timeoutModel' property
         * of the parent rest.ConsumedODataService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.5.0 to 9.7.0
         */
        static createInConsumedODataServiceUnderTimeoutModel(container) {
            internal.createInVersionCheck(container.model, BinaryExpression.structureTypeName, { start: "8.5.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BinaryExpression, "timeoutModel", false);
        }
        /**
         * Creates and returns a new BinaryExpression instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, BinaryExpression);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.left = NoExpression.create(this.model);
            this.operator = BinaryOperator.None;
            this.right = NoExpression.create(this.model);
        }
    }
    BinaryExpression.structureTypeName = "Expressions$BinaryExpression";
    BinaryExpression.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.9.0",
        deleted: "9.8.0",
        deletionMessage: null,
        properties: {
            left: {
                required: {
                    currentValue: true
                }
            },
            right: {
                required: {
                    currentValue: true
                }
            }
        },
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    expressions.BinaryExpression = BinaryExpression;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.8.0: deleted
     * In version 7.9.0: introduced
     */
    class LiteralExpression extends Expression {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new LiteralExpression() cannot be invoked directly, please use 'model.expressions.createLiteralExpression()'");
            }
        }
        get containerAsBinaryExpression() {
            return super.getContainerAs(BinaryExpression);
        }
        get containerAsFunctionCallExpression() {
            return super.getContainerAs(FunctionCallExpression);
        }
        get containerAsIfExpression() {
            return super.getContainerAs(IfExpression);
        }
        get containerAsParenthesisExpression() {
            return super.getContainerAs(ParenthesisExpression);
        }
        get containerAsUnaryExpression() {
            return super.getContainerAs(UnaryExpression);
        }
        get containerAsAppServiceCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.AppServiceCallParameterMapping);
        }
        get containerAsBasicCodeActionParameterValue() {
            return super.getContainerAs(microflows_1.microflows.BasicCodeActionParameterValue);
        }
        get containerAsBasicJavaActionParameterValue() {
            return super.getContainerAs(microflows_1.microflows.BasicJavaActionParameterValue);
        }
        get containerAsBinaryRequestHandling() {
            return super.getContainerAs(microflows_1.microflows.BinaryRequestHandling);
        }
        get containerAsChangeListAction() {
            return super.getContainerAs(microflows_1.microflows.ChangeListAction);
        }
        get containerAsChangeVariableAction() {
            return super.getContainerAs(microflows_1.microflows.ChangeVariableAction);
        }
        get containerAsCreateVariableAction() {
            return super.getContainerAs(microflows_1.microflows.CreateVariableAction);
        }
        get containerAsCustomRange() {
            return super.getContainerAs(microflows_1.microflows.CustomRange);
        }
        get containerAsDocumentTemplateParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.DocumentTemplateParameterMapping);
        }
        get containerAsEndEvent() {
            return super.getContainerAs(microflows_1.microflows.EndEvent);
        }
        get containerAsExpressionListOperation() {
            return super.getContainerAs(microflows_1.microflows.ExpressionListOperation);
        }
        get containerAsExpressionSplitCondition() {
            return super.getContainerAs(microflows_1.microflows.ExpressionSplitCondition);
        }
        get containerAsFormDataPart() {
            return super.getContainerAs(microflows_1.microflows.FormDataPart);
        }
        get containerAsGenerateDocumentAction() {
            return super.getContainerAs(microflows_1.microflows.GenerateDocumentAction);
        }
        get containerAsHttpConfiguration() {
            return super.getContainerAs(microflows_1.microflows.HttpConfiguration);
        }
        get containerAsHttpHeaderEntry() {
            return super.getContainerAs(microflows_1.microflows.HttpHeaderEntry);
        }
        get containerAsInspectAttribute() {
            return super.getContainerAs(microflows_1.microflows.InspectAttribute);
        }
        get containerAsLogMessageAction() {
            return super.getContainerAs(microflows_1.microflows.LogMessageAction);
        }
        get containerAsMemberChange() {
            return super.getContainerAs(microflows_1.microflows.MemberChange);
        }
        get containerAsMicroflowCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.MicroflowCallParameterMapping);
        }
        get containerAsNanoflowCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.NanoflowCallParameterMapping);
        }
        get containerAsProxyConfiguration() {
            return super.getContainerAs(microflows_1.microflows.ProxyConfiguration);
        }
        get containerAsRestCallAction() {
            return super.getContainerAs(microflows_1.microflows.RestCallAction);
        }
        get containerAsRuleCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.RuleCallParameterMapping);
        }
        get containerAsTemplateArgument() {
            return super.getContainerAs(microflows_1.microflows.TemplateArgument);
        }
        get containerAsWebServiceCallAction() {
            return super.getContainerAs(microflows_1.microflows.WebServiceCallAction);
        }
        get containerAsWebServiceOperationParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.WebServiceOperationParameterMapping);
        }
        get containerAsConditionalSettings() {
            return super.getContainerAs(pages_1.pages.ConditionalSettings);
        }
        get containerAsWidgetValidation() {
            return super.getContainerAs(pages_1.pages.WidgetValidation);
        }
        get containerAsConsumedODataService() {
            return super.getContainerAs(rest_1.rest.ConsumedODataService);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    LiteralExpression.structureTypeName = "Expressions$LiteralExpression";
    LiteralExpression.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.9.0",
        deleted: "9.8.0",
        deletionMessage: null,
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    expressions.LiteralExpression = LiteralExpression;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.8.0: deleted
     * In version 7.9.0: introduced
     */
    class BooleanLiteral extends LiteralExpression {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__value = new internal.PrimitiveProperty(BooleanLiteral, this, "value", false, internal.PrimitiveTypeEnum.Boolean);
            if (arguments.length < 4) {
                throw new Error("new BooleanLiteral() cannot be invoked directly, please use 'model.expressions.createBooleanLiteral()'");
            }
        }
        get containerAsBinaryExpression() {
            return super.getContainerAs(BinaryExpression);
        }
        get containerAsFunctionCallExpression() {
            return super.getContainerAs(FunctionCallExpression);
        }
        get containerAsIfExpression() {
            return super.getContainerAs(IfExpression);
        }
        get containerAsParenthesisExpression() {
            return super.getContainerAs(ParenthesisExpression);
        }
        get containerAsUnaryExpression() {
            return super.getContainerAs(UnaryExpression);
        }
        get containerAsAppServiceCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.AppServiceCallParameterMapping);
        }
        get containerAsBasicCodeActionParameterValue() {
            return super.getContainerAs(microflows_1.microflows.BasicCodeActionParameterValue);
        }
        get containerAsBasicJavaActionParameterValue() {
            return super.getContainerAs(microflows_1.microflows.BasicJavaActionParameterValue);
        }
        get containerAsBinaryRequestHandling() {
            return super.getContainerAs(microflows_1.microflows.BinaryRequestHandling);
        }
        get containerAsChangeListAction() {
            return super.getContainerAs(microflows_1.microflows.ChangeListAction);
        }
        get containerAsChangeVariableAction() {
            return super.getContainerAs(microflows_1.microflows.ChangeVariableAction);
        }
        get containerAsCreateVariableAction() {
            return super.getContainerAs(microflows_1.microflows.CreateVariableAction);
        }
        get containerAsCustomRange() {
            return super.getContainerAs(microflows_1.microflows.CustomRange);
        }
        get containerAsDocumentTemplateParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.DocumentTemplateParameterMapping);
        }
        get containerAsEndEvent() {
            return super.getContainerAs(microflows_1.microflows.EndEvent);
        }
        get containerAsExpressionListOperation() {
            return super.getContainerAs(microflows_1.microflows.ExpressionListOperation);
        }
        get containerAsExpressionSplitCondition() {
            return super.getContainerAs(microflows_1.microflows.ExpressionSplitCondition);
        }
        get containerAsFormDataPart() {
            return super.getContainerAs(microflows_1.microflows.FormDataPart);
        }
        get containerAsGenerateDocumentAction() {
            return super.getContainerAs(microflows_1.microflows.GenerateDocumentAction);
        }
        get containerAsHttpConfiguration() {
            return super.getContainerAs(microflows_1.microflows.HttpConfiguration);
        }
        get containerAsHttpHeaderEntry() {
            return super.getContainerAs(microflows_1.microflows.HttpHeaderEntry);
        }
        get containerAsInspectAttribute() {
            return super.getContainerAs(microflows_1.microflows.InspectAttribute);
        }
        get containerAsLogMessageAction() {
            return super.getContainerAs(microflows_1.microflows.LogMessageAction);
        }
        get containerAsMemberChange() {
            return super.getContainerAs(microflows_1.microflows.MemberChange);
        }
        get containerAsMicroflowCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.MicroflowCallParameterMapping);
        }
        get containerAsNanoflowCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.NanoflowCallParameterMapping);
        }
        get containerAsProxyConfiguration() {
            return super.getContainerAs(microflows_1.microflows.ProxyConfiguration);
        }
        get containerAsRestCallAction() {
            return super.getContainerAs(microflows_1.microflows.RestCallAction);
        }
        get containerAsRuleCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.RuleCallParameterMapping);
        }
        get containerAsTemplateArgument() {
            return super.getContainerAs(microflows_1.microflows.TemplateArgument);
        }
        get containerAsWebServiceCallAction() {
            return super.getContainerAs(microflows_1.microflows.WebServiceCallAction);
        }
        get containerAsWebServiceOperationParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.WebServiceOperationParameterMapping);
        }
        get containerAsConditionalSettings() {
            return super.getContainerAs(pages_1.pages.ConditionalSettings);
        }
        get containerAsWidgetValidation() {
            return super.getContainerAs(pages_1.pages.WidgetValidation);
        }
        get containerAsConsumedODataService() {
            return super.getContainerAs(rest_1.rest.ConsumedODataService);
        }
        get value() {
            return this.__value.get();
        }
        set value(newValue) {
            this.__value.set(newValue);
        }
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'left' property
         * of the parent BinaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryExpressionUnderLeft(container) {
            internal.createInVersionCheck(container.model, BooleanLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BooleanLiteral, "left", false);
        }
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'right' property
         * of the parent BinaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryExpressionUnderRight(container) {
            internal.createInVersionCheck(container.model, BooleanLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BooleanLiteral, "right", false);
        }
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'arguments' property
         * of the parent FunctionCallExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInFunctionCallExpressionUnderArguments(container) {
            internal.createInVersionCheck(container.model, BooleanLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BooleanLiteral, "arguments", true);
        }
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'condition' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderCondition(container) {
            internal.createInVersionCheck(container.model, BooleanLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BooleanLiteral, "condition", false);
        }
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'ifFalse' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderIfFalse(container) {
            internal.createInVersionCheck(container.model, BooleanLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BooleanLiteral, "ifFalse", false);
        }
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'ifTrue' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderIfTrue(container) {
            internal.createInVersionCheck(container.model, BooleanLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BooleanLiteral, "ifTrue", false);
        }
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'expression' property
         * of the parent ParenthesisExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInParenthesisExpressionUnderExpression(container) {
            internal.createInVersionCheck(container.model, BooleanLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BooleanLiteral, "expression", false);
        }
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'expression' property
         * of the parent UnaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInUnaryExpressionUnderExpression(container) {
            internal.createInVersionCheck(container.model, BooleanLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BooleanLiteral, "expression", false);
        }
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.AppServiceCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceCallParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, BooleanLiteral.structureTypeName, { start: "7.9.0", end: "9.0.1" });
            return internal.instancehelpers.createElement(container, BooleanLiteral, "argumentModel", false);
        }
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.BasicCodeActionParameterValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 to 9.7.0
         */
        static createInBasicCodeActionParameterValueUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, BooleanLiteral.structureTypeName, { start: "7.21.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BooleanLiteral, "argumentModel", false);
        }
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.BasicJavaActionParameterValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 7.20.0
         */
        static createInBasicJavaActionParameterValueUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, BooleanLiteral.structureTypeName, { start: "7.9.0", end: "7.20.0" });
            return internal.instancehelpers.createElement(container, BooleanLiteral, "argumentModel", false);
        }
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'expressionModel' property
         * of the parent microflows.BinaryRequestHandling element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryRequestHandlingUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, BooleanLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BooleanLiteral, "expressionModel", false);
        }
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'valueModel' property
         * of the parent microflows.ChangeListAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInChangeListActionUnderValueModel(container) {
            internal.createInVersionCheck(container.model, BooleanLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BooleanLiteral, "valueModel", false);
        }
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'valueModel' property
         * of the parent microflows.ChangeVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInChangeVariableActionUnderValueModel(container) {
            internal.createInVersionCheck(container.model, BooleanLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BooleanLiteral, "valueModel", false);
        }
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'initialValueModel' property
         * of the parent microflows.CreateVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCreateVariableActionUnderInitialValueModel(container) {
            internal.createInVersionCheck(container.model, BooleanLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BooleanLiteral, "initialValueModel", false);
        }
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'limitExpressionModel' property
         * of the parent microflows.CustomRange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCustomRangeUnderLimitExpressionModel(container) {
            internal.createInVersionCheck(container.model, BooleanLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BooleanLiteral, "limitExpressionModel", false);
        }
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'offsetExpressionModel' property
         * of the parent microflows.CustomRange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCustomRangeUnderOffsetExpressionModel(container) {
            internal.createInVersionCheck(container.model, BooleanLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BooleanLiteral, "offsetExpressionModel", false);
        }
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.DocumentTemplateParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInDocumentTemplateParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, BooleanLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BooleanLiteral, "argumentModel", false);
        }
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'returnValueModel' property
         * of the parent microflows.EndEvent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInEndEventUnderReturnValueModel(container) {
            internal.createInVersionCheck(container.model, BooleanLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BooleanLiteral, "returnValueModel", false);
        }
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'expressionModel' property
         * of the parent microflows.ExpressionListOperation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.3 to 9.7.0
         */
        static createInExpressionListOperationUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, BooleanLiteral.structureTypeName, { start: "9.0.3", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BooleanLiteral, "expressionModel", false);
        }
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'expressionModel' property
         * of the parent microflows.ExpressionSplitCondition element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInExpressionSplitConditionUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, BooleanLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BooleanLiteral, "expressionModel", false);
        }
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'valueModel' property
         * of the parent microflows.FormDataPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 to 9.7.0
         */
        static createInFormDataPartUnderValueModel(container) {
            internal.createInVersionCheck(container.model, BooleanLiteral.structureTypeName, { start: "8.0.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BooleanLiteral, "valueModel", false);
        }
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'marginBottomInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginBottomInInchModel(container) {
            internal.createInVersionCheck(container.model, BooleanLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BooleanLiteral, "marginBottomInInchModel", false);
        }
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'marginLeftInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginLeftInInchModel(container) {
            internal.createInVersionCheck(container.model, BooleanLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BooleanLiteral, "marginLeftInInchModel", false);
        }
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'marginRightInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginRightInInchModel(container) {
            internal.createInVersionCheck(container.model, BooleanLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BooleanLiteral, "marginRightInInchModel", false);
        }
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'marginTopInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginTopInInchModel(container) {
            internal.createInVersionCheck(container.model, BooleanLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BooleanLiteral, "marginTopInInchModel", false);
        }
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'customLocationModel' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderCustomLocationModel(container) {
            internal.createInVersionCheck(container.model, BooleanLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BooleanLiteral, "customLocationModel", false);
        }
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'password' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderPassword(container) {
            internal.createInVersionCheck(container.model, BooleanLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BooleanLiteral, "password", false);
        }
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'username' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderUsername(container) {
            internal.createInVersionCheck(container.model, BooleanLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BooleanLiteral, "username", false);
        }
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'valueModel' property
         * of the parent microflows.HttpHeaderEntry element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpHeaderEntryUnderValueModel(container) {
            internal.createInVersionCheck(container.model, BooleanLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BooleanLiteral, "valueModel", false);
        }
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'expressionModel' property
         * of the parent microflows.InspectAttribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInInspectAttributeUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, BooleanLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BooleanLiteral, "expressionModel", false);
        }
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'nodeModel' property
         * of the parent microflows.LogMessageAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInLogMessageActionUnderNodeModel(container) {
            internal.createInVersionCheck(container.model, BooleanLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BooleanLiteral, "nodeModel", false);
        }
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'valueModel' property
         * of the parent microflows.MemberChange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInMemberChangeUnderValueModel(container) {
            internal.createInVersionCheck(container.model, BooleanLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BooleanLiteral, "valueModel", false);
        }
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.MicroflowCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInMicroflowCallParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, BooleanLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BooleanLiteral, "argumentModel", false);
        }
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.NanoflowCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 to 9.7.0
         */
        static createInNanoflowCallParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, BooleanLiteral.structureTypeName, { start: "8.0.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BooleanLiteral, "argumentModel", false);
        }
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'hostExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderHostExpressionModel(container) {
            internal.createInVersionCheck(container.model, BooleanLiteral.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BooleanLiteral, "hostExpressionModel", false);
        }
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'passwordExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderPasswordExpressionModel(container) {
            internal.createInVersionCheck(container.model, BooleanLiteral.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BooleanLiteral, "passwordExpressionModel", false);
        }
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'portExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderPortExpressionModel(container) {
            internal.createInVersionCheck(container.model, BooleanLiteral.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BooleanLiteral, "portExpressionModel", false);
        }
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'useConfigurationExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderUseConfigurationExpressionModel(container) {
            internal.createInVersionCheck(container.model, BooleanLiteral.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BooleanLiteral, "useConfigurationExpressionModel", false);
        }
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'usernameExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderUsernameExpressionModel(container) {
            internal.createInVersionCheck(container.model, BooleanLiteral.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BooleanLiteral, "usernameExpressionModel", false);
        }
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'timeOutModel' property
         * of the parent microflows.RestCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInRestCallActionUnderTimeOutModel(container) {
            internal.createInVersionCheck(container.model, BooleanLiteral.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BooleanLiteral, "timeOutModel", false);
        }
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.RuleCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInRuleCallParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, BooleanLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BooleanLiteral, "argumentModel", false);
        }
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'expressionModel' property
         * of the parent microflows.TemplateArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInTemplateArgumentUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, BooleanLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BooleanLiteral, "expressionModel", false);
        }
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'timeOutModel' property
         * of the parent microflows.WebServiceCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInWebServiceCallActionUnderTimeOutModel(container) {
            internal.createInVersionCheck(container.model, BooleanLiteral.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BooleanLiteral, "timeOutModel", false);
        }
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.WebServiceOperationParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInWebServiceOperationParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, BooleanLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BooleanLiteral, "argumentModel", false);
        }
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'expressionModel' property
         * of the parent pages.ConditionalSettings element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInConditionalSettingsUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, BooleanLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BooleanLiteral, "expressionModel", false);
        }
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'expressionModel' property
         * of the parent pages.WidgetValidation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInWidgetValidationUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, BooleanLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BooleanLiteral, "expressionModel", false);
        }
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * The new BooleanLiteral will be automatically stored in the 'timeoutModel' property
         * of the parent rest.ConsumedODataService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.5.0 to 9.7.0
         */
        static createInConsumedODataServiceUnderTimeoutModel(container) {
            internal.createInVersionCheck(container.model, BooleanLiteral.structureTypeName, { start: "8.5.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, BooleanLiteral, "timeoutModel", false);
        }
        /**
         * Creates and returns a new BooleanLiteral instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, BooleanLiteral);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    BooleanLiteral.structureTypeName = "Expressions$BooleanLiteral";
    BooleanLiteral.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.9.0",
        deleted: "9.8.0",
        deletionMessage: null,
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    expressions.BooleanLiteral = BooleanLiteral;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.8.0: deleted
     * In version 7.9.0: introduced
     */
    class ConstantRefExpression extends Expression {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__constant = new internal.ByNameReferenceProperty(ConstantRefExpression, this, "constant", null, "Constants$Constant");
            if (arguments.length < 4) {
                throw new Error("new ConstantRefExpression() cannot be invoked directly, please use 'model.expressions.createConstantRefExpression()'");
            }
        }
        get containerAsBinaryExpression() {
            return super.getContainerAs(BinaryExpression);
        }
        get containerAsFunctionCallExpression() {
            return super.getContainerAs(FunctionCallExpression);
        }
        get containerAsIfExpression() {
            return super.getContainerAs(IfExpression);
        }
        get containerAsParenthesisExpression() {
            return super.getContainerAs(ParenthesisExpression);
        }
        get containerAsUnaryExpression() {
            return super.getContainerAs(UnaryExpression);
        }
        get containerAsAppServiceCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.AppServiceCallParameterMapping);
        }
        get containerAsBasicCodeActionParameterValue() {
            return super.getContainerAs(microflows_1.microflows.BasicCodeActionParameterValue);
        }
        get containerAsBasicJavaActionParameterValue() {
            return super.getContainerAs(microflows_1.microflows.BasicJavaActionParameterValue);
        }
        get containerAsBinaryRequestHandling() {
            return super.getContainerAs(microflows_1.microflows.BinaryRequestHandling);
        }
        get containerAsChangeListAction() {
            return super.getContainerAs(microflows_1.microflows.ChangeListAction);
        }
        get containerAsChangeVariableAction() {
            return super.getContainerAs(microflows_1.microflows.ChangeVariableAction);
        }
        get containerAsCreateVariableAction() {
            return super.getContainerAs(microflows_1.microflows.CreateVariableAction);
        }
        get containerAsCustomRange() {
            return super.getContainerAs(microflows_1.microflows.CustomRange);
        }
        get containerAsDocumentTemplateParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.DocumentTemplateParameterMapping);
        }
        get containerAsEndEvent() {
            return super.getContainerAs(microflows_1.microflows.EndEvent);
        }
        get containerAsExpressionListOperation() {
            return super.getContainerAs(microflows_1.microflows.ExpressionListOperation);
        }
        get containerAsExpressionSplitCondition() {
            return super.getContainerAs(microflows_1.microflows.ExpressionSplitCondition);
        }
        get containerAsFormDataPart() {
            return super.getContainerAs(microflows_1.microflows.FormDataPart);
        }
        get containerAsGenerateDocumentAction() {
            return super.getContainerAs(microflows_1.microflows.GenerateDocumentAction);
        }
        get containerAsHttpConfiguration() {
            return super.getContainerAs(microflows_1.microflows.HttpConfiguration);
        }
        get containerAsHttpHeaderEntry() {
            return super.getContainerAs(microflows_1.microflows.HttpHeaderEntry);
        }
        get containerAsInspectAttribute() {
            return super.getContainerAs(microflows_1.microflows.InspectAttribute);
        }
        get containerAsLogMessageAction() {
            return super.getContainerAs(microflows_1.microflows.LogMessageAction);
        }
        get containerAsMemberChange() {
            return super.getContainerAs(microflows_1.microflows.MemberChange);
        }
        get containerAsMicroflowCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.MicroflowCallParameterMapping);
        }
        get containerAsNanoflowCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.NanoflowCallParameterMapping);
        }
        get containerAsProxyConfiguration() {
            return super.getContainerAs(microflows_1.microflows.ProxyConfiguration);
        }
        get containerAsRestCallAction() {
            return super.getContainerAs(microflows_1.microflows.RestCallAction);
        }
        get containerAsRuleCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.RuleCallParameterMapping);
        }
        get containerAsTemplateArgument() {
            return super.getContainerAs(microflows_1.microflows.TemplateArgument);
        }
        get containerAsWebServiceCallAction() {
            return super.getContainerAs(microflows_1.microflows.WebServiceCallAction);
        }
        get containerAsWebServiceOperationParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.WebServiceOperationParameterMapping);
        }
        get containerAsConditionalSettings() {
            return super.getContainerAs(pages_1.pages.ConditionalSettings);
        }
        get containerAsWidgetValidation() {
            return super.getContainerAs(pages_1.pages.WidgetValidation);
        }
        get containerAsConsumedODataService() {
            return super.getContainerAs(rest_1.rest.ConsumedODataService);
        }
        get constant() {
            return this.__constant.get();
        }
        set constant(newValue) {
            this.__constant.set(newValue);
        }
        get constantQualifiedName() {
            return this.__constant.qualifiedName();
        }
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'left' property
         * of the parent BinaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryExpressionUnderLeft(container) {
            internal.createInVersionCheck(container.model, ConstantRefExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ConstantRefExpression, "left", false);
        }
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'right' property
         * of the parent BinaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryExpressionUnderRight(container) {
            internal.createInVersionCheck(container.model, ConstantRefExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ConstantRefExpression, "right", false);
        }
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'arguments' property
         * of the parent FunctionCallExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInFunctionCallExpressionUnderArguments(container) {
            internal.createInVersionCheck(container.model, ConstantRefExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ConstantRefExpression, "arguments", true);
        }
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'condition' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderCondition(container) {
            internal.createInVersionCheck(container.model, ConstantRefExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ConstantRefExpression, "condition", false);
        }
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'ifFalse' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderIfFalse(container) {
            internal.createInVersionCheck(container.model, ConstantRefExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ConstantRefExpression, "ifFalse", false);
        }
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'ifTrue' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderIfTrue(container) {
            internal.createInVersionCheck(container.model, ConstantRefExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ConstantRefExpression, "ifTrue", false);
        }
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'expression' property
         * of the parent ParenthesisExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInParenthesisExpressionUnderExpression(container) {
            internal.createInVersionCheck(container.model, ConstantRefExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ConstantRefExpression, "expression", false);
        }
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'expression' property
         * of the parent UnaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInUnaryExpressionUnderExpression(container) {
            internal.createInVersionCheck(container.model, ConstantRefExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ConstantRefExpression, "expression", false);
        }
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.AppServiceCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceCallParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, ConstantRefExpression.structureTypeName, { start: "7.9.0", end: "9.0.1" });
            return internal.instancehelpers.createElement(container, ConstantRefExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.BasicCodeActionParameterValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 to 9.7.0
         */
        static createInBasicCodeActionParameterValueUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, ConstantRefExpression.structureTypeName, { start: "7.21.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ConstantRefExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.BasicJavaActionParameterValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 7.20.0
         */
        static createInBasicJavaActionParameterValueUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, ConstantRefExpression.structureTypeName, { start: "7.9.0", end: "7.20.0" });
            return internal.instancehelpers.createElement(container, ConstantRefExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.BinaryRequestHandling element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryRequestHandlingUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, ConstantRefExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ConstantRefExpression, "expressionModel", false);
        }
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.ChangeListAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInChangeListActionUnderValueModel(container) {
            internal.createInVersionCheck(container.model, ConstantRefExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ConstantRefExpression, "valueModel", false);
        }
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.ChangeVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInChangeVariableActionUnderValueModel(container) {
            internal.createInVersionCheck(container.model, ConstantRefExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ConstantRefExpression, "valueModel", false);
        }
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'initialValueModel' property
         * of the parent microflows.CreateVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCreateVariableActionUnderInitialValueModel(container) {
            internal.createInVersionCheck(container.model, ConstantRefExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ConstantRefExpression, "initialValueModel", false);
        }
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'limitExpressionModel' property
         * of the parent microflows.CustomRange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCustomRangeUnderLimitExpressionModel(container) {
            internal.createInVersionCheck(container.model, ConstantRefExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ConstantRefExpression, "limitExpressionModel", false);
        }
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'offsetExpressionModel' property
         * of the parent microflows.CustomRange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCustomRangeUnderOffsetExpressionModel(container) {
            internal.createInVersionCheck(container.model, ConstantRefExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ConstantRefExpression, "offsetExpressionModel", false);
        }
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.DocumentTemplateParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInDocumentTemplateParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, ConstantRefExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ConstantRefExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'returnValueModel' property
         * of the parent microflows.EndEvent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInEndEventUnderReturnValueModel(container) {
            internal.createInVersionCheck(container.model, ConstantRefExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ConstantRefExpression, "returnValueModel", false);
        }
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.ExpressionListOperation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.3 to 9.7.0
         */
        static createInExpressionListOperationUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, ConstantRefExpression.structureTypeName, { start: "9.0.3", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ConstantRefExpression, "expressionModel", false);
        }
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.ExpressionSplitCondition element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInExpressionSplitConditionUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, ConstantRefExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ConstantRefExpression, "expressionModel", false);
        }
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.FormDataPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 to 9.7.0
         */
        static createInFormDataPartUnderValueModel(container) {
            internal.createInVersionCheck(container.model, ConstantRefExpression.structureTypeName, { start: "8.0.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ConstantRefExpression, "valueModel", false);
        }
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'marginBottomInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginBottomInInchModel(container) {
            internal.createInVersionCheck(container.model, ConstantRefExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ConstantRefExpression, "marginBottomInInchModel", false);
        }
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'marginLeftInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginLeftInInchModel(container) {
            internal.createInVersionCheck(container.model, ConstantRefExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ConstantRefExpression, "marginLeftInInchModel", false);
        }
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'marginRightInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginRightInInchModel(container) {
            internal.createInVersionCheck(container.model, ConstantRefExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ConstantRefExpression, "marginRightInInchModel", false);
        }
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'marginTopInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginTopInInchModel(container) {
            internal.createInVersionCheck(container.model, ConstantRefExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ConstantRefExpression, "marginTopInInchModel", false);
        }
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'customLocationModel' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderCustomLocationModel(container) {
            internal.createInVersionCheck(container.model, ConstantRefExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ConstantRefExpression, "customLocationModel", false);
        }
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'password' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderPassword(container) {
            internal.createInVersionCheck(container.model, ConstantRefExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ConstantRefExpression, "password", false);
        }
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'username' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderUsername(container) {
            internal.createInVersionCheck(container.model, ConstantRefExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ConstantRefExpression, "username", false);
        }
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.HttpHeaderEntry element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpHeaderEntryUnderValueModel(container) {
            internal.createInVersionCheck(container.model, ConstantRefExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ConstantRefExpression, "valueModel", false);
        }
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.InspectAttribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInInspectAttributeUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, ConstantRefExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ConstantRefExpression, "expressionModel", false);
        }
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'nodeModel' property
         * of the parent microflows.LogMessageAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInLogMessageActionUnderNodeModel(container) {
            internal.createInVersionCheck(container.model, ConstantRefExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ConstantRefExpression, "nodeModel", false);
        }
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.MemberChange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInMemberChangeUnderValueModel(container) {
            internal.createInVersionCheck(container.model, ConstantRefExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ConstantRefExpression, "valueModel", false);
        }
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.MicroflowCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInMicroflowCallParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, ConstantRefExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ConstantRefExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.NanoflowCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 to 9.7.0
         */
        static createInNanoflowCallParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, ConstantRefExpression.structureTypeName, { start: "8.0.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ConstantRefExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'hostExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderHostExpressionModel(container) {
            internal.createInVersionCheck(container.model, ConstantRefExpression.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ConstantRefExpression, "hostExpressionModel", false);
        }
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'passwordExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderPasswordExpressionModel(container) {
            internal.createInVersionCheck(container.model, ConstantRefExpression.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ConstantRefExpression, "passwordExpressionModel", false);
        }
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'portExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderPortExpressionModel(container) {
            internal.createInVersionCheck(container.model, ConstantRefExpression.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ConstantRefExpression, "portExpressionModel", false);
        }
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'useConfigurationExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderUseConfigurationExpressionModel(container) {
            internal.createInVersionCheck(container.model, ConstantRefExpression.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ConstantRefExpression, "useConfigurationExpressionModel", false);
        }
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'usernameExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderUsernameExpressionModel(container) {
            internal.createInVersionCheck(container.model, ConstantRefExpression.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ConstantRefExpression, "usernameExpressionModel", false);
        }
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'timeOutModel' property
         * of the parent microflows.RestCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInRestCallActionUnderTimeOutModel(container) {
            internal.createInVersionCheck(container.model, ConstantRefExpression.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ConstantRefExpression, "timeOutModel", false);
        }
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.RuleCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInRuleCallParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, ConstantRefExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ConstantRefExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.TemplateArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInTemplateArgumentUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, ConstantRefExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ConstantRefExpression, "expressionModel", false);
        }
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'timeOutModel' property
         * of the parent microflows.WebServiceCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInWebServiceCallActionUnderTimeOutModel(container) {
            internal.createInVersionCheck(container.model, ConstantRefExpression.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ConstantRefExpression, "timeOutModel", false);
        }
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.WebServiceOperationParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInWebServiceOperationParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, ConstantRefExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ConstantRefExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'expressionModel' property
         * of the parent pages.ConditionalSettings element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInConditionalSettingsUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, ConstantRefExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ConstantRefExpression, "expressionModel", false);
        }
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'expressionModel' property
         * of the parent pages.WidgetValidation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInWidgetValidationUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, ConstantRefExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ConstantRefExpression, "expressionModel", false);
        }
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * The new ConstantRefExpression will be automatically stored in the 'timeoutModel' property
         * of the parent rest.ConsumedODataService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.5.0 to 9.7.0
         */
        static createInConsumedODataServiceUnderTimeoutModel(container) {
            internal.createInVersionCheck(container.model, ConstantRefExpression.structureTypeName, { start: "8.5.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ConstantRefExpression, "timeoutModel", false);
        }
        /**
         * Creates and returns a new ConstantRefExpression instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ConstantRefExpression);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ConstantRefExpression.structureTypeName = "Expressions$ConstantRefExpression";
    ConstantRefExpression.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.9.0",
        deleted: "9.8.0",
        deletionMessage: null,
        properties: {
            constant: {
                required: {
                    currentValue: true
                }
            }
        },
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    expressions.ConstantRefExpression = ConstantRefExpression;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.8.0: deleted
     * In version 7.9.0: introduced
     */
    class EmptyLiteral extends LiteralExpression {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new EmptyLiteral() cannot be invoked directly, please use 'model.expressions.createEmptyLiteral()'");
            }
        }
        get containerAsBinaryExpression() {
            return super.getContainerAs(BinaryExpression);
        }
        get containerAsFunctionCallExpression() {
            return super.getContainerAs(FunctionCallExpression);
        }
        get containerAsIfExpression() {
            return super.getContainerAs(IfExpression);
        }
        get containerAsParenthesisExpression() {
            return super.getContainerAs(ParenthesisExpression);
        }
        get containerAsUnaryExpression() {
            return super.getContainerAs(UnaryExpression);
        }
        get containerAsAppServiceCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.AppServiceCallParameterMapping);
        }
        get containerAsBasicCodeActionParameterValue() {
            return super.getContainerAs(microflows_1.microflows.BasicCodeActionParameterValue);
        }
        get containerAsBasicJavaActionParameterValue() {
            return super.getContainerAs(microflows_1.microflows.BasicJavaActionParameterValue);
        }
        get containerAsBinaryRequestHandling() {
            return super.getContainerAs(microflows_1.microflows.BinaryRequestHandling);
        }
        get containerAsChangeListAction() {
            return super.getContainerAs(microflows_1.microflows.ChangeListAction);
        }
        get containerAsChangeVariableAction() {
            return super.getContainerAs(microflows_1.microflows.ChangeVariableAction);
        }
        get containerAsCreateVariableAction() {
            return super.getContainerAs(microflows_1.microflows.CreateVariableAction);
        }
        get containerAsCustomRange() {
            return super.getContainerAs(microflows_1.microflows.CustomRange);
        }
        get containerAsDocumentTemplateParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.DocumentTemplateParameterMapping);
        }
        get containerAsEndEvent() {
            return super.getContainerAs(microflows_1.microflows.EndEvent);
        }
        get containerAsExpressionListOperation() {
            return super.getContainerAs(microflows_1.microflows.ExpressionListOperation);
        }
        get containerAsExpressionSplitCondition() {
            return super.getContainerAs(microflows_1.microflows.ExpressionSplitCondition);
        }
        get containerAsFormDataPart() {
            return super.getContainerAs(microflows_1.microflows.FormDataPart);
        }
        get containerAsGenerateDocumentAction() {
            return super.getContainerAs(microflows_1.microflows.GenerateDocumentAction);
        }
        get containerAsHttpConfiguration() {
            return super.getContainerAs(microflows_1.microflows.HttpConfiguration);
        }
        get containerAsHttpHeaderEntry() {
            return super.getContainerAs(microflows_1.microflows.HttpHeaderEntry);
        }
        get containerAsInspectAttribute() {
            return super.getContainerAs(microflows_1.microflows.InspectAttribute);
        }
        get containerAsLogMessageAction() {
            return super.getContainerAs(microflows_1.microflows.LogMessageAction);
        }
        get containerAsMemberChange() {
            return super.getContainerAs(microflows_1.microflows.MemberChange);
        }
        get containerAsMicroflowCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.MicroflowCallParameterMapping);
        }
        get containerAsNanoflowCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.NanoflowCallParameterMapping);
        }
        get containerAsProxyConfiguration() {
            return super.getContainerAs(microflows_1.microflows.ProxyConfiguration);
        }
        get containerAsRestCallAction() {
            return super.getContainerAs(microflows_1.microflows.RestCallAction);
        }
        get containerAsRuleCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.RuleCallParameterMapping);
        }
        get containerAsTemplateArgument() {
            return super.getContainerAs(microflows_1.microflows.TemplateArgument);
        }
        get containerAsWebServiceCallAction() {
            return super.getContainerAs(microflows_1.microflows.WebServiceCallAction);
        }
        get containerAsWebServiceOperationParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.WebServiceOperationParameterMapping);
        }
        get containerAsConditionalSettings() {
            return super.getContainerAs(pages_1.pages.ConditionalSettings);
        }
        get containerAsWidgetValidation() {
            return super.getContainerAs(pages_1.pages.WidgetValidation);
        }
        get containerAsConsumedODataService() {
            return super.getContainerAs(rest_1.rest.ConsumedODataService);
        }
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'left' property
         * of the parent BinaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryExpressionUnderLeft(container) {
            internal.createInVersionCheck(container.model, EmptyLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, EmptyLiteral, "left", false);
        }
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'right' property
         * of the parent BinaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryExpressionUnderRight(container) {
            internal.createInVersionCheck(container.model, EmptyLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, EmptyLiteral, "right", false);
        }
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'arguments' property
         * of the parent FunctionCallExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInFunctionCallExpressionUnderArguments(container) {
            internal.createInVersionCheck(container.model, EmptyLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, EmptyLiteral, "arguments", true);
        }
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'condition' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderCondition(container) {
            internal.createInVersionCheck(container.model, EmptyLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, EmptyLiteral, "condition", false);
        }
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'ifFalse' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderIfFalse(container) {
            internal.createInVersionCheck(container.model, EmptyLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, EmptyLiteral, "ifFalse", false);
        }
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'ifTrue' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderIfTrue(container) {
            internal.createInVersionCheck(container.model, EmptyLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, EmptyLiteral, "ifTrue", false);
        }
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'expression' property
         * of the parent ParenthesisExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInParenthesisExpressionUnderExpression(container) {
            internal.createInVersionCheck(container.model, EmptyLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, EmptyLiteral, "expression", false);
        }
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'expression' property
         * of the parent UnaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInUnaryExpressionUnderExpression(container) {
            internal.createInVersionCheck(container.model, EmptyLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, EmptyLiteral, "expression", false);
        }
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.AppServiceCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceCallParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, EmptyLiteral.structureTypeName, { start: "7.9.0", end: "9.0.1" });
            return internal.instancehelpers.createElement(container, EmptyLiteral, "argumentModel", false);
        }
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.BasicCodeActionParameterValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 to 9.7.0
         */
        static createInBasicCodeActionParameterValueUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, EmptyLiteral.structureTypeName, { start: "7.21.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, EmptyLiteral, "argumentModel", false);
        }
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.BasicJavaActionParameterValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 7.20.0
         */
        static createInBasicJavaActionParameterValueUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, EmptyLiteral.structureTypeName, { start: "7.9.0", end: "7.20.0" });
            return internal.instancehelpers.createElement(container, EmptyLiteral, "argumentModel", false);
        }
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'expressionModel' property
         * of the parent microflows.BinaryRequestHandling element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryRequestHandlingUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, EmptyLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, EmptyLiteral, "expressionModel", false);
        }
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'valueModel' property
         * of the parent microflows.ChangeListAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInChangeListActionUnderValueModel(container) {
            internal.createInVersionCheck(container.model, EmptyLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, EmptyLiteral, "valueModel", false);
        }
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'valueModel' property
         * of the parent microflows.ChangeVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInChangeVariableActionUnderValueModel(container) {
            internal.createInVersionCheck(container.model, EmptyLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, EmptyLiteral, "valueModel", false);
        }
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'initialValueModel' property
         * of the parent microflows.CreateVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCreateVariableActionUnderInitialValueModel(container) {
            internal.createInVersionCheck(container.model, EmptyLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, EmptyLiteral, "initialValueModel", false);
        }
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'limitExpressionModel' property
         * of the parent microflows.CustomRange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCustomRangeUnderLimitExpressionModel(container) {
            internal.createInVersionCheck(container.model, EmptyLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, EmptyLiteral, "limitExpressionModel", false);
        }
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'offsetExpressionModel' property
         * of the parent microflows.CustomRange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCustomRangeUnderOffsetExpressionModel(container) {
            internal.createInVersionCheck(container.model, EmptyLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, EmptyLiteral, "offsetExpressionModel", false);
        }
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.DocumentTemplateParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInDocumentTemplateParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, EmptyLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, EmptyLiteral, "argumentModel", false);
        }
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'returnValueModel' property
         * of the parent microflows.EndEvent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInEndEventUnderReturnValueModel(container) {
            internal.createInVersionCheck(container.model, EmptyLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, EmptyLiteral, "returnValueModel", false);
        }
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'expressionModel' property
         * of the parent microflows.ExpressionListOperation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.3 to 9.7.0
         */
        static createInExpressionListOperationUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, EmptyLiteral.structureTypeName, { start: "9.0.3", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, EmptyLiteral, "expressionModel", false);
        }
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'expressionModel' property
         * of the parent microflows.ExpressionSplitCondition element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInExpressionSplitConditionUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, EmptyLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, EmptyLiteral, "expressionModel", false);
        }
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'valueModel' property
         * of the parent microflows.FormDataPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 to 9.7.0
         */
        static createInFormDataPartUnderValueModel(container) {
            internal.createInVersionCheck(container.model, EmptyLiteral.structureTypeName, { start: "8.0.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, EmptyLiteral, "valueModel", false);
        }
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'marginBottomInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginBottomInInchModel(container) {
            internal.createInVersionCheck(container.model, EmptyLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, EmptyLiteral, "marginBottomInInchModel", false);
        }
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'marginLeftInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginLeftInInchModel(container) {
            internal.createInVersionCheck(container.model, EmptyLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, EmptyLiteral, "marginLeftInInchModel", false);
        }
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'marginRightInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginRightInInchModel(container) {
            internal.createInVersionCheck(container.model, EmptyLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, EmptyLiteral, "marginRightInInchModel", false);
        }
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'marginTopInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginTopInInchModel(container) {
            internal.createInVersionCheck(container.model, EmptyLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, EmptyLiteral, "marginTopInInchModel", false);
        }
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'customLocationModel' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderCustomLocationModel(container) {
            internal.createInVersionCheck(container.model, EmptyLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, EmptyLiteral, "customLocationModel", false);
        }
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'password' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderPassword(container) {
            internal.createInVersionCheck(container.model, EmptyLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, EmptyLiteral, "password", false);
        }
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'username' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderUsername(container) {
            internal.createInVersionCheck(container.model, EmptyLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, EmptyLiteral, "username", false);
        }
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'valueModel' property
         * of the parent microflows.HttpHeaderEntry element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpHeaderEntryUnderValueModel(container) {
            internal.createInVersionCheck(container.model, EmptyLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, EmptyLiteral, "valueModel", false);
        }
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'expressionModel' property
         * of the parent microflows.InspectAttribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInInspectAttributeUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, EmptyLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, EmptyLiteral, "expressionModel", false);
        }
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'nodeModel' property
         * of the parent microflows.LogMessageAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInLogMessageActionUnderNodeModel(container) {
            internal.createInVersionCheck(container.model, EmptyLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, EmptyLiteral, "nodeModel", false);
        }
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'valueModel' property
         * of the parent microflows.MemberChange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInMemberChangeUnderValueModel(container) {
            internal.createInVersionCheck(container.model, EmptyLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, EmptyLiteral, "valueModel", false);
        }
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.MicroflowCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInMicroflowCallParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, EmptyLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, EmptyLiteral, "argumentModel", false);
        }
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.NanoflowCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 to 9.7.0
         */
        static createInNanoflowCallParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, EmptyLiteral.structureTypeName, { start: "8.0.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, EmptyLiteral, "argumentModel", false);
        }
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'hostExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderHostExpressionModel(container) {
            internal.createInVersionCheck(container.model, EmptyLiteral.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, EmptyLiteral, "hostExpressionModel", false);
        }
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'passwordExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderPasswordExpressionModel(container) {
            internal.createInVersionCheck(container.model, EmptyLiteral.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, EmptyLiteral, "passwordExpressionModel", false);
        }
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'portExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderPortExpressionModel(container) {
            internal.createInVersionCheck(container.model, EmptyLiteral.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, EmptyLiteral, "portExpressionModel", false);
        }
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'useConfigurationExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderUseConfigurationExpressionModel(container) {
            internal.createInVersionCheck(container.model, EmptyLiteral.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, EmptyLiteral, "useConfigurationExpressionModel", false);
        }
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'usernameExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderUsernameExpressionModel(container) {
            internal.createInVersionCheck(container.model, EmptyLiteral.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, EmptyLiteral, "usernameExpressionModel", false);
        }
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'timeOutModel' property
         * of the parent microflows.RestCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInRestCallActionUnderTimeOutModel(container) {
            internal.createInVersionCheck(container.model, EmptyLiteral.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, EmptyLiteral, "timeOutModel", false);
        }
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.RuleCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInRuleCallParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, EmptyLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, EmptyLiteral, "argumentModel", false);
        }
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'expressionModel' property
         * of the parent microflows.TemplateArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInTemplateArgumentUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, EmptyLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, EmptyLiteral, "expressionModel", false);
        }
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'timeOutModel' property
         * of the parent microflows.WebServiceCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInWebServiceCallActionUnderTimeOutModel(container) {
            internal.createInVersionCheck(container.model, EmptyLiteral.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, EmptyLiteral, "timeOutModel", false);
        }
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.WebServiceOperationParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInWebServiceOperationParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, EmptyLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, EmptyLiteral, "argumentModel", false);
        }
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'expressionModel' property
         * of the parent pages.ConditionalSettings element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInConditionalSettingsUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, EmptyLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, EmptyLiteral, "expressionModel", false);
        }
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'expressionModel' property
         * of the parent pages.WidgetValidation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInWidgetValidationUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, EmptyLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, EmptyLiteral, "expressionModel", false);
        }
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * The new EmptyLiteral will be automatically stored in the 'timeoutModel' property
         * of the parent rest.ConsumedODataService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.5.0 to 9.7.0
         */
        static createInConsumedODataServiceUnderTimeoutModel(container) {
            internal.createInVersionCheck(container.model, EmptyLiteral.structureTypeName, { start: "8.5.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, EmptyLiteral, "timeoutModel", false);
        }
        /**
         * Creates and returns a new EmptyLiteral instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, EmptyLiteral);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    EmptyLiteral.structureTypeName = "Expressions$EmptyLiteral";
    EmptyLiteral.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.9.0",
        deleted: "9.8.0",
        deletionMessage: null,
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    expressions.EmptyLiteral = EmptyLiteral;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.8.0: deleted
     * In version 7.9.0: introduced
     */
    class EnumerationValueRefExpression extends Expression {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__value = new internal.ByNameReferenceProperty(EnumerationValueRefExpression, this, "value", null, "Enumerations$EnumerationValue");
            if (arguments.length < 4) {
                throw new Error("new EnumerationValueRefExpression() cannot be invoked directly, please use 'model.expressions.createEnumerationValueRefExpression()'");
            }
        }
        get containerAsBinaryExpression() {
            return super.getContainerAs(BinaryExpression);
        }
        get containerAsFunctionCallExpression() {
            return super.getContainerAs(FunctionCallExpression);
        }
        get containerAsIfExpression() {
            return super.getContainerAs(IfExpression);
        }
        get containerAsParenthesisExpression() {
            return super.getContainerAs(ParenthesisExpression);
        }
        get containerAsUnaryExpression() {
            return super.getContainerAs(UnaryExpression);
        }
        get containerAsAppServiceCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.AppServiceCallParameterMapping);
        }
        get containerAsBasicCodeActionParameterValue() {
            return super.getContainerAs(microflows_1.microflows.BasicCodeActionParameterValue);
        }
        get containerAsBasicJavaActionParameterValue() {
            return super.getContainerAs(microflows_1.microflows.BasicJavaActionParameterValue);
        }
        get containerAsBinaryRequestHandling() {
            return super.getContainerAs(microflows_1.microflows.BinaryRequestHandling);
        }
        get containerAsChangeListAction() {
            return super.getContainerAs(microflows_1.microflows.ChangeListAction);
        }
        get containerAsChangeVariableAction() {
            return super.getContainerAs(microflows_1.microflows.ChangeVariableAction);
        }
        get containerAsCreateVariableAction() {
            return super.getContainerAs(microflows_1.microflows.CreateVariableAction);
        }
        get containerAsCustomRange() {
            return super.getContainerAs(microflows_1.microflows.CustomRange);
        }
        get containerAsDocumentTemplateParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.DocumentTemplateParameterMapping);
        }
        get containerAsEndEvent() {
            return super.getContainerAs(microflows_1.microflows.EndEvent);
        }
        get containerAsExpressionListOperation() {
            return super.getContainerAs(microflows_1.microflows.ExpressionListOperation);
        }
        get containerAsExpressionSplitCondition() {
            return super.getContainerAs(microflows_1.microflows.ExpressionSplitCondition);
        }
        get containerAsFormDataPart() {
            return super.getContainerAs(microflows_1.microflows.FormDataPart);
        }
        get containerAsGenerateDocumentAction() {
            return super.getContainerAs(microflows_1.microflows.GenerateDocumentAction);
        }
        get containerAsHttpConfiguration() {
            return super.getContainerAs(microflows_1.microflows.HttpConfiguration);
        }
        get containerAsHttpHeaderEntry() {
            return super.getContainerAs(microflows_1.microflows.HttpHeaderEntry);
        }
        get containerAsInspectAttribute() {
            return super.getContainerAs(microflows_1.microflows.InspectAttribute);
        }
        get containerAsLogMessageAction() {
            return super.getContainerAs(microflows_1.microflows.LogMessageAction);
        }
        get containerAsMemberChange() {
            return super.getContainerAs(microflows_1.microflows.MemberChange);
        }
        get containerAsMicroflowCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.MicroflowCallParameterMapping);
        }
        get containerAsNanoflowCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.NanoflowCallParameterMapping);
        }
        get containerAsProxyConfiguration() {
            return super.getContainerAs(microflows_1.microflows.ProxyConfiguration);
        }
        get containerAsRestCallAction() {
            return super.getContainerAs(microflows_1.microflows.RestCallAction);
        }
        get containerAsRuleCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.RuleCallParameterMapping);
        }
        get containerAsTemplateArgument() {
            return super.getContainerAs(microflows_1.microflows.TemplateArgument);
        }
        get containerAsWebServiceCallAction() {
            return super.getContainerAs(microflows_1.microflows.WebServiceCallAction);
        }
        get containerAsWebServiceOperationParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.WebServiceOperationParameterMapping);
        }
        get containerAsConditionalSettings() {
            return super.getContainerAs(pages_1.pages.ConditionalSettings);
        }
        get containerAsWidgetValidation() {
            return super.getContainerAs(pages_1.pages.WidgetValidation);
        }
        get containerAsConsumedODataService() {
            return super.getContainerAs(rest_1.rest.ConsumedODataService);
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
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'left' property
         * of the parent BinaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryExpressionUnderLeft(container) {
            internal.createInVersionCheck(container.model, EnumerationValueRefExpression.structureTypeName, {
                start: "7.9.0",
                end: "9.7.0"
            });
            return internal.instancehelpers.createElement(container, EnumerationValueRefExpression, "left", false);
        }
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'right' property
         * of the parent BinaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryExpressionUnderRight(container) {
            internal.createInVersionCheck(container.model, EnumerationValueRefExpression.structureTypeName, {
                start: "7.9.0",
                end: "9.7.0"
            });
            return internal.instancehelpers.createElement(container, EnumerationValueRefExpression, "right", false);
        }
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'arguments' property
         * of the parent FunctionCallExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInFunctionCallExpressionUnderArguments(container) {
            internal.createInVersionCheck(container.model, EnumerationValueRefExpression.structureTypeName, {
                start: "7.9.0",
                end: "9.7.0"
            });
            return internal.instancehelpers.createElement(container, EnumerationValueRefExpression, "arguments", true);
        }
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'condition' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderCondition(container) {
            internal.createInVersionCheck(container.model, EnumerationValueRefExpression.structureTypeName, {
                start: "7.9.0",
                end: "9.7.0"
            });
            return internal.instancehelpers.createElement(container, EnumerationValueRefExpression, "condition", false);
        }
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'ifFalse' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderIfFalse(container) {
            internal.createInVersionCheck(container.model, EnumerationValueRefExpression.structureTypeName, {
                start: "7.9.0",
                end: "9.7.0"
            });
            return internal.instancehelpers.createElement(container, EnumerationValueRefExpression, "ifFalse", false);
        }
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'ifTrue' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderIfTrue(container) {
            internal.createInVersionCheck(container.model, EnumerationValueRefExpression.structureTypeName, {
                start: "7.9.0",
                end: "9.7.0"
            });
            return internal.instancehelpers.createElement(container, EnumerationValueRefExpression, "ifTrue", false);
        }
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'expression' property
         * of the parent ParenthesisExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInParenthesisExpressionUnderExpression(container) {
            internal.createInVersionCheck(container.model, EnumerationValueRefExpression.structureTypeName, {
                start: "7.9.0",
                end: "9.7.0"
            });
            return internal.instancehelpers.createElement(container, EnumerationValueRefExpression, "expression", false);
        }
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'expression' property
         * of the parent UnaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInUnaryExpressionUnderExpression(container) {
            internal.createInVersionCheck(container.model, EnumerationValueRefExpression.structureTypeName, {
                start: "7.9.0",
                end: "9.7.0"
            });
            return internal.instancehelpers.createElement(container, EnumerationValueRefExpression, "expression", false);
        }
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.AppServiceCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceCallParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, EnumerationValueRefExpression.structureTypeName, {
                start: "7.9.0",
                end: "9.0.1"
            });
            return internal.instancehelpers.createElement(container, EnumerationValueRefExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.BasicCodeActionParameterValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 to 9.7.0
         */
        static createInBasicCodeActionParameterValueUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, EnumerationValueRefExpression.structureTypeName, {
                start: "7.21.0",
                end: "9.7.0"
            });
            return internal.instancehelpers.createElement(container, EnumerationValueRefExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.BasicJavaActionParameterValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 7.20.0
         */
        static createInBasicJavaActionParameterValueUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, EnumerationValueRefExpression.structureTypeName, {
                start: "7.9.0",
                end: "7.20.0"
            });
            return internal.instancehelpers.createElement(container, EnumerationValueRefExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.BinaryRequestHandling element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryRequestHandlingUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, EnumerationValueRefExpression.structureTypeName, {
                start: "7.9.0",
                end: "9.7.0"
            });
            return internal.instancehelpers.createElement(container, EnumerationValueRefExpression, "expressionModel", false);
        }
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.ChangeListAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInChangeListActionUnderValueModel(container) {
            internal.createInVersionCheck(container.model, EnumerationValueRefExpression.structureTypeName, {
                start: "7.9.0",
                end: "9.7.0"
            });
            return internal.instancehelpers.createElement(container, EnumerationValueRefExpression, "valueModel", false);
        }
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.ChangeVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInChangeVariableActionUnderValueModel(container) {
            internal.createInVersionCheck(container.model, EnumerationValueRefExpression.structureTypeName, {
                start: "7.9.0",
                end: "9.7.0"
            });
            return internal.instancehelpers.createElement(container, EnumerationValueRefExpression, "valueModel", false);
        }
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'initialValueModel' property
         * of the parent microflows.CreateVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCreateVariableActionUnderInitialValueModel(container) {
            internal.createInVersionCheck(container.model, EnumerationValueRefExpression.structureTypeName, {
                start: "7.9.0",
                end: "9.7.0"
            });
            return internal.instancehelpers.createElement(container, EnumerationValueRefExpression, "initialValueModel", false);
        }
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'limitExpressionModel' property
         * of the parent microflows.CustomRange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCustomRangeUnderLimitExpressionModel(container) {
            internal.createInVersionCheck(container.model, EnumerationValueRefExpression.structureTypeName, {
                start: "7.9.0",
                end: "9.7.0"
            });
            return internal.instancehelpers.createElement(container, EnumerationValueRefExpression, "limitExpressionModel", false);
        }
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'offsetExpressionModel' property
         * of the parent microflows.CustomRange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCustomRangeUnderOffsetExpressionModel(container) {
            internal.createInVersionCheck(container.model, EnumerationValueRefExpression.structureTypeName, {
                start: "7.9.0",
                end: "9.7.0"
            });
            return internal.instancehelpers.createElement(container, EnumerationValueRefExpression, "offsetExpressionModel", false);
        }
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.DocumentTemplateParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInDocumentTemplateParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, EnumerationValueRefExpression.structureTypeName, {
                start: "7.9.0",
                end: "9.7.0"
            });
            return internal.instancehelpers.createElement(container, EnumerationValueRefExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'returnValueModel' property
         * of the parent microflows.EndEvent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInEndEventUnderReturnValueModel(container) {
            internal.createInVersionCheck(container.model, EnumerationValueRefExpression.structureTypeName, {
                start: "7.9.0",
                end: "9.7.0"
            });
            return internal.instancehelpers.createElement(container, EnumerationValueRefExpression, "returnValueModel", false);
        }
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.ExpressionListOperation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.3 to 9.7.0
         */
        static createInExpressionListOperationUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, EnumerationValueRefExpression.structureTypeName, {
                start: "9.0.3",
                end: "9.7.0"
            });
            return internal.instancehelpers.createElement(container, EnumerationValueRefExpression, "expressionModel", false);
        }
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.ExpressionSplitCondition element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInExpressionSplitConditionUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, EnumerationValueRefExpression.structureTypeName, {
                start: "7.9.0",
                end: "9.7.0"
            });
            return internal.instancehelpers.createElement(container, EnumerationValueRefExpression, "expressionModel", false);
        }
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.FormDataPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 to 9.7.0
         */
        static createInFormDataPartUnderValueModel(container) {
            internal.createInVersionCheck(container.model, EnumerationValueRefExpression.structureTypeName, {
                start: "8.0.0",
                end: "9.7.0"
            });
            return internal.instancehelpers.createElement(container, EnumerationValueRefExpression, "valueModel", false);
        }
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'marginBottomInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginBottomInInchModel(container) {
            internal.createInVersionCheck(container.model, EnumerationValueRefExpression.structureTypeName, {
                start: "7.9.0",
                end: "9.7.0"
            });
            return internal.instancehelpers.createElement(container, EnumerationValueRefExpression, "marginBottomInInchModel", false);
        }
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'marginLeftInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginLeftInInchModel(container) {
            internal.createInVersionCheck(container.model, EnumerationValueRefExpression.structureTypeName, {
                start: "7.9.0",
                end: "9.7.0"
            });
            return internal.instancehelpers.createElement(container, EnumerationValueRefExpression, "marginLeftInInchModel", false);
        }
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'marginRightInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginRightInInchModel(container) {
            internal.createInVersionCheck(container.model, EnumerationValueRefExpression.structureTypeName, {
                start: "7.9.0",
                end: "9.7.0"
            });
            return internal.instancehelpers.createElement(container, EnumerationValueRefExpression, "marginRightInInchModel", false);
        }
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'marginTopInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginTopInInchModel(container) {
            internal.createInVersionCheck(container.model, EnumerationValueRefExpression.structureTypeName, {
                start: "7.9.0",
                end: "9.7.0"
            });
            return internal.instancehelpers.createElement(container, EnumerationValueRefExpression, "marginTopInInchModel", false);
        }
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'customLocationModel' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderCustomLocationModel(container) {
            internal.createInVersionCheck(container.model, EnumerationValueRefExpression.structureTypeName, {
                start: "7.9.0",
                end: "9.7.0"
            });
            return internal.instancehelpers.createElement(container, EnumerationValueRefExpression, "customLocationModel", false);
        }
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'password' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderPassword(container) {
            internal.createInVersionCheck(container.model, EnumerationValueRefExpression.structureTypeName, {
                start: "7.9.0",
                end: "9.7.0"
            });
            return internal.instancehelpers.createElement(container, EnumerationValueRefExpression, "password", false);
        }
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'username' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderUsername(container) {
            internal.createInVersionCheck(container.model, EnumerationValueRefExpression.structureTypeName, {
                start: "7.9.0",
                end: "9.7.0"
            });
            return internal.instancehelpers.createElement(container, EnumerationValueRefExpression, "username", false);
        }
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.HttpHeaderEntry element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpHeaderEntryUnderValueModel(container) {
            internal.createInVersionCheck(container.model, EnumerationValueRefExpression.structureTypeName, {
                start: "7.9.0",
                end: "9.7.0"
            });
            return internal.instancehelpers.createElement(container, EnumerationValueRefExpression, "valueModel", false);
        }
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.InspectAttribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInInspectAttributeUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, EnumerationValueRefExpression.structureTypeName, {
                start: "7.9.0",
                end: "9.7.0"
            });
            return internal.instancehelpers.createElement(container, EnumerationValueRefExpression, "expressionModel", false);
        }
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'nodeModel' property
         * of the parent microflows.LogMessageAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInLogMessageActionUnderNodeModel(container) {
            internal.createInVersionCheck(container.model, EnumerationValueRefExpression.structureTypeName, {
                start: "7.9.0",
                end: "9.7.0"
            });
            return internal.instancehelpers.createElement(container, EnumerationValueRefExpression, "nodeModel", false);
        }
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.MemberChange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInMemberChangeUnderValueModel(container) {
            internal.createInVersionCheck(container.model, EnumerationValueRefExpression.structureTypeName, {
                start: "7.9.0",
                end: "9.7.0"
            });
            return internal.instancehelpers.createElement(container, EnumerationValueRefExpression, "valueModel", false);
        }
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.MicroflowCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInMicroflowCallParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, EnumerationValueRefExpression.structureTypeName, {
                start: "7.9.0",
                end: "9.7.0"
            });
            return internal.instancehelpers.createElement(container, EnumerationValueRefExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.NanoflowCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 to 9.7.0
         */
        static createInNanoflowCallParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, EnumerationValueRefExpression.structureTypeName, {
                start: "8.0.0",
                end: "9.7.0"
            });
            return internal.instancehelpers.createElement(container, EnumerationValueRefExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'hostExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderHostExpressionModel(container) {
            internal.createInVersionCheck(container.model, EnumerationValueRefExpression.structureTypeName, {
                start: "7.15.0",
                end: "9.7.0"
            });
            return internal.instancehelpers.createElement(container, EnumerationValueRefExpression, "hostExpressionModel", false);
        }
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'passwordExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderPasswordExpressionModel(container) {
            internal.createInVersionCheck(container.model, EnumerationValueRefExpression.structureTypeName, {
                start: "7.15.0",
                end: "9.7.0"
            });
            return internal.instancehelpers.createElement(container, EnumerationValueRefExpression, "passwordExpressionModel", false);
        }
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'portExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderPortExpressionModel(container) {
            internal.createInVersionCheck(container.model, EnumerationValueRefExpression.structureTypeName, {
                start: "7.15.0",
                end: "9.7.0"
            });
            return internal.instancehelpers.createElement(container, EnumerationValueRefExpression, "portExpressionModel", false);
        }
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'useConfigurationExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderUseConfigurationExpressionModel(container) {
            internal.createInVersionCheck(container.model, EnumerationValueRefExpression.structureTypeName, {
                start: "7.15.0",
                end: "9.7.0"
            });
            return internal.instancehelpers.createElement(container, EnumerationValueRefExpression, "useConfigurationExpressionModel", false);
        }
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'usernameExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderUsernameExpressionModel(container) {
            internal.createInVersionCheck(container.model, EnumerationValueRefExpression.structureTypeName, {
                start: "7.15.0",
                end: "9.7.0"
            });
            return internal.instancehelpers.createElement(container, EnumerationValueRefExpression, "usernameExpressionModel", false);
        }
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'timeOutModel' property
         * of the parent microflows.RestCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInRestCallActionUnderTimeOutModel(container) {
            internal.createInVersionCheck(container.model, EnumerationValueRefExpression.structureTypeName, {
                start: "7.15.0",
                end: "9.7.0"
            });
            return internal.instancehelpers.createElement(container, EnumerationValueRefExpression, "timeOutModel", false);
        }
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.RuleCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInRuleCallParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, EnumerationValueRefExpression.structureTypeName, {
                start: "7.9.0",
                end: "9.7.0"
            });
            return internal.instancehelpers.createElement(container, EnumerationValueRefExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.TemplateArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInTemplateArgumentUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, EnumerationValueRefExpression.structureTypeName, {
                start: "7.9.0",
                end: "9.7.0"
            });
            return internal.instancehelpers.createElement(container, EnumerationValueRefExpression, "expressionModel", false);
        }
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'timeOutModel' property
         * of the parent microflows.WebServiceCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInWebServiceCallActionUnderTimeOutModel(container) {
            internal.createInVersionCheck(container.model, EnumerationValueRefExpression.structureTypeName, {
                start: "7.15.0",
                end: "9.7.0"
            });
            return internal.instancehelpers.createElement(container, EnumerationValueRefExpression, "timeOutModel", false);
        }
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.WebServiceOperationParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInWebServiceOperationParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, EnumerationValueRefExpression.structureTypeName, {
                start: "7.9.0",
                end: "9.7.0"
            });
            return internal.instancehelpers.createElement(container, EnumerationValueRefExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'expressionModel' property
         * of the parent pages.ConditionalSettings element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInConditionalSettingsUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, EnumerationValueRefExpression.structureTypeName, {
                start: "7.9.0",
                end: "9.7.0"
            });
            return internal.instancehelpers.createElement(container, EnumerationValueRefExpression, "expressionModel", false);
        }
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'expressionModel' property
         * of the parent pages.WidgetValidation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInWidgetValidationUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, EnumerationValueRefExpression.structureTypeName, {
                start: "7.9.0",
                end: "9.7.0"
            });
            return internal.instancehelpers.createElement(container, EnumerationValueRefExpression, "expressionModel", false);
        }
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * The new EnumerationValueRefExpression will be automatically stored in the 'timeoutModel' property
         * of the parent rest.ConsumedODataService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.5.0 to 9.7.0
         */
        static createInConsumedODataServiceUnderTimeoutModel(container) {
            internal.createInVersionCheck(container.model, EnumerationValueRefExpression.structureTypeName, {
                start: "8.5.0",
                end: "9.7.0"
            });
            return internal.instancehelpers.createElement(container, EnumerationValueRefExpression, "timeoutModel", false);
        }
        /**
         * Creates and returns a new EnumerationValueRefExpression instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, EnumerationValueRefExpression);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    EnumerationValueRefExpression.structureTypeName = "Expressions$EnumerationValueRefExpression";
    EnumerationValueRefExpression.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.9.0",
        deleted: "9.8.0",
        deletionMessage: null,
        properties: {
            value: {
                required: {
                    currentValue: true
                }
            }
        },
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    expressions.EnumerationValueRefExpression = EnumerationValueRefExpression;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.8.0: deleted
     * In version 7.9.0: introduced
     */
    class FloatLiteral extends LiteralExpression {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__value = new internal.PrimitiveProperty(FloatLiteral, this, "value", 0, internal.PrimitiveTypeEnum.Double);
            if (arguments.length < 4) {
                throw new Error("new FloatLiteral() cannot be invoked directly, please use 'model.expressions.createFloatLiteral()'");
            }
        }
        get containerAsBinaryExpression() {
            return super.getContainerAs(BinaryExpression);
        }
        get containerAsFunctionCallExpression() {
            return super.getContainerAs(FunctionCallExpression);
        }
        get containerAsIfExpression() {
            return super.getContainerAs(IfExpression);
        }
        get containerAsParenthesisExpression() {
            return super.getContainerAs(ParenthesisExpression);
        }
        get containerAsUnaryExpression() {
            return super.getContainerAs(UnaryExpression);
        }
        get containerAsAppServiceCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.AppServiceCallParameterMapping);
        }
        get containerAsBasicCodeActionParameterValue() {
            return super.getContainerAs(microflows_1.microflows.BasicCodeActionParameterValue);
        }
        get containerAsBasicJavaActionParameterValue() {
            return super.getContainerAs(microflows_1.microflows.BasicJavaActionParameterValue);
        }
        get containerAsBinaryRequestHandling() {
            return super.getContainerAs(microflows_1.microflows.BinaryRequestHandling);
        }
        get containerAsChangeListAction() {
            return super.getContainerAs(microflows_1.microflows.ChangeListAction);
        }
        get containerAsChangeVariableAction() {
            return super.getContainerAs(microflows_1.microflows.ChangeVariableAction);
        }
        get containerAsCreateVariableAction() {
            return super.getContainerAs(microflows_1.microflows.CreateVariableAction);
        }
        get containerAsCustomRange() {
            return super.getContainerAs(microflows_1.microflows.CustomRange);
        }
        get containerAsDocumentTemplateParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.DocumentTemplateParameterMapping);
        }
        get containerAsEndEvent() {
            return super.getContainerAs(microflows_1.microflows.EndEvent);
        }
        get containerAsExpressionListOperation() {
            return super.getContainerAs(microflows_1.microflows.ExpressionListOperation);
        }
        get containerAsExpressionSplitCondition() {
            return super.getContainerAs(microflows_1.microflows.ExpressionSplitCondition);
        }
        get containerAsFormDataPart() {
            return super.getContainerAs(microflows_1.microflows.FormDataPart);
        }
        get containerAsGenerateDocumentAction() {
            return super.getContainerAs(microflows_1.microflows.GenerateDocumentAction);
        }
        get containerAsHttpConfiguration() {
            return super.getContainerAs(microflows_1.microflows.HttpConfiguration);
        }
        get containerAsHttpHeaderEntry() {
            return super.getContainerAs(microflows_1.microflows.HttpHeaderEntry);
        }
        get containerAsInspectAttribute() {
            return super.getContainerAs(microflows_1.microflows.InspectAttribute);
        }
        get containerAsLogMessageAction() {
            return super.getContainerAs(microflows_1.microflows.LogMessageAction);
        }
        get containerAsMemberChange() {
            return super.getContainerAs(microflows_1.microflows.MemberChange);
        }
        get containerAsMicroflowCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.MicroflowCallParameterMapping);
        }
        get containerAsNanoflowCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.NanoflowCallParameterMapping);
        }
        get containerAsProxyConfiguration() {
            return super.getContainerAs(microflows_1.microflows.ProxyConfiguration);
        }
        get containerAsRestCallAction() {
            return super.getContainerAs(microflows_1.microflows.RestCallAction);
        }
        get containerAsRuleCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.RuleCallParameterMapping);
        }
        get containerAsTemplateArgument() {
            return super.getContainerAs(microflows_1.microflows.TemplateArgument);
        }
        get containerAsWebServiceCallAction() {
            return super.getContainerAs(microflows_1.microflows.WebServiceCallAction);
        }
        get containerAsWebServiceOperationParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.WebServiceOperationParameterMapping);
        }
        get containerAsConditionalSettings() {
            return super.getContainerAs(pages_1.pages.ConditionalSettings);
        }
        get containerAsWidgetValidation() {
            return super.getContainerAs(pages_1.pages.WidgetValidation);
        }
        get containerAsConsumedODataService() {
            return super.getContainerAs(rest_1.rest.ConsumedODataService);
        }
        get value() {
            return this.__value.get();
        }
        set value(newValue) {
            this.__value.set(newValue);
        }
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'left' property
         * of the parent BinaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryExpressionUnderLeft(container) {
            internal.createInVersionCheck(container.model, FloatLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FloatLiteral, "left", false);
        }
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'right' property
         * of the parent BinaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryExpressionUnderRight(container) {
            internal.createInVersionCheck(container.model, FloatLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FloatLiteral, "right", false);
        }
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'arguments' property
         * of the parent FunctionCallExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInFunctionCallExpressionUnderArguments(container) {
            internal.createInVersionCheck(container.model, FloatLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FloatLiteral, "arguments", true);
        }
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'condition' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderCondition(container) {
            internal.createInVersionCheck(container.model, FloatLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FloatLiteral, "condition", false);
        }
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'ifFalse' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderIfFalse(container) {
            internal.createInVersionCheck(container.model, FloatLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FloatLiteral, "ifFalse", false);
        }
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'ifTrue' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderIfTrue(container) {
            internal.createInVersionCheck(container.model, FloatLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FloatLiteral, "ifTrue", false);
        }
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'expression' property
         * of the parent ParenthesisExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInParenthesisExpressionUnderExpression(container) {
            internal.createInVersionCheck(container.model, FloatLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FloatLiteral, "expression", false);
        }
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'expression' property
         * of the parent UnaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInUnaryExpressionUnderExpression(container) {
            internal.createInVersionCheck(container.model, FloatLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FloatLiteral, "expression", false);
        }
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.AppServiceCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceCallParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, FloatLiteral.structureTypeName, { start: "7.9.0", end: "9.0.1" });
            return internal.instancehelpers.createElement(container, FloatLiteral, "argumentModel", false);
        }
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.BasicCodeActionParameterValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 to 9.7.0
         */
        static createInBasicCodeActionParameterValueUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, FloatLiteral.structureTypeName, { start: "7.21.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FloatLiteral, "argumentModel", false);
        }
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.BasicJavaActionParameterValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 7.20.0
         */
        static createInBasicJavaActionParameterValueUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, FloatLiteral.structureTypeName, { start: "7.9.0", end: "7.20.0" });
            return internal.instancehelpers.createElement(container, FloatLiteral, "argumentModel", false);
        }
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'expressionModel' property
         * of the parent microflows.BinaryRequestHandling element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryRequestHandlingUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, FloatLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FloatLiteral, "expressionModel", false);
        }
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'valueModel' property
         * of the parent microflows.ChangeListAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInChangeListActionUnderValueModel(container) {
            internal.createInVersionCheck(container.model, FloatLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FloatLiteral, "valueModel", false);
        }
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'valueModel' property
         * of the parent microflows.ChangeVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInChangeVariableActionUnderValueModel(container) {
            internal.createInVersionCheck(container.model, FloatLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FloatLiteral, "valueModel", false);
        }
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'initialValueModel' property
         * of the parent microflows.CreateVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCreateVariableActionUnderInitialValueModel(container) {
            internal.createInVersionCheck(container.model, FloatLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FloatLiteral, "initialValueModel", false);
        }
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'limitExpressionModel' property
         * of the parent microflows.CustomRange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCustomRangeUnderLimitExpressionModel(container) {
            internal.createInVersionCheck(container.model, FloatLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FloatLiteral, "limitExpressionModel", false);
        }
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'offsetExpressionModel' property
         * of the parent microflows.CustomRange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCustomRangeUnderOffsetExpressionModel(container) {
            internal.createInVersionCheck(container.model, FloatLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FloatLiteral, "offsetExpressionModel", false);
        }
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.DocumentTemplateParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInDocumentTemplateParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, FloatLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FloatLiteral, "argumentModel", false);
        }
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'returnValueModel' property
         * of the parent microflows.EndEvent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInEndEventUnderReturnValueModel(container) {
            internal.createInVersionCheck(container.model, FloatLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FloatLiteral, "returnValueModel", false);
        }
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'expressionModel' property
         * of the parent microflows.ExpressionListOperation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.3 to 9.7.0
         */
        static createInExpressionListOperationUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, FloatLiteral.structureTypeName, { start: "9.0.3", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FloatLiteral, "expressionModel", false);
        }
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'expressionModel' property
         * of the parent microflows.ExpressionSplitCondition element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInExpressionSplitConditionUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, FloatLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FloatLiteral, "expressionModel", false);
        }
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'valueModel' property
         * of the parent microflows.FormDataPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 to 9.7.0
         */
        static createInFormDataPartUnderValueModel(container) {
            internal.createInVersionCheck(container.model, FloatLiteral.structureTypeName, { start: "8.0.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FloatLiteral, "valueModel", false);
        }
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'marginBottomInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginBottomInInchModel(container) {
            internal.createInVersionCheck(container.model, FloatLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FloatLiteral, "marginBottomInInchModel", false);
        }
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'marginLeftInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginLeftInInchModel(container) {
            internal.createInVersionCheck(container.model, FloatLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FloatLiteral, "marginLeftInInchModel", false);
        }
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'marginRightInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginRightInInchModel(container) {
            internal.createInVersionCheck(container.model, FloatLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FloatLiteral, "marginRightInInchModel", false);
        }
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'marginTopInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginTopInInchModel(container) {
            internal.createInVersionCheck(container.model, FloatLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FloatLiteral, "marginTopInInchModel", false);
        }
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'customLocationModel' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderCustomLocationModel(container) {
            internal.createInVersionCheck(container.model, FloatLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FloatLiteral, "customLocationModel", false);
        }
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'password' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderPassword(container) {
            internal.createInVersionCheck(container.model, FloatLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FloatLiteral, "password", false);
        }
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'username' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderUsername(container) {
            internal.createInVersionCheck(container.model, FloatLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FloatLiteral, "username", false);
        }
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'valueModel' property
         * of the parent microflows.HttpHeaderEntry element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpHeaderEntryUnderValueModel(container) {
            internal.createInVersionCheck(container.model, FloatLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FloatLiteral, "valueModel", false);
        }
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'expressionModel' property
         * of the parent microflows.InspectAttribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInInspectAttributeUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, FloatLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FloatLiteral, "expressionModel", false);
        }
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'nodeModel' property
         * of the parent microflows.LogMessageAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInLogMessageActionUnderNodeModel(container) {
            internal.createInVersionCheck(container.model, FloatLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FloatLiteral, "nodeModel", false);
        }
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'valueModel' property
         * of the parent microflows.MemberChange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInMemberChangeUnderValueModel(container) {
            internal.createInVersionCheck(container.model, FloatLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FloatLiteral, "valueModel", false);
        }
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.MicroflowCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInMicroflowCallParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, FloatLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FloatLiteral, "argumentModel", false);
        }
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.NanoflowCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 to 9.7.0
         */
        static createInNanoflowCallParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, FloatLiteral.structureTypeName, { start: "8.0.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FloatLiteral, "argumentModel", false);
        }
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'hostExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderHostExpressionModel(container) {
            internal.createInVersionCheck(container.model, FloatLiteral.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FloatLiteral, "hostExpressionModel", false);
        }
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'passwordExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderPasswordExpressionModel(container) {
            internal.createInVersionCheck(container.model, FloatLiteral.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FloatLiteral, "passwordExpressionModel", false);
        }
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'portExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderPortExpressionModel(container) {
            internal.createInVersionCheck(container.model, FloatLiteral.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FloatLiteral, "portExpressionModel", false);
        }
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'useConfigurationExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderUseConfigurationExpressionModel(container) {
            internal.createInVersionCheck(container.model, FloatLiteral.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FloatLiteral, "useConfigurationExpressionModel", false);
        }
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'usernameExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderUsernameExpressionModel(container) {
            internal.createInVersionCheck(container.model, FloatLiteral.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FloatLiteral, "usernameExpressionModel", false);
        }
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'timeOutModel' property
         * of the parent microflows.RestCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInRestCallActionUnderTimeOutModel(container) {
            internal.createInVersionCheck(container.model, FloatLiteral.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FloatLiteral, "timeOutModel", false);
        }
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.RuleCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInRuleCallParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, FloatLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FloatLiteral, "argumentModel", false);
        }
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'expressionModel' property
         * of the parent microflows.TemplateArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInTemplateArgumentUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, FloatLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FloatLiteral, "expressionModel", false);
        }
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'timeOutModel' property
         * of the parent microflows.WebServiceCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInWebServiceCallActionUnderTimeOutModel(container) {
            internal.createInVersionCheck(container.model, FloatLiteral.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FloatLiteral, "timeOutModel", false);
        }
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.WebServiceOperationParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInWebServiceOperationParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, FloatLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FloatLiteral, "argumentModel", false);
        }
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'expressionModel' property
         * of the parent pages.ConditionalSettings element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInConditionalSettingsUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, FloatLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FloatLiteral, "expressionModel", false);
        }
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'expressionModel' property
         * of the parent pages.WidgetValidation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInWidgetValidationUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, FloatLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FloatLiteral, "expressionModel", false);
        }
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * The new FloatLiteral will be automatically stored in the 'timeoutModel' property
         * of the parent rest.ConsumedODataService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.5.0 to 9.7.0
         */
        static createInConsumedODataServiceUnderTimeoutModel(container) {
            internal.createInVersionCheck(container.model, FloatLiteral.structureTypeName, { start: "8.5.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FloatLiteral, "timeoutModel", false);
        }
        /**
         * Creates and returns a new FloatLiteral instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, FloatLiteral);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    FloatLiteral.structureTypeName = "Expressions$FloatLiteral";
    FloatLiteral.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.9.0",
        deleted: "9.8.0",
        deletionMessage: null,
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    expressions.FloatLiteral = FloatLiteral;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.8.0: deleted
     * In version 7.9.0: introduced
     */
    class FunctionCallExpression extends Expression {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__functionName = new internal.PrimitiveProperty(FunctionCallExpression, this, "functionName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__arguments = new internal.PartListProperty(FunctionCallExpression, this, "arguments", []);
            if (arguments.length < 4) {
                throw new Error("new FunctionCallExpression() cannot be invoked directly, please use 'model.expressions.createFunctionCallExpression()'");
            }
        }
        get containerAsBinaryExpression() {
            return super.getContainerAs(BinaryExpression);
        }
        get containerAsFunctionCallExpression() {
            return super.getContainerAs(FunctionCallExpression);
        }
        get containerAsIfExpression() {
            return super.getContainerAs(IfExpression);
        }
        get containerAsParenthesisExpression() {
            return super.getContainerAs(ParenthesisExpression);
        }
        get containerAsUnaryExpression() {
            return super.getContainerAs(UnaryExpression);
        }
        get containerAsAppServiceCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.AppServiceCallParameterMapping);
        }
        get containerAsBasicCodeActionParameterValue() {
            return super.getContainerAs(microflows_1.microflows.BasicCodeActionParameterValue);
        }
        get containerAsBasicJavaActionParameterValue() {
            return super.getContainerAs(microflows_1.microflows.BasicJavaActionParameterValue);
        }
        get containerAsBinaryRequestHandling() {
            return super.getContainerAs(microflows_1.microflows.BinaryRequestHandling);
        }
        get containerAsChangeListAction() {
            return super.getContainerAs(microflows_1.microflows.ChangeListAction);
        }
        get containerAsChangeVariableAction() {
            return super.getContainerAs(microflows_1.microflows.ChangeVariableAction);
        }
        get containerAsCreateVariableAction() {
            return super.getContainerAs(microflows_1.microflows.CreateVariableAction);
        }
        get containerAsCustomRange() {
            return super.getContainerAs(microflows_1.microflows.CustomRange);
        }
        get containerAsDocumentTemplateParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.DocumentTemplateParameterMapping);
        }
        get containerAsEndEvent() {
            return super.getContainerAs(microflows_1.microflows.EndEvent);
        }
        get containerAsExpressionListOperation() {
            return super.getContainerAs(microflows_1.microflows.ExpressionListOperation);
        }
        get containerAsExpressionSplitCondition() {
            return super.getContainerAs(microflows_1.microflows.ExpressionSplitCondition);
        }
        get containerAsFormDataPart() {
            return super.getContainerAs(microflows_1.microflows.FormDataPart);
        }
        get containerAsGenerateDocumentAction() {
            return super.getContainerAs(microflows_1.microflows.GenerateDocumentAction);
        }
        get containerAsHttpConfiguration() {
            return super.getContainerAs(microflows_1.microflows.HttpConfiguration);
        }
        get containerAsHttpHeaderEntry() {
            return super.getContainerAs(microflows_1.microflows.HttpHeaderEntry);
        }
        get containerAsInspectAttribute() {
            return super.getContainerAs(microflows_1.microflows.InspectAttribute);
        }
        get containerAsLogMessageAction() {
            return super.getContainerAs(microflows_1.microflows.LogMessageAction);
        }
        get containerAsMemberChange() {
            return super.getContainerAs(microflows_1.microflows.MemberChange);
        }
        get containerAsMicroflowCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.MicroflowCallParameterMapping);
        }
        get containerAsNanoflowCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.NanoflowCallParameterMapping);
        }
        get containerAsProxyConfiguration() {
            return super.getContainerAs(microflows_1.microflows.ProxyConfiguration);
        }
        get containerAsRestCallAction() {
            return super.getContainerAs(microflows_1.microflows.RestCallAction);
        }
        get containerAsRuleCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.RuleCallParameterMapping);
        }
        get containerAsTemplateArgument() {
            return super.getContainerAs(microflows_1.microflows.TemplateArgument);
        }
        get containerAsWebServiceCallAction() {
            return super.getContainerAs(microflows_1.microflows.WebServiceCallAction);
        }
        get containerAsWebServiceOperationParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.WebServiceOperationParameterMapping);
        }
        get containerAsConditionalSettings() {
            return super.getContainerAs(pages_1.pages.ConditionalSettings);
        }
        get containerAsWidgetValidation() {
            return super.getContainerAs(pages_1.pages.WidgetValidation);
        }
        get containerAsConsumedODataService() {
            return super.getContainerAs(rest_1.rest.ConsumedODataService);
        }
        get functionName() {
            return this.__functionName.get();
        }
        set functionName(newValue) {
            this.__functionName.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get arguments() {
            return this.__arguments.get();
        }
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'left' property
         * of the parent BinaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryExpressionUnderLeft(container) {
            internal.createInVersionCheck(container.model, FunctionCallExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FunctionCallExpression, "left", false);
        }
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'right' property
         * of the parent BinaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryExpressionUnderRight(container) {
            internal.createInVersionCheck(container.model, FunctionCallExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FunctionCallExpression, "right", false);
        }
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'arguments' property
         * of the parent FunctionCallExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInFunctionCallExpressionUnderArguments(container) {
            internal.createInVersionCheck(container.model, FunctionCallExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FunctionCallExpression, "arguments", true);
        }
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'condition' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderCondition(container) {
            internal.createInVersionCheck(container.model, FunctionCallExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FunctionCallExpression, "condition", false);
        }
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'ifFalse' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderIfFalse(container) {
            internal.createInVersionCheck(container.model, FunctionCallExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FunctionCallExpression, "ifFalse", false);
        }
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'ifTrue' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderIfTrue(container) {
            internal.createInVersionCheck(container.model, FunctionCallExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FunctionCallExpression, "ifTrue", false);
        }
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'expression' property
         * of the parent ParenthesisExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInParenthesisExpressionUnderExpression(container) {
            internal.createInVersionCheck(container.model, FunctionCallExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FunctionCallExpression, "expression", false);
        }
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'expression' property
         * of the parent UnaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInUnaryExpressionUnderExpression(container) {
            internal.createInVersionCheck(container.model, FunctionCallExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FunctionCallExpression, "expression", false);
        }
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.AppServiceCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceCallParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, FunctionCallExpression.structureTypeName, { start: "7.9.0", end: "9.0.1" });
            return internal.instancehelpers.createElement(container, FunctionCallExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.BasicCodeActionParameterValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 to 9.7.0
         */
        static createInBasicCodeActionParameterValueUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, FunctionCallExpression.structureTypeName, { start: "7.21.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FunctionCallExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.BasicJavaActionParameterValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 7.20.0
         */
        static createInBasicJavaActionParameterValueUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, FunctionCallExpression.structureTypeName, { start: "7.9.0", end: "7.20.0" });
            return internal.instancehelpers.createElement(container, FunctionCallExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.BinaryRequestHandling element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryRequestHandlingUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, FunctionCallExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FunctionCallExpression, "expressionModel", false);
        }
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.ChangeListAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInChangeListActionUnderValueModel(container) {
            internal.createInVersionCheck(container.model, FunctionCallExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FunctionCallExpression, "valueModel", false);
        }
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.ChangeVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInChangeVariableActionUnderValueModel(container) {
            internal.createInVersionCheck(container.model, FunctionCallExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FunctionCallExpression, "valueModel", false);
        }
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'initialValueModel' property
         * of the parent microflows.CreateVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCreateVariableActionUnderInitialValueModel(container) {
            internal.createInVersionCheck(container.model, FunctionCallExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FunctionCallExpression, "initialValueModel", false);
        }
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'limitExpressionModel' property
         * of the parent microflows.CustomRange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCustomRangeUnderLimitExpressionModel(container) {
            internal.createInVersionCheck(container.model, FunctionCallExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FunctionCallExpression, "limitExpressionModel", false);
        }
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'offsetExpressionModel' property
         * of the parent microflows.CustomRange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCustomRangeUnderOffsetExpressionModel(container) {
            internal.createInVersionCheck(container.model, FunctionCallExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FunctionCallExpression, "offsetExpressionModel", false);
        }
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.DocumentTemplateParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInDocumentTemplateParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, FunctionCallExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FunctionCallExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'returnValueModel' property
         * of the parent microflows.EndEvent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInEndEventUnderReturnValueModel(container) {
            internal.createInVersionCheck(container.model, FunctionCallExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FunctionCallExpression, "returnValueModel", false);
        }
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.ExpressionListOperation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.3 to 9.7.0
         */
        static createInExpressionListOperationUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, FunctionCallExpression.structureTypeName, { start: "9.0.3", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FunctionCallExpression, "expressionModel", false);
        }
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.ExpressionSplitCondition element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInExpressionSplitConditionUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, FunctionCallExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FunctionCallExpression, "expressionModel", false);
        }
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.FormDataPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 to 9.7.0
         */
        static createInFormDataPartUnderValueModel(container) {
            internal.createInVersionCheck(container.model, FunctionCallExpression.structureTypeName, { start: "8.0.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FunctionCallExpression, "valueModel", false);
        }
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'marginBottomInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginBottomInInchModel(container) {
            internal.createInVersionCheck(container.model, FunctionCallExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FunctionCallExpression, "marginBottomInInchModel", false);
        }
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'marginLeftInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginLeftInInchModel(container) {
            internal.createInVersionCheck(container.model, FunctionCallExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FunctionCallExpression, "marginLeftInInchModel", false);
        }
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'marginRightInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginRightInInchModel(container) {
            internal.createInVersionCheck(container.model, FunctionCallExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FunctionCallExpression, "marginRightInInchModel", false);
        }
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'marginTopInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginTopInInchModel(container) {
            internal.createInVersionCheck(container.model, FunctionCallExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FunctionCallExpression, "marginTopInInchModel", false);
        }
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'customLocationModel' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderCustomLocationModel(container) {
            internal.createInVersionCheck(container.model, FunctionCallExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FunctionCallExpression, "customLocationModel", false);
        }
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'password' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderPassword(container) {
            internal.createInVersionCheck(container.model, FunctionCallExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FunctionCallExpression, "password", false);
        }
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'username' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderUsername(container) {
            internal.createInVersionCheck(container.model, FunctionCallExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FunctionCallExpression, "username", false);
        }
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.HttpHeaderEntry element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpHeaderEntryUnderValueModel(container) {
            internal.createInVersionCheck(container.model, FunctionCallExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FunctionCallExpression, "valueModel", false);
        }
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.InspectAttribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInInspectAttributeUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, FunctionCallExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FunctionCallExpression, "expressionModel", false);
        }
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'nodeModel' property
         * of the parent microflows.LogMessageAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInLogMessageActionUnderNodeModel(container) {
            internal.createInVersionCheck(container.model, FunctionCallExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FunctionCallExpression, "nodeModel", false);
        }
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.MemberChange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInMemberChangeUnderValueModel(container) {
            internal.createInVersionCheck(container.model, FunctionCallExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FunctionCallExpression, "valueModel", false);
        }
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.MicroflowCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInMicroflowCallParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, FunctionCallExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FunctionCallExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.NanoflowCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 to 9.7.0
         */
        static createInNanoflowCallParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, FunctionCallExpression.structureTypeName, { start: "8.0.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FunctionCallExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'hostExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderHostExpressionModel(container) {
            internal.createInVersionCheck(container.model, FunctionCallExpression.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FunctionCallExpression, "hostExpressionModel", false);
        }
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'passwordExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderPasswordExpressionModel(container) {
            internal.createInVersionCheck(container.model, FunctionCallExpression.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FunctionCallExpression, "passwordExpressionModel", false);
        }
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'portExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderPortExpressionModel(container) {
            internal.createInVersionCheck(container.model, FunctionCallExpression.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FunctionCallExpression, "portExpressionModel", false);
        }
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'useConfigurationExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderUseConfigurationExpressionModel(container) {
            internal.createInVersionCheck(container.model, FunctionCallExpression.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FunctionCallExpression, "useConfigurationExpressionModel", false);
        }
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'usernameExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderUsernameExpressionModel(container) {
            internal.createInVersionCheck(container.model, FunctionCallExpression.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FunctionCallExpression, "usernameExpressionModel", false);
        }
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'timeOutModel' property
         * of the parent microflows.RestCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInRestCallActionUnderTimeOutModel(container) {
            internal.createInVersionCheck(container.model, FunctionCallExpression.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FunctionCallExpression, "timeOutModel", false);
        }
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.RuleCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInRuleCallParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, FunctionCallExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FunctionCallExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.TemplateArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInTemplateArgumentUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, FunctionCallExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FunctionCallExpression, "expressionModel", false);
        }
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'timeOutModel' property
         * of the parent microflows.WebServiceCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInWebServiceCallActionUnderTimeOutModel(container) {
            internal.createInVersionCheck(container.model, FunctionCallExpression.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FunctionCallExpression, "timeOutModel", false);
        }
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.WebServiceOperationParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInWebServiceOperationParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, FunctionCallExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FunctionCallExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'expressionModel' property
         * of the parent pages.ConditionalSettings element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInConditionalSettingsUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, FunctionCallExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FunctionCallExpression, "expressionModel", false);
        }
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'expressionModel' property
         * of the parent pages.WidgetValidation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInWidgetValidationUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, FunctionCallExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FunctionCallExpression, "expressionModel", false);
        }
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * The new FunctionCallExpression will be automatically stored in the 'timeoutModel' property
         * of the parent rest.ConsumedODataService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.5.0 to 9.7.0
         */
        static createInConsumedODataServiceUnderTimeoutModel(container) {
            internal.createInVersionCheck(container.model, FunctionCallExpression.structureTypeName, { start: "8.5.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, FunctionCallExpression, "timeoutModel", false);
        }
        /**
         * Creates and returns a new FunctionCallExpression instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, FunctionCallExpression);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    FunctionCallExpression.structureTypeName = "Expressions$FunctionCallExpression";
    FunctionCallExpression.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.9.0",
        deleted: "9.8.0",
        deletionMessage: null,
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    expressions.FunctionCallExpression = FunctionCallExpression;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.8.0: deleted
     * In version 7.9.0: introduced
     */
    class VariableRef extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new VariableRef() cannot be invoked directly, please use 'model.expressions.createVariableRef()'");
            }
        }
        get containerAsVariableRefExpression() {
            return super.getContainerAs(VariableRefExpression);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    VariableRef.structureTypeName = "Expressions$VariableRef";
    VariableRef.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.9.0",
        deleted: "9.8.0",
        deletionMessage: null,
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    expressions.VariableRef = VariableRef;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.8.0: deleted
     * In version 7.9.0: introduced
     */
    class GlobalVariableRef extends VariableRef {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__referredName = new internal.PrimitiveProperty(GlobalVariableRef, this, "referredName", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new GlobalVariableRef() cannot be invoked directly, please use 'model.expressions.createGlobalVariableRef()'");
            }
        }
        get containerAsVariableRefExpression() {
            return super.getContainerAs(VariableRefExpression);
        }
        get referredName() {
            return this.__referredName.get();
        }
        set referredName(newValue) {
            this.__referredName.set(newValue);
        }
        /**
         * Creates and returns a new GlobalVariableRef instance in the SDK and on the server.
         * The new GlobalVariableRef will be automatically stored in the 'variable' property
         * of the parent VariableRefExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, GlobalVariableRef.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, GlobalVariableRef, "variable", false);
        }
        /**
         * Creates and returns a new GlobalVariableRef instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, GlobalVariableRef);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    GlobalVariableRef.structureTypeName = "Expressions$GlobalVariableRef";
    GlobalVariableRef.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.9.0",
        deleted: "9.8.0",
        deletionMessage: null,
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    expressions.GlobalVariableRef = GlobalVariableRef;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.8.0: deleted
     * In version 7.9.0: introduced
     */
    class IfExpression extends Expression {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__condition = new internal.PartProperty(IfExpression, this, "condition", null, true);
            /** @internal */
            this.__ifTrue = new internal.PartProperty(IfExpression, this, "ifTrue", null, true);
            /** @internal */
            this.__ifFalse = new internal.PartProperty(IfExpression, this, "ifFalse", null, true);
            if (arguments.length < 4) {
                throw new Error("new IfExpression() cannot be invoked directly, please use 'model.expressions.createIfExpression()'");
            }
        }
        get containerAsBinaryExpression() {
            return super.getContainerAs(BinaryExpression);
        }
        get containerAsFunctionCallExpression() {
            return super.getContainerAs(FunctionCallExpression);
        }
        get containerAsIfExpression() {
            return super.getContainerAs(IfExpression);
        }
        get containerAsParenthesisExpression() {
            return super.getContainerAs(ParenthesisExpression);
        }
        get containerAsUnaryExpression() {
            return super.getContainerAs(UnaryExpression);
        }
        get containerAsAppServiceCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.AppServiceCallParameterMapping);
        }
        get containerAsBasicCodeActionParameterValue() {
            return super.getContainerAs(microflows_1.microflows.BasicCodeActionParameterValue);
        }
        get containerAsBasicJavaActionParameterValue() {
            return super.getContainerAs(microflows_1.microflows.BasicJavaActionParameterValue);
        }
        get containerAsBinaryRequestHandling() {
            return super.getContainerAs(microflows_1.microflows.BinaryRequestHandling);
        }
        get containerAsChangeListAction() {
            return super.getContainerAs(microflows_1.microflows.ChangeListAction);
        }
        get containerAsChangeVariableAction() {
            return super.getContainerAs(microflows_1.microflows.ChangeVariableAction);
        }
        get containerAsCreateVariableAction() {
            return super.getContainerAs(microflows_1.microflows.CreateVariableAction);
        }
        get containerAsCustomRange() {
            return super.getContainerAs(microflows_1.microflows.CustomRange);
        }
        get containerAsDocumentTemplateParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.DocumentTemplateParameterMapping);
        }
        get containerAsEndEvent() {
            return super.getContainerAs(microflows_1.microflows.EndEvent);
        }
        get containerAsExpressionListOperation() {
            return super.getContainerAs(microflows_1.microflows.ExpressionListOperation);
        }
        get containerAsExpressionSplitCondition() {
            return super.getContainerAs(microflows_1.microflows.ExpressionSplitCondition);
        }
        get containerAsFormDataPart() {
            return super.getContainerAs(microflows_1.microflows.FormDataPart);
        }
        get containerAsGenerateDocumentAction() {
            return super.getContainerAs(microflows_1.microflows.GenerateDocumentAction);
        }
        get containerAsHttpConfiguration() {
            return super.getContainerAs(microflows_1.microflows.HttpConfiguration);
        }
        get containerAsHttpHeaderEntry() {
            return super.getContainerAs(microflows_1.microflows.HttpHeaderEntry);
        }
        get containerAsInspectAttribute() {
            return super.getContainerAs(microflows_1.microflows.InspectAttribute);
        }
        get containerAsLogMessageAction() {
            return super.getContainerAs(microflows_1.microflows.LogMessageAction);
        }
        get containerAsMemberChange() {
            return super.getContainerAs(microflows_1.microflows.MemberChange);
        }
        get containerAsMicroflowCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.MicroflowCallParameterMapping);
        }
        get containerAsNanoflowCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.NanoflowCallParameterMapping);
        }
        get containerAsProxyConfiguration() {
            return super.getContainerAs(microflows_1.microflows.ProxyConfiguration);
        }
        get containerAsRestCallAction() {
            return super.getContainerAs(microflows_1.microflows.RestCallAction);
        }
        get containerAsRuleCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.RuleCallParameterMapping);
        }
        get containerAsTemplateArgument() {
            return super.getContainerAs(microflows_1.microflows.TemplateArgument);
        }
        get containerAsWebServiceCallAction() {
            return super.getContainerAs(microflows_1.microflows.WebServiceCallAction);
        }
        get containerAsWebServiceOperationParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.WebServiceOperationParameterMapping);
        }
        get containerAsConditionalSettings() {
            return super.getContainerAs(pages_1.pages.ConditionalSettings);
        }
        get containerAsWidgetValidation() {
            return super.getContainerAs(pages_1.pages.WidgetValidation);
        }
        get containerAsConsumedODataService() {
            return super.getContainerAs(rest_1.rest.ConsumedODataService);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get condition() {
            return this.__condition.get();
        }
        set condition(newValue) {
            this.__condition.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get ifTrue() {
            return this.__ifTrue.get();
        }
        set ifTrue(newValue) {
            this.__ifTrue.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get ifFalse() {
            return this.__ifFalse.get();
        }
        set ifFalse(newValue) {
            this.__ifFalse.set(newValue);
        }
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'left' property
         * of the parent BinaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryExpressionUnderLeft(container) {
            internal.createInVersionCheck(container.model, IfExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IfExpression, "left", false);
        }
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'right' property
         * of the parent BinaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryExpressionUnderRight(container) {
            internal.createInVersionCheck(container.model, IfExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IfExpression, "right", false);
        }
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'arguments' property
         * of the parent FunctionCallExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInFunctionCallExpressionUnderArguments(container) {
            internal.createInVersionCheck(container.model, IfExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IfExpression, "arguments", true);
        }
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'condition' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderCondition(container) {
            internal.createInVersionCheck(container.model, IfExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IfExpression, "condition", false);
        }
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'ifFalse' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderIfFalse(container) {
            internal.createInVersionCheck(container.model, IfExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IfExpression, "ifFalse", false);
        }
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'ifTrue' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderIfTrue(container) {
            internal.createInVersionCheck(container.model, IfExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IfExpression, "ifTrue", false);
        }
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'expression' property
         * of the parent ParenthesisExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInParenthesisExpressionUnderExpression(container) {
            internal.createInVersionCheck(container.model, IfExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IfExpression, "expression", false);
        }
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'expression' property
         * of the parent UnaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInUnaryExpressionUnderExpression(container) {
            internal.createInVersionCheck(container.model, IfExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IfExpression, "expression", false);
        }
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.AppServiceCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceCallParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, IfExpression.structureTypeName, { start: "7.9.0", end: "9.0.1" });
            return internal.instancehelpers.createElement(container, IfExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.BasicCodeActionParameterValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 to 9.7.0
         */
        static createInBasicCodeActionParameterValueUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, IfExpression.structureTypeName, { start: "7.21.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IfExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.BasicJavaActionParameterValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 7.20.0
         */
        static createInBasicJavaActionParameterValueUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, IfExpression.structureTypeName, { start: "7.9.0", end: "7.20.0" });
            return internal.instancehelpers.createElement(container, IfExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.BinaryRequestHandling element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryRequestHandlingUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, IfExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IfExpression, "expressionModel", false);
        }
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.ChangeListAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInChangeListActionUnderValueModel(container) {
            internal.createInVersionCheck(container.model, IfExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IfExpression, "valueModel", false);
        }
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.ChangeVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInChangeVariableActionUnderValueModel(container) {
            internal.createInVersionCheck(container.model, IfExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IfExpression, "valueModel", false);
        }
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'initialValueModel' property
         * of the parent microflows.CreateVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCreateVariableActionUnderInitialValueModel(container) {
            internal.createInVersionCheck(container.model, IfExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IfExpression, "initialValueModel", false);
        }
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'limitExpressionModel' property
         * of the parent microflows.CustomRange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCustomRangeUnderLimitExpressionModel(container) {
            internal.createInVersionCheck(container.model, IfExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IfExpression, "limitExpressionModel", false);
        }
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'offsetExpressionModel' property
         * of the parent microflows.CustomRange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCustomRangeUnderOffsetExpressionModel(container) {
            internal.createInVersionCheck(container.model, IfExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IfExpression, "offsetExpressionModel", false);
        }
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.DocumentTemplateParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInDocumentTemplateParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, IfExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IfExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'returnValueModel' property
         * of the parent microflows.EndEvent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInEndEventUnderReturnValueModel(container) {
            internal.createInVersionCheck(container.model, IfExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IfExpression, "returnValueModel", false);
        }
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.ExpressionListOperation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.3 to 9.7.0
         */
        static createInExpressionListOperationUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, IfExpression.structureTypeName, { start: "9.0.3", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IfExpression, "expressionModel", false);
        }
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.ExpressionSplitCondition element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInExpressionSplitConditionUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, IfExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IfExpression, "expressionModel", false);
        }
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.FormDataPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 to 9.7.0
         */
        static createInFormDataPartUnderValueModel(container) {
            internal.createInVersionCheck(container.model, IfExpression.structureTypeName, { start: "8.0.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IfExpression, "valueModel", false);
        }
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'marginBottomInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginBottomInInchModel(container) {
            internal.createInVersionCheck(container.model, IfExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IfExpression, "marginBottomInInchModel", false);
        }
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'marginLeftInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginLeftInInchModel(container) {
            internal.createInVersionCheck(container.model, IfExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IfExpression, "marginLeftInInchModel", false);
        }
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'marginRightInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginRightInInchModel(container) {
            internal.createInVersionCheck(container.model, IfExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IfExpression, "marginRightInInchModel", false);
        }
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'marginTopInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginTopInInchModel(container) {
            internal.createInVersionCheck(container.model, IfExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IfExpression, "marginTopInInchModel", false);
        }
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'customLocationModel' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderCustomLocationModel(container) {
            internal.createInVersionCheck(container.model, IfExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IfExpression, "customLocationModel", false);
        }
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'password' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderPassword(container) {
            internal.createInVersionCheck(container.model, IfExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IfExpression, "password", false);
        }
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'username' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderUsername(container) {
            internal.createInVersionCheck(container.model, IfExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IfExpression, "username", false);
        }
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.HttpHeaderEntry element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpHeaderEntryUnderValueModel(container) {
            internal.createInVersionCheck(container.model, IfExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IfExpression, "valueModel", false);
        }
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.InspectAttribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInInspectAttributeUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, IfExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IfExpression, "expressionModel", false);
        }
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'nodeModel' property
         * of the parent microflows.LogMessageAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInLogMessageActionUnderNodeModel(container) {
            internal.createInVersionCheck(container.model, IfExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IfExpression, "nodeModel", false);
        }
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.MemberChange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInMemberChangeUnderValueModel(container) {
            internal.createInVersionCheck(container.model, IfExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IfExpression, "valueModel", false);
        }
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.MicroflowCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInMicroflowCallParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, IfExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IfExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.NanoflowCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 to 9.7.0
         */
        static createInNanoflowCallParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, IfExpression.structureTypeName, { start: "8.0.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IfExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'hostExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderHostExpressionModel(container) {
            internal.createInVersionCheck(container.model, IfExpression.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IfExpression, "hostExpressionModel", false);
        }
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'passwordExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderPasswordExpressionModel(container) {
            internal.createInVersionCheck(container.model, IfExpression.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IfExpression, "passwordExpressionModel", false);
        }
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'portExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderPortExpressionModel(container) {
            internal.createInVersionCheck(container.model, IfExpression.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IfExpression, "portExpressionModel", false);
        }
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'useConfigurationExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderUseConfigurationExpressionModel(container) {
            internal.createInVersionCheck(container.model, IfExpression.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IfExpression, "useConfigurationExpressionModel", false);
        }
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'usernameExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderUsernameExpressionModel(container) {
            internal.createInVersionCheck(container.model, IfExpression.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IfExpression, "usernameExpressionModel", false);
        }
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'timeOutModel' property
         * of the parent microflows.RestCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInRestCallActionUnderTimeOutModel(container) {
            internal.createInVersionCheck(container.model, IfExpression.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IfExpression, "timeOutModel", false);
        }
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.RuleCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInRuleCallParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, IfExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IfExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.TemplateArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInTemplateArgumentUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, IfExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IfExpression, "expressionModel", false);
        }
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'timeOutModel' property
         * of the parent microflows.WebServiceCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInWebServiceCallActionUnderTimeOutModel(container) {
            internal.createInVersionCheck(container.model, IfExpression.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IfExpression, "timeOutModel", false);
        }
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.WebServiceOperationParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInWebServiceOperationParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, IfExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IfExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'expressionModel' property
         * of the parent pages.ConditionalSettings element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInConditionalSettingsUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, IfExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IfExpression, "expressionModel", false);
        }
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'expressionModel' property
         * of the parent pages.WidgetValidation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInWidgetValidationUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, IfExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IfExpression, "expressionModel", false);
        }
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * The new IfExpression will be automatically stored in the 'timeoutModel' property
         * of the parent rest.ConsumedODataService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.5.0 to 9.7.0
         */
        static createInConsumedODataServiceUnderTimeoutModel(container) {
            internal.createInVersionCheck(container.model, IfExpression.structureTypeName, { start: "8.5.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IfExpression, "timeoutModel", false);
        }
        /**
         * Creates and returns a new IfExpression instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, IfExpression);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.condition = NoExpression.create(this.model);
            this.ifFalse = NoExpression.create(this.model);
            this.ifTrue = NoExpression.create(this.model);
        }
    }
    IfExpression.structureTypeName = "Expressions$IfExpression";
    IfExpression.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.9.0",
        deleted: "9.8.0",
        deletionMessage: null,
        properties: {
            condition: {
                required: {
                    currentValue: true
                }
            },
            ifTrue: {
                required: {
                    currentValue: true
                }
            },
            ifFalse: {
                required: {
                    currentValue: true
                }
            }
        },
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    expressions.IfExpression = IfExpression;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.8.0: deleted
     * In version 7.9.0: introduced
     */
    class IntegerLiteral extends LiteralExpression {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__value = new internal.PrimitiveProperty(IntegerLiteral, this, "value", 0, internal.PrimitiveTypeEnum.Integer);
            if (arguments.length < 4) {
                throw new Error("new IntegerLiteral() cannot be invoked directly, please use 'model.expressions.createIntegerLiteral()'");
            }
        }
        get containerAsBinaryExpression() {
            return super.getContainerAs(BinaryExpression);
        }
        get containerAsFunctionCallExpression() {
            return super.getContainerAs(FunctionCallExpression);
        }
        get containerAsIfExpression() {
            return super.getContainerAs(IfExpression);
        }
        get containerAsParenthesisExpression() {
            return super.getContainerAs(ParenthesisExpression);
        }
        get containerAsUnaryExpression() {
            return super.getContainerAs(UnaryExpression);
        }
        get containerAsAppServiceCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.AppServiceCallParameterMapping);
        }
        get containerAsBasicCodeActionParameterValue() {
            return super.getContainerAs(microflows_1.microflows.BasicCodeActionParameterValue);
        }
        get containerAsBasicJavaActionParameterValue() {
            return super.getContainerAs(microflows_1.microflows.BasicJavaActionParameterValue);
        }
        get containerAsBinaryRequestHandling() {
            return super.getContainerAs(microflows_1.microflows.BinaryRequestHandling);
        }
        get containerAsChangeListAction() {
            return super.getContainerAs(microflows_1.microflows.ChangeListAction);
        }
        get containerAsChangeVariableAction() {
            return super.getContainerAs(microflows_1.microflows.ChangeVariableAction);
        }
        get containerAsCreateVariableAction() {
            return super.getContainerAs(microflows_1.microflows.CreateVariableAction);
        }
        get containerAsCustomRange() {
            return super.getContainerAs(microflows_1.microflows.CustomRange);
        }
        get containerAsDocumentTemplateParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.DocumentTemplateParameterMapping);
        }
        get containerAsEndEvent() {
            return super.getContainerAs(microflows_1.microflows.EndEvent);
        }
        get containerAsExpressionListOperation() {
            return super.getContainerAs(microflows_1.microflows.ExpressionListOperation);
        }
        get containerAsExpressionSplitCondition() {
            return super.getContainerAs(microflows_1.microflows.ExpressionSplitCondition);
        }
        get containerAsFormDataPart() {
            return super.getContainerAs(microflows_1.microflows.FormDataPart);
        }
        get containerAsGenerateDocumentAction() {
            return super.getContainerAs(microflows_1.microflows.GenerateDocumentAction);
        }
        get containerAsHttpConfiguration() {
            return super.getContainerAs(microflows_1.microflows.HttpConfiguration);
        }
        get containerAsHttpHeaderEntry() {
            return super.getContainerAs(microflows_1.microflows.HttpHeaderEntry);
        }
        get containerAsInspectAttribute() {
            return super.getContainerAs(microflows_1.microflows.InspectAttribute);
        }
        get containerAsLogMessageAction() {
            return super.getContainerAs(microflows_1.microflows.LogMessageAction);
        }
        get containerAsMemberChange() {
            return super.getContainerAs(microflows_1.microflows.MemberChange);
        }
        get containerAsMicroflowCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.MicroflowCallParameterMapping);
        }
        get containerAsNanoflowCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.NanoflowCallParameterMapping);
        }
        get containerAsProxyConfiguration() {
            return super.getContainerAs(microflows_1.microflows.ProxyConfiguration);
        }
        get containerAsRestCallAction() {
            return super.getContainerAs(microflows_1.microflows.RestCallAction);
        }
        get containerAsRuleCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.RuleCallParameterMapping);
        }
        get containerAsTemplateArgument() {
            return super.getContainerAs(microflows_1.microflows.TemplateArgument);
        }
        get containerAsWebServiceCallAction() {
            return super.getContainerAs(microflows_1.microflows.WebServiceCallAction);
        }
        get containerAsWebServiceOperationParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.WebServiceOperationParameterMapping);
        }
        get containerAsConditionalSettings() {
            return super.getContainerAs(pages_1.pages.ConditionalSettings);
        }
        get containerAsWidgetValidation() {
            return super.getContainerAs(pages_1.pages.WidgetValidation);
        }
        get containerAsConsumedODataService() {
            return super.getContainerAs(rest_1.rest.ConsumedODataService);
        }
        get value() {
            return this.__value.get();
        }
        set value(newValue) {
            this.__value.set(newValue);
        }
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'left' property
         * of the parent BinaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryExpressionUnderLeft(container) {
            internal.createInVersionCheck(container.model, IntegerLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IntegerLiteral, "left", false);
        }
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'right' property
         * of the parent BinaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryExpressionUnderRight(container) {
            internal.createInVersionCheck(container.model, IntegerLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IntegerLiteral, "right", false);
        }
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'arguments' property
         * of the parent FunctionCallExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInFunctionCallExpressionUnderArguments(container) {
            internal.createInVersionCheck(container.model, IntegerLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IntegerLiteral, "arguments", true);
        }
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'condition' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderCondition(container) {
            internal.createInVersionCheck(container.model, IntegerLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IntegerLiteral, "condition", false);
        }
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'ifFalse' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderIfFalse(container) {
            internal.createInVersionCheck(container.model, IntegerLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IntegerLiteral, "ifFalse", false);
        }
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'ifTrue' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderIfTrue(container) {
            internal.createInVersionCheck(container.model, IntegerLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IntegerLiteral, "ifTrue", false);
        }
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'expression' property
         * of the parent ParenthesisExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInParenthesisExpressionUnderExpression(container) {
            internal.createInVersionCheck(container.model, IntegerLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IntegerLiteral, "expression", false);
        }
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'expression' property
         * of the parent UnaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInUnaryExpressionUnderExpression(container) {
            internal.createInVersionCheck(container.model, IntegerLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IntegerLiteral, "expression", false);
        }
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.AppServiceCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceCallParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, IntegerLiteral.structureTypeName, { start: "7.9.0", end: "9.0.1" });
            return internal.instancehelpers.createElement(container, IntegerLiteral, "argumentModel", false);
        }
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.BasicCodeActionParameterValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 to 9.7.0
         */
        static createInBasicCodeActionParameterValueUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, IntegerLiteral.structureTypeName, { start: "7.21.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IntegerLiteral, "argumentModel", false);
        }
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.BasicJavaActionParameterValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 7.20.0
         */
        static createInBasicJavaActionParameterValueUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, IntegerLiteral.structureTypeName, { start: "7.9.0", end: "7.20.0" });
            return internal.instancehelpers.createElement(container, IntegerLiteral, "argumentModel", false);
        }
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'expressionModel' property
         * of the parent microflows.BinaryRequestHandling element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryRequestHandlingUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, IntegerLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IntegerLiteral, "expressionModel", false);
        }
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'valueModel' property
         * of the parent microflows.ChangeListAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInChangeListActionUnderValueModel(container) {
            internal.createInVersionCheck(container.model, IntegerLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IntegerLiteral, "valueModel", false);
        }
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'valueModel' property
         * of the parent microflows.ChangeVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInChangeVariableActionUnderValueModel(container) {
            internal.createInVersionCheck(container.model, IntegerLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IntegerLiteral, "valueModel", false);
        }
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'initialValueModel' property
         * of the parent microflows.CreateVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCreateVariableActionUnderInitialValueModel(container) {
            internal.createInVersionCheck(container.model, IntegerLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IntegerLiteral, "initialValueModel", false);
        }
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'limitExpressionModel' property
         * of the parent microflows.CustomRange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCustomRangeUnderLimitExpressionModel(container) {
            internal.createInVersionCheck(container.model, IntegerLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IntegerLiteral, "limitExpressionModel", false);
        }
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'offsetExpressionModel' property
         * of the parent microflows.CustomRange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCustomRangeUnderOffsetExpressionModel(container) {
            internal.createInVersionCheck(container.model, IntegerLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IntegerLiteral, "offsetExpressionModel", false);
        }
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.DocumentTemplateParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInDocumentTemplateParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, IntegerLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IntegerLiteral, "argumentModel", false);
        }
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'returnValueModel' property
         * of the parent microflows.EndEvent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInEndEventUnderReturnValueModel(container) {
            internal.createInVersionCheck(container.model, IntegerLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IntegerLiteral, "returnValueModel", false);
        }
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'expressionModel' property
         * of the parent microflows.ExpressionListOperation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.3 to 9.7.0
         */
        static createInExpressionListOperationUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, IntegerLiteral.structureTypeName, { start: "9.0.3", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IntegerLiteral, "expressionModel", false);
        }
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'expressionModel' property
         * of the parent microflows.ExpressionSplitCondition element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInExpressionSplitConditionUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, IntegerLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IntegerLiteral, "expressionModel", false);
        }
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'valueModel' property
         * of the parent microflows.FormDataPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 to 9.7.0
         */
        static createInFormDataPartUnderValueModel(container) {
            internal.createInVersionCheck(container.model, IntegerLiteral.structureTypeName, { start: "8.0.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IntegerLiteral, "valueModel", false);
        }
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'marginBottomInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginBottomInInchModel(container) {
            internal.createInVersionCheck(container.model, IntegerLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IntegerLiteral, "marginBottomInInchModel", false);
        }
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'marginLeftInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginLeftInInchModel(container) {
            internal.createInVersionCheck(container.model, IntegerLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IntegerLiteral, "marginLeftInInchModel", false);
        }
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'marginRightInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginRightInInchModel(container) {
            internal.createInVersionCheck(container.model, IntegerLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IntegerLiteral, "marginRightInInchModel", false);
        }
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'marginTopInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginTopInInchModel(container) {
            internal.createInVersionCheck(container.model, IntegerLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IntegerLiteral, "marginTopInInchModel", false);
        }
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'customLocationModel' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderCustomLocationModel(container) {
            internal.createInVersionCheck(container.model, IntegerLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IntegerLiteral, "customLocationModel", false);
        }
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'password' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderPassword(container) {
            internal.createInVersionCheck(container.model, IntegerLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IntegerLiteral, "password", false);
        }
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'username' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderUsername(container) {
            internal.createInVersionCheck(container.model, IntegerLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IntegerLiteral, "username", false);
        }
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'valueModel' property
         * of the parent microflows.HttpHeaderEntry element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpHeaderEntryUnderValueModel(container) {
            internal.createInVersionCheck(container.model, IntegerLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IntegerLiteral, "valueModel", false);
        }
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'expressionModel' property
         * of the parent microflows.InspectAttribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInInspectAttributeUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, IntegerLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IntegerLiteral, "expressionModel", false);
        }
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'nodeModel' property
         * of the parent microflows.LogMessageAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInLogMessageActionUnderNodeModel(container) {
            internal.createInVersionCheck(container.model, IntegerLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IntegerLiteral, "nodeModel", false);
        }
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'valueModel' property
         * of the parent microflows.MemberChange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInMemberChangeUnderValueModel(container) {
            internal.createInVersionCheck(container.model, IntegerLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IntegerLiteral, "valueModel", false);
        }
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.MicroflowCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInMicroflowCallParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, IntegerLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IntegerLiteral, "argumentModel", false);
        }
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.NanoflowCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 to 9.7.0
         */
        static createInNanoflowCallParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, IntegerLiteral.structureTypeName, { start: "8.0.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IntegerLiteral, "argumentModel", false);
        }
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'hostExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderHostExpressionModel(container) {
            internal.createInVersionCheck(container.model, IntegerLiteral.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IntegerLiteral, "hostExpressionModel", false);
        }
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'passwordExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderPasswordExpressionModel(container) {
            internal.createInVersionCheck(container.model, IntegerLiteral.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IntegerLiteral, "passwordExpressionModel", false);
        }
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'portExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderPortExpressionModel(container) {
            internal.createInVersionCheck(container.model, IntegerLiteral.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IntegerLiteral, "portExpressionModel", false);
        }
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'useConfigurationExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderUseConfigurationExpressionModel(container) {
            internal.createInVersionCheck(container.model, IntegerLiteral.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IntegerLiteral, "useConfigurationExpressionModel", false);
        }
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'usernameExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderUsernameExpressionModel(container) {
            internal.createInVersionCheck(container.model, IntegerLiteral.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IntegerLiteral, "usernameExpressionModel", false);
        }
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'timeOutModel' property
         * of the parent microflows.RestCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInRestCallActionUnderTimeOutModel(container) {
            internal.createInVersionCheck(container.model, IntegerLiteral.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IntegerLiteral, "timeOutModel", false);
        }
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.RuleCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInRuleCallParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, IntegerLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IntegerLiteral, "argumentModel", false);
        }
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'expressionModel' property
         * of the parent microflows.TemplateArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInTemplateArgumentUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, IntegerLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IntegerLiteral, "expressionModel", false);
        }
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'timeOutModel' property
         * of the parent microflows.WebServiceCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInWebServiceCallActionUnderTimeOutModel(container) {
            internal.createInVersionCheck(container.model, IntegerLiteral.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IntegerLiteral, "timeOutModel", false);
        }
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.WebServiceOperationParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInWebServiceOperationParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, IntegerLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IntegerLiteral, "argumentModel", false);
        }
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'expressionModel' property
         * of the parent pages.ConditionalSettings element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInConditionalSettingsUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, IntegerLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IntegerLiteral, "expressionModel", false);
        }
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'expressionModel' property
         * of the parent pages.WidgetValidation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInWidgetValidationUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, IntegerLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IntegerLiteral, "expressionModel", false);
        }
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * The new IntegerLiteral will be automatically stored in the 'timeoutModel' property
         * of the parent rest.ConsumedODataService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.5.0 to 9.7.0
         */
        static createInConsumedODataServiceUnderTimeoutModel(container) {
            internal.createInVersionCheck(container.model, IntegerLiteral.structureTypeName, { start: "8.5.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, IntegerLiteral, "timeoutModel", false);
        }
        /**
         * Creates and returns a new IntegerLiteral instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, IntegerLiteral);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    IntegerLiteral.structureTypeName = "Expressions$IntegerLiteral";
    IntegerLiteral.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.9.0",
        deleted: "9.8.0",
        deletionMessage: null,
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    expressions.IntegerLiteral = IntegerLiteral;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.8.0: deleted
     * In version 7.9.0: introduced
     */
    class NoExpression extends Expression {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new NoExpression() cannot be invoked directly, please use 'model.expressions.createNoExpression()'");
            }
        }
        get containerAsBinaryExpression() {
            return super.getContainerAs(BinaryExpression);
        }
        get containerAsFunctionCallExpression() {
            return super.getContainerAs(FunctionCallExpression);
        }
        get containerAsIfExpression() {
            return super.getContainerAs(IfExpression);
        }
        get containerAsParenthesisExpression() {
            return super.getContainerAs(ParenthesisExpression);
        }
        get containerAsUnaryExpression() {
            return super.getContainerAs(UnaryExpression);
        }
        get containerAsAppServiceCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.AppServiceCallParameterMapping);
        }
        get containerAsBasicCodeActionParameterValue() {
            return super.getContainerAs(microflows_1.microflows.BasicCodeActionParameterValue);
        }
        get containerAsBasicJavaActionParameterValue() {
            return super.getContainerAs(microflows_1.microflows.BasicJavaActionParameterValue);
        }
        get containerAsBinaryRequestHandling() {
            return super.getContainerAs(microflows_1.microflows.BinaryRequestHandling);
        }
        get containerAsChangeListAction() {
            return super.getContainerAs(microflows_1.microflows.ChangeListAction);
        }
        get containerAsChangeVariableAction() {
            return super.getContainerAs(microflows_1.microflows.ChangeVariableAction);
        }
        get containerAsCreateVariableAction() {
            return super.getContainerAs(microflows_1.microflows.CreateVariableAction);
        }
        get containerAsCustomRange() {
            return super.getContainerAs(microflows_1.microflows.CustomRange);
        }
        get containerAsDocumentTemplateParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.DocumentTemplateParameterMapping);
        }
        get containerAsEndEvent() {
            return super.getContainerAs(microflows_1.microflows.EndEvent);
        }
        get containerAsExpressionListOperation() {
            return super.getContainerAs(microflows_1.microflows.ExpressionListOperation);
        }
        get containerAsExpressionSplitCondition() {
            return super.getContainerAs(microflows_1.microflows.ExpressionSplitCondition);
        }
        get containerAsFormDataPart() {
            return super.getContainerAs(microflows_1.microflows.FormDataPart);
        }
        get containerAsGenerateDocumentAction() {
            return super.getContainerAs(microflows_1.microflows.GenerateDocumentAction);
        }
        get containerAsHttpConfiguration() {
            return super.getContainerAs(microflows_1.microflows.HttpConfiguration);
        }
        get containerAsHttpHeaderEntry() {
            return super.getContainerAs(microflows_1.microflows.HttpHeaderEntry);
        }
        get containerAsInspectAttribute() {
            return super.getContainerAs(microflows_1.microflows.InspectAttribute);
        }
        get containerAsLogMessageAction() {
            return super.getContainerAs(microflows_1.microflows.LogMessageAction);
        }
        get containerAsMemberChange() {
            return super.getContainerAs(microflows_1.microflows.MemberChange);
        }
        get containerAsMicroflowCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.MicroflowCallParameterMapping);
        }
        get containerAsNanoflowCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.NanoflowCallParameterMapping);
        }
        get containerAsProxyConfiguration() {
            return super.getContainerAs(microflows_1.microflows.ProxyConfiguration);
        }
        get containerAsRestCallAction() {
            return super.getContainerAs(microflows_1.microflows.RestCallAction);
        }
        get containerAsRuleCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.RuleCallParameterMapping);
        }
        get containerAsTemplateArgument() {
            return super.getContainerAs(microflows_1.microflows.TemplateArgument);
        }
        get containerAsWebServiceCallAction() {
            return super.getContainerAs(microflows_1.microflows.WebServiceCallAction);
        }
        get containerAsWebServiceOperationParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.WebServiceOperationParameterMapping);
        }
        get containerAsConditionalSettings() {
            return super.getContainerAs(pages_1.pages.ConditionalSettings);
        }
        get containerAsWidgetValidation() {
            return super.getContainerAs(pages_1.pages.WidgetValidation);
        }
        get containerAsConsumedODataService() {
            return super.getContainerAs(rest_1.rest.ConsumedODataService);
        }
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'left' property
         * of the parent BinaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryExpressionUnderLeft(container) {
            internal.createInVersionCheck(container.model, NoExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, NoExpression, "left", false);
        }
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'right' property
         * of the parent BinaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryExpressionUnderRight(container) {
            internal.createInVersionCheck(container.model, NoExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, NoExpression, "right", false);
        }
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'arguments' property
         * of the parent FunctionCallExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInFunctionCallExpressionUnderArguments(container) {
            internal.createInVersionCheck(container.model, NoExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, NoExpression, "arguments", true);
        }
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'condition' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderCondition(container) {
            internal.createInVersionCheck(container.model, NoExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, NoExpression, "condition", false);
        }
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'ifFalse' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderIfFalse(container) {
            internal.createInVersionCheck(container.model, NoExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, NoExpression, "ifFalse", false);
        }
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'ifTrue' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderIfTrue(container) {
            internal.createInVersionCheck(container.model, NoExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, NoExpression, "ifTrue", false);
        }
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'expression' property
         * of the parent ParenthesisExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInParenthesisExpressionUnderExpression(container) {
            internal.createInVersionCheck(container.model, NoExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, NoExpression, "expression", false);
        }
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'expression' property
         * of the parent UnaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInUnaryExpressionUnderExpression(container) {
            internal.createInVersionCheck(container.model, NoExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, NoExpression, "expression", false);
        }
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.AppServiceCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceCallParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, NoExpression.structureTypeName, { start: "7.9.0", end: "9.0.1" });
            return internal.instancehelpers.createElement(container, NoExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.BasicCodeActionParameterValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 to 9.7.0
         */
        static createInBasicCodeActionParameterValueUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, NoExpression.structureTypeName, { start: "7.21.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, NoExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.BasicJavaActionParameterValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 7.20.0
         */
        static createInBasicJavaActionParameterValueUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, NoExpression.structureTypeName, { start: "7.9.0", end: "7.20.0" });
            return internal.instancehelpers.createElement(container, NoExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.BinaryRequestHandling element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryRequestHandlingUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, NoExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, NoExpression, "expressionModel", false);
        }
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.ChangeListAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInChangeListActionUnderValueModel(container) {
            internal.createInVersionCheck(container.model, NoExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, NoExpression, "valueModel", false);
        }
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.ChangeVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInChangeVariableActionUnderValueModel(container) {
            internal.createInVersionCheck(container.model, NoExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, NoExpression, "valueModel", false);
        }
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'initialValueModel' property
         * of the parent microflows.CreateVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCreateVariableActionUnderInitialValueModel(container) {
            internal.createInVersionCheck(container.model, NoExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, NoExpression, "initialValueModel", false);
        }
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'limitExpressionModel' property
         * of the parent microflows.CustomRange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCustomRangeUnderLimitExpressionModel(container) {
            internal.createInVersionCheck(container.model, NoExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, NoExpression, "limitExpressionModel", false);
        }
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'offsetExpressionModel' property
         * of the parent microflows.CustomRange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCustomRangeUnderOffsetExpressionModel(container) {
            internal.createInVersionCheck(container.model, NoExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, NoExpression, "offsetExpressionModel", false);
        }
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.DocumentTemplateParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInDocumentTemplateParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, NoExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, NoExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'returnValueModel' property
         * of the parent microflows.EndEvent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInEndEventUnderReturnValueModel(container) {
            internal.createInVersionCheck(container.model, NoExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, NoExpression, "returnValueModel", false);
        }
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.ExpressionListOperation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.3 to 9.7.0
         */
        static createInExpressionListOperationUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, NoExpression.structureTypeName, { start: "9.0.3", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, NoExpression, "expressionModel", false);
        }
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.ExpressionSplitCondition element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInExpressionSplitConditionUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, NoExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, NoExpression, "expressionModel", false);
        }
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.FormDataPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 to 9.7.0
         */
        static createInFormDataPartUnderValueModel(container) {
            internal.createInVersionCheck(container.model, NoExpression.structureTypeName, { start: "8.0.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, NoExpression, "valueModel", false);
        }
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'marginBottomInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginBottomInInchModel(container) {
            internal.createInVersionCheck(container.model, NoExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, NoExpression, "marginBottomInInchModel", false);
        }
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'marginLeftInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginLeftInInchModel(container) {
            internal.createInVersionCheck(container.model, NoExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, NoExpression, "marginLeftInInchModel", false);
        }
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'marginRightInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginRightInInchModel(container) {
            internal.createInVersionCheck(container.model, NoExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, NoExpression, "marginRightInInchModel", false);
        }
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'marginTopInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginTopInInchModel(container) {
            internal.createInVersionCheck(container.model, NoExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, NoExpression, "marginTopInInchModel", false);
        }
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'customLocationModel' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderCustomLocationModel(container) {
            internal.createInVersionCheck(container.model, NoExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, NoExpression, "customLocationModel", false);
        }
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'password' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderPassword(container) {
            internal.createInVersionCheck(container.model, NoExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, NoExpression, "password", false);
        }
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'username' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderUsername(container) {
            internal.createInVersionCheck(container.model, NoExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, NoExpression, "username", false);
        }
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.HttpHeaderEntry element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpHeaderEntryUnderValueModel(container) {
            internal.createInVersionCheck(container.model, NoExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, NoExpression, "valueModel", false);
        }
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.InspectAttribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInInspectAttributeUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, NoExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, NoExpression, "expressionModel", false);
        }
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'nodeModel' property
         * of the parent microflows.LogMessageAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInLogMessageActionUnderNodeModel(container) {
            internal.createInVersionCheck(container.model, NoExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, NoExpression, "nodeModel", false);
        }
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.MemberChange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInMemberChangeUnderValueModel(container) {
            internal.createInVersionCheck(container.model, NoExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, NoExpression, "valueModel", false);
        }
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.MicroflowCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInMicroflowCallParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, NoExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, NoExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.NanoflowCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 to 9.7.0
         */
        static createInNanoflowCallParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, NoExpression.structureTypeName, { start: "8.0.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, NoExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'hostExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderHostExpressionModel(container) {
            internal.createInVersionCheck(container.model, NoExpression.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, NoExpression, "hostExpressionModel", false);
        }
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'passwordExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderPasswordExpressionModel(container) {
            internal.createInVersionCheck(container.model, NoExpression.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, NoExpression, "passwordExpressionModel", false);
        }
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'portExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderPortExpressionModel(container) {
            internal.createInVersionCheck(container.model, NoExpression.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, NoExpression, "portExpressionModel", false);
        }
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'useConfigurationExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderUseConfigurationExpressionModel(container) {
            internal.createInVersionCheck(container.model, NoExpression.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, NoExpression, "useConfigurationExpressionModel", false);
        }
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'usernameExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderUsernameExpressionModel(container) {
            internal.createInVersionCheck(container.model, NoExpression.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, NoExpression, "usernameExpressionModel", false);
        }
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'timeOutModel' property
         * of the parent microflows.RestCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInRestCallActionUnderTimeOutModel(container) {
            internal.createInVersionCheck(container.model, NoExpression.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, NoExpression, "timeOutModel", false);
        }
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.RuleCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInRuleCallParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, NoExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, NoExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.TemplateArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInTemplateArgumentUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, NoExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, NoExpression, "expressionModel", false);
        }
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'timeOutModel' property
         * of the parent microflows.WebServiceCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInWebServiceCallActionUnderTimeOutModel(container) {
            internal.createInVersionCheck(container.model, NoExpression.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, NoExpression, "timeOutModel", false);
        }
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.WebServiceOperationParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInWebServiceOperationParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, NoExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, NoExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'expressionModel' property
         * of the parent pages.ConditionalSettings element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInConditionalSettingsUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, NoExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, NoExpression, "expressionModel", false);
        }
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'expressionModel' property
         * of the parent pages.WidgetValidation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInWidgetValidationUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, NoExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, NoExpression, "expressionModel", false);
        }
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * The new NoExpression will be automatically stored in the 'timeoutModel' property
         * of the parent rest.ConsumedODataService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.5.0 to 9.7.0
         */
        static createInConsumedODataServiceUnderTimeoutModel(container) {
            internal.createInVersionCheck(container.model, NoExpression.structureTypeName, { start: "8.5.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, NoExpression, "timeoutModel", false);
        }
        /**
         * Creates and returns a new NoExpression instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, NoExpression);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    NoExpression.structureTypeName = "Expressions$NoExpression";
    NoExpression.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.9.0",
        deleted: "9.8.0",
        deletionMessage: null,
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    expressions.NoExpression = NoExpression;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.8.0: deleted
     * In version 7.9.0: introduced
     */
    class NoVariableRef extends VariableRef {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new NoVariableRef() cannot be invoked directly, please use 'model.expressions.createNoVariableRef()'");
            }
        }
        get containerAsVariableRefExpression() {
            return super.getContainerAs(VariableRefExpression);
        }
        /**
         * Creates and returns a new NoVariableRef instance in the SDK and on the server.
         * The new NoVariableRef will be automatically stored in the 'variable' property
         * of the parent VariableRefExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, NoVariableRef.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, NoVariableRef, "variable", false);
        }
        /**
         * Creates and returns a new NoVariableRef instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, NoVariableRef);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    NoVariableRef.structureTypeName = "Expressions$NoVariableRef";
    NoVariableRef.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.9.0",
        deleted: "9.8.0",
        deletionMessage: null,
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    expressions.NoVariableRef = NoVariableRef;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.8.0: deleted
     * In version 7.9.0: introduced
     */
    class ParenthesisExpression extends Expression {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__expression = new internal.PartProperty(ParenthesisExpression, this, "expression", null, true);
            if (arguments.length < 4) {
                throw new Error("new ParenthesisExpression() cannot be invoked directly, please use 'model.expressions.createParenthesisExpression()'");
            }
        }
        get containerAsBinaryExpression() {
            return super.getContainerAs(BinaryExpression);
        }
        get containerAsFunctionCallExpression() {
            return super.getContainerAs(FunctionCallExpression);
        }
        get containerAsIfExpression() {
            return super.getContainerAs(IfExpression);
        }
        get containerAsParenthesisExpression() {
            return super.getContainerAs(ParenthesisExpression);
        }
        get containerAsUnaryExpression() {
            return super.getContainerAs(UnaryExpression);
        }
        get containerAsAppServiceCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.AppServiceCallParameterMapping);
        }
        get containerAsBasicCodeActionParameterValue() {
            return super.getContainerAs(microflows_1.microflows.BasicCodeActionParameterValue);
        }
        get containerAsBasicJavaActionParameterValue() {
            return super.getContainerAs(microflows_1.microflows.BasicJavaActionParameterValue);
        }
        get containerAsBinaryRequestHandling() {
            return super.getContainerAs(microflows_1.microflows.BinaryRequestHandling);
        }
        get containerAsChangeListAction() {
            return super.getContainerAs(microflows_1.microflows.ChangeListAction);
        }
        get containerAsChangeVariableAction() {
            return super.getContainerAs(microflows_1.microflows.ChangeVariableAction);
        }
        get containerAsCreateVariableAction() {
            return super.getContainerAs(microflows_1.microflows.CreateVariableAction);
        }
        get containerAsCustomRange() {
            return super.getContainerAs(microflows_1.microflows.CustomRange);
        }
        get containerAsDocumentTemplateParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.DocumentTemplateParameterMapping);
        }
        get containerAsEndEvent() {
            return super.getContainerAs(microflows_1.microflows.EndEvent);
        }
        get containerAsExpressionListOperation() {
            return super.getContainerAs(microflows_1.microflows.ExpressionListOperation);
        }
        get containerAsExpressionSplitCondition() {
            return super.getContainerAs(microflows_1.microflows.ExpressionSplitCondition);
        }
        get containerAsFormDataPart() {
            return super.getContainerAs(microflows_1.microflows.FormDataPart);
        }
        get containerAsGenerateDocumentAction() {
            return super.getContainerAs(microflows_1.microflows.GenerateDocumentAction);
        }
        get containerAsHttpConfiguration() {
            return super.getContainerAs(microflows_1.microflows.HttpConfiguration);
        }
        get containerAsHttpHeaderEntry() {
            return super.getContainerAs(microflows_1.microflows.HttpHeaderEntry);
        }
        get containerAsInspectAttribute() {
            return super.getContainerAs(microflows_1.microflows.InspectAttribute);
        }
        get containerAsLogMessageAction() {
            return super.getContainerAs(microflows_1.microflows.LogMessageAction);
        }
        get containerAsMemberChange() {
            return super.getContainerAs(microflows_1.microflows.MemberChange);
        }
        get containerAsMicroflowCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.MicroflowCallParameterMapping);
        }
        get containerAsNanoflowCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.NanoflowCallParameterMapping);
        }
        get containerAsProxyConfiguration() {
            return super.getContainerAs(microflows_1.microflows.ProxyConfiguration);
        }
        get containerAsRestCallAction() {
            return super.getContainerAs(microflows_1.microflows.RestCallAction);
        }
        get containerAsRuleCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.RuleCallParameterMapping);
        }
        get containerAsTemplateArgument() {
            return super.getContainerAs(microflows_1.microflows.TemplateArgument);
        }
        get containerAsWebServiceCallAction() {
            return super.getContainerAs(microflows_1.microflows.WebServiceCallAction);
        }
        get containerAsWebServiceOperationParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.WebServiceOperationParameterMapping);
        }
        get containerAsConditionalSettings() {
            return super.getContainerAs(pages_1.pages.ConditionalSettings);
        }
        get containerAsWidgetValidation() {
            return super.getContainerAs(pages_1.pages.WidgetValidation);
        }
        get containerAsConsumedODataService() {
            return super.getContainerAs(rest_1.rest.ConsumedODataService);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get expression() {
            return this.__expression.get();
        }
        set expression(newValue) {
            this.__expression.set(newValue);
        }
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'left' property
         * of the parent BinaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryExpressionUnderLeft(container) {
            internal.createInVersionCheck(container.model, ParenthesisExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ParenthesisExpression, "left", false);
        }
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'right' property
         * of the parent BinaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryExpressionUnderRight(container) {
            internal.createInVersionCheck(container.model, ParenthesisExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ParenthesisExpression, "right", false);
        }
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'arguments' property
         * of the parent FunctionCallExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInFunctionCallExpressionUnderArguments(container) {
            internal.createInVersionCheck(container.model, ParenthesisExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ParenthesisExpression, "arguments", true);
        }
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'condition' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderCondition(container) {
            internal.createInVersionCheck(container.model, ParenthesisExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ParenthesisExpression, "condition", false);
        }
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'ifFalse' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderIfFalse(container) {
            internal.createInVersionCheck(container.model, ParenthesisExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ParenthesisExpression, "ifFalse", false);
        }
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'ifTrue' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderIfTrue(container) {
            internal.createInVersionCheck(container.model, ParenthesisExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ParenthesisExpression, "ifTrue", false);
        }
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'expression' property
         * of the parent ParenthesisExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInParenthesisExpressionUnderExpression(container) {
            internal.createInVersionCheck(container.model, ParenthesisExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ParenthesisExpression, "expression", false);
        }
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'expression' property
         * of the parent UnaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInUnaryExpressionUnderExpression(container) {
            internal.createInVersionCheck(container.model, ParenthesisExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ParenthesisExpression, "expression", false);
        }
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.AppServiceCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceCallParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, ParenthesisExpression.structureTypeName, { start: "7.9.0", end: "9.0.1" });
            return internal.instancehelpers.createElement(container, ParenthesisExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.BasicCodeActionParameterValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 to 9.7.0
         */
        static createInBasicCodeActionParameterValueUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, ParenthesisExpression.structureTypeName, { start: "7.21.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ParenthesisExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.BasicJavaActionParameterValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 7.20.0
         */
        static createInBasicJavaActionParameterValueUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, ParenthesisExpression.structureTypeName, { start: "7.9.0", end: "7.20.0" });
            return internal.instancehelpers.createElement(container, ParenthesisExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.BinaryRequestHandling element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryRequestHandlingUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, ParenthesisExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ParenthesisExpression, "expressionModel", false);
        }
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.ChangeListAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInChangeListActionUnderValueModel(container) {
            internal.createInVersionCheck(container.model, ParenthesisExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ParenthesisExpression, "valueModel", false);
        }
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.ChangeVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInChangeVariableActionUnderValueModel(container) {
            internal.createInVersionCheck(container.model, ParenthesisExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ParenthesisExpression, "valueModel", false);
        }
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'initialValueModel' property
         * of the parent microflows.CreateVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCreateVariableActionUnderInitialValueModel(container) {
            internal.createInVersionCheck(container.model, ParenthesisExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ParenthesisExpression, "initialValueModel", false);
        }
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'limitExpressionModel' property
         * of the parent microflows.CustomRange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCustomRangeUnderLimitExpressionModel(container) {
            internal.createInVersionCheck(container.model, ParenthesisExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ParenthesisExpression, "limitExpressionModel", false);
        }
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'offsetExpressionModel' property
         * of the parent microflows.CustomRange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCustomRangeUnderOffsetExpressionModel(container) {
            internal.createInVersionCheck(container.model, ParenthesisExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ParenthesisExpression, "offsetExpressionModel", false);
        }
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.DocumentTemplateParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInDocumentTemplateParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, ParenthesisExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ParenthesisExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'returnValueModel' property
         * of the parent microflows.EndEvent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInEndEventUnderReturnValueModel(container) {
            internal.createInVersionCheck(container.model, ParenthesisExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ParenthesisExpression, "returnValueModel", false);
        }
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.ExpressionListOperation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.3 to 9.7.0
         */
        static createInExpressionListOperationUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, ParenthesisExpression.structureTypeName, { start: "9.0.3", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ParenthesisExpression, "expressionModel", false);
        }
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.ExpressionSplitCondition element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInExpressionSplitConditionUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, ParenthesisExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ParenthesisExpression, "expressionModel", false);
        }
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.FormDataPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 to 9.7.0
         */
        static createInFormDataPartUnderValueModel(container) {
            internal.createInVersionCheck(container.model, ParenthesisExpression.structureTypeName, { start: "8.0.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ParenthesisExpression, "valueModel", false);
        }
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'marginBottomInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginBottomInInchModel(container) {
            internal.createInVersionCheck(container.model, ParenthesisExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ParenthesisExpression, "marginBottomInInchModel", false);
        }
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'marginLeftInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginLeftInInchModel(container) {
            internal.createInVersionCheck(container.model, ParenthesisExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ParenthesisExpression, "marginLeftInInchModel", false);
        }
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'marginRightInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginRightInInchModel(container) {
            internal.createInVersionCheck(container.model, ParenthesisExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ParenthesisExpression, "marginRightInInchModel", false);
        }
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'marginTopInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginTopInInchModel(container) {
            internal.createInVersionCheck(container.model, ParenthesisExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ParenthesisExpression, "marginTopInInchModel", false);
        }
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'customLocationModel' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderCustomLocationModel(container) {
            internal.createInVersionCheck(container.model, ParenthesisExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ParenthesisExpression, "customLocationModel", false);
        }
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'password' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderPassword(container) {
            internal.createInVersionCheck(container.model, ParenthesisExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ParenthesisExpression, "password", false);
        }
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'username' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderUsername(container) {
            internal.createInVersionCheck(container.model, ParenthesisExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ParenthesisExpression, "username", false);
        }
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.HttpHeaderEntry element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpHeaderEntryUnderValueModel(container) {
            internal.createInVersionCheck(container.model, ParenthesisExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ParenthesisExpression, "valueModel", false);
        }
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.InspectAttribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInInspectAttributeUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, ParenthesisExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ParenthesisExpression, "expressionModel", false);
        }
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'nodeModel' property
         * of the parent microflows.LogMessageAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInLogMessageActionUnderNodeModel(container) {
            internal.createInVersionCheck(container.model, ParenthesisExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ParenthesisExpression, "nodeModel", false);
        }
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.MemberChange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInMemberChangeUnderValueModel(container) {
            internal.createInVersionCheck(container.model, ParenthesisExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ParenthesisExpression, "valueModel", false);
        }
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.MicroflowCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInMicroflowCallParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, ParenthesisExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ParenthesisExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.NanoflowCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 to 9.7.0
         */
        static createInNanoflowCallParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, ParenthesisExpression.structureTypeName, { start: "8.0.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ParenthesisExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'hostExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderHostExpressionModel(container) {
            internal.createInVersionCheck(container.model, ParenthesisExpression.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ParenthesisExpression, "hostExpressionModel", false);
        }
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'passwordExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderPasswordExpressionModel(container) {
            internal.createInVersionCheck(container.model, ParenthesisExpression.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ParenthesisExpression, "passwordExpressionModel", false);
        }
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'portExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderPortExpressionModel(container) {
            internal.createInVersionCheck(container.model, ParenthesisExpression.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ParenthesisExpression, "portExpressionModel", false);
        }
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'useConfigurationExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderUseConfigurationExpressionModel(container) {
            internal.createInVersionCheck(container.model, ParenthesisExpression.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ParenthesisExpression, "useConfigurationExpressionModel", false);
        }
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'usernameExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderUsernameExpressionModel(container) {
            internal.createInVersionCheck(container.model, ParenthesisExpression.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ParenthesisExpression, "usernameExpressionModel", false);
        }
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'timeOutModel' property
         * of the parent microflows.RestCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInRestCallActionUnderTimeOutModel(container) {
            internal.createInVersionCheck(container.model, ParenthesisExpression.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ParenthesisExpression, "timeOutModel", false);
        }
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.RuleCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInRuleCallParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, ParenthesisExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ParenthesisExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.TemplateArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInTemplateArgumentUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, ParenthesisExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ParenthesisExpression, "expressionModel", false);
        }
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'timeOutModel' property
         * of the parent microflows.WebServiceCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInWebServiceCallActionUnderTimeOutModel(container) {
            internal.createInVersionCheck(container.model, ParenthesisExpression.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ParenthesisExpression, "timeOutModel", false);
        }
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.WebServiceOperationParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInWebServiceOperationParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, ParenthesisExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ParenthesisExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'expressionModel' property
         * of the parent pages.ConditionalSettings element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInConditionalSettingsUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, ParenthesisExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ParenthesisExpression, "expressionModel", false);
        }
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'expressionModel' property
         * of the parent pages.WidgetValidation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInWidgetValidationUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, ParenthesisExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ParenthesisExpression, "expressionModel", false);
        }
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * The new ParenthesisExpression will be automatically stored in the 'timeoutModel' property
         * of the parent rest.ConsumedODataService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.5.0 to 9.7.0
         */
        static createInConsumedODataServiceUnderTimeoutModel(container) {
            internal.createInVersionCheck(container.model, ParenthesisExpression.structureTypeName, { start: "8.5.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, ParenthesisExpression, "timeoutModel", false);
        }
        /**
         * Creates and returns a new ParenthesisExpression instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ParenthesisExpression);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.expression = NoExpression.create(this.model);
        }
    }
    ParenthesisExpression.structureTypeName = "Expressions$ParenthesisExpression";
    ParenthesisExpression.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.9.0",
        deleted: "9.8.0",
        deletionMessage: null,
        properties: {
            expression: {
                required: {
                    currentValue: true
                }
            }
        },
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    expressions.ParenthesisExpression = ParenthesisExpression;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.8.0: deleted
     * In version 7.9.0: introduced
     */
    class StringLiteral extends LiteralExpression {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__value = new internal.PrimitiveProperty(StringLiteral, this, "value", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new StringLiteral() cannot be invoked directly, please use 'model.expressions.createStringLiteral()'");
            }
        }
        get containerAsBinaryExpression() {
            return super.getContainerAs(BinaryExpression);
        }
        get containerAsFunctionCallExpression() {
            return super.getContainerAs(FunctionCallExpression);
        }
        get containerAsIfExpression() {
            return super.getContainerAs(IfExpression);
        }
        get containerAsParenthesisExpression() {
            return super.getContainerAs(ParenthesisExpression);
        }
        get containerAsUnaryExpression() {
            return super.getContainerAs(UnaryExpression);
        }
        get containerAsAppServiceCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.AppServiceCallParameterMapping);
        }
        get containerAsBasicCodeActionParameterValue() {
            return super.getContainerAs(microflows_1.microflows.BasicCodeActionParameterValue);
        }
        get containerAsBasicJavaActionParameterValue() {
            return super.getContainerAs(microflows_1.microflows.BasicJavaActionParameterValue);
        }
        get containerAsBinaryRequestHandling() {
            return super.getContainerAs(microflows_1.microflows.BinaryRequestHandling);
        }
        get containerAsChangeListAction() {
            return super.getContainerAs(microflows_1.microflows.ChangeListAction);
        }
        get containerAsChangeVariableAction() {
            return super.getContainerAs(microflows_1.microflows.ChangeVariableAction);
        }
        get containerAsCreateVariableAction() {
            return super.getContainerAs(microflows_1.microflows.CreateVariableAction);
        }
        get containerAsCustomRange() {
            return super.getContainerAs(microflows_1.microflows.CustomRange);
        }
        get containerAsDocumentTemplateParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.DocumentTemplateParameterMapping);
        }
        get containerAsEndEvent() {
            return super.getContainerAs(microflows_1.microflows.EndEvent);
        }
        get containerAsExpressionListOperation() {
            return super.getContainerAs(microflows_1.microflows.ExpressionListOperation);
        }
        get containerAsExpressionSplitCondition() {
            return super.getContainerAs(microflows_1.microflows.ExpressionSplitCondition);
        }
        get containerAsFormDataPart() {
            return super.getContainerAs(microflows_1.microflows.FormDataPart);
        }
        get containerAsGenerateDocumentAction() {
            return super.getContainerAs(microflows_1.microflows.GenerateDocumentAction);
        }
        get containerAsHttpConfiguration() {
            return super.getContainerAs(microflows_1.microflows.HttpConfiguration);
        }
        get containerAsHttpHeaderEntry() {
            return super.getContainerAs(microflows_1.microflows.HttpHeaderEntry);
        }
        get containerAsInspectAttribute() {
            return super.getContainerAs(microflows_1.microflows.InspectAttribute);
        }
        get containerAsLogMessageAction() {
            return super.getContainerAs(microflows_1.microflows.LogMessageAction);
        }
        get containerAsMemberChange() {
            return super.getContainerAs(microflows_1.microflows.MemberChange);
        }
        get containerAsMicroflowCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.MicroflowCallParameterMapping);
        }
        get containerAsNanoflowCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.NanoflowCallParameterMapping);
        }
        get containerAsProxyConfiguration() {
            return super.getContainerAs(microflows_1.microflows.ProxyConfiguration);
        }
        get containerAsRestCallAction() {
            return super.getContainerAs(microflows_1.microflows.RestCallAction);
        }
        get containerAsRuleCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.RuleCallParameterMapping);
        }
        get containerAsTemplateArgument() {
            return super.getContainerAs(microflows_1.microflows.TemplateArgument);
        }
        get containerAsWebServiceCallAction() {
            return super.getContainerAs(microflows_1.microflows.WebServiceCallAction);
        }
        get containerAsWebServiceOperationParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.WebServiceOperationParameterMapping);
        }
        get containerAsConditionalSettings() {
            return super.getContainerAs(pages_1.pages.ConditionalSettings);
        }
        get containerAsWidgetValidation() {
            return super.getContainerAs(pages_1.pages.WidgetValidation);
        }
        get containerAsConsumedODataService() {
            return super.getContainerAs(rest_1.rest.ConsumedODataService);
        }
        get value() {
            return this.__value.get();
        }
        set value(newValue) {
            this.__value.set(newValue);
        }
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'left' property
         * of the parent BinaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryExpressionUnderLeft(container) {
            internal.createInVersionCheck(container.model, StringLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, StringLiteral, "left", false);
        }
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'right' property
         * of the parent BinaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryExpressionUnderRight(container) {
            internal.createInVersionCheck(container.model, StringLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, StringLiteral, "right", false);
        }
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'arguments' property
         * of the parent FunctionCallExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInFunctionCallExpressionUnderArguments(container) {
            internal.createInVersionCheck(container.model, StringLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, StringLiteral, "arguments", true);
        }
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'condition' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderCondition(container) {
            internal.createInVersionCheck(container.model, StringLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, StringLiteral, "condition", false);
        }
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'ifFalse' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderIfFalse(container) {
            internal.createInVersionCheck(container.model, StringLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, StringLiteral, "ifFalse", false);
        }
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'ifTrue' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderIfTrue(container) {
            internal.createInVersionCheck(container.model, StringLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, StringLiteral, "ifTrue", false);
        }
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'expression' property
         * of the parent ParenthesisExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInParenthesisExpressionUnderExpression(container) {
            internal.createInVersionCheck(container.model, StringLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, StringLiteral, "expression", false);
        }
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'expression' property
         * of the parent UnaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInUnaryExpressionUnderExpression(container) {
            internal.createInVersionCheck(container.model, StringLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, StringLiteral, "expression", false);
        }
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.AppServiceCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceCallParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, StringLiteral.structureTypeName, { start: "7.9.0", end: "9.0.1" });
            return internal.instancehelpers.createElement(container, StringLiteral, "argumentModel", false);
        }
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.BasicCodeActionParameterValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 to 9.7.0
         */
        static createInBasicCodeActionParameterValueUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, StringLiteral.structureTypeName, { start: "7.21.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, StringLiteral, "argumentModel", false);
        }
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.BasicJavaActionParameterValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 7.20.0
         */
        static createInBasicJavaActionParameterValueUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, StringLiteral.structureTypeName, { start: "7.9.0", end: "7.20.0" });
            return internal.instancehelpers.createElement(container, StringLiteral, "argumentModel", false);
        }
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'expressionModel' property
         * of the parent microflows.BinaryRequestHandling element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryRequestHandlingUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, StringLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, StringLiteral, "expressionModel", false);
        }
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'valueModel' property
         * of the parent microflows.ChangeListAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInChangeListActionUnderValueModel(container) {
            internal.createInVersionCheck(container.model, StringLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, StringLiteral, "valueModel", false);
        }
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'valueModel' property
         * of the parent microflows.ChangeVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInChangeVariableActionUnderValueModel(container) {
            internal.createInVersionCheck(container.model, StringLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, StringLiteral, "valueModel", false);
        }
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'initialValueModel' property
         * of the parent microflows.CreateVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCreateVariableActionUnderInitialValueModel(container) {
            internal.createInVersionCheck(container.model, StringLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, StringLiteral, "initialValueModel", false);
        }
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'limitExpressionModel' property
         * of the parent microflows.CustomRange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCustomRangeUnderLimitExpressionModel(container) {
            internal.createInVersionCheck(container.model, StringLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, StringLiteral, "limitExpressionModel", false);
        }
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'offsetExpressionModel' property
         * of the parent microflows.CustomRange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCustomRangeUnderOffsetExpressionModel(container) {
            internal.createInVersionCheck(container.model, StringLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, StringLiteral, "offsetExpressionModel", false);
        }
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.DocumentTemplateParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInDocumentTemplateParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, StringLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, StringLiteral, "argumentModel", false);
        }
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'returnValueModel' property
         * of the parent microflows.EndEvent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInEndEventUnderReturnValueModel(container) {
            internal.createInVersionCheck(container.model, StringLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, StringLiteral, "returnValueModel", false);
        }
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'expressionModel' property
         * of the parent microflows.ExpressionListOperation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.3 to 9.7.0
         */
        static createInExpressionListOperationUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, StringLiteral.structureTypeName, { start: "9.0.3", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, StringLiteral, "expressionModel", false);
        }
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'expressionModel' property
         * of the parent microflows.ExpressionSplitCondition element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInExpressionSplitConditionUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, StringLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, StringLiteral, "expressionModel", false);
        }
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'valueModel' property
         * of the parent microflows.FormDataPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 to 9.7.0
         */
        static createInFormDataPartUnderValueModel(container) {
            internal.createInVersionCheck(container.model, StringLiteral.structureTypeName, { start: "8.0.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, StringLiteral, "valueModel", false);
        }
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'marginBottomInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginBottomInInchModel(container) {
            internal.createInVersionCheck(container.model, StringLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, StringLiteral, "marginBottomInInchModel", false);
        }
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'marginLeftInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginLeftInInchModel(container) {
            internal.createInVersionCheck(container.model, StringLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, StringLiteral, "marginLeftInInchModel", false);
        }
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'marginRightInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginRightInInchModel(container) {
            internal.createInVersionCheck(container.model, StringLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, StringLiteral, "marginRightInInchModel", false);
        }
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'marginTopInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginTopInInchModel(container) {
            internal.createInVersionCheck(container.model, StringLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, StringLiteral, "marginTopInInchModel", false);
        }
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'customLocationModel' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderCustomLocationModel(container) {
            internal.createInVersionCheck(container.model, StringLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, StringLiteral, "customLocationModel", false);
        }
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'password' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderPassword(container) {
            internal.createInVersionCheck(container.model, StringLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, StringLiteral, "password", false);
        }
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'username' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderUsername(container) {
            internal.createInVersionCheck(container.model, StringLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, StringLiteral, "username", false);
        }
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'valueModel' property
         * of the parent microflows.HttpHeaderEntry element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpHeaderEntryUnderValueModel(container) {
            internal.createInVersionCheck(container.model, StringLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, StringLiteral, "valueModel", false);
        }
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'expressionModel' property
         * of the parent microflows.InspectAttribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInInspectAttributeUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, StringLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, StringLiteral, "expressionModel", false);
        }
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'nodeModel' property
         * of the parent microflows.LogMessageAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInLogMessageActionUnderNodeModel(container) {
            internal.createInVersionCheck(container.model, StringLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, StringLiteral, "nodeModel", false);
        }
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'valueModel' property
         * of the parent microflows.MemberChange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInMemberChangeUnderValueModel(container) {
            internal.createInVersionCheck(container.model, StringLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, StringLiteral, "valueModel", false);
        }
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.MicroflowCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInMicroflowCallParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, StringLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, StringLiteral, "argumentModel", false);
        }
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.NanoflowCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 to 9.7.0
         */
        static createInNanoflowCallParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, StringLiteral.structureTypeName, { start: "8.0.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, StringLiteral, "argumentModel", false);
        }
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'hostExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderHostExpressionModel(container) {
            internal.createInVersionCheck(container.model, StringLiteral.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, StringLiteral, "hostExpressionModel", false);
        }
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'passwordExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderPasswordExpressionModel(container) {
            internal.createInVersionCheck(container.model, StringLiteral.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, StringLiteral, "passwordExpressionModel", false);
        }
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'portExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderPortExpressionModel(container) {
            internal.createInVersionCheck(container.model, StringLiteral.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, StringLiteral, "portExpressionModel", false);
        }
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'useConfigurationExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderUseConfigurationExpressionModel(container) {
            internal.createInVersionCheck(container.model, StringLiteral.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, StringLiteral, "useConfigurationExpressionModel", false);
        }
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'usernameExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderUsernameExpressionModel(container) {
            internal.createInVersionCheck(container.model, StringLiteral.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, StringLiteral, "usernameExpressionModel", false);
        }
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'timeOutModel' property
         * of the parent microflows.RestCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInRestCallActionUnderTimeOutModel(container) {
            internal.createInVersionCheck(container.model, StringLiteral.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, StringLiteral, "timeOutModel", false);
        }
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.RuleCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInRuleCallParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, StringLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, StringLiteral, "argumentModel", false);
        }
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'expressionModel' property
         * of the parent microflows.TemplateArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInTemplateArgumentUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, StringLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, StringLiteral, "expressionModel", false);
        }
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'timeOutModel' property
         * of the parent microflows.WebServiceCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInWebServiceCallActionUnderTimeOutModel(container) {
            internal.createInVersionCheck(container.model, StringLiteral.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, StringLiteral, "timeOutModel", false);
        }
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'argumentModel' property
         * of the parent microflows.WebServiceOperationParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInWebServiceOperationParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, StringLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, StringLiteral, "argumentModel", false);
        }
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'expressionModel' property
         * of the parent pages.ConditionalSettings element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInConditionalSettingsUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, StringLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, StringLiteral, "expressionModel", false);
        }
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'expressionModel' property
         * of the parent pages.WidgetValidation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInWidgetValidationUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, StringLiteral.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, StringLiteral, "expressionModel", false);
        }
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * The new StringLiteral will be automatically stored in the 'timeoutModel' property
         * of the parent rest.ConsumedODataService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.5.0 to 9.7.0
         */
        static createInConsumedODataServiceUnderTimeoutModel(container) {
            internal.createInVersionCheck(container.model, StringLiteral.structureTypeName, { start: "8.5.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, StringLiteral, "timeoutModel", false);
        }
        /**
         * Creates and returns a new StringLiteral instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, StringLiteral);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    StringLiteral.structureTypeName = "Expressions$StringLiteral";
    StringLiteral.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.9.0",
        deleted: "9.8.0",
        deletionMessage: null,
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    expressions.StringLiteral = StringLiteral;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.8.0: deleted
     * In version 7.9.0: introduced
     */
    class UnaryExpression extends Expression {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__operator = new internal.EnumProperty(UnaryExpression, this, "operator", UnaryOperator.None, UnaryOperator);
            /** @internal */
            this.__expression = new internal.PartProperty(UnaryExpression, this, "expression", null, true);
            if (arguments.length < 4) {
                throw new Error("new UnaryExpression() cannot be invoked directly, please use 'model.expressions.createUnaryExpression()'");
            }
        }
        get containerAsBinaryExpression() {
            return super.getContainerAs(BinaryExpression);
        }
        get containerAsFunctionCallExpression() {
            return super.getContainerAs(FunctionCallExpression);
        }
        get containerAsIfExpression() {
            return super.getContainerAs(IfExpression);
        }
        get containerAsParenthesisExpression() {
            return super.getContainerAs(ParenthesisExpression);
        }
        get containerAsUnaryExpression() {
            return super.getContainerAs(UnaryExpression);
        }
        get containerAsAppServiceCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.AppServiceCallParameterMapping);
        }
        get containerAsBasicCodeActionParameterValue() {
            return super.getContainerAs(microflows_1.microflows.BasicCodeActionParameterValue);
        }
        get containerAsBasicJavaActionParameterValue() {
            return super.getContainerAs(microflows_1.microflows.BasicJavaActionParameterValue);
        }
        get containerAsBinaryRequestHandling() {
            return super.getContainerAs(microflows_1.microflows.BinaryRequestHandling);
        }
        get containerAsChangeListAction() {
            return super.getContainerAs(microflows_1.microflows.ChangeListAction);
        }
        get containerAsChangeVariableAction() {
            return super.getContainerAs(microflows_1.microflows.ChangeVariableAction);
        }
        get containerAsCreateVariableAction() {
            return super.getContainerAs(microflows_1.microflows.CreateVariableAction);
        }
        get containerAsCustomRange() {
            return super.getContainerAs(microflows_1.microflows.CustomRange);
        }
        get containerAsDocumentTemplateParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.DocumentTemplateParameterMapping);
        }
        get containerAsEndEvent() {
            return super.getContainerAs(microflows_1.microflows.EndEvent);
        }
        get containerAsExpressionListOperation() {
            return super.getContainerAs(microflows_1.microflows.ExpressionListOperation);
        }
        get containerAsExpressionSplitCondition() {
            return super.getContainerAs(microflows_1.microflows.ExpressionSplitCondition);
        }
        get containerAsFormDataPart() {
            return super.getContainerAs(microflows_1.microflows.FormDataPart);
        }
        get containerAsGenerateDocumentAction() {
            return super.getContainerAs(microflows_1.microflows.GenerateDocumentAction);
        }
        get containerAsHttpConfiguration() {
            return super.getContainerAs(microflows_1.microflows.HttpConfiguration);
        }
        get containerAsHttpHeaderEntry() {
            return super.getContainerAs(microflows_1.microflows.HttpHeaderEntry);
        }
        get containerAsInspectAttribute() {
            return super.getContainerAs(microflows_1.microflows.InspectAttribute);
        }
        get containerAsLogMessageAction() {
            return super.getContainerAs(microflows_1.microflows.LogMessageAction);
        }
        get containerAsMemberChange() {
            return super.getContainerAs(microflows_1.microflows.MemberChange);
        }
        get containerAsMicroflowCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.MicroflowCallParameterMapping);
        }
        get containerAsNanoflowCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.NanoflowCallParameterMapping);
        }
        get containerAsProxyConfiguration() {
            return super.getContainerAs(microflows_1.microflows.ProxyConfiguration);
        }
        get containerAsRestCallAction() {
            return super.getContainerAs(microflows_1.microflows.RestCallAction);
        }
        get containerAsRuleCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.RuleCallParameterMapping);
        }
        get containerAsTemplateArgument() {
            return super.getContainerAs(microflows_1.microflows.TemplateArgument);
        }
        get containerAsWebServiceCallAction() {
            return super.getContainerAs(microflows_1.microflows.WebServiceCallAction);
        }
        get containerAsWebServiceOperationParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.WebServiceOperationParameterMapping);
        }
        get containerAsConditionalSettings() {
            return super.getContainerAs(pages_1.pages.ConditionalSettings);
        }
        get containerAsWidgetValidation() {
            return super.getContainerAs(pages_1.pages.WidgetValidation);
        }
        get containerAsConsumedODataService() {
            return super.getContainerAs(rest_1.rest.ConsumedODataService);
        }
        get operator() {
            return this.__operator.get();
        }
        set operator(newValue) {
            this.__operator.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get expression() {
            return this.__expression.get();
        }
        set expression(newValue) {
            this.__expression.set(newValue);
        }
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'left' property
         * of the parent BinaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryExpressionUnderLeft(container) {
            internal.createInVersionCheck(container.model, UnaryExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnaryExpression, "left", false);
        }
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'right' property
         * of the parent BinaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryExpressionUnderRight(container) {
            internal.createInVersionCheck(container.model, UnaryExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnaryExpression, "right", false);
        }
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'arguments' property
         * of the parent FunctionCallExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInFunctionCallExpressionUnderArguments(container) {
            internal.createInVersionCheck(container.model, UnaryExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnaryExpression, "arguments", true);
        }
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'condition' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderCondition(container) {
            internal.createInVersionCheck(container.model, UnaryExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnaryExpression, "condition", false);
        }
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'ifFalse' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderIfFalse(container) {
            internal.createInVersionCheck(container.model, UnaryExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnaryExpression, "ifFalse", false);
        }
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'ifTrue' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderIfTrue(container) {
            internal.createInVersionCheck(container.model, UnaryExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnaryExpression, "ifTrue", false);
        }
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'expression' property
         * of the parent ParenthesisExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInParenthesisExpressionUnderExpression(container) {
            internal.createInVersionCheck(container.model, UnaryExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnaryExpression, "expression", false);
        }
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'expression' property
         * of the parent UnaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInUnaryExpressionUnderExpression(container) {
            internal.createInVersionCheck(container.model, UnaryExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnaryExpression, "expression", false);
        }
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.AppServiceCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceCallParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, UnaryExpression.structureTypeName, { start: "7.9.0", end: "9.0.1" });
            return internal.instancehelpers.createElement(container, UnaryExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.BasicCodeActionParameterValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 to 9.7.0
         */
        static createInBasicCodeActionParameterValueUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, UnaryExpression.structureTypeName, { start: "7.21.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnaryExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.BasicJavaActionParameterValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 7.20.0
         */
        static createInBasicJavaActionParameterValueUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, UnaryExpression.structureTypeName, { start: "7.9.0", end: "7.20.0" });
            return internal.instancehelpers.createElement(container, UnaryExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.BinaryRequestHandling element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryRequestHandlingUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, UnaryExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnaryExpression, "expressionModel", false);
        }
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.ChangeListAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInChangeListActionUnderValueModel(container) {
            internal.createInVersionCheck(container.model, UnaryExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnaryExpression, "valueModel", false);
        }
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.ChangeVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInChangeVariableActionUnderValueModel(container) {
            internal.createInVersionCheck(container.model, UnaryExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnaryExpression, "valueModel", false);
        }
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'initialValueModel' property
         * of the parent microflows.CreateVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCreateVariableActionUnderInitialValueModel(container) {
            internal.createInVersionCheck(container.model, UnaryExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnaryExpression, "initialValueModel", false);
        }
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'limitExpressionModel' property
         * of the parent microflows.CustomRange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCustomRangeUnderLimitExpressionModel(container) {
            internal.createInVersionCheck(container.model, UnaryExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnaryExpression, "limitExpressionModel", false);
        }
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'offsetExpressionModel' property
         * of the parent microflows.CustomRange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCustomRangeUnderOffsetExpressionModel(container) {
            internal.createInVersionCheck(container.model, UnaryExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnaryExpression, "offsetExpressionModel", false);
        }
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.DocumentTemplateParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInDocumentTemplateParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, UnaryExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnaryExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'returnValueModel' property
         * of the parent microflows.EndEvent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInEndEventUnderReturnValueModel(container) {
            internal.createInVersionCheck(container.model, UnaryExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnaryExpression, "returnValueModel", false);
        }
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.ExpressionListOperation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.3 to 9.7.0
         */
        static createInExpressionListOperationUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, UnaryExpression.structureTypeName, { start: "9.0.3", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnaryExpression, "expressionModel", false);
        }
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.ExpressionSplitCondition element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInExpressionSplitConditionUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, UnaryExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnaryExpression, "expressionModel", false);
        }
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.FormDataPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 to 9.7.0
         */
        static createInFormDataPartUnderValueModel(container) {
            internal.createInVersionCheck(container.model, UnaryExpression.structureTypeName, { start: "8.0.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnaryExpression, "valueModel", false);
        }
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'marginBottomInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginBottomInInchModel(container) {
            internal.createInVersionCheck(container.model, UnaryExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnaryExpression, "marginBottomInInchModel", false);
        }
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'marginLeftInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginLeftInInchModel(container) {
            internal.createInVersionCheck(container.model, UnaryExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnaryExpression, "marginLeftInInchModel", false);
        }
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'marginRightInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginRightInInchModel(container) {
            internal.createInVersionCheck(container.model, UnaryExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnaryExpression, "marginRightInInchModel", false);
        }
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'marginTopInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginTopInInchModel(container) {
            internal.createInVersionCheck(container.model, UnaryExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnaryExpression, "marginTopInInchModel", false);
        }
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'customLocationModel' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderCustomLocationModel(container) {
            internal.createInVersionCheck(container.model, UnaryExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnaryExpression, "customLocationModel", false);
        }
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'password' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderPassword(container) {
            internal.createInVersionCheck(container.model, UnaryExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnaryExpression, "password", false);
        }
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'username' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderUsername(container) {
            internal.createInVersionCheck(container.model, UnaryExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnaryExpression, "username", false);
        }
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.HttpHeaderEntry element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpHeaderEntryUnderValueModel(container) {
            internal.createInVersionCheck(container.model, UnaryExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnaryExpression, "valueModel", false);
        }
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.InspectAttribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInInspectAttributeUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, UnaryExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnaryExpression, "expressionModel", false);
        }
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'nodeModel' property
         * of the parent microflows.LogMessageAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInLogMessageActionUnderNodeModel(container) {
            internal.createInVersionCheck(container.model, UnaryExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnaryExpression, "nodeModel", false);
        }
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.MemberChange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInMemberChangeUnderValueModel(container) {
            internal.createInVersionCheck(container.model, UnaryExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnaryExpression, "valueModel", false);
        }
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.MicroflowCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInMicroflowCallParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, UnaryExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnaryExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.NanoflowCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 to 9.7.0
         */
        static createInNanoflowCallParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, UnaryExpression.structureTypeName, { start: "8.0.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnaryExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'hostExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderHostExpressionModel(container) {
            internal.createInVersionCheck(container.model, UnaryExpression.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnaryExpression, "hostExpressionModel", false);
        }
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'passwordExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderPasswordExpressionModel(container) {
            internal.createInVersionCheck(container.model, UnaryExpression.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnaryExpression, "passwordExpressionModel", false);
        }
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'portExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderPortExpressionModel(container) {
            internal.createInVersionCheck(container.model, UnaryExpression.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnaryExpression, "portExpressionModel", false);
        }
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'useConfigurationExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderUseConfigurationExpressionModel(container) {
            internal.createInVersionCheck(container.model, UnaryExpression.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnaryExpression, "useConfigurationExpressionModel", false);
        }
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'usernameExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderUsernameExpressionModel(container) {
            internal.createInVersionCheck(container.model, UnaryExpression.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnaryExpression, "usernameExpressionModel", false);
        }
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'timeOutModel' property
         * of the parent microflows.RestCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInRestCallActionUnderTimeOutModel(container) {
            internal.createInVersionCheck(container.model, UnaryExpression.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnaryExpression, "timeOutModel", false);
        }
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.RuleCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInRuleCallParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, UnaryExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnaryExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.TemplateArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInTemplateArgumentUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, UnaryExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnaryExpression, "expressionModel", false);
        }
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'timeOutModel' property
         * of the parent microflows.WebServiceCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInWebServiceCallActionUnderTimeOutModel(container) {
            internal.createInVersionCheck(container.model, UnaryExpression.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnaryExpression, "timeOutModel", false);
        }
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.WebServiceOperationParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInWebServiceOperationParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, UnaryExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnaryExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'expressionModel' property
         * of the parent pages.ConditionalSettings element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInConditionalSettingsUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, UnaryExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnaryExpression, "expressionModel", false);
        }
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'expressionModel' property
         * of the parent pages.WidgetValidation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInWidgetValidationUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, UnaryExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnaryExpression, "expressionModel", false);
        }
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * The new UnaryExpression will be automatically stored in the 'timeoutModel' property
         * of the parent rest.ConsumedODataService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.5.0 to 9.7.0
         */
        static createInConsumedODataServiceUnderTimeoutModel(container) {
            internal.createInVersionCheck(container.model, UnaryExpression.structureTypeName, { start: "8.5.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnaryExpression, "timeoutModel", false);
        }
        /**
         * Creates and returns a new UnaryExpression instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, UnaryExpression);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.expression = NoExpression.create(this.model);
            this.operator = UnaryOperator.None;
        }
    }
    UnaryExpression.structureTypeName = "Expressions$UnaryExpression";
    UnaryExpression.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.9.0",
        deleted: "9.8.0",
        deletionMessage: null,
        properties: {
            expression: {
                required: {
                    currentValue: true
                }
            }
        },
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    expressions.UnaryExpression = UnaryExpression;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.8.0: deleted
     * In version 7.9.0: introduced
     */
    class UnparsableExpression extends Expression {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__expression = new internal.PrimitiveProperty(UnparsableExpression, this, "expression", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new UnparsableExpression() cannot be invoked directly, please use 'model.expressions.createUnparsableExpression()'");
            }
        }
        get containerAsBinaryExpression() {
            return super.getContainerAs(BinaryExpression);
        }
        get containerAsFunctionCallExpression() {
            return super.getContainerAs(FunctionCallExpression);
        }
        get containerAsIfExpression() {
            return super.getContainerAs(IfExpression);
        }
        get containerAsParenthesisExpression() {
            return super.getContainerAs(ParenthesisExpression);
        }
        get containerAsUnaryExpression() {
            return super.getContainerAs(UnaryExpression);
        }
        get containerAsAppServiceCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.AppServiceCallParameterMapping);
        }
        get containerAsBasicCodeActionParameterValue() {
            return super.getContainerAs(microflows_1.microflows.BasicCodeActionParameterValue);
        }
        get containerAsBasicJavaActionParameterValue() {
            return super.getContainerAs(microflows_1.microflows.BasicJavaActionParameterValue);
        }
        get containerAsBinaryRequestHandling() {
            return super.getContainerAs(microflows_1.microflows.BinaryRequestHandling);
        }
        get containerAsChangeListAction() {
            return super.getContainerAs(microflows_1.microflows.ChangeListAction);
        }
        get containerAsChangeVariableAction() {
            return super.getContainerAs(microflows_1.microflows.ChangeVariableAction);
        }
        get containerAsCreateVariableAction() {
            return super.getContainerAs(microflows_1.microflows.CreateVariableAction);
        }
        get containerAsCustomRange() {
            return super.getContainerAs(microflows_1.microflows.CustomRange);
        }
        get containerAsDocumentTemplateParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.DocumentTemplateParameterMapping);
        }
        get containerAsEndEvent() {
            return super.getContainerAs(microflows_1.microflows.EndEvent);
        }
        get containerAsExpressionListOperation() {
            return super.getContainerAs(microflows_1.microflows.ExpressionListOperation);
        }
        get containerAsExpressionSplitCondition() {
            return super.getContainerAs(microflows_1.microflows.ExpressionSplitCondition);
        }
        get containerAsFormDataPart() {
            return super.getContainerAs(microflows_1.microflows.FormDataPart);
        }
        get containerAsGenerateDocumentAction() {
            return super.getContainerAs(microflows_1.microflows.GenerateDocumentAction);
        }
        get containerAsHttpConfiguration() {
            return super.getContainerAs(microflows_1.microflows.HttpConfiguration);
        }
        get containerAsHttpHeaderEntry() {
            return super.getContainerAs(microflows_1.microflows.HttpHeaderEntry);
        }
        get containerAsInspectAttribute() {
            return super.getContainerAs(microflows_1.microflows.InspectAttribute);
        }
        get containerAsLogMessageAction() {
            return super.getContainerAs(microflows_1.microflows.LogMessageAction);
        }
        get containerAsMemberChange() {
            return super.getContainerAs(microflows_1.microflows.MemberChange);
        }
        get containerAsMicroflowCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.MicroflowCallParameterMapping);
        }
        get containerAsNanoflowCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.NanoflowCallParameterMapping);
        }
        get containerAsProxyConfiguration() {
            return super.getContainerAs(microflows_1.microflows.ProxyConfiguration);
        }
        get containerAsRestCallAction() {
            return super.getContainerAs(microflows_1.microflows.RestCallAction);
        }
        get containerAsRuleCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.RuleCallParameterMapping);
        }
        get containerAsTemplateArgument() {
            return super.getContainerAs(microflows_1.microflows.TemplateArgument);
        }
        get containerAsWebServiceCallAction() {
            return super.getContainerAs(microflows_1.microflows.WebServiceCallAction);
        }
        get containerAsWebServiceOperationParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.WebServiceOperationParameterMapping);
        }
        get containerAsConditionalSettings() {
            return super.getContainerAs(pages_1.pages.ConditionalSettings);
        }
        get containerAsWidgetValidation() {
            return super.getContainerAs(pages_1.pages.WidgetValidation);
        }
        get containerAsConsumedODataService() {
            return super.getContainerAs(rest_1.rest.ConsumedODataService);
        }
        get expression() {
            return this.__expression.get();
        }
        set expression(newValue) {
            this.__expression.set(newValue);
        }
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'left' property
         * of the parent BinaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryExpressionUnderLeft(container) {
            internal.createInVersionCheck(container.model, UnparsableExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnparsableExpression, "left", false);
        }
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'right' property
         * of the parent BinaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryExpressionUnderRight(container) {
            internal.createInVersionCheck(container.model, UnparsableExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnparsableExpression, "right", false);
        }
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'arguments' property
         * of the parent FunctionCallExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInFunctionCallExpressionUnderArguments(container) {
            internal.createInVersionCheck(container.model, UnparsableExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnparsableExpression, "arguments", true);
        }
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'condition' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderCondition(container) {
            internal.createInVersionCheck(container.model, UnparsableExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnparsableExpression, "condition", false);
        }
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'ifFalse' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderIfFalse(container) {
            internal.createInVersionCheck(container.model, UnparsableExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnparsableExpression, "ifFalse", false);
        }
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'ifTrue' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderIfTrue(container) {
            internal.createInVersionCheck(container.model, UnparsableExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnparsableExpression, "ifTrue", false);
        }
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'expression' property
         * of the parent ParenthesisExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInParenthesisExpressionUnderExpression(container) {
            internal.createInVersionCheck(container.model, UnparsableExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnparsableExpression, "expression", false);
        }
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'expression' property
         * of the parent UnaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInUnaryExpressionUnderExpression(container) {
            internal.createInVersionCheck(container.model, UnparsableExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnparsableExpression, "expression", false);
        }
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.AppServiceCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceCallParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, UnparsableExpression.structureTypeName, { start: "7.9.0", end: "9.0.1" });
            return internal.instancehelpers.createElement(container, UnparsableExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.BasicCodeActionParameterValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 to 9.7.0
         */
        static createInBasicCodeActionParameterValueUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, UnparsableExpression.structureTypeName, { start: "7.21.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnparsableExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.BasicJavaActionParameterValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 7.20.0
         */
        static createInBasicJavaActionParameterValueUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, UnparsableExpression.structureTypeName, { start: "7.9.0", end: "7.20.0" });
            return internal.instancehelpers.createElement(container, UnparsableExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.BinaryRequestHandling element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryRequestHandlingUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, UnparsableExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnparsableExpression, "expressionModel", false);
        }
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.ChangeListAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInChangeListActionUnderValueModel(container) {
            internal.createInVersionCheck(container.model, UnparsableExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnparsableExpression, "valueModel", false);
        }
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.ChangeVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInChangeVariableActionUnderValueModel(container) {
            internal.createInVersionCheck(container.model, UnparsableExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnparsableExpression, "valueModel", false);
        }
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'initialValueModel' property
         * of the parent microflows.CreateVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCreateVariableActionUnderInitialValueModel(container) {
            internal.createInVersionCheck(container.model, UnparsableExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnparsableExpression, "initialValueModel", false);
        }
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'limitExpressionModel' property
         * of the parent microflows.CustomRange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCustomRangeUnderLimitExpressionModel(container) {
            internal.createInVersionCheck(container.model, UnparsableExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnparsableExpression, "limitExpressionModel", false);
        }
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'offsetExpressionModel' property
         * of the parent microflows.CustomRange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCustomRangeUnderOffsetExpressionModel(container) {
            internal.createInVersionCheck(container.model, UnparsableExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnparsableExpression, "offsetExpressionModel", false);
        }
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.DocumentTemplateParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInDocumentTemplateParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, UnparsableExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnparsableExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'returnValueModel' property
         * of the parent microflows.EndEvent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInEndEventUnderReturnValueModel(container) {
            internal.createInVersionCheck(container.model, UnparsableExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnparsableExpression, "returnValueModel", false);
        }
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.ExpressionListOperation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.3 to 9.7.0
         */
        static createInExpressionListOperationUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, UnparsableExpression.structureTypeName, { start: "9.0.3", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnparsableExpression, "expressionModel", false);
        }
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.ExpressionSplitCondition element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInExpressionSplitConditionUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, UnparsableExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnparsableExpression, "expressionModel", false);
        }
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.FormDataPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 to 9.7.0
         */
        static createInFormDataPartUnderValueModel(container) {
            internal.createInVersionCheck(container.model, UnparsableExpression.structureTypeName, { start: "8.0.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnparsableExpression, "valueModel", false);
        }
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'marginBottomInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginBottomInInchModel(container) {
            internal.createInVersionCheck(container.model, UnparsableExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnparsableExpression, "marginBottomInInchModel", false);
        }
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'marginLeftInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginLeftInInchModel(container) {
            internal.createInVersionCheck(container.model, UnparsableExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnparsableExpression, "marginLeftInInchModel", false);
        }
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'marginRightInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginRightInInchModel(container) {
            internal.createInVersionCheck(container.model, UnparsableExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnparsableExpression, "marginRightInInchModel", false);
        }
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'marginTopInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginTopInInchModel(container) {
            internal.createInVersionCheck(container.model, UnparsableExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnparsableExpression, "marginTopInInchModel", false);
        }
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'customLocationModel' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderCustomLocationModel(container) {
            internal.createInVersionCheck(container.model, UnparsableExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnparsableExpression, "customLocationModel", false);
        }
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'password' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderPassword(container) {
            internal.createInVersionCheck(container.model, UnparsableExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnparsableExpression, "password", false);
        }
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'username' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderUsername(container) {
            internal.createInVersionCheck(container.model, UnparsableExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnparsableExpression, "username", false);
        }
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.HttpHeaderEntry element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpHeaderEntryUnderValueModel(container) {
            internal.createInVersionCheck(container.model, UnparsableExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnparsableExpression, "valueModel", false);
        }
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.InspectAttribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInInspectAttributeUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, UnparsableExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnparsableExpression, "expressionModel", false);
        }
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'nodeModel' property
         * of the parent microflows.LogMessageAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInLogMessageActionUnderNodeModel(container) {
            internal.createInVersionCheck(container.model, UnparsableExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnparsableExpression, "nodeModel", false);
        }
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.MemberChange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInMemberChangeUnderValueModel(container) {
            internal.createInVersionCheck(container.model, UnparsableExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnparsableExpression, "valueModel", false);
        }
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.MicroflowCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInMicroflowCallParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, UnparsableExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnparsableExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.NanoflowCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 to 9.7.0
         */
        static createInNanoflowCallParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, UnparsableExpression.structureTypeName, { start: "8.0.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnparsableExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'hostExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderHostExpressionModel(container) {
            internal.createInVersionCheck(container.model, UnparsableExpression.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnparsableExpression, "hostExpressionModel", false);
        }
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'passwordExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderPasswordExpressionModel(container) {
            internal.createInVersionCheck(container.model, UnparsableExpression.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnparsableExpression, "passwordExpressionModel", false);
        }
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'portExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderPortExpressionModel(container) {
            internal.createInVersionCheck(container.model, UnparsableExpression.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnparsableExpression, "portExpressionModel", false);
        }
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'useConfigurationExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderUseConfigurationExpressionModel(container) {
            internal.createInVersionCheck(container.model, UnparsableExpression.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnparsableExpression, "useConfigurationExpressionModel", false);
        }
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'usernameExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderUsernameExpressionModel(container) {
            internal.createInVersionCheck(container.model, UnparsableExpression.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnparsableExpression, "usernameExpressionModel", false);
        }
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'timeOutModel' property
         * of the parent microflows.RestCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInRestCallActionUnderTimeOutModel(container) {
            internal.createInVersionCheck(container.model, UnparsableExpression.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnparsableExpression, "timeOutModel", false);
        }
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.RuleCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInRuleCallParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, UnparsableExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnparsableExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.TemplateArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInTemplateArgumentUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, UnparsableExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnparsableExpression, "expressionModel", false);
        }
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'timeOutModel' property
         * of the parent microflows.WebServiceCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInWebServiceCallActionUnderTimeOutModel(container) {
            internal.createInVersionCheck(container.model, UnparsableExpression.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnparsableExpression, "timeOutModel", false);
        }
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.WebServiceOperationParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInWebServiceOperationParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, UnparsableExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnparsableExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'expressionModel' property
         * of the parent pages.ConditionalSettings element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInConditionalSettingsUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, UnparsableExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnparsableExpression, "expressionModel", false);
        }
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'expressionModel' property
         * of the parent pages.WidgetValidation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInWidgetValidationUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, UnparsableExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnparsableExpression, "expressionModel", false);
        }
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * The new UnparsableExpression will be automatically stored in the 'timeoutModel' property
         * of the parent rest.ConsumedODataService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.5.0 to 9.7.0
         */
        static createInConsumedODataServiceUnderTimeoutModel(container) {
            internal.createInVersionCheck(container.model, UnparsableExpression.structureTypeName, { start: "8.5.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, UnparsableExpression, "timeoutModel", false);
        }
        /**
         * Creates and returns a new UnparsableExpression instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, UnparsableExpression);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    UnparsableExpression.structureTypeName = "Expressions$UnparsableExpression";
    UnparsableExpression.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.9.0",
        deleted: "9.8.0",
        deletionMessage: null,
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    expressions.UnparsableExpression = UnparsableExpression;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.8.0: deleted
     * In version 7.9.0: introduced
     */
    class VariableRefExpression extends Expression {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__variable = new internal.PartProperty(VariableRefExpression, this, "variable", null, true);
            /** @internal */
            this.__member = new internal.PartProperty(VariableRefExpression, this, "member", null, false);
            if (arguments.length < 4) {
                throw new Error("new VariableRefExpression() cannot be invoked directly, please use 'model.expressions.createVariableRefExpression()'");
            }
        }
        get containerAsBinaryExpression() {
            return super.getContainerAs(BinaryExpression);
        }
        get containerAsFunctionCallExpression() {
            return super.getContainerAs(FunctionCallExpression);
        }
        get containerAsIfExpression() {
            return super.getContainerAs(IfExpression);
        }
        get containerAsParenthesisExpression() {
            return super.getContainerAs(ParenthesisExpression);
        }
        get containerAsUnaryExpression() {
            return super.getContainerAs(UnaryExpression);
        }
        get containerAsAppServiceCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.AppServiceCallParameterMapping);
        }
        get containerAsBasicCodeActionParameterValue() {
            return super.getContainerAs(microflows_1.microflows.BasicCodeActionParameterValue);
        }
        get containerAsBasicJavaActionParameterValue() {
            return super.getContainerAs(microflows_1.microflows.BasicJavaActionParameterValue);
        }
        get containerAsBinaryRequestHandling() {
            return super.getContainerAs(microflows_1.microflows.BinaryRequestHandling);
        }
        get containerAsChangeListAction() {
            return super.getContainerAs(microflows_1.microflows.ChangeListAction);
        }
        get containerAsChangeVariableAction() {
            return super.getContainerAs(microflows_1.microflows.ChangeVariableAction);
        }
        get containerAsCreateVariableAction() {
            return super.getContainerAs(microflows_1.microflows.CreateVariableAction);
        }
        get containerAsCustomRange() {
            return super.getContainerAs(microflows_1.microflows.CustomRange);
        }
        get containerAsDocumentTemplateParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.DocumentTemplateParameterMapping);
        }
        get containerAsEndEvent() {
            return super.getContainerAs(microflows_1.microflows.EndEvent);
        }
        get containerAsExpressionListOperation() {
            return super.getContainerAs(microflows_1.microflows.ExpressionListOperation);
        }
        get containerAsExpressionSplitCondition() {
            return super.getContainerAs(microflows_1.microflows.ExpressionSplitCondition);
        }
        get containerAsFormDataPart() {
            return super.getContainerAs(microflows_1.microflows.FormDataPart);
        }
        get containerAsGenerateDocumentAction() {
            return super.getContainerAs(microflows_1.microflows.GenerateDocumentAction);
        }
        get containerAsHttpConfiguration() {
            return super.getContainerAs(microflows_1.microflows.HttpConfiguration);
        }
        get containerAsHttpHeaderEntry() {
            return super.getContainerAs(microflows_1.microflows.HttpHeaderEntry);
        }
        get containerAsInspectAttribute() {
            return super.getContainerAs(microflows_1.microflows.InspectAttribute);
        }
        get containerAsLogMessageAction() {
            return super.getContainerAs(microflows_1.microflows.LogMessageAction);
        }
        get containerAsMemberChange() {
            return super.getContainerAs(microflows_1.microflows.MemberChange);
        }
        get containerAsMicroflowCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.MicroflowCallParameterMapping);
        }
        get containerAsNanoflowCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.NanoflowCallParameterMapping);
        }
        get containerAsProxyConfiguration() {
            return super.getContainerAs(microflows_1.microflows.ProxyConfiguration);
        }
        get containerAsRestCallAction() {
            return super.getContainerAs(microflows_1.microflows.RestCallAction);
        }
        get containerAsRuleCallParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.RuleCallParameterMapping);
        }
        get containerAsTemplateArgument() {
            return super.getContainerAs(microflows_1.microflows.TemplateArgument);
        }
        get containerAsWebServiceCallAction() {
            return super.getContainerAs(microflows_1.microflows.WebServiceCallAction);
        }
        get containerAsWebServiceOperationParameterMapping() {
            return super.getContainerAs(microflows_1.microflows.WebServiceOperationParameterMapping);
        }
        get containerAsConditionalSettings() {
            return super.getContainerAs(pages_1.pages.ConditionalSettings);
        }
        get containerAsWidgetValidation() {
            return super.getContainerAs(pages_1.pages.WidgetValidation);
        }
        get containerAsConsumedODataService() {
            return super.getContainerAs(rest_1.rest.ConsumedODataService);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get variable() {
            return this.__variable.get();
        }
        set variable(newValue) {
            this.__variable.set(newValue);
        }
        /**
         * In version 7.11.0: introduced
         */
        get member() {
            return this.__member.get();
        }
        set member(newValue) {
            this.__member.set(newValue);
        }
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'left' property
         * of the parent BinaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryExpressionUnderLeft(container) {
            internal.createInVersionCheck(container.model, VariableRefExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, VariableRefExpression, "left", false);
        }
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'right' property
         * of the parent BinaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryExpressionUnderRight(container) {
            internal.createInVersionCheck(container.model, VariableRefExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, VariableRefExpression, "right", false);
        }
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'arguments' property
         * of the parent FunctionCallExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInFunctionCallExpressionUnderArguments(container) {
            internal.createInVersionCheck(container.model, VariableRefExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, VariableRefExpression, "arguments", true);
        }
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'condition' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderCondition(container) {
            internal.createInVersionCheck(container.model, VariableRefExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, VariableRefExpression, "condition", false);
        }
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'ifFalse' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderIfFalse(container) {
            internal.createInVersionCheck(container.model, VariableRefExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, VariableRefExpression, "ifFalse", false);
        }
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'ifTrue' property
         * of the parent IfExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInIfExpressionUnderIfTrue(container) {
            internal.createInVersionCheck(container.model, VariableRefExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, VariableRefExpression, "ifTrue", false);
        }
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'expression' property
         * of the parent ParenthesisExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInParenthesisExpressionUnderExpression(container) {
            internal.createInVersionCheck(container.model, VariableRefExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, VariableRefExpression, "expression", false);
        }
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'expression' property
         * of the parent UnaryExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInUnaryExpressionUnderExpression(container) {
            internal.createInVersionCheck(container.model, VariableRefExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, VariableRefExpression, "expression", false);
        }
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.AppServiceCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceCallParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, VariableRefExpression.structureTypeName, { start: "7.9.0", end: "9.0.1" });
            return internal.instancehelpers.createElement(container, VariableRefExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.BasicCodeActionParameterValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 to 9.7.0
         */
        static createInBasicCodeActionParameterValueUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, VariableRefExpression.structureTypeName, { start: "7.21.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, VariableRefExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.BasicJavaActionParameterValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 7.20.0
         */
        static createInBasicJavaActionParameterValueUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, VariableRefExpression.structureTypeName, { start: "7.9.0", end: "7.20.0" });
            return internal.instancehelpers.createElement(container, VariableRefExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.BinaryRequestHandling element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInBinaryRequestHandlingUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, VariableRefExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, VariableRefExpression, "expressionModel", false);
        }
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.ChangeListAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInChangeListActionUnderValueModel(container) {
            internal.createInVersionCheck(container.model, VariableRefExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, VariableRefExpression, "valueModel", false);
        }
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.ChangeVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInChangeVariableActionUnderValueModel(container) {
            internal.createInVersionCheck(container.model, VariableRefExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, VariableRefExpression, "valueModel", false);
        }
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'initialValueModel' property
         * of the parent microflows.CreateVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCreateVariableActionUnderInitialValueModel(container) {
            internal.createInVersionCheck(container.model, VariableRefExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, VariableRefExpression, "initialValueModel", false);
        }
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'limitExpressionModel' property
         * of the parent microflows.CustomRange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCustomRangeUnderLimitExpressionModel(container) {
            internal.createInVersionCheck(container.model, VariableRefExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, VariableRefExpression, "limitExpressionModel", false);
        }
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'offsetExpressionModel' property
         * of the parent microflows.CustomRange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInCustomRangeUnderOffsetExpressionModel(container) {
            internal.createInVersionCheck(container.model, VariableRefExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, VariableRefExpression, "offsetExpressionModel", false);
        }
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.DocumentTemplateParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInDocumentTemplateParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, VariableRefExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, VariableRefExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'returnValueModel' property
         * of the parent microflows.EndEvent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInEndEventUnderReturnValueModel(container) {
            internal.createInVersionCheck(container.model, VariableRefExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, VariableRefExpression, "returnValueModel", false);
        }
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.ExpressionListOperation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.3 to 9.7.0
         */
        static createInExpressionListOperationUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, VariableRefExpression.structureTypeName, { start: "9.0.3", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, VariableRefExpression, "expressionModel", false);
        }
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.ExpressionSplitCondition element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInExpressionSplitConditionUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, VariableRefExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, VariableRefExpression, "expressionModel", false);
        }
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.FormDataPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 to 9.7.0
         */
        static createInFormDataPartUnderValueModel(container) {
            internal.createInVersionCheck(container.model, VariableRefExpression.structureTypeName, { start: "8.0.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, VariableRefExpression, "valueModel", false);
        }
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'marginBottomInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginBottomInInchModel(container) {
            internal.createInVersionCheck(container.model, VariableRefExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, VariableRefExpression, "marginBottomInInchModel", false);
        }
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'marginLeftInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginLeftInInchModel(container) {
            internal.createInVersionCheck(container.model, VariableRefExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, VariableRefExpression, "marginLeftInInchModel", false);
        }
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'marginRightInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginRightInInchModel(container) {
            internal.createInVersionCheck(container.model, VariableRefExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, VariableRefExpression, "marginRightInInchModel", false);
        }
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'marginTopInInchModel' property
         * of the parent microflows.GenerateDocumentAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInGenerateDocumentActionUnderMarginTopInInchModel(container) {
            internal.createInVersionCheck(container.model, VariableRefExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, VariableRefExpression, "marginTopInInchModel", false);
        }
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'customLocationModel' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderCustomLocationModel(container) {
            internal.createInVersionCheck(container.model, VariableRefExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, VariableRefExpression, "customLocationModel", false);
        }
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'password' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderPassword(container) {
            internal.createInVersionCheck(container.model, VariableRefExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, VariableRefExpression, "password", false);
        }
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'username' property
         * of the parent microflows.HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpConfigurationUnderUsername(container) {
            internal.createInVersionCheck(container.model, VariableRefExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, VariableRefExpression, "username", false);
        }
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.HttpHeaderEntry element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInHttpHeaderEntryUnderValueModel(container) {
            internal.createInVersionCheck(container.model, VariableRefExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, VariableRefExpression, "valueModel", false);
        }
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.InspectAttribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInInspectAttributeUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, VariableRefExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, VariableRefExpression, "expressionModel", false);
        }
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'nodeModel' property
         * of the parent microflows.LogMessageAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInLogMessageActionUnderNodeModel(container) {
            internal.createInVersionCheck(container.model, VariableRefExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, VariableRefExpression, "nodeModel", false);
        }
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'valueModel' property
         * of the parent microflows.MemberChange element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInMemberChangeUnderValueModel(container) {
            internal.createInVersionCheck(container.model, VariableRefExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, VariableRefExpression, "valueModel", false);
        }
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.MicroflowCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInMicroflowCallParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, VariableRefExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, VariableRefExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.NanoflowCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 to 9.7.0
         */
        static createInNanoflowCallParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, VariableRefExpression.structureTypeName, { start: "8.0.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, VariableRefExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'hostExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderHostExpressionModel(container) {
            internal.createInVersionCheck(container.model, VariableRefExpression.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, VariableRefExpression, "hostExpressionModel", false);
        }
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'passwordExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderPasswordExpressionModel(container) {
            internal.createInVersionCheck(container.model, VariableRefExpression.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, VariableRefExpression, "passwordExpressionModel", false);
        }
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'portExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderPortExpressionModel(container) {
            internal.createInVersionCheck(container.model, VariableRefExpression.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, VariableRefExpression, "portExpressionModel", false);
        }
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'useConfigurationExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderUseConfigurationExpressionModel(container) {
            internal.createInVersionCheck(container.model, VariableRefExpression.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, VariableRefExpression, "useConfigurationExpressionModel", false);
        }
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'usernameExpressionModel' property
         * of the parent microflows.ProxyConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInProxyConfigurationUnderUsernameExpressionModel(container) {
            internal.createInVersionCheck(container.model, VariableRefExpression.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, VariableRefExpression, "usernameExpressionModel", false);
        }
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'timeOutModel' property
         * of the parent microflows.RestCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInRestCallActionUnderTimeOutModel(container) {
            internal.createInVersionCheck(container.model, VariableRefExpression.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, VariableRefExpression, "timeOutModel", false);
        }
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.RuleCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInRuleCallParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, VariableRefExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, VariableRefExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'expressionModel' property
         * of the parent microflows.TemplateArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInTemplateArgumentUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, VariableRefExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, VariableRefExpression, "expressionModel", false);
        }
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'timeOutModel' property
         * of the parent microflows.WebServiceCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.7.0
         */
        static createInWebServiceCallActionUnderTimeOutModel(container) {
            internal.createInVersionCheck(container.model, VariableRefExpression.structureTypeName, { start: "7.15.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, VariableRefExpression, "timeOutModel", false);
        }
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'argumentModel' property
         * of the parent microflows.WebServiceOperationParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInWebServiceOperationParameterMappingUnderArgumentModel(container) {
            internal.createInVersionCheck(container.model, VariableRefExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, VariableRefExpression, "argumentModel", false);
        }
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'expressionModel' property
         * of the parent pages.ConditionalSettings element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInConditionalSettingsUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, VariableRefExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, VariableRefExpression, "expressionModel", false);
        }
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'expressionModel' property
         * of the parent pages.WidgetValidation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.7.0
         */
        static createInWidgetValidationUnderExpressionModel(container) {
            internal.createInVersionCheck(container.model, VariableRefExpression.structureTypeName, { start: "7.9.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, VariableRefExpression, "expressionModel", false);
        }
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * The new VariableRefExpression will be automatically stored in the 'timeoutModel' property
         * of the parent rest.ConsumedODataService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.5.0 to 9.7.0
         */
        static createInConsumedODataServiceUnderTimeoutModel(container) {
            internal.createInVersionCheck(container.model, VariableRefExpression.structureTypeName, { start: "8.5.0", end: "9.7.0" });
            return internal.instancehelpers.createElement(container, VariableRefExpression, "timeoutModel", false);
        }
        /**
         * Creates and returns a new VariableRefExpression instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, VariableRefExpression);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.variable = NoVariableRef.create(this.model);
        }
    }
    VariableRefExpression.structureTypeName = "Expressions$VariableRefExpression";
    VariableRefExpression.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.9.0",
        deleted: "9.8.0",
        deletionMessage: null,
        properties: {
            variable: {
                required: {
                    currentValue: true
                }
            },
            member: {
                introduced: "7.11.0"
            }
        },
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    expressions.VariableRefExpression = VariableRefExpression;
})(expressions = exports.expressions || (exports.expressions = {}));
const microflows_1 = require("./microflows");
const pages_1 = require("./pages");
const rest_1 = require("./rest");
//# sourceMappingURL=expressions.js.map