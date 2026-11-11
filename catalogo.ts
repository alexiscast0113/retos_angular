import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-catalogo',
  styleUrl: './catalogo.css',
  templateUrl: './catalogo.html',
})
export class Catalogo {
  productos = [
    { nombre: 'camisa', categoria: 'ropa', precio: 45000 },
    { nombre: 'zapatos', categoria: 'calzado', precio: 800000 },
    { nombre: 'pantalon', categoria: 'ropa', precio: 75000 },
    { nombre: 'medias', categoria: 'calzado', precio: 25000 },
    { nombre: 'chamarra', categoria: 'ropa', precio: 250000 },
  ]
}
