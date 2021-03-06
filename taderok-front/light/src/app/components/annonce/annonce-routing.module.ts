import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfilComponent} from "../user/profil/profil.component";
import {UserProfilComponent} from "../user/user-profil/user-profil.component";
import {AllUsersComponent} from "../user/all-users/all-users.component";
import {ListAnnonceComponent} from "./list-annonce/list-annonce.component";
import {AddAnnonceComponent} from "./add-annonce/add-annonce.component";
import {PhotosAnnonceComponent} from "./photos-annonce/photos-annonce.component";
import {ShowAnnonceComponent} from "./show-annonce/show-annonce.component";
import {ConnectedUserListAnnonceComponent} from "./connected-user-list-annonce/connected-user-list-annonce.component";

const routes: Routes = [
  {
    path: 'list',
    component: ListAnnonceComponent
  },
  {
    path: 'mesAnnonces',
    component: ConnectedUserListAnnonceComponent
  },
  {
    path: 'add',
    component: AddAnnonceComponent
  },
  {
    path: 'photo/:id',
    component: PhotosAnnonceComponent
  },
  {
    path: 'show/:id',
    component: ShowAnnonceComponent
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnnonceRoutingModule { }
