import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WidgetComponent } from './widget/widget.component';
import { LocationStrategy, HashLocationStrategy} from '@angular/common';
import { DynamicScriptLoaderService } from './dynamic-script-loader-service.service';



@NgModule({
  declarations: [
    AppComponent,
    WidgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, DynamicScriptLoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
