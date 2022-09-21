/*
The MIT License (MIT)

Copyright (c) 2015 - present Mendix BV

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

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
exports.beginTransaction = exports.runInTransaction = exports.Transaction = exports.JavaScriptSerializer = exports.createModelUnitFromJSON = exports.ModelEventReceiver = exports.createElementFromJSON = exports.UndoState = exports.UndoManager = exports.Version = exports.AbstractModel = exports.StructuralUnit = exports.ModelUnit = exports.Element = exports.AbstractEnum = exports.AbstractElement = exports.AbstractUnit = exports.Structure = exports.Model = void 0;
__exportStar(require("./version"), exports);
__exportStar(require("./common"), exports);
var Model_1 = require("./Model");
Object.defineProperty(exports, "Model", { enumerable: true, get: function () { return Model_1.Model; } });
__exportStar(require("./gen/all-model-classes"), exports);
__exportStar(require("./gen/metamodelversion"), exports);
__exportStar(require("./sdk/utils"), exports);
__exportStar(require("./sdk/configuration"), exports);
__exportStar(require("./sdk/internal/properties"), exports);
var internal_1 = require("./sdk/internal");
Object.defineProperty(exports, "Structure", { enumerable: true, get: function () { return internal_1.Structure; } });
Object.defineProperty(exports, "AbstractUnit", { enumerable: true, get: function () { return internal_1.AbstractUnit; } });
Object.defineProperty(exports, "AbstractElement", { enumerable: true, get: function () { return internal_1.AbstractElement; } });
Object.defineProperty(exports, "AbstractEnum", { enumerable: true, get: function () { return internal_1.AbstractEnum; } });
Object.defineProperty(exports, "Element", { enumerable: true, get: function () { return internal_1.Element; } });
Object.defineProperty(exports, "ModelUnit", { enumerable: true, get: function () { return internal_1.ModelUnit; } });
Object.defineProperty(exports, "StructuralUnit", { enumerable: true, get: function () { return internal_1.StructuralUnit; } });
Object.defineProperty(exports, "AbstractModel", { enumerable: true, get: function () { return internal_1.AbstractModel; } });
Object.defineProperty(exports, "Version", { enumerable: true, get: function () { return internal_1.Version; } });
Object.defineProperty(exports, "UndoManager", { enumerable: true, get: function () { return internal_1.UndoManager; } });
Object.defineProperty(exports, "UndoState", { enumerable: true, get: function () { return internal_1.UndoState; } });
Object.defineProperty(exports, "createElementFromJSON", { enumerable: true, get: function () { return internal_1.createElementFromJSON; } });
Object.defineProperty(exports, "ModelEventReceiver", { enumerable: true, get: function () { return internal_1.ModelEventReceiver; } });
Object.defineProperty(exports, "createModelUnitFromJSON", { enumerable: true, get: function () { return internal_1.createModelUnitFromJSON; } });
var JavaScriptSerializer_1 = require("./sdk/extras/JavaScriptSerializer");
Object.defineProperty(exports, "JavaScriptSerializer", { enumerable: true, get: function () { return JavaScriptSerializer_1.JavaScriptSerializer; } });
var TransactionManager_1 = require("./sdk/internal/deltas/TransactionManager");
Object.defineProperty(exports, "Transaction", { enumerable: true, get: function () { return TransactionManager_1.Transaction; } });
Object.defineProperty(exports, "runInTransaction", { enumerable: true, get: function () { return TransactionManager_1.runInTransaction; } });
Object.defineProperty(exports, "beginTransaction", { enumerable: true, get: function () { return TransactionManager_1.beginTransaction; } });
//# sourceMappingURL=index.js.map