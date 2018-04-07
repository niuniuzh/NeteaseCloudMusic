import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecommendSongsPage } from './recommend-songs';

@NgModule({
  declarations: [
    RecommendSongsPage,
  ],
  imports: [
    IonicPageModule.forChild(RecommendSongsPage),
  ],
})
export class RecommendSongsPageModule {}
