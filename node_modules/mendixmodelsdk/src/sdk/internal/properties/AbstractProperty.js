"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractProperty = void 0;
/**
 * Abstract base wrapper for property values/settings.
 * All values/settings of ModelElement-s are wrapped in the appropriate way.
 * This is particularly important for reference values which require additional magic.
 */
class AbstractProperty {
    constructor(declaredOn, parent, name, ...initializeArgs) {
        this.declaredOn = declaredOn;
        this.parent = parent;
        this.name = name;
        /** @internal */
        this._skipOnChange = false;
        this.isAvailable = false;
        this.isPublic = false;
        this.isRequired = false;
        const propVersionInfo = declaredOn.versionInfo.getPropertyVersionInfo(name);
        const metaModelVersion = parent.model.metaModelVersion;
        if (propVersionInfo.availability.isAvailableIn(metaModelVersion)) {
            parent._registerProperty(this, declaredOn);
            if (propVersionInfo.isPublic.isEnabledIn(metaModelVersion)) {
                this.isPublic = true;
            }
            this.isRequired = propVersionInfo.isRequired.isEnabledIn(metaModelVersion);
            this.isAvailable = true;
        }
        const initializeResult = this.initialize.apply(this, initializeArgs);
        this.observableValue = initializeResult.observableValue;
        this.disposer = initializeResult.disposer;
    }
    /** @internal */
    shouldHandleChange() {
        return !this.parent._isUpdating && !this._skipOnChange;
    }
    /** @internal */
    assertWritable() {
        if (this.parent.unit && this.parent.unit.isReadOnly) {
            throw new Error("Cannot write properties within a readonly unit");
        }
        this.parent._assertLoaded(this);
        if (this.parent._isDeleted) {
            throw new Error("Cannot write properties of deleted element");
        }
        if (!this.isAvailable) {
            this.reportAvailabilityIssues();
        }
    }
    get versionInfo() {
        return this.declaredOn.versionInfo.getPropertyVersionInfo(this.name);
    }
    /** @internal */
    assertReadable() {
        if (!this.isPublic) {
            this.parent._assertLoaded(this);
        }
        if (!this.isAvailable) {
            this.reportAvailabilityIssues();
        }
    }
    reportAvailabilityIssues() {
        const version = this.parent.model.metaModelVersion;
        const availability = this.versionInfo.availability;
        const typeName = `Property '${this.name}' of type '${this.parent.structureTypeName}'`;
        if (availability.isRemovedIn(version)) {
            throw new Error(`${typeName} can no longer be instantiated in Mendix version ${version} ` +
                `(removed since Mendix version ${availability.deleted}): ${availability.deletionMessage}.`);
        }
        else {
            throw new Error(`${typeName} is not yet available in Mendix version ${version}. It was introduced in Mendix version ${availability.introduced}`);
        }
    }
    dispose() {
        if (this.disposer) {
            this.disposer();
        }
    }
}
exports.AbstractProperty = AbstractProperty;
//# sourceMappingURL=AbstractProperty.js.map