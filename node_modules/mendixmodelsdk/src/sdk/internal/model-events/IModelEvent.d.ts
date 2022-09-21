import { Delta } from "../deltas";
export interface IDeltaEvent {
    id: number;
    type: "deltas";
    deltas: Delta[];
}
export interface IFileEvent {
    id: number;
    type: "fileChanges";
    files: string[];
}
export declare type IModelEvent = IFileEvent | IDeltaEvent;
