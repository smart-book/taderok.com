import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Reclamation} from "../../models/reclamation";
import {Seance} from "../../models/seance";

@Injectable({
  providedIn: 'root'
})
export class SeanceService {
  private baseUrl = 'http://localhost:8181/seance';

  constructor(private http: HttpClient) {}

  ajouterSeance(seance: Object): Observable<Object>{
    console.log(seance);
    return this.http.post(`${this.baseUrl}`+`/add`, seance);
  }

  afficherSeance(): Observable<Seance[]>{
    return this.http.get<Seance[]>(`${this.baseUrl}`+`/findAll`);
  }
}
