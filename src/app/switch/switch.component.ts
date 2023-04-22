import { Component } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent {
  dia: number = 0;

  estilo:string = "alert";  

  cambiarDia(numeroDia:string, $event:any) {
    $event.preventDefault();
    this.dia = Number(numeroDia);
  }
}
