import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-control',
  styleUrl: './control.css',
  templateUrl: './control.html',
})
export class Control {
  nombre: string = '';
  cantidad: number | null = null;
  precio: number | null = null;
  mensaje: string = '';

  productos: { nombre: string; cantidad: number; precio: number }[] = [];

  agregar() {
    if (!this.nombre.trim() || this.cantidad === null || this.precio === null) {
      this.mensaje = 'Por favor, complete todos los campos.';
      return;
    }

    if (this.cantidad < 0 || this.precio < 0) {
      this.mensaje = 'No se permiten cantidades ni precios negativos.';
      return;
    }

    this.productos.push({
      nombre: this.nombre,
      cantidad: this.cantidad,
      precio: this.precio
    });

    this.nombre = '';
    this.cantidad = null;
    this.precio = null;
    this.mensaje = '';
  }

  eliminar(index: number) {
    this.productos.splice(index, 1);
  }
}
