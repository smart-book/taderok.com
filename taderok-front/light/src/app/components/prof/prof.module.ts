import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArchwizardModule } from 'angular-archwizard';
import { ProfRoutingModule } from './prof-routing.module';
import { AjouterComponent } from './reclamation/ajouter/ajouter.component';
import {FormsModule} from "@angular/forms";
import { ListQuizComponent } from './quiz/list-quiz/list-quiz.component';
import { AjouterQuizComponent } from './quiz/ajouter-quiz/ajouter-quiz.component';
import {ReactiveFormsModule} from "@angular/forms";
import {AjouterComponentGroupe} from './groupes/ajouter/ajouter.component';
import {AjouterComponentSeance} from './seance/ajouter/ajouter.component';
import {MatFormFieldModule, MatAutocompleteModule, MatSelectModule} from "@angular/material";


@NgModule({
  declarations: [AjouterComponent, AjouterComponentGroupe,AjouterComponentSeance,ListQuizComponent,AjouterQuizComponent],

  imports: [
    CommonModule,
    ProfRoutingModule,
    FormsModule,
    ArchwizardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatSelectModule
  ]
})
export class ProfModule { }
