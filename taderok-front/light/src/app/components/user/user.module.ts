import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ProfilComponent } from './profil/profil.component';
import { AllUsersComponent } from './all-users/all-users.component';




@NgModule({
  declarations: [ProfilComponent, AllUsersComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
