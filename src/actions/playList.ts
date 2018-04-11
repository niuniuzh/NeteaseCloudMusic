import { Observable, Subject } from 'rxjs/Rx';
import { NetEase } from '../utils/api';
import { RequestOptions } from '@angular/http';

const HIGHQUALITY_LIST = 'http://localhost:3000/top/playlist/highquality?';//获取精品歌单

export class PlayListAction {
    private static instance: PlayListAction;

    public static getInstance(): PlayListAction {
        if (!this.instance) {
            this.instance = new PlayListAction();
        }
        return PlayListAction.instance;
    }

    constructor() {

    }

    public getHighQualityList():Observable<any>{
        return Observable.create((observe:Subject<any>)=>{
            let options = new RequestOptions();
            options.url = HIGHQUALITY_LIST;
            NetEase.getInstance().get(options)
                .subscribe((res) => {
                    observe.next(res.playlists);
                }, (error) => {
                    observe.error(error);
                });
        })
    }
}