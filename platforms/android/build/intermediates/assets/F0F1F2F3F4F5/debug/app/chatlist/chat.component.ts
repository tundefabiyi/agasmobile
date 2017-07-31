import { Component, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import { ChatService } from "./chat.service";
import { BackendService, HomePageService } from "../services";
import { ListView } from "ui/list-view";
var sound = require("nativescript-sound");
@Component({
    moduleId: module.id,
    selector: "chatdisplay",
    templateUrl: "chat.html"
})
export class ChatComponent implements OnInit {

    from: string;
    to: string;
    message: string;
    me: string;
    private sub: any;
    public chatlist$: Observable<any>;
    unreadchatlist: Observable<any>;
    @ViewChild("listview") lv: ElementRef;
    listview: ListView;
    alertplayer: any;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private ngZone: NgZone,
        private chatService: ChatService,
        private homePageService: HomePageService

    ) {

    }

    ngOnInit() {

        this.homePageService.setShowGoBackButton(true);
        this.homePageService.onGoBackObservable.subscribe(() => {
            this.ngZone.run(() => {
                 this.openchatlist();
            })
        });
        this.alertplayer = sound.create("~/assets/alert.mp3"); // preload the audio file 
        this.listview = this.lv.nativeElement;
        this.sub = this.route.params.subscribe((params: any) => {
            this.from = BackendService.email;
            this.me = BackendService.email;
            this.to = params['to'];
            this.homePageService.setTitle(this.to);
            this.chatlist$ = <any>this.chatService.getchatListBetween(this.from, this.to);


            this.chatService._chatlistobservable.subscribe(x => {
                this.ngZone.run(() => {

                    setTimeout(() => {
                        this.listview.scrollToIndex(x.length - 1);

                    }, 0);
                });

            });
            this.chatService._chatlistobservable.subscribe(x => {
                var makesound: boolean = false;
                var unreadmessages = this.chatService.filterUnread(BackendService.email, x);
                for (let entry of unreadmessages) {
                    console.log(entry); // 1, "string", false
                    this.chatService.updatemessagestatus(entry);
                    makesound = true;
                }
                if (makesound) this.alertplayer.play();
            });


        });
    }
    sendmsg() {
        this.chatService.savemessage(this.from, this.to, this.message).then(() => {
            this.message = "";

        });
    }
    openchatlist() {
        this.router.navigate(["/chat-list"]);
    }


}