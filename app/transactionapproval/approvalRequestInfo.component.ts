import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router/router-extensions';

@Component({
     moduleId: module.id,
    selector: "approval-request-info",
    templateUrl: "approvalRequestInfo.html"
})
export class AprovalRequestInfoComponent implements OnInit {
    @Input() apprequestinfo: any;
     @Input() showlogbutton :boolean = true;
    constructor(private router: Router) {
    }
    ngOnInit() {

    }

    opendetail() {
        let navigationExtras: NavigationExtras = {
            queryParams: {
                "primarykey": this.apprequestinfo.primarykey,
                "groupkey": this.apprequestinfo.groupkey
            }
        };
        this.router.navigate(["mobile-trans-approval-detail"], navigationExtras);
    }
     openlogdetail() {
        let navigationExtras: NavigationExtras = {
            queryParams: {
                "primarykey": this.apprequestinfo.primarykey,
                "groupkey": this.apprequestinfo.groupkey
            }
        };
        this.router.navigate(["approvalLogdetail"], navigationExtras);
    }
}