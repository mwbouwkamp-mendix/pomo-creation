"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.retry = void 0;
async function delay(duration) {
    return new Promise(resolve => setTimeout(resolve, duration));
}
/** @internal */
async function retry(fn, options) {
    for (let i = 0; i < (options.maxAttempts ?? Number.POSITIVE_INFINITY); i++) {
        const isLastAttempt = options.maxAttempts === i + 1;
        try {
            return await fn();
        }
        catch (error) {
            if (options.shouldRetry) {
                const shouldRetryResult = await options.shouldRetry(error, i + 1);
                if (typeof shouldRetryResult === "object") {
                    return shouldRetryResult.returnValue;
                }
                else if (!shouldRetryResult) {
                    throw error;
                }
            }
            if (isLastAttempt) {
                if (options.onFinalError) {
                    return options.onFinalError(error);
                }
                throw error;
            }
            if (options.retryDelayMs) {
                await delay(options.retryDelayMs);
            }
            if (options.onRetry) {
                options.onRetry(error);
            }
        }
    }
    // Typescript pleasing below
    throw new Error();
}
exports.retry = retry;
//# sourceMappingURL=retry.js.map