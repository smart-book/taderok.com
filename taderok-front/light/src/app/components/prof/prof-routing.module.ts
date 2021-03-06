import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AjouterComponent} from './reclamation/ajouter/ajouter.component';

import {AjouterQuizComponent} from './quiz/ajouter-quiz/ajouter-quiz.component';

import {AjouterComponentGroupe} from './groupes/ajouter/ajouter.component';
import {AjouterComponentSeance} from './seance/ajouter/ajouter.component';
import {ListerComponent} from './reclamation/lister/lister.component';

import {AjouterRessourceComponent} from './ressource/ajouter-ressource/ajouter-ressource.component';
import {AfficherRessourceComponent} from './ressource/afficher-ressource/afficher-ressource.component';
import {ListSeanceComponent} from './seance/list/list.component';
import {ListGroupeComponent} from './groupes/list/list.component';
import {CalendarProfComponent} from './calendar-prof/calendar-prof.component';

import { ListFeedbackComponent } from './feedback/list-feedback/list-feedback.component';

import {ListQuizComponent} from './quiz/list-quiz/list-quiz.component';
import {ArchiverRessourceComponent} from './ressource/archiver-ressource/archiver-ressource.component';

import { ListeSeancesProfComponent } from './seance/liste-seances-prof/liste-seances-prof.component';
import {AjouterRessourceSeanceComponent} from './ressource/ajouter-ressource-seance/ajouter-ressource-seance.component';
import {ScheduleProfComponent} from "./schedule-prof/schedule-prof.component";
import {SeanceDetailsComponent} from "./seance/seance-details/seance-details.component";
import {MesSeancesComponent} from "./seance/mes-seances/mes-seances.component";
import {SeanceEnCoursComponent} from "./seance/seance-en-cours/seance-en-cours.component";



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
    path: 'archiverRessource',
    component: ArchiverRessourceComponent
  },
  {
    path: 'lister',
    component: ListerComponent
  },
  {

    path: 'calendar',
    component: CalendarProfComponent
  },
  {
    path: 'list',
    component: ListFeedbackComponent
  },
  {
    path: 'listeSeances',
    component: ListeSeancesProfComponent
  },
  {
    path: 'ajouterRessourceSeance',
    component: AjouterComponentSeance
  },
  {
    path: 'AjouterRessourceSeance',
    component: AjouterRessourceSeanceComponent
  },
  {
    path: 'schedule',
    component: ScheduleProfComponent
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
export class ProfRoutingModule { }
