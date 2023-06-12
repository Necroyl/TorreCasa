import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styles: [
  ]
})
export class LogoutComponent {
  constructor( private authService: AuthService,
               private router: Router) {}

  ngOnInit() {
    this.authService.logout();
    this.router.navigateByUrl('/auth/login').then( () => {
      window.location.reload();
    });
  }
}
