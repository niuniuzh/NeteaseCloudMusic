import { Observable, Subject } from 'rxjs/Rx';
import { NetEase } from '../utils/api';
import { RequestOptions } from '@angular/http';

const RECOMMEND_RESOURCE = 'http://localhost:3000/recommend/resource?';//获取每日推荐歌单
const RECOMMEND_SONGS = 'http://localhost:3000/recommend/songs?';//获取每日推荐歌曲
const PERSONALIZED_MV = "http://localhost:3000/personalized/mv?";//推荐 mv
const PERSONALIZED = "http://localhost:3000/personalized?";//推荐歌单
const PERSONALIZED_NEW = "http://localhost:3000/personalized/newsong?";//推荐新音乐
const PERSONALIZED_DJPROGRAM = "http://localhost:3000/personalized/djprogram?";//推荐电台
const PROGRAM_RECOMMEND = "http://localhost:3000/program/recommend?";//推荐节目
const DJ_RECOMMEND_TYPE = "http://localhost:3000/dj/recommend/type?";//电台 - 分类推荐
const DJ_RECOMMEND ="http://localhost:3000/dj/recommend";//电台 - 推荐

export class RecommendsAction {
    private static instance: RecommendsAction;

    public static getInstance(): RecommendsAction {
        if (!this.instance) {
            this.instance = new RecommendsAction();
        }
        return RecommendsAction.instance;
    }

    constructor() {

    }

    public recommendSongs(): Observable<any> {
        return Observable.create((observe: Subject<any>) => {
            let options = new RequestOptions();
            options.url = RECOMMEND_SONGS;
            NetEase.getInstance().get(options)
                .subscribe((res) => {
                    observe.next(res);
                }, (error) => {
                    observe.error(error);
                });
        });
    }

    public recommendSongList():Observable<any> {
        return Observable.create((observe: Subject<any>) => {
            let options = new RequestOptions();
            options.url = RECOMMEND_RESOURCE;
            NetEase.getInstance().get(options)
                .subscribe((res) => {
                    observe.next(res);
                }, (error) => {
                    observe.error(error);
                });
        });
    }

    public recommendMV():Observable<any> {
        return Observable.create((observe: Subject<any>) => {
            let options = new RequestOptions();
            options.url = PERSONALIZED_MV;
            NetEase.getInstance().get(options)
                .subscribe((res) => {
                    observe.next(res);
                }, (error) => {
                    observe.error(error);
                });
        });
    }


}