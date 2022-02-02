import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LivroModel} from "./livro-read-all/livro.model";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  baseUrl: String = environment.baseUrl

  constructor(private http: HttpClient) { }

  findAllByCategoria(id_cat: String): Observable<LivroModel[]> {
    const url = `${this.baseUrl}/livros?categoria=${id_cat}`
    return this.http.get<LivroModel[]>(url)
  }

}
