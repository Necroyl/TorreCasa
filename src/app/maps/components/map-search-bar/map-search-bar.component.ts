import { Component, EventEmitter, Output } from '@angular/core';
import { PlacesService } from '../../../maps/services/places.service';
import { MapService } from '../../../maps/services/map.service';
import { Feature } from 'src/app/maps/interfaces/places';

@Component({
  selector: 'app-map-search-bar',
  templateUrl: './map-search-bar.component.html',
  styles: [
    `
    .search-container{
      position: relative;
      width: 100%;

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
export class MapSearchBarComponent {

  @Output() lugarSeleccionado = new EventEmitter<Feature>();

  private debounceTimer?: NodeJS.Timeout;

  recibirLugarSeleccionado( place: any ){
    this.lugarSeleccionado.emit(place);
  }

  constructor( private placesService: PlacesService, private mapService: MapService ) {}

  get places(): Feature[] {
    return this.placesService.places;
  }

  onQueryChanged( query: string = '' ){
    if( this.debounceTimer ) { clearTimeout( this.debounceTimer ) };

    this.debounceTimer = setTimeout( () => {
      this.placesService.getPlacesByQuery( query );
    }, 500);
  }

  flyTo( place: Feature ) {
    const [ lng, lat ] = place.center;
    this.mapService.flyTo([ lng, lat ]);
  }
}
