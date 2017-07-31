"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var services_1 = require("../services");
var transApp_service_1 = require("./transApp.service");
var chat_service_1 = require("../chatlist/chat.service");
var ApprovalLogComponent = (function () {
    function ApprovalLogComponent(routerExtensions, backendService, router, ngZone, homePageService, transAppService, chatService) {
        this.routerExtensions = routerExtensions;
        this.backendService = backendService;
        this.router = router;
        this.ngZone = ngZone;
        this.homePageService = homePageService;
        this.transAppService = transAppService;
        this.chatService = chatService;
    }
    ApprovalLogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.homePageService.setShowGoBackButton(false);
        this.homePageService.setTitle("Approval Log");
        this.homePageService.onGoBackObservable.subscribe(function () {
            _this.ngZone.run(function () {
            });
        });
        this.approvalLoglist$ = this.transAppService.getApprovalLogList(this.chatService.cleanemail(services_1.BackendService.email));
    };
    ApprovalLogComponent.prototype.viewDetail = function (selecteditem) {
        var navigationExtras = {
            queryParams: {
                "primarykey": selecteditem.primarykey,
                "groupkey": selecteditem.groupkey
            }
        };
        this.router.navigate(["mobile-trans-approval-detail"], navigationExtras);
    };
    return ApprovalLogComponent;
}());
ApprovalLogComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "pendingtransApp",
        templateUrl: "approvalLog.html"
    }),
    __metadata("design:paramtypes", [router_extensions_1.RouterExtensions,
        services_1.BackendService,
        router_1.Router, core_1.NgZone, services_1.HomePageService,
        transApp_service_1.TransAppService, chat_service_1.ChatService])
], ApprovalLogComponent);
exports.ApprovalLogComponent = ApprovalLogComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwcm92YWxMb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwcm92YWxMb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTBEO0FBRzFELDBDQUEyRTtBQUMzRSxtRkFBaUY7QUFFakYsd0NBQThEO0FBQzlELHVEQUFxRDtBQUNyRCx5REFBdUQ7QUFPdkQsSUFBYSxvQkFBb0I7SUFHN0IsOEJBQW9CLGdCQUFrQyxFQUMxQyxjQUE4QixFQUM5QixNQUFjLEVBQVUsTUFBYyxFQUFVLGVBQWdDLEVBQ2hGLGVBQWdDLEVBQVUsV0FBd0I7UUFIMUQscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUMxQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEYsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFHOUUsQ0FBQztJQUNELHVDQUFRLEdBQVI7UUFBQSxpQkFVQztRQVRHLElBQUksQ0FBQyxlQUFlLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUM7WUFDOUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFFaEIsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxnQkFBZ0IsR0FBUSxJQUFJLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLHlCQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUU1SCxDQUFDO0lBQ00seUNBQVUsR0FBakIsVUFBa0IsWUFBaUI7UUFDL0IsSUFBSSxnQkFBZ0IsR0FBcUI7WUFDckMsV0FBVyxFQUFFO2dCQUNULFlBQVksRUFBRSxZQUFZLENBQUMsVUFBVTtnQkFDckMsVUFBVSxFQUFFLFlBQVksQ0FBQyxRQUFRO2FBQ3BDO1NBQ0osQ0FBQztRQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsOEJBQThCLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFDTCwyQkFBQztBQUFELENBQUMsQUE5QkQsSUE4QkM7QUE5Qlksb0JBQW9CO0lBTGhDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLGlCQUFpQjtRQUMzQixXQUFXLEVBQUUsa0JBQWtCO0tBQ2xDLENBQUM7cUNBSXdDLG9DQUFnQjtRQUMxQix5QkFBYztRQUN0QixlQUFNLEVBQWtCLGFBQU0sRUFBMkIsMEJBQWU7UUFDL0Qsa0NBQWUsRUFBdUIsMEJBQVc7R0FOckUsb0JBQW9CLENBOEJoQztBQTlCWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE5nWm9uZSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBGaXJlYmFzZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXNcIjtcclxuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSwgTmF2aWdhdGlvbkV4dHJhcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXIvcm91dGVyLWV4dGVuc2lvbnMnO1xyXG5cclxuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UsIEhvbWVQYWdlU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlc1wiO1xyXG5pbXBvcnQgeyBUcmFuc0FwcFNlcnZpY2UgfSBmcm9tIFwiLi90cmFuc0FwcC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IENoYXRTZXJ2aWNlIH0gZnJvbSBcIi4uL2NoYXRsaXN0L2NoYXQuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6IFwicGVuZGluZ3RyYW5zQXBwXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJhcHByb3ZhbExvZy5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcHJvdmFsTG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHB1YmxpYyBhcHByb3ZhbExvZ2xpc3QkOiBPYnNlcnZhYmxlPGFueT47XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgICAgIHByaXZhdGUgYmFja2VuZFNlcnZpY2U6IEJhY2tlbmRTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsIHByaXZhdGUgaG9tZVBhZ2VTZXJ2aWNlOiBIb21lUGFnZVNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSB0cmFuc0FwcFNlcnZpY2U6IFRyYW5zQXBwU2VydmljZSwgcHJpdmF0ZSBjaGF0U2VydmljZTogQ2hhdFNlcnZpY2VcclxuICAgICkge1xyXG5cclxuICAgIH1cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuaG9tZVBhZ2VTZXJ2aWNlLnNldFNob3dHb0JhY2tCdXR0b24oZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuaG9tZVBhZ2VTZXJ2aWNlLnNldFRpdGxlKFwiQXBwcm92YWwgTG9nXCIpO1xyXG4gICAgICAgIHRoaXMuaG9tZVBhZ2VTZXJ2aWNlLm9uR29CYWNrT2JzZXJ2YWJsZS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5vcGVuY2hhdGxpc3QoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmFwcHJvdmFsTG9nbGlzdCQgPSA8YW55PnRoaXMudHJhbnNBcHBTZXJ2aWNlLmdldEFwcHJvdmFsTG9nTGlzdCh0aGlzLmNoYXRTZXJ2aWNlLmNsZWFuZW1haWwoQmFja2VuZFNlcnZpY2UuZW1haWwpKTtcclxuXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdmlld0RldGFpbChzZWxlY3RlZGl0ZW06IGFueSkge1xyXG4gICAgICAgIGxldCBuYXZpZ2F0aW9uRXh0cmFzOiBOYXZpZ2F0aW9uRXh0cmFzID0ge1xyXG4gICAgICAgICAgICBxdWVyeVBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgXCJwcmltYXJ5a2V5XCI6IHNlbGVjdGVkaXRlbS5wcmltYXJ5a2V5LFxyXG4gICAgICAgICAgICAgICAgXCJncm91cGtleVwiOiBzZWxlY3RlZGl0ZW0uZ3JvdXBrZXlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wibW9iaWxlLXRyYW5zLWFwcHJvdmFsLWRldGFpbFwiXSwgbmF2aWdhdGlvbkV4dHJhcyk7XHJcbiAgICB9XHJcbn0iXX0=