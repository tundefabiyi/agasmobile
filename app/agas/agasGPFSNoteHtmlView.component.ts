import { Component, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { BackendService } from "../services";
import { AGASDataService } from "./agasdata.service";

@Component({
    moduleId: module.id,
    selector: "finaggdetailhtmldisplay",
    templateUrl: "agasGPFSNotehtmlview.html"
})
export class AGASGPFSNoteHTMLViewComponent implements OnInit {
    public financialyeardesc: string;
    public accounttypedesc: string;
    public financialperiodId: string;
    public code: string;
    public description: string;
    public currentbalance: string;
    public finalbudget: string;
    public initialbudget: string;
    public supplementarybudget: string;
    public virement: string;
    public totaldebit: string;
    public totalcredit: string;
    public displaytime: string;
    public gpfsnoterequestkey: string;
    public htmlview: string = "<Div>Loading..</Div>";
    public querydate: string;
    public agasrequestid: string;
    public requestdatetime: string;
    constructor(private router: Router, private route: ActivatedRoute, private agasdataService: AGASDataService) {


    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.financialyeardesc = params["financialyeardesc"];
            this.accounttypedesc = params["accounttypedesc"];
            this.financialperiodId = params["financialperiodId"];
            this.agasrequestid = params["agasrequestid"];
            this.code = params["code"];
            this.description = params["Description"];
            this.currentbalance = params["currentbalance"];
            this.finalbudget = params["finalbudget"];
            this.initialbudget = params["initialbudget"];
            this.supplementarybudget = params["supplementarybudget"];
            this.virement = params["virement"];
            this.totaldebit = params["totaldebit"];
            this.totalcredit = params["totalcredit"];
            this.totalcredit = params["totalcredit"];
            this.displaytime = params["displaytime"];
            this.gpfsnoterequestkey = params["gpfsnoterequestkey"];
            this.requestdatetime = params["requestdatetime"];

            this.agasdataService.getGPFSNoteHTMLResult(this.gpfsnoterequestkey).subscribe(res => {
                this.htmlview = res;
            });

        });
    }
    gobacktodetail() {
        let navigationExtras: NavigationExtras = {
            queryParams: {
                "financialyeardesc": this.financialyeardesc,
                "financialperiodId": this.financialperiodId,
                "agasrequestid": this.agasrequestid,
                "accounttypedesc": this.accounttypedesc,
                "displaytime": this.displaytime,
                "code": this.code,
                "Description": this.description,
                "currentbalance": this.currentbalance,
                "finalbudget": this.finalbudget,
                "initialbudget": this.initialbudget,
                "supplementarybudget": this.supplementarybudget,
                "totalcredit": this.totalcredit,
                "totaldebit": this.totaldebit,
                "virement": this.virement
            }
        };
        this.router.navigate(["agasfinagg-infodetail"], navigationExtras);
    }
}