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
var dialogs = require("ui/dialogs");
var TransAppDetailsComponent = (function () {
    function TransAppDetailsComponent(router, route, transAppService, homePageService, ngZone) {
        this.router = router;
        this.route = route;
        this.transAppService = transAppService;
        this.homePageService = homePageService;
        this.ngZone = ngZone;
    }
    TransAppDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.homePageService.setTitle("Transaction Details");
        this.homePageService.setShowGoBackButton(false);
        this.homePageService.onGoBackObservable.subscribe(function () {
            _this.ngZone.run(function () {
            });
        });
        this.route.queryParams.subscribe(function (params) {
            _this.primarykey = params["primarykey"];
            _this.groupkey = params["groupkey"];
            console.log(_this.groupkey);
            _this.transAppService.getMobileTransactionRequestLogItem(_this.primarykey, _this.groupkey).subscribe(function (detail) {
                _this.ngZone.run(function () {
                    for (var prop in detail) {
                        if (prop === "cashbookname")
                            _this.cashbookname = detail[prop];
                        if (prop === "admin")
                            _this.admin = detail[prop];
                        if (prop === "amount")
                            _this.amount = detail[prop];
                        if (prop === "documentnos")
                            _this.documentnos = detail[prop];
                        if (prop === "economic")
                            _this.economic = detail[prop];
                        if (prop === "functional")
                            _this.functional = detail[prop];
                        if (prop === "fund")
                            _this.fund = detail[prop];
                        if (prop === "geo")
                            _this.geo = detail[prop];
                        if (prop === "programme")
                            _this.programme = detail[prop];
                        if (prop === "refdate")
                            _this.refdate = detail[prop];
                        if (prop === "remarks")
                            _this.remarks = detail[prop];
                        if (prop === "serverResponder")
                            _this.serverResponder = detail[prop];
                        if (prop === "supplier")
                            _this.supplier = detail[prop];
                        if (prop === "transsourcedescription")
                            _this.transsourcedescription = detail[prop];
                        if (prop === "cashbookname")
                            _this.cashbookname = detail[prop];
                        if (prop === "mobileTransApprovalStatus")
                            _this.mobileTransApprovalStatus = detail[prop];
                        if (prop === "mobileTransApprovalStatusdescription")
                            _this.mobileTransApprovalStatusdescription = detail[prop];
                        if (prop === "systemdate")
                            _this.systemdate = detail[prop];
                        if (prop === "approvaldate")
                            _this.approvaldate = detail[prop];
                        if (prop === "approvalremarks")
                            _this.approvalremarks = detail[prop];
                    }
                });
            });
        });
    };
    TransAppDetailsComponent.prototype.approve = function () {
        var _this = this;
        dialogs.confirm({
            title: "Approval Confirmation",
            message: "Are You Sure You Want To Approve This Transaction",
            okButtonText: "Yes",
            cancelButtonText: "No",
            neutralButtonText: "Not Sure"
        }).then(function (result) {
            console.log(result);
            if (result == undefined)
                return;
            if (result == true) {
                var parameter = {
                    "primarykey": _this.primarykey,
                    "approvalstatus": "yes",
                    "remarks": _this.approvalremarks
                };
                console.log(parameter);
                _this.transAppService.processapprovalresponse(_this.serverResponder, parameter)
                    .then(function (res) {
                    alert("Approval Request Successfull . You Will recieve a notification for confirmation");
                })
                    .catch(function (err) {
                    alert("An error occurred while creating Search Request.");
                });
            }
        });
    };
    TransAppDetailsComponent.prototype.notapproved = function () {
        var _this = this;
        dialogs.confirm({
            title: "Denial Confirmation",
            message: "Are You Sure You Want To Deny Approval for This Transaction",
            okButtonText: "Yes",
            cancelButtonText: "No",
            neutralButtonText: "Not Sure"
        }).then(function (result) {
            if (!result)
                return;
            if (result == "true") {
                var parameter = {
                    "primarykey": _this.primarykey,
                    "approvalstatus": "no",
                    "remarks": _this.approvalremarks
                };
                _this.transAppService.processapprovalresponse(_this.serverResponder, parameter)
                    .then(function (res) {
                    dialogs.alert({
                        title: "Transaction Approval Request",
                        message: "Approval Request Successfull . You Will recieve a notification for confirmation",
                        okButtonText: "OK"
                    }).then(function () {
                        console.log("Dialog closed!");
                    });
                })
                    .catch(function (err) {
                    alert("An error occurred while creating Search Request.");
                });
            }
        });
    };
    return TransAppDetailsComponent;
}());
TransAppDetailsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "chat-list",
        templateUrl: "transAppDetails.html"
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, transApp_service_1.TransAppService,
        services_1.HomePageService, core_1.NgZone])
], TransAppDetailsComponent);
exports.TransAppDetailsComponent = TransAppDetailsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNBcHBEZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRyYW5zQXBwRGV0YWlscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMEQ7QUFHMUQsMENBQTJFO0FBRzNFLHdDQUE4RDtBQUM5RCx1REFBcUQ7QUFFckQsb0NBQXVDO0FBT3ZDLElBQWEsd0JBQXdCO0lBdUJqQyxrQ0FBb0IsTUFBYyxFQUFVLEtBQXFCLEVBQVUsZUFBZ0MsRUFDL0YsZUFBZ0MsRUFBVSxNQUFjO1FBRGhELFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUMvRixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBR3BFLENBQUM7SUFDRCwyQ0FBUSxHQUFSO1FBQUEsaUJBeUNDO1FBeENHLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQztZQUM5QyxLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUVoQixDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUNuQyxLQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUN2QyxLQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMzQixLQUFJLENBQUMsZUFBZSxDQUFDLGtDQUFrQyxDQUFDLEtBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07Z0JBQ3BHLEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO29CQUNaLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUM7d0JBQ3RCLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxjQUFjLENBQUM7NEJBQUMsS0FBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQzlELEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxPQUFPLENBQUM7NEJBQUMsS0FBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ2hELEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxRQUFRLENBQUM7NEJBQUMsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ2xELEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxhQUFhLENBQUM7NEJBQUMsS0FBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQzVELEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxVQUFVLENBQUM7NEJBQUMsS0FBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ3RELEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxZQUFZLENBQUM7NEJBQUMsS0FBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQzFELEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxNQUFNLENBQUM7NEJBQUMsS0FBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQzlDLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxLQUFLLENBQUM7NEJBQUMsS0FBSSxD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LGdCQUFnQixDQUFDLENBQUM7b0JBQ2xDLENBQUMsQ0FBQyxDQUFDO2dCQUVQLENBQUMsQ0FBQztxQkFDRCxLQUFLLENBQUMsVUFBQSxHQUFHO29CQUNOLEtBQUssQ0FBQyxrREFBa0QsQ0FBQyxDQUFDO2dCQUM5RCxDQUFDLENBQUMsQ0FBQztZQUNYLENBQUM7UUFFTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTCwrQkFBQztBQUFELENBQUMsQUF4SUQsSUF3SUM7QUF4SVksd0JBQXdCO0lBTHBDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFdBQVc7UUFDckIsV0FBVyxFQUFFLHNCQUFzQjtLQUN0QyxDQUFDO3FDQXdCOEIsZUFBTSxFQUFpQix1QkFBYyxFQUEyQixrQ0FBZTtRQUM5RSwwQkFBZSxFQUFrQixhQUFNO0dBeEIzRCx3QkFBd0IsQ0F3SXBDO0FBeElZLDREQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgTmdab25lLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IEZpcmViYXNlU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlc1wiO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlLCBOYXZpZ2F0aW9uRXh0cmFzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlci9yb3V0ZXItZXh0ZW5zaW9ucyc7XHJcblxyXG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSwgSG9tZVBhZ2VTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzXCI7XHJcbmltcG9ydCB7IFRyYW5zQXBwU2VydmljZSB9IGZyb20gXCIuL3RyYW5zQXBwLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQ2hhdFNlcnZpY2UgfSBmcm9tIFwiLi4vY2hhdGxpc3QvY2hhdC5zZXJ2aWNlXCI7XHJcbmltcG9ydCBkaWFsb2dzID0gcmVxdWlyZShcInVpL2RpYWxvZ3NcIik7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogXCJjaGF0LWxpc3RcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcInRyYW5zQXBwRGV0YWlscy5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIFRyYW5zQXBwRGV0YWlsc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwdWJsaWMgcHJpbWFyeWtleTogc3RyaW5nO1xyXG4gICAgcHVibGljIGdyb3Vwa2V5OiBzdHJpbmc7XHJcbiAgICBjYXNoYm9va25hbWU6IHN0cmluZztcclxuICAgIHN1cHBsaWVyOiBzdHJpbmc7XHJcbiAgICBhZG1pbjogc3RyaW5nO1xyXG4gICAgZWNvbm9taWM6IHN0cmluZztcclxuICAgIGZ1bmQ6IHN0cmluZztcclxuICAgIGZ1bmN0aW9uYWw6IHN0cmluZztcclxuICAgIHByb2dyYW1tZTogc3RyaW5nO1xyXG4gICAgZ2VvOiBzdHJpbmc7XHJcbiAgICByZW1hcmtzOiBzdHJpbmc7XHJcbiAgICByZWZkYXRlOiBzdHJpbmc7XHJcbiAgICBkb2N1bWVudG5vczogc3RyaW5nO1xyXG4gICAgYW1vdW50OiBudW1iZXI7XHJcbiAgICB0cmFuc3NvdXJjZWRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBtb2JpbGVUcmFuc0FwcHJvdmFsU3RhdHVzZGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIHNlcnZlclJlc3BvbmRlcjogc3RyaW5nO1xyXG4gICAgbW9iaWxlVHJhbnNBcHByb3ZhbFN0YXR1czogc3RyaW5nO1xyXG4gICAgc3lzdGVtZGF0ZTogc3RyaW5nO1xyXG4gICAgYXBwcm92YWxyZW1hcmtzOiBzdHJpbmc7XHJcbiAgICBhcHByb3ZhbGRhdGU6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSB0cmFuc0FwcFNlcnZpY2U6IFRyYW5zQXBwU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGhvbWVQYWdlU2VydmljZTogSG9tZVBhZ2VTZXJ2aWNlLCBwcml2YXRlIG5nWm9uZTogTmdab25lKSB7XHJcblxyXG5cclxuICAgIH1cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuaG9tZVBhZ2VTZXJ2aWNlLnNldFRpdGxlKFwiVHJhbnNhY3Rpb24gRGV0YWlsc1wiKTtcclxuICAgICAgICB0aGlzLmhvbWVQYWdlU2VydmljZS5zZXRTaG93R29CYWNrQnV0dG9uKGZhbHNlKTtcclxuICAgICAgICB0aGlzLmhvbWVQYWdlU2VydmljZS5vbkdvQmFja09ic2VydmFibGUuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wcmltYXJ5a2V5ID0gcGFyYW1zW1wicHJpbWFyeWtleVwiXTtcclxuICAgICAgICAgICAgdGhpcy5ncm91cGtleSA9IHBhcmFtc1tcImdyb3Vwa2V5XCJdO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmdyb3Vwa2V5KTtcclxuICAgICAgICAgICAgdGhpcy50cmFuc0FwcFNlcnZpY2UuZ2V0TW9iaWxlVHJhbnNhY3Rpb25SZXF1ZXN0TG9nSXRlbSh0aGlzLnByaW1hcnlrZXksIHRoaXMuZ3JvdXBrZXkpLnN1YnNjcmliZShkZXRhaWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBwcm9wIGluIGRldGFpbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcCA9PT0gXCJjYXNoYm9va25hbWVcIikgdGhpcy5jYXNoYm9va25hbWUgPSBkZXRhaWxbcHJvcF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wID09PSBcImFkbWluXCIpIHRoaXMuYWRtaW4gPSBkZXRhaWxbcHJvcF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wID09PSBcImFtb3VudFwiKSB0aGlzLmFtb3VudCA9IGRldGFpbFtwcm9wXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3AgPT09IFwiZG9jdW1lbnRub3NcIikgdGhpcy5kb2N1bWVudG5vcyA9IGRldGFpbFtwcm9wXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3AgPT09IFwiZWNvbm9taWNcIikgdGhpcy5lY29ub21pYyA9IGRldGFpbFtwcm9wXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3AgPT09IFwiZnVuY3Rpb25hbFwiKSB0aGlzLmZ1bmN0aW9uYWwgPSBkZXRhaWxbcHJvcF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wID09PSBcImZ1bmRcIikgdGhpcy5mdW5kID0gZGV0YWlsW3Byb3BdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcCA9PT0gXCJnZW9cIikgdGhpcy5nZW8gPSBkZXRhaWxbcHJvcF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wID09PSBcInByb2dyYW1tZVwiKSB0aGlzLnByb2dyYW1tZSA9IGRldGFpbFtwcm9wXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3AgPT09IFwicmVmZGF0ZVwiKSB0aGlzLnJlZmRhdGUgPSBkZXRhaWxbcHJvcF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wID09PSBcInJlbWFya3NcIikgdGhpcy5yZW1hcmtzID0gZGV0YWlsW3Byb3BdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcCA9PT0gXCJzZXJ2ZXJSZXNwb25kZXJcIikgdGhpcy5zZXJ2ZXJSZXNwb25kZXIgPSBkZXRhaWxbcHJvcF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wID09PSBcInN1cHBsaWVyXCIpIHRoaXMuc3VwcGxpZXIgPSBkZXRhaWxbcHJvcF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wID09PSBcInRyYW5zc291cmNlZGVzY3JpcHRpb25cIikgdGhpcy50cmFuc3NvdXJjZWRlc2NyaXB0aW9uID0gZGV0YWlsW3Byb3BdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcCA9PT0gXCJjYXNoYm9va25hbWVcIikgdGhpcy5jYXNoYm9va25hbWUgPSBkZXRhaWxbcHJvcF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wID09PSBcIm1vYmlsZVRyYW5zQXBwcm92YWxTdGF0dXNcIikgdGhpcy5tb2JpbGVUcmFuc0FwcHJvdmFsU3RhdHVzID0gZGV0YWlsW3Byb3BdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcCA9PT0gXCJtb2JpbGVUcmFuc0FwcHJvdmFsU3RhdHVzZGVzY3JpcHRpb25cIikgdGhpcy5tb2JpbGVUcmFuc0FwcHJvdmFsU3RhdHVzZGVzY3JpcHRpb24gPSBkZXRhaWxbcHJvcF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wID09PSBcInN5c3RlbWRhdGVcIikgdGhpcy5zeXN0ZW1kYXRlID0gZGV0YWlsW3Byb3BdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcCA9PT0gXCJhcHByb3ZhbGRhdGVcIikgdGhpcy5hcHByb3ZhbGRhdGUgPSBkZXRhaWxbcHJvcF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wID09PSBcImFwcHJvdmFscmVtYXJrc1wiKSB0aGlzLmFwcHJvdmFscmVtYXJrcyA9IGRldGFpbFtwcm9wXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhcHByb3ZlKCkge1xyXG5cclxuICAgICAgICBkaWFsb2dzLmNvbmZpcm0oe1xyXG4gICAgICAgICAgICB0aXRsZTogXCJBcHByb3ZhbCBDb25maXJtYXRpb25cIixcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJBcmUgWW91IFN1cmUgWW91IFdhbnQgVG8gQXBwcm92ZSBUaGlzIFRyYW5zYWN0aW9uXCIsXHJcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJZZXNcIixcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJOb1wiLFxyXG4gICAgICAgICAgICBuZXV0cmFsQnV0dG9uVGV4dDogXCJOb3QgU3VyZVwiXHJcbiAgICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAvLyByZXN1bHQgYXJndW1lbnQgaXMgYm9vbGVhblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHBhcmFtZXRlciA9IHtcclxuICAgICAgICAgICAgICAgICAgICBcInByaW1hcnlrZXlcIjogdGhpcy5wcmltYXJ5a2V5LFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYXBwcm92YWxzdGF0dXNcIjogXCJ5ZXNcIixcclxuICAgICAgICAgICAgICAgICAgICBcInJlbWFya3NcIjogdGhpcy5hcHByb3ZhbHJlbWFya3NcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwYXJhbWV0ZXIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zQXBwU2VydmljZS5wcm9jZXNzYXBwcm92YWxyZXNwb25zZSh0aGlzLnNlcnZlclJlc3BvbmRlciwgcGFyYW1ldGVyKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiQXBwcm92YWwgUmVxdWVzdCBTdWNjZXNzZnVsbCAuIFlvdSBXaWxsIHJlY2lldmUgYSBub3RpZmljYXRpb24gZm9yIGNvbmZpcm1hdGlvblwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIGNyZWF0aW5nIFNlYXJjaCBSZXF1ZXN0LlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIG5vdGFwcHJvdmVkKCkge1xyXG4gICAgICAgIGRpYWxvZ3MuY29uZmlybSh7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkRlbmlhbCBDb25maXJtYXRpb25cIixcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJBcmUgWW91IFN1cmUgWW91IFdhbnQgVG8gRGVueSBBcHByb3ZhbCBmb3IgVGhpcyBUcmFuc2FjdGlvblwiLFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiWWVzXCIsXHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiTm9cIixcclxuICAgICAgICAgICAgbmV1dHJhbEJ1dHRvblRleHQ6IFwiTm90IFN1cmVcIlxyXG4gICAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgLy8gcmVzdWx0IGFyZ3VtZW50IGlzIGJvb2xlYW5cclxuICAgICAgICAgICAgaWYgKCFyZXN1bHQpIHJldHVybjtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PSBcInRydWVcIikge1xyXG4gICAgICAgICAgICAgICAgdmFyIHBhcmFtZXRlciA9IHtcclxuICAgICAgICAgICAgICAgICAgICBcInByaW1hcnlrZXlcIjogdGhpcy5wcmltYXJ5a2V5LFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYXBwcm92YWxzdGF0dXNcIjogXCJub1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicmVtYXJrc1wiOiB0aGlzLmFwcHJvdmFscmVtYXJrc1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zQXBwU2VydmljZS5wcm9jZXNzYXBwcm92YWxyZXNwb25zZSh0aGlzLnNlcnZlclJlc3BvbmRlciwgcGFyYW1ldGVyKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiVHJhbnNhY3Rpb24gQXBwcm92YWwgUmVxdWVzdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJBcHByb3ZhbCBSZXF1ZXN0IFN1Y2Nlc3NmdWxsIC4gWW91IFdpbGwgcmVjaWV2ZSBhIG5vdGlmaWNhdGlvbiBmb3IgY29uZmlybWF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGlhbG9nIGNsb3NlZCFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIGNyZWF0aW5nIFNlYXJjaCBSZXF1ZXN0LlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSJdfQ==