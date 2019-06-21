import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GroupesService {

  private baseUrl = 'http://localhost:8181/groupe';

  constructor(private http: HttpClient) {}

  ajouterGroupe(groupes: Object): Observable<Object>{
    console.log(groupes);
    return this.http.post(`${this.baseUrl}`+`/add`, groupes);
  }
}