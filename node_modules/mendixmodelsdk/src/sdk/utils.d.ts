/**
 * The `utils` module contains various utility interfaces and functions.
 */
export declare namespace utils {
    /**
     * Generates a random UUID to set the ID of an element or unit to.
     * There is no intrinsic ID collision detection/avoidance mechanism but it's good enough in practice.
     */
    function randomUuid(): string;
    /**
     * Flattens an array of arrays of items of type `T`, returning a single array
     * that consists of the concatenation of the original arrays.
     */
    function flatten<T>(array: T[][]): T[];
    /**
     * Combines the given `parts` and returns them as an URL, avoiding duplicate slashes.
     */
    function combineUrl(...parts: string[]): string;
    interface IMap<T> {
        [key: string]: T;
    }
    function removeFromArray<T>(list: T[], item: T): void;
    function assertNotNull<T>(value: T, propertyName: string, listy?: boolean): void;
    function shallowEquals(first: any[], second: any[]): boolean;
    function isObject(data: any): boolean;
    function isBrowser(): boolean;
}
