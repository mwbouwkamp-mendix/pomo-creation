import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
import { pages } from "./pages";
export declare namespace reports {
    class AggregateFunctionEnum extends internal.AbstractEnum {
        static Sum: AggregateFunctionEnum;
        static Average: AggregateFunctionEnum;
        static Count: AggregateFunctionEnum;
        static Minimum: AggregateFunctionEnum;
        static Maximum: AggregateFunctionEnum;
        protected qualifiedTsTypeName: string;
    }
    class AspectRatio extends internal.AbstractEnum {
        static SixteenToNine: AspectRatio;
        static ThreeToTwo: AspectRatio;
        static FourToThree: AspectRatio;
        static OneToOne: AspectRatio;
        static ThreeToFour: AspectRatio;
        static TwoToThree: AspectRatio;
        static NineToSixteen: AspectRatio;
        protected qualifiedTsTypeName: string;
    }
    class ChartType extends internal.AbstractEnum {
        static VerticalBars: ChartType;
        static VerticalBars3D: ChartType;
        static HorizontalBars: ChartType;
        static Lines: ChartType;
        static Area: ChartType;
        protected qualifiedTsTypeName: string;
    }
    class ColumnFormat extends internal.AbstractEnum {
        static Default: ColumnFormat;
        static MonthName: ColumnFormat;
        static WeekdayName: ColumnFormat;
        protected qualifiedTsTypeName: string;
    }
    class DateRangeFieldEnum extends internal.AbstractEnum {
        static Year: DateRangeFieldEnum;
        static Month: DateRangeFieldEnum;
        static Week: DateRangeFieldEnum;
        static Period: DateRangeFieldEnum;
        static Quarter: DateRangeFieldEnum;
        protected qualifiedTsTypeName: string;
    }
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `Reports`.
     */
    /**
     * See: {@link https://docs.mendix.com/refguide/report-widgets relevant section in reference guide}
     */
    abstract class ReportWidget extends pages.Widget {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsWidgetValue(): customwidgets.WidgetValue;
        get containerAsNativeLayout(): nativepages.NativeLayout;
        get containerAsNativeLayoutCallArgument(): nativepages.NativeLayoutCallArgument;
        get containerAsBuildingBlock(): pages.BuildingBlock;
        get containerAsDataView(): pages.DataView;
        get containerAsDivContainer(): pages.DivContainer;
        get containerAsGroupBox(): pages.GroupBox;
        get containerAsHeader(): pages.Header;
        get containerAsLayout(): pages.Layout;
        get containerAsLayoutCallArgument(): pages.LayoutCallArgument;
        get containerAsLayoutGridColumn(): pages.LayoutGridColumn;
        get containerAsListView(): pages.ListView;
        get containerAsListViewTemplate(): pages.ListViewTemplate;
        get containerAsMasterDetailRegion(): pages.MasterDetailRegion;
        get containerAsNativeLayoutContent(): pages.NativeLayoutContent;
        get containerAsNavigationListItem(): pages.NavigationListItem;
        get containerAsScrollContainerRegion(): pages.ScrollContainerRegion;
        get containerAsSnippet(): pages.Snippet;
        get containerAsSplitPane(): pages.SplitPane;
        get containerAsTabPage(): pages.TabPage;
        get containerAsTableCell(): pages.TableCell;
        get containerAsTemplateGridContents(): pages.TemplateGridContents;
        get containerAsVerticalFlow(): pages.VerticalFlow;
        get containerAsWebLayoutContent(): pages.WebLayoutContent;
        get containerAsReportPane(): ReportPane;
        get dataSet(): datasets.IDataSet | null;
        set dataSet(newValue: datasets.IDataSet | null);
        get dataSetQualifiedName(): string | null;
        /**
         * In version 6.10.0: introduced
         */
        get generateOnLoad(): boolean;
        set generateOnLoad(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/report-grid relevant section in reference guide}
     */
    class BasicReport extends ReportWidget {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsWidgetValue(): customwidgets.WidgetValue;
        get containerAsNativeLayout(): nativepages.NativeLayout;
        get containerAsNativeLayoutCallArgument(): nativepages.NativeLayoutCallArgument;
        get containerAsBuildingBlock(): pages.BuildingBlock;
        get containerAsDataView(): pages.DataView;
        get containerAsDivContainer(): pages.DivContainer;
        get containerAsGroupBox(): pages.GroupBox;
        get containerAsHeader(): pages.Header;
        get containerAsLayout(): pages.Layout;
        get containerAsLayoutCallArgument(): pages.LayoutCallArgument;
        get containerAsLayoutGridColumn(): pages.LayoutGridColumn;
        get containerAsListView(): pages.ListView;
        get containerAsListViewTemplate(): pages.ListViewTemplate;
        get containerAsMasterDetailRegion(): pages.MasterDetailRegion;
        get containerAsNativeLayoutContent(): pages.NativeLayoutContent;
        get containerAsNavigationListItem(): pages.NavigationListItem;
        get containerAsScrollContainerRegion(): pages.ScrollContainerRegion;
        get containerAsSnippet(): pages.Snippet;
        get containerAsSplitPane(): pages.SplitPane;
        get containerAsTabPage(): pages.TabPage;
        get containerAsTableCell(): pages.TableCell;
        get containerAsTemplateGridContents(): pages.TemplateGridContents;
        get containerAsVerticalFlow(): pages.VerticalFlow;
        get containerAsWebLayoutContent(): pages.WebLayoutContent;
        get containerAsReportPane(): ReportPane;
        get columns(): internal.IList<BasicReportColumn>;
        get aggregates(): internal.IList<BasicReportAggregate>;
        get showExportButton(): boolean;
        set showExportButton(newValue: boolean);
        get zoomInfo(): ReportZoomInfo;
        set zoomInfo(newValue: ReportZoomInfo);
        get isPagingEnabled(): boolean;
        set isPagingEnabled(newValue: boolean);
        get pageSize(): number;
        set pageSize(newValue: number);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widgets' property
         * of the parent customwidgets.WidgetValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.2.0 and higher
         */
        static createInWidgetValueUnderWidgets(container: customwidgets.WidgetValue): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'headerWidget' property
         * of the parent nativepages.NativeLayout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.22.0 to 7.23.0
         */
        static createInNativeLayoutUnderHeaderWidget(container: nativepages.NativeLayout): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widgets' property
         * of the parent nativepages.NativeLayout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 to 7.23.0
         */
        static createInNativeLayoutUnderWidgets(container: nativepages.NativeLayout): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widgets' property
         * of the parent nativepages.NativeLayoutCallArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInNativeLayoutCallArgumentUnderWidgets(container: nativepages.NativeLayoutCallArgument): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widget' property
         * of the parent pages.BuildingBlock element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.7.0 to 7.14.0
         */
        static createInBuildingBlockUnderWidget(container: pages.BuildingBlock): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widgets' property
         * of the parent pages.BuildingBlock element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInBuildingBlockUnderWidgets(container: pages.BuildingBlock): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'footerWidget' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.7.0 to 7.14.0
         */
        static createInDataViewUnderFooterWidget(container: pages.DataView): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'footerWidgets' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInDataViewUnderFooterWidgets(container: pages.DataView): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widget' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInDataViewUnderWidget(container: pages.DataView): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widgets' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInDataViewUnderWidgets(container: pages.DataView): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widget' property
         * of the parent pages.DivContainer element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInDivContainerUnderWidget(container: pages.DivContainer): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widgets' property
         * of the parent pages.DivContainer element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInDivContainerUnderWidgets(container: pages.DivContainer): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widget' property
         * of the parent pages.GroupBox element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInGroupBoxUnderWidget(container: pages.GroupBox): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widgets' property
         * of the parent pages.GroupBox element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInGroupBoxUnderWidgets(container: pages.GroupBox): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'leftWidget' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInHeaderUnderLeftWidget(container: pages.Header): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'leftWidgets' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInHeaderUnderLeftWidgets(container: pages.Header): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'rightWidget' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInHeaderUnderRightWidget(container: pages.Header): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'rightWidgets' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInHeaderUnderRightWidgets(container: pages.Header): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widget' property
         * of the parent pages.Layout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInLayoutUnderWidget(container: pages.Layout): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widgets' property
         * of the parent pages.Layout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 7.23.0
         */
        static createInLayoutUnderWidgets(container: pages.Layout): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widget' property
         * of the parent pages.LayoutCallArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInLayoutCallArgumentUnderWidget(container: pages.LayoutCallArgument): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widgets' property
         * of the parent pages.LayoutCallArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInLayoutCallArgumentUnderWidgets(container: pages.LayoutCallArgument): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widget' property
         * of the parent pages.LayoutGridColumn element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInLayoutGridColumnUnderWidget(container: pages.LayoutGridColumn): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widgets' property
         * of the parent pages.LayoutGridColumn element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInLayoutGridColumnUnderWidgets(container: pages.LayoutGridColumn): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widget' property
         * of the parent pages.ListView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInListViewUnderWidget(container: pages.ListView): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widgets' property
         * of the parent pages.ListView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInListViewUnderWidgets(container: pages.ListView): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widget' property
         * of the parent pages.ListViewTemplate element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInListViewTemplateUnderWidget(container: pages.ListViewTemplate): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widgets' property
         * of the parent pages.ListViewTemplate element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInListViewTemplateUnderWidgets(container: pages.ListViewTemplate): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widget' property
         * of the parent pages.MasterDetailRegion element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.1.0 to 7.14.0
         */
        static createInMasterDetailRegionUnderWidget(container: pages.MasterDetailRegion): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'sidebarWidgets' property
         * of the parent pages.NativeLayoutContent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.5.0 and higher
         */
        static createInNativeLayoutContentUnderSidebarWidgets(container: pages.NativeLayoutContent): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widgets' property
         * of the parent pages.NativeLayoutContent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 and higher
         */
        static createInNativeLayoutContentUnderWidgets(container: pages.NativeLayoutContent): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widget' property
         * of the parent pages.NavigationListItem element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInNavigationListItemUnderWidget(container: pages.NavigationListItem): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widgets' property
         * of the parent pages.NavigationListItem element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInNavigationListItemUnderWidgets(container: pages.NavigationListItem): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widget' property
         * of the parent pages.ScrollContainerRegion element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInScrollContainerRegionUnderWidget(container: pages.ScrollContainerRegion): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widgets' property
         * of the parent pages.ScrollContainerRegion element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInScrollContainerRegionUnderWidgets(container: pages.ScrollContainerRegion): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widget' property
         * of the parent pages.Snippet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInSnippetUnderWidget(container: pages.Snippet): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widgets' property
         * of the parent pages.Snippet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInSnippetUnderWidgets(container: pages.Snippet): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'firstWidget' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInSplitPaneUnderFirstWidget(container: pages.SplitPane): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'firstWidgets' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 7.23.0
         */
        static createInSplitPaneUnderFirstWidgets(container: pages.SplitPane): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'secondWidget' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInSplitPaneUnderSecondWidget(container: pages.SplitPane): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'secondWidgets' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 7.23.0
         */
        static createInSplitPaneUnderSecondWidgets(container: pages.SplitPane): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widget' property
         * of the parent pages.TabPage element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInTabPageUnderWidget(container: pages.TabPage): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widgets' property
         * of the parent pages.TabPage element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInTabPageUnderWidgets(container: pages.TabPage): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widget' property
         * of the parent pages.TableCell element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInTableCellUnderWidget(container: pages.TableCell): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widgets' property
         * of the parent pages.TableCell element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInTableCellUnderWidgets(container: pages.TableCell): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widget' property
         * of the parent pages.TemplateGridContents element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInTemplateGridContentsUnderWidget(container: pages.TemplateGridContents): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widgets' property
         * of the parent pages.TemplateGridContents element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInTemplateGridContentsUnderWidgets(container: pages.TemplateGridContents): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widgets' property
         * of the parent pages.VerticalFlow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInVerticalFlowUnderWidgets(container: pages.VerticalFlow): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widgets' property
         * of the parent pages.WebLayoutContent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 and higher
         */
        static createInWebLayoutContentUnderWidgets(container: pages.WebLayoutContent): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'parameterWidget' property
         * of the parent ReportPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInReportPaneUnderParameterWidget(container: ReportPane): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'reportWidget' property
         * of the parent ReportPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInReportPaneUnderReportWidget(container: ReportPane): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): BasicReport;
    }
    class BasicReportAggregate extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsBasicReport(): BasicReport;
        get caption(): texts.Text;
        set caption(newValue: texts.Text);
        get aggregateFunction(): AggregateFunctionEnum;
        set aggregateFunction(newValue: AggregateFunctionEnum);
        get applicablePerColumn(): internal.IList<boolean>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new BasicReportAggregate instance in the SDK and on the server.
         * The new BasicReportAggregate will be automatically stored in the 'aggregates' property
         * of the parent BasicReport element passed as argument.
         */
        static createIn(container: BasicReport): BasicReportAggregate;
        /**
         * Creates and returns a new BasicReportAggregate instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): BasicReportAggregate;
    }
    class BasicReportColumn extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsBasicReport(): BasicReport;
        get caption(): texts.Text;
        set caption(newValue: texts.Text);
        get dataSetColumnName(): string;
        set dataSetColumnName(newValue: string);
        get width(): number;
        set width(newValue: number);
        get alignment(): pages.AlignmentEnum;
        set alignment(newValue: pages.AlignmentEnum);
        get format(): ColumnFormat;
        set format(newValue: ColumnFormat);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new BasicReportColumn instance in the SDK and on the server.
         * The new BasicReportColumn will be automatically stored in the 'columns' property
         * of the parent BasicReport element passed as argument.
         */
        static createIn(container: BasicReport): BasicReportColumn;
        /**
         * Creates and returns a new BasicReportColumn instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): BasicReportColumn;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/report-button relevant section in reference guide}
     */
    class ReportButton extends pages.Widget {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsWidgetValue(): customwidgets.WidgetValue;
        get containerAsNativeLayout(): nativepages.NativeLayout;
        get containerAsNativeLayoutCallArgument(): nativepages.NativeLayoutCallArgument;
        get containerAsBuildingBlock(): pages.BuildingBlock;
        get containerAsDataView(): pages.DataView;
        get containerAsDivContainer(): pages.DivContainer;
        get containerAsGroupBox(): pages.GroupBox;
        get containerAsHeader(): pages.Header;
        get containerAsLayout(): pages.Layout;
        get containerAsLayoutCallArgument(): pages.LayoutCallArgument;
        get containerAsLayoutGridColumn(): pages.LayoutGridColumn;
        get containerAsListView(): pages.ListView;
        get containerAsListViewTemplate(): pages.ListViewTemplate;
        get containerAsMasterDetailRegion(): pages.MasterDetailRegion;
        get containerAsNativeLayoutContent(): pages.NativeLayoutContent;
        get containerAsNavigationListItem(): pages.NavigationListItem;
        get containerAsScrollContainerRegion(): pages.ScrollContainerRegion;
        get containerAsSnippet(): pages.Snippet;
        get containerAsSplitPane(): pages.SplitPane;
        get containerAsTabPage(): pages.TabPage;
        get containerAsTableCell(): pages.TableCell;
        get containerAsTemplateGridContents(): pages.TemplateGridContents;
        get containerAsVerticalFlow(): pages.VerticalFlow;
        get containerAsWebLayoutContent(): pages.WebLayoutContent;
        get containerAsReportPane(): ReportPane;
        get caption(): texts.Text;
        set caption(newValue: texts.Text);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widgets' property
         * of the parent customwidgets.WidgetValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.2.0 and higher
         */
        static createInWidgetValueUnderWidgets(container: customwidgets.WidgetValue): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'headerWidget' property
         * of the parent nativepages.NativeLayout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.22.0 to 7.23.0
         */
        static createInNativeLayoutUnderHeaderWidget(container: nativepages.NativeLayout): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widgets' property
         * of the parent nativepages.NativeLayout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 to 7.23.0
         */
        static createInNativeLayoutUnderWidgets(container: nativepages.NativeLayout): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widgets' property
         * of the parent nativepages.NativeLayoutCallArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInNativeLayoutCallArgumentUnderWidgets(container: nativepages.NativeLayoutCallArgument): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widget' property
         * of the parent pages.BuildingBlock element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.7.0 to 7.14.0
         */
        static createInBuildingBlockUnderWidget(container: pages.BuildingBlock): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widgets' property
         * of the parent pages.BuildingBlock element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInBuildingBlockUnderWidgets(container: pages.BuildingBlock): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'footerWidget' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.7.0 to 7.14.0
         */
        static createInDataViewUnderFooterWidget(container: pages.DataView): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'footerWidgets' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInDataViewUnderFooterWidgets(container: pages.DataView): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widget' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInDataViewUnderWidget(container: pages.DataView): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widgets' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInDataViewUnderWidgets(container: pages.DataView): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widget' property
         * of the parent pages.DivContainer element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInDivContainerUnderWidget(container: pages.DivContainer): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widgets' property
         * of the parent pages.DivContainer element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInDivContainerUnderWidgets(container: pages.DivContainer): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widget' property
         * of the parent pages.GroupBox element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInGroupBoxUnderWidget(container: pages.GroupBox): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widgets' property
         * of the parent pages.GroupBox element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInGroupBoxUnderWidgets(container: pages.GroupBox): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'leftWidget' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInHeaderUnderLeftWidget(container: pages.Header): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'leftWidgets' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInHeaderUnderLeftWidgets(container: pages.Header): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'rightWidget' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInHeaderUnderRightWidget(container: pages.Header): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'rightWidgets' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInHeaderUnderRightWidgets(container: pages.Header): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widget' property
         * of the parent pages.Layout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInLayoutUnderWidget(container: pages.Layout): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widgets' property
         * of the parent pages.Layout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 7.23.0
         */
        static createInLayoutUnderWidgets(container: pages.Layout): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widget' property
         * of the parent pages.LayoutCallArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInLayoutCallArgumentUnderWidget(container: pages.LayoutCallArgument): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widgets' property
         * of the parent pages.LayoutCallArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInLayoutCallArgumentUnderWidgets(container: pages.LayoutCallArgument): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widget' property
         * of the parent pages.LayoutGridColumn element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInLayoutGridColumnUnderWidget(container: pages.LayoutGridColumn): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widgets' property
         * of the parent pages.LayoutGridColumn element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInLayoutGridColumnUnderWidgets(container: pages.LayoutGridColumn): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widget' property
         * of the parent pages.ListView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInListViewUnderWidget(container: pages.ListView): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widgets' property
         * of the parent pages.ListView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInListViewUnderWidgets(container: pages.ListView): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widget' property
         * of the parent pages.ListViewTemplate element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInListViewTemplateUnderWidget(container: pages.ListViewTemplate): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widgets' property
         * of the parent pages.ListViewTemplate element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInListViewTemplateUnderWidgets(container: pages.ListViewTemplate): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widget' property
         * of the parent pages.MasterDetailRegion element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.1.0 to 7.14.0
         */
        static createInMasterDetailRegionUnderWidget(container: pages.MasterDetailRegion): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'sidebarWidgets' property
         * of the parent pages.NativeLayoutContent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.5.0 and higher
         */
        static createInNativeLayoutContentUnderSidebarWidgets(container: pages.NativeLayoutContent): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widgets' property
         * of the parent pages.NativeLayoutContent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 and higher
         */
        static createInNativeLayoutContentUnderWidgets(container: pages.NativeLayoutContent): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widget' property
         * of the parent pages.NavigationListItem element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInNavigationListItemUnderWidget(container: pages.NavigationListItem): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widgets' property
         * of the parent pages.NavigationListItem element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInNavigationListItemUnderWidgets(container: pages.NavigationListItem): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widget' property
         * of the parent pages.ScrollContainerRegion element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInScrollContainerRegionUnderWidget(container: pages.ScrollContainerRegion): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widgets' property
         * of the parent pages.ScrollContainerRegion element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInScrollContainerRegionUnderWidgets(container: pages.ScrollContainerRegion): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widget' property
         * of the parent pages.Snippet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInSnippetUnderWidget(container: pages.Snippet): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widgets' property
         * of the parent pages.Snippet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInSnippetUnderWidgets(container: pages.Snippet): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'firstWidget' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInSplitPaneUnderFirstWidget(container: pages.SplitPane): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'firstWidgets' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 7.23.0
         */
        static createInSplitPaneUnderFirstWidgets(container: pages.SplitPane): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'secondWidget' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInSplitPaneUnderSecondWidget(container: pages.SplitPane): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'secondWidgets' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 7.23.0
         */
        static createInSplitPaneUnderSecondWidgets(container: pages.SplitPane): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widget' property
         * of the parent pages.TabPage element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInTabPageUnderWidget(container: pages.TabPage): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widgets' property
         * of the parent pages.TabPage element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInTabPageUnderWidgets(container: pages.TabPage): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widget' property
         * of the parent pages.TableCell element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInTableCellUnderWidget(container: pages.TableCell): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widgets' property
         * of the parent pages.TableCell element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInTableCellUnderWidgets(container: pages.TableCell): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widget' property
         * of the parent pages.TemplateGridContents element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInTemplateGridContentsUnderWidget(container: pages.TemplateGridContents): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widgets' property
         * of the parent pages.TemplateGridContents element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInTemplateGridContentsUnderWidgets(container: pages.TemplateGridContents): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widgets' property
         * of the parent pages.VerticalFlow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInVerticalFlowUnderWidgets(container: pages.VerticalFlow): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widgets' property
         * of the parent pages.WebLayoutContent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 and higher
         */
        static createInWebLayoutContentUnderWidgets(container: pages.WebLayoutContent): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'parameterWidget' property
         * of the parent ReportPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInReportPaneUnderParameterWidget(container: ReportPane): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'reportWidget' property
         * of the parent ReportPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInReportPaneUnderReportWidget(container: ReportPane): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ReportButton;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/report-chart relevant document}
     *
     * In version 9.0.1: deleted
     */
    class ReportChart extends ReportWidget {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsWidgetValue(): customwidgets.WidgetValue;
        get containerAsNativeLayout(): nativepages.NativeLayout;
        get containerAsNativeLayoutCallArgument(): nativepages.NativeLayoutCallArgument;
        get containerAsBuildingBlock(): pages.BuildingBlock;
        get containerAsDataView(): pages.DataView;
        get containerAsDivContainer(): pages.DivContainer;
        get containerAsGroupBox(): pages.GroupBox;
        get containerAsHeader(): pages.Header;
        get containerAsLayout(): pages.Layout;
        get containerAsLayoutCallArgument(): pages.LayoutCallArgument;
        get containerAsLayoutGridColumn(): pages.LayoutGridColumn;
        get containerAsListView(): pages.ListView;
        get containerAsListViewTemplate(): pages.ListViewTemplate;
        get containerAsMasterDetailRegion(): pages.MasterDetailRegion;
        get containerAsNativeLayoutContent(): pages.NativeLayoutContent;
        get containerAsNavigationListItem(): pages.NavigationListItem;
        get containerAsScrollContainerRegion(): pages.ScrollContainerRegion;
        get containerAsSnippet(): pages.Snippet;
        get containerAsSplitPane(): pages.SplitPane;
        get containerAsTabPage(): pages.TabPage;
        get containerAsTableCell(): pages.TableCell;
        get containerAsTemplateGridContents(): pages.TemplateGridContents;
        get containerAsVerticalFlow(): pages.VerticalFlow;
        get containerAsWebLayoutContent(): pages.WebLayoutContent;
        get containerAsReportPane(): ReportPane;
        get type(): ChartType;
        set type(newValue: ChartType);
        get seriess(): internal.IList<ReportChartSeries>;
        get xAxisCaption(): texts.Text;
        set xAxisCaption(newValue: texts.Text);
        get yAxisCaption(): texts.Text;
        set yAxisCaption(newValue: texts.Text);
        get xAxisColumn(): string;
        set xAxisColumn(newValue: string);
        get xAxisFormat(): ColumnFormat;
        set xAxisFormat(newValue: ColumnFormat);
        get yAxisPrecision(): number;
        set yAxisPrecision(newValue: number);
        get yAxisUseMinMax(): boolean;
        set yAxisUseMinMax(newValue: boolean);
        get yAxisMinimum(): number;
        set yAxisMinimum(newValue: number);
        get yAxisMaximum(): number;
        set yAxisMaximum(newValue: number);
        get aspectRatio(): AspectRatio;
        set aspectRatio(newValue: AspectRatio);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widgets' property
         * of the parent customwidgets.WidgetValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.2.0 to 9.0.0
         */
        static createInWidgetValueUnderWidgets(container: customwidgets.WidgetValue): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'headerWidget' property
         * of the parent nativepages.NativeLayout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.22.0 to 7.23.0
         */
        static createInNativeLayoutUnderHeaderWidget(container: nativepages.NativeLayout): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widgets' property
         * of the parent nativepages.NativeLayout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 to 7.23.0
         */
        static createInNativeLayoutUnderWidgets(container: nativepages.NativeLayout): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widgets' property
         * of the parent nativepages.NativeLayoutCallArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInNativeLayoutCallArgumentUnderWidgets(container: nativepages.NativeLayoutCallArgument): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widget' property
         * of the parent pages.BuildingBlock element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.7.0 to 7.14.0
         */
        static createInBuildingBlockUnderWidget(container: pages.BuildingBlock): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widgets' property
         * of the parent pages.BuildingBlock element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.0.0
         */
        static createInBuildingBlockUnderWidgets(container: pages.BuildingBlock): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'footerWidget' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.7.0 to 7.14.0
         */
        static createInDataViewUnderFooterWidget(container: pages.DataView): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'footerWidgets' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.0.0
         */
        static createInDataViewUnderFooterWidgets(container: pages.DataView): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widget' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInDataViewUnderWidget(container: pages.DataView): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widgets' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.0.0
         */
        static createInDataViewUnderWidgets(container: pages.DataView): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widget' property
         * of the parent pages.DivContainer element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInDivContainerUnderWidget(container: pages.DivContainer): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widgets' property
         * of the parent pages.DivContainer element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.0.0
         */
        static createInDivContainerUnderWidgets(container: pages.DivContainer): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widget' property
         * of the parent pages.GroupBox element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInGroupBoxUnderWidget(container: pages.GroupBox): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widgets' property
         * of the parent pages.GroupBox element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.0.0
         */
        static createInGroupBoxUnderWidgets(container: pages.GroupBox): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'leftWidget' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInHeaderUnderLeftWidget(container: pages.Header): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'leftWidgets' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.0.0
         */
        static createInHeaderUnderLeftWidgets(container: pages.Header): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'rightWidget' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInHeaderUnderRightWidget(container: pages.Header): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'rightWidgets' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.0.0
         */
        static createInHeaderUnderRightWidgets(container: pages.Header): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widget' property
         * of the parent pages.Layout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInLayoutUnderWidget(container: pages.Layout): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widgets' property
         * of the parent pages.Layout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 7.23.0
         */
        static createInLayoutUnderWidgets(container: pages.Layout): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widget' property
         * of the parent pages.LayoutCallArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInLayoutCallArgumentUnderWidget(container: pages.LayoutCallArgument): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widgets' property
         * of the parent pages.LayoutCallArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.0.0
         */
        static createInLayoutCallArgumentUnderWidgets(container: pages.LayoutCallArgument): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widget' property
         * of the parent pages.LayoutGridColumn element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInLayoutGridColumnUnderWidget(container: pages.LayoutGridColumn): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widgets' property
         * of the parent pages.LayoutGridColumn element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.0.0
         */
        static createInLayoutGridColumnUnderWidgets(container: pages.LayoutGridColumn): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widget' property
         * of the parent pages.ListView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInListViewUnderWidget(container: pages.ListView): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widgets' property
         * of the parent pages.ListView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.0.0
         */
        static createInListViewUnderWidgets(container: pages.ListView): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widget' property
         * of the parent pages.ListViewTemplate element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInListViewTemplateUnderWidget(container: pages.ListViewTemplate): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widgets' property
         * of the parent pages.ListViewTemplate element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.0.0
         */
        static createInListViewTemplateUnderWidgets(container: pages.ListViewTemplate): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widget' property
         * of the parent pages.MasterDetailRegion element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.1.0 to 7.14.0
         */
        static createInMasterDetailRegionUnderWidget(container: pages.MasterDetailRegion): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'sidebarWidgets' property
         * of the parent pages.NativeLayoutContent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.5.0 to 9.0.0
         */
        static createInNativeLayoutContentUnderSidebarWidgets(container: pages.NativeLayoutContent): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widgets' property
         * of the parent pages.NativeLayoutContent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 to 9.0.0
         */
        static createInNativeLayoutContentUnderWidgets(container: pages.NativeLayoutContent): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widget' property
         * of the parent pages.NavigationListItem element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInNavigationListItemUnderWidget(container: pages.NavigationListItem): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widgets' property
         * of the parent pages.NavigationListItem element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.0.0
         */
        static createInNavigationListItemUnderWidgets(container: pages.NavigationListItem): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widget' property
         * of the parent pages.ScrollContainerRegion element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInScrollContainerRegionUnderWidget(container: pages.ScrollContainerRegion): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widgets' property
         * of the parent pages.ScrollContainerRegion element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.0.0
         */
        static createInScrollContainerRegionUnderWidgets(container: pages.ScrollContainerRegion): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widget' property
         * of the parent pages.Snippet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInSnippetUnderWidget(container: pages.Snippet): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widgets' property
         * of the parent pages.Snippet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.0.0
         */
        static createInSnippetUnderWidgets(container: pages.Snippet): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'firstWidget' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInSplitPaneUnderFirstWidget(container: pages.SplitPane): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'firstWidgets' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 7.23.0
         */
        static createInSplitPaneUnderFirstWidgets(container: pages.SplitPane): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'secondWidget' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInSplitPaneUnderSecondWidget(container: pages.SplitPane): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'secondWidgets' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 7.23.0
         */
        static createInSplitPaneUnderSecondWidgets(container: pages.SplitPane): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widget' property
         * of the parent pages.TabPage element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInTabPageUnderWidget(container: pages.TabPage): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widgets' property
         * of the parent pages.TabPage element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.0.0
         */
        static createInTabPageUnderWidgets(container: pages.TabPage): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widget' property
         * of the parent pages.TableCell element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInTableCellUnderWidget(container: pages.TableCell): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widgets' property
         * of the parent pages.TableCell element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.0.0
         */
        static createInTableCellUnderWidgets(container: pages.TableCell): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widget' property
         * of the parent pages.TemplateGridContents element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInTemplateGridContentsUnderWidget(container: pages.TemplateGridContents): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widgets' property
         * of the parent pages.TemplateGridContents element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 9.0.0
         */
        static createInTemplateGridContentsUnderWidgets(container: pages.TemplateGridContents): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widgets' property
         * of the parent pages.VerticalFlow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInVerticalFlowUnderWidgets(container: pages.VerticalFlow): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widgets' property
         * of the parent pages.WebLayoutContent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 to 9.0.0
         */
        static createInWebLayoutContentUnderWidgets(container: pages.WebLayoutContent): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'parameterWidget' property
         * of the parent ReportPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInReportPaneUnderParameterWidget(container: ReportPane): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'reportWidget' property
         * of the parent ReportPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInReportPaneUnderReportWidget(container: ReportPane): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ReportChart;
    }
    /**
     * In version 9.0.1: deleted
     */
    class ReportChartSeries extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsReportChart(): ReportChart;
        get caption(): texts.Text;
        set caption(newValue: texts.Text);
        get dataSetColumn(): string;
        set dataSetColumn(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ReportChartSeries instance in the SDK and on the server.
         * The new ReportChartSeries will be automatically stored in the 'seriess' property
         * of the parent ReportChart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 9.0.0
         */
        static createIn(container: ReportChart): ReportChartSeries;
        /**
         * Creates and returns a new ReportChartSeries instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ReportChartSeries;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/date-range-field relevant section in reference guide}
     */
    class ReportDateRangeField extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsReportDateRangeSelector(): ReportDateRangeSelector;
        get caption(): texts.Text;
        set caption(newValue: texts.Text);
        get type(): DateRangeFieldEnum;
        set type(newValue: DateRangeFieldEnum);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ReportDateRangeField instance in the SDK and on the server.
         * The new ReportDateRangeField will be automatically stored in the 'fields' property
         * of the parent ReportDateRangeSelector element passed as argument.
         */
        static createIn(container: ReportDateRangeSelector): ReportDateRangeField;
        /**
         * Creates and returns a new ReportDateRangeField instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ReportDateRangeField;
    }
    abstract class ReportParameter extends pages.Widget {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsWidgetValue(): customwidgets.WidgetValue;
        get containerAsNativeLayout(): nativepages.NativeLayout;
        get containerAsNativeLayoutCallArgument(): nativepages.NativeLayoutCallArgument;
        get containerAsBuildingBlock(): pages.BuildingBlock;
        get containerAsDataView(): pages.DataView;
        get containerAsDivContainer(): pages.DivContainer;
        get containerAsGroupBox(): pages.GroupBox;
        get containerAsHeader(): pages.Header;
        get containerAsLayout(): pages.Layout;
        get containerAsLayoutCallArgument(): pages.LayoutCallArgument;
        get containerAsLayoutGridColumn(): pages.LayoutGridColumn;
        get containerAsListView(): pages.ListView;
        get containerAsListViewTemplate(): pages.ListViewTemplate;
        get containerAsMasterDetailRegion(): pages.MasterDetailRegion;
        get containerAsNativeLayoutContent(): pages.NativeLayoutContent;
        get containerAsNavigationListItem(): pages.NavigationListItem;
        get containerAsScrollContainerRegion(): pages.ScrollContainerRegion;
        get containerAsSnippet(): pages.Snippet;
        get containerAsSplitPane(): pages.SplitPane;
        get containerAsTabPage(): pages.TabPage;
        get containerAsTableCell(): pages.TableCell;
        get containerAsTemplateGridContents(): pages.TemplateGridContents;
        get containerAsVerticalFlow(): pages.VerticalFlow;
        get containerAsWebLayoutContent(): pages.WebLayoutContent;
        get containerAsReportPane(): ReportPane;
        /**
         * In version 6.10.0: introduced
         */
        get parameter(): datasets.IDataSetParameter | null;
        set parameter(newValue: datasets.IDataSetParameter | null);
        get parameterQualifiedName(): string | null;
        /**
         * In version 6.10.0: deleted
         */
        get parameterName(): string;
        set parameterName(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/report-date-parameter relevant section in reference guide}
     */
    class ReportDateRangeSelector extends ReportParameter {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsWidgetValue(): customwidgets.WidgetValue;
        get containerAsNativeLayout(): nativepages.NativeLayout;
        get containerAsNativeLayoutCallArgument(): nativepages.NativeLayoutCallArgument;
        get containerAsBuildingBlock(): pages.BuildingBlock;
        get containerAsDataView(): pages.DataView;
        get containerAsDivContainer(): pages.DivContainer;
        get containerAsGroupBox(): pages.GroupBox;
        get containerAsHeader(): pages.Header;
        get containerAsLayout(): pages.Layout;
        get containerAsLayoutCallArgument(): pages.LayoutCallArgument;
        get containerAsLayoutGridColumn(): pages.LayoutGridColumn;
        get containerAsListView(): pages.ListView;
        get containerAsListViewTemplate(): pages.ListViewTemplate;
        get containerAsMasterDetailRegion(): pages.MasterDetailRegion;
        get containerAsNativeLayoutContent(): pages.NativeLayoutContent;
        get containerAsNavigationListItem(): pages.NavigationListItem;
        get containerAsScrollContainerRegion(): pages.ScrollContainerRegion;
        get containerAsSnippet(): pages.Snippet;
        get containerAsSplitPane(): pages.SplitPane;
        get containerAsTabPage(): pages.TabPage;
        get containerAsTableCell(): pages.TableCell;
        get containerAsTemplateGridContents(): pages.TemplateGridContents;
        get containerAsVerticalFlow(): pages.VerticalFlow;
        get containerAsWebLayoutContent(): pages.WebLayoutContent;
        get containerAsReportPane(): ReportPane;
        get fields(): internal.IList<ReportDateRangeField>;
        get minYear(): number;
        set minYear(newValue: number);
        get maxYear(): number;
        set maxYear(newValue: number);
        get fieldsPerRow(): number;
        set fieldsPerRow(newValue: number);
        get showFromToRange(): boolean;
        set showFromToRange(newValue: boolean);
        get fromCaption(): texts.Text;
        set fromCaption(newValue: texts.Text);
        get toCaption(): texts.Text;
        set toCaption(newValue: texts.Text);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widgets' property
         * of the parent customwidgets.WidgetValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.2.0 and higher
         */
        static createInWidgetValueUnderWidgets(container: customwidgets.WidgetValue): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'headerWidget' property
         * of the parent nativepages.NativeLayout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.22.0 to 7.23.0
         */
        static createInNativeLayoutUnderHeaderWidget(container: nativepages.NativeLayout): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widgets' property
         * of the parent nativepages.NativeLayout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 to 7.23.0
         */
        static createInNativeLayoutUnderWidgets(container: nativepages.NativeLayout): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widgets' property
         * of the parent nativepages.NativeLayoutCallArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInNativeLayoutCallArgumentUnderWidgets(container: nativepages.NativeLayoutCallArgument): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widget' property
         * of the parent pages.BuildingBlock element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.7.0 to 7.14.0
         */
        static createInBuildingBlockUnderWidget(container: pages.BuildingBlock): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widgets' property
         * of the parent pages.BuildingBlock element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInBuildingBlockUnderWidgets(container: pages.BuildingBlock): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'footerWidget' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.7.0 to 7.14.0
         */
        static createInDataViewUnderFooterWidget(container: pages.DataView): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'footerWidgets' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInDataViewUnderFooterWidgets(container: pages.DataView): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widget' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInDataViewUnderWidget(container: pages.DataView): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widgets' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInDataViewUnderWidgets(container: pages.DataView): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widget' property
         * of the parent pages.DivContainer element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInDivContainerUnderWidget(container: pages.DivContainer): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widgets' property
         * of the parent pages.DivContainer element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInDivContainerUnderWidgets(container: pages.DivContainer): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widget' property
         * of the parent pages.GroupBox element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInGroupBoxUnderWidget(container: pages.GroupBox): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widgets' property
         * of the parent pages.GroupBox element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInGroupBoxUnderWidgets(container: pages.GroupBox): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'leftWidget' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInHeaderUnderLeftWidget(container: pages.Header): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'leftWidgets' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInHeaderUnderLeftWidgets(container: pages.Header): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'rightWidget' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInHeaderUnderRightWidget(container: pages.Header): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'rightWidgets' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInHeaderUnderRightWidgets(container: pages.Header): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widget' property
         * of the parent pages.Layout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInLayoutUnderWidget(container: pages.Layout): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widgets' property
         * of the parent pages.Layout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 7.23.0
         */
        static createInLayoutUnderWidgets(container: pages.Layout): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widget' property
         * of the parent pages.LayoutCallArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInLayoutCallArgumentUnderWidget(container: pages.LayoutCallArgument): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widgets' property
         * of the parent pages.LayoutCallArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInLayoutCallArgumentUnderWidgets(container: pages.LayoutCallArgument): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widget' property
         * of the parent pages.LayoutGridColumn element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInLayoutGridColumnUnderWidget(container: pages.LayoutGridColumn): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widgets' property
         * of the parent pages.LayoutGridColumn element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInLayoutGridColumnUnderWidgets(container: pages.LayoutGridColumn): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widget' property
         * of the parent pages.ListView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInListViewUnderWidget(container: pages.ListView): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widgets' property
         * of the parent pages.ListView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInListViewUnderWidgets(container: pages.ListView): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widget' property
         * of the parent pages.ListViewTemplate element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInListViewTemplateUnderWidget(container: pages.ListViewTemplate): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widgets' property
         * of the parent pages.ListViewTemplate element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInListViewTemplateUnderWidgets(container: pages.ListViewTemplate): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widget' property
         * of the parent pages.MasterDetailRegion element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.1.0 to 7.14.0
         */
        static createInMasterDetailRegionUnderWidget(container: pages.MasterDetailRegion): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'sidebarWidgets' property
         * of the parent pages.NativeLayoutContent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.5.0 and higher
         */
        static createInNativeLayoutContentUnderSidebarWidgets(container: pages.NativeLayoutContent): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widgets' property
         * of the parent pages.NativeLayoutContent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 and higher
         */
        static createInNativeLayoutContentUnderWidgets(container: pages.NativeLayoutContent): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widget' property
         * of the parent pages.NavigationListItem element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInNavigationListItemUnderWidget(container: pages.NavigationListItem): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widgets' property
         * of the parent pages.NavigationListItem element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInNavigationListItemUnderWidgets(container: pages.NavigationListItem): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widget' property
         * of the parent pages.ScrollContainerRegion element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInScrollContainerRegionUnderWidget(container: pages.ScrollContainerRegion): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widgets' property
         * of the parent pages.ScrollContainerRegion element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInScrollContainerRegionUnderWidgets(container: pages.ScrollContainerRegion): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widget' property
         * of the parent pages.Snippet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInSnippetUnderWidget(container: pages.Snippet): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widgets' property
         * of the parent pages.Snippet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInSnippetUnderWidgets(container: pages.Snippet): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'firstWidget' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInSplitPaneUnderFirstWidget(container: pages.SplitPane): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'firstWidgets' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 7.23.0
         */
        static createInSplitPaneUnderFirstWidgets(container: pages.SplitPane): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'secondWidget' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInSplitPaneUnderSecondWidget(container: pages.SplitPane): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'secondWidgets' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 7.23.0
         */
        static createInSplitPaneUnderSecondWidgets(container: pages.SplitPane): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widget' property
         * of the parent pages.TabPage element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInTabPageUnderWidget(container: pages.TabPage): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widgets' property
         * of the parent pages.TabPage element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInTabPageUnderWidgets(container: pages.TabPage): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widget' property
         * of the parent pages.TableCell element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInTableCellUnderWidget(container: pages.TableCell): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widgets' property
         * of the parent pages.TableCell element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInTableCellUnderWidgets(container: pages.TableCell): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widget' property
         * of the parent pages.TemplateGridContents element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInTemplateGridContentsUnderWidget(container: pages.TemplateGridContents): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widgets' property
         * of the parent pages.TemplateGridContents element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInTemplateGridContentsUnderWidgets(container: pages.TemplateGridContents): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widgets' property
         * of the parent pages.VerticalFlow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInVerticalFlowUnderWidgets(container: pages.VerticalFlow): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widgets' property
         * of the parent pages.WebLayoutContent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 and higher
         */
        static createInWebLayoutContentUnderWidgets(container: pages.WebLayoutContent): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'parameterWidget' property
         * of the parent ReportPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInReportPaneUnderParameterWidget(container: ReportPane): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'reportWidget' property
         * of the parent ReportPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInReportPaneUnderReportWidget(container: ReportPane): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ReportDateRangeSelector;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/report-parameter relevant section in reference guide}
     */
    class ReportDropDown extends ReportParameter {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsWidgetValue(): customwidgets.WidgetValue;
        get containerAsNativeLayout(): nativepages.NativeLayout;
        get containerAsNativeLayoutCallArgument(): nativepages.NativeLayoutCallArgument;
        get containerAsBuildingBlock(): pages.BuildingBlock;
        get containerAsDataView(): pages.DataView;
        get containerAsDivContainer(): pages.DivContainer;
        get containerAsGroupBox(): pages.GroupBox;
        get containerAsHeader(): pages.Header;
        get containerAsLayout(): pages.Layout;
        get containerAsLayoutCallArgument(): pages.LayoutCallArgument;
        get containerAsLayoutGridColumn(): pages.LayoutGridColumn;
        get containerAsListView(): pages.ListView;
        get containerAsListViewTemplate(): pages.ListViewTemplate;
        get containerAsMasterDetailRegion(): pages.MasterDetailRegion;
        get containerAsNativeLayoutContent(): pages.NativeLayoutContent;
        get containerAsNavigationListItem(): pages.NavigationListItem;
        get containerAsScrollContainerRegion(): pages.ScrollContainerRegion;
        get containerAsSnippet(): pages.Snippet;
        get containerAsSplitPane(): pages.SplitPane;
        get containerAsTabPage(): pages.TabPage;
        get containerAsTableCell(): pages.TableCell;
        get containerAsTemplateGridContents(): pages.TemplateGridContents;
        get containerAsVerticalFlow(): pages.VerticalFlow;
        get containerAsWebLayoutContent(): pages.WebLayoutContent;
        get containerAsReportPane(): ReportPane;
        get attribute(): domainmodels.IAttribute | null;
        set attribute(newValue: domainmodels.IAttribute | null);
        get attributeQualifiedName(): string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widgets' property
         * of the parent customwidgets.WidgetValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.2.0 and higher
         */
        static createInWidgetValueUnderWidgets(container: customwidgets.WidgetValue): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'headerWidget' property
         * of the parent nativepages.NativeLayout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.22.0 to 7.23.0
         */
        static createInNativeLayoutUnderHeaderWidget(container: nativepages.NativeLayout): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widgets' property
         * of the parent nativepages.NativeLayout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 to 7.23.0
         */
        static createInNativeLayoutUnderWidgets(container: nativepages.NativeLayout): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widgets' property
         * of the parent nativepages.NativeLayoutCallArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInNativeLayoutCallArgumentUnderWidgets(container: nativepages.NativeLayoutCallArgument): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widget' property
         * of the parent pages.BuildingBlock element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.7.0 to 7.14.0
         */
        static createInBuildingBlockUnderWidget(container: pages.BuildingBlock): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widgets' property
         * of the parent pages.BuildingBlock element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInBuildingBlockUnderWidgets(container: pages.BuildingBlock): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'footerWidget' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.7.0 to 7.14.0
         */
        static createInDataViewUnderFooterWidget(container: pages.DataView): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'footerWidgets' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInDataViewUnderFooterWidgets(container: pages.DataView): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widget' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInDataViewUnderWidget(container: pages.DataView): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widgets' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInDataViewUnderWidgets(container: pages.DataView): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widget' property
         * of the parent pages.DivContainer element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInDivContainerUnderWidget(container: pages.DivContainer): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widgets' property
         * of the parent pages.DivContainer element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInDivContainerUnderWidgets(container: pages.DivContainer): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widget' property
         * of the parent pages.GroupBox element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInGroupBoxUnderWidget(container: pages.GroupBox): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widgets' property
         * of the parent pages.GroupBox element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInGroupBoxUnderWidgets(container: pages.GroupBox): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'leftWidget' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInHeaderUnderLeftWidget(container: pages.Header): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'leftWidgets' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInHeaderUnderLeftWidgets(container: pages.Header): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'rightWidget' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInHeaderUnderRightWidget(container: pages.Header): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'rightWidgets' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInHeaderUnderRightWidgets(container: pages.Header): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widget' property
         * of the parent pages.Layout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInLayoutUnderWidget(container: pages.Layout): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widgets' property
         * of the parent pages.Layout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 7.23.0
         */
        static createInLayoutUnderWidgets(container: pages.Layout): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widget' property
         * of the parent pages.LayoutCallArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInLayoutCallArgumentUnderWidget(container: pages.LayoutCallArgument): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widgets' property
         * of the parent pages.LayoutCallArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInLayoutCallArgumentUnderWidgets(container: pages.LayoutCallArgument): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widget' property
         * of the parent pages.LayoutGridColumn element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInLayoutGridColumnUnderWidget(container: pages.LayoutGridColumn): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widgets' property
         * of the parent pages.LayoutGridColumn element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInLayoutGridColumnUnderWidgets(container: pages.LayoutGridColumn): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widget' property
         * of the parent pages.ListView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInListViewUnderWidget(container: pages.ListView): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widgets' property
         * of the parent pages.ListView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInListViewUnderWidgets(container: pages.ListView): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widget' property
         * of the parent pages.ListViewTemplate element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInListViewTemplateUnderWidget(container: pages.ListViewTemplate): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widgets' property
         * of the parent pages.ListViewTemplate element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInListViewTemplateUnderWidgets(container: pages.ListViewTemplate): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widget' property
         * of the parent pages.MasterDetailRegion element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.1.0 to 7.14.0
         */
        static createInMasterDetailRegionUnderWidget(container: pages.MasterDetailRegion): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'sidebarWidgets' property
         * of the parent pages.NativeLayoutContent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.5.0 and higher
         */
        static createInNativeLayoutContentUnderSidebarWidgets(container: pages.NativeLayoutContent): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widgets' property
         * of the parent pages.NativeLayoutContent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 and higher
         */
        static createInNativeLayoutContentUnderWidgets(container: pages.NativeLayoutContent): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widget' property
         * of the parent pages.NavigationListItem element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInNavigationListItemUnderWidget(container: pages.NavigationListItem): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widgets' property
         * of the parent pages.NavigationListItem element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInNavigationListItemUnderWidgets(container: pages.NavigationListItem): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widget' property
         * of the parent pages.ScrollContainerRegion element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInScrollContainerRegionUnderWidget(container: pages.ScrollContainerRegion): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widgets' property
         * of the parent pages.ScrollContainerRegion element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInScrollContainerRegionUnderWidgets(container: pages.ScrollContainerRegion): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widget' property
         * of the parent pages.Snippet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInSnippetUnderWidget(container: pages.Snippet): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widgets' property
         * of the parent pages.Snippet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInSnippetUnderWidgets(container: pages.Snippet): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'firstWidget' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInSplitPaneUnderFirstWidget(container: pages.SplitPane): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'firstWidgets' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 7.23.0
         */
        static createInSplitPaneUnderFirstWidgets(container: pages.SplitPane): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'secondWidget' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInSplitPaneUnderSecondWidget(container: pages.SplitPane): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'secondWidgets' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 7.23.0
         */
        static createInSplitPaneUnderSecondWidgets(container: pages.SplitPane): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widget' property
         * of the parent pages.TabPage element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInTabPageUnderWidget(container: pages.TabPage): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widgets' property
         * of the parent pages.TabPage element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInTabPageUnderWidgets(container: pages.TabPage): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widget' property
         * of the parent pages.TableCell element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInTableCellUnderWidget(container: pages.TableCell): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widgets' property
         * of the parent pages.TableCell element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInTableCellUnderWidgets(container: pages.TableCell): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widget' property
         * of the parent pages.TemplateGridContents element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInTemplateGridContentsUnderWidget(container: pages.TemplateGridContents): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widgets' property
         * of the parent pages.TemplateGridContents element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInTemplateGridContentsUnderWidgets(container: pages.TemplateGridContents): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widgets' property
         * of the parent pages.VerticalFlow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInVerticalFlowUnderWidgets(container: pages.VerticalFlow): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widgets' property
         * of the parent pages.WebLayoutContent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 and higher
         */
        static createInWebLayoutContentUnderWidgets(container: pages.WebLayoutContent): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'parameterWidget' property
         * of the parent ReportPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInReportPaneUnderParameterWidget(container: ReportPane): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'reportWidget' property
         * of the parent ReportPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInReportPaneUnderReportWidget(container: ReportPane): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ReportDropDown;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide6/report-pane relevant section in reference guide}
     *
     * In version 6.10.0: deleted
     */
    class ReportPane extends pages.Widget {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsDataView(): pages.DataView;
        get containerAsDivContainer(): pages.DivContainer;
        get containerAsGroupBox(): pages.GroupBox;
        get containerAsHeader(): pages.Header;
        get containerAsLayout(): pages.Layout;
        get containerAsLayoutCallArgument(): pages.LayoutCallArgument;
        get containerAsLayoutGridColumn(): pages.LayoutGridColumn;
        get containerAsListView(): pages.ListView;
        get containerAsListViewTemplate(): pages.ListViewTemplate;
        get containerAsNavigationListItem(): pages.NavigationListItem;
        get containerAsScrollContainerRegion(): pages.ScrollContainerRegion;
        get containerAsSnippet(): pages.Snippet;
        get containerAsSplitPane(): pages.SplitPane;
        get containerAsTabPage(): pages.TabPage;
        get containerAsTableCell(): pages.TableCell;
        get containerAsTemplateGridContents(): pages.TemplateGridContents;
        get containerAsVerticalFlow(): pages.VerticalFlow;
        get containerAsReportPane(): ReportPane;
        get parameterWidget(): pages.Widget | null;
        set parameterWidget(newValue: pages.Widget | null);
        get reportWidget(): pages.Widget | null;
        set reportWidget(newValue: pages.Widget | null);
        get generateOnLoad(): boolean;
        set generateOnLoad(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ReportPane instance in the SDK and on the server.
         * The new ReportPane will be automatically stored in the 'footerWidget' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.7.0 to 6.9.0
         */
        static createInDataViewUnderFooterWidget(container: pages.DataView): ReportPane;
        /**
         * Creates and returns a new ReportPane instance in the SDK and on the server.
         * The new ReportPane will be automatically stored in the 'widget' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInDataViewUnderWidget(container: pages.DataView): ReportPane;
        /**
         * Creates and returns a new ReportPane instance in the SDK and on the server.
         * The new ReportPane will be automatically stored in the 'widget' property
         * of the parent pages.DivContainer element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInDivContainerUnderWidget(container: pages.DivContainer): ReportPane;
        /**
         * Creates and returns a new ReportPane instance in the SDK and on the server.
         * The new ReportPane will be automatically stored in the 'widget' property
         * of the parent pages.GroupBox element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInGroupBoxUnderWidget(container: pages.GroupBox): ReportPane;
        /**
         * Creates and returns a new ReportPane instance in the SDK and on the server.
         * The new ReportPane will be automatically stored in the 'leftWidget' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInHeaderUnderLeftWidget(container: pages.Header): ReportPane;
        /**
         * Creates and returns a new ReportPane instance in the SDK and on the server.
         * The new ReportPane will be automatically stored in the 'rightWidget' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInHeaderUnderRightWidget(container: pages.Header): ReportPane;
        /**
         * Creates and returns a new ReportPane instance in the SDK and on the server.
         * The new ReportPane will be automatically stored in the 'widget' property
         * of the parent pages.Layout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInLayoutUnderWidget(container: pages.Layout): ReportPane;
        /**
         * Creates and returns a new ReportPane instance in the SDK and on the server.
         * The new ReportPane will be automatically stored in the 'widget' property
         * of the parent pages.LayoutCallArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInLayoutCallArgumentUnderWidget(container: pages.LayoutCallArgument): ReportPane;
        /**
         * Creates and returns a new ReportPane instance in the SDK and on the server.
         * The new ReportPane will be automatically stored in the 'widget' property
         * of the parent pages.LayoutGridColumn element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInLayoutGridColumnUnderWidget(container: pages.LayoutGridColumn): ReportPane;
        /**
         * Creates and returns a new ReportPane instance in the SDK and on the server.
         * The new ReportPane will be automatically stored in the 'widget' property
         * of the parent pages.ListView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInListViewUnderWidget(container: pages.ListView): ReportPane;
        /**
         * Creates and returns a new ReportPane instance in the SDK and on the server.
         * The new ReportPane will be automatically stored in the 'widget' property
         * of the parent pages.ListViewTemplate element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInListViewTemplateUnderWidget(container: pages.ListViewTemplate): ReportPane;
        /**
         * Creates and returns a new ReportPane instance in the SDK and on the server.
         * The new ReportPane will be automatically stored in the 'widget' property
         * of the parent pages.NavigationListItem element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInNavigationListItemUnderWidget(container: pages.NavigationListItem): ReportPane;
        /**
         * Creates and returns a new ReportPane instance in the SDK and on the server.
         * The new ReportPane will be automatically stored in the 'widget' property
         * of the parent pages.ScrollContainerRegion element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInScrollContainerRegionUnderWidget(container: pages.ScrollContainerRegion): ReportPane;
        /**
         * Creates and returns a new ReportPane instance in the SDK and on the server.
         * The new ReportPane will be automatically stored in the 'widget' property
         * of the parent pages.Snippet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInSnippetUnderWidget(container: pages.Snippet): ReportPane;
        /**
         * Creates and returns a new ReportPane instance in the SDK and on the server.
         * The new ReportPane will be automatically stored in the 'firstWidget' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInSplitPaneUnderFirstWidget(container: pages.SplitPane): ReportPane;
        /**
         * Creates and returns a new ReportPane instance in the SDK and on the server.
         * The new ReportPane will be automatically stored in the 'secondWidget' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInSplitPaneUnderSecondWidget(container: pages.SplitPane): ReportPane;
        /**
         * Creates and returns a new ReportPane instance in the SDK and on the server.
         * The new ReportPane will be automatically stored in the 'widget' property
         * of the parent pages.TabPage element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInTabPageUnderWidget(container: pages.TabPage): ReportPane;
        /**
         * Creates and returns a new ReportPane instance in the SDK and on the server.
         * The new ReportPane will be automatically stored in the 'widget' property
         * of the parent pages.TableCell element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInTableCellUnderWidget(container: pages.TableCell): ReportPane;
        /**
         * Creates and returns a new ReportPane instance in the SDK and on the server.
         * The new ReportPane will be automatically stored in the 'widget' property
         * of the parent pages.TemplateGridContents element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInTemplateGridContentsUnderWidget(container: pages.TemplateGridContents): ReportPane;
        /**
         * Creates and returns a new ReportPane instance in the SDK and on the server.
         * The new ReportPane will be automatically stored in the 'widgets' property
         * of the parent pages.VerticalFlow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInVerticalFlowUnderWidgets(container: pages.VerticalFlow): ReportPane;
        /**
         * Creates and returns a new ReportPane instance in the SDK and on the server.
         * The new ReportPane will be automatically stored in the 'parameterWidget' property
         * of the parent ReportPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInReportPaneUnderParameterWidget(container: ReportPane): ReportPane;
        /**
         * Creates and returns a new ReportPane instance in the SDK and on the server.
         * The new ReportPane will be automatically stored in the 'reportWidget' property
         * of the parent ReportPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInReportPaneUnderReportWidget(container: ReportPane): ReportPane;
        /**
         * Creates and returns a new ReportPane instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ReportPane;
    }
    class ReportZoomInfo extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsBasicReport(): BasicReport;
        get targetPage(): pages.IPage | null;
        set targetPage(newValue: pages.IPage | null);
        get targetPageQualifiedName(): string | null;
        get mappings(): internal.IList<ReportZoomMapping>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ReportZoomInfo instance in the SDK and on the server.
         * The new ReportZoomInfo will be automatically stored in the 'zoomInfo' property
         * of the parent BasicReport element passed as argument.
         */
        static createIn(container: BasicReport): ReportZoomInfo;
        /**
         * Creates and returns a new ReportZoomInfo instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ReportZoomInfo;
    }
    class ReportZoomMapping extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsReportZoomInfo(): ReportZoomInfo;
        get targetParameterName(): string;
        set targetParameterName(newValue: string);
        get sourceReportColumnName(): string;
        set sourceReportColumnName(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ReportZoomMapping instance in the SDK and on the server.
         * The new ReportZoomMapping will be automatically stored in the 'mappings' property
         * of the parent ReportZoomInfo element passed as argument.
         */
        static createIn(container: ReportZoomInfo): ReportZoomMapping;
        /**
         * Creates and returns a new ReportZoomMapping instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ReportZoomMapping;
    }
}
import { customwidgets } from "./customwidgets";
import { datasets } from "./datasets";
import { domainmodels } from "./domainmodels";
import { nativepages } from "./nativepages";
import { texts } from "./texts";
import { IModel } from "./base-model";
