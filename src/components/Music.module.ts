import { ViewHeader, ViewSubHeader, ViewFooter, MusicView } from './View/view.component';
import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

@NgModule({
    declarations: [
        ViewHeader, 
        ViewSubHeader, 
        ViewFooter, 
        MusicView
    ],
    imports: [
        IonicModule
    ],
    exports: [
        ViewHeader, 
        ViewSubHeader, 
        ViewFooter, 
        MusicView
    ]
})
export class MusicModule { }