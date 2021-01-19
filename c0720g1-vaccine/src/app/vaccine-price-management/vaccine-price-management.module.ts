import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VaccinePriceRoutingModule} from './vaccine-price-routing.module';
import { VaccinePriceManagementComponent } from './vaccine-price-management/vaccine-price-management.component';



@NgModule({
  declarations: [VaccinePriceManagementComponent],
  exports: [
    VaccinePriceManagementComponent
  ],
  imports: [
    CommonModule,
    VaccinePriceRoutingModule
  ]
})
export class VaccinePriceManagementModule { }
