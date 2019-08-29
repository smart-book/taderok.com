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

  ajouterPhotoAnnonce(id:number,annonce: AnnoncePhoto): Observable<Object>{
    console.log(annonce);
    return this.http.post(`${this.baseUrl2}`+`/add/`+id, annonce);
  }

  getAnnonce(id:number): Observable<Annonce>{
    return this.http.get<Annonce>(`${this.baseUrl}`+`/findOne/`+id);
  }
  getPhotosAnnonce(id:number): Observable<AnnoncePhoto[]>{
    return this.http.get<AnnoncePhoto[]>(`${this.baseUrl2}`+`/get/`+id);
  }

  getAllAnnonce(): Observable<Annonce[]>{
    return this.http.get<Annonce[]>(`${this.baseUrl}`+`/findAll`);
  }

  getAllConnectedAnnonce(): Observable<Annonce[]>{
    return this.http.get<Annonce[]>(`${this.baseUrl}`+`/findAllConnected`);
  }

  async getAllAnnonceAsync() {
    return await this.http.get<Annonce[]>(`${this.baseUrl}`+`/findAll`).toPromise();
  }
}
