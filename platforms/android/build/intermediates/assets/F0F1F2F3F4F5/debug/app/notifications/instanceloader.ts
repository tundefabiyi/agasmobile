
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { gpfsAlertNotification } from './gpfsAlertNotification';
import { mobileTransactionApprovalRequest } from './mobileTransactionApprovalRequest';

export class InstanceLoader {
    static getInstance<T>(context: Object, name: string, ...args: any[]): T {
        var r;

        var instance = Object.create(context[name].prototype);
        instance.constructor.apply(instance, args);
        return <T>instance;
    }
    static get<T>(name: string): T {
        var instance;
        eval("instance=new " + name + "()")

        return <T>instance;
    }
}

export interface NotificationRequest {

    remoteNotifcationNavigationExtras(): NavigationExtras;
    view(): string;
    localNotifcationNavigationExtras(): NavigationExtras;
    takeMessage(message:any);

}