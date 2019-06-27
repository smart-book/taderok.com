import { Component, OnInit } from '@angular/core';
import {Feedback} from "../../../../models/feedback";
import {FeedbackService} from "../../../../services/Admin/feedback.service";

@Component({
  selector: 'app-afficher',
  templateUrl: './afficher.component.html',
  styleUrls: ['./afficher.component.sass']
})
export class AfficherComponent implements OnInit {

  constructor(private feedbackService:FeedbackService) { }

  ListFeedbacks: Feedback[];
  ngOnInit() {
    this.feedbackService.afficherFeedback().subscribe(data=>{console.log(data); this.ListFeedbacks=data}, error=>console.log(error),()=>console.log("done!"));
    console.log(this.ListFeedbacks);
  }





}
