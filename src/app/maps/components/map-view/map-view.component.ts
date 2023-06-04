import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Map, Marker, Popup } from 'mapbox-gl';
import { MapService } from '../../services/map.service';
import { PlacesService } from '../../services/places.service';
import { Vivienda } from 'src/app/inmo/interfaces/vivienda.interface';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styles: [
    `
    .map-container{
      position: relative;
      height: 250px;
      width: auto;
      border-radius: 10px;
    }
    `
  ]
})
export class MapViewComponent implements AfterViewInit {
  @Input() viviendas?: Vivienda[];
  @Input() vivienda?: Vivienda;
  @ViewChild('mapDiv') mapDivElement!: ElementRef;

  constructor(
    private mapService: MapService ) {}

  ngAfterViewInit(): void {

    const map = new Map({
      container: this.mapDivElement.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [ -0.682254 , 37.974320  ], // starting position [lng, lat]
      zoom: 12, // starting zoom
      maxBounds: [
        [-0.716000, 37.963000], // Esquina suroeste del límite
        [-0.650000, 38.025000] // Esquina noreste del límite
      ]

    });

    if(this.viviendas){
      this.viviendas.forEach( vivienda => {
        const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16))

        const popup = new Popup().setHTML(
          `
          <div class="row">
            <div class="col-9">
              <h6>${vivienda.precio} €</h6>
              <span>${vivienda.direccion}</span>
            </div>
            <div class="col-3">
            <a href='/inmo/${vivienda._id}' class="btn btn-primary btn-small mt-3 float-end">Ir</a>
            </div>
          </div>
          `
        );

        const marker = new Marker({ color: color })
        .setLngLat([vivienda.lng, vivienda.lat])
        .addTo( map )
        .setPopup(popup)
      });
    }

    if(this.vivienda){
      const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16))

      const marker = new Marker({color: color})
        .setLngLat([this.vivienda.lng, this.vivienda.lat])
        .addTo( map )

        map.setZoom(17).setCenter([this.vivienda.lng, this.vivienda.lat ])
    }

    this.mapService.setMap( map );
  }

}
