import { Observable, Subject } from 'rxjs/Rx';
import { NetEase } from '../utils/api';
import { RequestOptions } from '@angular/http';

const GET_BANNER = 'http://localhost:3000/banner?';//轮播图

export class FindAction {
    private static instance: FindAction;

    public static getInstance(): FindAction {
        if (!this.instance) {
            this.instance = new FindAction();
        }
        return FindAction.instance;
    }

    constructor() {

    }

    public getBanner(): Observable<any> {
        return Observable.create((observe: Subject<any>) => {
            let options = new RequestOptions();
            options.url = GET_BANNER;
            NetEase.getInstance().get(options)
                .subscribe((res) => {
                    observe.next(res);
                }, (error) => {
                    observe.error(error);
                });
        });
    }
}