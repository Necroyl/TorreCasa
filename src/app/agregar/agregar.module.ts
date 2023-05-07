import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgregarRoutingModule } from './agregar-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AgregarPropComponent } from './agregar-propiedad/agregar-propiedad.component';


@NgModule({
  declarations: [
    AgregarPropComponent
  ],
  imports: [
    CommonModule,
    AgregarRoutingModule,
    ReactiveFormsModule
  ]
})
export class AgregarModule { }
