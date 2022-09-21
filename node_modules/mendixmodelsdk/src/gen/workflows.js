"use strict";
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.workflows = exports.StructureVersionInfo = void 0;
const internal = require("../sdk/internal");
exports.StructureVersionInfo = internal.StructureVersionInfo;
const projects_1 = require("./projects");
var workflows;
(function (workflows) {
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `Workflows`.
     */
    /**
     * In version 9.15.0: introduced
     */
    class Annotation extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__description = new internal.PrimitiveProperty(Annotation, this, "description", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new Annotation() cannot be invoked directly, please use 'model.workflows.createAnnotation()'");
            }
        }
        get containerAsWorkflow() {
            return super.getContainerAs(Workflow);
        }
        get containerAsWorkflowActivity() {
            return super.getContainerAs(WorkflowActivity);
        }
        get description() {
            return this.__description.get();
        }
        set description(newValue) {
            this.__description.set(newValue);
        }
        /**
         * Creates and returns a new Annotation instance in the SDK and on the server.
         * The new Annotation will be automatically stored in the 'annotation' property
         * of the parent Workflow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.15.0 and higher
         */
        static createInWorkflowUnderAnnotation(container) {
            internal.createInVersionCheck(container.model, Annotation.structureTypeName, { start: "9.15.0" });
            return internal.instancehelpers.createElement(container, Annotation, "annotation", false);
        }
        /**
         * Creates and returns a new Annotation instance in the SDK and on the server.
         * The new Annotation will be automatically stored in the 'annotation' property
         * of the parent WorkflowActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.15.0 and higher
         */
        static createInWorkflowActivityUnderAnnotation(container) {
            internal.createInVersionCheck(container.model, Annotation.structureTypeName, { start: "9.15.0" });
            return internal.instancehelpers.createElement(container, Annotation, "annotation", false);
        }
        /**
         * Creates and returns a new Annotation instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, Annotation);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    Annotation.structureTypeName = "Workflows$Annotation";
    Annotation.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.15.0"
    }, internal.StructureType.Element);
    workflows.Annotation = Annotation;
    /**
     * See: {@link https://docs.mendix.com/refguide/workflows relevant section in reference guide}
     *
     * In version 9.0.5: removed experimental
     * In version 9.0.2: introduced
     */
    class Outcome extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__flow = new internal.PartProperty(Outcome, this, "flow", null, true);
            if (arguments.length < 4) {
                throw new Error("new Outcome() cannot be invoked directly, please use 'model.workflows.createOutcome()'");
            }
        }
        get containerAsConditionOutcomeActivity() {
            return super.getContainerAs(ConditionOutcomeActivity);
        }
        get containerAsParallelSplitActivity() {
            return super.getContainerAs(ParallelSplitActivity);
        }
        get containerAsUserTask() {
            return super.getContainerAs(UserTask);
        }
        get flow() {
            return this.__flow.get();
        }
        set flow(newValue) {
            this.__flow.set(newValue);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.flow = Flow.create(this.model);
        }
    }
    Outcome.structureTypeName = "Workflows$Outcome";
    Outcome.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.0.2",
        properties: {
            flow: {
                public: {
                    currentValue: true
                },
                required: {
                    currentValue: true
                }
            }
        },
        public: {
            currentValue: true
        },
        experimental: {
            currentValue: false,
            changedIn: ["9.0.5"]
        }
    }, internal.StructureType.Element);
    workflows.Outcome = Outcome;
    /**
     * In version 9.0.5: removed experimental
     * In version 9.0.2: introduced
     */
    class ConditionOutcome extends Outcome {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new ConditionOutcome() cannot be invoked directly, please use 'model.workflows.createConditionOutcome()'");
            }
        }
        get containerAsConditionOutcomeActivity() {
            return super.getContainerAs(ConditionOutcomeActivity);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ConditionOutcome.structureTypeName = "Workflows$ConditionOutcome";
    ConditionOutcome.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.0.2",
        public: {
            currentValue: true
        },
        experimental: {
            currentValue: false,
            changedIn: ["9.0.5"]
        }
    }, internal.StructureType.Element);
    workflows.ConditionOutcome = ConditionOutcome;
    /**
     * In version 9.0.5: removed experimental
     * In version 9.0.2: introduced
     */
    class BooleanConditionOutcome extends ConditionOutcome {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__value = new internal.PrimitiveProperty(BooleanConditionOutcome, this, "value", false, internal.PrimitiveTypeEnum.Boolean);
            if (arguments.length < 4) {
                throw new Error("new BooleanConditionOutcome() cannot be invoked directly, please use 'model.workflows.createBooleanConditionOutcome()'");
            }
        }
        get containerAsConditionOutcomeActivity() {
            return super.getContainerAs(ConditionOutcomeActivity);
        }
        get value() {
            return this.__value.get();
        }
        set value(newValue) {
            this.__value.set(newValue);
        }
        /**
         * Creates and returns a new BooleanConditionOutcome instance in the SDK and on the server.
         * The new BooleanConditionOutcome will be automatically stored in the 'outcomes' property
         * of the parent ConditionOutcomeActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.2 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, BooleanConditionOutcome.structureTypeName, { start: "9.0.2" });
            return internal.instancehelpers.createElement(container, BooleanConditionOutcome, "outcomes", true);
        }
        /**
         * Creates and returns a new BooleanConditionOutcome instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, BooleanConditionOutcome);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    BooleanConditionOutcome.structureTypeName = "Workflows$BooleanConditionOutcome";
    BooleanConditionOutcome.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.0.2",
        properties: {
            value: {
                public: {
                    currentValue: true
                }
            }
        },
        public: {
            currentValue: true
        },
        experimental: {
            currentValue: false,
            changedIn: ["9.0.5"]
        }
    }, internal.StructureType.Element);
    workflows.BooleanConditionOutcome = BooleanConditionOutcome;
    /**
     * See: {@link https://docs.mendix.com/refguide/workflows relevant section in reference guide}
     *
     * In version 9.0.5: removed experimental
     * In version 9.0.2: introduced
     */
    class WorkflowActivity extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__name = new internal.PrimitiveProperty(WorkflowActivity, this, "name", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__caption = new internal.PrimitiveProperty(WorkflowActivity, this, "caption", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__annotation = new internal.PartProperty(WorkflowActivity, this, "annotation", null, false);
            if (arguments.length < 4) {
                throw new Error("new WorkflowActivity() cannot be invoked directly, please use 'model.workflows.createWorkflowActivity()'");
            }
        }
        get containerAsFlow() {
            return super.getContainerAs(Flow);
        }
        /**
         * In version 9.0.5: introduced
         */
        get name() {
            return this.__name.get();
        }
        set name(newValue) {
            this.__name.set(newValue);
        }
        get caption() {
            return this.__caption.get();
        }
        set caption(newValue) {
            this.__caption.set(newValue);
        }
        /**
         * In version 9.15.0: introduced
         */
        get annotation() {
            return this.__annotation.get();
        }
        set annotation(newValue) {
            this.__annotation.set(newValue);
        }
        get qualifiedName() {
            return this._getQualifiedName();
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    WorkflowActivity.structureTypeName = "Workflows$WorkflowActivity";
    WorkflowActivity.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.0.2",
        properties: {
            name: {
                introduced: "9.0.5",
                public: {
                    currentValue: true
                }
            },
            caption: {
                public: {
                    currentValue: true
                }
            },
            annotation: {
                introduced: "9.15.0"
            }
        },
        public: {
            currentValue: true
        },
        experimental: {
            currentValue: false,
            changedIn: ["9.0.5"]
        }
    }, internal.StructureType.Element);
    workflows.WorkflowActivity = WorkflowActivity;
    /**
     * In version 9.0.5: removed experimental
     * In version 9.0.2: introduced
     */
    class ConditionOutcomeActivity extends WorkflowActivity {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__outcomes = new internal.PartListProperty(ConditionOutcomeActivity, this, "outcomes", []);
            if (arguments.length < 4) {
                throw new Error("new ConditionOutcomeActivity() cannot be invoked directly, please use 'model.workflows.createConditionOutcomeActivity()'");
            }
        }
        get containerAsFlow() {
            return super.getContainerAs(Flow);
        }
        get outcomes() {
            return this.__outcomes.get();
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ConditionOutcomeActivity.structureTypeName = "Workflows$ConditionOutcomeActivity";
    ConditionOutcomeActivity.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.0.2",
        properties: {
            outcomes: {
                public: {
                    currentValue: true
                }
            }
        },
        public: {
            currentValue: true
        },
        experimental: {
            currentValue: false,
            changedIn: ["9.0.5"]
        }
    }, internal.StructureType.Element);
    workflows.ConditionOutcomeActivity = ConditionOutcomeActivity;
    /**
     * See: {@link https://docs.mendix.com/refguide/call-microflow relevant section in reference guide}
     *
     * In version 9.0.5: removed experimental
     * In version 9.0.2: introduced
     */
    class CallMicroflowTask extends ConditionOutcomeActivity {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__microflow = new internal.ByNameReferenceProperty(CallMicroflowTask, this, "microflow", null, "Microflows$Microflow");
            /** @internal */
            this.__parameterMappings = new internal.PartListProperty(CallMicroflowTask, this, "parameterMappings", []);
            if (arguments.length < 4) {
                throw new Error("new CallMicroflowTask() cannot be invoked directly, please use 'model.workflows.createCallMicroflowTask()'");
            }
        }
        get containerAsFlow() {
            return super.getContainerAs(Flow);
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
        get parameterMappings() {
            return this.__parameterMappings.get();
        }
        /**
         * Creates and returns a new CallMicroflowTask instance in the SDK and on the server.
         * The new CallMicroflowTask will be automatically stored in the 'activities' property
         * of the parent Flow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.2 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, CallMicroflowTask.structureTypeName, { start: "9.0.2" });
            return internal.instancehelpers.createElement(container, CallMicroflowTask, "activities", true);
        }
        /**
         * Creates and returns a new CallMicroflowTask instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, CallMicroflowTask);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    CallMicroflowTask.structureTypeName = "Workflows$CallMicroflowTask";
    CallMicroflowTask.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.0.2",
        properties: {
            microflow: {
                public: {
                    currentValue: true
                }
            }
        },
        public: {
            currentValue: true
        },
        experimental: {
            currentValue: false,
            changedIn: ["9.0.5"]
        }
    }, internal.StructureType.Element);
    workflows.CallMicroflowTask = CallMicroflowTask;
    /**
     * In version 9.0.5: removed experimental
     * In version 9.0.2: introduced
     */
    class CallWorkflowActivity extends WorkflowActivity {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__workflow = new internal.ByNameReferenceProperty(CallWorkflowActivity, this, "workflow", null, "Workflows$Workflow");
            /** @internal */
            this.__parameterExpression = new internal.PrimitiveProperty(CallWorkflowActivity, this, "parameterExpression", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__parameterMappings = new internal.PartListProperty(CallWorkflowActivity, this, "parameterMappings", []);
            /** @internal */
            this.__executeAsync = new internal.PrimitiveProperty(CallWorkflowActivity, this, "executeAsync", false, internal.PrimitiveTypeEnum.Boolean);
            if (arguments.length < 4) {
                throw new Error("new CallWorkflowActivity() cannot be invoked directly, please use 'model.workflows.createCallWorkflowActivity()'");
            }
        }
        get containerAsFlow() {
            return super.getContainerAs(Flow);
        }
        get workflow() {
            return this.__workflow.get();
        }
        set workflow(newValue) {
            this.__workflow.set(newValue);
        }
        get workflowQualifiedName() {
            return this.__workflow.qualifiedName();
        }
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         *
         * In version 9.18.0: deleted
         * In version 9.6.0: introduced
         */
        get parameterExpression() {
            return this.__parameterExpression.get();
        }
        set parameterExpression(newValue) {
            this.__parameterExpression.set(newValue);
        }
        /**
         * In version 9.18.0: introduced
         */
        get parameterMappings() {
            return this.__parameterMappings.get();
        }
        /**
         * In version 9.18.0: introduced
         */
        get executeAsync() {
            return this.__executeAsync.get();
        }
        set executeAsync(newValue) {
            this.__executeAsync.set(newValue);
        }
        /**
         * Creates and returns a new CallWorkflowActivity instance in the SDK and on the server.
         * The new CallWorkflowActivity will be automatically stored in the 'activities' property
         * of the parent Flow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.2 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, CallWorkflowActivity.structureTypeName, { start: "9.0.2" });
            return internal.instancehelpers.createElement(container, CallWorkflowActivity, "activities", true);
        }
        /**
         * Creates and returns a new CallWorkflowActivity instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, CallWorkflowActivity);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    CallWorkflowActivity.structureTypeName = "Workflows$CallWorkflowActivity";
    CallWorkflowActivity.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.0.2",
        properties: {
            workflow: {
                public: {
                    currentValue: true
                }
            },
            parameterExpression: {
                introduced: "9.6.0",
                deleted: "9.18.0",
                deletionMessage: null
            },
            parameterMappings: {
                introduced: "9.18.0"
            },
            executeAsync: {
                introduced: "9.18.0"
            }
        },
        public: {
            currentValue: true
        },
        experimental: {
            currentValue: false,
            changedIn: ["9.0.5"]
        }
    }, internal.StructureType.Element);
    workflows.CallWorkflowActivity = CallWorkflowActivity;
    /**
     * In version 9.0.5: removed experimental
     * In version 9.0.2: introduced
     */
    class UserSource extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new UserSource() cannot be invoked directly, please use 'model.workflows.createUserSource()'");
            }
        }
        get containerAsUserTask() {
            return super.getContainerAs(UserTask);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    UserSource.structureTypeName = "Workflows$UserSource";
    UserSource.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.0.2",
        experimental: {
            currentValue: false,
            changedIn: ["9.0.5"]
        }
    }, internal.StructureType.Element);
    workflows.UserSource = UserSource;
    /**
     * In version 9.10.0: introduced
     */
    class EmptyUserSource extends UserSource {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new EmptyUserSource() cannot be invoked directly, please use 'model.workflows.createEmptyUserSource()'");
            }
        }
        get containerAsUserTask() {
            return super.getContainerAs(UserTask);
        }
        /**
         * Creates and returns a new EmptyUserSource instance in the SDK and on the server.
         * The new EmptyUserSource will be automatically stored in the 'userSource' property
         * of the parent UserTask element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.10.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, EmptyUserSource.structureTypeName, { start: "9.10.0" });
            return internal.instancehelpers.createElement(container, EmptyUserSource, "userSource", false);
        }
        /**
         * Creates and returns a new EmptyUserSource instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, EmptyUserSource);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    EmptyUserSource.structureTypeName = "Workflows$EmptyUserSource";
    EmptyUserSource.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.10.0"
    }, internal.StructureType.Element);
    workflows.EmptyUserSource = EmptyUserSource;
    /**
     * In version 9.0.5: removed experimental
     * In version 9.0.2: introduced
     */
    class EndWorkflowActivity extends WorkflowActivity {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new EndWorkflowActivity() cannot be invoked directly, please use 'model.workflows.createEndWorkflowActivity()'");
            }
        }
        get containerAsFlow() {
            return super.getContainerAs(Flow);
        }
        /**
         * Creates and returns a new EndWorkflowActivity instance in the SDK and on the server.
         * The new EndWorkflowActivity will be automatically stored in the 'activities' property
         * of the parent Flow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.2 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, EndWorkflowActivity.structureTypeName, { start: "9.0.2" });
            return internal.instancehelpers.createElement(container, EndWorkflowActivity, "activities", true);
        }
        /**
         * Creates and returns a new EndWorkflowActivity instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, EndWorkflowActivity);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    EndWorkflowActivity.structureTypeName = "Workflows$EndWorkflowActivity";
    EndWorkflowActivity.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.0.2",
        public: {
            currentValue: true
        },
        experimental: {
            currentValue: false,
            changedIn: ["9.0.5"]
        }
    }, internal.StructureType.Element);
    workflows.EndWorkflowActivity = EndWorkflowActivity;
    /**
     * In version 9.0.5: removed experimental
     * In version 9.0.2: introduced
     */
    class EnumerationValueConditionOutcome extends ConditionOutcome {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__value = new internal.ByNameReferenceProperty(EnumerationValueConditionOutcome, this, "value", null, "Enumerations$EnumerationValue");
            if (arguments.length < 4) {
                throw new Error("new EnumerationValueConditionOutcome() cannot be invoked directly, please use 'model.workflows.createEnumerationValueConditionOutcome()'");
            }
        }
        get containerAsConditionOutcomeActivity() {
            return super.getContainerAs(ConditionOutcomeActivity);
        }
        get value() {
            return this.__value.get();
        }
        set value(newValue) {
            this.__value.set(newValue);
        }
        get valueQualifiedName() {
            return this.__value.qualifiedName();
        }
        /**
         * Creates and returns a new EnumerationValueConditionOutcome instance in the SDK and on the server.
         * The new EnumerationValueConditionOutcome will be automatically stored in the 'outcomes' property
         * of the parent ConditionOutcomeActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.2 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, EnumerationValueConditionOutcome.structureTypeName, { start: "9.0.2" });
            return internal.instancehelpers.createElement(container, EnumerationValueConditionOutcome, "outcomes", true);
        }
        /**
         * Creates and returns a new EnumerationValueConditionOutcome instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, EnumerationValueConditionOutcome);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    EnumerationValueConditionOutcome.structureTypeName = "Workflows$EnumerationValueConditionOutcome";
    EnumerationValueConditionOutcome.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.0.2",
        properties: {
            value: {
                public: {
                    currentValue: true
                }
            }
        },
        public: {
            currentValue: true
        },
        experimental: {
            currentValue: false,
            changedIn: ["9.0.5"]
        }
    }, internal.StructureType.Element);
    workflows.EnumerationValueConditionOutcome = EnumerationValueConditionOutcome;
    /**
     * See: {@link https://docs.mendix.com/refguide/decision-in-workflows relevant section in reference guide}
     *
     * In version 9.0.5: removed experimental
     * In version 9.0.2: introduced
     */
    class ExclusiveSplitActivity extends ConditionOutcomeActivity {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__expression = new internal.PrimitiveProperty(ExclusiveSplitActivity, this, "expression", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new ExclusiveSplitActivity() cannot be invoked directly, please use 'model.workflows.createExclusiveSplitActivity()'");
            }
        }
        get containerAsFlow() {
            return super.getContainerAs(Flow);
        }
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get expression() {
            return this.__expression.get();
        }
        set expression(newValue) {
            this.__expression.set(newValue);
        }
        /**
         * Creates and returns a new ExclusiveSplitActivity instance in the SDK and on the server.
         * The new ExclusiveSplitActivity will be automatically stored in the 'activities' property
         * of the parent Flow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.2 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, ExclusiveSplitActivity.structureTypeName, { start: "9.0.2" });
            return internal.instancehelpers.createElement(container, ExclusiveSplitActivity, "activities", true);
        }
        /**
         * Creates and returns a new ExclusiveSplitActivity instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ExclusiveSplitActivity);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ExclusiveSplitActivity.structureTypeName = "Workflows$ExclusiveSplitActivity";
    ExclusiveSplitActivity.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.0.2",
        public: {
            currentValue: true
        },
        experimental: {
            currentValue: false,
            changedIn: ["9.0.5"]
        }
    }, internal.StructureType.Element);
    workflows.ExclusiveSplitActivity = ExclusiveSplitActivity;
    /**
     * In version 9.0.5: removed experimental
     * In version 9.0.2: introduced
     */
    class Flow extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__activities = new internal.PartListProperty(Flow, this, "activities", []);
            if (arguments.length < 4) {
                throw new Error("new Flow() cannot be invoked directly, please use 'model.workflows.createFlow()'");
            }
        }
        get containerAsOutcome() {
            return super.getContainerAs(Outcome);
        }
        get containerAsWorkflow() {
            return super.getContainerAs(Workflow);
        }
        get activities() {
            return this.__activities.get();
        }
        /**
         * Creates and returns a new Flow instance in the SDK and on the server.
         * The new Flow will be automatically stored in the 'flow' property
         * of the parent Outcome element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.2 and higher
         */
        static createInOutcomeUnderFlow(container) {
            internal.createInVersionCheck(container.model, Flow.structureTypeName, { start: "9.0.2" });
            return internal.instancehelpers.createElement(container, Flow, "flow", false);
        }
        /**
         * Creates and returns a new Flow instance in the SDK and on the server.
         * The new Flow will be automatically stored in the 'flow' property
         * of the parent Workflow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.2 and higher
         */
        static createInWorkflowUnderFlow(container) {
            internal.createInVersionCheck(container.model, Flow.structureTypeName, { start: "9.0.2" });
            return internal.instancehelpers.createElement(container, Flow, "flow", false);
        }
        /**
         * Creates and returns a new Flow instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, Flow);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    Flow.structureTypeName = "Workflows$Flow";
    Flow.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.0.2",
        properties: {
            activities: {
                public: {
                    currentValue: true
                }
            }
        },
        public: {
            currentValue: true
        },
        experimental: {
            currentValue: false,
            changedIn: ["9.0.5"]
        }
    }, internal.StructureType.Element);
    workflows.Flow = Flow;
    /**
     * See: {@link https://docs.mendix.com/refguide/jump-activity relevant section in reference guide}
     *
     * In version 9.0.5: introduced
     */
    class JumpToActivity extends WorkflowActivity {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__targetActivity = new internal.LocalByNameReferenceProperty(JumpToActivity, this, "targetActivity", null, "Workflows$WorkflowActivity");
            if (arguments.length < 4) {
                throw new Error("new JumpToActivity() cannot be invoked directly, please use 'model.workflows.createJumpToActivity()'");
            }
        }
        get containerAsFlow() {
            return super.getContainerAs(Flow);
        }
        get targetActivity() {
            return this.__targetActivity.get();
        }
        set targetActivity(newValue) {
            this.__targetActivity.set(newValue);
        }
        get targetActivityLocalName() {
            return this.__targetActivity.localName();
        }
        /**
         * Creates and returns a new JumpToActivity instance in the SDK and on the server.
         * The new JumpToActivity will be automatically stored in the 'activities' property
         * of the parent Flow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.5 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, JumpToActivity.structureTypeName, { start: "9.0.5" });
            return internal.instancehelpers.createElement(container, JumpToActivity, "activities", true);
        }
        /**
         * Creates and returns a new JumpToActivity instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, JumpToActivity);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    JumpToActivity.structureTypeName = "Workflows$JumpToActivity";
    JumpToActivity.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.0.5",
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    workflows.JumpToActivity = JumpToActivity;
    /**
     * In version 9.0.5: introduced
     */
    class UserTaskEvent extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new UserTaskEvent() cannot be invoked directly, please use 'model.workflows.createUserTaskEvent()'");
            }
        }
        get containerAsUserTask() {
            return super.getContainerAs(UserTask);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    UserTaskEvent.structureTypeName = "Workflows$UserTaskEvent";
    UserTaskEvent.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.0.5"
    }, internal.StructureType.Element);
    workflows.UserTaskEvent = UserTaskEvent;
    /**
     * In version 9.0.5: introduced
     */
    class MicroflowBasedEvent extends UserTaskEvent {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__microflow = new internal.ByNameReferenceProperty(MicroflowBasedEvent, this, "microflow", null, "Microflows$Microflow");
            if (arguments.length < 4) {
                throw new Error("new MicroflowBasedEvent() cannot be invoked directly, please use 'model.workflows.createMicroflowBasedEvent()'");
            }
        }
        get containerAsUserTask() {
            return super.getContainerAs(UserTask);
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
        /**
         * Creates and returns a new MicroflowBasedEvent instance in the SDK and on the server.
         * The new MicroflowBasedEvent will be automatically stored in the 'onCreatedEvent' property
         * of the parent UserTask element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.5 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, MicroflowBasedEvent.structureTypeName, { start: "9.0.5" });
            return internal.instancehelpers.createElement(container, MicroflowBasedEvent, "onCreatedEvent", false);
        }
        /**
         * Creates and returns a new MicroflowBasedEvent instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, MicroflowBasedEvent);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    MicroflowBasedEvent.structureTypeName = "Workflows$MicroflowBasedEvent";
    MicroflowBasedEvent.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.0.5"
    }, internal.StructureType.Element);
    workflows.MicroflowBasedEvent = MicroflowBasedEvent;
    /**
     * In version 9.0.5: removed experimental
     * In version 9.0.2: introduced
     */
    class MicroflowBasedUserSource extends UserSource {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__microflow = new internal.ByNameReferenceProperty(MicroflowBasedUserSource, this, "microflow", null, "Microflows$Microflow");
            if (arguments.length < 4) {
                throw new Error("new MicroflowBasedUserSource() cannot be invoked directly, please use 'model.workflows.createMicroflowBasedUserSource()'");
            }
        }
        get containerAsUserTask() {
            return super.getContainerAs(UserTask);
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
        /**
         * Creates and returns a new MicroflowBasedUserSource instance in the SDK and on the server.
         * The new MicroflowBasedUserSource will be automatically stored in the 'userSource' property
         * of the parent UserTask element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.2 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, MicroflowBasedUserSource.structureTypeName, { start: "9.0.2" });
            return internal.instancehelpers.createElement(container, MicroflowBasedUserSource, "userSource", false);
        }
        /**
         * Creates and returns a new MicroflowBasedUserSource instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, MicroflowBasedUserSource);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    MicroflowBasedUserSource.structureTypeName = "Workflows$MicroflowBasedUserSource";
    MicroflowBasedUserSource.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.0.2",
        experimental: {
            currentValue: false,
            changedIn: ["9.0.5"]
        }
    }, internal.StructureType.Element);
    workflows.MicroflowBasedUserSource = MicroflowBasedUserSource;
    /**
     * In version 9.0.5: removed experimental
     * In version 9.0.2: introduced
     */
    class MicroflowCallParameterMapping extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__parameter = new internal.ByNameReferenceProperty(MicroflowCallParameterMapping, this, "parameter", null, "Microflows$MicroflowParameter");
            /** @internal */
            this.__expression = new internal.PrimitiveProperty(MicroflowCallParameterMapping, this, "expression", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new MicroflowCallParameterMapping() cannot be invoked directly, please use 'model.workflows.createMicroflowCallParameterMapping()'");
            }
        }
        get containerAsCallMicroflowTask() {
            return super.getContainerAs(CallMicroflowTask);
        }
        get parameter() {
            return this.__parameter.get();
        }
        set parameter(newValue) {
            this.__parameter.set(newValue);
        }
        get parameterQualifiedName() {
            return this.__parameter.qualifiedName();
        }
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get expression() {
            return this.__expression.get();
        }
        set expression(newValue) {
            this.__expression.set(newValue);
        }
        /**
         * Creates and returns a new MicroflowCallParameterMapping instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, MicroflowCallParameterMapping);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    MicroflowCallParameterMapping.structureTypeName = "Workflows$MicroflowCallParameterMapping";
    MicroflowCallParameterMapping.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.0.2",
        properties: {
            parameter: {
                required: {
                    currentValue: true
                }
            }
        },
        experimental: {
            currentValue: false,
            changedIn: ["9.0.5"]
        }
    }, internal.StructureType.Element);
    workflows.MicroflowCallParameterMapping = MicroflowCallParameterMapping;
    /**
     * In version 9.12.0: introduced
     */
    class MicroflowEventHandler extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__microflow = new internal.ByNameReferenceProperty(MicroflowEventHandler, this, "microflow", null, "Microflows$Microflow");
            if (arguments.length < 4) {
                throw new Error("new MicroflowEventHandler() cannot be invoked directly, please use 'model.workflows.createMicroflowEventHandler()'");
            }
        }
        get containerAsWorkflowsProjectSettingsPart() {
            return super.getContainerAs(settings_1.settings.WorkflowsProjectSettingsPart);
        }
        get containerAsWorkflow() {
            return super.getContainerAs(Workflow);
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
        /**
         * Creates and returns a new MicroflowEventHandler instance in the SDK and on the server.
         * The new MicroflowEventHandler will be automatically stored in the 'usertaskOnStateChangeEvent' property
         * of the parent settings.WorkflowsProjectSettingsPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.12.0 and higher
         */
        static createInWorkflowsProjectSettingsPartUnderUsertaskOnStateChangeEvent(container) {
            internal.createInVersionCheck(container.model, MicroflowEventHandler.structureTypeName, { start: "9.12.0" });
            return internal.instancehelpers.createElement(container, MicroflowEventHandler, "usertaskOnStateChangeEvent", false);
        }
        /**
         * Creates and returns a new MicroflowEventHandler instance in the SDK and on the server.
         * The new MicroflowEventHandler will be automatically stored in the 'workflowOnStateChangeEvent' property
         * of the parent settings.WorkflowsProjectSettingsPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.12.0 and higher
         */
        static createInWorkflowsProjectSettingsPartUnderWorkflowOnStateChangeEvent(container) {
            internal.createInVersionCheck(container.model, MicroflowEventHandler.structureTypeName, { start: "9.12.0" });
            return internal.instancehelpers.createElement(container, MicroflowEventHandler, "workflowOnStateChangeEvent", false);
        }
        /**
         * Creates and returns a new MicroflowEventHandler instance in the SDK and on the server.
         * The new MicroflowEventHandler will be automatically stored in the 'usertaskOnStateChangeEvent' property
         * of the parent Workflow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.12.0 and higher
         */
        static createInWorkflowUnderUsertaskOnStateChangeEvent(container) {
            internal.createInVersionCheck(container.model, MicroflowEventHandler.structureTypeName, { start: "9.12.0" });
            return internal.instancehelpers.createElement(container, MicroflowEventHandler, "usertaskOnStateChangeEvent", false);
        }
        /**
         * Creates and returns a new MicroflowEventHandler instance in the SDK and on the server.
         * The new MicroflowEventHandler will be automatically stored in the 'workflowOnStateChangeEvent' property
         * of the parent Workflow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.12.0 and higher
         */
        static createInWorkflowUnderWorkflowOnStateChangeEvent(container) {
            internal.createInVersionCheck(container.model, MicroflowEventHandler.structureTypeName, { start: "9.12.0" });
            return internal.instancehelpers.createElement(container, MicroflowEventHandler, "workflowOnStateChangeEvent", false);
        }
        /**
         * Creates and returns a new MicroflowEventHandler instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, MicroflowEventHandler);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    MicroflowEventHandler.structureTypeName = "Workflows$MicroflowEventHandler";
    MicroflowEventHandler.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.12.0"
    }, internal.StructureType.Element);
    workflows.MicroflowEventHandler = MicroflowEventHandler;
    /**
     * In version 9.0.5: introduced
     */
    class NoEvent extends UserTaskEvent {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new NoEvent() cannot be invoked directly, please use 'model.workflows.createNoEvent()'");
            }
        }
        get containerAsUserTask() {
            return super.getContainerAs(UserTask);
        }
        /**
         * Creates and returns a new NoEvent instance in the SDK and on the server.
         * The new NoEvent will be automatically stored in the 'onCreatedEvent' property
         * of the parent UserTask element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.5 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, NoEvent.structureTypeName, { start: "9.0.5" });
            return internal.instancehelpers.createElement(container, NoEvent, "onCreatedEvent", false);
        }
        /**
         * Creates and returns a new NoEvent instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, NoEvent);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    NoEvent.structureTypeName = "Workflows$NoEvent";
    NoEvent.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.0.5"
    }, internal.StructureType.Element);
    workflows.NoEvent = NoEvent;
    /**
     * In version 9.11.0: introduced
     */
    class PageParameterMapping extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__parameter = new internal.ByNameReferenceProperty(PageParameterMapping, this, "parameter", null, "Pages$PageParameter");
            /** @internal */
            this.__expression = new internal.PrimitiveProperty(PageParameterMapping, this, "expression", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new PageParameterMapping() cannot be invoked directly, please use 'model.workflows.createPageParameterMapping()'");
            }
        }
        get parameter() {
            return this.__parameter.get();
        }
        set parameter(newValue) {
            this.__parameter.set(newValue);
        }
        get parameterQualifiedName() {
            return this.__parameter.qualifiedName();
        }
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get expression() {
            return this.__expression.get();
        }
        set expression(newValue) {
            this.__expression.set(newValue);
        }
        /**
         * Creates and returns a new PageParameterMapping instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, PageParameterMapping);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    PageParameterMapping.structureTypeName = "Workflows$PageParameterMapping";
    PageParameterMapping.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.11.0",
        properties: {
            parameter: {
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    workflows.PageParameterMapping = PageParameterMapping;
    /**
     * In version 9.12.0: added public
     * In version 9.11.0: introduced
     */
    class PageReference extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__page = new internal.ByNameReferenceProperty(PageReference, this, "page", null, "Pages$Page");
            if (arguments.length < 4) {
                throw new Error("new PageReference() cannot be invoked directly, please use 'model.workflows.createPageReference()'");
            }
        }
        get containerAsUserTask() {
            return super.getContainerAs(UserTask);
        }
        get containerAsWorkflow() {
            return super.getContainerAs(Workflow);
        }
        /**
         * In version 9.12.0: added public
         */
        get page() {
            return this.__page.get();
        }
        set page(newValue) {
            this.__page.set(newValue);
        }
        get pageQualifiedName() {
            return this.__page.qualifiedName();
        }
        /**
         * Creates and returns a new PageReference instance in the SDK and on the server.
         * The new PageReference will be automatically stored in the 'taskPage' property
         * of the parent UserTask element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.11.0 and higher
         */
        static createInUserTaskUnderTaskPage(container) {
            internal.createInVersionCheck(container.model, PageReference.structureTypeName, { start: "9.11.0" });
            return internal.instancehelpers.createElement(container, PageReference, "taskPage", false);
        }
        /**
         * Creates and returns a new PageReference instance in the SDK and on the server.
         * The new PageReference will be automatically stored in the 'adminPage' property
         * of the parent Workflow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.11.0 and higher
         */
        static createInWorkflowUnderAdminPage(container) {
            internal.createInVersionCheck(container.model, PageReference.structureTypeName, { start: "9.11.0" });
            return internal.instancehelpers.createElement(container, PageReference, "adminPage", false);
        }
        /**
         * Creates and returns a new PageReference instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, PageReference);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    PageReference.structureTypeName = "Workflows$PageReference";
    PageReference.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.11.0",
        properties: {
            page: {
                public: {
                    currentValue: true,
                    changedIn: ["9.12.0"]
                }
            }
        },
        public: {
            currentValue: true,
            changedIn: ["9.12.0"]
        }
    }, internal.StructureType.Element);
    workflows.PageReference = PageReference;
    /**
     * See: {@link https://docs.mendix.com/refguide/parallel-split relevant section in reference guide}
     *
     * In version 9.0.5: removed experimental
     * In version 9.0.2: introduced
     */
    class ParallelSplitActivity extends WorkflowActivity {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__outcomes = new internal.PartListProperty(ParallelSplitActivity, this, "outcomes", []);
            if (arguments.length < 4) {
                throw new Error("new ParallelSplitActivity() cannot be invoked directly, please use 'model.workflows.createParallelSplitActivity()'");
            }
        }
        get containerAsFlow() {
            return super.getContainerAs(Flow);
        }
        get outcomes() {
            return this.__outcomes.get();
        }
        /**
         * Creates and returns a new ParallelSplitActivity instance in the SDK and on the server.
         * The new ParallelSplitActivity will be automatically stored in the 'activities' property
         * of the parent Flow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.2 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, ParallelSplitActivity.structureTypeName, { start: "9.0.2" });
            return internal.instancehelpers.createElement(container, ParallelSplitActivity, "activities", true);
        }
        /**
         * Creates and returns a new ParallelSplitActivity instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ParallelSplitActivity);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ParallelSplitActivity.structureTypeName = "Workflows$ParallelSplitActivity";
    ParallelSplitActivity.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.0.2",
        properties: {
            outcomes: {
                public: {
                    currentValue: true
                }
            }
        },
        public: {
            currentValue: true
        },
        experimental: {
            currentValue: false,
            changedIn: ["9.0.5"]
        }
    }, internal.StructureType.Element);
    workflows.ParallelSplitActivity = ParallelSplitActivity;
    /**
     * In version 9.0.5: removed experimental
     * In version 9.0.2: introduced
     */
    class ParallelSplitOutcome extends Outcome {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new ParallelSplitOutcome() cannot be invoked directly, please use 'model.workflows.createParallelSplitOutcome()'");
            }
        }
        get containerAsParallelSplitActivity() {
            return super.getContainerAs(ParallelSplitActivity);
        }
        /**
         * Creates and returns a new ParallelSplitOutcome instance in the SDK and on the server.
         * The new ParallelSplitOutcome will be automatically stored in the 'outcomes' property
         * of the parent ParallelSplitActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.2 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, ParallelSplitOutcome.structureTypeName, { start: "9.0.2" });
            return internal.instancehelpers.createElement(container, ParallelSplitOutcome, "outcomes", true);
        }
        /**
         * Creates and returns a new ParallelSplitOutcome instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ParallelSplitOutcome);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ParallelSplitOutcome.structureTypeName = "Workflows$ParallelSplitOutcome";
    ParallelSplitOutcome.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.0.2",
        public: {
            currentValue: true
        },
        experimental: {
            currentValue: false,
            changedIn: ["9.0.5"]
        }
    }, internal.StructureType.Element);
    workflows.ParallelSplitOutcome = ParallelSplitOutcome;
    /**
     * In version 9.6.0: introduced
     */
    class Parameter extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__entityRef = new internal.PartProperty(Parameter, this, "entityRef", null, false);
            /** @internal */
            this.__entity = new internal.ByNameReferenceProperty(Parameter, this, "entity", null, "DomainModels$Entity");
            /** @internal */
            this.__name = new internal.PrimitiveProperty(Parameter, this, "name", "WorkflowContext", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new Parameter() cannot be invoked directly, please use 'model.workflows.createParameter()'");
            }
        }
        get containerAsWorkflow() {
            return super.getContainerAs(Workflow);
        }
        /**
         * In version 9.10.0: deleted
         */
        get entityRef() {
            return this.__entityRef.get();
        }
        set entityRef(newValue) {
            this.__entityRef.set(newValue);
        }
        /**
         * In version 9.10.0: introduced
         */
        get entity() {
            return this.__entity.get();
        }
        set entity(newValue) {
            this.__entity.set(newValue);
        }
        get entityQualifiedName() {
            return this.__entity.qualifiedName();
        }
        /**
         * In version 9.18.0: introduced
         */
        get name() {
            return this.__name.get();
        }
        set name(newValue) {
            this.__name.set(newValue);
        }
        /**
         * Creates and returns a new Parameter instance in the SDK and on the server.
         * The new Parameter will be automatically stored in the 'parameter' property
         * of the parent Workflow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.6.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, Parameter.structureTypeName, { start: "9.6.0" });
            return internal.instancehelpers.createElement(container, Parameter, "parameter", false);
        }
        /**
         * Creates and returns a new Parameter instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, Parameter);
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
            if (this.__name.isAvailable) {
                this.name = "WorkflowContext";
            }
        }
    }
    Parameter.structureTypeName = "Workflows$Parameter";
    Parameter.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.6.0",
        properties: {
            entityRef: {
                deleted: "9.10.0",
                deletionMessage: null,
                public: {
                    currentValue: true
                }
            },
            entity: {
                introduced: "9.10.0",
                public: {
                    currentValue: true
                }
            },
            name: {
                introduced: "9.18.0",
                public: {
                    currentValue: true
                }
            }
        },
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    workflows.Parameter = Parameter;
    /**
     * See: {@link https://docs.mendix.com/refguide/user-task relevant section in reference guide}
     *
     * In version 9.0.5: removed experimental
     * In version 9.0.2: introduced
     */
    class UserTask extends WorkflowActivity {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__userTaskEntity = new internal.ByNameReferenceProperty(UserTask, this, "userTaskEntity", null, "DomainModels$Entity");
            /** @internal */
            this.__page = new internal.ByNameReferenceProperty(UserTask, this, "page", null, "Pages$Page");
            /** @internal */
            this.__taskPage = new internal.PartProperty(UserTask, this, "taskPage", null, true);
            /** @internal */
            this.__taskName = new internal.PartProperty(UserTask, this, "taskName", null, true);
            /** @internal */
            this.__taskDescription = new internal.PartProperty(UserTask, this, "taskDescription", null, true);
            /** @internal */
            this.__dueDate = new internal.PrimitiveProperty(UserTask, this, "dueDate", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__userSource = new internal.PartProperty(UserTask, this, "userSource", null, true);
            /** @internal */
            this.__outcomes = new internal.PartListProperty(UserTask, this, "outcomes", []);
            /** @internal */
            this.__allowedModuleRoles = new internal.ByNameReferenceListProperty(UserTask, this, "allowedModuleRoles", [], "Security$ModuleRole");
            /** @internal */
            this.__onCreatedEvent = new internal.PartProperty(UserTask, this, "onCreatedEvent", null, true);
            /** @internal */
            this.__autoAssignSingleTargetUser = new internal.PrimitiveProperty(UserTask, this, "autoAssignSingleTargetUser", false, internal.PrimitiveTypeEnum.Boolean);
            if (arguments.length < 4) {
                throw new Error("new UserTask() cannot be invoked directly, please use 'model.workflows.createUserTask()'");
            }
        }
        get containerAsFlow() {
            return super.getContainerAs(Flow);
        }
        /**
         * In version 9.10.0: deleted
         * In version 9.6.0: introduced
         */
        get userTaskEntity() {
            return this.__userTaskEntity.get();
        }
        set userTaskEntity(newValue) {
            this.__userTaskEntity.set(newValue);
        }
        get userTaskEntityQualifiedName() {
            return this.__userTaskEntity.qualifiedName();
        }
        /**
         * In version 9.11.0: deleted
         */
        get page() {
            return this.__page.get();
        }
        set page(newValue) {
            this.__page.set(newValue);
        }
        get pageQualifiedName() {
            return this.__page.qualifiedName();
        }
        /**
         * In version 9.12.0: added public
         * In version 9.11.0: introduced
         */
        get taskPage() {
            return this.__taskPage.get();
        }
        set taskPage(newValue) {
            this.__taskPage.set(newValue);
        }
        get taskName() {
            return this.__taskName.get();
        }
        set taskName(newValue) {
            this.__taskName.set(newValue);
        }
        get taskDescription() {
            return this.__taskDescription.get();
        }
        set taskDescription(newValue) {
            this.__taskDescription.set(newValue);
        }
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get dueDate() {
            return this.__dueDate.get();
        }
        set dueDate(newValue) {
            this.__dueDate.set(newValue);
        }
        get userSource() {
            return this.__userSource.get();
        }
        set userSource(newValue) {
            this.__userSource.set(newValue);
        }
        get outcomes() {
            return this.__outcomes.get();
        }
        /**
         * In version 9.6.0: deleted
         * In version 9.0.3: introduced
         */
        get allowedModuleRoles() {
            return this.__allowedModuleRoles.get();
        }
        get allowedModuleRolesQualifiedNames() {
            return this.__allowedModuleRoles.qualifiedNames();
        }
        /**
         * In version 9.0.5: introduced
         */
        get onCreatedEvent() {
            return this.__onCreatedEvent.get();
        }
        set onCreatedEvent(newValue) {
            this.__onCreatedEvent.set(newValue);
        }
        /**
         * In version 9.11.0: introduced
         */
        get autoAssignSingleTargetUser() {
            return this.__autoAssignSingleTargetUser.get();
        }
        set autoAssignSingleTargetUser(newValue) {
            this.__autoAssignSingleTargetUser.set(newValue);
        }
        /**
         * Creates and returns a new UserTask instance in the SDK and on the server.
         * The new UserTask will be automatically stored in the 'activities' property
         * of the parent Flow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.2 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, UserTask.structureTypeName, { start: "9.0.2" });
            return internal.instancehelpers.createElement(container, UserTask, "activities", true);
        }
        /**
         * Creates and returns a new UserTask instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, UserTask);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__autoAssignSingleTargetUser.isAvailable) {
                this.autoAssignSingleTargetUser = false;
            }
            if (this.__onCreatedEvent.isAvailable) {
                this.onCreatedEvent = NoEvent.create(this.model);
            }
            this.taskDescription = microflows_1.microflows.StringTemplate.create(this.model);
            this.taskName = microflows_1.microflows.StringTemplate.create(this.model);
            if (this.__taskPage.isAvailable) {
                this.taskPage = PageReference.create(this.model);
            }
            this.userSource = XPathBasedUserSource.create(this.model);
        }
    }
    UserTask.structureTypeName = "Workflows$UserTask";
    UserTask.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.0.2",
        properties: {
            userTaskEntity: {
                introduced: "9.6.0",
                deleted: "9.10.0",
                deletionMessage: null,
                public: {
                    currentValue: true
                }
            },
            page: {
                deleted: "9.11.0",
                deletionMessage: null,
                public: {
                    currentValue: true
                }
            },
            taskPage: {
                introduced: "9.11.0",
                public: {
                    currentValue: true,
                    changedIn: ["9.12.0"]
                },
                required: {
                    currentValue: true
                }
            },
            taskName: {
                required: {
                    currentValue: true
                }
            },
            taskDescription: {
                required: {
                    currentValue: true
                }
            },
            userSource: {
                required: {
                    currentValue: true
                }
            },
            outcomes: {
                public: {
                    currentValue: true
                }
            },
            allowedModuleRoles: {
                introduced: "9.0.3",
                deleted: "9.6.0",
                deletionMessage: null,
                public: {
                    currentValue: true
                }
            },
            onCreatedEvent: {
                introduced: "9.0.5",
                required: {
                    currentValue: true
                }
            },
            autoAssignSingleTargetUser: {
                introduced: "9.11.0"
            }
        },
        public: {
            currentValue: true
        },
        experimental: {
            currentValue: false,
            changedIn: ["9.0.5"]
        }
    }, internal.StructureType.Element);
    workflows.UserTask = UserTask;
    /**
     * In version 9.0.5: removed experimental
     * In version 9.0.2: introduced
     */
    class UserTaskOutcome extends Outcome {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__name = new internal.PrimitiveProperty(UserTaskOutcome, this, "name", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__caption = new internal.PrimitiveProperty(UserTaskOutcome, this, "caption", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new UserTaskOutcome() cannot be invoked directly, please use 'model.workflows.createUserTaskOutcome()'");
            }
        }
        get containerAsUserTask() {
            return super.getContainerAs(UserTask);
        }
        get name() {
            return this.__name.get();
        }
        set name(newValue) {
            this.__name.set(newValue);
        }
        get caption() {
            return this.__caption.get();
        }
        set caption(newValue) {
            this.__caption.set(newValue);
        }
        /**
         * Creates and returns a new UserTaskOutcome instance in the SDK and on the server.
         * The new UserTaskOutcome will be automatically stored in the 'outcomes' property
         * of the parent UserTask element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.2 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, UserTaskOutcome.structureTypeName, { start: "9.0.2" });
            return internal.instancehelpers.createElement(container, UserTaskOutcome, "outcomes", true);
        }
        /**
         * Creates and returns a new UserTaskOutcome instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, UserTaskOutcome);
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
        }
    }
    UserTaskOutcome.structureTypeName = "Workflows$UserTaskOutcome";
    UserTaskOutcome.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.0.2",
        properties: {
            name: {
                public: {
                    currentValue: true
                }
            },
            caption: {
                public: {
                    currentValue: true
                }
            }
        },
        public: {
            currentValue: true
        },
        experimental: {
            currentValue: false,
            changedIn: ["9.0.5"]
        }
    }, internal.StructureType.Element);
    workflows.UserTaskOutcome = UserTaskOutcome;
    /**
     * In version 9.0.5: removed experimental
     * In version 9.0.2: introduced
     */
    class VoidConditionOutcome extends ConditionOutcome {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new VoidConditionOutcome() cannot be invoked directly, please use 'model.workflows.createVoidConditionOutcome()'");
            }
        }
        get containerAsConditionOutcomeActivity() {
            return super.getContainerAs(ConditionOutcomeActivity);
        }
        /**
         * Creates and returns a new VoidConditionOutcome instance in the SDK and on the server.
         * The new VoidConditionOutcome will be automatically stored in the 'outcomes' property
         * of the parent ConditionOutcomeActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.2 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, VoidConditionOutcome.structureTypeName, { start: "9.0.2" });
            return internal.instancehelpers.createElement(container, VoidConditionOutcome, "outcomes", true);
        }
        /**
         * Creates and returns a new VoidConditionOutcome instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, VoidConditionOutcome);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    VoidConditionOutcome.structureTypeName = "Workflows$VoidConditionOutcome";
    VoidConditionOutcome.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.0.2",
        public: {
            currentValue: true
        },
        experimental: {
            currentValue: false,
            changedIn: ["9.0.5"]
        }
    }, internal.StructureType.Element);
    workflows.VoidConditionOutcome = VoidConditionOutcome;
    /**
     * See: {@link https://docs.mendix.com/refguide/workflows relevant section in reference guide}
     *
     * In version 9.0.5: removed experimental
     * In version 9.0.2: introduced
     */
    class Workflow extends projects_1.projects.Document {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            /** @internal */
            this.__title = new internal.PrimitiveProperty(Workflow, this, "title", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__contextEntity = new internal.ByNameReferenceProperty(Workflow, this, "contextEntity", null, "DomainModels$Entity");
            /** @internal */
            this.__parameter = new internal.PartProperty(Workflow, this, "parameter", null, true);
            /** @internal */
            this.__workflowEntity = new internal.ByNameReferenceProperty(Workflow, this, "workflowEntity", null, "DomainModels$Entity");
            /** @internal */
            this.__workflowType = new internal.PartProperty(Workflow, this, "workflowType", null, true);
            /** @internal */
            this.__overviewPage = new internal.ByNameReferenceProperty(Workflow, this, "overviewPage", null, "Pages$Page");
            /** @internal */
            this.__adminPage = new internal.PartProperty(Workflow, this, "adminPage", null, false);
            /** @internal */
            this.__flow = new internal.PartProperty(Workflow, this, "flow", null, true);
            /** @internal */
            this.__workflowName = new internal.PartProperty(Workflow, this, "workflowName", null, true);
            /** @internal */
            this.__workflowDescription = new internal.PartProperty(Workflow, this, "workflowDescription", null, true);
            /** @internal */
            this.__dueDate = new internal.PrimitiveProperty(Workflow, this, "dueDate", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__allowedModuleRoles = new internal.ByNameReferenceListProperty(Workflow, this, "allowedModuleRoles", [], "Security$ModuleRole");
            /** @internal */
            this.__workflowOnStateChangeEvent = new internal.PartProperty(Workflow, this, "workflowOnStateChangeEvent", null, false);
            /** @internal */
            this.__usertaskOnStateChangeEvent = new internal.PartProperty(Workflow, this, "usertaskOnStateChangeEvent", null, false);
            /** @internal */
            this.__annotation = new internal.PartProperty(Workflow, this, "annotation", null, false);
            this._containmentName = "documents";
        }
        get containerAsFolderBase() {
            return super.getContainerAs(projects_1.projects.FolderBase);
        }
        get title() {
            return this.__title.get();
        }
        set title(newValue) {
            this.__title.set(newValue);
        }
        /**
         * In version 9.6.0: deleted
         */
        get contextEntity() {
            return this.__contextEntity.get();
        }
        set contextEntity(newValue) {
            this.__contextEntity.set(newValue);
        }
        get contextEntityQualifiedName() {
            return this.__contextEntity.qualifiedName();
        }
        /**
         * In version 9.6.0: introduced
         */
        get parameter() {
            return this.__parameter.get();
        }
        set parameter(newValue) {
            this.__parameter.set(newValue);
        }
        /**
         * In version 9.7.0: deleted
         * In version 9.6.0: introduced
         */
        get workflowEntity() {
            return this.__workflowEntity.get();
        }
        set workflowEntity(newValue) {
            this.__workflowEntity.set(newValue);
        }
        get workflowEntityQualifiedName() {
            return this.__workflowEntity.qualifiedName();
        }
        /**
         * In version 9.10.0: deleted
         * In version 9.7.0: introduced
         */
        get workflowType() {
            return this.__workflowType.get();
        }
        set workflowType(newValue) {
            this.__workflowType.set(newValue);
        }
        /**
         * In version 9.11.0: deleted
         */
        get overviewPage() {
            return this.__overviewPage.get();
        }
        set overviewPage(newValue) {
            this.__overviewPage.set(newValue);
        }
        get overviewPageQualifiedName() {
            return this.__overviewPage.qualifiedName();
        }
        /**
         * In version 9.11.0: introduced
         */
        get adminPage() {
            return this.__adminPage.get();
        }
        set adminPage(newValue) {
            this.__adminPage.set(newValue);
        }
        get flow() {
            return this.__flow.get();
        }
        set flow(newValue) {
            this.__flow.set(newValue);
        }
        get workflowName() {
            return this.__workflowName.get();
        }
        set workflowName(newValue) {
            this.__workflowName.set(newValue);
        }
        get workflowDescription() {
            return this.__workflowDescription.get();
        }
        set workflowDescription(newValue) {
            this.__workflowDescription.set(newValue);
        }
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get dueDate() {
            return this.__dueDate.get();
        }
        set dueDate(newValue) {
            this.__dueDate.set(newValue);
        }
        /**
         * In version 9.6.0: deleted
         */
        get allowedModuleRoles() {
            return this.__allowedModuleRoles.get();
        }
        get allowedModuleRolesQualifiedNames() {
            return this.__allowedModuleRoles.qualifiedNames();
        }
        /**
         * In version 9.12.0: introduced
         */
        get workflowOnStateChangeEvent() {
            return this.__workflowOnStateChangeEvent.get();
        }
        set workflowOnStateChangeEvent(newValue) {
            this.__workflowOnStateChangeEvent.set(newValue);
        }
        /**
         * In version 9.12.0: introduced
         */
        get usertaskOnStateChangeEvent() {
            return this.__usertaskOnStateChangeEvent.get();
        }
        set usertaskOnStateChangeEvent(newValue) {
            this.__usertaskOnStateChangeEvent.set(newValue);
        }
        /**
         * In version 9.15.0: introduced
         */
        get annotation() {
            return this.__annotation.get();
        }
        set annotation(newValue) {
            this.__annotation.set(newValue);
        }
        /**
         * Creates a new Workflow unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container) {
            return internal.instancehelpers.createUnit(container, Workflow);
        }
        /** @internal */
        _isByNameReferrable() {
            return this.__name.isAvailable;
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.flow = Flow.create(this.model);
            if (this.__parameter.isAvailable) {
                this.parameter = Parameter.create(this.model);
            }
            this.workflowDescription = microflows_1.microflows.StringTemplate.create(this.model);
            this.workflowName = microflows_1.microflows.StringTemplate.create(this.model);
            if (this.__workflowType.isAvailable) {
                this.workflowType = WorkflowType.create(this.model);
            }
        }
    }
    Workflow.structureTypeName = "Workflows$Workflow";
    Workflow.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.0.2",
        properties: {
            title: {
                public: {
                    currentValue: true
                }
            },
            contextEntity: {
                deleted: "9.6.0",
                deletionMessage: null,
                public: {
                    currentValue: true
                }
            },
            parameter: {
                introduced: "9.6.0",
                public: {
                    currentValue: true
                },
                required: {
                    currentValue: true
                }
            },
            workflowEntity: {
                introduced: "9.6.0",
                deleted: "9.7.0",
                deletionMessage: null,
                public: {
                    currentValue: true
                }
            },
            workflowType: {
                introduced: "9.7.0",
                deleted: "9.10.0",
                deletionMessage: null,
                public: {
                    currentValue: true
                },
                required: {
                    currentValue: true
                }
            },
            overviewPage: {
                deleted: "9.11.0",
                deletionMessage: null,
                public: {
                    currentValue: true
                }
            },
            adminPage: {
                introduced: "9.11.0"
            },
            flow: {
                public: {
                    currentValue: true
                },
                required: {
                    currentValue: true
                }
            },
            workflowName: {
                required: {
                    currentValue: true
                }
            },
            workflowDescription: {
                required: {
                    currentValue: true
                }
            },
            allowedModuleRoles: {
                deleted: "9.6.0",
                deletionMessage: null,
                public: {
                    currentValue: true
                }
            },
            workflowOnStateChangeEvent: {
                introduced: "9.12.0"
            },
            usertaskOnStateChangeEvent: {
                introduced: "9.12.0"
            },
            annotation: {
                introduced: "9.15.0"
            }
        },
        experimental: {
            currentValue: false,
            changedIn: ["9.0.5"]
        }
    }, internal.StructureType.ModelUnit);
    workflows.Workflow = Workflow;
    /**
     * In version 9.18.0: introduced
     */
    class WorkflowCallParameterMapping extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__parameter = new internal.ByNameReferenceProperty(WorkflowCallParameterMapping, this, "parameter", null, "Workflows$Parameter");
            /** @internal */
            this.__expression = new internal.PrimitiveProperty(WorkflowCallParameterMapping, this, "expression", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new WorkflowCallParameterMapping() cannot be invoked directly, please use 'model.workflows.createWorkflowCallParameterMapping()'");
            }
        }
        get containerAsCallWorkflowActivity() {
            return super.getContainerAs(CallWorkflowActivity);
        }
        get parameter() {
            return this.__parameter.get();
        }
        set parameter(newValue) {
            this.__parameter.set(newValue);
        }
        get parameterQualifiedName() {
            return this.__parameter.qualifiedName();
        }
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get expression() {
            return this.__expression.get();
        }
        set expression(newValue) {
            this.__expression.set(newValue);
        }
        /**
         * Creates and returns a new WorkflowCallParameterMapping instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, WorkflowCallParameterMapping);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    WorkflowCallParameterMapping.structureTypeName = "Workflows$WorkflowCallParameterMapping";
    WorkflowCallParameterMapping.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.18.0",
        properties: {
            parameter: {
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    workflows.WorkflowCallParameterMapping = WorkflowCallParameterMapping;
    /**
     * In version 9.10.0: deleted
     * In version 9.7.0: introduced
     */
    class WorkflowType extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__entity = new internal.ByNameReferenceProperty(WorkflowType, this, "entity", null, "DomainModels$Entity");
            if (arguments.length < 4) {
                throw new Error("new WorkflowType() cannot be invoked directly, please use 'model.workflows.createWorkflowType()'");
            }
        }
        get containerAsWorkflow() {
            return super.getContainerAs(Workflow);
        }
        get entity() {
            return this.__entity.get();
        }
        set entity(newValue) {
            this.__entity.set(newValue);
        }
        get entityQualifiedName() {
            return this.__entity.qualifiedName();
        }
        /**
         * Creates and returns a new WorkflowType instance in the SDK and on the server.
         * The new WorkflowType will be automatically stored in the 'workflowType' property
         * of the parent Workflow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.7.0 to 9.9.0
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, WorkflowType.structureTypeName, { start: "9.7.0", end: "9.9.0" });
            return internal.instancehelpers.createElement(container, WorkflowType, "workflowType", false);
        }
        /**
         * Creates and returns a new WorkflowType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, WorkflowType);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    WorkflowType.structureTypeName = "Workflows$WorkflowType";
    WorkflowType.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.7.0",
        deleted: "9.10.0",
        deletionMessage: null,
        properties: {
            entity: {
                public: {
                    currentValue: true
                }
            }
        },
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    workflows.WorkflowType = WorkflowType;
    /**
     * In version 9.0.5: removed experimental
     * In version 9.0.2: introduced
     */
    class XPathBasedUserSource extends UserSource {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__xPathConstraint = new internal.PrimitiveProperty(XPathBasedUserSource, this, "xPathConstraint", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new XPathBasedUserSource() cannot be invoked directly, please use 'model.workflows.createXPathBasedUserSource()'");
            }
        }
        get containerAsUserTask() {
            return super.getContainerAs(UserTask);
        }
        /**
         * The value of this property is conceptually of type xPathConstraints.XPathConstraint.
         */
        get xPathConstraint() {
            return this.__xPathConstraint.get();
        }
        set xPathConstraint(newValue) {
            this.__xPathConstraint.set(newValue);
        }
        /**
         * Creates and returns a new XPathBasedUserSource instance in the SDK and on the server.
         * The new XPathBasedUserSource will be automatically stored in the 'userSource' property
         * of the parent UserTask element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.2 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, XPathBasedUserSource.structureTypeName, { start: "9.0.2" });
            return internal.instancehelpers.createElement(container, XPathBasedUserSource, "userSource", false);
        }
        /**
         * Creates and returns a new XPathBasedUserSource instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, XPathBasedUserSource);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    XPathBasedUserSource.structureTypeName = "Workflows$XPathBasedUserSource";
    XPathBasedUserSource.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.0.2",
        experimental: {
            currentValue: false,
            changedIn: ["9.0.5"]
        }
    }, internal.StructureType.Element);
    workflows.XPathBasedUserSource = XPathBasedUserSource;
})(workflows = exports.workflows || (exports.workflows = {}));
const microflows_1 = require("./microflows");
const settings_1 = require("./settings");
//# sourceMappingURL=workflows.js.map