import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private baseUrl = 'http://localhost:8181/register';

  constructor(private http: HttpClient, private router: Router) {}

  // tslint:disable-next-line:ban-types
  register(user: Object): Observable<Object> {
    console.log(user);
    return this.http.post(`${this.baseUrl}`, user);
  }

  registerEtudiant(user: Object): Observable<Object> {
    console.log(user);
    return this.http.post(`http://localhost:8181/registerEtudiant`, user);
  }

  registerProf(user: Object): Observable<Object> {
    console.log(user);
    return this.http.post(`http://localhost:8181/registerProf`, user);
  }

  registerParent(user: Object): Observable<Object> {
    console.log(user);
    return this.http.post(`http://localhost:8181/registerParent`, user);
  }

}
