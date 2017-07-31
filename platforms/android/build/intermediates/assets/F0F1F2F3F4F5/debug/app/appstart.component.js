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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwc3RhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwc3RhcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0EsdURBQTBEO0FBQzFELDBDQUEyRTtBQUMzRSxzQ0FBcUk7QUFDckksOERBQWtGO0FBQ2xGLHdEQUFzRDtBQUN0RCxxRUFBdUU7QUFDdkUsc0VBQW9HO0FBRXBHLHVDQUE4RDtBQUM5RCxtRkFBaUY7QUFHakYsK0RBQWdFO0FBY2hFLElBQWEsaUJBQWlCO0lBUzVCLDJCQUNVLE1BQWMsRUFBVSxXQUNuQixFQUFVLE1BQWMsRUFDN0IsbUJBQXNDLEVBQ3RDLGVBQWdDLEVBQ2hDLGdCQUFrQyxFQUNsQyxlQUFnQztRQUxoQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQzlCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUM3Qix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW1CO1FBQ3RDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUcxQyxDQUFDO0lBQ0QsMkNBQWUsR0FBZjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtRQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDO0lBR2hELENBQUM7SUFDRCxvQ0FBUSxHQUFSO1FBQUEsaUJBOEVDO1FBNUVDLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDOUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyw0QkFBNEIsQ0FBQyxTQUFTLENBQUMsVUFBQSxHQUFHO1lBQzdELEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO2dCQUNk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LENBQUMsTUFBTSxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUNELGtDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFDRCx3Q0FBWSxHQUFaO1FBRUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFSCx3QkFBQztBQUFELENBQUMsQUE5SUQsSUE4SUM7QUF6SW9DO0lBQWxDLGdCQUFTLENBQUMsZ0NBQXNCLENBQUM7OEJBQXlCLGdDQUFzQjswREFBQztBQUx2RSxpQkFBaUI7SUFMN0IsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsU0FBUztRQUNuQixXQUFXLEVBQUUsZUFBZTtLQUM3QixDQUFDO3FDQVdrQixlQUFNO1FBQ3BCLDBCQUFXLEVBQWtCLGFBQU07UUFDUix3QkFBaUI7UUFDckIsMEJBQWU7UUFDZCxvQ0FBZ0I7UUFDakIsMEJBQWU7R0FmL0IsaUJBQWlCLENBOEk3QjtBQTlJWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUsIE5hdmlnYXRpb25FeHRyYXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIEluamVjdG9yLCBJbmplY3QsIE9uSW5pdCwgTmdab25lLCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJhY2tlbmRTZXJ2aWNlLCBjbG91ZG1lc3NhZ2VzZW5kZXJpZCB9IGZyb20gXCIuL3NlcnZpY2VzL2JhY2tlbmQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBDaGF0U2VydmljZSB9IGZyb20gXCIuL2NoYXRsaXN0L2NoYXQuc2VydmljZVwiO1xyXG5pbXBvcnQgKiBhcyBMb2NhbE5vdGlmaWNhdGlvbnMgZnJvbSBcIm5hdGl2ZXNjcmlwdC1sb2NhbC1ub3RpZmljYXRpb25zXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQsIFNpZGVEcmF3ZXJUeXBlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvc2lkZWRyYXdlcic7XHJcbmltcG9ydCB7IEZpcmViYXNlU2VydmljZSwgSG9tZVBhZ2VTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXNcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlci9yb3V0ZXItZXh0ZW5zaW9ucyc7XHJcbmltcG9ydCB7IEluc3RhbmNlTG9hZGVyLCBOb3RpZmljYXRpb25SZXF1ZXN0IH0gZnJvbSBcIi4vbm90aWZpY2F0aW9ucy9pbnN0YW5jZWxvYWRlclwiO1xyXG5pbXBvcnQgeyBXaW5kb3dTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9XaW5kb3dSZWYnO1xyXG5pbXBvcnQgKiBhcyBub3RpZmljYXRpb25OUyBmcm9tIFwiLi9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbk5TXCJcclxuLy8gaW1wb3J0IHsgZ3Bmc0FsZXJ0Tm90aWZjYXRpb24gfSBmcm9tICcuL25vdGlmaWNhdGlvbnMvZ3Bmc0FsZXJ0Tm90aWZjYXRpb24nO1xyXG4vLyBpbXBvcnQgeyBtb2JpbGVUcmFuc2FjdGlvbkFwcHJvdmFsUmVxdWVzdCB9IGZyb20gJy4vbm90aWZpY2F0aW9ucy9tb2JpbGVUcmFuc2FjdGlvbkFwcHJvdmFsUmVxdWVzdCc7XHJcblxyXG4vL2ltcG9ydCAqIGFzIExvYWRlciBmcm9tIFwiLi9ub3RpZmljYXRpb25zXCI7XHJcbi8vIGltcG9ydCB7IFZpZXcgfSBmcm9tICd1aS9jb3JlL3ZpZXcnO1xyXG4vLyBpbXBvcnQgKiBhcyBVdGlscyBmcm9tIFwidXRpbHMvdXRpbHNcIjtcclxuLy8gaW1wb3J0ICogYXMgRnJhbWVNb2R1bGUgZnJvbSBcInVpL2ZyYW1lXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiBcImdmLW1haW5cIixcclxuICB0ZW1wbGF0ZVVybDogXCJhcHBzdGFydC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcFN0YXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcclxuICBwdWJsaWMgbG9nZ2VkaW46IGJvb2xlYW47XHJcbiAgcHVibGljIHNob3dnb2JhY2tidXR0b246IGJvb2xlYW47XHJcbiAgcGFnZXRpdGxlOiBzdHJpbmc7XHJcbiAgLy9AVmlld0NoaWxkKFwiUmFkU2lkZURyYXdlckNvbXBvbmVudFwiKSBkcmF3ZXJDb21wb25lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZChSYWRTaWRlRHJhd2VyQ29tcG9uZW50KSBwdWJsaWMgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xyXG4gIHByaXZhdGUgZHJhd2VyOiBSYWRTaWRlRHJhd2VyO1xyXG5cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGNoYXRTZXJ2aWNlOlxyXG4gICAgICBDaGF0U2VydmljZSwgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcclxuICAgIHByaXZhdGUgX2NoYW5nZURldGVjdGlvblJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIGZpcmViYXNlU2VydmljZTogRmlyZWJhc2VTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgcHJpdmF0ZSBob21lUGFnZVNlcnZpY2U6IEhvbWVQYWdlU2VydmljZVxyXG4gICkge1xyXG5cclxuICB9XHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgY29uc29sZS5sb2coXCJBZnRlciBWaWV3IEluaXRcIilcclxuICAgIHRoaXMuZHJhd2VyID0gdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlcjtcclxuICAgIC8vICB0aGlzLmRyYXdlci5zaG93RHJhd2VyKCk7XHJcbiAgICAvLyB0aGlzLl9jaGFuZ2VEZXRlY3Rpb25SZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIC8vIHRoaXMuZHJhd2VyID0gdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlcjtcclxuICAgIHRoaXMucGFnZXRpdGxlID0gXCJIb21lXCI7XHJcbiAgICB0aGlzLnNob3dnb2JhY2tidXR0b24gPSBmYWxzZTtcclxuICAgIHRoaXMuaG9tZVBhZ2VTZXJ2aWNlLm9uU2hvd0dvQmFja0J1dHRvbk9ic2VydmFibGUuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zaG93Z29iYWNrYnV0dG9uID0gcmVzO1xyXG4gICAgICB9KTtcclxuICAgIH0pXHJcbiAgICB0aGlzLmhvbWVQYWdlU2VydmljZS5vbnNldFRpdHRsZU9ic2VydmFibGUuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlcykgdGhpcy5wYWdldGl0bGUgPSByZXM7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIiBWaWV3IEluaXRcIilcclxuICAgIGlmIChCYWNrZW5kU2VydmljZS5pc0xvZ2dlZEluKCkpIHtcclxuICAgICAgdGhpcy5sb2dnZWRpbiA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5sb2dnZWRpbiA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5maXJlYmFzZVNlcnZpY2UuaXNsb2dnZWRpbi5zdWJzY3JpYmUoc3RhdHVzID0+IHtcclxuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLmxvZ2dlZGluID0gc3RhdHVzO1xyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICAgIHRoaXMuZHJhd2VyID0gdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlcjtcclxuICAgIHZhciBlbWFpbGNsZWFuZWQgPSB0aGlzLmNoYXRTZXJ2aWNlLmNsZWFuZW1haWwoQmFja2VuZFNlcnZpY2UuZW1haWwpO1xyXG4gICAgaWYgKGVtYWlsY2xlYW5lZCkge1xyXG4gICAgICBmaXJlYmFzZS5zdWJzY3JpYmVUb1RvcGljKGVtYWlsY2xlYW5lZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQmFja2VuZFNlcnZpY2UubWVzc2FnaW5ndG9rZW4gPSBcIlwiO1xyXG4gICAgZmlyZWJhc2UuYWRkT25NZXNzYWdlUmVjZWl2ZWRDYWxsYmFjayhtZXNzYWdlID0+IHtcclxuICAgICBcclxuICAgICAgaWYgKG1lc3NhZ2UuZm9yZWdyb3VuZCA9PSBmYWxzZSkgeyAgICAgICBcclxuICAgICAgICB2YXIgcmVtb3Rlbm90aWZpY2F0aW9uID0gbmV3IG5vdGlmaWNhdGlvbk5TW21lc3NhZ2UuZGF0YS5pbnN0YW5jZU9ial07XHJcbiAgICAgICAgcmVtb3Rlbm90aWZpY2F0aW9uLnRha2VNZXNzYWdlKG1lc3NhZ2UpO1xyXG4gICAgICAgXHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3JlbW90ZW5vdGlmaWNhdGlvbi52aWV3KCldLCByZW1vdGVub3RpZmljYXRpb24ucmVtb3RlTm90aWZjYXRpb25OYXZpZ2F0aW9uRXh0cmFzKCkpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xyXG4gICAgICAgIHZhciBsb2NhbG5vdGlmaWNhdGlvbiA9IG5ldyBub3RpZmljYXRpb25OU1ttZXNzYWdlLmluc3RhbmNlT2JqXTs7XHJcbiAgICAgICAgbG9jYWxub3RpZmljYXRpb24udGFrZU1lc3NhZ2UobWVzc2FnZSk7XHJcbiAgICAgICAgTG9jYWxOb3RpZmljYXRpb25zLnNjaGVkdWxlKFt7XHJcbiAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLnRpdGxlLFxyXG4gICAgICAgICAgYm9keTogbWVzc2FnZS5ib2R5LFxyXG4gICAgICAgICAgYXQ6IG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgKDEgKiAxMDAwKSkgLy8gMTAgc2Vjb25kcyBmcm9tIG5vd1xyXG4gICAgICAgIH1dKS50aGVuKFxyXG4gICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vdGlmaWNhdGlvbiBzY2hlZHVsZWRcIik7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2NoZWR1bGluZyBlcnJvcjogXCIgKyBlcnJvcik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIExvY2FsTm90aWZpY2F0aW9ucy5hZGRPbk1lc3NhZ2VSZWNlaXZlZENhbGxiYWNrKFxyXG4gICAgICAgICAgbm90aWZpY2F0aW9uID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW2xvY2Fsbm90aWZpY2F0aW9uLnZpZXcoKV0sIGxvY2Fsbm90aWZpY2F0aW9uLmxvY2FsTm90aWZjYXRpb25OYXZpZ2F0aW9uRXh0cmFzKCkpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIH0pXHJcblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICkudGhlbihcclxuICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJMaXN0ZW5lciBhZGRlZFwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIClcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcblxyXG4gIH1cclxuICBwdWJsaWMgb3BlbmNoYXRsaXN0KCkge1xyXG5cclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9jaGF0LWxpc3RcIl0pO1xyXG4gICAgdGhpcy5kcmF3ZXIuY2xvc2VEcmF3ZXIoKTtcclxuXHJcbiAgfVxyXG4gIHB1YmxpYyBvcGVuZmluYWdnc2VhcmNoKCkge1xyXG5cclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9maW5hZ2ctc2VhcmNoXCJdKTtcclxuICAgIHRoaXMuZHJhd2VyLmNsb3NlRHJhd2VyKCk7XHJcblxyXG4gIH1cclxuICBwdWJsaWMgb3BlbmFnYXNhbGVydHZpZXcoKSB7XHJcblxyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2FnYXNhbGVydC12aWV3XCJdKTtcclxuICAgIHRoaXMuZHJhd2VyLmNsb3NlRHJhd2VyKCk7XHJcbiAgfVxyXG4gIHB1YmxpYyBvcGVucGVuZGluZ2FwcHJvdmFsc3ZpZXcoKSB7XHJcblxyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3BlbmRpbmd0cmFuc2FwcFwiXSk7XHJcbiAgICB0aGlzLmRyYXdlci5jbG9zZURyYXdlcigpO1xyXG4gIH1cclxuICBvcGVuRHJhd2VyKCkge1xyXG4gICAgdGhpcy5kcmF3ZXIuc2hvd0RyYXdlcigpO1xyXG4gIH1cclxuICBsb2dvdXQoKSB7XHJcbiAgICB0aGlzLmZpcmViYXNlU2VydmljZS5sb2dvdXQoKTtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9sb2dpblwiXSk7XHJcbiAgICB0aGlzLmRyYXdlci5jbG9zZURyYXdlcigpO1xyXG4gIH1cclxuICBnb2JhY2soKSB7XHJcbiAgICB0aGlzLmhvbWVQYWdlU2VydmljZS5nb2JhY2soKTtcclxuICB9XHJcbiAgdG9nZ2xlZHJhd2VyKCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJUYXBwZWRcIik7XHJcbiAgICB0aGlzLmRyYXdlci50b2dnbGVEcmF3ZXJTdGF0ZSgpO1xyXG4gIH1cclxuICAvL3RoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvbG9naW5cIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xyXG59XHJcbiJdfQ==