"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAtLeast = exports.createInVersionCheck = exports.PropertyVersionInfo = exports.StructureVersionInfo = exports.VersionInfo = exports.StructureType = exports.ModifierValueHistory = exports.LifeCycle = exports.LifeCycleState = exports.parseAsNormalizedVersion = exports.Version = exports.contains = void 0;
function contains(range, version) {
    if (range.start) {
        if (!Version.parse(range.start).isBeforeOrEqual(version)) {
            return false;
        }
    }
    if (range.end) {
        if (!Version.parse(range.end).isAfterOrEqual(version)) {
            return false;
        }
    }
    return true;
}
exports.contains = contains;
class Version {
    constructor(major, minor, patch) {
        this.major = major;
        this.minor = minor;
        this.patch = patch;
        // (empty constructor)
    }
    /**
     * Parses and @returns the given string as a Version object.
     *
     * This function is memoised to keep memory and time consumption low,
     * given that only a handful of versions exist at any time anyway.
     */
    static parse(versionString) {
        if (!versionString) {
            throw new Error("versionString is null or undefined");
        }
        let version = Version.memoisMap[versionString];
        if (!version) {
            const [major, minor, patch] = versionString.split(".").map(x => parseInt(x, 10));
            version = new Version(major, minor, patch);
            Version.memoisMap[versionString] = version;
        }
        return version;
    }
    /**
     * Returns 0 if this version is equal to the other version.
     * Returns a negative integer if this version is strictly smaller than the other version.
     * Returns a positive integer if this version is strictly larger than the other version.
     */
    compare(other) {
        let diff = this.major - other.major;
        if (diff !== 0) {
            return diff;
        }
        diff = this.minor - other.minor;
        if (diff !== 0) {
            return diff;
        }
        return this.patch - other.patch;
    }
    /**
     * Returns true if this version is strictly larger than the provided version.
     */
    isAfter(other) {
        return this.compare(other) > 0;
    }
    isAfterOrEqual(other) {
        return this.compare(other) >= 0;
    }
    /**
     * Returns true if this version is strictly smaller compared to the provided version.
     */
    isBefore(other) {
        return this.compare(other) < 0;
    }
    isBeforeOrEqual(other) {
        return this.compare(other) <= 0;
    }
    isEqualTo(other) {
        return this.compare(other) === 0;
    }
    toString() {
        return `${this.major}.${this.minor}.${this.patch}`;
    }
}
exports.Version = Version;
Version.memoisMap = {};
/**
 * Parses the given string as a sem-Version, ignoring non-numeric and "extra" data,
 * and padding with ".0" where necessary.
 */
function parseAsNormalizedVersion(versionString) {
    const parts = versionString.split(".", 3).map(p => p.replace(/^(\d*).*$/, (_, nr) => nr || "0"));
    while (parts.length < 3) {
        parts.push("0");
    }
    return Version.parse(parts.join("."));
}
exports.parseAsNormalizedVersion = parseAsNormalizedVersion;
var LifeCycleState;
(function (LifeCycleState) {
    LifeCycleState[LifeCycleState["UNAVAILABLE"] = 0] = "UNAVAILABLE";
    LifeCycleState[LifeCycleState["AVAILABLE"] = 1] = "AVAILABLE";
    LifeCycleState[LifeCycleState["REMOVED"] = 2] = "REMOVED";
})(LifeCycleState = exports.LifeCycleState || (exports.LifeCycleState = {}));
class LifeCycle {
    constructor(info) {
        this.introduced = null; // null indicates available in base version
        this.deleted = null; // null indicates not removed anywhere
        this.deprecationMessage = "";
        this.deletionMessage = "";
        if (info) {
            this.introduced = info.introduced ? Version.parse(info.introduced) : null;
            this.deleted = info.deleted ? Version.parse(info.deleted) : null;
            this.deprecationMessage = info.deprecationMessage || "";
            this.deletionMessage = info.deletionMessage || "";
        }
    }
    // TODO  make the following more symmetric
    /**
     * Yields true if this feature is available in the specified version, that is:
     * - it was in base, or added before the specified version
     * - it was not removed yet in the given version
     * - deprecation statues does not influence it results
     */
    isAvailableIn(version) {
        if (this.isRemovedIn(version)) {
            return false;
        }
        if (!this.introduced || this.introduced.isBeforeOrEqual(version)) {
            return true;
        }
        return false;
    }
    /**
     * Yields true only if this version was actively removed in the given version.
     * Doesn't yield true if the feature was not yet introduced in the given version (see isAvailableIn for that)
     */
    isRemovedIn(version) {
        return !!(this.deleted && this.deleted.isBeforeOrEqual(version));
    }
    getCurrentState(version) {
        if (this.isRemovedIn(version)) {
            return LifeCycleState.REMOVED;
        }
        if (!this.isAvailableIn(version)) {
            return LifeCycleState.UNAVAILABLE;
        }
        return LifeCycleState.AVAILABLE;
    }
    /**
     * Checks a version based on this lifecycle.
     * Returns true if something is thrown or warned, otherwise false
     */
    reportVersionIssues(version, aboutWhatMessage) {
        switch (this.getCurrentState(version)) {
            case LifeCycleState.UNAVAILABLE:
                throw new Error(`${aboutWhatMessage} is not yet available in Mendix version ${version}. It was introduced in Mendix version ${this.introduced}`);
            case LifeCycleState.REMOVED:
                throw new Error(`${aboutWhatMessage} can no longer be instantiated in Mendix version ${version} ` +
                    `(removed since Mendix version ${this.deleted}): ${this.deletionMessage}.`);
            case LifeCycleState.AVAILABLE:
                return false;
            default:
                throw new Error("Illegal state");
        }
    }
}
exports.LifeCycle = LifeCycle;
class ModifierValueHistory {
    /**
     * defaultFallback indiciates whether the absence of a lifecycle yields true or false
     */
    constructor(lifecycle, defaultFallback) {
        if (lifecycle) {
            this.latestValue = lifecycle.currentValue;
            this.changedIn = lifecycle.changedIn ? lifecycle.changedIn.map(Version.parse) : [];
            for (let i = 0; i < this.changedIn.length - 1; i++) {
                if (!this.changedIn[i + 1].isBefore(this.changedIn[i])) {
                    throw new Error("The list of version changes is not ordered correctly: " + JSON.stringify(lifecycle));
                }
            }
        }
        else {
            this.changedIn = [];
            this.latestValue = defaultFallback;
        }
    }
    isEnabledIn(version) {
        if (this.changedIn.length === 0) {
            return this.latestValue;
        }
        const nonRelevant = this.changedIn.filter(changedInVersion => version.isBefore(changedInVersion));
        // odd or even number of toggles from now back to the relevant version ?
        return nonRelevant.length % 2 === 0 ? this.latestValue : !this.latestValue;
    }
}
exports.ModifierValueHistory = ModifierValueHistory;
var StructureType;
(function (StructureType) {
    StructureType[StructureType["StructuralUnit"] = 0] = "StructuralUnit";
    StructureType[StructureType["ModelUnit"] = 1] = "ModelUnit";
    StructureType[StructureType["Element"] = 2] = "Element";
})(StructureType = exports.StructureType || (exports.StructureType = {}));
class VersionInfo {
    checkSameModelVersion(model, otherModel) {
        if (model !== otherModel) {
            throw new Error("It is not possible to combine values coming from two different models");
        }
    }
}
exports.VersionInfo = VersionInfo;
class StructureVersionInfo extends VersionInfo {
    constructor(info, structureType) {
        super();
        this.structureType = structureType;
        this.properties = {};
        this.availability = new LifeCycle(info);
        this.isPublic =
            structureType === StructureType.Element ? new ModifierValueHistory(info.public, false) : new ModifierValueHistory(null, true);
        this.isExperimental = new ModifierValueHistory(info.experimental, false);
        const propertiesArePublicByDefault = structureType === StructureType.StructuralUnit;
        if (info.properties) {
            for (const key in info.properties) {
                this.properties[key] = new PropertyVersionInfo(info.properties[key], propertiesArePublicByDefault);
            }
        }
        this.defaultPropertyInfo = new PropertyVersionInfo(null, propertiesArePublicByDefault);
    }
    checkStructureVersion(instance) {
        const { availability } = this;
        const { metaModelVersion } = instance.model;
        const { structureTypeName } = instance;
        availability.reportVersionIssues(metaModelVersion, `Type '${structureTypeName}'`);
    }
    getPropertyVersionInfo(name) {
        return this.properties[name] ? this.properties[name] : this.defaultPropertyInfo;
    }
}
exports.StructureVersionInfo = StructureVersionInfo;
class PropertyVersionInfo extends VersionInfo {
    constructor(info, publicByDefault) {
        super();
        this.availability = new LifeCycle(info);
        this.isPublic = new ModifierValueHistory(info ? info.public : null, publicByDefault);
        this.isRequired = new ModifierValueHistory(info ? info.required : null, false);
    }
}
exports.PropertyVersionInfo = PropertyVersionInfo;
function createInVersionCheck(model, structureTypeName, versionRange) {
    const version = model.metaModelVersion;
    if (!contains(versionRange, version)) {
        throw new Error(`In Mendix version ${version} it is illegal on instances of ${structureTypeName} to call the "createIn" method, ` +
            `either because it's ambiguously contained or derived.`);
    }
}
exports.createInVersionCheck = createInVersionCheck;
function isAtLeast(versionString, model) {
    return model.metaModelVersion.isAfterOrEqual(Version.parse(versionString));
}
exports.isAtLeast = isAtLeast;
//# sourceMappingURL=versionChecks.js.map