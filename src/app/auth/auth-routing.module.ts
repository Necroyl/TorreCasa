import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { ValidarTokenGuard } from '../guards/validar-token.guard';
import { LoguedUserGuard } from '../guards/logued-user.guard';

const routes: Routes = [
  {
    path: '',
    // component: HomeComponent,
    children: [
      {
        path: 'registro',
        component: RegistroComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'perfil',
        component: PerfilComponent,
        canActivate: [ ValidarTokenGuard ],
        canLoad: [ ValidarTokenGuard ]
      },
      {
        path: '**',
        redirectTo: 'login'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
