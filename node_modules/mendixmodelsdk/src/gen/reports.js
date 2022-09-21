"use strict";
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.reports = exports.StructureVersionInfo = void 0;
const internal = require("../sdk/internal");
exports.StructureVersionInfo = internal.StructureVersionInfo;
const pages_1 = require("./pages");
var reports;
(function (reports) {
    class AggregateFunctionEnum extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "reports.AggregateFunctionEnum";
        }
    }
    AggregateFunctionEnum.Sum = new AggregateFunctionEnum("Sum", {});
    AggregateFunctionEnum.Average = new AggregateFunctionEnum("Average", {});
    AggregateFunctionEnum.Count = new AggregateFunctionEnum("Count", {});
    AggregateFunctionEnum.Minimum = new AggregateFunctionEnum("Minimum", {});
    AggregateFunctionEnum.Maximum = new AggregateFunctionEnum("Maximum", {});
    reports.AggregateFunctionEnum = AggregateFunctionEnum;
    class AspectRatio extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "reports.AspectRatio";
        }
    }
    AspectRatio.SixteenToNine = new AspectRatio("SixteenToNine", {});
    AspectRatio.ThreeToTwo = new AspectRatio("ThreeToTwo", {});
    AspectRatio.FourToThree = new AspectRatio("FourToThree", {});
    AspectRatio.OneToOne = new AspectRatio("OneToOne", {});
    AspectRatio.ThreeToFour = new AspectRatio("ThreeToFour", {});
    AspectRatio.TwoToThree = new AspectRatio("TwoToThree", {});
    AspectRatio.NineToSixteen = new AspectRatio("NineToSixteen", {});
    reports.AspectRatio = AspectRatio;
    class ChartType extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "reports.ChartType";
        }
    }
    ChartType.VerticalBars = new ChartType("VerticalBars", {});
    ChartType.VerticalBars3D = new ChartType("VerticalBars3D", {});
    ChartType.HorizontalBars = new ChartType("HorizontalBars", {});
    ChartType.Lines = new ChartType("Lines", {});
    ChartType.Area = new ChartType("Area", {});
    reports.ChartType = ChartType;
    class ColumnFormat extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "reports.ColumnFormat";
        }
    }
    ColumnFormat.Default = new ColumnFormat("Default", {});
    ColumnFormat.MonthName = new ColumnFormat("MonthName", {});
    ColumnFormat.WeekdayName = new ColumnFormat("WeekdayName", {});
    reports.ColumnFormat = ColumnFormat;
    class DateRangeFieldEnum extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "reports.DateRangeFieldEnum";
        }
    }
    DateRangeFieldEnum.Year = new DateRangeFieldEnum("Year", {});
    DateRangeFieldEnum.Month = new DateRangeFieldEnum("Month", {});
    DateRangeFieldEnum.Week = new DateRangeFieldEnum("Week", {});
    DateRangeFieldEnum.Period = new DateRangeFieldEnum("Period", {});
    DateRangeFieldEnum.Quarter = new DateRangeFieldEnum("Quarter", {});
    reports.DateRangeFieldEnum = DateRangeFieldEnum;
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `Reports`.
     */
    /**
     * See: {@link https://docs.mendix.com/refguide/report-widgets relevant section in reference guide}
     */
    class ReportWidget extends pages_1.pages.Widget {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__dataSet = new internal.ByNameReferenceProperty(ReportWidget, this, "dataSet", null, "DataSets$DataSet");
            /** @internal */
            this.__generateOnLoad = new internal.PrimitiveProperty(ReportWidget, this, "generateOnLoad", true, internal.PrimitiveTypeEnum.Boolean);
            if (arguments.length < 4) {
                throw new Error("new ReportWidget() cannot be invoked directly, please use 'model.reports.createReportWidget()'");
            }
        }
        get containerAsWidgetValue() {
            return super.getContainerAs(customwidgets_1.customwidgets.WidgetValue);
        }
        get containerAsNativeLayout() {
            return super.getContainerAs(nativepages_1.nativepages.NativeLayout);
        }
        get containerAsNativeLayoutCallArgument() {
            return super.getContainerAs(nativepages_1.nativepages.NativeLayoutCallArgument);
        }
        get containerAsBuildingBlock() {
            return super.getContainerAs(pages_1.pages.BuildingBlock);
        }
        get containerAsDataView() {
            return super.getContainerAs(pages_1.pages.DataView);
        }
        get containerAsDivContainer() {
            return super.getContainerAs(pages_1.pages.DivContainer);
        }
        get containerAsGroupBox() {
            return super.getContainerAs(pages_1.pages.GroupBox);
        }
        get containerAsHeader() {
            return super.getContainerAs(pages_1.pages.Header);
        }
        get containerAsLayout() {
            return super.getContainerAs(pages_1.pages.Layout);
        }
        get containerAsLayoutCallArgument() {
            return super.getContainerAs(pages_1.pages.LayoutCallArgument);
        }
        get containerAsLayoutGridColumn() {
            return super.getContainerAs(pages_1.pages.LayoutGridColumn);
        }
        get containerAsListView() {
            return super.getContainerAs(pages_1.pages.ListView);
        }
        get containerAsListViewTemplate() {
            return super.getContainerAs(pages_1.pages.ListViewTemplate);
        }
        get containerAsMasterDetailRegion() {
            return super.getContainerAs(pages_1.pages.MasterDetailRegion);
        }
        get containerAsNativeLayoutContent() {
            return super.getContainerAs(pages_1.pages.NativeLayoutContent);
        }
        get containerAsNavigationListItem() {
            return super.getContainerAs(pages_1.pages.NavigationListItem);
        }
        get containerAsScrollContainerRegion() {
            return super.getContainerAs(pages_1.pages.ScrollContainerRegion);
        }
        get containerAsSnippet() {
            return super.getContainerAs(pages_1.pages.Snippet);
        }
        get containerAsSplitPane() {
            return super.getContainerAs(pages_1.pages.SplitPane);
        }
        get containerAsTabPage() {
            return super.getContainerAs(pages_1.pages.TabPage);
        }
        get containerAsTableCell() {
            return super.getContainerAs(pages_1.pages.TableCell);
        }
        get containerAsTemplateGridContents() {
            return super.getContainerAs(pages_1.pages.TemplateGridContents);
        }
        get containerAsVerticalFlow() {
            return super.getContainerAs(pages_1.pages.VerticalFlow);
        }
        get containerAsWebLayoutContent() {
            return super.getContainerAs(pages_1.pages.WebLayoutContent);
        }
        get containerAsReportPane() {
            return super.getContainerAs(ReportPane);
        }
        get dataSet() {
            return this.__dataSet.get();
        }
        set dataSet(newValue) {
            this.__dataSet.set(newValue);
        }
        get dataSetQualifiedName() {
            return this.__dataSet.qualifiedName();
        }
        /**
         * In version 6.10.0: introduced
         */
        get generateOnLoad() {
            return this.__generateOnLoad.get();
        }
        set generateOnLoad(newValue) {
            this.__generateOnLoad.set(newValue);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__generateOnLoad.isAvailable) {
                this.generateOnLoad = true;
            }
        }
    }
    ReportWidget.structureTypeName = "Reports$ReportWidget";
    ReportWidget.versionInfo = new exports.StructureVersionInfo({
        properties: {
            generateOnLoad: {
                introduced: "6.10.0"
            }
        }
    }, internal.StructureType.Element);
    reports.ReportWidget = ReportWidget;
    /**
     * See: {@link https://docs.mendix.com/refguide/report-grid relevant section in reference guide}
     */
    class BasicReport extends ReportWidget {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__columns = new internal.PartListProperty(BasicReport, this, "columns", []);
            /** @internal */
            this.__aggregates = new internal.PartListProperty(BasicReport, this, "aggregates", []);
            /** @internal */
            this.__showExportButton = new internal.PrimitiveProperty(BasicReport, this, "showExportButton", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__zoomInfo = new internal.PartProperty(BasicReport, this, "zoomInfo", null, true);
            /** @internal */
            this.__isPagingEnabled = new internal.PrimitiveProperty(BasicReport, this, "isPagingEnabled", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__pageSize = new internal.PrimitiveProperty(BasicReport, this, "pageSize", 20, internal.PrimitiveTypeEnum.Integer);
            if (arguments.length < 4) {
                throw new Error("new BasicReport() cannot be invoked directly, please use 'model.reports.createBasicReport()'");
            }
        }
        get containerAsWidgetValue() {
            return super.getContainerAs(customwidgets_1.customwidgets.WidgetValue);
        }
        get containerAsNativeLayout() {
            return super.getContainerAs(nativepages_1.nativepages.NativeLayout);
        }
        get containerAsNativeLayoutCallArgument() {
            return super.getContainerAs(nativepages_1.nativepages.NativeLayoutCallArgument);
        }
        get containerAsBuildingBlock() {
            return super.getContainerAs(pages_1.pages.BuildingBlock);
        }
        get containerAsDataView() {
            return super.getContainerAs(pages_1.pages.DataView);
        }
        get containerAsDivContainer() {
            return super.getContainerAs(pages_1.pages.DivContainer);
        }
        get containerAsGroupBox() {
            return super.getContainerAs(pages_1.pages.GroupBox);
        }
        get containerAsHeader() {
            return super.getContainerAs(pages_1.pages.Header);
        }
        get containerAsLayout() {
            return super.getContainerAs(pages_1.pages.Layout);
        }
        get containerAsLayoutCallArgument() {
            return super.getContainerAs(pages_1.pages.LayoutCallArgument);
        }
        get containerAsLayoutGridColumn() {
            return super.getContainerAs(pages_1.pages.LayoutGridColumn);
        }
        get containerAsListView() {
            return super.getContainerAs(pages_1.pages.ListView);
        }
        get containerAsListViewTemplate() {
            return super.getContainerAs(pages_1.pages.ListViewTemplate);
        }
        get containerAsMasterDetailRegion() {
            return super.getContainerAs(pages_1.pages.MasterDetailRegion);
        }
        get containerAsNativeLayoutContent() {
            return super.getContainerAs(pages_1.pages.NativeLayoutContent);
        }
        get containerAsNavigationListItem() {
            return super.getContainerAs(pages_1.pages.NavigationListItem);
        }
        get containerAsScrollContainerRegion() {
            return super.getContainerAs(pages_1.pages.ScrollContainerRegion);
        }
        get containerAsSnippet() {
            return super.getContainerAs(pages_1.pages.Snippet);
        }
        get containerAsSplitPane() {
            return super.getContainerAs(pages_1.pages.SplitPane);
        }
        get containerAsTabPage() {
            return super.getContainerAs(pages_1.pages.TabPage);
        }
        get containerAsTableCell() {
            return super.getContainerAs(pages_1.pages.TableCell);
        }
        get containerAsTemplateGridContents() {
            return super.getContainerAs(pages_1.pages.TemplateGridContents);
        }
        get containerAsVerticalFlow() {
            return super.getContainerAs(pages_1.pages.VerticalFlow);
        }
        get containerAsWebLayoutContent() {
            return super.getContainerAs(pages_1.pages.WebLayoutContent);
        }
        get containerAsReportPane() {
            return super.getContainerAs(ReportPane);
        }
        get columns() {
            return this.__columns.get();
        }
        get aggregates() {
            return this.__aggregates.get();
        }
        get showExportButton() {
            return this.__showExportButton.get();
        }
        set showExportButton(newValue) {
            this.__showExportButton.set(newValue);
        }
        get zoomInfo() {
            return this.__zoomInfo.get();
        }
        set zoomInfo(newValue) {
            this.__zoomInfo.set(newValue);
        }
        get isPagingEnabled() {
            return this.__isPagingEnabled.get();
        }
        set isPagingEnabled(newValue) {
            this.__isPagingEnabled.set(newValue);
        }
        get pageSize() {
            return this.__pageSize.get();
        }
        set pageSize(newValue) {
            this.__pageSize.set(newValue);
        }
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widgets' property
         * of the parent customwidgets.WidgetValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.2.0 and higher
         */
        static createInWidgetValueUnderWidgets(container) {
            internal.createInVersionCheck(container.model, BasicReport.structureTypeName, { start: "8.2.0" });
            return internal.instancehelpers.createElement(container, BasicReport, "widgets", true);
        }
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'headerWidget' property
         * of the parent nativepages.NativeLayout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.22.0 to 7.23.0
         */
        static createInNativeLayoutUnderHeaderWidget(container) {
            internal.createInVersionCheck(container.model, BasicReport.structureTypeName, { start: "7.22.0", end: "7.23.0" });
            return internal.instancehelpers.createElement(container, BasicReport, "headerWidget", false);
        }
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widgets' property
         * of the parent nativepages.NativeLayout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 to 7.23.0
         */
        static createInNativeLayoutUnderWidgets(container) {
            internal.createInVersionCheck(container.model, BasicReport.structureTypeName, { start: "7.21.0", end: "7.23.0" });
            return internal.instancehelpers.createElement(container, BasicReport, "widgets", true);
        }
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widgets' property
         * of the parent nativepages.NativeLayoutCallArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInNativeLayoutCallArgumentUnderWidgets(container) {
            internal.createInVersionCheck(container.model, BasicReport.structureTypeName, { start: "7.23.0", end: "7.23.0" });
            return internal.instancehelpers.createElement(container, BasicReport, "widgets", true);
        }
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widget' property
         * of the parent pages.BuildingBlock element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.7.0 to 7.14.0
         */
        static createInBuildingBlockUnderWidget(container) {
            internal.createInVersionCheck(container.model, BasicReport.structureTypeName, { start: "7.7.0", end: "7.14.0" });
            return internal.instancehelpers.createElement(container, BasicReport, "widget", false);
        }
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widgets' property
         * of the parent pages.BuildingBlock element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInBuildingBlockUnderWidgets(container) {
            internal.createInVersionCheck(container.model, BasicReport.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, BasicReport, "widgets", true);
        }
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'footerWidget' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.7.0 to 7.14.0
         */
        static createInDataViewUnderFooterWidget(container) {
            internal.createInVersionCheck(container.model, BasicReport.structureTypeName, { start: "6.7.0", end: "7.14.0" });
            return internal.instancehelpers.createElement(container, BasicReport, "footerWidget", false);
        }
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'footerWidgets' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInDataViewUnderFooterWidgets(container) {
            internal.createInVersionCheck(container.model, BasicReport.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, BasicReport, "footerWidgets", true);
        }
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widget' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInDataViewUnderWidget(container) {
            internal.createInVersionCheck(container.model, BasicReport.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, BasicReport, "widget", false);
        }
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widgets' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInDataViewUnderWidgets(container) {
            internal.createInVersionCheck(container.model, BasicReport.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, BasicReport, "widgets", true);
        }
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widget' property
         * of the parent pages.DivContainer element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInDivContainerUnderWidget(container) {
            internal.createInVersionCheck(container.model, BasicReport.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, BasicReport, "widget", false);
        }
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widgets' property
         * of the parent pages.DivContainer element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInDivContainerUnderWidgets(container) {
            internal.createInVersionCheck(container.model, BasicReport.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, BasicReport, "widgets", true);
        }
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widget' property
         * of the parent pages.GroupBox element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInGroupBoxUnderWidget(container) {
            internal.createInVersionCheck(container.model, BasicReport.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, BasicReport, "widget", false);
        }
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widgets' property
         * of the parent pages.GroupBox element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInGroupBoxUnderWidgets(container) {
            internal.createInVersionCheck(container.model, BasicReport.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, BasicReport, "widgets", true);
        }
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'leftWidget' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInHeaderUnderLeftWidget(container) {
            internal.createInVersionCheck(container.model, BasicReport.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, BasicReport, "leftWidget", false);
        }
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'leftWidgets' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInHeaderUnderLeftWidgets(container) {
            internal.createInVersionCheck(container.model, BasicReport.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, BasicReport, "leftWidgets", true);
        }
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'rightWidget' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInHeaderUnderRightWidget(container) {
            internal.createInVersionCheck(container.model, BasicReport.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, BasicReport, "rightWidget", false);
        }
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'rightWidgets' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInHeaderUnderRightWidgets(container) {
            internal.createInVersionCheck(container.model, BasicReport.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, BasicReport, "rightWidgets", true);
        }
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widget' property
         * of the parent pages.Layout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInLayoutUnderWidget(container) {
            internal.createInVersionCheck(container.model, BasicReport.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, BasicReport, "widget", false);
        }
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widgets' property
         * of the parent pages.Layout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 7.23.0
         */
        static createInLayoutUnderWidgets(container) {
            internal.createInVersionCheck(container.model, BasicReport.structureTypeName, { start: "7.15.0", end: "7.23.0" });
            return internal.instancehelpers.createElement(container, BasicReport, "widgets", true);
        }
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widget' property
         * of the parent pages.LayoutCallArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInLayoutCallArgumentUnderWidget(container) {
            internal.createInVersionCheck(container.model, BasicReport.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, BasicReport, "widget", false);
        }
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widgets' property
         * of the parent pages.LayoutCallArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInLayoutCallArgumentUnderWidgets(container) {
            internal.createInVersionCheck(container.model, BasicReport.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, BasicReport, "widgets", true);
        }
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widget' property
         * of the parent pages.LayoutGridColumn element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInLayoutGridColumnUnderWidget(container) {
            internal.createInVersionCheck(container.model, BasicReport.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, BasicReport, "widget", false);
        }
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widgets' property
         * of the parent pages.LayoutGridColumn element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInLayoutGridColumnUnderWidgets(container) {
            internal.createInVersionCheck(container.model, BasicReport.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, BasicReport, "widgets", true);
        }
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widget' property
         * of the parent pages.ListView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInListViewUnderWidget(container) {
            internal.createInVersionCheck(container.model, BasicReport.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, BasicReport, "widget", false);
        }
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widgets' property
         * of the parent pages.ListView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInListViewUnderWidgets(container) {
            internal.createInVersionCheck(container.model, BasicReport.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, BasicReport, "widgets", true);
        }
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widget' property
         * of the parent pages.ListViewTemplate element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInListViewTemplateUnderWidget(container) {
            internal.createInVersionCheck(container.model, BasicReport.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, BasicReport, "widget", false);
        }
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widgets' property
         * of the parent pages.ListViewTemplate element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInListViewTemplateUnderWidgets(container) {
            internal.createInVersionCheck(container.model, BasicReport.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, BasicReport, "widgets", true);
        }
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widget' property
         * of the parent pages.MasterDetailRegion element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.1.0 to 7.14.0
         */
        static createInMasterDetailRegionUnderWidget(container) {
            internal.createInVersionCheck(container.model, BasicReport.structureTypeName, { start: "7.1.0", end: "7.14.0" });
            return internal.instancehelpers.createElement(container, BasicReport, "widget", false);
        }
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'sidebarWidgets' property
         * of the parent pages.NativeLayoutContent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.5.0 and higher
         */
        static createInNativeLayoutContentUnderSidebarWidgets(container) {
            internal.createInVersionCheck(container.model, BasicReport.structureTypeName, { start: "8.5.0" });
            return internal.instancehelpers.createElement(container, BasicReport, "sidebarWidgets", true);
        }
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widgets' property
         * of the parent pages.NativeLayoutContent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 and higher
         */
        static createInNativeLayoutContentUnderWidgets(container) {
            internal.createInVersionCheck(container.model, BasicReport.structureTypeName, { start: "8.0.0" });
            return internal.instancehelpers.createElement(container, BasicReport, "widgets", true);
        }
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widget' property
         * of the parent pages.NavigationListItem element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInNavigationListItemUnderWidget(container) {
            internal.createInVersionCheck(container.model, BasicReport.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, BasicReport, "widget", false);
        }
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widgets' property
         * of the parent pages.NavigationListItem element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInNavigationListItemUnderWidgets(container) {
            internal.createInVersionCheck(container.model, BasicReport.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, BasicReport, "widgets", true);
        }
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widget' property
         * of the parent pages.ScrollContainerRegion element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInScrollContainerRegionUnderWidget(container) {
            internal.createInVersionCheck(container.model, BasicReport.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, BasicReport, "widget", false);
        }
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widgets' property
         * of the parent pages.ScrollContainerRegion element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInScrollContainerRegionUnderWidgets(container) {
            internal.createInVersionCheck(container.model, BasicReport.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, BasicReport, "widgets", true);
        }
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widget' property
         * of the parent pages.Snippet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInSnippetUnderWidget(container) {
            internal.createInVersionCheck(container.model, BasicReport.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, BasicReport, "widget", false);
        }
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widgets' property
         * of the parent pages.Snippet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInSnippetUnderWidgets(container) {
            internal.createInVersionCheck(container.model, BasicReport.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, BasicReport, "widgets", true);
        }
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'firstWidget' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInSplitPaneUnderFirstWidget(container) {
            internal.createInVersionCheck(container.model, BasicReport.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, BasicReport, "firstWidget", false);
        }
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'firstWidgets' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 7.23.0
         */
        static createInSplitPaneUnderFirstWidgets(container) {
            internal.createInVersionCheck(container.model, BasicReport.structureTypeName, { start: "7.15.0", end: "7.23.0" });
            return internal.instancehelpers.createElement(container, BasicReport, "firstWidgets", true);
        }
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'secondWidget' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInSplitPaneUnderSecondWidget(container) {
            internal.createInVersionCheck(container.model, BasicReport.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, BasicReport, "secondWidget", false);
        }
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'secondWidgets' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 7.23.0
         */
        static createInSplitPaneUnderSecondWidgets(container) {
            internal.createInVersionCheck(container.model, BasicReport.structureTypeName, { start: "7.15.0", end: "7.23.0" });
            return internal.instancehelpers.createElement(container, BasicReport, "secondWidgets", true);
        }
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widget' property
         * of the parent pages.TabPage element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInTabPageUnderWidget(container) {
            internal.createInVersionCheck(container.model, BasicReport.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, BasicReport, "widget", false);
        }
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widgets' property
         * of the parent pages.TabPage element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInTabPageUnderWidgets(container) {
            internal.createInVersionCheck(container.model, BasicReport.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, BasicReport, "widgets", true);
        }
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widget' property
         * of the parent pages.TableCell element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInTableCellUnderWidget(container) {
            internal.createInVersionCheck(container.model, BasicReport.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, BasicReport, "widget", false);
        }
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widgets' property
         * of the parent pages.TableCell element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInTableCellUnderWidgets(container) {
            internal.createInVersionCheck(container.model, BasicReport.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, BasicReport, "widgets", true);
        }
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widget' property
         * of the parent pages.TemplateGridContents element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInTemplateGridContentsUnderWidget(container) {
            internal.createInVersionCheck(container.model, BasicReport.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, BasicReport, "widget", false);
        }
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widgets' property
         * of the parent pages.TemplateGridContents element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInTemplateGridContentsUnderWidgets(container) {
            internal.createInVersionCheck(container.model, BasicReport.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, BasicReport, "widgets", true);
        }
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widgets' property
         * of the parent pages.VerticalFlow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInVerticalFlowUnderWidgets(container) {
            internal.createInVersionCheck(container.model, BasicReport.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, BasicReport, "widgets", true);
        }
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widgets' property
         * of the parent pages.WebLayoutContent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 and higher
         */
        static createInWebLayoutContentUnderWidgets(container) {
            internal.createInVersionCheck(container.model, BasicReport.structureTypeName, { start: "8.0.0" });
            return internal.instancehelpers.createElement(container, BasicReport, "widgets", true);
        }
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'parameterWidget' property
         * of the parent ReportPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInReportPaneUnderParameterWidget(container) {
            internal.createInVersionCheck(container.model, BasicReport.structureTypeName, { end: "6.9.0" });
            return internal.instancehelpers.createElement(container, BasicReport, "parameterWidget", false);
        }
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'reportWidget' property
         * of the parent ReportPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInReportPaneUnderReportWidget(container) {
            internal.createInVersionCheck(container.model, BasicReport.structureTypeName, { end: "6.9.0" });
            return internal.instancehelpers.createElement(container, BasicReport, "reportWidget", false);
        }
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, BasicReport);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            (() => {
                if (internal.isAtLeast("7.14.0", this.model)) {
                    this.columns.replace([BasicReportColumn.create(this.model)]);
                    return;
                }
                this.columns.replace([
                    ((basicReportColumn) => {
                        basicReportColumn.caption = ((text) => {
                            text.translations.replace([
                                ((translation) => {
                                    translation.languageCode = "en_US";
                                    translation.text = "Column 1";
                                    return translation;
                                })(texts_1.texts.Translation.create(this.model))
                            ]);
                            return text;
                        })(texts_1.texts.Text.create(this.model));
                        return basicReportColumn;
                    })(BasicReportColumn.create(this.model)),
                    ((basicReportColumn) => {
                        basicReportColumn.caption = ((text) => {
                            text.translations.replace([
                                ((translation) => {
                                    translation.languageCode = "en_US";
                                    translation.text = "Column 2";
                                    return translation;
                                })(texts_1.texts.Translation.create(this.model))
                            ]);
                            return text;
                        })(texts_1.texts.Text.create(this.model));
                        return basicReportColumn;
                    })(BasicReportColumn.create(this.model)),
                    ((basicReportColumn) => {
                        basicReportColumn.caption = ((text) => {
                            text.translations.replace([
                                ((translation) => {
                                    translation.languageCode = "en_US";
                                    translation.text = "Column 3";
                                    return translation;
                                })(texts_1.texts.Translation.create(this.model))
                            ]);
                            return text;
                        })(texts_1.texts.Text.create(this.model));
                        return basicReportColumn;
                    })(BasicReportColumn.create(this.model))
                ]);
            })();
            this.pageSize = 20;
            this.zoomInfo = ReportZoomInfo.create(this.model);
        }
    }
    BasicReport.structureTypeName = "Reports$BasicReport";
    BasicReport.versionInfo = new exports.StructureVersionInfo({
        properties: {
            columns: {},
            zoomInfo: {
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    reports.BasicReport = BasicReport;
    class BasicReportAggregate extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__caption = new internal.PartProperty(BasicReportAggregate, this, "caption", null, true);
            /** @internal */
            this.__aggregateFunction = new internal.EnumProperty(BasicReportAggregate, this, "aggregateFunction", AggregateFunctionEnum.Sum, AggregateFunctionEnum);
            /** @internal */
            this.__applicablePerColumn = new internal.PrimitiveListProperty(BasicReportAggregate, this, "applicablePerColumn", [], internal.PrimitiveTypeEnum.Boolean);
            if (arguments.length < 4) {
                throw new Error("new BasicReportAggregate() cannot be invoked directly, please use 'model.reports.createBasicReportAggregate()'");
            }
        }
        get containerAsBasicReport() {
            return super.getContainerAs(BasicReport);
        }
        get caption() {
            return this.__caption.get();
        }
        set caption(newValue) {
            this.__caption.set(newValue);
        }
        get aggregateFunction() {
            return this.__aggregateFunction.get();
        }
        set aggregateFunction(newValue) {
            this.__aggregateFunction.set(newValue);
        }
        get applicablePerColumn() {
            return this.__applicablePerColumn.get();
        }
        /**
         * Creates and returns a new BasicReportAggregate instance in the SDK and on the server.
         * The new BasicReportAggregate will be automatically stored in the 'aggregates' property
         * of the parent BasicReport element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, BasicReportAggregate, "aggregates", true);
        }
        /**
         * Creates and returns a new BasicReportAggregate instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, BasicReportAggregate);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.aggregateFunction = AggregateFunctionEnum.Sum;
            this.caption = texts_1.texts.Text.create(this.model);
        }
    }
    BasicReportAggregate.structureTypeName = "Reports$BasicReportAggregate";
    BasicReportAggregate.versionInfo = new exports.StructureVersionInfo({
        properties: {
            caption: {
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    reports.BasicReportAggregate = BasicReportAggregate;
    class BasicReportColumn extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__caption = new internal.PartProperty(BasicReportColumn, this, "caption", null, true);
            /** @internal */
            this.__dataSetColumnName = new internal.PrimitiveProperty(BasicReportColumn, this, "dataSetColumnName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__width = new internal.PrimitiveProperty(BasicReportColumn, this, "width", 1, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__alignment = new internal.EnumProperty(BasicReportColumn, this, "alignment", pages_1.pages.AlignmentEnum.Left, pages_1.pages.AlignmentEnum);
            /** @internal */
            this.__format = new internal.EnumProperty(BasicReportColumn, this, "format", ColumnFormat.Default, ColumnFormat);
            if (arguments.length < 4) {
                throw new Error("new BasicReportColumn() cannot be invoked directly, please use 'model.reports.createBasicReportColumn()'");
            }
        }
        get containerAsBasicReport() {
            return super.getContainerAs(BasicReport);
        }
        get caption() {
            return this.__caption.get();
        }
        set caption(newValue) {
            this.__caption.set(newValue);
        }
        get dataSetColumnName() {
            return this.__dataSetColumnName.get();
        }
        set dataSetColumnName(newValue) {
            this.__dataSetColumnName.set(newValue);
        }
        get width() {
            return this.__width.get();
        }
        set width(newValue) {
            this.__width.set(newValue);
        }
        get alignment() {
            return this.__alignment.get();
        }
        set alignment(newValue) {
            this.__alignment.set(newValue);
        }
        get format() {
            return this.__format.get();
        }
        set format(newValue) {
            this.__format.set(newValue);
        }
        /**
         * Creates and returns a new BasicReportColumn instance in the SDK and on the server.
         * The new BasicReportColumn will be automatically stored in the 'columns' property
         * of the parent BasicReport element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, BasicReportColumn, "columns", true);
        }
        /**
         * Creates and returns a new BasicReportColumn instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, BasicReportColumn);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.alignment = pages_1.pages.AlignmentEnum.Left;
            this.caption = texts_1.texts.Text.create(this.model);
            this.format = ColumnFormat.Default;
            this.width = 1;
        }
    }
    BasicReportColumn.structureTypeName = "Reports$BasicReportColumn";
    BasicReportColumn.versionInfo = new exports.StructureVersionInfo({
        properties: {
            caption: {
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    reports.BasicReportColumn = BasicReportColumn;
    /**
     * See: {@link https://docs.mendix.com/refguide/report-button relevant section in reference guide}
     */
    class ReportButton extends pages_1.pages.Widget {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__caption = new internal.PartProperty(ReportButton, this, "caption", null, true);
            if (arguments.length < 4) {
                throw new Error("new ReportButton() cannot be invoked directly, please use 'model.reports.createReportButton()'");
            }
        }
        get containerAsWidgetValue() {
            return super.getContainerAs(customwidgets_1.customwidgets.WidgetValue);
        }
        get containerAsNativeLayout() {
            return super.getContainerAs(nativepages_1.nativepages.NativeLayout);
        }
        get containerAsNativeLayoutCallArgument() {
            return super.getContainerAs(nativepages_1.nativepages.NativeLayoutCallArgument);
        }
        get containerAsBuildingBlock() {
            return super.getContainerAs(pages_1.pages.BuildingBlock);
        }
        get containerAsDataView() {
            return super.getContainerAs(pages_1.pages.DataView);
        }
        get containerAsDivContainer() {
            return super.getContainerAs(pages_1.pages.DivContainer);
        }
        get containerAsGroupBox() {
            return super.getContainerAs(pages_1.pages.GroupBox);
        }
        get containerAsHeader() {
            return super.getContainerAs(pages_1.pages.Header);
        }
        get containerAsLayout() {
            return super.getContainerAs(pages_1.pages.Layout);
        }
        get containerAsLayoutCallArgument() {
            return super.getContainerAs(pages_1.pages.LayoutCallArgument);
        }
        get containerAsLayoutGridColumn() {
            return super.getContainerAs(pages_1.pages.LayoutGridColumn);
        }
        get containerAsListView() {
            return super.getContainerAs(pages_1.pages.ListView);
        }
        get containerAsListViewTemplate() {
            return super.getContainerAs(pages_1.pages.ListViewTemplate);
        }
        get containerAsMasterDetailRegion() {
            return super.getContainerAs(pages_1.pages.MasterDetailRegion);
        }
        get containerAsNativeLayoutContent() {
            return super.getContainerAs(pages_1.pages.NativeLayoutContent);
        }
        get containerAsNavigationListItem() {
            return super.getContainerAs(pages_1.pages.NavigationListItem);
        }
        get containerAsScrollContainerRegion() {
            return super.getContainerAs(pages_1.pages.ScrollContainerRegion);
        }
        get containerAsSnippet() {
            return super.getContainerAs(pages_1.pages.Snippet);
        }
        get containerAsSplitPane() {
            return super.getContainerAs(pages_1.pages.SplitPane);
        }
        get containerAsTabPage() {
            return super.getContainerAs(pages_1.pages.TabPage);
        }
        get containerAsTableCell() {
            return super.getContainerAs(pages_1.pages.TableCell);
        }
        get containerAsTemplateGridContents() {
            return super.getContainerAs(pages_1.pages.TemplateGridContents);
        }
        get containerAsVerticalFlow() {
            return super.getContainerAs(pages_1.pages.VerticalFlow);
        }
        get containerAsWebLayoutContent() {
            return super.getContainerAs(pages_1.pages.WebLayoutContent);
        }
        get containerAsReportPane() {
            return super.getContainerAs(ReportPane);
        }
        get caption() {
            return this.__caption.get();
        }
        set caption(newValue) {
            this.__caption.set(newValue);
        }
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widgets' property
         * of the parent customwidgets.WidgetValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.2.0 and higher
         */
        static createInWidgetValueUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportButton.structureTypeName, { start: "8.2.0" });
            return internal.instancehelpers.createElement(container, ReportButton, "widgets", true);
        }
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'headerWidget' property
         * of the parent nativepages.NativeLayout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.22.0 to 7.23.0
         */
        static createInNativeLayoutUnderHeaderWidget(container) {
            internal.createInVersionCheck(container.model, ReportButton.structureTypeName, { start: "7.22.0", end: "7.23.0" });
            return internal.instancehelpers.createElement(container, ReportButton, "headerWidget", false);
        }
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widgets' property
         * of the parent nativepages.NativeLayout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 to 7.23.0
         */
        static createInNativeLayoutUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportButton.structureTypeName, { start: "7.21.0", end: "7.23.0" });
            return internal.instancehelpers.createElement(container, ReportButton, "widgets", true);
        }
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widgets' property
         * of the parent nativepages.NativeLayoutCallArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInNativeLayoutCallArgumentUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportButton.structureTypeName, { start: "7.23.0", end: "7.23.0" });
            return internal.instancehelpers.createElement(container, ReportButton, "widgets", true);
        }
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widget' property
         * of the parent pages.BuildingBlock element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.7.0 to 7.14.0
         */
        static createInBuildingBlockUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportButton.structureTypeName, { start: "7.7.0", end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportButton, "widget", false);
        }
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widgets' property
         * of the parent pages.BuildingBlock element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInBuildingBlockUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportButton.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, ReportButton, "widgets", true);
        }
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'footerWidget' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.7.0 to 7.14.0
         */
        static createInDataViewUnderFooterWidget(container) {
            internal.createInVersionCheck(container.model, ReportButton.structureTypeName, { start: "6.7.0", end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportButton, "footerWidget", false);
        }
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'footerWidgets' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInDataViewUnderFooterWidgets(container) {
            internal.createInVersionCheck(container.model, ReportButton.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, ReportButton, "footerWidgets", true);
        }
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widget' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInDataViewUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportButton.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportButton, "widget", false);
        }
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widgets' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInDataViewUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportButton.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, ReportButton, "widgets", true);
        }
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widget' property
         * of the parent pages.DivContainer element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInDivContainerUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportButton.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportButton, "widget", false);
        }
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widgets' property
         * of the parent pages.DivContainer element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInDivContainerUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportButton.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, ReportButton, "widgets", true);
        }
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widget' property
         * of the parent pages.GroupBox element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInGroupBoxUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportButton.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportButton, "widget", false);
        }
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widgets' property
         * of the parent pages.GroupBox element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInGroupBoxUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportButton.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, ReportButton, "widgets", true);
        }
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'leftWidget' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInHeaderUnderLeftWidget(container) {
            internal.createInVersionCheck(container.model, ReportButton.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportButton, "leftWidget", false);
        }
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'leftWidgets' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInHeaderUnderLeftWidgets(container) {
            internal.createInVersionCheck(container.model, ReportButton.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, ReportButton, "leftWidgets", true);
        }
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'rightWidget' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInHeaderUnderRightWidget(container) {
            internal.createInVersionCheck(container.model, ReportButton.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportButton, "rightWidget", false);
        }
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'rightWidgets' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInHeaderUnderRightWidgets(container) {
            internal.createInVersionCheck(container.model, ReportButton.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, ReportButton, "rightWidgets", true);
        }
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widget' property
         * of the parent pages.Layout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInLayoutUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportButton.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportButton, "widget", false);
        }
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widgets' property
         * of the parent pages.Layout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 7.23.0
         */
        static createInLayoutUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportButton.structureTypeName, { start: "7.15.0", end: "7.23.0" });
            return internal.instancehelpers.createElement(container, ReportButton, "widgets", true);
        }
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widget' property
         * of the parent pages.LayoutCallArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInLayoutCallArgumentUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportButton.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportButton, "widget", false);
        }
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widgets' property
         * of the parent pages.LayoutCallArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInLayoutCallArgumentUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportButton.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, ReportButton, "widgets", true);
        }
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widget' property
         * of the parent pages.LayoutGridColumn element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInLayoutGridColumnUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportButton.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportButton, "widget", false);
        }
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widgets' property
         * of the parent pages.LayoutGridColumn element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInLayoutGridColumnUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportButton.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, ReportButton, "widgets", true);
        }
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widget' property
         * of the parent pages.ListView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInListViewUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportButton.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportButton, "widget", false);
        }
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widgets' property
         * of the parent pages.ListView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInListViewUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportButton.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, ReportButton, "widgets", true);
        }
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widget' property
         * of the parent pages.ListViewTemplate element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInListViewTemplateUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportButton.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportButton, "widget", false);
        }
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widgets' property
         * of the parent pages.ListViewTemplate element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInListViewTemplateUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportButton.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, ReportButton, "widgets", true);
        }
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widget' property
         * of the parent pages.MasterDetailRegion element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.1.0 to 7.14.0
         */
        static createInMasterDetailRegionUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportButton.structureTypeName, { start: "7.1.0", end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportButton, "widget", false);
        }
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'sidebarWidgets' property
         * of the parent pages.NativeLayoutContent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.5.0 and higher
         */
        static createInNativeLayoutContentUnderSidebarWidgets(container) {
            internal.createInVersionCheck(container.model, ReportButton.structureTypeName, { start: "8.5.0" });
            return internal.instancehelpers.createElement(container, ReportButton, "sidebarWidgets", true);
        }
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widgets' property
         * of the parent pages.NativeLayoutContent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 and higher
         */
        static createInNativeLayoutContentUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportButton.structureTypeName, { start: "8.0.0" });
            return internal.instancehelpers.createElement(container, ReportButton, "widgets", true);
        }
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widget' property
         * of the parent pages.NavigationListItem element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInNavigationListItemUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportButton.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportButton, "widget", false);
        }
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widgets' property
         * of the parent pages.NavigationListItem element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInNavigationListItemUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportButton.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, ReportButton, "widgets", true);
        }
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widget' property
         * of the parent pages.ScrollContainerRegion element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInScrollContainerRegionUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportButton.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportButton, "widget", false);
        }
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widgets' property
         * of the parent pages.ScrollContainerRegion element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInScrollContainerRegionUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportButton.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, ReportButton, "widgets", true);
        }
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widget' property
         * of the parent pages.Snippet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInSnippetUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportButton.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportButton, "widget", false);
        }
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widgets' property
         * of the parent pages.Snippet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInSnippetUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportButton.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, ReportButton, "widgets", true);
        }
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'firstWidget' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInSplitPaneUnderFirstWidget(container) {
            internal.createInVersionCheck(container.model, ReportButton.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportButton, "firstWidget", false);
        }
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'firstWidgets' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 7.23.0
         */
        static createInSplitPaneUnderFirstWidgets(container) {
            internal.createInVersionCheck(container.model, ReportButton.structureTypeName, { start: "7.15.0", end: "7.23.0" });
            return internal.instancehelpers.createElement(container, ReportButton, "firstWidgets", true);
        }
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'secondWidget' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInSplitPaneUnderSecondWidget(container) {
            internal.createInVersionCheck(container.model, ReportButton.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportButton, "secondWidget", false);
        }
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'secondWidgets' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 7.23.0
         */
        static createInSplitPaneUnderSecondWidgets(container) {
            internal.createInVersionCheck(container.model, ReportButton.structureTypeName, { start: "7.15.0", end: "7.23.0" });
            return internal.instancehelpers.createElement(container, ReportButton, "secondWidgets", true);
        }
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widget' property
         * of the parent pages.TabPage element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInTabPageUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportButton.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportButton, "widget", false);
        }
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widgets' property
         * of the parent pages.TabPage element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInTabPageUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportButton.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, ReportButton, "widgets", true);
        }
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widget' property
         * of the parent pages.TableCell element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInTableCellUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportButton.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportButton, "widget", false);
        }
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widgets' property
         * of the parent pages.TableCell element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInTableCellUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportButton.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, ReportButton, "widgets", true);
        }
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widget' property
         * of the parent pages.TemplateGridContents element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInTemplateGridContentsUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportButton.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportButton, "widget", false);
        }
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widgets' property
         * of the parent pages.TemplateGridContents element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInTemplateGridContentsUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportButton.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, ReportButton, "widgets", true);
        }
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widgets' property
         * of the parent pages.VerticalFlow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInVerticalFlowUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportButton.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportButton, "widgets", true);
        }
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widgets' property
         * of the parent pages.WebLayoutContent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 and higher
         */
        static createInWebLayoutContentUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportButton.structureTypeName, { start: "8.0.0" });
            return internal.instancehelpers.createElement(container, ReportButton, "widgets", true);
        }
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'parameterWidget' property
         * of the parent ReportPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInReportPaneUnderParameterWidget(container) {
            internal.createInVersionCheck(container.model, ReportButton.structureTypeName, { end: "6.9.0" });
            return internal.instancehelpers.createElement(container, ReportButton, "parameterWidget", false);
        }
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'reportWidget' property
         * of the parent ReportPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInReportPaneUnderReportWidget(container) {
            internal.createInVersionCheck(container.model, ReportButton.structureTypeName, { end: "6.9.0" });
            return internal.instancehelpers.createElement(container, ReportButton, "reportWidget", false);
        }
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ReportButton);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            (() => {
                if (internal.isAtLeast("7.14.0", this.model)) {
                    this.caption = texts_1.texts.Text.create(this.model);
                    return;
                }
                this.caption = ((text) => {
                    text.translations.replace([
                        ((translation) => {
                            translation.languageCode = "en_US";
                            translation.text = "Generate report";
                            return translation;
                        })(texts_1.texts.Translation.create(this.model))
                    ]);
                    return text;
                })(texts_1.texts.Text.create(this.model));
            })();
        }
    }
    ReportButton.structureTypeName = "Reports$ReportButton";
    ReportButton.versionInfo = new exports.StructureVersionInfo({
        properties: {
            caption: {
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    reports.ReportButton = ReportButton;
    /**
     * See: {@link https://docs.mendix.com/refguide7/report-chart relevant document}
     *
     * In version 9.0.1: deleted
     */
    class ReportChart extends ReportWidget {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__type = new internal.EnumProperty(ReportChart, this, "type", ChartType.VerticalBars, ChartType);
            /** @internal */
            this.__seriess = new internal.PartListProperty(ReportChart, this, "seriess", []);
            /** @internal */
            this.__xAxisCaption = new internal.PartProperty(ReportChart, this, "xAxisCaption", null, true);
            /** @internal */
            this.__yAxisCaption = new internal.PartProperty(ReportChart, this, "yAxisCaption", null, true);
            /** @internal */
            this.__xAxisColumn = new internal.PrimitiveProperty(ReportChart, this, "xAxisColumn", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__xAxisFormat = new internal.EnumProperty(ReportChart, this, "xAxisFormat", ColumnFormat.Default, ColumnFormat);
            /** @internal */
            this.__yAxisPrecision = new internal.PrimitiveProperty(ReportChart, this, "yAxisPrecision", 2, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__yAxisUseMinMax = new internal.PrimitiveProperty(ReportChart, this, "yAxisUseMinMax", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__yAxisMinimum = new internal.PrimitiveProperty(ReportChart, this, "yAxisMinimum", 0, internal.PrimitiveTypeEnum.Double);
            /** @internal */
            this.__yAxisMaximum = new internal.PrimitiveProperty(ReportChart, this, "yAxisMaximum", 0, internal.PrimitiveTypeEnum.Double);
            /** @internal */
            this.__aspectRatio = new internal.EnumProperty(ReportChart, this, "aspectRatio", AspectRatio.FourToThree, AspectRatio);
            if (arguments.length < 4) {
                throw new Error("new ReportChart() cannot be invoked directly, please use 'model.reports.createReportChart()'");
            }
        }
        get containerAsWidgetValue() {
            return super.getContainerAs(customwidgets_1.customwidgets.WidgetValue);
        }
        get containerAsNativeLayout() {
            return super.getContainerAs(nativepages_1.nativepages.NativeLayout);
        }
        get containerAsNativeLayoutCallArgument() {
            return super.getContainerAs(nativepages_1.nativepages.NativeLayoutCallArgument);
        }
        get containerAsBuildingBlock() {
            return super.getContainerAs(pages_1.pages.BuildingBlock);
        }
        get containerAsDataView() {
            return super.getContainerAs(pages_1.pages.DataView);
        }
        get containerAsDivContainer() {
            return super.getContainerAs(pages_1.pages.DivContainer);
        }
        get containerAsGroupBox() {
            return super.getContainerAs(pages_1.pages.GroupBox);
        }
        get containerAsHeader() {
            return super.getContainerAs(pages_1.pages.Header);
        }
        get containerAsLayout() {
            return super.getContainerAs(pages_1.pages.Layout);
        }
        get containerAsLayoutCallArgument() {
            return super.getContainerAs(pages_1.pages.LayoutCallArgument);
        }
        get containerAsLayoutGridColumn() {
            return super.getContainerAs(pages_1.pages.LayoutGridColumn);
        }
        get containerAsListView() {
            return super.getContainerAs(pages_1.pages.ListView);
        }
        get containerAsListViewTemplate() {
            return super.getContainerAs(pages_1.pages.ListViewTemplate);
        }
        get containerAsMasterDetailRegion() {
            return super.getContainerAs(pages_1.pages.MasterDetailRegion);
        }
        get containerAsNativeLayoutContent() {
            return super.getContainerAs(pages_1.pages.NativeLayoutContent);
        }
        get containerAsNavigationListItem() {
            return super.getContainerAs(pages_1.pages.NavigationListItem);
        }
        get containerAsScrollContainerRegion() {
            return super.getContainerAs(pages_1.pages.ScrollContainerRegion);
        }
        get containerAsSnippet() {
            return super.getContainerAs(pages_1.pages.Snippet);
        }
        get containerAsSplitPane() {
            return super.getContainerAs(pages_1.pages.SplitPane);
        }
        get containerAsTabPage() {
            return super.getContainerAs(pages_1.pages.TabPage);
        }
        get containerAsTableCell() {
            return super.getContainerAs(pages_1.pages.TableCell);
        }
        get containerAsTemplateGridContents() {
            return super.getContainerAs(pages_1.pages.TemplateGridContents);
        }
        get containerAsVerticalFlow() {
            return super.getContainerAs(pages_1.pages.VerticalFlow);
        }
        get containerAsWebLayoutContent() {
            return super.getContainerAs(pages_1.pages.WebLayoutContent);
        }
        get containerAsReportPane() {
            return super.getContainerAs(ReportPane);
        }
        get type() {
            return this.__type.get();
        }
        set type(newValue) {
            this.__type.set(newValue);
        }
        get seriess() {
            return this.__seriess.get();
        }
        get xAxisCaption() {
            return this.__xAxisCaption.get();
        }
        set xAxisCaption(newValue) {
            this.__xAxisCaption.set(newValue);
        }
        get yAxisCaption() {
            return this.__yAxisCaption.get();
        }
        set yAxisCaption(newValue) {
            this.__yAxisCaption.set(newValue);
        }
        get xAxisColumn() {
            return this.__xAxisColumn.get();
        }
        set xAxisColumn(newValue) {
            this.__xAxisColumn.set(newValue);
        }
        get xAxisFormat() {
            return this.__xAxisFormat.get();
        }
        set xAxisFormat(newValue) {
            this.__xAxisFormat.set(newValue);
        }
        get yAxisPrecision() {
            return this.__yAxisPrecision.get();
        }
        set yAxisPrecision(newValue) {
            this.__yAxisPrecision.set(newValue);
        }
        get yAxisUseMinMax() {
            return this.__yAxisUseMinMax.get();
        }
        set yAxisUseMinMax(newValue) {
            this.__yAxisUseMinMax.set(newValue);
        }
        get yAxisMinimum() {
            return this.__yAxisMinimum.get();
        }
        set yAxisMinimum(newValue) {
            this.__yAxisMinimum.set(newValue);
        }
        get yAxisMaximum() {
            return this.__yAxisMaximum.get();
        }
        set yAxisMaximum(newValue) {
            this.__yAxisMaximum.set(newValue);
        }
        get aspectRatio() {
            return this.__aspectRatio.get();
        }
        set aspectRatio(newValue) {
            this.__aspectRatio.set(newValue);
        }
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widgets' property
         * of the parent customwidgets.WidgetValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.2.0 to 9.0.0
         */
        static createInWidgetValueUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportChart.structureTypeName, { start: "8.2.0", end: "9.0.0" });
            return internal.instancehelpers.createElement(container, ReportChart, "widgets", true);
        }
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'headerWidget' property
         * of the parent nativepages.NativeLayout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.22.0 to 7.23.0
         */
        static createInNativeLayoutUnderHeaderWidget(container) {
            internal.createInVersionCheck(container.model, ReportChart.structureTypeName, { start: "7.22.0", end: "7.23.0" });
            return internal.instancehelpers.createElement(container, ReportChart, "headerWidget", false);
        }
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widgets' property
         * of the parent nativepages.NativeLayout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 to 7.23.0
         */
        static createInNativeLayoutUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportChart.structureTypeName, { start: "7.21.0", end: "7.23.0" });
            return internal.instancehelpers.createElement(container, ReportChart, "widgets", true);
        }
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widgets' property
         * of the parent nativepages.NativeLayoutCallArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInNativeLayoutCallArgumentUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportChart.structureTypeName, { start: "7.23.0", end: "7.23.0" });
            return internal.instancehelpers.createElement(container, ReportChart, "widgets", true);
        }
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widget' property
         * of the parent pages.BuildingBlock element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.7.0 to 7.14.0
         */
        static createInBuildingBlockUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportChart.structureTypeName, { start: "7.7.0", end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportChart, "widget", false);
        }
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widgets' property
         * of the parent pages.BuildingBlock element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.0.0
         */
        static createInBuildingBlockUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportChart.structureTypeName, { start: "7.15.0", end: "9.0.0" });
            return internal.instancehelpers.createElement(container, ReportChart, "widgets", true);
        }
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'footerWidget' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.7.0 to 7.14.0
         */
        static createInDataViewUnderFooterWidget(container) {
            internal.createInVersionCheck(container.model, ReportChart.structureTypeName, { start: "6.7.0", end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportChart, "footerWidget", false);
        }
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'footerWidgets' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.0.0
         */
        static createInDataViewUnderFooterWidgets(container) {
            internal.createInVersionCheck(container.model, ReportChart.structureTypeName, { start: "7.15.0", end: "9.0.0" });
            return internal.instancehelpers.createElement(container, ReportChart, "footerWidgets", true);
        }
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widget' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInDataViewUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportChart.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportChart, "widget", false);
        }
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widgets' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.0.0
         */
        static createInDataViewUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportChart.structureTypeName, { start: "7.15.0", end: "9.0.0" });
            return internal.instancehelpers.createElement(container, ReportChart, "widgets", true);
        }
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widget' property
         * of the parent pages.DivContainer element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInDivContainerUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportChart.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportChart, "widget", false);
        }
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widgets' property
         * of the parent pages.DivContainer element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.0.0
         */
        static createInDivContainerUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportChart.structureTypeName, { start: "7.15.0", end: "9.0.0" });
            return internal.instancehelpers.createElement(container, ReportChart, "widgets", true);
        }
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widget' property
         * of the parent pages.GroupBox element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInGroupBoxUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportChart.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportChart, "widget", false);
        }
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widgets' property
         * of the parent pages.GroupBox element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.0.0
         */
        static createInGroupBoxUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportChart.structureTypeName, { start: "7.15.0", end: "9.0.0" });
            return internal.instancehelpers.createElement(container, ReportChart, "widgets", true);
        }
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'leftWidget' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInHeaderUnderLeftWidget(container) {
            internal.createInVersionCheck(container.model, ReportChart.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportChart, "leftWidget", false);
        }
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'leftWidgets' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.0.0
         */
        static createInHeaderUnderLeftWidgets(container) {
            internal.createInVersionCheck(container.model, ReportChart.structureTypeName, { start: "7.15.0", end: "9.0.0" });
            return internal.instancehelpers.createElement(container, ReportChart, "leftWidgets", true);
        }
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'rightWidget' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInHeaderUnderRightWidget(container) {
            internal.createInVersionCheck(container.model, ReportChart.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportChart, "rightWidget", false);
        }
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'rightWidgets' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.0.0
         */
        static createInHeaderUnderRightWidgets(container) {
            internal.createInVersionCheck(container.model, ReportChart.structureTypeName, { start: "7.15.0", end: "9.0.0" });
            return internal.instancehelpers.createElement(container, ReportChart, "rightWidgets", true);
        }
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widget' property
         * of the parent pages.Layout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInLayoutUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportChart.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportChart, "widget", false);
        }
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widgets' property
         * of the parent pages.Layout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 7.23.0
         */
        static createInLayoutUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportChart.structureTypeName, { start: "7.15.0", end: "7.23.0" });
            return internal.instancehelpers.createElement(container, ReportChart, "widgets", true);
        }
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widget' property
         * of the parent pages.LayoutCallArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInLayoutCallArgumentUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportChart.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportChart, "widget", false);
        }
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widgets' property
         * of the parent pages.LayoutCallArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.0.0
         */
        static createInLayoutCallArgumentUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportChart.structureTypeName, { start: "7.15.0", end: "9.0.0" });
            return internal.instancehelpers.createElement(container, ReportChart, "widgets", true);
        }
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widget' property
         * of the parent pages.LayoutGridColumn element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInLayoutGridColumnUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportChart.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportChart, "widget", false);
        }
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widgets' property
         * of the parent pages.LayoutGridColumn element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.0.0
         */
        static createInLayoutGridColumnUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportChart.structureTypeName, { start: "7.15.0", end: "9.0.0" });
            return internal.instancehelpers.createElement(container, ReportChart, "widgets", true);
        }
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widget' property
         * of the parent pages.ListView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInListViewUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportChart.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportChart, "widget", false);
        }
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widgets' property
         * of the parent pages.ListView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.0.0
         */
        static createInListViewUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportChart.structureTypeName, { start: "7.15.0", end: "9.0.0" });
            return internal.instancehelpers.createElement(container, ReportChart, "widgets", true);
        }
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widget' property
         * of the parent pages.ListViewTemplate element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInListViewTemplateUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportChart.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportChart, "widget", false);
        }
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widgets' property
         * of the parent pages.ListViewTemplate element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.0.0
         */
        static createInListViewTemplateUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportChart.structureTypeName, { start: "7.15.0", end: "9.0.0" });
            return internal.instancehelpers.createElement(container, ReportChart, "widgets", true);
        }
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widget' property
         * of the parent pages.MasterDetailRegion element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.1.0 to 7.14.0
         */
        static createInMasterDetailRegionUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportChart.structureTypeName, { start: "7.1.0", end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportChart, "widget", false);
        }
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'sidebarWidgets' property
         * of the parent pages.NativeLayoutContent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.5.0 to 9.0.0
         */
        static createInNativeLayoutContentUnderSidebarWidgets(container) {
            internal.createInVersionCheck(container.model, ReportChart.structureTypeName, { start: "8.5.0", end: "9.0.0" });
            return internal.instancehelpers.createElement(container, ReportChart, "sidebarWidgets", true);
        }
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widgets' property
         * of the parent pages.NativeLayoutContent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 to 9.0.0
         */
        static createInNativeLayoutContentUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportChart.structureTypeName, { start: "8.0.0", end: "9.0.0" });
            return internal.instancehelpers.createElement(container, ReportChart, "widgets", true);
        }
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widget' property
         * of the parent pages.NavigationListItem element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInNavigationListItemUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportChart.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportChart, "widget", false);
        }
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widgets' property
         * of the parent pages.NavigationListItem element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.0.0
         */
        static createInNavigationListItemUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportChart.structureTypeName, { start: "7.15.0", end: "9.0.0" });
            return internal.instancehelpers.createElement(container, ReportChart, "widgets", true);
        }
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widget' property
         * of the parent pages.ScrollContainerRegion element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInScrollContainerRegionUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportChart.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportChart, "widget", false);
        }
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widgets' property
         * of the parent pages.ScrollContainerRegion element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.0.0
         */
        static createInScrollContainerRegionUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportChart.structureTypeName, { start: "7.15.0", end: "9.0.0" });
            return internal.instancehelpers.createElement(container, ReportChart, "widgets", true);
        }
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widget' property
         * of the parent pages.Snippet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInSnippetUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportChart.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportChart, "widget", false);
        }
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widgets' property
         * of the parent pages.Snippet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.0.0
         */
        static createInSnippetUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportChart.structureTypeName, { start: "7.15.0", end: "9.0.0" });
            return internal.instancehelpers.createElement(container, ReportChart, "widgets", true);
        }
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'firstWidget' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInSplitPaneUnderFirstWidget(container) {
            internal.createInVersionCheck(container.model, ReportChart.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportChart, "firstWidget", false);
        }
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'firstWidgets' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 7.23.0
         */
        static createInSplitPaneUnderFirstWidgets(container) {
            internal.createInVersionCheck(container.model, ReportChart.structureTypeName, { start: "7.15.0", end: "7.23.0" });
            return internal.instancehelpers.createElement(container, ReportChart, "firstWidgets", true);
        }
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'secondWidget' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInSplitPaneUnderSecondWidget(container) {
            internal.createInVersionCheck(container.model, ReportChart.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportChart, "secondWidget", false);
        }
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'secondWidgets' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 7.23.0
         */
        static createInSplitPaneUnderSecondWidgets(container) {
            internal.createInVersionCheck(container.model, ReportChart.structureTypeName, { start: "7.15.0", end: "7.23.0" });
            return internal.instancehelpers.createElement(container, ReportChart, "secondWidgets", true);
        }
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widget' property
         * of the parent pages.TabPage element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInTabPageUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportChart.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportChart, "widget", false);
        }
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widgets' property
         * of the parent pages.TabPage element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.0.0
         */
        static createInTabPageUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportChart.structureTypeName, { start: "7.15.0", end: "9.0.0" });
            return internal.instancehelpers.createElement(container, ReportChart, "widgets", true);
        }
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widget' property
         * of the parent pages.TableCell element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInTableCellUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportChart.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportChart, "widget", false);
        }
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widgets' property
         * of the parent pages.TableCell element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.0.0
         */
        static createInTableCellUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportChart.structureTypeName, { start: "7.15.0", end: "9.0.0" });
            return internal.instancehelpers.createElement(container, ReportChart, "widgets", true);
        }
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widget' property
         * of the parent pages.TemplateGridContents element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInTemplateGridContentsUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportChart.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportChart, "widget", false);
        }
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widgets' property
         * of the parent pages.TemplateGridContents element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.0.0
         */
        static createInTemplateGridContentsUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportChart.structureTypeName, { start: "7.15.0", end: "9.0.0" });
            return internal.instancehelpers.createElement(container, ReportChart, "widgets", true);
        }
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widgets' property
         * of the parent pages.VerticalFlow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInVerticalFlowUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportChart.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportChart, "widgets", true);
        }
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widgets' property
         * of the parent pages.WebLayoutContent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 to 9.0.0
         */
        static createInWebLayoutContentUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportChart.structureTypeName, { start: "8.0.0", end: "9.0.0" });
            return internal.instancehelpers.createElement(container, ReportChart, "widgets", true);
        }
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'parameterWidget' property
         * of the parent ReportPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInReportPaneUnderParameterWidget(container) {
            internal.createInVersionCheck(container.model, ReportChart.structureTypeName, { end: "6.9.0" });
            return internal.instancehelpers.createElement(container, ReportChart, "parameterWidget", false);
        }
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'reportWidget' property
         * of the parent ReportPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInReportPaneUnderReportWidget(container) {
            internal.createInVersionCheck(container.model, ReportChart.structureTypeName, { end: "6.9.0" });
            return internal.instancehelpers.createElement(container, ReportChart, "reportWidget", false);
        }
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ReportChart);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.aspectRatio = AspectRatio.FourToThree;
            this.type = ChartType.VerticalBars;
            (() => {
                if (internal.isAtLeast("7.14.0", this.model)) {
                    this.xAxisCaption = texts_1.texts.Text.create(this.model);
                    return;
                }
                this.xAxisCaption = ((text) => {
                    text.translations.replace([
                        ((translation) => {
                            translation.languageCode = "en_US";
                            translation.text = "X-axis caption";
                            return translation;
                        })(texts_1.texts.Translation.create(this.model))
                    ]);
                    return text;
                })(texts_1.texts.Text.create(this.model));
            })();
            this.xAxisFormat = ColumnFormat.Default;
            (() => {
                if (internal.isAtLeast("7.14.0", this.model)) {
                    this.yAxisCaption = texts_1.texts.Text.create(this.model);
                    return;
                }
                this.yAxisCaption = ((text) => {
                    text.translations.replace([
                        ((translation) => {
                            translation.languageCode = "en_US";
                            translation.text = "Y-axis caption";
                            return translation;
                        })(texts_1.texts.Translation.create(this.model))
                    ]);
                    return text;
                })(texts_1.texts.Text.create(this.model));
            })();
            this.yAxisPrecision = 2;
        }
    }
    ReportChart.structureTypeName = "Reports$ReportChart";
    ReportChart.versionInfo = new exports.StructureVersionInfo({
        deleted: "9.0.1",
        deletionMessage: null,
        properties: {
            xAxisCaption: {
                required: {
                    currentValue: true
                }
            },
            yAxisCaption: {
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    reports.ReportChart = ReportChart;
    /**
     * In version 9.0.1: deleted
     */
    class ReportChartSeries extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__caption = new internal.PartProperty(ReportChartSeries, this, "caption", null, true);
            /** @internal */
            this.__dataSetColumn = new internal.PrimitiveProperty(ReportChartSeries, this, "dataSetColumn", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new ReportChartSeries() cannot be invoked directly, please use 'model.reports.createReportChartSeries()'");
            }
        }
        get containerAsReportChart() {
            return super.getContainerAs(ReportChart);
        }
        get caption() {
            return this.__caption.get();
        }
        set caption(newValue) {
            this.__caption.set(newValue);
        }
        get dataSetColumn() {
            return this.__dataSetColumn.get();
        }
        set dataSetColumn(newValue) {
            this.__dataSetColumn.set(newValue);
        }
        /**
         * Creates and returns a new ReportChartSeries instance in the SDK and on the server.
         * The new ReportChartSeries will be automatically stored in the 'seriess' property
         * of the parent ReportChart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 9.0.0
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, ReportChartSeries.structureTypeName, { end: "9.0.0" });
            return internal.instancehelpers.createElement(container, ReportChartSeries, "seriess", true);
        }
        /**
         * Creates and returns a new ReportChartSeries instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ReportChartSeries);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.caption = texts_1.texts.Text.create(this.model);
        }
    }
    ReportChartSeries.structureTypeName = "Reports$ReportChartSeries";
    ReportChartSeries.versionInfo = new exports.StructureVersionInfo({
        deleted: "9.0.1",
        deletionMessage: null,
        properties: {
            caption: {
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    reports.ReportChartSeries = ReportChartSeries;
    /**
     * See: {@link https://docs.mendix.com/refguide/date-range-field relevant section in reference guide}
     */
    class ReportDateRangeField extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__caption = new internal.PartProperty(ReportDateRangeField, this, "caption", null, true);
            /** @internal */
            this.__type = new internal.EnumProperty(ReportDateRangeField, this, "type", DateRangeFieldEnum.Year, DateRangeFieldEnum);
            if (arguments.length < 4) {
                throw new Error("new ReportDateRangeField() cannot be invoked directly, please use 'model.reports.createReportDateRangeField()'");
            }
        }
        get containerAsReportDateRangeSelector() {
            return super.getContainerAs(ReportDateRangeSelector);
        }
        get caption() {
            return this.__caption.get();
        }
        set caption(newValue) {
            this.__caption.set(newValue);
        }
        get type() {
            return this.__type.get();
        }
        set type(newValue) {
            this.__type.set(newValue);
        }
        /**
         * Creates and returns a new ReportDateRangeField instance in the SDK and on the server.
         * The new ReportDateRangeField will be automatically stored in the 'fields' property
         * of the parent ReportDateRangeSelector element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, ReportDateRangeField, "fields", true);
        }
        /**
         * Creates and returns a new ReportDateRangeField instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ReportDateRangeField);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.caption = texts_1.texts.Text.create(this.model);
            this.type = DateRangeFieldEnum.Year;
        }
    }
    ReportDateRangeField.structureTypeName = "Reports$ReportDateRangeField";
    ReportDateRangeField.versionInfo = new exports.StructureVersionInfo({
        properties: {
            caption: {
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    reports.ReportDateRangeField = ReportDateRangeField;
    class ReportParameter extends pages_1.pages.Widget {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__parameter = new internal.ByNameReferenceProperty(ReportParameter, this, "parameter", null, "DataSets$DataSetParameter");
            /** @internal */
            this.__parameterName = new internal.PrimitiveProperty(ReportParameter, this, "parameterName", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new ReportParameter() cannot be invoked directly, please use 'model.reports.createReportParameter()'");
            }
        }
        get containerAsWidgetValue() {
            return super.getContainerAs(customwidgets_1.customwidgets.WidgetValue);
        }
        get containerAsNativeLayout() {
            return super.getContainerAs(nativepages_1.nativepages.NativeLayout);
        }
        get containerAsNativeLayoutCallArgument() {
            return super.getContainerAs(nativepages_1.nativepages.NativeLayoutCallArgument);
        }
        get containerAsBuildingBlock() {
            return super.getContainerAs(pages_1.pages.BuildingBlock);
        }
        get containerAsDataView() {
            return super.getContainerAs(pages_1.pages.DataView);
        }
        get containerAsDivContainer() {
            return super.getContainerAs(pages_1.pages.DivContainer);
        }
        get containerAsGroupBox() {
            return super.getContainerAs(pages_1.pages.GroupBox);
        }
        get containerAsHeader() {
            return super.getContainerAs(pages_1.pages.Header);
        }
        get containerAsLayout() {
            return super.getContainerAs(pages_1.pages.Layout);
        }
        get containerAsLayoutCallArgument() {
            return super.getContainerAs(pages_1.pages.LayoutCallArgument);
        }
        get containerAsLayoutGridColumn() {
            return super.getContainerAs(pages_1.pages.LayoutGridColumn);
        }
        get containerAsListView() {
            return super.getContainerAs(pages_1.pages.ListView);
        }
        get containerAsListViewTemplate() {
            return super.getContainerAs(pages_1.pages.ListViewTemplate);
        }
        get containerAsMasterDetailRegion() {
            return super.getContainerAs(pages_1.pages.MasterDetailRegion);
        }
        get containerAsNativeLayoutContent() {
            return super.getContainerAs(pages_1.pages.NativeLayoutContent);
        }
        get containerAsNavigationListItem() {
            return super.getContainerAs(pages_1.pages.NavigationListItem);
        }
        get containerAsScrollContainerRegion() {
            return super.getContainerAs(pages_1.pages.ScrollContainerRegion);
        }
        get containerAsSnippet() {
            return super.getContainerAs(pages_1.pages.Snippet);
        }
        get containerAsSplitPane() {
            return super.getContainerAs(pages_1.pages.SplitPane);
        }
        get containerAsTabPage() {
            return super.getContainerAs(pages_1.pages.TabPage);
        }
        get containerAsTableCell() {
            return super.getContainerAs(pages_1.pages.TableCell);
        }
        get containerAsTemplateGridContents() {
            return super.getContainerAs(pages_1.pages.TemplateGridContents);
        }
        get containerAsVerticalFlow() {
            return super.getContainerAs(pages_1.pages.VerticalFlow);
        }
        get containerAsWebLayoutContent() {
            return super.getContainerAs(pages_1.pages.WebLayoutContent);
        }
        get containerAsReportPane() {
            return super.getContainerAs(ReportPane);
        }
        /**
         * In version 6.10.0: introduced
         */
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
         * In version 6.10.0: deleted
         */
        get parameterName() {
            return this.__parameterName.get();
        }
        set parameterName(newValue) {
            this.__parameterName.set(newValue);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ReportParameter.structureTypeName = "Reports$ReportParameter";
    ReportParameter.versionInfo = new exports.StructureVersionInfo({
        properties: {
            parameter: {
                introduced: "6.10.0"
            },
            parameterName: {
                deleted: "6.10.0",
                deletionMessage: null
            }
        }
    }, internal.StructureType.Element);
    reports.ReportParameter = ReportParameter;
    /**
     * See: {@link https://docs.mendix.com/refguide/report-date-parameter relevant section in reference guide}
     */
    class ReportDateRangeSelector extends ReportParameter {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__fields = new internal.PartListProperty(ReportDateRangeSelector, this, "fields", []);
            /** @internal */
            this.__minYear = new internal.PrimitiveProperty(ReportDateRangeSelector, this, "minYear", 0, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__maxYear = new internal.PrimitiveProperty(ReportDateRangeSelector, this, "maxYear", 0, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__fieldsPerRow = new internal.PrimitiveProperty(ReportDateRangeSelector, this, "fieldsPerRow", 3, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__showFromToRange = new internal.PrimitiveProperty(ReportDateRangeSelector, this, "showFromToRange", true, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__fromCaption = new internal.PartProperty(ReportDateRangeSelector, this, "fromCaption", null, true);
            /** @internal */
            this.__toCaption = new internal.PartProperty(ReportDateRangeSelector, this, "toCaption", null, true);
            if (arguments.length < 4) {
                throw new Error("new ReportDateRangeSelector() cannot be invoked directly, please use 'model.reports.createReportDateRangeSelector()'");
            }
        }
        get containerAsWidgetValue() {
            return super.getContainerAs(customwidgets_1.customwidgets.WidgetValue);
        }
        get containerAsNativeLayout() {
            return super.getContainerAs(nativepages_1.nativepages.NativeLayout);
        }
        get containerAsNativeLayoutCallArgument() {
            return super.getContainerAs(nativepages_1.nativepages.NativeLayoutCallArgument);
        }
        get containerAsBuildingBlock() {
            return super.getContainerAs(pages_1.pages.BuildingBlock);
        }
        get containerAsDataView() {
            return super.getContainerAs(pages_1.pages.DataView);
        }
        get containerAsDivContainer() {
            return super.getContainerAs(pages_1.pages.DivContainer);
        }
        get containerAsGroupBox() {
            return super.getContainerAs(pages_1.pages.GroupBox);
        }
        get containerAsHeader() {
            return super.getContainerAs(pages_1.pages.Header);
        }
        get containerAsLayout() {
            return super.getContainerAs(pages_1.pages.Layout);
        }
        get containerAsLayoutCallArgument() {
            return super.getContainerAs(pages_1.pages.LayoutCallArgument);
        }
        get containerAsLayoutGridColumn() {
            return super.getContainerAs(pages_1.pages.LayoutGridColumn);
        }
        get containerAsListView() {
            return super.getContainerAs(pages_1.pages.ListView);
        }
        get containerAsListViewTemplate() {
            return super.getContainerAs(pages_1.pages.ListViewTemplate);
        }
        get containerAsMasterDetailRegion() {
            return super.getContainerAs(pages_1.pages.MasterDetailRegion);
        }
        get containerAsNativeLayoutContent() {
            return super.getContainerAs(pages_1.pages.NativeLayoutContent);
        }
        get containerAsNavigationListItem() {
            return super.getContainerAs(pages_1.pages.NavigationListItem);
        }
        get containerAsScrollContainerRegion() {
            return super.getContainerAs(pages_1.pages.ScrollContainerRegion);
        }
        get containerAsSnippet() {
            return super.getContainerAs(pages_1.pages.Snippet);
        }
        get containerAsSplitPane() {
            return super.getContainerAs(pages_1.pages.SplitPane);
        }
        get containerAsTabPage() {
            return super.getContainerAs(pages_1.pages.TabPage);
        }
        get containerAsTableCell() {
            return super.getContainerAs(pages_1.pages.TableCell);
        }
        get containerAsTemplateGridContents() {
            return super.getContainerAs(pages_1.pages.TemplateGridContents);
        }
        get containerAsVerticalFlow() {
            return super.getContainerAs(pages_1.pages.VerticalFlow);
        }
        get containerAsWebLayoutContent() {
            return super.getContainerAs(pages_1.pages.WebLayoutContent);
        }
        get containerAsReportPane() {
            return super.getContainerAs(ReportPane);
        }
        get fields() {
            return this.__fields.get();
        }
        get minYear() {
            return this.__minYear.get();
        }
        set minYear(newValue) {
            this.__minYear.set(newValue);
        }
        get maxYear() {
            return this.__maxYear.get();
        }
        set maxYear(newValue) {
            this.__maxYear.set(newValue);
        }
        get fieldsPerRow() {
            return this.__fieldsPerRow.get();
        }
        set fieldsPerRow(newValue) {
            this.__fieldsPerRow.set(newValue);
        }
        get showFromToRange() {
            return this.__showFromToRange.get();
        }
        set showFromToRange(newValue) {
            this.__showFromToRange.set(newValue);
        }
        get fromCaption() {
            return this.__fromCaption.get();
        }
        set fromCaption(newValue) {
            this.__fromCaption.set(newValue);
        }
        get toCaption() {
            return this.__toCaption.get();
        }
        set toCaption(newValue) {
            this.__toCaption.set(newValue);
        }
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widgets' property
         * of the parent customwidgets.WidgetValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.2.0 and higher
         */
        static createInWidgetValueUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportDateRangeSelector.structureTypeName, { start: "8.2.0" });
            return internal.instancehelpers.createElement(container, ReportDateRangeSelector, "widgets", true);
        }
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'headerWidget' property
         * of the parent nativepages.NativeLayout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.22.0 to 7.23.0
         */
        static createInNativeLayoutUnderHeaderWidget(container) {
            internal.createInVersionCheck(container.model, ReportDateRangeSelector.structureTypeName, { start: "7.22.0", end: "7.23.0" });
            return internal.instancehelpers.createElement(container, ReportDateRangeSelector, "headerWidget", false);
        }
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widgets' property
         * of the parent nativepages.NativeLayout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 to 7.23.0
         */
        static createInNativeLayoutUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportDateRangeSelector.structureTypeName, { start: "7.21.0", end: "7.23.0" });
            return internal.instancehelpers.createElement(container, ReportDateRangeSelector, "widgets", true);
        }
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widgets' property
         * of the parent nativepages.NativeLayoutCallArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInNativeLayoutCallArgumentUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportDateRangeSelector.structureTypeName, { start: "7.23.0", end: "7.23.0" });
            return internal.instancehelpers.createElement(container, ReportDateRangeSelector, "widgets", true);
        }
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widget' property
         * of the parent pages.BuildingBlock element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.7.0 to 7.14.0
         */
        static createInBuildingBlockUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportDateRangeSelector.structureTypeName, { start: "7.7.0", end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportDateRangeSelector, "widget", false);
        }
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widgets' property
         * of the parent pages.BuildingBlock element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInBuildingBlockUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportDateRangeSelector.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, ReportDateRangeSelector, "widgets", true);
        }
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'footerWidget' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.7.0 to 7.14.0
         */
        static createInDataViewUnderFooterWidget(container) {
            internal.createInVersionCheck(container.model, ReportDateRangeSelector.structureTypeName, { start: "6.7.0", end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportDateRangeSelector, "footerWidget", false);
        }
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'footerWidgets' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInDataViewUnderFooterWidgets(container) {
            internal.createInVersionCheck(container.model, ReportDateRangeSelector.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, ReportDateRangeSelector, "footerWidgets", true);
        }
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widget' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInDataViewUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportDateRangeSelector.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportDateRangeSelector, "widget", false);
        }
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widgets' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInDataViewUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportDateRangeSelector.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, ReportDateRangeSelector, "widgets", true);
        }
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widget' property
         * of the parent pages.DivContainer element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInDivContainerUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportDateRangeSelector.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportDateRangeSelector, "widget", false);
        }
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widgets' property
         * of the parent pages.DivContainer element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInDivContainerUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportDateRangeSelector.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, ReportDateRangeSelector, "widgets", true);
        }
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widget' property
         * of the parent pages.GroupBox element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInGroupBoxUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportDateRangeSelector.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportDateRangeSelector, "widget", false);
        }
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widgets' property
         * of the parent pages.GroupBox element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInGroupBoxUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportDateRangeSelector.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, ReportDateRangeSelector, "widgets", true);
        }
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'leftWidget' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInHeaderUnderLeftWidget(container) {
            internal.createInVersionCheck(container.model, ReportDateRangeSelector.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportDateRangeSelector, "leftWidget", false);
        }
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'leftWidgets' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInHeaderUnderLeftWidgets(container) {
            internal.createInVersionCheck(container.model, ReportDateRangeSelector.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, ReportDateRangeSelector, "leftWidgets", true);
        }
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'rightWidget' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInHeaderUnderRightWidget(container) {
            internal.createInVersionCheck(container.model, ReportDateRangeSelector.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportDateRangeSelector, "rightWidget", false);
        }
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'rightWidgets' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInHeaderUnderRightWidgets(container) {
            internal.createInVersionCheck(container.model, ReportDateRangeSelector.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, ReportDateRangeSelector, "rightWidgets", true);
        }
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widget' property
         * of the parent pages.Layout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInLayoutUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportDateRangeSelector.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportDateRangeSelector, "widget", false);
        }
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widgets' property
         * of the parent pages.Layout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 7.23.0
         */
        static createInLayoutUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportDateRangeSelector.structureTypeName, { start: "7.15.0", end: "7.23.0" });
            return internal.instancehelpers.createElement(container, ReportDateRangeSelector, "widgets", true);
        }
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widget' property
         * of the parent pages.LayoutCallArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInLayoutCallArgumentUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportDateRangeSelector.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportDateRangeSelector, "widget", false);
        }
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widgets' property
         * of the parent pages.LayoutCallArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInLayoutCallArgumentUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportDateRangeSelector.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, ReportDateRangeSelector, "widgets", true);
        }
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widget' property
         * of the parent pages.LayoutGridColumn element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInLayoutGridColumnUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportDateRangeSelector.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportDateRangeSelector, "widget", false);
        }
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widgets' property
         * of the parent pages.LayoutGridColumn element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInLayoutGridColumnUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportDateRangeSelector.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, ReportDateRangeSelector, "widgets", true);
        }
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widget' property
         * of the parent pages.ListView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInListViewUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportDateRangeSelector.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportDateRangeSelector, "widget", false);
        }
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widgets' property
         * of the parent pages.ListView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInListViewUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportDateRangeSelector.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, ReportDateRangeSelector, "widgets", true);
        }
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widget' property
         * of the parent pages.ListViewTemplate element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInListViewTemplateUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportDateRangeSelector.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportDateRangeSelector, "widget", false);
        }
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widgets' property
         * of the parent pages.ListViewTemplate element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInListViewTemplateUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportDateRangeSelector.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, ReportDateRangeSelector, "widgets", true);
        }
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widget' property
         * of the parent pages.MasterDetailRegion element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.1.0 to 7.14.0
         */
        static createInMasterDetailRegionUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportDateRangeSelector.structureTypeName, { start: "7.1.0", end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportDateRangeSelector, "widget", false);
        }
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'sidebarWidgets' property
         * of the parent pages.NativeLayoutContent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.5.0 and higher
         */
        static createInNativeLayoutContentUnderSidebarWidgets(container) {
            internal.createInVersionCheck(container.model, ReportDateRangeSelector.structureTypeName, { start: "8.5.0" });
            return internal.instancehelpers.createElement(container, ReportDateRangeSelector, "sidebarWidgets", true);
        }
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widgets' property
         * of the parent pages.NativeLayoutContent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 and higher
         */
        static createInNativeLayoutContentUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportDateRangeSelector.structureTypeName, { start: "8.0.0" });
            return internal.instancehelpers.createElement(container, ReportDateRangeSelector, "widgets", true);
        }
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widget' property
         * of the parent pages.NavigationListItem element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInNavigationListItemUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportDateRangeSelector.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportDateRangeSelector, "widget", false);
        }
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widgets' property
         * of the parent pages.NavigationListItem element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInNavigationListItemUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportDateRangeSelector.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, ReportDateRangeSelector, "widgets", true);
        }
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widget' property
         * of the parent pages.ScrollContainerRegion element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInScrollContainerRegionUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportDateRangeSelector.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportDateRangeSelector, "widget", false);
        }
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widgets' property
         * of the parent pages.ScrollContainerRegion element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInScrollContainerRegionUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportDateRangeSelector.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, ReportDateRangeSelector, "widgets", true);
        }
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widget' property
         * of the parent pages.Snippet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInSnippetUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportDateRangeSelector.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportDateRangeSelector, "widget", false);
        }
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widgets' property
         * of the parent pages.Snippet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInSnippetUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportDateRangeSelector.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, ReportDateRangeSelector, "widgets", true);
        }
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'firstWidget' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInSplitPaneUnderFirstWidget(container) {
            internal.createInVersionCheck(container.model, ReportDateRangeSelector.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportDateRangeSelector, "firstWidget", false);
        }
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'firstWidgets' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 7.23.0
         */
        static createInSplitPaneUnderFirstWidgets(container) {
            internal.createInVersionCheck(container.model, ReportDateRangeSelector.structureTypeName, { start: "7.15.0", end: "7.23.0" });
            return internal.instancehelpers.createElement(container, ReportDateRangeSelector, "firstWidgets", true);
        }
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'secondWidget' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInSplitPaneUnderSecondWidget(container) {
            internal.createInVersionCheck(container.model, ReportDateRangeSelector.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportDateRangeSelector, "secondWidget", false);
        }
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'secondWidgets' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 7.23.0
         */
        static createInSplitPaneUnderSecondWidgets(container) {
            internal.createInVersionCheck(container.model, ReportDateRangeSelector.structureTypeName, { start: "7.15.0", end: "7.23.0" });
            return internal.instancehelpers.createElement(container, ReportDateRangeSelector, "secondWidgets", true);
        }
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widget' property
         * of the parent pages.TabPage element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInTabPageUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportDateRangeSelector.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportDateRangeSelector, "widget", false);
        }
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widgets' property
         * of the parent pages.TabPage element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInTabPageUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportDateRangeSelector.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, ReportDateRangeSelector, "widgets", true);
        }
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widget' property
         * of the parent pages.TableCell element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInTableCellUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportDateRangeSelector.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportDateRangeSelector, "widget", false);
        }
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widgets' property
         * of the parent pages.TableCell element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInTableCellUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportDateRangeSelector.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, ReportDateRangeSelector, "widgets", true);
        }
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widget' property
         * of the parent pages.TemplateGridContents element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInTemplateGridContentsUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportDateRangeSelector.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportDateRangeSelector, "widget", false);
        }
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widgets' property
         * of the parent pages.TemplateGridContents element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInTemplateGridContentsUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportDateRangeSelector.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, ReportDateRangeSelector, "widgets", true);
        }
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widgets' property
         * of the parent pages.VerticalFlow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInVerticalFlowUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportDateRangeSelector.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportDateRangeSelector, "widgets", true);
        }
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widgets' property
         * of the parent pages.WebLayoutContent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 and higher
         */
        static createInWebLayoutContentUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportDateRangeSelector.structureTypeName, { start: "8.0.0" });
            return internal.instancehelpers.createElement(container, ReportDateRangeSelector, "widgets", true);
        }
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'parameterWidget' property
         * of the parent ReportPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInReportPaneUnderParameterWidget(container) {
            internal.createInVersionCheck(container.model, ReportDateRangeSelector.structureTypeName, { end: "6.9.0" });
            return internal.instancehelpers.createElement(container, ReportDateRangeSelector, "parameterWidget", false);
        }
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'reportWidget' property
         * of the parent ReportPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInReportPaneUnderReportWidget(container) {
            internal.createInVersionCheck(container.model, ReportDateRangeSelector.structureTypeName, { end: "6.9.0" });
            return internal.instancehelpers.createElement(container, ReportDateRangeSelector, "reportWidget", false);
        }
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ReportDateRangeSelector);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.fieldsPerRow = 3;
            (() => {
                if (internal.isAtLeast("7.14.0", this.model)) {
                    this.fromCaption = texts_1.texts.Text.create(this.model);
                    return;
                }
                this.fromCaption = ((text) => {
                    text.translations.replace([
                        ((translation) => {
                            translation.languageCode = "en_US";
                            translation.text = "From";
                            return translation;
                        })(texts_1.texts.Translation.create(this.model))
                    ]);
                    return text;
                })(texts_1.texts.Text.create(this.model));
            })();
            (() => {
                if (internal.isAtLeast("7.14.0", this.model)) {
                    return;
                }
                this.maxYear = 2015;
            })();
            (() => {
                if (internal.isAtLeast("7.14.0", this.model)) {
                    return;
                }
                this.minYear = 2011;
            })();
            this.showFromToRange = true;
            (() => {
                if (internal.isAtLeast("7.14.0", this.model)) {
                    this.toCaption = texts_1.texts.Text.create(this.model);
                    return;
                }
                this.toCaption = ((text) => {
                    text.translations.replace([
                        ((translation) => {
                            translation.languageCode = "en_US";
                            translation.text = "To";
                            return translation;
                        })(texts_1.texts.Translation.create(this.model))
                    ]);
                    return text;
                })(texts_1.texts.Text.create(this.model));
            })();
        }
    }
    ReportDateRangeSelector.structureTypeName = "Reports$ReportDateRangeSelector";
    ReportDateRangeSelector.versionInfo = new exports.StructureVersionInfo({
        properties: {
            minYear: {},
            maxYear: {},
            fromCaption: {
                required: {
                    currentValue: true
                }
            },
            toCaption: {
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    reports.ReportDateRangeSelector = ReportDateRangeSelector;
    /**
     * See: {@link https://docs.mendix.com/refguide/report-parameter relevant section in reference guide}
     */
    class ReportDropDown extends ReportParameter {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__attribute = new internal.ByNameReferenceProperty(ReportDropDown, this, "attribute", null, "DomainModels$Attribute");
            if (arguments.length < 4) {
                throw new Error("new ReportDropDown() cannot be invoked directly, please use 'model.reports.createReportDropDown()'");
            }
        }
        get containerAsWidgetValue() {
            return super.getContainerAs(customwidgets_1.customwidgets.WidgetValue);
        }
        get containerAsNativeLayout() {
            return super.getContainerAs(nativepages_1.nativepages.NativeLayout);
        }
        get containerAsNativeLayoutCallArgument() {
            return super.getContainerAs(nativepages_1.nativepages.NativeLayoutCallArgument);
        }
        get containerAsBuildingBlock() {
            return super.getContainerAs(pages_1.pages.BuildingBlock);
        }
        get containerAsDataView() {
            return super.getContainerAs(pages_1.pages.DataView);
        }
        get containerAsDivContainer() {
            return super.getContainerAs(pages_1.pages.DivContainer);
        }
        get containerAsGroupBox() {
            return super.getContainerAs(pages_1.pages.GroupBox);
        }
        get containerAsHeader() {
            return super.getContainerAs(pages_1.pages.Header);
        }
        get containerAsLayout() {
            return super.getContainerAs(pages_1.pages.Layout);
        }
        get containerAsLayoutCallArgument() {
            return super.getContainerAs(pages_1.pages.LayoutCallArgument);
        }
        get containerAsLayoutGridColumn() {
            return super.getContainerAs(pages_1.pages.LayoutGridColumn);
        }
        get containerAsListView() {
            return super.getContainerAs(pages_1.pages.ListView);
        }
        get containerAsListViewTemplate() {
            return super.getContainerAs(pages_1.pages.ListViewTemplate);
        }
        get containerAsMasterDetailRegion() {
            return super.getContainerAs(pages_1.pages.MasterDetailRegion);
        }
        get containerAsNativeLayoutContent() {
            return super.getContainerAs(pages_1.pages.NativeLayoutContent);
        }
        get containerAsNavigationListItem() {
            return super.getContainerAs(pages_1.pages.NavigationListItem);
        }
        get containerAsScrollContainerRegion() {
            return super.getContainerAs(pages_1.pages.ScrollContainerRegion);
        }
        get containerAsSnippet() {
            return super.getContainerAs(pages_1.pages.Snippet);
        }
        get containerAsSplitPane() {
            return super.getContainerAs(pages_1.pages.SplitPane);
        }
        get containerAsTabPage() {
            return super.getContainerAs(pages_1.pages.TabPage);
        }
        get containerAsTableCell() {
            return super.getContainerAs(pages_1.pages.TableCell);
        }
        get containerAsTemplateGridContents() {
            return super.getContainerAs(pages_1.pages.TemplateGridContents);
        }
        get containerAsVerticalFlow() {
            return super.getContainerAs(pages_1.pages.VerticalFlow);
        }
        get containerAsWebLayoutContent() {
            return super.getContainerAs(pages_1.pages.WebLayoutContent);
        }
        get containerAsReportPane() {
            return super.getContainerAs(ReportPane);
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
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widgets' property
         * of the parent customwidgets.WidgetValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.2.0 and higher
         */
        static createInWidgetValueUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportDropDown.structureTypeName, { start: "8.2.0" });
            return internal.instancehelpers.createElement(container, ReportDropDown, "widgets", true);
        }
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'headerWidget' property
         * of the parent nativepages.NativeLayout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.22.0 to 7.23.0
         */
        static createInNativeLayoutUnderHeaderWidget(container) {
            internal.createInVersionCheck(container.model, ReportDropDown.structureTypeName, { start: "7.22.0", end: "7.23.0" });
            return internal.instancehelpers.createElement(container, ReportDropDown, "headerWidget", false);
        }
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widgets' property
         * of the parent nativepages.NativeLayout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 to 7.23.0
         */
        static createInNativeLayoutUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportDropDown.structureTypeName, { start: "7.21.0", end: "7.23.0" });
            return internal.instancehelpers.createElement(container, ReportDropDown, "widgets", true);
        }
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widgets' property
         * of the parent nativepages.NativeLayoutCallArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInNativeLayoutCallArgumentUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportDropDown.structureTypeName, { start: "7.23.0", end: "7.23.0" });
            return internal.instancehelpers.createElement(container, ReportDropDown, "widgets", true);
        }
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widget' property
         * of the parent pages.BuildingBlock element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.7.0 to 7.14.0
         */
        static createInBuildingBlockUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportDropDown.structureTypeName, { start: "7.7.0", end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportDropDown, "widget", false);
        }
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widgets' property
         * of the parent pages.BuildingBlock element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInBuildingBlockUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportDropDown.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, ReportDropDown, "widgets", true);
        }
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'footerWidget' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.7.0 to 7.14.0
         */
        static createInDataViewUnderFooterWidget(container) {
            internal.createInVersionCheck(container.model, ReportDropDown.structureTypeName, { start: "6.7.0", end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportDropDown, "footerWidget", false);
        }
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'footerWidgets' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInDataViewUnderFooterWidgets(container) {
            internal.createInVersionCheck(container.model, ReportDropDown.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, ReportDropDown, "footerWidgets", true);
        }
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widget' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInDataViewUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportDropDown.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportDropDown, "widget", false);
        }
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widgets' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInDataViewUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportDropDown.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, ReportDropDown, "widgets", true);
        }
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widget' property
         * of the parent pages.DivContainer element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInDivContainerUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportDropDown.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportDropDown, "widget", false);
        }
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widgets' property
         * of the parent pages.DivContainer element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInDivContainerUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportDropDown.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, ReportDropDown, "widgets", true);
        }
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widget' property
         * of the parent pages.GroupBox element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInGroupBoxUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportDropDown.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportDropDown, "widget", false);
        }
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widgets' property
         * of the parent pages.GroupBox element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInGroupBoxUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportDropDown.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, ReportDropDown, "widgets", true);
        }
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'leftWidget' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInHeaderUnderLeftWidget(container) {
            internal.createInVersionCheck(container.model, ReportDropDown.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportDropDown, "leftWidget", false);
        }
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'leftWidgets' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInHeaderUnderLeftWidgets(container) {
            internal.createInVersionCheck(container.model, ReportDropDown.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, ReportDropDown, "leftWidgets", true);
        }
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'rightWidget' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInHeaderUnderRightWidget(container) {
            internal.createInVersionCheck(container.model, ReportDropDown.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportDropDown, "rightWidget", false);
        }
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'rightWidgets' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInHeaderUnderRightWidgets(container) {
            internal.createInVersionCheck(container.model, ReportDropDown.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, ReportDropDown, "rightWidgets", true);
        }
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widget' property
         * of the parent pages.Layout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInLayoutUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportDropDown.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportDropDown, "widget", false);
        }
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widgets' property
         * of the parent pages.Layout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 7.23.0
         */
        static createInLayoutUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportDropDown.structureTypeName, { start: "7.15.0", end: "7.23.0" });
            return internal.instancehelpers.createElement(container, ReportDropDown, "widgets", true);
        }
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widget' property
         * of the parent pages.LayoutCallArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInLayoutCallArgumentUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportDropDown.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportDropDown, "widget", false);
        }
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widgets' property
         * of the parent pages.LayoutCallArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInLayoutCallArgumentUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportDropDown.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, ReportDropDown, "widgets", true);
        }
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widget' property
         * of the parent pages.LayoutGridColumn element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInLayoutGridColumnUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportDropDown.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportDropDown, "widget", false);
        }
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widgets' property
         * of the parent pages.LayoutGridColumn element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInLayoutGridColumnUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportDropDown.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, ReportDropDown, "widgets", true);
        }
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widget' property
         * of the parent pages.ListView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInListViewUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportDropDown.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportDropDown, "widget", false);
        }
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widgets' property
         * of the parent pages.ListView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInListViewUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportDropDown.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, ReportDropDown, "widgets", true);
        }
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widget' property
         * of the parent pages.ListViewTemplate element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInListViewTemplateUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportDropDown.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportDropDown, "widget", false);
        }
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widgets' property
         * of the parent pages.ListViewTemplate element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInListViewTemplateUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportDropDown.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, ReportDropDown, "widgets", true);
        }
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widget' property
         * of the parent pages.MasterDetailRegion element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.1.0 to 7.14.0
         */
        static createInMasterDetailRegionUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportDropDown.structureTypeName, { start: "7.1.0", end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportDropDown, "widget", false);
        }
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'sidebarWidgets' property
         * of the parent pages.NativeLayoutContent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.5.0 and higher
         */
        static createInNativeLayoutContentUnderSidebarWidgets(container) {
            internal.createInVersionCheck(container.model, ReportDropDown.structureTypeName, { start: "8.5.0" });
            return internal.instancehelpers.createElement(container, ReportDropDown, "sidebarWidgets", true);
        }
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widgets' property
         * of the parent pages.NativeLayoutContent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 and higher
         */
        static createInNativeLayoutContentUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportDropDown.structureTypeName, { start: "8.0.0" });
            return internal.instancehelpers.createElement(container, ReportDropDown, "widgets", true);
        }
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widget' property
         * of the parent pages.NavigationListItem element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInNavigationListItemUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportDropDown.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportDropDown, "widget", false);
        }
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widgets' property
         * of the parent pages.NavigationListItem element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInNavigationListItemUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportDropDown.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, ReportDropDown, "widgets", true);
        }
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widget' property
         * of the parent pages.ScrollContainerRegion element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInScrollContainerRegionUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportDropDown.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportDropDown, "widget", false);
        }
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widgets' property
         * of the parent pages.ScrollContainerRegion element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInScrollContainerRegionUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportDropDown.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, ReportDropDown, "widgets", true);
        }
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widget' property
         * of the parent pages.Snippet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInSnippetUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportDropDown.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportDropDown, "widget", false);
        }
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widgets' property
         * of the parent pages.Snippet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInSnippetUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportDropDown.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, ReportDropDown, "widgets", true);
        }
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'firstWidget' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInSplitPaneUnderFirstWidget(container) {
            internal.createInVersionCheck(container.model, ReportDropDown.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportDropDown, "firstWidget", false);
        }
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'firstWidgets' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 7.23.0
         */
        static createInSplitPaneUnderFirstWidgets(container) {
            internal.createInVersionCheck(container.model, ReportDropDown.structureTypeName, { start: "7.15.0", end: "7.23.0" });
            return internal.instancehelpers.createElement(container, ReportDropDown, "firstWidgets", true);
        }
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'secondWidget' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInSplitPaneUnderSecondWidget(container) {
            internal.createInVersionCheck(container.model, ReportDropDown.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportDropDown, "secondWidget", false);
        }
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'secondWidgets' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 7.23.0
         */
        static createInSplitPaneUnderSecondWidgets(container) {
            internal.createInVersionCheck(container.model, ReportDropDown.structureTypeName, { start: "7.15.0", end: "7.23.0" });
            return internal.instancehelpers.createElement(container, ReportDropDown, "secondWidgets", true);
        }
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widget' property
         * of the parent pages.TabPage element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInTabPageUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportDropDown.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportDropDown, "widget", false);
        }
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widgets' property
         * of the parent pages.TabPage element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInTabPageUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportDropDown.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, ReportDropDown, "widgets", true);
        }
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widget' property
         * of the parent pages.TableCell element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInTableCellUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportDropDown.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportDropDown, "widget", false);
        }
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widgets' property
         * of the parent pages.TableCell element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInTableCellUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportDropDown.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, ReportDropDown, "widgets", true);
        }
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widget' property
         * of the parent pages.TemplateGridContents element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInTemplateGridContentsUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportDropDown.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportDropDown, "widget", false);
        }
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widgets' property
         * of the parent pages.TemplateGridContents element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInTemplateGridContentsUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportDropDown.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, ReportDropDown, "widgets", true);
        }
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widgets' property
         * of the parent pages.VerticalFlow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInVerticalFlowUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportDropDown.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, ReportDropDown, "widgets", true);
        }
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widgets' property
         * of the parent pages.WebLayoutContent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 and higher
         */
        static createInWebLayoutContentUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportDropDown.structureTypeName, { start: "8.0.0" });
            return internal.instancehelpers.createElement(container, ReportDropDown, "widgets", true);
        }
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'parameterWidget' property
         * of the parent ReportPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInReportPaneUnderParameterWidget(container) {
            internal.createInVersionCheck(container.model, ReportDropDown.structureTypeName, { end: "6.9.0" });
            return internal.instancehelpers.createElement(container, ReportDropDown, "parameterWidget", false);
        }
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'reportWidget' property
         * of the parent ReportPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInReportPaneUnderReportWidget(container) {
            internal.createInVersionCheck(container.model, ReportDropDown.structureTypeName, { end: "6.9.0" });
            return internal.instancehelpers.createElement(container, ReportDropDown, "reportWidget", false);
        }
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ReportDropDown);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ReportDropDown.structureTypeName = "Reports$ReportDropDown";
    ReportDropDown.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    reports.ReportDropDown = ReportDropDown;
    /**
     * See: {@link https://docs.mendix.com/refguide6/report-pane relevant section in reference guide}
     *
     * In version 6.10.0: deleted
     */
    class ReportPane extends pages_1.pages.Widget {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__parameterWidget = new internal.PartProperty(ReportPane, this, "parameterWidget", null, false);
            /** @internal */
            this.__reportWidget = new internal.PartProperty(ReportPane, this, "reportWidget", null, false);
            /** @internal */
            this.__generateOnLoad = new internal.PrimitiveProperty(ReportPane, this, "generateOnLoad", false, internal.PrimitiveTypeEnum.Boolean);
            if (arguments.length < 4) {
                throw new Error("new ReportPane() cannot be invoked directly, please use 'model.reports.createReportPane()'");
            }
        }
        get containerAsDataView() {
            return super.getContainerAs(pages_1.pages.DataView);
        }
        get containerAsDivContainer() {
            return super.getContainerAs(pages_1.pages.DivContainer);
        }
        get containerAsGroupBox() {
            return super.getContainerAs(pages_1.pages.GroupBox);
        }
        get containerAsHeader() {
            return super.getContainerAs(pages_1.pages.Header);
        }
        get containerAsLayout() {
            return super.getContainerAs(pages_1.pages.Layout);
        }
        get containerAsLayoutCallArgument() {
            return super.getContainerAs(pages_1.pages.LayoutCallArgument);
        }
        get containerAsLayoutGridColumn() {
            return super.getContainerAs(pages_1.pages.LayoutGridColumn);
        }
        get containerAsListView() {
            return super.getContainerAs(pages_1.pages.ListView);
        }
        get containerAsListViewTemplate() {
            return super.getContainerAs(pages_1.pages.ListViewTemplate);
        }
        get containerAsNavigationListItem() {
            return super.getContainerAs(pages_1.pages.NavigationListItem);
        }
        get containerAsScrollContainerRegion() {
            return super.getContainerAs(pages_1.pages.ScrollContainerRegion);
        }
        get containerAsSnippet() {
            return super.getContainerAs(pages_1.pages.Snippet);
        }
        get containerAsSplitPane() {
            return super.getContainerAs(pages_1.pages.SplitPane);
        }
        get containerAsTabPage() {
            return super.getContainerAs(pages_1.pages.TabPage);
        }
        get containerAsTableCell() {
            return super.getContainerAs(pages_1.pages.TableCell);
        }
        get containerAsTemplateGridContents() {
            return super.getContainerAs(pages_1.pages.TemplateGridContents);
        }
        get containerAsVerticalFlow() {
            return super.getContainerAs(pages_1.pages.VerticalFlow);
        }
        get containerAsReportPane() {
            return super.getContainerAs(ReportPane);
        }
        get parameterWidget() {
            return this.__parameterWidget.get();
        }
        set parameterWidget(newValue) {
            this.__parameterWidget.set(newValue);
        }
        get reportWidget() {
            return this.__reportWidget.get();
        }
        set reportWidget(newValue) {
            this.__reportWidget.set(newValue);
        }
        get generateOnLoad() {
            return this.__generateOnLoad.get();
        }
        set generateOnLoad(newValue) {
            this.__generateOnLoad.set(newValue);
        }
        /**
         * Creates and returns a new ReportPane instance in the SDK and on the server.
         * The new ReportPane will be automatically stored in the 'footerWidget' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.7.0 to 6.9.0
         */
        static createInDataViewUnderFooterWidget(container) {
            internal.createInVersionCheck(container.model, ReportPane.structureTypeName, { start: "6.7.0", end: "6.9.0" });
            return internal.instancehelpers.createElement(container, ReportPane, "footerWidget", false);
        }
        /**
         * Creates and returns a new ReportPane instance in the SDK and on the server.
         * The new ReportPane will be automatically stored in the 'widget' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInDataViewUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportPane.structureTypeName, { end: "6.9.0" });
            return internal.instancehelpers.createElement(container, ReportPane, "widget", false);
        }
        /**
         * Creates and returns a new ReportPane instance in the SDK and on the server.
         * The new ReportPane will be automatically stored in the 'widget' property
         * of the parent pages.DivContainer element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInDivContainerUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportPane.structureTypeName, { end: "6.9.0" });
            return internal.instancehelpers.createElement(container, ReportPane, "widget", false);
        }
        /**
         * Creates and returns a new ReportPane instance in the SDK and on the server.
         * The new ReportPane will be automatically stored in the 'widget' property
         * of the parent pages.GroupBox element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInGroupBoxUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportPane.structureTypeName, { end: "6.9.0" });
            return internal.instancehelpers.createElement(container, ReportPane, "widget", false);
        }
        /**
         * Creates and returns a new ReportPane instance in the SDK and on the server.
         * The new ReportPane will be automatically stored in the 'leftWidget' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInHeaderUnderLeftWidget(container) {
            internal.createInVersionCheck(container.model, ReportPane.structureTypeName, { end: "6.9.0" });
            return internal.instancehelpers.createElement(container, ReportPane, "leftWidget", false);
        }
        /**
         * Creates and returns a new ReportPane instance in the SDK and on the server.
         * The new ReportPane will be automatically stored in the 'rightWidget' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInHeaderUnderRightWidget(container) {
            internal.createInVersionCheck(container.model, ReportPane.structureTypeName, { end: "6.9.0" });
            return internal.instancehelpers.createElement(container, ReportPane, "rightWidget", false);
        }
        /**
         * Creates and returns a new ReportPane instance in the SDK and on the server.
         * The new ReportPane will be automatically stored in the 'widget' property
         * of the parent pages.Layout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInLayoutUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportPane.structureTypeName, { end: "6.9.0" });
            return internal.instancehelpers.createElement(container, ReportPane, "widget", false);
        }
        /**
         * Creates and returns a new ReportPane instance in the SDK and on the server.
         * The new ReportPane will be automatically stored in the 'widget' property
         * of the parent pages.LayoutCallArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInLayoutCallArgumentUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportPane.structureTypeName, { end: "6.9.0" });
            return internal.instancehelpers.createElement(container, ReportPane, "widget", false);
        }
        /**
         * Creates and returns a new ReportPane instance in the SDK and on the server.
         * The new ReportPane will be automatically stored in the 'widget' property
         * of the parent pages.LayoutGridColumn element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInLayoutGridColumnUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportPane.structureTypeName, { end: "6.9.0" });
            return internal.instancehelpers.createElement(container, ReportPane, "widget", false);
        }
        /**
         * Creates and returns a new ReportPane instance in the SDK and on the server.
         * The new ReportPane will be automatically stored in the 'widget' property
         * of the parent pages.ListView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInListViewUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportPane.structureTypeName, { end: "6.9.0" });
            return internal.instancehelpers.createElement(container, ReportPane, "widget", false);
        }
        /**
         * Creates and returns a new ReportPane instance in the SDK and on the server.
         * The new ReportPane will be automatically stored in the 'widget' property
         * of the parent pages.ListViewTemplate element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInListViewTemplateUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportPane.structureTypeName, { end: "6.9.0" });
            return internal.instancehelpers.createElement(container, ReportPane, "widget", false);
        }
        /**
         * Creates and returns a new ReportPane instance in the SDK and on the server.
         * The new ReportPane will be automatically stored in the 'widget' property
         * of the parent pages.NavigationListItem element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInNavigationListItemUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportPane.structureTypeName, { end: "6.9.0" });
            return internal.instancehelpers.createElement(container, ReportPane, "widget", false);
        }
        /**
         * Creates and returns a new ReportPane instance in the SDK and on the server.
         * The new ReportPane will be automatically stored in the 'widget' property
         * of the parent pages.ScrollContainerRegion element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInScrollContainerRegionUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportPane.structureTypeName, { end: "6.9.0" });
            return internal.instancehelpers.createElement(container, ReportPane, "widget", false);
        }
        /**
         * Creates and returns a new ReportPane instance in the SDK and on the server.
         * The new ReportPane will be automatically stored in the 'widget' property
         * of the parent pages.Snippet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInSnippetUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportPane.structureTypeName, { end: "6.9.0" });
            return internal.instancehelpers.createElement(container, ReportPane, "widget", false);
        }
        /**
         * Creates and returns a new ReportPane instance in the SDK and on the server.
         * The new ReportPane will be automatically stored in the 'firstWidget' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInSplitPaneUnderFirstWidget(container) {
            internal.createInVersionCheck(container.model, ReportPane.structureTypeName, { end: "6.9.0" });
            return internal.instancehelpers.createElement(container, ReportPane, "firstWidget", false);
        }
        /**
         * Creates and returns a new ReportPane instance in the SDK and on the server.
         * The new ReportPane will be automatically stored in the 'secondWidget' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInSplitPaneUnderSecondWidget(container) {
            internal.createInVersionCheck(container.model, ReportPane.structureTypeName, { end: "6.9.0" });
            return internal.instancehelpers.createElement(container, ReportPane, "secondWidget", false);
        }
        /**
         * Creates and returns a new ReportPane instance in the SDK and on the server.
         * The new ReportPane will be automatically stored in the 'widget' property
         * of the parent pages.TabPage element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInTabPageUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportPane.structureTypeName, { end: "6.9.0" });
            return internal.instancehelpers.createElement(container, ReportPane, "widget", false);
        }
        /**
         * Creates and returns a new ReportPane instance in the SDK and on the server.
         * The new ReportPane will be automatically stored in the 'widget' property
         * of the parent pages.TableCell element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInTableCellUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportPane.structureTypeName, { end: "6.9.0" });
            return internal.instancehelpers.createElement(container, ReportPane, "widget", false);
        }
        /**
         * Creates and returns a new ReportPane instance in the SDK and on the server.
         * The new ReportPane will be automatically stored in the 'widget' property
         * of the parent pages.TemplateGridContents element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInTemplateGridContentsUnderWidget(container) {
            internal.createInVersionCheck(container.model, ReportPane.structureTypeName, { end: "6.9.0" });
            return internal.instancehelpers.createElement(container, ReportPane, "widget", false);
        }
        /**
         * Creates and returns a new ReportPane instance in the SDK and on the server.
         * The new ReportPane will be automatically stored in the 'widgets' property
         * of the parent pages.VerticalFlow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInVerticalFlowUnderWidgets(container) {
            internal.createInVersionCheck(container.model, ReportPane.structureTypeName, { end: "6.9.0" });
            return internal.instancehelpers.createElement(container, ReportPane, "widgets", true);
        }
        /**
         * Creates and returns a new ReportPane instance in the SDK and on the server.
         * The new ReportPane will be automatically stored in the 'parameterWidget' property
         * of the parent ReportPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInReportPaneUnderParameterWidget(container) {
            internal.createInVersionCheck(container.model, ReportPane.structureTypeName, { end: "6.9.0" });
            return internal.instancehelpers.createElement(container, ReportPane, "parameterWidget", false);
        }
        /**
         * Creates and returns a new ReportPane instance in the SDK and on the server.
         * The new ReportPane will be automatically stored in the 'reportWidget' property
         * of the parent ReportPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInReportPaneUnderReportWidget(container) {
            internal.createInVersionCheck(container.model, ReportPane.structureTypeName, { end: "6.9.0" });
            return internal.instancehelpers.createElement(container, ReportPane, "reportWidget", false);
        }
        /**
         * Creates and returns a new ReportPane instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ReportPane);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ReportPane.structureTypeName = "Reports$ReportPane";
    ReportPane.versionInfo = new exports.StructureVersionInfo({
        deleted: "6.10.0",
        deletionMessage: null
    }, internal.StructureType.Element);
    reports.ReportPane = ReportPane;
    class ReportZoomInfo extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__targetPage = new internal.ByNameReferenceProperty(ReportZoomInfo, this, "targetPage", null, "Pages$Page");
            /** @internal */
            this.__mappings = new internal.PartListProperty(ReportZoomInfo, this, "mappings", []);
            if (arguments.length < 4) {
                throw new Error("new ReportZoomInfo() cannot be invoked directly, please use 'model.reports.createReportZoomInfo()'");
            }
        }
        get containerAsBasicReport() {
            return super.getContainerAs(BasicReport);
        }
        get targetPage() {
            return this.__targetPage.get();
        }
        set targetPage(newValue) {
            this.__targetPage.set(newValue);
        }
        get targetPageQualifiedName() {
            return this.__targetPage.qualifiedName();
        }
        get mappings() {
            return this.__mappings.get();
        }
        /**
         * Creates and returns a new ReportZoomInfo instance in the SDK and on the server.
         * The new ReportZoomInfo will be automatically stored in the 'zoomInfo' property
         * of the parent BasicReport element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, ReportZoomInfo, "zoomInfo", false);
        }
        /**
         * Creates and returns a new ReportZoomInfo instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ReportZoomInfo);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ReportZoomInfo.structureTypeName = "Reports$ReportZoomInfo";
    ReportZoomInfo.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    reports.ReportZoomInfo = ReportZoomInfo;
    class ReportZoomMapping extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__targetParameterName = new internal.PrimitiveProperty(ReportZoomMapping, this, "targetParameterName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__sourceReportColumnName = new internal.PrimitiveProperty(ReportZoomMapping, this, "sourceReportColumnName", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new ReportZoomMapping() cannot be invoked directly, please use 'model.reports.createReportZoomMapping()'");
            }
        }
        get containerAsReportZoomInfo() {
            return super.getContainerAs(ReportZoomInfo);
        }
        get targetParameterName() {
            return this.__targetParameterName.get();
        }
        set targetParameterName(newValue) {
            this.__targetParameterName.set(newValue);
        }
        get sourceReportColumnName() {
            return this.__sourceReportColumnName.get();
        }
        set sourceReportColumnName(newValue) {
            this.__sourceReportColumnName.set(newValue);
        }
        /**
         * Creates and returns a new ReportZoomMapping instance in the SDK and on the server.
         * The new ReportZoomMapping will be automatically stored in the 'mappings' property
         * of the parent ReportZoomInfo element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, ReportZoomMapping, "mappings", true);
        }
        /**
         * Creates and returns a new ReportZoomMapping instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ReportZoomMapping);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ReportZoomMapping.structureTypeName = "Reports$ReportZoomMapping";
    ReportZoomMapping.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    reports.ReportZoomMapping = ReportZoomMapping;
})(reports = exports.reports || (exports.reports = {}));
const customwidgets_1 = require("./customwidgets");
const nativepages_1 = require("./nativepages");
const texts_1 = require("./texts");
//# sourceMappingURL=reports.js.map