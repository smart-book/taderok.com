import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtudiantRoutingModule } from './etudiant-routing.module';
import { AjouterComponent } from './feedback/ajouter/ajouter.component';
import {FormsModule} from "@angular/forms";
import { ListQuizComponent } from './list-quiz/list-quiz.component';

import { PasserQuizComponent } from './passer-quiz/passer-quiz.component';
import {ArchwizardModule} from "angular-archwizard";
import {SweetAlert2Module} from "@sweetalert2/ngx-sweetalert2";




@NgModule({

  declarations: [AjouterComponent, ListQuizComponent, PasserQuizComponent],

  imports: [
    ArchwizardModule,
    CommonModule,
    EtudiantRoutingModule,
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'
    }),
    FormsModule
  ]
})
export class EtudiantModule { }
