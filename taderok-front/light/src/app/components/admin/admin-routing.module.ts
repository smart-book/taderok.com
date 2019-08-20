import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListReclamationsComponent} from "./Reclamation/list-reclamations/list-reclamations.component";
import {ReclamationsTraiteesComponent} from "./Reclamation/reclamations-traitees/reclamations-traitees.component";
import {AfficherReclamationComponent} from "./Reclamation/affichage-reclamation/affichage-reclamation.component";

const routes: Routes = [
  {
    path: 'ListReclamations',
    component: ListReclamationsComponent
  },
  {
    path: 'ReclamationsTraite',
    component: ReclamationsTraiteesComponent
  },
  {
    path: 'affichageReclamation',
    component: AfficherReclamationComponent
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
