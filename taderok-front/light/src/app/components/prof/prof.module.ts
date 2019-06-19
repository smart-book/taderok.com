import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfRoutingModule } from './prof-routing.module';
import { AjouterComponent } from './reclamation/ajouter/ajouter.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [AjouterComponent],
  imports: [
    CommonModule,
    ProfRoutingModule,
    FormsModule
  ]
})
export class ProfModule { }
