/**
 * Represents an object that is used for printing information about what the Platform SDK is doing.
 * To set the logger, call {@link setLogger}. By default the console logger is used.
 */
export interface ILogger {
    /** Log a message on info level. */
    info(message?: string, ...optionalParams: any[]): any;
    /** Log a message on warning level. */
    warn(message?: string, ...optionalParams: any[]): any;
    /** Log a message on error level. */
    error(message?: string, ...optionalParams: any[]): any;
}
/**
 * Override the logger object that is used to print information about what the SDK is doing.
 * To disable logging, pass `undefined` as the logger.
 */
export declare function setLogger(loggerObject: ILogger | undefined): void;
/**
 * Enable logging through the console. To set a specific logger, use {@link setLogger}.
 */
export declare function enableLogger(): void;
/**
 * Disables all logging. To enable logging, use {@link enableLogger}.
 */
export declare function disableLogger(): void;
