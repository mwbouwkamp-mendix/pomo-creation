"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.utils = void 0;
const uuid = require("uuid");
/**
 * The `utils` module contains various utility interfaces and functions.
 */
var utils;
(function (utils) {
    /**
     * Generates a random UUID to set the ID of an element or unit to.
     * There is no intrinsic ID collision detection/avoidance mechanism but it's good enough in practice.
     */
    function randomUuid() {
        return uuid.v4();
    }
    utils.randomUuid = randomUuid;
    /**
     * Flattens an array of arrays of items of type `T`, returning a single array
     * that consists of the concatenation of the original arrays.
     */
    function flatten(array) {
        return [].concat(...array);
    }
    utils.flatten = flatten;
    /**
     * Combines the given `parts` and returns them as an URL, avoiding duplicate slashes.
     */
    function combineUrl(...parts) {
        return parts.reduce((previousValue, currentValue) => {
            // strip all trailing slashes from previousValue, strip all leading slashes from currentValue, and combine the two with a slash
            return previousValue.replace(/\/+$/, "") + "/" + currentValue.replace(/^\/+/, "");
        });
    }
    utils.combineUrl = combineUrl;
    function removeFromArray(list, item) {
        const idx = list.indexOf(item);
        if (idx !== -1) {
            list.splice(idx, 1);
        }
    }
    utils.removeFromArray = removeFromArray;
    function assertNotNull(value, propertyName, listy = false) {
        if (value === undefined || value === null) {
            throw new Error(listy ? `Cannot push null to ${propertyName}` : `Cannot set ${propertyName} to null`);
        }
    }
    utils.assertNotNull = assertNotNull;
    function shallowEquals(first, second) {
        if (first.length !== second.length) {
            return false;
        }
        for (let i = 0; i < first.length; i++) {
            if (first[i] !== second[i]) {
                return false;
            }
        }
        return true;
    }
    utils.shallowEquals = shallowEquals;
    function isObject(data) {
        return data !== null && typeof data === "object";
    }
    utils.isObject = isObject;
    function isBrowser() {
        return typeof window === "object";
    }
    utils.isBrowser = isBrowser;
})(utils = exports.utils || (exports.utils = {}));
//# sourceMappingURL=utils.js.map