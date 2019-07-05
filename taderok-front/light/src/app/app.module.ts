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
import { ProfilComponent } from './components/user/profil/profil.component';
import {UserModule} from "./components/user/user.module";

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatStepperModule, MatInputModule, MatButtonModule,
    FullCalendarModule,
    UserModule,

  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, DynamicScriptLoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
