import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArchwizardModule } from 'angular-archwizard';
import { ProfRoutingModule } from './prof-routing.module';
import { AjouterComponent } from './reclamation/ajouter/ajouter.component';
import {FormsModule} from '@angular/forms';
import { ListQuizComponent } from './quiz/list-quiz/list-quiz.component';
import { AjouterQuizComponent } from './quiz/ajouter-quiz/ajouter-quiz.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AjouterComponentGroupe} from './groupes/ajouter/ajouter.component';
import {AjouterComponentSeance} from './seance/ajouter/ajouter.component';
import {ScheduleProfComponent} from "./schedule-prof/schedule-prof.component";


import {BidiModule} from '@angular/cdk/bidi';
import {ObserversModule} from '@angular/cdk/observers';
import {OverlayModule} from '@angular/cdk/overlay';
import {PlatformModule} from '@angular/cdk/platform';
import {A11yModule} from '@angular/cdk/a11y';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTreeModule} from '@angular/cdk/tree';

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
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import { ListerComponent } from './reclamation/lister/lister.component';
import { AjouterRessourceComponent } from './ressource/ajouter-ressource/ajouter-ressource.component';
import { AfficherRessourceComponent } from './ressource/afficher-ressource/afficher-ressource.component';
import {ListSeanceComponent} from './seance/list/list.component';
import {ListGroupeComponent} from './groupes/list/list.component';

import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import {FullCalendarModule} from '@fullcalendar/angular';
import { CalendarProfComponent } from './calendar-prof/calendar-prof.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { ListFeedbackComponent } from './feedback/list-feedback/list-feedback.component';
import {CdkTableModule} from '@angular/cdk/table';
import {Ng2SmartTableModule} from "ng2-smart-table";


import { ListeSeancesProfComponent } from './seance/liste-seances-prof/liste-seances-prof.component';

import { TreeViewModule } from '@syncfusion/ej2-angular-navigations';

import { DropDownListAllModule, MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';

import { MaskedTextBoxModule, UploaderAllModule, ColorPickerModule } from '@syncfusion/ej2-angular-inputs';

import { ToolbarAllModule, ContextMenuAllModule } from '@syncfusion/ej2-angular-navigations';

import { ButtonAllModule  } from '@syncfusion/ej2-angular-buttons';

import { CheckBoxAllModule } from '@syncfusion/ej2-angular-buttons';

import { DatePickerAllModule, TimePickerAllModule, DateTimePickerAllModule } from '@syncfusion/ej2-angular-calendars';

import { NumericTextBoxAllModule } from '@syncfusion/ej2-angular-inputs';

import { ScheduleAllModule, RecurrenceEditorAllModule, RecurrenceEditorModule  } from '@syncfusion/ej2-angular-schedule';

import { ArchiverRessourceComponent } from './ressource/archiver-ressource/archiver-ressource.component';
import {AjouterRessourceSeanceComponent} from './ressource/ajouter-ressource-seance/ajouter-ressource-seance.component';
import { SeanceDetailsComponent } from './seance/seance-details/seance-details.component';
import { MesSeancesComponent } from './seance/mes-seances/mes-seances.component';
import { SeanceEnCoursComponent } from './seance/seance-en-cours/seance-en-cours.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [AjouterComponent, AjouterComponentGroupe, AjouterComponentSeance, ListSeanceComponent, ListGroupeComponent, AjouterRessourceComponent, AfficherRessourceComponent,AjouterComponent, AjouterComponentGroupe,AjouterComponentSeance, ListerComponent ,ListQuizComponent,AjouterQuizComponent,CalendarProfComponent,
    ListFeedbackComponent, ScheduleProfComponent, ListeSeancesProfComponent, ArchiverRessourceComponent, AjouterRessourceSeanceComponent, SeanceDetailsComponent, MesSeancesComponent, SeanceEnCoursComponent],



  imports: [
    CommonModule,
    ProfRoutingModule,
    FormsModule,
    ArchwizardModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatSelectModule,
    BidiModule,
    ObserversModule,
    OverlayModule,
    PlatformModule,
    PortalModule,
    CdkStepperModule,
    CdkTableModule,

    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'
    }),
    FullCalendarModule,
    A11yModule,
    CdkTreeModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
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
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    ScrollingModule,
    Ng2SmartTableModule,
    ScheduleAllModule,
    RecurrenceEditorAllModule,
    RecurrenceEditorModule,
    NumericTextBoxAllModule,
    DatePickerAllModule,
    TimePickerAllModule,
    DateTimePickerAllModule,
    CheckBoxAllModule,
    ToolbarAllModule,
    DropDownListAllModule,
    ContextMenuAllModule,
    MaskedTextBoxModule,
    UploaderAllModule,
    MultiSelectAllModule,
    TreeViewModule,
    ButtonAllModule,
    ColorPickerModule,
    Ng2SearchPipeModule
  ]
})


export class ProfModule { }
