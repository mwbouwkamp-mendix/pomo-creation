import * as units from "../internal/units";
/**
 * Class which allows to serialize a given model part as TypeScript code that constructs that model piece.
 * Limitations:
 *  - Can only do elements in one (model) unit.
 */
export declare class JavaScriptSerializer {
    /**
     * Given a unit, generates JavaScript(/TypeScript) code that would re-create the same unit.
     * Useful as scaffolding for model generators.
     */
    static serializeToJs(unit: units.IAbstractUnit): string;
    constructor(_unit: units.IAbstractUnit);
    private schedule;
    private source;
}
