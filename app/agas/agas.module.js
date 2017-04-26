"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_1 = require("nativescript-angular/platform");
var forms_1 = require("nativescript-angular/forms");
var core_1 = require("@angular/core");
var chat_service_1 = require("../chatlist/chat.service");
var services_1 = require("../services");
var agasdata_service_1 = require("./agasdata.service");
var agas_routes_1 = require("./agas.routes");
var agasfinaggsearch_component_1 = require("./agasfinaggsearch.component");
var agasfinaggdetail_component_1 = require("./agasfinaggdetail.component");
var agashtmlview_component_1 = require("./agashtmlview.component");
var agasfinagginfodetail_component_1 = require("./agasfinagginfodetail.component");
var agasGPFSNoteHtmlView_component_1 = require("./agasGPFSNoteHtmlView.component");
var element_registry_1 = require("nativescript-angular/element-registry");
element_registry_1.registerElement("DropDown", function () { return require("nativescript-drop-down/drop-down").DropDown; });
var AGASModule = (function () {
    function AGASModule() {
    }
    return AGASModule;
}());
AGASModule = __decorate([
    core_1.NgModule({
        providers: [
            chat_service_1.ChatService, services_1.BackendService, agasdata_service_1.AGASDataService
        ],
        imports: [
            platform_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule,
            agas_routes_1.agasRouting
        ],
        declarations: [
            agasfinaggsearch_component_1.AGASFinAggSearchComponent, agasfinaggdetail_component_1.AGASFinAggDetailComponent, agashtmlview_component_1.AGASHTMLViewComponent, agasfinagginfodetail_component_1.AGASFinAggInfoDetailComponent,
            agasGPFSNoteHtmlView_component_1.AGASGPFSNoteHTMLViewComponent
        ]
    })
], AGASModule);
exports.AGASModule = AGASModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdhcy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhZ2FzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLDBEQUFtRTtBQUNuRSxvREFBcUU7QUFDckUsc0NBQXlDO0FBQ3pDLHlEQUF1RDtBQUN2RCx3Q0FBNkM7QUFDN0MsdURBQXFEO0FBRXJELDZDQUE0QztBQUM1QywyRUFBeUU7QUFDekUsMkVBQXlFO0FBQ3pFLG1FQUFpRTtBQUNqRSxtRkFBaUY7QUFDakYsbUZBQWlGO0FBRWpGLDBFQUF3RTtBQUV4RSxrQ0FBZSxDQUFDLFVBQVUsRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLGtDQUFrQyxDQUFDLENBQUMsUUFBUSxFQUFwRCxDQUFvRCxDQUFDLENBQUM7QUFnQnhGLElBQWEsVUFBVTtJQUF2QjtJQUEwQixDQUFDO0lBQUQsaUJBQUM7QUFBRCxDQUFDLEFBQTNCLElBQTJCO0FBQWQsVUFBVTtJQWR0QixlQUFRLENBQUM7UUFDTixTQUFTLEVBQUU7WUFDUCwwQkFBVyxFQUFFLHlCQUFjLEVBQUUsa0NBQWU7U0FDL0M7UUFDRCxPQUFPLEVBQUU7WUFDTCw2QkFBa0I7WUFDbEIsK0JBQXVCO1lBQ3ZCLHlCQUFXO1NBQ2Q7UUFDRCxZQUFZLEVBQUU7WUFDVixzREFBeUIsRUFBRSxzREFBeUIsRUFBRSw4Q0FBcUIsRUFBRSw4REFBNkI7WUFDMUcsOERBQTZCO1NBQ2hDO0tBQ0osQ0FBQztHQUNXLFVBQVUsQ0FBSTtBQUFkLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3BsYXRmb3JtXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQ2hhdFNlcnZpY2UgfSBmcm9tIFwiLi4vY2hhdGxpc3QvY2hhdC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzXCI7XHJcbmltcG9ydCB7IEFHQVNEYXRhU2VydmljZSB9IGZyb20gXCIuL2FnYXNkYXRhLnNlcnZpY2VcIjtcclxuXHJcbmltcG9ydCB7IGFnYXNSb3V0aW5nIH0gZnJvbSBcIi4vYWdhcy5yb3V0ZXNcIjtcclxuaW1wb3J0IHsgQUdBU0ZpbkFnZ1NlYXJjaENvbXBvbmVudCB9IGZyb20gXCIuL2FnYXNmaW5hZ2dzZWFyY2guY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEFHQVNGaW5BZ2dEZXRhaWxDb21wb25lbnQgfSBmcm9tIFwiLi9hZ2FzZmluYWdnZGV0YWlsLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBBR0FTSFRNTFZpZXdDb21wb25lbnQgfSBmcm9tIFwiLi9hZ2FzaHRtbHZpZXcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEFHQVNGaW5BZ2dJbmZvRGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vYWdhc2ZpbmFnZ2luZm9kZXRhaWwuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEFHQVNHUEZTTm90ZUhUTUxWaWV3Q29tcG9uZW50IH0gZnJvbSBcIi4vYWdhc0dQRlNOb3RlSHRtbFZpZXcuY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeVwiO1xyXG5cclxucmVnaXN0ZXJFbGVtZW50KFwiRHJvcERvd25cIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1kcm9wLWRvd24vZHJvcC1kb3duXCIpLkRyb3BEb3duKTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBDaGF0U2VydmljZSwgQmFja2VuZFNlcnZpY2UsIEFHQVNEYXRhU2VydmljZVxyXG4gICAgXSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXHJcbiAgICAgICAgYWdhc1JvdXRpbmdcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBBR0FTRmluQWdnU2VhcmNoQ29tcG9uZW50LCBBR0FTRmluQWdnRGV0YWlsQ29tcG9uZW50LCBBR0FTSFRNTFZpZXdDb21wb25lbnQsIEFHQVNGaW5BZ2dJbmZvRGV0YWlsQ29tcG9uZW50LFxyXG4gICAgICAgIEFHQVNHUEZTTm90ZUhUTUxWaWV3Q29tcG9uZW50XHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBR0FTTW9kdWxlIHsgfVxyXG4iXX0=