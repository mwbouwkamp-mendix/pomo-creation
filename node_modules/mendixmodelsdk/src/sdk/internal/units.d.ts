import * as transport from "./transportInterfaces";
import { AbstractModel, IAbstractModel } from "./AbstractModel";
import { AbstractElement, IAbstractElement } from "./elements";
import { Structure, IStructure } from "./structures";
/**
 * The `units` module contains interfaces and base classes related to the concept of **units**.
 * For more information on this concept, see the README of this repository, under "About Mendix models".
 */
/**
 * An abstract unit is a vertex, and usually: a node, in the project tree, i.e. a macro-level construct.
 * Examples are: modules, folders, microflows, pages.
 * This interface is implemented by {@link AbstractUnit}.
 */
export interface IAbstractUnit extends IStructure {
    /**
     * The parent unit of this unit.
     */
    readonly container: IStructuralUnit;
    /**
     * Whether this unit has been completely loaded and does not consist of the unit's interface
     *  (which corresponds to the unit being partial).
     */
    isLoaded: boolean;
    /**
     * Whether this unit and all of its children (recursively) can be loaded.
     */
    readonly isLoadable: boolean;
    /**
     * Whether this unit and all of its children (recursively) are editable.
     */
    readonly isReadOnly: boolean;
    /**
     * Deletes the unit from the model
     */
    delete(): void;
}
export interface IAbstractUnitConstructor {
    new (...args: any[]): ModelUnit | StructuralUnit;
}
/**
 * Base class for implementations of {@link IAbstractUnit}.
 */
export declare abstract class AbstractUnit<TModel extends IAbstractModel = IAbstractModel> extends Structure<TModel, StructuralUnit> implements IAbstractUnit {
    constructor(model: AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: IStructuralUnit);
    /**
     * Checks whether all attributes are available at this instant;
     * if false, a load is required to access these properties.
     */
    get isLoaded(): boolean;
    get isLoadable(): boolean;
    get isReadOnly(): boolean;
    deepCopyInto(newParent: IStructuralUnit): AbstractUnit;
}
export interface IStructuralUnit extends IAbstractUnit {
    toJSON(): transport.IAbstractElementJson;
}
/**
 * Implementation of {@link IStructuralUnit}.
 */
export declare abstract class StructuralUnit<TModel extends IAbstractModel = IAbstractModel> extends AbstractUnit<TModel> implements IStructuralUnit {
    constructor(model: AbstractModel, structureTypeName: string, id: string, _ignoredIsPartial: boolean, container: IStructuralUnit);
    get unit(): this;
    deepCopyInto(newParent: IStructuralUnit): AbstractUnit;
    delete(): void;
    toJSON(): transport.IAbstractElementJson;
}
/**
 * Model Units
 *
 * A model unit is a leaf (not a node) in the project tree and the root containing model {@link elements.Element} elements.
 * It is both a(n abstract) unit as well as "model element-like" by virtue of being an MxAbstractElement,
 * but minus the following features of MxElement:
 *  public - a model unit is public by nature
 *  container - a model unit is itself the root of the tree of elements it contains
 *
 * A unit acts as scope to resolve by-id references.
 */
export interface IModelUnit extends IAbstractUnit, IAbstractElement {
    readonly container: IStructuralUnit;
}
/**
 * Implementation of {@link IModelUnit}.
 */
export declare abstract class ModelUnit<TModel extends IAbstractModel = IAbstractModel> extends AbstractElement<TModel, StructuralUnit> implements IModelUnit {
    constructor(model: AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: IStructuralUnit | null);
    get unit(): this;
    get isLoaded(): boolean;
    get isLoadable(): boolean;
    get isReadOnly(): boolean;
    /**
     * Deletes this element from the model.
     */
    delete(): void;
    toJSON(): transport.IAbstractElementJson;
    findElementById(id: string): AbstractElement | null;
}
