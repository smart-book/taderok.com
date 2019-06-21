import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Reclamation} from "../../models/reclamation";

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  private baseUrl = 'http://localhost:8181/Reclamation';

  constructor(private http: HttpClient) {}

  afficherReclamations(): Observable<Reclamation[]>{
    return this.http.get<Reclamation[]>(`${this.baseUrl}`+`/Admin/getAllReclamationOrderByDate`);
  }
}
