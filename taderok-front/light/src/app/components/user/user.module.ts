import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ProfilComponent } from './profil/profil.component';
import { AllUsersComponent } from './all-users/all-users.component';
import {FullCalendarModule} from "@fullcalendar/angular";
import {FormsModule} from "@angular/forms";
import { UserProfilComponent } from './user-profil/user-profil.component';




@NgModule({
  declarations: [ProfilComponent, AllUsersComponent, UserProfilComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FullCalendarModule,
    FormsModule
  ]
})
export class UserModule { }
