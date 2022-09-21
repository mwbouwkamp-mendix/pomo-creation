export declare class EventEmitter<T> {
    private eventEmitter;
    on<E extends Extract<keyof T, string>>(eventType: E, callback: (data: T[E]) => void): void;
    emit<E extends Extract<keyof T, string>>(eventType: E, value: T[E]): void;
}
