import { AbstractModel, IAbstractModel } from "./AbstractModel";
import * as versions from "./versionChecks";
import * as structures from "./structures";
import * as units from "./units";
import * as elements from "./elements";
import * as transport from "./transportInterfaces";
import { utils } from "../utils";
/**
 * The `instances` module contains various classes and functions
 * which revolve around creating/maintaining/updating actual model contents.
 */
/**
 * Generic list interface for use in generated code.
 */
export interface IList<T> extends Array<T> {
    clear(): T[];
    replace(newItems: T[]): T[];
    find(predicate: (item: T, index: number, array: Array<T>) => boolean, thisArg?: any, fromIndex?: number): T | undefined;
    remove(value: T): boolean;
}
/**
 * Base class for enumerations in the meta model.
 * Literals of an enumeration are generated as public static constants of the generated sub class
 * which are instances of the generated sub class.
 */
export declare abstract class AbstractEnum {
    protected qualifiedTsTypeName: string;
    versionInfo: versions.LifeCycle;
    constructor(_name: string, lifeCycleInfo: versions.ILifeCycle);
    get name(): string;
    toString(): string;
    qualifiedTsLiteralName(): string;
    checkEnumVersion(metaModelVersion: versions.Version, includeWarnings: boolean): void;
}
/**
 * Creates a new element instance from JSON. All element IDs are replaced by new ones.
 * After creation, the element can be attached to a container.
 * Optionally populate the given map from original to new IDs.
 */
export declare function createElementFromJSON(model: IAbstractModel, json: transport.IAbstractElementJson, idToStructureMap?: utils.IMap<structures.Structure>): elements.Element;
/**
 * Creates a new model unit from JSON and attaches it to the provided container unit.
 * All element IDs are replaced by new ones.
 */
export declare function createModelUnitFromJSON(containerUnit: units.IStructuralUnit, containmentName: string, contents: transport.IAbstractElementJson): units.ModelUnit;
export declare namespace instancehelpers {
    /**
     * Given some a (normalized) JSON representation of a unit,
     * creates an instance of the corresponding `unit.AbstractUnit` sub class (structural/model)
     * and populates that from the JSON.
     * Should only be called if this unit was not already in memory.
     */
    function abstractUnitJsonToInstance(model: AbstractModel, json: transport.IAbstractUnitJson, isPartial: boolean): units.AbstractUnit | null;
    /**
     * Given some a (normalized) JSON representation of a model element,
     * creates an instance of the corresponding `elements.Element`
     * and populates that from the JSON.
     * Will update existing elements if this element was created before.
     */
    function modelElementJsonToInstance(model: AbstractModel, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson | null, isPartial: boolean): elements.Element | null;
    function createNewElementInstanceFromJSON(model: AbstractModel, json: transport.IAbstractElementJson): elements.Element;
    /**
     * Creates a new element for a SDK user.
     */
    function createElement<T extends elements.Element>(owner: IAbstractModel | elements.AbstractElement, constructor: structures.IStructureConstructor<T>, parentPropName?: string, parentPropIsList?: boolean): T;
    /**
     * Creates a new unit for a SDK user.
     */
    function createUnit(container: units.IStructuralUnit, constructor: units.IAbstractUnitConstructor): any;
    /**
     * Type -> class (the constructor function, technically) lookup, e.g. "DomainModels$Entity" -> DomainModels.Entity
     */
    function lookupClass(qualifiedTypeName: string, classes: any): InstanceConstructor;
    function structureAffectsQualifiedNames(structure: structures.IStructure): boolean;
    function structureIsByNameReferrable(structure: structures.IStructure): structure is elements.AbstractElement;
    function createUnitFromJSON(model: AbstractModel, json: transport.IAbstractUnitJson, resolveByIdReferences?: boolean): units.IAbstractUnit;
}
export declare type InstanceConstructor = elements.IElementConstructor | units.IAbstractUnitConstructor;
