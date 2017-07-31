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
var services_1 = require("../services");
var transApp_service_1 = require("./transApp.service");
var ApprovalLogDetailComponent = (function () {
    function ApprovalLogDetailComponent(router, route, transAppService, homePageService, ngZone) {
        this.router = router;
        this.route = route;
        this.transAppService = transAppService;
        this.homePageService = homePageService;
        this.ngZone = ngZone;
        this.requestobj = {};
    }
    ApprovalLogDetailComponent.prototype.ngAfterViewInit = function () {
        console.log("Key Detected " + this.groupkey);
        this.apploglist$ = this.transAppService.getMobileTransactionRequestLogByGroup(this.groupkey);
    };
    ApprovalLogDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.homePageService.setTitle("Approval Log Details");
        this.homePageService.setShowGoBackButton(false);
        this.homePageService.onGoBackObservable.subscribe(function () {
            _this.ngZone.run(function () {
            });
        });
        this.route.queryParams.subscribe(function (params) {
            _this.primarykey = params["primarykey"];
            _this.groupkey = params["groupkey"];
            _this.transAppService.getMobileTransactionRequestLogItem(_this.primarykey, _this.groupkey).subscribe(function (detail) {
                _this.ngZone.run(function () {
                    console.log(JSON.stringify(detail));
                    _this.requestobj = detail;
                });
            });
        });
    };
    return ApprovalLogDetailComponent;
}());
ApprovalLogDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "approvalLogDetail",
        templateUrl: "approvalLogDetail.html"
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, transApp_service_1.TransAppService,
        services_1.HomePageService, core_1.NgZone])
], ApprovalLogDetailComponent);
exports.ApprovalLogDetailComponent = ApprovalLogDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwcm92YWxMb2dEZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwcm92YWxMb2dEZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQXlFO0FBR3pFLDBDQUEyRTtBQUczRSx3Q0FBOEQ7QUFDOUQsdURBQXFEO0FBU3JELElBQWEsMEJBQTBCO0lBTW5DLG9DQUFvQixNQUFjLEVBQVUsS0FBcUIsRUFBVSxlQUFnQyxFQUMvRixlQUFnQyxFQUFVLE1BQWM7UUFEaEQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQy9GLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFKN0QsZUFBVSxHQUFRLEVBQUUsQ0FBQztJQU81QixDQUFDO0lBQ0Qsb0RBQWUsR0FBZjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUM1QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMscUNBQXFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pHLENBQUM7SUFDRCw2Q0FBUSxHQUFSO1FBQUEsaUJBeUJDO1FBeEJHLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQztZQUM5QyxLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUVoQixDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUMsQ0FBQyxDQUFDO1FBR0gsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUNuQyxLQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUN2QyxLQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUduQyxLQUFJLENBQUMsZUFBZSxDQUFDLGtDQUFrQyxDQUFDLEtBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07Z0JBQ3BHLEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO29CQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUNwQyxLQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztnQkFFN0IsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUMsQ0FBQztRQUdQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUdMLGlDQUFDO0FBQUQsQ0FBQyxBQTNDRCxJQTJDQztBQTNDWSwwQkFBMEI7SUFMdEMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsbUJBQW1CO1FBQzdCLFdBQVcsRUFBRSx3QkFBd0I7S0FDeEMsQ0FBQztxQ0FPOEIsZUFBTSxFQUFpQix1QkFBYyxFQUEyQixrQ0FBZTtRQUM5RSwwQkFBZSxFQUFrQixhQUFNO0dBUDNELDBCQUEwQixDQTJDdEM7QUEzQ1ksZ0VBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBOZ1pvbmUsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgRmlyZWJhc2VTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUsIE5hdmlnYXRpb25FeHRyYXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyL3JvdXRlci1leHRlbnNpb25zJztcclxuXHJcbmltcG9ydCB7IEJhY2tlbmRTZXJ2aWNlLCBIb21lUGFnZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXNcIjtcclxuaW1wb3J0IHsgVHJhbnNBcHBTZXJ2aWNlIH0gZnJvbSBcIi4vdHJhbnNBcHAuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBDaGF0U2VydmljZSB9IGZyb20gXCIuLi9jaGF0bGlzdC9jaGF0LnNlcnZpY2VcIjtcclxuaW1wb3J0IGRpYWxvZ3MgPSByZXF1aXJlKFwidWkvZGlhbG9nc1wiKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiBcImFwcHJvdmFsTG9nRGV0YWlsXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJhcHByb3ZhbExvZ0RldGFpbC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcHJvdmFsTG9nRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcclxuICAgIHB1YmxpYyBwcmltYXJ5a2V5OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgZ3JvdXBrZXk6IHN0cmluZztcclxuICAgIHB1YmxpYyByZXF1ZXN0b2JqOiBhbnkgPSB7fTtcclxuICAgcHVibGljIGFwcGxvZ2xpc3QkOiBPYnNlcnZhYmxlPGFueT47XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgdHJhbnNBcHBTZXJ2aWNlOiBUcmFuc0FwcFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBob21lUGFnZVNlcnZpY2U6IEhvbWVQYWdlU2VydmljZSwgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSkge1xyXG5cclxuXHJcbiAgICB9XHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJLZXkgRGV0ZWN0ZWQgXCIgKyB0aGlzLmdyb3Vwa2V5KVxyXG4gICAgICAgIHRoaXMuYXBwbG9nbGlzdCQgPSB0aGlzLnRyYW5zQXBwU2VydmljZS5nZXRNb2JpbGVUcmFuc2FjdGlvblJlcXVlc3RMb2dCeUdyb3VwKHRoaXMuZ3JvdXBrZXkpO1xyXG4gICAgfVxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5ob21lUGFnZVNlcnZpY2Uuc2V0VGl0bGUoXCJBcHByb3ZhbCBMb2cgRGV0YWlsc1wiKTtcclxuICAgICAgICB0aGlzLmhvbWVQYWdlU2VydmljZS5zZXRTaG93R29CYWNrQnV0dG9uKGZhbHNlKTtcclxuICAgICAgICB0aGlzLmhvbWVQYWdlU2VydmljZS5vbkdvQmFja09ic2VydmFibGUuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnByaW1hcnlrZXkgPSBwYXJhbXNbXCJwcmltYXJ5a2V5XCJdO1xyXG4gICAgICAgICAgICB0aGlzLmdyb3Vwa2V5ID0gcGFyYW1zW1wiZ3JvdXBrZXlcIl07XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZ3JvdXBrZXkpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy50cmFuc0FwcFNlcnZpY2UuZ2V0TW9iaWxlVHJhbnNhY3Rpb25SZXF1ZXN0TG9nSXRlbSh0aGlzLnByaW1hcnlrZXksIHRoaXMuZ3JvdXBrZXkpLnN1YnNjcmliZShkZXRhaWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShkZXRhaWwpKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlcXVlc3RvYmogPSBkZXRhaWw7XHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxufSJdfQ==