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
var backend_service_1 = require("./backend.service");
var firebase = require("nativescript-plugin-firebase");
var Observable_1 = require("rxjs/Observable");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var utils_service_1 = require("./utils.service");
require("rxjs/add/operator/share");
var FirebaseService = (function () {
    function FirebaseService(ngZone, utils) {
        this.ngZone = ngZone;
        this.utils = utils;
        this.items = new BehaviorSubject_1.BehaviorSubject([]);
        this._allItems = [];
        this._allusersnames = [];
    }
    FirebaseService.prototype.register = function (user) {
        return firebase.createUser({
            email: user.email,
            password: user.password
        }).then(function (result) {
            console.log('register user function ' + JSON.stringify(result));
            return JSON.stringify(result);
        }, function (errorMessage) {
            alert(errorMessage);
        });
    };
    FirebaseService.prototype.login = function (user) {
        return firebase.login({
            type: firebase.LoginType.PASSWORD,
            email: user.email,
            password: user.password
        }).then(function (result) {
            backend_service_1.BackendService.token = result.uid;
            backend_service_1.BackendService.email = result.email;
            return JSON.stringify(result);
        }, function (errorMessage) {
            alert(errorMessage);
        });
    };
    FirebaseService.prototype.logout = function () {
        backend_service_1.BackendService.token = "";
        backend_service_1.BackendService.email = "";
        firebase.logout();
    };
    FirebaseService.prototype.resetPassword = function (email) {
        return firebase.resetPassword({
            email: email
        }).then(function (result) {
            alert(JSON.stringify(result));
        }, function (errorMessage) {
            alert(errorMessage);
        }).catch(this.handleErrors);
    };
    FirebaseService.prototype.getMyWishList = function () {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            var path = 'Gifts';
            var onValueEvent = function (snapshot) {
                _this.ngZone.run(function () {
                    var results = _this.handleSnapshot(snapshot.value);
                    console.log(JSON.stringify(results));
                    observer.next(results);
                });
            };
            firebase.addValueEventListener(onValueEvent, "/" + path);
        }).share();
    };
    FirebaseService.prototype.getMyGift = function (id) {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            observer.next(_this._allItems.filter(function (s) { return s.id === id; })[0]);
        }).share();
    };
    FirebaseService.prototype.getMyMessage = function () {
        return new Observable_1.Observable(function (observer) {
            firebase.getRemoteConfig({
                developerMode: false,
                cacheExpirationSeconds: 300,
                properties: [{
                        key: "message",
                        default: "Happy Holidays!"
                    }]
            }).then(function (result) {
                console.log("Fetched at " + result.lastFetch + (result.throttled ? " (throttled)" : ""));
                for (var entry in result.properties) {
                    observer.next(result.properties[entry]);
                }
            });
        }).share();
    };
    FirebaseService.prototype.handleUserNamesSnapshot = function (data) {
        this._allusersnames = [];
        if (data) {
            for (var id in data) {
                var result = Object.assign({ id: id }, data[id]);
                if (backend_service_1.BackendService.email != result.email) {
                    this._allusersnames.push(result);
                }
            }
        }
        return this._allusersnames;
    };
    FirebaseService.prototype.handleSnapshot = function (data) {
        this._allItems = [];
        if (data) {
            for (var id in data) {
                var result = Object.assign({ id: id }, data[id]);
                if (backend_service_1.BackendService.token === result.UID) {
                    this._allItems.push(result);
                }
            }
            this.publishUpdates();
        }
        return this._allItems;
    };
    FirebaseService.prototype.publishUpdates = function () {
        this._allItems.sort(function (a, b) {
            if (a.date < b.date)
                return -1;
            if (a.date > b.date)
                return 1;
            return 0;
        });
        this.items.next(this._allItems.slice());
    };
    FirebaseService.prototype.add = function (gift) {
        return firebase.push("/Gifts", { "name": gift, "UID": backend_service_1.BackendService.token, "date": 0 - Date.now(), "imagepath": "" }).then(function (result) {
            return 'Gift added to your wishlist!';
        }, function (errorMessage) {
            console.log(errorMessage);
        });
    };
    FirebaseService.prototype.createuserrecord = function (user) {
        console.log('create user function ' + user.email);
        return firebase.push("/RegisteredUsers", { "email": user.email, "date": 0 - Date.now() }).then(function (result) {
            console.log('create user result ' + JSON.stringify(result));
            return JSON.stringify(result);
        }, function (errorMessage) {
            console.log(errorMessage);
        });
    };
    FirebaseService.prototype.getUserList = function () {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            var path = 'RegisteredUsers';
            var onValueEvent = function (snapshot) {
                _this.ngZone.run(function () {
                    var results = _this.handleUserNamesSnapshot(snapshot.value);
                    console.log(JSON.stringify(results));
                    observer.next(results);
                });
            };
            firebase.addValueEventListener(onValueEvent, "/" + path);
        }).share();
    };
    FirebaseService.prototype.editGift = function (id, description, imagepath) {
        this.publishUpdates();
        return firebase.update("/Gifts/" + id + "", {
            description: description,
            imagepath: imagepath
        })
            .then(function (result) {
            return 'You have successfully edited this gift!';
        }, function (errorMessage) {
            console.log(errorMessage);
        });
    };
    FirebaseService.prototype.editDescription = function (id, description) {
        this.publishUpdates();
        return firebase.update("/Gifts/" + id + "", {
            description: description
        })
            .then(function (result) {
            return 'You have successfully edited the description!';
        }, function (errorMessage) {
            console.log(errorMessage);
        });
    };
    FirebaseService.prototype.delete = function (gift) {
        return firebase.remove("/Gifts/" + gift.id + "")
            .catch(this.handleErrors);
    };
    FirebaseService.prototype.uploadFile = function (localPath, file) {
        var filename = this.utils.getFilename(localPath);
        var remotePath = "" + filename;
        return firebase.uploadFile({
            remoteFullPath: remotePath,
            localFullPath: localPath,
            onProgress: function (status) {
                console.log("Uploaded fraction: " + status.fractionCompleted);
                console.log("Percentage complete: " + status.percentageCompleted);
            }
        });
    };
    FirebaseService.prototype.getDownloadUrl = function (remoteFilePath) {
        return firebase.getDownloadUrl({
            remoteFullPath: remoteFilePath
        })
            .then(function (url) {
            return url;
        }, function (errorMessage) {
            console.log(errorMessage);
        });
    };
    FirebaseService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error));
        return Promise.reject(error.message);
    };
    return FirebaseService;
}());
FirebaseService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [core_1.NgZone,
        utils_service_1.UtilsService])
], FirebaseService);
exports.FirebaseService = FirebaseService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZWJhc2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpcmViYXNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBaUQ7QUFFakQscURBQW1EO0FBQ25ELHVEQUEwRDtBQUMxRCw4Q0FBMkM7QUFDM0Msd0RBQXFEO0FBQ3JELGlEQUE2QztBQUM3QyxtQ0FBaUM7QUFHakMsSUFBYSxlQUFlO0lBQzFCLHlCQUNVLE1BQWMsRUFDZCxLQUFtQjtRQURuQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsVUFBSyxHQUFMLEtBQUssQ0FBYztRQUc3QixVQUFLLEdBQWlDLElBQUksaUNBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUV0RCxjQUFTLEdBQWdCLEVBQUUsQ0FBQztRQUM1QixtQkFBYyxHQUFvQixFQUFFLENBQUM7SUFMM0MsQ0FBQztJQU9ILGtDQUFRLEdBQVIsVUFBUyxJQUFVO1FBRWpCLE1BQU0sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDO1lBQ3pCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDeEIsQ0FBQyxDQUFDLElBQUksQ0FDSCxVQUFVLE1BQVc7WUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDaEUsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEMsQ0FBQyxFQUNELFVBQVUsWUFBZ0I7WUFDeEIsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3RCLENBQUMsQ0FDSixDQUFBO0lBQ0wsQ0FBQztJQUVELCtCQUFLLEdBQUwsVUFBTSxJQUFVO1FBQ2QsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDcEIsSUFBSSxFQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUTtZQUNqQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQ3hCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFXO1lBQ2hCLGdDQUFjLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDbEMsZ0NBQWMsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsQyxDQUFDLEVBQUUsVUFBQyxZQUFpQjtZQUNuQixLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsZ0NBQU0sR0FBTjtRQUNJLGdDQUFjLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUMxQixnQ0FBYyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFFNUIsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCx1Q0FBYSxHQUFiLFVBQWMsS0FBSztRQUNqQixNQUFNLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQztZQUM5QixLQUFLLEVBQUUsS0FBSztTQUNYLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFXO1lBQ2QsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNoQyxDQUFDLEVBQ0QsVUFBVSxZQUFnQjtZQUN4QixLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDdEIsQ0FBQyxDQUNKLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsdUNBQWEsR0FBYjtRQUFBLGlCQWFDO1FBWkMsTUFBTSxDQUFDLElBQUksdUJBQVUsQ0FBQyxVQUFDLFFBQWE7WUFDbEMsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDO1lBRWpCLElBQUksWUFBWSxHQUFHLFVBQUMsUUFBYTtnQkFDL0IsS0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7b0JBQ2QsSUFBSSxPQUFPLEdBQUcsS0FBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBO29CQUNuQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUMxQixDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQztZQUNGLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZLEVBQUUsTUFBSSxJQUFNLENBQUMsQ0FBQztRQUM3RCxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFFRCxtQ0FBUyxHQUFULFVBQVUsRUFBVTtRQUFwQixpQkFJQztRQUhDLE1BQU0sQ0FBQyxJQUFJLHVCQUFVLENBQUMsVUFBQyxRQUFhO1lBQ2xDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBWCxDQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVELENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUVELHNDQUFZLEdBQVo7UUFDRSxNQUFNLENBQUMsSUFBSSx1QkFBVSxDQUFDLFVBQUMsUUFBWTtZQUNqQyxRQUFRLENBQUMsZUFBZSxDQUFDO2dCQUN6QixhQUFhLEVBQUUsS0FBSztnQkFDcEIsc0JBQXNCLEVBQUUsR0FBRztnQkFDM0IsVUFBVSxFQUFFLENBQUM7d0JBQ2IsR0FBRyxFQUFFLFNBQVM7d0JBQ2QsT0FBTyxFQUFFLGlCQUFpQjtxQkFDM0IsQ0FBQzthQUNILENBQUMsQ0FBQyxJQUFJLENBQ0QsVUFBVSxNQUFNO2dCQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxTQUFTLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLGNBQWMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN6RixHQUFHLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDLENBQ2xDLENBQUM7b0JBQ0MsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQzFDLENBQUM7WUFDTCxDQUFDLENBQ0osQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUVDLGlEQUF1QixHQUF2QixVQUF3QixJQUFTO1FBRTdCLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDUCxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNsQixJQUFJLE1BQU0sR0FBUyxNQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN4RCxFQUFFLENBQUMsQ0FBQyxnQ0FBYyxDQUFDLEtBQUssSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDdkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3JDLENBQUM7WUFFTCxDQUFDO1FBRUwsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQy9CLENBQUM7SUFHRCx3Q0FBYyxHQUFkLFVBQWUsSUFBUztRQUV0QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNwQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ1QsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDcEIsSUFBSSxNQUFNLEdBQVMsTUFBTyxDQUFDLE1BQU0sQ0FBQyxFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDdEQsRUFBRSxDQUFBLENBQUMsZ0NBQWMsQ0FBQyxLQUFLLEtBQUssTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBLENBQUM7b0JBQ3RDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUM5QixDQUFDO1lBQ0gsQ0FBQztZQUNELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUVBLHdDQUFjLEdBQWQ7UUFFQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFTLENBQUMsRUFBRSxDQUFDO1lBQzdCLEVBQUUsQ0FBQSxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsRUFBRSxDQUFBLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDL0IsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUssSUFBSSxDQUFDLFNBQVMsU0FBRSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCw2QkFBRyxHQUFILFVBQUksSUFBWTtRQUNkLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNoQixRQUFRLEVBQ1IsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxnQ0FBYyxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFDLENBQ3RGLENBQUMsSUFBSSxDQUNKLFVBQVUsTUFBVTtZQUNsQixNQUFNLENBQUMsOEJBQThCLENBQUM7UUFDeEMsQ0FBQyxFQUNELFVBQVUsWUFBZ0I7WUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztJQUNULENBQUM7SUFDRCwwQ0FBZ0IsR0FBaEIsVUFBaUIsSUFBVTtRQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsRCxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDaEIsa0JBQWtCLEVBQ2xCLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUcsTUFBTSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FDbkQsQ0FBQyxJQUFJLENBQ0YsVUFBVSxNQUFXO1lBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQzVELE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xDLENBQUMsRUFDRCxVQUFVLFlBQWlCO1lBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ0QscUNBQVcsR0FBWDtRQUFBLGlCQWFDO1FBWkcsTUFBTSxDQUFDLElBQUksdUJBQVUsQ0FBQyxVQUFDLFFBQWE7WUFDaEMsSUFBSSxJQUFJLEdBQUcsaUJBQWlCLENBQUM7WUFFN0IsSUFBSSxZQUFZLEdBQUcsVUFBQyxRQUFhO2dCQUM3QixLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztvQkFDWixJQUFJLE9BQU8sR0FBRyxLQUFJLENBQUMsdUJBQXVCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUMzRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtvQkFDcEMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDM0IsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUM7WUFDRixRQUFRLENBQUMscUJBQXFCLENBQUMsWUFBWSxFQUFFLE1BQUksSUFBTSxDQUFDLENBQUM7UUFDN0QsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDZixDQUFDO0lBR0Qsa0NBQVEsR0FBUixVQUFTLEVBQVMsRUFBRSxXQUFtQixFQUFFLFNBQWlCO1FBQ3hELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUMsRUFBRSxHQUFDLEVBQUUsRUFBQztZQUNuQyxXQUFXLEVBQUUsV0FBVztZQUN4QixTQUFTLEVBQUUsU0FBUztTQUFDLENBQUM7YUFDdkIsSUFBSSxDQUNILFVBQVUsTUFBVTtZQUNsQixNQUFNLENBQUMseUNBQXlDLENBQUM7UUFDbkQsQ0FBQyxFQUNELFVBQVUsWUFBZ0I7WUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztJQUNULENBQUM7SUFDRCx5Q0FBZSxHQUFmLFVBQWdCLEVBQVMsRUFBRSxXQUFtQjtRQUM1QyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFDLEVBQUUsR0FBQyxFQUFFLEVBQUM7WUFDbkMsV0FBVyxFQUFFLFdBQVc7U0FBQyxDQUFDO2FBQzNCLElBQUksQ0FDSCxVQUFVLE1BQVU7WUFDbEIsTUFBTSxDQUFDLCtDQUErQyxDQUFDO1FBQ3pELENBQUMsRUFDRCxVQUFVLFlBQWdCO1lBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7SUFDVCxDQUFDO0lBQ0QsZ0NBQU0sR0FBTixVQUFPLElBQVU7UUFDZixNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUMsSUFBSSxDQUFDLEVBQUUsR0FBQyxFQUFFLENBQUM7YUFDekMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsb0NBQVUsR0FBVixVQUFXLFNBQWlCLEVBQUUsSUFBVTtRQUNwQyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNqRCxJQUFJLFVBQVUsR0FBRyxLQUFHLFFBQVUsQ0FBQztRQUMvQixNQUFNLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztZQUN6QixjQUFjLEVBQUUsVUFBVTtZQUMxQixhQUFhLEVBQUUsU0FBUztZQUN4QixVQUFVLEVBQUUsVUFBUyxNQUFNO2dCQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixHQUFHLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2dCQUM5RCxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixHQUFHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ3RFLENBQUM7U0FDRixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsd0NBQWMsR0FBZCxVQUFlLGNBQXNCO1FBQ2pDLE1BQU0sQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDO1lBQzdCLGNBQWMsRUFBRSxjQUFjO1NBQUMsQ0FBQzthQUNqQyxJQUFJLENBQ0gsVUFBVSxHQUFVO1lBQ2xCLE1BQU0sQ0FBQyxHQUFHLENBQUM7UUFDYixDQUFDLEVBQ0QsVUFBVSxZQUFnQjtZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVDLHNDQUFZLEdBQVosVUFBYSxLQUFLO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ25DLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBclBELElBcVBDO0FBclBZLGVBQWU7SUFEM0IsaUJBQVUsRUFBRTtxQ0FHTyxhQUFNO1FBQ1AsNEJBQVk7R0FIbEIsZUFBZSxDQXFQM0I7QUFyUFksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGUsIE5nWm9uZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFVzZXIsIEdpZnQsIFVzZXJOYW1lfSBmcm9tIFwiLi4vbW9kZWxzXCI7XG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gXCIuL2JhY2tlbmQuc2VydmljZVwiO1xuaW1wb3J0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdH0gZnJvbSAncnhqcy9CZWhhdmlvclN1YmplY3QnO1xuaW1wb3J0IHtVdGlsc1NlcnZpY2V9IGZyb20gJy4vdXRpbHMuc2VydmljZSc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3NoYXJlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpcmViYXNlU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSB1dGlsczogVXRpbHNTZXJ2aWNlXG4gICl7fVxuICAgIFxuICBpdGVtczogQmVoYXZpb3JTdWJqZWN0PEFycmF5PEdpZnQ+PiA9IG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xuICBcbiAgcHJpdmF0ZSBfYWxsSXRlbXM6IEFycmF5PEdpZnQ+ID0gW107XG4gIHByaXZhdGUgX2FsbHVzZXJzbmFtZXM6IEFycmF5PFVzZXJOYW1lPiA9IFtdO1xuXG4gIHJlZ2lzdGVyKHVzZXI6IFVzZXIpIHtcbiAgICAgXG4gICAgcmV0dXJuIGZpcmViYXNlLmNyZWF0ZVVzZXIoe1xuICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICBwYXNzd29yZDogdXNlci5wYXNzd29yZFxuICAgIH0pLnRoZW4oXG4gICAgICAgIGZ1bmN0aW9uIChyZXN1bHQ6IGFueSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlZ2lzdGVyIHVzZXIgZnVuY3Rpb24gJyArIEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xuICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHJlc3VsdCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlOmFueSkge1xuICAgICAgICAgICAgYWxlcnQoZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgICB9XG4gICAgICApXG4gIH1cblxuICBsb2dpbih1c2VyOiBVc2VyKSB7XG4gICAgcmV0dXJuIGZpcmViYXNlLmxvZ2luKHtcbiAgICAgIHR5cGU6IGZpcmViYXNlLkxvZ2luVHlwZS5QQVNTV09SRCxcbiAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgcGFzc3dvcmQ6IHVzZXIucGFzc3dvcmRcbiAgICB9KS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgICBCYWNrZW5kU2VydmljZS50b2tlbiA9IHJlc3VsdC51aWQ7XG4gICAgICAgIEJhY2tlbmRTZXJ2aWNlLmVtYWlsID0gcmVzdWx0LmVtYWlsO1xuICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShyZXN1bHQpO1xuICAgICAgfSwgKGVycm9yTWVzc2FnZTogYW55KSA9PiB7XG4gICAgICAgIGFsZXJ0KGVycm9yTWVzc2FnZSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGxvZ291dCgpe1xuICAgICAgQmFja2VuZFNlcnZpY2UudG9rZW4gPSBcIlwiO1xuICAgICAgQmFja2VuZFNlcnZpY2UuZW1haWwgPSBcIlwiO1xuXG4gICAgZmlyZWJhc2UubG9nb3V0KCk7ICAgIFxuICB9XG4gIFxuICByZXNldFBhc3N3b3JkKGVtYWlsKSB7XG4gICAgcmV0dXJuIGZpcmViYXNlLnJlc2V0UGFzc3dvcmQoe1xuICAgIGVtYWlsOiBlbWFpbFxuICAgIH0pLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICAgICAgYWxlcnQoSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XG4gICAgICAgIH0sXG4gICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2U6YW55KSB7XG4gICAgICAgICAgYWxlcnQoZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICkuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xuICB9XG5cbiAgZ2V0TXlXaXNoTGlzdCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IGFueSkgPT4ge1xuICAgICAgbGV0IHBhdGggPSAnR2lmdHMnO1xuICAgICAgXG4gICAgICAgIGxldCBvblZhbHVlRXZlbnQgPSAoc25hcHNob3Q6IGFueSkgPT4ge1xuICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0cyA9IHRoaXMuaGFuZGxlU25hcHNob3Qoc25hcHNob3QudmFsdWUpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzdWx0cykpXG4gICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXN1bHRzKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgZmlyZWJhc2UuYWRkVmFsdWVFdmVudExpc3RlbmVyKG9uVmFsdWVFdmVudCwgYC8ke3BhdGh9YCk7XG4gICAgfSkuc2hhcmUoKTsgICAgICAgICAgICAgIFxuICB9XG5cbiAgZ2V0TXlHaWZ0KGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IGFueSkgPT4ge1xuICAgICAgb2JzZXJ2ZXIubmV4dCh0aGlzLl9hbGxJdGVtcy5maWx0ZXIocyA9PiBzLmlkID09PSBpZClbMF0pO1xuICAgIH0pLnNoYXJlKCk7XG4gIH1cblxuICBnZXRNeU1lc3NhZ2UoKTogT2JzZXJ2YWJsZTxhbnk+e1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6YW55KSA9PiB7XG4gICAgICBmaXJlYmFzZS5nZXRSZW1vdGVDb25maWcoe1xuICAgICAgZGV2ZWxvcGVyTW9kZTogZmFsc2UsIC8vIHBsYXkgd2l0aCB0aGlzIGJvb2xlYW4gdG8gZ2V0IG1vcmUgZnJlcXVlbnQgdXBkYXRlcyBkdXJpbmcgZGV2ZWxvcG1lbnRcbiAgICAgIGNhY2hlRXhwaXJhdGlvblNlY29uZHM6IDMwMCwgLy8gMTAgbWludXRlcywgZGVmYXVsdCBpcyAxMiBob3Vycy4uIHNldCB0byBhIGxvd2VyIHZhbHVlIGR1cmluZyBkZXZcbiAgICAgIHByb3BlcnRpZXM6IFt7XG4gICAgICBrZXk6IFwibWVzc2FnZVwiLFxuICAgICAgZGVmYXVsdDogXCJIYXBweSBIb2xpZGF5cyFcIlxuICAgIH1dXG4gIH0pLnRoZW4oXG4gICAgICAgIGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkZldGNoZWQgYXQgXCIgKyByZXN1bHQubGFzdEZldGNoICsgKHJlc3VsdC50aHJvdHRsZWQgPyBcIiAodGhyb3R0bGVkKVwiIDogXCJcIikpO1xuICAgICAgICAgIGZvciAobGV0IGVudHJ5IGluIHJlc3VsdC5wcm9wZXJ0aWVzKSBcbiAgICAgICAgICAgIHsgXG4gICAgICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzdWx0LnByb3BlcnRpZXNbZW50cnldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICk7XG4gIH0pLnNoYXJlKCk7XG59XG5cbiAgaGFuZGxlVXNlck5hbWVzU25hcHNob3QoZGF0YTogYW55KSB7XG4gICAgICAvL2VtcHR5IGFycmF5LCB0aGVuIHJlZmlsbCBhbmQgZmlsdGVyXG4gICAgICB0aGlzLl9hbGx1c2Vyc25hbWVzID0gW107XG4gICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgIGZvciAobGV0IGlkIGluIGRhdGEpIHtcbiAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9ICg8YW55Pk9iamVjdCkuYXNzaWduKHsgaWQ6IGlkIH0sIGRhdGFbaWRdKTtcbiAgICAgICAgICAgICAgaWYgKEJhY2tlbmRTZXJ2aWNlLmVtYWlsICE9IHJlc3VsdC5lbWFpbCkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5fYWxsdXNlcnNuYW1lcy5wdXNoKHJlc3VsdCk7XG4gICAgICAgICAgICAgIH0gIFxuICAgICAgICAgICAgIFxuICAgICAgICAgIH1cbiAgICAgICAgIC8vIHRoaXMucHVibGlzaFVwZGF0ZXMoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLl9hbGx1c2Vyc25hbWVzO1xuICB9XG4gXG5cbiAgaGFuZGxlU25hcHNob3QoZGF0YTogYW55KSB7XG4gICAgLy9lbXB0eSBhcnJheSwgdGhlbiByZWZpbGwgYW5kIGZpbHRlclxuICAgIHRoaXMuX2FsbEl0ZW1zID0gW107XG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIGZvciAobGV0IGlkIGluIGRhdGEpIHsgICAgICAgIFxuICAgICAgICBsZXQgcmVzdWx0ID0gKDxhbnk+T2JqZWN0KS5hc3NpZ24oe2lkOiBpZH0sIGRhdGFbaWRdKTtcbiAgICAgICAgaWYoQmFja2VuZFNlcnZpY2UudG9rZW4gPT09IHJlc3VsdC5VSUQpe1xuICAgICAgICAgIHRoaXMuX2FsbEl0ZW1zLnB1c2gocmVzdWx0KTtcbiAgICAgICAgfSAgICAgICAgXG4gICAgICB9XG4gICAgICB0aGlzLnB1Ymxpc2hVcGRhdGVzKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9hbGxJdGVtcztcbiAgfVxuXG4gICBwdWJsaXNoVXBkYXRlcygpIHtcbiAgICAvLyBoZXJlLCB3ZSBzb3J0IG11c3QgZW1pdCBhICpuZXcqIHZhbHVlIChpbW11dGFiaWxpdHkhKVxuICAgIHRoaXMuX2FsbEl0ZW1zLnNvcnQoZnVuY3Rpb24oYSwgYil7XG4gICAgICAgIGlmKGEuZGF0ZSA8IGIuZGF0ZSkgcmV0dXJuIC0xO1xuICAgICAgICBpZihhLmRhdGUgPiBiLmRhdGUpIHJldHVybiAxO1xuICAgICAgcmV0dXJuIDA7XG4gICAgfSlcbiAgICB0aGlzLml0ZW1zLm5leHQoWy4uLnRoaXMuX2FsbEl0ZW1zXSk7XG4gIH1cblxuICBhZGQoZ2lmdDogc3RyaW5nKSB7ICAgXG4gICAgcmV0dXJuIGZpcmViYXNlLnB1c2goXG4gICAgICAgIFwiL0dpZnRzXCIsXG4gICAgICAgIHsgXCJuYW1lXCI6IGdpZnQsIFwiVUlEXCI6IEJhY2tlbmRTZXJ2aWNlLnRva2VuLCBcImRhdGVcIjogMCAtIERhdGUubm93KCksIFwiaW1hZ2VwYXRoXCI6IFwiXCJ9XG4gICAgICApLnRoZW4oXG4gICAgICAgIGZ1bmN0aW9uIChyZXN1bHQ6YW55KSB7XG4gICAgICAgICAgcmV0dXJuICdHaWZ0IGFkZGVkIHRvIHlvdXIgd2lzaGxpc3QhJztcbiAgICAgICAgfSxcbiAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZTphbnkpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvck1lc3NhZ2UpO1xuICAgICAgICB9KTsgXG4gIH1cbiAgY3JlYXRldXNlcnJlY29yZCh1c2VyOiBVc2VyKSB7XG4gICAgICBjb25zb2xlLmxvZygnY3JlYXRlIHVzZXIgZnVuY3Rpb24gJyArIHVzZXIuZW1haWwpO1xuICAgICAgcmV0dXJuIGZpcmViYXNlLnB1c2goXG4gICAgICAgICAgXCIvUmVnaXN0ZXJlZFVzZXJzXCIsXG4gICAgICAgICAgeyBcImVtYWlsXCI6IHVzZXIuZW1haWwsICBcImRhdGVcIjogMCAtIERhdGUubm93KCkgfVxuICAgICAgKS50aGVuKFxuICAgICAgICAgIGZ1bmN0aW9uIChyZXN1bHQ6IGFueSkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY3JlYXRlIHVzZXIgcmVzdWx0ICcgKyBKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcbiAgICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHJlc3VsdCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlOiBhbnkpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgICB9KTtcbiAgfVxuICBnZXRVc2VyTGlzdCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogYW55KSA9PiB7XG4gICAgICAgICAgbGV0IHBhdGggPSAnUmVnaXN0ZXJlZFVzZXJzJztcblxuICAgICAgICAgIGxldCBvblZhbHVlRXZlbnQgPSAoc25hcHNob3Q6IGFueSkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdHMgPSB0aGlzLmhhbmRsZVVzZXJOYW1lc1NuYXBzaG90KHNuYXBzaG90LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3VsdHMpKSAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlc3VsdHMpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIGZpcmViYXNlLmFkZFZhbHVlRXZlbnRMaXN0ZW5lcihvblZhbHVlRXZlbnQsIGAvJHtwYXRofWApO1xuICAgICAgfSkuc2hhcmUoKTtcbiAgfVxuXG5cbiAgZWRpdEdpZnQoaWQ6c3RyaW5nLCBkZXNjcmlwdGlvbjogc3RyaW5nLCBpbWFnZXBhdGg6IHN0cmluZyl7XG4gICAgdGhpcy5wdWJsaXNoVXBkYXRlcygpO1xuICAgIHJldHVybiBmaXJlYmFzZS51cGRhdGUoXCIvR2lmdHMvXCIraWQrXCJcIix7XG4gICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbiwgXG4gICAgICAgIGltYWdlcGF0aDogaW1hZ2VwYXRofSlcbiAgICAgIC50aGVuKFxuICAgICAgICBmdW5jdGlvbiAocmVzdWx0OmFueSkge1xuICAgICAgICAgIHJldHVybiAnWW91IGhhdmUgc3VjY2Vzc2Z1bGx5IGVkaXRlZCB0aGlzIGdpZnQhJztcbiAgICAgICAgfSxcbiAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZTphbnkpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvck1lc3NhZ2UpO1xuICAgICAgICB9KTsgIFxuICB9XG4gIGVkaXREZXNjcmlwdGlvbihpZDpzdHJpbmcsIGRlc2NyaXB0aW9uOiBzdHJpbmcpe1xuICAgIHRoaXMucHVibGlzaFVwZGF0ZXMoKTtcbiAgICByZXR1cm4gZmlyZWJhc2UudXBkYXRlKFwiL0dpZnRzL1wiK2lkK1wiXCIse1xuICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb259KVxuICAgICAgLnRoZW4oXG4gICAgICAgIGZ1bmN0aW9uIChyZXN1bHQ6YW55KSB7XG4gICAgICAgICAgcmV0dXJuICdZb3UgaGF2ZSBzdWNjZXNzZnVsbHkgZWRpdGVkIHRoZSBkZXNjcmlwdGlvbiEnO1xuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlOmFueSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XG4gICAgICAgIH0pOyAgXG4gIH1cbiAgZGVsZXRlKGdpZnQ6IEdpZnQpIHtcbiAgICByZXR1cm4gZmlyZWJhc2UucmVtb3ZlKFwiL0dpZnRzL1wiK2dpZnQuaWQrXCJcIilcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XG4gIH1cbiAgXG4gIHVwbG9hZEZpbGUobG9jYWxQYXRoOiBzdHJpbmcsIGZpbGU/OiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgICAgbGV0IGZpbGVuYW1lID0gdGhpcy51dGlscy5nZXRGaWxlbmFtZShsb2NhbFBhdGgpO1xuICAgICAgbGV0IHJlbW90ZVBhdGggPSBgJHtmaWxlbmFtZX1gOyAgIFxuICAgICAgcmV0dXJuIGZpcmViYXNlLnVwbG9hZEZpbGUoe1xuICAgICAgICByZW1vdGVGdWxsUGF0aDogcmVtb3RlUGF0aCxcbiAgICAgICAgbG9jYWxGdWxsUGF0aDogbG9jYWxQYXRoLFxuICAgICAgICBvblByb2dyZXNzOiBmdW5jdGlvbihzdGF0dXMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVXBsb2FkZWQgZnJhY3Rpb246IFwiICsgc3RhdHVzLmZyYWN0aW9uQ29tcGxldGVkKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGVyY2VudGFnZSBjb21wbGV0ZTogXCIgKyBzdGF0dXMucGVyY2VudGFnZUNvbXBsZXRlZCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgZ2V0RG93bmxvYWRVcmwocmVtb3RlRmlsZVBhdGg6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgICByZXR1cm4gZmlyZWJhc2UuZ2V0RG93bmxvYWRVcmwoe1xuICAgICAgICByZW1vdGVGdWxsUGF0aDogcmVtb3RlRmlsZVBhdGh9KVxuICAgICAgLnRoZW4oXG4gICAgICAgIGZ1bmN0aW9uICh1cmw6c3RyaW5nKSB7XG4gICAgICAgICAgcmV0dXJuIHVybDtcbiAgICAgICAgfSxcbiAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZTphbnkpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvck1lc3NhZ2UpO1xuICAgICAgICB9KTtcbn1cblxuICBoYW5kbGVFcnJvcnMoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvcikpO1xuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvci5tZXNzYWdlKTtcbiAgfVxufSJdfQ==