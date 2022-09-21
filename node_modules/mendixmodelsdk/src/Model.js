"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model = void 0;
const base = require("./gen/base-model");
const ModelSdkClientImpl_1 = require("./ModelSdkClientImpl");
/**
 * Implementation of {@link IModel}.
 */
class Model extends base.BaseModel {
    static createSdkClient(connectionConfig) {
        return new ModelSdkClientImpl_1.ModelSdkClientImpl(connectionConfig, Model);
    }
    /**
     * Returns the structural unit of type "Projects$Project" which is the project's root,
     * cast to the appropriate type.
     */
    get root() {
        if (this._unitsByType["Projects$Project"].length !== 1) {
            throw new Error("Illegal State: project root data not available");
        }
        return this._unitsByType["Projects$Project"][0];
    }
    /** @internal */
    _allModelClasses() {
        if (!this.allModelClasses) {
            this.allModelClasses = require("./gen/all-model-classes");
        }
        return this.allModelClasses;
    }
    findModuleByQualifiedName(qname) {
        const modules = this._unitsByType["Projects$Module"];
        return modules.find(m => m.name === qname) || null;
    }
}
exports.Model = Model;
//# sourceMappingURL=Model.js.map