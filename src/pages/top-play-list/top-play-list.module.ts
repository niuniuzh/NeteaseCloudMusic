import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TopPlayListPage } from './top-play-list';

@NgModule({
  declarations: [
    TopPlayListPage,
  ],
  imports: [
    IonicPageModule.forChild(TopPlayListPage),
  ],
})
export class TopPlayListPageModule {}
