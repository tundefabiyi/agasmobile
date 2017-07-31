import { Component, NgZone, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FirebaseService } from "../services";
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router/router-extensions';

import { BackendService, HomePageService } from "../services";
import { TransAppService } from "./transApp.service";
import { ChatService } from "../chatlist/chat.service";

@Component({
    moduleId: module.id,
    selector: "chat-list",
    templateUrl: "pendingtransApp.html"
})
export class PendingTransAppComponent implements OnInit {
    public pendingtranslist$: Observable<any>;

    constructor(private routerExtensions: RouterExtensions,
        private backendService: BackendService,
        private router: Router, private ngZone: NgZone, private homePageService: HomePageService,
        private transAppService: TransAppService, private chatService: ChatService
    ) {

    }
    ngOnInit() {
        this.homePageService.setShowGoBackButton(false);
        this.homePageService.setTitle("Pending Approvals");
        this.homePageService.onGoBackObservable.subscribe(() => {
            this.ngZone.run(() => {
                // this.openchatlist();
            })
        });
        this.pendingtranslist$ = <any>this.transAppService.getPendingMobileTransactionRequestUserLogList(this.chatService.cleanemail(BackendService.email));

    }
    public viewDetail(selecteditem: any) {
        let navigationExtras: NavigationExtras = {
            queryParams: {
                "primarykey": selecteditem.primarykey,
                "groupkey": selecteditem.groupkey
            }
        };
        this.router.navigate(["mobile-trans-approval-detail"], navigationExtras);
    }
}