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
var app_globals_1 = require("../app.globals");
var agas_model_1 = require("../agas/agas.model");
var AGASAlertSetupComponent = (function () {
    function AGASAlertSetupComponent(agasalertService, router, homePageService, ngZone) {
        this.agasalertService = agasalertService;
        this.router = router;
        this.homePageService = homePageService;
        this.ngZone = ngZone;
        this.limit = 0;
    }
    AGASAlertSetupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.homePageService.setTitle("GPFS Alert Setup");
        this.homePageService.setShowGoBackButton(false);
        this.homePageService.onGoBackObservable.subscribe(function () {
            _this.ngZone.run(function () {
            });
        });
        this.alerttypedd = this.alerttypedd_ElementRef.nativeElement;
        this.statementTypedd = this.statementTypedd_ElementRef.nativeElement;
        this.statementCodeAndDescriptiondd = this.statementCodeAndDescriptiondd_ElementRef.nativeElement;
        this.alertequestlist$ = this.agasalertService.getAlertRequestList(services_1.BackendService.email);
        this.agasalertService.getAGASAlertTypeList().subscribe(function (res) {
            _this.alertTypeList = [];
            for (var id in res) {
                var result = Object.assign({ id: id }, res[id]);
                _this.alertTypeList.push({ ValueMember: result.name, DisplayMember: result.name });
            }
            _this.alertTypeValueList = new app_globals_1.ValueList(_this.alertTypeList);
            _this.alerttypedd.items = _this.alertTypeValueList;
            _this.alerttypedd.selectedIndex = 0;
            _this.selectedalertTypeId = _this.alertTypeValueList.getValue(0);
            _this.selectedalertTypedescr = _this.alertTypeValueList.getText(0);
            ;
        });
        this.loadstatementTypeEnum();
    };
    AGASAlertSetupComponent.prototype.loadstatementTypeEnum = function () {
        this.statementTypeList = [];
        for (var n in agas_model_1.GPFSStatementType) {
            if (typeof agas_model_1.GPFSStatementType[n] === 'number') {
                this.statementTypeList.push({ ValueMember: agas_model_1.GPFSStatementType[n], DisplayMember: n });
            }
        }
        this.statementTypeValueList = new app_globals_1.ValueList(this.statementTypeList);
        this.statementTypedd.items = this.statementTypeValueList;
        this.statementTypedd.selectedIndex = 0;
        this.selectedstatementTypeId = this.statementTypeValueList.getValue(0);
        this.selectedstatementTypedescr = this.statementTypeValueList.getText(0);
        this.loadstatementitems();
    };
    AGASAlertSetupComponent.prototype.TotalExpenditureBudgetExceeded = function () {
        var requestinfo = { "name": this.selectedalertTypeId, "requiredparam": "None" };
        var loginfo = { "name": this.selectedalertTypedescr, "requiredparam": "None" };
        this.agasalertService.createAlertRequest(requestinfo, loginfo, services_1.BackendService.email)
            .then(function (res) {
            alert("Record Saved Successfully");
        })
            .catch(function (err) {
            alert("An error occurred while creating Search Request.");
        });
    };
    AGASAlertSetupComponent.prototype.BalanceMoreThanSetLimit = function () {
        var requestinfo = {
            "name": this.selectedalertTypedescr,
            "code": this.selectedstatementCodeAndDescriptionId,
            "limit": this.limit,
            "statementType": this.selectedstatementTypeId,
            "statementTypeDescr": this.selectedstatementTypedescr,
            "requiredparam": this.selectedstatementCodeAndDescriptiondescr + " @ " + this.limit + " Limit"
        };
        var loginfo = {
            "name": this.selectedalertTypedescr,
            "code": this.selectedstatementCodeAndDescriptionId,
            "limit": this.limit,
            "statementType": this.selectedstatementTypeId,
            "statementTypeDescr": this.selectedstatementTypedescr,
            "requiredparam": this.selectedstatementCodeAndDescriptiondescr + " @ " + this.limit + " Limit"
        };
        this.agasalertService.createAGASAlertRequest(requestinfo, loginfo, services_1.BackendService.email)
            .then(function (res) {
            alert("Record Saved Successfully");
        })
            .catch(function (err) {
            alert("An error occurred while creating Search Request.");
        });
    };
    AGASAlertSetupComponent.prototype.BalanceLessThanSetLimit = function () {
        var requestinfo = {
            "name": this.selectedalertTypedescr,
            "code": this.selectedstatementCodeAndDescriptionId,
            "limit": this.limit,
            "statementType": this.selectedstatementTypeId,
            "statementTypeDescr": this.selectedstatementTypedescr,
            "requiredparam": this.selectedstatementCodeAndDescriptiondescr + " @ " + this.limit + " Limit"
        };
        var loginfo = {
            "name": this.selectedalertTypedescr,
            "code": this.selectedstatementCodeAndDescriptionId,
            "limit": this.limit,
            "statementType": this.selectedstatementTypeId,
            "statementTypeDescr": this.selectedstatementTypedescr,
            "requiredparam": this.selectedstatementCodeAndDescriptiondescr + " @ " + this.limit + " Limit"
        };
        this.agasalertService.createAGASAlertRequest(requestinfo, loginfo, services_1.BackendService.email)
            .then(function (res) {
            alert("Record Saved Successfully");
        })
            .catch(function (err) {
            alert("An error occurred while creating Search Request.");
        });
    };
    AGASAlertSetupComponent.prototype.cretaterequest = function () {
        console.log("Selected " + this.selectedalertTypeId);
        eval("this." + this.selectedalertTypeId + "()");
    };
    AGASAlertSetupComponent.prototype.alertTypeDDonchange = function (args) {
        this.selectedalertTypeId = this.alertTypeValueList.getValue(args.newIndex);
        this.selectedalertTypedescr = this.alertTypeValueList.getText(args.newIndex);
        ;
    };
    AGASAlertSetupComponent.prototype.statementTypeDDonchange = function (args) {
        this.selectedstatementTypeId = this.statementTypeValueList.getValue(args.newIndex);
        this.selectedstatementTypedescr = this.statementTypeValueList.getText(args.newIndex);
        this.loadstatementitems();
    };
    AGASAlertSetupComponent.prototype.statementCodeAndDescriptionDDonchange = function (args) {
        this.selectedstatementCodeAndDescriptionId = this.statementCodeAndDescriptionValueList.getValue(args.newIndex);
        this.selectedstatementCodeAndDescriptiondescr = this.statementCodeAndDescriptionValueList.getText(args.newIndex);
    };
    AGASAlertSetupComponent.prototype.loadstatementitems = function () {
        var _this = this;
        if (agas_model_1.GPFSStatementType[this.selectedstatementTypeId] == agas_model_1.GPFSStatementType[agas_model_1.GPFSStatementType.BalanceSheet]) {
            this.agasalertService.getBalanceSheetCodesList().subscribe(function (res) {
                _this.balancesheetcodesList = [];
                for (var id in res) {
                    var result = Object.assign({ id: id }, res[id]);
                    _this.balancesheetcodesList.push({ ValueMember: result.code, DisplayMember: result.description });
                }
                _this.statementCodeAndDescriptionValueList = new app_globals_1.ValueList(_this.balancesheetcodesList);
                _this.statementCodeAndDescriptiondd.items = _this.statementCodeAndDescriptionValueList;
                _this.statementCodeAndDescriptiondd.selectedIndex = 0;
                _this.selectedstatementCodeAndDescriptionId = _this.statementCodeAndDescriptionValueList.getValue(0);
                _this.selectedstatementCodeAndDescriptiondescr = _this.statementCodeAndDescriptionValueList.getText(0);
                ;
            });
        }
        if (agas_model_1.GPFSStatementType[this.selectedstatementTypeId] == agas_model_1.GPFSStatementType[agas_model_1.GPFSStatementType.CashFlow]) {
            this.agasalertService.getCashFlowStatementCodesList().subscribe(function (res) {
                _this.cashflowcodesList = [];
                for (var id in res) {
                    var result = Object.assign({ id: id }, res[id]);
                    _this.cashflowcodesList.push({ ValueMember: result.code, DisplayMember: result.description });
                }
                _this.statementCodeAndDescriptionValueList = new app_globals_1.ValueList(_this.cashflowcodesList);
                _this.statementCodeAndDescriptiondd.items = _this.statementCodeAndDescriptionValueList;
                _this.statementCodeAndDescriptiondd.selectedIndex = 0;
                _this.selectedstatementCodeAndDescriptionId = _this.statementCodeAndDescriptionValueList.getValue(0);
                _this.selectedstatementCodeAndDescriptiondescr = _this.statementCodeAndDescriptionValueList.getText(0);
                ;
            });
        }
        if (agas_model_1.GPFSStatementType[this.selectedstatementTypeId] == agas_model_1.GPFSStatementType[agas_model_1.GPFSStatementType.FinancialPerformance]) {
            this.agasalertService.getFinancialPerformanceCodesList().subscribe(function (res) {
                _this.financialperformancecodesList = [];
                for (var id in res) {
                    var result = Object.assign({ id: id }, res[id]);
                    _this.financialperformancecodesList.push({ ValueMember: result.code, DisplayMember: result.description });
                }
                _this.statementCodeAndDescriptionValueList = new app_globals_1.ValueList(_this.financialperformancecodesList);
                _this.statementCodeAndDescriptiondd.items = _this.statementCodeAndDescriptionValueList;
                _this.statementCodeAndDescriptiondd.selectedIndex = 0;
                _this.selectedstatementCodeAndDescriptionId = _this.statementCodeAndDescriptionValueList.getValue(0);
                _this.selectedstatementCodeAndDescriptiondescr = _this.statementCodeAndDescriptionValueList.getText(0);
                ;
            });
        }
    };
    AGASAlertSetupComponent.prototype.ddopen = function () {
    };
    AGASAlertSetupComponent.prototype.gotoback = function () {
        this.router.navigate(["/finagg-search"]);
    };
    AGASAlertSetupComponent.prototype.viewDetail = function (selecteditem) {
        var navigationExtras = {
            queryParams: {
                "name": selecteditem.name,
                "requiredparam": selecteditem.requiredparam,
                "logtime": selecteditem.logtime,
                "requestid": selecteditem.requestid
            }
        };
        this.router.navigate(["agasalerthtml-view"], navigationExtras);
    };
    return AGASAlertSetupComponent;
}());
__decorate([
    core_1.ViewChild("alerttypedd"),
    __metadata("design:type", core_1.ElementRef)
], AGASAlertSetupComponent.prototype, "alerttypedd_ElementRef", void 0);
__decorate([
    core_1.ViewChild("balancesheetcodesdd"),
    __metadata("design:type", core_1.ElementRef)
], AGASAlertSetupComponent.prototype, "balancesheetcodesdd_ElementRef", void 0);
__decorate([
    core_1.ViewChild("cashflowcodesdd"),
    __metadata("design:type", core_1.ElementRef)
], AGASAlertSetupComponent.prototype, "cashflowcodesdd_ElementRef", void 0);
__decorate([
    core_1.ViewChild("financialperformancecodesdd"),
    __metadata("design:type", core_1.ElementRef)
], AGASAlertSetupComponent.prototype, "financialperformancecodesdd_ElementRef", void 0);
__decorate([
    core_1.ViewChild("statementTypedd"),
    __metadata("design:type", core_1.ElementRef)
], AGASAlertSetupComponent.prototype, "statementTypedd_ElementRef", void 0);
__decorate([
    core_1.ViewChild("statementCodeAndDescriptiondd"),
    __metadata("design:type", core_1.ElementRef)
], AGASAlertSetupComponent.prototype, "statementCodeAndDescriptiondd_ElementRef", void 0);
AGASAlertSetupComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "finaggsearchdisplay",
        templateUrl: "agasalertsetup.html"
    }),
    __metadata("design:paramtypes", [agasalert_service_1.AGASAlertService,
        router_1.Router, services_1.HomePageService,
        core_1.NgZone])
], AGASAlertSetupComponent);
exports.AGASAlertSetupComponent = AGASAlertSetupComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdhc2FsZXJ0c2V0dXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWdhc2FsZXJ0c2V0dXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQWlGO0FBRWpGLDBDQUEyRTtBQUMzRSx3Q0FBNkQ7QUFDN0QseURBQXVEO0FBQ3ZELDhDQUEyQztBQUczQyxpREFBdUQ7QUFNdkQsSUFBYSx1QkFBdUI7SUE2Q2hDLGlDQUFvQixnQkFBa0MsRUFDMUMsTUFBYyxFQUFTLGVBQWdDLEVBQ3ZELE1BQWM7UUFGTixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQzFDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBUyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDdkQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUV0QixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztJQUVuQixDQUFDO0lBQ0QsMENBQVEsR0FBUjtRQUFBLGlCQWlDQztRQWhDSSxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxlQUFlLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUM7WUFDOUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFFaEIsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGFBQWEsQ0FBQztRQUU3RCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxhQUFhLENBQUM7UUFDckUsSUFBSSxDQUFDLDZCQUE2QixHQUFHLElBQUksQ0FBQyx3Q0FBd0MsQ0FBQyxhQUFhLENBQUM7UUFDakcsSUFBSSxDQUFDLGdC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LGVBQWUsRUFBRSxZQUFZLENBQUMsYUFBYTtnQkFDM0MsU0FBUyxFQUFFLFlBQVksQ0FBQyxPQUFPO2dCQUMvQixXQUFXLEVBQUUsWUFBWSxDQUFDLFNBQVM7YUFDdEM7U0FDSixDQUFDO1FBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUNMLDhCQUFDO0FBQUQsQ0FBQyxBQXJRRCxJQXFRQztBQWxRNkI7SUFBekIsZ0JBQVMsQ0FBQyxhQUFhLENBQUM7OEJBQXlCLGlCQUFVO3VFQUFDO0FBTzNCO0lBQWpDLGdCQUFTLENBQUMscUJBQXFCLENBQUM7OEJBQWlDLGlCQUFVOytFQUFDO0FBTy9DO0lBQTdCLGdCQUFTLENBQUMsaUJBQWlCLENBQUM7OEJBQTZCLGlCQUFVOzJFQUFDO0FBTzNCO0lBQXpDLGdCQUFTLENBQUMsNkJBQTZCLENBQUM7OEJBQXlDLGlCQUFVO3VGQUFDO0FBTy9EO0lBQTdCLGdCQUFTLENBQUMsaUJBQWlCLENBQUM7OEJBQTZCLGlCQUFVOzJFQUFDO0FBT3pCO0lBQTNDLGdCQUFTLENBQUMsK0JBQStCLENBQUM7OEJBQTJDLGlCQUFVO3lGQUFDO0FBdEN4Rix1QkFBdUI7SUFMbkMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUscUJBQXFCO1FBQy9CLFdBQVcsRUFBRSxxQkFBcUI7S0FDckMsQ0FBQztxQ0E4Q3dDLG9DQUFnQjtRQUNsQyxlQUFNLEVBQTBCLDBCQUFlO1FBQy9DLGFBQU07R0EvQ2pCLHVCQUF1QixDQXFRbkM7QUFyUVksMERBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE5nWm9uZSwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlLCBOYXZpZ2F0aW9uRXh0cmFzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UsSG9tZVBhZ2VTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzXCI7XHJcbmltcG9ydCB7IEFHQVNBbGVydFNlcnZpY2UgfSBmcm9tIFwiLi9hZ2FzYWxlcnQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBWYWx1ZUxpc3QgfSBmcm9tIFwiLi4vYXBwLmdsb2JhbHNcIjtcclxuaW1wb3J0IHsgU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWRyb3AtZG93blwiO1xyXG5pbXBvcnQgeyBEcm9wRG93biB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZHJvcC1kb3duXCI7XHJcbmltcG9ydCB7IEdQRlNTdGF0ZW1lbnRUeXBlIH0gZnJvbSBcIi4uL2FnYXMvYWdhcy5tb2RlbFwiO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogXCJmaW5hZ2dzZWFyY2hkaXNwbGF5XCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJhZ2FzYWxlcnRzZXR1cC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIEFHQVNBbGVydFNldHVwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHB1YmxpYyBhbGVydFR5cGVMaXN0OiBhbnlbXTtcclxuICAgIHB1YmxpYyBhbGVydFR5cGVWYWx1ZUxpc3Q6IFZhbHVlTGlzdDtcclxuICAgIEBWaWV3Q2hpbGQoXCJhbGVydHR5cGVkZFwiKSBhbGVydHR5cGVkZF9FbGVtZW50UmVmOiBFbGVtZW50UmVmO1xyXG4gICAgYWxlcnR0eXBlZGQ6IERyb3BEb3duO1xyXG4gICAgcHVibGljIHNlbGVjdGVkYWxlcnRUeXBlSWQ6IHN0cmluZztcclxuICAgIHB1YmxpYyBzZWxlY3RlZGFsZXJ0VHlwZWRlc2NyOiBzdHJpbmc7XHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIHB1YmxpYyBiYWxhbmNlc2hlZXRjb2Rlc0xpc3Q6IGFueVtdO1xyXG4gICAgcHVibGljIGJhbGFuY2VzaGVldGNvZGVzVmFsdWVMaXN0OiBWYWx1ZUxpc3Q7XHJcbiAgICBAVmlld0NoaWxkKFwiYmFsYW5jZXNoZWV0Y29kZXNkZFwiKSBiYWxhbmNlc2hlZXRjb2Rlc2RkX0VsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XHJcbiAgICBiYWxhbmNlc2hlZXRjb2Rlc2RkOiBEcm9wRG93bjtcclxuICAgIHB1YmxpYyBzZWxlY3RlZGJhbGFuY2VzaGVldGNvZGU6IHN0cmluZztcclxuICAgIHB1YmxpYyBzZWxlY3RlZGJhbGFuY2VzaGVldGNvZGVkZXNjcjogc3RyaW5nO1xyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgcHVibGljIGNhc2hmbG93Y29kZXNMaXN0OiBhbnlbXTtcclxuICAgIHB1YmxpYyBjYXNoZmxvd2NvZGVzVmFsdWVMaXN0OiBWYWx1ZUxpc3Q7XHJcbiAgICBAVmlld0NoaWxkKFwiY2FzaGZsb3djb2Rlc2RkXCIpIGNhc2hmbG93Y29kZXNkZF9FbGVtZW50UmVmOiBFbGVtZW50UmVmO1xyXG4gICAgY2FzaGZsb3djb2Rlc2RkOiBEcm9wRG93bjtcclxuICAgIHB1YmxpYyBzZWxlY3RlZGNhc2hmbG93Y29kZTogc3RyaW5nO1xyXG4gICAgcHVibGljIHNlbGVjdGVkY2FzaGZsb3djb2RlZGVzY3I6IHN0cmluZztcclxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgcHVibGljIGZpbmFuY2lhbHBlcmZvcm1hbmNlY29kZXNMaXN0OiBhbnlbXTtcclxuICAgIHB1YmxpYyBmaW5hbmNpYWxwZXJmb3JtYW5jZWNvZGVzVmFsdWVMaXN0OiBWYWx1ZUxpc3Q7XHJcbiAgICBAVmlld0NoaWxkKFwiZmluYW5jaWFscGVyZm9ybWFuY2Vjb2Rlc2RkXCIpIGZpbmFuY2lhbHBlcmZvcm1hbmNlY29kZXNkZF9FbGVtZW50UmVmOiBFbGVtZW50UmVmO1xyXG4gICAgZmluYW5jaWFscGVyZm9ybWFuY2Vjb2Rlc2RkOiBEcm9wRG93bjtcclxuICAgIHB1YmxpYyBzZWxlY3RlZGZpbmFuY2lhbHBlcmZvcm1hbmNlY29kZTogc3RyaW5nO1xyXG4gICAgcHVibGljIHNlbGVjdGVkZmluYW5jaWFscGVyZm9ybWFuY2Vjb2RlZGVzY3I6IHN0cmluZztcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBwdWJsaWMgc3RhdGVtZW50VHlwZUxpc3Q6IGFueVtdO1xyXG4gICAgcHVibGljIHN0YXRlbWVudFR5cGVWYWx1ZUxpc3Q6IFZhbHVlTGlzdDtcclxuICAgIEBWaWV3Q2hpbGQoXCJzdGF0ZW1lbnRUeXBlZGRcIikgc3RhdGVtZW50VHlwZWRkX0VsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XHJcbiAgICBzdGF0ZW1lbnRUeXBlZGQ6IERyb3BEb3duO1xyXG4gICAgcHVibGljIHNlbGVjdGVkc3RhdGVtZW50VHlwZUlkOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgc2VsZWN0ZWRzdGF0ZW1lbnRUeXBlZGVzY3I6IHN0cmluZztcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBwdWJsaWMgc3RhdGVtZW50Q29kZUFuZERlc2NyaXB0aW9uTGlzdDogYW55W107XHJcbiAgICBwdWJsaWMgc3RhdGVtZW50Q29kZUFuZERlc2NyaXB0aW9uVmFsdWVMaXN0OiBWYWx1ZUxpc3Q7XHJcbiAgICBAVmlld0NoaWxkKFwic3RhdGVtZW50Q29kZUFuZERlc2NyaXB0aW9uZGRcIikgc3RhdGVtZW50Q29kZUFuZERlc2NyaXB0aW9uZGRfRWxlbWVudFJlZjogRWxlbWVudFJlZjtcclxuICAgIHN0YXRlbWVudENvZGVBbmREZXNjcmlwdGlvbmRkOiBEcm9wRG93bjtcclxuICAgIHB1YmxpYyBzZWxlY3RlZHN0YXRlbWVudENvZGVBbmREZXNjcmlwdGlvbklkOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgc2VsZWN0ZWRzdGF0ZW1lbnRDb2RlQW5kRGVzY3JpcHRpb25kZXNjcjogc3RyaW5nO1xyXG4gICAgbGltaXQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyBhbGVydGVxdWVzdGxpc3QkOiBPYnNlcnZhYmxlPGFueT47XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhZ2FzYWxlcnRTZXJ2aWNlOiBBR0FTQWxlcnRTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIscHJpdmF0ZSBob21lUGFnZVNlcnZpY2U6IEhvbWVQYWdlU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIG5nWm9uZTogTmdab25lXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLmxpbWl0ID0gMDtcclxuXHJcbiAgICB9XHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICAgdGhpcy5ob21lUGFnZVNlcnZpY2Uuc2V0VGl0bGUoXCJHUEZTIEFsZXJ0IFNldHVwXCIpO1xyXG4gICAgICAgICB0aGlzLmhvbWVQYWdlU2VydmljZS5zZXRTaG93R29CYWNrQnV0dG9uKGZhbHNlKTtcclxuICAgICAgICB0aGlzLmhvbWVQYWdlU2VydmljZS5vbkdvQmFja09ic2VydmFibGUuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgLy8gdGhpcy5nb2JhY2t0b3Jlc3VsdGxpc3QoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmFsZXJ0dHlwZWRkID0gdGhpcy5hbGVydHR5cGVkZF9FbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICBcclxuICAgICAgICB0aGlzLnN0YXRlbWVudFR5cGVkZCA9IHRoaXMuc3RhdGVtZW50VHlwZWRkX0VsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICAgICAgICB0aGlzLnN0YXRlbWVudENvZGVBbmREZXNjcmlwdGlvbmRkID0gdGhpcy5zdGF0ZW1lbnRDb2RlQW5kRGVzY3JpcHRpb25kZF9FbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5hbGVydGVxdWVzdGxpc3QkID0gPGFueT50aGlzLmFnYXNhbGVydFNlcnZpY2UuZ2V0QWxlcnRSZXF1ZXN0TGlzdChCYWNrZW5kU2VydmljZS5lbWFpbCk7XHJcbiAgICAgICAgdGhpcy5hZ2FzYWxlcnRTZXJ2aWNlLmdldEFHQVNBbGVydFR5cGVMaXN0KCkuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYWxlcnRUeXBlTGlzdCA9IFtdO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaWQgaW4gcmVzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gKDxhbnk+T2JqZWN0KS5hc3NpZ24oeyBpZDogaWQgfSwgcmVzW2lkXSk7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmFjY291bnRUeXBlTGlzdC5wdXNoKHsgaWQ6IHJlc3VsdC5pZCwgZGVzY3JpcHRpb246IHJlc3VsdC5kZXNjcmlwdGlvbiwgdG9TdHJpbmc6ICgpID0+IHsgcmV0dXJuIHJlc3VsdC5kZXNjcmlwdGlvbjsgfSB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRUeXBlTGlzdC5wdXNoKHsgVmFsdWVNZW1iZXI6IHJlc3VsdC5uYW1lLCBEaXNwbGF5TWVtYmVyOiByZXN1bHQubmFtZSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmFsZXJ0VHlwZVZhbHVlTGlzdCA9IG5ldyBWYWx1ZUxpc3QodGhpcy5hbGVydFR5cGVMaXN0KTtcclxuICAgICAgICAgICAgdGhpcy5hbGVydHR5cGVkZC5pdGVtcyA9IHRoaXMuYWxlcnRUeXBlVmFsdWVMaXN0O1xyXG4gICAgICAgICAgICB0aGlzLmFsZXJ0dHlwZWRkLnNlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkYWxlcnRUeXBlSWQgPSB0aGlzLmFsZXJ0VHlwZVZhbHVlTGlzdC5nZXRWYWx1ZSgwKTtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZGFsZXJ0VHlwZWRlc2NyID0gdGhpcy5hbGVydFR5cGVWYWx1ZUxpc3QuZ2V0VGV4dCgwKTs7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICBcclxuXHJcbiAgICAgICAgdGhpcy5sb2Fkc3RhdGVtZW50VHlwZUVudW0oKTtcclxuXHJcblxyXG4gICAgfVxyXG4gICAgbG9hZHN0YXRlbWVudFR5cGVFbnVtKCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGVtZW50VHlwZUxpc3QgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBuIGluIEdQRlNTdGF0ZW1lbnRUeXBlKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgR1BGU1N0YXRlbWVudFR5cGVbbl0gPT09ICdudW1iZXInKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZW1lbnRUeXBlTGlzdC5wdXNoKHsgVmFsdWVNZW1iZXI6IEdQRlNTdGF0ZW1lbnRUeXBlW25dLCBEaXNwbGF5TWVtYmVyOiBuIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3RhdGVtZW50VHlwZVZhbHVlTGlzdCA9IG5ldyBWYWx1ZUxpc3QodGhpcy5zdGF0ZW1lbnRUeXBlTGlzdCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZW1lbnRUeXBlZGQuaXRlbXMgPSB0aGlzLnN0YXRlbWVudFR5cGVWYWx1ZUxpc3Q7XHJcbiAgICAgICAgdGhpcy5zdGF0ZW1lbnRUeXBlZGQuc2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZHN0YXRlbWVudFR5cGVJZCA9IHRoaXMuc3RhdGVtZW50VHlwZVZhbHVlTGlzdC5nZXRWYWx1ZSgwKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkc3RhdGVtZW50VHlwZWRlc2NyID0gdGhpcy5zdGF0ZW1lbnRUeXBlVmFsdWVMaXN0LmdldFRleHQoMCk7XHJcbiAgICAgICAgdGhpcy5sb2Fkc3RhdGVtZW50aXRlbXMoKTtcclxuICAgIH1cclxuICAgXHJcbiAgICBUb3RhbEV4cGVuZGl0dXJlQnVkZ2V0RXhjZWVkZWQoKSB7XHJcbiAgICAgICAgdmFyIHJlcXVlc3RpbmZvID0geyBcIm5hbWVcIjogdGhpcy5zZWxlY3RlZGFsZXJ0VHlwZUlkLCBcInJlcXVpcmVkcGFyYW1cIjogXCJOb25lXCIgfTtcclxuICAgICAgICB2YXIgbG9naW5mbyA9IHsgXCJuYW1lXCI6IHRoaXMuc2VsZWN0ZWRhbGVydFR5cGVkZXNjciwgXCJyZXF1aXJlZHBhcmFtXCI6IFwiTm9uZVwiIH07XHJcbiAgICAgICAgdGhpcy5hZ2FzYWxlcnRTZXJ2aWNlLmNyZWF0ZUFsZXJ0UmVxdWVzdChyZXF1ZXN0aW5mbywgbG9naW5mbywgQmFja2VuZFNlcnZpY2UuZW1haWwpXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIlJlY29yZCBTYXZlZCBTdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBjcmVhdGluZyBTZWFyY2ggUmVxdWVzdC5cIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgQmFsYW5jZU1vcmVUaGFuU2V0TGltaXQoKSB7XHJcbiAgICAgICAgdmFyIHJlcXVlc3RpbmZvID0ge1xyXG4gICAgICAgICAgICBcIm5hbWVcIjogdGhpcy5zZWxlY3RlZGFsZXJ0VHlwZWRlc2NyLFxyXG4gICAgICAgICAgICBcImNvZGVcIjogdGhpcy5zZWxlY3RlZHN0YXRlbWVudENvZGVBbmREZXNjcmlwdGlvbklkLFxyXG4gICAgICAgICAgICBcImxpbWl0XCI6IHRoaXMubGltaXQsXHJcbiAgICAgICAgICAgIFwic3RhdGVtZW50VHlwZVwiOiB0aGlzLnNlbGVjdGVkc3RhdGVtZW50VHlwZUlkLFxyXG4gICAgICAgICAgICBcInN0YXRlbWVudFR5cGVEZXNjclwiOiB0aGlzLnNlbGVjdGVkc3RhdGVtZW50VHlwZWRlc2NyLFxyXG4gICAgICAgICAgICBcInJlcXVpcmVkcGFyYW1cIjogYCR7dGhpcy5zZWxlY3RlZHN0YXRlbWVudENvZGVBbmREZXNjcmlwdGlvbmRlc2NyfSBAICR7dGhpcy5saW1pdH0gTGltaXRgXHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgbG9naW5mbyA9IHtcclxuICAgICAgICAgICAgXCJuYW1lXCI6IHRoaXMuc2VsZWN0ZWRhbGVydFR5cGVkZXNjcixcclxuICAgICAgICAgICAgXCJjb2RlXCI6IHRoaXMuc2VsZWN0ZWRzdGF0ZW1lbnRDb2RlQW5kRGVzY3JpcHRpb25JZCxcclxuICAgICAgICAgICAgXCJsaW1pdFwiOiB0aGlzLmxpbWl0LFxyXG4gICAgICAgICAgICBcInN0YXRlbWVudFR5cGVcIjogdGhpcy5zZWxlY3RlZHN0YXRlbWVudFR5cGVJZCxcclxuICAgICAgICAgICAgXCJzdGF0ZW1lbnRUeXBlRGVzY3JcIjogdGhpcy5zZWxlY3RlZHN0YXRlbWVudFR5cGVkZXNjcixcclxuICAgICAgICAgICAgXCJyZXF1aXJlZHBhcmFtXCI6IGAke3RoaXMuc2VsZWN0ZWRzdGF0ZW1lbnRDb2RlQW5kRGVzY3JpcHRpb25kZXNjcn0gQCAke3RoaXMubGltaXR9IExpbWl0YFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5hZ2FzYWxlcnRTZXJ2aWNlLmNyZWF0ZUFHQVNBbGVydFJlcXVlc3QocmVxdWVzdGluZm8sIGxvZ2luZm8sIEJhY2tlbmRTZXJ2aWNlLmVtYWlsKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJSZWNvcmQgU2F2ZWQgU3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgY3JlYXRpbmcgU2VhcmNoIFJlcXVlc3QuXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIEJhbGFuY2VMZXNzVGhhblNldExpbWl0KCkge1xyXG4gICAgICAgIHZhciByZXF1ZXN0aW5mbyA9IHtcclxuICAgICAgICAgICAgXCJuYW1lXCI6IHRoaXMuc2VsZWN0ZWRhbGVydFR5cGVkZXNjcixcclxuICAgICAgICAgICAgXCJjb2RlXCI6IHRoaXMuc2VsZWN0ZWRzdGF0ZW1lbnRDb2RlQW5kRGVzY3JpcHRpb25JZCxcclxuICAgICAgICAgICAgXCJsaW1pdFwiOiB0aGlzLmxpbWl0LFxyXG4gICAgICAgICAgICBcInN0YXRlbWVudFR5cGVcIjogdGhpcy5zZWxlY3RlZHN0YXRlbWVudFR5cGVJZCxcclxuICAgICAgICAgICAgXCJzdGF0ZW1lbnRUeXBlRGVzY3JcIjogdGhpcy5zZWxlY3RlZHN0YXRlbWVudFR5cGVkZXNjcixcclxuICAgICAgICAgICAgXCJyZXF1aXJlZHBhcmFtXCI6IGAke3RoaXMuc2VsZWN0ZWRzdGF0ZW1lbnRDb2RlQW5kRGVzY3JpcHRpb25kZXNjcn0gQCAke3RoaXMubGltaXR9IExpbWl0YFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIGxvZ2luZm8gPSB7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOiB0aGlzLnNlbGVjdGVkYWxlcnRUeXBlZGVzY3IsXHJcbiAgICAgICAgICAgIFwiY29kZVwiOiB0aGlzLnNlbGVjdGVkc3RhdGVtZW50Q29kZUFuZERlc2NyaXB0aW9uSWQsXHJcbiAgICAgICAgICAgIFwibGltaXRcIjogdGhpcy5saW1pdCxcclxuICAgICAgICAgICAgXCJzdGF0ZW1lbnRUeXBlXCI6IHRoaXMuc2VsZWN0ZWRzdGF0ZW1lbnRUeXBlSWQsXHJcbiAgICAgICAgICAgIFwic3RhdGVtZW50VHlwZURlc2NyXCI6IHRoaXMuc2VsZWN0ZWRzdGF0ZW1lbnRUeXBlZGVzY3IsXHJcbiAgICAgICAgICAgIFwicmVxdWlyZWRwYXJhbVwiOiBgJHt0aGlzLnNlbGVjdGVkc3RhdGVtZW50Q29kZUFuZERlc2NyaXB0aW9uZGVzY3J9IEAgJHt0aGlzLmxpbWl0fSBMaW1pdGBcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuYWdhc2FsZXJ0U2VydmljZS5jcmVhdGVBR0FTQWxlcnRSZXF1ZXN0KHJlcXVlc3RpbmZvLCBsb2dpbmZvLCBCYWNrZW5kU2VydmljZS5lbWFpbClcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiUmVjb3JkIFNhdmVkIFN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIGNyZWF0aW5nIFNlYXJjaCBSZXF1ZXN0LlwiKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjcmV0YXRlcmVxdWVzdCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNlbGVjdGVkIFwiICsgdGhpcy5zZWxlY3RlZGFsZXJ0VHlwZUlkKTtcclxuICAgICAgICBldmFsKFwidGhpcy5cIiArIHRoaXMuc2VsZWN0ZWRhbGVydFR5cGVJZCArIFwiKClcIik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgYWxlcnRUeXBlRERvbmNoYW5nZShhcmdzOiBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSkge1xyXG5cclxuICAgICAgICB0aGlzLnNlbGVjdGVkYWxlcnRUeXBlSWQgPSB0aGlzLmFsZXJ0VHlwZVZhbHVlTGlzdC5nZXRWYWx1ZShhcmdzLm5ld0luZGV4KTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkYWxlcnRUeXBlZGVzY3IgPSB0aGlzLmFsZXJ0VHlwZVZhbHVlTGlzdC5nZXRUZXh0KGFyZ3MubmV3SW5kZXgpOztcclxuICAgIH1cclxuICBcclxuICAgXHJcbiAgIFxyXG4gICAgcHVibGljIHN0YXRlbWVudFR5cGVERG9uY2hhbmdlKGFyZ3M6IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRzdGF0ZW1lbnRUeXBlSWQgPSB0aGlzLnN0YXRlbWVudFR5cGVWYWx1ZUxpc3QuZ2V0VmFsdWUoYXJncy5uZXdJbmRleCk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZHN0YXRlbWVudFR5cGVkZXNjciA9IHRoaXMuc3RhdGVtZW50VHlwZVZhbHVlTGlzdC5nZXRUZXh0KGFyZ3MubmV3SW5kZXgpO1xyXG4gICAgICAgIHRoaXMubG9hZHN0YXRlbWVudGl0ZW1zKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGVtZW50Q29kZUFuZERlc2NyaXB0aW9uRERvbmNoYW5nZShhcmdzOiBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSkge1xyXG5cclxuICAgICAgICB0aGlzLnNlbGVjdGVkc3RhdGVtZW50Q29kZUFuZERlc2NyaXB0aW9uSWQgPSB0aGlzLnN0YXRlbWVudENvZGVBbmREZXNjcmlwdGlvblZhbHVlTGlzdC5nZXRWYWx1ZShhcmdzLm5ld0luZGV4KTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkc3RhdGVtZW50Q29kZUFuZERlc2NyaXB0aW9uZGVzY3IgPSB0aGlzLnN0YXRlbWVudENvZGVBbmREZXNjcmlwdGlvblZhbHVlTGlzdC5nZXRUZXh0KGFyZ3MubmV3SW5kZXgpO1xyXG5cclxuICAgIH1cclxuICAgIGxvYWRzdGF0ZW1lbnRpdGVtcygpIHtcclxuICAgICAgIFxyXG4gICAgICAgIGlmIChHUEZTU3RhdGVtZW50VHlwZVt0aGlzLnNlbGVjdGVkc3RhdGVtZW50VHlwZUlkXSA9PSBHUEZTU3RhdGVtZW50VHlwZVtHUEZTU3RhdGVtZW50VHlwZS5CYWxhbmNlU2hlZXRdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWdhc2FsZXJ0U2VydmljZS5nZXRCYWxhbmNlU2hlZXRDb2Rlc0xpc3QoKS5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmFsYW5jZXNoZWV0Y29kZXNMaXN0ID0gW107XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaWQgaW4gcmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9ICg8YW55Pk9iamVjdCkuYXNzaWduKHsgaWQ6IGlkIH0sIHJlc1tpZF0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJhbGFuY2VzaGVldGNvZGVzTGlzdC5wdXNoKHsgVmFsdWVNZW1iZXI6IHJlc3VsdC5jb2RlLCBEaXNwbGF5TWVtYmVyOiByZXN1bHQuZGVzY3JpcHRpb24gfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlbWVudENvZGVBbmREZXNjcmlwdGlvblZhbHVlTGlzdCA9IG5ldyBWYWx1ZUxpc3QodGhpcy5iYWxhbmNlc2hlZXRjb2Rlc0xpc3QpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZW1lbnRDb2RlQW5kRGVzY3JpcHRpb25kZC5pdGVtcyA9IHRoaXMuc3RhdGVtZW50Q29kZUFuZERlc2NyaXB0aW9uVmFsdWVMaXN0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZW1lbnRDb2RlQW5kRGVzY3JpcHRpb25kZC5zZWxlY3RlZEluZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRzdGF0ZW1lbnRDb2RlQW5kRGVzY3JpcHRpb25JZCA9IHRoaXMuc3RhdGVtZW50Q29kZUFuZERlc2NyaXB0aW9uVmFsdWVMaXN0LmdldFZhbHVlKDApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZHN0YXRlbWVudENvZGVBbmREZXNjcmlwdGlvbmRlc2NyID0gdGhpcy5zdGF0ZW1lbnRDb2RlQW5kRGVzY3JpcHRpb25WYWx1ZUxpc3QuZ2V0VGV4dCgwKTs7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKEdQRlNTdGF0ZW1lbnRUeXBlW3RoaXMuc2VsZWN0ZWRzdGF0ZW1lbnRUeXBlSWRdID09IEdQRlNTdGF0ZW1lbnRUeXBlW0dQRlNTdGF0ZW1lbnRUeXBlLkNhc2hGbG93XSkge1xyXG4gICAgICAgICAgICB0aGlzLmFnYXNhbGVydFNlcnZpY2UuZ2V0Q2FzaEZsb3dTdGF0ZW1lbnRDb2Rlc0xpc3QoKS5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FzaGZsb3djb2Rlc0xpc3QgPSBbXTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpZCBpbiByZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gKDxhbnk+T2JqZWN0KS5hc3NpZ24oeyBpZDogaWQgfSwgcmVzW2lkXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5hY2NvdW50VHlwZUxpc3QucHVzaCh7IGlkOiByZXN1bHQuaWQsIGRlc2NyaXB0aW9uOiByZXN1bHQuZGVzY3JpcHRpb24sIHRvU3RyaW5nOiAoKSA9PiB7IHJldHVybiByZXN1bHQuZGVzY3JpcHRpb247IH0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXNoZmxvd2NvZGVzTGlzdC5wdXNoKHsgVmFsdWVNZW1iZXI6IHJlc3VsdC5jb2RlLCBEaXNwbGF5TWVtYmVyOiByZXN1bHQuZGVzY3JpcHRpb24gfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmNhc2hmbG93Y29kZXNWYWx1ZUxpc3QgPSBuZXcgVmFsdWVMaXN0KHRoaXMuY2FzaGZsb3djb2Rlc0xpc3QpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZW1lbnRDb2RlQW5kRGVzY3JpcHRpb25WYWx1ZUxpc3QgPSBuZXcgVmFsdWVMaXN0KHRoaXMuY2FzaGZsb3djb2Rlc0xpc3QpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZW1lbnRDb2RlQW5kRGVzY3JpcHRpb25kZC5pdGVtcyA9IHRoaXMuc3RhdGVtZW50Q29kZUFuZERlc2NyaXB0aW9uVmFsdWVMaXN0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZW1lbnRDb2RlQW5kRGVzY3JpcHRpb25kZC5zZWxlY3RlZEluZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRzdGF0ZW1lbnRDb2RlQW5kRGVzY3JpcHRpb25JZCA9IHRoaXMuc3RhdGVtZW50Q29kZUFuZERlc2NyaXB0aW9uVmFsdWVMaXN0LmdldFZhbHVlKDApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZHN0YXRlbWVudENvZGVBbmREZXNjcmlwdGlvbmRlc2NyID0gdGhpcy5zdGF0ZW1lbnRDb2RlQW5kRGVzY3JpcHRpb25WYWx1ZUxpc3QuZ2V0VGV4dCgwKTs7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKEdQRlNTdGF0ZW1lbnRUeXBlW3RoaXMuc2VsZWN0ZWRzdGF0ZW1lbnRUeXBlSWRdID09IEdQRlNTdGF0ZW1lbnRUeXBlW0dQRlNTdGF0ZW1lbnRUeXBlLkZpbmFuY2lhbFBlcmZvcm1hbmNlXSkge1xyXG4gICAgICAgICAgICB0aGlzLmFnYXNhbGVydFNlcnZpY2UuZ2V0RmluYW5jaWFsUGVyZm9ybWFuY2VDb2Rlc0xpc3QoKS5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmluYW5jaWFscGVyZm9ybWFuY2Vjb2Rlc0xpc3QgPSBbXTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpZCBpbiByZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gKDxhbnk+T2JqZWN0KS5hc3NpZ24oeyBpZDogaWQgfSwgcmVzW2lkXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maW5hbmNpYWxwZXJmb3JtYW5jZWNvZGVzTGlzdC5wdXNoKHsgVmFsdWVNZW1iZXI6IHJlc3VsdC5jb2RlLCBEaXNwbGF5TWVtYmVyOiByZXN1bHQuZGVzY3JpcHRpb24gfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZW1lbnRDb2RlQW5kRGVzY3JpcHRpb25WYWx1ZUxpc3QgPSBuZXcgVmFsdWVMaXN0KHRoaXMuZmluYW5jaWFscGVyZm9ybWFuY2Vjb2Rlc0xpc3QpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZW1lbnRDb2RlQW5kRGVzY3JpcHRpb25kZC5pdGVtcyA9IHRoaXMuc3RhdGVtZW50Q29kZUFuZERlc2NyaXB0aW9uVmFsdWVMaXN0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZW1lbnRDb2RlQW5kRGVzY3JpcHRpb25kZC5zZWxlY3RlZEluZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRzdGF0ZW1lbnRDb2RlQW5kRGVzY3JpcHRpb25JZCA9IHRoaXMuc3RhdGVtZW50Q29kZUFuZERlc2NyaXB0aW9uVmFsdWVMaXN0LmdldFZhbHVlKDApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZHN0YXRlbWVudENvZGVBbmREZXNjcmlwdGlvbmRlc2NyID0gdGhpcy5zdGF0ZW1lbnRDb2RlQW5kRGVzY3JpcHRpb25WYWx1ZUxpc3QuZ2V0VGV4dCgwKTs7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgcHVibGljIGRkb3BlbigpIHtcclxuXHJcblxyXG4gICAgfVxyXG4gICAgcHVibGljIGdvdG9iYWNrKCkge1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9maW5hZ2ctc2VhcmNoXCJdKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyB2aWV3RGV0YWlsKHNlbGVjdGVkaXRlbTogYW55KSB7XHJcbiAgICAgICAgbGV0IG5hdmlnYXRpb25FeHRyYXM6IE5hdmlnYXRpb25FeHRyYXMgPSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogc2VsZWN0ZWRpdGVtLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBcInJlcXVpcmVkcGFyYW1cIjogc2VsZWN0ZWRpdGVtLnJlcXVpcmVkcGFyYW0sXHJcbiAgICAgICAgICAgICAgICBcImxvZ3RpbWVcIjogc2VsZWN0ZWRpdGVtLmxvZ3RpbWUsXHJcbiAgICAgICAgICAgICAgICBcInJlcXVlc3RpZFwiOiBzZWxlY3RlZGl0ZW0ucmVxdWVzdGlkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImFnYXNhbGVydGh0bWwtdmlld1wiXSwgbmF2aWdhdGlvbkV4dHJhcyk7XHJcbiAgICB9XHJcbn0iXX0=