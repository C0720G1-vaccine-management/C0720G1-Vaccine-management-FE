import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VaccineTransactionManagementModule } from './vaccine-transaction-management/vaccine-transaction-management.module';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), VaccineTransactionManagementModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
