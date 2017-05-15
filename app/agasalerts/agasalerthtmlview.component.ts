import { Component, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { BackendService } from "../services";
import { AGASAlertService } from "./agasalert.service";

@Component({
    moduleId: module.id,
    selector: "finaggdetailhtmldisplay",
    templateUrl: "agasalerthtmlview.html"
})
export class AGASAlertHTMLViewComponent implements OnInit {
    public name: string;
    public requiredparam: string;
    public logtime: string;
    public requestid: string;
    public htmlview: string = "<Div>Loading..</Div>";
    constructor(private router: Router, private route: ActivatedRoute,
        private agasalertService: AGASAlertService, private ngZone: NgZone) {


    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            // this.ngZone.run(() => {

            // });
            this.name = params["name"];
            this.requiredparam = params["requiredparam"];
            this.logtime = params["logtime"];
            this.requestid = params["requestid"];
            this.agasalertService.getHTMLResult(this.requestid).subscribe(res => {
                this.htmlview = res;
            });

        });
    }
    openagasalert() {
        this.router.navigate(["/agasalert-view"]);
    }
}