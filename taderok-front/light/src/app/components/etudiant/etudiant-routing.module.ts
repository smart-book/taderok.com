import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AjouterComponent} from "./feedback/ajouter/ajouter.component";

import {ListQuizComponent} from "./list-quiz/list-quiz.component";
import {PasserQuizComponent} from "./passer-quiz/passer-quiz.component";
import {ListeSeancesComponent} from "./seances/liste-seances/liste-seances.component";
import {SeanceDetailsComponent} from "./seances/seance-details/seance-details.component";




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
    path: 'listeSeances',
    component: ListeSeancesComponent
  },
  {
    path: 'seance/details/:id',
    component: SeanceDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtudiantRoutingModule { }
