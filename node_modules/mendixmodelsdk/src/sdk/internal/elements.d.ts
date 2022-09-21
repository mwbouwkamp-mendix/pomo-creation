import * as structures from "./structures";
import { AbstractModel, IAbstractModel } from "./AbstractModel";
/**
 * The `elements` module contains various classes and functions
 * related to elements, specifically: (abstract) elements.
 */
/**
 * Abstract elements are structures that are referable by name.
 * Sub types: (I)Element and (I)ModelUnit.
 */
export interface IAbstractElement extends structures.IStructure {
    isLoaded: boolean;
    load(callback: (element: IAbstractElement) => void, forceRefresh?: boolean): void;
    load(forceRefresh?: boolean): Promise<IAbstractElement>;
    asLoaded(): IAbstractElement;
    findElementById(id: string): IAbstractElement | null;
}
export interface IByNameReferrable {
    /**
     * Returns the qualified name of this element, or
     * null if this element is not a part of the model,
     * or if it or one of its namespace containers does not have a
     * valid name.
     */
    readonly qualifiedName: string | null;
}
/**
 * See {@link IAbstractElement}.
 */
export declare abstract class AbstractElement<TModel extends IAbstractModel = IAbstractModel, TContainer extends structures.aliases.Container = structures.aliases.Container> extends structures.Structure<TModel, TContainer> implements IAbstractElement {
    constructor(model: AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: structures.aliases.IContainer | null);
    /**
     * Checks whether all properties are available at the moment
     *  - if false, a load is required to access these properties.
     */
    get isLoaded(): boolean;
    /**
     * Transforms a IElement interface into a Element class, loading the containing unit if necessary.
     * (Those are technically already the same, but this function makes sure its properties are available.)
     *
     * - If invoked without callback, it checks whether the properties are available or it will throw;
     * - If invoked with callback, it will load the data from the server if needed, and then invoke the callback.
     */
    asLoaded(): this;
    /**
     * Transforms a IElement interface into a Element class, loading the containing unit if necessary.
     * (Those are technically already the same, but this function makes sure its properties are available.)
     *
     * - If invoked without callback, it checks whether the properties are available or it will throw;
     * - If invoked with callback, it will load the data from the server if needed, and then invoke the callback.
     */
    load(callback: (elem: this) => void, forceRefresh?: boolean): void;
    load(forceRefresh?: boolean): Promise<this>;
    /**
     * Given an element id, returns the element in this abstract element with that id, otherwise null.
     */
    findElementById(id: string): AbstractElement | null;
    /**
     * Deletes this element from the model.
     */
    delete(): void;
}
/**
 * An element (short for: "model element") lives inside a unit
 * and contains (per being an IStructure) property values.
 */
export interface IElement extends IAbstractElement {
    readonly container: IAbstractElement;
}
export interface IElementConstructor {
    new (...args: any[]): Element;
}
export declare abstract class Element<TModel extends IAbstractModel = IAbstractModel> extends AbstractElement<TModel, AbstractElement> implements IElement {
    constructor(model: AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: units.ModelUnit, container: AbstractElement);
    get unit(): units.ModelUnit<IAbstractModel>;
    /**
     * Checks whether all attributes are available ATM
     *  -  if false, a load is required to access these properties.
     */
    get isLoaded(): boolean;
    /**
     * Detaches this element from the model, so that it can be attached in a different place.
     */
    detach(): this;
    /**
     * Creates a deep copy of this element and its children.
     */
    deepCopy(targetModel: IAbstractModel): this;
    /**
     * Creates a deep copy of this element and its children. Also returns a map from original to new IDs.
     */
    deepCopyWithIdMap(targetModel: IAbstractModel): {
        copy: Element;
        idMap: utils.IMap<structures.Structure>;
    };
    private _deepCopyElement;
}
import * as units from "./units";
import { utils } from "../utils";
