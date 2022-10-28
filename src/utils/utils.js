"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrCreateDefaultCreateMicroflow = exports.createDefaultCommitMicroflow = exports.createDefaultDeleteMicroflow = exports.getOrCreateAttribute = exports.getOrCreateEntity = exports.getOrCreateFolder = exports.getOrCreateDomainModel = void 0;
const mendixmodelsdk_1 = require("mendixmodelsdk");
const microflowUtils_1 = require("./microflowUtils");
const AttributeType_1 = require("../types/AttributeType");
/**
 * Get or creates a Domainmodel including Module
 * @param model Model in which the module needs to be obtained or created
 * @param moduleName Name of the module
 * @returns DomainModel object
 */
const getOrCreateDomainModel = async (model, moduleName) => {
    const existingDomainModelInterface = model
        .allDomainModels()
        .find((dmi) => dmi.containerAsModule.name == moduleName);
    const domainModelInterface = existingDomainModelInterface ||
        createDomainModelInterface(model, moduleName);
    return await domainModelInterface.load();
};
exports.getOrCreateDomainModel = getOrCreateDomainModel;
/**
 * Creates a domainmodelinterface that can be loaded to obtain a domain model object
 * @param model Model in with the domainmodel
 * @param moduleName Name of the module to create
 * @returns domainModels.IDomainmodel, DomainmodelInterface
 */
const createDomainModelInterface = (model, moduleName) => {
    const project = model.allProjects()[0];
    const module = mendixmodelsdk_1.projects.Module.createIn(project);
    module.name = moduleName;
    mendixmodelsdk_1.domainmodels.DomainModel.createIn(module);
    mendixmodelsdk_1.security.ModuleSecurity.createIn(module);
    return module.domainModel;
};
/**
 * Get or creates a folder
 * @param location Required: Parent folder for the new folder
 * @param name Required: Name of the folder to create
 * @returns New folder
 */
const getOrCreateFolder = (location, name) => {
    const existingFolder = location.folders.find((folder) => folder.name === name);
    return existingFolder || createFolder(location, name);
};
exports.getOrCreateFolder = getOrCreateFolder;
/**
 * Creates a folder
 * @param location Required: Parent folder for the new folder
 * @param name Required: Name of the folder to create
 * @returns New folder
 */
const createFolder = (location, name) => {
    const folder = mendixmodelsdk_1.projects.Folder.createIn(location);
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
const getOrCreateEntity = (domainModel, entityName, x, y, isPersistable, documentation) => {
    const existingEntity = domainModel.entities.filter((dm) => dm.name === entityName)[0];
    if (existingEntity)
        return existingEntity;
    return createEntity(domainModel, entityName, x, y, isPersistable, documentation);
};
exports.getOrCreateEntity = getOrCreateEntity;
/**
 * Creates an entity
 * @param domainModel Required: Module for the entity
 * @param entityName Required: Name of the entity
 * @param x Required: x-coordinate on the domainmodel canvas
 * @param y Required: y-coordinate on the domainmodel canvas
 * @param documentation Documentation on entity level
 * @returns domainmodels.Entity. The created entity object
 */
const createEntity = (domainModel, entityName, x, y, isPersistable, documentation) => {
    const newEntity = mendixmodelsdk_1.domainmodels.Entity.createIn(domainModel);
    newEntity.name = entityName;
    newEntity.documentation =
        documentation ||
            `This is default documentation for entity ${newEntity.name}.`;
    newEntity.location = { x: x, y: y };
    const Generalization = mendixmodelsdk_1.domainmodels.NoGeneralization.createIn(newEntity);
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
const getOrCreateAttribute = (Entity, attributeName, attributeType, length, defaultValue, documentation) => {
    const ExistingAttribute = Entity.attributes.find((at) => at.name === attributeName);
    if (ExistingAttribute)
        return ExistingAttribute;
    return createAttribute(Entity, attributeName, attributeType, length, defaultValue, documentation);
};
exports.getOrCreateAttribute = getOrCreateAttribute;
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
const createAttribute = (Entity, attributeName, attributeType, length, defaultValue, documentation) => {
    const NewAttribute = mendixmodelsdk_1.domainmodels.Attribute.createIn(Entity);
    const type = attributeType || AttributeType_1.PrimitiveType.STRING;
    NewAttribute.name = attributeName;
    NewAttribute.documentation =
        documentation ||
            `This is default documentation for ${attributeName} on ${Entity.name}`;
    switch (type) {
        case AttributeType_1.PrimitiveType.BINARY:
            mendixmodelsdk_1.domainmodels.BinaryAttributeType.createInAttributeUnderType(NewAttribute);
            break;
        case AttributeType_1.PrimitiveType.BOOLEAN:
            mendixmodelsdk_1.domainmodels.BooleanAttributeType.createInAttributeUnderType(NewAttribute);
            const defaultBooleanValue = mendixmodelsdk_1.domainmodels.StoredValue.createIn(NewAttribute);
            defaultBooleanValue.defaultValue = defaultValue || "false";
            break;
        case AttributeType_1.PrimitiveType.DATE || AttributeType_1.PrimitiveType.DATE_TIME:
            mendixmodelsdk_1.domainmodels.DateTimeAttributeType.createInAttributeUnderType(NewAttribute);
            break;
        case AttributeType_1.PrimitiveType.DECIMAL:
            mendixmodelsdk_1.domainmodels.DecimalAttributeType.createInAttributeUnderType(NewAttribute);
            break;
        case AttributeType_1.PrimitiveType.INTEGER:
            mendixmodelsdk_1.domainmodels.IntegerAttributeType.createInAttributeUnderType(NewAttribute);
            break;
        case AttributeType_1.PrimitiveType.LONG:
            mendixmodelsdk_1.domainmodels.LongAttributeType.createInAttributeUnderType(NewAttribute);
            break;
        case AttributeType_1.PrimitiveType.STRING:
            const Attr = mendixmodelsdk_1.domainmodels.StringAttributeType.createInAttributeUnderType(NewAttribute);
            if (length)
                Attr.length = length;
            else
                Attr.length = 200;
            break;
        default:
            throw Error(`Cannot create add [${NewAttribute.name}] with type [${NewAttribute.type}] for entity [${Entity.name}] to mapping, since this type is not yet supported.`);
    }
    return NewAttribute;
};
/**  //TO DO create getOrCreateDefaultDeleteMicroflow, check existence in module.
 * Creates a default delete microflow
 * @param entity Type of the object that needs to be deleted in the microflow
 * @param folder Folder in which the microflow should reside
 * @returns EntityName_Delete microflow
 */
const createDefaultDeleteMicroflow = (entity, folder) => {
    const name = `${entity.name}_Delete`;
    folder.documents;
    const microflow = (0, microflowUtils_1.createMicroflow)(folder, name);
    const inputParam = (0, microflowUtils_1.createInputParameter)(microflow, entity, `${entity.name}_ToDelete`, "input parameter to delete");
    const startEvent = (0, microflowUtils_1.createStartEvent)(microflow);
    const deleteActivity = (0, microflowUtils_1.createAndAttachDeleteAction)(microflow, inputParam.name, startEvent);
    (0, microflowUtils_1.createAndAttachEndEvent)(microflow, deleteActivity);
    return microflow;
};
exports.createDefaultDeleteMicroflow = createDefaultDeleteMicroflow;
/** //TO DO create getOrCreateDefaultCommitMicroflow, check existence in module.
 * Creates a default Commit microflow
 * @param entity Type of the object that needs to be committed in the microflow
 * @param folder Folder in which the microflow should reside
 * @returns EntityName_Commit microflow
 */
const createDefaultCommitMicroflow = (entity, folder) => {
    const microflow = (0, microflowUtils_1.createMicroflow)(folder, `${entity.name}_Commit`);
    const inputParam = (0, microflowUtils_1.createInputParameter)(microflow, entity, `${entity.name}_ToCommit`, "input parameter to commit");
    const startEvent = (0, microflowUtils_1.createStartEvent)(microflow);
    const deleteActivity = (0, microflowUtils_1.createAndAttachCommitAction)(microflow, inputParam.name, startEvent);
    (0, microflowUtils_1.createAndAttachEndEvent)(microflow, deleteActivity);
    return microflow;
};
exports.createDefaultCommitMicroflow = createDefaultCommitMicroflow;
/** //To Do check for existence in module instead of in folder.
 * Get or creates a default Create microflow
 * @param entity Type of the object that needs to be created in the microflow
 * @param folder Folder in which the microflow should reside
 * @returns EntityName_Create microflow
 */
const getOrCreateDefaultCreateMicroflow = (entity, folder) => {
    const microflowName = `${entity.name}_Create`;
    const existingMicroflow = folder.documents
        .filter((doc) => doc.name === microflowName)
        .find((mf) => mf instanceof mendixmodelsdk_1.microflows.Microflow);
    return (existingMicroflow ||
        createDefaultCreateMicroflow(entity, microflowName, folder));
};
exports.getOrCreateDefaultCreateMicroflow = getOrCreateDefaultCreateMicroflow;
/**
 * Creates a default Create microflow
 * @param entity Type of the object that needs to be created in the microflow
 * @param folder Folder in which the microflow should reside
 * @returns EntityName_Create microflow
 */
const createDefaultCreateMicroflow = (entity, microflowName, folder) => {
    const microflow = (0, microflowUtils_1.createMicroflow)(folder, microflowName);
    const startEvent = (0, microflowUtils_1.createStartEvent)(microflow);
    const createActivity = (0, microflowUtils_1.createAndAttachCreateAction)(microflow, entity, startEvent);
    const endEvent = (0, microflowUtils_1.createAndAttachEndEvent)(microflow, createActivity);
    endEvent.returnValue = "$New" + entity.name;
    mendixmodelsdk_1.datatypes.ObjectType.createInMicroflowBaseUnderMicroflowReturnType(microflow).entity = entity;
    return microflow;
};
