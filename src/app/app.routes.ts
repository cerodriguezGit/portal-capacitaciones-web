import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth-guard';
import { CursosComponent } from './cursos/cursos.component';
import { ErrorComponent } from './error/error.component';
import { ModulosComponent } from './modulos/modulos.component';
import { AdminCursosComponent } from './admin-cursos/admin-cursos.component';
import { PerfilComponent } from './perfil/perfil.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'cursos', component: CursosComponent },
    { path: 'modulos', component: ModulosComponent, canActivate: [authGuard] },
    { path: 'admin/cursos', component: AdminCursosComponent },
    { path: 'admin/perfil', component: PerfilComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', component: ErrorComponent },
];
