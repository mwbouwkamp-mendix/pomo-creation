import { IObservableValue } from "mobx";
import { AbstractProperty } from "./AbstractProperty";
import { Structure } from "../structures";
export declare class PrimitiveProperty<T> extends AbstractProperty<T, IObservableValue<T>> {
    defaultValue: T;
    private primitiveType;
    get(): T;
    set(newValue: T): void;
    updateWithRawValue(value: T): void;
    protected getRawValue(value: T): any;
    private beforeChange;
    markCurrentValueAsDefault(): void;
    deepCopyInto(clone: Structure): void;
}
