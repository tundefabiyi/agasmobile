"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Chat = (function () {
    function Chat(id, sessionid, sentby, recievedby, message, datetime, msgstatus) {
        this.id = id;
        this.sessionid = sessionid;
        this.sentby = sentby;
        this.recievedby = recievedby;
        this.message = message;
        this.datetime = datetime;
        this.msgstatus = msgstatus;
    }
    return Chat;
}());
exports.Chat = Chat;
var MessageStatus;
(function (MessageStatus) {
    MessageStatus[MessageStatus["Pending"] = 1] = "Pending";
    MessageStatus[MessageStatus["RecievedAtServer"] = 2] = "RecievedAtServer";
    MessageStatus[MessageStatus["DeliveredToPhone"] = 3] = "DeliveredToPhone";
    MessageStatus[MessageStatus["ReadByUser"] = 4] = "ReadByUser";
})(MessageStatus = exports.MessageStatus || (exports.MessageStatus = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNoYXQubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtJQUNJLGNBRVcsRUFBVSxFQUNWLFNBQWlCLEVBQ2pCLE1BQWMsRUFDZCxVQUFrQixFQUNsQixPQUFlLEVBQ2YsUUFBZ0IsRUFDaEIsU0FBaUI7UUFOakIsT0FBRSxHQUFGLEVBQUUsQ0FBUTtRQUNWLGNBQVMsR0FBVCxTQUFTLENBQVE7UUFDakIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGVBQVUsR0FBVixVQUFVLENBQVE7UUFDbEIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLGFBQVEsR0FBUixRQUFRLENBQVE7UUFDaEIsY0FBUyxHQUFULFNBQVMsQ0FBUTtJQUUxQixDQUFDO0lBRVAsV0FBQztBQUFELENBQUMsQUFiRCxJQWFDO0FBYlksb0JBQUk7QUFjakIsSUFBWSxhQUtYO0FBTEQsV0FBWSxhQUFhO0lBQ3JCLHVEQUFXLENBQUE7SUFDWCx5RUFBb0IsQ0FBQTtJQUNwQix5RUFBb0IsQ0FBQTtJQUNwQiw2REFBYyxDQUFBO0FBQ2xCLENBQUMsRUFMVyxhQUFhLEdBQWIscUJBQWEsS0FBYixxQkFBYSxRQUt4QiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDaGF0IHtcbiAgICBjb25zdHJ1Y3RvclxuICAgICAgICAoXG4gICAgICAgIHB1YmxpYyBpZDogc3RyaW5nLFxuICAgICAgICBwdWJsaWMgc2Vzc2lvbmlkOiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyBzZW50Ynk6IHN0cmluZyxcbiAgICAgICAgcHVibGljIHJlY2lldmVkYnk6IHN0cmluZyxcbiAgICAgICAgcHVibGljIG1lc3NhZ2U6IHN0cmluZyxcbiAgICAgICAgcHVibGljIGRhdGV0aW1lOiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyBtc2dzdGF0dXM6IHN0cmluZ1xuICAgICAgICApXG4gICAgeyB9ICAgXG5cbn1cbmV4cG9ydCBlbnVtIE1lc3NhZ2VTdGF0dXMge1xyXG4gICAgUGVuZGluZyA9IDEsXHJcbiAgICBSZWNpZXZlZEF0U2VydmVyID0gMixcclxuICAgIERlbGl2ZXJlZFRvUGhvbmUgPSAzLFxyXG4gICAgUmVhZEJ5VXNlciA9IDRcclxufSJdfQ==