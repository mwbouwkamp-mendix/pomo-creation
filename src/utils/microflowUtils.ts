import { datatypes, domainmodels, IModel, microflows, projects } from "mendixmodelsdk";
import { IPropertyVersionInfo } from "mendixmodelsdk/src/sdk/internal";

export const createMicroflow = (
  location: projects.IFolderBase,
  name: string
) => {
  const microflow = microflows.Microflow.createIn(location);
  microflow.name = name;
  return microflow;
};

export const createInputParameter = (
  microflow: microflows.Microflow,
  ent: domainmodels.Entity,
  parameterName?: string,
  documentation?: string
) => {
  const objectCollection = microflow.objectCollection;
  const inputParameter = microflows.MicroflowParameterObject.createIn(objectCollection);
        inputParameter.name           = parameterName || ent.name;
        inputParameter.documentation  = documentation || `Input parameter of type ${ent.name} and name ${parameterName}.`;
  const dataType = datatypes.ObjectType.create(ent.model);
        dataType.entity = ent;
  inputParameter.variableType = dataType;
  return inputParameter;
};

export const createStartEvent = (
  microflow: microflows.Microflow
): microflows.StartEvent => {
  const start = microflows.StartEvent.createIn(microflow.objectCollection);
  start.relativeMiddlePoint = { x: 0, y: 100 };
  return start;
};

export const createAndAttachEndEvent = (
  microflow: microflows.Microflow,
  attachAfterObject: microflows.MicroflowObject
): microflows.EndEvent => {
  const endEvent = createEndEvent(microflow, attachAfterObject.relativeMiddlePoint.x + 140);
  connectMicroflowActions(
    microflow,
    attachAfterObject,
    endEvent,
    ConnectionType.LEFT_RIGHT
  );
  return endEvent;
};

export const createEndEvent = (
  microflow: microflows.Microflow,
  x: number
): microflows.EndEvent => {
  const end = microflows.EndEvent.createIn(microflow.objectCollection);
  end.relativeMiddlePoint = { x: x, y: 100 };
  return end;
};

const createMicroflowAction = (
  microflow: microflows.Microflow,
  x: number,
  widthFactor: number
): microflows.ActionActivity => {
  const actionActivity = microflows.ActionActivity.createIn(
    microflow.objectCollection
  );
  actionActivity.relativeMiddlePoint = { x: x, y: 100 };
  actionActivity.size.width = actionActivity.size.width * widthFactor;
  return actionActivity;
};

export const createAndAttachCreateAction = (
  microflow: microflows.Microflow,
  entity: domainmodels.Entity,
  attachAfterObject: microflows.MicroflowObject
): microflows.ActionActivity => {
  const actionActivity = createCreateAction(microflow, entity, attachAfterObject.relativeMiddlePoint.x + 140);
  connectMicroflowActions(
    microflow,
    attachAfterObject,
    actionActivity,
    ConnectionType.LEFT_RIGHT
  );
  return actionActivity;
};

const createCreateAction = (
  microflow: microflows.Microflow,
  entity: domainmodels.Entity,
  x: number
): microflows.ActionActivity => {
  const actionActivity = createMicroflowAction(microflow, x, 1);
  const createObject = microflows.CreateObjectAction.createIn(actionActivity);
  createObject.entity = entity;
  createObject.outputVariableName = `New${entity.name}`;
  createObject.structureTypeName = entity.name;
  return actionActivity;
};

export const createAndAttachDeleteAction = (
  microflow: microflows.Microflow,
  variableToDelete: string,
  attachAfterObject: microflows.MicroflowObject
): microflows.ActionActivity => {
  const actionActivity = createDeleteAction(microflow, variableToDelete, attachAfterObject.relativeMiddlePoint.x + 140);
  connectMicroflowActions(
    microflow,
    attachAfterObject,
    actionActivity,
    ConnectionType.LEFT_RIGHT
  );
  return actionActivity;
};

const createDeleteAction = (
  microflow: microflows.Microflow,
  variableToDelete: string,
  x: number
): microflows.ActionActivity => {
  const actionActivity = createMicroflowAction(microflow, x, 1);
  const DeleteObject = microflows.DeleteAction.createIn(actionActivity);
  DeleteObject.refreshInClient = true;
  DeleteObject.deleteVariableName = variableToDelete;
  return actionActivity;
};

export const createAndAttachCommitAction = (
  microflow: microflows.Microflow,
  variableToDelete: string,
  attachAfterObject: microflows.MicroflowObject
): microflows.ActionActivity => {
  const actionActivity = createCommitAction(microflow, variableToDelete, attachAfterObject.relativeMiddlePoint.x + 140);
  connectMicroflowActions(
    microflow,
    attachAfterObject,
    actionActivity,
    ConnectionType.LEFT_RIGHT
  );
  return actionActivity;
};

const createCommitAction = (
  microflow: microflows.Microflow,
  variableToCommit: string,
  x: number
): microflows.ActionActivity => {
  const actionActivity = createMicroflowAction(microflow, x, 1);
  const CommitObject = microflows.CommitAction.createIn(actionActivity);
  CommitObject.refreshInClient = true;
  CommitObject.commitVariableName = variableToCommit;
  return actionActivity;
};


export function connectMicroflowActions(
  microflow: microflows.Microflow,
  start: microflows.MicroflowObject,
  end: microflows.MicroflowObject,
  connectionType: ConnectionType
): microflows.SequenceFlow {
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
  return flow;
}

export enum ConnectionType {
  TOP_BOTTOM,
  LEFT_RIGHT,
}