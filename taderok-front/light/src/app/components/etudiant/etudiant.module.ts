import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtudiantRoutingModule } from './etudiant-routing.module';
import { AjouterComponent } from './feedback/ajouter/ajouter.component';
import {FormsModule} from "@angular/forms";
import { AfficherComponent } from './feedback/afficher/afficher.component';


@NgModule({
  declarations: [AjouterComponent, AfficherComponent],
  imports: [
    CommonModule,
    EtudiantRoutingModule,
    FormsModule
  ]
})
export class EtudiantModule { }
