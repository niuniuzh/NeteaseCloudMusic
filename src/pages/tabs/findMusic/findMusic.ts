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
    if(this.bannersImage.length){
      setTimeout(() => {
        if (true) {
          this.slides.freeMode = true;
          this.slides.autoplay = 2000;
          this.slides.speed = 500;
          this.slides.loop = true;
          this.slides.startAutoplay()
        }
      }, 1000)
      return;
    }
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
    this.navCtrl.push('VoiceSearchPage');
    console.log("voiceSearch");
  }
  music() {
    this.navCtrl.push('MusicPlayPage');
    console.log("music");
  }
  search() {
    this.navCtrl.push('SearchPage');
    console.log("search");
  }
  personalFM(){
    this.navCtrl.push('PersonalFmPage');
    console.log("PersonalFmPage");

  }
  dailyRecommend(){
    this.navCtrl.push('RecommendSongsPage');
    console.log("RecommendSongsPage");
    
  }
  musicList(){
    this.navCtrl.push('TopPlayListPage');
    console.log("TopPlayListPage");
    
  }
  upBill(){
    this.navCtrl.push('TopListPage');
    console.log("TopListPage");
    
  }

}
