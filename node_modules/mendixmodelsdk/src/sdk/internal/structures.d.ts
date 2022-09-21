/**
 * "Something" that contains properties.
 * Concrete sub types: MxElement, MxStructuralUnit, MxModelUnit.
 * Abstract sub types: MxAbstractElement, MxAbstractUnit.
 *
 * Each unit in the model is guaranteed to exist only once in memory.
 */
export interface IStructure {
    id: string;
    structureTypeName: string;
    readonly container: aliases.IContainer | null;
    isLoaded: boolean;
    /**
     * Unit that owns/contains this thing.
     */
    unit: units.IAbstractUnit;
    model: IAbstractModel;
    /**
     * Renders the structure as plain JSON (without observables magic).
     * This is intended for debugging and development convenience.
     * Note that the resulting object is not of the interface type corresponding to this structure.
     */
    toJSON(): object;
    allProperties(): AbstractProperty<any, any>[];
    publicProperties(): AbstractProperty<any, any>[];
    /**
     * Returns all properties when this structure is loaded, otherwise just the public properties.
     */
    loadedProperties(): AbstractProperty<any, any>[];
    /**
     * Traverses this structure by calling the provided visitor function
     * on itself and all the structures contained (as part) by it,
     * in depth-first order, and it returns synchronously after that.
     */
    traverse(visit: (structure: IStructure) => void): void;
    /**
     * Traverses this structure, only visiting children contained in public properties.
     */
    traversePublicParts(visit: (structure: IStructure) => void): void;
    /**
     * Traverses this structure, returning immediately when `visit` returns something other than `null`.
     */
    traverseFind<T>(visit: (structure: IStructure) => T): T | null;
}
export interface IStructureClass {
    versionInfo: StructureVersionInfo;
}
export interface IStructureConstructor<T extends IStructure> {
    new (...args: any[]): T;
}
export declare type AbstractStructureProperty = properties.PartProperty<any> | properties.PartListProperty<any> | properties.StructuralChildProperty<any> | properties.StructuralChildListProperty<any>;
export interface IChildHandle {
    containingProperty: AbstractStructureProperty;
    delete(): void;
    detach(): void;
}
export declare type StructureState = "new" | "attached" | "detached" | "deleted";
export declare abstract class Structure<TModel extends IAbstractModel = IAbstractModel, TContainer extends aliases.IContainer | null = aliases.IContainer | null> implements IStructure {
    structureTypeName: string;
    id: string;
    constructor(_model: AbstractModel, structureTypeName: string, id: string, _isPartial?: boolean, container?: aliases.IContainer | null);
    get container(): TContainer;
    get model(): TModel;
    abstract get unit(): units.IAbstractUnit;
    abstract get isLoaded(): boolean;
    /**
     * Deletes a model from the model.
     * This will automatically remove the item from its model parent,
     * and update incoming references and send server changes.
     */
    abstract delete(): void;
    toJSON(): IStructureJSON;
    allProperties(): AbstractProperty<any, any>[];
    publicProperties(): AbstractProperty<any, any>[];
    loadedProperties(): AbstractProperty<any, any>[];
    traverse(visit: (structure: IStructure) => void): void;
    traversePublicParts(visit: (structure: IStructure) => void): void;
    traverseFind<T>(visit: (structure: IStructure) => T): T | null;
    protected getContainerAs<T extends aliases.IContainer>(containerType: any): T;
}
/**
 * Late dependencies on others, structures should be defined first for proper inheritance!
 */
import * as elements from "./elements";
import { AbstractProperty } from "./properties/AbstractProperty";
import * as properties from "./properties";
import * as units from "./units";
import { AbstractModel, IAbstractModel } from "./AbstractModel";
import { StructureVersionInfo } from "./versionChecks";
import { IStructureJSON } from "./deltas";
export declare namespace aliases {
    type IContainer = units.IStructuralUnit | elements.IAbstractElement;
    type Container = units.StructuralUnit | elements.AbstractElement;
}
