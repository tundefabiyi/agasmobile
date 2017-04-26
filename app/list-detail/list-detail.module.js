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
var list_detail_routes_1 = require("./list-detail.routes");
var list_detail_component_1 = require("./list-detail.component");
var ListDetailModule = (function () {
    function ListDetailModule() {
    }
    return ListDetailModule;
}());
ListDetailModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule,
            list_detail_routes_1.listDetailRouting
        ],
        declarations: [
            list_detail_component_1.ListDetailComponent
        ]
    })
], ListDetailModule);
exports.ListDetailModule = ListDetailModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1kZXRhaWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGlzdC1kZXRhaWwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsMERBQW1FO0FBQ25FLG9EQUFxRTtBQUNyRSxzQ0FBeUM7QUFFekMsMkRBQXlEO0FBQ3pELGlFQUE4RDtBQVk5RCxJQUFhLGdCQUFnQjtJQUE3QjtJQUFnQyxDQUFDO0lBQUQsdUJBQUM7QUFBRCxDQUFDLEFBQWpDLElBQWlDO0FBQXBCLGdCQUFnQjtJQVY1QixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCw2QkFBa0I7WUFDbEIsK0JBQXVCO1lBQ3ZCLHNDQUFpQjtTQUNsQjtRQUNELFlBQVksRUFBRTtZQUNaLDJDQUFtQjtTQUNwQjtLQUNGLENBQUM7R0FDVyxnQkFBZ0IsQ0FBSTtBQUFwQiw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcGxhdGZvcm1cIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IGxpc3REZXRhaWxSb3V0aW5nIH0gZnJvbSBcIi4vbGlzdC1kZXRhaWwucm91dGVzXCI7XG5pbXBvcnQgeyBMaXN0RGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vbGlzdC1kZXRhaWwuY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgbGlzdERldGFpbFJvdXRpbmdcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTGlzdERldGFpbENvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIExpc3REZXRhaWxNb2R1bGUgeyB9XG4iXX0=