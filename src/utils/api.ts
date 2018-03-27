import { Http, Headers, URLSearchParams, RequestOptions, RequestMethod, Request, Response } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';
export class NetEase {
    private static instance: NetEase;
    private http: Http;
    public static getInstance() {
        if (!this.instance) {
            this.instance = new NetEase();
        }
        return this.instance;
    }

    public set _http(v: Http) {
        this.http = v;
    }
    public post(args: RequestOptions): Observable<any> {
        args.method = RequestMethod.Post;
        return this.httpRequest(args)

    }

    public get(args: RequestOptions): Observable<any> {
        args.method = RequestMethod.Get;
        return this.httpRequest(args)
    }

    private getRequestOptions(args: RequestOptions): Request {
      args.headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' });
      args.body = this.combParam("",args.body,new URLSearchParams());
      args.withCredentials = true;
      console.log(args);
          if (args.method == RequestMethod.Get) {
            args.search = args.body;
        }

      return new Request(args);
    }
   private combParam<T extends URLSearchParams & any>(key: string, arg: any, data: T): T {
        if (typeof (arg) == 'string' || typeof (arg) == 'number') {
            data.append(key, <string>arg);
        } else {
            for (let i in arg) {
                let k = key == "" ? i : key + ((arg instanceof Array) ? "[" + i + "]" : "." + i);
                this.combParam(k, arg[i], data)
            }
        }
        return data;
    }

    private httpRequest(args): Observable<any> {
        let _this = this;
        return Observable.create((observe: Subject<any>) => {
            _this.http.request(_this.getRequestOptions(args))
                .timeout(10000)
                .map(function (res) {
                    if (res.status == 200) {
                        return res;
                    } else {
                        observe.error({ code: -1, result: "请求失败" });
                    }
                })
                .subscribe((res: Response) => {
                    let _result = { code: -1, result: "" };
                    _result = res.json();
                    console.log(res.toString())
                    if (_result.code == 200) {
                        observe.next(_result);
                    } else {
                        observe.error(_result);
                    }
                    observe.complete();
                }, (err) => {
                    if (err.ok != null) {
                        //请求失败  不做处理
                    } else {
                        //超时
                        console.debug(err);
                    }
                    console.log(err);
                }, () => {
                    observe.complete();
                    console.debug("complete");
                });
        })
    }
}
