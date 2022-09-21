import { Delta } from "./deltas";
import { common } from "../../../common";
import { AbstractModel } from "../AbstractModel";
import { Transaction } from "./TransactionManager";
export interface IDeltaChange {
    delta: Delta;
    reverseDelta: Delta | Error;
}
export interface IDeltaManager {
    closeConnection(callback: common.IVoidCallback, errorCallback?: common.IErrorCallback): void;
    flushChanges(callback: common.IVoidCallback, errorCallback?: common.IErrorCallback): void;
    push(delta: Delta): void;
    processDeltas(deltas: Delta[]): void;
    reverseDelta(delta: Delta): Delta;
    onNewDelta(callback: (delta: Delta) => void): void;
    onTransactionCommitted(callback: () => void): void;
    onTransactionRollback(callback: () => void): void;
    beginTransaction(commitCurrentImplicitTransaction?: boolean): Transaction;
}
export declare class DeltaManager implements IDeltaManager {
    private model;
    private deltaSender;
    private deltaReverser;
    private deltaProcessor;
    private transactionManager;
    private flushCallbacks;
    private errorCallbacks;
    private eventEmitter;
    constructor(model: AbstractModel);
    /**
     * Closes the "connection" with the Model API Server in the sense that
     * pending delta requests are processed, and that afterwards the given
     * `callback` will be called.
     * This function can only be called once.
     */
    closeConnection(closeCallback: common.IVoidCallback, errorCallback?: common.IErrorCallback): void;
    /**
     * Ensure all pending delta requests are processed in Model Server
     */
    flushChanges(flushCallback: common.IVoidCallback, errorCallback?: common.IErrorCallback): void;
    /**
     * Pushes the given `delta` on the queue for scheduling/processing.
     */
    push(delta: Delta): void;
    processDeltas(deltas: Delta[]): void;
    reverseDelta(delta: Delta): Delta;
    beginTransaction(commitCurrentImplicitTransaction?: boolean): Transaction;
    onNewDelta(callback: (delta: Delta) => void): void;
    onTransactionCommitted(callback: () => void): void;
    onTransactionRollback(callback: () => void): void;
    private handleTransactionCommited;
    private handleTransactionRollback;
    private getReverseDelta;
    private callFlushCallbacks;
    private callErrorCallbacks;
}
