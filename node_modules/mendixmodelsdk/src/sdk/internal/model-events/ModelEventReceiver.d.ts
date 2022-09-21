import * as EventSource from "eventsource";
import { IModelServerClient } from "../IModelServerClient";
import { IDeltaEvent, IFileEvent } from "./IModelEvent";
import { common } from "../../../common";
export declare class ModelEventReceiver {
    private workingCopyId;
    private client;
    private errorHandler;
    private deltaEventEmitter;
    private fileEventEmitter;
    eventSource: EventSource | null;
    constructor(workingCopyId: string, client: IModelServerClient, errorHandler: {
        handleError: (message: string, errorCallback: common.IErrorCallback | undefined) => void;
    });
    onDeltaEvent(callback: (modelEvent: IDeltaEvent) => void): void;
    onFileEvent(callback: (modelEvent: IFileEvent) => void): void;
    start(lastEventId: number): void;
    stop(): void;
    get isRunning(): boolean;
}
