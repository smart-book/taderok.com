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
  quiz: Quiz = new Quiz();
  quizadded: Object;
  question: Question = new Question();


  constructor(private quizService: QuizService) { }

  ngOnInit() {



  }

  addQuiz(p){
    this.quizService.addQuiz(p).subscribe(data => {this.quizadded = data });
  }
  addQuestion(q, id){
    this.quizService.addQuestion(q, id).subscribe(data => console.log('question ajouté'));
  }

}
