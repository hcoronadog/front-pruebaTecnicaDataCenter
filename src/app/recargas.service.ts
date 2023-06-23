import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecargasService {

  private apiUrl = `${environment.apiBackend}/recargas/guardar`; 

  constructor(private http: HttpClient) { }
  enviarDatos(datos: any) {
    // Aquí realiza la llamada a la API utilizando el objeto HttpClient
    return this.http.post(this.apiUrl, datos);
  }
}
