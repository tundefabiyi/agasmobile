"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
function _window() {
    return window;
}
var WindowRef = (function () {
    function WindowRef() {
    }
    Object.defineProperty(WindowRef.prototype, "nativeWindow", {
        get: function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    return WindowRef;
}());
WindowRef = __decorate([
    core_1.Injectable()
], WindowRef);
exports.WindowRef = WindowRef;
exports.WindowService = new core_2.OpaqueToken('WindowService');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2luZG93UmVmLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiV2luZG93UmVmLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUE0QztBQUU1QztJQUVHLE1BQU0sQ0FBQyxNQUFNLENBQUM7QUFDakIsQ0FBQztBQUdELElBQWEsU0FBUztJQUF0QjtJQUlBLENBQUM7SUFIRSxzQkFBSSxtQ0FBWTthQUFoQjtZQUNHLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNwQixDQUFDOzs7T0FBQTtJQUNKLGdCQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7QUFKWSxTQUFTO0lBRHJCLGlCQUFVLEVBQUU7R0FDQSxTQUFTLENBSXJCO0FBSlksOEJBQVM7QUFTVCxRQUFBLGFBQWEsR0FBRyxJQUFJLGtCQUFXLENBQUMsZUFBZSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9wYXF1ZVRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5mdW5jdGlvbiBfd2luZG93KCkgOiBhbnkge1xyXG4gICAvLyByZXR1cm4gdGhlIGdsb2JhbCBuYXRpdmUgYnJvd3NlciB3aW5kb3cgb2JqZWN0XHJcbiAgIHJldHVybiB3aW5kb3c7XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFdpbmRvd1JlZiB7XHJcbiAgIGdldCBuYXRpdmVXaW5kb3coKSA6IGFueSB7XHJcbiAgICAgIHJldHVybiBfd2luZG93KCk7XHJcbiAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFdpbmRvd1NlcnZpY2UgPSBuZXcgT3BhcXVlVG9rZW4oJ1dpbmRvd1NlcnZpY2UnKTsiXX0=