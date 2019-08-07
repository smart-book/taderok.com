import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AjouterComponent} from "./feedback/ajouter/ajouter.component";

import {PasserQuizComponent} from "./passer-quiz/passer-quiz.component";
import {ListquizComponent} from "./quiz/listquiz/listquiz.component";
import {AddquizComponent} from "./quiz/addquiz/addquiz/addquiz.component";
import {ListQuizComponent} from "./quiz/list-quiz/list-quiz.component";




const routes: Routes = [
  {
    path:'takequiz',
    component: AddquizComponent
  },
  {
    path:'quizs',
    component: ListquizComponent
  },

  {
    path:'findAll',
    component: ListQuizComponent
  },

  {
    path:'ajouter',
    component: AjouterComponent
  },

  {
    path: 'PasserQuiz/:id',
    component: PasserQuizComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtudiantRoutingModule { }
