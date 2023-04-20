import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InmoRoutingModule } from './inmo-routing.module';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { HomeComponent } from './pages/home/home.component';
import { PropiedadComponent } from './pages/propiedad/propiedad.component';
import { PropCardComponent } from './components/prop-card/prop-card.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';


@NgModule({
  declarations: [
    AgregarComponent,
    ListadoComponent,
    HomeComponent,
    PropiedadComponent,
    PropCardComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    InmoRoutingModule
  ]
})
export class InmoModule { }
