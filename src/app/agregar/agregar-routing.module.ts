import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AgregarUbiComponent } from './agregar-ubicacion/agregar-ubicacion.component';
import { AgregarDistComponent } from './agregar-distribucion/agregar-distribucion.component';
import { AgregarPropComponent } from './agregar-propiedad/agregar-propiedad.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'ubicacion',
        component: AgregarUbiComponent,
      },
      {
        path: 'distribucion',
        component: AgregarDistComponent
      },
      {
        path: 'propiedad',
        component: AgregarPropComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgregarRoutingModule { }
