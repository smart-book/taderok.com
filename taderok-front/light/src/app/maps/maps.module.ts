import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { GoogleComponent } from './google/google.component';
import { VectorComponent } from './vector/vector.component';

@NgModule({
  declarations: [GoogleComponent, VectorComponent],
  imports: [
    CommonModule,
    MapsRoutingModule
  ]
})
export class MapsModule { }
