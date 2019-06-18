import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailRoutingModule } from './email-routing.module';
import { ComposeComponent } from './compose/compose.component';
import { InboxComponent } from './inbox/inbox.component';
import { ReadMailComponent } from './read-mail/read-mail.component';

@NgModule({
  declarations: [ComposeComponent, InboxComponent, ReadMailComponent],
  imports: [
    CommonModule,
    EmailRoutingModule
  ]
})
export class EmailModule { }
