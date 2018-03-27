import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login'
import { NetEase } from '../utils/api'
import { Http } from '@angular/http';
import { App, Config } from 'ionic-angular';
import { pluginManager } from '../utils/pluginManager';

@Component({
  templateUrl: 'app.html'
})
export class MusicApp {

  rootPage: any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, http: Http,
    app: App, config: Config) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    NetEase.getInstance()._http = http;
    pluginManager.getInstance().init(app, config);
  }
}
