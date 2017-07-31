import { Component, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import { BackendService,HomePageService } from "../services";
import { AGASDataService } from "./agasdata.service";

@Component({
    moduleId: module.id,
    selector: "finaggdetailhtmldisplay",
    templateUrl: "agashtmlview.html"
})
export class AGASHTMLViewComponent implements OnInit {
    public financialyeardesc: string;
    public htmlview: string = "<Div>Processing..</Div>";
    public querydate: string;
    public agasrequestid: string;
    public reportTitle: string;
    constructor(private router: Router, private route: ActivatedRoute, private agasdataService: AGASDataService,
    private homePageService: HomePageService,private ngZone: NgZone) {


    }
    ngOnInit() {
         this.homePageService.setTitle("GPFS");
          this.homePageService.setShowGoBackButton(true);
        this.homePageService.onGoBackObservable.subscribe(() => {
            this.ngZone.run(() => {
               this.gotosearchlist();
            })
        });
        this.route.queryParams.subscribe(params => {
            this.financialyeardesc = params["financialyeardescr"];
            this.reportTitle = params["reportTitle"];
            this.querydate = params["displaytime"];
            this.agasrequestid = params["agasrequestid"];
            // this.finaggList$ = this.agasdataService.getFinancialAggregationSearchResultList(this.agasrequestid);
            this.agasdataService.getHTMLResult(this.agasrequestid).subscribe(res => {
                if (res)
                    this.htmlview = res;
            });

        });
    }
    gotosearchlist() {
        this.router.navigate(["/finagg-search"]);
    }
}