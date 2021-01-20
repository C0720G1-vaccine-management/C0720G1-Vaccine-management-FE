import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {RegisteredRequiredVaccinationComponent} from "./registered-required-vaccination/registered-required-vaccination.component";
import {CenterPeriodicVaccinationComponent} from "./center-periodic-vaccination/center-periodic-vaccination.component";

const routes: Routes = [
  {
    path: 'registered-required-vaccination', component: RegisteredRequiredVaccinationComponent,
    {path: 'center-periodic-vaccination/list', component: CenterPeriodicVaccinationComponent}
  }

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RegisteredForVaccinationRoutingModule { }
