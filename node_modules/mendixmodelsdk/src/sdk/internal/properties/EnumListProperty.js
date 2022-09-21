"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumListProperty = void 0;
const PrimitiveListProperty_1 = require("./PrimitiveListProperty");
/**
 * A property value that is a list of enum literals.
 */
class EnumListProperty extends PrimitiveListProperty_1.PrimitiveListProperty {
    constructor(declaredOn, parent, name, initialValue, enumType) {
        super(declaredOn, parent, name, initialValue);
        this.initialValue = initialValue;
        this.enumType = enumType;
    }
    updateWithRawValue(value) {
        this.observableValue.replace(value
            ? value.map(e => this.enumType[e] || this.initialValue) // XXX: `this.initialValue` is a list, not just one enumeration value!
            : []);
    }
    /** @internal */
    toRawChangeValue(value) {
        if (value) {
            value.checkEnumVersion(this.parent.model.metaModelVersion, true);
            return value.toString(); // send enum string representation to the server
        }
        return null;
    }
    /** @internal */
    _toJSON() {
        return this.get().map(item => item.name);
    }
}
exports.EnumListProperty = EnumListProperty;
//# sourceMappingURL=EnumListProperty.js.map