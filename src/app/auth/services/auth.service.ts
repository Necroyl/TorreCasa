import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { AuthResponse, Usuario } from '../interfaces/usuario';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl ;
  private _usuario!: Usuario;

  get usuario() {
    return { ...this._usuario };
  }

  constructor( private http: HttpClient ) { }

  login( email: string, password: string ) {
    const url: string = `${ this.baseUrl }/api/auth`;
    const body = { email, password };

    return this.http.post<AuthResponse>( url, body )
      .pipe(
        tap( resp => {
          if( resp.ok ){
            localStorage.setItem('token', resp.token!)
          }
        }),
        map( resp => resp.ok ),
        catchError( err => of(err.error.msg) )
      );
  }

  registro( name: string, email: string, password: string){
    const url: string = `${ this.baseUrl }/api/auth/new`;
    const body = { name, email, password };

    return this.http.post<AuthResponse>( url, body )
      .pipe(
        tap( resp => {
          if( resp.ok ){
            localStorage.setItem('token', resp.token!)
          }
        }),
        map( resp => resp.ok ),
        catchError( err => of(err.error.msg) )
      );
  }

  validarToken(): Observable<boolean> {
    const url: string = `${ this.baseUrl }/api/auth/renew`;
    const headers = new HttpHeaders()
          .set( 'x-token', localStorage.getItem('token') || '' );

    return this.http.get<AuthResponse>( url, { headers } )
          .pipe(
            map( resp => {
              localStorage.setItem('token', resp.token!)

              this._usuario = {
                name: resp.name!,
                uid: resp.uid!,
                email: resp.email!
              }

              return resp.ok;
            }),
            catchError( err => of(false) )
          )
  }

  logout() {
    localStorage.clear();
  }

  getUserData(): any {
    const token = localStorage.getItem('token');

    // Aquí puedes realizar la lógica para decodificar el token y obtener los datos del usuario
    // Por ejemplo, si el token es un JSON con los datos del usuario, puedes hacer:
    const userData = JSON.parse(atob(token!.split('.')[1]));

    return userData;
  }
}
