import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {DemandeAmis} from "../../models/DemandeAmis";
import {Annonce} from "../../models/Annonce";

@Injectable({
  providedIn: 'root'
})
export class DemandeAmisService {

  private baseUrl = 'http://localhost:8181/demande'
  constructor(private http: HttpClient) { }

  async ajouterAmi(da: DemandeAmis){
    console.log(da);
    da.status="en attente";
    return await this.http.post(`${this.baseUrl}`+`/add/`+da.receiver.id, da).toPromise();
  }


  async accepterAmi(id:number){
    return await this.http.get<DemandeAmis>(`${this.baseUrl}`+`/accepter/`+id).toPromise();
  }

  async bloquerAmi(id:number){
    return await this.http.get<DemandeAmis>(`${this.baseUrl}`+`/bloquer/`+id).toPromise();
  }

  async supprimerOuRefuserrAmi(id:number){
    return await this.http.get(`${this.baseUrl}`+`/refuser/`+id).toPromise();
  }

  async isFriend(id:string){
    return await this.http.get<DemandeAmis>(`${this.baseUrl}`+`/isFriends/`+id).toPromise();
  }
}
