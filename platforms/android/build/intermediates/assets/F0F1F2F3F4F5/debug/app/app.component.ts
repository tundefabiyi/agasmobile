
import firebase = require("nativescript-plugin-firebase");
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Component, Injector, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core';
//import * as PushNotifications from "nativescript-push-notifications";
import { BackendService, cloudmessagesenderid } from "./services/backend.service";
import { ChatService } from "./chatlist/chat.service";
import * as LocalNotifications from "nativescript-local-notifications";

@Component({
  selector: "gf-main",
  templateUrl: "appstart.html"
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router, private chatService: ChatService, private ngZone: NgZone
  ) {



  }
  ngOnInit() {

    var emailcleaned = this.chatService.cleanemail(BackendService.email);
    if (emailcleaned) {
      firebase.subscribeToTopic(emailcleaned);
    }

    // BackendService.messagingtoken = "";
    firebase.addOnMessageReceivedCallback(message => {
      console.log(JSON.stringify(message));
      if (!message.name) return;
      if (message.foreground == false) {
        let navigationExtras: NavigationExtras = {
          queryParams: {
            "name": message.data.name,
            "requiredparam": message.data.requiredparam,
            "logtime": message.data.logtime,
            "requestid": message.data.requestid
          }
        };
        this.router.navigate(["agasalerthtml-view"], navigationExtras);
      }
      else {

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
            this.ngZone.run(() => {
              let navigationExtras: NavigationExtras = {
                queryParams: {
                  "name": message.name,
                  "requiredparam": message.requiredparam,
                  "logtime": message.logtime,
                  "requestid": message.requestid
                }
              };
              this.router.navigate(["agasalerthtml-view"], navigationExtras);
            })

          }
        ).then(
          function () {
            console.log("Listener added");
          }
          )

      }

    });


  }
}

