import { AbstractProperty } from "./AbstractProperty";
import { IList } from "../instances";
import { Structure } from "../structures";
/**
 * Primitive-typed property values list.
 */
export declare class PrimitiveListProperty<T> extends AbstractProperty<T[], IList<T>> {
    private primitiveType;
    get(): IList<T>;
    updateWithRawValue(value: T[]): void;
    deepCopyInto(clone: Structure): void;
}
