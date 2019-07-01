import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfRoutingModule } from './prof-routing.module';
import { AjouterComponent } from './reclamation/ajouter/ajouter.component';
import {AjouterComponentGroupe} from './groupes/ajouter/ajouter.component';
import {AjouterComponentSeance} from './seance/ajouter/ajouter.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule, MatAutocompleteModule, MatSelectModule} from "@angular/material";
import { ListerComponent } from './reclamation/lister/lister.component';
import { AjouterRessourceComponent } from './ressource/ajouter-ressource/ajouter-ressource.component';
import { AfficherRessourceComponent } from './ressource/afficher-ressource/afficher-ressource.component';
import {ListSeanceComponent} from './seance/list/list.component';
import {ListGroupeComponent} from './groupes/list/list.component';
import {SweetAlert2Module} from "@sweetalert2/ngx-sweetalert2";


@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [AjouterComponent, AjouterComponentGroupe, AjouterComponentSeance, ListSeanceComponent, ListGroupeComponent, AjouterRessourceComponent, AfficherRessourceComponent,AjouterComponent, AjouterComponentGroupe,AjouterComponentSeance, ListerComponent ],
  imports: [
    CommonModule,
    ProfRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatSelectModule,
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'
    })
  ]
})
export class ProfModule { }
