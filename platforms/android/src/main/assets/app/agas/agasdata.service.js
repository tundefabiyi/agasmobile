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
var agas_model_1 = require("./agas.model");
var chat_service_1 = require("../chatlist/chat.service");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var AGASDataService = (function () {
    function AGASDataService(ngZone, chatService) {
        this.ngZone = ngZone;
        this.chatService = chatService;
        this._agasrequestlisttobservable = new BehaviorSubject_1.BehaviorSubject([]);
        this._agasrequestlist = [];
    }
    AGASDataService.prototype.createFinancialPerformancerequest = function (userid, financialyearid, financialyeardescr) {
        var _this = this;
        console.log("Logged Year" + financialyeardescr);
        var path = '/AGASRequest';
        var displaytime = Date.now().toString();
        var aGASRequestType = agas_model_1.AGASRequestType.FinancialPerformance;
        var aGASRequestTypeDescr = agas_model_1.AGASRequestType[aGASRequestType];
        return firebase.push(path, { "userid": userid, "aGASRequestType": aGASRequestType, "datetime": 0 - Date.now(), "displaytime": displaytime, "param": { "financialyearid": financialyearid } }).then(function (result) {
            var email = _this.chatService.cleanemail(userid);
            var logpath = "/AGASRequestLog/" + email;
            var requestinfo = { "agasrequestid": result.key, "aGASRequestType": aGASRequestType, "aGASRequestTypeDescr": aGASRequestTypeDescr, "displaytime": displaytime, "param": { "financialyearid": financialyearid, "financialyeardescr": financialyeardescr } };
            return firebase.push(logpath, requestinfo);
        });
    };
    AGASDataService.prototype.createcashflowrequest = function (userid, financialyearid, financialyeardescr) {
        var _this = this;
        var path = '/AGASRequest';
        var displaytime = Date.now().toString();
        var aGASRequestType = agas_model_1.AGASRequestType.CashFlowStatement;
        var aGASRequestTypeDescr = agas_model_1.AGASRequestType[aGASRequestType];
        return firebase.push(path, { "userid": userid, "aGASRequestType": aGASRequestType, "datetime": 0 - Date.now(), "displaytime": displaytime, "param": { "financialyearid": financialyearid } }).then(function (result) {
            var email = _this.chatService.cleanemail(userid);
            var logpath = "/AGASRequestLog/" + email;
            var requestinfo = { "agasrequestid": result.key, "aGASRequestType": aGASRequestType, "aGASRequestTypeDescr": aGASRequestTypeDescr, "displaytime": displaytime, "param": { "financialyearid": financialyearid, "financialyeardescr": financialyeardescr } };
            return firebase.push(logpath, requestinfo);
        });
    };
    AGASDataService.prototype.createchangesinNetAssetrequest = function (userid, financialyearid, financialyeardescr) {
        var _this = this;
        var path = '/AGASRequest';
        var displaytime = Date.now().toString();
        var aGASRequestType = agas_model_1.AGASRequestType.StatementOfChangesInNetAssets;
        var aGASRequestTypeDescr = agas_model_1.AGASRequestType[aGASRequestType];
        return firebase.push(path, { "userid": userid, "aGASRequestType": aGASRequestType, "datetime": 0 - Date.now(), "displaytime": displaytime, "param": { "financialyearid": financialyearid } }).then(function (result) {
            var email = _this.chatService.cleanemail(userid);
            var logpath = "/AGASRequestLog/" + email;
            var requestinfo = { "agasrequestid": result.key, "aGASRequestType": aGASRequestType, "aGASRequestTypeDescr": aGASRequestTypeDescr, "displaytime": displaytime, "param": { "financialyearid": financialyearid, "financialyeardescr": financialyeardescr } };
            return firebase.push(logpath, requestinfo);
        });
    };
    AGASDataService.prototype.createbalancesheetrequest = function (userid, financialyearid, financialyeardescr) {
        var _this = this;
        console.log("Logged Year" + financialyeardescr);
        var path = '/AGASRequest';
        var displaytime = Date.now().toString();
        var aGASRequestType = agas_model_1.AGASRequestType.BalanceSheet;
        var aGASRequestTypeDescr = agas_model_1.AGASRequestType[aGASRequestType];
        return firebase.push(path, { "userid": userid, "aGASRequestType": aGASRequestType, "datetime": 0 - Date.now(), "displaytime": displaytime, "param": { "financialyearid": financialyearid } }).then(function (result) {
            var email = _this.chatService.cleanemail(userid);
            var logpath = "/AGASRequestLog/" + email;
            var requestinfo = { "agasrequestid": result.key, "aGASRequestType": aGASRequestType, "aGASRequestTypeDescr": aGASRequestTypeDescr, "displaytime": displaytime, "param": { "financialyearid": financialyearid, "financialyeardescr": financialyeardescr } };
            return firebase.push(logpath, requestinfo);
        });
    };
    AGASDataService.prototype.createfinancialaggregaterequest = function (userid, financialyearid, accounttypeid, financialyeardescr, accounttypedesc) {
        var _this = this;
        console.log("Logged Year " + financialyeardescr);
        var path = '/AGASRequest';
        var displaytime = Date.now().toString();
        var aGASRequestType = agas_model_1.AGASRequestType.FinancialAggregateQuery;
        var aGASRequestTypeDescr = agas_model_1.AGASRequestType[aGASRequestType];
        return firebase.push(path, { "userid": userid, "aGASRequestType": aGASRequestType, "datetime": 0 - Date.now(), "displaytime": displaytime, "param": { "financialyearid": financialyearid, "accounttypeid": accounttypeid } }).then(function (result) {
            var email = _this.chatService.cleanemail(userid);
            var logpath = "/AGASRequestLog/" + email;
            var requestinfo = { "agasrequestid": result.key, "aGASRequestType": aGASRequestType, "aGASRequestTypeDescr": aGASRequestTypeDescr, "displaytime": displaytime, "param": { "financialyearid": financialyearid, "financialyeardescr": financialyeardescr, "accounttypeid": accounttypeid, "accounttypedesc": accounttypedesc } };
            return firebase.push(logpath, requestinfo);
        });
    };
    AGASDataService.prototype.createGPFSNoteRequest = function (param) {
        var _this = this;
        var path = '/AGASGPFSNoteRequest';
        var displaytime = Date.now().toString();
        return firebase.push(path, param).then(function (result) {
            var email = _this.chatService.cleanemail(param.userid);
            var logpath = "/AGASGPFSNoteRequestLog/" + param.agasrequestid + "/" + param.code;
            param.gpfsnoterequestkey = result.key;
            return firebase.push(logpath, param);
        });
    };
    AGASDataService.prototype.getGPFSNoteRequestList = function (agasrequestid, code) {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            var path = "/AGASGPFSNoteRequestLog/" + agasrequestid + "/" + code;
            ;
            var onValueEvent = function (snapshot) {
                _this.ngZone.run(function () {
                    observer.next(snapshot.value);
                });
            };
            firebase.addValueEventListener(onValueEvent, "" + path);
        }).share();
    };
    AGASDataService.prototype.getFinancialAggregateQueryRequestList = function (userid) {
        var _this = this;
        var email = this.chatService.cleanemail(userid);
        return new Observable_1.Observable(function (observer) {
            var path = "/AGASRequestLog/" + email;
            var onValueEvent = function (snapshot) {
                _this.ngZone.run(function () {
                    var results = _this.handleAGASRequestSnapshot(snapshot.value);
                    observer.next(results);
                });
            };
            firebase.addValueEventListener(onValueEvent, "" + path);
        }).share();
    };
    AGASDataService.prototype.getFinancialPeriodList = function () {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            var path = '/Period';
            var onValueEvent = function (snapshot) {
                _this.ngZone.run(function () {
                    observer.next(snapshot.value);
                });
            };
            firebase.addValueEventListener(onValueEvent, "" + path);
        }).share();
    };
    AGASDataService.prototype.getGPFSNoteTypeList = function () {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            var path = '/GPFSNoteType';
            var onValueEvent = function (snapshot) {
                _this.ngZone.run(function () {
                    observer.next(snapshot.value);
                });
            };
            firebase.addValueEventListener(onValueEvent, "" + path);
        }).share();
    };
    AGASDataService.prototype.getCOASegmentTypeList = function () {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            var path = '/COASegmentType';
            var onValueEvent = function (snapshot) {
                _this.ngZone.run(function () {
                    observer.next(snapshot.value);
                });
            };
            firebase.addValueEventListener(onValueEvent, "" + path);
        }).share();
    };
    AGASDataService.prototype.getFinancialAggregationSearchResultList = function (requestid) {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            var path = "/AGASResponse/" + requestid;
            var onValueEvent = function (snapshot) {
                _this.ngZone.run(function () {
                    observer.next(snapshot.value);
                });
            };
            firebase.addValueEventListener(onValueEvent, "" + path);
        }).share();
    };
    AGASDataService.prototype.getHTMLResult = function (requestid) {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            var path = "/AGASResponse/" + requestid;
            var onValueEvent = function (snapshot) {
                _this.ngZone.run(function () {
                    observer.next(snapshot.value);
                });
            };
            firebase.addValueEventListener(onValueEvent, "" + path);
        }).share();
    };
    AGASDataService.prototype.getGPFSNoteHTMLResult = function (requestid) {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            var path = "/AGASGPFSNoteResponse/" + requestid;
            var onValueEvent = function (snapshot) {
                _this.ngZone.run(function () {
                    observer.next(snapshot.value);
                });
            };
            firebase.addValueEventListener(onValueEvent, "" + path);
        }).share();
    };
    AGASDataService.prototype.getAccountTypeList = function () {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            var path = '/AccountType';
            var onValueEvent = function (snapshot) {
                _this.ngZone.run(function () {
                    observer.next(snapshot.value);
                });
            };
            firebase.addValueEventListener(onValueEvent, "" + path);
        }).share();
    };
    AGASDataService.prototype.handleAGASRequestSnapshot = function (data) {
        this._agasrequestlist = [];
        if (data) {
            for (var id in data) {
                var result = Object.assign({ id: id }, data[id]);
                this._agasrequestlist.push(result);
            }
            this._agasrequestlist.sort(function (a, b) {
                if (a.datetime > b.datetime)
                    return 1;
                if (a.datetime < b.datetime)
                    return -1;
                return 0;
            });
            this._agasrequestlisttobservable.next(this._agasrequestlist.slice());
        }
        return this._agasrequestlist;
    };
    return AGASDataService;
}());
AGASDataService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [core_1.NgZone,
        chat_service_1.ChatService])
], AGASDataService);
exports.AGASDataService = AGASDataService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdhc2RhdGEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFnYXNkYXRhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMkQ7QUFDM0QsdURBQTBEO0FBQzFELDhDQUE2QztBQUM3QywyQ0FBK0M7QUFFL0MseURBQXVEO0FBQ3ZELHdEQUF1RDtBQUd2RCxJQUFhLGVBQWU7SUFHeEIseUJBQ1ksTUFBYyxFQUNkLFdBQXdCO1FBRHhCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUpwQyxnQ0FBMkIsR0FBNEMsSUFBSSxpQ0FBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZGLHFCQUFnQixHQUEyQixFQUFFLENBQUM7SUFNdEQsQ0FBQztJQUNELDJEQUFpQyxHQUFqQyxVQUFrQyxNQUFjLEVBQUUsZUFBdUIsRUFBRSxrQkFBMEI7UUFBckcsaUJBZUM7UUFkRyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBRyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ2hELElBQUksSUFBSSxHQUFHLGNBQWMsQ0FBQztRQUMxQixJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDeEMsSUFBSSxlQUFlLEdBQUcsNEJBQWUsQ0FBQyxvQkFBb0IsQ0FBQztRQUMzRCxJQUFJLG9CQUFvQixHQUFHLDRCQUFlLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDNUQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ2hCLElBQUksRUFDSixFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLEVBQUUsaUJBQWlCLEVBQUUsZUFBZSxFQUFFLEVBQUUsQ0FDcEssQ0FB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QUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQzNCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDUCxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNsQixJQUFJLE1BQU0sR0FBUyxNQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN4RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3ZDLENBQUM7WUFDRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7Z0JBQ3JDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQztvQkFBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUN0QyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUM7b0JBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2QyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2IsQ0FBQyxDQUFDLENBQUE7WUFFRixJQUFJLENBQUMsMkJBQTJCLENBQUMsSUFBSSxDQUFLLElBQUksQ0FBQyxnQkFBZ0IsU0FBRSxDQUFDO1FBQ3RFLENBQUM7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQ2pDLENBQUM7SUFDTCxzQkFBQztBQUFELENBQUMsQUEvTkQsSUErTkM7QUEvTlksZUFBZTtJQUQzQixpQkFBVSxFQUFFO3FDQUtXLGFBQU07UUFDRCwwQkFBVztHQUwzQixlQUFlLENBK04zQjtBQS9OWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCwgTmdab25lIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBBR0FTUmVxdWVzdFR5cGUgfSBmcm9tIFwiLi9hZ2FzLm1vZGVsXCI7XHJcbmltcG9ydCB7IEFHQVNSZXF1ZXN0SW5mbyB9IGZyb20gXCIuL2FnYXMubW9kZWxcIjtcclxuaW1wb3J0IHsgQ2hhdFNlcnZpY2UgfSBmcm9tIFwiLi4vY2hhdGxpc3QvY2hhdC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMvQmVoYXZpb3JTdWJqZWN0JztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMvU3ViamVjdCc7XHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFHQVNEYXRhU2VydmljZSB7XHJcbiAgICBfYWdhc3JlcXVlc3RsaXN0dG9ic2VydmFibGU6IEJlaGF2aW9yU3ViamVjdDxBcnJheTxBR0FTUmVxdWVzdEluZm8+PiA9IG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xyXG4gICAgcHJpdmF0ZSBfYWdhc3JlcXVlc3RsaXN0OiBBcnJheTxBR0FTUmVxdWVzdEluZm8+ID0gW107XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxyXG4gICAgICAgIHByaXZhdGUgY2hhdFNlcnZpY2U6IENoYXRTZXJ2aWNlXHJcbiAgICApIHtcclxuXHJcbiAgICB9XHJcbiAgICBjcmVhdGVGaW5hbmNpYWxQZXJmb3JtYW5jZXJlcXVlc3QodXNlcmlkOiBzdHJpbmcsIGZpbmFuY2lhbHllYXJpZDogbnVtYmVyLCBmaW5hbmNpYWx5ZWFyZGVzY3I6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTG9nZ2VkIFllYXJcIiArIGZpbmFuY2lhbHllYXJkZXNjcik7XHJcbiAgICAgICAgdmFyIHBhdGggPSAnL0FHQVNSZXF1ZXN0JztcclxuICAgICAgICB2YXIgZGlzcGxheXRpbWUgPSBEYXRlLm5vdygpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgdmFyIGFHQVNSZXF1ZXN0VHlwZSA9IEFHQVNSZXF1ZXN0VHlwZS5GaW5hbmNpYWxQZXJmb3JtYW5jZTtcclxuICAgICAgICB2YXIgYUdBU1JlcXVlc3RUeXBlRGVzY3IgPSBBR0FTUmVxdWVzdFR5cGVbYUdBU1JlcXVlc3RUeXBlXTtcclxuICAgICAgICByZXR1cm4gZmlyZWJhc2UucHVzaChcclxuICAgICAgICAgICAgcGF0aCxcclxuICAgICAgICAgICAgeyBcInVzZXJpZFwiOiB1c2VyaWQsIFwiYUdBU1JlcXVlc3RUeXBlXCI6IGFHQVNSZXF1ZXN0VHlwZSwgXCJkYXRldGltZVwiOiAwIC0gRGF0ZS5ub3coKSwgXCJkaXNwbGF5dGltZVwiOiBkaXNwbGF5dGltZSwgXCJwYXJhbVwiOiB7IFwiZmluYW5jaWFseWVhcmlkXCI6IGZpbmFuY2lhbHllYXJpZCB9IH1cclxuICAgICAgICApLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgdmFyIGVtYWlsID0gdGhpcy5jaGF0U2VydmljZS5jbGVhbmVtYWlsKHVzZXJpZCk7XHJcbiAgICAgICAgICAgIHZhciBsb2dwYXRoID0gYC9BR0FTUmVxdWVzdExvZy8ke2VtYWlsfWA7XHJcbiAgICAgICAgICAgIHZhciByZXF1ZXN0aW5mbyA9IHsgXCJhZ2FzcmVxdWVzdGlkXCI6IHJlc3VsdC5rZXksIFwiYUdBU1JlcXVlc3RUeXBlXCI6IGFHQVNSZXF1ZXN0VHlwZSwgXCJhR0FTUmVxdWVzdFR5cGVEZXNjclwiOiBhR0FTUmVxdWVzdFR5cGVEZXNjciwgXCJkaXNwbGF5dGltZVwiOiBkaXNwbGF5dGltZSwgXCJwYXJhbVwiOiB7IFwiZmluYW5jaWFseWVhcmlkXCI6IGZpbmFuY2lhbHllYXJpZCwgXCJmaW5hbmNpYWx5ZWFyZGVzY3JcIjogZmluYW5jaWFseWVhcmRlc2NyIH0gfVxyXG4gICAgICAgICAgICByZXR1cm4gZmlyZWJhc2UucHVzaChsb2dwYXRoLCByZXF1ZXN0aW5mbyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVjYXNoZmxvd3JlcXVlc3QodXNlcmlkOiBzdHJpbmcsIGZpbmFuY2lhbHllYXJpZDogbnVtYmVyLCBmaW5hbmNpYWx5ZWFyZGVzY3I6IHN0cmluZykge1xyXG5cclxuICAgICAgICB2YXIgcGF0aCA9ICcvQUdBU1JlcXVlc3QnO1xyXG4gICAgICAgIHZhciBkaXNwbGF5dGltZSA9IERhdGUubm93KCkudG9TdHJpbmcoKTtcclxuICAgICAgICB2YXIgYUdBU1JlcXVlc3RUeXBlID0gQUdBU1JlcXVlc3RUeXBlLkNhc2hGbG93U3RhdGVtZW50O1xyXG4gICAgICAgIHZhciBhR0FTUmVxdWVzdFR5cGVEZXNjciA9IEFHQVNSZXF1ZXN0VHlwZVthR0FTUmVxdWVzdFR5cGVdO1xyXG4gICAgICAgIHJldHVybiBmaXJlYmFzZS5wdXNoKFxyXG4gICAgICAgICAgICBwYXRoLFxyXG4gICAgICAgICAgICB7IFwidXNlcmlkXCI6IHVzZXJpZCwgXCJhR0FTUmVxdWVzdFR5cGVcIjogYUdBU1JlcXVlc3RUeXBlLCBcImRhdGV0aW1lXCI6IDAgLSBEYXRlLm5vdygpLCBcImRpc3BsYXl0aW1lXCI6IGRpc3BsYXl0aW1lLCBcInBhcmFtXCI6IHsgXCJmaW5hbmNpYWx5ZWFyaWRcIjogZmluYW5jaWFseWVhcmlkIH0gfVxyXG4gICAgICAgICkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICB2YXIgZW1haWwgPSB0aGlzLmNoYXRTZXJ2aWNlLmNsZWFuZW1haWwodXNlcmlkKTtcclxuICAgICAgICAgICAgdmFyIGxvZ3BhdGggPSBgL0FHQVNSZXF1ZXN0TG9nLyR7ZW1haWx9YDtcclxuICAgICAgICAgICAgdmFyIHJlcXVlc3RpbmZvID0geyBcImFnYXNyZXF1ZXN0aWRcIjogcmVzdWx0LmtleSwgXCJhR0FTUmVxdWVzdFR5cGVcIjogYUdBU1JlcXVlc3RUeXBlLCBcImFHQVNSZXF1ZXN0VHlwZURlc2NyXCI6IGFHQVNSZXF1ZXN0VHlwZURlc2NyLCBcImRpc3BsYXl0aW1lXCI6IGRpc3BsYXl0aW1lLCBcInBhcmFtXCI6IHsgXCJmaW5hbmNpYWx5ZWFyaWRcIjogZmluYW5jaWFseWVhcmlkLCBcImZpbmFuY2lhbHllYXJkZXNjclwiOiBmaW5hbmNpYWx5ZWFyZGVzY3IgfSB9XHJcbiAgICAgICAgICAgIHJldHVybiBmaXJlYmFzZS5wdXNoKGxvZ3BhdGgsIHJlcXVlc3RpbmZvKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGNyZWF0ZWNoYW5nZXNpbk5ldEFzc2V0cmVxdWVzdCh1c2VyaWQ6IHN0cmluZywgZmluYW5jaWFseWVhcmlkOiBudW1iZXIsIGZpbmFuY2lhbHllYXJkZXNjcjogc3RyaW5nKSB7XHJcblxyXG4gICAgICAgIHZhciBwYXRoID0gJy9BR0FTUmVxdWVzdCc7XHJcbiAgICAgICAgdmFyIGRpc3BsYXl0aW1lID0gRGF0ZS5ub3coKS50b1N0cmluZygpO1xyXG4gICAgICAgIHZhciBhR0FTUmVxdWVzdFR5cGUgPSBBR0FTUmVxdWVzdFR5cGUuU3RhdGVtZW50T2ZDaGFuZ2VzSW5OZXRBc3NldHM7XHJcbiAgICAgICAgdmFyIGFHQVNSZXF1ZXN0VHlwZURlc2NyID0gQUdBU1JlcXVlc3RUeXBlW2FHQVNSZXF1ZXN0VHlwZV07XHJcbiAgICAgICAgcmV0dXJuIGZpcmViYXNlLnB1c2goXHJcbiAgICAgICAgICAgIHBhdGgsXHJcbiAgICAgICAgICAgIHsgXCJ1c2VyaWRcIjogdXNlcmlkLCBcImFHQVNSZXF1ZXN0VHlwZVwiOiBhR0FTUmVxdWVzdFR5cGUsIFwiZGF0ZXRpbWVcIjogMCAtIERhdGUubm93KCksIFwiZGlzcGxheXRpbWVcIjogZGlzcGxheXRpbWUsIFwicGFyYW1cIjogeyBcImZpbmFuY2lhbHllYXJpZFwiOiBmaW5hbmNpYWx5ZWFyaWQgfSB9XHJcbiAgICAgICAgKS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIHZhciBlbWFpbCA9IHRoaXMuY2hhdFNlcnZpY2UuY2xlYW5lbWFpbCh1c2VyaWQpO1xyXG4gICAgICAgICAgICB2YXIgbG9ncGF0aCA9IGAvQUdBU1JlcXVlc3RMb2cvJHtlbWFpbH1gO1xyXG4gICAgICAgICAgICB2YXIgcmVxdWVzdGluZm8gPSB7IFwiYWdhc3JlcXVlc3RpZFwiOiByZXN1bHQua2V5LCBcImFHQVNSZXF1ZXN0VHlwZVwiOiBhR0FTUmVxdWVzdFR5cGUsIFwiYUdBU1JlcXVlc3RUeXBlRGVzY3JcIjogYUdBU1JlcXVlc3RUeXBlRGVzY3IsIFwiZGlzcGxheXRpbWVcIjogZGlzcGxheXRpbWUsIFwicGFyYW1cIjogeyBcImZpbmFuY2lhbHllYXJpZFwiOiBmaW5hbmNpYWx5ZWFyaWQsIFwiZmluYW5jaWFseWVhcmRlc2NyXCI6IGZpbmFuY2lhbHllYXJkZXNjciB9IH1cclxuICAgICAgICAgICAgcmV0dXJuIGZpcmViYXNlLnB1c2gobG9ncGF0aCwgcmVxdWVzdGluZm8pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlYmFsYW5jZXNoZWV0cmVxdWVzdCh1c2VyaWQ6IHN0cmluZywgZmluYW5jaWFseWVhcmlkOiBudW1iZXIsIGZpbmFuY2lhbHllYXJkZXNjcjogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJMb2dnZWQgWWVhclwiICsgZmluYW5jaWFseWVhcmRlc2NyKTtcclxuICAgICAgICB2YXIgcGF0aCA9ICcvQUdBU1JlcXVlc3QnO1xyXG4gICAgICAgIHZhciBkaXNwbGF5dGltZSA9IERhdGUubm93KCkudG9TdHJpbmcoKTtcclxuICAgICAgICB2YXIgYUdBU1JlcXVlc3RUeXBlID0gQUdBU1JlcXVlc3RUeXBlLkJhbGFuY2VTaGVldDtcclxuICAgICAgICB2YXIgYUdBU1JlcXVlc3RUeXBlRGVzY3IgPSBBR0FTUmVxdWVzdFR5cGVbYUdBU1JlcXVlc3RUeXBlXTtcclxuICAgICAgICByZXR1cm4gZmlyZWJhc2UucHVzaChcclxuICAgICAgICAgICAgcGF0aCxcclxuICAgICAgICAgICAgeyBcInVzZXJpZFwiOiB1c2VyaWQsIFwiYUdBU1JlcXVlc3RUeXBlXCI6IGFHQVNSZXF1ZXN0VHlwZSwgXCJkYXRldGltZVwiOiAwIC0gRGF0ZS5ub3coKSwgXCJkaXNwbGF5dGltZVwiOiBkaXNwbGF5dGltZSwgXCJwYXJhbVwiOiB7IFwiZmluYW5jaWFseWVhcmlkXCI6IGZpbmFuY2lhbHllYXJpZCB9IH1cclxuICAgICAgICApLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgdmFyIGVtYWlsID0gdGhpcy5jaGF0U2VydmljZS5jbGVhbmVtYWlsKHVzZXJpZCk7XHJcbiAgICAgICAgICAgIHZhciBsb2dwYXRoID0gYC9BR0FTUmVxdWVzdExvZy8ke2VtYWlsfWA7XHJcbiAgICAgICAgICAgIHZhciByZXF1ZXN0aW5mbyA9IHsgXCJhZ2FzcmVxdWVzdGlkXCI6IHJlc3VsdC5rZXksIFwiYUdBU1JlcXVlc3RUeXBlXCI6IGFHQVNSZXF1ZXN0VHlwZSwgXCJhR0FTUmVxdWVzdFR5cGVEZXNjclwiOiBhR0FTUmVxdWVzdFR5cGVEZXNjciwgXCJkaXNwbGF5dGltZVwiOiBkaXNwbGF5dGltZSwgXCJwYXJhbVwiOiB7IFwiZmluYW5jaWFseWVhcmlkXCI6IGZpbmFuY2lhbHllYXJpZCwgXCJmaW5hbmNpYWx5ZWFyZGVzY3JcIjogZmluYW5jaWFseWVhcmRlc2NyIH0gfVxyXG4gICAgICAgICAgICByZXR1cm4gZmlyZWJhc2UucHVzaChsb2dwYXRoLCByZXF1ZXN0aW5mbyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVmaW5hbmNpYWxhZ2dyZWdhdGVyZXF1ZXN0KHVzZXJpZDogc3RyaW5nLCBmaW5hbmNpYWx5ZWFyaWQ6IG51bWJlciwgYWNjb3VudHR5cGVpZDogbnVtYmVyLCBmaW5hbmNpYWx5ZWFyZGVzY3I6IHN0cmluZywgYWNjb3VudHR5cGVkZXNjOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkxvZ2dlZCBZZWFyIFwiICsgZmluYW5jaWFseWVhcmRlc2NyKTtcclxuICAgICAgICB2YXIgcGF0aCA9ICcvQUdBU1JlcXVlc3QnO1xyXG4gICAgICAgIHZhciBkaXNwbGF5dGltZSA9IERhdGUubm93KCkudG9TdHJpbmcoKTtcclxuICAgICAgICB2YXIgYUdBU1JlcXVlc3RUeXBlID0gQUdBU1JlcXVlc3RUeXBlLkZpbmFuY2lhbEFnZ3JlZ2F0ZVF1ZXJ5O1xyXG4gICAgICAgIHZhciBhR0FTUmVxdWVzdFR5cGVEZXNjciA9IEFHQVNSZXF1ZXN0VHlwZVthR0FTUmVxdWVzdFR5cGVdO1xyXG5cclxuICAgICAgICByZXR1cm4gZmlyZWJhc2UucHVzaChcclxuICAgICAgICAgICAgcGF0aCxcclxuICAgICAgICAgICAgeyBcInVzZXJpZFwiOiB1c2VyaWQsIFwiYUdBU1JlcXVlc3RUeXBlXCI6IGFHQVNSZXF1ZXN0VHlwZSwgXCJkYXRldGltZVwiOiAwIC0gRGF0ZS5ub3coKSwgXCJkaXNwbGF5dGltZVwiOiBkaXNwbGF5dGltZSwgXCJwYXJhbVwiOiB7IFwiZmluYW5jaWFseWVhcmlkXCI6IGZpbmFuY2lhbHllYXJpZCwgXCJhY2NvdW50dHlwZWlkXCI6IGFjY291bnR0eXBlaWQgfSB9XHJcbiAgICAgICAgKS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIHZhciBlbWFpbCA9IHRoaXMuY2hhdFNlcnZpY2UuY2xlYW5lbWFpbCh1c2VyaWQpO1xyXG4gICAgICAgICAgICB2YXIgbG9ncGF0aCA9IGAvQUdBU1JlcXVlc3RMb2cvJHtlbWFpbH1gO1xyXG4gICAgICAgICAgICB2YXIgcmVxdWVzdGluZm8gPSB7IFwiYWdhc3JlcXVlc3RpZFwiOiByZXN1bHQua2V5LCBcImFHQVNSZXF1ZXN0VHlwZVwiOiBhR0FTUmVxdWVzdFR5cGUsIFwiYUdBU1JlcXVlc3RUeXBlRGVzY3JcIjogYUdBU1JlcXVlc3RUeXBlRGVzY3IsIFwiZGlzcGxheXRpbWVcIjogZGlzcGxheXRpbWUsIFwicGFyYW1cIjogeyBcImZpbmFuY2lhbHllYXJpZFwiOiBmaW5hbmNpYWx5ZWFyaWQsIFwiZmluYW5jaWFseWVhcmRlc2NyXCI6IGZpbmFuY2lhbHllYXJkZXNjciwgXCJhY2NvdW50dHlwZWlkXCI6IGFjY291bnR0eXBlaWQsIFwiYWNjb3VudHR5cGVkZXNjXCI6IGFjY291bnR0eXBlZGVzYyB9IH1cclxuICAgICAgICAgICAgcmV0dXJuIGZpcmViYXNlLnB1c2gobG9ncGF0aCwgcmVxdWVzdGluZm8pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlR1BGU05vdGVSZXF1ZXN0KHBhcmFtOiBhbnkpIHtcclxuICAgICAgICB2YXIgcGF0aCA9ICcvQUdBU0dQRlNOb3RlUmVxdWVzdCc7XHJcbiAgICAgICAgdmFyIGRpc3BsYXl0aW1lID0gRGF0ZS5ub3coKS50b1N0cmluZygpO1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIGZpcmViYXNlLnB1c2goXHJcbiAgICAgICAgICAgIHBhdGgsIHBhcmFtKS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZW1haWwgPSB0aGlzLmNoYXRTZXJ2aWNlLmNsZWFuZW1haWwocGFyYW0udXNlcmlkKTtcclxuICAgICAgICAgICAgICAgIHZhciBsb2dwYXRoID0gYC9BR0FTR1BGU05vdGVSZXF1ZXN0TG9nLyR7cGFyYW0uYWdhc3JlcXVlc3RpZH0vJHtwYXJhbS5jb2RlfWA7XHJcbiAgICAgICAgICAgICAgICAvL3ZhciByZXF1ZXN0aW5mbyA9IHsgXCJhZ2FzcmVxdWVzdGlkXCI6IHJlc3VsdC5rZXksIFwiYUdBU1JlcXVlc3RUeXBlXCI6IGFHQVNSZXF1ZXN0VHlwZSwgXCJhR0FTUmVxdWVzdFR5cGVEZXNjclwiOiBhR0FTUmVxdWVzdFR5cGVEZXNjciwgXCJkaXNwbGF5dGltZVwiOiBkaXNwbGF5dGltZSwgXCJwYXJhbVwiOiB7IFwiZmluYW5jaWFseWVhcmlkXCI6IGZpbmFuY2lhbHllYXJpZCwgXCJmaW5hbmNpYWx5ZWFyZGVzY3JcIjogZmluYW5jaWFseWVhcmRlc2NyLCBcImFjY291bnR0eXBlaWRcIjogYWNjb3VudHR5cGVpZCwgXCJhY2NvdW50dHlwZWRlc2NcIjogYWNjb3VudHR5cGVkZXNjIH0gfVxyXG4gICAgICAgICAgICAgICAgcGFyYW0uZ3Bmc25vdGVyZXF1ZXN0a2V5ID0gcmVzdWx0LmtleTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmaXJlYmFzZS5wdXNoKGxvZ3BhdGgsIHBhcmFtKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBnZXRHUEZTTm90ZVJlcXVlc3RMaXN0KGFnYXNyZXF1ZXN0aWQ6IHN0cmluZywgY29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgdmFyIHBhdGggPSBgL0FHQVNHUEZTTm90ZVJlcXVlc3RMb2cvJHthZ2FzcmVxdWVzdGlkfS8ke2NvZGV9YDs7XHJcbiAgICAgICAgICAgIGxldCBvblZhbHVlRXZlbnQgPSAoc25hcHNob3Q6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHNuYXBzaG90LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBmaXJlYmFzZS5hZGRWYWx1ZUV2ZW50TGlzdGVuZXIob25WYWx1ZUV2ZW50LCBgJHtwYXRofWApO1xyXG4gICAgICAgIH0pLnNoYXJlKCk7XHJcbiAgICB9XHJcbiAgICBnZXRGaW5hbmNpYWxBZ2dyZWdhdGVRdWVyeVJlcXVlc3RMaXN0KHVzZXJpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICB2YXIgZW1haWwgPSB0aGlzLmNoYXRTZXJ2aWNlLmNsZWFuZW1haWwodXNlcmlkKTtcclxuICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgdmFyIHBhdGggPSBgL0FHQVNSZXF1ZXN0TG9nLyR7ZW1haWx9YDtcclxuICAgICAgICAgICAgbGV0IG9uVmFsdWVFdmVudCA9IChzbmFwc2hvdDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHRzID0gdGhpcy5oYW5kbGVBR0FTUmVxdWVzdFNuYXBzaG90KHNuYXBzaG90LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlc3VsdHMpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGZpcmViYXNlLmFkZFZhbHVlRXZlbnRMaXN0ZW5lcihvblZhbHVlRXZlbnQsIGAke3BhdGh9YCk7XHJcbiAgICAgICAgfSkuc2hhcmUoKTtcclxuICAgIH1cclxuICAgIGdldEZpbmFuY2lhbFBlcmlvZExpc3QoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgdmFyIHBhdGggPSAnL1BlcmlvZCc7XHJcbiAgICAgICAgICAgIGxldCBvblZhbHVlRXZlbnQgPSAoc25hcHNob3Q6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHNuYXBzaG90LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBmaXJlYmFzZS5hZGRWYWx1ZUV2ZW50TGlzdGVuZXIob25WYWx1ZUV2ZW50LCBgJHtwYXRofWApO1xyXG4gICAgICAgIH0pLnNoYXJlKCk7XHJcbiAgICB9XHJcbiAgICBnZXRHUEZTTm90ZVR5cGVMaXN0KCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBwYXRoID0gJy9HUEZTTm90ZVR5cGUnO1xyXG4gICAgICAgICAgICBsZXQgb25WYWx1ZUV2ZW50ID0gKHNuYXBzaG90OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChzbmFwc2hvdC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZmlyZWJhc2UuYWRkVmFsdWVFdmVudExpc3RlbmVyKG9uVmFsdWVFdmVudCwgYCR7cGF0aH1gKTtcclxuICAgICAgICB9KS5zaGFyZSgpO1xyXG4gICAgfVxyXG4gICAgZ2V0Q09BU2VnbWVudFR5cGVMaXN0KCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBwYXRoID0gJy9DT0FTZWdtZW50VHlwZSc7XHJcbiAgICAgICAgICAgIGxldCBvblZhbHVlRXZlbnQgPSAoc25hcHNob3Q6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHNuYXBzaG90LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBmaXJlYmFzZS5hZGRWYWx1ZUV2ZW50TGlzdGVuZXIob25WYWx1ZUV2ZW50LCBgJHtwYXRofWApO1xyXG4gICAgICAgIH0pLnNoYXJlKCk7XHJcbiAgICB9XHJcbiAgICBnZXRGaW5hbmNpYWxBZ2dyZWdhdGlvblNlYXJjaFJlc3VsdExpc3QocmVxdWVzdGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgcGF0aCA9IGAvQUdBU1Jlc3BvbnNlLyR7cmVxdWVzdGlkfWA7XHJcbiAgICAgICAgICAgIGxldCBvblZhbHVlRXZlbnQgPSAoc25hcHNob3Q6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHNuYXBzaG90LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBmaXJlYmFzZS5hZGRWYWx1ZUV2ZW50TGlzdGVuZXIob25WYWx1ZUV2ZW50LCBgJHtwYXRofWApO1xyXG4gICAgICAgIH0pLnNoYXJlKCk7XHJcbiAgICB9XHJcbiAgICBnZXRIVE1MUmVzdWx0KHJlcXVlc3RpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgdmFyIHBhdGggPSBgL0FHQVNSZXNwb25zZS8ke3JlcXVlc3RpZH1gO1xyXG4gICAgICAgICAgICBsZXQgb25WYWx1ZUV2ZW50ID0gKHNuYXBzaG90OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChzbmFwc2hvdC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZmlyZWJhc2UuYWRkVmFsdWVFdmVudExpc3RlbmVyKG9uVmFsdWVFdmVudCwgYCR7cGF0aH1gKTtcclxuICAgICAgICB9KS5zaGFyZSgpO1xyXG4gICAgfVxyXG4gICAgZ2V0R1BGU05vdGVIVE1MUmVzdWx0KHJlcXVlc3RpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgdmFyIHBhdGggPSBgL0FHQVNHUEZTTm90ZVJlc3BvbnNlLyR7cmVxdWVzdGlkfWA7XHJcbiAgICAgICAgICAgIGxldCBvblZhbHVlRXZlbnQgPSAoc25hcHNob3Q6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHNuYXBzaG90LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBmaXJlYmFzZS5hZGRWYWx1ZUV2ZW50TGlzdGVuZXIob25WYWx1ZUV2ZW50LCBgJHtwYXRofWApO1xyXG4gICAgICAgIH0pLnNoYXJlKCk7XHJcbiAgICB9XHJcbiAgICBnZXRBY2NvdW50VHlwZUxpc3QoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgdmFyIHBhdGggPSAnL0FjY291bnRUeXBlJztcclxuICAgICAgICAgICAgbGV0IG9uVmFsdWVFdmVudCA9IChzbmFwc2hvdDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQoc25hcHNob3QudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGZpcmViYXNlLmFkZFZhbHVlRXZlbnRMaXN0ZW5lcihvblZhbHVlRXZlbnQsIGAke3BhdGh9YCk7XHJcbiAgICAgICAgfSkuc2hhcmUoKTtcclxuICAgIH1cclxuICAgIGhhbmRsZUFHQVNSZXF1ZXN0U25hcHNob3QoZGF0YTogYW55KSB7XHJcbiAgICAgICAgLy9lbXB0eSBhcnJheSwgdGhlbiByZWZpbGwgYW5kIGZpbHRlclxyXG4gICAgICAgIHRoaXMuX2FnYXNyZXF1ZXN0bGlzdCA9IFtdO1xyXG4gICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGlkIGluIGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSAoPGFueT5PYmplY3QpLmFzc2lnbih7IGlkOiBpZCB9LCBkYXRhW2lkXSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hZ2FzcmVxdWVzdGxpc3QucHVzaChyZXN1bHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2FnYXNyZXF1ZXN0bGlzdC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYS5kYXRldGltZSA+IGIuZGF0ZXRpbWUpIHJldHVybiAxO1xyXG4gICAgICAgICAgICAgICAgaWYgKGEuZGF0ZXRpbWUgPCBiLmRhdGV0aW1lKSByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2FnYXNyZXF1ZXN0bGlzdHRvYnNlcnZhYmxlLm5leHQoWy4uLnRoaXMuX2FnYXNyZXF1ZXN0bGlzdF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5fYWdhc3JlcXVlc3RsaXN0O1xyXG4gICAgfVxyXG59Il19