import { Delta } from "./deltas";
import { AbstractModel } from "../AbstractModel";
export declare class DeltaProcessor {
    model: AbstractModel;
    constructor(model: AbstractModel);
    processDeltas(deltas: Delta[], isReverting?: boolean): void;
    private processUpdatePropertyValueDelta;
    private processMutator;
    private processCreateElementTreeDelta;
    private processDeleteElementDelta;
    private processAttachElementDelta;
    private processDetachElementDelta;
    private processCreateUnitTreeDelta;
    private processDeleteUnitDelta;
    private getUnit;
}
