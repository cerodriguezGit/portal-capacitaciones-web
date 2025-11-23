import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { Curso, CursosService } from '../cursos/service/cursos.service';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-modulos',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatMenuModule],
  templateUrl: './modulos.html',
  styleUrl: './modulos.css',
})
export class Modulos {

  modulos: any[] = [];

  constructor(private router: Router, private cursosService: CursosService) {}

  ngOnInit() {
    this.cargarModulos();
  }

  cargarModulos() {
    this.cursosService.getCursos().subscribe((cursos) => {
      this.modulos = cursos.map((c: Curso) => c.modulo).filter((m, i, a) => a.indexOf(m) === i);
    });
  }

  verCursos(modulo: any) {
    this.router.navigate(['/cursos'], { state: { modulo }});
  }

  crearCurso() {
  this.router.navigate(['/admin/cursos']);
}
}
