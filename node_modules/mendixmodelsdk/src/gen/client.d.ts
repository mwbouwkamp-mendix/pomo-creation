import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
export declare namespace client {
    class SupportedPlatform extends internal.AbstractEnum {
        static All: SupportedPlatform;
        static Web: SupportedPlatform;
        static Native: SupportedPlatform;
        protected qualifiedTsTypeName: string;
    }
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `Client`.
     */
}
