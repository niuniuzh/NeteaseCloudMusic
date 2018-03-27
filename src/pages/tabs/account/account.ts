import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AccountAction } from '../../../actions/account';

@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {

  constructor(public navCtrl: NavController) {

  }

  //ionViewDidLoad
  //ionViewWillEnter
  ionViewDidEnter() {
    AccountAction.getInstance().getUserDetail().subscribe((res) => {
      console.log('success', res);
    }, (error) => {
      console.log('error', error);
    })
    AccountAction.getInstance().getSubCount().subscribe((res)=>{
      console.log('success',res);
    },(error)=>{
      console.log('error', error);
    })
  }
  //ionViewWillLeave
  //ionViewDidLeave
  //ionViewWillUnload
  //

  onSign() {
    AccountAction.getInstance().getSign().subscribe(() => {
      console.log('success');
    }, () => {
      console.log('error');
    });
  }

}
