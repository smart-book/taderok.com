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
    return this.http.post(`${this.baseUrl}`+`/add/`+da.receiver.id, da);
  }

  accepterAmi(id:number): Observable<DemandeAmis>{
    return this.http.get<DemandeAmis>(`${this.baseUrl}`+`/accepter/`+id);
  }

  supprimerOuRefuserrAmi(id:number): Observable<Object>{
    return this.http.get(`${this.baseUrl}`+`/refuser/`+id);
  }

  isFriend(id:string): Observable<DemandeAmis>{
    return this.http.get<DemandeAmis>(`${this.baseUrl}`+`/isFriends/`+id);
  }
}
