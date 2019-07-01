import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AjouterQuizService {
  private baseUrl = 'http://localhost:8181/quiz';
  private baseUrl2 = 'http://localhost:8181/question';
  headers = new Headers();
  q:any;
  constructor(private http: HttpClient) {}

 async ajouterQuiz(quiz: Object){

   return await this.http.post(`${this.baseUrl}`+`/add`, quiz).toPromise();



  }
  async getQuizById(id:number){
    return await this.http.get(`${this.baseUrl}`+`/`+`${id}`).toPromise();
  }
  async ajouterQuestion(question : Object,idQ: number,reponses :Object[]){

    this.q= await this.http.post(`${this.baseUrl2}`+`/add`, question).toPromise();
    this.ajouterReponse(this.q,reponses);

 return this.q


  }
  async ajouterReponse(idQ: number,reponses :Object[]){
    let response2 = this.http.post(`${this.baseUrl2}`+`/addResponses/`+`${this.q}`, reponses).toPromise();
    console.log(response2)
    reponses.splice(0,reponses.length);
    return response2;
  }


}
