import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Feature } from 'src/app/maps/interfaces/places';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent {

  direccion: string = '';
  lng?: number;
  lat?: number;

  recibirLugarSeleccionado( place: Feature) {
    this.direccion = place.place_name.split(',')[0];
    this.lng = place.geometry.coordinates[0];
    this.lat = place.geometry.coordinates[1];
  }

  miFormulario: FormGroup = this.fb.group({
    direccion: ['', [Validators.required]],
    planta: [0, [Validators.required, Validators.min(1)]],
    puerta: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$')]],
    lat: [0],
    lng: [0],
    metros: [0, [Validators.required, Validators.min(25)]],
    habitaciones: [0, [Validators.required, Validators.min(1)]],
    banyos: [0, [Validators.required, Validators.min(1)]],
    cocina: ['', [Validators.required]],
    terraza: [false, [Validators.required]],
    balcon: [false, [Validators.required]],
    piscina: [false, [Validators.required]],
    estado: ['', [Validators.required]],
    precio: [0, [Validators.required]],
    fotos: [ [] , [Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {}

  agregar(){
    console.log(this.miFormulario.value)
  }
}
