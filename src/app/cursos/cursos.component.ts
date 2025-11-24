import { Component, OnInit } from '@angular/core';
import { Curso, CursosService } from './service/cursos.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [FormsModule, CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css',
})
export class CursosComponent implements OnInit {

  cursos: Curso[] = [];
  cursoFilter: any[] = [];
  modulo: any = history.state.modulo;

  constructor(private cursosService: CursosService, private router: Router) { }

  ngOnInit(): void {
    this.cargarCursos();
  }

  cargarCursos() {
    this.cursosService.getCursos().subscribe((cursos) => {
      this.cursos = cursos;
      this.cursoFilter = cursos.filter((c: Curso) => c.modulo === this.modulo);
    });
  }

  marcarCurso(curso: Curso) {
    if (curso.estado === 'COMPLETADO') return;

    let nuevoEstado =
      curso.estado === 'PENDIENTE'
        ? 'EN_PROGRESO'
        : 'COMPLETADO';

    this.cursosService.actualizarEstado(curso.id, nuevoEstado)
      .subscribe(resp => {
        curso.estado = resp.estado;
      });
  }
}
