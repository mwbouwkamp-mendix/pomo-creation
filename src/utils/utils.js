"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrCreateDefaultCreateMicroflow = exports.createDefaultCommitMicroflow = exports.createDefaultDeleteMicroflow = exports.getOrCreateAttribute = exports.getOrCreateEntity = exports.getOrCreateFolder = exports.getOrCreateDomainModel = void 0;
const mendixmodelsdk_1 = require("mendixmodelsdk");
const microflowUtils_1 = require("./microflowUtils");
const AttributeType_1 = require("../types/AttributeType");
const getOrCreateDomainModel = async (model, moduleName) => {
    const existingDomainModelInterface = model
        .allDomainModels()
        .find((dmi) => dmi.containerAsModule.name == moduleName);
    const domainModelInterface = existingDomainModelInterface ||
        createDomainModelInterface(model, moduleName);
    return await domainModelInterface.load();
};
exports.getOrCreateDomainModel = getOrCreateDomainModel;
const createDomainModelInterface = (model, moduleName) => {
    const project = model.allProjects()[0];
    console.log(model.allProjects());
    const module = mendixmodelsdk_1.projects.Module.createIn(project);
    module.name = moduleName;
    mendixmodelsdk_1.domainmodels.DomainModel.createIn(module);
    mendixmodelsdk_1.security.ModuleSecurity.createIn(module);
    return module.domainModel;
};
const getOrCreateFolder = (location, name) => {
    const existingFolder = location.folders.filter((folder) => folder.name === name)[0];
    if (existingFolder)
        return existingFolder;
    else
        return createFolder(location, name);
};
exports.getOrCreateFolder = getOrCreateFolder;
const createFolder = (location, name) => {
    const folder = mendixmodelsdk_1.projects.Folder.createIn(location);
    folder.name = name;
    return folder;
};
const getOrCreateEntity = (domainModel, entityName, x, y, documentation) => {
    const existingEntity = domainModel.entities.filter((dm) => dm.name === entityName)[0];
    if (existingEntity)
        return existingEntity;
    return createEntity(domainModel, entityName, x, y, documentation);
};
exports.getOrCreateEntity = getOrCreateEntity;
const createEntity = (domainModel, //Required: On which Module do you need the entity.
entityName, //Required: Name of the Entity
x, y, documentation) => {
    const newEntity = mendixmodelsdk_1.domainmodels.Entity.createIn(domainModel);
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
const getOrCreateAttribute = (Entity, attributeName, attributeType, length, defaultValue, documentation) => {
    const ExistingAttribute = Entity.attributes.filter((dm) => dm.name === attributeName)[0];
    if (ExistingAttribute)
        return ExistingAttribute;
    return createAttribute(Entity, attributeName, attributeType, length, defaultValue, documentation);
};
exports.getOrCreateAttribute = getOrCreateAttribute;
const createAttribute = (Entity, //Required: On which Entity do you need the attribute.
attributeName, //Required: Name of the attribute
attributeType, //Optional: if empty set to primitiveType.STRING.
length, //is only used for PrimitiveType.STRING, if empty set to 200.
defaultValue, //is only used for PrimitiveType.BOOLEAN, if empty set to false.
documentation //Optional: will be added to the Attribute documentation.
) => {
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
const createDefaultDeleteMicroflow = (
//Needs input parameter
entity, //Entity to delete
folder //Ideally this should be optional and the module should be required to make sure that we have unique microflow names.
) => {
    const name = `${entity.name}_Delete`;
    folder.documents;
    const microflow = (0, microflowUtils_1.createMicroflow)(folder, `${entity.name}_Delete`);
    const inputParam = (0, microflowUtils_1.createInputParameter)(microflow, entity, `${entity.name}_ToDelete`, "input parameter to delete");
    const startEvent = (0, microflowUtils_1.createStartEvent)(microflow);
    const deleteActivity = (0, microflowUtils_1.createAndAttachDeleteAction)(microflow, inputParam.name, startEvent);
    (0, microflowUtils_1.createAndAttachEndEvent)(microflow, deleteActivity);
};
exports.createDefaultDeleteMicroflow = createDefaultDeleteMicroflow;
const createDefaultCommitMicroflow = (
//Needs input parameter
entity, //Entity to delete
folder //Ideally this should be optional and the module should be required to make sure that we have unique microflow names.
) => {
    const microflow = (0, microflowUtils_1.createMicroflow)(folder, `${entity.name}_Commit`);
    const inputParam = (0, microflowUtils_1.createInputParameter)(microflow, entity, `${entity.name}_ToCommit`, "input parameter to commit");
    const startEvent = (0, microflowUtils_1.createStartEvent)(microflow);
    const deleteActivity = (0, microflowUtils_1.createAndAttachCommitAction)(microflow, inputParam.name, startEvent);
    (0, microflowUtils_1.createAndAttachEndEvent)(microflow, deleteActivity);
};
exports.createDefaultCommitMicroflow = createDefaultCommitMicroflow;
const getOrCreateDefaultCreateMicroflow = (entity, //Entity to create
folder //Ideally this should be optional and the module should be required to make sure that we have unique microflow names.
) => {
    const microflowName = `${entity.name}_Create`;
    const existingMicroflow = folder.documents.find((dm) => dm.name === microflowName);
    return (existingMicroflow ||
        createDefaultCreateMicroflow(entity, microflowName, folder));
};
exports.getOrCreateDefaultCreateMicroflow = getOrCreateDefaultCreateMicroflow;
const createDefaultCreateMicroflow = (entity, //Entity to create
microflowName, folder //Ideally this should be optional and the module should be required to make sure that we have unique microflow names.
) => {
    const microflow = (0, microflowUtils_1.createMicroflow)(folder, microflowName);
    const startEvent = (0, microflowUtils_1.createStartEvent)(microflow);
    const createActivity = (0, microflowUtils_1.createAndAttachCreateAction)(microflow, entity, startEvent);
    const endEvent = (0, microflowUtils_1.createAndAttachEndEvent)(microflow, createActivity);
    endEvent.returnValue = "$New" + entity.name;
    mendixmodelsdk_1.datatypes.ObjectType.createInMicroflowBaseUnderMicroflowReturnType(microflow).entity = entity;
};
