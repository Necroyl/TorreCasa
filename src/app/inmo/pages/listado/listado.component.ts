import { Component, OnInit } from '@angular/core';
import { ViviendaService } from '../../services/viviendas.service';
import { Vivienda } from 'src/app/inmo/interfaces/vivienda.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
    `
    .map {
      background-color: white;
      box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      margin-bottom: 10px;
      margin-top: 10px;
      padding: 3px;
    }
    `
  ]
})
export class ListadoComponent implements OnInit {
  viviendas: Vivienda[] = [];

  constructor( private viviendaService: ViviendaService ) {}

  ngOnInit() {
    this.viviendaService.getAll().subscribe( (res) => {
      if(res)
        this.viviendas = res;
    })
  }

  onRestaurantDeleted(vivienda: Vivienda){
    this.viviendaService.delete(vivienda).subscribe({
      next: () => {
        Swal.fire({
          icon: 'success',
          title: 'Borrado',
          text: 'La vivienda ha sido borrada!',
        }).then(() => {
          location.reload();
        })
      },
      error: (error) => {
        Swal.fire({
          icon: 'error',
          title: 'ERROR',
          text: 'No se ha podido borrar la vivienda.',
        });
      },
    });
  }
}
