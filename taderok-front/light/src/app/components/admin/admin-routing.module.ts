import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListReclamationsComponent} from "./Reclamation/list-reclamations/list-reclamations.component";
import {ReclamationsTraiteesComponent} from "./Reclamation/reclamations-traitees/reclamations-traitees.component";
import {AfficherReclamationComponent} from "./Reclamation/afficher-reclamation/afficher-reclamation.component";

const routes: Routes = [
  {
    path: 'ListReclamations',
    component: ListReclamationsComponent
  },
  {
    path: 'ListReclamations1',
    component: AfficherReclamationComponent
  },
  {
    path: 'ReclamationsTraite',
    component: ReclamationsTraiteesComponent
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
