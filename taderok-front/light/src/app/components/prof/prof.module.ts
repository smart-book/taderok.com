import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfRoutingModule } from './prof-routing.module';
import { AjouterComponent } from './reclamation/ajouter/ajouter.component';
import {AjouterComponentGroupe} from './groupes/ajouter/ajouter.component';
import {AjouterComponentSeance} from './seance/ajouter/ajouter.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule, MatAutocompleteModule, MatSelectModule} from "@angular/material";
import { ListerComponent } from './reclamation/lister/lister.component';


@NgModule({
  declarations: [AjouterComponent, AjouterComponentGroupe,AjouterComponentSeance, ListerComponent],
  imports: [
    CommonModule,
    ProfRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatSelectModule
  ]
})
export class ProfModule { }
