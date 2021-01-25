import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VaccineTransactionManagementComponent} from "./vaccine-transaction-management/vaccine-transaction-management.component";


const routes: Routes = [
  {path: '/vaccine-transaction-list', component: VaccineTransactionManagementComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VaccineTransactionManagementRoutingModule { }
