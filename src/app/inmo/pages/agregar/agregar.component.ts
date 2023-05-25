import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Vivienda } from 'src/app/interfaces/vivienda.interface';
import { Feature } from 'src/app/maps/interfaces/places';
import { ViviendaService } from '../../services/viviendas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  miFormulario!: FormGroup;

  direccion: string = '';
  lng?: number;
  lat?: number;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private vivService: ViviendaService
  ) {}

  ngOnInit(): void {

    this.miFormulario = this.fb.group({
      direccion: ['', [Validators.required]],
      planta: [4, [Validators.required, Validators.min(1)]],
      puerta: [''],
      lat: [0],
      lng: [0],
      descripcion: [
        'Incluye una descripción detallada de tu vivienda. No olvides datos de interés como los metros cuadrados, número de habitaciones, baños, etc. También es importante conocer el estado de la vivienda y si dispone de terraza, balcón o piscina.',
        [Validators.required, Validators.minLength(50)]],
      precio: [200000, [Validators.required]],
      foto: new FormControl('', [Validators.required])
    });

  }

  recibirLugarSeleccionado( place: Feature) {
    this.direccion = place.place_name.split(',')[0];
    this.lng = place.geometry.coordinates[0];
    this.lat = place.geometry.coordinates[1];

    this.miFormulario.patchValue({
      direccion: this.direccion,
      lng: this.lng,
      lat: this.lat
    })
  }

  onFileChange(event:any){
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log
      this.miFormulario.patchValue({
        foto: file
      });
    }
  }

  agregar(){
    if(this.miFormulario.valid){
      const vivienda: Vivienda = this.miFormulario.value;

      vivienda.propietario = this.authService.getUserData();
      console.log(vivienda)

      this.vivService.add(vivienda).subscribe( response => {
        if( response ){
          Swal.fire('¡Éxito!', 'La vivienda ha sido creada satisfactoriamente', 'success').then( () =>{
            this.router.navigateByUrl('/inmo/listado')
          });
        }else{
          Swal.fire('¡ERROR!', response, 'error')
        }
      })
    }
  }
}
