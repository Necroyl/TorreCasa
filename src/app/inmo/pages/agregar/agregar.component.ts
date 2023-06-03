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
  fotos: string[] = [];

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
      planta: [, [Validators.required, Validators.min(1)]],
      puerta: ['', [Validators.pattern('^[a-zA-Z0-9]+$')]],
      lat: [0],
      lng: [0],
      descripcion: ['', [Validators.required, Validators.minLength(50)]],
      precio: [0, [Validators.required, Validators.min(0)]],
      fotos: new FormControl( [], [Validators.required])
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

  onFileChange(fileInput: HTMLInputElement){
    if (!fileInput.files || fileInput.files.length === 0)
    {
      return;
    }

    for (let i = 0; i < fileInput.files.length; i++) {
      const reader: FileReader = new FileReader();
      const file: File = fileInput.files[i];

      reader.onload = (event: any) => {
        const foto64: string = event.target.result;
        this.fotos.push(foto64);
      };

      reader.readAsDataURL(file);
    }
  }

  agregar(){
    if(this.miFormulario.valid){

      const vivienda: Vivienda = this.miFormulario.value;
      vivienda.fotos = Array.from(this.fotos);
      vivienda.propietario = this.authService.getUserData();

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
