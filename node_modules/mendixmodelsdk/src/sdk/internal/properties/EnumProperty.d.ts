import { AbstractEnum } from "../instances";
import { Structure, IStructureClass } from "../structures";
import { ILifeCycle } from "../versionChecks";
import { PrimitiveProperty } from "./PrimitiveProperty";
/**
 * A property value that is an enum literal.
 */
export declare class EnumProperty<T extends AbstractEnum> extends PrimitiveProperty<T> {
    private initialValue;
    protected enumType: new (key: string, lifeCycle: ILifeCycle) => AbstractEnum;
    constructor(declaredOn: IStructureClass, parent: Structure, name: string, initialValue: T, enumType: new (key: string, lifeCycle: ILifeCycle) => AbstractEnum);
    updateWithRawValue(value: any): void;
    getRawValue(value: T): string;
    set(value: T): void;
}
