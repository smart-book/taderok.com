import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AjouterComponent} from "./feedback/ajouter/ajouter.component";
import {AfficherComponent} from "./feedback/afficher/afficher.component";

const routes: Routes = [
  {
    path:'ajouter',
    component: AjouterComponent
  },
  {
    path: 'afficher',
    component:AfficherComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtudiantRoutingModule { }
