import { Component } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.css']
})
export class EjemploComponent {
  
  persona:Persona = {
		nombre: "Juan Eulufi",
		edad: 30
	}
}
