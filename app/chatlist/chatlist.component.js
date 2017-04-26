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
var ChatListComponent = (function () {
    function ChatListComponent(routerExtensions, firebaseService, router) {
        this.routerExtensions = routerExtensions;
        this.firebaseService = firebaseService;
        this.router = router;
    }
    ChatListComponent.prototype.ngOnInit = function () {
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
        router_1.Router])
], ChatListComponent);
exports.ChatListComponent = ChatListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdGxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hhdGxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQWtEO0FBR2xELHdDQUErQztBQUcvQyxtRkFBaUY7QUFDakYsMENBQXlDO0FBT3pDLElBQWEsaUJBQWlCO0lBUTFCLDJCQUFvQixnQkFBa0MsRUFDMUMsZUFBZ0MsRUFDaEMsTUFBYztRQUZOLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDMUMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLFdBQU0sR0FBTixNQUFNLENBQVE7SUFDdEIsQ0FBQztJQUVMLG9DQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsYUFBYSxHQUFRLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUM7SUFFakUsQ0FBQztJQUlELG9DQUFRLEdBQVIsVUFBUyxLQUFhO1FBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUNELDBDQUFjLEdBQWQ7UUFFSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVMLHdCQUFDO0FBQUQsQ0FBQyxBQTVCRCxJQTRCQztBQTVCWSxpQkFBaUI7SUFMN0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsV0FBVztRQUNyQixXQUFXLEVBQUUsZUFBZTtLQUMvQixDQUFDO3FDQVN3QyxvQ0FBZ0I7UUFDekIsMEJBQWU7UUFDeEIsZUFBTTtHQVZqQixpQkFBaUIsQ0E0QjdCO0FBNUJZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgIEZpcmViYXNlU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlc1wiO1xuXG5pbXBvcnQgeyBVc2VyTmFtZSB9IGZyb20gXCIuLi9tb2RlbHNcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXIvcm91dGVyLWV4dGVuc2lvbnMnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogXCJjaGF0LWxpc3RcIixcbiAgICB0ZW1wbGF0ZVVybDogXCJjaGF0bGlzdC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgQ2hhdExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICBcbiAgICBwdWJsaWMgdXNlcm5hbWU6IFVzZXJOYW1lO1xuXG4gICAgcHVibGljIHVzZXJuYW1lbGlzdCQ6IE9ic2VydmFibGU8YW55PjtcbiAgXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgICAgIHByaXZhdGUgZmlyZWJhc2VTZXJ2aWNlOiBGaXJlYmFzZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcbiAgICApIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMudXNlcm5hbWVsaXN0JCA9IDxhbnk+dGhpcy5maXJlYmFzZVNlcnZpY2UuZ2V0VXNlckxpc3QoKTtcbiAgICAgICBcbiAgICB9XG5cbiAgXG5cbiAgICBvcGVuY2hhdChlbWFpbDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9jaGF0XCIsIGVtYWlsXSk7XG4gICAgfVxuICAgIGdvdG9teWdpZnRsaXN0KClcbiAgICB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9cIl0pO1xyXG4gICAgfVxuICAgXG59XG5cbiJdfQ==