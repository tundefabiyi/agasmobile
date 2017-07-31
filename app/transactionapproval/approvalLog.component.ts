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
    selector: "pendingtransApp",
    templateUrl: "approvalLog.html"
})
export class ApprovalLogComponent implements OnInit {
    public approvalLoglist$: Observable<any>;

    constructor(private routerExtensions: RouterExtensions,
        private backendService: BackendService,
        private router: Router, private ngZone: NgZone, private homePageService: HomePageService,
        private transAppService: TransAppService, private chatService: ChatService
    ) {

    }
    ngOnInit() {
        this.homePageService.setShowGoBackButton(false);
        this.homePageService.setTitle("Approval Log");
        this.homePageService.onGoBackObservable.subscribe(() => {
            this.ngZone.run(() => {
                // this.openchatlist();
            })
        });
        this.approvalLoglist$ = <any>this.transAppService.getApprovalLogList(this.chatService.cleanemail(BackendService.email));

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