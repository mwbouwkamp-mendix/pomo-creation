"use strict";
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.scheduledevents = exports.StructureVersionInfo = void 0;
const internal = require("../sdk/internal");
exports.StructureVersionInfo = internal.StructureVersionInfo;
const projects_1 = require("./projects");
var scheduledevents;
(function (scheduledevents) {
    class DaySelector extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "scheduledevents.DaySelector";
        }
    }
    DaySelector.First = new DaySelector("First", {});
    DaySelector.Second = new DaySelector("Second", {});
    DaySelector.Third = new DaySelector("Third", {});
    DaySelector.Fourth = new DaySelector("Fourth", {});
    DaySelector.Last = new DaySelector("Last", {});
    scheduledevents.DaySelector = DaySelector;
    class IntervalType extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "scheduledevents.IntervalType";
        }
    }
    IntervalType.Second = new IntervalType("Second", {});
    IntervalType.Minute = new IntervalType("Minute", {});
    IntervalType.Hour = new IntervalType("Hour", {});
    IntervalType.Day = new IntervalType("Day", {});
    IntervalType.Week = new IntervalType("Week", {});
    IntervalType.Month = new IntervalType("Month", {});
    IntervalType.Year = new IntervalType("Year", {});
    scheduledevents.IntervalType = IntervalType;
    class OverlapStrategy extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "scheduledevents.OverlapStrategy";
        }
    }
    OverlapStrategy.SkipNext = new OverlapStrategy("SkipNext", {});
    OverlapStrategy.DelayNext = new OverlapStrategy("DelayNext", {});
    scheduledevents.OverlapStrategy = OverlapStrategy;
    class TimeZoneEnum extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "scheduledevents.TimeZoneEnum";
        }
    }
    TimeZoneEnum.UTC = new TimeZoneEnum("UTC", {});
    TimeZoneEnum.Server = new TimeZoneEnum("Server", {});
    scheduledevents.TimeZoneEnum = TimeZoneEnum;
    class Weekday extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "scheduledevents.Weekday";
        }
    }
    Weekday.Sunday = new Weekday("Sunday", {});
    Weekday.Monday = new Weekday("Monday", {});
    Weekday.Tuesday = new Weekday("Tuesday", {});
    Weekday.Wednesday = new Weekday("Wednesday", {});
    Weekday.Thursday = new Weekday("Thursday", {});
    Weekday.Friday = new Weekday("Friday", {});
    Weekday.Saturday = new Weekday("Saturday", {});
    scheduledevents.Weekday = Weekday;
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `ScheduledEvents`.
     */
    /**
     * In version 9.12.0: introduced
     */
    class Schedule extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new Schedule() cannot be invoked directly, please use 'model.scheduledevents.createSchedule()'");
            }
        }
        get containerAsScheduledEvent() {
            return super.getContainerAs(ScheduledEvent);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    Schedule.structureTypeName = "ScheduledEvents$Schedule";
    Schedule.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.12.0"
    }, internal.StructureType.Element);
    scheduledevents.Schedule = Schedule;
    /**
     * In version 9.12.0: introduced
     */
    class DaySchedule extends Schedule {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__hourOfDay = new internal.PrimitiveProperty(DaySchedule, this, "hourOfDay", 0, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__minuteOfHour = new internal.PrimitiveProperty(DaySchedule, this, "minuteOfHour", 0, internal.PrimitiveTypeEnum.Integer);
            if (arguments.length < 4) {
                throw new Error("new DaySchedule() cannot be invoked directly, please use 'model.scheduledevents.createDaySchedule()'");
            }
        }
        get containerAsScheduledEvent() {
            return super.getContainerAs(ScheduledEvent);
        }
        get hourOfDay() {
            return this.__hourOfDay.get();
        }
        set hourOfDay(newValue) {
            this.__hourOfDay.set(newValue);
        }
        get minuteOfHour() {
            return this.__minuteOfHour.get();
        }
        set minuteOfHour(newValue) {
            this.__minuteOfHour.set(newValue);
        }
        /**
         * Creates and returns a new DaySchedule instance in the SDK and on the server.
         * The new DaySchedule will be automatically stored in the 'schedule' property
         * of the parent ScheduledEvent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.12.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, DaySchedule.structureTypeName, { start: "9.12.0" });
            return internal.instancehelpers.createElement(container, DaySchedule, "schedule", false);
        }
        /**
         * Creates and returns a new DaySchedule instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, DaySchedule);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.hourOfDay = 0;
            this.minuteOfHour = 0;
        }
    }
    DaySchedule.structureTypeName = "ScheduledEvents$DaySchedule";
    DaySchedule.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.12.0"
    }, internal.StructureType.Element);
    scheduledevents.DaySchedule = DaySchedule;
    /**
     * In version 9.12.0: introduced
     */
    class HourSchedule extends Schedule {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__multiplier = new internal.PrimitiveProperty(HourSchedule, this, "multiplier", 1, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__minuteOffset = new internal.PrimitiveProperty(HourSchedule, this, "minuteOffset", 0, internal.PrimitiveTypeEnum.Integer);
            if (arguments.length < 4) {
                throw new Error("new HourSchedule() cannot be invoked directly, please use 'model.scheduledevents.createHourSchedule()'");
            }
        }
        get containerAsScheduledEvent() {
            return super.getContainerAs(ScheduledEvent);
        }
        get multiplier() {
            return this.__multiplier.get();
        }
        set multiplier(newValue) {
            this.__multiplier.set(newValue);
        }
        get minuteOffset() {
            return this.__minuteOffset.get();
        }
        set minuteOffset(newValue) {
            this.__minuteOffset.set(newValue);
        }
        /**
         * Creates and returns a new HourSchedule instance in the SDK and on the server.
         * The new HourSchedule will be automatically stored in the 'schedule' property
         * of the parent ScheduledEvent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.12.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, HourSchedule.structureTypeName, { start: "9.12.0" });
            return internal.instancehelpers.createElement(container, HourSchedule, "schedule", false);
        }
        /**
         * Creates and returns a new HourSchedule instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, HourSchedule);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.minuteOffset = 0;
            this.multiplier = 1;
        }
    }
    HourSchedule.structureTypeName = "ScheduledEvents$HourSchedule";
    HourSchedule.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.12.0"
    }, internal.StructureType.Element);
    scheduledevents.HourSchedule = HourSchedule;
    /**
     * In version 9.12.0: introduced
     */
    class MinuteSchedule extends Schedule {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__multiplier = new internal.PrimitiveProperty(MinuteSchedule, this, "multiplier", 1, internal.PrimitiveTypeEnum.Integer);
            if (arguments.length < 4) {
                throw new Error("new MinuteSchedule() cannot be invoked directly, please use 'model.scheduledevents.createMinuteSchedule()'");
            }
        }
        get containerAsScheduledEvent() {
            return super.getContainerAs(ScheduledEvent);
        }
        get multiplier() {
            return this.__multiplier.get();
        }
        set multiplier(newValue) {
            this.__multiplier.set(newValue);
        }
        /**
         * Creates and returns a new MinuteSchedule instance in the SDK and on the server.
         * The new MinuteSchedule will be automatically stored in the 'schedule' property
         * of the parent ScheduledEvent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.12.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, MinuteSchedule.structureTypeName, { start: "9.12.0" });
            return internal.instancehelpers.createElement(container, MinuteSchedule, "schedule", false);
        }
        /**
         * Creates and returns a new MinuteSchedule instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, MinuteSchedule);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.multiplier = 1;
        }
    }
    MinuteSchedule.structureTypeName = "ScheduledEvents$MinuteSchedule";
    MinuteSchedule.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.12.0"
    }, internal.StructureType.Element);
    scheduledevents.MinuteSchedule = MinuteSchedule;
    /**
     * In version 9.12.0: introduced
     */
    class MonthSchedule extends Schedule {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__multiplier = new internal.PrimitiveProperty(MonthSchedule, this, "multiplier", 1, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__monthOffset = new internal.PrimitiveProperty(MonthSchedule, this, "monthOffset", 0, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__hourOfDay = new internal.PrimitiveProperty(MonthSchedule, this, "hourOfDay", 0, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__minuteOfHour = new internal.PrimitiveProperty(MonthSchedule, this, "minuteOfHour", 0, internal.PrimitiveTypeEnum.Integer);
            if (arguments.length < 4) {
                throw new Error("new MonthSchedule() cannot be invoked directly, please use 'model.scheduledevents.createMonthSchedule()'");
            }
        }
        get containerAsScheduledEvent() {
            return super.getContainerAs(ScheduledEvent);
        }
        get multiplier() {
            return this.__multiplier.get();
        }
        set multiplier(newValue) {
            this.__multiplier.set(newValue);
        }
        get monthOffset() {
            return this.__monthOffset.get();
        }
        set monthOffset(newValue) {
            this.__monthOffset.set(newValue);
        }
        get hourOfDay() {
            return this.__hourOfDay.get();
        }
        set hourOfDay(newValue) {
            this.__hourOfDay.set(newValue);
        }
        get minuteOfHour() {
            return this.__minuteOfHour.get();
        }
        set minuteOfHour(newValue) {
            this.__minuteOfHour.set(newValue);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.hourOfDay = 0;
            this.minuteOfHour = 0;
            this.monthOffset = 0;
            this.multiplier = 1;
        }
    }
    MonthSchedule.structureTypeName = "ScheduledEvents$MonthSchedule";
    MonthSchedule.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.12.0"
    }, internal.StructureType.Element);
    scheduledevents.MonthSchedule = MonthSchedule;
    /**
     * In version 9.12.0: introduced
     */
    class MonthDateSchedule extends MonthSchedule {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__dayOfMonth = new internal.PrimitiveProperty(MonthDateSchedule, this, "dayOfMonth", 1, internal.PrimitiveTypeEnum.Integer);
            if (arguments.length < 4) {
                throw new Error("new MonthDateSchedule() cannot be invoked directly, please use 'model.scheduledevents.createMonthDateSchedule()'");
            }
        }
        get containerAsScheduledEvent() {
            return super.getContainerAs(ScheduledEvent);
        }
        get dayOfMonth() {
            return this.__dayOfMonth.get();
        }
        set dayOfMonth(newValue) {
            this.__dayOfMonth.set(newValue);
        }
        /**
         * Creates and returns a new MonthDateSchedule instance in the SDK and on the server.
         * The new MonthDateSchedule will be automatically stored in the 'schedule' property
         * of the parent ScheduledEvent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.12.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, MonthDateSchedule.structureTypeName, { start: "9.12.0" });
            return internal.instancehelpers.createElement(container, MonthDateSchedule, "schedule", false);
        }
        /**
         * Creates and returns a new MonthDateSchedule instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, MonthDateSchedule);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.dayOfMonth = 1;
        }
    }
    MonthDateSchedule.structureTypeName = "ScheduledEvents$MonthDateSchedule";
    MonthDateSchedule.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.12.0"
    }, internal.StructureType.Element);
    scheduledevents.MonthDateSchedule = MonthDateSchedule;
    /**
     * In version 9.12.0: introduced
     */
    class MonthWeekdaySchedule extends MonthSchedule {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__daySelector = new internal.EnumProperty(MonthWeekdaySchedule, this, "daySelector", DaySelector.First, DaySelector);
            /** @internal */
            this.__weekday = new internal.EnumProperty(MonthWeekdaySchedule, this, "weekday", Weekday.Sunday, Weekday);
            if (arguments.length < 4) {
                throw new Error("new MonthWeekdaySchedule() cannot be invoked directly, please use 'model.scheduledevents.createMonthWeekdaySchedule()'");
            }
        }
        get containerAsScheduledEvent() {
            return super.getContainerAs(ScheduledEvent);
        }
        get daySelector() {
            return this.__daySelector.get();
        }
        set daySelector(newValue) {
            this.__daySelector.set(newValue);
        }
        get weekday() {
            return this.__weekday.get();
        }
        set weekday(newValue) {
            this.__weekday.set(newValue);
        }
        /**
         * Creates and returns a new MonthWeekdaySchedule instance in the SDK and on the server.
         * The new MonthWeekdaySchedule will be automatically stored in the 'schedule' property
         * of the parent ScheduledEvent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.12.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, MonthWeekdaySchedule.structureTypeName, { start: "9.12.0" });
            return internal.instancehelpers.createElement(container, MonthWeekdaySchedule, "schedule", false);
        }
        /**
         * Creates and returns a new MonthWeekdaySchedule instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, MonthWeekdaySchedule);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.daySelector = DaySelector.First;
            this.weekday = Weekday.Sunday;
        }
    }
    MonthWeekdaySchedule.structureTypeName = "ScheduledEvents$MonthWeekdaySchedule";
    MonthWeekdaySchedule.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.12.0"
    }, internal.StructureType.Element);
    scheduledevents.MonthWeekdaySchedule = MonthWeekdaySchedule;
    /**
     * See: {@link https://docs.mendix.com/refguide/scheduled-events relevant section in reference guide}
     */
    class ScheduledEvent extends projects_1.projects.Document {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            /** @internal */
            this.__startDateTime = new internal.PrimitiveProperty(ScheduledEvent, this, "startDateTime", "", internal.PrimitiveTypeEnum.DateTime);
            /** @internal */
            this.__timeZone = new internal.EnumProperty(ScheduledEvent, this, "timeZone", TimeZoneEnum.UTC, TimeZoneEnum);
            /** @internal */
            this.__schedule = new internal.PartProperty(ScheduledEvent, this, "schedule", null, false);
            /** @internal */
            this.__onOverlap = new internal.EnumProperty(ScheduledEvent, this, "onOverlap", OverlapStrategy.SkipNext, OverlapStrategy);
            /** @internal */
            this.__interval = new internal.PrimitiveProperty(ScheduledEvent, this, "interval", 0, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__intervalType = new internal.EnumProperty(ScheduledEvent, this, "intervalType", IntervalType.Minute, IntervalType);
            /** @internal */
            this.__microflow = new internal.ByNameReferenceProperty(ScheduledEvent, this, "microflow", null, "Microflows$Microflow");
            /** @internal */
            this.__enabled = new internal.PrimitiveProperty(ScheduledEvent, this, "enabled", false, internal.PrimitiveTypeEnum.Boolean);
            this._containmentName = "documents";
        }
        get containerAsFolderBase() {
            return super.getContainerAs(projects_1.projects.FolderBase);
        }
        get startDateTime() {
            return this.__startDateTime.get();
        }
        set startDateTime(newValue) {
            this.__startDateTime.set(newValue);
        }
        get timeZone() {
            return this.__timeZone.get();
        }
        set timeZone(newValue) {
            this.__timeZone.set(newValue);
        }
        /**
         * In version 9.12.0: introduced
         */
        get schedule() {
            return this.__schedule.get();
        }
        set schedule(newValue) {
            this.__schedule.set(newValue);
        }
        /**
         * In version 9.12.0: introduced
         */
        get onOverlap() {
            return this.__onOverlap.get();
        }
        set onOverlap(newValue) {
            this.__onOverlap.set(newValue);
        }
        get interval() {
            return this.__interval.get();
        }
        set interval(newValue) {
            this.__interval.set(newValue);
        }
        get intervalType() {
            return this.__intervalType.get();
        }
        set intervalType(newValue) {
            this.__intervalType.set(newValue);
        }
        get microflow() {
            return this.__microflow.get();
        }
        set microflow(newValue) {
            this.__microflow.set(newValue);
        }
        get microflowQualifiedName() {
            return this.__microflow.qualifiedName();
        }
        get enabled() {
            return this.__enabled.get();
        }
        set enabled(newValue) {
            this.__enabled.set(newValue);
        }
        /**
         * Creates a new ScheduledEvent unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container) {
            return internal.instancehelpers.createUnit(container, ScheduledEvent);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.intervalType = IntervalType.Minute;
            if (this.__onOverlap.isAvailable) {
                this.onOverlap = OverlapStrategy.SkipNext;
            }
            this.startDateTime = "" + Date.now();
            this.timeZone = TimeZoneEnum.UTC;
        }
    }
    ScheduledEvent.structureTypeName = "ScheduledEvents$ScheduledEvent";
    ScheduledEvent.versionInfo = new exports.StructureVersionInfo({
        properties: {
            schedule: {
                introduced: "9.12.0"
            },
            onOverlap: {
                introduced: "9.12.0"
            }
        }
    }, internal.StructureType.ModelUnit);
    scheduledevents.ScheduledEvent = ScheduledEvent;
    /**
     * In version 9.12.0: introduced
     */
    class WeekSchedule extends Schedule {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__sunday = new internal.PrimitiveProperty(WeekSchedule, this, "sunday", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__monday = new internal.PrimitiveProperty(WeekSchedule, this, "monday", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__tuesday = new internal.PrimitiveProperty(WeekSchedule, this, "tuesday", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__wednesday = new internal.PrimitiveProperty(WeekSchedule, this, "wednesday", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__thursday = new internal.PrimitiveProperty(WeekSchedule, this, "thursday", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__friday = new internal.PrimitiveProperty(WeekSchedule, this, "friday", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__saturday = new internal.PrimitiveProperty(WeekSchedule, this, "saturday", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__hourOfDay = new internal.PrimitiveProperty(WeekSchedule, this, "hourOfDay", 0, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__minuteOfHour = new internal.PrimitiveProperty(WeekSchedule, this, "minuteOfHour", 0, internal.PrimitiveTypeEnum.Integer);
            if (arguments.length < 4) {
                throw new Error("new WeekSchedule() cannot be invoked directly, please use 'model.scheduledevents.createWeekSchedule()'");
            }
        }
        get containerAsScheduledEvent() {
            return super.getContainerAs(ScheduledEvent);
        }
        get sunday() {
            return this.__sunday.get();
        }
        set sunday(newValue) {
            this.__sunday.set(newValue);
        }
        get monday() {
            return this.__monday.get();
        }
        set monday(newValue) {
            this.__monday.set(newValue);
        }
        get tuesday() {
            return this.__tuesday.get();
        }
        set tuesday(newValue) {
            this.__tuesday.set(newValue);
        }
        get wednesday() {
            return this.__wednesday.get();
        }
        set wednesday(newValue) {
            this.__wednesday.set(newValue);
        }
        get thursday() {
            return this.__thursday.get();
        }
        set thursday(newValue) {
            this.__thursday.set(newValue);
        }
        get friday() {
            return this.__friday.get();
        }
        set friday(newValue) {
            this.__friday.set(newValue);
        }
        get saturday() {
            return this.__saturday.get();
        }
        set saturday(newValue) {
            this.__saturday.set(newValue);
        }
        get hourOfDay() {
            return this.__hourOfDay.get();
        }
        set hourOfDay(newValue) {
            this.__hourOfDay.set(newValue);
        }
        get minuteOfHour() {
            return this.__minuteOfHour.get();
        }
        set minuteOfHour(newValue) {
            this.__minuteOfHour.set(newValue);
        }
        /**
         * Creates and returns a new WeekSchedule instance in the SDK and on the server.
         * The new WeekSchedule will be automatically stored in the 'schedule' property
         * of the parent ScheduledEvent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.12.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, WeekSchedule.structureTypeName, { start: "9.12.0" });
            return internal.instancehelpers.createElement(container, WeekSchedule, "schedule", false);
        }
        /**
         * Creates and returns a new WeekSchedule instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, WeekSchedule);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    WeekSchedule.structureTypeName = "ScheduledEvents$WeekSchedule";
    WeekSchedule.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.12.0"
    }, internal.StructureType.Element);
    scheduledevents.WeekSchedule = WeekSchedule;
    /**
     * In version 9.12.0: introduced
     */
    class YearSchedule extends Schedule {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__month = new internal.PrimitiveProperty(YearSchedule, this, "month", 1, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__hourOfDay = new internal.PrimitiveProperty(YearSchedule, this, "hourOfDay", 0, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__minuteOfHour = new internal.PrimitiveProperty(YearSchedule, this, "minuteOfHour", 0, internal.PrimitiveTypeEnum.Integer);
            if (arguments.length < 4) {
                throw new Error("new YearSchedule() cannot be invoked directly, please use 'model.scheduledevents.createYearSchedule()'");
            }
        }
        get containerAsScheduledEvent() {
            return super.getContainerAs(ScheduledEvent);
        }
        get month() {
            return this.__month.get();
        }
        set month(newValue) {
            this.__month.set(newValue);
        }
        get hourOfDay() {
            return this.__hourOfDay.get();
        }
        set hourOfDay(newValue) {
            this.__hourOfDay.set(newValue);
        }
        get minuteOfHour() {
            return this.__minuteOfHour.get();
        }
        set minuteOfHour(newValue) {
            this.__minuteOfHour.set(newValue);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.hourOfDay = 0;
            this.minuteOfHour = 0;
            this.month = 1;
        }
    }
    YearSchedule.structureTypeName = "ScheduledEvents$YearSchedule";
    YearSchedule.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.12.0"
    }, internal.StructureType.Element);
    scheduledevents.YearSchedule = YearSchedule;
    /**
     * In version 9.12.0: introduced
     */
    class YearDateSchedule extends YearSchedule {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__dayOfMonth = new internal.PrimitiveProperty(YearDateSchedule, this, "dayOfMonth", 1, internal.PrimitiveTypeEnum.Integer);
            if (arguments.length < 4) {
                throw new Error("new YearDateSchedule() cannot be invoked directly, please use 'model.scheduledevents.createYearDateSchedule()'");
            }
        }
        get containerAsScheduledEvent() {
            return super.getContainerAs(ScheduledEvent);
        }
        get dayOfMonth() {
            return this.__dayOfMonth.get();
        }
        set dayOfMonth(newValue) {
            this.__dayOfMonth.set(newValue);
        }
        /**
         * Creates and returns a new YearDateSchedule instance in the SDK and on the server.
         * The new YearDateSchedule will be automatically stored in the 'schedule' property
         * of the parent ScheduledEvent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.12.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, YearDateSchedule.structureTypeName, { start: "9.12.0" });
            return internal.instancehelpers.createElement(container, YearDateSchedule, "schedule", false);
        }
        /**
         * Creates and returns a new YearDateSchedule instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, YearDateSchedule);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.dayOfMonth = 1;
        }
    }
    YearDateSchedule.structureTypeName = "ScheduledEvents$YearDateSchedule";
    YearDateSchedule.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.12.0"
    }, internal.StructureType.Element);
    scheduledevents.YearDateSchedule = YearDateSchedule;
    /**
     * In version 9.12.0: introduced
     */
    class YearWeekdaySchedule extends YearSchedule {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__daySelector = new internal.EnumProperty(YearWeekdaySchedule, this, "daySelector", DaySelector.First, DaySelector);
            /** @internal */
            this.__weekday = new internal.EnumProperty(YearWeekdaySchedule, this, "weekday", Weekday.Sunday, Weekday);
            if (arguments.length < 4) {
                throw new Error("new YearWeekdaySchedule() cannot be invoked directly, please use 'model.scheduledevents.createYearWeekdaySchedule()'");
            }
        }
        get containerAsScheduledEvent() {
            return super.getContainerAs(ScheduledEvent);
        }
        get daySelector() {
            return this.__daySelector.get();
        }
        set daySelector(newValue) {
            this.__daySelector.set(newValue);
        }
        get weekday() {
            return this.__weekday.get();
        }
        set weekday(newValue) {
            this.__weekday.set(newValue);
        }
        /**
         * Creates and returns a new YearWeekdaySchedule instance in the SDK and on the server.
         * The new YearWeekdaySchedule will be automatically stored in the 'schedule' property
         * of the parent ScheduledEvent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.12.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, YearWeekdaySchedule.structureTypeName, { start: "9.12.0" });
            return internal.instancehelpers.createElement(container, YearWeekdaySchedule, "schedule", false);
        }
        /**
         * Creates and returns a new YearWeekdaySchedule instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, YearWeekdaySchedule);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.daySelector = DaySelector.First;
            this.weekday = Weekday.Sunday;
        }
    }
    YearWeekdaySchedule.structureTypeName = "ScheduledEvents$YearWeekdaySchedule";
    YearWeekdaySchedule.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.12.0"
    }, internal.StructureType.Element);
    scheduledevents.YearWeekdaySchedule = YearWeekdaySchedule;
})(scheduledevents = exports.scheduledevents || (exports.scheduledevents = {}));
//# sourceMappingURL=scheduledevents.js.map