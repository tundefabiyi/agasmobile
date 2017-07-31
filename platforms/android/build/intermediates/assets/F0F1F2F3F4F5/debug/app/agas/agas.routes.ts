import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AGASFinAggSearchComponent } from "./agasfinaggsearch.component";
import { AGASFinAggDetailComponent } from "./agasfinaggdetail.component";
import { AGASHTMLViewComponent } from "./agashtmlview.component";
import { AGASFinAggInfoDetailComponent } from "./agasfinagginfodetail.component";
import { AGASGPFSNoteHTMLViewComponent } from "./agasGPFSNoteHtmlView.component";
import { AGASAlertSetupComponent } from "../agasalerts/agasalertsetup.component";
import { AGASAlertHTMLViewComponent } from "../agasalerts/agasalerthtmlview.component";
import { AuthGuard } from "../auth-guard.service";
const agasRoutes: Routes = [
    { path: "finagg-search", component: AGASFinAggSearchComponent, canActivate: [AuthGuard] },
    { path: "agasfinagg-detail", component: AGASFinAggDetailComponent, canActivate: [AuthGuard] },
    { path: "agashtml-view", component: AGASHTMLViewComponent, canActivate: [AuthGuard] },
    { path: "agasfinagg-infodetail", component: AGASFinAggInfoDetailComponent, canActivate: [AuthGuard] },
    { path: "agasgpfsnote-htmlview", component: AGASGPFSNoteHTMLViewComponent, canActivate: [AuthGuard] },
    { path: "agasalert-view", component: AGASAlertSetupComponent, canActivate: [AuthGuard] },
    { path: "agasalerthtml-view", component: AGASAlertHTMLViewComponent, canActivate: [AuthGuard] },
    { path: "", component: AGASFinAggSearchComponent, canActivate: [AuthGuard] },


];
export const agasRouting: ModuleWithProviders = RouterModule.forChild(agasRoutes);