import { IWorkingCopy } from "../transportInterfaces";
export interface IWorkingCopyDataEvent {
    type: "workingCopyData";
    data: IWorkingCopy;
}
export declare type BuildResultStatus = "Failure" | "Success";
export interface IBuildResultEvent {
    type: "buildResult";
    data: {
        eventId: number;
        status: BuildResultStatus;
        message: string;
        problems: any[];
    };
}
export declare type IWorkingCopyEvent = IWorkingCopyDataEvent | IBuildResultEvent;
