import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Curso, CursosService } from '../cursos/service/cursos.service';
import { MatIcon } from "@angular/material/icon";
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule, CommonModule, MatIcon, MatTooltipModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent implements OnChanges {

  tituloInput: string | null = null;
  descripcionInput: string | null = null;
  moduloInput: string | null = null;
  estadoInput: string = "PENDIENTE";

  @Input() cursoEditar: Curso | null = null;
  @Output() cursoGuardado = new EventEmitter<void>();

  constructor(private cursosService: CursosService) { }

  ngOnChanges() {
    if (this.cursoEditar) {
      this.tituloInput = this.cursoEditar.titulo;
      this.descripcionInput = this.cursoEditar.descripcion;
      this.moduloInput = this.cursoEditar.modulo;
      this.estadoInput = this.cursoEditar.estado;
    }
  }

  agregar() {
    if (!this.tituloInput || !this.descripcionInput || !this.moduloInput) {
      console.log('Introduce valores válidos');
      return;
    }

    const curso = {
      titulo: this.tituloInput,
      descripcion: this.descripcionInput,
      modulo: this.moduloInput,
      estado: this.estadoInput
    };

    //Editar
    if (this.cursoEditar && this.cursoEditar.id) {
      this.cursosService.editarCurso(this.cursoEditar.id, curso)
        .subscribe(() => {
          alert('Curso actualizado con éxito');
          this.cursoGuardado.emit();
          this.limpiarFormulario();
        });
      return;
    }

    //Crear
    this.cursosService.crearCurso(curso)
      .subscribe(() => {
        alert('Curso creado con éxito');
        this.cursoGuardado.emit();
        this.limpiarFormulario();
      });
  }


  limpiarFormulario() {
    this.tituloInput = null;
    this.descripcionInput = null;
    this.moduloInput = null;
    this.cursoEditar = null;
  }
}
