import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AjouterComponent} from './reclamation/ajouter/ajouter.component';
import {ListQuizComponent} from './quiz/list-quiz/list-quiz.component';
import {AjouterQuizComponent} from './quiz/ajouter-quiz/ajouter-quiz.component';

// @ts-ignore
const routes: Routes = [
  {
    path: 'ajouter',
    component: AjouterComponent
  },
  {
    path: 'ListQuiz',
    component: ListQuizComponent
  },

  {
    path: 'ajouterQuiz',
    component: AjouterQuizComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfRoutingModule { }
