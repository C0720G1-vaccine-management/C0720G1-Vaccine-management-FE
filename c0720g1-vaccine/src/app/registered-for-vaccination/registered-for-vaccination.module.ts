import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisteredRequiredVaccinationComponent } from './registered-required-vaccination/registered-required-vaccination.component';
import {RegisteredForVaccinationRoutingModule} from "./registered-for-vaccination-routing.module";



@NgModule({
  declarations: [RegisteredRequiredVaccinationComponent],
  imports: [
    CommonModule,
    RegisteredForVaccinationRoutingModule
  ]
})
export class RegisteredForVaccinationModule { }
