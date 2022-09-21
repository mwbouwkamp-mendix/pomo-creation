import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
import { projects } from "./projects";
export declare namespace scheduledevents {
    class DaySelector extends internal.AbstractEnum {
        static First: DaySelector;
        static Second: DaySelector;
        static Third: DaySelector;
        static Fourth: DaySelector;
        static Last: DaySelector;
        protected qualifiedTsTypeName: string;
    }
    class IntervalType extends internal.AbstractEnum {
        static Second: IntervalType;
        static Minute: IntervalType;
        static Hour: IntervalType;
        static Day: IntervalType;
        static Week: IntervalType;
        static Month: IntervalType;
        static Year: IntervalType;
        protected qualifiedTsTypeName: string;
    }
    class OverlapStrategy extends internal.AbstractEnum {
        static SkipNext: OverlapStrategy;
        static DelayNext: OverlapStrategy;
        protected qualifiedTsTypeName: string;
    }
    class TimeZoneEnum extends internal.AbstractEnum {
        static UTC: TimeZoneEnum;
        static Server: TimeZoneEnum;
        protected qualifiedTsTypeName: string;
    }
    class Weekday extends internal.AbstractEnum {
        static Sunday: Weekday;
        static Monday: Weekday;
        static Tuesday: Weekday;
        static Wednesday: Weekday;
        static Thursday: Weekday;
        static Friday: Weekday;
        static Saturday: Weekday;
        protected qualifiedTsTypeName: string;
    }
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `ScheduledEvents`.
     */
    /**
     * In version 9.12.0: introduced
     */
    abstract class Schedule extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsScheduledEvent(): ScheduledEvent;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 9.12.0: introduced
     */
    class DaySchedule extends Schedule {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsScheduledEvent(): ScheduledEvent;
        get hourOfDay(): number;
        set hourOfDay(newValue: number);
        get minuteOfHour(): number;
        set minuteOfHour(newValue: number);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new DaySchedule instance in the SDK and on the server.
         * The new DaySchedule will be automatically stored in the 'schedule' property
         * of the parent ScheduledEvent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.12.0 and higher
         */
        static createIn(container: ScheduledEvent): DaySchedule;
        /**
         * Creates and returns a new DaySchedule instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): DaySchedule;
    }
    /**
     * In version 9.12.0: introduced
     */
    class HourSchedule extends Schedule {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsScheduledEvent(): ScheduledEvent;
        get multiplier(): number;
        set multiplier(newValue: number);
        get minuteOffset(): number;
        set minuteOffset(newValue: number);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new HourSchedule instance in the SDK and on the server.
         * The new HourSchedule will be automatically stored in the 'schedule' property
         * of the parent ScheduledEvent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.12.0 and higher
         */
        static createIn(container: ScheduledEvent): HourSchedule;
        /**
         * Creates and returns a new HourSchedule instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): HourSchedule;
    }
    /**
     * In version 9.12.0: introduced
     */
    class MinuteSchedule extends Schedule {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsScheduledEvent(): ScheduledEvent;
        get multiplier(): number;
        set multiplier(newValue: number);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MinuteSchedule instance in the SDK and on the server.
         * The new MinuteSchedule will be automatically stored in the 'schedule' property
         * of the parent ScheduledEvent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.12.0 and higher
         */
        static createIn(container: ScheduledEvent): MinuteSchedule;
        /**
         * Creates and returns a new MinuteSchedule instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MinuteSchedule;
    }
    /**
     * In version 9.12.0: introduced
     */
    abstract class MonthSchedule extends Schedule {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsScheduledEvent(): ScheduledEvent;
        get multiplier(): number;
        set multiplier(newValue: number);
        get monthOffset(): number;
        set monthOffset(newValue: number);
        get hourOfDay(): number;
        set hourOfDay(newValue: number);
        get minuteOfHour(): number;
        set minuteOfHour(newValue: number);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 9.12.0: introduced
     */
    class MonthDateSchedule extends MonthSchedule {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsScheduledEvent(): ScheduledEvent;
        get dayOfMonth(): number;
        set dayOfMonth(newValue: number);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MonthDateSchedule instance in the SDK and on the server.
         * The new MonthDateSchedule will be automatically stored in the 'schedule' property
         * of the parent ScheduledEvent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.12.0 and higher
         */
        static createIn(container: ScheduledEvent): MonthDateSchedule;
        /**
         * Creates and returns a new MonthDateSchedule instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MonthDateSchedule;
    }
    /**
     * In version 9.12.0: introduced
     */
    class MonthWeekdaySchedule extends MonthSchedule {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsScheduledEvent(): ScheduledEvent;
        get daySelector(): DaySelector;
        set daySelector(newValue: DaySelector);
        get weekday(): Weekday;
        set weekday(newValue: Weekday);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MonthWeekdaySchedule instance in the SDK and on the server.
         * The new MonthWeekdaySchedule will be automatically stored in the 'schedule' property
         * of the parent ScheduledEvent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.12.0 and higher
         */
        static createIn(container: ScheduledEvent): MonthWeekdaySchedule;
        /**
         * Creates and returns a new MonthWeekdaySchedule instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MonthWeekdaySchedule;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/scheduled-events relevant section in reference guide}
     */
    interface IScheduledEvent extends projects.IDocument {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        asLoaded(): ScheduledEvent;
        load(callback: (element: ScheduledEvent) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ScheduledEvent>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/scheduled-events relevant section in reference guide}
     */
    class ScheduledEvent extends projects.Document implements IScheduledEvent {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFolderBase(): projects.FolderBase;
        get startDateTime(): string;
        set startDateTime(newValue: string);
        get timeZone(): TimeZoneEnum;
        set timeZone(newValue: TimeZoneEnum);
        /**
         * In version 9.12.0: introduced
         */
        get schedule(): Schedule | null;
        set schedule(newValue: Schedule | null);
        /**
         * In version 9.12.0: introduced
         */
        get onOverlap(): OverlapStrategy;
        set onOverlap(newValue: OverlapStrategy);
        get interval(): number;
        set interval(newValue: number);
        get intervalType(): IntervalType;
        set intervalType(newValue: IntervalType);
        get microflow(): microflows.IMicroflow | null;
        set microflow(newValue: microflows.IMicroflow | null);
        get microflowQualifiedName(): string | null;
        get enabled(): boolean;
        set enabled(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
        /**
         * Creates a new ScheduledEvent unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container: projects.IFolderBase): ScheduledEvent;
    }
    /**
     * In version 9.12.0: introduced
     */
    class WeekSchedule extends Schedule {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsScheduledEvent(): ScheduledEvent;
        get sunday(): boolean;
        set sunday(newValue: boolean);
        get monday(): boolean;
        set monday(newValue: boolean);
        get tuesday(): boolean;
        set tuesday(newValue: boolean);
        get wednesday(): boolean;
        set wednesday(newValue: boolean);
        get thursday(): boolean;
        set thursday(newValue: boolean);
        get friday(): boolean;
        set friday(newValue: boolean);
        get saturday(): boolean;
        set saturday(newValue: boolean);
        get hourOfDay(): number;
        set hourOfDay(newValue: number);
        get minuteOfHour(): number;
        set minuteOfHour(newValue: number);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new WeekSchedule instance in the SDK and on the server.
         * The new WeekSchedule will be automatically stored in the 'schedule' property
         * of the parent ScheduledEvent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.12.0 and higher
         */
        static createIn(container: ScheduledEvent): WeekSchedule;
        /**
         * Creates and returns a new WeekSchedule instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): WeekSchedule;
    }
    /**
     * In version 9.12.0: introduced
     */
    abstract class YearSchedule extends Schedule {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsScheduledEvent(): ScheduledEvent;
        get month(): number;
        set month(newValue: number);
        get hourOfDay(): number;
        set hourOfDay(newValue: number);
        get minuteOfHour(): number;
        set minuteOfHour(newValue: number);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 9.12.0: introduced
     */
    class YearDateSchedule extends YearSchedule {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsScheduledEvent(): ScheduledEvent;
        get dayOfMonth(): number;
        set dayOfMonth(newValue: number);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new YearDateSchedule instance in the SDK and on the server.
         * The new YearDateSchedule will be automatically stored in the 'schedule' property
         * of the parent ScheduledEvent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.12.0 and higher
         */
        static createIn(container: ScheduledEvent): YearDateSchedule;
        /**
         * Creates and returns a new YearDateSchedule instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): YearDateSchedule;
    }
    /**
     * In version 9.12.0: introduced
     */
    class YearWeekdaySchedule extends YearSchedule {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsScheduledEvent(): ScheduledEvent;
        get daySelector(): DaySelector;
        set daySelector(newValue: DaySelector);
        get weekday(): Weekday;
        set weekday(newValue: Weekday);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new YearWeekdaySchedule instance in the SDK and on the server.
         * The new YearWeekdaySchedule will be automatically stored in the 'schedule' property
         * of the parent ScheduledEvent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.12.0 and higher
         */
        static createIn(container: ScheduledEvent): YearWeekdaySchedule;
        /**
         * Creates and returns a new YearWeekdaySchedule instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): YearWeekdaySchedule;
    }
}
import { microflows } from "./microflows";
import { IModel } from "./base-model";
