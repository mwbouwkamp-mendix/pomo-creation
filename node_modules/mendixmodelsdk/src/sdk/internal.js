"use strict";
/* tslint:disable:no-circular-imports */
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
exports.ModelEventReceiver = exports.UndoState = exports.UndoManager = exports.RestTransportation = exports.ModelServerClientImpl = exports.DeltaManager = exports.instancehelpers = exports.createModelUnitFromJSON = exports.createElementFromJSON = exports.AbstractEnum = exports.ModelUnit = exports.StructuralUnit = exports.AbstractUnit = exports.Element = exports.AbstractElement = exports.Structure = void 0;
var structures_1 = require("./internal/structures");
Object.defineProperty(exports, "Structure", { enumerable: true, get: function () { return structures_1.Structure; } });
var elements_1 = require("./internal/elements");
Object.defineProperty(exports, "AbstractElement", { enumerable: true, get: function () { return elements_1.AbstractElement; } });
Object.defineProperty(exports, "Element", { enumerable: true, get: function () { return elements_1.Element; } });
var units_1 = require("./internal/units");
Object.defineProperty(exports, "AbstractUnit", { enumerable: true, get: function () { return units_1.AbstractUnit; } });
Object.defineProperty(exports, "StructuralUnit", { enumerable: true, get: function () { return units_1.StructuralUnit; } });
Object.defineProperty(exports, "ModelUnit", { enumerable: true, get: function () { return units_1.ModelUnit; } });
var instances_1 = require("./internal/instances");
Object.defineProperty(exports, "AbstractEnum", { enumerable: true, get: function () { return instances_1.AbstractEnum; } });
Object.defineProperty(exports, "createElementFromJSON", { enumerable: true, get: function () { return instances_1.createElementFromJSON; } });
Object.defineProperty(exports, "createModelUnitFromJSON", { enumerable: true, get: function () { return instances_1.createModelUnitFromJSON; } });
Object.defineProperty(exports, "instancehelpers", { enumerable: true, get: function () { return instances_1.instancehelpers; } });
__exportStar(require("./internal/properties"), exports);
__exportStar(require("./internal/ByIdReference"), exports);
var deltas_1 = require("./internal/deltas");
Object.defineProperty(exports, "DeltaManager", { enumerable: true, get: function () { return deltas_1.DeltaManager; } });
var ModelServerClientImpl_1 = require("./internal/ModelServerClientImpl");
Object.defineProperty(exports, "ModelServerClientImpl", { enumerable: true, get: function () { return ModelServerClientImpl_1.ModelServerClientImpl; } });
var RestTransportation_1 = require("./internal/RestTransportation");
Object.defineProperty(exports, "RestTransportation", { enumerable: true, get: function () { return RestTransportation_1.RestTransportation; } });
__exportStar(require("./internal/versionChecks"), exports);
__exportStar(require("./internal/AbstractModel"), exports);
var UndoManager_1 = require("./internal/UndoManager");
Object.defineProperty(exports, "UndoManager", { enumerable: true, get: function () { return UndoManager_1.UndoManager; } });
Object.defineProperty(exports, "UndoState", { enumerable: true, get: function () { return UndoManager_1.UndoState; } });
var ModelEventReceiver_1 = require("./internal/model-events/ModelEventReceiver");
Object.defineProperty(exports, "ModelEventReceiver", { enumerable: true, get: function () { return ModelEventReceiver_1.ModelEventReceiver; } });
__exportStar(require("./internal/model-events/IModelEvent"), exports);
__exportStar(require("./internal/working-copy-events/IWorkingCopyEvent"), exports);
//# sourceMappingURL=internal.js.map