// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app.module";
import { BackendService } from "./services/backend.service";
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Component, Injector, ReflectiveInjector } from "@angular/core";
import firebase = require("nativescript-plugin-firebase");
//var pushPlugin = require('nativescript-push-notifications');


firebase.init({
  //persist should be set to false as otherwise numbers aren't returned during livesync
  persist: true,
  storageBucket: 'gs://giftler-24670.appspot.com',
  onAuthStateChanged: (data: any) => {
    console.log(JSON.stringify(data))
    if (data.loggedIn) {
      BackendService.token = data.user.uid;
    }
    else {
      BackendService.token = "";
    }
  },
   onPushTokenReceivedCallback: function (token) {
    BackendService.messagingtoken = token;
    console.log("Firebase push token: " + token);
  }
}).then(
  function (instance) {
    console.log("firebase.init done");
  },
  function (error) {
    console.log("firebase.init error: " + error);
  }
  );

platformNativeScriptDynamic().bootstrapModule(AppModule);
