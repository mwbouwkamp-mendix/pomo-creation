"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeltaManager = void 0;
const mobx_1 = require("mobx");
const DeltaSender_1 = require("./DeltaSender");
const DeltaReverser_1 = require("./DeltaReverser");
const DeltaProcessor_1 = require("./DeltaProcessor");
const deltaUtils_1 = require("./deltaUtils");
const TransactionManager_1 = require("./TransactionManager");
const EventEmitter_1 = require("../EventEmitter");
const units_1 = require("../units");
class DeltaManager {
    constructor(model) {
        this.model = model;
        /** @internal */
        this.queue = [];
        this.flushCallbacks = [];
        this.errorCallbacks = [];
        this.eventEmitter = new EventEmitter_1.EventEmitter();
        this.deltaSender = new DeltaSender_1.DeltaSender(model, () => this.callFlushCallbacks(), error => this.callErrorCallbacks(error));
        this.deltaReverser = new DeltaReverser_1.DeltaReverser(model);
        this.deltaProcessor = new DeltaProcessor_1.DeltaProcessor(model);
        this.transactionManager = new TransactionManager_1.TransactionManager(model, error => this.callErrorCallbacks(error));
        this.transactionManager.onCommitted(() => this.handleTransactionCommited());
        this.transactionManager.onRollback(() => this.handleTransactionRollback());
    }
    /**
     * Closes the "connection" with the Model API Server in the sense that
     * pending delta requests are processed, and that afterwards the given
     * `callback` will be called.
     * This function can only be called once.
     */
    closeConnection(closeCallback, errorCallback) {
        this.flushCallbacks.push(closeCallback);
        if (errorCallback) {
            this.errorCallbacks.push(errorCallback);
        }
        // If closeConnection is called in the same tick that deltas have been added, send the deltas.
        this.transactionManager.commit();
        this.deltaSender.closeConnection();
    }
    /**
     * Ensure all pending delta requests are processed in Model Server
     */
    flushChanges(flushCallback, errorCallback) {
        this.flushCallbacks.push(flushCallback);
        if (errorCallback) {
            this.errorCallbacks.push(errorCallback);
        }
        // If flushChanges is called in the same tick that deltas have been added, send the deltas.
        this.transactionManager.commit();
        this.deltaSender.flush();
    }
    /**
     * Pushes the given `delta` on the queue for scheduling/processing.
     */
    push(delta) {
        this.queue.push({
            delta: delta,
            reverseDelta: this.getReverseDelta(delta)
        });
        this.eventEmitter.emit("NewDelta", delta);
        this.transactionManager.deltaReceived(delta);
    }
    processDeltas(deltas) {
        this.deltaProcessor.processDeltas((0, deltaUtils_1.removeUselessDeltas)(deltas));
        this.deltaSender.scheduleDeltas(deltas);
    }
    reverseDelta(delta) {
        return this.deltaReverser.reverse(delta);
    }
    beginTransaction(commitCurrentImplicitTransaction) {
        return this.transactionManager.beginTransaction(commitCurrentImplicitTransaction);
    }
    onNewDelta(callback) {
        this.eventEmitter.on("NewDelta", callback);
    }
    onTransactionCommitted(callback) {
        this.eventEmitter.on("TransactionCommitted", callback);
    }
    onTransactionRollback(callback) {
        this.eventEmitter.on("TransactionRollback", callback);
    }
    handleTransactionCommited() {
        this.deltaSender.scheduleDeltas(this.queue.map(change => change.delta));
        this.queue.splice(0, this.queue.length);
        this.eventEmitter.emit("TransactionCommitted", undefined);
    }
    handleTransactionRollback() {
        const reverseDeltas = this.queue.map(change => change.reverseDelta).reverse();
        const error = reverseDeltas.filter(delta => delta instanceof Error)[0];
        if (error) {
            throw error;
        }
        this.deltaProcessor.processDeltas((0, deltaUtils_1.removeUselessDeltas)(reverseDeltas), true);
        this.queue.splice(0, this.queue.length);
        this.eventEmitter.emit("TransactionRollback", undefined);
    }
    getReverseDelta(delta) {
        const unit = this.model._units[delta.unitId];
        if (unit instanceof units_1.StructuralUnit) {
            return new Error("Can't rollback changes in structural units.");
        }
        else if (delta.deltaType === "DELETE_UNIT" && !unit.isLoaded) {
            return new Error("Can't rollback deleting non-loaded units.");
        }
        else {
            return this.reverseDelta(delta);
        }
    }
    callFlushCallbacks() {
        this.flushCallbacks.slice().forEach(flushCallback => {
            flushCallback();
            this.flushCallbacks.splice(this.flushCallbacks.indexOf(flushCallback), 1);
        });
    }
    callErrorCallbacks(error) {
        if (this.errorCallbacks.length > 0) {
            this.errorCallbacks.slice().forEach(errorCallback => {
                errorCallback(error);
                this.errorCallbacks.splice(this.errorCallbacks.indexOf(errorCallback), 1);
            });
        }
        else {
            this.model._errorHandler(error);
        }
    }
}
__decorate([
    mobx_1.action
], DeltaManager.prototype, "handleTransactionRollback", null);
exports.DeltaManager = DeltaManager;
//# sourceMappingURL=DeltaManager.js.map