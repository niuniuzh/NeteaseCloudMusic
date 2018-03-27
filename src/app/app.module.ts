import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MusicApp } from './app.component';

import { FindMusicPage } from '../pages/tabs/findMusic/findMusic';
import { MyMusicPage } from '../pages/tabs/myMusic/myMusic';
import { FriendsPage } from '../pages/tabs/friends/friends';
import { AccountPage } from '../pages/tabs/account/account';
import { TabsPage } from '../pages/tabs/tabs/tabs';
import { MusicModule } from '../components/Music.module';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MusicApp,
    FindMusicPage,
    MyMusicPage,
    FriendsPage,
    AccountPage,
    TabsPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    MusicModule,
    IonicModule.forRoot(MusicApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MusicApp,
    FindMusicPage,
    MyMusicPage,
    FriendsPage,
    AccountPage,
    TabsPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}