import { Delta, IDeltaManager } from "./deltas";
import { IAbstractModel } from "./AbstractModel";
export interface ICustomActionChange {
    undoAction: () => void;
    redoAction: () => void;
}
export interface IDeltaChange {
    delta: Delta;
    reversedDelta: Delta;
}
export declare type Change = IDeltaChange[] | ICustomActionChange;
export declare class UndoManager {
    private readonly deltaManager;
    constructor(_model: IAbstractModel);
    getUndoState(modelUnitId: string): UndoState;
    withoutUndo<T>(performAction: () => T): T;
    withCustomUndoRedo<T>(unitId: string, customAction: {
        action: () => T;
        undoAction: () => void;
    }): T;
    private onNewDelta;
    private onChangeCompleted;
    private onChangeDiscarded;
    private onUnitLoaded;
}
export declare class UndoState {
    private deltaManager;
    constructor(deltaManager: IDeltaManager);
    get canUndo(): boolean;
    get canRedo(): boolean;
    undo(): void;
    redo(): void;
    clear(): void;
    private processUndo;
    private processRedo;
    private runAction;
}
