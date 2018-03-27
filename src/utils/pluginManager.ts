import { App, Config } from 'ionic-angular'
export class pluginManager {
    private static m_pInstance: pluginManager;
    private _app: App = null;
    private _config: Config = null;
    public static getInstance() {
        if (!this.m_pInstance) {
            this.m_pInstance = new pluginManager()
        }
        return this.m_pInstance;
    }
    public init(app: App, config: Config) {
        this._app = app;
        this._config = config;
    }
    public get app() {
        return this._app;
    }
    public get config() {
        return this._config;
    }
}