"use strict";
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.texts = exports.StructureVersionInfo = void 0;
const internal = require("../sdk/internal");
exports.StructureVersionInfo = internal.StructureVersionInfo;
const projects_1 = require("./projects");
var texts;
(function (texts) {
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `Texts`.
     */
    class SystemText extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__text = new internal.PartProperty(SystemText, this, "text", null, true);
            /** @internal */
            this.__key = new internal.PrimitiveProperty(SystemText, this, "key", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new SystemText() cannot be invoked directly, please use 'model.texts.createSystemText()'");
            }
        }
        get containerAsSystemTextCollection() {
            return super.getContainerAs(SystemTextCollection);
        }
        get text() {
            return this.__text.get();
        }
        set text(newValue) {
            this.__text.set(newValue);
        }
        get key() {
            return this.__key.get();
        }
        set key(newValue) {
            this.__key.set(newValue);
        }
        /**
         * Creates and returns a new SystemText instance in the SDK and on the server.
         * The new SystemText will be automatically stored in the 'systemTexts' property
         * of the parent SystemTextCollection element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, SystemText, "systemTexts", true);
        }
        /**
         * Creates and returns a new SystemText instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, SystemText);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.text = Text.create(this.model);
        }
    }
    SystemText.structureTypeName = "Texts$SystemText";
    SystemText.versionInfo = new exports.StructureVersionInfo({
        properties: {
            text: {
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    texts.SystemText = SystemText;
    /**
     * See: {@link https://docs.mendix.com/refguide/system-texts relevant section in reference guide}
     */
    class SystemTextCollection extends projects_1.projects.ProjectDocument {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            /** @internal */
            this.__systemTexts = new internal.PartListProperty(SystemTextCollection, this, "systemTexts", []);
            this._containmentName = "projectDocuments";
        }
        get containerAsProject() {
            return super.getContainerAs(projects_1.projects.Project);
        }
        get systemTexts() {
            return this.__systemTexts.get();
        }
        /**
         * Creates a new SystemTextCollection unit in the SDK and on the server.
         * Expects one argument, the projects.IProject in which this unit is contained.
         */
        static createIn(container) {
            return internal.instancehelpers.createUnit(container, SystemTextCollection);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    SystemTextCollection.structureTypeName = "Texts$SystemTextCollection";
    SystemTextCollection.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.ModelUnit);
    texts.SystemTextCollection = SystemTextCollection;
    /**
     * See: {@link https://docs.mendix.com/refguide/translatable-texts relevant section in reference guide}
     */
    class Text extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__translations = new internal.PartListProperty(Text, this, "translations", []);
            if (arguments.length < 4) {
                throw new Error("new Text() cannot be invoked directly, please use 'model.texts.createText()'");
            }
        }
        get containerAsWidgetValue() {
            return super.getContainerAs(customwidgets_1.customwidgets.WidgetValue);
        }
        get containerAsDataGridColumn() {
            return super.getContainerAs(documenttemplates_1.documenttemplates.DataGridColumn);
        }
        get containerAsStaticLabel() {
            return super.getContainerAs(documenttemplates_1.documenttemplates.StaticLabel);
        }
        get containerAsTitle() {
            return super.getContainerAs(documenttemplates_1.documenttemplates.Title);
        }
        get containerAsAssociationDeleteBehavior() {
            return super.getContainerAs(domainmodels_1.domainmodels.AssociationDeleteBehavior);
        }
        get containerAsValidationRule() {
            return super.getContainerAs(domainmodels_1.domainmodels.ValidationRule);
        }
        get containerAsEnumerationValue() {
            return super.getContainerAs(enumerations_1.enumerations.EnumerationValue);
        }
        get containerAsMenuItem() {
            return super.getContainerAs(menus_1.menus.MenuItem);
        }
        get containerAsMicroflow() {
            return super.getContainerAs(microflows_1.microflows.Microflow);
        }
        get containerAsTextTemplate() {
            return super.getContainerAs(microflows_1.microflows.TextTemplate);
        }
        get containerAsBottomBarItem() {
            return super.getContainerAs(nativepages_1.nativepages.BottomBarItem);
        }
        get containerAsNavigationProfile() {
            return super.getContainerAs(navigation_1.navigation.NavigationProfile);
        }
        get containerAsAttributeWidget() {
            return super.getContainerAs(pages_1.pages.AttributeWidget);
        }
        get containerAsAttributeWidgetWithPlaceholder() {
            return super.getContainerAs(pages_1.pages.AttributeWidgetWithPlaceholder);
        }
        get containerAsButton() {
            return super.getContainerAs(pages_1.pages.Button);
        }
        get containerAsCallNanoflowClientAction() {
            return super.getContainerAs(pages_1.pages.CallNanoflowClientAction);
        }
        get containerAsClientTemplate() {
            return super.getContainerAs(pages_1.pages.ClientTemplate);
        }
        get containerAsConfirmationInfo() {
            return super.getContainerAs(pages_1.pages.ConfirmationInfo);
        }
        get containerAsControlBarButton() {
            return super.getContainerAs(pages_1.pages.ControlBarButton);
        }
        get containerAsDataView() {
            return super.getContainerAs(pages_1.pages.DataView);
        }
        get containerAsDropDown() {
            return super.getContainerAs(pages_1.pages.DropDown);
        }
        get containerAsDropDownButtonItem() {
            return super.getContainerAs(pages_1.pages.DropDownButtonItem);
        }
        get containerAsGridColumn() {
            return super.getContainerAs(pages_1.pages.GridColumn);
        }
        get containerAsInputWidget() {
            return super.getContainerAs(pages_1.pages.InputWidget);
        }
        get containerAsLabel() {
            return super.getContainerAs(pages_1.pages.Label);
        }
        get containerAsLoginTextBox() {
            return super.getContainerAs(pages_1.pages.LoginTextBox);
        }
        get containerAsMasterDetailDetailRegion() {
            return super.getContainerAs(pages_1.pages.MasterDetailDetailRegion);
        }
        get containerAsMicroflowSettings() {
            return super.getContainerAs(pages_1.pages.MicroflowSettings);
        }
        get containerAsPage() {
            return super.getContainerAs(pages_1.pages.Page);
        }
        get containerAsPageSettings() {
            return super.getContainerAs(pages_1.pages.PageSettings);
        }
        get containerAsReferenceSelector() {
            return super.getContainerAs(pages_1.pages.ReferenceSelector);
        }
        get containerAsSearchField() {
            return super.getContainerAs(pages_1.pages.SearchField);
        }
        get containerAsTabPage() {
            return super.getContainerAs(pages_1.pages.TabPage);
        }
        get containerAsTextArea() {
            return super.getContainerAs(pages_1.pages.TextArea);
        }
        get containerAsWidgetValidation() {
            return super.getContainerAs(pages_1.pages.WidgetValidation);
        }
        get containerAsBasicReportAggregate() {
            return super.getContainerAs(reports_1.reports.BasicReportAggregate);
        }
        get containerAsBasicReportColumn() {
            return super.getContainerAs(reports_1.reports.BasicReportColumn);
        }
        get containerAsReportButton() {
            return super.getContainerAs(reports_1.reports.ReportButton);
        }
        get containerAsReportChart() {
            return super.getContainerAs(reports_1.reports.ReportChart);
        }
        get containerAsReportChartSeries() {
            return super.getContainerAs(reports_1.reports.ReportChartSeries);
        }
        get containerAsReportDateRangeField() {
            return super.getContainerAs(reports_1.reports.ReportDateRangeField);
        }
        get containerAsReportDateRangeSelector() {
            return super.getContainerAs(reports_1.reports.ReportDateRangeSelector);
        }
        get containerAsSystemText() {
            return super.getContainerAs(SystemText);
        }
        get translations() {
            return this.__translations.get();
        }
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'translatableValue' property
         * of the parent customwidgets.WidgetValue element passed as argument.
         */
        static createInWidgetValueUnderTranslatableValue(container) {
            return internal.instancehelpers.createElement(container, Text, "translatableValue", false);
        }
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'caption' property
         * of the parent documenttemplates.DataGridColumn element passed as argument.
         */
        static createInDataGridColumnUnderCaption(container) {
            return internal.instancehelpers.createElement(container, Text, "caption", false);
        }
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'caption' property
         * of the parent documenttemplates.StaticLabel element passed as argument.
         */
        static createInStaticLabelUnderCaption(container) {
            return internal.instancehelpers.createElement(container, Text, "caption", false);
        }
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'caption' property
         * of the parent documenttemplates.Title element passed as argument.
         */
        static createInTitleUnderCaption(container) {
            return internal.instancehelpers.createElement(container, Text, "caption", false);
        }
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'childErrorMessage' property
         * of the parent domainmodels.AssociationDeleteBehavior element passed as argument.
         */
        static createInAssociationDeleteBehaviorUnderChildErrorMessage(container) {
            return internal.instancehelpers.createElement(container, Text, "childErrorMessage", false);
        }
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'parentErrorMessage' property
         * of the parent domainmodels.AssociationDeleteBehavior element passed as argument.
         */
        static createInAssociationDeleteBehaviorUnderParentErrorMessage(container) {
            return internal.instancehelpers.createElement(container, Text, "parentErrorMessage", false);
        }
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'errorMessage' property
         * of the parent domainmodels.ValidationRule element passed as argument.
         */
        static createInValidationRuleUnderErrorMessage(container) {
            return internal.instancehelpers.createElement(container, Text, "errorMessage", false);
        }
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'caption' property
         * of the parent enumerations.EnumerationValue element passed as argument.
         */
        static createInEnumerationValueUnderCaption(container) {
            return internal.instancehelpers.createElement(container, Text, "caption", false);
        }
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'alternativeText' property
         * of the parent menus.MenuItem element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.12.0 and higher
         */
        static createInMenuItemUnderAlternativeText(container) {
            internal.createInVersionCheck(container.model, Text.structureTypeName, { start: "8.12.0" });
            return internal.instancehelpers.createElement(container, Text, "alternativeText", false);
        }
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'caption' property
         * of the parent menus.MenuItem element passed as argument.
         */
        static createInMenuItemUnderCaption(container) {
            return internal.instancehelpers.createElement(container, Text, "caption", false);
        }
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'concurrencyErrorMessage' property
         * of the parent microflows.Microflow element passed as argument.
         */
        static createInMicroflowUnderConcurrencyErrorMessage(container) {
            return internal.instancehelpers.createElement(container, Text, "concurrencyErrorMessage", false);
        }
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'text' property
         * of the parent microflows.TextTemplate element passed as argument.
         */
        static createInTextTemplateUnderText(container) {
            return internal.instancehelpers.createElement(container, Text, "text", false);
        }
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'caption' property
         * of the parent nativepages.BottomBarItem element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 and higher
         */
        static createInBottomBarItemUnderCaption(container) {
            internal.createInVersionCheck(container.model, Text.structureTypeName, { start: "8.0.0" });
            return internal.instancehelpers.createElement(container, Text, "caption", false);
        }
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'appTitle' property
         * of the parent navigation.NavigationProfile element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.12.0 and higher
         */
        static createInNavigationProfileUnderAppTitle(container) {
            internal.createInVersionCheck(container.model, Text.structureTypeName, { start: "8.12.0" });
            return internal.instancehelpers.createElement(container, Text, "appTitle", false);
        }
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'requiredMessage' property
         * of the parent pages.AttributeWidget element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.5.0
         */
        static createInAttributeWidgetUnderRequiredMessage(container) {
            internal.createInVersionCheck(container.model, Text.structureTypeName, { end: "7.5.0" });
            return internal.instancehelpers.createElement(container, Text, "requiredMessage", false);
        }
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'placeholder' property
         * of the parent pages.AttributeWidgetWithPlaceholder element passed as argument.
         */
        static createInAttributeWidgetWithPlaceholderUnderPlaceholder(container) {
            return internal.instancehelpers.createElement(container, Text, "placeholder", false);
        }
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'tooltip' property
         * of the parent pages.Button element passed as argument.
         */
        static createInButtonUnderTooltip(container) {
            return internal.instancehelpers.createElement(container, Text, "tooltip", false);
        }
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'progressMessage' property
         * of the parent pages.CallNanoflowClientAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.8.0 and higher
         */
        static createInCallNanoflowClientActionUnderProgressMessage(container) {
            internal.createInVersionCheck(container.model, Text.structureTypeName, { start: "7.8.0" });
            return internal.instancehelpers.createElement(container, Text, "progressMessage", false);
        }
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'fallback' property
         * of the parent pages.ClientTemplate element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.3.0 and higher
         */
        static createInClientTemplateUnderFallback(container) {
            internal.createInVersionCheck(container.model, Text.structureTypeName, { start: "8.3.0" });
            return internal.instancehelpers.createElement(container, Text, "fallback", false);
        }
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'template' property
         * of the parent pages.ClientTemplate element passed as argument.
         */
        static createInClientTemplateUnderTemplate(container) {
            return internal.instancehelpers.createElement(container, Text, "template", false);
        }
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'cancelButtonCaption' property
         * of the parent pages.ConfirmationInfo element passed as argument.
         */
        static createInConfirmationInfoUnderCancelButtonCaption(container) {
            return internal.instancehelpers.createElement(container, Text, "cancelButtonCaption", false);
        }
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'proceedButtonCaption' property
         * of the parent pages.ConfirmationInfo element passed as argument.
         */
        static createInConfirmationInfoUnderProceedButtonCaption(container) {
            return internal.instancehelpers.createElement(container, Text, "proceedButtonCaption", false);
        }
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'question' property
         * of the parent pages.ConfirmationInfo element passed as argument.
         */
        static createInConfirmationInfoUnderQuestion(container) {
            return internal.instancehelpers.createElement(container, Text, "question", false);
        }
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'tooltip' property
         * of the parent pages.ControlBarButton element passed as argument.
         */
        static createInControlBarButtonUnderTooltip(container) {
            return internal.instancehelpers.createElement(container, Text, "tooltip", false);
        }
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'noEntityMessage' property
         * of the parent pages.DataView element passed as argument.
         */
        static createInDataViewUnderNoEntityMessage(container) {
            return internal.instancehelpers.createElement(container, Text, "noEntityMessage", false);
        }
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'emptyOptionCaption' property
         * of the parent pages.DropDown element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.2.0 and higher
         */
        static createInDropDownUnderEmptyOptionCaption(container) {
            internal.createInVersionCheck(container.model, Text.structureTypeName, { start: "7.2.0" });
            return internal.instancehelpers.createElement(container, Text, "emptyOptionCaption", false);
        }
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'caption' property
         * of the parent pages.DropDownButtonItem element passed as argument.
         */
        static createInDropDownButtonItemUnderCaption(container) {
            return internal.instancehelpers.createElement(container, Text, "caption", false);
        }
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'aggregateCaption' property
         * of the parent pages.GridColumn element passed as argument.
         */
        static createInGridColumnUnderAggregateCaption(container) {
            return internal.instancehelpers.createElement(container, Text, "aggregateCaption", false);
        }
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'caption' property
         * of the parent pages.GridColumn element passed as argument.
         */
        static createInGridColumnUnderCaption(container) {
            return internal.instancehelpers.createElement(container, Text, "caption", false);
        }
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'label' property
         * of the parent pages.InputWidget element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.17.0
         */
        static createInInputWidgetUnderLabel(container) {
            internal.createInVersionCheck(container.model, Text.structureTypeName, { end: "7.17.0" });
            return internal.instancehelpers.createElement(container, Text, "label", false);
        }
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'caption' property
         * of the parent pages.Label element passed as argument.
         */
        static createInLabelUnderCaption(container) {
            return internal.instancehelpers.createElement(container, Text, "caption", false);
        }
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'label' property
         * of the parent pages.LoginTextBox element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.0.2 and higher
         */
        static createInLoginTextBoxUnderLabel(container) {
            internal.createInVersionCheck(container.model, Text.structureTypeName, { start: "7.0.2" });
            return internal.instancehelpers.createElement(container, Text, "label", false);
        }
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'placeholder' property
         * of the parent pages.LoginTextBox element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.0.2 and higher
         */
        static createInLoginTextBoxUnderPlaceholder(container) {
            internal.createInVersionCheck(container.model, Text.structureTypeName, { start: "7.0.2" });
            return internal.instancehelpers.createElement(container, Text, "placeholder", false);
        }
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'title' property
         * of the parent pages.MasterDetailDetailRegion element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.1.0 to 7.14.0
         */
        static createInMasterDetailDetailRegionUnderTitle(container) {
            internal.createInVersionCheck(container.model, Text.structureTypeName, { start: "7.1.0", end: "7.14.0" });
            return internal.instancehelpers.createElement(container, Text, "title", false);
        }
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'progressMessage' property
         * of the parent pages.MicroflowSettings element passed as argument.
         */
        static createInMicroflowSettingsUnderProgressMessage(container) {
            return internal.instancehelpers.createElement(container, Text, "progressMessage", false);
        }
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'title' property
         * of the parent pages.Page element passed as argument.
         */
        static createInPageUnderTitle(container) {
            return internal.instancehelpers.createElement(container, Text, "title", false);
        }
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'formTitle' property
         * of the parent pages.PageSettings element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 8.11.0
         */
        static createInPageSettingsUnderFormTitle(container) {
            internal.createInVersionCheck(container.model, Text.structureTypeName, { end: "8.11.0" });
            return internal.instancehelpers.createElement(container, Text, "formTitle", false);
        }
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'emptyOptionCaption' property
         * of the parent pages.ReferenceSelector element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.2.0 and higher
         */
        static createInReferenceSelectorUnderEmptyOptionCaption(container) {
            internal.createInVersionCheck(container.model, Text.structureTypeName, { start: "7.2.0" });
            return internal.instancehelpers.createElement(container, Text, "emptyOptionCaption", false);
        }
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'requiredMessage' property
         * of the parent pages.ReferenceSelector element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.5.0
         */
        static createInReferenceSelectorUnderRequiredMessage(container) {
            internal.createInVersionCheck(container.model, Text.structureTypeName, { end: "7.5.0" });
            return internal.instancehelpers.createElement(container, Text, "requiredMessage", false);
        }
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'caption' property
         * of the parent pages.SearchField element passed as argument.
         */
        static createInSearchFieldUnderCaption(container) {
            return internal.instancehelpers.createElement(container, Text, "caption", false);
        }
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'placeholder' property
         * of the parent pages.SearchField element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInSearchFieldUnderPlaceholder(container) {
            internal.createInVersionCheck(container.model, Text.structureTypeName, { start: "7.21.0" });
            return internal.instancehelpers.createElement(container, Text, "placeholder", false);
        }
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'caption' property
         * of the parent pages.TabPage element passed as argument.
         */
        static createInTabPageUnderCaption(container) {
            return internal.instancehelpers.createElement(container, Text, "caption", false);
        }
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'counterMessage' property
         * of the parent pages.TextArea element passed as argument.
         */
        static createInTextAreaUnderCounterMessage(container) {
            return internal.instancehelpers.createElement(container, Text, "counterMessage", false);
        }
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'textTooLongMessage' property
         * of the parent pages.TextArea element passed as argument.
         */
        static createInTextAreaUnderTextTooLongMessage(container) {
            return internal.instancehelpers.createElement(container, Text, "textTooLongMessage", false);
        }
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'message' property
         * of the parent pages.WidgetValidation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.6.0 and higher
         */
        static createInWidgetValidationUnderMessage(container) {
            internal.createInVersionCheck(container.model, Text.structureTypeName, { start: "7.6.0" });
            return internal.instancehelpers.createElement(container, Text, "message", false);
        }
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'caption' property
         * of the parent reports.BasicReportAggregate element passed as argument.
         */
        static createInBasicReportAggregateUnderCaption(container) {
            return internal.instancehelpers.createElement(container, Text, "caption", false);
        }
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'caption' property
         * of the parent reports.BasicReportColumn element passed as argument.
         */
        static createInBasicReportColumnUnderCaption(container) {
            return internal.instancehelpers.createElement(container, Text, "caption", false);
        }
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'caption' property
         * of the parent reports.ReportButton element passed as argument.
         */
        static createInReportButtonUnderCaption(container) {
            return internal.instancehelpers.createElement(container, Text, "caption", false);
        }
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'xAxisCaption' property
         * of the parent reports.ReportChart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 9.0.0
         */
        static createInReportChartUnderXAxisCaption(container) {
            internal.createInVersionCheck(container.model, Text.structureTypeName, { end: "9.0.0" });
            return internal.instancehelpers.createElement(container, Text, "xAxisCaption", false);
        }
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'yAxisCaption' property
         * of the parent reports.ReportChart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 9.0.0
         */
        static createInReportChartUnderYAxisCaption(container) {
            internal.createInVersionCheck(container.model, Text.structureTypeName, { end: "9.0.0" });
            return internal.instancehelpers.createElement(container, Text, "yAxisCaption", false);
        }
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'caption' property
         * of the parent reports.ReportChartSeries element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 9.0.0
         */
        static createInReportChartSeriesUnderCaption(container) {
            internal.createInVersionCheck(container.model, Text.structureTypeName, { end: "9.0.0" });
            return internal.instancehelpers.createElement(container, Text, "caption", false);
        }
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'caption' property
         * of the parent reports.ReportDateRangeField element passed as argument.
         */
        static createInReportDateRangeFieldUnderCaption(container) {
            return internal.instancehelpers.createElement(container, Text, "caption", false);
        }
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'fromCaption' property
         * of the parent reports.ReportDateRangeSelector element passed as argument.
         */
        static createInReportDateRangeSelectorUnderFromCaption(container) {
            return internal.instancehelpers.createElement(container, Text, "fromCaption", false);
        }
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'toCaption' property
         * of the parent reports.ReportDateRangeSelector element passed as argument.
         */
        static createInReportDateRangeSelectorUnderToCaption(container) {
            return internal.instancehelpers.createElement(container, Text, "toCaption", false);
        }
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'text' property
         * of the parent SystemText element passed as argument.
         */
        static createInSystemTextUnderText(container) {
            return internal.instancehelpers.createElement(container, Text, "text", false);
        }
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, Text);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            (() => {
                if (internal.isAtLeast("7.14.0", this.model)) {
                    return;
                }
                this.translations.replace([
                    ((translation) => {
                        translation.languageCode = "en_US";
                        translation.text = "";
                        return translation;
                    })(Translation.create(this.model))
                ]);
            })();
        }
    }
    Text.structureTypeName = "Texts$Text";
    Text.versionInfo = new exports.StructureVersionInfo({
        properties: {
            translations: {}
        }
    }, internal.StructureType.Element);
    texts.Text = Text;
    class Translation extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__languageCode = new internal.PrimitiveProperty(Translation, this, "languageCode", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__text = new internal.PrimitiveProperty(Translation, this, "text", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new Translation() cannot be invoked directly, please use 'model.texts.createTranslation()'");
            }
        }
        get containerAsText() {
            return super.getContainerAs(Text);
        }
        get languageCode() {
            return this.__languageCode.get();
        }
        set languageCode(newValue) {
            this.__languageCode.set(newValue);
        }
        get text() {
            return this.__text.get();
        }
        set text(newValue) {
            this.__text.set(newValue);
        }
        /**
         * Creates and returns a new Translation instance in the SDK and on the server.
         * The new Translation will be automatically stored in the 'translations' property
         * of the parent Text element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, Translation, "translations", true);
        }
        /**
         * Creates and returns a new Translation instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, Translation);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    Translation.structureTypeName = "Texts$Translation";
    Translation.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    texts.Translation = Translation;
})(texts = exports.texts || (exports.texts = {}));
const customwidgets_1 = require("./customwidgets");
const documenttemplates_1 = require("./documenttemplates");
const domainmodels_1 = require("./domainmodels");
const enumerations_1 = require("./enumerations");
const menus_1 = require("./menus");
const microflows_1 = require("./microflows");
const nativepages_1 = require("./nativepages");
const navigation_1 = require("./navigation");
const pages_1 = require("./pages");
const reports_1 = require("./reports");
//# sourceMappingURL=texts.js.map