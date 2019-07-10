import { Component, OnInit } from '@angular/core';
import {Quiz} from "../../../../models/quiz";
import {AjouterQuizService} from "../../../../services/prof/ajouter-quiz.service";
import {Question} from "../../../../models/Question";
import {Reponse} from "../../../../models/Reponse";
import { Router } from '@angular/router';
import {QuizService} from "../../../../services/prof/quiz.service";
@Component({
  selector: 'app-ajouter-quiz',
  templateUrl: './ajouter-quiz.component.html',
  styleUrls: ['./ajouter-quiz.component.sass']
})
export class AjouterQuizComponent implements OnInit {
  quiz: Quiz = new Quiz();

  constructor(private quizService : QuizService, private router: Router) { }

  ngOnInit() {
  }
  addQuiz(p){
    this.quizService.addQuiz(p).subscribe(data => console.log('qui ajouté'));
  }



}
