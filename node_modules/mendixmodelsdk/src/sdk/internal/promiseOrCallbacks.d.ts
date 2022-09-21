import { common } from "../../common";
export declare function promiseOrCallbacks<T>(action: (resolve: (result: T) => void, reject: (err: any) => void) => void, callback: common.ICallback<T> | undefined, errorCallback: common.IErrorCallback | undefined): Promise<T> | void;
