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
var services_1 = require("../services");
var transApp_service_1 = require("./transApp.service");
var pendingtransApp_component_1 = require("./pendingtransApp.component");
var transAppDetails_component_1 = require("./transAppDetails.component");
var approvalRequestInfo_component_1 = require("./approvalRequestInfo.component");
var approvalLog_component_1 = require("./approvalLog.component");
var approvalLogDetail_component_1 = require("./approvalLogDetail.component");
var transApp_routes_1 = require("./transApp.routes");
var TransAppModule = (function () {
    function TransAppModule() {
    }
    return TransAppModule;
}());
TransAppModule = __decorate([
    core_1.NgModule({
        providers: [
            transApp_service_1.TransAppService, services_1.BackendService
        ],
        imports: [
            platform_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule,
            transApp_routes_1.transAppRouting
        ],
        declarations: [
            pendingtransApp_component_1.PendingTransAppComponent, transAppDetails_component_1.TransAppDetailsComponent, approvalRequestInfo_component_1.AprovalRequestInfoComponent, approvalLog_component_1.ApprovalLogComponent, approvalLogDetail_component_1.ApprovalLogDetailComponent
        ]
    })
], TransAppModule);
exports.TransAppModule = TransAppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNhcHAubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidHJhbnNhcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsMERBQW1FO0FBQ25FLG9EQUFxRTtBQUNyRSxzQ0FBeUM7QUFFekMsd0NBQTZDO0FBRTdDLHVEQUFxRDtBQUVyRCx5RUFBdUU7QUFDdkUseUVBQXVFO0FBQ3ZFLGlGQUE4RTtBQUM5RSxpRUFBK0Q7QUFDL0QsNkVBQTJFO0FBRTNFLHFEQUFvRDtBQWVwRCxJQUFhLGNBQWM7SUFBM0I7SUFBOEIsQ0FBQztJQUFELHFCQUFDO0FBQUQsQ0FBQyxBQUEvQixJQUErQjtBQUFsQixjQUFjO0lBYjFCLGVBQVEsQ0FBQztRQUNOLFNBQVMsRUFBRTtZQUNQLGtDQUFlLEVBQUUseUJBQWM7U0FDbEM7UUFDRCxPQUFPLEVBQUU7WUFDTCw2QkFBa0I7WUFDbEIsK0JBQXVCO1lBQ3ZCLGlDQUFlO1NBQ2xCO1FBQ0QsWUFBWSxFQUFFO1lBQ1Ysb0RBQXdCLEVBQUMsb0RBQXdCLEVBQUMsMkRBQTJCLEVBQUMsNENBQW9CLEVBQUMsd0RBQTBCO1NBQ2hJO0tBQ0osQ0FBQztHQUNXLGNBQWMsQ0FBSTtBQUFsQix3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlc1wiO1xyXG5cclxuaW1wb3J0IHsgVHJhbnNBcHBTZXJ2aWNlIH0gZnJvbSBcIi4vdHJhbnNBcHAuc2VydmljZVwiO1xyXG5cclxuaW1wb3J0IHsgUGVuZGluZ1RyYW5zQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vcGVuZGluZ3RyYW5zQXBwLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBUcmFuc0FwcERldGFpbHNDb21wb25lbnQgfSBmcm9tIFwiLi90cmFuc0FwcERldGFpbHMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEFwcm92YWxSZXF1ZXN0SW5mb0NvbXBvbmVudCB9IGZyb20gXCIuL2FwcHJvdmFsUmVxdWVzdEluZm8uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEFwcHJvdmFsTG9nQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwcm92YWxMb2cuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEFwcHJvdmFsTG9nRGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwcm92YWxMb2dEZXRhaWwuY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyB0cmFuc0FwcFJvdXRpbmcgfSBmcm9tIFwiLi90cmFuc0FwcC5yb3V0ZXNcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBUcmFuc0FwcFNlcnZpY2UsIEJhY2tlbmRTZXJ2aWNlXHJcbiAgICBdLFxyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcclxuICAgICAgICB0cmFuc0FwcFJvdXRpbmdcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBQZW5kaW5nVHJhbnNBcHBDb21wb25lbnQsVHJhbnNBcHBEZXRhaWxzQ29tcG9uZW50LEFwcm92YWxSZXF1ZXN0SW5mb0NvbXBvbmVudCxBcHByb3ZhbExvZ0NvbXBvbmVudCxBcHByb3ZhbExvZ0RldGFpbENvbXBvbmVudFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVHJhbnNBcHBNb2R1bGUgeyB9XHJcbiJdfQ==