import { Component, OnInit } from '@angular/core';
import {Quiz} from "../../../../models/quiz";
import { Router } from '@angular/router';
import {QuizService} from "../../../../services/prof/quiz.service";
import {Question} from "../../../../models/Question";
import {Proposition} from "../../../../models/Proposition";
@Component({
  selector: 'app-ajouter-quiz',
  templateUrl: './ajouter-quiz.component.html',
  styleUrls: ['./ajouter-quiz.component.sass']
})
export class AjouterQuizComponent implements OnInit {
  quiz: Quiz = new Quiz();
  question: Question = new Question();
  proposition: Proposition = new Proposition();
  quizadded: Object;
  questionadded: Object;
  etat = false;
  etat2 = true;
  propositions: Proposition[]=null;

  constructor(private quizService : QuizService, private router: Router) { }

  ngOnInit() {
  }

  changementEtat() {
    if (this.etat === true) {
      this.etat = false;
      this.etat2=true;
    } else {
      this.etat = true;
      this.etat2 = false;
    }
  }

  addQuiz(p){
    this.quizService.addQuiz(p).subscribe(data => { this.quizadded = data });
  }
  addQuestion(question, quizid){
    this.quizService.addQuestion(question, quizid).subscribe(data => { this.questionadded = data; console.log(this.questionadded) });
  }

  addProposition(proposition, questionid){
  this.quizService.addProposition(proposition, questionid).subscribe(()=>console.log('proposition ajouté'));
  this.proposition.nom='';
  this.quizService.getAllPropositions(questionid).subscribe(data => {this.propositions=data ; console.log(this.propositions)});
  }

}
