import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ubicacion } from 'src/app/interfaces/propiedad.interface';

@Component({
  selector: 'app-agregar-ubi',
  templateUrl: './agregar-ubicacion.component.html'
})
export class AgregarUbiComponent {
  miFormulario: FormGroup = this.fb.group({
    calle: ['dsfg', [Validators.required]],
    numero: ['dsfg', [Validators.required]],
    piso: ['dfsg', [Validators.required]],
    puerta: ['',],
    lat: ['',],
    lng: ['',]
  });

  ubicacion!: Ubicacion;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {}

  agregar(){
    this.ubicacion = this.miFormulario.value;

    this.router.navigate(['/nuevo/distribucion'], { queryParams: this.ubicacion });
  }
}
