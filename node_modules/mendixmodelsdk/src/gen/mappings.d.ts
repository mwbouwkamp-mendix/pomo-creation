import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
import { projects } from "./projects";
export declare namespace mappings {
    class ElementType extends internal.AbstractEnum {
        static Undefined: ElementType;
        static Inheritance: ElementType;
        static Choice: ElementType;
        static Object: ElementType;
        static Value: ElementType;
        static Sequence: ElementType;
        static All: ElementType;
        static NamedArray: ElementType;
        static Array: ElementType;
        static Wrapper: ElementType;
        protected qualifiedTsTypeName: string;
    }
    class ObjectHandlingBackupEnum extends internal.AbstractEnum {
        static Create: ObjectHandlingBackupEnum;
        static Ignore: ObjectHandlingBackupEnum;
        static Error: ObjectHandlingBackupEnum;
        protected qualifiedTsTypeName: string;
    }
    class ObjectHandlingEnum extends internal.AbstractEnum {
        static Parameter: ObjectHandlingEnum;
        static Create: ObjectHandlingEnum;
        static Find: ObjectHandlingEnum;
        static Custom: ObjectHandlingEnum;
        protected qualifiedTsTypeName: string;
    }
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `Mappings`.
     */
    /**
     * In version 6.6.0: introduced
     */
    abstract class Element extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsJsonStructure(): jsonstructures.JsonStructure;
        get containerAsElement(): Element;
        get containerAsEntityMessageDefinition(): messagedefinitions.EntityMessageDefinition;
        get elementType(): ElementType;
        set elementType(newValue: ElementType);
        get primitiveType(): xmlschemas.XmlPrimitiveType;
        set primitiveType(newValue: xmlschemas.XmlPrimitiveType);
        /**
         * The value of this property is conceptually of type mappings.ElementPath.
         */
        get path(): string;
        set path(newValue: string);
        get isDefaultType(): boolean;
        set isDefaultType(newValue: boolean);
        get minOccurs(): number;
        set minOccurs(newValue: number);
        get maxOccurs(): number;
        set maxOccurs(newValue: number);
        get nillable(): boolean;
        set nillable(newValue: boolean);
        get exposedName(): string;
        set exposedName(newValue: string);
        /**
         * In version 7.6.0: introduced
         */
        get exposedItemName(): string;
        set exposedItemName(newValue: string);
        get maxLength(): number;
        set maxLength(newValue: number);
        get fractionDigits(): number;
        set fractionDigits(newValue: number);
        get totalDigits(): number;
        set totalDigits(newValue: number);
        get errorMessage(): string;
        set errorMessage(newValue: string);
        get warningMessage(): string;
        set warningMessage(newValue: string);
        get children(): internal.IList<Element>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/mapping-documents relevant section in reference guide}
     */
    interface IMappingDocument extends projects.IDocument {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        asLoaded(): MappingDocument;
        load(callback: (element: MappingDocument) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<MappingDocument>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/mapping-documents relevant section in reference guide}
     */
    abstract class MappingDocument extends projects.Document implements IMappingDocument {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFolderBase(): projects.FolderBase;
        get rootMappingElements(): internal.IList<ObjectMappingElement>;
        get xmlSchema(): xmlschemas.IXmlSchema | null;
        set xmlSchema(newValue: xmlschemas.IXmlSchema | null);
        get xmlSchemaQualifiedName(): string | null;
        /**
         * In version 6.4.0: introduced
         */
        get jsonStructure(): jsonstructures.IJsonStructure | null;
        set jsonStructure(newValue: jsonstructures.IJsonStructure | null);
        get jsonStructureQualifiedName(): string | null;
        get rootElementName(): string;
        set rootElementName(newValue: string);
        get importedWebService(): webservices.IImportedWebService | null;
        set importedWebService(newValue: webservices.IImportedWebService | null);
        get importedWebServiceQualifiedName(): string | null;
        get serviceName(): string;
        set serviceName(newValue: string);
        get operationName(): string;
        set operationName(newValue: string);
        /**
         * In version 7.6.0: introduced
         */
        get messageDefinition(): messagedefinitions.IMessageDefinition | null;
        set messageDefinition(newValue: messagedefinitions.IMessageDefinition | null);
        get messageDefinitionQualifiedName(): string | null;
        /**
         * In version 7.14.0: introduced
         */
        get publicName(): string;
        set publicName(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
    }
    abstract class MappingElement extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsMappingDocument(): MappingDocument;
        get containerAsObjectMappingElement(): ObjectMappingElement;
        get documentation(): string;
        set documentation(newValue: string);
        get elementType(): ElementType;
        set elementType(newValue: ElementType);
        /**
         * The value of this property is conceptually of type mappings.ElementPath.
         *
         * In version 7.6.0: deleted
         */
        get path(): string;
        set path(newValue: string);
        /**
         * The value of this property is conceptually of type mappings.ElementPath.
         *
         * In version 7.6.0: introduced
         */
        get jsonPath(): string;
        set jsonPath(newValue: string);
        /**
         * The value of this property is conceptually of type mappings.ElementPath.
         *
         * In version 7.6.0: introduced
         */
        get xmlPath(): string;
        set xmlPath(newValue: string);
        get minOccurs(): number;
        set minOccurs(newValue: number);
        get maxOccurs(): number;
        set maxOccurs(newValue: number);
        get nillable(): boolean;
        set nillable(newValue: boolean);
        /**
         * In version 6.6.0: introduced
         */
        get exposedName(): string;
        set exposedName(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    class MappingMicroflowCall extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsObjectMappingElement(): ObjectMappingElement;
        get microflow(): microflows.IMicroflow | null;
        set microflow(newValue: microflows.IMicroflow | null);
        get microflowQualifiedName(): string | null;
        get parameterMappings(): internal.IList<MappingMicroflowParameter>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MappingMicroflowCall instance in the SDK and on the server.
         * The new MappingMicroflowCall will be automatically stored in the 'mappingMicroflowCall' property
         * of the parent ObjectMappingElement element passed as argument.
         */
        static createIn(container: ObjectMappingElement): MappingMicroflowCall;
        /**
         * Creates and returns a new MappingMicroflowCall instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MappingMicroflowCall;
    }
    class MappingMicroflowParameter extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsMappingMicroflowCall(): MappingMicroflowCall;
        get parameter(): microflows.IMicroflowParameter | null;
        set parameter(newValue: microflows.IMicroflowParameter | null);
        get parameterQualifiedName(): string | null;
        get levelOfParent(): number;
        set levelOfParent(newValue: number);
        /**
         * The value of this property is conceptually of type mappings.ElementPath.
         *
         * In version 7.6.0: deleted
         */
        get valueElementPath(): string;
        set valueElementPath(newValue: string);
        /**
         * The value of this property is conceptually of type mappings.ElementPath.
         *
         * In version 7.6.0: introduced
         */
        get jsonValueElementPath(): string;
        set jsonValueElementPath(newValue: string);
        /**
         * The value of this property is conceptually of type mappings.ElementPath.
         *
         * In version 7.6.0: introduced
         */
        get xmlValueElementPath(): string;
        set xmlValueElementPath(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MappingMicroflowParameter instance in the SDK and on the server.
         * The new MappingMicroflowParameter will be automatically stored in the 'parameterMappings' property
         * of the parent MappingMicroflowCall element passed as argument.
         */
        static createIn(container: MappingMicroflowCall): MappingMicroflowParameter;
        /**
         * Creates and returns a new MappingMicroflowParameter instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MappingMicroflowParameter;
    }
    abstract class ObjectMappingElement extends MappingElement {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsMappingDocument(): MappingDocument;
        get containerAsObjectMappingElement(): ObjectMappingElement;
        get mappingMicroflowCall(): MappingMicroflowCall | null;
        set mappingMicroflowCall(newValue: MappingMicroflowCall | null);
        get children(): internal.IList<MappingElement>;
        get entity(): domainmodels.IEntity | null;
        set entity(newValue: domainmodels.IEntity | null);
        get entityQualifiedName(): string | null;
        get association(): domainmodels.IAssociationBase | null;
        set association(newValue: domainmodels.IAssociationBase | null);
        get associationQualifiedName(): string | null;
        get objectHandling(): ObjectHandlingEnum;
        set objectHandling(newValue: ObjectHandlingEnum);
        get objectHandlingBackup(): ObjectHandlingBackupEnum;
        set objectHandlingBackup(newValue: ObjectHandlingBackupEnum);
        /**
         * In version 7.17.0: introduced
         */
        get objectHandlingBackupAllowOverride(): boolean;
        set objectHandlingBackupAllowOverride(newValue: boolean);
        /**
         * In version 6.4.0: introduced
         */
        get isDefaultType(): boolean;
        set isDefaultType(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    abstract class ValueMappingElement extends MappingElement {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsObjectMappingElement(): ObjectMappingElement;
        /**
         * The value of this property is conceptually of type dataTypes.LegacyDataType.
         *
         * In version 7.9.0: deleted
         */
        get xmlDataType(): string;
        set xmlDataType(newValue: string);
        /**
         * In version 7.9.0: introduced
         */
        get type(): datatypes.DataType;
        set type(newValue: datatypes.DataType);
        get isKey(): boolean;
        set isKey(newValue: boolean);
        get isXmlAttribute(): boolean;
        set isXmlAttribute(newValue: boolean);
        /**
         * In version 6.1.0: introduced
         */
        get xmlPrimitiveType(): xmlschemas.XmlPrimitiveType;
        set xmlPrimitiveType(newValue: xmlschemas.XmlPrimitiveType);
        get isContent(): boolean;
        set isContent(newValue: boolean);
        get attribute(): domainmodels.IAttribute | null;
        set attribute(newValue: domainmodels.IAttribute | null);
        get attributeQualifiedName(): string | null;
        get converter(): microflows.IMicroflow | null;
        set converter(newValue: microflows.IMicroflow | null);
        get converterQualifiedName(): string | null;
        /**
         * In version 6.4.1: deleted
         */
        get expectedContentTypes(): string;
        set expectedContentTypes(newValue: string);
        get maxLength(): number;
        set maxLength(newValue: number);
        get fractionDigits(): number;
        set fractionDigits(newValue: number);
        get totalDigits(): number;
        set totalDigits(newValue: number);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
}
import { datatypes } from "./datatypes";
import { domainmodels } from "./domainmodels";
import { jsonstructures } from "./jsonstructures";
import { messagedefinitions } from "./messagedefinitions";
import { microflows } from "./microflows";
import { webservices } from "./webservices";
import { xmlschemas } from "./xmlschemas";
import { IModel } from "./base-model";
