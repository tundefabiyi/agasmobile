import { Component, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { BackendService,HomePageService } from "../services";
import { AGASAlertService } from "./agasalert.service";
import { ValueList } from "../app.globals";
import { SelectedIndexChangedEventData } from "nativescript-drop-down";
import { DropDown } from "nativescript-drop-down";
import { GPFSStatementType } from "../agas/agas.model";
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
    public statementTypeList: any[];
    public statementTypeValueList: ValueList;
    @ViewChild("statementTypedd") statementTypedd_ElementRef: ElementRef;
    statementTypedd: DropDown;
    public selectedstatementTypeId: string;
    public selectedstatementTypedescr: string;
    //---------------------------------------------------------------------
    public statementCodeAndDescriptionList: any[];
    public statementCodeAndDescriptionValueList: ValueList;
    @ViewChild("statementCodeAndDescriptiondd") statementCodeAndDescriptiondd_ElementRef: ElementRef;
    statementCodeAndDescriptiondd: DropDown;
    public selectedstatementCodeAndDescriptionId: string;
    public selectedstatementCodeAndDescriptiondescr: string;
    limit: number;
    public alertequestlist$: Observable<any>;

    constructor(private agasalertService: AGASAlertService,
        private router: Router,private homePageService: HomePageService,
        private ngZone: NgZone
    ) {
        this.limit = 0;

    }
    ngOnInit() {
         this.homePageService.setTitle("GPFS Alert Setup");
         this.homePageService.setShowGoBackButton(false);
        this.homePageService.onGoBackObservable.subscribe(() => {
            this.ngZone.run(() => {
               // this.gobacktoresultlist();
            })
        });
        this.alerttypedd = this.alerttypedd_ElementRef.nativeElement;
       
        this.statementTypedd = this.statementTypedd_ElementRef.nativeElement;
        this.statementCodeAndDescriptiondd = this.statementCodeAndDescriptiondd_ElementRef.nativeElement;
        this.alertequestlist$ = <any>this.agasalertService.getAlertRequestList(BackendService.email);
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

      

        this.loadstatementTypeEnum();


    }
    loadstatementTypeEnum() {
        this.statementTypeList = [];
        for (var n in GPFSStatementType) {
            if (typeof GPFSStatementType[n] === 'number') {

                this.statementTypeList.push({ ValueMember: GPFSStatementType[n], DisplayMember: n });
            }
        }
        this.statementTypeValueList = new ValueList(this.statementTypeList);
        this.statementTypedd.items = this.statementTypeValueList;
        this.statementTypedd.selectedIndex = 0;
        this.selectedstatementTypeId = this.statementTypeValueList.getValue(0);
        this.selectedstatementTypedescr = this.statementTypeValueList.getText(0);
        this.loadstatementitems();
    }
   
    TotalExpenditureBudgetExceeded() {
        var requestinfo = { "name": this.selectedalertTypeId, "requiredparam": "None" };
        var loginfo = { "name": this.selectedalertTypedescr, "requiredparam": "None" };
        this.agasalertService.createAlertRequest(requestinfo, loginfo, BackendService.email)
            .then(res => {
                alert("Record Saved Successfully");
            })
            .catch(err => {
                alert("An error occurred while creating Search Request.");
            });
    }
    BalanceMoreThanSetLimit() {
        var requestinfo = {
            "name": this.selectedalertTypedescr,
            "code": this.selectedstatementCodeAndDescriptionId,
            "limit": this.limit,
            "statementType": this.selectedstatementTypeId,
            "statementTypeDescr": this.selectedstatementTypedescr,
            "requiredparam": `${this.selectedstatementCodeAndDescriptiondescr} @ ${this.limit} Limit`
        };
        var loginfo = {
            "name": this.selectedalertTypedescr,
            "code": this.selectedstatementCodeAndDescriptionId,
            "limit": this.limit,
            "statementType": this.selectedstatementTypeId,
            "statementTypeDescr": this.selectedstatementTypedescr,
            "requiredparam": `${this.selectedstatementCodeAndDescriptiondescr} @ ${this.limit} Limit`
        };
        this.agasalertService.createAGASAlertRequest(requestinfo, loginfo, BackendService.email)
            .then(res => {
                alert("Record Saved Successfully");
            })
            .catch(err => {
                alert("An error occurred while creating Search Request.");
            });
    }
    BalanceLessThanSetLimit() {
        var requestinfo = {
            "name": this.selectedalertTypedescr,
            "code": this.selectedstatementCodeAndDescriptionId,
            "limit": this.limit,
            "statementType": this.selectedstatementTypeId,
            "statementTypeDescr": this.selectedstatementTypedescr,
            "requiredparam": `${this.selectedstatementCodeAndDescriptiondescr} @ ${this.limit} Limit`
        };
        var loginfo = {
            "name": this.selectedalertTypedescr,
            "code": this.selectedstatementCodeAndDescriptionId,
            "limit": this.limit,
            "statementType": this.selectedstatementTypeId,
            "statementTypeDescr": this.selectedstatementTypedescr,
            "requiredparam": `${this.selectedstatementCodeAndDescriptiondescr} @ ${this.limit} Limit`
        };
        this.agasalertService.createAGASAlertRequest(requestinfo, loginfo, BackendService.email)
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
  
   
   
    public statementTypeDDonchange(args: SelectedIndexChangedEventData) {

        this.selectedstatementTypeId = this.statementTypeValueList.getValue(args.newIndex);
        this.selectedstatementTypedescr = this.statementTypeValueList.getText(args.newIndex);
        this.loadstatementitems();
    }
    public statementCodeAndDescriptionDDonchange(args: SelectedIndexChangedEventData) {

        this.selectedstatementCodeAndDescriptionId = this.statementCodeAndDescriptionValueList.getValue(args.newIndex);
        this.selectedstatementCodeAndDescriptiondescr = this.statementCodeAndDescriptionValueList.getText(args.newIndex);

    }
    loadstatementitems() {
       
        if (GPFSStatementType[this.selectedstatementTypeId] == GPFSStatementType[GPFSStatementType.BalanceSheet]) {
            this.agasalertService.getBalanceSheetCodesList().subscribe(res => {
                this.balancesheetcodesList = [];

                for (let id in res) {
                    let result = (<any>Object).assign({ id: id }, res[id]);

                    this.balancesheetcodesList.push({ ValueMember: result.code, DisplayMember: result.description });
                }
                this.statementCodeAndDescriptionValueList = new ValueList(this.balancesheetcodesList);
                this.statementCodeAndDescriptiondd.items = this.statementCodeAndDescriptionValueList;
                this.statementCodeAndDescriptiondd.selectedIndex = 0;
                this.selectedstatementCodeAndDescriptionId = this.statementCodeAndDescriptionValueList.getValue(0);
                this.selectedstatementCodeAndDescriptiondescr = this.statementCodeAndDescriptionValueList.getText(0);;
            });

        }
        if (GPFSStatementType[this.selectedstatementTypeId] == GPFSStatementType[GPFSStatementType.CashFlow]) {
            this.agasalertService.getCashFlowStatementCodesList().subscribe(res => {
                this.cashflowcodesList = [];

                for (let id in res) {
                    let result = (<any>Object).assign({ id: id }, res[id]);
                    // this.accountTypeList.push({ id: result.id, description: result.description, toString: () => { return result.description; } });
                    this.cashflowcodesList.push({ ValueMember: result.code, DisplayMember: result.description });
                }
                // this.cashflowcodesValueList = new ValueList(this.cashflowcodesList);
                this.statementCodeAndDescriptionValueList = new ValueList(this.cashflowcodesList);
                this.statementCodeAndDescriptiondd.items = this.statementCodeAndDescriptionValueList;
                this.statementCodeAndDescriptiondd.selectedIndex = 0;
                this.selectedstatementCodeAndDescriptionId = this.statementCodeAndDescriptionValueList.getValue(0);
                this.selectedstatementCodeAndDescriptiondescr = this.statementCodeAndDescriptionValueList.getText(0);;
            });

        }
        if (GPFSStatementType[this.selectedstatementTypeId] == GPFSStatementType[GPFSStatementType.FinancialPerformance]) {
            this.agasalertService.getFinancialPerformanceCodesList().subscribe(res => {
                this.financialperformancecodesList = [];

                for (let id in res) {
                    let result = (<any>Object).assign({ id: id }, res[id]);
                    this.financialperformancecodesList.push({ ValueMember: result.code, DisplayMember: result.description });
                }

                this.statementCodeAndDescriptionValueList = new ValueList(this.financialperformancecodesList);
                this.statementCodeAndDescriptiondd.items = this.statementCodeAndDescriptionValueList;
                this.statementCodeAndDescriptiondd.selectedIndex = 0;
                this.selectedstatementCodeAndDescriptionId = this.statementCodeAndDescriptionValueList.getValue(0);
                this.selectedstatementCodeAndDescriptiondescr = this.statementCodeAndDescriptionValueList.getText(0);;
            });

        }

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