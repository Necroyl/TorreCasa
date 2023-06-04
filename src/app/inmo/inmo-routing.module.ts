import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListadoComponent } from './pages/listado/listado.component';
import { ViviendaComponent } from './pages/vivienda/vivienda.component';
import { HomeComponent } from './pages/home/home.component';
import { ValidarTokenGuard } from '../guards/validar-token.guard';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'nuevo',
        component: AgregarComponent,
        canActivate: [ ValidarTokenGuard ],
        canLoad: [ ValidarTokenGuard ]
      },
      {
        path: 'listado',
        component: ListadoComponent
      },
      {
        path: 'contacto/:correo',
        component: ContactoComponent,
        canActivate: [ ValidarTokenGuard ],
        canLoad: [ ValidarTokenGuard ]
      },
      {
        path: ':id',
        component: ViviendaComponent
      },
      {
        path: '**',
        redirectTo: 'home'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InmoRoutingModule { }
