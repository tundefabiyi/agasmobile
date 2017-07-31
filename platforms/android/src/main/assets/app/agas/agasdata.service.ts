import { Injectable, Inject, NgZone } from "@angular/core";
import firebase = require("nativescript-plugin-firebase");
import { Observable } from 'rxjs/Observable';
import { AGASRequestType } from "./agas.model";
import { AGASRequestInfo } from "./agas.model";
import { ChatService } from "../chatlist/chat.service";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class AGASDataService {
    _agasrequestlisttobservable: BehaviorSubject<Array<AGASRequestInfo>> = new BehaviorSubject([]);
    private _agasrequestlist: Array<AGASRequestInfo> = [];
    constructor(
        private ngZone: NgZone,
        private chatService: ChatService
    ) {

    }
    createFinancialPerformancerequest(userid: string, financialyearid: number, financialyeardescr: string) {
        console.log("Logged Year" + financialyeardescr);
        var path = '/AGASRequest';
        var displaytime = Date.now().toString();
        var aGASRequestType = AGASRequestType.FinancialPerformance;
        var aGASRequestTypeDescr = AGASRequestType[aGASRequestType];
        return firebase.push(
            path,
            { "userid": userid, "aGASRequestType": aGASRequestType, "datetime": 0 - Date.now(), "displaytime": displaytime, "param": { "financialyearid": financialyearid } }
        ).then(result => {
            var email = this.chatService.cleanemail(userid);
            var logpath = `/AGASRequestLog/${email}`;
            var requestinfo = { "agasrequestid": result.key, "aGASRequestType": aGASRequestType, "aGASRequestTypeDescr": aGASRequestTypeDescr, "displaytime": displaytime, "param": { "financialyearid": financialyearid, "financialyeardescr": financialyeardescr } }
            return firebase.push(logpath, requestinfo);
        });
    }
    createcashflowrequest(userid: string, financialyearid: number, financialyeardescr: string) {

        var path = '/AGASRequest';
        var displaytime = Date.now().toString();
        var aGASRequestType = AGASRequestType.CashFlowStatement;
        var aGASRequestTypeDescr = AGASRequestType[aGASRequestType];
        return firebase.push(
            path,
            { "userid": userid, "aGASRequestType": aGASRequestType, "datetime": 0 - Date.now(), "displaytime": displaytime, "param": { "financialyearid": financialyearid } }
        ).then(result => {
            var email = this.chatService.cleanemail(userid);
            var logpath = `/AGASRequestLog/${email}`;
            var requestinfo = { "agasrequestid": result.key, "aGASRequestType": aGASRequestType, "aGASRequestTypeDescr": aGASRequestTypeDescr, "displaytime": displaytime, "param": { "financialyearid": financialyearid, "financialyeardescr": financialyeardescr } }
            return firebase.push(logpath, requestinfo);
        });
    }
    createchangesinNetAssetrequest(userid: string, financialyearid: number, financialyeardescr: string) {

        var path = '/AGASRequest';
        var displaytime = Date.now().toString();
        var aGASRequestType = AGASRequestType.StatementOfChangesInNetAssets;
        var aGASRequestTypeDescr = AGASRequestType[aGASRequestType];
        return firebase.push(
            path,
            { "userid": userid, "aGASRequestType": aGASRequestType, "datetime": 0 - Date.now(), "displaytime": displaytime, "param": { "financialyearid": financialyearid } }
        ).then(result => {
            var email = this.chatService.cleanemail(userid);
            var logpath = `/AGASRequestLog/${email}`;
            var requestinfo = { "agasrequestid": result.key, "aGASRequestType": aGASRequestType, "aGASRequestTypeDescr": aGASRequestTypeDescr, "displaytime": displaytime, "param": { "financialyearid": financialyearid, "financialyeardescr": financialyeardescr } }
            return firebase.push(logpath, requestinfo);
        });
    }
    createbalancesheetrequest(userid: string, financialyearid: number, financialyeardescr: string) {
        console.log("Logged Year" + financialyeardescr);
        var path = '/AGASRequest';
        var displaytime = Date.now().toString();
        var aGASRequestType = AGASRequestType.BalanceSheet;
        var aGASRequestTypeDescr = AGASRequestType[aGASRequestType];
        return firebase.push(
            path,
            { "userid": userid, "aGASRequestType": aGASRequestType, "datetime": 0 - Date.now(), "displaytime": displaytime, "param": { "financialyearid": financialyearid } }
        ).then(result => {
            var email = this.chatService.cleanemail(userid);
            var logpath = `/AGASRequestLog/${email}`;
            var requestinfo = { "agasrequestid": result.key, "aGASRequestType": aGASRequestType, "aGASRequestTypeDescr": aGASRequestTypeDescr, "displaytime": displaytime, "param": { "financialyearid": financialyearid, "financialyeardescr": financialyeardescr } }
            return firebase.push(logpath, requestinfo);
        });
    }
    createfinancialaggregaterequest(userid: string, financialyearid: number, accounttypeid: number, financialyeardescr: string, accounttypedesc: string) {
        console.log("Logged Year " + financialyeardescr);
        var path = '/AGASRequest';
        var displaytime = Date.now().toString();
        var aGASRequestType = AGASRequestType.FinancialAggregateQuery;
        var aGASRequestTypeDescr = AGASRequestType[aGASRequestType];

        return firebase.push(
            path,
            { "userid": userid, "aGASRequestType": aGASRequestType, "datetime": 0 - Date.now(), "displaytime": displaytime, "param": { "financialyearid": financialyearid, "accounttypeid": accounttypeid } }
        ).then(result => {
            var email = this.chatService.cleanemail(userid);
            var logpath = `/AGASRequestLog/${email}`;
            var requestinfo = { "agasrequestid": result.key, "aGASRequestType": aGASRequestType, "aGASRequestTypeDescr": aGASRequestTypeDescr, "displaytime": displaytime, "param": { "financialyearid": financialyearid, "financialyeardescr": financialyeardescr, "accounttypeid": accounttypeid, "accounttypedesc": accounttypedesc } }
            return firebase.push(logpath, requestinfo);
        });
    }
    createGPFSNoteRequest(param: any) {
        var path = '/AGASGPFSNoteRequest';
        var displaytime = Date.now().toString();


        return firebase.push(
            path, param).then(result => {
                var email = this.chatService.cleanemail(param.userid);
                var logpath = `/AGASGPFSNoteRequestLog/${param.agasrequestid}/${param.code}`;
                //var requestinfo = { "agasrequestid": result.key, "aGASRequestType": aGASRequestType, "aGASRequestTypeDescr": aGASRequestTypeDescr, "displaytime": displaytime, "param": { "financialyearid": financialyearid, "financialyeardescr": financialyeardescr, "accounttypeid": accounttypeid, "accounttypedesc": accounttypedesc } }
                param.gpfsnoterequestkey = result.key;
                return firebase.push(logpath, param);
            });
    }
    getGPFSNoteRequestList(agasrequestid: string, code: string): Observable<any> {
        return new Observable((observer: any) => {
            var path = `/AGASGPFSNoteRequestLog/${agasrequestid}/${code}`;;
            let onValueEvent = (snapshot: any) => {
                this.ngZone.run(() => {
                    observer.next(snapshot.value);
                });
            };
            firebase.addValueEventListener(onValueEvent, `${path}`);
        }).share();
    }
    getFinancialAggregateQueryRequestList(userid: string): Observable<any> {
        var email = this.chatService.cleanemail(userid);
        return new Observable((observer: any) => {
            var path = `/AGASRequestLog/${email}`;
            let onValueEvent = (snapshot: any) => {
                this.ngZone.run(() => {
                    let results = this.handleAGASRequestSnapshot(snapshot.value);
                    observer.next(results);
                });
            };
            firebase.addValueEventListener(onValueEvent, `${path}`);
        }).share();
    }
    getFinancialPeriodList(): Observable<any> {
        return new Observable((observer: any) => {
            var path = '/Period';
            let onValueEvent = (snapshot: any) => {
                this.ngZone.run(() => {
                    observer.next(snapshot.value);
                });
            };
            firebase.addValueEventListener(onValueEvent, `${path}`);
        }).share();
    }
    getGPFSNoteTypeList(): Observable<any> {
        return new Observable((observer: any) => {
            var path = '/GPFSNoteType';
            let onValueEvent = (snapshot: any) => {
                this.ngZone.run(() => {
                    observer.next(snapshot.value);
                });
            };
            firebase.addValueEventListener(onValueEvent, `${path}`);
        }).share();
    }
    getCOASegmentTypeList(): Observable<any> {
        return new Observable((observer: any) => {
            var path = '/COASegmentType';
            let onValueEvent = (snapshot: any) => {
                this.ngZone.run(() => {
                    observer.next(snapshot.value);
                });
            };
            firebase.addValueEventListener(onValueEvent, `${path}`);
        }).share();
    }
    getFinancialAggregationSearchResultList(requestid: string): Observable<any> {
        return new Observable((observer: any) => {
            var path = `/AGASResponse/${requestid}`;
            let onValueEvent = (snapshot: any) => {
                this.ngZone.run(() => {
                    observer.next(snapshot.value);
                });
            };
            firebase.addValueEventListener(onValueEvent, `${path}`);
        }).share();
    }
    getHTMLResult(requestid: string): Observable<any> {
        return new Observable((observer: any) => {
            var path = `/AGASResponse/${requestid}`;
            let onValueEvent = (snapshot: any) => {
                this.ngZone.run(() => {
                    observer.next(snapshot.value);
                });
            };
            firebase.addValueEventListener(onValueEvent, `${path}`);
        }).share();
    }
    getGPFSNoteHTMLResult(requestid: string): Observable<any> {
        return new Observable((observer: any) => {
            var path = `/AGASGPFSNoteResponse/${requestid}`;
            let onValueEvent = (snapshot: any) => {
                this.ngZone.run(() => {
                    observer.next(snapshot.value);
                });
            };
            firebase.addValueEventListener(onValueEvent, `${path}`);
        }).share();
    }
    getAccountTypeList(): Observable<any> {
        return new Observable((observer: any) => {
            var path = '/AccountType';
            let onValueEvent = (snapshot: any) => {
                this.ngZone.run(() => {
                    observer.next(snapshot.value);
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
                if (a.datetime > b.datetime) return 1;
                if (a.datetime < b.datetime) return -1;
                return 0;
            })

            this._agasrequestlisttobservable.next([...this._agasrequestlist]);
        }
        return this._agasrequestlist;
    }
}