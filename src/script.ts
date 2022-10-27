import { microflows } from "mendixmodelsdk";
import { MendixPlatformClient } from "mendixplatformsdk";
import input from "./input.json";
import { PrimitiveType } from "./types/AttributeType";
import {
  createDefaultCommitMicroflow,
  getOrCreateDefaultCreateMicroflow,
  createDefaultDeleteMicroflow,
  getOrCreateAttribute,
  getOrCreateDomainModel,
  getOrCreateEntity,
  getOrCreateFolder,
} from "./utils/utils";
//import {Input} from './types/InputType'

async function main() {
  const client = new MendixPlatformClient();
  const app = client.getApp(input.AppID);
  const repo = app.getRepository();
  const workingCopy = await app.createTemporaryWorkingCopy(input.BranchLine);
  const model = await workingCopy.openModel();

  for (const module of input.Modules) {
    let x = 0;
    let y = 0;
    const domainModel = await getOrCreateDomainModel(model, module.Name);
    const objectsFolder = getOrCreateFolder(
      domainModel.containerAsModule,
      "objects"
    );
    const pagesFolder = getOrCreateFolder(
      domainModel.containerAsModule,
      "pages"
    );
    const resourcesFolder = getOrCreateFolder(
      domainModel.containerAsModule,
      "resources"
    );
    for (const entity of module.Entitys) {
      const entityObjectFolder = getOrCreateFolder(objectsFolder, entity.Name);
      const newEntity = getOrCreateEntity(domainModel, entity.Name, x, y);
      y += 100;
      for (let att of entity.Attributes) {
        const type = PrimitiveType[att._Type as keyof typeof PrimitiveType];
        getOrCreateAttribute(newEntity, att.Name, type || PrimitiveType.STRING);
      }
      getOrCreateDefaultCreateMicroflow(
        newEntity,
        entityObjectFolder
      ) as microflows.Microflow;
      createDefaultDeleteMicroflow(newEntity, entityObjectFolder);
      createDefaultCommitMicroflow(newEntity, entityObjectFolder);
      const entityPageFolder = getOrCreateFolder(pagesFolder, entity.Name); //To Do add ACT_Entity_Create, Commit, Delete
    }
  }
  await model.flushChanges();
  await workingCopy.commitToRepository(input.BranchLine);
}

main().catch(console.error);
