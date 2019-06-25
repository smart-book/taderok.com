import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfRoutingModule } from './prof-routing.module';
import { AjouterComponent } from './reclamation/ajouter/ajouter.component';
import {AjouterComponentGroupe} from './groupes/ajouter/ajouter.component';
import {AjouterComponentSeance} from './seance/ajouter/ajouter.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule, MatAutocompleteModule, MatSelectModule} from '@angular/material';
import { AjouterRessourceComponent } from './ressource/ajouter-ressource/ajouter-ressource.component';
import { AfficherRessourceComponent } from './ressource/afficher-ressource/afficher-ressource.component';


@NgModule({
  declarations: [AjouterComponent, AjouterComponentGroupe, AjouterComponentSeance, AjouterRessourceComponent, AfficherRessourceComponent,],

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule, MatAutocompleteModule, MatSelectModule} from "@angular/material";
import { ListSeanceComponent } from './seance/list/list.component';
import { ListGroupeComponent } from './groupes/list/list.component';


@NgModule({
  declarations: [AjouterComponent, AjouterComponentGroupe,AjouterComponentSeance, ListSeanceComponent, ListGroupeComponent],
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
