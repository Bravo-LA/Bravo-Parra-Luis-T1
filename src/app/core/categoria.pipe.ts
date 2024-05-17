import { Pipe, type PipeTransform } from '@angular/core';
import { CategoriasService } from '../services/categorias.service';

@Pipe({
  name: 'categorianame',
  standalone: true,
})
export class CategoriaPipe implements PipeTransform {

  constructor(private categoriasService: CategoriasService) {}

  transform(value: number): string {
    return this.categoriasService.getCategoriaById(value)
  }

}
