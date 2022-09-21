import { AbstractProperty } from "./AbstractProperty";
import { AbstractElement } from "../elements";
import { ByIdReference } from "../ByIdReference";
import * as structures from "../structures";
import { utils } from "../../utils";
/**
 * Property value that references a (model) element by id.
 */
export declare class ByIdReferenceProperty<T extends AbstractElement> extends AbstractProperty<T | null, ByIdReference<T>> {
    parent: AbstractElement;
    get(): T | null;
    set(value: T | null): void;
    updateWithRawValue(value: string): void;
    resolveReference(): void;
    updateElementContainer(): void;
    deepCopyInto(clone: structures.Structure, idMap: utils.IMap<structures.Structure>, unresolvedIdentifierFixers: ((idMap: utils.IMap<structures.Structure>) => void)[]): void;
}
