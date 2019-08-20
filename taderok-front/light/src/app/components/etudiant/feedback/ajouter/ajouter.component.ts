import { Component, OnInit } from '@angular/core';
import {FeedbackService} from "../../../../services/etudiant/feedback.service";
import {Feedback} from "../../../../models/feedback";
import {Router} from "@angular/router";




@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.sass']
})
export class AjouterComponent implements OnInit {

  feedback: Feedback = new Feedback();

  constructor(private feedbackService: FeedbackService) { }
  types: string[] = ['Contenu','Technique','Seance','Prof','Quiz'];
  ngOnInit() {
  }
  ajouterFeedback(){
    console.log(this.feedback.type)

    this.feedbackService.ajouterFeedback(this.feedback).subscribe( data=> console.log(data),error=>console.error(error),()=>console.log('done!'));

  }


  Redirect()
  {
    //this.router.navigate(['/components/lister']);
    window.location.reload();
  }
}
