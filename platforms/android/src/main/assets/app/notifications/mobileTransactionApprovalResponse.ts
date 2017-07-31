
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import * as LocalNotifications from "nativescript-local-notifications";
import * as router from "@angular/router";
// namespace Notifications {


// }
export class mobileTransactionApprovalResponse {
  message: any;
  constructor() {
    //console.log(JSON.stringify(message));
  }
  takeMessage(message: any) {
    this.message = message;
  }
  remoteNotifcationNavigationExtras(): NavigationExtras {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "primarykey": this.message.data.primarykey,
        "groupkey": this.message.data.groupkey
      }
    };
    return navigationExtras;
  }
  localNotifcationNavigationExtras(): NavigationExtras {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "primarykey": this.message.primarykey,
        "groupkey": this.message.groupkey
      }
    };
    return navigationExtras;
  }
  view(): string {
    return "mobile-trans-approval-detail"
  }
}