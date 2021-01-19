import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisteredRequiredImmunizationHistoryComponent} from './registered-required-immunization-history/registered-required-immunization-history.component';


const routes: Routes = [
  {
    path: 'registered-required-list',
    component: RegisteredRequiredImmunizationHistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class VaccinationHistoryRoutingModule { }
