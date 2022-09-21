"use strict";
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseModel = void 0;
const internal_1 = require("../sdk/internal");
const AbstractModel_1 = require("../sdk/internal/AbstractModel");
const elements = require("../sdk/internal/elements");
/**
 * Class to find generated model units.
 */
class BaseModel extends AbstractModel_1.AbstractModel {
    createElement(typeName) {
        const elementClass = internal_1.instancehelpers.lookupClass(typeName, this._allModelClasses());
        if (!elements.Element.isPrototypeOf(elementClass)) {
            throw new Error(`'${typeName}' is not an element type`);
        }
        if (typeof elementClass.create !== "function") {
            throw new Error(`Cannot create an element for an abstract type '${typeName}'`);
        }
        return internal_1.instancehelpers.createElement(this, elementClass);
    }
    allBuildingBlocks() {
        return super._allOfTypes(["Pages$BuildingBlock"]);
    }
    allCodeActions() {
        return super._allOfTypes(["JavaActions$JavaAction", "JavaScriptActions$JavaScriptAction"]);
    }
    allConstants() {
        return super._allOfTypes(["Constants$Constant"]);
    }
    allConsumedAppServices() {
        return super._allOfTypes(["AppServices$ConsumedAppService"]);
    }
    allConsumedBusinessEventServices() {
        return super._allOfTypes(["BusinessEvents$ConsumedBusinessEventService"]);
    }
    allConsumedKafkaServices() {
        return super._allOfTypes(["Kafka$ConsumedKafkaService"]);
    }
    allConsumedODataServices() {
        return super._allOfTypes(["Rest$ConsumedODataService"]);
    }
    allDataSets() {
        return super._allOfTypes(["DataSets$DataSet"]);
    }
    allDocuments() {
        return super._allOfTypes([
            "AppServices$ConsumedAppService",
            "BusinessEvents$ConsumedBusinessEventService",
            "BusinessEvents$PublishedBusinessEventService",
            "Constants$Constant",
            "DataSets$DataSet",
            "DocumentTemplates$DocumentTemplate",
            "Enumerations$Enumeration",
            "ExportMappings$ExportMapping",
            "Images$ImageCollection",
            "ImportMappings$ImportMapping",
            "JavaActions$JavaAction",
            "JavaScriptActions$JavaScriptAction",
            "JsonStructures$JsonStructure",
            "Kafka$ConsumedKafkaService",
            "Kafka$PublishedKafkaService",
            "MLMappings$MLMappingDocument",
            "Menus$MenuDocument",
            "MessageDefinitions$MessageDefinitionCollection",
            "Microflows$Microflow",
            "Microflows$Nanoflow",
            "Microflows$Rule",
            "NativePages$NativeLayout",
            "NativePages$NativePage",
            "Pages$BuildingBlock",
            "Pages$Layout",
            "Pages$Page",
            "Pages$PageTemplate",
            "Pages$Snippet",
            "Queues$Queue",
            "RegularExpressions$RegularExpression",
            "Rest$ConsumedODataService",
            "Rest$InteractiveRest",
            "Rest$PublishedODataService",
            "Rest$PublishedRestService",
            "ScheduledEvents$ScheduledEvent",
            "WebServices$ImportedWebService",
            "WebServices$PublishedAppService",
            "WebServices$PublishedWebService",
            "Workflows$Workflow",
            "XmlSchemas$XmlSchema"
        ]);
    }
    allDocumentTemplates() {
        return super._allOfTypes(["DocumentTemplates$DocumentTemplate"]);
    }
    allDomainModels() {
        return super._allOfTypes(["DomainModels$DomainModel"]);
    }
    allEnumerations() {
        return super._allOfTypes(["Enumerations$Enumeration"]);
    }
    allExportMappings() {
        return super._allOfTypes(["ExportMappings$ExportMapping"]);
    }
    allFolders() {
        return super._allOfTypes(["Projects$Folder"]);
    }
    allFolderBases() {
        return super._allOfTypes(["Projects$Folder", "Projects$Module"]);
    }
    allFormBases() {
        return super._allOfTypes([
            "NativePages$NativeLayout",
            "NativePages$NativePage",
            "Pages$BuildingBlock",
            "Pages$Layout",
            "Pages$Page",
            "Pages$PageTemplate",
            "Pages$Snippet"
        ]);
    }
    allImageCollections() {
        return super._allOfTypes(["Images$ImageCollection"]);
    }
    allImportMappings() {
        return super._allOfTypes(["ImportMappings$ImportMapping"]);
    }
    allImportedWebServices() {
        return super._allOfTypes(["WebServices$ImportedWebService"]);
    }
    allInteractiveRests() {
        return super._allOfTypes(["Rest$InteractiveRest"]);
    }
    allJavaActions() {
        return super._allOfTypes(["JavaActions$JavaAction"]);
    }
    allJavaScriptActions() {
        return super._allOfTypes(["JavaScriptActions$JavaScriptAction"]);
    }
    allJsonStructures() {
        return super._allOfTypes(["JsonStructures$JsonStructure"]);
    }
    allLayouts() {
        return super._allOfTypes(["Pages$Layout"]);
    }
    allMLMappingDocuments() {
        return super._allOfTypes(["MLMappings$MLMappingDocument"]);
    }
    allMappingDocuments() {
        return super._allOfTypes(["ExportMappings$ExportMapping", "ImportMappings$ImportMapping"]);
    }
    allMenuDocuments() {
        return super._allOfTypes(["Menus$MenuDocument"]);
    }
    allMessageDefinitionCollections() {
        return super._allOfTypes(["MessageDefinitions$MessageDefinitionCollection"]);
    }
    allMicroflows() {
        return super._allOfTypes(["Microflows$Microflow"]);
    }
    allMicroflowBases() {
        return super._allOfTypes(["Microflows$Microflow", "Microflows$Nanoflow", "Microflows$Rule"]);
    }
    allModules() {
        return super._allOfTypes(["Projects$Module"]);
    }
    allModuleDocuments() {
        return super._allOfTypes([
            "AppServices$ConsumedAppService",
            "BusinessEvents$ConsumedBusinessEventService",
            "BusinessEvents$PublishedBusinessEventService",
            "Constants$Constant",
            "DataSets$DataSet",
            "DocumentTemplates$DocumentTemplate",
            "DomainModels$DomainModel",
            "Enumerations$Enumeration",
            "ExportMappings$ExportMapping",
            "Images$ImageCollection",
            "ImportMappings$ImportMapping",
            "JavaActions$JavaAction",
            "JavaScriptActions$JavaScriptAction",
            "JsonStructures$JsonStructure",
            "Kafka$ConsumedKafkaService",
            "Kafka$PublishedKafkaService",
            "MLMappings$MLMappingDocument",
            "Menus$MenuDocument",
            "MessageDefinitions$MessageDefinitionCollection",
            "Microflows$Microflow",
            "Microflows$Nanoflow",
            "Microflows$Rule",
            "NativePages$NativeLayout",
            "NativePages$NativePage",
            "Pages$BuildingBlock",
            "Pages$Layout",
            "Pages$Page",
            "Pages$PageTemplate",
            "Pages$Snippet",
            "Projects$ModuleSettings",
            "Queues$Queue",
            "RegularExpressions$RegularExpression",
            "Rest$ConsumedODataService",
            "Rest$InteractiveRest",
            "Rest$PublishedODataService",
            "Rest$PublishedRestService",
            "ScheduledEvents$ScheduledEvent",
            "WebServices$ImportedWebService",
            "WebServices$PublishedAppService",
            "WebServices$PublishedWebService",
            "Workflows$Workflow",
            "XmlSchemas$XmlSchema"
        ]);
    }
    allModuleSecurities() {
        return super._allOfTypes(["Security$ModuleSecurity"]);
    }
    allModuleSettings() {
        return super._allOfTypes(["Projects$ModuleSettings"]);
    }
    allMxSchemas() {
        return super._allOfTypes(["JsonStructures$JsonStructure", "XmlSchemas$XmlSchema"]);
    }
    allNanoflows() {
        return super._allOfTypes(["Microflows$Nanoflow"]);
    }
    allNativeLayouts() {
        return super._allOfTypes(["NativePages$NativeLayout"]);
    }
    allNativePages() {
        return super._allOfTypes(["NativePages$NativePage"]);
    }
    allNavigationDocuments() {
        return super._allOfTypes(["Navigation$NavigationDocument"]);
    }
    allPages() {
        return super._allOfTypes(["Pages$Page"]);
    }
    allPageTemplates() {
        return super._allOfTypes(["Pages$PageTemplate"]);
    }
    allProjects() {
        return super._allOfTypes(["Projects$Project"]);
    }
    allProjectConversions() {
        return super._allOfTypes(["Projects$ProjectConversion"]);
    }
    allProjectDocuments() {
        return super._allOfTypes([
            "Navigation$NavigationDocument",
            "Security$ProjectSecurity",
            "Settings$ProjectSettings",
            "Texts$SystemTextCollection"
        ]);
    }
    allProjectSecurities() {
        return super._allOfTypes(["Security$ProjectSecurity"]);
    }
    allProjectSettings() {
        return super._allOfTypes(["Settings$ProjectSettings"]);
    }
    allPublishedAppServices() {
        return super._allOfTypes(["WebServices$PublishedAppService"]);
    }
    allPublishedBusinessEventServices() {
        return super._allOfTypes(["BusinessEvents$PublishedBusinessEventService"]);
    }
    allPublishedKafkaServices() {
        return super._allOfTypes(["Kafka$PublishedKafkaService"]);
    }
    allPublishedODataServices() {
        return super._allOfTypes(["Rest$PublishedODataService"]);
    }
    allPublishedRestServices() {
        return super._allOfTypes(["Rest$PublishedRestService"]);
    }
    allPublishedServiceBases() {
        return super._allOfTypes(["WebServices$PublishedAppService", "WebServices$PublishedWebService"]);
    }
    allPublishedWebServices() {
        return super._allOfTypes(["WebServices$PublishedWebService"]);
    }
    allQueues() {
        return super._allOfTypes(["Queues$Queue"]);
    }
    allRegularExpressions() {
        return super._allOfTypes(["RegularExpressions$RegularExpression"]);
    }
    allRemoteEntitySourceDocuments() {
        return super._allOfTypes(["Kafka$ConsumedKafkaService", "Rest$ConsumedODataService"]);
    }
    allRules() {
        return super._allOfTypes(["Microflows$Rule"]);
    }
    allScheduledEvents() {
        return super._allOfTypes(["ScheduledEvents$ScheduledEvent"]);
    }
    allServerSideMicroflows() {
        return super._allOfTypes(["Microflows$Microflow", "Microflows$Rule"]);
    }
    allSnippets() {
        return super._allOfTypes(["Pages$Snippet"]);
    }
    allSystemTextCollections() {
        return super._allOfTypes(["Texts$SystemTextCollection"]);
    }
    allTemplateFormBases() {
        return super._allOfTypes(["Pages$BuildingBlock", "Pages$PageTemplate"]);
    }
    allWorkflows() {
        return super._allOfTypes(["Workflows$Workflow"]);
    }
    allXmlSchemas() {
        return super._allOfTypes(["XmlSchemas$XmlSchema"]);
    }
    findAppServiceActionByQualifiedName(qname) {
        return this._resolveName("AppServices$AppServiceAction", qname);
    }
    findAppServiceActionParameterByQualifiedName(qname) {
        return this._resolveName("AppServices$AppServiceActionParameter", qname);
    }
    findConstantByQualifiedName(qname) {
        return this._resolveName("Constants$Constant", qname);
    }
    findDataSetByQualifiedName(qname) {
        return this._resolveName("DataSets$DataSet", qname);
    }
    findDataSetParameterByQualifiedName(qname) {
        return this._resolveName("DataSets$DataSetParameter", qname);
    }
    findDocumentTemplateByQualifiedName(qname) {
        return this._resolveName("DocumentTemplates$DocumentTemplate", qname);
    }
    findAssociationBaseByQualifiedName(qname) {
        return this._resolveName("DomainModels$AssociationBase", qname);
    }
    findAttributeByQualifiedName(qname) {
        return this._resolveName("DomainModels$Attribute", qname);
    }
    findEntityByQualifiedName(qname) {
        return this._resolveName("DomainModels$Entity", qname);
    }
    findRemoteEntitySourceDocumentByQualifiedName(qname) {
        return this._resolveName("DomainModels$RemoteEntitySourceDocument", qname);
    }
    findEnumerationByQualifiedName(qname) {
        return this._resolveName("Enumerations$Enumeration", qname);
    }
    findEnumerationValueByQualifiedName(qname) {
        return this._resolveName("Enumerations$EnumerationValue", qname);
    }
    findExportMappingByQualifiedName(qname) {
        return this._resolveName("ExportMappings$ExportMapping", qname);
    }
    findImageByQualifiedName(qname) {
        return this._resolveName("Images$Image", qname);
    }
    findImportMappingByQualifiedName(qname) {
        return this._resolveName("ImportMappings$ImportMapping", qname);
    }
    findJavaActionByQualifiedName(qname) {
        return this._resolveName("JavaActions$JavaAction", qname);
    }
    findJavaActionParameterByQualifiedName(qname) {
        return this._resolveName("JavaActions$JavaActionParameter", qname);
    }
    findJavaScriptActionByQualifiedName(qname) {
        return this._resolveName("JavaScriptActions$JavaScriptAction", qname);
    }
    findJavaScriptActionParameterByQualifiedName(qname) {
        return this._resolveName("JavaScriptActions$JavaScriptActionParameter", qname);
    }
    findJsonStructureByQualifiedName(qname) {
        return this._resolveName("JsonStructures$JsonStructure", qname);
    }
    findConsumedKafkaServiceByQualifiedName(qname) {
        return this._resolveName("Kafka$ConsumedKafkaService", qname);
    }
    findMLMappingDocumentByQualifiedName(qname) {
        return this._resolveName("MLMappings$MLMappingDocument", qname);
    }
    findMenuDocumentByQualifiedName(qname) {
        return this._resolveName("Menus$MenuDocument", qname);
    }
    findMessageDefinitionByQualifiedName(qname) {
        return this._resolveName("MessageDefinitions$MessageDefinition", qname);
    }
    findMicroflowByQualifiedName(qname) {
        return this._resolveName("Microflows$Microflow", qname);
    }
    findMicroflowParameterByQualifiedName(qname) {
        return this._resolveName("Microflows$MicroflowParameter", qname);
    }
    findNanoflowByQualifiedName(qname) {
        return this._resolveName("Microflows$Nanoflow", qname);
    }
    findNanoflowParameterByQualifiedName(qname) {
        return this._resolveName("Microflows$NanoflowParameter", qname);
    }
    findRuleByQualifiedName(qname) {
        return this._resolveName("Microflows$Rule", qname);
    }
    findRuleParameterByQualifiedName(qname) {
        return this._resolveName("Microflows$RuleParameter", qname);
    }
    findNativeLayoutByQualifiedName(qname) {
        return this._resolveName("NativePages$NativeLayout", qname);
    }
    findNativePageByQualifiedName(qname) {
        return this._resolveName("NativePages$NativePage", qname);
    }
    findNavigationProfileByQualifiedName(qname) {
        return this._resolveName("Navigation$NavigationProfile", qname);
    }
    findLayoutByQualifiedName(qname) {
        return this._resolveName("Pages$Layout", qname);
    }
    findLayoutParameterByQualifiedName(qname) {
        return this._resolveName("Pages$LayoutParameter", qname);
    }
    findPageByQualifiedName(qname) {
        return this._resolveName("Pages$Page", qname);
    }
    findPageParameterByQualifiedName(qname) {
        return this._resolveName("Pages$PageParameter", qname);
    }
    findSnippetByQualifiedName(qname) {
        return this._resolveName("Pages$Snippet", qname);
    }
    findQueueByQualifiedName(qname) {
        return this._resolveName("Queues$Queue", qname);
    }
    findRegularExpressionByQualifiedName(qname) {
        return this._resolveName("RegularExpressions$RegularExpression", qname);
    }
    findConsumedODataServiceByQualifiedName(qname) {
        return this._resolveName("Rest$ConsumedODataService", qname);
    }
    findModuleRoleByQualifiedName(qname) {
        return this._resolveName("Security$ModuleRole", qname);
    }
    findUserRoleByQualifiedName(qname) {
        return this._resolveName("Security$UserRole", qname);
    }
    findImportedWebServiceByQualifiedName(qname) {
        return this._resolveName("WebServices$ImportedWebService", qname);
    }
    findParameterByQualifiedName(qname) {
        return this._resolveName("Workflows$Parameter", qname);
    }
    findUserTaskOutcomeByQualifiedName(qname) {
        return this._resolveName("Workflows$UserTaskOutcome", qname);
    }
    findWorkflowByQualifiedName(qname) {
        return this._resolveName("Workflows$Workflow", qname);
    }
    findXmlSchemaByQualifiedName(qname) {
        return this._resolveName("XmlSchemas$XmlSchema", qname);
    }
}
exports.BaseModel = BaseModel;
//# sourceMappingURL=base-model.js.map