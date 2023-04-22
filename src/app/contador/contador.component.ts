import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css'],
})
export class ContadorComponent {
  numero: number = 1;

  suma() {
    this.numero = this.numero + 1;
  }

  restar() {
    this.numero = this.numero - 1;
  }

  reset() {
    this.numero = 0;
  }
}
