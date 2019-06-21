import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ListReclamationsComponent } from './Reclamation/list-reclamations/list-reclamations.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ReclamationsTraiteesComponent } from './Reclamation/reclamations-traitees/reclamations-traitees.component';

@NgModule({
  declarations: [ListReclamationsComponent, ReclamationsTraiteesComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
