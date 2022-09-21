import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
import { projects } from "./projects";
/**
 * @ignore
 */
export declare namespace mlmappings {
    class TensorType extends internal.AbstractEnum {
        static UnsignedInteger8Tensor: TensorType;
        static UnsignedInteger16Tensor: TensorType;
        static Integer8Tensor: TensorType;
        static Integer16Tensor: TensorType;
        static Integer32Tensor: TensorType;
        static Integer64Tensor: TensorType;
        static Float16Tensor: TensorType;
        static Float32Tensor: TensorType;
        static Float64Tensor: TensorType;
        static Complex64Tensor: TensorType;
        static Complex128Tensor: TensorType;
        static StringTensor: TensorType;
        static BooleanTensor: TensorType;
        static UnknownTensor: TensorType;
        protected qualifiedTsTypeName: string;
    }
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `MLMappings`.
     */
    /**
     * See: {@link https://docs.mendix.com/refguide/ml-mapping-documents relevant section in reference guide}
     *
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.17.0: introduced
     */
    interface IMLMappingDocument extends projects.IDocument {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        asLoaded(): MLMappingDocument;
        load(callback: (element: MLMappingDocument) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<MLMappingDocument>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/ml-mapping-documents relevant section in reference guide}
     *
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.17.0: introduced
     */
    class MLMappingDocument extends projects.Document implements IMLMappingDocument {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFolderBase(): projects.FolderBase;
        get mlModelFileName(): string;
        set mlModelFileName(newValue: string);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get mlModelMappings(): MLModelMappings | null;
        set mlModelMappings(newValue: MLModelMappings | null);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
        /**
         * Creates a new MLMappingDocument unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container: projects.IFolderBase): MLMappingDocument;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.17.0: introduced
     */
    class MLModelEntityMappings extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsMLModelMappings(): MLModelMappings;
        get entity(): domainmodels.IEntity | null;
        set entity(newValue: domainmodels.IEntity | null);
        get entityQualifiedName(): string | null;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get mappings(): internal.IList<TensorMappingElement>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MLModelEntityMappings instance in the SDK and on the server.
         * The new MLModelEntityMappings will be automatically stored in the 'input' property
         * of the parent MLModelMappings element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.17.0 and higher
         */
        static createInMLModelMappingsUnderInput(container: MLModelMappings): MLModelEntityMappings;
        /**
         * Creates and returns a new MLModelEntityMappings instance in the SDK and on the server.
         * The new MLModelEntityMappings will be automatically stored in the 'output' property
         * of the parent MLModelMappings element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.17.0 and higher
         */
        static createInMLModelMappingsUnderOutput(container: MLModelMappings): MLModelEntityMappings;
        /**
         * Creates and returns a new MLModelEntityMappings instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MLModelEntityMappings;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.17.0: introduced
     */
    class MLModelMappings extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsMLMappingDocument(): MLMappingDocument;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get input(): MLModelEntityMappings | null;
        set input(newValue: MLModelEntityMappings | null);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get output(): MLModelEntityMappings | null;
        set output(newValue: MLModelEntityMappings | null);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MLModelMappings instance in the SDK and on the server.
         * The new MLModelMappings will be automatically stored in the 'mlModelMappings' property
         * of the parent MLMappingDocument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.17.0 and higher
         */
        static createIn(container: MLMappingDocument): MLModelMappings;
        /**
         * Creates and returns a new MLModelMappings instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MLModelMappings;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.17.0: introduced
     */
    class TensorDimension extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsTensorMappingElement(): TensorMappingElement;
        get dimension(): number;
        set dimension(newValue: number);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new TensorDimension instance in the SDK and on the server.
         * The new TensorDimension will be automatically stored in the 'attributeShape' property
         * of the parent TensorMappingElement element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.17.0 and higher
         */
        static createInTensorMappingElementUnderAttributeShape(container: TensorMappingElement): TensorDimension;
        /**
         * Creates and returns a new TensorDimension instance in the SDK and on the server.
         * The new TensorDimension will be automatically stored in the 'tensorShape' property
         * of the parent TensorMappingElement element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.17.0 and higher
         */
        static createInTensorMappingElementUnderTensorShape(container: TensorMappingElement): TensorDimension;
        /**
         * Creates and returns a new TensorDimension instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): TensorDimension;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.17.0: introduced
     */
    class TensorMappingElement extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsMLModelEntityMappings(): MLModelEntityMappings;
        get tensorName(): string;
        set tensorName(newValue: string);
        get tensorType(): TensorType;
        set tensorType(newValue: TensorType);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get tensorShape(): internal.IList<TensorDimension>;
        get attributeName(): string;
        set attributeName(newValue: string);
        get attributeType(): domainmodels.AttributeType | null;
        set attributeType(newValue: domainmodels.AttributeType | null);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get attributeShape(): internal.IList<TensorDimension>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new TensorMappingElement instance in the SDK and on the server.
         * The new TensorMappingElement will be automatically stored in the 'mappings' property
         * of the parent MLModelEntityMappings element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.17.0 and higher
         */
        static createIn(container: MLModelEntityMappings): TensorMappingElement;
        /**
         * Creates and returns a new TensorMappingElement instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): TensorMappingElement;
    }
}
import { domainmodels } from "./domainmodels";
import { IModel } from "./base-model";
