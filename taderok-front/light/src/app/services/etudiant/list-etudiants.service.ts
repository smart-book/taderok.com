import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Seance} from "../../models/seance";
import {Etudiant} from "../../models/etudiant";

@Injectable({
  providedIn: 'root'
})
export class ListEtudiantsService {

  private baseUrl = 'http://localhost:8181/etudiant';

  constructor(private http: HttpClient) {}



  afficherEtudiants(): Observable<Etudiant[]>{
    return this.http.get<Etudiant[]>(`${this.baseUrl}`+`/findAll`);
  }
}
