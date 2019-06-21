import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AjouterComponent} from './reclamation/ajouter/ajouter.component';

import {ListQuizComponent} from './quiz/list-quiz/list-quiz.component';
import {AjouterQuizComponent} from './quiz/ajouter-quiz/ajouter-quiz.component';

import {AjouterComponentGroupe} from './groupes/ajouter/ajouter.component';
import {AjouterComponentSeance} from './seance/ajouter/ajouter.component';


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
    path: 'AjouterQuiz',
    component: AjouterQuizComponent},
    {
    path: 'ajouterGroupe',
    component: AjouterComponentGroupe
  },
  {
    path: 'ajouterSeance',
    component: AjouterComponentSeance
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfRoutingModule { }
