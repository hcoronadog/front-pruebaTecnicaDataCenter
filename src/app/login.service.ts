import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = `${environment.apiBackend}/security/login`; 
  constructor(private http: HttpClient) { }

  login(usuario: string, password: string): Observable<any> {
    const requestBody = {
      usuario: usuario,
      password: password
    };

    return this.http.post(this.apiUrl, requestBody);
  }  
}
