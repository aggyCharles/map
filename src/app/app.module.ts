import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreviewMapComponent } from './preview-map/preview-map.component';
import { LoadLiveMapComponent } from './load-live-map/load-live-map.component';


@NgModule({
    declarations: [
        AppComponent,
        PreviewMapComponent,
        LoadLiveMapComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
