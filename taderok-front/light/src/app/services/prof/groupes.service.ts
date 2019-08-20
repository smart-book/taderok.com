import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Seance} from "../../models/seance";
import {Groupes} from "../../models/groupes";

@Injectable({
  providedIn: 'root'
})
export class GroupesService {

  private baseUrl = 'http://localhost:8181/groupe';

  constructor(private http: HttpClient) {}

  ajouterGroupe(groupes: Object): Observable<Object>{
    console.log(groupes);
    return this.http.post<Groupes>(`${this.baseUrl}`+`/addWithResponse`, groupes);
  }

  async ajouterGroupeAsync(groupes: Object){
    console.log(groupes);
    return await this.http.post(`${this.baseUrl}`+`/add`, groupes).toPromise();
  }

  afficherGroupe(): Observable<Groupes[]>{
    return this.http.get<Groupes[]>(`${this.baseUrl}`+`/findAll`);
  }

  afficherGroupeParId(idGroupe): Observable<Groupes>{
    return this.http.get<Groupes>(`${this.baseUrl}`+`/`+ idGroupe )
  }

  affecterEtudiantAGroupe(idGroupe , idEtudiant){
    return this.http.post(`${this.baseUrl}`+`/addGE/`+ idGroupe + `/` + idEtudiant, null)
  }

  quitterLeGroupe(idGroupe, idEtudiant){
    return this.http.delete(`${this.baseUrl}`+`/delete/student/`+ idGroupe + `/` + idEtudiant);
  }
}
