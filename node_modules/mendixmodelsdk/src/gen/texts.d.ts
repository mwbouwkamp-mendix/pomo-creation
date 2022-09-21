import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
import { projects } from "./projects";
export declare namespace texts {
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `Texts`.
     */
    class SystemText extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsSystemTextCollection(): SystemTextCollection;
        get text(): Text;
        set text(newValue: Text);
        get key(): string;
        set key(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new SystemText instance in the SDK and on the server.
         * The new SystemText will be automatically stored in the 'systemTexts' property
         * of the parent SystemTextCollection element passed as argument.
         */
        static createIn(container: SystemTextCollection): SystemText;
        /**
         * Creates and returns a new SystemText instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): SystemText;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/system-texts relevant section in reference guide}
     */
    interface ISystemTextCollection extends projects.IProjectDocument {
        readonly model: IModel;
        readonly containerAsProject: projects.IProject;
        asLoaded(): SystemTextCollection;
        load(callback: (element: SystemTextCollection) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<SystemTextCollection>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/system-texts relevant section in reference guide}
     */
    class SystemTextCollection extends projects.ProjectDocument implements ISystemTextCollection {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsProject(): projects.Project;
        get systemTexts(): internal.IList<SystemText>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IProject);
        /**
         * Creates a new SystemTextCollection unit in the SDK and on the server.
         * Expects one argument, the projects.IProject in which this unit is contained.
         */
        static createIn(container: projects.IProject): SystemTextCollection;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/translatable-texts relevant section in reference guide}
     */
    class Text extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsWidgetValue(): customwidgets.WidgetValue;
        get containerAsDataGridColumn(): documenttemplates.DataGridColumn;
        get containerAsStaticLabel(): documenttemplates.StaticLabel;
        get containerAsTitle(): documenttemplates.Title;
        get containerAsAssociationDeleteBehavior(): domainmodels.AssociationDeleteBehavior;
        get containerAsValidationRule(): domainmodels.ValidationRule;
        get containerAsEnumerationValue(): enumerations.EnumerationValue;
        get containerAsMenuItem(): menus.MenuItem;
        get containerAsMicroflow(): microflows.Microflow;
        get containerAsTextTemplate(): microflows.TextTemplate;
        get containerAsBottomBarItem(): nativepages.BottomBarItem;
        get containerAsNavigationProfile(): navigation.NavigationProfile;
        get containerAsAttributeWidget(): pages.AttributeWidget;
        get containerAsAttributeWidgetWithPlaceholder(): pages.AttributeWidgetWithPlaceholder;
        get containerAsButton(): pages.Button;
        get containerAsCallNanoflowClientAction(): pages.CallNanoflowClientAction;
        get containerAsClientTemplate(): pages.ClientTemplate;
        get containerAsConfirmationInfo(): pages.ConfirmationInfo;
        get containerAsControlBarButton(): pages.ControlBarButton;
        get containerAsDataView(): pages.DataView;
        get containerAsDropDown(): pages.DropDown;
        get containerAsDropDownButtonItem(): pages.DropDownButtonItem;
        get containerAsGridColumn(): pages.GridColumn;
        get containerAsInputWidget(): pages.InputWidget;
        get containerAsLabel(): pages.Label;
        get containerAsLoginTextBox(): pages.LoginTextBox;
        get containerAsMasterDetailDetailRegion(): pages.MasterDetailDetailRegion;
        get containerAsMicroflowSettings(): pages.MicroflowSettings;
        get containerAsPage(): pages.Page;
        get containerAsPageSettings(): pages.PageSettings;
        get containerAsReferenceSelector(): pages.ReferenceSelector;
        get containerAsSearchField(): pages.SearchField;
        get containerAsTabPage(): pages.TabPage;
        get containerAsTextArea(): pages.TextArea;
        get containerAsWidgetValidation(): pages.WidgetValidation;
        get containerAsBasicReportAggregate(): reports.BasicReportAggregate;
        get containerAsBasicReportColumn(): reports.BasicReportColumn;
        get containerAsReportButton(): reports.ReportButton;
        get containerAsReportChart(): reports.ReportChart;
        get containerAsReportChartSeries(): reports.ReportChartSeries;
        get containerAsReportDateRangeField(): reports.ReportDateRangeField;
        get containerAsReportDateRangeSelector(): reports.ReportDateRangeSelector;
        get containerAsSystemText(): SystemText;
        get translations(): internal.IList<Translation>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'translatableValue' property
         * of the parent customwidgets.WidgetValue element passed as argument.
         */
        static createInWidgetValueUnderTranslatableValue(container: customwidgets.WidgetValue): Text;
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'caption' property
         * of the parent documenttemplates.DataGridColumn element passed as argument.
         */
        static createInDataGridColumnUnderCaption(container: documenttemplates.DataGridColumn): Text;
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'caption' property
         * of the parent documenttemplates.StaticLabel element passed as argument.
         */
        static createInStaticLabelUnderCaption(container: documenttemplates.StaticLabel): Text;
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'caption' property
         * of the parent documenttemplates.Title element passed as argument.
         */
        static createInTitleUnderCaption(container: documenttemplates.Title): Text;
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'childErrorMessage' property
         * of the parent domainmodels.AssociationDeleteBehavior element passed as argument.
         */
        static createInAssociationDeleteBehaviorUnderChildErrorMessage(container: domainmodels.AssociationDeleteBehavior): Text;
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'parentErrorMessage' property
         * of the parent domainmodels.AssociationDeleteBehavior element passed as argument.
         */
        static createInAssociationDeleteBehaviorUnderParentErrorMessage(container: domainmodels.AssociationDeleteBehavior): Text;
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'errorMessage' property
         * of the parent domainmodels.ValidationRule element passed as argument.
         */
        static createInValidationRuleUnderErrorMessage(container: domainmodels.ValidationRule): Text;
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'caption' property
         * of the parent enumerations.EnumerationValue element passed as argument.
         */
        static createInEnumerationValueUnderCaption(container: enumerations.EnumerationValue): Text;
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'alternativeText' property
         * of the parent menus.MenuItem element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.12.0 and higher
         */
        static createInMenuItemUnderAlternativeText(container: menus.MenuItem): Text;
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'caption' property
         * of the parent menus.MenuItem element passed as argument.
         */
        static createInMenuItemUnderCaption(container: menus.MenuItem): Text;
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'concurrencyErrorMessage' property
         * of the parent microflows.Microflow element passed as argument.
         */
        static createInMicroflowUnderConcurrencyErrorMessage(container: microflows.Microflow): Text;
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'text' property
         * of the parent microflows.TextTemplate element passed as argument.
         */
        static createInTextTemplateUnderText(container: microflows.TextTemplate): Text;
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'caption' property
         * of the parent nativepages.BottomBarItem element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 and higher
         */
        static createInBottomBarItemUnderCaption(container: nativepages.BottomBarItem): Text;
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'appTitle' property
         * of the parent navigation.NavigationProfile element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.12.0 and higher
         */
        static createInNavigationProfileUnderAppTitle(container: navigation.NavigationProfile): Text;
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'requiredMessage' property
         * of the parent pages.AttributeWidget element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.5.0
         */
        static createInAttributeWidgetUnderRequiredMessage(container: pages.AttributeWidget): Text;
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'placeholder' property
         * of the parent pages.AttributeWidgetWithPlaceholder element passed as argument.
         */
        static createInAttributeWidgetWithPlaceholderUnderPlaceholder(container: pages.AttributeWidgetWithPlaceholder): Text;
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'tooltip' property
         * of the parent pages.Button element passed as argument.
         */
        static createInButtonUnderTooltip(container: pages.Button): Text;
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'progressMessage' property
         * of the parent pages.CallNanoflowClientAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.8.0 and higher
         */
        static createInCallNanoflowClientActionUnderProgressMessage(container: pages.CallNanoflowClientAction): Text;
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'fallback' property
         * of the parent pages.ClientTemplate element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.3.0 and higher
         */
        static createInClientTemplateUnderFallback(container: pages.ClientTemplate): Text;
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'template' property
         * of the parent pages.ClientTemplate element passed as argument.
         */
        static createInClientTemplateUnderTemplate(container: pages.ClientTemplate): Text;
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'cancelButtonCaption' property
         * of the parent pages.ConfirmationInfo element passed as argument.
         */
        static createInConfirmationInfoUnderCancelButtonCaption(container: pages.ConfirmationInfo): Text;
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'proceedButtonCaption' property
         * of the parent pages.ConfirmationInfo element passed as argument.
         */
        static createInConfirmationInfoUnderProceedButtonCaption(container: pages.ConfirmationInfo): Text;
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'question' property
         * of the parent pages.ConfirmationInfo element passed as argument.
         */
        static createInConfirmationInfoUnderQuestion(container: pages.ConfirmationInfo): Text;
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'tooltip' property
         * of the parent pages.ControlBarButton element passed as argument.
         */
        static createInControlBarButtonUnderTooltip(container: pages.ControlBarButton): Text;
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'noEntityMessage' property
         * of the parent pages.DataView element passed as argument.
         */
        static createInDataViewUnderNoEntityMessage(container: pages.DataView): Text;
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'emptyOptionCaption' property
         * of the parent pages.DropDown element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.2.0 and higher
         */
        static createInDropDownUnderEmptyOptionCaption(container: pages.DropDown): Text;
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'caption' property
         * of the parent pages.DropDownButtonItem element passed as argument.
         */
        static createInDropDownButtonItemUnderCaption(container: pages.DropDownButtonItem): Text;
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'aggregateCaption' property
         * of the parent pages.GridColumn element passed as argument.
         */
        static createInGridColumnUnderAggregateCaption(container: pages.GridColumn): Text;
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'caption' property
         * of the parent pages.GridColumn element passed as argument.
         */
        static createInGridColumnUnderCaption(container: pages.GridColumn): Text;
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'label' property
         * of the parent pages.InputWidget element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.17.0
         */
        static createInInputWidgetUnderLabel(container: pages.InputWidget): Text;
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'caption' property
         * of the parent pages.Label element passed as argument.
         */
        static createInLabelUnderCaption(container: pages.Label): Text;
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'label' property
         * of the parent pages.LoginTextBox element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.0.2 and higher
         */
        static createInLoginTextBoxUnderLabel(container: pages.LoginTextBox): Text;
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'placeholder' property
         * of the parent pages.LoginTextBox element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.0.2 and higher
         */
        static createInLoginTextBoxUnderPlaceholder(container: pages.LoginTextBox): Text;
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'title' property
         * of the parent pages.MasterDetailDetailRegion element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.1.0 to 7.14.0
         */
        static createInMasterDetailDetailRegionUnderTitle(container: pages.MasterDetailDetailRegion): Text;
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'progressMessage' property
         * of the parent pages.MicroflowSettings element passed as argument.
         */
        static createInMicroflowSettingsUnderProgressMessage(container: pages.MicroflowSettings): Text;
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'title' property
         * of the parent pages.Page element passed as argument.
         */
        static createInPageUnderTitle(container: pages.Page): Text;
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'formTitle' property
         * of the parent pages.PageSettings element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 8.11.0
         */
        static createInPageSettingsUnderFormTitle(container: pages.PageSettings): Text;
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'emptyOptionCaption' property
         * of the parent pages.ReferenceSelector element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.2.0 and higher
         */
        static createInReferenceSelectorUnderEmptyOptionCaption(container: pages.ReferenceSelector): Text;
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'requiredMessage' property
         * of the parent pages.ReferenceSelector element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.5.0
         */
        static createInReferenceSelectorUnderRequiredMessage(container: pages.ReferenceSelector): Text;
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'caption' property
         * of the parent pages.SearchField element passed as argument.
         */
        static createInSearchFieldUnderCaption(container: pages.SearchField): Text;
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'placeholder' property
         * of the parent pages.SearchField element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInSearchFieldUnderPlaceholder(container: pages.SearchField): Text;
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'caption' property
         * of the parent pages.TabPage element passed as argument.
         */
        static createInTabPageUnderCaption(container: pages.TabPage): Text;
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'counterMessage' property
         * of the parent pages.TextArea element passed as argument.
         */
        static createInTextAreaUnderCounterMessage(container: pages.TextArea): Text;
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'textTooLongMessage' property
         * of the parent pages.TextArea element passed as argument.
         */
        static createInTextAreaUnderTextTooLongMessage(container: pages.TextArea): Text;
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'message' property
         * of the parent pages.WidgetValidation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.6.0 and higher
         */
        static createInWidgetValidationUnderMessage(container: pages.WidgetValidation): Text;
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'caption' property
         * of the parent reports.BasicReportAggregate element passed as argument.
         */
        static createInBasicReportAggregateUnderCaption(container: reports.BasicReportAggregate): Text;
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'caption' property
         * of the parent reports.BasicReportColumn element passed as argument.
         */
        static createInBasicReportColumnUnderCaption(container: reports.BasicReportColumn): Text;
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'caption' property
         * of the parent reports.ReportButton element passed as argument.
         */
        static createInReportButtonUnderCaption(container: reports.ReportButton): Text;
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'xAxisCaption' property
         * of the parent reports.ReportChart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 9.0.0
         */
        static createInReportChartUnderXAxisCaption(container: reports.ReportChart): Text;
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'yAxisCaption' property
         * of the parent reports.ReportChart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 9.0.0
         */
        static createInReportChartUnderYAxisCaption(container: reports.ReportChart): Text;
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'caption' property
         * of the parent reports.ReportChartSeries element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 9.0.0
         */
        static createInReportChartSeriesUnderCaption(container: reports.ReportChartSeries): Text;
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'caption' property
         * of the parent reports.ReportDateRangeField element passed as argument.
         */
        static createInReportDateRangeFieldUnderCaption(container: reports.ReportDateRangeField): Text;
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'fromCaption' property
         * of the parent reports.ReportDateRangeSelector element passed as argument.
         */
        static createInReportDateRangeSelectorUnderFromCaption(container: reports.ReportDateRangeSelector): Text;
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'toCaption' property
         * of the parent reports.ReportDateRangeSelector element passed as argument.
         */
        static createInReportDateRangeSelectorUnderToCaption(container: reports.ReportDateRangeSelector): Text;
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * The new Text will be automatically stored in the 'text' property
         * of the parent SystemText element passed as argument.
         */
        static createInSystemTextUnderText(container: SystemText): Text;
        /**
         * Creates and returns a new Text instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): Text;
    }
    class Translation extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsText(): Text;
        get languageCode(): string;
        set languageCode(newValue: string);
        get text(): string;
        set text(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new Translation instance in the SDK and on the server.
         * The new Translation will be automatically stored in the 'translations' property
         * of the parent Text element passed as argument.
         */
        static createIn(container: Text): Translation;
        /**
         * Creates and returns a new Translation instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): Translation;
    }
}
import { customwidgets } from "./customwidgets";
import { documenttemplates } from "./documenttemplates";
import { domainmodels } from "./domainmodels";
import { enumerations } from "./enumerations";
import { menus } from "./menus";
import { microflows } from "./microflows";
import { nativepages } from "./nativepages";
import { navigation } from "./navigation";
import { pages } from "./pages";
import { reports } from "./reports";
import { IModel } from "./base-model";
