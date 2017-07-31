import { Injectable, Inject, NgZone } from "@angular/core";
import firebase = require("nativescript-plugin-firebase");
import { Observable } from 'rxjs/Observable';
import { ChatService } from "../chatlist/chat.service";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { BackendService } from "../services/backend.service";
import { mobileTransApprovalStatus } from "./transApp.model";

@Injectable()
export class TransAppService {
    constructor(
        private ngZone: NgZone,
        private chatService: ChatService,
        private BackendService: BackendService
    ) {

    }
    getMobileTransactionRequestUserLogList(userid: string): Observable<any> {
        return new Observable((observer: any) => {
            var email = this.chatService.cleanemail(userid);
            var path = `/MobileTransactionRequestUserLog/${email}`;;
            let onValueEvent = (snapshot: any) => {
                this.ngZone.run(() => {
                    var retlist: Array<any> = [];

                    let data = snapshot.value;
                    for (let id in data) {
                        let result = (<any>Object).assign({ id: id }, data[id]);
                        retlist.push(result);
                    }
                    observer.next(retlist);
                });
            };
            firebase.addValueEventListener(onValueEvent, `${path}`);
        }).share();
    }
    getMobileTransactionRequestLogItem(primarykey: string, groupkey: string): Observable<any> {
        return new Observable((observer: any) => {

            var path = `/MobileTransactionRequestLog/${groupkey}/${primarykey}`;
          //  console.log(path);
            let onValueEvent = (snapshot: any) => {
                this.ngZone.run(() => {
                   
                    observer.next(snapshot.value);
                });
            };
            firebase.addValueEventListener(onValueEvent, `${path}`);
        }).share();
    }
    getMobileTransactionRequestLogByGroup(groupkey: string): Observable<any> {
        return new Observable((observer: any) => {
            var email = this.chatService.cleanemail(userid);
            var path = `/MobileTransactionRequestLog/${groupkey}`;;
            let onValueEvent = (snapshot: any) => {
                this.ngZone.run(() => {
                    var retlist: Array<any> = [];
                    let data = snapshot.value;
                    for (let id in data) {
                        let result = (<any>Object).assign({ id: id }, data[id]);
                        retlist.push(result);
                    }
                    observer.next(retlist);
                });
            };
            firebase.addValueEventListener(onValueEvent, `${path}`);
        }).share();
    }
    getPendingMobileTransactionRequestUserLogList(userid: string): Observable<any> {
        return new Observable((observer: any) => {
            var email = this.chatService.cleanemail(userid);
            var path = `/MobileTransactionRequestUserLog/${email}`;;
            let onValueEvent = (snapshot: any) => {
                this.ngZone.run(() => {
                    var retlist: Array<any> = [];;

                    let data = snapshot.value;
                    for (let id in data) {
                        let result = (<any>Object).assign({ id: id }, data[id]);
                        if (mobileTransApprovalStatus[result.mobileTransApprovalStatus] == mobileTransApprovalStatus[mobileTransApprovalStatus.Pending])
                            retlist.push(result);
                    }
                    observer.next(retlist);
                });
            };
            firebase.addValueEventListener(onValueEvent, `${path}`);
        }).share();
    }
    processapprovalresponse(serverResponder: string, parameter: any, ) {
        var path = '/ClientRequest';
        return firebase.push(
            path,
            { "serverResponder": serverResponder, "parameter": parameter, "datetime": 0 - Date.now() }
        ).then(result => {

        });
    }
}