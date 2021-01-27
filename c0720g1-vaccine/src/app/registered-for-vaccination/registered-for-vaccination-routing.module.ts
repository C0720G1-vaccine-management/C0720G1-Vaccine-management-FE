import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CenterPeriodicVaccinationComponent} from "./center-periodic-vaccination/center-periodic-vaccination.component";
import {RegisteredRequiredVaccinationComponent} from "./registered-required-vaccination/registered-required-vaccination.component";
import {ViewRegisteredRequiredVaccinationComponent} from "./view-registered-required-vaccination/view-registered-required-vaccination.component";

import {ReactiveFormsModule} from "@angular/forms";

import {AuthGuard} from "../security/auth.guard";


const routes: Routes = [
  {
    path: 'registered-required-vaccination', component: RegisteredRequiredVaccinationComponent,canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_ADMIN']
    }
  },
  {
    path: 'registered-required-vaccination/view/:id/:idHistory', component: ViewRegisteredRequiredVaccinationComponent,canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_ADMIN']
    }
  },
  {path: 'periodic-vaccination/list', component: CenterPeriodicVaccinationComponent,canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_ADMIN']
    }},
]

@NgModule({
  declarations: [CenterPeriodicVaccinationComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule
    ],
  exports: [RouterModule]
})
export class RegisteredForVaccinationRoutingModule {
}
