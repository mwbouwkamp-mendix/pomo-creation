"use strict";
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.menus = exports.StructureVersionInfo = void 0;
const internal = require("../sdk/internal");
exports.StructureVersionInfo = internal.StructureVersionInfo;
const projects_1 = require("./projects");
var menus;
(function (menus) {
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `Menus`.
     */
    /**
     * See: {@link https://docs.mendix.com/refguide/menu relevant section in reference guide}
     */
    class MenuDocument extends projects_1.projects.Document {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            /** @internal */
            this.__itemCollection = new internal.PartProperty(MenuDocument, this, "itemCollection", null, true);
            this._containmentName = "documents";
        }
        get containerAsFolderBase() {
            return super.getContainerAs(projects_1.projects.FolderBase);
        }
        get itemCollection() {
            return this.__itemCollection.get();
        }
        set itemCollection(newValue) {
            this.__itemCollection.set(newValue);
        }
        /**
         * Creates a new MenuDocument unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container) {
            return internal.instancehelpers.createUnit(container, MenuDocument);
        }
        /** @internal */
        _isByNameReferrable() {
            return this.__name.isAvailable;
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.itemCollection = MenuItemCollection.create(this.model);
        }
    }
    MenuDocument.structureTypeName = "Menus$MenuDocument";
    MenuDocument.versionInfo = new exports.StructureVersionInfo({
        properties: {
            itemCollection: {
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.ModelUnit);
    menus.MenuDocument = MenuDocument;
    class MenuItemContainer extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__items = new internal.PartListProperty(MenuItemContainer, this, "items", []);
            if (arguments.length < 4) {
                throw new Error("new MenuItemContainer() cannot be invoked directly, please use 'model.menus.createMenuItemContainer()'");
            }
        }
        get containerAsMenuDocument() {
            return super.getContainerAs(MenuDocument);
        }
        get containerAsMenuItemContainer() {
            return super.getContainerAs(MenuItemContainer);
        }
        get containerAsNavigationProfile() {
            return super.getContainerAs(navigation_1.navigation.NavigationProfile);
        }
        get items() {
            return this.__items.get();
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    MenuItemContainer.structureTypeName = "Menus$MenuItemContainer";
    MenuItemContainer.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    menus.MenuItemContainer = MenuItemContainer;
    /**
     * See: {@link https://docs.mendix.com/refguide/menu relevant section in reference guide}
     */
    class MenuItem extends MenuItemContainer {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__caption = new internal.PartProperty(MenuItem, this, "caption", null, true);
            /** @internal */
            this.__icon = new internal.PartProperty(MenuItem, this, "icon", null, false);
            /** @internal */
            this.__alternativeText = new internal.PartProperty(MenuItem, this, "alternativeText", null, false);
            /** @internal */
            this.__action = new internal.PartProperty(MenuItem, this, "action", null, true);
            if (arguments.length < 4) {
                throw new Error("new MenuItem() cannot be invoked directly, please use 'model.menus.createMenuItem()'");
            }
        }
        get containerAsMenuItemContainer() {
            return super.getContainerAs(MenuItemContainer);
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
         * In version 8.12.0: introduced
         */
        get alternativeText() {
            return this.__alternativeText.get();
        }
        set alternativeText(newValue) {
            this.__alternativeText.set(newValue);
        }
        get action() {
            return this.__action.get();
        }
        set action(newValue) {
            this.__action.set(newValue);
        }
        /**
         * Creates and returns a new MenuItem instance in the SDK and on the server.
         * The new MenuItem will be automatically stored in the 'items' property
         * of the parent MenuItemContainer element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, MenuItem, "items", true);
        }
        /**
         * Creates and returns a new MenuItem instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, MenuItem);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.action = pages_1.pages.NoClientAction.create(this.model);
            this.caption = texts_1.texts.Text.create(this.model);
        }
    }
    MenuItem.structureTypeName = "Menus$MenuItem";
    MenuItem.versionInfo = new exports.StructureVersionInfo({
        properties: {
            caption: {
                required: {
                    currentValue: true
                }
            },
            alternativeText: {
                introduced: "8.12.0"
            },
            action: {
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    menus.MenuItem = MenuItem;
    class MenuItemCollection extends MenuItemContainer {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new MenuItemCollection() cannot be invoked directly, please use 'model.menus.createMenuItemCollection()'");
            }
        }
        get containerAsMenuDocument() {
            return super.getContainerAs(MenuDocument);
        }
        get containerAsNavigationProfile() {
            return super.getContainerAs(navigation_1.navigation.NavigationProfile);
        }
        /**
         * Creates and returns a new MenuItemCollection instance in the SDK and on the server.
         * The new MenuItemCollection will be automatically stored in the 'itemCollection' property
         * of the parent MenuDocument element passed as argument.
         */
        static createInMenuDocumentUnderItemCollection(container) {
            return internal.instancehelpers.createElement(container, MenuItemCollection, "itemCollection", false);
        }
        /**
         * Creates and returns a new MenuItemCollection instance in the SDK and on the server.
         * The new MenuItemCollection will be automatically stored in the 'menuItemCollection' property
         * of the parent navigation.NavigationProfile element passed as argument.
         */
        static createInNavigationProfileUnderMenuItemCollection(container) {
            return internal.instancehelpers.createElement(container, MenuItemCollection, "menuItemCollection", false);
        }
        /**
         * Creates and returns a new MenuItemCollection instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, MenuItemCollection);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    MenuItemCollection.structureTypeName = "Menus$MenuItemCollection";
    MenuItemCollection.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    menus.MenuItemCollection = MenuItemCollection;
})(menus = exports.menus || (exports.menus = {}));
const navigation_1 = require("./navigation");
const pages_1 = require("./pages");
const texts_1 = require("./texts");
//# sourceMappingURL=menus.js.map