import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

interface MenuItem {
  ruta: string,
  nombre: string
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
    `
    li {
      cursor: pointer;
    }
    `
  ]
})
export class HeaderComponent {

  menuItems: MenuItem[] = [
    {
      ruta: '/inmo/favoritos',
      nombre: 'Favoritos'
    },
    {
      ruta: '/auth/perfil',
      nombre: 'Perfil'
    },
    {
      ruta: '/auth/registro',
      nombre: 'Registro'
    },
    {
      ruta: '/auth/login',
      nombre: 'Login'
    }
  ]

  navItem: MenuItem = {
    ruta: '/inmo/nuevo',
    nombre: 'Pon tu anuncio',
  }

}
