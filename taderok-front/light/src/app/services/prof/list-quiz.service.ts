import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Quiz} from "../../models/quiz";

@Injectable({
  providedIn: 'root'
})
export class ListQuizService {

  private baseUrl = 'http://localhost:8181/quiz/findAll';

  constructor(private http: HttpClient) {}
  getAllQuiz(): Observable <Quiz[]> {

    return this.http.get<Quiz[]>(this.baseUrl);

  }

}
