import { IObservableValue, IValueWillChange } from "mobx";
import * as elements from "./elements";
import { common } from "../../common";
export declare class ByIdReference<T extends elements.AbstractElement> {
    owner: elements.AbstractElement;
    protected isResolved: boolean;
    target: IObservableValue<T | null>;
    protected isResolving: boolean;
    protected referenceId: string | null;
    /**
     * Constructs and returns a new reference instance, that is owned (by a property of) an abstract element.
     */
    constructor(owner: elements.AbstractElement);
    /**
     * Registers an observer in the form of a callback with this references and fires that callback
     * immediately if the reference is already resolved.
     * Used by properties to observe this reference, so that storage and logical updates can be applied.
     */
    intercept(callback: (change: IValueWillChange<T | null>) => IValueWillChange<T | null>): common.IVoidCallback;
    set(newValue: T | null): void;
    assertValueHasSameUnit(valueToCheck: T | null): void;
    get(): T | null;
    resolve(): void;
    /**
     * Sets only the raw target id, without trying to resolve that.
     */
    updateWithRawValue(value: string): void;
    /**
     * Get the row target id, the target might be not resolved yet
     */
    getRawValue(): string | null;
}
