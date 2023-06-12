import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent{
  miFormulario: FormGroup = this.fb.group({
    email: ['test1@test.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  login() {
    const { email, password } = this.miFormulario.value;

    this.router.navigateByUrl('/auth/perfil');

    this.authService.login(email, password)
      .subscribe( (ok) => {
        if (ok === true) {
          this.router.navigateByUrl('/auth/perfil').then( () => {
            window.location.reload();
          });
        } else {
          Swal.fire('¡ERROR!', ok, 'error');
        }
    });
  }
}
