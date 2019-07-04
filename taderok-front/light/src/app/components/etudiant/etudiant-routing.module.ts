import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AjouterComponent} from "./feedback/ajouter/ajouter.component";
import {AfficherFeedbackComponent} from "./feedback/afficher-feedback/afficher-feedback.component";


const routes: Routes = [
  {
    path:'ajouter',
    component: AjouterComponent
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
