import { Component, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { BackendService } from "../services";
import { AGASAlertService } from "./agasalert.service";
import { ValueList } from "../app.globals";
import { SelectedIndexChangedEventData } from "nativescript-drop-down";
import { DropDown } from "nativescript-drop-down";
@Component({
    moduleId: module.id,
    selector: "finaggsearchdisplay",
    templateUrl: "agasalertsetup.html"
})
export class AGASAlertSetupComponent implements OnInit {
    public alertTypeList: any[];
    public alertTypeValueList: ValueList;
    @ViewChild("alerttypedd") alerttypedd_ElementRef: ElementRef;
    alerttypedd: DropDown;
    public selectedalertTypeId: string;
    public selectedalertTypedescr: string;
    //-------------------------------------------------------
    public balancesheetcodesList: any[];
    public balancesheetcodesValueList: ValueList;
    @ViewChild("balancesheetcodesdd") balancesheetcodesdd_ElementRef: ElementRef;
    balancesheetcodesdd: DropDown;
    public selectedbalancesheetcode: string;
    public selectedbalancesheetcodedescr: string;
    //-----------------------------------------------------------------------------
    public cashflowcodesList: any[];
    public cashflowcodesValueList: ValueList;
    @ViewChild("cashflowcodesdd") cashflowcodesdd_ElementRef: ElementRef;
    cashflowcodesdd: DropDown;
    public selectedcashflowcode: string;
    public selectedcashflowcodedescr: string;
    //==================================================================================
    public financialperformancecodesList: any[];
    public financialperformancecodesValueList: ValueList;
    @ViewChild("financialperformancecodesdd") financialperformancecodesdd_ElementRef: ElementRef;
    financialperformancecodesdd: DropDown;
    public selectedfinancialperformancecode: string;
    public selectedfinancialperformancecodedescr: string;
    //---------------------------------------------------------------------------
    limit: number;
    public alertequestlist$: Observable<any>;

    constructor(private agasalertService: AGASAlertService,
        private router: Router
    ) {
        this.limit = 0;
    }
    ngOnInit() {
        this.alerttypedd = this.alerttypedd_ElementRef.nativeElement;
        this.balancesheetcodesdd = this.balancesheetcodesdd_ElementRef.nativeElement;
        this.cashflowcodesdd = this.cashflowcodesdd_ElementRef.nativeElement;
        this.financialperformancecodesdd = this.financialperformancecodesdd_ElementRef.nativeElement;
        this.alertequestlist$ = <any>this.agasalertService.getAlertRequestList(BackendService.email);



        // this.searchrequestlist$ = <any>this.agasdataService.getFinancialAggregateQueryRequestList(BackendService.email);

        this.agasalertService.getAGASAlertTypeList().subscribe(res => {
            this.alertTypeList = [];

            for (let id in res) {
                let result = (<any>Object).assign({ id: id }, res[id]);
                // this.accountTypeList.push({ id: result.id, description: result.description, toString: () => { return result.description; } });
                this.alertTypeList.push({ ValueMember: result.name, DisplayMember: result.name });
            }
            this.alertTypeValueList = new ValueList(this.alertTypeList);
            this.alerttypedd.items = this.alertTypeValueList;
            this.alerttypedd.selectedIndex = 0;
            this.selectedalertTypeId = this.alertTypeValueList.getValue(0);
            this.selectedalertTypedescr = this.alertTypeValueList.getText(0);;
        });
        this.agasalertService.getBalanceSheetCodesList().subscribe(res => {
            this.balancesheetcodesList = [];

            for (let id in res) {
                let result = (<any>Object).assign({ id: id }, res[id]);
                // this.accountTypeList.push({ id: result.id, description: result.description, toString: () => { return result.description; } });
                this.balancesheetcodesList.push({ ValueMember: result.code, DisplayMember: result.description });
            }
            this.balancesheetcodesValueList = new ValueList(this.balancesheetcodesList);
            this.balancesheetcodesdd.items = this.balancesheetcodesValueList;
            this.balancesheetcodesdd.selectedIndex = 0;
            this.selectedbalancesheetcode = this.balancesheetcodesValueList.getValue(0);
            this.selectedbalancesheetcodedescr = this.balancesheetcodesValueList.getText(0);;
        });
        this.agasalertService.getCashFlowStatementCodesList().subscribe(res => {
            this.cashflowcodesList = [];

            for (let id in res) {
                let result = (<any>Object).assign({ id: id }, res[id]);
                // this.accountTypeList.push({ id: result.id, description: result.description, toString: () => { return result.description; } });
                this.cashflowcodesList.push({ ValueMember: result.code, DisplayMember: result.description });
            }
            this.cashflowcodesValueList = new ValueList(this.cashflowcodesList);
            this.cashflowcodesdd.items = this.cashflowcodesValueList;
            this.cashflowcodesdd.selectedIndex = 0;
            this.selectedcashflowcode = this.cashflowcodesValueList.getValue(0);
            this.selectedcashflowcodedescr = this.cashflowcodesValueList.getText(0);;
        });
        this.agasalertService.getFinancialPerformanceCodesList().subscribe(res => {
            this.financialperformancecodesList = [];

            for (let id in res) {
                let result = (<any>Object).assign({ id: id }, res[id]);
                // this.accountTypeList.push({ id: result.id, description: result.description, toString: () => { return result.description; } });
                this.financialperformancecodesList.push({ ValueMember: result.code, DisplayMember: result.description });
            }
            this.financialperformancecodesValueList = new ValueList(this.financialperformancecodesList);
            this.financialperformancecodesdd.items = this.financialperformancecodesValueList;
            this.financialperformancecodesdd.selectedIndex = 0;
            this.selectedfinancialperformancecode = this.financialperformancecodesValueList.getValue(0);
            this.selectedfinancialperformancecodedescr = this.financialperformancecodesValueList.getText(0);;
        });


    }

    ExpenditureItemLimitExceeded() {
        var requestinfo = { "name": this.selectedalertTypeId, "code": this.selectedfinancialperformancecode, "limit": this.limit,"requiredparam": `${this.selectedfinancialperformancecodedescr} @ ${this.limit} Limit` };
        var loginfo = { "name": this.selectedalertTypedescr, "requiredparam": `${this.selectedfinancialperformancecodedescr} @ ${this.limit} Limit` };
        this.agasalertService.createAlertRequest(requestinfo, loginfo, BackendService.email)
            .then(res => {
                alert("Record Saved Successfully");
            })
            .catch(err => {
                alert("An error occurred while creating Search Request.");
            });
    }
    TotalExpenditureBudgetExceeded() {
        var requestinfo = { "name": this.selectedalertTypeId,"requiredparam": "None"  };
        var loginfo = { "name": this.selectedalertTypedescr, "requiredparam": "None" };
        this.agasalertService.createAlertRequest(requestinfo, loginfo, BackendService.email)
            .then(res => {
                alert("Record Saved Successfully");
            })
            .catch(err => {
                alert("An error occurred while creating Search Request.");
            });
    }
    cretaterequest() {
        console.log("Selected " + this.selectedalertTypeId);
        eval("this." + this.selectedalertTypeId + "()");
    }
    public alertTypeDDonchange(args: SelectedIndexChangedEventData) {

        this.selectedalertTypeId = this.alertTypeValueList.getValue(args.newIndex);
        this.selectedalertTypedescr = this.alertTypeValueList.getText(args.newIndex);;
    }
    public cashflowcodesDDonchange(args: SelectedIndexChangedEventData) {

        this.selectedcashflowcode = this.cashflowcodesValueList.getValue(args.newIndex);
        this.selectedcashflowcodedescr = this.cashflowcodesValueList.getText(args.newIndex);;
    }
    public balancesheetcodesDDonchange(args: SelectedIndexChangedEventData) {

        this.selectedbalancesheetcode = this.balancesheetcodesValueList.getValue(args.newIndex);
        this.selectedbalancesheetcodedescr = this.balancesheetcodesValueList.getText(args.newIndex);;
    }
    public financialperformancecodesDDonchange(args: SelectedIndexChangedEventData) {

        this.selectedfinancialperformancecode = this.financialperformancecodesValueList.getValue(args.newIndex);
        this.selectedfinancialperformancecodedescr = this.financialperformancecodesValueList.getText(args.newIndex);;
    }
    public ddopen() {


    }
    public gotoback() {
        this.router.navigate(["/finagg-search"]);
    }
    public viewDetail(selecteditem: any) {
        let navigationExtras: NavigationExtras = {
            queryParams: {
                "name": selecteditem.name,
                "requiredparam": selecteditem.requiredparam,
                "logtime": selecteditem.logtime,
                "requestid": selecteditem.requestid
            }
        };
        this.router.navigate(["agasalerthtml-view"], navigationExtras);
    }
}