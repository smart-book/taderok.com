import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AjouterQuizService {
  private baseUrl = 'http://localhost:8181/quiz';

  constructor(private http: HttpClient) {}

  ajouterQuiz(quiz: Object): Observable<Object>{
    console.log(quiz);
    return this.http.post(`${this.baseUrl}`+`/add`, quiz);
  }
}
