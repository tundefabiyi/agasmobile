import { Component, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import { BackendService } from "../services";
import { AGASDataService } from "./agasdata.service";

export class AGASGPFSNoteViewComponent {
    public financialyeardesc: string;
    public financialperiodId: number;
    public accounttypedesc: string;
    
}