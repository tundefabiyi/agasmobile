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
var app_globals_1 = require("../app.globals");
var agas_model_1 = require("./agas.model");
var AGASFinAggSearchComponent = (function () {
    function AGASFinAggSearchComponent(agasdataService, router, homePageService, ngZone) {
        this.agasdataService = agasdataService;
        this.router = router;
        this.homePageService = homePageService;
        this.ngZone = ngZone;
    }
    AGASFinAggSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.homePageService.setTitle("GPFS Search");
        this.homePageService.setShowGoBackButton(false);
        this.homePageService.onGoBackObservable.subscribe(function () {
            _this.ngZone.run(function () {
            });
        });
        this.accounttypedd = this.accounttypedd_ElementRef.nativeElement;
        this.financialperiodedd = this.financialperioddd_ElementRef.nativeElement;
        this.querytypedd = this.querytypedd_ElementRef.nativeElement;
        this.searchrequestlist$ = this.agasdataService.getFinancialAggregateQueryRequestList(services_1.BackendService.email);
        this.agasdataService.getAccountTypeList().subscribe(function (res) {
            _this.accountTypeList = [];
            for (var id in res) {
                var result = Object.assign({ id: id }, res[id]);
                _this.accountTypeList.push({ ValueMember: result.id, DisplayMember: result.description });
            }
            _this.accountTypeValueList = new app_globals_1.ValueList(_this.accountTypeList);
            _this.accounttypedd.items = _this.accountTypeValueList;
            _this.accounttypedd.selectedIndex = 0;
            _this.selectedaccountTypeId = _this.accountTypeValueList.getValue(0);
            _this.selectedaccountTypedescr = _this.accountTypeValueList.getText(0);
            ;
        });
        this.agasdataService.getFinancialPeriodList().subscribe(function (res) {
            _this.financialperiodlist = [];
            for (var id in res) {
                var result = Object.assign({ id: id }, res[id]);
                _this.financialperiodlist.push({ ValueMember: result.id, DisplayMember: result.description });
            }
            _this.financialperiodValueList = new app_globals_1.ValueList(_this.financialperiodlist);
            _this.financialperiodedd.items = _this.financialperiodValueList;
            _this.financialperiodedd.selectedIndex = 0;
            _this.selectedfinancialperiodId = _this.financialperiodValueList.getValue(0);
            _this.selectedfinancialperioddescr = _this.financialperiodValueList.getText(0);
        });
        this.loadqueryTypeEnum();
    };
    AGASFinAggSearchComponent.prototype.loadqueryTypeEnum = function () {
        this.querytypelist = [];
        for (var n in agas_model_1.AGASRequestType) {
            if (typeof agas_model_1.AGASRequestType[n] === 'number') {
                this.querytypelist.push({ ValueMember: agas_model_1.AGASRequestType[n], DisplayMember: n });
            }
        }
        this.querytypeValueList = new app_globals_1.ValueList(this.querytypelist);
        this.querytypedd.items = this.querytypeValueList;
        this.querytypedd.selectedIndex = 0;
        this.selectedquerytypeId = this.querytypeValueList.getValue(0);
        this.selectedquerytypedescr = this.querytypeValueList.getText(0);
    };
    AGASFinAggSearchComponent.prototype.FinancialAggregateQuery = function () {
        console.log("FinancialAggregateQuery");
        this.agasdataService.createfinancialaggregaterequest(services_1.BackendService.email, this.selectedfinancialperiodId, this.selectedaccountTypeId, this.selectedfinancialperioddescr, this.selectedaccountTypedescr)
            .then(function (res) {
            alert("Record Saved Successfully");
        })
            .catch(function (err) {
            alert("An error occurred while creating Search Request.");
        });
    };
    AGASFinAggSearchComponent.prototype.BalanceSheet = function () {
        console.log("BalanceSheet");
        this.agasdataService.createbalancesheetrequest(services_1.BackendService.email, this.selectedfinancialperiodId, this.selectedfinancialperioddescr)
            .then(function (res) {
            alert("Record Saved Successfully");
        })
            .catch(function (err) {
            alert("An error occurred while creating Search Request.");
        });
    };
    AGASFinAggSearchComponent.prototype.FinancialPerformance = function () {
        this.agasdataService.createFinancialPerformancerequest(services_1.BackendService.email, this.selectedfinancialperiodId, this.selectedfinancialperioddescr)
            .then(function (res) {
            alert("Record Saved Successfully");
        })
            .catch(function (err) {
            alert("An error occurred while creating Search Request.");
        });
    };
    AGASFinAggSearchComponent.prototype.CashFlowStatement = function () {
        this.agasdataService.createcashflowrequest(services_1.BackendService.email, this.selectedfinancialperiodId, this.selectedfinancialperioddescr)
            .then(function (res) {
            alert("Record Saved Successfully");
        })
            .catch(function (err) {
            alert("An error occurred while creating Search Request.");
        });
    };
    AGASFinAggSearchComponent.prototype.StatementOfChangesInNetAssets = function () {
        this.agasdataService.createchangesinNetAssetrequest(services_1.BackendService.email, this.selectedfinancialperiodId, this.selectedfinancialperioddescr)
            .then(function (res) {
            alert("Record Saved Successfully");
        })
            .catch(function (err) {
            alert("An error occurred while creating Search Request.");
        });
    };
    AGASFinAggSearchComponent.prototype.cretaterequest = function () {
        eval("this." + this.selectedquerytypedescr + "()");
    };
    AGASFinAggSearchComponent.prototype.gotomygiftlist = function () {
        this.router.navigate(["/"]);
    };
    AGASFinAggSearchComponent.prototype.viewDetail = function (selecteditem) {
        if (selecteditem.aGASRequestType == "1") {
            var navigationExtras = {
                queryParams: {
                    "agasrequestid": selecteditem.agasrequestid,
                    "financialyeardescr": selecteditem.param.financialyeardescr,
                    "accounttypedesc": selecteditem.param.accounttypedesc,
                    "displaytime": selecteditem.displaytime,
                    "financialperiodId": selecteditem.param.financialyearid
                }
            };
            this.router.navigate(["agasfinagg-detail"], navigationExtras);
        }
        else {
            var navigationExtras = {
                queryParams: {
                    "agasrequestid": selecteditem.agasrequestid,
                    "financialyeardescr": selecteditem.param.financialyeardescr,
                    "reportTitle": selecteditem.aGASRequestTypeDescr,
                    "displaytime": selecteditem.displaytime
                }
            };
            this.router.navigate(["agashtml-view"], navigationExtras);
        }
    };
    AGASFinAggSearchComponent.prototype.accounttypepickeronchange = function (args) {
        this.selectedaccountTypeId = this.accountTypeValueList.getValue(args.newIndex);
        this.selectedaccountTypedescr = this.accountTypeValueList.getText(args.newIndex);
        ;
    };
    AGASFinAggSearchComponent.prototype.accounttypepickeronopen = function () {
    };
    AGASFinAggSearchComponent.prototype.financialperiodpickeronchange = function (args) {
        this.selectedfinancialperiodId = this.financialperiodValueList.getValue(args.newIndex);
        this.selectedfinancialperioddescr = this.financialperiodValueList.getText(args.newIndex);
    };
    AGASFinAggSearchComponent.prototype.financialperiodpickeronopen = function () {
    };
    AGASFinAggSearchComponent.prototype.querytypepickeronchange = function (args) {
        this.selectedquerytypeId = this.querytypeValueList.getValue(args.newIndex);
        this.selectedquerytypedescr = this.querytypeValueList.getText(args.newIndex);
    };
    AGASFinAggSearchComponent.prototype.querytypepickeronopen = function () {
    };
    AGASFinAggSearchComponent.prototype.openagasalert = function () {
        this.router.navigate(["/agasalert-view"]);
    };
    return AGASFinAggSearchComponent;
}());
__decorate([
    core_1.ViewChild("accounttypedd"),
    __metadata("design:type", core_1.ElementRef)
], AGASFinAggSearchComponent.prototype, "accounttypedd_ElementRef", void 0);
__decorate([
    core_1.ViewChild("financialperioddd"),
    __metadata("design:type", core_1.ElementRef)
], AGASFinAggSearchComponent.prototype, "financialperioddd_ElementRef", void 0);
__decorate([
    core_1.ViewChild("querytypedd"),
    __metadata("design:type", core_1.ElementRef)
], AGASFinAggSearchComponent.prototype, "querytypedd_ElementRef", void 0);
AGASFinAggSearchComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "finaggsearchdisplay",
        templateUrl: "agasfinaggsearch.html"
    }),
    __metadata("design:paramtypes", [agasdata_service_1.AGASDataService,
        router_1.Router, services_1.HomePageService, core_1.NgZone])
], AGASFinAggSearchComponent);
exports.AGASFinAggSearchComponent = AGASFinAggSearchComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdhc2ZpbmFnZ3NlYXJjaC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhZ2FzZmluYWdnc2VhcmNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUFpRjtBQUVqRiwwQ0FBMkU7QUFDM0Usd0NBQThEO0FBQzlELHVEQUFxRDtBQUNyRCw4Q0FBMkM7QUFHM0MsMkNBQStDO0FBTy9DLElBQWEseUJBQXlCO0lBNkJsQyxtQ0FBb0IsZUFBZ0MsRUFDeEMsTUFBYyxFQUFVLGVBQWdDLEVBQVUsTUFBYztRQUR4RSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDeEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7SUFHNUYsQ0FBQztJQUVELDRDQUFRLEdBQVI7UUFBQSxpQkEyQ0M7UUExQ0csSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQztZQUM5QyxLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUVoQixDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsYUFBYSxDQUFDO1FBQ2pFLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsNEJBQTRCLENBQUMsYUFBYSxDQUFDO1FBQzFFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGFBQWEsQ0FBQztRQUk3RCxJQUFJLENBQUMsa0JBQWtCLEdBQVEsSUFBSSxDQUFDLGVBQWUsQ0FBQyxxQ0FBcUMsQ0FB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QUFDLFFBQVEsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBQ0wsZ0NBQUM7QUFBRCxDQUFDLEFBNU1ELElBNE1DO0FBeE0rQjtJQUEzQixnQkFBUyxDQUFDLGVBQWUsQ0FBQzs4QkFBMkIsaUJBQVU7MkVBQUM7QUFPakM7SUFBL0IsZ0JBQVMsQ0FBQyxtQkFBbUIsQ0FBQzs4QkFBK0IsaUJBQVU7K0VBQUM7QUFPL0M7SUFBekIsZ0JBQVMsQ0FBQyxhQUFhLENBQUM7OEJBQXlCLGlCQUFVO3lFQUFDO0FBbEJwRCx5QkFBeUI7SUFMckMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUscUJBQXFCO1FBQy9CLFdBQVcsRUFBRSx1QkFBdUI7S0FDdkMsQ0FBQztxQ0E4QnVDLGtDQUFlO1FBQ2hDLGVBQU0sRUFBMkIsMEJBQWUsRUFBa0IsYUFBTTtHQTlCbkYseUJBQXlCLENBNE1yQztBQTVNWSw4REFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgTmdab25lLCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUsIE5hdmlnYXRpb25FeHRyYXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSwgSG9tZVBhZ2VTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzXCI7XHJcbmltcG9ydCB7IEFHQVNEYXRhU2VydmljZSB9IGZyb20gXCIuL2FnYXNkYXRhLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgVmFsdWVMaXN0IH0gZnJvbSBcIi4uL2FwcC5nbG9iYWxzXCI7XHJcbmltcG9ydCB7IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1kcm9wLWRvd25cIjtcclxuaW1wb3J0IHsgRHJvcERvd24gfSBmcm9tIFwibmF0aXZlc2NyaXB0LWRyb3AtZG93blwiO1xyXG5pbXBvcnQgeyBBR0FTUmVxdWVzdFR5cGUgfSBmcm9tIFwiLi9hZ2FzLm1vZGVsXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogXCJmaW5hZ2dzZWFyY2hkaXNwbGF5XCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJhZ2FzZmluYWdnc2VhcmNoLmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgQUdBU0ZpbkFnZ1NlYXJjaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgcHVibGljIGFjY291bnRUeXBlTGlzdDogYW55W107XHJcbiAgICBwdWJsaWMgYWNjb3VudFR5cGVWYWx1ZUxpc3Q6IFZhbHVlTGlzdDtcclxuICAgIEBWaWV3Q2hpbGQoXCJhY2NvdW50dHlwZWRkXCIpIGFjY291bnR0eXBlZGRfRWxlbWVudFJlZjogRWxlbWVudFJlZjtcclxuICAgIGFjY291bnR0eXBlZGQ6IERyb3BEb3duO1xyXG4gICAgcHVibGljIHNlbGVjdGVkYWNjb3VudFR5cGVJZDogbnVtYmVyO1xyXG4gICAgcHVibGljIHNlbGVjdGVkYWNjb3VudFR5cGVkZXNjcjogc3RyaW5nO1xyXG5cclxuICAgIHB1YmxpYyBmaW5hbmNpYWxwZXJpb2RsaXN0OiBhbnlbXTtcclxuICAgIHB1YmxpYyBmaW5hbmNpYWxwZXJpb2RWYWx1ZUxpc3Q6IFZhbHVlTGlzdDtcclxuICAgIEBWaWV3Q2hpbGQoXCJmaW5hbmNpYWxwZXJpb2RkZFwiKSBmaW5hbmNpYWxwZXJpb2RkZF9FbGVtZW50UmVmOiBFbGVtZW50UmVmO1xyXG4gICAgZmluYW5jaWFscGVyaW9kZWRkOiBEcm9wRG93bjtcclxuICAgIHB1YmxpYyBzZWxlY3RlZGZpbmFuY2lhbHBlcmlvZElkOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgc2VsZWN0ZWRmaW5hbmNpYWxwZXJpb2RkZXNjcjogc3RyaW5nO1xyXG5cclxuICAgIHB1YmxpYyBxdWVyeXR5cGVsaXN0OiBhbnlbXTtcclxuICAgIHB1YmxpYyBxdWVyeXR5cGVWYWx1ZUxpc3Q6IFZhbHVlTGlzdDtcclxuICAgIEBWaWV3Q2hpbGQoXCJxdWVyeXR5cGVkZFwiKSBxdWVyeXR5cGVkZF9FbGVtZW50UmVmOiBFbGVtZW50UmVmO1xyXG4gICAgcXVlcnl0eXBlZGQ6IERyb3BEb3duO1xyXG4gICAgcHVibGljIHNlbGVjdGVkcXVlcnl0eXBlSWQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyBzZWxlY3RlZHF1ZXJ5dHlwZWRlc2NyOiBzdHJpbmc7XHJcblxyXG4gICAgcHVibGljIHNlYXJjaHJlcXVlc3RsaXN0JDogT2JzZXJ2YWJsZTxhbnk+O1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFnYXNkYXRhU2VydmljZTogQUdBU0RhdGFTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgaG9tZVBhZ2VTZXJ2aWNlOiBIb21lUGFnZVNlcnZpY2UsIHByaXZhdGUgbmdab25lOiBOZ1pvbmVcclxuICAgICkge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuaG9tZVBhZ2VTZXJ2aWNlLnNldFRpdGxlKFwiR1BGUyBTZWFyY2hcIik7XHJcbiAgICAgICAgIHRoaXMuaG9tZVBhZ2VTZXJ2aWNlLnNldFNob3dHb0JhY2tCdXR0b24oZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuaG9tZVBhZ2VTZXJ2aWNlLm9uR29CYWNrT2JzZXJ2YWJsZS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAvLyB0aGlzLmdvYmFja3RvcmVzdWx0bGlzdCgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuYWNjb3VudHR5cGVkZCA9IHRoaXMuYWNjb3VudHR5cGVkZF9FbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5maW5hbmNpYWxwZXJpb2RlZGQgPSB0aGlzLmZpbmFuY2lhbHBlcmlvZGRkX0VsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICAgICAgICB0aGlzLnF1ZXJ5dHlwZWRkID0gdGhpcy5xdWVyeXR5cGVkZF9FbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuYWNjb3VudFR5cGVMaXN0JCA9IDxhbnk+dGhpcy5hZ2FzZGF0YVNlcnZpY2UuZ2V0QWNjb3VudFR5cGVMaXN0KCk7XHJcbiAgICAgICAgLy8gdGhpcy5maW5hbmNpYWxwZXJpb2RsaXN0JCA9IDxhbnk+dGhpcy5hZ2FzZGF0YVNlcnZpY2UuZ2V0RmluYW5jaWFsUGVyaW9kTGlzdCgpO1xyXG4gICAgICAgIHRoaXMuc2VhcmNocmVxdWVzdGxpc3QkID0gPGFueT50aGlzLmFnYXNkYXRhU2VydmljZS5nZXRGaW5hbmNpYWxBZ2dyZWdhdGVRdWVyeVJlcXVlc3RMaXN0KEJhY2tlbmRTZXJ2aWNlLmVtYWlsKTtcclxuXHJcbiAgICAgICAgdGhpcy5hZ2FzZGF0YVNlcnZpY2UuZ2V0QWNjb3VudFR5cGVMaXN0KCkuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYWNjb3VudFR5cGVMaXN0ID0gW107XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpZCBpbiByZXMpIHtcclxuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSAoPGFueT5PYmplY3QpLmFzc2lnbih7IGlkOiBpZCB9LCByZXNbaWRdKTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuYWNjb3VudFR5cGVMaXN0LnB1c2goeyBpZDogcmVzdWx0LmlkLCBkZXNjcmlwdGlvbjogcmVzdWx0LmRlc2NyaXB0aW9uLCB0b1N0cmluZzogKCkgPT4geyByZXR1cm4gcmVzdWx0LmRlc2NyaXB0aW9uOyB9IH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY2NvdW50VHlwZUxpc3QucHVzaCh7IFZhbHVlTWVtYmVyOiByZXN1bHQuaWQsIERpc3BsYXlNZW1iZXI6IHJlc3VsdC5kZXNjcmlwdGlvbiB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmFjY291bnRUeXBlVmFsdWVMaXN0ID0gbmV3IFZhbHVlTGlzdCh0aGlzLmFjY291bnRUeXBlTGlzdCk7XHJcbiAgICAgICAgICAgIHRoaXMuYWNjb3VudHR5cGVkZC5pdGVtcyA9IHRoaXMuYWNjb3VudFR5cGVWYWx1ZUxpc3Q7XHJcbiAgICAgICAgICAgIHRoaXMuYWNjb3VudHR5cGVkZC5zZWxlY3RlZEluZGV4ID0gMDtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZGFjY291bnRUeXBlSWQgPSB0aGlzLmFjY291bnRUeXBlVmFsdWVMaXN0LmdldFZhbHVlKDApO1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkYWNjb3VudFR5cGVkZXNjciA9IHRoaXMuYWNjb3VudFR5cGVWYWx1ZUxpc3QuZ2V0VGV4dCgwKTs7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5hZ2FzZGF0YVNlcnZpY2UuZ2V0RmluYW5jaWFsUGVyaW9kTGlzdCgpLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmZpbmFuY2lhbHBlcmlvZGxpc3QgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaWQgaW4gcmVzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gKDxhbnk+T2JqZWN0KS5hc3NpZ24oeyBpZDogaWQgfSwgcmVzW2lkXSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbmFuY2lhbHBlcmlvZGxpc3QucHVzaCh7IFZhbHVlTWVtYmVyOiByZXN1bHQuaWQsIERpc3BsYXlNZW1iZXI6IHJlc3VsdC5kZXNjcmlwdGlvbiB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmZpbmFuY2lhbHBlcmlvZFZhbHVlTGlzdCA9IG5ldyBWYWx1ZUxpc3QodGhpcy5maW5hbmNpYWxwZXJpb2RsaXN0KTtcclxuICAgICAgICAgICAgdGhpcy5maW5hbmNpYWxwZXJpb2RlZGQuaXRlbXMgPSB0aGlzLmZpbmFuY2lhbHBlcmlvZFZhbHVlTGlzdDtcclxuICAgICAgICAgICAgdGhpcy5maW5hbmNpYWxwZXJpb2RlZGQuc2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRmaW5hbmNpYWxwZXJpb2RJZCA9IHRoaXMuZmluYW5jaWFscGVyaW9kVmFsdWVMaXN0LmdldFZhbHVlKDApO1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkZmluYW5jaWFscGVyaW9kZGVzY3IgPSB0aGlzLmZpbmFuY2lhbHBlcmlvZFZhbHVlTGlzdC5nZXRUZXh0KDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubG9hZHF1ZXJ5VHlwZUVudW0oKTtcclxuICAgIH1cclxuICAgIGxvYWRxdWVyeVR5cGVFbnVtKCkge1xyXG4gICAgICAgIHRoaXMucXVlcnl0eXBlbGlzdCA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIG4gaW4gQUdBU1JlcXVlc3RUeXBlKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgQUdBU1JlcXVlc3RUeXBlW25dID09PSAnbnVtYmVyJykge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucXVlcnl0eXBlbGlzdC5wdXNoKHsgVmFsdWVNZW1iZXI6IEFHQVNSZXF1ZXN0VHlwZVtuXSwgRGlzcGxheU1lbWJlcjogbiB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnF1ZXJ5dHlwZVZhbHVlTGlzdCA9IG5ldyBWYWx1ZUxpc3QodGhpcy5xdWVyeXR5cGVsaXN0KTtcclxuICAgICAgICB0aGlzLnF1ZXJ5dHlwZWRkLml0ZW1zID0gdGhpcy5xdWVyeXR5cGVWYWx1ZUxpc3Q7XHJcbiAgICAgICAgdGhpcy5xdWVyeXR5cGVkZC5zZWxlY3RlZEluZGV4ID0gMDtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkcXVlcnl0eXBlSWQgPSB0aGlzLnF1ZXJ5dHlwZVZhbHVlTGlzdC5nZXRWYWx1ZSgwKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkcXVlcnl0eXBlZGVzY3IgPSB0aGlzLnF1ZXJ5dHlwZVZhbHVlTGlzdC5nZXRUZXh0KDApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBGaW5hbmNpYWxBZ2dyZWdhdGVRdWVyeSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkZpbmFuY2lhbEFnZ3JlZ2F0ZVF1ZXJ5XCIpO1xyXG4gICAgICAgIHRoaXMuYWdhc2RhdGFTZXJ2aWNlLmNyZWF0ZWZpbmFuY2lhbGFnZ3JlZ2F0ZXJlcXVlc3QoQmFja2VuZFNlcnZpY2UuZW1haWwsIHRoaXMuc2VsZWN0ZWRmaW5hbmNpYWxwZXJpb2RJZCwgdGhpcy5zZWxlY3RlZGFjY291bnRUeXBlSWQsIHRoaXMuc2VsZWN0ZWRmaW5hbmNpYWxwZXJpb2RkZXNjciwgdGhpcy5zZWxlY3RlZGFjY291bnRUeXBlZGVzY3IpXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIlJlY29yZCBTYXZlZCBTdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBjcmVhdGluZyBTZWFyY2ggUmVxdWVzdC5cIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgQmFsYW5jZVNoZWV0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQmFsYW5jZVNoZWV0XCIpO1xyXG4gICAgICAgIHRoaXMuYWdhc2RhdGFTZXJ2aWNlLmNyZWF0ZWJhbGFuY2VzaGVldHJlcXVlc3QoQmFja2VuZFNlcnZpY2UuZW1haWwsIHRoaXMuc2VsZWN0ZWRmaW5hbmNpYWxwZXJpb2RJZCwgdGhpcy5zZWxlY3RlZGZpbmFuY2lhbHBlcmlvZGRlc2NyKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJSZWNvcmQgU2F2ZWQgU3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgY3JlYXRpbmcgU2VhcmNoIFJlcXVlc3QuXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIEZpbmFuY2lhbFBlcmZvcm1hbmNlKCkge1xyXG4gICAgICAgIHRoaXMuYWdhc2RhdGFTZXJ2aWNlLmNyZWF0ZUZpbmFuY2lhbFBlcmZvcm1hbmNlcmVxdWVzdChCYWNrZW5kU2VydmljZS5lbWFpbCwgdGhpcy5zZWxlY3RlZGZpbmFuY2lhbHBlcmlvZElkLCB0aGlzLnNlbGVjdGVkZmluYW5jaWFscGVyaW9kZGVzY3IpXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIlJlY29yZCBTYXZlZCBTdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBjcmVhdGluZyBTZWFyY2ggUmVxdWVzdC5cIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgQ2FzaEZsb3dTdGF0ZW1lbnQoKSB7XHJcbiAgICAgICAgdGhpcy5hZ2FzZGF0YVNlcnZpY2UuY3JlYXRlY2FzaGZsb3dyZXF1ZXN0KEJhY2tlbmRTZXJ2aWNlLmVtYWlsLCB0aGlzLnNlbGVjdGVkZmluYW5jaWFscGVyaW9kSWQsIHRoaXMuc2VsZWN0ZWRmaW5hbmNpYWxwZXJpb2RkZXNjcilcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiUmVjb3JkIFNhdmVkIFN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIGNyZWF0aW5nIFNlYXJjaCBSZXF1ZXN0LlwiKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBTdGF0ZW1lbnRPZkNoYW5nZXNJbk5ldEFzc2V0cygpIHtcclxuICAgICAgICB0aGlzLmFnYXNkYXRhU2VydmljZS5jcmVhdGVjaGFuZ2VzaW5OZXRBc3NldHJlcXVlc3QoQmFja2VuZFNlcnZpY2UuZW1haWwsIHRoaXMuc2VsZWN0ZWRmaW5hbmNpYWxwZXJpb2RJZCwgdGhpcy5zZWxlY3RlZGZpbmFuY2lhbHBlcmlvZGRlc2NyKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJSZWNvcmQgU2F2ZWQgU3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgY3JlYXRpbmcgU2VhcmNoIFJlcXVlc3QuXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGNyZXRhdGVyZXF1ZXN0KCkge1xyXG5cclxuICAgICAgICBldmFsKFwidGhpcy5cIiArIHRoaXMuc2VsZWN0ZWRxdWVyeXR5cGVkZXNjciArIFwiKClcIik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ290b215Z2lmdGxpc3QoKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL1wiXSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdmlld0RldGFpbChzZWxlY3RlZGl0ZW06IGFueSkge1xyXG4gICAgICAgIGlmIChzZWxlY3RlZGl0ZW0uYUdBU1JlcXVlc3RUeXBlID09IFwiMVwiKSB7XHJcbiAgICAgICAgICAgIGxldCBuYXZpZ2F0aW9uRXh0cmFzOiBOYXZpZ2F0aW9uRXh0cmFzID0ge1xyXG4gICAgICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBcImFnYXNyZXF1ZXN0aWRcIjogc2VsZWN0ZWRpdGVtLmFnYXNyZXF1ZXN0aWQsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJmaW5hbmNpYWx5ZWFyZGVzY3JcIjogc2VsZWN0ZWRpdGVtLnBhcmFtLmZpbmFuY2lhbHllYXJkZXNjcixcclxuICAgICAgICAgICAgICAgICAgICBcImFjY291bnR0eXBlZGVzY1wiOiBzZWxlY3RlZGl0ZW0ucGFyYW0uYWNjb3VudHR5cGVkZXNjLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGlzcGxheXRpbWVcIjogc2VsZWN0ZWRpdGVtLmRpc3BsYXl0aW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZmluYW5jaWFscGVyaW9kSWRcIjogc2VsZWN0ZWRpdGVtLnBhcmFtLmZpbmFuY2lhbHllYXJpZFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJhZ2FzZmluYWdnLWRldGFpbFwiXSwgbmF2aWdhdGlvbkV4dHJhcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgbmF2aWdhdGlvbkV4dHJhczogTmF2aWdhdGlvbkV4dHJhcyA9IHtcclxuICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJhZ2FzcmVxdWVzdGlkXCI6IHNlbGVjdGVkaXRlbS5hZ2FzcmVxdWVzdGlkLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZmluYW5jaWFseWVhcmRlc2NyXCI6IHNlbGVjdGVkaXRlbS5wYXJhbS5maW5hbmNpYWx5ZWFyZGVzY3IsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJyZXBvcnRUaXRsZVwiOiBzZWxlY3RlZGl0ZW0uYUdBU1JlcXVlc3RUeXBlRGVzY3IsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkaXNwbGF5dGltZVwiOiBzZWxlY3RlZGl0ZW0uZGlzcGxheXRpbWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiYWdhc2h0bWwtdmlld1wiXSwgbmF2aWdhdGlvbkV4dHJhcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIGFjY291bnR0eXBlcGlja2Vyb25jaGFuZ2UoYXJnczogU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEpIHtcclxuXHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZGFjY291bnRUeXBlSWQgPSB0aGlzLmFjY291bnRUeXBlVmFsdWVMaXN0LmdldFZhbHVlKGFyZ3MubmV3SW5kZXgpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRhY2NvdW50VHlwZWRlc2NyID0gdGhpcy5hY2NvdW50VHlwZVZhbHVlTGlzdC5nZXRUZXh0KGFyZ3MubmV3SW5kZXgpOztcclxuICAgIH1cclxuICAgIHB1YmxpYyBhY2NvdW50dHlwZXBpY2tlcm9ub3BlbigpIHtcclxuXHJcblxyXG4gICAgfVxyXG4gICAgcHVibGljIGZpbmFuY2lhbHBlcmlvZHBpY2tlcm9uY2hhbmdlKGFyZ3M6IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRmaW5hbmNpYWxwZXJpb2RJZCA9IHRoaXMuZmluYW5jaWFscGVyaW9kVmFsdWVMaXN0LmdldFZhbHVlKGFyZ3MubmV3SW5kZXgpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRmaW5hbmNpYWxwZXJpb2RkZXNjciA9IHRoaXMuZmluYW5jaWFscGVyaW9kVmFsdWVMaXN0LmdldFRleHQoYXJncy5uZXdJbmRleCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZmluYW5jaWFscGVyaW9kcGlja2Vyb25vcGVuKCkge1xyXG5cclxuXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgcXVlcnl0eXBlcGlja2Vyb25jaGFuZ2UoYXJnczogU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEpIHtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRxdWVyeXR5cGVJZCA9IHRoaXMucXVlcnl0eXBlVmFsdWVMaXN0LmdldFZhbHVlKGFyZ3MubmV3SW5kZXgpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRxdWVyeXR5cGVkZXNjciA9IHRoaXMucXVlcnl0eXBlVmFsdWVMaXN0LmdldFRleHQoYXJncy5uZXdJbmRleCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgcXVlcnl0eXBlcGlja2Vyb25vcGVuKCkge1xyXG5cclxuXHJcbiAgICB9XHJcbiAgICBvcGVuYWdhc2FsZXJ0KCkge1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9hZ2FzYWxlcnQtdmlld1wiXSk7XHJcbiAgICB9XHJcbn0iXX0=