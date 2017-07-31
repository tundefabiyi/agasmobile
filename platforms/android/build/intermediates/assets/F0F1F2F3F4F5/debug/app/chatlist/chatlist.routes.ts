import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ChatListComponent } from "./chatlist.component";
import { ChatComponent } from "./chat.component";
import { AuthGuard } from "../auth-guard.service";
const chatlistRoutes: Routes = [
    { path: "chat-list", component: ChatListComponent, canActivate: [AuthGuard] },
    { path: "chat/:to", component: ChatComponent, canActivate: [AuthGuard] }

];
export const chatlistRouting: ModuleWithProviders = RouterModule.forChild(chatlistRoutes);