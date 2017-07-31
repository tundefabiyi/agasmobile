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
var agasalert_service_1 = require("./agasalert.service");
var AGASAlertHTMLViewComponent = (function () {
    function AGASAlertHTMLViewComponent(router, route, agasalertService, homePageService, ngZone) {
        this.router = router;
        this.route = route;
        this.agasalertService = agasalertService;
        this.homePageService = homePageService;
        this.ngZone = ngZone;
        this.htmlview = "<Div>No Alerts..</Div>";
    }
    AGASAlertHTMLViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.homePageService.setTitle("GPFS Alert Detail");
        this.homePageService.setShowGoBackButton(false);
        this.homePageService.onGoBackObservable.subscribe(function () {
            _this.ngZone.run(function () {
            });
        });
        this.route.queryParams.subscribe(function (params) {
            _this.name = params["name"];
            _this.requiredparam = params["requiredparam"];
            _this.logtime = params["logtime"];
            _this.requestid = params["requestid"];
            _this.agasalertService.getHTMLResult(_this.requestid).subscribe(function (res) {
                if (res)
                    _this.htmlview = res;
            });
        });
    };
    AGASAlertHTMLViewComponent.prototype.openagasalert = function () {
        this.router.navigate(["/agasalert-view"]);
    };
    return AGASAlertHTMLViewComponent;
}());
AGASAlertHTMLViewComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "finaggdetailhtmldisplay",
        templateUrl: "agasalerthtmlview.html"
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute,
        agasalert_service_1.AGASAlertService, services_1.HomePageService, core_1.NgZone])
], AGASAlertHTMLViewComponent);
exports.AGASAlertHTMLViewComponent = AGASAlertHTMLViewComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdhc2FsZXJ0aHRtbHZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWdhc2FsZXJ0aHRtbHZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQWlGO0FBRWpGLDBDQUEyRTtBQUMzRSx3Q0FBNkQ7QUFDN0QseURBQXVEO0FBT3ZELElBQWEsMEJBQTBCO0lBTW5DLG9DQUFvQixNQUFjLEVBQVUsS0FBcUIsRUFDckQsZ0JBQWtDLEVBQVMsZUFBZ0MsRUFBVSxNQUFjO1FBRDNGLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyRCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUZ4RyxhQUFRLEdBQVcsd0JBQXdCLENBQUM7SUFLbkQsQ0FBQztJQUNELDZDQUFRLEdBQVI7UUFBQSxpQkFzQkM7UUFyQkcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsZUFBZSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxlQUFlLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDO1lBQzlDLEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO1lBRWhCLENBQUMsQ0FBQyxDQUFBO1FBQ04sQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBSW5DLEtBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzNCLEtBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQzdDLEtBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ2pDLEtBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3JDLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLEdBQUc7Z0JBQzdELEVBQUUsQ0FBQSxDQUFDLEdBQUcsQ0FBQztvQkFDUCxLQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztZQUN4QixDQUFDLENBQUMsQ0FBQztRQUVQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNELGtEQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBQ0wsaUNBQUM7QUFBRCxDQUFDLEFBckNELElBcUNDO0FBckNZLDBCQUEwQjtJQUx0QyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSx5QkFBeUI7UUFDbkMsV0FBVyxFQUFFLHdCQUF3QjtLQUN4QyxDQUFDO3FDQU84QixlQUFNLEVBQWlCLHVCQUFjO1FBQ25DLG9DQUFnQixFQUEwQiwwQkFBZSxFQUFrQixhQUFNO0dBUHRHLDBCQUEwQixDQXFDdEM7QUFyQ1ksZ0VBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE5nWm9uZSwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlLCBOYXZpZ2F0aW9uRXh0cmFzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UsSG9tZVBhZ2VTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzXCI7XHJcbmltcG9ydCB7IEFHQVNBbGVydFNlcnZpY2UgfSBmcm9tIFwiLi9hZ2FzYWxlcnQuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6IFwiZmluYWdnZGV0YWlsaHRtbGRpc3BsYXlcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcImFnYXNhbGVydGh0bWx2aWV3Lmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgQUdBU0FsZXJ0SFRNTFZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyByZXF1aXJlZHBhcmFtOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgbG9ndGltZTogc3RyaW5nO1xyXG4gICAgcHVibGljIHJlcXVlc3RpZDogc3RyaW5nO1xyXG4gICAgcHVibGljIGh0bWx2aWV3OiBzdHJpbmcgPSBcIjxEaXY+Tm8gQWxlcnRzLi48L0Rpdj5cIjtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgIHByaXZhdGUgYWdhc2FsZXJ0U2VydmljZTogQUdBU0FsZXJ0U2VydmljZSxwcml2YXRlIGhvbWVQYWdlU2VydmljZTogSG9tZVBhZ2VTZXJ2aWNlLCBwcml2YXRlIG5nWm9uZTogTmdab25lKSB7XHJcblxyXG5cclxuICAgIH1cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuaG9tZVBhZ2VTZXJ2aWNlLnNldFRpdGxlKFwiR1BGUyBBbGVydCBEZXRhaWxcIik7XHJcbiAgICAgICAgIHRoaXMuaG9tZVBhZ2VTZXJ2aWNlLnNldFNob3dHb0JhY2tCdXR0b24oZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuaG9tZVBhZ2VTZXJ2aWNlLm9uR29CYWNrT2JzZXJ2YWJsZS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAvLyB0aGlzLmdvYmFja3RvcmVzdWx0bGlzdCgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICAgICAgdGhpcy5uYW1lID0gcGFyYW1zW1wibmFtZVwiXTtcclxuICAgICAgICAgICAgdGhpcy5yZXF1aXJlZHBhcmFtID0gcGFyYW1zW1wicmVxdWlyZWRwYXJhbVwiXTtcclxuICAgICAgICAgICAgdGhpcy5sb2d0aW1lID0gcGFyYW1zW1wibG9ndGltZVwiXTtcclxuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0aWQgPSBwYXJhbXNbXCJyZXF1ZXN0aWRcIl07XHJcbiAgICAgICAgICAgIHRoaXMuYWdhc2FsZXJ0U2VydmljZS5nZXRIVE1MUmVzdWx0KHRoaXMucmVxdWVzdGlkKS5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHJlcylcclxuICAgICAgICAgICAgICAgIHRoaXMuaHRtbHZpZXcgPSByZXM7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIG9wZW5hZ2FzYWxlcnQoKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2FnYXNhbGVydC12aWV3XCJdKTtcclxuICAgIH1cclxufSJdfQ==