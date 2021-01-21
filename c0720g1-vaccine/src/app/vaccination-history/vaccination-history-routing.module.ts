import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ImmunizationHistoryComponent} from './immunization-history/immunization-history.component';
import {ImmunizationHistoryFeedbackComponent} from './immunization-history-feedback/immunization-history-feedback.component';


const routes: Routes = [
  {
    path: 'immunization-history', component: ImmunizationHistoryComponent,
  },
  {
    path: 'immunization-history/feedback', component: ImmunizationHistoryFeedbackComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class VaccinationHistoryRoutingModule { }
