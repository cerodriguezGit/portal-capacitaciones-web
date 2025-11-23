import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth-guard';
import { CursosComponent } from './cursos/cursos.component';
import { ErrorComponent } from './error/error.component';
import { Modulos } from './modulos/modulos';
import { AdminCursosComponent } from './admin-cursos/admin-cursos.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'cursos', component: CursosComponent },
    { path: 'modulos', component: Modulos, canActivate: [authGuard] },
    { path: 'admin/cursos', component: AdminCursosComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', component: ErrorComponent },
];
