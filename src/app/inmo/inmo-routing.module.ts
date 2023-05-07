import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListadoComponent } from './pages/listado/listado.component';
import { PropiedadComponent } from './pages/propiedad/propiedad.component';
import { HomeComponent } from './pages/home/home.component';
import { ValidarTokenGuard } from '../guards/validar-token.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'favoritos',
        component: ListadoComponent,
        canActivate: [ ValidarTokenGuard ],
        canLoad: [ ValidarTokenGuard ]
      },
      {
        path: 'listado',
        component: ListadoComponent
      },
      {
        path: ':id',
        component: PropiedadComponent
      },
      {
        path: '**',
        redirectTo: 'listado'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InmoRoutingModule { }
