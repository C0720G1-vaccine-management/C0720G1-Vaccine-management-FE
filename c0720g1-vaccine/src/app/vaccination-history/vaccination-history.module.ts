import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VaccinationHistoryRoutingModule} from './vaccination-history-routing.module';
import { VaccinationHistoryComponent } from './vaccination-history/vaccination-history.component';
import { VaccinationHistoryFeedbackComponent } from './vaccination-history-feedback/vaccination-history-feedback.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [ VaccinationHistoryComponent, VaccinationHistoryFeedbackComponent],
    imports: [
        CommonModule,
        VaccinationHistoryRoutingModule,
        RouterModule
    ]
})
export class VaccinationHistoryModule { }
