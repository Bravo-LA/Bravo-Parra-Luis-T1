import { Injectable } from '@angular/core';
import { Equipo } from '../interfaces/equipo';

@Injectable({
  providedIn: 'root'
})
export class EquiposService {

  equipos: Equipo[] = []

  getEquipos(): Equipo[] {
    return this.equipos
  }

  getEquiposLength(): number {
    return this.equipos.length
  }

  postEquipo(equipo: Equipo): void {
    this.equipos.push(equipo)
  }

}
