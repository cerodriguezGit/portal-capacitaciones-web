import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private urlApi = "https://portal-capacitaciones-api.onrender.com/api/v1/auth/login";

  constructor(private http: HttpClient) { }

  login(userName: string, password: string) {
    return this.http.post<any>(this.urlApi, { userName, password }).pipe(
      tap(res => {
        if (res) {
          localStorage.setItem('token', 'token-simulado');
          localStorage.setItem('user', res.userName);
        }
      }),
      catchError((error) => {
        const message = error.error?.message || 'Credenciales inválidas';
        return throwError(() => message);
      })
    );
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.clear();
  }

  getUser() {
    return localStorage.getItem('user');
  }
}
