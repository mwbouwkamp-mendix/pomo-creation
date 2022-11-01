import {
  datatypes,
  domainmodels,
  IModel,
  microflows,
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

/**
 * Get or creates a Domainmodel including Module
 * @param model Model in which the module needs to be obtained or created
 * @param moduleName Name of the module
 * @returns DomainModel object
 */
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

/**
 * Creates a domainmodelinterface that can be loaded to obtain a domain model object
 * @param model Model in with the domainmodel
 * @param moduleName Name of the module to create
 * @returns domainModels.IDomainmodel, DomainmodelInterface
 */
const createDomainModelInterface = (
  model: IModel,
  moduleName: string
): domainmodels.IDomainModel => {
  const project = model.allProjects()[0];
  const module = projects.Module.createIn(project);
  module.name = moduleName;
  domainmodels.DomainModel.createIn(module);
  security.ModuleSecurity.createIn(module);
  return module.domainModel;
};

/**
 * Get or creates a folder
 * @param location Required: Parent folder for the new folder
 * @param name Required: Name of the folder to create
 * @returns New folder
 */
export const getOrCreateFolder = (
  location: projects.IFolderBase,
  name: string
): projects.Folder => {
  const existingFolder = location.folders.find(
    (folder) => folder.name === name
  ) as projects.Folder;
  return existingFolder || createFolder(location, name);
};

/**
 * Creates a folder
 * @param location Required: Parent folder for the new folder
 * @param name Required: Name of the folder to create
 * @returns New folder
 */
const createFolder = (
  location: projects.IFolderBase,
  name: string
): projects.Folder => {
  const folder = projects.Folder.createIn(location);
  folder.name = name;
  return folder;
};

/**
 * Get or creates an entity
 * @param domainModel Required: Module for the entity
 * @param entityName Required: Name of the entity
 * @param x Required: x-coordinate on the domainmodel canvas
 * @param y Required: y-coordinate on the domainmodel canvas
 * @param documentation Documentation on entity level
 * @returns domainmodels.Entity object.
 */
export const getOrCreateEntity = (
  domainModel: domainmodels.DomainModel,
  entityName: string,
  x: number,
  y: number,
  isPersistable: boolean,
  documentation?: string
): domainmodels.Entity => {
  const existingEntity = domainModel.entities.find(
    (ent) => ent.name === entityName
  );
  return (
    existingEntity ||
    createEntity(domainModel, entityName, x, y, isPersistable, documentation)
  );
};

/**
 * Creates an entity
 * @param domainModel Required: Module for the entity
 * @param entityName Required: Name of the entity
 * @param x Required: x-coordinate on the domainmodel canvas
 * @param y Required: y-coordinate on the domainmodel canvas
 * @param documentation Documentation on entity level
 * @returns domainmodels.Entity. The created entity object
 */
const createEntity = (
  domainModel: domainmodels.DomainModel,
  entityName: string,
  x: number,
  y: number,
  isPersistable?: boolean,
  documentation?: string
): domainmodels.Entity => {
  const newEntity = domainmodels.Entity.createIn(domainModel);
  newEntity.name = entityName;
  newEntity.documentation =
    documentation ||
    `This is default documentation for entity ${newEntity.name}.`;
  newEntity.location = { x, y };
  const Generalization = domainmodels.NoGeneralization.createIn(newEntity);
  Generalization.persistable = isPersistable || true;
  Generalization.hasChangedBy = false;
  Generalization.hasChangedDate = false;
  Generalization.hasCreatedDate = false;
  Generalization.hasOwner = false;
  return newEntity;
};

/**
 * Get or creates an attribute.
 * @param Entity Required: On which Entity do you need the attribute
 * @param attributeName Required: Name of the attribute
 * @param attributeType Optional: if empty set to primitiveType.STRING
 * @param length is only used for PrimitiveType.STRING, if empty set to 200
 * @param defaultValue is only used for PrimitiveType.BOOLEAN, if empty set to false
 * @param documentation Optional: will be added to the Attribute documentation
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
  const ExistingAttribute = Entity.attributes.find(
    (at) => at.name === attributeName
  );
  return (
    ExistingAttribute ||
    createAttribute(
      Entity,
      attributeName,
      attributeType,
      length,
      defaultValue,
      documentation
    )
  );
};

/**
 * Creates an attribute
 * @param Entity Required: On which Entity do you need the attribute
 * @param attributeName Required: Name of the attribute
 * @param attributeType Optional: if empty set to primitiveType.STRING
 * @param length is only used for PrimitiveType.STRING, if empty set to 200
 * @param defaultValue is only used for PrimitiveType.BOOLEAN, if empty set to false
 * @param documentation Optional: will be added to the Attribute documentation
 * @returns domainmodels.attribute. Created attribute
 */
const createAttribute = (
  Entity: domainmodels.Entity,
  attributeName: string,
  attributeType?: PrimitiveType,
  length?: number,
  defaultValue?: string,
  documentation?: string
): domainmodels.Attribute => {
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
      Attr.length = length || 200;
      break;
    default:
      throw Error(
        `Cannot create add [${NewAttribute.name}] with type [${NewAttribute.type}] for entity [${Entity.name}] to mapping, since this type is not yet supported.`
      );
  }
  return NewAttribute;
};

/**  //TO DO create getOrCreateDefaultDeleteMicroflow, check existence in module.
 * Creates a default delete microflow
 * @param entity Type of the object that needs to be deleted in the microflow
 * @param folder Folder in which the microflow should reside
 * @returns EntityName_Delete microflow
 */
export const createDefaultDeleteMicroflow = (
  entity: domainmodels.Entity,
  folder: projects.IFolder
): microflows.Microflow => {
  const name = `${entity.name}_Delete`;
  const microflow = createMicroflow(folder, name);
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
  return microflow;
};

/** //TO DO create getOrCreateDefaultCommitMicroflow, check existence in module.
 * Creates a default Commit microflow
 * @param entity Type of the object that needs to be committed in the microflow
 * @param folder Folder in which the microflow should reside
 * @returns EntityName_Commit microflow
 */
export const createDefaultCommitMicroflow = (
  entity: domainmodels.Entity,
  folder: projects.IFolder
): microflows.Microflow => {
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
  return microflow;
};

/** //To Do check for existence in module instead of in folder.
 * Get or creates a default Create microflow
 * @param entity Type of the object that needs to be created in the microflow
 * @param folder Folder in which the microflow should reside
 * @returns EntityName_Create microflow
 */
export const getOrCreateDefaultCreateMicroflow = (
  entity: domainmodels.Entity,
  folder: projects.IFolder
): microflows.Microflow => {
  const microflowName = `${entity.name}_Create`;
  const existingMicroflow = folder.documents
    .filter((doc) => doc.name === microflowName)
    .find((mf) => mf instanceof microflows.Microflow) as microflows.Microflow;
  return (
    existingMicroflow ||
    createDefaultCreateMicroflow(entity, microflowName, folder)
  );
};

/**
 * Creates a default Create microflow
 * @param entity Type of the object that needs to be created in the microflow
 * @param folder Folder in which the microflow should reside
 * @returns EntityName_Create microflow
 */
const createDefaultCreateMicroflow = (
  entity: domainmodels.Entity,
  microflowName: string,
  folder: projects.IFolder
): microflows.Microflow => {
  const microflow = createMicroflow(folder, microflowName);
  const startEvent = createStartEvent(microflow);
  const nameOfCreatedObject = `New${entity.name}`;
  const createActivity = createAndAttachCreateAction(
    microflow,
    entity,
    nameOfCreatedObject,
    startEvent
  );
  const endEvent = createAndAttachEndEvent(microflow, createActivity);
  endEvent.returnValue = nameOfCreatedObject;
  datatypes.ObjectType.createInMicroflowBaseUnderMicroflowReturnType(
    microflow
  ).entity = entity;
  return microflow;
};
