import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtudiantRoutingModule } from './etudiant-routing.module';
import { AjouterComponent } from './feedback/ajouter/ajouter.component';
import {FormsModule} from "@angular/forms";
import { ListQuizComponent } from './quiz/list-quiz/list-quiz.component';
import {ListquizComponent} from "./quiz/listquiz/listquiz.component";
import { PasserQuizComponent } from './passer-quiz/passer-quiz.component';
import {ArchwizardModule} from "angular-archwizard";
import {SweetAlert2Module} from "@sweetalert2/ngx-sweetalert2";
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule,
  MatStepperModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatTreeModule
} from '@angular/material';
import {A11yModule} from "@angular/cdk/a11y";
import {CdkTreeModule} from "@angular/cdk/tree";
import {ScrollingModule} from "@angular/cdk/scrolling";
import {BidiModule} from "@angular/cdk/bidi";
import {ObserversModule} from "@angular/cdk/observers";
import {OverlayModule} from "@angular/cdk/overlay";
import {PlatformModule} from "@angular/cdk/platform";
import {PortalModule} from "@angular/cdk/portal";
import {CdkStepperModule} from "@angular/cdk/stepper";
import {CdkTableModule} from "@angular/cdk/table";
import { ListeSeancesComponent } from './seances/liste-seances/liste-seances.component';
import { SeanceDetailsComponent } from './seances/seance-details/seance-details.component';
import {AddquizComponent} from "./quiz/addquiz/addquiz/addquiz.component";
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MesSeancesComponent } from './seances/mes-seances/mes-seances.component';
import { SeanceEnCoursComponent } from './seances/seance-en-cours/seance-en-cours.component';


@NgModule({

  declarations: [AjouterComponent,AddquizComponent, ListQuizComponent,ListquizComponent, PasserQuizComponent, ListeSeancesComponent, SeanceDetailsComponent, MesSeancesComponent, SeanceEnCoursComponent],

  imports: [
    Ng2SearchPipeModule,
    ArchwizardModule,
    CommonModule,
    EtudiantRoutingModule,
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'
    }),
    FormsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule,
    MatStepperModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatTreeModule
  ]
})
export class EtudiantModule { }
