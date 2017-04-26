import { Component, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { BackendService } from "../services";
import { AGASDataService } from "./agasdata.service";
//import * as Enumerable from 'linq';
import { List } from 'linqts';
//var str = require('nativescript-utils').str
@Component({
    moduleId: module.id,
    selector: "finaggdetaildisplay",
    templateUrl: "agasfinaggdetail.html"
})
export class AGASFinAggDetailComponent implements OnInit {
    // public finaggList$: Observable<any>;
    public financialyeardesc: string;
    public financialperiodId: number;
    public accounttypedesc: string;
    public querydate: string;
    public agasrequestid: string;
    public recordcount: string;
    public finaggList: any[];
    public displayfinaggList: any[];
    public searchPhrase: string;


    constructor(private router: Router, private route: ActivatedRoute, private agasdataService: AGASDataService) {


    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.financialyeardesc = params["financialyeardescr"];
            this.accounttypedesc = params["accounttypedesc"];
            this.financialperiodId = params["financialperiodId"];
            this.querydate = params["displaytime"];
            this.agasrequestid = params["agasrequestid"];
            // this.finaggList$ = this.agasdataService.getFinancialAggregationSearchResultList(this.agasrequestid);
            this.agasdataService.getFinancialAggregationSearchResultList(this.agasrequestid).subscribe(res => {
                this.finaggList = [];
                this.displayfinaggList = [];
                for (let id in res) {
                    let result = (<any>Object).assign({ id: id }, res[id]);
                    this.finaggList.push(result);
                    this.displayfinaggList.push(result);
                }
                this.recordcount = this.finaggList.length;
            });

        });
    }
    public viewDetail(selecteditem: any) {
        let navigationExtras: NavigationExtras = {
            queryParams: {
                "financialyeardesc": this.financialyeardesc,
                "financialperiodId": this.financialperiodId,
                "agasrequestid": this.agasrequestid,
                "accounttypedesc": this.accounttypedesc,
                 "displaytime": this.querydate,
                "code": selecteditem.Code,
                "Description": selecteditem.Description,
                "currentbalance": selecteditem.currentbalance,
                "finalbudget": selecteditem.finalbudget,
                "initialbudget": selecteditem.initialbudget,
                "supplementarybudget": selecteditem.supplementary,
                "totalcredit": selecteditem.totalcredit,
                "totaldebit": selecteditem.totaldebit,
                "virement": selecteditem.virement
            }
        };
        this.router.navigate(["agasfinagg-infodetail"], navigationExtras);
    }
    gotosearchlist() {
        this.router.navigate(["/finagg-search"]);
    }
    public onSubmit(value) {
        // this.myItems = new ObservableArray<DataItem>();
        this.displayfinaggList = [];
        // let searchValue = value.toLowerCase();
        if (value !== "") {
            this.displayfinaggList = new List<any>(this.finaggList)
                .Where(a => a.Description.toLowerCase().indexOf(value.toLowerCase()) >= 0)
                .Select(y => y)
                .ToArray(); // > [8, 10] 
        }
        else {
            this.displayfinaggList = this.finaggList;
        }
    }

    public onClear() {
        this.searchPhrase = "";
        this.displayfinaggList = this.finaggList;
    }
}