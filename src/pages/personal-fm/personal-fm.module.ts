import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonalFmPage } from './personal-fm';

@NgModule({
  declarations: [
    PersonalFmPage,
  ],
  imports: [
    IonicPageModule.forChild(PersonalFmPage),
  ],
})
export class PersonalFmPageModule {}
