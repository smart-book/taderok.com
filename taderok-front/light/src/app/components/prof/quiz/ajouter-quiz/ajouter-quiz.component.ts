import { Component, OnInit } from '@angular/core';
import {Quiz} from "../../../../models/quiz";
import {AjouterQuizService} from "../../../../services/prof/ajouter-quiz.service";
import {Question} from "../../../../models/Question";
import {Reponse} from "../../../../models/Reponse";

@Component({
  selector: 'app-ajouter-quiz',
  templateUrl: './ajouter-quiz.component.html',
  styleUrls: ['./ajouter-quiz.component.sass']
})
export class AjouterQuizComponent implements OnInit {
  quiz : Quiz = new Quiz();
  question: Question= new Question();
  reponse1: Reponse=new Reponse();
  reponse2: Reponse=new Reponse();
  reponse3: Reponse=new Reponse();
  reponses:Reponse[]=new Array();
   retour : any=true;
  retour1 : any=true;
   q:any;
   qs:any;
   quizId:number;
   app:any;
  constructor(private quizService : AjouterQuizService) { }

  ngOnInit() {
  }
  async ajouterQuiz(){

    this.q=await this.quizService.ajouterQuiz(this.quiz);
    console.log('quiz: '+this.q);
    this.retour=false;

  }
  async ajouterQuestion(){
    this.reponses.push(this.reponse1);
    this.reponses.push(this.reponse2);
    this.reponses.push(this.reponse3);
for (let r of this.reponses) {
  console.log("rrrr")
  console.log(r)
}

    this.qs= await this.quizService.getQuizById(this.q);
    this.question.quiz=this.qs;
   console.log(this.qs)
    this.retour1=false;
   await this.quizService.ajouterQuestion(this.question,this.qs,this.reponses);
   



  }



}
