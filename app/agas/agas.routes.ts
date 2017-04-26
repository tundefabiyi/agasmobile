import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AGASFinAggSearchComponent } from "./agasfinaggsearch.component";
import { AGASFinAggDetailComponent } from "./agasfinaggdetail.component";
import { AGASHTMLViewComponent } from "./agashtmlview.component";
import { AGASFinAggInfoDetailComponent } from "./agasfinagginfodetail.component";
import { AGASGPFSNoteHTMLViewComponent } from "./agasGPFSNoteHtmlView.component";

const listDetailRoutes: Routes = [
    { path: "finagg-search", component: AGASFinAggSearchComponent },
    { path: "agasfinagg-detail", component: AGASFinAggDetailComponent },
    { path: "agashtml-view", component: AGASHTMLViewComponent },
    { path: "agasfinagg-infodetail", component: AGASFinAggInfoDetailComponent },
    { path: "agasgpfsnote-htmlview", component: AGASGPFSNoteHTMLViewComponent }


];
export const agasRouting: ModuleWithProviders = RouterModule.forChild(listDetailRoutes);