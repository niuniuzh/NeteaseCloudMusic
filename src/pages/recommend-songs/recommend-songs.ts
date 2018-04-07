import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RecommendsAction } from '../../actions/recommend';

/**
 * Generated class for the RecommendSongsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recommend-songs',
  templateUrl: 'recommend-songs.html',
})
export class RecommendSongsPage {

  recommends:Array<object> = null;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    RecommendsAction.getInstance().recommendSongs().subscribe((res)=>{
      console.log(res);
      this.recommends = res.recommend;
    })
    console.log('ionViewDidLoad RecommendSongsPage');
  }

}
