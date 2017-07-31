import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NgModule } from "@angular/core";
import { ChatService } from "../chatlist/chat.service";
import { BackendService } from "../services";
import { AGASDataService } from "./agasdata.service";
import { AGASAlertService } from "../agasalerts/agasalert.service";

import { agasRouting } from "./agas.routes";
import { AGASFinAggSearchComponent } from "./agasfinaggsearch.component";
import { AGASFinAggDetailComponent } from "./agasfinaggdetail.component";
import { AGASHTMLViewComponent } from "./agashtmlview.component";
import { AGASFinAggInfoDetailComponent } from "./agasfinagginfodetail.component";
import { AGASGPFSNoteHTMLViewComponent } from "./agasGPFSNoteHtmlView.component";
import { AGASAlertSetupComponent } from "../agasalerts/agasalertsetup.component";
import { AGASAlertHTMLViewComponent } from "../agasalerts/agasalerthtmlview.component";

import { registerElement } from "nativescript-angular/element-registry";

registerElement("DropDown", () => require("nativescript-drop-down/drop-down").DropDown);

@NgModule({
    providers: [
        ChatService, BackendService, AGASDataService,AGASAlertService
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        agasRouting
    ],
    declarations: [
        AGASFinAggSearchComponent, AGASFinAggDetailComponent, AGASHTMLViewComponent, AGASFinAggInfoDetailComponent,
        AGASGPFSNoteHTMLViewComponent,AGASAlertSetupComponent,AGASAlertHTMLViewComponent
    ]
})
export class AGASModule { }
