import {
  datatypes,
  domainmodels,
  IModel,
  projects,
  security,
} from "mendixmodelsdk";
import {
  createAndAttachCommitAction,
  createAndAttachCreateAction,
  createAndAttachDeleteAction,
  createAndAttachEndEvent,
  createInputParameter,
  createMicroflow,
  createStartEvent,
} from "./microflowUtils";
import { PrimitiveType } from "../types/AttributeType";

export const getOrCreateDomainModel = async (
  model: IModel,
  moduleName: string
): Promise<domainmodels.DomainModel> => {
  const existingDomainModelInterface = model
    .allDomainModels()
    .find((dmi) => dmi.containerAsModule.name == moduleName);
  const domainModelInterface =
    existingDomainModelInterface ||
    createDomainModelInterface(model, moduleName);
  return await domainModelInterface.load();
};

const createDomainModelInterface = (
  model: IModel,
  moduleName: string
): domainmodels.IDomainModel => {
  const project = model.allProjects()[0];
  console.log(model.allProjects());
  const module = projects.Module.createIn(project);
  module.name = moduleName;
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
  y: number,
  documentation?: string
) => {
  const existingEntity = domainModel.entities.filter(
    (dm) => dm.name === entityName
  )[0];
  if (existingEntity) return existingEntity;
  return createEntity(domainModel, entityName, x, y, documentation);
};

const createEntity = (
  domainModel: domainmodels.DomainModel, //Required: On which Module do you need the entity.
  entityName: string, //Required: Name of the Entity
  x: number,
  y: number,
  documentation?: string
) => {
  const newEntity = domainmodels.Entity.createIn(domainModel);
  newEntity.name = entityName;
  newEntity.documentation =
    documentation ||
    `This is default documentation for entity ${newEntity.name}.`;
  newEntity.location = { x: x, y: y };
  return newEntity;
};

/**
 * Get or creates an attribute.
 * @param Entity Required: On which Entity do you need the attribute.
 * @param attributeName Required: Name of the attribute
 * @param attributeType Optional: if empty set to primitiveType.STRING.
 * @param length is only used for PrimitiveType.STRING, if empty set to 200.
 * @param defaultValue is only used for PrimitiveType.BOOLEAN, if empty set to false.
 * @param documentation Optional: will be added to the Attribute documentation.
 * @returns domainmodels.attribute. Created attribute
 */
export const getOrCreateAttribute = (
  Entity: domainmodels.Entity,
  attributeName: string,
  attributeType?: PrimitiveType,
  length?: number,
  defaultValue?: string,
  documentation?: string
): domainmodels.Attribute => {
  const ExistingAttribute = Entity.attributes.filter(
    (dm) => dm.name === attributeName
  )[0];
  if (ExistingAttribute) return ExistingAttribute;
  return createAttribute(
    Entity,
    attributeName,
    attributeType,
    length,
    defaultValue,
    documentation
  );
};

const createAttribute = (
  Entity: domainmodels.Entity, //Required: On which Entity do you need the attribute.
  attributeName: string, //Required: Name of the attribute
  attributeType?: PrimitiveType, //Optional: if empty set to primitiveType.STRING.
  length?: number, //is only used for PrimitiveType.STRING, if empty set to 200.
  defaultValue?: string, //is only used for PrimitiveType.BOOLEAN, if empty set to false.
  documentation?: string //Optional: will be added to the Attribute documentation.
) => {
  const NewAttribute = domainmodels.Attribute.createIn(Entity);
  const type = attributeType || PrimitiveType.STRING;
  NewAttribute.name = attributeName;
  NewAttribute.documentation =
    documentation ||
    `This is default documentation for ${attributeName} on ${Entity.name}`;
  switch (type) {
    case PrimitiveType.BINARY:
      domainmodels.BinaryAttributeType.createInAttributeUnderType(NewAttribute);
      break;
    case PrimitiveType.BOOLEAN:
      domainmodels.BooleanAttributeType.createInAttributeUnderType(
        NewAttribute
      );
      const defaultBooleanValue =
        domainmodels.StoredValue.createIn(NewAttribute);
      defaultBooleanValue.defaultValue = defaultValue || "false";
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
export const createDefaultDeleteMicroflow = (
  //Needs input parameter
  entity: domainmodels.Entity, //Entity to delete
  folder: projects.IFolder //Ideally this should be optional and the module should be required to make sure that we have unique microflow names.
) => {
  const name = `${entity.name}_Delete`;
  folder.documents;
  const microflow = createMicroflow(folder, `${entity.name}_Delete`);
  const inputParam = createInputParameter(
    microflow,
    entity,
    `${entity.name}_ToDelete`,
    "input parameter to delete"
  );
  const startEvent = createStartEvent(microflow);
  const deleteActivity = createAndAttachDeleteAction(
    microflow,
    inputParam.name,
    startEvent
  );
  createAndAttachEndEvent(microflow, deleteActivity);
};

export const createDefaultCommitMicroflow = (
  //Needs input parameter
  entity: domainmodels.Entity, //Entity to delete
  folder: projects.IFolder //Ideally this should be optional and the module should be required to make sure that we have unique microflow names.
) => {
  const microflow = createMicroflow(folder, `${entity.name}_Commit`);
  const inputParam = createInputParameter(
    microflow,
    entity,
    `${entity.name}_ToCommit`,
    "input parameter to commit"
  );
  const startEvent = createStartEvent(microflow);
  const deleteActivity = createAndAttachCommitAction(
    microflow,
    inputParam.name,
    startEvent
  );
  createAndAttachEndEvent(microflow, deleteActivity);
};

export const getOrCreateDefaultCreateMicroflow = (
  entity: domainmodels.Entity, //Entity to create
  folder: projects.IFolder //Ideally this should be optional and the module should be required to make sure that we have unique microflow names.
) => {
  const microflowName = `${entity.name}_Create`;
  const existingMicroflow = folder.documents.find(
    (dm) => dm.name === microflowName
  );
  return (
    existingMicroflow ||
    createDefaultCreateMicroflow(entity, microflowName, folder)
  );
};

const createDefaultCreateMicroflow = (
  entity: domainmodels.Entity, //Entity to create
  microflowName: string,
  folder: projects.IFolder //Ideally this should be optional and the module should be required to make sure that we have unique microflow names.
) => {
  const microflow = createMicroflow(folder, microflowName);
  const startEvent = createStartEvent(microflow);
  const createActivity = createAndAttachCreateAction(
    microflow,
    entity,
    startEvent
  );
  const endEvent = createAndAttachEndEvent(microflow, createActivity);
  endEvent.returnValue = "$New" + entity.name;
  datatypes.ObjectType.createInMicroflowBaseUnderMicroflowReturnType(
    microflow
  ).entity = entity;
};
