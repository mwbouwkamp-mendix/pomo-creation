import * as structures from "../structures";
import * as versions from "../versionChecks";
import { utils } from "../../utils";
/**
 * Abstract base wrapper for property values/settings.
 * All values/settings of ModelElement-s are wrapped in the appropriate way.
 * This is particularly important for reference values which require additional magic.
 */
export declare abstract class AbstractProperty<T, P> {
    declaredOn: structures.IStructureClass;
    parent: structures.Structure;
    name: string;
    disposer: (() => void) | undefined;
    observableValue: P;
    readonly isAvailable: boolean;
    readonly isPublic: boolean;
    readonly isRequired: boolean;
    /**
     * parent is the structure that the value of this property attaches to,
     * so e.g. for all values `item` of Part(List)Property we (should) have the invariant:
     *    item.container === this.parent.
     *
     * initialValue is default value except parts and GUID-typed primitives.
     * (by-id/name references do not have default values.)
     */
    constructor(declaredOn: structures.IStructureClass, parent: structures.Structure, name: string, initialValue: T, ...moreArgs: any[]);
    abstract get(): T;
    abstract updateWithRawValue(value: any): void;
    get versionInfo(): versions.PropertyVersionInfo;
    reportAvailabilityIssues(): void;
    dispose(): void;
    abstract deepCopyInto(clone: structures.Structure, idMap: utils.IMap<structures.Structure>, unresolvedIdentifierFixers: ((idMap: utils.IMap<structures.Structure>) => void)[]): void;
}
