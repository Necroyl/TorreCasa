import { Component } from '@angular/core';

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

  navItems: MenuItem[] = [
    {
      ruta: '/nuevo/ubicacion',
      nombre: 'Pon tu anuncio'
    }
  ]
}
