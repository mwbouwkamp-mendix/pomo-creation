import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
import { common } from "../common";
import { projects } from "./projects";
export declare namespace documenttemplates {
    class BorderStyle extends internal.AbstractEnum {
        static None: BorderStyle;
        static Dotted: BorderStyle;
        static Dashed: BorderStyle;
        static Solid: BorderStyle;
        protected qualifiedTsTypeName: string;
    }
    class FontFamily extends internal.AbstractEnum {
        static Courier: FontFamily;
        static Tahoma: FontFamily;
        static Times: FontFamily;
        static Helvetica: FontFamily;
        static Arial: FontFamily;
        protected qualifiedTsTypeName: string;
    }
    class TextAlign extends internal.AbstractEnum {
        static Left: TextAlign;
        static Right: TextAlign;
        static Center: TextAlign;
        protected qualifiedTsTypeName: string;
    }
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `DocumentTemplates`.
     */
    abstract class Widget extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsDocumentTemplate(): DocumentTemplate;
        get containerAsDropZone(): DropZone;
        get name(): string;
        set name(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    abstract class AttributeWidget extends Widget {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsDocumentTemplate(): DocumentTemplate;
        get containerAsDropZone(): DropZone;
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
        get attributeRef(): domainmodels.AttributeRef | null;
        set attributeRef(newValue: domainmodels.AttributeRef | null);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    class ConditionSettings extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsTableRow(): TableRow;
        get conditions(): internal.IList<enumerations.Condition>;
        get attribute(): domainmodels.IAttribute | null;
        set attribute(newValue: domainmodels.IAttribute | null);
        get attributeQualifiedName(): string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ConditionSettings instance in the SDK and on the server.
         * The new ConditionSettings will be automatically stored in the 'conditionSettings' property
         * of the parent TableRow element passed as argument.
         */
        static createIn(container: TableRow): ConditionSettings;
        /**
         * Creates and returns a new ConditionSettings instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ConditionSettings;
    }
    abstract class EntityWidget extends Widget {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsDocumentTemplate(): DocumentTemplate;
        get containerAsDropZone(): DropZone;
        /**
         * The value of this property is conceptually of type paths.LegacyEntityPath.
         *
         * In version 7.11.0: deleted
         */
        get entityPath(): string;
        set entityPath(newValue: string);
        /**
         * In version 7.11.0: introduced
         */
        get entityRef(): domainmodels.EntityRef | null;
        set entityRef(newValue: domainmodels.EntityRef | null);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    abstract class Grid extends EntityWidget {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsDocumentTemplate(): DocumentTemplate;
        get containerAsDropZone(): DropZone;
        get cellSpacing(): number;
        set cellSpacing(newValue: number);
        get cellPadding(): number;
        set cellPadding(newValue: number);
        get style(): Style;
        set style(newValue: Style);
        get sortBar(): GridSortBar;
        set sortBar(newValue: GridSortBar);
        get microflow(): microflows.IMicroflow | null;
        set microflow(newValue: microflows.IMicroflow | null);
        get microflowQualifiedName(): string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/data-grid-document-template relevant section in reference guide}
     */
    class DataGrid extends Grid {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsDocumentTemplate(): DocumentTemplate;
        get containerAsDropZone(): DropZone;
        get columns(): internal.IList<DataGridColumn>;
        get weights(): internal.IList<number>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new DataGrid instance in the SDK and on the server.
         * The new DataGrid will be automatically stored in the 'toplevels' property
         * of the parent DocumentTemplate element passed as argument.
         */
        static createInDocumentTemplateUnderToplevels(container: DocumentTemplate): DataGrid;
        /**
         * Creates and returns a new DataGrid instance in the SDK and on the server.
         * The new DataGrid will be automatically stored in the 'widget' property
         * of the parent DropZone element passed as argument.
         */
        static createInDropZoneUnderWidget(container: DropZone): DataGrid;
        /**
         * Creates and returns a new DataGrid instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): DataGrid;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/columns-document-template relevant section in reference guide}
     */
    class DataGridCell extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsDataGridColumn(): DataGridColumn;
        get style(): Style;
        set style(newValue: Style);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new DataGridCell instance in the SDK and on the server.
         * The new DataGridCell will be automatically stored in the 'evenRowsCell' property
         * of the parent DataGridColumn element passed as argument.
         */
        static createInDataGridColumnUnderEvenRowsCell(container: DataGridColumn): DataGridCell;
        /**
         * Creates and returns a new DataGridCell instance in the SDK and on the server.
         * The new DataGridCell will be automatically stored in the 'oddRowsCell' property
         * of the parent DataGridColumn element passed as argument.
         */
        static createInDataGridColumnUnderOddRowsCell(container: DataGridColumn): DataGridCell;
        /**
         * Creates and returns a new DataGridCell instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): DataGridCell;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/columns-document-template relevant section in reference guide}
     */
    class DataGridColumn extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsDataGrid(): DataGrid;
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
        get attributeRef(): domainmodels.AttributeRef | null;
        set attributeRef(newValue: domainmodels.AttributeRef | null);
        get caption(): texts.Text;
        set caption(newValue: texts.Text);
        get style(): Style;
        set style(newValue: Style);
        get oddRowsCell(): DataGridCell;
        set oddRowsCell(newValue: DataGridCell);
        get evenRowsCell(): DataGridCell | null;
        set evenRowsCell(newValue: DataGridCell | null);
        get formattingInfo(): pages.FormattingInfo;
        set formattingInfo(newValue: pages.FormattingInfo);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new DataGridColumn instance in the SDK and on the server.
         * The new DataGridColumn will be automatically stored in the 'columns' property
         * of the parent DataGrid element passed as argument.
         */
        static createIn(container: DataGrid): DataGridColumn;
        /**
         * Creates and returns a new DataGridColumn instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): DataGridColumn;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/data-view-document-template relevant section in reference guide}
     */
    class DataView extends EntityWidget {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsDocumentTemplate(): DocumentTemplate;
        get containerAsDropZone(): DropZone;
        get contents(): DataViewContents;
        set contents(newValue: DataViewContents);
        get microflow(): microflows.IMicroflow | null;
        set microflow(newValue: microflows.IMicroflow | null);
        get microflowQualifiedName(): string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new DataView instance in the SDK and on the server.
         * The new DataView will be automatically stored in the 'toplevels' property
         * of the parent DocumentTemplate element passed as argument.
         */
        static createInDocumentTemplateUnderToplevels(container: DocumentTemplate): DataView;
        /**
         * Creates and returns a new DataView instance in the SDK and on the server.
         * The new DataView will be automatically stored in the 'widget' property
         * of the parent DropZone element passed as argument.
         */
        static createInDropZoneUnderWidget(container: DropZone): DataView;
        /**
         * Creates and returns a new DataView instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): DataView;
    }
    abstract class DropZone extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsDataView(): DataView;
        get containerAsDocumentTemplate(): DocumentTemplate;
        get containerAsTableRow(): TableRow;
        get containerAsTemplateGrid(): TemplateGrid;
        get widget(): Widget | null;
        set widget(newValue: Widget | null);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    class DataViewContents extends DropZone {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsDataView(): DataView;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new DataViewContents instance in the SDK and on the server.
         * The new DataViewContents will be automatically stored in the 'contents' property
         * of the parent DataView element passed as argument.
         */
        static createIn(container: DataView): DataViewContents;
        /**
         * Creates and returns a new DataViewContents instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): DataViewContents;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/document-templates relevant section in reference guide}
     */
    interface IDocumentTemplate extends projects.IDocument {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        asLoaded(): DocumentTemplate;
        load(callback: (element: DocumentTemplate) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<DocumentTemplate>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/document-templates relevant section in reference guide}
     */
    class DocumentTemplate extends projects.Document implements IDocumentTemplate {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFolderBase(): projects.FolderBase;
        get toplevels(): internal.IList<Widget>;
        get canvasWidth(): number;
        set canvasWidth(newValue: number);
        get pageWidth(): string;
        set pageWidth(newValue: string);
        get pageHeight(): string;
        set pageHeight(newValue: string);
        get ppi(): number;
        set ppi(newValue: number);
        get marginLeftInInch(): number;
        set marginLeftInInch(newValue: number);
        get marginRightInInch(): number;
        set marginRightInInch(newValue: number);
        get marginTopInInch(): number;
        set marginTopInInch(newValue: number);
        get marginBottomInInch(): number;
        set marginBottomInInch(newValue: number);
        get style(): Style;
        set style(newValue: Style);
        get header(): Header | null;
        set header(newValue: Header | null);
        get footer(): Footer | null;
        set footer(newValue: Footer | null);
        get showHeaderAndFooterOnFirstPage(): boolean;
        set showHeaderAndFooterOnFirstPage(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
        /**
         * Creates a new DocumentTemplate unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container: projects.IFolderBase): DocumentTemplate;
    }
    interface IDocumentTemplateParameter extends internal.IElement, internal.IByNameReferrable {
        readonly model: IModel;
        readonly containerAsDocumentTemplate: IDocumentTemplate;
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
        asLoaded(): DocumentTemplateParameter;
        load(callback: (element: DocumentTemplateParameter) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<DocumentTemplateParameter>;
    }
    class DocumentTemplateParameter extends internal.Element<IModel> implements IDocumentTemplateParameter {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsDocumentTemplate(): DocumentTemplate;
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
     * See: {@link https://docs.mendix.com/refguide/dynamic-image-document-template relevant section in reference guide}
     */
    class DynamicImageViewer extends EntityWidget {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsDocumentTemplate(): DocumentTemplate;
        get containerAsDropZone(): DropZone;
        get defaultImage(): images.IImage | null;
        set defaultImage(newValue: images.IImage | null);
        get defaultImageQualifiedName(): string | null;
        get useThumbnail(): boolean;
        set useThumbnail(newValue: boolean);
        get width(): number;
        set width(newValue: number);
        get height(): number;
        set height(newValue: number);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new DynamicImageViewer instance in the SDK and on the server.
         * The new DynamicImageViewer will be automatically stored in the 'toplevels' property
         * of the parent DocumentTemplate element passed as argument.
         */
        static createInDocumentTemplateUnderToplevels(container: DocumentTemplate): DynamicImageViewer;
        /**
         * Creates and returns a new DynamicImageViewer instance in the SDK and on the server.
         * The new DynamicImageViewer will be automatically stored in the 'widget' property
         * of the parent DropZone element passed as argument.
         */
        static createInDropZoneUnderWidget(container: DropZone): DynamicImageViewer;
        /**
         * Creates and returns a new DynamicImageViewer instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): DynamicImageViewer;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/dynamic-label-document-template relevant section in reference guide}
     */
    class DynamicLabel extends AttributeWidget {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsDocumentTemplate(): DocumentTemplate;
        get containerAsDropZone(): DropZone;
        get style(): Style;
        set style(newValue: Style);
        get renderXHTML(): boolean;
        set renderXHTML(newValue: boolean);
        get formattingInfo(): pages.FormattingInfo;
        set formattingInfo(newValue: pages.FormattingInfo);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new DynamicLabel instance in the SDK and on the server.
         * The new DynamicLabel will be automatically stored in the 'toplevels' property
         * of the parent DocumentTemplate element passed as argument.
         */
        static createInDocumentTemplateUnderToplevels(container: DocumentTemplate): DynamicLabel;
        /**
         * Creates and returns a new DynamicLabel instance in the SDK and on the server.
         * The new DynamicLabel will be automatically stored in the 'widget' property
         * of the parent DropZone element passed as argument.
         */
        static createInDropZoneUnderWidget(container: DropZone): DynamicLabel;
        /**
         * Creates and returns a new DynamicLabel instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): DynamicLabel;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/footer-document-template relevant section in reference guide}
     */
    class Footer extends DropZone {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsDocumentTemplate(): DocumentTemplate;
        get bottomMargin(): number;
        set bottomMargin(newValue: number);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new Footer instance in the SDK and on the server.
         * The new Footer will be automatically stored in the 'footer' property
         * of the parent DocumentTemplate element passed as argument.
         */
        static createIn(container: DocumentTemplate): Footer;
        /**
         * Creates and returns a new Footer instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): Footer;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/sort-bar relevant section in reference guide}
     */
    class GridSortBar extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsGrid(): Grid;
        get sortItems(): internal.IList<GridSortItem>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new GridSortBar instance in the SDK and on the server.
         * The new GridSortBar will be automatically stored in the 'sortBar' property
         * of the parent Grid element passed as argument.
         */
        static createIn(container: Grid): GridSortBar;
        /**
         * Creates and returns a new GridSortBar instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): GridSortBar;
    }
    class GridSortItem extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsGridSortBar(): GridSortBar;
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
        get sortOrder(): pages.SortDirection;
        set sortOrder(newValue: pages.SortDirection);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new GridSortItem instance in the SDK and on the server.
         * The new GridSortItem will be automatically stored in the 'sortItems' property
         * of the parent GridSortBar element passed as argument.
         */
        static createIn(container: GridSortBar): GridSortItem;
        /**
         * Creates and returns a new GridSortItem instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): GridSortItem;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/header-document-template relevant section in reference guide}
     */
    class Header extends DropZone {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsDocumentTemplate(): DocumentTemplate;
        get topMargin(): number;
        set topMargin(newValue: number);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new Header instance in the SDK and on the server.
         * The new Header will be automatically stored in the 'header' property
         * of the parent DocumentTemplate element passed as argument.
         */
        static createIn(container: DocumentTemplate): Header;
        /**
         * Creates and returns a new Header instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): Header;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/line-break-document-template relevant section in reference guide}
     */
    class LineBreak extends Widget {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsDocumentTemplate(): DocumentTemplate;
        get containerAsDropZone(): DropZone;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new LineBreak instance in the SDK and on the server.
         * The new LineBreak will be automatically stored in the 'toplevels' property
         * of the parent DocumentTemplate element passed as argument.
         */
        static createInDocumentTemplateUnderToplevels(container: DocumentTemplate): LineBreak;
        /**
         * Creates and returns a new LineBreak instance in the SDK and on the server.
         * The new LineBreak will be automatically stored in the 'widget' property
         * of the parent DropZone element passed as argument.
         */
        static createInDropZoneUnderWidget(container: DropZone): LineBreak;
        /**
         * Creates and returns a new LineBreak instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): LineBreak;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/page-break-document-template relevant section in reference guide}
     */
    class PageBreak extends Widget {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsDocumentTemplate(): DocumentTemplate;
        get containerAsDropZone(): DropZone;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new PageBreak instance in the SDK and on the server.
         * The new PageBreak will be automatically stored in the 'toplevels' property
         * of the parent DocumentTemplate element passed as argument.
         */
        static createInDocumentTemplateUnderToplevels(container: DocumentTemplate): PageBreak;
        /**
         * Creates and returns a new PageBreak instance in the SDK and on the server.
         * The new PageBreak will be automatically stored in the 'widget' property
         * of the parent DropZone element passed as argument.
         */
        static createInDropZoneUnderWidget(container: DropZone): PageBreak;
        /**
         * Creates and returns a new PageBreak instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): PageBreak;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/static-image-document-template relevant section in reference guide}
     */
    class StaticImageViewer extends Widget {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsDocumentTemplate(): DocumentTemplate;
        get containerAsDropZone(): DropZone;
        get image(): images.IImage | null;
        set image(newValue: images.IImage | null);
        get imageQualifiedName(): string | null;
        get width(): number;
        set width(newValue: number);
        get height(): number;
        set height(newValue: number);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new StaticImageViewer instance in the SDK and on the server.
         * The new StaticImageViewer will be automatically stored in the 'toplevels' property
         * of the parent DocumentTemplate element passed as argument.
         */
        static createInDocumentTemplateUnderToplevels(container: DocumentTemplate): StaticImageViewer;
        /**
         * Creates and returns a new StaticImageViewer instance in the SDK and on the server.
         * The new StaticImageViewer will be automatically stored in the 'widget' property
         * of the parent DropZone element passed as argument.
         */
        static createInDropZoneUnderWidget(container: DropZone): StaticImageViewer;
        /**
         * Creates and returns a new StaticImageViewer instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): StaticImageViewer;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/static-label-document-template relevant section in reference guide}
     */
    class StaticLabel extends Widget {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsDocumentTemplate(): DocumentTemplate;
        get containerAsDropZone(): DropZone;
        get caption(): texts.Text;
        set caption(newValue: texts.Text);
        get style(): Style;
        set style(newValue: Style);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new StaticLabel instance in the SDK and on the server.
         * The new StaticLabel will be automatically stored in the 'toplevels' property
         * of the parent DocumentTemplate element passed as argument.
         */
        static createInDocumentTemplateUnderToplevels(container: DocumentTemplate): StaticLabel;
        /**
         * Creates and returns a new StaticLabel instance in the SDK and on the server.
         * The new StaticLabel will be automatically stored in the 'widget' property
         * of the parent DropZone element passed as argument.
         */
        static createInDropZoneUnderWidget(container: DropZone): StaticLabel;
        /**
         * Creates and returns a new StaticLabel instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): StaticLabel;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/style relevant section in reference guide}
     */
    class Style extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsDataGridCell(): DataGridCell;
        get containerAsDataGridColumn(): DataGridColumn;
        get containerAsDocumentTemplate(): DocumentTemplate;
        get containerAsDynamicLabel(): DynamicLabel;
        get containerAsGrid(): Grid;
        get containerAsStaticLabel(): StaticLabel;
        get containerAsTable(): Table;
        get containerAsTableCell(): TableCell;
        get containerAsTitle(): Title;
        get fontFamily(): FontFamily;
        set fontFamily(newValue: FontFamily);
        get fontSize(): number;
        set fontSize(newValue: number);
        get bold(): boolean;
        set bold(newValue: boolean);
        get italic(): boolean;
        set italic(newValue: boolean);
        get fontColor(): common.IColor;
        set fontColor(newValue: common.IColor);
        get backgroundColor(): common.IColor;
        set backgroundColor(newValue: common.IColor);
        get overrideFontFamily(): boolean;
        set overrideFontFamily(newValue: boolean);
        get overrideFontSize(): boolean;
        set overrideFontSize(newValue: boolean);
        get overrideBold(): boolean;
        set overrideBold(newValue: boolean);
        get overrideItalic(): boolean;
        set overrideItalic(newValue: boolean);
        get overrideFontColor(): boolean;
        set overrideFontColor(newValue: boolean);
        get overrideBackgroundColor(): boolean;
        set overrideBackgroundColor(newValue: boolean);
        get borderStyleTop(): BorderStyle;
        set borderStyleTop(newValue: BorderStyle);
        get borderStyleBottom(): BorderStyle;
        set borderStyleBottom(newValue: BorderStyle);
        get borderStyleLeft(): BorderStyle;
        set borderStyleLeft(newValue: BorderStyle);
        get borderStyleRight(): BorderStyle;
        set borderStyleRight(newValue: BorderStyle);
        get borderWidthTop(): number;
        set borderWidthTop(newValue: number);
        get borderWidthBottom(): number;
        set borderWidthBottom(newValue: number);
        get borderWidthLeft(): number;
        set borderWidthLeft(newValue: number);
        get borderWidthRight(): number;
        set borderWidthRight(newValue: number);
        get borderColorTop(): common.IColor;
        set borderColorTop(newValue: common.IColor);
        get borderColorBottom(): common.IColor;
        set borderColorBottom(newValue: common.IColor);
        get borderColorLeft(): common.IColor;
        set borderColorLeft(newValue: common.IColor);
        get borderColorRight(): common.IColor;
        set borderColorRight(newValue: common.IColor);
        get textAlign(): TextAlign;
        set textAlign(newValue: TextAlign);
        get customStyles(): string;
        set customStyles(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new Style instance in the SDK and on the server.
         * The new Style will be automatically stored in the 'style' property
         * of the parent DataGridCell element passed as argument.
         */
        static createInDataGridCellUnderStyle(container: DataGridCell): Style;
        /**
         * Creates and returns a new Style instance in the SDK and on the server.
         * The new Style will be automatically stored in the 'style' property
         * of the parent DataGridColumn element passed as argument.
         */
        static createInDataGridColumnUnderStyle(container: DataGridColumn): Style;
        /**
         * Creates and returns a new Style instance in the SDK and on the server.
         * The new Style will be automatically stored in the 'style' property
         * of the parent DocumentTemplate element passed as argument.
         */
        static createInDocumentTemplateUnderStyle(container: DocumentTemplate): Style;
        /**
         * Creates and returns a new Style instance in the SDK and on the server.
         * The new Style will be automatically stored in the 'style' property
         * of the parent DynamicLabel element passed as argument.
         */
        static createInDynamicLabelUnderStyle(container: DynamicLabel): Style;
        /**
         * Creates and returns a new Style instance in the SDK and on the server.
         * The new Style will be automatically stored in the 'style' property
         * of the parent Grid element passed as argument.
         */
        static createInGridUnderStyle(container: Grid): Style;
        /**
         * Creates and returns a new Style instance in the SDK and on the server.
         * The new Style will be automatically stored in the 'style' property
         * of the parent StaticLabel element passed as argument.
         */
        static createInStaticLabelUnderStyle(container: StaticLabel): Style;
        /**
         * Creates and returns a new Style instance in the SDK and on the server.
         * The new Style will be automatically stored in the 'style' property
         * of the parent Table element passed as argument.
         */
        static createInTableUnderStyle(container: Table): Style;
        /**
         * Creates and returns a new Style instance in the SDK and on the server.
         * The new Style will be automatically stored in the 'style' property
         * of the parent TableCell element passed as argument.
         */
        static createInTableCellUnderStyle(container: TableCell): Style;
        /**
         * Creates and returns a new Style instance in the SDK and on the server.
         * The new Style will be automatically stored in the 'style' property
         * of the parent Title element passed as argument.
         */
        static createInTitleUnderStyle(container: Title): Style;
        /**
         * Creates and returns a new Style instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): Style;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/table-document-template relevant section in reference guide}
     */
    class Table extends Widget {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsDocumentTemplate(): DocumentTemplate;
        get containerAsDropZone(): DropZone;
        get rows(): internal.IList<TableRow>;
        get columnWeights(): internal.IList<number>;
        get cellSpacing(): number;
        set cellSpacing(newValue: number);
        get cellPadding(): number;
        set cellPadding(newValue: number);
        get style(): Style;
        set style(newValue: Style);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new Table instance in the SDK and on the server.
         * The new Table will be automatically stored in the 'toplevels' property
         * of the parent DocumentTemplate element passed as argument.
         */
        static createInDocumentTemplateUnderToplevels(container: DocumentTemplate): Table;
        /**
         * Creates and returns a new Table instance in the SDK and on the server.
         * The new Table will be automatically stored in the 'widget' property
         * of the parent DropZone element passed as argument.
         */
        static createInDropZoneUnderWidget(container: DropZone): Table;
        /**
         * Creates and returns a new Table instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): Table;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/cell-document-template relevant section in reference guide}
     */
    class TableCell extends DropZone {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsTableRow(): TableRow;
        get colSpan(): number;
        set colSpan(newValue: number);
        get rowSpan(): number;
        set rowSpan(newValue: number);
        get isPartOfSpan(): boolean;
        set isPartOfSpan(newValue: boolean);
        get style(): Style;
        set style(newValue: Style);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new TableCell instance in the SDK and on the server.
         * The new TableCell will be automatically stored in the 'cells' property
         * of the parent TableRow element passed as argument.
         */
        static createIn(container: TableRow): TableCell;
        /**
         * Creates and returns a new TableCell instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): TableCell;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/row-document-template relevant section in reference guide}
     */
    class TableRow extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsTable(): Table;
        get cells(): internal.IList<TableCell>;
        get conditionSettings(): ConditionSettings;
        set conditionSettings(newValue: ConditionSettings);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new TableRow instance in the SDK and on the server.
         * The new TableRow will be automatically stored in the 'rows' property
         * of the parent Table element passed as argument.
         */
        static createIn(container: Table): TableRow;
        /**
         * Creates and returns a new TableRow instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): TableRow;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/template-grid-document-template relevant section in reference guide}
     */
    class TemplateGrid extends Grid {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsDocumentTemplate(): DocumentTemplate;
        get containerAsDropZone(): DropZone;
        get numberOfColumns(): number;
        set numberOfColumns(newValue: number);
        get oddRowsContents(): TemplateGridContents;
        set oddRowsContents(newValue: TemplateGridContents);
        get evenRowsContents(): TemplateGridContents | null;
        set evenRowsContents(newValue: TemplateGridContents | null);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new TemplateGrid instance in the SDK and on the server.
         * The new TemplateGrid will be automatically stored in the 'toplevels' property
         * of the parent DocumentTemplate element passed as argument.
         */
        static createInDocumentTemplateUnderToplevels(container: DocumentTemplate): TemplateGrid;
        /**
         * Creates and returns a new TemplateGrid instance in the SDK and on the server.
         * The new TemplateGrid will be automatically stored in the 'widget' property
         * of the parent DropZone element passed as argument.
         */
        static createInDropZoneUnderWidget(container: DropZone): TemplateGrid;
        /**
         * Creates and returns a new TemplateGrid instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): TemplateGrid;
    }
    class TemplateGridContents extends DropZone {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsTemplateGrid(): TemplateGrid;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new TemplateGridContents instance in the SDK and on the server.
         * The new TemplateGridContents will be automatically stored in the 'evenRowsContents' property
         * of the parent TemplateGrid element passed as argument.
         */
        static createInTemplateGridUnderEvenRowsContents(container: TemplateGrid): TemplateGridContents;
        /**
         * Creates and returns a new TemplateGridContents instance in the SDK and on the server.
         * The new TemplateGridContents will be automatically stored in the 'oddRowsContents' property
         * of the parent TemplateGrid element passed as argument.
         */
        static createInTemplateGridUnderOddRowsContents(container: TemplateGrid): TemplateGridContents;
        /**
         * Creates and returns a new TemplateGridContents instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): TemplateGridContents;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/title-document-template relevant section in reference guide}
     */
    class Title extends Widget {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsDocumentTemplate(): DocumentTemplate;
        get containerAsDropZone(): DropZone;
        get caption(): texts.Text;
        set caption(newValue: texts.Text);
        get style(): Style;
        set style(newValue: Style);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new Title instance in the SDK and on the server.
         * The new Title will be automatically stored in the 'toplevels' property
         * of the parent DocumentTemplate element passed as argument.
         */
        static createInDocumentTemplateUnderToplevels(container: DocumentTemplate): Title;
        /**
         * Creates and returns a new Title instance in the SDK and on the server.
         * The new Title will be automatically stored in the 'widget' property
         * of the parent DropZone element passed as argument.
         */
        static createInDropZoneUnderWidget(container: DropZone): Title;
        /**
         * Creates and returns a new Title instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): Title;
    }
}
import { datatypes } from "./datatypes";
import { domainmodels } from "./domainmodels";
import { enumerations } from "./enumerations";
import { images } from "./images";
import { microflows } from "./microflows";
import { pages } from "./pages";
import { texts } from "./texts";
import { IModel } from "./base-model";
