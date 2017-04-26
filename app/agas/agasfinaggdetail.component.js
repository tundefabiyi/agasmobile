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
var linqts_1 = require("linqts");
var AGASFinAggDetailComponent = (function () {
    function AGASFinAggDetailComponent(router, route, agasdataService) {
        this.router = router;
        this.route = route;
        this.agasdataService = agasdataService;
    }
    AGASFinAggDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.financialyeardesc = params["financialyeardescr"];
            _this.accounttypedesc = params["accounttypedesc"];
            _this.financialperiodId = params["financialperiodId"];
            _this.querydate = params["displaytime"];
            _this.agasrequestid = params["agasrequestid"];
            _this.agasdataService.getFinancialAggregationSearchResultList(_this.agasrequestid).subscribe(function (res) {
                _this.finaggList = [];
                _this.displayfinaggList = [];
                for (var id in res) {
                    var result = Object.assign({ id: id }, res[id]);
                    _this.finaggList.push(result);
                    _this.displayfinaggList.push(result);
                }
                _this.recordcount = _this.finaggList.length;
            });
        });
    };
    AGASFinAggDetailComponent.prototype.viewDetail = function (selecteditem) {
        var navigationExtras = {
            queryParams: {
                "financialyeardesc": this.financialyeardesc,
                "financialperiodId": this.financialperiodId,
                "agasrequestid": this.agasrequestid,
                "accounttypedesc": this.accounttypedesc,
                "displaytime": this.querydate,
                "code": selecteditem.Code,
                "Description": selecteditem.Description,
                "currentbalance": selecteditem.currentbalance,
                "finalbudget": selecteditem.finalbudget,
                "initialbudget": selecteditem.initialbudget,
                "supplementarybudget": selecteditem.supplementary,
                "totalcredit": selecteditem.totalcredit,
                "totaldebit": selecteditem.totaldebit,
                "virement": selecteditem.virement
            }
        };
        this.router.navigate(["agasfinagg-infodetail"], navigationExtras);
    };
    AGASFinAggDetailComponent.prototype.gotosearchlist = function () {
        this.router.navigate(["/finagg-search"]);
    };
    AGASFinAggDetailComponent.prototype.onSubmit = function (value) {
        this.displayfinaggList = [];
        if (value !== "") {
            this.displayfinaggList = new linqts_1.List(this.finaggList)
                .Where(function (a) { return a.Description.toLowerCase().indexOf(value.toLowerCase()) >= 0; })
                .Select(function (y) { return y; })
                .ToArray();
        }
        else {
            this.displayfinaggList = this.finaggList;
        }
    };
    AGASFinAggDetailComponent.prototype.onClear = function () {
        this.searchPhrase = "";
        this.displayfinaggList = this.finaggList;
    };
    return AGASFinAggDetailComponent;
}());
AGASFinAggDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "finaggdetaildisplay",
        templateUrl: "agasfinaggdetail.html"
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, agasdata_service_1.AGASDataService])
], AGASFinAggDetailComponent);
exports.AGASFinAggDetailComponent = AGASFinAggDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdhc2ZpbmFnZ2RldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhZ2FzZmluYWdnZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUFpRjtBQUVqRiwwQ0FBMkU7QUFFM0UsdURBQXFEO0FBRXJELGlDQUE4QjtBQU85QixJQUFhLHlCQUF5QjtJQWFsQyxtQ0FBb0IsTUFBYyxFQUFVLEtBQXFCLEVBQVUsZUFBZ0M7UUFBdkYsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQWlCO0lBRzNHLENBQUM7SUFDRCw0Q0FBUSxHQUFSO1FBQUEsaUJBb0JDO1FBbkJHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDbkMsS0FBSSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBQ3RELEtBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDakQsS0FBSSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ3JELEtBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3ZDLEtBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBRTdDLEtBQUksQ0FBQyxlQUFlLENBQUMsdUNBQXVDLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLEdBQUc7Z0JBQzFGLEtBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO2dCQUNyQixLQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO2dCQUM1QixHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxHQUFHLENBQUMs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LENBQUM7cUNBYzhCLGVBQU0sRUFBaUIsdUJBQWMsRUFBMkIsa0NBQWU7R0FibEcseUJBQXlCLENBaUZyQztBQWpGWSw4REFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgTmdab25lLCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUsIE5hdmlnYXRpb25FeHRyYXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlc1wiO1xyXG5pbXBvcnQgeyBBR0FTRGF0YVNlcnZpY2UgfSBmcm9tIFwiLi9hZ2FzZGF0YS5zZXJ2aWNlXCI7XHJcbi8vaW1wb3J0ICogYXMgRW51bWVyYWJsZSBmcm9tICdsaW5xJztcclxuaW1wb3J0IHsgTGlzdCB9IGZyb20gJ2xpbnF0cyc7XHJcbi8vdmFyIHN0ciA9IHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC11dGlscycpLnN0clxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogXCJmaW5hZ2dkZXRhaWxkaXNwbGF5XCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJhZ2FzZmluYWdnZGV0YWlsLmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgQUdBU0ZpbkFnZ0RldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICAvLyBwdWJsaWMgZmluYWdnTGlzdCQ6IE9ic2VydmFibGU8YW55PjtcclxuICAgIHB1YmxpYyBmaW5hbmNpYWx5ZWFyZGVzYzogc3RyaW5nO1xyXG4gICAgcHVibGljIGZpbmFuY2lhbHBlcmlvZElkOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgYWNjb3VudHR5cGVkZXNjOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgcXVlcnlkYXRlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgYWdhc3JlcXVlc3RpZDogc3RyaW5nO1xyXG4gICAgcHVibGljIHJlY29yZGNvdW50OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgZmluYWdnTGlzdDogYW55W107XHJcbiAgICBwdWJsaWMgZGlzcGxheWZpbmFnZ0xpc3Q6IGFueVtdO1xyXG4gICAgcHVibGljIHNlYXJjaFBocmFzZTogc3RyaW5nO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBhZ2FzZGF0YVNlcnZpY2U6IEFHQVNEYXRhU2VydmljZSkge1xyXG5cclxuXHJcbiAgICB9XHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmZpbmFuY2lhbHllYXJkZXNjID0gcGFyYW1zW1wiZmluYW5jaWFseWVhcmRlc2NyXCJdO1xyXG4gICAgICAgICAgICB0aGlzLmFjY291bnR0eXBlZGVzYyA9IHBhcmFtc1tcImFjY291bnR0eXBlZGVzY1wiXTtcclxuICAgICAgICAgICAgdGhpcy5maW5hbmNpYWxwZXJpb2RJZCA9IHBhcmFtc1tcImZpbmFuY2lhbHBlcmlvZElkXCJdO1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXJ5ZGF0ZSA9IHBhcmFtc1tcImRpc3BsYXl0aW1lXCJdO1xyXG4gICAgICAgICAgICB0aGlzLmFnYXNyZXF1ZXN0aWQgPSBwYXJhbXNbXCJhZ2FzcmVxdWVzdGlkXCJdO1xyXG4gICAgICAgICAgICAvLyB0aGlzLmZpbmFnZ0xpc3QkID0gdGhpcy5hZ2FzZGF0YVNlcnZpY2UuZ2V0RmluYW5jaWFsQWdncmVnYXRpb25TZWFyY2hSZXN1bHRMaXN0KHRoaXMuYWdhc3JlcXVlc3RpZCk7XHJcbiAgICAgICAgICAgIHRoaXMuYWdhc2RhdGFTZXJ2aWNlLmdldEZpbmFuY2lhbEFnZ3JlZ2F0aW9uU2VhcmNoUmVzdWx0TGlzdCh0aGlzLmFnYXNyZXF1ZXN0aWQpLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maW5hZ2dMaXN0ID0gW107XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlmaW5hZ2dMaXN0ID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpZCBpbiByZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gKDxhbnk+T2JqZWN0KS5hc3NpZ24oeyBpZDogaWQgfSwgcmVzW2lkXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maW5hZ2dMaXN0LnB1c2gocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlmaW5hZ2dMaXN0LnB1c2gocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMucmVjb3JkY291bnQgPSB0aGlzLmZpbmFnZ0xpc3QubGVuZ3RoO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdmlld0RldGFpbChzZWxlY3RlZGl0ZW06IGFueSkge1xyXG4gICAgICAgIGxldCBuYXZpZ2F0aW9uRXh0cmFzOiBOYXZpZ2F0aW9uRXh0cmFzID0ge1xyXG4gICAgICAgICAgICBxdWVyeVBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgXCJmaW5hbmNpYWx5ZWFyZGVzY1wiOiB0aGlzLmZpbmFuY2lhbHllYXJkZXNjLFxyXG4gICAgICAgICAgICAgICAgXCJmaW5hbmNpYWxwZXJpb2RJZFwiOiB0aGlzLmZpbmFuY2lhbHBlcmlvZElkLFxyXG4gICAgICAgICAgICAgICAgXCJhZ2FzcmVxdWVzdGlkXCI6IHRoaXMuYWdhc3JlcXVlc3RpZCxcclxuICAgICAgICAgICAgICAgIFwiYWNjb3VudHR5cGVkZXNjXCI6IHRoaXMuYWNjb3VudHR5cGVkZXNjLFxyXG4gICAgICAgICAgICAgICAgIFwiZGlzcGxheXRpbWVcIjogdGhpcy5xdWVyeWRhdGUsXHJcbiAgICAgICAgICAgICAgICBcImNvZGVcIjogc2VsZWN0ZWRpdGVtLkNvZGUsXHJcbiAgICAgICAgICAgICAgICBcIkRlc2NyaXB0aW9uXCI6IHNlbGVjdGVkaXRlbS5EZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgIFwiY3VycmVudGJhbGFuY2VcIjogc2VsZWN0ZWRpdGVtLmN1cnJlbnRiYWxhbmNlLFxyXG4gICAgICAgICAgICAgICAgXCJmaW5hbGJ1ZGdldFwiOiBzZWxlY3RlZGl0ZW0uZmluYWxidWRnZXQsXHJcbiAgICAgICAgICAgICAgICBcImluaXRpYWxidWRnZXRcIjogc2VsZWN0ZWRpdGVtLmluaXRpYWxidWRnZXQsXHJcbiAgICAgICAgICAgICAgICBcInN1cHBsZW1lbnRhcnlidWRnZXRcIjogc2VsZWN0ZWRpdGVtLnN1cHBsZW1lbnRhcnksXHJcbiAgICAgICAgICAgICAgICBcInRvdGFsY3JlZGl0XCI6IHNlbGVjdGVkaXRlbS50b3RhbGNyZWRpdCxcclxuICAgICAgICAgICAgICAgIFwidG90YWxkZWJpdFwiOiBzZWxlY3RlZGl0ZW0udG90YWxkZWJpdCxcclxuICAgICAgICAgICAgICAgIFwidmlyZW1lbnRcIjogc2VsZWN0ZWRpdGVtLnZpcmVtZW50XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImFnYXNmaW5hZ2ctaW5mb2RldGFpbFwiXSwgbmF2aWdhdGlvbkV4dHJhcyk7XHJcbiAgICB9XHJcbiAgICBnb3Rvc2VhcmNobGlzdCgpIHtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvZmluYWdnLXNlYXJjaFwiXSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25TdWJtaXQodmFsdWUpIHtcclxuICAgICAgICAvLyB0aGlzLm15SXRlbXMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PERhdGFJdGVtPigpO1xyXG4gICAgICAgIHRoaXMuZGlzcGxheWZpbmFnZ0xpc3QgPSBbXTtcclxuICAgICAgICAvLyBsZXQgc2VhcmNoVmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGlmICh2YWx1ZSAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlmaW5hZ2dMaXN0ID0gbmV3IExpc3Q8YW55Pih0aGlzLmZpbmFnZ0xpc3QpXHJcbiAgICAgICAgICAgICAgICAuV2hlcmUoYSA9PiBhLkRlc2NyaXB0aW9uLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih2YWx1ZS50b0xvd2VyQ2FzZSgpKSA+PSAwKVxyXG4gICAgICAgICAgICAgICAgLlNlbGVjdCh5ID0+IHkpXHJcbiAgICAgICAgICAgICAgICAuVG9BcnJheSgpOyAvLyA+IFs4LCAxMF0gXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlmaW5hZ2dMaXN0ID0gdGhpcy5maW5hZ2dMaXN0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25DbGVhcigpIHtcclxuICAgICAgICB0aGlzLnNlYXJjaFBocmFzZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5ZmluYWdnTGlzdCA9IHRoaXMuZmluYWdnTGlzdDtcclxuICAgIH1cclxufSJdfQ==