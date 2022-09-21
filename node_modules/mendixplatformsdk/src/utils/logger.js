"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.disableLogger = exports.enableLogger = exports.setLogger = exports.logger = void 0;
/** @internal */
exports.logger = console;
/**
 * Override the logger object that is used to print information about what the SDK is doing.
 * To disable logging, pass `undefined` as the logger.
 */
function setLogger(loggerObject) {
    exports.logger = loggerObject ?? stubLogger;
}
exports.setLogger = setLogger;
/**
 * Enable logging through the console. To set a specific logger, use {@link setLogger}.
 */
function enableLogger() {
    exports.logger = console;
}
exports.enableLogger = enableLogger;
/**
 * Disables all logging. To enable logging, use {@link enableLogger}.
 */
function disableLogger() {
    exports.logger = stubLogger;
}
exports.disableLogger = disableLogger;
// tslint:disable-next-line: no-empty
const stubLogger = { info() { }, warn() { }, error() { } };
//# sourceMappingURL=logger.js.map