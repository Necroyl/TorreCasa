import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './pages/logout/logout.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent,
    PerfilComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
