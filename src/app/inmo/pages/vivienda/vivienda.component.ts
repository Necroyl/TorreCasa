import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vivienda } from 'src/app/interfaces/vivienda.interface';
import { ViviendaService } from '../../services/viviendas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vivienda',
  templateUrl: './vivienda.component.html',
  styles: [
    `
    .btn-fuchsia {
      background-color: #f805fb;
      border-color: #f805fb;
      color: white;
    }
    `
  ]
})
export class ViviendaComponent implements OnInit {
  viviendaId!: string | null;
  vivienda!: Vivienda;

  constructor(
    private route: ActivatedRoute,
    private viviendaService: ViviendaService,
    private router: Router ) {}

  ngOnInit(): void {
    this.viviendaId = this.route.snapshot.paramMap.get('id');
    this.viviendaService.getOne(this.viviendaId!).subscribe((res) => {
      this.vivienda = res;
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
          this.router.navigate(['/listado']);
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
