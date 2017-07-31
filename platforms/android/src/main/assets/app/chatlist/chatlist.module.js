"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_1 = require("nativescript-angular/platform");
var forms_1 = require("nativescript-angular/forms");
var core_1 = require("@angular/core");
var chat_service_1 = require("./chat.service");
var services_1 = require("../services");
var chatlist_routes_1 = require("./chatlist.routes");
var chatlist_component_1 = require("./chatlist.component");
var chat_component_1 = require("./chat.component");
var ChatListModule = (function () {
    function ChatListModule() {
    }
    return ChatListModule;
}());
ChatListModule = __decorate([
    core_1.NgModule({
        providers: [
            chat_service_1.ChatService, services_1.BackendService
        ],
        imports: [
            platform_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule,
            chatlist_routes_1.chatlistRouting
        ],
        declarations: [
            chatlist_component_1.ChatListComponent,
            chat_component_1.ChatComponent
        ]
    })
], ChatListModule);
exports.ChatListModule = ChatListModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdGxpc3QubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hhdGxpc3QubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsMERBQW1FO0FBQ25FLG9EQUFxRTtBQUNyRSxzQ0FBeUM7QUFDekMsK0NBQTZDO0FBQzdDLHdDQUE2QztBQUU3QyxxREFBb0Q7QUFDcEQsMkRBQXlEO0FBQ3pELG1EQUFpRDtBQWdCakQsSUFBYSxjQUFjO0lBQTNCO0lBQThCLENBQUM7SUFBRCxxQkFBQztBQUFELENBQUMsQUFBL0IsSUFBK0I7QUFBbEIsY0FBYztJQWQxQixlQUFRLENBQUM7UUFDTixTQUFTLEVBQUU7WUFDUCwwQkFBVyxFQUFFLHlCQUFjO1NBQzlCO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsNkJBQWtCO1lBQ2xCLCtCQUF1QjtZQUN2QixpQ0FBZTtTQUNsQjtRQUNELFlBQVksRUFBRTtZQUNWLHNDQUFpQjtZQUNqQiw4QkFBYTtTQUNoQjtLQUNKLENBQUM7R0FDVyxjQUFjLENBQUk7QUFBbEIsd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcGxhdGZvcm1cIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDaGF0U2VydmljZSB9IGZyb20gXCIuL2NoYXQuc2VydmljZVwiO1xuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXNcIjtcblxuaW1wb3J0IHsgY2hhdGxpc3RSb3V0aW5nIH0gZnJvbSBcIi4vY2hhdGxpc3Qucm91dGVzXCI7XG5pbXBvcnQgeyBDaGF0TGlzdENvbXBvbmVudCB9IGZyb20gXCIuL2NoYXRsaXN0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ2hhdENvbXBvbmVudCB9IGZyb20gXCIuL2NoYXQuY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIENoYXRTZXJ2aWNlLCBCYWNrZW5kU2VydmljZVxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgICAgICBjaGF0bGlzdFJvdXRpbmdcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBDaGF0TGlzdENvbXBvbmVudCxcbiAgICAgICAgQ2hhdENvbXBvbmVudFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQ2hhdExpc3RNb2R1bGUgeyB9XG4iXX0=