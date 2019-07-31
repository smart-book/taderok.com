import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {QuizService} from "../../../../services/prof/quiz.service";
import {LocalDataSource, Ng2SmartTableModule} from "ng2-smart-table";
import {Proposition} from "../../../../models/Proposition";
import {Quiz} from "../../../../models/quiz";
import {Question} from "../../../../models/Question";
import {BonneReponses} from "../../../../models/BonneReponses";

@Component({
  selector: 'app-ajouter-quiz',
  templateUrl: './ajouter-quiz.component.html',
  styleUrls: ['./ajouter-quiz.component.sass']
})
export class AjouterQuizComponent implements OnInit {

  proposition: Proposition = new Proposition();
  quiz: Quiz = new Quiz();
  question: Question = new Question();
  quizadded: Object = null;
  questionadded: Object = new Object();
  etat = false;
  etat2 = true;
  propositions: Proposition[];
  questions: Question[];
  br: BonneReponses = new BonneReponses();

  constructor(private quizService: QuizService, private router: Router) {
  }

  ngOnInit() {
  }

  addQuiz(p) {
    this.quizService.addQuiz(p).subscribe(data => {
      this.quizadded = data
    });
  }
  addQuestion(question, quizid) {
    setTimeout(()=>{

      this.quizService.addQuestion(question, quizid).subscribe(data => {
      this.questionadded = data;
      console.log(this.questionadded)
    });
    this.quizService.getAllQuestions(quizid).subscribe(data=>{this.questions=data});
    })
  }
  addProposition(proposition, questionid, quizid) {
    this.quizService.addProposition(proposition, questionid).subscribe(() => console.log('proposition ajouté'));
    proposition.nom='';
    this.quizService.getAllPropositions(questionid).subscribe(data => {this.propositions=data;})
  }
  deleteProposition(id, idquestion) {
    this.quizService.deleteProposition(id).subscribe(() => console.log('supprimé'));
    this.quizService.getAllPropositions(idquestion).subscribe(data => {this.propositions=data;})
  }
  addBR(b, idquestion){
    this.quizService.addBR(b,idquestion).subscribe(data=>console.log(data));
  }
  newQuestion(quizid){
    setTimeout(()=>{
    this.quizService.getAllQuestions(quizid).subscribe(data=>{this.questions=data});
    this.question.question='';
    this.proposition.nom='';
    this.propositions=null;
  })
  }

}
