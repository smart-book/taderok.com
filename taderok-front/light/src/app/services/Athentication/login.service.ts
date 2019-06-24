import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = 'http://localhost:8181/login';

  constructor(private http: HttpClient) {}

  // tslint:disable-next-line:ban-types
  login(user: Object): Observable<Object> {
    console.log(user);
    return this.http.post(`${this.baseUrl}`, user);
  }

  getConnectedUser(): any {
    return this.http.get<any>('http://localhost:8181/getuser');
  }

  logout(){
    localStorage.removeItem('user');
    localStorage.clear();
    window.location.reload();
    return this.http.options('http://localhost:8181/logout')
  }
}
