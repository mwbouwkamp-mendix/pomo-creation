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

// Constants
const DEFAULT_DELTAY_DM = 100;
const DEFAULT_X_DM = 100;


//Main
async function main() {
  const client = new MendixPlatformClient();
  const app = client.getApp(input.AppID);
  const workingCopy = await app.createTemporaryWorkingCopy(input.BranchLine);
  const model = await workingCopy.openModel();

  for (const module of input.Modules) {
    let x = DEFAULT_X_DM;
    let y = 0;
    const domainModel = await getOrCreateDomainModel(model, module.Name);
    // High over folder creation
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
      //Entity Creation
      const newEntity = getOrCreateEntity(domainModel, entity.Name, x, y, true);
      for (const attribute of entity.Attributes) {
        const type = PrimitiveType[attribute._Type as keyof typeof PrimitiveType];
        getOrCreateAttribute(newEntity, attribute.Name, type || PrimitiveType.STRING);
      }
      // Object folder CRUD creation
      const entityObjectFolder = getOrCreateFolder(objectsFolder, entity.Name);
      const entityCreateMicroflow = getOrCreateDefaultCreateMicroflow(
        newEntity,
        entityObjectFolder
      );
      const entityDeleteMicroflow = createDefaultDeleteMicroflow(
        newEntity,
        entityObjectFolder
      );
      const entityCommitMicroflow = createDefaultCommitMicroflow(
        newEntity,
        entityObjectFolder
      );
      // pages folder CRUD Creation
      const entityPageFolder = getOrCreateFolder(pagesFolder, entity.Name); //To Do add ACT_Entity_Create, Commit, Delete
      y += DEFAULT_DELTAY_DM;
    }
  }
  await model.flushChanges();
  await workingCopy.commitToRepository(input.BranchLine);
}

main().catch(console.error);
