import {
  domainmodels,
  EnumProperty,
  IModel,
  microflows,
  projects,
  security,
} from "mendixmodelsdk";
import { MendixPlatformClient } from "mendixplatformsdk";
import input from "../input.json";
import { PrimitiveType } from "../types/AttributeType";

export const getOrCreateDomainModel = async (
  model: IModel
): Promise<domainmodels.DomainModel> => {
  return await getDomainModelInterface(model).load();
};

const getDomainModelInterface = (model: IModel): domainmodels.IDomainModel => {
  const existingDomainModelInterface = model
    .allDomainModels()
    .filter((dm) => dm.containerAsModule.name === input.Module)[0];
  if (existingDomainModelInterface) return existingDomainModelInterface;
  else return createDomainModelInterface(model);
};

const createDomainModelInterface = (
  model: IModel
): domainmodels.IDomainModel => {
  const project = model.allProjects()[0];
  const module = projects.Module.createIn(project);
  module.name = input.Module;
  domainmodels.DomainModel.createIn(module);
  security.ModuleSecurity.createIn(module);
  return module.domainModel;
};

export const getOrCreateFolder = (
  location: projects.IFolderBase,
  name: string
) => {
  const existingFolder = location.folders.filter(
    (folder) => folder.name === name
  )[0];
  if (existingFolder) return existingFolder;
  else return createFolder(location, name);
};

const createFolder = (location: projects.IFolderBase, name: string) => {
  const folder = projects.Folder.createIn(location);
  folder.name = name;

  return folder;
};

export const getOrCreateEntity = (
  domainModel: domainmodels.DomainModel,
  entityName: string,
  x: number,
  y: number
) => {
  const existingEntity = domainModel.entities.filter(
    (dm) => dm.name === entityName
  )[0];
  if (existingEntity) return existingEntity;
  return createEntity(domainModel, entityName, x, y);
};

const createEntity = (
  domainModel: domainmodels.DomainModel,
  entityName: string,
  x: number,
  y: number
) => {
  const newEntity = domainmodels.Entity.createIn(domainModel);
  newEntity.name = entityName;
  newEntity.location = { x: x, y: y };
  return newEntity;
};
export const getOrCreateAttribute = (
  Entity: domainmodels.Entity,
  attributeName: string,
  attributeType?: PrimitiveType,
  length?: number
) => {
  const ExistingAttribute = Entity.attributes.filter(
    (dm) => dm.name === attributeName
  )[0];
  if (ExistingAttribute) return ExistingAttribute;
  return createAttribute(Entity, attributeName, attributeType, length);
};

const createAttribute = (
  Entity: domainmodels.Entity,
  attributeName: string,
  attributeType?: PrimitiveType,
  length?: number
) => {
  const NewAttribute = domainmodels.Attribute.createIn(Entity);
  const type = attributeType || PrimitiveType.STRING;
  NewAttribute.name = attributeName;
  switch (type) {
    case PrimitiveType.BINARY:
      domainmodels.BinaryAttributeType.createInAttributeUnderType(NewAttribute);
      break;
    case PrimitiveType.BOOLEAN:
      domainmodels.BooleanAttributeType.createInAttributeUnderType(
        NewAttribute
      );
      const defaultBooleanValue = domainmodels.StoredValue.createIn(NewAttribute);
      defaultBooleanValue.defaultValue = "true";
      break;
    case PrimitiveType.DATE || PrimitiveType.DATE_TIME:
      domainmodels.DateTimeAttributeType.createInAttributeUnderType(
        NewAttribute
      );
      break;
    case PrimitiveType.DECIMAL:
      domainmodels.DecimalAttributeType.createInAttributeUnderType(
        NewAttribute
      );
      break;
    case PrimitiveType.INTEGER:
      domainmodels.IntegerAttributeType.createInAttributeUnderType(
        NewAttribute
      );
      break;
    case PrimitiveType.LONG:
      domainmodels.LongAttributeType.createInAttributeUnderType(NewAttribute);
      break;
    case PrimitiveType.STRING:
      const Attr =
        domainmodels.StringAttributeType.createInAttributeUnderType(
          NewAttribute
        );
      if (length) Attr.length = length;
      else Attr.length = 200;
      break;
    default:
      throw Error(
        `Cannot create add [${NewAttribute.name}] with type [${NewAttribute.type}] for entity [${Entity.name}] to mapping, since this type is not yet supported.`
      );
  }
  return NewAttribute;
};

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

export const createCreateAction = (
  microflow: microflows.Microflow,
  entity: domainmodels.Entity
): microflows.ActionActivity => {
  const actionActivity = createMicroflowAction(microflow, 140, 1);
  const createObject = microflows.CreateObjectAction.createIn(actionActivity);
  createObject.entity = entity;
  createObject.outputVariableName = `New${entity.name}`;
  createObject.structureTypeName = entity.name;
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
