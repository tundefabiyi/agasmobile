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
var agasalert_service_1 = require("./agasalert.service");
var AGASAlertHTMLViewComponent = (function () {
    function AGASAlertHTMLViewComponent(router, route, agasalertService, ngZone) {
        this.router = router;
        this.route = route;
        this.agasalertService = agasalertService;
        this.ngZone = ngZone;
        this.htmlview = "<Div>Loading..</Div>";
    }
    AGASAlertHTMLViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.name = params["name"];
            _this.requiredparam = params["requiredparam"];
            _this.logtime = params["logtime"];
            _this.requestid = params["requestid"];
            _this.agasalertService.getHTMLResult(_this.requestid).subscribe(function (res) {
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
        agasalert_service_1.AGASAlertService, core_1.NgZone])
], AGASAlertHTMLViewComponent);
exports.AGASAlertHTMLViewComponent = AGASAlertHTMLViewComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdhc2FsZXJ0aHRtbHZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWdhc2FsZXJ0aHRtbHZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQWlGO0FBRWpGLDBDQUEyRTtBQUUzRSx5REFBdUQ7QUFPdkQsSUFBYSwwQkFBMEI7SUFNbkMsb0NBQW9CLE1BQWMsRUFBVSxLQUFxQixFQUNyRCxnQkFBa0MsRUFBVSxNQUFjO1FBRGxELFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyRCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUYvRCxhQUFRLEdBQVcsc0JBQXNCLENBQUM7SUFLakQsQ0FBQztJQUNELDZDQUFRLEdBQVI7UUFBQSxpQkFjQztRQWJHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFJbkMsS0FBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDM0IsS0FBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDN0MsS0FBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDakMsS0FBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDckMsS0FBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsR0FBRztnQkFDN0QsS0FBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7WUFDeEIsQ0FBQyxDQUFDLENBQUM7UUFFUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCxrREFBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUNMLGlDQUFDO0FBQUQsQ0FBQyxBQTdCRCxJQTZCQztBQTdCWSwwQkFBMEI7SUFMdEMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUseUJBQXlCO1FBQ25DLFdBQVcsRUFBRSx3QkFBd0I7S0FDeEMsQ0FBQztxQ0FPOEIsZUFBTSxFQUFpQix1QkFBYztRQUNuQyxvQ0FBZ0IsRUFBa0IsYUFBTTtHQVA3RCwwQkFBMEIsQ0E2QnRDO0FBN0JZLGdFQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBOZ1pvbmUsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSwgTmF2aWdhdGlvbkV4dHJhcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzXCI7XHJcbmltcG9ydCB7IEFHQVNBbGVydFNlcnZpY2UgfSBmcm9tIFwiLi9hZ2FzYWxlcnQuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6IFwiZmluYWdnZGV0YWlsaHRtbGRpc3BsYXlcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcImFnYXNhbGVydGh0bWx2aWV3Lmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgQUdBU0FsZXJ0SFRNTFZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyByZXF1aXJlZHBhcmFtOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgbG9ndGltZTogc3RyaW5nO1xyXG4gICAgcHVibGljIHJlcXVlc3RpZDogc3RyaW5nO1xyXG4gICAgcHVibGljIGh0bWx2aWV3OiBzdHJpbmcgPSBcIjxEaXY+TG9hZGluZy4uPC9EaXY+XCI7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICBwcml2YXRlIGFnYXNhbGVydFNlcnZpY2U6IEFHQVNBbGVydFNlcnZpY2UsIHByaXZhdGUgbmdab25lOiBOZ1pvbmUpIHtcclxuXHJcblxyXG4gICAgfVxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgICAgICAgLy8gdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBwYXJhbXNbXCJuYW1lXCJdO1xyXG4gICAgICAgICAgICB0aGlzLnJlcXVpcmVkcGFyYW0gPSBwYXJhbXNbXCJyZXF1aXJlZHBhcmFtXCJdO1xyXG4gICAgICAgICAgICB0aGlzLmxvZ3RpbWUgPSBwYXJhbXNbXCJsb2d0aW1lXCJdO1xyXG4gICAgICAgICAgICB0aGlzLnJlcXVlc3RpZCA9IHBhcmFtc1tcInJlcXVlc3RpZFwiXTtcclxuICAgICAgICAgICAgdGhpcy5hZ2FzYWxlcnRTZXJ2aWNlLmdldEhUTUxSZXN1bHQodGhpcy5yZXF1ZXN0aWQpLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5odG1sdmlldyA9IHJlcztcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgb3BlbmFnYXNhbGVydCgpIHtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvYWdhc2FsZXJ0LXZpZXdcIl0pO1xyXG4gICAgfVxyXG59Il19