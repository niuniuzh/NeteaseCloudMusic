import { Observable, Subject } from 'rxjs/Rx';
import { NetEase } from '../utils/api';
import { RequestOptions } from '@angular/http';

const PHONE_LOGIN = "http://localhost:3000/login/cellphone?";

export class LoginAction {
    private static instance: LoginAction;

    public static getInstance(): LoginAction {
        if (!this.instance) {
            this.instance = new LoginAction();
        }
        return LoginAction.instance;
    }

    constructor() {

    }

    public getLogin(): Observable<any> {
        return Observable.create((observe: Subject<any>) => {
            let options = new RequestOptions();
            options.url = PHONE_LOGIN;
            // options.url = USER_DETAIL;
            var args = {};
            // args['uid'] = '331310481';
            args['phone'] = '18680673675';
            args['password'] = 'miss1221';
            options.body = args;
            NetEase.getInstance().get(options)
                .subscribe((res) => {
                    observe.next(res);
                }, (error) => {
                    observe.error(error);
                });
        });
    }
}