import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VoiceSearchPage } from './voice-search';
import { AppModule } from '../../app/app.module';

@NgModule({
  declarations: [
    VoiceSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(VoiceSearchPage),
  ],
})
export class VoiceSearchPageModule {}
