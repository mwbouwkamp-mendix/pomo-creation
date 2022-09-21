"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkingCopyEventReceiver = void 0;
const EventSource = require("eventsource");
const EventEmitter_1 = require("../EventEmitter");
class WorkingCopyEventReceiver {
    constructor(workingCopyId, client, errorHandler) {
        this.workingCopyId = workingCopyId;
        this.client = client;
        this.errorHandler = errorHandler;
        this.workingCopyDataEventEmitter = new EventEmitter_1.EventEmitter();
        this.buildResultEventEmitter = new EventEmitter_1.EventEmitter();
        this.eventSource = null;
    }
    onWorkingCopyDataEvent(callback) {
        this.workingCopyDataEventEmitter.on("WorkingCopyData", callback);
    }
    onBuildResultEvent(callback) {
        this.buildResultEventEmitter.on("BuildResult", callback);
    }
    start() {
        if (this.eventSource) {
            return;
        }
        this.eventSource = this.client.getWorkingCopyEventSource(this.workingCopyId);
        const localEventSource = this.eventSource;
        this.eventSource.onerror = event => {
            // We need to know whether the error resulted in a failed connection, or a temporarily interrupted one.
            // If it is a temporary interruption — as can occur if the computer was asleep, or the server closes the connection — the browser will try again.
            // Reference: https://www.sitepoint.com/server-sent-events/
            if (this.eventSource !== localEventSource || localEventSource.readyState === EventSource.CONNECTING) {
                return;
            }
            this.errorHandler.handleError(`WorkingCopyEventReceiver received an error event from the EventSource: ${JSON.stringify(event)}`, undefined);
        };
        this.eventSource.addEventListener("workingCopyData", (event) => {
            try {
                const workingCopyData = JSON.parse(event.data);
                if (!workingCopyData) {
                    throw new Error("Invalid working copy data: " + workingCopyData);
                }
                this.workingCopyDataEventEmitter.emit("WorkingCopyData", { type: "workingCopyData", data: workingCopyData });
            }
            catch (err) {
                this.errorHandler.handleError(`An error occurred while processing the incoming event: ${err.message}`, undefined);
            }
        });
        this.eventSource.addEventListener("buildResult", (event) => {
            try {
                const buildResultData = JSON.parse(event.data);
                if (!buildResultData) {
                    throw new Error("Invalid build result data: " + buildResultData);
                }
                this.buildResultEventEmitter.emit("BuildResult", { type: "buildResult", data: buildResultData });
            }
            catch (err) {
                this.errorHandler.handleError(`An error occurred while processing the incoming event: ${err.message}`, undefined);
            }
        });
    }
    stop() {
        if (this.eventSource) {
            this.eventSource.close();
            this.eventSource = null;
        }
    }
    get isRunning() {
        return !!this.eventSource;
    }
}
exports.WorkingCopyEventReceiver = WorkingCopyEventReceiver;
//# sourceMappingURL=WorkingCopyEventReceiver.js.map