import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AjouterComponent} from './reclamation/ajouter/ajouter.component'

// @ts-ignore
const routes: Routes = [
  {
    path: 'ajouter',
    component: AjouterComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfRoutingModule { }
