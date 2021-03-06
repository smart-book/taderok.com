import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnnonceRoutingModule } from './annonce-routing.module';
import { AddAnnonceComponent } from './add-annonce/add-annonce.component';
import { ListAnnonceComponent } from './list-annonce/list-annonce.component';
import {ArchwizardModule} from "angular-archwizard";
import {FormsModule} from "@angular/forms";
import {DropzoneModule} from "ngx-dropzone-wrapper";
import { PhotosAnnonceComponent } from './photos-annonce/photos-annonce.component';
import { DragDropDirectiveDirective } from './drag-drop-directive.directive';
import {NgxDropzoneModule} from "ngx-dropzone";
import {UploaderModule} from "@syncfusion/ej2-angular-inputs";
import { ShowAnnonceComponent } from './show-annonce/show-annonce.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ConnectedUserListAnnonceComponent } from './connected-user-list-annonce/connected-user-list-annonce.component';
import {
  MatButtonModule, MatFormFieldModule,
  MatIconModule,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule, MatTooltipModule,
} from "@angular/material";

@NgModule({
  declarations: [AddAnnonceComponent, ListAnnonceComponent, PhotosAnnonceComponent, DragDropDirectiveDirective, DragDropDirectiveDirective, ShowAnnonceComponent, ConnectedUserListAnnonceComponent],
  imports: [
    CommonModule,
    AnnonceRoutingModule,
    ArchwizardModule,
    FormsModule,
    DropzoneModule,
    NgxDropzoneModule,
    UploaderModule,
    Ng2SearchPipeModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatPaginatorModule,
    MatFormFieldModule
  ]
})
export class AnnonceModule { }
