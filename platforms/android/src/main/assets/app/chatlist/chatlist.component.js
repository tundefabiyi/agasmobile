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
var core_1 = require("@angular/core");
var services_1 = require("../services");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var router_1 = require("@angular/router");
var services_2 = require("../services");
var ChatListComponent = (function () {
    function ChatListComponent(routerExtensions, firebaseService, router, ngZone, homePageService) {
        this.routerExtensions = routerExtensions;
        this.firebaseService = firebaseService;
        this.router = router;
        this.ngZone = ngZone;
        this.homePageService = homePageService;
    }
    ChatListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.homePageService.setShowGoBackButton(false);
        this.homePageService.setTitle("Chat List");
        this.homePageService.onGoBackObservable.subscribe(function () {
            _this.ngZone.run(function () {
            });
        });
        this.usernamelist$ = this.firebaseService.getUserList();
    };
    ChatListComponent.prototype.openchat = function (email) {
        this.router.navigate(["/chat", email]);
    };
    ChatListComponent.prototype.gotomygiftlist = function () {
        this.router.navigate(["/"]);
    };
    return ChatListComponent;
}());
ChatListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "chat-list",
        templateUrl: "chatlist.html"
    }),
    __metadata("design:paramtypes", [router_extensions_1.RouterExtensions,
        services_1.FirebaseService,
        router_1.Router, core_1.NgZone, services_2.HomePageService])
], ChatListComponent);
exports.ChatListComponent = ChatListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdGxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hhdGxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTBEO0FBRzFELHdDQUE4QztBQUc5QyxtRkFBaUY7QUFDakYsMENBQXlDO0FBQ3pDLHdDQUE4RDtBQU85RCxJQUFhLGlCQUFpQjtJQVExQiwyQkFBb0IsZ0JBQWtDLEVBQzFDLGVBQWdDLEVBQ2hDLE1BQWMsRUFBVSxNQUFjLEVBQVUsZUFBZ0M7UUFGeEUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUMxQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7SUFDeEYsQ0FBQztJQUVMLG9DQUFRLEdBQVI7UUFBQSxpQkFVQztRQVRHLElBQUksQ0FBQyxlQUFlLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUM7WUFDOUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFFaEIsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxhQUFhLEdBQVEsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUVqRSxDQUFDO0lBSUQsb0NBQVEsR0FBUixVQUFTLEtBQWE7UUFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBQ0QsMENBQWMsR0FBZDtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUwsd0JBQUM7QUFBRCxDQUFDLEFBbENELElBa0NDO0FBbENZLGlCQUFpQjtJQUw3QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFdBQVcsRUFBRSxlQUFlO0tBQy9CLENBQUM7cUNBU3dDLG9DQUFnQjtRQUN6QiwwQkFBZTtRQUN4QixlQUFNLEVBQWtCLGFBQU0sRUFBMkIsMEJBQWU7R0FWbkYsaUJBQWlCLENBa0M3QjtBQWxDWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE5nWm9uZSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgRmlyZWJhc2VTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzXCI7XG5cbmltcG9ydCB7IFVzZXJOYW1lIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlci9yb3V0ZXItZXh0ZW5zaW9ucyc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UsIEhvbWVQYWdlU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiBcImNoYXQtbGlzdFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcImNoYXRsaXN0Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBDaGF0TGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblxuICAgIHB1YmxpYyB1c2VybmFtZTogVXNlck5hbWU7XG5cbiAgICBwdWJsaWMgdXNlcm5hbWVsaXN0JDogT2JzZXJ2YWJsZTxhbnk+O1xuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgICAgIHByaXZhdGUgZmlyZWJhc2VTZXJ2aWNlOiBGaXJlYmFzZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsIHByaXZhdGUgaG9tZVBhZ2VTZXJ2aWNlOiBIb21lUGFnZVNlcnZpY2VcbiAgICApIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuaG9tZVBhZ2VTZXJ2aWNlLnNldFNob3dHb0JhY2tCdXR0b24oZmFsc2UpO1xuICAgICAgICB0aGlzLmhvbWVQYWdlU2VydmljZS5zZXRUaXRsZShcIkNoYXQgTGlzdFwiKTtcbiAgICAgICAgdGhpcy5ob21lUGFnZVNlcnZpY2Uub25Hb0JhY2tPYnNlcnZhYmxlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIHRoaXMub3BlbmNoYXRsaXN0KCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy51c2VybmFtZWxpc3QkID0gPGFueT50aGlzLmZpcmViYXNlU2VydmljZS5nZXRVc2VyTGlzdCgpO1xuXG4gICAgfVxuXG5cblxuICAgIG9wZW5jaGF0KGVtYWlsOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2NoYXRcIiwgZW1haWxdKTtcbiAgICB9XG4gICAgZ290b215Z2lmdGxpc3QoKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9cIl0pO1xuICAgIH1cblxufVxuXG4iXX0=