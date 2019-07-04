import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtudiantRoutingModule } from './etudiant-routing.module';
import { AjouterComponent } from './feedback/ajouter/ajouter.component';
import {FormsModule} from "@angular/forms";
import { ListQuizComponent } from './list-quiz/list-quiz.component';
import { AfficherFeedbackComponent } from './feedback/afficher-feedback/afficher-feedback.component';
import {MatIconModule,MatListModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';



@NgModule({
  declarations: [AjouterComponent, ListQuizComponent, AfficherFeedbackComponent],
  imports: [
    CommonModule,
    EtudiantRoutingModule,
    FormsModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class EtudiantModule { }
