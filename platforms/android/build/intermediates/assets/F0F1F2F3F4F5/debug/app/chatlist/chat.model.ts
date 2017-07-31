export class Chat {
    constructor
        (
        public id: string,
        public sessionid: string,
        public sentby: string,
        public recievedby: string,
        public message: string,
        public datetime: string,
        public msgstatus: string
        )
    { }   

}
export enum MessageStatus {
    Pending = 1,
    RecievedAtServer = 2,
    DeliveredToPhone = 3,
    ReadByUser = 4
}