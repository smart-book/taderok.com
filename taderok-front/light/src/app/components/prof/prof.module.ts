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
import {MatFormFieldModule, MatAutocompleteModule, MatSelectModule, MatTableModule, MatPaginatorModule, MatSortModule} from "@angular/material";
import { ListerComponent } from './reclamation/lister/lister.component';
import { AjouterRessourceComponent } from './ressource/ajouter-ressource/ajouter-ressource.component';
import { AfficherRessourceComponent } from './ressource/afficher-ressource/afficher-ressource.component';
import {ListSeanceComponent} from './seance/list/list.component';
import {ListGroupeComponent} from './groupes/list/list.component';

import {SweetAlert2Module} from "@sweetalert2/ngx-sweetalert2";
import {FullCalendarModule} from "@fullcalendar/angular";
import { CalendarProfComponent } from './calendar-prof/calendar-prof.component';
import { AfficherFeedbackComponent } from './feedback/afficher-feedback/afficher-feedback.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';




@NgModule({

  declarations: [AjouterComponent, AjouterComponentGroupe, AjouterComponentSeance, ListSeanceComponent, ListGroupeComponent, AjouterRessourceComponent, AfficherRessourceComponent,AjouterComponent, AjouterComponentGroupe,AjouterComponentSeance, ListerComponent ,ListQuizComponent,AjouterQuizComponent,CalendarProfComponent, AfficherFeedbackComponent],



  imports: [
    CommonModule,
    ProfRoutingModule,
    FormsModule,
    ArchwizardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatSelectModule,
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'
    }),
    FullCalendarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule
  ]
})
export class ProfModule { }
