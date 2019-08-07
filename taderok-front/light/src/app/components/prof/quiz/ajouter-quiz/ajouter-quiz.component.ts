import { Component, OnInit } from '@angular/core';
import {QuizService} from "../../../../services/prof/quiz.service";
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
  questionadded: Object = null;
  propositions: Proposition[]=new Array();
  questions: Question[];
  br: BonneReponses = new BonneReponses();

  constructor(private quizService: QuizService) {
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
    })
    this.quizService.getAllQuestions(quizid).subscribe(data=>{this.questions=data});
  }

  addProposition(proposition, questionid) {
      this.quizService.addProposition(proposition, questionid).subscribe(() => console.log('proposition ajouté'));
    proposition.nom='';
    this.quizService.getAllPropositions(questionid).subscribe(data => {this.propositions=data;})
  }
  deleteProposition(id, quizid, questionid) {
    this.quizService.deleteProposition(id).subscribe(() => console.log('supprimé'));
    this.quizService.getAllPropositions(questionid).subscribe(data => {this.propositions=data;})
    this.quizService.getAllQuestions(quizid).subscribe(data=>{this.questions=data});
  }
  /*deletePropositionlist(id, quizid, questionid) {
    this.quizService.deleteProposition(id).subscribe(() => console.log('supprimé'));
    this.quizService.getAllPropositions(questionid).subscribe(data => {this.propositions=data;})
    this.quizService.getAllQuestions(quizid).subscribe(data=>{this.questions=data});
  }*/
  addBR(b, idquestion){
    this.quizService.addBR(b,idquestion).subscribe(data=>console.log(data));
  }
  newQuestion(quizid){
    setTimeout(()=>{
      this.quizService.getAllQuestions(quizid).subscribe(data=>{this.questions=data});
      this.question.question='';
      this.proposition.nom='';
      this.propositions=null;
      this.questionadded=null;
  })
  }
  deleteQuestion(questionid, quizid){
    setTimeout(()=>{
      this.quizService.deleteQuestion(questionid).subscribe(()=>console.log('question supprimé!'));
      this.quizService.getAllQuestions(quizid).subscribe(data=>{this.questions=data});
      this.questionadded=null;
      this.propositions=null;
      this.question.question='';
    })
  }

  updateQuiz(id, quiz){
    this.quizService.updateQuiz(id, quiz).subscribe(data=>{this.quiz=data});
  }
  updateQuestion(id, question){
    this.quizService.updateQuestion(id, question).subscribe(data=>{this.question=data});
  }
}
