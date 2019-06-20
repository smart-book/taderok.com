import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfRoutingModule } from './prof-routing.module';
import { AjouterComponent } from './reclamation/ajouter/ajouter.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule, MatAutocompleteModule, MatSelectModule} from "@angular/material";


@NgModule({
  declarations: [AjouterComponent],
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
