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
    function AGASFinAggSearchComponent(agasdataService, router) {
        this.agasdataService = agasdataService;
        this.router = router;
    }
    AGASFinAggSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
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
        router_1.Router])
], AGASFinAggSearchComponent);
exports.AGASFinAggSearchComponent = AGASFinAggSearchComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdhc2ZpbmFnZ3NlYXJjaC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhZ2FzZmluYWdnc2VhcmNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUFpRjtBQUVqRiwwQ0FBMkU7QUFDM0Usd0NBQTZDO0FBQzdDLHVEQUFxRDtBQUNyRCw4Q0FBMkM7QUFHM0MsMkNBQStDO0FBTy9DLElBQWEseUJBQXlCO0lBNkJsQyxtQ0FBb0IsZUFBZ0MsRUFDeEMsTUFBYztRQUROLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUN4QyxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBRzFCLENBQUM7SUFFRCw0Q0FBUSxHQUFSO1FBQUEsaUJBb0NDO1FBbkNHLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLGFBQWEsQ0FBQztRQUNqRSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLDRCQUE0QixDQUFDLGFBQWEsQ0FBQztRQUMxRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxhQUFhLENBQUM7UUFJN0QsSUFBSSxDQUFDLGtCQUFrQixHQUFRLElBQUksQ0FBQyxlQUFlLENBQUMscUNBQXFDLENBQUMseUJBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVoSCxJQUFJLENBQUMsZUFBZSxDQUFDLGtCQUFrQixFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUEsR0FBRztZQUNuRCxLQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztZQUUxQixHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNqQixJQUFJLE1BQU0sR0FBUyxNQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUV2RCxLQUFJLENBQUMs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O0lBQzdGLENBQUM7SUFDTSwrREFBMkIsR0FBbEM7SUFHQSxDQUFDO0lBQ00sMkRBQXVCLEdBQTlCLFVBQStCLElBQW1DO1FBRzlELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzRSxJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakYsQ0FBQztJQUNNLHlEQUFxQixHQUE1QjtJQUdBLENBQUM7SUFDTCxnQ0FBQztBQUFELENBQUMsQUF6TEQsSUF5TEM7QUFyTCtCO0lBQTNCLGdCQUFTLENBQUMsZUFBZSxDQUFDOzhCQUEyQixpQkFBVTsyRUFBQztBQU9qQztJQUEvQixnQkFBUyxDQUFDLG1CQUFtQixDQUFDOzhCQUErQixpQkFBVTsrRUFBQztBQU8vQztJQUF6QixnQkFBUyxDQUFDLGFBQWEsQ0FBQzs4QkFBeUIsaUJBQVU7eUVBQUM7QUFsQnBELHlCQUF5QjtJQUxyQyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxxQkFBcUI7UUFDL0IsV0FBVyxFQUFFLHVCQUF1QjtLQUN2QyxDQUFDO3FDQThCdUMsa0NBQWU7UUFDaEMsZUFBTTtHQTlCakIseUJBQXlCLENBeUxyQztBQXpMWSw4REFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgTmdab25lLCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUsIE5hdmlnYXRpb25FeHRyYXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlc1wiO1xyXG5pbXBvcnQgeyBBR0FTRGF0YVNlcnZpY2UgfSBmcm9tIFwiLi9hZ2FzZGF0YS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFZhbHVlTGlzdCB9IGZyb20gXCIuLi9hcHAuZ2xvYmFsc1wiO1xyXG5pbXBvcnQgeyBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZHJvcC1kb3duXCI7XHJcbmltcG9ydCB7IERyb3BEb3duIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1kcm9wLWRvd25cIjtcclxuaW1wb3J0IHsgQUdBU1JlcXVlc3RUeXBlIH0gZnJvbSBcIi4vYWdhcy5tb2RlbFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6IFwiZmluYWdnc2VhcmNoZGlzcGxheVwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiYWdhc2ZpbmFnZ3NlYXJjaC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIEFHQVNGaW5BZ2dTZWFyY2hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIHB1YmxpYyBhY2NvdW50VHlwZUxpc3Q6IGFueVtdO1xyXG4gICAgcHVibGljIGFjY291bnRUeXBlVmFsdWVMaXN0OiBWYWx1ZUxpc3Q7XHJcbiAgICBAVmlld0NoaWxkKFwiYWNjb3VudHR5cGVkZFwiKSBhY2NvdW50dHlwZWRkX0VsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XHJcbiAgICBhY2NvdW50dHlwZWRkOiBEcm9wRG93bjtcclxuICAgIHB1YmxpYyBzZWxlY3RlZGFjY291bnRUeXBlSWQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyBzZWxlY3RlZGFjY291bnRUeXBlZGVzY3I6IHN0cmluZztcclxuXHJcbiAgICBwdWJsaWMgZmluYW5jaWFscGVyaW9kbGlzdDogYW55W107XHJcbiAgICBwdWJsaWMgZmluYW5jaWFscGVyaW9kVmFsdWVMaXN0OiBWYWx1ZUxpc3Q7XHJcbiAgICBAVmlld0NoaWxkKFwiZmluYW5jaWFscGVyaW9kZGRcIikgZmluYW5jaWFscGVyaW9kZGRfRWxlbWVudFJlZjogRWxlbWVudFJlZjtcclxuICAgIGZpbmFuY2lhbHBlcmlvZGVkZDogRHJvcERvd247XHJcbiAgICBwdWJsaWMgc2VsZWN0ZWRmaW5hbmNpYWxwZXJpb2RJZDogbnVtYmVyO1xyXG4gICAgcHVibGljIHNlbGVjdGVkZmluYW5jaWFscGVyaW9kZGVzY3I6IHN0cmluZztcclxuXHJcbiAgICBwdWJsaWMgcXVlcnl0eXBlbGlzdDogYW55W107XHJcbiAgICBwdWJsaWMgcXVlcnl0eXBlVmFsdWVMaXN0OiBWYWx1ZUxpc3Q7XHJcbiAgICBAVmlld0NoaWxkKFwicXVlcnl0eXBlZGRcIikgcXVlcnl0eXBlZGRfRWxlbWVudFJlZjogRWxlbWVudFJlZjtcclxuICAgIHF1ZXJ5dHlwZWRkOiBEcm9wRG93bjtcclxuICAgIHB1YmxpYyBzZWxlY3RlZHF1ZXJ5dHlwZUlkOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgc2VsZWN0ZWRxdWVyeXR5cGVkZXNjcjogc3RyaW5nO1xyXG5cclxuICAgIHB1YmxpYyBzZWFyY2hyZXF1ZXN0bGlzdCQ6IE9ic2VydmFibGU8YW55PjtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhZ2FzZGF0YVNlcnZpY2U6IEFHQVNEYXRhU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyXHJcbiAgICApIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5hY2NvdW50dHlwZWRkID0gdGhpcy5hY2NvdW50dHlwZWRkX0VsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICAgICAgICB0aGlzLmZpbmFuY2lhbHBlcmlvZGVkZCA9IHRoaXMuZmluYW5jaWFscGVyaW9kZGRfRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgIHRoaXMucXVlcnl0eXBlZGQgPSB0aGlzLnF1ZXJ5dHlwZWRkX0VsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5hY2NvdW50VHlwZUxpc3QkID0gPGFueT50aGlzLmFnYXNkYXRhU2VydmljZS5nZXRBY2NvdW50VHlwZUxpc3QoKTtcclxuICAgICAgICAvLyB0aGlzLmZpbmFuY2lhbHBlcmlvZGxpc3QkID0gPGFueT50aGlzLmFnYXNkYXRhU2VydmljZS5nZXRGaW5hbmNpYWxQZXJpb2RMaXN0KCk7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hyZXF1ZXN0bGlzdCQgPSA8YW55PnRoaXMuYWdhc2RhdGFTZXJ2aWNlLmdldEZpbmFuY2lhbEFnZ3JlZ2F0ZVF1ZXJ5UmVxdWVzdExpc3QoQmFja2VuZFNlcnZpY2UuZW1haWwpO1xyXG5cclxuICAgICAgICB0aGlzLmFnYXNkYXRhU2VydmljZS5nZXRBY2NvdW50VHlwZUxpc3QoKS5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hY2NvdW50VHlwZUxpc3QgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGlkIGluIHJlcykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9ICg8YW55Pk9iamVjdCkuYXNzaWduKHsgaWQ6IGlkIH0sIHJlc1tpZF0pO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5hY2NvdW50VHlwZUxpc3QucHVzaCh7IGlkOiByZXN1bHQuaWQsIGRlc2NyaXB0aW9uOiByZXN1bHQuZGVzY3JpcHRpb24sIHRvU3RyaW5nOiAoKSA9PiB7IHJldHVybiByZXN1bHQuZGVzY3JpcHRpb247IH0gfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjY291bnRUeXBlTGlzdC5wdXNoKHsgVmFsdWVNZW1iZXI6IHJlc3VsdC5pZCwgRGlzcGxheU1lbWJlcjogcmVzdWx0LmRlc2NyaXB0aW9uIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuYWNjb3VudFR5cGVWYWx1ZUxpc3QgPSBuZXcgVmFsdWVMaXN0KHRoaXMuYWNjb3VudFR5cGVMaXN0KTtcclxuICAgICAgICAgICAgdGhpcy5hY2NvdW50dHlwZWRkLml0ZW1zID0gdGhpcy5hY2NvdW50VHlwZVZhbHVlTGlzdDtcclxuICAgICAgICAgICAgdGhpcy5hY2NvdW50dHlwZWRkLnNlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkYWNjb3VudFR5cGVJZCA9IHRoaXMuYWNjb3VudFR5cGVWYWx1ZUxpc3QuZ2V0VmFsdWUoMCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRhY2NvdW50VHlwZWRlc2NyID0gdGhpcy5hY2NvdW50VHlwZVZhbHVlTGlzdC5nZXRUZXh0KDApOztcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmFnYXNkYXRhU2VydmljZS5nZXRGaW5hbmNpYWxQZXJpb2RMaXN0KCkuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZmluYW5jaWFscGVyaW9kbGlzdCA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpZCBpbiByZXMpIHtcclxuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSAoPGFueT5PYmplY3QpLmFzc2lnbih7IGlkOiBpZCB9LCByZXNbaWRdKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmluYW5jaWFscGVyaW9kbGlzdC5wdXNoKHsgVmFsdWVNZW1iZXI6IHJlc3VsdC5pZCwgRGlzcGxheU1lbWJlcjogcmVzdWx0LmRlc2NyaXB0aW9uIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZmluYW5jaWFscGVyaW9kVmFsdWVMaXN0ID0gbmV3IFZhbHVlTGlzdCh0aGlzLmZpbmFuY2lhbHBlcmlvZGxpc3QpO1xyXG4gICAgICAgICAgICB0aGlzLmZpbmFuY2lhbHBlcmlvZGVkZC5pdGVtcyA9IHRoaXMuZmluYW5jaWFscGVyaW9kVmFsdWVMaXN0O1xyXG4gICAgICAgICAgICB0aGlzLmZpbmFuY2lhbHBlcmlvZGVkZC5zZWxlY3RlZEluZGV4ID0gMDtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZGZpbmFuY2lhbHBlcmlvZElkID0gdGhpcy5maW5hbmNpYWxwZXJpb2RWYWx1ZUxpc3QuZ2V0VmFsdWUoMCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRmaW5hbmNpYWxwZXJpb2RkZXNjciA9IHRoaXMuZmluYW5jaWFscGVyaW9kVmFsdWVMaXN0LmdldFRleHQoMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5sb2FkcXVlcnlUeXBlRW51bSgpO1xyXG4gICAgfVxyXG4gICAgbG9hZHF1ZXJ5VHlwZUVudW0oKSB7XHJcbiAgICAgICAgdGhpcy5xdWVyeXR5cGVsaXN0ID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgbiBpbiBBR0FTUmVxdWVzdFR5cGUpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBBR0FTUmVxdWVzdFR5cGVbbl0gPT09ICdudW1iZXInKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5xdWVyeXR5cGVsaXN0LnB1c2goeyBWYWx1ZU1lbWJlcjogQUdBU1JlcXVlc3RUeXBlW25dLCBEaXNwbGF5TWVtYmVyOiBuIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucXVlcnl0eXBlVmFsdWVMaXN0ID0gbmV3IFZhbHVlTGlzdCh0aGlzLnF1ZXJ5dHlwZWxpc3QpO1xyXG4gICAgICAgIHRoaXMucXVlcnl0eXBlZGQuaXRlbXMgPSB0aGlzLnF1ZXJ5dHlwZVZhbHVlTGlzdDtcclxuICAgICAgICB0aGlzLnF1ZXJ5dHlwZWRkLnNlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgICAgICB0aGlzLnNlbGVjdGVkcXVlcnl0eXBlSWQgPSB0aGlzLnF1ZXJ5dHlwZVZhbHVlTGlzdC5nZXRWYWx1ZSgwKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkcXVlcnl0eXBlZGVzY3IgPSB0aGlzLnF1ZXJ5dHlwZVZhbHVlTGlzdC5nZXRUZXh0KDApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBGaW5hbmNpYWxBZ2dyZWdhdGVRdWVyeSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkZpbmFuY2lhbEFnZ3JlZ2F0ZVF1ZXJ5XCIpO1xyXG4gICAgICAgIHRoaXMuYWdhc2RhdGFTZXJ2aWNlLmNyZWF0ZWZpbmFuY2lhbGFnZ3JlZ2F0ZXJlcXVlc3QoQmFja2VuZFNlcnZpY2UuZW1haWwsIHRoaXMuc2VsZWN0ZWRmaW5hbmNpYWxwZXJpb2RJZCwgdGhpcy5zZWxlY3RlZGFjY291bnRUeXBlSWQsIHRoaXMuc2VsZWN0ZWRmaW5hbmNpYWxwZXJpb2RkZXNjciwgdGhpcy5zZWxlY3RlZGFjY291bnRUeXBlZGVzY3IpXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIlJlY29yZCBTYXZlZCBTdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBjcmVhdGluZyBTZWFyY2ggUmVxdWVzdC5cIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgQmFsYW5jZVNoZWV0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQmFsYW5jZVNoZWV0XCIpO1xyXG4gICAgICAgIHRoaXMuYWdhc2RhdGFTZXJ2aWNlLmNyZWF0ZWJhbGFuY2VzaGVldHJlcXVlc3QoQmFja2VuZFNlcnZpY2UuZW1haWwsIHRoaXMuc2VsZWN0ZWRmaW5hbmNpYWxwZXJpb2RJZCwgdGhpcy5zZWxlY3RlZGZpbmFuY2lhbHBlcmlvZGRlc2NyKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJSZWNvcmQgU2F2ZWQgU3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgY3JlYXRpbmcgU2VhcmNoIFJlcXVlc3QuXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIEZpbmFuY2lhbFBlcmZvcm1hbmNlKCkge1xyXG4gICAgICAgIHRoaXMuYWdhc2RhdGFTZXJ2aWNlLmNyZWF0ZUZpbmFuY2lhbFBlcmZvcm1hbmNlcmVxdWVzdChCYWNrZW5kU2VydmljZS5lbWFpbCwgdGhpcy5zZWxlY3RlZGZpbmFuY2lhbHBlcmlvZElkLCB0aGlzLnNlbGVjdGVkZmluYW5jaWFscGVyaW9kZGVzY3IpXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIlJlY29yZCBTYXZlZCBTdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBjcmVhdGluZyBTZWFyY2ggUmVxdWVzdC5cIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgQ2FzaEZsb3dTdGF0ZW1lbnQoKSB7XHJcbiAgICAgICAgdGhpcy5hZ2FzZGF0YVNlcnZpY2UuY3JlYXRlY2FzaGZsb3dyZXF1ZXN0KEJhY2tlbmRTZXJ2aWNlLmVtYWlsLCB0aGlzLnNlbGVjdGVkZmluYW5jaWFscGVyaW9kSWQsIHRoaXMuc2VsZWN0ZWRmaW5hbmNpYWxwZXJpb2RkZXNjcilcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiUmVjb3JkIFNhdmVkIFN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIGNyZWF0aW5nIFNlYXJjaCBSZXF1ZXN0LlwiKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjcmV0YXRlcmVxdWVzdCgpIHtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICBldmFsKFwidGhpcy5cIiArIHRoaXMuc2VsZWN0ZWRxdWVyeXR5cGVkZXNjciArIFwiKClcIik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ290b215Z2lmdGxpc3QoKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL1wiXSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdmlld0RldGFpbChzZWxlY3RlZGl0ZW06IGFueSkge1xyXG4gICAgICAgIGlmIChzZWxlY3RlZGl0ZW0uYUdBU1JlcXVlc3RUeXBlID09IFwiMVwiKSB7XHJcbiAgICAgICAgICAgIGxldCBuYXZpZ2F0aW9uRXh0cmFzOiBOYXZpZ2F0aW9uRXh0cmFzID0ge1xyXG4gICAgICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBcImFnYXNyZXF1ZXN0aWRcIjogc2VsZWN0ZWRpdGVtLmFnYXNyZXF1ZXN0aWQsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJmaW5hbmNpYWx5ZWFyZGVzY3JcIjogc2VsZWN0ZWRpdGVtLnBhcmFtLmZpbmFuY2lhbHllYXJkZXNjcixcclxuICAgICAgICAgICAgICAgICAgICBcImFjY291bnR0eXBlZGVzY1wiOiBzZWxlY3RlZGl0ZW0ucGFyYW0uYWNjb3VudHR5cGVkZXNjLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGlzcGxheXRpbWVcIjogc2VsZWN0ZWRpdGVtLmRpc3BsYXl0aW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICBcImZpbmFuY2lhbHBlcmlvZElkXCI6IHNlbGVjdGVkaXRlbS5wYXJhbS5maW5hbmNpYWx5ZWFyaWRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiYWdhc2ZpbmFnZy1kZXRhaWxcIl0sIG5hdmlnYXRpb25FeHRyYXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IG5hdmlnYXRpb25FeHRyYXM6IE5hdmlnYXRpb25FeHRyYXMgPSB7XHJcbiAgICAgICAgICAgICAgICBxdWVyeVBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiYWdhc3JlcXVlc3RpZFwiOiBzZWxlY3RlZGl0ZW0uYWdhc3JlcXVlc3RpZCxcclxuICAgICAgICAgICAgICAgICAgICBcImZpbmFuY2lhbHllYXJkZXNjclwiOiBzZWxlY3RlZGl0ZW0ucGFyYW0uZmluYW5jaWFseWVhcmRlc2NyLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicmVwb3J0VGl0bGVcIjogc2VsZWN0ZWRpdGVtLmFHQVNSZXF1ZXN0VHlwZURlc2NyLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGlzcGxheXRpbWVcIjogc2VsZWN0ZWRpdGVtLmRpc3BsYXl0aW1lXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImFnYXNodG1sLXZpZXdcIl0sIG5hdmlnYXRpb25FeHRyYXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBhY2NvdW50dHlwZXBpY2tlcm9uY2hhbmdlKGFyZ3M6IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRhY2NvdW50VHlwZUlkID0gdGhpcy5hY2NvdW50VHlwZVZhbHVlTGlzdC5nZXRWYWx1ZShhcmdzLm5ld0luZGV4KTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkYWNjb3VudFR5cGVkZXNjciA9IHRoaXMuYWNjb3VudFR5cGVWYWx1ZUxpc3QuZ2V0VGV4dChhcmdzLm5ld0luZGV4KTs7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgYWNjb3VudHR5cGVwaWNrZXJvbm9wZW4oKSB7XHJcblxyXG5cclxuICAgIH1cclxuICAgIHB1YmxpYyBmaW5hbmNpYWxwZXJpb2RwaWNrZXJvbmNoYW5nZShhcmdzOiBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSkge1xyXG5cclxuICAgICAgICB0aGlzLnNlbGVjdGVkZmluYW5jaWFscGVyaW9kSWQgPSB0aGlzLmZpbmFuY2lhbHBlcmlvZFZhbHVlTGlzdC5nZXRWYWx1ZShhcmdzLm5ld0luZGV4KTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkZmluYW5jaWFscGVyaW9kZGVzY3IgPSB0aGlzLmZpbmFuY2lhbHBlcmlvZFZhbHVlTGlzdC5nZXRUZXh0KGFyZ3MubmV3SW5kZXgpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGZpbmFuY2lhbHBlcmlvZHBpY2tlcm9ub3BlbigpIHtcclxuXHJcblxyXG4gICAgfVxyXG4gICAgcHVibGljIHF1ZXJ5dHlwZXBpY2tlcm9uY2hhbmdlKGFyZ3M6IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhKSB7XHJcbiAgICAgICBcclxuXHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZHF1ZXJ5dHlwZUlkID0gdGhpcy5xdWVyeXR5cGVWYWx1ZUxpc3QuZ2V0VmFsdWUoYXJncy5uZXdJbmRleCk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZHF1ZXJ5dHlwZWRlc2NyID0gdGhpcy5xdWVyeXR5cGVWYWx1ZUxpc3QuZ2V0VGV4dChhcmdzLm5ld0luZGV4KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBxdWVyeXR5cGVwaWNrZXJvbm9wZW4oKSB7XHJcbiAgICAgICBcclxuXHJcbiAgICB9XHJcbn0iXX0=