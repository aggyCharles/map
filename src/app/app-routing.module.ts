import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { AppComponent } from './app.component';
import { LoadLiveMapComponent } from './load-live-map/load-live-map.component';
import { PreviewMapComponent } from './preview-map/preview-map.component';

const routes: Routes = [
    { path: 'get-location', component: LoadLiveMapComponent },
    { path: 'preview-location', component: PreviewMapComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
