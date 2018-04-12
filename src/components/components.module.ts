import { NgModule } from '@angular/core';
import { ImageComponent } from './image/image';
import { ViewHeader, ViewSubHeader, ViewFooter, MusicView } from './View/view.component';
import { IonicModule } from 'ionic-angular';
import { IonicImageLoader } from 'ionic-image-loader';

@NgModule({
    declarations: [
        ImageComponent,
        ViewHeader,
        ViewSubHeader,
        ViewFooter,
        MusicView
    ],
    imports: [
        IonicModule, IonicImageLoader
    ],
    exports: [
        ImageComponent,
        ViewHeader,
        ViewSubHeader,
        ViewFooter,
        MusicView
    ]
})
export class ComponentsModule { }