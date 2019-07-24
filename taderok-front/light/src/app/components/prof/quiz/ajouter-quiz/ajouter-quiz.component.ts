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
  propositions: Proposition[] = null;
  quizfinal: Object = new Object();
  questions: Question[] = null;
  tbr: Array<String>=[];

  constructor(private quizService: QuizService, private router: Router) {
  }

  ngOnInit() {
  }

  changementEtat() {
    if (this.etat === true) {
      this.etat = false;
      this.etat2 = true;
    } else {
      this.etat = true;
      this.etat2 = false;
    }
    this.question.question = '';
    this.propositions = null;
  }

  addQuiz(p) {
    this.quizService.addQuiz(p).subscribe(data => {
      this.quizadded = data
    });
  }

  addQuestion(question, quizid) {
    this.quizService.addQuestion(question, quizid).subscribe(data => {
      this.questionadded = data;
      console.log(this.questionadded)
    });
  }

  addProposition(proposition, questionid) {
    setTimeout(() => {
      this.quizService.addProposition(proposition, questionid).subscribe(() => console.log('proposition ajouté'));
      this.proposition.nom = '';
      this.quizService.getAllPropositions(questionid).subscribe(data => {
        this.propositions = data;
        console.log(this.propositions)
      });
    })
  }

  deleteProposition(id, idquestion) {
    setTimeout(() => {
      this.quizService.deleteProposition(id).subscribe(data => console.log(data));
      this.quizService.getAllPropositions(idquestion).subscribe(data => {
        this.propositions = data;
        console.log(this.propositions)
      });
    })

  }

  findQuiz(id) {
    this.quizService.findQuiz(id).subscribe(data => {
      this.quizfinal = data;
      console.log(this.quizfinal)
    })
  }

  deleteQuestion(id, idquiz) {
    setTimeout(() => {
      this.quizService.deleteQuestion(id).subscribe(() => console.log('question supprimé'));
      this.quizService.getAllQuestions(idquiz).subscribe(data => {this.questions = data;console.log(this.questions)});
    })
  }

  addBR(br){
    if (this.tbr.length >=0){
        this.tbr.push(br);
        console.log(this.tbr);
    }
  }


}
