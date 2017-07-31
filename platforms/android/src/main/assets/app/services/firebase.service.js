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
var Subject_1 = require("rxjs/Subject");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var utils_service_1 = require("./utils.service");
require("rxjs/add/operator/share");
var FirebaseService = (function () {
    function FirebaseService(ngZone, utils) {
        this.ngZone = ngZone;
        this.utils = utils;
        this.items = new BehaviorSubject_1.BehaviorSubject([]);
        this.isloggedin = new Subject_1.Subject();
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
        var _this = this;
        return firebase.login({
            type: firebase.LoginType.PASSWORD,
            email: user.email,
            password: user.password
        }).then(function (result) {
            backend_service_1.BackendService.token = result.uid;
            backend_service_1.BackendService.email = result.email;
            _this.isloggedin.next(true);
            return JSON.stringify(result);
        }, function (errorMessage) {
            alert(errorMessage);
        });
    };
    FirebaseService.prototype.logout = function () {
        backend_service_1.BackendService.token = "";
        backend_service_1.BackendService.email = "";
        this.isloggedin.next(false);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZWJhc2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpcmViYXNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBaUQ7QUFFakQscURBQW1EO0FBQ25ELHVEQUEwRDtBQUMxRCw4Q0FBMkM7QUFDM0Msd0NBQXFDO0FBQ3JDLHdEQUFxRDtBQUNyRCxpREFBNkM7QUFDN0MsbUNBQWlDO0FBR2pDLElBQWEsZUFBZTtJQUMxQix5QkFDVSxNQUFjLEVBQ2QsS0FBbUI7UUFEbkIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFVBQUssR0FBTCxLQUFLLENBQWM7UUFHN0IsVUFBSyxHQUFpQyxJQUFJLGlDQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDNUQsZUFBVSxHQUFxQixJQUFJLGlCQUFPLEVBQVcsQ0FBQztRQUNoRCxjQUFTLEdBQWdCLEVBQUUsQ0FBQztRQUM1QixtQkFBYyxHQUFvQixFQUFFLENBQUM7SUFMM0MsQ0FBQztJQU9ILGtDQUFRLEdBQVIsVUFBUyxJQUFVO1FBRWpCLE1BQU0sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDO1lBQ3pCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDeEIsQ0FBQyxDQUFDLElBQUksQ0FDSCxVQUFVLE1BQVc7WUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDaEUsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEMsQ0FBQyxFQUNELFVBQVUsWUFBZ0I7WUFDeEIsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3RCLENBQUMsQ0FDSixDQUFBO0lBQ0wsQ0FBQztJQUVELCtCQUFLLEdBQUwsVUFBTSxJQUFVO1FBQWhCLGlCQWFDO1FBWkMsTUFB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QUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVDLHNDQUFZLEdBQVosVUFBYSxLQUFLO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ25DLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBdFBELElBc1BDO0FBdFBZLGVBQWU7SUFEM0IsaUJBQVUsRUFBRTtxQ0FHTyxhQUFNO1FBQ1AsNEJBQVk7R0FIbEIsZUFBZSxDQXNQM0I7QUF0UFksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGUsIE5nWm9uZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFVzZXIsIEdpZnQsIFVzZXJOYW1lfSBmcm9tIFwiLi4vbW9kZWxzXCI7XG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gXCIuL2JhY2tlbmQuc2VydmljZVwiO1xuaW1wb3J0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQge1N1YmplY3R9IGZyb20gJ3J4anMvU3ViamVjdCc7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdH0gZnJvbSAncnhqcy9CZWhhdmlvclN1YmplY3QnO1xuaW1wb3J0IHtVdGlsc1NlcnZpY2V9IGZyb20gJy4vdXRpbHMuc2VydmljZSc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3NoYXJlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpcmViYXNlU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSB1dGlsczogVXRpbHNTZXJ2aWNlXG4gICl7fVxuICAgIFxuICBpdGVtczogQmVoYXZpb3JTdWJqZWN0PEFycmF5PEdpZnQ+PiA9IG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xuICAgIGlzbG9nZ2VkaW46IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICBwcml2YXRlIF9hbGxJdGVtczogQXJyYXk8R2lmdD4gPSBbXTtcbiAgcHJpdmF0ZSBfYWxsdXNlcnNuYW1lczogQXJyYXk8VXNlck5hbWU+ID0gW107XG5cbiAgcmVnaXN0ZXIodXNlcjogVXNlcikge1xuICAgICBcbiAgICByZXR1cm4gZmlyZWJhc2UuY3JlYXRlVXNlcih7XG4gICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgIHBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkXG4gICAgfSkudGhlbihcbiAgICAgICAgZnVuY3Rpb24gKHJlc3VsdDogYW55KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVnaXN0ZXIgdXNlciBmdW5jdGlvbiAnICsgSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XG4gICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkocmVzdWx0KTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2U6YW55KSB7XG4gICAgICAgICAgICBhbGVydChlcnJvck1lc3NhZ2UpO1xuICAgICAgICAgIH1cbiAgICAgIClcbiAgfVxuXG4gIGxvZ2luKHVzZXI6IFVzZXIpIHtcbiAgICByZXR1cm4gZmlyZWJhc2UubG9naW4oe1xuICAgICAgdHlwZTogZmlyZWJhc2UuTG9naW5UeXBlLlBBU1NXT1JELFxuICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICBwYXNzd29yZDogdXNlci5wYXNzd29yZFxuICAgIH0pLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICAgIEJhY2tlbmRTZXJ2aWNlLnRva2VuID0gcmVzdWx0LnVpZDtcbiAgICAgICAgQmFja2VuZFNlcnZpY2UuZW1haWwgPSByZXN1bHQuZW1haWw7XG4gICAgICAgIHRoaXMuaXNsb2dnZWRpbi5uZXh0KHRydWUpO1xuICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShyZXN1bHQpO1xuICAgICAgfSwgKGVycm9yTWVzc2FnZTogYW55KSA9PiB7XG4gICAgICAgIGFsZXJ0KGVycm9yTWVzc2FnZSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGxvZ291dCgpe1xuICAgICAgQmFja2VuZFNlcnZpY2UudG9rZW4gPSBcIlwiO1xuICAgICAgQmFja2VuZFNlcnZpY2UuZW1haWwgPSBcIlwiO1xuIHRoaXMuaXNsb2dnZWRpbi5uZXh0KGZhbHNlKTtcbiAgICBmaXJlYmFzZS5sb2dvdXQoKTsgICAgXG4gIH1cbiAgXG4gIHJlc2V0UGFzc3dvcmQoZW1haWwpIHtcbiAgICByZXR1cm4gZmlyZWJhc2UucmVzZXRQYXNzd29yZCh7XG4gICAgZW1haWw6IGVtYWlsXG4gICAgfSkudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgICAgICBhbGVydChKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcbiAgICAgICAgfSxcbiAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZTphbnkpIHtcbiAgICAgICAgICBhbGVydChlcnJvck1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgKS5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XG4gIH1cblxuICBnZXRNeVdpc2hMaXN0KCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogYW55KSA9PiB7XG4gICAgICBsZXQgcGF0aCA9ICdHaWZ0cyc7XG4gICAgICBcbiAgICAgICAgbGV0IG9uVmFsdWVFdmVudCA9IChzbmFwc2hvdDogYW55KSA9PiB7XG4gICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgIGxldCByZXN1bHRzID0gdGhpcy5oYW5kbGVTbmFwc2hvdChzbmFwc2hvdC52YWx1ZSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXN1bHRzKSlcbiAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlc3VsdHMpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBmaXJlYmFzZS5hZGRWYWx1ZUV2ZW50TGlzdGVuZXIob25WYWx1ZUV2ZW50LCBgLyR7cGF0aH1gKTtcbiAgICB9KS5zaGFyZSgpOyAgICAgICAgICAgICAgXG4gIH1cblxuICBnZXRNeUdpZnQoaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogYW55KSA9PiB7XG4gICAgICBvYnNlcnZlci5uZXh0KHRoaXMuX2FsbEl0ZW1zLmZpbHRlcihzID0+IHMuaWQgPT09IGlkKVswXSk7XG4gICAgfSkuc2hhcmUoKTtcbiAgfVxuXG4gIGdldE15TWVzc2FnZSgpOiBPYnNlcnZhYmxlPGFueT57XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjphbnkpID0+IHtcbiAgICAgIGZpcmViYXNlLmdldFJlbW90ZUNvbmZpZyh7XG4gICAgICBkZXZlbG9wZXJNb2RlOiBmYWxzZSwgLy8gcGxheSB3aXRoIHRoaXMgYm9vbGVhbiB0byBnZXQgbW9yZSBmcmVxdWVudCB1cGRhdGVzIGR1cmluZyBkZXZlbG9wbWVudFxuICAgICAgY2FjaGVFeHBpcmF0aW9uU2Vjb25kczogMzAwLCAvLyAxMCBtaW51dGVzLCBkZWZhdWx0IGlzIDEyIGhvdXJzLi4gc2V0IHRvIGEgbG93ZXIgdmFsdWUgZHVyaW5nIGRldlxuICAgICAgcHJvcGVydGllczogW3tcbiAgICAgIGtleTogXCJtZXNzYWdlXCIsXG4gICAgICBkZWZhdWx0OiBcIkhhcHB5IEhvbGlkYXlzIVwiXG4gICAgfV1cbiAgfSkudGhlbihcbiAgICAgICAgZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmV0Y2hlZCBhdCBcIiArIHJlc3VsdC5sYXN0RmV0Y2ggKyAocmVzdWx0LnRocm90dGxlZCA/IFwiICh0aHJvdHRsZWQpXCIgOiBcIlwiKSk7XG4gICAgICAgICAgZm9yIChsZXQgZW50cnkgaW4gcmVzdWx0LnByb3BlcnRpZXMpIFxuICAgICAgICAgICAgeyBcbiAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXN1bHQucHJvcGVydGllc1tlbnRyeV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgKTtcbiAgfSkuc2hhcmUoKTtcbn1cblxuICBoYW5kbGVVc2VyTmFtZXNTbmFwc2hvdChkYXRhOiBhbnkpIHtcbiAgICAgIC8vZW1wdHkgYXJyYXksIHRoZW4gcmVmaWxsIGFuZCBmaWx0ZXJcbiAgICAgIHRoaXMuX2FsbHVzZXJzbmFtZXMgPSBbXTtcbiAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgZm9yIChsZXQgaWQgaW4gZGF0YSkge1xuICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gKDxhbnk+T2JqZWN0KS5hc3NpZ24oeyBpZDogaWQgfSwgZGF0YVtpZF0pO1xuICAgICAgICAgICAgICBpZiAoQmFja2VuZFNlcnZpY2UuZW1haWwgIT0gcmVzdWx0LmVtYWlsKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLl9hbGx1c2Vyc25hbWVzLnB1c2gocmVzdWx0KTtcbiAgICAgICAgICAgICAgfSAgXG4gICAgICAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICAgLy8gdGhpcy5wdWJsaXNoVXBkYXRlcygpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuX2FsbHVzZXJzbmFtZXM7XG4gIH1cbiBcblxuICBoYW5kbGVTbmFwc2hvdChkYXRhOiBhbnkpIHtcbiAgICAvL2VtcHR5IGFycmF5LCB0aGVuIHJlZmlsbCBhbmQgZmlsdGVyXG4gICAgdGhpcy5fYWxsSXRlbXMgPSBbXTtcbiAgICBpZiAoZGF0YSkge1xuICAgICAgZm9yIChsZXQgaWQgaW4gZGF0YSkgeyAgICAgICAgXG4gICAgICAgIGxldCByZXN1bHQgPSAoPGFueT5PYmplY3QpLmFzc2lnbih7aWQ6IGlkfSwgZGF0YVtpZF0pO1xuICAgICAgICBpZihCYWNrZW5kU2VydmljZS50b2tlbiA9PT0gcmVzdWx0LlVJRCl7XG4gICAgICAgICAgdGhpcy5fYWxsSXRlbXMucHVzaChyZXN1bHQpO1xuICAgICAgICB9ICAgICAgICBcbiAgICAgIH1cbiAgICAgIHRoaXMucHVibGlzaFVwZGF0ZXMoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2FsbEl0ZW1zO1xuICB9XG5cbiAgIHB1Ymxpc2hVcGRhdGVzKCkge1xuICAgIC8vIGhlcmUsIHdlIHNvcnQgbXVzdCBlbWl0IGEgKm5ldyogdmFsdWUgKGltbXV0YWJpbGl0eSEpXG4gICAgdGhpcy5fYWxsSXRlbXMuc29ydChmdW5jdGlvbihhLCBiKXtcbiAgICAgICAgaWYoYS5kYXRlIDwgYi5kYXRlKSByZXR1cm4gLTE7XG4gICAgICAgIGlmKGEuZGF0ZSA+IGIuZGF0ZSkgcmV0dXJuIDE7XG4gICAgICByZXR1cm4gMDtcbiAgICB9KVxuICAgIHRoaXMuaXRlbXMubmV4dChbLi4udGhpcy5fYWxsSXRlbXNdKTtcbiAgfVxuXG4gIGFkZChnaWZ0OiBzdHJpbmcpIHsgICBcbiAgICByZXR1cm4gZmlyZWJhc2UucHVzaChcbiAgICAgICAgXCIvR2lmdHNcIixcbiAgICAgICAgeyBcIm5hbWVcIjogZ2lmdCwgXCJVSURcIjogQmFja2VuZFNlcnZpY2UudG9rZW4sIFwiZGF0ZVwiOiAwIC0gRGF0ZS5ub3coKSwgXCJpbWFnZXBhdGhcIjogXCJcIn1cbiAgICAgICkudGhlbihcbiAgICAgICAgZnVuY3Rpb24gKHJlc3VsdDphbnkpIHtcbiAgICAgICAgICByZXR1cm4gJ0dpZnQgYWRkZWQgdG8geW91ciB3aXNobGlzdCEnO1xuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlOmFueSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XG4gICAgICAgIH0pOyBcbiAgfVxuICBjcmVhdGV1c2VycmVjb3JkKHVzZXI6IFVzZXIpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdjcmVhdGUgdXNlciBmdW5jdGlvbiAnICsgdXNlci5lbWFpbCk7XG4gICAgICByZXR1cm4gZmlyZWJhc2UucHVzaChcbiAgICAgICAgICBcIi9SZWdpc3RlcmVkVXNlcnNcIixcbiAgICAgICAgICB7IFwiZW1haWxcIjogdXNlci5lbWFpbCwgIFwiZGF0ZVwiOiAwIC0gRGF0ZS5ub3coKSB9XG4gICAgICApLnRoZW4oXG4gICAgICAgICAgZnVuY3Rpb24gKHJlc3VsdDogYW55KSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjcmVhdGUgdXNlciByZXN1bHQgJyArIEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xuICAgICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkocmVzdWx0KTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2U6IGFueSkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvck1lc3NhZ2UpO1xuICAgICAgICAgIH0pO1xuICB9XG4gIGdldFVzZXJMaXN0KCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBhbnkpID0+IHtcbiAgICAgICAgICBsZXQgcGF0aCA9ICdSZWdpc3RlcmVkVXNlcnMnO1xuXG4gICAgICAgICAgbGV0IG9uVmFsdWVFdmVudCA9IChzbmFwc2hvdDogYW55KSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0cyA9IHRoaXMuaGFuZGxlVXNlck5hbWVzU25hcHNob3Qoc25hcHNob3QudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzdWx0cykpICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzdWx0cyk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH07XG4gICAgICAgICAgZmlyZWJhc2UuYWRkVmFsdWVFdmVudExpc3RlbmVyKG9uVmFsdWVFdmVudCwgYC8ke3BhdGh9YCk7XG4gICAgICB9KS5zaGFyZSgpO1xuICB9XG5cblxuICBlZGl0R2lmdChpZDpzdHJpbmcsIGRlc2NyaXB0aW9uOiBzdHJpbmcsIGltYWdlcGF0aDogc3RyaW5nKXtcbiAgICB0aGlzLnB1Ymxpc2hVcGRhdGVzKCk7XG4gICAgcmV0dXJuIGZpcmViYXNlLnVwZGF0ZShcIi9HaWZ0cy9cIitpZCtcIlwiLHtcbiAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLCBcbiAgICAgICAgaW1hZ2VwYXRoOiBpbWFnZXBhdGh9KVxuICAgICAgLnRoZW4oXG4gICAgICAgIGZ1bmN0aW9uIChyZXN1bHQ6YW55KSB7XG4gICAgICAgICAgcmV0dXJuICdZb3UgaGF2ZSBzdWNjZXNzZnVsbHkgZWRpdGVkIHRoaXMgZ2lmdCEnO1xuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlOmFueSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XG4gICAgICAgIH0pOyAgXG4gIH1cbiAgZWRpdERlc2NyaXB0aW9uKGlkOnN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZyl7XG4gICAgdGhpcy5wdWJsaXNoVXBkYXRlcygpO1xuICAgIHJldHVybiBmaXJlYmFzZS51cGRhdGUoXCIvR2lmdHMvXCIraWQrXCJcIix7XG4gICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbn0pXG4gICAgICAudGhlbihcbiAgICAgICAgZnVuY3Rpb24gKHJlc3VsdDphbnkpIHtcbiAgICAgICAgICByZXR1cm4gJ1lvdSBoYXZlIHN1Y2Nlc3NmdWxseSBlZGl0ZWQgdGhlIGRlc2NyaXB0aW9uISc7XG4gICAgICAgIH0sXG4gICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2U6YW55KSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgfSk7ICBcbiAgfVxuICBkZWxldGUoZ2lmdDogR2lmdCkge1xuICAgIHJldHVybiBmaXJlYmFzZS5yZW1vdmUoXCIvR2lmdHMvXCIrZ2lmdC5pZCtcIlwiKVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcbiAgfVxuICBcbiAgdXBsb2FkRmlsZShsb2NhbFBhdGg6IHN0cmluZywgZmlsZT86IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgICBsZXQgZmlsZW5hbWUgPSB0aGlzLnV0aWxzLmdldEZpbGVuYW1lKGxvY2FsUGF0aCk7XG4gICAgICBsZXQgcmVtb3RlUGF0aCA9IGAke2ZpbGVuYW1lfWA7ICAgXG4gICAgICByZXR1cm4gZmlyZWJhc2UudXBsb2FkRmlsZSh7XG4gICAgICAgIHJlbW90ZUZ1bGxQYXRoOiByZW1vdGVQYXRoLFxuICAgICAgICBsb2NhbEZ1bGxQYXRoOiBsb2NhbFBhdGgsXG4gICAgICAgIG9uUHJvZ3Jlc3M6IGZ1bmN0aW9uKHN0YXR1cykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJVcGxvYWRlZCBmcmFjdGlvbjogXCIgKyBzdGF0dXMuZnJhY3Rpb25Db21wbGV0ZWQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJQZXJjZW50YWdlIGNvbXBsZXRlOiBcIiArIHN0YXR1cy5wZXJjZW50YWdlQ29tcGxldGVkKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICBnZXREb3dubG9hZFVybChyZW1vdGVGaWxlUGF0aDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgIHJldHVybiBmaXJlYmFzZS5nZXREb3dubG9hZFVybCh7XG4gICAgICAgIHJlbW90ZUZ1bGxQYXRoOiByZW1vdGVGaWxlUGF0aH0pXG4gICAgICAudGhlbihcbiAgICAgICAgZnVuY3Rpb24gKHVybDpzdHJpbmcpIHtcbiAgICAgICAgICByZXR1cm4gdXJsO1xuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlOmFueSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XG4gICAgICAgIH0pO1xufVxuXG4gIGhhbmRsZUVycm9ycyhlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yKSk7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yLm1lc3NhZ2UpO1xuICB9XG59Il19