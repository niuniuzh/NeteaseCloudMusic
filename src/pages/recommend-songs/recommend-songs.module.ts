import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecommendSongsPage } from './recommend-songs';
import { IonicImageLoader } from 'ionic-image-loader';

@NgModule({
  declarations: [
    RecommendSongsPage,
  ],
  imports: [
    IonicPageModule.forChild(RecommendSongsPage),
    IonicImageLoader
  ],
})
export class RecommendSongsPageModule {}
