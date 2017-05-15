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
var firebase = require("nativescript-plugin-firebase");
var Observable_1 = require("rxjs/Observable");
var chat_service_1 = require("../chatlist/chat.service");
var backend_service_1 = require("../services/backend.service");
var AGASAlertService = (function () {
    function AGASAlertService(ngZone, chatService, BackendService) {
        this.ngZone = ngZone;
        this.chatService = chatService;
        this.BackendService = BackendService;
        this._agasrequestlist = [];
    }
    AGASAlertService.prototype.getAGASAlertTypeList = function () {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            var path = '/AGASAlertType';
            var onValueEvent = function (snapshot) {
                _this.ngZone.run(function () {
                    observer.next(snapshot.value);
                });
            };
            firebase.addValueEventListener(onValueEvent, "" + path);
        }).share();
    };
    AGASAlertService.prototype.getBalanceSheetCodesList = function () {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            var path = '/BalanceSheetCodes';
            var onValueEvent = function (snapshot) {
                _this.ngZone.run(function () {
                    observer.next(snapshot.value);
                });
            };
            firebase.addValueEventListener(onValueEvent, "" + path);
        }).share();
    };
    AGASAlertService.prototype.getCashFlowStatementCodesList = function () {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            var path = '/CashFlowStatementCodes';
            var onValueEvent = function (snapshot) {
                _this.ngZone.run(function () {
                    observer.next(snapshot.value);
                });
            };
            firebase.addValueEventListener(onValueEvent, "" + path);
        }).share();
    };
    AGASAlertService.prototype.getFinancialPerformanceCodesList = function () {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            var path = '/FinancialPerformanceCodes';
            var onValueEvent = function (snapshot) {
                _this.ngZone.run(function () {
                    observer.next(snapshot.value);
                });
            };
            firebase.addValueEventListener(onValueEvent, "" + path);
        }).share();
    };
    AGASAlertService.prototype.createAlertRequest = function (requestparam, logparam, userid) {
        var requestpath = '/AGASAlertRequest';
        var displaytime = Date.now().toString();
        var email = this.chatService.cleanemail(userid);
        logparam.logtime = displaytime;
        logparam.alertdetected = 0;
        logparam.userid = email;
        requestparam.userid = email;
        requestparam.logtime = displaytime;
        requestparam.messagingtoken = backend_service_1.BackendService.messagingtoken;
        return firebase.push(requestpath, requestparam).then(function (result) {
            var logpath = "/AGASAlertRequestLog/" + email + "/" + result.key;
            logparam.requestid = result.key;
            logparam.messagingtoken = backend_service_1.BackendService.messagingtoken;
            return firebase.setValue(logpath, logparam);
        });
    };
    AGASAlertService.prototype.getAlertRequestList = function (userid) {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            var email = _this.chatService.cleanemail(userid);
            var path = "/AGASAlertRequestLog/" + email;
            ;
            var onValueEvent = function (snapshot) {
                _this.ngZone.run(function () {
                    var results = _this.handleAGASRequestSnapshot(snapshot.value);
                    observer.next(results);
                });
            };
            firebase.addValueEventListener(onValueEvent, "" + path);
        }).share();
    };
    AGASAlertService.prototype.handleAGASRequestSnapshot = function (data) {
        this._agasrequestlist = [];
        if (data) {
            for (var id in data) {
                var result = Object.assign({ id: id }, data[id]);
                this._agasrequestlist.push(result);
            }
            this._agasrequestlist.sort(function (a, b) {
                if (a.logtime > b.logtime)
                    return 1;
                if (a.logtime < b.logtime)
                    return -1;
                return 0;
            });
        }
        return this._agasrequestlist;
    };
    AGASAlertService.prototype.getHTMLResult = function (requestid) {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            var path = "/AGASAlertResponse/" + requestid;
            var onValueEvent = function (snapshot) {
                _this.ngZone.run(function () {
                    observer.next(snapshot.value);
                });
            };
            firebase.addValueEventListener(onValueEvent, "" + path);
        }).share();
    };
    return AGASAlertService;
}());
AGASAlertService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [core_1.NgZone,
        chat_service_1.ChatService,
        backend_service_1.BackendService])
], AGASAlertService);
exports.AGASAlertService = AGASAlertService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdhc2FsZXJ0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhZ2FzYWxlcnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEyRDtBQUMzRCx1REFBMEQ7QUFDMUQsOENBQTZDO0FBRTdDLHlEQUF1RDtBQUd2RCwrREFBNkQ7QUFFN0QsSUFBYSxnQkFBZ0I7SUFFekIsMEJBQ1ksTUFBYyxFQUNkLFdBQXdCLEVBQ3hCLGNBQThCO1FBRjlCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFKbEMscUJBQWdCLEdBQWUsRUFBRSxDQUFDO0lBTzFDLENBQUM7SUFDRCwrQ0FBb0IsR0FBcEI7UUFBQSxpQkFVQztRQVRHLE1BQU0sQ0FBQyxJQUFJLHVCQUFVLENBQUMsVUFBQyxRQUFhO1lBQ2hDLElBQUksSUFBSSxHQUFHLGdCQUFnQixDQUFDO1lBQzVCLElBQUksWUFBWSxHQUFHLFVBQUMsUUFBYTtnQkFDN0IsS0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7b0JBQ1osUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2xDLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDO1lBQ0YsUUFBUSxDQUFDLHFCQUFxQixDQUFDLFlBQVksRUFBRSxLQUFHLElBQU0sQ0FBQyxDQUFDO1FBQzVELENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUNELG1EQUF3QixHQUF4QjtRQUFBLGlCQVVDO1FBVEcsTUFBTSxDQUFDLElBQUksdUJBQVUsQ0FBQyxVQUFDLFFBQWE7WUFDaEMsSUFBSSxJQUFJLEdBQUcsb0JBQW9CLENBQUM7WUFDaEMsSUFBSSxZQUFZLEdBQUcsVUFBQyxRQUFhO2dCQUM3QixLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FB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T0FBTyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUM7b0JBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNyQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2IsQ0FBQyxDQUFDLENBQUE7UUFHTixDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUNqQyxDQUFDO0lBQ0Qsd0NBQWEsR0FBYixVQUFjLFNBQWlCO1FBQS9CLGlCQVVDO1FBVEcsTUFBTSxDQUFDLElBQUksdUJBQVUsQ0FBQyxVQUFDLFFBQWE7WUFDaEMsSUFBSSxJQUFJLEdBQUcsd0JBQXNCLFNBQVcsQ0FBQztZQUM3QyxJQUFJLFlBQVksR0FBRyxVQUFDLFFBQWE7Z0JBQzdCLEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO29CQUNaLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNsQyxDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQztZQUNGLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZLEVBQUUsS0FBRyxJQUFNLENBQUMsQ0FBQztRQUM1RCxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFDTCx1QkFBQztBQUFELENBQUMsQUFqSEQsSUFpSEM7QUFqSFksZ0JBQWdCO0lBRDVCLGlCQUFVLEVBQUU7cUNBSVcsYUFBTTtRQUNELDBCQUFXO1FBQ1IsZ0NBQWM7R0FMakMsZ0JBQWdCLENBaUg1QjtBQWpIWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QsIE5nWm9uZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuXHJcbmltcG9ydCB7IENoYXRTZXJ2aWNlIH0gZnJvbSBcIi4uL2NoYXRsaXN0L2NoYXQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzL0JlaGF2aW9yU3ViamVjdCc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzL1N1YmplY3QnO1xyXG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9iYWNrZW5kLnNlcnZpY2VcIjtcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQUdBU0FsZXJ0U2VydmljZSB7XHJcbiAgICBwcml2YXRlIF9hZ2FzcmVxdWVzdGxpc3Q6IEFycmF5PGFueT4gPSBbXTtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXHJcbiAgICAgICAgcHJpdmF0ZSBjaGF0U2VydmljZTogQ2hhdFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBCYWNrZW5kU2VydmljZTogQmFja2VuZFNlcnZpY2VcclxuICAgICkge1xyXG5cclxuICAgIH1cclxuICAgIGdldEFHQVNBbGVydFR5cGVMaXN0KCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBwYXRoID0gJy9BR0FTQWxlcnRUeXBlJztcclxuICAgICAgICAgICAgbGV0IG9uVmFsdWVFdmVudCA9IChzbmFwc2hvdDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQoc25hcHNob3QudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGZpcmViYXNlLmFkZFZhbHVlRXZlbnRMaXN0ZW5lcihvblZhbHVlRXZlbnQsIGAke3BhdGh9YCk7XHJcbiAgICAgICAgfSkuc2hhcmUoKTtcclxuICAgIH1cclxuICAgIGdldEJhbGFuY2VTaGVldENvZGVzTGlzdCgpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgcGF0aCA9ICcvQmFsYW5jZVNoZWV0Q29kZXMnO1xyXG4gICAgICAgICAgICBsZXQgb25WYWx1ZUV2ZW50ID0gKHNuYXBzaG90OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChzbmFwc2hvdC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZmlyZWJhc2UuYWRkVmFsdWVFdmVudExpc3RlbmVyKG9uVmFsdWVFdmVudCwgYCR7cGF0aH1gKTtcclxuICAgICAgICB9KS5zaGFyZSgpO1xyXG4gICAgfVxyXG4gICAgZ2V0Q2FzaEZsb3dTdGF0ZW1lbnRDb2Rlc0xpc3QoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgdmFyIHBhdGggPSAnL0Nhc2hGbG93U3RhdGVtZW50Q29kZXMnO1xyXG4gICAgICAgICAgICBsZXQgb25WYWx1ZUV2ZW50ID0gKHNuYXBzaG90OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChzbmFwc2hvdC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZmlyZWJhc2UuYWRkVmFsdWVFdmVudExpc3RlbmVyKG9uVmFsdWVFdmVudCwgYCR7cGF0aH1gKTtcclxuICAgICAgICB9KS5zaGFyZSgpO1xyXG4gICAgfVxyXG4gICAgZ2V0RmluYW5jaWFsUGVyZm9ybWFuY2VDb2Rlc0xpc3QoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgdmFyIHBhdGggPSAnL0ZpbmFuY2lhbFBlcmZvcm1hbmNlQ29kZXMnO1xyXG4gICAgICAgICAgICBsZXQgb25WYWx1ZUV2ZW50ID0gKHNuYXBzaG90OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChzbmFwc2hvdC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZmlyZWJhc2UuYWRkVmFsdWVFdmVudExpc3RlbmVyKG9uVmFsdWVFdmVudCwgYCR7cGF0aH1gKTtcclxuICAgICAgICB9KS5zaGFyZSgpO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlQWxlcnRSZXF1ZXN0KHJlcXVlc3RwYXJhbTogYW55LCBsb2dwYXJhbTogYW55LCB1c2VyaWQ6IHN0cmluZykge1xyXG4gICAgICAgIHZhciByZXF1ZXN0cGF0aCA9ICcvQUdBU0FsZXJ0UmVxdWVzdCc7XHJcbiAgICAgICAgdmFyIGRpc3BsYXl0aW1lID0gRGF0ZS5ub3coKS50b1N0cmluZygpO1xyXG4gICAgICAgIHZhciBlbWFpbCA9IHRoaXMuY2hhdFNlcnZpY2UuY2xlYW5lbWFpbCh1c2VyaWQpO1xyXG4gICAgICAgIGxvZ3BhcmFtLmxvZ3RpbWUgPSBkaXNwbGF5dGltZTtcclxuICAgICAgICBsb2dwYXJhbS5hbGVydGRldGVjdGVkID0gMDtcclxuICAgICAgICBsb2dwYXJhbS51c2VyaWQgPSBlbWFpbDtcclxuICAgICAgICByZXF1ZXN0cGFyYW0udXNlcmlkID0gZW1haWw7XHJcbiAgICAgICAgcmVxdWVzdHBhcmFtLmxvZ3RpbWUgPSBkaXNwbGF5dGltZTtcclxuICAgICAgICByZXF1ZXN0cGFyYW0ubWVzc2FnaW5ndG9rZW4gPSBCYWNrZW5kU2VydmljZS5tZXNzYWdpbmd0b2tlbjtcclxuICAgICAgICByZXR1cm4gZmlyZWJhc2UucHVzaChcclxuICAgICAgICAgICAgcmVxdWVzdHBhdGgsIHJlcXVlc3RwYXJhbSkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyIGxvZ3BhdGggPSBgL0FHQVNBbGVydFJlcXVlc3RMb2cvJHtlbWFpbH0vJHtyZXN1bHQua2V5fWA7XHJcbiAgICAgICAgICAgICAgICBsb2dwYXJhbS5yZXF1ZXN0aWQgPSByZXN1bHQua2V5O1xyXG4gICAgICAgICAgICAgICAgbG9ncGFyYW0ubWVzc2FnaW5ndG9rZW4gPSBCYWNrZW5kU2VydmljZS5tZXNzYWdpbmd0b2tlbjtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmaXJlYmFzZS5zZXRWYWx1ZShsb2dwYXRoLCBsb2dwYXJhbSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZ2V0QWxlcnRSZXF1ZXN0TGlzdCh1c2VyaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBlbWFpbCA9IHRoaXMuY2hhdFNlcnZpY2UuY2xlYW5lbWFpbCh1c2VyaWQpO1xyXG4gICAgICAgICAgICB2YXIgcGF0aCA9IGAvQUdBU0FsZXJ0UmVxdWVzdExvZy8ke2VtYWlsfWA7O1xyXG4gICAgICAgICAgICBsZXQgb25WYWx1ZUV2ZW50ID0gKHNuYXBzaG90OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdHMgPSB0aGlzLmhhbmRsZUFHQVNSZXF1ZXN0U25hcHNob3Qoc25hcHNob3QudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzdWx0cyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZmlyZWJhc2UuYWRkVmFsdWVFdmVudExpc3RlbmVyKG9uVmFsdWVFdmVudCwgYCR7cGF0aH1gKTtcclxuICAgICAgICB9KS5zaGFyZSgpO1xyXG4gICAgfVxyXG4gICAgaGFuZGxlQUdBU1JlcXVlc3RTbmFwc2hvdChkYXRhOiBhbnkpIHtcclxuICAgICAgICAvL2VtcHR5IGFycmF5LCB0aGVuIHJlZmlsbCBhbmQgZmlsdGVyXHJcbiAgICAgICAgdGhpcy5fYWdhc3JlcXVlc3RsaXN0ID0gW107XHJcbiAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaWQgaW4gZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9ICg8YW55Pk9iamVjdCkuYXNzaWduKHsgaWQ6IGlkIH0sIGRhdGFbaWRdKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2FnYXNyZXF1ZXN0bGlzdC5wdXNoKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fYWdhc3JlcXVlc3RsaXN0LnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChhLmxvZ3RpbWUgPiBiLmxvZ3RpbWUpIHJldHVybiAxO1xyXG4gICAgICAgICAgICAgICAgaWYgKGEubG9ndGltZSA8IGIubG9ndGltZSkgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FnYXNyZXF1ZXN0bGlzdDtcclxuICAgIH1cclxuICAgIGdldEhUTUxSZXN1bHQocmVxdWVzdGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgcGF0aCA9IGAvQUdBU0FsZXJ0UmVzcG9uc2UvJHtyZXF1ZXN0aWR9YDtcclxuICAgICAgICAgICAgbGV0IG9uVmFsdWVFdmVudCA9IChzbmFwc2hvdDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQoc25hcHNob3QudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGZpcmViYXNlLmFkZFZhbHVlRXZlbnRMaXN0ZW5lcihvblZhbHVlRXZlbnQsIGAke3BhdGh9YCk7XHJcbiAgICAgICAgfSkuc2hhcmUoKTtcclxuICAgIH1cclxufSJdfQ==