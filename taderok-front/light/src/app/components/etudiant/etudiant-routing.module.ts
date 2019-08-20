import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AjouterComponent} from "./feedback/ajouter/ajouter.component";

import {PasserQuizComponent} from "./passer-quiz/passer-quiz.component";
import {ListeSeancesComponent} from "./seances/liste-seances/liste-seances.component";
import {SeanceDetailsComponent} from "./seances/seance-details/seance-details.component";

import {ListquizComponent} from "./quiz/listquiz/listquiz.component";
import {AddquizComponent} from "./quiz/addquiz/addquiz/addquiz.component";
import {ListQuizComponent} from "./quiz/list-quiz/list-quiz.component";
import {MesSeancesComponent} from "./seances/mes-seances/mes-seances.component";
import {SeanceEnCoursComponent} from "./seances/seance-en-cours/seance-en-cours.component";





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
  },
  {
    path: 'listeSeances',
    component: ListeSeancesComponent
  },
  {
    path: 'seance/details/:id',
    component: SeanceDetailsComponent
  },
  {
    path: 'mesSeances',
    component: MesSeancesComponent
  },
  {
    path: 'seanceEnCours/:id/:token',
    component: SeanceEnCoursComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtudiantRoutingModule { }
