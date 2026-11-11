import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-registro',
  styleUrl: './registro.css',
  templateUrl: './registro.html',
})
export class Registro {
  nombre: string = '';
  programa: string = '';
  edad: number | null = null;
  mensaje: string = '';
  estudiantes: { nombre: string; programa: string; edad: number }[] = [];

  registrar() {
    if (!this.nombre.trim() || !this.programa.trim() || this.edad === null || this.edad <= 0) {
      this.mensaje = 'Por favor, complete todos los campos correctamente.';
      return;
    }

    this.estudiantes.push({
      nombre: this.nombre,
      programa: this.programa,
      edad: this.edad
    });

    this.nombre = '';
    this.programa = '';
    this.edad = null;
    this.mensaje = '';
  }
}
