"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promiseOrCallbacks = void 0;
let warningShowed = false;
function promiseOrCallbacks(action, callback, errorCallback) {
    if (callback) {
        // Only show this warning once, the first time
        if (!warningShowed) {
            console.warn("[mendixmodelsdk] Deprecation Warning: you are using callbacks instead of promises for asynchronous actions, please use promises instead.");
            warningShowed = true;
        }
        action(callback, errorCallback);
    }
    else {
        return new Promise(action);
    }
}
exports.promiseOrCallbacks = promiseOrCallbacks;
//# sourceMappingURL=promiseOrCallbacks.js.map