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
var AprovalRequestInfoComponent = (function () {
    function AprovalRequestInfoComponent(router) {
        this.router = router;
        this.showlogbutton = true;
    }
    AprovalRequestInfoComponent.prototype.ngOnInit = function () {
    };
    AprovalRequestInfoComponent.prototype.opendetail = function () {
        var navigationExtras = {
            queryParams: {
                "primarykey": this.apprequestinfo.primarykey,
                "groupkey": this.apprequestinfo.groupkey
            }
        };
        this.router.navigate(["mobile-trans-approval-detail"], navigationExtras);
    };
    AprovalRequestInfoComponent.prototype.openlogdetail = function () {
        var navigationExtras = {
            queryParams: {
                "primarykey": this.apprequestinfo.primarykey,
                "groupkey": this.apprequestinfo.groupkey
            }
        };
        this.router.navigate(["approvalLogdetail"], navigationExtras);
    };
    return AprovalRequestInfoComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], AprovalRequestInfoComponent.prototype, "apprequestinfo", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], AprovalRequestInfoComponent.prototype, "showlogbutton", void 0);
AprovalRequestInfoComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "approval-request-info",
        templateUrl: "approvalRequestInfo.html"
    }),
    __metadata("design:paramtypes", [router_1.Router])
], AprovalRequestInfoComponent);
exports.AprovalRequestInfoComponent = AprovalRequestInfoComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwcm92YWxSZXF1ZXN0SW5mby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHByb3ZhbFJlcXVlc3RJbmZvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUF5RDtBQUN6RCwwQ0FBMkU7QUFRM0UsSUFBYSwyQkFBMkI7SUFHcEMscUNBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRHhCLGtCQUFhLEdBQVksSUFBSSxDQUFDO0lBRXhDLENBQUM7SUFDRCw4Q0FBUSxHQUFSO0lBRUEsQ0FBQztJQUVELGdEQUFVLEdBQVY7UUFDSSxJQUFJLGdCQUFnQixHQUFxQjtZQUNyQyxXQUFXLEVBQUU7Z0JBQ1QsWUFBWSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVTtnQkFDNUMsVUFBVSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUTthQUMzQztTQUNKLENBQUM7UUFDRixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLDhCQUE4QixDQUFDLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBQ0EsbURBQWEsR0FBYjtRQUNHLElBQUksZ0JBQWdCLEdBQXFCO1lBQ3JDLFdBQVcsRUFBRTtnQkFDVCxZQUFZLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVO2dCQUM1QyxVQUFVLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRO2FBQzNDO1NBQ0osQ0FBQztRQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsbUJBQW1CLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFDTCxrQ0FBQztBQUFELENBQUMsQUEzQkQsSUEyQkM7QUExQlk7SUFBUixZQUFLLEVBQUU7O21FQUFxQjtBQUNuQjtJQUFSLFlBQUssRUFBRTs7a0VBQStCO0FBRi9CLDJCQUEyQjtJQUx2QyxnQkFBUyxDQUFDO1FBQ04sUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ3BCLFFBQVEsRUFBRSx1QkFBdUI7UUFDakMsV0FBVyxFQUFFLDBCQUEwQjtLQUMxQyxDQUFDO3FDQUk4QixlQUFNO0dBSHpCLDJCQUEyQixDQTJCdkM7QUEzQlksa0VBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUsIE5hdmlnYXRpb25FeHRyYXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyL3JvdXRlci1leHRlbnNpb25zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogXCJhcHByb3ZhbC1yZXF1ZXN0LWluZm9cIixcclxuICAgIHRlbXBsYXRlVXJsOiBcImFwcHJvdmFsUmVxdWVzdEluZm8uaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHJvdmFsUmVxdWVzdEluZm9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgQElucHV0KCkgYXBwcmVxdWVzdGluZm86IGFueTtcclxuICAgICBASW5wdXQoKSBzaG93bG9nYnV0dG9uIDpib29sZWFuID0gdHJ1ZTtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgIH1cclxuICAgIG5nT25Jbml0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvcGVuZGV0YWlsKCkge1xyXG4gICAgICAgIGxldCBuYXZpZ2F0aW9uRXh0cmFzOiBOYXZpZ2F0aW9uRXh0cmFzID0ge1xyXG4gICAgICAgICAgICBxdWVyeVBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgXCJwcmltYXJ5a2V5XCI6IHRoaXMuYXBwcmVxdWVzdGluZm8ucHJpbWFyeWtleSxcclxuICAgICAgICAgICAgICAgIFwiZ3JvdXBrZXlcIjogdGhpcy5hcHByZXF1ZXN0aW5mby5ncm91cGtleVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJtb2JpbGUtdHJhbnMtYXBwcm92YWwtZGV0YWlsXCJdLCBuYXZpZ2F0aW9uRXh0cmFzKTtcclxuICAgIH1cclxuICAgICBvcGVubG9nZGV0YWlsKCkge1xyXG4gICAgICAgIGxldCBuYXZpZ2F0aW9uRXh0cmFzOiBOYXZpZ2F0aW9uRXh0cmFzID0ge1xyXG4gICAgICAgICAgICBxdWVyeVBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgXCJwcmltYXJ5a2V5XCI6IHRoaXMuYXBwcmVxdWVzdGluZm8ucHJpbWFyeWtleSxcclxuICAgICAgICAgICAgICAgIFwiZ3JvdXBrZXlcIjogdGhpcy5hcHByZXF1ZXN0aW5mby5ncm91cGtleVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJhcHByb3ZhbExvZ2RldGFpbFwiXSwgbmF2aWdhdGlvbkV4dHJhcyk7XHJcbiAgICB9XHJcbn0iXX0=