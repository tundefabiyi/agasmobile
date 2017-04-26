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
var router_1 = require("@angular/router");
var chat_service_1 = require("./chat.service");
var services_1 = require("../services");
var sound = require("nativescript-sound");
var ChatComponent = (function () {
    function ChatComponent(route, router, ngZone, chatService) {
        this.route = route;
        this.router = router;
        this.ngZone = ngZone;
        this.chatService = chatService;
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertplayer = sound.create("~/assets/alert.mp3");
        this.listview = this.lv.nativeElement;
        this.sub = this.route.params.subscribe(function (params) {
            _this.from = services_1.BackendService.email;
            _this.me = services_1.BackendService.email;
            _this.to = params['to'];
            _this.chatlist$ = _this.chatService.getchatListBetween(_this.from, _this.to);
            _this.chatService._chatlistobservable.subscribe(function (x) {
                _this.ngZone.run(function () {
                    setTimeout(function () {
                        _this.listview.scrollToIndex(x.length - 1);
                    }, 0);
                });
            });
            _this.chatService._chatlistobservable.subscribe(function (x) {
                var makesound = false;
                var unreadmessages = _this.chatService.filterUnread(services_1.BackendService.email, x);
                for (var _i = 0, unreadmessages_1 = unreadmessages; _i < unreadmessages_1.length; _i++) {
                    var entry = unreadmessages_1[_i];
                    console.log(entry);
                    _this.chatService.updatemessagestatus(entry);
                    makesound = true;
                }
                if (makesound)
                    _this.alertplayer.play();
            });
        });
    };
    ChatComponent.prototype.sendmsg = function () {
        var _this = this;
        this.chatService.savemessage(this.from, this.to, this.message).then(function () {
            _this.message = "";
        });
    };
    ChatComponent.prototype.openchatlist = function () {
        this.router.navigate(["/chat-list"]);
    };
    return ChatComponent;
}());
__decorate([
    core_1.ViewChild("listview"),
    __metadata("design:type", core_1.ElementRef)
], ChatComponent.prototype, "lv", void 0);
ChatComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "chatdisplay",
        templateUrl: "chat.html"
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        core_1.NgZone,
        chat_service_1.ChatService])
], ChatComponent);
exports.ChatComponent = ChatComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGF0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUFpRjtBQUVqRiwwQ0FBeUQ7QUFDekQsK0NBQTZDO0FBQzdDLHdDQUE2QztBQUU3QyxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQU0xQyxJQUFhLGFBQWE7SUFZdEIsdUJBQ1ksS0FBcUIsRUFDckIsTUFBYyxFQUNkLE1BQWMsRUFDZCxXQUF3QjtRQUh4QixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBSXBDLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQUEsaUJBbUNDO1FBakNHLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUM7UUFDdEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQyxNQUFXO1lBQy9DLEtBQUksQ0FBQyxJQUFJLEdBQUcseUJBQWMsQ0FBQyxLQUFLLENBQUM7WUFDakMsS0FBSSxDQUFDLEVBQUUsR0FBRyx5QkFBYyxDQUFDLEtBQUssQ0FBQztZQUMvQixLQUFJLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUV2QixLQUFJLENBQUMsU0FBUyxHQUFRLEtBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsS0FBSSxDQUFDLElBQUksRUFBRSxLQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFHOUUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDO2dCQUM1QyxLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztvQkFFWixVQUFVLENBQUM7d0JBQ1AsS0FBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFFOUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNWLENBQUMsQ0FBQyxDQUFDO1lBRVAsQ0FBQyxDQUFDLENBQUM7WUFDSCxLQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUM7Z0JBQzVDLElBQUksU0FBUyxHQUFZLEtBQUssQ0FBQztnQkFDL0IsSUFBSSxjQUFjLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMseUJBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzVFLEdBQUcsQ0FBQyxDQUFjLFVBQWMsRUFBZCxpQ0FBYyxFQUFkLDRCQUFjLEVBQWQsSUFBYztvQkFBM0IsSUFBSSxLQUFLLHVCQUFBO29CQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ25CLEtBQUksQ0FBQyxXQUFXLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQzVDLFNBQVMsR0FBRyxJQUFJLENBQUM7aUJBQ3BCO2dCQUNELEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQztvQkFBQyxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzNDLENBQUMsQ0FBQyxDQUFDO1FBR1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0QsK0JBQU8sR0FBUDtRQUFBLGlCQUtDO1FBSkcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDaEUsS0FBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFFdEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0Qsb0NBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBR0wsb0JBQUM7QUFBRCxDQUFDLEFBckVELElBcUVDO0FBNUQwQjtJQUF0QixnQkFBUyxDQUFDLFVBQVUsQ0FBQzs4QkFBSyxpQkFBVTt5Q0FBQztBQVQ3QixhQUFhO0lBTHpCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLGFBQWE7UUFDdkIsV0FBVyxFQUFFLFdBQVc7S0FDM0IsQ0FBQztxQ0FjcUIsdUJBQWM7UUFDYixlQUFNO1FBQ04sYUFBTTtRQUNELDBCQUFXO0dBaEIzQixhQUFhLENBcUV6QjtBQXJFWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBOZ1pvbmUsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IENoYXRTZXJ2aWNlIH0gZnJvbSBcIi4vY2hhdC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlc1wiO1xuaW1wb3J0IHsgTGlzdFZpZXcgfSBmcm9tIFwidWkvbGlzdC12aWV3XCI7XHJcbnZhciBzb3VuZCA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtc291bmRcIik7XG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiBcImNoYXRkaXNwbGF5XCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiY2hhdC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgQ2hhdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBmcm9tOiBzdHJpbmc7XG4gICAgdG86IHN0cmluZztcbiAgICBtZXNzYWdlOiBzdHJpbmc7XG4gICAgbWU6IHN0cmluZztcbiAgICBwcml2YXRlIHN1YjogYW55O1xuICAgIHB1YmxpYyBjaGF0bGlzdCQ6IE9ic2VydmFibGU8YW55PjtcbiAgICB1bnJlYWRjaGF0bGlzdDogT2JzZXJ2YWJsZTxhbnk+O1xuICAgIEBWaWV3Q2hpbGQoXCJsaXN0dmlld1wiKSBsdjogRWxlbWVudFJlZjtcclxuICAgIGxpc3R2aWV3OiBMaXN0VmlldztcbiAgICBhbGVydHBsYXllcjogYW55O1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcbiAgICAgICAgcHJpdmF0ZSBjaGF0U2VydmljZTogQ2hhdFNlcnZpY2VcblxuICAgICkge1xuICAgICAgIFxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBcclxuICAgICAgICB0aGlzLmFsZXJ0cGxheWVyID0gc291bmQuY3JlYXRlKFwifi9hc3NldHMvYWxlcnQubXAzXCIpOyAvLyBwcmVsb2FkIHRoZSBhdWRpbyBmaWxlIFxuICAgICAgICB0aGlzLmxpc3R2aWV3ID0gdGhpcy5sdi5uYXRpdmVFbGVtZW50O1xuICAgICAgICB0aGlzLnN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZnJvbSA9IEJhY2tlbmRTZXJ2aWNlLmVtYWlsO1xuICAgICAgICAgICAgdGhpcy5tZSA9IEJhY2tlbmRTZXJ2aWNlLmVtYWlsO1xuICAgICAgICAgICAgdGhpcy50byA9IHBhcmFtc1sndG8nXTtcblxuICAgICAgICAgICAgdGhpcy5jaGF0bGlzdCQgPSA8YW55PnRoaXMuY2hhdFNlcnZpY2UuZ2V0Y2hhdExpc3RCZXR3ZWVuKHRoaXMuZnJvbSwgdGhpcy50byk7XG4gICAgICAgICAgXG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuY2hhdFNlcnZpY2UuX2NoYXRsaXN0b2JzZXJ2YWJsZS5zdWJzY3JpYmUoeCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0dmlldy5zY3JvbGxUb0luZGV4KHgubGVuZ3RoIC0gMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmNoYXRTZXJ2aWNlLl9jaGF0bGlzdG9ic2VydmFibGUuc3Vic2NyaWJlKHggPT4ge1xuICAgICAgICAgICAgICAgIHZhciBtYWtlc291bmQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB2YXIgdW5yZWFkbWVzc2FnZXMgPSB0aGlzLmNoYXRTZXJ2aWNlLmZpbHRlclVucmVhZChCYWNrZW5kU2VydmljZS5lbWFpbCwgeCk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBlbnRyeSBvZiB1bnJlYWRtZXNzYWdlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVudHJ5KTsgLy8gMSwgXCJzdHJpbmdcIiwgZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXRTZXJ2aWNlLnVwZGF0ZW1lc3NhZ2VzdGF0dXMoZW50cnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1ha2Vzb3VuZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobWFrZXNvdW5kKSB0aGlzLmFsZXJ0cGxheWVyLnBsYXkoKTtcclxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICBcblxuICAgICAgICB9KTtcbiAgICB9XG4gICAgc2VuZG1zZygpIHtcbiAgICAgICAgdGhpcy5jaGF0U2VydmljZS5zYXZlbWVzc2FnZSh0aGlzLmZyb20sIHRoaXMudG8sIHRoaXMubWVzc2FnZSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IFwiXCI7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxuICAgIG9wZW5jaGF0bGlzdCgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2NoYXQtbGlzdFwiXSk7XG4gICAgfVxuXG5cbn0iXX0=