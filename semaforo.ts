import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-semaforo',
  styleUrl: './semaforo.css',
  templateUrl: './semaforo.html',
})
export class Semaforo {
  colorActual: string = 'gray';
  mensaje: string = 'Seleccione un color';

  cambiarColor(color: string) {
    this.colorActual = color;

    switch (color) {
      case 'red':
        this.mensaje = 'Detenerse';
        break;
      case 'yellow':
        this.mensaje = 'Precaución';
        break;
      case 'green':
        this.mensaje = 'Avanzar';
        break;
    }
  }
}
