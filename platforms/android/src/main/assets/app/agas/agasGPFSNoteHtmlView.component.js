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
var AGASGPFSNoteHTMLViewComponent = (function () {
    function AGASGPFSNoteHTMLViewComponent(router, route, agasdataService, homePageService, ngZone) {
        this.router = router;
        this.route = route;
        this.agasdataService = agasdataService;
        this.homePageService = homePageService;
        this.ngZone = ngZone;
        this.htmlview = "<Div>Loading..</Div>";
    }
    AGASGPFSNoteHTMLViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.homePageService.setTitle("GPFS Note Detail");
        this.homePageService.setShowGoBackButton(true);
        this.homePageService.onGoBackObservable.subscribe(function () {
            _this.ngZone.run(function () {
                _this.gobacktodetail();
            });
        });
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
            _this.gpfsnoterequestkey = params["gpfsnoterequestkey"];
            _this.requestdatetime = params["requestdatetime"];
            _this.agasdataService.getGPFSNoteHTMLResult(_this.gpfsnoterequestkey).subscribe(function (res) {
                if (res)
                    _this.htmlview = res;
            });
        });
    };
    AGASGPFSNoteHTMLViewComponent.prototype.gobacktodetail = function () {
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
                "virement": this.virement
            }
        };
        this.router.navigate(["agasfinagg-infodetail"], navigationExtras);
    };
    return AGASGPFSNoteHTMLViewComponent;
}());
AGASGPFSNoteHTMLViewComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "finaggdetailhtmldisplay",
        templateUrl: "agasGPFSNotehtmlview.html"
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute,
        agasdata_service_1.AGASDataService, services_1.HomePageService,
        core_1.NgZone])
], AGASGPFSNoteHTMLViewComponent);
exports.AGASGPFSNoteHTMLViewComponent = AGASGPFSNoteHTMLViewComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdhc0dQRlNOb3RlSHRtbFZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWdhc0dQRlNOb3RlSHRtbFZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQWlGO0FBRWpGLDBDQUEyRTtBQUMzRSx3Q0FBNkQ7QUFDN0QsdURBQXFEO0FBT3JELElBQWEsNkJBQTZCO0lBbUJ0Qyx1Q0FBb0IsTUFBYyxFQUFVLEtBQXFCLEVBQ3hELGVBQWdDLEVBQVMsZUFBZ0MsRUFDekUsTUFBYztRQUZILFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUN4RCxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFBUyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDekUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQU5oQixhQUFRLEdBQVcsc0JBQXNCLENBQUM7SUFTakQsQ0FBQztJQUNELGdEQUFRLEdBQVI7UUFBQSxpQkFnQ0M7UUEvQkksSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsZUFBZSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxlQUFlLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDO1lBQzlDLEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO2dCQUNaLEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUMxQixDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUNuQyxLQUFJLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDckQsS0FBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUNqRCxLQUFJLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDckQsS0FBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDN0MsS0FBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDM0IsS0FBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDekMsS0FBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUMvQyxLQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUN6QyxLQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUM3QyxLQUFJLENBQUMsbUJBQW1CLEdBQUcsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDekQsS0FBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDbkMsS0FBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDdkMsS0FBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDekMsS0FBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDekMsS0FBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDekMsS0FBSSxDQUFDLGtCQUFrQixHQUFHLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBQ3ZELEtBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFFakQsS0FBSSxDQUFDLGVBQWUsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxHQUFHO2dCQUM3RSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUM7b0JBQUMsS0FBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7WUFDakMsQ0FBQyxDQUFDLENBQUM7UUFFUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCxzREFBYyxHQUFkO1FBQ0ksSUFBSSxnQkFBZ0IsR0FBcUI7WUFDckMsV0FBVyxFQUFFO2dCQUNULG1CQUFtQixFQUFFLElBQUksQ0FBQyxpQkFBaUI7Z0JBQzNDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxpQkFBaUI7Z0JBQzNDLGVBQWUsRUFBRSxJQUFJLENBQUMsYUFBYTtnQkFDbkMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGVBQWU7Z0JBQ3ZDLGFBQWEsRUFBRSxJQUFJLENBQUMsV0FBVztnQkFDL0IsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJO2dCQUNqQixhQUFhLEVBQUUsSUFBSSxDQUFDLFdBQVc7Z0JBQy9CLGdCQUFnQixFQUFFLElBQUksQ0FBQyxjQUFjO2dCQUNyQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFdBQVc7Z0JBQy9CLGVBQWUsRUFBRSxJQUFJLENBQUMsYUFBYTtnQkFDbkMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLG1CQUFtQjtnQkFDL0MsYUFBYSxFQUFFLElBQUksQ0FBQyxXQUFXO2dCQUMvQixZQUFZLEVBQUUsSUFBSSxDQUFDLFVBQVU7Z0JBQzdCLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUTthQUM1QjtTQUNKLENBQUM7UUFDRixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLHVCQUF1QixDQUFDLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBQ0wsb0NBQUM7QUFBRCxDQUFDLEFBL0VELElBK0VDO0FBL0VZLDZCQUE2QjtJQUx6QyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSx5QkFBeUI7UUFDbkMsV0FBVyxFQUFFLDJCQUEyQjtLQUMzQyxDQUFDO3FDQW9COEIsZUFBTSxFQUFpQix1QkFBYztRQUN2QyxrQ0FBZSxFQUEwQiwwQkFBZTtRQUNqRSxhQUFNO0dBckJkLDZCQUE2QixDQStFekM7QUEvRVksc0VBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE5nWm9uZSwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlLCBOYXZpZ2F0aW9uRXh0cmFzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UsSG9tZVBhZ2VTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzXCI7XHJcbmltcG9ydCB7IEFHQVNEYXRhU2VydmljZSB9IGZyb20gXCIuL2FnYXNkYXRhLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiBcImZpbmFnZ2RldGFpbGh0bWxkaXNwbGF5XCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJhZ2FzR1BGU05vdGVodG1sdmlldy5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIEFHQVNHUEZTTm90ZUhUTUxWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHB1YmxpYyBmaW5hbmNpYWx5ZWFyZGVzYzogc3RyaW5nO1xyXG4gICAgcHVibGljIGFjY291bnR0eXBlZGVzYzogc3RyaW5nO1xyXG4gICAgcHVibGljIGZpbmFuY2lhbHBlcmlvZElkOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgY29kZTogc3RyaW5nO1xyXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgY3VycmVudGJhbGFuY2U6IHN0cmluZztcclxuICAgIHB1YmxpYyBmaW5hbGJ1ZGdldDogc3RyaW5nO1xyXG4gICAgcHVibGljIGluaXRpYWxidWRnZXQ6IHN0cmluZztcclxuICAgIHB1YmxpYyBzdXBwbGVtZW50YXJ5YnVkZ2V0OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgdmlyZW1lbnQ6IHN0cmluZztcclxuICAgIHB1YmxpYyB0b3RhbGRlYml0OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgdG90YWxjcmVkaXQ6IHN0cmluZztcclxuICAgIHB1YmxpYyBkaXNwbGF5dGltZTogc3RyaW5nO1xyXG4gICAgcHVibGljIGdwZnNub3RlcmVxdWVzdGtleTogc3RyaW5nO1xyXG4gICAgcHVibGljIGh0bWx2aWV3OiBzdHJpbmcgPSBcIjxEaXY+TG9hZGluZy4uPC9EaXY+XCI7XHJcbiAgICBwdWJsaWMgcXVlcnlkYXRlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgYWdhc3JlcXVlc3RpZDogc3RyaW5nO1xyXG4gICAgcHVibGljIHJlcXVlc3RkYXRldGltZTogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgcHJpdmF0ZSBhZ2FzZGF0YVNlcnZpY2U6IEFHQVNEYXRhU2VydmljZSxwcml2YXRlIGhvbWVQYWdlU2VydmljZTogSG9tZVBhZ2VTZXJ2aWNlLFxyXG4gICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUpIHtcclxuXHJcblxyXG4gICAgfVxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgIHRoaXMuaG9tZVBhZ2VTZXJ2aWNlLnNldFRpdGxlKFwiR1BGUyBOb3RlIERldGFpbFwiKTtcclxuICAgICAgICAgIHRoaXMuaG9tZVBhZ2VTZXJ2aWNlLnNldFNob3dHb0JhY2tCdXR0b24odHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5ob21lUGFnZVNlcnZpY2Uub25Hb0JhY2tPYnNlcnZhYmxlLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdvYmFja3RvZGV0YWlsKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgICAgICAgdGhpcy5maW5hbmNpYWx5ZWFyZGVzYyA9IHBhcmFtc1tcImZpbmFuY2lhbHllYXJkZXNjXCJdO1xyXG4gICAgICAgICAgICB0aGlzLmFjY291bnR0eXBlZGVzYyA9IHBhcmFtc1tcImFjY291bnR0eXBlZGVzY1wiXTtcclxuICAgICAgICAgICAgdGhpcy5maW5hbmNpYWxwZXJpb2RJZCA9IHBhcmFtc1tcImZpbmFuY2lhbHBlcmlvZElkXCJdO1xyXG4gICAgICAgICAgICB0aGlzLmFnYXNyZXF1ZXN0aWQgPSBwYXJhbXNbXCJhZ2FzcmVxdWVzdGlkXCJdO1xyXG4gICAgICAgICAgICB0aGlzLmNvZGUgPSBwYXJhbXNbXCJjb2RlXCJdO1xyXG4gICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gcGFyYW1zW1wiRGVzY3JpcHRpb25cIl07XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudGJhbGFuY2UgPSBwYXJhbXNbXCJjdXJyZW50YmFsYW5jZVwiXTtcclxuICAgICAgICAgICAgdGhpcy5maW5hbGJ1ZGdldCA9IHBhcmFtc1tcImZpbmFsYnVkZ2V0XCJdO1xyXG4gICAgICAgICAgICB0aGlzLmluaXRpYWxidWRnZXQgPSBwYXJhbXNbXCJpbml0aWFsYnVkZ2V0XCJdO1xyXG4gICAgICAgICAgICB0aGlzLnN1cHBsZW1lbnRhcnlidWRnZXQgPSBwYXJhbXNbXCJzdXBwbGVtZW50YXJ5YnVkZ2V0XCJdO1xyXG4gICAgICAgICAgICB0aGlzLnZpcmVtZW50ID0gcGFyYW1zW1widmlyZW1lbnRcIl07XHJcbiAgICAgICAgICAgIHRoaXMudG90YWxkZWJpdCA9IHBhcmFtc1tcInRvdGFsZGViaXRcIl07XHJcbiAgICAgICAgICAgIHRoaXMudG90YWxjcmVkaXQgPSBwYXJhbXNbXCJ0b3RhbGNyZWRpdFwiXTtcclxuICAgICAgICAgICAgdGhpcy50b3RhbGNyZWRpdCA9IHBhcmFtc1tcInRvdGFsY3JlZGl0XCJdO1xyXG4gICAgICAgICAgICB0aGlzLmRpc3BsYXl0aW1lID0gcGFyYW1zW1wiZGlzcGxheXRpbWVcIl07XHJcbiAgICAgICAgICAgIHRoaXMuZ3Bmc25vdGVyZXF1ZXN0a2V5ID0gcGFyYW1zW1wiZ3Bmc25vdGVyZXF1ZXN0a2V5XCJdO1xyXG4gICAgICAgICAgICB0aGlzLnJlcXVlc3RkYXRldGltZSA9IHBhcmFtc1tcInJlcXVlc3RkYXRldGltZVwiXTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYWdhc2RhdGFTZXJ2aWNlLmdldEdQRlNOb3RlSFRNTFJlc3VsdCh0aGlzLmdwZnNub3RlcmVxdWVzdGtleSkuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzKSB0aGlzLmh0bWx2aWV3ID0gcmVzO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBnb2JhY2t0b2RldGFpbCgpIHtcclxuICAgICAgICBsZXQgbmF2aWdhdGlvbkV4dHJhczogTmF2aWdhdGlvbkV4dHJhcyA9IHtcclxuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgIFwiZmluYW5jaWFseWVhcmRlc2NcIjogdGhpcy5maW5hbmNpYWx5ZWFyZGVzYyxcclxuICAgICAgICAgICAgICAgIFwiZmluYW5jaWFscGVyaW9kSWRcIjogdGhpcy5maW5hbmNpYWxwZXJpb2RJZCxcclxuICAgICAgICAgICAgICAgIFwiYWdhc3JlcXVlc3RpZFwiOiB0aGlzLmFnYXNyZXF1ZXN0aWQsXHJcbiAgICAgICAgICAgICAgICBcImFjY291bnR0eXBlZGVzY1wiOiB0aGlzLmFjY291bnR0eXBlZGVzYyxcclxuICAgICAgICAgICAgICAgIFwiZGlzcGxheXRpbWVcIjogdGhpcy5kaXNwbGF5dGltZSxcclxuICAgICAgICAgICAgICAgIFwiY29kZVwiOiB0aGlzLmNvZGUsXHJcbiAgICAgICAgICAgICAgICBcIkRlc2NyaXB0aW9uXCI6IHRoaXMuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICBcImN1cnJlbnRiYWxhbmNlXCI6IHRoaXMuY3VycmVudGJhbGFuY2UsXHJcbiAgICAgICAgICAgICAgICBcImZpbmFsYnVkZ2V0XCI6IHRoaXMuZmluYWxidWRnZXQsXHJcbiAgICAgICAgICAgICAgICBcImluaXRpYWxidWRnZXRcIjogdGhpcy5pbml0aWFsYnVkZ2V0LFxyXG4gICAgICAgICAgICAgICAgXCJzdXBwbGVtZW50YXJ5YnVkZ2V0XCI6IHRoaXMuc3VwcGxlbWVudGFyeWJ1ZGdldCxcclxuICAgICAgICAgICAgICAgIFwidG90YWxjcmVkaXRcIjogdGhpcy50b3RhbGNyZWRpdCxcclxuICAgICAgICAgICAgICAgIFwidG90YWxkZWJpdFwiOiB0aGlzLnRvdGFsZGViaXQsXHJcbiAgICAgICAgICAgICAgICBcInZpcmVtZW50XCI6IHRoaXMudmlyZW1lbnRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiYWdhc2ZpbmFnZy1pbmZvZGV0YWlsXCJdLCBuYXZpZ2F0aW9uRXh0cmFzKTtcclxuICAgIH1cclxufSJdfQ==