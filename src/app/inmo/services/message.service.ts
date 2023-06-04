import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private baseUrl: string = environment.baseUrl ;

  constructor( private http: HttpClient ) { }

  sendMessage(body: string) {
    return this.http.post(`${this.baseUrl}/formulario`, body)
      .pipe(
        catchError( (resp: HttpErrorResponse) =>
          throwError( () => new Error(`Error al enviar el correo. Status: ${resp.status}. Message: ${resp.error.message}`))
        )
      );
  }
}
