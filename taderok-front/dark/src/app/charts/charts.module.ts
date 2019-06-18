import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsRoutingModule } from './charts-routing.module';
import { EchartComponent } from './echart/echart.component';
import { MorrisComponent } from './morris/morris.component';
import { FlotComponent } from './flot/flot.component';
import { ChartjsComponent } from './chartjs/chartjs.component';
import { SparklineComponent } from './sparkline/sparkline.component';
import { KnobComponent } from './knob/knob.component';
import { ApexchartComponent } from './apexchart/apexchart.component';

@NgModule({
  declarations: [EchartComponent, MorrisComponent, FlotComponent, ChartjsComponent, SparklineComponent, KnobComponent, ApexchartComponent],
  imports: [
    CommonModule,
    ChartsRoutingModule
  ]
})
export class ChartsModule { }
