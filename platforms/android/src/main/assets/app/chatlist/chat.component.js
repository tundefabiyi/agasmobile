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
    function ChatComponent(route, router, ngZone, chatService, homePageService) {
        this.route = route;
        this.router = router;
        this.ngZone = ngZone;
        this.chatService = chatService;
        this.homePageService = homePageService;
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.homePageService.setShowGoBackButton(true);
        this.homePageService.onGoBackObservable.subscribe(function () {
            _this.ngZone.run(function () {
                _this.openchatlist();
            });
        });
        this.alertplayer = sound.create("~/assets/alert.mp3");
        this.listview = this.lv.nativeElement;
        this.sub = this.route.params.subscribe(function (params) {
            _this.from = services_1.BackendService.email;
            _this.me = services_1.BackendService.email;
            _this.to = params['to'];
            _this.homePageService.setTitle(_this.to);
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
        chat_service_1.ChatService,
        services_1.HomePageService])
], ChatComponent);
exports.ChatComponent = ChatComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGF0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUFpRjtBQUVqRiwwQ0FBeUQ7QUFDekQsK0NBQTZDO0FBQzdDLHdDQUE4RDtBQUU5RCxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQU0xQyxJQUFhLGFBQWE7SUFZdEIsdUJBQ1ksS0FBcUIsRUFDckIsTUFBYyxFQUNkLE1BQWMsRUFDZCxXQUF3QixFQUN4QixlQUFnQztRQUpoQyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUk1QyxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUFBLGlCQXlDQztRQXZDRyxJQUFJLENBQUMsZUFBZSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxlQUFlLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDO1lBQzlDLEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO2dCQUNYLEtBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUN6QixDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFDLE1BQVc7WUFDL0MsS0FBSSxDQUFDLElBQUksR0FBRyx5QkFBYyxDQUFDLEtBQUssQ0FBQztZQUNqQyxLQUFJLENBQUMsRUFBRSxHQUFHLHlCQUFjLENBQUMsS0FBSyxDQUFDO1lBQy9CLEtBQUksQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN2QyxLQUFJLENBQUMsU0FBUyxHQUFRLEtBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsS0FBSSxDQUFDLElBQUksRUFBRSxLQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFHOUUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDO2dCQUM1QyxLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztvQkFFWixVQUFVLENBQUM7d0JBQ1AsS0FBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFFOUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNWLENBQUMsQ0FBQyxDQUFDO1lBRVAsQ0FBQyxDQUFDLENBQUM7WUFDSCxLQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUM7Z0JBQzVDLElBQUksU0FBUyxHQUFZLEtBQUssQ0FBQztnQkFDL0IsSUFBSSxjQUFjLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMseUJBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzVFLEdBQUcsQ0FBQyxDQUFjLFVBQWMsRUFBZCxpQ0FBYyxFQUFkLDRCQUFjLEVBQWQsSUFBYztvQkFBM0IsSUFBSSxLQUFLLHVCQUFBO29CQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ25CLEtBQUksQ0FBQyxXQUFXLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQzVDLFNBQVMsR0FBRyxJQUFJLENBQUM7aUJBQ3BCO2dCQUNELEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQztvQkFBQyxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzNDLENBQUMsQ0FBQyxDQUFDO1FBR1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0QsK0JBQU8sR0FBUDtRQUFBLGlCQUtDO1FBSkcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDaEUsS0FBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFFdEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0Qsb0NBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBR0wsb0JBQUM7QUFBRCxDQUFDLEFBNUVELElBNEVDO0FBbkUwQjtJQUF0QixnQkFBUyxDQUFDLFVBQVUsQ0FBQzs4QkFBSyxpQkFBVTt5Q0FBQztBQVQ3QixhQUFhO0lBTHpCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLGFBQWE7UUFDdkIsV0FBVyxFQUFFLFdBQVc7S0FDM0IsQ0FBQztxQ0FjcUIsdUJBQWM7UUFDYixlQUFNO1FBQ04sYUFBTTtRQUNELDBCQUFXO1FBQ1AsMEJBQWU7R0FqQm5DLGFBQWEsQ0E0RXpCO0FBNUVZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE5nWm9uZSwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ2hhdFNlcnZpY2UgfSBmcm9tIFwiLi9jaGF0LnNlcnZpY2VcIjtcbmltcG9ydCB7IEJhY2tlbmRTZXJ2aWNlLCBIb21lUGFnZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXNcIjtcbmltcG9ydCB7IExpc3RWaWV3IH0gZnJvbSBcInVpL2xpc3Qtdmlld1wiO1xudmFyIHNvdW5kID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1zb3VuZFwiKTtcbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6IFwiY2hhdGRpc3BsYXlcIixcbiAgICB0ZW1wbGF0ZVVybDogXCJjaGF0Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBDaGF0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGZyb206IHN0cmluZztcbiAgICB0bzogc3RyaW5nO1xuICAgIG1lc3NhZ2U6IHN0cmluZztcbiAgICBtZTogc3RyaW5nO1xuICAgIHByaXZhdGUgc3ViOiBhbnk7XG4gICAgcHVibGljIGNoYXRsaXN0JDogT2JzZXJ2YWJsZTxhbnk+O1xuICAgIHVucmVhZGNoYXRsaXN0OiBPYnNlcnZhYmxlPGFueT47XG4gICAgQFZpZXdDaGlsZChcImxpc3R2aWV3XCIpIGx2OiBFbGVtZW50UmVmO1xuICAgIGxpc3R2aWV3OiBMaXN0VmlldztcbiAgICBhbGVydHBsYXllcjogYW55O1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcbiAgICAgICAgcHJpdmF0ZSBjaGF0U2VydmljZTogQ2hhdFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgaG9tZVBhZ2VTZXJ2aWNlOiBIb21lUGFnZVNlcnZpY2VcblxuICAgICkge1xuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG5cbiAgICAgICAgdGhpcy5ob21lUGFnZVNlcnZpY2Uuc2V0U2hvd0dvQmFja0J1dHRvbih0cnVlKTtcbiAgICAgICAgdGhpcy5ob21lUGFnZVNlcnZpY2Uub25Hb0JhY2tPYnNlcnZhYmxlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICB0aGlzLm9wZW5jaGF0bGlzdCgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWxlcnRwbGF5ZXIgPSBzb3VuZC5jcmVhdGUoXCJ+L2Fzc2V0cy9hbGVydC5tcDNcIik7IC8vIHByZWxvYWQgdGhlIGF1ZGlvIGZpbGUgXG4gICAgICAgIHRoaXMubGlzdHZpZXcgPSB0aGlzLmx2Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5mcm9tID0gQmFja2VuZFNlcnZpY2UuZW1haWw7XG4gICAgICAgICAgICB0aGlzLm1lID0gQmFja2VuZFNlcnZpY2UuZW1haWw7XG4gICAgICAgICAgICB0aGlzLnRvID0gcGFyYW1zWyd0byddO1xuICAgICAgICAgICAgdGhpcy5ob21lUGFnZVNlcnZpY2Uuc2V0VGl0bGUodGhpcy50byk7XG4gICAgICAgICAgICB0aGlzLmNoYXRsaXN0JCA9IDxhbnk+dGhpcy5jaGF0U2VydmljZS5nZXRjaGF0TGlzdEJldHdlZW4odGhpcy5mcm9tLCB0aGlzLnRvKTtcblxuXG4gICAgICAgICAgICB0aGlzLmNoYXRTZXJ2aWNlLl9jaGF0bGlzdG9ic2VydmFibGUuc3Vic2NyaWJlKHggPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3R2aWV3LnNjcm9sbFRvSW5kZXgoeC5sZW5ndGggLSAxKTtcblxuICAgICAgICAgICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmNoYXRTZXJ2aWNlLl9jaGF0bGlzdG9ic2VydmFibGUuc3Vic2NyaWJlKHggPT4ge1xuICAgICAgICAgICAgICAgIHZhciBtYWtlc291bmQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB2YXIgdW5yZWFkbWVzc2FnZXMgPSB0aGlzLmNoYXRTZXJ2aWNlLmZpbHRlclVucmVhZChCYWNrZW5kU2VydmljZS5lbWFpbCwgeCk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgZW50cnkgb2YgdW5yZWFkbWVzc2FnZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZW50cnkpOyAvLyAxLCBcInN0cmluZ1wiLCBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXRTZXJ2aWNlLnVwZGF0ZW1lc3NhZ2VzdGF0dXMoZW50cnkpO1xuICAgICAgICAgICAgICAgICAgICBtYWtlc291bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobWFrZXNvdW5kKSB0aGlzLmFsZXJ0cGxheWVyLnBsYXkoKTtcbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHNlbmRtc2coKSB7XG4gICAgICAgIHRoaXMuY2hhdFNlcnZpY2Uuc2F2ZW1lc3NhZ2UodGhpcy5mcm9tLCB0aGlzLnRvLCB0aGlzLm1lc3NhZ2UpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gXCJcIjtcblxuICAgICAgICB9KTtcbiAgICB9XG4gICAgb3BlbmNoYXRsaXN0KCkge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvY2hhdC1saXN0XCJdKTtcbiAgICB9XG5cblxufSJdfQ==