"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gpfsAlertNotifcation = (function () {
    function gpfsAlertNotifcation() {
    }
    gpfsAlertNotifcation.prototype.takeMessage = function (message) {
        this.message = message;
    };
    gpfsAlertNotifcation.prototype.remoteNotifcationNavigationExtras = function () {
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
    gpfsAlertNotifcation.prototype.localNotifcationNavigationExtras = function () {
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
    gpfsAlertNotifcation.prototype.view = function () {
        return "agasalerthtml-view";
    };
    return gpfsAlertNotifcation;
}());
exports.gpfsAlertNotifcation = gpfsAlertNotifcation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3Bmc0FsZXJ0Tm90aWZjYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJncGZzQWxlcnROb3RpZmNhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUtBO0lBRUU7SUFFQSxDQUFDO0lBQ0YsMENBQVcsR0FBWCxVQUFZLE9BQVk7UUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQztJQUNELGdFQUFpQyxHQUFqQztRQUNFLElBQUksZ0JBQWdCLEdBQXFCO1lBQ3ZDLFdBQVcsRUFBRTtnQkFDWCxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSTtnQkFDOUIsZUFBZSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWE7Z0JBQ2hELFNBQVMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPO2dCQUNwQyxXQUFXLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUzthQUN6QztTQUNGLENBQUM7UUFFRixNQUFNLENBQUMsZ0JBQWdCLENBQUM7SUFDMUIsQ0FBQztJQUNELCtEQUFnQyxHQUFoQztRQUNFLElBQUksZ0JBQWdCLEdBQXFCO1lBQ3ZDLFdBQVcsRUFBRTtnQkFDWCxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJO2dCQUN6QixlQUFlLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhO2dCQUMzQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPO2dCQUMvQixXQUFXLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTO2FBQ3BDO1NBQ0YsQ0FBQztRQUNGLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztJQUMxQixDQUFDO0lBQ0QsbUNBQUksR0FBSjtRQUNFLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQTtJQUM3QixDQUFDO0lBQ0gsMkJBQUM7QUFBRCxDQUFDLEFBbENELElBa0NDO0FBbENZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgTmF2aWdhdGlvbkV4dHJhcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCAqIGFzIExvY2FsTm90aWZpY2F0aW9ucyBmcm9tIFwibmF0aXZlc2NyaXB0LWxvY2FsLW5vdGlmaWNhdGlvbnNcIjtcclxuaW1wb3J0ICogYXMgcm91dGVyIGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBncGZzQWxlcnROb3RpZmNhdGlvbiB7XHJcbiAgIG1lc3NhZ2U6IGFueTtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgLy8gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkobWVzc2FnZSkpO1xyXG4gIH1cclxuIHRha2VNZXNzYWdlKG1lc3NhZ2U6IGFueSkge1xyXG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcclxuICB9XHJcbiAgcmVtb3RlTm90aWZjYXRpb25OYXZpZ2F0aW9uRXh0cmFzKCk6IE5hdmlnYXRpb25FeHRyYXMge1xyXG4gICAgbGV0IG5hdmlnYXRpb25FeHRyYXM6IE5hdmlnYXRpb25FeHRyYXMgPSB7XHJcbiAgICAgIHF1ZXJ5UGFyYW1zOiB7XHJcbiAgICAgICAgXCJuYW1lXCI6IHRoaXMubWVzc2FnZS5kYXRhLm5hbWUsXHJcbiAgICAgICAgXCJyZXF1aXJlZHBhcmFtXCI6IHRoaXMubWVzc2FnZS5kYXRhLnJlcXVpcmVkcGFyYW0sXHJcbiAgICAgICAgXCJsb2d0aW1lXCI6IHRoaXMubWVzc2FnZS5kYXRhLmxvZ3RpbWUsXHJcbiAgICAgICAgXCJyZXF1ZXN0aWRcIjogdGhpcy5tZXNzYWdlLmRhdGEucmVxdWVzdGlkXHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIG5hdmlnYXRpb25FeHRyYXM7XHJcbiAgfVxyXG4gIGxvY2FsTm90aWZjYXRpb25OYXZpZ2F0aW9uRXh0cmFzKCk6IE5hdmlnYXRpb25FeHRyYXMge1xyXG4gICAgbGV0IG5hdmlnYXRpb25FeHRyYXM6IE5hdmlnYXRpb25FeHRyYXMgPSB7XHJcbiAgICAgIHF1ZXJ5UGFyYW1zOiB7XHJcbiAgICAgICAgXCJuYW1lXCI6IHRoaXMubWVzc2FnZS5uYW1lLFxyXG4gICAgICAgIFwicmVxdWlyZWRwYXJhbVwiOiB0aGlzLm1lc3NhZ2UucmVxdWlyZWRwYXJhbSxcclxuICAgICAgICBcImxvZ3RpbWVcIjogdGhpcy5tZXNzYWdlLmxvZ3RpbWUsXHJcbiAgICAgICAgXCJyZXF1ZXN0aWRcIjogdGhpcy5tZXNzYWdlLnJlcXVlc3RpZFxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIG5hdmlnYXRpb25FeHRyYXM7XHJcbiAgfVxyXG4gIHZpZXcoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBcImFnYXNhbGVydGh0bWwtdmlld1wiXHJcbiAgfVxyXG59Il19