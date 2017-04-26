"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_1 = require("nativescript-angular/platform");
var core_1 = require("@angular/core");
var http_1 = require("nativescript-angular/http");
var router_1 = require("nativescript-angular/router");
var app_routes_1 = require("./app.routes");
var app_component_1 = require("./app.component");
var services_1 = require("./services");
var login_module_1 = require("./login/login.module");
var list_module_1 = require("./list/list.module");
var list_detail_module_1 = require("./list-detail/list-detail.module");
var chatlist_module_1 = require("./chatlist/chatlist.module");
var agas_module_1 = require("./agas/agas.module");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        providers: [
            services_1.BackendService,
            services_1.FirebaseService,
            services_1.UtilsService,
            app_routes_1.authProviders
        ],
        imports: [
            platform_1.NativeScriptModule,
            http_1.NativeScriptHttpModule,
            router_1.NativeScriptRouterModule,
            router_1.NativeScriptRouterModule.forRoot(app_routes_1.appRoutes),
            login_module_1.LoginModule,
            list_module_1.ListModule,
            list_detail_module_1.ListDetailModule,
            chatlist_module_1.ChatListModule, agas_module_1.AGASModule
        ],
        declarations: [
            app_component_1.AppComponent,
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSwwREFBbUU7QUFDbkUsc0NBQXlDO0FBQ3pDLGtEQUFtRTtBQUNuRSxzREFBdUU7QUFFdkUsMkNBQXdEO0FBQ3hELGlEQUErQztBQUMvQyx1Q0FBMkU7QUFFM0UscURBQW1EO0FBQ25ELGtEQUFnRDtBQUNoRCx1RUFBb0U7QUFDcEUsOERBQTREO0FBQzVELGtEQUFnRDtBQXdCaEQsSUFBYSxTQUFTO0lBQXRCO0lBQXlCLENBQUM7SUFBRCxnQkFBQztBQUFELENBQUMsQUFBMUIsSUFBMEI7QUFBYixTQUFTO0lBdEJyQixlQUFRLENBQUM7UUFDTixTQUFTLEVBQUU7WUFDUCx5QkFBYztZQUNkLDBCQUFlO1lBQ2YsdUJBQVk7WUFDWiwwQkFBYTtTQUNoQjtRQUNELE9BQU8sRUFBRTtZQUNMLDZCQUFrQjtZQUNsQiw2QkFBc0I7WUFDdEIsaUNBQXdCO1lBQ3hCLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxzQkFBUyxDQUFDO1lBQzNDLDBCQUFXO1lBQ1gsd0JBQVU7WUFDVixxQ0FBZ0I7WUFDaEIsZ0NBQWMsRUFBQyx3QkFBVTtTQUM1QjtRQUNELFlBQVksRUFBRTtZQUNWLDRCQUFZO1NBQ2Y7UUFDRCxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO0tBQzVCLENBQUM7R0FDVyxTQUFTLENBQUk7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybVwiO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IGF1dGhQcm92aWRlcnMsIGFwcFJvdXRlcyB9IGZyb20gXCIuL2FwcC5yb3V0ZXNcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEJhY2tlbmRTZXJ2aWNlLCBGaXJlYmFzZVNlcnZpY2UsIFV0aWxzU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzXCI7XG5cbmltcG9ydCB7IExvZ2luTW9kdWxlIH0gZnJvbSBcIi4vbG9naW4vbG9naW4ubW9kdWxlXCI7XG5pbXBvcnQgeyBMaXN0TW9kdWxlIH0gZnJvbSBcIi4vbGlzdC9saXN0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTGlzdERldGFpbE1vZHVsZSB9IGZyb20gXCIuL2xpc3QtZGV0YWlsL2xpc3QtZGV0YWlsLm1vZHVsZVwiO1xuaW1wb3J0IHsgQ2hhdExpc3RNb2R1bGUgfSBmcm9tIFwiLi9jaGF0bGlzdC9jaGF0bGlzdC5tb2R1bGVcIjtcbmltcG9ydCB7IEFHQVNNb2R1bGUgfSBmcm9tIFwiLi9hZ2FzL2FnYXMubW9kdWxlXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIEJhY2tlbmRTZXJ2aWNlLFxuICAgICAgICBGaXJlYmFzZVNlcnZpY2UsXG4gICAgICAgIFV0aWxzU2VydmljZSxcbiAgICAgICAgYXV0aFByb3ZpZGVyc1xuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3QoYXBwUm91dGVzKSxcbiAgICAgICAgTG9naW5Nb2R1bGUsXG4gICAgICAgIExpc3RNb2R1bGUsXG4gICAgICAgIExpc3REZXRhaWxNb2R1bGUsXG4gICAgICAgIENoYXRMaXN0TW9kdWxlLEFHQVNNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgXSxcbiAgICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==