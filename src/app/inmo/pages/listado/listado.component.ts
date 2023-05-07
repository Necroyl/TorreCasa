import { Component, OnInit } from '@angular/core';
import { PropiedadesService } from '../../services/propiedades.service';
import { PropIdealista } from 'src/app/interfaces/inerfaz-idea.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class ListadoComponent implements OnInit {
  propiedades: PropIdealista[] = [];

  constructor( private ps: PropiedadesService) {}

  ngOnInit() {
    this.ps.getPropiedades().subscribe( res => {
      this.propiedades = res.resultado.elementList;
    })
  }
}
