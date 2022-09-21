import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
export declare namespace datatypes {
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `DataTypes`.
     */
    /**
     * See: {@link https://docs.mendix.com/refguide/data-types relevant section in reference guide}
     *
     * In version 7.9.0: introduced
     */
    interface IDataType extends internal.IElement {
        readonly model: IModel;
        readonly containerAsAppServiceAction: appservices.IAppServiceAction;
        readonly containerAsAppServiceActionParameter: appservices.IAppServiceActionParameter;
        readonly containerAsConstant: constants.IConstant;
        readonly containerAsDataSetParameter: datasets.IDataSetParameter;
        readonly containerAsDocumentTemplateParameter: documenttemplates.IDocumentTemplateParameter;
        readonly containerAsImportMapping: importmappings.IImportMapping;
        readonly containerAsMicroflowBase: microflows.IMicroflowBase;
        readonly containerAsMicroflowParameterBase: microflows.IMicroflowParameterBase;
        readonly containerAsPageParameter: pages.IPageParameter;
        asLoaded(): DataType;
        load(callback: (element: DataType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<DataType>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/data-types relevant section in reference guide}
     *
     * In version 7.9.0: introduced
     */
    abstract class DataType extends internal.Element<IModel> implements IDataType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsAppServiceAction(): appservices.AppServiceAction;
        get containerAsAppServiceActionParameter(): appservices.AppServiceActionParameter;
        get containerAsConstant(): constants.Constant;
        get containerAsDataSetColumn(): datasets.DataSetColumn;
        get containerAsDataSetParameter(): datasets.DataSetParameter;
        get containerAsDocumentTemplateParameter(): documenttemplates.DocumentTemplateParameter;
        get containerAsImportMapping(): importmappings.ImportMapping;
        get containerAsValueMappingElement(): mappings.ValueMappingElement;
        get containerAsCreateVariableAction(): microflows.CreateVariableAction;
        get containerAsMLModelCallParameterMapping(): microflows.MLModelCallParameterMapping;
        get containerAsMicroflowBase(): microflows.MicroflowBase;
        get containerAsMicroflowParameterBase(): microflows.MicroflowParameterBase;
        get containerAsMicroflowParameterObject(): microflows.MicroflowParameterObject;
        get containerAsResultHandling(): microflows.ResultHandling;
        get containerAsPageParameter(): pages.PageParameter;
        get containerAsRestOperationParameter(): rest.RestOperationParameter;
        get containerAsPublishedOperation(): webservices.PublishedOperation;
        get containerAsPublishedParameter(): webservices.PublishedParameter;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 7.9.0: introduced
     */
    interface IBinaryType extends IDataType {
        readonly model: IModel;
        readonly containerAsAppServiceAction: appservices.IAppServiceAction;
        readonly containerAsAppServiceActionParameter: appservices.IAppServiceActionParameter;
        readonly containerAsConstant: constants.IConstant;
        readonly containerAsDataSetParameter: datasets.IDataSetParameter;
        readonly containerAsDocumentTemplateParameter: documenttemplates.IDocumentTemplateParameter;
        readonly containerAsImportMapping: importmappings.IImportMapping;
        readonly containerAsMicroflowBase: microflows.IMicroflowBase;
        readonly containerAsMicroflowParameterBase: microflows.IMicroflowParameterBase;
        readonly containerAsPageParameter: pages.IPageParameter;
        asLoaded(): BinaryType;
        load(callback: (element: BinaryType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<BinaryType>;
    }
    /**
     * In version 7.9.0: introduced
     */
    class BinaryType extends DataType implements IBinaryType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsAppServiceAction(): appservices.AppServiceAction;
        get containerAsAppServiceActionParameter(): appservices.AppServiceActionParameter;
        get containerAsConstant(): constants.Constant;
        get containerAsDataSetColumn(): datasets.DataSetColumn;
        get containerAsDataSetParameter(): datasets.DataSetParameter;
        get containerAsDocumentTemplateParameter(): documenttemplates.DocumentTemplateParameter;
        get containerAsImportMapping(): importmappings.ImportMapping;
        get containerAsValueMappingElement(): mappings.ValueMappingElement;
        get containerAsCreateVariableAction(): microflows.CreateVariableAction;
        get containerAsMLModelCallParameterMapping(): microflows.MLModelCallParameterMapping;
        get containerAsMicroflowBase(): microflows.MicroflowBase;
        get containerAsMicroflowParameterBase(): microflows.MicroflowParameterBase;
        get containerAsMicroflowParameterObject(): microflows.MicroflowParameterObject;
        get containerAsResultHandling(): microflows.ResultHandling;
        get containerAsPageParameter(): pages.PageParameter;
        get containerAsRestOperationParameter(): rest.RestOperationParameter;
        get containerAsPublishedOperation(): webservices.PublishedOperation;
        get containerAsPublishedParameter(): webservices.PublishedParameter;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new BinaryType instance in the SDK and on the server.
         * The new BinaryType will be automatically stored in the 'actionReturnType' property
         * of the parent appservices.AppServiceAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceActionUnderActionReturnType(container: appservices.AppServiceAction): BinaryType;
        /**
         * Creates and returns a new BinaryType instance in the SDK and on the server.
         * The new BinaryType will be automatically stored in the 'parameterType' property
         * of the parent appservices.AppServiceActionParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceActionParameterUnderParameterType(container: appservices.AppServiceActionParameter): BinaryType;
        /**
         * Creates and returns a new BinaryType instance in the SDK and on the server.
         * The new BinaryType will be automatically stored in the 'type' property
         * of the parent constants.Constant element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInConstantUnderType(container: constants.Constant): BinaryType;
        /**
         * Creates and returns a new BinaryType instance in the SDK and on the server.
         * The new BinaryType will be automatically stored in the 'columnType' property
         * of the parent datasets.DataSetColumn element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDataSetColumnUnderColumnType(container: datasets.DataSetColumn): BinaryType;
        /**
         * Creates and returns a new BinaryType instance in the SDK and on the server.
         * The new BinaryType will be automatically stored in the 'parameterType' property
         * of the parent datasets.DataSetParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDataSetParameterUnderParameterType(container: datasets.DataSetParameter): BinaryType;
        /**
         * Creates and returns a new BinaryType instance in the SDK and on the server.
         * The new BinaryType will be automatically stored in the 'parameterType' property
         * of the parent documenttemplates.DocumentTemplateParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDocumentTemplateParameterUnderParameterType(container: documenttemplates.DocumentTemplateParameter): BinaryType;
        /**
         * Creates and returns a new BinaryType instance in the SDK and on the server.
         * The new BinaryType will be automatically stored in the 'parameterType' property
         * of the parent importmappings.ImportMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.16.0 and higher
         */
        static createInImportMappingUnderParameterType(container: importmappings.ImportMapping): BinaryType;
        /**
         * Creates and returns a new BinaryType instance in the SDK and on the server.
         * The new BinaryType will be automatically stored in the 'type' property
         * of the parent mappings.ValueMappingElement element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInValueMappingElementUnderType(container: mappings.ValueMappingElement): BinaryType;
        /**
         * Creates and returns a new BinaryType instance in the SDK and on the server.
         * The new BinaryType will be automatically stored in the 'variableType' property
         * of the parent microflows.CreateVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInCreateVariableActionUnderVariableType(container: microflows.CreateVariableAction): BinaryType;
        /**
         * Creates and returns a new BinaryType instance in the SDK and on the server.
         * The new BinaryType will be automatically stored in the 'parameterType' property
         * of the parent microflows.MLModelCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.10.0 to 9.17.0
         */
        static createInMLModelCallParameterMappingUnderParameterType(container: microflows.MLModelCallParameterMapping): BinaryType;
        /**
         * Creates and returns a new BinaryType instance in the SDK and on the server.
         * The new BinaryType will be automatically stored in the 'microflowReturnType' property
         * of the parent microflows.MicroflowBase element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowBaseUnderMicroflowReturnType(container: microflows.MicroflowBase): BinaryType;
        /**
         * Creates and returns a new BinaryType instance in the SDK and on the server.
         * The new BinaryType will be automatically stored in the 'parameterType' property
         * of the parent microflows.MicroflowParameterBase element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowParameterBaseUnderParameterType(container: microflows.MicroflowParameterBase): BinaryType;
        /**
         * Creates and returns a new BinaryType instance in the SDK and on the server.
         * The new BinaryType will be automatically stored in the 'variableType' property
         * of the parent microflows.MicroflowParameterObject element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowParameterObjectUnderVariableType(container: microflows.MicroflowParameterObject): BinaryType;
        /**
         * Creates and returns a new BinaryType instance in the SDK and on the server.
         * The new BinaryType will be automatically stored in the 'variableType' property
         * of the parent microflows.ResultHandling element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInResultHandlingUnderVariableType(container: microflows.ResultHandling): BinaryType;
        /**
         * Creates and returns a new BinaryType instance in the SDK and on the server.
         * The new BinaryType will be automatically stored in the 'parameterType' property
         * of the parent pages.PageParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.4.0 and higher
         */
        static createInPageParameterUnderParameterType(container: pages.PageParameter): BinaryType;
        /**
         * Creates and returns a new BinaryType instance in the SDK and on the server.
         * The new BinaryType will be automatically stored in the 'type' property
         * of the parent rest.RestOperationParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.17.0 and higher
         */
        static createInRestOperationParameterUnderType(container: rest.RestOperationParameter): BinaryType;
        /**
         * Creates and returns a new BinaryType instance in the SDK and on the server.
         * The new BinaryType will be automatically stored in the 'operationReturnType' property
         * of the parent webservices.PublishedOperation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInPublishedOperationUnderOperationReturnType(container: webservices.PublishedOperation): BinaryType;
        /**
         * Creates and returns a new BinaryType instance in the SDK and on the server.
         * The new BinaryType will be automatically stored in the 'parameterType' property
         * of the parent webservices.PublishedParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInPublishedParameterUnderParameterType(container: webservices.PublishedParameter): BinaryType;
        /**
         * Creates and returns a new BinaryType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): BinaryType;
    }
    /**
     * In version 7.9.0: introduced
     */
    interface IBooleanType extends IDataType {
        readonly model: IModel;
        readonly containerAsAppServiceAction: appservices.IAppServiceAction;
        readonly containerAsAppServiceActionParameter: appservices.IAppServiceActionParameter;
        readonly containerAsConstant: constants.IConstant;
        readonly containerAsDataSetParameter: datasets.IDataSetParameter;
        readonly containerAsDocumentTemplateParameter: documenttemplates.IDocumentTemplateParameter;
        readonly containerAsImportMapping: importmappings.IImportMapping;
        readonly containerAsMicroflowBase: microflows.IMicroflowBase;
        readonly containerAsMicroflowParameterBase: microflows.IMicroflowParameterBase;
        readonly containerAsPageParameter: pages.IPageParameter;
        asLoaded(): BooleanType;
        load(callback: (element: BooleanType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<BooleanType>;
    }
    /**
     * In version 7.9.0: introduced
     */
    class BooleanType extends DataType implements IBooleanType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsAppServiceAction(): appservices.AppServiceAction;
        get containerAsAppServiceActionParameter(): appservices.AppServiceActionParameter;
        get containerAsConstant(): constants.Constant;
        get containerAsDataSetColumn(): datasets.DataSetColumn;
        get containerAsDataSetParameter(): datasets.DataSetParameter;
        get containerAsDocumentTemplateParameter(): documenttemplates.DocumentTemplateParameter;
        get containerAsImportMapping(): importmappings.ImportMapping;
        get containerAsValueMappingElement(): mappings.ValueMappingElement;
        get containerAsCreateVariableAction(): microflows.CreateVariableAction;
        get containerAsMLModelCallParameterMapping(): microflows.MLModelCallParameterMapping;
        get containerAsMicroflowBase(): microflows.MicroflowBase;
        get containerAsMicroflowParameterBase(): microflows.MicroflowParameterBase;
        get containerAsMicroflowParameterObject(): microflows.MicroflowParameterObject;
        get containerAsResultHandling(): microflows.ResultHandling;
        get containerAsPageParameter(): pages.PageParameter;
        get containerAsRestOperationParameter(): rest.RestOperationParameter;
        get containerAsPublishedOperation(): webservices.PublishedOperation;
        get containerAsPublishedParameter(): webservices.PublishedParameter;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new BooleanType instance in the SDK and on the server.
         * The new BooleanType will be automatically stored in the 'actionReturnType' property
         * of the parent appservices.AppServiceAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceActionUnderActionReturnType(container: appservices.AppServiceAction): BooleanType;
        /**
         * Creates and returns a new BooleanType instance in the SDK and on the server.
         * The new BooleanType will be automatically stored in the 'parameterType' property
         * of the parent appservices.AppServiceActionParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceActionParameterUnderParameterType(container: appservices.AppServiceActionParameter): BooleanType;
        /**
         * Creates and returns a new BooleanType instance in the SDK and on the server.
         * The new BooleanType will be automatically stored in the 'type' property
         * of the parent constants.Constant element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInConstantUnderType(container: constants.Constant): BooleanType;
        /**
         * Creates and returns a new BooleanType instance in the SDK and on the server.
         * The new BooleanType will be automatically stored in the 'columnType' property
         * of the parent datasets.DataSetColumn element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDataSetColumnUnderColumnType(container: datasets.DataSetColumn): BooleanType;
        /**
         * Creates and returns a new BooleanType instance in the SDK and on the server.
         * The new BooleanType will be automatically stored in the 'parameterType' property
         * of the parent datasets.DataSetParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDataSetParameterUnderParameterType(container: datasets.DataSetParameter): BooleanType;
        /**
         * Creates and returns a new BooleanType instance in the SDK and on the server.
         * The new BooleanType will be automatically stored in the 'parameterType' property
         * of the parent documenttemplates.DocumentTemplateParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDocumentTemplateParameterUnderParameterType(container: documenttemplates.DocumentTemplateParameter): BooleanType;
        /**
         * Creates and returns a new BooleanType instance in the SDK and on the server.
         * The new BooleanType will be automatically stored in the 'parameterType' property
         * of the parent importmappings.ImportMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.16.0 and higher
         */
        static createInImportMappingUnderParameterType(container: importmappings.ImportMapping): BooleanType;
        /**
         * Creates and returns a new BooleanType instance in the SDK and on the server.
         * The new BooleanType will be automatically stored in the 'type' property
         * of the parent mappings.ValueMappingElement element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInValueMappingElementUnderType(container: mappings.ValueMappingElement): BooleanType;
        /**
         * Creates and returns a new BooleanType instance in the SDK and on the server.
         * The new BooleanType will be automatically stored in the 'variableType' property
         * of the parent microflows.CreateVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInCreateVariableActionUnderVariableType(container: microflows.CreateVariableAction): BooleanType;
        /**
         * Creates and returns a new BooleanType instance in the SDK and on the server.
         * The new BooleanType will be automatically stored in the 'parameterType' property
         * of the parent microflows.MLModelCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.10.0 to 9.17.0
         */
        static createInMLModelCallParameterMappingUnderParameterType(container: microflows.MLModelCallParameterMapping): BooleanType;
        /**
         * Creates and returns a new BooleanType instance in the SDK and on the server.
         * The new BooleanType will be automatically stored in the 'microflowReturnType' property
         * of the parent microflows.MicroflowBase element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowBaseUnderMicroflowReturnType(container: microflows.MicroflowBase): BooleanType;
        /**
         * Creates and returns a new BooleanType instance in the SDK and on the server.
         * The new BooleanType will be automatically stored in the 'parameterType' property
         * of the parent microflows.MicroflowParameterBase element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowParameterBaseUnderParameterType(container: microflows.MicroflowParameterBase): BooleanType;
        /**
         * Creates and returns a new BooleanType instance in the SDK and on the server.
         * The new BooleanType will be automatically stored in the 'variableType' property
         * of the parent microflows.MicroflowParameterObject element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowParameterObjectUnderVariableType(container: microflows.MicroflowParameterObject): BooleanType;
        /**
         * Creates and returns a new BooleanType instance in the SDK and on the server.
         * The new BooleanType will be automatically stored in the 'variableType' property
         * of the parent microflows.ResultHandling element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInResultHandlingUnderVariableType(container: microflows.ResultHandling): BooleanType;
        /**
         * Creates and returns a new BooleanType instance in the SDK and on the server.
         * The new BooleanType will be automatically stored in the 'parameterType' property
         * of the parent pages.PageParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.4.0 and higher
         */
        static createInPageParameterUnderParameterType(container: pages.PageParameter): BooleanType;
        /**
         * Creates and returns a new BooleanType instance in the SDK and on the server.
         * The new BooleanType will be automatically stored in the 'type' property
         * of the parent rest.RestOperationParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.17.0 and higher
         */
        static createInRestOperationParameterUnderType(container: rest.RestOperationParameter): BooleanType;
        /**
         * Creates and returns a new BooleanType instance in the SDK and on the server.
         * The new BooleanType will be automatically stored in the 'operationReturnType' property
         * of the parent webservices.PublishedOperation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInPublishedOperationUnderOperationReturnType(container: webservices.PublishedOperation): BooleanType;
        /**
         * Creates and returns a new BooleanType instance in the SDK and on the server.
         * The new BooleanType will be automatically stored in the 'parameterType' property
         * of the parent webservices.PublishedParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInPublishedParameterUnderParameterType(container: webservices.PublishedParameter): BooleanType;
        /**
         * Creates and returns a new BooleanType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): BooleanType;
    }
    /**
     * In version 7.9.0: introduced
     */
    interface IDateTimeType extends IDataType {
        readonly model: IModel;
        readonly containerAsAppServiceAction: appservices.IAppServiceAction;
        readonly containerAsAppServiceActionParameter: appservices.IAppServiceActionParameter;
        readonly containerAsConstant: constants.IConstant;
        readonly containerAsDataSetParameter: datasets.IDataSetParameter;
        readonly containerAsDocumentTemplateParameter: documenttemplates.IDocumentTemplateParameter;
        readonly containerAsImportMapping: importmappings.IImportMapping;
        readonly containerAsMicroflowBase: microflows.IMicroflowBase;
        readonly containerAsMicroflowParameterBase: microflows.IMicroflowParameterBase;
        readonly containerAsPageParameter: pages.IPageParameter;
        asLoaded(): DateTimeType;
        load(callback: (element: DateTimeType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<DateTimeType>;
    }
    /**
     * In version 7.9.0: introduced
     */
    class DateTimeType extends DataType implements IDateTimeType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsAppServiceAction(): appservices.AppServiceAction;
        get containerAsAppServiceActionParameter(): appservices.AppServiceActionParameter;
        get containerAsConstant(): constants.Constant;
        get containerAsDataSetColumn(): datasets.DataSetColumn;
        get containerAsDataSetParameter(): datasets.DataSetParameter;
        get containerAsDocumentTemplateParameter(): documenttemplates.DocumentTemplateParameter;
        get containerAsImportMapping(): importmappings.ImportMapping;
        get containerAsValueMappingElement(): mappings.ValueMappingElement;
        get containerAsCreateVariableAction(): microflows.CreateVariableAction;
        get containerAsMLModelCallParameterMapping(): microflows.MLModelCallParameterMapping;
        get containerAsMicroflowBase(): microflows.MicroflowBase;
        get containerAsMicroflowParameterBase(): microflows.MicroflowParameterBase;
        get containerAsMicroflowParameterObject(): microflows.MicroflowParameterObject;
        get containerAsResultHandling(): microflows.ResultHandling;
        get containerAsPageParameter(): pages.PageParameter;
        get containerAsRestOperationParameter(): rest.RestOperationParameter;
        get containerAsPublishedOperation(): webservices.PublishedOperation;
        get containerAsPublishedParameter(): webservices.PublishedParameter;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new DateTimeType instance in the SDK and on the server.
         * The new DateTimeType will be automatically stored in the 'actionReturnType' property
         * of the parent appservices.AppServiceAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceActionUnderActionReturnType(container: appservices.AppServiceAction): DateTimeType;
        /**
         * Creates and returns a new DateTimeType instance in the SDK and on the server.
         * The new DateTimeType will be automatically stored in the 'parameterType' property
         * of the parent appservices.AppServiceActionParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceActionParameterUnderParameterType(container: appservices.AppServiceActionParameter): DateTimeType;
        /**
         * Creates and returns a new DateTimeType instance in the SDK and on the server.
         * The new DateTimeType will be automatically stored in the 'type' property
         * of the parent constants.Constant element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInConstantUnderType(container: constants.Constant): DateTimeType;
        /**
         * Creates and returns a new DateTimeType instance in the SDK and on the server.
         * The new DateTimeType will be automatically stored in the 'columnType' property
         * of the parent datasets.DataSetColumn element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDataSetColumnUnderColumnType(container: datasets.DataSetColumn): DateTimeType;
        /**
         * Creates and returns a new DateTimeType instance in the SDK and on the server.
         * The new DateTimeType will be automatically stored in the 'parameterType' property
         * of the parent datasets.DataSetParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDataSetParameterUnderParameterType(container: datasets.DataSetParameter): DateTimeType;
        /**
         * Creates and returns a new DateTimeType instance in the SDK and on the server.
         * The new DateTimeType will be automatically stored in the 'parameterType' property
         * of the parent documenttemplates.DocumentTemplateParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDocumentTemplateParameterUnderParameterType(container: documenttemplates.DocumentTemplateParameter): DateTimeType;
        /**
         * Creates and returns a new DateTimeType instance in the SDK and on the server.
         * The new DateTimeType will be automatically stored in the 'parameterType' property
         * of the parent importmappings.ImportMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.16.0 and higher
         */
        static createInImportMappingUnderParameterType(container: importmappings.ImportMapping): DateTimeType;
        /**
         * Creates and returns a new DateTimeType instance in the SDK and on the server.
         * The new DateTimeType will be automatically stored in the 'type' property
         * of the parent mappings.ValueMappingElement element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInValueMappingElementUnderType(container: mappings.ValueMappingElement): DateTimeType;
        /**
         * Creates and returns a new DateTimeType instance in the SDK and on the server.
         * The new DateTimeType will be automatically stored in the 'variableType' property
         * of the parent microflows.CreateVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInCreateVariableActionUnderVariableType(container: microflows.CreateVariableAction): DateTimeType;
        /**
         * Creates and returns a new DateTimeType instance in the SDK and on the server.
         * The new DateTimeType will be automatically stored in the 'parameterType' property
         * of the parent microflows.MLModelCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.10.0 to 9.17.0
         */
        static createInMLModelCallParameterMappingUnderParameterType(container: microflows.MLModelCallParameterMapping): DateTimeType;
        /**
         * Creates and returns a new DateTimeType instance in the SDK and on the server.
         * The new DateTimeType will be automatically stored in the 'microflowReturnType' property
         * of the parent microflows.MicroflowBase element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowBaseUnderMicroflowReturnType(container: microflows.MicroflowBase): DateTimeType;
        /**
         * Creates and returns a new DateTimeType instance in the SDK and on the server.
         * The new DateTimeType will be automatically stored in the 'parameterType' property
         * of the parent microflows.MicroflowParameterBase element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowParameterBaseUnderParameterType(container: microflows.MicroflowParameterBase): DateTimeType;
        /**
         * Creates and returns a new DateTimeType instance in the SDK and on the server.
         * The new DateTimeType will be automatically stored in the 'variableType' property
         * of the parent microflows.MicroflowParameterObject element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowParameterObjectUnderVariableType(container: microflows.MicroflowParameterObject): DateTimeType;
        /**
         * Creates and returns a new DateTimeType instance in the SDK and on the server.
         * The new DateTimeType will be automatically stored in the 'variableType' property
         * of the parent microflows.ResultHandling element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInResultHandlingUnderVariableType(container: microflows.ResultHandling): DateTimeType;
        /**
         * Creates and returns a new DateTimeType instance in the SDK and on the server.
         * The new DateTimeType will be automatically stored in the 'parameterType' property
         * of the parent pages.PageParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.4.0 and higher
         */
        static createInPageParameterUnderParameterType(container: pages.PageParameter): DateTimeType;
        /**
         * Creates and returns a new DateTimeType instance in the SDK and on the server.
         * The new DateTimeType will be automatically stored in the 'type' property
         * of the parent rest.RestOperationParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.17.0 and higher
         */
        static createInRestOperationParameterUnderType(container: rest.RestOperationParameter): DateTimeType;
        /**
         * Creates and returns a new DateTimeType instance in the SDK and on the server.
         * The new DateTimeType will be automatically stored in the 'operationReturnType' property
         * of the parent webservices.PublishedOperation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInPublishedOperationUnderOperationReturnType(container: webservices.PublishedOperation): DateTimeType;
        /**
         * Creates and returns a new DateTimeType instance in the SDK and on the server.
         * The new DateTimeType will be automatically stored in the 'parameterType' property
         * of the parent webservices.PublishedParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInPublishedParameterUnderParameterType(container: webservices.PublishedParameter): DateTimeType;
        /**
         * Creates and returns a new DateTimeType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): DateTimeType;
    }
    /**
     * In version 7.9.0: introduced
     */
    interface IDecimalType extends IDataType {
        readonly model: IModel;
        readonly containerAsAppServiceAction: appservices.IAppServiceAction;
        readonly containerAsAppServiceActionParameter: appservices.IAppServiceActionParameter;
        readonly containerAsConstant: constants.IConstant;
        readonly containerAsDataSetParameter: datasets.IDataSetParameter;
        readonly containerAsDocumentTemplateParameter: documenttemplates.IDocumentTemplateParameter;
        readonly containerAsImportMapping: importmappings.IImportMapping;
        readonly containerAsMicroflowBase: microflows.IMicroflowBase;
        readonly containerAsMicroflowParameterBase: microflows.IMicroflowParameterBase;
        readonly containerAsPageParameter: pages.IPageParameter;
        asLoaded(): DecimalType;
        load(callback: (element: DecimalType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<DecimalType>;
    }
    /**
     * In version 7.9.0: introduced
     */
    class DecimalType extends DataType implements IDecimalType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsAppServiceAction(): appservices.AppServiceAction;
        get containerAsAppServiceActionParameter(): appservices.AppServiceActionParameter;
        get containerAsConstant(): constants.Constant;
        get containerAsDataSetColumn(): datasets.DataSetColumn;
        get containerAsDataSetParameter(): datasets.DataSetParameter;
        get containerAsDocumentTemplateParameter(): documenttemplates.DocumentTemplateParameter;
        get containerAsImportMapping(): importmappings.ImportMapping;
        get containerAsValueMappingElement(): mappings.ValueMappingElement;
        get containerAsCreateVariableAction(): microflows.CreateVariableAction;
        get containerAsMLModelCallParameterMapping(): microflows.MLModelCallParameterMapping;
        get containerAsMicroflowBase(): microflows.MicroflowBase;
        get containerAsMicroflowParameterBase(): microflows.MicroflowParameterBase;
        get containerAsMicroflowParameterObject(): microflows.MicroflowParameterObject;
        get containerAsResultHandling(): microflows.ResultHandling;
        get containerAsPageParameter(): pages.PageParameter;
        get containerAsRestOperationParameter(): rest.RestOperationParameter;
        get containerAsPublishedOperation(): webservices.PublishedOperation;
        get containerAsPublishedParameter(): webservices.PublishedParameter;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new DecimalType instance in the SDK and on the server.
         * The new DecimalType will be automatically stored in the 'actionReturnType' property
         * of the parent appservices.AppServiceAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceActionUnderActionReturnType(container: appservices.AppServiceAction): DecimalType;
        /**
         * Creates and returns a new DecimalType instance in the SDK and on the server.
         * The new DecimalType will be automatically stored in the 'parameterType' property
         * of the parent appservices.AppServiceActionParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceActionParameterUnderParameterType(container: appservices.AppServiceActionParameter): DecimalType;
        /**
         * Creates and returns a new DecimalType instance in the SDK and on the server.
         * The new DecimalType will be automatically stored in the 'type' property
         * of the parent constants.Constant element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInConstantUnderType(container: constants.Constant): DecimalType;
        /**
         * Creates and returns a new DecimalType instance in the SDK and on the server.
         * The new DecimalType will be automatically stored in the 'columnType' property
         * of the parent datasets.DataSetColumn element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDataSetColumnUnderColumnType(container: datasets.DataSetColumn): DecimalType;
        /**
         * Creates and returns a new DecimalType instance in the SDK and on the server.
         * The new DecimalType will be automatically stored in the 'parameterType' property
         * of the parent datasets.DataSetParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDataSetParameterUnderParameterType(container: datasets.DataSetParameter): DecimalType;
        /**
         * Creates and returns a new DecimalType instance in the SDK and on the server.
         * The new DecimalType will be automatically stored in the 'parameterType' property
         * of the parent documenttemplates.DocumentTemplateParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDocumentTemplateParameterUnderParameterType(container: documenttemplates.DocumentTemplateParameter): DecimalType;
        /**
         * Creates and returns a new DecimalType instance in the SDK and on the server.
         * The new DecimalType will be automatically stored in the 'parameterType' property
         * of the parent importmappings.ImportMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.16.0 and higher
         */
        static createInImportMappingUnderParameterType(container: importmappings.ImportMapping): DecimalType;
        /**
         * Creates and returns a new DecimalType instance in the SDK and on the server.
         * The new DecimalType will be automatically stored in the 'type' property
         * of the parent mappings.ValueMappingElement element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInValueMappingElementUnderType(container: mappings.ValueMappingElement): DecimalType;
        /**
         * Creates and returns a new DecimalType instance in the SDK and on the server.
         * The new DecimalType will be automatically stored in the 'variableType' property
         * of the parent microflows.CreateVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInCreateVariableActionUnderVariableType(container: microflows.CreateVariableAction): DecimalType;
        /**
         * Creates and returns a new DecimalType instance in the SDK and on the server.
         * The new DecimalType will be automatically stored in the 'parameterType' property
         * of the parent microflows.MLModelCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.10.0 to 9.17.0
         */
        static createInMLModelCallParameterMappingUnderParameterType(container: microflows.MLModelCallParameterMapping): DecimalType;
        /**
         * Creates and returns a new DecimalType instance in the SDK and on the server.
         * The new DecimalType will be automatically stored in the 'microflowReturnType' property
         * of the parent microflows.MicroflowBase element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowBaseUnderMicroflowReturnType(container: microflows.MicroflowBase): DecimalType;
        /**
         * Creates and returns a new DecimalType instance in the SDK and on the server.
         * The new DecimalType will be automatically stored in the 'parameterType' property
         * of the parent microflows.MicroflowParameterBase element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowParameterBaseUnderParameterType(container: microflows.MicroflowParameterBase): DecimalType;
        /**
         * Creates and returns a new DecimalType instance in the SDK and on the server.
         * The new DecimalType will be automatically stored in the 'variableType' property
         * of the parent microflows.MicroflowParameterObject element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowParameterObjectUnderVariableType(container: microflows.MicroflowParameterObject): DecimalType;
        /**
         * Creates and returns a new DecimalType instance in the SDK and on the server.
         * The new DecimalType will be automatically stored in the 'variableType' property
         * of the parent microflows.ResultHandling element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInResultHandlingUnderVariableType(container: microflows.ResultHandling): DecimalType;
        /**
         * Creates and returns a new DecimalType instance in the SDK and on the server.
         * The new DecimalType will be automatically stored in the 'parameterType' property
         * of the parent pages.PageParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.4.0 and higher
         */
        static createInPageParameterUnderParameterType(container: pages.PageParameter): DecimalType;
        /**
         * Creates and returns a new DecimalType instance in the SDK and on the server.
         * The new DecimalType will be automatically stored in the 'type' property
         * of the parent rest.RestOperationParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.17.0 and higher
         */
        static createInRestOperationParameterUnderType(container: rest.RestOperationParameter): DecimalType;
        /**
         * Creates and returns a new DecimalType instance in the SDK and on the server.
         * The new DecimalType will be automatically stored in the 'operationReturnType' property
         * of the parent webservices.PublishedOperation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInPublishedOperationUnderOperationReturnType(container: webservices.PublishedOperation): DecimalType;
        /**
         * Creates and returns a new DecimalType instance in the SDK and on the server.
         * The new DecimalType will be automatically stored in the 'parameterType' property
         * of the parent webservices.PublishedParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInPublishedParameterUnderParameterType(container: webservices.PublishedParameter): DecimalType;
        /**
         * Creates and returns a new DecimalType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): DecimalType;
    }
    /**
     * In version 7.9.0: introduced
     */
    interface IEmptyType extends IDataType {
        readonly model: IModel;
        readonly containerAsAppServiceAction: appservices.IAppServiceAction;
        readonly containerAsAppServiceActionParameter: appservices.IAppServiceActionParameter;
        readonly containerAsConstant: constants.IConstant;
        readonly containerAsDataSetParameter: datasets.IDataSetParameter;
        readonly containerAsDocumentTemplateParameter: documenttemplates.IDocumentTemplateParameter;
        readonly containerAsImportMapping: importmappings.IImportMapping;
        readonly containerAsMicroflowBase: microflows.IMicroflowBase;
        readonly containerAsMicroflowParameterBase: microflows.IMicroflowParameterBase;
        readonly containerAsPageParameter: pages.IPageParameter;
        asLoaded(): EmptyType;
        load(callback: (element: EmptyType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<EmptyType>;
    }
    /**
     * In version 7.9.0: introduced
     */
    class EmptyType extends DataType implements IEmptyType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsAppServiceAction(): appservices.AppServiceAction;
        get containerAsAppServiceActionParameter(): appservices.AppServiceActionParameter;
        get containerAsConstant(): constants.Constant;
        get containerAsDataSetColumn(): datasets.DataSetColumn;
        get containerAsDataSetParameter(): datasets.DataSetParameter;
        get containerAsDocumentTemplateParameter(): documenttemplates.DocumentTemplateParameter;
        get containerAsImportMapping(): importmappings.ImportMapping;
        get containerAsValueMappingElement(): mappings.ValueMappingElement;
        get containerAsCreateVariableAction(): microflows.CreateVariableAction;
        get containerAsMLModelCallParameterMapping(): microflows.MLModelCallParameterMapping;
        get containerAsMicroflowBase(): microflows.MicroflowBase;
        get containerAsMicroflowParameterBase(): microflows.MicroflowParameterBase;
        get containerAsMicroflowParameterObject(): microflows.MicroflowParameterObject;
        get containerAsResultHandling(): microflows.ResultHandling;
        get containerAsPageParameter(): pages.PageParameter;
        get containerAsRestOperationParameter(): rest.RestOperationParameter;
        get containerAsPublishedOperation(): webservices.PublishedOperation;
        get containerAsPublishedParameter(): webservices.PublishedParameter;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new EmptyType instance in the SDK and on the server.
         * The new EmptyType will be automatically stored in the 'actionReturnType' property
         * of the parent appservices.AppServiceAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceActionUnderActionReturnType(container: appservices.AppServiceAction): EmptyType;
        /**
         * Creates and returns a new EmptyType instance in the SDK and on the server.
         * The new EmptyType will be automatically stored in the 'parameterType' property
         * of the parent appservices.AppServiceActionParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceActionParameterUnderParameterType(container: appservices.AppServiceActionParameter): EmptyType;
        /**
         * Creates and returns a new EmptyType instance in the SDK and on the server.
         * The new EmptyType will be automatically stored in the 'type' property
         * of the parent constants.Constant element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInConstantUnderType(container: constants.Constant): EmptyType;
        /**
         * Creates and returns a new EmptyType instance in the SDK and on the server.
         * The new EmptyType will be automatically stored in the 'columnType' property
         * of the parent datasets.DataSetColumn element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDataSetColumnUnderColumnType(container: datasets.DataSetColumn): EmptyType;
        /**
         * Creates and returns a new EmptyType instance in the SDK and on the server.
         * The new EmptyType will be automatically stored in the 'parameterType' property
         * of the parent datasets.DataSetParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDataSetParameterUnderParameterType(container: datasets.DataSetParameter): EmptyType;
        /**
         * Creates and returns a new EmptyType instance in the SDK and on the server.
         * The new EmptyType will be automatically stored in the 'parameterType' property
         * of the parent documenttemplates.DocumentTemplateParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDocumentTemplateParameterUnderParameterType(container: documenttemplates.DocumentTemplateParameter): EmptyType;
        /**
         * Creates and returns a new EmptyType instance in the SDK and on the server.
         * The new EmptyType will be automatically stored in the 'parameterType' property
         * of the parent importmappings.ImportMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.16.0 and higher
         */
        static createInImportMappingUnderParameterType(container: importmappings.ImportMapping): EmptyType;
        /**
         * Creates and returns a new EmptyType instance in the SDK and on the server.
         * The new EmptyType will be automatically stored in the 'type' property
         * of the parent mappings.ValueMappingElement element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInValueMappingElementUnderType(container: mappings.ValueMappingElement): EmptyType;
        /**
         * Creates and returns a new EmptyType instance in the SDK and on the server.
         * The new EmptyType will be automatically stored in the 'variableType' property
         * of the parent microflows.CreateVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInCreateVariableActionUnderVariableType(container: microflows.CreateVariableAction): EmptyType;
        /**
         * Creates and returns a new EmptyType instance in the SDK and on the server.
         * The new EmptyType will be automatically stored in the 'parameterType' property
         * of the parent microflows.MLModelCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.10.0 to 9.17.0
         */
        static createInMLModelCallParameterMappingUnderParameterType(container: microflows.MLModelCallParameterMapping): EmptyType;
        /**
         * Creates and returns a new EmptyType instance in the SDK and on the server.
         * The new EmptyType will be automatically stored in the 'microflowReturnType' property
         * of the parent microflows.MicroflowBase element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowBaseUnderMicroflowReturnType(container: microflows.MicroflowBase): EmptyType;
        /**
         * Creates and returns a new EmptyType instance in the SDK and on the server.
         * The new EmptyType will be automatically stored in the 'parameterType' property
         * of the parent microflows.MicroflowParameterBase element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowParameterBaseUnderParameterType(container: microflows.MicroflowParameterBase): EmptyType;
        /**
         * Creates and returns a new EmptyType instance in the SDK and on the server.
         * The new EmptyType will be automatically stored in the 'variableType' property
         * of the parent microflows.MicroflowParameterObject element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowParameterObjectUnderVariableType(container: microflows.MicroflowParameterObject): EmptyType;
        /**
         * Creates and returns a new EmptyType instance in the SDK and on the server.
         * The new EmptyType will be automatically stored in the 'variableType' property
         * of the parent microflows.ResultHandling element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInResultHandlingUnderVariableType(container: microflows.ResultHandling): EmptyType;
        /**
         * Creates and returns a new EmptyType instance in the SDK and on the server.
         * The new EmptyType will be automatically stored in the 'parameterType' property
         * of the parent pages.PageParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.4.0 and higher
         */
        static createInPageParameterUnderParameterType(container: pages.PageParameter): EmptyType;
        /**
         * Creates and returns a new EmptyType instance in the SDK and on the server.
         * The new EmptyType will be automatically stored in the 'type' property
         * of the parent rest.RestOperationParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.17.0 and higher
         */
        static createInRestOperationParameterUnderType(container: rest.RestOperationParameter): EmptyType;
        /**
         * Creates and returns a new EmptyType instance in the SDK and on the server.
         * The new EmptyType will be automatically stored in the 'operationReturnType' property
         * of the parent webservices.PublishedOperation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInPublishedOperationUnderOperationReturnType(container: webservices.PublishedOperation): EmptyType;
        /**
         * Creates and returns a new EmptyType instance in the SDK and on the server.
         * The new EmptyType will be automatically stored in the 'parameterType' property
         * of the parent webservices.PublishedParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInPublishedParameterUnderParameterType(container: webservices.PublishedParameter): EmptyType;
        /**
         * Creates and returns a new EmptyType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): EmptyType;
    }
    /**
     * In version 7.9.0: introduced
     */
    interface IEntityType extends IDataType {
        readonly model: IModel;
        readonly containerAsAppServiceAction: appservices.IAppServiceAction;
        readonly containerAsAppServiceActionParameter: appservices.IAppServiceActionParameter;
        readonly containerAsConstant: constants.IConstant;
        readonly containerAsDataSetParameter: datasets.IDataSetParameter;
        readonly containerAsDocumentTemplateParameter: documenttemplates.IDocumentTemplateParameter;
        readonly containerAsImportMapping: importmappings.IImportMapping;
        readonly containerAsMicroflowBase: microflows.IMicroflowBase;
        readonly containerAsMicroflowParameterBase: microflows.IMicroflowParameterBase;
        readonly containerAsPageParameter: pages.IPageParameter;
        /**
         * This property is required and cannot be set to null.
         */
        readonly entity: domainmodels.IEntity;
        readonly entityQualifiedName: string;
        asLoaded(): EntityType;
        load(callback: (element: EntityType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<EntityType>;
    }
    /**
     * In version 7.9.0: introduced
     */
    abstract class EntityType extends DataType implements IEntityType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsAppServiceAction(): appservices.AppServiceAction;
        get containerAsAppServiceActionParameter(): appservices.AppServiceActionParameter;
        get containerAsConstant(): constants.Constant;
        get containerAsDataSetColumn(): datasets.DataSetColumn;
        get containerAsDataSetParameter(): datasets.DataSetParameter;
        get containerAsDocumentTemplateParameter(): documenttemplates.DocumentTemplateParameter;
        get containerAsImportMapping(): importmappings.ImportMapping;
        get containerAsValueMappingElement(): mappings.ValueMappingElement;
        get containerAsCreateVariableAction(): microflows.CreateVariableAction;
        get containerAsMLModelCallParameterMapping(): microflows.MLModelCallParameterMapping;
        get containerAsMicroflowBase(): microflows.MicroflowBase;
        get containerAsMicroflowParameterBase(): microflows.MicroflowParameterBase;
        get containerAsMicroflowParameterObject(): microflows.MicroflowParameterObject;
        get containerAsResultHandling(): microflows.ResultHandling;
        get containerAsPageParameter(): pages.PageParameter;
        get containerAsRestOperationParameter(): rest.RestOperationParameter;
        get containerAsPublishedOperation(): webservices.PublishedOperation;
        get containerAsPublishedParameter(): webservices.PublishedParameter;
        get entity(): domainmodels.IEntity;
        set entity(newValue: domainmodels.IEntity);
        get entityQualifiedName(): string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 7.9.0: introduced
     */
    interface IEnumerationType extends IDataType {
        readonly model: IModel;
        readonly containerAsAppServiceAction: appservices.IAppServiceAction;
        readonly containerAsAppServiceActionParameter: appservices.IAppServiceActionParameter;
        readonly containerAsConstant: constants.IConstant;
        readonly containerAsDataSetParameter: datasets.IDataSetParameter;
        readonly containerAsDocumentTemplateParameter: documenttemplates.IDocumentTemplateParameter;
        readonly containerAsImportMapping: importmappings.IImportMapping;
        readonly containerAsMicroflowBase: microflows.IMicroflowBase;
        readonly containerAsMicroflowParameterBase: microflows.IMicroflowParameterBase;
        readonly containerAsPageParameter: pages.IPageParameter;
        /**
         * This property is required and cannot be set to null.
         */
        readonly enumeration: enumerations.IEnumeration;
        readonly enumerationQualifiedName: string;
        asLoaded(): EnumerationType;
        load(callback: (element: EnumerationType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<EnumerationType>;
    }
    /**
     * In version 7.9.0: introduced
     */
    class EnumerationType extends DataType implements IEnumerationType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsAppServiceAction(): appservices.AppServiceAction;
        get containerAsAppServiceActionParameter(): appservices.AppServiceActionParameter;
        get containerAsConstant(): constants.Constant;
        get containerAsDataSetColumn(): datasets.DataSetColumn;
        get containerAsDataSetParameter(): datasets.DataSetParameter;
        get containerAsDocumentTemplateParameter(): documenttemplates.DocumentTemplateParameter;
        get containerAsImportMapping(): importmappings.ImportMapping;
        get containerAsValueMappingElement(): mappings.ValueMappingElement;
        get containerAsCreateVariableAction(): microflows.CreateVariableAction;
        get containerAsMLModelCallParameterMapping(): microflows.MLModelCallParameterMapping;
        get containerAsMicroflowBase(): microflows.MicroflowBase;
        get containerAsMicroflowParameterBase(): microflows.MicroflowParameterBase;
        get containerAsMicroflowParameterObject(): microflows.MicroflowParameterObject;
        get containerAsResultHandling(): microflows.ResultHandling;
        get containerAsPageParameter(): pages.PageParameter;
        get containerAsRestOperationParameter(): rest.RestOperationParameter;
        get containerAsPublishedOperation(): webservices.PublishedOperation;
        get containerAsPublishedParameter(): webservices.PublishedParameter;
        get enumeration(): enumerations.IEnumeration;
        set enumeration(newValue: enumerations.IEnumeration);
        get enumerationQualifiedName(): string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new EnumerationType instance in the SDK and on the server.
         * The new EnumerationType will be automatically stored in the 'actionReturnType' property
         * of the parent appservices.AppServiceAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceActionUnderActionReturnType(container: appservices.AppServiceAction): EnumerationType;
        /**
         * Creates and returns a new EnumerationType instance in the SDK and on the server.
         * The new EnumerationType will be automatically stored in the 'parameterType' property
         * of the parent appservices.AppServiceActionParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceActionParameterUnderParameterType(container: appservices.AppServiceActionParameter): EnumerationType;
        /**
         * Creates and returns a new EnumerationType instance in the SDK and on the server.
         * The new EnumerationType will be automatically stored in the 'type' property
         * of the parent constants.Constant element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInConstantUnderType(container: constants.Constant): EnumerationType;
        /**
         * Creates and returns a new EnumerationType instance in the SDK and on the server.
         * The new EnumerationType will be automatically stored in the 'columnType' property
         * of the parent datasets.DataSetColumn element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDataSetColumnUnderColumnType(container: datasets.DataSetColumn): EnumerationType;
        /**
         * Creates and returns a new EnumerationType instance in the SDK and on the server.
         * The new EnumerationType will be automatically stored in the 'parameterType' property
         * of the parent datasets.DataSetParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDataSetParameterUnderParameterType(container: datasets.DataSetParameter): EnumerationType;
        /**
         * Creates and returns a new EnumerationType instance in the SDK and on the server.
         * The new EnumerationType will be automatically stored in the 'parameterType' property
         * of the parent documenttemplates.DocumentTemplateParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDocumentTemplateParameterUnderParameterType(container: documenttemplates.DocumentTemplateParameter): EnumerationType;
        /**
         * Creates and returns a new EnumerationType instance in the SDK and on the server.
         * The new EnumerationType will be automatically stored in the 'parameterType' property
         * of the parent importmappings.ImportMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.16.0 and higher
         */
        static createInImportMappingUnderParameterType(container: importmappings.ImportMapping): EnumerationType;
        /**
         * Creates and returns a new EnumerationType instance in the SDK and on the server.
         * The new EnumerationType will be automatically stored in the 'type' property
         * of the parent mappings.ValueMappingElement element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInValueMappingElementUnderType(container: mappings.ValueMappingElement): EnumerationType;
        /**
         * Creates and returns a new EnumerationType instance in the SDK and on the server.
         * The new EnumerationType will be automatically stored in the 'variableType' property
         * of the parent microflows.CreateVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInCreateVariableActionUnderVariableType(container: microflows.CreateVariableAction): EnumerationType;
        /**
         * Creates and returns a new EnumerationType instance in the SDK and on the server.
         * The new EnumerationType will be automatically stored in the 'parameterType' property
         * of the parent microflows.MLModelCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.10.0 to 9.17.0
         */
        static createInMLModelCallParameterMappingUnderParameterType(container: microflows.MLModelCallParameterMapping): EnumerationType;
        /**
         * Creates and returns a new EnumerationType instance in the SDK and on the server.
         * The new EnumerationType will be automatically stored in the 'microflowReturnType' property
         * of the parent microflows.MicroflowBase element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowBaseUnderMicroflowReturnType(container: microflows.MicroflowBase): EnumerationType;
        /**
         * Creates and returns a new EnumerationType instance in the SDK and on the server.
         * The new EnumerationType will be automatically stored in the 'parameterType' property
         * of the parent microflows.MicroflowParameterBase element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowParameterBaseUnderParameterType(container: microflows.MicroflowParameterBase): EnumerationType;
        /**
         * Creates and returns a new EnumerationType instance in the SDK and on the server.
         * The new EnumerationType will be automatically stored in the 'variableType' property
         * of the parent microflows.MicroflowParameterObject element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowParameterObjectUnderVariableType(container: microflows.MicroflowParameterObject): EnumerationType;
        /**
         * Creates and returns a new EnumerationType instance in the SDK and on the server.
         * The new EnumerationType will be automatically stored in the 'variableType' property
         * of the parent microflows.ResultHandling element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInResultHandlingUnderVariableType(container: microflows.ResultHandling): EnumerationType;
        /**
         * Creates and returns a new EnumerationType instance in the SDK and on the server.
         * The new EnumerationType will be automatically stored in the 'parameterType' property
         * of the parent pages.PageParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.4.0 and higher
         */
        static createInPageParameterUnderParameterType(container: pages.PageParameter): EnumerationType;
        /**
         * Creates and returns a new EnumerationType instance in the SDK and on the server.
         * The new EnumerationType will be automatically stored in the 'type' property
         * of the parent rest.RestOperationParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.17.0 and higher
         */
        static createInRestOperationParameterUnderType(container: rest.RestOperationParameter): EnumerationType;
        /**
         * Creates and returns a new EnumerationType instance in the SDK and on the server.
         * The new EnumerationType will be automatically stored in the 'operationReturnType' property
         * of the parent webservices.PublishedOperation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInPublishedOperationUnderOperationReturnType(container: webservices.PublishedOperation): EnumerationType;
        /**
         * Creates and returns a new EnumerationType instance in the SDK and on the server.
         * The new EnumerationType will be automatically stored in the 'parameterType' property
         * of the parent webservices.PublishedParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInPublishedParameterUnderParameterType(container: webservices.PublishedParameter): EnumerationType;
        /**
         * Creates and returns a new EnumerationType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): EnumerationType;
    }
    /**
     * In version 7.9.0: introduced
     */
    interface IFloatType extends IDataType {
        readonly model: IModel;
        readonly containerAsAppServiceAction: appservices.IAppServiceAction;
        readonly containerAsAppServiceActionParameter: appservices.IAppServiceActionParameter;
        readonly containerAsConstant: constants.IConstant;
        readonly containerAsDataSetParameter: datasets.IDataSetParameter;
        readonly containerAsDocumentTemplateParameter: documenttemplates.IDocumentTemplateParameter;
        readonly containerAsImportMapping: importmappings.IImportMapping;
        readonly containerAsMicroflowBase: microflows.IMicroflowBase;
        readonly containerAsMicroflowParameterBase: microflows.IMicroflowParameterBase;
        readonly containerAsPageParameter: pages.IPageParameter;
        asLoaded(): FloatType;
        load(callback: (element: FloatType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<FloatType>;
    }
    /**
     * In version 7.9.0: introduced
     */
    class FloatType extends DataType implements IFloatType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsAppServiceAction(): appservices.AppServiceAction;
        get containerAsAppServiceActionParameter(): appservices.AppServiceActionParameter;
        get containerAsConstant(): constants.Constant;
        get containerAsDataSetColumn(): datasets.DataSetColumn;
        get containerAsDataSetParameter(): datasets.DataSetParameter;
        get containerAsDocumentTemplateParameter(): documenttemplates.DocumentTemplateParameter;
        get containerAsImportMapping(): importmappings.ImportMapping;
        get containerAsValueMappingElement(): mappings.ValueMappingElement;
        get containerAsCreateVariableAction(): microflows.CreateVariableAction;
        get containerAsMLModelCallParameterMapping(): microflows.MLModelCallParameterMapping;
        get containerAsMicroflowBase(): microflows.MicroflowBase;
        get containerAsMicroflowParameterBase(): microflows.MicroflowParameterBase;
        get containerAsMicroflowParameterObject(): microflows.MicroflowParameterObject;
        get containerAsResultHandling(): microflows.ResultHandling;
        get containerAsPageParameter(): pages.PageParameter;
        get containerAsRestOperationParameter(): rest.RestOperationParameter;
        get containerAsPublishedOperation(): webservices.PublishedOperation;
        get containerAsPublishedParameter(): webservices.PublishedParameter;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new FloatType instance in the SDK and on the server.
         * The new FloatType will be automatically stored in the 'actionReturnType' property
         * of the parent appservices.AppServiceAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceActionUnderActionReturnType(container: appservices.AppServiceAction): FloatType;
        /**
         * Creates and returns a new FloatType instance in the SDK and on the server.
         * The new FloatType will be automatically stored in the 'parameterType' property
         * of the parent appservices.AppServiceActionParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceActionParameterUnderParameterType(container: appservices.AppServiceActionParameter): FloatType;
        /**
         * Creates and returns a new FloatType instance in the SDK and on the server.
         * The new FloatType will be automatically stored in the 'type' property
         * of the parent constants.Constant element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInConstantUnderType(container: constants.Constant): FloatType;
        /**
         * Creates and returns a new FloatType instance in the SDK and on the server.
         * The new FloatType will be automatically stored in the 'columnType' property
         * of the parent datasets.DataSetColumn element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDataSetColumnUnderColumnType(container: datasets.DataSetColumn): FloatType;
        /**
         * Creates and returns a new FloatType instance in the SDK and on the server.
         * The new FloatType will be automatically stored in the 'parameterType' property
         * of the parent datasets.DataSetParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDataSetParameterUnderParameterType(container: datasets.DataSetParameter): FloatType;
        /**
         * Creates and returns a new FloatType instance in the SDK and on the server.
         * The new FloatType will be automatically stored in the 'parameterType' property
         * of the parent documenttemplates.DocumentTemplateParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDocumentTemplateParameterUnderParameterType(container: documenttemplates.DocumentTemplateParameter): FloatType;
        /**
         * Creates and returns a new FloatType instance in the SDK and on the server.
         * The new FloatType will be automatically stored in the 'parameterType' property
         * of the parent importmappings.ImportMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.16.0 and higher
         */
        static createInImportMappingUnderParameterType(container: importmappings.ImportMapping): FloatType;
        /**
         * Creates and returns a new FloatType instance in the SDK and on the server.
         * The new FloatType will be automatically stored in the 'type' property
         * of the parent mappings.ValueMappingElement element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInValueMappingElementUnderType(container: mappings.ValueMappingElement): FloatType;
        /**
         * Creates and returns a new FloatType instance in the SDK and on the server.
         * The new FloatType will be automatically stored in the 'variableType' property
         * of the parent microflows.CreateVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInCreateVariableActionUnderVariableType(container: microflows.CreateVariableAction): FloatType;
        /**
         * Creates and returns a new FloatType instance in the SDK and on the server.
         * The new FloatType will be automatically stored in the 'parameterType' property
         * of the parent microflows.MLModelCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.10.0 to 9.17.0
         */
        static createInMLModelCallParameterMappingUnderParameterType(container: microflows.MLModelCallParameterMapping): FloatType;
        /**
         * Creates and returns a new FloatType instance in the SDK and on the server.
         * The new FloatType will be automatically stored in the 'microflowReturnType' property
         * of the parent microflows.MicroflowBase element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowBaseUnderMicroflowReturnType(container: microflows.MicroflowBase): FloatType;
        /**
         * Creates and returns a new FloatType instance in the SDK and on the server.
         * The new FloatType will be automatically stored in the 'parameterType' property
         * of the parent microflows.MicroflowParameterBase element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowParameterBaseUnderParameterType(container: microflows.MicroflowParameterBase): FloatType;
        /**
         * Creates and returns a new FloatType instance in the SDK and on the server.
         * The new FloatType will be automatically stored in the 'variableType' property
         * of the parent microflows.MicroflowParameterObject element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowParameterObjectUnderVariableType(container: microflows.MicroflowParameterObject): FloatType;
        /**
         * Creates and returns a new FloatType instance in the SDK and on the server.
         * The new FloatType will be automatically stored in the 'variableType' property
         * of the parent microflows.ResultHandling element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInResultHandlingUnderVariableType(container: microflows.ResultHandling): FloatType;
        /**
         * Creates and returns a new FloatType instance in the SDK and on the server.
         * The new FloatType will be automatically stored in the 'parameterType' property
         * of the parent pages.PageParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.4.0 and higher
         */
        static createInPageParameterUnderParameterType(container: pages.PageParameter): FloatType;
        /**
         * Creates and returns a new FloatType instance in the SDK and on the server.
         * The new FloatType will be automatically stored in the 'type' property
         * of the parent rest.RestOperationParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.17.0 and higher
         */
        static createInRestOperationParameterUnderType(container: rest.RestOperationParameter): FloatType;
        /**
         * Creates and returns a new FloatType instance in the SDK and on the server.
         * The new FloatType will be automatically stored in the 'operationReturnType' property
         * of the parent webservices.PublishedOperation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInPublishedOperationUnderOperationReturnType(container: webservices.PublishedOperation): FloatType;
        /**
         * Creates and returns a new FloatType instance in the SDK and on the server.
         * The new FloatType will be automatically stored in the 'parameterType' property
         * of the parent webservices.PublishedParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInPublishedParameterUnderParameterType(container: webservices.PublishedParameter): FloatType;
        /**
         * Creates and returns a new FloatType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): FloatType;
    }
    /**
     * In version 7.9.0: introduced
     */
    interface IIntegerType extends IDataType {
        readonly model: IModel;
        readonly containerAsAppServiceAction: appservices.IAppServiceAction;
        readonly containerAsAppServiceActionParameter: appservices.IAppServiceActionParameter;
        readonly containerAsConstant: constants.IConstant;
        readonly containerAsDataSetParameter: datasets.IDataSetParameter;
        readonly containerAsDocumentTemplateParameter: documenttemplates.IDocumentTemplateParameter;
        readonly containerAsImportMapping: importmappings.IImportMapping;
        readonly containerAsMicroflowBase: microflows.IMicroflowBase;
        readonly containerAsMicroflowParameterBase: microflows.IMicroflowParameterBase;
        readonly containerAsPageParameter: pages.IPageParameter;
        asLoaded(): IntegerType;
        load(callback: (element: IntegerType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<IntegerType>;
    }
    /**
     * In version 7.9.0: introduced
     */
    class IntegerType extends DataType implements IIntegerType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsAppServiceAction(): appservices.AppServiceAction;
        get containerAsAppServiceActionParameter(): appservices.AppServiceActionParameter;
        get containerAsConstant(): constants.Constant;
        get containerAsDataSetColumn(): datasets.DataSetColumn;
        get containerAsDataSetParameter(): datasets.DataSetParameter;
        get containerAsDocumentTemplateParameter(): documenttemplates.DocumentTemplateParameter;
        get containerAsImportMapping(): importmappings.ImportMapping;
        get containerAsValueMappingElement(): mappings.ValueMappingElement;
        get containerAsCreateVariableAction(): microflows.CreateVariableAction;
        get containerAsMLModelCallParameterMapping(): microflows.MLModelCallParameterMapping;
        get containerAsMicroflowBase(): microflows.MicroflowBase;
        get containerAsMicroflowParameterBase(): microflows.MicroflowParameterBase;
        get containerAsMicroflowParameterObject(): microflows.MicroflowParameterObject;
        get containerAsResultHandling(): microflows.ResultHandling;
        get containerAsPageParameter(): pages.PageParameter;
        get containerAsRestOperationParameter(): rest.RestOperationParameter;
        get containerAsPublishedOperation(): webservices.PublishedOperation;
        get containerAsPublishedParameter(): webservices.PublishedParameter;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new IntegerType instance in the SDK and on the server.
         * The new IntegerType will be automatically stored in the 'actionReturnType' property
         * of the parent appservices.AppServiceAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceActionUnderActionReturnType(container: appservices.AppServiceAction): IntegerType;
        /**
         * Creates and returns a new IntegerType instance in the SDK and on the server.
         * The new IntegerType will be automatically stored in the 'parameterType' property
         * of the parent appservices.AppServiceActionParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceActionParameterUnderParameterType(container: appservices.AppServiceActionParameter): IntegerType;
        /**
         * Creates and returns a new IntegerType instance in the SDK and on the server.
         * The new IntegerType will be automatically stored in the 'type' property
         * of the parent constants.Constant element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInConstantUnderType(container: constants.Constant): IntegerType;
        /**
         * Creates and returns a new IntegerType instance in the SDK and on the server.
         * The new IntegerType will be automatically stored in the 'columnType' property
         * of the parent datasets.DataSetColumn element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDataSetColumnUnderColumnType(container: datasets.DataSetColumn): IntegerType;
        /**
         * Creates and returns a new IntegerType instance in the SDK and on the server.
         * The new IntegerType will be automatically stored in the 'parameterType' property
         * of the parent datasets.DataSetParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDataSetParameterUnderParameterType(container: datasets.DataSetParameter): IntegerType;
        /**
         * Creates and returns a new IntegerType instance in the SDK and on the server.
         * The new IntegerType will be automatically stored in the 'parameterType' property
         * of the parent documenttemplates.DocumentTemplateParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDocumentTemplateParameterUnderParameterType(container: documenttemplates.DocumentTemplateParameter): IntegerType;
        /**
         * Creates and returns a new IntegerType instance in the SDK and on the server.
         * The new IntegerType will be automatically stored in the 'parameterType' property
         * of the parent importmappings.ImportMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.16.0 and higher
         */
        static createInImportMappingUnderParameterType(container: importmappings.ImportMapping): IntegerType;
        /**
         * Creates and returns a new IntegerType instance in the SDK and on the server.
         * The new IntegerType will be automatically stored in the 'type' property
         * of the parent mappings.ValueMappingElement element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInValueMappingElementUnderType(container: mappings.ValueMappingElement): IntegerType;
        /**
         * Creates and returns a new IntegerType instance in the SDK and on the server.
         * The new IntegerType will be automatically stored in the 'variableType' property
         * of the parent microflows.CreateVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInCreateVariableActionUnderVariableType(container: microflows.CreateVariableAction): IntegerType;
        /**
         * Creates and returns a new IntegerType instance in the SDK and on the server.
         * The new IntegerType will be automatically stored in the 'parameterType' property
         * of the parent microflows.MLModelCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.10.0 to 9.17.0
         */
        static createInMLModelCallParameterMappingUnderParameterType(container: microflows.MLModelCallParameterMapping): IntegerType;
        /**
         * Creates and returns a new IntegerType instance in the SDK and on the server.
         * The new IntegerType will be automatically stored in the 'microflowReturnType' property
         * of the parent microflows.MicroflowBase element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowBaseUnderMicroflowReturnType(container: microflows.MicroflowBase): IntegerType;
        /**
         * Creates and returns a new IntegerType instance in the SDK and on the server.
         * The new IntegerType will be automatically stored in the 'parameterType' property
         * of the parent microflows.MicroflowParameterBase element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowParameterBaseUnderParameterType(container: microflows.MicroflowParameterBase): IntegerType;
        /**
         * Creates and returns a new IntegerType instance in the SDK and on the server.
         * The new IntegerType will be automatically stored in the 'variableType' property
         * of the parent microflows.MicroflowParameterObject element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowParameterObjectUnderVariableType(container: microflows.MicroflowParameterObject): IntegerType;
        /**
         * Creates and returns a new IntegerType instance in the SDK and on the server.
         * The new IntegerType will be automatically stored in the 'variableType' property
         * of the parent microflows.ResultHandling element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInResultHandlingUnderVariableType(container: microflows.ResultHandling): IntegerType;
        /**
         * Creates and returns a new IntegerType instance in the SDK and on the server.
         * The new IntegerType will be automatically stored in the 'parameterType' property
         * of the parent pages.PageParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.4.0 and higher
         */
        static createInPageParameterUnderParameterType(container: pages.PageParameter): IntegerType;
        /**
         * Creates and returns a new IntegerType instance in the SDK and on the server.
         * The new IntegerType will be automatically stored in the 'type' property
         * of the parent rest.RestOperationParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.17.0 and higher
         */
        static createInRestOperationParameterUnderType(container: rest.RestOperationParameter): IntegerType;
        /**
         * Creates and returns a new IntegerType instance in the SDK and on the server.
         * The new IntegerType will be automatically stored in the 'operationReturnType' property
         * of the parent webservices.PublishedOperation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInPublishedOperationUnderOperationReturnType(container: webservices.PublishedOperation): IntegerType;
        /**
         * Creates and returns a new IntegerType instance in the SDK and on the server.
         * The new IntegerType will be automatically stored in the 'parameterType' property
         * of the parent webservices.PublishedParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInPublishedParameterUnderParameterType(container: webservices.PublishedParameter): IntegerType;
        /**
         * Creates and returns a new IntegerType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): IntegerType;
    }
    /**
     * In version 7.9.0: introduced
     */
    interface IListType extends IEntityType {
        readonly model: IModel;
        readonly containerAsAppServiceAction: appservices.IAppServiceAction;
        readonly containerAsAppServiceActionParameter: appservices.IAppServiceActionParameter;
        readonly containerAsConstant: constants.IConstant;
        readonly containerAsDataSetParameter: datasets.IDataSetParameter;
        readonly containerAsDocumentTemplateParameter: documenttemplates.IDocumentTemplateParameter;
        readonly containerAsImportMapping: importmappings.IImportMapping;
        readonly containerAsMicroflowBase: microflows.IMicroflowBase;
        readonly containerAsMicroflowParameterBase: microflows.IMicroflowParameterBase;
        readonly containerAsPageParameter: pages.IPageParameter;
        asLoaded(): ListType;
        load(callback: (element: ListType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ListType>;
    }
    /**
     * In version 7.9.0: introduced
     */
    class ListType extends EntityType implements IListType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsAppServiceAction(): appservices.AppServiceAction;
        get containerAsAppServiceActionParameter(): appservices.AppServiceActionParameter;
        get containerAsConstant(): constants.Constant;
        get containerAsDataSetColumn(): datasets.DataSetColumn;
        get containerAsDataSetParameter(): datasets.DataSetParameter;
        get containerAsDocumentTemplateParameter(): documenttemplates.DocumentTemplateParameter;
        get containerAsImportMapping(): importmappings.ImportMapping;
        get containerAsValueMappingElement(): mappings.ValueMappingElement;
        get containerAsCreateVariableAction(): microflows.CreateVariableAction;
        get containerAsMLModelCallParameterMapping(): microflows.MLModelCallParameterMapping;
        get containerAsMicroflowBase(): microflows.MicroflowBase;
        get containerAsMicroflowParameterBase(): microflows.MicroflowParameterBase;
        get containerAsMicroflowParameterObject(): microflows.MicroflowParameterObject;
        get containerAsResultHandling(): microflows.ResultHandling;
        get containerAsPageParameter(): pages.PageParameter;
        get containerAsRestOperationParameter(): rest.RestOperationParameter;
        get containerAsPublishedOperation(): webservices.PublishedOperation;
        get containerAsPublishedParameter(): webservices.PublishedParameter;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ListType instance in the SDK and on the server.
         * The new ListType will be automatically stored in the 'actionReturnType' property
         * of the parent appservices.AppServiceAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceActionUnderActionReturnType(container: appservices.AppServiceAction): ListType;
        /**
         * Creates and returns a new ListType instance in the SDK and on the server.
         * The new ListType will be automatically stored in the 'parameterType' property
         * of the parent appservices.AppServiceActionParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceActionParameterUnderParameterType(container: appservices.AppServiceActionParameter): ListType;
        /**
         * Creates and returns a new ListType instance in the SDK and on the server.
         * The new ListType will be automatically stored in the 'type' property
         * of the parent constants.Constant element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInConstantUnderType(container: constants.Constant): ListType;
        /**
         * Creates and returns a new ListType instance in the SDK and on the server.
         * The new ListType will be automatically stored in the 'columnType' property
         * of the parent datasets.DataSetColumn element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDataSetColumnUnderColumnType(container: datasets.DataSetColumn): ListType;
        /**
         * Creates and returns a new ListType instance in the SDK and on the server.
         * The new ListType will be automatically stored in the 'parameterType' property
         * of the parent datasets.DataSetParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDataSetParameterUnderParameterType(container: datasets.DataSetParameter): ListType;
        /**
         * Creates and returns a new ListType instance in the SDK and on the server.
         * The new ListType will be automatically stored in the 'parameterType' property
         * of the parent documenttemplates.DocumentTemplateParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDocumentTemplateParameterUnderParameterType(container: documenttemplates.DocumentTemplateParameter): ListType;
        /**
         * Creates and returns a new ListType instance in the SDK and on the server.
         * The new ListType will be automatically stored in the 'parameterType' property
         * of the parent importmappings.ImportMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.16.0 and higher
         */
        static createInImportMappingUnderParameterType(container: importmappings.ImportMapping): ListType;
        /**
         * Creates and returns a new ListType instance in the SDK and on the server.
         * The new ListType will be automatically stored in the 'type' property
         * of the parent mappings.ValueMappingElement element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInValueMappingElementUnderType(container: mappings.ValueMappingElement): ListType;
        /**
         * Creates and returns a new ListType instance in the SDK and on the server.
         * The new ListType will be automatically stored in the 'variableType' property
         * of the parent microflows.CreateVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInCreateVariableActionUnderVariableType(container: microflows.CreateVariableAction): ListType;
        /**
         * Creates and returns a new ListType instance in the SDK and on the server.
         * The new ListType will be automatically stored in the 'parameterType' property
         * of the parent microflows.MLModelCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.10.0 to 9.17.0
         */
        static createInMLModelCallParameterMappingUnderParameterType(container: microflows.MLModelCallParameterMapping): ListType;
        /**
         * Creates and returns a new ListType instance in the SDK and on the server.
         * The new ListType will be automatically stored in the 'microflowReturnType' property
         * of the parent microflows.MicroflowBase element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowBaseUnderMicroflowReturnType(container: microflows.MicroflowBase): ListType;
        /**
         * Creates and returns a new ListType instance in the SDK and on the server.
         * The new ListType will be automatically stored in the 'parameterType' property
         * of the parent microflows.MicroflowParameterBase element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowParameterBaseUnderParameterType(container: microflows.MicroflowParameterBase): ListType;
        /**
         * Creates and returns a new ListType instance in the SDK and on the server.
         * The new ListType will be automatically stored in the 'variableType' property
         * of the parent microflows.MicroflowParameterObject element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowParameterObjectUnderVariableType(container: microflows.MicroflowParameterObject): ListType;
        /**
         * Creates and returns a new ListType instance in the SDK and on the server.
         * The new ListType will be automatically stored in the 'variableType' property
         * of the parent microflows.ResultHandling element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInResultHandlingUnderVariableType(container: microflows.ResultHandling): ListType;
        /**
         * Creates and returns a new ListType instance in the SDK and on the server.
         * The new ListType will be automatically stored in the 'parameterType' property
         * of the parent pages.PageParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.4.0 and higher
         */
        static createInPageParameterUnderParameterType(container: pages.PageParameter): ListType;
        /**
         * Creates and returns a new ListType instance in the SDK and on the server.
         * The new ListType will be automatically stored in the 'type' property
         * of the parent rest.RestOperationParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.17.0 and higher
         */
        static createInRestOperationParameterUnderType(container: rest.RestOperationParameter): ListType;
        /**
         * Creates and returns a new ListType instance in the SDK and on the server.
         * The new ListType will be automatically stored in the 'operationReturnType' property
         * of the parent webservices.PublishedOperation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInPublishedOperationUnderOperationReturnType(container: webservices.PublishedOperation): ListType;
        /**
         * Creates and returns a new ListType instance in the SDK and on the server.
         * The new ListType will be automatically stored in the 'parameterType' property
         * of the parent webservices.PublishedParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInPublishedParameterUnderParameterType(container: webservices.PublishedParameter): ListType;
        /**
         * Creates and returns a new ListType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ListType;
    }
    /**
     * In version 7.9.0: introduced
     */
    interface IObjectType extends IEntityType {
        readonly model: IModel;
        readonly containerAsAppServiceAction: appservices.IAppServiceAction;
        readonly containerAsAppServiceActionParameter: appservices.IAppServiceActionParameter;
        readonly containerAsConstant: constants.IConstant;
        readonly containerAsDataSetParameter: datasets.IDataSetParameter;
        readonly containerAsDocumentTemplateParameter: documenttemplates.IDocumentTemplateParameter;
        readonly containerAsImportMapping: importmappings.IImportMapping;
        readonly containerAsMicroflowBase: microflows.IMicroflowBase;
        readonly containerAsMicroflowParameterBase: microflows.IMicroflowParameterBase;
        readonly containerAsPageParameter: pages.IPageParameter;
        asLoaded(): ObjectType;
        load(callback: (element: ObjectType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ObjectType>;
    }
    /**
     * In version 7.9.0: introduced
     */
    class ObjectType extends EntityType implements IObjectType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsAppServiceAction(): appservices.AppServiceAction;
        get containerAsAppServiceActionParameter(): appservices.AppServiceActionParameter;
        get containerAsConstant(): constants.Constant;
        get containerAsDataSetColumn(): datasets.DataSetColumn;
        get containerAsDataSetParameter(): datasets.DataSetParameter;
        get containerAsDocumentTemplateParameter(): documenttemplates.DocumentTemplateParameter;
        get containerAsImportMapping(): importmappings.ImportMapping;
        get containerAsValueMappingElement(): mappings.ValueMappingElement;
        get containerAsCreateVariableAction(): microflows.CreateVariableAction;
        get containerAsMLModelCallParameterMapping(): microflows.MLModelCallParameterMapping;
        get containerAsMicroflowBase(): microflows.MicroflowBase;
        get containerAsMicroflowParameterBase(): microflows.MicroflowParameterBase;
        get containerAsMicroflowParameterObject(): microflows.MicroflowParameterObject;
        get containerAsResultHandling(): microflows.ResultHandling;
        get containerAsPageParameter(): pages.PageParameter;
        get containerAsRestOperationParameter(): rest.RestOperationParameter;
        get containerAsPublishedOperation(): webservices.PublishedOperation;
        get containerAsPublishedParameter(): webservices.PublishedParameter;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ObjectType instance in the SDK and on the server.
         * The new ObjectType will be automatically stored in the 'actionReturnType' property
         * of the parent appservices.AppServiceAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceActionUnderActionReturnType(container: appservices.AppServiceAction): ObjectType;
        /**
         * Creates and returns a new ObjectType instance in the SDK and on the server.
         * The new ObjectType will be automatically stored in the 'parameterType' property
         * of the parent appservices.AppServiceActionParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceActionParameterUnderParameterType(container: appservices.AppServiceActionParameter): ObjectType;
        /**
         * Creates and returns a new ObjectType instance in the SDK and on the server.
         * The new ObjectType will be automatically stored in the 'type' property
         * of the parent constants.Constant element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInConstantUnderType(container: constants.Constant): ObjectType;
        /**
         * Creates and returns a new ObjectType instance in the SDK and on the server.
         * The new ObjectType will be automatically stored in the 'columnType' property
         * of the parent datasets.DataSetColumn element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDataSetColumnUnderColumnType(container: datasets.DataSetColumn): ObjectType;
        /**
         * Creates and returns a new ObjectType instance in the SDK and on the server.
         * The new ObjectType will be automatically stored in the 'parameterType' property
         * of the parent datasets.DataSetParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDataSetParameterUnderParameterType(container: datasets.DataSetParameter): ObjectType;
        /**
         * Creates and returns a new ObjectType instance in the SDK and on the server.
         * The new ObjectType will be automatically stored in the 'parameterType' property
         * of the parent documenttemplates.DocumentTemplateParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDocumentTemplateParameterUnderParameterType(container: documenttemplates.DocumentTemplateParameter): ObjectType;
        /**
         * Creates and returns a new ObjectType instance in the SDK and on the server.
         * The new ObjectType will be automatically stored in the 'parameterType' property
         * of the parent importmappings.ImportMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.16.0 and higher
         */
        static createInImportMappingUnderParameterType(container: importmappings.ImportMapping): ObjectType;
        /**
         * Creates and returns a new ObjectType instance in the SDK and on the server.
         * The new ObjectType will be automatically stored in the 'type' property
         * of the parent mappings.ValueMappingElement element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInValueMappingElementUnderType(container: mappings.ValueMappingElement): ObjectType;
        /**
         * Creates and returns a new ObjectType instance in the SDK and on the server.
         * The new ObjectType will be automatically stored in the 'variableType' property
         * of the parent microflows.CreateVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInCreateVariableActionUnderVariableType(container: microflows.CreateVariableAction): ObjectType;
        /**
         * Creates and returns a new ObjectType instance in the SDK and on the server.
         * The new ObjectType will be automatically stored in the 'parameterType' property
         * of the parent microflows.MLModelCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.10.0 to 9.17.0
         */
        static createInMLModelCallParameterMappingUnderParameterType(container: microflows.MLModelCallParameterMapping): ObjectType;
        /**
         * Creates and returns a new ObjectType instance in the SDK and on the server.
         * The new ObjectType will be automatically stored in the 'microflowReturnType' property
         * of the parent microflows.MicroflowBase element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowBaseUnderMicroflowReturnType(container: microflows.MicroflowBase): ObjectType;
        /**
         * Creates and returns a new ObjectType instance in the SDK and on the server.
         * The new ObjectType will be automatically stored in the 'parameterType' property
         * of the parent microflows.MicroflowParameterBase element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowParameterBaseUnderParameterType(container: microflows.MicroflowParameterBase): ObjectType;
        /**
         * Creates and returns a new ObjectType instance in the SDK and on the server.
         * The new ObjectType will be automatically stored in the 'variableType' property
         * of the parent microflows.MicroflowParameterObject element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowParameterObjectUnderVariableType(container: microflows.MicroflowParameterObject): ObjectType;
        /**
         * Creates and returns a new ObjectType instance in the SDK and on the server.
         * The new ObjectType will be automatically stored in the 'variableType' property
         * of the parent microflows.ResultHandling element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInResultHandlingUnderVariableType(container: microflows.ResultHandling): ObjectType;
        /**
         * Creates and returns a new ObjectType instance in the SDK and on the server.
         * The new ObjectType will be automatically stored in the 'parameterType' property
         * of the parent pages.PageParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.4.0 and higher
         */
        static createInPageParameterUnderParameterType(container: pages.PageParameter): ObjectType;
        /**
         * Creates and returns a new ObjectType instance in the SDK and on the server.
         * The new ObjectType will be automatically stored in the 'type' property
         * of the parent rest.RestOperationParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.17.0 and higher
         */
        static createInRestOperationParameterUnderType(container: rest.RestOperationParameter): ObjectType;
        /**
         * Creates and returns a new ObjectType instance in the SDK and on the server.
         * The new ObjectType will be automatically stored in the 'operationReturnType' property
         * of the parent webservices.PublishedOperation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInPublishedOperationUnderOperationReturnType(container: webservices.PublishedOperation): ObjectType;
        /**
         * Creates and returns a new ObjectType instance in the SDK and on the server.
         * The new ObjectType will be automatically stored in the 'parameterType' property
         * of the parent webservices.PublishedParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInPublishedParameterUnderParameterType(container: webservices.PublishedParameter): ObjectType;
        /**
         * Creates and returns a new ObjectType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ObjectType;
    }
    /**
     * In version 7.9.0: introduced
     */
    interface IStringType extends IDataType {
        readonly model: IModel;
        readonly containerAsAppServiceAction: appservices.IAppServiceAction;
        readonly containerAsAppServiceActionParameter: appservices.IAppServiceActionParameter;
        readonly containerAsConstant: constants.IConstant;
        readonly containerAsDataSetParameter: datasets.IDataSetParameter;
        readonly containerAsDocumentTemplateParameter: documenttemplates.IDocumentTemplateParameter;
        readonly containerAsImportMapping: importmappings.IImportMapping;
        readonly containerAsMicroflowBase: microflows.IMicroflowBase;
        readonly containerAsMicroflowParameterBase: microflows.IMicroflowParameterBase;
        readonly containerAsPageParameter: pages.IPageParameter;
        asLoaded(): StringType;
        load(callback: (element: StringType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<StringType>;
    }
    /**
     * In version 7.9.0: introduced
     */
    class StringType extends DataType implements IStringType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsAppServiceAction(): appservices.AppServiceAction;
        get containerAsAppServiceActionParameter(): appservices.AppServiceActionParameter;
        get containerAsConstant(): constants.Constant;
        get containerAsDataSetColumn(): datasets.DataSetColumn;
        get containerAsDataSetParameter(): datasets.DataSetParameter;
        get containerAsDocumentTemplateParameter(): documenttemplates.DocumentTemplateParameter;
        get containerAsImportMapping(): importmappings.ImportMapping;
        get containerAsValueMappingElement(): mappings.ValueMappingElement;
        get containerAsCreateVariableAction(): microflows.CreateVariableAction;
        get containerAsMLModelCallParameterMapping(): microflows.MLModelCallParameterMapping;
        get containerAsMicroflowBase(): microflows.MicroflowBase;
        get containerAsMicroflowParameterBase(): microflows.MicroflowParameterBase;
        get containerAsMicroflowParameterObject(): microflows.MicroflowParameterObject;
        get containerAsResultHandling(): microflows.ResultHandling;
        get containerAsPageParameter(): pages.PageParameter;
        get containerAsRestOperationParameter(): rest.RestOperationParameter;
        get containerAsPublishedOperation(): webservices.PublishedOperation;
        get containerAsPublishedParameter(): webservices.PublishedParameter;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new StringType instance in the SDK and on the server.
         * The new StringType will be automatically stored in the 'actionReturnType' property
         * of the parent appservices.AppServiceAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceActionUnderActionReturnType(container: appservices.AppServiceAction): StringType;
        /**
         * Creates and returns a new StringType instance in the SDK and on the server.
         * The new StringType will be automatically stored in the 'parameterType' property
         * of the parent appservices.AppServiceActionParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceActionParameterUnderParameterType(container: appservices.AppServiceActionParameter): StringType;
        /**
         * Creates and returns a new StringType instance in the SDK and on the server.
         * The new StringType will be automatically stored in the 'type' property
         * of the parent constants.Constant element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInConstantUnderType(container: constants.Constant): StringType;
        /**
         * Creates and returns a new StringType instance in the SDK and on the server.
         * The new StringType will be automatically stored in the 'columnType' property
         * of the parent datasets.DataSetColumn element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDataSetColumnUnderColumnType(container: datasets.DataSetColumn): StringType;
        /**
         * Creates and returns a new StringType instance in the SDK and on the server.
         * The new StringType will be automatically stored in the 'parameterType' property
         * of the parent datasets.DataSetParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDataSetParameterUnderParameterType(container: datasets.DataSetParameter): StringType;
        /**
         * Creates and returns a new StringType instance in the SDK and on the server.
         * The new StringType will be automatically stored in the 'parameterType' property
         * of the parent documenttemplates.DocumentTemplateParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDocumentTemplateParameterUnderParameterType(container: documenttemplates.DocumentTemplateParameter): StringType;
        /**
         * Creates and returns a new StringType instance in the SDK and on the server.
         * The new StringType will be automatically stored in the 'parameterType' property
         * of the parent importmappings.ImportMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.16.0 and higher
         */
        static createInImportMappingUnderParameterType(container: importmappings.ImportMapping): StringType;
        /**
         * Creates and returns a new StringType instance in the SDK and on the server.
         * The new StringType will be automatically stored in the 'type' property
         * of the parent mappings.ValueMappingElement element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInValueMappingElementUnderType(container: mappings.ValueMappingElement): StringType;
        /**
         * Creates and returns a new StringType instance in the SDK and on the server.
         * The new StringType will be automatically stored in the 'variableType' property
         * of the parent microflows.CreateVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInCreateVariableActionUnderVariableType(container: microflows.CreateVariableAction): StringType;
        /**
         * Creates and returns a new StringType instance in the SDK and on the server.
         * The new StringType will be automatically stored in the 'parameterType' property
         * of the parent microflows.MLModelCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.10.0 to 9.17.0
         */
        static createInMLModelCallParameterMappingUnderParameterType(container: microflows.MLModelCallParameterMapping): StringType;
        /**
         * Creates and returns a new StringType instance in the SDK and on the server.
         * The new StringType will be automatically stored in the 'microflowReturnType' property
         * of the parent microflows.MicroflowBase element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowBaseUnderMicroflowReturnType(container: microflows.MicroflowBase): StringType;
        /**
         * Creates and returns a new StringType instance in the SDK and on the server.
         * The new StringType will be automatically stored in the 'parameterType' property
         * of the parent microflows.MicroflowParameterBase element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowParameterBaseUnderParameterType(container: microflows.MicroflowParameterBase): StringType;
        /**
         * Creates and returns a new StringType instance in the SDK and on the server.
         * The new StringType will be automatically stored in the 'variableType' property
         * of the parent microflows.MicroflowParameterObject element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowParameterObjectUnderVariableType(container: microflows.MicroflowParameterObject): StringType;
        /**
         * Creates and returns a new StringType instance in the SDK and on the server.
         * The new StringType will be automatically stored in the 'variableType' property
         * of the parent microflows.ResultHandling element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInResultHandlingUnderVariableType(container: microflows.ResultHandling): StringType;
        /**
         * Creates and returns a new StringType instance in the SDK and on the server.
         * The new StringType will be automatically stored in the 'parameterType' property
         * of the parent pages.PageParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.4.0 and higher
         */
        static createInPageParameterUnderParameterType(container: pages.PageParameter): StringType;
        /**
         * Creates and returns a new StringType instance in the SDK and on the server.
         * The new StringType will be automatically stored in the 'type' property
         * of the parent rest.RestOperationParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.17.0 and higher
         */
        static createInRestOperationParameterUnderType(container: rest.RestOperationParameter): StringType;
        /**
         * Creates and returns a new StringType instance in the SDK and on the server.
         * The new StringType will be automatically stored in the 'operationReturnType' property
         * of the parent webservices.PublishedOperation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInPublishedOperationUnderOperationReturnType(container: webservices.PublishedOperation): StringType;
        /**
         * Creates and returns a new StringType instance in the SDK and on the server.
         * The new StringType will be automatically stored in the 'parameterType' property
         * of the parent webservices.PublishedParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInPublishedParameterUnderParameterType(container: webservices.PublishedParameter): StringType;
        /**
         * Creates and returns a new StringType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): StringType;
    }
    /**
     * In version 7.9.0: introduced
     */
    interface IUnknownType extends IDataType {
        readonly model: IModel;
        readonly containerAsAppServiceAction: appservices.IAppServiceAction;
        readonly containerAsAppServiceActionParameter: appservices.IAppServiceActionParameter;
        readonly containerAsConstant: constants.IConstant;
        readonly containerAsDataSetParameter: datasets.IDataSetParameter;
        readonly containerAsDocumentTemplateParameter: documenttemplates.IDocumentTemplateParameter;
        readonly containerAsImportMapping: importmappings.IImportMapping;
        readonly containerAsMicroflowBase: microflows.IMicroflowBase;
        readonly containerAsMicroflowParameterBase: microflows.IMicroflowParameterBase;
        readonly containerAsPageParameter: pages.IPageParameter;
        asLoaded(): UnknownType;
        load(callback: (element: UnknownType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<UnknownType>;
    }
    /**
     * In version 7.9.0: introduced
     */
    class UnknownType extends DataType implements IUnknownType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsAppServiceAction(): appservices.AppServiceAction;
        get containerAsAppServiceActionParameter(): appservices.AppServiceActionParameter;
        get containerAsConstant(): constants.Constant;
        get containerAsDataSetColumn(): datasets.DataSetColumn;
        get containerAsDataSetParameter(): datasets.DataSetParameter;
        get containerAsDocumentTemplateParameter(): documenttemplates.DocumentTemplateParameter;
        get containerAsImportMapping(): importmappings.ImportMapping;
        get containerAsValueMappingElement(): mappings.ValueMappingElement;
        get containerAsCreateVariableAction(): microflows.CreateVariableAction;
        get containerAsMLModelCallParameterMapping(): microflows.MLModelCallParameterMapping;
        get containerAsMicroflowBase(): microflows.MicroflowBase;
        get containerAsMicroflowParameterBase(): microflows.MicroflowParameterBase;
        get containerAsMicroflowParameterObject(): microflows.MicroflowParameterObject;
        get containerAsResultHandling(): microflows.ResultHandling;
        get containerAsPageParameter(): pages.PageParameter;
        get containerAsRestOperationParameter(): rest.RestOperationParameter;
        get containerAsPublishedOperation(): webservices.PublishedOperation;
        get containerAsPublishedParameter(): webservices.PublishedParameter;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new UnknownType instance in the SDK and on the server.
         * The new UnknownType will be automatically stored in the 'actionReturnType' property
         * of the parent appservices.AppServiceAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceActionUnderActionReturnType(container: appservices.AppServiceAction): UnknownType;
        /**
         * Creates and returns a new UnknownType instance in the SDK and on the server.
         * The new UnknownType will be automatically stored in the 'parameterType' property
         * of the parent appservices.AppServiceActionParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceActionParameterUnderParameterType(container: appservices.AppServiceActionParameter): UnknownType;
        /**
         * Creates and returns a new UnknownType instance in the SDK and on the server.
         * The new UnknownType will be automatically stored in the 'type' property
         * of the parent constants.Constant element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInConstantUnderType(container: constants.Constant): UnknownType;
        /**
         * Creates and returns a new UnknownType instance in the SDK and on the server.
         * The new UnknownType will be automatically stored in the 'columnType' property
         * of the parent datasets.DataSetColumn element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDataSetColumnUnderColumnType(container: datasets.DataSetColumn): UnknownType;
        /**
         * Creates and returns a new UnknownType instance in the SDK and on the server.
         * The new UnknownType will be automatically stored in the 'parameterType' property
         * of the parent datasets.DataSetParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDataSetParameterUnderParameterType(container: datasets.DataSetParameter): UnknownType;
        /**
         * Creates and returns a new UnknownType instance in the SDK and on the server.
         * The new UnknownType will be automatically stored in the 'parameterType' property
         * of the parent documenttemplates.DocumentTemplateParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDocumentTemplateParameterUnderParameterType(container: documenttemplates.DocumentTemplateParameter): UnknownType;
        /**
         * Creates and returns a new UnknownType instance in the SDK and on the server.
         * The new UnknownType will be automatically stored in the 'parameterType' property
         * of the parent importmappings.ImportMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.16.0 and higher
         */
        static createInImportMappingUnderParameterType(container: importmappings.ImportMapping): UnknownType;
        /**
         * Creates and returns a new UnknownType instance in the SDK and on the server.
         * The new UnknownType will be automatically stored in the 'type' property
         * of the parent mappings.ValueMappingElement element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInValueMappingElementUnderType(container: mappings.ValueMappingElement): UnknownType;
        /**
         * Creates and returns a new UnknownType instance in the SDK and on the server.
         * The new UnknownType will be automatically stored in the 'variableType' property
         * of the parent microflows.CreateVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInCreateVariableActionUnderVariableType(container: microflows.CreateVariableAction): UnknownType;
        /**
         * Creates and returns a new UnknownType instance in the SDK and on the server.
         * The new UnknownType will be automatically stored in the 'parameterType' property
         * of the parent microflows.MLModelCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.10.0 to 9.17.0
         */
        static createInMLModelCallParameterMappingUnderParameterType(container: microflows.MLModelCallParameterMapping): UnknownType;
        /**
         * Creates and returns a new UnknownType instance in the SDK and on the server.
         * The new UnknownType will be automatically stored in the 'microflowReturnType' property
         * of the parent microflows.MicroflowBase element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowBaseUnderMicroflowReturnType(container: microflows.MicroflowBase): UnknownType;
        /**
         * Creates and returns a new UnknownType instance in the SDK and on the server.
         * The new UnknownType will be automatically stored in the 'parameterType' property
         * of the parent microflows.MicroflowParameterBase element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowParameterBaseUnderParameterType(container: microflows.MicroflowParameterBase): UnknownType;
        /**
         * Creates and returns a new UnknownType instance in the SDK and on the server.
         * The new UnknownType will be automatically stored in the 'variableType' property
         * of the parent microflows.MicroflowParameterObject element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowParameterObjectUnderVariableType(container: microflows.MicroflowParameterObject): UnknownType;
        /**
         * Creates and returns a new UnknownType instance in the SDK and on the server.
         * The new UnknownType will be automatically stored in the 'variableType' property
         * of the parent microflows.ResultHandling element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInResultHandlingUnderVariableType(container: microflows.ResultHandling): UnknownType;
        /**
         * Creates and returns a new UnknownType instance in the SDK and on the server.
         * The new UnknownType will be automatically stored in the 'parameterType' property
         * of the parent pages.PageParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.4.0 and higher
         */
        static createInPageParameterUnderParameterType(container: pages.PageParameter): UnknownType;
        /**
         * Creates and returns a new UnknownType instance in the SDK and on the server.
         * The new UnknownType will be automatically stored in the 'type' property
         * of the parent rest.RestOperationParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.17.0 and higher
         */
        static createInRestOperationParameterUnderType(container: rest.RestOperationParameter): UnknownType;
        /**
         * Creates and returns a new UnknownType instance in the SDK and on the server.
         * The new UnknownType will be automatically stored in the 'operationReturnType' property
         * of the parent webservices.PublishedOperation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInPublishedOperationUnderOperationReturnType(container: webservices.PublishedOperation): UnknownType;
        /**
         * Creates and returns a new UnknownType instance in the SDK and on the server.
         * The new UnknownType will be automatically stored in the 'parameterType' property
         * of the parent webservices.PublishedParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInPublishedParameterUnderParameterType(container: webservices.PublishedParameter): UnknownType;
        /**
         * Creates and returns a new UnknownType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): UnknownType;
    }
    /**
     * In version 7.9.0: introduced
     */
    interface IVoidType extends IDataType {
        readonly model: IModel;
        readonly containerAsAppServiceAction: appservices.IAppServiceAction;
        readonly containerAsAppServiceActionParameter: appservices.IAppServiceActionParameter;
        readonly containerAsConstant: constants.IConstant;
        readonly containerAsDataSetParameter: datasets.IDataSetParameter;
        readonly containerAsDocumentTemplateParameter: documenttemplates.IDocumentTemplateParameter;
        readonly containerAsImportMapping: importmappings.IImportMapping;
        readonly containerAsMicroflowBase: microflows.IMicroflowBase;
        readonly containerAsMicroflowParameterBase: microflows.IMicroflowParameterBase;
        readonly containerAsPageParameter: pages.IPageParameter;
        asLoaded(): VoidType;
        load(callback: (element: VoidType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<VoidType>;
    }
    /**
     * In version 7.9.0: introduced
     */
    class VoidType extends DataType implements IVoidType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsAppServiceAction(): appservices.AppServiceAction;
        get containerAsAppServiceActionParameter(): appservices.AppServiceActionParameter;
        get containerAsConstant(): constants.Constant;
        get containerAsDataSetColumn(): datasets.DataSetColumn;
        get containerAsDataSetParameter(): datasets.DataSetParameter;
        get containerAsDocumentTemplateParameter(): documenttemplates.DocumentTemplateParameter;
        get containerAsImportMapping(): importmappings.ImportMapping;
        get containerAsValueMappingElement(): mappings.ValueMappingElement;
        get containerAsCreateVariableAction(): microflows.CreateVariableAction;
        get containerAsMLModelCallParameterMapping(): microflows.MLModelCallParameterMapping;
        get containerAsMicroflowBase(): microflows.MicroflowBase;
        get containerAsMicroflowParameterBase(): microflows.MicroflowParameterBase;
        get containerAsMicroflowParameterObject(): microflows.MicroflowParameterObject;
        get containerAsResultHandling(): microflows.ResultHandling;
        get containerAsPageParameter(): pages.PageParameter;
        get containerAsRestOperationParameter(): rest.RestOperationParameter;
        get containerAsPublishedOperation(): webservices.PublishedOperation;
        get containerAsPublishedParameter(): webservices.PublishedParameter;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new VoidType instance in the SDK and on the server.
         * The new VoidType will be automatically stored in the 'actionReturnType' property
         * of the parent appservices.AppServiceAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceActionUnderActionReturnType(container: appservices.AppServiceAction): VoidType;
        /**
         * Creates and returns a new VoidType instance in the SDK and on the server.
         * The new VoidType will be automatically stored in the 'parameterType' property
         * of the parent appservices.AppServiceActionParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 to 9.0.1
         */
        static createInAppServiceActionParameterUnderParameterType(container: appservices.AppServiceActionParameter): VoidType;
        /**
         * Creates and returns a new VoidType instance in the SDK and on the server.
         * The new VoidType will be automatically stored in the 'type' property
         * of the parent constants.Constant element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInConstantUnderType(container: constants.Constant): VoidType;
        /**
         * Creates and returns a new VoidType instance in the SDK and on the server.
         * The new VoidType will be automatically stored in the 'columnType' property
         * of the parent datasets.DataSetColumn element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDataSetColumnUnderColumnType(container: datasets.DataSetColumn): VoidType;
        /**
         * Creates and returns a new VoidType instance in the SDK and on the server.
         * The new VoidType will be automatically stored in the 'parameterType' property
         * of the parent datasets.DataSetParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDataSetParameterUnderParameterType(container: datasets.DataSetParameter): VoidType;
        /**
         * Creates and returns a new VoidType instance in the SDK and on the server.
         * The new VoidType will be automatically stored in the 'parameterType' property
         * of the parent documenttemplates.DocumentTemplateParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInDocumentTemplateParameterUnderParameterType(container: documenttemplates.DocumentTemplateParameter): VoidType;
        /**
         * Creates and returns a new VoidType instance in the SDK and on the server.
         * The new VoidType will be automatically stored in the 'parameterType' property
         * of the parent importmappings.ImportMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.16.0 and higher
         */
        static createInImportMappingUnderParameterType(container: importmappings.ImportMapping): VoidType;
        /**
         * Creates and returns a new VoidType instance in the SDK and on the server.
         * The new VoidType will be automatically stored in the 'type' property
         * of the parent mappings.ValueMappingElement element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInValueMappingElementUnderType(container: mappings.ValueMappingElement): VoidType;
        /**
         * Creates and returns a new VoidType instance in the SDK and on the server.
         * The new VoidType will be automatically stored in the 'variableType' property
         * of the parent microflows.CreateVariableAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInCreateVariableActionUnderVariableType(container: microflows.CreateVariableAction): VoidType;
        /**
         * Creates and returns a new VoidType instance in the SDK and on the server.
         * The new VoidType will be automatically stored in the 'parameterType' property
         * of the parent microflows.MLModelCallParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.10.0 to 9.17.0
         */
        static createInMLModelCallParameterMappingUnderParameterType(container: microflows.MLModelCallParameterMapping): VoidType;
        /**
         * Creates and returns a new VoidType instance in the SDK and on the server.
         * The new VoidType will be automatically stored in the 'microflowReturnType' property
         * of the parent microflows.MicroflowBase element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowBaseUnderMicroflowReturnType(container: microflows.MicroflowBase): VoidType;
        /**
         * Creates and returns a new VoidType instance in the SDK and on the server.
         * The new VoidType will be automatically stored in the 'parameterType' property
         * of the parent microflows.MicroflowParameterBase element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowParameterBaseUnderParameterType(container: microflows.MicroflowParameterBase): VoidType;
        /**
         * Creates and returns a new VoidType instance in the SDK and on the server.
         * The new VoidType will be automatically stored in the 'variableType' property
         * of the parent microflows.MicroflowParameterObject element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInMicroflowParameterObjectUnderVariableType(container: microflows.MicroflowParameterObject): VoidType;
        /**
         * Creates and returns a new VoidType instance in the SDK and on the server.
         * The new VoidType will be automatically stored in the 'variableType' property
         * of the parent microflows.ResultHandling element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInResultHandlingUnderVariableType(container: microflows.ResultHandling): VoidType;
        /**
         * Creates and returns a new VoidType instance in the SDK and on the server.
         * The new VoidType will be automatically stored in the 'parameterType' property
         * of the parent pages.PageParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.4.0 and higher
         */
        static createInPageParameterUnderParameterType(container: pages.PageParameter): VoidType;
        /**
         * Creates and returns a new VoidType instance in the SDK and on the server.
         * The new VoidType will be automatically stored in the 'type' property
         * of the parent rest.RestOperationParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.17.0 and higher
         */
        static createInRestOperationParameterUnderType(container: rest.RestOperationParameter): VoidType;
        /**
         * Creates and returns a new VoidType instance in the SDK and on the server.
         * The new VoidType will be automatically stored in the 'operationReturnType' property
         * of the parent webservices.PublishedOperation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInPublishedOperationUnderOperationReturnType(container: webservices.PublishedOperation): VoidType;
        /**
         * Creates and returns a new VoidType instance in the SDK and on the server.
         * The new VoidType will be automatically stored in the 'parameterType' property
         * of the parent webservices.PublishedParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.9.0 and higher
         */
        static createInPublishedParameterUnderParameterType(container: webservices.PublishedParameter): VoidType;
        /**
         * Creates and returns a new VoidType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): VoidType;
    }
}
import { appservices } from "./appservices";
import { constants } from "./constants";
import { datasets } from "./datasets";
import { documenttemplates } from "./documenttemplates";
import { domainmodels } from "./domainmodels";
import { enumerations } from "./enumerations";
import { importmappings } from "./importmappings";
import { mappings } from "./mappings";
import { microflows } from "./microflows";
import { pages } from "./pages";
import { rest } from "./rest";
import { webservices } from "./webservices";
import { IModel } from "./base-model";
