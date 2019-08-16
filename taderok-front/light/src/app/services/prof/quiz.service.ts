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
  async addBR(br: Object, id: Number){
    return await this.http.post('http://localhost:8181/quiz/'+id+'/addbr', br).toPromise();
  }
  async deleteBR(id: number){
    return await this.http.delete('http://localhost:8181/quiz/'+id+'/deletebr').toPromise();
  }

  deleteQuiz(id: number): Observable<Object>{
    return this.http.delete('http://localhost:8181/quiz/'+id+'/delete');
  }
  findQuiz(id: number): Observable<Quiz>{
    return this.http.get<Quiz>('http://localhost:8181/quiz/find/'+id);
  }

  getAllQuestions(id: number): Observable<Question[]>{
    return this.http.get<Question[]>('http://localhost:8181/quiz/'+id+'/allquestions');
  }
  updateQuiz(id: number, quiz: Quiz): Observable<Quiz>{
    return this.http.put<Quiz>('http://localhost:8181/quiz/'+id+'/updatequiz', quiz);
  }
  updateQuestion(id: number, question: Question): Observable<Question>{
    return this.http.put<Question>('http://localhost:8181/quiz/'+id+'/updatequestion', question);
  }
  validateQuiz(id: number){
    return this.http.put('http://localhost:8181/quiz/'+id+'/validatequiz', null);
  }

  async getAllPropositionsAsync(id: number){
    return await this.http.get<Proposition[]>('http://localhost:8181/quiz/'+id+'/allprop').toPromise();
  }
  async addPropositionAsync(proposition: Object, id: Number){
    return await this.http.post('http://localhost:8181/quiz/'+id+'/addproposition', proposition).toPromise();
  }
  async deletePropositionAsync(id: number){
    return await this.http.delete('http://localhost:8181/quiz/'+id+'/deleteprop').toPromise();
  }
  async deleteQuestionAsync(id: number){
    return await this.http.delete('http://localhost:8181/quiz/'+id+'/deletequestion').toPromise();
  }
}
