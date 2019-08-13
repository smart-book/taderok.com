import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = 'http://localhost:8181/login';

  constructor(private http: HttpClient, private router: Router) {}

  // tslint:disable-next-line:ban-types
  login(user: Object): Observable<Object> {
    console.log(user);
    return this.http.post(`${this.baseUrl}`, user);
  }

  getConnectedUser(): any {
    return this.http.get<any>('http://localhost:8181/getuser');
  }
/////////// async functions
  async loginAsync(user: Object){
    console.log(user);
    return await this.http.post(`${this.baseUrl}`, user).toPromise();
  }

  async getConnectedUserAsync(){
    return await this.http.get<any>('http://localhost:8181/getuser').toPromise();
  }

  logout(){
    localStorage.removeItem('user');
    localStorage.clear();
    window.location.reload();
    this.router.navigate(['/authentication/signin']);
    return this.http.options('http://localhost:8181/logout')
  }
}
