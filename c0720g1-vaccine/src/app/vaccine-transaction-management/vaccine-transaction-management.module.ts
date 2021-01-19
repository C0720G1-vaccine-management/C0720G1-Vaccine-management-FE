import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VaccineTransactionManagementRoutingModule} from './vaccine-transaction-management-routing.module';
import { VaccineTransactionManagementComponent } from './vaccine-transaction-management/vaccine-transaction-management.component';



@NgModule({
  declarations: [VaccineTransactionManagementComponent],
  exports: [
    VaccineTransactionManagementComponent
  ],
  imports: [
    CommonModule,
    VaccineTransactionManagementRoutingModule
  ]
})
export class VaccineTransactionManagementModule { }
