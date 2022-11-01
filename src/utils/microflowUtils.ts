import { datatypes, domainmodels, microflows, projects } from "mendixmodelsdk";
import {DEFAULT_DELTAX_MF } from "../constants/constants"

/**
 * Creates a microflow
 * @param location Folder for the microflow
 * @param name Name of the microflow to be created
 * @returns Microflow object
 */
export const createMicroflow = (
  location: projects.IFolderBase,
  name: string,
  documentation?: string
): microflows.Microflow => {
  const microflow = microflows.Microflow.createIn(location);
  microflow.name = name;
  microflow.documentation = documentation || "";
  return microflow;
};

/**
 * Creates an input parameter for a microflow
 * @param microflow Microflow that needs the input parameter
 * @param entity Entity type of the input parameter
 * @param parameterName Name of the parameter
 * @param documentation Documentation on the parameter
 * @returns Input parameter object
 */
export const createInputParameter = (
  microflow: microflows.Microflow,
  entity: domainmodels.Entity,
  parameterName?: string,
  documentation?: string
): microflows.MicroflowParameterObject => {
  const inputParameter = microflows.MicroflowParameterObject.createIn(
    microflow.objectCollection
  );
  inputParameter.name = parameterName || entity.name;
  inputParameter.documentation =
    documentation ||
    `Input parameter of type ${entity.name} and name ${parameterName}.`;
  const dataType = datatypes.ObjectType.create(entity.model);
  dataType.entity = entity;
  inputParameter.variableType = dataType;
  return inputParameter;
};

/**
 * Creates a start event. The green circle at the start of a microflow
 * @param microflow In which microflow
 * @returns Start event
 */
export const createStartEvent = (
  microflow: microflows.Microflow
): microflows.StartEvent => {
  const start = microflows.StartEvent.createIn(microflow.objectCollection);
  start.relativeMiddlePoint = { x: 0, y: 100 };
  return start;
};

/**
 * Creates and attaches an end event microflow object. The red circle at the end of a microflow
 * @param microflow In which microflow
 * @param attachAfterObject Last microflow object before the endEvent
 * @returns The end event object, in case it needs a return value
 */
export const createAndAttachEndEvent = (
  microflow: microflows.Microflow,
  attachAfterObject: microflows.MicroflowObject
): microflows.EndEvent => {
  const endEvent = createEndEvent(
    microflow,
    attachAfterObject.relativeMiddlePoint.x + DEFAULT_DELTAX_MF
  );
  connectMicroflowActions(
    microflow,
    attachAfterObject,
    endEvent,
    ConnectionType.LEFT_RIGHT
  );
  return endEvent;
};

/**
 * Creates an end event microflow object. The red circle at the end of a microflow
 * @param microflow In which microflow
 * @param x horizontal position
 * @returns The end event microflow object
 */
const createEndEvent = (
  microflow: microflows.Microflow,
  x: number
): microflows.EndEvent => {
  const endEvent = microflows.EndEvent.createIn(microflow.objectCollection);
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
const createMicroflowAction = (
  microflow: microflows.Microflow,
  x: number,
  y: number,
  widthFactor?: number
): microflows.ActionActivity => {
  const actionActivity = microflows.ActionActivity.createIn(
    microflow.objectCollection
  );
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
export const createAndAttachCreateAction = (
  microflow: microflows.Microflow,
  entity: domainmodels.Entity,
  nameOfCreatedObject: string,
  attachAfterObject: microflows.MicroflowObject
): microflows.ActionActivity => {
  const actionActivity = createCreateAction(
    microflow,
    entity,
    nameOfCreatedObject,
    attachAfterObject.relativeMiddlePoint.x + DEFAULT_DELTAX_MF
  );
  connectMicroflowActions(
    microflow,
    attachAfterObject,
    actionActivity,
    ConnectionType.LEFT_RIGHT
  );
  return actionActivity;
};

/**
 * Creates a new create action
 * @param microflow In which microflow
 * @param entity Type of the object to be created
 * @param x x position of the create action
 * @returns new create action
 */
const createCreateAction = (
  microflow: microflows.Microflow,
  entity: domainmodels.Entity,
  nameOfCreatedObject: string,
  x: number
): microflows.ActionActivity => {
  const actionActivity = createMicroflowAction(microflow, x, 100, 1);
  const createObject = microflows.CreateObjectAction.createIn(actionActivity);
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
export const createAndAttachDeleteAction = (
  microflow: microflows.Microflow,
  variableToDelete: string,
  attachAfterObject: microflows.MicroflowObject
): microflows.ActionActivity => {
  const actionActivity = createDeleteAction(
    microflow,
    variableToDelete,
    attachAfterObject.relativeMiddlePoint.x + DEFAULT_DELTAX_MF
  );
  connectMicroflowActions(
    microflow,
    attachAfterObject,
    actionActivity,
    ConnectionType.LEFT_RIGHT
  );
  return actionActivity;
};

/**
 *
 * @param microflow In which microflow
 * @param variableToDelete name of the variable to delete
 * @param x x position of the delete action
 * @returns The delete activity
 */
const createDeleteAction = (
  microflow: microflows.Microflow,
  variableToDelete: string,
  x: number
): microflows.ActionActivity => {
  const actionActivity = createMicroflowAction(microflow, x, 100, 1);
  const DeleteObject = microflows.DeleteAction.createIn(actionActivity);
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
export const createAndAttachCommitAction = (
  microflow: microflows.Microflow,
  variableToCommit: string,
  attachAfterObject: microflows.MicroflowObject
): microflows.ActionActivity => {
  const actionActivity = createCommitAction(
    microflow,
    variableToCommit,
    attachAfterObject.relativeMiddlePoint.x + DEFAULT_DELTAX_MF
  );
  connectMicroflowActions(
    microflow,
    attachAfterObject,
    actionActivity,
    ConnectionType.LEFT_RIGHT
  );
  return actionActivity;
};

/**
 * Creates a commit action
 * @param microflow In which microflow
 * @param variableToCommit name of the variable to commit
 * @param x x position of the delete action
 * @returns The commit activity
 */
const createCommitAction = (
  microflow: microflows.Microflow,
  variableToCommit: string,
  x: number
): microflows.ActionActivity => {
  const actionActivity = createMicroflowAction(microflow, x, 100, 1);
  const CommitObject = microflows.CommitAction.createIn(actionActivity);
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
const connectMicroflowActions = (
  microflow: microflows.Microflow,
  start: microflows.MicroflowObject,
  end: microflows.MicroflowObject,
  connectionType: ConnectionType
): void => {
  const flow = microflows.SequenceFlow.createIn(microflow);
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

enum ConnectionType {
  TOP_BOTTOM,
  LEFT_RIGHT,
}
