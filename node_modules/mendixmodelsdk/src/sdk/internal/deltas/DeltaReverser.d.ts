import { Delta } from "./deltas";
import { AbstractModel } from "../AbstractModel";
export declare class DeltaReverser {
    model: AbstractModel;
    constructor(model: AbstractModel);
    reverse(delta: Delta): Delta;
    private reverseUpdatePropertyValueDelta;
    private reverseCreateElementTreeDelta;
    private reverseDeleteElementDelta;
    private reverseAttachElementDelta;
    private reverseDetachElementDelta;
    private reverseCreateUnitTreeDelta;
    private reverseDeleteUnitDelta;
    private getUnit;
}
