"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartProperty = void 0;
const mobx_1 = require("mobx");
const AbstractProperty_1 = require("./AbstractProperty");
const instantiateChildElement_1 = require("./instantiateChildElement");
/**
 * A property value that is a (model) element.
 * Will detect when children are moved, added, deleted and sends the appropriate deltas.
 */
class PartProperty extends AbstractProperty_1.AbstractProperty {
    /** @internal */
    initialize(value, hasDefaultValue) {
        this.hasDefaultValue = hasDefaultValue;
        return { observableValue: mobx_1.observable.box(value, { deep: false }) };
    }
    get() {
        this.assertReadable();
        return this.observableValue.get();
    }
    set(newValue) {
        this.assertWritable();
        if (this.isRequired && !newValue) {
            throw new Error(`Cannot unset required part property`);
        }
        const oldValue = this.observableValue.get();
        if (newValue === oldValue) {
            return;
        }
        if (newValue && !(newValue._isNew || newValue._isDetached)) {
            throw new Error(`Only new or detached elements can be assigned to a part property; did you forget to call detach()?`);
        }
        if (oldValue) {
            oldValue._sendDeleteDelta();
            oldValue._deleteInternal();
        }
        if (newValue) {
            newValue.versionInfo.checkSameModelVersion(newValue.model, this.parent.model);
            newValue.versionInfo.checkStructureVersion(newValue);
            newValue._container = this.parent;
            if (newValue._isNew) {
                // just created
                if (!this.parent._isNew) {
                    newValue._updateElementsContainer(this.parent.unit);
                    this.parent._model._qualifiedNameCache.addStructureToCache(newValue);
                }
                newValue._sendCreateDelta(this.parent, this.name);
            }
            else {
                // moved TO here
                if (this.parent._isNew) {
                    throw new Error("Only new elements can be assigned to a part property of a new structure; " +
                        "please add the parent structure to the model first.");
                }
                newValue._state = "attached";
                newValue._model._removeDetachedStructure(newValue);
                newValue._sendAttachDelta(this.parent, this.name);
            }
            newValue._processNameChange();
        }
        this.observableValue.set(newValue || null);
    }
    updateWithRawValue(value) {
        const newChild = (0, instantiateChildElement_1.instantiateChildElement)(this.parent, value);
        if (newChild) {
            newChild._container = this.parent;
        }
        // cleanup old value, we got a server side change that this child is no longer ours:
        const currentChild = this.observableValue.get();
        if (currentChild !== null && currentChild !== newChild) {
            currentChild._dispose();
        }
        this.observableValue.set(newChild);
    }
    updateElementContainer(unit) {
        const element = this.observableValue.get();
        if (element) {
            element._updateElementsContainer(unit);
        }
    }
    detachValue() {
        const element = this.observableValue.get();
        if (element) {
            element._sendDetachDelta();
            this.observableValue.set(null);
        }
    }
    dispose() {
        super.dispose();
        const element = this.observableValue.get();
        if (element && element.container.id === this.parent.id) {
            element._dispose();
        }
    }
    /** @internal */
    _toJSON() {
        const value = this.get();
        return value ? value.toJSON() : null;
    }
    deepCopyInto(clone, idMap, unresolvedIdentifierFixers) {
        const val = this.get();
        if (val === null) {
            clone[this.name] = val;
        }
        else {
            val._deepCopyElementInto(clone, this.name, idMap, unresolvedIdentifierFixers);
        }
    }
}
exports.PartProperty = PartProperty;
//# sourceMappingURL=PartProperty.js.map