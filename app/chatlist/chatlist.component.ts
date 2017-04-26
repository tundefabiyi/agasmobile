import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Page } from "ui/page";
import {  FirebaseService } from "../services";

import { UserName } from "../models";
import { RouterExtensions } from 'nativescript-angular/router/router-extensions';
import { Router } from '@angular/router';

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
        private router: Router
    ) { }

    ngOnInit() {
        this.usernamelist$ = <any>this.firebaseService.getUserList();
       
    }

  

    openchat(email: string) {
        this.router.navigate(["/chat", email]);
    }
    gotomygiftlist()
    {
        this.router.navigate(["/"]);
    }
   
}

