import { IObservableValue } from "mobx";
import { AbstractProperty } from "./AbstractProperty";
import { AbstractElement, IAbstractElement } from "../elements";
import { IStructureClass, Structure } from "../structures";
import { utils } from "../../utils";
import { IList } from "../instances";
/**
 * Property value that references a (model) element by name.
 */
export declare class ByNameReferenceProperty<T extends IAbstractElement> extends AbstractProperty<T | null, IObservableValue<string | null>> {
    parent: AbstractElement;
    constructor(declaredOn: IStructureClass, parent: AbstractElement, name: string, initialValue: T | null, _targetType: string);
    get(): T | null;
    set(newValue: T | null): void;
    updateWithRawValue(value: string): void;
    qualifiedName(): string | null;
    get targetType(): string;
    deepCopyInto(clone: Structure, idMap: utils.IMap<Structure>, unresolvedIdentifierFixers: ((idMap: utils.IMap<Structure>) => void)[]): void;
}
/**
 * Property value that references zero or more (model) elements by name.
 *
 * The reference list is only used internally, and externally a view of the reference list that returns the real objects is exposed.
 * So, the flow is either:
 *  [server] -> [internal ref list (observable)] -> [update view]
 * or:
 *  [Sdk] -> [view] -- onchange ---> [internal ref list] --- onChange event ---> [send delta's]
 *
 * For simplicity's sake, referencesByName should be considered immutable here (TODO: they should be in general?),
 * so that their internal value doesn't need to be observed.
 */
export declare class ByNameReferenceListProperty<T extends IAbstractElement> extends AbstractProperty<T[], IList<string>> {
    parent: AbstractElement;
    constructor(declaredOn: IStructureClass, parent: AbstractElement, name: string, value: T[], _targetType: string);
    get(): IList<T>;
    updateWithRawValue(value: string[]): void;
    qualifiedNames(): string[];
    dispose(): void;
    get targetType(): string;
    deepCopyInto(clone: Structure, idMap: utils.IMap<Structure>, unresolvedIdentifierFixers: ((idMap: utils.IMap<Structure>) => void)[]): void;
}
