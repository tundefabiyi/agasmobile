import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NgModule } from "@angular/core";

import { BackendService } from "../services";

import { TransAppService } from "./transApp.service";

import { PendingTransAppComponent } from "./pendingtransApp.component";
import { TransAppDetailsComponent } from "./transAppDetails.component";
import { AprovalRequestInfoComponent } from "./approvalRequestInfo.component";
import { ApprovalLogComponent } from "./approvalLog.component";
import { ApprovalLogDetailComponent } from "./approvalLogDetail.component";

import { transAppRouting } from "./transApp.routes";

@NgModule({
    providers: [
        TransAppService, BackendService
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        transAppRouting
    ],
    declarations: [
        PendingTransAppComponent,TransAppDetailsComponent,AprovalRequestInfoComponent,ApprovalLogComponent,ApprovalLogDetailComponent
    ]
})
export class TransAppModule { }
