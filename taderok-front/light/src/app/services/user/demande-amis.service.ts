import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {DemandeAmis} from "../../models/DemandeAmis";

@Injectable({
  providedIn: 'root'
})
export class DemandeAmisService {

  private baseUrl = 'http://localhost:8181/demande'
  constructor(private http: HttpClient) { }

  ajouterAmi(da: DemandeAmis): Observable<Object>{
    console.log(da);
    return this.http.post(`${this.baseUrl}`+`/add/`+da.idReceiver, da);
  }
}
