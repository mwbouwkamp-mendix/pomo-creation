"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mendixmodelsdk_1 = require("mendixmodelsdk");
const mendixplatformsdk_1 = require("mendixplatformsdk");
const input_json_1 = __importDefault(require("./input.json"));
const AttributeType_1 = require("./types/AttributeType");
const utils_1 = require("./utils/utils");
//import {Input} from './types/InputType'
async function main() {
    const client = new mendixplatformsdk_1.MendixPlatformClient();
    const app = client.getApp(input_json_1.default.AppId);
    const repo = app.getRepository();
    const workingCopy = await app.createTemporaryWorkingCopy(input_json_1.default.BranchName);
    const model = await workingCopy.openModel();
    const domainModel = await (0, utils_1.getOrCreateDomainModel)(model);
    const objectsFolder = (0, utils_1.getOrCreateFolder)(domainModel.containerAsModule, "objects");
    let x = 0;
    let y = 0;
    for (var ent of input_json_1.default.Entities) {
        const newEnt = (0, utils_1.getOrCreateEntity)(domainModel, ent.Name, x, y);
        x += 100;
        y += 100;
        (0, utils_1.getOrCreateAttribute)(newEnt, "Name");
        (0, utils_1.getOrCreateAttribute)(newEnt, "Description");
        (0, utils_1.getOrCreateAttribute)(newEnt, "Active", AttributeType_1.PrimitiveType.BOOLEAN);
        const entObjFolder = (0, utils_1.getOrCreateFolder)(objectsFolder, ent.Name);
        const microflow = (0, utils_1.createMicroflow)(entObjFolder, `${newEnt.name}_Create`);
        const startEvent = (0, utils_1.createStartEvent)(microflow);
        const createActivity = (0, utils_1.createCreateAction)(microflow, newEnt);
        const endEvent = (0, utils_1.createEndEvent)(microflow, 280);
        endEvent.returnValue = "$New" + newEnt.name;
        mendixmodelsdk_1.datatypes.ObjectType.createInMicroflowBaseUnderMicroflowReturnType(microflow).entity = newEnt;
        (0, utils_1.connectMicroflowActions)(microflow, startEvent, createActivity, utils_1.ConnectionType.LEFT_RIGHT);
        (0, utils_1.connectMicroflowActions)(microflow, createActivity, endEvent, utils_1.ConnectionType.LEFT_RIGHT);
    }
    await model.flushChanges();
    await workingCopy.commitToRepository(input_json_1.default.BranchName);
}
main().catch(console.error);
