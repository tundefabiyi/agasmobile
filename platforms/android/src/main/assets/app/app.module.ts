import { NativeScriptModule } from "nativescript-angular/platform";
import { NgModule } from "@angular/core";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { authProviders, appRoutes } from "./app.routes";
import { AppComponent } from "./app.component";
import { AppStartComponent } from "./appstart.component";

import { BackendService, FirebaseService, UtilsService,HomePageService } from "./services";

 import { NativeScriptUISideDrawerModule } from "nativescript-telerik-ui/sidedrawer/angular";
import { LoginModule } from "./login/login.module";
import { ListModule } from "./list/list.module";
import { ListDetailModule } from "./list-detail/list-detail.module";
import { ChatListModule } from "./chatlist/chatlist.module";
import { AGASModule } from "./agas/agas.module";
import { TransAppModule } from "./transactionapproval/transapp.module";

@NgModule({
    providers: [
        BackendService,
        FirebaseService,
        UtilsService,
        authProviders,
        HomePageService
    ],
    imports: [
        NativeScriptModule,
        NativeScriptHttpModule,
        NativeScriptRouterModule,
        NativeScriptUISideDrawerModule,
        NativeScriptRouterModule.forRoot(appRoutes),
        LoginModule,
        ListModule,
        ListDetailModule,
        ChatListModule,AGASModule,TransAppModule
    ],
    declarations: [
      //  SIDEDRAWER_DIRECTIVES,
        AppComponent,AppStartComponent
    ],
    bootstrap: [AppStartComponent]
})
export class AppModule { }
