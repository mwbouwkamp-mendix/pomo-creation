"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StructuralChildListProperty = exports.StructuralChildProperty = void 0;
const mobx_1 = require("mobx");
const AbstractProperty_1 = require("./AbstractProperty");
/**
 * Note: structural child values are updated through AbstractModel._addUnitToStructuralParent.
 */
/**
 * Value of a property owned by a structural unit.
 */
class StructuralChildProperty extends AbstractProperty_1.AbstractProperty {
    constructor(declaredOn, parent, name, value, targetRefType) {
        super(declaredOn, parent, name, value);
    }
    /** @internal */
    initialize(value) {
        return { observableValue: mobx_1.observable.box(value, { deep: false }) };
    }
    get() {
        this.assertReadable();
        return this.observableValue.get();
    }
    set(value) {
        if (value) {
            throw new Error("Moving units is not supported yet");
        }
        else {
            if (this.isRequired) {
                throw new Error("Cannot unset required structural child property");
            }
            const unit = this.observableValue.get();
            if (unit) {
                unit._deleteInternal();
                this.observableValue.set(null);
            }
        }
    }
    detachValue() {
        this.observableValue.set(null);
    }
    updateWithRawValue(value) {
        throw new Error("Illegal state: cannot update a structural child property");
    }
    deepCopyInto() {
        /*
        Structural children are not copied by default, that would require
        loading and cloning all children, which is probably not desirable.

        const child =  this.get();
        if (child) {
            child.deepCopyInto(clone);
        }*/
    }
    /** @internal */
    _toJSON() {
        throw new Error("Cannot call _toJSON on a structural child property");
    }
}
exports.StructuralChildProperty = StructuralChildProperty;
/**
 * Property instance that wraps a list of structural units.
 * Structural child values are updated through AbstractModel._addUnitToStructuralParent.
 */
class StructuralChildListProperty extends AbstractProperty_1.AbstractProperty {
    constructor(declaredOn, parent, name, value, targetRefType) {
        super(declaredOn, parent, name, value);
    }
    /** @internal */
    initialize(values) {
        const observableValue = mobx_1.observable.array(values || [], { deep: false });
        observableValue.intercept(change => this.beforeChange(change));
        const disposer = observableValue.observe(change => this.onChange(change));
        return { observableValue, disposer };
    }
    get() {
        this.assertReadable();
        return this.observableValue;
    }
    updateWithRawValue(value) {
        throw new Error("Illegal state: cannot update a structural child property");
    }
    /** @internal */
    beforeChange(change) {
        if (!this.shouldHandleChange()) {
            return change;
        }
        this.assertWritable();
        return change;
    }
    /** @internal */
    onChange(change) {
        if (!this.shouldHandleChange()) {
            return;
        }
        // For change data details see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/observe
        switch (change.type) {
            case "splice":
                change.removed.forEach(unit => this.processChildRemoval(unit));
                for (let i = change.index; i < change.index + change.addedCount; i++) {
                    this.processChildAddition(i);
                }
                break;
            case "update":
                this.processChildRemoval(change.oldValue);
                this.processChildAddition(change.index);
                break;
        }
    }
    removeChild(child) {
        const idx = this.observableValue.indexOf(child);
        if (idx >= 0) {
            this.observableValue.splice(idx, 1);
            return true;
        }
        return false;
    }
    detachChild(child) {
        const idx = this.observableValue.indexOf(child);
        if (idx >= 0) {
            // TODO Setup detach for model unit like with elements
            // this._detaching = true;
            this.observableValue.splice(idx, 1);
            // this._detaching = false;
        }
    }
    processChildRemoval(unit) {
        if (this.observableValue.indexOf(unit) === -1) {
            unit.delete();
            unit._container = null;
        }
    }
    processChildAddition(index) {
        throw new Error("Moving units is not supported yet");
    }
    deepCopyInto() {
        /*
        Structural children are not copied by default, that would require
        loading and cloning all children, which is probably not desirable.

        this.get().forEach(child => child.deepCopyInto(clone));
        */
    }
    /** @internal */
    _toJSON() {
        throw new Error("Cannot call _toJSON on a structural child property");
    }
}
exports.StructuralChildListProperty = StructuralChildListProperty;
//# sourceMappingURL=structural.js.map