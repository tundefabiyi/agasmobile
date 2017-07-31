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
var transApp_model_1 = require("./transApp.model");
var TransAppService = (function () {
    function TransAppService(ngZone, chatService, BackendService) {
        this.ngZone = ngZone;
        this.chatService = chatService;
        this.BackendService = BackendService;
    }
    TransAppService.prototype.getMobileTransactionRequestUserLogList = function (userid) {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            var email = _this.chatService.cleanemail(userid);
            var path = "/MobileTransactionRequestUserLog/" + email;
            ;
            var onValueEvent = function (snapshot) {
                _this.ngZone.run(function () {
                    var retlist = [];
                    var data = snapshot.value;
                    for (var id in data) {
                        var result = Object.assign({ id: id }, data[id]);
                        retlist.push(result);
                    }
                    observer.next(retlist);
                });
            };
            firebase.addValueEventListener(onValueEvent, "" + path);
        }).share();
    };
    TransAppService.prototype.getMobileTransactionRequestLogItem = function (primarykey, groupkey) {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            var path = "/MobileTransactionRequestLog/" + groupkey + "/" + primarykey;
            var onValueEvent = function (snapshot) {
                _this.ngZone.run(function () {
                    observer.next(snapshot.value);
                });
            };
            firebase.addValueEventListener(onValueEvent, "" + path);
        }).share();
    };
    TransAppService.prototype.getMobileTransactionRequestLogByGroup = function (groupkey) {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            var path = "/MobileTransactionRequestLog/" + groupkey;
            var onValueEvent = function (snapshot) {
                _this.ngZone.run(function () {
                    var retlist = [];
                    var data = snapshot.value;
                    for (var id in data) {
                        var result = Object.assign({ id: id }, data[id]);
                        retlist.push(result);
                    }
                    observer.next(retlist);
                });
            };
            firebase.addValueEventListener(onValueEvent, "" + path);
        }).share();
    };
    TransAppService.prototype.getPendingMobileTransactionRequestUserLogList = function (userid) {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            var email = _this.chatService.cleanemail(userid);
            var path = "/MobileTransactionRequestUserLog/" + email;
            ;
            var onValueEvent = function (snapshot) {
                _this.ngZone.run(function () {
                    var retlist = [];
                    ;
                    var data = snapshot.value;
                    for (var id in data) {
                        var result = Object.assign({ id: id }, data[id]);
                        if (transApp_model_1.mobileTransApprovalStatus[result.mobileTransApprovalStatus] == transApp_model_1.mobileTransApprovalStatus[transApp_model_1.mobileTransApprovalStatus.Pending])
                            retlist.push(result);
                    }
                    observer.next(retlist);
                });
            };
            firebase.addValueEventListener(onValueEvent, "" + path);
        }).share();
    };
    TransAppService.prototype.getApprovalLogList = function (userid) {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            var email = _this.chatService.cleanemail(userid);
            var path = "/MobileTransactionRequestUserLog/" + email;
            ;
            console.log(path);
            var onValueEvent = function (snapshot) {
                _this.ngZone.run(function () {
                    var retlist = [];
                    var data = snapshot.value;
                    console.log(data);
                    for (var id in data) {
                        var result = Object.assign({ id: id }, data[id]);
                        if (transApp_model_1.mobileTransApprovalStatus[result.mobileTransApprovalStatus] != transApp_model_1.mobileTransApprovalStatus[transApp_model_1.mobileTransApprovalStatus.Pending])
                            retlist.push(result);
                    }
                    observer.next(retlist);
                });
            };
            firebase.addValueEventListener(onValueEvent, "" + path);
        }).share();
    };
    TransAppService.prototype.processapprovalresponse = function (serverResponder, parameter) {
        var path = '/ClientRequest';
        return firebase.push(path, { "serverResponder": serverResponder, "parameter": parameter, "datetime": 0 - Date.now() }).then(function (result) {
        });
    };
    return TransAppService;
}());
TransAppService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [core_1.NgZone,
        chat_service_1.ChatService,
        backend_service_1.BackendService])
], TransAppService);
exports.TransAppService = TransAppService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNBcHAuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRyYW5zQXBwLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMkQ7QUFDM0QsdURBQTBEO0FBQzFELDhDQUE2QztBQUM3Qyx5REFBdUQ7QUFHdkQsK0RBQTZEO0FBQzdELG1EQUE2RDtBQUc3RCxJQUFhLGVBQWU7SUFDeEIseUJBQ1ksTUFBYyxFQUNkLFdBQXdCLEVBQ3hCLGNBQThCO1FBRjlCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFHMUMsQ0FBQztJQUNELGdFQUFzQyxHQUF0QyxVQUF1QyxNQUFjO1FBQXJELGlCQWtCQztRQWpCRyxNQUFNLENBQUMsSUFBSSx1QkFBVSxDQUFDLFVBQUMsUUFBYTtZQUNoQyxJQUFJLEtBQUssR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNoRCxJQUFJLElBQUksR0FBRyxzQ0FBb0MsS0FBTyxDQUFDO1lBQUEsQ0FBQztZQUN4RCxJQUFJLFlBQVksR0FBRyxVQUFDLFFBQWE7Z0JBQzdCLEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO29CQUNaLElBQUksT0FBTyxHQUFlLEVBQUUsQ0FBQztvQkFFN0IsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQztvQkFDMUIsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDbEIsSUFBSSxNQUFNLEdBQVMsTUFBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDeEQsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDekIsQ0FB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LE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLDBDQUF5QixDQUFDLDBDQUF5QixDQUFDLE9BQU8sQ0FBQyxDQUFDOzRCQUM1SCxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUM3QixDQUFDO29CQUNELFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzNCLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDO1lBQ0YsUUFBUSxDQUFDLHFCQUFxQixDQUFDLFlBQVksRUFBRSxLQUFHLElBQU0sQ0FBQyxDQUFDO1FBQzVELENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUNELGlEQUF1QixHQUF2QixVQUF3QixlQUF1QixFQUFFLFNBQWM7UUFDM0QsSUFBSSxJQUFJLEdBQUcsZ0JBQWdCLENBQUM7UUFDNUIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ2hCLElBQUksRUFDSixFQUFFLGlCQUFpQixFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQzdGLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTTtRQUViLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FBQyxBQWpIRCxJQWlIQztBQWpIWSxlQUFlO0lBRDNCLGlCQUFVLEVBQUU7cUNBR1csYUFBTTtRQUNELDBCQUFXO1FBQ1IsZ0NBQWM7R0FKakMsZUFBZSxDQWlIM0I7QUFqSFksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QsIE5nWm9uZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgQ2hhdFNlcnZpY2UgfSBmcm9tIFwiLi4vY2hhdGxpc3QvY2hhdC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMvQmVoYXZpb3JTdWJqZWN0JztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMvU3ViamVjdCc7XHJcbmltcG9ydCB7IEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2JhY2tlbmQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBtb2JpbGVUcmFuc0FwcHJvdmFsU3RhdHVzIH0gZnJvbSBcIi4vdHJhbnNBcHAubW9kZWxcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFRyYW5zQXBwU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxyXG4gICAgICAgIHByaXZhdGUgY2hhdFNlcnZpY2U6IENoYXRTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgQmFja2VuZFNlcnZpY2U6IEJhY2tlbmRTZXJ2aWNlXHJcbiAgICApIHtcclxuXHJcbiAgICB9XHJcbiAgICBnZXRNb2JpbGVUcmFuc2FjdGlvblJlcXVlc3RVc2VyTG9nTGlzdCh1c2VyaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBlbWFpbCA9IHRoaXMuY2hhdFNlcnZpY2UuY2xlYW5lbWFpbCh1c2VyaWQpO1xyXG4gICAgICAgICAgICB2YXIgcGF0aCA9IGAvTW9iaWxlVHJhbnNhY3Rpb25SZXF1ZXN0VXNlckxvZy8ke2VtYWlsfWA7O1xyXG4gICAgICAgICAgICBsZXQgb25WYWx1ZUV2ZW50ID0gKHNuYXBzaG90OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJldGxpc3Q6IEFycmF5PGFueT4gPSBbXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBzbmFwc2hvdC52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpZCBpbiBkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSAoPGFueT5PYmplY3QpLmFzc2lnbih7IGlkOiBpZCB9LCBkYXRhW2lkXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldGxpc3QucHVzaChyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHJldGxpc3QpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGZpcmViYXNlLmFkZFZhbHVlRXZlbnRMaXN0ZW5lcihvblZhbHVlRXZlbnQsIGAke3BhdGh9YCk7XHJcbiAgICAgICAgfSkuc2hhcmUoKTtcclxuICAgIH1cclxuICAgIGdldE1vYmlsZVRyYW5zYWN0aW9uUmVxdWVzdExvZ0l0ZW0ocHJpbWFyeWtleTogc3RyaW5nLCBncm91cGtleTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBhbnkpID0+IHtcclxuXHJcbiAgICAgICAgICAgIHZhciBwYXRoID0gYC9Nb2JpbGVUcmFuc2FjdGlvblJlcXVlc3RMb2cvJHtncm91cGtleX0vJHtwcmltYXJ5a2V5fWA7XHJcbiAgICAgICAgICAgIC8vICBjb25zb2xlLmxvZyhwYXRoKTtcclxuICAgICAgICAgICAgbGV0IG9uVmFsdWVFdmVudCA9IChzbmFwc2hvdDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHNuYXBzaG90LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBmaXJlYmFzZS5hZGRWYWx1ZUV2ZW50TGlzdGVuZXIob25WYWx1ZUV2ZW50LCBgJHtwYXRofWApO1xyXG4gICAgICAgIH0pLnNoYXJlKCk7XHJcbiAgICB9XHJcbiAgICBnZXRNb2JpbGVUcmFuc2FjdGlvblJlcXVlc3RMb2dCeUdyb3VwKGdyb3Vwa2V5OiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IGFueSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgdmFyIHBhdGggPSBgL01vYmlsZVRyYW5zYWN0aW9uUmVxdWVzdExvZy8ke2dyb3Vwa2V5fWA7XHJcbiAgICAgICAgICAgIGxldCBvblZhbHVlRXZlbnQgPSAoc25hcHNob3Q6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmV0bGlzdDogQXJyYXk8YW55PiA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gc25hcHNob3QudmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGlkIGluIGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9ICg8YW55Pk9iamVjdCkuYXNzaWduKHsgaWQ6IGlkIH0sIGRhdGFbaWRdKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldGxpc3QucHVzaChyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJldGxpc3QpKTtcclxuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHJldGxpc3QpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGZpcmViYXNlLmFkZFZhbHVlRXZlbnRMaXN0ZW5lcihvblZhbHVlRXZlbnQsIGAke3BhdGh9YCk7XHJcbiAgICAgICAgfSkuc2hhcmUoKTtcclxuICAgIH1cclxuICAgIGdldFBlbmRpbmdNb2JpbGVUcmFuc2FjdGlvblJlcXVlc3RVc2VyTG9nTGlzdCh1c2VyaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBlbWFpbCA9IHRoaXMuY2hhdFNlcnZpY2UuY2xlYW5lbWFpbCh1c2VyaWQpO1xyXG4gICAgICAgICAgICB2YXIgcGF0aCA9IGAvTW9iaWxlVHJhbnNhY3Rpb25SZXF1ZXN0VXNlckxvZy8ke2VtYWlsfWA7O1xyXG4gICAgICAgICAgICBsZXQgb25WYWx1ZUV2ZW50ID0gKHNuYXBzaG90OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJldGxpc3Q6IEFycmF5PGFueT4gPSBbXTs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gc25hcHNob3QudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaWQgaW4gZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gKDxhbnk+T2JqZWN0KS5hc3NpZ24oeyBpZDogaWQgfSwgZGF0YVtpZF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9iaWxlVHJhbnNBcHByb3ZhbFN0YXR1c1tyZXN1bHQubW9iaWxlVHJhbnNBcHByb3ZhbFN0YXR1c10gPT0gbW9iaWxlVHJhbnNBcHByb3ZhbFN0YXR1c1ttb2JpbGVUcmFuc0FwcHJvdmFsU3RhdHVzLlBlbmRpbmddKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0bGlzdC5wdXNoKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQocmV0bGlzdCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZmlyZWJhc2UuYWRkVmFsdWVFdmVudExpc3RlbmVyKG9uVmFsdWVFdmVudCwgYCR7cGF0aH1gKTtcclxuICAgICAgICB9KS5zaGFyZSgpO1xyXG4gICAgfVxyXG4gICAgZ2V0QXBwcm92YWxMb2dMaXN0KHVzZXJpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgdmFyIGVtYWlsID0gdGhpcy5jaGF0U2VydmljZS5jbGVhbmVtYWlsKHVzZXJpZCk7XHJcbiAgICAgICAgICAgIHZhciBwYXRoID0gYC9Nb2JpbGVUcmFuc2FjdGlvblJlcXVlc3RVc2VyTG9nLyR7ZW1haWx9YDs7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBhdGgpO1xyXG5cclxuICAgICAgICAgICAgbGV0IG9uVmFsdWVFdmVudCA9IChzbmFwc2hvdDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXRsaXN0OiBBcnJheTxhbnk+ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBzbmFwc2hvdC52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGlkIGluIGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9ICg8YW55Pk9iamVjdCkuYXNzaWduKHsgaWQ6IGlkIH0sIGRhdGFbaWRdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vYmlsZVRyYW5zQXBwcm92YWxTdGF0dXNbcmVzdWx0Lm1vYmlsZVRyYW5zQXBwcm92YWxTdGF0dXNdICE9IG1vYmlsZVRyYW5zQXBwcm92YWxTdGF0dXNbbW9iaWxlVHJhbnNBcHByb3ZhbFN0YXR1cy5QZW5kaW5nXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldGxpc3QucHVzaChyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHJldGxpc3QpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGZpcmViYXNlLmFkZFZhbHVlRXZlbnRMaXN0ZW5lcihvblZhbHVlRXZlbnQsIGAke3BhdGh9YCk7XHJcbiAgICAgICAgfSkuc2hhcmUoKTtcclxuICAgIH1cclxuICAgIHByb2Nlc3NhcHByb3ZhbHJlc3BvbnNlKHNlcnZlclJlc3BvbmRlcjogc3RyaW5nLCBwYXJhbWV0ZXI6IGFueSwgKSB7XHJcbiAgICAgICAgdmFyIHBhdGggPSAnL0NsaWVudFJlcXVlc3QnO1xyXG4gICAgICAgIHJldHVybiBmaXJlYmFzZS5wdXNoKFxyXG4gICAgICAgICAgICBwYXRoLFxyXG4gICAgICAgICAgICB7IFwic2VydmVyUmVzcG9uZGVyXCI6IHNlcnZlclJlc3BvbmRlciwgXCJwYXJhbWV0ZXJcIjogcGFyYW1ldGVyLCBcImRhdGV0aW1lXCI6IDAgLSBEYXRlLm5vdygpIH1cclxuICAgICAgICApLnRoZW4ocmVzdWx0ID0+IHtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXX0=