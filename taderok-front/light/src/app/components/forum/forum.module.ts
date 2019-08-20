import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForumRoutingModule } from './forum-routing.module';
import { ForumComponent } from './forum-list/forum/forum.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PublicationDetailsComponent } from './publication/publication-details/publication-details.component';
import { ModalCommentairesComponent } from './forum-list/modal-commentaires/modal-commentaires.component';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { EmojiModule } from '@ctrl/ngx-emoji-mart/ngx-emoji'
import {SweetAlert2Module} from "@sweetalert2/ngx-sweetalert2";
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {MatButtonModule} from "@angular/material";

@NgModule({
  declarations: [ForumComponent, PublicationDetailsComponent, ModalCommentairesComponent],
  imports: [
    CommonModule,
    ForumRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PickerModule,
    EmojiModule,
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'
    }),
    Ng2SearchPipeModule,
    MatButtonModule,
  ]
})
export class ForumModule { }
