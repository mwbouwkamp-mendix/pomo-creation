"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumProperty = void 0;
const PrimitiveProperty_1 = require("./PrimitiveProperty");
/**
 * A property value that is an enum literal.
 */
class EnumProperty extends PrimitiveProperty_1.PrimitiveProperty {
    constructor(declaredOn, parent, name, initialValue, enumType) {
        super(declaredOn, parent, name, initialValue);
        this.initialValue = initialValue;
        this.enumType = enumType;
    }
    updateWithRawValue(value) {
        this.observableValue.set(this.enumType[value] || this.initialValue);
    }
    getRawValue(value) {
        return value.name;
    }
    set(value) {
        if (value) {
            value.checkEnumVersion(this.parent.model.metaModelVersion, true);
        }
        super.set(value);
    }
    /** @internal */
    onChange(change) {
        // Do not execute the parent behavior.
    }
    /** @internal */
    _toJSON() {
        return this.get().name;
    }
}
exports.EnumProperty = EnumProperty;
//# sourceMappingURL=EnumProperty.js.map