import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExtraPagesRoutingModule } from './extra-pages-routing.module';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    ExtraPagesRoutingModule
  ]
})
export class ExtraPagesModule { }
