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

}
