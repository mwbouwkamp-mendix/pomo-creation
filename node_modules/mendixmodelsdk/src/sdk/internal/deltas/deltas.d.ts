import { common } from "../../../common";
export declare type Delta = ICreateElementTreeDelta | IDeleteElementDelta | IAttachElementDelta | IDetachElementDelta | ICreateUnitTreeDelta | IDeleteUnitDelta | IUpdatePropertyValueDelta;
/**
 * The base interface for any delta.
 */
export interface IDelta {
    /**
     * The ID of the unit (containing an element or property value) to which the delta is to be applied.
     */
    unitId: string;
}
/**
 * Base interface for deltas acting on/in elements.
 */
export interface IElementDelta extends IDelta {
    elementId: string;
}
/**
 * A delta to create an element from a JSON tree.
 */
export interface ICreateElementTreeDelta extends IDelta {
    deltaType: "CREATE_ELEMENT_TREE";
    /**
     * The ID of the parent element to create the new element in.
     */
    parentId: string;
    /**
     * The name of the property to create the new element on/in.
     * This must a property of PART kind with an element type compatible with `elementType`.
     */
    parentPropertyName: string;
    /**
     * Index where the element should be created. Only for listy properties.
     */
    additionIndex?: number;
    /**
     * The JSON of the element tree to create.
     */
    elementTree: IStructureJSON;
}
export interface IStructureJSON {
    $ID: string;
    $Type: string;
    [propertyName: string]: PrimitiveValue | PrimitiveValue[] | IStructureJSON | IStructureJSON[] | null;
}
export declare type PrimitiveValue = boolean | number | string | common.IPoint | common.ISize | common.IColor;
/**
 * A delta to change the value of a property of an element,
 * in a way that's specific by the "_mutator_"" given.
 */
export interface IUpdatePropertyValueDelta extends IElementDelta {
    deltaType: "UPDATE_PROPERTY_VALUE";
    propertyName: string;
    mutator: Mutator;
}
export declare type Mutator = IChangeMutator | IAddMutator | IRemoveMutator;
/**
 * Sets the value of the whole property (if non-listy),
 * or a specific item (if listy - which item is indicated by `updateIndex`) to the given `value`.
 */
export interface IChangeMutator {
    mutatorType: "CHANGE";
    value: PrimitiveValue | null;
    updateIndex?: number;
}
/**
 * Adds the given `value` to a listy property,
 * either at the end if `insertionIndex` is not set,
 * or at the indicated index, shifting any and all subsequent items "down".
 */
export interface IAddMutator {
    mutatorType: "ADD";
    value: PrimitiveValue;
    insertionIndex?: number;
}
/**
 * Removes the item of a listy property with the given `removalIndex`,
 * shifting any and all subsequent items "up".
 */
export interface IRemoveMutator {
    mutatorType: "REMOVE";
    removalIndex: number;
}
export interface IDetachElementDelta extends IElementDelta {
    deltaType: "DETACH_ELEMENT";
}
/**
 * A delta to move an element from one parent element to another.
 */
export interface IAttachElementDelta extends IElementDelta {
    deltaType: "ATTACH_ELEMENT";
    /**
     * The ID of the parent element to attach the element to indicated by `elementId` to.
     */
    newParentId: string;
    /**
     * The name of the property of the new parent element to put the element-to-move in/on.
     */
    newParentPropertyName: string;
    /**
     * If the indicated new property is listy, `newIndex` is the index where the element-to-move will end up.
     * If not set, the element-to-move will be added at the end.
     */
    newIndex?: number;
}
/**
 * A delta to delete an element, including all its contained properties and children.
 */
export interface IDeleteElementDelta extends IElementDelta {
    deltaType: "DELETE_ELEMENT";
}
/**
 * A delta to create a (structural or model) unit.
 */
export interface ICreateUnitTreeDelta extends IDelta {
    deltaType: "CREATE_UNIT_TREE";
    /**
     * The ID of the containing unit.
     * (This relates to the project tree.)
     */
    containerId: string;
    /**
     * The name of the property of the containing unit which will contain the unit-to-create.
     * (This relates to the project tree.)
     */
    containmentName: string;
    /**
     * The qualified name of the type of unit to create.
     */
    contentType: string;
    /**
     * The JSON of the unit tree to create.
     */
    unitTree: IStructureJSON;
}
export interface IDeleteUnitDelta extends IDelta {
    deltaType: "DELETE_UNIT";
}
