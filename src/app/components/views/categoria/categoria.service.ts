import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CategoriaModel} from "./categoria.model";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient) { }
  
  findAll():Observable<CategoriaModel[]> {
    const url = `${this.baseUrl}/categorias`
    return this.http.get<CategoriaModel[]>(url);
  }
}
