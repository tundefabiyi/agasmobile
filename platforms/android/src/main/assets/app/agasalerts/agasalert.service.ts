import { Injectable, Inject, NgZone } from "@angular/core";
import firebase = require("nativescript-plugin-firebase");
import { Observable } from 'rxjs/Observable';

import { ChatService } from "../chatlist/chat.service";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { BackendService } from "../services/backend.service";
@Injectable()
export class AGASAlertService {
    private _agasrequestlist: Array<any> = [];
    constructor(
        private ngZone: NgZone,
        private chatService: ChatService,
        private BackendService: BackendService
    ) {

    }
    getAGASAlertTypeList(): Observable<any> {
        return new Observable((observer: any) => {
            var path = '/AGASAlertType';
            let onValueEvent = (snapshot: any) => {
                this.ngZone.run(() => {
                    observer.next(snapshot.value);
                });
            };
            firebase.addValueEventListener(onValueEvent, `${path}`);
        }).share();
    }
    getBalanceSheetCodesList(): Observable<any> {
        return new Observable((observer: any) => {
            var path = '/BalanceSheetCodes';
            let onValueEvent = (snapshot: any) => {
                this.ngZone.run(() => {
                    observer.next(snapshot.value);
                });
            };
            firebase.addValueEventListener(onValueEvent, `${path}`);
        }).share();
    }
    getCashFlowStatementCodesList(): Observable<any> {
        return new Observable((observer: any) => {
            var path = '/CashFlowStatementCodes';
            let onValueEvent = (snapshot: any) => {
                this.ngZone.run(() => {
                    observer.next(snapshot.value);
                });
            };
            firebase.addValueEventListener(onValueEvent, `${path}`);
        }).share();
    }
    getFinancialPerformanceCodesList(): Observable<any> {
        return new Observable((observer: any) => {
            var path = '/FinancialPerformanceCodes';
            let onValueEvent = (snapshot: any) => {
                this.ngZone.run(() => {
                    observer.next(snapshot.value);
                });
            };
            firebase.addValueEventListener(onValueEvent, `${path}`);
        }).share();
    }
    createAlertRequest(requestparam: any, logparam: any, userid: string) {
        var requestpath = '/AGASAlertRequest';
        var displaytime = Date.now().toString();
        var email = this.chatService.cleanemail(userid);
        logparam.logtime = displaytime;
        logparam.alertdetected = 0;
        logparam.userid = email;
        requestparam.userid = email;
        requestparam.logtime = displaytime;
        requestparam.messagingtoken = BackendService.messagingtoken;
        return firebase.push(
            requestpath, requestparam).then(result => {
                var logpath = `/AGASAlertRequestLog/${email}/${result.key}`;
                logparam.requestid = result.key;
                logparam.messagingtoken = BackendService.messagingtoken;
                return firebase.setValue(logpath, logparam);
            });
    }
     createAGASAlertRequest(requestparam: any, logparam: any, userid: string) {
        var requestpath = '/AGASAlertRequest';
        var displaytime = Date.now().toString();
        var email = this.chatService.cleanemail(userid);
        logparam.logtime = displaytime;
        logparam.alertdetected = 0;
        logparam.userid = email;
        requestparam.userid = email;
        requestparam.logtime = displaytime;
        requestparam.messagingtoken = BackendService.messagingtoken;
        return firebase.push(
            requestpath, requestparam).then(result => {
                var logpath = `/AGASAlertRequestLog/${email}/${result.key}`;
                logparam.requestid = result.key;
                logparam.messagingtoken = BackendService.messagingtoken;
                return firebase.setValue(logpath, logparam);
            });
    }
    getAlertRequestList(userid: string): Observable<any> {
        return new Observable((observer: any) => {
            var email = this.chatService.cleanemail(userid);
            var path = `/AGASAlertRequestLog/${email}`;;
            let onValueEvent = (snapshot: any) => {
                this.ngZone.run(() => {
                    let results = this.handleAGASRequestSnapshot(snapshot.value);
                    observer.next(results);
                });
            };
            firebase.addValueEventListener(onValueEvent, `${path}`);
        }).share();
    }
    handleAGASRequestSnapshot(data: any) {
        //empty array, then refill and filter
        this._agasrequestlist = [];
        if (data) {
            for (let id in data) {
                let result = (<any>Object).assign({ id: id }, data[id]);
                this._agasrequestlist.push(result);
            }
            this._agasrequestlist.sort(function (a, b) {
                if (a.logtime > b.logtime) return 1;
                if (a.logtime < b.logtime) return -1;
                return 0;
            })


        }
        return this._agasrequestlist;
    }
    getHTMLResult(requestid: string): Observable<any> {
        return new Observable((observer: any) => {
            var path = `/AGASAlertResponse/${requestid}`;
            let onValueEvent = (snapshot: any) => {
                this.ngZone.run(() => {
                    observer.next(snapshot.value);
                });
            };
            firebase.addValueEventListener(onValueEvent, `${path}`);
        }).share();
    }
}