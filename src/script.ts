import { projects } from "mendixmodelsdk";
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
  //const repo = app.getRepository();
  //console.log(await repo.getBranches());
  const workingCopy = await app.createTemporaryWorkingCopy(input.BranchLine);
  const model = await workingCopy.openModel();


  for (var mod of input.Modules) {
    let x = 0;
    let y = 0;
    const domainModel = await getOrCreateDomainModel(model, mod.Name);
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
    for (let ent of mod.Entitys) {
      const newEnt = getOrCreateEntity(domainModel, ent.Name, x, y);
      x += 100;
      y += 100;
      for (let att of ent.Attributes) {
        const type = PrimitiveType[att._Type as keyof typeof PrimitiveType]
        if (type) {
          getOrCreateAttribute(newEnt, att.Name, type);
        }
        else {
          getOrCreateAttribute(newEnt, att.Name, PrimitiveType.STRING)
        }
      }
      const entObjFolder = getOrCreateFolder(objectsFolder, ent.Name);
      getOrCreateDefaultCreateMicroflow(newEnt, entObjFolder);
      createDefaultDeleteMicroflow(newEnt, entObjFolder);
      createDefaultCommitMicroflow(newEnt, entObjFolder);
      const entPagFolder = getOrCreateFolder(pagesFolder, ent.Name);
    }

    await model.flushChanges();

    await workingCopy.commitToRepository(input.BranchLine);
  }
}

main().catch(console.error);
