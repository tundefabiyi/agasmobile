import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NgModule } from "@angular/core";
import { ChatService } from "./chat.service";
import { BackendService } from "../services";

import { chatlistRouting } from "./chatlist.routes";
import { ChatListComponent } from "./chatlist.component";
import { ChatComponent } from "./chat.component";

@NgModule({
    providers: [
        ChatService, BackendService
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        chatlistRouting
    ],
    declarations: [
        ChatListComponent,
        ChatComponent
    ]
})
export class ChatListModule { }
