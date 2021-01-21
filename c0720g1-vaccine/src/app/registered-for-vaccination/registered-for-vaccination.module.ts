import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisteredRequiredVaccinationComponent } from './registered-required-vaccination/registered-required-vaccination.component';
import {RegisteredForVaccinationRoutingModule} from "./registered-for-vaccination-routing.module";
import {CenterPeriodicVaccinationComponent} from "./center-periodic-vaccination/center-periodic-vaccination.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  imports: [
    CommonModule,
    RegisteredForVaccinationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ]
})
export class RegisteredForVaccinationModule { }
