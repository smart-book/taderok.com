import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Feedback} from "../../models/feedback";



@Injectable({
  providedIn: 'root'

})

export class FeedbackService {

  constructor(private http: HttpClient) { }


  private baseUrl= "http://localhost:8181/feedback";

  ajouterFeedback(feedback: object): Observable<object>{
    console.log(feedback);
    return this.http.post(`${this.baseUrl}`+'/ajouterFeedback', feedback);
  }

  afficherFeedback(): Observable<Feedback[]>{
    return this.http.get<Feedback[]>(`${this.baseUrl}`+'/Feedbacks');
  }


}
