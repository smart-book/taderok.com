import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AjouterComponent} from "./feedback/ajouter/ajouter.component";

import {ListQuizComponent} from "./list-quiz/list-quiz.component";
import {PasserQuizComponent} from "./passer-quiz/passer-quiz.component";

import {AfficherFeedbackComponent} from "./feedback/afficher-feedback/afficher-feedback.component";



const routes: Routes = [
  {
    path:'ajouter',
    component: AjouterComponent
  },
  {
    path:'ListQuiz',
    component: ListQuizComponent
  },
  {
    path: 'PasserQuiz/:id',
    component: PasserQuizComponent
  },
  {
    path:'afficher',
    component:AfficherFeedbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtudiantRoutingModule { }
