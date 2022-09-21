"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.instantiateChildElement = void 0;
const instances_1 = require("../instances");
function instantiateChildElement(parent, value) {
    let newChild;
    if (parent._isNew) {
        newChild = value ? instances_1.instancehelpers.createNewElementInstanceFromJSON(parent._model, value) : null;
    }
    else {
        newChild = instances_1.instancehelpers.modelElementJsonToInstance(parent._model, parent.unit, parent, value, parent._isPartial);
        if (newChild) {
            parent.unit._cacheElement(newChild);
        }
    }
    return newChild;
}
exports.instantiateChildElement = instantiateChildElement;
//# sourceMappingURL=instantiateChildElement.js.map