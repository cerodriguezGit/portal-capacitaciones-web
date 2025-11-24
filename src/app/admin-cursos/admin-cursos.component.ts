import { Component } from '@angular/core';
import { Curso, CursosService } from '../cursos/service/cursos.service';
import { MatIconModule } from '@angular/material/icon';
import { FormularioComponent } from '../formulario/formulario.component';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-admin-cursos',
  standalone: true,
  imports: [MatIconModule, MatTooltipModule, FormularioComponent],
  templateUrl: './admin-cursos.component.html',
  styleUrl: './admin-cursos.component.css',
})
export class AdminCursosComponent {

  cursos: Curso[] = [];
  cursoSeleccionado!: Curso;

  constructor(private cursosService: CursosService) { }

  ngOnInit(): void {
    this.cargarCursos();
  }

  cargarCursos() {
    this.cursosService.getCursos().subscribe((cursos) => {
      this.cursos = cursos;
    });
  }

  editarCurso(curso: Curso) {
    this.cursoSeleccionado = curso;
  }
}
