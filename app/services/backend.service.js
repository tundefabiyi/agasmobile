"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var application_settings_1 = require("application-settings");
var tokenKey = "token";
var BackendService = (function () {
    function BackendService() {
    }
    BackendService.isLoggedIn = function () {
        return !!application_settings_1.getString("token");
    };
    Object.defineProperty(BackendService, "token", {
        get: function () {
            return application_settings_1.getString("token");
        },
        set: function (theToken) {
            application_settings_1.setString("token", theToken);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BackendService, "email", {
        get: function () {
            return application_settings_1.getString("email");
        },
        set: function (theemail) {
            application_settings_1.setString("email", theemail);
        },
        enumerable: true,
        configurable: true
    });
    return BackendService;
}());
exports.BackendService = BackendService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFja2VuZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsNkRBQTREO0FBRTVELElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQztBQUV6QjtJQUFBO0lBbUJBLENBQUM7SUFqQlEseUJBQVUsR0FBakI7UUFDRSxNQUFNLENBQUMsQ0FBQyxDQUFDLGdDQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELHNCQUFXLHVCQUFLO2FBQWhCO1lBQ0UsTUFBTSxDQUFDLGdDQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUIsQ0FBQzthQUVELFVBQWlCLFFBQWdCO1lBQy9CLGdDQUFTLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQy9CLENBQUM7OztPQUpBO0lBS0Qsc0JBQVcsdUJBQUs7YUFHaEI7WUFDSSxNQUFNLENBQUMsZ0NBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QixDQUFDO2FBTEQsVUFBaUIsUUFBZ0I7WUFDN0IsZ0NBQVMsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDakMsQ0FBQzs7O09BQUE7SUFJSCxxQkFBQztBQUFELENBQUMsQUFuQkQsSUFtQkM7QUFuQlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IGdldFN0cmluZywgc2V0U3RyaW5nIH0gZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5cbmNvbnN0IHRva2VuS2V5ID0gXCJ0b2tlblwiO1xuXG5leHBvcnQgY2xhc3MgQmFja2VuZFNlcnZpY2Uge1xuICBcbiAgc3RhdGljIGlzTG9nZ2VkSW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhZ2V0U3RyaW5nKFwidG9rZW5cIik7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHRva2VuKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGdldFN0cmluZyhcInRva2VuXCIpO1xuICB9XG5cbiAgc3RhdGljIHNldCB0b2tlbih0aGVUb2tlbjogc3RyaW5nKSB7XG4gICAgc2V0U3RyaW5nKFwidG9rZW5cIiwgdGhlVG9rZW4pO1xuICB9XG4gIHN0YXRpYyBzZXQgZW1haWwodGhlZW1haWw6IHN0cmluZykge1xuICAgICAgc2V0U3RyaW5nKFwiZW1haWxcIiwgdGhlZW1haWwpO1xuICB9XG4gIHN0YXRpYyBnZXQgZW1haWwoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiBnZXRTdHJpbmcoXCJlbWFpbFwiKTtcbiAgfVxufVxuIl19