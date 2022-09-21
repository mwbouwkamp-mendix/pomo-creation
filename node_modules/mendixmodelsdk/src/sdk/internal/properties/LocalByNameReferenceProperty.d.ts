import { IObservableValue } from "mobx";
import { AbstractProperty } from "./AbstractProperty";
import { AbstractElement, IElement } from "../elements";
import { IStructureClass, Structure, IStructure } from "../structures";
import { utils } from "../../utils";
export interface INamedElement extends IElement {
    name: string;
}
export declare function isNamedElement(element: IStructure): element is INamedElement;
/**
 * Property value that references a (model) element by a simple name, within the same model unit.
 */
export declare class LocalByNameReferenceProperty<T extends INamedElement> extends AbstractProperty<T | null, IObservableValue<string | null>> {
    parent: AbstractElement;
    constructor(declaredOn: IStructureClass, parent: AbstractElement, name: string, initialValue: T | null, _targetType: string);
    get(): T | null;
    set(newValue: T | null): void;
    updateWithRawValue(value: string): void;
    localName(): string | null;
    get targetType(): string;
    deepCopyInto(clone: Structure, idMap?: utils.IMap<Structure>, unresolvedIdentifierFixers?: ((idMap: utils.IMap<Structure>) => void)[]): void;
}
