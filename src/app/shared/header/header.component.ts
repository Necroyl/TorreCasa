import { Component, OnChanges, SimpleChanges } from '@angular/core';
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
  usuario: boolean = false;

  constructor( private authService: AuthService ) { }

  ngOnInit(): void {
    this.usuario = this.authService.isUserLogged();
  }

  menuItems: MenuItem[] = [
    {
      ruta: '/auth/registro',
      nombre: 'Registro'
    },
    {
      ruta: '/auth/login',
      nombre: 'Login'
    }
  ]

  menuItemsRegistrado: MenuItem[] = [
    {
      ruta: '/auth/perfil',
      nombre: 'Perfil'
    },
    {
      ruta: '/auth/logout',
      nombre: 'Logout'
    }
  ]

  navItem: MenuItem = {
    ruta: '/inmo/nuevo',
    nombre: 'Pon tu anuncio',
  }

}
