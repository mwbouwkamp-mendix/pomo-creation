"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrimitiveProperty = void 0;
const mobx_1 = require("mobx");
const AbstractProperty_1 = require("./AbstractProperty");
const utils_1 = require("../../utils");
const PrimitiveTypeEnum_1 = require("./PrimitiveTypeEnum");
/*
 * Primitive-typed property value
 */
class PrimitiveProperty extends AbstractProperty_1.AbstractProperty {
    /** @internal */
    initialize(defaultValue, primitiveType) {
        this.defaultValue = defaultValue;
        this.primitiveType = primitiveType;
        const observableValue = mobx_1.observable.box(defaultValue, { deep: false });
        observableValue.intercept(change => this.beforeChange(change));
        const disposer = observableValue.observe(change => this.onChange(change));
        return { observableValue, disposer };
    }
    get() {
        this.assertReadable();
        return this.observableValue.get();
    }
    set(newValue) {
        this.assertWritable();
        this.observableValue.set(newValue);
    }
    updateWithRawValue(value) {
        this.observableValue.set(value);
    }
    getRawValue(value) {
        return value;
    }
    beforeChange(change) {
        // skip check if reverting to a previous value since we assume the previous value is always valid
        if (!this.parent._isReverting) {
            if (this.primitiveType === PrimitiveTypeEnum_1.PrimitiveTypeEnum.String && (change.newValue === null || change.newValue === undefined)) {
                change.newValue = "";
            }
            else if (this.primitiveType !== PrimitiveTypeEnum_1.PrimitiveTypeEnum.Blob) {
                utils_1.utils.assertNotNull(change.newValue, this.name);
            }
        }
        if (this.shouldHandleChange()) {
            this.parent._sendChangeDelta(this.name, this.getRawValue(change.newValue));
        }
        return change;
    }
    /** @internal */
    onChange(change) {
        if (this.shouldHandleChange()) {
            if (this.name === "name" && this.primitiveType === PrimitiveTypeEnum_1.PrimitiveTypeEnum.String) {
                this.parent._processNameChange();
                this.parent._processLocalNameChange(change.oldValue);
            }
        }
    }
    markCurrentValueAsDefault() {
        this.defaultValue = this.get();
    }
    /** @internal */
    _toJSON() {
        return this.get();
    }
    deepCopyInto(clone) {
        if (this.primitiveType !== PrimitiveTypeEnum_1.PrimitiveTypeEnum.Guid) {
            // Guids should never be cloned
            clone[this.name] = this.get();
        }
    }
}
exports.PrimitiveProperty = PrimitiveProperty;
//# sourceMappingURL=PrimitiveProperty.js.map