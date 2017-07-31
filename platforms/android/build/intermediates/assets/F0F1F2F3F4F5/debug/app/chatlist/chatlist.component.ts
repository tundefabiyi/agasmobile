import { Component, NgZone, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Page } from "ui/page";
import { FirebaseService } from "../services";

import { UserName } from "../models";
import { RouterExtensions } from 'nativescript-angular/router/router-extensions';
import { Router } from '@angular/router';
import { BackendService, HomePageService } from "../services";

@Component({
    moduleId: module.id,
    selector: "chat-list",
    templateUrl: "chatlist.html"
})
export class ChatListComponent implements OnInit {


    public username: UserName;

    public usernamelist$: Observable<any>;


    constructor(private routerExtensions: RouterExtensions,
        private firebaseService: FirebaseService,
        private router: Router, private ngZone: NgZone, private homePageService: HomePageService
    ) { }

    ngOnInit() {
        this.homePageService.setShowGoBackButton(false);
        this.homePageService.setTitle("Chat List");
        this.homePageService.onGoBackObservable.subscribe(() => {
            this.ngZone.run(() => {
                // this.openchatlist();
            })
        });
        this.usernamelist$ = <any>this.firebaseService.getUserList();

    }



    openchat(email: string) {
        this.router.navigate(["/chat", email]);
    }
    gotomygiftlist() {
        this.router.navigate(["/"]);
    }

}

