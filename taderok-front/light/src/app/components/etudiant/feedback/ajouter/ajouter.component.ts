import { Component, OnInit } from '@angular/core';
import {FeedbackService} from "../../../../services/etudiant/feedback.service";
import {Feedback} from "../../../../models/feedback";


@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.sass']
})
export class AjouterComponent implements OnInit {

  feedback: Feedback = new Feedback();

  constructor(private feedbackService: FeedbackService) { }

  ngOnInit() {
  }
  ajouterFeedback(){
    console.log(this.feedback.type)

    this.feedbackService.ajouterFeedback(this.feedback).subscribe( data=> console.log(data),error=>console.error(error),()=>console.log('done!'));
  }
}
