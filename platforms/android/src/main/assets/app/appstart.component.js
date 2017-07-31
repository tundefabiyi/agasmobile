"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var firebase = require("nativescript-plugin-firebase");
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var backend_service_1 = require("./services/backend.service");
var chat_service_1 = require("./chatlist/chat.service");
var LocalNotifications = require("nativescript-local-notifications");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var services_1 = require("./services");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var notificationNS = require("./notifications/notificationNS");
var AppStartComponent = (function () {
    function AppStartComponent(router, chatService, ngZone, _changeDetectionRef, firebaseService, routerExtensions, homePageService) {
        this.router = router;
        this.chatService = chatService;
        this.ngZone = ngZone;
        this._changeDetectionRef = _changeDetectionRef;
        this.firebaseService = firebaseService;
        this.routerExtensions = routerExtensions;
        this.homePageService = homePageService;
    }
    AppStartComponent.prototype.ngAfterViewInit = function () {
        console.log("After View Init");
        this.drawer = this.drawerComponent.sideDrawer;
    };
    AppStartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pagetitle = "Home";
        this.showgobackbutton = false;
        this.homePageService.onShowGoBackButtonObservable.subscribe(function (res) {
            _this.ngZone.run(function () {
                _this.showgobackbutton = res;
            });
        });
        this.homePageService.onsetTittleObservable.subscribe(function (res) {
            _this.ngZone.run(function () {
                if (res)
                    _this.pagetitle = res;
            });
        });
        console.log(" View Init");
        if (backend_service_1.BackendService.isLoggedIn()) {
            this.loggedin = true;
        }
        else {
            this.loggedin = false;
        }
        this.firebaseService.isloggedin.subscribe(function (status) {
            _this.ngZone.run(function () {
                _this.loggedin = status;
            });
        });
        this.drawer = this.drawerComponent.sideDrawer;
        var emailcleaned = this.chatService.cleanemail(backend_service_1.BackendService.email);
        if (emailcleaned) {
            firebase.subscribeToTopic(emailcleaned);
        }
        firebase.addOnMessageReceivedCallback(function (message) {
            if (message.foreground == false) {
                var remotenotification = new notificationNS[message.data.instanceObj];
                remotenotification.takeMessage(message);
                _this.router.navigate([remotenotification.view()], remotenotification.remoteNotifcationNavigationExtras());
            }
            else {
                console.log(message);
                var localnotification = new notificationNS[message.instanceObj];
                ;
                localnotification.takeMessage(message);
                LocalNotifications.schedule([{
                        id: 1,
                        title: message.title,
                        body: message.body,
                        at: new Date(new Date().getTime() + (1 * 1000))
                    }]).then(function () {
                    console.log("Notification scheduled");
                }, function (error) {
                    console.log("scheduling error: " + error);
                });
                LocalNotifications.addOnMessageReceivedCallback(function (notification) {
                    _this.router.navigate([localnotification.view()], localnotification.localNotifcationNavigationExtras());
                }).then(function () {
                    console.log("Listener added");
                });
            }
        });
    };
    AppStartComponent.prototype.openchatlist = function () {
        this.router.navigate(["/chat-list"]);
        this.drawer.closeDrawer();
    };
    AppStartComponent.prototype.openfinaggsearch = function () {
        this.router.navigate(["/finagg-search"]);
        this.drawer.closeDrawer();
    };
    AppStartComponent.prototype.openagasalertview = function () {
        this.router.navigate(["/agasalert-view"]);
        this.drawer.closeDrawer();
    };
    AppStartComponent.prototype.openpendingapprovalsview = function () {
        this.router.navigate(["/pendingtransapp"]);
        this.drawer.closeDrawer();
    };
    AppStartComponent.prototype.openapprovalLogview = function () {
        this.router.navigate(["/approvalLog"]);
        this.drawer.closeDrawer();
    };
    AppStartComponent.prototype.openDrawer = function () {
        this.drawer.showDrawer();
    };
    AppStartComponent.prototype.logout = function () {
        this.firebaseService.logout();
        this.router.navigate(["/login"]);
        this.drawer.closeDrawer();
    };
    AppStartComponent.prototype.goback = function () {
        this.homePageService.goback();
    };
    AppStartComponent.prototype.toggledrawer = function () {
        this.drawer.toggleDrawerState();
    };
    return AppStartComponent;
}());
__decorate([
    core_1.ViewChild(angular_1.RadSideDrawerComponent),
    __metadata("design:type", angular_1.RadSideDrawerComponent)
], AppStartComponent.prototype, "drawerComponent", void 0);
AppStartComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "gf-main",
        templateUrl: "appstart.html"
    }),
    __metadata("design:paramtypes", [router_1.Router,
        chat_service_1.ChatService, core_1.NgZone,
        core_1.ChangeDetectorRef,
        services_1.FirebaseService,
        router_extensions_1.RouterExtensions,
        services_1.HomePageService])
], AppStartComponent);
exports.AppStartComponent = AppStartComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwc3RhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwc3RhcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0EsdURBQTBEO0FBQzFELDBDQUEyRTtBQUMzRSxzQ0FBcUk7QUFDckksOERBQWtGO0FBQ2xGLHdEQUFzRDtBQUN0RCxxRUFBdUU7QUFDdkUsc0VBQW9HO0FBRXBHLHVDQUE4RDtBQUM5RCxtRkFBaUY7QUFHakYsK0RBQWdFO0FBY2hFLElBQWEsaUJBQWlCO0lBUzVCLDJCQUNVLE1BQWMsRUFBVSxXQUNuQixFQUFVLE1BQWMsRUFDN0IsbUJBQXNDLEVBQ3RDLGVBQWdDLEVBQ2hDLGdCQUFrQyxFQUNsQyxlQUFnQztRQUxoQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQzlCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUM3Qix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW1CO1FBQ3RDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUcxQyxDQUFDO0lBQ0QsMkNBQWUsR0FBZjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtRQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDO0lBR2hELENBQUM7SUFDRCxvQ0FBUSxHQUFSO1FBQUEsaUJBOEVDO1FBNUVDLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDOUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyw0QkFBNEIsQ0FBQyxTQUFTLENBQUMsVUFBQSxHQUFHO1lBQzdELEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO2dCQUNk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QyxXQUFXLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBQ0Qsc0NBQVUsR0FBVjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUNELGtDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFDRCxrQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBQ0Qsd0NBQVksR0FBWjtRQUVFLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUgsd0JBQUM7QUFBRCxDQUFDLEFBbkpELElBbUpDO0FBOUlvQztJQUFsQyxnQkFBUyxDQUFDLGdDQUFzQixDQUFDOzhCQUF5QixnQ0FBc0I7MERBQUM7QUFMdkUsaUJBQWlCO0lBTDdCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsV0FBVyxFQUFFLGVBQWU7S0FDN0IsQ0FBQztxQ0FXa0IsZUFBTTtRQUNwQiwwQkFBVyxFQUFrQixhQUFNO1FBQ1Isd0JBQWlCO1FBQ3JCLDBCQUFlO1FBQ2Qsb0NBQWdCO1FBQ2pCLDBCQUFlO0dBZi9CLGlCQUFpQixDQW1KN0I7QUFuSlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlLCBOYXZpZ2F0aW9uRXh0cmFzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3RvciwgSW5qZWN0LCBPbkluaXQsIE5nWm9uZSwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSwgY2xvdWRtZXNzYWdlc2VuZGVyaWQgfSBmcm9tIFwiLi9zZXJ2aWNlcy9iYWNrZW5kLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQ2hhdFNlcnZpY2UgfSBmcm9tIFwiLi9jaGF0bGlzdC9jaGF0LnNlcnZpY2VcIjtcclxuaW1wb3J0ICogYXMgTG9jYWxOb3RpZmljYXRpb25zIGZyb20gXCJuYXRpdmVzY3JpcHQtbG9jYWwtbm90aWZpY2F0aW9uc1wiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50LCBTaWRlRHJhd2VyVHlwZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdGVsZXJpay11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gJ25hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL3NpZGVkcmF3ZXInO1xyXG5pbXBvcnQgeyBGaXJlYmFzZVNlcnZpY2UsIEhvbWVQYWdlU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXIvcm91dGVyLWV4dGVuc2lvbnMnO1xyXG5pbXBvcnQgeyBJbnN0YW5jZUxvYWRlciwgTm90aWZpY2F0aW9uUmVxdWVzdCB9IGZyb20gXCIuL25vdGlmaWNhdGlvbnMvaW5zdGFuY2Vsb2FkZXJcIjtcclxuaW1wb3J0IHsgV2luZG93U2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvV2luZG93UmVmJztcclxuaW1wb3J0ICogYXMgbm90aWZpY2F0aW9uTlMgZnJvbSBcIi4vbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25OU1wiXHJcbi8vIGltcG9ydCB7IGdwZnNBbGVydE5vdGlmY2F0aW9uIH0gZnJvbSAnLi9ub3RpZmljYXRpb25zL2dwZnNBbGVydE5vdGlmY2F0aW9uJztcclxuLy8gaW1wb3J0IHsgbW9iaWxlVHJhbnNhY3Rpb25BcHByb3ZhbFJlcXVlc3QgfSBmcm9tICcuL25vdGlmaWNhdGlvbnMvbW9iaWxlVHJhbnNhY3Rpb25BcHByb3ZhbFJlcXVlc3QnO1xyXG5cclxuLy9pbXBvcnQgKiBhcyBMb2FkZXIgZnJvbSBcIi4vbm90aWZpY2F0aW9uc1wiO1xyXG4vLyBpbXBvcnQgeyBWaWV3IH0gZnJvbSAndWkvY29yZS92aWV3JztcclxuLy8gaW1wb3J0ICogYXMgVXRpbHMgZnJvbSBcInV0aWxzL3V0aWxzXCI7XHJcbi8vIGltcG9ydCAqIGFzIEZyYW1lTW9kdWxlIGZyb20gXCJ1aS9mcmFtZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogXCJnZi1tYWluXCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiYXBwc3RhcnQuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBTdGFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgcHVibGljIGxvZ2dlZGluOiBib29sZWFuO1xyXG4gIHB1YmxpYyBzaG93Z29iYWNrYnV0dG9uOiBib29sZWFuO1xyXG4gIHBhZ2V0aXRsZTogc3RyaW5nO1xyXG4gIC8vQFZpZXdDaGlsZChcIlJhZFNpZGVEcmF3ZXJDb21wb25lbnRcIikgZHJhd2VyQ29tcG9uZW50OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoUmFkU2lkZURyYXdlckNvbXBvbmVudCkgcHVibGljIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcclxuICBwcml2YXRlIGRyYXdlcjogUmFkU2lkZURyYXdlcjtcclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBjaGF0U2VydmljZTpcclxuICAgICAgQ2hhdFNlcnZpY2UsIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXHJcbiAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3Rpb25SZWY6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBmaXJlYmFzZVNlcnZpY2U6IEZpcmViYXNlU2VydmljZSxcclxuICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgIHByaXZhdGUgaG9tZVBhZ2VTZXJ2aWNlOiBIb21lUGFnZVNlcnZpY2VcclxuICApIHtcclxuXHJcbiAgfVxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiQWZ0ZXIgVmlldyBJbml0XCIpXHJcbiAgICB0aGlzLmRyYXdlciA9IHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXI7XHJcbiAgICAvLyAgdGhpcy5kcmF3ZXIuc2hvd0RyYXdlcigpO1xyXG4gICAgLy8gdGhpcy5fY2hhbmdlRGV0ZWN0aW9uUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICAvLyB0aGlzLmRyYXdlciA9IHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXI7XHJcbiAgICB0aGlzLnBhZ2V0aXRsZSA9IFwiSG9tZVwiO1xyXG4gICAgdGhpcy5zaG93Z29iYWNrYnV0dG9uID0gZmFsc2U7XHJcbiAgICB0aGlzLmhvbWVQYWdlU2VydmljZS5vblNob3dHb0JhY2tCdXR0b25PYnNlcnZhYmxlLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2hvd2dvYmFja2J1dHRvbiA9IHJlcztcclxuICAgICAgfSk7XHJcbiAgICB9KVxyXG4gICAgdGhpcy5ob21lUGFnZVNlcnZpY2Uub25zZXRUaXR0bGVPYnNlcnZhYmxlLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgIGlmIChyZXMpIHRoaXMucGFnZXRpdGxlID0gcmVzO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coXCIgVmlldyBJbml0XCIpXHJcbiAgICBpZiAoQmFja2VuZFNlcnZpY2UuaXNMb2dnZWRJbigpKSB7XHJcbiAgICAgIHRoaXMubG9nZ2VkaW4gPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMubG9nZ2VkaW4gPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmlzbG9nZ2VkaW4uc3Vic2NyaWJlKHN0YXR1cyA9PiB7XHJcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5sb2dnZWRpbiA9IHN0YXR1cztcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgICB0aGlzLmRyYXdlciA9IHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXI7XHJcbiAgICB2YXIgZW1haWxjbGVhbmVkID0gdGhpcy5jaGF0U2VydmljZS5jbGVhbmVtYWlsKEJhY2tlbmRTZXJ2aWNlLmVtYWlsKTtcclxuICAgIGlmIChlbWFpbGNsZWFuZWQpIHtcclxuICAgICAgZmlyZWJhc2Uuc3Vic2NyaWJlVG9Ub3BpYyhlbWFpbGNsZWFuZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEJhY2tlbmRTZXJ2aWNlLm1lc3NhZ2luZ3Rva2VuID0gXCJcIjtcclxuICAgIGZpcmViYXNlLmFkZE9uTWVzc2FnZVJlY2VpdmVkQ2FsbGJhY2sobWVzc2FnZSA9PiB7XHJcbiAgICAgXHJcbiAgICAgIGlmIChtZXNzYWdlLmZvcmVncm91bmQgPT0gZmFsc2UpIHsgICAgICAgXHJcbiAgICAgICAgdmFyIHJlbW90ZW5vdGlmaWNhdGlvbiA9IG5ldyBub3RpZmljYXRpb25OU1ttZXNzYWdlLmRhdGEuaW5zdGFuY2VPYmpdO1xyXG4gICAgICAgIHJlbW90ZW5vdGlmaWNhdGlvbi50YWtlTWVzc2FnZShtZXNzYWdlKTtcclxuICAgICAgIFxyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtyZW1vdGVub3RpZmljYXRpb24udmlldygpXSwgcmVtb3Rlbm90aWZpY2F0aW9uLnJlbW90ZU5vdGlmY2F0aW9uTmF2aWdhdGlvbkV4dHJhcygpKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcclxuICAgICAgICB2YXIgbG9jYWxub3RpZmljYXRpb24gPSBuZXcgbm90aWZpY2F0aW9uTlNbbWVzc2FnZS5pbnN0YW5jZU9ial07O1xyXG4gICAgICAgIGxvY2Fsbm90aWZpY2F0aW9uLnRha2VNZXNzYWdlKG1lc3NhZ2UpO1xyXG4gICAgICAgIExvY2FsTm90aWZpY2F0aW9ucy5zY2hlZHVsZShbe1xyXG4gICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICB0aXRsZTogbWVzc2FnZS50aXRsZSxcclxuICAgICAgICAgIGJvZHk6IG1lc3NhZ2UuYm9keSxcclxuICAgICAgICAgIGF0OiBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKSArICgxICogMTAwMCkpIC8vIDEwIHNlY29uZHMgZnJvbSBub3dcclxuICAgICAgICB9XSkudGhlbihcclxuICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJOb3RpZmljYXRpb24gc2NoZWR1bGVkXCIpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInNjaGVkdWxpbmcgZXJyb3I6IFwiICsgZXJyb3IpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICBMb2NhbE5vdGlmaWNhdGlvbnMuYWRkT25NZXNzYWdlUmVjZWl2ZWRDYWxsYmFjayhcclxuICAgICAgICAgIG5vdGlmaWNhdGlvbiA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtsb2NhbG5vdGlmaWNhdGlvbi52aWV3KCldLCBsb2NhbG5vdGlmaWNhdGlvbi5sb2NhbE5vdGlmY2F0aW9uTmF2aWdhdGlvbkV4dHJhcygpKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyB9KVxyXG5cclxuICAgICAgICAgIH1cclxuICAgICAgICApLnRoZW4oXHJcbiAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTGlzdGVuZXIgYWRkZWRcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICApXHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG5cclxuICB9XHJcbiAgcHVibGljIG9wZW5jaGF0bGlzdCgpIHtcclxuXHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvY2hhdC1saXN0XCJdKTtcclxuICAgIHRoaXMuZHJhd2VyLmNsb3NlRHJhd2VyKCk7XHJcblxyXG4gIH1cclxuICBwdWJsaWMgb3BlbmZpbmFnZ3NlYXJjaCgpIHtcclxuXHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvZmluYWdnLXNlYXJjaFwiXSk7XHJcbiAgICB0aGlzLmRyYXdlci5jbG9zZURyYXdlcigpO1xyXG5cclxuICB9XHJcbiAgcHVibGljIG9wZW5hZ2FzYWxlcnR2aWV3KCkge1xyXG5cclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9hZ2FzYWxlcnQtdmlld1wiXSk7XHJcbiAgICB0aGlzLmRyYXdlci5jbG9zZURyYXdlcigpO1xyXG4gIH1cclxuICBwdWJsaWMgb3BlbnBlbmRpbmdhcHByb3ZhbHN2aWV3KCkge1xyXG5cclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9wZW5kaW5ndHJhbnNhcHBcIl0pO1xyXG4gICAgdGhpcy5kcmF3ZXIuY2xvc2VEcmF3ZXIoKTtcclxuICB9XHJcbiAgb3BlbmFwcHJvdmFsTG9ndmlldygpXHJcbiAge1xyXG4gICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9hcHByb3ZhbExvZ1wiXSk7XHJcbiAgICB0aGlzLmRyYXdlci5jbG9zZURyYXdlcigpO1xyXG4gIH1cclxuICBvcGVuRHJhd2VyKCkge1xyXG4gICAgdGhpcy5kcmF3ZXIuc2hvd0RyYXdlcigpO1xyXG4gIH1cclxuICBsb2dvdXQoKSB7XHJcbiAgICB0aGlzLmZpcmViYXNlU2VydmljZS5sb2dvdXQoKTtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9sb2dpblwiXSk7XHJcbiAgICB0aGlzLmRyYXdlci5jbG9zZURyYXdlcigpO1xyXG4gIH1cclxuICBnb2JhY2soKSB7XHJcbiAgICB0aGlzLmhvbWVQYWdlU2VydmljZS5nb2JhY2soKTtcclxuICB9XHJcbiAgdG9nZ2xlZHJhd2VyKCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJUYXBwZWRcIik7XHJcbiAgICB0aGlzLmRyYXdlci50b2dnbGVEcmF3ZXJTdGF0ZSgpO1xyXG4gIH1cclxuICAvL3RoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvbG9naW5cIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xyXG59XHJcbiJdfQ==