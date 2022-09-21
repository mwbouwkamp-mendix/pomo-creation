import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
import { projects } from "./projects";
export declare namespace images {
    class MxImageFormat extends internal.AbstractEnum {
        static Unknown: MxImageFormat;
        static Png: MxImageFormat;
        static Jpg: MxImageFormat;
        static Bmp: MxImageFormat;
        static Gif: MxImageFormat;
        static Svg: MxImageFormat;
        protected qualifiedTsTypeName: string;
    }
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `Images`.
     */
    interface IImage extends internal.IElement, internal.IByNameReferrable {
        readonly model: IModel;
        readonly containerAsImageCollection: IImageCollection;
        readonly name: string;
        asLoaded(): Image;
        load(callback: (element: Image) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<Image>;
    }
    class Image extends internal.Element<IModel> implements IImage {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsImageCollection(): ImageCollection;
        get name(): string;
        set name(newValue: string);
        get imageData(): string | null;
        set imageData(newValue: string | null);
        /**
         * In version 9.17.0: introduced
         */
        get imageFormat(): MxImageFormat;
        set imageFormat(newValue: MxImageFormat);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new Image instance in the SDK and on the server.
         * The new Image will be automatically stored in the 'images' property
         * of the parent ImageCollection element passed as argument.
         */
        static createIn(container: ImageCollection): Image;
        /**
         * Creates and returns a new Image instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): Image;
        get qualifiedName(): string | null;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/images relevant section in reference guide}
     */
    interface IImageCollection extends projects.IDocument {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        readonly images: internal.IList<IImage>;
        asLoaded(): ImageCollection;
        load(callback: (element: ImageCollection) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ImageCollection>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/images relevant section in reference guide}
     */
    class ImageCollection extends projects.Document implements IImageCollection {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFolderBase(): projects.FolderBase;
        get images(): internal.IList<Image>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
        /**
         * Creates a new ImageCollection unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container: projects.IFolderBase): ImageCollection;
    }
}
import { IModel } from "./base-model";
