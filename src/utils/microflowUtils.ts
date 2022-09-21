import { domainmodels, microflows, projects } from "mendixmodelsdk";

export const createMicroflow = (
  location: projects.IFolderBase,
  name: string
) => {
  const microflow = microflows.Microflow.createIn(location);
  microflow.name = name;
  return microflow;
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
  entity: domainmodels.Entity,
  attachAfterObject: microflows.MicroflowObject
): microflows.ActionActivity => {
  const actionActivity = createDeleteAction(microflow, entity, attachAfterObject.relativeMiddlePoint.x + 140);
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
  entity: domainmodels.Entity,
  x: number
): microflows.ActionActivity => {
  const actionActivity = createMicroflowAction(microflow, x, 1);
  const DeleteObject = microflows.DeleteAction.createIn(actionActivity);
  DeleteObject.refreshInClient = true;
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