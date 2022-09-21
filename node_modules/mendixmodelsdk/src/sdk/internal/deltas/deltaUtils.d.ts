import { AbstractProperty } from "../properties";
import { Delta, Mutator } from "./deltas";
import { IAbstractUnit, ModelUnit } from "../units";
import { IStructure, Structure } from "../structures";
import { AbstractElement } from "../elements";
import { AbstractModel } from "../AbstractModel";
export interface IContainmentInfo {
    element: AbstractElement;
    parentId: string;
    parentPropertyName: string;
    index?: number;
}
export declare class UnknownPropertyError extends Error {
    constructor(message: string);
}
export declare function getProperty(structure: IStructure, propertyName: string): AbstractProperty<any, any>;
export declare function getElement(model: AbstractModel, unit: ModelUnit, elementId: string): AbstractElement;
export declare function findElement(model: AbstractModel, unit: ModelUnit, elementId: string): AbstractElement | null;
export declare function getElementNotFoundError(unit: ModelUnit, elementId: string): Error;
export declare function asModelUnit(unit: IAbstractUnit, delta: Delta): ModelUnit;
export declare function updateStructure(structure: Structure, isReverting: boolean, updateAction: () => void): void;
export declare function getUnit(model: AbstractModel, unitId: string): IAbstractUnit;
export declare function isListProperty(property: AbstractProperty<any, any>): property is AbstractProperty<any[], any>;
export declare function checkInsertionIndex(index: number, property: AbstractProperty<any[], any>): void;
export declare function checkUpdateOrRemovalIndex(index: number, property: AbstractProperty<any[], any>): void;
export declare function checkMutator(mutator: Mutator, property: AbstractProperty<any, any>): void;
export declare function getContainmentInfo(unit: ModelUnit, model: AbstractModel, elementId: string): IContainmentInfo;
export declare function rawList(property: AbstractProperty<any[], any>): any[];
export declare function rawValue(property: AbstractProperty<any, any>): any;
export declare function removeUselessDeltas(deltas: Delta[]): Delta[];
