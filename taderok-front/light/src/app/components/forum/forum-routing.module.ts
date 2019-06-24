import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ForumComponent} from "./forum-list/forum/forum.component";
import {PublicationDetailsComponent} from "./publication/publication-details/publication-details.component";

const routes: Routes = [
  {
    path: 'list',
    component: ForumComponent
  },
  {
    path: 'details/:id',
    component: PublicationDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForumRoutingModule { }
