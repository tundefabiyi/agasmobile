
import firebase = require("nativescript-plugin-firebase");
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Component, Injector, Inject, OnInit, NgZone, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { BackendService, cloudmessagesenderid } from "./services/backend.service";
import { ChatService } from "./chatlist/chat.service";
import * as LocalNotifications from "nativescript-local-notifications";
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-telerik-ui/sidedrawer/angular";
import { RadSideDrawer } from 'nativescript-telerik-ui/sidedrawer';
import { FirebaseService, HomePageService } from "./services";
import { RouterExtensions } from 'nativescript-angular/router/router-extensions';
import { InstanceLoader, NotificationRequest } from "./notifications/instanceloader";
import { WindowService } from './services/WindowRef';
import * as notificationNS from "./notifications/notificationNS"
// import { gpfsAlertNotifcation } from './notifications/gpfsAlertNotifcation';
// import { mobileTransactionApprovalRequest } from './notifications/mobileTransactionApprovalRequest';

//import * as Loader from "./notifications";
// import { View } from 'ui/core/view';
// import * as Utils from "utils/utils";
// import * as FrameModule from "ui/frame";

@Component({
  moduleId: module.id,
  selector: "gf-main",
  templateUrl: "appstart.html"
})
export class AppStartComponent implements OnInit, AfterViewInit {
  public loggedin: boolean;
  public showgobackbutton: boolean;
  pagetitle: string;
  //@ViewChild("RadSideDrawerComponent") drawerComponent: ElementRef;
  @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
  private drawer: RadSideDrawer;


  constructor(
    private router: Router, private chatService:
      ChatService, private ngZone: NgZone,
    private _changeDetectionRef: ChangeDetectorRef,
    private firebaseService: FirebaseService,
    private routerExtensions: RouterExtensions,
    private homePageService: HomePageService
  ) {

  }
  ngAfterViewInit() {
    console.log("After View Init")
    this.drawer = this.drawerComponent.sideDrawer;
    //  this.drawer.showDrawer();
    // this._changeDetectionRef.detectChanges();
  }
  ngOnInit() {
    // this.drawer = this.drawerComponent.sideDrawer;
    this.pagetitle = "Home";
    this.showgobackbutton = false;
    this.homePageService.onShowGoBackButtonObservable.subscribe(res => {
      this.ngZone.run(() => {
        this.showgobackbutton = res;
      });
    })
    this.homePageService.onsetTittleObservable.subscribe(res => {
      this.ngZone.run(() => {
        if (res) this.pagetitle = res;
      });
    });
    console.log(" View Init")
    if (BackendService.isLoggedIn()) {
      this.loggedin = true;
    }
    else {
      this.loggedin = false;
    }
    this.firebaseService.isloggedin.subscribe(status => {
      this.ngZone.run(() => {
        this.loggedin = status;
      })
    })
    this.drawer = this.drawerComponent.sideDrawer;
    var emailcleaned = this.chatService.cleanemail(BackendService.email);
    if (emailcleaned) {
      firebase.subscribeToTopic(emailcleaned);
    }

    // BackendService.messagingtoken = "";
    firebase.addOnMessageReceivedCallback(message => {
     
      if (message.foreground == false) {       
        var remotenotification = new notificationNS[message.data.instanceObj];
        remotenotification.takeMessage(message);
       
        this.router.navigate([remotenotification.view()], remotenotification.remoteNotifcationNavigationExtras());
      }
      else {
        console.log(message);
        var localnotification = new notificationNS[message.instanceObj];;
        localnotification.takeMessage(message);
        LocalNotifications.schedule([{
          id: 1,
          title: message.title,
          body: message.body,
          at: new Date(new Date().getTime() + (1 * 1000)) // 10 seconds from now
        }]).then(
          function () {
            console.log("Notification scheduled");
          },
          function (error) {
            console.log("scheduling error: " + error);
          }
          );
        LocalNotifications.addOnMessageReceivedCallback(
          notification => {
            this.router.navigate([localnotification.view()], localnotification.localNotifcationNavigationExtras());
            // this.ngZone.run(() => {
             
              
            // })

          }
        ).then(
          function () {
            console.log("Listener added");
          }
          )

      }

    });


  }
  public openchatlist() {

    this.router.navigate(["/chat-list"]);
    this.drawer.closeDrawer();

  }
  public openfinaggsearch() {

    this.router.navigate(["/finagg-search"]);
    this.drawer.closeDrawer();

  }
  public openagasalertview() {

    this.router.navigate(["/agasalert-view"]);
    this.drawer.closeDrawer();
  }
  public openpendingapprovalsview() {

    this.router.navigate(["/pendingtransapp"]);
    this.drawer.closeDrawer();
  }
  openDrawer() {
    this.drawer.showDrawer();
  }
  logout() {
    this.firebaseService.logout();
    this.router.navigate(["/login"]);
    this.drawer.closeDrawer();
  }
  goback() {
    this.homePageService.goback();
  }
  toggledrawer() {
    // console.log("Tapped");
    this.drawer.toggleDrawerState();
  }
  //this.routerExtensions.navigate(["/login"], { clearHistory: true });
}
