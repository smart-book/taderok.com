import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForumRoutingModule } from './forum-routing.module';
import { ForumComponent } from './forum-list/forum/forum.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PublicationDetailsComponent } from './publication/publication-details/publication-details.component';
import { ModalCommentairesComponent } from './forum-list/modal-commentaires/modal-commentaires.component';

@NgModule({
  declarations: [ForumComponent, PublicationDetailsComponent, ModalCommentairesComponent],
  imports: [
    CommonModule,
    ForumRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ForumModule { }
