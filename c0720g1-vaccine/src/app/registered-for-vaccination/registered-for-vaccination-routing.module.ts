import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CenterPeriodicVaccinationComponent} from "./center-periodic-vaccination/center-periodic-vaccination.component";
import {RegisteredRequiredVaccinationComponent} from "./registered-required-vaccination/registered-required-vaccination.component";

const routes: Routes = [
  {
    path: 'registered-required-vaccination', component: RegisteredRequiredVaccinationComponent
  },
  {path: 'periodic-vaccination/list', component: CenterPeriodicVaccinationComponent},
]

@NgModule({
  declarations: [CenterPeriodicVaccinationComponent,RegisteredRequiredVaccinationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RegisteredForVaccinationRoutingModule {
}
