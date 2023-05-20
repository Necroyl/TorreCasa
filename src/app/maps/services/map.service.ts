import { Injectable } from '@angular/core';
import { LngLatLike, Map, Marker, Popup } from 'mapbox-gl';
import { Feature } from 'src/app/maps/interfaces/places';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private map?: Map;
  private marker?: Marker;

  get isMapReady(){
    return !!this.map;
  }

  setMap( map: Map) {
    this.map = map;
  }

  constructor() { }

  flyTo( coords: LngLatLike ){
    if( !this.isMapReady ) throw Error('El mapa no está inicializado');

    this.map?.flyTo({
      zoom: 17,
      center: coords
    })
  }

  marcador( place: Feature ) {
    if( !this.map ) throw Error('Mapa no inicializado');
    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16))

    this.marker?.remove();
    const [ lng, lat ] = place.center;

    const popup = new Popup()
      .setHTML(`
        <h6>${ place.text }<6>
        <span>${ place.place_name }<span>
      `);

    this.marker = new Marker({
      color: color })
      .setLngLat( [lng, lat] )
      .setPopup( popup )
      .addTo( this.map )
  }
}
