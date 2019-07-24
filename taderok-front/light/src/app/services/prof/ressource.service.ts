import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Ressource} from '../../models/ressource';
import {Feedback} from '../../models/feedback';

@Injectable({
  providedIn: 'root'
})
export class RessourceService {
  private baseUrl = 'http://localhost:8181/Ressources';

  constructor(private http: HttpClient
  ) {
  }

  ajouterRessource(ressource: Ressource, id: number): Observable<Ressource> {
    console.log(ressource);
    return this.http.post<Ressource>(`${this.baseUrl}` + `/ajouterRessources/` + `${id}`, ressource);
  }
  afficherRessource(): Observable<Ressource[]> {
    return this.http.get<Ressource[]>(`${this.baseUrl}` + `/afficherRessourcesByProf`);
  }
  supprimerRessource(id: number): Observable<Ressource> {
    return this.http.delete<Ressource>(`${this.baseUrl}` + `/supprimerRessources/` + `${id}`);
  }
  archiverRessource(ressource: Ressource[], id: number): Observable<Ressource> {
    return this.http.put<Ressource>(`${this.baseUrl}` + `/archiverRessources/` + `${id}`, ressource);
  }
}
