import { Component, OnInit } from '@angular/core';
import {QuizService} from "../../../../services/prof/quiz.service";
import {Proposition} from "../../../../models/Proposition";
import {Quiz} from "../../../../models/quiz";
import {Question} from "../../../../models/Question";
import {BonneReponses} from "../../../../models/BonneReponses";
import {__await} from "tslib";

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

  async addProposition(proposition, questionid) {
    await this.quizService.addPropositionAsync(proposition, questionid).then(()=>console.log('prop aadded'));
    proposition.nom='';
    this.propositions= await this.quizService.getAllPropositionsAsync(questionid);
  }
  async deleteProposition(id, quizid, questionid) {
    await this.quizService.deletePropositionAsync(id).then(()=>console.log('propo deleted'));
    this.propositions= await this.quizService.getAllPropositionsAsync(questionid);
  }
  async deletePropositionlist(id, quizid) {
    await this.quizService.deletePropositionAsync(id).then(()=>console.log('propo deleted'));
    this.quizService.getAllQuestions(quizid).subscribe(data=>{this.questions=data});
  }

  async deleteBR(id,quizid){
    await this.quizService.deleteBR(id).then(()=>console.log(''))
    this.quizService.getAllQuestions(quizid).subscribe(data=>{this.questions=data});
  }

  async addBR(p, idquestion){
    this.br.nom = p;
    console.log(this.br);
    console.log(p);
    await this.quizService.addBR(this.br,idquestion).then(()=>console.log('br ajouté'));
  }
  async addBRlist(p, idquestion, quizid){
    this.br.nom = p;
    console.log(this.br);
    console.log(p);
    await this.quizService.addBR(this.br,idquestion).then(()=>console.log('br ajoutés'));
    this.quizService.getAllQuestions(quizid).subscribe(data=>{this.questions=data});
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
  async deleteQuestion(questionid, quizid){
      await this.quizService.deleteQuestionAsync(questionid).then(()=>console.log('question deleted'))
      this.quizService.getAllQuestions(quizid).subscribe(data=>{this.questions=data});
      this.questionadded=null;
      this.propositions=null;
      this.question.question='';
  }

  updateQuiz(id, quiz){
    this.quizService.updateQuiz(id, quiz).subscribe(data=>{this.quiz=data});
    this.quizService.getAllQuestions(quiz).subscribe(data=>{this.questions=data});
  }
  updateQuestion(id, question){
    setTimeout(()=>{
      this.quizService.updateQuestion(id, question).subscribe(data=>{this.question=data});
      this.question.question=''
    })
  }

}
