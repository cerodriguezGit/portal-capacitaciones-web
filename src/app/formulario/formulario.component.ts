import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Curso, CursosService } from '../cursos/service/cursos.service';
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule, CommonModule, MatIcon],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {

  tituloInput: string | null = null;
  descripcionInput: string | null = null;
  moduloInput: string | null = null;
  estadoInput: string = "NO_INICIADO"

  constructor(private cursosService: CursosService) { }

  agregar() {
   console.log(this.tituloInput, this.descripcionInput, this.moduloInput, this.estadoInput);

    if (this.tituloInput == null || this.descripcionInput == null || this.moduloInput == null) {
      console.log('Introduce valores en descripción y valor válidos');
      return;
    }

    const curso = {
      titulo: this.tituloInput,
      descripcion: this.descripcionInput,
      modulo: this.moduloInput,
      estado: this.estadoInput
    };

    this.cursosService.crearCurso(curso).subscribe(resp => {
      alert('Curso creado con exito');
      this.limpiarFormulario();
    });
  }

  limpiarFormulario() {
    this.tituloInput = null;
    this.descripcionInput = null;
    this.moduloInput = null;
  }
}
