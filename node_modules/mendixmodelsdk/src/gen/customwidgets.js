"use strict";
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.customwidgets = exports.StructureVersionInfo = void 0;
const internal = require("../sdk/internal");
exports.StructureVersionInfo = internal.StructureVersionInfo;
const pages_1 = require("./pages");
var customwidgets;
(function (customwidgets) {
    class CustomWidgetAssociationType extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "customwidgets.CustomWidgetAssociationType";
        }
    }
    CustomWidgetAssociationType.Reference = new CustomWidgetAssociationType("Reference", {});
    CustomWidgetAssociationType.ReferenceSet = new CustomWidgetAssociationType("ReferenceSet", {
        introduced: "9.13.0"
    });
    customwidgets.CustomWidgetAssociationType = CustomWidgetAssociationType;
    class CustomWidgetAttributeType extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "customwidgets.CustomWidgetAttributeType";
        }
    }
    CustomWidgetAttributeType.AutoNumber = new CustomWidgetAttributeType("AutoNumber", {});
    CustomWidgetAttributeType.Binary = new CustomWidgetAttributeType("Binary", {});
    CustomWidgetAttributeType.Boolean = new CustomWidgetAttributeType("Boolean", {});
    CustomWidgetAttributeType.Currency = new CustomWidgetAttributeType("Currency", {});
    CustomWidgetAttributeType.DateTime = new CustomWidgetAttributeType("DateTime", {});
    CustomWidgetAttributeType.Enum = new CustomWidgetAttributeType("Enum", {});
    CustomWidgetAttributeType.Float = new CustomWidgetAttributeType("Float", {});
    CustomWidgetAttributeType.HashString = new CustomWidgetAttributeType("HashString", {});
    CustomWidgetAttributeType.Integer = new CustomWidgetAttributeType("Integer", {});
    CustomWidgetAttributeType.Long = new CustomWidgetAttributeType("Long", {});
    CustomWidgetAttributeType.String = new CustomWidgetAttributeType("String", {});
    CustomWidgetAttributeType.Decimal = new CustomWidgetAttributeType("Decimal", {});
    customwidgets.CustomWidgetAttributeType = CustomWidgetAttributeType;
    class IsPath extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "customwidgets.IsPath";
        }
    }
    IsPath.No = new IsPath("No", {});
    IsPath.Optional = new IsPath("Optional", {});
    IsPath.Yes = new IsPath("Yes", {});
    customwidgets.IsPath = IsPath;
    class PathType extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "customwidgets.PathType";
        }
    }
    PathType.None = new PathType("None", {});
    PathType.Reference = new PathType("Reference", {});
    PathType.ReferenceSet = new PathType("ReferenceSet", {});
    customwidgets.PathType = PathType;
    class SystemPropertyEnum extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "customwidgets.SystemPropertyEnum";
        }
    }
    SystemPropertyEnum.Label = new SystemPropertyEnum("Label", {});
    SystemPropertyEnum.Name = new SystemPropertyEnum("Name", {});
    SystemPropertyEnum.TabIndex = new SystemPropertyEnum("TabIndex", {});
    SystemPropertyEnum.Editability = new SystemPropertyEnum("Editability", {
        introduced: "8.1.0"
    });
    SystemPropertyEnum.Visibility = new SystemPropertyEnum("Visibility", {
        introduced: "8.1.0"
    });
    customwidgets.SystemPropertyEnum = SystemPropertyEnum;
    class WidgetReturnTypeEnum extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "customwidgets.WidgetReturnTypeEnum";
        }
    }
    WidgetReturnTypeEnum.Void = new WidgetReturnTypeEnum("Void", {});
    WidgetReturnTypeEnum.Boolean = new WidgetReturnTypeEnum("Boolean", {});
    WidgetReturnTypeEnum.Integer = new WidgetReturnTypeEnum("Integer", {});
    WidgetReturnTypeEnum.Float = new WidgetReturnTypeEnum("Float", {});
    WidgetReturnTypeEnum.DateTime = new WidgetReturnTypeEnum("DateTime", {});
    WidgetReturnTypeEnum.String = new WidgetReturnTypeEnum("String", {});
    WidgetReturnTypeEnum.Object = new WidgetReturnTypeEnum("Object", {});
    WidgetReturnTypeEnum.Decimal = new WidgetReturnTypeEnum("Decimal", {});
    customwidgets.WidgetReturnTypeEnum = WidgetReturnTypeEnum;
    class WidgetValueTypeEnum extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "customwidgets.WidgetValueTypeEnum";
        }
    }
    WidgetValueTypeEnum.Action = new WidgetValueTypeEnum("Action", {
        introduced: "7.19.0"
    });
    WidgetValueTypeEnum.Attribute = new WidgetValueTypeEnum("Attribute", {});
    WidgetValueTypeEnum.Association = new WidgetValueTypeEnum("Association", {
        introduced: "9.10.0"
    });
    WidgetValueTypeEnum.Boolean = new WidgetValueTypeEnum("Boolean", {});
    WidgetValueTypeEnum.DataSource = new WidgetValueTypeEnum("DataSource", {
        introduced: "8.3.0"
    });
    WidgetValueTypeEnum.Entity = new WidgetValueTypeEnum("Entity", {});
    WidgetValueTypeEnum.EntityConstraint = new WidgetValueTypeEnum("EntityConstraint", {});
    WidgetValueTypeEnum.Enumeration = new WidgetValueTypeEnum("Enumeration", {});
    WidgetValueTypeEnum.Expression = new WidgetValueTypeEnum("Expression", {
        introduced: "8.0.0"
    });
    WidgetValueTypeEnum.File = new WidgetValueTypeEnum("File", {
        introduced: "8.5.0"
    });
    WidgetValueTypeEnum.Form = new WidgetValueTypeEnum("Form", {});
    WidgetValueTypeEnum.Icon = new WidgetValueTypeEnum("Icon", {
        introduced: "8.0.0"
    });
    WidgetValueTypeEnum.Image = new WidgetValueTypeEnum("Image", {});
    WidgetValueTypeEnum.Integer = new WidgetValueTypeEnum("Integer", {});
    WidgetValueTypeEnum.Decimal = new WidgetValueTypeEnum("Decimal", {
        introduced: "8.4.0"
    });
    WidgetValueTypeEnum.Microflow = new WidgetValueTypeEnum("Microflow", {});
    WidgetValueTypeEnum.Nanoflow = new WidgetValueTypeEnum("Nanoflow", {
        introduced: "7.13.0"
    });
    WidgetValueTypeEnum.Object = new WidgetValueTypeEnum("Object", {});
    WidgetValueTypeEnum.String = new WidgetValueTypeEnum("String", {});
    WidgetValueTypeEnum.TranslatableString = new WidgetValueTypeEnum("TranslatableString", {});
    WidgetValueTypeEnum.TextTemplate = new WidgetValueTypeEnum("TextTemplate", {
        introduced: "7.23.0"
    });
    WidgetValueTypeEnum.System = new WidgetValueTypeEnum("System", {
        introduced: "8.0.0"
    });
    WidgetValueTypeEnum.Widgets = new WidgetValueTypeEnum("Widgets", {
        introduced: "8.2.0"
    });
    customwidgets.WidgetValueTypeEnum = WidgetValueTypeEnum;
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `CustomWidgets`.
     */
    class CustomWidget extends pages_1.pages.Widget {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__type = new internal.PartProperty(CustomWidget, this, "type", null, false);
            /** @internal */
            this.__object = new internal.PartProperty(CustomWidget, this, "object", null, false);
            /** @internal */
            this.__labelTemplate = new internal.PartProperty(CustomWidget, this, "labelTemplate", null, false);
            /** @internal */
            this.__conditionalEditabilitySettings = new internal.PartProperty(CustomWidget, this, "conditionalEditabilitySettings", null, false);
            /** @internal */
            this.__editable = new internal.EnumProperty(CustomWidget, this, "editable", pages_1.pages.EditableEnum.Always, pages_1.pages.EditableEnum);
            /** @internal */
            this.__conditionalVisibilitySettings = new internal.PartProperty(CustomWidget, this, "conditionalVisibilitySettings", null, false);
            if (arguments.length < 4) {
                throw new Error("new CustomWidget() cannot be invoked directly, please use 'model.customwidgets.createCustomWidget()'");
            }
        }
        get containerAsWidgetValue() {
            return super.getContainerAs(WidgetValue);
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
            return super.getContainerAs(reports_1.reports.ReportPane);
        }
        get type() {
            return this.__type.get();
        }
        set type(newValue) {
            this.__type.set(newValue);
        }
        get object() {
            return this.__object.get();
        }
        set object(newValue) {
            this.__object.set(newValue);
        }
        /**
         * In version 8.1.0: introduced
         */
        get labelTemplate() {
            return this.__labelTemplate.get();
        }
        set labelTemplate(newValue) {
            this.__labelTemplate.set(newValue);
        }
        /**
         * In version 8.1.0: introduced
         */
        get conditionalEditabilitySettings() {
            return this.__conditionalEditabilitySettings.get();
        }
        set conditionalEditabilitySettings(newValue) {
            this.__conditionalEditabilitySettings.set(newValue);
        }
        /**
         * In version 8.1.0: introduced
         */
        get editable() {
            return this.__editable.get();
        }
        set editable(newValue) {
            this.__editable.set(newValue);
        }
        /**
         * In version 8.1.0: introduced
         */
        get conditionalVisibilitySettings() {
            return this.__conditionalVisibilitySettings.get();
        }
        set conditionalVisibilitySettings(newValue) {
            this.__conditionalVisibilitySettings.set(newValue);
        }
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'widgets' property
         * of the parent WidgetValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.2.0 and higher
         */
        static createInWidgetValueUnderWidgets(container) {
            internal.createInVersionCheck(container.model, CustomWidget.structureTypeName, { start: "8.2.0" });
            return internal.instancehelpers.createElement(container, CustomWidget, "widgets", true);
        }
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'headerWidget' property
         * of the parent nativepages.NativeLayout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.22.0 to 7.23.0
         */
        static createInNativeLayoutUnderHeaderWidget(container) {
            internal.createInVersionCheck(container.model, CustomWidget.structureTypeName, { start: "7.22.0", end: "7.23.0" });
            return internal.instancehelpers.createElement(container, CustomWidget, "headerWidget", false);
        }
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'widgets' property
         * of the parent nativepages.NativeLayout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 to 7.23.0
         */
        static createInNativeLayoutUnderWidgets(container) {
            internal.createInVersionCheck(container.model, CustomWidget.structureTypeName, { start: "7.21.0", end: "7.23.0" });
            return internal.instancehelpers.createElement(container, CustomWidget, "widgets", true);
        }
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'widgets' property
         * of the parent nativepages.NativeLayoutCallArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInNativeLayoutCallArgumentUnderWidgets(container) {
            internal.createInVersionCheck(container.model, CustomWidget.structureTypeName, { start: "7.23.0", end: "7.23.0" });
            return internal.instancehelpers.createElement(container, CustomWidget, "widgets", true);
        }
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'widget' property
         * of the parent pages.BuildingBlock element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.7.0 to 7.14.0
         */
        static createInBuildingBlockUnderWidget(container) {
            internal.createInVersionCheck(container.model, CustomWidget.structureTypeName, { start: "7.7.0", end: "7.14.0" });
            return internal.instancehelpers.createElement(container, CustomWidget, "widget", false);
        }
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'widgets' property
         * of the parent pages.BuildingBlock element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInBuildingBlockUnderWidgets(container) {
            internal.createInVersionCheck(container.model, CustomWidget.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, CustomWidget, "widgets", true);
        }
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'footerWidget' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.7.0 to 7.14.0
         */
        static createInDataViewUnderFooterWidget(container) {
            internal.createInVersionCheck(container.model, CustomWidget.structureTypeName, { start: "6.7.0", end: "7.14.0" });
            return internal.instancehelpers.createElement(container, CustomWidget, "footerWidget", false);
        }
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'footerWidgets' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInDataViewUnderFooterWidgets(container) {
            internal.createInVersionCheck(container.model, CustomWidget.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, CustomWidget, "footerWidgets", true);
        }
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'widget' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInDataViewUnderWidget(container) {
            internal.createInVersionCheck(container.model, CustomWidget.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, CustomWidget, "widget", false);
        }
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'widgets' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInDataViewUnderWidgets(container) {
            internal.createInVersionCheck(container.model, CustomWidget.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, CustomWidget, "widgets", true);
        }
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'widget' property
         * of the parent pages.DivContainer element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInDivContainerUnderWidget(container) {
            internal.createInVersionCheck(container.model, CustomWidget.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, CustomWidget, "widget", false);
        }
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'widgets' property
         * of the parent pages.DivContainer element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInDivContainerUnderWidgets(container) {
            internal.createInVersionCheck(container.model, CustomWidget.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, CustomWidget, "widgets", true);
        }
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'widget' property
         * of the parent pages.GroupBox element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInGroupBoxUnderWidget(container) {
            internal.createInVersionCheck(container.model, CustomWidget.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, CustomWidget, "widget", false);
        }
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'widgets' property
         * of the parent pages.GroupBox element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInGroupBoxUnderWidgets(container) {
            internal.createInVersionCheck(container.model, CustomWidget.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, CustomWidget, "widgets", true);
        }
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'leftWidget' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInHeaderUnderLeftWidget(container) {
            internal.createInVersionCheck(container.model, CustomWidget.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, CustomWidget, "leftWidget", false);
        }
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'leftWidgets' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInHeaderUnderLeftWidgets(container) {
            internal.createInVersionCheck(container.model, CustomWidget.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, CustomWidget, "leftWidgets", true);
        }
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'rightWidget' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInHeaderUnderRightWidget(container) {
            internal.createInVersionCheck(container.model, CustomWidget.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, CustomWidget, "rightWidget", false);
        }
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'rightWidgets' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInHeaderUnderRightWidgets(container) {
            internal.createInVersionCheck(container.model, CustomWidget.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, CustomWidget, "rightWidgets", true);
        }
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'widget' property
         * of the parent pages.Layout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInLayoutUnderWidget(container) {
            internal.createInVersionCheck(container.model, CustomWidget.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, CustomWidget, "widget", false);
        }
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'widgets' property
         * of the parent pages.Layout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 7.23.0
         */
        static createInLayoutUnderWidgets(container) {
            internal.createInVersionCheck(container.model, CustomWidget.structureTypeName, { start: "7.15.0", end: "7.23.0" });
            return internal.instancehelpers.createElement(container, CustomWidget, "widgets", true);
        }
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'widget' property
         * of the parent pages.LayoutCallArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInLayoutCallArgumentUnderWidget(container) {
            internal.createInVersionCheck(container.model, CustomWidget.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, CustomWidget, "widget", false);
        }
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'widgets' property
         * of the parent pages.LayoutCallArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInLayoutCallArgumentUnderWidgets(container) {
            internal.createInVersionCheck(container.model, CustomWidget.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, CustomWidget, "widgets", true);
        }
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'widget' property
         * of the parent pages.LayoutGridColumn element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInLayoutGridColumnUnderWidget(container) {
            internal.createInVersionCheck(container.model, CustomWidget.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, CustomWidget, "widget", false);
        }
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'widgets' property
         * of the parent pages.LayoutGridColumn element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInLayoutGridColumnUnderWidgets(container) {
            internal.createInVersionCheck(container.model, CustomWidget.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, CustomWidget, "widgets", true);
        }
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'widget' property
         * of the parent pages.ListView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInListViewUnderWidget(container) {
            internal.createInVersionCheck(container.model, CustomWidget.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, CustomWidget, "widget", false);
        }
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'widgets' property
         * of the parent pages.ListView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInListViewUnderWidgets(container) {
            internal.createInVersionCheck(container.model, CustomWidget.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, CustomWidget, "widgets", true);
        }
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'widget' property
         * of the parent pages.ListViewTemplate element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInListViewTemplateUnderWidget(container) {
            internal.createInVersionCheck(container.model, CustomWidget.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, CustomWidget, "widget", false);
        }
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'widgets' property
         * of the parent pages.ListViewTemplate element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInListViewTemplateUnderWidgets(container) {
            internal.createInVersionCheck(container.model, CustomWidget.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, CustomWidget, "widgets", true);
        }
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'widget' property
         * of the parent pages.MasterDetailRegion element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.1.0 to 7.14.0
         */
        static createInMasterDetailRegionUnderWidget(container) {
            internal.createInVersionCheck(container.model, CustomWidget.structureTypeName, { start: "7.1.0", end: "7.14.0" });
            return internal.instancehelpers.createElement(container, CustomWidget, "widget", false);
        }
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'sidebarWidgets' property
         * of the parent pages.NativeLayoutContent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.5.0 and higher
         */
        static createInNativeLayoutContentUnderSidebarWidgets(container) {
            internal.createInVersionCheck(container.model, CustomWidget.structureTypeName, { start: "8.5.0" });
            return internal.instancehelpers.createElement(container, CustomWidget, "sidebarWidgets", true);
        }
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'widgets' property
         * of the parent pages.NativeLayoutContent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 and higher
         */
        static createInNativeLayoutContentUnderWidgets(container) {
            internal.createInVersionCheck(container.model, CustomWidget.structureTypeName, { start: "8.0.0" });
            return internal.instancehelpers.createElement(container, CustomWidget, "widgets", true);
        }
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'widget' property
         * of the parent pages.NavigationListItem element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInNavigationListItemUnderWidget(container) {
            internal.createInVersionCheck(container.model, CustomWidget.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, CustomWidget, "widget", false);
        }
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'widgets' property
         * of the parent pages.NavigationListItem element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInNavigationListItemUnderWidgets(container) {
            internal.createInVersionCheck(container.model, CustomWidget.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, CustomWidget, "widgets", true);
        }
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'widget' property
         * of the parent pages.ScrollContainerRegion element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInScrollContainerRegionUnderWidget(container) {
            internal.createInVersionCheck(container.model, CustomWidget.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, CustomWidget, "widget", false);
        }
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'widgets' property
         * of the parent pages.ScrollContainerRegion element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInScrollContainerRegionUnderWidgets(container) {
            internal.createInVersionCheck(container.model, CustomWidget.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, CustomWidget, "widgets", true);
        }
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'widget' property
         * of the parent pages.Snippet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInSnippetUnderWidget(container) {
            internal.createInVersionCheck(container.model, CustomWidget.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, CustomWidget, "widget", false);
        }
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'widgets' property
         * of the parent pages.Snippet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInSnippetUnderWidgets(container) {
            internal.createInVersionCheck(container.model, CustomWidget.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, CustomWidget, "widgets", true);
        }
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'firstWidget' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInSplitPaneUnderFirstWidget(container) {
            internal.createInVersionCheck(container.model, CustomWidget.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, CustomWidget, "firstWidget", false);
        }
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'firstWidgets' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 7.23.0
         */
        static createInSplitPaneUnderFirstWidgets(container) {
            internal.createInVersionCheck(container.model, CustomWidget.structureTypeName, { start: "7.15.0", end: "7.23.0" });
            return internal.instancehelpers.createElement(container, CustomWidget, "firstWidgets", true);
        }
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'secondWidget' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInSplitPaneUnderSecondWidget(container) {
            internal.createInVersionCheck(container.model, CustomWidget.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, CustomWidget, "secondWidget", false);
        }
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'secondWidgets' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 7.23.0
         */
        static createInSplitPaneUnderSecondWidgets(container) {
            internal.createInVersionCheck(container.model, CustomWidget.structureTypeName, { start: "7.15.0", end: "7.23.0" });
            return internal.instancehelpers.createElement(container, CustomWidget, "secondWidgets", true);
        }
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'widget' property
         * of the parent pages.TabPage element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInTabPageUnderWidget(container) {
            internal.createInVersionCheck(container.model, CustomWidget.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, CustomWidget, "widget", false);
        }
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'widgets' property
         * of the parent pages.TabPage element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInTabPageUnderWidgets(container) {
            internal.createInVersionCheck(container.model, CustomWidget.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, CustomWidget, "widgets", true);
        }
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'widget' property
         * of the parent pages.TableCell element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInTableCellUnderWidget(container) {
            internal.createInVersionCheck(container.model, CustomWidget.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, CustomWidget, "widget", false);
        }
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'widgets' property
         * of the parent pages.TableCell element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInTableCellUnderWidgets(container) {
            internal.createInVersionCheck(container.model, CustomWidget.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, CustomWidget, "widgets", true);
        }
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'widget' property
         * of the parent pages.TemplateGridContents element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInTemplateGridContentsUnderWidget(container) {
            internal.createInVersionCheck(container.model, CustomWidget.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, CustomWidget, "widget", false);
        }
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'widgets' property
         * of the parent pages.TemplateGridContents element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInTemplateGridContentsUnderWidgets(container) {
            internal.createInVersionCheck(container.model, CustomWidget.structureTypeName, { start: "7.15.0" });
            return internal.instancehelpers.createElement(container, CustomWidget, "widgets", true);
        }
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'widgets' property
         * of the parent pages.VerticalFlow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInVerticalFlowUnderWidgets(container) {
            internal.createInVersionCheck(container.model, CustomWidget.structureTypeName, { end: "7.14.0" });
            return internal.instancehelpers.createElement(container, CustomWidget, "widgets", true);
        }
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'widgets' property
         * of the parent pages.WebLayoutContent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 and higher
         */
        static createInWebLayoutContentUnderWidgets(container) {
            internal.createInVersionCheck(container.model, CustomWidget.structureTypeName, { start: "8.0.0" });
            return internal.instancehelpers.createElement(container, CustomWidget, "widgets", true);
        }
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'parameterWidget' property
         * of the parent reports.ReportPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInReportPaneUnderParameterWidget(container) {
            internal.createInVersionCheck(container.model, CustomWidget.structureTypeName, { end: "6.9.0" });
            return internal.instancehelpers.createElement(container, CustomWidget, "parameterWidget", false);
        }
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'reportWidget' property
         * of the parent reports.ReportPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInReportPaneUnderReportWidget(container) {
            internal.createInVersionCheck(container.model, CustomWidget.structureTypeName, { end: "6.9.0" });
            return internal.instancehelpers.createElement(container, CustomWidget, "reportWidget", false);
        }
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, CustomWidget);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__editable.isAvailable) {
                this.editable = pages_1.pages.EditableEnum.Always;
            }
        }
    }
    CustomWidget.structureTypeName = "CustomWidgets$CustomWidget";
    CustomWidget.versionInfo = new exports.StructureVersionInfo({
        properties: {
            labelTemplate: {
                introduced: "8.1.0"
            },
            conditionalEditabilitySettings: {
                introduced: "8.1.0"
            },
            editable: {
                introduced: "8.1.0"
            },
            conditionalVisibilitySettings: {
                introduced: "8.1.0"
            }
        }
    }, internal.StructureType.Element);
    customwidgets.CustomWidget = CustomWidget;
    /**
     * In version 8.5.0: introduced
     */
    class CustomWidgetDatabaseSource extends pages_1.pages.DatabaseSourceBase {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new CustomWidgetDatabaseSource() cannot be invoked directly, please use 'model.customwidgets.createCustomWidgetDatabaseSource()'");
            }
        }
        get containerAsWidgetValue() {
            return super.getContainerAs(WidgetValue);
        }
        get containerAsEntityWidget() {
            return super.getContainerAs(pages_1.pages.EntityWidget);
        }
        /**
         * Creates and returns a new CustomWidgetDatabaseSource instance in the SDK and on the server.
         * The new CustomWidgetDatabaseSource will be automatically stored in the 'dataSource' property
         * of the parent WidgetValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.5.0 and higher
         */
        static createInWidgetValueUnderDataSource(container) {
            internal.createInVersionCheck(container.model, CustomWidgetDatabaseSource.structureTypeName, { start: "8.5.0" });
            return internal.instancehelpers.createElement(container, CustomWidgetDatabaseSource, "dataSource", false);
        }
        /**
         * Creates and returns a new CustomWidgetDatabaseSource instance in the SDK and on the server.
         * The new CustomWidgetDatabaseSource will be automatically stored in the 'dataSource' property
         * of the parent pages.EntityWidget element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.5.0 and higher
         */
        static createInEntityWidgetUnderDataSource(container) {
            internal.createInVersionCheck(container.model, CustomWidgetDatabaseSource.structureTypeName, { start: "8.5.0" });
            return internal.instancehelpers.createElement(container, CustomWidgetDatabaseSource, "dataSource", false);
        }
        /**
         * Creates and returns a new CustomWidgetDatabaseSource instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, CustomWidgetDatabaseSource);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    CustomWidgetDatabaseSource.structureTypeName = "CustomWidgets$CustomWidgetDatabaseSource";
    CustomWidgetDatabaseSource.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.5.0"
    }, internal.StructureType.Element);
    customwidgets.CustomWidgetDatabaseSource = CustomWidgetDatabaseSource;
    class CustomWidgetType extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__widgetId = new internal.PrimitiveProperty(CustomWidgetType, this, "widgetId", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__needsEntityContext = new internal.PrimitiveProperty(CustomWidgetType, this, "needsEntityContext", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__pluginWidget = new internal.PrimitiveProperty(CustomWidgetType, this, "pluginWidget", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__name = new internal.PrimitiveProperty(CustomWidgetType, this, "name", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__description = new internal.PrimitiveProperty(CustomWidgetType, this, "description", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__studioProCategory = new internal.PrimitiveProperty(CustomWidgetType, this, "studioProCategory", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__studioCategory = new internal.PrimitiveProperty(CustomWidgetType, this, "studioCategory", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__supportedPlatform = new internal.EnumProperty(CustomWidgetType, this, "supportedPlatform", client_1.client.SupportedPlatform.Web, client_1.client.SupportedPlatform);
            /** @internal */
            this.__phoneGapEnabled = new internal.PrimitiveProperty(CustomWidgetType, this, "phoneGapEnabled", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__offlineCapable = new internal.PrimitiveProperty(CustomWidgetType, this, "offlineCapable", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__experimentalApi = new internal.PrimitiveProperty(CustomWidgetType, this, "experimentalApi", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__objectType = new internal.PartProperty(CustomWidgetType, this, "objectType", null, true);
            /** @internal */
            this.__labeled = new internal.PrimitiveProperty(CustomWidgetType, this, "labeled", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__helpUrl = new internal.PrimitiveProperty(CustomWidgetType, this, "helpUrl", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new CustomWidgetType() cannot be invoked directly, please use 'model.customwidgets.createCustomWidgetType()'");
            }
        }
        get containerAsCustomWidget() {
            return super.getContainerAs(CustomWidget);
        }
        get widgetId() {
            return this.__widgetId.get();
        }
        set widgetId(newValue) {
            this.__widgetId.set(newValue);
        }
        get needsEntityContext() {
            return this.__needsEntityContext.get();
        }
        set needsEntityContext(newValue) {
            this.__needsEntityContext.set(newValue);
        }
        /**
         * In version 7.19.0: introduced
         */
        get pluginWidget() {
            return this.__pluginWidget.get();
        }
        set pluginWidget(newValue) {
            this.__pluginWidget.set(newValue);
        }
        get name() {
            return this.__name.get();
        }
        set name(newValue) {
            this.__name.set(newValue);
        }
        get description() {
            return this.__description.get();
        }
        set description(newValue) {
            this.__description.set(newValue);
        }
        /**
         * In version 9.4.0: introduced
         */
        get studioProCategory() {
            return this.__studioProCategory.get();
        }
        set studioProCategory(newValue) {
            this.__studioProCategory.set(newValue);
        }
        /**
         * In version 9.4.0: introduced
         */
        get studioCategory() {
            return this.__studioCategory.get();
        }
        set studioCategory(newValue) {
            this.__studioCategory.set(newValue);
        }
        /**
         * In version 8.0.0: introduced
         */
        get supportedPlatform() {
            return this.__supportedPlatform.get();
        }
        set supportedPlatform(newValue) {
            this.__supportedPlatform.set(newValue);
        }
        get phoneGapEnabled() {
            return this.__phoneGapEnabled.get();
        }
        set phoneGapEnabled(newValue) {
            this.__phoneGapEnabled.set(newValue);
        }
        get offlineCapable() {
            return this.__offlineCapable.get();
        }
        set offlineCapable(newValue) {
            this.__offlineCapable.set(newValue);
        }
        /**
         * In version 7.1.0: deleted
         * In version 7.0.0: introduced
         */
        get experimentalApi() {
            return this.__experimentalApi.get();
        }
        set experimentalApi(newValue) {
            this.__experimentalApi.set(newValue);
        }
        get objectType() {
            return this.__objectType.get();
        }
        set objectType(newValue) {
            this.__objectType.set(newValue);
        }
        /**
         * In version 8.0.0: deleted
         * In version 7.23.0: introduced
         */
        get labeled() {
            return this.__labeled.get();
        }
        set labeled(newValue) {
            this.__labeled.set(newValue);
        }
        /**
         * In version 8.3.0: introduced
         */
        get helpUrl() {
            return this.__helpUrl.get();
        }
        set helpUrl(newValue) {
            this.__helpUrl.set(newValue);
        }
        /**
         * Creates and returns a new CustomWidgetType instance in the SDK and on the server.
         * The new CustomWidgetType will be automatically stored in the 'type' property
         * of the parent CustomWidget element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, CustomWidgetType, "type", false);
        }
        /**
         * Creates and returns a new CustomWidgetType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, CustomWidgetType);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.objectType = WidgetObjectType.create(this.model);
            if (this.__supportedPlatform.isAvailable) {
                this.supportedPlatform = client_1.client.SupportedPlatform.Web;
            }
        }
    }
    CustomWidgetType.structureTypeName = "CustomWidgets$CustomWidgetType";
    CustomWidgetType.versionInfo = new exports.StructureVersionInfo({
        properties: {
            pluginWidget: {
                introduced: "7.19.0"
            },
            studioProCategory: {
                introduced: "9.4.0"
            },
            studioCategory: {
                introduced: "9.4.0"
            },
            supportedPlatform: {
                introduced: "8.0.0"
            },
            experimentalApi: {
                introduced: "7.0.0",
                deleted: "7.1.0",
                deletionMessage: null
            },
            objectType: {
                required: {
                    currentValue: true
                }
            },
            labeled: {
                introduced: "7.23.0",
                deleted: "8.0.0",
                deletionMessage: "Use system property 'label' instead"
            },
            helpUrl: {
                introduced: "8.3.0"
            }
        }
    }, internal.StructureType.Element);
    customwidgets.CustomWidgetType = CustomWidgetType;
    /**
     * In version 8.5.0: introduced
     */
    class CustomWidgetXPathSource extends pages_1.pages.XPathSourceBase {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new CustomWidgetXPathSource() cannot be invoked directly, please use 'model.customwidgets.createCustomWidgetXPathSource()'");
            }
        }
        get containerAsWidgetValue() {
            return super.getContainerAs(WidgetValue);
        }
        get containerAsEntityWidget() {
            return super.getContainerAs(pages_1.pages.EntityWidget);
        }
        /**
         * Creates and returns a new CustomWidgetXPathSource instance in the SDK and on the server.
         * The new CustomWidgetXPathSource will be automatically stored in the 'dataSource' property
         * of the parent WidgetValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.5.0 and higher
         */
        static createInWidgetValueUnderDataSource(container) {
            internal.createInVersionCheck(container.model, CustomWidgetXPathSource.structureTypeName, { start: "8.5.0" });
            return internal.instancehelpers.createElement(container, CustomWidgetXPathSource, "dataSource", false);
        }
        /**
         * Creates and returns a new CustomWidgetXPathSource instance in the SDK and on the server.
         * The new CustomWidgetXPathSource will be automatically stored in the 'dataSource' property
         * of the parent pages.EntityWidget element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.5.0 and higher
         */
        static createInEntityWidgetUnderDataSource(container) {
            internal.createInVersionCheck(container.model, CustomWidgetXPathSource.structureTypeName, { start: "8.5.0" });
            return internal.instancehelpers.createElement(container, CustomWidgetXPathSource, "dataSource", false);
        }
        /**
         * Creates and returns a new CustomWidgetXPathSource instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, CustomWidgetXPathSource);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    CustomWidgetXPathSource.structureTypeName = "CustomWidgets$CustomWidgetXPathSource";
    CustomWidgetXPathSource.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.5.0"
    }, internal.StructureType.Element);
    customwidgets.CustomWidgetXPathSource = CustomWidgetXPathSource;
    class WidgetEnumerationValue extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__key = new internal.PrimitiveProperty(WidgetEnumerationValue, this, "key", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__caption = new internal.PrimitiveProperty(WidgetEnumerationValue, this, "caption", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new WidgetEnumerationValue() cannot be invoked directly, please use 'model.customwidgets.createWidgetEnumerationValue()'");
            }
        }
        get containerAsWidgetValueType() {
            return super.getContainerAs(WidgetValueType);
        }
        get key() {
            return this.__key.get();
        }
        set key(newValue) {
            this.__key.set(newValue);
        }
        get caption() {
            return this.__caption.get();
        }
        set caption(newValue) {
            this.__caption.set(newValue);
        }
        /**
         * Creates and returns a new WidgetEnumerationValue instance in the SDK and on the server.
         * The new WidgetEnumerationValue will be automatically stored in the 'enumerationValues' property
         * of the parent WidgetValueType element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, WidgetEnumerationValue, "enumerationValues", true);
        }
        /**
         * Creates and returns a new WidgetEnumerationValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, WidgetEnumerationValue);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    WidgetEnumerationValue.structureTypeName = "CustomWidgets$WidgetEnumerationValue";
    WidgetEnumerationValue.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    customwidgets.WidgetEnumerationValue = WidgetEnumerationValue;
    class WidgetObject extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__type = new internal.ByIdReferenceProperty(WidgetObject, this, "type", null);
            /** @internal */
            this.__properties = new internal.PartListProperty(WidgetObject, this, "properties", []);
            /** @internal */
            this.__labelTemplate = new internal.PartProperty(WidgetObject, this, "labelTemplate", null, false);
            if (arguments.length < 4) {
                throw new Error("new WidgetObject() cannot be invoked directly, please use 'model.customwidgets.createWidgetObject()'");
            }
        }
        get containerAsCustomWidget() {
            return super.getContainerAs(CustomWidget);
        }
        get containerAsWidgetValue() {
            return super.getContainerAs(WidgetValue);
        }
        /**
         * In version 7.13.0: added optional
         */
        get type() {
            return this.__type.get();
        }
        set type(newValue) {
            this.__type.set(newValue);
        }
        get properties() {
            return this.__properties.get();
        }
        /**
         * In version 8.1.0: deleted
         * In version 7.23.0: introduced
         */
        get labelTemplate() {
            return this.__labelTemplate.get();
        }
        set labelTemplate(newValue) {
            this.__labelTemplate.set(newValue);
        }
        /**
         * Creates and returns a new WidgetObject instance in the SDK and on the server.
         * The new WidgetObject will be automatically stored in the 'object' property
         * of the parent CustomWidget element passed as argument.
         */
        static createInCustomWidgetUnderObject(container) {
            return internal.instancehelpers.createElement(container, WidgetObject, "object", false);
        }
        /**
         * Creates and returns a new WidgetObject instance in the SDK and on the server.
         * The new WidgetObject will be automatically stored in the 'objects' property
         * of the parent WidgetValue element passed as argument.
         */
        static createInWidgetValueUnderObjects(container) {
            return internal.instancehelpers.createElement(container, WidgetObject, "objects", true);
        }
        /**
         * Creates and returns a new WidgetObject instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, WidgetObject);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    WidgetObject.structureTypeName = "CustomWidgets$WidgetObject";
    WidgetObject.versionInfo = new exports.StructureVersionInfo({
        properties: {
            type: {
                required: {
                    currentValue: false,
                    changedIn: ["7.13.0"]
                }
            },
            labelTemplate: {
                introduced: "7.23.0",
                deleted: "8.1.0",
                deletionMessage: "Moved to CustomWidget"
            }
        }
    }, internal.StructureType.Element);
    customwidgets.WidgetObject = WidgetObject;
    class WidgetObjectType extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__propertyTypes = new internal.PartListProperty(WidgetObjectType, this, "propertyTypes", []);
            if (arguments.length < 4) {
                throw new Error("new WidgetObjectType() cannot be invoked directly, please use 'model.customwidgets.createWidgetObjectType()'");
            }
        }
        get containerAsCustomWidgetType() {
            return super.getContainerAs(CustomWidgetType);
        }
        get containerAsWidgetValueType() {
            return super.getContainerAs(WidgetValueType);
        }
        get propertyTypes() {
            return this.__propertyTypes.get();
        }
        /**
         * Creates and returns a new WidgetObjectType instance in the SDK and on the server.
         * The new WidgetObjectType will be automatically stored in the 'objectType' property
         * of the parent CustomWidgetType element passed as argument.
         */
        static createInCustomWidgetTypeUnderObjectType(container) {
            return internal.instancehelpers.createElement(container, WidgetObjectType, "objectType", false);
        }
        /**
         * Creates and returns a new WidgetObjectType instance in the SDK and on the server.
         * The new WidgetObjectType will be automatically stored in the 'objectType' property
         * of the parent WidgetValueType element passed as argument.
         */
        static createInWidgetValueTypeUnderObjectType(container) {
            return internal.instancehelpers.createElement(container, WidgetObjectType, "objectType", false);
        }
        /**
         * Creates and returns a new WidgetObjectType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, WidgetObjectType);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    WidgetObjectType.structureTypeName = "CustomWidgets$WidgetObjectType";
    WidgetObjectType.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    customwidgets.WidgetObjectType = WidgetObjectType;
    class WidgetProperty extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__type = new internal.ByIdReferenceProperty(WidgetProperty, this, "type", null);
            /** @internal */
            this.__value = new internal.PartProperty(WidgetProperty, this, "value", null, false);
            if (arguments.length < 4) {
                throw new Error("new WidgetProperty() cannot be invoked directly, please use 'model.customwidgets.createWidgetProperty()'");
            }
        }
        get containerAsWidgetObject() {
            return super.getContainerAs(WidgetObject);
        }
        /**
         * In version 7.13.0: added optional
         */
        get type() {
            return this.__type.get();
        }
        set type(newValue) {
            this.__type.set(newValue);
        }
        /**
         * In version 7.13.0: added optional
         */
        get value() {
            return this.__value.get();
        }
        set value(newValue) {
            this.__value.set(newValue);
        }
        /**
         * Creates and returns a new WidgetProperty instance in the SDK and on the server.
         * The new WidgetProperty will be automatically stored in the 'properties' property
         * of the parent WidgetObject element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, WidgetProperty, "properties", true);
        }
        /**
         * Creates and returns a new WidgetProperty instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, WidgetProperty);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            (() => {
                if (internal.isAtLeast("7.13.0", this.model)) {
                    return;
                }
                this.value = WidgetValue.create(this.model);
            })();
        }
    }
    WidgetProperty.structureTypeName = "CustomWidgets$WidgetProperty";
    WidgetProperty.versionInfo = new exports.StructureVersionInfo({
        properties: {
            type: {
                required: {
                    currentValue: false,
                    changedIn: ["7.13.0"]
                }
            },
            value: {
                required: {
                    currentValue: false,
                    changedIn: ["7.13.0"]
                }
            }
        }
    }, internal.StructureType.Element);
    customwidgets.WidgetProperty = WidgetProperty;
    class WidgetPropertyType extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__key = new internal.PrimitiveProperty(WidgetPropertyType, this, "key", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__category = new internal.PrimitiveProperty(WidgetPropertyType, this, "category", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__caption = new internal.PrimitiveProperty(WidgetPropertyType, this, "caption", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__description = new internal.PrimitiveProperty(WidgetPropertyType, this, "description", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__isDefault = new internal.PrimitiveProperty(WidgetPropertyType, this, "isDefault", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__valueType = new internal.PartProperty(WidgetPropertyType, this, "valueType", null, false);
            if (arguments.length < 4) {
                throw new Error("new WidgetPropertyType() cannot be invoked directly, please use 'model.customwidgets.createWidgetPropertyType()'");
            }
        }
        get containerAsWidgetObjectType() {
            return super.getContainerAs(WidgetObjectType);
        }
        get key() {
            return this.__key.get();
        }
        set key(newValue) {
            this.__key.set(newValue);
        }
        get category() {
            return this.__category.get();
        }
        set category(newValue) {
            this.__category.set(newValue);
        }
        get caption() {
            return this.__caption.get();
        }
        set caption(newValue) {
            this.__caption.set(newValue);
        }
        get description() {
            return this.__description.get();
        }
        set description(newValue) {
            this.__description.set(newValue);
        }
        get isDefault() {
            return this.__isDefault.get();
        }
        set isDefault(newValue) {
            this.__isDefault.set(newValue);
        }
        /**
         * In version 7.13.0: added optional
         */
        get valueType() {
            return this.__valueType.get();
        }
        set valueType(newValue) {
            this.__valueType.set(newValue);
        }
        /**
         * Creates and returns a new WidgetPropertyType instance in the SDK and on the server.
         * The new WidgetPropertyType will be automatically stored in the 'propertyTypes' property
         * of the parent WidgetObjectType element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, WidgetPropertyType, "propertyTypes", true);
        }
        /**
         * Creates and returns a new WidgetPropertyType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, WidgetPropertyType);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            (() => {
                if (internal.isAtLeast("7.13.0", this.model)) {
                    return;
                }
                this.valueType = WidgetValueType.create(this.model);
            })();
        }
    }
    WidgetPropertyType.structureTypeName = "CustomWidgets$WidgetPropertyType";
    WidgetPropertyType.versionInfo = new exports.StructureVersionInfo({
        properties: {
            valueType: {
                required: {
                    currentValue: false,
                    changedIn: ["7.13.0"]
                }
            }
        }
    }, internal.StructureType.Element);
    customwidgets.WidgetPropertyType = WidgetPropertyType;
    class WidgetReturnType extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__type = new internal.EnumProperty(WidgetReturnType, this, "type", WidgetReturnTypeEnum.Boolean, WidgetReturnTypeEnum);
            /** @internal */
            this.__isList = new internal.PrimitiveProperty(WidgetReturnType, this, "isList", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__entityProperty = new internal.PrimitiveProperty(WidgetReturnType, this, "entityProperty", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new WidgetReturnType() cannot be invoked directly, please use 'model.customwidgets.createWidgetReturnType()'");
            }
        }
        get containerAsWidgetValueType() {
            return super.getContainerAs(WidgetValueType);
        }
        get type() {
            return this.__type.get();
        }
        set type(newValue) {
            this.__type.set(newValue);
        }
        get isList() {
            return this.__isList.get();
        }
        set isList(newValue) {
            this.__isList.set(newValue);
        }
        get entityProperty() {
            return this.__entityProperty.get();
        }
        set entityProperty(newValue) {
            this.__entityProperty.set(newValue);
        }
        /**
         * Creates and returns a new WidgetReturnType instance in the SDK and on the server.
         * The new WidgetReturnType will be automatically stored in the 'returnType' property
         * of the parent WidgetValueType element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, WidgetReturnType, "returnType", false);
        }
        /**
         * Creates and returns a new WidgetReturnType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, WidgetReturnType);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.type = WidgetReturnTypeEnum.Boolean;
        }
    }
    WidgetReturnType.structureTypeName = "CustomWidgets$WidgetReturnType";
    WidgetReturnType.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    customwidgets.WidgetReturnType = WidgetReturnType;
    class WidgetTranslation extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__languageCode = new internal.PrimitiveProperty(WidgetTranslation, this, "languageCode", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__text = new internal.PrimitiveProperty(WidgetTranslation, this, "text", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new WidgetTranslation() cannot be invoked directly, please use 'model.customwidgets.createWidgetTranslation()'");
            }
        }
        get containerAsWidgetValueType() {
            return super.getContainerAs(WidgetValueType);
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
         * Creates and returns a new WidgetTranslation instance in the SDK and on the server.
         * The new WidgetTranslation will be automatically stored in the 'translations' property
         * of the parent WidgetValueType element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, WidgetTranslation, "translations", true);
        }
        /**
         * Creates and returns a new WidgetTranslation instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, WidgetTranslation);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    WidgetTranslation.structureTypeName = "CustomWidgets$WidgetTranslation";
    WidgetTranslation.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    customwidgets.WidgetTranslation = WidgetTranslation;
    class WidgetValue extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__type = new internal.ByIdReferenceProperty(WidgetValue, this, "type", null);
            /** @internal */
            this.__primitiveValue = new internal.PrimitiveProperty(WidgetValue, this, "primitiveValue", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__entityPath = new internal.PrimitiveProperty(WidgetValue, this, "entityPath", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__entityRef = new internal.PartProperty(WidgetValue, this, "entityRef", null, false);
            /** @internal */
            this.__attributePath = new internal.PrimitiveProperty(WidgetValue, this, "attributePath", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__attributeRef = new internal.PartProperty(WidgetValue, this, "attributeRef", null, false);
            /** @internal */
            this.__page = new internal.ByNameReferenceProperty(WidgetValue, this, "page", null, "Pages$Page");
            /** @internal */
            this.__microflow = new internal.ByNameReferenceProperty(WidgetValue, this, "microflow", null, "Microflows$Microflow");
            /** @internal */
            this.__nanoflow = new internal.ByNameReferenceProperty(WidgetValue, this, "nanoflow", null, "Microflows$Nanoflow");
            /** @internal */
            this.__icon = new internal.PartProperty(WidgetValue, this, "icon", null, false);
            /** @internal */
            this.__image = new internal.ByNameReferenceProperty(WidgetValue, this, "image", null, "Images$Image");
            /** @internal */
            this.__translatableValue = new internal.PartProperty(WidgetValue, this, "translatableValue", null, false);
            /** @internal */
            this.__textTemplate = new internal.PartProperty(WidgetValue, this, "textTemplate", null, false);
            /** @internal */
            this.__xPathConstraint = new internal.PrimitiveProperty(WidgetValue, this, "xPathConstraint", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__objects = new internal.PartListProperty(WidgetValue, this, "objects", []);
            /** @internal */
            this.__action = new internal.PartProperty(WidgetValue, this, "action", null, true);
            /** @internal */
            this.__expression = new internal.PrimitiveProperty(WidgetValue, this, "expression", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__widgets = new internal.PartListProperty(WidgetValue, this, "widgets", []);
            /** @internal */
            this.__dataSource = new internal.PartProperty(WidgetValue, this, "dataSource", null, false);
            /** @internal */
            this.__sourceVariable = new internal.PartProperty(WidgetValue, this, "sourceVariable", null, false);
            if (arguments.length < 4) {
                throw new Error("new WidgetValue() cannot be invoked directly, please use 'model.customwidgets.createWidgetValue()'");
            }
        }
        get containerAsWidgetProperty() {
            return super.getContainerAs(WidgetProperty);
        }
        get type() {
            return this.__type.get();
        }
        set type(newValue) {
            this.__type.set(newValue);
        }
        get primitiveValue() {
            return this.__primitiveValue.get();
        }
        set primitiveValue(newValue) {
            this.__primitiveValue.set(newValue);
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
        get page() {
            return this.__page.get();
        }
        set page(newValue) {
            this.__page.set(newValue);
        }
        get pageQualifiedName() {
            return this.__page.qualifiedName();
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
         * In version 7.13.0: introduced
         */
        get nanoflow() {
            return this.__nanoflow.get();
        }
        set nanoflow(newValue) {
            this.__nanoflow.set(newValue);
        }
        get nanoflowQualifiedName() {
            return this.__nanoflow.qualifiedName();
        }
        /**
         * In version 8.0.0: introduced
         */
        get icon() {
            return this.__icon.get();
        }
        set icon(newValue) {
            this.__icon.set(newValue);
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
        get translatableValue() {
            return this.__translatableValue.get();
        }
        set translatableValue(newValue) {
            this.__translatableValue.set(newValue);
        }
        /**
         * In version 7.23.0: introduced
         */
        get textTemplate() {
            return this.__textTemplate.get();
        }
        set textTemplate(newValue) {
            this.__textTemplate.set(newValue);
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
        get objects() {
            return this.__objects.get();
        }
        /**
         * In version 7.19.0: introduced
         */
        get action() {
            return this.__action.get();
        }
        set action(newValue) {
            this.__action.set(newValue);
        }
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         *
         * In version 8.0.0: introduced
         */
        get expression() {
            return this.__expression.get();
        }
        set expression(newValue) {
            this.__expression.set(newValue);
        }
        /**
         * In version 8.2.0: introduced
         */
        get widgets() {
            return this.__widgets.get();
        }
        /**
         * In version 8.3.0: introduced
         */
        get dataSource() {
            return this.__dataSource.get();
        }
        set dataSource(newValue) {
            this.__dataSource.set(newValue);
        }
        /**
         * In version 8.8.0: introduced
         */
        get sourceVariable() {
            return this.__sourceVariable.get();
        }
        set sourceVariable(newValue) {
            this.__sourceVariable.set(newValue);
        }
        /**
         * Creates and returns a new WidgetValue instance in the SDK and on the server.
         * The new WidgetValue will be automatically stored in the 'value' property
         * of the parent WidgetProperty element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, WidgetValue, "value", false);
        }
        /**
         * Creates and returns a new WidgetValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, WidgetValue);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__action.isAvailable) {
                this.action = pages_1.pages.NoClientAction.create(this.model);
            }
        }
    }
    WidgetValue.structureTypeName = "CustomWidgets$WidgetValue";
    WidgetValue.versionInfo = new exports.StructureVersionInfo({
        properties: {
            type: {
                required: {
                    currentValue: true
                }
            },
            entityPath: {
                deleted: "7.11.0",
                deletionMessage: "Use property 'entityRef' instead"
            },
            entityRef: {
                introduced: "7.11.0"
            },
            attributePath: {
                deleted: "7.11.0",
                deletionMessage: "Use property 'attributeRef' instead"
            },
            attributeRef: {
                introduced: "7.11.0"
            },
            nanoflow: {
                introduced: "7.13.0"
            },
            icon: {
                introduced: "8.0.0"
            },
            textTemplate: {
                introduced: "7.23.0"
            },
            action: {
                introduced: "7.19.0",
                required: {
                    currentValue: true
                }
            },
            expression: {
                introduced: "8.0.0"
            },
            widgets: {
                introduced: "8.2.0"
            },
            dataSource: {
                introduced: "8.3.0"
            },
            sourceVariable: {
                introduced: "8.8.0"
            }
        }
    }, internal.StructureType.Element);
    customwidgets.WidgetValue = WidgetValue;
    class WidgetValueType extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__type = new internal.EnumProperty(WidgetValueType, this, "type", WidgetValueTypeEnum.String, WidgetValueTypeEnum);
            /** @internal */
            this.__isList = new internal.PrimitiveProperty(WidgetValueType, this, "isList", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__entityProperty = new internal.PrimitiveProperty(WidgetValueType, this, "entityProperty", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__allowNonPersistableEntities = new internal.PrimitiveProperty(WidgetValueType, this, "allowNonPersistableEntities", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__isPath = new internal.EnumProperty(WidgetValueType, this, "isPath", IsPath.No, IsPath);
            /** @internal */
            this.__pathType = new internal.EnumProperty(WidgetValueType, this, "pathType", PathType.None, PathType);
            /** @internal */
            this.__parameterIsList = new internal.PrimitiveProperty(WidgetValueType, this, "parameterIsList", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__multiline = new internal.PrimitiveProperty(WidgetValueType, this, "multiline", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__defaultValue = new internal.PrimitiveProperty(WidgetValueType, this, "defaultValue", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__required = new internal.PrimitiveProperty(WidgetValueType, this, "required", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__onChangeProperty = new internal.PrimitiveProperty(WidgetValueType, this, "onChangeProperty", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__dataSourceProperty = new internal.PrimitiveProperty(WidgetValueType, this, "dataSourceProperty", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__universeDataSourceProperty = new internal.PrimitiveProperty(WidgetValueType, this, "universeDataSourceProperty", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__selectableObjectsProperty = new internal.PrimitiveProperty(WidgetValueType, this, "selectableObjectsProperty", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__attributeTypes = new internal.EnumListProperty(WidgetValueType, this, "attributeTypes", [], CustomWidgetAttributeType);
            /** @internal */
            this.__associationTypes = new internal.EnumListProperty(WidgetValueType, this, "associationTypes", [], CustomWidgetAssociationType);
            /** @internal */
            this.__enumerationValues = new internal.PartListProperty(WidgetValueType, this, "enumerationValues", []);
            /** @internal */
            this.__objectType = new internal.PartProperty(WidgetValueType, this, "objectType", null, false);
            /** @internal */
            this.__returnType = new internal.PartProperty(WidgetValueType, this, "returnType", null, false);
            /** @internal */
            this.__translations = new internal.PartListProperty(WidgetValueType, this, "translations", []);
            if (arguments.length < 4) {
                throw new Error("new WidgetValueType() cannot be invoked directly, please use 'model.customwidgets.createWidgetValueType()'");
            }
        }
        get containerAsWidgetPropertyType() {
            return super.getContainerAs(WidgetPropertyType);
        }
        get type() {
            return this.__type.get();
        }
        set type(newValue) {
            this.__type.set(newValue);
        }
        get isList() {
            return this.__isList.get();
        }
        set isList(newValue) {
            this.__isList.set(newValue);
        }
        get entityProperty() {
            return this.__entityProperty.get();
        }
        set entityProperty(newValue) {
            this.__entityProperty.set(newValue);
        }
        get allowNonPersistableEntities() {
            return this.__allowNonPersistableEntities.get();
        }
        set allowNonPersistableEntities(newValue) {
            this.__allowNonPersistableEntities.set(newValue);
        }
        get isPath() {
            return this.__isPath.get();
        }
        set isPath(newValue) {
            this.__isPath.set(newValue);
        }
        get pathType() {
            return this.__pathType.get();
        }
        set pathType(newValue) {
            this.__pathType.set(newValue);
        }
        get parameterIsList() {
            return this.__parameterIsList.get();
        }
        set parameterIsList(newValue) {
            this.__parameterIsList.set(newValue);
        }
        get multiline() {
            return this.__multiline.get();
        }
        set multiline(newValue) {
            this.__multiline.set(newValue);
        }
        get defaultValue() {
            return this.__defaultValue.get();
        }
        set defaultValue(newValue) {
            this.__defaultValue.set(newValue);
        }
        get required() {
            return this.__required.get();
        }
        set required(newValue) {
            this.__required.set(newValue);
        }
        /**
         * In version 8.0.0: introduced
         */
        get onChangeProperty() {
            return this.__onChangeProperty.get();
        }
        set onChangeProperty(newValue) {
            this.__onChangeProperty.set(newValue);
        }
        /**
         * In version 8.4.0: introduced
         */
        get dataSourceProperty() {
            return this.__dataSourceProperty.get();
        }
        set dataSourceProperty(newValue) {
            this.__dataSourceProperty.set(newValue);
        }
        /**
         * In version 9.12.0: deleted
         * In version 9.10.0: introduced
         */
        get universeDataSourceProperty() {
            return this.__universeDataSourceProperty.get();
        }
        set universeDataSourceProperty(newValue) {
            this.__universeDataSourceProperty.set(newValue);
        }
        /**
         * In version 9.12.0: introduced
         */
        get selectableObjectsProperty() {
            return this.__selectableObjectsProperty.get();
        }
        set selectableObjectsProperty(newValue) {
            this.__selectableObjectsProperty.set(newValue);
        }
        get attributeTypes() {
            return this.__attributeTypes.get();
        }
        /**
         * In version 9.12.0: introduced
         */
        get associationTypes() {
            return this.__associationTypes.get();
        }
        get enumerationValues() {
            return this.__enumerationValues.get();
        }
        get objectType() {
            return this.__objectType.get();
        }
        set objectType(newValue) {
            this.__objectType.set(newValue);
        }
        get returnType() {
            return this.__returnType.get();
        }
        set returnType(newValue) {
            this.__returnType.set(newValue);
        }
        get translations() {
            return this.__translations.get();
        }
        /**
         * Creates and returns a new WidgetValueType instance in the SDK and on the server.
         * The new WidgetValueType will be automatically stored in the 'valueType' property
         * of the parent WidgetPropertyType element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, WidgetValueType, "valueType", false);
        }
        /**
         * Creates and returns a new WidgetValueType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, WidgetValueType);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.isPath = IsPath.No;
            this.pathType = PathType.None;
            this.type = WidgetValueTypeEnum.String;
        }
    }
    WidgetValueType.structureTypeName = "CustomWidgets$WidgetValueType";
    WidgetValueType.versionInfo = new exports.StructureVersionInfo({
        properties: {
            onChangeProperty: {
                introduced: "8.0.0"
            },
            dataSourceProperty: {
                introduced: "8.4.0"
            },
            universeDataSourceProperty: {
                introduced: "9.10.0",
                deleted: "9.12.0",
                deletionMessage: "Use 'selectableObjectsProperty' instead"
            },
            selectableObjectsProperty: {
                introduced: "9.12.0"
            },
            associationTypes: {
                introduced: "9.12.0"
            }
        }
    }, internal.StructureType.Element);
    customwidgets.WidgetValueType = WidgetValueType;
})(customwidgets = exports.customwidgets || (exports.customwidgets = {}));
const client_1 = require("./client");
const nativepages_1 = require("./nativepages");
const reports_1 = require("./reports");
//# sourceMappingURL=customwidgets.js.map