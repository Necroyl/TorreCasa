import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapScreenComponent } from './pages/map-screen/map-screen.component';

import { LoadingComponent } from './components/loading/loading.component';
import { MapSearchBarComponent } from './components/map-search-bar/map-search-bar.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import { SearchResultComponent } from './components/search-result/search-result.component';

@NgModule({
  declarations: [
    MapScreenComponent,
    MapSearchBarComponent,
    MapViewComponent,
    SearchResultComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MapScreenComponent
  ]
})
export class MapsModule { }
