import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropiedadesService {

  constructor(private http: HttpClient) { }

  getPropiedades(): Observable<any>{
    return this.http.post<any>('http://localhost:8080/propiedades', {});
  }

}
