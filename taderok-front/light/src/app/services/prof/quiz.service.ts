import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Quiz} from "../../models/quiz";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private baseUrl = "http://localhost:8181/quiz"

  constructor(private http: HttpClient) { }

  addQuiz(quiz: Object): Observable<Object>{
    return this.http.post('http://localhost:8181/quiz/add', quiz);
  }
  addQuestion(question: Object, id: Number): Observable<Object>{
    return this.http.post('http://localhost:8181/quiz/'+id+'/addquestion', question);
  }
}
