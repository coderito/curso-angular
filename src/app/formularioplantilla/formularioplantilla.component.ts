import { Component } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-formularioplantilla',
  templateUrl: './formularioplantilla.component.html',
  styleUrls: ['./formularioplantilla.component.css']
})
export class FormularioplantillaComponent {
  persona:Persona = {
    nombre: '',
    edad: Number('')
  }

  procesarFormulario() {
    console.log(this.persona)
  }
}
