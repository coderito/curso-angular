import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  mostrarMensaje:boolean = false;

  mostrar_en_consola (nombre:string, apellido:string) {
    console.log({
      nombre,
      apellido
    })
    this.mostrarMensaje = true; 
  }

  cerrarMensaje () {
    this.mostrarMensaje = false;
  }
}
