import { Component, OnInit } from '@angular/core';
import {Quiz} from "../../../../models/quiz";
import {ListQuizService} from "../../../../services/prof/list-quiz.service";
import {QuizService} from "../../../../services/prof/quiz.service";
import {Question} from "../../../../models/Question";
declare const $: any;
@Component({
  selector: 'app-list-quiz',
  templateUrl: './list-quiz.component.html',
  styleUrls: ['./list-quiz.component.sass']
})
export class ListQuizComponent implements OnInit {

  quizzes: Object[];
  quiz: Object;
  question: Question = new Question();
  etat = false;
  etat2 = true;

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.quizService.getAllQuiz().subscribe(data => {this.quizzes=data; console.log(this.quizzes)});
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

  deleteQuiz(id){
    this.quizService.deleteQuiz(id).subscribe(()=> console.log('Quiz supprimé'));
    this.quizService.getAllQuiz().subscribe(data => {this.quizzes=data; console.log(this.quizzes)});
  }

  findQuiz(id){
    this.quizService.findQuiz(id).subscribe(data=> {this.quiz=data; console.log(this.quiz)});
  }

}
