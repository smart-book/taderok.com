import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AjouterComponent} from './reclamation/ajouter/ajouter.component';

import {ListQuizComponent} from './quiz/list-quiz/list-quiz.component';
import {AjouterQuizComponent} from './quiz/ajouter-quiz/ajouter-quiz.component';

import {AjouterComponentGroupe} from './groupes/ajouter/ajouter.component';
import {AjouterComponentSeance} from './seance/ajouter/ajouter.component';
import {ListerComponent} from './reclamation/lister/lister.component';

import {AjouterRessourceComponent} from './ressource/ajouter-ressource/ajouter-ressource.component';
import {AfficherRessourceComponent} from "./ressource/afficher-ressource/afficher-ressource.component";
import {ListSeanceComponent} from './seance/list/list.component';
import {ListGroupeComponent} from './groupes/list/list.component';
import {AfficherFeedbackComponent} from "./feedback/afficher-feedback/afficher-feedback.component";
import {CalendarComponent} from "@fullcalendar/core/CalendarComponent";
import {CalendarProfComponent} from "./calendar-prof/calendar-prof.component";



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
  }, {
    path: 'ListSeance',
    component: ListSeanceComponent
  },
  {
    path: 'ListGroupe',
    component: ListGroupeComponent
  },
  {
    path: 'ajouterRessource',
    component: AjouterRessourceComponent
  },
  {
    path: 'afficherRessource',
    component: AfficherRessourceComponent
  },
  {
    path: 'lister',
    component: ListerComponent
  },{
    path: 'calendar',
    component: CalendarProfComponent
  },
  {
    path: 'afficherFeedbacks',
    component: AfficherFeedbackComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfRoutingModule { }
