import { Component, EventEmitter, Output } from '@angular/core';
import { PlacesService } from '../../services/places.service';
import { Feature } from '../../interfaces/places';

@Component({
  selector: 'app-map-screen',
  templateUrl: './map-screen.component.html',
  styleUrls: []
})
export class MapScreenComponent {
  @Output() lugarSeleccionado = new EventEmitter<Feature>();

  constructor( private placesService: PlacesService ){}

  get isUserLocationReady() {
    return this.placesService.isUserLocationReady;
  }

  recibirLugarSeleccionado( place: any ){
    this.lugarSeleccionado.emit(place);
  }

}
