import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppsRoutingModule } from './apps-routing.module';
import { CalendarComponent } from './calendar/calendar.component';
import { ChatComponent } from './chat/chat.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactGridComponent } from './contact-grid/contact-grid.component';
import { SupportComponent } from './support/support.component';

@NgModule({
  declarations: [CalendarComponent, ChatComponent, DragDropComponent, PortfolioComponent, ContactListComponent, ContactGridComponent, SupportComponent],
  imports: [
    CommonModule,
    AppsRoutingModule
  ]
})
export class AppsModule { }
