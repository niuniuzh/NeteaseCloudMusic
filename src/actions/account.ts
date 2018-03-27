import { Observable, Subject } from 'rxjs/Rx';
import { NetEase } from '../utils/api';
import { RequestOptions } from '@angular/http';

const USER_DETAIL = 'http://localhost:3000/user/detail?';//获取用户详情
const SUB_COUNT = 'http://localhost:3000/user/subcount';//获取用户信息 , 歌单，收藏，mv, dj 数量
const PLAY_LIST = 'http://localhost:3000/user/playlist?';//获取用户歌单
const USER_DJ = 'http://localhost:3000/user/dj?';//获取用户电台
const USER_FOLLOWS = 'http://localhost:3000/user/follows?';//获取用户关注列表
const USER_FOLLOWEDS = 'http://localhost:3000/user/followeds?';//获取用户粉丝列表
const USER_EVENT = 'http://localhost:3000/user/event?';//获取用户动态
const USER_RECORD = 'http://localhost:3000/user/record?';//获取用户播放记录
const DYNAMIC_EVENT = 'http://localhost:3000/event?';//获取动态消息
const HIGHQUALITY_LIST = 'http://localhost:3000/top/playlist/highquality?';//获取精品歌单
const PLAYLIST_DETAIL = 'http://localhost:3000/playlist/detail?';//获取歌单详情
const MUSIC_URL = 'http://localhost:3000/music/url?';//获取音乐 url
const SEARCH_MUSIC = 'http://localhost:3000/search?';//搜索
const SEARCH_SUGGEST = 'http://localhost:3000/search/suggest?';//搜索建议
const SEARCH_MULTIMATCH = 'http://localhost:3000/search/multimatch?';//搜索多重匹配
const PLAYLIST_TRACKS = 'http://localhost:3000/playlist/tracks?';//对歌单添加或删除歌曲
const GET_LYRIC = 'http://localhost:3000/lyric?';//获取歌词
const MUSIC_COMMENT = 'http://localhost:3000/comment/music?';//歌曲评论
const ALBUM_COMMENT = 'http://localhost:3000/comment/album?';//专辑评论
const PLAYLIST_COMMENT = 'http://localhost:3000/comment/playlist?';//歌单评论
const MV_COMMENT = 'http://localhost:3000/comment/mv?';//mv 评论
const DJ_COMMENT = 'http://localhost:3000/comment/dj?';//电台节目评论
const LIKE_COMMENT = 'http://localhost:3000/comment/like?';//给评论点赞
const GET_BANNER = 'http://localhost:3000/banner?';//轮播图 
const SONG_DETAIL = 'http://localhost:3000/song/detail?';//获取歌曲详情 
const GET_ALBUM = 'http://localhost:3000/album?';//获取专辑内容 
const ARTISTS = 'http://localhost:3000/artists?';//获取歌手单曲 
const ARTISTS_MV = 'http://localhost:3000/artist/mv?';//获取歌手 mv 
const ARTISTS_ALBUM = 'http://localhost:3000/artist/album?';//获取歌手专辑 
const ARTISTS_DESC = 'http://localhost:3000/artist/desc?';//获取歌手描述 
const SIMI_ARTISTS = 'http://localhost:3000/simi/artist?';//获取相似歌手 
const SIMI_PLAYLIST = 'http://localhost:3000/simi/playlist?';//获取相似歌单 
const SIMI_MV = 'http://localhost:3000/simi/mv?';//相似 mv 
const SIMI_SONG = 'http://localhost:3000/simi/song?';//获取相似音乐
const SIMI_USER = 'http://localhost:3000/simi/user?';//获取最近 5 个听了这首歌的用户
const RECOMMEND_RESOURCE = 'http://localhost:3000/recommend/resource?';//获取每日推荐歌单
const RECOMMEND_SONGS = 'http://localhost:3000/recommend/songs?';//获取每日推荐歌曲
const PERSONAL_FM = 'http://localhost:3000/personal_fm?';//私人 FM
const DAILY_TASK = "http://localhost:3000/daily_signin?";//签到
const LIKE_SONGS = "http://localhost:3000/like?";//喜欢音乐
const FM_TRASH = "http://localhost:3000/fm_trash?";//垃圾桶
const TOP_PLAYLIST = "http://localhost:3000/top/playlist?";//歌单 ( 网友精选碟 )
const TOP_ALBUM = "http://localhost:3000/top/album?";//新碟上架
const TOP_ARTISTS = "http://localhost:3000/top/artists?";//热门歌手
const MV_FIRST = "http://localhost:3000/mv/first?";//最新 mv
const PERSONALIZED_MV = "http://localhost:3000/personalized/mv?";//推荐 mv
const PERSONALIZED = "http://localhost:3000/personalized?";//推荐歌单
const PERSONALIZED_NEW = "http://localhost:3000/personalized/newsong?";//推荐新音乐
const PERSONALIZED_DJPROGRAM = "http://localhost:3000/personalized/djprogram?";//推荐电台
const PROGRAM_RECOMMEND = "http://localhost:3000/program/recommend?";//推荐节目
const PERSONALIZED_PRIVATECONTENT = "http://localhost:3000/personalized/privatecontent?";//独家放送
const TOP_MV = "http://localhost:3000/top/mv?";//mv 排行
const MV_DATA = "http://localhost:3000/mv?";//获取 mv 数据
const MV_URL = "http://localhost:3000/mv/url?";//播放 mv
const TOP_LIST = "http://localhost:3000/top/list?";//排行榜
// "0": 云音乐新歌榜,
// "1": 云音乐热歌榜,
// "2": 网易原创歌曲榜,
// "3": 云音乐飙升榜,
// "4": 云音乐电音榜,
// "5": UK排行榜周榜,
// "6": 美国Billboard周榜
// "7": KTV嗨榜,
// "8": iTunes榜,
// "9": Hit FM Top榜,
// "10": 日本Oricon周榜
// "11": 韩国Melon排行榜周榜,
// "12": 韩国Mnet排行榜周榜,
// "13": 韩国Melon原声周榜,
// "14": 中国TOP排行榜(港台榜),
// "15": 中国TOP排行榜(内地榜)
// "16": 香港电台中文歌曲龙虎榜,
// "17": 华语金曲榜,
// "18": 中国嘻哈榜,
// "19": 法国 NRJ EuroHot 30周榜,
// "20": 台湾Hito排行榜,
// "21": Beatport全球电子舞曲榜,
// "22": 云音乐ACG音乐榜,
// "23": 云音乐嘻哈榜



export class AccountAction {
    private static instance: AccountAction;

    public static getInstance(): AccountAction {
        if (!this.instance) {
            this.instance = new AccountAction();
        }
        return AccountAction.instance;
    }

    constructor() {

    }

    public getSign(): Observable<any> {
        return Observable.create((observe: Subject<any>) => {
            let options = new RequestOptions();
            options.url = DAILY_TASK;
            NetEase.getInstance().get(options)
                .subscribe((res) => {
                    observe.next(res);
                }, (error) => {
                    observe.error(error);
                });
        });
    }
    public getUserDetail():Observable<any>{
        return Observable.create((observe: Subject<any>) => {
            let options = new RequestOptions();
            options.url = USER_DETAIL;
            var args = {};
            args['uid'] = '331310481';
            options.body = args;
            NetEase.getInstance().get(options)
                .subscribe((res) => {
                    observe.next(res);
                }, (error) => {
                    observe.error(error);
                });
        });
    }
    public getSubCount():Observable<any>{
        return Observable.create((observe:Subject<any>)=>{
            let options = new RequestOptions();
            options.url = SUB_COUNT;
            NetEase.getInstance().get(options)
                .subscribe((res) => {
                    observe.next(res);
                }, (error) => {
                    observe.error(error);
                });
        })
    }
    public getPlayList():Observable<any>{
        return Observable.create((observe:Subject<any>)=>{
            let options = new RequestOptions();
            options.url = PLAY_LIST;
            var args = {};
            args['uid'] = '331310481';
            options.body = args;
            NetEase.getInstance().get(options)
                .subscribe((res) => {
                    observe.next(res);
                }, (error) => {
                    observe.error(error);
                });  
        })
    }
    public getUserDJ():Observable<any>{
        return Observable.create((observe:Subject<any>)=>{
            let options = new RequestOptions();
            options.url = USER_DJ;
            var args = {};
            args['uid'] = '331310481';
            options.body = args;
            NetEase.getInstance().get(options)
                .subscribe((res) => {
                    observe.next(res);
                }, (error) => {
                    observe.error(error);
                });  
        })
    }
    public getUserFollows():Observable<any>{
        return Observable.create((observe:Subject<any>)=>{
            let options = new RequestOptions();
            options.url = USER_FOLLOWS;
            var args = {};
            args['uid'] = '331310481';
            options.body = args;
            NetEase.getInstance().get(options)
                .subscribe((res) => {
                    observe.next(res);
                }, (error) => {
                    observe.error(error);
                });  
        })
    }
    public getUserFolloweds():Observable<any>{
        return Observable.create((observe:Subject<any>)=>{
            let options = new RequestOptions();
            options.url = USER_FOLLOWEDS;
            var args = {};
            args['uid'] = '331310481';
            options.body = args;
            NetEase.getInstance().get(options)
                .subscribe((res) => {
                    observe.next(res);
                }, (error) => {
                    observe.error(error);
                });  
        })
    }
    public getUserEvent():Observable<any>{
        return Observable.create((observe:Subject<any>)=>{
            let options = new RequestOptions();
            options.url = USER_EVENT;
            var args = {};
            args['uid'] = '331310481';
            options.body = args;
            NetEase.getInstance().get(options)
                .subscribe((res) => {
                    observe.next(res);
                }, (error) => {
                    observe.error(error);
                });  
        })
    }
    public getUserRecord():Observable<any>{
        return Observable.create((observe:Subject<any>)=>{
            let options = new RequestOptions();
            options.url = USER_RECORD;
            var args = {};
            args['uid'] = '331310481';
            options.body = args;
            NetEase.getInstance().get(options)
                .subscribe((res) => {
                    observe.next(res);
                }, (error) => {
                    observe.error(error);
                });  
        })
    }
    public getDynamicEvent():Observable<any>{
        return Observable.create((observe:Subject<any>)=>{
            let options = new RequestOptions();
            options.url = DYNAMIC_EVENT;
            NetEase.getInstance().get(options)
                .subscribe((res) => {
                    observe.next(res);
                }, (error) => {
                    observe.error(error);
                });  
        })
    }
    public getHighQualityList():Observable<any>{
        return Observable.create((observe:Subject<any>)=>{
            let options = new RequestOptions();
            options.url = HIGHQUALITY_LIST;
            NetEase.getInstance().get(options)
                .subscribe((res) => {
                    observe.next(res);
                }, (error) => {
                    observe.error(error);
                });  
        })
    }
    public getPlayListDetail():Observable<any>{
        return Observable.create((observe:Subject<any>)=>{
            let options = new RequestOptions();
            options.url = PLAYLIST_DETAIL;
            var args = {};
            args['id'] = '24381616';
            options.body = args;
            NetEase.getInstance().get(options)
                .subscribe((res) => {
                    observe.next(res);
                }, (error) => {
                    observe.error(error);
                });  
        })
    }
    public getMusicUrl():Observable<any>{
        return Observable.create((observe:Subject<any>)=>{
            let options = new RequestOptions();
            options.url = MUSIC_URL;
            var args = {};
            args['id'] = '33894312';
            options.body = args;
            NetEase.getInstance().get(options)
                .subscribe((res) => {
                    observe.next(res);
                }, (error) => {
                    observe.error(error);
                });  
        })
    }
    public searchMusic():Observable<any>{
        return Observable.create((observe:Subject<any>)=>{
            let options = new RequestOptions();
            options.url = SEARCH_MUSIC;
            var args = {};
            args['keywords'] = '海阔天空';
            args['limit']=30;//默认为 30 
            args['offset'] = 0;//默认为 0
            args['type']=1;// 1: 单曲 10: 专辑 100: 歌手 1000: 歌单 1002: 用户 1004: MV 1006: 歌词 1009: 电台
            options.body = args;
            NetEase.getInstance().get(options)
                .subscribe((res) => {
                    observe.next(res);
                }, (error) => {
                    observe.error(error);
                });  
        })
    }
    public searchSuggest():Observable<any>{
        return Observable.create((observe:Subject<any>)=>{
            let options = new RequestOptions();
            options.url = SEARCH_SUGGEST;
            var args = {};
            args['keywords'] = '海阔天空';
            args['limit']=30;//默认为 30 
            args['offset'] = 0;//默认为 0
            args['type']=1;// 1: 单曲 10: 专辑 100: 歌手 1000: 歌单 1002: 用户 1004: MV 1006: 歌词 1009: 电台
            options.body = args;
            NetEase.getInstance().get(options)
                .subscribe((res) => {
                    observe.next(res);
                }, (error) => {
                    observe.error(error);
                });  
        })
    }
    public searchMultiMatch():Observable<any>{
        return Observable.create((observe:Subject<any>)=>{
            let options = new RequestOptions();
            options.url = SEARCH_MULTIMATCH;
            var args = {};
            args['keywords'] = '海阔天空';
            options.body = args;
            NetEase.getInstance().get(options)
                .subscribe((res) => {
                    observe.next(res);
                }, (error) => {
                    observe.error(error);
                });  
        })
    }
    public playListTracks():Observable<any>{
        return Observable.create((observe:Subject<any>)=>{
            let options = new RequestOptions();
            options.url = PLAYLIST_TRACKS;
            var args = {};
            args['op'] = 'add';//增加单曲为 add, 删除为 del 
            args['pid'] = '462499792';//歌单ID
            args['tracks'] = '海阔天空';//歌曲ID
            options.body = args;
            NetEase.getInstance().get(options)
                .subscribe((res) => {
                    observe.next(res);
                }, (error) => {
                    observe.error(error);
                });  
        })
    }
    public getLyric():Observable<any>{
        return Observable.create((observe:Subject<any>)=>{
            let options = new RequestOptions();
            options.url = GET_LYRIC;
            var args = {};
            args['id'] = '33894312';//音乐 id
            options.body = args;
            NetEase.getInstance().get(options)
                .subscribe((res) => {
                    observe.next(res);
                }, (error) => {
                    observe.error(error);
                });  
        })
    }
    public MusicComment():Observable<any>{
        return Observable.create((observe:Subject<any>)=>{
            let options = new RequestOptions();
            options.url = MUSIC_COMMENT;
            var args = {};
            args['id'] = '186016';//音乐 id
            args['limit'] = 20;// 默认为 20
            args['offset'] = 0;//默认为 0
            options.body = args;
            NetEase.getInstance().get(options)
                .subscribe((res) => {
                    observe.next(res);
                }, (error) => {
                    observe.error(error);
                });  
        })
    }
    public AlbumComment():Observable<any>{
        return Observable.create((observe:Subject<any>)=>{
            let options = new RequestOptions();
            options.url = ALBUM_COMMENT;
            var args = {};
            args['id'] = '32311';//专辑 id
            args['limit'] = 20;// 默认为 20
            args['offset'] = 0;//默认为 0
            options.body = args;
            NetEase.getInstance().get(options)
                .subscribe((res) => {
                    observe.next(res);
                }, (error) => {
                    observe.error(error);
                });  
        })
    }
    public PlayListComment():Observable<any>{
        return Observable.create((observe:Subject<any>)=>{
            let options = new RequestOptions();
            options.url = PLAYLIST_COMMENT;
            var args = {};
            args['id'] = '705123491';//歌单 id
            args['limit'] = 20;// 默认为 20
            args['offset'] = 0;//默认为 0
            options.body = args;
            NetEase.getInstance().get(options)
                .subscribe((res) => {
                    observe.next(res);
                }, (error) => {
                    observe.error(error);
                });  
        })
    }
}