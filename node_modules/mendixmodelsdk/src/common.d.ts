/**
 * Module containing several often-used interfaces.
 */
export declare namespace common {
    /**
     * Representation of a point.
     */
    interface IPoint {
        x: number;
        y: number;
    }
    /**
     * Representation of a size, e.g. of an entity box.
     */
    interface ISize {
        width: number;
        height: number;
    }
    /**
     * Representation of an RGB color.
     */
    interface IColor {
        red: number;
        green: number;
        blue: number;
    }
    /**
     * Callback interface returning nothing, not even an error.
     */
    interface IVoidCallback {
        (): void;
    }
    /**
     * Callback interface returning an error at most.
     */
    interface IErrorCallback {
        (err: any): void;
    }
    /**
     * Callback interface returning data of some type `T`.
     */
    interface ICallback<T> {
        (data: T): void;
    }
}
