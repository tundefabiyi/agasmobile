import { Component, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { BackendService } from "../services";
import { AGASDataService } from "./agasdata.service";
import { ValueList } from "../app.globals";
import { SelectedIndexChangedEventData } from "nativescript-drop-down";
import { DropDown } from "nativescript-drop-down";


@Component({
    moduleId: module.id,
    selector: "finagginfodetaildisplay",
    templateUrl: "agasfinagginfodetail.html"
})
export class AGASFinAggInfoDetailComponent implements OnInit {
    public financialyeardesc: string;
    public financialperiodId: number;
    public accounttypedesc: string;
    public code: string;
    public description: string;
    public currentbalance: string;
    public finalbudget: string;
    public initialbudget: string;
    public supplementarybudget: string;
    public virement: string;
    public totaldebit: string;
    public totalcredit: string;
    public agasrequestid: string;
    public displaytime: string;
    public noterequestList: any[];

    public notetypeList: any[];
    public notetypeValueList: ValueList;
    @ViewChild("notetypedd") notetypedd_ElementRef: ElementRef;
    notetypedd: DropDown;
    public selectednotetypeId: number;
    public selectednotetypedescr: string;

    public segmenttypeList: any[];
    public segmenttypeValueList: ValueList;
    @ViewChild("segmenttypedd") segmenttypedd_ElementRef: ElementRef;
    segmenttypedd: DropDown;
    public selectedsegmenttypeId: number;
    public selectedsegmenttypedescr: string;

    constructor(private router: Router, private route: ActivatedRoute, private agasdataService: AGASDataService) {


    }
    ngOnInit() {
        this.notetypedd = this.notetypedd_ElementRef.nativeElement;
        this.segmenttypedd = this.segmenttypedd_ElementRef.nativeElement;
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
            this.agasdataService.getGPFSNoteRequestList(this.agasrequestid,this.code).subscribe(res => {
                this.noterequestList = [];                
                for (let id in res) {
                    let result = (<any>Object).assign({ id: id }, res[id]);
                    this.noterequestList.push(result);                    
                }               
            });
        });
        this.agasdataService.getCOASegmentTypeList().subscribe(res => {
            this.segmenttypeList = [];

            for (let id in res) {
                let result = (<any>Object).assign({ id: id }, res[id]);
                // this.accountTypeList.push({ id: result.id, description: result.description, toString: () => { return result.description; } });
                this.segmenttypeList.push({ ValueMember: result.id, DisplayMember: result.description });
            }
            this.segmenttypeValueList = new ValueList(this.segmenttypeList);
            this.segmenttypedd.items = this.segmenttypeValueList;
            this.segmenttypedd.selectedIndex = 0;
            this.selectedsegmenttypeId = this.segmenttypeValueList.getValue(0);
            this.selectedsegmenttypedescr = this.segmenttypeValueList.getText(0);
        });
        this.agasdataService.getGPFSNoteTypeList().subscribe(res => {
            this.notetypeList = [];

            for (let id in res) {
                let result = (<any>Object).assign({ id: id }, res[id]);
                // this.accountTypeList.push({ id: result.id, description: result.description, toString: () => { return result.description; } });
                this.notetypeList.push({ ValueMember: result.id, DisplayMember: result.description });
            }
            this.notetypeValueList = new ValueList(this.notetypeList);
            this.notetypedd.items = this.notetypeValueList;
            this.notetypedd.selectedIndex = 0;
            this.selectednotetypeId = this.notetypeValueList.getValue(0);
            this.selectednotetypedescr = this.notetypeValueList.getText(0);
        });

    }
    public segmenttypeonchange(args: SelectedIndexChangedEventData) {


        this.selectedsegmenttypeId = this.segmenttypeValueList.getValue(args.newIndex);
        this.selectedsegmenttypedescr = this.segmenttypeValueList.getText(args.newIndex);
    }
    public segmenttypeonopen() {


    }
    public notetypeonchange(args: SelectedIndexChangedEventData) {


        this.selectednotetypeId = this.notetypeValueList.getValue(args.newIndex);
        this.selectednotetypedescr = this.notetypeValueList.getText(args.newIndex);
    }
    public notetypeonopen() {


    }
    createrequest() {
        var requestobj: any = {};
        requestobj.userid = BackendService.email;
        requestobj.agasrequestid = this.agasrequestid;
        requestobj.code = this.code;
        requestobj.segmenttype = this.selectedsegmenttypeId;
        requestobj.notetype = this.selectednotetypeId;
        requestobj.financialyearid = this.financialperiodId;
        requestobj.notetypedescr = this.selectednotetypedescr;
        requestobj.segmenttypedescr = this.selectedsegmenttypedescr;
        requestobj.datetime = Date.now().toString();
        this.agasdataService.createGPFSNoteRequest(requestobj)
            .then(res => {
                alert("Record Saved Successfully");
            })
            .catch(err => {
                alert("An error occurred while creating Search Request.");
            });

    }
    gobacktoresultlist() {
        let navigationExtras: NavigationExtras = {
            queryParams: {
                "agasrequestid": this.agasrequestid,
                "financialyeardescr": this.financialyeardesc,
                "accounttypedesc": this.accounttypedesc,
                "displaytime": this.displaytime,
                "financialperiodId": this.financialperiodId

            }
        };
        this.router.navigate(["agasfinagg-detail"], navigationExtras);
    }

     public viewDetail(selecteditem: any) {
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
                "virement": this.virement,
                "gpfsnoterequestkey": selecteditem.gpfsnoterequestkey,
                "requestdatetime": selecteditem.datetime
            }
        };
        this.router.navigate(["agasgpfsnote-htmlview"], navigationExtras);
    }
}