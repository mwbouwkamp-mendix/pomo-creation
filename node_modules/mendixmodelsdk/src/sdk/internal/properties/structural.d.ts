import { IObservableValue } from "mobx";
import { AbstractProperty } from "./AbstractProperty";
import { IList } from "../instances";
import { IStructureClass } from "../structures";
import { IModelUnit, IStructuralUnit, StructuralUnit } from "../units";
/**
 * Note: structural child values are updated through AbstractModel._addUnitToStructuralParent.
 */
/**
 * Value of a property owned by a structural unit.
 */
export declare class StructuralChildProperty<T extends IStructuralUnit | IModelUnit> extends AbstractProperty<T | null, IObservableValue<T | null>> {
    constructor(declaredOn: IStructureClass, parent: StructuralUnit, name: string, value: T | null, targetRefType?: string);
    get(): T | null;
    set(value: T | null): void;
    detachValue(): void;
    updateWithRawValue(value: any): void;
    deepCopyInto(): void;
}
/**
 * Property instance that wraps a list of structural units.
 * Structural child values are updated through AbstractModel._addUnitToStructuralParent.
 */
export declare class StructuralChildListProperty<T extends IStructuralUnit | IModelUnit> extends AbstractProperty<T[], IList<T>> {
    constructor(declaredOn: IStructureClass, parent: StructuralUnit, name: string, value: T[], targetRefType?: string);
    get(): IList<T>;
    updateWithRawValue(value: any): void;
    removeChild(child: T): boolean;
    detachChild(child: T): void;
    processChildRemoval(unit: T): void;
    processChildAddition(index: number): void;
    deepCopyInto(): void;
}
