import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Quiz} from "../../../models/quiz";
import {ListQuizService} from "../../../services/etudiant/list-quiz.service";
import {PasserQuizService} from "../../../services/etudiant/passer-quiz.service";

@Component({
  selector: 'app-passer-quiz',
  templateUrl: './passer-quiz.component.html',
  styleUrls: ['./passer-quiz.component.sass']
})
export class PasserQuizComponent implements OnInit {
id:any;
quiz:Quiz;
  constructor(private route: ActivatedRoute,private quizServ: PasserQuizService) { }

  async ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    console.log(this.id)
    this.quiz= await this.quizServ.getQuiz(this.id);
    console.log(this.quiz.nomQuiz)
  }

}
