import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import { FormsModule } from '@angular/forms';
import { RecargasService } from '../recargas.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-recargas',
  templateUrl: './recargas.component.html',
  styleUrls: ['./recargas.component.css']
})
export class RecargasComponent implements OnInit {
  id: any;
  dataOperador: any[]= [];
  operadorSeleccionado: any;
  cantidadSeleccionada: any;
  valorRecarga: number = 0;
  numeroTelefonico: any;
  valorMinuto: any;
  messageGuarda: any;


  private apiUrl = `${environment.apiBackend}/operador/getOperadores`; 

  constructor(private route: ActivatedRoute,
              private http: HttpClient,
              private recargaService: RecargasService,
              private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  
    this.http.get<any[]>(this.apiUrl).subscribe(
      response => {
        this.dataOperador = response;
      },
      error => {
        console.log('Error al obtener los datos:', error);
      }
    );
  }
  
  calculoValor () {
    
    this.valorMinuto = this.obtenerValor(this.operadorSeleccionado);
    
    this.valorRecarga = this.cantidadSeleccionada * this.valorMinuto;
  }

  public obtenerValor(id: number): number {
    
    const objetoEncontrado = this.dataOperador.find(objeto => objeto.idOperador == id);
    return objetoEncontrado ? objetoEncontrado.valorRecargaMinuto : null;
  }

  guardarRecargas() {
    const datos = {
      idVendedor: this.id,
      cantidad: this.cantidadSeleccionada,
      idOperador: this.operadorSeleccionado,
      valorRecarga: this.valorRecarga,
      fechaVenta: new Date(),
      numeroCelular: this.numeroTelefonico
      // Agrega aquí todas las propiedades del formulario que deseas enviar
    };

    this.recargaService.enviarDatos(datos)
      .subscribe(
        response => {
          console.log('Datos guardados exitosamente', response);
         this.cantidadSeleccionada  = '';
         this.operadorSeleccionado  = '';
         this.valorRecarga  = 0;
         this.numeroTelefonico  = null;
         this.messageGuarda = 'Datos guardados exitosamente';
         // this.router.navigate([`/recargas/${this.id}`]);
          // Realiza aquí cualquier acción adicional después de guardar los datos
        },
        error => {
          console.error('Error al guardar los datos', error);
          // Realiza aquí cualquier acción adicional en caso de error
        }
      );
  }

}
