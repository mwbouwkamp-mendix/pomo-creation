import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
import { microflows } from "./microflows";
export declare namespace nanoflows {
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `Nanoflows`.
     */
    /**
     * In version 8.4.0: introduced
     */
    class NanoflowParameterValue extends microflows.CodeActionParameterValue {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsJavaActionParameterMapping(): microflows.JavaActionParameterMapping;
        get containerAsJavaScriptActionParameterMapping(): microflows.JavaScriptActionParameterMapping;
        get nanoflow(): microflows.INanoflow | null;
        set nanoflow(newValue: microflows.INanoflow | null);
        get nanoflowQualifiedName(): string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new NanoflowParameterValue instance in the SDK and on the server.
         * The new NanoflowParameterValue will be automatically stored in the 'parameterValue' property
         * of the parent microflows.JavaActionParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.4.0 and higher
         */
        static createInJavaActionParameterMappingUnderParameterValue(container: microflows.JavaActionParameterMapping): NanoflowParameterValue;
        /**
         * Creates and returns a new NanoflowParameterValue instance in the SDK and on the server.
         * The new NanoflowParameterValue will be automatically stored in the 'parameterValue' property
         * of the parent microflows.JavaScriptActionParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.4.0 and higher
         */
        static createInJavaScriptActionParameterMappingUnderParameterValue(container: microflows.JavaScriptActionParameterMapping): NanoflowParameterValue;
        /**
         * Creates and returns a new NanoflowParameterValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): NanoflowParameterValue;
    }
}
import { IModel } from "./base-model";
