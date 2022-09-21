"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrimitiveListProperty = void 0;
const mobx_1 = require("mobx");
const AbstractProperty_1 = require("./AbstractProperty");
const PrimitiveTypeEnum_1 = require("./PrimitiveTypeEnum");
const sendListChangeDeltas_1 = require("./sendListChangeDeltas");
/**
 * Primitive-typed property values list.
 */
class PrimitiveListProperty extends AbstractProperty_1.AbstractProperty {
    /*
     * Currently, only possible default value for listy properties is [],
     * so we don't have to store initialItems to be able to distinguish from default value.
     *
     * @internal
     */
    initialize(initialItems, primitiveType) {
        this.primitiveType = primitiveType;
        const observableValue = mobx_1.observable.array(initialItems || [], { deep: false });
        observableValue.intercept(change => this.beforeChange(change));
        return { observableValue };
    }
    get() {
        this.assertReadable();
        return this.observableValue;
    }
    updateWithRawValue(value) {
        this.observableValue.replace(value);
    }
    /** @internal */
    beforeChange(change) {
        if (!this.shouldHandleChange()) {
            return change;
        }
        this.assertWritable();
        (0, sendListChangeDeltas_1.sendListChangeDeltas)(this, change);
        return change;
    }
    /** @internal */
    toRawChangeValue(value) {
        return value; // primitives can be sent verbatim to the server
    }
    /** @internal */
    _toJSON() {
        return this.get().slice();
    }
    deepCopyInto(clone) {
        if (this.primitiveType !== PrimitiveTypeEnum_1.PrimitiveTypeEnum.Guid) {
            // Guids should never be cloned
            clone[this.name].replace(this.get().slice());
        }
    }
}
exports.PrimitiveListProperty = PrimitiveListProperty;
//# sourceMappingURL=PrimitiveListProperty.js.map