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

@NgModule({
  declarations: [AddAnnonceComponent, ListAnnonceComponent, PhotosAnnonceComponent, DragDropDirectiveDirective, DragDropDirectiveDirective],
  imports: [
    CommonModule,
    AnnonceRoutingModule,
    ArchwizardModule,
    FormsModule,
    DropzoneModule,
    NgxDropzoneModule
  ]
})
export class AnnonceModule { }
