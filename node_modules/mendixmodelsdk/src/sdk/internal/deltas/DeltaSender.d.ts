import { Delta } from "./deltas";
import { common } from "../../../common";
import { AbstractModel } from "../AbstractModel";
export declare class DeltaSender {
    private model;
    private flushCallback;
    private errorCallback;
    isClosing: boolean;
    private hasError;
    private queue;
    pending: boolean;
    constructor(model: AbstractModel, flushCallback: common.IVoidCallback, errorCallback: common.IErrorCallback);
    closeConnection(): void;
    flush(): void;
    scheduleDeltas(deltas: Delta[]): void;
    private processQueue;
    private sendDeltas;
}
