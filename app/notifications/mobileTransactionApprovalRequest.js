"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mobileTransactionApprovalRequest = (function () {
    function mobileTransactionApprovalRequest() {
    }
    mobileTransactionApprovalRequest.prototype.takeMessage = function (message) {
        this.message = message;
    };
    mobileTransactionApprovalRequest.prototype.remoteNotifcationNavigationExtras = function () {
        var navigationExtras = {
            queryParams: {
                "primarykey": this.message.data.primarykey,
                "groupkey": this.message.data.groupkey
            }
        };
        return navigationExtras;
    };
    mobileTransactionApprovalRequest.prototype.localNotifcationNavigationExtras = function () {
        var navigationExtras = {
            queryParams: {
                "primarykey": this.message.primarykey,
                "groupkey": this.message.groupkey
            }
        };
        return navigationExtras;
    };
    mobileTransactionApprovalRequest.prototype.view = function () {
        return "mobile-trans-approval-detail";
    };
    return mobileTransactionApprovalRequest;
}());
exports.mobileTransactionApprovalRequest = mobileTransactionApprovalRequest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9iaWxlVHJhbnNhY3Rpb25BcHByb3ZhbFJlcXVlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtb2JpbGVUcmFuc2FjdGlvbkFwcHJvdmFsUmVxdWVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQVFBO0lBRUU7SUFFQSxDQUFDO0lBQ0Qsc0RBQVcsR0FBWCxVQUFZLE9BQVk7UUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQztJQUNELDRFQUFpQyxHQUFqQztRQUNFLElBQUksZ0JBQWdCLEdBQXFCO1lBQ3ZDLFdBQVcsRUFBRTtnQkFDWCxZQUFZLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVTtnQkFDMUMsVUFBVSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVE7YUFDdkM7U0FDRixDQUFDO1FBRUYsTUFBTSxDQUFDLGdCQUFnQixDQUFDO0lBQzFCLENBQUM7SUFDRCwyRUFBZ0MsR0FBaEM7UUFDRSxJQUFJLGdCQUFnQixHQUFxQjtZQUN2QyxXQUFXLEVBQUU7Z0JBQ1gsWUFBWSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVTtnQkFDckMsVUFBVSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUTthQUNsQztTQUNGLENBQUM7UUFDRixNQUFNLENBQUMsZ0JBQWdCLENBQUM7SUFDMUIsQ0FBQztJQUNELCtDQUFJLEdBQUo7UUFDRSxNQUFNLENBQUMsOEJBQThCLENBQUE7SUFDdkMsQ0FBQztJQUNILHVDQUFDO0FBQUQsQ0FBQyxBQTlCRCxJQThCQztBQTlCWSw0RUFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIE5hdmlnYXRpb25FeHRyYXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgKiBhcyBMb2NhbE5vdGlmaWNhdGlvbnMgZnJvbSBcIm5hdGl2ZXNjcmlwdC1sb2NhbC1ub3RpZmljYXRpb25zXCI7XHJcbmltcG9ydCAqIGFzIHJvdXRlciBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbi8vIG5hbWVzcGFjZSBOb3RpZmljYXRpb25zIHtcclxuXHJcblxyXG4vLyB9XHJcbmV4cG9ydCBjbGFzcyBtb2JpbGVUcmFuc2FjdGlvbkFwcHJvdmFsUmVxdWVzdCB7XHJcbiAgbWVzc2FnZTogYW55O1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLy9jb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShtZXNzYWdlKSk7XHJcbiAgfVxyXG4gIHRha2VNZXNzYWdlKG1lc3NhZ2U6IGFueSkge1xyXG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcclxuICB9XHJcbiAgcmVtb3RlTm90aWZjYXRpb25OYXZpZ2F0aW9uRXh0cmFzKCk6IE5hdmlnYXRpb25FeHRyYXMge1xyXG4gICAgbGV0IG5hdmlnYXRpb25FeHRyYXM6IE5hdmlnYXRpb25FeHRyYXMgPSB7XHJcbiAgICAgIHF1ZXJ5UGFyYW1zOiB7XHJcbiAgICAgICAgXCJwcmltYXJ5a2V5XCI6IHRoaXMubWVzc2FnZS5kYXRhLnByaW1hcnlrZXksXHJcbiAgICAgICAgXCJncm91cGtleVwiOiB0aGlzLm1lc3NhZ2UuZGF0YS5ncm91cGtleVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBuYXZpZ2F0aW9uRXh0cmFzO1xyXG4gIH1cclxuICBsb2NhbE5vdGlmY2F0aW9uTmF2aWdhdGlvbkV4dHJhcygpOiBOYXZpZ2F0aW9uRXh0cmFzIHtcclxuICAgIGxldCBuYXZpZ2F0aW9uRXh0cmFzOiBOYXZpZ2F0aW9uRXh0cmFzID0ge1xyXG4gICAgICBxdWVyeVBhcmFtczoge1xyXG4gICAgICAgIFwicHJpbWFyeWtleVwiOiB0aGlzLm1lc3NhZ2UucHJpbWFyeWtleSxcclxuICAgICAgICBcImdyb3Vwa2V5XCI6IHRoaXMubWVzc2FnZS5ncm91cGtleVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIG5hdmlnYXRpb25FeHRyYXM7XHJcbiAgfVxyXG4gIHZpZXcoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBcIm1vYmlsZS10cmFucy1hcHByb3ZhbC1kZXRhaWxcIlxyXG4gIH1cclxufSJdfQ==