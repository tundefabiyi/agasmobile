import { Injectable, NgZone } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class HomePageService {
    constructor(
        private ngZone: NgZone
    ) {

    }
    onsetTittleObservable: Subject<string> = new Subject<string>();
    onGoBackObservable: Subject<any> = new Subject<any>();
    onShowGoBackButtonObservable: Subject<boolean> = new Subject<boolean>();
    setTitle(title: string) {
        this.onsetTittleObservable.next(title);
    }
    goback() {
        this.onGoBackObservable.next();
    }
    setShowGoBackButton(status: boolean) {
        this.onShowGoBackButtonObservable.next(status);
    }
}