import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MusicApp } from './app.component';

import { FindMusicPage } from '../pages/tabs/findMusic/findMusic';
import { MyMusicPage } from '../pages/tabs/myMusic/myMusic';
import { AccountPage } from '../pages/tabs/account/account';
import { TabsPage } from '../pages/tabs/tabs/tabs';
import { MusicModule } from '../components/Music.module';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { VoiceSearchPage } from '../pages/voice-search/voice-search';
import { VoiceSearchPageModule } from '../pages/voice-search/voice-search.module';
import { MusicPlayPageModule } from '../pages/music-play/music-play.module';
import { SearchPageModule } from '../pages/search/search.module';
import { PersonalFmPageModule } from '../pages/personal-fm/personal-fm.module';
import { TopListPageModule } from '../pages/top-list/top-list.module';
import { TopPlayListPageModule } from '../pages/top-play-list/top-play-list.module';
import { RecommendSongsPageModule } from '../pages/recommend-songs/recommend-songs.module';

@NgModule({
  declarations: [
    MusicApp,
    FindMusicPage,
    MyMusicPage,
    AccountPage,
    TabsPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    MusicModule,
    IonicModule.forRoot(MusicApp,{
      backButtonText: '',//按钮内容
      backButtonIcon: 'arrow-back',//按钮图标样式
      }),
    HttpModule,
    VoiceSearchPageModule,
    MusicPlayPageModule,
    SearchPageModule,
    PersonalFmPageModule,
    TopListPageModule,
    TopPlayListPageModule,
    RecommendSongsPageModule,
    TopListPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MusicApp,
    FindMusicPage,
    MyMusicPage,
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