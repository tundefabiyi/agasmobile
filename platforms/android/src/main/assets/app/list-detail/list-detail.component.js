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
var services_1 = require("../services");
var enums = require("ui/enums");
var imageSource = require("image-source");
var camera = require("nativescript-camera");
var imageModule = require("ui/image");
var img;
var ListDetailComponent = (function () {
    function ListDetailComponent(route, router, ngZone, firebaseService, utilsService) {
        this.route = route;
        this.router = router;
        this.ngZone = ngZone;
        this.firebaseService = firebaseService;
        this.utilsService = utilsService;
    }
    ListDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        camera.requestPermissions();
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.firebaseService.getMyGift(_this.id).subscribe(function (gift) {
                _this.ngZone.run(function () {
                    for (var prop in gift) {
                        if (prop === "id") {
                            _this.id = gift[prop];
                        }
                        if (prop === "name") {
                            _this.name = gift[prop];
                        }
                        if (prop === "description") {
                            _this.description = gift[prop];
                        }
                        if (prop === "imagepath") {
                            _this.imagepath = gift[prop];
                        }
                    }
                });
            });
        });
    };
    ListDetailComponent.prototype.takePhoto = function () {
        var _this = this;
        var options = {
            width: 300,
            height: 300,
            keepAspectRatio: true,
            saveToGallery: true
        };
        camera.takePicture(options)
            .then(function (imageAsset) {
            imageSource.fromAsset(imageAsset).then(function (res) {
                _this.image = res;
                _this.saveToFile(_this.image);
            });
        }).catch(function (err) {
            console.log("Error -> " + err.message);
        });
    };
    ListDetailComponent.prototype.saveToFile = function (res) {
        var imgsrc = res;
        this.imagePath = this.utilsService.documentsPath("photo-" + Date.now() + ".png");
        imgsrc.saveToFile(this.imagePath, enums.ImageFormat.png);
    };
    ListDetailComponent.prototype.editGift = function (id) {
        var _this = this;
        if (this.image) {
            this.firebaseService.uploadFile(this.imagePath).then(function (uploadedFile) {
                _this.uploadedImageName = uploadedFile.name;
                _this.firebaseService.getDownloadUrl(_this.uploadedImageName).then(function (downloadUrl) {
                    _this.firebaseService.editGift(id, _this.description, downloadUrl).then(function (result) {
                        alert(result);
                    }, function (error) {
                        alert(error);
                    });
                });
            }, function (error) {
                alert('File upload error: ' + error);
            });
        }
        else {
            this.firebaseService.editDescription(id, this.description).then(function (result) {
                alert(result);
            }, function (error) {
                alert(error);
            });
        }
    };
    return ListDetailComponent;
}());
ListDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "gf-list-detail",
        templateUrl: "list-detail.html"
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        core_1.NgZone,
        services_1.FirebaseService,
        services_1.UtilsService])
], ListDetailComponent);
exports.ListDetailComponent = ListDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGlzdC1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQXdEO0FBRXhELDBDQUF1RDtBQUN2RCx3Q0FBNEQ7QUFFNUQsZ0NBQWtDO0FBQ2xDLDBDQUE0QztBQUk1Qyw0Q0FBOEM7QUFHOUMsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3RDLElBQUksR0FBRyxDQUFDO0FBT1IsSUFBYSxtQkFBbUI7SUFhOUIsNkJBQ2MsS0FBcUIsRUFDckIsTUFBYyxFQUNkLE1BQWMsRUFDZCxlQUFnQyxFQUNoQyxZQUEwQjtRQUoxQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUNuQyxDQUFDO0lBRVAsc0NBQVEsR0FBUjtRQUFBLGlCQXdCRTtRQXZCQSxNQUFNLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFDLE1BQVc7WUFDaEQsS0FBSSxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkIsS0FBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLElBQUk7Z0JBQ3JELEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO29CQUNkLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBRXRCLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJ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QUMsRUFBRSxVQUFDLEtBQVU7Z0JBQ1osS0FBSyxDQUFDLHFCQUFxQixHQUFHLEtBQUssQ0FBQyxDQUFDO1lBQ3ZDLENBQUMsQ0FBQyxDQUFDO1FBQ1QsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBRUosSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsRUFBRSxFQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFVO2dCQUN0RSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDakIsQ0FBQyxFQUFFLFVBQUMsS0FBVTtnQkFDVixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakIsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO0lBQ0gsQ0FBQztJQUVELDBCQUFDO0FBQUQsQ0FBQyxBQXBHRCxJQW9HQztBQXBHWSxtQkFBbUI7SUFML0IsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsZ0JBQWdCO1FBQzFCLFdBQVcsRUFBRSxrQkFBa0I7S0FDaEMsQ0FBQztxQ0FlcUIsdUJBQWM7UUFDYixlQUFNO1FBQ04sYUFBTTtRQUNHLDBCQUFlO1FBQ2xCLHVCQUFZO0dBbEI3QixtQkFBbUIsQ0FvRy9CO0FBcEdZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIE5nWm9uZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQge1JvdXRlciwgQWN0aXZhdGVkUm91dGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBGaXJlYmFzZVNlcnZpY2UsIFV0aWxzU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlc1wiO1xuaW1wb3J0IHtHaWZ0fSBmcm9tIFwiLi4vbW9kZWxzXCI7XG5pbXBvcnQgKiBhcyBlbnVtcyBmcm9tICd1aS9lbnVtcyc7XG5pbXBvcnQgKiBhcyBpbWFnZVNvdXJjZSBmcm9tICdpbWFnZS1zb3VyY2UnO1xuaW1wb3J0IHsgaXNBbmRyb2lkIH0gZnJvbSBcInBsYXRmb3JtXCI7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xuXG5pbXBvcnQgKiBhcyBjYW1lcmEgZnJvbSBcIm5hdGl2ZXNjcmlwdC1jYW1lcmFcIjtcbmltcG9ydCAqIGFzIGZzIGZyb20gXCJmaWxlLXN5c3RlbVwiO1xuXG52YXIgaW1hZ2VNb2R1bGUgPSByZXF1aXJlKFwidWkvaW1hZ2VcIik7XG52YXIgaW1nO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6IFwiZ2YtbGlzdC1kZXRhaWxcIixcbiAgdGVtcGxhdGVVcmw6IFwibGlzdC1kZXRhaWwuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIExpc3REZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBcbiAgaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBpbWFnZXBhdGg6IHN0cmluZztcbiAgaW1hZ2U6IGFueTtcbiAgcHJpdmF0ZSBzdWI6IGFueTtcbiAgcHJpdmF0ZSBpbWFnZVBhdGg6IHN0cmluZztcbiAgcHJpdmF0ZSB1cGxvYWRlZEltYWdlTmFtZTogc3RyaW5nO1xuICBwcml2YXRlIHVwbG9hZGVkSW1hZ2VQYXRoOiBzdHJpbmc7XG4gIC8vcHVibGljIGdpZnQ6IE9ic2VydmFibGU8YW55PjtcbiAgXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcbiAgICAgICAgcHJpdmF0ZSBmaXJlYmFzZVNlcnZpY2U6IEZpcmViYXNlU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSB1dGlsc1NlcnZpY2U6IFV0aWxzU2VydmljZVxuICAgICkge31cblxuIG5nT25Jbml0KCkge1xuICAgY2FtZXJhLnJlcXVlc3RQZXJtaXNzaW9ucygpO1xuICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtczogYW55KSA9PiB7XG4gICAgICB0aGlzLmlkID0gcGFyYW1zWydpZCddO1xuICAgICAgdGhpcy5maXJlYmFzZVNlcnZpY2UuZ2V0TXlHaWZ0KHRoaXMuaWQpLnN1YnNjcmliZSgoZ2lmdCkgPT4ge1xuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgIGZvciAobGV0IHByb3AgaW4gZ2lmdCkge1xuICAgICAgICAgICAgLy9wcm9wc1xuICAgICAgICAgICAgaWYgKHByb3AgPT09IFwiaWRcIikge1xuICAgICAgICAgICAgICB0aGlzLmlkID0gZ2lmdFtwcm9wXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9wID09PSBcIm5hbWVcIikge1xuICAgICAgICAgICAgICB0aGlzLm5hbWUgPSBnaWZ0W3Byb3BdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb3AgPT09IFwiZGVzY3JpcHRpb25cIikge1xuICAgICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZ2lmdFtwcm9wXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9wID09PSBcImltYWdlcGF0aFwiKSB7XG4gICAgICAgICAgICAgIHRoaXMuaW1hZ2VwYXRoID0gZ2lmdFtwcm9wXTtcbiAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTsgIFxuICB9XG5cbnRha2VQaG90bygpIHtcbiAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICB3aWR0aDogMzAwLFxuICAgICAgICAgICAgaGVpZ2h0OiAzMDAsXG4gICAgICAgICAgICBrZWVwQXNwZWN0UmF0aW86IHRydWUsXG4gICAgICAgICAgICBzYXZlVG9HYWxsZXJ5OiB0cnVlXG4gICAgICAgIH07XG4gICAgY2FtZXJhLnRha2VQaWN0dXJlKG9wdGlvbnMpXG4gICAgICAgIC50aGVuKGltYWdlQXNzZXQgPT4ge1xuICAgICAgICAgICAgaW1hZ2VTb3VyY2UuZnJvbUFzc2V0KGltYWdlQXNzZXQpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlID0gcmVzO1xuICAgICAgICAgICAgICAgIC8vc2F2ZSB0aGUgc291cmNlIGltYWdlIHRvIGEgZmlsZSwgdGhlbiBzZW5kIHRoYXQgZmlsZSBwYXRoIHRvIGZpcmViYXNlXG4gICAgICAgICAgICAgICAgdGhpcy5zYXZlVG9GaWxlKHRoaXMuaW1hZ2UpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciAtPiBcIiArIGVyci5tZXNzYWdlKTtcbiAgICAgICAgfSk7XG59XG5cbnNhdmVUb0ZpbGUocmVzKXtcbiAgbGV0IGltZ3NyYyA9IHJlcztcbiAgICAgICAgdGhpcy5pbWFnZVBhdGggPSB0aGlzLnV0aWxzU2VydmljZS5kb2N1bWVudHNQYXRoKGBwaG90by0ke0RhdGUubm93KCl9LnBuZ2ApO1xuICAgICAgICBpbWdzcmMuc2F2ZVRvRmlsZSh0aGlzLmltYWdlUGF0aCwgZW51bXMuSW1hZ2VGb3JtYXQucG5nKTsgICAgICAgXG59XG5cblxuZWRpdEdpZnQoaWQ6IHN0cmluZyl7XG4gIGlmKHRoaXMuaW1hZ2Upe1xuICAgIC8vdXBsb2FkIHRoZSBmaWxlLCB0aGVuIHNhdmUgYWxsXG4gICAgdGhpcy5maXJlYmFzZVNlcnZpY2UudXBsb2FkRmlsZSh0aGlzLmltYWdlUGF0aCkudGhlbigodXBsb2FkZWRGaWxlOiBhbnkpID0+IHtcbiAgICAgICAgICB0aGlzLnVwbG9hZGVkSW1hZ2VOYW1lID0gdXBsb2FkZWRGaWxlLm5hbWU7XG4gICAgICAgICAgLy9nZXQgZG93bmxvYWRVUkwgYW5kIHN0b3JlIGl0IGFzIGEgZnVsbCBwYXRoO1xuICAgICAgICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmdldERvd25sb2FkVXJsKHRoaXMudXBsb2FkZWRJbWFnZU5hbWUpLnRoZW4oKGRvd25sb2FkVXJsOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmVkaXRHaWZ0KGlkLHRoaXMuZGVzY3JpcHRpb24sZG93bmxvYWRVcmwpLnRoZW4oKHJlc3VsdDphbnkpID0+IHtcbiAgICAgICAgICAgICAgYWxlcnQocmVzdWx0KVxuICAgICAgICAgICAgfSwgKGVycm9yOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBhbGVydChlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KVxuICAgICAgICB9LCAoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICAgIGFsZXJ0KCdGaWxlIHVwbG9hZCBlcnJvcjogJyArIGVycm9yKTtcbiAgICAgICAgfSk7XG4gIH1cbiAgZWxzZSB7XG4gICAgLy9qdXN0IGVkaXQgdGhlIGRlc2NyaXB0aW9uXG4gICAgdGhpcy5maXJlYmFzZVNlcnZpY2UuZWRpdERlc2NyaXB0aW9uKGlkLHRoaXMuZGVzY3JpcHRpb24pLnRoZW4oKHJlc3VsdDphbnkpID0+IHtcbiAgICAgICAgYWxlcnQocmVzdWx0KVxuICAgIH0sIChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgIGFsZXJ0KGVycm9yKTtcbiAgICB9KTtcbiAgfSAgICBcbn1cblxufSJdfQ==