import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VaccinePriceManagementComponent} from './vaccine-price-management/vaccine-price-management.component';


const routes: Routes = [
  {path: 'storage', component: VaccinePriceManagementComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VaccinePriceRoutingModule { }
