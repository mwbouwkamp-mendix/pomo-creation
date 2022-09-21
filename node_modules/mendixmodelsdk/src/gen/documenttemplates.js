"use strict";
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.documenttemplates = exports.StructureVersionInfo = void 0;
const internal = require("../sdk/internal");
exports.StructureVersionInfo = internal.StructureVersionInfo;
const projects_1 = require("./projects");
var documenttemplates;
(function (documenttemplates) {
    class BorderStyle extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "documenttemplates.BorderStyle";
        }
    }
    BorderStyle.None = new BorderStyle("None", {});
    BorderStyle.Dotted = new BorderStyle("Dotted", {});
    BorderStyle.Dashed = new BorderStyle("Dashed", {});
    BorderStyle.Solid = new BorderStyle("Solid", {});
    documenttemplates.BorderStyle = BorderStyle;
    class FontFamily extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "documenttemplates.FontFamily";
        }
    }
    FontFamily.Courier = new FontFamily("Courier", {});
    FontFamily.Tahoma = new FontFamily("Tahoma", {
        deleted: "8.0.0",
        deletionMessage: null
    });
    FontFamily.Times = new FontFamily("Times", {});
    FontFamily.Helvetica = new FontFamily("Helvetica", {});
    FontFamily.Arial = new FontFamily("Arial", {
        deleted: "8.0.0",
        deletionMessage: null
    });
    documenttemplates.FontFamily = FontFamily;
    class TextAlign extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "documenttemplates.TextAlign";
        }
    }
    TextAlign.Left = new TextAlign("Left", {});
    TextAlign.Right = new TextAlign("Right", {});
    TextAlign.Center = new TextAlign("Center", {});
    documenttemplates.TextAlign = TextAlign;
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `DocumentTemplates`.
     */
    class Widget extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__name = new internal.PrimitiveProperty(Widget, this, "name", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new Widget() cannot be invoked directly, please use 'model.documenttemplates.createWidget()'");
            }
        }
        get containerAsDocumentTemplate() {
            return super.getContainerAs(DocumentTemplate);
        }
        get containerAsDropZone() {
            return super.getContainerAs(DropZone);
        }
        get name() {
            return this.__name.get();
        }
        set name(newValue) {
            this.__name.set(newValue);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    Widget.structureTypeName = "DocumentTemplates$Widget";
    Widget.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    documenttemplates.Widget = Widget;
    class AttributeWidget extends Widget {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__attributePath = new internal.PrimitiveProperty(AttributeWidget, this, "attributePath", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__attributeRef = new internal.PartProperty(AttributeWidget, this, "attributeRef", null, false);
            if (arguments.length < 4) {
                throw new Error("new AttributeWidget() cannot be invoked directly, please use 'model.documenttemplates.createAttributeWidget()'");
            }
        }
        get containerAsDocumentTemplate() {
            return super.getContainerAs(DocumentTemplate);
        }
        get containerAsDropZone() {
            return super.getContainerAs(DropZone);
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
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    AttributeWidget.structureTypeName = "DocumentTemplates$AttributeWidget";
    AttributeWidget.versionInfo = new exports.StructureVersionInfo({
        properties: {
            attributePath: {
                deleted: "7.11.0",
                deletionMessage: "Use property 'attributeRef' instead"
            },
            attributeRef: {
                introduced: "7.11.0"
            }
        }
    }, internal.StructureType.Element);
    documenttemplates.AttributeWidget = AttributeWidget;
    class ConditionSettings extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__conditions = new internal.PartListProperty(ConditionSettings, this, "conditions", []);
            /** @internal */
            this.__attribute = new internal.ByNameReferenceProperty(ConditionSettings, this, "attribute", null, "DomainModels$Attribute");
            if (arguments.length < 4) {
                throw new Error("new ConditionSettings() cannot be invoked directly, please use 'model.documenttemplates.createConditionSettings()'");
            }
        }
        get containerAsTableRow() {
            return super.getContainerAs(TableRow);
        }
        get conditions() {
            return this.__conditions.get();
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
         * Creates and returns a new ConditionSettings instance in the SDK and on the server.
         * The new ConditionSettings will be automatically stored in the 'conditionSettings' property
         * of the parent TableRow element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, ConditionSettings, "conditionSettings", false);
        }
        /**
         * Creates and returns a new ConditionSettings instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ConditionSettings);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ConditionSettings.structureTypeName = "DocumentTemplates$ConditionSettings";
    ConditionSettings.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    documenttemplates.ConditionSettings = ConditionSettings;
    class EntityWidget extends Widget {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__entityPath = new internal.PrimitiveProperty(EntityWidget, this, "entityPath", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__entityRef = new internal.PartProperty(EntityWidget, this, "entityRef", null, false);
            if (arguments.length < 4) {
                throw new Error("new EntityWidget() cannot be invoked directly, please use 'model.documenttemplates.createEntityWidget()'");
            }
        }
        get containerAsDocumentTemplate() {
            return super.getContainerAs(DocumentTemplate);
        }
        get containerAsDropZone() {
            return super.getContainerAs(DropZone);
        }
        /**
         * The value of this property is conceptually of type paths.LegacyEntityPath.
         *
         * In version 7.11.0: deleted
         */
        get entityPath() {
            return this.__entityPath.get();
        }
        set entityPath(newValue) {
            this.__entityPath.set(newValue);
        }
        /**
         * In version 7.11.0: introduced
         */
        get entityRef() {
            return this.__entityRef.get();
        }
        set entityRef(newValue) {
            this.__entityRef.set(newValue);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    EntityWidget.structureTypeName = "DocumentTemplates$EntityWidget";
    EntityWidget.versionInfo = new exports.StructureVersionInfo({
        properties: {
            entityPath: {
                deleted: "7.11.0",
                deletionMessage: "Use property 'entityRef' instead"
            },
            entityRef: {
                introduced: "7.11.0"
            }
        }
    }, internal.StructureType.Element);
    documenttemplates.EntityWidget = EntityWidget;
    class Grid extends EntityWidget {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__cellSpacing = new internal.PrimitiveProperty(Grid, this, "cellSpacing", 0, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__cellPadding = new internal.PrimitiveProperty(Grid, this, "cellPadding", 0, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__style = new internal.PartProperty(Grid, this, "style", null, true);
            /** @internal */
            this.__sortBar = new internal.PartProperty(Grid, this, "sortBar", null, true);
            /** @internal */
            this.__microflow = new internal.ByNameReferenceProperty(Grid, this, "microflow", null, "Microflows$Microflow");
            if (arguments.length < 4) {
                throw new Error("new Grid() cannot be invoked directly, please use 'model.documenttemplates.createGrid()'");
            }
        }
        get containerAsDocumentTemplate() {
            return super.getContainerAs(DocumentTemplate);
        }
        get containerAsDropZone() {
            return super.getContainerAs(DropZone);
        }
        get cellSpacing() {
            return this.__cellSpacing.get();
        }
        set cellSpacing(newValue) {
            this.__cellSpacing.set(newValue);
        }
        get cellPadding() {
            return this.__cellPadding.get();
        }
        set cellPadding(newValue) {
            this.__cellPadding.set(newValue);
        }
        get style() {
            return this.__style.get();
        }
        set style(newValue) {
            this.__style.set(newValue);
        }
        get sortBar() {
            return this.__sortBar.get();
        }
        set sortBar(newValue) {
            this.__sortBar.set(newValue);
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
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.sortBar = GridSortBar.create(this.model);
            this.style = Style.create(this.model);
        }
    }
    Grid.structureTypeName = "DocumentTemplates$Grid";
    Grid.versionInfo = new exports.StructureVersionInfo({
        properties: {
            style: {
                required: {
                    currentValue: true
                }
            },
            sortBar: {
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    documenttemplates.Grid = Grid;
    /**
     * See: {@link https://docs.mendix.com/refguide/data-grid-document-template relevant section in reference guide}
     */
    class DataGrid extends Grid {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__columns = new internal.PartListProperty(DataGrid, this, "columns", []);
            /** @internal */
            this.__weights = new internal.PrimitiveListProperty(DataGrid, this, "weights", [], internal.PrimitiveTypeEnum.Integer);
            if (arguments.length < 4) {
                throw new Error("new DataGrid() cannot be invoked directly, please use 'model.documenttemplates.createDataGrid()'");
            }
        }
        get containerAsDocumentTemplate() {
            return super.getContainerAs(DocumentTemplate);
        }
        get containerAsDropZone() {
            return super.getContainerAs(DropZone);
        }
        get columns() {
            return this.__columns.get();
        }
        get weights() {
            return this.__weights.get();
        }
        /**
         * Creates and returns a new DataGrid instance in the SDK and on the server.
         * The new DataGrid will be automatically stored in the 'toplevels' property
         * of the parent DocumentTemplate element passed as argument.
         */
        static createInDocumentTemplateUnderToplevels(container) {
            return internal.instancehelpers.createElement(container, DataGrid, "toplevels", true);
        }
        /**
         * Creates and returns a new DataGrid instance in the SDK and on the server.
         * The new DataGrid will be automatically stored in the 'widget' property
         * of the parent DropZone element passed as argument.
         */
        static createInDropZoneUnderWidget(container) {
            return internal.instancehelpers.createElement(container, DataGrid, "widget", false);
        }
        /**
         * Creates and returns a new DataGrid instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, DataGrid);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.columns.replace([DataGridColumn.create(this.model), DataGridColumn.create(this.model)]);
            this.weights.replace([50, 50]);
        }
    }
    DataGrid.structureTypeName = "DocumentTemplates$DataGrid";
    DataGrid.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    documenttemplates.DataGrid = DataGrid;
    /**
     * See: {@link https://docs.mendix.com/refguide/columns-document-template relevant section in reference guide}
     */
    class DataGridCell extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__style = new internal.PartProperty(DataGridCell, this, "style", null, true);
            if (arguments.length < 4) {
                throw new Error("new DataGridCell() cannot be invoked directly, please use 'model.documenttemplates.createDataGridCell()'");
            }
        }
        get containerAsDataGridColumn() {
            return super.getContainerAs(DataGridColumn);
        }
        get style() {
            return this.__style.get();
        }
        set style(newValue) {
            this.__style.set(newValue);
        }
        /**
         * Creates and returns a new DataGridCell instance in the SDK and on the server.
         * The new DataGridCell will be automatically stored in the 'evenRowsCell' property
         * of the parent DataGridColumn element passed as argument.
         */
        static createInDataGridColumnUnderEvenRowsCell(container) {
            return internal.instancehelpers.createElement(container, DataGridCell, "evenRowsCell", false);
        }
        /**
         * Creates and returns a new DataGridCell instance in the SDK and on the server.
         * The new DataGridCell will be automatically stored in the 'oddRowsCell' property
         * of the parent DataGridColumn element passed as argument.
         */
        static createInDataGridColumnUnderOddRowsCell(container) {
            return internal.instancehelpers.createElement(container, DataGridCell, "oddRowsCell", false);
        }
        /**
         * Creates and returns a new DataGridCell instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, DataGridCell);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.style = Style.create(this.model);
        }
    }
    DataGridCell.structureTypeName = "DocumentTemplates$DataGridCell";
    DataGridCell.versionInfo = new exports.StructureVersionInfo({
        properties: {
            style: {
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    documenttemplates.DataGridCell = DataGridCell;
    /**
     * See: {@link https://docs.mendix.com/refguide/columns-document-template relevant section in reference guide}
     */
    class DataGridColumn extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__attributePath = new internal.PrimitiveProperty(DataGridColumn, this, "attributePath", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__attributeRef = new internal.PartProperty(DataGridColumn, this, "attributeRef", null, false);
            /** @internal */
            this.__caption = new internal.PartProperty(DataGridColumn, this, "caption", null, true);
            /** @internal */
            this.__style = new internal.PartProperty(DataGridColumn, this, "style", null, true);
            /** @internal */
            this.__oddRowsCell = new internal.PartProperty(DataGridColumn, this, "oddRowsCell", null, true);
            /** @internal */
            this.__evenRowsCell = new internal.PartProperty(DataGridColumn, this, "evenRowsCell", null, false);
            /** @internal */
            this.__formattingInfo = new internal.PartProperty(DataGridColumn, this, "formattingInfo", null, true);
            if (arguments.length < 4) {
                throw new Error("new DataGridColumn() cannot be invoked directly, please use 'model.documenttemplates.createDataGridColumn()'");
            }
        }
        get containerAsDataGrid() {
            return super.getContainerAs(DataGrid);
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
        get caption() {
            return this.__caption.get();
        }
        set caption(newValue) {
            this.__caption.set(newValue);
        }
        get style() {
            return this.__style.get();
        }
        set style(newValue) {
            this.__style.set(newValue);
        }
        get oddRowsCell() {
            return this.__oddRowsCell.get();
        }
        set oddRowsCell(newValue) {
            this.__oddRowsCell.set(newValue);
        }
        get evenRowsCell() {
            return this.__evenRowsCell.get();
        }
        set evenRowsCell(newValue) {
            this.__evenRowsCell.set(newValue);
        }
        get formattingInfo() {
            return this.__formattingInfo.get();
        }
        set formattingInfo(newValue) {
            this.__formattingInfo.set(newValue);
        }
        /**
         * Creates and returns a new DataGridColumn instance in the SDK and on the server.
         * The new DataGridColumn will be automatically stored in the 'columns' property
         * of the parent DataGrid element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, DataGridColumn, "columns", true);
        }
        /**
         * Creates and returns a new DataGridColumn instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, DataGridColumn);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.caption = ((text) => {
                text.translations.replace([
                    ((translation) => {
                        translation.languageCode = "en_US";
                        translation.text = "Column";
                        return translation;
                    })(texts_1.texts.Translation.create(this.model))
                ]);
                return text;
            })(texts_1.texts.Text.create(this.model));
            this.formattingInfo = pages_1.pages.FormattingInfo.create(this.model);
            this.oddRowsCell = DataGridCell.create(this.model);
            this.style = Style.create(this.model);
        }
    }
    DataGridColumn.structureTypeName = "DocumentTemplates$DataGridColumn";
    DataGridColumn.versionInfo = new exports.StructureVersionInfo({
        properties: {
            attributePath: {
                deleted: "7.11.0",
                deletionMessage: "Use property 'attributeRef' instead"
            },
            attributeRef: {
                introduced: "7.11.0"
            },
            caption: {
                required: {
                    currentValue: true
                }
            },
            style: {
                required: {
                    currentValue: true
                }
            },
            oddRowsCell: {
                required: {
                    currentValue: true
                }
            },
            formattingInfo: {
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    documenttemplates.DataGridColumn = DataGridColumn;
    /**
     * See: {@link https://docs.mendix.com/refguide/data-view-document-template relevant section in reference guide}
     */
    class DataView extends EntityWidget {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__contents = new internal.PartProperty(DataView, this, "contents", null, true);
            /** @internal */
            this.__microflow = new internal.ByNameReferenceProperty(DataView, this, "microflow", null, "Microflows$Microflow");
            if (arguments.length < 4) {
                throw new Error("new DataView() cannot be invoked directly, please use 'model.documenttemplates.createDataView()'");
            }
        }
        get containerAsDocumentTemplate() {
            return super.getContainerAs(DocumentTemplate);
        }
        get containerAsDropZone() {
            return super.getContainerAs(DropZone);
        }
        get contents() {
            return this.__contents.get();
        }
        set contents(newValue) {
            this.__contents.set(newValue);
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
         * Creates and returns a new DataView instance in the SDK and on the server.
         * The new DataView will be automatically stored in the 'toplevels' property
         * of the parent DocumentTemplate element passed as argument.
         */
        static createInDocumentTemplateUnderToplevels(container) {
            return internal.instancehelpers.createElement(container, DataView, "toplevels", true);
        }
        /**
         * Creates and returns a new DataView instance in the SDK and on the server.
         * The new DataView will be automatically stored in the 'widget' property
         * of the parent DropZone element passed as argument.
         */
        static createInDropZoneUnderWidget(container) {
            return internal.instancehelpers.createElement(container, DataView, "widget", false);
        }
        /**
         * Creates and returns a new DataView instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, DataView);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.contents = DataViewContents.create(this.model);
        }
    }
    DataView.structureTypeName = "DocumentTemplates$DataView";
    DataView.versionInfo = new exports.StructureVersionInfo({
        properties: {
            contents: {
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    documenttemplates.DataView = DataView;
    class DropZone extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__widget = new internal.PartProperty(DropZone, this, "widget", null, false);
            if (arguments.length < 4) {
                throw new Error("new DropZone() cannot be invoked directly, please use 'model.documenttemplates.createDropZone()'");
            }
        }
        get containerAsDataView() {
            return super.getContainerAs(DataView);
        }
        get containerAsDocumentTemplate() {
            return super.getContainerAs(DocumentTemplate);
        }
        get containerAsTableRow() {
            return super.getContainerAs(TableRow);
        }
        get containerAsTemplateGrid() {
            return super.getContainerAs(TemplateGrid);
        }
        get widget() {
            return this.__widget.get();
        }
        set widget(newValue) {
            this.__widget.set(newValue);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    DropZone.structureTypeName = "DocumentTemplates$DropZone";
    DropZone.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    documenttemplates.DropZone = DropZone;
    class DataViewContents extends DropZone {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new DataViewContents() cannot be invoked directly, please use 'model.documenttemplates.createDataViewContents()'");
            }
        }
        get containerAsDataView() {
            return super.getContainerAs(DataView);
        }
        /**
         * Creates and returns a new DataViewContents instance in the SDK and on the server.
         * The new DataViewContents will be automatically stored in the 'contents' property
         * of the parent DataView element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, DataViewContents, "contents", false);
        }
        /**
         * Creates and returns a new DataViewContents instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, DataViewContents);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    DataViewContents.structureTypeName = "DocumentTemplates$DataViewContents";
    DataViewContents.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    documenttemplates.DataViewContents = DataViewContents;
    /**
     * See: {@link https://docs.mendix.com/refguide/document-templates relevant section in reference guide}
     */
    class DocumentTemplate extends projects_1.projects.Document {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            /** @internal */
            this.__toplevels = new internal.PartListProperty(DocumentTemplate, this, "toplevels", []);
            /** @internal */
            this.__canvasWidth = new internal.PrimitiveProperty(DocumentTemplate, this, "canvasWidth", 800, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__pageWidth = new internal.PrimitiveProperty(DocumentTemplate, this, "pageWidth", "8.268", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__pageHeight = new internal.PrimitiveProperty(DocumentTemplate, this, "pageHeight", "11.693", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__ppi = new internal.PrimitiveProperty(DocumentTemplate, this, "ppi", 120, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__marginLeftInInch = new internal.PrimitiveProperty(DocumentTemplate, this, "marginLeftInInch", 0.5, internal.PrimitiveTypeEnum.Double);
            /** @internal */
            this.__marginRightInInch = new internal.PrimitiveProperty(DocumentTemplate, this, "marginRightInInch", 0.5, internal.PrimitiveTypeEnum.Double);
            /** @internal */
            this.__marginTopInInch = new internal.PrimitiveProperty(DocumentTemplate, this, "marginTopInInch", 0.5, internal.PrimitiveTypeEnum.Double);
            /** @internal */
            this.__marginBottomInInch = new internal.PrimitiveProperty(DocumentTemplate, this, "marginBottomInInch", 0.5, internal.PrimitiveTypeEnum.Double);
            /** @internal */
            this.__style = new internal.PartProperty(DocumentTemplate, this, "style", null, true);
            /** @internal */
            this.__header = new internal.PartProperty(DocumentTemplate, this, "header", null, false);
            /** @internal */
            this.__footer = new internal.PartProperty(DocumentTemplate, this, "footer", null, false);
            /** @internal */
            this.__showHeaderAndFooterOnFirstPage = new internal.PrimitiveProperty(DocumentTemplate, this, "showHeaderAndFooterOnFirstPage", true, internal.PrimitiveTypeEnum.Boolean);
            this._containmentName = "documents";
        }
        get containerAsFolderBase() {
            return super.getContainerAs(projects_1.projects.FolderBase);
        }
        get toplevels() {
            return this.__toplevels.get();
        }
        get canvasWidth() {
            return this.__canvasWidth.get();
        }
        set canvasWidth(newValue) {
            this.__canvasWidth.set(newValue);
        }
        get pageWidth() {
            return this.__pageWidth.get();
        }
        set pageWidth(newValue) {
            this.__pageWidth.set(newValue);
        }
        get pageHeight() {
            return this.__pageHeight.get();
        }
        set pageHeight(newValue) {
            this.__pageHeight.set(newValue);
        }
        get ppi() {
            return this.__ppi.get();
        }
        set ppi(newValue) {
            this.__ppi.set(newValue);
        }
        get marginLeftInInch() {
            return this.__marginLeftInInch.get();
        }
        set marginLeftInInch(newValue) {
            this.__marginLeftInInch.set(newValue);
        }
        get marginRightInInch() {
            return this.__marginRightInInch.get();
        }
        set marginRightInInch(newValue) {
            this.__marginRightInInch.set(newValue);
        }
        get marginTopInInch() {
            return this.__marginTopInInch.get();
        }
        set marginTopInInch(newValue) {
            this.__marginTopInInch.set(newValue);
        }
        get marginBottomInInch() {
            return this.__marginBottomInInch.get();
        }
        set marginBottomInInch(newValue) {
            this.__marginBottomInInch.set(newValue);
        }
        get style() {
            return this.__style.get();
        }
        set style(newValue) {
            this.__style.set(newValue);
        }
        get header() {
            return this.__header.get();
        }
        set header(newValue) {
            this.__header.set(newValue);
        }
        get footer() {
            return this.__footer.get();
        }
        set footer(newValue) {
            this.__footer.set(newValue);
        }
        get showHeaderAndFooterOnFirstPage() {
            return this.__showHeaderAndFooterOnFirstPage.get();
        }
        set showHeaderAndFooterOnFirstPage(newValue) {
            this.__showHeaderAndFooterOnFirstPage.set(newValue);
        }
        /**
         * Creates a new DocumentTemplate unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container) {
            return internal.instancehelpers.createUnit(container, DocumentTemplate);
        }
        /** @internal */
        _isByNameReferrable() {
            return this.__name.isAvailable;
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.canvasWidth = 800;
            this.marginBottomInInch = 0.5;
            this.marginLeftInInch = 0.5;
            this.marginRightInInch = 0.5;
            this.marginTopInInch = 0.5;
            this.pageHeight = "11.693";
            this.pageWidth = "8.268";
            this.ppi = 120;
            this.showHeaderAndFooterOnFirstPage = true;
            this.style = ((style) => {
                style.overrideFontFamily = true;
                style.overrideFontSize = true;
                style.overrideBold = true;
                style.overrideItalic = true;
                style.overrideFontColor = true;
                style.overrideBackgroundColor = true;
                return style;
            })(Style.create(this.model));
        }
    }
    DocumentTemplate.structureTypeName = "DocumentTemplates$DocumentTemplate";
    DocumentTemplate.versionInfo = new exports.StructureVersionInfo({
        properties: {
            style: {
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.ModelUnit);
    documenttemplates.DocumentTemplate = DocumentTemplate;
    class DocumentTemplateParameter extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__name = new internal.PrimitiveProperty(DocumentTemplateParameter, this, "name", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__type = new internal.PrimitiveProperty(DocumentTemplateParameter, this, "type", "Unknown", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__parameterType = new internal.PartProperty(DocumentTemplateParameter, this, "parameterType", null, true);
            if (arguments.length < 4) {
                throw new Error("new DocumentTemplateParameter() cannot be invoked directly, please use 'model.documenttemplates.createDocumentTemplateParameter()'");
            }
        }
        get containerAsDocumentTemplate() {
            return super.getContainerAs(DocumentTemplate);
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
    DocumentTemplateParameter.structureTypeName = "DocumentTemplates$DocumentTemplateParameter";
    DocumentTemplateParameter.versionInfo = new exports.StructureVersionInfo({
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
    documenttemplates.DocumentTemplateParameter = DocumentTemplateParameter;
    /**
     * See: {@link https://docs.mendix.com/refguide/dynamic-image-document-template relevant section in reference guide}
     */
    class DynamicImageViewer extends EntityWidget {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__defaultImage = new internal.ByNameReferenceProperty(DynamicImageViewer, this, "defaultImage", null, "Images$Image");
            /** @internal */
            this.__useThumbnail = new internal.PrimitiveProperty(DynamicImageViewer, this, "useThumbnail", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__width = new internal.PrimitiveProperty(DynamicImageViewer, this, "width", 0, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__height = new internal.PrimitiveProperty(DynamicImageViewer, this, "height", 0, internal.PrimitiveTypeEnum.Integer);
            if (arguments.length < 4) {
                throw new Error("new DynamicImageViewer() cannot be invoked directly, please use 'model.documenttemplates.createDynamicImageViewer()'");
            }
        }
        get containerAsDocumentTemplate() {
            return super.getContainerAs(DocumentTemplate);
        }
        get containerAsDropZone() {
            return super.getContainerAs(DropZone);
        }
        get defaultImage() {
            return this.__defaultImage.get();
        }
        set defaultImage(newValue) {
            this.__defaultImage.set(newValue);
        }
        get defaultImageQualifiedName() {
            return this.__defaultImage.qualifiedName();
        }
        get useThumbnail() {
            return this.__useThumbnail.get();
        }
        set useThumbnail(newValue) {
            this.__useThumbnail.set(newValue);
        }
        get width() {
            return this.__width.get();
        }
        set width(newValue) {
            this.__width.set(newValue);
        }
        get height() {
            return this.__height.get();
        }
        set height(newValue) {
            this.__height.set(newValue);
        }
        /**
         * Creates and returns a new DynamicImageViewer instance in the SDK and on the server.
         * The new DynamicImageViewer will be automatically stored in the 'toplevels' property
         * of the parent DocumentTemplate element passed as argument.
         */
        static createInDocumentTemplateUnderToplevels(container) {
            return internal.instancehelpers.createElement(container, DynamicImageViewer, "toplevels", true);
        }
        /**
         * Creates and returns a new DynamicImageViewer instance in the SDK and on the server.
         * The new DynamicImageViewer will be automatically stored in the 'widget' property
         * of the parent DropZone element passed as argument.
         */
        static createInDropZoneUnderWidget(container) {
            return internal.instancehelpers.createElement(container, DynamicImageViewer, "widget", false);
        }
        /**
         * Creates and returns a new DynamicImageViewer instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, DynamicImageViewer);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    DynamicImageViewer.structureTypeName = "DocumentTemplates$DynamicImageViewer";
    DynamicImageViewer.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    documenttemplates.DynamicImageViewer = DynamicImageViewer;
    /**
     * See: {@link https://docs.mendix.com/refguide/dynamic-label-document-template relevant section in reference guide}
     */
    class DynamicLabel extends AttributeWidget {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__style = new internal.PartProperty(DynamicLabel, this, "style", null, true);
            /** @internal */
            this.__renderXHTML = new internal.PrimitiveProperty(DynamicLabel, this, "renderXHTML", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__formattingInfo = new internal.PartProperty(DynamicLabel, this, "formattingInfo", null, true);
            if (arguments.length < 4) {
                throw new Error("new DynamicLabel() cannot be invoked directly, please use 'model.documenttemplates.createDynamicLabel()'");
            }
        }
        get containerAsDocumentTemplate() {
            return super.getContainerAs(DocumentTemplate);
        }
        get containerAsDropZone() {
            return super.getContainerAs(DropZone);
        }
        get style() {
            return this.__style.get();
        }
        set style(newValue) {
            this.__style.set(newValue);
        }
        get renderXHTML() {
            return this.__renderXHTML.get();
        }
        set renderXHTML(newValue) {
            this.__renderXHTML.set(newValue);
        }
        get formattingInfo() {
            return this.__formattingInfo.get();
        }
        set formattingInfo(newValue) {
            this.__formattingInfo.set(newValue);
        }
        /**
         * Creates and returns a new DynamicLabel instance in the SDK and on the server.
         * The new DynamicLabel will be automatically stored in the 'toplevels' property
         * of the parent DocumentTemplate element passed as argument.
         */
        static createInDocumentTemplateUnderToplevels(container) {
            return internal.instancehelpers.createElement(container, DynamicLabel, "toplevels", true);
        }
        /**
         * Creates and returns a new DynamicLabel instance in the SDK and on the server.
         * The new DynamicLabel will be automatically stored in the 'widget' property
         * of the parent DropZone element passed as argument.
         */
        static createInDropZoneUnderWidget(container) {
            return internal.instancehelpers.createElement(container, DynamicLabel, "widget", false);
        }
        /**
         * Creates and returns a new DynamicLabel instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, DynamicLabel);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.formattingInfo = pages_1.pages.FormattingInfo.create(this.model);
            this.style = Style.create(this.model);
        }
    }
    DynamicLabel.structureTypeName = "DocumentTemplates$DynamicLabel";
    DynamicLabel.versionInfo = new exports.StructureVersionInfo({
        properties: {
            style: {
                required: {
                    currentValue: true
                }
            },
            formattingInfo: {
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    documenttemplates.DynamicLabel = DynamicLabel;
    /**
     * See: {@link https://docs.mendix.com/refguide/footer-document-template relevant section in reference guide}
     */
    class Footer extends DropZone {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__bottomMargin = new internal.PrimitiveProperty(Footer, this, "bottomMargin", 0, internal.PrimitiveTypeEnum.Double);
            if (arguments.length < 4) {
                throw new Error("new Footer() cannot be invoked directly, please use 'model.documenttemplates.createFooter()'");
            }
        }
        get containerAsDocumentTemplate() {
            return super.getContainerAs(DocumentTemplate);
        }
        get bottomMargin() {
            return this.__bottomMargin.get();
        }
        set bottomMargin(newValue) {
            this.__bottomMargin.set(newValue);
        }
        /**
         * Creates and returns a new Footer instance in the SDK and on the server.
         * The new Footer will be automatically stored in the 'footer' property
         * of the parent DocumentTemplate element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, Footer, "footer", false);
        }
        /**
         * Creates and returns a new Footer instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, Footer);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    Footer.structureTypeName = "DocumentTemplates$Footer";
    Footer.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    documenttemplates.Footer = Footer;
    /**
     * See: {@link https://docs.mendix.com/refguide/sort-bar relevant section in reference guide}
     */
    class GridSortBar extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__sortItems = new internal.PartListProperty(GridSortBar, this, "sortItems", []);
            if (arguments.length < 4) {
                throw new Error("new GridSortBar() cannot be invoked directly, please use 'model.documenttemplates.createGridSortBar()'");
            }
        }
        get containerAsGrid() {
            return super.getContainerAs(Grid);
        }
        get sortItems() {
            return this.__sortItems.get();
        }
        /**
         * Creates and returns a new GridSortBar instance in the SDK and on the server.
         * The new GridSortBar will be automatically stored in the 'sortBar' property
         * of the parent Grid element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, GridSortBar, "sortBar", false);
        }
        /**
         * Creates and returns a new GridSortBar instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, GridSortBar);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    GridSortBar.structureTypeName = "DocumentTemplates$GridSortBar";
    GridSortBar.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    documenttemplates.GridSortBar = GridSortBar;
    class GridSortItem extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__attributePath = new internal.PrimitiveProperty(GridSortItem, this, "attributePath", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__attributeRef = new internal.PartProperty(GridSortItem, this, "attributeRef", null, true);
            /** @internal */
            this.__sortOrder = new internal.EnumProperty(GridSortItem, this, "sortOrder", pages_1.pages.SortDirection.Ascending, pages_1.pages.SortDirection);
            if (arguments.length < 4) {
                throw new Error("new GridSortItem() cannot be invoked directly, please use 'model.documenttemplates.createGridSortItem()'");
            }
        }
        get containerAsGridSortBar() {
            return super.getContainerAs(GridSortBar);
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
         * Creates and returns a new GridSortItem instance in the SDK and on the server.
         * The new GridSortItem will be automatically stored in the 'sortItems' property
         * of the parent GridSortBar element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, GridSortItem, "sortItems", true);
        }
        /**
         * Creates and returns a new GridSortItem instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, GridSortItem);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__attributeRef.isAvailable) {
                this.attributeRef = domainmodels_1.domainmodels.AttributeRef.create(this.model);
            }
            this.sortOrder = pages_1.pages.SortDirection.Ascending;
        }
    }
    GridSortItem.structureTypeName = "DocumentTemplates$GridSortItem";
    GridSortItem.versionInfo = new exports.StructureVersionInfo({
        properties: {
            attributePath: {
                deleted: "7.11.0",
                deletionMessage: "Use property 'attributeRef' instead"
            },
            attributeRef: {
                introduced: "7.11.0",
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    documenttemplates.GridSortItem = GridSortItem;
    /**
     * See: {@link https://docs.mendix.com/refguide/header-document-template relevant section in reference guide}
     */
    class Header extends DropZone {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__topMargin = new internal.PrimitiveProperty(Header, this, "topMargin", 0, internal.PrimitiveTypeEnum.Double);
            if (arguments.length < 4) {
                throw new Error("new Header() cannot be invoked directly, please use 'model.documenttemplates.createHeader()'");
            }
        }
        get containerAsDocumentTemplate() {
            return super.getContainerAs(DocumentTemplate);
        }
        get topMargin() {
            return this.__topMargin.get();
        }
        set topMargin(newValue) {
            this.__topMargin.set(newValue);
        }
        /**
         * Creates and returns a new Header instance in the SDK and on the server.
         * The new Header will be automatically stored in the 'header' property
         * of the parent DocumentTemplate element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, Header, "header", false);
        }
        /**
         * Creates and returns a new Header instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, Header);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    Header.structureTypeName = "DocumentTemplates$Header";
    Header.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    documenttemplates.Header = Header;
    /**
     * See: {@link https://docs.mendix.com/refguide/line-break-document-template relevant section in reference guide}
     */
    class LineBreak extends Widget {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new LineBreak() cannot be invoked directly, please use 'model.documenttemplates.createLineBreak()'");
            }
        }
        get containerAsDocumentTemplate() {
            return super.getContainerAs(DocumentTemplate);
        }
        get containerAsDropZone() {
            return super.getContainerAs(DropZone);
        }
        /**
         * Creates and returns a new LineBreak instance in the SDK and on the server.
         * The new LineBreak will be automatically stored in the 'toplevels' property
         * of the parent DocumentTemplate element passed as argument.
         */
        static createInDocumentTemplateUnderToplevels(container) {
            return internal.instancehelpers.createElement(container, LineBreak, "toplevels", true);
        }
        /**
         * Creates and returns a new LineBreak instance in the SDK and on the server.
         * The new LineBreak will be automatically stored in the 'widget' property
         * of the parent DropZone element passed as argument.
         */
        static createInDropZoneUnderWidget(container) {
            return internal.instancehelpers.createElement(container, LineBreak, "widget", false);
        }
        /**
         * Creates and returns a new LineBreak instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, LineBreak);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    LineBreak.structureTypeName = "DocumentTemplates$LineBreak";
    LineBreak.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    documenttemplates.LineBreak = LineBreak;
    /**
     * See: {@link https://docs.mendix.com/refguide/page-break-document-template relevant section in reference guide}
     */
    class PageBreak extends Widget {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new PageBreak() cannot be invoked directly, please use 'model.documenttemplates.createPageBreak()'");
            }
        }
        get containerAsDocumentTemplate() {
            return super.getContainerAs(DocumentTemplate);
        }
        get containerAsDropZone() {
            return super.getContainerAs(DropZone);
        }
        /**
         * Creates and returns a new PageBreak instance in the SDK and on the server.
         * The new PageBreak will be automatically stored in the 'toplevels' property
         * of the parent DocumentTemplate element passed as argument.
         */
        static createInDocumentTemplateUnderToplevels(container) {
            return internal.instancehelpers.createElement(container, PageBreak, "toplevels", true);
        }
        /**
         * Creates and returns a new PageBreak instance in the SDK and on the server.
         * The new PageBreak will be automatically stored in the 'widget' property
         * of the parent DropZone element passed as argument.
         */
        static createInDropZoneUnderWidget(container) {
            return internal.instancehelpers.createElement(container, PageBreak, "widget", false);
        }
        /**
         * Creates and returns a new PageBreak instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, PageBreak);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    PageBreak.structureTypeName = "DocumentTemplates$PageBreak";
    PageBreak.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    documenttemplates.PageBreak = PageBreak;
    /**
     * See: {@link https://docs.mendix.com/refguide/static-image-document-template relevant section in reference guide}
     */
    class StaticImageViewer extends Widget {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__image = new internal.ByNameReferenceProperty(StaticImageViewer, this, "image", null, "Images$Image");
            /** @internal */
            this.__width = new internal.PrimitiveProperty(StaticImageViewer, this, "width", 0, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__height = new internal.PrimitiveProperty(StaticImageViewer, this, "height", 0, internal.PrimitiveTypeEnum.Integer);
            if (arguments.length < 4) {
                throw new Error("new StaticImageViewer() cannot be invoked directly, please use 'model.documenttemplates.createStaticImageViewer()'");
            }
        }
        get containerAsDocumentTemplate() {
            return super.getContainerAs(DocumentTemplate);
        }
        get containerAsDropZone() {
            return super.getContainerAs(DropZone);
        }
        get image() {
            return this.__image.get();
        }
        set image(newValue) {
            this.__image.set(newValue);
        }
        get imageQualifiedName() {
            return this.__image.qualifiedName();
        }
        get width() {
            return this.__width.get();
        }
        set width(newValue) {
            this.__width.set(newValue);
        }
        get height() {
            return this.__height.get();
        }
        set height(newValue) {
            this.__height.set(newValue);
        }
        /**
         * Creates and returns a new StaticImageViewer instance in the SDK and on the server.
         * The new StaticImageViewer will be automatically stored in the 'toplevels' property
         * of the parent DocumentTemplate element passed as argument.
         */
        static createInDocumentTemplateUnderToplevels(container) {
            return internal.instancehelpers.createElement(container, StaticImageViewer, "toplevels", true);
        }
        /**
         * Creates and returns a new StaticImageViewer instance in the SDK and on the server.
         * The new StaticImageViewer will be automatically stored in the 'widget' property
         * of the parent DropZone element passed as argument.
         */
        static createInDropZoneUnderWidget(container) {
            return internal.instancehelpers.createElement(container, StaticImageViewer, "widget", false);
        }
        /**
         * Creates and returns a new StaticImageViewer instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, StaticImageViewer);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    StaticImageViewer.structureTypeName = "DocumentTemplates$StaticImageViewer";
    StaticImageViewer.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    documenttemplates.StaticImageViewer = StaticImageViewer;
    /**
     * See: {@link https://docs.mendix.com/refguide/static-label-document-template relevant section in reference guide}
     */
    class StaticLabel extends Widget {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__caption = new internal.PartProperty(StaticLabel, this, "caption", null, true);
            /** @internal */
            this.__style = new internal.PartProperty(StaticLabel, this, "style", null, true);
            if (arguments.length < 4) {
                throw new Error("new StaticLabel() cannot be invoked directly, please use 'model.documenttemplates.createStaticLabel()'");
            }
        }
        get containerAsDocumentTemplate() {
            return super.getContainerAs(DocumentTemplate);
        }
        get containerAsDropZone() {
            return super.getContainerAs(DropZone);
        }
        get caption() {
            return this.__caption.get();
        }
        set caption(newValue) {
            this.__caption.set(newValue);
        }
        get style() {
            return this.__style.get();
        }
        set style(newValue) {
            this.__style.set(newValue);
        }
        /**
         * Creates and returns a new StaticLabel instance in the SDK and on the server.
         * The new StaticLabel will be automatically stored in the 'toplevels' property
         * of the parent DocumentTemplate element passed as argument.
         */
        static createInDocumentTemplateUnderToplevels(container) {
            return internal.instancehelpers.createElement(container, StaticLabel, "toplevels", true);
        }
        /**
         * Creates and returns a new StaticLabel instance in the SDK and on the server.
         * The new StaticLabel will be automatically stored in the 'widget' property
         * of the parent DropZone element passed as argument.
         */
        static createInDropZoneUnderWidget(container) {
            return internal.instancehelpers.createElement(container, StaticLabel, "widget", false);
        }
        /**
         * Creates and returns a new StaticLabel instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, StaticLabel);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.caption = ((text) => {
                text.translations.replace([
                    ((translation) => {
                        translation.languageCode = "en_US";
                        translation.text = "Label";
                        return translation;
                    })(texts_1.texts.Translation.create(this.model))
                ]);
                return text;
            })(texts_1.texts.Text.create(this.model));
            this.style = Style.create(this.model);
        }
    }
    StaticLabel.structureTypeName = "DocumentTemplates$StaticLabel";
    StaticLabel.versionInfo = new exports.StructureVersionInfo({
        properties: {
            caption: {
                required: {
                    currentValue: true
                }
            },
            style: {
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    documenttemplates.StaticLabel = StaticLabel;
    /**
     * See: {@link https://docs.mendix.com/refguide/style relevant section in reference guide}
     */
    class Style extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__fontFamily = new internal.EnumProperty(Style, this, "fontFamily", FontFamily.Helvetica, FontFamily);
            /** @internal */
            this.__fontSize = new internal.PrimitiveProperty(Style, this, "fontSize", 10, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__bold = new internal.PrimitiveProperty(Style, this, "bold", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__italic = new internal.PrimitiveProperty(Style, this, "italic", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__fontColor = new internal.PrimitiveProperty(Style, this, "fontColor", { red: 0, green: 0, blue: 0 }, internal.PrimitiveTypeEnum.Color);
            /** @internal */
            this.__backgroundColor = new internal.PrimitiveProperty(Style, this, "backgroundColor", { red: 255, green: 255, blue: 255 }, internal.PrimitiveTypeEnum.Color);
            /** @internal */
            this.__overrideFontFamily = new internal.PrimitiveProperty(Style, this, "overrideFontFamily", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__overrideFontSize = new internal.PrimitiveProperty(Style, this, "overrideFontSize", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__overrideBold = new internal.PrimitiveProperty(Style, this, "overrideBold", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__overrideItalic = new internal.PrimitiveProperty(Style, this, "overrideItalic", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__overrideFontColor = new internal.PrimitiveProperty(Style, this, "overrideFontColor", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__overrideBackgroundColor = new internal.PrimitiveProperty(Style, this, "overrideBackgroundColor", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__borderStyleTop = new internal.EnumProperty(Style, this, "borderStyleTop", BorderStyle.None, BorderStyle);
            /** @internal */
            this.__borderStyleBottom = new internal.EnumProperty(Style, this, "borderStyleBottom", BorderStyle.None, BorderStyle);
            /** @internal */
            this.__borderStyleLeft = new internal.EnumProperty(Style, this, "borderStyleLeft", BorderStyle.None, BorderStyle);
            /** @internal */
            this.__borderStyleRight = new internal.EnumProperty(Style, this, "borderStyleRight", BorderStyle.None, BorderStyle);
            /** @internal */
            this.__borderWidthTop = new internal.PrimitiveProperty(Style, this, "borderWidthTop", 1, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__borderWidthBottom = new internal.PrimitiveProperty(Style, this, "borderWidthBottom", 1, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__borderWidthLeft = new internal.PrimitiveProperty(Style, this, "borderWidthLeft", 1, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__borderWidthRight = new internal.PrimitiveProperty(Style, this, "borderWidthRight", 1, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__borderColorTop = new internal.PrimitiveProperty(Style, this, "borderColorTop", { red: 0, green: 0, blue: 0 }, internal.PrimitiveTypeEnum.Color);
            /** @internal */
            this.__borderColorBottom = new internal.PrimitiveProperty(Style, this, "borderColorBottom", { red: 0, green: 0, blue: 0 }, internal.PrimitiveTypeEnum.Color);
            /** @internal */
            this.__borderColorLeft = new internal.PrimitiveProperty(Style, this, "borderColorLeft", { red: 0, green: 0, blue: 0 }, internal.PrimitiveTypeEnum.Color);
            /** @internal */
            this.__borderColorRight = new internal.PrimitiveProperty(Style, this, "borderColorRight", { red: 0, green: 0, blue: 0 }, internal.PrimitiveTypeEnum.Color);
            /** @internal */
            this.__textAlign = new internal.EnumProperty(Style, this, "textAlign", TextAlign.Left, TextAlign);
            /** @internal */
            this.__customStyles = new internal.PrimitiveProperty(Style, this, "customStyles", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new Style() cannot be invoked directly, please use 'model.documenttemplates.createStyle()'");
            }
        }
        get containerAsDataGridCell() {
            return super.getContainerAs(DataGridCell);
        }
        get containerAsDataGridColumn() {
            return super.getContainerAs(DataGridColumn);
        }
        get containerAsDocumentTemplate() {
            return super.getContainerAs(DocumentTemplate);
        }
        get containerAsDynamicLabel() {
            return super.getContainerAs(DynamicLabel);
        }
        get containerAsGrid() {
            return super.getContainerAs(Grid);
        }
        get containerAsStaticLabel() {
            return super.getContainerAs(StaticLabel);
        }
        get containerAsTable() {
            return super.getContainerAs(Table);
        }
        get containerAsTableCell() {
            return super.getContainerAs(TableCell);
        }
        get containerAsTitle() {
            return super.getContainerAs(Title);
        }
        get fontFamily() {
            return this.__fontFamily.get();
        }
        set fontFamily(newValue) {
            this.__fontFamily.set(newValue);
        }
        get fontSize() {
            return this.__fontSize.get();
        }
        set fontSize(newValue) {
            this.__fontSize.set(newValue);
        }
        get bold() {
            return this.__bold.get();
        }
        set bold(newValue) {
            this.__bold.set(newValue);
        }
        get italic() {
            return this.__italic.get();
        }
        set italic(newValue) {
            this.__italic.set(newValue);
        }
        get fontColor() {
            return this.__fontColor.get();
        }
        set fontColor(newValue) {
            this.__fontColor.set(newValue);
        }
        get backgroundColor() {
            return this.__backgroundColor.get();
        }
        set backgroundColor(newValue) {
            this.__backgroundColor.set(newValue);
        }
        get overrideFontFamily() {
            return this.__overrideFontFamily.get();
        }
        set overrideFontFamily(newValue) {
            this.__overrideFontFamily.set(newValue);
        }
        get overrideFontSize() {
            return this.__overrideFontSize.get();
        }
        set overrideFontSize(newValue) {
            this.__overrideFontSize.set(newValue);
        }
        get overrideBold() {
            return this.__overrideBold.get();
        }
        set overrideBold(newValue) {
            this.__overrideBold.set(newValue);
        }
        get overrideItalic() {
            return this.__overrideItalic.get();
        }
        set overrideItalic(newValue) {
            this.__overrideItalic.set(newValue);
        }
        get overrideFontColor() {
            return this.__overrideFontColor.get();
        }
        set overrideFontColor(newValue) {
            this.__overrideFontColor.set(newValue);
        }
        get overrideBackgroundColor() {
            return this.__overrideBackgroundColor.get();
        }
        set overrideBackgroundColor(newValue) {
            this.__overrideBackgroundColor.set(newValue);
        }
        get borderStyleTop() {
            return this.__borderStyleTop.get();
        }
        set borderStyleTop(newValue) {
            this.__borderStyleTop.set(newValue);
        }
        get borderStyleBottom() {
            return this.__borderStyleBottom.get();
        }
        set borderStyleBottom(newValue) {
            this.__borderStyleBottom.set(newValue);
        }
        get borderStyleLeft() {
            return this.__borderStyleLeft.get();
        }
        set borderStyleLeft(newValue) {
            this.__borderStyleLeft.set(newValue);
        }
        get borderStyleRight() {
            return this.__borderStyleRight.get();
        }
        set borderStyleRight(newValue) {
            this.__borderStyleRight.set(newValue);
        }
        get borderWidthTop() {
            return this.__borderWidthTop.get();
        }
        set borderWidthTop(newValue) {
            this.__borderWidthTop.set(newValue);
        }
        get borderWidthBottom() {
            return this.__borderWidthBottom.get();
        }
        set borderWidthBottom(newValue) {
            this.__borderWidthBottom.set(newValue);
        }
        get borderWidthLeft() {
            return this.__borderWidthLeft.get();
        }
        set borderWidthLeft(newValue) {
            this.__borderWidthLeft.set(newValue);
        }
        get borderWidthRight() {
            return this.__borderWidthRight.get();
        }
        set borderWidthRight(newValue) {
            this.__borderWidthRight.set(newValue);
        }
        get borderColorTop() {
            return this.__borderColorTop.get();
        }
        set borderColorTop(newValue) {
            this.__borderColorTop.set(newValue);
        }
        get borderColorBottom() {
            return this.__borderColorBottom.get();
        }
        set borderColorBottom(newValue) {
            this.__borderColorBottom.set(newValue);
        }
        get borderColorLeft() {
            return this.__borderColorLeft.get();
        }
        set borderColorLeft(newValue) {
            this.__borderColorLeft.set(newValue);
        }
        get borderColorRight() {
            return this.__borderColorRight.get();
        }
        set borderColorRight(newValue) {
            this.__borderColorRight.set(newValue);
        }
        get textAlign() {
            return this.__textAlign.get();
        }
        set textAlign(newValue) {
            this.__textAlign.set(newValue);
        }
        get customStyles() {
            return this.__customStyles.get();
        }
        set customStyles(newValue) {
            this.__customStyles.set(newValue);
        }
        /**
         * Creates and returns a new Style instance in the SDK and on the server.
         * The new Style will be automatically stored in the 'style' property
         * of the parent DataGridCell element passed as argument.
         */
        static createInDataGridCellUnderStyle(container) {
            return internal.instancehelpers.createElement(container, Style, "style", false);
        }
        /**
         * Creates and returns a new Style instance in the SDK and on the server.
         * The new Style will be automatically stored in the 'style' property
         * of the parent DataGridColumn element passed as argument.
         */
        static createInDataGridColumnUnderStyle(container) {
            return internal.instancehelpers.createElement(container, Style, "style", false);
        }
        /**
         * Creates and returns a new Style instance in the SDK and on the server.
         * The new Style will be automatically stored in the 'style' property
         * of the parent DocumentTemplate element passed as argument.
         */
        static createInDocumentTemplateUnderStyle(container) {
            return internal.instancehelpers.createElement(container, Style, "style", false);
        }
        /**
         * Creates and returns a new Style instance in the SDK and on the server.
         * The new Style will be automatically stored in the 'style' property
         * of the parent DynamicLabel element passed as argument.
         */
        static createInDynamicLabelUnderStyle(container) {
            return internal.instancehelpers.createElement(container, Style, "style", false);
        }
        /**
         * Creates and returns a new Style instance in the SDK and on the server.
         * The new Style will be automatically stored in the 'style' property
         * of the parent Grid element passed as argument.
         */
        static createInGridUnderStyle(container) {
            return internal.instancehelpers.createElement(container, Style, "style", false);
        }
        /**
         * Creates and returns a new Style instance in the SDK and on the server.
         * The new Style will be automatically stored in the 'style' property
         * of the parent StaticLabel element passed as argument.
         */
        static createInStaticLabelUnderStyle(container) {
            return internal.instancehelpers.createElement(container, Style, "style", false);
        }
        /**
         * Creates and returns a new Style instance in the SDK and on the server.
         * The new Style will be automatically stored in the 'style' property
         * of the parent Table element passed as argument.
         */
        static createInTableUnderStyle(container) {
            return internal.instancehelpers.createElement(container, Style, "style", false);
        }
        /**
         * Creates and returns a new Style instance in the SDK and on the server.
         * The new Style will be automatically stored in the 'style' property
         * of the parent TableCell element passed as argument.
         */
        static createInTableCellUnderStyle(container) {
            return internal.instancehelpers.createElement(container, Style, "style", false);
        }
        /**
         * Creates and returns a new Style instance in the SDK and on the server.
         * The new Style will be automatically stored in the 'style' property
         * of the parent Title element passed as argument.
         */
        static createInTitleUnderStyle(container) {
            return internal.instancehelpers.createElement(container, Style, "style", false);
        }
        /**
         * Creates and returns a new Style instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, Style);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.backgroundColor = { red: 255, green: 255, blue: 255 };
            this.borderColorBottom = { red: 0, green: 0, blue: 0 };
            this.borderColorLeft = { red: 0, green: 0, blue: 0 };
            this.borderColorRight = { red: 0, green: 0, blue: 0 };
            this.borderColorTop = { red: 0, green: 0, blue: 0 };
            this.borderStyleBottom = BorderStyle.None;
            this.borderStyleLeft = BorderStyle.None;
            this.borderStyleRight = BorderStyle.None;
            this.borderStyleTop = BorderStyle.None;
            this.borderWidthBottom = 1;
            this.borderWidthLeft = 1;
            this.borderWidthRight = 1;
            this.borderWidthTop = 1;
            this.fontColor = { red: 0, green: 0, blue: 0 };
            (() => {
                if (internal.isAtLeast("8.0.0", this.model)) {
                    this.fontFamily = FontFamily.Helvetica;
                    return;
                }
                this.fontFamily = FontFamily.Arial;
            })();
            this.fontSize = 10;
            this.textAlign = TextAlign.Left;
        }
    }
    Style.structureTypeName = "DocumentTemplates$Style";
    Style.versionInfo = new exports.StructureVersionInfo({
        properties: {
            fontFamily: {}
        }
    }, internal.StructureType.Element);
    documenttemplates.Style = Style;
    /**
     * See: {@link https://docs.mendix.com/refguide/table-document-template relevant section in reference guide}
     */
    class Table extends Widget {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__rows = new internal.PartListProperty(Table, this, "rows", []);
            /** @internal */
            this.__columnWeights = new internal.PrimitiveListProperty(Table, this, "columnWeights", [], internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__cellSpacing = new internal.PrimitiveProperty(Table, this, "cellSpacing", 0, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__cellPadding = new internal.PrimitiveProperty(Table, this, "cellPadding", 0, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__style = new internal.PartProperty(Table, this, "style", null, true);
            if (arguments.length < 4) {
                throw new Error("new Table() cannot be invoked directly, please use 'model.documenttemplates.createTable()'");
            }
        }
        get containerAsDocumentTemplate() {
            return super.getContainerAs(DocumentTemplate);
        }
        get containerAsDropZone() {
            return super.getContainerAs(DropZone);
        }
        get rows() {
            return this.__rows.get();
        }
        get columnWeights() {
            return this.__columnWeights.get();
        }
        get cellSpacing() {
            return this.__cellSpacing.get();
        }
        set cellSpacing(newValue) {
            this.__cellSpacing.set(newValue);
        }
        get cellPadding() {
            return this.__cellPadding.get();
        }
        set cellPadding(newValue) {
            this.__cellPadding.set(newValue);
        }
        get style() {
            return this.__style.get();
        }
        set style(newValue) {
            this.__style.set(newValue);
        }
        /**
         * Creates and returns a new Table instance in the SDK and on the server.
         * The new Table will be automatically stored in the 'toplevels' property
         * of the parent DocumentTemplate element passed as argument.
         */
        static createInDocumentTemplateUnderToplevels(container) {
            return internal.instancehelpers.createElement(container, Table, "toplevels", true);
        }
        /**
         * Creates and returns a new Table instance in the SDK and on the server.
         * The new Table will be automatically stored in the 'widget' property
         * of the parent DropZone element passed as argument.
         */
        static createInDropZoneUnderWidget(container) {
            return internal.instancehelpers.createElement(container, Table, "widget", false);
        }
        /**
         * Creates and returns a new Table instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, Table);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.columnWeights.replace([100]);
            this.rows.replace([TableRow.create(this.model)]);
            this.style = Style.create(this.model);
        }
    }
    Table.structureTypeName = "DocumentTemplates$Table";
    Table.versionInfo = new exports.StructureVersionInfo({
        properties: {
            style: {
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    documenttemplates.Table = Table;
    /**
     * See: {@link https://docs.mendix.com/refguide/cell-document-template relevant section in reference guide}
     */
    class TableCell extends DropZone {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__colSpan = new internal.PrimitiveProperty(TableCell, this, "colSpan", 1, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__rowSpan = new internal.PrimitiveProperty(TableCell, this, "rowSpan", 1, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__isPartOfSpan = new internal.PrimitiveProperty(TableCell, this, "isPartOfSpan", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__style = new internal.PartProperty(TableCell, this, "style", null, true);
            if (arguments.length < 4) {
                throw new Error("new TableCell() cannot be invoked directly, please use 'model.documenttemplates.createTableCell()'");
            }
        }
        get containerAsTableRow() {
            return super.getContainerAs(TableRow);
        }
        get colSpan() {
            return this.__colSpan.get();
        }
        set colSpan(newValue) {
            this.__colSpan.set(newValue);
        }
        get rowSpan() {
            return this.__rowSpan.get();
        }
        set rowSpan(newValue) {
            this.__rowSpan.set(newValue);
        }
        get isPartOfSpan() {
            return this.__isPartOfSpan.get();
        }
        set isPartOfSpan(newValue) {
            this.__isPartOfSpan.set(newValue);
        }
        get style() {
            return this.__style.get();
        }
        set style(newValue) {
            this.__style.set(newValue);
        }
        /**
         * Creates and returns a new TableCell instance in the SDK and on the server.
         * The new TableCell will be automatically stored in the 'cells' property
         * of the parent TableRow element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, TableCell, "cells", true);
        }
        /**
         * Creates and returns a new TableCell instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, TableCell);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.colSpan = 1;
            this.rowSpan = 1;
            this.style = Style.create(this.model);
        }
    }
    TableCell.structureTypeName = "DocumentTemplates$TableCell";
    TableCell.versionInfo = new exports.StructureVersionInfo({
        properties: {
            style: {
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    documenttemplates.TableCell = TableCell;
    /**
     * See: {@link https://docs.mendix.com/refguide/row-document-template relevant section in reference guide}
     */
    class TableRow extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__cells = new internal.PartListProperty(TableRow, this, "cells", []);
            /** @internal */
            this.__conditionSettings = new internal.PartProperty(TableRow, this, "conditionSettings", null, true);
            if (arguments.length < 4) {
                throw new Error("new TableRow() cannot be invoked directly, please use 'model.documenttemplates.createTableRow()'");
            }
        }
        get containerAsTable() {
            return super.getContainerAs(Table);
        }
        get cells() {
            return this.__cells.get();
        }
        get conditionSettings() {
            return this.__conditionSettings.get();
        }
        set conditionSettings(newValue) {
            this.__conditionSettings.set(newValue);
        }
        /**
         * Creates and returns a new TableRow instance in the SDK and on the server.
         * The new TableRow will be automatically stored in the 'rows' property
         * of the parent Table element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, TableRow, "rows", true);
        }
        /**
         * Creates and returns a new TableRow instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, TableRow);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.cells.replace([TableCell.create(this.model)]);
            this.conditionSettings = ConditionSettings.create(this.model);
        }
    }
    TableRow.structureTypeName = "DocumentTemplates$TableRow";
    TableRow.versionInfo = new exports.StructureVersionInfo({
        properties: {
            conditionSettings: {
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    documenttemplates.TableRow = TableRow;
    /**
     * See: {@link https://docs.mendix.com/refguide/template-grid-document-template relevant section in reference guide}
     */
    class TemplateGrid extends Grid {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__numberOfColumns = new internal.PrimitiveProperty(TemplateGrid, this, "numberOfColumns", 2, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__oddRowsContents = new internal.PartProperty(TemplateGrid, this, "oddRowsContents", null, true);
            /** @internal */
            this.__evenRowsContents = new internal.PartProperty(TemplateGrid, this, "evenRowsContents", null, false);
            if (arguments.length < 4) {
                throw new Error("new TemplateGrid() cannot be invoked directly, please use 'model.documenttemplates.createTemplateGrid()'");
            }
        }
        get containerAsDocumentTemplate() {
            return super.getContainerAs(DocumentTemplate);
        }
        get containerAsDropZone() {
            return super.getContainerAs(DropZone);
        }
        get numberOfColumns() {
            return this.__numberOfColumns.get();
        }
        set numberOfColumns(newValue) {
            this.__numberOfColumns.set(newValue);
        }
        get oddRowsContents() {
            return this.__oddRowsContents.get();
        }
        set oddRowsContents(newValue) {
            this.__oddRowsContents.set(newValue);
        }
        get evenRowsContents() {
            return this.__evenRowsContents.get();
        }
        set evenRowsContents(newValue) {
            this.__evenRowsContents.set(newValue);
        }
        /**
         * Creates and returns a new TemplateGrid instance in the SDK and on the server.
         * The new TemplateGrid will be automatically stored in the 'toplevels' property
         * of the parent DocumentTemplate element passed as argument.
         */
        static createInDocumentTemplateUnderToplevels(container) {
            return internal.instancehelpers.createElement(container, TemplateGrid, "toplevels", true);
        }
        /**
         * Creates and returns a new TemplateGrid instance in the SDK and on the server.
         * The new TemplateGrid will be automatically stored in the 'widget' property
         * of the parent DropZone element passed as argument.
         */
        static createInDropZoneUnderWidget(container) {
            return internal.instancehelpers.createElement(container, TemplateGrid, "widget", false);
        }
        /**
         * Creates and returns a new TemplateGrid instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, TemplateGrid);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.numberOfColumns = 2;
            this.oddRowsContents = TemplateGridContents.create(this.model);
        }
    }
    TemplateGrid.structureTypeName = "DocumentTemplates$TemplateGrid";
    TemplateGrid.versionInfo = new exports.StructureVersionInfo({
        properties: {
            oddRowsContents: {
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    documenttemplates.TemplateGrid = TemplateGrid;
    class TemplateGridContents extends DropZone {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new TemplateGridContents() cannot be invoked directly, please use 'model.documenttemplates.createTemplateGridContents()'");
            }
        }
        get containerAsTemplateGrid() {
            return super.getContainerAs(TemplateGrid);
        }
        /**
         * Creates and returns a new TemplateGridContents instance in the SDK and on the server.
         * The new TemplateGridContents will be automatically stored in the 'evenRowsContents' property
         * of the parent TemplateGrid element passed as argument.
         */
        static createInTemplateGridUnderEvenRowsContents(container) {
            return internal.instancehelpers.createElement(container, TemplateGridContents, "evenRowsContents", false);
        }
        /**
         * Creates and returns a new TemplateGridContents instance in the SDK and on the server.
         * The new TemplateGridContents will be automatically stored in the 'oddRowsContents' property
         * of the parent TemplateGrid element passed as argument.
         */
        static createInTemplateGridUnderOddRowsContents(container) {
            return internal.instancehelpers.createElement(container, TemplateGridContents, "oddRowsContents", false);
        }
        /**
         * Creates and returns a new TemplateGridContents instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, TemplateGridContents);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    TemplateGridContents.structureTypeName = "DocumentTemplates$TemplateGridContents";
    TemplateGridContents.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    documenttemplates.TemplateGridContents = TemplateGridContents;
    /**
     * See: {@link https://docs.mendix.com/refguide/title-document-template relevant section in reference guide}
     */
    class Title extends Widget {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__caption = new internal.PartProperty(Title, this, "caption", null, true);
            /** @internal */
            this.__style = new internal.PartProperty(Title, this, "style", null, true);
            if (arguments.length < 4) {
                throw new Error("new Title() cannot be invoked directly, please use 'model.documenttemplates.createTitle()'");
            }
        }
        get containerAsDocumentTemplate() {
            return super.getContainerAs(DocumentTemplate);
        }
        get containerAsDropZone() {
            return super.getContainerAs(DropZone);
        }
        get caption() {
            return this.__caption.get();
        }
        set caption(newValue) {
            this.__caption.set(newValue);
        }
        get style() {
            return this.__style.get();
        }
        set style(newValue) {
            this.__style.set(newValue);
        }
        /**
         * Creates and returns a new Title instance in the SDK and on the server.
         * The new Title will be automatically stored in the 'toplevels' property
         * of the parent DocumentTemplate element passed as argument.
         */
        static createInDocumentTemplateUnderToplevels(container) {
            return internal.instancehelpers.createElement(container, Title, "toplevels", true);
        }
        /**
         * Creates and returns a new Title instance in the SDK and on the server.
         * The new Title will be automatically stored in the 'widget' property
         * of the parent DropZone element passed as argument.
         */
        static createInDropZoneUnderWidget(container) {
            return internal.instancehelpers.createElement(container, Title, "widget", false);
        }
        /**
         * Creates and returns a new Title instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, Title);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.caption = ((text) => {
                text.translations.replace([
                    ((translation) => {
                        translation.languageCode = "en_US";
                        translation.text = "Title";
                        return translation;
                    })(texts_1.texts.Translation.create(this.model))
                ]);
                return text;
            })(texts_1.texts.Text.create(this.model));
            this.style = Style.create(this.model);
        }
    }
    Title.structureTypeName = "DocumentTemplates$Title";
    Title.versionInfo = new exports.StructureVersionInfo({
        properties: {
            caption: {
                required: {
                    currentValue: true
                }
            },
            style: {
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    documenttemplates.Title = Title;
})(documenttemplates = exports.documenttemplates || (exports.documenttemplates = {}));
const datatypes_1 = require("./datatypes");
const domainmodels_1 = require("./domainmodels");
const pages_1 = require("./pages");
const texts_1 = require("./texts");
//# sourceMappingURL=documenttemplates.js.map