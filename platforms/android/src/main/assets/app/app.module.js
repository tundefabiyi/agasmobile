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
var appstart_component_1 = require("./appstart.component");
var services_1 = require("./services");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var login_module_1 = require("./login/login.module");
var list_module_1 = require("./list/list.module");
var list_detail_module_1 = require("./list-detail/list-detail.module");
var chatlist_module_1 = require("./chatlist/chatlist.module");
var agas_module_1 = require("./agas/agas.module");
var transapp_module_1 = require("./transactionapproval/transapp.module");
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
            app_routes_1.authProviders,
            services_1.HomePageService
        ],
        imports: [
            platform_1.NativeScriptModule,
            http_1.NativeScriptHttpModule,
            router_1.NativeScriptRouterModule,
            angular_1.NativeScriptUISideDrawerModule,
            router_1.NativeScriptRouterModule.forRoot(app_routes_1.appRoutes),
            login_module_1.LoginModule,
            list_module_1.ListModule,
            list_detail_module_1.ListDetailModule,
            chatlist_module_1.ChatListModule, agas_module_1.AGASModule, transapp_module_1.TransAppModule
        ],
        declarations: [
            app_component_1.AppComponent, appstart_component_1.AppStartComponent
        ],
        bootstrap: [appstart_component_1.AppStartComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSwwREFBbUU7QUFDbkUsc0NBQXlDO0FBQ3pDLGtEQUFtRTtBQUNuRSxzREFBdUU7QUFFdkUsMkNBQXdEO0FBQ3hELGlEQUErQztBQUMvQywyREFBeUQ7QUFFekQsdUNBQTJGO0FBRTFGLHNFQUE0RjtBQUM3RixxREFBbUQ7QUFDbkQsa0RBQWdEO0FBQ2hELHVFQUFvRTtBQUNwRSw4REFBNEQ7QUFDNUQsa0RBQWdEO0FBQ2hELHlFQUF1RTtBQTJCdkUsSUFBYSxTQUFTO0lBQXRCO0lBQXlCLENBQUM7SUFBRCxnQkFBQztBQUFELENBQUMsQUFBMUIsSUFBMEI7QUFBYixTQUFTO0lBekJyQixlQUFRLENBQUM7UUFDTixTQUFTLEVBQUU7WUFDUCx5QkFBYztZQUNkLDBCQUFlO1lBQ2YsdUJBQVk7WUFDWiwwQkFBYTtZQUNiLDBCQUFlO1NBQ2xCO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsNkJBQWtCO1lBQ2xCLDZCQUFzQjtZQUN0QixpQ0FBd0I7WUFDeEIsd0NBQThCO1lBQzlCLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxzQkFBUyxDQUFDO1lBQzNDLDBCQUFXO1lBQ1gsd0JBQVU7WUFDVixxQ0FBZ0I7WUFDaEIsZ0NBQWMsRUFBQyx3QkFBVSxFQUFDLGdDQUFjO1NBQzNDO1FBQ0QsWUFBWSxFQUFFO1lBRVYsNEJBQVksRUFBQyxzQ0FBaUI7U0FDakM7UUFDRCxTQUFTLEVBQUUsQ0FBQyxzQ0FBaUIsQ0FBQztLQUNqQyxDQUFDO0dBQ1csU0FBUyxDQUFJO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcGxhdGZvcm1cIjtcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBhdXRoUHJvdmlkZXJzLCBhcHBSb3V0ZXMgfSBmcm9tIFwiLi9hcHAucm91dGVzXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBBcHBTdGFydENvbXBvbmVudCB9IGZyb20gXCIuL2FwcHN0YXJ0LmNvbXBvbmVudFwiO1xuXG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSwgRmlyZWJhc2VTZXJ2aWNlLCBVdGlsc1NlcnZpY2UsSG9tZVBhZ2VTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXNcIjtcblxuIGltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdGVsZXJpay11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IExvZ2luTW9kdWxlIH0gZnJvbSBcIi4vbG9naW4vbG9naW4ubW9kdWxlXCI7XG5pbXBvcnQgeyBMaXN0TW9kdWxlIH0gZnJvbSBcIi4vbGlzdC9saXN0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTGlzdERldGFpbE1vZHVsZSB9IGZyb20gXCIuL2xpc3QtZGV0YWlsL2xpc3QtZGV0YWlsLm1vZHVsZVwiO1xuaW1wb3J0IHsgQ2hhdExpc3RNb2R1bGUgfSBmcm9tIFwiLi9jaGF0bGlzdC9jaGF0bGlzdC5tb2R1bGVcIjtcbmltcG9ydCB7IEFHQVNNb2R1bGUgfSBmcm9tIFwiLi9hZ2FzL2FnYXMubW9kdWxlXCI7XG5pbXBvcnQgeyBUcmFuc0FwcE1vZHVsZSB9IGZyb20gXCIuL3RyYW5zYWN0aW9uYXBwcm92YWwvdHJhbnNhcHAubW9kdWxlXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIEJhY2tlbmRTZXJ2aWNlLFxuICAgICAgICBGaXJlYmFzZVNlcnZpY2UsXG4gICAgICAgIFV0aWxzU2VydmljZSxcbiAgICAgICAgYXV0aFByb3ZpZGVycyxcbiAgICAgICAgSG9tZVBhZ2VTZXJ2aWNlXG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KGFwcFJvdXRlcyksXG4gICAgICAgIExvZ2luTW9kdWxlLFxuICAgICAgICBMaXN0TW9kdWxlLFxuICAgICAgICBMaXN0RGV0YWlsTW9kdWxlLFxuICAgICAgICBDaGF0TGlzdE1vZHVsZSxBR0FTTW9kdWxlLFRyYW5zQXBwTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgIC8vICBTSURFRFJBV0VSX0RJUkVDVElWRVMsXG4gICAgICAgIEFwcENvbXBvbmVudCxBcHBTdGFydENvbXBvbmVudFxuICAgIF0sXG4gICAgYm9vdHN0cmFwOiBbQXBwU3RhcnRDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==