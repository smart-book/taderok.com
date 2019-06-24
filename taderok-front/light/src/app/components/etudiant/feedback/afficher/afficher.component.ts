import { Component, OnInit } from '@angular/core';
import {FeedbackService} from "../../../../services/etudiant/feedback.service";
import {Feedback} from "../../../../models/feedback";

@Component({
  selector: 'app-afficher',
  templateUrl: './afficher.component.html',
  styleUrls: ['./afficher.component.sass']
})
export class AfficherComponent implements OnInit {

  list: Feedback[];

  constructor(private feedbackService: FeedbackService) { }

  ngOnInit() {
    this.feedbackService.afficherFeedback().subscribe(response=>{console.log(response);
    this.list=response;},error=>console.log(error));
  }





}
