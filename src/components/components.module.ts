import { NgModule } from '@angular/core';
import { ImageComponent } from './image/image';
import { ViewHeader, ViewSubHeader, ViewFooter, MusicView } from './View/view.component';
import { IonicModule } from 'ionic-angular';
@NgModule({
    declarations: [
        ImageComponent,
        ViewHeader,
        ViewSubHeader,
        ViewFooter,
        MusicView
    ],
    imports: [
        IonicModule
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