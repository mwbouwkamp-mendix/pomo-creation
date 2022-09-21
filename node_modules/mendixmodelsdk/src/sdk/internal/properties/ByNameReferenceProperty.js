"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ByNameReferenceListProperty = exports.ByNameReferenceProperty = void 0;
const mobx_1 = require("mobx");
const AbstractProperty_1 = require("./AbstractProperty");
const utils_1 = require("../../utils");
const sendListChangeDeltas_1 = require("./sendListChangeDeltas");
function checkElementIsByNameReferrable(element, propertyName, operation) {
    if (!element) {
        return;
    }
    if (!element._isAttached) {
        throw new Error(`Cannot ${operation} an element that is not currently attached to the model to property '${propertyName}'. `);
    }
    if (element._getQualifiedName() === null) {
        throw new Error(`Cannot ${operation} an element of which the qualified name is not valid yet to property '${propertyName}'. ` +
            "Make sure that the element itself and all of its named containers have a valid name first.");
    }
}
/**
 * Property value that references a (model) element by name.
 */
class ByNameReferenceProperty extends AbstractProperty_1.AbstractProperty {
    constructor(declaredOn, parent, name, initialValue, _targetType) {
        super(declaredOn, parent, name, initialValue, _targetType);
        this._targetType = _targetType;
    }
    /** @internal */
    initialize(value, _targetType) {
        const qualifiedName = value ? value._getQualifiedName() : null;
        const observableValue = mobx_1.observable.box(qualifiedName);
        observableValue.intercept(change => this.beforeChange(change));
        return { observableValue };
    }
    get() {
        this.assertReadable();
        const qualifiedName = this.qualifiedName();
        return qualifiedName ? this.parent._model._resolveName(this._targetType, qualifiedName) : null;
    }
    set(newValue) {
        this.assertWritable();
        if (this.isRequired && !newValue) {
            throw new Error(`Cannot unset required property '${this.name}' on instance of type '${this.parent.structureTypeName}'`);
        }
        checkElementIsByNameReferrable(newValue, this.name, "assign");
        this.observableValue.set(newValue ? newValue._getQualifiedName() : null);
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
    qualifiedName() {
        return this.observableValue.get();
    }
    /**
     * This method is used to update the qualified name as part of a rename.
     * _skipOnChange is used to prevent sending deltas for this change, as the Model Server handles this itself.
     *
     * @internal
     */
    updateQualifiedNameForRename(value) {
        this._skipOnChange = true;
        this.updateWithRawValue(value);
        this._skipOnChange = false;
    }
    get targetType() {
        return this._targetType;
    }
    /** @internal */
    _toJSON() {
        return this.qualifiedName() || null;
    }
    deepCopyInto(clone, idMap, unresolvedIdentifierFixers) {
        // make sure we copy the refs, not the values, refs might be broken.
        clone["__" + this.name].updateWithRawValue(this.qualifiedName());
    }
}
exports.ByNameReferenceProperty = ByNameReferenceProperty;
/**
 * Property value that references zero or more (model) elements by name.
 *
 * The reference list is only used internally, and externally a view of the reference list that returns the real objects is exposed.
 * So, the flow is either:
 *  [server] -> [internal ref list (observable)] -> [update view]
 * or:
 *  [Sdk] -> [view] -- onchange ---> [internal ref list] --- onChange event ---> [send delta's]
 *
 * For simplicity's sake, referencesByName should be considered immutable here (TODO: they should be in general?),
 * so that their internal value doesn't need to be observed.
 */
class ByNameReferenceListProperty extends AbstractProperty_1.AbstractProperty {
    constructor(declaredOn, parent, name, value, _targetType) {
        super(declaredOn, parent, name, value);
        /** @internal */
        this._suppressViewEvents = false;
        /** @internal */
        this._viewList = mobx_1.observable.array([], { deep: false });
        this._targetType = _targetType;
        this._viewList.intercept(change => {
            if (this._suppressViewEvents) {
                return change;
            }
            switch (change.type) {
                case "splice":
                    change.added.forEach(newValue => {
                        utils_1.utils.assertNotNull(newValue, this.name, true);
                        checkElementIsByNameReferrable(newValue, this.name, "add");
                    });
                    break;
                case "update":
                    if (change.index < 0 || change.index >= this.observableValue.length) {
                        throw new Error("Update index out of bounds " + change.index);
                    }
                    utils_1.utils.assertNotNull(change.newValue, this.name, true);
                    checkElementIsByNameReferrable(change.newValue, this.name, "add");
                    break;
            }
            return change;
        });
        this._viewListObserverDisposer = this._viewList.observe((change) => {
            if (this._suppressViewEvents) {
                return;
            }
            // For change data details see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/observe
            switch (change.type) {
                case "splice":
                    const newQualifiedNames = change.added.map(newValue => newValue._getQualifiedName());
                    this.observableValue.splice(change.index, change.removed.length, ...newQualifiedNames);
                    break;
                case "update":
                    this.observableValue[change.index] = change.newValue._getQualifiedName();
                    break;
            }
        });
        this._qualifiedNameCacheObserverDisposer = this.parent._model._qualifiedNameCache.observe(names => {
            if (this.observableValue.filter(qualifiedName => names.includes(qualifiedName)).length) {
                this.updateViewList();
            }
        });
    }
    /** @internal */
    initialize(value) {
        if (value && value.length > 0) {
            throw new Error("Illegal state: can only initialize with []");
        }
        const observableValue = mobx_1.observable.array([], { deep: false });
        observableValue.intercept(change => this.beforeChange(change));
        observableValue.observe(() => this.updateViewList());
        return { observableValue };
    }
    get() {
        this.assertReadable();
        return this._viewList;
    }
    updateWithRawValue(value) {
        this.observableValue.replace(value);
    }
    qualifiedNames() {
        return this.observableValue.slice();
    }
    /**
     * This method is used to update the qualified names as part of a rename.
     * _skipOnChange is used to prevent sending deltas for this change, as the Model Server handles this itself.
     *
     * @internal
     */
    updateQualifiedNamesForRename(qualifiedNames) {
        this._skipOnChange = true;
        this.updateWithRawValue(qualifiedNames);
        this._skipOnChange = false;
    }
    dispose() {
        super.dispose();
        this._viewListObserverDisposer();
        this._qualifiedNameCacheObserverDisposer();
    }
    /** @internal */
    beforeChange(change) {
        if (this.shouldHandleChange()) {
            this.assertWritable();
            (0, sendListChangeDeltas_1.sendListChangeDeltas)(this, change);
        }
        return change;
    }
    /** @internal */
    updateViewList() {
        const newViewList = this.observableValue.map(qualifiedName => this.parent._model._resolveName(this._targetType, qualifiedName));
        if (!utils_1.utils.shallowEquals(this._viewList, newViewList)) {
            this._suppressViewEvents = true;
            this._viewList.replace(newViewList);
            this._suppressViewEvents = false;
        }
    }
    /** @internal */
    toRawChangeValue(qualifiedName) {
        return qualifiedName;
    }
    get targetType() {
        return this._targetType;
    }
    /** @internal */
    _toJSON() {
        return this.qualifiedNames();
    }
    deepCopyInto(clone, idMap, unresolvedIdentifierFixers) {
        // make sure we copy the refs, not the values, refs might be broken.
        clone["__" + this.name].updateWithRawValue(this.qualifiedNames());
    }
}
exports.ByNameReferenceListProperty = ByNameReferenceListProperty;
//# sourceMappingURL=ByNameReferenceProperty.js.map