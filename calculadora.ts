import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-calculadora',
  styleUrl: './calculadora.css',
  templateUrl: './calculadora.html',
})
export class Calculadora {
  num1: Number | null = null;
  num2: number | null = null;
  resultado: number | null = null;
  mensaje: string = '';

  validar(): boolean {
    if (this.num1 === null || this.num2 === null) {
      this.mensaje = 'Ingrese los dos numeros...';
      this.resultado = null;
      return false;
    }
    this.mensaje = '';
    return true
  }

  sumar() {
    if (this.validar()) {
      this.resultado = Number(this.num1) + Number(this.num2);
    }
  }

  restar() {
    if (this.validar()) {
      this.resultado = Number(this.num1) - Number(this.num2);
    }
  }
}
