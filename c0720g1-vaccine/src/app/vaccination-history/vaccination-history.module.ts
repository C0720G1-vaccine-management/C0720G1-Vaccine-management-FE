import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VaccinationHistoryRoutingModule} from './vaccination-history-routing.module';
import { ImmunizationHistoryComponent } from './immunization-history/immunization-history.component';
import { ImmunizationHistoryFeedbackComponent } from './immunization-history-feedback/immunization-history-feedback.component';



@NgModule({
  declarations: [ImmunizationHistoryComponent, ImmunizationHistoryFeedbackComponent],
  imports: [
    CommonModule,
    VaccinationHistoryRoutingModule
  ]
})
export class VaccinationHistoryModule { }
