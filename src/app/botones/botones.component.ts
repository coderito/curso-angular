import { Component } from '@angular/core';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.css']
})
export class BotonesComponent {
  texto:string = "Holaa";

  color:string = "btn-danger";
  color2:string = "";

  state:boolean = false;
  state2:boolean = false;
}
