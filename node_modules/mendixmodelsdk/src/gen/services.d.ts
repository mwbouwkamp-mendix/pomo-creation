import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
export declare namespace services {
    class HttpMethod extends internal.AbstractEnum {
        static Get: HttpMethod;
        static Post: HttpMethod;
        static Put: HttpMethod;
        static Patch: HttpMethod;
        static Delete: HttpMethod;
        static Head: HttpMethod;
        static Options: HttpMethod;
        protected qualifiedTsTypeName: string;
    }
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `Services`.
     */
}
