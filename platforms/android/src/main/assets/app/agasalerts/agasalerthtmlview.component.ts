import { Component, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { BackendService,HomePageService } from "../services";
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
    public htmlview: string = "<Div>No Alerts..</Div>";
    constructor(private router: Router, private route: ActivatedRoute,
        private agasalertService: AGASAlertService,private homePageService: HomePageService, private ngZone: NgZone) {


    }
    ngOnInit() {
        this.homePageService.setTitle("GPFS Alert Detail");
         this.homePageService.setShowGoBackButton(false);
        this.homePageService.onGoBackObservable.subscribe(() => {
            this.ngZone.run(() => {
               // this.gobacktoresultlist();
            })
        });
        this.route.queryParams.subscribe(params => {
            // this.ngZone.run(() => {

            // });
            this.name = params["name"];
            this.requiredparam = params["requiredparam"];
            this.logtime = params["logtime"];
            this.requestid = params["requestid"];
            this.agasalertService.getHTMLResult(this.requestid).subscribe(res => {
                if(res)
                this.htmlview = res;
            });

        });
    }
    openagasalert() {
        this.router.navigate(["/agasalert-view"]);
    }
}