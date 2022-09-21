"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.disableLogger = exports.enableLogger = exports.setLogger = exports.setPlatformConfig = void 0;
__exportStar(require("./MendixPlatformClient"), exports);
__exportStar(require("./clients"), exports);
__exportStar(require("./object-api"), exports);
var config_1 = require("./utils/config");
Object.defineProperty(exports, "setPlatformConfig", { enumerable: true, get: function () { return config_1.setPlatformConfig; } });
var logger_1 = require("./utils/logger");
Object.defineProperty(exports, "setLogger", { enumerable: true, get: function () { return logger_1.setLogger; } });
Object.defineProperty(exports, "enableLogger", { enumerable: true, get: function () { return logger_1.enableLogger; } });
Object.defineProperty(exports, "disableLogger", { enumerable: true, get: function () { return logger_1.disableLogger; } });
//# sourceMappingURL=index.js.map