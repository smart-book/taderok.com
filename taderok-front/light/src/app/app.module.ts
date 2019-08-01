import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatStepperModule, MatInputModule, MatButtonModule} from '@angular/material'
import { LocationStrategy, HashLocationStrategy} from '@angular/common';
import { DynamicScriptLoaderService } from './dynamic-script-loader-service.service';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { FullCalendarModule } from '@fullcalendar/angular';
import {UserModule} from "./components/user/user.module";
import {Ng2SmartTableModule} from "ng2-smart-table";
import {Ng2CompleterModule} from "ng2-completer";
import {ShowAnnonceComponent} from "./components/annonce/show-annonce/show-annonce.component";


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatStepperModule, MatInputModule, MatButtonModule,
    FullCalendarModule,
    UserModule,
    Ng2SmartTableModule,
    Ng2CompleterModule,
    UserModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, DynamicScriptLoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
