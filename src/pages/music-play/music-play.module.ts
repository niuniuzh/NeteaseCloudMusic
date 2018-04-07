import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MusicPlayPage } from './music-play';

@NgModule({
  declarations: [
    MusicPlayPage,
  ],
  imports: [
    IonicPageModule.forChild(MusicPlayPage),
  ],
})
export class MusicPlayPageModule {}
