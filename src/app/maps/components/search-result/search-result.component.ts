import { Component, EventEmitter, Output } from '@angular/core';
import { PlacesService } from '../../services/places.service';
import { Feature } from 'src/app/maps/interfaces/places';
import { MapService } from '../../services/map.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styles: [
  ]
})
export class SearchResultComponent {

  @Output() lugarSeleccionado = new EventEmitter<Feature>();

  constructor( private placesService: PlacesService,
               private mapService: MapService ) {}

  get isLoadingPlaces(): boolean {
    return this.placesService.isLoadingPlaces;
  }

  get places(): Feature[] {
    return this.placesService.places;
  }

  flyTo( place: Feature ) {
    if(place.context[1].text_es === 'Torrevieja') {
      const [ lng, lat ] = place.center;
      this.mapService.flyTo([ lng, lat ]);
    }
  }

  saveData( place: Feature ) {
    // Valida que la localización está en Torrevieja

    if(place.context[1].text_es === 'Torrevieja') {
      this.placesService.ocultarResultado();

      // Manda datos a componente 'agregar'
      this.lugarSeleccionado.emit(place);
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'CUIDADO!',
        text: 'La ubicación de la vivienda debe ser en Torrevieja'
      })
    }

  }
}
