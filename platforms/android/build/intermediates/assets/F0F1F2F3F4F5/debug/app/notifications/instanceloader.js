"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InstanceLoader = (function () {
    function InstanceLoader() {
    }
    InstanceLoader.getInstance = function (context, name) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        var r;
        var instance = Object.create(context[name].prototype);
        instance.constructor.apply(instance, args);
        return instance;
    };
    InstanceLoader.get = function (name) {
        var instance;
        eval("instance=new " + name + "()");
        return instance;
    };
    return InstanceLoader;
}());
exports.InstanceLoader = InstanceLoader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFuY2Vsb2FkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbnN0YW5jZWxvYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUtBO0lBQUE7SUFjQSxDQUFDO0lBYlUsMEJBQVcsR0FBbEIsVUFBc0IsT0FBZSxFQUFFLElBQVk7UUFBRSxjQUFjO2FBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztZQUFkLDZCQUFjOztRQUMvRCxJQUFJLENBQUMsQ0FBQztRQUVOLElBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3RELFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzQyxNQUFNLENBQUksUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFDTSxrQkFBRyxHQUFWLFVBQWMsSUFBWTtRQUN0QixJQUFJLFFBQVEsQ0FBQztRQUNiLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFBO1FBRW5DLE1BQU0sQ0FBSSxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyxBQWRELElBY0M7QUFkWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgTmF2aWdhdGlvbkV4dHJhcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IGdwZnNBbGVydE5vdGlmaWNhdGlvbiB9IGZyb20gJy4vZ3Bmc0FsZXJ0Tm90aWZpY2F0aW9uJztcclxuaW1wb3J0IHsgbW9iaWxlVHJhbnNhY3Rpb25BcHByb3ZhbFJlcXVlc3QgfSBmcm9tICcuL21vYmlsZVRyYW5zYWN0aW9uQXBwcm92YWxSZXF1ZXN0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBJbnN0YW5jZUxvYWRlciB7XHJcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2U8VD4oY29udGV4dDogT2JqZWN0LCBuYW1lOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKTogVCB7XHJcbiAgICAgICAgdmFyIHI7XHJcblxyXG4gICAgICAgIHZhciBpbnN0YW5jZSA9IE9iamVjdC5jcmVhdGUoY29udGV4dFtuYW1lXS5wcm90b3R5cGUpO1xyXG4gICAgICAgIGluc3RhbmNlLmNvbnN0cnVjdG9yLmFwcGx5KGluc3RhbmNlLCBhcmdzKTtcclxuICAgICAgICByZXR1cm4gPFQ+aW5zdGFuY2U7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZ2V0PFQ+KG5hbWU6IHN0cmluZyk6IFQge1xyXG4gICAgICAgIHZhciBpbnN0YW5jZTtcclxuICAgICAgICBldmFsKFwiaW5zdGFuY2U9bmV3IFwiICsgbmFtZSArIFwiKClcIilcclxuXHJcbiAgICAgICAgcmV0dXJuIDxUPmluc3RhbmNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE5vdGlmaWNhdGlvblJlcXVlc3Qge1xyXG5cclxuICAgIHJlbW90ZU5vdGlmY2F0aW9uTmF2aWdhdGlvbkV4dHJhcygpOiBOYXZpZ2F0aW9uRXh0cmFzO1xyXG4gICAgdmlldygpOiBzdHJpbmc7XHJcbiAgICBsb2NhbE5vdGlmY2F0aW9uTmF2aWdhdGlvbkV4dHJhcygpOiBOYXZpZ2F0aW9uRXh0cmFzO1xyXG4gICAgdGFrZU1lc3NhZ2UobWVzc2FnZTphbnkpO1xyXG5cclxufSJdfQ==