"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendListChangeDeltas = void 0;
const utils_1 = require("../../utils");
function sendListChangeDeltas(property, change) {
    switch (change.type) {
        case "update":
            utils_1.utils.assertNotNull(change.object[change.index], property.name, true);
            property.parent._sendChangeDelta(property.name, property.toRawChangeValue(change.newValue), "CHANGE", change.index);
            break;
        case "splice":
            change.added.forEach(item => utils_1.utils.assertNotNull(item, property.name, true));
            for (let i = change.removedCount - 1; i >= 0; i--) {
                property.parent._sendChangeDelta(property.name, null, "REMOVE", change.index + i);
            }
            for (let i = 0; i < change.added.length; i++) {
                property.parent._sendChangeDelta(property.name, property.toRawChangeValue(change.added[i]), "ADD", change.index + i);
            }
            break;
    }
}
exports.sendListChangeDeltas = sendListChangeDeltas;
//# sourceMappingURL=sendListChangeDeltas.js.map