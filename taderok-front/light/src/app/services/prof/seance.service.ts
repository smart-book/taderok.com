import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Reclamation} from "../../models/reclamation";
import {Seance} from "../../models/seance";
import {__await} from "tslib";

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

  async afficherSeanceAsync(){
    return await this.http.get<Seance[]>(`${this.baseUrl}`+`/findAll`).toPromise();
  }

  afficherSeanceParId(id): Observable<Seance>{
    return this.http.get<Seance>(`${this.baseUrl}`+`/` + id);
  }

  async afficherSeanceParIdAsync(id){
    return await this.http.get<Seance>(`${this.baseUrl}`+`/` + id).toPromise();
  }

  async afficherSeancesParProf(){
    return await this.http.get<Seance[]>(`${this.baseUrl}`+`/findAllByProf`).toPromise();
  }

  async afficherSeancesParEtudiant(){
    return await this.http.get<Seance[]>(`${this.baseUrl}`+`/findAllByStudent`).toPromise();
  }
}
