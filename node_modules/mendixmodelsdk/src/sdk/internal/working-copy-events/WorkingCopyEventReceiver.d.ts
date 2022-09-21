import * as EventSource from "eventsource";
import { IModelServerClient } from "../IModelServerClient";
import { common } from "../../../common";
import { IWorkingCopyDataEvent, IBuildResultEvent } from "./IWorkingCopyEvent";
export declare class WorkingCopyEventReceiver {
    private workingCopyId;
    private client;
    private errorHandler;
    private workingCopyDataEventEmitter;
    private buildResultEventEmitter;
    eventSource: EventSource | null;
    constructor(workingCopyId: string, client: IModelServerClient, errorHandler: {
        handleError: (message: string, errorCallback: common.IErrorCallback | undefined) => void;
    });
    onWorkingCopyDataEvent(callback: (workingCopyDataEvent: IWorkingCopyDataEvent) => void): void;
    onBuildResultEvent(callback: (buildResultEvent: IBuildResultEvent) => void): void;
    start(): void;
    stop(): void;
    get isRunning(): boolean;
}
