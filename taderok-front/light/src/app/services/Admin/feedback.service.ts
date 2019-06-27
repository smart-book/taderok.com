import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Feedback} from "../../models/feedback";

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http:HttpClient) { }

  afficherFeedback(): Observable<Feedback[]>{
    return this.http.get<Feedback[]>('http://localhost:8181/feedback/Feedbacks');
  }

}
