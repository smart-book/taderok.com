import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Forum} from "../../models/forum";

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  private baseUrl = 'http://localhost:8181/forum';

  constructor(private http: HttpClient) {}

  afficherForum(): Observable<Forum[]>{
    return this.http.get<Forum[]>(`${this.baseUrl}`+`/findAll`);
  }

  ajouterPublication(forum: Object): Observable<Object>{
    console.log(forum);
    return this.http.post(`${this.baseUrl}`+`/add`, forum);
  }

  getPubDetails(id): Observable<Forum>{
    return this.http.get<Forum>(`${this.baseUrl}`+`/` + id)
  }
}
