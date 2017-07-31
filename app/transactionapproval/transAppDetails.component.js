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
            if (result == undefined)
                return;
            if (result == true) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNBcHBEZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRyYW5zQXBwRGV0YWlscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMEQ7QUFHMUQsMENBQTJFO0FBRzNFLHdDQUE4RDtBQUM5RCx1REFBcUQ7QUFFckQsb0NBQXVDO0FBT3ZDLElBQWEsd0JBQXdCO0lBdUJqQyxrQ0FBb0IsTUFBYyxFQUFVLEtBQXFCLEVBQVUsZUFBZ0MsRUFDL0YsZUFBZ0MsRUFBVSxNQUFjO1FBRGhELFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUMvRixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBR3BFLENBQUM7SUFDRCwyQ0FBUSxHQUFSO1FBQUEsaUJBeUNDO1FBeENHLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQztZQUM5QyxLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUVoQixDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUNuQyxLQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUN2QyxLQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMzQixLQUFJLENBQUMsZUFBZSxDQUFDLGtDQUFrQyxDQUFDLEtBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07Z0JBQ3BHLEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO29CQUNaLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUM7d0JBQ3RCLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxjQUFjLENBQUM7NEJBQUMsS0FBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQzlELEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxPQUFPLENBQUM7NEJBQUMsS0FBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ2hELEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxRQUFRLENBQUM7NEJBQUMsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ2xELEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxhQUFhLENBQUM7NEJBQUMsS0FBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQzVELEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxVQUFVLENBQUM7NEJBQUMsS0FBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ3RELEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxZQUFZLENBQUM7NEJBQUMsS0FBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQzFELEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxNQUFNLENBQUM7NEJBQUMsS0FBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQzlDLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxLQUFLLENBQUM7NEJBQUMsS0FBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQzVDLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxXQUFXLENBQUM7NEJBQUMsS0FBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ3hELEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxTQUFTLENBQUM7NEJBQUMsS0FBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ3BELEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxTQUFTLENBQUM7NEJBQUMsS0FBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ3BELEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxpQkFBaUIsQ0FBQzs0QkFBQyxLQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDcEUsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLFVBQVUsQ0FBQzs0QkFBQyxLQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDdEQsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLHdCQUF3QixDQUFDOzRCQUFDLEtBQUksQ0FBQyxzQkFBc0IsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ2xGLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxjQUFjLENBQUM7NEJBQUMsS0FBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQzlELEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSywyQkFBMkIsQ0FBQzs0QkFBQyxLQUFJLENBQUMseUJBQXlCLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUN4RixFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssc0NBQXNDLENBQUM7NEJBQUMsS0FBSSxDQUFDLG9DQUFvQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDOUcsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLFlBQVksQ0FBQzs0QkFBQyxLQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDMUQsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLGNBQWMsQ0FBQzs0QkFBQyxLQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDOUQsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLGlCQUFpQixDQUFDOzRCQUFDLEtBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUV4RSxDQUFDO2dCQUNMLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7UUFFUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCwwQ0FBTyxHQUFQO1FBQUEsaUJBNkJDO1FBM0JHLE9BQU8sQ0FBQyxPQUFPLENBQUM7WUFDWixLQUFLLEVBQUUsdUJBQXVCO1lBQzlCLE9BQU8sRUFBRSxtREFBbUQ7WUFDNUQsWUFBWSxFQUFFLEtBQUs7WUFDbkIsZ0JBQWdCLEVBQUUsSUFBSTtZQUN0QixpQkFBaUIsRUFBRSxVQUFVO1NBQ2hDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNO1lBRVYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtZQUNuQixFQUFFLENBQUMsQ0FBQyxNQUFNLElBQUksU0FBUyxDQUFDO2dCQUFDLE1BQU0sQ0FBQztZQUNoQyxFQUFFLENBQUMsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDakIsSUFBSSxTQUFTLEdBQUc7b0JBQ1osWUFBWSxFQUFFLEtBQUksQ0FBQyxVQUFVO29CQUM3QixnQkFBZ0IsRUFBRSxLQUFLO29CQUN2QixTQUFTLEVBQUUsS0FBSSxDQUFDLGVBQWU7aUJBQ2xDLENBQUM7Z0JBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQTtnQkFDdEIsS0FBSSxDQUFDLGVBQWUsQ0FBQyx1QkFBdUIsQ0FBQyxLQUFJLENBQUMsZUFBZSxFQUFFLFNBQVMsQ0FBQztxQkFDeEUsSUFBSSxDQUFDLFVBQUEsR0FBRztvQkFDTCxLQUFLLENBQUMsaUZBQWlGLENBQUMsQ0FBQztnQkFDN0YsQ0FBQyxDQUFDO3FCQUNELEtBQUssQ0FBQyxVQUFBLEdBQUc7b0JBQ04sS0FBSyxDQUFDLGtEQUFrRCxDQUFDLENBQUM7Z0JBQzlELENBQUMsQ0FBQyxDQUFDO1lBQ1gsQ0FBQztRQUVMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNELDhDQUFXLEdBQVg7UUFBQSxpQkFrQ0M7UUFqQ0csT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUNaLEtBQUssRUFBRSxxQkFBcUI7WUFDNUIsT0FBTyxFQUFFLDZEQUE2RDtZQUN0RSxZQUFZLEVBQUUsS0FBSztZQUNuQixnQkFBZ0IsRUFBRSxJQUFJO1lBQ3RCLGlCQUFpQixFQUFFLFVBQVU7U0FDaEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLE1BQU07WUFFVixFQUFFLENBQUMsQ0FBQyxNQUFNLElBQUksU0FBUyxDQUFDO2dCQUFDLE1BQU0sQ0FBQztZQUNoQyxFQUFFLENBQUMsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDakIsSUFBSSxTQUFTLEdBQUc7b0JBQ1osWUFBWSxFQUFFLEtBQUksQ0FBQyxVQUFVO29CQUM3QixnQkFBZ0IsRUFBRSxJQUFJO29CQUN0QixTQUFTLEVBQUUsS0FBSSxDQUFDLGVBQWU7aUJBQ2xDLENBQUM7Z0JBRUYsS0FBSSxDQUFDLGVBQWUsQ0FBQyx1QkFBdUIsQ0FBQyxLQUFJLENBQUMsZUFBZSxFQUFFLFNBQVMsQ0FBQztxQkFDeEUsSUFBSSxDQUFDLFVBQUEsR0FBRztvQkFDTCxPQUFPLENBQUMsS0FBSyxDQUFDO3dCQUNWLEtBQUssRUFBRSw4QkFBOEI7d0JBQ3JDLE9BQU8sRUFBRSxpRkFBaUY7d0JBQzFGLFlBQVksRUFBRSxJQUFJO3FCQUNyQixDQUFDLENBQUMsSUFBSSxDQUFDO3dCQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztvQkFDbEMsQ0FBQyxDQUFDLENBQUM7Z0JBRVAsQ0FBQyxDQUFDO3FCQUNELEtBQUssQ0FBQyxVQUFBLEdBQUc7b0JBQ04sS0FBSyxDQUFDLGtEQUFrRCxDQUFDLENBQUM7Z0JBQzlELENBQUMsQ0FBQyxDQUFDO1lBQ1gsQ0FBQztRQUVMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLCtCQUFDO0FBQUQsQ0FBQyxBQXhJRCxJQXdJQztBQXhJWSx3QkFBd0I7SUFMcEMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsV0FBVztRQUNyQixXQUFXLEVBQUUsc0JBQXNCO0tBQ3RDLENBQUM7cUNBd0I4QixlQUFNLEVBQWlCLHVCQUFjLEVBQTJCLGtDQUFlO1FBQzlFLDBCQUFlLEVBQWtCLGFBQU07R0F4QjNELHdCQUF3QixDQXdJcEM7QUF4SVksNERBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBOZ1pvbmUsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgRmlyZWJhc2VTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUsIE5hdmlnYXRpb25FeHRyYXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyL3JvdXRlci1leHRlbnNpb25zJztcclxuXHJcbmltcG9ydCB7IEJhY2tlbmRTZXJ2aWNlLCBIb21lUGFnZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXNcIjtcclxuaW1wb3J0IHsgVHJhbnNBcHBTZXJ2aWNlIH0gZnJvbSBcIi4vdHJhbnNBcHAuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBDaGF0U2VydmljZSB9IGZyb20gXCIuLi9jaGF0bGlzdC9jaGF0LnNlcnZpY2VcIjtcclxuaW1wb3J0IGRpYWxvZ3MgPSByZXF1aXJlKFwidWkvZGlhbG9nc1wiKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiBcImNoYXQtbGlzdFwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwidHJhbnNBcHBEZXRhaWxzLmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgVHJhbnNBcHBEZXRhaWxzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHB1YmxpYyBwcmltYXJ5a2V5OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgZ3JvdXBrZXk6IHN0cmluZztcclxuICAgIGNhc2hib29rbmFtZTogc3RyaW5nO1xyXG4gICAgc3VwcGxpZXI6IHN0cmluZztcclxuICAgIGFkbWluOiBzdHJpbmc7XHJcbiAgICBlY29ub21pYzogc3RyaW5nO1xyXG4gICAgZnVuZDogc3RyaW5nO1xyXG4gICAgZnVuY3Rpb25hbDogc3RyaW5nO1xyXG4gICAgcHJvZ3JhbW1lOiBzdHJpbmc7XHJcbiAgICBnZW86IHN0cmluZztcclxuICAgIHJlbWFya3M6IHN0cmluZztcclxuICAgIHJlZmRhdGU6IHN0cmluZztcclxuICAgIGRvY3VtZW50bm9zOiBzdHJpbmc7XHJcbiAgICBhbW91bnQ6IG51bWJlcjtcclxuICAgIHRyYW5zc291cmNlZGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIG1vYmlsZVRyYW5zQXBwcm92YWxTdGF0dXNkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgc2VydmVyUmVzcG9uZGVyOiBzdHJpbmc7XHJcbiAgICBtb2JpbGVUcmFuc0FwcHJvdmFsU3RhdHVzOiBzdHJpbmc7XHJcbiAgICBzeXN0ZW1kYXRlOiBzdHJpbmc7XHJcbiAgICBhcHByb3ZhbHJlbWFya3M6IHN0cmluZztcclxuICAgIGFwcHJvdmFsZGF0ZTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHRyYW5zQXBwU2VydmljZTogVHJhbnNBcHBTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgaG9tZVBhZ2VTZXJ2aWNlOiBIb21lUGFnZVNlcnZpY2UsIHByaXZhdGUgbmdab25lOiBOZ1pvbmUpIHtcclxuXHJcblxyXG4gICAgfVxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5ob21lUGFnZVNlcnZpY2Uuc2V0VGl0bGUoXCJUcmFuc2FjdGlvbiBEZXRhaWxzXCIpO1xyXG4gICAgICAgIHRoaXMuaG9tZVBhZ2VTZXJ2aWNlLnNldFNob3dHb0JhY2tCdXR0b24oZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuaG9tZVBhZ2VTZXJ2aWNlLm9uR29CYWNrT2JzZXJ2YWJsZS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnByaW1hcnlrZXkgPSBwYXJhbXNbXCJwcmltYXJ5a2V5XCJdO1xyXG4gICAgICAgICAgICB0aGlzLmdyb3Vwa2V5ID0gcGFyYW1zW1wiZ3JvdXBrZXlcIl07XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZ3JvdXBrZXkpO1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zQXBwU2VydmljZS5nZXRNb2JpbGVUcmFuc2FjdGlvblJlcXVlc3RMb2dJdGVtKHRoaXMucHJpbWFyeWtleSwgdGhpcy5ncm91cGtleSkuc3Vic2NyaWJlKGRldGFpbCA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHByb3AgaW4gZGV0YWlsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wID09PSBcImNhc2hib29rbmFtZVwiKSB0aGlzLmNhc2hib29rbmFtZSA9IGRldGFpbFtwcm9wXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3AgPT09IFwiYWRtaW5cIikgdGhpcy5hZG1pbiA9IGRldGFpbFtwcm9wXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3AgPT09IFwiYW1vdW50XCIpIHRoaXMuYW1vdW50ID0gZGV0YWlsW3Byb3BdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcCA9PT0gXCJkb2N1bWVudG5vc1wiKSB0aGlzLmRvY3VtZW50bm9zID0gZGV0YWlsW3Byb3BdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcCA9PT0gXCJlY29ub21pY1wiKSB0aGlzLmVjb25vbWljID0gZGV0YWlsW3Byb3BdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcCA9PT0gXCJmdW5jdGlvbmFsXCIpIHRoaXMuZnVuY3Rpb25hbCA9IGRldGFpbFtwcm9wXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3AgPT09IFwiZnVuZFwiKSB0aGlzLmZ1bmQgPSBkZXRhaWxbcHJvcF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wID09PSBcImdlb1wiKSB0aGlzLmdlbyA9IGRldGFpbFtwcm9wXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3AgPT09IFwicHJvZ3JhbW1lXCIpIHRoaXMucHJvZ3JhbW1lID0gZGV0YWlsW3Byb3BdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcCA9PT0gXCJyZWZkYXRlXCIpIHRoaXMucmVmZGF0ZSA9IGRldGFpbFtwcm9wXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3AgPT09IFwicmVtYXJrc1wiKSB0aGlzLnJlbWFya3MgPSBkZXRhaWxbcHJvcF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wID09PSBcInNlcnZlclJlc3BvbmRlclwiKSB0aGlzLnNlcnZlclJlc3BvbmRlciA9IGRldGFpbFtwcm9wXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3AgPT09IFwic3VwcGxpZXJcIikgdGhpcy5zdXBwbGllciA9IGRldGFpbFtwcm9wXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3AgPT09IFwidHJhbnNzb3VyY2VkZXNjcmlwdGlvblwiKSB0aGlzLnRyYW5zc291cmNlZGVzY3JpcHRpb24gPSBkZXRhaWxbcHJvcF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wID09PSBcImNhc2hib29rbmFtZVwiKSB0aGlzLmNhc2hib29rbmFtZSA9IGRldGFpbFtwcm9wXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3AgPT09IFwibW9iaWxlVHJhbnNBcHByb3ZhbFN0YXR1c1wiKSB0aGlzLm1vYmlsZVRyYW5zQXBwcm92YWxTdGF0dXMgPSBkZXRhaWxbcHJvcF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wID09PSBcIm1vYmlsZVRyYW5zQXBwcm92YWxTdGF0dXNkZXNjcmlwdGlvblwiKSB0aGlzLm1vYmlsZVRyYW5zQXBwcm92YWxTdGF0dXNkZXNjcmlwdGlvbiA9IGRldGFpbFtwcm9wXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3AgPT09IFwic3lzdGVtZGF0ZVwiKSB0aGlzLnN5c3RlbWRhdGUgPSBkZXRhaWxbcHJvcF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wID09PSBcImFwcHJvdmFsZGF0ZVwiKSB0aGlzLmFwcHJvdmFsZGF0ZSA9IGRldGFpbFtwcm9wXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3AgPT09IFwiYXBwcm92YWxyZW1hcmtzXCIpIHRoaXMuYXBwcm92YWxyZW1hcmtzID0gZGV0YWlsW3Byb3BdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFwcHJvdmUoKSB7XHJcblxyXG4gICAgICAgIGRpYWxvZ3MuY29uZmlybSh7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkFwcHJvdmFsIENvbmZpcm1hdGlvblwiLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkFyZSBZb3UgU3VyZSBZb3UgV2FudCBUbyBBcHByb3ZlIFRoaXMgVHJhbnNhY3Rpb25cIixcclxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIlllc1wiLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIk5vXCIsXHJcbiAgICAgICAgICAgIG5ldXRyYWxCdXR0b25UZXh0OiBcIk5vdCBTdXJlXCJcclxuICAgICAgICB9KS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIC8vIHJlc3VsdCBhcmd1bWVudCBpcyBib29sZWFuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGFyYW1ldGVyID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIFwicHJpbWFyeWtleVwiOiB0aGlzLnByaW1hcnlrZXksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJhcHByb3ZhbHN0YXR1c1wiOiBcInllc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicmVtYXJrc1wiOiB0aGlzLmFwcHJvdmFscmVtYXJrc1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHBhcmFtZXRlcilcclxuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNBcHBTZXJ2aWNlLnByb2Nlc3NhcHByb3ZhbHJlc3BvbnNlKHRoaXMuc2VydmVyUmVzcG9uZGVyLCBwYXJhbWV0ZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJBcHByb3ZhbCBSZXF1ZXN0IFN1Y2Nlc3NmdWxsIC4gWW91IFdpbGwgcmVjaWV2ZSBhIG5vdGlmaWNhdGlvbiBmb3IgY29uZmlybWF0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgY3JlYXRpbmcgU2VhcmNoIFJlcXVlc3QuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgbm90YXBwcm92ZWQoKSB7XHJcbiAgICAgICAgZGlhbG9ncy5jb25maXJtKHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiRGVuaWFsIENvbmZpcm1hdGlvblwiLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkFyZSBZb3UgU3VyZSBZb3UgV2FudCBUbyBEZW55IEFwcHJvdmFsIGZvciBUaGlzIFRyYW5zYWN0aW9uXCIsXHJcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJZZXNcIixcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJOb1wiLFxyXG4gICAgICAgICAgICBuZXV0cmFsQnV0dG9uVGV4dDogXCJOb3QgU3VyZVwiXHJcbiAgICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAvLyByZXN1bHQgYXJndW1lbnQgaXMgYm9vbGVhblxyXG4gICAgICAgICAgICBpZiAocmVzdWx0ID09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0ID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBwYXJhbWV0ZXIgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJwcmltYXJ5a2V5XCI6IHRoaXMucHJpbWFyeWtleSxcclxuICAgICAgICAgICAgICAgICAgICBcImFwcHJvdmFsc3RhdHVzXCI6IFwibm9cIixcclxuICAgICAgICAgICAgICAgICAgICBcInJlbWFya3NcIjogdGhpcy5hcHByb3ZhbHJlbWFya3NcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc0FwcFNlcnZpY2UucHJvY2Vzc2FwcHJvdmFscmVzcG9uc2UodGhpcy5zZXJ2ZXJSZXNwb25kZXIsIHBhcmFtZXRlcilcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlRyYW5zYWN0aW9uIEFwcHJvdmFsIFJlcXVlc3RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQXBwcm92YWwgUmVxdWVzdCBTdWNjZXNzZnVsbCAuIFlvdSBXaWxsIHJlY2lldmUgYSBub3RpZmljYXRpb24gZm9yIGNvbmZpcm1hdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRpYWxvZyBjbG9zZWQhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBjcmVhdGluZyBTZWFyY2ggUmVxdWVzdC5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXX0=