"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAndAttachCommitAction = exports.createAndAttachDeleteAction = exports.createAndAttachCreateAction = exports.createAndAttachEndEvent = exports.createStartEvent = exports.createInputParameter = exports.createMicroflow = void 0;
const mendixmodelsdk_1 = require("mendixmodelsdk");
/**
 * Creates a microflow
 * @param location Folder for the microflow
 * @param name Name of the microflow to be created
 * @returns Microflow object
 */
const createMicroflow = (location, name, documentation) => {
    const microflow = mendixmodelsdk_1.microflows.Microflow.createIn(location);
    microflow.name = name;
    microflow.documentation = documentation || "";
    return microflow;
};
exports.createMicroflow = createMicroflow;
/**
 * Creates an input parameter for a microflow
 * @param microflow Microflow that needs the input parameter
 * @param entity Entity type of the input parameter
 * @param parameterName Name of the parameter
 * @param documentation Documentation on the parameter
 * @returns Input parameter object
 */
const createInputParameter = (microflow, entity, parameterName, documentation) => {
    const inputParameter = mendixmodelsdk_1.microflows.MicroflowParameterObject.createIn(microflow.objectCollection);
    inputParameter.name = parameterName || entity.name;
    inputParameter.documentation =
        documentation ||
            `Input parameter of type ${entity.name} and name ${parameterName}.`;
    const dataType = mendixmodelsdk_1.datatypes.ObjectType.create(entity.model);
    dataType.entity = entity;
    inputParameter.variableType = dataType;
    return inputParameter;
};
exports.createInputParameter = createInputParameter;
/**
 * Creates a start event. The green circle at the start of a microflow
 * @param microflow In which microflow
 * @returns Start event
 */
const createStartEvent = (microflow) => {
    const start = mendixmodelsdk_1.microflows.StartEvent.createIn(microflow.objectCollection);
    start.relativeMiddlePoint = { x: 0, y: 100 };
    return start;
};
exports.createStartEvent = createStartEvent;
/**
 * Creates and attaches an end event microflow object. The red circle at the end of a microflow
 * @param microflow In which microflow
 * @param attachAfterObject Last microflow object before the endEvent
 * @returns The end event object, in case it needs a return value
 */
const createAndAttachEndEvent = (microflow, attachAfterObject) => {
    const endEvent = createEndEvent(microflow, attachAfterObject.relativeMiddlePoint.x + 140);
    connectMicroflowActions(microflow, attachAfterObject, endEvent, ConnectionType.LEFT_RIGHT);
    return endEvent;
};
exports.createAndAttachEndEvent = createAndAttachEndEvent;
/**
 * Creates an end event microflow object. The red circle at the end of a microflow
 * @param microflow In which microflow
 * @param x horizontal position
 * @returns The end event microflow object
 */
const createEndEvent = (microflow, x) => {
    const endEvent = mendixmodelsdk_1.microflows.EndEvent.createIn(microflow.objectCollection);
    endEvent.relativeMiddlePoint = { x: x, y: 100 };
    return endEvent;
};
/**
 * Create an unspecified microflow actions
 * @param microflow In which microflow
 * @param x x position of the microflow object
 * @param y y position of the microflow object
 * @param widthFactor width of the microflow object, multitude of the default width
 * @returns
 */
const createMicroflowAction = (microflow, x, y, widthFactor) => {
    const actionActivity = mendixmodelsdk_1.microflows.ActionActivity.createIn(microflow.objectCollection);
    actionActivity.relativeMiddlePoint = { x, y };
    actionActivity.size.width = actionActivity.size.width * (widthFactor || 1);
    return actionActivity;
};
/**
 * Creates and attaches a new create action
 * @param microflow In which microflow
 * @param entity Type of the object to be created
 * @param attachAfterObject Previous microflow object
 * @returns The create activity
 */
const createAndAttachCreateAction = (microflow, entity, nameOfCreatedObject, attachAfterObject) => {
    const actionActivity = createCreateAction(microflow, entity, nameOfCreatedObject, attachAfterObject.relativeMiddlePoint.x + 140);
    connectMicroflowActions(microflow, attachAfterObject, actionActivity, ConnectionType.LEFT_RIGHT);
    return actionActivity;
};
exports.createAndAttachCreateAction = createAndAttachCreateAction;
/**
 * Creates a new create action
 * @param microflow In which microflow
 * @param entity Type of the object to be created
 * @param x x position of the create action
 * @returns new create action
 */
const createCreateAction = (microflow, entity, nameOfCreatedObject, x) => {
    const actionActivity = createMicroflowAction(microflow, x, 100, 1);
    const createObject = mendixmodelsdk_1.microflows.CreateObjectAction.createIn(actionActivity);
    createObject.entity = entity;
    createObject.outputVariableName = `$${nameOfCreatedObject}`;
    createObject.structureTypeName = entity.name;
    return actionActivity;
};
/**
 * Creates and attaches a delete action
 * @param microflow In which microflow
 * @param variableToDelete name of the variable to delete
 * @param attachAfterObject Previous microflow object
 * @returns The attached delete activity
 */
const createAndAttachDeleteAction = (microflow, variableToDelete, attachAfterObject) => {
    const actionActivity = createDeleteAction(microflow, variableToDelete, attachAfterObject.relativeMiddlePoint.x + 140);
    connectMicroflowActions(microflow, attachAfterObject, actionActivity, ConnectionType.LEFT_RIGHT);
    return actionActivity;
};
exports.createAndAttachDeleteAction = createAndAttachDeleteAction;
/**
 *
 * @param microflow In which microflow
 * @param variableToDelete name of the variable to delete
 * @param x x position of the delete action
 * @returns The delete activity
 */
const createDeleteAction = (microflow, variableToDelete, x) => {
    const actionActivity = createMicroflowAction(microflow, x, 100, 1);
    const DeleteObject = mendixmodelsdk_1.microflows.DeleteAction.createIn(actionActivity);
    DeleteObject.refreshInClient = true;
    DeleteObject.deleteVariableName = variableToDelete;
    return actionActivity;
};
/**
 * Creates and attaches a commit action
 * @param microflow In which microflow
 * @param variableToCommit name of the variable to commit
 * @param attachAfterObject Previous microflow object
 * @returns The attached commit activity
 */
const createAndAttachCommitAction = (microflow, variableToCommit, attachAfterObject) => {
    const actionActivity = createCommitAction(microflow, variableToCommit, attachAfterObject.relativeMiddlePoint.x + 140);
    connectMicroflowActions(microflow, attachAfterObject, actionActivity, ConnectionType.LEFT_RIGHT);
    return actionActivity;
};
exports.createAndAttachCommitAction = createAndAttachCommitAction;
/**
 * Creates a commit action
 * @param microflow In which microflow
 * @param variableToCommit name of the variable to commit
 * @param x x position of the delete action
 * @returns The commit activity
 */
const createCommitAction = (microflow, variableToCommit, x) => {
    const actionActivity = createMicroflowAction(microflow, x, 100, 1);
    const CommitObject = mendixmodelsdk_1.microflows.CommitAction.createIn(actionActivity);
    CommitObject.refreshInClient = true;
    CommitObject.commitVariableName = variableToCommit;
    return actionActivity;
};
/**
 * Connects the end microflow object to the start microflow object
 * @param microflow In which microflow
 * @param start From microflow object
 * @param end To microflow object
 * @param connectionType Direction of the connection
 */
const connectMicroflowActions = (microflow, start, end, connectionType) => {
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
};
var ConnectionType;
(function (ConnectionType) {
    ConnectionType[ConnectionType["TOP_BOTTOM"] = 0] = "TOP_BOTTOM";
    ConnectionType[ConnectionType["LEFT_RIGHT"] = 1] = "LEFT_RIGHT";
})(ConnectionType || (ConnectionType = {}));
