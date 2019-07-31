import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {QuizService} from "../../../../services/prof/quiz.service";
import {LocalDataSource, Ng2SmartTableModule} from "ng2-smart-table";
import {Proposition} from "../../../../models/Proposition";
import {Quiz} from "../../../../models/quiz";
import {Question} from "../../../../models/Question";

@Component({
  selector: 'app-ajouter-quiz',
  templateUrl: './ajouter-quiz.component.html',
  styleUrls: ['./ajouter-quiz.component.sass']
})
export class AjouterQuizComponent implements OnInit {

  proposition: Object = new Proposition();
  quiz: Quiz = new Quiz();
  question: Question = new Question();
  quizadded: Object = new Object();
  questionadded: Object = new Object();
  etat = false;
  etat2 = true;

  settings = {
    delete: {
      confirmDelete: true,
      deleteButtonContent: 'Delete',
      saveButtonContent: 'save',
      cancelButtonContent: 'cancel'
    },
    create:{
      confirmCreate: true
    },
    columns: {
      id:{
        title: 'Id'
      },
      nom: {
        title: 'Proposition'
      }
    }
  };

  data = [];

  source: LocalDataSource;

  constructor(private quizService: QuizService, private router: Router) {
    this.source = new LocalDataSource(this.data);
  }

  ngOnInit() {
    this.quizService.getAllPropositions(251).subscribe(data => {
      this.data = data;
      console.log(this.data);
  })
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
    proposition=this.settings;
    this.quizService.addProposition(proposition, questionid).subscribe(() => console.log('proposition ajouté'));
    console.log('ajouté');
  }

  deleteProposition(id) {
    this.quizService.deleteProposition(id).subscribe(data => console.log('supprimé'));
  }

}
