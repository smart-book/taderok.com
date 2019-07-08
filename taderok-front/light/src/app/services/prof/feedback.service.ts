import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Feedback} from "../../models/feedback";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {


  constructor(private http: HttpClient) {
  }

  afficherFeedback(): Observable<Feedback[]> {
    return this.http.get<Feedback[]>('http://localhost:8181/feedback/Feedbacks');
  }
}
