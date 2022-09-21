"use strict";
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.nativepages = exports.StructureVersionInfo = void 0;
const internal = require("../sdk/internal");
exports.StructureVersionInfo = internal.StructureVersionInfo;
const pages_1 = require("./pages");
/**
 * @ignore
 */
var nativepages;
(function (nativepages) {
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `NativePages`.
     */
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 8.0.0: introduced
     */
    class BottomBarItem extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__caption = new internal.PartProperty(BottomBarItem, this, "caption", null, true);
            /** @internal */
            this.__icon = new internal.PartProperty(BottomBarItem, this, "icon", null, false);
            /** @internal */
            this.__page = new internal.ByNameReferenceProperty(BottomBarItem, this, "page", null, "Pages$Page");
            /** @internal */
            this.__action = new internal.PartProperty(BottomBarItem, this, "action", null, true);
            if (arguments.length < 4) {
                throw new Error("new BottomBarItem() cannot be invoked directly, please use 'model.nativepages.createBottomBarItem()'");
            }
        }
        get containerAsNativeNavigationProfile() {
            return super.getContainerAs(navigation_1.navigation.NativeNavigationProfile);
        }
        get caption() {
            return this.__caption.get();
        }
        set caption(newValue) {
            this.__caption.set(newValue);
        }
        get icon() {
            return this.__icon.get();
        }
        set icon(newValue) {
            this.__icon.set(newValue);
        }
        /**
         * In version 8.15.0: introduced
         */
        get page() {
            return this.__page.get();
        }
        set page(newValue) {
            this.__page.set(newValue);
        }
        get pageQualifiedName() {
            return this.__page.qualifiedName();
        }
        /**
         * In version 8.15.0: deleted
         */
        get action() {
            return this.__action.get();
        }
        set action(newValue) {
            this.__action.set(newValue);
        }
        /**
         * Creates and returns a new BottomBarItem instance in the SDK and on the server.
         * The new BottomBarItem will be automatically stored in the 'bottomBarItems' property
         * of the parent navigation.NativeNavigationProfile element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, BottomBarItem.structureTypeName, { start: "8.0.0" });
            return internal.instancehelpers.createElement(container, BottomBarItem, "bottomBarItems", true);
        }
        /**
         * Creates and returns a new BottomBarItem instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, BottomBarItem);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__action.isAvailable) {
                this.action = pages_1.pages.NoClientAction.create(this.model);
            }
            this.caption = ((text) => {
                text.translations.replace([
                    ((translation) => {
                        translation.languageCode = "en_US";
                        translation.text = "";
                        return translation;
                    })(texts_1.texts.Translation.create(this.model))
                ]);
                return text;
            })(texts_1.texts.Text.create(this.model));
        }
    }
    BottomBarItem.structureTypeName = "NativePages$BottomBarItem";
    BottomBarItem.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.0.0",
        properties: {
            caption: {
                required: {
                    currentValue: true
                }
            },
            page: {
                introduced: "8.15.0"
            },
            action: {
                deleted: "8.15.0",
                deletionMessage: null,
                required: {
                    currentValue: true
                }
            }
        },
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    nativepages.BottomBarItem = BottomBarItem;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 8.0.0: deleted
     * In version 7.21.0: introduced
     */
    class NativeLayout extends pages_1.pages.FormBase {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            /** @internal */
            this.__widgets = new internal.PartListProperty(NativeLayout, this, "widgets", []);
            /** @internal */
            this.__headerWidget = new internal.PartProperty(NativeLayout, this, "headerWidget", null, false);
            this._containmentName = "documents";
        }
        get containerAsFolderBase() {
            return super.getContainerAs(projects_1.projects.FolderBase);
        }
        get widgets() {
            return this.__widgets.get();
        }
        /**
         * In version 7.22.0: introduced
         */
        get headerWidget() {
            return this.__headerWidget.get();
        }
        set headerWidget(newValue) {
            this.__headerWidget.set(newValue);
        }
        /**
         * Creates a new NativeLayout unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container) {
            return internal.instancehelpers.createUnit(container, NativeLayout);
        }
        /** @internal */
        _isByNameReferrable() {
            return this.__name.isAvailable;
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    NativeLayout.structureTypeName = "NativePages$NativeLayout";
    NativeLayout.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.21.0",
        deleted: "8.0.0",
        deletionMessage: null,
        properties: {
            headerWidget: {
                introduced: "7.22.0"
            }
        },
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.ModelUnit);
    nativepages.NativeLayout = NativeLayout;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 8.0.0: deleted
     * In version 7.23.0: introduced
     */
    class NativeLayoutCallArgument extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__parameter = new internal.ByNameReferenceProperty(NativeLayoutCallArgument, this, "parameter", null, "Pages$LayoutParameter");
            /** @internal */
            this.__widgets = new internal.PartListProperty(NativeLayoutCallArgument, this, "widgets", []);
            if (arguments.length < 4) {
                throw new Error("new NativeLayoutCallArgument() cannot be invoked directly, please use 'model.nativepages.createNativeLayoutCallArgument()'");
            }
        }
        get containerAsNativePage() {
            return super.getContainerAs(NativePage);
        }
        get parameter() {
            return this.__parameter.get();
        }
        set parameter(newValue) {
            this.__parameter.set(newValue);
        }
        get parameterQualifiedName() {
            return this.__parameter.qualifiedName();
        }
        get widgets() {
            return this.__widgets.get();
        }
        /**
         * Creates and returns a new NativeLayoutCallArgument instance in the SDK and on the server.
         * The new NativeLayoutCallArgument will be automatically stored in the 'arguments' property
         * of the parent NativePage element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, NativeLayoutCallArgument.structureTypeName, { start: "7.23.0", end: "7.23.0" });
            return internal.instancehelpers.createElement(container, NativeLayoutCallArgument, "arguments", true);
        }
        /**
         * Creates and returns a new NativeLayoutCallArgument instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, NativeLayoutCallArgument);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    NativeLayoutCallArgument.structureTypeName = "NativePages$NativeLayoutCallArgument";
    NativeLayoutCallArgument.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.23.0",
        deleted: "8.0.0",
        deletionMessage: null,
        properties: {
            parameter: {
                required: {
                    currentValue: true
                }
            }
        },
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    nativepages.NativeLayoutCallArgument = NativeLayoutCallArgument;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 8.0.0: deleted
     * In version 7.21.0: introduced
     */
    class NativePage extends pages_1.pages.FormBase {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            /** @internal */
            this.__layout = new internal.ByNameReferenceProperty(NativePage, this, "layout", null, "NativePages$NativeLayout");
            /** @internal */
            this.__arguments = new internal.PartListProperty(NativePage, this, "arguments", []);
            this._containmentName = "documents";
        }
        get containerAsFolderBase() {
            return super.getContainerAs(projects_1.projects.FolderBase);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get layout() {
            return this.__layout.get();
        }
        set layout(newValue) {
            this.__layout.set(newValue);
        }
        get layoutQualifiedName() {
            return this.__layout.qualifiedName();
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 7.23.0: introduced
         */
        get arguments() {
            return this.__arguments.get();
        }
        /**
         * Creates a new NativePage unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container) {
            return internal.instancehelpers.createUnit(container, NativePage);
        }
        /** @internal */
        _isByNameReferrable() {
            return this.__name.isAvailable;
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    NativePage.structureTypeName = "NativePages$NativePage";
    NativePage.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.21.0",
        deleted: "8.0.0",
        deletionMessage: null,
        properties: {
            layout: {
                required: {
                    currentValue: true
                }
            },
            arguments: {
                introduced: "7.23.0"
            }
        },
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.ModelUnit);
    nativepages.NativePage = NativePage;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 8.0.0: deleted
     * In version 7.23.0: introduced
     */
    class NativePageClientAction extends pages_1.pages.ClientAction {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__page = new internal.ByNameReferenceProperty(NativePageClientAction, this, "page", null, "NativePages$NativePage");
            if (arguments.length < 4) {
                throw new Error("new NativePageClientAction() cannot be invoked directly, please use 'model.nativepages.createNativePageClientAction()'");
            }
        }
        get containerAsWidgetValue() {
            return super.getContainerAs(customwidgets_1.customwidgets.WidgetValue);
        }
        get containerAsMenuItem() {
            return super.getContainerAs(menus_1.menus.MenuItem);
        }
        get containerAsActionButton() {
            return super.getContainerAs(pages_1.pages.ActionButton);
        }
        get containerAsActionItem() {
            return super.getContainerAs(pages_1.pages.ActionItem);
        }
        get containerAsAssociationWidget() {
            return super.getContainerAs(pages_1.pages.AssociationWidget);
        }
        get containerAsAttributeWidget() {
            return super.getContainerAs(pages_1.pages.AttributeWidget);
        }
        get containerAsDynamicImageViewer() {
            return super.getContainerAs(pages_1.pages.DynamicImageViewer);
        }
        get containerAsGridActionButton() {
            return super.getContainerAs(pages_1.pages.GridActionButton);
        }
        get containerAsListView() {
            return super.getContainerAs(pages_1.pages.ListView);
        }
        get containerAsReferenceSetSelector() {
            return super.getContainerAs(pages_1.pages.ReferenceSetSelector);
        }
        get containerAsStaticImageViewer() {
            return super.getContainerAs(pages_1.pages.StaticImageViewer);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get page() {
            return this.__page.get();
        }
        set page(newValue) {
            this.__page.set(newValue);
        }
        get pageQualifiedName() {
            return this.__page.qualifiedName();
        }
        /**
         * Creates and returns a new NativePageClientAction instance in the SDK and on the server.
         * The new NativePageClientAction will be automatically stored in the 'action' property
         * of the parent customwidgets.WidgetValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInWidgetValueUnderAction(container) {
            internal.createInVersionCheck(container.model, NativePageClientAction.structureTypeName, { start: "7.23.0", end: "7.23.0" });
            return internal.instancehelpers.createElement(container, NativePageClientAction, "action", false);
        }
        /**
         * Creates and returns a new NativePageClientAction instance in the SDK and on the server.
         * The new NativePageClientAction will be automatically stored in the 'action' property
         * of the parent menus.MenuItem element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInMenuItemUnderAction(container) {
            internal.createInVersionCheck(container.model, NativePageClientAction.structureTypeName, { start: "7.23.0", end: "7.23.0" });
            return internal.instancehelpers.createElement(container, NativePageClientAction, "action", false);
        }
        /**
         * Creates and returns a new NativePageClientAction instance in the SDK and on the server.
         * The new NativePageClientAction will be automatically stored in the 'action' property
         * of the parent pages.ActionButton element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInActionButtonUnderAction(container) {
            internal.createInVersionCheck(container.model, NativePageClientAction.structureTypeName, { start: "7.23.0", end: "7.23.0" });
            return internal.instancehelpers.createElement(container, NativePageClientAction, "action", false);
        }
        /**
         * Creates and returns a new NativePageClientAction instance in the SDK and on the server.
         * The new NativePageClientAction will be automatically stored in the 'action' property
         * of the parent pages.ActionItem element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInActionItemUnderAction(container) {
            internal.createInVersionCheck(container.model, NativePageClientAction.structureTypeName, { start: "7.23.0", end: "7.23.0" });
            return internal.instancehelpers.createElement(container, NativePageClientAction, "action", false);
        }
        /**
         * Creates and returns a new NativePageClientAction instance in the SDK and on the server.
         * The new NativePageClientAction will be automatically stored in the 'onChangeAction' property
         * of the parent pages.AssociationWidget element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInAssociationWidgetUnderOnChangeAction(container) {
            internal.createInVersionCheck(container.model, NativePageClientAction.structureTypeName, { start: "7.23.0", end: "7.23.0" });
            return internal.instancehelpers.createElement(container, NativePageClientAction, "onChangeAction", false);
        }
        /**
         * Creates and returns a new NativePageClientAction instance in the SDK and on the server.
         * The new NativePageClientAction will be automatically stored in the 'onChangeAction' property
         * of the parent pages.AttributeWidget element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInAttributeWidgetUnderOnChangeAction(container) {
            internal.createInVersionCheck(container.model, NativePageClientAction.structureTypeName, { start: "7.23.0", end: "7.23.0" });
            return internal.instancehelpers.createElement(container, NativePageClientAction, "onChangeAction", false);
        }
        /**
         * Creates and returns a new NativePageClientAction instance in the SDK and on the server.
         * The new NativePageClientAction will be automatically stored in the 'onEnterAction' property
         * of the parent pages.AttributeWidget element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInAttributeWidgetUnderOnEnterAction(container) {
            internal.createInVersionCheck(container.model, NativePageClientAction.structureTypeName, { start: "7.23.0", end: "7.23.0" });
            return internal.instancehelpers.createElement(container, NativePageClientAction, "onEnterAction", false);
        }
        /**
         * Creates and returns a new NativePageClientAction instance in the SDK and on the server.
         * The new NativePageClientAction will be automatically stored in the 'onLeaveAction' property
         * of the parent pages.AttributeWidget element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInAttributeWidgetUnderOnLeaveAction(container) {
            internal.createInVersionCheck(container.model, NativePageClientAction.structureTypeName, { start: "7.23.0", end: "7.23.0" });
            return internal.instancehelpers.createElement(container, NativePageClientAction, "onLeaveAction", false);
        }
        /**
         * Creates and returns a new NativePageClientAction instance in the SDK and on the server.
         * The new NativePageClientAction will be automatically stored in the 'clickAction' property
         * of the parent pages.DynamicImageViewer element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInDynamicImageViewerUnderClickAction(container) {
            internal.createInVersionCheck(container.model, NativePageClientAction.structureTypeName, { start: "7.23.0", end: "7.23.0" });
            return internal.instancehelpers.createElement(container, NativePageClientAction, "clickAction", false);
        }
        /**
         * Creates and returns a new NativePageClientAction instance in the SDK and on the server.
         * The new NativePageClientAction will be automatically stored in the 'action' property
         * of the parent pages.GridActionButton element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInGridActionButtonUnderAction(container) {
            internal.createInVersionCheck(container.model, NativePageClientAction.structureTypeName, { start: "7.23.0", end: "7.23.0" });
            return internal.instancehelpers.createElement(container, NativePageClientAction, "action", false);
        }
        /**
         * Creates and returns a new NativePageClientAction instance in the SDK and on the server.
         * The new NativePageClientAction will be automatically stored in the 'clickAction' property
         * of the parent pages.ListView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInListViewUnderClickAction(container) {
            internal.createInVersionCheck(container.model, NativePageClientAction.structureTypeName, { start: "7.23.0", end: "7.23.0" });
            return internal.instancehelpers.createElement(container, NativePageClientAction, "clickAction", false);
        }
        /**
         * Creates and returns a new NativePageClientAction instance in the SDK and on the server.
         * The new NativePageClientAction will be automatically stored in the 'onChangeAction' property
         * of the parent pages.ReferenceSetSelector element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInReferenceSetSelectorUnderOnChangeAction(container) {
            internal.createInVersionCheck(container.model, NativePageClientAction.structureTypeName, { start: "7.23.0", end: "7.23.0" });
            return internal.instancehelpers.createElement(container, NativePageClientAction, "onChangeAction", false);
        }
        /**
         * Creates and returns a new NativePageClientAction instance in the SDK and on the server.
         * The new NativePageClientAction will be automatically stored in the 'clickAction' property
         * of the parent pages.StaticImageViewer element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInStaticImageViewerUnderClickAction(container) {
            internal.createInVersionCheck(container.model, NativePageClientAction.structureTypeName, { start: "7.23.0", end: "7.23.0" });
            return internal.instancehelpers.createElement(container, NativePageClientAction, "clickAction", false);
        }
        /**
         * Creates and returns a new NativePageClientAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, NativePageClientAction);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    NativePageClientAction.structureTypeName = "NativePages$NativePageClientAction";
    NativePageClientAction.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.23.0",
        deleted: "8.0.0",
        deletionMessage: null,
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    nativepages.NativePageClientAction = NativePageClientAction;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 8.0.0: deleted
     * In version 7.23.0: introduced
     */
    class NativePlaceholder extends pages_1.pages.Widget {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new NativePlaceholder() cannot be invoked directly, please use 'model.nativepages.createNativePlaceholder()'");
            }
        }
        get containerAsNativeLayout() {
            return super.getContainerAs(NativeLayout);
        }
        get containerAsNativeLayoutCallArgument() {
            return super.getContainerAs(NativeLayoutCallArgument);
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
        /**
         * Creates and returns a new NativePlaceholder instance in the SDK and on the server.
         * The new NativePlaceholder will be automatically stored in the 'headerWidget' property
         * of the parent NativeLayout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInNativeLayoutUnderHeaderWidget(container) {
            internal.createInVersionCheck(container.model, NativePlaceholder.structureTypeName, { start: "7.23.0", end: "7.23.0" });
            return internal.instancehelpers.createElement(container, NativePlaceholder, "headerWidget", false);
        }
        /**
         * Creates and returns a new NativePlaceholder instance in the SDK and on the server.
         * The new NativePlaceholder will be automatically stored in the 'widgets' property
         * of the parent NativeLayout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInNativeLayoutUnderWidgets(container) {
            internal.createInVersionCheck(container.model, NativePlaceholder.structureTypeName, { start: "7.23.0", end: "7.23.0" });
            return internal.instancehelpers.createElement(container, NativePlaceholder, "widgets", true);
        }
        /**
         * Creates and returns a new NativePlaceholder instance in the SDK and on the server.
         * The new NativePlaceholder will be automatically stored in the 'widgets' property
         * of the parent NativeLayoutCallArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInNativeLayoutCallArgumentUnderWidgets(container) {
            internal.createInVersionCheck(container.model, NativePlaceholder.structureTypeName, { start: "7.23.0", end: "7.23.0" });
            return internal.instancehelpers.createElement(container, NativePlaceholder, "widgets", true);
        }
        /**
         * Creates and returns a new NativePlaceholder instance in the SDK and on the server.
         * The new NativePlaceholder will be automatically stored in the 'widgets' property
         * of the parent pages.BuildingBlock element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInBuildingBlockUnderWidgets(container) {
            internal.createInVersionCheck(container.model, NativePlaceholder.structureTypeName, { start: "7.23.0", end: "7.23.0" });
            return internal.instancehelpers.createElement(container, NativePlaceholder, "widgets", true);
        }
        /**
         * Creates and returns a new NativePlaceholder instance in the SDK and on the server.
         * The new NativePlaceholder will be automatically stored in the 'footerWidgets' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInDataViewUnderFooterWidgets(container) {
            internal.createInVersionCheck(container.model, NativePlaceholder.structureTypeName, { start: "7.23.0", end: "7.23.0" });
            return internal.instancehelpers.createElement(container, NativePlaceholder, "footerWidgets", true);
        }
        /**
         * Creates and returns a new NativePlaceholder instance in the SDK and on the server.
         * The new NativePlaceholder will be automatically stored in the 'widgets' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInDataViewUnderWidgets(container) {
            internal.createInVersionCheck(container.model, NativePlaceholder.structureTypeName, { start: "7.23.0", end: "7.23.0" });
            return internal.instancehelpers.createElement(container, NativePlaceholder, "widgets", true);
        }
        /**
         * Creates and returns a new NativePlaceholder instance in the SDK and on the server.
         * The new NativePlaceholder will be automatically stored in the 'widgets' property
         * of the parent pages.DivContainer element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInDivContainerUnderWidgets(container) {
            internal.createInVersionCheck(container.model, NativePlaceholder.structureTypeName, { start: "7.23.0", end: "7.23.0" });
            return internal.instancehelpers.createElement(container, NativePlaceholder, "widgets", true);
        }
        /**
         * Creates and returns a new NativePlaceholder instance in the SDK and on the server.
         * The new NativePlaceholder will be automatically stored in the 'widgets' property
         * of the parent pages.GroupBox element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInGroupBoxUnderWidgets(container) {
            internal.createInVersionCheck(container.model, NativePlaceholder.structureTypeName, { start: "7.23.0", end: "7.23.0" });
            return internal.instancehelpers.createElement(container, NativePlaceholder, "widgets", true);
        }
        /**
         * Creates and returns a new NativePlaceholder instance in the SDK and on the server.
         * The new NativePlaceholder will be automatically stored in the 'leftWidgets' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInHeaderUnderLeftWidgets(container) {
            internal.createInVersionCheck(container.model, NativePlaceholder.structureTypeName, { start: "7.23.0", end: "7.23.0" });
            return internal.instancehelpers.createElement(container, NativePlaceholder, "leftWidgets", true);
        }
        /**
         * Creates and returns a new NativePlaceholder instance in the SDK and on the server.
         * The new NativePlaceholder will be automatically stored in the 'rightWidgets' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInHeaderUnderRightWidgets(container) {
            internal.createInVersionCheck(container.model, NativePlaceholder.structureTypeName, { start: "7.23.0", end: "7.23.0" });
            return internal.instancehelpers.createElement(container, NativePlaceholder, "rightWidgets", true);
        }
        /**
         * Creates and returns a new NativePlaceholder instance in the SDK and on the server.
         * The new NativePlaceholder will be automatically stored in the 'widgets' property
         * of the parent pages.Layout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInLayoutUnderWidgets(container) {
            internal.createInVersionCheck(container.model, NativePlaceholder.structureTypeName, { start: "7.23.0", end: "7.23.0" });
            return internal.instancehelpers.createElement(container, NativePlaceholder, "widgets", true);
        }
        /**
         * Creates and returns a new NativePlaceholder instance in the SDK and on the server.
         * The new NativePlaceholder will be automatically stored in the 'widgets' property
         * of the parent pages.LayoutCallArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInLayoutCallArgumentUnderWidgets(container) {
            internal.createInVersionCheck(container.model, NativePlaceholder.structureTypeName, { start: "7.23.0", end: "7.23.0" });
            return internal.instancehelpers.createElement(container, NativePlaceholder, "widgets", true);
        }
        /**
         * Creates and returns a new NativePlaceholder instance in the SDK and on the server.
         * The new NativePlaceholder will be automatically stored in the 'widgets' property
         * of the parent pages.LayoutGridColumn element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInLayoutGridColumnUnderWidgets(container) {
            internal.createInVersionCheck(container.model, NativePlaceholder.structureTypeName, { start: "7.23.0", end: "7.23.0" });
            return internal.instancehelpers.createElement(container, NativePlaceholder, "widgets", true);
        }
        /**
         * Creates and returns a new NativePlaceholder instance in the SDK and on the server.
         * The new NativePlaceholder will be automatically stored in the 'widgets' property
         * of the parent pages.ListView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInListViewUnderWidgets(container) {
            internal.createInVersionCheck(container.model, NativePlaceholder.structureTypeName, { start: "7.23.0", end: "7.23.0" });
            return internal.instancehelpers.createElement(container, NativePlaceholder, "widgets", true);
        }
        /**
         * Creates and returns a new NativePlaceholder instance in the SDK and on the server.
         * The new NativePlaceholder will be automatically stored in the 'widgets' property
         * of the parent pages.ListViewTemplate element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInListViewTemplateUnderWidgets(container) {
            internal.createInVersionCheck(container.model, NativePlaceholder.structureTypeName, { start: "7.23.0", end: "7.23.0" });
            return internal.instancehelpers.createElement(container, NativePlaceholder, "widgets", true);
        }
        /**
         * Creates and returns a new NativePlaceholder instance in the SDK and on the server.
         * The new NativePlaceholder will be automatically stored in the 'widgets' property
         * of the parent pages.NavigationListItem element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInNavigationListItemUnderWidgets(container) {
            internal.createInVersionCheck(container.model, NativePlaceholder.structureTypeName, { start: "7.23.0", end: "7.23.0" });
            return internal.instancehelpers.createElement(container, NativePlaceholder, "widgets", true);
        }
        /**
         * Creates and returns a new NativePlaceholder instance in the SDK and on the server.
         * The new NativePlaceholder will be automatically stored in the 'widgets' property
         * of the parent pages.ScrollContainerRegion element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInScrollContainerRegionUnderWidgets(container) {
            internal.createInVersionCheck(container.model, NativePlaceholder.structureTypeName, { start: "7.23.0", end: "7.23.0" });
            return internal.instancehelpers.createElement(container, NativePlaceholder, "widgets", true);
        }
        /**
         * Creates and returns a new NativePlaceholder instance in the SDK and on the server.
         * The new NativePlaceholder will be automatically stored in the 'widgets' property
         * of the parent pages.Snippet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInSnippetUnderWidgets(container) {
            internal.createInVersionCheck(container.model, NativePlaceholder.structureTypeName, { start: "7.23.0", end: "7.23.0" });
            return internal.instancehelpers.createElement(container, NativePlaceholder, "widgets", true);
        }
        /**
         * Creates and returns a new NativePlaceholder instance in the SDK and on the server.
         * The new NativePlaceholder will be automatically stored in the 'firstWidgets' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInSplitPaneUnderFirstWidgets(container) {
            internal.createInVersionCheck(container.model, NativePlaceholder.structureTypeName, { start: "7.23.0", end: "7.23.0" });
            return internal.instancehelpers.createElement(container, NativePlaceholder, "firstWidgets", true);
        }
        /**
         * Creates and returns a new NativePlaceholder instance in the SDK and on the server.
         * The new NativePlaceholder will be automatically stored in the 'secondWidgets' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInSplitPaneUnderSecondWidgets(container) {
            internal.createInVersionCheck(container.model, NativePlaceholder.structureTypeName, { start: "7.23.0", end: "7.23.0" });
            return internal.instancehelpers.createElement(container, NativePlaceholder, "secondWidgets", true);
        }
        /**
         * Creates and returns a new NativePlaceholder instance in the SDK and on the server.
         * The new NativePlaceholder will be automatically stored in the 'widgets' property
         * of the parent pages.TabPage element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInTabPageUnderWidgets(container) {
            internal.createInVersionCheck(container.model, NativePlaceholder.structureTypeName, { start: "7.23.0", end: "7.23.0" });
            return internal.instancehelpers.createElement(container, NativePlaceholder, "widgets", true);
        }
        /**
         * Creates and returns a new NativePlaceholder instance in the SDK and on the server.
         * The new NativePlaceholder will be automatically stored in the 'widgets' property
         * of the parent pages.TableCell element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInTableCellUnderWidgets(container) {
            internal.createInVersionCheck(container.model, NativePlaceholder.structureTypeName, { start: "7.23.0", end: "7.23.0" });
            return internal.instancehelpers.createElement(container, NativePlaceholder, "widgets", true);
        }
        /**
         * Creates and returns a new NativePlaceholder instance in the SDK and on the server.
         * The new NativePlaceholder will be automatically stored in the 'widgets' property
         * of the parent pages.TemplateGridContents element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInTemplateGridContentsUnderWidgets(container) {
            internal.createInVersionCheck(container.model, NativePlaceholder.structureTypeName, { start: "7.23.0", end: "7.23.0" });
            return internal.instancehelpers.createElement(container, NativePlaceholder, "widgets", true);
        }
        /**
         * Creates and returns a new NativePlaceholder instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, NativePlaceholder);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    NativePlaceholder.structureTypeName = "NativePages$NativePlaceholder";
    NativePlaceholder.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.23.0",
        deleted: "8.0.0",
        deletionMessage: null,
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    nativepages.NativePlaceholder = NativePlaceholder;
})(nativepages = exports.nativepages || (exports.nativepages = {}));
const customwidgets_1 = require("./customwidgets");
const menus_1 = require("./menus");
const navigation_1 = require("./navigation");
const projects_1 = require("./projects");
const texts_1 = require("./texts");
//# sourceMappingURL=nativepages.js.map