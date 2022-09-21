"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartListProperty = void 0;
const mobx_1 = require("mobx");
const AbstractProperty_1 = require("./AbstractProperty");
const instantiateChildElement_1 = require("./instantiateChildElement");
/**
 * A property value that is a list of (model) elements.
 * Will detect when children are moved, added, deleted and sends the appropriate deltas.
 */
class PartListProperty extends AbstractProperty_1.AbstractProperty {
    constructor() {
        super(...arguments);
        this._detaching = false;
    }
    /*
     * Currently, only possible default value for listy properties is [],
     * so we don't have to store initialItems to be able to distinguish from default value.
     */
    /** @internal */
    initialize(initialItems) {
        const observableValue = mobx_1.observable.array(initialItems || [], { deep: false });
        observableValue.intercept(change => this.beforeChange(change));
        const disposer = observableValue.observe(change => this.onChange(change));
        return { observableValue, disposer };
    }
    get() {
        this.assertReadable();
        return this.observableValue;
    }
    updateWithRawValue(value) {
        const newChildren = value.map(e => (0, instantiateChildElement_1.instantiateChildElement)(this.parent, e));
        const oldChildren = this.observableValue;
        // dispose old children:
        for (let i = 0; i < oldChildren.length; i++) {
            if (newChildren.indexOf(oldChildren[i]) === -1) {
                oldChildren[i]._dispose();
            }
        }
        this.observableValue.replace(newChildren);
    }
    /** @internal */
    beforeChange(change) {
        if (!this.shouldHandleChange()) {
            return change;
        }
        this.assertWritable();
        this.checkAddedItems(change);
        switch (change.type) {
            case "splice":
                for (let i = change.removedCount - 1; i >= 0; i--) {
                    this.sendChildRemoval(this.observableValue[change.index + i], change.added);
                }
                for (let i = 0; i < change.added.length; i++) {
                    this.sendChildAddition(change.added[i], change.index + i);
                }
                break;
            case "update":
                this.sendChildRemoval(this.observableValue[change.index], [change.newValue]);
                this.sendChildAddition(change.newValue, change.index);
                break;
        }
        return change;
    }
    /** @internal */
    checkAddedItems(change) {
        const listAfterChange = change.object.slice();
        const newItems = [];
        if (change.type === "splice") {
            newItems.push(...change.added);
            listAfterChange.splice(change.index, change.removedCount, ...change.added);
        }
        else {
            newItems.push(change.newValue);
            listAfterChange[change.index] = change.newValue;
        }
        for (const item of newItems) {
            this.checkAddedItem(item, change.object.indexOf(item) >= 0);
            if (listAfterChange.filter(other => other === item).length > 1) {
                throw new Error(`Cannot add element '${item.structureTypeName}#${item.id}' more than once ` +
                    `to property '${this.name}' of '${this.parent.structureTypeName}#${this.parent.id}'`);
            }
        }
    }
    /** @internal */
    checkAddedItem(item, itemWasAlreadyInList) {
        if (!item) {
            throw new Error(`Null values cannot be added to property '${this.name}' of '${this.parent.structureTypeName}#${this.parent.id}'`);
        }
        if (!itemWasAlreadyInList && !(item._isNew || item._isDetached)) {
            throw new Error(`Only new or detached elements can be added to a part list property; did you forget to call detach()?`);
        }
        if (!item._isNew && this.parent._isNew) {
            throw new Error("Only new elements can be added to a part list property of a new structure; " +
                "please add the parent structure to the model first.");
        }
        item.versionInfo.checkSameModelVersion(item.model, this.parent.model);
        item.versionInfo.checkStructureVersion(item);
    }
    /** @internal */
    sendChildAddition(item, index) {
        if (item._isNew) {
            item._sendCreateDelta(this.parent, this.name, index);
        }
        else {
            item._sendAttachDelta(this.parent, this.name, index);
        }
    }
    /** @internal */
    sendChildRemoval(element, addedElements) {
        if (this._detaching || addedElements.indexOf(element) > -1) {
            element._sendDetachDelta();
        }
        else {
            element._sendDeleteDelta();
            element._deleteInternal();
        }
    }
    /** @internal */
    onChange(change) {
        if (!this.shouldHandleChange()) {
            return;
        }
        // For change data details see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/observe
        switch (change.type) {
            case "splice":
                for (let i = change.index; i < change.index + change.addedCount; i++) {
                    this.processChildAddition(i);
                }
                break;
            case "update":
                this.processChildAddition(change.index);
                break;
        }
    }
    /** @internal */
    processChildAddition(index) {
        const item = this.observableValue[index];
        item._container = this.parent;
        if (item._isNew) {
            if (!this.parent._isNew) {
                item._updateElementsContainer(this.parent.unit);
                this.parent._model._qualifiedNameCache.addStructureToCache(item);
            }
            item._unit = this.parent.unit;
        }
        else {
            item._state = "attached";
            item._model._removeDetachedStructure(item);
        }
        item._processNameChange();
    }
    updateElementContainer(unit) {
        this.observableValue.forEach((item) => item._updateElementsContainer(unit));
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
            this._detaching = true;
            this.observableValue.splice(idx, 1);
            this._detaching = false;
        }
    }
    dispose() {
        super.dispose();
        // Only dispose an element that is contained by this PartListProperty
        this.observableValue.forEach(elem => {
            if (this.parent.id === elem.container.id) {
                elem._dispose();
            }
        });
    }
    /** @internal */
    _toJSON() {
        return this.get().map(item => item.toJSON());
    }
    deepCopyInto(clone, idMap, unresolvedIdentifierFixers) {
        // throw away default / existing values in the list
        clone["__" + this.name].get().clear();
        this.get()
            .filter(child => !!child)
            .forEach(child => child._deepCopyElementInto(clone, this.name, idMap, unresolvedIdentifierFixers));
    }
}
exports.PartListProperty = PartListProperty;
//# sourceMappingURL=PartListProperty.js.map