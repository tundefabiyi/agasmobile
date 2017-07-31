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
var AGASFinAggInfoDetailComponent = (function () {
    function AGASFinAggInfoDetailComponent(router, route, agasdataService, homePageService, ngZone) {
        this.router = router;
        this.route = route;
        this.agasdataService = agasdataService;
        this.homePageService = homePageService;
        this.ngZone = ngZone;
    }
    AGASFinAggInfoDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.homePageService.setTitle("GPFS Items Detail");
        this.homePageService.setShowGoBackButton(true);
        this.homePageService.onGoBackObservable.subscribe(function () {
            _this.ngZone.run(function () {
                _this.gobacktoresultlist();
            });
        });
        this.notetypedd = this.notetypedd_ElementRef.nativeElement;
        this.segmenttypedd = this.segmenttypedd_ElementRef.nativeElement;
        this.route.queryParams.subscribe(function (params) {
            _this.financialyeardesc = params["financialyeardesc"];
            _this.accounttypedesc = params["accounttypedesc"];
            _this.financialperiodId = params["financialperiodId"];
            _this.agasrequestid = params["agasrequestid"];
            _this.code = params["code"];
            _this.description = params["Description"];
            _this.currentbalance = params["currentbalance"];
            _this.finalbudget = params["finalbudget"];
            _this.initialbudget = params["initialbudget"];
            _this.supplementarybudget = params["supplementarybudget"];
            _this.virement = params["virement"];
            _this.totaldebit = params["totaldebit"];
            _this.totalcredit = params["totalcredit"];
            _this.totalcredit = params["totalcredit"];
            _this.displaytime = params["displaytime"];
            _this.agasdataService.getGPFSNoteRequestList(_this.agasrequestid, _this.code).subscribe(function (res) {
                _this.noterequestList = [];
                for (var id in res) {
                    var result = Object.assign({ id: id }, res[id]);
                    _this.noterequestList.push(result);
                }
            });
        });
        this.agasdataService.getCOASegmentTypeList().subscribe(function (res) {
            _this.segmenttypeList = [];
            for (var id in res) {
                var result = Object.assign({ id: id }, res[id]);
                _this.segmenttypeList.push({ ValueMember: result.id, DisplayMember: result.description });
            }
            _this.segmenttypeValueList = new app_globals_1.ValueList(_this.segmenttypeList);
            _this.segmenttypedd.items = _this.segmenttypeValueList;
            _this.segmenttypedd.selectedIndex = 0;
            _this.selectedsegmenttypeId = _this.segmenttypeValueList.getValue(0);
            _this.selectedsegmenttypedescr = _this.segmenttypeValueList.getText(0);
        });
        this.agasdataService.getGPFSNoteTypeList().subscribe(function (res) {
            _this.notetypeList = [];
            for (var id in res) {
                var result = Object.assign({ id: id }, res[id]);
                _this.notetypeList.push({ ValueMember: result.id, DisplayMember: result.description });
            }
            _this.notetypeValueList = new app_globals_1.ValueList(_this.notetypeList);
            _this.notetypedd.items = _this.notetypeValueList;
            _this.notetypedd.selectedIndex = 0;
            _this.selectednotetypeId = _this.notetypeValueList.getValue(0);
            _this.selectednotetypedescr = _this.notetypeValueList.getText(0);
        });
    };
    AGASFinAggInfoDetailComponent.prototype.segmenttypeonchange = function (args) {
        this.selectedsegmenttypeId = this.segmenttypeValueList.getValue(args.newIndex);
        this.selectedsegmenttypedescr = this.segmenttypeValueList.getText(args.newIndex);
    };
    AGASFinAggInfoDetailComponent.prototype.segmenttypeonopen = function () {
    };
    AGASFinAggInfoDetailComponent.prototype.notetypeonchange = function (args) {
        this.selectednotetypeId = this.notetypeValueList.getValue(args.newIndex);
        this.selectednotetypedescr = this.notetypeValueList.getText(args.newIndex);
    };
    AGASFinAggInfoDetailComponent.prototype.notetypeonopen = function () {
    };
    AGASFinAggInfoDetailComponent.prototype.createrequest = function () {
        var requestobj = {};
        requestobj.userid = services_1.BackendService.email;
        requestobj.agasrequestid = this.agasrequestid;
        requestobj.code = this.code;
        requestobj.segmenttype = this.selectedsegmenttypeId;
        requestobj.notetype = this.selectednotetypeId;
        requestobj.financialyearid = this.financialperiodId;
        requestobj.notetypedescr = this.selectednotetypedescr;
        requestobj.segmenttypedescr = this.selectedsegmenttypedescr;
        requestobj.datetime = Date.now().toString();
        this.agasdataService.createGPFSNoteRequest(requestobj)
            .then(function (res) {
            alert("Record Saved Successfully");
        })
            .catch(function (err) {
            alert("An error occurred while creating Search Request.");
        });
    };
    AGASFinAggInfoDetailComponent.prototype.gobacktoresultlist = function () {
        var navigationExtras = {
            queryParams: {
                "agasrequestid": this.agasrequestid,
                "financialyeardescr": this.financialyeardesc,
                "accounttypedesc": this.accounttypedesc,
                "displaytime": this.displaytime,
                "financialperiodId": this.financialperiodId
            }
        };
        this.router.navigate(["agasfinagg-detail"], navigationExtras);
    };
    AGASFinAggInfoDetailComponent.prototype.viewDetail = function (selecteditem) {
        var navigationExtras = {
            queryParams: {
                "financialyeardesc": this.financialyeardesc,
                "financialperiodId": this.financialperiodId,
                "agasrequestid": this.agasrequestid,
                "accounttypedesc": this.accounttypedesc,
                "displaytime": this.displaytime,
                "code": this.code,
                "Description": this.description,
                "currentbalance": this.currentbalance,
                "finalbudget": this.finalbudget,
                "initialbudget": this.initialbudget,
                "supplementarybudget": this.supplementarybudget,
                "totalcredit": this.totalcredit,
                "totaldebit": this.totaldebit,
                "virement": this.virement,
                "gpfsnoterequestkey": selecteditem.gpfsnoterequestkey,
                "requestdatetime": selecteditem.datetime
            }
        };
        this.router.navigate(["agasgpfsnote-htmlview"], navigationExtras);
    };
    return AGASFinAggInfoDetailComponent;
}());
__decorate([
    core_1.ViewChild("notetypedd"),
    __metadata("design:type", core_1.ElementRef)
], AGASFinAggInfoDetailComponent.prototype, "notetypedd_ElementRef", void 0);
__decorate([
    core_1.ViewChild("segmenttypedd"),
    __metadata("design:type", core_1.ElementRef)
], AGASFinAggInfoDetailComponent.prototype, "segmenttypedd_ElementRef", void 0);
AGASFinAggInfoDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "finagginfodetaildisplay",
        templateUrl: "agasfinagginfodetail.html"
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, agasdata_service_1.AGASDataService,
        services_1.HomePageService, core_1.NgZone])
], AGASFinAggInfoDetailComponent);
exports.AGASFinAggInfoDetailComponent = AGASFinAggInfoDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdhc2ZpbmFnZ2luZm9kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWdhc2ZpbmFnZ2luZm9kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQWlGO0FBRWpGLDBDQUEyRTtBQUMzRSx3Q0FBOEQ7QUFDOUQsdURBQXFEO0FBQ3JELDhDQUEyQztBQVUzQyxJQUFhLDZCQUE2QjtJQStCdEMsdUNBQW9CLE1BQWMsRUFBVSxLQUFxQixFQUFVLGVBQWdDLEVBQy9GLGVBQWdDLEVBQVUsTUFBYztRQURoRCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDL0Ysb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUdwRSxDQUFDO0lBQ0QsZ0RBQVEsR0FBUjtRQUFBLGlCQStEQztRQTlERyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxlQUFlLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUM7WUFDOUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7Z0JBQ1osS0FBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDOUIsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGFBQWEsQ0FBQztRQUMzRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxhQUFhLENBQUM7UUFDakUsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQUEs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QUUsSUFBSSxDQUFDLFdBQVc7Z0JBQy9CLGVBQWUsRUFBRSxJQUFJLENBQUMsYUFBYTtnQkFDbkMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLG1CQUFtQjtnQkFDL0MsYUFBYSxFQUFFLElBQUksQ0FBQyxXQUFXO2dCQUMvQixZQUFZLEVBQUUsSUFBSSxDQUFDLFVBQVU7Z0JBQzdCLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUTtnQkFDekIsb0JBQW9CLEVBQUUsWUFBWSxDQUFDLGtCQUFrQjtnQkFDckQsaUJBQWlCLEVBQUUsWUFBWSxDQUFDLFFBQVE7YUFDM0M7U0FDSixDQUFDO1FBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUNMLG9DQUFDO0FBQUQsQ0FBQyxBQWpMRCxJQWlMQztBQTlKNEI7SUFBeEIsZ0JBQVMsQ0FBQyxZQUFZLENBQUM7OEJBQXdCLGlCQUFVOzRFQUFDO0FBTy9CO0lBQTNCLGdCQUFTLENBQUMsZUFBZSxDQUFDOzhCQUEyQixpQkFBVTsrRUFBQztBQTFCeEQsNkJBQTZCO0lBTHpDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLHlCQUF5QjtRQUNuQyxXQUFXLEVBQUUsMkJBQTJCO0tBQzNDLENBQUM7cUNBZ0M4QixlQUFNLEVBQWlCLHVCQUFjLEVBQTJCLGtDQUFlO1FBQzlFLDBCQUFlLEVBQWtCLGFBQU07R0FoQzNELDZCQUE2QixDQWlMekM7QUFqTFksc0VBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE5nWm9uZSwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlLCBOYXZpZ2F0aW9uRXh0cmFzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UsIEhvbWVQYWdlU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlc1wiO1xyXG5pbXBvcnQgeyBBR0FTRGF0YVNlcnZpY2UgfSBmcm9tIFwiLi9hZ2FzZGF0YS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFZhbHVlTGlzdCB9IGZyb20gXCIuLi9hcHAuZ2xvYmFsc1wiO1xyXG5pbXBvcnQgeyBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZHJvcC1kb3duXCI7XHJcbmltcG9ydCB7IERyb3BEb3duIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1kcm9wLWRvd25cIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogXCJmaW5hZ2dpbmZvZGV0YWlsZGlzcGxheVwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiYWdhc2ZpbmFnZ2luZm9kZXRhaWwuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBR0FTRmluQWdnSW5mb0RldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwdWJsaWMgZmluYW5jaWFseWVhcmRlc2M6IHN0cmluZztcclxuICAgIHB1YmxpYyBmaW5hbmNpYWxwZXJpb2RJZDogbnVtYmVyO1xyXG4gICAgcHVibGljIGFjY291bnR0eXBlZGVzYzogc3RyaW5nO1xyXG4gICAgcHVibGljIGNvZGU6IHN0cmluZztcclxuICAgIHB1YmxpYyBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgcHVibGljIGN1cnJlbnRiYWxhbmNlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgZmluYWxidWRnZXQ6IHN0cmluZztcclxuICAgIHB1YmxpYyBpbml0aWFsYnVkZ2V0OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgc3VwcGxlbWVudGFyeWJ1ZGdldDogc3RyaW5nO1xyXG4gICAgcHVibGljIHZpcmVtZW50OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgdG90YWxkZWJpdDogc3RyaW5nO1xyXG4gICAgcHVibGljIHRvdGFsY3JlZGl0OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgYWdhc3JlcXVlc3RpZDogc3RyaW5nO1xyXG4gICAgcHVibGljIGRpc3BsYXl0aW1lOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgbm90ZXJlcXVlc3RMaXN0OiBhbnlbXTtcclxuXHJcbiAgICBwdWJsaWMgbm90ZXR5cGVMaXN0OiBhbnlbXTtcclxuICAgIHB1YmxpYyBub3RldHlwZVZhbHVlTGlzdDogVmFsdWVMaXN0O1xyXG4gICAgQFZpZXdDaGlsZChcIm5vdGV0eXBlZGRcIikgbm90ZXR5cGVkZF9FbGVtZW50UmVmOiBFbGVtZW50UmVmO1xyXG4gICAgbm90ZXR5cGVkZDogRHJvcERvd247XHJcbiAgICBwdWJsaWMgc2VsZWN0ZWRub3RldHlwZUlkOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgc2VsZWN0ZWRub3RldHlwZWRlc2NyOiBzdHJpbmc7XHJcblxyXG4gICAgcHVibGljIHNlZ21lbnR0eXBlTGlzdDogYW55W107XHJcbiAgICBwdWJsaWMgc2VnbWVudHR5cGVWYWx1ZUxpc3Q6IFZhbHVlTGlzdDtcclxuICAgIEBWaWV3Q2hpbGQoXCJzZWdtZW50dHlwZWRkXCIpIHNlZ21lbnR0eXBlZGRfRWxlbWVudFJlZjogRWxlbWVudFJlZjtcclxuICAgIHNlZ21lbnR0eXBlZGQ6IERyb3BEb3duO1xyXG4gICAgcHVibGljIHNlbGVjdGVkc2VnbWVudHR5cGVJZDogbnVtYmVyO1xyXG4gICAgcHVibGljIHNlbGVjdGVkc2VnbWVudHR5cGVkZXNjcjogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIGFnYXNkYXRhU2VydmljZTogQUdBU0RhdGFTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgaG9tZVBhZ2VTZXJ2aWNlOiBIb21lUGFnZVNlcnZpY2UsIHByaXZhdGUgbmdab25lOiBOZ1pvbmUpIHtcclxuXHJcblxyXG4gICAgfVxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5ob21lUGFnZVNlcnZpY2Uuc2V0VGl0bGUoXCJHUEZTIEl0ZW1zIERldGFpbFwiKTtcclxuICAgICAgICAgdGhpcy5ob21lUGFnZVNlcnZpY2Uuc2V0U2hvd0dvQmFja0J1dHRvbih0cnVlKTtcclxuICAgICAgICB0aGlzLmhvbWVQYWdlU2VydmljZS5vbkdvQmFja09ic2VydmFibGUuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ29iYWNrdG9yZXN1bHRsaXN0KCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5ub3RldHlwZWRkID0gdGhpcy5ub3RldHlwZWRkX0VsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICAgICAgICB0aGlzLnNlZ21lbnR0eXBlZGQgPSB0aGlzLnNlZ21lbnR0eXBlZGRfRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgIHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZmluYW5jaWFseWVhcmRlc2MgPSBwYXJhbXNbXCJmaW5hbmNpYWx5ZWFyZGVzY1wiXTtcclxuICAgICAgICAgICAgdGhpcy5hY2NvdW50dHlwZWRlc2MgPSBwYXJhbXNbXCJhY2NvdW50dHlwZWRlc2NcIl07XHJcbiAgICAgICAgICAgIHRoaXMuZmluYW5jaWFscGVyaW9kSWQgPSBwYXJhbXNbXCJmaW5hbmNpYWxwZXJpb2RJZFwiXTtcclxuICAgICAgICAgICAgdGhpcy5hZ2FzcmVxdWVzdGlkID0gcGFyYW1zW1wiYWdhc3JlcXVlc3RpZFwiXTtcclxuICAgICAgICAgICAgdGhpcy5jb2RlID0gcGFyYW1zW1wiY29kZVwiXTtcclxuICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IHBhcmFtc1tcIkRlc2NyaXB0aW9uXCJdO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRiYWxhbmNlID0gcGFyYW1zW1wiY3VycmVudGJhbGFuY2VcIl07XHJcbiAgICAgICAgICAgIHRoaXMuZmluYWxidWRnZXQgPSBwYXJhbXNbXCJmaW5hbGJ1ZGdldFwiXTtcclxuICAgICAgICAgICAgdGhpcy5pbml0aWFsYnVkZ2V0ID0gcGFyYW1zW1wiaW5pdGlhbGJ1ZGdldFwiXTtcclxuICAgICAgICAgICAgdGhpcy5zdXBwbGVtZW50YXJ5YnVkZ2V0ID0gcGFyYW1zW1wic3VwcGxlbWVudGFyeWJ1ZGdldFwiXTtcclxuICAgICAgICAgICAgdGhpcy52aXJlbWVudCA9IHBhcmFtc1tcInZpcmVtZW50XCJdO1xyXG4gICAgICAgICAgICB0aGlzLnRvdGFsZGViaXQgPSBwYXJhbXNbXCJ0b3RhbGRlYml0XCJdO1xyXG4gICAgICAgICAgICB0aGlzLnRvdGFsY3JlZGl0ID0gcGFyYW1zW1widG90YWxjcmVkaXRcIl07XHJcbiAgICAgICAgICAgIHRoaXMudG90YWxjcmVkaXQgPSBwYXJhbXNbXCJ0b3RhbGNyZWRpdFwiXTtcclxuICAgICAgICAgICAgdGhpcy5kaXNwbGF5dGltZSA9IHBhcmFtc1tcImRpc3BsYXl0aW1lXCJdO1xyXG4gICAgICAgICAgICB0aGlzLmFnYXNkYXRhU2VydmljZS5nZXRHUEZTTm90ZVJlcXVlc3RMaXN0KHRoaXMuYWdhc3JlcXVlc3RpZCwgdGhpcy5jb2RlKS5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm90ZXJlcXVlc3RMaXN0ID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpZCBpbiByZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gKDxhbnk+T2JqZWN0KS5hc3NpZ24oeyBpZDogaWQgfSwgcmVzW2lkXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3RlcmVxdWVzdExpc3QucHVzaChyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmFnYXNkYXRhU2VydmljZS5nZXRDT0FTZWdtZW50VHlwZUxpc3QoKS5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZWdtZW50dHlwZUxpc3QgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGlkIGluIHJlcykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9ICg8YW55Pk9iamVjdCkuYXNzaWduKHsgaWQ6IGlkIH0sIHJlc1tpZF0pO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5hY2NvdW50VHlwZUxpc3QucHVzaCh7IGlkOiByZXN1bHQuaWQsIGRlc2NyaXB0aW9uOiByZXN1bHQuZGVzY3JpcHRpb24sIHRvU3RyaW5nOiAoKSA9PiB7IHJldHVybiByZXN1bHQuZGVzY3JpcHRpb247IH0gfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlZ21lbnR0eXBlTGlzdC5wdXNoKHsgVmFsdWVNZW1iZXI6IHJlc3VsdC5pZCwgRGlzcGxheU1lbWJlcjogcmVzdWx0LmRlc2NyaXB0aW9uIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2VnbWVudHR5cGVWYWx1ZUxpc3QgPSBuZXcgVmFsdWVMaXN0KHRoaXMuc2VnbWVudHR5cGVMaXN0KTtcclxuICAgICAgICAgICAgdGhpcy5zZWdtZW50dHlwZWRkLml0ZW1zID0gdGhpcy5zZWdtZW50dHlwZVZhbHVlTGlzdDtcclxuICAgICAgICAgICAgdGhpcy5zZWdtZW50dHlwZWRkLnNlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkc2VnbWVudHR5cGVJZCA9IHRoaXMuc2VnbWVudHR5cGVWYWx1ZUxpc3QuZ2V0VmFsdWUoMCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRzZWdtZW50dHlwZWRlc2NyID0gdGhpcy5zZWdtZW50dHlwZVZhbHVlTGlzdC5nZXRUZXh0KDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuYWdhc2RhdGFTZXJ2aWNlLmdldEdQRlNOb3RlVHlwZUxpc3QoKS5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ub3RldHlwZUxpc3QgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGlkIGluIHJlcykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9ICg8YW55Pk9iamVjdCkuYXNzaWduKHsgaWQ6IGlkIH0sIHJlc1tpZF0pO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5hY2NvdW50VHlwZUxpc3QucHVzaCh7IGlkOiByZXN1bHQuaWQsIGRlc2NyaXB0aW9uOiByZXN1bHQuZGVzY3JpcHRpb24sIHRvU3RyaW5nOiAoKSA9PiB7IHJldHVybiByZXN1bHQuZGVzY3JpcHRpb247IH0gfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGV0eXBlTGlzdC5wdXNoKHsgVmFsdWVNZW1iZXI6IHJlc3VsdC5pZCwgRGlzcGxheU1lbWJlcjogcmVzdWx0LmRlc2NyaXB0aW9uIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubm90ZXR5cGVWYWx1ZUxpc3QgPSBuZXcgVmFsdWVMaXN0KHRoaXMubm90ZXR5cGVMaXN0KTtcclxuICAgICAgICAgICAgdGhpcy5ub3RldHlwZWRkLml0ZW1zID0gdGhpcy5ub3RldHlwZVZhbHVlTGlzdDtcclxuICAgICAgICAgICAgdGhpcy5ub3RldHlwZWRkLnNlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkbm90ZXR5cGVJZCA9IHRoaXMubm90ZXR5cGVWYWx1ZUxpc3QuZ2V0VmFsdWUoMCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRub3RldHlwZWRlc2NyID0gdGhpcy5ub3RldHlwZVZhbHVlTGlzdC5nZXRUZXh0KDApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuICAgIHB1YmxpYyBzZWdtZW50dHlwZW9uY2hhbmdlKGFyZ3M6IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhKSB7XHJcblxyXG5cclxuICAgICAgICB0aGlzLnNlbGVjdGVkc2VnbWVudHR5cGVJZCA9IHRoaXMuc2VnbWVudHR5cGVWYWx1ZUxpc3QuZ2V0VmFsdWUoYXJncy5uZXdJbmRleCk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZHNlZ21lbnR0eXBlZGVzY3IgPSB0aGlzLnNlZ21lbnR0eXBlVmFsdWVMaXN0LmdldFRleHQoYXJncy5uZXdJbmRleCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2VnbWVudHR5cGVvbm9wZW4oKSB7XHJcblxyXG5cclxuICAgIH1cclxuICAgIHB1YmxpYyBub3RldHlwZW9uY2hhbmdlKGFyZ3M6IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhKSB7XHJcblxyXG5cclxuICAgICAgICB0aGlzLnNlbGVjdGVkbm90ZXR5cGVJZCA9IHRoaXMubm90ZXR5cGVWYWx1ZUxpc3QuZ2V0VmFsdWUoYXJncy5uZXdJbmRleCk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZG5vdGV0eXBlZGVzY3IgPSB0aGlzLm5vdGV0eXBlVmFsdWVMaXN0LmdldFRleHQoYXJncy5uZXdJbmRleCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgbm90ZXR5cGVvbm9wZW4oKSB7XHJcblxyXG5cclxuICAgIH1cclxuICAgIGNyZWF0ZXJlcXVlc3QoKSB7XHJcbiAgICAgICAgdmFyIHJlcXVlc3RvYmo6IGFueSA9IHt9O1xyXG4gICAgICAgIHJlcXVlc3RvYmoudXNlcmlkID0gQmFja2VuZFNlcnZpY2UuZW1haWw7XHJcbiAgICAgICAgcmVxdWVzdG9iai5hZ2FzcmVxdWVzdGlkID0gdGhpcy5hZ2FzcmVxdWVzdGlkO1xyXG4gICAgICAgIHJlcXVlc3RvYmouY29kZSA9IHRoaXMuY29kZTtcclxuICAgICAgICByZXF1ZXN0b2JqLnNlZ21lbnR0eXBlID0gdGhpcy5zZWxlY3RlZHNlZ21lbnR0eXBlSWQ7XHJcbiAgICAgICAgcmVxdWVzdG9iai5ub3RldHlwZSA9IHRoaXMuc2VsZWN0ZWRub3RldHlwZUlkO1xyXG4gICAgICAgIHJlcXVlc3RvYmouZmluYW5jaWFseWVhcmlkID0gdGhpcy5maW5hbmNpYWxwZXJpb2RJZDtcclxuICAgICAgICByZXF1ZXN0b2JqLm5vdGV0eXBlZGVzY3IgPSB0aGlzLnNlbGVjdGVkbm90ZXR5cGVkZXNjcjtcclxuICAgICAgICByZXF1ZXN0b2JqLnNlZ21lbnR0eXBlZGVzY3IgPSB0aGlzLnNlbGVjdGVkc2VnbWVudHR5cGVkZXNjcjtcclxuICAgICAgICByZXF1ZXN0b2JqLmRhdGV0aW1lID0gRGF0ZS5ub3coKS50b1N0cmluZygpO1xyXG4gICAgICAgIHRoaXMuYWdhc2RhdGFTZXJ2aWNlLmNyZWF0ZUdQRlNOb3RlUmVxdWVzdChyZXF1ZXN0b2JqKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJSZWNvcmQgU2F2ZWQgU3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgY3JlYXRpbmcgU2VhcmNoIFJlcXVlc3QuXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcbiAgICBnb2JhY2t0b3Jlc3VsdGxpc3QoKSB7XHJcbiAgICAgICAgbGV0IG5hdmlnYXRpb25FeHRyYXM6IE5hdmlnYXRpb25FeHRyYXMgPSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICBcImFnYXNyZXF1ZXN0aWRcIjogdGhpcy5hZ2FzcmVxdWVzdGlkLFxyXG4gICAgICAgICAgICAgICAgXCJmaW5hbmNpYWx5ZWFyZGVzY3JcIjogdGhpcy5maW5hbmNpYWx5ZWFyZGVzYyxcclxuICAgICAgICAgICAgICAgIFwiYWNjb3VudHR5cGVkZXNjXCI6IHRoaXMuYWNjb3VudHR5cGVkZXNjLFxyXG4gICAgICAgICAgICAgICAgXCJkaXNwbGF5dGltZVwiOiB0aGlzLmRpc3BsYXl0aW1lLFxyXG4gICAgICAgICAgICAgICAgXCJmaW5hbmNpYWxwZXJpb2RJZFwiOiB0aGlzLmZpbmFuY2lhbHBlcmlvZElkXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJhZ2FzZmluYWdnLWRldGFpbFwiXSwgbmF2aWdhdGlvbkV4dHJhcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpZXdEZXRhaWwoc2VsZWN0ZWRpdGVtOiBhbnkpIHtcclxuICAgICAgICBsZXQgbmF2aWdhdGlvbkV4dHJhczogTmF2aWdhdGlvbkV4dHJhcyA9IHtcclxuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgIFwiZmluYW5jaWFseWVhcmRlc2NcIjogdGhpcy5maW5hbmNpYWx5ZWFyZGVzYyxcclxuICAgICAgICAgICAgICAgIFwiZmluYW5jaWFscGVyaW9kSWRcIjogdGhpcy5maW5hbmNpYWxwZXJpb2RJZCxcclxuICAgICAgICAgICAgICAgIFwiYWdhc3JlcXVlc3RpZFwiOiB0aGlzLmFnYXNyZXF1ZXN0aWQsXHJcbiAgICAgICAgICAgICAgICBcImFjY291bnR0eXBlZGVzY1wiOiB0aGlzLmFjY291bnR0eXBlZGVzYyxcclxuICAgICAgICAgICAgICAgIFwiZGlzcGxheXRpbWVcIjogdGhpcy5kaXNwbGF5dGltZSxcclxuICAgICAgICAgICAgICAgIFwiY29kZVwiOiB0aGlzLmNvZGUsXHJcbiAgICAgICAgICAgICAgICBcIkRlc2NyaXB0aW9uXCI6IHRoaXMuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICBcImN1cnJlbnRiYWxhbmNlXCI6IHRoaXMuY3VycmVudGJhbGFuY2UsXHJcbiAgICAgICAgICAgICAgICBcImZpbmFsYnVkZ2V0XCI6IHRoaXMuZmluYWxidWRnZXQsXHJcbiAgICAgICAgICAgICAgICBcImluaXRpYWxidWRnZXRcIjogdGhpcy5pbml0aWFsYnVkZ2V0LFxyXG4gICAgICAgICAgICAgICAgXCJzdXBwbGVtZW50YXJ5YnVkZ2V0XCI6IHRoaXMuc3VwcGxlbWVudGFyeWJ1ZGdldCxcclxuICAgICAgICAgICAgICAgIFwidG90YWxjcmVkaXRcIjogdGhpcy50b3RhbGNyZWRpdCxcclxuICAgICAgICAgICAgICAgIFwidG90YWxkZWJpdFwiOiB0aGlzLnRvdGFsZGViaXQsXHJcbiAgICAgICAgICAgICAgICBcInZpcmVtZW50XCI6IHRoaXMudmlyZW1lbnQsXHJcbiAgICAgICAgICAgICAgICBcImdwZnNub3RlcmVxdWVzdGtleVwiOiBzZWxlY3RlZGl0ZW0uZ3Bmc25vdGVyZXF1ZXN0a2V5LFxyXG4gICAgICAgICAgICAgICAgXCJyZXF1ZXN0ZGF0ZXRpbWVcIjogc2VsZWN0ZWRpdGVtLmRhdGV0aW1lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImFnYXNncGZzbm90ZS1odG1sdmlld1wiXSwgbmF2aWdhdGlvbkV4dHJhcyk7XHJcbiAgICB9XHJcbn0iXX0=