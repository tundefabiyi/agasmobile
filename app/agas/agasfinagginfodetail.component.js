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
    function AGASFinAggInfoDetailComponent(router, route, agasdataService) {
        this.router = router;
        this.route = route;
        this.agasdataService = agasdataService;
    }
    AGASFinAggInfoDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
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
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, agasdata_service_1.AGASDataService])
], AGASFinAggInfoDetailComponent);
exports.AGASFinAggInfoDetailComponent = AGASFinAggInfoDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdhc2ZpbmFnZ2luZm9kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWdhc2ZpbmFnZ2luZm9kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQWlGO0FBRWpGLDBDQUEyRTtBQUMzRSx3Q0FBNkM7QUFDN0MsdURBQXFEO0FBQ3JELDhDQUEyQztBQVUzQyxJQUFhLDZCQUE2QjtJQStCdEMsdUNBQW9CLE1BQWMsRUFBVSxLQUFxQixFQUFVLGVBQWdDO1FBQXZGLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUczRyxDQUFDO0lBQ0QsZ0RBQVEsR0FBUjtRQUFBLGlCQXdEQztRQXZERyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLENBQUM7UUFDM0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsYUFBYSxDQUFDO1FBQ2pFLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDbkMsS0FBSSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ3JELEtBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDakQsS0FBSSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ3JELEtBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQzdDLEtBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzNCLEtBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3pDLEtBQUksQ0FBQyxj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QUFDO0lBQ3RFLENBQUM7SUFDTCxvQ0FBQztBQUFELENBQUMsQUF6S0QsSUF5S0M7QUF0SjRCO0lBQXhCLGdCQUFTLENBQUMsWUFBWSxDQUFDOzhCQUF3QixpQkFBVTs0RUFBQztBQU8vQjtJQUEzQixnQkFBUyxDQUFDLGVBQWUsQ0FBQzs4QkFBMkIsaUJBQVU7K0VBQUM7QUExQnhELDZCQUE2QjtJQUx6QyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSx5QkFBeUI7UUFDbkMsV0FBVyxFQUFFLDJCQUEyQjtLQUMzQyxDQUFDO3FDQWdDOEIsZUFBTSxFQUFpQix1QkFBYyxFQUEyQixrQ0FBZTtHQS9CbEcsNkJBQTZCLENBeUt6QztBQXpLWSxzRUFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgTmdab25lLCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUsIE5hdmlnYXRpb25FeHRyYXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlc1wiO1xyXG5pbXBvcnQgeyBBR0FTRGF0YVNlcnZpY2UgfSBmcm9tIFwiLi9hZ2FzZGF0YS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFZhbHVlTGlzdCB9IGZyb20gXCIuLi9hcHAuZ2xvYmFsc1wiO1xyXG5pbXBvcnQgeyBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZHJvcC1kb3duXCI7XHJcbmltcG9ydCB7IERyb3BEb3duIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1kcm9wLWRvd25cIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogXCJmaW5hZ2dpbmZvZGV0YWlsZGlzcGxheVwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiYWdhc2ZpbmFnZ2luZm9kZXRhaWwuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBR0FTRmluQWdnSW5mb0RldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwdWJsaWMgZmluYW5jaWFseWVhcmRlc2M6IHN0cmluZztcclxuICAgIHB1YmxpYyBmaW5hbmNpYWxwZXJpb2RJZDogbnVtYmVyO1xyXG4gICAgcHVibGljIGFjY291bnR0eXBlZGVzYzogc3RyaW5nO1xyXG4gICAgcHVibGljIGNvZGU6IHN0cmluZztcclxuICAgIHB1YmxpYyBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgcHVibGljIGN1cnJlbnRiYWxhbmNlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgZmluYWxidWRnZXQ6IHN0cmluZztcclxuICAgIHB1YmxpYyBpbml0aWFsYnVkZ2V0OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgc3VwcGxlbWVudGFyeWJ1ZGdldDogc3RyaW5nO1xyXG4gICAgcHVibGljIHZpcmVtZW50OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgdG90YWxkZWJpdDogc3RyaW5nO1xyXG4gICAgcHVibGljIHRvdGFsY3JlZGl0OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgYWdhc3JlcXVlc3RpZDogc3RyaW5nO1xyXG4gICAgcHVibGljIGRpc3BsYXl0aW1lOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgbm90ZXJlcXVlc3RMaXN0OiBhbnlbXTtcclxuXHJcbiAgICBwdWJsaWMgbm90ZXR5cGVMaXN0OiBhbnlbXTtcclxuICAgIHB1YmxpYyBub3RldHlwZVZhbHVlTGlzdDogVmFsdWVMaXN0O1xyXG4gICAgQFZpZXdDaGlsZChcIm5vdGV0eXBlZGRcIikgbm90ZXR5cGVkZF9FbGVtZW50UmVmOiBFbGVtZW50UmVmO1xyXG4gICAgbm90ZXR5cGVkZDogRHJvcERvd247XHJcbiAgICBwdWJsaWMgc2VsZWN0ZWRub3RldHlwZUlkOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgc2VsZWN0ZWRub3RldHlwZWRlc2NyOiBzdHJpbmc7XHJcblxyXG4gICAgcHVibGljIHNlZ21lbnR0eXBlTGlzdDogYW55W107XHJcbiAgICBwdWJsaWMgc2VnbWVudHR5cGVWYWx1ZUxpc3Q6IFZhbHVlTGlzdDtcclxuICAgIEBWaWV3Q2hpbGQoXCJzZWdtZW50dHlwZWRkXCIpIHNlZ21lbnR0eXBlZGRfRWxlbWVudFJlZjogRWxlbWVudFJlZjtcclxuICAgIHNlZ21lbnR0eXBlZGQ6IERyb3BEb3duO1xyXG4gICAgcHVibGljIHNlbGVjdGVkc2VnbWVudHR5cGVJZDogbnVtYmVyO1xyXG4gICAgcHVibGljIHNlbGVjdGVkc2VnbWVudHR5cGVkZXNjcjogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIGFnYXNkYXRhU2VydmljZTogQUdBU0RhdGFTZXJ2aWNlKSB7XHJcblxyXG5cclxuICAgIH1cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMubm90ZXR5cGVkZCA9IHRoaXMubm90ZXR5cGVkZF9FbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5zZWdtZW50dHlwZWRkID0gdGhpcy5zZWdtZW50dHlwZWRkX0VsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICAgICAgICB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmZpbmFuY2lhbHllYXJkZXNjID0gcGFyYW1zW1wiZmluYW5jaWFseWVhcmRlc2NcIl07XHJcbiAgICAgICAgICAgIHRoaXMuYWNjb3VudHR5cGVkZXNjID0gcGFyYW1zW1wiYWNjb3VudHR5cGVkZXNjXCJdO1xyXG4gICAgICAgICAgICB0aGlzLmZpbmFuY2lhbHBlcmlvZElkID0gcGFyYW1zW1wiZmluYW5jaWFscGVyaW9kSWRcIl07XHJcbiAgICAgICAgICAgIHRoaXMuYWdhc3JlcXVlc3RpZCA9IHBhcmFtc1tcImFnYXNyZXF1ZXN0aWRcIl07XHJcbiAgICAgICAgICAgIHRoaXMuY29kZSA9IHBhcmFtc1tcImNvZGVcIl07XHJcbiAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBwYXJhbXNbXCJEZXNjcmlwdGlvblwiXTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50YmFsYW5jZSA9IHBhcmFtc1tcImN1cnJlbnRiYWxhbmNlXCJdO1xyXG4gICAgICAgICAgICB0aGlzLmZpbmFsYnVkZ2V0ID0gcGFyYW1zW1wiZmluYWxidWRnZXRcIl07XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGJ1ZGdldCA9IHBhcmFtc1tcImluaXRpYWxidWRnZXRcIl07XHJcbiAgICAgICAgICAgIHRoaXMuc3VwcGxlbWVudGFyeWJ1ZGdldCA9IHBhcmFtc1tcInN1cHBsZW1lbnRhcnlidWRnZXRcIl07XHJcbiAgICAgICAgICAgIHRoaXMudmlyZW1lbnQgPSBwYXJhbXNbXCJ2aXJlbWVudFwiXTtcclxuICAgICAgICAgICAgdGhpcy50b3RhbGRlYml0ID0gcGFyYW1zW1widG90YWxkZWJpdFwiXTtcclxuICAgICAgICAgICAgdGhpcy50b3RhbGNyZWRpdCA9IHBhcmFtc1tcInRvdGFsY3JlZGl0XCJdO1xyXG4gICAgICAgICAgICB0aGlzLnRvdGFsY3JlZGl0ID0gcGFyYW1zW1widG90YWxjcmVkaXRcIl07XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheXRpbWUgPSBwYXJhbXNbXCJkaXNwbGF5dGltZVwiXTtcclxuICAgICAgICAgICAgdGhpcy5hZ2FzZGF0YVNlcnZpY2UuZ2V0R1BGU05vdGVSZXF1ZXN0TGlzdCh0aGlzLmFnYXNyZXF1ZXN0aWQsdGhpcy5jb2RlKS5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm90ZXJlcXVlc3RMaXN0ID0gW107ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaWQgaW4gcmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9ICg8YW55Pk9iamVjdCkuYXNzaWduKHsgaWQ6IGlkIH0sIHJlc1tpZF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm90ZXJlcXVlc3RMaXN0LnB1c2gocmVzdWx0KTsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmFnYXNkYXRhU2VydmljZS5nZXRDT0FTZWdtZW50VHlwZUxpc3QoKS5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZWdtZW50dHlwZUxpc3QgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGlkIGluIHJlcykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9ICg8YW55Pk9iamVjdCkuYXNzaWduKHsgaWQ6IGlkIH0sIHJlc1tpZF0pO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5hY2NvdW50VHlwZUxpc3QucHVzaCh7IGlkOiByZXN1bHQuaWQsIGRlc2NyaXB0aW9uOiByZXN1bHQuZGVzY3JpcHRpb24sIHRvU3RyaW5nOiAoKSA9PiB7IHJldHVybiByZXN1bHQuZGVzY3JpcHRpb247IH0gfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlZ21lbnR0eXBlTGlzdC5wdXNoKHsgVmFsdWVNZW1iZXI6IHJlc3VsdC5pZCwgRGlzcGxheU1lbWJlcjogcmVzdWx0LmRlc2NyaXB0aW9uIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2VnbWVudHR5cGVWYWx1ZUxpc3QgPSBuZXcgVmFsdWVMaXN0KHRoaXMuc2VnbWVudHR5cGVMaXN0KTtcclxuICAgICAgICAgICAgdGhpcy5zZWdtZW50dHlwZWRkLml0ZW1zID0gdGhpcy5zZWdtZW50dHlwZVZhbHVlTGlzdDtcclxuICAgICAgICAgICAgdGhpcy5zZWdtZW50dHlwZWRkLnNlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkc2VnbWVudHR5cGVJZCA9IHRoaXMuc2VnbWVudHR5cGVWYWx1ZUxpc3QuZ2V0VmFsdWUoMCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRzZWdtZW50dHlwZWRlc2NyID0gdGhpcy5zZWdtZW50dHlwZVZhbHVlTGlzdC5nZXRUZXh0KDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuYWdhc2RhdGFTZXJ2aWNlLmdldEdQRlNOb3RlVHlwZUxpc3QoKS5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ub3RldHlwZUxpc3QgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGlkIGluIHJlcykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9ICg8YW55Pk9iamVjdCkuYXNzaWduKHsgaWQ6IGlkIH0sIHJlc1tpZF0pO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5hY2NvdW50VHlwZUxpc3QucHVzaCh7IGlkOiByZXN1bHQuaWQsIGRlc2NyaXB0aW9uOiByZXN1bHQuZGVzY3JpcHRpb24sIHRvU3RyaW5nOiAoKSA9PiB7IHJldHVybiByZXN1bHQuZGVzY3JpcHRpb247IH0gfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGV0eXBlTGlzdC5wdXNoKHsgVmFsdWVNZW1iZXI6IHJlc3VsdC5pZCwgRGlzcGxheU1lbWJlcjogcmVzdWx0LmRlc2NyaXB0aW9uIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubm90ZXR5cGVWYWx1ZUxpc3QgPSBuZXcgVmFsdWVMaXN0KHRoaXMubm90ZXR5cGVMaXN0KTtcclxuICAgICAgICAgICAgdGhpcy5ub3RldHlwZWRkLml0ZW1zID0gdGhpcy5ub3RldHlwZVZhbHVlTGlzdDtcclxuICAgICAgICAgICAgdGhpcy5ub3RldHlwZWRkLnNlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkbm90ZXR5cGVJZCA9IHRoaXMubm90ZXR5cGVWYWx1ZUxpc3QuZ2V0VmFsdWUoMCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRub3RldHlwZWRlc2NyID0gdGhpcy5ub3RldHlwZVZhbHVlTGlzdC5nZXRUZXh0KDApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuICAgIHB1YmxpYyBzZWdtZW50dHlwZW9uY2hhbmdlKGFyZ3M6IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhKSB7XHJcblxyXG5cclxuICAgICAgICB0aGlzLnNlbGVjdGVkc2VnbWVudHR5cGVJZCA9IHRoaXMuc2VnbWVudHR5cGVWYWx1ZUxpc3QuZ2V0VmFsdWUoYXJncy5uZXdJbmRleCk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZHNlZ21lbnR0eXBlZGVzY3IgPSB0aGlzLnNlZ21lbnR0eXBlVmFsdWVMaXN0LmdldFRleHQoYXJncy5uZXdJbmRleCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2VnbWVudHR5cGVvbm9wZW4oKSB7XHJcblxyXG5cclxuICAgIH1cclxuICAgIHB1YmxpYyBub3RldHlwZW9uY2hhbmdlKGFyZ3M6IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhKSB7XHJcblxyXG5cclxuICAgICAgICB0aGlzLnNlbGVjdGVkbm90ZXR5cGVJZCA9IHRoaXMubm90ZXR5cGVWYWx1ZUxpc3QuZ2V0VmFsdWUoYXJncy5uZXdJbmRleCk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZG5vdGV0eXBlZGVzY3IgPSB0aGlzLm5vdGV0eXBlVmFsdWVMaXN0LmdldFRleHQoYXJncy5uZXdJbmRleCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgbm90ZXR5cGVvbm9wZW4oKSB7XHJcblxyXG5cclxuICAgIH1cclxuICAgIGNyZWF0ZXJlcXVlc3QoKSB7XHJcbiAgICAgICAgdmFyIHJlcXVlc3RvYmo6IGFueSA9IHt9O1xyXG4gICAgICAgIHJlcXVlc3RvYmoudXNlcmlkID0gQmFja2VuZFNlcnZpY2UuZW1haWw7XHJcbiAgICAgICAgcmVxdWVzdG9iai5hZ2FzcmVxdWVzdGlkID0gdGhpcy5hZ2FzcmVxdWVzdGlkO1xyXG4gICAgICAgIHJlcXVlc3RvYmouY29kZSA9IHRoaXMuY29kZTtcclxuICAgICAgICByZXF1ZXN0b2JqLnNlZ21lbnR0eXBlID0gdGhpcy5zZWxlY3RlZHNlZ21lbnR0eXBlSWQ7XHJcbiAgICAgICAgcmVxdWVzdG9iai5ub3RldHlwZSA9IHRoaXMuc2VsZWN0ZWRub3RldHlwZUlkO1xyXG4gICAgICAgIHJlcXVlc3RvYmouZmluYW5jaWFseWVhcmlkID0gdGhpcy5maW5hbmNpYWxwZXJpb2RJZDtcclxuICAgICAgICByZXF1ZXN0b2JqLm5vdGV0eXBlZGVzY3IgPSB0aGlzLnNlbGVjdGVkbm90ZXR5cGVkZXNjcjtcclxuICAgICAgICByZXF1ZXN0b2JqLnNlZ21lbnR0eXBlZGVzY3IgPSB0aGlzLnNlbGVjdGVkc2VnbWVudHR5cGVkZXNjcjtcclxuICAgICAgICByZXF1ZXN0b2JqLmRhdGV0aW1lID0gRGF0ZS5ub3coKS50b1N0cmluZygpO1xyXG4gICAgICAgIHRoaXMuYWdhc2RhdGFTZXJ2aWNlLmNyZWF0ZUdQRlNOb3RlUmVxdWVzdChyZXF1ZXN0b2JqKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJSZWNvcmQgU2F2ZWQgU3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgY3JlYXRpbmcgU2VhcmNoIFJlcXVlc3QuXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcbiAgICBnb2JhY2t0b3Jlc3VsdGxpc3QoKSB7XHJcbiAgICAgICAgbGV0IG5hdmlnYXRpb25FeHRyYXM6IE5hdmlnYXRpb25FeHRyYXMgPSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICBcImFnYXNyZXF1ZXN0aWRcIjogdGhpcy5hZ2FzcmVxdWVzdGlkLFxyXG4gICAgICAgICAgICAgICAgXCJmaW5hbmNpYWx5ZWFyZGVzY3JcIjogdGhpcy5maW5hbmNpYWx5ZWFyZGVzYyxcclxuICAgICAgICAgICAgICAgIFwiYWNjb3VudHR5cGVkZXNjXCI6IHRoaXMuYWNjb3VudHR5cGVkZXNjLFxyXG4gICAgICAgICAgICAgICAgXCJkaXNwbGF5dGltZVwiOiB0aGlzLmRpc3BsYXl0aW1lLFxyXG4gICAgICAgICAgICAgICAgXCJmaW5hbmNpYWxwZXJpb2RJZFwiOiB0aGlzLmZpbmFuY2lhbHBlcmlvZElkXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJhZ2FzZmluYWdnLWRldGFpbFwiXSwgbmF2aWdhdGlvbkV4dHJhcyk7XHJcbiAgICB9XHJcblxyXG4gICAgIHB1YmxpYyB2aWV3RGV0YWlsKHNlbGVjdGVkaXRlbTogYW55KSB7XHJcbiAgICAgICAgbGV0IG5hdmlnYXRpb25FeHRyYXM6IE5hdmlnYXRpb25FeHRyYXMgPSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICBcImZpbmFuY2lhbHllYXJkZXNjXCI6IHRoaXMuZmluYW5jaWFseWVhcmRlc2MsXHJcbiAgICAgICAgICAgICAgICBcImZpbmFuY2lhbHBlcmlvZElkXCI6IHRoaXMuZmluYW5jaWFscGVyaW9kSWQsXHJcbiAgICAgICAgICAgICAgICBcImFnYXNyZXF1ZXN0aWRcIjogdGhpcy5hZ2FzcmVxdWVzdGlkLFxyXG4gICAgICAgICAgICAgICAgXCJhY2NvdW50dHlwZWRlc2NcIjogdGhpcy5hY2NvdW50dHlwZWRlc2MsXHJcbiAgICAgICAgICAgICAgICAgXCJkaXNwbGF5dGltZVwiOiB0aGlzLmRpc3BsYXl0aW1lLFxyXG4gICAgICAgICAgICAgICAgXCJjb2RlXCI6IHRoaXMuY29kZSxcclxuICAgICAgICAgICAgICAgIFwiRGVzY3JpcHRpb25cIjogdGhpcy5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgIFwiY3VycmVudGJhbGFuY2VcIjogdGhpcy5jdXJyZW50YmFsYW5jZSxcclxuICAgICAgICAgICAgICAgIFwiZmluYWxidWRnZXRcIjogdGhpcy5maW5hbGJ1ZGdldCxcclxuICAgICAgICAgICAgICAgIFwiaW5pdGlhbGJ1ZGdldFwiOiB0aGlzLmluaXRpYWxidWRnZXQsXHJcbiAgICAgICAgICAgICAgICBcInN1cHBsZW1lbnRhcnlidWRnZXRcIjogdGhpcy5zdXBwbGVtZW50YXJ5YnVkZ2V0LFxyXG4gICAgICAgICAgICAgICAgXCJ0b3RhbGNyZWRpdFwiOiB0aGlzLnRvdGFsY3JlZGl0LFxyXG4gICAgICAgICAgICAgICAgXCJ0b3RhbGRlYml0XCI6IHRoaXMudG90YWxkZWJpdCxcclxuICAgICAgICAgICAgICAgIFwidmlyZW1lbnRcIjogdGhpcy52aXJlbWVudCxcclxuICAgICAgICAgICAgICAgIFwiZ3Bmc25vdGVyZXF1ZXN0a2V5XCI6IHNlbGVjdGVkaXRlbS5ncGZzbm90ZXJlcXVlc3RrZXksXHJcbiAgICAgICAgICAgICAgICBcInJlcXVlc3RkYXRldGltZVwiOiBzZWxlY3RlZGl0ZW0uZGF0ZXRpbWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiYWdhc2dwZnNub3RlLWh0bWx2aWV3XCJdLCBuYXZpZ2F0aW9uRXh0cmFzKTtcclxuICAgIH1cclxufSJdfQ==