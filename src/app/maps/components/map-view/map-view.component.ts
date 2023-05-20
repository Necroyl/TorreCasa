import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Map } from 'mapbox-gl';
import { MapService } from '../../services/map.service';
import { PlacesService } from '../../services/places.service';

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

  @ViewChild('mapDiv') mapDivElement!: ElementRef;

  constructor( private placesService: PlacesService,
    private mapService: MapService ) {}

  ngAfterViewInit(): void {

    const map = new Map({
      container: this.mapDivElement.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [ -0.6828651046511093, 37.97767760152136 ], // starting position [lng, lat]
      zoom: 13, // starting zoom
      maxBounds: [
        [-0.716000, 37.963000], // Esquina suroeste del límite
        [-0.650000, 38.025000] // Esquina noreste del límite
      ]
    });

    this.mapService.setMap( map );
  }

}
