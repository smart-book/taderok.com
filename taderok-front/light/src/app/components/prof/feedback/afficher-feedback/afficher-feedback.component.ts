import { Component, OnInit } from '@angular/core';
import {FeedbackService} from 'src/app/services/prof/feedback.service';
import {Feedback} from "../../../../models/feedback";

@Component({
  selector: 'app-afficher-feedback',
  templateUrl: './afficher-feedback.component.html',
  styleUrls: ['./afficher-feedback.component.sass']
})
export class AfficherFeedbackComponent implements OnInit {

  constructor(private feedbackService: FeedbackService) { }

  ListFeedbacks: Feedback[];
  ngOnInit() {
    this.feedbackService.afficherFeedback().subscribe(data=>{console.log(data); this.ListFeedbacks=data}, error=>console.log(error),()=>console.log("done!"));
    console.log(this.ListFeedbacks);
  }

}
