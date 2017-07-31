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
var PendingTransAppComponent = (function () {
    function PendingTransAppComponent(routerExtensions, backendService, router, ngZone, homePageService, transAppService, chatService) {
        this.routerExtensions = routerExtensions;
        this.backendService = backendService;
        this.router = router;
        this.ngZone = ngZone;
        this.homePageService = homePageService;
        this.transAppService = transAppService;
        this.chatService = chatService;
    }
    PendingTransAppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.homePageService.setShowGoBackButton(false);
        this.homePageService.setTitle("Pending Approvals");
        this.homePageService.onGoBackObservable.subscribe(function () {
            _this.ngZone.run(function () {
            });
        });
        this.pendingtranslist$ = this.transAppService.getPendingMobileTransactionRequestUserLogList(this.chatService.cleanemail(services_1.BackendService.email));
    };
    PendingTransAppComponent.prototype.viewDetail = function (selecteditem) {
        var navigationExtras = {
            queryParams: {
                "primarykey": selecteditem.primarykey,
                "groupkey": selecteditem.groupkey
            }
        };
        this.router.navigate(["mobile-trans-approval-detail"], navigationExtras);
    };
    return PendingTransAppComponent;
}());
PendingTransAppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "chat-list",
        templateUrl: "pendingtransApp.html"
    }),
    __metadata("design:paramtypes", [router_extensions_1.RouterExtensions,
        services_1.BackendService,
        router_1.Router, core_1.NgZone, services_1.HomePageService,
        transApp_service_1.TransAppService, chat_service_1.ChatService])
], PendingTransAppComponent);
exports.PendingTransAppComponent = PendingTransAppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVuZGluZ3RyYW5zQXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBlbmRpbmd0cmFuc0FwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMEQ7QUFHMUQsMENBQTJFO0FBQzNFLG1GQUFpRjtBQUVqRix3Q0FBOEQ7QUFDOUQsdURBQXFEO0FBQ3JELHlEQUF1RDtBQU92RCxJQUFhLHdCQUF3QjtJQUdqQyxrQ0FBb0IsZ0JBQWtDLEVBQzFDLGNBQThCLEVBQzlCLE1BQWMsRUFBVSxNQUFjLEVBQVUsZUFBZ0MsRUFDaEYsZUFBZ0MsRUFBVSxXQUF3QjtRQUgxRCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQzFDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoRixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUc5RSxDQUFDO0lBQ0QsMkNBQVEsR0FBUjtRQUFBLGlCQVVDO1FBVEcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxlQUFlLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDO1lBQzlDLEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO1lBRWhCLENBQUMsQ0FBQyxDQUFBO1FBQ04sQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsaUJBQWlCLEdBQVEsSUFBSSxDQUFDLGVBQWUsQ0FBQyw2Q0FBNkMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyx5QkFBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFFeEosQ0FBQztJQUNNLDZDQUFVLEdBQWpCLFVBQWtCLFlBQWlCO1FBQy9CLElBQUksZ0JBQWdCLEdBQXFCO1lBQ3JDLFdBQVcsRUFBRTtnQkFDVCxZQUFZLEVBQUUsWUFBWSxDQUFDLFVBQVU7Z0JBQ3JDLFVBQVUsRUFBRSxZQUFZLENBQUMsUUFBUTthQUNwQztTQUNKLENBQUM7UUFDRixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLDhCQUE4QixDQUFDLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBQ0wsK0JBQUM7QUFBRCxDQUFDLEFBOUJELElBOEJDO0FBOUJZLHdCQUF3QjtJQUxwQyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFdBQVcsRUFBRSxzQkFBc0I7S0FDdEMsQ0FBQztxQ0FJd0Msb0NBQWdCO1FBQzFCLHlCQUFjO1FBQ3RCLGVBQU0sRUFBa0IsYUFBTSxFQUEyQiwwQkFBZTtRQUMvRCxrQ0FBZSxFQUF1QiwwQkFBVztHQU5yRSx3QkFBd0IsQ0E4QnBDO0FBOUJZLDREQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgTmdab25lLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IEZpcmViYXNlU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlc1wiO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlLCBOYXZpZ2F0aW9uRXh0cmFzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlci9yb3V0ZXItZXh0ZW5zaW9ucyc7XHJcblxyXG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSwgSG9tZVBhZ2VTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzXCI7XHJcbmltcG9ydCB7IFRyYW5zQXBwU2VydmljZSB9IGZyb20gXCIuL3RyYW5zQXBwLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQ2hhdFNlcnZpY2UgfSBmcm9tIFwiLi4vY2hhdGxpc3QvY2hhdC5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogXCJjaGF0LWxpc3RcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcInBlbmRpbmd0cmFuc0FwcC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIFBlbmRpbmdUcmFuc0FwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwdWJsaWMgcGVuZGluZ3RyYW5zbGlzdCQ6IE9ic2VydmFibGU8YW55PjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICAgICAgcHJpdmF0ZSBiYWNrZW5kU2VydmljZTogQmFja2VuZFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSwgcHJpdmF0ZSBob21lUGFnZVNlcnZpY2U6IEhvbWVQYWdlU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHRyYW5zQXBwU2VydmljZTogVHJhbnNBcHBTZXJ2aWNlLCBwcml2YXRlIGNoYXRTZXJ2aWNlOiBDaGF0U2VydmljZVxyXG4gICAgKSB7XHJcblxyXG4gICAgfVxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5ob21lUGFnZVNlcnZpY2Uuc2V0U2hvd0dvQmFja0J1dHRvbihmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5ob21lUGFnZVNlcnZpY2Uuc2V0VGl0bGUoXCJQZW5kaW5nIEFwcHJvdmFsc1wiKTtcclxuICAgICAgICB0aGlzLmhvbWVQYWdlU2VydmljZS5vbkdvQmFja09ic2VydmFibGUuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMub3BlbmNoYXRsaXN0KCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5wZW5kaW5ndHJhbnNsaXN0JCA9IDxhbnk+dGhpcy50cmFuc0FwcFNlcnZpY2UuZ2V0UGVuZGluZ01vYmlsZVRyYW5zYWN0aW9uUmVxdWVzdFVzZXJMb2dMaXN0KHRoaXMuY2hhdFNlcnZpY2UuY2xlYW5lbWFpbChCYWNrZW5kU2VydmljZS5lbWFpbCkpO1xyXG5cclxuICAgIH1cclxuICAgIHB1YmxpYyB2aWV3RGV0YWlsKHNlbGVjdGVkaXRlbTogYW55KSB7XHJcbiAgICAgICAgbGV0IG5hdmlnYXRpb25FeHRyYXM6IE5hdmlnYXRpb25FeHRyYXMgPSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICBcInByaW1hcnlrZXlcIjogc2VsZWN0ZWRpdGVtLnByaW1hcnlrZXksXHJcbiAgICAgICAgICAgICAgICBcImdyb3Vwa2V5XCI6IHNlbGVjdGVkaXRlbS5ncm91cGtleVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJtb2JpbGUtdHJhbnMtYXBwcm92YWwtZGV0YWlsXCJdLCBuYXZpZ2F0aW9uRXh0cmFzKTtcclxuICAgIH1cclxufSJdfQ==