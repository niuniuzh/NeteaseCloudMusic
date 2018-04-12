import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ImageLoader } from 'ionic-image-loader';

@Component({
  selector: 'page-myMusic',
  templateUrl: 'myMusic.html'
})
export class MyMusicPage {

  constructor(public navCtrl: NavController, private imageloader: ImageLoader) {
    this.imageloader.preload('assets/v_rrl_0123.png');
    this.imageloader.clearCache();
  }

}