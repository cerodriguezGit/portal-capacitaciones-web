import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

export interface Curso {
    id: number;
    titulo: string;
    modulo: string;
    descripcion: string;
    estado: string;
}
@Injectable({
    providedIn: "root",
})
export class CursosService {

    private apiUrl = "http://localhost:8080/api/v1/cursos";

    constructor(private http: HttpClient) { }

    crearCurso(curso: any): Observable<Curso> {
        return this.http.post<any>(this.apiUrl, curso);
    }

    getCursos() {
        return this.http.get<any[]>(this.apiUrl);
    }

    actualizarCurso(id: number, curso: Curso): Observable<any> {
        return this.http.put(`${this.apiUrl}/${id}`, curso);
    }

    actualizarEstado(id: number, estado: string) {
        return this.http.patch<Curso>(`${this.apiUrl}/${id}/estado`, { estado });
    }
}