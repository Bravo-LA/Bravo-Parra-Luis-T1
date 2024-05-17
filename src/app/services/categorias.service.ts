import { Injectable } from '@angular/core';
import { Categoria } from '../interfaces/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  categorias: Categoria[] = [
    { id: 1, nombre: 'Laptops' },
    { id: 2, nombre: 'Computadoras de Escritorio' },
    { id: 3, nombre: 'Tablets' },
    { id: 4, nombre: 'Smartphones' },
    { id: 5, nombre: 'Servidores' }
  ];

  getCategorias(): Categoria[] {
    return this.categorias
  }

  getCategoriaById(id: number): string {
    const categoria = this.categorias.find(categoria => categoria.id == id);
    return categoria ? categoria.nombre : 'No existe';
  }
  

}
