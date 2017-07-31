"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gpfsAlertNotification = (function () {
    function gpfsAlertNotification() {
    }
    gpfsAlertNotification.prototype.takeMessage = function (message) {
        this.message = message;
    };
    gpfsAlertNotification.prototype.remoteNotifcationNavigationExtras = function () {
        var navigationExtras = {
            queryParams: {
                "name": this.message.data.name,
                "requiredparam": this.message.data.requiredparam,
                "logtime": this.message.data.logtime,
                "requestid": this.message.data.requestid
            }
        };
        return navigationExtras;
    };
    gpfsAlertNotification.prototype.localNotifcationNavigationExtras = function () {
        var navigationExtras = {
            queryParams: {
                "name": this.message.name,
                "requiredparam": this.message.requiredparam,
                "logtime": this.message.logtime,
                "requestid": this.message.requestid
            }
        };
        return navigationExtras;
    };
    gpfsAlertNotification.prototype.view = function () {
        return "agasalerthtml-view";
    };
    return gpfsAlertNotification;
}());
exports.gpfsAlertNotification = gpfsAlertNotification;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3Bmc0FsZXJ0Tm90aWZpY2F0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ3Bmc0FsZXJ0Tm90aWZpY2F0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBS0E7SUFFRTtJQUVBLENBQUM7SUFDRiwyQ0FBVyxHQUFYLFVBQVksT0FBWTtRQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN6QixDQUFDO0lBQ0QsaUVBQWlDLEdBQWpDO1FBQ0UsSUFBSSxnQkFBZ0IsR0FBcUI7WUFDdkMsV0FBVyxFQUFFO2dCQUNYLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJO2dCQUM5QixlQUFlLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYTtnQkFDaEQsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU87Z0JBQ3BDLFdBQVcsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTO2FBQ3pDO1NBQ0YsQ0FBQztRQUVGLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztJQUMxQixDQUFDO0lBQ0QsZ0VBQWdDLEdBQWhDO1FBQ0UsSUFBSSxnQkFBZ0IsR0FBcUI7WUFDdkMsV0FBVyxFQUFFO2dCQUNYLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUk7Z0JBQ3pCLGVBQWUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWE7Z0JBQzNDLFNBQVMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU87Z0JBQy9CLFdBQVcsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVM7YUFDcEM7U0FDRixDQUFDO1FBQ0YsTUFBTSxDQUFDLGdCQUFnQixDQUFDO0lBQzFCLENBQUM7SUFDRCxvQ0FBSSxHQUFKO1FBQ0UsTUFBTSxDQUFDLG9CQUFvQixDQUFBO0lBQzdCLENBQUM7SUFDSCw0QkFBQztBQUFELENBQUMsQUFsQ0QsSUFrQ0M7QUFsQ1ksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBOYXZpZ2F0aW9uRXh0cmFzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0ICogYXMgTG9jYWxOb3RpZmljYXRpb25zIGZyb20gXCJuYXRpdmVzY3JpcHQtbG9jYWwtbm90aWZpY2F0aW9uc1wiO1xyXG5pbXBvcnQgKiBhcyByb3V0ZXIgZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIGdwZnNBbGVydE5vdGlmaWNhdGlvbiB7XHJcbiAgIG1lc3NhZ2U6IGFueTtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgLy8gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkobWVzc2FnZSkpO1xyXG4gIH1cclxuIHRha2VNZXNzYWdlKG1lc3NhZ2U6IGFueSkge1xyXG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcclxuICB9XHJcbiAgcmVtb3RlTm90aWZjYXRpb25OYXZpZ2F0aW9uRXh0cmFzKCk6IE5hdmlnYXRpb25FeHRyYXMge1xyXG4gICAgbGV0IG5hdmlnYXRpb25FeHRyYXM6IE5hdmlnYXRpb25FeHRyYXMgPSB7XHJcbiAgICAgIHF1ZXJ5UGFyYW1zOiB7XHJcbiAgICAgICAgXCJuYW1lXCI6IHRoaXMubWVzc2FnZS5kYXRhLm5hbWUsXHJcbiAgICAgICAgXCJyZXF1aXJlZHBhcmFtXCI6IHRoaXMubWVzc2FnZS5kYXRhLnJlcXVpcmVkcGFyYW0sXHJcbiAgICAgICAgXCJsb2d0aW1lXCI6IHRoaXMubWVzc2FnZS5kYXRhLmxvZ3RpbWUsXHJcbiAgICAgICAgXCJyZXF1ZXN0aWRcIjogdGhpcy5tZXNzYWdlLmRhdGEucmVxdWVzdGlkXHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIG5hdmlnYXRpb25FeHRyYXM7XHJcbiAgfVxyXG4gIGxvY2FsTm90aWZjYXRpb25OYXZpZ2F0aW9uRXh0cmFzKCk6IE5hdmlnYXRpb25FeHRyYXMge1xyXG4gICAgbGV0IG5hdmlnYXRpb25FeHRyYXM6IE5hdmlnYXRpb25FeHRyYXMgPSB7XHJcbiAgICAgIHF1ZXJ5UGFyYW1zOiB7XHJcbiAgICAgICAgXCJuYW1lXCI6IHRoaXMubWVzc2FnZS5uYW1lLFxyXG4gICAgICAgIFwicmVxdWlyZWRwYXJhbVwiOiB0aGlzLm1lc3NhZ2UucmVxdWlyZWRwYXJhbSxcclxuICAgICAgICBcImxvZ3RpbWVcIjogdGhpcy5tZXNzYWdlLmxvZ3RpbWUsXHJcbiAgICAgICAgXCJyZXF1ZXN0aWRcIjogdGhpcy5tZXNzYWdlLnJlcXVlc3RpZFxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIG5hdmlnYXRpb25FeHRyYXM7XHJcbiAgfVxyXG4gIHZpZXcoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBcImFnYXNhbGVydGh0bWwtdmlld1wiXHJcbiAgfVxyXG59Il19