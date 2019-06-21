import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArchwizardModule } from 'angular-archwizard';
import { ProfRoutingModule } from './prof-routing.module';
import { AjouterComponent } from './reclamation/ajouter/ajouter.component';
import {FormsModule} from "@angular/forms";
import { ListQuizComponent } from './quiz/list-quiz/list-quiz.component';
import { AjouterQuizComponent } from './quiz/ajouter-quiz/ajouter-quiz.component';

@NgModule({
  declarations: [AjouterComponent, ListQuizComponent, AjouterQuizComponent],
  imports: [
    CommonModule,
    ProfRoutingModule,
    FormsModule,
    ArchwizardModule
  ]
})
export class ProfModule { }
