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
            pendingtransApp_component_1.PendingTransAppComponent, transAppDetails_component_1.TransAppDetailsComponent
        ]
    })
], TransAppModule);
exports.TransAppModule = TransAppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNhcHAubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidHJhbnNhcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsMERBQW1FO0FBQ25FLG9EQUFxRTtBQUNyRSxzQ0FBeUM7QUFFekMsd0NBQTZDO0FBRTdDLHVEQUFxRDtBQUVyRCx5RUFBdUU7QUFDdkUseUVBQXVFO0FBQ3ZFLHFEQUFvRDtBQWVwRCxJQUFhLGNBQWM7SUFBM0I7SUFBOEIsQ0FBQztJQUFELHFCQUFDO0FBQUQsQ0FBQyxBQUEvQixJQUErQjtBQUFsQixjQUFjO0lBYjFCLGVBQVEsQ0FBQztRQUNOLFNBQVMsRUFBRTtZQUNQLGtDQUFlLEVBQUUseUJBQWM7U0FDbEM7UUFDRCxPQUFPLEVBQUU7WUFDTCw2QkFBa0I7WUFDbEIsK0JBQXVCO1lBQ3ZCLGlDQUFlO1NBQ2xCO1FBQ0QsWUFBWSxFQUFFO1lBQ1Ysb0RBQXdCLEVBQUMsb0RBQXdCO1NBQ3BEO0tBQ0osQ0FBQztHQUNXLGNBQWMsQ0FBSTtBQUFsQix3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlc1wiO1xyXG5cclxuaW1wb3J0IHsgVHJhbnNBcHBTZXJ2aWNlIH0gZnJvbSBcIi4vdHJhbnNBcHAuc2VydmljZVwiO1xyXG5cclxuaW1wb3J0IHsgUGVuZGluZ1RyYW5zQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vcGVuZGluZ3RyYW5zQXBwLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBUcmFuc0FwcERldGFpbHNDb21wb25lbnQgfSBmcm9tIFwiLi90cmFuc0FwcERldGFpbHMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IHRyYW5zQXBwUm91dGluZyB9IGZyb20gXCIuL3RyYW5zQXBwLnJvdXRlc1wiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIFRyYW5zQXBwU2VydmljZSwgQmFja2VuZFNlcnZpY2VcclxuICAgIF0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxyXG4gICAgICAgIHRyYW5zQXBwUm91dGluZ1xyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIFBlbmRpbmdUcmFuc0FwcENvbXBvbmVudCxUcmFuc0FwcERldGFpbHNDb21wb25lbnRcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRyYW5zQXBwTW9kdWxlIHsgfVxyXG4iXX0=