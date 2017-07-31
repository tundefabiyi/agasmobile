import { Component, NgZone, OnInit } from '@angular/core';
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
    selector: "chat-list",
    templateUrl: "transAppDetails.html"
})
export class TransAppDetailsComponent implements OnInit {
    public primarykey: string;
    public groupkey: string;
    cashbookname: string;
    supplier: string;
    admin: string;
    economic: string;
    fund: string;
    functional: string;
    programme: string;
    geo: string;
    remarks: string;
    refdate: string;
    documentnos: string;
    amount: number;
    transsourcedescription: string;
    mobileTransApprovalStatusdescription: string;
    serverResponder: string;
    mobileTransApprovalStatus: string;
    systemdate: string;
    approvalremarks: string;
    approvaldate: string;

    constructor(private router: Router, private route: ActivatedRoute, private transAppService: TransAppService,
        private homePageService: HomePageService, private ngZone: NgZone) {


    }
    ngOnInit() {
        this.homePageService.setTitle("Transaction Details");
        this.homePageService.setShowGoBackButton(false);
        this.homePageService.onGoBackObservable.subscribe(() => {
            this.ngZone.run(() => {

            })
        });
        this.route.queryParams.subscribe(params => {
            this.primarykey = params["primarykey"];
            this.groupkey = params["groupkey"];
            console.log(this.groupkey);
            this.transAppService.getMobileTransactionRequestLogItem(this.primarykey, this.groupkey).subscribe(detail => {
                this.ngZone.run(() => {
                    for (let prop in detail) {
                        if (prop === "cashbookname") this.cashbookname = detail[prop];
                        if (prop === "admin") this.admin = detail[prop];
                        if (prop === "amount") this.amount = detail[prop];
                        if (prop === "documentnos") this.documentnos = detail[prop];
                        if (prop === "economic") this.economic = detail[prop];
                        if (prop === "functional") this.functional = detail[prop];
                        if (prop === "fund") this.fund = detail[prop];
                        if (prop === "geo") this.geo = detail[prop];
                        if (prop === "programme") this.programme = detail[prop];
                        if (prop === "refdate") this.refdate = detail[prop];
                        if (prop === "remarks") this.remarks = detail[prop];
                        if (prop === "serverResponder") this.serverResponder = detail[prop];
                        if (prop === "supplier") this.supplier = detail[prop];
                        if (prop === "transsourcedescription") this.transsourcedescription = detail[prop];
                        if (prop === "cashbookname") this.cashbookname = detail[prop];
                        if (prop === "mobileTransApprovalStatus") this.mobileTransApprovalStatus = detail[prop];
                        if (prop === "mobileTransApprovalStatusdescription") this.mobileTransApprovalStatusdescription = detail[prop];
                        if (prop === "systemdate") this.systemdate = detail[prop];
                        if (prop === "approvaldate") this.approvaldate = detail[prop];
                        if (prop === "approvalremarks") this.approvalremarks = detail[prop];

                    }
                });
            });

        });
    }

    approve() {

        dialogs.confirm({
            title: "Approval Confirmation",
            message: "Are You Sure You Want To Approve This Transaction",
            okButtonText: "Yes",
            cancelButtonText: "No",
            neutralButtonText: "Not Sure"
        }).then(result => {
            // result argument is boolean
            console.log(result)
            if (result == undefined) return;
            if (result == true) {
                var parameter = {
                    "primarykey": this.primarykey,
                    "approvalstatus": "yes",
                    "remarks": this.approvalremarks
                };
                console.log(parameter)
                this.transAppService.processapprovalresponse(this.serverResponder, parameter)
                    .then(res => {
                        alert("Approval Request Successfull . You Will recieve a notification for confirmation");
                    })
                    .catch(err => {
                        alert("An error occurred while creating Search Request.");
                    });
            }

        });
    }
    notapproved() {
        dialogs.confirm({
            title: "Denial Confirmation",
            message: "Are You Sure You Want To Deny Approval for This Transaction",
            okButtonText: "Yes",
            cancelButtonText: "No",
            neutralButtonText: "Not Sure"
        }).then(result => {
            // result argument is boolean
            if (result == undefined) return;
            if (result == true) {
                var parameter = {
                    "primarykey": this.primarykey,
                    "approvalstatus": "no",
                    "remarks": this.approvalremarks
                };

                this.transAppService.processapprovalresponse(this.serverResponder, parameter)
                    .then(res => {
                        dialogs.alert({
                            title: "Transaction Approval Request",
                            message: "Approval Request Successfull . You Will recieve a notification for confirmation",
                            okButtonText: "OK"
                        }).then(() => {
                            console.log("Dialog closed!");
                        });

                    })
                    .catch(err => {
                        alert("An error occurred while creating Search Request.");
                    });
            }

        });
    }
}