# Mendix Platform SDK

The Mendix Platform SDK can be used to call Mendix Platform APIs.
It also integrates with the [Mendix Model SDK](https://www.npmjs.com/package/mendixmodelsdk) for working on temporary
online working copies of Mendix projects.

At the moment, the Platform SDK implements the following functionality:
* Creating a new app
* Deleting an app
* Creating a temporary working copy for editing an app model using the Mendix Model SDK
* Committing the changes to a temporary working copy back to the Mendix Team Server
* Getting info about a repository, its branches and commits

## Obtaining a Personal Access Token

To use the Mendix Platform SDK, you need a Personal Access Token with the right scopes.
Follow [this guide](https://docs.mendix.com/apidocs-mxsdk/mxsdk/setup-your-pat/) to create a Personal Access Token.

> Warning: Do not put the Personal Access Token inside your source code! Instead, pass it to your script using an environment variable. The Platform SDK automatically tries to get the Personal Access Token from the environment variable MENDIX_TOKEN.

## Creating a script
To set up your development environment and create your first script, please follow [the guide](https://docs.mendix.com/apidocs-mxsdk/mxsdk/setting-up-your-development-environment/).

## Using the API

Here is a small example script that shows the main APIs of the Platform SDK.

```typescript
import { MendixPlatformClient } from "mendixplatformsdk";

async function main() {
    // Create a Platform SDK client. This will automatically read
    // your Personal Access Token from the environment variable MENDIX_TOKEN.
    const client = new MendixPlatformClient();

    // Create a new app in the Mendix Developer Portal. This will also create
    // a new Team Server repository based on the Blank App template.
    //
    // If you want to use an existing app, you can use the following:
    //     const app = client.getApp("existing-app-id");
    const app = await client.createNewApp("My First App", { repositoryType: "git" });

    // Create a temporary working copy on the Model Server based on the main
    // line of the Team Server repository.
    //
    // If you want to use an existing working copy, you can use the following:
    //     const workingCopy = app.getOnlineWorkingCopy("existing-working-copy-id");
    const workingCopy = await app.createTemporaryWorkingCopy("main");

    // Open the working copy using the Model SDK.
    const model = await workingCopy.openModel();

    // Show the names of all the modules in the app model.
    console.log("All modules in the model:");
    for (const module of model.allModules()) {
        console.log(` * ${module.name}`);
    }

    // Rename the first module.
    model.allModules()[0].name = "RenamedModule";
    await model.flushChanges();

    // Commit the changes back to the Team Server.
    await workingCopy.commitToRepository("main", { commitMessage: "Rename the first module" });

    // Create a Repository object to get info about its branches and commits.
    const repository = app.getRepository()

    // Show the commit messages in the main branch.
    // The response is paginated using cursor-based pagination.
    console.log("Last commits in main branch:");
    const commits = (await repository.getBranchCommits("main")).items;
    for (const commit of commits) {
        console.log(` * ${commit.message}`);
    }

    // Delete the app.
    await app.delete();
}

// Run the 'main' function and report any errors.
main().catch(error => {
    console.log("ERROR: An error occurred.", error);
    process.exit(1);
})
```
