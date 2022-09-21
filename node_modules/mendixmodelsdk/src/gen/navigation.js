"use strict";
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.navigation = exports.StructureVersionInfo = void 0;
const internal = require("../sdk/internal");
exports.StructureVersionInfo = internal.StructureVersionInfo;
const projects_1 = require("./projects");
var navigation;
(function (navigation) {
    class DeviceType extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "navigation.DeviceType";
        }
    }
    DeviceType.Desktop = new DeviceType("Desktop", {});
    DeviceType.Tablet = new DeviceType("Tablet", {});
    DeviceType.Phone = new DeviceType("Phone", {});
    navigation.DeviceType = DeviceType;
    class OfflineEntitySyncDownloadMode extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "navigation.OfflineEntitySyncDownloadMode";
        }
    }
    OfflineEntitySyncDownloadMode.All = new OfflineEntitySyncDownloadMode("All", {});
    OfflineEntitySyncDownloadMode.Constrained = new OfflineEntitySyncDownloadMode("Constrained", {});
    OfflineEntitySyncDownloadMode.None = new OfflineEntitySyncDownloadMode("None", {});
    OfflineEntitySyncDownloadMode.NoneAndPreserveData = new OfflineEntitySyncDownloadMode("NoneAndPreserveData", {});
    navigation.OfflineEntitySyncDownloadMode = OfflineEntitySyncDownloadMode;
    class ProfileKind extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "navigation.ProfileKind";
        }
    }
    ProfileKind.Responsive = new ProfileKind("Responsive", {});
    ProfileKind.ResponsiveOffline = new ProfileKind("ResponsiveOffline", {
        introduced: "8.14.0"
    });
    ProfileKind.HybridTablet = new ProfileKind("HybridTablet", {
        introduced: "7.4.0"
    });
    ProfileKind.HybridTabletOffline = new ProfileKind("HybridTabletOffline", {
        introduced: "7.4.0"
    });
    ProfileKind.HybridPhone = new ProfileKind("HybridPhone", {
        introduced: "7.4.0"
    });
    ProfileKind.HybridPhoneOffline = new ProfileKind("HybridPhoneOffline", {
        introduced: "7.4.0"
    });
    ProfileKind.Tablet = new ProfileKind("Tablet", {});
    ProfileKind.TabletOffline = new ProfileKind("TabletOffline", {
        introduced: "8.14.0"
    });
    ProfileKind.Phone = new ProfileKind("Phone", {});
    ProfileKind.PhoneOffline = new ProfileKind("PhoneOffline", {
        introduced: "8.14.0"
    });
    ProfileKind.NativePhone = new ProfileKind("NativePhone", {
        introduced: "7.20.0",
        deleted: "7.23.0",
        deletionMessage: null
    });
    ProfileKind.Hybrid = new ProfileKind("Hybrid", {
        deleted: "7.4.0",
        deletionMessage: null
    });
    ProfileKind.HybridOffline = new ProfileKind("HybridOffline", {
        deleted: "7.4.0",
        deletionMessage: null
    });
    navigation.ProfileKind = ProfileKind;
    class ProfileType extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "navigation.ProfileType";
        }
    }
    ProfileType.Desktop = new ProfileType("Desktop", {});
    ProfileType.Tablet = new ProfileType("Tablet", {});
    ProfileType.Phone = new ProfileType("Phone", {});
    ProfileType.HybridTablet = new ProfileType("HybridTablet", {
        introduced: "7.0.2"
    });
    ProfileType.HybridPhone = new ProfileType("HybridPhone", {
        introduced: "7.0.2"
    });
    ProfileType.OfflinePhone = new ProfileType("OfflinePhone", {
        deleted: "7.0.2",
        deletionMessage: null
    });
    ProfileType.HybridPhone6 = new ProfileType("HybridPhone6", {
        introduced: "6.10.4",
        deleted: "7.0.0",
        deletionMessage: null
    });
    ProfileType.HybridTablet6 = new ProfileType("HybridTablet6", {
        introduced: "6.10.4",
        deleted: "7.0.0",
        deletionMessage: null
    });
    navigation.ProfileType = ProfileType;
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `Navigation`.
     */
    class HomePageBase extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__page = new internal.ByNameReferenceProperty(HomePageBase, this, "page", null, "Pages$Page");
            /** @internal */
            this.__microflow = new internal.ByNameReferenceProperty(HomePageBase, this, "microflow", null, "Microflows$Microflow");
            if (arguments.length < 4) {
                throw new Error("new HomePageBase() cannot be invoked directly, please use 'model.navigation.createHomePageBase()'");
            }
        }
        get containerAsNavigationProfile() {
            return super.getContainerAs(NavigationProfile);
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
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    HomePageBase.structureTypeName = "Navigation$HomePageBase";
    HomePageBase.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    navigation.HomePageBase = HomePageBase;
    class HomePage extends HomePageBase {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new HomePage() cannot be invoked directly, please use 'model.navigation.createHomePage()'");
            }
        }
        get containerAsNavigationProfile() {
            return super.getContainerAs(NavigationProfile);
        }
        /**
         * Creates and returns a new HomePage instance in the SDK and on the server.
         * The new HomePage will be automatically stored in the 'homePage' property
         * of the parent NavigationProfile element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, HomePage, "homePage", false);
        }
        /**
         * Creates and returns a new HomePage instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, HomePage);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    HomePage.structureTypeName = "Navigation$HomePage";
    HomePage.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    navigation.HomePage = HomePage;
    /**
     * In version 9.4.0: introduced
     */
    class NativeHomePageBase extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__homePagePage = new internal.ByNameReferenceProperty(NativeHomePageBase, this, "homePagePage", null, "Pages$Page");
            /** @internal */
            this.__homePageNanoflow = new internal.ByNameReferenceProperty(NativeHomePageBase, this, "homePageNanoflow", null, "Microflows$Nanoflow");
            if (arguments.length < 4) {
                throw new Error("new NativeHomePageBase() cannot be invoked directly, please use 'model.navigation.createNativeHomePageBase()'");
            }
        }
        get containerAsNativeNavigationProfile() {
            return super.getContainerAs(NativeNavigationProfile);
        }
        get homePagePage() {
            return this.__homePagePage.get();
        }
        set homePagePage(newValue) {
            this.__homePagePage.set(newValue);
        }
        get homePagePageQualifiedName() {
            return this.__homePagePage.qualifiedName();
        }
        get homePageNanoflow() {
            return this.__homePageNanoflow.get();
        }
        set homePageNanoflow(newValue) {
            this.__homePageNanoflow.set(newValue);
        }
        get homePageNanoflowQualifiedName() {
            return this.__homePageNanoflow.qualifiedName();
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    NativeHomePageBase.structureTypeName = "Navigation$NativeHomePageBase";
    NativeHomePageBase.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.4.0"
    }, internal.StructureType.Element);
    navigation.NativeHomePageBase = NativeHomePageBase;
    /**
     * In version 9.4.0: introduced
     */
    class NativeHomePage extends NativeHomePageBase {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new NativeHomePage() cannot be invoked directly, please use 'model.navigation.createNativeHomePage()'");
            }
        }
        get containerAsNativeNavigationProfile() {
            return super.getContainerAs(NativeNavigationProfile);
        }
        /**
         * Creates and returns a new NativeHomePage instance in the SDK and on the server.
         * The new NativeHomePage will be automatically stored in the 'nativeHomePage' property
         * of the parent NativeNavigationProfile element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.4.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, NativeHomePage.structureTypeName, { start: "9.4.0" });
            return internal.instancehelpers.createElement(container, NativeHomePage, "nativeHomePage", false);
        }
        /**
         * Creates and returns a new NativeHomePage instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, NativeHomePage);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    NativeHomePage.structureTypeName = "Navigation$NativeHomePage";
    NativeHomePage.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.4.0"
    }, internal.StructureType.Element);
    navigation.NativeHomePage = NativeHomePage;
    class NavigationProfileBase extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__name = new internal.PrimitiveProperty(NavigationProfileBase, this, "name", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__offlineEntityConfigs = new internal.PartListProperty(NavigationProfileBase, this, "offlineEntityConfigs", []);
            if (arguments.length < 4) {
                throw new Error("new NavigationProfileBase() cannot be invoked directly, please use 'model.navigation.createNavigationProfileBase()'");
            }
        }
        get containerAsNavigationDocument() {
            return super.getContainerAs(NavigationDocument);
        }
        /**
         * In version 7.2.0: introduced
         */
        get name() {
            return this.__name.get();
        }
        set name(newValue) {
            this.__name.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 7.22.0: introduced
         */
        get offlineEntityConfigs() {
            return this.__offlineEntityConfigs.get();
        }
        get qualifiedName() {
            return this._getQualifiedName();
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    NavigationProfileBase.structureTypeName = "Navigation$NavigationProfileBase";
    NavigationProfileBase.versionInfo = new exports.StructureVersionInfo({
        properties: {
            name: {
                introduced: "7.2.0",
                public: {
                    currentValue: true
                }
            },
            offlineEntityConfigs: {
                introduced: "7.22.0"
            }
        },
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    navigation.NavigationProfileBase = NavigationProfileBase;
    /**
     * In version 7.22.0: introduced
     */
    class NativeNavigationProfile extends NavigationProfileBase {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__nativeHomePage = new internal.PartProperty(NativeNavigationProfile, this, "nativeHomePage", null, true);
            /** @internal */
            this.__homePage = new internal.ByNameReferenceProperty(NativeNavigationProfile, this, "homePage", null, "Pages$Page");
            /** @internal */
            this.__roleBasedNativeHomePages = new internal.PartListProperty(NativeNavigationProfile, this, "roleBasedNativeHomePages", []);
            /** @internal */
            this.__bottomBarItems = new internal.PartListProperty(NativeNavigationProfile, this, "bottomBarItems", []);
            /** @internal */
            this.__otaEnabled = new internal.PrimitiveProperty(NativeNavigationProfile, this, "otaEnabled", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__loggingEnabled = new internal.PrimitiveProperty(NativeNavigationProfile, this, "loggingEnabled", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__encryptionDbEnabled = new internal.PrimitiveProperty(NativeNavigationProfile, this, "encryptionDbEnabled", false, internal.PrimitiveTypeEnum.Boolean);
            if (arguments.length < 4) {
                throw new Error("new NativeNavigationProfile() cannot be invoked directly, please use 'model.navigation.createNativeNavigationProfile()'");
            }
        }
        get containerAsNavigationDocument() {
            return super.getContainerAs(NavigationDocument);
        }
        /**
         * In version 9.4.0: introduced
         */
        get nativeHomePage() {
            return this.__nativeHomePage.get();
        }
        set nativeHomePage(newValue) {
            this.__nativeHomePage.set(newValue);
        }
        /**
         * In version 9.4.0: deleted
         */
        get homePage() {
            return this.__homePage.get();
        }
        set homePage(newValue) {
            this.__homePage.set(newValue);
        }
        get homePageQualifiedName() {
            return this.__homePage.qualifiedName();
        }
        /**
         * In version 8.0.0: introduced
         */
        get roleBasedNativeHomePages() {
            return this.__roleBasedNativeHomePages.get();
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 8.0.0: introduced
         */
        get bottomBarItems() {
            return this.__bottomBarItems.get();
        }
        /**
         * In version 9.4.0: introduced
         */
        get otaEnabled() {
            return this.__otaEnabled.get();
        }
        set otaEnabled(newValue) {
            this.__otaEnabled.set(newValue);
        }
        /**
         * In version 9.15.0: introduced
         */
        get loggingEnabled() {
            return this.__loggingEnabled.get();
        }
        set loggingEnabled(newValue) {
            this.__loggingEnabled.set(newValue);
        }
        /**
         * In version 9.18.0: introduced
         */
        get encryptionDbEnabled() {
            return this.__encryptionDbEnabled.get();
        }
        set encryptionDbEnabled(newValue) {
            this.__encryptionDbEnabled.set(newValue);
        }
        /**
         * Creates and returns a new NativeNavigationProfile instance in the SDK and on the server.
         * The new NativeNavigationProfile will be automatically stored in the 'profiles' property
         * of the parent NavigationDocument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.22.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, NativeNavigationProfile.structureTypeName, { start: "7.22.0" });
            return internal.instancehelpers.createElement(container, NativeNavigationProfile, "profiles", true);
        }
        /**
         * Creates and returns a new NativeNavigationProfile instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, NativeNavigationProfile);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__encryptionDbEnabled.isAvailable) {
                this.encryptionDbEnabled = false;
            }
            if (this.__loggingEnabled.isAvailable) {
                this.loggingEnabled = false;
            }
            if (this.__nativeHomePage.isAvailable) {
                this.nativeHomePage = NativeHomePage.create(this.model);
            }
            if (this.__otaEnabled.isAvailable) {
                this.otaEnabled = false;
            }
        }
    }
    NativeNavigationProfile.structureTypeName = "Navigation$NativeNavigationProfile";
    NativeNavigationProfile.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.22.0",
        properties: {
            nativeHomePage: {
                introduced: "9.4.0",
                required: {
                    currentValue: true
                }
            },
            homePage: {
                deleted: "9.4.0",
                deletionMessage: null
            },
            roleBasedNativeHomePages: {
                introduced: "8.0.0"
            },
            bottomBarItems: {
                introduced: "8.0.0"
            },
            otaEnabled: {
                introduced: "9.4.0"
            },
            loggingEnabled: {
                introduced: "9.15.0"
            },
            encryptionDbEnabled: {
                introduced: "9.18.0"
            }
        },
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    navigation.NativeNavigationProfile = NativeNavigationProfile;
    /**
     * See: {@link https://docs.mendix.com/refguide/navigation relevant section in reference guide}
     */
    class NavigationDocument extends projects_1.projects.ProjectDocument {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            /** @internal */
            this.__profiles = new internal.PartListProperty(NavigationDocument, this, "profiles", []);
            /** @internal */
            this.__phoneProfile = new internal.PartProperty(NavigationDocument, this, "phoneProfile", null, true);
            /** @internal */
            this.__tabletProfile = new internal.PartProperty(NavigationDocument, this, "tabletProfile", null, true);
            /** @internal */
            this.__desktopProfile = new internal.PartProperty(NavigationDocument, this, "desktopProfile", null, true);
            /** @internal */
            this.__hybridTabletProfile = new internal.PartProperty(NavigationDocument, this, "hybridTabletProfile", null, true);
            /** @internal */
            this.__hybridPhoneProfile = new internal.PartProperty(NavigationDocument, this, "hybridPhoneProfile", null, true);
            /** @internal */
            this.__offlinePhoneProfile = new internal.PartProperty(NavigationDocument, this, "offlinePhoneProfile", null, true);
            /** @internal */
            this.__hybridPhoneProfile6 = new internal.PartProperty(NavigationDocument, this, "hybridPhoneProfile6", null, true);
            /** @internal */
            this.__hybridTabletProfile6 = new internal.PartProperty(NavigationDocument, this, "hybridTabletProfile6", null, true);
            this._containmentName = "projectDocuments";
        }
        get containerAsProject() {
            return super.getContainerAs(projects_1.projects.Project);
        }
        /**
         * In version 7.2.0: introduced
         */
        get profiles() {
            return this.__profiles.get();
        }
        /**
         * In version 7.2.0: deleted
         */
        get phoneProfile() {
            return this.__phoneProfile.get();
        }
        set phoneProfile(newValue) {
            this.__phoneProfile.set(newValue);
        }
        /**
         * In version 7.2.0: deleted
         */
        get tabletProfile() {
            return this.__tabletProfile.get();
        }
        set tabletProfile(newValue) {
            this.__tabletProfile.set(newValue);
        }
        /**
         * In version 7.2.0: deleted
         */
        get desktopProfile() {
            return this.__desktopProfile.get();
        }
        set desktopProfile(newValue) {
            this.__desktopProfile.set(newValue);
        }
        /**
         * In version 7.2.0: deleted
         * In version 7.0.2: introduced
         */
        get hybridTabletProfile() {
            return this.__hybridTabletProfile.get();
        }
        set hybridTabletProfile(newValue) {
            this.__hybridTabletProfile.set(newValue);
        }
        /**
         * In version 7.2.0: deleted
         * In version 7.0.2: introduced
         */
        get hybridPhoneProfile() {
            return this.__hybridPhoneProfile.get();
        }
        set hybridPhoneProfile(newValue) {
            this.__hybridPhoneProfile.set(newValue);
        }
        /**
         * In version 7.0.2: deleted
         */
        get offlinePhoneProfile() {
            return this.__offlinePhoneProfile.get();
        }
        set offlinePhoneProfile(newValue) {
            this.__offlinePhoneProfile.set(newValue);
        }
        /**
         * In version 7.0.0: deleted
         * In version 6.10.4: introduced
         */
        get hybridPhoneProfile6() {
            return this.__hybridPhoneProfile6.get();
        }
        set hybridPhoneProfile6(newValue) {
            this.__hybridPhoneProfile6.set(newValue);
        }
        /**
         * In version 7.0.0: deleted
         * In version 6.10.4: introduced
         */
        get hybridTabletProfile6() {
            return this.__hybridTabletProfile6.get();
        }
        set hybridTabletProfile6(newValue) {
            this.__hybridTabletProfile6.set(newValue);
        }
        /**
         * Creates a new NavigationDocument unit in the SDK and on the server.
         * Expects one argument, the projects.IProject in which this unit is contained.
         */
        static createIn(container) {
            return internal.instancehelpers.createUnit(container, NavigationDocument);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__desktopProfile.isAvailable) {
                this.desktopProfile = NavigationProfile.create(this.model);
            }
            if (this.__hybridPhoneProfile.isAvailable) {
                this.hybridPhoneProfile = NavigationProfile.create(this.model);
            }
            if (this.__hybridPhoneProfile6.isAvailable) {
                this.hybridPhoneProfile6 = NavigationProfile.create(this.model);
            }
            if (this.__hybridTabletProfile.isAvailable) {
                this.hybridTabletProfile = NavigationProfile.create(this.model);
            }
            if (this.__hybridTabletProfile6.isAvailable) {
                this.hybridTabletProfile6 = NavigationProfile.create(this.model);
            }
            if (this.__offlinePhoneProfile.isAvailable) {
                this.offlinePhoneProfile = NavigationProfile.create(this.model);
            }
            if (this.__phoneProfile.isAvailable) {
                this.phoneProfile = NavigationProfile.create(this.model);
            }
            if (this.__profiles.isAvailable) {
                this.profiles.replace([
                    ((navigationProfile) => {
                        navigationProfile.name = "Responsive";
                        navigationProfile.kind = ProfileKind.Responsive;
                        return navigationProfile;
                    })(NavigationProfile.create(this.model))
                ]);
            }
            if (this.__tabletProfile.isAvailable) {
                this.tabletProfile = NavigationProfile.create(this.model);
            }
        }
    }
    NavigationDocument.structureTypeName = "Navigation$NavigationDocument";
    NavigationDocument.versionInfo = new exports.StructureVersionInfo({
        properties: {
            profiles: {
                introduced: "7.2.0",
                public: {
                    currentValue: true
                }
            },
            phoneProfile: {
                deleted: "7.2.0",
                deletionMessage: null,
                required: {
                    currentValue: true
                }
            },
            tabletProfile: {
                deleted: "7.2.0",
                deletionMessage: null,
                required: {
                    currentValue: true
                }
            },
            desktopProfile: {
                deleted: "7.2.0",
                deletionMessage: null,
                required: {
                    currentValue: true
                }
            },
            hybridTabletProfile: {
                introduced: "7.0.2",
                deleted: "7.2.0",
                deletionMessage: null,
                required: {
                    currentValue: true
                }
            },
            hybridPhoneProfile: {
                introduced: "7.0.2",
                deleted: "7.2.0",
                deletionMessage: null,
                required: {
                    currentValue: true
                }
            },
            offlinePhoneProfile: {
                deleted: "7.0.2",
                deletionMessage: null,
                required: {
                    currentValue: true
                }
            },
            hybridPhoneProfile6: {
                introduced: "6.10.4",
                deleted: "7.0.0",
                deletionMessage: null,
                required: {
                    currentValue: true
                }
            },
            hybridTabletProfile6: {
                introduced: "6.10.4",
                deleted: "7.0.0",
                deletionMessage: null,
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.ModelUnit);
    navigation.NavigationDocument = NavigationDocument;
    /**
     * In version 7.2.0: added public
     */
    class NavigationProfile extends NavigationProfileBase {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__kind = new internal.EnumProperty(NavigationProfile, this, "kind", ProfileKind.Responsive, ProfileKind);
            /** @internal */
            this.__enabled = new internal.PrimitiveProperty(NavigationProfile, this, "enabled", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__offlineEnabled = new internal.PrimitiveProperty(NavigationProfile, this, "offlineEnabled", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__homePage = new internal.PartProperty(NavigationProfile, this, "homePage", null, true);
            /** @internal */
            this.__roleBasedHomePages = new internal.PartListProperty(NavigationProfile, this, "roleBasedHomePages", []);
            /** @internal */
            this.__applicationTitle = new internal.PrimitiveProperty(NavigationProfile, this, "applicationTitle", "Mendix", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__appTitle = new internal.PartProperty(NavigationProfile, this, "appTitle", null, true);
            /** @internal */
            this.__appIcon = new internal.ByNameReferenceProperty(NavigationProfile, this, "appIcon", null, "Images$Image");
            /** @internal */
            this.__loginPageSettings = new internal.PartProperty(NavigationProfile, this, "loginPageSettings", null, true);
            /** @internal */
            this.__menuItemCollection = new internal.PartProperty(NavigationProfile, this, "menuItemCollection", null, true);
            /** @internal */
            this.__offlineEnabled6 = new internal.PrimitiveProperty(NavigationProfile, this, "offlineEnabled6", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__progressiveWebAppSettings = new internal.PartProperty(NavigationProfile, this, "progressiveWebAppSettings", null, false);
            if (arguments.length < 4) {
                throw new Error("new NavigationProfile() cannot be invoked directly, please use 'model.navigation.createNavigationProfile()'");
            }
        }
        get containerAsNavigationDocument() {
            return super.getContainerAs(NavigationDocument);
        }
        /**
         * In version 7.2.0: introduced
         */
        get kind() {
            return this.__kind.get();
        }
        set kind(newValue) {
            this.__kind.set(newValue);
        }
        /**
         * In version 7.2.0: deleted
         */
        get enabled() {
            return this.__enabled.get();
        }
        set enabled(newValue) {
            this.__enabled.set(newValue);
        }
        /**
         * In version 7.2.0: deleted
         * In version 7.0.2: introduced
         */
        get offlineEnabled() {
            return this.__offlineEnabled.get();
        }
        set offlineEnabled(newValue) {
            this.__offlineEnabled.set(newValue);
        }
        get homePage() {
            return this.__homePage.get();
        }
        set homePage(newValue) {
            this.__homePage.set(newValue);
        }
        get roleBasedHomePages() {
            return this.__roleBasedHomePages.get();
        }
        /**
         * In version 8.12.0: deleted
         */
        get applicationTitle() {
            return this.__applicationTitle.get();
        }
        set applicationTitle(newValue) {
            this.__applicationTitle.set(newValue);
        }
        /**
         * In version 8.12.0: introduced
         */
        get appTitle() {
            return this.__appTitle.get();
        }
        set appTitle(newValue) {
            this.__appTitle.set(newValue);
        }
        /**
         * In version 8.12.0: introduced
         */
        get appIcon() {
            return this.__appIcon.get();
        }
        set appIcon(newValue) {
            this.__appIcon.set(newValue);
        }
        get appIconQualifiedName() {
            return this.__appIcon.qualifiedName();
        }
        /**
         * In version 7.0.2: introduced
         */
        get loginPageSettings() {
            return this.__loginPageSettings.get();
        }
        set loginPageSettings(newValue) {
            this.__loginPageSettings.set(newValue);
        }
        get menuItemCollection() {
            return this.__menuItemCollection.get();
        }
        set menuItemCollection(newValue) {
            this.__menuItemCollection.set(newValue);
        }
        /**
         * In version 7.0.0: deleted
         * In version 6.10.4: introduced
         */
        get offlineEnabled6() {
            return this.__offlineEnabled6.get();
        }
        set offlineEnabled6(newValue) {
            this.__offlineEnabled6.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.0.3: introduced
         */
        get progressiveWebAppSettings() {
            return this.__progressiveWebAppSettings.get();
        }
        set progressiveWebAppSettings(newValue) {
            this.__progressiveWebAppSettings.set(newValue);
        }
        /**
         * Creates and returns a new NavigationProfile instance in the SDK and on the server.
         * The new NavigationProfile will be automatically stored in the 'profiles' property
         * of the parent NavigationDocument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.2.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, NavigationProfile.structureTypeName, { start: "7.2.0" });
            return internal.instancehelpers.createElement(container, NavigationProfile, "profiles", true);
        }
        /**
         * Creates and returns a new NavigationProfile instance in the SDK and on the server.
         * The new NavigationProfile will be automatically stored in the 'desktopProfile' property
         * of the parent NavigationDocument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.1.0
         */
        static createInNavigationDocumentUnderDesktopProfile(container) {
            internal.createInVersionCheck(container.model, NavigationProfile.structureTypeName, { end: "7.1.0" });
            return internal.instancehelpers.createElement(container, NavigationProfile, "desktopProfile", false);
        }
        /**
         * Creates and returns a new NavigationProfile instance in the SDK and on the server.
         * The new NavigationProfile will be automatically stored in the 'hybridPhoneProfile' property
         * of the parent NavigationDocument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.0.2 to 7.1.0
         */
        static createInNavigationDocumentUnderHybridPhoneProfile(container) {
            internal.createInVersionCheck(container.model, NavigationProfile.structureTypeName, { start: "7.0.2", end: "7.1.0" });
            return internal.instancehelpers.createElement(container, NavigationProfile, "hybridPhoneProfile", false);
        }
        /**
         * Creates and returns a new NavigationProfile instance in the SDK and on the server.
         * The new NavigationProfile will be automatically stored in the 'hybridPhoneProfile6' property
         * of the parent NavigationDocument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.10.4 to 6.10.4
         */
        static createInNavigationDocumentUnderHybridPhoneProfile6(container) {
            internal.createInVersionCheck(container.model, NavigationProfile.structureTypeName, { start: "6.10.4", end: "6.10.4" });
            return internal.instancehelpers.createElement(container, NavigationProfile, "hybridPhoneProfile6", false);
        }
        /**
         * Creates and returns a new NavigationProfile instance in the SDK and on the server.
         * The new NavigationProfile will be automatically stored in the 'hybridTabletProfile' property
         * of the parent NavigationDocument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.0.2 to 7.1.0
         */
        static createInNavigationDocumentUnderHybridTabletProfile(container) {
            internal.createInVersionCheck(container.model, NavigationProfile.structureTypeName, { start: "7.0.2", end: "7.1.0" });
            return internal.instancehelpers.createElement(container, NavigationProfile, "hybridTabletProfile", false);
        }
        /**
         * Creates and returns a new NavigationProfile instance in the SDK and on the server.
         * The new NavigationProfile will be automatically stored in the 'hybridTabletProfile6' property
         * of the parent NavigationDocument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.10.4 to 6.10.4
         */
        static createInNavigationDocumentUnderHybridTabletProfile6(container) {
            internal.createInVersionCheck(container.model, NavigationProfile.structureTypeName, { start: "6.10.4", end: "6.10.4" });
            return internal.instancehelpers.createElement(container, NavigationProfile, "hybridTabletProfile6", false);
        }
        /**
         * Creates and returns a new NavigationProfile instance in the SDK and on the server.
         * The new NavigationProfile will be automatically stored in the 'offlinePhoneProfile' property
         * of the parent NavigationDocument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.0.1
         */
        static createInNavigationDocumentUnderOfflinePhoneProfile(container) {
            internal.createInVersionCheck(container.model, NavigationProfile.structureTypeName, { end: "7.0.1" });
            return internal.instancehelpers.createElement(container, NavigationProfile, "offlinePhoneProfile", false);
        }
        /**
         * Creates and returns a new NavigationProfile instance in the SDK and on the server.
         * The new NavigationProfile will be automatically stored in the 'phoneProfile' property
         * of the parent NavigationDocument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.1.0
         */
        static createInNavigationDocumentUnderPhoneProfile(container) {
            internal.createInVersionCheck(container.model, NavigationProfile.structureTypeName, { end: "7.1.0" });
            return internal.instancehelpers.createElement(container, NavigationProfile, "phoneProfile", false);
        }
        /**
         * Creates and returns a new NavigationProfile instance in the SDK and on the server.
         * The new NavigationProfile will be automatically stored in the 'profiles' property
         * of the parent NavigationDocument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.2.0 and higher
         */
        static createInNavigationDocumentUnderProfiles(container) {
            internal.createInVersionCheck(container.model, NavigationProfile.structureTypeName, { start: "7.2.0" });
            return internal.instancehelpers.createElement(container, NavigationProfile, "profiles", true);
        }
        /**
         * Creates and returns a new NavigationProfile instance in the SDK and on the server.
         * The new NavigationProfile will be automatically stored in the 'tabletProfile' property
         * of the parent NavigationDocument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.1.0
         */
        static createInNavigationDocumentUnderTabletProfile(container) {
            internal.createInVersionCheck(container.model, NavigationProfile.structureTypeName, { end: "7.1.0" });
            return internal.instancehelpers.createElement(container, NavigationProfile, "tabletProfile", false);
        }
        /**
         * Creates and returns a new NavigationProfile instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, NavigationProfile);
        }
        /** @internal */
        _isByNameReferrable() {
            return this.__name.isAvailable;
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__appTitle.isAvailable) {
                this.appTitle = ((text) => {
                    text.translations.replace([
                        ((translation) => {
                            translation.languageCode = "en_US";
                            translation.text = "Mendix";
                            return translation;
                        })(texts_1.texts.Translation.create(this.model))
                    ]);
                    return text;
                })(texts_1.texts.Text.create(this.model));
            }
            if (this.__applicationTitle.isAvailable) {
                (() => {
                    if (internal.isAtLeast("6.9.0", this.model)) {
                        this.applicationTitle = "Mendix";
                        return;
                    }
                    this.applicationTitle = "Mendix 5";
                })();
            }
            if (this.__enabled.isAvailable) {
                (() => {
                    if (internal.isAtLeast("6.9.0", this.model)) {
                        this.enabled = false;
                        return;
                    }
                    this.enabled = true;
                })();
            }
            this.homePage = HomePage.create(this.model);
            if (this.__kind.isAvailable) {
                this.kind = ProfileKind.Responsive;
            }
            if (this.__loginPageSettings.isAvailable) {
                this.loginPageSettings = pages_1.pages.PageSettings.create(this.model);
            }
            this.menuItemCollection = menus_1.menus.MenuItemCollection.create(this.model);
            if (this.__offlineEnabled.isAvailable) {
                this.offlineEnabled = false;
            }
            if (this.__offlineEnabled6.isAvailable) {
                this.offlineEnabled6 = false;
            }
        }
    }
    NavigationProfile.structureTypeName = "Navigation$NavigationProfile";
    NavigationProfile.versionInfo = new exports.StructureVersionInfo({
        properties: {
            kind: {
                introduced: "7.2.0"
            },
            enabled: {
                deleted: "7.2.0",
                deletionMessage: null
            },
            offlineEnabled: {
                introduced: "7.0.2",
                deleted: "7.2.0",
                deletionMessage: null
            },
            homePage: {
                required: {
                    currentValue: true
                }
            },
            applicationTitle: {
                deleted: "8.12.0",
                deletionMessage: "Use property 'appTitle' instead"
            },
            appTitle: {
                introduced: "8.12.0",
                required: {
                    currentValue: true
                }
            },
            appIcon: {
                introduced: "8.12.0"
            },
            loginPageSettings: {
                introduced: "7.0.2",
                required: {
                    currentValue: true
                }
            },
            menuItemCollection: {
                required: {
                    currentValue: true
                }
            },
            offlineEnabled6: {
                introduced: "6.10.4",
                deleted: "7.0.0",
                deletionMessage: null
            },
            progressiveWebAppSettings: {
                introduced: "9.0.3"
            }
        },
        public: {
            currentValue: true,
            changedIn: ["7.2.0"]
        }
    }, internal.StructureType.Element);
    navigation.NavigationProfile = NavigationProfile;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 7.22.0: introduced
     */
    class OfflineEntityConfig extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__entity = new internal.ByNameReferenceProperty(OfflineEntityConfig, this, "entity", null, "DomainModels$Entity");
            /** @internal */
            this.__downloadMode = new internal.EnumProperty(OfflineEntityConfig, this, "downloadMode", OfflineEntitySyncDownloadMode.All, OfflineEntitySyncDownloadMode);
            /** @internal */
            this.__shouldDownload = new internal.PrimitiveProperty(OfflineEntityConfig, this, "shouldDownload", true, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__constraint = new internal.PrimitiveProperty(OfflineEntityConfig, this, "constraint", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new OfflineEntityConfig() cannot be invoked directly, please use 'model.navigation.createOfflineEntityConfig()'");
            }
        }
        get containerAsNavigationProfileBase() {
            return super.getContainerAs(NavigationProfileBase);
        }
        get entity() {
            return this.__entity.get();
        }
        set entity(newValue) {
            this.__entity.set(newValue);
        }
        get entityQualifiedName() {
            return this.__entity.qualifiedName();
        }
        /**
         * In version 8.9.0: introduced
         */
        get downloadMode() {
            return this.__downloadMode.get();
        }
        set downloadMode(newValue) {
            this.__downloadMode.set(newValue);
        }
        /**
         * In version 8.9.0: deleted
         */
        get shouldDownload() {
            return this.__shouldDownload.get();
        }
        set shouldDownload(newValue) {
            this.__shouldDownload.set(newValue);
        }
        /**
         * The value of this property is conceptually of type xPathConstraints.XPathConstraint.
         */
        get constraint() {
            return this.__constraint.get();
        }
        set constraint(newValue) {
            this.__constraint.set(newValue);
        }
        /**
         * Creates and returns a new OfflineEntityConfig instance in the SDK and on the server.
         * The new OfflineEntityConfig will be automatically stored in the 'offlineEntityConfigs' property
         * of the parent NavigationProfileBase element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.22.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, OfflineEntityConfig.structureTypeName, { start: "7.22.0" });
            return internal.instancehelpers.createElement(container, OfflineEntityConfig, "offlineEntityConfigs", true);
        }
        /**
         * Creates and returns a new OfflineEntityConfig instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, OfflineEntityConfig);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__downloadMode.isAvailable) {
                this.downloadMode = OfflineEntitySyncDownloadMode.All;
            }
            if (this.__shouldDownload.isAvailable) {
                this.shouldDownload = true;
            }
        }
    }
    OfflineEntityConfig.structureTypeName = "Navigation$OfflineEntityConfig";
    OfflineEntityConfig.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.22.0",
        properties: {
            entity: {
                required: {
                    currentValue: true
                }
            },
            downloadMode: {
                introduced: "8.9.0"
            },
            shouldDownload: {
                deleted: "8.9.0",
                deletionMessage: null
            }
        },
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    navigation.OfflineEntityConfig = OfflineEntityConfig;
    /**
     * See: {@link https://docs.mendix.com/refguide/progressive-web-app relevant section in reference guide}
     *
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.0.3: introduced
     */
    class ProgressiveWebAppSettings extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__precaching = new internal.PrimitiveProperty(ProgressiveWebAppSettings, this, "precaching", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__installPrompt = new internal.PrimitiveProperty(ProgressiveWebAppSettings, this, "installPrompt", true, internal.PrimitiveTypeEnum.Boolean);
            if (arguments.length < 4) {
                throw new Error("new ProgressiveWebAppSettings() cannot be invoked directly, please use 'model.navigation.createProgressiveWebAppSettings()'");
            }
        }
        get containerAsNavigationProfile() {
            return super.getContainerAs(NavigationProfile);
        }
        get precaching() {
            return this.__precaching.get();
        }
        set precaching(newValue) {
            this.__precaching.set(newValue);
        }
        get installPrompt() {
            return this.__installPrompt.get();
        }
        set installPrompt(newValue) {
            this.__installPrompt.set(newValue);
        }
        /**
         * Creates and returns a new ProgressiveWebAppSettings instance in the SDK and on the server.
         * The new ProgressiveWebAppSettings will be automatically stored in the 'progressiveWebAppSettings' property
         * of the parent NavigationProfile element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.3 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, ProgressiveWebAppSettings.structureTypeName, { start: "9.0.3" });
            return internal.instancehelpers.createElement(container, ProgressiveWebAppSettings, "progressiveWebAppSettings", false);
        }
        /**
         * Creates and returns a new ProgressiveWebAppSettings instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ProgressiveWebAppSettings);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.installPrompt = true;
            this.precaching = false;
        }
    }
    ProgressiveWebAppSettings.structureTypeName = "Navigation$ProgressiveWebAppSettings";
    ProgressiveWebAppSettings.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.0.3",
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    navigation.ProgressiveWebAppSettings = ProgressiveWebAppSettings;
    class RoleBasedHomePage extends HomePageBase {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__userRole = new internal.ByNameReferenceProperty(RoleBasedHomePage, this, "userRole", null, "Security$UserRole");
            if (arguments.length < 4) {
                throw new Error("new RoleBasedHomePage() cannot be invoked directly, please use 'model.navigation.createRoleBasedHomePage()'");
            }
        }
        get containerAsNavigationProfile() {
            return super.getContainerAs(NavigationProfile);
        }
        get userRole() {
            return this.__userRole.get();
        }
        set userRole(newValue) {
            this.__userRole.set(newValue);
        }
        get userRoleQualifiedName() {
            return this.__userRole.qualifiedName();
        }
        /**
         * Creates and returns a new RoleBasedHomePage instance in the SDK and on the server.
         * The new RoleBasedHomePage will be automatically stored in the 'roleBasedHomePages' property
         * of the parent NavigationProfile element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, RoleBasedHomePage, "roleBasedHomePages", true);
        }
        /**
         * Creates and returns a new RoleBasedHomePage instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, RoleBasedHomePage);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    RoleBasedHomePage.structureTypeName = "Navigation$RoleBasedHomePage";
    RoleBasedHomePage.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
    navigation.RoleBasedHomePage = RoleBasedHomePage;
    /**
     * In version 8.0.0: introduced
     */
    class RoleBasedNativeHomePage extends NativeHomePageBase {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__userRole = new internal.ByNameReferenceProperty(RoleBasedNativeHomePage, this, "userRole", null, "Security$UserRole");
            /** @internal */
            this.__page = new internal.ByNameReferenceProperty(RoleBasedNativeHomePage, this, "page", null, "Pages$Page");
            if (arguments.length < 4) {
                throw new Error("new RoleBasedNativeHomePage() cannot be invoked directly, please use 'model.navigation.createRoleBasedNativeHomePage()'");
            }
        }
        get containerAsNativeNavigationProfile() {
            return super.getContainerAs(NativeNavigationProfile);
        }
        get userRole() {
            return this.__userRole.get();
        }
        set userRole(newValue) {
            this.__userRole.set(newValue);
        }
        get userRoleQualifiedName() {
            return this.__userRole.qualifiedName();
        }
        /**
         * In version 9.4.0: deleted
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
         * Creates and returns a new RoleBasedNativeHomePage instance in the SDK and on the server.
         * The new RoleBasedNativeHomePage will be automatically stored in the 'roleBasedNativeHomePages' property
         * of the parent NativeNavigationProfile element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, RoleBasedNativeHomePage.structureTypeName, { start: "8.0.0" });
            return internal.instancehelpers.createElement(container, RoleBasedNativeHomePage, "roleBasedNativeHomePages", true);
        }
        /**
         * Creates and returns a new RoleBasedNativeHomePage instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, RoleBasedNativeHomePage);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    RoleBasedNativeHomePage.structureTypeName = "Navigation$RoleBasedNativeHomePage";
    RoleBasedNativeHomePage.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.0.0",
        properties: {
            page: {
                deleted: "9.4.0",
                deletionMessage: null
            }
        }
    }, internal.StructureType.Element);
    navigation.RoleBasedNativeHomePage = RoleBasedNativeHomePage;
})(navigation = exports.navigation || (exports.navigation = {}));
const menus_1 = require("./menus");
const pages_1 = require("./pages");
const texts_1 = require("./texts");
//# sourceMappingURL=navigation.js.map