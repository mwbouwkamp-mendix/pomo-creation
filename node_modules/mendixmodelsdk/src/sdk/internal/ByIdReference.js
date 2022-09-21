"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ByIdReference = void 0;
const mobx_1 = require("mobx");
const elements = require("./elements");
class ByIdReference {
    /**
     * Constructs and returns a new reference instance, that is owned (by a property of) an abstract element.
     */
    constructor(owner) {
        this.owner = owner;
        this.isResolved = true;
        this.target = mobx_1.observable.box(null, { deep: false });
        this.isResolving = false; // suppress on change events
        this.referenceId = null;
    }
    /**
     * Registers an observer in the form of a callback with this references and fires that callback
     * immediately if the reference is already resolved.
     * Used by properties to observe this reference, so that storage and logical updates can be applied.
     */
    intercept(callback) {
        return this.target.intercept(change => {
            // Do not notify properties that a value is changed when resolving, because no delta should be created.
            // UI will still be updated, since this.target is an observable.
            if (!this.isResolving) {
                return callback(change);
            }
            return change;
        });
    }
    set(newValue) {
        if (newValue) {
            /* This guarantees that no unresolvable references by id can end up in our storage.
             We could loosen this constraint when we have transactions with server side consistency checks,
             but otherwise this would be a subtle bug people could run into easily. */
            if (!newValue.unit) {
                throw new Error(`Cannot update property of '${this.owner.structureTypeName}', the given object is not yet part of a unit. ` +
                    `Please add the object to an unit first.`);
            }
            newValue.versionInfo.checkSameModelVersion(newValue.model, this.owner.model);
            newValue.versionInfo.checkStructureVersion(newValue);
        }
        this.assertValueHasSameUnit(newValue);
        this.target.set(newValue || null);
    }
    assertValueHasSameUnit(valueToCheck) {
        if (valueToCheck && valueToCheck.unit && this.owner.unit && valueToCheck.unit !== this.owner.unit) {
            throw new Error(`In element of type ${this.owner.structureTypeName}: ` +
                `The assigned value should be part of the same unit, expected '${this.owner.unit.id}' but found '${valueToCheck.unit.id}'.`);
        }
    }
    get() {
        if (!this.isResolved) {
            throw new Error("Illegal state: by-id reference is broken");
        }
        return this.target.get();
    }
    resolve() {
        if (!this.isResolved) {
            this.isResolving = true;
            if (!this.referenceId) {
                this.target.set(null);
            }
            else if (this.referenceId === "00000000-0000-0000-0000-000000000000") {
                throw new Error(`encountered null ID: unitID=${this.owner.unit.id}; ` +
                    `ID of element containing by-id reference property: ID=${this.owner.id}`);
            }
            else {
                let resolveRoot;
                if (this.owner.unit) {
                    resolveRoot = this.owner.unit;
                }
                else {
                    resolveRoot = this.owner;
                    while (resolveRoot.container instanceof elements.AbstractElement) {
                        resolveRoot = resolveRoot.container;
                    }
                }
                const elem = resolveRoot.findElementById(this.referenceId);
                if (!elem) {
                    throw new Error("Broken reference; ID: " + this.referenceId);
                }
                this.assertValueHasSameUnit(elem);
                this.target.set(elem);
            }
            this.isResolving = false;
            this.isResolved = true;
        }
    }
    /**
     * Sets only the raw target id, without trying to resolve that.
     */
    updateWithRawValue(value) {
        this.target.set(null);
        this.referenceId = value;
        this.isResolved = false;
    }
    /**
     * Get the row target id, the target might be not resolved yet
     */
    getRawValue() {
        return this.referenceId;
    }
}
exports.ByIdReference = ByIdReference;
//# sourceMappingURL=ByIdReference.js.map