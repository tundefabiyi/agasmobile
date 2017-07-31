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
var Subject_1 = require("rxjs/Subject");
var HomePageService = (function () {
    function HomePageService(ngZone) {
        this.ngZone = ngZone;
        this.onsetTittleObservable = new Subject_1.Subject();
        this.onGoBackObservable = new Subject_1.Subject();
        this.onShowGoBackButtonObservable = new Subject_1.Subject();
    }
    HomePageService.prototype.setTitle = function (title) {
        this.onsetTittleObservable.next(title);
    };
    HomePageService.prototype.goback = function () {
        this.onGoBackObservable.next();
    };
    HomePageService.prototype.setShowGoBackButton = function (status) {
        this.onShowGoBackButtonObservable.next(status);
    };
    return HomePageService;
}());
HomePageService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [core_1.NgZone])
], HomePageService);
exports.HomePageService = HomePageService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZXBhZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWVwYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBbUQ7QUFFbkQsd0NBQXVDO0FBR3ZDLElBQWEsZUFBZTtJQUN4Qix5QkFDWSxNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUkxQiwwQkFBcUIsR0FBb0IsSUFBSSxpQkFBTyxFQUFVLENBQUM7UUFDL0QsdUJBQWtCLEdBQWlCLElBQUksaUJBQU8sRUFBTyxDQUFDO1FBQ3RELGlDQUE0QixHQUFxQixJQUFJLGlCQUFPLEVBQVcsQ0FBQztJQUh4RSxDQUFDO0lBSUQsa0NBQVEsR0FBUixVQUFTLEtBQWE7UUFDbEIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBQ0QsZ0NBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBQ0QsNkNBQW1CLEdBQW5CLFVBQW9CLE1BQWU7UUFDL0IsSUFBSSxDQUFDLDRCQUE0QixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQUFDLEFBbEJELElBa0JDO0FBbEJZLGVBQWU7SUFEM0IsaUJBQVUsRUFBRTtxQ0FHVyxhQUFNO0dBRmpCLGVBQWUsQ0FrQjNCO0FBbEJZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgTmdab25lIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzL1N1YmplY3QnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSG9tZVBhZ2VTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmVcclxuICAgICkge1xyXG5cclxuICAgIH1cclxuICAgIG9uc2V0VGl0dGxlT2JzZXJ2YWJsZTogU3ViamVjdDxzdHJpbmc+ID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xyXG4gICAgb25Hb0JhY2tPYnNlcnZhYmxlOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdDxhbnk+KCk7XHJcbiAgICBvblNob3dHb0JhY2tCdXR0b25PYnNlcnZhYmxlOiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcclxuICAgIHNldFRpdGxlKHRpdGxlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLm9uc2V0VGl0dGxlT2JzZXJ2YWJsZS5uZXh0KHRpdGxlKTtcclxuICAgIH1cclxuICAgIGdvYmFjaygpIHtcclxuICAgICAgICB0aGlzLm9uR29CYWNrT2JzZXJ2YWJsZS5uZXh0KCk7XHJcbiAgICB9XHJcbiAgICBzZXRTaG93R29CYWNrQnV0dG9uKHN0YXR1czogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMub25TaG93R29CYWNrQnV0dG9uT2JzZXJ2YWJsZS5uZXh0KHN0YXR1cyk7XHJcbiAgICB9XHJcbn0iXX0=