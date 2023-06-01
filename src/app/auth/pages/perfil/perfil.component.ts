import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styles: []
})
export class PerfilComponent {

  mailForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });

  passForm: FormGroup = this.fb.group({
    pass: ['', [Validators.required, Validators.minLength(6)]],
    repPass: ['', [Validators.required, Validators.minLength(6)]]
  });

  get usuario() {
    return this.authService.usuario;
  }

  constructor( private router: Router,
               private authService: AuthService,
               private fb: FormBuilder ) {}

  logout(){
    this.router.navigateByUrl('/auth');
    this.authService.logout();
  }

  cambiarPass(){
    if(this.passForm.valid && (this.passForm.get('pass')!.value === this.passForm.get('repPass')!.value)) {
      this.authService.cambiarPass(this.passForm.get('pass')!.value, this.usuario.uid)
        .subscribe( resp => {
          if( resp.ok === true ) {
            Swal.fire('¡Éxito!', resp.msg, 'success')
          } else {
            Swal.fire('¡ERROR!', resp.msg, 'error')
          }
        })
    } else {
      Swal.fire('¡ERROR!', 'Las contraseñas deben ser iguales', 'error')
    }
  }

  cambiarEmail(){
    this.authService.cambiarEmail( this.mailForm.get('email')!.value, this.usuario.uid )
      .subscribe( resp => {
        if( resp ){
          Swal.fire('¡Éxito!', resp, 'success').then( () =>{
            location.reload();
          });
        }else{
          Swal.fire('¡ERROR!', resp, 'error')
        }
      })
  }
}
