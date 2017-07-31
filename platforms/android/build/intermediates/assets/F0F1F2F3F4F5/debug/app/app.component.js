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
var AppComponent = (function () {
    function AppComponent(router, chatService, ngZone) {
        this.router = router;
        this.chatService = chatService;
        this.ngZone = ngZone;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var emailcleaned = this.chatService.cleanemail(backend_service_1.BackendService.email);
        if (emailcleaned) {
            firebase.subscribeToTopic(emailcleaned);
        }
        firebase.addOnMessageReceivedCallback(function (message) {
            console.log(JSON.stringify(message));
            if (!message.name)
                return;
            if (message.foreground == false) {
                var navigationExtras = {
                    queryParams: {
                        "name": message.data.name,
                        "requiredparam": message.data.requiredparam,
                        "logtime": message.data.logtime,
                        "requestid": message.data.requestid
                    }
                };
                _this.router.navigate(["agasalerthtml-view"], navigationExtras);
            }
            else {
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
                    _this.ngZone.run(function () {
                        var navigationExtras = {
                            queryParams: {
                                "name": message.name,
                                "requiredparam": message.requiredparam,
                                "logtime": message.logtime,
                                "requestid": message.requestid
                            }
                        };
                        _this.router.navigate(["agasalerthtml-view"], navigationExtras);
                    });
                }).then(function () {
                    console.log("Listener added");
                });
            }
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "gf-main",
        templateUrl: "appstart.html"
    }),
    __metadata("design:paramtypes", [router_1.Router, chat_service_1.ChatService, core_1.NgZone])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSx1REFBMEQ7QUFDMUQsMENBQTJFO0FBQzNFLHNDQUEyRjtBQUUzRiw4REFBa0Y7QUFDbEYsd0RBQXNEO0FBQ3RELHFFQUF1RTtBQU12RSxJQUFhLFlBQVk7SUFDdkIsc0JBQ1UsTUFBYyxFQUFVLFdBQXdCLEVBQVUsTUFBYztRQUF4RSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBS2xGLENBQUM7SUFDRCwrQkFBUSxHQUFSO1FBQUEsaUJBK0RDO1FBN0RDLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLGdDQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckUsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNqQixRQUFRLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDMUMsQ0FBQztRQUdELFFBQVEsQ0FBQyw0QkFBNEIsQ0FBQyxVQUFBLE9BQU87WUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDckMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO2dCQUFDLE1BQU0sQ0FBQztZQUMxQixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ2hDLElBQUksZ0JBQWdCLEdBQXFCO29CQUN2QyxXQUFXLEVBQUU7d0JBQ1gsTUFBTSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSTt3QkFDekIsZUFBZSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYTt3QkFDM0MsU0FBUyxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTzt3QkFDL0IsV0FBVyxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUztxQkFDcEM7aUJBQ0YsQ0FBQztnQkFDRixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztZQUNqRSxDQUFDO1lBQ0QsSUFBSSxDQUFDLENBQUM7Z0JBRUosa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7d0JBQzNCLEVBQUUsRUFBRSxDQUFDO3dCQUNMLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSzt3QkFDcEIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJO3dCQUNsQixFQUFFLEVBQUUsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztxQkFDaEQsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUNOO29CQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztnQkFDeEMsQ0FBQyxFQUNELFVBQVUsS0FBSztvQkFDYixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQyxDQUFDO2dCQUM1QyxDQUFDLENBQ0EsQ0FBQztnQkFDSixrQkFBa0IsQ0FBQyw0QkFBNEIsQ0FDN0MsVUFBQSxZQUFZO29CQUNWLEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO3dCQUNkLElBQUksZ0JBQWdCLEdBQXFCOzRCQUN2QyxXQUFXLEVBQUU7Z0NBQ1gsTUFBTSxFQUFFLE9BQU8sQ0FBQyxJQUFJO2dDQUNwQixlQUFlLEVBQUUsT0FBTyxDQUFDLGFBQWE7Z0NBQ3RDLFNBQVMsRUFBRSxPQUFPLENBQUMsT0FBTztnQ0FDMUIsV0FBVyxFQUFFLE9BQU8sQ0FBQyxTQUFTOzZCQUMvQjt5QkFDRixDQUFDO3dCQUNGLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsb0JBQW9CLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO29CQUNqRSxDQUFDLENBQUMsQ0FBQTtnQkFFSixDQUFDLENBQ0YsQ0FBQyxJQUFJLENBQ0o7b0JBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUNoQyxDQUFDLENBQ0EsQ0FBQTtZQUVMLENBQUM7UUFFSCxDQUFDLENBQUMsQ0FBQztJQUdMLENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUF4RUQsSUF3RUM7QUF4RVksWUFBWTtJQUp4QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFNBQVM7UUFDbkIsV0FBVyxFQUFFLGVBQWU7S0FDN0IsQ0FBQztxQ0FHa0IsZUFBTSxFQUF1QiwwQkFBVyxFQUFrQixhQUFNO0dBRnZFLFlBQVksQ0F3RXhCO0FBeEVZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUsIE5hdmlnYXRpb25FeHRyYXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3RvciwgT25Jbml0LCBOZ1pvbmUsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy9pbXBvcnQgKiBhcyBQdXNoTm90aWZpY2F0aW9ucyBmcm9tIFwibmF0aXZlc2NyaXB0LXB1c2gtbm90aWZpY2F0aW9uc1wiO1xuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UsIGNsb3VkbWVzc2FnZXNlbmRlcmlkIH0gZnJvbSBcIi4vc2VydmljZXMvYmFja2VuZC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBDaGF0U2VydmljZSB9IGZyb20gXCIuL2NoYXRsaXN0L2NoYXQuc2VydmljZVwiO1xuaW1wb3J0ICogYXMgTG9jYWxOb3RpZmljYXRpb25zIGZyb20gXCJuYXRpdmVzY3JpcHQtbG9jYWwtbm90aWZpY2F0aW9uc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiZ2YtbWFpblwiLFxuICB0ZW1wbGF0ZVVybDogXCJhcHBzdGFydC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBjaGF0U2VydmljZTogQ2hhdFNlcnZpY2UsIHByaXZhdGUgbmdab25lOiBOZ1pvbmVcbiAgKSB7XG5cblxuXG4gIH1cbiAgbmdPbkluaXQoKSB7XG5cbiAgICB2YXIgZW1haWxjbGVhbmVkID0gdGhpcy5jaGF0U2VydmljZS5jbGVhbmVtYWlsKEJhY2tlbmRTZXJ2aWNlLmVtYWlsKTtcbiAgICBpZiAoZW1haWxjbGVhbmVkKSB7XG4gICAgICBmaXJlYmFzZS5zdWJzY3JpYmVUb1RvcGljKGVtYWlsY2xlYW5lZCk7XG4gICAgfVxuXG4gICAgLy8gQmFja2VuZFNlcnZpY2UubWVzc2FnaW5ndG9rZW4gPSBcIlwiO1xuICAgIGZpcmViYXNlLmFkZE9uTWVzc2FnZVJlY2VpdmVkQ2FsbGJhY2sobWVzc2FnZSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShtZXNzYWdlKSk7XG4gICAgICBpZiAoIW1lc3NhZ2UubmFtZSkgcmV0dXJuO1xuICAgICAgaWYgKG1lc3NhZ2UuZm9yZWdyb3VuZCA9PSBmYWxzZSkge1xuICAgICAgICBsZXQgbmF2aWdhdGlvbkV4dHJhczogTmF2aWdhdGlvbkV4dHJhcyA9IHtcbiAgICAgICAgICBxdWVyeVBhcmFtczoge1xuICAgICAgICAgICAgXCJuYW1lXCI6IG1lc3NhZ2UuZGF0YS5uYW1lLFxuICAgICAgICAgICAgXCJyZXF1aXJlZHBhcmFtXCI6IG1lc3NhZ2UuZGF0YS5yZXF1aXJlZHBhcmFtLFxuICAgICAgICAgICAgXCJsb2d0aW1lXCI6IG1lc3NhZ2UuZGF0YS5sb2d0aW1lLFxuICAgICAgICAgICAgXCJyZXF1ZXN0aWRcIjogbWVzc2FnZS5kYXRhLnJlcXVlc3RpZFxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiYWdhc2FsZXJ0aHRtbC12aWV3XCJdLCBuYXZpZ2F0aW9uRXh0cmFzKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuXG4gICAgICAgIExvY2FsTm90aWZpY2F0aW9ucy5zY2hlZHVsZShbe1xuICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLnRpdGxlLFxuICAgICAgICAgIGJvZHk6IG1lc3NhZ2UuYm9keSxcbiAgICAgICAgICBhdDogbmV3IERhdGUobmV3IERhdGUoKS5nZXRUaW1lKCkgKyAoMSAqIDEwMDApKSAvLyAxMCBzZWNvbmRzIGZyb20gbm93XG4gICAgICAgIH1dKS50aGVuKFxuICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm90aWZpY2F0aW9uIHNjaGVkdWxlZFwiKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzY2hlZHVsaW5nIGVycm9yOiBcIiArIGVycm9yKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgICAgTG9jYWxOb3RpZmljYXRpb25zLmFkZE9uTWVzc2FnZVJlY2VpdmVkQ2FsbGJhY2soXG4gICAgICAgICAgbm90aWZpY2F0aW9uID0+IHtcbiAgICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgIGxldCBuYXZpZ2F0aW9uRXh0cmFzOiBOYXZpZ2F0aW9uRXh0cmFzID0ge1xuICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICBcIm5hbWVcIjogbWVzc2FnZS5uYW1lLFxuICAgICAgICAgICAgICAgICAgXCJyZXF1aXJlZHBhcmFtXCI6IG1lc3NhZ2UucmVxdWlyZWRwYXJhbSxcbiAgICAgICAgICAgICAgICAgIFwibG9ndGltZVwiOiBtZXNzYWdlLmxvZ3RpbWUsXG4gICAgICAgICAgICAgICAgICBcInJlcXVlc3RpZFwiOiBtZXNzYWdlLnJlcXVlc3RpZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiYWdhc2FsZXJ0aHRtbC12aWV3XCJdLCBuYXZpZ2F0aW9uRXh0cmFzKTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICB9XG4gICAgICAgICkudGhlbihcbiAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxpc3RlbmVyIGFkZGVkXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICApXG5cbiAgICAgIH1cblxuICAgIH0pO1xuXG5cbiAgfVxufVxuXG4iXX0=