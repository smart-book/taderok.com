import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  private baseUrl = 'http://localhost:8181/Reclamation';

  constructor(private http: HttpClient) {}

  ajouterReclamation(reclamation: Object): Observable<Object>{
    console.log(reclamation);
    return this.http.post(`${this.baseUrl}`+`/ajoutReclamation`, reclamation);
  }


}
