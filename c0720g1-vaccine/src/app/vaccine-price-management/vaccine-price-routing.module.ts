import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VaccinePriceManagementComponent} from './vaccine-price-management/vaccine-price-management.component';
import {EditVaccinePriceComponent} from "./edit-vaccine-price/edit-vaccine-price.component";
import {AuthGuard} from "../security/auth.guard";


const routes: Routes = [
  {path: 'vaccine-price-list', component: VaccinePriceManagementComponent,canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_ADMIN']
    }},
  {path: 'vaccine-price-edit/:id', component: EditVaccinePriceComponent,canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_ADMIN']
    }},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VaccinePriceRoutingModule { }
