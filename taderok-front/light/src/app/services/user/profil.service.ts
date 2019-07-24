import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  private baseUrl = 'http://localhost:8181';

  constructor(private http: HttpClient) {}

  afficherProfil(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}` + `/getUser`);
  }

  getUser(id: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}` + `/user/`+id);
  }

  getFriends(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}` + `/demande/friends`);
  }

  updateProfilProf(id: number, profil: User): Observable<User> {
    console.log(id);
    return this.http.put<User>(`${this.baseUrl}` + `/updateProf/` + id , profil);
  }
  updateProfilEtudiant(id) {
    return this.http.put(`${this.baseUrl}` + `/updateEtudiant/` + id , null);
  }
  updateProfilParent(id: number): Observable<number> {
    console.log(id);
    return this.http.put<number>(`${this.baseUrl}` + `/updateParent/` + id , null);
  }
}
