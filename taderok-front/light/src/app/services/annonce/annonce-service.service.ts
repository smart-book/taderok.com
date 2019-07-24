import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DemandeAmis} from "../../models/DemandeAmis";
import {Observable} from "rxjs";
import {Annonce} from "../../models/Annonce";
import {AnnoncePhoto} from "../../models/AnnoncePhoto";

@Injectable({
  providedIn: 'root'
})
export class AnnonceServiceService {
  private baseUrl = 'http://localhost:8181/annonce'
  private baseUrl2 = 'http://localhost:8181/annoncephoto'
  constructor(private http: HttpClient) { }

  ajouterAnnonce(annonce: Annonce): Observable<Object>{
    console.log(annonce);
    return this.http.post(`${this.baseUrl}`+`/add/`, annonce);
  }

  ajouterPhotoAnnonce(annonce: AnnoncePhoto): Observable<Object>{
    console.log(annonce);
    return this.http.post(`${this.baseUrl2}`+`/add/`+annonce.annonce.id, annonce);
  }
}
