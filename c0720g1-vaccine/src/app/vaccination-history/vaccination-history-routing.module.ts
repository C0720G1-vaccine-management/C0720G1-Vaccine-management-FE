import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {VaccinationHistoryComponent} from "./vaccination-history/vaccination-history.component";
import {VaccinationHistoryFeedbackComponent} from "./vaccination-history-feedback/vaccination-history-feedback.component";



const routes: Routes = [
  {
    path: 'vaccination-history', component: VaccinationHistoryComponent,
  },
  {
    path: 'vaccination-history/feedback/:id', component: VaccinationHistoryFeedbackComponent,
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
