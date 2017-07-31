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
var linqts_1 = require("linqts");
var AGASFinAggDetailComponent = (function () {
    function AGASFinAggDetailComponent(router, ngZone, route, agasdataService, homePageService) {
        this.router = router;
        this.ngZone = ngZone;
        this.route = route;
        this.agasdataService = agasdataService;
        this.homePageService = homePageService;
    }
    AGASFinAggDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.homePageService.setTitle("GPFS Items List");
        this.homePageService.setShowGoBackButton(true);
        this.homePageService.onGoBackObservable.subscribe(function () {
            _this.ngZone.run(function () {
                _this.gotosearchlist();
            });
        });
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
    __metadata("design:paramtypes", [router_1.Router, core_1.NgZone, router_1.ActivatedRoute,
        agasdata_service_1.AGASDataService, services_1.HomePageService])
], AGASFinAggDetailComponent);
exports.AGASFinAggDetailComponent = AGASFinAggDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdhc2ZpbmFnZ2RldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhZ2FzZmluYWdnZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUFpRjtBQUVqRiwwQ0FBMkU7QUFDM0Usd0NBQThEO0FBQzlELHVEQUFxRDtBQUdyRCxpQ0FBOEI7QUFPOUIsSUFBYSx5QkFBeUI7SUFhbEMsbUNBQW9CLE1BQWMsRUFBVSxNQUFjLEVBQVUsS0FBcUIsRUFDN0UsZUFBZ0MsRUFBVSxlQUFnQztRQURsRSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQzdFLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUd0RixDQUFDO0lBQ0QsNENBQVEsR0FBUjtRQUFBLGlCQTJCQztRQTFCRyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxlQUFlLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUM7WUFDOUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7Z0JBQ1osS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQzFCLENBQUMsQ0FBQyxDQUFBO1FBQ04sQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ25DLEtBQUksQ0FBQyxpQkFBaUIsR0FBRyxNQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQztZQUN0RCxLQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQ2pELEtBQUksQ0FB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QixDQUFDO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDRixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUM3QyxDQUFDO0lBQ0wsQ0FBQztJQUVNLDJDQUFPLEdBQWQ7UUFDSSxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUM3QyxDQUFDO0lBQ0wsZ0NBQUM7QUFBRCxDQUFDLEFBekZELElBeUZDO0FBekZZLHlCQUF5QjtJQUxyQyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxxQkFBcUI7UUFDL0IsV0FBVyxFQUFFLHVCQUF1QjtLQUN2QyxDQUFDO3FDQWM4QixlQUFNLEVBQWtCLGFBQU0sRUFBaUIsdUJBQWM7UUFDNUQsa0NBQWUsRUFBMkIsMEJBQWU7R0FkN0UseUJBQXlCLENBeUZyQztBQXpGWSw4REFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgTmdab25lLCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUsIE5hdmlnYXRpb25FeHRyYXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSwgSG9tZVBhZ2VTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzXCI7XHJcbmltcG9ydCB7IEFHQVNEYXRhU2VydmljZSB9IGZyb20gXCIuL2FnYXNkYXRhLnNlcnZpY2VcIjtcclxuXHJcbi8vaW1wb3J0ICogYXMgRW51bWVyYWJsZSBmcm9tICdsaW5xJztcclxuaW1wb3J0IHsgTGlzdCB9IGZyb20gJ2xpbnF0cyc7XHJcbi8vdmFyIHN0ciA9IHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC11dGlscycpLnN0clxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogXCJmaW5hZ2dkZXRhaWxkaXNwbGF5XCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJhZ2FzZmluYWdnZGV0YWlsLmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgQUdBU0ZpbkFnZ0RldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICAvLyBwdWJsaWMgZmluYWdnTGlzdCQ6IE9ic2VydmFibGU8YW55PjtcclxuICAgIHB1YmxpYyBmaW5hbmNpYWx5ZWFyZGVzYzogc3RyaW5nO1xyXG4gICAgcHVibGljIGZpbmFuY2lhbHBlcmlvZElkOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgYWNjb3VudHR5cGVkZXNjOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgcXVlcnlkYXRlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgYWdhc3JlcXVlc3RpZDogc3RyaW5nO1xyXG4gICAgcHVibGljIHJlY29yZGNvdW50OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgZmluYWdnTGlzdDogYW55W107XHJcbiAgICBwdWJsaWMgZGlzcGxheWZpbmFnZ0xpc3Q6IGFueVtdO1xyXG4gICAgcHVibGljIHNlYXJjaFBocmFzZTogc3RyaW5nO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIG5nWm9uZTogTmdab25lLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICBwcml2YXRlIGFnYXNkYXRhU2VydmljZTogQUdBU0RhdGFTZXJ2aWNlLCBwcml2YXRlIGhvbWVQYWdlU2VydmljZTogSG9tZVBhZ2VTZXJ2aWNlKSB7XHJcblxyXG5cclxuICAgIH1cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuaG9tZVBhZ2VTZXJ2aWNlLnNldFRpdGxlKFwiR1BGUyBJdGVtcyBMaXN0XCIpO1xyXG4gICAgICAgIHRoaXMuaG9tZVBhZ2VTZXJ2aWNlLnNldFNob3dHb0JhY2tCdXR0b24odHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5ob21lUGFnZVNlcnZpY2Uub25Hb0JhY2tPYnNlcnZhYmxlLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdvdG9zZWFyY2hsaXN0KCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgICAgICAgdGhpcy5maW5hbmNpYWx5ZWFyZGVzYyA9IHBhcmFtc1tcImZpbmFuY2lhbHllYXJkZXNjclwiXTtcclxuICAgICAgICAgICAgdGhpcy5hY2NvdW50dHlwZWRlc2MgPSBwYXJhbXNbXCJhY2NvdW50dHlwZWRlc2NcIl07XHJcbiAgICAgICAgICAgIHRoaXMuZmluYW5jaWFscGVyaW9kSWQgPSBwYXJhbXNbXCJmaW5hbmNpYWxwZXJpb2RJZFwiXTtcclxuICAgICAgICAgICAgdGhpcy5xdWVyeWRhdGUgPSBwYXJhbXNbXCJkaXNwbGF5dGltZVwiXTtcclxuICAgICAgICAgICAgdGhpcy5hZ2FzcmVxdWVzdGlkID0gcGFyYW1zW1wiYWdhc3JlcXVlc3RpZFwiXTtcclxuICAgICAgICAgICAgLy8gdGhpcy5maW5hZ2dMaXN0JCA9IHRoaXMuYWdhc2RhdGFTZXJ2aWNlLmdldEZpbmFuY2lhbEFnZ3JlZ2F0aW9uU2VhcmNoUmVzdWx0TGlzdCh0aGlzLmFnYXNyZXF1ZXN0aWQpO1xyXG4gICAgICAgICAgICB0aGlzLmFnYXNkYXRhU2VydmljZS5nZXRGaW5hbmNpYWxBZ2dyZWdhdGlvblNlYXJjaFJlc3VsdExpc3QodGhpcy5hZ2FzcmVxdWVzdGlkKS5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmluYWdnTGlzdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5ZmluYWdnTGlzdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaWQgaW4gcmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9ICg8YW55Pk9iamVjdCkuYXNzaWduKHsgaWQ6IGlkIH0sIHJlc1tpZF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmluYWdnTGlzdC5wdXNoKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5ZmluYWdnTGlzdC5wdXNoKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlY29yZGNvdW50ID0gdGhpcy5maW5hZ2dMaXN0Lmxlbmd0aDtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHZpZXdEZXRhaWwoc2VsZWN0ZWRpdGVtOiBhbnkpIHtcclxuICAgICAgICBsZXQgbmF2aWdhdGlvbkV4dHJhczogTmF2aWdhdGlvbkV4dHJhcyA9IHtcclxuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgIFwiZmluYW5jaWFseWVhcmRlc2NcIjogdGhpcy5maW5hbmNpYWx5ZWFyZGVzYyxcclxuICAgICAgICAgICAgICAgIFwiZmluYW5jaWFscGVyaW9kSWRcIjogdGhpcy5maW5hbmNpYWxwZXJpb2RJZCxcclxuICAgICAgICAgICAgICAgIFwiYWdhc3JlcXVlc3RpZFwiOiB0aGlzLmFnYXNyZXF1ZXN0aWQsXHJcbiAgICAgICAgICAgICAgICBcImFjY291bnR0eXBlZGVzY1wiOiB0aGlzLmFjY291bnR0eXBlZGVzYyxcclxuICAgICAgICAgICAgICAgIFwiZGlzcGxheXRpbWVcIjogdGhpcy5xdWVyeWRhdGUsXHJcbiAgICAgICAgICAgICAgICBcImNvZGVcIjogc2VsZWN0ZWRpdGVtLkNvZGUsXHJcbiAgICAgICAgICAgICAgICBcIkRlc2NyaXB0aW9uXCI6IHNlbGVjdGVkaXRlbS5EZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgIFwiY3VycmVudGJhbGFuY2VcIjogc2VsZWN0ZWRpdGVtLmN1cnJlbnRiYWxhbmNlLFxyXG4gICAgICAgICAgICAgICAgXCJmaW5hbGJ1ZGdldFwiOiBzZWxlY3RlZGl0ZW0uZmluYWxidWRnZXQsXHJcbiAgICAgICAgICAgICAgICBcImluaXRpYWxidWRnZXRcIjogc2VsZWN0ZWRpdGVtLmluaXRpYWxidWRnZXQsXHJcbiAgICAgICAgICAgICAgICBcInN1cHBsZW1lbnRhcnlidWRnZXRcIjogc2VsZWN0ZWRpdGVtLnN1cHBsZW1lbnRhcnksXHJcbiAgICAgICAgICAgICAgICBcInRvdGFsY3JlZGl0XCI6IHNlbGVjdGVkaXRlbS50b3RhbGNyZWRpdCxcclxuICAgICAgICAgICAgICAgIFwidG90YWxkZWJpdFwiOiBzZWxlY3RlZGl0ZW0udG90YWxkZWJpdCxcclxuICAgICAgICAgICAgICAgIFwidmlyZW1lbnRcIjogc2VsZWN0ZWRpdGVtLnZpcmVtZW50XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImFnYXNmaW5hZ2ctaW5mb2RldGFpbFwiXSwgbmF2aWdhdGlvbkV4dHJhcyk7XHJcbiAgICB9XHJcbiAgICBnb3Rvc2VhcmNobGlzdCgpIHtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvZmluYWdnLXNlYXJjaFwiXSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25TdWJtaXQodmFsdWUpIHtcclxuICAgICAgICAvLyB0aGlzLm15SXRlbXMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PERhdGFJdGVtPigpO1xyXG4gICAgICAgIHRoaXMuZGlzcGxheWZpbmFnZ0xpc3QgPSBbXTtcclxuICAgICAgICAvLyBsZXQgc2VhcmNoVmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGlmICh2YWx1ZSAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlmaW5hZ2dMaXN0ID0gbmV3IExpc3Q8YW55Pih0aGlzLmZpbmFnZ0xpc3QpXHJcbiAgICAgICAgICAgICAgICAuV2hlcmUoYSA9PiBhLkRlc2NyaXB0aW9uLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih2YWx1ZS50b0xvd2VyQ2FzZSgpKSA+PSAwKVxyXG4gICAgICAgICAgICAgICAgLlNlbGVjdCh5ID0+IHkpXHJcbiAgICAgICAgICAgICAgICAuVG9BcnJheSgpOyAvLyA+IFs4LCAxMF0gXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlmaW5hZ2dMaXN0ID0gdGhpcy5maW5hZ2dMaXN0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25DbGVhcigpIHtcclxuICAgICAgICB0aGlzLnNlYXJjaFBocmFzZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5ZmluYWdnTGlzdCA9IHRoaXMuZmluYWdnTGlzdDtcclxuICAgIH1cclxufSJdfQ==