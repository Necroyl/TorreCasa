import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError, retry, of } from 'rxjs';
import { Vivienda } from 'src/app/interfaces/vivienda.interface';
import { ViviendaResponse, ViviendasResponse } from 'src/app/interfaces/response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ViviendaService {

  private baseUrl: string = environment.baseUrl ;
  private _vivienda!: Vivienda;

  get propiedad() {
    return { ...this._vivienda };
  }

  constructor(private http: HttpClient) { }

  getAll(): Observable<Vivienda[]>{
    const url: string = `${this.baseUrl}/viviendas`;
    const viviendas: Vivienda[] = [];

    return this.http.get<ViviendasResponse>(url).pipe(
      retry(3),
      map( (response) => response.viviendas ),
      catchError( (resp: HttpErrorResponse ) =>
        throwError(
          () => new Error (
            `Error al buscar las viviendas. Staturs: ${ resp.status }. Message: ${ resp.error.message }`
          )
        )
      )
    );
  }

  getOne(id: string): Observable<Vivienda>{
      return this.http.get<ViviendaResponse>(`${this.baseUrl}/viviendas/${id}`)
      .pipe( map( (response) => response.vivienda ));
  }

  add(vivienda: Vivienda): Observable<ViviendaResponse>{
    return this.http.post<ViviendaResponse>(`${this.baseUrl}/viviendas/nueva`, vivienda)
      .pipe(
        catchError( (resp: HttpErrorResponse) =>
          throwError( () => new Error(`Error al agregar la vivienda. Status: ${resp.status}. Message: ${resp.error.message}`))
        )
      )
  }

  delete(vivienda: Vivienda): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/viviendas/${vivienda._id}`)
      .pipe(
        retry(3),
        catchError( (resp: HttpErrorResponse) =>
          throwError( () => new Error (`Error al borrar la vivienda. Status: ${resp.status}. Message: ${resp.error.message}`))
        )
      )
  }
}


