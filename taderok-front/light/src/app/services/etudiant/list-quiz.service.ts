import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Quiz} from "../../models/quiz";
import {QuizEtudiant} from "../../models/QuizEtudiant";

@Injectable({
  providedIn: 'root'
})
export class ListQuizService {
q:QuizEtudiant[];
  private baseUrl = 'http://localhost:8181/quiz/findQuiz/5';

  constructor(private http: HttpClient) {}
  async getAllQuiz() {
    return await this.http.get<QuizEtudiant[]>(this.baseUrl).toPromise();

  }

}
