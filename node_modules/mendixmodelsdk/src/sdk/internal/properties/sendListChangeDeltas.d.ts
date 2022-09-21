import { IArrayWillChange, IArrayWillSplice } from "mobx";
import { AbstractProperty } from "./AbstractProperty";
import { IList } from "../instances";
export declare function sendListChangeDeltas<T, P>(property: AbstractProperty<T[], IList<P>> & {
    toRawChangeValue: (value: P) => any;
}, change: IArrayWillSplice<P> | IArrayWillChange<P>): void;
