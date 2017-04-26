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
var AGASGPFSNoteHTMLViewComponent = (function () {
    function AGASGPFSNoteHTMLViewComponent(router, route, agasdataService) {
        this.router = router;
        this.route = route;
        this.agasdataService = agasdataService;
        this.htmlview = "<Div>Loading..</Div>";
    }
    AGASGPFSNoteHTMLViewComponent.prototype.ngOnInit = function () {
        var _this = this;
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
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, agasdata_service_1.AGASDataService])
], AGASGPFSNoteHTMLViewComponent);
exports.AGASGPFSNoteHTMLViewComponent = AGASGPFSNoteHTMLViewComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdhc0dQRlNOb3RlSHRtbFZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWdhc0dQRlNOb3RlSHRtbFZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQWlGO0FBRWpGLDBDQUEyRTtBQUUzRSx1REFBcUQ7QUFPckQsSUFBYSw2QkFBNkI7SUFtQnRDLHVDQUFvQixNQUFjLEVBQVUsS0FBcUIsRUFBVSxlQUFnQztRQUF2RixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFKcEcsYUFBUSxHQUFXLHNCQUFzQixDQUFDO0lBT2pELENBQUM7SUFDRCxnREFBUSxHQUFSO1FBQUEsaUJBeUJDO1FBeEJHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDbkMsS0FBSSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ3JELEtBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDakQsS0FBSSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ3JELEtBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQzdDLEtBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzNCLEtBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3pDLEtBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDL0MsS0FBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDekMsS0FBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDN0MsS0FBSSxDQUFDLG1CQUFtQixHQUFHLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQ3pELEtBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ25DLEtBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3ZDLEtBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3pDLEtBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3pDLEtBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3pDLEtBQUksQ0FBQyxrQkFBa0IsR0FBRyxNQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQztZQUN2RCxLQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBRWpELEtBQUksQ0FBQyxlQUFlLENBQUMscUJBQXFCLENBQUMsS0FBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsR0FBRztnQkFDN0UsS0FBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7WUFDeEIsQ0FBQyxDQUFDLENBQUM7UUFFUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCxzREFBYyxHQUFkO1FBQ0ksSUFBSSxnQkFBZ0IsR0FBcUI7WUFDckMsV0FBVyxFQUFFO2dCQUNULG1CQUFtQixFQUFFLElBQUksQ0FBQyxpQkFBaUI7Z0JBQzNDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxpQkFBaUI7Z0JBQzNDLGVBQWUsRUFBRSxJQUFJLENBQUMsYUFBYTtnQkFDbkMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGVBQWU7Z0JBQ3ZDLGFBQWEsRUFBRSxJQUFJLENBQUMsV0FBVztnQkFDL0IsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJO2dCQUNqQixhQUFhLEVBQUUsSUFBSSxDQUFDLFdBQVc7Z0JBQy9CLGdCQUFnQixFQUFFLElBQUksQ0FBQyxjQUFjO2dCQUNyQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFdBQVc7Z0JBQy9CLGVBQWUsRUFBRSxJQUFJLENBQUMsYUFBYTtnQkFDbkMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLG1CQUFtQjtnQkFDL0MsYUFBYSxFQUFFLElBQUksQ0FBQyxXQUFXO2dCQUMvQixZQUFZLEVBQUUsSUFBSSxDQUFDLFVBQVU7Z0JBQzdCLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUTthQUM1QjtTQUNKLENBQUM7UUFDRixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLHVCQUF1QixDQUFDLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBQ0wsb0NBQUM7QUFBRCxDQUFDLEFBdEVELElBc0VDO0FBdEVZLDZCQUE2QjtJQUx6QyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSx5QkFBeUI7UUFDbkMsV0FBVyxFQUFFLDJCQUEyQjtLQUMzQyxDQUFDO3FDQW9COEIsZUFBTSxFQUFpQix1QkFBYyxFQUEyQixrQ0FBZTtHQW5CbEcsNkJBQTZCLENBc0V6QztBQXRFWSxzRUFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgTmdab25lLCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUsIE5hdmlnYXRpb25FeHRyYXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlc1wiO1xyXG5pbXBvcnQgeyBBR0FTRGF0YVNlcnZpY2UgfSBmcm9tIFwiLi9hZ2FzZGF0YS5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogXCJmaW5hZ2dkZXRhaWxodG1sZGlzcGxheVwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiYWdhc0dQRlNOb3RlaHRtbHZpZXcuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBR0FTR1BGU05vdGVIVE1MVmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwdWJsaWMgZmluYW5jaWFseWVhcmRlc2M6IHN0cmluZztcclxuICAgIHB1YmxpYyBhY2NvdW50dHlwZWRlc2M6IHN0cmluZztcclxuICAgIHB1YmxpYyBmaW5hbmNpYWxwZXJpb2RJZDogc3RyaW5nO1xyXG4gICAgcHVibGljIGNvZGU6IHN0cmluZztcclxuICAgIHB1YmxpYyBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgcHVibGljIGN1cnJlbnRiYWxhbmNlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgZmluYWxidWRnZXQ6IHN0cmluZztcclxuICAgIHB1YmxpYyBpbml0aWFsYnVkZ2V0OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgc3VwcGxlbWVudGFyeWJ1ZGdldDogc3RyaW5nO1xyXG4gICAgcHVibGljIHZpcmVtZW50OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgdG90YWxkZWJpdDogc3RyaW5nO1xyXG4gICAgcHVibGljIHRvdGFsY3JlZGl0OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgZGlzcGxheXRpbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyBncGZzbm90ZXJlcXVlc3RrZXk6IHN0cmluZztcclxuICAgIHB1YmxpYyBodG1sdmlldzogc3RyaW5nID0gXCI8RGl2PkxvYWRpbmcuLjwvRGl2PlwiO1xyXG4gICAgcHVibGljIHF1ZXJ5ZGF0ZTogc3RyaW5nO1xyXG4gICAgcHVibGljIGFnYXNyZXF1ZXN0aWQ6IHN0cmluZztcclxuICAgIHB1YmxpYyByZXF1ZXN0ZGF0ZXRpbWU6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIGFnYXNkYXRhU2VydmljZTogQUdBU0RhdGFTZXJ2aWNlKSB7XHJcblxyXG5cclxuICAgIH1cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZmluYW5jaWFseWVhcmRlc2MgPSBwYXJhbXNbXCJmaW5hbmNpYWx5ZWFyZGVzY1wiXTtcclxuICAgICAgICAgICAgdGhpcy5hY2NvdW50dHlwZWRlc2MgPSBwYXJhbXNbXCJhY2NvdW50dHlwZWRlc2NcIl07XHJcbiAgICAgICAgICAgIHRoaXMuZmluYW5jaWFscGVyaW9kSWQgPSBwYXJhbXNbXCJmaW5hbmNpYWxwZXJpb2RJZFwiXTtcclxuICAgICAgICAgICAgdGhpcy5hZ2FzcmVxdWVzdGlkID0gcGFyYW1zW1wiYWdhc3JlcXVlc3RpZFwiXTtcclxuICAgICAgICAgICAgdGhpcy5jb2RlID0gcGFyYW1zW1wiY29kZVwiXTtcclxuICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IHBhcmFtc1tcIkRlc2NyaXB0aW9uXCJdO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRiYWxhbmNlID0gcGFyYW1zW1wiY3VycmVudGJhbGFuY2VcIl07XHJcbiAgICAgICAgICAgIHRoaXMuZmluYWxidWRnZXQgPSBwYXJhbXNbXCJmaW5hbGJ1ZGdldFwiXTtcclxuICAgICAgICAgICAgdGhpcy5pbml0aWFsYnVkZ2V0ID0gcGFyYW1zW1wiaW5pdGlhbGJ1ZGdldFwiXTtcclxuICAgICAgICAgICAgdGhpcy5zdXBwbGVtZW50YXJ5YnVkZ2V0ID0gcGFyYW1zW1wic3VwcGxlbWVudGFyeWJ1ZGdldFwiXTtcclxuICAgICAgICAgICAgdGhpcy52aXJlbWVudCA9IHBhcmFtc1tcInZpcmVtZW50XCJdO1xyXG4gICAgICAgICAgICB0aGlzLnRvdGFsZGViaXQgPSBwYXJhbXNbXCJ0b3RhbGRlYml0XCJdO1xyXG4gICAgICAgICAgICB0aGlzLnRvdGFsY3JlZGl0ID0gcGFyYW1zW1widG90YWxjcmVkaXRcIl07XHJcbiAgICAgICAgICAgIHRoaXMudG90YWxjcmVkaXQgPSBwYXJhbXNbXCJ0b3RhbGNyZWRpdFwiXTtcclxuICAgICAgICAgICAgdGhpcy5kaXNwbGF5dGltZSA9IHBhcmFtc1tcImRpc3BsYXl0aW1lXCJdO1xyXG4gICAgICAgICAgICB0aGlzLmdwZnNub3RlcmVxdWVzdGtleSA9IHBhcmFtc1tcImdwZnNub3RlcmVxdWVzdGtleVwiXTtcclxuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0ZGF0ZXRpbWUgPSBwYXJhbXNbXCJyZXF1ZXN0ZGF0ZXRpbWVcIl07XHJcblxyXG4gICAgICAgICAgICB0aGlzLmFnYXNkYXRhU2VydmljZS5nZXRHUEZTTm90ZUhUTUxSZXN1bHQodGhpcy5ncGZzbm90ZXJlcXVlc3RrZXkpLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5odG1sdmlldyA9IHJlcztcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZ29iYWNrdG9kZXRhaWwoKSB7XHJcbiAgICAgICAgbGV0IG5hdmlnYXRpb25FeHRyYXM6IE5hdmlnYXRpb25FeHRyYXMgPSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICBcImZpbmFuY2lhbHllYXJkZXNjXCI6IHRoaXMuZmluYW5jaWFseWVhcmRlc2MsXHJcbiAgICAgICAgICAgICAgICBcImZpbmFuY2lhbHBlcmlvZElkXCI6IHRoaXMuZmluYW5jaWFscGVyaW9kSWQsXHJcbiAgICAgICAgICAgICAgICBcImFnYXNyZXF1ZXN0aWRcIjogdGhpcy5hZ2FzcmVxdWVzdGlkLFxyXG4gICAgICAgICAgICAgICAgXCJhY2NvdW50dHlwZWRlc2NcIjogdGhpcy5hY2NvdW50dHlwZWRlc2MsXHJcbiAgICAgICAgICAgICAgICBcImRpc3BsYXl0aW1lXCI6IHRoaXMuZGlzcGxheXRpbWUsXHJcbiAgICAgICAgICAgICAgICBcImNvZGVcIjogdGhpcy5jb2RlLFxyXG4gICAgICAgICAgICAgICAgXCJEZXNjcmlwdGlvblwiOiB0aGlzLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgXCJjdXJyZW50YmFsYW5jZVwiOiB0aGlzLmN1cnJlbnRiYWxhbmNlLFxyXG4gICAgICAgICAgICAgICAgXCJmaW5hbGJ1ZGdldFwiOiB0aGlzLmZpbmFsYnVkZ2V0LFxyXG4gICAgICAgICAgICAgICAgXCJpbml0aWFsYnVkZ2V0XCI6IHRoaXMuaW5pdGlhbGJ1ZGdldCxcclxuICAgICAgICAgICAgICAgIFwic3VwcGxlbWVudGFyeWJ1ZGdldFwiOiB0aGlzLnN1cHBsZW1lbnRhcnlidWRnZXQsXHJcbiAgICAgICAgICAgICAgICBcInRvdGFsY3JlZGl0XCI6IHRoaXMudG90YWxjcmVkaXQsXHJcbiAgICAgICAgICAgICAgICBcInRvdGFsZGViaXRcIjogdGhpcy50b3RhbGRlYml0LFxyXG4gICAgICAgICAgICAgICAgXCJ2aXJlbWVudFwiOiB0aGlzLnZpcmVtZW50XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImFnYXNmaW5hZ2ctaW5mb2RldGFpbFwiXSwgbmF2aWdhdGlvbkV4dHJhcyk7XHJcbiAgICB9XHJcbn0iXX0=