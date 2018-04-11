import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlayListAction } from '../../actions/playList';

/**
 * Generated class for the TopPlayListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-top-play-list',
  templateUrl: 'top-play-list.html',
})
export class TopPlayListPage {

  playlists:Array<object>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    PlayListAction.getInstance().getHighQualityList().subscribe((res) => {
      this.playlists = res;
    }, error => {

    })
    console.log('ionViewDidLoad TopPlayListPage');
  }

}
