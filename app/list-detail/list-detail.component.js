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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGlzdC1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQXdEO0FBRXhELDBDQUF1RDtBQUN2RCx3Q0FBNEQ7QUFFNUQsZ0NBQWtDO0FBQ2xDLDBDQUE0QztBQUk1Qyw0Q0FBOEM7QUFHOUMsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3RDLElBQUksR0FBRyxDQUFDO0FBT1IsSUFBYSxtQkFBbUI7SUFhOUIsNkJBQ2MsS0FBcUIsRUFDckIsTUFBYyxFQUNkLE1BQWMsRUFDZCxlQUFnQyxFQUNoQyxZQUEwQjtRQUoxQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUNuQyxDQUFDO0lBRVAsc0NBQVEsR0FBUjtRQUFBLGlCQXdCRTtRQXZCQSxNQUFNLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFDLE1BQVc7WUFDaEQsS0FBSSxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkIsS0FBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLElBQUk7Z0JBQ3JELEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO29CQUNkLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBRXRCLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJ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QUMsRUFBRSxVQUFDLEtBQVU7Z0JBQ1osS0FBSyxDQUFDLHFCQUFxQixHQUFHLEtBQUssQ0FBQyxDQUFDO1lBQ3ZDLENBQUMsQ0FBQyxDQUFDO1FBQ1QsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBRUosSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsRUFBRSxFQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFVO2dCQUN0RSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDakIsQ0FBQyxFQUFFLFVBQUMsS0FBVTtnQkFDVixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakIsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO0lBQ0gsQ0FBQztJQUVELDBCQUFDO0FBQUQsQ0FBQyxBQXBHRCxJQW9HQztBQXBHWSxtQkFBbUI7SUFML0IsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsZ0JBQWdCO1FBQzFCLFdBQVcsRUFBRSxrQkFBa0I7S0FDaEMsQ0FBQztxQ0FlcUIsdUJBQWM7UUFDYixlQUFNO1FBQ04sYUFBTTtRQUNHLDBCQUFlO1FBQ2xCLHVCQUFZO0dBbEI3QixtQkFBbUIsQ0FvRy9CO0FBcEdZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIE5nWm9uZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQge1JvdXRlciwgQWN0aXZhdGVkUm91dGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBGaXJlYmFzZVNlcnZpY2UsIFV0aWxzU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlc1wiO1xuaW1wb3J0IHtHaWZ0fSBmcm9tIFwiLi4vbW9kZWxzXCI7XG5pbXBvcnQgKiBhcyBlbnVtcyBmcm9tICd1aS9lbnVtcyc7XG5pbXBvcnQgKiBhcyBpbWFnZVNvdXJjZSBmcm9tICdpbWFnZS1zb3VyY2UnO1xuaW1wb3J0IHsgaXNBbmRyb2lkIH0gZnJvbSBcInBsYXRmb3JtXCI7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xuXG5pbXBvcnQgKiBhcyBjYW1lcmEgZnJvbSBcIm5hdGl2ZXNjcmlwdC1jYW1lcmFcIjtcbmltcG9ydCAqIGFzIGZzIGZyb20gXCJmaWxlLXN5c3RlbVwiO1xuXG52YXIgaW1hZ2VNb2R1bGUgPSByZXF1aXJlKFwidWkvaW1hZ2VcIik7XG52YXIgaW1nO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6IFwiZ2YtbGlzdC1kZXRhaWxcIixcbiAgdGVtcGxhdGVVcmw6IFwibGlzdC1kZXRhaWwuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIExpc3REZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBcbiAgaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBpbWFnZXBhdGg6IHN0cmluZztcbiAgaW1hZ2U6IGFueTtcbiAgcHJpdmF0ZSBzdWI6IGFueTtcbiAgcHJpdmF0ZSBpbWFnZVBhdGg6IHN0cmluZztcbiAgcHJpdmF0ZSB1cGxvYWRlZEltYWdlTmFtZTogc3RyaW5nO1xuICBwcml2YXRlIHVwbG9hZGVkSW1hZ2VQYXRoOiBzdHJpbmc7XG4gIHB1YmxpYyBnaWZ0OiBPYnNlcnZhYmxlPGFueT47XG4gIFxuICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgICAgIHByaXZhdGUgZmlyZWJhc2VTZXJ2aWNlOiBGaXJlYmFzZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgdXRpbHNTZXJ2aWNlOiBVdGlsc1NlcnZpY2VcbiAgICApIHt9XG5cbiBuZ09uSW5pdCgpIHtcbiAgIGNhbWVyYS5yZXF1ZXN0UGVybWlzc2lvbnMoKTtcbiAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXM6IGFueSkgPT4ge1xuICAgICAgdGhpcy5pZCA9IHBhcmFtc1snaWQnXTtcbiAgICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmdldE15R2lmdCh0aGlzLmlkKS5zdWJzY3JpYmUoKGdpZnQpID0+IHtcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICBmb3IgKGxldCBwcm9wIGluIGdpZnQpIHtcbiAgICAgICAgICAgIC8vcHJvcHNcbiAgICAgICAgICAgIGlmIChwcm9wID09PSBcImlkXCIpIHtcbiAgICAgICAgICAgICAgdGhpcy5pZCA9IGdpZnRbcHJvcF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvcCA9PT0gXCJuYW1lXCIpIHtcbiAgICAgICAgICAgICAgdGhpcy5uYW1lID0gZ2lmdFtwcm9wXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9wID09PSBcImRlc2NyaXB0aW9uXCIpIHtcbiAgICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGdpZnRbcHJvcF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvcCA9PT0gXCJpbWFnZXBhdGhcIikge1xuICAgICAgICAgICAgICB0aGlzLmltYWdlcGF0aCA9IGdpZnRbcHJvcF07XG4gICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7ICBcbiAgfVxuXG50YWtlUGhvdG8oKSB7XG4gIGxldCBvcHRpb25zID0ge1xuICAgICAgICAgICAgd2lkdGg6IDMwMCxcbiAgICAgICAgICAgIGhlaWdodDogMzAwLFxuICAgICAgICAgICAga2VlcEFzcGVjdFJhdGlvOiB0cnVlLFxuICAgICAgICAgICAgc2F2ZVRvR2FsbGVyeTogdHJ1ZVxuICAgICAgICB9O1xuICAgIGNhbWVyYS50YWtlUGljdHVyZShvcHRpb25zKVxuICAgICAgICAudGhlbihpbWFnZUFzc2V0ID0+IHtcbiAgICAgICAgICAgIGltYWdlU291cmNlLmZyb21Bc3NldChpbWFnZUFzc2V0KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZSA9IHJlcztcbiAgICAgICAgICAgICAgICAvL3NhdmUgdGhlIHNvdXJjZSBpbWFnZSB0byBhIGZpbGUsIHRoZW4gc2VuZCB0aGF0IGZpbGUgcGF0aCB0byBmaXJlYmFzZVxuICAgICAgICAgICAgICAgIHRoaXMuc2F2ZVRvRmlsZSh0aGlzLmltYWdlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgLT4gXCIgKyBlcnIubWVzc2FnZSk7XG4gICAgICAgIH0pO1xufVxuXG5zYXZlVG9GaWxlKHJlcyl7XG4gIGxldCBpbWdzcmMgPSByZXM7XG4gICAgICAgIHRoaXMuaW1hZ2VQYXRoID0gdGhpcy51dGlsc1NlcnZpY2UuZG9jdW1lbnRzUGF0aChgcGhvdG8tJHtEYXRlLm5vdygpfS5wbmdgKTtcbiAgICAgICAgaW1nc3JjLnNhdmVUb0ZpbGUodGhpcy5pbWFnZVBhdGgsIGVudW1zLkltYWdlRm9ybWF0LnBuZyk7ICAgICAgIFxufVxuXG5cbmVkaXRHaWZ0KGlkOiBzdHJpbmcpe1xuICBpZih0aGlzLmltYWdlKXtcbiAgICAvL3VwbG9hZCB0aGUgZmlsZSwgdGhlbiBzYXZlIGFsbFxuICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLnVwbG9hZEZpbGUodGhpcy5pbWFnZVBhdGgpLnRoZW4oKHVwbG9hZGVkRmlsZTogYW55KSA9PiB7XG4gICAgICAgICAgdGhpcy51cGxvYWRlZEltYWdlTmFtZSA9IHVwbG9hZGVkRmlsZS5uYW1lO1xuICAgICAgICAgIC8vZ2V0IGRvd25sb2FkVVJMIGFuZCBzdG9yZSBpdCBhcyBhIGZ1bGwgcGF0aDtcbiAgICAgICAgICB0aGlzLmZpcmViYXNlU2VydmljZS5nZXREb3dubG9hZFVybCh0aGlzLnVwbG9hZGVkSW1hZ2VOYW1lKS50aGVuKChkb3dubG9hZFVybDogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZpcmViYXNlU2VydmljZS5lZGl0R2lmdChpZCx0aGlzLmRlc2NyaXB0aW9uLGRvd25sb2FkVXJsKS50aGVuKChyZXN1bHQ6YW55KSA9PiB7XG4gICAgICAgICAgICAgIGFsZXJ0KHJlc3VsdClcbiAgICAgICAgICAgIH0sIChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgYWxlcnQoZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgfSwgKGVycm9yOiBhbnkpID0+IHtcbiAgICAgICAgICBhbGVydCgnRmlsZSB1cGxvYWQgZXJyb3I6ICcgKyBlcnJvcik7XG4gICAgICAgIH0pO1xuICB9XG4gIGVsc2Uge1xuICAgIC8vanVzdCBlZGl0IHRoZSBkZXNjcmlwdGlvblxuICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmVkaXREZXNjcmlwdGlvbihpZCx0aGlzLmRlc2NyaXB0aW9uKS50aGVuKChyZXN1bHQ6YW55KSA9PiB7XG4gICAgICAgIGFsZXJ0KHJlc3VsdClcbiAgICB9LCAoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICBhbGVydChlcnJvcik7XG4gICAgfSk7XG4gIH0gICAgXG59XG5cbn0iXX0=