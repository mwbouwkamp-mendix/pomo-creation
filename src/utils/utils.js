"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionType = exports.connectMicroflowActions = exports.createCreateAction = exports.createEndEvent = exports.createStartEvent = exports.createMicroflow = exports.getOrCreateAttribute = exports.getOrCreateEntity = exports.getOrCreateFolder = exports.getOrCreateDomainModel = void 0;
const mendixmodelsdk_1 = require("mendixmodelsdk");
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
const getOrCreateEntity = (domainModel, entityName, x, y) => {
    const existingEntity = domainModel.entities.filter((dm) => dm.name === entityName)[0];
    if (existingEntity)
        return existingEntity;
    return createEntity(domainModel, entityName, x, y);
};
exports.getOrCreateEntity = getOrCreateEntity;
const createEntity = (domainModel, entityName, x, y) => {
    const newEntity = mendixmodelsdk_1.domainmodels.Entity.createIn(domainModel);
    newEntity.name = entityName;
    newEntity.location = { x: x, y: y };
    return newEntity;
};
const getOrCreateAttribute = (Entity, attributeName, attributeType, length) => {
    const ExistingAttribute = Entity.attributes.filter((dm) => dm.name === attributeName)[0];
    if (ExistingAttribute)
        return ExistingAttribute;
    return createAttribute(Entity, attributeName, attributeType, length);
};
exports.getOrCreateAttribute = getOrCreateAttribute;
const createAttribute = (Entity, attributeName, attributeType, length) => {
    const NewAttribute = mendixmodelsdk_1.domainmodels.Attribute.createIn(Entity);
    const type = attributeType || AttributeType_1.PrimitiveType.STRING;
    NewAttribute.name = attributeName;
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
const createMicroflow = (location, name) => {
    const microflow = mendixmodelsdk_1.microflows.Microflow.createIn(location);
    microflow.name = name;
    return microflow;
};
exports.createMicroflow = createMicroflow;
const createStartEvent = (microflow) => {
    const start = mendixmodelsdk_1.microflows.StartEvent.createIn(microflow.objectCollection);
    start.relativeMiddlePoint = { x: 0, y: 100 };
    return start;
};
exports.createStartEvent = createStartEvent;
const createEndEvent = (microflow, x) => {
    const end = mendixmodelsdk_1.microflows.EndEvent.createIn(microflow.objectCollection);
    end.relativeMiddlePoint = { x: x, y: 100 };
    return end;
};
exports.createEndEvent = createEndEvent;
const createMicroflowAction = (microflow, x, widthFactor) => {
    const actionActivity = mendixmodelsdk_1.microflows.ActionActivity.createIn(microflow.objectCollection);
    actionActivity.relativeMiddlePoint = { x: x, y: 100 };
    actionActivity.size.width = actionActivity.size.width * widthFactor;
    return actionActivity;
};
const createCreateAction = (microflow, entity) => {
    const actionActivity = createMicroflowAction(microflow, 140, 1);
    const createObject = mendixmodelsdk_1.microflows.CreateObjectAction.createIn(actionActivity);
    createObject.entity = entity;
    createObject.outputVariableName = `New${entity.name}`;
    createObject.structureTypeName = entity.name;
    return actionActivity;
};
exports.createCreateAction = createCreateAction;
function connectMicroflowActions(microflow, start, end, connectionType) {
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
    return flow;
}
exports.connectMicroflowActions = connectMicroflowActions;
var ConnectionType;
(function (ConnectionType) {
    ConnectionType[ConnectionType["TOP_BOTTOM"] = 0] = "TOP_BOTTOM";
    ConnectionType[ConnectionType["LEFT_RIGHT"] = 1] = "LEFT_RIGHT";
})(ConnectionType = exports.ConnectionType || (exports.ConnectionType = {}));
