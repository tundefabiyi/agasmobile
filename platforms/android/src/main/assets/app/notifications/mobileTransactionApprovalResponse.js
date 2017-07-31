"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mobileTransactionApprovalResponse = (function () {
    function mobileTransactionApprovalResponse() {
    }
    mobileTransactionApprovalResponse.prototype.takeMessage = function (message) {
        this.message = message;
    };
    mobileTransactionApprovalResponse.prototype.remoteNotifcationNavigationExtras = function () {
        var navigationExtras = {
            queryParams: {
                "primarykey": this.message.data.primarykey,
                "groupkey": this.message.data.groupkey
            }
        };
        return navigationExtras;
    };
    mobileTransactionApprovalResponse.prototype.localNotifcationNavigationExtras = function () {
        var navigationExtras = {
            queryParams: {
                "primarykey": this.message.primarykey,
                "groupkey": this.message.groupkey
            }
        };
        return navigationExtras;
    };
    mobileTransactionApprovalResponse.prototype.view = function () {
        return "mobile-trans-approval-detail";
    };
    return mobileTransactionApprovalResponse;
}());
exports.mobileTransactionApprovalResponse = mobileTransactionApprovalResponse;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9iaWxlVHJhbnNhY3Rpb25BcHByb3ZhbFJlc3BvbnNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9iaWxlVHJhbnNhY3Rpb25BcHByb3ZhbFJlc3BvbnNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBUUE7SUFFRTtJQUVBLENBQUM7SUFDRCx1REFBVyxHQUFYLFVBQVksT0FBWTtRQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN6QixDQUFDO0lBQ0QsNkVBQWlDLEdBQWpDO1FBQ0UsSUFBSSxnQkFBZ0IsR0FBcUI7WUFDdkMsV0FBVyxFQUFFO2dCQUNYLFlBQVksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVO2dCQUMxQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUTthQUN2QztTQUNGLENBQUM7UUFDRixNQUFNLENBQUMsZ0JBQWdCLENBQUM7SUFDMUIsQ0FBQztJQUNELDRFQUFnQyxHQUFoQztRQUNFLElBQUksZ0JBQWdCLEdBQXFCO1lBQ3ZDLFdBQVcsRUFBRTtnQkFDWCxZQUFZLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVO2dCQUNyQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRO2FBQ2xDO1NBQ0YsQ0FBQztRQUNGLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztJQUMxQixDQUFDO0lBQ0QsZ0RBQUksR0FBSjtRQUNFLE1BQU0sQ0FBQyw4QkFBOEIsQ0FBQTtJQUN2QyxDQUFDO0lBQ0gsd0NBQUM7QUFBRCxDQUFDLEFBN0JELElBNkJDO0FBN0JZLDhFQUFpQyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgTmF2aWdhdGlvbkV4dHJhcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCAqIGFzIExvY2FsTm90aWZpY2F0aW9ucyBmcm9tIFwibmF0aXZlc2NyaXB0LWxvY2FsLW5vdGlmaWNhdGlvbnNcIjtcclxuaW1wb3J0ICogYXMgcm91dGVyIGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuLy8gbmFtZXNwYWNlIE5vdGlmaWNhdGlvbnMge1xyXG5cclxuXHJcbi8vIH1cclxuZXhwb3J0IGNsYXNzIG1vYmlsZVRyYW5zYWN0aW9uQXBwcm92YWxSZXNwb25zZSB7XHJcbiAgbWVzc2FnZTogYW55O1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLy9jb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShtZXNzYWdlKSk7XHJcbiAgfVxyXG4gIHRha2VNZXNzYWdlKG1lc3NhZ2U6IGFueSkge1xyXG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcclxuICB9XHJcbiAgcmVtb3RlTm90aWZjYXRpb25OYXZpZ2F0aW9uRXh0cmFzKCk6IE5hdmlnYXRpb25FeHRyYXMge1xyXG4gICAgbGV0IG5hdmlnYXRpb25FeHRyYXM6IE5hdmlnYXRpb25FeHRyYXMgPSB7XHJcbiAgICAgIHF1ZXJ5UGFyYW1zOiB7XHJcbiAgICAgICAgXCJwcmltYXJ5a2V5XCI6IHRoaXMubWVzc2FnZS5kYXRhLnByaW1hcnlrZXksXHJcbiAgICAgICAgXCJncm91cGtleVwiOiB0aGlzLm1lc3NhZ2UuZGF0YS5ncm91cGtleVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIG5hdmlnYXRpb25FeHRyYXM7XHJcbiAgfVxyXG4gIGxvY2FsTm90aWZjYXRpb25OYXZpZ2F0aW9uRXh0cmFzKCk6IE5hdmlnYXRpb25FeHRyYXMge1xyXG4gICAgbGV0IG5hdmlnYXRpb25FeHRyYXM6IE5hdmlnYXRpb25FeHRyYXMgPSB7XHJcbiAgICAgIHF1ZXJ5UGFyYW1zOiB7XHJcbiAgICAgICAgXCJwcmltYXJ5a2V5XCI6IHRoaXMubWVzc2FnZS5wcmltYXJ5a2V5LFxyXG4gICAgICAgIFwiZ3JvdXBrZXlcIjogdGhpcy5tZXNzYWdlLmdyb3Vwa2V5XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gbmF2aWdhdGlvbkV4dHJhcztcclxuICB9XHJcbiAgdmlldygpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIFwibW9iaWxlLXRyYW5zLWFwcHJvdmFsLWRldGFpbFwiXHJcbiAgfVxyXG59Il19