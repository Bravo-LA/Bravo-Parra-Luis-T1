import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../../services/categorias.service';
import { Categoria } from '../../interfaces/categoria';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EquiposService } from '../../services/equipos.service';
import { Equipo } from '../../interfaces/equipo';
import { CategoriaPipe } from '../../core/categoria.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CategoriaPipe,
  ],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  form: FormGroup
  categorias: Categoria[] = []
  equipos: Equipo[]

  constructor(
    private _categoriasServices: CategoriasService,
    private _equipoServices: EquiposService,
    private _fb: FormBuilder,
    private router: Router
  ) {
    this.equipos = this._equipoServices.getEquipos()
    this.form = this._fb.group({
      solicitante: ['', Validators.required],
      categoria: ['', Validators.required],
      fechaEntrega: ['', Validators.required],
      fechaRegreso: ['', Validators.required],
      direccion: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.llenarCombo()
  }

  llenarCombo() {
    this.categorias = this._categoriasServices.getCategorias()
  }

  submit() {
    if (this.form.invalid) return
    const { solicitante, categoria, fechaEntrega, fechaRegreso, direccion } = this.form.value;
    const equipo: Equipo = { solicitante, categoria, fechaEntrega, fechaRegreso, direccion };
    this._equipoServices.postEquipo(equipo)
    this.equipos = this._equipoServices.getEquipos()
    this.form.reset()
  }

  information(){
    const length = this._equipoServices.getEquiposLength()
    this.router.navigate(['/informacion', length])
  }

}
