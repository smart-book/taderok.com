import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ListReclamationsComponent } from './Reclamation/list-reclamations/list-reclamations.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ReclamationsTraiteesComponent } from './Reclamation/reclamations-traitees/reclamations-traitees.component';
import {AfficherReclamationComponent} from "./Reclamation/afficher-reclamation/afficher-reclamation.component";
import {MatPaginatorModule, MatSortModule, MatTableModule} from "@angular/material";

@NgModule({
  declarations: [ListReclamationsComponent, ReclamationsTraiteesComponent,AfficherReclamationComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ]
})
export class AdminModule { }
