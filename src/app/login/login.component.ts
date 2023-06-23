import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import {Router} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

 
  usuario: any;
  password: any;
  errorMessage: any;
  constructor (private loginService: LoginService,
              private router: Router) {
    
  }

  onSubmit(): void {
    
    this.loginService.login(this.usuario, this.password).subscribe(
      response => {
        // Manejar la respuesta exitosa de la API
        console.log('Responde: ' + response);
        if (response == 0) {
          this.errorMessage = 'Correo electronico o password inválidos';
        } else {
          this.router.navigate([`/recargas/${response}`]);
        }
      },
      error => {
        // Manejar el error de la API
        console.error(error);
      }
    );
  }

}
