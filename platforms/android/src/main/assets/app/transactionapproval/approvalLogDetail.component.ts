import { Component, NgZone, OnInit, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FirebaseService } from "../services";
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router/router-extensions';

import { BackendService, HomePageService } from "../services";
import { TransAppService } from "./transApp.service";
import { ChatService } from "../chatlist/chat.service";
import dialogs = require("ui/dialogs");

@Component({
    moduleId: module.id,
    selector: "approvalLogDetail",
    templateUrl: "approvalLogDetail.html"
})
export class ApprovalLogDetailComponent implements OnInit, AfterViewInit {
    public primarykey: string;
    public groupkey: string;
    public requestobj: any = {};
   public apploglist$: Observable<any>;

    constructor(private router: Router, private route: ActivatedRoute, private transAppService: TransAppService,
        private homePageService: HomePageService, private ngZone: NgZone) {


    }
    ngAfterViewInit() {
        console.log("Key Detected " + this.groupkey)
        this.apploglist$ = this.transAppService.getMobileTransactionRequestLogByGroup(this.groupkey);
    }
    ngOnInit() {
        this.homePageService.setTitle("Approval Log Details");
        this.homePageService.setShowGoBackButton(false);
        this.homePageService.onGoBackObservable.subscribe(() => {
            this.ngZone.run(() => {

            })
        });


        this.route.queryParams.subscribe(params => {
            this.primarykey = params["primarykey"];
            this.groupkey = params["groupkey"];
            // console.log(this.groupkey);

            this.transAppService.getMobileTransactionRequestLogItem(this.primarykey, this.groupkey).subscribe(detail => {
                this.ngZone.run(() => {
                    console.log(JSON.stringify(detail));
                    this.requestobj = detail;

                });
            });


        });
    }


}