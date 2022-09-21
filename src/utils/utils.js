"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDefaultCreateMicroflow = exports.getOrCreateAttribute = exports.getOrCreateEntity = exports.getOrCreateFolder = exports.getOrCreateDomainModel = void 0;
const mendixmodelsdk_1 = require("mendixmodelsdk");
const microflowUtils_1 = require("./microflowUtils");
const input_json_1 = __importDefault(require("../input.json"));
const AttributeType_1 = require("../types/AttributeType");
const getOrCreateDomainModel = async (model) => {
    return await getDomainModelInterface(model).load();
};
exports.getOrCreateDomainModel = getOrCreateDomainModel;
const getDomainModelInterface = (model) => {
    const existingDomainModelInterface = model
        .allDomainModels()
        .filter((dm) => dm.containerAsModule.name === input_json_1.default.Module)[0];
    if (existingDomainModelInterface)
        return existingDomainModelInterface;
    else
        return createDomainModelInterface(model);
};
const createDomainModelInterface = (model) => {
    const project = model.allProjects()[0];
    const module = mendixmodelsdk_1.projects.Module.createIn(project);
    module.name = input_json_1.default.Module;
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
    newEntity.documentation = documentation || `This is default documentation for entity ${newEntity.name}.`;
    newEntity.location = { x: x, y: y };
    return newEntity;
};
const getOrCreateAttribute = (Entity, //Required: On which Entity do you need the attribute.
attributeName, //Required: Name of the attribute
attributeType, //Optional: if empty set to primitiveType.STRING.
length, //is only used for PrimitiveType.STRING, if empty set to 200.
defaultValue, //is only used for PrimitiveType.BOOLEAN, if empty set to false.
documentation //Optional: will be added to the Attribute documentation.
) => {
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
    NewAttribute.documentation = documentation || `This is default documentation for ${attributeName} on ${Entity.name}`;
    switch (type) {
        case AttributeType_1.PrimitiveType.BINARY:
            mendixmodelsdk_1.domainmodels.BinaryAttributeType.createInAttributeUnderType(NewAttribute);
            break;
        case AttributeType_1.PrimitiveType.BOOLEAN:
            mendixmodelsdk_1.domainmodels.BooleanAttributeType.createInAttributeUnderType(NewAttribute);
            const defaultBooleanValue = mendixmodelsdk_1.domainmodels.StoredValue.createIn(NewAttribute);
            defaultBooleanValue.defaultValue = "true";
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
const createDefaultCreateMicroflow = (entity, folder) => {
    const microflow = (0, microflowUtils_1.createMicroflow)(folder, `${entity.name}_Create`);
    const startEvent = (0, microflowUtils_1.createStartEvent)(microflow);
    const createActivity = (0, microflowUtils_1.createCreateAction)(microflow, entity);
    const endEvent = (0, microflowUtils_1.createEndEvent)(microflow, 280);
    endEvent.returnValue = "$New" + entity.name;
    mendixmodelsdk_1.datatypes.ObjectType.createInMicroflowBaseUnderMicroflowReturnType(microflow).entity = entity;
    (0, microflowUtils_1.connectMicroflowActions)(microflow, startEvent, createActivity, microflowUtils_1.ConnectionType.LEFT_RIGHT);
    (0, microflowUtils_1.connectMicroflowActions)(microflow, createActivity, endEvent, microflowUtils_1.ConnectionType.LEFT_RIGHT);
};
exports.createDefaultCreateMicroflow = createDefaultCreateMicroflow;
