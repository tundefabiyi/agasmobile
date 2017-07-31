import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PendingTransAppComponent } from "./pendingtransApp.component";
import { TransAppDetailsComponent } from "./transAppDetails.component";
import { AuthGuard } from "../auth-guard.service";
const transAppRoutes: Routes = [
    { path: "pendingtransapp", component: PendingTransAppComponent, canActivate: [AuthGuard] },
     { path: "mobile-trans-approval-detail", component: TransAppDetailsComponent, canActivate: [AuthGuard] }

];
export const transAppRouting: ModuleWithProviders = RouterModule.forChild(transAppRoutes);