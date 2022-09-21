"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeltaSender = void 0;
const deltaUtils_1 = require("./deltaUtils");
class DeltaSender {
    constructor(model, flushCallback, errorCallback) {
        this.model = model;
        this.flushCallback = flushCallback;
        this.errorCallback = errorCallback;
        this.isClosing = false;
        this.hasError = false;
        this.queue = [];
        this.pending = false;
    }
    closeConnection() {
        if (this.isClosing) {
            throw new Error("closeConnection already called");
        }
        this.isClosing = true;
        this.flush();
    }
    flush() {
        if (!this.pending) {
            this.flushCallback();
        }
    }
    scheduleDeltas(deltas) {
        if (this.isClosing) {
            throw new Error("Deltas rejected; connection has closed");
        }
        if (this.hasError) {
            throw new Error("Deltas rejected; an error occurred earlier while sending deltas");
        }
        this.queue.push(deltas);
        if (!this.pending) {
            this.pending = true;
            // We're not interested in the result of this Promise. It already calls the callbacks when it's done.
            /* tslint:disable-next-line:no-floating-promises */
            this.processQueue();
        }
    }
    async processQueue() {
        while (this.queue.length > 0 && !this.hasError) {
            let lastEventId = undefined;
            try {
                this.model.startPendingChange();
                lastEventId = await this.sendDeltas((0, deltaUtils_1.removeUselessDeltas)(this.queue.shift()));
            }
            catch (error) {
                this.hasError = true;
                this.errorCallback(error);
            }
            finally {
                this.model.completePendingChange(lastEventId);
            }
        }
        this.pending = false;
        if (!this.hasError) {
            this.flushCallback();
        }
    }
    async sendDeltas(deltas) {
        return new Promise((resolve, reject) => {
            this.model._client.sendDeltas(this.model.workingCopy.id, deltas, result => {
                if (result.firstError) {
                    reject(result.firstError);
                }
                else {
                    resolve(result.eventId);
                }
            }, err => {
                reject(err);
            });
        });
    }
}
exports.DeltaSender = DeltaSender;
//# sourceMappingURL=DeltaSender.js.map