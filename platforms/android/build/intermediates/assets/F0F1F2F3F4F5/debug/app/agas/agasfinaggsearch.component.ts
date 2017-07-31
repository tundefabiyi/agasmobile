import { Component, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { BackendService, HomePageService } from "../services";
import { AGASDataService } from "./agasdata.service";
import { ValueList } from "../app.globals";
import { SelectedIndexChangedEventData } from "nativescript-drop-down";
import { DropDown } from "nativescript-drop-down";
import { AGASRequestType } from "./agas.model";

@Component({
    moduleId: module.id,
    selector: "finaggsearchdisplay",
    templateUrl: "agasfinaggsearch.html"
})
export class AGASFinAggSearchComponent implements OnInit {

    public accountTypeList: any[];
    public accountTypeValueList: ValueList;
    @ViewChild("accounttypedd") accounttypedd_ElementRef: ElementRef;
    accounttypedd: DropDown;
    public selectedaccountTypeId: number;
    public selectedaccountTypedescr: string;

    public financialperiodlist: any[];
    public financialperiodValueList: ValueList;
    @ViewChild("financialperioddd") financialperioddd_ElementRef: ElementRef;
    financialperiodedd: DropDown;
    public selectedfinancialperiodId: number;
    public selectedfinancialperioddescr: string;

    public querytypelist: any[];
    public querytypeValueList: ValueList;
    @ViewChild("querytypedd") querytypedd_ElementRef: ElementRef;
    querytypedd: DropDown;
    public selectedquerytypeId: number;
    public selectedquerytypedescr: string;

    public searchrequestlist$: Observable<any>;





    constructor(private agasdataService: AGASDataService,
        private router: Router, private homePageService: HomePageService, private ngZone: NgZone
    ) {
        
    }

    ngOnInit() {
        this.homePageService.setTitle("GPFS Search");
         this.homePageService.setShowGoBackButton(false);
        this.homePageService.onGoBackObservable.subscribe(() => {
            this.ngZone.run(() => {
               // this.gobacktoresultlist();
            })
        });
        this.accounttypedd = this.accounttypedd_ElementRef.nativeElement;
        this.financialperiodedd = this.financialperioddd_ElementRef.nativeElement;
        this.querytypedd = this.querytypedd_ElementRef.nativeElement;

        // this.accountTypeList$ = <any>this.agasdataService.getAccountTypeList();
        // this.financialperiodlist$ = <any>this.agasdataService.getFinancialPeriodList();
        this.searchrequestlist$ = <any>this.agasdataService.getFinancialAggregateQueryRequestList(BackendService.email);

        this.agasdataService.getAccountTypeList().subscribe(res => {
            this.accountTypeList = [];

            for (let id in res) {
                let result = (<any>Object).assign({ id: id }, res[id]);
                // this.accountTypeList.push({ id: result.id, description: result.description, toString: () => { return result.description; } });
                this.accountTypeList.push({ ValueMember: result.id, DisplayMember: result.description });
            }
            this.accountTypeValueList = new ValueList(this.accountTypeList);
            this.accounttypedd.items = this.accountTypeValueList;
            this.accounttypedd.selectedIndex = 0;
            this.selectedaccountTypeId = this.accountTypeValueList.getValue(0);
            this.selectedaccountTypedescr = this.accountTypeValueList.getText(0);;
        });
        this.agasdataService.getFinancialPeriodList().subscribe(res => {
            this.financialperiodlist = [];
            for (let id in res) {
                let result = (<any>Object).assign({ id: id }, res[id]);
                this.financialperiodlist.push({ ValueMember: result.id, DisplayMember: result.description });
            }
            this.financialperiodValueList = new ValueList(this.financialperiodlist);
            this.financialperiodedd.items = this.financialperiodValueList;
            this.financialperiodedd.selectedIndex = 0;
            this.selectedfinancialperiodId = this.financialperiodValueList.getValue(0);
            this.selectedfinancialperioddescr = this.financialperiodValueList.getText(0);
        });
        this.loadqueryTypeEnum();
    }
    loadqueryTypeEnum() {
        this.querytypelist = [];
        for (var n in AGASRequestType) {
            if (typeof AGASRequestType[n] === 'number') {

                this.querytypelist.push({ ValueMember: AGASRequestType[n], DisplayMember: n });
            }
        }
        this.querytypeValueList = new ValueList(this.querytypelist);
        this.querytypedd.items = this.querytypeValueList;
        this.querytypedd.selectedIndex = 0;
        this.selectedquerytypeId = this.querytypeValueList.getValue(0);
        this.selectedquerytypedescr = this.querytypeValueList.getText(0);
    }

    public FinancialAggregateQuery() {
        console.log("FinancialAggregateQuery");
        this.agasdataService.createfinancialaggregaterequest(BackendService.email, this.selectedfinancialperiodId, this.selectedaccountTypeId, this.selectedfinancialperioddescr, this.selectedaccountTypedescr)
            .then(res => {
                alert("Record Saved Successfully");
            })
            .catch(err => {
                alert("An error occurred while creating Search Request.");
            });
    }
    BalanceSheet() {
        console.log("BalanceSheet");
        this.agasdataService.createbalancesheetrequest(BackendService.email, this.selectedfinancialperiodId, this.selectedfinancialperioddescr)
            .then(res => {
                alert("Record Saved Successfully");
            })
            .catch(err => {
                alert("An error occurred while creating Search Request.");
            });
    }
    FinancialPerformance() {
        this.agasdataService.createFinancialPerformancerequest(BackendService.email, this.selectedfinancialperiodId, this.selectedfinancialperioddescr)
            .then(res => {
                alert("Record Saved Successfully");
            })
            .catch(err => {
                alert("An error occurred while creating Search Request.");
            });
    }
    CashFlowStatement() {
        this.agasdataService.createcashflowrequest(BackendService.email, this.selectedfinancialperiodId, this.selectedfinancialperioddescr)
            .then(res => {
                alert("Record Saved Successfully");
            })
            .catch(err => {
                alert("An error occurred while creating Search Request.");
            });
    }
    StatementOfChangesInNetAssets() {
        this.agasdataService.createchangesinNetAssetrequest(BackendService.email, this.selectedfinancialperiodId, this.selectedfinancialperioddescr)
            .then(res => {
                alert("Record Saved Successfully");
            })
            .catch(err => {
                alert("An error occurred while creating Search Request.");
            });
    }
    cretaterequest() {

        eval("this." + this.selectedquerytypedescr + "()");
    }
    public gotomygiftlist() {
        this.router.navigate(["/"]);
    }
    public viewDetail(selecteditem: any) {
        if (selecteditem.aGASRequestType == "1") {
            let navigationExtras: NavigationExtras = {
                queryParams: {
                    "agasrequestid": selecteditem.agasrequestid,
                    "financialyeardescr": selecteditem.param.financialyeardescr,
                    "accounttypedesc": selecteditem.param.accounttypedesc,
                    "displaytime": selecteditem.displaytime,
                    "financialperiodId": selecteditem.param.financialyearid
                }
            };
            this.router.navigate(["agasfinagg-detail"], navigationExtras);
        }
        else {
            let navigationExtras: NavigationExtras = {
                queryParams: {
                    "agasrequestid": selecteditem.agasrequestid,
                    "financialyeardescr": selecteditem.param.financialyeardescr,
                    "reportTitle": selecteditem.aGASRequestTypeDescr,
                    "displaytime": selecteditem.displaytime
                }
            };
            this.router.navigate(["agashtml-view"], navigationExtras);
        }
    }
    public accounttypepickeronchange(args: SelectedIndexChangedEventData) {

        this.selectedaccountTypeId = this.accountTypeValueList.getValue(args.newIndex);
        this.selectedaccountTypedescr = this.accountTypeValueList.getText(args.newIndex);;
    }
    public accounttypepickeronopen() {


    }
    public financialperiodpickeronchange(args: SelectedIndexChangedEventData) {

        this.selectedfinancialperiodId = this.financialperiodValueList.getValue(args.newIndex);
        this.selectedfinancialperioddescr = this.financialperiodValueList.getText(args.newIndex);
    }
    public financialperiodpickeronopen() {


    }
    public querytypepickeronchange(args: SelectedIndexChangedEventData) {


        this.selectedquerytypeId = this.querytypeValueList.getValue(args.newIndex);
        this.selectedquerytypedescr = this.querytypeValueList.getText(args.newIndex);
    }
    public querytypepickeronopen() {


    }
    openagasalert() {
        this.router.navigate(["/agasalert-view"]);
    }
}