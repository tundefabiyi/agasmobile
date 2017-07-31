"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var agasfinaggsearch_component_1 = require("./agasfinaggsearch.component");
var agasfinaggdetail_component_1 = require("./agasfinaggdetail.component");
var agashtmlview_component_1 = require("./agashtmlview.component");
var agasfinagginfodetail_component_1 = require("./agasfinagginfodetail.component");
var agasGPFSNoteHtmlView_component_1 = require("./agasGPFSNoteHtmlView.component");
var agasalertsetup_component_1 = require("../agasalerts/agasalertsetup.component");
var agasalerthtmlview_component_1 = require("../agasalerts/agasalerthtmlview.component");
var auth_guard_service_1 = require("../auth-guard.service");
var agasRoutes = [
    { path: "finagg-search", component: agasfinaggsearch_component_1.AGASFinAggSearchComponent, canActivate: [auth_guard_service_1.AuthGuard] },
    { path: "agasfinagg-detail", component: agasfinaggdetail_component_1.AGASFinAggDetailComponent, canActivate: [auth_guard_service_1.AuthGuard] },
    { path: "agashtml-view", component: agashtmlview_component_1.AGASHTMLViewComponent, canActivate: [auth_guard_service_1.AuthGuard] },
    { path: "agasfinagg-infodetail", component: agasfinagginfodetail_component_1.AGASFinAggInfoDetailComponent, canActivate: [auth_guard_service_1.AuthGuard] },
    { path: "agasgpfsnote-htmlview", component: agasGPFSNoteHtmlView_component_1.AGASGPFSNoteHTMLViewComponent, canActivate: [auth_guard_service_1.AuthGuard] },
    { path: "agasalert-view", component: agasalertsetup_component_1.AGASAlertSetupComponent, canActivate: [auth_guard_service_1.AuthGuard] },
    { path: "agasalerthtml-view", component: agasalerthtmlview_component_1.AGASAlertHTMLViewComponent, canActivate: [auth_guard_service_1.AuthGuard] },
    { path: "", component: agasfinaggsearch_component_1.AGASFinAggSearchComponent, canActivate: [auth_guard_service_1.AuthGuard] },
];
exports.agasRouting = router_1.RouterModule.forChild(agasRoutes);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdhcy5yb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhZ2FzLnJvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLDBDQUF1RDtBQUV2RCwyRUFBeUU7QUFDekUsMkVBQXlFO0FBQ3pFLG1FQUFpRTtBQUNqRSxtRkFBaUY7QUFDakYsbUZBQWlGO0FBQ2pGLG1GQUFpRjtBQUNqRix5RkFBdUY7QUFDdkYsNERBQWtEO0FBQ2xELElBQU0sVUFBVSxHQUFXO0lBQ3ZCLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsc0RBQXlCLEVBQUUsV0FBVyxFQUFFLENBQUMsOEJBQVMsQ0FBQyxFQUFFO0lBQ3pGLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixFQUFFLFNBQVMsRUFBRSxzREFBeUIsRUFBRSxXQUFXLEVBQUUsQ0FBQyw4QkFBUyxDQUFDLEVBQUU7SUFDN0YsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSw4Q0FBcUIsRUFBRSxXQUFXLEVBQUUsQ0FBQyw4QkFBUyxDQUFDLEVBQUU7SUFDckYsRUFBRSxJQUFJLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLDhEQUE2QixFQUFFLFdBQVcsRUFBRSxDQUFDLDhCQUFTLENBQUMsRUFBRTtJQUNyRyxFQUFFLElBQUksRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsOERBQTZCLEVBQUUsV0FBVyxFQUFFLENBQUMsOEJBQVMsQ0FBQyxFQUFFO0lBQ3JHLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxrREFBdUIsRUFBRSxXQUFXLEVBQUUsQ0FBQyw4QkFBUyxDQUFDLEVBQUU7SUFDeEYsRUFBRSxJQUFJLEVBQUUsb0JBQW9CLEVBQUUsU0FBUyxFQUFFLHdEQUEwQixFQUFFLFdBQVcsRUFBRSxDQUFDLDhCQUFTLENBQUMsRUFBRTtJQUMvRixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLHNEQUF5QixFQUFFLFdBQVcsRUFBRSxDQUFDLDhCQUFTLENBQUMsRUFBRTtDQUcvRSxDQUFDO0FBQ1csUUFBQSxXQUFXLEdBQXdCLHFCQUFZLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlcywgUm91dGVyTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgQUdBU0ZpbkFnZ1NlYXJjaENvbXBvbmVudCB9IGZyb20gXCIuL2FnYXNmaW5hZ2dzZWFyY2guY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEFHQVNGaW5BZ2dEZXRhaWxDb21wb25lbnQgfSBmcm9tIFwiLi9hZ2FzZmluYWdnZGV0YWlsLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBBR0FTSFRNTFZpZXdDb21wb25lbnQgfSBmcm9tIFwiLi9hZ2FzaHRtbHZpZXcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEFHQVNGaW5BZ2dJbmZvRGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vYWdhc2ZpbmFnZ2luZm9kZXRhaWwuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEFHQVNHUEZTTm90ZUhUTUxWaWV3Q29tcG9uZW50IH0gZnJvbSBcIi4vYWdhc0dQRlNOb3RlSHRtbFZpZXcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEFHQVNBbGVydFNldHVwQ29tcG9uZW50IH0gZnJvbSBcIi4uL2FnYXNhbGVydHMvYWdhc2FsZXJ0c2V0dXAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEFHQVNBbGVydEhUTUxWaWV3Q29tcG9uZW50IH0gZnJvbSBcIi4uL2FnYXNhbGVydHMvYWdhc2FsZXJ0aHRtbHZpZXcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEF1dGhHdWFyZCB9IGZyb20gXCIuLi9hdXRoLWd1YXJkLnNlcnZpY2VcIjtcclxuY29uc3QgYWdhc1JvdXRlczogUm91dGVzID0gW1xyXG4gICAgeyBwYXRoOiBcImZpbmFnZy1zZWFyY2hcIiwgY29tcG9uZW50OiBBR0FTRmluQWdnU2VhcmNoQ29tcG9uZW50LCBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZF0gfSxcclxuICAgIHsgcGF0aDogXCJhZ2FzZmluYWdnLWRldGFpbFwiLCBjb21wb25lbnQ6IEFHQVNGaW5BZ2dEZXRhaWxDb21wb25lbnQsIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkXSB9LFxyXG4gICAgeyBwYXRoOiBcImFnYXNodG1sLXZpZXdcIiwgY29tcG9uZW50OiBBR0FTSFRNTFZpZXdDb21wb25lbnQsIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkXSB9LFxyXG4gICAgeyBwYXRoOiBcImFnYXNmaW5hZ2ctaW5mb2RldGFpbFwiLCBjb21wb25lbnQ6IEFHQVNGaW5BZ2dJbmZvRGV0YWlsQ29tcG9uZW50LCBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZF0gfSxcclxuICAgIHsgcGF0aDogXCJhZ2FzZ3Bmc25vdGUtaHRtbHZpZXdcIiwgY29tcG9uZW50OiBBR0FTR1BGU05vdGVIVE1MVmlld0NvbXBvbmVudCwgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmRdIH0sXHJcbiAgICB7IHBhdGg6IFwiYWdhc2FsZXJ0LXZpZXdcIiwgY29tcG9uZW50OiBBR0FTQWxlcnRTZXR1cENvbXBvbmVudCwgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmRdIH0sXHJcbiAgICB7IHBhdGg6IFwiYWdhc2FsZXJ0aHRtbC12aWV3XCIsIGNvbXBvbmVudDogQUdBU0FsZXJ0SFRNTFZpZXdDb21wb25lbnQsIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkXSB9LFxyXG4gICAgeyBwYXRoOiBcIlwiLCBjb21wb25lbnQ6IEFHQVNGaW5BZ2dTZWFyY2hDb21wb25lbnQsIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkXSB9LFxyXG5cclxuXHJcbl07XHJcbmV4cG9ydCBjb25zdCBhZ2FzUm91dGluZzogTW9kdWxlV2l0aFByb3ZpZGVycyA9IFJvdXRlck1vZHVsZS5mb3JDaGlsZChhZ2FzUm91dGVzKTsiXX0=