import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Quiz} from "../../models/quiz";
import {Observable} from "rxjs";
import {Proposition} from "../../models/Proposition";
import {Question} from "../../models/Question";

@Injectable({
  providedIn: 'root'
})
export class QuizService {


  constructor(private http: HttpClient) { }

  getAllQuiz(): Observable<Quiz[]>{
    return this.http.get<Quiz[]>('http://localhost:8181/quiz/allQuiz');
  }
  addQuiz(quiz: Object): Observable<Object>{
    return this.http.post('http://localhost:8181/quiz/add', quiz);
  }
  addQuestion(question: Object, id: Number): Observable<Object>{
    return this.http.post('http://localhost:8181/quiz/'+id+'/addquestion', question);
  }
  addProposition(proposition: Object, id: Number): Observable<Object>{
    return this.http.post('http://localhost:8181/quiz/'+id+'/addproposition', proposition);
  }
  addBR(br: Object, id: Number): Observable<Object>{
    return this.http.post('http://localhost:8181/quiz/'+id+'/addbr', br);
  }
  getAllPropositions(id: number): Observable<Proposition[]>{
    return this.http.get<Proposition[]>('http://localhost:8181/quiz/'+id+'/allprop');
  }
  deleteProposition(id: number): Observable<Object>{
    return this.http.delete('http://localhost:8181/quiz/'+id+'/deleteprop');
  }

}
