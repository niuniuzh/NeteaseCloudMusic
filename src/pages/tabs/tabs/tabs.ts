import { Component } from '@angular/core';
import { FindMusicPage } from '../findMusic/findMusic';
import { MyMusicPage } from '../myMusic/myMusic';
import { FriendsPage } from '../friends/friends';
import { AccountPage } from '../account/account';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  findMusic = FindMusicPage;
  myMusic = MyMusicPage;
  friends = FriendsPage;
  account = AccountPage;

  constructor() {

  }
}
