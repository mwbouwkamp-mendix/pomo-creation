import {
  datatypes,
  domainmodels,
  EnumProperty,
  IModel,
  projects,
  security,
} from "mendixmodelsdk";
import { MendixPlatformClient } from "mendixplatformsdk";
import input from "./input.json";
import { PrimitiveType } from "./types/AttributeType";
import {
  ConnectionType,
  connectMicroflowActions,
  createCreateAction,
  createEndEvent,
  createMicroflow,
  createStartEvent,
  getOrCreateAttribute,
  getOrCreateDomainModel,
  getOrCreateEntity,
  getOrCreateFolder,
} from "./utils/utils";
//import {Input} from './types/InputType'

async function main() {
  const client = new MendixPlatformClient();

  const app = client.getApp(input.AppId);
  const repo = app.getRepository();
  const workingCopy = await app.createTemporaryWorkingCopy(input.BranchName);
  const model = await workingCopy.openModel();
  const domainModel = await getOrCreateDomainModel(model);

  const objectsFolder = getOrCreateFolder(
    domainModel.containerAsModule,
    "objects"
  );

  let x = 0;
  let y = 0;
  for (var ent of input.Entities) {
    const newEnt = getOrCreateEntity(domainModel, ent.Name, x, y);
    x += 100;
    y += 100;

    getOrCreateAttribute(newEnt, "Name");
    getOrCreateAttribute(newEnt, "Description");
    getOrCreateAttribute(newEnt, "Active", PrimitiveType.BOOLEAN);

    const entObjFolder = getOrCreateFolder(objectsFolder, ent.Name);

    const microflow = createMicroflow(entObjFolder, `${newEnt.name}_Create`);
    const startEvent = createStartEvent(microflow);
    const createActivity = createCreateAction(microflow, newEnt);
    const endEvent = createEndEvent(microflow, 280);
    endEvent.returnValue = "$New" + newEnt.name;
    datatypes.ObjectType.createInMicroflowBaseUnderMicroflowReturnType(
      microflow
    ).entity = newEnt;
    connectMicroflowActions(
      microflow,
      startEvent,
      createActivity,
      ConnectionType.LEFT_RIGHT
    );
    connectMicroflowActions(
      microflow,
      createActivity,
      endEvent,
      ConnectionType.LEFT_RIGHT
    );
  }

  await model.flushChanges();

  await workingCopy.commitToRepository(input.BranchName);
}

main().catch(console.error);
