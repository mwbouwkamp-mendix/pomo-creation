import { AbstractEnum } from "../instances";
import { Structure, IStructureClass } from "../structures";
import { ILifeCycle } from "../versionChecks";
import { PrimitiveListProperty } from "./PrimitiveListProperty";
/**
 * A property value that is a list of enum literals.
 */
export declare class EnumListProperty<T extends AbstractEnum> extends PrimitiveListProperty<T> {
    private initialValue;
    protected enumType: new (key: string, lifeCycle: ILifeCycle) => AbstractEnum;
    constructor(declaredOn: IStructureClass, parent: Structure, name: string, initialValue: T[], enumType: new (key: string, lifeCycle: ILifeCycle) => AbstractEnum);
    updateWithRawValue(value: any[]): void;
}
