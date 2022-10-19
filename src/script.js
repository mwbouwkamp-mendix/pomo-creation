"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mendixplatformsdk_1 = require("mendixplatformsdk");
const input_json_1 = __importDefault(require("./input.json"));
const AttributeType_1 = require("./types/AttributeType");
const utils_1 = require("./utils/utils");
//import {Input} from './types/InputType'
async function main() {
    const client = new mendixplatformsdk_1.MendixPlatformClient();
    const app = client.getApp(input_json_1.default.AppId);
    const repo = app.getRepository();
    console.log(await repo.getBranches());
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
        for (var att of ent.attributes) {
            try {
                (0, utils_1.getOrCreateAttribute)(newEnt, att.Name, AttributeType_1.PrimitiveType[att.Type]);
            }
            catch {
                (0, utils_1.getOrCreateAttribute)(newEnt, att.Name, AttributeType_1.PrimitiveType.STRING);
                att.Type = AttributeType_1.PrimitiveType.STRING;
            }
        }
        const entObjFolder = (0, utils_1.getOrCreateFolder)(objectsFolder, ent.Name);
        (0, utils_1.getOrCreateDefaultCreateMicroflow)(newEnt, entObjFolder);
        (0, utils_1.createDefaultDeleteMicroflow)(newEnt, entObjFolder);
        (0, utils_1.createDefaultCommitMicroflow)(newEnt, entObjFolder);
    }
    await model.flushChanges();
    await workingCopy.commitToRepository(input_json_1.default.BranchName);
}
main().catch(console.error);
