import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Forum} from "../../models/forum";
import {HttpClient} from "@angular/common/http";
import {User} from "../../models/user";

@Injectable({
  providedIn: 'root'
})
export class AllUsersService {

  private baseUrl = 'http://localhost:8181';

  constructor(private http: HttpClient) {}

  allUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}`+`/allUsers`);
  }
  allProfs(): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}`+`/allUsers/Prof`);
  }
}
