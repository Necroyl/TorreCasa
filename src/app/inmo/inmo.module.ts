import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InmoRoutingModule } from './inmo-routing.module';
import { ListadoComponent } from './pages/listado/listado.component';
import { HomeComponent } from './pages/home/home.component';
import { PropiedadComponent } from './pages/propiedad/propiedad.component';
import { PropCardComponent } from './components/prop-card/prop-card.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AgregarDistComponent } from '../agregar/agregar-distribucion/agregar-distribucion.component';
import { AgregarUbiComponent } from '../agregar/agregar-ubicacion/agregar-ubicacion.component';


@NgModule({
  declarations: [
    AgregarUbiComponent,
    AgregarDistComponent,
    ListadoComponent,
    HomeComponent,
    PropiedadComponent,
    PropCardComponent,
    SearchBarComponent,
  ],
  imports: [
    CommonModule,
    InmoRoutingModule,
    ReactiveFormsModule
  ]
})
export class InmoModule { }
