import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Curso, CursosService } from '../cursos/service/cursos.service';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css',
})
export class PerfilComponent {

  usuario = {
    nombre: 'Usuario FullStack',
    correo: 'ejemplo@angular.com',
  };

  cursos: Curso[] = [];

  insignias: Curso[] = [];
  historico: Curso[] = [];

  constructor(private cursosService: CursosService) { }

  ngOnInit() {
    this.cursosService.getCursos().subscribe((cursos) => {
      this.cursos = cursos;
      this.insignias = this.cursos.filter(c => c.estado === 'COMPLETADO');
      this.historico = cursos.filter((c: Curso) => c.estado !== 'PENDIENTE');
    });
  }

}
