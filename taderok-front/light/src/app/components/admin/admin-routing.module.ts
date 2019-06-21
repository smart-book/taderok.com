import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListReclamationsComponent} from "./Reclamation/list-reclamations/list-reclamations.component";

const routes: Routes = [
  {
    path: 'ListReclamations',
    component: ListReclamationsComponent
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
