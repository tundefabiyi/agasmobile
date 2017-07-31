
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import * as LocalNotifications from "nativescript-local-notifications";
import * as router from "@angular/router";

export class gpfsAlertNotification {
   message: any;
  constructor() {
   // console.log(JSON.stringify(message));
  }
 takeMessage(message: any) {
    this.message = message;
  }
  remoteNotifcationNavigationExtras(): NavigationExtras {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "name": this.message.data.name,
        "requiredparam": this.message.data.requiredparam,
        "logtime": this.message.data.logtime,
        "requestid": this.message.data.requestid
      }
    };

    return navigationExtras;
  }
  localNotifcationNavigationExtras(): NavigationExtras {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "name": this.message.name,
        "requiredparam": this.message.requiredparam,
        "logtime": this.message.logtime,
        "requestid": this.message.requestid
      }
    };
    return navigationExtras;
  }
  view(): string {
    return "agasalerthtml-view"
  }
}