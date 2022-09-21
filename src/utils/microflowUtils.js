"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionType = exports.connectMicroflowActions = exports.createAndAttachDeleteAction = exports.createAndAttachCreateAction = exports.createEndEvent = exports.createAndAttachEndEvent = exports.createStartEvent = exports.createMicroflow = void 0;
const mendixmodelsdk_1 = require("mendixmodelsdk");
const createMicroflow = (location, name) => {
    const microflow = mendixmodelsdk_1.microflows.Microflow.createIn(location);
    microflow.name = name;
    return microflow;
};
exports.createMicroflow = createMicroflow;
const createStartEvent = (microflow) => {
    const start = mendixmodelsdk_1.microflows.StartEvent.createIn(microflow.objectCollection);
    start.relativeMiddlePoint = { x: 0, y: 100 };
    return start;
};
exports.createStartEvent = createStartEvent;
const createAndAttachEndEvent = (microflow, attachAfterObject) => {
    const endEvent = (0, exports.createEndEvent)(microflow, attachAfterObject.relativeMiddlePoint.x + 140);
    connectMicroflowActions(microflow, attachAfterObject, endEvent, ConnectionType.LEFT_RIGHT);
    return endEvent;
};
exports.createAndAttachEndEvent = createAndAttachEndEvent;
const createEndEvent = (microflow, x) => {
    const end = mendixmodelsdk_1.microflows.EndEvent.createIn(microflow.objectCollection);
    end.relativeMiddlePoint = { x: x, y: 100 };
    return end;
};
exports.createEndEvent = createEndEvent;
const createMicroflowAction = (microflow, x, widthFactor) => {
    const actionActivity = mendixmodelsdk_1.microflows.ActionActivity.createIn(microflow.objectCollection);
    actionActivity.relativeMiddlePoint = { x: x, y: 100 };
    actionActivity.size.width = actionActivity.size.width * widthFactor;
    return actionActivity;
};
const createAndAttachCreateAction = (microflow, entity, attachAfterObject) => {
    const actionActivity = createCreateAction(microflow, entity, attachAfterObject.relativeMiddlePoint.x + 140);
    connectMicroflowActions(microflow, attachAfterObject, actionActivity, ConnectionType.LEFT_RIGHT);
    return actionActivity;
};
exports.createAndAttachCreateAction = createAndAttachCreateAction;
const createCreateAction = (microflow, entity, x) => {
    const actionActivity = createMicroflowAction(microflow, x, 1);
    const createObject = mendixmodelsdk_1.microflows.CreateObjectAction.createIn(actionActivity);
    createObject.entity = entity;
    createObject.outputVariableName = `New${entity.name}`;
    createObject.structureTypeName = entity.name;
    return actionActivity;
};
const createAndAttachDeleteAction = (microflow, entity, attachAfterObject) => {
    const actionActivity = createDeleteAction(microflow, entity, attachAfterObject.relativeMiddlePoint.x + 140);
    connectMicroflowActions(microflow, attachAfterObject, actionActivity, ConnectionType.LEFT_RIGHT);
    return actionActivity;
};
exports.createAndAttachDeleteAction = createAndAttachDeleteAction;
const createDeleteAction = (microflow, entity, x) => {
    const actionActivity = createMicroflowAction(microflow, x, 1);
    const DeleteObject = mendixmodelsdk_1.microflows.DeleteAction.createIn(actionActivity);
    DeleteObject.refreshInClient = true;
    return actionActivity;
};
function connectMicroflowActions(microflow, start, end, connectionType) {
    const flow = mendixmodelsdk_1.microflows.SequenceFlow.createIn(microflow);
    flow.origin = start;
    flow.destination = end;
    switch (connectionType) {
        case ConnectionType.LEFT_RIGHT:
            flow.originConnectionIndex = 1;
            flow.destinationConnectionIndex = 3;
            break;
        case ConnectionType.TOP_BOTTOM:
            flow.originConnectionIndex = 2;
            flow.destinationConnectionIndex = 0;
            break;
        default:
            throw Error(`Unsupported ConnectionType: ${connectionType}`);
    }
    return flow;
}
exports.connectMicroflowActions = connectMicroflowActions;
var ConnectionType;
(function (ConnectionType) {
    ConnectionType[ConnectionType["TOP_BOTTOM"] = 0] = "TOP_BOTTOM";
    ConnectionType[ConnectionType["LEFT_RIGHT"] = 1] = "LEFT_RIGHT";
})(ConnectionType = exports.ConnectionType || (exports.ConnectionType = {}));
