import { IAbstractModel } from "./AbstractModel";
import * as structures from "./structures";
export interface ILifeCycle {
    introduced?: string;
    deprecated?: string;
    deleted?: string;
    deprecationMessage?: string | null;
    deletionMessage?: string | null;
}
export interface IModifierValueHistory {
    currentValue: boolean;
    /** descending list of change in previous meta model versions */
    changedIn?: string[];
}
export interface IStructureVersionInfo extends ILifeCycle {
    public?: IModifierValueHistory;
    experimental?: IModifierValueHistory;
    properties?: {
        [name: string]: IPropertyVersionInfo;
    };
}
export interface IPropertyVersionInfo extends ILifeCycle {
    public?: IModifierValueHistory;
    required?: IModifierValueHistory;
}
export interface IVersionRange {
    start?: string;
    end?: string;
}
export declare function contains(range: IVersionRange, version: Version): boolean;
export declare class Version {
    major: number;
    minor: number;
    patch: number;
    private static memoisMap;
    /**
     * Parses and @returns the given string as a Version object.
     *
     * This function is memoised to keep memory and time consumption low,
     * given that only a handful of versions exist at any time anyway.
     */
    static parse(versionString: string): Version;
    constructor(major: number, minor: number, patch: number);
    /**
     * Returns 0 if this version is equal to the other version.
     * Returns a negative integer if this version is strictly smaller than the other version.
     * Returns a positive integer if this version is strictly larger than the other version.
     */
    compare(other: Version): number;
    /**
     * Returns true if this version is strictly larger than the provided version.
     */
    isAfter(other: Version): boolean;
    isAfterOrEqual(other: Version): boolean;
    /**
     * Returns true if this version is strictly smaller compared to the provided version.
     */
    isBefore(other: Version): boolean;
    isBeforeOrEqual(other: Version): boolean;
    isEqualTo(other: Version): boolean;
    toString(): string;
}
/**
 * Parses the given string as a sem-Version, ignoring non-numeric and "extra" data,
 * and padding with ".0" where necessary.
 */
export declare function parseAsNormalizedVersion(versionString: string): Version;
export declare enum LifeCycleState {
    UNAVAILABLE = 0,
    AVAILABLE = 1,
    REMOVED = 2
}
export declare class LifeCycle {
    introduced: Version | null;
    deleted: Version | null;
    deprecationMessage: string;
    deletionMessage: string;
    constructor(info: ILifeCycle | null);
    /**
     * Yields true if this feature is available in the specified version, that is:
     * - it was in base, or added before the specified version
     * - it was not removed yet in the given version
     * - deprecation statues does not influence it results
     */
    isAvailableIn(version: Version): boolean;
    /**
     * Yields true only if this version was actively removed in the given version.
     * Doesn't yield true if the feature was not yet introduced in the given version (see isAvailableIn for that)
     */
    isRemovedIn(version: Version): boolean;
    getCurrentState(version: Version): LifeCycleState;
    /**
     * Checks a version based on this lifecycle.
     * Returns true if something is thrown or warned, otherwise false
     */
    reportVersionIssues(version: Version, aboutWhatMessage: string): boolean;
}
export declare class ModifierValueHistory {
    latestValue: boolean;
    /**
     * ordered from low to high
     */
    changedIn: Version[];
    /**
     * defaultFallback indiciates whether the absence of a lifecycle yields true or false
     */
    constructor(lifecycle: IModifierValueHistory | null | undefined, defaultFallback: boolean);
    isEnabledIn(version: Version): boolean;
}
export declare enum StructureType {
    StructuralUnit = 0,
    ModelUnit = 1,
    Element = 2
}
export declare abstract class VersionInfo {
    checkSameModelVersion(model: IAbstractModel, otherModel: IAbstractModel): void;
}
export declare class StructureVersionInfo extends VersionInfo {
    structureType: StructureType;
    availability: LifeCycle;
    isPublic: ModifierValueHistory;
    isExperimental: ModifierValueHistory;
    properties: {
        [name: string]: PropertyVersionInfo;
    };
    defaultPropertyInfo: PropertyVersionInfo;
    constructor(info: IStructureVersionInfo, structureType: StructureType);
    checkStructureVersion(instance: structures.IStructure): void;
    getPropertyVersionInfo(name: string): PropertyVersionInfo;
}
export declare class PropertyVersionInfo extends VersionInfo {
    availability: LifeCycle;
    isPublic: ModifierValueHistory;
    isRequired: ModifierValueHistory;
    constructor(info: IPropertyVersionInfo | null, publicByDefault: boolean);
}
export declare function createInVersionCheck(model: IAbstractModel, structureTypeName: string, versionRange: IVersionRange): void;
export declare function isAtLeast(versionString: string, model: IAbstractModel): boolean;
