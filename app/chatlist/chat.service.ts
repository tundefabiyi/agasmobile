import { Injectable, Inject, NgZone } from "@angular/core";
import firebase = require("nativescript-plugin-firebase");
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/share';
import { MessageStatus } from "./chat.model";
import { Chat } from "./chat.model";
import { BackendService } from "../services";


@Injectable()
export class ChatService {
    constructor(
        private ngZone: NgZone
    ) { }

    private _chatlist: Array<Chat> = [];
    _chatlistobservable: BehaviorSubject<Array<Chat>> = new BehaviorSubject([]);
    _chatlistoUpdate: Subject<Chat> = new Subject<Chat>();
    cleanemail(email: string) {

        var charactercount: number = email.length;
        var cleanedstring: string = ""; var i: number;
        for (i = 0; i < charactercount; i++) {
            if (email.charAt(i) == ".") continue;
            cleanedstring += email.charAt(i);
        }

        return cleanedstring;
    }
    getsessionid(emailid1: string, emailid2: string) {
        emailid1 = this.cleanemail(emailid1);
        emailid2 = this.cleanemail(emailid2);
        var sessionpath = emailid1 < emailid2 ? emailid1 + emailid2 : emailid2 + emailid1;
        return sessionpath;
    }

    savemessage(from: string, to: string, message: string) {
        console.log('saving message from ' + from + ' To ' + to);
        var sessionid = this.getsessionid(from, to);
        var path = `/Messages/${sessionid}`;
        var msgstatus = MessageStatus.Pending;
        return firebase.push(
            path,
            { "sessionid": sessionid, "sentby": from, "recievedby": to, "message": message, "msgstatus": msgstatus, "datetime": 0 - Date.now(), updateTs: firebase.ServerValue.TIMESTAMP }
        ).then(
            function (result: any) {
                console.log('message saved ' + JSON.stringify(result));
                return JSON.stringify(result);
            },
            function (errorMessage: any) {
                console.log(errorMessage);
            });
    }
    getchatListBetween(user1: string, user2: string): Observable<any> {
        return new Observable((observer: any) => {

            var sessionid = this.getsessionid(user1, user2);
            var path = `/Messages/${sessionid}`;
            let onValueEvent = (snapshot: any) => {
                this.ngZone.run(() => {
                    let results = this.handleChatSnapshot(snapshot.value);
                    //  console.log(JSON.stringify(results))
                    observer.next(results);
                });
            };
            firebase.addValueEventListener(onValueEvent, `${path}`);
        }).share();
    }
    handleChatSnapshot(data: any) {
        //empty array, then refill and filter
        this._chatlist = [];
        if (data) {
            for (let id in data) {
                let result = (<any>Object).assign({ id: id }, data[id]);
                this._chatlist.push(result);
            }
            this._chatlist.sort(function (a, b) {
                if (a.datetime > b.datetime) return -1;
                if (a.datetime < b.datetime) return 1;
                return 0;
            })
            // this.publishUpdates();
            this._chatlistobservable.next([...this._chatlist]);
        }
        return this._chatlist;
    }
    filterUnread(email: string,chatlist: Chat[])
    {
        return chatlist.filter(chat => { return (chat.recievedby == email && chat.msgstatus == <string>MessageStatus.RecievedAtServer); })

    }
    markmessagesasread(chatlist: Chat[]) {
        console.log("chat list count: " + chatlist.length);

        var chatid: any;
        var recievedAtServer = <string>MessageStatus.RecievedAtServer;
        console.log("status: " + recievedAtServer);
        var containerobserv: Observable<any>[];
        var unreadchatlist = chatlist.filter(chat => { return (chat.recievedby == BackendService.email && chat.msgstatus == recievedAtServer); })
        console.log("Filetered chat list count: " + unreadchatlist.length);
        var updateobj = {};
        for (chatid in unreadchatlist) {
            var chat = <Chat>chatlist[chatid];
            // var updatejson = { "msgstatus":<number> MessageStatus.DeliveredToPhone };
            //  var path = `/Messages/${chat.sessionid}`;
            var path = `/Messages/${chat.sessionid}/${chat.id}/msgstatus`;

            updateobj[path] = MessageStatus.DeliveredToPhone;
            //  var updateobserve = Observable.fromPromise(firebase.setValue(path, updatejson)); 

            // updateobserve.subscribe(a => { });
        }
        // console.log('update saved to firbase ' + JSON.stringify(updateobj));
        return firebase.update('', updateobj).then(res => {
            return "Record Saved In Firebase";
        }).catch(errorMessage => {
            console.log(errorMessage);
        });


    }
    updatemessagestatus(chat: Chat) {
             
        var recievedAtServer = <string>MessageStatus.RecievedAtServer;
        console.log("status: " + recievedAtServer);
       
        var updateobj = {};
        var path = `/Messages/${chat.sessionid}/${chat.id}/msgstatus`;
        console.log("Path To Doc " + path);
        updateobj[path] = MessageStatus.DeliveredToPhone;
        return firebase.update('', updateobj).then(res => {
            return "Record Saved In Firebase";
        }).catch(errorMessage => {
            console.log(errorMessage);
        });
       
      


    }

    getunreadmessages(deviceowner: string, remoteuser: string) {
        var sessionid = this.getsessionid(deviceowner, remoteuser);
        var path = `/Messages/${sessionid}`;
      
     // this._chatlistoUpdate = new Subject<Chat>();
    
        var onQueryEvent = result => {

            if (!result.error && result.value) {
                console.log("Event type: " + result.type);
                console.log("Key: " + result.key);
                console.log("Value: " + JSON.stringify(result.value));
                var chat = <Chat>result.value;
                if (chat.recievedby == deviceowner && chat.msgstatus == <string>MessageStatus.RecievedAtServer)
                {
                    console.log("Message Fired: " + chat.message);
                    this._chatlistoUpdate.next(chat);
                    
                }
            }
        };
       return firebase.query(
            onQueryEvent,
            path,
            {
                
                singleEvent: false,
                // order by company.country
                orderBy: {
                    type: firebase.QueryOrderByType.KEY//,
                   // value: 'msgstatus' // mandatory when type is 'child'
                },
                // but only companies 'since' a certain year (Telerik's value is 2000, which is imaginary btw)
                // use either a 'range'
                //range: {
                //    type: firebase.QueryRangeType.EQUAL_TO,
                //    value: MessageStatus.RecievedAtServer
                //}
            }
        ).then(result => {
           
            return result;
           });

    }
    
    getchatListBetween1(deviceowner: string, remoteuser: string): Observable<any> {
        return new Observable((observer: any) => {

            var sessionid = this.getsessionid(deviceowner, remoteuser);
            var path = `/Messages/${sessionid}`;
            var onQueryEvent = result => {

                if (!result.error && result.value) {
                    console.log("Event type: " + result.type);
                    console.log("Key: " + result.key);
                    console.log("Value: " + JSON.stringify(result.value));
                    var chat = <Chat>result.value;
                    if (chat.recievedby == deviceowner && chat.msgstatus == <string>MessageStatus.RecievedAtServer) {
                        console.log("Message Fired: " + chat.message);
                      
                        this.ngZone.run(() => {
                           
                            observer.next(chat);
                        });
                    }
                }
            };
            firebase.query(
                onQueryEvent,
                path,
                {

                    singleEvent: false,
                    // order by company.country
                    orderBy: {
                        type: firebase.QueryOrderByType.KEY//,
                        // value: 'msgstatus' // mandatory when type is 'child'
                    },
                  
                }
            ).then(result => {


            });
           
        }).share();
    }

}