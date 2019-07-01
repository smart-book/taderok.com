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
  question1: Question= new Question();
  question2: Question= new Question();
  question3: Question= new Question();
  question4: Question= new Question();
  question5: Question= new Question();
  reponses1:Reponse[]=new Array();
  reponse11: Reponse=new Reponse();
  reponse12: Reponse=new Reponse();
  reponse13: Reponse=new Reponse();
  reponses2:Reponse[]=new Array();
  reponse21: Reponse=new Reponse();
  reponse22: Reponse=new Reponse();
  reponse23: Reponse=new Reponse();
  reponses3:Reponse[]=new Array();
  reponse31: Reponse=new Reponse();
  reponse32: Reponse=new Reponse();
  reponse33: Reponse=new Reponse();
  reponses4:Reponse[]=new Array();
  reponse41: Reponse=new Reponse();
  reponse42: Reponse=new Reponse();
  reponse43: Reponse=new Reponse();
  reponses5:Reponse[]=new Array();
  reponse51: Reponse=new Reponse();
  reponse52: Reponse=new Reponse();
  reponse53: Reponse=new Reponse();

  retour : any=true;
  retour1 : any=true;
   q:any;
   qs:any;
   app:any;
  constructor(private quizService : AjouterQuizService) { }

  ngOnInit() {
  }
  async ajouterQuiz(){
    this.q=await this.quizService.ajouterQuiz(this.quiz);
    console.log('quiz: '+this.q);
    this.retour=false;
  }
  async ajouterQuestion1(){
    this.reponses1.push(this.reponse11);
    this.reponses1.push(this.reponse12);
    this.reponses1.push(this.reponse13);
    this.qs= await this.quizService.getQuizById(this.q);
    this.question1.quiz=this.qs;
    console.log(this.qs)
    this.retour1=false;
    await this.quizService.ajouterQuestion(this.question1,this.qs,this.reponses1);
  }
  async ajouterQuestion2(){
    this.reponses2.push(this.reponse21);
    this.reponses2.push(this.reponse22);
    this.reponses2.push(this.reponse23);
    this.qs= await this.quizService.getQuizById(this.q);
    this.question2.quiz=this.qs;
    console.log(this.qs)
    this.retour1=true;
    await this.quizService.ajouterQuestion(this.question2,this.qs,this.reponses2);
  }
  async ajouterQuestion3(){
    this.reponses3.push(this.reponse31);
    this.reponses3.push(this.reponse32);
    this.reponses3.push(this.reponse33);
    this.qs= await this.quizService.getQuizById(this.q);
    this.question3.quiz=this.qs;
    console.log(this.qs)
    this.retour1=false;
    await this.quizService.ajouterQuestion(this.question3,this.qs,this.reponses3);
  }
  async ajouterQuestion4(){
    this.reponses4.push(this.reponse41);
    this.reponses4.push(this.reponse42);
    this.reponses4.push(this.reponse43);
    this.qs= await this.quizService.getQuizById(this.q);
    this.question4.quiz=this.qs;
    console.log(this.qs)
    this.retour1=true;
    await this.quizService.ajouterQuestion(this.question4,this.qs,this.reponses4);
  }
  async ajouterQuestion5(){
    this.reponses5.push(this.reponse51);
    this.reponses5.push(this.reponse52);
    this.reponses5.push(this.reponse53);
    this.qs= await this.quizService.getQuizById(this.q);
    this.question5.quiz=this.qs;
    console.log(this.qs)
    this.retour1=false;
    await this.quizService.ajouterQuestion(this.question5,this.qs,this.reponses5);
  }



}
