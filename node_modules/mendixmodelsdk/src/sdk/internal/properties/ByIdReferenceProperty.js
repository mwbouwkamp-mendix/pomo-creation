"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ByIdReferenceProperty = void 0;
const AbstractProperty_1 = require("./AbstractProperty");
const ByIdReference_1 = require("../ByIdReference");
/**
 * Property value that references a (model) element by id.
 */
class ByIdReferenceProperty extends AbstractProperty_1.AbstractProperty {
    /** @internal */
    initialize(value) {
        const observableValue = new ByIdReference_1.ByIdReference(this.parent);
        observableValue.intercept(change => this.beforeChange(change));
        return { observableValue };
    }
    get() {
        this.assertReadable();
        return this.observableValue.get();
    }
    set(value) {
        this.assertWritable();
        if (!value && this.isRequired) {
            throw new Error(`Cannot unset property that is a required by-id reference`);
        }
        this.observableValue.set(value);
    }
    updateWithRawValue(value) {
        this.observableValue.updateWithRawValue(value);
    }
    resolveReference() {
        this.observableValue.resolve();
    }
    /** @internal */
    beforeChange(change) {
        if (this.shouldHandleChange()) {
            this.observableValue.assertValueHasSameUnit(change.newValue);
            this.parent._sendChangeDelta(this.name, change.newValue ? change.newValue.id : null);
        }
        return change;
    }
    updateElementContainer() {
        // We didn't know our container before, now we know it, let's check the referred value:
        this.observableValue.assertValueHasSameUnit(this.observableValue.get());
    }
    /** @internal */
    _toJSON() {
        const value = this.get();
        return value ? value.id : null;
    }
    deepCopyInto(clone, idMap, unresolvedIdentifierFixers) {
        unresolvedIdentifierFixers.push(map => {
            const val = this.get();
            if (!val) {
                // no target
                clone[this.name] = val;
            }
            else {
                if (map.hasOwnProperty(val.id)) {
                    // The target was cloned
                    const cloneProperty = clone["__" + this.name];
                    cloneProperty.observableValue.target.set(map[val.id]);
                }
                else {
                    // The target was outside the cloned range, not supported
                    throw new Error(`By-id referred element ${val.structureTypeName} with ID ${val.id} was not included in the deepCopy`);
                }
            }
        });
    }
}
exports.ByIdReferenceProperty = ByIdReferenceProperty;
//# sourceMappingURL=ByIdReferenceProperty.js.map