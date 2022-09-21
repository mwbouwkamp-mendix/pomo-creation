import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
import { projects } from "./projects";
export declare namespace navigation {
    class DeviceType extends internal.AbstractEnum {
        static Desktop: DeviceType;
        static Tablet: DeviceType;
        static Phone: DeviceType;
        protected qualifiedTsTypeName: string;
    }
    class OfflineEntitySyncDownloadMode extends internal.AbstractEnum {
        static All: OfflineEntitySyncDownloadMode;
        static Constrained: OfflineEntitySyncDownloadMode;
        static None: OfflineEntitySyncDownloadMode;
        static NoneAndPreserveData: OfflineEntitySyncDownloadMode;
        protected qualifiedTsTypeName: string;
    }
    class ProfileKind extends internal.AbstractEnum {
        static Responsive: ProfileKind;
        static ResponsiveOffline: ProfileKind;
        static HybridTablet: ProfileKind;
        static HybridTabletOffline: ProfileKind;
        static HybridPhone: ProfileKind;
        static HybridPhoneOffline: ProfileKind;
        static Tablet: ProfileKind;
        static TabletOffline: ProfileKind;
        static Phone: ProfileKind;
        static PhoneOffline: ProfileKind;
        static NativePhone: ProfileKind;
        static Hybrid: ProfileKind;
        static HybridOffline: ProfileKind;
        protected qualifiedTsTypeName: string;
    }
    class ProfileType extends internal.AbstractEnum {
        static Desktop: ProfileType;
        static Tablet: ProfileType;
        static Phone: ProfileType;
        static HybridTablet: ProfileType;
        static HybridPhone: ProfileType;
        static OfflinePhone: ProfileType;
        static HybridPhone6: ProfileType;
        static HybridTablet6: ProfileType;
        protected qualifiedTsTypeName: string;
    }
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `Navigation`.
     */
    abstract class HomePageBase extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsNavigationProfile(): NavigationProfile;
        get page(): pages.IPage | null;
        set page(newValue: pages.IPage | null);
        get pageQualifiedName(): string | null;
        get microflow(): microflows.IMicroflow | null;
        set microflow(newValue: microflows.IMicroflow | null);
        get microflowQualifiedName(): string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    class HomePage extends HomePageBase {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsNavigationProfile(): NavigationProfile;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new HomePage instance in the SDK and on the server.
         * The new HomePage will be automatically stored in the 'homePage' property
         * of the parent NavigationProfile element passed as argument.
         */
        static createIn(container: NavigationProfile): HomePage;
        /**
         * Creates and returns a new HomePage instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): HomePage;
    }
    /**
     * In version 9.4.0: introduced
     */
    abstract class NativeHomePageBase extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsNativeNavigationProfile(): NativeNavigationProfile;
        get homePagePage(): pages.IPage | null;
        set homePagePage(newValue: pages.IPage | null);
        get homePagePageQualifiedName(): string | null;
        get homePageNanoflow(): microflows.INanoflow | null;
        set homePageNanoflow(newValue: microflows.INanoflow | null);
        get homePageNanoflowQualifiedName(): string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 9.4.0: introduced
     */
    class NativeHomePage extends NativeHomePageBase {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsNativeNavigationProfile(): NativeNavigationProfile;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new NativeHomePage instance in the SDK and on the server.
         * The new NativeHomePage will be automatically stored in the 'nativeHomePage' property
         * of the parent NativeNavigationProfile element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.4.0 and higher
         */
        static createIn(container: NativeNavigationProfile): NativeHomePage;
        /**
         * Creates and returns a new NativeHomePage instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): NativeHomePage;
    }
    interface INavigationProfileBase extends internal.IElement, internal.IByNameReferrable {
        readonly model: IModel;
        readonly containerAsNavigationDocument: INavigationDocument;
        /**
         * In version 7.2.0: introduced
         */
        readonly name: string;
        asLoaded(): NavigationProfileBase;
        load(callback: (element: NavigationProfileBase) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<NavigationProfileBase>;
    }
    abstract class NavigationProfileBase extends internal.Element<IModel> implements INavigationProfileBase {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsNavigationDocument(): NavigationDocument;
        /**
         * In version 7.2.0: introduced
         */
        get name(): string;
        set name(newValue: string);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 7.22.0: introduced
         */
        get offlineEntityConfigs(): internal.IList<OfflineEntityConfig> | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        get qualifiedName(): string | null;
    }
    /**
     * In version 7.22.0: introduced
     */
    interface INativeNavigationProfile extends INavigationProfileBase {
        readonly model: IModel;
        readonly containerAsNavigationDocument: INavigationDocument;
        asLoaded(): NativeNavigationProfile;
        load(callback: (element: NativeNavigationProfile) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<NativeNavigationProfile>;
    }
    /**
     * In version 7.22.0: introduced
     */
    class NativeNavigationProfile extends NavigationProfileBase implements INativeNavigationProfile {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsNavigationDocument(): NavigationDocument;
        /**
         * In version 9.4.0: introduced
         */
        get nativeHomePage(): NativeHomePage;
        set nativeHomePage(newValue: NativeHomePage);
        /**
         * In version 9.4.0: deleted
         */
        get homePage(): pages.IPage | null;
        set homePage(newValue: pages.IPage | null);
        get homePageQualifiedName(): string | null;
        /**
         * In version 8.0.0: introduced
         */
        get roleBasedNativeHomePages(): internal.IList<RoleBasedNativeHomePage>;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 8.0.0: introduced
         */
        get bottomBarItems(): internal.IList<nativepages.BottomBarItem>;
        /**
         * In version 9.4.0: introduced
         */
        get otaEnabled(): boolean;
        set otaEnabled(newValue: boolean);
        /**
         * In version 9.15.0: introduced
         */
        get loggingEnabled(): boolean;
        set loggingEnabled(newValue: boolean);
        /**
         * In version 9.18.0: introduced
         */
        get encryptionDbEnabled(): boolean;
        set encryptionDbEnabled(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new NativeNavigationProfile instance in the SDK and on the server.
         * The new NativeNavigationProfile will be automatically stored in the 'profiles' property
         * of the parent NavigationDocument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.22.0 and higher
         */
        static createIn(container: NavigationDocument): NativeNavigationProfile;
        /**
         * Creates and returns a new NativeNavigationProfile instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): NativeNavigationProfile;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/navigation relevant section in reference guide}
     */
    interface INavigationDocument extends projects.IProjectDocument {
        readonly model: IModel;
        readonly containerAsProject: projects.IProject;
        /**
         * In version 7.2.0: introduced
         */
        readonly profiles: internal.IList<INavigationProfileBase>;
        asLoaded(): NavigationDocument;
        load(callback: (element: NavigationDocument) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<NavigationDocument>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/navigation relevant section in reference guide}
     */
    class NavigationDocument extends projects.ProjectDocument implements INavigationDocument {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsProject(): projects.Project;
        /**
         * In version 7.2.0: introduced
         */
        get profiles(): internal.IList<NavigationProfileBase>;
        /**
         * In version 7.2.0: deleted
         */
        get phoneProfile(): NavigationProfile;
        set phoneProfile(newValue: NavigationProfile);
        /**
         * In version 7.2.0: deleted
         */
        get tabletProfile(): NavigationProfile;
        set tabletProfile(newValue: NavigationProfile);
        /**
         * In version 7.2.0: deleted
         */
        get desktopProfile(): NavigationProfile;
        set desktopProfile(newValue: NavigationProfile);
        /**
         * In version 7.2.0: deleted
         * In version 7.0.2: introduced
         */
        get hybridTabletProfile(): NavigationProfile;
        set hybridTabletProfile(newValue: NavigationProfile);
        /**
         * In version 7.2.0: deleted
         * In version 7.0.2: introduced
         */
        get hybridPhoneProfile(): NavigationProfile;
        set hybridPhoneProfile(newValue: NavigationProfile);
        /**
         * In version 7.0.2: deleted
         */
        get offlinePhoneProfile(): NavigationProfile;
        set offlinePhoneProfile(newValue: NavigationProfile);
        /**
         * In version 7.0.0: deleted
         * In version 6.10.4: introduced
         */
        get hybridPhoneProfile6(): NavigationProfile;
        set hybridPhoneProfile6(newValue: NavigationProfile);
        /**
         * In version 7.0.0: deleted
         * In version 6.10.4: introduced
         */
        get hybridTabletProfile6(): NavigationProfile;
        set hybridTabletProfile6(newValue: NavigationProfile);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IProject);
        /**
         * Creates a new NavigationDocument unit in the SDK and on the server.
         * Expects one argument, the projects.IProject in which this unit is contained.
         */
        static createIn(container: projects.IProject): NavigationDocument;
    }
    /**
     * In version 7.2.0: added public
     */
    interface INavigationProfile extends INavigationProfileBase {
        readonly model: IModel;
        readonly containerAsNavigationDocument: INavigationDocument;
        asLoaded(): NavigationProfile;
        load(callback: (element: NavigationProfile) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<NavigationProfile>;
    }
    /**
     * In version 7.2.0: added public
     */
    class NavigationProfile extends NavigationProfileBase implements INavigationProfile {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsNavigationDocument(): NavigationDocument;
        /**
         * In version 7.2.0: introduced
         */
        get kind(): ProfileKind;
        set kind(newValue: ProfileKind);
        /**
         * In version 7.2.0: deleted
         */
        get enabled(): boolean;
        set enabled(newValue: boolean);
        /**
         * In version 7.2.0: deleted
         * In version 7.0.2: introduced
         */
        get offlineEnabled(): boolean;
        set offlineEnabled(newValue: boolean);
        get homePage(): HomePage;
        set homePage(newValue: HomePage);
        get roleBasedHomePages(): internal.IList<RoleBasedHomePage>;
        /**
         * In version 8.12.0: deleted
         */
        get applicationTitle(): string;
        set applicationTitle(newValue: string);
        /**
         * In version 8.12.0: introduced
         */
        get appTitle(): texts.Text;
        set appTitle(newValue: texts.Text);
        /**
         * In version 8.12.0: introduced
         */
        get appIcon(): images.IImage | null;
        set appIcon(newValue: images.IImage | null);
        get appIconQualifiedName(): string | null;
        /**
         * In version 7.0.2: introduced
         */
        get loginPageSettings(): pages.PageSettings;
        set loginPageSettings(newValue: pages.PageSettings);
        get menuItemCollection(): menus.MenuItemCollection;
        set menuItemCollection(newValue: menus.MenuItemCollection);
        /**
         * In version 7.0.0: deleted
         * In version 6.10.4: introduced
         */
        get offlineEnabled6(): boolean;
        set offlineEnabled6(newValue: boolean);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.0.3: introduced
         */
        get progressiveWebAppSettings(): ProgressiveWebAppSettings | null;
        set progressiveWebAppSettings(newValue: ProgressiveWebAppSettings | null);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new NavigationProfile instance in the SDK and on the server.
         * The new NavigationProfile will be automatically stored in the 'profiles' property
         * of the parent NavigationDocument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.2.0 and higher
         */
        static createIn(container: NavigationDocument): NavigationProfile;
        /**
         * Creates and returns a new NavigationProfile instance in the SDK and on the server.
         * The new NavigationProfile will be automatically stored in the 'desktopProfile' property
         * of the parent NavigationDocument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.1.0
         */
        static createInNavigationDocumentUnderDesktopProfile(container: NavigationDocument): NavigationProfile;
        /**
         * Creates and returns a new NavigationProfile instance in the SDK and on the server.
         * The new NavigationProfile will be automatically stored in the 'hybridPhoneProfile' property
         * of the parent NavigationDocument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.0.2 to 7.1.0
         */
        static createInNavigationDocumentUnderHybridPhoneProfile(container: NavigationDocument): NavigationProfile;
        /**
         * Creates and returns a new NavigationProfile instance in the SDK and on the server.
         * The new NavigationProfile will be automatically stored in the 'hybridPhoneProfile6' property
         * of the parent NavigationDocument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.10.4 to 6.10.4
         */
        static createInNavigationDocumentUnderHybridPhoneProfile6(container: NavigationDocument): NavigationProfile;
        /**
         * Creates and returns a new NavigationProfile instance in the SDK and on the server.
         * The new NavigationProfile will be automatically stored in the 'hybridTabletProfile' property
         * of the parent NavigationDocument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.0.2 to 7.1.0
         */
        static createInNavigationDocumentUnderHybridTabletProfile(container: NavigationDocument): NavigationProfile;
        /**
         * Creates and returns a new NavigationProfile instance in the SDK and on the server.
         * The new NavigationProfile will be automatically stored in the 'hybridTabletProfile6' property
         * of the parent NavigationDocument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.10.4 to 6.10.4
         */
        static createInNavigationDocumentUnderHybridTabletProfile6(container: NavigationDocument): NavigationProfile;
        /**
         * Creates and returns a new NavigationProfile instance in the SDK and on the server.
         * The new NavigationProfile will be automatically stored in the 'offlinePhoneProfile' property
         * of the parent NavigationDocument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.0.1
         */
        static createInNavigationDocumentUnderOfflinePhoneProfile(container: NavigationDocument): NavigationProfile;
        /**
         * Creates and returns a new NavigationProfile instance in the SDK and on the server.
         * The new NavigationProfile will be automatically stored in the 'phoneProfile' property
         * of the parent NavigationDocument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.1.0
         */
        static createInNavigationDocumentUnderPhoneProfile(container: NavigationDocument): NavigationProfile;
        /**
         * Creates and returns a new NavigationProfile instance in the SDK and on the server.
         * The new NavigationProfile will be automatically stored in the 'profiles' property
         * of the parent NavigationDocument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.2.0 and higher
         */
        static createInNavigationDocumentUnderProfiles(container: NavigationDocument): NavigationProfile;
        /**
         * Creates and returns a new NavigationProfile instance in the SDK and on the server.
         * The new NavigationProfile will be automatically stored in the 'tabletProfile' property
         * of the parent NavigationDocument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.1.0
         */
        static createInNavigationDocumentUnderTabletProfile(container: NavigationDocument): NavigationProfile;
        /**
         * Creates and returns a new NavigationProfile instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): NavigationProfile;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 7.22.0: introduced
     */
    class OfflineEntityConfig extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsNavigationProfileBase(): NavigationProfileBase;
        get entity(): domainmodels.IEntity;
        set entity(newValue: domainmodels.IEntity);
        get entityQualifiedName(): string;
        /**
         * In version 8.9.0: introduced
         */
        get downloadMode(): OfflineEntitySyncDownloadMode;
        set downloadMode(newValue: OfflineEntitySyncDownloadMode);
        /**
         * In version 8.9.0: deleted
         */
        get shouldDownload(): boolean;
        set shouldDownload(newValue: boolean);
        /**
         * The value of this property is conceptually of type xPathConstraints.XPathConstraint.
         */
        get constraint(): string;
        set constraint(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new OfflineEntityConfig instance in the SDK and on the server.
         * The new OfflineEntityConfig will be automatically stored in the 'offlineEntityConfigs' property
         * of the parent NavigationProfileBase element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.22.0 and higher
         */
        static createIn(container: NavigationProfileBase): OfflineEntityConfig;
        /**
         * Creates and returns a new OfflineEntityConfig instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): OfflineEntityConfig;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/progressive-web-app relevant section in reference guide}
     *
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.0.3: introduced
     */
    class ProgressiveWebAppSettings extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsNavigationProfile(): NavigationProfile;
        get precaching(): boolean;
        set precaching(newValue: boolean);
        get installPrompt(): boolean;
        set installPrompt(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ProgressiveWebAppSettings instance in the SDK and on the server.
         * The new ProgressiveWebAppSettings will be automatically stored in the 'progressiveWebAppSettings' property
         * of the parent NavigationProfile element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.3 and higher
         */
        static createIn(container: NavigationProfile): ProgressiveWebAppSettings;
        /**
         * Creates and returns a new ProgressiveWebAppSettings instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ProgressiveWebAppSettings;
    }
    class RoleBasedHomePage extends HomePageBase {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsNavigationProfile(): NavigationProfile;
        get userRole(): security.IUserRole | null;
        set userRole(newValue: security.IUserRole | null);
        get userRoleQualifiedName(): string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new RoleBasedHomePage instance in the SDK and on the server.
         * The new RoleBasedHomePage will be automatically stored in the 'roleBasedHomePages' property
         * of the parent NavigationProfile element passed as argument.
         */
        static createIn(container: NavigationProfile): RoleBasedHomePage;
        /**
         * Creates and returns a new RoleBasedHomePage instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): RoleBasedHomePage;
    }
    /**
     * In version 8.0.0: introduced
     */
    class RoleBasedNativeHomePage extends NativeHomePageBase {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsNativeNavigationProfile(): NativeNavigationProfile;
        get userRole(): security.IUserRole | null;
        set userRole(newValue: security.IUserRole | null);
        get userRoleQualifiedName(): string | null;
        /**
         * In version 9.4.0: deleted
         */
        get page(): pages.IPage | null;
        set page(newValue: pages.IPage | null);
        get pageQualifiedName(): string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new RoleBasedNativeHomePage instance in the SDK and on the server.
         * The new RoleBasedNativeHomePage will be automatically stored in the 'roleBasedNativeHomePages' property
         * of the parent NativeNavigationProfile element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 and higher
         */
        static createIn(container: NativeNavigationProfile): RoleBasedNativeHomePage;
        /**
         * Creates and returns a new RoleBasedNativeHomePage instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): RoleBasedNativeHomePage;
    }
}
import { domainmodels } from "./domainmodels";
import { images } from "./images";
import { menus } from "./menus";
import { microflows } from "./microflows";
import { nativepages } from "./nativepages";
import { pages } from "./pages";
import { security } from "./security";
import { texts } from "./texts";
import { IModel } from "./base-model";
