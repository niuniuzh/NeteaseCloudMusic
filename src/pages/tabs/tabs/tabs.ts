import { Component } from '@angular/core';
import { FindMusicPage } from '../findMusic/findMusic';
import { MyMusicPage } from '../myMusic/myMusic';
import { AccountPage } from '../account/account';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  findMusic = FindMusicPage;
  myMusic = MyMusicPage;
  account = AccountPage;

  constructor() {

  }
}
