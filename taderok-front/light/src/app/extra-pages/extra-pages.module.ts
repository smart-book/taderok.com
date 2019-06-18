import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExtraPagesRoutingModule } from './extra-pages-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { BlankPageComponent } from './blank-page/blank-page.component';


@NgModule({
  declarations: [ProfileComponent, BlankPageComponent],
  imports: [
    CommonModule,
    ExtraPagesRoutingModule
  ]
})
export class ExtraPagesModule { }
