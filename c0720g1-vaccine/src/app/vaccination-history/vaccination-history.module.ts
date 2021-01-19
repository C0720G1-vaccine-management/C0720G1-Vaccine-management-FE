import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisteredRequiredImmunizationHistoryComponent } from './registered-required-immunization-history/registered-required-immunization-history.component';
import {VaccinationHistoryRoutingModule} from './vaccination-history-routing.module';



@NgModule({
  declarations: [RegisteredRequiredImmunizationHistoryComponent],
  imports: [
    CommonModule,
    VaccinationHistoryRoutingModule
  ]
})
export class VaccinationHistoryModule { }
