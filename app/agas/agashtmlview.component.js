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
var agasdata_service_1 = require("./agasdata.service");
var AGASHTMLViewComponent = (function () {
    function AGASHTMLViewComponent(router, route, agasdataService) {
        this.router = router;
        this.route = route;
        this.agasdataService = agasdataService;
        this.htmlview = "<Div>Loading..</Div>";
    }
    AGASHTMLViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.financialyeardesc = params["financialyeardescr"];
            _this.reportTitle = params["reportTitle"];
            _this.querydate = params["displaytime"];
            _this.agasrequestid = params["agasrequestid"];
            _this.agasdataService.getHTMLResult(_this.agasrequestid).subscribe(function (res) {
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
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, agasdata_service_1.AGASDataService])
], AGASHTMLViewComponent);
exports.AGASHTMLViewComponent = AGASHTMLViewComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdhc2h0bWx2aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFnYXNodG1sdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBaUY7QUFFakYsMENBQXlEO0FBRXpELHVEQUFxRDtBQU9yRCxJQUFhLHFCQUFxQjtJQU05QiwrQkFBb0IsTUFBYyxFQUFVLEtBQXFCLEVBQVUsZUFBZ0M7UUFBdkYsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBSnBHLGFBQVEsR0FBVSxzQkFBc0IsQ0FBQztJQU9oRCxDQUFDO0lBQ0Qsd0NBQVEsR0FBUjtRQUFBLGlCQWFDO1FBWkcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUNuQyxLQUFJLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUM7WUFDdEQsS0FBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDekMsS0FBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDdkMsS0FBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7WUFFN0MsS0FBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLEdBQUc7Z0JBRWhFLEtBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1lBQ3hCLENBQUMsQ0FBQyxDQUFDO1FBRVAsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0QsOENBQWMsR0FBZDtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDTCw0QkFBQztBQUFELENBQUMsQUEzQkQsSUEyQkM7QUEzQlkscUJBQXFCO0lBTGpDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLHlCQUF5QjtRQUNuQyxXQUFXLEVBQUUsbUJBQW1CO0tBQ25DLENBQUM7cUNBTzhCLGVBQU0sRUFBaUIsdUJBQWMsRUFBMkIsa0NBQWU7R0FObEcscUJBQXFCLENBMkJqQztBQTNCWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgTmdab25lLCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlc1wiO1xyXG5pbXBvcnQgeyBBR0FTRGF0YVNlcnZpY2UgfSBmcm9tIFwiLi9hZ2FzZGF0YS5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogXCJmaW5hZ2dkZXRhaWxodG1sZGlzcGxheVwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiYWdhc2h0bWx2aWV3Lmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgQUdBU0hUTUxWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHB1YmxpYyBmaW5hbmNpYWx5ZWFyZGVzYzogc3RyaW5nO1xyXG4gICAgcHVibGljIGh0bWx2aWV3OiBzdHJpbmc9IFwiPERpdj5Mb2FkaW5nLi48L0Rpdj5cIjtcclxuICAgIHB1YmxpYyBxdWVyeWRhdGU6IHN0cmluZztcclxuICAgIHB1YmxpYyBhZ2FzcmVxdWVzdGlkOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgcmVwb3J0VGl0bGU6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIGFnYXNkYXRhU2VydmljZTogQUdBU0RhdGFTZXJ2aWNlKSB7XHJcblxyXG5cclxuICAgIH1cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZmluYW5jaWFseWVhcmRlc2MgPSBwYXJhbXNbXCJmaW5hbmNpYWx5ZWFyZGVzY3JcIl07XHJcbiAgICAgICAgICAgIHRoaXMucmVwb3J0VGl0bGUgPSBwYXJhbXNbXCJyZXBvcnRUaXRsZVwiXTtcclxuICAgICAgICAgICAgdGhpcy5xdWVyeWRhdGUgPSBwYXJhbXNbXCJkaXNwbGF5dGltZVwiXTtcclxuICAgICAgICAgICAgdGhpcy5hZ2FzcmVxdWVzdGlkID0gcGFyYW1zW1wiYWdhc3JlcXVlc3RpZFwiXTtcclxuICAgICAgICAgICAgLy8gdGhpcy5maW5hZ2dMaXN0JCA9IHRoaXMuYWdhc2RhdGFTZXJ2aWNlLmdldEZpbmFuY2lhbEFnZ3JlZ2F0aW9uU2VhcmNoUmVzdWx0TGlzdCh0aGlzLmFnYXNyZXF1ZXN0aWQpO1xyXG4gICAgICAgICAgICB0aGlzLmFnYXNkYXRhU2VydmljZS5nZXRIVE1MUmVzdWx0KHRoaXMuYWdhc3JlcXVlc3RpZCkuc3Vic2NyaWJlKHJlcyA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5odG1sdmlldyA9IHJlcztcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZ290b3NlYXJjaGxpc3QoKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2ZpbmFnZy1zZWFyY2hcIl0pO1xyXG4gICAgfVxyXG59Il19