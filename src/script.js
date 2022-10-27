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
    const app = client.getApp(input_json_1.default.AppID);
    const repo = app.getRepository();
    const branches = await repo.getBranches();
    console.log(branches);
    const workingCopy = await app.createTemporaryWorkingCopy(input_json_1.default.BranchLine);
    const model = await workingCopy.openModel();
    for (const module of input_json_1.default.Modules) {
        let x = 0;
        let y = 0;
        const domainModel = await (0, utils_1.getOrCreateDomainModel)(model, module.Name);
        const objectsFolder = (0, utils_1.getOrCreateFolder)(domainModel.containerAsModule, "objects");
        const pagesFolder = (0, utils_1.getOrCreateFolder)(domainModel.containerAsModule, "pages");
        const resourcesFolder = (0, utils_1.getOrCreateFolder)(domainModel.containerAsModule, "resources");
        for (const entity of module.Entitys) {
            const entityObjectFolder = (0, utils_1.getOrCreateFolder)(objectsFolder, entity.Name);
            const newEntity = (0, utils_1.getOrCreateEntity)(domainModel, entity.Name, x, y);
            y += 100;
            for (let att of entity.Attributes) {
                const type = AttributeType_1.PrimitiveType[att._Type];
                (0, utils_1.getOrCreateAttribute)(newEntity, att.Name, type || AttributeType_1.PrimitiveType.STRING);
            }
            (0, utils_1.getOrCreateDefaultCreateMicroflow)(newEntity, entityObjectFolder);
            (0, utils_1.createDefaultDeleteMicroflow)(newEntity, entityObjectFolder);
            (0, utils_1.createDefaultCommitMicroflow)(newEntity, entityObjectFolder);
            const entityPageFolder = (0, utils_1.getOrCreateFolder)(pagesFolder, entity.Name); //To Do add ACT_Entity_Create, Commit, Delete
        }
    }
    await model.flushChanges();
    await workingCopy.commitToRepository(input_json_1.default.BranchLine);
}
main().catch(console.error);
