import { Component } from '@angular/core';
import { TabsPage } from '../tabs/tabs/tabs';
import { LoginAction } from '../../actions/login';
import { Toast } from '../../utils/toastManager';
import { pluginManager } from '../../utils/pluginManager';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {

    phone: any;
    password: any;

    constructor() {
    }

    onLogin = function () {
        LoginAction.getInstance().getLogin().subscribe((res) => {
            console.log(res);
            pluginManager.getInstance().app.getRootNav().setRoot(TabsPage);
        }, error => {
            Toast.getInstance().showToast(error.msg);
        })
    }
}