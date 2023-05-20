import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MapService } from './map.service';
import { Feature, PlacesResponse } from 'src/app/maps/interfaces/places';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  public userLocation?: [number, number];

  get isUserLocationReady(): boolean {
    return !!this.userLocation;
  }
  private baseUrl: string = 'https://api.mapbox.com/geocoding/v5/mapbox.places';
  private token = environment.apiKey;

  public isLoadingPlaces: boolean = false;
  public places: Feature[] = [];

  constructor( private http: HttpClient,
               private mapService: MapService ) {
    this.getUserLocation();
  }

  public async getUserLocation(): Promise<[number, number]>{
    return new Promise( (res, rej) => {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          this.userLocation = [ coords.longitude, coords.latitude ]
          res( this.userLocation )
        },
        ( err ) => {
          alert('No se pudo obtener la geolocalización')
          console.log(err);
          rej();
        }
      );
    })
  }

  getPlacesByQuery( query: string = '') {
    if( query.length === 0 ) {
      this.isLoadingPlaces = false;
      this.places = [];
      return;
    }

    this.isLoadingPlaces = true;

    this.http.get<PlacesResponse>(`${ this.baseUrl }/${ query }.json?country=es&limit=1&language=es&access_token=${ this.token }`)
      .subscribe( resp => {
        // TODO: Filtrar por municipio
          this.isLoadingPlaces = false;
          this.places = resp.features;

          this.mapService.marcador( this.places[0] );
      });
  }

  ocultarResultado() {
    this.places = [];
  }
}
