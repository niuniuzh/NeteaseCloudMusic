
import { ToastController } from 'ionic-angular';
import { pluginManager } from './pluginManager';

export class Toast {
    private static m_Toast: Toast;
    private toastCtrl: ToastController;

    public static getInstance(): Toast {
        if (!this.m_Toast) {
            this.m_Toast = new Toast();
        }
        return this.m_Toast;
    }
    private constructor() {
        this.toastCtrl = new ToastController(pluginManager.getInstance().app, pluginManager.getInstance().config)
    }
    public showToast(message: string, position?: string, time?: number) {
        const toast = this.toastCtrl.create({
            message: message,
            position: position ? position : "middle",
            duration: time ? time : 2000,
            cssClass: "center"
        });
        toast.present();
    }
}