import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ChatListComponent } from "./chatlist.component";
import { ChatComponent } from "./chat.component";

const listDetailRoutes: Routes = [
    { path: "chat-list", component: ChatListComponent },
    { path: "chat/:to", component: ChatComponent }

];
export const chatlistRouting: ModuleWithProviders = RouterModule.forChild(listDetailRoutes);