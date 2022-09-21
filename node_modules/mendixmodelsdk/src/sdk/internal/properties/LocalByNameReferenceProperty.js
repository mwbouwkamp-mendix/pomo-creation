"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalByNameReferenceProperty = exports.isNamedElement = void 0;
const mobx_1 = require("mobx");
const AbstractProperty_1 = require("./AbstractProperty");
function checkElementIsByNameLocalReferrable(referencingElement, element, propertyName, operation) {
    if (!element) {
        return;
    }
    if (!element._isAttached) {
        throw new Error(`Cannot ${operation} an element that is not currently attached to the model to property '${propertyName}'. `);
    }
    if (element.unit !== referencingElement.unit) {
        throw new Error(`Cannot refer to an element that is in a different model unit than the referencing element. `);
    }
    if (element["name"] === undefined) {
        throw new Error(`Cannot ${operation} an element of which the local name is not valid yet to property '${propertyName}'. ` +
            "Make sure that the element has a valid name first.");
    }
}
function isNamedElement(element) {
    return typeof element.name === "string";
}
exports.isNamedElement = isNamedElement;
/**
 * Property value that references a (model) element by a simple name, within the same model unit.
 */
class LocalByNameReferenceProperty extends AbstractProperty_1.AbstractProperty {
    constructor(declaredOn, parent, name, initialValue, _targetType) {
        super(declaredOn, parent, name, initialValue, _targetType);
        this._targetType = _targetType;
    }
    /** @internal */
    initialize(value, _targetType) {
        const localName = value ? value.name : null;
        const observableValue = mobx_1.observable.box(localName);
        observableValue.intercept(change => this.beforeChange(change));
        return { observableValue };
    }
    get() {
        this.assertReadable();
        const localName = this.localName();
        if (this.parent.unit) {
            return localName
                ? this.parent.unit._resolveLocalName(this._targetType, this.observableValue.get())
                : null;
        }
        else {
            return null;
        }
    }
    set(newValue) {
        this.assertWritable();
        if (this.isRequired && !newValue) {
            throw new Error(`Cannot unset required property '${this.name}' on instance of type '${this.parent.structureTypeName}'`);
        }
        checkElementIsByNameLocalReferrable(this.parent, newValue, this.name, "assign");
        this.observableValue.set(newValue ? newValue.name : null);
    }
    updateWithRawValue(value) {
        this.observableValue.set(value === "" ? null : value);
    }
    /** @internal */
    beforeChange(change) {
        if (this.shouldHandleChange()) {
            this.parent._sendChangeDelta(this.name, change.newValue);
        }
        return change;
    }
    localName() {
        return this.observableValue.get();
    }
    get targetType() {
        return this._targetType;
    }
    /** @internal */
    _toJSON() {
        return this.localName();
    }
    deepCopyInto(clone, idMap, unresolvedIdentifierFixers) {
        // make sure we copy the refs, not the values, refs might be broken.
        clone["__" + this.name].updateWithRawValue(this.localName());
    }
}
exports.LocalByNameReferenceProperty = LocalByNameReferenceProperty;
//# sourceMappingURL=LocalByNameReferenceProperty.js.map