import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AjouterComponent} from './reclamation/ajouter/ajouter.component';
import {AjouterComponentGroupe} from './groupes/ajouter/ajouter.component';
import {AjouterComponentSeance} from './seance/ajouter/ajouter.component';
import {AjouterRessourceComponent} from './ressource/ajouter-ressource/ajouter-ressource.component';
import {AfficherRessourceComponent} from "./ressource/afficher-ressource/afficher-ressource.component";
import {ListSeanceComponent} from './seance/list/list.component';
import {ListGroupeComponent} from './groupes/list/list.component';

// @ts-ignore
const routes: Routes = [
  {
    path: 'ajouter',
    component: AjouterComponent
  },
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
    path: 'AfficherRessource',
    component: AfficherRessourceComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfRoutingModule { }
