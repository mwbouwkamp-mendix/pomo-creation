"use strict";
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.images = exports.StructureVersionInfo = void 0;
const internal = require("../sdk/internal");
exports.StructureVersionInfo = internal.StructureVersionInfo;
const projects_1 = require("./projects");
var images;
(function (images) {
    class MxImageFormat extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "images.MxImageFormat";
        }
    }
    MxImageFormat.Unknown = new MxImageFormat("Unknown", {});
    MxImageFormat.Png = new MxImageFormat("Png", {});
    MxImageFormat.Jpg = new MxImageFormat("Jpg", {});
    MxImageFormat.Bmp = new MxImageFormat("Bmp", {});
    MxImageFormat.Gif = new MxImageFormat("Gif", {});
    MxImageFormat.Svg = new MxImageFormat("Svg", {});
    images.MxImageFormat = MxImageFormat;
    class Image extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__name = new internal.PrimitiveProperty(Image, this, "name", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__imageData = new internal.PrimitiveProperty(Image, this, "imageData", null, internal.PrimitiveTypeEnum.Blob);
            /** @internal */
            this.__imageFormat = new internal.EnumProperty(Image, this, "imageFormat", MxImageFormat.Unknown, MxImageFormat);
            if (arguments.length < 4) {
                throw new Error("new Image() cannot be invoked directly, please use 'model.images.createImage()'");
            }
        }
        get containerAsImageCollection() {
            return super.getContainerAs(ImageCollection);
        }
        get name() {
            return this.__name.get();
        }
        set name(newValue) {
            this.__name.set(newValue);
        }
        get imageData() {
            return this.__imageData.get();
        }
        set imageData(newValue) {
            this.__imageData.set(newValue);
        }
        /**
         * In version 9.17.0: introduced
         */
        get imageFormat() {
            return this.__imageFormat.get();
        }
        set imageFormat(newValue) {
            this.__imageFormat.set(newValue);
        }
        /**
         * Creates and returns a new Image instance in the SDK and on the server.
         * The new Image will be automatically stored in the 'images' property
         * of the parent ImageCollection element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, Image, "images", true);
        }
        /**
         * Creates and returns a new Image instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, Image);
        }
        /** @internal */
        _isByNameReferrable() {
            return this.__name.isAvailable;
        }
        get qualifiedName() {
            return this._getQualifiedName();
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__imageFormat.isAvailable) {
                this.imageFormat = MxImageFormat.Unknown;
            }
        }
    }
    Image.structureTypeName = "Images$Image";
    Image.versionInfo = new exports.StructureVersionInfo({
        properties: {
            name: {
                public: {
                    currentValue: true
                }
            },
            imageFormat: {
                introduced: "9.17.0"
            }
        },
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    images.Image = Image;
    /**
     * See: {@link https://docs.mendix.com/refguide/images relevant section in reference guide}
     */
    class ImageCollection extends projects_1.projects.Document {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            /** @internal */
            this.__images = new internal.PartListProperty(ImageCollection, this, "images", []);
            this._containmentName = "documents";
        }
        get containerAsFolderBase() {
            return super.getContainerAs(projects_1.projects.FolderBase);
        }
        get images() {
            return this.__images.get();
        }
        /**
         * Creates a new ImageCollection unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container) {
            return internal.instancehelpers.createUnit(container, ImageCollection);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ImageCollection.structureTypeName = "Images$ImageCollection";
    ImageCollection.versionInfo = new exports.StructureVersionInfo({
        properties: {
            images: {
                public: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.ModelUnit);
    images.ImageCollection = ImageCollection;
})(images = exports.images || (exports.images = {}));
//# sourceMappingURL=images.js.map