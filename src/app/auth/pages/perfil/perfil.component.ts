import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styles: [
    `
    * {
      margin: 15px;
    }
    `
  ]
})
export class PerfilComponent {

  get usuario() {
    return this.authService.usuario;
  }

  constructor( private router: Router,
               private authService: AuthService ) {}

  logout(){
    this.router.navigateByUrl('/auth');
    this.authService.logout();
  }
}
