import { Component, OnInit } from '@angular/core';
import {Quiz} from "../../../../models/quiz";
import {AjouterQuizService} from "../../../../services/prof/ajouter-quiz.service";

@Component({
  selector: 'app-ajouter-quiz',
  templateUrl: './ajouter-quiz.component.html',
  styleUrls: ['./ajouter-quiz.component.sass']
})
export class AjouterQuizComponent implements OnInit {
  quiz : Quiz = new Quiz();
  constructor(private quizService : AjouterQuizService) { }

  ngOnInit() {
  }
  ajouterQuiz(){
    console.log(this.quiz.nomQuiz);
    this.quizService.ajouterQuiz(this.quiz).subscribe(data=>console.log(data), error => console.log(error))
  }

}
