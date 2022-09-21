import { IAbstractElement } from "./elements";
import { AbstractModel } from "./AbstractModel";
import { IStructure } from "./structures";
/**
 * Manages a cached map [qualified name: string] -> list of structures,
 * with the possibility to retrieve (resolve) based on qualified name.
 *
 * Used to speed up resolution of by-(qualified-)name references.
 */
export declare class QualifiedNameCache {
    constructor(_model: AbstractModel);
    /**
     * @param structureTypeName        type name in syntax "MetaModelname$ElementName"
     * @param qualifiedName
     * @returns The element found, or `null` when no element is found.
     */
    resolve(structureTypeName: string, qualifiedName: string | null): IAbstractElement | null;
    observe(listener: (names: string[]) => void): () => void;
    size(): number;
    keys(): ReadonlyArray<string>;
    /**
     * Updates the cache as far as it is affected by the addition or rename of this element.
     * Child entries are updated automatically as well.
     */
    addStructureToCache(structure: IStructure): void;
    /**
     * Removes the structure and its children from the cache.
     */
    removeStructureFromCache(structure: IStructure): void;
}
