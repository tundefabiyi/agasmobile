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
var agasdata_service_1 = require("./agasdata.service");
var AGASHTMLViewComponent = (function () {
    function AGASHTMLViewComponent(router, route, agasdataService, homePageService, ngZone) {
        this.router = router;
        this.route = route;
        this.agasdataService = agasdataService;
        this.homePageService = homePageService;
        this.ngZone = ngZone;
        this.htmlview = "<Div>Processing..</Div>";
    }
    AGASHTMLViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.homePageService.setTitle("GPFS");
        this.homePageService.setShowGoBackButton(true);
        this.homePageService.onGoBackObservable.subscribe(function () {
            _this.ngZone.run(function () {
                _this.gotosearchlist();
            });
        });
        this.route.queryParams.subscribe(function (params) {
            _this.financialyeardesc = params["financialyeardescr"];
            _this.reportTitle = params["reportTitle"];
            _this.querydate = params["displaytime"];
            _this.agasrequestid = params["agasrequestid"];
            _this.agasdataService.getHTMLResult(_this.agasrequestid).subscribe(function (res) {
                if (res)
                    _this.htmlview = res;
            });
        });
    };
    AGASHTMLViewComponent.prototype.gotosearchlist = function () {
        this.router.navigate(["/finagg-search"]);
    };
    return AGASHTMLViewComponent;
}());
AGASHTMLViewComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "finaggdetailhtmldisplay",
        templateUrl: "agashtmlview.html"
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, agasdata_service_1.AGASDataService,
        services_1.HomePageService, core_1.NgZone])
], AGASHTMLViewComponent);
exports.AGASHTMLViewComponent = AGASHTMLViewComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdhc2h0bWx2aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFnYXNodG1sdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBaUY7QUFFakYsMENBQXlEO0FBQ3pELHdDQUE2RDtBQUM3RCx1REFBcUQ7QUFPckQsSUFBYSxxQkFBcUI7SUFNOUIsK0JBQW9CLE1BQWMsRUFBVSxLQUFxQixFQUFVLGVBQWdDLEVBQ25HLGVBQWdDLEVBQVMsTUFBYztRQUQzQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDbkcsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUx4RCxhQUFRLEdBQVcseUJBQXlCLENBQUM7SUFRcEQsQ0FBQztJQUNELHdDQUFRLEdBQVI7UUFBQSxpQkFvQkM7UUFuQkksSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQztZQUM5QyxLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztnQkFDYixLQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDekIsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDbkMsS0FBSSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBQ3RELEtBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3pDLEtBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3ZDLEtBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBRTdDLEtBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxHQUFHO2dCQUNoRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUM7b0JBQ0osS0FBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7WUFDNUIsQ0FBQyxDQUFDLENBQUM7UUFFUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCw4Q0FBYyxHQUFkO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUNMLDRCQUFDO0FBQUQsQ0FBQyxBQW5DRCxJQW1DQztBQW5DWSxxQkFBcUI7SUFMakMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUseUJBQXlCO1FBQ25DLFdBQVcsRUFBRSxtQkFBbUI7S0FDbkMsQ0FBQztxQ0FPOEIsZUFBTSxFQUFpQix1QkFBYyxFQUEyQixrQ0FBZTtRQUNsRiwwQkFBZSxFQUFpQixhQUFNO0dBUHRELHFCQUFxQixDQW1DakM7QUFuQ1ksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE5nWm9uZSwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UsSG9tZVBhZ2VTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzXCI7XHJcbmltcG9ydCB7IEFHQVNEYXRhU2VydmljZSB9IGZyb20gXCIuL2FnYXNkYXRhLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiBcImZpbmFnZ2RldGFpbGh0bWxkaXNwbGF5XCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJhZ2FzaHRtbHZpZXcuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBR0FTSFRNTFZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHVibGljIGZpbmFuY2lhbHllYXJkZXNjOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgaHRtbHZpZXc6IHN0cmluZyA9IFwiPERpdj5Qcm9jZXNzaW5nLi48L0Rpdj5cIjtcclxuICAgIHB1YmxpYyBxdWVyeWRhdGU6IHN0cmluZztcclxuICAgIHB1YmxpYyBhZ2FzcmVxdWVzdGlkOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgcmVwb3J0VGl0bGU6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIGFnYXNkYXRhU2VydmljZTogQUdBU0RhdGFTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBob21lUGFnZVNlcnZpY2U6IEhvbWVQYWdlU2VydmljZSxwcml2YXRlIG5nWm9uZTogTmdab25lKSB7XHJcblxyXG5cclxuICAgIH1cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgICB0aGlzLmhvbWVQYWdlU2VydmljZS5zZXRUaXRsZShcIkdQRlNcIik7XHJcbiAgICAgICAgICB0aGlzLmhvbWVQYWdlU2VydmljZS5zZXRTaG93R29CYWNrQnV0dG9uKHRydWUpO1xyXG4gICAgICAgIHRoaXMuaG9tZVBhZ2VTZXJ2aWNlLm9uR29CYWNrT2JzZXJ2YWJsZS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICB0aGlzLmdvdG9zZWFyY2hsaXN0KCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgICAgICAgdGhpcy5maW5hbmNpYWx5ZWFyZGVzYyA9IHBhcmFtc1tcImZpbmFuY2lhbHllYXJkZXNjclwiXTtcclxuICAgICAgICAgICAgdGhpcy5yZXBvcnRUaXRsZSA9IHBhcmFtc1tcInJlcG9ydFRpdGxlXCJdO1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXJ5ZGF0ZSA9IHBhcmFtc1tcImRpc3BsYXl0aW1lXCJdO1xyXG4gICAgICAgICAgICB0aGlzLmFnYXNyZXF1ZXN0aWQgPSBwYXJhbXNbXCJhZ2FzcmVxdWVzdGlkXCJdO1xyXG4gICAgICAgICAgICAvLyB0aGlzLmZpbmFnZ0xpc3QkID0gdGhpcy5hZ2FzZGF0YVNlcnZpY2UuZ2V0RmluYW5jaWFsQWdncmVnYXRpb25TZWFyY2hSZXN1bHRMaXN0KHRoaXMuYWdhc3JlcXVlc3RpZCk7XHJcbiAgICAgICAgICAgIHRoaXMuYWdhc2RhdGFTZXJ2aWNlLmdldEhUTUxSZXN1bHQodGhpcy5hZ2FzcmVxdWVzdGlkKS5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5odG1sdmlldyA9IHJlcztcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZ290b3NlYXJjaGxpc3QoKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2ZpbmFnZy1zZWFyY2hcIl0pO1xyXG4gICAgfVxyXG59Il19