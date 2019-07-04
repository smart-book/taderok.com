import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {QuizEtudiant} from "../../models/QuizEtudiant";
import {Quiz} from "../../models/quiz";

@Injectable({
  providedIn: 'root'
})
export class PasserQuizService {

  private baseUrl = 'http://localhost:8181/quiz';

  constructor(private http: HttpClient) {}
  async getQuiz(id:string) {
    return await this.http.get<Quiz>(`${this.baseUrl}`+`/`+`${id}`).toPromise();

  }
}
