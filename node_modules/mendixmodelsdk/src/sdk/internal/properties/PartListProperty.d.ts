import { AbstractProperty } from "./AbstractProperty";
import { AbstractElement, Element } from "../elements";
import { IList } from "../instances";
import { ModelUnit } from "../units";
import { IAbstractElementJson } from "../transportInterfaces";
import { Structure } from "../structures";
import { utils } from "../../utils";
/**
 * A property value that is a list of (model) elements.
 * Will detect when children are moved, added, deleted and sends the appropriate deltas.
 */
export declare class PartListProperty<T extends Element> extends AbstractProperty<T[], IList<T>> {
    parent: AbstractElement;
    private _detaching;
    get(): IList<T>;
    updateWithRawValue(value: IAbstractElementJson[]): void;
    updateElementContainer(unit: ModelUnit): void;
    removeChild(child: T): boolean;
    detachChild(child: T): void;
    dispose(): void;
    deepCopyInto(clone: Structure, idMap: utils.IMap<Structure>, unresolvedIdentifierFixers: ((idMap: utils.IMap<Structure>) => void)[]): void;
}
