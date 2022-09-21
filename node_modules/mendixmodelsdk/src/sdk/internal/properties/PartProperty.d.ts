import { IObservableValue } from "mobx";
import { AbstractProperty } from "./AbstractProperty";
import { AbstractElement, Element } from "../elements";
import { ModelUnit } from "../units";
import { IAbstractElementJson } from "../transportInterfaces";
import { Structure } from "../structures";
import { utils } from "../../utils";
/**
 * A property value that is a (model) element.
 * Will detect when children are moved, added, deleted and sends the appropriate deltas.
 */
export declare class PartProperty<T extends Element> extends AbstractProperty<T | null, IObservableValue<T | null>> {
    parent: AbstractElement;
    hasDefaultValue: boolean;
    get(): T | null;
    set(newValue: T | null): void;
    updateWithRawValue(value: IAbstractElementJson | null): void;
    updateElementContainer(unit: ModelUnit): void;
    detachValue(): void;
    dispose(): void;
    deepCopyInto(clone: Structure, idMap: utils.IMap<Structure>, unresolvedIdentifierFixers: ((idMap: utils.IMap<Structure>) => void)[]): void;
}
