import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { FindAction } from '../../../actions/findMusic';
import { Toast } from '../../../utils/toastManager';

@Component({
  selector: 'page-findMusic',
  templateUrl: 'findMusic.html'
})
export class FindMusicPage {
  @ViewChild(Slides) slides: Slides;
  bannersImage: Array<any> = [];
  constructor(public navCtrl: NavController) {

  }
  ionViewDidEnter() {
    FindAction.getInstance().getBanner().subscribe((res) => {
      console.log(res.banners);
      this.bannersImage = res.banners;
      setTimeout(() => {
        if (true) {
          this.slides.freeMode = true;
          this.slides.autoplay = 2000;
          this.slides.speed = 500;
          this.slides.loop = true;
          this.slides.startAutoplay()
        }
      }, 1000)
    }, error => {
      Toast.getInstance().showToast(error.msg);
    });
  }
  voiceSearch() {
    console.log("voiceSearch");
  }
  music() {
    console.log("music");
  }
  search() {
    console.log("search");
  }

}
