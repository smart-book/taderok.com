import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfRoutingModule } from './prof-routing.module';
import { AjouterComponent } from './reclamation/ajouter/ajouter.component';
import {FormsModule} from "@angular/forms"
import {AjouterComponentGroupe} from './groupes/ajouter/ajouter.component';
import {AjouterComponentSeance} from './seance/ajouter/ajouter.component';

@NgModule({
  declarations: [AjouterComponent, AjouterComponentGroupe,AjouterComponentSeance],
  imports: [
    CommonModule,
    ProfRoutingModule,
    FormsModule
  ]
})
export class ProfModule { }
