import { Component } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-bucles',
  templateUrl: './bucles.component.html',
  styleUrls: ['./bucles.component.css']
})
export class BuclesComponent {
  personas:Persona[] = [
    {nombre: 'Juan', edad:21},
    {nombre: 'Seba', edad: 40},
    {nombre: 'Alfredo', edad: 21},
    {nombre: 'Nico', edad: 17},
    {nombre: 'David', edad: 22},
  ] 
}
