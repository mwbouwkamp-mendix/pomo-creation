import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
import { projects } from "./projects";
import { mappings } from "./mappings";
export declare namespace xmlschemas {
    class XmlPrimitiveType extends internal.AbstractEnum {
        static Unknown: XmlPrimitiveType;
        static Boolean: XmlPrimitiveType;
        static Date: XmlPrimitiveType;
        static Time: XmlPrimitiveType;
        static DateTime: XmlPrimitiveType;
        static Decimal: XmlPrimitiveType;
        static Float: XmlPrimitiveType;
        static Integer: XmlPrimitiveType;
        static Long: XmlPrimitiveType;
        static Binary: XmlPrimitiveType;
        static String: XmlPrimitiveType;
        static AnyType: XmlPrimitiveType;
        protected qualifiedTsTypeName: string;
    }
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `XmlSchemas`.
     */
    interface IMxSchema extends projects.IDocument {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        asLoaded(): MxSchema;
        load(callback: (element: MxSchema) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<MxSchema>;
    }
    abstract class MxSchema extends projects.Document implements IMxSchema {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFolderBase(): projects.FolderBase;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
    }
    /**
     * In version 6.6.0: introduced
     */
    class XmlElement extends mappings.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsJsonStructure(): jsonstructures.JsonStructure;
        get containerAsElement(): mappings.Element;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new XmlElement instance in the SDK and on the server.
         * The new XmlElement will be automatically stored in the 'elements' property
         * of the parent jsonstructures.JsonStructure element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 and higher
         */
        static createInJsonStructureUnderElements(container: jsonstructures.JsonStructure): XmlElement;
        /**
         * Creates and returns a new XmlElement instance in the SDK and on the server.
         * The new XmlElement will be automatically stored in the 'children' property
         * of the parent mappings.Element element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 and higher
         */
        static createInElementUnderChildren(container: mappings.Element): XmlElement;
        /**
         * Creates and returns a new XmlElement instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): XmlElement;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/xml-schemas relevant section in reference guide}
     */
    interface IXmlSchema extends IMxSchema {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        asLoaded(): XmlSchema;
        load(callback: (element: XmlSchema) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<XmlSchema>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/xml-schemas relevant section in reference guide}
     */
    class XmlSchema extends MxSchema implements IXmlSchema {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFolderBase(): projects.FolderBase;
        get entries(): internal.IList<XmlSchemaEntry>;
        get filePath(): string;
        set filePath(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
        /**
         * Creates a new XmlSchema unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container: projects.IFolderBase): XmlSchema;
    }
    class XmlSchemaEntry extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsWsdlDescription(): webservices.WsdlDescription;
        get containerAsXmlSchema(): XmlSchema;
        get targetNamespace(): string;
        set targetNamespace(newValue: string);
        get location(): string;
        set location(newValue: string);
        get contents(): string;
        set contents(newValue: string);
        get localizedLocationFormat(): string;
        set localizedLocationFormat(newValue: string);
        get localizedContentsFormat(): string;
        set localizedContentsFormat(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new XmlSchemaEntry instance in the SDK and on the server.
         * The new XmlSchemaEntry will be automatically stored in the 'schemaEntries' property
         * of the parent webservices.WsdlDescription element passed as argument.
         */
        static createInWsdlDescriptionUnderSchemaEntries(container: webservices.WsdlDescription): XmlSchemaEntry;
        /**
         * Creates and returns a new XmlSchemaEntry instance in the SDK and on the server.
         * The new XmlSchemaEntry will be automatically stored in the 'entries' property
         * of the parent XmlSchema element passed as argument.
         */
        static createInXmlSchemaUnderEntries(container: XmlSchema): XmlSchemaEntry;
        /**
         * Creates and returns a new XmlSchemaEntry instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): XmlSchemaEntry;
    }
}
import { jsonstructures } from "./jsonstructures";
import { webservices } from "./webservices";
import { IModel } from "./base-model";
