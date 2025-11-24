import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { Curso, CursosService } from '../cursos/service/cursos.service';
import { MatMenuModule } from '@angular/material/menu';
import { LoginService } from '../login/services/login.service';

@Component({
  selector: 'app-modulos',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatMenuModule],
  templateUrl: './modulos.component.html',
  styleUrl: './modulos.component.css',
})
export class ModulosComponent {

  modulos: any[] = [];

  constructor(
    private router: Router,
    private cursosService: CursosService,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.cargarModulos();
  }

  cargarModulos() {
    this.cursosService.getCursos().subscribe((cursos) => {
      this.modulos = cursos.map((c: Curso) => c.modulo).filter((m, i, a) => a.indexOf(m) === i);
    });
  }

  verCursos(modulo: any) {
    this.router.navigate(['/cursos'], { state: { modulo } });
  }

  adminCurso() {
    this.router.navigate(['/admin/cursos']);
  }

  adminPerfil() {
    this.router.navigate(['/admin/perfil']);
  }

  cerrarSesion() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
}
