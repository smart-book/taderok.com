import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ProfilComponent} from './profil/profil.component';
import {AllUsersComponent} from './all-users/all-users.component';
import {UserProfilComponent} from "./user-profil/user-profil.component";

const routes: Routes = [
  {
    path: 'profil',
    component: ProfilComponent
  },
  {
    path: 'userprofil/:id',
    component: UserProfilComponent
  },
  {
    path: 'list',
    component: AllUsersComponent
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
